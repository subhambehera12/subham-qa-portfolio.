// Function to toggle accordion cards open/closed on click
function toggleAccordion(id) {
  const card = document.getElementById(id);
  if (card) {
    card.classList.toggle('active');
  }
}

// Auto-open the experience card by default so visitors see content right away
document.addEventListener("DOMContentLoaded", () => {
  const defaultOpen = document.getElementById('expAccordion');
  if (defaultOpen) {
    defaultOpen.classList.add('active');
  }
});
