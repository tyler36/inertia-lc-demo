<template>
    <Head>
        <title>Home</title>
        <meta name="description" content="Home information" head-key="description">
    </Head>

    <h1 class="text-3xl">Blog</h1>

    <Highlight :code="snippet" />

</template>

<script setup>
import Highlight from '@/Components/Highlight';

let snippet = `
class Example
{
    public function __construct()
    {
        //
    }
}
`.trim();

</script>
