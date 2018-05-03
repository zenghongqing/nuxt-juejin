<template>
  <div class="info-row meta-row">
    <ul class="meta-list">
      <li class="item hot" v-show="item.hot && !showCategory">热</li>
      <li class="item recommended" v-show="item.hot && !showCategory">荐</li>
      <li class="item post" v-show="item.type === 'post' && !showCategory">专栏</li>
      <li class="item category" v-show="showCategory">
        <span class="frontend" :class="['category-title', item.category.title]">{{ item.category.name }}</span>
      </li>
      <li class="item username clickable">{{item.user.username}}</li>
      <li class="item time">{{item.createdAt | format}}</li>
      <li class="item">{{item.viewsCount}}次阅读</li>
    </ul>
  </div>
</template>
<script>
  export default {
    name: 'MetaRow',
    props: {
      item: {
        type: Object
      },
      showCategory: {
        type: Boolean,
        default: false
      }
    },
    created () {
      // console.log(this.item)
    },
    filters: {
      format (v) {
        let timeDistance = (new Date().getTime() - new Date(v).getTime()) / 1000
        if (timeDistance / 60 < 1) {
          return `1分钟前`
        } else if ((timeDistance / 60) < 60) {
          return `${Math.floor((timeDistance / 60))}分钟前`
        } else if ((timeDistance / 60 / 60) < 24) {
          return `${Math.floor((timeDistance / 60 / 60))}小时前`
        } else if ((timeDistance / 60 / 60 / 24) < 30) {
          return `${Math.floor((timeDistance / 60 / 60 / 24))}天前`
        } else if ((timeDistance / 60 / 60 / 24 / 30) < 12) {
          return `${Math.floor((timeDistance / 60 / 60 / 24 / 30))}月前`
        } else {
          return `${Math.floor((timeDistance / 60 / 60 / 24 / 30 / 12))}年前`
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  .meta-row {
    color: #8f969c;
    font-size: 1.2rem;
    .meta-list {
      display: flex;
      -webkit-box-align: baseline;
      -ms-flex-align: baseline;
      align-items: baseline;
      white-space: nowrap;
      .item {
        font-size: 1.2rem;
        &.hot {color: red}
        &.recommended {color: #f70;}
        &.post {color: #b71ed7;}
        &.category {
          .backend {background-color: #857dea;}
          .category-title {
            display: inline-block;
            margin-right: 1.2rem;
            padding: .28rem 0;
            min-width: 3.5rem;
            text-align: center;
            line-height: 1;
            color: #fff;
            background-color: #c69f42;
            border-radius: 2px;
            font-size: 1.2rem;
            &.article {
              background-color: #abbb79;
            }
            &.android {
              background-color: #42c67d;
            }
            &.frontend {
              background-color: #56c4e1;
            }
            &.ai {
              background-color: #e8596b;
            }
            &.backend {
              background-color: #857dea;
            }
            &.ios {
              background-color: #ff955b;
            }
            &.freebie {
              background-color: #606b9e;
            }
            &.design {
              background-color: #f2c400;
            }
            &.product {
              background-color: #a08563;
            }
          }
        }
        &.username {
          display: flex;
          align-items: baseline;
          &:hover {
            color: #007fff;
          }
        }
        &.hot, &.recommended, &.post, &.username, &.time {
          &::after {
            content: "\B7";
            margin: 0 .4em;
            color: #8f969c;
          }
        }
      }
    }
  }
</style>
