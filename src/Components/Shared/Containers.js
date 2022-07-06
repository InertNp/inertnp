import styled from "styled-components";

export const MediaContainerDesktop = styled.div`
  width: 100%;
  @media (max-width: 640px) {
    display: none;
  }
`;
export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
export const SubContainer = styled.div`
  width: 80%;
  height: 80%;
  /* border: 2px black solid; */
`;
