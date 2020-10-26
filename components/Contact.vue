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
import smartphone from "~/static/img/smartphone.svg"
import mail from "~/static/img/mail.svg"
import map from "~/static/img/map.svg"
import clock from "~/static/img/clock.svg"
  export default {
    name: 'Contact',
    data() {
      return {
        contact: [
          {name: "telephone", img: smartphone, alt: "", context: '+38(096)312-82-03', href:"tel:+380963128203"},
          {name: "email", img: mail, alt: "", context: 'profy.shop.top@gmail.com', href:"mailto:profy.shop.top@gmail.com"},
          {name: "address", img: map, alt: "", context: 'г. Николаев, ул. Космонавтов 124Б', href:false},
          {name: "schedule", img: clock, alt: "", context: 'ПН-ПТ: 10.00 - 17.00', href:false},
        ]
      }
    },
    jsonld() {
      return {
        "@context": "https://schema.org",
        "@type": "WholesaleStore",
        "name": "Profy Shop Top",
        "image": "https://profy-shop.top/static/logo.jpg",
        "@id": "",
        "url": "https://profy-shop.top",
        "telephone": "+380963128203",
        "priceRange": "300-6000",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Космонавтов 124Б, офис 2",
          "addressLocality": "Николаев",
          "postalCode": "54000",
          "addressCountry": "UA"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 46.958689,
          "longitude": 32.069591
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
          ],
          "opens": "10:00",
          "closes": "17:00"
        }
      };
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

  &__item {
    @media (min-width: 320px) and (max-width: 640px) {
      padding: 5px 0;
    }
  }

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