$(".add").click(function () {
  $("#exampleModal").modal("show");
});

function showProducts(products) {
  // Obtener el contenedor de la tabla
  var tableContainer = document.getElementById("show_products");

  // Crear una plantilla de tabla vacía
  var tableTemplate = `
      <table class="table table-striped table-hover">
        <thead class="title_table">
          <tr>
            <th scope="col">Check</th>
            <th scope="col">ID</th>
            <th scope="col">Imagen</th>
            <th scope="col">UID</th>
            <th scope="col">Referencia</th>
            <th scope="col">Nombre</th>
            <th scope="col">Categoría</th>
            <th scope="col">Subcategoría</th>
          </tr>
        </thead>
        <tbody id="product_rows"></tbody>
      </table>
    `;

  // Agregar la plantilla vacía al contenedor
  tableContainer.innerHTML = tableTemplate;

  // Obtener el tbody de la tabla
  var productRows = document.getElementById("product_rows");

  // Iterar sobre la lista de productos
  for (var i = 0; i < products.length; i++) {
    // Obtener el producto actual
    var product = products[i];

    // Crear una plantilla de fila de producto
    var rowTemplate = `
        <tr>
            <td><input type="checkbox" class="form-check-input" id="check_${product.id}"></td>
            <td>${product.id}</td>
            <td><img src="${product.image}" alt="${product.name}" width="50px"></td>
            <td>${product.uid}</td>
            <td>${product.reference}</td>
            <td>${product.name}</td>
            <td>${product.category}</td>
            <td>${product.subcategory}</td>
        </tr>
        `;
  }
}
