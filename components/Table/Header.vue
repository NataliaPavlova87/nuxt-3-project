<template>
  <div class="table-header">
    <div
      class="table-header__row table-header-row"
      :style="`grid-template-columns: repeat(${items.length}, 1fr);`"
    >
      <div
        v-for="(item, itemIndex) in items"
        :key="`table-header-row__cell--${itemIndex}`"
        class="table-header-row__cell"
      >
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { PropType } from "vue";

defineProps({
  items: {
    type: Array as PropType<Array<string>>,
    default: () => [],
  },
});
</script>

<style scoped lang="scss">
.table-header-row {
  display: grid;
}
</style>
