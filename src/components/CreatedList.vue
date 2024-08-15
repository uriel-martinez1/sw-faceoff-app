<template>
    <div>
        <h2 class="is-size-3">Section for created characters</h2>
        <h3 v-for="person in createdPeople" v-bind:key="person.id">{{ person.name }}</h3>
        <button class="button is-primary" v-on:click="addPerson">Add person</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            createdPeople: []
        }
    }, 
    created() {
        this.createdPeople = this.$store.state.createdPeople;
    },
    methods: {
        addPerson() {
            this.$router.push({name: 'addForm'});
        }
    }
}
</script>

<style>
</style>