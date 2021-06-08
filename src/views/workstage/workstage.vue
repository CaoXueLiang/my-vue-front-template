<template>
  <div class="total-contain">
    <div class="project-contian">
      <div class="contenttitle">北京大兴国际机场临空经济区发展服务中心项目</div>
      <div class="describeLabel mgt20">项目名称</div>
      <span>北京大兴国际机场临空经济区发展服务中心项目</span>
      <div class="describeLabel mgt20">施工单位</div>
      <span>中建三局集团有限公司</span>
      <div class="describeLabel mgt20">建筑面积</div>
      <span>173246.4㎡</span>
      <div class="describeLabel mgt20">开工日期</div>
      <span>2020年06月01日</span>
      <div class="describeLabel mgt20">竣工日期</div>
      <span>2021年12月31日</span>
    </div>
    <div class="main-contian">
      <div class="applicationLabel">基础应用</div>
      <div
        class="card_item"
        v-for="(item, index) in menuArray"
        :key="index"
        :class="isShowMarginRight(index) ? 'marginght_10' : ''"
        @click="clickedItem(item)"
      >
        <img class="iconImage" :src="getImage(index)" />
        <div class="titleLabel">{{ item.title }}</div>
        <div class="describeLabel">{{ item.desc }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  getPermisstionMenus,
  saveApplicationMenus,
  getApplicationMenus,
} from "../../utils/loginManage";
export default {
  data() {
    return {
      menuArray: [
        {
          title: "5G高清视频监控",
          desc: "监控工地现场情况，实时高清、历史可溯",
          code: "HDVM",
          img: "/img/home01.0cf9a21d.png",
        },
        {
          title: "AI安全预警",
          desc: "监控画面AI分析，全天覆盖，实时分析，自动预警",
          code: "AIEW",
          img: "/img/home02.16638eda.png",
        },
        {
          title: "劳务人员现场实名制管理",
          desc: "人员信息数据库、健康、违规、考勤数据统一管理",
          code: "LPRN",
          img: "data:image/png;base64,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",
        },
        {
          title: "塔机安全辅助",
          desc: "塔机运行数据事实监控预警，俯仰视双视角实时画面辅助减少吊装事故",
          code: "TCVA",
          img: "data:image/png;base64,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",
        },
        {
          title: "5G塔吊远程操控",
          desc: "通过5G，远程操控塔机",
          code: "27",
          img: "/img/tjycjk.afba19dc.svg",
          show: true,
        },
        {
          title: "5G移动协作巡检",
          desc: "借助AR眼镜实现人员识别、远程协作、智能巡检等功能",
          code: "MWINS",
          img: "/img/home03.68472d3a.png",
        },
        {
          title: "质量安全管理",
          desc: "针对工程质量、施工安全进行管理",
          code: "QSAM",
          img: "/img/home21.f87c9cc4.svg",
        },
        {
          title: "驾驶舱",
          desc: "通过智慧工地看板，全方位监控工地状况",
          code: "3",
          img: "data:image/png;base64,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",
          show: false,
        },
        {
          title: "BIM模型",
          desc: "在线查看项目BIM模型",
          code: "5",
          img: "/img/home06.948fe254.png",
          show: false,
        },
        {
          title: "5G无人机巡航",
          desc: "无人机自动定点巡航，5G实时视频传输，超远程实时操控干涉",
          code: "6",
          img: "/img/home08.adf03220.png",
          show: true,
        },
        {
          title: "辅助定位",
          desc: "辅助定位",
          code: "60",
          img: "/img/home08.adf03220.png",
          show: false,
        },
      ],
    };
  },
  created() {},
  methods: {
    isShowMarginRight(index) {
      return index % 5 == 4;
    },

    getImage(index) {
      let number = index + 1;
      let currentnumber = number < 10 ? `0${number}` : number;
      return require(`../../assets/home/home${currentnumber}.png`);
    },

    clickedItem(item) {
      console.log("------点击item------" + JSON.stringify(item.code));

      let currentArray = [];
      let menusArray = getPermisstionMenus();
      for (let index = 0; index < menusArray.length; index++) {
        const element = menusArray[index];
        if (element.meta.code === "CONTROLBOARD") {
          let childrenArray = element.children;
          for (let sonIndex = 0; sonIndex < childrenArray.length; sonIndex++) {
            const sonElement = childrenArray[sonIndex];
            if (sonElement.meta.code === item.code) {
              currentArray.push(sonElement);
            }
          }
        }
      }
      saveApplicationMenus(currentArray);

      if (currentArray.length > 0) {
        this.$router.push(`/workstage/${currentArray[0].path}`);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.total-contain {
  display: flex;
  justify-content: space-between;
  padding-left: 5%;
  padding-right: 5%;
  padding-top: 20px;
}

.project-contian {
  width: 300px;
  padding: 0px 40px 20px 30px;
  display: flex;
  flex-direction: column;
  .contenttitle {
    text-align: left;
    font-size: 20px;
    color: #434343;
    min-height: 24px;
    line-height: 24px;
    font-weight: 500;
  }
  .describeLabel {
    font-size: 14px;
    color: #999;
  }
  span {
    font-size: 14px;
    color: #333;
    padding-top: 5px;
  }
}

.main-contian {
  width: calc(100% - 300px);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.applicationLabel {
  font-size: 20px;
  color: #444;
  width: 100%;
  margin-bottom: 20px;
}

.card_item {
  width: calc((100% - 40px) / 5);
  border: 1px solid #eeeeee;
  background: #fff;
  height: 184px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  margin-bottom: 10px;
  margin-right: 10px;
  border-radius: 5px;
  padding: 20px;
  &:hover {
    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.1);
    .titleLabel {
      font-size: 16px;
      color: #1e90ff;
    }
  }
}

.marginght_10 {
  margin-right: 0px;
}

.titleLabel {
  font-size: 16px;
  color: #444;
}

.describeLabel {
  font-size: 12px;
  color: #999;
  margin-top: 10px;
}

.iconImage {
  width: 44px;
  // height: 44px;
  margin-bottom: 10px;
}

.mgt20 {
  margin-top: 20px;
}
</style>
