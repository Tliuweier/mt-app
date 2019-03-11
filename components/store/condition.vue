<template>
  <div class="filter">
    <div class="hasSelect">
      <span class="nor">已选条件</span>
      <span class="sel">
        <el-tag
          type="info"
          size="mini"
          closable>
          天河区
        </el-tag>
      </span>
      <span class="clearAll">清除全部</span>
    </div>
    <div class="condition">
      <div class="cont clear">
        <div class="classification">分类</div>
        <div class="all">全部</div>
        <ul class="more clear">
          <li>
            <a class="on" >代金券</a>
          </li>
          <li>
            <a class="on" >蛋糕甜点</a>
          </li>
          <li>
            <a class="on" >火锅</a>
          </li>
          <li>
            <a class="on" >自助餐</a>
          </li>
          <li>
            <a class="on" >小吃快餐</a>
          </li>
          <li>
            <a class="on" >快餐</a>
          </li>
          <li>
            <a class="on" >日本料理</a>
          </li>
        </ul>
      </div>
      <div class="cont clear">
        <div class="classification">分类</div>
        <div class="all">全部</div>
        <ul class="more clear">
          <li>
            <a class="on" >代金券</a>
          </li>
          <li>
            <a class="on" >蛋糕甜点</a>
          </li>
          <li>
            <a class="on" >火锅</a>
          </li>
          <li>
            <a class="on" >自助餐</a>
          </li>
          <li>
            <a class="on" >小吃快餐</a>
          </li>
          <li>
            <a class="on" >快餐</a>
          </li>
          <li>
            <a class="on" >日本料理</a>
          </li>
        </ul>
      </div>
      <div class="cont clear">
        <div class="classification">分类</div>
        <div class="all">全部</div>
        <ul class="more clear">
          <li>
            <a class="on" >代金券</a>
          </li>
          <li>
            <a class="on" >蛋糕甜点</a>
          </li>
          <li>
            <a class="on" >火锅</a>
          </li>
          <li>
            <a class="on" >自助餐</a>
          </li>
          <li>
            <a class="on" >小吃快餐</a>
          </li>
          <li>
            <a class="on" >快餐</a>
          </li>
          <li>
            <a class="on" >日本料理</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
ul {
  list-style: none;
}
.filter {
  margin-left: 20px;
  margin-top: 30px;
  background: #fff;
  box-shadow: 0 5px 14px 0 rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e5e5;
  border-radius: 5px;
  .hasSelect {
    cursor: pointer;
    height: 20px;
    padding: 10px 0 10px 20px;
    line-height: 20px;
    border-bottom: 1px solid #e5e5e5;
    font-size: 12px;
    .nor {
      font-size: 14px;
      color: #333;
      margin-right: 18px;
    }
    .sel {
      margin-right: 10px;
    }
    .clearAll {
      color: #999;
    }
  }
  .condition {
    padding-left: 20px;
    .cont {
      padding: 10px 0 0;
      line-height: 20px;
      overflow: hidden;
      .classification {
        width: 65px;
        color: #333;
        font-size: 14px;
        float: left;
      }
      .all {
        width: 53px;
        text-align: center;
        margin: 0 13px 9px;
        color: #666;
        float: left;
        font-size: 14px;
        cursor: pointer;
      }
      .more {
        color: #666;
        float: left;
        border-bottom: 1px solid #e5e5e5;
        width: 700px;
        li {
          float: left;
          height: 28px;
          font-size: 14px;
          cursor: pointer;
          min-width: 105px;
        }
      }
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
}
</style>
