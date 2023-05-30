<template>
    <div class="modal-busca">
        <a type="button" class="btn" data-bs-toggle="modal" data-bs-target="#modalBuscaPais"
            data-bs-whatever="">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search"
                viewBox="0 0 16 16">
                <path
                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
            Buscar País
        </a>

        <div class="modal fade" id="modalBuscaPais" tabindex="-1" aria-labelledby="modalBuscaPaisLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="modalBuscaPaisLabel">Busca País</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="mb-3">
                                <label for="recipient-name" class="col-form-label"></label>
                                <input type="text" class="form-control" id="recipient-name"
                                    placeholder="Sigla do País. Ex: BRA">
                            </div>
                            <div class="mb-3">
                                <label for="recipient-name" class="col-form-label"></label>
                                <input type="text" class="form-control" id="recipient-name" placeholder="Nome do País">
                            </div>
                            <p class="rodape-msg">Para realizar a busca, basta apenas 1 campo preenchido</p>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                        <a type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#modalBuscaPais"
                            data-bs-whatever="@mdo">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-search" viewBox="0 0 16 16">
                                <path
                                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                            </svg>
                            Buscar
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

const modalBuscaPais = document.getElementById('modalBuscaPais')
if (modalBuscaPais) {
    modalBuscaPais.addEventListener('show.bs.modal', event => {
        
        const button = event.relatedTarget
        
        const recipient = button.getAttribute('data-bs-whatever')
        
        const modalTitle = modalBuscaPais.querySelector('.modal-title')
        const modalBodyInput = modalBuscaPais.querySelector('.modal-body input')

        modalTitle.textContent = `New message to ${recipient}`
        modalBodyInput.value = recipient
    })
}

</script>

<style>
.rodape-msg {
    font-style: italic;
    color: gray;
    font-size: small;
}
</style>