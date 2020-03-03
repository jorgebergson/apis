# Campos retornados pela API Consulta Massiva CPF

## Tipos de Campos Retornados

| Tipos de campos | Valor de retorno |
| ---------------------- | :------------------------------------------------------------- |
| NI        | Número de Inscrição no Cadastro de Pessoa Física, no formato 99999999999 |
| Nome     | Nome da Pessoa Física  |
| Situação | Situação Cadastral da Pessoa Física, formada por dois campos: Código e Descrição.|
| Situação/Código | Código da Situação Cadastral da Pessoa Física |
| Situação/Descrição | Descrição da Situação Cadastral da Pessoa Física |


## Tipos de Situação Cadastral Retornados

| Código | Descrição |
| ---------------------- | :------------------------------------------------------------- |
| 0 | Regular |
| 2 | Suspensa  |
| 3 | Titular Falecido  |
| 4 | Pendente de Regularização |
| 5 | Cancelada por Multiplicidade |
| 8 | Nula |
| 9 | Cancelada de Ofício |