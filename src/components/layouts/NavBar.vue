<template>
  <nav
    class="navbar is-success"
    aria-label="main navigation"
    role="navigation"
  >
    <div class="container is-max-desktop px-2">
      <div class="navbar-brand">
      <div class="navbar-item is-size-4 is-family-monospace">
        Noteballs
      </div>

      <a
        @click.prevent="showMobileNav = !showMobileNav"
        class="navbar-burger"
        :class="{'is-active' : showMobileNav}"
        aria-expanded="false"
        aria-label="menu"
        data-target="navbarBasicExample"
        role="button"
        ref="navBarRef"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div
      id="navbarBasicExample"
      class="navbar-menu"
      :class="{'is-active' : showMobileNav}"
      ref="targetRef"
    >
      <div class="navbar-end">
        <RouterLink
          @click="showMobileNav = false"
          to="/"
          class="navbar-item"
          active-class="is-active"
        >
          Notes
        </RouterLink>
        <RouterLink
          @click="showMobileNav = false"
          to="/stats"
          class="navbar-item"
          active-class="is-active"
        >
          Stats
        </RouterLink>
      </div>
    </div>
    </div>
  </nav>
</template>

<script setup>
/*
  imports
*/
  import { ref } from 'vue'
  import { onClickOutside } from '@vueuse/core'

/*
  mobile nav
*/

  const showMobileNav = ref(false)

/*
  click outside
*/
  const targetRef = ref(null)
  const navBarRef = ref(null)

 onClickOutside(targetRef, () => showMobileNav.value = false, {
   ignore: [navBarRef]
 })
</script>

<style>
@media (max-width: 1023px) {
  .navbar-menu {
    position: absolute;
    left: 0;
    width: 100%;
  }
}
</style>