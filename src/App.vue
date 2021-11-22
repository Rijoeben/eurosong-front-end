<template>
  <div id="app">
    <Navigation/>
    <h1>Euroson Festival</h1>
    
    <Feedback v-for="(message,index) in messages" :key = "index" :message="message.messages" :classType="message.classType" />

    <Counter/>

    <button @click="addMessage">
      Add message
    </button>
    

  </div>
</template>

<script>
//Belangrijk om de juiste file te importen anders werkt het niet 
import style from './scss/style.scss';

import Navigation from "./components/Navigation.vue"
import Counter from "./components/Counter.vue"
import Feedback from "./components/Feedback.vue"

export default {
  name: 'App',
  components:{
    Navigation,
    Counter,
    Feedback
  },
  data() {
    return {
      messages: [
        {
          messages: "Error, tis kapot",
          classType: "warning"
        },
        {
          messages: "Great succes",
          classType: "succes"
        }
      ]
    }
  },
   methods:{
     addMessage() {
       this.messages.push(
         {
           messages: "Alle nieuwe feeback",
           classType: "succes"
         }
       )
     }

    }
}
</script>

