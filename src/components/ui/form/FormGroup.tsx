import React, { ComponentPropsWithoutRef } from "react";

type FormGroupProps = {
  children: React.ReactNode;
  labelText?: string;
  errorText?: string;
  className?: string;
  labelExtraEl?: React.ReactNode;
} & ComponentPropsWithoutRef<"div">;

function FormGroup(props: FormGroupProps) {
  const { className, children, labelText, errorText, labelExtraEl, ...rest } =
    props;
  const LabelExtraEl = labelExtraEl;

  return (
    <div
      className={`flex flex-col gap-2 ${className ? className : ""}`}
      {...rest}
    >
      {labelText && labelText.length > 0 && (
        <label className="label flex justify-between">
          {labelText}
          {LabelExtraEl}
        </label>
      )}

      {children}

      {errorText && errorText.length > 0 && (
        <p className="text-red-500 text-left text-sm">{errorText}</p>
      )}
    </div>
  );
}

export default FormGroup;
