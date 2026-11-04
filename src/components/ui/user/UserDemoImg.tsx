import React, { ComponentPropsWithoutRef } from "react";

type UserDemoImgProps = {
  name: string;
  className?: string;
  children?: React.ReactNode;
} & ComponentPropsWithoutRef<"div">;

function UserDemoImg(props: UserDemoImgProps) {
  const { name, className, children, ...rest } = props;

  return (
    <p
      className={`flex justify-center items-center w-10 h-10 rounded-full bg-primary text-primary-content text-lg ${className ? className : ""}`}
      {...rest}
    >
      {name ? name[0].toUpperCase() : "U"}
    </p>
  );
}

export default UserDemoImg;
