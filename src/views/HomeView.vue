<template>
  <div class="home">
    <div class="home__main">
      <div class="text">
        <div>
          <h1>Географические <br> викторины</h1>
          <p>Хороший шанс  проверку знаний и прокачать знания в сфере географии</p>
        <button>Перейти к викторинах</button>
        </div>
      </div>
    </div>
  <div class="home__content">
    <div class="home__content__search">
      <input placeholder="Напишите, что вы ищеете..." type="text">
      <button>Найти</button>
    </div>
    <br>
    <div class="line"></div>
    <div class="home__content__cards">
<div class="card" v-for="card in info" :key="card">
<img src="../assets/images/earth.jpg" alt="">
<div class="text">
<h2>{{ card.title }}</h2>
<p>{{ card.description }}</p>
<div class="rating">
  <span>Пройдено: 1,000</span>
  <div>
    <span>Рейтинг: </span>
    <starRating :rating="4"/>
  </div>
</div>
</div>
</div>
    </div>
  </div>
  </div>
</template>

<script>
import axios from 'axios'
import starRating from '@/components/star-rating.vue';
export default {
  name: 'HomeView',
  data(){
    return{
      info: null
    }
  },
  components: {
    starRating
  },
  mounted(){
axios.post("http://localhost:8080/api/quiz/get_public").then((res) => {
  this.info = res.data
  console.log(res)
})
  }
}
</script>
