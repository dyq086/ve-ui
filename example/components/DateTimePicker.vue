<template>
  <div>
    <div class="picker">
      <etc-cell-group>
        <etc-cell-item arrow @click.native="openDate1">
          <span slot="left">年月日时分:</span>
          <span slot="right">{{date1}}</span>
        </etc-cell-item>
        <etc-cell-item arrow @click.native="openDate2">
          <span slot="left">年月日:</span>
          <span slot="right">{{date2}}</span>
        </etc-cell-item>
        <etc-cell-item arrow @click.native="openDate4">
          <span slot="left">年月:</span>
          <span slot="right">{{date4}}</span>
        </etc-cell-item>
        <etc-cell-item arrow @click.native="openDate3">
          <span slot="left">时分:</span>
          <span slot="right">{{date3}}</span>
        </etc-cell-item>
      </etc-cell-group>
    </div>
    <etc-datetime-picker :minYears="1900" ref="eldate1" :defaultValue="date1" format="yy-mm-dd hh:mm" @callback="getDate1" pickerTitle="请选择时间"></etc-datetime-picker>
    <etc-datetime-picker ref="eldate2" :defaultValue="date2" format="yy-mm-dd" @callback="getDate2" pickerTitle="请选择时间"></etc-datetime-picker>
    <etc-datetime-picker ref="eldate3" :defaultValue="date3" format="hh:mm" @callback="getDate3" pickerTitle="请选择时间"></etc-datetime-picker>
    <etc-datetime-picker ref="eldate4" :defaultValue="date4" format="yy-mm" @callback="getDate4" pickerTitle="请选择时间"></etc-datetime-picker>
  </div>
</template>
<script>
export default {
  data() {
    return {
      date1: "2017-02-28 10:13",
      date2: "2017-10-10",
      date3: "10:11",
      date4: "2017-10",
    }
  },
  mounted() {},
  methods: {
    openDate1() {
      this.$refs.eldate1.open();
    },
    openDate2() {
      this.$refs.eldate2.open();
    },
    openDate3() {
      this.$refs.eldate3.open();
    },
    openDate4() {
      this.$refs.eldate4.open();
    },
    getDate1(obj) {
      this.date1 = obj.value
      this.showToast(obj);
    },
    getDate2(obj) {
      this.date2 = obj.value
      this.showToast(obj);
    },
    getDate3(obj) {
      this.date3 = obj.value;
      this.showToast(obj);
    },
    getDate4(obj) {
      this.date4 = obj.value;
      this.showToast(obj);
    },
    showToast(obj) {
      this.$dialog.toast(obj.value);
    }
  }
}

</script>
