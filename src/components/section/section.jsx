import "./section.css";
import section__bootim from "../../constatas/img/section__bottom.png";
import section__top from "../../constatas/img/section__top.png";
import { PrimaryBtn } from "../button/primaryBtn";

export default function Section() {
  return (
    <section className="primary__wrapper__section">
      <div className="container">
        <div className="top__wrapper">
          <div className="top__left">
            <img src={section__bootim} alt="section top" />
          </div>
          <div className="top__right">
            <h2 className="b__title">
              Develop <br /> Without Limits
            </h2>
            <p className="b__body">
              WooCommerce is developer friendly, too. Built with a REST API,
              WooCommerce is scalable and can integrate with virtually any
              service. Design a complex store from scratch, extend a store for a
              client, or simply add a single product to a WordPress site—your
              store, your way.
            </p>

            <PrimaryBtn className="bg-green-400 py-6 rounded-full m-9">
              Read the Documentation
            </PrimaryBtn>
          </div>
        </div>
        <div className="botton__wrapper">
          <div className="bottom__left">
            <h2 className="b__title">
              Know our <br /> Global Community
            </h2>
            <p className="b__body">
              WooCommerce is one of the fastest-growing eCommerce communities.
              We’re proud that the helpfulness of the community and a wealth of
              online resources are frequently cited as reasons our users love
              it. There are 80+ meetups worldwide!
            </p>
            <PrimaryBtn className="bg-green-400 py-6 rounded-full m-9">
              Read the Documentation
            </PrimaryBtn>
          </div>
          <div className="bottom__right">
            <img src={section__top} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
