import CardComponent from '../../components/CardComponent';
import FooterComponent from '../../components/FooterComponent';

const Bet = () => {
    return (
        <>
        <div className='h-full w-full bg-black'>
          <div className="w-8/12 grid grid-cols-3 gap-3 m-auto">
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
          </div>
        </div>
          <FooterComponent />
        </>
    );
};

export default Bet;

