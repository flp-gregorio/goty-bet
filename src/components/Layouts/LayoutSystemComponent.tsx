import { ReactNode } from "react";
import FooterComponent from "../FooterComponent";
import HeaderComponent from "../HeaderComponent";

interface Props {
  children: ReactNode;
}

const LayoutSystemComponent = (props: Props) => {
  return (
    <>
      <HeaderComponent />
      <div>{props.children}</div>
      <FooterComponent />
    </>
  );
};

export default LayoutSystemComponent;
