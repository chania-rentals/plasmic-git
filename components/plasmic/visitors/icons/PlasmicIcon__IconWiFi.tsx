// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconWiFiIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconWiFiIcon(props: IconWiFiIconProps) {
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
          "M29.761 6.034C21.456-2.013 8.541-2.01.24 6.034a.806.806 0 00-.017 1.129L1.827 8.83c.288.3.751.306 1.05.019 6.84-6.565 17.405-6.567 24.246 0a.737.737 0 001.05-.02l1.605-1.667a.807.807 0 00-.017-1.129zM15 15.714c-1.657 0-3 1.407-3 3.143C12 20.593 13.343 22 15 22s3-1.407 3-3.143c0-1.736-1.343-3.143-3-3.143zm9.5-4.105c-5.403-5.005-13.604-5-19 0a.802.802 0 00-.027 1.137l1.614 1.67a.74.74 0 001.034.039 10.196 10.196 0 0113.757 0 .74.74 0 001.034-.04l1.614-1.669a.802.802 0 00-.026-1.137z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconWiFiIcon;
/* prettier-ignore-end */
