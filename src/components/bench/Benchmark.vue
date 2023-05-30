<template>
    <div class="benchmark-body">
        <h2>Benchmark</h2>
        
        <PesquisaBench></PesquisaBench>

        <div class="row">
            <div class="col">
                <HistoricoBench></HistoricoBench>
            </div>
        </div>
        
    </div>
</template>

<script>
import PesquisaBench from './PesquisaBench.vue';
import ResultadosBench from './ResultadosBench.vue';
import HistoricoBench from './HistoricoBenchmark.vue';

export default {
    components : {
        PesquisaBench,
        ResultadosBench,
        HistoricoBench
    }    
}
</script>

<style>
</style>
