<script setup>
const modules = [
  { title: 'Module 1', route: '/module/1' },
  { title: 'Module 2', route: '/module/2' },
  { title: 'Module 3', route: '/module/3' },
  { title: 'Module 4', route: '/module/4' },
]
</script>

<template>
  <div class="layout">
    <header class="topbar">
      <div class="logo">LOGO</div>
      <div class="context">Navigation Context</div>
      <div class="account">Account</div>
    </header>

    <aside class="sidebar-left">
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/modules">Modules</router-link>
        <router-link to="/progress">Progress</router-link>
      </nav>
      <button class="logout">Logout</button>
    </aside>

    <main class="main">
      <section class="hero">Hero Section</section>
      <section class="level">Level Select</section>
      <section class="modules">
        <router-link v-for="m in modules" :key="m.title" :to="m.route" class="module-card">
          {{ m.title }}
        </router-link>
      </section>
    </main>

    <aside class="sidebar-right">
      <div class="widget">Recent Updates</div>
      <div class="widget">Progress</div>
      <div class="widget">Other Widget</div>
    </aside>
  </div>
</template>
