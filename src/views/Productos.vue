
  
  <template>
  <!-- <v-container grid-list-md> -->
  <section class="container animate__animated animate__backInUp">
    <div class="text-center pt-5">
      <h2>Nuestros productos</h2>
    </div>
    <v-layout align-center justify-space-around row fill-height>
      <v-flex
        v-for="articulo in productos"
        :key="articulo.id"
        xs12
        sm5
        md4
        lg3
        pa-10
      >
        <v-card>
          <img
            :src="require(`../assets/img/${articulo.imagen}`)"
            :alt="articulo.alt"
          />

          <!-- <v-container fill-height fluid>
                <v-layout fill-height>
                  <v-flex xs12 align-end flexbox>
                    <span class="headline">Top 10 Australian beaches</span>
                  </v-flex>
                </v-layout>
              </v-container> -->

          <v-card-title>
            <div>
              <h3>{{ articulo.nombre }}</h3>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-row>
              <v-col cols="6">
                <p class="precio text-left">${{ articulo.precio }}</p>
              </v-col>
              <v-col cols="6">
                <input
                  type="checkbox"
                  :value="articulo.prod_id"
                  :id="articulo.prod_id"
                  @change="meGusta($event, articulo)"
                  v-model="favorito"
                />
                <label :for="articulo.prod_id"></label>
              </v-col>
              <v-col cols="12">
                <v-btn class="btn btnCart" @click="cartAgr(articulo)">
                  Agregar al carrito
                </v-btn>
              </v-col>
            </v-row>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
    <!-- <div class="row justify-content-around">
      <a
        v-for="articulo in productos"
        :key="articulo.id"
        class="
          btn
          cardi
          tarjeta
          col-8 col-md-4 col-lg-3
          my-3
          mx-4
          p-0
          bg-white
          shadow
        "
      >
        <article class="d-flex flex-column-reverse">
          <div class="col-12 bd-highlight texto-card p-2 h-100 d-inline-block">
            <h3>{{ articulo.nombre }}</h3>
            <div class="col-12 d-flex py-2">
              <div class="col-9">
                <p class="precio text-left">$\n{{ articulo.precio }}</p>
              </div>
              <div class="col-3">
                <input
                  type="checkbox"
                  :value="articulo.prod_id"
                  :id="articulo.prod_id"
                  @change="meGusta($event, articulo)"
                  v-model="favorito"
                />
                <label :for="articulo.prod_id"></label>
              </div>
            </div>
            <div class="col-12 divAgrCart">
              <a class="btn btnCart btn-enviar" @click="cartAgr(articulo)"
                >Agregar al Carrito</a
              >
            </div>
          </div>
          <div class="col-12 bd-highlight p-0 text-center">
            <img v-bind:src="articulo.imagen" v-bind:alt="articulo.alt" />
          </div>
        </article>
      </a> -->
    <!-- </div> -->
  </section>
  <!-- </v-container> -->
</template>

<script>
export default {
  data: function () {
    return {
      carrito: [],
      megusta: {
        prod_id: [],
        datos: [],
      },
      favorito: [],
      productos: [],
    };
  },

  mounted() {
    fetch("https://mania-com.000webhostapp.com/api/api.php")
      .then((response) => response.json())
      .then((response) => {
        this.productos = response;
        console.log(response);
        localStorage.setItem("dato", JSON.stringify(this.productos));
      })
      .catch((err) => console.error(err));
    console.log(this.productos);
  },

  methods: {
    meGusta(check, articulo) {
      console.log(check, articulo);
      let condicion = check.target.checked;

      if (condicion == true) {
        this.agregarMegusta(articulo);
      } else {
        this.quitarMegusta(articulo.prod_id);
      }
    },

    agregarMegusta(produ) {
      //  console.log("agregar", produ);

      let indC = this.megusta.prod_id.indexOf(produ.prod_id);
      //	console.log(indC);

      if (indC == -1) {
        this.megusta.prod_id.push(produ.prod_id);
        this.megusta.datos.push(produ);
      }
      console.log(this.megusta);

      localStorage.setItem("meGusta", JSON.stringify(this.megusta));
    },

    quitarMegusta(prodId) {
      let indC = this.megusta.prod_id.indexOf(prodId);

      if (indC != -1) {
        this.megusta.prod_id.splice(indC, 1);
        this.megusta.datos.splice(indC, 1);
      }

      let produlocal = JSON.stringify(this.megusta);

      localStorage.setItem("meGusta", produlocal);
    },

    cartAgr(producto) {
      // console.log(producto.prod_id);
      //let index =
      let indC = this.carrito.findIndex(function (cart) {
        return cart.id == producto.prod_id; // or el.nombre=='T NORTE';
      });
      // let indC = this.carrito.idProd.indexOf(producto.prod_id);
      console.log(indC);

      if (indC != -1) {
        this.carrito[indC].cantidad++;
      } else {
        let cant = 1;

        let articulo = {
          id: producto.prod_id,
          nombre: producto.nombre,
          descripcion: producto.descripcion,
          precio: producto.precio,
          cantidad: cant,
          imagen: producto.imagen,
        };

        this.carrito.push(articulo);
      }

      //   //muestro el precio y la cantidad de productos al agregar al carrito.

      //   this.carrito.preTotal = this.carrito.preTotal + parseInt(producto.precio);

      localStorage.setItem("carrito", JSON.stringify(this.carrito));
    },
  } /*
  mounted: function () {
    this.megusta = JSON.parse(localStorage.getItem("meGusta")) || this.megusta;
    this.favorito = this.megusta.prod_id != [] ? this.megusta.prod_id : [];
    console.log(this.megusta);
    this.carrito = JSON.parse(localStorage.getItem("carrito")) || this.carrito;
  },*/,
};
</script>

<style lang="scss">
h3 {
  text-align: center;
  font-size: 1em;
  font-family: "Montserrat-Regular";
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  word-break: break-word;
}
.btnCart span {
  flex: auto;
}
</style>