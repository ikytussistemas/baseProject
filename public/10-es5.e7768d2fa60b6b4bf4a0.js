function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var o=0;o<e.length;o++){var r=e[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function _createClass(t,e,o){return e&&_defineProperties(t.prototype,e),o&&_defineProperties(t,o),t}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_setPrototypeOf(t,e)}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function _createSuper(t){var e=_isNativeReflectConstruct();return function(){var o,r=_getPrototypeOf(t);if(e){var n=_getPrototypeOf(this).constructor;o=Reflect.construct(r,arguments,n)}else o=r.apply(this,arguments);return _possibleConstructorReturn(this,o)}}function _possibleConstructorReturn(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?_assertThisInitialized(t):e}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"1uza":function(t,e,o){"use strict";o.r(e),o.d(e,"AlunosModule",(function(){return U}));var r=o("tyNb"),n=o("mrSG"),a=o("3Pt+"),i=o("fO6d"),c=o("IzEk"),b=o("fXoL"),s=o("o0su"),l=o("e5me"),u=o("ofXK"),d=o("TYsM"),f=o("9Epf"),m=o("M+B4"),p=o("WIpw"),g=o("J8Zq"),v=o("uSqO");function h(t,e){if(1&t&&(b.Qb(0,"div",13),b.Ob(1,"img",14),b.Pb()),2&t){var o=b.bc();b.Bb(1),b.gc("src",o.object.urlImg||"./../../../../../assets/img/prod.jpg",b.pc)}}function P(t,e){if(1&t&&b.Ob(0,"progress-bar",60),2&t){var o=b.bc(2);b.gc("progress",o.uploadProgress)}}function Q(t,e){if(1&t){var o=b.Rb();b.Qb(0,"input",61),b.Yb("change",(function(t){return b.oc(o),b.bc(2).onPhoto(t)})),b.Pb()}}function O(t,e){if(1&t){var o=b.Rb();b.Qb(0,"button",62),b.Yb("click",(function(){return b.oc(o),b.bc(2).createUser()})),b.Ob(1,"i",63),b.Pb()}}function y(t,e){1&t&&(b.Qb(0,"button",64),b.Ob(1,"span",55),b.Ob(2,"i",63),b.Pb())}function _(t,e){if(1&t&&(b.Qb(0,"div",46),b.Qb(1,"button",65),b.Ob(2,"span",55),b.Ob(3,"i",66),b.Pb(),b.Pb()),2&t){var o=b.bc(2);b.Bb(1),b.gc("disabled",!o.formulario.valid)}}function k(t,e){if(1&t){var o=b.Rb();b.Qb(0,"form",15),b.Yb("ngSubmit",(function(t){return b.oc(o),b.bc().onSubmit(),t.preventDefault()})),b.Qb(1,"div",16),b.Qb(2,"div",17),b.Qb(3,"div",18),b.Qb(4,"div",19),b.Qb(5,"label",20),b.uc(6,"Nome"),b.Pb(),b.Ob(7,"input",21),b.Ob(8,"valid-msg",22),b.Pb(),b.Pb(),b.Qb(9,"div",23),b.Qb(10,"div",19),b.Qb(11,"label",24),b.uc(12,"Dt_nasc"),b.Pb(),b.Ob(13,"input",25),b.Ob(14,"valid-msg",22),b.Pb(),b.Pb(),b.Qb(15,"div",26),b.Qb(16,"div",19),b.Qb(17,"label",27),b.uc(18,"E-mail"),b.Pb(),b.Ob(19,"input",28),b.Ob(20,"valid-msg",22),b.Pb(),b.Pb(),b.Qb(21,"div",29),b.Qb(22,"div",19),b.Qb(23,"label",30),b.uc(24,"Celular"),b.Pb(),b.Ob(25,"input",31),b.Ob(26,"valid-msg",22),b.Pb(),b.Pb(),b.Qb(27,"div",29),b.Qb(28,"div",19),b.Qb(29,"label",32),b.uc(30,"CPF"),b.Pb(),b.Ob(31,"input",33),b.Ob(32,"valid-msg",22),b.Pb(),b.Pb(),b.Qb(33,"div",23),b.Qb(34,"div",19),b.Qb(35,"label",34),b.uc(36,"Anamnese"),b.Pb(),b.Ob(37,"textarea",35),b.Pb(),b.Pb(),b.Qb(38,"div",23),b.Qb(39,"div",19),b.Qb(40,"label",36),b.uc(41,"Objetivo"),b.Pb(),b.Ob(42,"textarea",37),b.Pb(),b.Pb(),b.Qb(43,"div",23),b.Qb(44,"div",19),b.Qb(45,"label",38),b.uc(46,"Ergometria"),b.Pb(),b.Ob(47,"textarea",39),b.Pb(),b.Pb(),b.Qb(48,"div",40),b.Qb(49,"div",19),b.Qb(50,"label",41),b.uc(51,"Observa\xe7\xe3o"),b.Pb(),b.Ob(52,"textarea",42),b.Pb(),b.Pb(),b.Pb(),b.tc(53,P,1,1,"progress-bar",43),b.Ob(54,"hr",44),b.Qb(55,"div",45),b.Qb(56,"div",46),b.Qb(57,"button",47),b.tc(58,Q,1,0,"input",48),b.Ob(59,"i",49),b.Pb(),b.Pb(),b.Ob(60,"div",50),b.Ob(61,"div",51),b.Qb(62,"div",46),b.tc(63,O,2,0,"button",52),b.tc(64,y,3,0,"button",53),b.Pb(),b.Ob(65,"div",50),b.Qb(66,"div",46),b.Qb(67,"button",54),b.Ob(68,"span",55),b.Ob(69,"i",56),b.Pb(),b.Pb(),b.Qb(70,"div",46),b.Qb(71,"button",57),b.Ob(72,"span",55),b.Ob(73,"i",58),b.Pb(),b.Pb(),b.Ob(74,"div",50),b.tc(75,_,4,1,"div",59),b.Pb(),b.Pb(),b.Pb()}if(2&t){var r=b.bc();b.gc("formGroup",r.formulario),b.Bb(8),b.gc("control",r.formulario.controls.name),b.Bb(6),b.gc("control",r.formulario.controls.datanascimento),b.Bb(6),b.gc("control",r.formulario.controls.email),b.Bb(6),b.gc("control",r.formulario.controls.celular),b.Bb(6),b.gc("control",r.formulario.controls.cpf),b.Bb(21),b.gc("ngIf",r.uploadProgress),b.Bb(5),b.gc("ngIf",void 0!==r.object),b.Bb(5),b.gc("ngIf",null===r.usuario),b.Bb(1),b.gc("ngIf",null!==r.usuario),b.Bb(11),b.gc("ngIf",r.auth.getPermission("ROLE_ADM_DFIT")||r.auth.getPermission("ROLE_PROF_DFIT"))}}var w,j=((w=function(t){_inherits(o,t);var e=_createSuper(o);function o(t,r,n,a){var i;return _classCallCheck(this,o),(i=e.call(this,t,r,"alunos","/dfit/alunos")).injector=t,i.personService=r,i.tools=n,i.userService=a,i.avaliacoes=[],i.fichas=[],i.treinos=[],i}return _createClass(o,[{key:"formConstructorById",value:function(){return Object(n.__awaiter)(this,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(this.findUser(),this.formBuilder.group({id:[this.object.id],anamnese:[this.object.anamnese],celular:[this.object.celular],cpf:[this.object.cpf],datanascimento:[new Date(this.object.datanascimento).toISOString().substr(0,10)],email:[this.object.email,[a.q.required,a.q.email]],ergometria:[this.object.ergometria],name:[this.object.name,[a.q.required,a.q.minLength(3)]],objetivo:[this.object.objetivo],obs:[this.object.obs],tipo:[this.object.tipo],urlImg:[this.object.urlImg]})));case 1:case"end":return t.stop()}}),t,this)})))}},{key:"guardListAttrib",value:function(){return Object(n.__awaiter)(this,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.fichas=this.object.fichas,this.avaliacoes=this.object.avaliacoes,this.fichas.sort((function(t,e){return t.status>e.status?-1:t.status<e.status?1:0})),this.avaliacoes.sort((function(t,e){return t.dataavaliacao>e.dataavaliacao?1:t.dataavaliacao<e.dataavaliacao?-1:0}));case 1:case"end":return t.stop()}}),t,this)})))}},{key:"returnListAttrib",value:function(){return Object(n.__awaiter)(this,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.object.fichas=this.fichas,this.object.avaliacoes=this.avaliacoes;case 1:case"end":return t.stop()}}),t,this)})))}},{key:"formConstructorNew",value:function(){return Object(n.__awaiter)(this,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.formBuilder.group({id:[""],anamnese:[""],celular:[""],cpf:[""],datanascimento:[""],email:[this.tools.getFakeMail(),[a.q.required,a.q.email]],ergometria:[""],name:["",[a.q.required,a.q.minLength(3)]],objetivo:[""],obs:[""],tipo:["A"],urlImg:[""]}));case 1:case"end":return t.stop()}}),t,this)})))}},{key:"createUser",value:function(){var t=this;this.service.createUser(this.object).pipe(Object(c.a)(1)).subscribe((function(e){t.findUser()}))}},{key:"findUser",value:function(){var t=this;this.userService.findById(this.object.id).subscribe((function(e){t.usuario=e.data}),(function(e){t.usuario=null}))}}]),o}(i.a)).\u0275fac=function(t){return new(t||w)(b.Nb(b.r),b.Nb(s.c),b.Nb(l.e),b.Nb(s.d))},w.\u0275cmp=b.Hb({type:w,selectors:[["app-alunos-edit"]],features:[b.yb],decls:14,vars:5,consts:[[1,"card"],[1,"page-top","sombra"],["title","voltar",1,"btn","btn-warning","btn-pdr","btn-sm","float-right","sombra-btn",3,"click"],[1,"fas","fa-arrow-circle-left"],[1,"card-body"],[1,"col-xs-12","col-md-12"],[1,"row","justify-content-center"],["class","text-center col-xs-12 col-md-3",4,"ngIf"],[1,"col-xs-12","col-md-9"],[3,"formGroup","ngSubmit",4,"ngIf"],[3,"records","saveFn"],[3,"avaliacoes","saveFn"],[3,"user"],[1,"text-center","col-xs-12","col-md-3"],[1,"img-fluid","img-thumbnail",2,"width","150px",3,"src"],[3,"formGroup","ngSubmit"],[1,"col-xs-12"],[1,"row"],[1,"col-sm-12","col-md-8"],[1,"form-group"],["for","name"],["id","name","type","text","autofocus","","formControlName","name","IkUpCase","",1,"form-control"],[3,"control"],[1,"col-sm-12","col-md-4"],["for","dataNascimento"],["id","dataNascimento","type","date","formControlName","datanascimento",1,"form-control"],[1,"col-sm-12","col-md-6"],["for","email"],["id","email","type","email","formControlName","email",1,"form-control"],[1,"col-sm-12","col-md-3"],["for","celular"],["id","celular","type","text","formControlName","celular","IkMask","(99)99999-9999",1,"form-control"],["for","cpf"],["id","cpf","type","text","formControlName","cpf","IkMask","999.999.999-99",1,"form-control"],["for","anamnese"],["id","anamnese","rows","3","formControlName","anamnese",1,"form-control"],["for","objetivo"],["id","objetivo","rows","3","formControlName","objetivo",1,"form-control"],["for","ergometria"],["id","ergometria","rows","3","formControlName","ergometria",1,"form-control"],[1,"col-sm-12","col-md-12"],["for","obs"],["id","obs","rows","3","formControlName","obs",1,"form-control"],[3,"progress",4,"ngIf"],[2,"margin","2px"],[1,"row","toolbar"],[1,"col-sm-1",2,"padding","2px"],[1,"fileUpload","btn","btn-outline-primary","btn-block","border-l","toolbar-btn"],["type","file","class","upload","accept","image/*",3,"change",4,"ngIf"],[1,"fas","fa-cloud-upload-alt"],[1,"col-sm-1","btn-pipe",2,"padding","0 2px"],[1,"col-sm-4",2,"padding","2px"],["type","button","title","Criar usu\xe1rio","class","btn btn-danger btn-block toolbar-btn",3,"click",4,"ngIf"],["type","button","title","Dados de Acesso","class","btn btn-warning btn-block toolbar-btn","data-toggle","modal","data-target","#userAccess",4,"ngIf"],["type","button","title","Fichas","data-toggle","modal","data-target","#records",1,"btn","btn-outline-warning","btn-block","toolbar-btn"],[1,"d-none","d-md-inline"],[1,"fas","fa-clipboard"],["type","button","title","Avalia\xe7\xe3o","data-toggle","modal","data-target","#avaliations",1,"btn","btn-outline-dark","btn-block","toolbar-btn"],[1,"fas","fa-ruler"],["class","col-sm-1","style","padding: 2px;",4,"ngIf"],[3,"progress"],["type","file","accept","image/*",1,"upload",3,"change"],["type","button","title","Criar usu\xe1rio",1,"btn","btn-danger","btn-block","toolbar-btn",3,"click"],[1,"fas","fa-user"],["type","button","title","Dados de Acesso","data-toggle","modal","data-target","#userAccess",1,"btn","btn-warning","btn-block","toolbar-btn"],["type","submit",1,"btn","btn-outline-success","btn-block","border-r","toolbar-btn",3,"disabled"],[1,"fas","fa-save"]],template:function(t,e){1&t&&(b.Qb(0,"div",0),b.Qb(1,"div",1),b.uc(2," Cadastro de Aluno "),b.Qb(3,"button",2),b.Yb("click",(function(){return e.return()})),b.Ob(4,"i",3),b.Pb(),b.Pb(),b.Qb(5,"div",4),b.Qb(6,"div",5),b.Qb(7,"div",6),b.tc(8,h,2,1,"div",7),b.Qb(9,"div",8),b.tc(10,k,76,11,"form",9),b.Pb(),b.Pb(),b.Pb(),b.Pb(),b.Pb(),b.Qb(11,"modal-record",10),b.Yb("saveFn",(function(){return e.onSubmit()})),b.Pb(),b.Qb(12,"modal-aval",11),b.Yb("saveFn",(function(){return e.onSubmit()})),b.Pb(),b.Ob(13,"modal-user",12)),2&t&&(b.Bb(8),b.gc("ngIf",void 0!==e.object),b.Bb(2),b.gc("ngIf",void 0!==e.formulario),b.Bb(1),b.gc("records",e.fichas),b.Bb(1),b.gc("avaliacoes",e.avaliacoes),b.Bb(1),b.gc("user",e.usuario))},directives:[u.k,d.a,f.a,m.a,a.s,a.l,a.g,a.b,a.k,a.e,p.a,g.a,v.a],styles:[""]}),w),C=o("/VSm"),I=o("SROd");function R(t,e){if(1&t&&(b.Qb(0,"option",15),b.uc(1),b.Pb()),2&t){var o=e.$implicit;b.gc("ngValue",o),b.Bb(1),b.vc(o)}}var B=function(t){return[t,"edit"]};function x(t,e){if(1&t){var o=b.Rb();b.Qb(0,"tr"),b.Qb(1,"td",19),b.uc(2),b.Pb(),b.Qb(3,"td",20),b.uc(4),b.Pb(),b.Qb(5,"td",21),b.uc(6),b.Pb(),b.Qb(7,"td"),b.Qb(8,"a",22),b.Ob(9,"button",23),b.Pb(),b.Qb(10,"a",24),b.Qb(11,"button",25),b.Yb("click",(function(){b.oc(o);var t=e.$implicit;return b.bc(2).openModalDelete(t.id,"o(a) aluno(a): "+t.name)})),b.Pb(),b.Pb(),b.Pb(),b.Pb()}if(2&t){var r=e.$implicit;b.Bb(2),b.vc(r.name),b.Bb(2),b.vc(r.celular),b.Bb(2),b.vc(r.email),b.Bb(2),b.gc("routerLink",b.kc(4,B,r.id))}}function N(t,e){1&t&&(b.Qb(0,"td",26),b.uc(1," Nenhum registro encontrado"),b.Pb())}function S(t,e){if(1&t&&(b.Qb(0,"table",16),b.Qb(1,"thead"),b.Qb(2,"tr"),b.Qb(3,"th"),b.uc(4,"Nome"),b.Pb(),b.Qb(5,"th"),b.uc(6,"Celular"),b.Pb(),b.Qb(7,"th"),b.uc(8,"E-mail"),b.Pb(),b.Qb(9,"th"),b.uc(10,"Op\xe7\xf5es"),b.Pb(),b.Pb(),b.Pb(),b.Qb(11,"tbody"),b.tc(12,x,12,6,"tr",17),b.Qb(13,"tr"),b.tc(14,N,2,0,"td",18),b.Pb(),b.Pb(),b.Pb()),2&t){var o=b.bc();b.Bb(12),b.gc("ngForOf",o.list),b.Bb(2),b.gc("ngIf",o.list.length<1)}}var F,D,A,M=((F=function(t){_inherits(o,t);var e=_createSuper(o);function o(t,r){var n;return _classCallCheck(this,o),(n=e.call(this,t,r)).injector=t,n.personService=r,n.filter.tipo="A",n}return _createClass(o,[{key:"transformObjects",value:function(){return Object(n.__awaiter)(this,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.list);case 1:case"end":return t.stop()}}),t,this)})))}}]),o}(i.b)).\u0275fac=function(t){return new(t||F)(b.Nb(b.r),b.Nb(s.c))},F.\u0275cmp=b.Hb({type:F,selectors:[["app-alunos-list"]],features:[b.yb],decls:15,vars:8,consts:[["titletop","Alunos Cadastrados","entity","list"],["search",""],[1,"col-md-12"],[1,"row"],[1,"col-sm-3","toolbar-item"],["id","qtd",1,"border-l",3,"ngModel","ngModelChange","change"],[3,"ngValue",4,"ngFor","ngForOf"],[1,"col-sm-5","toobar-item"],[1,"col-sm-4","toolbar-item"],["type","text","id","aluno","placeholder","Aluno","title","aluno",1,"text-center",3,"ngModel","ngModelChange","keyup"],["name",""],["body",""],["class","table table-striped table-bordered table-sm",4,"ngIf"],["footer",""],[3,"count","page","totalPages","totalElements","pageData"],[3,"ngValue"],[1,"table","table-striped","table-bordered","table-sm"],[4,"ngFor","ngForOf"],["colspan","4","style","background-color: red; color: white; font-weight: bold;",4,"ngIf"],["data-label","Nome:"],["data-label","Celular:"],["data-label","E-mail:"],[1,"componenteform",3,"routerLink"],["title","Detalhes","data-toggle","tooltip","data-placement","bottom",1,"btn","btn-outline-primary","btn-pdr","fa","fa-edit","sombra-btn"],[1,"componenteform"],["type","button","title","Deletar","data-placement","bottom",1,"btn","btn-outline-danger","btn-pdr","fa","fa-trash","sombra-btn",3,"click"],["colspan","4",2,"background-color","red","color","white","font-weight","bold"]],template:function(t,e){if(1&t){var o=b.Rb();b.Qb(0,"base-layout",0),b.Qb(1,"div",1),b.Qb(2,"div",2),b.Qb(3,"div",3),b.Qb(4,"div",4),b.Qb(5,"select",5),b.Yb("ngModelChange",(function(t){return e.count=t}))("change",(function(){return e.getList()})),b.tc(6,R,2,2,"option",6),b.Pb(),b.Pb(),b.Ob(7,"div",7),b.Qb(8,"div",8),b.Qb(9,"input",9,10),b.Yb("ngModelChange",(function(t){return e.filter.name=t}))("keyup",(function(){b.oc(o);var t=b.nc(10);return e.filtrar(t.value)})),b.Pb(),b.Pb(),b.Pb(),b.Pb(),b.Pb(),b.Qb(11,"div",11),b.tc(12,S,15,2,"table",12),b.Pb(),b.Qb(13,"div",13),b.Qb(14,"ikPagination",14),b.Yb("pageData",(function(t){return e.pagination(t)})),b.Pb(),b.Pb(),b.Pb()}2&t&&(b.Bb(5),b.gc("ngModel",e.count),b.Bb(1),b.gc("ngForOf",e.counts),b.Bb(3),b.gc("ngModel",e.filter.name),b.Bb(3),b.gc("ngIf",void 0!==e.list),b.Bb(2),b.gc("count",e.count)("page",e.page)("totalPages",e.totalPages)("totalElements",e.totalElements))},directives:[C.a,a.p,a.k,a.m,u.j,a.b,u.k,I.a,a.n,a.r,r.c],styles:[""]}),F),E=o("vMv0"),L=[{path:"",component:M},{path:":id/add",component:j,canActivate:[E.a],data:{roles:["ROLE_ADM_DFIT","ROLE_PROF_DFIT"]}},{path:":id/edit",component:j,canActivate:[E.a],data:{roles:["ROLE_ADM_DFIT","ROLE_PROF_DFIT"]}}],q=((D=function t(){_classCallCheck(this,t)}).\u0275mod=b.Lb({type:D}),D.\u0275inj=b.Kb({factory:function(t){return new(t||D)},imports:[[r.d.forChild(L)],r.d]}),D),Y=o("WSrY"),T=o("USPg"),U=((A=function t(){_classCallCheck(this,t)}).\u0275mod=b.Lb({type:A}),A.\u0275inj=b.Kb({factory:function(t){return new(t||A)},imports:[[q,Y.a,T.a]]}),A)}}]);