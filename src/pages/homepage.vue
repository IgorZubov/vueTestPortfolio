<template>
    <v-container fluid class='homepage ma-0 pa-0' app >
        <navigation id='nav'></navigation>
        <banner/>
        <about/>
        <portfolio></portfolio>
    </v-container>
</template>

<script>
    import banner from "../components/banner.vue"
    import about from "../components/about.vue"
    import portfolio from '../components/portfolio.vue'
    import navigation from '../components/navigation.vue'
    
    export default { 
        name: 'homepage',components: {
            navigation,
            banner,
            about,
            portfolio,
        } 
    }  
      
</script>

<style scoped >
#nav{
    position: fixed;
    z-index: 4;
}


</style>
