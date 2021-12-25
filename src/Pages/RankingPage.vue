<template>
  <div>
    <div class="ranks">
      <ul>
        <Ranking class="rankingComp" v-for="(song,index) in songs" :key="index" :song="song" :index="index"/>
      </ul>
    </div>
    
  </div>
</template>

<script>
import Ranking from "../components/Ranking.vue";
import Navigation from "../components/Navigation.vue"
export default {
  name: "RankingPage",
  components: {
    Ranking,
    Navigation
  },
  data() {
    return {
      songs: [],
      onhover: false
    };
  },
  methods: {
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