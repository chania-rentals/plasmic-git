// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconUserFriends2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconUserFriends2Icon(props: IconUserFriends2IconProps) {
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
          "M6.6 7c2.128 0 3.85-1.566 3.85-3.5S8.728 0 6.6 0 2.75 1.566 2.75 3.5 4.472 7 6.6 7zm2.64 1h-.285a5.86 5.86 0 01-2.355.5A5.876 5.876 0 014.245 8H3.96C1.774 8 0 9.613 0 11.6v.9c0 .828.74 1.5 1.65 1.5h9.9c.91 0 1.65-.672 1.65-1.5v-.9c0-1.987-1.774-3.6-3.96-3.6zm7.26-1c1.822 0 3.3-1.344 3.3-3s-1.478-3-3.3-3c-1.822 0-3.3 1.344-3.3 3s1.478 3 3.3 3zm1.65 1h-.13c-.478.15-.984.25-1.52.25s-1.042-.1-1.52-.25h-.13a4.11 4.11 0 00-1.915.481c.84.822 1.365 1.913 1.365 3.119v1.2c0 .069-.017.134-.02.2h6.07c.91 0 1.65-.672 1.65-1.5C22 9.566 20.278 8 18.15 8z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconUserFriends2Icon;
/* prettier-ignore-end */
