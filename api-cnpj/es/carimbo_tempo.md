# Marca de tiempo

## Solicitud de firma con sello de tiempo
Si desea que su solicitud venga con una firma de sello de tiempo, simplemente incluya, en el encabezado de su solicitud, la información`x-signature: 1.`

La firma se devolverá en el encabezado de la respuesta, con el nombre`stamp`.

## Comprobación de firma con sello de tiempo
Para verificar la firma de la marca de tiempo, siga las instrucciones en [Verifica la documentación de la API de marca de tiempo](https://devserpro.github.io/apiserpro/apis/swagger-ui-master/dist/index.html?bearer=4e1a1858bdd584fdc077fb7d80f39283&url=https://devserpro.github.io/apiserpro/apis/swaggers/carimbo-tempo/swagger-timestampcheck-trial-bsa.json#!/default/post_check).