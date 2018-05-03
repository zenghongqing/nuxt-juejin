<template>
  <div class="drop-down" v-clickoutside="hide">
    <div class="phone-show-menu" @click="handleMenuClick">
      <span>{{title}}</span>
      <v-icon name="arrow-down-b" class="arrow-down"></v-icon>
    </div>
    <ul class="phone-hide" :class="{
        'show': show
      }">
      <li v-for="(item, index) in items" :key="index" class="nav-item"
      @click="handleItemClick(item.title)">
        <nuxt-link :to="{name: item.name}">{{ item.title }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>
<script>
  import VIcon from "./icon";
  import clickoutside from '~/util/dom/clickoutside'
  export default {
    name: 'VDropdown',
    components: {VIcon},
    directives: {clickoutside},
    data () {
      return {
        show: false,
        title: '首页',
        items: [
          {name: 'index', title: '首页'},
          {name: 'books', title: '小册'},
          {name: 'repos', title: '开源库'},
          {name: 'events-all', title: '活动'}
        ]
      }
    },
    methods: {
      handleMenuClick () {
        this.show = !this.show
      },
      /**
       * @param {String} 点选的标题
       * @param {Number} 点选的索引值
       * */
      handleItemClick (title) {
        this.title = title
      },
      hide () {
        this.show = false
      }
    }
  }
</script>
<style lang="scss" scoped>
  .drop-down {
    .phone-show-menu {
      display: none;
    }
    .phone-hide {
      display: flex;
      .nav-item {
        height: 5rem;
        line-height: 5rem;
        padding: 0 20px;
        margin: 0;
        font-size: 1.3rem;
        color: #71777c;
        -webkit-box-pack: center;
        justify-content: center;
        cursor: pointer;
        font-weight: 500;
      }
      .nuxt-link-exact-active {
        color: #007fff;
      }
      .link-item {
        color: #007fff;
      }
    }
  }
  @media screen and (max-width: 980px) {
    .drop-down {
      .phone-show-menu {
        display: flex;
        align-items: center;
        height: 5rem;
        line-height: 5rem;
        padding: 0 2rem;
        margin: 0;
        font-size: 1.3rem;
        color: #007fff;
        -webkit-box-pack: center;
        justify-content: center;
        span {margin-right: 0.3rem}
      }
      .phone-hide {
        &.show {
          display: block;
        }
        display: none;
        background-color: #fff;
        flex-direction: column;
        text-align: center;
        box-shadow: 0 1px 2px 0 rgba(0,0,0,.1);
        border: 1px solid hsla(217,5%,71%,.45);
        border-radius: 4px;
        font-size: 1rem;
      }
    }
  }
</style>
