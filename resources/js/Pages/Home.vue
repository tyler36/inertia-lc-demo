<template>
    <Head>
        <title>Home</title>
        <meta name="description" content="Home information" head-key="description">
    </Head>

    <h1 class="text-3xl">Blog</h1>

    <pre>
        <code>
            class Example
            {
                public function __construct()
                {
                    //
                }
            }
        </code>
    </pre>

    <br/>

    <div id="example2">
        <pre>
            <code ref="code">
                class Example
                {
                    public function __construct()
                    {
                        //
                    }
                }
            </code>
        </pre>
    </div>

</template>

<script>
import {highlight, highlightElement } from '@/Services/SyntaxHighlighting';

export default {
    mounted() {
        highlightElement(this.$refs.code);
    }
}
</script>
