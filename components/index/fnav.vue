<template>
  <div class="botton-nav">
    <div class="title">美团导航</div>
    <div class="b-n-content">
      <div class="b-n-classification">
        <dt class="b-n-subtitle">热门城市</dt>
        <div
          class="b-n-sublist">
          <dd class="b-n-list-item"><a>重庆</a></dd>
          <dd class="b-n-list-item"><a>深圳</a></dd>
          <dd class="b-n-list-item"><a>苏州</a></dd>
          <dd class="b-n-list-item"><a>杭州</a></dd>
          <dd class="b-n-list-item"><a>东莞</a></dd>
          <dd class="b-n-list-item"><a>郑州</a></dd>
          <dd class="b-n-list-item"><a>沈阳</a></dd>
          <dd class="b-n-list-item"><a>厦门</a></dd>
          <dd class="b-n-list-item"><a>宁波</a></dd>
          <dd class="b-n-list-item"><a>西安</a></dd>
          <dd class="b-n-list-item"><a>贵阳</a></dd>
          <dd class="b-n-list-item"><a>常州</a></dd>
          <dd class="b-n-list-item"><a>南京</a></dd>
          <dd class="b-n-list-item"><a>成都</a></dd>
          <dd class="b-n-list-item"><a>武汉</a></dd>
          <dd class="b-n-list-item"><a>北京</a></dd>
        </div>
      </div>
      <div class="b-n-classification">
        <dt class="b-n-subtitle">热门分类</dt>
        <div
          class="b-n-sublist">
          <dd class="b-n-list-item"><a>重庆</a></dd>
          <dd class="b-n-list-item"><a>深圳</a></dd>
          <dd class="b-n-list-item"><a>苏州</a></dd>
          <dd class="b-n-list-item"><a>贵阳</a></dd>
          <dd class="b-n-list-item"><a>常州</a></dd>
          <dd class="b-n-list-item"><a>南京</a></dd>
          <dd class="b-n-list-item"><a>成都</a></dd>
          <dd class="b-n-list-item"><a>武汉</a></dd>
          <dd class="b-n-list-item"><a>大连</a></dd>
          <dd class="b-n-list-item"><a>广州</a></dd>
          <dd class="b-n-list-item"><a>福州</a></dd>
          <dd class="b-n-list-item"><a>昆明</a></dd>
          <dd class="b-n-list-item"><a>北京</a></dd>
        </div>
      </div>
      <div class="b-n-classification">
        <dt class="b-n-subtitle">周边热门</dt>
        <div
          class="b-n-sublist">
          <dd class="b-n-list-item"><a>重庆</a></dd>
          <dd class="b-n-list-item"><a>深圳</a></dd>
          <dd class="b-n-list-item"><a>苏州</a></dd>
          <dd class="b-n-list-item"><a>杭州</a></dd>
          <dd class="b-n-list-item"><a>东莞</a></dd>
          <dd class="b-n-list-item"><a>郑州</a></dd>
          <dd class="b-n-list-item"><a>沈阳</a></dd>
          <dd class="b-n-list-item"><a>厦门</a></dd>
          <dd class="b-n-list-item"><a>宁波</a></dd>
          <dd class="b-n-list-item"><a>南京</a></dd>
          <dd class="b-n-list-item"><a>成都</a></dd>
          <dd class="b-n-list-item"><a>武汉</a></dd>
          <dd class="b-n-list-item"><a>大连</a></dd>
          <dd class="b-n-list-item"><a>广州</a></dd>
          <dd class="b-n-list-item"><a>福州</a></dd>
          <dd class="b-n-list-item"><a>昆明</a></dd>
          <dd class="b-n-list-item"><a>北京</a></dd>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.botton-nav {
  width: 1170px;
  height: auto;
  border-radius: 5px;
  background: #ffffff;
  border: 1px solid #e5e5e5;
  margin: 40px 0 0 20px;
  .title {
    height: 44px;
    line-height: 44px;
    padding-left: 20px;
    font-size: 16px;
    background: #0ecac7;
    color: #ffffff;
    background-image: linear-gradient(-90deg, #0ecac7 0, #06c1ae 100%);
  }
  .b-n-content {
    width: 100%;
    height: auto;
    .b-n-classification {
      width: 100%;
      height: auto;
      overflow: hidden;
      .b-n-subtitle {
        width: 100px;
        height: 100%;
        float: left;
        font-weight: 500;
        color: #222222;
        text-align: center;
        padding: 10px 0;
        font-size: 14px;
      }
      .b-n-sublist {
        width: 1070px;
        height: auto;
        padding-top: 12px;
        float: left;
        border-bottom: 1px solid #e5e5e5;
        overflow: hidden;
        .b-n-list-item {
          float: left;
          width: 100px;
          font-size: 12px;
          text-align: center;
          margin-bottom: 13px;
          a {
            color: #666;
            overflow: hidden;
            width: 8px;
            white-space: nowrap;
            cursor: pointer;
            //display: block;
            text-overflow: ellipsis;
          }
        }
      }
      &:last-child > .b-n-sublist {
        border-bottom: none;
      }
    }
  }
}
</style>
