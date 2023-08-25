<template>
    <div class="banner d-flex flex-column justify-center align-items-center  ">
          
          <div class="intro">
            <p class="ma-0 pa-0">Wizard of the 10101</p>
            <h1 class="heading ma-0 pa-0 "> I am Igor </h1>
            <h2 class="secondary-text"> Let me show you <span> how </span> I can help you become a Wizard </h2>
            <v-btn color="accent" outlined class="btn my-8"
                href="https://github.com/IgorZubov/vueTestPortfolio"
                target="_blank">
                Sorce code is here 
            </v-btn>
          </div>
    </div>
</template>


<script>
export default {
    name:"banner"
}
</script>


<style lang="scss" >
     .banner {
        text-align: left;
        height:100vh;
        width:100vw;
        background-color: var(--main-bg-color);
        padding: 10%;
    }
    
    .intro{
       
        p {
            margin-left: 10px; 
            padding: 0;
            font-size: 1.5em ;
            font-weight: bold;
            color :var(--dark-accent) ;
        };

        span{
            color : var(--dark-accent);
        }

        .btn{
            color: var(--gray);
        }

      
        .secondary-text{
            color: var(--gray) ;
        }

        .heading {
            margin:0px; 
            padding: 0px;
            font-size: 4em ;
            color : var(--highlight-color);
        }

    }


</style>