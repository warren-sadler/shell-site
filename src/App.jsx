import styled from "styled-components";
import { Helmet } from "react-helmet";
import { IFrame } from "./components/IFrame";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

function App() {
  return (
    <Container>
      <Helmet>
        <title>Therify.co</title>
      </Helmet>
      <IFrame title="Therify.co" src="https://therify.co" />
    </Container>
  );
}

export default App;
