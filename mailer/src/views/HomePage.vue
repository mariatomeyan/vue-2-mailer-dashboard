<template>
    <div class="   flex items-center content-center justify-center">
     <editor></editor>
    </div>
</template>

<script>
import Editor from "../components/Editor/Editor";
    export default {
        name: "HomePage",
        components: { Editor },
        created() {
            this.$worker.run((arg) => {
                return `Hello, ${arg}!`
            }, ['World'])
                .then(result => {
                    console.log(result)
                })
                .catch(e => {
                    console.log(e)})
        }

    }
</script>

<style scoped>

</style>
