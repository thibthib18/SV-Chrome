(()=>{"use strict";console.log("content script loaded"),function(t){const e=document.querySelector('div[data-name="stream-section"]'),s=null==e?void 0:e.getElementsByTagName("img")[0];if(!s)return;const i=new URL(null==s?void 0:s.src);t.width&&i.searchParams.set("width",t.width.toString()),t.height&&i.searchParams.set("height",t.height.toString()),t.fps&&i.searchParams.set("fps",t.fps.toString()),t.quality&&i.searchParams.set("quality",t.quality.toString()),s.src=i.toString()}({width:640,height:480,fps:10,quality:50})})();