<template>
    <div>
        <div  v-if="image">
            <img
                 v-bind="$attrs"
                 v-on="$listeners"
                 :src="'../assets/frames/' + image"
                 alt="">
        </div>
     </div>
</template>
<script>
    export default {
        name: "CustomImage",
        props: {
            image: {
                type: String,
                required: false,
                default: () => null
            }
        }
    }
</script>
