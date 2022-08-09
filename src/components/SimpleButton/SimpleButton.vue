<template>
  <button class="button" @click="onClick">
    <span class="button__title"><slot /></span>
  </button>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'SimpleButton'
})
export default class SimpleButton extends Vue {
  mounted() {
    console.log('MOOUNTED')
  }

  protected onClick(e: Event) {
    console.log(e, 'click')
  }
}
</script>

<style scoped lang="scss">
  .button {
    &_title {
      color: red
    }
  }
</style>
