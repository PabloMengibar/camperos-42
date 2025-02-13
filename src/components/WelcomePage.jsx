import "./Welcome.css";

const imagePaths = [
  "img/slider/1.png",
  "img/slider/2.png",
  "img/slider/3.png",
  "img/slider/4.png",
  "img/slider/5.png",
  "img/slider/6.png",
  "img/slider/7.png",
  "img/slider/8.png"
];

const duplicatedImages = [...imagePaths, ...imagePaths];

const Welcome = () => {
    return (
      <section className="welcome-container">
        <div className="image-slider">
          <div className="slider-track">
            {duplicatedImages.map((src, index) => (
              <img key={index} src={src} alt={`Campero ${index + 1}`} className="slider-image" />
            ))}
          </div>
        </div>
        <div className="welcome-content">
          <h1 className="welcome-title">Bienvenidos a Camperos 42</h1>
  
          <div className="about-us-container">
            <div className="about-us-content">
              <div className="about-us-photo">
                <img src="img/nosotros/emilio.png" alt="Emilio" />
              </div>
              <div className="about-us-text">
                <h2>Semos Emilio y Pablo</h2>
                <p>
                Los camperos son mucho más que una mera comida callejera, son un símbolo y un orgullo de la identidad malagueña, nuestra identidad. Nos han acompañado y nos acompañarán en buenos y malos momentos. Es por ese cariño que le tenemos que hemos querido rendirle homenaje con esta web.                </p>
              </div>
              <div className="about-us-photo">
                <img src="img/nosotros/pablo.png" alt="Pablo" />
              </div>

            </div>
          </div>
  
          <p className="welcome-text">
            Explora nuestra selección de camperos clásicos y personaliza el tuyo propio.
          </p>
          <p className="welcome-scroll-text">↓ Desplázate para ver los camperos ↓</p>
        </div>
      </section>
    );
  };
  
  export default Welcome;
  
