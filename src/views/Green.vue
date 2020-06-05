<template>
<div class="wrapper">
  <div @click="switchRed" class="red lights">
  </div>

  <div @click="switchYellow" class="yellow lights">
  </div>

  <div @click="switchGreen" class="green lights" :class="classToggle ? 'light' : 'dark'">
    <h1>{{timer}}</h1>
  </div>
</div>
</template>

<script>
import { setInterval } from 'timers';
import color from '../Store/Color.js'
export default {
  data() {
    return {
      timer : 15,
      classToggle: false
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
        color.color = 'green'
      }
    },
    changeColor() {
      if (this.timer == 3) {
        this.classToggle = true
      }
      if (this.timer == 2) {
        this.classToggle = false
      }
      if (this.timer == 1) {
        this.classToggle = true
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
    this.changeColor()
  }
}
</script>

<style scoped>
.red {
  width: 15rem;
  height: 15rem;
  background-color: #c25454;
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

h1 {
  color: white;
  font-size: 100px;
}

.lights {
  margin-top: 10px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.light {
  background-color: #39ab1354;
}

.dark {
  background-color: #39ab13;
}
</style>
