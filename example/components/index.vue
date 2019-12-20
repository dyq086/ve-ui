<template>
  <div class="index">
    <div class="commpent-name">
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
      <div class="title">VE 组件库</div>
    </div>
    <ve-cell-group>
      <ve-cell-item
        arrow
        v-for="(item, index) in list"
        :key="index"
        type="link"
        :href="item.link"
      >
        <svg slot="icon" class="icon" aria-hidden="true">
          <use :xlink:href="item.icon"></use>
        </svg>
        <span slot="left">{{ item.name }}</span>
      </ve-cell-item>
    </ve-cell-group>
  </div>
</template>

<script>
import iconfont from "../assets/icon/iconfont";
export default {
  data() {
    return {
      list: [
        {
          icon: "#icon-xingxi",
          name: "Button",
          link: "/button"
        },
        {
          icon: "#icon-xingxi",
          name: "Cell",
          link: "/cell"
        },
        {
          icon: "#icon-xingxi",
          name: "Icon",
          link: "/icon"
        },
        {
          icon: "#icon-xingxi",
          name: "Switch",
          link: "/switch"
        },
        {
          icon: "#icon-xingxi",
          name: "Checkbox",
          link: "/checkbox"
        },
        {
          icon: "#icon-xingxi",
          name: "Radio",
          link: "/radio"
        },
        {
          icon: "#icon-xingxi",
          name: "Grids",
          link: "/grids"
        },
        {
          icon: "#icon-xingxi",
          name: "Toast",
          link: "/toast"
        },
        {
          icon: "#icon-xingxi",
          name: "Indicator",
          link: "/indicator"
        },
        {
          icon: "#icon-xingxi",
          name: "Alert",
          link: "/alert"
        },
        {
          icon: "#icon-xingxi",
          name: "Tab",
          link: "/tab"
        },
        {
          icon: "#icon-xingxi",
          name: "Picker",
          link: "/picker"
        },
        {
          icon: "#icon-xingxi",
          name: "DateTimePicker",
          link: "/datetime-picker"
        },
        {
          icon: "#icon-xingxi",
          name: "PwdKeyboard",
          link: "/pwd-keyboard"
        },
        {
          icon: "#icon-xingxi",
          name: "ActionSheet",
          link: "/actionsheet"
        },
        {
          icon: "#icon-xingxi",
          name: "Vscroll",
          link: "/vscroll"
        },
        {
          icon: "#icon-xingxi",
          name: "Swiper",
          link: "/swiper"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.index {
  .commpent-name {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    padding: 0.8rem 0;
    .title {
      font-size: 1rem;
    }
  }
}
</style>
