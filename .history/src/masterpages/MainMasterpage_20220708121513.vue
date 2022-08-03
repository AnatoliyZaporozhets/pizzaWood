<template>
  <div class="container">
    <slot name="header">
      <header-masterpage />
    </slot>

    <slot name="panel">
      <!-- <panel-masterpage /> -->
      <panel-mast/>
    </slot>

    <slot name="main"></slot>


    <slot name="messenger">
      <messenger-masterpage />
    </slot>
<div class="footer">
  <slot name="footer">
      <footer-masterpage />
    </slot>
</div>
    
  </div>
</template>

<script>
import HeaderMasterpage from "@/masterpages/HeaderMasterpage";
// import PanelMasterpage from "@/masterpages/PanelMasterpage";
import PanelMast from "@/masterpages/PanelMast";
import MessengerMasterpage from "@/masterpages/MessengerMasterpage";
import FooterMasterpage from "@/masterpages/FooterMasterpage";
export default {
  name: "MainMasterpage",

  components: {
    HeaderMasterpage,
    // PanelMasterpage,
    MessengerMasterpage,
    FooterMasterpage,
    PanelMast
  },
};
</script>

<style lang="scss">

.footer{
   margin: 20px;
}
</style>
