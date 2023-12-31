// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PaperPlaneSvgrepoComsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PaperPlaneSvgrepoComsvgIcon(
  props: PaperPlaneSvgrepoComsvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 32 32"}
      version={"1.1"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M12.379 19.737l4.766 9.591L29.326 2.672 2.673 15.464l9.706 4.273zm.283-1.039l-7.44-3.276 20.434-9.807-12.993 13.082zm4.444 8.168l-3.688-7.421L26.527 6.247l-9.421 20.619z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PaperPlaneSvgrepoComsvgIcon;
/* prettier-ignore-end */
