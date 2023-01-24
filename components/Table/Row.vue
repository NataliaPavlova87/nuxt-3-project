<template>
  <div
    class="table-row"
    :style="`grid-template-columns: repeat(${infoUser.length}, 1fr);`"
  >
    <TableCell
      v-for="(user, userIndex) in infoUser"
      :key="`table-row__cell--${userIndex}`"
      class="table-row__cell"
      :usersInfo="user"
    />
  </div>
</template>

<script lang="ts" setup>
import { User } from "@/interfaces/user";
import { PropType } from "vue";

const props = defineProps({
  user: {
    type: Object as PropType<User>,
    default: () => {},
  },
});

const infoUser = computed(() => {
  return [
    {
      title: props.user?.name,
      link: `/user/${props.user?.id}`,
    },
    {
      title: props.user?.email,
    },
    {
      title: props.user?.company.name,
    },
    {
      title: props.user?.address.city,
    },
  ];
});
</script>

<style scoped lang="scss">
.table-row {
  display: grid;
}
</style>
