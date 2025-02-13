import PropTypes from "prop-types";

const Ingrediente = ({ ingrediente, index, isIngredientOpen, isNutritionBlurred, onRemove, isOpen }) => {
  return (
    <div
      className={`ingrediente-container ${isIngredientOpen ? "open" : "closed"}`}
      style={{
        position: "relative",
      }}
    >
      <img
        src={ingrediente.imgSrc}
        alt={ingrediente.alt}
        className={`ingrediente z${8 - index}`}
      />
      {isOpen && onRemove && (
        <button
        className={`remove-button ${index % 2 === 0 ? "right" : "left"}`}
        onClick={(e) => {
            e.stopPropagation();
            onRemove(ingrediente.id);
          }}
        >
          ❌
        </button>
      )}
      <div
        className="info-ingrediente"
        style={{
          display: isIngredientOpen ? "block" : "none",
          filter: isNutritionBlurred ? "blur(5px)" : "none",
        }}
      >

        <p>{ingrediente.nombre}</p>
        <p>Kcal: {ingrediente.kcal}</p>
      </div>
    </div>
  );
};

Ingrediente.propTypes = {
  ingrediente: PropTypes.shape({
    id: PropTypes.number.isRequired,
    imgSrc: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    nombre: PropTypes.string.isRequired,
    kcal: PropTypes.string.isRequired,
    carbs: PropTypes.string.isRequired,
    proteina: PropTypes.string.isRequired,
    grasas: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  isIngredientOpen: PropTypes.bool.isRequired,
  isNutritionBlurred: PropTypes.bool.isRequired,
  onRemove: PropTypes.func,
  isOpen: PropTypes.bool,
};

export default Ingrediente;