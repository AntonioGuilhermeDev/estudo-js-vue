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
            <h4 id="sidebar-menu-title">Área do Leitor</h4>
          </div>

          <nav class="mb-3">
            <b-nav vertical>
              <b-nav-item active @click="hide"
              ><b-icon icon="book-fill"></b-icon> Meus Livros</b-nav-item
              >
              <b-nav-item href="#link-1" @click="hide"
              ><b-icon icon="star-fill"></b-icon> Favoritos</b-nav-item
              >
              <b-nav-item href="#link-2" @click="hide"
              ><b-icon icon="bookmark-heart-fill"></b-icon> Lista de Desejos
              </b-nav-item>
            </b-nav>
          </nav>
          <b-button variant="primary" block @click="hide" class="align-self-center"
          >Fechar</b-button
          >
        </div>
      </template>
    </b-sidebar>
  </div>
</template>

<script>

export default {
  name: "SideBar",
}
</script>


<style scoped>
</style>