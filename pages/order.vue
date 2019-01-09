<template>
  <div class="order">
    <div class="bd">
      <table>
        <tbody>
          <tr>
            <th>项目</th>
            <th>单价</th>
            <th class="num">数量</th>
            <th>总价</th>
          </tr>
          <tr>
            <td>
              澳煮意·茶餐厅: 澳煮意·茶餐厅2人餐
            </td>
            <td>
              ￥128
            </td>
            <td>
              <div class="input-number">
                <button class="minus-btn">-</button>
                <input
                  type="text"
                  class="input"
                  value="1">
                <button class="plus-btn">+</button>
              </div>
            </td>
            <td>
              <span class="colorprice">￥128</span>
            </td>
          </tr>
          <tr class="price">
            <td/>
            <td/>
            <td/>
            <td>应付金额：<span class="colorprice">￥128</span></td>
          </tr>
          <tr>
            <td/>
            <td/>
            <td/>
            <td>
              <el-button>提交订单</el-button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.order {
  margin-top: 20px;
  margin-left: 20px;
  .bd {
    width: 980px;
    background-color: #fff;
    margin: 10px auto 0;
  }
  table {
    background-color: #fff;
    width: 100%;
    border-radius: 5px;
    box-sizing: border-box;
    padding: 0 20px;
    border-collapse: collapse;
    border-spacing: 0;
    th {
      padding: 6px 16px;
      font-size: 14px;
      font-weight: 700;
      background-color: #e7e7e7;
      text-align: right;
      &:first-child {
        width: 500px;
        text-align: left;
      }
      &:last-child {
        text-align: right;
      }
    }
    .num {
      text-align: center;
    }
    td {
      padding: 12px 16px;
      color: #666;
      text-align: center;
      font-size: 20px;
      text-align: right;
      &:first-child {
        width: 500px;
        text-align: left;
      }
      &:last-child {
        text-align: right;
        .colorprice {
          color: #f76120;
        }
      }
      .el-button {
        color: #fff;
        background-color: #2db3a6;
      }
      .input-number {
        display: inline-block;
        border: 1px solid #e5e5e5;
        border-radius: 2px;
        button {
          position: relative;
          box-sizing: content-box;
          font-size: 0;
          outline: 0;
          background-color: #fff;
          cursor: pointer;
          vertical-align: top;
          padding: 0;
          width: 34px;
          height: 34px;
          border: none;
        }
        .input {
          color: #222;
          border: 1px solid #e5e5e5;
          border-top: none;
          border-bottom: none;
          vertical-align: top;
          font-size: 14px;
          text-align: center;
          padding: 0;
          width: 34px;
          height: 34px;
          outline: 0;
        }
        .minus-btn {
          font-size: 16px;
        }
        .plus-btn {
          font-size: 16px;
        }
      }
    }
    .price {
      padding: 12px;
      border-top: 1px solid #e5e5e5;
      border-bottom: 1px solid #e5e5e5;
    }
  }
}
</style>
