(this["webpackJsonptipo-flores"]=this["webpackJsonptipo-flores"]||[]).push([[0],{46:function(e,t,r){"use strict";r.r(t);var o,c=r(0),n=r(8),a=r.n(n),i=r(12),l=r(48),s=r(49),j=r(24),b=r(50),p=r(5),O=function(){var e=Object(i.c)((function(e){return e.tipoFlor}));return console.log(e.tipoFlor),Object(p.jsx)(l.a,{children:Object(p.jsx)(s.a,{children:e.tipoFlor.map((function(e){return Object(p.jsxs)(j.a,{xs:4,children:[Object(p.jsx)("p",{children:e.nombre}),Object(p.jsx)(b.a,{src:e.url,alt:e.nombre,style:{width:"200px"}}),Object(p.jsx)("p",{children:e.precio}),Object(p.jsx)("p",{children:e.descripcion})]})}))})})},u=r(15),d=r(25),h=r(53),x=r(51),m=r(52),f="AGREGAR_TIPO_FLOR",F="BORRAR_TIPO_FLOR",v=r(17),y=r(10),T=r(26),_=r.n(T),g=r(27).a.div(o||(o=Object(d.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    margin: 20px;\n"]))),C=function(){var e=Object(c.useState)(!1),t=Object(u.a)(e,2),r=t[0],o=t[1],n=function(){return o(!1)},a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(c.useState)(e),r=Object(u.a)(t,2),o=r[0],n=r[1];return[o,function(e){var t=e.target;n(Object(y.a)(Object(y.a)({},o),{},Object(v.a)({},t.name,t.value)))},function(){n(e)}]}({nombre:"",url:"",precio:"",descripcion:""}),l=Object(u.a)(a,3),s=l[0],j=l[1],b=l[2],O=s.nombre,d=s.url,F=s.precio,T=s.descripcion,C=Object(i.b)(),w=function(e){C(function(e){return{type:f,payload:e}}(e))};return Object(p.jsxs)(g,{children:[Object(p.jsx)(h.a,{variant:"primary",onClick:function(){return o(!0)},children:"A\xf1ade tu Tipo Flor"}),Object(p.jsx)("hr",{style:{width:"100%"}}),Object(p.jsx)("p",{children:"Aqui se mostraran tus flores"}),Object(p.jsxs)(x.a,{show:r,onHide:n,children:[Object(p.jsx)(x.a.Header,{closeButton:!0,children:Object(p.jsx)(x.a.Title,{children:"Ingresa Tipo Flor"})}),Object(p.jsx)(x.a.Body,{children:Object(p.jsxs)(m.a,{onSubmit:function(e){e.preventDefault(),w({id:_()(),nombre:O,url:d,precio:F,descripcion:T}),b()},children:[Object(p.jsxs)(m.a.Group,{className:"mb-3",children:[Object(p.jsx)(m.a.Label,{children:"Tipo Flor"}),Object(p.jsx)(m.a.Control,{type:"text",placeholder:"Nombre TipoFlor",name:"nombre",autoComplete:"off",value:O,onChange:j})]}),Object(p.jsxs)(m.a.Group,{className:"mb-3",children:[Object(p.jsx)(m.a.Label,{children:"Imagen Tipo Flor (URL)"}),Object(p.jsx)(m.a.Control,{type:"text",placeholder:"Imagen TipoFlor",name:"url",autoComplete:"off",value:d,onChange:j})]}),Object(p.jsxs)(m.a.Group,{className:"mb-3",children:[Object(p.jsx)(m.a.Label,{children:"Precio Tipo Flor"}),Object(p.jsx)(m.a.Control,{type:"text",placeholder:"Precio TipoFlor",name:"precio",autoComplete:"off",value:F,onChange:j})]}),Object(p.jsxs)(m.a.Group,{className:"mb-3",children:[Object(p.jsx)(m.a.Label,{children:"Descripcion Tipo Flor"}),Object(p.jsx)(m.a.Control,{as:"textarea",rows:3,name:"descripcion",autoComplete:"off",value:T,onChange:j})]}),Object(p.jsx)(h.a,{type:"submit",variant:"primary",children:"A\xf1adir TipoFlor"})]})}),Object(p.jsx)(x.a.Footer,{children:Object(p.jsx)(h.a,{variant:"secondary",onClick:n,children:"Close"})})]})]})},w=r(18),E=r(32),R={tipoFlor:[]},L=Object(w.a)({tipoFlor:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Object(y.a)(Object(y.a)({},e),{},{tipoFlor:[].concat(Object(E.a)(e.tipoFlor),[t.payload])});case F:return Object(y.a)(Object(y.a)({},e),{},{tipoFlor:e.tipoFlor.filter((function(e){return e.id!==t.payload}))});default:return e}}}),N=Object(w.b)(L,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());var I=function(){return Object(p.jsxs)(i.a,{store:N,children:[Object(p.jsx)(C,{}),Object(p.jsx)(O,{})]})};r(45);a.a.render(Object(p.jsx)(I,{}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.6430b23f.chunk.js.map