<template>
    <div class="row">
        <div class="col">
            <input type="text" class="form-control" placeholder="Sigla do País" aria-label="sigla" v-model="siglaPais">
        </div>
        <div class="col">
            <input type="text" class="form-control" placeholder="Nome do País" aria-label="nome" v-model="nomePais">
        </div>
    </div>
    <div class="row">
        <div class="col">
            <div class="input-group">
                <input type="text" class="form-control" placeholder="Data Inicial" data-provide="datepicker"
                    data-date-format="dd-mm-yyyy">
                <input type="text" class="form-control" placeholder="Data Final" data-provide="datepicker"
                    data-date-format="dd-mm-yyyy">
                <div class="input-group-addon">
                    <span class="glyphicon glyphicon-th"></span>
                </div>
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
    <p class="rodape-msg">Preencha Sigla e Datas, pois são obrigatórios</p>
</template>

<script>

export default {

    methods: {
        buscarPais() {
            const siglaPais = this.siglaPais; // obter valor do campo de entrada de sigla do país
            const nomePais = this.nomePais; // obter valor do campo de entrada de nome do país
            console.log("fui clicado - "+siglaPais+" - "+nomePais);
            if (siglaPais) {
                // Chamar o método para obter país por sigla
                requests.obterPaisBySigla(siglaPais)
                    .then(response => {
                        console.log(response.data);
                        // Faça o que for necessário com a resposta (por exemplo, atribuir a uma variável de dados do componente)
                    })
                    .catch(error => {
                        console.error(error);
                    });
            } else if (nomePais) {
                // Chamar o método para obter país por nome
                requests.obterPaisByNome(nomePais)
                    .then(response => {
                        console.log(response.data);
                        // Faça o que for necessário com a resposta (por exemplo, atribuir a uma variável de dados do componente)
                    })
                    .catch(error => {
                        console.error(error);
                    });
            } else {
                console.log("Preencha os campos de entrada");
            }
        }
    }

}
</script>

<style>
.row {
    padding-bottom: 2vh;
}
</style>