<template>
    <span className="user">
        <span className="name"> {{ name }} </span>
        <span className="handle">{{ handle }} @ USER_HANDLE</span>
    </span>
</template>

<script>
export default {
    name: "User",
    props:["name", "handle"],
}
</script>

<style>

</style>