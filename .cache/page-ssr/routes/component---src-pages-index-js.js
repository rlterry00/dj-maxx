exports.id = 678;
exports.ids = [678];
exports.modules = {

/***/ 1349:
/***/ ((module) => {

module.exports={siteTitle:"DJ Maxx",// <title>
manifestName:"Grayscale",manifestShortName:"Landing",// max 12 characters
manifestStartUrl:"/",manifestBackgroundColor:"#663399",manifestThemeColor:"#663399",manifestDisplay:"standalone",manifestIcon:"src/assets/images/djmaxxlogo.png",pathPrefix:`/gatsby-starter-grayscale/`,// This path is subpath of your hosting https://domain/portfolio
heading:"Dj Maxx",subHeading:"Music Moves",// social
socialLinks:[{icon:"fa-mixcloud",name:"Mix Cloud",url:"https://www.mixcloud.com/MaxxDC/"},{icon:"fa-instagram",name:"Instagram",url:"https://www.instagram.com/djmaxxdc/"},{icon:"fa-twitch",name:"Twich",url:"https://www.twitch.tv/djmaxxdc"}],email:"Djmaxxdc@icloud.com",phone:"571-926-7105",address:"DMV or wherever you need me to be!"};

/***/ }),

/***/ 7646:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Header)
});

// EXTERNAL MODULE: external "/Users/ramonterry/Desktop/dj-maxx/node_modules/react/index.js"
var index_js_ = __webpack_require__(215);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
// EXTERNAL MODULE: ./src/components/Scroll.js
var Scroll = __webpack_require__(618);
// EXTERNAL MODULE: ./config.js
var config = __webpack_require__(1349);
;// CONCATENATED MODULE: ./src/assets/images/djmaxxlogo.png
/* harmony default export */ const djmaxxlogo = (__webpack_require__.p + "static/djmaxxlogo-cf1aa9e99f401e5e194f4f3ce2c265e7.png");
;// CONCATENATED MODULE: ./src/components/Header.js
class Header extends index_js_.Component{constructor(props){super(props);this.toggleMenu=value=>{this.setState({openMenu:value});};this.handleScroll=()=>{const{visibilityClass}=this.state;if(window.pageYOffset>300){if(visibilityClass!=='navbar-shrink'){this.setState({visibilityClass:'navbar-shrink'});}}else{if(visibilityClass==='navbar-shrink'){this.setState({visibilityClass:''});}}};this.state={openMenu:false,visibilityClass:''};}componentDidMount(){window.addEventListener('scroll',this.handleScroll);}componentWillUnmount(){window.removeEventListener('scroll',this.handleScroll);}render(){const{openMenu,visibilityClass}=this.state;return/*#__PURE__*/index_js_default().createElement("nav",{className:`navbar navbar-expand-lg navbar-light fixed-top ${visibilityClass}`,id:"mainNav"},/*#__PURE__*/index_js_default().createElement("div",{className:"container"},/*#__PURE__*/index_js_default().createElement("a",{className:"navbar-brand",href:"#page-top"},/*#__PURE__*/index_js_default().createElement("img",{className:"img-fluid",src:djmaxxlogo,style:{height:100,width:100},alt:""})),/*#__PURE__*/index_js_default().createElement("button",{onClick:_=>this.toggleMenu(!openMenu),className:`navbar-toggler navbar-toggler-right ${openMenu?"":"collapsed"}`,type:"button","aria-controls":"navbarResponsive","aria-expanded":openMenu,"aria-label":"Toggle navigation"},"Menu",/*#__PURE__*/index_js_default().createElement("i",{className:"fas fa-bars",style:{paddingLeft:5}})),/*#__PURE__*/index_js_default().createElement("div",{className:`collapse navbar-collapse ${openMenu?"show":""}`,id:"navbarResponsive"},/*#__PURE__*/index_js_default().createElement("ul",{className:"navbar-nav ml-auto"},/*#__PURE__*/index_js_default().createElement("li",{className:"nav-item"},/*#__PURE__*/index_js_default().createElement(Scroll/* default */.Z,{onClick:_=>this.toggleMenu(!openMenu),type:"id",element:"about"},/*#__PURE__*/index_js_default().createElement("a",{className:"nav-link",href:"#about"},"About"))),/*#__PURE__*/index_js_default().createElement("li",{className:"nav-item"},/*#__PURE__*/index_js_default().createElement(Scroll/* default */.Z,{onClick:_=>this.toggleMenu(!openMenu),type:"id",element:"projects"},/*#__PURE__*/index_js_default().createElement("a",{className:"nav-link",href:"#projects"},"Services"))),/*#__PURE__*/index_js_default().createElement("li",{className:"nav-item"},/*#__PURE__*/index_js_default().createElement(Scroll/* default */.Z,{onClick:_=>this.toggleMenu(!openMenu),type:"id",element:"signup"},/*#__PURE__*/index_js_default().createElement("a",{className:"nav-link",href:"#signup"},"Contact")))))));}}

