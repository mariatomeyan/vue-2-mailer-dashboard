<template>
    <ToolContainer :title="'Frames'">
        <div class="flex flex-wrap frames">
            <img class="" v-for="(frame, index) in frames" :key="index" @click="addToCanvas" :src="frame">
        </div>
    </ToolContainer>
</template>

<script>
    import ToolContainer from "./ToolContainer";

    export default {
        name: "Frames",
        components: { ToolContainer  },
        props: {
            frames: {
                type: Array,
                required: true,
                default: () => []
            }
        },
        methods: {
            addToCanvas(event) {
                this.$emit('addToCanvas',event.target )
            }
        }
    }
</script>

<style scoped>
    img {
        cursor: copy;
    }


</style>
