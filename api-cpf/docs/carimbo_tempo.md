# Solicitando assinatura com Carimbo de Tempo
Caso deseje que sua solicitação venha com uma assinatura de Carimbo de Tempo, basta incluir, no cabeçalho de sua requisição, a informação `x-signature: 1.`

A assinatura será retornada no cabeçalho da resposta, com o nome `stamp`.

# Verificando assinatura com Carimbo de Tempo

Para verificar assinatura de carimbo de tempo, siga as instruções da [documentação da API Verifica Carimbo de Tempo](https://devserpro.github.io/apiserpro/apis/swagger-ui-master/dist/index.html?bearer=4e1a1858bdd584fdc077fb7d80f39283&url=https://devserpro.github.io/apiserpro/apis/swaggers/carimbo-tempo/swagger-timestampcheck-trial-bsa.json#!/default/post_check).