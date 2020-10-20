<template>
  <div class="popup" :class="animationClass" @keydown.passive.esc="exc">
    <div class="popup__header" @click="close">
      <img src="../static/img/close.svg" alt="">
    </div>
    <div class="popup__content">
      <slot name="map"></slot>
      <slot name="phone"></slot>
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
        setTimeout(() => this.$emit('close-pop-up'), 500);
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
@import "../assets/base.scss";
.zoomIn {
  animation-name: zoomIn;
  animation-duration: 0.5s;
  animation-fill-mode: both;
  }
  @keyframes zoomIn {
  0% {
  opacity: 0;
  transform: scale3d(.3, .3, .3);
  }
  50% {
  opacity: 1;
  }
  } 

.zoomOut {
  animation-name: zoomOut;
  animation-duration: 0.5s;
  animation-fill-mode: both;
  }
  
  @keyframes zoomOut {
  0% {
  opacity: 1;
  }
  50% {
  opacity: 0;
  transform: scale3d(.3, .3, .3);
  }
  100% {
  opacity: 0;
  }
  } 
  .shadow {
    box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.5);
  }
  .popup {
    @extend .shadow;
    width: 80vw;
    height: 80vh;
    padding: 50px;
    display: flex;
    background-color: $footerColor;
    position: fixed;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    z-index: 9999;

    &__header {
      img {
        cursor: pointer;
        width: 22px;
        height: 22px;
        position: absolute;
        top: 10px;
        right: 10px;
      }
    }

    &__content {
      width: 100%;
      background: white;

      iframe {
        width: 80vw;
        height: 80vh;
      }
    }
  }
</style>