<template>
  <v-theme-provider dark>
    <section
      id="gameIntroduction"

      space="56"
    >
      <v-img
        :src="require('@/assets/b1.jpg')"
        min-height="minHeight"

        gradient="to bottom, rgba(11, 28, 61, .1), rgba(0,0,0,.4)"
      />
    </section>
  </v-theme-provider>
</template>

<script>
  export default {
    name: 'SectionGameIntroduction',

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
