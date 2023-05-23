function calcularTotal() 
{
    var cantidad = document.getElementById("cantidad").value;
    var categoria = document.getElementById("categoria").value;
    var total = 0;

    if (isNaN(cantidad) || cantidad <= 0) 
    {
      alert("No es un valor correcto, solo numérico mayor a 0");
      return;
    }

    cantidad = parseInt(cantidad);

    switch (categoria) 
    {
        case "estudiante":
          total = (cantidad * 200) - (cantidad * 200 * 0.8);
          break;
        case "trainee":
          total = (cantidad * 200) - (cantidad * 200 * 0.5);
          break;
        case "junior":
          total = (cantidad * 200) - (cantidad * 200 * 0.15);
          break;
        case "ninguno":
            total = cantidad * 200;
          break;
      }
    
    document.getElementById("totalPagar").value = "Total a pagar: $" + total;
}
  
function borrarTotal() 
{
    document.getElementById("totalPagar").value = "Total a pagar: $";
    document.getElementById("nombre").value ="";
    document.getElementById("apellido").value ="";
    document.getElementById("correo").value ="";
    document.getElementById("cantidad").value ="";
}
  