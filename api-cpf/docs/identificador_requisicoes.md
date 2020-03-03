# Identificador Opcional de Requisições

## Campo cabeçalho da requisição (X-Request-Tag)

Este campo é opcional na utilização das chamadas à API, e serve como identificador de requisições. Caso uma empresa necessite, por exemplo, agrupar a quantidade de requisições realizadas por cada departamento, poderá utilizar este campo de forma a identificar no faturamento a quantidade de requisições de cada item agrupador.

O campo é de texto livre (string até 32 caracteres) e não possui validação de seu conteúdo. Cabe, portanto, ao cliente manter o controle das informações que são enviadas para esse campo de forma que o relatório de faturamento faça o agrupamento adequado.

Este atributo pode ser usado pela entidade de classe e/ou grupo econômico na modalidade global com ônus entidade para fins de identificação do associado que realiza a requisição. No caso de entidades de classe ou grupos econômicos que realizem a contratação com ônus para o associado não é necessário realizar o agrupamento pois cada associado irá possuir sua própria chave de consumo.