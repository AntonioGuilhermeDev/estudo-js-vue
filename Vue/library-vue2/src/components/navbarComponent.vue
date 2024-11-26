
<template>
    <b-navbar class="bg-deep-blue text-white p-4">
      <b-navbar-nav class="align-items-center">
        <b-button
            variant="link"
            class="text-white p-0 mr-3"
            v-b-toggle.sidebar-menu
            aria-label="Abrir Sidebar"
        >
          <b-icon icon="list" font-scale="1.5"></b-icon>
        </b-button>
      </b-navbar-nav>
      <b-navbar-brand class="m-auto align-self-center text-white mb display-1"><b-icon icon="book-half"></b-icon>
        Livraria Digital
      </b-navbar-brand>
      <SideBar />
    </b-navbar>
</template>

<script>

import SideBar from "./sideBarComponent.vue";

export default {
  name: "Navbar",
  components: {
    SideBar,
  },
}
</script>


<style scoped>
.bg-deep-blue {
  background-color: #253745;
}

.mb {
  margin-bottom: 50px;
  font-size: 40px;
}
</style>