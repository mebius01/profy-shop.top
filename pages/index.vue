<template>
  <main class="categories">
    <template>
      <Category v-for="item in data"
        :key="item.id"
        :object="item">
      </Category>
    </template>
  </main>
</template>

<script>
import Category from "../components/Category"
export default {
  components: {
    Category
  },
  asyncData() {
    return {
      data: [
              {
                id: 1,
                title: "Misfill+ ( Medical Lab)",
                slug: "misfill-medical-lab",
                description: "Филлеры,канюли, биоревитализант, мезококтейли, PRP филлер",
                description_long: "",
                img: "https://www.profy-shop.top/media/img/6.jpeg"
              },
              {
                id: 2,
                title: "Nanoestetic",
                slug: "nanoestetic",
                description: "Безинъекционная карбокситерапия. Альгинатные маски, уход за кожей лица",
                description_long: "",
                img: "https://www.profy-shop.top/media/img/5.jpeg"
              },
              {
                id: 3,
                title: "La Rossa",
                slug: "la-rossa",
                description: "Линия препаратов для профессионального шугаринга. Уходовая продукция  ДО  ПОСЛЕ депиляции. \r\nПрофессиональные пилинги  La Rossa Peels,  коррекция тела La Rosa Body",
                description_long: "",
                img: "https://www.profy-shop.top/media/img/4.jpeg"
              },
              {
                id: 4,
                title: "Панночка Premium",
                slug: "pannochka-premium",
                description: "Украинский бренд #1 в области сахарной депиляци с доступной ценой.",
                description_long: "",
                img: "https://www.profy-shop.top/media/img/3.jpeg"
              },
              {
                id: 5,
                title: "Satara",
                slug: "satara",
                description: "Профессиональный домашний уход за лицом, телом и волосами.",
                description_long: "",
                img: "https://www.profy-shop.top/media/img/2.jpeg"
              },
              {
                id: 6,
                title: "Pèlart Laboratory",
                slug: "pelart-laboratory",
                description: "Профессиональная израильско-украинская косметика. Пилинги. СО2 .Линия ухоа за телом.",
                description_long: "",
                img: "https://www.profy-shop.top/media/img/1.jpeg"
              }
            ]
    }
  },
}
</script>

<style lang="scss">
@import "~/assets/base";
.categories {
  @extend .rubik-fonts;
  width: 80%;
  margin: 40px auto;

  @media (min-width: 320px) and (max-width: 640px) {
    width: 100%;
    margin: 20px auto;
  }

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
}
</style>

