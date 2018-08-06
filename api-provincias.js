function agregarProvincia(provincia)
{
  $("#resultados").append("<h3>" + provincia.provincia + "</h3>");
  console.log(provincia);
}

$(document).ready(function() {


    $("#resultados").append("<h3>" + "PRUEBA" + "</h3>")
    console.log ("JQuery funciona.");

   $("#get-prov").on("click", function(){
     $.getJSON("https://api.myjson.com/bins/gr9qy", function(json) {
          console.log(json.provincias[0].provincia);

          json.provincias.forEach(function(prov){
            console.log(prov.provincia);
            $("#resultados").append("<h4>"+prov.provincia+"</h4>");
          });

          for (var i = 0; i < json.provincias.lenght; i++)
          {
            console.log(json.provincias[i].provincia);
            //agregarProvincia(json.provincias[i]);
          }
      });
   });

 });
