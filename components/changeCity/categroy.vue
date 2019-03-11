<template>
  <div CLASS="categroy">
    <div class="categroy-setion">
      <h3>按拼音首字母选择：</h3>
      <p>
        <a
          v-for="item in opencitylists"
          :key="item[0]"
          :href="'#city-'+item[0]"
          class="categroy-setion-title">{{ item[0] }}</a>
      </p>
    </div>
    <div class="categroy-city">

      <div
        v-for="item2 in opencitylists"
        :id="'city-'+item2[0]"
        :key="item2[0]"
        class="categroy-city-item">
        <dl class="categroy-city-dl">
          <dt>{{ item2[0] }}</dt>
          <dd>
            <span
              v-for="citem in item2[1]"
              :style="citem.rank ==='S'||citem.rank==='A'?'color:#F60':'color:#666'"
              :key="citem.id">{{ citem.name }}</span>
          </dd>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    opencitylists: {
      type: Array,
      default() {
        return []
      }
    }
  },
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
