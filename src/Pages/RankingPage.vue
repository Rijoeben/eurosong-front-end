<template>
  <div>
    <div name="Nav">
      <section>
        <nav>
          <ul>
            <li data-xcoord="0px" @click="goToPage('home')">Home</li>
            <li data-xcoord="160px" @click="goToPage('game')">Game</li>
            <li data-xcoord="320px" class="active" @click="goToPage('ranking')">
              Ranking
            </li>
          </ul>
        </nav>
      </section>
    </div>

    <div class="ranks">
      <ul>
        <li v-for="(song,index) in songs" :key="index">
          <div class="ranking" @mouseover="song.visible=true" @mouseleave="song.visible=false">{{index +1 }} <div :class="{points: song.visible}">{{ song.results }} </div></div>
         <!-- <div>{{ song.title }}</div>
          <div>{{ song.artist.name }}</div> -->
          <div><iframe
          :src="song.spotify"
          width="100%"
          height="75px"
          frameBorder="0" 
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        ></iframe></div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Ranking from "../components/Ranking.vue";
export default {
  name: "RankingPage",
  data() {
    return {
      songs: [],
      onhover: false
    };
  },
  methods: {
    goToPage(page) {
      this.$emit("change-page", page);
    },
    fetchSongs() {
      const url = "http://webservies.be/eurosong/Songs";

      fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((songs) => {
          this.fetchArtists(songs);
        });
    },
    fetchArtists(songs) {
      const url = "http://webservies.be/eurosong/Artists";

      fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((artists) => {
          // loop over alle songs
          songs.map((song) => {
            const artist = artists.find((artists) => artists.id == song.artist);

            song.artist = artist;

            return song;
          });

          //change data off songs
          this.FillPoint(songs);
          //                   this.songs = songs;
        });
    },
    FillPoint(songs) {
      let counter = 0;
      songs.forEach((song, index) => {
        let url = "http://webservies.be/eurosong/Songs/" + song.id + "/points";

        fetch(url)
          .then((response) => {
            return response.text();
          })
          .then((points) => {
            counter++;
            song.results = parseInt(points);

            if (counter == songs.length) {
              this.songs = songs;
            }
          })
          .then(()=> {
              this.songs.sort(function(a, b) {
                    return b.results - a.results;
                });
                console.log(this.songs)
          })
      });
    },
  },
  mounted() {
    this.fetchSongs();
  },
};
</script>