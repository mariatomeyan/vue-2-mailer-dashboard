<template>
   <ToolContainer :title="title">
       <div class="grid grid-cols-3 gap-1 frames" v-if="images.length">
        <img    v-for="(image, index) in images" :key="index"  @click="addToCanvas" :src="image" alt="">
         <img  @click="addToCanvas"  src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg" id="external-flamingo" crossorigin="anonymous">
       </div>
   </ToolContainer>
</template>

<script>
    import ToolContainer from "./ToolContainer";

    export default {
        name: "Backgrounds",
        components: { ToolContainer  },
        props: {
            title: {
                type: String,
                required: false,
                default: () => 'Images'
            },
            images: {
                type: Array,
                required: true,
                default: () => []
            }
        },
        methods: {
            addToCanvas(event) {
                this.$emit('addToCanvas', event)
            }
        }
    }
</script>

<style scoped>
    img {
        cursor: copy;
    }


</style>
