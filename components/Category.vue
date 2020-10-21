<template>
  <article  class="article"
            data-aos="fade-up"
            data-aos-offset="222" 
            data-aos-delay="150"
            data-aos-easing="ease-in-out"
            data-aos-once="false">
    <div class="article__img">
      <img :src="object.img" :alt="object.title" class="img" />
    </div>
    <div class="article__content">
      <h2 class="article__title h2">{{ object.title }}</h2>
      <p class="article__text">{{ object.description }}</p>
    </div>
  </article>
</template>

<script>
  export default {
    props: {
      object: {
        type: Object,
        dfault() {
          return {}
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
@import "../assets/base";
.article {
    @extend .shadow;
    $heightArticle: 444px;
    $paddingContent: 40px;
    height: $heightArticle;
    margin-bottom: 88px;
    // margin-top: 44px;

    @media (min-width: 320px) and (max-width: 640px) {
      margin-bottom: 44px;
    }

    &__img {
      text-align: right;

      img {
        height: $heightArticle;
        width: 100%;
        object-fit: cover;
      }
    }

    &__content {
      background-color: rgba(255, 255, 255, 0.5);
      color: $footerColor;
      position: relative;
      top: -$heightArticle/2 - $paddingContent * 2 - $paddingContent; //!!!!!!!!!
      height: 160px;
      width: 50%;
      padding: 40px 10px;
      transition-property: top padding background-color;
      transition-duration: 0.5s;
      @extend .flex-col-centr;
      align-items: flex-start;
      // border: red solid 2px;

      @media (min-width: 320px) and (max-width: 640px) {
        width: auto;
        background-color: rgba(255, 255, 255, 0.5);
      }

      @media (min-width: 641px) and (max-width: 940px) {
        width: 80%;
      }

      .article__title {
        transition-property: border-bottom color;
        transition-duration: 0.3s;
      }

      .article__title::after {
        content: "\2192";
        font-size: 38px;
        color: $footerColor;
        transition-property: font-size color;
        transition-duration: 0.5s;

        &:hover {
          color: $redLine;
        }
      }

      &:hover {
        background-color: white;
        top: -222 - 80 - 143px;
        padding: 143px 10px;

        .article__title::after {
          content: "\2192";
          font-size: 42px;
          color: $redLine;
        }

        .article__title {
          border-bottom: 3px $redLine solid;
        }

        @media (min-width: 320px) and (max-width: 640px) {
          border-top: 1px solid rgba(189, 189, 189, 0.3);
          border-bottom: 1px solid rgba(189, 189, 189, 0.3);
        }
      }
    }

    &__text {
      margin-top: 15px;
      font-size: 18px;
      line-height: 20px;
    }

    &__link {
      text-decoration: none;
      display: block;

      &:focus {
        @extend .focus;
      }
    }
  }
</style>