import { ReactNode } from "react";
import FooterComponent from "../FooterComponent";
import HeaderComponent from "../HeaderComponent";

interface Props {
  children: ReactNode;
}

const LayoutComponent = (props: Props) => {
  return (
    <>
      <HeaderComponent />
      <div>{props.children}</div>
      <FooterComponent />
    </>
  );
};

export default LayoutComponent;
