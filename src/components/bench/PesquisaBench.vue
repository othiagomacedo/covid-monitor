<template>
    <div class="src_bench">
        <div class="row">
            <div class="col">
                <input type="text" class="form-control" placeholder="Sigla do Primeiro País" aria-label="Primeiro País"
                    v-model="siglaPrimeiroPais" @input="handleInputSigla1" maxlength="3">
            </div>
            <div class="col">
                <input type="text" class="form-control" placeholder="Sigla do Segundo País" aria-label="Segundo País"
                    v-model="siglaSegundoPais" @input="handleInputSigla2" maxlength="3">
            </div>
            <div class="col-6">
                <div class="input-group">
                    <Datepicker v-model="dataInicial" class="form-control" placeholder="Data Inicial" format="dd-MM-yyyy"
                        @input="updateDataInicial" :format="format"></Datepicker>

                    <Datepicker v-model="dataFinal" class="form-control" placeholder="Data Final" format="dd-MM-yyyy"
                        @input="updateDataFinal" :format="format"></Datepicker>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <input type="text" class="form-control" placeholder="Nome do Benchmark" aria-label="Nome Bench"
                    v-model="nomeBench" @input="formatNomeBench()">
            </div>
            <div class="col">
                <a class="btn btn-primary" role="button" @click="buscarBench">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search"
                        viewBox="0 0 16 16">
                        <path
                            d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                    Buscar Benchmark
                </a>

                <a class="btn btn-danger" id="excluirBtn" role="button" @click="excluirBench">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search"
                        viewBox="0 0 16 16">
                        <path
                            d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                    Excluir
                </a>
            </div>
        </div>
    </div>
</template>

<script>

import api from '../../api/request/requests';
import { ref } from 'vue';
import Datepicker from 'vue3-datepicker';

export default {
    components: {
        Datepicker
    },
    data() {
        return {
            nomeBench: '',
            siglaPrimeiroPais: '',
            siglaSegundoPais: '',
            dataInicial: '',
            dataFinal: '',
        }
    },

    setup() {
        const dataInicial = ref(new Date('2022-01-02'));
        const dataFinal = ref(new Date('2023-01-01'));
        return {
            dataInicial,
            dataFinal,
        };
    },

    methods: {
        handleInputSigla1() {
            this.siglaPrimeiroPais = this.siglaPrimeiroPais.replace(/[^A-Za-z]/g, '').toUpperCase();
        },
        handleInputSigla2() {
            this.siglaSegundoPais = this.siglaSegundoPais.replace(/[^A-Za-z]/g, '').toUpperCase();
        },
        formatNomeBench(){
            this.nomeBench = this.nomeBench.replace(' ', '-').toUpperCase();
        },
        buscarBench() {

            console.log('Sigla do Primeiro País:', this.siglaPrimeiroPais);
            console.log('Sigla do Segundo País:', this.siglaSegundoPais);
            console.log('Data Inicial:', this.dataInicial);
            console.log('Data Final:', this.dataFinal);
            console.log('Nome do Benchmark:', this.nomeBench);

            let dataIniDia = this.dataInicial.getDate().toString().length < 2 ? '0' + this.dataInicial.getDate() : this.dataInicial.getDate();
            let dataIniMes = (this.dataInicial.getMonth() + 1).toString().length < 2 ? '0' + (this.dataInicial.getMonth() + 1) : (this.dataInicial.getMonth() + 1);
            let dataFimDia = this.dataFinal.getDate().toString().length < 2 ? '0' + this.dataFinal.getDate() : this.dataFinal.getDate();
            let dataFimMes = (this.dataFinal.getMonth() + 1).toString().length < 2 ? '0' + (this.dataFinal.getMonth() + 1) : (this.dataFinal.getMonth() + 1);
            let dataIni = this.dataInicial.getFullYear() + '-' + dataIniMes + '-' + dataIniDia;
            let dataFim = this.dataFinal.getFullYear() + '-' + dataFimMes + '-' + dataFimDia;

            console.log('Buscando Benchmark');
            console.log(`/bench/get/${this.siglaPrimeiroPais}&${this.siglaSegundoPais}/${dataIni}&${dataFim}/${this.nomeBench}`)
            api.get(`/bench/get/${this.siglaPrimeiroPais}&${this.siglaSegundoPais}/${dataIni}&${dataFim}/${this.nomeBench}`)
                .then((response) => {
                    console.log(response.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        },

        excluirBench() {
            console.log('Nome do Benchmark a ser excluido:', this.nomeBench);

            console.log('Excluindo Benchmark');
            api.delete(`/bench/del/nome=${this.nomeBench}`)
                .then((response) => {
                    console.log(response.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }
}

</script>

<style>
.row {
    padding-bottom: 2vh;
}

#excluirBtn {
    margin-left: 1vw;
}
</style>