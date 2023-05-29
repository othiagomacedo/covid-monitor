<template>
    <div class="hist_bench">
        <div class="row">
            <h4 class="title_hist">Outros BenchMarks</h4>
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
                        </tr>
                    </thead>

                    <tbody>
                        <tr v-for="(item, index) in historico" :key="index">
                            <th scope="row">{{ item.id }}</th>
                            <td>{{ item.paisSigla }}</td>
                            <td>{{ item.dataInicial }}</td>
                            <td>{{ item.dataFinal }}</td>
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

</script>

<style>
.title_hist {
    text-align: center;
}

.table {
    margin-top: 2vh;
}
</style>