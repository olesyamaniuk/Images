import{a as $,S as b,i as p}from"./assets/vendor-5401a4b0.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const w=document.querySelector(".todo-list");function h(i){const o=i.map(({webformatURL:r,largeImageURL:s,tags:e,likes:t,views:a,comments:g,downloads:E})=>`<li class="photo-main-list">
            <a class="galery-link"  href="${s}">
            <img class="photo" width="360" height="200" src="${r}" alt="${e}" />
            </a>
              <ul class='list-menu'>
                <li class='description'>
                  <h3 class='title'>Likes</h3>
                  <p class='datas'>${t}</p>
                </li>
                <li class='description'>
                  <h3 class='title'>Views</h3>
                  <p class='datas'>${a}</p>
                </li>
                <li class='description'>
                  <h3 class='title'>Comments</h3>
                  <p class='datas'>${g}</p>
                </li>
                <li class='description'>
                  <h3 class='title'>Downloads</h3>
                  <p class='datas'>${E}</p>
                </li>
              </ul>
            </li>`).join("");w.insertAdjacentHTML("beforeend",o)}const L="42676723-0286cb816b5743467714b50d3",S="https://pixabay.com/api/",q="photo",v="horizontal",A="true";async function y(i,o,r){const s=i.trim(),e=`${S}?key=${L}&q=${s}&image_type=${q}&orientation=${v}&safesearch=${A}&per_page=${o}&page=${r}`;try{const t=await $.get(e);if(t.status!==200)throw new Error(t.status);return t.data}catch(t){throw new Error(`Error fetching images: ${t.message}`)}}const c=document.querySelector(".todo-list"),I=document.querySelector(".input-text"),O=document.querySelector(".main-form"),l=document.querySelector(".loader"),n=document.querySelector('[data-action="load-more"]');let d=1,f;l.style.display="none";const m=new b(".todo-list a.galery-link",{captionsData:"alt",captionDelay:500});O.addEventListener("submit",async function(o){o.preventDefault();const r=I.value;try{const s=await y(r,15,1);if(s.hits.length===0)return c.innerHTML="",l.style.display="none",n.classList.add("is-hidden"),R();h(s.hits),m.refresh(),f=r,d=1,l.style.display="none",s.hits.length<15?(n.style.display="none",u()):n.style.display="block"}catch(s){console.error(s)}});n.addEventListener("click",function(o){o.preventDefault(),c.insertAdjacentElement("afterend",l),l.style.display="inline-block",d++,y(f,15,d).then(r=>{if(r.hits.length===0)return n.style.display="none",u();{h(r.hits),m.refresh();const s=c;l.style.display="none";const e=s.getBoundingClientRect();window.scrollBy(0,e.height*2),r.hits.length<15?(n.style.display="none",u()):n.style.display="block"}})});function R(){p.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}function u(){p.error({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})}
//# sourceMappingURL=commonHelpers.js.map
