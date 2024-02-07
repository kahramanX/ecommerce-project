import ReactHelmet from "./components/ReactHelmet";
import "./index.css";

const App = (): JSX.Element => {
  return (
    <>
      <ReactHelmet
        titleName="ana sayfa"
        canonical="ana sayfa"
        description="açıklama"
      />
      <h2 className="text-3xl underline">First tailwind :)</h2>
    </>
  );
};

export default App;
