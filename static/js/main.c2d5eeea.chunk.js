(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(t,e,n){t.exports=n(18)},16:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var a=n(0),i=n.n(a),r=n(4),l=n.n(r),c=(n(16),n(2)),u=n(5),s=n(6),o=n(9),f=n(7),m=n(8),h=n(1),p=function(t){function e(t){var n;return Object(u.a)(this,e),(n=Object(o.a)(this,Object(f.a)(e).call(this,t))).state={input:"",filters:[]},n.onFilterChange=n.onFilterChange.bind(Object(h.a)(Object(h.a)(n))),n}return Object(m.a)(e,t),Object(s.a)(e,[{key:"componentDidUpdate",value:function(t,e){if(e.input!==this.state.input){var n=O(this.state.input);this.setState({filters:n})}}},{key:"onFilterChange",value:function(t){var e=t.target.name;this.state.filters.indexOf(e)>-1?this.setState({filters:this.state.filters.filter(function(t){return t!==e})}):this.setState({filters:[].concat(Object(c.a)(this.state.filters),[e])})}},{key:"render",value:function(){var t=this;return i.a.createElement("div",null,i.a.createElement("h3",null,"Paste the Schema on the left panel"),i.a.createElement("p",null,"Example Input:"),i.a.createElement("code",null,i.a.createElement("pre",null,"id: Int\ntransactionId: Int\nstoreId: Int!\ntransactionDate: Datetime!\ntotalQuantity: Int!\ncreatedAt: Datetime\nupdatedAt: Datetime\n")),i.a.createElement("div",{style:{display:"flex",flexDirection:"row",height:"50vh"}},i.a.createElement("textarea",{value:this.state.input,onChange:function(e){t.setState({input:e.target.value})},style:{flex:"1 1 0"}}),i.a.createElement("div",{style:{flex:"1 1 0",display:"flex",flexDirection:"column"}},i.a.createElement("h4",{style:{margin:0}},"Param"),i.a.createElement("textarea",{style:{flex:"1 1 0"},value:E(this.state.input,this.state.filters||[]),readOnly:!0}),i.a.createElement("h4",{style:{margin:0}},"Parent Param"),i.a.createElement("textarea",{style:{flex:"1 1 0"},value:v(this.state.input,this.state.filters||[]),readOnly:!0}))),i.a.createElement("div",null,i.a.createElement("h2",null,"Filter"),i.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},O(this.state.input).map(function(e,n){return i.a.createElement("label",{key:"filter_".concat(n)},e,i.a.createElement("input",{name:e,type:"checkbox",onChange:t.onFilterChange,checked:t.state.filters.indexOf(e)>-1}))}))))}}]),e}(a.Component),d=/(.+): (.+)!?/,x=function(t,e){return e?[].concat(Object(c.a)(t),[e]):t},y=function(t){return t.split("\n").map(function(t){return t.match(d)||!1}).reduce(x,[])},E=function(t,e){return y(t).filter(function(t){return e.indexOf(t[1])>-1}).map(function(t){return"".concat(t[1],": $").concat(t[1])}).join(", ")},v=function(t,e){return y(t).filter(function(t){return e.indexOf(t[1])>-1}).map(function(t){return"$".concat(t[1],": ").concat(t[2])}).join(", ")},O=function(t){return y(t).map(function(t){return t[1]})};l.a.render(i.a.createElement(p,null),document.getElementById("root"))}},[[10,2,1]]]);
//# sourceMappingURL=main.c2d5eeea.chunk.js.map