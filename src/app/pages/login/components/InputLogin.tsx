import React from "react";

interface IInputLoginProps {
  label: string,
  value: string,
  type?: string,

  onChange: (newValue: string) => void;
}

export const InputLogin = React.forwardRef<HTMLInputElement, IInputLoginProps>((props, ref) => {
  return (
    <>
      <label>
        <span>{props.label}</span>
        <input
          ref={ref}
          value={props.value}
          onChange={e => props.onChange(e.target.value)}
          type={props.type}
        />
      </label>
    </>
  )
})