<template>
  <ul class="social" :style="topSocial">
    <li class="social__item">
      <a href="https://www.facebook.com/profyshoptop" class="social__link"
        rel="noreferrer" target="_blank" id="facebook"><img
          src="../static/img/facebook.png" alt="Facebook Profy Shop" /></a>
    </li>
    <li class="social__item">
      <a href="https://www.instagram.com/profyshop_top/" class="social__link"
        rel="noreferrer" target="_blank" id="instagram"><img
          src="../static/img/instagram.png"
          alt="Instagram Profy Shop" /></a>
    </li>
    <li class="social__item">
      <a @click.prevent="showPopUpMap = !showPopUpMap" href="" class="social__link">
        <img src="../static/img/google-maps.png" alt="Где мы находимся" />
      </a>
    </li>
    <!-- <li class="social__item">
      <a @click.prevent="showPopUpPh = !showPopUpPh" href="" class="social__link">
        <img src="../static/img/telephone.png" alt="Кнопка Жду Звонка" />
      </a>
    </li> -->
    <PopUp v-if="showPopUpMap" @close-pop-up='closePopUp'>
      <div slot="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5446.943175925086!2d32.06610570892015!3d46.95902743915468!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c5caff9cb8a3c5%3A0xd114e4e38546ffcc!2z0YPQuy4g0JrQvtGB0LzQvtC90LDQstGC0L7QsiwgMTI00JAsINCd0LjQutC-0LvQsNC10LIsINCd0LjQutC-0LvQsNC10LLRgdC60LDRjyDQvtCx0LvQsNGB0YLRjCwgNTQwMDA!5e0!3m2!1sru!2sua!4v1603109486164!5m2!1sru!2sua" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
      </div>
    </PopUp>
    <!-- <PopUp v-if="showPopUpPh" @close-pop-up='closePopUp'>
      <div slot="phone">
        <Form />
      </div>
    </PopUp> -->
  </ul>
</template>

<script>
import PopUp from "~/components/PopUp"
// import Form from "~/components/Form"
  export default {
    components: {
      PopUp,
      // Form
    },
    data() {
      return {
        showPopUpMap: false,
        showPopUpPh: false,
        topSocial: ''
      }
    },
    methods: {
      // closePopUp() {
      //   this.showPopUpMap = false
      //   this.showPopUpPh = false
      // },
      handleScroll() {
        if (window.innerWidth > 640) {

          if (document.documentElement.scrollTop > 200) {
            this.topSocial = 'top:5px'
          }
          if (document.documentElement.scrollTop < 200) {
            this.topSocial = 'top:200px'
          }
        }
        if (window.innerWidth < 640) {
          if (document.documentElement.scrollTop > 140) {
            this.topSocial = 'top:5px'
          }
          if (document.documentElement.scrollTop < 200) {
            this.topSocial = 'top:140px'
          }
        }
      }
    },
    created() {
      if (process.browser) {
        window.addEventListener('scroll', this.handleScroll);
      }
    },
    
    destroyed() {
      window.removeEventListener('scroll', this.handleScroll);
    },
  }
</script>

<style lang="scss" scoped>
@import "~/assets/base";
.social {
  list-style: none;
  position: fixed;
  top: $heightHeader;
  right: 10px;
  transition: top 1s;

  @media (min-width: 320px) and (max-width: 640px) {
    top: $heightHeader - 60;
    z-index: 1;
  }

  &__item {
    margin: 5px auto;
    
  }
  &__link {
    display: block;
    text-align: center;
    padding: 2px;

    &:hover {
      @extend .pulse;
    }

    &:focus {
      @extend .focus;
      width: 32px;
      height: 32px;
    }

    img {
      width: 32px;
      height: 32px;
    }
  }
}
</style>