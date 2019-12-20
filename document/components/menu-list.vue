<template>
  <ul class="menu-list">
    <li class="logo-block">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="#edc696"
        viewBox="0 0 60 68.9628477777555"
        x="0"
        y="0"
        width="40"
        height="40"
        hollow-target=""
        class="image-svg-svg"
      >
        <g>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1"
            x="0"
            y="0"
            viewBox="10.4399995803833 4.531000137329102 79.1199951171875 90.93900299072266"
            enable-background="new 0 0 100 100"
            xml:space="preserve"
            width="60"
            height="68.9628477777555"
            filtersec="colorsb1697168147"
          >
            <path
              d="M50.367,95.47L10.806,73.052l-0.366-45.47L49.634,4.531l39.561,22.417l0.365,45.469L50.367,95.47z M13.792,71.296  l36.546,20.709L86.547,70.71l-0.338-42.006L49.663,7.995L13.453,29.29L13.792,71.296z"
            />
            <path
              d="M50.326,90.426L15.153,70.495l-0.326-40.426L49.675,9.573l0.251,0.142l34.921,19.79l0.002,0.289l0.323,40.137l-0.248,0.146  L50.326,90.426z M16.148,69.909l34.168,19.362l33.853-19.909L83.852,30.09L49.685,10.728L15.832,30.638L16.148,69.909z"
            />
          </svg>
        </g>
        <g>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 157.74 141.55"
            width="35"
            height="40.228327870357"
            x="12.5"
            y="14.36725995369925"
          >
            <defs>
              <linearGradient
                id="a563ba9b5-fbb0-453d-b525-a71cc6819e6e"
                x1="17.77"
                y1="191.51"
                x2="47.77"
                y2="90.06"
                gradientTransform="matrix(1 .01 .16 -1 -13.95 233.56)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stop-color="#f3d6b5" />
                <stop offset="1" stop-color="#f1cf92" />
              </linearGradient>
              <linearGradient
                id="ba506e244-b0e0-451b-a742-63ef1549008a"
                x1="50.79"
                y1="166.2"
                x2="33.64"
                y2="70.47"
                gradientTransform="matrix(1 0 .49 -1 -32.33 233.04)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stop-color="#f3d6b5" />
                <stop offset="1" stop-color="#f1cf92" />
              </linearGradient>
            </defs>
            <g>
              <g>
                <path
                  fill="url(#a563ba9b5-fbb0-453d-b525-a71cc6819e6e)"
                  d="M36.14 141.07L0 0l41.81.48 36.14 141.07-41.81-.48z"
                />
                <path
                  fill="url(#ba506e244-b0e0-451b-a742-63ef1549008a)"
                  d="M35.69 141.05L114.12.36h43.62L79.23 141.05H35.69z"
                />
              </g>
            </g>
          </svg>
        </g>
      </svg>
    </li>
    <li class="menu-title" :key="index" v-for="(item, index) in menuList">
      {{ item.name }}
      <ul class="menu-list-item">
        <li v-for="(chlid, key) in item.subList" :key="key">
          <router-link active-class="menu-active" :to="{ path: key }">{{
            chlid
          }}</router-link>
        </li>
      </ul>
    </li>
  </ul>
</template>
<script>
import menuConfig from "../config/menu-list.json";
export default {
  name: "menu-list",
  props: {},
  data() {
    return {
      menuList: menuConfig
    };
  },
  methods: {},
  mounted() {},
  computed: {}
};
</script>
<style lang="scss">
.menu-list {
  list-style: none;
  padding: 0;
  margin: 20px;
  width: 180px;
  border-right: 1px solid #efefef;
  .menu-title {
    font-weight: 400;
    font-size: 16px;
    padding: 10px;
    color: #999;
  }
  .logo-block{
    display: flex;
    align-items: center;
    padding-left: 10px;
    span{
      margin-left: 5px;
      color:#666;
    }
  }
  &-item {
    list-style: none;
    margin: 0;
    padding-left: 5px;
    font-size: 14px;
    li {
      cursor: pointer;

      a {
        display: block;
        height: 100%;
        padding: 10px;
        color: #333;
      }
      &:hover {
        background: #efefef;
      }
    }
  }
  .menu-active {
    color: #e64340;
    font-weight: 400;
  }
}
</style>
