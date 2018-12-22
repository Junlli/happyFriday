<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  beforeCreate () {
    document.querySelector('body').setAttribute('style', 'background-image:url(https://cangdu.org/happyfri/static/img/1-1.jpg)')
  },
  beforeDestroy () {
    document.querySelector('body').setAttribute('style', '')
  }
}
</script>


<style lang="scss">
  body {
    background: url(https://cangdu.org/happyfri/static/img/1-1.jpg) no-repeat;
    background-size: 100% 100%;
  }
</style>
