
##  Notas de versão do Datavalid

#### Dezembro/2019
- Melhoria na verificação da qualidade das digitais;
- Otimização na consulta de serviços integrados;
- Evolução no processo de monitoração do serviço.
- A validação agora retorna também índice de similaridade (numero_similaridade) para o campo número do documento. Disponível somente na V1. Veja no exemplo abaixo:

Request:

    :::json
    (...)
    "documento": {
      "tipo": 1,
      "numero": "000001",
      "orgao_expedidor": "SSP",
      "uf_expedidor": "DF"
    }

Response:

    :::json
    (...)
    "documento": {
        "tipo": true,
        "numero": false,
        "numero_similaridade": 0.857142857,
        "orgao_expedidor": true,
        "uf_expedidor": false
    } 

#### Outubro/2019 
- Melhoria na validação do número de documento.

#### Agosto/2019  
- Melhoria na validação de strings do CPF.  

#### Julho/2019  
- Inclusão do atributo opcional "x-request-tag" do header.  

</br>