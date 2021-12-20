<template>
    <div>
        <button @click="goToPage('home')"> Go to home</button>
        <h1>Ranking</h1>
        <div>
            <ul>
                <li v-for="song in songs" :key="song.id">
                    <div>{{ song.title }}</div>
                    <div>{{song.artist.name}}</div>
                    <div>{{song.results}}</div>
                </li>
            </ul>
            
        </div>
    </div>

    

</template>

<script>
    import Ranking from "../components/Ranking.vue"
    export default {
    name: "RankingPage",
    data(){
        return{
            songs: []
        }
    },
    methods: {
        goToPage(page){
            this.$emit("change-page", page);
        },
        fetchSongs(){
            const url = "http://webservies.be/eurosong/Songs";

            fetch(url)
                .then((response) => {
                return response.json();
            })
                .then((songs) => {
                    this.fetchArtists(songs);
                });

        },
        fetchArtists(songs){
             const url = "http://webservies.be/eurosong/Artists";

            fetch(url)
                .then((response) => {
                    return response.json();
                })
                .then((artists) => { 
                    // loop over alle songs
                    songs.map((song) => {
                        const artist = artists.find((artists) => artists.id == song.artist)
                        
                        song.artist = artist;

                        return song;
                    })               

                    //change data off songs
                    this.FillPoint(songs);
//                   this.songs = songs;

                })
        },
        FillPoint(songs){
            
            songs.map((song) => {
                let url = "http://webservies.be/eurosong/Songs/"+ song.id + "/points"

                fetch(url)
                    .then((response) => {
                        return response.text();
                    })
                    .then((points)=>{
                        song.results = parseInt(points);
                        return song;
                    })
            })
                    this.songs = songs;
                   
            
            
            
        },
    },
    mounted(){
        this.fetchSongs()
    }
}
</script>