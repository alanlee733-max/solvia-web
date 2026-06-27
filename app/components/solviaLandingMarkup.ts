export const markup = String.raw`<div style="--accent:#c08a2e; --accent-soft:#e6b652; --hero-dark:0.06; background:#f6ece4; color:#221d16; font-family:'Jost','Noto Sans KR',sans-serif; -webkit-font-smoothing:antialiased; overflow-x:hidden;">

  <header id="dc-header" style="position:fixed; top:0; left:0; right:0; z-index:50; display:flex; align-items:center; justify-content:space-between; padding:22px clamp(24px,5vw,72px); color:#fffdf9; border-bottom:1px solid transparent; transition:background .5s ease, color .5s ease, border-color .5s ease, backdrop-filter .5s ease;">
    <a href="#top" style="text-decoration:none; color:inherit; display:flex; align-items:baseline; gap:10px;">
      <span style="font-family:'Cormorant Garamond',serif; font-weight:600; font-size:26px; letter-spacing:0.32em; padding-left:0.32em;">SOLVIA</span>
      <span style="width:5px; height:5px; border-radius:50%; background:var(--accent-soft,#e6b652); align-self:center; transform:translateY(-2px);"></span>
      <span style="font-family:'Jost',sans-serif; font-weight:400; font-size:10px; letter-spacing:0.42em; opacity:0.85; padding-left:0.42em;">MEDICAL</span>
    </a>
    <nav class="nav-desktop" style="display:flex; align-items:center; gap:clamp(20px,3vw,44px); font-size:12px; letter-spacing:0.18em; text-transform:uppercase;">
      <a href="#journey" style="color:inherit; text-decoration:none; opacity:0.85;">Journey</a>
      <a href="#products" style="color:inherit; text-decoration:none; opacity:0.85;">Disciplines</a>
      <a href="#products" style="color:inherit; text-decoration:none; opacity:0.85;">Brands</a>
      <a href="/ovalla" style="color:inherit; text-decoration:none; opacity:0.85;">Ovalla</a>
      <a href="#global" style="color:inherit; text-decoration:none; opacity:0.85;">Global</a>
      <a href="#contact" style="display:inline-flex; align-items:center; gap:8px; color:inherit; text-decoration:none; border:1px solid currentColor; padding:9px 18px; border-radius:999px; opacity:0.95;">Contact<span style="font-size:14px; line-height:1;">→</span></a>
    </nav>
    <button type="button" id="nav-burger" class="nav-burger" aria-label="Open menu" style="background:none; border:0; color:inherit; width:44px; height:44px; display:inline-flex; align-items:center; justify-content:center; cursor:pointer; padding:0;">
      <span style="display:block; width:26px; height:1.5px; background:currentColor; box-shadow:0 7px 0 currentColor;"></span>
    </button>
  </header>

  <!-- MOBILE NAV OVERLAY -->
  <div id="mnav-overlay" class="mnav-overlay" style="position:fixed; inset:0; z-index:60; background:#2e211c; color:#f4ecdd; display:flex; flex-direction:column;">
    <div style="display:flex; align-items:center; justify-content:space-between; padding:22px clamp(24px,5vw,40px);">
      <span style="display:flex; align-items:baseline; gap:9px; color:#fffdf9;">
        <span style="font-family:'Cormorant Garamond',serif; font-weight:600; font-size:24px; letter-spacing:0.32em; padding-left:0.32em;">SOLVIA</span>
        <span style="width:5px; height:5px; border-radius:50%; background:var(--accent-soft,#e6b652); align-self:center; transform:translateY(-2px);"></span>
      </span>
      <button type="button" id="mnav-close" aria-label="Close menu" style="background:none; border:0; color:inherit; width:44px; height:44px; display:inline-flex; align-items:center; justify-content:center; cursor:pointer; font-family:'Jost',sans-serif; font-size:30px; line-height:1; font-weight:300;">×</button>
    </div>
    <nav id="mnav-links" style="flex:1; display:flex; flex-direction:column; justify-content:center; gap:clamp(6px,1.4vh,14px); padding:0 clamp(28px,7vw,52px);">
      <a class="mnav-link" href="#journey" style="font-family:'Nanum Myeongjo',serif; font-weight:400; font-size:clamp(34px,9vw,52px); color:#fffdf9; text-decoration:none; line-height:1.18;">Journey</a>
      <a class="mnav-link" href="#products" style="font-family:'Nanum Myeongjo',serif; font-weight:400; font-size:clamp(34px,9vw,52px); color:#fffdf9; text-decoration:none; line-height:1.18;">Disciplines</a>
      <a class="mnav-link" href="#products" style="font-family:'Nanum Myeongjo',serif; font-weight:400; font-size:clamp(34px,9vw,52px); color:#fffdf9; text-decoration:none; line-height:1.18;">Brands</a>
      <a class="mnav-link" href="/ovalla" style="font-family:'Nanum Myeongjo',serif; font-weight:400; font-size:clamp(34px,9vw,52px); color:#fffdf9; text-decoration:none; line-height:1.18;">Ovalla</a>
      <a class="mnav-link" href="#global" style="font-family:'Nanum Myeongjo',serif; font-weight:400; font-size:clamp(34px,9vw,52px); color:#fffdf9; text-decoration:none; line-height:1.18;">Global</a>
    </nav>
    <div style="padding:0 clamp(28px,7vw,52px) clamp(36px,7vh,56px);">
      <a href="#contact" id="mnav-contact" style="display:flex; align-items:center; justify-content:center; gap:10px; background:var(--accent,#c08a2e); color:#1c1408; text-decoration:none; padding:18px 28px; border-radius:999px; font-size:13px; letter-spacing:0.16em; text-transform:uppercase; font-weight:500;">Contact<span style="font-size:15px; line-height:1;">→</span></a>
    </div>
  </div>

  <main id="top">

    <!-- HERO -->
    <section class="hero-sec" data-vpos="bottom" data-halign="left" data-orbs="on" data-cue="on" style="position:relative; height:100vh; min-height:640px; overflow:hidden; display:flex; align-items:flex-end;">
      <picture id="dc-hero" style="position:absolute; inset:0; width:100%; height:100%; transform:scale(1.08); will-change:transform;">
        <source media="(max-width:760px)" srcset="/assets/hero-bloom-mobile.webp">
        <img src="/assets/hero-bloom.webp" alt="" style="width:100%; height:100%; object-fit:cover;">
      </picture>
      <div class="hero-grad" style="position:absolute; inset:0; background:linear-gradient(180deg, rgba(46,26,22,0.40) 0%, rgba(46,26,22,0.04) 22%, transparent 50%, rgba(50,24,20,0.46) 74%, rgba(46,22,18,0.86) 100%);"></div>
      <div style="position:absolute; inset:0; background:#3a1e18; opacity:var(--hero-dark,0.06); mix-blend-mode:multiply;"></div>
      <span class="hero-orb" style="position:absolute; left:22%; top:38%; width:120px; height:120px; border-radius:50%; background:radial-gradient(circle, rgba(230,182,82,0.5), transparent 70%); filter:blur(8px); animation:drift 9s ease-in-out infinite;"></span>
      <span class="hero-orb" style="position:absolute; left:58%; top:30%; width:80px; height:80px; border-radius:50%; background:radial-gradient(circle, rgba(230,182,82,0.45), transparent 70%); filter:blur(6px); animation:drift 11s ease-in-out 1.5s infinite;"></span>
      <span class="hero-orb" style="position:absolute; left:44%; top:48%; width:60px; height:60px; border-radius:50%; background:radial-gradient(circle, rgba(244,222,160,0.5), transparent 70%); filter:blur(5px); animation:drift 8s ease-in-out 3s infinite;"></span>

      <div class="hero-content" style="position:relative; z-index:3; padding:0 clamp(24px,5vw,72px) clamp(56px,9vh,110px); color:#fffdf9; max-width:1100px;">
        <div class="hero-row" style="display:flex; align-items:center; gap:14px; margin-bottom:26px;">
          <span style="width:32px; height:1px; background:var(--accent-soft,#e6b652);"></span>
          <span style="font-size:12px; letter-spacing:0.42em; text-transform:uppercase; color:var(--accent-soft,#e6b652);">Solvia Medical · Aesthetic Distribution</span>
        </div>
        <h1 style="font-family:'Nanum Myeongjo',serif; font-weight:800; font-size:clamp(52px,9vw,128px); line-height:1.02; margin:0; letter-spacing:-0.01em; text-shadow:0 2px 40px rgba(0,0,0,0.35);">The Path Light Takes</h1>
        <p style="font-family:'Cormorant Garamond',serif; font-style:italic; font-size:clamp(22px,3vw,38px); margin:18px 0 0; color:rgba(255,253,249,0.92); font-weight:500;">Where light becomes care.</p>
        <p style="max-width:520px; margin:30px 0 0; font-size:clamp(15px,1.4vw,18px); line-height:1.8; color:rgba(255,253,249,0.82); font-weight:300;">From advanced cosmetics to aesthetic devices and dermal fillers — we carry Korea's most trusted aesthetic brands to clinics and partners across the world.</p>
        <div class="hero-row" style="display:flex; flex-wrap:wrap; gap:14px; margin-top:38px;">
          <a href="#journey" style="display:inline-flex; align-items:center; gap:10px; background:var(--accent,#c08a2e); color:#1c1408; text-decoration:none; padding:15px 28px; border-radius:999px; font-size:13px; letter-spacing:0.12em; text-transform:uppercase; font-weight:500;">Our Story <span style="font-size:15px;">→</span></a>
          <a href="#contact" style="display:inline-flex; align-items:center; gap:10px; color:#fffdf9; text-decoration:none; padding:15px 28px; border-radius:999px; font-size:13px; letter-spacing:0.12em; text-transform:uppercase; font-weight:400; border:1px solid rgba(255,253,249,0.45);">Partner Inquiry</a>
        </div>
      </div>

      <div class="hero-cue" style="position:absolute; left:clamp(24px,5vw,72px); bottom:30px; z-index:3; display:flex; flex-direction:column; align-items:center; gap:8px; color:rgba(255,253,249,0.7);">
        <span style="font-size:10px; letter-spacing:0.3em; writing-mode:vertical-rl; text-transform:uppercase;">Scroll</span>
        <span style="width:1px; height:40px; background:linear-gradient(rgba(255,253,249,0.7), transparent); animation:cue 2.2s ease-in-out infinite;"></span>
      </div>
    </section>

    <!-- BRANDS -->
    <section id="products" style="background:#f6ece4; padding:clamp(90px,14vh,180px) clamp(24px,5vw,72px);">
      <div data-reveal style="opacity:0; transform:translateY(28px); transition:opacity 1.1s cubic-bezier(.2,.7,.2,1), transform 1.1s cubic-bezier(.2,.7,.2,1); max-width:1280px; margin:0 auto;">
        <section style="position:relative; background:#3a2b28; border-radius:clamp(28px,3vw,44px); padding:clamp(40px,5.5vw,80px) clamp(24px,4vw,60px) clamp(44px,5.5vw,72px); overflow:hidden;">
          <div style="position:absolute; top:38%; left:50%; width:680px; height:680px; transform:translate(-50%,-50%); border-radius:50%; background:radial-gradient(circle, rgba(230,182,82,0.12), transparent 66%); pointer-events:none;"></div>
          <div style="position:relative; text-align:center; margin-bottom:clamp(36px,5vw,60px);">
            <div style="font-size:12px; letter-spacing:0.4em; text-transform:uppercase; color:var(--accent-soft,#e6b652);">Selected · Distribution Partners</div>
            <h2 style="font-family:'Nanum Myeongjo',serif; font-weight:800; font-size:clamp(36px,6vw,72px); color:#fffdf9; line-height:1.02; margin:18px 0 0;">The Brands We Carry</h2>
            <p style="font-family:'Cormorant Garamond',serif; font-style:italic; font-size:clamp(18px,2.2vw,26px); color:rgba(244,236,221,0.62); margin:14px 0 0;">Six trusted names, three disciplines.</p>
          </div>

          <!-- discipline filter -->
          <div style="position:relative; display:flex; flex-wrap:wrap; align-items:center; justify-content:center; gap:10px; margin-bottom:clamp(30px,4vw,46px);">
            <button type="button" data-bchip="all" style="cursor:pointer; font-family:'Jost',sans-serif; font-size:12px; letter-spacing:0.14em; text-transform:uppercase; padding:10px 18px; border-radius:999px; border:1px solid #e6b652; background:#e6b652; color:#1c1408; font-weight:600; transition:all .25s ease;">All Brands</button>
            <button type="button" data-bchip="cosmetics" style="cursor:pointer; font-family:'Jost',sans-serif; font-size:12px; letter-spacing:0.14em; text-transform:uppercase; padding:10px 18px; border-radius:999px; border:1px solid rgba(244,236,221,0.3); background:transparent; color:rgba(244,236,221,0.82); font-weight:400; transition:all .25s ease;">Cosmetics</button>
            <button type="button" data-bchip="devices" style="cursor:pointer; font-family:'Jost',sans-serif; font-size:12px; letter-spacing:0.14em; text-transform:uppercase; padding:10px 18px; border-radius:999px; border:1px solid rgba(244,236,221,0.3); background:transparent; color:rgba(244,236,221,0.82); font-weight:400; transition:all .25s ease;">Devices</button>
            <button type="button" data-bchip="fillers" style="cursor:pointer; font-family:'Jost',sans-serif; font-size:12px; letter-spacing:0.14em; text-transform:uppercase; padding:10px 18px; border-radius:999px; border:1px solid rgba(244,236,221,0.3); background:transparent; color:rgba(244,236,221,0.82); font-weight:400; transition:all .25s ease;">Fillers</button>
          </div>

          <!-- fan coverflow carousel -->
          <div data-bcarousel style="position:relative;">
            <div data-bstage tabindex="0" style="position:relative; height:480px; perspective:1600px; outline:none; touch-action:pan-y; -webkit-user-select:none; user-select:none;">
              <div data-btrack style="position:absolute; inset:0; transform-style:preserve-3d;">

              <article data-bcard data-name="OVALLA" data-bovalla="1" data-disc="cosmetics" style="position:absolute; top:0; left:50%; width:300px; margin-left:-150px; height:440px; border-radius:22px; overflow:hidden; box-sizing:border-box; padding:26px; display:flex; flex-direction:column; box-shadow:0 34px 70px -24px rgba(0,0,0,.55); transform-origin:50% 60%; will-change:transform; cursor:pointer; transition:transform .6s cubic-bezier(.2,.7,.2,1), opacity .55s ease; transform:translateX(-360px) translateY(40px) rotateZ(-12deg) rotateY(22deg) scale(0.76); opacity:0.68; z-index:100; background:#1a2818; color:#fffdf9;">
                <img src="/assets/golden-meadow.webp" alt="ōvalla botanical skincare" style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover; pointer-events:none; opacity:0.6;">
                <div style="position:absolute; inset:0; background:linear-gradient(180deg,rgba(16,26,14,0.55),rgba(16,26,14,0.1) 38%,rgba(16,26,14,0.9)); pointer-events:none;"></div>
                <div style="position:relative; display:flex; flex-direction:column; height:100%;">
                  <div style="display:flex; justify-content:space-between; align-items:flex-start;">
                    <div><h3 style="font-family:'Cormorant Garamond',serif; font-weight:600; font-size:30px; letter-spacing:0.04em; margin:0; line-height:1;">ōvalla</h3><div style="font-size:9px; letter-spacing:0.22em; opacity:0.8; margin-top:7px;">SUSTAINABLE BEAUTY</div></div>
                    <div style="width:46px;height:46px;flex:none;border-radius:50%;border:1px solid rgba(255,253,249,0.5);display:flex;align-items:center;justify-content:center;font-family:'Jost',sans-serif;font-weight:500;font-size:12px;color:inherit;">2026</div>
                  </div>
                  <div style="margin-top:auto; display:flex; flex-direction:column; gap:14px;">
                    <div style="display:flex; flex-wrap:wrap; gap:7px;"><span style="background:rgba(255,253,249,0.16); border:1px solid rgba(255,253,249,0.3); color:#fffdf9; font-size:10px; letter-spacing:0.1em; padding:7px 12px; border-radius:999px;">CICA CARE</span><span style="background:rgba(255,253,249,0.16); border:1px solid rgba(255,253,249,0.3); color:#fffdf9; font-size:10px; letter-spacing:0.1em; padding:7px 12px; border-radius:999px;">VEGAN</span></div>
                    <a href="/ovalla" data-bovalla-cta style="display:inline-flex; align-items:center; justify-content:center; gap:9px; background:#9db89f; color:#1f2c25; font-size:11px; font-weight:600; letter-spacing:0.12em; text-transform:uppercase; padding:12px 18px; border-radius:999px; text-decoration:none;">View Lineup <span style="font-size:14px;">→</span></a>
                  </div>
                </div>
              </article>

              <article data-bcard data-name="NOVELUME" data-disc="cosmetics" style="position:absolute; top:0; left:50%; width:300px; margin-left:-150px; height:440px; border-radius:22px; overflow:hidden; box-sizing:border-box; padding:26px; display:flex; flex-direction:column; box-shadow:0 34px 70px -24px rgba(0,0,0,.55); transform-origin:50% 60%; will-change:transform; cursor:grab; transition:transform .6s cubic-bezier(.2,.7,.2,1), opacity .55s ease; transform:translateX(-180px) translateY(10px) rotateZ(-6deg) rotateY(11deg) scale(0.88); opacity:0.84; z-index:110; background:#f3e8d4; color:#3a2b28;">
                <div style="display:flex; justify-content:space-between; align-items:flex-start;">
                  <div><h3 style="font-family:'Jost',sans-serif; font-weight:500; font-size:26px; letter-spacing:0.08em; margin:0; line-height:1;">NOVELUME</h3><div style="font-size:9px; letter-spacing:0.22em; color:#8a7c60; margin-top:7px;">ADVANCED COSMETICS</div></div>
                  <div style="width:46px;height:46px;flex:none;border-radius:50%;border:1px solid rgba(33,27,19,0.25);display:flex;align-items:center;justify-content:center;font-family:'Jost',sans-serif;font-weight:500;font-size:12px;color:inherit;">2026</div>
                </div>
                <div style="flex:1; margin:18px 0; border-radius:12px; background:repeating-linear-gradient(135deg,#e6d8bd,#e6d8bd 10px,#ddcdae 10px,#ddcdae 20px); display:flex; align-items:center; justify-content:center;"><span style="font-family:'Cormorant Garamond',serif; font-weight:600; font-size:34px; letter-spacing:0.1em; color:#9a8a6e;">Novelume</span></div>
                <div style="display:flex; flex-wrap:wrap; gap:7px;"><span style="background:#3a2b28; color:#f6ece4; font-size:10px; letter-spacing:0.1em; padding:7px 12px; border-radius:999px;">ANTI-AGING</span><span style="background:#3a2b28; color:#f6ece4; font-size:10px; letter-spacing:0.1em; padding:7px 12px; border-radius:999px;">SERUM</span></div>
              </article>

              <article data-bcard data-name="VANTAGE" data-disc="devices" style="position:absolute; top:0; left:50%; width:300px; margin-left:-150px; height:440px; border-radius:22px; overflow:hidden; box-sizing:border-box; padding:26px; display:flex; flex-direction:column; box-shadow:0 34px 70px -24px rgba(0,0,0,.55); transform-origin:50% 60%; will-change:transform; cursor:grab; transition:transform .6s cubic-bezier(.2,.7,.2,1), opacity .55s ease; transform:translateX(0px) translateY(0px) rotateZ(0deg) rotateY(0deg) scale(1); opacity:1; z-index:120; background:#1a160f; color:#fffdf9;">
                <img src="/assets/golden-meadow.webp" alt="" style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover; pointer-events:none;">
                <div style="position:absolute; inset:0; background:linear-gradient(180deg,rgba(20,16,10,0.42),rgba(20,16,10,0.15) 42%,rgba(20,16,10,0.84)); pointer-events:none;"></div>
                <div style="position:relative; display:flex; flex-direction:column; height:100%;">
                  <div style="display:flex; justify-content:space-between; align-items:flex-start;">
                    <div><h3 style="font-family:'Jost',sans-serif; font-weight:500; font-size:26px; letter-spacing:0.08em; margin:0; line-height:1;">VANTAGE</h3><div style="font-size:9px; letter-spacing:0.22em; opacity:0.75; margin-top:7px;">AESTHETIC DEVICES</div></div>
                    <div style="width:46px;height:46px;flex:none;border-radius:50%;border:1px solid rgba(255,253,249,0.5);display:flex;align-items:center;justify-content:center;font-family:'Jost',sans-serif;font-weight:500;font-size:12px;color:inherit;">2026</div>
                  </div>
                  <div style="margin-top:auto; display:flex; flex-wrap:wrap; gap:7px;"><span style="background:rgba(255,253,249,0.16); border:1px solid rgba(255,253,249,0.3); color:#fffdf9; font-size:10px; letter-spacing:0.1em; padding:7px 12px; border-radius:999px;">RF DEVICE</span><span style="background:rgba(255,253,249,0.16); border:1px solid rgba(255,253,249,0.3); color:#fffdf9; font-size:10px; letter-spacing:0.1em; padding:7px 12px; border-radius:999px;">CLINIC</span><span style="background:rgba(255,253,249,0.16); border:1px solid rgba(255,253,249,0.3); color:#fffdf9; font-size:10px; letter-spacing:0.1em; padding:7px 12px; border-radius:999px;">SAFETY</span></div>
                </div>
              </article>

              <article data-bcard data-name="PULSE" data-disc="devices" style="position:absolute; top:0; left:50%; width:300px; margin-left:-150px; height:440px; border-radius:22px; overflow:hidden; box-sizing:border-box; padding:26px; display:flex; flex-direction:column; box-shadow:0 34px 70px -24px rgba(0,0,0,.55); transform-origin:50% 60%; will-change:transform; cursor:grab; transition:transform .6s cubic-bezier(.2,.7,.2,1), opacity .55s ease; transform:translateX(180px) translateY(10px) rotateZ(6deg) rotateY(-11deg) scale(0.88); opacity:0.84; z-index:110; background:#2c3722; color:#eef0e4;">
                <div style="display:flex; justify-content:space-between; align-items:flex-start;">
                  <div><h3 style="font-family:'Jost',sans-serif; font-weight:500; font-size:26px; letter-spacing:0.08em; margin:0; line-height:1;">PULSE</h3><div style="font-size:9px; letter-spacing:0.22em; opacity:0.6; margin-top:7px;">AESTHETIC DEVICES</div></div>
                  <div style="width:46px;height:46px;flex:none;border-radius:50%;border:1px solid rgba(238,240,228,0.35);display:flex;align-items:center;justify-content:center;font-family:'Jost',sans-serif;font-weight:500;font-size:12px;color:inherit;">2026</div>
                </div>
                <div style="flex:1; display:flex; align-items:center; justify-content:center;"><div style="display:flex; align-items:center; gap:10px;"><span style="width:11px; height:11px; border:2px solid var(--accent-soft,#e6b652); border-radius:50%;"></span><span style="font-family:'Cormorant Garamond',serif; font-weight:600; font-size:36px; letter-spacing:0.1em;">PULSE</span></div></div>
                <div style="display:flex; flex-wrap:wrap; gap:7px;"><span style="background:rgba(238,240,228,0.12); color:#eef0e4; font-size:10px; letter-spacing:0.1em; padding:7px 12px; border-radius:999px;">EMS</span><span style="background:rgba(238,240,228,0.12); color:#eef0e4; font-size:10px; letter-spacing:0.1em; padding:7px 12px; border-radius:999px;">LIFTING</span></div>
              </article>

              <article data-bcard data-name="HYALA" data-disc="fillers" style="position:absolute; top:0; left:50%; width:300px; margin-left:-150px; height:440px; border-radius:22px; overflow:hidden; box-sizing:border-box; padding:26px; display:flex; flex-direction:column; box-shadow:0 34px 70px -24px rgba(0,0,0,.55); transform-origin:50% 60%; will-change:transform; cursor:grab; transition:transform .6s cubic-bezier(.2,.7,.2,1), opacity .55s ease; transform:translateX(360px) translateY(40px) rotateZ(12deg) rotateY(-22deg) scale(0.76); opacity:0.68; z-index:100; background:linear-gradient(165deg,#cf9670,#b06f44); color:#2a1406;">
                <div style="display:flex; justify-content:space-between; align-items:flex-start;">
                  <div><h3 style="font-family:'Jost',sans-serif; font-weight:500; font-size:26px; letter-spacing:0.08em; margin:0; line-height:1;">HYALA</h3><div style="font-size:9px; letter-spacing:0.22em; opacity:0.72; margin-top:7px;">DERMAL FILLERS</div></div>
                  <div style="width:46px;height:46px;flex:none;border-radius:50%;border:1px solid rgba(42,20,6,0.4);display:flex;align-items:center;justify-content:center;font-family:'Jost',sans-serif;font-weight:500;font-size:12px;color:inherit;">2026</div>
                </div>
                <div style="flex:1; display:flex; align-items:center; justify-content:center;"><div style="display:flex; flex-direction:column; align-items:center; gap:9px;"><span style="width:14px; height:14px; background:#2a1406; border-radius:50%;"></span><span style="font-family:'Cormorant Garamond',serif; font-weight:600; font-size:37px; letter-spacing:0.14em;">HYALA</span></div></div>
                <div style="display:flex; flex-wrap:wrap; gap:7px;"><span style="background:#2a1406; color:#f6ece4; font-size:10px; letter-spacing:0.1em; padding:7px 12px; border-radius:999px;">DERMAL FILLER</span><span style="background:#2a1406; color:#f6ece4; font-size:10px; letter-spacing:0.1em; padding:7px 12px; border-radius:999px;">HA</span></div>
              </article>

              <article data-bcard data-name="CONTOURA" data-disc="fillers" style="position:absolute; top:0; left:50%; width:300px; margin-left:-150px; height:440px; border-radius:22px; overflow:hidden; box-sizing:border-box; padding:26px; display:flex; flex-direction:column; box-shadow:0 34px 70px -24px rgba(0,0,0,.55); transform-origin:50% 60%; will-change:transform; cursor:grab; transition:transform .6s cubic-bezier(.2,.7,.2,1), opacity .55s ease; transform:translateX(540px) translateY(90px) rotateZ(18deg) rotateY(-33deg) scale(0.72); opacity:0.64; z-index:90; background:#1a160f; color:#fffdf9;">
                <img src="/assets/golden-sky.webp" alt="" style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover; pointer-events:none;">
                <div style="position:absolute; inset:0; background:linear-gradient(180deg,rgba(20,16,10,0.34),rgba(20,16,10,0.1) 40%,rgba(20,16,10,0.82)); pointer-events:none;"></div>
                <div style="position:relative; display:flex; flex-direction:column; height:100%;">
                  <div style="display:flex; justify-content:space-between; align-items:flex-start;">
                    <div><h3 style="font-family:'Jost',sans-serif; font-weight:500; font-size:26px; letter-spacing:0.08em; margin:0; line-height:1;">CONTOURA</h3><div style="font-size:9px; letter-spacing:0.22em; opacity:0.75; margin-top:7px;">DERMAL FILLERS</div></div>
                    <div style="width:46px;height:46px;flex:none;border-radius:50%;border:1px solid rgba(255,253,249,0.5);display:flex;align-items:center;justify-content:center;font-family:'Jost',sans-serif;font-weight:500;font-size:12px;color:inherit;">2026</div>
                  </div>
                  <div style="margin-top:auto; display:flex; flex-wrap:wrap; gap:7px;"><span style="background:rgba(255,253,249,0.16); border:1px solid rgba(255,253,249,0.3); color:#fffdf9; font-size:10px; letter-spacing:0.1em; padding:7px 12px; border-radius:999px;">VOLUMIZER</span><span style="background:rgba(255,253,249,0.16); border:1px solid rgba(255,253,249,0.3); color:#fffdf9; font-size:10px; letter-spacing:0.1em; padding:7px 12px; border-radius:999px;">EXPORT</span><span style="background:rgba(255,253,249,0.16); border:1px solid rgba(255,253,249,0.3); color:#fffdf9; font-size:10px; letter-spacing:0.1em; padding:7px 12px; border-radius:999px;">CE</span></div>
                </div>
              </article>

              </div>
            </div>

            <!-- controls -->
            <div style="display:flex; align-items:center; justify-content:center; gap:22px; margin-top:34px;">
              <button type="button" data-barrow="prev" aria-label="Previous brand" style="width:52px; height:52px; flex:none; border-radius:50%; border:1px solid rgba(244,236,221,0.3); background:transparent; color:#f6ece4; font-family:serif; font-size:24px; line-height:1; cursor:pointer; display:flex; align-items:center; justify-content:center; transition:background .25s ease, border-color .25s ease;">&#8249;</button>
              <div data-bdots style="display:flex; align-items:center; gap:9px;"><span data-bdot style="width:8px; height:8px; border-radius:999px; background:rgba(244,236,221,0.28); cursor:pointer; transition:width .35s cubic-bezier(.2,.7,.2,1), background .35s ease; display:inline-block;"></span><span data-bdot style="width:8px; height:8px; border-radius:999px; background:rgba(244,236,221,0.28); cursor:pointer; transition:width .35s cubic-bezier(.2,.7,.2,1), background .35s ease; display:inline-block;"></span><span data-bdot style="width:8px; height:8px; border-radius:999px; background:rgba(244,236,221,0.28); cursor:pointer; transition:width .35s cubic-bezier(.2,.7,.2,1), background .35s ease; display:inline-block;"></span><span data-bdot style="width:8px; height:8px; border-radius:999px; background:rgba(244,236,221,0.28); cursor:pointer; transition:width .35s cubic-bezier(.2,.7,.2,1), background .35s ease; display:inline-block;"></span><span data-bdot style="width:8px; height:8px; border-radius:999px; background:rgba(244,236,221,0.28); cursor:pointer; transition:width .35s cubic-bezier(.2,.7,.2,1), background .35s ease; display:inline-block;"></span><span data-bdot style="width:8px; height:8px; border-radius:999px; background:rgba(244,236,221,0.28); cursor:pointer; transition:width .35s cubic-bezier(.2,.7,.2,1), background .35s ease; display:inline-block;"></span></div>
              <button type="button" data-barrow="next" aria-label="Next brand" style="width:52px; height:52px; flex:none; border-radius:50%; border:1px solid rgba(244,236,221,0.3); background:transparent; color:#f6ece4; font-family:serif; font-size:24px; line-height:1; cursor:pointer; display:flex; align-items:center; justify-content:center; transition:background .25s ease, border-color .25s ease;">&#8250;</button>
            </div>
            <div data-bcaption style="text-align:center; margin-top:18px; min-height:26px; font-family:'Cormorant Garamond',serif; font-style:italic; font-size:21px; color:rgba(244,236,221,0.72);"></div>
          </div>
        </section>
      </div>
    </section>

    <!-- JOURNEY (merged with The Name) -->
    <section id="journey" style="background:#3a2b28; color:#f4ecdd; padding:clamp(90px,14vh,170px) clamp(24px,5vw,72px);">
      <div style="max-width:1180px; margin:0 auto;">

        <div data-reveal style="opacity:0; transform:translateY(28px); transition:opacity 1.1s cubic-bezier(.2,.7,.2,1), transform 1.1s cubic-bezier(.2,.7,.2,1); display:grid; grid-template-columns:repeat(auto-fit,minmax(300px,1fr)); gap:clamp(40px,5vw,64px); align-items:center; margin-bottom:clamp(56px,9vh,88px);">
          <div style="position:relative; aspect-ratio:4/5; border-radius:4px; overflow:hidden;">
            <img src="/assets/forest-light.webp" alt="Sunlight through a forest path" style="width:100%; height:100%; object-fit:cover;">
            <div style="position:absolute; inset:0; background:linear-gradient(180deg, rgba(33,27,19,0.15), rgba(33,27,19,0.5));"></div>
          </div>
          <div>
            <div style="display:flex; align-items:center; gap:14px; margin-bottom:clamp(22px,3vh,30px);">
              <span style="width:32px; height:1px; background:var(--accent-soft,#e6b652);"></span>
              <span style="font-size:12px; letter-spacing:0.4em; text-transform:uppercase; color:var(--accent-soft,#e6b652);">The Name · The Journey</span>
            </div>
            <h2 style="font-family:'Cormorant Garamond',serif; font-weight:500; font-size:clamp(44px,5.5vw,68px); line-height:1.04; margin:0 0 clamp(20px,3vh,26px); color:#fffdf9;">Sol<span style="color:var(--accent-soft,#e6b652);">,</span> light.<br>Via<span style="color:var(--accent-soft,#e6b652);">,</span> the way.</h2>
            <p style="font-size:clamp(15px,1.4vw,17px); line-height:1.85; margin:0; color:rgba(244,236,221,0.74); font-weight:300; max-width:480px;">Solvia is the meeting of <em style="font-family:'Cormorant Garamond',serif; font-style:italic; color:#fffdf9;">Sol</em>, the sun, and <em style="font-family:'Cormorant Garamond',serif; font-style:italic; color:#fffdf9;">Via</em>, the path. As light moves through the forest to reach the ground, we design the journey that carries trusted products across borders.</p>
          </div>
        </div>

        <!-- horizontal connector + 3 steps -->
        <div data-reveal style="opacity:0; transform:translateY(28px); transition:opacity 1.1s cubic-bezier(.2,.7,.2,1), transform 1.1s cubic-bezier(.2,.7,.2,1); position:relative;">
          <div style="position:relative; height:0;">
            <div style="position:absolute; left:16.66%; right:16.66%; top:0; height:1px; background:linear-gradient(90deg, rgba(230,182,82,0) 0%, rgba(230,182,82,0.55) 12%, rgba(230,182,82,0.55) 88%, rgba(230,182,82,0) 100%);"></div>
            <div style="position:absolute; left:16.66%; top:0; width:10px; height:10px; border-radius:50%; background:var(--accent-soft,#e6b652); transform:translate(-50%,-50%); box-shadow:0 0 0 4px #3a2b28;"></div>
            <div style="position:absolute; left:50%; top:0; width:10px; height:10px; border-radius:50%; background:var(--accent-soft,#e6b652); transform:translate(-50%,-50%); box-shadow:0 0 0 4px #3a2b28;"></div>
            <div style="position:absolute; left:83.33%; top:0; width:10px; height:10px; border-radius:50%; background:var(--accent-soft,#e6b652); transform:translate(-50%,-50%); box-shadow:0 0 0 4px #3a2b28;"></div>
          </div>
          <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(240px,1fr)); gap:clamp(28px,4vw,48px); padding-top:clamp(36px,5vh,48px); text-align:center;">
            <article style="padding:0 clamp(8px,1.5vw,20px);">
              <span style="font-family:'Cormorant Garamond',serif; font-size:clamp(40px,4vw,48px); line-height:0.9; color:var(--accent-soft,#e6b652);">01</span>
              <h3 style="font-family:'Nanum Myeongjo',serif; font-weight:700; font-size:clamp(20px,2vw,24px); margin:16px 0 4px; color:#fffdf9;">Origin</h3>
              <div style="font-family:'Cormorant Garamond',serif; font-style:italic; font-size:16px; color:rgba(244,236,221,0.5); margin-bottom:14px;">the source</div>
              <p style="font-size:14px; line-height:1.75; margin:0; color:rgba(244,236,221,0.72); font-weight:300;">Only clinically proven products anchor a firm starting point.</p>
            </article>
            <article style="padding:0 clamp(8px,1.5vw,20px);">
              <span style="font-family:'Cormorant Garamond',serif; font-size:clamp(40px,4vw,48px); line-height:0.9; color:var(--accent-soft,#e6b652);">02</span>
              <h3 style="font-family:'Nanum Myeongjo',serif; font-weight:700; font-size:clamp(20px,2vw,24px); margin:16px 0 4px; color:#fffdf9;">Passage</h3>
              <div style="font-family:'Cormorant Garamond',serif; font-style:italic; font-size:16px; color:rgba(244,236,221,0.5); margin-bottom:14px;">the way</div>
              <p style="font-size:14px; line-height:1.75; margin:0; color:rgba(244,236,221,0.72); font-weight:300;">A fast, transparent supply chain linking Korea to clinics worldwide.</p>
            </article>
            <article style="padding:0 clamp(8px,1.5vw,20px);">
              <span style="font-family:'Cormorant Garamond',serif; font-size:clamp(40px,4vw,48px); line-height:0.9; color:var(--accent-soft,#e6b652);">03</span>
              <h3 style="font-family:'Nanum Myeongjo',serif; font-weight:700; font-size:clamp(20px,2vw,24px); margin:16px 0 4px; color:#fffdf9;">Arrival</h3>
              <div style="font-family:'Cormorant Garamond',serif; font-style:italic; font-size:16px; color:rgba(244,236,221,0.5); margin-bottom:14px;">the touch</div>
              <p style="font-size:14px; line-height:1.75; margin:0; color:rgba(244,236,221,0.72); font-weight:300;">Until skin glows again, complete only when it reaches everyday life.</p>
            </article>
          </div>
        </div>

      </div>
    </section>

    <!-- GLOBAL -->
    <section id="global" style="position:relative; background:#3a2b28; color:#f4e9e2; padding:clamp(90px,14vh,180px) clamp(24px,5vw,72px); overflow:hidden;">
      <div style="position:absolute; top:-10%; right:-5%; width:480px; height:480px; border-radius:50%; background:radial-gradient(circle, rgba(230,182,82,0.22), transparent 68%); filter:blur(10px); animation:glow 7s ease-in-out infinite;"></div>
      <div style="position:relative; max-width:1100px; margin:0 auto;">
        <div data-reveal style="opacity:0; transform:translateY(28px); transition:opacity 1.1s cubic-bezier(.2,.7,.2,1), transform 1.1s cubic-bezier(.2,.7,.2,1);">
          <span style="font-size:12px; letter-spacing:0.4em; text-transform:uppercase; color:var(--accent-soft,#e6b652);">Export-First Distribution</span>
          <h2 style="font-family:'Nanum Myeongjo',serif; font-weight:700; font-size:clamp(34px,5vw,60px); margin:20px 0 0; line-height:1.12; max-width:760px;">Born for export. Trusted at home.</h2>
        </div>
        <div data-reveal style="opacity:0; transform:translateY(28px); transition:opacity 1.1s cubic-bezier(.2,.7,.2,1) .1s, transform 1.1s cubic-bezier(.2,.7,.2,1) .1s; display:grid; grid-template-columns:repeat(auto-fit,minmax(260px,1fr)); gap:clamp(28px,4vw,56px); margin-top:clamp(48px,8vh,80px); border-top:1px solid rgba(238,240,228,0.16); padding-top:48px;">
          <div>
            <h3 style="font-family:'Cormorant Garamond',serif; font-style:italic; font-weight:500; font-size:30px; margin:0 0 14px; color:var(--accent-soft,#e6b652);">Export — Worldwide</h3>
            <p style="font-size:15px; line-height:1.9; color:rgba(238,240,228,0.82); font-weight:300; margin:0;">Export distribution built for international partners. From certification and logistics to local regulatory compliance, we open the path across borders.</p>
          </div>
          <div>
            <h3 style="font-family:'Cormorant Garamond',serif; font-style:italic; font-weight:500; font-size:30px; margin:0 0 14px; color:var(--accent-soft,#e6b652);">Domestic — Korea</h3>
            <p style="font-size:15px; line-height:1.9; color:rgba(238,240,228,0.82); font-weight:300; margin:0;">Direct, rapid supply to clinics, medi-spas, and channels at home — backed by authenticity guarantees and stable inventory.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section id="contact" style="background:#f6ece4; padding:clamp(100px,16vh,200px) clamp(24px,5vw,72px); text-align:center;">
      <div data-reveal style="opacity:0; transform:translateY(28px); transition:opacity 1.1s cubic-bezier(.2,.7,.2,1), transform 1.1s cubic-bezier(.2,.7,.2,1); max-width:820px; margin:0 auto;">
        <span style="font-size:12px; letter-spacing:0.4em; text-transform:uppercase; color:var(--accent,#c08a2e);">Partner With Solvia</span>
        <h2 style="font-family:'Nanum Myeongjo',serif; font-weight:800; font-size:clamp(36px,6vw,72px); line-height:1.1; margin:24px 0 0; color:#221d16;">Looking for partners<br>to carry the light</h2>
        <p style="font-size:clamp(15px,1.4vw,18px); line-height:1.8; color:#4a4136; font-weight:300; max-width:520px; margin:26px auto 0;">We welcome distribution, retail, and export-partnership inquiries. Join the Solvia journey.</p>
        <div style="display:flex; flex-wrap:wrap; gap:14px; justify-content:center; margin-top:40px;">
          <a href="mailto:partners@solviamedical.com" style="display:inline-flex; align-items:center; gap:10px; background:#221d16; color:#f6ece4; text-decoration:none; padding:16px 32px; border-radius:999px; font-size:13px; letter-spacing:0.12em; text-transform:uppercase; font-weight:500;">Partner Inquiry <span style="font-size:15px;">→</span></a>
          <a href="mailto:partners@solviamedical.com" style="display:inline-flex; align-items:center; font-family:'Cormorant Garamond',serif; font-style:italic; font-size:20px; color:#4a4136; text-decoration:none; padding:16px 8px;">partners@solviamedical.com</a>
        </div>
      </div>
    </section>

    <!-- FOOTER -->
    <footer style="background:#3a2b28; color:rgba(244,236,221,0.7); padding:clamp(56px,8vh,80px) clamp(24px,5vw,72px) 40px;">
      <div style="max-width:1180px; margin:0 auto; display:flex; flex-wrap:wrap; justify-content:space-between; gap:40px; align-items:flex-start; border-bottom:1px solid rgba(244,236,221,0.12); padding-bottom:40px;">
        <div style="max-width:320px;">
          <div style="display:flex; align-items:baseline; gap:10px; color:#fffdf9; margin-bottom:18px;">
            <span style="font-family:'Cormorant Garamond',serif; font-weight:600; font-size:24px; letter-spacing:0.32em; padding-left:0.32em;">SOLVIA</span>
            <span style="font-size:10px; letter-spacing:0.42em; opacity:0.75; padding-left:0.42em;">MEDICAL</span>
          </div>
          <p style="font-family:'Cormorant Garamond',serif; font-style:italic; font-size:17px; margin:0; color:rgba(244,236,221,0.6);">Where light becomes care.</p>
        </div>
        <nav style="display:flex; gap:clamp(32px,6vw,80px); font-size:13px; letter-spacing:0.08em;">
          <div style="display:flex; flex-direction:column; gap:14px;">
            <a href="#journey" style="color:inherit; text-decoration:none;">Journey</a>
            <a href="#products" style="color:inherit; text-decoration:none;">Disciplines</a>
            <a href="#products" style="color:inherit; text-decoration:none;">Brands</a>
            <a href="/ovalla" style="color:inherit; text-decoration:none;">Ovalla</a>
            <a href="#global" style="color:inherit; text-decoration:none;">Global</a>
            <a href="#contact" style="color:inherit; text-decoration:none;">Contact</a>
          </div>
          <div style="display:flex; flex-direction:column; gap:14px;">
            <span style="opacity:0.5;">Advanced Cosmetics</span>
            <span style="opacity:0.5;">Aesthetic Devices</span>
            <span style="opacity:0.5;">Dermal Fillers</span>
          </div>
        </nav>
      </div>
      <div style="max-width:1180px; margin:24px auto 0; display:flex; flex-wrap:wrap; justify-content:space-between; gap:12px; font-size:12px; letter-spacing:0.06em; color:rgba(244,236,221,0.45);">
        <span>© 2026 Solvia Medical. All rights reserved.</span>
        <span>Advanced Cosmetics · Aesthetic Devices · Dermal Fillers — Global & Domestic Distribution</span>
      </div>
    </footer>

    <!-- FLOATING WHATSAPP -->
    <button type="button" id="wa-fab" aria-label="Chat on WhatsApp" class="wa-fab" style="position:fixed; right:clamp(18px,3vw,32px); bottom:clamp(18px,3vw,32px); z-index:120; display:inline-flex; align-items:center; gap:0; height:60px; padding:0; border:none; cursor:pointer; background:transparent;">
      <span class="wa-label" style="display:inline-flex; align-items:center; height:46px; max-width:0; overflow:hidden; white-space:nowrap; background:#fff; color:#1f2c25; border-radius:999px 0 0 999px; box-shadow:0 8px 30px rgba(0,0,0,0.18); font-size:13px; font-weight:500; letter-spacing:0.02em; transition:max-width .45s cubic-bezier(.2,.8,.2,1), padding .45s cubic-bezier(.2,.8,.2,1); padding:0;">Chat with us on WhatsApp</span>
      <span style="position:relative; flex:none; width:60px; height:60px; border-radius:50%; background:#25D366; box-shadow:0 10px 30px rgba(37,211,102,0.45); display:inline-flex; align-items:center; justify-content:center;">
        <span style="position:absolute; inset:0; border-radius:50%; animation:waPulse 2.4s ease-out infinite;"></span>
        <svg width="30" height="30" viewBox="0 0 24 24" fill="#fff"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm0 18.15c-1.52 0-3.01-.41-4.31-1.18l-.31-.18-3.12.82.83-3.04-.2-.31a8.18 8.18 0 01-1.26-4.35c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.42a8.16 8.16 0 012.41 5.82c0 4.54-3.69 8.23-8.23 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.16.25-.64.81-.79.97-.14.16-.29.18-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.16.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.16 0-.43.06-.66.31-.23.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.16 1.75 2.67 4.25 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28z"/></svg>
      </span>
    </button>

  </main>
</div>`;
