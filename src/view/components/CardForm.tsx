import styled from "@emotion/styled";
import InputField from "src/components/inputField";
import media from "src/styles/media";

const CardForm = () => {
  return (
    <Sections>
      <div className="cols-1">
        <div className="description">
          <h2 className="title">card number</h2>
          <p className="desc">Enter the 15-digit card number on the card</p>
        </div>
        <div>
          <button className="edit">
            <span className="btn-desc">Edit</span>
          </button>
        </div>
      </div>
      <InputField fullWidth placeholder="0000-0000-0000-0000" align />
      <div className="cols">
        <div className="description">
          <h2 className="title">CVV number</h2>
          <p className="desc">Enter the 3 or 4 digit number on the card</p>
        </div>
        <div>
          <InputField placeholder="234" />
        </div>
      </div>
      <div className="cols">
        <div className="description">
          <h2 className="title">expiry date</h2>
          <p className="desc">Enter the expiration date of the card</p>
        </div>
        <div style={{ display: "flex", gap: 10 }}>
          <InputField placeholder="09" />
          <InputField placeholder="22" />
        </div>
      </div>
      <div className="cols">
        <div className="description">
          <h2 className="title">password</h2>
          <p className="desc">Enter your Dynamic password</p>
        </div>
        <div>
          {" "}
          <InputField fullWidth />
        </div>
      </div>
      <button type="button" className="btn">
        pay now
      </button>
    </Sections>
  );
};

export default CardForm;

const Sections = styled.div`
  margin-top: 67px;

  .cols-1 {
    margin: 40px 0px;
    display: flex;
    justify-content: space-between;

    .description {
      .title {
        text-transform: capitalize;
        font-size: 1.1em;
        font-weight: 700;
        color: #05365c;
        margin-bottom: 0.4em;
      }
      .desc {
        font-size: 0.77em;
        font-weight: 500;
        color: #8e96a3;
      }
    }

    .edit {
      border: none;
      background-color: white;
      font-size: 16px;
      font-weight: 600;
      align-items: center;
      justify-content: space-between;
      flex-direction: initial;
      color: #1da1f2;

      .svg {
        height: 0.9em;
        fill: #1da1f2;
      }

      .btn-desc {
        display: block;
        margin-left: 0.6em;
        font-weight: 500;
      }
    }
  }

  .cols {
    margin-top: 25px;
    display: flex;
    justify-content: space-between;
    /* gap: 1px; */
    /* border: 1px solid red; */

    ${media.mobile} {
      display: block;
      input {
        margin-top: 25px;
      }
    }

    div {
      /* border: 1px solid black; */
      width: 100%;
    }

    .description {
      .title {
        text-transform: capitalize;
        font-size: 1.1em;
        font-weight: 700;
        color: #05365c;
        margin-bottom: 0.4em;
      }
      .desc {
        font-size: 0.77em;
        font-weight: 500;
        color: #8e96a3;
      }
    }
  }

  .btn {
    background-color: #035fff;
    width: 100%;
    padding: 1.2em 0;
    margin-top: 25px;
    box-sizing: border-box;
    color: #fff;
    text-transform: capitalize;
    font-size: 1.2em;
    font-weight: 500;
    border-radius: 0.6em;
    transition: all 250ms ease-in-out;
    border: none;

    &:hover {
      background-color: #1254d6;
    }
  }
`;
