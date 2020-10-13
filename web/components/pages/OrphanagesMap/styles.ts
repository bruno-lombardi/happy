import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
`

export const Sidebar = styled.aside`
  width: 440px;
  background: linear-gradient(329.54deg, #15b6d6 0%, #15d6d6 100%);
  padding: 80px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h2 {
    font-size: 35px;
    font-weight: 800;
    line-height: 42px;
    margin-top: 64px;
  }
  p {
    line-height: 28px;
    margin-top: 24px;
  }

  footer {
    display: flex;
    flex-direction: column;

    line-height: 24px;

    strong {
      font-weight: 800;
    }
  }
`
