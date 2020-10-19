<template>
  <ul class="contact">
    <li class="contact__item" v-for="(item, index) in contact" :key="index" >
      <img
        class="contact__icon"
        :src="item.img"
        :alt="item.alt"
      />
      <a v-if="item.href" class="contact__link" :href="item.href">{{item.context}}</a>
      <span v-else>{{item.context}}</span>
    </li>
  </ul>
</template>

<script>
import smartphone from "../static/img/smartphone.svg"
import mail from "../static/img/mail.svg"
import map from "../static/img/map.svg"
import clock from "../static/img/clock.svg"

  export default {
    data() {
      return {
        contact: [
          {name: "telephone", img: smartphone, alt: "", context: '+38(096)312-82-03', href:"tel:+123456789"},
          {name: "email", img: mail, alt: "", context: 'profy.shop.top@gmail.com', href:"mailto:profy.shop.top@gmail.com"},
          {name: "address", img: map, alt: "", context: 'г. Николаев, ул. Космонавтов 124Б', href:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1619.1897115256013!2d32.067177559436224!3d46.95890688298181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c5caff9cb8a3c5%3A0xd114e4e38546ffcc!2z0YPQuy4g0JrQvtGB0LzQvtC90LDQstGC0L7QsiwgMTI00JAsINCd0LjQutC-0LvQsNC10LIsINCd0LjQutC-0LvQsNC10LLRgdC60LDRjyDQvtCx0LvQsNGB0YLRjCwgNTQwMDA!5e0!3m2!1sru!2sua!4v1594713259040!5m2!1sru!2sua"},
          {name: "schedule", img: clock, alt: "", context: 'ПН-ПТ: 10.00 - 17.00', href:false},
        ]
      }
    },
  }
</script>

<style lang="scss" scoped>
@import "~/assets/base";
.contact {
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 40px;
  color: white;

  &__link {
    color: white;
    text-decoration: none;

    &:focus,
    &:hover {
      @extend .focus;
    }
  }

  &__icon {
    margin-right: 5px;
    width: 20px;
    height: 20px;
  }

  i {
    margin-right: 5px;
    font-size: 20px;
    color: $redLine;
  }
}
</style>