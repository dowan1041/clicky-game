(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e){e.exports=[{id:1,image:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png",clickedPic:!1},{id:2,image:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png",clickedPic:!1},{id:3,image:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png",clickedPic:!1},{id:4,image:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/025.png",clickedPic:!1},{id:5,image:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/079.png",clickedPic:!1},{id:6,image:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/129.png",clickedPic:!1},{id:7,image:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/133.png",clickedPic:!1},{id:8,image:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/149.png",clickedPic:!1},{id:9,image:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/151.png",clickedPic:!1},{id:10,image:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/152.png",clickedPic:!1},{id:11,image:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/155.png",clickedPic:!1},{id:12,image:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/158.png",clickedPic:!1}]},,,,,,,,function(e,t,a){e.exports=a(21)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(3),s=a.n(i),o=(a(15),a(4)),r=a(5),l=a(7),m=a(6),d=a(8),p=(a(16),function(e){return c.a.createElement("div",{className:"card",value:e.id,onClick:function(){return e.handleClick(e.id)}},c.a.createElement("div",{className:"img-container"},c.a.createElement("img",{alt:e.name,src:e.image})))}),u=(a(17),function(e){return c.a.createElement("nav",null,c.a.createElement("ul",null,c.a.createElement("li",{className:"brand animated lightSpeedIn"},c.a.createElement("a",{href:"/clicky-game/"}," ",e.title," ")),c.a.createElement("li",{id:"msg"},e.message),c.a.createElement("li",{id:"currentScore"},"Current Score: ",e.score),c.a.createElement("li",{id:"highScore"},"Top Score: ",e.topScore)))}),g=(a(18),function(e){return c.a.createElement("div",{className:"wrapper"},e.children)}),h=(a(19),function(e){return c.a.createElement("h1",{className:"title"},e.children)}),k=a(1),f=(a(20),function(e){return c.a.createElement("div",{className:"container".concat(e.fluid?"-fluid":"")}," ",e.children," ")}),E=function(e){return c.a.createElement("div",{className:"row".concat(e.fluid?"-fluid":"")}," ",e.children," ")},v=function(e){var t=e.size.split("").map(function(e){return"col-"+e}).join("");return c.a.createElement("div",{className:t},e.children)};var S=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={pictures:k,score:0,topScore:0,clickedPic:[],message:"Click an image to begin"},a.handleClick=function(e){-1===a.state.clickedPic.indexOf(e)?(a.handleIncrement(),a.setState({clickedPic:a.state.clickedPic.concat(e)})):a.handleReset()},a.handleIncrement=function(){var e=a.state.score+1;a.setState({score:e,message:"You guessed correctly, you got a point."}),e>=a.state.topScore&&a.setState({topScore:e,message:"You guessed correctly, you got a high score."}),a.handleRandom()},a.handleReset=function(){a.setState({score:0,topScore:a.state.topScore,message:"You guessed wrong, try again!",clickedPic:[]}),a.handleRandom()},a.handleRandom=function(){var e=function(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),n=[e[a],e[t]];e[t]=n[0],e[a]=n[1]}return e}(k);a.setState({pictures:e})},a}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement(g,null,c.a.createElement(u,{title:"Clicky Game",score:this.state.score,topScore:this.state.topScore,message:this.state.message}),c.a.createElement(h,null,"Click on an image to earn points, but do not click on any more than once!"),c.a.createElement(f,null,c.a.createElement(E,null,this.state.pictures.map(function(t){return c.a.createElement(v,{size:"md-3 sm-6"},c.a.createElement(p,{key:t.id,handleClick:e.handleClick,handleIncrement:e.handleIncrement,handleReset:e.handleReset,handleRandom:e.handleRandom,id:t.id,image:t.image}))}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(c.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.e90e6b82.chunk.js.map