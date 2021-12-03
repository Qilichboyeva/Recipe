const searchForm = document.querySelector('form');
const searchResultDiv = document.querySelector('.search-result');
const conatiner = document.querySelector('.container');
let serachQuery = '';
const APP_ID = ''

searchForm.addEventListener('submit', (0) => {
    e.preventDefault();
    searchQuery = e.target.querySelector('input').value;
    
})