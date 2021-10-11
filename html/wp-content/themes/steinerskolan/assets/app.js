document.addEventListener('DOMContentLoaded', () => {
  const yearBtns = document.querySelectorAll('.year-btn');
  const contentLinks = document.querySelectorAll(
    '.content-link-container aside ul li'
  );

  contentLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      const activeLinks = document.querySelectorAll('.active-content-link');
      activeLinks.forEach((activeLink) => {
        activeLink.classList.remove('active-content-link');
      });

      e.currentTarget.classList.add('active-content-link');
    });
  });

  yearBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const container = document.querySelector(
        '.' + e.currentTarget.textContent.split(' ').join('')
      );
      container.classList.toggle('year-box-content-visible');
      e.currentTarget.classList.toggle('year-btn-open');

      const openSvg = e.currentTarget.children[0];
      const closeSvg = e.currentTarget.children[1];

      openSvg.classList.toggle('svg-hidden');
      closeSvg.classList.toggle('svg-visible');
    });
  });
});