/***/ }),

/***/ 2899:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(215);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5482);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7533);
class Layout extends react__WEBPACK_IMPORTED_MODULE_0__.Component{render(){const{children}=this.props;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__.StaticQuery,{query:"3649515864",render:data=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment),null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__["default"],{title:data.site.siteMetadata.title,meta:[{name:"description",content:"Music Moves. A Dj and music enthusiast with an eclectic taste, Dj Maxx will tailor your experience specific to your event."},{name:"keywords",content:"site, web, music, dj, events, weddings, private parties, corporate"}]},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("html",{lang:"en"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("html",{lang:"en"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta",{property:"og:type",content:"website"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta",{property:"og:url",content:"https://djmaxxdc.com/"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta",{property:"og:title",content:"DJ Maxx"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta",{property:"og:description",content:"A Dj and music enthusiast with an eclectic taste, Dj Maxx will tailor your experience specific to your event."}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta",{property:"og:image",content:"https://www.djmaxxdc.com/static/maxxbw3-ea61fa4f6cd38c96c51939061538abfd.png"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta",{property:"twitter:card",content:"summary_large_image"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta",{property:"twitter:url",content:"https://djmaxxdc.com/"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta",{property:"twitter:title",content:"DJ Maxx"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta",{property:"twitter:description",content:"A Dj and music enthusiast with an eclectic taste, Dj Maxx will tailor your experience specific to your event."}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta",{property:"twitter:image",content:"https://www.djmaxxdc.com/static/maxxbw3-ea61fa4f6cd38c96c51939061538abfd.png"})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"page-top"},children))});}}Layout.propTypes={children:(prop_types__WEBPACK_IMPORTED_MODULE_3___default().node.isRequired)};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

/***/ }),

/***/ 618:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(523);
/* harmony import */ var smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(215);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
const Element=props=>{return props.children;};class Scroll extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component){constructor(){super();this.handleClick=this.handleClick.bind(this);}componentDidMount(){smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_0___default().polyfill();}handleClick(e){e.preventDefault();const{onClick=()=>{}}=this.props;let elem=0;let scroll=true;const{type,element,offset,timeout}=this.props;if(type&&element){switch(type){case'class':elem=document.getElementsByClassName(element)[0];scroll=elem?true:false;break;case'id':elem=document.getElementById(element);scroll=elem?true:false;break;default:}}scroll?this.scrollTo(elem,offset,timeout):console.log(`Element not found: ${element}`);// eslint-disable-line
onClick(e);}scrollTo(element,offSet=0,timeout=null){const elemPos=element?element.getBoundingClientRect().top+window.pageYOffset:0;if(timeout){setTimeout(()=>{window.scroll({top:elemPos+offSet,left:0,behavior:'smooth'});},timeout);}else{window.scroll({top:elemPos+offSet,left:0,behavior:'smooth'});}}render(){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Element,null,typeof this.props.children==='object'?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().cloneElement(this.props.children,{onClick:this.handleClick}):/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span",{onClick:this.handleClick},this.props.children));}}Scroll.propTypes={type:(prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),element:(prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),offset:(prop_types__WEBPACK_IMPORTED_MODULE_2___default().number),timeout:(prop_types__WEBPACK_IMPORTED_MODULE_2___default().number),children:(prop_types__WEBPACK_IMPORTED_MODULE_2___default().node.isRequired),onClick:(prop_types__WEBPACK_IMPORTED_MODULE_2___default().func)};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Scroll);

/***/ }),

/***/ 8674:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages)
});

// EXTERNAL MODULE: external "/Users/ramonterry/Desktop/dj-maxx/node_modules/react/index.js"
var index_js_ = __webpack_require__(215);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
// EXTERNAL MODULE: ./src/components/Layout.js
var Layout = __webpack_require__(2899);
// EXTERNAL MODULE: ./src/components/Scroll.js
var Scroll = __webpack_require__(618);
// EXTERNAL MODULE: ./config.js
var config = __webpack_require__(1349);
var config_default = /*#__PURE__*/__webpack_require__.n(config);
;// CONCATENATED MODULE: ./src/components/Footer.js
function Footer(){return/*#__PURE__*/index_js_default().createElement("footer",{className:"bg-black small text-center text-white-50"},/*#__PURE__*/index_js_default().createElement("div",{className:"container"},"Copyright \xA9 DJ Maxx 2022"));}
;// CONCATENATED MODULE: ./src/components/SocialLinks.js
function SocialLinks(){return/*#__PURE__*/index_js_default().createElement("section",{className:"contact-section bg-black"},/*#__PURE__*/index_js_default().createElement("div",{className:"container"},/*#__PURE__*/index_js_default().createElement("div",{className:"row"},/*#__PURE__*/index_js_default().createElement("div",{className:"col-md-4 mb-3 mb-md-0"},/*#__PURE__*/index_js_default().createElement("div",{className:"card py-4 h-100"},/*#__PURE__*/index_js_default().createElement("div",{className:"card-body text-center"},/*#__PURE__*/index_js_default().createElement("i",{className:"fas fa-map-marked-alt text-primary mb-2"}),/*#__PURE__*/index_js_default().createElement("h4",{className:"text-uppercase m-0"},"Serving"),/*#__PURE__*/index_js_default().createElement("hr",{className:"my-4"}),/*#__PURE__*/index_js_default().createElement("div",{className:"small text-black-50"},(config_default()).address)))),/*#__PURE__*/index_js_default().createElement("div",{className:"col-md-4 mb-3 mb-md-0"},/*#__PURE__*/index_js_default().createElement("div",{className:"card py-4 h-100"},/*#__PURE__*/index_js_default().createElement("div",{className:"card-body text-center"},/*#__PURE__*/index_js_default().createElement("i",{className:"fas fa-envelope text-primary mb-2"}),/*#__PURE__*/index_js_default().createElement("h4",{className:"text-uppercase m-0"},"Email"),/*#__PURE__*/index_js_default().createElement("hr",{className:"my-4"}),/*#__PURE__*/index_js_default().createElement("div",{className:"small text-black-50"},/*#__PURE__*/index_js_default().createElement("a",{href:`mailto:${(config_default()).email}`},(config_default()).email))))),/*#__PURE__*/index_js_default().createElement("div",{className:"col-md-4 mb-3 mb-md-0"},/*#__PURE__*/index_js_default().createElement("div",{className:"card py-4 h-100"},/*#__PURE__*/index_js_default().createElement("div",{className:"card-body text-center"},/*#__PURE__*/index_js_default().createElement("i",{className:"fas fa-mobile-alt text-primary mb-2"}),/*#__PURE__*/index_js_default().createElement("h4",{className:"text-uppercase m-0"},"Phone"),/*#__PURE__*/index_js_default().createElement("hr",{className:"my-4"}),/*#__PURE__*/index_js_default().createElement("div",{className:"small text-black-50"},(config_default()).phone))))),/*#__PURE__*/index_js_default().createElement("div",{className:"social d-flex justify-content-center"},config_default().socialLinks.map(social=>{const{icon,url}=social;return/*#__PURE__*/index_js_default().createElement("a",{key:url,href:url,className:`mx-2`},/*#__PURE__*/index_js_default().createElement("i",{className:`fab ${icon}`}));}))));}
;// CONCATENATED MODULE: ./src/components/Subscribe.js
function Subscribe(){return/*#__PURE__*/index_js_default().createElement("section",{id:"signup",className:"signup-section"},/*#__PURE__*/index_js_default().createElement("div",{className:"container"},/*#__PURE__*/index_js_default().createElement("div",{className:"row"},/*#__PURE__*/index_js_default().createElement("div",{className:"col-md-10 col-lg-8 mx-auto text-center"},/*#__PURE__*/index_js_default().createElement("i",{className:"far fa-paper-plane fa-2x mb-2 text-white"}),/*#__PURE__*/index_js_default().createElement("h2",{className:"text-white mb-5"},"Book Me For Your Next Event!"),/*#__PURE__*/index_js_default().createElement("form",{className:"form-inline d-flex",style:{visibility:"hidden"}},/*#__PURE__*/index_js_default().createElement("input",{type:"email",className:"form-control flex-fill mr-0 mr-sm-2 mb-3 mb-sm-0",id:"inputEmail",placeholder:"Enter email address..."}),/*#__PURE__*/index_js_default().createElement("button",{type:"submit",className:"btn btn-primary mx-auto"},"Subscribe"))))));}
// EXTERNAL MODULE: ./src/components/Header.js + 1 modules
var Header = __webpack_require__(7646);
;// CONCATENATED MODULE: ./src/assets/images/ipad.png
/* harmony default export */ const ipad = (__webpack_require__.p + "static/ipad-d9c10e6df68d20d97de52e58bb1e1e8e.png");
;// CONCATENATED MODULE: ./src/assets/images/demo-image-01.jpg
/* harmony default export */ const demo_image_01 = (__webpack_require__.p + "static/demo-image-01-cc9d2e3ed0e5328100ea7145bee28c4c.jpg");
;// CONCATENATED MODULE: ./src/assets/images/demo-image-02.jpg
/* harmony default export */ const demo_image_02 = (__webpack_require__.p + "static/demo-image-02-75d646b926c5d069952b228c63a0f575.jpg");
;// CONCATENATED MODULE: ./src/assets/images/bg-masthead.jpg
/* harmony default export */ const bg_masthead = (__webpack_require__.p + "static/bg-masthead-733fe6480d0aff46860c2beb6070fed8.jpg");
;// CONCATENATED MODULE: ./src/assets/images/maxxbw2.png
/* harmony default export */ const maxxbw2 = (__webpack_require__.p + "static/maxxbw2-0e136188cc5c312f3c35fbc091fa5c24.png");
;// CONCATENATED MODULE: ./src/assets/images/maxxbw1.png
/* harmony default export */ const maxxbw1 = (__webpack_require__.p + "static/maxxbw1-0e04e42de168e43151d65e373287cce5.png");
;// CONCATENATED MODULE: ./src/assets/images/headphonesbw.png
/* harmony default export */ const headphonesbw = (__webpack_require__.p + "static/headphonesbw-477c669a80d0b33ee738fd14ef241f13.png");
;// CONCATENATED MODULE: ./src/assets/images/maxxbw3.png
/* harmony default export */ const maxxbw3 = (__webpack_require__.p + "static/maxxbw3-ea61fa4f6cd38c96c51939061538abfd.png");
;// CONCATENATED MODULE: ./src/assets/images/animation_500_l0riblid.gif
/* harmony default export */ const animation_500_l0riblid = (__webpack_require__.p + "static/animation_500_l0riblid-0f4d976d77d0007767cc78ae0810db84.gif");
;// CONCATENATED MODULE: ./src/assets/images/animation_500_l0rivgek.gif
/* harmony default export */ const animation_500_l0rivgek = (__webpack_require__.p + "static/animation_500_l0rivgek-288396f2ac98062f4086e4b60eb3e650.gif");
;// CONCATENATED MODULE: ./src/pages/index.js
const IndexPage=()=>/*#__PURE__*/index_js_default().createElement(Layout/* default */.Z,null,/*#__PURE__*/index_js_default().createElement(Header/* default */.Z,null),/*#__PURE__*/index_js_default().createElement("header",{className:"masthead"},/*#__PURE__*/index_js_default().createElement("div",{className:"container d-flex h-100 align-items-center"},/*#__PURE__*/index_js_default().createElement("div",{className:"mx-auto text-center"},/*#__PURE__*/index_js_default().createElement("h1",{className:"mx-auto my-0 text-uppercase"},(config_default()).heading),/*#__PURE__*/index_js_default().createElement("h2",{className:"text-white-50 mx-auto mt-2 mb-5"},(config_default()).subHeading),/*#__PURE__*/index_js_default().createElement(Scroll/* default */.Z,{type:"id",element:"about"},/*#__PURE__*/index_js_default().createElement("a",{href:"#about",className:"btn btn-primary"},"About"))))),/*#__PURE__*/index_js_default().createElement("section",{className:"about-section text-center"},/*#__PURE__*/index_js_default().createElement("div",{className:"container"},/*#__PURE__*/index_js_default().createElement("div",{className:"row"},/*#__PURE__*/index_js_default().createElement("div",{className:"col-lg-8 mx-auto"},/*#__PURE__*/index_js_default().createElement("h2",{className:"text-white mb-4"},"\"The noblest art is that of making others happy.\""),/*#__PURE__*/index_js_default().createElement("p",{className:"text-white-50"},"- P.T. Barnum"))),/*#__PURE__*/index_js_default().createElement("img",{src:headphonesbw,className:"img-fluid",style:{width:500,height:"auto",padding:40,borderRadius:50},alt:""}))),/*#__PURE__*/index_js_default().createElement("section",{id:"about",className:"projects-section bg-light"},/*#__PURE__*/index_js_default().createElement("div",{className:"container"},/*#__PURE__*/index_js_default().createElement("div",{className:"row align-items-center no-gutters mb-4 mb-lg-5"},/*#__PURE__*/index_js_default().createElement("div",{className:"col-xl-8 col-lg-7"},/*#__PURE__*/index_js_default().createElement("img",{className:"img-fluid mb-3 mb-lg-0 image-shadow",src:maxxbw1,alt:""})),/*#__PURE__*/index_js_default().createElement("div",{className:"col-xl-4 col-lg-5"},/*#__PURE__*/index_js_default().createElement("div",{className:"featured-text text-center text-lg-left"},/*#__PURE__*/index_js_default().createElement("h4",null,"Who is DJ Maxx?"),/*#__PURE__*/index_js_default().createElement("img",{className:"img-fluid mb-3 mb-lg-0",src:animation_500_l0rivgek,alt:"",style:{width:100,height:"auto"}}),/*#__PURE__*/index_js_default().createElement("p",{className:"text-black-50 mb-0"},"A Dj and music enthusiast with an eclectic taste, Dj Maxx will tailor your experience specific to your event. Dj Maxx has years of experience (est. 1988) Dj'ing private parties, clubs, special and corporate events. Maxx uses his own creativity and style with the music that moves those that seek to have an enjoyable experience. He provides professionalism and timely service. His guiding thought is, allow music to take participants on a memorable rhythmic journey that refresh the soul. ",/*#__PURE__*/index_js_default().createElement("br",null)," \u201C\u2026Be refreshed and be well\u2026\u201D"),/*#__PURE__*/index_js_default().createElement("br",null),/*#__PURE__*/index_js_default().createElement("p",{className:"text-black-50 mb-0"},"1 Samuel 16:23")))),/*#__PURE__*/index_js_default().createElement("div",{className:"row justify-content-center no-gutters mb-5 mb-lg-0",id:"projects"},/*#__PURE__*/index_js_default().createElement("div",{className:"col-lg-6 image-shadow"},/*#__PURE__*/index_js_default().createElement("img",{className:"img-fluid",src:maxxbw2,alt:""})),/*#__PURE__*/index_js_default().createElement("div",{className:"col-lg-6"},/*#__PURE__*/index_js_default().createElement("div",{className:"bg-black text-center h-100 project"},/*#__PURE__*/index_js_default().createElement("div",{className:"d-flex h-100"},/*#__PURE__*/index_js_default().createElement("div",{className:"project-text w-100 my-auto text-center text-lg-left"},/*#__PURE__*/index_js_default().createElement("h4",{className:"text-white"},"Maxx Services:"),/*#__PURE__*/index_js_default().createElement("p",{className:"mb-0 text-white-50"},"- Private Parties ",/*#__PURE__*/index_js_default().createElement("br",null)," - Corporate Events ",/*#__PURE__*/index_js_default().createElement("br",null)," - Church Events ",/*#__PURE__*/index_js_default().createElement("br",null)," - Mobile Events"),/*#__PURE__*/index_js_default().createElement("hr",{className:"d-none d-lg-block mb-0 ml-0"})))))),/*#__PURE__*/index_js_default().createElement("div",{className:"row justify-content-center no-gutters"},/*#__PURE__*/index_js_default().createElement("div",{className:"col-lg-6"},/*#__PURE__*/index_js_default().createElement("img",{className:"img-fluid",src:maxxbw3,alt:""})),/*#__PURE__*/index_js_default().createElement("div",{className:"col-lg-6 order-lg-first"},/*#__PURE__*/index_js_default().createElement("div",{className:"bg-black text-center h-100 project"},/*#__PURE__*/index_js_default().createElement("div",{className:"d-flex h-100"},/*#__PURE__*/index_js_default().createElement("div",{className:"project-text w-100 my-auto text-center text-lg-right"},/*#__PURE__*/index_js_default().createElement("h4",{className:"text-white"},"Maxx Mixxes:"),/*#__PURE__*/index_js_default().createElement("a",{href:"https://m.mixcloud.com/MaxxDC/"},/*#__PURE__*/index_js_default().createElement("img",{className:"img-fluid mb-3 mb-lg-0",src:animation_500_l0riblid,alt:"",style:{width:100,height:"auto"}})),/*#__PURE__*/index_js_default().createElement("p",{className:"mb-0 text-white-50"},"If you are trying to catch a vibe and check out what DJ Maxx has to offer then check out my mixes on Mix Cloud! Click the record player above."),/*#__PURE__*/index_js_default().createElement("hr",{className:"d-none d-lg-block mb-0 mr-0"})))))))),/*#__PURE__*/index_js_default().createElement(Subscribe,null),/*#__PURE__*/index_js_default().createElement(SocialLinks,null),/*#__PURE__*/index_js_default().createElement(Footer,null));/* harmony default export */ const pages = (IndexPage);

/***/ }),

