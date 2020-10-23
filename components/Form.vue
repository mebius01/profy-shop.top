<template>
  <form class="form" ref="form">
    <div class="form__item">
      <label for="form_footer-name">Поле для имени</label>
      <input
        v-model="name"
        type="text"
        name="call__text"
        id="form_footer-name"
        placeholder="Ваше Имя"
      />
    </div>
    <div class="form__item">
      <label for="form_footer-tel">Поле для телефона</label>
      <input
        v-model="phone"
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
    <Notification v-if="notification">
      <ul slot="error" v-if="error.length">
        <li v-for="(item, index) in error" :key="index">{{ item }}</li>
      </ul>
    </Notification>
  </form>
</template>

<script>
import Notification from "../components/Notification"
  export default {
    components: {
      Notification
    },
    data() {
      return {
        error: [],
        name: null,
        phone: null,
        notification: false
      }
    },
    methods:{
      nameValidation(param){
        if (param) {
          return true
        }
        else {
          this.error.push("Пожалуйста введите корректное Имя")
          return false
        }
      },
      phoneValidation(param){
        let re = /^(\+{0,})(\d{0,})([(]{1}\d{1,3}[)]{0,}){0,}(\s?\d+|\+\d{2,3}\s{1}\d+|\d+){1}[\s|-]?\d+([\s|-]?\d+){1,2}(\s){0,}$/
        if (re.test(param)) {
          return true
        } else {
          this.error.push("Пожалуйста введите корректный Телефон")
          return false
        }
      },
      resetForm(){
        this.name = null,
        this.phone = null
        this.$refs.form.reset()
      },
      sendData(){
        console.log(
          {
            name: this.name,
            phone: this.phone
          }
        )
      },
      postData() {
        let phoneValidation = this.phoneValidation(this.phone)
        let nameValidation = this.nameValidation(this.name)

        if (phoneValidation && nameValidation) {
            this.sendData()
        }
        else {
          console.log(
            `${nameValidation} + ${this.name}`,
            `${phoneValidation} + ${this.phone}`,
            this.error
          )
          this.notification = true
          setTimeout(
            () => {
              this.error = []
              this.notification = false
            },
            3000
          )
        }
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