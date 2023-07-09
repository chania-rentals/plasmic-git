// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconBedIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconBedIcon(props: IconBedIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 30 22"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M8.25 11C10.318 11 12 8.944 12 6.417s-1.682-4.584-3.75-4.584S4.5 3.89 4.5 6.417C4.5 8.944 6.182 11 8.25 11zm16.5-7.333h-10.5c-.414 0-.75.41-.75.916v8.25H3V.917C3 .41 2.664 0 2.25 0H.75C.336 0 0 .41 0 .917v20.166c0 .507.336.917.75.917h1.5c.414 0 .75-.41.75-.917v-2.75h24v2.75c0 .507.336.917.75.917h1.5c.414 0 .75-.41.75-.917v-11c0-3.544-2.35-6.416-5.25-6.416z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconBedIcon;
/* prettier-ignore-end */
