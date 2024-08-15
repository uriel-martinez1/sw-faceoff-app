<template>
    <div>
        <h2 class="is-size-3">Star Wars People View</h2>
        <div class="SWAPI_result">
            <list-component />
        </div>
        <div class="created">
            <created-list />
        </div>
    </div>
</template>

<script>
import listComponent from '../components/ListComponent.vue'
import createdList from '../components/CreatedList.vue'

export default {
    components: {
        listComponent,
        createdList,
    }
}
</script>

<style>
</style>