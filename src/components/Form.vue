
 
 <template>
  <v-container>
    <section class="pa-3">
      <div class="center">
        <h3>¡Participa de la encuesta!</h3>
        <p class="h4 py-3">
          Si queres obtener un <b> 20% de descuento en tu proxima compra</b>,
          partcipa de la encuesta y automaticamente te enviaremos el codigo de
          descuento
        </p>
      </div>

      <div id="soporte">
        <v-row justify-cotent-around>
          <v-col cols="12" md="6">
            <v-form v-on:submit.prevent="enviar" class="pa-3 pa-lg-5 encuesta">
              <v-row>
                <v-col cols="12 my-3">
                  <v-text-field
                    v-on:blur="validacion('nombre')"
                    :class="
                      campos.nombre.esValido != null
                        ? campos.nombre.esValido
                          ? 'verde'
                          : 'rojo'
                        : ''
                    "
                    v-model="nombre"
                    :counter="10"
                    label="Nombre"
                    required
                  ></v-text-field>
                </v-col>

                <v-col cols="12">
                  <v-text-field
                    v-on:blur="validacion('mail')"
                    :class="
                      campos.mail.esValido != null
                        ? campos.mail.esValido
                          ? 'verde'
                          : 'rojo'
                        : ''
                    "
                    v-model="mail"
                    :counter="10"
                    label="E-mail"
                    required
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="6" my-3>
                  <v-text-field
                    v-on:blur="validacion('telefono')"
                    :class="
                      campos.telefono.esValido != null
                        ? campos.telefono.esValido
                          ? 'verde'
                          : 'rojo'
                        : ''
                    "
                    v-model="telefono"
                    :counter="10"
                    label="Telefono"
                    required
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="6" my-3>
                  <v-text-field
                    v-on:blur="validacion('fNacimiento')"
                    :class="
                      campos.fNacimiento.esValido != null
                        ? campos.fNacimiento.esValido
                          ? 'verde'
                          : 'rojo'
                        : ''
                    "
                    v-model="fNacimiento"
                    class="form-control"
                    type="date"
                    name="fNacimiento"
                    id="fNacimiento"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="6" my-3>
                  <v-select
                    v-on:blur="validacion('genero')"
                    :class="
                      campos.genero.esValido != null
                        ? campos.genero.esValido
                          ? 'verde'
                          : 'rojo'
                        : ''
                    "
                    v-model="genero"
                    class="custom-select"
                    id="genero"
                    label="Genero"
                    item-value="items"
                    :items="['Masculino', 'Femenino', 'Otros']"
                  >
                  </v-select>
                </v-col>

                <v-col cols="12" md="6" my-3>
                  <v-select
                    v-on:blur="validacion('tipoReloj')"
                    :class="
                      campos.tipoReloj.esValido != null
                        ? campos.tipoReloj.esValido
                          ? 'verde'
                          : 'rojo'
                        : ''
                    "
                    v-model="tipoReloj"
                    class="custom-select"
                    id="t-reloj"
                    label="Tipo de reloj"
                    data-vv-name="select"
                    item-value="items"
                    :items="['Digital', 'Analogico', 'Deportivo']"
                    required
                  ></v-select>
                </v-col>

                <v-col cols="12" md="6" my-3>
                  <v-select
                    v-on:blur="validacion('frecCompra')"
                    :class="
                      campos.frecCompra.esValido != null
                        ? campos.frecCompra.esValido
                          ? 'verde'
                          : 'rojo'
                        : ''
                    "
                    v-model="frecCompra"
                    class="custom-select"
                    id="frecuenciaC"
                    item-value="items"
                    :items="[
                      'Una ves al mes',
                      'Dos veces al mes',
                      'Una ves al año',
                      'Nunca',
                    ]"
                    label="Frecuencia de compra"
                    data-vv-name="select"
                    required
                  ></v-select>
                  <!-- <option selected disabled value="nada">Elegir opción</option>
                <option value="una ves al mes">Una vez al mes.</option>
                <option value="dos veces al mes">Dos veces al mes.</option>
                <option value="una vez al año">Una vez al año</option>
                <option value="nunca">Casi nunca.</option> -->
                </v-col>
                <v-col cols="12" md="6" my-3>
                  <v-select
                    v-on:blur="validacion('factCompra')"
                    :class="
                      campos.factCompra.esValido != null
                        ? campos.factCompra.esValido
                          ? 'verde'
                          : 'rojo'
                        : ''
                    "
                    v-model="factCompra"
                    class="custom-select"
                    id="factCompra"
                    item-value="items"
                    :items="[
                      'Descuentos',
                      'Promociones',
                      'Calidad',
                      'Marca',
                      'Procedencia',
                      'Modelo',
                    ]"
                    label="Factor de compra"
                    data-vv-name="select"
                    required
                  ></v-select>
                </v-col>
                <!-- <option selected disabled value="nada">Elegir opción</option>
                <option value="descuentos">Descuentos</option>
                <option value="promociones">Promociones</option>
                <option value="calidad">Calidad</option>
                <option value="marca">Marca</option>
                <option value="procedencia">Procedencia</option>
                <option value="modelo">Modelo</option> -->

                <v-col cols="12" md="6" my-3>
                  <v-select
                    v-on:blur="validacion('canalCompra')"
                    :class="
                      campos.canalCompra.esValido != null
                        ? campos.canalCompra.esValido
                          ? 'verde'
                          : 'rojo'
                        : ''
                    "
                    v-model="canalCompra"
                    class="custom-select"
                    id="canalCompra"
                    :items="[
                      'Internet',
                      'Tienda',
                      'Free shop',
                      'Compra en el exterio',
                    ]"
                    label="Canal de compra"
                    data-vv-name="select"
                    required
                  ></v-select>
                </v-col>
                <!-- <option selected disabled value="nada">Elegir opción</option>
                <option value="internet">Internet</option>
                <option value="tienda">Tienda</option>
                <option value="free shop">Free shop</option>
                <option value="exterior">Compra en el exterio</option> -->
                <v-col cols="12" md="6" my-3>
                  <v-select
                    v-on:blur="validacion('probRecom')"
                    :class="
                      campos.probRecom.esValido != null
                        ? campos.probRecom.esValido
                          ? 'verde'
                          : 'rojo'
                        : ''
                    "
                    v-model="probRecom"
                    class="custom-select"
                    id="provRecomend"
                    :items="['Muy probable', 'Poco probable', 'Nada probable']"
                    label="Probabilidad"
                    data-vv-name="select"
                    required
                  ></v-select>
                </v-col>
                <!-- <option selected disabled value="nada">Elegir opción</option>
                <option value="muy probable">Muy probable.</option>
                <option value="poco probabe">Poco probable.</option>
                <option value="nada probable">Nada probable.</option> -->
                <v-col cols="12" my-3>
                  <button
                    class="btn btn-block btn-enviar"
                    type="submit"
                    value="enviar"
                  >
                    Enviar
                  </button>
                </v-col>
              </v-row>
            </v-form>
          </v-col>
          <v-col
            cols="12"
            md="6"
            class="datos-env align-items-center justify-content-center"
          >
            <v-row>
              <div class="col-12 p-5" v-if="enviado === true">
                <div v-if="hayErrores" class="classerror pt-10">
                  <ul>
                    <!-- v-if="!x.esValido -->
                    <li v-for="x in campos" :key="x.index">
                      <div v-if="!x.esValido">
                        {{ x.mensaje }}
                      </div>
                    </li>
                  </ul>
                </div>
                <div v-else-if="enviado" class="enviado pt-10">
                  <h4>Encuesta enviada</h4>
                  <p class="py-2">
                    Esperamos verte pronto en nuestra tienda.<br />
                    ¡Gracias!
                  </p>
                </div>
              </div>
              <div class="datos-enviados" v-if="!hayErrores && enviado">
                <span>Datos enviados</span>
                <ul class="">
                  <li class="py-1">{{ this.dCliente.nombre | capitalize }}</li>
                  <li class="py-1">{{ this.dCliente.mail }}</li>
                  <li class="py-1">{{ this.dCliente.telefono }}</li>

                  <li class="py-1">{{ this.dCliente.fNacimiento }}</li>

                  <li class="py-1">
                    {{
                      this.dCliente.genero
                        | capitalize({ onlyFirstLetter: true })
                    }}
                  </li>

                  <li class="py-1">
                    {{
                      this.dCliente.tipoReloj
                        | capitalize({ onlyFirstLetter: true })
                    }}
                  </li>

                  <li class="py-1">
                    {{
                      this.dCliente.frecCompra
                        | capitalize({ onlyFirstLetter: true })
                    }}
                  </li>

                  <li class="py-1">
                    {{
                      this.dCliente.factCompra
                        | capitalize({ onlyFirstLetter: true })
                    }}
                  </li>

                  <li class="py-1">
                    {{
                      this.dCliente.canalCompra
                        | capitalize({ onlyFirstLetter: true })
                    }}
                  </li>

                  <li class="py-1">
                    {{
                      this.dCliente.probRecom
                        | capitalize({ onlyFirstLetter: true })
                    }}
                  </li>
                </ul>
              </div>
            </v-row>
          </v-col>
        </v-row>
      </div>
    </section>
  </v-container>
