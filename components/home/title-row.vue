<template>
  <div class="info-row title-row">
    <span class="title">{{title}}</span>
  </div>
</template>
<script>
  export default {
    name: 'TitleRow',
    props: {
      title: {
        type: String,
        default: ''
      }
    }
  }
</script>
<style lang="scss" scoped>
  .title-row {
    margin: 0.5rem 0 0.8rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .title {
    font-size: 1.4rem;
    font-weight: 600;
    line-height: 1.2;
    color: #2e3135;
    cursor: pointer;
    &:hover {
      color: #007fff;
    }
  }
  @media screen and (max-width: 600px) {
    .title {
      font-size: 1.2rem;
    }
  }
</style>
