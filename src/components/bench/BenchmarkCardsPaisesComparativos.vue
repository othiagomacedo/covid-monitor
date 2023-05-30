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
    // props: {
    //     //Pais 1
    //     nomePais1: String,
    //     sigla1: String,
    //     confirmados1: Number,
    //     mortes1: Number,
    //     recuperados1: Number,

    //     //Pais 2
    //     nomePais2: String,
    //     sigla2: String,
    //     confirmados2: Number,
    //     mortes2: Number,
    //     recuperados2: Number,
    // },

    setup() {

        // const nomePais1 = ref(props.nomePais1);
        // const sigla1 = ref(props.sigla1);
        // const confirmados1 = ref(props.confirmados1);
        // const mortes1 = ref(props.mortes1);
        // const recuperados1 = ref(props.recuperados1);

        // const nomePais2 = ref(props.nomePais2);
        // const sigla2 = ref(props.sigla2);
        // const confirmados2 = ref(props.confirmados2);
        // const mortes2 = ref(props.mortes2);
        // const recuperados2 = ref(props.recuperados2);

        // const atualizarDadosBench = (data) => {
        //     nomePais1.value = data.nomePais1;
        //     sigla1.value = data.sigla1;
        //     confirmados1.value = data.confirmados1;
        //     mortes1.value = data.mortes1;
        //     recuperados1.value = data.recuperados1;

        //     nomePais2.value = data.nomePais2;
        //     sigla2.value = data.sigla2;
        //     confirmados2.value = data.confirmados2;
        //     mortes2.value = data.mortes2;
        //     recuperados2.value = data.recuperados2;
        // };


        // onMounted(() => {
        //     document.addEventListener('dados-bench-atualizados', atualizarDadosBench);
        // });

        // onUnmounted(() => {
        //     document.removeEventListener(
        //         'dados-bench-atualizados',
        //         atualizarDadosBench
        //     );
        // });

        // return {
        //     nomePais1,
        //     sigla1,
        //     confirmados1,
        //     mortes1,
        //     recuperados1,
        //     nomePais2,
        //     sigla2,
        //     confirmados2,
        //     mortes2,
        //     recuperados2,
        // };

        //
        const propriedade = defineProps({
            nomePais1: String,
            sigla1: String,
            confirmados1: Number,
            mortes1: Number,
            recuperados1: Number,

            //Pais 2
            nomePais2: String,
            sigla2: String,
            confirmados2: Number,
            mortes2: Number,
            recuperados2: Number,
        });
    },


    components: {
        CardPais
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