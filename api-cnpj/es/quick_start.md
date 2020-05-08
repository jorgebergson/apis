# Guías rápidas  

## Cómo autenticarse con la API de consulta CNPJ

Las API proporcionadas por la plataforma API SERPRO utilizan el protocolo OAuth2 para realizar la autenticación y autorización de acceso de las API contratadas. Siga los pasos a continuación para autenticarse y consumir Datavalid. 

### 1. Primer paso: obtener la clave del consumidor y el secreto del consumidor 
Para consumir las API, debe usar los dos códigos (Clave del consumidor y Secreto del consumidor) disponibles en el Área del cliente. Estos códigos se utilizan para identificar el contrato. Las credenciales de acceso deben obtenerse de<a href="https://cliente.serpro.gov.br" target="_blank"> Área de clientes Serpro</a>. 

Ejemplos de código:  

    :::texto
    Consumer Key: djaR21PGoYp1iyK2n2ACOH9REdUb   
    Consumer Secret: ObRsAJWOL4fv2Tp27D1vd8fB3Ote

!!! Peligro "Aviso importante"
    Consumer Key y Consumer Secret identifican a su usuario y su contrato con SERPRO. Mantenga esta información protegida.

### 2. Segundo paso: solicitar el token de portador
Para consultar las API, es necesario obtener un token de acceso temporal (Portador). Este token tiene un tiempo de caducidad y siempre que caduque, este paso de solicitar un nuevo token de acceso debe repetirse.

#### Cómo solicitar el token de acceso (portador)

Para solicitar el token temporal, es necesario realizar una solicitud HTTP POST al punto final del token https://apigateway.serpro.gov.br/token, informar las credenciales de acceso (consumerKey: consumerSecret) en la Autorización de encabezado HTTP, en formato base64, como se muestra a continuación.

    [HEAD] Authorization: Basic base64(Consumer Key:Consumer Secret) 
    [HEAD] Content-Type: application/x-www-form-urlencoded 
    [POST] grant_type=client_credentials

Para usar en el parámetro * Autorización *, es necesario concatenar los códigos de Consumer Key e Consumer Secret, separados por el carácter ":", y convertir el resultado a BASE64.
En el siguiente ejemplo, se devuelve la cadena *ZGphUjIx[...]IzT3RlCg*:

    :::shell
    echo -n "djaR21PGoYp1iyK2n2ACOH9REdUb:ObRsAJWOL4fv2Tp27D1vd8fB3Ote" | base64

Resultado:

    ZGphUjIxUEdvWXAxaXlLMm4yQUNPSDlSRWRVYjpPYlJzQUpXT0w0ZnYyVHAyN0QxdmQ4ZkIzT3RlCg

A continuación se muestra un ejemplo de una llamada a través de cUrl:

    :::shell
    curl -k -d "grant_type=client_credentials" \
    -H "Authorization: Basic ZGphUjIxUEdvWXAxaXlLMm4yQUNPSDlSRWRVYjpPYlJzQUpXT0w0ZnYyVHAyN0QxdmQ4ZkIzT3RlCg" \
    https://apigateway.serpro.gov.br/token

!!! Information "**Content-type**"
    Si experimenta errores "415 Unsupported Media Type" en la llamada de solicitud de token, use el Header "Content-Type" con el valor "application/x-www-form-urlencoded"

    [HEAD] Content-type: "application/x-www-form-urlencoded"

### 3. Tercer paso: recibir el token 
Como resultado del paso anterior, el punto final informará al token de acceso API, en el campo access_token del mensaje json de retorno. Este token debe ser informado en los próximos pasos.

#### Recibe el token
Como resultado, el punto final informará al token de acceso API, en el campo access_token del mensaje de retorno json. Este token debe ser informado en los próximos pasos.
    :::json
    {
        "scope": "am_application_scope default", 
        "token_type": "Bearer", 
        "expires_in": 3295, 
        "access_token": "c66a7def1c96f7008a0c397dc588b6d7"
    }

#### Renovación de token de acceso
Tenga en cuenta que cada vez que caduque el token de acceso temporal, la gateway devolverá un CÓDIGO HTTP 401 después de realizar una solicitud a una API. En este caso, el segundo paso debe repetirse [Cómo solicitar el token de acceso (portador)](quick_start.md#2-segundo-passo-solicite-o-bearer-token) para geração de um novo token de acesso temporário.

### 4. Paso cuatro: hacer una solicitud

#### Consultando las API

En posesión del token de acceso, realice la solicitud a la API de prueba de CNPJ. 

    curl -X GET "https://apigateway.serpro.gov.br/consulta-cnpj-trial/v1/cnpj/34238864000168" \
    -H "accept: application/json" \
    -H "Authorization: Bearer 4e1a1858bdd584fdc077fb7d80f39283" \

En el ejemplo anterior, se usaron los siguientes parámetros:

* [HEADER] Accept: application/json  
Informamos el tipo de datos que estamos solicitando, en este caso JSON

* [HEADER] Authorization: Bearer 4e1a1858bdd584fdc077fb7d80f39283  
Informamos el token de acceso recibido

* [GET] https://apigateway.serpro.gov.br/consulta-cnpj-trial/v1/cnpj/34238864000168  
Llamamos a la URL del API y al método deseado. En este caso, la url base es "https://apigateway.serpro.gov.br/consulta-cnpj-df-trial/v1/”, y el método es el "cnpj/34238864000168".

Ejemplo de respuesta esperada:

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
    La consulta API CNPJ Consult anterior es solo para fines de demostración. Las API disponibles y sus respectivas URL (puntos finales) para consumo están disponibles a través de la documentación de sus respectivos swaggers.

## Cómo usar la API de demostración de CNPJ

API CNPJ Demo es el entorno de prueba de la API de CNPJ, con datos de muestra (simulados), para demostrar el funcionamiento de la API. Para usarlo: 

1. Acceda a la [API de demostración de CNPJ](demonstracao.md)  
1. Elija el método (punto final) para probar
1. Haga clic en***Try it Out***
1. Inserte los encabezados que desee y / o cambie el contenido del cuerpo de la solicitud
1. Haga clic en ***Execute***

### Datos de prueba

Para probar el entorno de prueba, use uno de los CNPJ ficticios que se enumeran a continuación:

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