</template>

<script>
export default {
  data: function () {
    return {
      nombre: null,
      mail: null,
      telefono: null,
      fNacimiento: null,
      genero: null,
      tipoReloj: null,
      frecCompra: null,
      factCompra: null,
      canalCompra: null,
      probRecom: null,
      errores: {},
      campos: {
        nombre: {
          esValido: null,
          mensaje: "EL nombre es obligatorio.",
        },
        mail: {
          esValido: null,
          mensaje: "El mail es obligatorio",
        },
        telefono: {
          esValido: null,
          mensaje: "El telefono es obligatorio",
        },
        fNacimiento: {
          esValido: null,
          mensaje: "El fecha nacimiento es obligatorio",
        },
        genero: {
          esValido: null,
          mensaje: "El campo genero es obligatorio",
        },
        tipoReloj: {
          esValido: null,
          mensaje: "El campo tipo de reloj es obligatorio",
        },
        frecCompra: {
          esValido: null,
          mensaje: "El campo frecuencia de compra es obligatorio",
        },
        factCompra: {
          esValido: null,
          mensaje: "El campo factor de compra es obligatorio",
        },
        canalCompra: {
          esValido: null,
          mensaje: "El campo canal de compra es obligatorio",
        },
        probRecom: {
          esValido: null,
          mensaje: "El campo probabilidad de compra es obligatorio",
        },
      },

      dCliente: {},
      // errores: [],
      enviado: false,
    };
  },
  computed: {
    hayErrores: function () {
      console.log(
        "hayErrores",

        !this.campos.nombre.esValido,
        !this.campos.mail.esValido,
        !this.campos.fNacimiento.esValido,
        !this.campos.telefono.esValido,
        !this.campos.genero.esValido,
        !this.campos.tipoReloj.esValido,
        !this.campos.frecCompra.esValido,
        !this.campos.factCompra.esValido,
        !this.campos.canalCompra.esValido,
        !this.campos.probRecom.esValido,
        this.errores
      );
      return (
        !this.campos.nombre.esValido ||
        !this.campos.mail.esValido ||
        !this.campos.fNacimiento.esValido ||
        !this.campos.telefono.esValido ||
        !this.campos.genero.esValido ||
        !this.campos.tipoReloj.esValido ||
        !this.campos.frecCompra.esValido ||
        !this.campos.factCompra.esValido ||
        !this.campos.canalCompra.esValido ||
        !this.campos.probRecom.esValido
      );
    },
    validados: function () {
      return console.log(this.errores);
    },
    // this.validados(),
    //   console.log(this.errores);
  },
  methods: {
    enviar: function () {
      // console.log(e); //evento del submit
      // this.errores = [];
      //validacion
      this.validacion("nombre");
      this.validacion("mail");
      this.validacion("telefono");
      this.validacion("nombre");
      this.validacion("mail");
      this.validacion("fNacimiento");
      this.validacion("genero");
      this.validacion("tipoReloj");
      this.validacion("frecCompra");
      this.validacion("factCompra");
      this.validacion("canalCompra");
      this.validacion("probRecom");
      this.reiterar();
      // console.log(this.errores)

      this.enviado = true; //queremos evaluar que los mensajes se muestren solo cuando se ejecute la funcion

      if (!this.hayErrores) {
        if (!localStorage.datoCliente) {
          this.dCliente = {};
          // console.log(this.dCliente);
        } else {
          // console.log(this.dCliente);
          this.dCliente = JSON.parse(localStorage.getItem("datoCliente"));
        }

        this.dCliente = {
          nombre: this.nombre,
          mail: this.mail,
          telefono: this.telefono,
          fNacimiento: this.fNacimiento,
          genero: this.genero,
          tipoReloj: this.tipoReloj,
          frecCompra: this.frecCompra,
          factCompra: this.factCompra,
          canalCompra: this.canalCompra,
          probRecom: this.probRecom,
        };
        // console.log('dCliente', this.dCliente)
        localStorage.setItem("datoCliente", JSON.stringify(this.dCliente));
      }
    },
    /**
     *
     */
    validacionEmail(email) {
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    validacion: function (campo) {
      if (campo == "mail") {
        this.campos.mail.esValido = this.validacionEmail(this.mail);
      } else {
        // console.log("validar", campo, this.campos[campo]);
        if (!this[campo]) {
          this.campos[campo].esValido = false;

          // this.errores.push(this.campos[campo].mensaje);
        } else {
          this.campos[campo].esValido = true;
        }
      }
    },
    reiterar: function () {
      for (let error in this.campos) {
        // if (error.esValido == false) {
        //   const esValido = error.esValido;
        //   const mensaje = error.mensaje;
        // this.errores.push({ esValido, mensaje });
        console.log(error.esValido);
        // }
      }
      // console.log(this.errores);
    },
  },

  mounted: function () {
    this.dCliente = JSON.parse(localStorage.getItem("datoCliente")) || [];
  },
};
</script>
<style lang="scss">
.classerror ul li {
  list-style: none;
}
.datos-enviados {
  text-align: left;
  padding: 0 2em;
}
.datos-enviados span {
  font-size: 1.5em;
}
.btn-enviar {
  width: 100%;
}
.primary--text {
  color: #19d228 !important;
  caret-color: #19d228 !important;
}
</style>