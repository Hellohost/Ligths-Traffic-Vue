<template>
  <div id="app">
    <div class="box">
      <div class="wrap">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  }
}
</script>

<style scoped>
#app {
  background: rgb(145, 202, 145);
}
.box {
 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.wrap {
  border-radius: 20px;
  background: black;
  margin: 3rem;
}
</style>
