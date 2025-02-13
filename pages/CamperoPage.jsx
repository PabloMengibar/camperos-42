import Campero from "../components/Campero";
import ingredientesGenerales from "../utils/ingredientes";
import { useState } from "react";
import CustomCampero from "../components/CustomCampero";

const ingredientesPorCampero = {
  carpantita: [
    ingredientesGenerales[14],
    ingredientesGenerales[15],
    ingredientesGenerales[1],
    ingredientesGenerales[2],
    ingredientesGenerales[3],
    ingredientesGenerales[4],
    ingredientesGenerales[5],
    ingredientesGenerales[6],
    ingredientesGenerales[13],
  ],
  "madre-de-dios": [
    ingredientesGenerales[14],
    ingredientesGenerales[1],
    ingredientesGenerales[3],
    ingredientesGenerales[4],
    ingredientesGenerales[5],
    ingredientesGenerales[6],
    ingredientesGenerales[13],
  ],
  "mafalda": [
    ingredientesGenerales[14],
    ingredientesGenerales[3],
    ingredientesGenerales[17],
    ingredientesGenerales[1],
    ingredientesGenerales[12],
    ingredientesGenerales[11],
    ingredientesGenerales[4],
    ingredientesGenerales[5],
    ingredientesGenerales[6],
    ingredientesGenerales[13],
  ],
  "dorado": [
    ingredientesGenerales[14],
    ingredientesGenerales[1],
    ingredientesGenerales[3],
    ingredientesGenerales[2],
    ingredientesGenerales[11],
    ingredientesGenerales[4],
    ingredientesGenerales[5],
    ingredientesGenerales[16],
    ingredientesGenerales[13],
  ],
  "faro": [
    ingredientesGenerales[14],
    ingredientesGenerales[8],
    ingredientesGenerales[1],
    ingredientesGenerales[9],
    ingredientesGenerales[5],
    ingredientesGenerales[10],
    ingredientesGenerales[13],
  ],
};

const CamperosPage = () => {
  const camperosData = [
    {
      id: "carpantita",
      title: "Carpantita",
      descripcion:
        "El Campero Carpantita es el clásico de toda la vida, ese amigo fiel que nunca falla. Con su relleno sencillo, pero reconfortante, es el compañero perfecto para los días solitarios, cuando solo necesitas un bocado honesto que te abrace el alma. Sin pretensiones, sin artificios, siempre ahí cuando lo necesitas.",
      since: "src/assets/img/stickers/since_carpanta.png",
      color: "src/assets/img/fondos/fondo_carpanta.jpg",
      sticker: "src/assets/img/stickers/sticker_carpanta.png",
      textColor: "#002c19",
    },
    {
      id: "madre-de-dios",
      title: "Full Equip",
      descripcion:
        "El Full Equip no es solo un campero, es una experiencia casi mística. Su pan, suave y celestial, es el altar donde se celebra el milagro del sabor. Pero la verdadera revelación llega con la sticker Madre de Dios, un secreto divino custodiado con más celo que la fórmula de la Cangreburguer. Cada bocado es una comunión de sabores únicos, un éxtasis gastronómico que convierte cada comida en un acto de fe. Amen.",
      since: "src/assets/img/stickers/since_MADRE.png",
      color: "src/assets/img/fondos/fondo_MADRE.jpg",
      sticker: "src/assets/img/stickers/sticker_MADRE.png",
      textColor: "#002b39",
    },
    {
      id: "mafalda",
      title: "Mafaldón",
      descripcion:
        "El Mafaldón es el alma de la fiesta, un campero que no pierde su esencia clásica pero se atreve a ir un paso más allá. Con su alioli casero, combina lo tradicional con un toque de diversión, es el compañero ideal para risas compartidas. Perfecto para reuniones con amigos, porque un buen momento siempre sabe mejor entre dos mitades de un campero.",
      since: "src/assets/img/stickers/since_mafalda.png",
      color: "src/assets/img/fondos/fondo_mafalda.jpg",
      sticker: "src/assets/img/stickers/sticker_mafalda.png",
      textColor: "#3c000b",
    },
    {
      id: "dorado",
      title: "Dorado",
      descripcion:
        "El Dorado es puro barrio, castizo y sin rodeos. Un campero auténtico, de esos que saben mejor cuando el sol empieza a salir después de una noche loca. Es el remedio perfecto para el hambre canalla, ese que solo entiende de bocados grandes y sabor sin filtros. Informal, directo y siempre dispuesto a cerrar la juerga con broche de oro.",
      since: "src/assets/img/stickers/since_dorado.png",
      color: "src/assets/img/fondos/fondo_dorado.jpg",
      sticker: "src/assets/img/stickers/sticker_dorado.png",
      textColor: "#002d37",
    },
    {
      id: "faro",
      title: "El Faro",
      descripcion:
        "El Campero Vegano es la prueba de que lo vegano también puede ser intenso y lleno de carácter. Su falafel crujiente y especiado, combinado con la frescura de la lechuga, el tomate y la cebolla morada, se funde con el cheddar vegano y la suavidad de la mayonesa para crear un campero vibrante y equilibrado. Un clásico reinventado que ilumina las noches más largas con puro sabor.",
      since: "src/assets/img/stickers/since_faro.png",
      color: "src/assets/img/fondos/fondo_faro.jpg",
      sticker: "src/assets/img/stickers/sticker_faro.png",
      textColor: "#000d4e",
    },
  ];
  const [isBlur, setIsBlur] = useState(true);
  const toggleBlur = () => {
    setIsBlur(!isBlur);
  };

  return (
    <div className="slider">
      {camperosData.map((campero) => (
        <Campero
          key={campero.id}
          id={campero.id}
          title={campero.title}
          descripcion={campero.descripcion}
          since={campero.since}
          ingredientes={ingredientesPorCampero[campero.id]}
          color={campero.color}
          sticker={campero.sticker}
          isNutritionBlurred={isBlur}
          toggleBlur={toggleBlur}
          textColor={campero.textColor}
        />
      ))}
      <CustomCampero
        ingredientesGenerales={ingredientesGenerales}
        isNutritionBlurred={isBlur}
        toggleBlur={toggleBlur}
      />
    </div>
  );
};

export default CamperosPage;