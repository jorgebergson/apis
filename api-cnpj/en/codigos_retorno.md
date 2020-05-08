# Return codes

Requests to the CNPJ API can return the following HTTP codes:

!!! INFO "Non-ticketed codes"
    The codes 400, 401, 403, 500 and 503 will not be ticketed on billing.

### Code / Responses
### 200	OK  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;Everything worked as expected and the data was validated successfully.  

### 206 Partial Content
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;The information was returned, but not completely.

### 400	Invalid request 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;The CNPJ number entered is not valid.

### 401	Not authorized 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;Problems during authentication.

### 403 forbidden
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;This error occurs when there is a wrong path in the request. Make sure to call the API as follows: "https://apigateway.serpro.gov.br/consulta-cnpj-df/v1/cnpj/{ni}"

### 404	Not found
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;There is no CNPJ with the registration number informed.

### 500	Server error 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;An internal server error has occurred.

### 504 Gateway Timeout
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;There was a network error and the gateway did not respond in time. The request did not reach the API Consulta CNPJ.

<br/>