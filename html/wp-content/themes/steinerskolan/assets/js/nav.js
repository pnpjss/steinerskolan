document.addEventListener('DOMContentLoaded', function () {
  const hamburgerBtn = document.querySelector('.toggle-nav');
  const section = document.querySelector('section');

  const searchBtn = document.querySelector('.toggle-search');
  const aside = document.querySelector('aside');

  hamburgerBtn.addEventListener('click', () => {
    console.log(section);
    if (section.style.display === 'flex') {
      section.style.display = 'none';
    }
    else if(aside.style.display === 'flex'){
      aside.style.display = 'none';
      section.style.display = 'flex';
    }
    else {
      section.style.display = 'flex';
    }
  })

  searchBtn.addEventListener('click', () => {
    if (aside.style.display === 'flex') {
      aside.style.display = 'none';
    }
    else if (section.style.display === "flex"){
      section.style.display = 'none';
      aside.style.display = 'flex';
    }
    else {
      aside.style.display = 'flex';
    }
  })
  
});