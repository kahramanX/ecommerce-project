// Components
import Account from "layouts/Header/Right/Account";
import ShoppingBag from "layouts/Header/Right/ShoppingBag";

type Props = {};

const Right = (props: Props) => {
  return (
    <div className="border bg-blue hidden lg:flex justify-center flex-col items-center p-4">
      <Account /> <ShoppingBag />
    </div>
  );
};

export default Right;
