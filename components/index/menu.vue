<template>
  <div class="m-menu">
    <dl
      class="nav"
      @mouseleave="mouseleave">
      <dt>全部分类</dt>
      <dd
        v-for="(item ,index) in menu"
        :key="index"
        @mouseenter="enter">
        <i :class="item.type"/>{{ item.name }}<span class="arrow"/>
      </dd>
    </dl>
    <div
      v-if="kind"
      class="detail"
      @mouseenter="sover"
      @mouseleave="sout">
      <template
        v-for="(item,indes) in curdetail.child">
        <h4 :key="indes">{{ item.title }}</h4>
        <span
          v-for="(itemchild) in item.child"
          :key="itemchild">
          {{ itemchild }}
        </span>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      kind: '',
      menu: [
        {
          name: '美食',
          type: 'food',
          child: [
            {
              title: '美食',
              child: ['代金券', '甜点饮品', '火锅', '自助餐', '小吃快餐']
            }
          ]
        },
        {
          name: '外卖',
          type: 'takeout',
          child: [
            {
              title: '外卖',
              child: ['美团外卖']
            }
          ]
        },
        {
          name: '酒店',
          type: 'hotel',
          child: [
            {
              title: '酒店星级',
              child: ['经济型', '舒适/三星', '高档/四星', '豪华/五星']
            }
          ]
        },
        {
          name: '猫眼电影',
          type: 'movie',
          child: [
            {
              title: '猫眼电影',
              child: ['毒液：致命守护者']
            },
            {
              title: '热门影院',
              child: ['金逸影城', '万达影城']
            }
          ]
        }
      ]
    }
  },
  computed: {
    curdetail: function() {
      return this.menu.filter(item => item.type === this.kind)[0]
    }
  },
  methods: {
    mouseleave: function() {
      let self = this
      self._timer = setTimeout(function() {
        self.kind = ''
      }, 150)
    },
    enter: function(e) {
      this.kind = e.target.querySelector('i').className
    },
    sout: function() {
      this.kind = ''
    },
    sover: function() {
      clearTimeout(this._timer)
    }
  }
}
</script>

<style>
</style>
