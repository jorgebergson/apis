function makeOperationBlock(id, operacao, metodo, api){
    id = "op"+id;
    var ent = '';
    ent += "<div id=\"" + id + "\" style=\"display:none;\">" ;
    ent += "<header class=\"major\">";
    ent += "<h2 id=\"" + id + "\">"+api.paths[operacao][metodo].summary+"</h2>";
    ent += "</header>";
    ent += "<div class=\"content\">";
    ent += "<p class=\"" + metodo.toUpperCase() + "Operation\"><span class=\"" + metodo.toUpperCase() + "Label\">" + metodo.toUpperCase() + "</span><strong> " + operacao + " </strong></p>";
    // ent += "<div id=\"modal" + id + "\" class=\"modal\">";
    // ent += "<div class=\"modal-content\">";
    // ent += "<span class=\"close\" onmouseup=\"clearFieldsResult(document.getElementById('resultPanel" + id + "'))\">&times;</span>";    
    // ent += "<h3>"+ operacao.descricao + "</h3>";
    // ent += "<p><strong>Bearer:</strong> <span class=\"bearer\"></span><br/>";
    // ent += "<strong>URL:</strong> <span id=\"url" + id + "\"></span><br/>";
    // ent += "<strong>Ambiente:</strong><span class=\"amb\"></span></p>";
    // ent += "<h3>Parâmetros</h3>";
    // ent += "<div id=\"modalOp\" class=\"box\">";
    // var parametros = [];
    // operacao.entrada.forEach(entrada => {
    //     parametros.push(entrada.campo);
    //     ent += entrada.campo + ": <input id=\"param" + entrada.campo + id + "\"></input><br/>";
    // });        
    // ent += "<center><button id=\"req" + id + "\" onclick=\"makeHTTPRequest(document.getElementById('resultPanel" + id + "'), document.getElementById('param" + id + "').value)\">Executar</button></center>";
    // ent += "</div>";
    // ent += "</div>";
    // ent += "</div>";
     ent += "<h3>Informações de entrada e saída</h3>";
     ent += "<div class=\"tab\">";
     ent += "<button class=\"tablinksData"+ id +" tab\" onclick=\"openTab(event, 'entrada"+ id +"','Data" + id + "')\">Entrada</button>";
     ent += "<button class=\"tablinksData"+ id +" tab\" onclick=\"openTab(event, 'saida"+ id +"','Data" + id + "')\">Saída</button>";
    // ent += "<button class=\"tablinksData"+ id +" tab\" onclick=\"openTab(event, 'teste"+ id +"','Data" + id + "')\">Dados de Teste</button>";
     ent += "</div>";
     ent += "<div id=\"entrada"+ id +"\" class=\"tabcontentData"+ id +" box\" style=\"display:none\">";
     ent += "<h4>Dados de Entrada</h4>";
     var opCampos = "";
     if(api.paths[operacao][metodo].parameters){
        api.paths[operacao][metodo].parameters.forEach(entrada => {
            var type = entrada.schema? entrada.schema.type : entrada.type;
            opCampos += "<tr><td>" + entrada.name + "</td><td>" + entrada.description + "</td><td>" + type + "</td><td>" + entrada.in + "</td></tr>";
        });
        ent += "<table class=\"alt\"><thead><tr><th>Campo</th><th>Descricao</th><th>Tipo</th><th>Local</th></tr></thead><tbody>" + opCampos + "</tbody></table>";
    }
    if(metodo === "post" || metodo === "put"){
        ent += "<h4> Dados do Corpo da Requisição</h4>";
        var schema = api.paths[operacao][metodo].requestBody.content['application/json'].schema;
        var fields = Object.getOwnPropertyNames(schema.properties);
        ent += "<table class=\"alt\"><thead><tr><th>Campo</th><th>Descricao</th><th>Tipo</th></tr></thead><tbody>";
        ent += addFields(fields, schema, "");
        ent += "</tbody></table>";        
        ent += "<h4> Exemplo de Corpo da Requisição</h4>";
        ent += "<pre class=\"code\">";
        ent += syntaxHighlight(api.paths[operacao][metodo].requestBody.content['application/json'].example);
        ent += "</pre>"; 
    }
    ent += "</div>";
    ent += "<div id=\"saida"+ id +"\" class=\"tabcontentData"+ id +" box\" style=\"display:none\">";
    ent += "<h4>Dados de Saída</h4>";
    // var apiobj = api.paths[operacao][metodo].responses['200'].content['application/json'].schema.properties;
    // var opProperties;
    // var saidaCampos = "";
    // Object.getOwnPropertyNames(api.paths)
    // opProperties = Object.getOwnPropertyNames(apiobj);
    // opProperties.forEach(saida => {
    //     saidaCampos += "<tr><td>" + saida + "</td><td>" +  apiobj[saida].description + "</td><td>" + apiobj[saida].type + "</td></tr>";
    // });
    var schema = api.paths[operacao][metodo].responses['200'].content['application/json'].schema;
    var example = api.paths[operacao][metodo].responses['200'].content['application/json'].example;
    var fields = Object.getOwnPropertyNames(schema.properties);
    ent += "<table class=\"alt\"><thead><tr><th>Campo</th><th>Descricao</th><th>Tipo</th></tr></thead><tbody>";
    ent += addFields(fields, schema, "");
    ent += "</tbody></table>";    
    ent += "<h4> Exemplo de Corpo da Resposta</h4>";
    ent += "<pre class=\"code\">";
    ent += syntaxHighlight(example);
    ent += "</pre>";
    ent += "</div>";
    // ent += "<div id=\"teste"+ id +"\" class=\"tabcontentData"+ id +" box\" style=\"display:none\">";
    // ent += "<h4>Dados de Teste</h4>";
    // opCampos = '';
    // operacao.teste.forEach(teste => {
    //     opCampos += "<tr><td>" + teste.ni + "</td><td>" + teste.situacao + "</td></tr>";
    // });
    // ent += "<table class=\"alt\"><thead><tr><th>Entrada</th><th>Observações</th></tr></thead><tbody>" + opCampos + "</tbody></table>";    
    // ent += "</div>";
    // ent += "<br/><h3>Exemplos de requisições</h3>";
    // var opLinguagens = '';
    // var opDivsLinguagens = '';
    // operacao.exemplos.forEach(exemplo => {
    //     opLinguagens += "<button class=\"tablinksCode"+ id +" tab\" onclick=\"openTab(event, 'exemplo" + exemplo.linguagem + id + "','Code" + id + "')\"> " + exemplo.linguagem + "</button>";
    //     opDivsLinguagens += "<div id=\"exemplo" + exemplo.linguagem + id + "\" class=\"tabcontentCode" + id + " box\" style=\"display:none\"><h3>" + exemplo.linguagem + "</h3><pre><code>" + exemplo.exemplo + "</code></pre></div>";
    // });
    // ent += "<div class=\"tab\">";
    // ent += opLinguagens;
    // ent += "</div>";
    // ent += opDivsLinguagens;
     ent += "<br/><h3>Códigos de Resposta</h3>";
    // var opRetornos = '';
    // var opDivs = '';
    var descCodes = "";
    var responseCodes = Object.getOwnPropertyNames(api.paths[operacao][metodo].responses);
    responseCodes.forEach(resposta => {
        descCodes += "<tr><td>" + resposta + "</td><td>" + api.paths[operacao][metodo].responses[resposta].description + "</td></tr>";
    });
    ent += "<table class=\"alt\"><thead><tr><th>Código</th><th>Descricao</th></tr></thead><tbody>" + descCodes + "</tbody></table>";    
    // ent += "<div class=\"tab\">";
    // ent += opRetornos;
    ent += "</div>";
    // ent += opDivs;
    ent += "</div>";
    ent += "</section>";

    return ent;
}

