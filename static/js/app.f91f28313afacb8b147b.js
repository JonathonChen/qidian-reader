webpackJsonp([1],Array(22).concat([function(t,e,n){function o(t){n(152)}var i=n(0)(n(93),n(184),o,null,null);t.exports=i.exports},,function(t,e,n){"use strict";var o=n(102),i=n.n(o),a={StorageGetter:function(t){return JSON.parse(localStorage.getItem(t))},StorageSetter:function(t,e){return localStorage.setItem(t,i()(e))}};e.a=a},,,,,,,,,,,function(t,e,n){"use strict";e.a={install:function(t,e){t.prototype.common={defaultImage:function(t){t.target.src="http://www.zwdu.com/files/article/image/20/20962/20962s.jpg"},api:"http://123.207.6.99:3000"}}}},,,,,,function(t,e,n){"use strict";n.d(e,"a",function(){return o}),n.d(e,"b",function(){return i}),n.d(e,"c",function(){return a}),n.d(e,"d",function(){return s}),n.d(e,"e",function(){return r}),n.d(e,"f",function(){return c}),n.d(e,"g",function(){return l}),n.d(e,"h",function(){return u}),n.d(e,"i",function(){return d}),n.d(e,"j",function(){return f}),n.d(e,"k",function(){return v});var o="TOGGLE_BAR",i="SHOW_LIST_PANEL",a="SHOW_FONT_PANEL",s="FZ_SIZE_ADD",r="FZ_SIZE_SUB",c="SWITCH_NIGHT",l="PREV_CHAPTER",u="NEXT_CHAPTER",d="CHOOSE_BOOK",f="SHOW_BOOK_DETAIL",v="CUR_CHAPTER"},,,,,,,,,,,,,,,,,function(t,e,n){"use strict";var o=n(14),i=n(198);o.default.use(i.a),e.a=new i.a({routes:[{path:"/",redirect:"/home"},{path:"/home",name:"home",component:n(177)},{path:"/reader/:id",name:"reader",component:n(179)},{path:"/bookdetail/:id",name:"bookdetail",component:n(170)},{path:"/category",name:"category",component:n(172)}]})},function(t,e,n){"use strict";var o=n(14),i=n(4),a=n(100),s=n(99);n(24);o.default.use(i.a);var r={bar:!1,font_panel:!1,font_icon:!1,bg_color:1,bg_night:!1,fz_size:18,curChapter:1,windowHeight:"",list_panel:!1,curBookDetailId:1,curBookContentId:1};e.a=new i.a.Store({state:r,mutations:a.a,actions:s.a})},function(t,e){},function(t,e){},function(t,e){},,function(t,e,n){function o(t){n(153)}var i=n(0)(n(83),n(185),o,null,null);t.exports=i.exports},,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app"}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(10),i=n.n(o),a=n(4),s=n(9),r=n.n(s),c=n(180),l=n.n(c),u=(n(35),n(182)),d=n.n(u),f=n(22),v=n.n(f);e.default={data:function(){return{loading:!1,content:null,bookDetail:{},likes:[],showmore:!1}},created:function(){this.getBookDetail(this.$route.params.id)},methods:{getBookDetail:function(t){var e=this;this.loading=!0,r.a.get(this.common.api+"/booklist?id="+t).then(function(t){e.loading=!1,e.showmore=!1,e.bookDetail=t.data,e.likes=t.data.like.split("-")})},openBook:function(){this.$store.state.bar=!1},back:function(){this.$router.go(-1)},loadImage:function(t){this.common.defaultImage(t)}},computed:i()({},n.i(a.b)(["curBookDetailId"])),components:{Similar:l.a,Rate:d.a,Loading:v.a},watch:{$route:function(t,e){this.getBookDetail(t.params.id)}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(10),i=n.n(o),a=n(4);e.default={data:function(){return{font_icon_class:!1}},methods:{showListPanel:function(){this.$store.dispatch("showListPanel"),this.$store.state.font_panel=!1},showFontPanel:function(){this.font_icon_class=!this.font_icon_class,this.$store.dispatch("showFontPanel")},swithNight:function(){this.$store.dispatch("switchNight")}},computed:i()({},n.i(a.b)(["font_panel","list_panel","bar"]))}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(10),i=n.n(o),a=n(105),s=n.n(a),r=n(101),c=n.n(r),l=n(9),u=n.n(l),d=n(4),f=n(22),v=n.n(f);e.default={data:function(){return{categoryList:[],loading:!1}},created:function(){this.getCategory(this.$route.query.type)},methods:{getCategory:function(t){var e=this;this.loading=!0,u.a.get(this.common.api+"/type?type="+t).then(function(t){e.loading=!1,e.categoryList=t.data})},bookDetailId:function(t){this.$store.dispatch("chooseBook",t),console.log(t)},unique:function(t){return c()(new s.a(t))}},components:{Loading:v.a},computed:i()({},n.i(d.b)(["bookCategoryType"]),{title:function(){switch(this.$route.query.type){case 1:return"玄幻";case 2:return"修真";case 3:return"都市";case 4:return"历史";case 5:return"网游";default:return"分类"}}})}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{typeArr:[]}},props:["datalist","title"],methods:{bookDetailId:function(t){this.$store.dispatch("chooseBook",t)}},filters:{type:function(t){switch(t){case 1:return"玄幻";case 2:return"修真";case 3:return"都市";case 4:return"历史";case 5:return"网游";default:return"类型"}}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{}},props:["booklist","title"],methods:{bookDetailId:function(t){this.$store.dispatch("chooseBook",t)},loadImage:function(t){this.common.defaultImage(t)}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={methods:{hideListPanel:function(){this.$store.state.list_panel=!1}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(10),i=n.n(o),a=n(4),s=n(24);e.default={data:function(){return{now_color:0}},computed:i()({},n.i(a.b)(["font_panel","bg_color"])),methods:{changeColor:function(t){this.now_color=t,this.$store.state.bg_color=t+1,s.a.StorageSetter("bg_color",t+1)},add:function(){this.$store.dispatch("fzSizeAdd")},sub:function(){this.$store.dispatch("fzSizeSub")}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(9),i=n.n(o),a=n(174),s=n.n(a),r=n(173),c=n.n(r),l=n(22),u=n.n(l);e.default={data:function(){return{booklist:[],type:[{num:1,word:"玄幻"},{num:2,word:"修真"},{num:3,word:"都市"},{num:4,word:"历史"},{num:5,word:"游戏"}],loading:!1}},created:function(){this.getData()},methods:{getData:function(){var t=this;this.loading=!0,i.a.get(this.common.api+"/booklist").then(function(e){t.loading=!1,t.booklist=e.data})}},components:{Recommend:s.a,BookList:c.a,Loading:u.a},filters:{hot:function(t){if(!t)return"";var e=[];return t.forEach(function(t,n){n<20&&n%2==1&&e.push(t)}),e},top:function(t){if(!t)return"";var e=[];return t.forEach(function(t,n){n<20&&n%2==0&&e.push(t)}),e},free:function(t){if(!t)return"";var e=[];return t.forEach(function(t,n){n<20&&n%3==2&&e.push(t)}),e},newbook:function(t){if(!t)return"";var e=[];return t.forEach(function(t,n){n%3==1&&e.push(t)}),e.splice(0,3)},endbook:function(t){if(!t)return"";var e=[];return t.forEach(function(t,n){"完本"===t.serialize&&e.push(t)}),e},like:function(t){if(!t)return"";var e=[];return t.forEach(function(t,n){n%4==2&&e.push(t)}),e.splice(0,3)}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(9),i=n.n(o);n(4);e.default={data:function(){return{chapterList:[]}},props:{bookId:{type:String,required:!0}},created:function(){this.getList()},methods:{jumpTo:function(t){t>=50&&(t=50),this.$store.dispatch("curChapter",t+1),this.hideListPanel(),this.$store.state.bar=!1,document.body.scrollTop=0},hideListPanel:function(){this.$store.state.list_panel=!1},getList:function(){var t=this;i.a.get(this.common.api+"/titles?id="+this.bookId).then(function(e){t.chapterList=e.data.titles.split("-")})}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{size:{type:Number,default:50},stroke:{type:Number,default:3.5},color:{type:String,default:"#ed424b"}},computed:{loadingSize:function(){var t=this.size+"px";return{width:t,height:t}},loadingColor:function(){return{stroke:this.color}}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(10),i=n.n(o),a=(n(14),n(4)),s=n(9),r=n.n(s),c=n(24),l=n(181),u=n.n(l),d=n(171),f=n.n(d),v=n(176),p=n.n(v),h=n(178),_=n.n(h),m=n(175),b=n.n(m),g=n(22),k=n.n(g);e.default={data:function(){return{bar:!1,timer:null,title:"",content:[],loading:!1,showList:!1,booksReadInfo:{}}},components:{TopNav:u.a,BottomNav:f.a,FontNav:p.a,ListPanel:_.a,Cover:b.a,Loading:k.a},created:function(){c.a.StorageGetter("fz_size")&&(this.$store.state.fz_size=c.a.StorageGetter("fz_size")),c.a.StorageGetter("bg_color")&&(this.$store.state.bg_color=c.a.StorageGetter("bg_color"));var t=c.a.StorageGetter("bookreaderinfo"),e=this.$route.params.id;t&&t[e]?(this.booksReadInfo=c.a.StorageGetter("bookreaderinfo"),this.getData(e,this.booksReadInfo[e].chapter),this.$store.dispatch("curChapter",this.booksReadInfo[e].chapter)):t?(this.booksReadInfo=t,this.getData(e,1),this.$store.dispatch("curChapter",1)):(this.booksReadInfo[e]={book:e,chapter:1},this.getData(e,1),this.$store.dispatch("curChapter",1))},mounted:function(){this.$refs.fz_size.style.fontSize=this.fz_size+"px"},methods:{clickBar:function(){this.$store.dispatch("toggleBar"),this.$store.state.font_panel=!1},pageUp:function(){var t=document.body.scrollTop-window.screen.height-80;this.startScroll(t,-20)},pageDown:function(){var t=document.body.scrollTop+window.screen.height-80;this.startScroll(t,20)},startScroll:function(t,e){var n=null;n=setInterval(function(){if(e>0){if(document.body.scrollTop<=t){console.log("滚动");var o=document.body.scrollTop;o+=e,o>t||o+window.screen.height>=document.body.scrollHeight?(console.log("清楚定时器"),clearInterval(n)):document.body.scrollTop+=e}}else document.body.scrollTop>=t&&(document.body.scrollTop+=e),(document.body.scrollTop<t||document.body.scrollTop<=0)&&clearInterval(n)},1)},getData:function(t,e){var n=this;this.loading=!0,r.a.get(this.common.api+"/book?book="+t+"&id="+e).then(function(t){n.loading=!1,n.title=t.data.title,n.content=t.data.content.split("-")}),this.$store.state.windowHeight=window.screen.height},prevChapter:function(){this.$store.dispatch("prevChapter"),this.saveBooksInfo(),setTimeout(function(){document.body.scrollTop=0},300)},nextChapter:function(){this.$store.dispatch("nextChapter",50),this.saveBooksInfo(),setTimeout(function(){document.body.scrollTop=0},300)},saveBooksInfo:function(){var t=this.$route.params.id;this.booksReadInfo[t]={book:t,chapter:this.curChapter},c.a.StorageSetter("bookreaderinfo",this.booksReadInfo)},page:function(t){39===t.keyCode?(console.log(this.nextChapter),this.nextChapter()):37===t.keyCode&&this.prevChapter()}},computed:i()({},n.i(a.b)(["font_panel","bg_color","fz_size","bg_night","curChapter","windowHeight","list_panel"])),watch:{fz_size:function(t,e){this.$refs.fz_size.style.fontSize=t+"px",c.a.StorageSetter("fz_size",t)},curChapter:function(t,e){c.a.StorageSetter("cur_chapter",t),this.saveBooksInfo(),this.getData(this.$route.params.id,t)}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(10),i=n.n(o),a=n(9),s=n.n(a),r=n(4);e.default={data:function(){return{bookDetail:{}}},props:{like:{type:String,required:!0}},computed:i()({},n.i(r.b)([])),created:function(){this.getBookDetail(this.like)},methods:{getBookDetail:function(t){var e=this;s.a.get(this.common.api+"/booklist?id="+t).then(function(t){e.bookDetail=t.data})},toBookDetail:function(t){this.$router.push({path:"/bookdetail/"+t}),document.body.scrollTop=0},loadImage:function(t){this.common.defaultImage(t)}},filters:{},watch:{like:function(t,e){this.getBookDetail(t)}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(10),i=n.n(o),a=n(4);e.default={methods:{back:function(){this.$router.go(-1)}},computed:i()({},n.i(a.b)(["bar"]))}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{}},props:["score"],computed:{itemClasses:function(){for(var t=[],e=Math.floor(2*this.score)/2,n=e%1!=0,o=Math.floor(e),i=0;i<o;i++)t.push("on");for(n&&t.push("half");t.length<5;)t.push("off");return t}},methods:{}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(14),i=n(64),a=n.n(i),s=n(58),r=n(59),c=n(9),l=(n.n(c),n(63)),u=n.n(l),d=n(61),f=(n.n(d),n(35)),v=n(62);n.n(v);o.default.use(u.a),o.default.use(f.a),n(60),new o.default({el:"#app",router:s.a,store:r.a,template:"<App/>",components:{App:a.a}})},function(t,e,n){"use strict";var o=n(41);e.a={toggleBar:function(t){(0,t.commit)(o.a)},showListPanel:function(t){(0,t.commit)(o.b)},showFontPanel:function(t){(0,t.commit)(o.c)},fzSizeAdd:function(t){(0,t.commit)(o.d)},fzSizeSub:function(t){(0,t.commit)(o.e)},switchNight:function(t){(0,t.commit)(o.f)},prevChapter:function(t){(0,t.commit)(o.g)},nextChapter:function(t){var e=t.commit,n=t.maxChapter;e(o.h,n)},chooseBook:function(t,e){(0,t.commit)(o.i,e)},showBookDetail:function(t,e){(0,t.commit)(o.j,e)},curChapter:function(t,e){(0,t.commit)(o.k,e)}}},function(t,e,n){"use strict";var o,i=n(106),a=n.n(i),s=n(41);e.a=(o={},a()(o,s.a,function(t){t.bar=!t.bar}),a()(o,s.b,function(t){t.list_panel=!t.list_panel}),a()(o,s.c,function(t){t.font_panel=!t.font_panel}),a()(o,s.d,function(t){++t.fz_size>=24&&(t.fz_size=24)}),a()(o,s.e,function(t){--t.fz_size<=14&&(t.fz_size=14)}),a()(o,s.f,function(t){t.bg_night=!t.bg_night}),a()(o,s.g,function(t){if(t.curChapter<=1)return!1;t.curChapter--}),a()(o,s.h,function(t,e){if(t.curChapter>=e)return!1;t.curChapter++}),a()(o,s.i,function(t,e){t.curBookDetailId=e}),a()(o,s.j,function(t,e){t.bookDetail=e}),a()(o,s.k,function(t,e){t.curChapter=e}),o)},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,,,function(t,e,n){function o(t){n(160)}var i=n(0)(n(84),n(192),o,null,null);t.exports=i.exports},function(t,e,n){function o(t){n(164)}var i=n(0)(n(85),n(196),o,null,null);t.exports=i.exports},function(t,e,n){function o(t){n(161)}var i=n(0)(n(86),n(193),o,null,null);t.exports=i.exports},function(t,e,n){function o(t){n(165)}var i=n(0)(n(87),n(197),o,null,null);t.exports=i.exports},function(t,e,n){function o(t){n(154)}var i=n(0)(n(88),n(186),o,null,null);t.exports=i.exports},function(t,e,n){function o(t){n(151)}var i=n(0)(n(89),n(183),o,null,null);t.exports=i.exports},function(t,e,n){function o(t){n(155)}var i=n(0)(n(90),n(187),o,null,null);t.exports=i.exports},function(t,e,n){function o(t){n(163)}var i=n(0)(n(91),n(195),o,null,null);t.exports=i.exports},function(t,e,n){function o(t){n(162)}var i=n(0)(n(92),n(194),o,null,null);t.exports=i.exports},function(t,e,n){function o(t){n(156)}var i=n(0)(n(94),n(188),o,null,null);t.exports=i.exports},function(t,e,n){function o(t){n(157)}var i=n(0)(n(95),n(189),o,null,null);t.exports=i.exports},function(t,e,n){function o(t){n(158)}var i=n(0)(n(96),n(190),o,null,null);t.exports=i.exports},function(t,e,n){function o(t){n(159)}var i=n(0)(n(97),n(191),o,null,null);t.exports=i.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"bg-cover",on:{"touchmove:prevent":function(t){},click:t.hideListPanel}})},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"loading-component"},[n("svg",{staticClass:"spinner",style:t.loadingSize,attrs:{viewBox:"0 0 66 66",xmlns:"http://www.w3.org/2000/svg"}},[n("circle",{staticClass:"path",style:t.loadingColor,attrs:{fill:"none","stroke-width":t.stroke,cx:"33",cy:"33",r:"30"}})])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"recommend"},[n("h2",{staticClass:"title"},[t._v(t._s(t.title))]),t._v(" "),n("div",{staticClass:"list"},[n("ul",{staticClass:"list-ul"},t._l(t.booklist,function(e,o){return n("li",{staticClass:"list-li"},[n("router-link",{attrs:{to:{path:"/bookdetail/"+e.id}},nativeOn:{click:function(n){t.bookDetailId(e.id)}}},[n("img",{attrs:{src:e.images,alt:""},on:{error:function(e){t.loadImage(e)}}}),t._v(" "),n("p",{staticClass:"book-name"},[t._v(t._s(e.name))]),t._v(" "),n("p",{staticClass:"book-author"},[t._v(t._s(e.author))])])],1)}))])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.font_panel,expression:"font_panel"}],staticClass:"top-nav-pannel font-container",attrs:{id:"font-container"}},[n("div",{staticClass:"child-mod"},[n("span",[t._v("字号")]),t._v(" "),n("button",{staticClass:"spe-button",attrs:{id:"large-font"},on:{click:t.add}},[t._v("\n      大\n    ")]),t._v(" "),n("button",{staticClass:"spe-button",staticStyle:{"margin-left":"10px"},attrs:{id:"small-font"},on:{click:t.sub}},[t._v("\n      小\n    ")])]),t._v(" "),n("div",{staticClass:"child-mod",attrs:{id:"bk-container"}},[n("span",[t._v("背景")]),t._v(" "),t._l(6,function(e,o){return n("div",{staticClass:"bk-container",class:{"bk-container-current":o==t.now_color}},[n("div",{staticClass:"color_btn",on:{click:function(e){t.changeColor(o)}}})])})],2)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"reader"}},[n("top-nav"),t._v(" "),n("div",{ref:"fz_size",staticClass:"read-container",attrs:{bg:t.bg_color,night:t.bg_night}},[n("h4",[t._v(t._s(t.title))]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}],staticClass:"chapterContent"},t._l(t.content,function(e,o){return n("p",{key:o},[t._v(t._s(e))])})),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}],staticClass:"btn-bar"},[n("ul",{staticClass:"btn-tab"},[n("li",{staticClass:"prev-btn",on:{click:t.prevChapter}},[t._v("上一章")]),t._v(" "),n("li",{staticClass:"next-btn",on:{click:t.nextChapter}},[t._v("下一章")])])])]),t._v(" "),n("div",{staticClass:"page-up",on:{click:function(e){t.pageUp()}}}),t._v(" "),n("div",{staticClass:"click-mask",on:{click:t.clickBar}}),t._v(" "),n("div",{staticClass:"page-down",on:{click:function(e){t.pageDown()}}}),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.font_panel,expression:"font_panel"}],staticClass:"top-nav-pannel-bk font-container"}),t._v(" "),n("font-nav"),t._v(" "),n("bottom-nav"),t._v(" "),n("cover",{class:{hide:!t.list_panel}}),t._v(" "),n("list-panel",{class:{show:t.list_panel},attrs:{bookId:t.$route.params.id}}),t._v(" "),n("loading",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}]})],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"similar",on:{click:function(e){t.toBookDetail(t.bookDetail.id)}}},[n("div",{staticClass:"similar-img"},[n("img",{attrs:{src:t.bookDetail.images,alt:""},on:{error:function(e){t.loadImage(e)}}})]),t._v(" "),n("p",[t._v(t._s(t.bookDetail.name))])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.bar,expression:"bar"}],staticClass:"top-nav"},[n("div",{staticClass:"icon-back"},[n("a",{attrs:{href:""},on:{click:t.back}})]),t._v(" "),n("div",{staticClass:"nav-title"},[t._v("返回书架")])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"rate-score"},[t._l(t.itemClasses,function(t,e){return n("span",{staticClass:"star-item",class:t})}),t._v(t._s(t.score)+"\n")],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"book-detail"},[n("loading",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}]}),t._v(" "),t.bookDetail?n("div",{staticClass:"detail-content"},[n("div",{staticClass:"detail-linear"},[n("header",{staticClass:"detail-top"},[n("a",{on:{click:t.back}},[n("i",{staticClass:"back"}),t._v(" "),n("h2",{staticClass:"detail-title"},[t._v(t._s(t.bookDetail.name))])]),t._v(" "),n("router-link",{staticClass:"home-btn",attrs:{to:"/"}},[n("i",{staticClass:"iconfont icon-home"})])],1),t._v(" "),t.loading?t._e():n("div",{staticClass:"detail-con"},[n("div",{staticClass:"detail-img"},[n("img",{attrs:{src:t.bookDetail.images,alt:""},on:{error:function(e){t.loadImage(e)}}})]),t._v(" "),n("div",{staticClass:"detail-main"},[n("h3",{staticClass:"name"},[t._v(t._s(t.bookDetail.name))]),t._v(" "),n("p",{staticClass:"author"},[t._v("作者："+t._s(t.bookDetail.author))]),t._v(" "),n("p",{staticClass:"type"},[t._v("分类："+t._s(t.bookDetail.type))]),t._v(" "),n("p",{staticClass:"word-count"},[t._v(t._s(t.bookDetail.wordcount)+"万字")]),t._v(" "),n("rate",{attrs:{score:t.bookDetail.ratings}})],1)]),t._v(" "),t.loading?t._e():n("div",{staticClass:"read-btn"},[n("div",[n("button",{on:{click:t.openBook}},[n("router-link",{attrs:{to:{path:"/reader/"+t.bookDetail.id}}},[t._v("开始阅读")])],1)]),t._v(" "),n("div",[n("button",{on:{click:t.openBook}},[n("router-link",{attrs:{to:{path:"/reader/"+t.bookDetail.id}}},[t._v("开始阅读")])],1)])])]),t._v(" "),t.loading?t._e():n("div",[n("div",{staticClass:"detail-intro"},[n("p",{class:{show5:!t.showmore},on:{click:function(e){t.showmore=!t.showmore}}},[t._v(t._s(t.bookDetail.intro))])]),t._v(" "),n("div",{staticClass:"detail-tag"},[n("h3",{staticClass:"tag"},[t._v("类别标签")]),t._v(" "),n("ul",{staticClass:"tag-btn clearfix"},[n("li",[t._v("\n            "+t._s(t.bookDetail.type)+"\n          ")]),t._v(" "),n("li",[t._v("\n            东方玄幻\n          ")])])]),t._v(" "),n("div",{staticClass:"detail-like"},[n("h3",{staticClass:"like-title"},[t._v("喜欢本书的人也喜欢")]),t._v(" "),n("ul",{staticClass:"like-list"},t._l(t.likes,function(t,e){return n("li",[n("similar",{key:e,attrs:{like:t}})],1)}))])])]):t._e()],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"category"},[n("div",{staticClass:"category-header"},[n("router-link",{attrs:{to:"/"}},[n("i"),t._v(" "),n("h2",[t._v(t._s(t.title))])])],1),t._v(" "),t.loading?t._e():n("div",{staticClass:"category-list"},[n("ul",t._l(t.categoryList,function(e){return n("li",[n("router-link",{attrs:{to:{path:"/bookdetail/"+e.id}},nativeOn:{click:function(n){t.bookDetailId(e.id)}}},[n("div",{staticClass:"book-image"},[n("img",{attrs:{src:e.images,alt:""}})]),t._v(" "),n("div",{staticClass:"book-detail"},[n("h3",[t._v(t._s(e.name))]),t._v(" "),n("p",[t._v(t._s(e.intro))]),t._v(" "),n("div",{staticClass:"author"},[n("i"),t._v(" "),n("span",[t._v(t._s(e.author))])]),t._v(" "),n("div",{staticClass:"category-r"},[n("span",[t._v(t._s(t.bookCategoryType))]),n("span",[t._v(t._s(e.serialize))]),n("span",[t._v(t._s(e.wordcount)+"万字")])])])])],1)}))]),t._v(" "),n("loading",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}]})],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"list-panel",on:{"touchmove:prevent":function(t){}}},[n("div",{staticClass:"list"},[n("div",{staticClass:"list-nav"},[n("i",{staticClass:"back",on:{click:t.hideListPanel}}),t._v(" "),n("h3",[t._v("目录")])]),t._v(" "),n("div",{staticClass:"list-content",on:{"touchmove:prevent":function(t){}}},[n("ul",t._l(t.chapterList,function(e,o){return n("li",{on:{click:function(e){t.jumpTo(o)}}},[t._v("· "+t._s(o+1)+". "+t._s(e))])}))])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("nav",{staticClass:"nav-header"},[t._m(0),t._v(" "),n("div",{staticClass:"swipe"},[n("mt-swipe",{attrs:{auto:5e3}},[n("mt-swipe-item",[n("img",{attrs:{src:"http://qidian.qpic.cn/qidian_common/349573/0514d81d3bb268cc4aaa4e25ee0966bf/",alt:""}})]),t._v(" "),n("mt-swipe-item",[n("img",{attrs:{src:"http://qidian.qpic.cn/qidian_common/349573/909abf2138cac49dfee57d96b96fd361/0",alt:""}})]),t._v(" "),n("mt-swipe-item",[n("img",{attrs:{src:"http://qidian.qpic.cn/qidian_common/349573/399190e3cdf29322a68bfda385709f73/0",alt:""}})]),t._v(" "),n("mt-swipe-item",[n("img",{attrs:{src:"http://qidian.qpic.cn/qidian_common/349573/75cc40c5b57d9411520cdcb3dddeb5cc/0",alt:""}})]),t._v(" "),n("mt-swipe-item",[n("img",{attrs:{src:"http://qidian.qpic.cn/qidian_common/349573/8c983e7b98c545e5b954fa4c527de296/0",alt:""}})])],1)],1)]),t._v(" "),n("nav",{staticClass:"home-nav"},t._l(t.type,function(e,o){return n("router-link",{key:e.num,staticClass:"guide-nav-div",attrs:{to:{path:"category",query:{type:e.num}}},on:{click:function(n){t.openBookCategory(e.num)}}},[n("i",{staticClass:"icon icon-sort"}),t._v(" "),n("h4",{staticClass:"guide-nav-h"},[t._v(t._s(e.word))])])})),t._v(" "),t.loading?t._e():n("div",[n("recommend",{attrs:{booklist:t._f("hot")(t.booklist),title:"热门小说"}}),t._v(" "),n("recommend",{attrs:{booklist:t._f("top")(t.booklist),title:"排行榜"}}),t._v(" "),n("recommend",{attrs:{booklist:t._f("free")(t.booklist),title:"限时免费"}}),t._v(" "),n("book-list",{attrs:{datalist:t._f("newbook")(t.booklist),title:"新书抢鲜"}}),t._v(" "),n("book-list",{attrs:{datalist:t._f("endbook")(t.booklist),title:"畅销完本"}}),t._v(" "),n("book-list",{attrs:{datalist:t._f("like")(t.booklist),title:"猜你喜欢"}})],1),t._v(" "),n("loading",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}]})],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("a",{staticClass:"brand",attrs:{href:"/"}},[t._v("移动书城")]),t._v(" "),n("a",{staticClass:"avatar",attrs:{href:"/"}})])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.bar,expression:"bar"}],staticClass:"bottom-nav bottom_nav"},[n("div",{staticClass:"item menu-button",attrs:{id:"menu_button"},on:{click:t.showListPanel}},[t._m(0)]),t._v(" "),n("div",{staticClass:"item",class:{current:t.font_icon_class},attrs:{id:"font-button"},on:{click:t.showFontPanel}},[t._m(1)]),t._v(" "),n("div",{staticClass:"item",attrs:{id:"night-button"},on:{click:t.swithNight}},[t._m(2),t._v(" "),t._m(3)])])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"item-warp"},[n("div",{staticClass:"icon-menu"}),t._v(" "),n("div",{staticClass:"icon-text"},[t._v("\n        目录\n      ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"item-warp"},[n("div",{staticClass:"icon-ft"}),t._v(" "),n("div",{staticClass:"icon-text"},[t._v("\n        字体\n      ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"item-warp",staticStyle:{display:"none"}},[n("div",{staticClass:"icon-day"}),t._v(" "),n("div",{staticClass:"icon-text"},[t._v("\n        白天\n      ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"item-warp"},[n("div",{staticClass:"icon-night"}),t._v(" "),n("div",{staticClass:"icon-text"},[t._v("\n        夜间\n      ")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"book-list"},[n("h2",{staticClass:"title"},[t._v(t._s(t.title))]),t._v(" "),n("ul",t._l(t.datalist,function(e){return n("li",[n("router-link",{attrs:{to:{path:"/bookdetail/"+e.id}},nativeOn:{click:function(n){t.bookDetailId(e.id)}}},[n("div",{staticClass:"book-image"},[n("img",{attrs:{src:e.images,alt:""}})]),t._v(" "),n("div",{staticClass:"book-detail"},[n("h3",[t._v(t._s(e.name))]),t._v(" "),n("p",[t._v(t._s(e.intro))]),t._v(" "),n("div",{staticClass:"author"},[n("i"),t._v(" "),n("span",[t._v(t._s(e.author))])]),t._v(" "),n("div",{staticClass:"category-r"},[n("span",[t._v(t._s(e.type))]),n("span",[t._v(t._s(e.serialize))]),n("span",[t._v(t._s(e.wordcount)+"万字")])])])])],1)}))])},staticRenderFns:[]}}]),[98]);
//# sourceMappingURL=app.f91f28313afacb8b147b.js.map