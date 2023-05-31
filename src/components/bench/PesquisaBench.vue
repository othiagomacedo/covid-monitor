<template>
    <div class="src_bench">
        <ModalAlerta ref="modalAlerta" />
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
                <div class="input-group" id="grupo-Data-Selecionar">
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
            <div class="col" id="pesqBenchBotoes">

                <a class="btn btn-primary" role="button" @click="buscarBench">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search"
                        viewBox="0 0 16 16">
                        <path
                            d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                    Buscar e Salvar
                </a>

                <a class="btn btn-warning" id="excluirBtn" role="button" @click="editarBench" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil"
                        viewBox="0 0 16 16">
                        <path
                            d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                    </svg>
                    Editar
                </a>

                <a class="btn btn-danger" id="excluirBtn" role="button" @click="excluirBench">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3"
                        viewBox="0 0 16 16">
                        <path
                            d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                    </svg>
                    Excluir
                </a>

            </div>
        </div>

        <div class="row">
            <div class="cards_comparativos">
                <div class="row">
                    <div class="col">
                        <div class="idExibir">
                            <h4>Id: {{ id }}</h4>
                        </div>
                    </div>
                    <div class="col">
                        <div class="spinner-border text-primary" role="status" v-if="displayCarregar">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <CardPais :nomePais="nomePaisUm" :sigla="siglaUm" :confirmados="confirmadosUm" :mortes="mortesUm"
                            :recuperados="recuperadosUm"></CardPais>
                    </div>
                    <div class="col">
                        <CardPais :nomePais="nomePaisDois" :sigla="siglaDois" :confirmados="confirmadosDois"
                            :mortes="mortesDois" :recuperados="recuperadosDois"></CardPais>
                    </div>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col">
                <ResultadosBench :totConfirmados="totConfirmados" :totMortes="totMortes" :totRecuperados="totRecuperados"
                    :difConfirmados="difConfirmados" :difMortes="difMortes" :difRecuperados="difRecuperados">
                </ResultadosBench>
            </div>
        </div>

    </div>
</template>

<script>

import api from '../../api/request/requests';
import { ref } from 'vue';
import Datepicker from 'vue3-datepicker';
import CardPais from '../pais/CardPais.vue';
import ResultadosBench from './ResultadosBench.vue';
import ModalAlerta from '../modal/ModalAlerta.vue';

