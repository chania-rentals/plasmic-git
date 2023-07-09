// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: DFSgDk7xEF4uDtL4KTuii
// Component: nSt5TCeTKDE

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

import { useScreenVariants as useScreenVariants_793QbDbnmqZpDb } from "../visitors/PlasmicGlobalVariant__Screen"; // plasmic-import: 793qbDbnmqZPDb/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_visitors_css from "../visitors/plasmic_visitors.module.css"; // plasmic-import: w4yYo48qoeavp6MLu5USrX/projectcss
import projectcss from "./plasmic_blank_website.module.css"; // plasmic-import: DFSgDk7xEF4uDtL4KTuii/projectcss
import sty from "./PlasmicExtraServices2.module.css"; // plasmic-import: nSt5TCeTKDE/css

export type PlasmicExtraServices2__VariantMembers = {};
export type PlasmicExtraServices2__VariantsArgs = {};
type VariantPropType = keyof PlasmicExtraServices2__VariantsArgs;
export const PlasmicExtraServices2__VariantProps = new Array<VariantPropType>();

export type PlasmicExtraServices2__ArgsType = {};
type ArgPropType = keyof PlasmicExtraServices2__ArgsType;
export const PlasmicExtraServices2__ArgProps = new Array<ArgPropType>();

export type PlasmicExtraServices2__OverridesType = {
  root?: p.Flex<"div">;
  frame24?: p.Flex<"div">;
  frame23?: p.Flex<"div">;
  frame21?: p.Flex<"div">;
  httpsChaniaRentalsStatics3EuWest2AmazonawscomImagesBeetle1?: p.Flex<"div">;
  frame10?: p.Flex<"a"> & Partial<LinkProps>;
  frame22?: p.Flex<"div">;
  httpsChaniaRentalsStatics3EuWest2AmazonawscomImagesBeetle2?: p.Flex<"div">;
  frame11?: p.Flex<"a"> & Partial<LinkProps>;
};

