const imagenes = {
  napolitana: "/img/napolitana.jpg",
  española: "/img/española.jpg",
  salame: "/img/salame.jpg",
  "cuatro estaciones": "/img/cuatro estaciones.jpg",
  bacon: "/img/bacon.jpg",
  "pollo picante": "/img/pollo picante.jpg"
}

const CardPizza = ({ name, price, ingredients = [], img, desc }) => {
  return (
    <div className="card pizza-card h-100 shadow-sm">
      <img src={imagenes[name]} className="card-img-top pizza-image" />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title text-capitalize text-center">Pizza {name}</h5>
        <p className="card-text small text-secondary">{desc}</p>
        <hr />
        <p className="text-secondary text-center mb-2">Ingredientes:</p>
        <ul className="list-group list-group-flush mb-3">
          {ingredients.map((ingredient, index) => (
            <li className="list-group-item text-center py-1" key={`${name}-${index}`}>
              🍕 {ingredient}
            </li>
          ))}
        </ul>
        <h5 className="text-center mt-auto mb-3">
          Precio: ${price.toLocaleString('es-CL')}
        </h5>
        <div className="d-flex justify-content-between gap-2">
          <button className="btn btn-outline-secondary btn-sm flex-fill" type="button">
            Ver más
          </button>
          <button className="btn btn-dark btn-sm flex-fill" type="button">
            Añadir 🛒
          </button>
        </div>
      </div>
    </div>
  )
}

export default CardPizza
