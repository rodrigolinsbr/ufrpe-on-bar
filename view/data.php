<?php


// leitura das datas
$dia = date('d');
$mes = date('m');
$ano = date('Y');
$semana = date('w');
 
 
// configuração mes
 
switch ($mes){
 
case 1: $mes = "Janeiro"; break;
case 2: $mes = "Fevereiro"; break;
case 3: $mes = "Março"; break;
case 4: $mes = "Abril"; break;
case 5: $mes = "Maio"; break;
case 6: $mes = "Junho"; break;
case 7: $mes = "Julho"; break;
case 8: $mes = "Agosto"; break;
case 9: $mes = "Setembro"; break;
case 10: $mes = "Outubro"; break;
case 11: $mes = "Novembro"; break;
case 12: $mes = "Dezembro"; break;
 
}
 
 
// configuração semana
 
switch ($semana) {
 
case 0: $semana = "Domingo"; break;
case 1: $semana = "Segunda-feira"; break;
case 2: $semana = "Terça-feira"; break;
case 3: $semana = "Quarta-feira"; break;
case 4: $semana = "Quinta-feira"; break;
case 5: $semana = "Sexta--feira"; break;
case 6: $semana = "Sábado"; break;
 
}
//Agora basta imprimir na tela...


?>