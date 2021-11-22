<template>
  <div id="app">
    <nav class="c-nav">
      <ul class="c-nav-list">
        <li class="c-nav-list-item">Home</li>
        <li class="c-nav-list-item">Contact</li>
      </ul>
    </nav>
    <h1>Euroson Festival</h1>
    <div class="c-feedback warning">
      Er is een fout gebeurd
    </div>
    <div class="c-feedback error">
      Tis kapot
    </div>
    <div class="c-feedback succes">
      joepie het werkt
    </div>

  </div>
</template>

<script>
//Belangrijk om de juiste file te importen anders werkt het niet 
import style from './scss/style.scss';

export default {
  name: 'App',
}
</script>

