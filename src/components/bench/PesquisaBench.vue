<template>
    <div class="row">
        <div class="col">
            <input type="text" class="form-control" placeholder="Sigla ou nome Primeiro País" aria-label="Primeiro País">
        </div>
        <div class="col">
            <input type="text" class="form-control" placeholder="Sigla ou nome Segundo País" aria-label="Segundo País">
        </div>
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
    </div>
    <div class="row">
        <div class="col">
            <a class="btn btn-primary" href="#" role="button">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search"
                    viewBox="0 0 16 16">
                    <path
                        d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
                Buscar Benchmark
            </a>
        </div>
    </div>
</template>

<script>

</script>

<style>
.row {
    padding-bottom: 2vh;
}
</style>