import { Link } from "react-router-dom";

type Props = {};

let footerData = [
  {
    title: "HELP",
    links: [
      "Frequently asked questions",
      "My Orders",
      "How to return items",
      "Processing a return",
      "Delivery",
      "Language & Region",
    ],
    color: "bg-violet",
  },
  {
    title: "BUSINESS",
    links: [
      "About us",
      "Store Locator",
      "Franchise",
      "Work with us",
      "Interest based advertising",
      "California act on modern slavery",
    ],
    color: "bg-blue",
  },
  {
    title: "PRIVACY",
    links: [
      "Privacy policy",
      "California transpaency act",
      "Accesibility statement",
      "Purchase conditions",
      "Cookies & Ad preference",
      "Don't sell or share my personal information",
    ],
    color: "bg-green",
  },
];

let footerSocialIcons = [
  {
    icon: (
      <svg height="14" width="14" viewBox="0 0 448 512">
        <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" />
      </svg>
    ),
    link: "tiktok",
  },
  {
    icon: (
      <svg
        style={{
          fillRule: "evenodd",
          clipRule: "evenodd",
          strokeLinejoin: "round",
          strokeMiterlimit: 2,
        }}
        version="1.1"
        viewBox="0 0 600 600"
        width="14"
        height="14"
      >
        <g transform="matrix(1.01619,0,0,1.01619,44,43.8384)">
          <path
            d="M251.921,0.159C183.503,0.159 174.924,0.449 148.054,1.675C121.24,2.899 102.927,7.157 86.902,13.385C70.336,19.823 56.287,28.437 42.282,42.442C28.277,56.447 19.663,70.496 13.225,87.062C6.997,103.086 2.739,121.399 1.515,148.213C0.289,175.083 0,183.662 0,252.08C0,320.497 0.289,329.076 1.515,355.946C2.739,382.76 6.997,401.073 13.225,417.097C19.663,433.663 28.277,447.712 42.282,461.718C56.287,475.723 70.336,484.337 86.902,490.775C102.927,497.002 121.24,501.261 148.054,502.484C174.924,503.71 183.503,504 251.921,504C320.338,504 328.917,503.71 355.787,502.484C382.601,501.261 400.914,497.002 416.938,490.775C433.504,484.337 447.553,475.723 461.559,461.718C475.564,447.712 484.178,433.663 490.616,417.097C496.843,401.073 501.102,382.76 502.325,355.946C503.551,329.076 503.841,320.497 503.841,252.08C503.841,183.662 503.551,175.083 502.325,148.213C501.102,121.399 496.843,103.086 490.616,87.062C484.178,70.496 475.564,56.447 461.559,42.442C447.553,28.437 433.504,19.823 416.938,13.385C400.914,7.157 382.601,2.899 355.787,1.675C328.917,0.449 320.338,0.159 251.921,0.159ZM251.921,45.551C319.186,45.551 327.154,45.807 353.718,47.019C378.28,48.14 391.619,52.244 400.496,55.693C412.255,60.263 420.647,65.723 429.462,74.538C438.278,83.353 443.737,91.746 448.307,103.504C451.757,112.381 455.861,125.72 456.981,150.282C458.193,176.846 458.45,184.814 458.45,252.08C458.45,319.345 458.193,327.313 456.981,353.877C455.861,378.439 451.757,391.778 448.307,400.655C443.737,412.414 438.278,420.806 429.462,429.621C420.647,438.437 412.255,443.896 400.496,448.466C391.619,451.916 378.28,456.02 353.718,457.14C327.158,458.352 319.191,458.609 251.921,458.609C184.65,458.609 176.684,458.352 150.123,457.14C125.561,456.02 112.222,451.916 103.345,448.466C91.586,443.896 83.194,438.437 74.378,429.621C65.563,420.806 60.103,412.414 55.534,400.655C52.084,391.778 47.98,378.439 46.859,353.877C45.647,327.313 45.391,319.345 45.391,252.08C45.391,184.814 45.647,176.846 46.859,150.282C47.98,125.72 52.084,112.381 55.534,103.504C60.103,91.746 65.563,83.353 74.378,74.538C83.194,65.723 91.586,60.263 103.345,55.693C112.222,52.244 125.561,48.14 150.123,47.019C176.687,45.807 184.655,45.551 251.921,45.551Z"
            style={{ fillRule: "nonzero" }}
          />
          <path
            d="M251.921,336.053C205.543,336.053 167.947,298.457 167.947,252.08C167.947,205.702 205.543,168.106 251.921,168.106C298.298,168.106 335.894,205.702 335.894,252.08C335.894,298.457 298.298,336.053 251.921,336.053ZM251.921,122.715C180.474,122.715 122.556,180.633 122.556,252.08C122.556,323.526 180.474,381.444 251.921,381.444C323.367,381.444 381.285,323.526 381.285,252.08C381.285,180.633 323.367,122.715 251.921,122.715Z"
            style={{ fill: "rgb(3,4,4)", fillRule: "nonzero" }}
          />
          <path
            d="M416.627,117.604C416.627,134.3 403.092,147.834 386.396,147.834C369.701,147.834 356.166,134.3 356.166,117.604C356.166,100.908 369.701,87.374 386.396,87.374C403.092,87.374 416.627,100.908 416.627,117.604Z"
            style={{ fill: "rgb(3,4,4)", fillRule: "nonzero" }}
          />
        </g>
      </svg>
    ),
    link: "instagram",
  },
  {
    icon: (
      <svg
        style={{
          fillRule: "evenodd",
          clipRule: "evenodd",
          strokeLinejoin: "round",
          strokeMiterlimit: "2",
        }}
        version="1.1"
        viewBox="0 0 512 512"
        width="14"
        height="14"
      >
        <path
          d="M374.244,285.825l14.105,-91.961l-88.233,0l0,-59.677c0,-25.159 12.325,-49.682 51.845,-49.682l40.116,0l0,-78.291c0,0 -36.407,-6.214 -71.213,-6.214c-72.67,0 -120.165,44.042 -120.165,123.775l0,70.089l-80.777,0l0,91.961l80.777,0l0,222.31c16.197,2.541 32.798,3.865 49.709,3.865c16.911,0 33.511,-1.324 49.708,-3.865l0,-222.31l74.128,0Z"
          style={{ fillRule: "nonzero" }}
        />
      </svg>
    ),
    link: "facebook",
  },
  {
    icon: (
      <svg
        style={{
          fillRule: "evenodd",
          clipRule: "evenodd",
          strokeLinejoin: "round",
          strokeMiterlimit: 2,
        }}
        version="1.1"
        viewBox="0 0 512 512"
        width="14"
        height="14"
      >
        <path
          d="M255.998,0.001c-141.384,0 -255.998,114.617 -255.998,255.998c0,108.456 67.475,201.171 162.707,238.471c-2.24,-20.255 -4.261,-51.405 0.889,-73.518c4.65,-19.978 30.018,-127.248 30.018,-127.248c0,0 -7.659,-15.334 -7.659,-38.008c0,-35.596 20.632,-62.171 46.323,-62.171c21.839,0 32.391,16.399 32.391,36.061c0,21.966 -13.984,54.803 -21.203,85.235c-6.03,25.482 12.779,46.261 37.909,46.261c45.503,0 80.477,-47.976 80.477,-117.229c0,-61.293 -44.045,-104.149 -106.932,-104.149c-72.841,0 -115.597,54.634 -115.597,111.095c0,22.004 8.475,45.596 19.052,58.421c2.09,2.535 2.398,4.758 1.776,7.343c-1.945,8.087 -6.262,25.474 -7.111,29.032c-1.117,4.686 -3.711,5.681 -8.561,3.424c-31.974,-14.884 -51.963,-61.627 -51.963,-99.174c0,-80.755 58.672,-154.915 169.148,-154.915c88.806,0 157.821,63.279 157.821,147.85c0,88.229 -55.629,159.232 -132.842,159.232c-25.94,0 -50.328,-13.476 -58.674,-29.394c0,0 -12.838,48.878 -15.95,60.856c-5.782,22.237 -21.382,50.109 -31.818,67.11c23.955,7.417 49.409,11.416 75.797,11.416c141.389,0 256.003,-114.612 256.003,-256.001c0,-141.381 -114.614,-255.998 -256.003,-255.998Z"
          style={{ fillRule: "nonzero" }}
        />
      </svg>
    ),
    link: "pinterest",
  },
];

const Footer = (props: Props) => {
  return (
    <footer className="grid p-2 md:p-4 lg:p-10 gap-8 grid-cols-1 lg:grid-cols-4">
      <div className="layered-box-shadow bg-orange p-5 flex flex-col justify-between">
        <div>
          <div className="font-black text-4xl mb-4">PULL&BEAR</div>
          <div className="text-xs font-bold">An ever young community</div>
        </div>

        <div className="flex gap-4">
          {footerSocialIcons.map((social, index) => {
            return (
              <>
                <Link
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
                        className="font-semibold mb-2 text-xs"
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
