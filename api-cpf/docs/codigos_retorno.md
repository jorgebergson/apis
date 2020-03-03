# Códigos de Retorno

As requisições à API CPF podem retornar os seguintes código HTTP:

!!! INFO "Códigos não bilhetados"
    Os códigos **400 (Requisição inválida)** e **500 (Erro interno no servidor)** não serão bilhetados no faturamento.

### Code / Responses
### 200	OK  
Tudo funcionou como esperado e a validação dos dados foi realizada com sucesso.  

### 206 Conteúdo Parcial
As informações foram retornadas, mas não completamente.

### 400	Requisição inválida  
O número de CPF informado não é válido.

### 401	Não autorizado  
Problemas durante a autenticação.

### 403 Proibido
Este erro ocorre quando há algum caminho errado na requisição. Certifique-se de chamar a API da seguinte forma: "https://apigateway.serpro.gov.br/consulta-cpf-df/v1/cpf/{ni}"

### 404	Não Encontrado
Não existe CPF com o número de inscrição informado.

### 500	Erro no servidor  
Ocorreu algum erro interno no Servidor.

### 504 Tempo Esgotado do Gateway
Ocorreu algum erro de rede e o gateway não respondeu a tempo. A requisição não chegou até a API Consulta CPF.

<br/>