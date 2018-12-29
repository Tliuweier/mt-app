<template>
  <div class="comment">
    <div class="title">6条网友点评 <span>质量排序</span><span>时间排序</span></div>
    <div class="com-cont clear">
      <div class="sea">只看图片的评论</div>
      <div>
        <div class="list clear">
          <div class="header">
            <img src="../../assets/img/test1.jpg">
          </div>
          <div class="info">
            <div class="name">燃烧我的卡路里</div>
            <div class="date">2019-01-01</div>
            <div class="source">评分：4.6分</div>
            <div class="desc">燃烧我的卡路里，挺好吃的</div>
            <div class="noshowBigImg">
              <img src="../../assets/img/meituan.png">
            </div>
            <div class="lines"/>
          </div>
        </div>
        <div class="list clear">
          <div class="header">
            <img src="../../assets/img/test1.jpg">
          </div>
          <div class="info">
            <div class="name">燃烧我的卡路里</div>
            <div class="date">2019-01-01</div>
            <div class="source">评分：4.6分</div>
            <div class="desc">燃烧我的卡路里，挺好吃的</div>
            <div class="lines"/>
          </div>
        </div>
        <div class="mt-pagination">
          <ul class="pagination clear">
            <li>
              <span class=" el-icon-arrow-left"/>
            </li>
            <li>
              <span class="active">1</span>
            </li>
            <li>
              <span class="el-icon-arrow-right"/>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.comment {
  margin-top: 20px;
  margin-left: 20px;
  .title {
    font-size: 18px;
    color: #222;
    margin-bottom: 8px;
    span {
      font-size: 12px;
      color: #666;
    }
  }
  .com-cont {
    border: 1px solid #e5e5e5;
    border-radius: 5px;
    box-shadow: 0 5px 14px 0 rgba(0, 0, 0, 0.1);
    background: #fff;
    padding: 0 20px 40px;
    .sea {
      margin-top: 22px;
      font-size: 14px;
    }
    .list {
      padding: 20px 0 0;
      .header {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        float: left;
        img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
      }
      .info {
        float: left;
        width: 800px;
        padding-left: 20px;
        position: relative;
        top: -40px;
        .name {
          font-size: 16px;
          color: #222;
          line-height: 22px;
          margin-bottom: 1px;
        }
        .date {
          font-size: 12px;
          line-height: 20px;
          color: #999;
        }
        .desc {
          font-size: 14px;
          line-height: 20px;
          padding-top: 13px;
        }
        .noshowBigImg {
          img {
            width: 140px;
            height: 140px;
          }
        }
        .lines {
          margin-top: 40px;
          height: 1px;
          overflow: hidden;
          border-bottom: 1px solid #e5e5e5;
        }
      }
    }
    .mt-pagination {
      text-align: center;
      ul {
        list-style: none;
        display: inline-block;
        li {
          display: inline-block;
          width: 40px;
          height: 40px;
          margin: 0 10px;
          font-size: 16px;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
          transition: background-color 0.5s;
          span {
            border: 1px solid #e5e5e5;
            display: block;
            width: 100%;
            height: 100%;
            border-radius: 50%;
            text-decoration: none;
            line-height: 40px;
          }
          .active {
            color: #fff;
            background-color: #13d1be;
            border-color: #13d1be;
          }
        }
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
</style>
