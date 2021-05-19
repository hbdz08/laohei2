<template>
  <base-section id="theme-features">
    <base-section-heading
      title="[老黑版本介绍] 《倾情推荐所有版本》"
      style="color:red"
    >
      自动捡取 动收 绝不隐藏爆率 小消费 大激情 散人也能逆袭
      <br>
      沙捐赞助免费 散人好发育
    </base-section-heading>

    <v-container>
      <v-simple-table
        class="simple-table"
      >
        <thead>
          <tr>
            <th class="text-left">
              推荐服务器
            </th>
            <th class="text-left">
              版本介绍(开区时间)
            </th>
            <th class="text-left">
              开区状态
            </th>
            <th class="text-left">
              下载网站
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in data.list"
            :key="item.name"
          >
            <td
              style="color:#72147e"
              v-html="item.name"
            >
              {{ item.name }}
            </td>
            <td
              style="color:#ff5200;"
            >
              <div v-if="item.openTime != ''">
                {{ item.openTime }}
              </div>
              <div v-if="item.version != ''">
                {{ item.version }}
              </div>
            </td>
            <td
              class="state-color"
              style="color:#f21170;"
            >
              {{ item.stateName }}
            </td>
            <td>
              <v-btn
                color="#fa9905"
                class="ma-2 white--text"
                :href="item.downloadLink"
                target="_blank"
              >
                下载
                <v-icon
                  right
                  dark
                >
                  mdi-cloud-download
                </v-icon>
              </v-btn>
            </td>
          </tr>
        </tbody>
      </v-simple-table>
      <div class="py-8" />
      <base-section-heading
        title="回馈长期光顾老黑旗下版本的所有老铁每个版本充值玩家,每个充值账号充值都可以转新区"
        style="color:red"
      />

      <base-section-heading
        title="关于充值玩家转区联系客服 不支持沙捐版本，版本统一游戏内充。"
        style="color:red"
      />
    </v-container>
  </base-section>
</template>
<style lang="scss" scoped>
.theme--light.v-data-table > .v-data-table__wrapper > table > thead > tr:last-child > th  {
   font-size: 20px;
}

</style>
<script>
  import { getList } from '@/api/gameVersion'

  export default {
    data () {
      return {
        data: null,
      }
    },
    mounted () {
      getList().then(respone => {
        console.log(respone.data.data)
        this.data = respone.data.data
      })
    },

  }
</script>
