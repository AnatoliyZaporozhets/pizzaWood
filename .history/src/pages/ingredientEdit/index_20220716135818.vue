<template>
  <div>
    <div>
      <label>
        Title
        <input type="text" v-model="ingredient.title" />
      </label>
    </div>
    <div>
        <div>
          <input type="radio" name="typeObg" @click="choice(1)">
          <label>Pizza</label>
        </div>
        <div>
          <input type="radio" name="typeObg" @click="choice(2)">
          <label>Burger</label>
        </div>
    </div>
    
    <div>
      <label>
      Price
        <input type="number" v-model="ingredient.price" />
      </label>
    </div>
    <button @click="onSave">{{ btnLabel }}</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'IngredientEdit',

  data() {
    return {
      ingredient: {},
    }
  },

  computed: {
    receivedProductId() {
      return this.$route.params.id
    },
    btnLabel() {
      return this.receivedProductId ? 'Update' : 'Add'
    },
    
  },

  methods: {
    ...mapActions('ingredient',['getIngredientById', 'addIngredient', 'updateIngredient']),
    choice(type){
      console.log(type);
      switch (type) {
        case 1:
          this.ingredient.typeProd = "pizza"
          break;
        case 2:
          this.ingredient.typeProd = "burger"
          break;
        default:
          
          break;
      }
    }
    ,
    async onSave() {
      try {
        console.log(this.ingredient);
        if (!this.receivedProductId) await this.addIngredient(this.ingredient)
        else await this.updateBook(this.ingredient)
        // this.$router.push({ name: 'products' })
      } catch (err) {
        console.log(err)
      }
    },
  },

  async mounted() {
    if (this.receivedProductId) {
      try {
        console.log(this.ingredient)
        this.ingredient = await this.getIngredientById(this.receivedProductId)
        console.log('this.updateProduct')
        console.log(this.ingredient)
      } catch (err) {
        console.log(err)
      }
    }
  },
}
</script>

<style lang="scss" scoped></style>


