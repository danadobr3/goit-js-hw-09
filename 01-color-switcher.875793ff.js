const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),r=document.querySelector("body");let n=null;function o(){r.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,"0")}`}t.addEventListener("click",(function(){n=setInterval(o,1e3),t.setAttribute("disabled","true")})),e.addEventListener("click",(function(){clearInterval(n),t.removeAttribute("disabled")}));
//# sourceMappingURL=01-color-switcher.875793ff.js.map