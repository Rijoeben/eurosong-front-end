import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')



// var firstname = "Collin";
// var name = "Van der Vorst";

// for (var i = 0 ; i < 10; i++) {
//   console.log(i)
// }

// let firstname = "Ruben";
// firstname = "Rijoeben";
// console.log(firstname);

// // let firstname = "Ruben";
// // let lastname = "Laureys";
// // let fullname = `${firstname} ${lastname}`;

// console.log(fullname)

// ES5
// var person = {
//   firstname: "Ruben",
//   name: "Laurys",
//   sayFullname: function(){
//     console.log(this.firstname + " " + this.name);
//   }
// };

// person.sayFullname();

//ES6
let person = {
  firstname: `Ruben`,
  name: `laureys`,
  sayFullname(){
    console.log(`${this.firstname} ${this.name}`)
  }
};

person.sayFullname();