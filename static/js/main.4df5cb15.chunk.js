(this["webpackJsonptipo-flores"]=this["webpackJsonptipo-flores"]||[]).push([[0],{46:function(e,t,r){},47:function(e,t,r){"use strict";r.r(t);var o,n,c=r(0),a=r(8),i=r.n(a),l=r(12),s=r(16),j=r(49),b=r(50),p=r(29),O=r(51),u=r(17),d=r(5),h=Object(u.a)(j.a)(o||(o=Object(s.a)(["\n    background-color: rgba(255, 255, 255, 0.8);\n    width: 80%;\n"]))),x=function(){var e=Object(l.c)((function(e){return e.tipoFlor}));return console.log(e.tipoFlor),Object(d.jsx)(h,{children:Object(d.jsx)(b.a,{children:e.tipoFlor.map((function(e){return Object(d.jsxs)(p.a,{xs:4,children:[Object(d.jsx)("p",{children:e.nombre}),Object(d.jsx)(O.a,{src:e.url,alt:e.nombre,style:{width:"100%"}}),Object(d.jsx)("p",{children:e.precio}),Object(d.jsx)("p",{children:e.descripcion})]},e.id)}))})})},m=r(15),f=r(54),F=r(52),v=r(53),y="AGREGAR_TIPO_FLOR",g="BORRAR_TIPO_FLOR",T=r(19),_=r(10),C=r(30),w=r.n(C),E=u.a.div(n||(n=Object(s.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    margin: 20px;\n"]))),R=function(){var e=Object(c.useState)(!1),t=Object(m.a)(e,2),r=t[0],o=t[1],n=function(){return o(!1)},a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(c.useState)(e),r=Object(m.a)(t,2),o=r[0],n=r[1];return[o,function(e){var t=e.target;n(Object(_.a)(Object(_.a)({},o),{},Object(T.a)({},t.name,t.value)))},function(){n(e)}]}({nombre:"",url:"",precio:"",descripcion:""}),i=Object(m.a)(a,3),s=i[0],j=i[1],b=i[2],p=s.nombre,O=s.url,u=s.precio,h=s.descripcion,x=Object(l.b)(),g=function(e){x(function(e){return{type:y,payload:e}}(e))};return Object(d.jsxs)(E,{children:[Object(d.jsx)(f.a,{variant:"primary",onClick:function(){return o(!0)},children:"A\xf1ade tu Tipo Flor"}),Object(d.jsx)("hr",{style:{width:"100%"}}),Object(d.jsx)("p",{children:"Aqui se mostraran tus flores"}),Object(d.jsxs)(F.a,{show:r,onHide:n,children:[Object(d.jsx)(F.a.Header,{closeButton:!0,children:Object(d.jsx)(F.a.Title,{children:"Ingresa Tipo Flor"})}),Object(d.jsx)(F.a.Body,{children:Object(d.jsxs)(v.a,{onSubmit:function(e){e.preventDefault(),g({id:w()(),nombre:p,url:O,precio:u,descripcion:h}),b()},children:[Object(d.jsxs)(v.a.Group,{className:"mb-3",children:[Object(d.jsx)(v.a.Label,{children:"Tipo Flor"}),Object(d.jsx)(v.a.Control,{type:"text",placeholder:"Nombre TipoFlor",name:"nombre",autoComplete:"off",value:p,onChange:j})]}),Object(d.jsxs)(v.a.Group,{className:"mb-3",children:[Object(d.jsx)(v.a.Label,{children:"Imagen Tipo Flor (URL)"}),Object(d.jsx)(v.a.Control,{type:"text",placeholder:"Imagen TipoFlor",name:"url",autoComplete:"off",value:O,onChange:j})]}),Object(d.jsxs)(v.a.Group,{className:"mb-3",children:[Object(d.jsx)(v.a.Label,{children:"Precio Tipo Flor"}),Object(d.jsx)(v.a.Control,{type:"text",placeholder:"Precio TipoFlor",name:"precio",autoComplete:"off",value:u,onChange:j})]}),Object(d.jsxs)(v.a.Group,{className:"mb-3",children:[Object(d.jsx)(v.a.Label,{children:"Descripcion Tipo Flor"}),Object(d.jsx)(v.a.Control,{as:"textarea",rows:3,name:"descripcion",autoComplete:"off",value:h,onChange:j})]}),Object(d.jsx)(f.a,{type:"submit",variant:"primary",children:"A\xf1adir TipoFlor"})]})}),Object(d.jsx)(F.a.Footer,{children:Object(d.jsx)(f.a,{variant:"secondary",onClick:n,children:"Close"})})]})]})},L=r(20),N=r(32),I={tipoFlor:[]},S=Object(L.a)({tipoFlor:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return Object(_.a)(Object(_.a)({},e),{},{tipoFlor:[].concat(Object(N.a)(e.tipoFlor),[t.payload])});case g:return Object(_.a)(Object(_.a)({},e),{},{tipoFlor:e.tipoFlor.filter((function(e){return e.id!==t.payload}))});default:return e}}}),A=Object(L.b)(S,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());var D=function(){return Object(d.jsxs)(l.a,{store:A,children:[Object(d.jsx)(R,{}),Object(d.jsx)(x,{})]})};r(45),r(46);i.a.render(Object(d.jsx)(D,{}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.4df5cb15.chunk.js.map