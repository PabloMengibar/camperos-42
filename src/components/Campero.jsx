import { useState } from "react";
import PropTypes from "prop-types";
import "./Campero.css";
import Ingrediente from "./Ingrediente";

const Campero = ({ id, title, descripcion, since, ingredientes, color, sticker, isNutritionBlurred, toggleBlur, textColor }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const totalKcal = ingredientes.reduce((total, ingrediente) => total + parseInt(ingrediente.kcal, 10), 0);
  const totalCarbs = ingredientes.reduce((total, ingrediente) => total + parseFloat(ingrediente.carbs), 0);
  const totalProteina = ingredientes.reduce((total, ingrediente) => total + parseFloat(ingrediente.proteina), 0);
  const totalGrasas = ingredientes.reduce((total, ingrediente) => total + parseFloat(ingrediente.grasas), 0);

  return (
    <section
      id={id}
      className={`campero-section ${isOpen ? "open" : ""} campero-bg`}
      style={{ backgroundImage: `url(${color})`, color: textColor }}
    >
      <div className="nutrition-toggle-button" onClick={(e) => { e.stopPropagation(); toggleBlur(); }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill={isNutritionBlurred ? "#333" : "#fff"}
        >
          <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zm0 13c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7z" />
        </svg>
        <span>{isNutritionBlurred ? "Ver valores" : "Ocultar valores"}</span>
      </div>

      <h1 className="title" style={{ marginLeft: isOpen ? "30%" : "0%" }}>{title}</h1>

      <div className="campero" onClick={toggleOpen}>
        {ingredientes.map((ingrediente, index) => (
          <Ingrediente
            key={index}
            ingrediente={ingrediente}
            index={index}
            isIngredientOpen={isOpen}
            isNutritionBlurred={isNutritionBlurred}
          />
        ))}
      </div>

      <p className="descripcion">{descripcion}</p>
      <img src={since} className="since" alt="desde que año" />
      <img src={sticker} className="sticker" alt="sticker" />

      <div className="nutritional-info-sidebar" style={{ display: isOpen ? "block" : "none", filter: isNutritionBlurred ? "blur(3px)" : "none" }}>
        <h3>Valor Nutricional</h3>
        <ul>
          <li><strong>Total Kcal:</strong> {totalKcal}</li>
          <li><strong>Total Carbs:</strong> {totalCarbs.toFixed(2)}g</li>
          <li><strong>Total Proteínas:</strong> {totalProteina.toFixed(2)}g</li>
          <li><strong>Total Grasas:</strong> {totalGrasas.toFixed(2)}g</li>
        </ul>
      </div>
    </section>
  );
};

Campero.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  descripcion: PropTypes.string.isRequired,
  since: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  sticker: PropTypes.string.isRequired,
  isNutritionBlurred: PropTypes.bool.isRequired,
  toggleBlur: PropTypes.func.isRequired,
  textColor: PropTypes.string.isRequired,
  ingredientes: PropTypes.arrayOf(
    PropTypes.shape({
      imgSrc: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      nombre: PropTypes.string.isRequired,
      kcal: PropTypes.string.isRequired,
      carbs: PropTypes.string.isRequired,
      proteina: PropTypes.string.isRequired,
      grasas: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Campero;