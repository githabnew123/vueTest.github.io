<template>
  <h1>Food</h1>
  <food-item foodName="grape" v-bind:is-favorite="false"/>
  <food-item foodName="apple" v-bind:is-favorite="false"/>
  <food-item foodName="banana" v-bind:is-favorite="false"/>
  <food-item foodName="orange" v-bind:is-favorite="true"/>
  <h1>To Do List</h1>
  <toDo v-for="x in toDoList" :key="x" :itemName="x" />
  <input v-model="newItem">
  <button @click="addItem">Add Item</button>
</template>

<script>
  export default {
    data(){
      return {
        newItem : '',
        toDoList : ['Wake Up', 'Breakfast','Lunch']
      }
    },
    methods: {
      addItem(){
        this.toDoList.push(this.newItem)
      }
    }
  }
</script>

<style>
  #app > div {
        border: dashed black 1px;
        display: inline-block;
        margin: 10px;
        padding: 10px;
        background-color: lightgreen;
    }
  #app > div:hover{
    cursor : pointer;
  }
</style>  