<template>
  <footer class="footer">
    <div class="row">
      <Contact />
      <Form />
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
import Form from "~/components/Form"
  export default {
    components: {
      Contact,
      Form
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