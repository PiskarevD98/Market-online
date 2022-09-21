<template>
  <div class="list">
    <item v-for="item in items" :key="item.id" :item="item" />
  </div>
</template>

<script>
import MyButton from "@/components/UI/MyButton";
import Item from "@/components/Item";
export default {
  components: {
    MyButton,
    Item,
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style  scoped>
.list {
  display: flex;
  flex-wrap: wrap;
}
</style>