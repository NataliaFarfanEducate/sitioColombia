async function cargarProductos() {
  const contenedor = document.getElementById("productos");
  contenedor.innerHTML = "<p>Cargando productos...</p>";

  try {
    const res = await fetch("https://fakestoreapi.com/products?limit=6");
    const productos = await res.json();

    contenedor.innerHTML = ""; // limpiar

    productos.forEach(prod => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <img src="${prod.image}" alt="${prod.title}">
        <h3>${prod.title}</h3>
        <p class="precio">$${prod.price}</p>
        <p>${prod.description.substring(0, 80)}...</p>
        <button>Comprar</button>
      `;
      contenedor.appendChild(card);
    });
  } catch (error) {
    contenedor.innerHTML = "<p>Error cargando productos</p>";
    console.error(error);
  }
}

cargarProductos();
