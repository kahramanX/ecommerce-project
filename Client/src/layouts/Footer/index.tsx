import { Link } from "react-router-dom";

// datas
import { footerData, footerSocialIcons } from "layouts/Footer/data";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="grid p-2 md:p-4 lg:p-10 gap-8 grid-cols-1 lg:grid-cols-4">
      <div className="layered-box-shadow bg-orange p-5 flex flex-col justify-between">
        <div>
          <div className="font-black text-4xl mb-4">PULL&BEAR</div>
          <div className="text-xs font-bold">An ever young community</div>
        </div>

        <div className="flex gap-4 mt-6">
          {footerSocialIcons.map((social, index) => {
            return (
              <>
                <Link
                  key={index}
                  className="layered-box-shadow bg-grey1 p-0.5"
                  to={"/" + social.link}
                >
                  {social.icon}
                </Link>
              </>
            );
          })}
        </div>
      </div>
      {footerData.map((footer, index) => {
        return (
          <>
            <div
              key={index}
              className={`layered-box-shadow ${footer.color} p-5`}
            >
              <div className="font-semibold text-2xl mb-4">{footer.title}</div>
              <div className="flex flex-col">
                {footer.links.map((link, index2) => {
                  return (
                    <>
                      <Link
                        key={index2}
                        className="font-bold mb-2 text-xs"
                        to={"#"}
                      >
                        {link}
                      </Link>
                    </>
                  );
                })}
              </div>
            </div>
          </>
        );
      })}
    </footer>
  );
};

export default Footer;
