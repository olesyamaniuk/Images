import{a as E,S as L,i as h}from"./assets/vendor-5401a4b0.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const w=document.querySelector(".todo-list");function y(i){const r=i.map(({webformatURL:o,largeImageURL:s,tags:e,likes:t,views:a,comments:b,downloads:$})=>`<li class="photo-main-list">
            <a class="galery-link"  href="${s}">
            <img class="photo" width="360" height="200" src="${o}" alt="${e}" />
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
                  <p class='datas'>${b}</p>
                </li>
                <li class='description'>
                  <h3 class='title'>Downloads</h3>
                  <p class='datas'>${$}</p>
                </li>
              </ul>
            </li>`).join("");w.insertAdjacentHTML("beforeend",r)}const S="42676723-0286cb816b5743467714b50d3",q="https://pixabay.com/api/",v="photo",A="horizontal",I="true";async function f(i,r,o){const s=i.trim(),e=`${q}?key=${S}&q=${s}&image_type=${v}&orientation=${A}&safesearch=${I}&per_page=${r}&page=${o}`;try{const t=await E.get(e);if(t.status!==200)throw new Error(t.status);return t.data}catch(t){throw new Error(`Error fetching images: ${t.message}`)}}const c=document.querySelector(".todo-list"),p=document.querySelector(".input-text"),O=document.querySelector(".main-form"),l=document.querySelector(".loader"),n=document.querySelector('[data-action="load-more"]');let d=1,m;l.style.display="none";const g=new L(".todo-list a.galery-link",{captionsData:"alt",captionDelay:500});O.addEventListener("submit",async function(r){r.preventDefault();const o=p.value;c.innerHTML="",p.value="";try{const s=await f(o,15,1);if(s.hits.length===0){return c.innerHTML="",l.style.display="none",n.classList.add("is-hidden"),h.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});n.style.display="none"}else y(s.hits),g.refresh(),m=o,d=1,l.style.display="none",s.hits.length<15?(n.style.display="none",u()):n.style.display="block"}catch(s){console.error(s)}});n.addEventListener("click",function(r){r.preventDefault(),c.insertAdjacentElement("afterend",l),l.style.display="inline-block",d++,f(m,15,d).then(o=>{if(o.hits.length===0)return n.style.display="none",u();{y(o.hits),g.refresh();const s=c;l.style.display="none";const e=s.getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"}),o.hits.length<15?(n.style.display="none",u()):n.style.display="block"}})});function u(){h.error({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),n.style.display="none"}
//# sourceMappingURL=commonHelpers.js.map
