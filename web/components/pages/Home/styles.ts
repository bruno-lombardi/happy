import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(329.54deg, #29b6d1 0%, #00c7c7 100%);

  display: flex;
  justify-content: center;
  align-items: center;
`

export const ContentWrapper = styled.div`
  position: relative;
  width: min(100%, 1100px);
  height: min(100%, 680px);

  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;

  background-size: contain;
  background-image: url('/landing.svg');
  background-repeat: no-repeat;
  background-position-x: 90%;
`

export const MainContent = styled.main`
  max-width: 350px;

  h1 {
    font-size: 76px;
    font-weight: 900;
    line-height: 70px;
  }

  p {
    margin-top: 40px;
    font-size: 24px;
    line-height: 34px;
  }
`

export const Location = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  display: flex;
  flex-direction: column;
  text-align: right;
  font-size: 24px;
  line-height: 34px;

  strong {
    font-weight: 700;
  }
`

export const NavigateButtonLink = styled.a`
  position: absolute;
  bottom: 0;
  right: 0;

  width: 80px;
  height: 80px;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  background-color: #ffd666;
  transition: background-color 0.2s;

  &:hover {
    background-color: #96feff;
  }
`
