(() => {
  const PHONE = "5562998707878";
  const WHEN_TEXT = {
    hoje: "É urgente, se der para hoje.",
    dias: "Pode ser nos próximos dias.",
    orcamento: "Por enquanto quero só um orçamento.",
  };

  const chips = [...document.querySelectorAll(".chip")];
  const picks = [...document.querySelectorAll(".svc")];
  const whereInput = document.getElementById("where");
  const nameInput = document.getElementById("name");
  const bubble = document.getElementById("bubble");
  const tray = document.getElementById("tray");
  const trayCount = document.getElementById("tray-count");
  const waLinks = [...document.querySelectorAll("[data-wa]")];
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  const selected = () => chips.filter((c) => c.getAttribute("aria-pressed") === "true");

  const joinList = (items) =>
    items.length <= 1 ? items.join("") : `${items.slice(0, -1).join(", ")} e ${items[items.length - 1]}`;

  function composeMessage() {
    const services = selected().map((c) => c.dataset.msg);
    const name = nameInput.value.trim();
    const where = whereInput.value.trim();
    const when = document.querySelector('input[name="when"]:checked')?.value;

    const parts = ["Olá, Disk Help!"];
    if (name) parts.push(`Aqui é ${name}.`);
    parts.push(services.length ? `Preciso de ${joinList(services)}.` : "Preciso de um help.");
    if (where) parts.push(`Local: ${where}.`);
    if (when) parts.push(WHEN_TEXT[when]);
    return parts.join(" ");
  }

  function render() {
    const message = composeMessage();
    if (bubble.textContent !== message) {
      bubble.textContent = message;
      if (!reduceMotion.matches) {
        bubble.animate([{ opacity: 0.55 }, { opacity: 1 }], { duration: 180, easing: "cubic-bezier(0.23, 1, 0.32, 1)" });
      }
    }
    const href = `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;
    waLinks.forEach((a) => (a.href = href));

    const chosen = new Set(selected().map((c) => c.dataset.service));
    picks.forEach((p) => {
      const on = chosen.has(p.dataset.pick);
      p.setAttribute("aria-pressed", String(on));
      p.querySelector(".svc__cta-text").textContent = on ? "No chamado" : "Adicionar";
      p.querySelector(".svc__cta use").setAttribute("href", on ? "#i-check" : "#i-plus");
    });

    const n = chosen.size;
    tray.hidden = n === 0;
    trayCount.textContent = n === 1 ? "1 serviço" : `${n} serviços`;
  }

  chips.forEach((chip) =>
    chip.addEventListener("click", () => {
      chip.setAttribute("aria-pressed", String(chip.getAttribute("aria-pressed") !== "true"));
      render();
    })
  );

  picks.forEach((pick) =>
    pick.addEventListener("click", () => {
      const chip = chips.find((c) => c.dataset.service === pick.dataset.pick);
      chip.setAttribute("aria-pressed", String(chip.getAttribute("aria-pressed") !== "true"));
      render();
    })
  );

  [whereInput, nameInput].forEach((el) => el.addEventListener("input", render));
  document.querySelectorAll('input[name="when"]').forEach((el) => el.addEventListener("change", render));

  const floatWa = document.getElementById("float-wa");
  const hero = document.querySelector(".hero");
  if ("IntersectionObserver" in window) {
    new IntersectionObserver(([entry]) => {
      floatWa.classList.toggle("is-visible", !entry.isIntersecting);
    }).observe(hero);
  } else {
    floatWa.classList.add("is-visible");
  }

  render();
})();
