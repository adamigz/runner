<template>
  <div id="app">
    <router-view name="header"/>
    <main>
      <router-view/>
    </main>
    <router-view name="footer"/>
  </div>
</template>

<style>
body {
  margin: 0;
  padding: 0;
  background-color: #1e272e;
}
</style>
