import COD from '../assets/images/cod.png'
import FreeReturn from '../assets/images/freeReturn.avif'
import FreeShipping from '../assets/images/freeShipping.png'

const ServiceSection = () => {
  return (
    <section className="serviceFeatureSection py-3 py-md-5">
      <div className="container">
        <div className="serviceFeature">
          <ul>
            <li className="text-center">
              <img src={COD} />
              <span className="text-md-dark fs-7 d-block">
                Pernia section of 24 X 7 Customer support{" "}
              </span>
            </li>

            <li className="text-center">
              <img src={FreeReturn} />
              <span className="text-md-dark fs-7 d-block">500+ Designers</span>
            </li>

            <li className="text-center">
              <img src={FreeShipping} />
              <span className="text-md-dark fs-7 d-block">Shipping Worldwide</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ServiceSection
