<template>
    <div class="row">
        <div class="col">
            <input type="text" class="form-control" placeholder="Sigla do País" aria-label="sigla" v-model="siglaPais"
                @input="handleInputSigla1" maxlength="3">
        </div>
        <div class="col">
            <input type="text" class="form-control" placeholder="Nome do País" aria-label="nome" v-model="nomePais">
        </div>
    </div>
    <div class="row">
        <div class="col">
            <div class="input-group">
                <Datepicker v-model="dataInicial" class="form-control" placeholder="Data Inicial" format="dd-MM-yyyy"
                    @input="updateDataInicial" :format="format"></Datepicker>

                <Datepicker v-model="dataFinal" class="form-control" placeholder="Data Final" format="dd-MM-yyyy"
                    @input="updateDataFinal" :format="format"></Datepicker>
            </div>
        </div>
        <div class="col">
            <a class="btn btn-primary" href="#" role="button" @click="buscarPais">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search"
                    viewBox="0 0 16 16">
                    <path
                        d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
                Buscar Dados do País
            </a>
        </div>

    </div>
    <p class="rodape-msg">Preencha Sigla e Datas, pois são obrigatórios para a busca</p>
</template>

<script>

import api from '../../api/request/requests';
import { ref } from 'vue';
import Datepicker from 'vue3-datepicker';
import { createRouter, createWebHistory } from 'vue-router';

export default {
    components: {
        Datepicker
    },

    data() {
        return {
            siglaPais: '',
            nomePais: '',
            dataInicial: '',
            dataFinal: '',
            format: 'dd-MM-yyyy',
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
            this.siglaPais = this.siglaPais.replace(/[^A-Za-z]/g, '').toUpperCase();
        },
        buscarPais() {
            console.log('Buscar Historico País');
            console.log(this.siglaPais);
            console.log(this.nomePais);
            let dataIniDia = this.dataInicial.getDate().toString().length < 2 ? '0' + this.dataInicial.getDate() : this.dataInicial.getDate();
            let dataIniMes = (this.dataInicial.getMonth() + 1).toString().length < 2 ? '0' + (this.dataInicial.getMonth() + 1) : (this.dataInicial.getMonth() + 1);
            let dataFimDia = this.dataFinal.getDate().toString().length < 2 ? '0' + this.dataFinal.getDate() : this.dataFinal.getDate();
            let dataFimMes = (this.dataFinal.getMonth() + 1).toString().length < 2 ? '0' + (this.dataFinal.getMonth() + 1) : (this.dataFinal.getMonth() + 1);
            let dataIni = this.dataInicial.getFullYear() + '-' + dataIniMes + '-' + dataIniDia;
            let dataFim = this.dataFinal.getFullYear() + '-' + dataFimMes + '-' + dataFimDia;
            console.log(dataIni);
            console.log(dataFim);
            console.log('requisição a api montada: /dados/totais/' + this.siglaPais + '/' + dataIni + '&' + dataFim);
            api.get('/dados/totais/' + this.siglaPais + '/' + dataIni + '&' + dataFim)
                .then(response => {
                    console.log(response.data);
                    this.$router.push({ name: 'BodyPais', params: { dados: response.data } });
                    console.log('redirecionando para BodyPais');
                })
                .catch(error => {
                    console.error(error);
                });

        }
    }

}
</script>

<style>
.row {
    padding-bottom: 2vh;
}
</style>