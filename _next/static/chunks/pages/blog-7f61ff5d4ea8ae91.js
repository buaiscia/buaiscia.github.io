(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[195],{3899:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return r(5705)}])},2917:function(e,t,r){"use strict";var a=r(7997),n=r(1664),s=r.n(n),c=r(4601);t.Z=function(e){var t=e.text;return(0,a.tZ)(s(),{href:"/tags/".concat((0,c.G)(t)),children:(0,a.tZ)("a",{className:"text-sm font-medium text-blue-500 uppercase hover:text-blue-600 dark:hover:text-blue-400",children:t.split(" ").join("-")})})}},2390:function(e,t,r){"use strict";r.d(t,{Z:function(){return d}});var a=r(7997),n=r(1720),s=r(7099),c=r.n(s),i=r(203),l=r(2917),o=c()("{MMMM} {DD}, {YYYY}");function d(e){var t=e.posts,r=e.title,s=(0,n.useState)(""),c=s[0],d=s[1],u=t.filter((function(e){return e.title.toLowerCase().includes(c.toLowerCase())}));return(0,a.tZ)(a.HY,{children:(0,a.BX)("div",{className:"divide-y",children:[(0,a.BX)("div",{className:"pt-6 pb-8 space-y-2 md:space-y-5",children:[(0,a.tZ)("h1",{className:"text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14",children:r}),(0,a.BX)("div",{className:"relative max-w-lg",children:[(0,a.tZ)("input",{"aria-label":"Search articles",type:"text",onChange:function(e){return d(e.target.value)},placeholder:"Search articles",className:"block w-full px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-md dark:border-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-gray-100"}),(0,a.tZ)("svg",{className:"absolute w-5 h-5 text-gray-400 right-3 top-3 dark:text-gray-300",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,a.tZ)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})})]})]}),(0,a.BX)("ul",{children:[!u.length&&"No posts found.",u.map((function(e){var t=e.slug,r=e.date,n=e.title,s=e.summary,c=e.tags;return(0,a.tZ)("li",{className:"py-4",children:(0,a.BX)("article",{className:"space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline",children:[(0,a.BX)("dl",{children:[(0,a.tZ)("dt",{className:"sr-only",children:"Published on"}),(0,a.tZ)("dd",{className:"text-base font-medium leading-6 text-gray-500 dark:text-gray-400",children:(0,a.tZ)("time",{dateTime:r,children:o.render(new Date(r))})})]}),(0,a.BX)("div",{className:"space-y-3 xl:col-span-3",children:[(0,a.BX)("div",{children:[(0,a.tZ)("h3",{className:"text-2xl font-bold leading-8 tracking-tight",children:(0,a.tZ)(i.Z,{href:"/blog/".concat(t),className:"text-gray-900 dark:text-gray-100",children:n})}),(0,a.tZ)("div",{className:"space-x-3",children:c.map((function(e){return(0,a.tZ)(l.Z,{text:e},e)}))})]}),(0,a.tZ)("div",{className:"prose text-gray-500 max-w-none dark:text-gray-400",children:s})]})]})},t)}))]})]})})}},4601:function(e,t,r){"use strict";r.d(t,{G:function(){return a}});var a=function(e){return e&&e.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g).map((function(e){return e.toLowerCase()})).join("-")}},5705:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return i},default:function(){return l}});var a=r(7997),n=r(3403),s=r(2390),c=r(8590),i=!0;function l(e){var t=e.posts;return(0,a.BX)(a.HY,{children:[(0,a.tZ)(c.Is,{title:"Blog - ".concat(n.v),description:n.WL,url:"".concat(n.or,"/blog")}),(0,a.tZ)(s.Z,{posts:t,title:"All Posts"})]})}},7099:function(e){"use strict";var t={MMMM:"b",MM:"c",Mo:"n",YYYY:"d",YY:"e",dddd:"f",DD:"l",Do:"k",h:"g",H:"m",mm:"h",ss:"i",a:"j"},r=["January","Febuary","March","April","May","June","July","August","September","October","November","December"],a=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];function n(e){return e<10?"0"+e:""+e}function s(e,t,s){for(var c,i=t.getMonth(),l=t.getFullYear(),o=t.getHours(),d=t.getSeconds(),u=t.getMinutes(),h=t.getDate(),g="",f=0;f<e.length;){var m=e[f];switch(m.t){case"a":g+=m.v;break;case"k":g+=(c=h)%10==1&&11!=c?c+"st":c%10==2&&12!=c?c+"nd":c%10==3&&13!=c?c+"rd":c+"th";break;case"c":g+=r[i].slice(0,3);break;case"b":g+=r[i];break;case"n":var b=i+1;s.padMonth&&(b=n(b)),g+=b;break;case"d":g+=l;break;case"e":g+=(l+"").slice(2);break;case"f":g+=a[t.getDay()];break;case"l":g+=s.padDays?n(h):h;break;case"g":var p=0===o||12===o?12:o%12;s.padHours&&(p=n(p)),g+=p;break;case"m":var v=o;s.padHours&&(v=n(v)),g+=v;break;case"h":g+=n(u);break;case"i":g+=n(d);break;case"j":g+=o>=12?"PM":"AM"}f++}return g}function c(e){for(var r=[],a=0,n="";a<e.length;){var s=e[a++];if("{"===s){n&&r.push({t:"a",v:n}),n="";var c="";for(s=e[a++];"}"!==s;)c+=s,s=e[a++];r.push({t:t[c]})}else n+=s}return n&&r.push({t:"a",v:n}),r}e.exports=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=c(e);return{render:function(e){return s(r,e,t)}}}}},function(e){e.O(0,[888,774,179],(function(){return t=3899,e(e.s=t);var t}));var t=e.O();_N_E=t}]);