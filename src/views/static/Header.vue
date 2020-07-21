<template>
  <div class="navbar">
    <div class="navbar-logo">
      <h1 class="text-logo">
        <b><i>RUNNER</i></b>
      </h1>
    </div>
    <div class="navbar-items">
      <div class="items-wrapper">
        <p class="text-item">
          <b>Buty</b>
        </p>
        <p class="text-item">
          <b>Odzież</b>
        </p>
        <p class="text-item">
          <b>Akcesoria</b>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'header'
}
</script>

<style scoped>
.navbar{
  display: flex;
  flex-direction: row;
  font-family: Fixed, monospace;
  color: #ffd32a;
  padding: 0;
}
.navbar-logo {
  margin-top: 0;
  margin-bottom: 0;
  margin-left: 30px;
  letter-spacing: 8px;
  font-size: 40px;
  margin-right: 30px;
}
.text-logo {
  margin-top: 0;
  margin-bottom: 0;
  cursor: pointer;
}
.navbar-items {
  margin: auto;
  font-size: 25px;
  color:#d2dae2;
  width: 100%;
}
.items-wrapper {
  display: flex;
  float: right;
}
.text-item {
  margin-right: 30px;
  cursor: pointer;
}
</style>