<!--
 * @version: 0.0.1
 * @Author: lixingjuan <xingjuan.li@hand-china.com>
 * @Date: 2020-02-05 12:10:03
 * @copyright: Copyright (c) 2019, Hand
 -->
<template>
  <div>
    <ul v-for="item in itemsProps" v-bind:key="item.index">
      <li>
        <input type="checkbox" v-model="item.checked" />
        {{ item.text }}
        {{ item.checked }}
        <button @click="toHandleDeleteItem(item.uuid)">删除</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "todo-item",
  data() {
    return {};
  },
  props: {
    itemsProps: {
      type: Array,
      default: function() {
        // 给的默认值
        return [];
      }
    }
  },
  methods: {
    toHandleDeleteItem(uuid) {
      window.console.log("子组件打印的", uuid);
      this.$emit("handleDeleteItemProps", uuid);
    }
  },
  components: {}
};
</script>

<style scoped></style>
