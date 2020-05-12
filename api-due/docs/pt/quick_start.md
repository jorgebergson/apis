# Guias rápidos  

## Como autenticar na API DUE

As APIs disponibilizadas pela plataforma API SERPRO utilizam o protocolo OAuth2 para realizar a autenticação e autorização de acesso das APIs contratadas. Siga os passos abaixo para se autenticar e consumir a api DUE.  

### 1. Primeiro passo - Obtenha Consumer Key e Consumer Secret  
Para consumir as APIs, você deverá utilizar os dois códigos (Consumer Key e Consumer Secret) disponibilizados na Área do Cliente. Esses códigos servem para identificar o contrato. As credenciais de acesso devem ser obtidas a partir da <a href="https://cliente.serpro.gov.br" target="_blank">área do cliente Serpro</a>. 

Exemplos de códigos:  

    :::text
    Consumer Key: djaR21PGoYp1iyK2n2ACOH9REdUb   
    Consumer Secret: ObRsAJWOL4fv2Tp27D1vd8fB3Ote

!!! Danger "Aviso importante"
    O Consumer Key e Consumer Secret identificam seu usuário e seu contrato com o SERPRO. Mantenha essas informações protegidas.

### 2. Segundo passo - Solicite o Bearer Token 
Para consultar as APIs, é necessário obter um token de acesso temporário (Bearer). Esse token possui um tempo de validade e sempre que expirado, este passo de requisição de um novo token de acesso deve ser repetido.

#### Como solicitar o Token de Acesso (Bearer)

Para solicitar o token temporário é necessário realizar uma requisição HTTP POST para o endpoint Token https://apigateway.serpro.gov.br/token, informando as credenciais de acesso (consumerKey:consumerSecret) no HTTP Header Authorization, no formato base64, conforme exemplo abaixo. 

    [HEAD] Authorization: Basic base64(Consumer Key:Consumer Secret) 
    [HEAD] Content-Type: application/x-www-form-urlencoded 
    [POST] grant_type=client_credentials

Para utilização no parâmetro *Authorization*, é necessário concatenar os códigos Consumer Key e Consumer Secret, separados pelo caracter ":", e converter o resultado em BASE64. 
No exemplo a seguir, é retornada a string *ZGphUjIx[...]IzT3RlCg*:

    :::shell
    echo -n "djaR21PGoYp1iyK2n2ACOH9REdUb:ObRsAJWOL4fv2Tp27D1vd8fB3Ote" | base64

Resultado:

    ZGphUjIxUEdvWXAxaXlLMm4yQUNPSDlSRWRVYjpPYlJzQUpXT0w0ZnYyVHAyN0QxdmQ4ZkIzT3RlCg

Abaixo segue um exemplo de chamada via cUrl:

    :::shell
    curl -k -d "grant_type=client_credentials" \
    -H "Authorization: Basic ZGphUjIxUEdvWXAxaXlLMm4yQUNPSDlSRWRVYjpPYlJzQUpXT0w0ZnYyVHAyN0QxdmQ4ZkIzT3RlCg" \
    https://apigateway.serpro.gov.br/token

!!! Information "**Content-type**"
    Caso experiencie erros de "415 Unsupported Media Type" na chamada de solicitação do Token, utilize o campo do Header "Content-Type" com o valor "application/x-www-form-urlencoded"

    [HEAD] Content-type: "application/x-www-form-urlencoded"

### 3. Terceiro passo - Receba o Token 
Como resultado do passo anterior, o endpoint informará o token de acesso a API, no campo access_token da mensagem json de retorno. Este token deve ser informado nos próximos passos.

#### Receba o Token

Como resultado, o endpoint informará o token de acesso a API, no campo access_token da mensagem json de retorno. Este token deve ser informado nos próximos passos.

    :::json
    {
        "scope": "am_application_scope default", 
        "token_type": "Bearer", 
        "expires_in": 3295, 
        "access_token": "c66a7def1c96f7008a0c397dc588b6d7"
    }

#### Renovação do Token de Acesso

