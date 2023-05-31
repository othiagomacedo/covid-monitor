<template>
    <div>
        <div class="modal fade show" id="ModalAlerta" tabindex="-1" aria-labelledby="ModalAlertaLabel" aria-hidden="true"
            v-if="visibilidade" style="display: block;" aria-modal="true" role="dialog">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h2 class="modal-title fs-5" id="ModalAlertaLabel">{{ titulo }}</h2>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
                            @click="fecharModal"></button>
                    </div>
                    <div class="modal-body">
                        {{ mensagem }}
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary" data-bs-dismiss="modal" aria-label="Close"
                            @click="fecharModal">Ok</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal-overlay" v-if="visibilidade"></div>
    </div>
</template>
  
<script>
export default {

    data() {
        return {
            mensagem: '',
            titulo: '',
            visibilidade: false,
        }
    },


    methods: {

        abrirModal(tit, mens) {
            this.mensagem = mens;
            this.titulo = tit;
            this.visibilidade = true;
            console.log(`visibilidade do modal é ${this.visibilidade} e exibirei a mensagem "${mens}" `)
        },

        fecharModal() {
            this.visibilidade = false;
        }
    },

};
</script>

<style>
#ModalAlerta {
    background-color: transparent;
    transition: opacity 0.5s;
    z-index: 9999;
}

.modal-content {
    background-color: var(--color-background);
}

.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 9998;
}</style>