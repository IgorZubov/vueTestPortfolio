<template>
    <div id="about"> 
      <v-row>
          <v-col class="col-xs-12">
            <h2> ABOUT ME</h2>
            <p> Привет! Меня зовут Игорь и я разработчик всякого. Программирование для меня не просто хобби, это профессия.</p>
            <p> Все началось с компьютерных игр. Я всегда интересовался, как создаются такие вещи и как <b>Я</b> могу создавать их. </p>
            <p> Создание программы с нуля - это особый вид творчества, в котором ты можешь делать акценты на том, что тебе интересно:</p>
            <p> хочешь наводить красоту? - пожалйуста. алгоритмы и данные? - без проблем. Это мир с понятными и явными ограничениями,</p>
            <p> которые ты можешь использовать в своих целях. И я расскажу тебе, как это сделать</p>
          </v-col>
          <v-col class="col-xs-12">
              <v-img src="../assets/self.png" max-width="500px" contain >

              </v-img>
          </v-col>
      </v-row>
    </div>
</template>

<script>
export default {
    name : 'about'
}
</script>


<style lang="scss" scoped > 
    #about{
        padding-left: 10%;

       h2{  
           text-transform: uppercase;
           font-weight: bold;
           color:var(--accent-color);
           padding-top:15px;
        }
        p {
             padding-block: 10px;
             padding-right: 10px;
             font-weight: 400;
             color: var(--gray);
             font-size: 1.3em;
        }
    }

</style>