<template>
  <div>
    <b-sidebar
      id="sidebar-menu"
      aria-labelledby="sidebar-menu-title"
      no-header
      shadow
      bg-variant="dark"
      text-variant="light"
      backdrop
      backdrop-variant="dark"
    >
      <template #default="{ hide }">
        <div class="p-3">
          <div class="d-flex align-items-center flex-column">
            <b-avatar
              variant="primary"
              size="5rem"
              icon="people-fill"
              class="mr-3"
            ></b-avatar>
            <h4 id="sidebar-menu-title">Sidebar</h4>
          </div>

          <nav class="mb-3">
            <b-nav vertical>
              <b-nav-item active @click="hide"
                ><b-icon icon="bar-chart-fill"></b-icon>Dashboard</b-nav-item
              >
              <b-nav-item href="#link-1" @click="hide"
                ><b-icon icon="alarm-fill"></b-icon>Alarmes</b-nav-item
              >
              <b-nav-item href="#link-2" @click="hide"
                ><b-icon icon="people-fill"></b-icon>Pessoas
              </b-nav-item>
            </b-nav>
          </nav>
          <b-button variant="primary" block @click="hide"
            >Close Sidebar</b-button
          >
        </div>
      </template>
    </b-sidebar>
  </div>
</template>

<script>
export default {
  name: "sidebarComponent",
};
</script>

<style scoped>
.nav-item > .nav-link {
  color: white;
}
</style>
