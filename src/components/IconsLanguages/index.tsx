import React, { useRef } from "react";
export type typeLanguages =
  | "javascript"
  | "html5"
  | "css3"
  | "typescript"
  | "angularjs"
  | "react"
  | "cplusplus"
  | "c"
  | "java"
  | "react"
  | "bootstrap"
  | "golang"
  | "python"
  | "dart"
  | "firebase"
  | "nodejs"
  | "heroku"
  | "mysql"
  | "googlecloud"
  | "express"
  | "nestjs"
  | "github"
  | "linkedin"
  | "facebook"
  | "tensorflow";
interface IconLanguagesProps {
  language: typeLanguages;
  className?: string;
  href?: string;
}
export const IconLanguages = (props: IconLanguagesProps) => {
  const { language, className, href } = props;
  const classNames = className || "";

  return (
    <React.Fragment>
      <a href={href} className={classNames}>
        <i title={language} className={`devicon-${language}-plain colored`} />
      </a>
    </React.Fragment>
  );
};
