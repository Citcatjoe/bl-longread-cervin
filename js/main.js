(function($) {

    window.scrollTo(0, 0);

    setTimeout(function() { 
        bodyTl.play();
        //openingTl.play();
    }, 1000);

    $(document).ready(function () {


        // TOOLTIP
        new jBox('Tooltip', {
            attach: '.tooltip',
            trigger: 'click',
            closeOnMouseleave: false,
            closeButton: true,
            maxWidth: 350,
            position: {x: 'center', y: 'top'},
            offset: {x: 0, y: -10},
            animation: 'move'
        });








        const canvas = document.getElementById('canvas');
        const context = canvas.getContext('2d');

        const frameCount = 450; // Nombre total d'images mis à jour
        const currentFrame = (index) => `img/this/sequence/frame_${index.toString().padStart(4, '0')}.webp`;

        const images = [];
        const imageSequence = {
            frame: 0,
        };

        let hasFired = false; // Drapeau pour vérifier si fire() a déjà été exécutée

        const scene = new ScrollMagic.Scene({
          triggerElement: "#test",
          triggerHook: 0.5, // Trigger when the element is in the middle of the viewport
        })
          .on("enter", function () {
            if (!hasFired) { // Vérifie si fire() n'a pas encore été exécutée
              fire();
                hasFired = true; // Marque fire() comme exécutée
            }
          })
          //.addIndicators({ name: "Scene 1" }) // Add indicators for debugging
          .addTo(controller);

        function fire() {
          let imagesLoaded = 0; // Compteur pour suivre le nombre d'images chargées

        // Précharger les images
        for (let i = 1; i <= frameCount; i++) {
            const img = new Image();
            img.src = currentFrame(i);
            img.onload = () => {
                imagesLoaded++;
                const progress = Math.round((imagesLoaded / frameCount) * 100);
                console.log(`Chargement : ${progress}%`);
                $('.loading #value').html(progress + '%');
                if (imagesLoaded === frameCount) {
                    startAnimation();
                }
            };
            images.push(img);
            
        }

        // Fonction pour démarrer l'animation après le préchargement
        const startAnimation = () => {
            $('.loading').remove();
            // Charger la première image pour définir la taille du canvas
            canvas.width = images[0].width;
            canvas.height = images[0].height;
            context.drawImage(images[0], 0, 0);

            // Fonction pour dessiner l'image actuelle sur le canvas
            const render = () => {
                const currentImage = images[Math.floor(imageSequence.frame)];
                if (currentImage) {
                    context.clearRect(0, 0, canvas.width, canvas.height);
                    context.drawImage(currentImage, 0, 0);
                }
            };

            // Enregistrer le plugin ScrollTrigger
            gsap.registerPlugin(ScrollTrigger);

            // GSAP pour animer la séquence d'images
            gsap.to(imageSequence, {
                frame: frameCount - 1,
                snap: 'frame', // Ensures frames are integers
                ease: 'power1.inOut', // Smooth easing for momentum-like effect
                scrollTrigger: {
                    trigger: "#canvas-container",
                    start: "top top",
                    end: "+=9000", // Adjust duration for smoother scrolling
                    scrub: 1, // Adds a delay to create a momentum effect
                    pin: true,
                    markers: false,
                },
                onUpdate: render, // Updates the canvas with the current frame
            });
        };
        }

        

        // Animation de la carte

        let isZoomed = false; // Flag to track zoom state
        let $currentZoomedCard = null; // Stocker l'élément actuellement zoomé

        // Gestion du clic sur une carte
        $('.card').on('click', function () {
            const $thisCard = $(this); // L'élément .card cliqué
            const $parentWrapper = $thisCard.parent(); // Son parent direct (ex: .card-wrapper)
            const $grandParent = $parentWrapper.parent(); // Le parent du parent

            // Toujours mettre le z-index du parent, du grand-parent et de la carte à 1000 pour garantir qu'ils soient au-dessus
            $parentWrapper.css('z-index', 1000);
            $thisCard.css('z-index', 1000);
            $grandParent.css({'z-index': 1000, 'position': 'relative'});

            // Cas 1 : Une autre carte est déjà zoomée et ce n'est pas celle-ci
            if ($currentZoomedCard && $currentZoomedCard[0] !== $thisCard[0]) {
                const $prevParent = $currentZoomedCard.parent();
                const $prevGrandParent = $prevParent.parent();
                $currentZoomedCard.removeClass('is-flipped'); // Retirer la classe de zoom de l'ancienne carte
                gsap.to($currentZoomedCard, {
                    duration: 0.5,
                    x: 0,
                    y: 0,
                    scale: 1,
                    ease: 'power2.out',
                    onComplete: function () {
                        // Réinitialiser les z-index et position du parent, grand-parent et de la carte précédente
                        $currentZoomedCard.css('z-index', '');
                        $prevParent.css('z-index', '');
                        $prevGrandParent.css({'z-index': '', 'position': ''});
                        $currentZoomedCard = null;
                        // Lancer le zoom de la nouvelle carte
                        zoomCard($thisCard);
                    }
                });
            // Cas 2 : Aucune carte n'est zoomée
            } else if (!isZoomed) {
                zoomCard($thisCard); // Zoomer directement
            // Cas 3 : On clique sur la carte déjà zoomée pour la refermer
            } else {
                $thisCard.removeClass('is-flipped'); // Retirer la classe de zoom
                gsap.to($thisCard, {
                    duration: 0.5,
                    x: 0,
                    y: 0,
                    scale: 1,
                    ease: 'power2.out',
                    onComplete: function () {
                        // Réinitialiser les z-index et position du parent, grand-parent et de la carte après l'animation
                        $thisCard.css('z-index', '');
                        $parentWrapper.css('z-index', '');
                        $grandParent.css({'z-index': '', 'position': ''});
                        // Débloquer le scroll et réinitialiser les flags
                        $('body').removeClass('overflow-hidden');
                        isZoomed = false;
                        $currentZoomedCard = null;
                    }
                });
            }
        });

        function zoomCard($card) {
            $card.addClass('is-flipped');
            const rect = $card[0].getBoundingClientRect();
            const viewportWidth = $(window).width();
            const viewportHeight = $(window).height();
            const centerX = (viewportWidth - rect.width) / 2;
            const centerY = (viewportHeight - rect.height) / 2;
            const targetHeight = viewportHeight * 0.75;
            const targetWidth = viewportWidth * 0.95; // marge latérale
            const scaleFactorHeight = targetHeight / rect.height;
            const scaleFactorWidth = targetWidth / rect.width;
            const scaleFactor = Math.min(scaleFactorHeight, scaleFactorWidth);
            $('body').addClass('overflow-hidden');
            $card.css('z-index', 39);
            $card.parent().css('z-index', 39);
            $card.parent().parent().css({'z-index': 39, 'position': 'relative'});
            gsap.to($card, {
                duration: 0.5,
                x: centerX - rect.left,
                y: centerY - rect.top,
                scale: scaleFactor,
                ease: 'power2.out'
            });
            isZoomed = true;
            $currentZoomedCard = $card;
        }

        $('.card').on('mouseenter', function () {
            const $thisCard = $(this); // Cibler uniquement l'élément survolé

            // Ne pas animer si l'élément est actuellement zoomé
            if ($currentZoomedCard && $currentZoomedCard[0] === $thisCard[0]) {
                return;
            }

            // Animer un léger zoom et un soulèvement au survol
            gsap.to($thisCard, {
                duration: 0.1,
                y: -10, // Soulèvement
                ease: 'power2.out' // Réduction de l'élasticité
            });
        });

        $('.card').on('mouseleave', function () {
            const $thisCard = $(this); // Cibler uniquement l'élément quitté

            // Ne pas animer si l'élément est actuellement zoomé
            if ($currentZoomedCard && $currentZoomedCard[0] === $thisCard[0]) {
                return;
            }

            // Revenir à l'état initial
            gsap.to($thisCard, {
                duration: 0.1,
                y: 0, // Retour à la position initiale
                ease: 'power2.out' // Réduction de l'élasticité
            });
        });

        $('.card .back button').on('click', function() {
            $(this).parent().parent().removeClass('is-flipped');
            // $('.jBox-closeButton').trigger('click');
        });

        // --- Gestion automatique de la classe is-rotated pour éviter les bugs de stacking context avec le canvas ---
        if (window.ScrollTrigger) {
            ScrollTrigger.create({
                trigger: "#canvas-container",
                start: "top bottom",
                end: "bottom top",
                onEnter: () => {
                    $(".card").parent().removeClass("is-rotated");
                },
                onEnterBack: () => {
                    $(".card").parent().removeClass("is-rotated");
                },
                onLeave: () => {
                    $(".card").parent().addClass("is-rotated");
                },
                onLeaveBack: () => {
                    $(".card").parent().addClass("is-rotated");
                }
            });
        }

        if ($(window).width() < 767) {
            $('.encart').addClass('is-hidden');
            $('.encart-txt').text('Ouvrir');
        }
        // Toggle .is-hidden sur .encart au clic sur #encart-btn
        $('#encart-btn').on('click', function() {
            $('.encart').toggleClass('is-hidden');
            if ($('.encart').hasClass('is-hidden')) {
                $('.encart-txt').html('Ouvrir');
            } else {
                $('.encart-txt').html('Réduire');
            }
        });

    });

    var controller = new ScrollMagic.Controller();
    var $body = $('body');
    var bodyTl = new TimelineMax({ paused: true })
        .to($body, 0.15, { autoAlpha: 1, ease: Power4.easeInOut });



    $( 'audio' ).audioPlayer();
    
       
    hideBody();
    function hideBody(){
        var hideBodyTl = new TimelineMax();
        hideBodyTl
            .set($body, { autoAlpha: 0 });
        return hideBodyTl;
    }

})(jQuery);