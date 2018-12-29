<template>
  <div CLASS="categroy">
    <div class="categroy-setion">
      <h3>按拼音首字母选择：</h3>
      <p>
        <a
          v-for="item in list"
          :key="item"
          :href="'#city-'+item"
          class="categroy-setion-title">{{ item }}</a>
      </p>
    </div>
    <div class="categroy-city">
      <div
        id="city-A"
        class="categroy-city-item">
        <dl class="categroy-city-dl">
          <dt>A</dt>
          <dd>
            <span>鞍山</span>
            <span>鞍山</span>
            <span>鞍山</span>
            <span>wer鞍山</span>
            <span>鞍山</span>
            <span>鞍山</span>
            <span>鞍df山</span>
            <span>鞍山</span>
            <span>鞍山</span>
            <span>北京</span>
            <span>北平</span>
            <span>鞍山</span>
            <span>鞍山</span>
            <span>鞍山</span>
            <span>鞍sd山</span>
            <span>鞍山s</span>
            <span>鞍山</span>
            <span>鞍s山</span>
            <span>鞍山</span>
            <span>鞍山</span>
            <span>鞍山s</span>
            <span>鞍sf山</span>
            <span>鞍山df</span>
          </dd>
        </dl>
      </div>
      <div
        id="city-B"
        class="categroy-city-item">
        <dl class="categroy-city-dl">
          <dt>B</dt>
          <dd>
            <span>鞍山</span>
            <span>鞍山</span>
            <span>鞍山</span>
            <span>wer鞍山</span>
            <span>鞍山</span>
            <span>鞍山</span>
            <span>鞍df山</span>
            <span>鞍山</span>
            <span>鞍山</span>
            <span>鞍山s</span>
            <span>鞍山</span>
            <span>鞍山</span>
            <span>鞍山</span>
            <span>鞍山</span>
            <span>鞍sd山</span>
            <span>鞍山s</span>
            <span>鞍山</span>
            <span>鞍s山</span>
            <span>鞍山</span>
            <span>鞍山</span>
            <span>鞍山s</span>
            <span>鞍sf山</span>
            <span>鄂尔多斯</span>
          </dd>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
    }
  }
}
</script>

<style lang="scss">
.categroy {
  .categroy-setion {
    padding: 30px 0;
    h3 {
      display: inline-block;
    }
    p {
      max-width: 1000px;
      display: inline-block;
      .categroy-setion-title {
        color: #666;
        font-size: 15px;
        margin: 0 6px;
        text-align: center;
        width: 25px;
        height: 25px;
        box-sizing: border-box;
        border-radius: 50%;
        padding-top: 2px;
        //vertical-align: top;
        display: inline-block;
        &:hover {
          background: #f8f8f8;
        }
      }
    }
  }
  .categroy-city {
    .categroy-city-item {
      display: flex;
      padding: 13px 30px 13px 10px;
      border-radius: 10px;
      &:hover {
        /*padding: 13px 30px 13px 10px;*/
        /*border-radius: 10px;*/
        background: #f8f8f8;
      }
      .categroy-city-dl {
        dt {
          vertical-align: top;
          text-align: center;
          width: 40px;
          height: 40px;
          box-sizing: border-box;
          padding-top: 10px;
          display: inline-block;
          border-radius: 50%;
          color: #fff;
          background: #13d1be;
          box-shadow: 0 4px 5px 0 rgba(39, 178, 164, 0.22);
        }
        dd {
          display: inline-block;
          max-width: 1000px;
          span {
            margin: 10px 20px;
            color: #666;
            display: inline-block;
            font-size: 14px;
          }
        }
      }
    }
  }
}
</style>
