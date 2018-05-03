<template>
  <ul class="entry-list" ref="entry">
    <list-item v-for="(item, index) in entries" :key="index" :item="item">
      <meta-row :item="item"></meta-row>
      <title-row :title="item.title"></title-row>
    </list-item>
  </ul>
</template>
<script>
  import ListItem from '~/components/home/list-item'
  import MetaRow from '~/components/home/meta-row'
  import TitleRow from '~/components/home/title-row'
  const getData = (store, params, self) => {
    let category = ''
    switch (params.category) {
      case 'frontend':
        category = '5562b415e4b00c57d9b94ac8'
        break
      case 'android':
        category = '5562b410e4b00c57d9b94a92'
        break
      case 'backend':
        category = '5562b419e4b00c57d9b94ae2'
        break
      case 'ai':
        category = '57be7c18128fe1005fa902de'
        break
      case 'ios':
        category = '5562b405e4b00c57d9b94a41'
        break
      case 'freebie':
        category = '5562b422e4b00c57d9b94b53'
        break
      case 'article':
        category = '5562b428e4b00c57d9b94b9d'
        break
      default:
        break
    }
    let param = {
      category: category,
      ab: 'welcome_3',
      src: 'web'
    }
    return new Promise(resolve => {
      store.dispatch('entries', param).then((res) => {
        if (self) {
          const { d, m, s } = res
          console.log(d, m, s, 'res')
          if (s === 1) {
            self.entries.push(...d.entrylist)
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
  export default {
    scrollTop: true,
    async asyncData ({store, params}) {
      let res = await getData(store, params)
      return {
        entries: res.d.entrylist
      }
    },
    created () {
      // console.log(this.$route.params)
    },
    mounted () {
      this.getFullPageData()
      window.addEventListener('scroll', this.handleScroll)
    },
    destroyed () {
      window.removeEventListener('scroll', this.handleScroll)
    },
    data () {
      return {
        entries: [],
        scrollStatus: true
      }
    },
    components: {
      ListItem,
      MetaRow,
      TitleRow
    },
    methods: {
      getFullPageData () {
        if (document.body.offsetHeight < window.innerHeight) {
          this.loadMoreData().then((res) => {
            if (res.s === 1) {
              this.getFullPageData()
            }
          })
        }
      },
      handleScroll () {
        this.timer && clearTimeout(this.timer)
        this.timer = setTimeout(this.loadMoreData, 300)
      },
      loadMoreData () {
        return new Promise(resolve => {
          let $el = document.documentElement
          let $entry = this.$refs.entry
          let clientHeight= $el.clientHeight
          // let style = window.getComputedStyle ? window.getComputedStyle($entry, null): null || $entry.currentStyle
          let style = window.getComputedStyle ? window.getComputedStyle($entry, null) : null || $entry.currentStyle
          let containerHeight = ~~style.height.split('px')[0] + 140
          // 设置【返回顶部】显示隐藏
          console.log($el.scrollTop, clientHeight, containerHeight, this.scrollStatus)
          document.querySelector('.to-top-btn').classList[$el.scrollTop > 120 ? 'add' : 'remove']('show')
          // 滚动到一定高度，重新加载数据
          if ($el.scrollTop + clientHeight > containerHeight - 100 && this.scrollStatus) {
            getData(this.$store, this.$route.params, this).then(res => {
              resolve(res)
            })
          }
        })
      }
    }
  }
</script>
