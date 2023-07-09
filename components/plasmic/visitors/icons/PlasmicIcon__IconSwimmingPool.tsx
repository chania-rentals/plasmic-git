// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconSwimmingPoolIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconSwimmingPoolIcon(props: IconSwimmingPoolIconProps) {
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
          "M29.25 18.857h-.75c-1.22 0-2.147-.413-2.63-.879-.416-.403-.92-.692-1.488-.692h-.765c-.567 0-1.072.289-1.489.692-.481.466-1.407.88-2.628.88-1.22 0-2.147-.414-2.63-.88-.416-.403-.92-.692-1.488-.692h-.764c-.568 0-1.072.289-1.49.692-.481.466-1.407.88-2.628.88-1.22 0-2.147-.414-2.63-.88-.416-.403-.92-.692-1.488-.692h-.764c-.568 0-1.073.289-1.49.692-.481.466-1.407.88-2.628.88H.75c-.414 0-.75.35-.75.785v1.571c0 .434.336.786.75.786h.75c1.81 0 3.409-.599 4.5-1.564C7.091 21.402 8.69 22 10.5 22s3.409-.599 4.5-1.564c1.091.966 2.69 1.564 4.5 1.564s3.409-.599 4.5-1.564c1.091.966 2.69 1.564 4.5 1.564h.75c.414 0 .75-.352.75-.786v-1.571c0-.434-.336-.786-.75-.786zM10.5 17.286V12.57h9v4.715c.896 0 1.447-.303 1.612-.463.43-.415.9-.704 1.388-.887V4.714c0-.866.673-1.571 1.5-1.571s1.5.705 1.5 1.571V5.5c0 .434.336.786.75.786h1.5c.414 0 .75-.352.75-.786v-.786C28.5 2.114 26.482 0 24 0s-4.5 2.115-4.5 4.714V9.43h-9V4.714c0-.866.673-1.571 1.5-1.571s1.5.705 1.5 1.571V5.5c0 .434.336.786.75.786h1.5c.414 0 .75-.352.75-.786v-.786C16.5 2.114 14.482 0 12 0S7.5 2.115 7.5 4.714v11.221a4.03 4.03 0 011.388.888c.165.16.716.463 1.612.463z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconSwimmingPoolIcon;
/* prettier-ignore-end */
