import React from 'react';
import styled from 'styled-components';

const Body = styled.div`
    top: 70px;
    position: relative;
    overflow: hidden;
`;

const Container = styled.div`
    position: relative;
    overflow: hidden;
    box-sizing: inherit;
    width: 100%;
    display: flex;
    justify-content: center;
    border-bottom: 1px solid #131515;
    height: 380px;
`;

const Content = styled.div`
    height: 100%;
    padding-top: 93px;
    padding-bottom: 92px;
    display: flex;
    z-index: 2;
    box-sizing: inherit;
    flex-direction: column;
    @media (min-width: 1080px) {
      width: 550px;
    }
    @media (max-width: 1079.98px) {
      width: 550px;
    }
    @media (max-width: 903.98px) {
      width: 500px;
    }
    @media (max-width: 727.98px) {
      width: 500px;
    }
    @media (max-width: 551.98px) {
      width: 100%;
    }
`;

const CenterContent = styled.div`
    min-width: 0;
    max-width: 1192px;
    width: 100%;
    @media (min-width: 1080px) {
      margin: 0 64px;
    }
    @media (min-width: 904px) and (max-width: 1079.98px) {
      margin: 0 64px;
    }
    @media (min-width: 728px) and (max-width: 903.98px) {
      margin: 0 48px;
    }
    @media (min-width: 552px) and (max-width: 727.98px) {
      margin: 0 24px;
    }
    @media (max-width: 551.98px) {
      margin: 0 24px;
    }
`;

const Title = styled.div`
    margin-bottom: 35px;
    display: block;
    box-sizing: inherit;
`;

const H2 = styled.h2`
    font-weight: 400;
    @media (min-width: 1080px) {
      font-size: 106px;
      line-height: 95px;
      letter-spacing: -0.05em;
    }
    @media (min-width: 904px) and (max-width: 1079.98px) {
      font-size: 106px;
      line-height: 95px;
      letter-spacing: -0.05em;
    }
    @media (min-width: 728px) and (max-width: 903.98px) {
      font-size: 85px;
      line-height: 88px;
      letter-spacing: -0.055em;
    }
    @media (min-width: 552px) and (max-width: 727.98px) {
      font-size: 85px;
      line-height: 88px;
      letter-spacing: -0.055em;
    }
    @media (max-width: 551.98px) {
      font-size: 70px;
      line-height: 74px;
      letter-spacing: -0.055em;
    }
`;

const H3 = styled.h2`
    font-size: 24px;
    line-height: 24px;
    font-weight: 400;
`;

const UnderTitle = styled.div`
    width: 80%;
    margin-bottom: 50px;
    display: block;
    box-sizing: inherit;
    @media (max-width: 551.98px) {
      width: 100%;
    }
`;

function Main() {
  return (
    <Body>
      <Container>
        <CenterContent>
          <Content>
            <Title>
              <H2>Stay curious.</H2>
            </Title>
            <UnderTitle>
              <H3>Discover stories, thinking, and expertise from writers on any topic.</H3>
            </UnderTitle>
          </Content>
        </CenterContent>
      </Container>
    </Body>
  );
}

export default Main;
