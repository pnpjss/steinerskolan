document.addEventListener('DOMContentLoaded', function () {
  const hamburgerBtn = document.querySelector('.toggle-nav');
  const mobileLinkContainer = document.querySelector('.mobile-link-container');

  const searchBtn = document.querySelector('.toggle-search');
  const mobileSearchContainer = document.querySelector('.mobile-search-container');

  hamburgerBtn.addEventListener('click', () => {
    if (mobileLinkContainer.style.display === 'flex') {
      mobileLinkContainer.style.display = 'none';
    }
    else if(mobileSearchContainer.style.display === 'flex'){
      mobileSearchContainer.style.display = 'none';
      mobileLinkContainer.style.display = 'flex';
    }
    else {
      mobileLinkContainer.style.display = 'flex';
    }
  })

  searchBtn.addEventListener('click', () => {
    if (mobileSearchContainer.style.display === 'flex') {
      mobileSearchContainer.style.display = 'none';
    }
    else if (mobileLinkContainer.style.display === "flex"){
      mobileLinkContainer.style.display = 'none';
      mobileSearchContainer.style.display = 'flex';
    }
    else {
      mobileSearchContainer.style.display = 'flex';
    }
  })
  
});