export default {
    components: {
        Datepicker,
        CardPais,
        ResultadosBench,
        ModalAlerta
    },

    data() {
        return {
            id: 0,
            nomeBench: '',
            siglaPrimeiroPais: '',
            siglaSegundoPais: '',
            dataInicial: '',
            dataFinal: '',

            nomePaisUm: '',
            siglaUm: '',
            confirmadosUm: null,
            mortesUm: null,
            recuperadosUm: null,

            nomePaisDois: '',
            siglaDois: '',
            confirmadosDois: null,
            mortesDois: null,
            recuperadosDois: null,

            totConfirmados: 0,
            totMortes: 0,
            totRecuperados: 0,

            difConfirmados: 0,
            difMortes: 0,
            difRecuperados: 0,

            displayCarregar: false,

            dataIni: '',
            dataFim: '',
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
        formatNomeBench() {
            this.nomeBench = this.nomeBench.replace(' ', '-');
        },
        buscarBench() {

            this.$refs.modalAlerta.abrirModal('Buscando...', `Aguarde a busca finalizar`);

            this.displayCarregar = true;

            this.configurarData();

            console.log('Buscando Benchmark');
            console.log(`Vou realizar a request /bench/get/${this.siglaPrimeiroPais}&${this.siglaSegundoPais}/${this.dataIni}&${this.dataFim}/${this.nomeBench}`)
            api.get(`/bench/get/${this.siglaPrimeiroPais}&${this.siglaSegundoPais}/${this.dataIni}&${this.dataFim}/${this.nomeBench}`)
                .then((response) => {
                    this.$refs.modalAlerta.fecharModal();
                    console.log(response.data);

                    this.id = response.data.id;
                    this.nomePaisUm = response.data.dadosPais1.nomePais;
                    this.siglaUm = response.data.dadosPais1.sigla;
                    this.confirmadosUm = response.data.dadosPais1.confirmados;
                    this.mortesUm = response.data.dadosPais1.mortes;
                    this.recuperadosUm = response.data.dadosPais1.recuperados;

                    this.nomePaisDois = response.data.dadosPais2.nomePais;
                    this.siglaDois = response.data.dadosPais2.sigla;
                    this.confirmadosDois = response.data.dadosPais2.confirmados;
                    this.mortesDois = response.data.dadosPais2.mortes;
                    this.recuperadosDois = response.data.dadosPais2.recuperados;

                    this.totConfirmados = response.data.confirmadosTotal;
                    this.totMortes = response.data.mortesTotal;
                    this.totRecuperados = response.data.recuperadosTotal;

                    this.difConfirmados = response.data.confirmadosDiferenca;
                    this.difMortes = response.data.mortesDiferenca;
                    this.difRecuperados = response.data.recuperadosDiferenca;

                    this.$refs.modalAlerta.abrirModal('Sucesso', `Benchmark de ID ${response.data.id} foi gerado/buscado`);
                })
                .catch((error) => {
                    console.log(error);
                    this.$refs.modalAlerta.abrirModal('Ops...', `${error.response.data}`);
                });

            this.displayCarregar = false;
        },

        excluirBench() {
            console.log('Nome do Benchmark a ser excluido:', this.nomeBench);

            console.log('Excluindo Benchmark');
            api.delete(`/bench/del/nome=${this.nomeBench}`)
                .then((response) => {
                    console.log(response.data);
                    this.$refs.modalAlerta.abrirModal('Sucesso', `${response.data}`);
                })
                .catch((error) => {
                    console.log(error);
                    this.$refs.modalAlerta.abrirModal('Ops...', `Ocorreu um erro ao tentar excluir.\n${error.response.data}`);
                });
        },

        editarBench() {
            this.configurarData();

            console.log('Vou editar a Benchmark');
            console.log(`Vou realizar a request /bench/${this.id}/${this.siglaPrimeiroPais}&${this.siglaSegundoPais}/${this.dataIni}&${this.dataFim}/${this.nomeBench}`)
            try {
                api.post(`/bench/edit/${this.id}/${this.siglaPrimeiroPais}&${this.siglaSegundoPais}/${this.dataIni}&${this.dataFim}/${this.nomeBench}`)
                .then((response) => {
                    console.log(response.data);

                    let mensagemResp = '';
                    if (response.data.foiEditado == true){
                        mensagemResp = 'Benchmark editado com sucesso!';
                    } else {
                        mensagemResp = response.data.mensagem;
                    }
                    this.$refs.modalAlerta.abrirModal('Sucesso', `${mensagemResp}`);
                })
                .catch((error) => {
                    console.log(error);
                    this.$refs.modalAlerta.abrirModal('Ops...', `Ocorreu um erro ao tentar editar.\n${error}`);
                });
            } catch (error) {
                if (error.code == "ERR_NETWORK"){
                    this.$refs.modalAlerta.abrirModal('Ops...', `Falta preencher algum campo... Verifique por favor`);
                } else {
                    this.$refs.modalAlerta.abrirModal('Ops...', `Ocorreu um erro ao tentar editar.\n${error}`);
                }
                
            }
        },

        configurarData(){
            let dataIniDia = this.dataInicial.getDate().toString().length < 2 ? '0' + this.dataInicial.getDate() : this.dataInicial.getDate();
            let dataIniMes = (this.dataInicial.getMonth() + 1).toString().length < 2 ? '0' + (this.dataInicial.getMonth() + 1) : (this.dataInicial.getMonth() + 1);
            let dataFimDia = this.dataFinal.getDate().toString().length < 2 ? '0' + this.dataFinal.getDate() : this.dataFinal.getDate();
            let dataFimMes = (this.dataFinal.getMonth() + 1).toString().length < 2 ? '0' + (this.dataFinal.getMonth() + 1) : (this.dataFinal.getMonth() + 1);
            this.dataIni = this.dataInicial.getFullYear() + '-' + dataIniMes + '-' + dataIniDia;
            this.dataFim = this.dataFinal.getFullYear() + '-' + dataFimMes + '-' + dataFimDia;
        },

    }
}

</script>

<style>
.row {
    padding-bottom: 3vh;
}

.idExibir {
    color: var(--color-text-dark);
}

#excluirBtn {
    margin-left: 1vw;
}

#pesqBenchBotoes {
    display: flex;
}

#grupo-Data-Selecionar {
    display: flex;
    align-items: left;
    justify-content: space-between;
}
</style>