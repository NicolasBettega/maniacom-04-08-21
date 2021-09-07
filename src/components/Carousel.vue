
<template>
  <v-carousel cycle height="250" hide-delimiter-background show-arrows-on-hover>
    <v-carousel-item
      v-for="(slide, i) in items"
      :key="i"
      reverse-transition="fade-transition"
      transition="fade-transition"
    >
      <v-sheet :color="slide.color" height="100%">
        <v-row class="fill-height" align="center" justify="center">
          <v-img class="imagen" :alt="slide.text" :src="slide.imagen" />
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>
<script>
export default {
  name: "Carousel",
  props: {
    items: Array,
  },
};
</script>

<style scoped lang="scss">
.v-image__image .v-image__image--cover {
  background-size: 100% auto !important;
}
</style>

