<template>
    <div>
        <div>this is head</div>
        <slot name="head"></slot>
        <div>this is body</div>
        <slot name="body"></slot>
        <div>this is body</div>
        <slot name="foot"></slot>
    </div>
</template>

<script setup lang="ts">
import { reactive } from "vue-demi";

const state = reactive({

})
</script>

<style>

</style>