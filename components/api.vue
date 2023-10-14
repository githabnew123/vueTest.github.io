<template>
    <div>
        <button @click="fetchData">Fetch Data</button>
        <p v-if="data">{{ data[1]['name'] }}</p>
        <input ref="inputRef" @input="refConcept">
        <p ref="pRef"></p>
  </div>
</template>

<script>
    export default {
        data() {
            return{
                data : null
            }
        },
        methods : {
            async fetchData() {
                const response = await fetch("http://192.168.1.21:84/hr/api.php");
                const data = await response.json();
                this.data = data;
            },
            refConcept() {
                this.$refs.pRef.innerHTML = this.$refs.inputRef.value;
            }
        }
    }
</script>

<style>

</style>