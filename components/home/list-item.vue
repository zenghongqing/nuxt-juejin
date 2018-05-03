<template>
  <li class="list-item">
    <div class="entry">
      <nuxt-link :to="'http://118.25.109.133:81/entry/' + item.objectId" class="entry-link">
        <div class="content-box">
          <div class="info-box">
            <slot></slot>
          </div>
          <div class="thumb" v-show="item.screenshot">
            <img :src="handleImgSrc(item.screenshot)"/>
          </div>
        </div>
      </nuxt-link>
    </div>
  </li>
</template>
<script>
  export default {
    name: 'ListItem',
    props: {
      item: {
        type: Object,
        default: () => {}
      }
    },
    methods: {
      handleImgSrc (src) {
        if (src) {
          return `${src}?imageView2/1/w/160/h/103`
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  .list-item {
    &:not(:last-child) {
      border-bottom: 1px solid rgba(178,186,194,.15);
    }
    .content-box {
      min-height: 4.75rem;
      padding: 1.167rem 2rem;
      align-items: center;
      display: flex;
      .info-box {
        flex: 1 1 auto;
      }
      .thumb {
        flex: 0 0 auto;
        width: 8.9rem;
        height: 5.75rem;
        margin-left: 2rem;
        background-color: #000;
        border-radius: 2px;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  @media screen and (max-width: 600px) {
    .thumb {
      display: none;
    }
  }
</style>
