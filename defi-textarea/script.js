// Configuration du compteur
// La limitation de caractères est gérée nativement par l'attribut maxlength du textarea

const config = {
  maxLength: 250,
  // Le seuil d'avertissement est calculé à 90% de la longueur maximale
  get warningThreshold() {
    return Math.floor(this.maxLength * 0.9);
  },
};

// Sélection des éléments du DOM
const elements = {
  textarea: document.getElementById("textarea"),
  counter: document.getElementById("counter"),
  count: document.querySelector(".counter .count"),
  limitAlert: document.querySelector(".counter .limit-alert"),
};

/**
 * Met à jour le compteur et les états visuels
 * @param {number} count - Nombre de caractères actuel
 */
const updateCounter = (count) => {
  // Mise à jour du texte du compteur
  elements.count.textContent = `${count} / ${config.maxLength}`;

  // Gestion du message d'alerte de limite
  elements.limitAlert.textContent =
    count >= config.maxLength ? " (limite atteinte)" : "";

  // Gestion des états visuels et des attributs ARIA
  if (count >= config.maxLength) {
    elements.textarea.classList.add("is-error");
    elements.counter.classList.add("is-error");
    elements.textarea.setAttribute("aria-invalid", "true");
  } else if (count >= config.warningThreshold) {
    elements.textarea.classList.remove("is-error");
    elements.counter.classList.remove("is-error");
    elements.textarea.classList.add("is-warning");
    elements.counter.classList.add("is-warning");
    elements.textarea.removeAttribute("aria-invalid");
  } else {
    elements.textarea.classList.remove("is-error", "is-warning");
    elements.counter.classList.remove("is-error", "is-warning");
    elements.textarea.removeAttribute("aria-invalid");
  }
};

// Écouteur d'événement pour la saisie
elements.textarea.addEventListener("input", (event) => {
  const count = event.target.value.length;
  updateCounter(count);
});

// Initialisation du compteur
updateCounter(0);
