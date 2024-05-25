import styled from "styled-components";

const AppContainer = styled.div`
  margin: 0 auto;
  width: 98vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const OutletWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export { AppContainer, OutletWrapper };
