import React from 'react';
import styled from 'styled-components';
import MainDevelopsContent from './DevelopsContent/MainDevelopsContent';
import DevelopsInner from './DevelopsContent/DevelopsInner';

const Content = styled.div`
    display:flex;
    padding-top: 66px;
    padding-bottom: 66px;
    width: 100%;
    border-bottom: 1px solid #131515;
    background: #339989;
    flex-direction: column;
    align-items: center;

`;

const DevelopersInfo = styled.div`
    display: flex;
    justify-content: space-between;
    width: 80%;
`;

function DevelopsContent() {
  return (
    <Content>
      <MainDevelopsContent />
      <DevelopersInfo>
        <DevelopsInner name="Yaroslav Myronov" content="I am Yaroslav" post="Frontend" img="https://media-exp1.licdn.com/dms/image/D4D03AQEkYkLtgQkmbw/profile-displayphoto-shrink_800_800/0/1670371033496?e=1675900800&v=beta&t=hrtfKbE7Igtob9Bsk_NQ-_AOU4e0qrHDWp_F1_TGLUU" />
        <DevelopsInner name="Stas Shurko" content="Heeeeeellloooo, I am Stanislav. I'm Full-Stack developer in Munich. I like to play a guitar, playing chess, playing in my PS and, of course, CODDING!" post="Fullstack" img="https://uploads-ssl.webflow.com/60b9f6b57e8d7b3b3b1de1f2/632b263205d8cb1d2d80e710_Stanislav%20Shurko.png" />
        <DevelopsInner name="Dima Dacko" content="I am Dima" post="Backend" img="../assets/creators/stanislav_shurko.png" />
      </DevelopersInfo>
    </Content>
  );
}

export default DevelopsContent;
