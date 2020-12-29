<template>
    <nav class="flex fixed w-full items-center justify-between px-6 h-16 bg-white text-gray-700 border-b border-gray-200 z-12">
        <TopNavBar/>
        <div class="flex items-center">

        </div>
    </nav>
</template>

<script>


     import TopNavBar from "./TopNavBar";
    export default {
        components: {  TopNavBar  },
        data() {
            return {
                toggle: false
            };
        },
        methods: {

        },
        watch: {
            isOpen: {
                immediate: true,
                handler(isOpen) {
                    if (process.client) {
                        if (isOpen) document.body.style.setProperty("overflow", "hidden");
                        else document.body.style.removeProperty("overflow");
                    }
                }
            }
        },
        mounted() {
            document.addEventListener("keydown", e => {
                if (e.keyCode == 27 && this.isOpen) this.isOpen = false;
            });
        }
    };
</script>
