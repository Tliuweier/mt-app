<template>
  <section class="m-istyle">
    <dl>
      <dt class="ftfamily">有格调</dt>
      <dd class="all active">全部</dd>
      <dd class="part">约会聚餐</dd>
      <dd class="spa">丽人SPA</dd>
      <dd class="movie">电影演出</dd>
      <dd class="travel">品质旅游</dd>
    </dl>
    <ul class="ibody">
      <li>
        <el-card
          :body-style="{ padding: '0px'}"
          shadow="never">
          <img
            src="//p1.meituan.net/msmerchant/ce9e9de0ba1c55e2385490df1233de9a1483117.jpg@460w_260h_1e_1c"
            class="image">
          <ul class="cbody">
            <li class="title">牛一方潮汕牛肉火锅（越华路店）</li>
            <li class="tips">4人套餐，提供免费WiFi</li>
            <li class="price">￥<em>196</em><span class="old-price">门市价¥246</span> <span class="address">越秀区</span></li>
          </ul>
        </el-card>
      </li>
      <li>
        <el-card
          :body-style="{ padding: '0px'}"
          shadow="never">
          <img
            src="//p0.meituan.net/msmerchant/7eab68904b689d33a89f8ce602248885387368.jpg@460w_260h_1e_1c"
            class="image">
          <ul class="cbody">
            <li class="title">花椒诱惑砂锅酸菜鱼（中华广场店）</li>
            <li class="tips">四人套餐</li>
            <li class="price">￥<em>208</em><span class="old-price">门市价¥300</span> <span class="address">中山二三路/东山口</span></li>
          </ul>
        </el-card>
      </li>
      <li>
        <el-card
          :body-style="{ padding: '0px'}"
          shadow="never">
          <img
            src="//p0.meituan.net/msmerchant/83bf164409132fc35943db3da77ad1a548964.jpg@460w_260h_1e_1c"
            class="image">
          <ul class="cbody">
            <li class="title">至厚牛排（保利时光里中环广场店）</li>
            <li class="tips">至厚牛排：真情双人套餐，享免费停车两小时，可免费使用包间55555555S</li>
            <li class="price">￥<em>359</em><span class="old-price">门市价¥520</span> <span class="address">建设六马路</span></li>
          </ul>
        </el-card>
      </li>
      <li>
        <el-card
          :body-style="{ padding: '0px'}"
          shadow="never">
          <img
            src="//p1.meituan.net/msmerchant/5d10d27c7b145d00b43e4ab04b2e57442176078.jpg@460w_260h_1e_1c"
            class="image">
          <ul class="cbody">
            <li class="title">必胜客（五月花店）</li>
            <li class="tips">西班牙风情海鲜意面1份</li>
            <li class="price">￥<em>23</em><span class="old-price">门市价¥39</span> <span class="address">越秀区</span></li>
          </ul>
        </el-card>
      </li>
      <li>
        <el-card
          :body-style="{ padding: '0px'}"
          shadow="never">
          <img
            src="//p1.meituan.net/msmerchant/e49fdb28e76bb8b0496ca4d44b771e9436317.jpg@460w_260h_1e_1c"
            class="image">
          <ul class="cbody">
            <li class="title">韵园四季椰子鸡（光明广场店）</li>
            <li class="tips">乐聚四人椰子鸡，提供免费WiFi</li>
            <li class="price">￥<em>289</em><span class="old-price">门市价¥412</span> <span class="address">北京路商业区</span></li>
          </ul>
        </el-card>
      </li>
      <li>
        <el-card
          :body-style="{ padding: '0px'}"
          shadow="never">
          <img
            src="//p1.meituan.net/msmerchant/a86e0e312ca9c08c8bc057eb73c15faa77759.jpg@460w_260h_1e_1c"
            class="image">
          <ul class="cbody">
            <li class="title">元气寿司（国金中心店）</li>
            <li class="pos"><span>元气寿司</span></li>
            <li class="price">￥<em>29</em><span>/起</span></li>
          </ul>
        </el-card>
      </li>
    </ul>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss">
@import '@/assets/css/index/artistic.scss';
.tips {
  font-size: 12px;
  color: #999;
  line-height: 18px;
  height: 14px;
  margin-bottom: 5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.old-price {
  color: #999;
  text-decoration: line-through;
}
.address {
  color: #999;
  float: right;
}
</style>
