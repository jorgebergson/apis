function makeOperationBlock(operacao){
    var ent = '';
    ent += "<header class=\"major\">";
    ent += "<h2 id=\"" + operacao.id + "\">"+operacao.descricao+"</h2>";
    ent += "</header>";
    ent += "<div class=\"content\">";
    ent += "<p class=\"" + operacao.metodo + "Operation\"><span class=\"" + operacao.metodo + "Label\">" + operacao.metodo + "</span><strong> " + operacao.path + " </strong></p>";
    ent += "<h3>Informações de entrada e saída</h3>";
    ent += "<div class=\"tab\">";
    ent += "<button class=\"tablinksData"+ operacao.id +" tab\" onclick=\"openTab(event, 'entrada"+ operacao.id +"','Data" + operacao.id + "')\">Entrada</button>";
    ent += "<button class=\"tablinksData"+ operacao.id +" tab\" onclick=\"openTab(event, 'saida"+ operacao.id +"','Data" + operacao.id + "')\">Saída</button>";
    ent += "</div>";
    ent += "<div id=\"entrada"+ operacao.id +"\" class=\"tabcontentData"+ operacao.id +" box\" style=\"display:none\">";
    ent += "<h4>Dados de Entrada</h4>";
    var opCampos = '';
    operacao.entrada.forEach(entrada => {
        opCampos += "<tr><td>" + entrada.campo + "</td><td>" + entrada.descricao + "</td><td>" + entrada.tipo + "</td></tr>";
    });
    ent += "<table class=\"alt\"><thead><tr><th>Campo</th><th>Descrição</th><th>Tipo</th></tr></thead><tbody>" + opCampos + "</tbody></table>";
    ent += "</div>";
    ent += "<div id=\"saida"+ operacao.id +"\" class=\"tabcontentData"+ operacao.id +" box\" style=\"display:none\">";
    ent += "<h4>Dados de Saída</h4>";
    opCampos = '';
    operacao.saida.forEach(saida => {
        opCampos += "<tr><td>" + saida.campo + "</td><td>" + saida.descricao + "</td><td>" + saida.tipo + "</td></tr>";
    });
    ent += "<table class=\"alt\"><thead><tr><th>Campo</th><th>Descrição</th><th>Tipo</th></tr></thead><tbody>" + opCampos + "</tbody></table>";
    ent += "</div>";
    ent += "<br/><h3>Exemplos de requisições</h3>";
    var opLinguagens = '';
    var opDivsLinguagens = '';
    operacao.exemplos.forEach(exemplo => {
        opLinguagens += "<button class=\"tablinksCode tab\" onclick=\"openTab(event, '" + exemplo.linguagem + "','Code')\"> " + exemplo.linguagem + "</button>";
        opDivsLinguagens += "<div id=\"" + exemplo.linguagem + "\" class=\"tabcontentCode\"><h3>" + exemplo.linguagem + "</h3><pre><code>" + exemplo.exemplo + "</code></pre></div>";
    });
    ent += "<div class=\"tab\">";
    ent += opLinguagens;
    ent += "</div>";
    ent += opDivsLinguagens;
    ent += "<br/><h3>Códigos de Resposta</h3>";
    var opRetornos = '';
    var opDivs = '';
    operacao.respostas.forEach(resposta => {
        opRetornos += "<button class=\"tablinksResponse tab\" onclick=\"openTab(event, '" + resposta.codigo + "','Response')\"> " + resposta.codigo + " - " + resposta.mensagem  + "</button>";
        opDivs += "<div id=\"" + resposta.codigo + "\" class=\"tabcontentResponse\"><h3>" + resposta.codigo + " - " + resposta.mensagem + "</h3><pre><code>" + resposta.exemplo + "</code></pre></div>";
    });
    ent += "<div class=\"tab\">";
    ent += opRetornos;
    ent += "</div>";
    ent += opDivs;
    ent += "</div>";
    ent += "</section><br/><br/><br/>";

    return ent;
}