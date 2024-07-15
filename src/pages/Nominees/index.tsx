import CardComponent from "../../components/CardComponent";
import LayoutComponent from "../../components/Layouts/LayoutComponent";

const Bet = (props: { title: string; }) => {
  document.title = props.title;
  return (
    <LayoutComponent>
      <div className="h-full w-full bg-black">
        <div className="w-8/12 grid grid-cols-3 gap-3 m-auto">
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
        </div>
      </div>
    </LayoutComponent>
  );
};

export default Bet;
