import { ReactNode } from "react";
import "./splitPane.css";
interface ISplitPane {
  left?: ReactNode;
  right?: ReactNode;
}
export const Contacts = () => {
  return <div className="Contacts" />;
};

export const Chat = () => {
  return <div className="Chat" />;
};

export const SplitPane = (props: ISplitPane) => {
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">{props.left}</div>
      <div className="SplitPane-right">{props.right}</div>
    </div>
  );
};
