import styled from "styled-components";

const Card = styled.div`
  margin: 10px;
  padding: 10px;
  width: 350px;
  height: 7rem;
  display: grid;
  grid-template-rows: 20px 50px 50px;
  place-content: start space-evenly;
  border-radius: 10px;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.25);
  transition: all 0.2s;
  background: #f8f8f8;
  &:hover {
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.4);
    transform: scale(1.01);
  }
`;

const Label = styled.label`
    --border-default: #bbbbc1;
    --border-hover: #9898a3;
    --active: #6e7bf2;
    --active-tick: #ffffff;
    display: block;
    width: 18px;
    height: 18px;
    cursor: pointer;
    position: relative;
    -webkit-tap-highlight-color: transparent;
    svg {
      display: block;
      position: absolute;
    }
    input {
      display: block;
      outline: none;
      border: none;
      padding: 0;
      margin: 0;
      -webkit-appearance: none;
      width: 18px;
      height: 18px;
      border-radius: 36% / 36%;
      box-shadow: inset 0 0 0 1.5px var(--border, var(--border-default));
      background: var(--background, transparent);
      transition: background 0.25s linear, box-shadow 0.25s linear;
      & + svg {
        width: 21px;
        height: 18px;
        left: 0;
        top: 0;
        color: var(--active);
        .tick {
          stroke-dasharray: 20;
          stroke-dashoffset: var(--stroke-dashoffset, 20);
          transition: stroke-dashoffset 0.2s;
          &.mask {
            stroke: var(--active-tick);
          }
        }
        & + svg {
          width: 11px;
          height: 11px;
          fill: none;
          stroke: var(--active);
          strokeWidth: 1.25;
          strokeLinecap: round;
          top: -6px;
          right: -10px;
          stroke-dasharray: 4.5px;
          stroke-dashoffset: 13.5px;
          pointer-events: none;
          animation: var(--animation, none) 0.2s ease 0.175s;
        }
      }
      &:checked {
        --background: var(--active);
        --border: var(--active);
        & + svg {
          --stroke-dashoffset: 0;
          & + svg {
            --animation: check;
          }
        }
      }
    }
    &:hover {
      input {
        &:not(:checked) {
          --border: var(--border-hover);
        }
      }
    }
  }

  @keyframes check {
    100% {
      stroke-dashoffset: 4.5px;
    }
  }

  html {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }

  * {
    box-sizing: inherit;
    &:before,
    &:after {
      box-sizing: inherit;
    }
`;

const CardDelete = styled.p`
  grid-row: 1/2;
  margin-right: 2px;
  justify-self: end;
  margin-top: 48px;
  cursor: pointer;
  i {
    color: red;
  }
`;

const CardInfo = styled.div`
  grid-row: 1/2;
  display: grid;
  // flex-direction: column;
  // align-items: center;
  place-items: center;
`;
const Span = styled.span`
  font-size: 10px;
`;

const P = styled.p`
  font-size: 20px;
  font-weight: bold;
`;

const CardEdit = styled.p`
  grid-row: 1/2;
  cursor: pointer;
  i {
    color: green;
  }
`;

const Cards = (props) => {
  return (
    <Card>
      <Label onClick={props.handleCheck}>
        <input type="checkbox" />
        <svg viewBox="0 0 21 18">
          <symbol
            id="tick-path"
            viewBox="0 0 21 18"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.22003 7.26C5.72003 7.76 7.57 9.7 8.67 11.45C12.2 6.05 15.65 3.5 19.19 1.69"
              fill="none"
              strokeWidth="2.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </symbol>
          <defs>
            <mask id="tick">
              <use className="tick mask" href="#tick-path" />
            </mask>
          </defs>
          <use className="tick" href="#tick-path" stroke="currentColor" />
          <path
            fill="white"
            mask="url(#tick)"
            d="M18 9C18 10.4464 17.9036 11.8929 17.7589 13.1464C17.5179 15.6054 15.6054 17.5179 13.1625 17.7589C11.8929 17.9036 10.4464 18 9 18C7.55357 18 6.10714 17.9036 4.85357 17.7589C2.39464 17.5179 0.498214 15.6054 0.241071 13.1464C0.0964286 11.8929 0 10.4464 0 9C0 7.55357 0.0964286 6.10714 0.241071 4.8375C0.498214 2.39464 2.39464 0.482143 4.85357 0.241071C6.10714 0.0964286 7.55357 0 9 0C10.4464 0 11.8929 0.0964286 13.1625 0.241071C15.6054 0.482143 17.5179 2.39464 17.7589 4.8375C17.9036 6.10714 18 7.55357 18 9Z"
          />
        </svg>
        <svg className="lines" viewBox="0 0 11 11">
          <path d="M5.88086 5.89441L9.53504 4.26746" />
          <path d="M5.5274 8.78838L9.45391 9.55161" />
          <path d="M3.49371 4.22065L5.55387 0.79198" />
        </svg>
      </Label>
      <CardDelete onClick={props.handleDelete}>
        <i className="fas fa-trash-alt"></i>
      </CardDelete>
      <CardInfo>
        <P>{props.title}</P>
        <Span>{props.data}</Span>
      </CardInfo>
      <CardEdit onClick={props.handleEdit}>
        <i className="fas fa-edit"></i>
      </CardEdit>
    </Card>
  );
};

export default Cards;
