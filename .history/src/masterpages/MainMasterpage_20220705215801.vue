<template>
  <div>
    <div v-if="isLoading">Loading......</div>
    <div v-if="isError">Error!!!!</div>

    <div v-show="!isLoading && !isError">
     <div>
      <div class="header">
            <slot name="heder">
                <div>
                    <label @click="goPizza">Головна</label>
                    
                    </div>
                <div>Вхід</div>
                <div>Реєстрація</div>
                <!-- <div>Оформлення заовлення</div> -->
                <div>+38(066)480 28 48</div>
                <!-- <div>Мова</div> -->
                <div>
                    <label @click="goBasket">Корзина</label> 
                    </div>
            </slot>
        </div>
        <div class="panel">
            <slot class="panel">
                <div>
                    <img class="imgPanel" src="http://pizzawood.com.ua/image/catalog/PizzaWood%202(R)(1).png" alt="">
                </div>
                <div>
                    <label @click="goPizza">Піца</label> 
                    
                </div>
                <div>
                   <label @click="goBurger">Бургери</label> 
                </div>
                <div>
                    <label @click="goSets">Сети</label> 
                </div>
                <div>
                    <label @click="goSnacks">Снеки</label>
                </div>
                <div>
                    <label @click="goSauces">Соуси</label>
                    </div>
                <div>
                    <label @click="goDrinks">Напої</label>
                    </div>
                <div>
                    <input type="text"><button>Знайти</button>
                   
                </div>
            </slot>
        </div>

        <div>
            <slot name="main"></slot>
        </div>
        <div class="messenger">
            <slot name="messenger">
                <div> <h3>Ми в соціальних мережах</h3>
                    </div>
                <div><a href="https://www.facebook.com/pizzawood.uzhgorod"><img src="@/assets/facebook-brands.svg" alt=""></a></div>
                <div><a href="https://www.instagram.com/accounts/login/?next=/pizzawooduzhhorod/"><img src="@/assets/instagram-square-brands.svg" alt=""></a></div>
            </slot>
        </div>
        <div class="footer">
            <slot name="footer">
               
                    <div>
                            <h2>Інформація</h2>
                            <div><label for="">Про нас</label></div>
                            <div><label for="">Інформація про доставку</label></div>
                            
                            
                            
                            
                     </div>
                        
                    
                     <div>
                         <h2>Контакти</h2>
                        <div>с. Сторожниця, вул. Українська 10/3</div>
                        <div>+38(066)480 28 48</div>
                        <div>+38(098)480 28 48</div>
                        <div>pizzawoood@gmail.com</div>
                        <div>Щодня з 11:00 до 23:00</div>
                     </div>
                
            </slot>
        </div>
       
  </div> 
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'MainMasterpage',

  computed: {
    ...mapGetters(['isLoading', 'isError']),
  },
  methods: {
      goBurger() {
         this.$router.push({name:'BurgerPage'})
      },
      goPizza() {
         this.$router.push({name: "PizzaPage"})
      },
      goSets() {
         this.$router.push({name: "SetsPage"})
      },
      goSnacks() {
         this.$router.push({name:'SnacksPage'})
      },
      goSauces() {
         this.$router.push({name: "SaucesPage"})
      },
      goDrinks() {
         this.$router.push({name: "DrinksPage"})
      },
      goBasket(){
          this.$router.push({name: "BasketPage"})
      }

  },
}
</script>

<style lang="scss">
.header{
    display: flex;
    background-color: rgb(19, 20, 21);
}
.header *{
    width: 20%;
    margin: 15px;
    padding: 5px;
    color: white;
    
    
}
.panel{
    display: flex;
    background-color: rgb(0, 0, 0);
}
.panel *{
    height: 60px;
    margin: 15px;
    padding: 5px;
    
    
     width: 20%;
   
    color: white;
    display: flex; 
}
.panel * :hover{
    color: orangered;
}
.panel * input{
    width: 75px;
    height: 15px;
    margin-right: 0px;
    color: black;
}
.panel input:hover{
   
    color: black;
}
.panel button{
    margin-left: 0px;
}
input{
    width: 45px;
}
.imgPanel{
    width: 60px;
    margin: 0px;
}
.panel button{
    width: 60px;
    height: 30px;
    background-color: orangered;
    display: block;
}
.footer{
    text-align: left;
    display: flex;
    padding: 5px;
    background-color: rgb(0, 0, 0);
    
}
.footer div{
    display: block;
    margin-right: 10px;
    color: white;
}
.footer div *{
    padding: 5px;
}
.messenger img{
    width: 35px;
    margin: px;
}
.messenger{
    text-align: left;
    display: flex;
    padding: 5px;
    background-color: rgb(19, 20, 21);
}
.messenger *{
    display: block;
    margin-right: 10px;
    color: white;
    margin-top: 4px;
}
</style>
