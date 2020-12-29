<template>
    <div class="row">
<!--        todo  turn it into dynamic image gallery with tailwind css-->
        <div class="column">
            <img src="https://picsum.photos/200/300?random=1" style="width:100%">
            <img src="https://picsum.photos/200/300?random=1" style="width:100%">
            <img src="https://picsum.photos/300/300?random=1" style="width:100%">
            <img src="https://picsum.photos/150/300?random=1" style="width:100%">
        </div>
        <div class="column">
            <img src="https://picsum.photos/200/300?random=1" style="width:100%">
            <img src="https://picsum.photos/100/300?random=1" style="width:100%">
            <img src="https://picsum.photos/100/300?random=1" style="width:100%">
            <img src="https://picsum.photos/150/100?random=1" style="width:100%">
        </div>
        <div class="column">
            <img src="https://picsum.photos/200/300?random=1" style="width:100%">
            <img src="https://picsum.photos/200/300?random=1" style="width:100%">
            <img src="https://picsum.photos/150/300?random=1" style="width:100%">
            <img src="https://picsum.photos/150/300?random=1" style="width:100%">

        </div>
        <div class="column">
            <img src="https://picsum.photos/100/300?random=1" style="width:100%">
            <img src="https://picsum.photos/200/100?random=1" style="width:100%">
            <img src="https://picsum.photos/200/150?random=1" style="width:100%">
            <img src="https://picsum.photos/100/50?random=1" style="width:100%">


        </div>
    </div>
</template>

<script>
    export default {
        name: "GridImageLayout"
    }
</script>

<style scoped>



    /* Create two equal columns that floats next to each other */
    .column {
        float: left;
        width: 50%;
        padding: 10px;
    }

    .column img {
        margin-top: 12px;
    }

    /* Clear floats after the columns */
    .row:after {
        content: "";
        display: table;
        clear: both;
    }
</style>
