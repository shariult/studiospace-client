"use client";

import React, { ComponentPropsWithoutRef } from "react";
import { Toaster } from "react-hot-toast";

type ToasterProviderProps = {
  children?: React.ReactNode;
  className?: string;
} & ComponentPropsWithoutRef<"div">;

function ToasterProvider(props: ToasterProviderProps) {
  const { className, children, ...rest } = props;

  return <Toaster {...rest} />;
}

export default ToasterProvider;
