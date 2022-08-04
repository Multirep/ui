<template>
  <button
    :data-selector="`ACTION-${dataSelector}`"
    :disabled="disabled"
    class="base-button"
    :type="type"
    @click="$emit('click')"
    @submit="$emit('submit')"
  >
    <div
      v-if="$slots.iconLeft"
      class="base-button__icon"
    >
      <slot name="iconLeft" />
    </div>
    <slot class="base-button__content" />
    <div
      v-if="$slots.iconRight"
      class="base-button__icon"
    >
      <slot name="iconRight" />
    </div>
  </button>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component({
  name: 'BaseButton',
})

export default class BaseButton extends Vue {
  @Prop(
    {
      default: false,
    },
  ) protected readonly disabled!: boolean

  @Prop(
    {
      default: 'button',
    },
  ) protected readonly type!: string

  @Prop(
    {
      required: true,
    },
  ) protected readonly dataSelector!: string
}
</script>

<style lang="scss" scoped>
.base-button {
  position: relative;
  width: 100%;
  padding: 15px 25px;
  border-radius: 12px;
  font-weight: 500;
  overflow: hidden;
  transition: all 300ms;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 6px;
  white-space: nowrap;
  border: 2px solid transparent;
  cursor: pointer;
  background-color: #664545;
  color: white;
  &:hover {
    background-color: #f39b9b;
    color: black;
  }
  &__content {
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 0;
  }
  &__icon {
    display: flex;
    align-items: center;
  }
}
</style>
