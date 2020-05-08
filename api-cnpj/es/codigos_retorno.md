# Códigos de Retorno

Las solicitudes a la API de CNPJ pueden devolver el siguiente códigos HTTP:

!!! INFO "Códigos no emitidos"
    Los códigos 400, 401, 403, 500 y 503 no se emitirán en la facturación.

### Código / Respuestas
### 200	OK  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;Todo funcionó como se esperaba y los datos se validaron con éxito.  

### 206 Contenido parcial
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;La información fue devuelta, pero no completamente.

### 400 Solicitud inválida
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;El número de CNPJ ingresado no es válido.

### 401 No autorizado
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;Problemas durante la autenticación.
Este error ocurre cuando hay una ruta incorrecta en la solicitud. Asegúrese de llamar a la API de la siguiente manera: "https://apigateway.serpro.gov.br/consulta-cnpj-df/v1/cnpj/{ni}"

### 404 no encontrado
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;No hay CNPJ con el número de registro informado.

### 500 Error del servidor
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;Se ha producido un error interno del servidor.

### 504 Tiempo de espera de puerta de enlace
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;Hubo un error de red y la puerta de enlace no respondió a tiempo. La solicitud no llegó al API Consulta CNPJ.

<br/>