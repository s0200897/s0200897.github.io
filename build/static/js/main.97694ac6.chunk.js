(this["webpackJsonpfe-test-project"]=this["webpackJsonpfe-test-project"]||[]).push([[0],{20:function(e,t,a){e.exports=a(32)},31:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(6),r=a(7),s=a(4),i=function(e,t){switch(t.type){case"SET_LOCATION":return t.data;default:return e}},l=function(e,t){switch(t.type){case"FETCH_FORECASTS":return t.data;default:return e}},u=a(8),p=a(9),h=a(11),m=a(10),f=a(12),d=a(2),y=a.n(d),E=a(19),g=a(18),b=a(5);function v(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}var w="715ac60004286c422cbbbf1d407f9a12",O="https://api.openweathermap.org/data/2.5",j="metric";function S(){return(S=Object(b.a)(y.a.mark(function e(t){var a,n,c,o;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a="type=like&sort=population&units=".concat(j,"&cnt=7"),n="".concat(O,"/find?q=").concat(t,"&").concat(a,"&appid=").concat(w),e.prev=2,e.next=5,fetch(n);case 5:return c=e.sent,e.next=8,c.json();case 8:return o=e.sent,e.abrupt("return",o.list);case 12:e.prev=12,e.t0=e.catch(2),console.error(e.t0);case 15:case"end":return e.stop()}},e,null,[[2,12]])}))).apply(this,arguments)}function P(e){if(e){var t=e.list.map(function(e,t){return{day:e.dt_txt,tempMin:e.main.temp_min,tempMax:e.main.temp_max,conditions:e.weather[0].description,icon:e.weather[0].icon,wind:e.wind.speed}}).reduce(function(e,t){var a=t.day.substring(0,10);e.has(a)||e.set(a,function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?v(a,!0).forEach(function(t){Object(g.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):v(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},t,{day:t.day.substring(0,10),hourly:[]}));var n=e.get(a);return n.tempMin=Math.min(n.tempMin,t.tempMin),n.tempMax=Math.max(n.tempMax,t.tempMax),t.day=t.day.substr(11),n.hourly.push(t),e},new Map);return Object(E.a)(t.values())}}function k(){return(k=Object(b.a)(y.a.mark(function e(t){var a,n,c;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(O,"/forecast?id=").concat(t,"&units=").concat(j,"&appid=").concat(w),e.prev=1,e.next=4,fetch(a);case 4:return n=e.sent,e.next=7,n.json();case 7:return c=e.sent,e.abrupt("return",P(c));case 11:e.prev=11,e.t0=e.catch(1),console.error(e.t0);case 14:case"end":return e.stop()}},e,null,[[1,11]])}))).apply(this,arguments)}var C={fetchLocations:function(e){return S.apply(this,arguments)},fetch5DaysForecast:function(e){return k.apply(this,arguments)}},D=function(e){var t=e.inDetail,a=void 0!==t&&t,n=e.day,o=e.icon,r=e.conditions,s=e.tempMax,i=e.tempMin,l=e.wind,u=e.onClick;return c.a.createElement("li",{className:"Forecast",onClick:u},c.a.createElement("span",null,c.a.createElement("img",{alt:o,src:"".concat("https://openweathermap.org/img/wn/","/").concat(o,"@2x.png")})),c.a.createElement("span",null,c.a.createElement("h4",null,n,", ",r),"temperature from ",i," to ",s," \xb0\u0421, wind ",l," m/s.",a?null:c.a.createElement("p",null,"( Click to see detail forecast )")))},F=function(e){var t=e.date,a=e.forecastDetails,n=e.onClose;return c.a.createElement("article",{className:"ForecastDetailPage modal"},c.a.createElement("div",{className:"modal-content"},c.a.createElement("span",{className:"close",onClick:n},"\xd7"),c.a.createElement("h1",null,"3-hourly forecast (",t,")"),c.a.createElement("ul",null,a.map(function(e){return c.a.createElement(D,Object.assign({key:e.day},e,{inDetail:!0}))}))))},L=function(e){var t=e.onClick,a=e.location,n=e.icon,o=e.coord;return c.a.createElement("li",{className:"Location",onClick:t},c.a.createElement("span",null,c.a.createElement("h3",null,c.a.createElement("img",{alt:n,src:"".concat("https://openweathermap.org/img/wn/","/").concat(n,".png")}))),c.a.createElement("span",null,c.a.createElement("h4",null,a),c.a.createElement("h5",{alt:"Geo coords"},"[",o,"]")))},x=-1,M=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(m.a)(t).call(this,e)))._setLocation=function(e){a.props.setLocation(e),a._refreshForecasts(e)},a.state={locations:[]},a}return Object(f.a)(t,e),Object(p.a)(t,[{key:"_refreshForecasts",value:function(e){var t=this;e&&C.fetch5DaysForecast(e.id).then(function(e){t.props.fetchForecasts(e)})}},{key:"_refreshLocations",value:function(e){var t=this;clearTimeout(x),!e&&e.length<3?this.setState({locations:[]}):x=setTimeout(Object(b.a)(y.a.mark(function a(){var n;return y.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,C.fetchLocations(e);case 2:n=a.sent,t.setState({locations:n});case 4:case"end":return a.stop()}},a)})),230)}},{key:"render",value:function(){var e=this,t=this.props.location?this.props.location.name+", "+this.props.location.sys.country:"";return c.a.createElement("article",{className:"SetLocationPage modal"},c.a.createElement("div",{className:"modal-content"},c.a.createElement("span",{className:"close",onClick:this.props.onClose},"\xd7"),c.a.createElement("h1",null,"Set Location"),c.a.createElement("input",{defaultValue:t,onChange:function(t){t.preventDefault(),e._refreshLocations(t.target.value.trim())},autoFocus:!0}),c.a.createElement("ul",null,this.state.locations?this.state.locations.map(function(t){return c.a.createElement(L,{key:t.id,icon:t.weather[0].icon,location:t.name+", "+t.sys.country,coord:t.coord.lat+", "+t.coord.lon,onClick:function(){e._setLocation(t),e.props.onClose()}})}):null)))}}]),t}(n.Component),_=Object(s.b)(function(e){return{location:e.location}},function(e){return{setLocation:function(t){return e(function(e){return{type:"SET_LOCATION",data:e}}(t))},fetchForecasts:function(t){return e(function(e){return{type:"FETCH_FORECASTS",data:e}}(t))}}})(M),N=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(m.a)(t).call(this,e))).showForecastDetailPage=function(e){a.setState({showForecastDetailPage:!0,selectDateIndex:e})},a.hideForecastDetailPage=function(){a.setState({showForecastDetailPage:!1})},a.showSetLocationPage=function(){a.setState({showSetLocationPage:!0})},a.hideSetLocationPage=function(){a.setState({showSetLocationPage:!1})},a.state={showSetLocationPage:!1,showForecastDetailPage:!1,selectDateIndex:0},a}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this,t=this.props.forecasts,a=this.state.showForecastDetailPage?this.props.forecasts[this.state.selectDateIndex]:null;return c.a.createElement("div",{className:"ForecastPage"},c.a.createElement("header",null,c.a.createElement("h1",null,"Weather Forecast "),c.a.createElement("button",{onClick:this.showSetLocationPage},this.props.location?this.props.location.name+", "+this.props.location.sys.country:"Set Location")),c.a.createElement("h2",null,"5-days forecast"),c.a.createElement("ul",null,t?t.map(function(t,a){return c.a.createElement(D,Object.assign({key:t.day},t,{onClick:function(){e.showForecastDetailPage(a)}}))}):c.a.createElement("div",{className:"hero"},c.a.createElement("h4",null,"Hi,"),c.a.createElement("div",null,"This is a weather forecast app, you can:",c.a.createElement("ol",null,c.a.createElement("li",null,"Set a location, click button [Set Location] on top, you can also change location after set a location."),c.a.createElement("li",null,"See the 5-days forecast show in page after location set."),c.a.createElement("li",null,"See the 3-hourly forecast for that date by clicking the day."))))),this.state.showForecastDetailPage?c.a.createElement(F,{date:a.day,forecastDetails:a.hourly,onClose:function(){return e.hideForecastDetailPage()}}):null,this.state.showSetLocationPage?c.a.createElement(_,{onClose:this.hideSetLocationPage}):null)}}]),t}(n.Component),T=Object(s.b)(function(e){return{location:e.location,forecasts:e.forecasts}})(N),I=(a(31),function(){return c.a.createElement(T,null)}),A=Object(r.b)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return{location:i(e.location,t),forecasts:l(e.forecasts,t)}});Object(o.render)(c.a.createElement(function(){return c.a.createElement(s.a,{store:A},c.a.createElement(I,null))},null),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.97694ac6.chunk.js.map