// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconWiFi2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconWiFi2Icon(props: IconWiFi2IconProps) {
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
          "M21.825 3.84c-6.09-5.12-15.562-5.12-21.65 0a.466.466 0 00-.012.718L1.34 5.62a.6.6 0 00.77.012c5.016-4.178 12.763-4.179 17.78 0a.6.6 0 00.77-.012l1.177-1.062a.467.467 0 00-.012-.718zM11 10c-1.215 0-2.2.895-2.2 2s.985 2 2.2 2c1.215 0 2.2-.895 2.2-2s-.985-2-2.2-2zm6.967-2.612c-3.962-3.186-9.976-3.182-13.934 0a.464.464 0 00-.02.723l1.184 1.062a.603.603 0 00.758.025c2.886-2.267 7.21-2.262 10.09 0 .219.173.55.16.757-.025l1.184-1.062a.464.464 0 00-.02-.723z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconWiFi2Icon;
/* prettier-ignore-end */
