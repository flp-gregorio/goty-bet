import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ButtonComponent from "../../components/ButtonComponent";

const Home = () => {
  const [countdown, setCountdown] = useState("");

  useEffect(() => {
    const calculateCountdown = () => {
      const targetDate = new Date("2024-12-12 20:00:00 GMT-0300");
      const now = new Date();
      const timeDifference = targetDate.getTime() - now.getTime();

      if (timeDifference > 0) {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        setCountdown(days.toString());
      } else {
        setCountdown("The Oscars are happening right now!");
      }
    };

    calculateCountdown();

    const countdownInterval = setInterval(calculateCountdown, 1000);

    return () => {
      clearInterval(countdownInterval);
    };
  }, []);

  return (
    <div className="bg-zinc-950 flex justify-center items-center h-screen">
      <div className="w-1/2 h-screen hidden lg:block">
        <img
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0c228eac-01a7-4410-892f-c9128f0141e6/df1x7oe-2a99051d-6df8-4e10-8667-49e3b5a648ce.png/v1/fill/w_1191,h_671,q_70,strp/malenia_elden_ring_by_knotshoxtm_df1x7oe-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIxIiwicGF0aCI6IlwvZlwvMGMyMjhlYWMtMDFhNy00NDEwLTg5MmYtYzkxMjhmMDE0MWU2XC9kZjF4N29lLTJhOTkwNTFkLTZkZjgtNGUxMC04NjY3LTQ5ZTNiNWE2NDhjZS5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.eVdd_8ZThJvQkDKxaHJWpIsAwRM3RsIVDx4ROSFgufA"
          alt="Placeholder Image"
          className="object-cover w-full h-full"
        />
      </div>
      <div className=" sm:20 w-full lg:w-1/2 uppercase font-montserrat">
        <div className="mt-6 text-center">
          <div className="container px-5 mx-auto flex flex-wrap">
            <div className="w-full sm:p-4 mb-6 ">
              <h1 className="font-bold text-3xl text-gray-100 tracking-wider ">
                The Game Awards are happening in:
              </h1>
              <h2 className="font-bold text-[200px] font-barlow text-gray-100 ">
                {countdown}
              </h2>
              <p className="text-gray-100 text-xl font-bold tracking-wider -mt-10 mb-10">
                Days
              </p>
              <div className="w-60 mx-auto font-bold tracking-wider">
                <Link to={"/nominees"}>
                  <ButtonComponent text="Vote" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
