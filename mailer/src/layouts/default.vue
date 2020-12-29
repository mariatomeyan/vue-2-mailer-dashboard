<template>
    <div class="grid">
        <NavBar />


        <div class="container  mx-auto px-4 py-20 items-center">
            <router-view />
        </div>

    </div>
</template>

<script>
    import NavBar from "../components/Navbar"

    export default {
        components: {
            NavBar,
        }
    };
</script>
