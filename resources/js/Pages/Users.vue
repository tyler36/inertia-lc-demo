<template>
    <Head>
        <title>Settings</title>
    </Head>

    <h1 class="text-3xl">Users</h1>

    <div style="margin-top: 125vh">
        <p>The current time is {{ time }}.</p>
        <Link href="/users" class="text-blue-500 hover:underline" preserve-scroll>Refresh</Link>
    </div>
</template>

<script setup>
defineProps({
    time: String
})
</script>
