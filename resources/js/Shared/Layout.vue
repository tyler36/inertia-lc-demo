<template>

    <section class="p-6 bg-gray-100">
        <header class="flex justify-between">
            <h1 class="font-bold text-lg">My App</h1>
            <Nav />
        </header>
    </section>

    <section class="p-6">
        <div class="mx-auto max-w-3xl">
            <slot />
        </div>
    </section>

</template>


<script type="text/javascript">
import Nav from "./Nav.vue"

export default {
    components: {Nav},
};
</script>
