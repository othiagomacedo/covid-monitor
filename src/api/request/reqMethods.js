import axios, { AxiosInstance} from 'axios';

export default {

methods: {
    // Request de Benchmarks
    async obterBenchmark(nomebench, paisSigla1, paisSigla2, dataInicial, dataFinal) {
        var url = this.baseURL + "/api/bench/get/{paisSigla1}&{paisSigla2}/{dataInicial}&{dataFinal}/{nomebench}";

        url = url.replace('{nomebench}', nomebench);
        url = url.replace('{paisSigla1}', paisSigla1);
        url = url.replace('{paisSigla2}', paisSigla2);
        url = url.replace('{dataInicial}', dataInicial);
        url = url.replace('{dataFinal}', dataFinal);

        return this.obter(url);
    },

    async obterBenchPeloID(id){
        var url = this.baseURL + "/api/bench/get/id={id}";
        url = url.replace('{id}', id);
        return this.obter(url);
    },

    async obterTodosBenchmarks(){
        var url = this.baseURL + "/api/bench/get/all";
        return this.obter(url);
    },

    async editarBenchmark(id,nomebench,paisSigla1, paisSigla2, dataInicial, dataFinal){
        var url = this.baseURL + "/api/bench/edit/{id}/{nomebench}/{paisSigla1}&{paisSigla2}/{dataInicial}&{dataFinal}";
        url = url.replace('{id}', id);
        url = url.replace('{nomebench}', nomebench);
        url = url.replace('{paisSigla1}', paisSigla1);
        url = url.replace('{paisSigla2}', paisSigla2);
        url = url.replace('{dataInicial}', dataInicial);
        url = url.replace('{dataFinal}', dataFinal);

        return this.editar(url);
    },

    async deletarBenchPeloNome(nomeBench){
        var url = this.baseURL + "/api/bench/del/nome={nomebench}";
        url = url.replace('{nomebench}', nomeBench);
        return this.deletar(url);
    },

    async deletarBenchPeloID(id){
        var url = this.baseURL + "/api/bench/del/id={id}";
        url = url.replace('{id}', id);
        return this.deletar(url);
    },

    //Requests de Historico Pais
    async obterDadosByData(data,siglaPais){
        var url = this.baseURL + "/api/dados/total/{siglaPais}/{data}";
        url = url.replace('{data}', data);
        url = url.replace('{siglaPais}', siglaPais);
        return this.obter(url);
    },

    async obterDadosPaisPorFaixaDatas(dataInicial,dataFinal,siglaPais){
        var url = this.baseURL + "/api/dados/totais/{siglaPais}/{dataInicial}&{dataFinal}";
        url = url.replace('{dataInicial}', dataInicial);
        url = url.replace('{dataFinal}', dataFinal);
        url = url.replace('{siglaPais}', siglaPais);
        return this.obter(url);
    },

    async obterTodosHistoricoPaises(){
        var url = this.baseURL + "/api/dados/all";
        return this.obter(url);
    },

    //Requests de País
    async obterTodosPaisesCadastrados(){
        var url = this.baseURL + "/api/pais";
        return this.obter(url);
    },

    async obterPaisByNome(nome){
        var url = this.baseURL + "/api/pais/nome={nome}";
        url = url.replace('{nome}', nome);
        return this.obter(url);
    },

    async obterPaisBySigla(sigla){
        var url = this.baseURL + "/api/pais/sigla={sigla}";
        url = url.replace('{sigla}', sigla);
        return this.obter(url);
    },

    // Request para a API
    async obter(url) {
        try {
            const resp = await axios.get(url)
            console.log(resp.data);
            return resp;
        }catch (error) {
            console.error(error);
            return error;
        }
    },

    async editar(url) {
        try {
            const resp = await axios.post(url)
            console.log(resp.data);
            return resp;
        }catch (error) {
            console.error(error);
            return error;
        }
    },

    async deletar(url)  {
        try {
            const resp = await axios.delete(url)
            console.log(resp.data);
            return resp;
        }catch (error) {
            console.error(error);
            return error;
        }
    }  
}
}