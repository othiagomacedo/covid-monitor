<template>
    <div class="card-body">
        <div class="card" style="width: auto">
            <div class="card-body">
                <h4 class="card-title">{{ pais.nomePais }}</h4>
                <p class="card-title">Sigla: {{ pais.sigla }}</p>
                <p class="confirmados">Confirmados: {{ pais.confirmados }}</p>
                <p class="mortes">Mortes: {{ pais.mortes }}</p>
                <p class="recuperados">Recuperados: {{ pais.recuperados }}</p>
            </div>

        </div>
    </div>
</template>

<script>

export default {
    props: {
        pais: {
            type: Object,
            required: true,
        },
    },

}
</script>

<style>
.card {
    box-shadow: 0 2px 4px rgba(54, 54, 54, 0.199);
}

.btn:active {
    background-color: var(--color-background-nav);
}
</style>