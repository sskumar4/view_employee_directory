(this.webpackJsonpview_employee_directory=this.webpackJsonpview_employee_directory||[]).push([[0],{114:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(6),r=a.n(o),s=(a(48),a(7)),c=a(8),i=a(10),m=a(9),p=(a(49),a(14)),u=a.n(p);a(67);var h=function(){return l.a.createElement("div",{className:"wrapper"},l.a.createElement("div",{className:"title"},"Employee Directory"),l.a.createElement("br",null),l.a.createElement("div",{className:"tagline"},"Click on 'Name' to sort by employee name or use search box to narrow your results"))};a(68),a(69),a(24);var d=function(e){return l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},l.a.createElement("img",{alt:e.last,src:e.image})),l.a.createElement("td",null," ",e.first," ",e.last),l.a.createElement("td",null,e.phone),l.a.createElement("td",null,e.email),l.a.createElement("td",null,e.dob))};var y=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).state={alphabetical:!0,sortedEmployees:[],employees:[]},e.sortName=function(){var t=[];t=e.state.alphabetical?e.props.empList.sort((function(e,t){var a=e.name.last.toLowerCase(),n=t.name.last.toLowerCase();return a<n?-1:a>n?1:0})):e.props.empList.sort((function(e,t){var a=e.name.last.toLowerCase(),n=t.name.last.toLowerCase();return a>n?-1:a<n?1:0})),e.setState({alphabetical:!e.state.alphabetical,sortedEmployees:t})},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){console.log("SortedTable::CDM",this.props.empList.length),console.log("SortedTable::CDM",this.props.empList),this.state.sortedEmployees.length<1&&this.setState({sortedEmployees:this.props.empList})}},{key:"componentDidUpdate",value:function(e){console.log("SortedTable::CDU",this.props.empList.length),console.log("SortedTable::CDU",this.props.empList),this.props.empList!==e.empList&&this.setState({sortedEmployees:this.props.empList})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("table",{className:"table table-hover"},l.a.createElement("thead",{className:"thead-light"},l.a.createElement("tr",null,l.a.createElement("th",{scope:"col"},"Image"),l.a.createElement("th",{onClick:this.sortName,className:"name",scope:"col"},"Name"),l.a.createElement("th",{scope:"col"},"Phone"),l.a.createElement("th",{scope:"col"},"Email"),l.a.createElement("th",{scope:"col"},"DOB"))),l.a.createElement("tbody",null,this.state.sortedEmployees.length>0&&this.state.sortedEmployees.map((function(e,t){return l.a.createElement(d,{key:e.id.value,image:e.picture.thumbnail,first:e.name.first,last:e.name.last,title:e.name.title,gender:e.gender,dob:e.dob.date.split("T")[0],phone:e.phone,email:e.email})})))))}}]),a}(l.a.Component),E=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).state={searchEmp:"",filteredEmployees:[]},e.handleInputChange=function(t){e.setState({searchEmp:t.target.value});var a=t.target.value,n=e.props.employees.filter((function(e){return-1!==(e.name.title+e.name.first+e.name.last+e.gender+e.dob.age+e.email+e.cell).indexOf(a)}));e.setState({filteredEmployees:n})},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){console.log("FilteredTable::length",this.props.employees.length),console.log("FilteredTable::employees",this.props.employees),this.state.filteredEmployees.length<1&&this.setState({filteredEmployees:this.props.employees})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("form",{className:"form"},l.a.createElement("input",{value:this.state.searchEmp,name:"searchEmp",onChange:function(t){return e.handleInputChange(t)},type:"text",placeholder:"Search Employee"})),this.state.filteredEmployees.length>0&&l.a.createElement(y,{empList:this.state.filteredEmployees}))}}]),a}(l.a.Component),f=function(){return u.a.get("https://randomuser.me/api/?results=200&nat=us")},g=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).state={employees:[]},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;f().then((function(t){e.setState({employees:t.data.results}),console.log("res",t)})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return console.log("length",this.state.employees.length),console.log("employees",this.state.employees),l.a.createElement("div",{className:"App"},l.a.createElement(h,null),this.state.employees.length>0&&l.a.createElement(E,{employees:this.state.employees}))}}]),a}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(113);r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},43:function(e,t,a){e.exports=a(114)},48:function(e,t,a){},49:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){}},[[43,1,2]]]);
//# sourceMappingURL=main.b63474f5.chunk.js.map