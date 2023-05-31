<template>
    <div class="benchmark-body">
        <h2>Benchmark</h2>
        
        <PesquisaBench></PesquisaBench>
        
    </div>
</template>

<script>
import PesquisaBench from './PesquisaBench.vue';
import ResultadosBench from './ResultadosBench.vue';

export default {
    components : {
        PesquisaBench,
        ResultadosBench,
    }    
}
</script>

<style>
</style>
