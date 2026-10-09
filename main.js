(function () {
  if (window.I18N) {
    window.I18N.init();
  }

  const header = document.querySelector(".site-header");
  const menuToggle = document.querySelector(".menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  const heroLogo = document.querySelector(".hero-logo");

  function onScroll() {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 40);
    const logoInView =
      heroLogo && heroLogo.getBoundingClientRect().bottom > header.offsetHeight;
    const menuOpen = mobileMenu && !mobileMenu.hidden;
    header.classList.toggle("is-hero", Boolean(logoInView) && !menuOpen);
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  onScroll();

  function scrollToTop() {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
    if (window.location.hash) {
      history.replaceState(null, "", window.location.pathname + window.location.search);
    }
  }

  document.querySelectorAll('a[href="#top"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      scrollToTop();
      if (menuToggle && mobileMenu && !mobileMenu.hidden) {
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute(
          "aria-label",
          window.I18N ? window.I18N.t("aria.menuOpen") : "Abrir menu"
        );
        mobileMenu.hidden = true;
        document.body.style.overflow = "";
      }
    });
  });

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", () => {
      const open = menuToggle.getAttribute("aria-expanded") === "true";
      menuToggle.setAttribute("aria-expanded", String(!open));
      const labelKey = open ? "aria.menuOpen" : "aria.menuClose";
      menuToggle.setAttribute(
        "aria-label",
        window.I18N ? window.I18N.t(labelKey) : open ? "Abrir menu" : "Fechar menu"
      );
      mobileMenu.hidden = open;
      document.body.style.overflow = open ? "" : "hidden";
      onScroll();
    });

    mobileMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        menuToggle.setAttribute("aria-expanded", "false");
        mobileMenu.hidden = true;
        document.body.style.overflow = "";
      });
    });
  }

  // Hero stills cycle slowly. Anyone who asked the system for less motion keeps
  // the first one, so the page never animates behind the text they are reading.
  // A video shot plays once from the start and hands over when it ends; it only
  // downloads when its turn first comes, so it never delays the first paint.
  const shots = document.querySelectorAll(".hero-shot");
  if (shots.length > 1 && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const STILL_MS = 7000;
    let current = 0;
    let timer;

    const advance = () => {
      const prev = shots[current];
      prev.classList.remove("is-on");
      if (prev instanceof HTMLVideoElement) prev.pause();

      current = (current + 1) % shots.length;
      const shot = shots[current];
      shot.classList.add("is-on");

      if (shot instanceof HTMLVideoElement) {
        shot.currentTime = 0;
        shot.onended = () => {
          clearTimeout(timer);
          advance();
        };
        // Safety net if playback is blocked or stalls: never hold the slot forever.
        timer = setTimeout(advance, 40000);
        shot.play().catch(() => {
          clearTimeout(timer);
          timer = setTimeout(advance, 0);
        });
      } else {
        timer = setTimeout(advance, STILL_MS);
      }
    };

    timer = setTimeout(advance, STILL_MS);
  }

  // Trailers load as a facade: the cover stands in until someone asks to watch.
  // Embedding the iframe up front pulls ~1MB of YouTube's player and sets its
  // cookies on every visit, for a video most visitors never play.
  document.querySelectorAll("[data-trailer]").forEach((button) => {
    button.addEventListener("click", () => {
      const id = button.getAttribute("data-trailer");
      if (!id) return;
      const frame = document.createElement("iframe");
      frame.className = "trailer-frame";
      frame.src =
        "https://www.youtube-nocookie.com/embed/" +
        encodeURIComponent(id) +
        "?autoplay=1&rel=0";
      frame.title = button.getAttribute("aria-label") || "";
      frame.allow =
        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
      frame.allowFullscreen = true;
      const media = button.closest(".showcase-media");
      button.replaceWith(frame);
      // The status badge sits where the player puts its own title bar.
      if (media) media.classList.add("is-playing");
      frame.focus();
    });
  });

  const revealEls = document.querySelectorAll(".reveal");
  if (revealEls.length && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    revealEls.forEach((el) => observer.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  }

})();
