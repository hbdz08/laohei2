<template>
  <v-footer
    id="home-footer"
    color="black"
    dark
    min-height="72"
  >
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="6"
        >
          <div class="d-flex flex-wrap justify-md-start justify-center justify-md-none">
            <template v-for="(s, i) in result">
              <a
                :key="s.social"
                class="white--text pa-1 pa-md-0"
                :href="s.href"
                v-text="s.social"
              />

              <v-responsive
                v-if="i < result.length - 1"
                :key="`divider-${s.social}`"
                class="mx-4 shrink hidden-sm-and-down"
                max-height="24"
              >
                <v-divider vertical />
              </v-responsive>
            </template>
          </div>
        </v-col>

        <v-col
          class="text-center text-md-right"
          cols="12"
          md="6"
        >
          Copyright &copy; 2021 laoheisf
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
  export default {
    name: 'HomeFooter',

    data: () => ({

      result: [{
        social: '加入QQ群',
        href: 'https://qm.qq.com/cgi-bin/qm/qr?k=YpfueL5nCiCz4ZO5XjVFCEmjbSWLiQMS&jump_from=webapi"><img border="0" src="//pub.idqqimg.com/wpa/images/group.png" alt="老黑私服-传奇1群" title="老黑私服-传奇1群"',
      }],
    }),
  }
</script>

<style lang="sass">
  #home-footer a
    text-decoration: none
</style>
