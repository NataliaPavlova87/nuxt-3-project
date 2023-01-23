<template>
  <div
    class="table-row"
    :style="`grid-template-columns: repeat(${infoUser.length}, 1fr);`"
  >
    <TableCell
      v-for="(user, userIndex) in infoUser"
      :key="`table-row__cell--${userIndex}`"
      class="table-row__cell"
    >
      {{ user }}
    </TableCell>
  </div>
</template>

<script lang="ts" setup>
import { User } from "@/interfaces/user";
import { PropType } from "vue";
import { combinator } from "postcss-selector-parser";

const props = defineProps({
  user: {
    type: Object as PropType<User>,
    default: () => {},
  },
});

const infoUser = computed(() => {
  return [
    props.user?.name,
    props.user?.email,
    props.user?.company.name,
    props.user?.address.city,
  ];
});
</script>

<style scoped lang="scss">
.table-row {
  display: grid;
}
</style>
