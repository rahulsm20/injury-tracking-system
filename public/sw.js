if(!self.define){let e,s={};const n=(n,t)=>(n=new URL(n+".js",t).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(t,a)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let c={};const r=e=>n(e,i),f={module:{uri:i},exports:c,require:r};s[i]=Promise.all(t.map((e=>f[e]||r(e)))).then((e=>(a(...e),c)))}}define(["./workbox-7c2a5a06"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"d6bee94a0541c353141be12c2af2ff45"},{url:"/_next/static/chunks/235-3e1b32f8a3c5f1e1.js",revision:"ndtuF9AH-Mbe_Xl8CCq-0"},{url:"/_next/static/chunks/616-1f787dde16de2305.js",revision:"ndtuF9AH-Mbe_Xl8CCq-0"},{url:"/_next/static/chunks/705-96182ffbd2d4a8f0.js",revision:"ndtuF9AH-Mbe_Xl8CCq-0"},{url:"/_next/static/chunks/783-24c0d4b81b048d13.js",revision:"ndtuF9AH-Mbe_Xl8CCq-0"},{url:"/_next/static/chunks/864-38e210505956e733.js",revision:"ndtuF9AH-Mbe_Xl8CCq-0"},{url:"/_next/static/chunks/998-768ac179f3f5bc60.js",revision:"ndtuF9AH-Mbe_Xl8CCq-0"},{url:"/_next/static/chunks/app/_not-found-1e8da3e52c8851dc.js",revision:"ndtuF9AH-Mbe_Xl8CCq-0"},{url:"/_next/static/chunks/app/layout-3ae014f747fc5f69.js",revision:"ndtuF9AH-Mbe_Xl8CCq-0"},{url:"/_next/static/chunks/app/page-f2fbdeb05ad681a0.js",revision:"ndtuF9AH-Mbe_Xl8CCq-0"},{url:"/_next/static/chunks/app/reports/page-e21e88d0acbbd895.js",revision:"ndtuF9AH-Mbe_Xl8CCq-0"},{url:"/_next/static/chunks/fd9d1056-24a81e82ede0df4d.js",revision:"ndtuF9AH-Mbe_Xl8CCq-0"},{url:"/_next/static/chunks/framework-43665103d101a22d.js",revision:"ndtuF9AH-Mbe_Xl8CCq-0"},{url:"/_next/static/chunks/main-6c9aa1a82421f69d.js",revision:"ndtuF9AH-Mbe_Xl8CCq-0"},{url:"/_next/static/chunks/main-app-8fba6e3f6be4026a.js",revision:"ndtuF9AH-Mbe_Xl8CCq-0"},{url:"/_next/static/chunks/pages/_app-6ca4a4ec31e39f3d.js",revision:"ndtuF9AH-Mbe_Xl8CCq-0"},{url:"/_next/static/chunks/pages/_error-9de0d1f4f4d1fcb4.js",revision:"ndtuF9AH-Mbe_Xl8CCq-0"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-b450cea189658cf4.js",revision:"ndtuF9AH-Mbe_Xl8CCq-0"},{url:"/_next/static/css/ada3950d7ae70496.css",revision:"ada3950d7ae70496"},{url:"/_next/static/media/05a31a2ca4975f99-s.woff2",revision:"f1b44860c66554b91f3b1c81556f73ca"},{url:"/_next/static/media/513657b02c5c193f-s.woff2",revision:"c4eb7f37bc4206c901ab08601f21f0f2"},{url:"/_next/static/media/51ed15f9841b9f9d-s.woff2",revision:"bb9d99fb9bbc695be80777ca2c1c2bee"},{url:"/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",revision:"74c3556b9dad12fb76f84af53ba69410"},{url:"/_next/static/media/d6b16ce4a6175f26-s.woff2",revision:"dd930bafc6297347be3213f22cc53d3e"},{url:"/_next/static/media/ec159349637c90ad-s.woff2",revision:"0e89df9522084290e01e4127495fae99"},{url:"/_next/static/media/fd4db3eb5472fc27-s.woff2",revision:"71f3fcaf22131c3368d9ec28ef839831"},{url:"/_next/static/ndtuF9AH-Mbe_Xl8CCq-0/_buildManifest.js",revision:"d7af164afef0e5b53876e60fab863dba"},{url:"/_next/static/ndtuF9AH-Mbe_Xl8CCq-0/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/favicon.ico",revision:"dadfc2fdcf1bc17ab342bf251a3f394b"},{url:"/loading.svg",revision:"5f55895f192f4e72bb6af755a1e9dadf"},{url:"/manifest.json",revision:"e4c8b1d8346cc686f35f76c53a3d2187"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:t})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));