<template>
  <div
    :id="id"
    style="width: 300px;height: 300px;margin: 34px auto"
    class="m-map"/>
</template>

<script>
export default {
  data() {
    return {
      point: [113.2759, 23.1171],
      id: `map`,
      key: 'b64dc20a6e7ff2f6e2d1a8ba57c9a380'
    }
  },
  mounted() {
    let self = this
    self.id = `map${Math.random()
      .toString()
      .slice(4, 6)}`
    window.onmaploaded = () => {
      let map = new window.AMap.Map(self.id, {
        resizeEnable: true,
        zoom: 13,
        center: self.point
      })
      self.map = map
      let marker = new AMap.Marker({
        icon: 'https://webapi.amap.com/theme/v1.3/markers/n/mark_b.png',
        position: self.point,
        offset: new AMap.Pixel(-17, -42)
      })
      map.add(marker)
    }
    const url = `https://webapi.amap.com/maps?v=1.4.10&key=${
      self.key
    }&callback=onmaploaded`
    let jsapi = document.createElement('script')
    jsapi.charset = 'utf-8'
    jsapi.src = url
    document.head.appendChild(jsapi)
  }
}
</script>

<style lang="scss">
</style>
