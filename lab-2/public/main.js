webpackJsonp([1],{13:function(a,e,t){"use strict";var i=s(t(1)),o=t(8),n=s(t(25));function s(a){return a&&a.__esModule?a:{default:a}}(0,o.render)(i.default.createElement(n.default,null),document.getElementById("root"))},25:function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function a(a,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(a,i.key,i)}}return function(e,t,i){return t&&a(e.prototype,t),i&&a(e,i),e}}(),o=t(1),n=l(o),s=(t(8),l(t(26))),r=l(t(27)),m=l(t(28));t(29);var c=l(t(31));function l(a){return a&&a.__esModule?a:{default:a}}var u=function(a){function e(a){!function(a,e){if(!(a instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var t=function(a,e){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?a:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,a));return t.updateData=function(a){t.setState({data:a})},t.updateActiveUser=function(a){t.setState({active:a-1})},t.state={originalData:c.default,data:c.default,active:null},console.log(t.state.data[0]),t}return function(a,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);a.prototype=Object.create(e&&e.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(a,e):a.__proto__=e)}(e,o.Component),i(e,[{key:"render",value:function(){return n.default.createElement("div",{className:"main"},n.default.createElement("div",{className:" main__left-content"},n.default.createElement(m.default,{originalData:this.state.originalData,data:this.state.data,updateData:this.updateData.bind(this)}),n.default.createElement(s.default,{data:this.state.data,updateActive:this.updateActiveUser.bind(this)})),n.default.createElement("div",{className:" main__right-content"},n.default.createElement(r.default,{activeUser:this.state.originalData[this.state.active]})))}}]),e}();e.default=u},26:function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,o=t(1),n=(i=o)&&i.__esModule?i:{default:i};e.default=function(a){var e=a.data,t=a.updateActive,i=function(a){t(a.target.getAttribute("index")),a.preventDefault()};return n.default.createElement("ul",{className:"data-list"},e.map(function(a,e){return n.default.createElement("li",{index:a.id,onClick:i,className:"data-list__content",key:a.id},a.name)}))}},27:function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,o=t(1),n=(i=o)&&i.__esModule?i:{default:i};e.default=function(a){var e=a.activeUser;return e?n.default.createElement("div",{className:"active-user"},n.default.createElement("img",{src:e.avatar}),n.default.createElement("p",null,e.name),n.default.createElement("p",null,e.email),n.default.createElement("p",null,e.phone)):n.default.createElement("p",null,"Пользователь не выбран")}},28:function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,o=t(1),n=(i=o)&&i.__esModule?i:{default:i};e.default=function(a){var e=a.originalData,t=(a.data,a.updateData);return n.default.createElement("input",{type:"text",className:"search",onChange:function(a){var i=a.target.value.toLowerCase();if(""===i)t(e);else if(-1!==i.indexOf(":")){var o=i.slice(0,i.indexOf(":"));if(o in e[0]){var n=i.slice(i.indexOf(":")+1),s=e.filter(function(a){return a[o].toLowerCase().includes(n)});t(s)}}else{var r=e.filter(function(a){return a.name.toLowerCase().includes(i)});t(r)}a.preventDefault()},placeholder:"Введите текст для поиска..."})}},29:function(a,e){},31:function(a,e){a.exports=[{id:"1",name:"Walter Cronin",avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/yalozhkin/128.jpg",email:"Vivienne.Lehner73@gmail.com",phone:"(586) 857-5058"},{id:"2",name:"Ellis Schuppe",avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/danro/128.jpg",email:"Lori.Pacocha15@yahoo.com",phone:"141-042-3116"},{id:"3",name:"Anita Kovacek III",avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/mrmartineau/128.jpg",email:"Alex_Howell89@hotmail.com",phone:"1-622-630-7443 x3466"},{id:"4",name:"Dr. Maynard Kessler",avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/patrickcoombe/128.jpg",email:"Wilmer83@hotmail.com",phone:"(697) 001-9239 x1212"},{id:"5",name:"Cecelia Goldner",avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/gauravjassal/128.jpg",email:"Serenity19@yahoo.com",phone:"879.361.3043 x4550"},{id:"6",name:"Myrtle MacGyver",avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/arpitnj/128.jpg",email:"Reginald.Schinner25@gmail.com",phone:"1-943-899-6905 x1318"},{id:"7",name:"Godfrey Stiedemann",avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/felipeapiress/128.jpg",email:"Oliver_Lindgren27@yahoo.com",phone:"(686) 023-1649"},{id:"8",name:"Judson Krajcik",avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/vitor376/128.jpg",email:"Skyla32@hotmail.com",phone:"753-812-5251 x9340"},{id:"9",name:"Renee Bartoletti",avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/dgclegg/128.jpg",email:"Ted_Boehm90@gmail.com",phone:"1-004-143-2942"},{id:"10",name:"Tyrell Dare",avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/bowbrick/128.jpg",email:"Krystel.Wiegand@gmail.com",phone:"1-107-023-1605 x5207"},{id:"11",name:"Glen Robel",avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/elbuscainfo/128.jpg",email:"Phoebe_Kunde@yahoo.com",phone:"1-631-203-9310"},{id:"12",name:"Jarvis Littel MD",avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/muridrahhal/128.jpg",email:"Melvin77@hotmail.com",phone:"1-551-273-3758"},{id:"13",name:"Ariel Spencer",avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/victorDubugras/128.jpg",email:"Ernesto_Bartell@yahoo.com",phone:"1-783-410-0777 x143"},{id:"14",name:"Americo Hoppe",avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/antonyzotov/128.jpg",email:"Leslie.Hauck@gmail.com",phone:"(720) 130-1456 x73616"},{id:"15",name:"Lori Goldner",avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/petrangr/128.jpg",email:"Sasha.Konopelski@gmail.com",phone:"1-335-716-0772 x325"},{id:"16",name:"Braulio Dooley",avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/madebyvadim/128.jpg",email:"Zander5@hotmail.com",phone:"1-887-970-0662 x8809"},{id:"17",name:"Ashley Brekke",avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/josevnclch/128.jpg",email:"Rosemarie_Keeling@gmail.com",phone:"823.218.8878"},{id:"18",name:"Rosetta Wolff",avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/dc_user/128.jpg",email:"Jamir_Collins@gmail.com",phone:"620-695-8894 x61471"},{id:"19",name:"Enos Kling IV",avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/motionthinks/128.jpg",email:"Ian.Kuhlman41@hotmail.com",phone:"587-590-0979 x44689"},{id:"20",name:"Terrence Adams",avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/miguelkooreman/128.jpg",email:"Asa11@yahoo.com",phone:"392.284.1372 x30233"},{id:"21",name:"Bo Grimes",avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/miguelmendes/128.jpg",email:"Rachelle93@hotmail.com",phone:"154.926.5984 x7187"},{id:"22",name:"Rosalee Feest",avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/aleinadsays/128.jpg",email:"Tierra69@hotmail.com",phone:"1-621-096-3789 x22290"},{id:"23",name:"Jalyn Rutherford DVM",avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/ssiskind/128.jpg",email:"Curt.Pagac32@yahoo.com",phone:"1-418-654-8643 x667"},{id:"24",name:"Asa Hansen",avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/xravil/128.jpg",email:"Angus.Rowe@gmail.com",phone:"534.089.9514 x03317"},{id:"25",name:"Oleta O'Reilly",avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/bu7921/128.jpg",email:"Zechariah_Kozey55@gmail.com",phone:"323-097-6608"},{id:"26",name:"Lazaro Swift",avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/de_ascanio/128.jpg",email:"Felipe.Rohan@yahoo.com",phone:"263-457-7477"},{id:"27",name:"Ms. Jessika Bode",avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/illyzoren/128.jpg",email:"Kaylah_Abbott@hotmail.com",phone:"1-822-977-3830"},{id:"28",name:"Jayme Heller",avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/abdulhyeuk/128.jpg",email:"Reinhold_Huel@gmail.com",phone:"842.287.0567 x3095"},{id:"29",name:"Douglas Tillman",avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/damenleeturks/128.jpg",email:"Rogers.Jaskolski@hotmail.com",phone:"1-798-895-6975"},{id:"30",name:"Kendall Watsica",avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/_kkga/128.jpg",email:"Dax_Ernser82@gmail.com",phone:"911.041.8750 x483"},{id:"31",name:"Marley Nolan",avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/sircalebgrove/128.jpg",email:"Bettie.Goyette19@hotmail.com",phone:"417.173.7309 x04139"},{id:"32",name:"Caleb Renner",avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg",email:"Oda_Torphy@yahoo.com",phone:"(137) 641-8693 x661"},{id:"33",name:"Cletus Conroy",avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/alessandroribe/128.jpg",email:"Tristin.Thiel@hotmail.com",phone:"394.761.3777"},{id:"34",name:"Casper Rippin",avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/jakemoore/128.jpg",email:"Tracey_Kuvalis72@hotmail.com",phone:"223.952.6265"},{id:"35",name:"Gracie VonRueden",avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/timgthomas/128.jpg",email:"Brianne.Hettinger32@hotmail.com",phone:"1-875-788-8121 x5983"},{id:"36",name:"Lilyan Toy",avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/danillos/128.jpg",email:"Lafayette_Brakus@yahoo.com",phone:"(178) 011-5969 x657"},{id:"37",name:"Aurelia Tromp",avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/brajeshwar/128.jpg",email:"Raven32@yahoo.com",phone:"206-239-2111 x929"},{id:"38",name:"Citlalli O'Hara",avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/petebernardo/128.jpg",email:"Shanelle.Jacobi13@hotmail.com",phone:"(993) 148-6585"},{id:"39",name:"Bo Hamill",avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/reideiredale/128.jpg",email:"Christian51@yahoo.com",phone:"087-082-7239 x335"},{id:"40",name:"Mrs. Mario Wisoky",avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/jayrobinson/128.jpg",email:"Wilbert78@yahoo.com",phone:"633-185-0735 x464"},{id:"41",name:"Marques Gibson",avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/muringa/128.jpg",email:"Erwin78@gmail.com",phone:"1-484-085-3170"}]}},[13]);