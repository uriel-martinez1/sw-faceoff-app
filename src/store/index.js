import { createStore as _createStore } from 'vuex';

export function createStore() {
    return _createStore({
        state: {
            // we will eventually add stuff here
            people: [],
            createdPeople: [],
            fetchIds: new Set() // This will help us keep track of the items
        },
        mutations: {
            // this is where we add data from the API to the store
            // SAVE_PEOPLE(state, payload){
            //     state.people = payload;
            // },
            SAVE_PEOPLE(state, payload){
                payload.forEach((person) => {
                    if(!state.fetchIds.has(person.url)){ // this checks that the fetchIds set holds a url that matches a resource endpoint in the Star Wars API
                        state.people.push(person);
                        state.fetchIds.add(person.url);
                    }
                });
            },
            ADD_CHARACTER(state, payload){
                state.createdPeople.push(payload); 
            }
        },
        strict: true
    })
}