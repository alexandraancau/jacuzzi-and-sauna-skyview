import heroImage from '../assets/hero.jpg'
function Hero() {
  return (
<section
  className="hero"
  style={{
    backgroundImage: `url(${heroImage})`,
  }}
>
  <div className="overlay">

    <div className="hero-content">

      <h1>Jacuzzi & Sauna Skyview</h1>

      <p>
        Un refugiu privat în Cluj-Napoca...
      </p>

      <button>
        Verifică disponibilitatea
      </button>

    </div>

  </div>
</section>
  )
}

export default Hero