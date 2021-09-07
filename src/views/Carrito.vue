
    <template>
  <section class="container py-5 animate__animated animate__backInUp">
    <div>
      <h2>
        Carrito <span id="total">({{ total }})</span>
      </h2>
    </div>

    <div class="container carrito">
      <ul class="row justify-space-around pa-0 pa-10">
        <li
          v-for="(articulo, index) in carrito"
          :key="index"
          class="flex xs12 sm5 md12 ma-5 pa-2"
          :id="articulo.prod_id"
        >
          <v-row class="align-center">
            <v-col cols="12" md="3">
              <img
                :src="require(`../assets/img/${articulo.imagen}`)"
                :alt="articulo.nombre"
              />
            </v-col>
            <v-col cols="12" md="5">
              <h3 class="h5 font-weight-bold">{{ articulo.nombre }}</h3>
              <p class="text-truncate">{{ articulo.descripcion }}</p>
            </v-col>
            <v-col class="col-6 col-md-2">
              <p>Total: ${{ articulo.precio }}</p>
              <p id="subTot3">Subtotal: ${{ articulo.precio }}</p>
            </v-col>
            <v-col cols="6" md="2">
              <v-row class="">
                <v-col class="col-4 p-2">
                  <button
                    @click="decrement(index)"
                    class="btnMenos border btn p-0"
                  >
                    -
                  </button>
                </v-col>
                <v-col cols="4">
                  <span class="badge badge-pill text-center" id="a3">{{
                    articulo.cantidad
                  }}</span>
                </v-col>
                <v-col cols="4">
                  <button
                    @click="increment(index)"
                    class="btnMas border btn p-0"
                  >
                    +
                  </button>
                </v-col>
                <v-col cols="12">
                  <!-- <button @click="del(index)" class="btn btn-danger">
                    Eliminar
                  </button> -->
                  <v-btn color="red" @click="del(index)" elevation="3" outlined
                    >Eliminar</v-btn
                  >
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </li>
      </ul>
    </div>
    <div class="p-4 d-flex justify-content-end">
      <div class="ml-auto pr-">
        <span class="total" id="cartTotal">Precio total: $ {{ sum }}</span>
      </div>
      <!-- <button class="btn btn-secondary ml-auto ">vaciar carrito</button>
                    <button class="btn btn-primary">Realizar compra</button> -->
    </div>
  </section>
</template>


<script>
export default {
  data: function () {
    return {
      carrito: [],
      // cantTot: null,
    };
  },
  //  methods: {

  // },

  methods: {
    increment(index) {
      console.log("---------increment" + index);
      this.carrito[index].cantidad++;
      this.totCant();
      // this.carrito.push(articulo);
      localStorage.setItem("carrito", JSON.stringify(this.carrito));
    },
    decrement(index) {
      //if (this.carrito[index].count==0) return;
      console.log("---------decrement" + index);
      if (this.carrito[index].cantidad > 1) {
        this.carrito[index].cantidad--;
        // this.totCant();
        localStorage.setItem("carrito", JSON.stringify(this.carrito));
      }
      // this.carrito.push(articulo);
    },
    del(index) {
      this.carrito.splice(index, 1);
      localStorage.setItem("carrito", JSON.stringify(this.carrito));
    },

    totCant() {
      let totCont = 0;
      for (let arti of this.carrito) {
        totCont += arti.cantidad;
      }

      return totCont;
    },
  },

  // filters:{
  //     showPrice(price){
  //         return '￥'+price.toFixed(2)
  //     }

  // },

  computed: {
    total: {
      get() {
        let totCont = 0;
        for (let arti of this.carrito) {
          totCont += arti.cantidad;
        }

        return totCont;
      },
    },

    sum: {
      get() {
        let sum = 0;
        for (let cart of this.carrito) {
          sum += cart.cantidad * cart.precio;
        }
        return sum;
      },
    },
  },

  mounted() {
    this.carrito = JSON.parse(localStorage.getItem("carrito")) || this.carrito;
    // this.cantTot = this.totCant();
    // console.log(this.carrito);
  },
};
</script>

   <style lang="scss">
.carrito ul li {
  border: 0.0875rem solid rgba(194, 194, 194, 0.46);
  list-style: none;
}
h3 {
  font-family: "Montserrat-Regular";
  font-size: 1.25rem;
}
.total {
  font-size: 2em;
}
</style>