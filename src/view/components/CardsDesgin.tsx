import styled from "@emotion/styled";
import media from "src/styles/media";
import Chip from "src/assets/chip.png";
import Wifi from "src/assets/wifi.png";
import Docket from "src/assets/docket.png";
import { ReactComponent as Apple } from "src/assets/apple-13.svg";
import { ReactComponent as CardLogo } from "src/assets/mastercard-2.svg";

const CardDesgin = () => {
  return (
    <Container>
      <div className="checkout">
        <span className="blu"></span>
        <div className="credit-card">
          <div className="credit-card__head">
            <div>
              <img src={Chip} alt="" className="chip" />
            </div>
            <div>
              <img src={Wifi} alt="" className="wifi" />
            </div>
          </div>
          <div className="credit-card__body">
            <span className="holder">jonathan micheal</span>
            <div className="card-digits">
              <div className="hidden-digits">
                <span className="circle"></span>
                <span className="circle"></span>
                <span className="circle"></span>
                <span className="circle"></span>
              </div>
              <span className="visible-digits">3456</span>
            </div>
          </div>
          <div className="credit-card__footer">
            <span className="expiry">09/22</span>
            <CardLogo className="logo" />
          </div>
          <div className="card__design">
            <span className="inner"></span>
          </div>
        </div>
        <div className="checkout-details">
          <div className="purchase-data">
            <div className="data">
              <span className="title">company</span>
              <span className="value">
                <Apple className="logo" />
                <span className="inner-text">apple</span>
              </span>
            </div>
            <div className="data">
              <span className="title">order number</span>
              <span className="value">
                <span className="inner-text">1266201</span>
              </span>
            </div>
            <div className="data">
              <span className="title">product</span>
              <span className="value">
                <span className="inner-text">macbook air</span>
              </span>
            </div>
            <div className="data">
              <span className="title">VAT (20%)</span>
              <span className="value">
                <span className="inner-text">$100.00</span>
              </span>
            </div>
          </div>
          <div className="purchase-total">
            <div className="total">
              <span className="desc">You have to Pay</span>
              <div className="t-amount">
                <h1 className="amount">
                  549<sub>.99</sub>
                </h1>
                <span className="symbol">USD</span>
              </div>
            </div>
            <img src={Docket} alt=""></img>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CardDesgin;

const Container = styled.div`
  width: 300px;
  background-color: white;
  margin-left: 20px;

  ${media.smallDesktop} {
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .checkout {
    position: relative;
    margin-left: 10px;
    right: 5px;

    ${media.smallDesktop} {
      right: 0px;
    }

    .blu {
      display: block;
      height: 1.5em;
      width: 5em;
      background-color: #035fff;
      position: absolute;
      top: -7px;
      left: 50%;
      transform: translate(-50%, 0);
    }

    .checkout-details {
      display: block;
      height: 400px;
      width: 100%;
      background-color: #f0f3f8;
      position: absolute;
      top: 100px;
      border-top-right-radius: 16px;
      border-top-left-radius: 16px;
      border-bottom: 2px dashed #cbcbcb;
      left: 50%;
      transform: translate(-50%, 0);

      ${media.smallDesktop} {
        left: 45%;
      }

      .purchase-total {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #f0f3f8;
        position: relative;
        top: 220px;
        padding: 1rem 2rem;
        border-bottom-right-radius: 16px;
        border-bottom-left-radius: 16px;

        img {
          height: 1.6em;
        }

        .total {
          .desc {
            color: #8e96a3;
            font-size: 0.9em;
            font-weight: 500;
          }

          .t-amount {
            display: flex;
            align-items: center;
            justify-content: initial;
            flex-direction: initial;
            color: #05365c;

            .symbol {
              position: relative;
              top: 4px;
              font-size: 1.1em;
              margin-left: 0.2em;
              color: #8e96a3;
            }

            .amount {
              font-size: 2em;
              font-weight: 700;

              sub {
                font-size: 0.4em;
                position: relative;
                /* bottom: 1px; */
                font-weight: 500;
              }
            }
          }
        }
      }

      .purchase-data {
        position: relative;
        top: 220px;
        padding: 2em;

        .data {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-direction: initial;
          text-transform: capitalize;
          font-size: 0.9em;
          color: #8e96a3;
          margin-bottom: 0.5em;

          .title {
            font-size: 0.85em;
            font-weight: 500;
          }

          .value {
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-direction: initial;

            svg {
              height: 1em;
              margin-right: 5px;
            }

            .inner-text {
              color: #05365c;
              font-weight: 600;
            }
          }
        }
      }
    }
  }

  .credit-card {
    width: 15em;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.6), #fff);
    backdrop-filter: blur(15px);
    padding: 2em 2em 4em 2em;
    border-radius: 1em;
    box-shadow: 0px 4px 14px 2px rgba(224, 224, 224, 0.6);
    position: relative;
    z-index: 9;
    left: 50%;
    transform: translate(-50%, 0);
    overflow: hidden;

    .card__design {
      width: 600px;
      height: 700px;
      border: 1px solid #ebebeb;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 2.6em;
      left: -6em;
      z-index: -1;

      .inner {
        display: inline-block;
        width: 400px;
        height: 600px;
        border-radius: 99%;
        border: inherit;
      }
    }
  }

  .credit-card__head {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: initial;
    margin-bottom: 4em;

    .chip {
      height: 3em;
    }

    img {
      height: 1.8em;
    }
  }

  .credit-card__body {
    position: relative;
    color: #05365c;

    .holder {
      text-transform: capitalize;
      font-size: 0.95em;
      font-weight: 500;
      margin-bottom: 0.5em;
      color: #616161;
    }

    .card-digits {
      display: flex;
      margin-bottom: 0.5em;

      .visible-digits {
        font-size: 1.1em;
        font-weight: 700;
      }

      .hidden-digits {
        display: flex;
        align-items: center;
        justify-content: initial;
        flex-direction: initial;
        margin-right: 0.5em;

        .circle {
          height: 0.4em;
          width: 0.4em;
          border-radius: 50%;
          background-color: #17254c;
          margin-right: 0.4em;
        }
      }
    }
  }

  .credit-card__footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: initial;
    position: relative;
    top: 1.4em;

    .expiry {
      font-size: 1em;
      font-weight: 600;
    }

    .logo {
      height: 2.5em;
    }
  }

  ${media.smallDesktop} {
    width: 100%;
    background-color: white;
  }
`;
