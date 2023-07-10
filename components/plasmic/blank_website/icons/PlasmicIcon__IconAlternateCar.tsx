// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconAlternateCarIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconAlternateCarIcon(props: IconAlternateCarIconProps) {
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
          "M20.105 5.408l-.515-1.025-.913-1.816C17.892 1.007 16.022 0 13.91 0H8.09C5.979 0 4.108 1.007 3.323 2.567L2.41 4.383l-.515 1.025C.789 5.742 0 6.587 0 7.583v1.75c0 .588.282 1.118.733 1.529v1.971C.733 13.478 1.39 14 2.2 14h1.467c.81 0 1.466-.522 1.466-1.167v-1.166h11.734v1.166c0 .645.656 1.167 1.466 1.167H19.8c.81 0 1.467-.522 1.467-1.167v-1.971c.45-.41.733-.94.733-1.529v-1.75c0-.996-.79-1.84-1.895-2.175zM6.047 3.433c.334-.664 1.143-1.1 2.043-1.1h5.82c.9 0 1.71.436 2.043 1.1l.914 1.817H5.133l.914-1.817zm-2.38 5.893c-.88 0-1.467-.465-1.467-1.163S2.787 7 3.667 7c.88 0 2.2 1.047 2.2 1.745 0 .697-1.32.581-2.2.581zm14.666 0c-.88 0-2.2.116-2.2-.581 0-.698 1.32-1.745 2.2-1.745.88 0 1.467.465 1.467 1.163s-.587 1.163-1.467 1.163z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconAlternateCarIcon;
/* prettier-ignore-end */
