<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container">
      <a class="navbar-brand">Camera Store</a>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <class class="navbar-nav me-auto mb-2 mb-lg-0"></class>
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/HomeView">Kamera</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/InputCamera">Input Kamera</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/DataPeminjam">Data Peminjam</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/RiwayatPeminjam">Riwayat Peminjam</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/">Logout</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: "NavBar",
};
</script>
