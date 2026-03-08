<script setup>
const modules = [
  { title: "Module 1", route: "/module/1" },
  { title: "Module 2", route: "/module/2" },
  { title: "Module 3", route: "/module/3" },
  { title: "Module 4", route: "/module/4" }
]
</script>

<template>
<div class="layout">

  <!-- Top bar -->
  <header class="topbar">
    <div class="logo">LOGO</div>
    <div class="context">Navigation Context</div>
    <div class="account">Account</div>
  </header>

  <!-- Left sidebar -->
  <aside class="sidebar-left">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/modules">Modules</router-link>
      <router-link to="/progress">Progress</router-link>
    </nav>

    <button class="logout">Logout</button>
  </aside>

  <!-- Main content -->
  <main class="main">

    <section class="hero">
      Hero Section
    </section>

    <section class="level">
      Level Select
    </section>

    <section class="modules">
      <router-link
        v-for="m in modules"
        :key="m.title"
        :to="m.route"
        class="module-card"
      >
        {{ m.title }}
      </router-link>
    </section>

  </main>

  <!-- Right sidebar -->
  <aside class="sidebar-right">

    <div class="widget">
      Recent Updates
    </div>

    <div class="widget">
      Progress
    </div>

    <div class="widget">
      Other Widget
    </div>

  </aside>

</div>
</template>

<style scoped>

.layout {
  display: grid;
  grid-template-columns: 220px 1fr 260px;
  grid-template-rows: 70px 1fr;
  grid-template-areas:
    "topbar topbar topbar"
    "sidebar-left main sidebar-right";
  height: 100vh;
  gap: 16px;
  padding: 16px;
}

/* top bar */

.topbar {
  grid-area: topbar;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #ececec;
  padding: 0 20px;
}

/* sidebars */

.sidebar-left {
  grid-area: sidebar-left;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #f4f4f4;
  padding: 20px;
}

.sidebar-right {
  grid-area: sidebar-right;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

/* main area */

.main {
  grid-area: main;
  display: grid;
  grid-template-rows: auto auto 1fr;
  gap: 16px;
}

/* sections */

.hero {
  background: #e3e3e3;
  padding: 20px;
}

.level {
  background: #dedede;
  padding: 16px;
}

/* modules grid */

.modules {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px,1fr));
  gap: 16px;
}

.module-card {
  display: block;
  padding: 20px;
  background: #f0f0f0;
  border-radius: 8px;
  text-decoration: none;
  color: black;
  text-align: center;
  transition: 0.2s;
}

.module-card:hover {
  background: #e2e2e2;
  transform: translateY(-2px);
}

/* widgets */

.widget {
  background: #efefef;
  padding: 16px;
}

.logout {
  margin-top: 20px;
}

</style>
