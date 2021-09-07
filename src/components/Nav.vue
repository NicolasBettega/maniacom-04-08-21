<template>
  <div>
    <v-app-bar color="white" dark>
      <v-toolbar-title><h1>Maniacom</h1></v-toolbar-title>
      <v-app-bar-nav-icon
        class="ml-auto"
        color="blue-grey darken-2"
        @click="drawer = true"
      ></v-app-bar-nav-icon>
    </v-app-bar>

    <v-navigation-drawer right v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-gray--text text--accent-4"
        >
          <router-link v-for="item in items" :key="item.url" :to="item.url">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </router-link>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "Nav",
  data: function () {
    return {
      drawer: false,
      group: null,
      items: [
        {
          title: "Home",
          url: "/",
          icon: "mdi-home",
        },

        {
          title: "Productos",
          url: "/productos",
          icon: "mdi-shopping",
        },
        {
          title: "Contacto",
          url: "/contacto",
          icon: "mdi-email",
        },
        {
          title: "Carrito",
          url: "/carrito",
          icon: "mdi-cart",
        },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.nav {
  padding: 30px;
  text-align: center;

  a {
    font-weight: bold;
    color: #2c3e50;
    padding: 10px;
    text-decoration: none;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
a:-webkit-any-link {
  text-decoration: none;
}
h1 {
  font-size: 0;
  background: url(../assets/img/ico/logo.png) no-repeat;
  height: 54px;
}
</style>
