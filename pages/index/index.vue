<template>
  <ul class="entry-list" ref="entry">
    <list-item v-for="(item, index) in recommends" :key="index" :item="item">
      <title-row :title="item.title"></title-row>
      <meta-row :item="item" :showCategory="true"></meta-row>
    </list-item>
  </ul>
</template>
<script>
  /**
   * 获取首屏加载的数据
   * @params {Object} store 数据状态管理对象
   * @params {Object} self 预获取数据当前上下文
   * @return {Object} 预获取对象
   * */
  const getData = (store, self) => {
    let params = {
      suid: 'aemu3ZqVijiqQj2QEFiB',
      ab: 'welcome_3',
      src: 'web'
    }
    return new Promise((resolve) => {
      store.dispatch('recommend', params).then((res) => {
        if (self) {
          const {d, m, s} = res
          if (s === 1) {
            self.recommends.push(...d)
          } else {
            self.$message({
              message: m,
              type: 'warning'
            })
          }
          self.scrollStatus = true
        }
        resolve(res)
      })
    })
  }
  import ListItem from '~/components/home/list-item'
  import MetaRow from '~/components/home/meta-row'
  import TitleRow from '~/components/home/title-row'
  export default {
    scrollToTop: true,
    data () {
      return {
        scrollStatus: true,
        recommends: []
      }
    },
    components: {
      ListItem,
      MetaRow,
      TitleRow
    },
    async asyncData ({store}) {
      let res = await getData(store)
      console.log(res.s, res.d)
      return {
        recommends: res.d
      }
    },
    mounted () {
      this.getFullPageData()
      window.addEventListener('scroll', this.handleScroll)
    },
    methods: {
      /**
       * @description 如果内容高度小于窗口高度，则递归加载至内容高度大于窗口高度
       * */
      getFullPageData () {
        if (document.body.offsetHeight < window.innerHeight) {
          this.loadMoreData().then((res) => {
            if (res.s === 1) {
              this.getFullPageData()
            }
          })
        }
      },
      /**
       * @description 防抖加载内容
       * */
      handleScroll () {
        this.timer && clearTimeout(this.timer)
        this.timer = setTimeout(this.loadMoreData, 300)
      },
      /**
       * @description 当整个滚动跳得高度达到一定条件时，继续获取数据
       * */
      loadMoreData () {
        return new Promise((resolve) => {
          let $el = document.documentElement || document.body
          let $entry = this.$refs.entry
          let clientHeight = $el.clientHeight
          let style = window.getComputedStyle ? window.getComputedStyle($entry, null) : null || $entry.currentStyle
          let containerHeight = ~~style.height.split('px')[0] + 140
          console.log(document.querySelector('.to-top-btn').classList)
          document.querySelector('.to-top-btn').classList[$el.scrollTop > 120 ? 'add' : 'remove']('show')
          if ($el.scrollTop + clientHeight > containerHeight - 100 && this.scrollStatus) {
            getData(this.$store, this).then((res) => {
              resolve(res)
            })
          }
        })
      }
    }
  }
</script>
<style lang="scss" scoped>
  .entry-list {
    width: 100%;
    background: #fff;
  }
</style>
