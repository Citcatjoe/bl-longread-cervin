// gsap-animations.js
// Placez ici toutes vos animations GSAP personnalisées

document.addEventListener('DOMContentLoaded', function() {
    // Exemple d'animation GSAP
    // gsap.to('.ma-classe', { x: 100, duration: 1 });
    $whymper = document.querySelector('.whymper');
    $whymperDate = document.querySelector('.whymper-date');
    $inoxtag = document.querySelector('.inoxtag');
    $inoxtagDate = document.querySelector('.inoxtag-date');
    $cervin = document.querySelector('.cervin');
    $sun = document.querySelector('.sun');
    $txtBg = document.querySelector('.txt-bg');
    $h1 = document.querySelector('h1');
    $h1Spans = $h1.querySelectorAll('span');


    // gsap.from($cervin, { duration: 1, y: '100%', opacity: 0, ease: 'power2.out', delay: 2.5 });
    // gsap.from($sun, { duration: 1, y: '-100%', opacity: 0, ease: 'power2.out', delay: 3 });

    tlIntro = new TimelineMax({
        paused: false,
        immediateRender: true
    }).delay(0.5); // Délai global de 2 secondes avant le début de toutes les anims

    setStageIntro();
    function setStageIntro(){
        var clearTl = new TimelineMax();
        clearTl
            .set($cervin, { autoAlpha: 1, y: "+=80%", transformOrigin: "center center"})
            .set($sun, { autoAlpha: 0, y: "-=50%", transformOrigin: "center center"})
            .set($txtBg, { autoAlpha: 0, transformOrigin: "center center"})
            .set($whymper, { autoAlpha: 1, transformPerspective:2000, rotationX:90, transformOrigin: "center 100%" })
            .set($whymperDate, { autoAlpha: 0, scale: 3, transformOrigin: "center center" })
            .set($inoxtag, { autoAlpha: 1, transformPerspective:2000, rotationX:90, transformOrigin: "center 100%" })
            .set($inoxtagDate, { autoAlpha: 0, scale: 3, transformOrigin: "center center" })
            .set($h1, { autoAlpha: 0, y: "+=20", transformOrigin: "center center"})
            .set($h1Spans, { autoAlpha: 0, y: "+=20", transformOrigin: "center center"});
            //.set($IntroAmitPupilles, { transformOrigin: "center center" })
            // .set($IntroAmitYeuxFermes, { autoAlpha: 0 })
            // .set($IntroElems, { autoAlpha: 1 })
            // .set($introFigure, { autoAlpha: 0.1, transformOrigin: "center center" })
            // .set($introTable1, { autoAlpha: 1, x: "-5px" })
            // .set($introTable2, { autoAlpha: 0, x: "-5px" })
            // .set($introTable3, { autoAlpha: 0, x: "-5px" })
            // .set($introTable4, { autoAlpha: 0, x: "-5px" })
            // .set($IntroAuteur, { autoAlpha: 0 })
            // .set($introH1a, { autoAlpha: 0, y: "+=20px" })
            // .set($introH1b, { autoAlpha: 0, y: "+=20px" })
            // .set($introSt, { autoAlpha: 0 })

            
        return clearTl;
        
    }

    gsap.to($sun, {
        rotation: 360,
        duration: 80,
        repeat: -1,
        ease: "linear",
        transformOrigin: "50% 50%"
    });

    tlIntro
        .addLabel('start')
        .to($cervin, 1, { y: '0%', ease: 'power4.out' }, 'start+=1.0')
        .to($h1, 2, { autoAlpha: 1, y: '0%', ease: 'power4.out' }, 'start+=1')
        .to($h1Spans, 2, { autoAlpha: 1, y: '0%', ease: 'power4.out' }, 'start+=1.5')
        .to($txtBg, 1, { autoAlpha: 1, ease: 'power4.out' }, 'start+=1.5')
        .to($sun, 1.25, { autoAlpha: 1, y: '0%', ease:"elastic.out(0.5)" }, 'start+=1.25')
        .to($whymper, 1, { autoAlpha: 1, rotationX:0, ease:"elastic.out(0.5)" }, 'start+=2.0')
        .to($whymperDate, 1, { autoAlpha: 1, scale: 1, ease: 'power4.out' }, 'start+=3')
        .to($inoxtag, 0.5, { autoAlpha: 1, rotationX:0, ease:"elastic.out(0.5)" }, 'start+=2.25')
        .to($inoxtagDate, 1, { autoAlpha: 1, scale: 1, ease: 'power4.out' }, 'start+=3.25')
        .to($txtBg, 1, { autoAlpha: 1, ease: 'power4.out' }, 'start+=3')
        
        .addLabel('end');
    
    // --- Parallax vertical sur scroll pour $h1, $cervin, $whymper, $inoxtag ---
    function addParallaxScroll() {
        if (!$h1 || !$cervin || !$whymper || !$inoxtag) return;
        window.addEventListener('scroll', function() {
            const scrollY = window.scrollY || window.pageYOffset;
            // Parallax factors: plus le facteur est petit, plus l'élément va "vite" (devant)
            $h1.style.transform = `translateY(${-scrollY * 0.3}px)`;
            //$cervin.style.transform = `translateY(${scrollY * 0.4}px)`;
            $whymper.style.transform = `translateY(${scrollY * 0.5}px)`;
            $whymperDate.style.transform = `translateY(${scrollY * 0.5}px)`;
            $inoxtagDate.style.transform = `translateY(${scrollY * 0.5}px)`;
            $inoxtag.style.transform = `translateY(${scrollY * 0.5}px)`;
        });
    }
    addParallaxScroll();


    // --- Animation sommets ---

    tlSommets = new TimelineMax({
        paused: true,
        immediateRender: true
    }); // Commence après un délai de 2 secondes

    $sommets = document.querySelectorAll('.sommets');

    $sommetsWetterhorn = document.querySelector('.sommets-wetterhorn');
    $txtWetterhorn = document.querySelector('.txt-wetterhorn');
    $drapWetterhorn = document.querySelector('.drap-wetterhorn');

    $sommetsMontBlancDeSaas = document.querySelector('.sommets-mont-blanc-de-saas');
    $txtMontBlancDeSaas = document.querySelector('.txt-mont-blanc-de-saas');
    $drapMontBlancDeSaas = document.querySelector('.drap-mont-blanc-de-saas');

    $sommetsGrandCombin = document.querySelector('.sommets-grand-combin');
    $txtGrandCombin = document.querySelector('.txt-grand-combin');
    $drapGrandCombin = document.querySelector('.drap-grand-combin');

    $sommetsGranParadiso = document.querySelector('.sommets-gran-paradiso');
    $txtGranParadiso = document.querySelector('.txt-gran-paradiso');
    $drapGranParadiso = document.querySelector('.drap-gran-paradiso');

    $sommetsWeisshorn = document.querySelector('.sommets-weisshorn');
    $txtWeisshorn = document.querySelector('.txt-weisshorn');
    $drapWeisshorn = document.querySelector('.drap-weisshorn');
    
    $sommetsBarreDesEcrins = document.querySelector('.sommets-barre-des-ecrins');
    $txtBarreDesEcrins = document.querySelector('.txt-barre-des-ecrins');   
    $drapBarreDesEcrins = document.querySelector('.drap-barre-des-ecrins');

    $sommetsCervin = document.querySelector('.sommets-cervin');
    $txtCervin = document.querySelector('.txt-cervin');
    $drapCervin = document.querySelector('.drap-cervin');

    setStageSommets();
    function setStageSommets(){
        var clearTl = new TimelineMax();
        clearTl
            .set($sommetsWetterhorn, { autoAlpha:1, scale: 0, transformOrigin: "center bottom"})
            .set($txtWetterhorn, { autoAlpha: 0, transformOrigin: "center center"})
            .set($drapWetterhorn, { autoAlpha: 0, y: "-=80", transformOrigin: "center center"})

            .set($sommetsMontBlancDeSaas, { autoAlpha:1, scale: 0, transformOrigin: "center bottom"})
            .set($txtMontBlancDeSaas, { autoAlpha: 0, transformOrigin: "center center"})
            .set($drapMontBlancDeSaas, { autoAlpha: 0, y: "-=80", transformOrigin: "center center"})

            .set($sommetsGrandCombin, { autoAlpha:1, scale: 0, transformOrigin: "center bottom"})
            .set($txtGrandCombin, { autoAlpha: 0, transformOrigin: "center center"})
            .set($drapGrandCombin, { autoAlpha: 0, y: "-=80", transformOrigin: "center center"})

            .set($sommetsGranParadiso, { autoAlpha:1, scale: 0, transformOrigin: "center bottom"})
            .set($txtGranParadiso, { autoAlpha: 0, transformOrigin: "center center"})
            .set($drapGranParadiso, { autoAlpha: 0, y: "-=80", transformOrigin: "center center"})

            .set($sommetsWeisshorn, { autoAlpha:1, scale: 0, transformOrigin: "center bottom"})
            .set($txtWeisshorn, { autoAlpha: 0, transformOrigin: "center center"})
            .set($drapWeisshorn, { autoAlpha: 0, y: "-=80", transformOrigin: "center center"})

            .set($sommetsBarreDesEcrins, { autoAlpha:1, scale: 0, transformOrigin: "center bottom"})
            .set($txtBarreDesEcrins, { autoAlpha: 0, transformOrigin: "center center"})
            .set($drapBarreDesEcrins, { autoAlpha: 0, y: "-=80", transformOrigin: "center center"})
            
            .set($sommetsCervin, { autoAlpha:1, scale: 0, transformOrigin: "center bottom"})
            .set($txtCervin, { autoAlpha: 0, transformOrigin: "center center"})
            .set($drapCervin, { autoAlpha: 0, y: "-=80", transformOrigin: "center center"});

            
        return clearTl; 
        
    }

    tlSommets
        .addLabel('start')
        .to($sommetsWetterhorn, 1.5, { scale: 1, ease:"elastic.out(0.5)"}, 'start')
        .to($txtWetterhorn, 1, { autoAlpha: 1, ease: 'power4.out' }, 'start')
        .to($sommetsMontBlancDeSaas, 1.5, { scale: 1, ease:"elastic.out(0.5)" }, 'start')
        .to($txtMontBlancDeSaas, 1, { autoAlpha: 1, ease: 'power4.out' }, 'start')
        .to($sommetsGrandCombin, 1.5, { scale: 1, ease:"elastic.out(0.5)" }, 'start')
        .to($txtGrandCombin, 1, { autoAlpha: 1, ease: 'power4.out' }, 'start')
        .to($sommetsGranParadiso, 1.5, { scale: 1, ease:"elastic.out(0.5)" }, 'start')
        .to($txtGranParadiso, 1, { autoAlpha: 1, ease: 'power4.out' }, 'start')

        .to($sommetsWeisshorn, 1.5, { scale: 1, ease:"elastic.out(0.5)" }, 'start+=0.75')
        .to($txtWeisshorn, 1, { autoAlpha: 1, ease: 'power4.out' }, 'start+=0.75')
        .to($sommetsBarreDesEcrins, 1.5, { scale: 1, ease:"elastic.out(0.5)" }, 'start+=0.75')
        .to($txtBarreDesEcrins, 1, { autoAlpha: 1, ease: 'power4.out' }, 'start+=0.75')
        .to($sommetsCervin, 1.5, { scale: 1, ease:"elastic.out(0.5)" }, 'start+=0.75')
        .to($txtCervin, 1, { autoAlpha: 1, ease: 'power4.out' }, 'start+=0.75')

        .to($drapWetterhorn, 0.5, { autoAlpha: 1, ease: 'power4.out' })
        .to($drapWetterhorn, 1, { y: '0%', ease: 'power4.out' }, '-=0.25')

        .to($drapMontBlancDeSaas, 0.5, { autoAlpha: 1, ease: 'power4.out' }, '-=0.75')
        .to($drapMontBlancDeSaas, 1, { y: '0%', ease: 'power4.out' }, '-=0.25')

        .to($drapGrandCombin, 0.5, { autoAlpha: 1, ease: 'power4.out' }, '-=0.75')
        .to($drapGrandCombin, 1, { y: '0%', ease: 'power4.out' }, '-=0.25')

        .to($drapGranParadiso, 0.5, { autoAlpha: 1, ease: 'power4.out' }, '-=0.75')
        .to($drapGranParadiso, 1, { y: '0%', ease: 'power4.out' }, '-=0.25')

        .to($drapWeisshorn, 0.5, { autoAlpha: 1, ease: 'power4.out' }, '-=0.75')
        .to($drapWeisshorn, 1, { y: '0%', ease: 'power4.out' }, '-=0.25')

        .to($drapBarreDesEcrins, 0.5, { autoAlpha: 1, ease: 'power4.out' }, '-=0.75')
        .to($drapBarreDesEcrins, 1, { y: '0%', ease: 'power4.out' }, '-=0.25')

        .to($drapCervin, 0.5, { autoAlpha: 1, ease: 'power4.out' }, '-=0.75')
        .to($drapCervin, 1, { y: '0%', ease: 'power4.out' }, '-=0.25')



        // .to($sommetsWetterhorn, 1, { scale: 1, ease:"elastic.out(0.5)" })
        // .to($sommetsMontBlancDeSaas, 1, { scale: 1, ease:"elastic.out(0.5)" }, '-=0.75')
        // .to($sommetsGrandCombin, 1, { scale: 1, ease:"elastic.out(0.5)" }, '-=0.75')
        // .to($sommetsGranParadiso, 1, { scale: 1, ease:"elastic.out(0.5)" }, '-=0.75')
        // .to($sommetsWeisshorn, 1, { scale: 1, ease:"elastic.out(0.5)" }, '-=0.75')
        // .to($sommetsBarreDesEcrins, 1, { scale: 1, ease:"elastic.out(0.5)" }, '-=0.75')
        // .to($sommetsCervin, 1, { scale: 1, ease:"elastic.out(0.5)" }, '-=0.75')

        // .to($txtWetterhorn, 1, { autoAlpha: 1, ease: 'power4.out' })
        // .to($txtMontBlancDeSaas, 1, { autoAlpha: 1, ease: 'power4.out' }, '-=0.5')
        // .to($txtGrandCombin, 1, { autoAlpha: 1, ease: 'power4.out' }, '-=0.5')
        // .to($txtGranParadiso, 1, { autoAlpha: 1, ease: 'power4.out' }, '-=0.5')
        
        // .to($drapWetterhorn, 0.5, { autoAlpha: 1, ease: 'power4.out' })
        // .to($drapWetterhorn, 1, { y: '0%', ease: 'power4.out' }, '-=0.25')
        // .to($drapMontBlancDeSaas, 0.5, { autoAlpha: 1, ease: 'power4.out' }, '-=0.5')
        // .to($drapMontBlancDeSaas, 1, { y: '0%', ease: 'power4.out' }, '-=0.25')
        // .to($drapGrandCombin, 0.5, { autoAlpha: 1, ease: 'power4.out' }, '-=0.5')
        // .to($drapGrandCombin, 1, { y: '0%', ease: 'power4.out' }, '-=0.25')
        // .to($drapGranParadiso, 0.5, { autoAlpha: 1, ease: 'power4.out' }, '-=0.5')
        // .to($drapGranParadiso, 1, { y: '0%', ease: 'power4.out' }, '-=0.25')

        // .to($txtWeisshorn, 1, { autoAlpha: 1, ease: 'power4.out' })
        // .to($txtBarreDesEcrins, 1, { autoAlpha: 1, ease: 'power4.out' }, '-=0.5')
        // .to($txtCervin, 1, { autoAlpha: 1, ease: 'power4.out' }, '-=0.5')

        // .to($drapWeisshorn, 0.5, { autoAlpha: 1, ease: 'power4.out' })
        // .to($drapWeisshorn, 1, { y: '0%', ease: 'power4.out' }, '-=0.25')
        // .to($drapBarreDesEcrins, 0.5, { autoAlpha: 1, ease: 'power4.out' }, '-=0.5')
        // .to($drapBarreDesEcrins, 1, { y: '0%', ease: 'power4.out' }, '-=0.25')
        // .to($drapCervin, 0.5, { autoAlpha: 1, ease: 'power4.out' }, '-=0.5')
        // .to($drapCervin, 1, { y: '0%', ease: 'power4.out' }, '-=0.25')


       
    // --- ScrollMagic trigger pour lancer tlSommets ---
    if (window.ScrollMagic) {
        var controller = controller || new ScrollMagic.Controller();
        new ScrollMagic.Scene({
            triggerElement: '.sommets-container',
            triggerHook: 0.45, // 0 = top, 1 = bottom, ajuste selon besoin
        })
        .on('enter', function () {
            if (tlSommets && tlSommets.paused()) tlSommets.play();
        })
        //.addIndicators({ name: 'startSommets' }) // retire si prod
        .addTo(controller);
    }


    // ALPINISTE
    $alpiniste = document.querySelector('.alpiniste');
    $hotspot = document.querySelectorAll('.hotspot');

    tlAlpiniste = new TimelineMax({
        paused: true,
        immediateRender: true
    }); // Commence après un délai de 2 secondes

    setStageAlpiniste();
    function setStageAlpiniste(){
        var clearTl = new TimelineMax();
        clearTl
            .set($alpiniste, { autoAlpha: 0, x: "+=20", transformOrigin: "center center"})
            .set($hotspot, { autoAlpha: 0, scale: 2, transformOrigin: "center center"});
            

            
        return clearTl; 
        
    }

    tlAlpiniste
        .to($alpiniste, 1, { autoAlpha: 1, x: '0%', ease: 'power4.out' })
        .staggerTo($hotspot, 1, { autoAlpha: 1, scale: 1, ease: 'power4.out' }, 0.2, '-=0.5')
        .eventCallback('onComplete', highlightHotspot);

    // Animation hotspot : scale 2 -> 1, 3 fois
    function highlightHotspot() {
        if (!$hotspot || !$hotspot.length) return;
        gsap.to($hotspot, {
            scale: 1.3,
            duration: 0.25,
            yoyo: true,
            repeat: 5, // 3 cycles = 6 mouvements (aller-retour)
            repeatDelay: 0.08,
            ease: "power1.inOut",
            onComplete: function() {
                gsap.to($hotspot, { scale: 1, duration: 0.2, ease: "power1.inOut" });
            }
        });
    }

    // Animation scale sur hover d'un hotspot
    document.querySelectorAll('.hotspot').forEach(function(hotspot) {
        hotspot.addEventListener('mouseenter', function() {
            gsap.to(hotspot, { scale: 1.3, duration: 0.25, ease: 'power2.out' });
        });
        hotspot.addEventListener('mouseleave', function() {
            gsap.to(hotspot, { scale: 1, duration: 0.25, ease: 'power2.out' });
        });
    });

    // --- ScrollMagic trigger pour lancer tlAlpiniste ---
    if (window.ScrollMagic) {
        var controller = controller || new ScrollMagic.Controller();
        new ScrollMagic.Scene({
            triggerElement: '.alpiniste-container',
            triggerHook: 0.45, // 0 = top, 1 = bottom, ajuste selon besoin
        })
        .on('enter', function () {
            if (tlAlpiniste && tlAlpiniste.paused()) tlAlpiniste.play();
        })
        //.addIndicators({ name: 'startAlpiniste' }) // retire si prod
        .addTo(controller);
    }


    // Animation Mortalité

    $mortalite = document.querySelector('.mortalite');
    $mortaliteBg = document.querySelector('.mortalite-bg');
    $mortalite8 = document.querySelector('.mortalite-8');
    $mortalite16 = document.querySelector('.mortalite-16');
    $mortalite24 = document.querySelector('.mortalite-24');
    $mortalite60 = document.querySelector('.mortalite-60');
    $bar1 = document.querySelector('.mortalite svg #mortalite-bar-1 rect')
    $bar1Border = document.querySelector('.mortalite svg #mortalite-bar-1 rect:last-of-type');
    $bar2 = document.querySelector('.mortalite svg #mortalite-bar-2 rect')
    $bar2Border = document.querySelector('.mortalite svg #mortalite-bar-2 rect:last-of-type');
    $bar3 = document.querySelector('.mortalite svg #mortalite-bar-3 rect')
    $bar3Border = document.querySelector('.mortalite svg #mortalite-bar-3 rect:last-of-type');
    $bar4 = document.querySelector('.mortalite svg #mortalite-bar-4 rect')
    $bar4Border = document.querySelector('.mortalite svg #mortalite-bar-4 rect:last-of-type');

    tlMortalite = new TimelineMax({
        paused: true,
        immediateRender: true
    }).delay(5); // Commence après un délai de 5 secondes

    setStageMortalite();
    function setStageMortalite(){
        var clearTl = new TimelineMax();
        clearTl
            //.set($mortaliteBg, { autoAlpha: 0, transformOrigin: "center center"})
            .set($mortalite8, { autoAlpha: 0, y: "+=10", transformOrigin: "center center"})
            .set($mortalite16, { autoAlpha: 0, y: "+=10", transformOrigin: "center center"})
            .set($mortalite24, { autoAlpha: 0, y: "+=10", transformOrigin: "center center"})
            .set($mortalite60, { autoAlpha: 0, y: "+=10", transformOrigin: "center center"})

            .set($bar1, { autoAlpha: 1, y: "+=32",  height: "0%", transformOrigin: "center center"})
            .set($bar1Border, { autoAlpha: 1, y: "+=32", height: "0%", transformOrigin: "center center"})

            .set($bar2, { autoAlpha: 1, y: "+=64",  height: "0%", transformOrigin: "center center"})
            .set($bar2Border, { autoAlpha: 1, y: "+=64", height: "0%", transformOrigin: "center center"})
            
            .set($bar3, { autoAlpha: 1, y: "+=98",  height: "0%", transformOrigin: "center center"})
            .set($bar3Border, { autoAlpha: 1, y: "+=98", height: "0%", transformOrigin: "center center"})
            
            .set($bar4, { autoAlpha: 1, y: "+=239",  height: "0%", transformOrigin: "center center"})
            .set($bar4Border, { autoAlpha: 1, y: "+=239", height: "0%", transformOrigin: "center center"});
            

            
        return clearTl; 


        
    }

    tlMortalite
        //.to($mortaliteBg, 1, { autoAlpha: 1, ease: 'power4.out' })

        .to($bar1, 1, { y: '0px', height: '32px', ease: 'power4.out' })
        .to($bar1Border, 1, { y: '-=32px', height: '32px', ease: 'power4.out' }, '-=1')
        .to($mortalite8, 1, { autoAlpha: 1, y: '0px', ease: 'power4.out' }, '-=0.5')

        .to($bar2, 1, { y: '0px', height: '64px', ease: 'power4.out' }, '-=0.5')
        .to($bar2Border, 1, { y: '-=64px', height: '64px', ease: 'power4.out' }, '-=1')
        .to($mortalite16, 1, { autoAlpha: 1, y: '0px', ease: 'power4.out' }, '-=0.5')
        
        .to($bar3, 1, { y: '0px', height: '98px', ease: 'power4.out' }, '-=0.5')
        .to($bar3Border, 1, { y: '-=98px', height: '98px', ease: 'power4.out' }, '-=1')
        .to($mortalite24, 1, { autoAlpha: 1, y: '0px', ease: 'power4.out' }, '-=0.5')
        
        .to($bar4, 1, { y: '0px', height: '239px', ease: 'power4.out' }, '-=0.5')
        .to($bar4Border, 1, { y: '-=239px', height: '239px', ease: 'power4.out' }, '-=1')
        .to($mortalite60, 1, { autoAlpha: 1, y: '0px', ease: 'power4.out' }, '-=0.5');
    

    // --- ScrollMagic trigger pour lancer m ---
    if (window.ScrollMagic) {
        var controller = controller || new ScrollMagic.Controller();
        new ScrollMagic.Scene({
            triggerElement: '.alpiniste-container',
            triggerHook: 0.45, // 0 = top, 1 = bottom, ajuste selon besoin
        })
        .on('enter', function () {
            if (tlAlpiniste && tlAlpiniste.paused()) tlAlpiniste.play();
        })
        //.addIndicators({ name: 'startAlpiniste' }) // retire si prod
        .addTo(controller);
    }

    // --- ScrollMagic trigger pour lancer tlMortalite ---
    if (window.ScrollMagic) {
        var controller = controller || new ScrollMagic.Controller();
        new ScrollMagic.Scene({
            triggerElement: '.mortalite',
            triggerHook: 0.45, // 0 = top, 1 = bottom, ajuste selon besoin
        })
        .on('enter', function () {
            if (tlMortalite && tlMortalite.paused()) tlMortalite.play();
        })
        //.addIndicators({ name: 'startMortalite' }) // retire si prod
        .addTo(controller);
    }



    // --- Fonction shakeFirstGroup ---
    function shakeFirstGroup() {
        var $cardWhymper = document.querySelector('.card-whymper');
        var $cardDouglas = document.querySelector('.card-douglas');
        if ($cardWhymper) {
            $cardWhymper.classList.add('is-flipped');
            $cardDouglas.classList.add('is-flipped');
            // gsap.fromTo($cardWhymper, {
            //     x: -10
            // }, {
            //     x: 10,
            //     duration: 0.1,
            //     repeat: 5,
            //     yoyo: true,
            //     ease: 'power1.inOut',
            //     onComplete: function() {
            //         gsap.to($cardWhymper, { x: 0, duration: 0.1 });
            //     }
            // });
            setTimeout(function() {
                $cardWhymper.classList.remove('is-flipped');
                $cardDouglas.classList.remove('is-flipped');
            }, 500);
           
        }
    }

    // --- ScrollMagic trigger pour shake sur .card-whymper ---
    if (window.ScrollMagic) {
        var controller = controller || new ScrollMagic.Controller();
        new ScrollMagic.Scene({
            triggerElement: '.card-whymper',
            triggerHook: 0.6, // Ajuste selon besoin
            reverse: false
        })
        .on('enter', function () {
            shakeFirstGroup();
        })
        //.addIndicators({ name: 'shakeWhymper' }) // retire si prod
        .addTo(controller);
    }


    // --- Fonction shakeSecondGroup ---
    function shakeSecondGroup() {
        var $cardCarrel = document.querySelector('.card-carrel');
        if ($cardCarrel) {
            $cardCarrel.classList.add('is-flipped');
            // gsap.fromTo($cardWhymper, {
            //     x: -10
            // }, {
            //     x: 10,
            //     duration: 0.1,
            //     repeat: 5,
            //     yoyo: true,
            //     ease: 'power1.inOut',
            //     onComplete: function() {
            //         gsap.to($cardWhymper, { x: 0, duration: 0.1 });
            //     }
            // });
            setTimeout(function() {
                $cardCarrel.classList.remove('is-flipped');
            }, 500);
           
        }
    }

    // --- ScrollMagic trigger pour shake sur .card-whymper ---
    if (window.ScrollMagic) {
        var controller = controller || new ScrollMagic.Controller();
        new ScrollMagic.Scene({
            triggerElement: '.card-carrel',
            triggerHook: 0.6, // Ajuste selon besoin
            reverse: false
        })
        .on('enter', function () {
            shakeSecondGroup();
        })
        //.addIndicators({ name: 'shakeWhymper' }) // retire si prod
        .addTo(controller);
    }

    // --- Fonction shakeThirdGroup ---
    function shakeThirdGroup() {
        var $cardHudson = document.querySelector('.card-hudson');
        var $cardHadow = document.querySelector('.card-hadow');
        if ($cardHudson) {
            $cardHudson.classList.add('is-flipped');
            $cardHadow.classList.add('is-flipped');
            // gsap.fromTo($cardWhymper, {
            //     x: -10
            // }, {
            //     x: 10,
            //     duration: 0.1,
            //     repeat: 5,
            //     yoyo: true,
            //     ease: 'power1.inOut',
            //     onComplete: function() {
            //         gsap.to($cardWhymper, { x: 0, duration: 0.1 });
            //     }
            // });
            setTimeout(function() {
                $cardHudson.classList.remove('is-flipped');
                $cardHadow.classList.remove('is-flipped');
            }, 500);
           
        }
    }

    // --- ScrollMagic trigger pour shake sur .card-whymper ---
    if (window.ScrollMagic) {
        var controller = controller || new ScrollMagic.Controller();
        new ScrollMagic.Scene({
            triggerElement: '.card-hudson',
            triggerHook: 0.6, // Ajuste selon besoin
            reverse: false
        })
        .on('enter', function () {
            shakeThirdGroup();
        })
        //.addIndicators({ name: 'shakeWhymper' }) // retire si prod
        .addTo(controller);
    }


    // --- Fonction shakeFourthGroup ---
    function shakeFourthGroup() {
        var $cardCroz = document.querySelector('.card-croz');
        var $cardTaugwalderPere = document.querySelector('.card-taugwalder-pere');
        var $cardTaugwalderFils = document.querySelector('.card-taugwalder-fils');
        if ($cardCroz) {
            $cardCroz.classList.add('is-flipped');
            $cardTaugwalderPere.classList.add('is-flipped');
            $cardTaugwalderFils.classList.add('is-flipped');
            // TODO : ajouter animation de secousse
            // gsap.fromTo($cardWhymper, {
            //     x: -10
            // }, {
            //     x: 10,
            //     duration: 0.1,
            //     repeat: 5,
            //     yoyo: true,
            //     ease: 'power1.inOut',
            //     onComplete: function() {
            //         gsap.to($cardWhymper, { x: 0, duration: 0.1 });
            //     }
            // });
            setTimeout(function() {
                $cardCroz.classList.remove('is-flipped');
                $cardTaugwalderPere.classList.remove('is-flipped');
                $cardTaugwalderFils.classList.remove('is-flipped');
            }, 500);
           
        }
    }

    // --- ScrollMagic trigger pour shake sur .card-whymper ---
    if (window.ScrollMagic) {
        var controller = controller || new ScrollMagic.Controller();
        new ScrollMagic.Scene({
            triggerElement: '.card-croz',
            triggerHook: 0.6, // Ajuste selon besoin
            reverse: false
        })
        .on('enter', function () {
            shakeFourthGroup();
        })
        //.addIndicators({ name: 'shakeWhymper' }) // retire si prod
        .addTo(controller);
    }

    



});
