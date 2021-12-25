<template>
  <div>
    <div class="carousel">
      <Carousel
        :songs="songs"
        :activeIndex="activeSongIndex"
        @change-index="ChangeActiveSongIndex"
      />
    </div>
    <div class="points">
      <div v-for="(vote, index) in votes" :key="index">
        <button class="button" @click="addVote(vote.points)" v-if="!vote.isVoted">
          Add {{ vote.points }} points
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Carousel from "../components/Carousel.vue";
export default {
  name: "Gamepage",
  components: {
    Carousel
  },
  data() {
    return {
      songs: [],
      activeSongIndex: 0,
      votes: [
        {
          points: 1,
          isVoted: false,
        },
        {
          points: 2,
          isVoted: false,
        },
        {
          points: 4,
          isVoted: false,
        },
        {
          points: 8,
          isVoted: false,
        },
      ],
    };
  },
  mounted() {
    //get all songs
    this.fetchSongs();
  },
  methods: {
    //data methods
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
          this.songs = songs;
        });
    },
    ChangeActiveSongIndex(index) {
      this.activeSongIndex = index;
    },
    addVote(points) {
      let votes = this.votes;

      votes.map((vote) => {
        if (vote.points == points) {
          vote.isVoted = true;
        }
        return vote;
      });
      //Send to api
      this.postVote(points);

      let activeVotes = votes.filter((vote) => vote.isVoted == true);
      console.log(activeVotes);

      // if every thing is voted
      if (activeVotes.length == votes.length) {
        this.goToPage("ranking");
      }
    },
    postVote(points) {
      const songId = this.songs[this.activeSongIndex].id;
      const url = "http://webservies.be/eurosong/Votes";

      fetch(url, {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain",
          "Content-Type": "application/json;charset=UTF-8",
        },
        body: JSON.stringify({
          songID: songId,
          points: points,
        }),
      })
        .then((response) => {
          return response.json();
        })
        .then((result) => {
          console.log(result);
        });
    },
  },
};
</script>