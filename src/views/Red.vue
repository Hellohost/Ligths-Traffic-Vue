<template>
<div class="wrapper">
  <div @click="switchRed" class="red lights">
    <h1>{{timer}}</h1>
  </div>

  <div @click="switchYellow" class="yellow lights">
  </div>

  <div @click="switchGreen" class="green lights">
  </div>
</div>
</template>

<script>
import { setInterval } from 'timers';
import color from '../Store/Color.js'

export default {
  data() {
    return {
      timer: 10
    }
  },
  methods: {
    switchRed() {
      this.$router.push('/1')
    },
    switchYellow() {
      this.$router.push('/2')
    },
    switchGreen() {
      this.$router.push('/3')
    },
    changeRoute() {
      if (this.timer <= 0) {
        this.$router.push('/2')
        color.color = 'red'
      }
    }
  },
  mounted() {
    setInterval(() => {
      if (this.timer > 0) {
        this.timer--
      }
    }, 1000)
  },
  updated() {
    this.changeRoute()
  }
}
</script>

<style scoped>
.red {
  width: 15rem;
  height: 15rem;
  background-color: #ff0000;
}

.yellow {
  width: 15rem;
  height: 15rem;
  background-color: #d9ed0069;
}

.green {
  width: 15rem;
  height: 15rem;
  background-color: #39ab1354;
}

.lights {
  margin-top: 10px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

h1 {
  text-align: center;
  color: white;
  font-size: 100px;
}
</style>
