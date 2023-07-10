// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconBed2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconBed2Icon(props: IconBed2IconProps) {
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
          "M6.05 7C7.566 7 8.8 5.692 8.8 4.083c0-1.608-1.234-2.916-2.75-2.916S3.3 2.475 3.3 4.083C3.3 5.692 4.534 7 6.05 7zm12.1-4.667h-7.7c-.304 0-.55.261-.55.584v5.25H2.2V.583C2.2.261 1.954 0 1.65 0H.55C.246 0 0 .261 0 .583v12.834c0 .322.246.583.55.583h1.1c.304 0 .55-.261.55-.583v-1.75h17.6v1.75c0 .322.246.583.55.583h1.1c.304 0 .55-.261.55-.583v-7c0-2.256-1.724-4.084-3.85-4.084z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconBed2Icon;
/* prettier-ignore-end */
