<template>
    <h4>Histórico</h4>
    <div class="card" style="width: auto">
        <table class="table table-striped-columns">
            <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Sigla</th>
                    <th scope="col">Nome</th>
                    <th scope="col">Data</th>
                    <th scope="col">Opções</th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="(item, index) in listar" :key="index">
                    <th scope="row">{{ index + 1 }}</th>
                    <td>{{ item.sigla }}</td>
                    <td>{{ item.nome }}</td>
                    <td>{{ item.data }}</td>
                    <td></td>
                </tr>
            </tbody>

        </table>
    </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import api from '../../api/request/requests';

export default {

    setup() {
        console.log('Setup');
        const historico = ref([]);

        const listar = () => {
            console.log('Listar gerado');
            api.get('/dados/all')
                .then(response => {
                    console.log(response.data);
                    historico.value = response.data.results;
                })
                .catch(error => {
                    console.error(error);
                });
        };

        onMounted(listar);

        return { historico };
    }

}
</script>

<style></style>