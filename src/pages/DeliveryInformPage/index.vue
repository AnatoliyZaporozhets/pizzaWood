<template>
  <div >
    <main-master-page>
      <template v-slot:main>
        <div class="containerDeliveryInform">
          <h1>Інформація про доставку</h1>
          <hr/>
          <h2>БЕЗКОШТОВНА ДОСТАВКА ВІД 400 ГРН</h2>
          <p>
            Вперше в місті Ужгород! Супер швидка доставка на скутерах! Безкоштовна доставка від 400 грн, при меншій сумі замовлення доставка коштує 25 грн. Доставляємо по місту Ужгород, його мікрорайонах, а також в Сторожницю, Минай, Розівку. Якщо вашого населеного пункту немає в списку - уточнюйте у оператора.
          </p>
        </div>
      </template>
    </main-master-page>
  </div>
</template>

<script>
import MainMasterPage from "@/masterpages/MainMasterpage.vue";

export default {
  name: "DeliveryInformPage",
  components: {
    MainMasterPage,
  },
};
</script>

<style lang="scss" scoped>
.containerDeliveryInform {
  margin: 50px;
}
hr {
  height: 2px;
  background-color: rgb(255, 255, 255);
  border: none;
  padding: 0px;
}
p{
  margin: 60px 0
}
h1{
  margin: 40px;
}
h2{
  margin: 40px;
}
</style>
