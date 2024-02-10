// Components
import Left from "layouts/Header/Left";
import Right from "layouts/Header/Right";

type Props = {};

const Header = (props: Props): JSX.Element => {
  return (
    <div className="grid gap-8 grid-cols-1 lg:grid-cols-[300px_minmax(300px,_1fr)_300px] center self-center border p-2 md:p-4 lg:p-10">
      <Left />
      <div className="border bg-orange p-4 lg:relative">
        <div className="flex justify-between lg:justify-center">
          <button className="block lg:hidden">
            <i className="material-symbols-sharp">menu</i>
          </button>
          <div className="text-4xl font-bold">PULL & BEAR</div>
          <button className="block lg:hidden">
            <i className="material-symbols-sharp">local_mall</i>
          </button>
        </div>
        <div className="mt-4 lg:m-2 flex justify-between gap-4 xl:gap-0 xl:absolute top-2 left-2 right-2">
          <button className="button bg-grey1 px-4 py-2 w-full xl:w-auto">
            FOR HER
          </button>
          <button className="button bg-grey1 px-4 py-2 w-full xl:w-auto">
            FOR HIM
          </button>
        </div>
      </div>
      <Right />
    </div>
  );
};

export default Header;
