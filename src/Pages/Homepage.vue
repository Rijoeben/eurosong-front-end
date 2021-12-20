<template>
    <div>
        <h1>Homepagina</h1>

        <button @click="goToPage('game')">Show game</button>
    
        <button @click="goToPage('ranking')">Show ranking</button>

    </div>

    

</template>

<script>
    export default {
    name: "Homepage",
    methods: {
        goToPage(page){
            this.$emit("change-page", page);
        }
    }
}
</script>