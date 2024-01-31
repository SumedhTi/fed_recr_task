import { useCallback } from "react";
import "./LandingPage.css";
import { NavLink, Navigate } from "react-router-dom";

const LandingPage = () => {
  const onLogoContainerClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='background']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onHomeText1Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='background']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onAboutText1Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='about']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onSignInTextClick = useCallback(() => {
    <NavLink to='/signin'></NavLink>
  }, []); 

  return (
    <div className="landing-page">
      <section className="home">
        <div className="right-component">
          <div className="background" data-scroll-to="background" />
          <h1 className="lets-connect">Let’s Connect</h1>
          <h1 className="illuminating-the-entrepreneur-container">
            <p className="illuminating-the-entrepreneur">
              <span className="illuminating-the-en">
                <span>{`Illuminating the `}</span>
                <span className="en">EN</span>
              </span>
              <span className="t">T</span>
              <span className="repreneur-in">
                <span className="repreneur">REPRENEUR</span>
                <span>{` in `}</span>
              </span>
            </p>
            <p className="you">
              <span className="you1">
                <span>you.</span>
              </span>
            </p>
          </h1>
          <button className="button">
            <div className="juicy-ones-1">
              <b className="enroll">ENROLL</b>
            </div>
          </button>
        </div>
        <div className="left-component-right-component">
          <img className="left-component" alt="" src="/left-component.svg" />
          <div className="bottom-shade" />
        </div>
        <header className="navbar">
          <div className="glass" />
          <div className="navbar1">
            <div className="logo" onClick={onLogoContainerClick}>
              <img
                className="mascot-icon"
                loading="eager"
                alt=""
                src="/mascot@2x.png"
              />
              <div className="fed-logo-white">
                <h1 className="fed">FED</h1>
              </div>
            </div>
            <div className="links">
              <h3 className="home1" onClick={onHomeText1Click}>
                Home
              </h3>
              <h3 className="about" onClick={onAboutText1Click}>
                About
              </h3>
              <a href='/signin' className="about" onClick={Navigate("/signin")}>
                Sign in
              </a>
            </div>
          </div>
        </header>
      </section>
      <section className="about1" data-scroll-to="about">
        <div className="about-inner">
          <div className="upper-shade-parent">
            <div className="upper-shade" />
            <h1 className="dive-in">Dive In</h1>
            <h1 className="to-the-endless-container">
              <span>{`to the endless `}</span>
              <span className="possibilities">POSSIBILITIES.</span>
            </h1>
          </div>
        </div>
        <div className="right-component-parent">
          <img
            className="right-component-icon"
            loading="eager"
            alt=""
            src="/right-component.svg"
          />
          <div className="frame-child" />
        </div>
        <div className="background-parent">
          <div className="background1" />
          <img
            className="andras-vas-bd7gnnwjbku-unsplas-icon"
            loading="eager"
            alt=""
            src="/andrasvasbd7gnnwjbkuunsplash@2x.png"
          />
        </div>
        <div className="content-frame">
          <div className="content-frame-child" />
          <div className="lorem-ipsum-dolor">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `}</div>
          <b className="inspire">
            <span>Inspire</span>
            <span className="span">{` `}</span>
            <span className="span1">{`   `}</span>
          </b>
        </div>
      </section>
      <section className="footer">
        <div className="background2" />
        <div className="footer-child" />
        <footer className="footer-background">
          <div className="glass1" />
          <div className="home-logo-frame">
            <div className="mascot-instance">
              <div className="f-e-d-text">
                <div className="home2">Home</div>
                <div className="contact-us-text">
                  <div className="home-button">
                    <div className="e-n-r-o-l-lbutton">
                      <div className="logo-frame">
                        <img
                          className="mascot-icon1"
                          alt=""
                          src="/mascot-1@2x.png"
                        />
                        <div className="fed-logo-white1">
                          <h1 className="fed1">FED</h1>
                        </div>
                      </div>
                    </div>
                    <div className="navbar-background">
                      <div className="about2">About</div>
                      <div className="service">Service</div>
                    </div>
                  </div>
                  <div className="contact-us">Contact Us</div>
                </div>
              </div>
              <div className="divider-line">
                <div className="frame-parent">
                  <div className="ellipse-parent">
                    <div className="frame-item" />
                    <b className="li">Li</b>
                  </div>
                  <div className="ellipse-group">
                    <div className="frame-inner" />
                    <b className="gi">Gi</b>
                  </div>
                  <div className="ellipse-container">
                    <div className="ellipse-div" />
                    <b className="ig">Ig</b>
                  </div>
                  <div className="frame-div">
                    <div className="frame-child1" />
                    <b className="tw">Tw</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            className="divider-icon"
            loading="eager"
            alt=""
            src="/divider.svg"
          />
          <div className="copyright-yourname">Copyright @yourname</div>
        </footer>
      </section>
    </div>
  );
};

export default LandingPage;
