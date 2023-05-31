<template>
    <div class="barra-topo">
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand">Covid Monitor</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <!-- <li class="nav-item">
                        <router-link to="/paises" class="nav-link active" aria-current="page">Países</router-link>
                    </li> -->
                    <li class="nav-item">
                        <router-link to="/benchmark" class="nav-link active" aria-current="page">Benchmark</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/historico" class="nav-link active" aria-current="page">Histórico</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    </div>
</template>      

<style>
nav {
    background-color: #fafafa;
    box-shadow: 0 2px 4px rgba(54, 54, 54, 0.199);
}


.nav-item {
    margin: auto;
}

.nav-item:hover {
    background-color: var(--color-background-nav-hover);
}
</style>