
import { Youtube, Instagram, ArrowRight } from "lucide-react";
import logo from "./assets/Rev & Reveal Secondary Logo(1).png";
import bg from "./assets/5.jpeg";
import f1 from "./assets/4.jpeg";
import f2 from "./assets/3.jpeg";
import f3 from "./assets/6.jpeg";
import f4 from "./assets/7.jpeg";
import f5 from "./assets/8.jpeg";
import merch1 from "./assets/Screenshot 2026-05-17 at 23.00.36.png";
import merch2 from "./assets/Screenshot 2026-05-17 at 23.00.10.png";

const features = [f1,f2,f3,f4,f5];
const merch = [merch1, merch2];

export default function App(){
  return (
    <div>
      <header className="navbar">
        <img src={logo} className="nav-logo" />

        <nav className="desktop-nav">
          <a href="#features">Features</a>
          <a href="#shop">Shop</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="mobile-socials">
          <a href="https://www.youtube.com/@RevandReveal_SA" target="_blank">
            <Youtube size={20}/>
          </a>

          <a href="https://www.instagram.com/revandreveal_sa/" target="_blank">
            <Instagram size={20}/>
          </a>
        </div>
      </header>

      <section className="hero">
        <img src={bg} className="hero-bg"/>
        <div className="hero-overlay"></div>
          <br></br>
        <div className="hero-content">
          <div className="pill">SOUTH AFRICAN AUTOMOTIVE CULTURE</div>
          <h1>REV & REVEAL</h1>
          <p>Where Passion Meets Performance.</p>

          <div className="hero-buttons">
            <a href="https://www.youtube.com/@RevandReveal_SA" target="_blank">
              WATCH NOW
            </a>

            <a href="#features" className="secondary">
              EXPLORE
            </a>
          </div>

          <div className="hero-stats">
            <div><strong>18+</strong><span>Features</span></div>
            <div><strong>SA</strong><span>Car Culture</span></div>
            <div><strong>REV</strong><span>Community</span></div>
          </div>
        </div>
      </section>

      <section className="features" id="features">
        <div className="heading">
          <span>LATEST FEATURES</span>
          <h2>WATCH OUR LATEST EPISODES</h2>
        </div>

        <div className="feature-grid">
          {features.map((item,index)=>(
            <div className="feature-card" key={index}>
              <img src={item}/>
              <div className="feature-info">
                <h3>Featured Interviews</h3>
                <p>Success Stories, builds, lifestyle and performance conversations.</p>

                <a href="https://www.youtube.com/@RevandReveal_SA" target="_blank">
                  WATCH <ArrowRight size={18}/>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="shop" id="shop">
        <div className="heading dark">
          <span>OFFICIAL MERCH</span>
          <h2>REV & REVEAL APPAREL</h2>
        </div>

        <div className="shop-grid">
          {merch.map((item,index)=>(
            <div className="shop-card" key={index}>
              <img src={item}/>
              <div className="shop-content">
                <h3>Club Members Edition Tee</h3>
                <p>Premium automotive streetwear inspired by SA car culture.</p>

                <a href="https://wa.me/27748393465" target="_blank">
                  PRE ORDER
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="about" id="about">
        <div className="heading">
          <span>ABOUT US</span>
          <h2>BUILT FOR CAR CULTURE</h2>
        </div>

        <div className="about-card">
          <p>
          REV & REVEAL is an automotive entertainment platform built for enthusiasts who live for performance, style, storytelling and automotive culture.
          </p>

          <p>
          From powerful builds to cinematic interviews, REV & REVEAL captures the emotion and energy behind every machine and every owner.
          </p>

          <p>
          More than a show it’s a movement driven by passion, community and performance.
          </p>
        </div>
      </section>


<section className="featured-cta">
  <div className="featured-cta-card">
    <span>BE PART OF THE CULTURE</span>
    <h2>WANT TO BE FEATURED ON OUR CHANNEL?</h2>
    <p>
      Got a unique build, inspiring story, workshop, brand or automotive lifestyle worth showcasing?
      REV & REVEAL is always looking for passionate enthusiasts to feature.
    </p>

    <a href="#contact">
      CONTACT US
    </a>
  </div>
</section>

      <section className="movement" id="contact">
        <div className="movement-card">
          <span>JOIN THE MOVEMENT</span>
          <h2>FOLLOW REV & REVEAL</h2>

          <div className="socials">
            <a href="https://www.youtube.com/@RevandReveal_SA" target="_blank">
              <Youtube size={30}/>
              YouTube
            </a>

            <a href="https://www.instagram.com/revandreveal_sa/" target="_blank">
              <Instagram size={30}/>
              Instagram
            </a>
          </div>

          <div className="contact-box">
            <p>revandreveal_sa</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <img src={logo}/>
        <p>© 2026 REV & REVEAL — Driven By Passion.</p>
      </footer>
    </div>
  )
}
