import { Container } from "react-bootstrap";
import PizzaChart from "./PizzaChart";
import useGoogleCharts from "./useGoogleCharts";
import DinosaurChart from "./DinosaurChart";

function App() {
  const google = useGoogleCharts();

  return (
    <>
      <Container className="mt-3">
        <h1
          style={{
            backgroundColor: "red",
            textAlign: "center",
            color: "white",
            padding: "15px"
          }}
        >
          How to Use Google Charts in React
        </h1>
        <div>
          <a
            style={{
              justifyContent: "right",
              backgroundColor: "red",
              textAlign: "right",
            }}
            href="https://blog.shahednasser.com/how-to-use-google-charts-in-react/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <h3
              style={{
                justifyContent: "center",
                textAlign: "right",
                marginRight:"18px"
              }}
            >
              Reference Page
            </h3>
          </a>
        </div>
        <div
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <PizzaChart google={google} />
          <DinosaurChart google={google} />
        </div>
      </Container>
    </>
  );
}

export default App;
