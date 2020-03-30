<!--
 * @version: 0.0.1
 * @Author: lixingjuan <xingjuan.li@hand-china.com>
 * @Date: 2020-02-05 12:10:03
 * @copyright: Copyright (c) 2019, Hand
 -->
<template>
  <div>
    <a-list
      v-for="item in itemsProps"
      v-bind:key="item.index"
      class="demo-loadmore-list"
      itemLayout="horizontal"
    >
      <!-- <div
        v-if="showLoadingMore"
        slot="loadMore"
        :style="{
          textAlign: 'center',
          marginTop: '12px',
          height: '32px',
          lineHeight: '32px'
        }"
      ></div>-->
      <a-list-item :class="['item']">
        <a-checkbox v-model="item.checked" :class="'checkBox'" />
        {{ item.text }}
        {{ item.checked }}
        <a-button
          @click="toHandleDeleteItem(item.uuid)"
          type="danger"
          :class="'float-right'"
          >删除</a-button
        >
      </a-list-item>
    </a-list>
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

<style scoped>
.item {
  width: 100%;
}
.checkBox {
  margin-right: 3%;
}
.floatRight {
  float: right;
}
</style>
