// STYLES
import { CiGlobe, CiCompass1, CiMap, CiHeart } from "react-icons/ci";

function Features() {
  return (
    <section className="section-features">
      <div className="row">
        <div className="col-1-of-4">
          <div className="feature-box">
            <CiGlobe className="feature-box__icon " height={24} width={24} />
            <h3 className="heading-tertiary u-margin-bottom-small">
              Explore the world
            </h3>
            <p className="feature-box__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus, quidem.
            </p>
          </div>
        </div>

        <div className="col-1-of-4">
          <div className="feature-box">
            <CiCompass1 className="feature-box__icon" />
            <h3 className="heading-tertiary u-margin-bottom-small">
              Meet nature
            </h3>
            <p className="feature-box__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus, quidem.
            </p>
          </div>
        </div>

        <div className="col-1-of-4">
          <div className="feature-box">
            <CiMap className="feature-box__icon" />
            <h3 className="heading-tertiary u-margin-bottom-small">
              Find your way
            </h3>
            <p className="feature-box__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus, quidem.
            </p>
          </div>
        </div>

        <div className="col-1-of-4">
          <div className="feature-box">
            <CiHeart className="feature-box__icon" />
            <h3 className="heading-tertiary u-margin-bottom-small">
              Live a healthier life
            </h3>
            <p className="feature-box__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus, quidem.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
