_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[11],{BR8T:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return a("YbiN")}])},HEzw:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var r=a("FdF9"),l=a("SYun"),n=a.n(l),s=a("YNhk"),i=a("GQFt"),o=r.default.createElement,d=n()("{MMMM} {DD}, {YYYY}");function c(e){var t=e.posts,a=e.title,l=Object(r.useState)(""),n=l[0],c=l[1],u=t.filter((function(e){return e.title.toLowerCase().includes(n.toLowerCase())}));return o(r.default.Fragment,null,o("div",{className:"divide-y"},o("div",{className:"pt-6 pb-8 space-y-2 md:space-y-5"},o("h1",{className:"text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14"},a),o("div",{className:"relative max-w-lg"},o("input",{"aria-label":"Search articles",type:"text",onChange:function(e){return c(e.target.value)},placeholder:"Search articles",className:"block w-full px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-md dark:border-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-gray-100"}),o("svg",{className:"absolute w-5 h-5 text-gray-400 right-3 top-3 dark:text-gray-300",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},o("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})))),o("ul",null,!u.length&&"No posts found.",u.map((function(e){var t=e.slug,a=e.date,r=e.title,l=e.summary,n=e.tags;return o("li",{key:t,className:"py-4"},o("article",{className:"space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline"},o("dl",null,o("dt",{className:"sr-only"},"Published on"),o("dd",{className:"text-base font-medium leading-6 text-gray-500 dark:text-gray-400"},o("time",{dateTime:a},d.render(new Date(a))))),o("div",{className:"space-y-3 xl:col-span-3"},o("div",null,o("h3",{className:"text-2xl font-bold leading-8 tracking-tight"},o(s.a,{href:"/blog/".concat(t),className:"text-gray-900 dark:text-gray-100"},r)),o("div",{className:"space-x-3"},n.map((function(e){return o(i.a,{key:e,text:e})})))),o("div",{className:"prose text-gray-500 max-w-none dark:text-gray-400"},l))))})))))}},YbiN:function(e,t,a){"use strict";a.r(t),a.d(t,"__N_SSG",(function(){return o})),a.d(t,"default",(function(){return d}));var r=a("FdF9"),l=a("bsnj"),n=a("HEzw"),s=a("7+lg"),i=r.default.createElement,o=!0;function d(e){var t=e.posts;return i(r.default.Fragment,null,i(s.b,{title:"Blog - ".concat(l.author),description:l.description,url:"".concat(l.siteUrl,"/blog")}),i(n.a,{posts:t,title:"All Posts"}))}}},[["BR8T",0,1,2,3,4]]]);