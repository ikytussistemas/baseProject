function _createForOfIteratorHelper(t,e){var r;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=_unsupportedIterableToArray(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,i=function(){};return{s:i,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,c=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return a=t.done,t},e:function(t){c=!0,o=t},f:function(){try{a||null==r.return||r.return()}finally{if(c)throw o}}}}function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(t,e):void 0}}function _arrayLikeToArray(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_setPrototypeOf(t,e)}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function _createSuper(t){var e=_isNativeReflectConstruct();return function(){var r,n=_getPrototypeOf(t);if(e){var i=_getPrototypeOf(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return _possibleConstructorReturn(this,r)}}function _possibleConstructorReturn(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?_assertThisInitialized(t):e}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function _createClass(t,e,r){return e&&_defineProperties(t.prototype,e),r&&_defineProperties(t,r),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"/VSm":function(t,e,r){"use strict";r.d(e,"a",(function(){return g}));var n=r("fXoL"),i=r("JZt4"),o=r("ofXK"),a=r("tyNb"),c=r("nk+c"),s=function(){return["0","add"]};function u(t,e){1&t&&(n.Qb(0,"a",6),n.Ob(1,"button",7),n.Pb()),2&t&&n.gc("routerLink",n.jc(1,s))}function l(t,e){1&t&&(n.Qb(0,"div",8),n.Ob(1,"loading-spinner"),n.Pb())}function b(t,e){1&t&&(n.Qb(0,"div"),n.Qb(1,"div",9),n.ec(2,2),n.Pb(),n.Qb(3,"span"),n.ec(4,3),n.Pb(),n.Pb())}var f=[[["","buttons",""]],[["","search",""]],[["","body",""]],[["","footer",""]]],d=["[buttons]","[search]","[body]","[footer]"],g=function(){var t=function(){function t(e){_classCallCheck(this,t),this.auth=e,this.entity=void 0}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}();return t.\u0275fac=function(e){return new(e||t)(n.Nb(i.a))},t.\u0275cmp=n.Hb({type:t,selectors:[["base-layout"]],inputs:{entity:"entity",titletop:"titletop"},ngContentSelectors:d,decls:9,vars:4,consts:[[1,"card"],[1,"page-top","shadow-sm"],[3,"routerLink",4,"ngIf"],[1,"toolbar-search"],["class","text-center",4,"ngIf"],[4,"ngIf"],[3,"routerLink"],["title","novo",1,"btn","btn-success","btn-xs","btn-pdr","fa","fa-plus-circle","float-right","sombra-btn"],[1,"text-center"],[1,"card-body"]],template:function(t,e){1&t&&(n.fc(f),n.Qb(0,"div",0),n.Qb(1,"div",1),n.uc(2),n.ec(3),n.tc(4,u,2,2,"a",2),n.Pb(),n.Qb(5,"div",3),n.ec(6,1),n.Pb(),n.tc(7,l,2,0,"div",4),n.tc(8,b,5,0,"div",5),n.Pb()),2&t&&(n.Bb(2),n.wc(" ",e.titletop," "),n.Bb(2),n.gc("ngIf",e.auth.getPermission("ROLE_ADM_DFIT")||e.auth.getPermission("ROLE_PROF_DFIT")),n.Bb(3),n.gc("ngIf",void 0===e.entity),n.Bb(1),n.gc("ngIf",void 0!==e.entity))},directives:[o.k,a.c,c.a],styles:[".toolbar-search[_ngcontent-%COMP%]{text-shadow:0 -1px 0 hsla(0,0%,98.8%,.904);background:#f5f5f5;box-shadow:0 8px 16px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19)!important;border:2px solid #a9a9a9;border-top-left-radius:10px;border-bottom-left-radius:10px;border-top-right-radius:10px;border-bottom-right-radius:10px}"]}),t}()},"9uT7":function(t,e,r){"use strict";r.r(e),r.d(e,"ExerciciosModule",(function(){return M}));var n=r("tyNb"),i=r("mrSG"),o=r("3Pt+"),a=r("fO6d"),c=r("X/eq"),s=r("fXoL"),u=r("o0su"),l=r("ofXK"),b=r("WIpw"),f=r("JCrf"),d=r("uSqO");function g(t,e){if(1&t&&(s.Qb(0,"div",10),s.Ob(1,"img",11),s.Pb()),2&t){var r=s.bc();s.Bb(1),s.gc("src",r.object.urlImg||"./../../../../../assets/img/prod.jpg",s.pc)}}function p(t,e){if(1&t&&(s.Qb(0,"option",36),s.uc(1),s.Pb()),2&t){var r=e.$implicit;s.gc("value",r.value),s.Bb(1),s.vc(r.desc)}}function h(t,e){if(1&t&&s.Ob(0,"progress-bar",37),2&t){var r=s.bc(2);s.gc("progress",r.uploadProgress)}}function v(t,e){if(1&t){var r=s.Rb();s.Qb(0,"input",38),s.Yb("change",(function(t){return s.oc(r),s.bc(2).onPhoto(t)})),s.Pb()}}function m(t,e){if(1&t&&(s.Qb(0,"div",30),s.Qb(1,"button",39),s.Ob(2,"span",40),s.Ob(3,"i",41),s.Pb(),s.Pb()),2&t){var r=s.bc(2);s.Bb(1),s.gc("disabled",!r.formulario.valid)}}function P(t,e){if(1&t){var r=s.Rb();s.Qb(0,"form",12),s.Yb("ngSubmit",(function(t){return s.oc(r),s.bc().onSubmit(),t.preventDefault()})),s.Qb(1,"div",13),s.Qb(2,"div",14),s.Qb(3,"div",15),s.Qb(4,"div",16),s.Qb(5,"label",17),s.uc(6,"Nome"),s.Pb(),s.Ob(7,"input",18),s.Ob(8,"valid-msg",19),s.Pb(),s.Pb(),s.Qb(9,"div",20),s.Qb(10,"div",16),s.Qb(11,"label",21),s.uc(12,"Alvo"),s.Pb(),s.Qb(13,"select",22),s.tc(14,p,2,2,"option",23),s.Pb(),s.Pb(),s.Pb(),s.Qb(15,"div",24),s.Qb(16,"div",16),s.Qb(17,"label",25),s.uc(18,"Descri\xe7\xe3o"),s.Pb(),s.Ob(19,"textarea",26),s.Ob(20,"valid-msg",19),s.Pb(),s.Pb(),s.Pb(),s.tc(21,h,1,1,"progress-bar",27),s.Ob(22,"hr",28),s.Qb(23,"div",29),s.Qb(24,"div",30),s.Qb(25,"button",31),s.tc(26,v,1,0,"input",32),s.Ob(27,"i",33),s.Pb(),s.Pb(),s.Ob(28,"div",34),s.tc(29,m,4,1,"div",35),s.Pb(),s.Pb(),s.Pb()}if(2&t){var n=s.bc();s.gc("formGroup",n.formulario),s.Bb(8),s.gc("control",n.formulario.controls.name),s.Bb(6),s.gc("ngForOf",n.alvos),s.Bb(6),s.gc("control",n.formulario.controls.description),s.Bb(1),s.gc("ngIf",n.uploadProgress),s.Bb(5),s.gc("ngIf",void 0!==n.object),s.Bb(3),s.gc("ngIf",n.auth.getPermission("ROLE_DIR")||n.auth.getPermission("ROLE_COORDPEDAG"))}}var y,k=((y=function(t){_inherits(r,t);var e=_createSuper(r);function r(t,n){var i;return _classCallCheck(this,r),(i=e.call(this,t,n,"exercicios","/dfit/exercicios")).injector=t,i.exerciciosService=n,i.alvos=c.c.Targets,i}return _createClass(r,[{key:"formConstructorById",value:function(){return Object(i.__awaiter)(this,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.formBuilder.group({id:[this.object.id],description:[this.object.description,[o.q.required,o.q.minLength(3)]],name:[this.object.name,[o.q.required,o.q.minLength(3)]],target:[this.object.target],urlImg:[this.object.urlImg]}));case 1:case"end":return t.stop()}}),t,this)})))}},{key:"formConstructorNew",value:function(){return Object(i.__awaiter)(this,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.formBuilder.group({id:[""],description:["",[o.q.required,o.q.minLength(3)]],name:["",[o.q.required,o.q.minLength(3)]],target:[""],urlImg:[""]}));case 1:case"end":return t.stop()}}),t,this)})))}},{key:"saveExercicios",value:function(){var t=this;this.service.getExercicios().subscribe((function(e){var r,n=_createForOfIteratorHelper(e);try{for(n.s();!(r=n.n()).done;){var i=r.value,o=new c.a(null,i.descricao,i.nome,i.alvoexercicio,"");t.service.createOrUpdate(o).subscribe((function(t){}))}}catch(a){n.e(a)}finally{n.f()}}))}}]),r}(a.a)).\u0275fac=function(t){return new(t||y)(s.Nb(s.r),s.Nb(u.b))},y.\u0275cmp=s.Hb({type:y,selectors:[["app-exercicios-edit"]],features:[s.yb],decls:11,vars:2,consts:[[1,"card"],[1,"page-top","sombra"],["title","voltar",1,"btn","btn-warning","btn-pdr","btn-sm","float-right","sombra-btn",3,"click"],[1,"fas","fa-arrow-circle-left"],[1,"card-body"],[1,"col-xs-12","col-md-12"],[1,"row","justify-content-center"],["class","text-center col-xs-12 col-md-3",4,"ngIf"],[1,"col-xs-12","col-md-9"],[3,"formGroup","ngSubmit",4,"ngIf"],[1,"text-center","col-xs-12","col-md-3"],[1,"img-fluid","img-thumbnail",2,"width","150px",3,"src"],[3,"formGroup","ngSubmit"],[1,"col-xs-12"],[1,"row"],[1,"col-sm-12","col-md-6"],[1,"form-group"],["for","name"],["id","name","type","text","formControlName","name","IkUpCase","",1,"form-control"],[3,"control"],[1,"col-xs-12","col-md-6"],["for","target",1,"control-label"],["id","status","formControlName","target",1,"form-control"],[3,"value",4,"ngFor","ngForOf"],[1,"col-sm-12","col-md-12"],["for","description"],["id","description","type","text","formControlName","description","rows","8","ikUpCase","",1,"form-control"],[3,"progress",4,"ngIf"],[2,"margin","2px"],[1,"row","toolbar"],[1,"col-sm-1",2,"padding","2px"],[1,"fileUpload","btn","btn-outline-primary","btn-block","border-l","toolbar-btn"],["type","file","class","upload","accept","image/*",3,"change",4,"ngIf"],[1,"fas","fa-cloud-upload-alt"],[1,"col-sm-10",2,"padding","2px"],["class","col-sm-1","style","padding: 2px;",4,"ngIf"],[3,"value"],[3,"progress"],["type","file","accept","image/*",1,"upload",3,"change"],["type","submit",1,"btn","btn-outline-success","btn-block","border-r","toolbar-btn",3,"disabled"],[1,"d-none","d-md-inline"],[1,"fas","fa-save"]],template:function(t,e){1&t&&(s.Qb(0,"div",0),s.Qb(1,"div",1),s.uc(2," Cadastro de Exercicio "),s.Qb(3,"button",2),s.Yb("click",(function(){return e.return()})),s.Ob(4,"i",3),s.Pb(),s.Pb(),s.Qb(5,"div",4),s.Qb(6,"div",5),s.Qb(7,"div",6),s.tc(8,g,2,1,"div",7),s.Qb(9,"div",8),s.tc(10,P,30,7,"form",9),s.Pb(),s.Pb(),s.Pb(),s.Pb(),s.Pb()),2&t&&(s.Bb(8),s.gc("ngIf",void 0!==e.object),s.Bb(2),s.gc("ngIf",void 0!==e.formulario))},directives:[l.k,o.s,o.l,o.g,o.b,o.k,o.e,b.a,o.p,l.j,f.a,o.n,o.r,d.a],styles:[""]}),y),O=r("/VSm"),w=r("SROd");function j(t,e){if(1&t&&(s.Qb(0,"option",16),s.uc(1),s.Pb()),2&t){var r=e.$implicit;s.gc("ngValue",r),s.Bb(1),s.vc(r)}}function _(t,e){if(1&t&&(s.Qb(0,"option",16),s.uc(1),s.Pb()),2&t){var r=e.$implicit;s.gc("ngValue",r.value),s.Bb(1),s.vc(r.desc)}}var Q=function(t){return[t,"edit"]};function I(t,e){if(1&t){var r=s.Rb();s.Qb(0,"tr"),s.Qb(1,"td",20),s.uc(2),s.Pb(),s.Qb(3,"td",21),s.uc(4),s.Pb(),s.Qb(5,"td"),s.Qb(6,"a",22),s.Ob(7,"button",23),s.Pb(),s.Qb(8,"a",24),s.Qb(9,"button",25),s.Yb("click",(function(){s.oc(r);var t=e.$implicit;return s.bc(2).openModalDelete(t.id,"o Item: "+t.name)})),s.Pb(),s.Pb(),s.Pb(),s.Pb()}if(2&t){var n=e.$implicit;s.Bb(2),s.vc(n.name),s.Bb(2),s.vc(n.target),s.Bb(2),s.gc("routerLink",s.kc(3,Q,n.id))}}function C(t,e){1&t&&(s.Qb(0,"td",26),s.uc(1," Nenhum registro encontrado"),s.Pb())}function x(t,e){if(1&t&&(s.Qb(0,"table",17),s.Qb(1,"thead"),s.Qb(2,"tr"),s.Qb(3,"th"),s.uc(4,"Nome"),s.Pb(),s.Qb(5,"th"),s.uc(6,"Alvo"),s.Pb(),s.Qb(7,"th"),s.uc(8,"Op\xe7\xf5es"),s.Pb(),s.Pb(),s.Pb(),s.Qb(9,"tbody"),s.tc(10,I,10,5,"tr",18),s.Qb(11,"tr"),s.tc(12,C,2,0,"td",19),s.Pb(),s.Pb(),s.Pb()),2&t){var r=s.bc();s.Bb(10),s.gc("ngForOf",r.list),s.Bb(2),s.gc("ngIf",r.list.length<1)}}var R,B,E,S=((R=function(t){_inherits(r,t);var e=_createSuper(r);function r(t,n){var i;return _classCallCheck(this,r),(i=e.call(this,t,n)).injector=t,i.exerciciosService=n,i.targets=c.c.Targets,i}return _createClass(r,[{key:"transformObjects",value:function(){return Object(i.__awaiter)(this,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.list);case 1:case"end":return t.stop()}}),t,this)})))}}]),r}(a.b)).\u0275fac=function(t){return new(t||R)(s.Nb(s.r),s.Nb(u.b))},R.\u0275cmp=s.Hb({type:R,selectors:[["app-exercicios-list"]],features:[s.yb],decls:19,vars:10,consts:[["titletop","Exercicios Cadastrados","entity","list"],["search",""],[1,"col-md-12"],[1,"row"],[1,"col-sm-3","toolbar-item"],["id","qtd",1,"border-l",3,"ngModel","ngModelChange","change"],[3,"ngValue",4,"ngFor","ngForOf"],[1,"col-sm-3","toobar-item"],["type","text","id","exercicio","placeholder","Exercicio","title","exercicio",1,"text-center",3,"ngModel","ngModelChange","keyup"],["name",""],["id","target",1,"border-l",3,"ngModel","ngModelChange","change"],["target",""],["body",""],["class","table table-striped table-bordered table-sm",4,"ngIf"],["footer",""],[3,"count","page","totalPages","totalElements","pageData"],[3,"ngValue"],[1,"table","table-striped","table-bordered","table-sm"],[4,"ngFor","ngForOf"],["colspan","4","style","background-color: red; color: white; font-weight: bold;",4,"ngIf"],["data-label","Nome:"],["data-label","Alvo:"],[1,"componenteform",3,"routerLink"],["title","Detalhes","data-toggle","tooltip","data-placement","bottom",1,"btn","btn-outline-primary","btn-pdr","fa","fa-edit","sombra-btn"],[1,"componenteform"],["type","button","title","Deletar","data-placement","bottom",1,"btn","btn-outline-danger","btn-pdr","fa","fa-trash","sombra-btn",3,"click"],["colspan","4",2,"background-color","red","color","white","font-weight","bold"]],template:function(t,e){if(1&t){var r=s.Rb();s.Qb(0,"base-layout",0),s.Qb(1,"div",1),s.Qb(2,"div",2),s.Qb(3,"div",3),s.Qb(4,"div",4),s.Qb(5,"select",5),s.Yb("ngModelChange",(function(t){return e.count=t}))("change",(function(){return e.getList()})),s.tc(6,j,2,2,"option",6),s.Pb(),s.Pb(),s.Ob(7,"div",7),s.Qb(8,"div",4),s.Qb(9,"input",8,9),s.Yb("ngModelChange",(function(t){return e.filter.name=t}))("keyup",(function(){s.oc(r);var t=s.nc(10);return e.filtrar(t.value)})),s.Pb(),s.Pb(),s.Qb(11,"div",4),s.Qb(12,"select",10,11),s.Yb("ngModelChange",(function(t){return e.filter.target=t}))("change",(function(){s.oc(r);var t=s.nc(13);return e.filtrar(t.value)})),s.tc(14,_,2,2,"option",6),s.Pb(),s.Pb(),s.Pb(),s.Pb(),s.Pb(),s.Qb(15,"div",12),s.tc(16,x,13,2,"table",13),s.Pb(),s.Qb(17,"div",14),s.Qb(18,"ikPagination",15),s.Yb("pageData",(function(t){return e.pagination(t)})),s.Pb(),s.Pb(),s.Pb()}2&t&&(s.Bb(5),s.gc("ngModel",e.count),s.Bb(1),s.gc("ngForOf",e.counts),s.Bb(3),s.gc("ngModel",e.filter.name),s.Bb(3),s.gc("ngModel",e.filter.target),s.Bb(2),s.gc("ngForOf",e.targets),s.Bb(2),s.gc("ngIf",void 0!==e.list),s.Bb(2),s.gc("count",e.count)("page",e.page)("totalPages",e.totalPages)("totalElements",e.totalElements))},directives:[O.a,o.p,o.k,o.m,l.j,o.b,l.k,w.a,o.n,o.r,n.c],styles:[""]}),R),L=r("vMv0"),F=[{path:"",component:S},{path:":id/add",component:k,canActivate:[L.a],data:{roles:["ROLE_ADM_DFIT","ROLE_PROF_DFIT"]}},{path:":id/edit",component:k,canActivate:[L.a],data:{roles:["ROLE_ADM_DFIT","ROLE_PROF_DFIT"]}}],D=((B=function t(){_classCallCheck(this,t)}).\u0275mod=s.Lb({type:B}),B.\u0275inj=s.Kb({factory:function(t){return new(t||B)},imports:[[n.d.forChild(F)],n.d]}),B),A=r("WSrY"),M=((E=function t(){_classCallCheck(this,t)}).\u0275mod=s.Lb({type:E}),E.\u0275inj=s.Kb({factory:function(t){return new(t||E)},imports:[[A.a,D]]}),E)},SROd:function(t,e,r){"use strict";r.d(e,"a",(function(){return g}));var n=r("fXoL"),i=r("ofXK");function o(t,e){if(1&t){var r=n.Rb();n.Qb(0,"li",10),n.Qb(1,"a",11),n.Yb("click",(function(t){return n.oc(r),n.bc(2).setPage(0,t)})),n.Ob(2,"span",12),n.Pb(),n.Pb()}}function a(t,e){if(1&t){var r=n.Rb();n.Qb(0,"li",13),n.Qb(1,"a",14),n.Yb("click",(function(t){return n.oc(r),n.bc(2).setPreviousPage(t)})),n.Ob(2,"span",15),n.Pb(),n.Pb()}}var c=function(t){return{active:t}};function s(t,e){if(1&t){var r=n.Rb();n.Qb(0,"li",16),n.Qb(1,"a",11),n.Yb("click",(function(t){n.oc(r);var i=e.$implicit;return n.bc(2).setPage(i-1,t)})),n.uc(2),n.Pb(),n.Pb()}if(2&t){var i=e.$implicit,o=n.bc(2);n.gc("ngClass",n.kc(2,c,i-1===o.page)),n.Bb(2),n.wc(" ",i," ")}}function u(t,e){1&t&&(n.Qb(0,"li",17),n.Qb(1,"a",18),n.uc(2," ... "),n.Pb(),n.Pb())}function l(t,e){if(1&t){var r=n.Rb();n.Qb(0,"li",19),n.Qb(1,"a",11),n.Yb("click",(function(t){n.oc(r);var e=n.bc(2);return e.setPage(e.totalPages-1,t)})),n.uc(2),n.Pb(),n.Pb()}if(2&t){var i=n.bc(2);n.Bb(2),n.wc(" ",i.totalPages," ")}}function b(t,e){if(1&t){var r=n.Rb();n.Qb(0,"li",20),n.Qb(1,"a",14),n.Yb("click",(function(t){return n.oc(r),n.bc(2).setNextPage(t)})),n.Ob(2,"span",21),n.Pb(),n.Pb()}}function f(t,e){if(1&t){var r=n.Rb();n.Qb(0,"li",22),n.Qb(1,"a",11),n.Yb("click",(function(t){n.oc(r);var e=n.bc(2);return e.setPage(e.totalPages-1,t)})),n.Ob(2,"span",23),n.Pb(),n.Pb()}}function d(t,e){if(1&t&&(n.Qb(0,"div",1),n.Qb(1,"ul",2),n.tc(2,o,3,0,"li",3),n.tc(3,a,3,0,"li",4),n.tc(4,s,3,4,"li",5),n.tc(5,u,3,0,"li",6),n.tc(6,l,3,1,"li",7),n.tc(7,b,3,0,"li",8),n.tc(8,f,3,0,"li",9),n.Pb(),n.Qb(9,"p"),n.uc(10,"Total de registros: "),n.Qb(11,"strong"),n.uc(12),n.Pb(),n.uc(13,", p\xe1g. "),n.Qb(14,"strong"),n.uc(15),n.Pb(),n.uc(16," de "),n.Qb(17,"strong"),n.uc(18),n.Pb(),n.uc(19,"."),n.Pb(),n.Pb()),2&t){var r=n.bc();n.Bb(2),n.gc("ngIf",r.page+1!=1),n.Bb(1),n.gc("ngIf",r.page+1!=1),n.Bb(1),n.gc("ngForOf",r.pages),n.Bb(1),n.gc("ngIf",r.lastItem!=r.totalPages&&r.lastItem+1!=r.totalPages),n.Bb(1),n.gc("ngIf",r.lastItem!=r.totalPages),n.Bb(1),n.gc("ngIf",r.page+1!=r.lastItem),n.Bb(1),n.gc("ngIf",r.page+1!=r.lastItem),n.Bb(4),n.vc(r.totalElements),n.Bb(3),n.vc(r.page+1),n.Bb(3),n.vc(r.totalPages)}}var g=function(){var t=function(){function t(){_classCallCheck(this,t),this.pageData=new n.n,this.adjacente=2}return _createClass(t,[{key:"ngOnInit",value:function(){this.page=this.page||0,this.count=this.count||10,this.geralinks()}},{key:"setNextPage",value:function(t){t.preventDefault(),this.page+1<this.pages.length&&(this.page=this.page+1,this.paginar(this.page,this.count))}},{key:"setPreviousPage",value:function(t){t.preventDefault(),this.page>0&&(this.page=this.page-1,this.paginar(this.page,this.count))}},{key:"setPage",value:function(t,e){e.preventDefault(),this.page=t,this.paginar(this.page,this.count)}},{key:"paginar",value:function(t,e){this.pageData.emit({page:t,count:e}),this.geralinks()}},{key:"geralinks",value:function(){this.pages=[];for(var t=this.page+1+this.adjacente>=this.totalPages?this.totalPages:this.page+1+this.adjacente,e=this.page+1-this.adjacente<=0||this.page-this.adjacente<=0?1:this.page+1-this.adjacente;e<=t;e++)this.pages.push(e);this.lastItem=t}}]),t}();return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Hb({type:t,selectors:[["ikPagination"]],inputs:{count:"count",page:"page",totalPages:"totalPages",totalElements:"totalElements"},outputs:{pageData:"pageData"},decls:1,vars:1,consts:[["class","box-footer clearfix",4,"ngIf"],[1,"box-footer","clearfix"],[1,"pagination","justify-content-center"],["class","page-item","title","primeiro",4,"ngIf"],["class","page-item d-none d-sm-block","title","anterior",4,"ngIf"],["class","page-item",3,"ngClass",4,"ngFor","ngForOf"],["class","page-item disabled",4,"ngIf"],["class","page-item",4,"ngIf"],["class","page-item d-none d-sm-block","title","pr\xf3ximo",4,"ngIf"],["class","page-item","title","\xfaltimo",4,"ngIf"],["title","primeiro",1,"page-item"],["href","#",1,"page-link",3,"click"],["aria-hidden","true",1,"fa","fa-fast-backward"],["title","anterior",1,"page-item","d-none","d-sm-block"],["href","",1,"page-link",3,"click"],["aria-hidden","true",1,"fa","fa-backward"],[1,"page-item",3,"ngClass"],[1,"page-item","disabled"],["href","#",1,"page-link"],[1,"page-item"],["title","pr\xf3ximo",1,"page-item","d-none","d-sm-block"],["aria-hidden","true",1,"fa","fa-forward"],["title","\xfaltimo",1,"page-item"],["aria-hidden","true",1,"fa","fa-fast-forward"]],template:function(t,e){1&t&&n.tc(0,d,20,10,"div",0),2&t&&n.gc("ngIf",null!=e.pages)},directives:[i.k,i.j,i.i],styles:[".page-item.active[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%]{background-color:#07889b!important;border-color:#07889b!important;border-radius:5px}.page-link[_ngcontent-%COMP%]{color:#07889b}"]}),t}()},fO6d:function(t,e,r){"use strict";var n=r("tjtH");r.d(e,"a",(function(){return n.a}));var i=r("nWdV");r.d(e,"b",(function(){return i.a}))},nWdV:function(t,e,r){"use strict";r.d(e,"a",(function(){return f}));var n=r("mrSG"),i=r("IzEk"),o=r("gb6z"),a=r("e5me"),c=r("JZt4"),s=r("T8WP"),u=r("SvUs"),l=r("72KF"),b=r("fXoL"),f=function(){var t=function(){function t(e,r){_classCallCheck(this,t),this.injector=e,this.service=r,this.filter=new l.a,this.page=0,this.count=5,this.counts=[2,5,10,20,50,100],this.search="",this.auth=this.injector.get(c.a),this.confirm=this.injector.get(o.a),this.erroService=this.injector.get(a.c),this.load=this.injector.get(s.a),this.toast=this.injector.get(u.a)}return _createClass(t,[{key:"ngOnInit",value:function(){this.getList(),this.listFactory()}},{key:"getList",value:function(){var t=this;this.service.findAllPage(this.page,this.count,this.filter).pipe(Object(i.a)(1)).subscribe((function(e){t.list=e.data.content,t.transformObjects().then((function(e){t.list=e})),t.totalPages=new Array(e.data.totalPages).length,t.totalElements=e.data.totalElements}),(function(e){t.toast.danger("Falha ao listar!! (".concat(t.handleError(e),")"))}))}},{key:"openModalDelete",value:function(t,e){var r=this;this.id=t,this.confirm.show({message:"Deseja deletar ".concat(e),siFn:function(){r.deletar()}})}},{key:"deletar",value:function(){var t=this;this.load.show({}),this.service.delete(this.id).subscribe((function(e){t.toast.success("Exclus\xe3o realizada com sucesso!"),t.getList(),t.load.dismiss()}),(function(e){t.toast.danger("Falha ao deletar!! (".concat(t.handleError(e),")")),t.load.dismiss()}))}},{key:"listFactory",value:function(){}},{key:"pagination",value:function(t){this.page=t.page,this.count=t.count,this.getList()}},{key:"transformObjects",value:function(){return Object(n.__awaiter)(this,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.list);case 1:case"end":return t.stop()}}),t,this)})))}},{key:"relatorio",value:function(t){this.relatorioService[t]().then((function(t){var e=window.URL.createObjectURL(t);window.open(e)}))}},{key:"filtrar",value:function(t){var e=this;(t.length>2||t.length<1)&&setTimeout((function(){e.getList(),e.pagination({page:0,count:e.count})}),100)}},{key:"handleError",value:function(t){return this.erroService.handler(t)}}]),t}();return t.\u0275fac=function(t){b.Xb()},t.\u0275dir=b.Ib({type:t}),t}()},tjtH:function(t,e,r){"use strict";r.d(e,"a",(function(){return v}));var n=r("mrSG"),i=r("tyNb"),o=r("fXoL"),a=r("3Pt+"),c=r("IzEk"),s=r("lJxs"),u=r("eIep"),l=r("EY2u"),b=r("72KF"),f=r("e5me"),d=r("JZt4"),g=r("T8WP"),p=r("SvUs"),h=r("d6RJ"),v=function(){var t=function(){function t(e,r,n,c){_classCallCheck(this,t),this.injector=e,this.service=r,this.urlImg=n,this.urlList=c,this.filter=new b.a,this.validateMsg="Erro de Valida\xe7\xe3o",this.uploadProgress=0,this.auth=this.injector.get(d.a),this.cd=this.injector.get(o.h),this.cepService=this.injector.get(f.b),this.confirm=this.injector.get(h.a),this.erroService=this.injector.get(f.c),this.formBuilder=this.injector.get(a.c),this.imageService=this.injector.get(f.d),this.load=this.injector.get(g.a),this.route=this.injector.get(i.a),this.router=this.injector.get(i.b),this.toast=this.injector.get(p.a)}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this;this.route.params.pipe(Object(c.a)(1)).subscribe((function(e){"0"===e.id?t.newRecord():(t.id=e.id,t.findById(t.id))})),this.listFactory()}},{key:"findById",value:function(t){var e=this;this.service.findById(t).pipe(Object(c.a)(1)).subscribe((function(t){e.object=t.data,e.guardListAttrib(),e.object.hasOwnProperty("endereco")&&e.cepService.getCidadeNome(e.object.endereco.cidade).subscribe((function(t){return e.cidades=t})),e.formConstructorById().then((function(t){e.formulario=t,e.chageCitys()}))}),(function(t){e.toast.danger("Falha ao localizar documento!!: (".concat(e.handleError(t),")"))}))}},{key:"newRecord",value:function(){var t=this;this.formConstructorNew().then((function(e){t.formulario=e,t.chageCitys()}))}},{key:"onSubmit",value:function(){var t=this;this.object=this.formulario.value,this.returnListAttrib(),this.load.show({message:"Aguarde valida\xe7\xe3o..."}),this.validateData().then((function(e){if(t.load.dismiss(),e)if(t.object.id)if(t.filePhoto){t.load.show({message:"Aguarde upload..."});var r=t.imageService.uploadImg(t.urlImg,t.filePhoto,t.object.id);r.percentageChanges().subscribe((function(e){t.uploadProgress=Math.round(e),t.cd.detectChanges()})),r.then((function(e){e.ref.getDownloadURL().then((function(e){t.object.urlImg=e,t.edit(t.object)}))}))}else t.load.show({}),t.edit(t.object);else t.service.createOrUpdate(t.object).subscribe((function(e){t.toast.success("Registro efetuado com sucesso!"),t.resetForm()}),(function(e){console.log(e),t.toast.danger("Erro ao registrar ".concat(t.handleError(e)))}));else t.toast.danger(t.validateMsg)}))}},{key:"edit",value:function(t){var e=this;this.service.createOrUpdate(t).pipe(Object(c.a)(1)).subscribe((function(t){e.load.dismiss(),e.toast.success("Edi\xe7\xe3o realizada com sucesso!"),e.filePhoto=void 0,e.uploadProgress=0,e.cd.detectChanges()}),(function(t){e.toast.danger("Erro ao editar: (".concat(e.handleError(t),")"))}))}},{key:"onPhoto",value:function(t){var e=this,r=this.load;r.show({}),this.imageService.processImage(t.target.files).pipe(Object(c.a)(1)).subscribe((function(t){e.filePhoto=t.data}),(function(t){}),(function(){r.dismiss()}))}},{key:"guardListAttrib",value:function(){return Object(n.__awaiter)(this,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))}},{key:"returnListAttrib",value:function(){return Object(n.__awaiter)(this,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))}},{key:"validateData",value:function(){return Object(n.__awaiter)(this,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",!0);case 1:case"end":return t.stop()}}),t)})))}},{key:"formConstructorById",value:function(){return Object(n.__awaiter)(this,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.formBuilder.group({}));case 1:case"end":return t.stop()}}),t,this)})))}},{key:"formConstructorNew",value:function(){return Object(n.__awaiter)(this,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.formBuilder.group({}));case 1:case"end":return t.stop()}}),t,this)})))}},{key:"resetForm",value:function(){this.formulario.reset()}},{key:"chageCitys",value:function(){var t=this;void 0!==this.object&&this.object.hasOwnProperty("endereco")&&this.formulario.get("endereco.estado").valueChanges.pipe(Object(s.a)((function(e){return t.estados.filter((function(t){return t.sigla===e}))})),Object(s.a)((function(t){return t&&t.length>0?t[0].id:Object(l.b)()})),Object(u.a)((function(e){return t.cepService.getCidades(e)}))).subscribe((function(e){return t.cidades=e}))}},{key:"consultaCEP",value:function(){var t=this,e=this.formulario.get("endereco.cep").value;null!=e&&""!==e&&this.cepService.consultaCEP(e).pipe(Object(c.a)(1)).subscribe((function(e){t.populaDadosForm(e)}),(function(e){return console.log(t.handleError(e))}))}},{key:"populaDadosForm",value:function(t){this.formulario.patchValue({endereco:{cep:t.cep,logradouro:t.logradouro,complemento:t.complemento,bairro:t.bairro,cidade:t.localidade,estado:t.uf}})}},{key:"getCidades",value:function(){var t=this;this.cepService.getCidades(6).subscribe((function(e){t.cidades=e}))}},{key:"listFactory",value:function(){}},{key:"handleError",value:function(t){return this.erroService.handler(t)}},{key:"return",value:function(){this.router.navigate([this.urlList])}}]),t}();return t.\u0275fac=function(t){o.Xb()},t.\u0275dir=o.Ib({type:t}),t}()}}]);