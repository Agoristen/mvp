<template>
    <div id="app" style="padding-bottom: 300px;">
      <img src="./assets/logo.png">
      <h2>Test Project</h2>
      <div v-for="(child, index) in data"> {{ child.text }}</div>
    </div>
</template>

<script>
    export default {
        name: 'app',
        components: {
        },
        data () {
            return {
                data: [
                    {
                        "text": "Same but with checkboxes",
                        "children": [
                            {
                                "text": "initially checked",
                                "checked": true
                            },
                        ]
                    },
                ],
            }
        },
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
