<template>
  <div>
    <div class="picker">
      <ve-cell-group>
        <ve-cell-item arrow @click.native="openArea">
          <span slot="left">地址:</span>
          <span slot="right">{{area}}</span>
        </ve-cell-item>
        <ve-cell-item arrow @click.native="openPlate">
          <span slot="left">车牌号:</span>
          <span slot="right">{{plate}}</span>
        </ve-cell-item>
        <ve-cell-item arrow @click.native="openCertificate">
          <span slot="left">证件类型:</span>
          <span slot="right">{{certificates}}</span>
        </ve-cell-item>
      </ve-cell-group>
    </div>
    <ve-picker ref="picker1" :defaultValue="area" :datas="city_data" :types="3" @callback="getArea" pickerTitle="请选择省市区"></ve-picker>
    <ve-picker ref="picker2" :defaultValue="plate" :datas="plate_number" :types="2" @callback="getPlate" pickerTitle="请选择车牌号"></ve-picker>
    <ve-picker ref="picker3" :defaultValue="certificates" :datas="certificate_data" :types="1" @callback="getCertificate" pickerTitle="请选择证件类型"></ve-picker>
  </div>
</template>

<script>
  import regions from "../data/city";
  import plateNumber from "../data/plate";
  import certificate from "../data/certificate";
  export default {
    data() {
      return {
        show: false,
        show1: false,
        show2: false,
        city_data: regions,
        plate_number: plateNumber,
        certificate_data: certificate,
        area: "广东省 深圳市 福田区",
        plate: "粤 A",
        certificates: "营业执照"
      }
    },
    mounted() {},
    methods: {
      openArea() {
        this.$refs.picker1.open();
      },
      openPlate() {
        this.$refs.picker2.open();
      },
      openCertificate() {
        this.$refs.picker3.open();
      },
      getArea(obj) {
        this.area = obj.value
        this.showToast(obj);
      },
      getPlate(obj) {
        this.plate = obj.value
        this.showToast(obj);
      },
      getCertificate(obj) {
        this.certificates = obj.value;
        this.showToast(obj);
      },
      showToast(obj) {
        this.$dialog.toast(obj.value);
        console.log(obj)
      }
    }
  }
</script>