<template>
  <div class="not" :class="animationClass" @keydown.passive.esc="exc">
    <div class="success">
      <div class="icon">
        <img src="~static/img/checked.png" alt="">
      </div>
      <div class="content">
        <slot name="success"></slot>
      </div>
    </div>
    <div class="error">
      <div class="icon">
        <img src="~static/img/exclamation.png" alt="">
      </div>
      <div class="content">
        <slot name="error"></slot>
      </div>
    </div>
    <div class="msg">
      <slot name="msg"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        animationClass: "zoomIn"
      }
    },
    methods: {
      close() {
        this.animationClass = "zoomOut"
        // setTimeout(() => this.$emit('closenot'), 500);
      },
      closeEsc(e) {
        if (e.keyCode == 27) {
          this.close()
        }
      }
    },
    created() {
      if (process.browser) {
        window.addEventListener('keydown', this.closeEsc);
      }
    },
    destroyed() {
      window.removeEventListener('keydown', this.closeEsc);
    },
  }
</script>

<style lang="scss" scoped>
.not {
  width: 300px;
  height: auto;
  padding: 10px;
  z-index: 9999;
  position: fixed;
  top: 10px;
  right: 10px;
}
.error {
  display: flex;
  justify-content: space-between;
  border-radius: 5px;
  padding: 10px;
  background: rgb(255, 168, 168);

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: 10px;
    margin-right: 10px;
    border-right: 4px solid rgb(255, 94, 94);
  }
}

.success {
  @extend .error;
  background: rgb(168, 255, 168);

  .icon {
    @extend .icon;
    border-right: 4px solid #5CBB5C;
  }
}
</style>