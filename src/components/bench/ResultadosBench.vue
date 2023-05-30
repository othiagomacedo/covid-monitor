<template>
    <div class="res-bench">
        <div class="row">
            <h4 class="titulo-res-bench">Resultados Comparativos</h4>
            <h5 class="titulo-res-bench">Diferenças</h5>

            <p>Um resumo dos dados acima</p>
            <div class="col">
                <card class="card1">
                    <div class="card" style="width: auto">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">
                                <h4 class="titulo-card">Confirmados</h4>
                            </li>
                            <li class="list-group-item">{{ difConfirmados }}</li>
                        </ul>
                    </div>
                </card>
            </div>
            <div class="col">
                <card class="card2">
                    <div class="card" style="width: auto">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">
                                <h4 class="titulo-card">Mortes</h4>
                            </li>
                            <li class="list-group-item">{{ difMortes }}</li>
                        </ul>
                    </div>
                </card>
            </div>
            <div class="col">
                <card class="card3">
                    <div class="card" style="width: auto;">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">
                                <h4 class="titulo-card">Recuperados</h4>
                            </li>
                            <li class="list-group-item">{{ difRecuperados }}</li>
                        </ul>
                    </div>
                </card>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            difConfirmados: 0,
            difMortes: 0,
            difRecuperados: 0
        }
    }
}

</script>

<style>
.res-bench {
    margin-top: 2vh;
    align-items: center;
    text-align: center;
}

card {
    background-color: rgb(18, 190, 190);
}

</style>