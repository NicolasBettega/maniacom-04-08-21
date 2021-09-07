<template>
  <div class="home animate__animated animate__backInUp">
    <Carousel :items="items" />
    <!-- <img
      alt="Vue logo"
      src="../img/bataman.png"
      class="animate__animated animate__backInUp"
      v-on:click="activarModal(2)"
    /> -->
    <!-- <Modal :isActive="modalActive">
      <Test :msg="msg" />
    </Modal> -->
    <div>
      <div class="intro container text-center py-4">
        <h2 class="titulo">Bienvenido</h2>
        <p>
          <b>
            Te deseamos que tengas una experiencia positiva en tienda Mi
            Reloj.</b
          >
        </p>
        <p>
          Tenemos el objetivo de convertirnos en un referente a nivel nacional
          en la venta de relojes. A partir de esto, se han incorporado diversas
          marcas para poder cumplir con las necesidades de nuestro clientes.
        </p>
      </div>
      <v-container>
        <Form />
        <!--<router-link class="btn" to="/formulario">Ir al formulario</router-link>-->
      </v-container>

      <div id="mtdPago" class="container pb-5 text-center">
        <h3 class="py-5">Medios de pago</h3>
        <ul class="row justify-content-around list-unstyled">
          <li class="col-5 col-sm-3 col-md-3 bgPago-1">Efectivo</li>
          <li class="col-5 col-sm-3 col-md-3 bgPago-2">Transferencia</li>
          <li class="col-5 col-sm-3 col-md-3 bgPago-3">Deposito</li>
          <li class="col-5 col-sm-3 col-lg-3 bgPago-4">Tarjeta</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import Test from "@/components/Test.vue";
import Carousel from "@/components/Carousel.vue";
// import Modal from "@/components/Modal.vue";
// import Products from "@/data/products.json";
import Form from "@/components/Form.vue";

export default {
  name: "Home",
  methods: {
    activarModal(data) {
      this.modalActive = true;
      this.msg = this.getProductById(data).nombre;
    },
    getProductById(id) {
      return this.products.find((o) => o.id === id);
    },
  },
  data: function () {
    return {
      modalActive: false,
      msg: "",
      // products: Products,
      items: [
        {
          text: "Home First",

          imagen: require("../assets/img/banner2-marvel-m.png"),
        },
        {
          text: "Home Second",

          imagen: require("../assets/img/banner-dc-m.png"),
        },
        {
          text: "Home tres",

          imagen: require("../assets/img/banner-marvel-m.png"),
        },
      ],
    };
  },
  components: {
    // Test,
    Carousel,
    // Modal,
    Form,
  },
};
</script>
