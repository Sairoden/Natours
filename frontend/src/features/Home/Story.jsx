// ASSETS
import video1 from "../../assets/img/video.mp4";
import video2 from "../../assets/img/video.webm";
import story1 from "../../assets/img/nat-8.jpg";
import story2 from "../../assets/img/nat-9.jpg";

function Story() {
  return (
    <section className="section-stories">
      <div className="bg-video">
        <video className="bg-video__content" autoPlay muted loop>
          <source src={video1} type="video/mp4" />
          <source src={video2} type="video/webm" />
          Your browser is not supported!
        </video>
      </div>

      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">We make people genuinely happy</h2>
      </div>

      <div className="row">
        <div className="story">
          <figure className="story__shape">
            <img src={story1} alt="Person on a tour" className="story__img" />
            <figcaption className="story__caption">Mary Smith</figcaption>
          </figure>
          <div className="story__text">
            <h3 className="heading-tertiary u-margin-bottom-small">
              I had the best week ever with my family
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              tempore quod quia quibusdam earum, sed repudiandae iure molestias?
              Eius animi maxime molestiae illum alias perferendis quo
              voluptatibus eaque veritatis corporis.
            </p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="story">
          <figure className="story__shape">
            <img src={story2} alt="Person on a tour" className="story__img" />
            <figcaption className="story__caption">Jack Wilson</figcaption>
          </figure>
          <div className="story__text">
            <h3 className="heading-tertiary u-margin-bottom-small">
              WOW! My life is completely different now
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Aspernatur incidunt repellat quaerat minima perferendis nulla
              impedit blanditiis tenetur suscipit veniam eos quasi quidem
              possimus omnis porro nam, fugiat officia ad explicabo. Neque
              deserunt obcaecati excepturi rerum, esse vel expedita dolores qui
              blanditiis sit tenetur non consectetur unde inventore provident
              ad.
            </p>
          </div>
        </div>
      </div>

      <div className="u-center-text u-margin-top-huge">
        <a href="https://sairoden-natours.herokuapp.com/" className="btn-text">
          Read all stories &rarr;
        </a>
      </div>
    </section>
  );
}

export default Story;
