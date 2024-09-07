/*!
 * Copyright by Space Squirrel Ltd.
 */
function t(){const t=document.querySelectorAll(".covet-pics-gallery");t.forEach((t=>{const e=document.createElement("covet-pics-widget"),o=t.getAttribute("data-id"),d=t.getAttribute("data-shop"),c=t.getAttribute("data-product");if(o!==null){e.setAttribute("gallery-embed-id",o)}else if(d!==null){e.setAttribute("shop",d);if(c!==null){e.setAttribute("data-product",c)}}else{return true}let l,i;for(l=0;l<t.attributes.length;++l){i=t.attributes[l];if(i.name.startsWith("widget")){const t=i.name.replace(/^widget\-/,"");e.setAttribute(t,i.value)}}t.appendChild(e)}))}const e=t;export{e as g};
//# sourceMappingURL=p-1d9dbfd4.js.map