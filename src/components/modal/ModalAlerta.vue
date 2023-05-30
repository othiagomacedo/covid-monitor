<template>
    <modal>
        <div class="modal fade" id="ModalAlerta" tabindex="-1" aria-labelledby="ModalAlertaLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="ModalAlertaLabel">{{titulo}}</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        {{ mensagem }}
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary">Ok</button>
                    </div>
                </div>
            </div>
        </div>

    </modal>
</template>
  
<script>
export default {
    props: {
        mensagem: {
            type: String,
            required: true
        },
        titulo: {
            type: String,
            required: true
        }
    }
};
</script>

<style>
#ModalAlerta{
    background-color: transparent;
}

.modal-content{
    background-color: var(--color-background);
}
</style>