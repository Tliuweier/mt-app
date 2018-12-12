<template>
  <section class="m-istyle">
    <dl>
      <dt class="ftfamily">猫眼电影</dt>
      <dd class="all active">正在上映</dd>
      <dd class="part">即将上映</dd>
      <dd style="left: 74%;">全部<i class="el-icon-arrow-right"/> </dd>
    </dl>
    <el-carousel
      :autoplay="false"
      height="330px"
      indicator-position="outside">
      <el-carousel-item
        v-for="item in 2"
        :key="item">
        <div class="movie-bg">
          <div class="movie-item">
            <img
              src="//p0.meituan.net/movie/c106904da68edd848afd4a320976d051346321.jpg@267w_371h_1e_1c"
              class="image film-img">
            <img
              src="//s0.meituan.net/bs/fe-web-meituan/25e6614/img/imax3d.png"
              class="film-mark">
            <div class="film-info">
              <p class="film-score">
                <b>观众评  <span>9.5</span></b>
              </p>
              <p class="film-name">海王</p>
              <span class="buy-ticket">购票</span>
            </div>
          </div>
          <div class="movie-item">
            <img
              src="//p0.meituan.net/movie/c106904da68edd848afd4a320976d051346321.jpg@267w_371h_1e_1c"
              class="image film-img">
            <img
              src="//s0.meituan.net/bs/fe-web-meituan/25e6614/img/imax3d.png"
              class="film-mark">
            <div class="film-info">
              <p class="film-score">
                <b>观众评  <span>9.5</span></b>
              </p>
              <p class="film-name">海王</p>
              <span class="buy-ticket">购票</span>
            </div>
          </div>
          <div class="movie-item">
            <img
              src="//p0.meituan.net/movie/c106904da68edd848afd4a320976d051346321.jpg@267w_371h_1e_1c"
              class="image film-img">
            <img
              src="//s0.meituan.net/bs/fe-web-meituan/25e6614/img/imax3d.png"
              class="film-mark">
            <div class="film-info">
              <p class="film-score">
                <b>观众评  <span>9.5</span></b>
              </p>
              <p class="film-name">海王</p>
              <span class="buy-ticket">购票</span>
            </div>
          </div>
          <div class="movie-item">
            <img
              src="//p0.meituan.net/movie/c106904da68edd848afd4a320976d051346321.jpg@267w_371h_1e_1c"
              class="image film-img">
            <img
              src="//s0.meituan.net/bs/fe-web-meituan/25e6614/img/imax3d.png"
              class="film-mark">
            <div class="film-info">
              <p class="film-score">
                <b>观众评  <span>9.5</span></b>
              </p>
              <p class="film-name">海王</p>
              <span class="buy-ticket">购票</span>
            </div>
          </div>

        </div>
      </el-carousel-item>
    </el-carousel>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss">
@import '@/assets/css/index/artistic.scss';
.m-istyle {
  dl {
    background: linear-gradient(
        to right,
        rgb(250, 60, 104) 2%,
        rgb(254, 70, 77) 97%
      )
      rgb(250, 60, 104);
  }
  .el-carousel {
    background: #fff;
    .movie-bg {
      width: 100%;
      padding: 20px 40px 40px 40px;
      .movie-item {
        width: 25%;
        float: left;
        .film-img {
          width: 214px;
          height: 291px;
          border-radius: 4px;
          border: 0;
        }
        .film-mark {
          height: 20px;
          width: auto;
          bottom: 286px;
          position: relative;
          left: -8px;
          box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2);
        }
        .film-info {
          position: absolute;
          width: 214px;
          height: 110px;
          bottom: 20px;
          border-bottom-left-radius: 4px;
          border-bottom-right-radius: 4px;
          background-image: linear-gradient(
            -180deg,
            rgba(0, 0, 0, 0) 0,
            rgba(29, 45, 55, 0.8) 99%
          );
          .film-score {
            font-size: 12px;
            color: #fff;
            text-align: left;
            margin-top: 48px;
            padding-left: 10px;
            font-weight: 500;
            span {
              color: #fd9827;
              font-size: 16px;
            }
          }
          .film-name {
            text-align: left;
            color: #fff;
            padding-left: 10px;
            font-size: 16px;
            white-space: nowrap;
            width: 6em;
            overflow: hidden;
            text-overflow: ellipsis;
            font-weight: 500;
          }
          .buy-ticket {
            background: #ff4949;
            border-radius: 100px;
            color: #fff;
            padding: 2px 12px 3px;
            font-size: 14px;
            position: relative;
            top: -30px;
            cursor: pointer;
            line-height: 20px;
            text-align: center;
            float: right;
            right: 10px;
          }
        }
      }
    }
  }
}
</style>
