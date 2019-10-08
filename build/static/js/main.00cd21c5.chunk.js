(this["webpackJsonpfe-test-project"]=this["webpackJsonpfe-test-project"]||[]).push([[0],{20:function(e,t,a){e.exports=a(32)},31:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(6),c=a(7),s=a(4),i=a(8);function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(a,!0).forEach(function(t){Object(i.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var p=function(e,t){switch(t.type){case"SET_LOCATION":return t.data;default:return e}},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_FORECASTS_REQUEST":return u({},e,{isFetching:!0,isInvalidate:!1});case"FETCH_FORECASTS_FAILURE":return u({},e,{isFetching:!1,isInvalidate:!1,error:t.error});case"FETCH_FORECASTS_SUCCESS":return u({},e,{isFetching:!1,isInvalidate:!1,items:t.data,error:null,lastUpdated:t.receivedAt});default:return e}},f=a(9),m=a(10),d=a(12),E=a(11),g=a(13),y=a(2),O=a.n(y),b=a(19),v=a(5);function w(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}var S="715ac60004286c422cbbbf1d407f9a12",j="https://api.openweathermap.org/data/2.5",C="metric";function F(){return(F=Object(v.a)(O.a.mark(function e(t){var a,n,r,o;return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a="type=like&sort=population&units=".concat(C,"&cnt=7"),n="".concat(j,"/find?q=").concat(t,"&").concat(a,"&appid=").concat(S),e.prev=2,e.next=5,fetch(n);case 5:return r=e.sent,e.next=8,r.json();case 8:return o=e.sent,e.abrupt("return",o.list);case 12:e.prev=12,e.t0=e.catch(2),console.error(e.t0);case 15:case"end":return e.stop()}},e,null,[[2,12]])}))).apply(this,arguments)}function P(e){if(e){var t=e.list.map(function(e,t){return{day:e.dt_txt,tempMin:e.main.temp_min,tempMax:e.main.temp_max,conditions:e.weather[0].description,icon:e.weather[0].icon,wind:e.wind.speed}}).reduce(function(e,t){var a=t.day.substring(0,10);e.has(a)||e.set(a,function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?w(a,!0).forEach(function(t){Object(i.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):w(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},t,{day:t.day.substring(0,10),hourly:[]}));var n=e.get(a);return n.tempMin=Math.min(n.tempMin,t.tempMin),n.tempMax=Math.max(n.tempMax,t.tempMax),t.day=t.day.substr(11),n.hourly.push(t),e},new Map);return Object(b.a)(t.values())}}function D(){return(D=Object(v.a)(O.a.mark(function e(t){var a,n,r;return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(j,"/forecast?id=").concat(t,"&units=").concat(C,"&appid=").concat(S),e.prev=1,e.next=4,fetch(a);case 4:return n=e.sent,e.next=7,n.json();case 7:return r=e.sent,e.abrupt("return",P(r));case 11:throw e.prev=11,e.t0=e.catch(1),console.error(e.t0),e.t0;case 15:case"end":return e.stop()}},e,null,[[1,11]])}))).apply(this,arguments)}var _,L={fetchLocations:function(e){return F.apply(this,arguments)},fetch5DaysForecast:function(e){return D.apply(this,arguments)}},T=function(e){var t=e.inDetail,a=void 0!==t&&t,n=e.day,o=e.icon,c=e.conditions,s=e.tempMax,i=e.tempMin,l=e.wind,u=e.onClick;return r.a.createElement("li",{className:"Forecast",onClick:u},r.a.createElement("span",null,r.a.createElement("img",{alt:o,src:"".concat("https://openweathermap.org/img/wn/","/").concat(o,"@2x.png")})),r.a.createElement("span",null,r.a.createElement("h4",null,n,", ",c),"temperature from ",i," to ",s," \xb0\u0421, wind ",l," m/s.",a?null:r.a.createElement("p",null,"( Click to see detail forecast )")))},k=function(e){var t=e.date,a=e.forecastDetails,n=e.onClose;return r.a.createElement("article",{className:"ForecastDetailPage modal"},r.a.createElement("div",{className:"modal-content"},r.a.createElement("span",{className:"close",onClick:n},"\xd7"),r.a.createElement("h1",null,"3-hourly forecast (",t,")"),r.a.createElement("ul",null,a.map(function(e){return r.a.createElement(T,Object.assign({key:e.day},e,{inDetail:!0}))}))))},x=function(e){var t=e.onClick,a=e.location,n=e.icon,o=e.coord;return r.a.createElement("li",{className:"Location",onClick:t},r.a.createElement("span",null,r.a.createElement("h3",null,r.a.createElement("img",{alt:n,src:"".concat("https://openweathermap.org/img/wn/","/").concat(n,".png")}))),r.a.createElement("span",null,r.a.createElement("h4",null,a),r.a.createElement("h5",{alt:"Geo coords"},"[",o,"]")))},N=-1,A=function(e){function t(e){var a;return Object(f.a)(this,t),(a=Object(d.a)(this,Object(E.a)(t).call(this,e)))._setLocation=function(e){a.props.setLocation(e),e&&X(e)},a.state={locations:[]},a}return Object(g.a)(t,e),Object(m.a)(t,[{key:"_refreshLocations",value:function(e){var t=this;clearTimeout(N),!e&&e.length<3?this.setState({locations:[]}):N=setTimeout(Object(v.a)(O.a.mark(function a(){var n;return O.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,L.fetchLocations(e);case 2:n=a.sent,t.setState({locations:n});case 4:case"end":return a.stop()}},a)})),230)}},{key:"render",value:function(){var e=this,t=this.props.location?this.props.location.name+", "+this.props.location.sys.country:"";return r.a.createElement("article",{className:"SetLocationPage modal"},r.a.createElement("div",{className:"modal-content"},r.a.createElement("span",{className:"close",onClick:this.props.onClose},"\xd7"),r.a.createElement("h1",null,"Set Location"),r.a.createElement("input",{defaultValue:t,onChange:function(t){t.preventDefault(),e._refreshLocations(t.target.value.trim())},autoFocus:!0}),r.a.createElement("ul",null,this.state.locations?this.state.locations.map(function(t){return r.a.createElement(x,{key:t.id,icon:t.weather[0].icon,location:t.name+", "+t.sys.country,coord:t.coord.lat+", "+t.coord.lon,onClick:function(){e._setLocation(t),e.props.onClose()}})}):null)))}}]),t}(n.Component),I=Object(s.b)(function(e){return{location:e.location}},function(e){return{setLocation:function(t){return e(function(e){return{type:"SET_LOCATION",data:e}}(t))}}})(A),M=function(e){function t(e){var a;return Object(f.a)(this,t),(a=Object(d.a)(this,Object(E.a)(t).call(this,e))).showForecastDetailPage=function(e){a.setState({showForecastDetailPage:!0,selectDateIndex:e})},a.hideForecastDetailPage=function(){a.setState({showForecastDetailPage:!1})},a.showSetLocationPage=function(){a.setState({showSetLocationPage:!0})},a.hideSetLocationPage=function(){a.setState({showSetLocationPage:!1})},a.state={showSetLocationPage:!1,showForecastDetailPage:!1,selectDateIndex:0},a}return Object(g.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.props.forecasts,a=this.state.showForecastDetailPage?this.props.forecasts[this.state.selectDateIndex]:null;return r.a.createElement("div",{className:"ForecastPage"},r.a.createElement("header",null,r.a.createElement("h1",null,"Weather Forecast "),r.a.createElement("button",{onClick:this.showSetLocationPage},this.props.location?this.props.location.name+", "+this.props.location.sys.country:"Set Location"),r.a.createElement("span",{className:"refresh"},this.props.isFetching?r.a.createElement("img",{alt:"loading",src:"/loading.gif"}):this.props.error?r.a.createElement("span",{className:"error"},this.props.error):null," ","last updated at"," ",Date(this.props.lastUpdated).toLocaleString().substring(16,21))),r.a.createElement("h2",null,"5-days forecast"),r.a.createElement("ul",null,t?t.map(function(t,a){return r.a.createElement(T,Object.assign({key:t.day},t,{onClick:function(){e.showForecastDetailPage(a)}}))}):r.a.createElement("div",{className:"hero"},r.a.createElement("h4",null,"Hi,"),r.a.createElement("div",null,"This is a weather forecast app, you can:",r.a.createElement("ol",null,r.a.createElement("li",null,"Set a location, click button [Set Location] on top, you can also change location after set a location."),r.a.createElement("li",null,"See the 5-days forecast show in page after location set."),r.a.createElement("li",null,"See the 3-hourly forecast for that date by clicking the day."),r.a.createElement("li",null,"[NEW] Add auto refresh forecasts, and error catch and display"))))),this.state.showForecastDetailPage?r.a.createElement(k,{date:a.day,forecastDetails:a.hourly,onClose:function(){return e.hideForecastDetailPage()}}):null,this.state.showSetLocationPage?r.a.createElement(I,{onClose:this.hideSetLocationPage}):null)}}]),t}(n.Component),R=Object(s.b)(function(e){return{location:e.location,isFetching:e.forecasts.isFetching,lastUpdated:e.forecasts.lastUpdated,error:e.forecasts.error,forecasts:e.forecasts.items}})(M),U=(a(31),Object(c.b)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return{location:p(e.location,t),forecasts:h(e.forecasts,t)}},window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())),H=-1,X=(_=U.dispatch,function(e){_({type:"FETCH_FORECASTS_REQUEST"}),clearTimeout(H),L.fetch5DaysForecast(e.id).then(function(e){return _({type:"FETCH_FORECASTS_SUCCESS",data:e,receivedAt:Date.now})}).catch(function(e){return _(function(e){return{type:"FETCH_FORECASTS_FAILURE",error:e.toString()}}(e))}).finally(function(){H=setTimeout(function(){return X(e)},6e4)})}),V=function(){return r.a.createElement(s.a,{store:U},r.a.createElement(R,null))};Object(o.render)(r.a.createElement(V,null),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.00cd21c5.chunk.js.map