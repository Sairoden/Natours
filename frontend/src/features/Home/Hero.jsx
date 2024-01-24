// ASSETS
import logo from "../../assets/img/logo-white.png";

function Hero() {
  return (
    <header className="header">
      <div className="header__logo-box">
        <img src={logo} alt="Logo" className="header__logo" />
      </div>

      <div className="header__text-box">
        <h1 className="heading-primary">
          <span className="heading-primary--main"> Horizon </span>
          <span className="heading-primary--sub">
            Your Gateway to Adventure
          </span>
        </h1>

        <a
          href="https://sairoden-natours.herokuapp.com/"
          className="btn btn--white btn--animated"
        >
          Discover our tours
        </a>
      </div>
    </header>
  );
}

export default Hero;
