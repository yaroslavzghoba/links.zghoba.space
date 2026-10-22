document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.links-button');
  links.forEach((link) => {
    link.addEventListener('click', () => {
      link.classList.add('links-button-visited');
      window.setTimeout(() => link.classList.remove('links-button-visited'), 250);
    });
  });
});
