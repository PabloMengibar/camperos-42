import { useState } from "react";
import PropTypes from "prop-types";
import Ingrediente from "./Ingrediente";
import "./Campero.css";
import "./CustomCampero.css";

const CustomCampero = ({ ingredientesGenerales, isNutritionBlurred, toggleBlur }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedIngredients, setSelectedIngredients] = useState([]);
    const [customCampero, setCustomCampero] = useState({
      id: "mi-campero",
      title: "",
      descripcion: "",
      since: "src/assets/img/stickers/since_maker.png",
      color: "src/assets/img/fondos/fondo_maker.jpg",
      sticker: "src/assets/img/stickers/sticker_maker.png",
    });
    const [showCustomizer, setShowCustomizer] = useState(false);
  
    const toggleOpen = () => setIsOpen(!isOpen);
  
    const handleIngredientSelect = (ingrediente) => {
      setSelectedIngredients((prev) => [...prev, ingrediente]);
    };
  
    const handleRemoveIngredient = (ingredienteId) => {
        setSelectedIngredients((prev) => {
          const index = prev.findIndex((i) => i.id === ingredienteId);
          if (index !== -1) {
            const newIngredients = [...prev];
            newIngredients.splice(index, 1);
            return newIngredients;
          }
          return prev;
        });
      };
      
    const toggleCustomizer = () => setShowCustomizer(!showCustomizer);
  
    const handleCustomCamperoChange = (field, value) => {
      setCustomCampero((prev) => ({
        ...prev,
        [field]: value,
      }));
    };
  
    const totalKcal = selectedIngredients.reduce(
      (total, ingrediente) => total + parseInt(ingrediente.kcal, 10),
      0
    );
    const totalCarbs = selectedIngredients.reduce(
      (total, ingrediente) => total + parseFloat(ingrediente.carbs),
      0
    );
    const totalProteina = selectedIngredients.reduce(
      (total, ingrediente) => total + parseFloat(ingrediente.proteina),
      0
    );
    const totalGrasas = selectedIngredients.reduce(
      (total, ingrediente) => total + parseFloat(ingrediente.grasas),
      0
    );
  
    return (
      <section
        id={customCampero.id}
        className={`campero-section ${isOpen ? "open" : ""} campero-bg`}
        style={{ backgroundImage: `url(${customCampero.color})` }}
      >
        <button
          className="customize-toggle"
          onClick={toggleCustomizer}
          style={{
            position: "absolute",
            top: "20px",
            left: "20px",
            zIndex: 1000,
          }}
        >
          {showCustomizer ? "✕" : "⚙️"}
        </button>
  
        {showCustomizer && (
          <div className="customizer-panel">
            <div className="customizer-content">
              <input
                type="text"
                placeholder="Nombre del campero"
                value={customCampero.title}
                onChange={(e) => handleCustomCamperoChange("title", e.target.value)}
                className="customizer-input"
              />
              <textarea
                placeholder="Descripción del campero"
                value={customCampero.descripcion}
                onChange={(e) => handleCustomCamperoChange("descripcion", e.target.value)}
                className="customizer-textarea"
              />
              <div className="ingredients-grid">
                {ingredientesGenerales.map((ingrediente) => (
                  <div
                    key={ingrediente.id}
                    className="ingredient-option"
                    onClick={() => handleIngredientSelect(ingrediente)}
                  >
                    <img
                      src={ingrediente.imgSrc}
                      alt={ingrediente.nombre}
                      className="ingredient-preview"
                    />
                    <span>{ingrediente.nombre}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
  
        <div
          className="nutrition-toggle-button"
          onClick={(e) => {
            e.stopPropagation();
            toggleBlur();
          }}
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            background: isNutritionBlurred ? "#ffcc00" : "#00b300",
            border: "none",
            cursor: "pointer",
            padding: "10px 15px",
            borderRadius: "5px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill={isNutritionBlurred ? "#333" : "#fff"}
            style={{ marginRight: "8px" }}
          >
            <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zm0 13c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7z" />
          </svg>
          <span
            style={{
              color: isNutritionBlurred ? "#333" : "#fff",
              fontWeight: "bold",
              fontSize: "14px",
            }}
          >
            {isNutritionBlurred ? "Ver valores" : "Ocultar valores"}
          </span>
        </div>
  
        <h1
          className="title"
          style={{
            marginLeft: isOpen ? "550px" : "0px",
          }}
        >
          {customCampero.title || "Personaliza tu Campero"}
        </h1>
        <div className="campero" onClick={toggleOpen}>
          {selectedIngredients.map((ingrediente, index) => (
            <Ingrediente
              key={ingrediente.id}
              ingrediente={ingrediente}
              index={index}
              isIngredientOpen={isOpen}
              isNutritionBlurred={isNutritionBlurred}
              onRemove={() => handleRemoveIngredient(ingrediente.id)}
              isOpen={isOpen}
            />
          ))}
        </div>
        <p className="descripcion">{customCampero.descripcion}</p>
        <img
          src={customCampero.since}
          className="since"
          alt="desde que año"
        />
        <img
          src={customCampero.sticker}
          className="sticker"
          alt="sticker"
        />
        <div
          className="nutritional-info-sidebar"
          style={{
            display: isOpen ? "block" : "none",
            filter: isNutritionBlurred ? "blur(3px)" : "none",
          }}
        >
          <h3>Valor Nutricional</h3>
          <ul>
            <li>
              <strong>Total Kcal:</strong> {totalKcal}
            </li>
            <li>
              <strong>Total Carbs:</strong> {totalCarbs.toFixed(2)}g
            </li>
            <li>
              <strong>Total Proteínas:</strong> {totalProteina.toFixed(2)}g
            </li>
            <li>
              <strong>Total Grasas:</strong> {totalGrasas.toFixed(2)}g
            </li>
          </ul>
        </div>
      </section>
    );
  };
  
  CustomCampero.propTypes = {
    ingredientesGenerales: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        nombre: PropTypes.string.isRequired,
        imgSrc: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
        kcal: PropTypes.string.isRequired,
        carbs: PropTypes.string.isRequired,
        proteina: PropTypes.string.isRequired,
        grasas: PropTypes.string.isRequired,
      })
    ).isRequired,
    isNutritionBlurred: PropTypes.bool.isRequired,
    toggleBlur: PropTypes.func.isRequired,
  };
  
  export default CustomCampero;