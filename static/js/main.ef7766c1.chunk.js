(this.webpackJsonpclimalibre2=this.webpackJsonpclimalibre2||[]).push([[0],{12:function(e,t,a){e.exports={container:"WeatherDetail_container__1IxEv",mainComponent:"WeatherDetail_mainComponent__3XVnn",description:"WeatherDetail_description__kanKJ",hideScrollbar:"WeatherDetail_hideScrollbar__2YBJh",mainWeather:"WeatherDetail_mainWeather__2hMhr",forecast:"WeatherDetail_forecast__3JO7V",details:"WeatherDetail_details__1MedY",temp:"WeatherDetail_temp__26JdA",bg:"WeatherDetail_bg__1sNNk"}},16:function(e,t,a){e.exports={container:"BackgroundImage_container__2bOs5",image:"BackgroundImage_image__2mgB4",thumb:"BackgroundImage_thumb__1IYvo",hidden:"BackgroundImage_hidden__3fwe7"}},20:function(e,t,a){e.exports={content:"TodayForecast_content__IQ3kG",firstRow:"TodayForecast_firstRow__GoWvS",container:"TodayForecast_container__GjUuR",forecastTitle:"TodayForecast_forecastTitle__1cDHQ",extraShadow:"TodayForecast_extraShadow__2WK2-",temp:"TodayForecast_temp__16rp-",time:"TodayForecast_time__3uxfy"}},38:function(e,t,a){e.exports={container:"WeatherIcon_container__3C6nD"}},39:function(e,t,a){e.exports={container:"Weather_container__2Hl-s"}},49:function(e,t,a){},50:function(e,t,a){},80:function(e,t,a){"use strict";a.r(t);var n=a(2),i=a(0),r=a.n(i),c=a(17),s=a.n(c),o=(a(49),a(50),a(10)),u=a.n(o),d=a(15),l=a(6),h=a(100),m=a(99),p=a(26),f=a.n(p),j=new f.a({en:{locale:"en",loading:"Loading...",humidity:"Humidity",feelsLike:"Feels Like",wind:"Wind",important:"Important!",geolocationRequest:"Grant location permission in your device to continue",geolocationDisabled:"Geolocation is disabled in your device",north:"North",northEast:"Northeast",east:"East",southEast:"Southeast",south:"South",southWest:"Southwest",west:"West",northwest:"Northwest",station:"Station",noPrecipitations:"No precipitations expected",precipitations:function(e,t){return"Expected ".concat(e," at ").concat(t)}},es:{locale:"es",loading:"Cargando...",humidity:"Humedad",feelsLike:"Sensaci\xf3n t\xe9rmica",wind:"Viento",important:"\xa1Importante!",geolocationRequest:"Para continuar conceda permisos de ubicaci\xf3n.",geolocationDisabled:"La geolocalizaci\xf3n se encuentra deshabilitada en su dispositivo",north:"Norte",northEast:"Noreste",east:"Este",southEast:"Sudeste",south:"Sur",southWest:"Sudoeste",west:"Oeste",northwest:"Noroeste",station:"Estaci\xf3n",noPrecipitations:"No se esperan precipitaciones",precipitations:function(e,t){return"Se espera ".concat(e," a las ").concat(t)}}}),g=a(12),b=a.n(g),O=a.p+"static/media/cloudy-sky-min.d8516944.jpg",v=a.p+"static/media/drizzle-min.ad372d4a.jpg",w=a.p+"static/media/drizzle-night-min.45216be3.jpg",x=a.p+"static/media/fog-min.42e6f289.jpg",_=a.p+"static/media/rainy-day-min.f8c28a9f.jpg",y=a.p+"static/media/snow-min.2ba5aee5.jpg",D=a.p+"static/media/storm-min.c85d9d6c.jpg",k=a.p+"static/media/sunny-min.5651a5a0.jpg",N=a.p+"static/media/covered-min.3135c1a6.jpg",E=a.p+"static/media/clear-sky-night-min.7891b1f4.jpg",S=a.p+"static/media/cloudy-sky-night-min.3641cad9.jpg",R=a.p+"static/media/fog-night-min.8c04197d.jpg",T=a.p+"static/media/snow-night-min.661396c8.jpg",L=a.p+"static/media/covered-night-min.33216222.jpg",W=a.p+"static/media/rainy-night-min.ad153572.jpg",P=a.p+"static/media/cloudy-sky.dbc3ce7b.jpg",C=a.p+"static/media/drizzle.9cdac81c.jpg",I=a.p+"static/media/drizzle-night.51696507.jpg",Y=a.p+"static/media/fog.9a84ff24.jpg",A=a.p+"static/media/rainy-day.6b55c87c.jpg",F=a.p+"static/media/snow.8d5253ed.jpg",z=a.p+"static/media/storm.9648b46f.jpg",G=a.p+"static/media/sunny.f99420e2.jpg",H=a.p+"static/media/covered.3a9a56da.jpg",M=a.p+"static/media/clear-sky-night.0e27e654.jpg",B=a.p+"static/media/cloudy-sky-night.8f63b02d.jpg",q=a.p+"static/media/fog-night.d917543e.jpg",J=a.p+"static/media/snow-night.397b7550.jpg",U=a.p+"static/media/covered-night.d8a4bd0c.jpg",V=a.p+"static/media/rainy-night.ec43470e.jpg",K=a(16),Q=a.n(K),X=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return parseFloat(e).toFixed(t)},$=function(e){var t=new Date(e).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",hour12:!1});return"0"===t.charAt(0)?t.substr(1):t},Z=function(e){var t=1e3*e.sys.sunrise,a=1e3*e.sys.sunset,n=(new Date).getTime();return n>t&&n<a},ee=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return t.join(" ")},te=a(4),ae=a.n(te),ne=(ae.a.shape({name:ae.a.string,weather:ae.a.array,main:ae.a.object,wind:ae.a.object}),ae.a.shape({list:ae.a.array}),function(e){var t=e.weather,a=r.a.useState({min:"",full:""}),i=Object(l.a)(a,2),c=i[0],s=i[1],o=r.a.useState(!1),u=Object(l.a)(o,2),d=u[0],h=u[1];return r.a.useEffect((function(){s(function(){if(!t)return null;var e=t.weather[0].id,a=(""+e)[0],n=Z(t);switch(a){case"2":return{full:z,min:D};case"3":return n?{full:C,min:v}:{full:I,min:w};case"5":return n?{full:A,min:_}:{full:V,min:W};case"6":return n?{full:F,min:y}:{full:J,min:T};case"7":return n?{full:Y,min:x}:{full:q,min:R};case"8":return 800===e||801===e?n?{full:G,min:k}:{full:M,min:E}:802===e||803===e?n?{full:P,min:O}:{full:B,min:S}:n?{full:H,min:N}:{full:U,min:L};default:return{full:P,min:O}}}())}),[t]),Object(n.jsxs)("div",{className:Q.a.container,children:[Object(n.jsx)("img",{className:ee(Q.a.image,Q.a.thumb,d?Q.a.hidden:""),src:c.min,alt:""}),Object(n.jsx)("img",{className:ee(Q.a.image,d?"":Q.a.hidden),src:c.full,alt:"",onLoad:function(){return h(!0)}})]})}),ie=a(20),re=a.n(ie),ce=a(11),se=a(41),oe=a(37),ue=a.n(oe),de=a(38),le=a.n(de),he=function(e){var t=e.isDayTime,a=void 0===t||t,i=e.weatherCode,c=Object(se.a)(e,["isDayTime","weatherCode"]),s=r.a.useState(null),o=Object(l.a)(s,2),u=o[0],d=o[1];return r.a.useEffect((function(){if(null!==i&&void 0!==i)switch(i.toString()[0]){case"2":case"5":case"3":d("RAIN");break;case"6":[612,613,615].includes(i)?d("SLEET"):d("SNOW");break;case"7":[771,781].includes(i)?d("WIND"):d("FOG");break;case"8":[800,801].includes(i)&&d(a?"CLEAR_DAY":"CLEAR_NIGHT"),[802,803].includes(i)&&d(a?"PARTLY_CLOUDY_DAY":"PARTLY_CLOUDY_NIGHT"),804===i&&d("CLOUDY");break;default:d("PARTLY_CLOUDY_DAY")}}),[i,a]),Object(n.jsx)("div",{className:le.a.container,children:u&&Object(n.jsx)(ue.a,Object(ce.a)({id:"canvas",icon:u},c))})},me=function(e){var t=e.weather,a=e.forecasts;return Object(n.jsx)("div",{className:re.a.container,children:a.map((function(e){return Object(n.jsx)(i.Fragment,{children:Object(n.jsxs)("div",{className:re.a.content,children:[Object(n.jsxs)("div",{className:re.a.firstRow,children:[Object(n.jsx)(he,{isDayTime:Z(t),weatherCode:e.weather[0].id,size:60,color:"white"}),Object(n.jsx)("span",{className:re.a.temp,children:Object(n.jsx)("strong",{children:X(e.main.temp)+"\xb0"})})]}),Object(n.jsx)("div",{className:re.a.time,children:Object(n.jsx)("strong",{children:$(1e3*e.dt)})})]})},e.dt)}))})},pe=function(e){var t=e.weather,a=e.forecast,i=r.a.useState([]),c=Object(l.a)(i,2),s=c[0],o=c[1],u=r.a.useState(null),d=Object(l.a)(u,2),h=d[0],m=d[1],p=(new Date).toLocaleString(j.locale,{weekday:"long",month:"long",day:"numeric"});r.a.useEffect((function(){if(a){var e=a.list.filter((function(e){return 1e3*e.dt<function(){var e=new Date;e.setHours(e.getHours()+24);var t,a,n=new Date;return n.setHours(7,0,0,0),n.setDate(n.getDate()+1),(t=e)<=(a=n)?t:a}()}));o(e),m(e.find((function(e){return"Rain"===e.weather[0].main})))}}),[a]);var f,g;return Object(n.jsxs)("div",{className:b.a.container,children:[Object(n.jsx)("div",{className:b.a.bg,children:Object(n.jsx)(ne,{weather:t})}),Object(n.jsxs)("div",{className:b.a.mainComponent,children:[Object(n.jsxs)("div",{className:b.a.mainWeather,children:[Object(n.jsx)("div",{children:p}),Object(n.jsx)("div",{className:b.a.description,children:Object(n.jsx)("b",{children:t.weather[0].description})}),Object(n.jsxs)("div",{className:b.a.temp,children:[Object(n.jsx)(he,{isDayTime:Z(t),weatherCode:t.weather[0].id,color:"white",size:140}),Object(n.jsx)("span",{children:X(t.main.temp)+"\xb0C"})]}),"Rain"!==t.weather[0].main&&s.length>0&&Object(n.jsx)("div",{children:Object(n.jsx)("b",{children:h?(g=h,j.precipitations(g.weather[0].description,$(1e3*h.dt))):j.noPrecipitations})})]}),Object(n.jsx)("div",{children:t.name}),Object(n.jsxs)("div",{className:b.a.details,children:[Object(n.jsxs)("div",{children:[j.feelsLike,": ",Object(n.jsx)("strong",{children:X(t.main.feels_like)+"\xba"})]}),Object(n.jsxs)("div",{children:[j.humidity,": ",Object(n.jsx)("strong",{children:X(t.main.humidity)+"%"})]}),Object(n.jsxs)("div",{children:[j.wind,": ",Object(n.jsx)("strong",{children:X(t.wind.speed)+" km/h "+(f=t.wind.deg,[j.north,j.northEast,j.east,j.southEast,j.south,j.southWest,j.west,j.northwest,j.north][parseFloat(f%360/45).toFixed(0)])})]})]})]}),Object(n.jsx)("div",{className:ee(b.a.hideScrollbar,b.a.forecast),children:Object(n.jsx)(me,{weather:t,forecasts:s})})]})},fe=a(39),je=a.n(fe),ge=a(21),be=a.n(ge),Oe="https://api.openweathermap.org/data/2.5",ve=Oe+"/weather",we=Oe+"/forecast",xe={appid:"bb08096af050f2bd4c2b401249b14e27",units:"metric"},_e=function(){return be.a.get("https://ipapi.co/json").then((function(e){return e.data})).catch((function(e){console.log(e)}))},ye=function(e,t,a){return be.a.get(ve,{params:Object(ce.a)(Object(ce.a)({},xe),{},{q:"".concat(e,",").concat(t),lang:a})}).then((function(e){return e.data})).catch((function(e){console.log(e)}))},De=function(e,t,a){return be.a.get(we,{params:Object(ce.a)(Object(ce.a)({},xe),{},{q:"".concat(e,",").concat(t),lang:a})}).then((function(e){return e.data})).catch((function(e){console.log(e)}))},ke=function(e,t,a){return be.a.get(we,{params:Object(ce.a)(Object(ce.a)({},xe),{},{lat:e,lon:t,lang:a})}).then((function(e){return e.data})).catch((function(e){console.log(e)}))},Ne=function(){var e=Object(d.a)(u.a.mark((function e(t,a){var n,i,r,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.allSettled([(s=t,o=a,u=j.getLanguage(),be.a.get(ve,{params:Object(ce.a)(Object(ce.a)({},xe),{},{lat:s,lon:o,lang:u})}).then((function(e){return e.data})).catch((function(e){console.log(e)}))),ke(t,a,j.getLanguage())]);case 2:return n=e.sent,i=Object(l.a)(n,2),r=i[0],c=i[1],e.abrupt("return",{weather:r.value,forecast:c.value});case 7:case"end":return e.stop()}var s,o,u}),e)})));return function(t,a){return e.apply(this,arguments)}}(),Ee=function(){var e=Object(d.a)(u.a.mark((function e(t,a){var n,i,r,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_e();case 2:if(!e.sent){e.next=11;break}return e.next=6,Promise.allSettled([ye(t,a,j.getLanguage()),De(t,a,j.getLanguage())]);case 6:return n=e.sent,i=Object(l.a)(n,2),r=i[0],c=i[1],e.abrupt("return",{weather:r.value,forecast:c.value});case 11:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),Se=Object.freeze({EMPTY:"",PROMPT:"prompt",DENIED:"denied",GRANTED:"granted",ERROR:"error"}),Re=function(){var e=r.a.useState(!0),t=Object(l.a)(e,2),a=t[0],i=t[1],c=r.a.useState(null),s=Object(l.a)(c,2),o=s[0],p=s[1],f=r.a.useState(null),g=Object(l.a)(f,2),b=g[0],O=g[1],v=r.a.useState(Se.EMPTY),w=Object(l.a)(v,2),x=w[0],_=w[1];r.a.useEffect((function(){y()}),[]),r.a.useEffect((function(){N().then()}),[x]);var y=function(){try{navigator.permissions.query({name:"geolocation"}).then((function(e){_(e.state),e.onchange=function(){_(e.state)}}))}catch(e){_(Se.ERROR)}},D=function(){var e=Object(d.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e,t){navigator.geolocation.getCurrentPosition(e,t)}));case 2:if(!(t=e.sent)){e.next=9;break}return e.next=6,Ne(t.coords.latitude,t.coords.longitude);case 6:a=e.sent,p(a.weather),O(a.forecast);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),k=function(){var e=Object(d.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_e();case 2:if(!(t=e.sent)){e.next=9;break}return e.next=6,Ee(t.city,t.country_code);case 6:a=e.sent,p(a.weather),O(a.forecast);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=Object(d.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(x!==Se.GRANTED){e.next=3;break}return e.next=3,D();case 3:if(x!==Se.PROMPT){e.next=8;break}return e.next=6,k();case 6:return e.next=8,D();case 8:if(x!==Se.DENIED&&x!==Se.ERROR){e.next=11;break}return e.next=11,k();case 11:x!==Se.EMPTY&&i(!1);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=function(){N().then()};return r.a.useEffect((function(){return window.addEventListener("focus",E),function(){window.removeEventListener("focus",E)}})),Object(n.jsxs)("div",{className:je.a.container,children:[!o&&!a&&x===Se.DENIED&&Object(n.jsx)(h.a,{severity:"error",children:j.geolocationDisabled}),!o&&!a&&x===Se.PROMPT&&Object(n.jsxs)(h.a,{severity:"info",children:[Object(n.jsx)("strong",{children:j.important})," ".concat(j.geolocationRequest)]}),o&&Object(n.jsx)(pe,{weather:o,forecast:b}),!o&&Object(n.jsx)("div",{style:{display:"flex",justifyContent:"center",position:"relative",top:"50%"},children:Object(n.jsx)(m.a,{})})]})},Te=new f.a({en:{lang:"en",title:"Open Weather"},es:{lang:"es",title:"Clima Libre"}});var Le=function(){return Object(n.jsx)("div",{className:"app",lang:Te.lang,children:Object(n.jsx)(Re,{})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(79);s.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(Le,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[80,1,2]]]);
//# sourceMappingURL=main.ef7766c1.chunk.js.map