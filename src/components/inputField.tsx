import * as React from "react";
import styled from "@emotion/styled";
import uniqid from "src/helper/uniqid";
import cx from "classnames";

const defaultId = uniqid();

interface InputFieldContainerProps {
  fullWidth?: boolean;
  align?: boolean;
}

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  containerClassName?: string;
}

export default function InputField(props: Props & InputFieldContainerProps) {
  const {
    containerClassName,
    fullWidth,
    align,
    className,
    id = defaultId,
    ...rest
  } = props;

  const containerClassNames = cx(containerClassName, {
    "full-width": fullWidth,
  });

  return (
    <InputFieldContainer className={containerClassNames}>
      <Input id={id} className={cx(className, { align: align })} {...rest} />
    </InputFieldContainer>
  );
}

const InputFieldContainer = styled.div<InputFieldContainerProps>`
  width: 200px;

  &.full-width {
    width: 100%;
  }
`;

export const Input = styled.input`
  background: linear-gradient(45deg, #f5f8ff, transparent);
  width: 100%;
  text-align: center;
  padding: 1em 15px;
  border-radius: 8px;
  outline: 2px solid transparent;
  font-size: 16px;
  color: #05365c;
  border: 2px solid rgba(224, 224, 224, 0.5);
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);

  &.align {
    text-align: start;
  }

  &.error {
    border: 1px solid red;
  }

  &:focus {
    border: 2px solid #0077b6;
  }

  &::placeholder {
    font-weight: 400;
    opacity: 0.5;
  }
`;
