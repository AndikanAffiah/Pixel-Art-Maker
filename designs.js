$(document).ready(function() {
   $("#sizePicker").submit(function makeGrid(e) {
       $("tr").remove();
       var tr = $("#inputHeight").val();
       var td = $("#inputWeight").val();
           for (var i = 1; i <= tr; i++) {
               $("table").append("<tr></tr>");
               for (var j = 1; j <= td; j++) {
                   $("tr:last").append("<td></td>");
                   $("td").attr("id", "cells");
               }
           }
       e.preventDefault();
       $("#cells").click(function() {
           let changeColor = $('#colorPicker').val();        
           if($(this).attr('style')){
               $(this).removeAttr('style');
           }else{
               $(this).attr('style', 'background-color:' + changeColor);
           }
       });
   });
});
