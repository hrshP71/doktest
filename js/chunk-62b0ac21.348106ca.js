(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-62b0ac21"],{"07ac":function(e,t,i){var n=i("23e7"),o=i("6f53").values;n({target:"Object",stat:!0},{values:function(e){return o(e)}})},"0dc9":function(e,t,i){"use strict";var n=i("4ea5"),o=i.n(n);o.a},1621:function(e,t,i){e.exports=i.p+"img/d12-min.1260833a.jpg"},2605:function(e,t,i){e.exports=i.p+"img/d13-min.d2977d64.jpg"},"273f":function(e,t,i){"use strict";var n=i("f19b"),o=i.n(n);o.a},"3c7e":function(e,t,i){e.exports=i.p+"img/d11-min.4404536a.jpg"},4169:function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("section",{staticClass:"tab1"},[i("div",{staticClass:"container"},[i("div",{staticClass:"row"},e._l(e.images,(function(t,n,o){return i("div",{key:n,staticClass:"col-12 col-md-4"},["video"==t.media.type?i("div",{},[i("GalleryVideo")],1):e._e(),i("div",{attrs:{else:"media.type = 'photo'"},on:{click:function(i){return e.openLightboxFun(i,t.media.src,o)}}},[i("GalleryPhoto",{attrs:{timeHasCome:e.timeCameYet,src:t.media.src,desc:t.desc}})],1)])})),0)]),i("LightBox",{attrs:{index:e.imageIndex,fullData:e.fullData,src:e.chosenImage,visible:e.openLightbox},on:{visibilityChanged:e.updateHere}})],1)},o=[],a=(i("d81d"),i("07ac"),function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"gallery-photo"},[i("transition",{attrs:{name:"right100",appear:""}},[e.test?i("div",{staticClass:"covering-div",class:{animated:e.timeHasCome}}):e._e()]),i("img",{attrs:{src:e.src}}),i("q",[e._v(e._s(e.desc))])],1)}),s=[],c={data:function(){return{test:!0}},props:{src:String,desc:String,timeHasCome:Boolean}},r=c,d=(i("273f"),i("2877")),u=Object(d["a"])(r,a,s,!1,null,"dad30f58",null),p=u.exports,f=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div")},m=[],l={},g=l,b=Object(d["a"])(g,f,m,!1,null,null,null),h=b.exports,x=function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.lightboxVisibility?i("section",{staticClass:"lightBox"},[i("div",{staticClass:"lightbox",on:{click:e.closeIfNotImage,keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"])?null:e.closeLightbox(t)}}},[i("div",{staticClass:"container"},[i("img",{attrs:{src:e.imageSrc.length>1?e.imageSrc:e.src,alt:"",srcset:""}})]),i("button",{staticClass:"close-button",on:{click:e.closeLightbox}},[e._v("×")])])]):e._e()},v=[],y=(i("a9e3"),{data:function(){return{lightboxVisibility:!1,imageIndex:0,imageSrc:""}},props:{src:String,fullData:Array,visible:Boolean,index:Number},computed:{lightboxIndex:{get:function(){return this.index},set:function(){this.imageIndex}},lightboxSource:{get:function(){return this.src},set:function(){this.imageSrc}}},methods:{closeLightbox:function(){this.lightboxVisibility=!1,this.$emit("visibilityChanged",this.lightboxVisibility),this.imageSrc=""},closeIfNotImage:function(e){"IMG"!=e.target.tagName&&this.closeLightbox()}},created:function(){var e=this;document.onkeydown=function(t){t=t||window.event,27==t.keyCode?e.closeLightbox():39==t.keyCode?(e.imageIndex<e.fullData.length-1?e.imageIndex++:e.imageIndex,e.imageSrc=e.fullData[e.imageIndex]):37==t.keyCode&&(e.imageIndex>0&&e.imageIndex--,e.imageSrc=e.fullData[e.imageIndex])}},watch:{visible:function(e,t){this.lightboxVisibility=e}}}),I=y,C=(i("0dc9"),Object(d["a"])(I,x,v,!1,null,null,null)),_=C.exports,N={data:function(){return{timeCameYet:!1,images:{img1:{media:{type:"photo",src:i("48da")},desc:"We offer extensive medical procedures to outbound and inbound patients."},img2:{media:{type:"photo",src:i("c80d")},desc:"We offer extensive medical procedures to outbound and inbound patients."},img3:{media:{type:"photo",src:i("42eb")},desc:"We offer extensive medical procedures to outbound and inbound patients."},img4:{media:{type:"photo",src:i("baf4")},desc:"We offer extensive medical procedures to outbound and inbound patients."},img5:{media:{type:"photo",src:i("912e")},desc:"We offer extensive medical procedures to outbound and inbound patients."},img6:{media:{type:"photo",src:i("e3ca")},desc:"We offer extensive medical procedures to outbound and inbound patients."},img7:{media:{type:"photo",src:i("d1c6")},desc:"We offer extensive medical procedures to outbound and inbound patients."},img8:{media:{type:"photo",src:i("cd4a")},desc:"We offer extensive medical procedures to outbound and inbound patients."},img9:{media:{type:"photo",src:i("ec72")},desc:"We offer extensive medical procedures to outbound and inbound patients."},img10:{media:{type:"photo",src:i("cbe5")},desc:"We offer extensive medical procedures to outbound and inbound patients."},img11:{media:{type:"photo",src:i("3c7e")},desc:"We offer extensive medical procedures to outbound and inbound patients."},img12:{media:{type:"photo",src:i("1621")},desc:"We offer extensive medical procedures to outbound and inbound patients."},img13:{media:{type:"photo",src:i("2605")},desc:"We offer extensive medical procedures to outbound and inbound patients."},img14:{media:{type:"photo",src:i("561e")},desc:"We offer extensive medical procedures to outbound and inbound patients."},img15:{media:{type:"photo",src:i("654a")},desc:"We offer extensive medical procedures to outbound and inbound patients."},img16:{media:{type:"photo",src:i("62f2")},desc:"We offer extensive medical procedures to outbound and inbound patients."}},media:{type:"photo"},openLightbox:!1,chosenImage:"",imageIndex:0}},computed:{fullData:function(){var e=Object.values(this.images),t=e.map((function(e){return e.media.src}));return t}},methods:{updateHere:function(e){this.openLightbox=e},openLightboxFun:function(e,t,i){this.chosenImage=t,this.imageIndex=i,this.openLightbox=!0}},components:{GalleryPhoto:p,GalleryVideo:h,LightBox:_},mounted:function(){window.addEventListener("scroll",(function(){var e=document.querySelector(".tab1");window.pageYOffset,e.offsetTop}))}},j=N,E=Object(d["a"])(j,n,o,!1,null,null,null);t["default"]=E.exports},"42eb":function(e,t,i){e.exports=i.p+"img/d3-min.904d0886.jpg"},"48da":function(e,t,i){e.exports=i.p+"img/d1-min.7382a1f7.jpeg"},"4ea5":function(e,t,i){},"561e":function(e,t,i){e.exports=i.p+"img/d14-min.8b1bef66.jpg"},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,i){var n=i("1d80"),o=i("5899"),a="["+o+"]",s=RegExp("^"+a+a+"*"),c=RegExp(a+a+"*$"),r=function(e){return function(t){var i=String(n(t));return 1&e&&(i=i.replace(s,"")),2&e&&(i=i.replace(c,"")),i}};e.exports={start:r(1),end:r(2),trim:r(3)}},"62f2":function(e,t,i){e.exports=i.p+"img/d16-min.e93d7df0.jpg"},"654a":function(e,t,i){e.exports=i.p+"img/d15-min.d4bc50be.jpg"},"6f53":function(e,t,i){var n=i("83ab"),o=i("df75"),a=i("fc6a"),s=i("d1e7").f,c=function(e){return function(t){var i,c=a(t),r=o(c),d=r.length,u=0,p=[];while(d>u)i=r[u++],n&&!s.call(c,i)||p.push(e?[i,c[i]]:c[i]);return p}};e.exports={entries:c(!0),values:c(!1)}},7156:function(e,t,i){var n=i("861d"),o=i("d2bb");e.exports=function(e,t,i){var a,s;return o&&"function"==typeof(a=t.constructor)&&a!==i&&n(s=a.prototype)&&s!==i.prototype&&o(e,s),e}},"912e":function(e,t,i){e.exports=i.p+"img/d5-min.bbed2fc0.jpg"},a9e3:function(e,t,i){"use strict";var n=i("83ab"),o=i("da84"),a=i("94ca"),s=i("6eeb"),c=i("5135"),r=i("c6b6"),d=i("7156"),u=i("c04e"),p=i("d039"),f=i("7c73"),m=i("241c").f,l=i("06cf").f,g=i("9bf2").f,b=i("58a8").trim,h="Number",x=o[h],v=x.prototype,y=r(f(v))==h,I=function(e){var t,i,n,o,a,s,c,r,d=u(e,!1);if("string"==typeof d&&d.length>2)if(d=b(d),t=d.charCodeAt(0),43===t||45===t){if(i=d.charCodeAt(2),88===i||120===i)return NaN}else if(48===t){switch(d.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+d}for(a=d.slice(2),s=a.length,c=0;c<s;c++)if(r=a.charCodeAt(c),r<48||r>o)return NaN;return parseInt(a,n)}return+d};if(a(h,!x(" 0o1")||!x("0b1")||x("+0x1"))){for(var C,_=function(e){var t=arguments.length<1?0:e,i=this;return i instanceof _&&(y?p((function(){v.valueOf.call(i)})):r(i)!=h)?d(new x(I(t)),i,_):I(t)},N=n?m(x):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),j=0;N.length>j;j++)c(x,C=N[j])&&!c(_,C)&&g(_,C,l(x,C));_.prototype=v,v.constructor=_,s(o,h,_)}},baf4:function(e,t,i){e.exports=i.p+"img/d4-min.96fa604b.jpg"},c80d:function(e,t,i){e.exports=i.p+"img/d2-min.eaae0ba6.jpg"},cbe5:function(e,t,i){e.exports=i.p+"img/d10-min.d5d8e159.jpg"},cd4a:function(e,t,i){e.exports=i.p+"img/d8-min.26d499bd.jpg"},d1c6:function(e,t,i){e.exports=i.p+"img/d7-min.3e6c48c1.jpg"},d81d:function(e,t,i){"use strict";var n=i("23e7"),o=i("b727").map,a=i("1dde"),s=i("ae40"),c=a("map"),r=s("map");n({target:"Array",proto:!0,forced:!c||!r},{map:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}})},e3ca:function(e,t,i){e.exports=i.p+"img/d6-min.5bb52755.jpg"},ec72:function(e,t,i){e.exports=i.p+"img/d9-min.ce5ae74b.jpg"},f19b:function(e,t,i){}}]);
//# sourceMappingURL=chunk-62b0ac21.348106ca.js.map