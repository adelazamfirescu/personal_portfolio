(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"18eb":function(t,e,s){"use strict";var i=s("9543"),a=s.n(i);a.a},9543:function(t,e,s){},bc13:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"main q-pa-md q-pt-xl"},[s("div",{staticClass:"carousel"},[s("div",{staticClass:"carousel-ribbon"}),s("q-carousel",{attrs:{animated:"",navigation:"",infinite:"",arrows:"",swipeable:"",draggable:"false","transition-prev":"slide-right","transition-next":"slide-left"},on:{mouseenter:function(e){t.autoplay=!1},mouseleave:function(e){t.autoplay=!0}},model:{value:t.slide,callback:function(e){t.slide=e},expression:"slide"}},t._l(t.projects,(function(e){return s("q-carousel-slide",{key:e.id,attrs:{name:"slide-"+e.id,"img-src":e.img}},[s("div",{staticClass:"overlay column items-center justify-center"},[s("div",{staticClass:"content column justify-start items-center"},[s("h4",{staticClass:"text-h4 text-weight-medium"},[t._v(t._s(e.name))]),s("div",{staticClass:"row justify-evenly",staticStyle:{width:"100%"}},[e.link?s("q-btn",{attrs:{dense:"",flat:"","no-caps":"",type:"a","aria-label":"Access website",href:e.link,target:"_blank",color:"primary","icon-right":"link",label:"Site"}}):t._e(),s("q-btn",{attrs:{flat:"","no-caps":"","aria-label":"About the project",color:"primary",label:"About"},on:{click:function(s){t.openAbout=!0,t.selectedProject=e}}}),s("q-btn",{attrs:{dense:"",flat:"","no-caps":"",type:"a","aria-label":"View source code",href:e.gitLink,target:"_blank",icon:"code",color:"primary",label:"Code"}})],1)])])])})),1)],1),t._m(0),t._m(1),s("Experience"),s("Abilities"),s("Contact"),s("q-dialog",{model:{value:t.openAbout,callback:function(e){t.openAbout=e},expression:"openAbout"}},[s("q-card",{staticClass:"my-card"},[s("q-img",{staticStyle:{"max-height":"50vh"},attrs:{src:t.selectedProject.img,alt:t.selectedProject.alt}}),s("q-card-section",[s("p",[t._v(t._s(t.selectedProject.description))])])],1)],1)],1)},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"about row q-my-xl"},[s("div",{staticClass:"about-ribbon"}),s("div",{staticClass:"profile-left col-5  col-sm-5 col-xs-12 justify-end items-center row"},[s("div",{staticClass:"profile-img"})]),s("div",{staticClass:" profile-right col-7  col-sm-7 col-xs-12 row "},[s("div",{staticClass:"title q-pl-xl q-pt-xl"},[s("p",{staticClass:"text-overline"},[t._v("caramel? yes of course.")]),s("h4",{staticClass:"text-h4 text-weight-bold  text-barcelony"},[t._v("\n          Hi, I'm Adela Zamfirescu.\n        ")]),s("p",[t._v("Front End Dev, UI&UX Enthusiast")])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"description row q-my-xl"},[s("div",{staticClass:"col-8 col-sm-8 q-pa-xl col-xs-12"},[s("p",{staticClass:"text-overline text-right q-px-sm"},[t._v("23, Romania")]),s("h6",{staticClass:"text-h6 q-px-xl"},[t._v("\n        I'm a Front End Dev who also has a little bit of knowledge of the\n        backend part. After doing a number of projects, I got to work with\n        multiple technologies and understood better the reasons behind\n        choosing them in different situations.\n      ")]),s("p",{staticClass:"text-weight-light q-px-xl"},[t._v("\n        I believe communication is very important, as the message doesn't come\n        across the way we want it to, either from the sender or the receiver.\n        Taking the time to understand the product and the context is also what\n        helps build it better. I like working with a team, but don't mind\n        working on my own and think problems through.\n      ")])]),s("div",{staticClass:"col-4 justify-center column desktop-only"})])}],n=(s("e6cf"),{name:"home",components:{Experience:()=>Promise.all([s.e(0),s.e(7)]).then(s.bind(null,"8067")),Abilities:()=>Promise.all([s.e(0),s.e(3)]).then(s.bind(null,"14db")),Contact:()=>s.e(6).then(s.bind(null,"6180"))},data(){return{slide:"slide-100",autoplay:!1,selectedProject:{},openAbout:!1}},computed:{projects(){return this.$store.getters["details/getProjects"]}}}),o=n,l=(s("18eb"),s("2877")),c=s("880c"),r=s("62cd"),d=s("9c40"),u=s("24e8"),m=s("f09f"),p=s("068f"),b=s("a370"),h=s("eebe"),f=s.n(h),v=Object(l["a"])(o,i,a,!1,null,"efcdb554",null);e["default"]=v.exports;f()(v,"components",{QCarousel:c["a"],QCarouselSlide:r["a"],QBtn:d["a"],QDialog:u["a"],QCard:m["a"],QImg:p["a"],QCardSection:b["a"]})}}]);