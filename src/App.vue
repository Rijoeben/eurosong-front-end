<template>
  <div id="app">
    <div name="Nav">
      <section>
        <Navigation @change-page="goToPage" />       
      </section>
    </div>

    <!-- HOME -->
    <Homepage v-if="page == 'home'" @change-page="goToPage" />

    <!-- GAME -->
    <Gamepage v-if="page == 'game'" @change-page="goToPage" />

    <!-- RANKING = Taak -->
    <RankingPage v-if="page == 'ranking'" @change-page="goToPage" />
  </div>
</template>

<script>
import Homepage from './Pages/Homepage.vue';
import Gamepage from './Pages/Gamepage.vue';
import RankingPage from './Pages/RankingPage.vue';
import Navigation from "./components/Navigation.vue"

//import of whole style for the app
import style from "./scss/style.scss";
//import Navigation from "./components/navigation.vue"
export default {
  name: 'App',
  components:{
    Homepage,
    Gamepage,
    RankingPage,
    Navigation
  },
  data() {
      return {
      page: "home"
    }
  },
  methods: {
    goToPage(page) {
      this.page = page;
    }
  }
}
</script>