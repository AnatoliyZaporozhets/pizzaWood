<template>
  <div>
    <slot name="header">
      <header-masterpage />
    </slot>

    <slot class="panel">
      <panel-masterpage />
    </slot>

    <slot name="main"></slot>

    <slot name="messenger">
      <messenger-masterpage />
    </slot>

    <slot name="footer">
      <footer-masterpage />
    </slot>
  </div>
</template>

<script>
import HeaderMasterpage from "@/masterpages/HeaderMasterpage";
import PanelMasterpage from "@/masterpages/PanelMasterpage";
import MessengerMasterpage from "@/masterpages/MessengerMasterpage";
import FooterMasterpage from "@/masterpages/FooterMasterpage";
export default {
  name: "MainMasterpage",

  components: {
    HeaderMasterpage,
    PanelMasterpage,
    MessengerMasterpage,
    FooterMasterpage,
  },
};
</script>

<style lang="scss"></style>
