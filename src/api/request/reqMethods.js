import api from '../../api/request/requests';

export default {

methods: {
    // Request de Benchmarks
    obterBenchmark(nomebench, paisSigla1, paisSigla2, dataInicial, dataFinal) {
        var url = this.baseURL + "/api/bench/get/{paisSigla1}&{paisSigla2}/{dataInicial}&{dataFinal}/{nomebench}";

        url = url.replace('{nomebench}', nomebench);
        url = url.replace('{paisSigla1}', paisSigla1);
        url = url.replace('{paisSigla2}', paisSigla2);
        url = url.replace('{dataInicial}', dataInicial);
        url = url.replace('{dataFinal}', dataFinal);

        return this.obter(url);
    },

    obterBenchPeloID(id){
        var url = this.baseURL + "/api/bench/get/id={id}";
        url = url.replace('{id}', id);
        return this.obter(url);
    },

    obterTodosBenchmarks(){
        var url = this.baseURL + "/api/bench/get/all";
        return this.obter(url);
    },

    editarBenchmark(id,nomebench,paisSigla1, paisSigla2, dataInicial, dataFinal){
        var url = this.baseURL + "/api/bench/edit/{id}/{nomebench}/{paisSigla1}&{paisSigla2}/{dataInicial}&{dataFinal}";
        url = url.replace('{id}', id);
        url = url.replace('{nomebench}', nomebench);
        url = url.replace('{paisSigla1}', paisSigla1);
        url = url.replace('{paisSigla2}', paisSigla2);
        url = url.replace('{dataInicial}', dataInicial);
        url = url.replace('{dataFinal}', dataFinal);

        return this.editar(url);
    },

    deletarBenchPeloNome(nomeBench){
        var url = this.baseURL + "/api/bench/del/nome={nomebench}";
        url = url.replace('{nomebench}', nomeBench);
        return this.deletar(url);
    },

    deletarBenchPeloID(id){
        var url = this.baseURL + "/api/bench/del/id={id}";
        url = url.replace('{id}', id);
        return this.deletar(url);
    },

    //Requests de Historico Pais
    obterDadosByData(data,siglaPais){
        var url = this.baseURL + "/api/dados/total/{siglaPais}/{data}";
        url = url.replace('{data}', data);
        url = url.replace('{siglaPais}', siglaPais);
        return this.obter(url);
    },

    obterDadosPaisPorFaixaDatas(dataInicial,dataFinal,siglaPais){
        var url = this.baseURL + "/api/dados/totais/{siglaPais}/{dataInicial}&{dataFinal}";
        url = url.replace('{dataInicial}', dataInicial);
        url = url.replace('{dataFinal}', dataFinal);
        url = url.replace('{siglaPais}', siglaPais);
        return this.obter(url);
    },

    obterTodosHistoricoPaises(){
        var url = this.baseURL + "/api/dados/all";
        return this.obter(url);
    },

    //Requests de País
    obterTodosPaisesCadastrados(){
        var url = this.baseURL + "/api/pais";
        return this.obter(url);
    },

    obterPaisByNome(nome){
        var url = this.baseURL + "/api/pais/nome={nome}";
        url = url.replace('{nome}', nome);
        return this.obter(url);
    },

    obterPaisBySigla(sigla){
        var url = this.baseURL + "/api/pais/sigla={sigla}";
        url = url.replace('{sigla}', sigla);
        return this.obter(url);
    },

    // Request para a API
    obter(url) {
        try {
            const resp = api.get(url)
            console.log(resp.data);
            return resp;
        }catch (error) {
            console.error(error);
            return error;
        }
    },

    editar(url) {
        try {
            const resp = api.post(url)
            console.log(resp.data);
            return resp;
        }catch (error) {
            console.error(error);
            return error;
        }
    },

    deletar(url)  {
        try {
            const resp = api.delete(url)
            console.log(resp.data);
            return resp;
        }catch (error) {
            console.error(error);
            return error;
        }
    }  
}
}