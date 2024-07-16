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
      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 min-h-[90vh]">
        {props.children}
      </div>
      <FooterComponent />
    </>
  );
};

export default LayoutSystemComponent;
