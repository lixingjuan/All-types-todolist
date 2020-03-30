<template>
  <div id="example-3">
    <div>
      <input type="checkbox" id="jack" value="Jack" v-model="checkedNames" />
      <label for="jack">Jack</label>
      <input type="checkbox" id="john" value="John" v-model="checkedNames" />
      <label for="john">John</label>
      <input type="checkbox" id="mike" value="Mike" v-model="checkedNames" />
      <label for="mike">Mike</label>
      <br />
      <span>Checked names: {{ checkedNames }}</span>
    </div>
    <div>
      <div>
        <label for="jack">value1</label>
        <input v-model="value1" />
        <span>{{ value1 }}</span>
      </div>
      <div>
        <label for="jack">value2</label>
        <input v-model="value2" />
        <span>{{ value2 }}</span>
      </div>
      <div>
        <label for="jack">value3</label>
        <input v-model="value3" />
        <span>{{ value3 }}</span>
      </div>
      <div>
        {{ sum }}
      </div>
      <div>
        <p>三个值的和为10的时候隐藏三个值的和</p>
        <p v-show="showSum">{{ sum }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "demo2",
  data() {
    return {
      checkedNames: [],
      value1: "",
      value2: "",
      value3: ""
      // sum: this.value1 + this.value2 + this.value3
    };
  },
  // 计算属性用于稍复杂的计算，变量值写在这里就行了，data里面不用再写了
  // 使用场景1: 根据某几个值的输入控制某个状态的显隐
  computed: {
    sum: function() {
      return this.value1 && this.value2 && this.value3;
    },
    showSum: function() {
      return this.value1 + this.value2 + this.value3 !== 10;
    }
  },
  // 侦听属性当某个值改变时触发，包括计算属性中的变量值
  watch: {
    // value1: function(val) {
    //   window.console.log("val", val);
    //   window.console.log("this.value1", this.value1);
    // },
    sum: function(val) {
      window.console.log("val", val);
    }
  },
  components: {}
};
</script>

<style scoped></style>
