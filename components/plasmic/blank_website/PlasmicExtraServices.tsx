// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: DFSgDk7xEF4uDtL4KTuii
// Component: 6XOlJuwr_I

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import ExtraServices2 from "../../ExtraServices2"; // plasmic-import: nSt5TCeTKDE/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_visitors_css from "../visitors/plasmic_visitors.module.css"; // plasmic-import: w4yYo48qoeavp6MLu5USrX/projectcss
import projectcss from "./plasmic_blank_website.module.css"; // plasmic-import: DFSgDk7xEF4uDtL4KTuii/projectcss
import sty from "./PlasmicExtraServices.module.css"; // plasmic-import: 6XOlJuwr_I/css

export type PlasmicExtraServices__VariantMembers = {};
export type PlasmicExtraServices__VariantsArgs = {};
type VariantPropType = keyof PlasmicExtraServices__VariantsArgs;
export const PlasmicExtraServices__VariantProps = new Array<VariantPropType>();

export type PlasmicExtraServices__ArgsType = {};
type ArgPropType = keyof PlasmicExtraServices__ArgsType;
export const PlasmicExtraServices__ArgProps = new Array<ArgPropType>();

export type PlasmicExtraServices__OverridesType = {
  root?: p.Flex<"div">;
  extraServices2?: p.Flex<typeof ExtraServices2>;
};

export interface DefaultExtraServicesProps {
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicExtraServices__RenderFunc(props: {
  variants: PlasmicExtraServices__VariantsArgs;
  args: PlasmicExtraServices__ArgsType;
  overrides: PlasmicExtraServices__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const __nextRouter = useNextRouter();

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};

  const [$queries, setDollarQueries] = React.useState({});

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_visitors_css.plasmic_tokens,
        sty.root
      )}
    >
      <ExtraServices2
        data-plasmic-name={"extraServices2"}
        data-plasmic-override={overrides.extraServices2}
        className={classNames("__wab_instance", sty.extraServices2)}
      />
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "extraServices2"],
  extraServices2: ["extraServices2"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  extraServices2: typeof ExtraServices2;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicExtraServices__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicExtraServices__VariantsArgs;
    args?: PlasmicExtraServices__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicExtraServices__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicExtraServices__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicExtraServices__ArgProps,
          internalVariantPropNames: PlasmicExtraServices__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicExtraServices__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicExtraServices";
  } else {
    func.displayName = `PlasmicExtraServices.${nodeName}`;
  }
  return func;
}

export const PlasmicExtraServices = Object.assign(
  // Top-level PlasmicExtraServices renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    extraServices2: makeNodeComponent("extraServices2"),

    // Metadata about props expected for PlasmicExtraServices
    internalVariantProps: PlasmicExtraServices__VariantProps,
    internalArgProps: PlasmicExtraServices__ArgProps
  }
);

export default PlasmicExtraServices;
/* prettier-ignore-end */