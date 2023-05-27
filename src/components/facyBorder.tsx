import { ReactNode } from "react";
import "./facyBorder.css";
interface IFacyBorder {
  color?: string;
  children?: ReactNode;
}
export const FacyBorder = (props: IFacyBorder) => {
  return (
    <div className={"FancyBorder FancyBorder-" + props.color}>
      {props.children}
    </div>
  );
};

export const Dialog = (props: any) => {
  return (
    <FacyBorder color="blue">
      <h1 className="Dialog-title">{props.title}</h1>
      <p className="Dialog-message">{props.message}</p>
    </FacyBorder>
  );
};
