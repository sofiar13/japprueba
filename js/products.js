const URL_PRODUCTOS = "https://japceibal.github.io/emercado-api/cats_products/101.json";

fetch(URL_PRODUCTOS)
  .then(response => {
    if (!response.ok) {
      throw new Error('Error en la solicitud');
    }
    return response.json(); // Convierte la respuesta en formato JSON
  })
  .then(data => {
    // Aquí tienes acceso a los datos JSON en la variable "data"
    console.log(data); // Muestra los datos en la consola para verificar
    // Puedes llamar a una función para manipular los datos
    procesarDatos(data);
  })
  .catch(error => {
    console.error('Hubo un error:', error);
});

function procesarDatos(data) {
    // Aquí puedes realizar cualquier manipulación que necesites en los datos
    // Por ejemplo, supongamos que el JSON tiene un array llamado "usuarios"
    const productos = data.products;
    let contenido = "";
    
    for (const producto of productos) {
        contenido += `
        <div >
        <div class="list-group-item list-group-item-action cursor-active">
            <div class="row">
                <div class="col-3">
                    <img src="${producto.image}" alt="${producto.description}" class="img-thumbnail">
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <h4 class="mb-1">${producto.name}</h4>
                        <small class="text-muted">${producto.soldCount} vendidos</small>
                        
                    </div>
                    <p class="mb-1">${producto.description}</p>
                    
                    <p class="mb-1">${producto.cost} USD</p>
                    
                </div>
            </div>
        </div>
    </div>
            `
        document.getElementById("contenedor").innerHTML = contenido;
    }
}