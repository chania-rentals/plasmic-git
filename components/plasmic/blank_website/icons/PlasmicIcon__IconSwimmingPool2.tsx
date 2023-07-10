// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconSwimmingPool2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconSwimmingPool2Icon(props: IconSwimmingPool2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 22 14"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M21.45 12h-.55c-.895 0-1.574-.263-1.928-.56-.306-.256-.676-.44-1.092-.44h-.56c-.417 0-.787.184-1.093.44-.353.297-1.032.56-1.927.56s-1.574-.263-1.928-.56c-.306-.256-.676-.44-1.092-.44h-.56c-.417 0-.787.184-1.093.44-.353.297-1.032.56-1.927.56s-1.574-.263-1.928-.56c-.306-.256-.676-.44-1.092-.44h-.56c-.417 0-.787.184-1.093.44-.353.297-1.032.56-1.927.56H.55c-.304 0-.55.224-.55.5v1c0 .276.246.5.55.5h.55c1.328 0 2.5-.38 3.3-.995.8.614 1.972.995 3.3.995 1.328 0 2.5-.38 3.3-.995.8.614 1.972.995 3.3.995 1.328 0 2.5-.38 3.3-.995.8.614 1.972.995 3.3.995h.55c.304 0 .55-.224.55-.5v-1c0-.276-.246-.5-.55-.5zM7.7 11V8h6.6v3c.657 0 1.06-.193 1.182-.294a3.04 3.04 0 011.018-.565V3c0-.551.494-1 1.1-1 .606 0 1.1.449 1.1 1v.5c0 .276.246.5.55.5h1.1c.304 0 .55-.224.55-.5V3c0-1.654-1.48-3-3.3-3-1.82 0-3.3 1.346-3.3 3v3H7.7V3c0-.551.494-1 1.1-1 .606 0 1.1.449 1.1 1v.5c0 .276.246.5.55.5h1.1c.304 0 .55-.224.55-.5V3c0-1.654-1.48-3-3.3-3-1.82 0-3.3 1.346-3.3 3v7.14c.358.117.703.301 1.018.565.121.102.525.295 1.182.295z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconSwimmingPool2Icon;
/* prettier-ignore-end */
