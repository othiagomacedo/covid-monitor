<template>
    <div class="card-body">
        <div class="card" style="width: auto">
            <div class="card-body">
                <h4 class="card-title">{{ nomePais }}</h4>
                <p class="card-title">Sigla: {{ sigla }}</p>
                <p class="confirmados">Confirmados: {{ confirmados }}</p>
                <p class="mortes">Mortes: {{ mortes }}</p>
                <p class="recuperados">Recuperados: {{ recuperados }}</p>
            </div>

        </div>
    </div>
</template>

<script>

export default {
    props: ['nomePais',
            'sigla',
            'confirmados',
            'mortes',
            'recuperados'],

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