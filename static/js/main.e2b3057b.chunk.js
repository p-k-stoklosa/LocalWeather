(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,a,t){e.exports=t(22)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(3),c=t.n(r),s=(t(14),t(4)),i=t(5),m=t(7),d=t(6),o=t(8),u=(t(15),t(1)),p=(t(16),t(17),function(e){var a=["../images/stateless/00-cloud.png","../images/stateless/01-rain.png","../images/stateless/02-storm.png","../images/stateless/03-snow.png","../images/stateless/04-fog.png","../images/stateless/05-wind.png","../images/stateless/06-cloudy.png","../images/stateless/000-rain.png","../images/stateless/001-thunder.png","../images/stateless/002-tornado.png","../images/stateless/003-wind.png"],t=["../images/day/00-day-clear.png","../images/day/01-day-cloud.png","../images/day/02-day-rain.png","../images/day/03-day-storm.png","../images/day/04-day-snow.png"],n=["../images/night/00-night-clear.png","../images/night/01-night-cloud.png","../images/night/02-night-rain.png","../images/night/03-night-storm.png","../images/night/04-night-snow.png"];return l.a.createElement("img",{src:function(e,l){var r=new Date;if("Clear"===e&&800===l)return r.getHours()>5&&r.getHours()<22?t[0]:n[0];if("Clouds"===e){if(801===l)return r.getHours()>5&&r.getHours()<22?t[1]:n[1];if(802===l)return a[0];if(803===l||804===l)return a[6]}else{if("Rain"===e)return l>499&&l<502?r.getHours()>5&&r.getHours()<22?t[2]:n[2]:a[1];if("Snow"===e)return l<602?r.getHours()>5&&r.getHours()<22?t[4]:n[4]:a[3];if("Drizzle"===e)return t[2];if("Thunderstorm"===e){if(!(l>210))return a[3];if(r.getHours()>5&&r.getHours()<22)return t[3]}else if("Atmosphere"===e)return 741===l||701===l?a[4]:781===l?a[9]:a[5]}}(e.weather,e.weatherId),alt:e.weather})}),E=function(e){var a=e.currentWeather,t=e.detailedWeather,n=e.location;return l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"section-first"},l.a.createElement("div",{className:"section-top-left"},l.a.createElement("p",{className:"location"},a.name,", ",n[2]),l.a.createElement("p",{className:"temperature"},Math.round(a.main.temp),"\xb0","MM"===n[4]||"US"===n[4]||"LR"===n[4]?"F":"C")),l.a.createElement("div",{className:"section-top-right"},l.a.createElement(p,{weather:t.daily[0].weather[0].main,weatherId:t.daily[0].weather[0].id})),l.a.createElement("div",{className:"section-bottom-left"},l.a.createElement("p",{className:"description"},a.weather[0].main)),l.a.createElement("div",{className:"section-bottom-right"},l.a.createElement("p",{className:"tempMinMax"},"Max. ",Math.round(t.daily[0].temp.max),"\xb0 - Min. ",Math.round(t.daily[0].temp.min),"\xb0"))))},h=(t(18),function(e){var a=e.detailedWeather,t=e.currentWeather,n=e.location;return l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"section-second"},l.a.createElement("div",{className:"section-top"},l.a.createElement("p",{className:"title"},t.name,", ",n[3]," - Today's Forecast")),l.a.createElement("div",{className:"section-bottom"},l.a.createElement("div",{className:"todayWeather"},l.a.createElement("div",{className:"title"},l.a.createElement("span",null,"Morning")),l.a.createElement("div",{className:"image"},l.a.createElement("img",{src:"../images/040-sunrise.png",alt:""})),l.a.createElement("div",{className:"temperature"},l.a.createElement("span",null,Math.round(a.daily[0].temp.morn),"\xb0"))),l.a.createElement("div",{className:"todayWeather"},l.a.createElement("div",{className:"title"},l.a.createElement("span",null,"Midday")),l.a.createElement("div",{className:"image"},l.a.createElement("img",{src:"../images/day/00-day-clear.png",alt:""})),l.a.createElement("div",{className:"temperature"},l.a.createElement("span",null,Math.round(a.daily[0].temp.day),"\xb0"))),l.a.createElement("div",{className:"todayWeather"},l.a.createElement("div",{className:"title"},l.a.createElement("span",null,"Afternoon")),l.a.createElement("div",{className:"image"},l.a.createElement("img",{src:"../images/041-sunset.png",alt:""})),l.a.createElement("div",{className:"temperature"},l.a.createElement("span",null,Math.round(a.daily[0].temp.eve),"\xb0"))),l.a.createElement("div",{className:"todayWeather"},l.a.createElement("div",{className:"title"},l.a.createElement("span",null,"Night")),l.a.createElement("div",{className:"image"},l.a.createElement("img",{src:"../images/night/00-night-clear.png",alt:""})),l.a.createElement("div",{className:"temperature"},l.a.createElement("span",null,Math.round(a.daily[0].temp.night),"\xb0"))))))}),g=(t(19),function(e){var a=function(e){var a=new Date(1e3*e);return"".concat(a.getHours()<10?"0"+a.getHours():a.getHours(),":").concat(a.getMinutes()<10?"0"+a.getMinutes():a.getMinutes())},t=e.detailedWeather,n=e.currentWeather,r=e.location;return l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"section-third"},l.a.createElement("div",{className:"section-top"},l.a.createElement("p",{className:"title"},n.name,", ",r[3]," - Detailed Weather")),l.a.createElement("div",{className:"details"},l.a.createElement("div",{className:"dayDetails"},l.a.createElement("div",{className:"details-left"},l.a.createElement("div",{className:"sunrise"},l.a.createElement("img",{src:"../images/040-sunrise.png",alt:"sunrise"}),l.a.createElement("p",{className:"time"},a(n.sys.sunrise))),l.a.createElement("div",{className:"sunset"},l.a.createElement("img",{src:"../images/041-sunset.png",alt:"sunset"}),l.a.createElement("p",{className:"time"},a(n.sys.sunset)))),l.a.createElement("div",{className:"details-right"},l.a.createElement("div",{className:"uvScale"},l.a.createElement("img",{src:"../images/042-uv.png",alt:"uv"}),l.a.createElement("p",{className:"uvValue"},t.daily[0].uvi>2?"Protection required":"No protection required"))),l.a.createElement("div",{className:"details-center"},l.a.createElement("div",{className:"list"},l.a.createElement("div",{className:"listItem"},l.a.createElement("p",{className:"text-left"},"Wind"),l.a.createElement("p",{className:"text-right"},"MM"===r[4]||"US"===r[4]||"LR"===r[4]?"".concat(t.daily[0].wind_speed," mph"):"".concat(Math.round(3.6*t.daily[0].wind_speed)," km/h"))),l.a.createElement("div",{className:"listItem"},l.a.createElement("p",{className:"text-left"},"Pressure"),l.a.createElement("p",{className:"text-right"},t.daily[0].pressure," hPA")),l.a.createElement("div",{className:"listItem"},l.a.createElement("p",{className:"text-left"},"Index UV"),l.a.createElement("p",{className:"text-right"},t.daily[0].uvi)),l.a.createElement("div",{className:"listItem"},l.a.createElement("p",{className:"text-left"},"Clouds"),l.a.createElement("p",{className:"text-right"},Math.round(t.daily[0].clouds),"%")),l.a.createElement("div",{className:"listItem"},l.a.createElement("p",{className:"text-left"},"Humidity"),l.a.createElement("p",{className:"text-right"},Math.round(t.daily[0].humidity),"%")),l.a.createElement("div",{className:"listItem"},l.a.createElement("p",{className:"text-left"},"Visibility"),l.a.createElement("p",{className:"text-right"},"MM"===r[4]||"US"===r[4]||"LR"===r[4]?"".concat(Math.round(n.visibility/1.6)," mi"):"".concat(Math.round(n.visibility/1e3)," km")))))))))}),N=(t(20),function(e){var a=function(e){var a=new Date(1e3*e),t=a.toString();return"".concat(t[0]+t[1]+t[2],". ").concat(a.getDate())},t=e.detailedWeather,n=e.currentWeather,r=e.location;return l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"section-fourth"},l.a.createElement("div",{className:"section-top"},l.a.createElement("p",{className:"title"},n.name,", ",r[3]," - Next Days Forecast")),l.a.createElement("div",{className:"section-bottom"},l.a.createElement("div",{className:"weather"},l.a.createElement("div",{className:"title"},l.a.createElement("span",null,"Tomorrow")),l.a.createElement("div",{className:"image"},l.a.createElement(p,{weather:t.daily[1].weather[0].main,weatherId:t.daily[1].weather[0].id})),l.a.createElement("div",{className:"description"},l.a.createElement("span",null,t.daily[1].weather[0].main)),l.a.createElement("div",{className:"temperature"},l.a.createElement("span",null,Math.round(t.daily[1].temp.day),"\xb0"))),l.a.createElement("div",{className:"weather"},l.a.createElement("div",{className:"title"},l.a.createElement("span",null,a(t.daily[2].dt))),l.a.createElement("div",{className:"image"},l.a.createElement(p,{weather:t.daily[2].weather[0].main,weatherId:t.daily[2].weather[0].id})),l.a.createElement("div",{className:"description"},l.a.createElement("span",null,t.daily[2].weather[0].main)),l.a.createElement("div",{className:"temperature"},l.a.createElement("span",null,Math.round(t.daily[2].temp.day),"\xb0"))),l.a.createElement("div",{className:"weather"},l.a.createElement("div",{className:"title"},l.a.createElement("span",null,a(t.daily[3].dt))),l.a.createElement("div",{className:"image"},l.a.createElement(p,{weather:t.daily[3].weather[0].main,weatherId:t.daily[3].weather[0].id})),l.a.createElement("div",{className:"description"},l.a.createElement("span",null,t.daily[3].weather[0].main)),l.a.createElement("div",{className:"temperature"},l.a.createElement("span",null,Math.round(t.daily[3].temp.day),"\xb0"))),l.a.createElement("div",{className:"weather"},l.a.createElement("div",{className:"title"},l.a.createElement("span",null,a(t.daily[4].dt))),l.a.createElement("div",{className:"image"},l.a.createElement(p,{weather:t.daily[4].weather[0].main,weatherId:t.daily[4].weather[0].id})),l.a.createElement("div",{className:"description"},l.a.createElement("span",null,t.daily[4].weather[0].main)),l.a.createElement("div",{className:"temperature"},l.a.createElement("span",null,Math.round(t.daily[4].temp.day),"\xb0"))))))}),v=(t(21),function(){return l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"section-fifth"},l.a.createElement("p",null,"Site powered by: ",l.a.createElement("a",{href:"https://ipstack.com/"},"ipstack"),", ",l.a.createElement("a",{href:"https://openweathermap.org/"},"OpenWeather"),", ",l.a.createElement("a",{href:"https://www.flaticon.com/packs/weather-161"},"Flaticon"))))}),f=function(){var e=Object(n.useState)([]),a=Object(u.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)([]),s=Object(u.a)(c,2),i=s[0],m=s[1],d=Object(n.useState)([]),o=Object(u.a)(d,2),p=o[0],f=o[1],y=Object(n.useState)(!1),w=Object(u.a)(y,2),M=w[0],b=w[1];return Object(n.useEffect)(function(){b(!1),fetch("http://api.ipstack.com/check?access_key=0aecc97c07665e6c46ed35e83f56d474").then(function(e){return e.json()}).then(function(e){r([e.latitude,e.longitude,e.region_name,e.country_name,e.country_code])}).catch(function(e){console.log("Error "+e)})},[]),Object(n.useEffect)(function(){t.length>0&&fetch("https://api.openweathermap.org/data/2.5/weather?lat=".concat(t[0],"&lon=").concat(t[1],"&units=").concat("MM"===t[4]||"US"===t[4]||"LR"===t[4]?"imperial":"metric","&appid=4bb3a96f9a8e5ae053cce296b10640ca")).then(function(e){return e.json()}).then(function(e){m(e)}).catch(function(e){console.log("Error "+e)})},[t]),Object(n.useEffect)(function(){t.length>0&&fetch("https://api.openweathermap.org/data/2.5/onecall?lat=".concat(t[0],"&lon=").concat(t[1],"&exclude=minutely&units=").concat("MM"===t[4]||"US"===t[4]||"LR"===t[4]?"imperial":"metric","&appid=4bb3a96f9a8e5ae053cce296b10640ca")).then(function(e){return e.json()}).then(function(e){f(e),b(!0)}).catch(function(e){console.log("Error "+e)})},[t]),l.a.createElement("div",{className:"container"},M&&l.a.createElement(l.a.Fragment,null,l.a.createElement(E,{location:t,currentWeather:i,detailedWeather:p}),l.a.createElement(h,{location:t,currentWeather:i,detailedWeather:p}),l.a.createElement(g,{location:t,currentWeather:i,detailedWeather:p}),l.a.createElement(N,{location:t,currentWeather:i,detailedWeather:p}),l.a.createElement(v,null)))},y=function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(o.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(f,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.e2b3057b.chunk.js.map