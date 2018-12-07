<template>
  <div class="m-user">
    <template v-if="user">
      <span class="username">{{ user }}</span>
      [<nuxt-link
        class="none-left"
        to="/exit">退出</nuxt-link>]
    </template>
    <template v-else>
      <nuxt-link
        to="/login"
        class="login">立即登录</nuxt-link>
      <nuxt-link
        to="/register"
        class="register">注册</nuxt-link>
    </template>
  </div>
</template>

<script>
export default {
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
.m-user {
  a {
    margin-left: 15px;
  }
  .none-left {
    margin-left: 0px;
    color: #999999;
  }
  .register {
    color: #999;
  }
  .username {
    color: #31bbac;
  }
}
</style>
