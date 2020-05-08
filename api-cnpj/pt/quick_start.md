# Guias rápidos  

## Como autenticar na API Consulta CNPJ

As APIs disponibilizadas pela plataforma API SERPRO utilizam o protocolo OAuth2 para realizar a autenticação e autorização de acesso das APIs contratadas. Siga os passos abaixo para se autenticar e consumir a api CNPJ.  

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

De posse do Token de Acesso, faça a requisição a API CNPJ Trial. 

    curl -X GET "https://apigateway.serpro.gov.br/consulta-cnpj-trial/v1/cnpj/34238864000168" \
    -H "accept: application/json" \
    -H "Authorization: Bearer 4e1a1858bdd584fdc077fb7d80f39283" \

No exemplo acima foram utilizados os seguintes parâmetros:

* [HEADER] Accept: application/json  
Informamos o tipo de dados que estamos requerendo, nesse caso JSON

* [HEADER] Authorization: Bearer 4e1a1858bdd584fdc077fb7d80f39283  
Informamos o token de acesso recebido

* [GET] https://apigateway.serpro.gov.br/consulta-cnpj-trial/v1/cnpj/34238864000168  
Chamamos a url da API e o método desejado. No caso, a url base é "https://apigateway.serpro.gov.br/consulta-cnpj-df-trial/v1/”, e o método é o "cnpj/34238864000168".

Exemplo de resposta esperada:

    :::json
    {
    "ni": "34238864000168",
    "data_abertura": "1967-06-30",
    "nome_empresarial": "SERVICO DE E-COMERCE LTDA",
    "nome_fantasia": "E-COMERCE",
    "cnae_principal": {
        "codigo": "6204000",
        "descricao": "Consultoria em e-comerce"
    },
    "natureza_juridica": {
        "codigo": "2011",
        "descricao": "Empresa Pública"
    },
    "endereco": {
        "logradouro": "ST DE GRANDE AREA NORTE",
        "numero": "Q.601",
        "complemento": "LOTE V",
        "cep": "70836900",
        "bairro": "ASA NORTE",
        "municipio": "BRASILIA",
        "uf": "DF"
    },
    "situacao_especial": "",
    "situacao_cadastral": {
        "codigo": "1",
        "data": "2004-05-22",
        "motivo": ""
    },
    "orgao": "0110100",
    "tipo_estabelecimento": "1",
    "correio_eletronico": "",
    "capital_social": 0,
    "porte": "05",
    "telefones": [
        {
        "ddd": "061",
        "numero": "4338456"
        }
    ],
    "nome_orgao": "BRASILIA",
    "ente_federativo": "BR"
    }

!!! Warning "**IMPORTANTE**"
    A chamada à consulta da API CNPJ Trial acima é apenas para demonstração. As APIs disponíveis e suas respectivas URLs (endpoints) para consumo são disponibilizadas através da documentação dos seus respectivos swaggers.


## Como utilizar a API CNPJ Demonstração

API CNPJ Demonstração é o ambiente de testes da API CNPJ, com dados de exemplo (Mock), com objetivo de demonstrar o funcionamento da API. Para utilizá-lo:  

1. Acesse a [API CNPJ Demonstração](demonstracao.md)  
1. Escolha o método (endpoint) a testar
1. Clique em ***Try it Out***
1. Insira os cabeçalhos que desejar e/ou altere o conteúdo do corpo da requisição
1. Clique em ***Execute***

### Dados para testes

Para testar o ambiente Trial, utilize um dos CNPJ fictícios listados abaixo:

|  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CNPJ |
| ------------- | 
|  34238864000168  | 
|  54447820000155  | 
|  46768703000165  | 
|  31151791000184  | 
|  34428654000132  | 
|  06115832000130  | 
|  78078291000128  | 
|  52293473000128  | 
|  07781066000105  | 
|  60367129000164  | 