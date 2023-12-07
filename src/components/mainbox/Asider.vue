<template>
    Asider 在这
    <button @click="push">点击跳转</button>
</template>


<script setup>
import { useRouter } from "vue-router"
const router = useRouter()
let push = () => {
    router.push("/about")
}

</script>