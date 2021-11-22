<template>
    <div>
        ButtonCounter:{{count}}

        <button @click="addOne"> Add 1</button>

        <button @click="minOne"> Min 1</button>

    </div>
</template>

<script>
export default {
    name: "Counter",
    data() {
        return {
            count: 0
        }
    },
    methods: {
        addOne() {
            this.count++
        },
        minOne() {
            this.count--
        }
    }
}
</script>