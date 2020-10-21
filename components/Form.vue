<template>
  <form class="form" name="form_footer">
    <div class="form__item">
      <label for="form_footer-name">Поле для имени</label>
      <input
        v-model="form.name"
        type="text"
        name="call__text"
        id="form_footer-name"
        placeholder="Ваше Имя"
      />
    </div>
    <div class="form__item">
      <label for="form_footer-tel">Поле для телефона</label>
      <input
        v-model="form.phone"
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
      <input @click.prevent="postData" type="submit" value="Жду Звонка" />
    </div>
  </form>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          name: null,
          phone: null
        }
      }
    },
    methods:{
      postData() {
        console.log(this.flashMessage);
        this.flashMessage.info(
          {status: 'info', title: 'Error Message Title', message: 'Oh, you broke my heart! Shame on you!', time: 1000, flashMessageStyle: {backgroundColor: 'linear-gradient(#e66465, #9198e5)'}})
        // this.$notify({ group: 'all', type: "info", title: "Success", text: 'Heyy !!!' })
      },
    }
  }
</script>

<style lang="scss" scoped>
@import "~/assets/base";
.form {
  padding: 40px;

  &__item {
    width: 100%;
  }

  label {
    // opacity: 0
    display: none;
  }

  input {
    display: block;
    border: $footerColor 1px solid;
    margin-bottom: 8px;
    padding: 10px;
    width: calc(#{100%} - #{22px});
  }

  input[type="submit"] {
    background-color: $redLine;
    border: none;
    color: white;
    width: 100%;
    &:hover {
      @extend .pulse;
    }
  }
}
</style>