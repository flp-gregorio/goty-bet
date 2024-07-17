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
      <div className="bg-fiery bg-cover min-h-screen antialiased">
        {props.children}
      </div>
      <FooterComponent />
    </>
  );
};

export default LayoutSystemComponent;
