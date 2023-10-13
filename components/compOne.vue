<template>
    <p>This is comp One</p>
    <slot name="firstSlot"></slot>
    <slot name="secondSlot"></slot>
    <slot v-bind:lclData="text"></slot>
    <slot v-for="x in fruit" :key="x" :name="x"></slot>
</template>

<script>
    export default {
        data(){
            return{
                text : "this is local data",
                fruit : ['apple','orange','mango']
            }
        }
    }
</script>

<style>
    p {
        color: red;
    }
</style>

<!-- scoped style -->
<style scoped>  
    p {
        background-color: black;
    }
</style>