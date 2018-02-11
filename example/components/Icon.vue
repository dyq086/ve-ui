<template>
  <div class="icon-block">
    <div class="icon-list-item" v-for="item in iconList">
      <etc-icon :name="item" size="1.5rem" color="#666"></etc-icon>
      <div class="name-text">{{item}}</div>
    </div>
  </div>
</template>
<script>
export default {

  data() {
    return {
      iconList: []
    }
  },

  mounted() {
    setTimeout(() => {
      let el = document.getElementById("ect-ui-icon");
      let childNodes = el.childNodes;
      childNodes.forEach((item, key) => {
        let keys = item.id.split("icon-");
        this.iconList.push(keys[1]);
      })
    }, 200)

  }
}

</script>
<style lang="scss">
.icon-block {
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  background: #fff;
  padding: .5rem;
}

.icon-list-item {
  text-align: center;
  width: 24.8%;
  margin-top: 1rem;
  .name-text {
    font-size: .6rem;
  }
}

</style>
