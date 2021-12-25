<template>
  <div>
    <div
      class="ranking"
      @mouseover="onhover = false"
      @mouseleave="onhover = true"
    >
      <div :class="{ songActive: !onhover }">{{ index + 1 }}</div>
      <div class="result" :class="{ songActive: onhover }">
        {{ song.results }}
      </div>
    </div>
    <div>
      <iframe
        :src="song.spotify"
        width="100%"
        height="75px"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: "Ranking",
  props: ["song", "index"],
  data() {
    return {
      onhover: true,
    };
  },
};
</script>