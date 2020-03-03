## Requisitos para o envio das imagens de faces 

O módulo de Reconhecimento Facial do Datavalid necessita de imagens com resolução mínima de 250 x 250 pixels. O serviço aceita imagens JPG e PNG. O índice de precisão do algoritmo depende diretamente da qualidade da imagem enviada.  
A resolução mínima de 250 x 250 px se refere à área da imagem da face, não da área total (fundo em branco, se houver). Quando esta condição não é atendida, é retornado o seguinte erro (exceção):


| Mensagem | Significado |
|--|--|
| error_description | Resolução da imagem inválida. A largura e a altura não podem ser menores que 250 pixels. |
| error | Resolução da imagem inválida. A largura e a altura não podem ser menores que 250 pixels. |

<!-- Imagens Ruins:

EXEMPLOS

Imagens Boas:

EXEMPLOS -->


## Requisitos para o envio de imagens de digitais

O módulo de Validação de Digitais do Datavalid necessita de imagens com resolução mínima de 500 DPI (pontos por polegada). Recomendamos uma imagem com dimensões de 640 x 600 pixels de altura X largura (considerando ao imagem antes de ser recortada). São suportados os formatos WSQ e PNG. Para imagens PNG, é importante atentar ao limite máximo total da requisição, que não poderá ultrapassar **3MB**, incluíndo todo o corpo da requisição. Quando este limite máximo não seja atendido, a aplicação retorna [erro 413](codigos_erros.md#413-request-entity-too-large). Já quando a condição de tamanho mínimo não é atendida, é retornado o erro a seguir (exceção).

<br/>

| Mensagem | Significado |
|--|--|
| error_description | Resolução da imagem inválida. A largura e a altura não podem ser menores que 500 pixels. |
| error | Resolução da imagem inválida. A largura e a altura não podem ser menores que 500 pixels. |

![Digital sample](/imgs/digital.png)*Exemplo de digital com boa qualidade*

<br/>
