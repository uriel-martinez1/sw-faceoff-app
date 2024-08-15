<template>
    <div class="form-container">
        <form class="box" v-on:submit.prevent="submitCharacter()">
            <div class="field">
                <label class="label" for="nameField">Name</label>
                <div class="control">
                    <input class="input" type="text" id="nameField" name="nameField" v-model="newCharacter.name">
                </div>
            </div>

            <div class="field">
                <label class="label" for="birthYearField">Birth year</label>
                <div class="control">
                    <input class="input" type="text" id="birthYearField" name="birthYearField"
                        v-model="newCharacter.birth_year">
                </div>
            </div>

            <div class="field is-grouped">
                <div class="control">
                    <button class="button is-primary" type="submit">Submit</button>
                </div>
                <div class="control">
                    <button class="button is-primary is-light" v-on:click="exitForm()">Cancel</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            newCharacter: {
                name: "",
                birth_year: "",
            }
        }
    },
    methods: {
        submitCharacter() {
            // if the name field and the birth year field are not empty, submit
            if (this.newCharacter.name !== "" && this.newCharacter.birth_year !== "") {
                this.$store.commit('ADD_CHARACTER', this.newCharacter);
                //this.resetForm();
                this.exitForm();
            } else {
                alert("Both input fields must not be empty");
            }
        },
        // resetForm() {
        //     this.newCharacter.name = "";
        //     this.newCharacter.birth_year = "";
        // },
        exitForm() {
            this.$router.push({ name: 'people' });
        },
    },
}
</script>

<style>
.form-container {
    display: flex;
    justify-content: center;
    width: 100%;
}

.box {
    width: 60%;
}
</style>