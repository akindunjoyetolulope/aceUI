import styled from "@emotion/styled";
import media from "src/styles/media";
import CardForm from "./components/CardForm";
import CardDesgin from "./components/CardsDesgin";

const Page = () => {
  return (
    <Container>
      <div className="wrapper">
        <div>
          <div className="header">
            <div className="logo">
              <span className="logo-circle"></span>
              <h1>
                AceCoin<span className="lean">Pay</span>
              </h1>
            </div>
            <div className="timer">
              <span className="timer-box">0</span>
              <span className="timer-box">1</span>
              <span className="divider">:</span>
              <span className="timer-box">1</span>
              <span className="timer-box">9</span>
            </div>
          </div>
          <CardForm />
        </div>
        <CardDesgin />
      </div>
    </Container>
  );
};

export default Page;

const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: #17254c;
  height: 100vh;

  ${media.smallDesktop} {
    width: 100%;
    flex-direction: column;
    height: 100%;
  }

  .wrapper {
    display: flex;
    gap: 20px;
    padding: 40px 40px;
    margin: 40px 40px;
    background-color: white;

    ${media.smallDesktop} {
      padding: 20px 10px;
      flex-direction: column;
      margin: 0px;
    }
  }

  .header {
    display: flex;
    justify-content: space-between;

    .logo {
      display: flex;
      .logo-circle {
        height: 3em;
        width: 3em;
        display: block;
        background-color: #035fff;
        border-radius: 50%;
      }

      h1 {
        font-size: 1.75em;
        font-weight: 600;
        margin-left: 0.6em;
        color: #05365c;

        .lean {
          font-weight: 300;
        }
      }
    }

    .timer {
      font-size: 1.35em;
      font-weight: 500;

      .divider {
        margin-right: 2px;
      }

      .timer-box {
        margin-right: 2px;
        background-color: #17254c;
        color: #fff;
        height: 1.9em;
        width: 1.3em;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        border-radius: 4px;
      }
    }
  }
`;
