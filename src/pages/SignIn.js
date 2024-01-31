import { useCallback } from "react";
import "./SignIn.css";

const SignIn = () => {
  const onSignInTextClick = useCallback(() => {
    // Please sync "Form Page" to the project
  }, []);

  return (
    <div className="sign-in">
      <div className="sign-in1">
        <form className="modal-background">
          <img
            className="modal-background-icon"
            alt=""
            src="/modal-background.svg"
          />
          <div className="text-welcome-back-wrapper">
            <div className="text-welcome-back">
              <h1 className="hello">Hello !</h1>
              <h1 className="welcome-back">welcome back</h1>
            </div>
          </div>
          <div className="frame-user-input-parent">
            <input
              className="frame-user-input"
              placeholder="enter Username"
              type="text"
            />
            <div className="text-forgot-password-parent">
              <input
                className="text-forgot-password"
                placeholder="enter password"
                type="text"
              />
              <div className="forgot-password">forgot password ?</div>
            </div>
          </div>
          <div className="frame-no-account">
            <button className="button-create-account">
              <div className="sign-in2" onClick={onSignInTextClick}>
                sign in
              </div>
            </button>
            <div className="or-line">
              <img
                className="line-4-stroke"
                loading="eager"
                alt=""
                src="/line-4-stroke.svg"
              />
              <div className="or-continue-with">or continue with</div>
              <img
                className="line-5-stroke"
                loading="eager"
                alt=""
                src="/line-5-stroke.svg"
              />
            </div>
          </div>
          <div className="facebook-logo">
            <button className="login-brands">
              <div className="login-brands-child" />
              <img
                className="flat-color-iconsgoogle"
                alt=""
                src="/flatcoloriconsgoogle.svg"
              />
            </button>
            <button className="login-brands1">
              <div className="login-brands-item" />
              <img
                className="logosfacebook-icon"
                alt=""
                src="/logosfacebook.svg"
              />
            </button>
            <button className="login-brands2">
              <div className="login-brands-inner" />
              <img
                className="ionlogo-apple-icon"
                alt=""
                src="/ionlogoapple.svg"
              />
            </button>
          </div>
          <div className="sign-up-calls">
            <div className="dont-have-an">don’t have an account ?</div>
            <div className="create-account">create account !</div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
