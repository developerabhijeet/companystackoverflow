(this.webpackJsonpstackoverflow=this.webpackJsonpstackoverflow||[]).push([[0],{31:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),s=a(24),c=a.n(s),i=(a(31),a(2)),l=a(8),o=a(9),b=a(11),j=a(10),d=a(4),u=a.n(d),m=a(13),h=a(17),O=a(26),v=a(22),x=a(0),p=function(e){var t=e.name,a=e.label,n=e.errors,r=Object(v.a)(e,["name","label","errors"]);return Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{htmlFor:t,children:a}),Object(x.jsx)("input",Object(m.a)(Object(m.a)({},r),{},{name:t,id:t,className:"form-control"}))]}),n&&Object(x.jsx)("div",{className:"alert alert-danger",children:n})]})},f=function(e){Object(b.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).validate=function(){var e=u.a.validate(n.state.data,n.schema,{abortEarly:!1}).error;if(!e)return null;var t,a={},r=Object(O.a)(e.details);try{for(r.s();!(t=r.n()).done;){var s=t.value;a[s.path[0]]=s.message}}catch(c){r.e(c)}finally{r.f()}return a},n.validateProperty=function(e){var t=e.name,a=e.value,r=Object(h.a)({},t,a),s=Object(h.a)({},t,n.schema[t]),c=u.a.validate(r,s).error;return c?c.details[0].message:null},n.handleSubmit=function(e){e.preventDefault();var t=n.validate();n.setState({errors:t||{}}),t||n.doSubmit()},n.handleChange=function(e){var t=e.currentTarget,a=Object(m.a)({},n.state.errors),r=n.validateProperty(t);r?a[t.name]=r:delete a[t.name];var s=Object(m.a)({},n.state.data);s[t.name]=t.value,n.setState({data:s,errors:a})},n.state={data:{},data1:{},errors:{}},n}return Object(o.a)(a,[{key:"renderButton",value:function(e){return Object(x.jsx)("button",{disabled:this.validate(),className:"btn btn-primary",children:e})}},{key:"renderInput",value:function(e,t){var a=this.state,n=a.data,r=a.errors;return Object(x.jsx)(p,{name:e,value:n[e],label:t,onChange:this.handleChange,errors:r[e]})}},{key:"renderButtonP",value:function(e){return Object(x.jsx)("button",{className:"btn btn-primary",children:e})}}]),a}(n.Component),g=function(e){Object(b.a)(a,e);var t=Object(j.a)(a);function a(){Object(l.a)(this,a);return t.call(this)}return Object(o.a)(a,[{key:"render",value:function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)("h1",{children:"Post Your Problem"}),Object(x.jsxs)("form",{children:[this.renderInput("problem","Type your Problem"),Object(x.jsx)("br",{}),this.renderInput("domain","Type your Programming Language","text"),Object(x.jsx)("br",{}),this.renderButtonP("POST")]})]})}}]),a}(f),N=a(15),y=function(e){Object(b.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).handleSave=n.handleSave.bind(Object(N.a)(n)),n}return Object(o.a)(a,[{key:"handleSave",value:function(){this.props.history.push("/")}},{key:"render",value:function(){return Object(x.jsxs)("div",{className:"container",children:[Object(x.jsx)("h4",{className:"center",children:"CONTACT"}),Object(x.jsx)("p",{children:"My name is contact"}),Object(x.jsx)("label",{children:"Enter Name"}),Object(x.jsx)("input",{type:"text"}),Object(x.jsx)("button",{className:"btn btn-primary",onClick:this.handleSave,children:"Contact"})]})}}]),a}(n.Component),k=function(e){Object(b.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={data:{username:"",password:"",name:"",useremail:"",jobprofile:""},errors:{}},e.schema={username:u.a.string().required().min(5).label("Username"),password:u.a.string().required().min(6).label("Password"),name:u.a.string().required().min(3).label("Name"),useremail:u.a.string().required().email().label("Email"),jobprofile:u.a.string().required().min(2).label("Profile")},e.doSubmit=function(){console.log("Submit")},e}return Object(o.a)(a,[{key:"render",value:function(){return Object(x.jsxs)("div",{children:[Object(x.jsxs)("div",{children:[Object(x.jsx)("h1",{children:"Register Form"}),Object(x.jsxs)("form",{onSubmit:this.handleSubmit,children:[this.renderInput("name","Name","text"),this.renderInput("username","Username","text"),this.renderInput("useremail","Email","text"),this.renderInput("jobprofile","Job Profile","text"),this.renderInput("password","Password","password"),Object(x.jsx)("br",{}),this.renderButton("SignUp")]})]}),Object(x.jsx)("div",{children:Object(x.jsx)("img",{src:"download"})})]})}}]),a}(f);var S=function(){return Object(x.jsxs)("div",{className:"container",children:[Object(x.jsx)("h4",{className:"center",children:"ABOUT"}),Object(x.jsx)("p",{children:"My name is About"})]})},w=a(12);var P=function(){return Object(x.jsx)("nav",{className:"navbar navbar-fixed navbar-expand-lg navbar-dark bg-dark",children:Object(x.jsxs)("div",{className:"container-fluid",children:[Object(x.jsx)("a",{className:"navbar-brand",href:"#",children:"Company StackOveflow "}),Object(x.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(x.jsx)("span",{className:"navbar-toggler-icon"})}),Object(x.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(x.jsxs)("div",{className:"nav nav-tabs",children:[Object(x.jsx)(w.b,{className:"blank",exact:!0,to:"/"}),Object(x.jsx)(w.b,{className:"nav-item nav-link",exact:!0,to:"/",children:"Home"}),Object(x.jsx)(w.b,{className:"nav-link nav-item",to:"/about",children:"About"}),Object(x.jsx)(w.b,{className:"nav-link nav-item",to:"/contact",children:"Contact"}),Object(x.jsx)(w.b,{className:"nav-link nav-item",to:"/login",children:"Login"}),Object(x.jsx)(w.b,{className:"nav-link nav-item",to:"/register",children:"SignUp"})]})})]})})},C=function(){return Object(x.jsxs)("div",{className:"container",children:[Object(x.jsx)("h4",{className:"center",children:"NOT FOUND"}),Object(x.jsxs)("p",{children:["ERROR:404",Object(x.jsx)("br",{})," Page not available"]})]})},I=function(e){Object(b.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={data:{username:"",password:""},errors:{}},n.schema={username:u.a.string().required().label("Username"),password:u.a.string().required().label("Password")},n.doSubmit=n.doSubmit.bind(Object(N.a)(n)),n}return Object(o.a)(a,[{key:"doSubmit",value:function(){console.log("submit")}},{key:"render",value:function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)("h1",{children:"Login Form"}),Object(x.jsxs)("form",{onSubmit:this.handleSubmit.bind(this),children:[this.renderInput("username","Username","text"),this.renderInput("password","Password","password"),Object(x.jsx)("br",{}),this.renderButton("Login")]})]})}}]),a}(f);a(38);var T=function(){return Object(x.jsxs)("div",{className:"App",children:[Object(x.jsx)(P,{}),Object(x.jsxs)(i.d,{children:[Object(x.jsx)(i.b,{path:"/about",component:S}),Object(x.jsx)(i.b,{path:"/contact",component:y}),Object(x.jsx)(i.a,{from:"/project",to:"/"}),Object(x.jsx)(i.b,{path:"/not-found",component:C}),Object(x.jsx)(i.b,{path:"/login",component:I}),Object(x.jsx)(i.b,{path:"/register",component:k}),Object(x.jsx)(i.b,{path:"/",exact:!0,component:g}),Object(x.jsx)(i.a,{to:"/not-found"})]})]})},B=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,40)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),s(e),c(e)}))};c.a.render(Object(x.jsx)(w.a,{children:Object(x.jsx)(r.a.StrictMode,{children:Object(x.jsx)(T,{})})}),document.getElementById("root")),B()}},[[39,1,2]]]);
//# sourceMappingURL=main.8c501eb0.chunk.js.map