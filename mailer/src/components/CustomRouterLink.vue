<template>
    <router-link
            :to="link"
            class="flex items-center p-3 bg-gray-300 rounded"
    >
        <slot/>
    </router-link>
</template>

<script>
    export default {
        name: "CustomRouterLink",
        props: {
            link: {
                type: String,
                required: true,
                default: () => ''
            }
        }
    }
</script>

<style scoped>

</style>