/***/ 523:
/***/ ((module) => {

/* smoothscroll v0.4.4 - 2019 - Dustan Kasten, Jeremias Menichelli - MIT License */
(function () {
  'use strict';

  // polyfill
  function polyfill() {
    // aliases
    var w = window;
    var d = document;

    // return if scroll behavior is supported and polyfill is not forced
    if (
      'scrollBehavior' in d.documentElement.style &&
      w.__forceSmoothScrollPolyfill__ !== true
    ) {
      return;
    }

    // globals
    var Element = w.HTMLElement || w.Element;
    var SCROLL_TIME = 468;

    // object gathering original scroll methods
    var original = {
      scroll: w.scroll || w.scrollTo,
      scrollBy: w.scrollBy,
      elementScroll: Element.prototype.scroll || scrollElement,
      scrollIntoView: Element.prototype.scrollIntoView
    };

    // define timing method
    var now =
      w.performance && w.performance.now
        ? w.performance.now.bind(w.performance)
        : Date.now;

    /**
     * indicates if a the current browser is made by Microsoft
     * @method isMicrosoftBrowser
     * @param {String} userAgent
     * @returns {Boolean}
     */
    function isMicrosoftBrowser(userAgent) {
      var userAgentPatterns = ['MSIE ', 'Trident/', 'Edge/'];

      return new RegExp(userAgentPatterns.join('|')).test(userAgent);
    }

    /*
     * IE has rounding bug rounding down clientHeight and clientWidth and
     * rounding up scrollHeight and scrollWidth causing false positives
     * on hasScrollableSpace
     */
    var ROUNDING_TOLERANCE = isMicrosoftBrowser(w.navigator.userAgent) ? 1 : 0;

    /**
     * changes scroll position inside an element
     * @method scrollElement
     * @param {Number} x
     * @param {Number} y
     * @returns {undefined}
     */
    function scrollElement(x, y) {
      this.scrollLeft = x;
      this.scrollTop = y;
    }

    /**
     * returns result of applying ease math function to a number
     * @method ease
     * @param {Number} k
     * @returns {Number}
     */
    function ease(k) {
      return 0.5 * (1 - Math.cos(Math.PI * k));
    }

    /**
     * indicates if a smooth behavior should be applied
     * @method shouldBailOut
     * @param {Number|Object} firstArg
     * @returns {Boolean}
     */
    function shouldBailOut(firstArg) {
      if (
        firstArg === null ||
        typeof firstArg !== 'object' ||
        firstArg.behavior === undefined ||
        firstArg.behavior === 'auto' ||
        firstArg.behavior === 'instant'
      ) {
        // first argument is not an object/null
        // or behavior is auto, instant or undefined
        return true;
      }

      if (typeof firstArg === 'object' && firstArg.behavior === 'smooth') {
        // first argument is an object and behavior is smooth
        return false;
      }

      // throw error when behavior is not supported
      throw new TypeError(
        'behavior member of ScrollOptions ' +
          firstArg.behavior +
          ' is not a valid value for enumeration ScrollBehavior.'
      );
    }

    /**
     * indicates if an element has scrollable space in the provided axis
     * @method hasScrollableSpace
     * @param {Node} el
     * @param {String} axis
     * @returns {Boolean}
     */
    function hasScrollableSpace(el, axis) {
      if (axis === 'Y') {
        return el.clientHeight + ROUNDING_TOLERANCE < el.scrollHeight;
      }

      if (axis === 'X') {
        return el.clientWidth + ROUNDING_TOLERANCE < el.scrollWidth;
      }
    }

    /**
     * indicates if an element has a scrollable overflow property in the axis
     * @method canOverflow
     * @param {Node} el
     * @param {String} axis
     * @returns {Boolean}
     */
    function canOverflow(el, axis) {
      var overflowValue = w.getComputedStyle(el, null)['overflow' + axis];

      return overflowValue === 'auto' || overflowValue === 'scroll';
    }

    /**
     * indicates if an element can be scrolled in either axis
     * @method isScrollable
     * @param {Node} el
     * @param {String} axis
     * @returns {Boolean}
     */
    function isScrollable(el) {
      var isScrollableY = hasScrollableSpace(el, 'Y') && canOverflow(el, 'Y');
      var isScrollableX = hasScrollableSpace(el, 'X') && canOverflow(el, 'X');

      return isScrollableY || isScrollableX;
    }

    /**
     * finds scrollable parent of an element
     * @method findScrollableParent
     * @param {Node} el
     * @returns {Node} el
     */
    function findScrollableParent(el) {
      while (el !== d.body && isScrollable(el) === false) {
        el = el.parentNode || el.host;
      }

      return el;
    }

    /**
     * self invoked function that, given a context, steps through scrolling
     * @method step
     * @param {Object} context
     * @returns {undefined}
     */
    function step(context) {
      var time = now();
      var value;
      var currentX;
      var currentY;
      var elapsed = (time - context.startTime) / SCROLL_TIME;

      // avoid elapsed times higher than one
      elapsed = elapsed > 1 ? 1 : elapsed;

      // apply easing to elapsed time
      value = ease(elapsed);

      currentX = context.startX + (context.x - context.startX) * value;
      currentY = context.startY + (context.y - context.startY) * value;

      context.method.call(context.scrollable, currentX, currentY);

      // scroll more if we have not reached our destination
      if (currentX !== context.x || currentY !== context.y) {
        w.requestAnimationFrame(step.bind(w, context));
      }
    }

    /**
     * scrolls window or element with a smooth behavior
     * @method smoothScroll
     * @param {Object|Node} el
     * @param {Number} x
     * @param {Number} y
     * @returns {undefined}
     */
    function smoothScroll(el, x, y) {
      var scrollable;
      var startX;
      var startY;
      var method;
      var startTime = now();

      // define scroll context
      if (el === d.body) {
        scrollable = w;
        startX = w.scrollX || w.pageXOffset;
        startY = w.scrollY || w.pageYOffset;
        method = original.scroll;
      } else {
        scrollable = el;
        startX = el.scrollLeft;
        startY = el.scrollTop;
        method = scrollElement;
      }

      // scroll looping over a frame
      step({
        scrollable: scrollable,
        method: method,
        startTime: startTime,
        startX: startX,
        startY: startY,
        x: x,
        y: y
      });
    }

    // ORIGINAL METHODS OVERRIDES
    // w.scroll and w.scrollTo
    w.scroll = w.scrollTo = function() {
      // avoid action when no arguments are passed
      if (arguments[0] === undefined) {
        return;
      }

      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0]) === true) {
        original.scroll.call(
          w,
          arguments[0].left !== undefined
            ? arguments[0].left
            : typeof arguments[0] !== 'object'
              ? arguments[0]
              : w.scrollX || w.pageXOffset,
          // use top prop, second argument if present or fallback to scrollY
          arguments[0].top !== undefined
            ? arguments[0].top
            : arguments[1] !== undefined
              ? arguments[1]
              : w.scrollY || w.pageYOffset
        );

        return;
      }

      // LET THE SMOOTHNESS BEGIN!
      smoothScroll.call(
        w,
        d.body,
        arguments[0].left !== undefined
          ? ~~arguments[0].left
          : w.scrollX || w.pageXOffset,
        arguments[0].top !== undefined
          ? ~~arguments[0].top
          : w.scrollY || w.pageYOffset
      );
    };

    // w.scrollBy
    w.scrollBy = function() {
      // avoid action when no arguments are passed
      if (arguments[0] === undefined) {
        return;
      }

      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0])) {
        original.scrollBy.call(
          w,
          arguments[0].left !== undefined
            ? arguments[0].left
            : typeof arguments[0] !== 'object' ? arguments[0] : 0,
          arguments[0].top !== undefined
            ? arguments[0].top
            : arguments[1] !== undefined ? arguments[1] : 0
        );

        return;
      }

      // LET THE SMOOTHNESS BEGIN!
      smoothScroll.call(
        w,
        d.body,
        ~~arguments[0].left + (w.scrollX || w.pageXOffset),
        ~~arguments[0].top + (w.scrollY || w.pageYOffset)
      );
    };

    // Element.prototype.scroll and Element.prototype.scrollTo
    Element.prototype.scroll = Element.prototype.scrollTo = function() {
      // avoid action when no arguments are passed
      if (arguments[0] === undefined) {
        return;
      }

      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0]) === true) {
        // if one number is passed, throw error to match Firefox implementation
        if (typeof arguments[0] === 'number' && arguments[1] === undefined) {
          throw new SyntaxError('Value could not be converted');
        }

        original.elementScroll.call(
          this,
          // use left prop, first number argument or fallback to scrollLeft
          arguments[0].left !== undefined
            ? ~~arguments[0].left
            : typeof arguments[0] !== 'object' ? ~~arguments[0] : this.scrollLeft,
          // use top prop, second argument or fallback to scrollTop
          arguments[0].top !== undefined
            ? ~~arguments[0].top
            : arguments[1] !== undefined ? ~~arguments[1] : this.scrollTop
        );

        return;
      }

      var left = arguments[0].left;
      var top = arguments[0].top;

      // LET THE SMOOTHNESS BEGIN!
      smoothScroll.call(
        this,
        this,
        typeof left === 'undefined' ? this.scrollLeft : ~~left,
        typeof top === 'undefined' ? this.scrollTop : ~~top
      );
    };

    // Element.prototype.scrollBy
    Element.prototype.scrollBy = function() {
      // avoid action when no arguments are passed
      if (arguments[0] === undefined) {
        return;
      }

      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0]) === true) {
        original.elementScroll.call(
          this,
          arguments[0].left !== undefined
            ? ~~arguments[0].left + this.scrollLeft
            : ~~arguments[0] + this.scrollLeft,
          arguments[0].top !== undefined
            ? ~~arguments[0].top + this.scrollTop
            : ~~arguments[1] + this.scrollTop
        );

        return;
      }

      this.scroll({
        left: ~~arguments[0].left + this.scrollLeft,
        top: ~~arguments[0].top + this.scrollTop,
        behavior: arguments[0].behavior
      });
    };

    // Element.prototype.scrollIntoView
    Element.prototype.scrollIntoView = function() {
      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0]) === true) {
        original.scrollIntoView.call(
          this,
          arguments[0] === undefined ? true : arguments[0]
        );

        return;
      }

      // LET THE SMOOTHNESS BEGIN!
      var scrollableParent = findScrollableParent(this);
      var parentRects = scrollableParent.getBoundingClientRect();
      var clientRects = this.getBoundingClientRect();

      if (scrollableParent !== d.body) {
        // reveal element inside parent
        smoothScroll.call(
          this,
          scrollableParent,
          scrollableParent.scrollLeft + clientRects.left - parentRects.left,
          scrollableParent.scrollTop + clientRects.top - parentRects.top
        );

        // reveal parent in viewport unless is fixed
        if (w.getComputedStyle(scrollableParent).position !== 'fixed') {
          w.scrollBy({
            left: parentRects.left,
            top: parentRects.top,
            behavior: 'smooth'
          });
        }
      } else {
        // reveal element in viewport
        w.scrollBy({
          left: clientRects.left,
          top: clientRects.top,
          behavior: 'smooth'
        });
      }
    };
  }

  if (true) {
    // commonjs
    module.exports = { polyfill: polyfill };
  } else {}

}());


/***/ })

};
;
//# sourceMappingURL=component---src-pages-index-js.js.map