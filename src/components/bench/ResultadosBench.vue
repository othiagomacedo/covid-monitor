<template>
    <div class="res-bench">
        <div class="row" id="totalDados">
            <h4 class="titulo-res-bench">Resultados Comparativos</h4>

            <h5 class="titulo-res-bench">Totais</h5>

            <p>Total dos dados dos dois países acima</p>
            <div class="col">
                <card class="card1-1">
                    <div class="card" style="width: auto">
                        <ul class="list-group list-group-flush" id="CardConfirmados">
                            <li class="list-group-item">
                                <h4 class="titulo-card">Confirmados</h4>
                            </li>
                            <li class="list-group-item">{{ totConfirmados }}</li>
                        </ul>
                    </div>
                </card>
            </div>
            <div class="col">
                <card class="card1-2">
                    <div class="card" style="width: auto">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">
                                <h4 class="titulo-card">Mortes</h4>
                            </li>
                            <li class="list-group-item">{{ totMortes }}</li>
                        </ul>
                    </div>
                </card>
            </div>
            <div class="col">
                <card class="card1-3">
                    <div class="card" style="width: auto;">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">
                                <h4 class="titulo-card">Recuperados</h4>
                            </li>
                            <li class="list-group-item">{{ totRecuperados }}</li>
                        </ul>
                    </div>
                </card>
            </div>
        </div>

        <div class="row" id="difDados">
            <h5 class="titulo-res-bench">Diferenças</h5>

            <p>Diferença dos dados entre os dois países</p>
            <div class="col">
                <card class="card2-1">
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
                <card class="card2-2">
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
                <card class="card2-3">
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

    props: ['difConfirmados', 'difMortes', 'difRecuperados', 'totConfirmados', 'totMortes', 'totRecuperados'],

}

</script>

<style>
.res-bench {
    margin-top: 2vh;
    align-items: center;
    text-align: center;
}

#totalDados {
    margin-top: 2vh;
}

#difDados {
    margin-top: 2vw;
    margin-bottom: 2vh;
}

</style>