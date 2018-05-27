<template>
  <div class="container">
    <div class="class">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <hr>
        <router-view name="header"></router-view>
        <transition name="slide" mode="out-in">
          <router-view></router-view>
        </transition>
        <app-footer></app-footer>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from './components/common/Header';
  import Footer from './components/common/Footer'
export default {
    components:{
      appHeader: Header,
      appFooter: Footer
    }
}
</script>

<style>
  .slide-leave-active {
    transition: opacity 1s ease;
    opacity: 0;
    animation: slide-out 1s ease-out forwards;
  }
  .slide-leave {
    opacity: 1;
    transform: translateX(0);
  }
  .slide-enter-active {
    animation: slide-in 1s ease-out forwards;
  }
  @keyframes slide-out {
    0%{
      transform: translateY(0);
    }
    100% {
      transform: translateY(-30px);
    }
  }
  @keyframes slide-in {
    0% {
      transform: translateY(-30px);
    }
    100% {
      transform: translateY(0);
    }
  }
</style>
