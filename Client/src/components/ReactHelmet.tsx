import { Helmet } from "react-helmet-async";

type Props = {
  titleName: string;
  description: string;
  noindex?: "index" | "noindex";
};

const ReactHelmet = ({
  titleName = "",
  description,
  noindex = "index",
}: Props) => {
  return (
    <Helmet>
      <link rel="icon" type="image/png" href="/images/favicon.png" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="utf-8" />
      <meta name="robots" content={noindex} />
      <title>{titleName && `${titleName} | Clothing Store`}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={titleName + " | Clothing Store"} />
      <meta property="og:description" content={description} />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin={"anonymous"}
      />
      <link
        href="https://fonts.googleapis.com/css2?family=KoHo:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,300;1,400;1,500;1,600;1,700&display=swap"
        rel="stylesheet"
      ></link>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Sharp:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
      />
    </Helmet>
  );
};

export default ReactHelmet;
