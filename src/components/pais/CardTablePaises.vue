<template>
    <h4>Histórico</h4>
    <div class="card" style="width: auto">
        <table class="table table-hover">
            <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">País</th>
                    <th scope="col">Data Inicial</th>
                    <th scope="col">Data Final</th>
                    <th scope="col">Confirmados</th>
                    <th scope="col">Mortes</th>
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
                    historico.value = response.data;
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