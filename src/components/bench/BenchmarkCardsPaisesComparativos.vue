<template>
    <div class="cards_comparativos">
        <div class="row">
            <div class="col">
                <CardPais :pais="{
                    nome: nomePais1,
                    sigla: sigla1,
                    confirmados: confirmados1,
                    mortes: mortes1,
                    recuperados: recuperados1
                }"></CardPais>
            </div>
            <div class="col">
                <CardPais :pais="{
                    nome: nomePais2,
                    sigla: sigla2,
                    confirmados: confirmados2,
                    mortes: mortes2,
                    recuperados: recuperados2
                }"></CardPais>
            </div>
        </div>
    </div>
</template>

<script>
import CardPais from '../pais/CardPais.vue'
import { onMounted, onUnmounted, ref } from 'vue/dist/vue.runtime.esm-bundler.js';


export default {
    props: ['nomePais1',
            'sigla1',
            'confirmados1',
            'mortes1',
            'recuperados1',
            'nomePais2',
            'sigla2',
            'confirmados2',
            'mortes2',
            'recuperados2'],

    components: { CardPais },

    setup() {

    },

    mounted() {
        console.log(nomePais1)
    },


    methods: {
        atualizarDadosBench(data) {
            // Atualizar as propriedades com os dados recebidos da API
            this.nomePais1 = data.nomePais1;
            this.sigla1 = data.sigla1;
            this.confirmados1 = data.confirmados1;
            this.mortes1 = data.mortes1;
            this.recuperados1 = data.recuperados1;

            this.nomePais2 = data.nomePais2;
            this.sigla2 = data.sigla2;
            this.confirmados2 = data.confirmados2;
            this.mortes2 = data.mortes2;
            this.recuperados2 = data.recuperados2;
        }
    }
}

</script>

<style></style>