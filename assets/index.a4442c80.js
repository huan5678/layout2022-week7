(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function a(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerpolicy&&(n.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?n.credentials="include":r.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(r){if(r.ep)return;r.ep=!0;const n=a(r);fetch(r.href,n)}})();var h=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},G="Expected a function",q=0/0,ae="[object Symbol]",ie=/^\s+|\s+$/g,re=/^[-+]0x[0-9a-f]+$/i,ne=/^0b[01]+$/i,oe=/^0o[0-7]+$/i,se=parseInt,le=typeof h=="object"&&h&&h.Object===Object&&h,ce=typeof self=="object"&&self&&self.Object===Object&&self,de=le||ce||Function("return this")(),fe=Object.prototype,ue=fe.toString,me=Math.max,pe=Math.min,M=function(){return de.Date.now()};function ge(t,e,a){var i,r,n,l,s,c,d=0,u=!1,p=!1,w=!0;if(typeof t!="function")throw new TypeError(G);e=D(e)||0,C(a)&&(u=!!a.leading,p="maxWait"in a,n=p?me(D(a.maxWait)||0,e):n,w="trailing"in a?!!a.trailing:w);function x(o){var m=i,g=r;return i=r=void 0,d=o,l=t.apply(g,m),l}function T(o){return d=o,s=setTimeout(b,e),u?x(o):l}function L(o){var m=o-c,g=o-d,E=e-m;return p?pe(E,n-g):E}function _(o){var m=o-c,g=o-d;return c===void 0||m>=e||m<0||p&&g>=n}function b(){var o=M();if(_(o))return N(o);s=setTimeout(b,L(o))}function N(o){return s=void 0,w&&i?x(o):(i=r=void 0,l)}function $(){s!==void 0&&clearTimeout(s),d=0,i=c=r=s=void 0}function A(){return s===void 0?l:N(M())}function k(){var o=M(),m=_(o);if(i=arguments,r=this,c=o,m){if(s===void 0)return T(c);if(p)return s=setTimeout(b,e),x(c)}return s===void 0&&(s=setTimeout(b,e)),l}return k.cancel=$,k.flush=A,k}function be(t,e,a){var i=!0,r=!0;if(typeof t!="function")throw new TypeError(G);return C(a)&&(i="leading"in a?!!a.leading:i,r="trailing"in a?!!a.trailing:r),ge(t,e,{leading:i,maxWait:e,trailing:r})}function C(t){var e=typeof t;return!!t&&(e=="object"||e=="function")}function ve(t){return!!t&&typeof t=="object"}function he(t){return typeof t=="symbol"||ve(t)&&ue.call(t)==ae}function D(t){if(typeof t=="number")return t;if(he(t))return q;if(C(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=C(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=t.replace(ie,"");var a=ne.test(t);return a||oe.test(t)?se(t.slice(2),a?2:8):re.test(t)?q:+t}var ye=be,we="Expected a function",H=0/0,xe="[object Symbol]",ke=/^\s+|\s+$/g,Oe=/^[-+]0x[0-9a-f]+$/i,_e=/^0b[01]+$/i,Ne=/^0o[0-7]+$/i,Ee=parseInt,je=typeof h=="object"&&h&&h.Object===Object&&h,Se=typeof self=="object"&&self&&self.Object===Object&&self,Ce=je||Se||Function("return this")(),Te=Object.prototype,Le=Te.toString,$e=Math.max,Ae=Math.min,I=function(){return Ce.Date.now()};function Me(t,e,a){var i,r,n,l,s,c,d=0,u=!1,p=!1,w=!0;if(typeof t!="function")throw new TypeError(we);e=P(e)||0,z(a)&&(u=!!a.leading,p="maxWait"in a,n=p?$e(P(a.maxWait)||0,e):n,w="trailing"in a?!!a.trailing:w);function x(o){var m=i,g=r;return i=r=void 0,d=o,l=t.apply(g,m),l}function T(o){return d=o,s=setTimeout(b,e),u?x(o):l}function L(o){var m=o-c,g=o-d,E=e-m;return p?Ae(E,n-g):E}function _(o){var m=o-c,g=o-d;return c===void 0||m>=e||m<0||p&&g>=n}function b(){var o=I();if(_(o))return N(o);s=setTimeout(b,L(o))}function N(o){return s=void 0,w&&i?x(o):(i=r=void 0,l)}function $(){s!==void 0&&clearTimeout(s),d=0,i=c=r=s=void 0}function A(){return s===void 0?l:N(I())}function k(){var o=I(),m=_(o);if(i=arguments,r=this,c=o,m){if(s===void 0)return T(c);if(p)return s=setTimeout(b,e),x(c)}return s===void 0&&(s=setTimeout(b,e)),l}return k.cancel=$,k.flush=A,k}function z(t){var e=typeof t;return!!t&&(e=="object"||e=="function")}function Ie(t){return!!t&&typeof t=="object"}function ze(t){return typeof t=="symbol"||Ie(t)&&Le.call(t)==xe}function P(t){if(typeof t=="number")return t;if(ze(t))return H;if(z(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=z(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=t.replace(ke,"");var a=_e.test(t);return a||Ne.test(t)?Ee(t.slice(2),a?2:8):Oe.test(t)?H:+t}var X=Me,Y=function(){};function J(t){var e=void 0,a=void 0,i=void 0;for(e=0;e<t.length;e+=1)if(a=t[e],a.dataset&&a.dataset.aos||(i=a.children&&J(a.children),i))return!0;return!1}function qe(t){!t||t.forEach(function(e){var a=Array.prototype.slice.call(e.addedNodes),i=Array.prototype.slice.call(e.removedNodes),r=a.concat(i);if(J(r))return Y()})}function K(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function De(){return!!K()}function He(t,e){var a=window.document,i=K(),r=new i(qe);Y=e,r.observe(a.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}var B={isSupported:De,ready:He},Pe=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},Xe=function(){function t(e,a){for(var i=0;i<a.length;i++){var r=a[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,a,i){return a&&t(e.prototype,a),i&&t(e,i),e}}(),Be=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(t[i]=a[i])}return t},We=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,Re=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,Fe=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,Ge=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;function W(){return navigator.userAgent||navigator.vendor||window.opera||""}var Ye=function(){function t(){Pe(this,t)}return Xe(t,[{key:"phone",value:function(){var a=W();return!!(We.test(a)||Re.test(a.substr(0,4)))}},{key:"mobile",value:function(){var a=W();return!!(Fe.test(a)||Ge.test(a.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}},{key:"ie11",value:function(){return"-ms-scroll-limit"in document.documentElement.style&&"-ms-ime-align"in document.documentElement.style}}]),t}(),S=new Ye,Je=function(e,a){return a&&a.forEach(function(i){return e.classList.add(i)})},Ke=function(e,a){return a&&a.forEach(function(i){return e.classList.remove(i)})},j=function(e,a){var i=void 0;return S.ie11()?(i=document.createEvent("CustomEvent"),i.initCustomEvent(e,!0,!0,{detail:a})):i=new CustomEvent(e,{detail:a}),document.dispatchEvent(i)},Ue=function(e,a){var i=e.options,r=e.position,n=e.node;e.data;var l=function(){!e.animated||(Ke(n,i.animatedClassNames),j("aos:out",n),e.options.id&&j("aos:in:"+e.options.id,n),e.animated=!1)},s=function(){e.animated||(Je(n,i.animatedClassNames),j("aos:in",n),e.options.id&&j("aos:in:"+e.options.id,n),e.animated=!0)};i.mirror&&a>=r.out&&!i.once?l():a>=r.in?s():e.animated&&!i.once&&l()},R=function(e){return e.forEach(function(a,i){return Ue(a,window.pageYOffset)})},U=function(e){for(var a=0,i=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)a+=e.offsetLeft-(e.tagName!="BODY"?e.scrollLeft:0),i+=e.offsetTop-(e.tagName!="BODY"?e.scrollTop:0),e=e.offsetParent;return{top:i,left:a}},y=function(t,e,a){var i=t.getAttribute("data-aos-"+e);if(typeof i<"u"){if(i==="true")return!0;if(i==="false")return!1}return i||a},Ve=function(e,a,i){var r=window.innerHeight,n=y(e,"anchor"),l=y(e,"anchor-placement"),s=Number(y(e,"offset",l?0:a)),c=l||i,d=e;n&&document.querySelectorAll(n)&&(d=document.querySelectorAll(n)[0]);var u=U(d).top-r;switch(c){case"top-bottom":break;case"center-bottom":u+=d.offsetHeight/2;break;case"bottom-bottom":u+=d.offsetHeight;break;case"top-center":u+=r/2;break;case"center-center":u+=r/2+d.offsetHeight/2;break;case"bottom-center":u+=r/2+d.offsetHeight;break;case"top-top":u+=r;break;case"bottom-top":u+=r+d.offsetHeight;break;case"center-top":u+=r+d.offsetHeight/2;break}return u+s},Qe=function(e,a){var i=y(e,"anchor"),r=y(e,"offset",a),n=e;i&&document.querySelectorAll(i)&&(n=document.querySelectorAll(i)[0]);var l=U(n).top;return l+n.offsetHeight-r},Ze=function(e,a){return e.forEach(function(i,r){var n=y(i.node,"mirror",a.mirror),l=y(i.node,"once",a.once),s=y(i.node,"id"),c=a.useClassNames&&i.node.getAttribute("data-aos"),d=[a.animatedClassName].concat(c?c.split(" "):[]).filter(function(u){return typeof u=="string"});a.initClassName&&i.node.classList.add(a.initClassName),i.position={in:Ve(i.node,a.offset,a.anchorPlacement),out:n&&Qe(i.node,a.offset)},i.options={once:l,mirror:n,animatedClassNames:d,id:s}}),e},V=function(){var t=document.querySelectorAll("[data-aos]");return Array.prototype.map.call(t,function(e){return{node:e}})},v=[],F=!1,f={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,mirror:!1,anchorPlacement:"top-bottom",startEvent:"DOMContentLoaded",animatedClassName:"aos-animate",initClassName:"aos-init",useClassNames:!1,disableMutationObserver:!1,throttleDelay:99,debounceDelay:50},Q=function(){return document.all&&!window.atob},et=function(){return v=Ze(v,f),R(v),window.addEventListener("scroll",ye(function(){R(v,f.once)},f.throttleDelay)),v},O=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;e&&(F=!0),F&&et()},Z=function(){if(v=V(),te(f.disable)||Q())return ee();O()},ee=function(){v.forEach(function(e,a){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay"),f.initClassName&&e.node.classList.remove(f.initClassName),f.animatedClassName&&e.node.classList.remove(f.animatedClassName)})},te=function(e){return e===!0||e==="mobile"&&S.mobile()||e==="phone"&&S.phone()||e==="tablet"&&S.tablet()||typeof e=="function"&&e()===!0},tt=function(e){return f=Be(f,e),v=V(),!f.disableMutationObserver&&!B.isSupported()&&(console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),f.disableMutationObserver=!0),f.disableMutationObserver||B.ready("[data-aos]",Z),te(f.disable)||Q()?ee():(document.querySelector("body").setAttribute("data-aos-easing",f.easing),document.querySelector("body").setAttribute("data-aos-duration",f.duration),document.querySelector("body").setAttribute("data-aos-delay",f.delay),["DOMContentLoaded","load"].indexOf(f.startEvent)===-1?document.addEventListener(f.startEvent,function(){O(!0)}):window.addEventListener("load",function(){O(!0)}),f.startEvent==="DOMContentLoaded"&&["complete","interactive"].indexOf(document.readyState)>-1&&O(!0),window.addEventListener("resize",X(O,f.debounceDelay,!0)),window.addEventListener("orientationchange",X(O,f.debounceDelay,!0)),v)},at={init:tt,refresh:O,refreshHard:Z};at.init({once:!0});document.querySelector("#app").innerHTML=`
      <main class="text-center">
      <section class="border-gray hero text-left text-white">
        <div data-aos="fade-in">
        <h1 class="text-[80px] leading-snug mb-8 font-black italic">
          <span class="block text-2xl text-left w-full font-bold">Here\u2019s </span>
          JOANNE
          </h1>
          <p class="mb-10 text-2xl leading-normal font-bold italic">
            Founder of \u201CXXXD Official\u2019\u2019<br />
            & Graphic Designer
          </p>
          <nav class="flex justify-between gap-4">
            <a href="#" class="transition duration-300 hover:scale-105 hover:drop-shadow-[0_5px_8px_rgba(140,23,23,0.5)]">
              <img src="./images/behance.svg" alt="behance" srcset="" />
            </a>
            <a href="#" class="transition duration-300 hover:scale-105 hover:drop-shadow-[0_5px_8px_rgba(140,23,23,0.5)]">
              <img src="./images/facebook.svg" alt="facebook" srcset="" />
            </a>
            <a href="#" class="transition duration-300 hover:scale-105 hover:drop-shadow-[0_5px_8px_rgba(140,23,23,0.5)]">
              <img src="./images/instagram.svg" alt="instagram" srcset="" />
            </a>
            <a href="#" class="transition duration-300 hover:scale-105 hover:drop-shadow-[0_5px_8px_rgba(140,23,23,0.5)]">
              <img src="./images/youtube.svg" alt="youtube" srcset="" />
            </a>
          </nav>
        </div>
      </section>
      <section class="container flex flex-col items-center pt-14 pb-14">
        <div class="text-2xl font-bold" data-aos="fade-up">
          <h2 class="text-[64px] leading-[84px] mb-10 font-medium italic">About</h2>
          <img class="mx-auto mb-5" src="./images/photo.png" alt="photo" />
          <p class="mb-1">Joanne Chen</p>
          <p class="mb-2">1997/10/10</p>
          <p class="pb-6 -mx-3">
            National Hex School Normal University<br />
            Department of Visual Design
          </p>
          <ul class="w-full border-t pt-7">
            <li class="list__dot mb-7" data-aos="fade-right">Founder of \u2018\u2019XXXD Official\u2019\u2019</li>
            <li class="list__dot mb-7" data-aos="fade-right" data-aos-delay="50">Graphic Designer</li>
            <li class="list__dot" data-aos="fade-right" data-aos-delay="100">Graphic Intern of Hex School</li>
          </ul>
        </div>
      </section>
      <section class="border-gray bg-black text-white pt-14 pb-40">
        <div class="container font-medium italic">
          <h2 class="text-[64px] leading-[84px] mb-3">My Brand \u2018\u2019XXXD\u2019\u2019</h2>
          <h3 class="h3 mb-8 italic">Just Keep XXXD Everyday</h3>
          <p class="text-sm italic mb-[68px]">
            2020 \u5E74\u5275\u7ACB\u7684\u500B\u4EBA\u670D\u98FE\u54C1\u724C<br />
            \u5F15\u9818\u53DB\u9006\u5C11\u5E74\u958B\u555F\u8207\u793E\u6703\u5C0D\u8A71\u7684\u7A97\u53E3<br />
            \u4E3B\u6253\u6982\u5FF5\u6F6E\u6D41T-Shirt
          </p>
          <ul class="flex flex-wrap justify-center gap-x-6 gap-y-10">
          <li class="w-full" data-aos="flip-down" data-aos-duration="1000">
            <img src="./images/brand_img1.png" class="mx-auto" alt="brand_img1" />
          </li>
          <li class="w-full flex-1" data-aos="flip-left" data-aos-duration="1000">
            <img src="./images/brand_img2.png" class="mx-auto" alt="brand_img2" />
          </li>
          <li class="w-full flex-1" data-aos="flip-right" data-aos-duration="1000">
            <img src="./images/brand_img3.png" class="mx-auto" alt="brand_img3" />
          </li>
          </ul>
        </div>
      </section>
      <section class="container pt-14 pb-36 font-medium italic">
        <h2 class="text-[64px] leading-[84px] mb-4 font-medium italic">Other Works</h2>
        <p class="mb-14">
          2016-2020 \u5E74\u7D2F\u7A4D\u7684\u4F5C\u54C1<br />\u6D77\u5831/\u5EE3\u544A/\u651D\u5F71/LOGO/3D
        </p>
        <ul class="flex flex-wrap gap-x-6 gap-y-12">
          <li data-aos="fade-up" data-aos-duration="800">
            <img src="./images/work_img1.png" alt="work_img1" class="mb-4" />
            <h3 class="text-normal font-medium italic">\u6D77\u5831\u8A2D\u8A08/2017</h3>
          </li>
          <li data-aos="fade-up" data-aos-duration="800" data-aos-delay="500">
            <img src="./images/work_img2.png" alt="work_img2" class="mb-4" />
            <h3 class="text-normal font-medium italic">\u6D77\u5831\u8A2D\u8A08/2018</h3>
          </li>
          <li data-aos="fade-up" data-aos-duration="800" data-aos-delay="1000">
            <img src="./images/work_img3.png" alt="work_img3" class="mb-4" />
            <h3 class="text-normal font-medium italic">\u6D77\u5831\u8A2D\u8A08/2018</h3>
          </li>
          <li data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
            <img src="./images/work_img4.png" alt="work_img4" class="mb-4" />
            <h3 class="text-normal font-medium italic">\u6982\u5FF5\u651D\u5F71/2018</h3>
          </li>
          <li data-aos="fade-up" data-aos-duration="800" data-aos-delay="500">
            <img src="./images/work_img5.png" alt="work_img5" class="mb-4" />
            <h3 class="text-normal font-medium italic">\u6982\u5FF5\u651D\u5F71/2018</h3>
          </li>
          <li data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
            <img src="./images/work_img6.png" alt="work_img6" class="mb-4" />
            <h3 class="text-normal font-medium italic">sasa \u9152\u6A19\u8A2D\u8A08/2019</h3>
          </li>
          <li data-aos="fade-up" data-aos-duration="800" data-aos-delay="500">
            <img src="./images/work_img7.png" alt="work_img7" class="mb-4" />
            <h3 class="text-normal font-medium italic">\u651D\u5F71\u5275\u4F5C/2018</h3>
          </li>
          <li data-aos="fade-up" data-aos-duration="800" data-aos-delay="1000">
            <img src="./images/work_img8.png" alt="work_img8" class="mb-4" />
            <h3 class="text-normal font-medium italic">\u5B98\u7DB2\u8A2D\u8A08/2020</h3>
          </li>
        </ul>
      </section>
    </main>
    <footer class="bg-black text-white pt-16 pb-16">
      <div class="container text-center font-medium italic">
        <h2 class="text-[64px] leading-[84px] mb-2">Contact</h2>
        <address class="flex flex-col items-center text-2xl leading-normal" data-aos="fade-in">
          <a
            class="text-inherit p-2 relative after:absolute after:left-0 after:translate-y-full after:top-full after:h-[1px] after:w-full after:bg-white after:opacity-0 after:overflow-hidden after:transition after:duration-300 hover:after:opacity-100 hover:after:-translate-y-full"
            href="mailto:xxx@hexschool.com"
            >Mail\uFF1Axxxd@hexschool.com</a
          >
          <a
            class="text-inherit p-2 relative after:absolute after:left-0 after:translate-y-full after:top-full after:h-[1px] after:w-full after:bg-white after:opacity-0 after:overflow-hidden after:transition after:duration-300 hover:after:opacity-100 hover:after:-translate-y-full"
            href="tel:+886910123456"
            >Phone Number\uFF1A0910123456</a
          >
        </address>
      </div>
    </footer>
`;
