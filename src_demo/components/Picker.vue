<template>
  <div>
    <div class="picker">
      <etc-cell-group>
        <etc-cell-item arrow @click.native="openArea">
          <span slot="title">地址:</span>
          <span slot="inner">{{area}}</span>
        </etc-cell-item>
        <etc-cell-item arrow @click.native="openPlate">
          <span slot="title">车牌号:</span>
          <span slot="inner">{{plate}}</span>
        </etc-cell-item>
        <etc-cell-item arrow @click.native="openCertificate">
          <span slot="title">证件类型:</span>
          <span slot="inner">{{certificates}}</span>
        </etc-cell-item>
      </etc-cell-group>
    </div>
    <etc-picker v-model="show" :defaultValue="area" :datas="city_data" :types="3" @callback="getArea" pickerTitle="请选择省市区"></etc-picker>
    <etc-picker v-model="show1" :defaultValue="plate" :datas="plate_number" :types="2" @callback="getPlate" pickerTitle="请选择车牌号"></etc-picker>
    <etc-picker v-model="show2" :defaultValue="certificates" :datas="certificate_data" :types="1" @callback="getCertificate" pickerTitle="请选择证件类型"></etc-picker>
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
        this.show = !this.show;
      },
      openPlate() {
        this.show1 = !this.show1;
      },
      openCertificate() {
        this.show2 = !this.show2;
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