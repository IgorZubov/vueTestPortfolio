<template>
    <v-container fluid class='ma-0 portfolio' id='portfolio'>
        <h2>
            Немного о CSS
        </h2>
        <v-container fluid class="projects pa-4">
            <v-row align="center"
                justify="center">
                <v-column columns='12' sm='6'>
                    <youtube :video-id="videoId" :player-vars="playerVars" @playing="playing"></youtube>
                 </v-column>
            </v-row>
         </v-container>
    </v-container>
</template>

<script>
    export default { 
    name: 'portfolio ',components: {

    } ,
    mounted(){
        
    },
    data () {
        return {
            videoId: 'X_ZaMq8YMmw',
            playerVars: {
                autoplay: 0
            }
        }
    },
   methods:{
        icon_path(tech){
            console.log(tech)
                return require(`../assets/${tech.toLowerCase()}.png`)
        },
        playing() {
            console.log('we are watching!!!')
        }
    },
}    
</script>

<style scoped>

.projects{
    margin:auto;
    padding: 5%;
    text-align: center;
    overflow: hidden;
}

.project{
  width: 30vw;
  min-width:25rem;
  height:auto;
  margin:2%;
  margin-left:12px;
  margin-right:12px;

}


.portfolio>h2{
    text-transform: uppercase;
    font-weight: bold;
    color:var(--accent-color);
    padding-block:10;
    text-align: center;
    padding-block: 6%;
    font-size:2em;   
}


.card-reveal{
    opacity: 0.85;
}
#description{
  font-size: 18px;
}
#project_name{
 font-size:28px;
}

.tech-icons{
    position: absolute;
    
    justify-content: space-around;
    padding:1px;
    margin:2px;
    bottom: 0px;

}
</style>
