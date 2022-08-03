<template>
    <div class="footer">
          <div>
            <h2>Інформація</h2>
            <div><label @click="goAboutUs">Про нас</label></div>
            <div><label @click="goDeliveryInform" for="">Інформація про доставку</label></div>
          </div>

          <div>
            <h2>Контакти</h2>
            <div>с. Сторожниця, вул. Українська 10/3</div>
            <div>+38(066)480 28 48</div>
            <div>+38(098)480 28 48</div>
            <div>pizzawoood@gmail.com</div>
            <div>Щодня з 11:00 до 23:00</div>
          </div>
      </div>
</template>

<script>
    export default {
       name:'FooterMasterpage' ,
     methods: {
      goAboutUs() {
         this.$router.push({ name: "aboutUs" });
        
      },
      goDeliveryInform() {
         this.$router.push({ name: "deliveryInform" });
        
      }
    },
    }
    
</script>

<style lang="scss" scoped>
.footer {
  text-align: left;
  display: flex;
  padding: 5px;
  background-color: rgb(0, 0, 0);
  
  // bottom: 0;
}
.footer div {
  // display: block;
  // margin-right: 10px;
  color: white;
}
.footer div * {
  padding: 5px;
}
</style>