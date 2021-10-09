import React from "react";
import "./footer.scss";

import { useForm } from "react-hook-form";
import { IconLanguages } from "components/IconsLanguages";
import { useIsMobile } from "hooks";

export const Footer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {};

  return (
    <section className="footer" id="footer">
      <div className="footer__title">Contact with me : </div>
      <div className="container">
        <form className="form-group" onSubmit={handleSubmit(onSubmit)}>
          <div className="col-xl-6 col-md-8 m-auto">
            <div className="input-group flex-wrap d-flex">
              <label htmlFor="content-email" className="col-12 col-md-3">
                Your Email :
              </label>
              <div className="col-12 d-flex col-md-9 justify-content-center">
                <div className="col-md-9">
                  <input
                    id="content-email"
                    type="email"
                    className="form-control"
                    placeholder="example@example.com"
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Send
                </button>
              </div>
            </div>
          </div>
        </form>

        <div className="socials">
          <IconLanguages
            href="https://github.com/john1805"
            language={"facebook"}
            className="socials-item"
          />
          <IconLanguages language={"github"} className="socials-item" />
          <IconLanguages language={"linkedin"} className="socials-item" />
        </div>
      </div>
      <div className="copyright">
        Copyright ©2021 All rights reserved by John
        <br />
        <a href="https://github.com/john1805/page-profile">Source Code</a>
      </div>
    </section>
  );
};
