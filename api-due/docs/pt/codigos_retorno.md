# Códigos de Retorno

As requisições à API DUE podem retornar os seguintes códigos HTTP:

!!! INFO "Códigos não bilhetados"
    Os códigos  **400, 401, 403, 500 e 503** não serão bilhetados no faturamento.

### Code / Responses
### 200	OK  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;Tudo funcionou como esperado e a validação dos dados foi realizada com sucesso.  

### 206 Conteúdo Parcial
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;As informações foram retornadas, mas não completamente.

### 400	Requisição inválida  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;O número de CNPJ informado não é válido.

### 401	Não autorizado  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;Problemas durante a autenticação.

### 403 Proibido
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;Este erro ocorre quando há algum caminho errado na requisição. Certifique-se de chamar a API da seguinte forma: "https://apigateway.serpro.gov.br/consulta-cnpj-df/v1/cnpj/{ni}"

### 404	Não Encontrado
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;Não existe CNPJ com o número de inscrição informado.

### 500	Erro no servidor  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;Ocorreu algum erro interno no Servidor.

### 504 Tempo Esgotado do Gateway
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;Ocorreu algum erro de rede e o gateway não respondeu a tempo. A requisição não chegou até a API Consulta DUE.
