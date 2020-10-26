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
    <!-- <div class="not"> -->
      <div class="success" :class="classAnimation" v-if="success">
        <div class="icon">
          <img src="~static/img/checked.png" alt="">
        </div>
        <div class="content">
          <p style="color: #e74c3c;">{{name}}</p>
          <p>Спасибо за Ваше обращение, мы обязательно с Вами свяжемся в течении </p>
          <p style="color: #e74c3c;">10 минут</p>
        </div>
      </div>
      <div class="error" :class="classAnimation" v-if="error.length">
        <div class="icon">
          <img src="~static/img/exclamation.png" alt="">
        </div>
        <div class="content">
          <ul slot="error" v-if="error.length">
            <li v-for="(item, index) in error" :key="index"> * {{ item }}</li>
          </ul>
        </div>
      </div>
    <!-- </div> -->
  </form>
</template>

<script>
  export default {
    data() {
      return {
        animationClass: "",
        error: [],
        name: null,
        phone: null,
        success: false,
        classAnimation: "slideInRight"
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
        let data = {
          name: this.name,
          telephone: this.phone,
          comment: 'Пустой коментарий'
        }
        this.$axios.defaults.xsrfCookieName = 'csrftoken'
        this.$axios.defaults.xsrfHeaderName = "X-CSRFTOKEN"
        this.$axios.$post('/post/', data)
          .then((response) => {
            if (response) {
              this.success = true
              setTimeout(() => this.classAnimation = "slideOutRight", 3000)
              setTimeout(() => {
                this.success = false
                this.classAnimation = "slideInRight" 
              }, 4000)
              this.resetForm()
            }
          })
      },
      errorData() {
        setTimeout(() => this.classAnimation = "slideOutRight", 3000)
        setTimeout(() => {
          this.error = []
          this.classAnimation = "slideInRight" 
        }, 4000)
      },
      postData() {
        let phoneValidation = this.phoneValidation(this.phone)
        let nameValidation = this.nameValidation(this.name)

        if (phoneValidation && nameValidation) {
          this.sendData()
        }
        else {
          this.errorData()
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

.slideInRight {
  animation-name: slideInRight;
  animation-duration: 1s;
  animation-fill-mode: both;
}
@keyframes slideInRight {
  0% {
    transform: translateX(100%);
    visibility: visible;
  }
  100% {
    transform: translateX(0);
  }
} 
.slideOutRight {
  animation-name: slideOutRight;
  animation-duration: 1s;
  animation-fill-mode: both;
}
@keyframes slideOutRight {
  0% {
    transform: translateX(0);
  }
  100% {
    visibility: hidden;
    transform: translateX(100%);
  }
} 

.error {
  width: 300px;
  height: auto;
  padding: 10px;
  z-index: 9999;
  position: fixed;
  top: 10px;
  right: 10px;

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
  background: rgb(162, 255, 162);

  .icon {
    @extend .icon;
    border-right: 4px solid #5CBB5C;
  }
}
</style>