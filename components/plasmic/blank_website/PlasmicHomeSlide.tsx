// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: DFSgDk7xEF4uDtL4KTuii
// Component: wtJWL5MKRdX

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

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_visitors_css from "../visitors/plasmic_visitors.module.css"; // plasmic-import: w4yYo48qoeavp6MLu5USrX/projectcss
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic_plasmic_rich_components.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic_blank_website.module.css"; // plasmic-import: DFSgDk7xEF4uDtL4KTuii/projectcss
import sty from "./PlasmicHomeSlide.module.css"; // plasmic-import: wtJWL5MKRdX/css

export type PlasmicHomeSlide__VariantMembers = {};
export type PlasmicHomeSlide__VariantsArgs = {};
type VariantPropType = keyof PlasmicHomeSlide__VariantsArgs;
export const PlasmicHomeSlide__VariantProps = new Array<VariantPropType>();

export type PlasmicHomeSlide__ArgsType = {
  name?: string;
  location?: string;
  image?: string;
  url?: string;
};
type ArgPropType = keyof PlasmicHomeSlide__ArgsType;
export const PlasmicHomeSlide__ArgProps = new Array<ArgPropType>(
  "name",
  "location",
  "image",
  "url"
);

export type PlasmicHomeSlide__OverridesType = {
  root?: p.Flex<"div">;
  aquilaVilla?: p.Flex<"section">;
  section?: p.Flex<"section">;
  link?: p.Flex<"a"> & Partial<LinkProps>;
  img?: p.Flex<typeof p.PlasmicImg>;
};

export interface DefaultHomeSlideProps {
  name?: string;
  location?: string;
  image?: string;
  url?: string;
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

function PlasmicHomeSlide__RenderFunc(props: {
  variants: PlasmicHomeSlide__VariantsArgs;
  args: PlasmicHomeSlide__ArgsType;
  overrides: PlasmicHomeSlide__OverridesType;
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
        plasmic_antd_5_hostless_css.plasmic_tokens,
        plasmic_plasmic_rich_components_css.plasmic_tokens,
        sty.root
      )}
    >
      <section
        data-plasmic-name={"aquilaVilla"}
        data-plasmic-override={overrides.aquilaVilla}
        className={classNames(projectcss.all, sty.aquilaVilla)}
      >
        <section
          data-plasmic-name={"section"}
          data-plasmic-override={overrides.section}
          className={classNames(projectcss.all, sty.section)}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text___0CKzt
            )}
          >
            <React.Fragment>
              {(() => {
                try {
                  return $props.name;
                } catch (e) {
                  if (
                    e instanceof TypeError ||
                    e?.plasmicType === "PlasmicUndefinedDataError"
                  ) {
                    return "Aquila Villa";
                  }
                  throw e;
                }
              })()}
            </React.Fragment>
          </div>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__duTd9
            )}
          >
            <React.Fragment>
              {(() => {
                try {
                  return $props.location;
                } catch (e) {
                  if (
                    e instanceof TypeError ||
                    e?.plasmicType === "PlasmicUndefinedDataError"
                  ) {
                    return "Drapanos village";
                  }
                  throw e;
                }
              })()}
            </React.Fragment>
          </div>
          <p.PlasmicLink
            data-plasmic-name={"link"}
            data-plasmic-override={overrides.link}
            className={classNames(
              projectcss.all,
              projectcss.a,
              projectcss.__wab_text,
              sty.link
            )}
            component={Link}
            href={(() => {
              try {
                return $props.url;
              } catch (e) {
                if (
                  e instanceof TypeError ||
                  e?.plasmicType === "PlasmicUndefinedDataError"
                ) {
                  return "https://chania-rentals.com/chania-villas/aquila-villa";
                }
                throw e;
              }
            })()}
            platform={"nextjs"}
          >
            {"more info"}
          </p.PlasmicLink>
        </section>
        <p.PlasmicImg
          data-plasmic-name={"img"}
          data-plasmic-override={overrides.img}
          alt={""}
          className={classNames(sty.img)}
          displayHeight={"500px" as const}
          displayMaxHeight={"none" as const}
          displayMaxWidth={"100%" as const}
          displayMinHeight={"0" as const}
          displayMinWidth={"0" as const}
          displayWidth={"100%" as const}
          src={(() => {
            try {
              return $props.image;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return "https://chania-rentals.com/_ipx/w_3840,q_75/https%3A%2F%2Fchania-rentals-static.s3.eu-west-2.amazonaws.com%2Fvillas%2Faquila-villa%2Fslides-full%2FAquila-Villa%2810%29.jpg?url=https%3A%2F%2Fchania-rentals-static.s3.eu-west-2.amazonaws.com%2Fvillas%2Faquila-villa%2Fslides-full%2FAquila-Villa(10).jpg&w=3840&q=75";
              }
              throw e;
            }
          })()}
        />
      </section>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "aquilaVilla", "section", "link", "img"],
  aquilaVilla: ["aquilaVilla", "section", "link", "img"],
  section: ["section", "link"],
  link: ["link"],
  img: ["img"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  aquilaVilla: "section";
  section: "section";
  link: "a";
  img: typeof p.PlasmicImg;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHomeSlide__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHomeSlide__VariantsArgs;
    args?: PlasmicHomeSlide__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHomeSlide__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicHomeSlide__ArgsType,
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
          internalArgPropNames: PlasmicHomeSlide__ArgProps,
          internalVariantPropNames: PlasmicHomeSlide__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicHomeSlide__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomeSlide";
  } else {
    func.displayName = `PlasmicHomeSlide.${nodeName}`;
  }
  return func;
}

export const PlasmicHomeSlide = Object.assign(
  // Top-level PlasmicHomeSlide renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    aquilaVilla: makeNodeComponent("aquilaVilla"),
    section: makeNodeComponent("section"),
    link: makeNodeComponent("link"),
    img: makeNodeComponent("img"),

    // Metadata about props expected for PlasmicHomeSlide
    internalVariantProps: PlasmicHomeSlide__VariantProps,
    internalArgProps: PlasmicHomeSlide__ArgProps
  }
);

export default PlasmicHomeSlide;
/* prettier-ignore-end */
