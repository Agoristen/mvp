<template>
  <div>
    <div class="tree-container">

      <v-jstree ref="release"
                :data="data"
      ></v-jstree>

    </div>

  </div>
</template>
<script>

import { VJstree } from 'example-library'

export default {
  components: { VJstree },
  data() {
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
        }
      ],
    }
  },
}
</script>