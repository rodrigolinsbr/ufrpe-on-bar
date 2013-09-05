/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
  window.onload = function(){
    
    var respAjax = document.getElementById("resposta");
    
     setInterval(solicitaPagina,2500);
    
    function solicitaPagina(){
      //cria objeto para trabalharcom ajax
      var ajax = new XMLHttpRequest();
      //metodo de abertura e url de abertura
      //pode ser locahlou web
      ajax.open("POST","control/checaMesa.php");
      //para que dados sejamenviadosm via post e nessesario
      //passar os parametor para metodo setRequestHeader
      //ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8")
      //podemos enviar pelo send os parametros da pagina
      //mesma sintaxe get
      //ajax.send("funcionario=Antonio Numnes&telefone=1818-3333");
      ajax.send();
      //onreadystatechange nos informa quando requisiçao
      //e respondida pelo servidor
      
      ajax.onreadystatechange = function(){
            //chegando a requisição verifica se o servidor
            //retornou
            if(ajax.readyState == 4 ){
                //usando um alert para mostrar dados
                //alert(ajax.responseText);
                //alterando um tag html
                respAjax.innerHTML  = ajax.responseText;
            }
    }
}



  }


