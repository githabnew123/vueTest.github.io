<template>
  <div v-on:click="countClicks">
    <h2>
      {{ name }}
      <img src="/img_quality.svg" v-show="foodIsFavorite">
    </h2>
    <p>{{ message }}</p>
    <p>{{ foodName }}</p>
    <p>{{ clicks }}</p>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        name : 'Apple',
        message : 'I like Apple',
        clicks : 0,
        foodIsFavorite: this.isFavorite
      }
    },
    props:[
      'foodName'
    ],
    methods : {
      countClicks(){
        this.clicks++;
        this.foodIsFavorite = !this.foodIsFavorite;
      }
    }
  }
</script>

<style>
  img {
        height: 1.5em;
        float: right;
    }
</style>