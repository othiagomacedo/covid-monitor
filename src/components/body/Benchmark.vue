<template>
    <div class="benchmark-body">
        <h2>Benchmark</h2>
        
        <PesquisaBench></PesquisaBench>

        <div class="row">
            <div class="col">
                <CardPais></CardPais>
            </div>
            <div class="col">
                <CardPais></CardPais>
            </div>
        </div>

        <div class="row">
            <div class="col">
                <ResultadosBench></ResultadosBench>
            </div>
        </div>

        <div class="row">
            <div class="col">
                <HistoricoBench></HistoricoBench>
            </div>
        </div>
        
    </div>
</template>

<script>
import CardPais from '../pais/CardPais.vue'
import PesquisaBench from '../bench/PesquisaBench.vue';
import ResultadosBench from '../bench/ResultadosBench.vue';
import HistoricoBench from '../bench/HistoricoBenchmark.vue';

export default {
    components : {
        PesquisaBench,
        CardPais,
        ResultadosBench,
        HistoricoBench
    }    
}
</script>

<style>
</style>
