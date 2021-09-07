<template>
  <footer>
    <div class="container footer">
      <div class="row">
        <v-col cols="12" md="6">
          <div class="datos">
            <ul>
              <li>
                Desarrolado por:
                <ul>
                  <li>Nicolas Bettega.</li>
                  <li>Alexis Costedoat.</li>
                </ul>
              </li>
              <li>Materia: APDM</li>
              <li>Turno: Noche.</li>
              <li>Comisión: A.</li>
              <li>Año: 2021.</li>
            </ul>
          </div>
        </v-col>
        <v-col cols="12" md="6">
          <ul class="row py-5">
            <li class="col-4">
              <a class="btn-redes face" href="#">facebook</a>
            </li>
            <li class="col-4">
              <a class="btn-redes insta" href="#">instagram</a>
            </li>
            <li class="col-4">
              <a class="btn-redes twitter" href="#">youtube</a>
            </li>
          </ul>
        </v-col>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
footer {
  background-color: gray;
  width: 100%;
}
.footer {
  background-color: gray;
}
footer ul li {
  list-style: none;
}

.pie-pag {
  background: var(--texto);
}
.datos {
  color: var(--blanco);
}

.btn-redes {
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
  display: block;
  text-indent: -9999px;
  margin: auto;
  width: 1.8em;
  height: 1.8em;
}

.face {
  background-image: url(../assets/img/ico/facebook-f.svg);
}

.insta {
  background-image: url(../assets/img/ico/instagram.svg);
}

.twitter {
  background-image: url(../assets/img/ico/twitter.svg);
}
</style>
