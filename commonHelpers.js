import"./assets/modulepreload-polyfill-3cfb730f.js";import{f as h,i as g}from"./assets/vendor-77e16229.js";const E="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAENSURBVHgBrZVhDoIwDIUrgfDXm+hRvBFwEr0BXsXjsJnMFVkYsvUV4SWL6Nr3MWgrUUbW2sYY6zSLY3M+Zc7cOWr9evqvL5J18av1OVRVVUdI4c6HwTxIKY5FJ/nbXA3ZYw4hR5hnIZK5MeaKDFMxC8jX3PapRPTi5lJOQWzPewHQpgz49xxkPrmcKwJyEGQe55UEVNdV64P5cmwm1tSEHe+hfAj4hUwAlTmrIKWKglzqGkl1gmg2hVmjnj0QEJuHxxK/EwiRqkGqFqmE433YaJpSFBttDnrfUxACSsWw1+LmJMhWrcyDjoBkzY+AQPM9EMl81QdhLJxOrvGfZ1L96bvblvExaj4JXtJj+QAn5UUxjHYd+gAAAABJRU5ErkJggg==",d=document.getElementById("datetime-picker"),n=document.querySelector("[data-start]"),w=document.querySelector("[data-days]"),y=document.querySelector("[data-hours]"),U=document.querySelector("[data-minutes]"),p=document.querySelector("[data-seconds]");let a,s,c=!1;n.disabled=!0;const v={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){s=e[0],s<new Date?(n.disabled=!0,g.error({title:"Error",message:"Please choose a date in the future",position:"topRight",backgroundColor:"#ef4040",titleColor:"#ffffff",messageColor:"#ffffff",iconUrl:E,theme:"dark"})):n.disabled=!1}},x=h(d,v);n.addEventListener("click",()=>{if(!c){let e=function(t){const{days:l,hours:i,minutes:u,seconds:r}=S(t);w.textContent=o(l),y.textContent=o(i),U.textContent=o(u),p.textContent=o(r)};n.disabled=!0,d.disabled=!0,s=x.selectedDates[0],clearInterval(a),a=setInterval(function(){const t=s-new Date;t<=0?(clearInterval(a),e(0),c=!1,n.disabled=!1,d.disabled=!1):e(t)},1e3),c=!0}});function S(e){const r=Math.floor(e/864e5),A=Math.floor(e%864e5/36e5),m=Math.floor(e%864e5%36e5/6e4),f=Math.floor(e%864e5%36e5%6e4/1e3);return{days:r,hours:A,minutes:m,seconds:f}}function o(e){return String(e).padStart(2,"0")}
//# sourceMappingURL=commonHelpers.js.map
