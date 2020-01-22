<template>
  <div id="app">
  <transition mode="out-in" name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>


.bounce-enter-active {
    animation: bounce-in .3s;
}

.bounce-leave-active {
    animation: bounce-out .3s;
}

@keyframes bounce-in {
    0% {
        opacity: 0;
        transform: translateX(100%);
    }
    100% {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes bounce-out {
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
}

.bounce-back-enter-active {
    animation: bounce-back-in .3s;
}

.bounce-back-leave-active {
    animation: bounce-back-out .3s;
}

@keyframes bounce-back-in {
    0% {
        opacity: 0.5;
    }
    100% {
        opacity: 1;
    }
}

@keyframes bounce-back-out {
    0% {
        opacity: 1;
        transform: translateX(0);
    }
    100% {
        opacity: 0.5;
        transform: translateX(100%);
    }
}
</style>
