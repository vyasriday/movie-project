<template>
  <div class="movie-wrapper" :style="styles">
    <div class="movie-info">
      <h1>{{movieDetails.title ? movieDetails.title: movieDetails.name }}</h1>
      <!-- <h3>Release Date: {{movieDetails.release_date}}</h3> -->
      <p>{{movieDetails.overview}}</p>
    </div>
  </div>
</template>

<script lang="js">
  const BACKDROP_PATH = 'https://image.tmdb.org/t/p/w1280';
  export default {
    name: 'MovieDetails',
    data() {
      return {
        id: '',
        category: '',
        movieDetails: {}
      }
    },
    created() {
      this.id = this.$route.params.id;
      this.category = this.$route.params.category;
      this.fetchMovieDetails();
    },
    methods: {
      async fetchMovieDetails() {
        try {
          const res = await fetch(`https://api.themoviedb.org/3/${this.category}/${this.id}?api_key=4e062be51f8b55a66259160103b5f870`);          
          const movieDetails = await res.json();
          this.movieDetails = movieDetails;
        } catch(e) {
          throw new Error(e);
        }
      }
    },
    computed: {
      styles() {
        return {
          background: `url(${BACKDROP_PATH}/${this.movieDetails.backdrop_path}) no-repeat`
        }
      }
    },
  }
</script>

<style scoped>
  .movie-wrapper {
    position: relative;
    padding-top: 50vh;
    background-size: cover !important;
  }
  .movie-info {
    /* background: white; */
    color: #fdfdfd;
    padding: 2rem 10%;
  }
</style>