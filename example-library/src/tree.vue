<template>
    <div>
      <div v-for="(child, index) in data">{{ child.text }}</div>
    </div>
</template>
<script>
    export default {
        name: 'VJstree',
        props: {
          data: {type: Array},
        },
    }
</script>