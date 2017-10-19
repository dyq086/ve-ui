<template>
  <div>
    <div style="padding:1rem">
      <etc-button @click.native.stop="open" type="primary">操作列表</etc-button>
    </div>
    <etc-actionsheet v-model="show" :actions="actionsList" @callback="actionSheetCallback" cancelTxt="取消"></etc-actionsheet>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        show: false,
        actionsList: [{
            name: "发送给朋友",
            callback: (obj) => {
              this.$dialog.toast(obj.name);
            }
          },
          {
            name: "收藏",
            callback: (obj) => {
              this.$dialog.toast(obj.name);
            }
          },
          {
            name: "保存图片",
            callback: (obj) => {
              this.$dialog.toast(obj.name);
            }
          },
          {
            name: "编辑",
            callback: (obj) => {
              this.$dialog.toast(obj.name);
            }
          },
          {
            name: "定位到聊天",
            callback: (obj) => {
              this.$dialog.toast(obj.name);
            }
          }
        ]
      }
    },
    mounted() {},
    methods: {
      open() {
        this.show = !this.show;
      },
      actionSheetCallback(obj) {
        console.log(obj)
      }
    }
  }
</script>