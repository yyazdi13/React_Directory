(this.webpackJsonpemployee_directory=this.webpackJsonpemployee_directory||[]).push([[0],{13:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(7),c=a.n(r),s=a(1),o=a(2),m=a(4),i=a(3),u=a(5),p=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"jumbotron",style:{background:"darksalmon"}},l.a.createElement("h1",{className:"display-4"},"Employee"),l.a.createElement("p",{className:"lead"},"Look up an employee by first name, last name, or phone number"),l.a.createElement("hr",{className:"my-4"}),l.a.createElement("p",null,"Press 'Reset' to go back to a list of ALL employees")))}}]),t}(n.Component),h={users:[{userId:1,image:"https://picsum.photos/200",name:{first:"Kris",last:"Jacobs"},phone:"5122222222",email:"krish.lee&#64;learningcontainer.com",dob:"05-23-1987"},{userId:2,image:"https://picsum.photos/199",name:{first:"Lucas",last:"Morris"},phone:"123456",email:"racks.jacson&#64;learningcontainer.com",dob:"07-23-1990"},{userId:3,image:"https://picsum.photos/198",name:{first:"Sandy",last:"Ruedell"},phone:"2354430",email:"joe.jacson@learningcontainer.com",dob:"07-23-2000"}]},b=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(e){return l.a.createElement("div",null,l.a.createElement("table",{className:"table"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{scope:"col"},"Picture"),l.a.createElement("th",{scope:"col"},"first name"),l.a.createElement("th",{scope:"col"},"last name"),l.a.createElement("th",{scope:"col"},"email"),l.a.createElement("th",{scope:"col"},"dob"),l.a.createElement("th",{scope:"col"},"phone"))),l.a.createElement("tbody",null,this.props.children)))}}]),t}(n.Component),d=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(l)))).state={search:"",meep:h.users},a.handleSearch=function(e){var t=e.target.value.replace(/ /g,"");t=t.charAt(0).toUpperCase()+t.slice(1);var n=h.users.filter((function(e){return e.name.first===t||e.name.last===t||e.phone===t}));console.log(n),console.log(t),a.setState({search:t,meep:n})},a.handleSubmit=function(e){a.setState({meep:h.users})},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("nav",{className:"navbar navbar-light bg-light"},l.a.createElement("form",{className:"form-inline"},l.a.createElement("input",{onChange:this.handleSearch,className:"form-control mr-sm-2 m-3",type:"search",placeholder:"Search","aria-label":"Search"}),l.a.createElement("button",{onClick:this.handleSubmit,className:"btn btn-outline-success my-2 my-sm-0"},"Reset"))),l.a.createElement(b,null,this.state.meep.map((function(e){return l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("img",{src:e.image})),l.a.createElement("td",null,e.name.first),l.a.createElement("td",null,e.name.last),l.a.createElement("td",null,e.email),l.a.createElement("td",null,e.phone),l.a.createElement("td",null,e.dob))}))))}}]),t}(n.Component),E=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(p,null),l.a.createElement(d,null))}}]),t}(n.Component);c.a.render(l.a.createElement(E,null),document.getElementById("root"))},8:function(e,t,a){e.exports=a(13)}},[[8,1,2]]]);
//# sourceMappingURL=main.9f931a53.chunk.js.map