<template>
    <div class="hist_bench">
        <ModalAlerta ref="modalAlerta"/>
        <div class="row">
            <div class="col">
                <h2 class="title_hist">Outros BenchMarks</h2>
            </div>
        </div>
        <div class="row">
                <div class="buttons_lista">
                    <a type="button" class="btn btn-success" @click="getHistorico">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z" />
                            <path
                                d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
                        </svg>Atualizar
                    </a>

                    <a type="button" class="btn btn-danger" id="excluirIdBench" @click="deletarBench">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-trash3" viewBox="0 0 16 16">
                            <path
                                d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                        </svg>Excluir
                    </a>

                    <input type="number" class="form-control" id="inputExcluir" placeholder="Id" aria-label="Primeiro País"
                        v-model="idBench"  >
                </div>
            </div>
        <div class="row">

            <div class="col">
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">País</th>
                            <th scope="col">País</th>
                            <th scope="col">Confirmados</th>
                            <th scope="col">Mortes</th>
                            <th scope="col">Recuperados</th>
                            <th scope="col">Data Inicial</th>
                            <th scope="col">Data Final</th>
                            <th scope="col">Data Benchmark</th>
                            <th scope="col">Benchmark</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr v-for="(item, index) in historico" :key="index">
                            <th scope="row">{{ item.id }}</th>
                            <td>{{ item.historicoPais1.paisSigla }}</td>
                            <td>{{ item.historicoPais2.paisSigla }}</td>
                            <td>{{ item.historicoPais1.confirmados + item.historicoPais2.confirmados  }}</td>
                            <td>{{ item.historicoPais1.mortes + item.historicoPais2.mortes  }}</td>
                            <td>{{ item.historicoPais1.recuperados + item.historicoPais2.recuperados  }}</td>
                            <td>{{ item.dataIncial }}</td>
                            <td>{{ item.dataFinal }}</td>
                            <td>{{ item.dataHistorico }}</td>
                            <td>{{ item.nomeHistorico }}</td>
                        </tr>
                    </tbody>

                </table>
            </div>
        </div>
        
    </div>
</template>

<script>
import api from '../../api/request/requests';
import ModalAlerta from '../modal/ModalAlerta.vue';

export default {

    components: {
        ModalAlerta
    },

    props: ['atualizar'],

    data() {
        return {
            mostrarModal: false,
            historico: [],
            idBench: 0,
        }
    },
    mounted() {
        this.getHistorico();
    },
    methods: {
        getHistorico() {
            console.log('Vou solicitar o historico de Benchmarks da API');
            api.get('/bench/get/all')
                .then(response => {
                    console.log(response.data);
                    if(response.data.length == 0){
                        this.$refs.modalAlerta.abrirModal('Ops...', `Lista de Benchmarks está vazia!\nPor favor busque por um Benchmark`);
                    }
                    this.historico = response.data;
                })
                .catch(error => {
                    console.error(error);
                    this.$refs.modalAlerta.abrirModal('Ops...', `Não obtive uma lista de Benchmarks.\n${error.response.data}`);
                })
        },
        deletarBench() {
            api.delete(`/bench/del/id=${this.idBench}`)
                .then(response => {
                    console.log(response);
                    this.getHistorico();
                    this.$refs.modalAlerta.abrirModal('Sucesso', `${response.data}`);
                    // this.$root.$emit('open-modal');
                })
                .catch(error => {
                    this.$refs.modalAlerta.abrirModal('Erro', `Ocorreu um erro ao tentar excluir benchmark de id ${this.idBench} \n${error.response.data}`);
                    this.mensagemErros(error);
                    console.log(error);
                })
        },

        mensagemErros(error){
            codigo = error.response.status;
            mensagem = '';

            if(codigo == 500){
                mensagem = 'Erro interno do servidor';    
            }
            if (codigo == 400){
                mensagem = `Erro ao tentar executar a ação.\n${error.response.data}`;
            }
            if (codigo == 204){
                mensagem = 'Nenhum dado encontrado';
            }
            console.log('Ops...', `${mensagem}`);
            this.$refs.modalAlerta.abrirModal('Ops...', `${mensagem}`);
        }
    }
}

</script>

<style>
.title_hist {
    text-align: center;
}

.table {
    margin-top: 2vh;
}

.buttons_lista {
    display: flex;
    align-items: center;
}

#excluirIdBench {
    margin-left: 1vw;
}

#inputExcluir {
    width: 9vw;
    margin-left: 1vw;
}
</style>