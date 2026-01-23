<template>
  <div>
    <el-image
      class="wechat-icon"
      src="https://is1-ssl.mzstatic.com/image/thumb/Purple112/v4/41/c4/53/41c4532a-8f21-bb32-97e3-3be82b004088/AppIcon-0-85-220-0-4-2x.png/460x0w.webp"
      alt="微信" />
    <div>
      <div class="text-h1">使用微信登录</div>
      <div class="text-normal">
        微信关闭了个人开发者使用微信登录、外部APP跳转至小程序的能力。为了能够使用微信登录，您需要手动跳转到"Ham快速登录"小程序进行登录。
      </div>
      <div style="height: 30px"></div>
      <div class="text-normal">请您按照下面步骤登录：</div>
      <div class="text-normal">1. 前往微信打开"Ham快速登录"小程序</div>
      <div class="text-normal">2. 在"Ham快速登录"小程序登录</div>
      <div class="text-normal">3. 返回至当前页面</div>
    </div>

    <div class="footer">
      <div
        :style="{opacity: isShowingLoading ? 1 : 0}"
        style="width: 80px; height: 80px"
        class="center"
        id="lottie-view" />
      <div v-if="!isShowingLoading" class="button-container">
        <el-button
          @click="onButtonClicked"
          size="large"
          class="center"
          color="#5ECB71"
          style="color: white"
          >前往微信操作</el-button
        >
      </div>
      <div class="text-caption">
        在登录的过程中Ham可能会读取您的剪贴板数据进行数据交互。如果您关闭了该权限，请打开之，或使用复制链接跳转的方式完成登录。
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import lottie from 'lottie-web';
export default {
  name: 'WechatLoginView',
  data() {
    return {
      isShowingLoading: false,
      lottieBox: null,
    };
  },
  mounted() {
    this.initLottieView();
  },
  created() {
    for (let ele of Array.from(document.getElementsByClassName('sidebar'))) {
      ele.innerHTML = '';
    }

    for (let ele of Array.from(document.getElementsByTagName('aside'))) {
      ele.innerHTML =
        '<h3 style="text-align: center">恭喜你发现了宝藏之地</h3><p style="text-align: center">这里只属于我和你之间</p>';
    }
  },
  methods: {
    onButtonClicked() {
      this.isShowingLoading = true;
      window.location.href = 'weixin://abc/';
      this.lottieBox.play();
    },
    initLottieView() {
      this.lottieBox = lottie.loadAnimation({
        container: document.getElementById('lottie-view'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '/lottie/loading.json',
      });
    },
  },
};
</script>

<style scoped>
.wechat-icon {
  width: 100px;
  height: 100px;
  text-align: center;
}

.text-h1 {
  font-size: 24px;
  font-weight: 600;
}

.text-normal {
}

.text-caption {
  font-size: 12px;
}

.button-container {
  width: 100%;
  margin-bottom: 20px;
}

.center {
  margin-left: 50%;
  transform: translate(-50%, 0);
}

.footer {
  position: absolute;
  bottom: 70px;
  margin-right: 1.5rem;
}
</style>
