(this.webpackJsonpshowUsersBornInASpecificMonth=this.webpackJsonpshowUsersBornInASpecificMonth||[]).push([[0],{2:function(e,t,n){e.exports={LegendTable:"Legend_LegendTable__1pYNK",caption:"Legend_caption__1BdwI",grey:"Legend_grey__3fJzW",blue:"Legend_blue__2h9Er",green:"Legend_green__1Xday",red:"Legend_red__17-ma"}},21:function(e,t,n){e.exports=n(44)},26:function(e,t,n){},3:function(e,t,n){e.exports={UsersTableWrapper:"UsersTable_UsersTableWrapper__1kdYz",caption:"UsersTable_caption__3C2ax"}},4:function(e,t,n){e.exports={App:"App_App__2bJAh",MonthList:"App_MonthList__3AXLF"}},44:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(15),s=n.n(o),l=(n(26),n(5)),c=n(16),i=n(17),u=n(20),m=n(19),d=n(18),h=n.n(d),p=function(){return h.a.get("https://yalantis-react-school-api.yalantis.com/api/task0/users").then((function(e){return e.data}))};var g=function(e){return new Date(e).getUTCMonth()},b=n(4),f=n.n(b),E=n(3),_=n.n(E),M=function(e){var t=e.usersList,n=e.month;return r.a.createElement("table",{className:_.a.UsersTableWrapper},t.length>0?r.a.createElement("caption",{className:_.a.caption},t.length," users was born in ",n):r.a.createElement("caption",{className:_.a.caption},"Put mouse cursor over month"),t.length>0&&t.map((function(e){return r.a.createElement("tr",{key:e.id},r.a.createElement("td",null,e.firstName," ",e.lastName),r.a.createElement("td",null,e.dob))})))},y=n(2),L=n.n(y),v=function(){return r.a.createElement("table",{className:L.a.LegendTable},r.a.createElement("caption",{className:L.a.caption},"Legend:"),r.a.createElement("tr",null,r.a.createElement("td",{className:L.a.grey},"[0-2]"),r.a.createElement("td",null," grey")),r.a.createElement("tr",null,r.a.createElement("td",{className:L.a.blue},"[3-6]"),r.a.createElement("td",null," blue")),r.a.createElement("tr",null,r.a.createElement("td",{className:L.a.green},"[7-10]"),r.a.createElement("td",null," green")),r.a.createElement("tr",null,r.a.createElement("td",{className:L.a.red},"[11+]"),r.a.createElement("td",null," red")))},w={margin:2,padding:3,border:0,borderRadius:2,fontSize:16,fontFamily:"inherit",width:100},N=["January","February","March","April","May","June","July","August","September","October","November","December"],A=function(e){var t="";return e>=0&&e<=2?t="#B2BABB":e>=3&&e<=6?t="#7FB3D5":e>=7&&e<=10?t="#7DCEA0":e>=11?t="#F1948A":console.log("Invalid value of usersPerMonth"),t},k=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).setMonth=function(e){a.setState({desiredMonth:+e.target.name})},a.resetMonth=function(){a.setState({desiredMonth:""})},a.state={users:[],desiredMonth:"",isLoading:!1,error:null},a}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.setState({isLoading:!0}),p().then((function(t){return e.setState({users:t})})).catch((function(t){return e.setState({error:t})})).finally((function(){return e.setState({isLoading:!1})}))}},{key:"getMonthlyUserList",value:function(e){return this.state.users.filter((function(t){return g(t.dob)===e}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.users,a=t.desiredMonth,o=t.isLoading,s=t.error;return r.a.createElement(r.a.Fragment,null,s&&r.a.createElement("p",null,"Whoops, something went wrong: ",s.message),o&&r.a.createElement("p",null,"Loading..."),n.length>0&&r.a.createElement("div",{className:f.a.App},r.a.createElement(v,null),r.a.createElement("ul",{className:f.a.MonthList},N.map((function(t,n){return r.a.createElement("li",{key:t},r.a.createElement("button",{type:"button",name:n,onMouseOver:e.setMonth,onFocus:e.setMonth,onMouseOut:e.resetMonth,onBlur:e.resetMonth,style:Object(l.a)(Object(l.a)({},w),{},{backgroundColor:A(e.getMonthlyUserList(n).length)})},t))}))),r.a.createElement(M,{usersList:this.getMonthlyUserList(a),month:N[a]})))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.fec645c4.chunk.js.map