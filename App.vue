<template>
  <api/>
  <button @click="value =! value">Click To Change Component</button>
  <component :is="active"></component>
  <h1>Food</h1>
  <food-item foodName="grape" v-bind:is-favorite="false"/>
  <food-item foodName="apple" v-bind:is-favorite="false"/>
  <food-item foodName="banana" v-bind:is-favorite="false"/>
  <food-item foodName="orange" v-bind:is-favorite="true"/>
  <button @click="toggleValue = !toggleValue">Click to Change Components</button>
  <component :is="activeComp"></component>
  <h1>To Do List</h1>
  <toDo v-for="x in toDoList" :key="x" :itemName="x" />
  <input v-model="newItem">
  <button @click="addItem">Add Item</button>
  <compOne/>
  <compTwo/>
  <compOne v-slot:firstSlot>This is first slot</compOne>
  <compOne v-slot:secondSlot>This is second slot</compOne>
  <compOne v-slot="dataFromSlot"><h2>{{ dataFromSlot.lclData }}</h2></compOne>
  <compOne v-slot="fruits">{{ fruits.name }}</compOne>
</template>

<script>
  export default {
    data(){
      return {
        newItem : '',
        toDoList : ['Wake Up', 'Breakfast','Lunch'],
        activeComp : true,
        value : true
      }
    },
    computed : {
      activeComp(){
        if(this.toggleValue) {
          return 'compOne'
        }
        else {
          return 'compTwo'
        }
      },
      active(){
        if(this.value){
          return 'compSwitchOne'
        }else{
          return 'compSwitchTwo'
        }
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