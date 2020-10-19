<template>
  <footer class="footer">
    <div class="row">
      <Contact />
      <form class="form" name="form_footer">
        <div class="form__item">
          <label for="form_footer-name">Поле для имени</label>
          <input
            type="text"
            name="call__text"
            id="form_footer-name"
            placeholder="Ваше Имя"
          />
        </div>
        <div class="form__item">
          <label for="form_footer-tel">Поле для телефона</label>
          <input
            type="tel"
            name="call__tel"
            id="form_footer-tel"
            placeholder="+38(050)-123-23-34"
          />
        </div>
        <div class="form__item" hidden>
          <label for="form_footer-comment">Поле для Комментария</label>
          <textarea
            name="comment"
            rows="3"
            id="form_footer-comment"
            placeholder="Комментарий"
          ></textarea>
        </div>
        <div class="form__item">
          <input type="submit" value="Жду Звонка" />
        </div>
      </form>
    </div>
    <div class="footer__line"></div>
    <div class="copyright">
      <p class="copyright__item" style="color: #e74c3c">
        Profy Shop <span style="color: white">© 2020</span>
      </p>
      <a
        style="text-decoration: none; color: #e74c3c"
        href="mailto:8th.port@gmail.com"
        class="copyright__link"
      >
        <span style="color: #3498db">created 😜</span>
        <span style="color: white">:</span>
        <span style="color: #e74c3c"></span> 8-th Port</a
      >
    </div>
  </footer>
</template>

<script>
import Contact from "~/components/Contact"
  export default {
    components: {
      Contact
    }
  }
</script>

<style lang="scss" scoped>
@import "~/assets/base";
.footer {
  background-color: $footerColor;
  @extend .rubik-fonts;

  &__line {
    height: 1px;
    width: 95%;
    background-color: $redLine;
    margin: 0 auto;
  }

  .row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;



    .form {
      padding: 40px;
      // border: 1px solid red;
      // @extend .contact;

      &__item {
        width: 100%;
      }

      label {
        // opacity: 0
        display: none;
      }

      input {
        display: block;
        border: none;
        margin-bottom: 8px;
        padding: 10px;
        width: 100%;
      }

      input[type="submit"] {
        background-color: $redLine;
        color: white;
        width: calc(#{100%} + #{20px});

        &:hover {
          @extend .pulse;
        }
      }
    }
  }

  .copyright {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px 40px;
    color: white;
    font-size: 13px;

    img {
      height: 30px;
      width: auto;
    }
  }

  @media (min-width: 320px) and (max-width: 640px) {
    .row {
      flex-direction: column;
      justify-content: center;

      .contact,
      .form {
        padding: 10px;
      }

      .contact__item {
        padding: 8px 0;
      }

      .form {
        input {
          padding: 10px;
          width: calc(#{100%} - #{20px});
          // border: 1px red solid;
        }

        input[type="submit"] {
          background-color: $redLine;
          color: white;
          width: 100%;

          // &:hover {
          //   @extend .pulse;
          // }
        }
      }
    }

    .copyright {
      padding: 10px;
      justify-content: space-between;
    }
  }
}
</style>