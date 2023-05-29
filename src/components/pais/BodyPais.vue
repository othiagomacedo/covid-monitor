<template>
    <div class="row">
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
                <a class="btn btn-primary" role="button" @click="buscarPais">
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
    </div>


    <div class="row">

        <div class="col">
            <div class="card-body">
                <h4>Dados</h4>
                <div class="card" style="width: auto">
                    <div class="card-body">
                        <h4 class="card-title">{{ nomePais }}</h4>
                        <p class="card-title">Sigla: {{ sigla }}</p>
                        <p class="confirmados">Confirmados: {{ confirmados }}</p>
                        <p class="mortes">Mortes: {{ mortes }}</p>
                        <p class="recuperados">Recuperados: {{ recuperados }}</p>
                        <p class="data">Data: de {{ dataIni }} até {{ dataFim }}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="col">
            <h4>Histórico</h4>
            <div class="card" style="width: auto">
                <table class="table table-hover" id="tabela-historico">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col" class="centered">País</th>
                            <th scope="col" class="centered">Período</th>
                            <th scope="col">Confirmados</th>
                            <th scope="col">Mortes</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr v-for="(item, index) in historico" :key="index">
                            <th scope="row">{{ item.id }}</th>
                            <td class="centered">{{ item.paisSigla }}</td>
                            <td class="centered">{{ item.dataInicial }} - {{ item.dataFinal }}</td>
                            <td>{{ item.confirmados }}</td>
                            <td>{{ item.mortes }}</td>
                        </tr>
                    </tbody>

                </table>
            </div>
        </div>

    </div>
</template>

<script>

import { onMounted, ref } from 'vue';
import api from '../../api/request/requests';
import Datepicker from 'vue3-datepicker';

export default {

    components: {
        Datepicker
    },

    data() {
        return {
            siglaPais: '',
            nomePais: ' ',
            dataInicial: '',
            dataFinal: '',
            format: 'dd-MM-yyyy',
        }
    },

    setup() {

        const dataInicial = ref(new Date('2022-01-02'));
        const dataFinal = ref(new Date('2023-01-01'));
        const historico = ref([]);

        const listar = () => {
            console.log('Listar gerado');
            api.get('/dados/all')
                .then(response => {
                    console.log(response.data);
                    historico.value = response.data;
                })
                .catch(error => {
                    console.error(error);
                });
        };

        onMounted(listar);

        return {
            historico,
            dataInicial,
            dataFinal,
        };
    },

    methods: {
        
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

            //Obter os dados do país
            console.log('requisição a api montada: /dados/totais/' + this.siglaPais + '/' + dataIni + '&' + dataFim);
            api.get('/dados/totais/' + this.siglaPais + '/' + dataIni + '&' + dataFim)
                .then(response => {
                    
                    this.sigla = response.data.sigla;
                    this.confirmados = response.data.confirmados;
                    this.mortes = response.data.mortes;
                    this.recuperados = response.data.recuperados;
                    this.dataIni = dataIni;
                    this.dataFim = dataFim;

                    console.log(response.data);
                })
                .catch(error => {
                    console.error(error);
                });


            // this.listarTodos();

            // Obter o nome do país
            api.get(`/pais/sigla=${this.siglaPais}`)
                .then(resp => {
                    console.log(`/pais/sigla=${this.siglaPais} obteve ${resp.data.nome}`);
                    this.nomePais = resp.data.nome;
                }).catch(error => {
                    console.error(error);
                })
        },
        listarTodos() {
            console.log('Listar gerado em ListarTodos');
            api.get('/dados/all')
                .then(response => {
                    console.log(response.data);
                    this.historico.value = response.data;
                })
                .catch(error => {
                    console.error(error);
                });
        },
        handleInputSigla1() {
            this.siglaPais = this.siglaPais.replace(/[^A-Za-z]/g, '').toUpperCase();
        },
    }

}
</script>

<style>
#tabela-historico {
    font-size: 0.9rem;
}

.centered {
    text-align: center;
}
</style>