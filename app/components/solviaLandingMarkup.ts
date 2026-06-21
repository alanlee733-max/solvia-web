export const markup = String.raw`<div style="--accent:#e0a877; --accent-soft:#ecc3a0; --hero-dark:0.06; background:#f6ece4; color:#221d16; font-family:'Jost','Noto Sans KR',sans-serif; -webkit-font-smoothing:antialiased; overflow-x:hidden;">

  <header id="dc-header" style="position:fixed; top:0; left:0; right:0; z-index:50; display:flex; align-items:center; justify-content:space-between; padding:22px clamp(24px,5vw,72px); color:#fffdf9; border-bottom:1px solid transparent; transition:background .5s ease, color .5s ease, border-color .5s ease, backdrop-filter .5s ease;">
    <a href="#top" style="text-decoration:none; color:inherit; display:flex; align-items:baseline; gap:10px;">
      <span style="font-family:'Cormorant Garamond',serif; font-weight:600; font-size:26px; letter-spacing:0.32em; padding-left:0.32em;">SOLVIA</span>
      <span style="width:5px; height:5px; border-radius:50%; background:var(--accent-soft,#e6b652); align-self:center; transform:translateY(-2px);"></span>
      <span style="font-family:'Jost',sans-serif; font-weight:400; font-size:10px; letter-spacing:0.42em; opacity:0.85; padding-left:0.42em;">MEDICAL</span>
    </a>
    <nav style="display:flex; align-items:center; gap:clamp(20px,3vw,44px); font-size:12px; letter-spacing:0.18em; text-transform:uppercase;">
      <a href="#journey" style="color:inherit; text-decoration:none; opacity:0.85;">Journey</a>
      <a href="#products" style="color:inherit; text-decoration:none; opacity:0.85;">Disciplines</a>
      <a href="#portfolio" style="color:inherit; text-decoration:none; opacity:0.85;">Brands</a>
      <a href="#global" style="color:inherit; text-decoration:none; opacity:0.85;">Global</a>
      <a href="#contact" style="display:inline-flex; align-items:center; gap:8px; color:inherit; text-decoration:none; border:1px solid currentColor; padding:9px 18px; border-radius:999px; opacity:0.95;">Contact<span style="font-size:14px; line-height:1;">→</span></a>
    </nav>
  </header>

  <main id="top">

    <!-- HERO -->
    <section class="hero-sec" id="dc-herosec" data-vpos="bottom" data-halign="left" data-orbs="on" data-cue="on" style="position:relative; height:100vh; min-height:640px; overflow:hidden; display:flex; align-items:flex-end;">
      <picture id="dc-hero" style="position:absolute; inset:0; width:100%; height:100%; transform:scale(1.08); will-change:transform;">
        <source media="(max-width:760px)" srcset="/assets/hero-bloom-mobile.png">
        <img src="/assets/hero-bloom.png" alt="" style="width:100%; height:100%; object-fit:cover;">
      </picture>
      <div class="hero-grad" style="position:absolute; inset:0; background:linear-gradient(180deg, rgba(46,26,22,0.40) 0%, rgba(46,26,22,0.04) 22%, transparent 50%, rgba(50,24,20,0.46) 74%, rgba(46,22,18,0.86) 100%);"></div>
      <div style="position:absolute; inset:0; background:#3a1e18; opacity:var(--hero-dark,0.06); mix-blend-mode:multiply;"></div>
      <span class="hero-orb" style="position:absolute; left:22%; top:38%; width:120px; height:120px; border-radius:50%; background:radial-gradient(circle, rgba(230,182,82,0.5), transparent 70%); filter:blur(8px); animation:drift 9s ease-in-out infinite;"></span>
      <span class="hero-orb" style="position:absolute; left:58%; top:30%; width:80px; height:80px; border-radius:50%; background:radial-gradient(circle, rgba(230,182,82,0.45), transparent 70%); filter:blur(6px); animation:drift 11s ease-in-out 1.5s infinite;"></span>
      <span class="hero-orb" style="position:absolute; left:44%; top:48%; width:60px; height:60px; border-radius:50%; background:radial-gradient(circle, rgba(244,222,160,0.5), transparent 70%); filter:blur(5px); animation:drift 8s ease-in-out 3s infinite;"></span>

      <div class="hero-content" id="dc-herocontent" style="position:relative; z-index:3; padding:0 clamp(24px,5vw,72px) clamp(56px,9vh,110px); color:#fffdf9; max-width:1100px;">
        <div class="hero-row" style="display:flex; align-items:center; gap:14px; margin-bottom:26px;">
          <span style="width:32px; height:1px; background:var(--accent-soft,#e6b652);"></span>
          <span style="font-size:12px; letter-spacing:0.42em; text-transform:uppercase; color:var(--accent-soft,#e6b652);">Solvia Medical · Aesthetic Distribution</span>
        </div>
        <h1 style="font-family:'Nanum Myeongjo',serif; font-weight:800; font-size:clamp(52px,9vw,128px); line-height:1.02; margin:0; letter-spacing:-0.01em; text-shadow:0 2px 40px rgba(0,0,0,0.35);">The Path Light Takes</h1>
        <p style="font-family:'Cormorant Garamond',serif; font-style:italic; font-size:clamp(22px,3vw,38px); margin:18px 0 0; color:rgba(255,253,249,0.92); font-weight:500;">Where light becomes care.</p>
        <p style="max-width:520px; margin:30px 0 0; font-size:clamp(15px,1.4vw,18px); line-height:1.8; color:rgba(255,253,249,0.82); font-weight:300;">From advanced cosmetics to aesthetic devices and dermal fillers — we carry Korea’s most trusted aesthetic brands to clinics and partners across the world.</p>
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

    <!-- THE NAME -->
    <section style="background:#f6ece4; padding:clamp(90px,14vh,180px) clamp(24px,5vw,72px);">
      <div style="max-width:1100px; margin:0 auto; display:grid; grid-template-columns:1fr; gap:48px;">
        <div data-reveal style="opacity:0; transform:translateY(28px); transition:opacity 1.1s cubic-bezier(.2,.7,.2,1), transform 1.1s cubic-bezier(.2,.7,.2,1);">
          <span style="font-size:12px; letter-spacing:0.4em; text-transform:uppercase; color:var(--accent,#c08a2e);">The Name</span>
        </div>
        <div data-reveal style="opacity:0; transform:translateY(28px); transition:opacity 1.1s cubic-bezier(.2,.7,.2,1) .1s, transform 1.1s cubic-bezier(.2,.7,.2,1) .1s; display:grid; grid-template-columns:repeat(auto-fit,minmax(280px,1fr)); gap:clamp(28px,5vw,72px); align-items:end;">
          <h2 style="font-family:'Cormorant Garamond',serif; font-weight:500; font-size:clamp(40px,6vw,76px); line-height:1.06; margin:0; color:#221d16;">Sol<span style="color:var(--accent,#c08a2e);">,</span> light.<br>Via<span style="color:var(--accent,#c08a2e);">,</span> the way.</h2>
          <p style="font-size:clamp(15px,1.4vw,18px); line-height:1.9; margin:0; color:#4a4136; font-weight:300; max-width:440px;">Solvia is the meeting of <em style="font-family:'Cormorant Garamond',serif; font-style:italic; color:#221d16;">Sol</em>, the sun, and <em style="font-family:'Cormorant Garamond',serif; font-style:italic; color:#221d16;">Via</em>, the path. As light moves through the forest to reach the ground, we design the journey that carries trusted products to the people who need them — across borders.</p>
        </div>
      </div>
    </section>

    <!-- JOURNEY -->
    <section id="journey" style="background:#3a2b28; color:#f4ecdd; padding:clamp(90px,14vh,170px) clamp(24px,5vw,72px);">
      <div style="max-width:1180px; margin:0 auto;">
        <div data-reveal style="opacity:0; transform:translateY(28px); transition:opacity 1.1s cubic-bezier(.2,.7,.2,1), transform 1.1s cubic-bezier(.2,.7,.2,1); display:flex; align-items:center; gap:14px; margin-bottom:clamp(48px,8vh,90px);">
          <span style="width:32px; height:1px; background:var(--accent-soft,#e6b652);"></span>
          <span style="font-size:12px; letter-spacing:0.4em; text-transform:uppercase; color:var(--accent-soft,#e6b652);">The Solvia Journey</span>
        </div>

        <div data-reveal style="opacity:0; transform:translateY(28px); transition:opacity 1.1s cubic-bezier(.2,.7,.2,1), transform 1.1s cubic-bezier(.2,.7,.2,1); display:grid; grid-template-columns:repeat(auto-fit,minmax(260px,1fr)); gap:clamp(28px,5vw,56px); align-items:start; border-top:1px solid rgba(244,236,221,0.14); padding-top:clamp(40px,7vh,72px);">
          <article style="display:flex; flex-direction:column; gap:22px;">
            <div style="position:relative; aspect-ratio:3/4; border-radius:4px; overflow:hidden;">
              <img src="/assets/golden-sky.jpg" alt="" style="width:100%; height:100%; object-fit:cover;">
              <div style="position:absolute; inset:0; background:linear-gradient(180deg, transparent 55%, rgba(33,27,19,0.55));"></div>
            </div>
            <span style="font-family:'Cormorant Garamond',serif; font-size:48px; line-height:1; color:var(--accent-soft,#e6b652);">01</span>
            <h3 style="font-family:'Nanum Myeongjo',serif; font-weight:700; font-size:26px; margin:0; color:#fffdf9;">Origin <span style="font-family:'Cormorant Garamond',serif; font-style:italic; font-weight:500; font-size:20px; color:rgba(244,236,221,0.6);">the source</span></h3>
            <p style="font-size:15px; line-height:1.85; margin:0; color:rgba(244,236,221,0.78); font-weight:300;">Every recovery begins with light. Solvia selects only clinically proven products to anchor a firm starting point.</p>
          </article>

          <article style="display:flex; flex-direction:column; gap:22px; transform:translateY(clamp(0px,4vw,40px));">
            <div style="position:relative; aspect-ratio:3/4; border-radius:4px; overflow:hidden;">
              <img src="/assets/forest-light.jpg" alt="" style="width:100%; height:100%; object-fit:cover;">
              <div style="position:absolute; inset:0; background:linear-gradient(180deg, transparent 55%, rgba(33,27,19,0.55));"></div>
            </div>
            <span style="font-family:'Cormorant Garamond',serif; font-size:48px; line-height:1; color:var(--accent-soft,#e6b652);">02</span>
            <h3 style="font-family:'Nanum Myeongjo',serif; font-weight:700; font-size:26px; margin:0; color:#fffdf9;">Passage <span style="font-family:'Cormorant Garamond',serif; font-style:italic; font-weight:500; font-size:20px; color:rgba(244,236,221,0.6);">the way</span></h3>
            <p style="font-size:15px; line-height:1.85; margin:0; color:rgba(244,236,221,0.78); font-weight:300;">The path that links Korea to clinics worldwide — a fast, transparent supply chain that carries each product straight to the field.</p>
          </article>

          <article style="display:flex; flex-direction:column; gap:22px;">
            <div style="position:relative; aspect-ratio:3/4; border-radius:4px; overflow:hidden;">
              <img src="/assets/golden-meadow.jpg" alt="" style="width:100%; height:100%; object-fit:cover;">
              <div style="position:absolute; inset:0; background:linear-gradient(180deg, transparent 55%, rgba(33,27,19,0.55));"></div>
            </div>
            <span style="font-family:'Cormorant Garamond',serif; font-size:48px; line-height:1; color:var(--accent-soft,#e6b652);">03</span>
            <h3 style="font-family:'Nanum Myeongjo',serif; font-weight:700; font-size:26px; margin:0; color:#fffdf9;">Arrival <span style="font-family:'Cormorant Garamond',serif; font-style:italic; font-weight:500; font-size:20px; color:rgba(244,236,221,0.6);">the touch</span></h3>
            <p style="font-size:15px; line-height:1.85; margin:0; color:rgba(244,236,221,0.78); font-weight:300;">Until skin glows again. The Solvia journey is complete only when it reaches everyday life.</p>
          </article>
        </div>
      </div>
    </section>

    <!-- PRODUCTS -->
    <section id="products" style="background:#f6ece4; padding:clamp(90px,14vh,180px) clamp(24px,5vw,72px);">
      <div style="max-width:1180px; margin:0 auto;">
        <div data-reveal style="opacity:0; transform:translateY(28px); transition:opacity 1.1s cubic-bezier(.2,.7,.2,1), transform 1.1s cubic-bezier(.2,.7,.2,1); display:flex; flex-wrap:wrap; align-items:end; justify-content:space-between; gap:24px; margin-bottom:clamp(40px,7vh,72px);">
          <div>
            <span style="font-size:12px; letter-spacing:0.4em; text-transform:uppercase; color:var(--accent,#c08a2e);">What We Carry</span>
            <h2 style="font-family:'Nanum Myeongjo',serif; font-weight:700; font-size:clamp(34px,5vw,60px); margin:18px 0 0; color:#221d16; line-height:1.1;">Three Disciplines</h2>
          </div>
          <p style="max-width:360px; font-size:15px; line-height:1.8; color:#4a4136; font-weight:300; margin:0;">Three disciplines, one standard of trust. Tap <em style="font-style:normal; color:var(--accent,#c08a2e);">Explore Products</em> to unfold each lineup.</p>
        </div>

        <!-- connector + triptych -->
        <div data-reveal style="opacity:0; transform:translateY(28px); transition:opacity 1.1s cubic-bezier(.2,.7,.2,1), transform 1.1s cubic-bezier(.2,.7,.2,1); position:relative;">
          <div style="position:relative; height:0;">
            <div style="position:absolute; left:16.66%; right:16.66%; top:0; height:1px; background:linear-gradient(90deg, rgba(224,168,119,0) 0%, rgba(224,168,119,0.55) 12%, rgba(224,168,119,0.55) 88%, rgba(224,168,119,0) 100%);"></div>
            <div style="position:absolute; left:16.66%; top:0; width:10px; height:10px; border-radius:50%; background:var(--accent,#c08a2e); transform:translate(-50%,-50%); box-shadow:0 0 0 4px #f6ece4;"></div>
            <div style="position:absolute; left:50%; top:0; width:10px; height:10px; border-radius:50%; background:#6b7a4e; transform:translate(-50%,-50%); box-shadow:0 0 0 4px #f6ece4;"></div>
            <div style="position:absolute; left:83.33%; top:0; width:10px; height:10px; border-radius:50%; background:#b06f44; transform:translate(-50%,-50%); box-shadow:0 0 0 4px #f6ece4;"></div>
          </div>

          <div style="display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:clamp(14px,2vw,28px); padding-top:clamp(26px,3.2vw,42px); align-items:start;">

            <!-- 01 화장품 -->
            <article style="background:#fffdf9; border:1px solid rgba(34,29,22,0.08); border-radius:14px; overflow:hidden; display:flex; flex-direction:column;">
              <div style="height:4px; background:var(--accent,#c08a2e);"></div>
              <div style="padding:clamp(18px,1.6vw,26px); display:flex; flex-direction:column; flex:1;">
                <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:14px;">
                  <div>
                    <div style="font-size:10px; letter-spacing:0.26em; text-transform:uppercase; color:var(--accent,#c08a2e);">Premium Cosmetics</div>
                    <h3 style="font-family:'Nanum Myeongjo',serif; font-weight:700; font-size:clamp(20px,1.9vw,26px); color:#221d16; margin:8px 0 0; line-height:1.15;">Advanced Cosmetics</h3>
                  </div>
                  <span style="font-family:'Cormorant Garamond',serif; font-weight:500; font-size:clamp(32px,3.4vw,46px); color:#e6d6b4; line-height:0.7;">01</span>
                </div>
                <div style="position:relative; aspect-ratio:4/5; border-radius:9px; overflow:hidden; margin-bottom:16px;">
                  <img src="/assets/forest-light.jpg" alt="" style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover;">
                  <div style="position:absolute; inset:0; background:linear-gradient(180deg, rgba(20,16,10,0.05), rgba(20,16,10,0.55));"></div>
                  <div style="position:absolute; left:12px; right:12px; bottom:12px; display:flex; gap:6px; flex-wrap:wrap;">
                    <span style="background:rgba(255,253,249,0.18); border:1px solid rgba(255,253,249,0.35); color:#fffdf9; font-size:9px; letter-spacing:0.08em; padding:5px 9px; border-radius:999px;">DERMA</span>
                    <span style="background:rgba(255,253,249,0.18); border:1px solid rgba(255,253,249,0.35); color:#fffdf9; font-size:9px; letter-spacing:0.08em; padding:5px 9px; border-radius:999px;">BARRIER CARE</span>
                  </div>
                </div>
                <p style="font-size:13px; line-height:1.75; color:#4a4136; font-weight:300; margin:0 0 16px;">Clinically backed dermocosmetics — a high-performance line focused on the skin barrier and recovery.</p>
                <div style="font-size:9px; letter-spacing:0.18em; color:#9a8a6e; margin-bottom:8px;">DISTRIBUTED BRANDS</div>
                <div style="display:flex; gap:6px; flex-wrap:wrap; margin-bottom:14px;">
                  <span style="font-size:11px; letter-spacing:0.04em; color:#221d16; border:1px solid rgba(34,29,22,0.18); padding:5px 10px; border-radius:6px;">AETHER</span>
                  <span style="font-size:11px; letter-spacing:0.04em; color:#221d16; border:1px solid rgba(34,29,22,0.18); padding:5px 10px; border-radius:6px;">NOVELUME</span>
                </div>
                <div id="dc-panel-01" style="max-height:0; opacity:0; overflow:hidden; transition:max-height .55s cubic-bezier(.2,.7,.2,1), opacity .45s ease;">
                  <div style="border-top:1px solid rgba(34,29,22,0.12); padding-top:14px; display:flex; flex-direction:column; gap:10px;">
                    <div style="display:flex; align-items:center; gap:12px;"><span style="width:42px; height:42px; flex:none; border-radius:8px; background:repeating-linear-gradient(135deg,#ece1cd,#ece1cd 7px,#e2d2b6 7px,#e2d2b6 14px); display:flex; align-items:center; justify-content:center; font-family:'Jost',monospace; font-size:8px; color:#9a8a6e;">//</span><div style="flex:1; min-width:0;"><div style="font-family:'Jost',sans-serif; font-weight:500; font-size:13px; color:#221d16;">Recovery Cream</div><div style="font-size:10px; color:#8a7c60;">AETHER · Barrier · 50ml</div></div><span style="color:var(--accent,#c08a2e); font-size:13px;">→</span></div>
                    <div style="display:flex; align-items:center; gap:12px;"><span style="width:42px; height:42px; flex:none; border-radius:8px; background:repeating-linear-gradient(135deg,#ece1cd,#ece1cd 7px,#e2d2b6 7px,#e2d2b6 14px); display:flex; align-items:center; justify-content:center; font-family:'Jost',monospace; font-size:8px; color:#9a8a6e;">//</span><div style="flex:1; min-width:0;"><div style="font-family:'Jost',sans-serif; font-weight:500; font-size:13px; color:#221d16;">Vital Serum</div><div style="font-size:10px; color:#8a7c60;">NOVELUME · Anti-aging · 30ml</div></div><span style="color:var(--accent,#c08a2e); font-size:13px;">→</span></div>
                    <div style="display:flex; align-items:center; gap:12px;"><span style="width:42px; height:42px; flex:none; border-radius:8px; background:repeating-linear-gradient(135deg,#ece1cd,#ece1cd 7px,#e2d2b6 7px,#e2d2b6 14px); display:flex; align-items:center; justify-content:center; font-family:'Jost',monospace; font-size:8px; color:#9a8a6e;">//</span><div style="flex:1; min-width:0;"><div style="font-family:'Jost',sans-serif; font-weight:500; font-size:13px; color:#221d16;">Calming Ampoule</div><div style="font-size:10px; color:#8a7c60;">AETHER · Soothing · 7×2ml</div></div><span style="color:var(--accent,#c08a2e); font-size:13px;">→</span></div>
                  </div>
                </div>
                <button data-toggle="01" style="margin-top:14px; cursor:pointer; background:none; border:none; padding:0; display:inline-flex; align-items:center; gap:8px; font-family:'Jost',sans-serif; font-size:11px; letter-spacing:0.16em; text-transform:uppercase; color:var(--accent,#c08a2e);">
                  <span id="dc-label-01">Explore Products</span>
                  <span id="dc-arrow-01" style="display:inline-block; transition:transform .45s cubic-bezier(.2,.7,.2,1); font-size:13px;">↓</span>
                </button>
              </div>
            </article>

            <!-- 02 장비 -->
            <article style="background:#fffdf9; border:1px solid rgba(34,29,22,0.08); border-radius:14px; overflow:hidden; display:flex; flex-direction:column;">
              <div style="height:4px; background:#6b7a4e;"></div>
              <div style="padding:clamp(18px,1.6vw,26px); display:flex; flex-direction:column; flex:1;">
                <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:14px;">
                  <div>
                    <div style="font-size:10px; letter-spacing:0.26em; text-transform:uppercase; color:#6b7a4e;">Medical Devices</div>
                    <h3 style="font-family:'Nanum Myeongjo',serif; font-weight:700; font-size:clamp(20px,1.9vw,26px); color:#221d16; margin:8px 0 0; line-height:1.15;">Aesthetic Devices</h3>
                  </div>
                  <span style="font-family:'Cormorant Garamond',serif; font-weight:500; font-size:clamp(32px,3.4vw,46px); color:#ccd3bd; line-height:0.7;">02</span>
                </div>
                <div style="position:relative; aspect-ratio:4/5; border-radius:9px; overflow:hidden; margin-bottom:16px;">
                  <img src="/assets/golden-meadow.jpg" alt="" style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover;">
                  <div style="position:absolute; inset:0; background:linear-gradient(180deg, rgba(20,16,10,0.05), rgba(20,16,10,0.55));"></div>
                  <div style="position:absolute; left:12px; right:12px; bottom:12px; display:flex; gap:6px; flex-wrap:wrap;">
                    <span style="background:rgba(255,253,249,0.18); border:1px solid rgba(255,253,249,0.35); color:#fffdf9; font-size:9px; letter-spacing:0.08em; padding:5px 9px; border-radius:999px;">RF</span>
                    <span style="background:rgba(255,253,249,0.18); border:1px solid rgba(255,253,249,0.35); color:#fffdf9; font-size:9px; letter-spacing:0.08em; padding:5px 9px; border-radius:999px;">CLINIC</span>
                  </div>
                </div>
                <p style="font-size:13px; line-height:1.75; color:#4a4136; font-weight:300; margin:0 0 16px;">Certified aesthetic systems for clinics and medi-spas — engineered for safety, performance, and dependable after-sales support.</p>
                <div style="font-size:9px; letter-spacing:0.18em; color:#9a8a6e; margin-bottom:8px;">DISTRIBUTED BRANDS</div>
                <div style="display:flex; gap:6px; flex-wrap:wrap; margin-bottom:14px;">
                  <span style="font-size:11px; letter-spacing:0.04em; color:#221d16; border:1px solid rgba(34,29,22,0.18); padding:5px 10px; border-radius:6px;">VANTAGE</span>
                  <span style="font-size:11px; letter-spacing:0.04em; color:#221d16; border:1px solid rgba(34,29,22,0.18); padding:5px 10px; border-radius:6px;">PULSE</span>
                </div>
                <div id="dc-panel-02" style="max-height:0; opacity:0; overflow:hidden; transition:max-height .55s cubic-bezier(.2,.7,.2,1), opacity .45s ease;">
                  <div style="border-top:1px solid rgba(34,29,22,0.12); padding-top:14px; display:flex; flex-direction:column; gap:10px;">
                    <div style="display:flex; align-items:center; gap:12px;"><span style="width:42px; height:42px; flex:none; border-radius:8px; background:repeating-linear-gradient(135deg,#ece1cd,#ece1cd 7px,#e2d2b6 7px,#e2d2b6 14px); display:flex; align-items:center; justify-content:center; font-family:'Jost',monospace; font-size:8px; color:#9a8a6e;">//</span><div style="flex:1; min-width:0;"><div style="font-family:'Jost',sans-serif; font-weight:500; font-size:13px; color:#221d16;">RF Pro</div><div style="font-size:10px; color:#8a7c60;">VANTAGE · Monopolar RF</div></div><span style="color:#6b7a4e; font-size:13px;">→</span></div>
                    <div style="display:flex; align-items:center; gap:12px;"><span style="width:42px; height:42px; flex:none; border-radius:8px; background:repeating-linear-gradient(135deg,#ece1cd,#ece1cd 7px,#e2d2b6 7px,#e2d2b6 14px); display:flex; align-items:center; justify-content:center; font-family:'Jost',monospace; font-size:8px; color:#9a8a6e;">//</span><div style="flex:1; min-width:0;"><div style="font-family:'Jost',sans-serif; font-weight:500; font-size:13px; color:#221d16;">EMS Lift</div><div style="font-size:10px; color:#8a7c60;">PULSE · EMS · Face/Body</div></div><span style="color:#6b7a4e; font-size:13px;">→</span></div>
                    <div style="display:flex; align-items:center; gap:12px;"><span style="width:42px; height:42px; flex:none; border-radius:8px; background:repeating-linear-gradient(135deg,#ece1cd,#ece1cd 7px,#e2d2b6 7px,#e2d2b6 14px); display:flex; align-items:center; justify-content:center; font-family:'Jost',monospace; font-size:8px; color:#9a8a6e;">//</span><div style="flex:1; min-width:0;"><div style="font-family:'Jost',sans-serif; font-weight:500; font-size:13px; color:#221d16;">Cool Peel</div><div style="font-size:10px; color:#8a7c60;">VANTAGE · Laser · Resurfacing</div></div><span style="color:#6b7a4e; font-size:13px;">→</span></div>
                  </div>
                </div>
                <button data-toggle="02" style="margin-top:14px; cursor:pointer; background:none; border:none; padding:0; display:inline-flex; align-items:center; gap:8px; font-family:'Jost',sans-serif; font-size:11px; letter-spacing:0.16em; text-transform:uppercase; color:#6b7a4e;">
                  <span id="dc-label-02">Explore Products</span>
                  <span id="dc-arrow-02" style="display:inline-block; transition:transform .45s cubic-bezier(.2,.7,.2,1); font-size:13px;">↓</span>
                </button>
              </div>
            </article>

            <!-- 03 필러 -->
            <article style="background:#fffdf9; border:1px solid rgba(34,29,22,0.08); border-radius:14px; overflow:hidden; display:flex; flex-direction:column;">
              <div style="height:4px; background:#b06f44;"></div>
              <div style="padding:clamp(18px,1.6vw,26px); display:flex; flex-direction:column; flex:1;">
                <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:14px;">
                  <div>
                    <div style="font-size:10px; letter-spacing:0.26em; text-transform:uppercase; color:#b06f44;">HA Fillers</div>
                    <h3 style="font-family:'Nanum Myeongjo',serif; font-weight:700; font-size:clamp(20px,1.9vw,26px); color:#221d16; margin:8px 0 0; line-height:1.15;">Dermal Fillers</h3>
                  </div>
                  <span style="font-family:'Cormorant Garamond',serif; font-weight:500; font-size:clamp(32px,3.4vw,46px); color:#e3cbb6; line-height:0.7;">03</span>
                </div>
                <div style="position:relative; aspect-ratio:4/5; border-radius:9px; overflow:hidden; margin-bottom:16px;">
                  <img src="/assets/golden-sky.jpg" alt="" style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover;">
                  <div style="position:absolute; inset:0; background:linear-gradient(180deg, rgba(20,16,10,0.05), rgba(20,16,10,0.55));"></div>
                  <div style="position:absolute; left:12px; right:12px; bottom:12px; display:flex; gap:6px; flex-wrap:wrap;">
                    <span style="background:rgba(255,253,249,0.18); border:1px solid rgba(255,253,249,0.35); color:#fffdf9; font-size:9px; letter-spacing:0.08em; padding:5px 9px; border-radius:999px;">DERMAL</span>
                    <span style="background:rgba(255,253,249,0.18); border:1px solid rgba(255,253,249,0.35); color:#fffdf9; font-size:9px; letter-spacing:0.08em; padding:5px 9px; border-radius:999px;">HA</span>
                  </div>
                </div>
                <p style="font-size:13px; line-height:1.75; color:#4a4136; font-weight:300; margin:0 0 16px;">A curated dermal filler portfolio that meets global regulatory standards — documented for export and domestic markets alike.</p>
                <div style="font-size:9px; letter-spacing:0.18em; color:#9a8a6e; margin-bottom:8px;">DISTRIBUTED BRANDS</div>
                <div style="display:flex; gap:6px; flex-wrap:wrap; margin-bottom:14px;">
                  <span style="font-size:11px; letter-spacing:0.04em; color:#221d16; border:1px solid rgba(34,29,22,0.18); padding:5px 10px; border-radius:6px;">HYALA</span>
                  <span style="font-size:11px; letter-spacing:0.04em; color:#221d16; border:1px solid rgba(34,29,22,0.18); padding:5px 10px; border-radius:6px;">CONTOURA</span>
                </div>
                <div id="dc-panel-03" style="max-height:0; opacity:0; overflow:hidden; transition:max-height .55s cubic-bezier(.2,.7,.2,1), opacity .45s ease;">
                  <div style="border-top:1px solid rgba(34,29,22,0.12); padding-top:14px; display:flex; flex-direction:column; gap:10px;">
                    <div style="display:flex; align-items:center; gap:12px;"><span style="width:42px; height:42px; flex:none; border-radius:8px; background:repeating-linear-gradient(135deg,#ece1cd,#ece1cd 7px,#e2d2b6 7px,#e2d2b6 14px); display:flex; align-items:center; justify-content:center; font-family:'Jost',monospace; font-size:8px; color:#9a8a6e;">//</span><div style="flex:1; min-width:0;"><div style="font-family:'Jost',sans-serif; font-weight:500; font-size:13px; color:#221d16;">Volume L</div><div style="font-size:10px; color:#8a7c60;">HYALA · HA · 1.1ml</div></div><span style="color:#b06f44; font-size:13px;">→</span></div>
                    <div style="display:flex; align-items:center; gap:12px;"><span style="width:42px; height:42px; flex:none; border-radius:8px; background:repeating-linear-gradient(135deg,#ece1cd,#ece1cd 7px,#e2d2b6 7px,#e2d2b6 14px); display:flex; align-items:center; justify-content:center; font-family:'Jost',monospace; font-size:8px; color:#9a8a6e;">//</span><div style="flex:1; min-width:0;"><div style="font-family:'Jost',sans-serif; font-weight:500; font-size:13px; color:#221d16;">Fine Line</div><div style="font-size:10px; color:#8a7c60;">CONTOURA · HA · 1.0ml</div></div><span style="color:#b06f44; font-size:13px;">→</span></div>
                    <div style="display:flex; align-items:center; gap:12px;"><span style="width:42px; height:42px; flex:none; border-radius:8px; background:repeating-linear-gradient(135deg,#ece1cd,#ece1cd 7px,#e2d2b6 7px,#e2d2b6 14px); display:flex; align-items:center; justify-content:center; font-family:'Jost',monospace; font-size:8px; color:#9a8a6e;">//</span><div style="flex:1; min-width:0;"><div style="font-family:'Jost',sans-serif; font-weight:500; font-size:13px; color:#221d16;">Deep Shape</div><div style="font-size:10px; color:#8a7c60;">HYALA · HA · 1.1ml</div></div><span style="color:#b06f44; font-size:13px;">→</span></div>
                  </div>
                </div>
                <button data-toggle="03" style="margin-top:14px; cursor:pointer; background:none; border:none; padding:0; display:inline-flex; align-items:center; gap:8px; font-family:'Jost',sans-serif; font-size:11px; letter-spacing:0.16em; text-transform:uppercase; color:#b06f44;">
                  <span id="dc-label-03">Explore Products</span>
                  <span id="dc-arrow-03" style="display:inline-block; transition:transform .45s cubic-bezier(.2,.7,.2,1); font-size:13px;">↓</span>
                </button>
              </div>
            </article>

          </div>
        </div>
      </div>
    </section>

    <!-- PORTFOLIO -->
    <section id="portfolio" style="background:#f6ece4; padding:clamp(20px,3vh,40px) clamp(24px,5vw,72px) clamp(90px,14vh,180px);">
      <div data-reveal style="opacity:0; transform:translateY(28px); transition:opacity 1.1s cubic-bezier(.2,.7,.2,1), transform 1.1s cubic-bezier(.2,.7,.2,1); max-width:1280px; margin:0 auto;">
        <section style="position:relative; background:#3a2b28; border-radius:clamp(28px,3vw,44px); padding:clamp(40px,5.5vw,80px) clamp(24px,4vw,60px) clamp(44px,5.5vw,72px); overflow:hidden;">

          <!-- soft glow -->
          <div style="position:absolute; top:38%; left:50%; width:680px; height:680px; transform:translate(-50%,-50%); border-radius:50%; background:radial-gradient(circle, rgba(230,182,82,0.12), transparent 66%); pointer-events:none;"></div>

          <!-- header -->
          <div style="position:relative; text-align:center; margin-bottom:clamp(36px,5vw,60px);">
            <div style="font-size:12px; letter-spacing:0.4em; text-transform:uppercase; color:var(--accent-soft,#e6b652);">Selected · Distribution Partners</div>
            <h2 style="font-family:'Nanum Myeongjo',serif; font-weight:800; font-size:clamp(36px,6vw,72px); color:#fffdf9; line-height:1.02; margin:18px 0 0;">The Brands We Carry</h2>
            <p style="font-family:'Cormorant Garamond',serif; font-style:italic; font-size:clamp(18px,2.2vw,26px); color:rgba(244,236,221,0.62); margin:14px 0 0;">Six trusted names, three disciplines.</p>
          </div>

          <!-- fan coverflow carousel -->
          <div data-bcarousel style="position:relative;">
            <div data-bstage tabindex="0" style="position:relative; height:480px; perspective:1600px; outline:none; touch-action:pan-y; -webkit-user-select:none; user-select:none;">
              <div data-btrack style="position:absolute; inset:0; transform-style:preserve-3d;">
              <article data-bcard data-name="AETHER" style="position:absolute; top:0; left:50%; width:300px; margin-left:-150px; height:440px; border-radius:22px; overflow:hidden; box-sizing:border-box; padding:26px; display:flex; flex-direction:column; box-shadow:0 34px 70px -24px rgba(0,0,0,.55); transform-origin:50% 60%; will-change:transform; cursor:grab; transition:transform .6s cubic-bezier(.2,.7,.2,1), opacity .55s ease; transform:translateX(-360px) translateY(40px) rotateZ(-12deg) rotateY(22deg) scale(0.76); opacity:0.68; z-index:100; background:linear-gradient(165deg,#e0ac4d,#c08a2e); color:#2a1c06;">
                <div style="display:flex; justify-content:space-between; align-items:flex-start;">
                  <div><h3 style="font-family:'Jost',sans-serif; font-weight:500; font-size:26px; letter-spacing:0.08em; margin:0; line-height:1;">AETHER</h3><div style="font-size:9px; letter-spacing:0.22em; opacity:0.72; margin-top:7px;">ADVANCED COSMETICS</div></div>
                  <div style="width:46px;height:46px;flex:none;border-radius:50%;border:1px solid rgba(42,28,6,0.45);display:flex;align-items:center;justify-content:center;font-family:'Jost',sans-serif;font-weight:500;font-size:12px;color:inherit;">2026</div>
                </div>
                <div style="flex:1; display:flex; align-items:center; justify-content:center;"><div style="display:flex; align-items:center; gap:11px;"><span style="width:13px; height:13px; background:#2a1c06; transform:rotate(45deg);"></span><span style="font-family:'Cormorant Garamond',serif; font-weight:600; font-size:38px; letter-spacing:0.12em;">AETHER</span></div></div>
                <div style="display:flex; flex-wrap:wrap; gap:7px;"><span style="background:#2a1c06; color:#f6ece4; font-size:10px; letter-spacing:0.1em; padding:7px 12px; border-radius:999px;">SKINCARE</span><span style="background:#2a1c06; color:#f6ece4; font-size:10px; letter-spacing:0.1em; padding:7px 12px; border-radius:999px;">BARRIER REPAIR</span></div>
              </article>
              <article data-bcard data-name="NOVELUME" style="position:absolute; top:0; left:50%; width:300px; margin-left:-150px; height:440px; border-radius:22px; overflow:hidden; box-sizing:border-box; padding:26px; display:flex; flex-direction:column; box-shadow:0 34px 70px -24px rgba(0,0,0,.55); transform-origin:50% 60%; will-change:transform; cursor:grab; transition:transform .6s cubic-bezier(.2,.7,.2,1), opacity .55s ease; transform:translateX(-180px) translateY(10px) rotateZ(-6deg) rotateY(11deg) scale(0.88); opacity:0.84; z-index:110; background:#f3e8d4; color:#3a2b28;">
                <div style="display:flex; justify-content:space-between; align-items:flex-start;">
                  <div><h3 style="font-family:'Jost',sans-serif; font-weight:500; font-size:26px; letter-spacing:0.08em; margin:0; line-height:1;">NOVELUME</h3><div style="font-size:9px; letter-spacing:0.22em; color:#8a7c60; margin-top:7px;">ADVANCED COSMETICS</div></div>
                  <div style="width:46px;height:46px;flex:none;border-radius:50%;border:1px solid rgba(33,27,19,0.25);display:flex;align-items:center;justify-content:center;font-family:'Jost',sans-serif;font-weight:500;font-size:12px;color:inherit;">2026</div>
                </div>
                <div style="flex:1; margin:18px 0; border-radius:12px; background:repeating-linear-gradient(135deg,#e6d8bd,#e6d8bd 10px,#ddcdae 10px,#ddcdae 20px); display:flex; align-items:center; justify-content:center;"><span style="font-family:'Cormorant Garamond',serif; font-weight:600; font-size:34px; letter-spacing:0.1em; color:#9a8a6e;">Novelume</span></div>
                <div style="display:flex; flex-wrap:wrap; gap:7px;"><span style="background:#3a2b28; color:#f6ece4; font-size:10px; letter-spacing:0.1em; padding:7px 12px; border-radius:999px;">ANTI-AGING</span><span style="background:#3a2b28; color:#f6ece4; font-size:10px; letter-spacing:0.1em; padding:7px 12px; border-radius:999px;">SERUM</span></div>
              </article>
              <article data-bcard data-name="VANTAGE" style="position:absolute; top:0; left:50%; width:300px; margin-left:-150px; height:440px; border-radius:22px; overflow:hidden; box-sizing:border-box; padding:26px; display:flex; flex-direction:column; box-shadow:0 34px 70px -24px rgba(0,0,0,.55); transform-origin:50% 60%; will-change:transform; cursor:grab; transition:transform .6s cubic-bezier(.2,.7,.2,1), opacity .55s ease; transform:translateX(0px) translateY(0px) rotateZ(0deg) rotateY(0deg) scale(1); opacity:1; z-index:120; background:#1a160f; color:#fffdf9;">
                <img src="/assets/golden-meadow.jpg" alt="" style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover; pointer-events:none;">
                <div style="position:absolute; inset:0; background:linear-gradient(180deg,rgba(20,16,10,0.42),rgba(20,16,10,0.15) 42%,rgba(20,16,10,0.84)); pointer-events:none;"></div>
                <div style="position:relative; display:flex; flex-direction:column; height:100%;">
                  <div style="display:flex; justify-content:space-between; align-items:flex-start;">
                    <div><h3 style="font-family:'Jost',sans-serif; font-weight:500; font-size:26px; letter-spacing:0.08em; margin:0; line-height:1;">VANTAGE</h3><div style="font-size:9px; letter-spacing:0.22em; opacity:0.75; margin-top:7px;">AESTHETIC DEVICES</div></div>
                    <div style="width:46px;height:46px;flex:none;border-radius:50%;border:1px solid rgba(255,253,249,0.5);display:flex;align-items:center;justify-content:center;font-family:'Jost',sans-serif;font-weight:500;font-size:12px;color:inherit;">2026</div>
                  </div>
                  <div style="margin-top:auto; display:flex; flex-wrap:wrap; gap:7px;"><span style="background:rgba(255,253,249,0.16); border:1px solid rgba(255,253,249,0.3); color:#fffdf9; font-size:10px; letter-spacing:0.1em; padding:7px 12px; border-radius:999px;">RF DEVICE</span><span style="background:rgba(255,253,249,0.16); border:1px solid rgba(255,253,249,0.3); color:#fffdf9; font-size:10px; letter-spacing:0.1em; padding:7px 12px; border-radius:999px;">CLINIC</span><span style="background:rgba(255,253,249,0.16); border:1px solid rgba(255,253,249,0.3); color:#fffdf9; font-size:10px; letter-spacing:0.1em; padding:7px 12px; border-radius:999px;">SAFETY</span></div>
                </div>
              </article>
              <article data-bcard data-name="PULSE" style="position:absolute; top:0; left:50%; width:300px; margin-left:-150px; height:440px; border-radius:22px; overflow:hidden; box-sizing:border-box; padding:26px; display:flex; flex-direction:column; box-shadow:0 34px 70px -24px rgba(0,0,0,.55); transform-origin:50% 60%; will-change:transform; cursor:grab; transition:transform .6s cubic-bezier(.2,.7,.2,1), opacity .55s ease; transform:translateX(180px) translateY(10px) rotateZ(6deg) rotateY(-11deg) scale(0.88); opacity:0.84; z-index:110; background:#2c3722; color:#eef0e4;">
                <div style="display:flex; justify-content:space-between; align-items:flex-start;">
                  <div><h3 style="font-family:'Jost',sans-serif; font-weight:500; font-size:26px; letter-spacing:0.08em; margin:0; line-height:1;">PULSE</h3><div style="font-size:9px; letter-spacing:0.22em; opacity:0.6; margin-top:7px;">AESTHETIC DEVICES</div></div>
                  <div style="width:46px;height:46px;flex:none;border-radius:50%;border:1px solid rgba(238,240,228,0.35);display:flex;align-items:center;justify-content:center;font-family:'Jost',sans-serif;font-weight:500;font-size:12px;color:inherit;">2026</div>
                </div>
                <div style="flex:1; display:flex; align-items:center; justify-content:center;"><div style="display:flex; align-items:center; gap:10px;"><span style="width:11px; height:11px; border:2px solid var(--accent-soft,#e6b652); border-radius:50%;"></span><span style="font-family:'Cormorant Garamond',serif; font-weight:600; font-size:36px; letter-spacing:0.1em;">PULSE</span></div></div>
                <div style="display:flex; flex-wrap:wrap; gap:7px;"><span style="background:rgba(238,240,228,0.12); color:#eef0e4; font-size:10px; letter-spacing:0.1em; padding:7px 12px; border-radius:999px;">EMS</span><span style="background:rgba(238,240,228,0.12); color:#eef0e4; font-size:10px; letter-spacing:0.1em; padding:7px 12px; border-radius:999px;">LIFTING</span></div>
              </article>
              <article data-bcard data-name="HYALA" style="position:absolute; top:0; left:50%; width:300px; margin-left:-150px; height:440px; border-radius:22px; overflow:hidden; box-sizing:border-box; padding:26px; display:flex; flex-direction:column; box-shadow:0 34px 70px -24px rgba(0,0,0,.55); transform-origin:50% 60%; will-change:transform; cursor:grab; transition:transform .6s cubic-bezier(.2,.7,.2,1), opacity .55s ease; transform:translateX(360px) translateY(40px) rotateZ(12deg) rotateY(-22deg) scale(0.76); opacity:0.68; z-index:100; background:linear-gradient(165deg,#cf9670,#b06f44); color:#2a1406;">
                <div style="display:flex; justify-content:space-between; align-items:flex-start;">
                  <div><h3 style="font-family:'Jost',sans-serif; font-weight:500; font-size:26px; letter-spacing:0.08em; margin:0; line-height:1;">HYALA</h3><div style="font-size:9px; letter-spacing:0.22em; opacity:0.72; margin-top:7px;">DERMAL FILLERS</div></div>
                  <div style="width:46px;height:46px;flex:none;border-radius:50%;border:1px solid rgba(42,20,6,0.4);display:flex;align-items:center;justify-content:center;font-family:'Jost',sans-serif;font-weight:500;font-size:12px;color:inherit;">2026</div>
                </div>
                <div style="flex:1; display:flex; align-items:center; justify-content:center;"><div style="display:flex; flex-direction:column; align-items:center; gap:9px;"><span style="width:14px; height:14px; background:#2a1406; border-radius:50%;"></span><span style="font-family:'Cormorant Garamond',serif; font-weight:600; font-size:37px; letter-spacing:0.14em;">HYALA</span></div></div>
                <div style="display:flex; flex-wrap:wrap; gap:7px;"><span style="background:#2a1406; color:#f6ece4; font-size:10px; letter-spacing:0.1em; padding:7px 12px; border-radius:999px;">DERMAL FILLER</span><span style="background:#2a1406; color:#f6ece4; font-size:10px; letter-spacing:0.1em; padding:7px 12px; border-radius:999px;">HA</span></div>
              </article>
              <article data-bcard data-name="CONTOURA" style="position:absolute; top:0; left:50%; width:300px; margin-left:-150px; height:440px; border-radius:22px; overflow:hidden; box-sizing:border-box; padding:26px; display:flex; flex-direction:column; box-shadow:0 34px 70px -24px rgba(0,0,0,.55); transform-origin:50% 60%; will-change:transform; cursor:grab; transition:transform .6s cubic-bezier(.2,.7,.2,1), opacity .55s ease; transform:translateX(540px) translateY(90px) rotateZ(18deg) rotateY(-33deg) scale(0.72); opacity:0.64; z-index:90; background:#1a160f; color:#fffdf9;">
                <img src="/assets/golden-sky.jpg" alt="" style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover; pointer-events:none;">
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
            <a href="#portfolio" style="color:inherit; text-decoration:none;">Brands</a>
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

  </main>
</div>`;
