<template>
  <section id="hero">
    <v-img
      :min-height="minHeight"
      :src="require('@/assets/973b85e1fcf41d7df472a67f25e08e5a.jpg')"
      class="white--text"
      gradient="to bottom, rgba(11, 28, 61, .9), rgba(0,0,0,.4)"
    >
      <v-container class="fill-height px-4 py-12">
        <v-responsive
          class="d-flex align-center mx-auto"
          height="100%"
          max-width="700"
          width="100%"
        >
          <base-subheading
            weight="regular"
            title=" 土豪私人订制 开新区 开新版本 专门为您订制服务 "
          />
          <base-subheading
            weight="regular"
            title=" 微信:KSsflaohei "
          />
          <base-heading
            size="text-h2"
            title="欢迎来到传奇老黑"
            weight="medium"
          />

          <!-- <base-body>
          </base-body> -->

          <div
            :class="$vuetify.breakpoint.smAndDown ? 'flex-column align-start' : 'align-center'"
            class="d-flex flex-wrap"
          >
            <base-btn href="#theme-features">
              登录器下载
            </base-btn>

            <span class="font-weight-bold ml-6 mr-4 my-4">or</span>

            <base-btn
              :ripple="false"
              class="pa-1"
              height="auto"
              text
            >
              游戏充值
            </base-btn>
          </div>
        </v-responsive>
      </v-container>
    </v-img>
  </section>
</template>

<script>
  export default {
    name: 'SectionHero',

    provide: {
      theme: { isDark: true },
    },

    computed: {
      minHeight () {
        const height = this.$vuetify.breakpoint.mdAndUp ? '100vh' : '50vh'

        return `calc(${height} - ${this.$vuetify.application.top}px)`
      },
    },
  }
</script>
