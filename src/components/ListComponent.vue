<template>
    <div class="field is-grouped">
        <div class="control">
            <button class="button is-link" v-if="currentPage < totalPages" v-on:click="nextPage()">Next</button>
        </div>
        <div class="control">
            <button class="button is-link is-light" v-if="currentPage > 1" v-on:click="previousPage()">Previous</button>
        </div>
    </div>
    <div class="field">
        <h2 v-for="person in people" v-bind:key="person.url">{{ person.name }}</h2>
    </div>
    
</template>

<script>
import starService from '../services/SWAPIService'

export default {
    data() { 
        return {
            people: [],
            currentPage: 1,
            totalPages: 10,
            //itemsPerPage: 10, // this will take into account the fact that the array of people in the state could dramatically change
        }
    },
    // created lifecycle hooks
    created() {
        const storeCount = this.$store.state.people.length;
        if (storeCount === 0){
            starService.getPeople()
            .then((response) => {
                this.people = response.data.results;
                this.$store.commit('SAVE_PEOPLE', this.people);
            })
            .catch((error) => {
                console.error('Error fetching people', error);
            })
        } else {
            this.people = this.$store.state.people;
        }
    },
    // since the people in the array could always change, we need to calculate how many we will show on screen
    // computed: {
    //     currentPeople() { // computed property that will return items in the people array of the store 
    //         return this.$store.state.people; 
    //     },
    //     totalPages() {
    //         return Math.ceil(this.people.length / this.itemsPerPage); // take the length of the array and divide by 10, round the results to the smallest interger greater than equal to the result
    //     },
    //     paginatedPeople() {
    //         const start = (this.currentPage - 1) * this.itemsPerPage;
    //         const end = start + this.itemsPerPage;
    //         return this.people.slice(start,end); // we will return a copy of the array found in the store broken to show only 10 items at a time
    //     }
    // },
    methods: {
        // this is for loading new characters in character list
        loadPeople(page) {
            starService.getPeoplePagination(page)
            .then((response) => {
                this.people = response.data.results;
                this.$store.commit('SAVE_PEOPLE', this.people);
            })
            .catch((error) => {
                console.error('Failed to load characters:', error);
            })
        },
        nextPage() {
            if (this.currentPage < this.totalPages){
                this.currentPage++;
                this.loadPeople(this.currentPage);
            }
        },
        previousPage() {
            if (this.currentPage > 1){
                this.currentPage--;
                this.loadPeople(this.currentPage);
            }
        }
    }
}
</script>

<style>
</style>