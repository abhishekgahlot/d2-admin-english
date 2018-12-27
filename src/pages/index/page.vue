<template>
  <d2-container :filename="filename" class="page">
    <d2-page-cover>
      <d2-icon-svg
        class="page__logo"
        name="d2-admin"/>
      <template slot="footer">
        <div class="page__btn-group">
          <el-popover
            :width="172"
            trigger="hover">
            <p class="d2-mt-0 d2-mb-10">D2Projects</p>
            <img
              src="./image/qr@2x.png"
              style="width: 172px;">
            <span slot="reference">Micro public letter,</span>
            <p style="font-size: 12px; margin-top: 0px; margin-bottom: 0px;">
              Official public, the main push the front-end technical resources, learning tutorial articles, framework, as well D2 Series project update information
            </p>
          </el-popover>
        </div>
        <d2-badge/>
        <d2-help-btn/>
      </template>
    </d2-page-cover>
  </d2-container>
</template>

<script>
import D2HelpBtn from './components/d2-help-btn'
import D2Badge from './components/d2-badge'
export default {
  components: {
    D2HelpBtn,
    D2Badge
  },
  data () {
    return {
      filename: __filename
    }
  }
}
</script>

<style lang="scss" scoped>
.page {
  .page__logo {
    width: 120px;
  }
  .page__btn-group {
    color: $color-text-placehoder;
    font-size: 12px;
    margin-top: 0px;
    margin-bottom: 20px;
    span {
      color: $color-text-sub;
      &:hover {
        color: $color-text-main;
      }
    }
  }
}
</style>
