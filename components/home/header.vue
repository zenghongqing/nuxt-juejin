<template>
  <header class="v-header">
    <div class="header-container">
      <nuxt-link to="/">
        <img src="~/assets/img/juejin.svg" alt="掘金" class="logo-img">
      </nuxt-link>
      <nav class="main-nav">
        <ul class="nav-list">
          <li class="main-nav-list">
            <v-dropdown />
          </li>
          <li class="nav-item search">
            <v-input />
          </li>
          <li class="nav-item submit">
            <img src="~/assets/img/write.svg">
            <span>写文章</span>
          </li>
          <li class="nav-item auth">
            <span class="login">登录</span>
            <span class="register">注册</span>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
<style lang="scss" scoped>
  .v-header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 5rem;
    background: #fff;
    color: #909090;
    z-index: 99;
    border-bottom: 1px solid #f1f1f1;
    .header-container {
      width: 96%;
      margin: auto;
      max-width: 960px;
      height: 100%;
      align-items: center;
      position: relative;
      display: flex;
      align-items: center;
    }
    .main-nav {
      height: 100%;
      flex: 1 0 auto;
      .nav-list {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        position: relative;
        .main-nav-list {
          display: flex;
          cursor: pointer;
          font-weight: 500;
          z-index: 100;
        }
        .nav-item {
          display: flex;
          align-items: center;
          height: 100%;
          margin: 0;
          color: #71777c;
          padding: 0 1.2rem;
          font-size: 1.3rem;
          -ms-flex-pack: center;
          justify-content: center;
          position: relative;
          cursor: pointer;
          font-weight: 500;
          &:hover {
            color: #007fff;
          }
          &:last-child {
            padding-right: 0;
          }
          &.search {
            -webkit-box-flex: 1;
            -ms-flex: 1 1 auto;
            flex: 1 1 auto;
            -webkit-box-pack: end;
            -ms-flex-pack: end;
            justify-content: flex-end;
            cursor: auto;
          }

          &.auth {
            color: #007fff;
            flex: 0 0 1;
            .login {
              &::after {
                content: "\B7";
                margin: 0 .4rem;
              }
            }
          }
          &.submit {
            color: #007fff;
            &::after {
              content: "|";
              position: absolute;
              /*top: calc(50% - 0.5rem);*/
              left: 100%;
              color: hsla(0, 0%, 59%, .4);
            }
          }
          .nav-item.link-item {
            padding: 0 20px;
            height: 5rem
          }
        }
      }
    }
  }

  @media screen and (max-width: 980px) {
    .nav-item {
      height: 4rem;
      line-height: 4rem;
      font-size: 1.33rem;
    }
    .main-nav-list {
      display: block;
      position: absolute;
      left: 0;
      top: 0;
      background-color: #fff;
    }
    .nav-item.add,
    .nav-item.search,
    .nav-item.submit {
      display: none;
    }
  }

</style>
<script>
  import VInput from "../input";
  import VDropdown from "../dropdown";
  export default {
    components: {VDropdown, VInput}
  }
</script>
