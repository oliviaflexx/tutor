import ReactRouterSetup from "./components/ReactRouter";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Admissions Coach and English Tutor</title>
        <meta name="description" content="Tutoring" />
        <meta name="theme-color" content="#00A5CF" />
      </Helmet>
      <ReactRouterSetup />
    </div>
  );
}

export default App;
