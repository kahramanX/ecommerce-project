import { Link } from "react-router-dom";

// datas
import { footerData, footerSocialIcons } from "layouts/Footer/data";

// Components
import Newsletter from "./Newsletter";
import Text from "shared/Text";

type Props = {};

const Footer = (props: Props) => {
  return (
    <>
      <Newsletter />

      <footer className="grid p-2 md:p-4 lg:p-10 gap-8 grid-cols-1 lg:grid-cols-4">
        <div className="layered-box-shadow bg-orange p-5 flex flex-col justify-between">
          <div>
            <Text
              ElementTag="div"
              fontSize="text-4xl"
              fontColor="text-grey6"
              fontWeight="font-black"
              extraClass="mb-4"
              textContent="PULL&BEAR"
            />
            <Text
              ElementTag="div"
              fontSize="text-sm"
              fontColor="text-grey6"
              fontWeight="font-bold"
              textContent="An ever young community"
            />
          </div>

          <div className="flex gap-4 mt-6">
            {footerSocialIcons.map((social, index) => {
              return (
                <Link
                  key={index}
                  className="layered-box-shadow bg-grey1 p-0.5"
                  to={"/" + social.link}
                >
                  {social.icon}
                </Link>
              );
            })}
          </div>
        </div>
        {footerData.map((footer, index) => {
          return (
            <div key={index} className={`layered-box-shadow ${footer.color} p-5`}>
              <Text
                ElementTag="div"
                fontSize="text-2xl"
                fontColor="text-grey6"
                fontWeight="font-semibold"
                extraClass="mb-4"
                textContent={footer.title}
              />
              <div className="flex flex-col">
                {footer.links.map((link, index2) => {
                  return (
                    <Link key={index2} className="font-bold mb-2 text-sm" to={"#"}>
                      {link}
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </footer>
    </>
  );
};

export default Footer;
