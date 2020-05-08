# Quick Guides

## How to authenticate in the CNPJ Consultation API

The APIs made available by the API SERPRO platform use the OAuth2 protocol to perform the authentication and access authorization of the contracted APIs. Follow the steps below to authenticate and consume the CNPJ api.

### 1. Step One - Get Consumer Key e Consumer Secret  
To consume the APIs, you must use both codes (Consumer Key e Consumer Secret) available in the Client Area. These codes are used to identify the contract. Access credentials must be obtained from the <a href="https://cliente.serpro.gov.br" target="_blank">Serpro customer area.</a>. 

Code examples: 

    :::text
    Consumer Key: djaR21PGoYp1iyK2n2ACOH9REdUb   
    Consumer Secret: ObRsAJWOL4fv2Tp27D1vd8fB3Ote

!!! Danger "Important warning"
    Consumer Key and Consumer Secret identify their user and their contract with SERPRO. Keep this information protected.

### 2. Second step - Request the Bearer Token
To consult the APIs, it is necessary to obtain a temporary access token (Bearer). This token has an expiration time and whenever it expires, this step of requesting a new access token must be repeated.

#### How to request the Access Token (Bearer)

To request the temporary token it is necessary to make an HTTP POST request to the Token endpoint https://apigateway.serpro.gov.br/token, informing the access credentials (consumerKey: consumerSecret) in HTTP Header Authorization, in base64 format, as shown below.

    [HEAD] Authorization: Basic base64(Consumer Key:Consumer Secret) 
    [HEAD] Content-Type: application/x-www-form-urlencoded 
    [POST] grant_type=client_credentials

For use in the * Authorization * parameter, it is necessary to concatenate the Consumer Key and Consumer Secret codes, separated by the character ":", and convert the result to BASE64. 
In the following example, the string is returned *ZGphUjIx[...]IzT3RlCg*:

    :::shell
    echo -n "djaR21PGoYp1iyK2n2ACOH9REdUb:ObRsAJWOL4fv2Tp27D1vd8fB3Ote" | base64

Result:

    ZGphUjIxUEdvWXAxaXlLMm4yQUNPSDlSRWRVYjpPYlJzQUpXT0w0ZnYyVHAyN0QxdmQ4ZkIzT3RlCg

Below is an example of a call via cUrl:

    :::shell
    curl -k -d "grant_type=client_credentials" \
    -H "Authorization: Basic ZGphUjIxUEdvWXAxaXlLMm4yQUNPSDlSRWRVYjpPYlJzQUpXT0w0ZnYyVHAyN0QxdmQ4ZkIzT3RlCg" \
    https://apigateway.serpro.gov.br/token

!!! Information "**Content-type**" 
    If you experience errors"415 Unsupported Media Type" in the Token request call, use the "Content-Type" Header field with the value "application/x-www-form-urlencoded"

    [HEAD] Content-type: "application/x-www-form-urlencoded"

### 3. Third step - Receive the Token
As a result of the previous step, the endpoint will inform the API access token, in the access_token field of the return json message. This token must be informed in the next steps.

#### Receive the Token

As a result, the endpoint will inform the API access token, in the access_token field of the return json message. This token must be informed in the next steps.

    :::json
    {
        "scope": "am_application_scope default", 
        "token_type": "Bearer", 
        "expires_in": 3295, 
        "access_token": "c66a7def1c96f7008a0c397dc588b6d7"
    }

#### Access Token Renewal

Note that whenever the temporary access token expires, the gateway will return an HTTP CODE 401 after making a request to an API. In this case, the Second Step must be repeated [How to request the Access Token (Bearer)](quick_start.md#2-segundo-passo-solicite-o-bearer-token) to generate a new temporary access token.

### 4. Step four - Making a request

#### Querying the APIs

In possession of the Access Token, make the request to the CNPJ Trial API.

    curl -X GET "https://apigateway.serpro.gov.br/consulta-cnpj-trial/v1/cnpj/34238864000168" \
    -H "accept: application/json" \
    -H "Authorization: Bearer 4e1a1858bdd584fdc077fb7d80f39283" \

In the example above, the following parameters were used:

* [HEADER] Accept: application/json  
We inform the type of data we are requesting, in this case JSON

* [HEADER] Authorization: Bearer 4e1a1858bdd584fdc077fb7d80f39283  
We inform the access token received

* [GET] https://apigateway.serpro.gov.br/consulta-cnpj-trial/v1/cnpj/34238864000168  
We call the API url and the desired method. In this case, the base url is "https://apigateway.serpro.gov.br/consulta-cnpj-df-trial/v1/”, and the method is the "cnpj/34238864000168".

Example of expected response:

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

!!! Warning "**IMPORTANT**"    
    The above API CNPJ Consult query is for demonstration purposes only. The available APIs and their respective URLs (endpoints) for consumption are made available through the documentation of their respective swaggers.


## How to use the CNPJ Demo API

API CNPJ Demo is the testing environment of the CNPJ API, with sample data (Mock), in order to demonstrate the API's operation. To use it:  

1. Access the [CNPJ Demo API](demonstracao.md)  
1. Choose the method (endpoint) to test
1. click in ***Try it Out***
1. Insert the headings you want and/or change the content of the request body
1. click in ***Execute***

### Test data

To test the Trial environment, use one of the fictional CNPJ listed below:

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