function makeAPIList(apis){

    var ent = '';
    apis.forEach(api => {
        ent += "<article>";
        ent += "<div class=\"badge\"><a href=\"apis/apis.html?api=" + api.modelo + "\" style=\"border:none;\"><img src=\"./images/badges/" + api.imagem + ".png\"></a></img></div>";
        ent += "<div class=\"content\">";
        ent += "<h3><a href=\"apis/apis.html?api=" + api.modelo + "\" style=\"border:none;\">" + api.nome + "</a></h3>";
        ent += "<p>" + api.descricao + "</p>";
        ent += "</div>";
        ent += "</article>";    
    })

    return ent;

}

function toggle_visibility(id,rp) {
    var ii=0;
     for (ii = 1; ii < rp ; ii++) {
      var op = 'op' + ii
        document.getElementById(op).style.display="none";

      } 
      
       var e = document.getElementById("op"+id);
       if(e.style.display == 'none')
          e.style.display = 'block';
       else
          e.style.display = 'none';
}

function syntaxHighlight(json) {
    if (typeof json != 'string') {
         json = JSON.stringify(json, undefined, 2);
    }
    json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
        var cls = 'number';
        if (/^"/.test(match)) {
            if (/:$/.test(match)) {
                cls = 'key';
            } else {
                cls = 'string';
            }
        } else if (/true|false/.test(match)) {
            cls = 'boolean';
        } else if (/null/.test(match)) {
            cls = 'null';
        }
        return '<span class="' + cls + '">' + match + '</span>';
    });
}

function addFields(fields, schema, father){
    saida = "";
    fields.forEach(field => {
        description = "";
        if(schema.properties[field].description !== undefined){
            description = schema.properties[field].description;
        }
        var arrow = "";
        if(father !== ""){
            arrow = "&#8618 ";
        }
        saida += "<tr><td>" + "<b>" + father + arrow + "</b>"  + field + "</td><td>" + description + "</td><td>" + schema.properties[field].type + "</td></tr>";
        if(schema.properties[field].type === "object"){
            var subFields = Object.getOwnPropertyNames(schema.properties[field].properties);
            saida += addFields(subFields,schema.properties[field],father+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
        }
    });

    return saida;
}