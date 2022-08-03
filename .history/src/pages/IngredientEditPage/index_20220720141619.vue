<template>
  <div>

  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'IngredientEditPage',

  data() {
    return {
      // ingredient: {},
    }
  },

  computed: {
    receivedProductId() {
      return this.$route.params.id
    },
  },

  methods: {
    ...mapActions('ingredient',['getIngredientById', 'addIngredient', 'updateIngredient']),
    choice(type){
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
        this.ingredient = await this.getIngredientById(this.receivedProductId)
      } catch (err) {
        console.log(err)
      }
    }
  },
}
</script>

<style lang="scss" scoped></style>


