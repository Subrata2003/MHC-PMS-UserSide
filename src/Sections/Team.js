import "../index.css";
import { BsLinkedin, BsLink45Deg } from "react-icons/bs";
import subrata from "../Assets/subratabuin.png";
import ankita from "../Assets/ankita.png";
import soura from "../Assets/souraOP.png";
import NavBars from "./navbar";
import Footer from "./footer";

function Team() {
  return (
    <div>
      <NavBars />
      <section className="section-area section-sp3 team-wraper">
        <div className="container">
          <div className="heading-bx text-center">
            <h6 className="title-ext text-secondary">Our Team</h6>
            <h2 className="title">Meet the members</h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-3 col-sm-6 mb-30">
              <div className="team-member">
                <div className="team-media">
                  <img src={subrata} alt="img" />
                </div>
                <div className="team-info">
                  <div className="team-info-comntent">
                    <h4 className="title">Subrata Bhuin</h4>
                    <span className="text-secondary">115001210111</span>
                  </div>
                  <ul className="social-media">
                  
                    <li>
                      <a
                        href="https://www.linkedin.com/in/subratabhuin8918/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <BsLinkedin />
                      </a>
                    </li>
                   
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 mb-30">
              <div className="team-member">
                <div className="team-media">
                  <img src={soura} alt="img" />
                </div>
                <div className="team-info">
                  <div className="team-info-comntent">
                    <h4 className="title">Sourasish Mondal</h4>
                    <span className="text-secondary">11500221053</span>
                  </div>
                  <ul className="social-media">
                  
                    <li>
                      <a
                        href="https://linktr.ee/souraOP"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <BsLink45Deg />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 mb-30">
              <div className="team-member">
                <div className="team-media">
                  <img src={ankita} alt="img" />
                </div>
                <div className="team-info">
                  <div className="team-info-comntent">
                    <h4 className="title">Ankita Dutta</h4>
                    <span className="text-secondary">11500221040</span>
                  </div>
                  <ul className="social-media">
                    
                    <li>
                      <a
                        href="https://www.linkedin.com/in/ankita-dutta007/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <BsLinkedin />
                      </a>
                    </li>
                    
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 mb-30">
              <div className="team-member">
                <div className="team-media">
                  <img src={soura} alt="img" />
                </div>
                <div className="team-info">
                  <div className="team-info-comntent">
                    <h4 className="title">Ayush Tatia</h4>
                    <span className="text-secondary">11500221011</span>
                  </div>
                  <ul className="social-media">
                  
                    <li>
                      <a
                        href="https://linktr.ee/souraOP"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <BsLink45Deg />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Team;
