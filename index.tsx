import * as React from "react";
import * as ReactDOM from "react-dom";

const App = () => {
  const [data, setData] = React.useState<string | undefined>(undefined);
  const [person, setPerson] = React.useState<string | null>(null);
  const mountRef = React.useRef(false);

  React.useEffect(() => {
    if (mountRef.current) {
      const fakeFetch = () => {
        return new Promise<string>((res) => {
          setTimeout(() => res(`${person}'s data`), Math.random() * 5000);
        });
      };
      fakeFetch().then((data) => setData(data));
    } else {
      mountRef.current = true;
    }
  }, [person]);

  return (
    <div className="App">
      <button onClick={() => setPerson("John")}>Request John's profile</button>
      <button onClick={() => setPerson("Ken")}>Request Ken's profile</button>
      <button onClick={() => setPerson("Michel")}>
        Request Michel's profile
      </button>
      <h1>{person}</h1>
      <h2>{JSON.stringify(data)}</h2>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
