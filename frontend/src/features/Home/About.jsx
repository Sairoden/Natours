// ASSETS
import nat1 from "../../assets/img/nat-1.jpg";
import nat2 from "../../assets/img/nat-2.jpg";
import nat3 from "../../assets/img/nat-3.jpg";

function About() {
  return (
    <section className="section-about">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">
          Exciting tours for adventurous people
        </h2>
      </div>

      <div className="row">
        <div className="col-1-of-2">
          <h3 className="heading-tertiary u-margin-bottom-small">
            You're going to fall in love with nature
          </h3>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
            nostrum, recusandae cumque optio et unde ullam voluptas accusamus
            necessitatibus maxime nobis repellendus explicabo modi in.
            Reprehenderit expedita exercitationem laborum facere.
          </p>

          <h3 className="heading-tertiary u-margin-bottom-small">
            Live adventures like you never have before
          </h3>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
            nostrum, recusandae cumque optio et unde ullam voluptas accusamus
            necessitatibus maxime nobis repellendus explicabo modi in.
            Reprehenderit expedita exercitationem laborum facere.
          </p>

          <a
            href="https://sairoden-natours.herokuapp.com/"
            className="btn-text"
          >
            Learn more &rarr;
          </a>
        </div>
        <div className="col-1-of-2">
          <div className="composition">
            <img
              alt="Photo 1"
              className="composition__photo composition__photo--p1"
              src={nat1}
            />

            <img
              alt="Photo 2"
              className="composition__photo composition__photo--p2"
              src={nat2}
            />

            <img
              alt="Photo 3"
              className="composition__photo composition__photo--p3"
              src={nat3}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
