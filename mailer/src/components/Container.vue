<template>
    <div class="container">
        <slot />
    </div>
</template>
<script>
export default {
 name: "Container"
}
</script>

<style scoped>
.container {
    max-width: 900px;
    padding: 0 20px;
    margin: 0 auto;
}
</style>
