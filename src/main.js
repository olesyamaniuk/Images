import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import createMarkup from './js/render-functions';
import getImages from "./js/pixabay-api";

const list = document.querySelector('.todo-list');
const input = document.querySelector('.input-text');
const form = document.querySelector('.main-form');
const load = document.querySelector('.loader');

const loadMoreBtn = document.querySelector('[data-action="load-more"]');

let currentPage = 1;
let currentQuery;

load.style.display = 'none';

const lightbox = new SimpleLightbox('.todo-list a.galery-link', {
    captionsData: 'alt',
    captionDelay: 500,
});

form.addEventListener('submit', async function handler(event) {
    event.preventDefault();
    const query = input.value;
    try {
        const data = await getImages( query, 15, 1);
        if( data.hits.length === 0){
            list.innerHTML = '';
            load.style.display = 'none';
            loadMoreBtn.classList.add('is-hidden');
            return handlerError();
        }
        else{
            createMarkup(data.hits);
            lightbox.refresh();
            currentQuery = query;
            currentPage = 1
            load.style.display = 'none';
            if(data.hits.length < 15 ){
                loadMoreBtn.style.display = 'none';
                handlerErrorResult();
            }
            else{
                loadMoreBtn.style.display = 'block';
            }
        }
    }
    catch(error){
        console.error(error);
    }
});

loadMoreBtn.addEventListener('click', function loadImages(event) {
    event.preventDefault();
  
    list.insertAdjacentElement('afterend', load);
    load.style.display = 'inline-block';
    currentPage++;
   
    getImages(currentQuery, 15, currentPage).then(data => {
      if (data.hits.length === 0) {
        loadMoreBtn.style.display = 'none';
        return handlerErrorResult();
      } else {
        createMarkup(data.hits);
        lightbox.refresh();
        const boxFotos = list;
        load.style.display = 'none';
        const rect = boxFotos.getBoundingClientRect();
        window.scrollBy(0, rect.height * 2);
  
        if (data.hits.length < 15) {
          loadMoreBtn.style.display = 'none';
          handlerErrorResult();
        } else {
          loadMoreBtn.style.display = 'block';
        }
      }
   
        });
      
});
function handlerError(){
    iziToast.error({
        message: `Sorry, there are no images matching your search query. Please try again!`,
        position: 'topRight',
        
    });
}

function handlerErrorResult() {
    iziToast.error({
      message: "We're sorry, but you've reached the end of search results.",
      position: 'topRight',
    });
  }