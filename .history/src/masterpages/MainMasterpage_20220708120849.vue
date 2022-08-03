<template>
  <div class="container">
    <div class="header">
      <slot name="header">
        <header-masterpage />
      </slot>

      <slot name="panel">
        <!-- <panel-masterpage /> -->
        <panel-mast />
      </slot>
    </div>

    <div class="main">
      <slot name="main"></slot>
    </div>

    <div class="footer">
      <slot name="messenger">
        <messenger-masterpage />
      </slot>

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
    PanelMast,
  },
};
</script>

<style lang="scss">
.container {
   justify-content: center;
  min-height: 100%;
  display: flex;
  flex-direction: column;
}
.main {
  flex: 1 1 auto;
}
// .footer{
//   display: block;
// }
</style>
