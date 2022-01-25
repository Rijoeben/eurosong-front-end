<template>
  <div class="car-container">
    <button class="button" @click="changeIndex(-1)">Prev Song</button>
    <div v-for="(song, index) in songs" :key="song.id">
      <div class="title" v-if="index == activeIndex">
        {{ song.artist.name }} - {{ song.title }}
        <iframe
          :src="song.spotify"
          width="100%"
          height="380"
          frameBorder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        ></iframe>
      </div>
    </div>  
    <button class="button" @click="changeIndex(1)">Next Song</button>
  </div>
</template>

<script>
export default {
  name: "Carousel",
  props: ["songs", "activeIndex"],
  methods: {
    changeIndex(value) {
      let index = this.activeIndex;

      index += value;

      if (index < 0) {
        index = this.songs.length - 1;
      } else if (index == this.songs.length) {
        index = 0;
      }

      this.$emit("change-index", index);
    },
  },
};
</script>