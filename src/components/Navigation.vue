<template>
    <nav class="c-nav" v-bind:id="id">
        <span>
            {{CompanyName}}
        </span>
        <span v-html="htmlTest"></span>
      <ul class="c-nav-list">
        <li class="c-nav-list-item" v-for="(link, index) in link" v-bind:key="index">
             <a v-bind:href="link.linkUrl" v-bind:target="link.target">
            {{link.linkText}}
        </a>
        </li>
      </ul>
    </nav>   
</template>

<script>
    export default{
        name: "Navigation",
        data() {
            return {
                CompanyName: "Eurovision festival",
                htmlTest: "<h1> Eursong </h1>",
                id: "main-navigation",
                link: [
                    {
                        linkText: "Home",
                        linkUrl: "/home",
                        target: "_blank"
                    },
                    {
                        linkText: "Shop",
                        linkUrl: "/shop",
                        target: "_blank"
                    }
                ]            
            }
        }
    }
    
</script>