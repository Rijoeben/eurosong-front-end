<template>
  <div>
    <div name="Nav">
      <section>
        <nav>
          <ul>
            <li data-xcoord="0px" class="active" @click="goToPage('home')">Home</li>
            <li data-xcoord="160px" @click="goToPage('game')">Game</li>
            <li data-xcoord="320px" @click="goToPage('ranking')">Ranking</li>
          </ul>
        </nav>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "Homepage",
  methods: {
    goToPage(page) {
      this.$emit("change-page", page);
    },
  },
};
</script>