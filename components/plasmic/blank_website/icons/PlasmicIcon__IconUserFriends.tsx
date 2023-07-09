// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconUserFriendsIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconUserFriendsIcon(props: IconUserFriendsIconProps) {
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
          "M9 11c2.902 0 5.25-2.46 5.25-5.5S11.902 0 9 0 3.75 2.46 3.75 5.5 6.098 11 9 11zm3.6 1.571h-.39a7.11 7.11 0 01-3.21.786c-1.153 0-2.231-.294-3.21-.786H5.4c-2.981 0-5.4 2.534-5.4 5.658v1.414C0 20.944 1.008 22 2.25 22h13.5c1.242 0 2.25-1.056 2.25-2.357v-1.414c0-3.124-2.419-5.658-5.4-5.658zM22.5 11c2.484 0 4.5-2.112 4.5-4.714 0-2.603-2.016-4.715-4.5-4.715S18 3.683 18 6.286C18 8.888 20.016 11 22.5 11zm2.25 1.571h-.178c-.652.236-1.34.393-2.072.393-.731 0-1.42-.157-2.072-.393h-.178c-.956 0-1.837.29-2.61.757a7.374 7.374 0 011.86 4.9v1.886c0 .108-.023.211-.028.315h8.278c1.242 0 2.25-1.056 2.25-2.358 0-3.04-2.348-5.5-5.25-5.5z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconUserFriendsIcon;
/* prettier-ignore-end */
