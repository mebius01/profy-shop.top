<template>
  <ul class="social">
    <li class="social__item">
      <a href="" class="social__link" target="_blank" id="menu">
        <img src="../static/img/menu.svg" alt="Меню сайта" />
      </a>
    </li>
    <li class="social__item">
      <a href="https://www.facebook.com/profyshoptop" class="social__link"
        rel="noreferrer" target="_blank" id="facebook"><img
          src="../static/img/facebook.svg" alt="Facebook Profy Shop" /></a>
    </li>
    <li class="social__item">
      <a href="https://www.instagram.com/profyshop_top/" class="social__link"
        rel="noreferrer" target="_blank" id="instagram"><img
          src="../static/img/instagram.svg"
          alt="Instagram Profy Shop" /></a>
    </li>
    <li class="social__item">
      <a href="" class="social__link" target="_blank" id="map">
        <img src="../static/img/google-maps.svg" alt="Где мы находимся" />
      </a>
    </li>
    <li class="social__item">
      <a href="" class="social__link" target="_blank" id="telephone">
        <img src="../static/img/telephone.svg" alt="Кнопка Жду Звонка" />
      </a>
    </li>
  </ul>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
@import "../assets/base";
.social {
  list-style: none;
  position: fixed;
  top: $heightHeader;
  right: 10px;

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
    // width: 32px;
    // height: 32px;
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