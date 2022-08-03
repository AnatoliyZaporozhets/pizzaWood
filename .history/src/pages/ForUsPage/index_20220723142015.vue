<template>
  <div class="container">
    <main-master-page>
      <template v-slot:main>
        <div >
          <h1>Про нас</h1>
          <hr/>
          
            <span>PizzaWood – Твоя найсмачніша піца у нас.
Створюючи свою піцу, ми хотіли поєднати італійські традиції з чимось новим-незвичним! Саме так з’явилась наша унікальна чорна піца «Джанго» та солодка піца «Сам удома». Також в меню представлено більше 20 видів піци та 8 соусів по авторським рецептам наших піцайол, які не залишать Вас байдужими. Ми обираємо та працюємо тільки з якісними  інгредієнтами, а сама піца запікається в печі на дровах, що надає незабутній аромат. Наші драйвери найшвидші, тому можете бути впевнені, що отримаєте Ваше замовлення вчасно!
Що може бути краще, ніж час проведений з родиною, переглядаючи цікавий фільм та смакувати нашою піцою?
Досить читати – час замовляти!
</span>
          
         
        </div>
      </template>
    </main-master-page>
  </div>
</template>

<script>
import MainMasterPage from "@/masterpages/MainMasterpage.vue";

export default {
  name: "CartPage",
  components: {
    MainMasterPage,
  },
  data() {
    return {};
  },
  watch: {
  }

}
</script>

<style lang="scss" scoped>
hr{
        height: 3px;
        background-color: rgb(255, 255, 255);
        border: none;
        padding: 0px;
        
    }
</style>
