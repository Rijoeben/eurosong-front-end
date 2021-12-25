<template>
  <div>
    <nav>
      <ul>
        <li :class="{active: homeActive}" data-xcoord="0px" @click="goToPage('home')">Home</li>
        <li :class="{active: gameActive}" data-xcoord="160px" @click="goToPage('game')">
          Game
        </li>
        <li :class="{active: rankingActive}" data-xcoord="320px" @click="goToPage('ranking')">Ranking</li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  data() {
    return {
        homeActive: true,
        gameActive: false,
        rankingActive: false
    };
  },
  methods: {
    goToPage(page) {
        this.homeActive = false
        this.gameActive = false
        this.rankingActive = false;
        if(page == "home"){
            this.homeActive = true
        }else if(page == "game"){
            this.gameActive = true
        }else if(page == "ranking"){
            this.rankingActive = true
        }
      this.$emit("change-page", page);
    },
  },
};
</script>