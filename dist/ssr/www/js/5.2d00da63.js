(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"55ff":function(t,e,a){"use strict";var s=a("5a34"),i=a.n(s);i.a},"5a34":function(t,e,a){},bc13:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main q-pa-md q-pt-xl"},[a("div",{staticClass:"carousel"},[a("div",{staticClass:"carousel-ribbon"}),a("q-carousel",{attrs:{animated:"",navigation:"",infinite:"",arrows:"",swipeable:"",draggable:"false","transition-prev":"slide-right","transition-next":"slide-left"},on:{mouseenter:function(e){t.autoplay=!1},mouseleave:function(e){t.autoplay=!0}},model:{value:t.slide,callback:function(e){t.slide=e},expression:"slide"}},t._l(t.projects,(function(e){return a("q-carousel-slide",{key:e.id,attrs:{name:"slide-"+e.id,"img-src":e.img}},[a("div",{staticClass:"overlay column items-center justify-center"},[a("div",{staticClass:"content column justify-start items-center"},[a("h4",{staticClass:"text-h4 text-weight-medium"},[t._v(t._s(e.name))]),a("div",{staticClass:"row justify-evenly",staticStyle:{width:"100%"}},[e.link?a("q-btn",{attrs:{dense:"",flat:"","no-caps":"",type:"a","aria-label":"Access website",href:e.link,target:"_blank",color:"primary","icon-right":"link",label:"Site"}}):t._e(),a("q-btn",{attrs:{flat:"","no-caps":"","aria-label":"About the project",color:"primary",label:"About"},on:{click:function(a){t.openAbout=!0,t.selectedProject=e}}}),a("q-btn",{attrs:{dense:"",flat:"","no-caps":"",type:"a","aria-label":"View source code",href:e.gitLink,target:"_blank",icon:"code",color:"primary",label:"Code"}})],1)])])])})),1)],1),t._m(0),t._m(1),a("Experience"),a("Abilities"),a("Contact"),a("q-dialog",{model:{value:t.openAbout,callback:function(e){t.openAbout=e},expression:"openAbout"}},[a("q-card",{staticClass:"my-card"},[a("q-img",{staticStyle:{"max-height":"50vh"},attrs:{src:t.selectedProject.img,alt:t.selectedProject.alt}}),a("q-card-section",[a("p",[t._v(t._s(t.selectedProject.description))])])],1)],1)],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about row q-my-xl"},[a("div",{staticClass:"about-ribbon"}),a("div",{staticClass:"profile-left col-5  col-sm-5 col-xs-12 justify-end items-center row"},[a("div",{staticClass:"profile-img"})]),a("div",{staticClass:" profile-right col-7  col-sm-7 col-xs-12 row "},[a("div",{staticClass:"title q-pl-xl q-pt-xl"},[a("p",{staticClass:"text-overline"},[t._v("caramel? yes of course.")]),a("h4",{staticClass:"text-h4 text-weight-bold  text-barcelony"},[t._v("\n          Hi, I'm Adela Zamfirescu.\n        ")]),a("p",[t._v("Front End Dev, UI&UX Enthusiast")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"description row q-my-xl"},[a("div",{staticClass:"col-8 col-sm-8 q-pa-xl col-xs-12"},[a("p",{staticClass:"text-overline text-right q-px-sm"},[t._v("23, Romania")]),a("h6",{staticClass:"text-h6 q-px-xl"},[t._v("\n        I'm a Front End Dev who also has a little bit of knowledge of the\n        backend part. After doing a number of projects, I got to work with\n        multiple technologies and understood better the reasons behind\n        choosing them in different situations.\n      ")]),a("p",{staticClass:"text-weight-light q-px-xl"},[t._v("\n        I believe communication is very important, as the message doesn't come\n        across the way we want it to, either from the sender or the receiver.\n        Taking the time to understand the product and the context is also what\n        helps build it better. I like working with a team, but don't mind\n        working on my own and think problems through.\n      ")])]),a("div",{staticClass:"col-4 justify-center column desktop-only"})])}],n=(a("e6cf"),{name:"home",components:{Experience:()=>Promise.all([a.e(0),a.e(7)]).then(a.bind(null,"8067")),Abilities:()=>Promise.all([a.e(0),a.e(3)]).then(a.bind(null,"14db")),Contact:()=>a.e(6).then(a.bind(null,"6180"))},data(){return{slide:"slide-100",autoplay:!1,selectedProject:{},openAbout:!1}},computed:{projects(){return this.$store.getters["details/getProjects"]}}}),o=n,l=(a("55ff"),a("2877")),r=a("880c"),c=a("62cd"),d=a("9c40"),u=a("24e8"),m=a("f09f"),p=a("068f"),h=a("a370"),b=a("eebe"),f=a.n(b),v=Object(l["a"])(o,s,i,!1,null,"6ad0b337",null);e["default"]=v.exports;f()(v,"components",{QCarousel:r["a"],QCarouselSlide:c["a"],QBtn:d["a"],QDialog:u["a"],QCard:m["a"],QImg:p["a"],QCardSection:h["a"]})}}]);