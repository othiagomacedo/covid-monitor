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
        
    </div>
</template>

<script>
import CardPais from '../pais/CardPais.vue'
import PesquisaBench from '../bench/PesquisaBench.vue';

export default {
    components : {
        PesquisaBench,
        CardPais
    }    
}
</script>

<style>
</style>
