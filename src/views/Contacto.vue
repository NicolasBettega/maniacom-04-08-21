<template>
  <section class="container pa-3 animate__animated animate__backInUp">
    <div>
      <h2>Contacto</h2>
      <p class="h4 py-3">
        Si tenés alguna duda o necesitas soporte para de nuestros productos por
        favor completá el formulario y nos contactaremos a la brevedad.
      </p>
    </div>
    <div class="container" id="contacto">
      <v-row>
        <v-flex xs12 sm6 class="pa-5">
          <v-form class="backform">
            <v-row>
              <v-col cols="12">
                <v-text-field
                  v-model="firstname"
                  :counter="10"
                  label="Nombre"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="email"
                  :counter="10"
                  label="E-mail"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="phoneNumber"
                  :counter="10"
                  label="Telefono"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-textarea
                  v-model="Comentario"
                  name="input-7-1"
                  label="Comentario"
                  value=""
                  hint="Hint text"
                ></v-textarea>
              </v-col>
              <button class="mr-4 btn-enviar" type="submit">Enviar</button>
            </v-row>
          </v-form>
        </v-flex>
        <!--  <div id="contacto" class="row justify-content-around">
      <v-form
        class="col-11 col-md-6 pa-3 pa-lg-5"
        action="#"
        method="post"
        enctype="multipart/form-data"
      >
        <div class="form-row">
          <div class="form-group col-12">
            <label class="font-weight-bold h5" for="nombre">Nombre</label>
            <input
              class="form-control"
              type="text"
              name="nombre"
              id="nombre"
              required=""
            />
          </div>
          <div class="form-group pt-4 col-12">
            <label class="font-weight-bold h5" for="correo">Email</label>
            <input
              class="form-control"
              type="email"
              name="correo"
              id="correo"
              required=""
            />
          </div>
          <div class="form-group pt-4 col-12">
            <label class="font-weight-bold h5" for="tel">Télefono</label>
            <input
              class="form-control"
              type="tel"
              name="telefono"
              id="tel"
              required=""
            />
          </div>
          <div class="form-group pt-4 col-12">
            <label class="font-weight-bold h5" for="coment"
              >Dejanos un comentario</label
            >
            <textarea
              name="comentario"
              id="coment"
              class="form-control"
            ></textarea>
          </div>
          <div class="col-12 mx-auto">
            <button class="btn btn-block btn-enviar" type="submit">
              Enviar
            </button>
          </div>
        </div>
      </form>-->
        <v-flex xs12 sm6 class="datos-contac pa-5">
          <div class="datos-contac">
            <div>
              <h3>INFORMACION DE CONTACTO</h3>
              <ul>
                <li>contacto@mireloj.com</li>
                <li>(011) 902-8665</li>
              </ul>
            </div>
          </div>
        </v-flex>
      </v-row>
    </div>
  </section>
</template>


<script>
export default {
  data: function () {
    return {
      firstname: "",
      phoneNumber: "",
      email: "",
      Comentario: "",
    };
  },
};
</script>

<style scoped lang="scss">
.theme--light.v-list {
  background-color: transparent;
}
.backForm {
  background-color: #ffffff;
}
#contacto {
  border-radius: 0.875em;
  box-shadow: 0px 4px 9px 4px rgb(123 123 123 / 80%);
  -webkit-box-shadow: 0px 4px 9px 4px rgb(123 123 123 / 80%);
  -moz-box-shadow: 0px 4px 9px 4px rgba(123, 123, 123, 0.8);
}
ul li {
  list-style: none;
}
</style>

