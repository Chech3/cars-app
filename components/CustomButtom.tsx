"use client";
import React from "react";
import Image from "next/image";
import { CustomButtonProps } from "@/types";
const CustomButtom = ({title, containerStyles, handleClick, btnType}: CustomButtonProps) => {
  return (
    <button
      type={btnType}
      disabled={false}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1`}>{title}</span>
    </button>
  );
};

export default CustomButtom;