Atentar que sempre que o token de acesso temporário expirar, o gateway vai retornar um HTTP CODE 401 após realizar uma requisição para uma API. Neste caso, deve ser repetido o Segundo Passo [Como solicitar o Token de Acesso (Bearer)](quick_start.md#2-segundo-passo-solicite-o-bearer-token) para geração de um novo token de acesso temporário.

### 4. Quarto passo - Fazendo uma requisição

#### Realizando consulta às APIs

De posse do Token de Acesso, faça a requisição a API DUE Trial. 

    curl -X GET "https://apigateway.serpro.gov.br/api-consulta-due-trial/api/v2/due/{numero]/{chave}"\
    -H "accept: application/json" \
    -H "Authorization: Bearer 4e1a1858bdd584fdc077fb7d80f39283" \

No exemplo acima foram utilizados os seguintes parâmetros:

* [HEADER] Accept: application/json  
Informamos o tipo de dados que estamos requerendo, nesse caso JSON

* [HEADER] Authorization: Bearer 4e1a1858bdd584fdc077fb7d80f39283  
Informamos o token de acesso recebido

* [GET] https://apigateway.serpro.gov.br/api-consulta-due-trial/api/v2/due/{numero]/{chave}

Chamamos a url da API e o método desejado. No caso, a url base é "https://apigateway.serpro.gov.br/api-consulta-due-trial/v2/”, e o método é o "due/{numero]/{chave}".

Exemplo de resposta esperada:

    :::json
    {
    "numero": "18BR0000133506",
    "ruc": "8BR00000000100000000000000000013602",
    "chaveDeAcesso": "18ERM135006",
    "situacao": "CARGA_APRESENTADA_PARA_DESPACHO",
    "canal": "null",
    "exigencia": "false",
    "retificada": "false",
    "tratamentoAdministrativo": "DISPENSADO",
    "tratamentoAdministrativoComImpedimentoDeEmbarque": "false",
    "tratamentoAdministrativoComRequerimentoDeInspecao": "false",
    "situacaoDaCarga": "null",
    "bloqueadaParaEmbarque": "false",
    "tipoDeDocumentoFiscal": "NOTA_FISCAL_ELETRONICA",
    "motivoDeDispensaDaNotaFiscal": "null",
    "declarante": {
        "nome": "OWMKX NX OIWUQD UW",
        "tipoDoDocumento": "CNPJ",
        "estrangeiro": "false",
        "nacionalidade": {
        "codigo": "105",
        "nome": "BRASIL",
        "nomeResumido": "BRA"
        },
        "numeroDoDocumento": "00000000000191"
    },
    "operadorEconomicoAutorizado": "false",
    "formaDeExportacao": "POR_CONTA_PROPRIA",
    "situacaoEspecial": "null",
    "exportacaoConsorciada": "false",
    "paisDoImportador": {
        "codigo": "676",
        "nome": "RUSSIA, FEDERACAO DA",
        "nomeResumido": "null"
    },
    "pesoLiquidoTotal": "49",
    "tratamentoPrioritario": "true",
    "valorTotalDasMercadorias": "3000",
    "moeda": {
        "codigo": "220",
        "descricao": "DOLAR DOS EUA"
    },
    "valorDasMercadoriasNoLocalDeEmbarque": "2000.1",
    "contato": {
        "nome": "null",
        "telefone": "null",
        "email": "null"
    },
    "localDeDespacho": {
        "unidadeRFB": {
        "codigo": "717600",
        "descricao": "PORTO DO RIO"
        },
        "recintoAduaneiro": {
        "codigo": "7929301",
        "descricao": "PORTO DO RIO DE JANEIRO - CODERJ - RIO DE JANEIRO/RJ - PORTO MARIT.ALFAND.-USO PUBLICO-CIA.DOCAS DO EST.DO RIO DE JANEIR",
        "latitude": "-20.812222",
        "longitude": "-40.248333"
        },
        "cnpjDoEstabelecimento": "null",
        "endereco": "null",
        "latitude": "null",
        "longitude": "null"
    },
    "localDeEmbarque": {
        "unidadeRFB": {
        "codigo": "717600",
        "descricao": "PORTO DO RIO"
        },
        "recintoAduaneiro": {
        "codigo": "7929301",
        "descricao": "PORTO DO RIO DE JANEIRO - CODERJ - RIO DE JANEIRO/RJ - PORTO MARIT.ALFAND.-USO PUBLICO-CIA.DOCAS DO EST.DO RIO DE JANEIR",
        "latitude": "-20.812222",
        "longitude": "-40.248333"
        },
        "cnpjDoEstabelecimento": "null",
        "endereco": "null",
        "latitude": "null",
        "longitude": "null"
    },
    "viaEspecialDeTransporte": "null",
    "usoObrigatorioDeTransito": "false",
    "informacoesComplementares": "Observações Gerais",
    "itens": [
        {
        "numero": "1",
        "exportador": {
            "nome": "OWMKX NX OIWUQD UW",
            "tipoDoDocumento": "CNPJ",
            "estrangeiro": "false",
            "nacionalidade": {
            "codigo": "105",
            "nome": "BRASIL",
            "nomeResumido": "BRA"
            },
            "numeroDoDocumento": "00000000002720"
        },
        "itemDaNotaFiscalDeExportacao": {
            "numeroDoItem": "1",
            "chaveDeAcesso": "35180500000000002720550900006843201000000009",
            "serie": "90",
            "numeroDoDocumento": "684320",
            "finalidade": "normal",
            "notaFiscalEletronica": "true",
            "cfop": "7101",
            "codigoDoProduto": "000000000000021600001"
        },
        "ncm": {
            "codigo": "12011000",
            "descricao": "SOJA, MESMO TRITURADA.",
            "UnidadeEstatistica": "UNIDADE",
            "atributos": [
            {
                "codigo": "001",
                "conteudo": "estampado",
                "descricao": "Tipo de tecido"
            }
            ]
        },
        "descricaoDaMercadoria": "PRODUTO GENERICO TESTE - GRADE COMPOSTA 34.",
        "motivoDoTratamentoPrioritario": "CARGA VIVA",
        "descricaoComplementar": "Descrição Complementar",
        "quantidadeNaUnidadeEstatistica": "1",
        "pesoLiquidoTotal": "49",
        "unidadeComercializada": "UN",
        "quantidadeNaUnidadeComercializada": "1",
        "valorTotal": "1000",
        "percentualDeComissaoDoAgente": "null",
        "condicaoDeVenda": {
            "codigo": "DDP",
            "descricao": "DELIVERED DUTY PAID"
        },
        "valorDaMercadoriaNaCondicaoDeVenda": "3000",
        "valorDaMercadoriaNoLocalDeEmbarque": "200,1",
        "valorDaMercadoriaNoLocalDeEmbarqueEmReais": "7143.55716",
        "dataDeConversao": "2018-05-01T05:57:00.000+0000",
        "importador": {
            "nome": "NF-E EMITIDA EM AMBIENTE DE HOMOLOGACAO - SEM VALOR FISCAL",
            "endereco": "RUA ELISA SILVERIO - 45 - CENTRO - EXTERIOR - 86800270 - RUSSIA",
            "pais": {
            "codigo": "676",
            "nome": "RUSSIA, FEDERACAO DA",
            "nomeResumido": "null"
            }
        },
        "depuracaoEstatistica": {
            "justificativaDeValor": "null",
            "justificativaDeQuantidade": "null",
            "possuiDepuracao": "false"
        },
        "enquadramentos": [
            {
            "codigo": "80000",
            "descricao": "EXPORTACAO NORMAL"
            }
        ],
        "paisesDeDestino": [
            {
            "pais": {
                "codigo": "249",
                "nome": "ESTADOS UNIDOS",
                "nomeResumido": "null"
            },
            "quantidadeNaUnidadeEstatistica": "1"
            }
        ],
        "tratamentosAdministrativos": [
            {
            "codigoLPCO": "null",
            "orgao": [
                "null"
            ],
            "situacao": "null",
            "mensagem": "null"
            }
        ]
        }
    ],
    "eventosDoHistorico": [
        {
        "dataEHoraDoEvento": "2018-05-02T07:07:47.002+0000",
        "evento": "Registro",
        "responsavel": "07073311703",
        "informacoesAdicionais": "null"
        }
    ]
    }

!!! Warning "**IMPORTANTE**"
    A chamada à consulta da API CNPJ Trial acima é apenas para demonstração. As APIs disponíveis e suas respectivas URLs (endpoints) para consumo são disponibilizadas através da documentação dos seus respectivos swaggers.


## Como utilizar a API DUE Demonstração

API DUE Demonstração é o ambiente de testes da API CNPJ, com dados de exemplo (Mock), com objetivo de demonstrar o funcionamento da API. Para utilizá-lo:  

1. Acesse a [API DUE Demonstração](demonstracao.md)  
1. Escolha o método (endpoint) a testar
1. Clique em ***Try it Out***
1. Insira os cabeçalhos que desejar e/ou altere o conteúdo do corpo da requisição
1. Clique em ***Execute***

### Dados para testes

Para testar o ambiente Trial, utilize um dos CNPJ fictícios listados abaixo:

|  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Número | Chave | Código HTTP |
| ------------- | ----------- | ------------- |
|  18BR0000151067  | 18NYJ151060 | 200 |
|  18BR000015106   | 18NYJ15106  | 400 |
|  17BR0000015111  | 17NYJ125811 | 404 |