export interface DefaultExtraServices2Props {
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

function PlasmicExtraServices2__RenderFunc(props: {
  variants: PlasmicExtraServices2__VariantsArgs;
  args: PlasmicExtraServices2__ArgsType;
  overrides: PlasmicExtraServices2__OverridesType;
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

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants_793QbDbnmqZpDb()
  });

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
      <p.Stack
        as={"div"}
        data-plasmic-name={"frame24"}
        data-plasmic-override={overrides.frame24}
        hasGap={true}
        className={classNames(projectcss.all, sty.frame24)}
      >
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text___5Xswf
          )}
        >
          {"Extra Services"}
        </div>
        <p.Stack
          as={"div"}
          data-plasmic-name={"frame23"}
          data-plasmic-override={overrides.frame23}
          hasGap={true}
          className={classNames(projectcss.all, sty.frame23)}
        >
          <p.Stack
            as={"div"}
            data-plasmic-name={"frame21"}
            data-plasmic-override={overrides.frame21}
            hasGap={true}
            className={classNames(projectcss.all, sty.frame21)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__dTd0V
              )}
            >
              {"Rent a car"}
            </div>
            <div
              data-plasmic-name={
                "httpsChaniaRentalsStatics3EuWest2AmazonawscomImagesBeetle1"
              }
              data-plasmic-override={
                overrides.httpsChaniaRentalsStatics3EuWest2AmazonawscomImagesBeetle1
              }
              className={classNames(
                projectcss.all,
                sty.httpsChaniaRentalsStatics3EuWest2AmazonawscomImagesBeetle1
              )}
            />

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__kAfZ
              )}
            >
              {
                "Select a car from our collection and book without hidden fees and security deposit, with free extra drivers, child seats and pick-up and drop-off at Chania and Heraklion airport."
              }
            </div>
            <p.Stack
              as={p.PlasmicLink}
              data-plasmic-name={"frame10"}
              data-plasmic-override={overrides.frame10}
              hasGap={true}
              className={classNames(projectcss.all, projectcss.a, sty.frame10)}
              component={Link}
              href={"https://chania-rentals.com/chania-cars" as const}
              platform={"nextjs"}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___5Fe6X
                )}
              >
                {"more info"}
              </div>
            </p.Stack>
          </p.Stack>
          <p.Stack
            as={"div"}
            data-plasmic-name={"frame22"}
            data-plasmic-override={overrides.frame22}
            hasGap={true}
            className={classNames(projectcss.all, sty.frame22)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__ve3Pv
              )}
            >
              {"Rent a boat"}
            </div>
            <div
              data-plasmic-name={
                "httpsChaniaRentalsStatics3EuWest2AmazonawscomImagesBeetle2"
              }
              data-plasmic-override={
                overrides.httpsChaniaRentalsStatics3EuWest2AmazonawscomImagesBeetle2
              }
              className={classNames(
                projectcss.all,
                sty.httpsChaniaRentalsStatics3EuWest2AmazonawscomImagesBeetle2
              )}
            />

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__pcHg
              )}
            >
              {
                "Select a car from our collection and book without hidden fees and security deposit, with free extra drivers, child seats and pick-up and drop-off at Chania and Heraklion airport."
              }
            </div>
            <p.Stack
              as={p.PlasmicLink}
              data-plasmic-name={"frame11"}
              data-plasmic-override={overrides.frame11}
              hasGap={true}
              className={classNames(projectcss.all, projectcss.a, sty.frame11)}
              component={Link}
              href={"https://www.seabreezecruises.gr/" as const}
              platform={"nextjs"}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__z2Z94
                )}
              >
                {"more info"}
              </div>
            </p.Stack>
          </p.Stack>
        </p.Stack>
      </p.Stack>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "frame24",
    "frame23",
    "frame21",
    "httpsChaniaRentalsStatics3EuWest2AmazonawscomImagesBeetle1",
    "frame10",
    "frame22",
    "httpsChaniaRentalsStatics3EuWest2AmazonawscomImagesBeetle2",
    "frame11"
  ],
  frame24: [
    "frame24",
    "frame23",
    "frame21",
    "httpsChaniaRentalsStatics3EuWest2AmazonawscomImagesBeetle1",
    "frame10",
    "frame22",
    "httpsChaniaRentalsStatics3EuWest2AmazonawscomImagesBeetle2",
    "frame11"
  ],
  frame23: [
    "frame23",
    "frame21",
    "httpsChaniaRentalsStatics3EuWest2AmazonawscomImagesBeetle1",
    "frame10",
    "frame22",
    "httpsChaniaRentalsStatics3EuWest2AmazonawscomImagesBeetle2",
    "frame11"
  ],
  frame21: [
    "frame21",
    "httpsChaniaRentalsStatics3EuWest2AmazonawscomImagesBeetle1",
    "frame10"
  ],
  httpsChaniaRentalsStatics3EuWest2AmazonawscomImagesBeetle1: [
    "httpsChaniaRentalsStatics3EuWest2AmazonawscomImagesBeetle1"
  ],
  frame10: ["frame10"],
  frame22: [
    "frame22",
    "httpsChaniaRentalsStatics3EuWest2AmazonawscomImagesBeetle2",
    "frame11"
  ],
  httpsChaniaRentalsStatics3EuWest2AmazonawscomImagesBeetle2: [
    "httpsChaniaRentalsStatics3EuWest2AmazonawscomImagesBeetle2"
  ],
  frame11: ["frame11"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  frame24: "div";
  frame23: "div";
  frame21: "div";
  httpsChaniaRentalsStatics3EuWest2AmazonawscomImagesBeetle1: "div";
  frame10: "a";
  frame22: "div";
  httpsChaniaRentalsStatics3EuWest2AmazonawscomImagesBeetle2: "div";
  frame11: "a";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicExtraServices2__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicExtraServices2__VariantsArgs;
    args?: PlasmicExtraServices2__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicExtraServices2__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicExtraServices2__ArgsType,
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
          internalArgPropNames: PlasmicExtraServices2__ArgProps,
          internalVariantPropNames: PlasmicExtraServices2__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicExtraServices2__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicExtraServices2";
  } else {
    func.displayName = `PlasmicExtraServices2.${nodeName}`;
  }
  return func;
}

export const PlasmicExtraServices2 = Object.assign(
  // Top-level PlasmicExtraServices2 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    frame24: makeNodeComponent("frame24"),
    frame23: makeNodeComponent("frame23"),
    frame21: makeNodeComponent("frame21"),
    httpsChaniaRentalsStatics3EuWest2AmazonawscomImagesBeetle1:
      makeNodeComponent(
        "httpsChaniaRentalsStatics3EuWest2AmazonawscomImagesBeetle1"
      ),
    frame10: makeNodeComponent("frame10"),
    frame22: makeNodeComponent("frame22"),
    httpsChaniaRentalsStatics3EuWest2AmazonawscomImagesBeetle2:
      makeNodeComponent(
        "httpsChaniaRentalsStatics3EuWest2AmazonawscomImagesBeetle2"
      ),
    frame11: makeNodeComponent("frame11"),

    // Metadata about props expected for PlasmicExtraServices2
    internalVariantProps: PlasmicExtraServices2__VariantProps,
    internalArgProps: PlasmicExtraServices2__ArgProps
  }
);

export default PlasmicExtraServices2;
/* prettier-ignore-end */