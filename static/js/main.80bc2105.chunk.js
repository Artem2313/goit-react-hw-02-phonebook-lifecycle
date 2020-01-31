(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],{10:function(e,t,n){e.exports=n(19)},18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(8),o=n.n(c),l=n(9),u=n(1),i=n(2),m=n(3),s=n(5),h=n(4),f=n(6),d=n(15),b=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",number:""},n.handleChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(u.a)({},a,r))},n.handleSubmit=function(e){e.preventDefault();var t={id:d(),name:n.state.name,number:n.state.number};(0,n.props.onAddContact)(t),n.resetForm()},n.resetForm=function(){n.setState({name:"",number:""})},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.number;return r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("label",{htmlFor:"name"},r.a.createElement("h3",null,"Name"),r.a.createElement("input",{name:"name",value:t,onChange:this.handleChange,type:"text",required:!0})),r.a.createElement("label",{htmlFor:"number"},r.a.createElement("h3",null,"Phone"),r.a.createElement("input",{name:"number",value:n,onChange:this.handleChange,type:"number",required:!0})),r.a.createElement("button",{type:"submit"},"Add contact"))}}]),t}(a.Component),p=function(e){var t=e.filter,n=e.onChange;return r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"filter"},r.a.createElement("h2",null,"Find contacts by name"),r.a.createElement("input",{name:"filter",value:t,onChange:n,type:"text"})))},v=function(e){var t=e.onDelete,n=e.filtedContacts;return r.a.createElement("ul",null,n.map((function(e){var n=e.id,a=e.name,c=e.number;return r.a.createElement("li",{key:n},a,": ",c,r.a.createElement("button",{type:"button",onClick:function(){return t(n)}},"Delete"))})))},C=function(e,t){return e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())||e.number.includes(t)}))},E=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={contacts:[],filter:""},n.handleChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(u.a)({},a,r))},n.addContact=function(e){n.state.contacts.find((function(t){return t.name===e.name}))?alert("This name already exists"):n.setState((function(t){return{contacts:[].concat(Object(l.a)(t.contacts),[e])}}))},n.handleDelete=function(e){n.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("contacts");e&&this.setState({contacts:JSON.parse(e)})}},{key:"componentDidUpdate",value:function(e,t){var n=this.state.contacts;t.contacts!==n&&localStorage.setItem("contacts",JSON.stringify(n))}},{key:"render",value:function(){var e=this.state,t=e.contacts,n=e.filter,a=this.handleDelete,c=C(t,n);return r.a.createElement("div",null,r.a.createElement("h1",null,"Phonebook"),r.a.createElement(b,{onAddContact:this.addContact}),r.a.createElement("h2",null,"Contacts"),r.a.createElement(p,{filter:n,onChange:this.handleChange}),r.a.createElement(v,{onDelete:a,filtedContacts:c}))}}]),t}(a.Component);n(18);o.a.render(r.a.createElement(E,null),document.querySelector("#root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.80bc2105.chunk.js.map