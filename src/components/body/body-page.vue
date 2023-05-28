<template>
    <div class="body-page">
        <div>
            <!-- <button @click="mostrarModal" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#ModalAlerta">Mostrar Modal</button>
            <Modal :mensagem="mensagemModal" :titulo="tituloModal" /> -->

            <!-- <ModalRodape></ModalRodape> -->
        </div>

        <router-view></router-view>
    </div>
</template>

<script>
import Modal from '../modal/ModalAlerta.vue'
import ModalRodape from '../modal/ModalRodape.vue'

export default {

    components: {
        Modal,
        ModalRodape
    },
    data() {
        return {
            mensagemModal: '',
            tituloModal: ''
        };
    },
    methods: {
        mostrarModal(mens,title) {
            this.mensagemModal = mens; 
            this.tituloModal = title;
        },
        mostrarModalRodape(){
            
        }
    }
}

</script>

<style>
.body-page {
    background-color: var(--color-background);
    padding: 4vh;
}

</style>