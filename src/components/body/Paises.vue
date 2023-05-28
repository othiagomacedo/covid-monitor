<template>
    <div class="paises-body">
        <h2>Países</h2>
        <PesquisaPais></PesquisaPais>
        <div class="row">
            <div class="col">
                <CardPaisSemPesquisa class = "card-pais"></CardPaisSemPesquisa>
            </div>
            <div class="col">
                <CardTablePaises></CardTablePaises>
            </div>
        </div>
    </div>
</template>

<script>
import PesquisaPais from '../pais/PesquisaPais.vue'
import CardPaisSemPesquisa from '../pais/CardPaisSemPesquisa.vue'
import CardTablePaises from '../pais/CardTablePaises.vue'
import api from '../../api/request/requests'

export default {

    components : {
        PesquisaPais,
        CardPaisSemPesquisa,
        CardTablePaises
    }    
}
</script>

<style>

</style>