(function () {
      const viewport = document.getElementById("viewport");
      const sections = Array.from(document.querySelectorAll("section"));
      let index = 0;
      let lock = false;

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const i = sections.indexOf(e.target);
            if (i >= 0) index = i;
          }
        });
      }, { root: viewport, threshold: 0.6 });

      sections.forEach(s => observer.observe(s));

      function goTo(i) {
        index = Math.max(0, Math.min(i, sections.length - 1));
        sections[index].scrollIntoView({ behavior: "smooth", block: "start" });
      }

      function step(dir) {
        if (lock) return;
        lock = true;
        goTo(index + dir);
        setTimeout(() => { lock = false; }, 520);
      }

      viewport.addEventListener("wheel", (e) => {
        e.preventDefault();
        if (e.deltaY > 0) step(1);
        else if (e.deltaY < 0) step(-1);
      }, { passive: false });

      window.addEventListener("keydown", (e) => {
        if (e.key === "ArrowDown" || e.key === "PageDown") step(1);
        if (e.key === "ArrowUp" || e.key === "PageUp") step(-1);
        if (e.key === "Home") goTo(0);
        if (e.key === "End") goTo(sections.length - 1);
      });

      document.querySelectorAll("[data-next]").forEach((btn) => {
        btn.addEventListener("click", () => step(1));
      });

      document.querySelectorAll("[data-go]").forEach((btn) => {
        btn.addEventListener("click", () => {
          const id = btn.getAttribute("data-go");
          const target = document.getElementById(id);
          if (!target) return;
          const parentSection = target.closest("section");
          const i = sections.indexOf(parentSection || target);
          if (i >= 0) goTo(i);
          else target.scrollIntoView({ behavior: "smooth", block: "start" });
        });
      });
    })();
