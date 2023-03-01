import React from "react";
import styled from "styled-components";
import variables from '../styles/variables.module.scss';

const InputGroup = styled.div.attrs(() => {
  return {
    className: "flex",
  };
})``;

const InputLabel = styled.label`
  color: ${variables.gray700};
  font-size: 0.9rem;
  margin-bottom: 0.6rem;
  ${({ isFlex }) =>
    isFlex && `display : flex; align-items : center; cursor : pointer;`}
`;

const buttonStyles = (light) => `
  cursor : pointer;
  background-color : ${light.primary};
  border : 1px solid ${light.primary};
  color : ${light.white};
  padding-left : 2.5rem; 
  padding-right : 2.5rem;
  transition : all ${light.duration};
  &:hover{
  background-color : ${light.primaryDark};
  }
  &:focus{
    background-color : ${light.primary};
  }
`;

const InputField = styled.input.attrs(() => {
  return {
    autoComplete: "off",
  };
})`
  width: 100%;
  border: 1px solid ${variables.inactive};
  border-radius:  ${variables.size_2xs};
  padding:  ${variables.size_xs} ${variables.size};	
  height: 40px;
  &:focus{
    border: 1px solid ${variables.active};
    outline: none;
  }
  &.has-error{
    border: 1px solid ${variables.danger};
  }
  &.has-success{
    border: 1px solid ${variables.success};
  }
  &.has-warning{
    border: 1px solid ${variables.warning};
  }
  &.has-disable{
    border: 1px solid ${variables.active_light};
    background-color: ${variables.active_light};
  }
  ${({ type, theme }) => type === "submit" && `${buttonStyles(theme)}`}
`;

export const Input = ({ id, label, error = false, type = "text", ...rest }) => {
  return (
    <InputGroup
      className={`flex-col my-4 w-full ${
        type === "submit" && "md:w-72 mt-auto"
      } `}
    >
      {type !== "submit" && <InputLabel htmlFor={id}>{label}</InputLabel>}
      <InputField
        validation={error}
        type={type}
        name={label}
        id={id}
        {...rest}
        {...(type === "submit" && { value: label })}
      />
    </InputGroup>
  );
};

export const RadioInput = ({ label, group, ...rest }) => {
  return (
    <InputGroup className="mr-8">
      <InputLabel isFlex={true}>
        <input type="radio" name={group} {...rest} />
        <div className="ml-1">{label}</div>
      </InputLabel>
    </InputGroup>
  );
};



const CheckboxType = styled.div.attrs(() => {
  return {
  };
})`
  position: relative;
  padding-left: ${variables.size_4xl};
  input{
    padding: 0;
    height: initial;
    width: initial;
    margin-bottom: 0;
    display: none;
    cursor: pointer;
    &:checked + label:after {
      content: '';
      display: block;
      position: absolute;
      top: 6px;
      left: 13px;
      width: 5px;
      height: 10px;
      border: solid ${variables.active};
      border-width: 0 2px 2px 0;
      transform: rotate(45deg);
      margin-left: -${variables.size_4xl};
    }
  }
  label{
    position: relative;
    cursor: pointer;
    &:before {
      content: '';
      -webkit-appearance: none;
      background-color: transparent;
      border: 2px solid ${variables.active};
      box-shadow: 0 1px 2px rgb(0 0 0 / 5%), inset 0px -15px 10px -12px rgb(0 0 0 / 5%);
      padding: ${variables.size_xs};
      display: inline-block;
      position: absolute;
      vertical-align: middle;
      cursor: pointer;
      margin-left: -${variables.size_3xl};
      margin-top: ${variables.size_2xs};
      border-radius: 2px;
    }
  }
`;

export const Checkbox = ({ id, label, ...rest }) => {
  return (
    <CheckboxType>
      <input type="checkbox" id={id} {...rest} />
      <label htmlFor={id}>{label}</label>
    </CheckboxType>
  );
};




const SelectGroup = styled.div.attrs(() => {
  return {
    className: "flex",
  };
})``;

const SelectLabel = styled.label`
  color: ${variables.gray700};
  font-size: 0.9rem;
  margin-bottom: 0.6rem;
  ${({ isFlex }) =>
    isFlex && `display : flex; align-items : center; cursor : pointer;`}
`;


const SelectField = styled.select.attrs(() => {
  return {
    autoComplete: "off",
  };
})`
  width: 100%;
  border: 1px solid ${variables.inactive};
  border-radius:  ${variables.size_2xs};
  padding: ${variables.size_xs} ${variables.size};
  height: 40px;
  &:focus{
    border: 1px solid ${variables.active};
    outline: none;
  }
  &.has-error{
    border: 1px solid ${variables.danger};
  }
  &.has-success{
    border: 1px solid ${variables.success};
  }
  &.has-warning{
    border: 1px solid ${variables.warning};
  }
  &.has-disable{
    border: 1px solid ${variables.active_light};
    background-color: ${variables.active_light};
  }
  ${({ type, theme }) => type === "submit" && `${buttonStyles(theme)}`}
`;

export const Select = ({ id, label, error = false, type = "text", ...rest }) => {
  return (
    <SelectGroup
      className={`flex-col my-4 w-full ${
        type === "submit" && "md:w-72 mt-auto"
      } `}
    >
      {type !== "submit" && <SelectLabel htmlFor={id}>{label}</SelectLabel>}
      <SelectField
        validation={error}
        type={type}
        name={label}
        id={id}
        {...rest}
        {...(type === "submit" && { value: label })}
      />
    </SelectGroup>
  );
};




const TextGroup = styled.div.attrs(() => {
  return {
    className: "flex",
  };
})``;

const TextLabel = styled.label`
  color: ${variables.gray700};
  font-size: 0.9rem;
  margin-bottom: 0.6rem;
  ${({ isFlex }) =>
    isFlex && `display : flex; align-items : center; cursor : pointer;`}
`;


const TextField = styled.textarea.attrs(() => {
  return {
    autoComplete: "off",
  };
})`
  width: 100%;
  border: 1px solid ${variables.inactive};
  border-radius:  ${variables.size_2xs};
  padding: ${variables.size_xs} ${variables.size};
  &:focus{
    border: 1px solid ${variables.active};
    outline: none;
  }
  &.has-error{
    border: 1px solid ${variables.danger};
  }
  &.has-success{
    border: 1px solid ${variables.success};
  }
  &.has-warning{
    border: 1px solid ${variables.warning};
  }
  &.has-disable{
    border: 1px solid ${variables.active_light};
    background-color: ${variables.active_light};
  }
  ${({ type, theme }) => type === "submit" && `${buttonStyles(theme)}`}
`;

export const TextArea = ({ id, label, error = false, type = "text", ...rest }) => {
  return (
    <TextGroup
      className={`flex-col my-4 w-full ${
        type === "submit" && "md:w-72 mt-auto"
      } `}
    >
      {type !== "submit" && <TextLabel htmlFor={id}>{label}</TextLabel>}
      <TextField
        validation={error}
        type={type}
        name={label}
        id={id}
        {...rest}
        {...(type === "submit" && { value: label })}
      />
    </TextGroup>
  );
};