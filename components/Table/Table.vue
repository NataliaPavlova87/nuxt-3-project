<template>
  <div class="table">
    <TableHeader class="table__header" :items="headerItems" />
    <TableRow
      v-for="(user, userIndex) in paginationUsers"
      :key="`table__row--${userIndex}`"
      class="table__row"
      :user="user"
    />
    <div class="pagination">
      <button
        v-for="page in pages"
        :key="`pagination__item--${page}`"
        class="pagination__item"
        @click="changePageNumber(page)"
      >
        {{ page }}
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { PropType, unref } from "vue";
import { User } from "@/interfaces/user";

const props = defineProps({
  users: {
    type: Array as PropType<Array<User>>,
    default: () => [],
  },
  headerItems: {
    type: Array as PropType<Array<string>>,
    default: () => [],
  },
});

const userPerPage = ref(5);
const pageNumber = ref(1);
const pages = computed(() => props.users?.length / unref(userPerPage));
const paginationUsers = computed(() => {
  const from = (unref(pageNumber) - 1) * unref(userPerPage);
  const to = from + unref(userPerPage);

  return props.users?.slice(from, to);
});
const changePageNumber = (page: number) => {
  pageNumber.value = page;
};
</script>
