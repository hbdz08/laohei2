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
            v-for="item in desserts"
            :key="item.name"
          >
            <td>{{ item.server }}</td>
            <td v-html="item.version">
              {{ item.version }}
            </td>
            <td style="color:red;">
              {{ item.state }}
            </td>
            <td><a :href="item.downloadLink">点击进入下载网站</a></td>
          </tr>
        </tbody>
      </v-simple-table>
    </v-container>
  </base-section>
</template>
<style lang="scss" scoped>
.theme--light.v-data-table > .v-data-table__wrapper > table > thead > tr:last-child > th  {
   font-size: 20px;
}

</style>
<script>

  // export default {
  //   name: 'SectionThemeFeatures',

  //   data: () => ({
  //     features: [
  //       {
  //         title: 'Pixel Perfect Design',
  //         icon: 'mdi-fountain-pen-tip',
  //       },
  //       {
  //         title: 'Retina Ready',
  //         icon: 'mdi-cellphone',
  //       },
  //       {
  //         color: 'primary',
  //         dark: true,
  //         title: 'Easily Customizable',
  //         icon: 'mdi-pencil-box-outline',
  //       },
  //       {
  //         title: 'Image Parallax',
  //         icon: 'mdi-image-size-select-actual',
  //       },
  //       {
  //         title: 'Seo Optimized',
  //         icon: 'mdi-ice-pop',
  //       },
  //       {
  //         title: '24/7 Support',
  //         icon: 'mdi-help-circle-outline',
  //       },
  //     ],
  //   }),
  // }

  export default {
    data () {
      return {
        desserts: [
          {
            server: '[魔兽世界怀旧服] 《冰封魔兽》（wow3.35）',
            version: '本服采用国外最新服务端，完美修复 <br/>送练级套装，经验6倍，等级上限80，鸟点全开，瞬飞.',
            state: '火爆正式开放中',
            downloadLink: 'www.baidu.com',
          },
          {
            server: '[复古三职业打金] 《复古三职业》（手机端）',
            version: '电脑不方便的老铁们可以玩老黑推荐的手游　<br/>人气火爆装备好看刀刀光柱,打金吃肉.手机电脑都能玩.',
            state: '火爆正式开放中',
            downloadLink: 'www.baidu.com',
          },
          {
            server: '[老黑天城4F] 　 　《天城4F》（专属版本）',
            version: '一 区 ：(10: 00)　二 区 ：(14: 00)   三 区 ：(18: 00) <br/>四 区 ：(22: 00)　五 区 ：(XX: XX) 六 区 ：(XX: XX)',
            state: '火爆正式开放中',
            downloadLink: 'www.baidu.com',
          },
          {
            server: '[老黑霸王火龙] 　《霸王火龙》（火龙版本）',
            version: '一 区 ：(09: 50)　二 区 ：(12: 50) 三 区 ：(14: 50)　<br/>四 区 ：(17: 50)　五 区 ：(21: 50) 六 区 ：(23: 50)',
            state: '火爆正式开放中',
            downloadLink: 'www.baidu.com',
          },
          {
            server: '[老黑激情冰雪] 　《激情冰雪》（专属版本）',
            version: '一 区 ：(08: 50)　二 区 ：(11: 50) 三 区 ：(14: 50)　<br/>四 区 ：(17: 50)　五 区 ：(20: 50) 六 区 ：(23: 50)',
            state: '火爆正式开放中',
            downloadLink: 'www.baidu.com',
          },
          {
            server: '[老黑盗梦三国] 　《盗梦三国》（专属版本）',
            version: '一 区 ：(08: 00)　二 区 ：(11: 00) 三 区 ：(14: 00)　<br/>四 区 ：(17: 00)　五 区 ：(19: 00) 六 区 ：(22: 00)',
            state: '火爆正式开放中',
            downloadLink: 'www.baidu.com',
          },
          {
            server: '[老黑绝情火龙] 　《绝情火龙》（三职业版本）',
            version: '一 区 ：(10: 00)　二 区 ：(12: 00) 三 区 ：(15: 00)　<br/>四 区 ：(18: 00)　五 区 ：(20: 00) 六 区 ：(23: 00)',
            state: '火爆正式开放中',
            downloadLink: 'www.baidu.com',
          },
          {
            server: '[老黑逐风冰雪] 　《逐风冰雪》（三职业版本）',
            version: '一 区 ：(09: 30)　二 区 ：(12: 30) 三 区 ：(15: 30)　<br/>四 区 ：(18: 30)　五 区 ：(20: 30) 六 区 ：(22: 30)',
            state: '火爆正式开放中',
            downloadLink: 'www.baidu.com',
          },
          {
            server: '[老黑激战苍穹] 　《激战苍穹》（单职业版本）',
            version: '一 区 ：(09: 00)　二 区 ：(12: 00) 三 区 ：(15: 00)　<br/>四 区 ：(17: 00)　五 区 ：(20: 00) 六 区 ：(22: 00)',
            state: '火爆正式开放中',
            downloadLink: 'www.baidu.com',
          },
          {
            server: '[通天录专属] 　《通天录专属》（专属版本）',
            version: '一 区 ：(10: 30)　二 区 ：(12: 30) 三 区 ：(14: 30)　<br/>四 区 ：(16: 30)　五 区 ：(20: 30) 六 区 ：(23: 00)',
            state: '火爆正式开放中',
            downloadLink: 'www.baidu.com',
          },
        ],
      }
    },
  }
</script>
