(this.webpackJsonpclimalibre2=this.webpackJsonpclimalibre2||[]).push([[0],{36:function(e,t,a){e.exports=a.p+"static/media/cloudy-sky.d56cf3ed.jpg"},37:function(e,t,a){e.exports=a.p+"static/media/drizzle.c6679dc6.jpg"},38:function(e,t,a){e.exports=a.p+"static/media/fog.cac8ace4.jpg"},39:function(e,t,a){e.exports=a.p+"static/media/rainy-day.1e31577d.jpg"},40:function(e,t,a){e.exports=a.p+"static/media/snow.272d8b9d.jpg"},41:function(e,t,a){e.exports=a.p+"static/media/storm.a1438dce.jpg"},42:function(e,t,a){e.exports=a.p+"static/media/sunny.5f43ef67.jpg"},43:function(e,t,a){e.exports=a.p+"static/media/default.95dc7bcb.jpg"},44:function(e,t,a){e.exports=a.p+"static/media/covered.99c596e5.jpg"},51:function(e,t,a){e.exports=a(83)},56:function(e,t,a){},57:function(e,t,a){},83:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(10),i=a.n(r),c=(a(56),a(57),a(13)),s=a(32),l=new(a.n(s).a)({en:{loading:"Loading...",humidity:"Humidity",wind:"Wind",important:"Important!",geolocationRequest:"We need your location to provide you the local weather.",north:"North",northEast:"Northeast",east:"East",southEast:"Southeast",south:"South",southWest:"Southwest",west:"West",northwest:"Northwest",station:"Station"},es:{loading:"Cargando...",humidity:"Humedad",wind:"Viento",important:"\xa1Importante!",geolocationRequest:"Necesitamos su ubicacion para poder brindarle el clima local.",north:"Norte",northEast:"Noreste",east:"Este",southEast:"Sudeste",south:"Sur",southWest:"Sudoeste",west:"Oeste",northwest:"Noroeste",station:"Estaci\xf3n"}}),u=a(21),m=a.n(u),d=a(33),p=a(34),h=a(35),g=a(22),f=a.n(g),E=function(){function e(){Object(p.a)(this,e)}return Object(h.a)(e,null,[{key:"getWeather",value:function(){var e=Object(d.a)(m.a.mark((function e(t,a,n){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get(this.WEATHER,{headers:this.HEADERS,params:{appid:"bb08096af050f2bd4c2b401249b14e27",units:"metric",lat:t,lon:a,lang:n}}).then((function(e){return e.data}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));return function(t,a,n){return e.apply(this,arguments)}}()},{key:"instance",value:function(e,t,a){return f.a.create({baseURL:"https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather",headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Credential":"true","Access-Control-Allow-Methods":"GET"},params:{appid:"bb08096af050f2bd4c2b401249b14e27",units:"metric",lat:e,lon:t,lang:a}})}}]),e}();E.WEATHER="https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather",E.HEADERS={"Access-Control-Allow-Origin":"*","Access-Control-Allow-Credential":"true","Access-Control-Allow-Methods":"GET"};var w=a(107),b=a(110),v=a(112),y=a(114),x=a(109),A=a(111),S=a(36),k=a.n(S),j=a(37),W=a.n(j),C=a(38),F=a.n(C),R=a(39),O=a.n(R),z=a(40),N=a.n(z),B=a(41),H=a.n(B),T=a(42),q=a.n(T),I=a(43),G=a.n(I),M=a(44),L=a.n(M),P=function(e){var t=e.weather,a=o.a.useState(""),n=Object(c.a)(a,2),r=n[0],i=n[1];o.a.useEffect((function(){i(u())}),[e.weather]);var s,u=function(){if(!t)return null;var e=t.weather[0].id;switch((""+e)[0]){case"2":return H.a;case"3":return W.a;case"5":return O.a;case"6":return N.a;case"7":return F.a;case"8":return 800===e||801===e?q.a:802===e||803===e?k.a:L.a;default:return G.a}},m={heightSmall:{height:"15px"},heightMedium:{height:"28px"},temp:{fontSize:"42pt",fontWeight:"bold",verticalAlign:"middle"},middle:{verticalAlign:"middle"},capitalize:{textTransform:"capitalize",fontWeight:"bold"},component:{background:"rgba(245,245,245, .75)",padding:"60px 0 60px 0",borderRadius:"5px"},main:{width:"100%",height:"100%",align:"center",textAlign:"center",backgroundImage:r?"url(".concat(r,")"):"",backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"}};return o.a.createElement("div",{style:m.main},t?o.a.createElement(w.a,{style:m.main},o.a.createElement(x.a,{style:{height:"100%"}},o.a.createElement(b.a,null,o.a.createElement(A.a,{container:!0},o.a.createElement(A.a,{item:!0,xs:1,sm:3,md:4,xl:5}),o.a.createElement(A.a,{item:!0,xs:10,sm:6,md:4,xl:2},o.a.createElement(A.a,{container:!0,direction:"column",justify:"center",alignItems:"center",style:m.component},o.a.createElement(A.a,{item:!0},o.a.createElement(A.a,{container:!0,spacing:2},o.a.createElement(A.a,{item:!0},o.a.createElement(v.a,{variant:"h4",style:m.temp},o.a.createElement("img",{alt:"",src:"https://openweathermap.org/img/w/".concat(t.weather[0].icon,".png")}),parseFloat(t.main.temp).toFixed(0)+"\xb0C")),o.a.createElement(A.a,{item:!0},o.a.createElement(A.a,{container:!0,direction:"column",style:{marginTop:"10px"}},o.a.createElement(A.a,{item:!0,style:{fontSize:"16pt"}},parseFloat(t.main.temp_max).toFixed(0)+"\xb0"),o.a.createElement(A.a,{item:!0,style:{fontSize:"16pt"}},parseFloat(t.main.temp_min).toFixed(0)+"\xb0"))))),o.a.createElement(A.a,{item:!0},o.a.createElement(v.a,{variant:"h6",gutterBottom:!0,style:m.capitalize},t.weather[0].description)),o.a.createElement(A.a,{item:!0},o.a.createElement(v.a,{variant:"body1",gutterBottom:!0},l.humidity,": ",o.a.createElement("strong",null,parseFloat(t.main.humidity).toFixed(0)+"%"))),o.a.createElement(A.a,{item:!0},o.a.createElement(v.a,{variant:"body1",gutterBottom:!0},l.wind,": ",o.a.createElement("strong",null,parseFloat(t.wind.speed).toFixed(0)+" km/h "+(s=t.wind.deg,[l.north,l.northEast,l.east,l.southEast,l.south,l.southWest,l.west,l.northwest,l.north][parseFloat(s%360/45).toFixed(0)])))),o.a.createElement(A.a,{item:!0},o.a.createElement(v.a,{color:"textSecondary",gutterBottom:!0},t.name)))),o.a.createElement(A.a,{item:!0,xs:1,sm:3,md:4,xl:5}))))):o.a.createElement(y.a,null))},D=a(113),J=function(e){var t=o.a.useState(null),a=Object(c.a)(t,2),n=a[0],r=a[1],i=o.a.useState(null),s=Object(c.a)(i,2),u=s[0],m=s[1],d=o.a.useState(!1),p=Object(c.a)(d,2),h=p[0],g=p[1];o.a.useEffect((function(){navigator.geolocation||console.log("Geolocation is not available"),navigator.permissions.query({name:"geolocation"}).then((function(e){w(e),e.onchange=function(){return w(e)}}))}),[]);var f=function(e,t){E.getWeather(e,t,l.getLanguage()).then((function(e){return r(e)})).catch((function(e){m(e.message),console.log(e)}))},w=function(e){switch(e.state){case"denied":g(!1),m(l.geolocationRequest);break;case"granted":g(!1),navigator.geolocation.getCurrentPosition((function(e){return f(e.coords.latitude,e.coords.longitude)}));break;case"prompt":g(!0)}};return o.a.createElement("div",{onClick:function(){navigator.geolocation?navigator.geolocation.getCurrentPosition((function(e){return f(e.coords.latitude,e.coords.longitude)})):console.log("Geolocation is not available")},style:{height:"100%",width:"100%"}},u&&o.a.createElement(D.a,{severity:"error"},u),h&&!u&&o.a.createElement(D.a,{severity:"info"},o.a.createElement("strong",null,l.important)," "+l.geolocationRequest),o.a.createElement(P,{weather:n}))};var _=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(J,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(82);i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(_,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[51,1,2]]]);
//# sourceMappingURL=main.8f30e23c.chunk.js.map