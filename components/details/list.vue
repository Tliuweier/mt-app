<template>
  <div class="details-list">
    <h2>商家团购及优惠</h2>

    <div v-if="user">
      <div class="itemlist clear">
        <h2
          style="padding: 10px 0 10px 20px;
          ">
          {{ deallist.deals.length }}款堂食套餐
        </h2>
        <item-list
          v-for="(dealsList,index) in deallist.deals"
          :key="index"
          :deals="dealsList"/>

      </div>
      <div class="itemlist clear">
        <h2
          style="padding: 10px 0 10px 20px;">
          {{ deallist.vouchers.length }}张代金券
        </h2>
        <vouchers-list
          v-for="(vouchersList,index) in deallist.vouchers"
          :key="index"
          :vouchers="vouchersList"/>

      </div>
    </div>
    <div
      v-else
      class="item">
      <img src="../../assets/img/meituan.png">
      <span>请登陆后查看详细团购优惠</span>
      <el-button
        round
        size="small">立即登录</el-button>
    </div>
  </div>
</template>

<script>
import itemList from './item-list.vue'
import vouchersList from './vouchers-list.vue'
export default {
  components: {
    itemList,
    vouchersList
  },
  props: {
    deallist: {
      type: Object,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      user: ''
    }
  },
  async mounted() {
    const {
      status,
      data: { user }
    } = await this.$axios.get('/users/getUser')
    if (status === 200) {
      this.user = user
    }
  }
}
</script>

<style lang="scss">
.details-list {
  margin: 30px 0 0 20px;
  .item {
    margin-top: 10px;
    border: 1px solid #e5e5e5;
    border-radius: 10px;
    box-shadow: 0 5px 14px 0 rgba(0, 0, 0, 0.1);
    background: #fff;
    font-size: 14px;
    color: #666;
    text-align: center;
    padding: 10px 0;
    img {
      width: 160px;
      height: 120px;
    }
    span {
      display: block;
      margin: 10px 0 14px;
    }
    .el-button {
      width: 120px;
      height: 40px;
      line-height: 0px;
      background: #13d1be;
      color: #666;
    }
  }
  .itemlist {
    padding: 0px 20px 0px 20px;
    border: 1px solid #e5e5e5;
    box-shadow: 0 5px 14px 0 rgba(0, 0, 0, 0.1);
    background: #fff;
    margin-top: 10px;
    border-radius: 10px;
    color: #666;
  }
  .clear {
    &:after {
      clear: both;
      content: '';
      display: block;
      width: 0;
      height: 0;
    }
  }
}
</style>
