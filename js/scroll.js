document.querySelectorAll(".scroll-link").forEach((e=>{modal.classList.remove("modal--visible"),e.addEventListener("click",(t=>{t.preventDefault();const o=e.getAttribute("href"),i=document.querySelector(o);if(i){const e=i.getBoundingClientRect(),t=window.pageYOffset+e.top,o=window.innerHeight,l=Math.max(0,t-o/2+e.height/2);window.scrollTo({top:l,behavior:"smooth"})}}))}));