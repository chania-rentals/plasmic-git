// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: DFSgDk7xEF4uDtL4KTuii
// Component: mfkTZPVpA-

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

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic_plasmic_rich_components.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic_blank_website.module.css"; // plasmic-import: DFSgDk7xEF4uDtL4KTuii/projectcss
import sty from "./PlasmicHowToBook.module.css"; // plasmic-import: mfkTZPVpA-/css

createPlasmicElementProxy;

export type PlasmicHowToBook__VariantMembers = {};
export type PlasmicHowToBook__VariantsArgs = {};
type VariantPropType = keyof PlasmicHowToBook__VariantsArgs;
export const PlasmicHowToBook__VariantProps = new Array<VariantPropType>();

export type PlasmicHowToBook__ArgsType = {};
type ArgPropType = keyof PlasmicHowToBook__ArgsType;
export const PlasmicHowToBook__ArgProps = new Array<ArgPropType>();

export type PlasmicHowToBook__OverridesType = {
  root?: p.Flex<"div">;
  h1?: p.Flex<"h1">;
};

export interface DefaultHowToBookProps {}

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

function PlasmicHowToBook__RenderFunc(props: {
  variants: PlasmicHowToBook__VariantsArgs;
  args: PlasmicHowToBook__ArgsType;
  overrides: PlasmicHowToBook__OverridesType;
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
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
        <title key="title">{PlasmicHowToBook.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicHowToBook.pageMetadata.title}
        />
        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicHowToBook.pageMetadata.title}
        />
        <meta
          key="description"
          name="description"
          content={PlasmicHowToBook.pageMetadata.description}
        />
        <meta
          key="og:description"
          property="og:description"
          content={PlasmicHowToBook.pageMetadata.description}
        />
        <meta
          key="twitter:description"
          name="twitter:description"
          content={PlasmicHowToBook.pageMetadata.description}
        />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
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
            plasmic_antd_5_hostless_css.plasmic_tokens,
            plasmic_plasmic_rich_components_css.plasmic_tokens,
            sty.root
          )}
        >
          <h1
            data-plasmic-name={"h1"}
            data-plasmic-override={overrides.h1}
            className={classNames(
              projectcss.all,
              projectcss.h1,
              projectcss.__wab_text,
              sty.h1
            )}
          >
            {"How to book"}
          </h1>
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__v2Hg5)}
          >
            {true ? (
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__eziFn)}
              >
                <h3
                  className={classNames(
                    projectcss.all,
                    projectcss.h3,
                    projectcss.__wab_text,
                    sty.h3__yKeqc
                  )}
                >
                  {"Find your dream villa"}
                </h3>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text___15Tu3
                  )}
                >
                  {
                    "Search our site for the ideal villa for you. You will find villas for all tastes and budgets. If you have some specific requirements - view, proximity to amenities etc. - you can either complete the Contact Us form or send us an email directly at our email address info@chania-rentals.com and we will send you our best options for you!"
                  }
                </div>
              </p.Stack>
            ) : null}
            {true ? (
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__ako52)}
              >
                <h3
                  className={classNames(
                    projectcss.all,
                    projectcss.h3,
                    projectcss.__wab_text,
                    sty.h3__e7Nl
                  )}
                >
                  {"Secure your reservation"}
                </h3>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__ejwIc
                  )}
                >
                  {
                    "Once you find the perfect villa for you you must secure the booking. On the description page of each villa it is mentioned the required deposit amount. The payment can be made either with credit card online thorugh our site or by bank transfer. To avoid double-bookings and misunderstandings, we always want to check the booking requests before the payment, so there is not a payment form. You have to confirm your interest sending us an email and we will activate the payment form so you can proceed."
                  }
                </div>
              </p.Stack>
            ) : null}
            {true ? (
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__yzc5D)}
              >
                <h3
                  className={classNames(
                    projectcss.all,
                    projectcss.h3,
                    projectcss.__wab_text,
                    sty.h3__dvor7
                  )}
                >
                  {"Check your booking"}
                </h3>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__cJHxC
                  )}
                >
                  {
                    "After the payment - immediately if you pay with credit card or after we receive the payment if you choose the bank transfer - you will have access to a page on our site with all the details of your booking. From this page you will be able to download driving directions to the villa. On the same page, you will have to complete your arrival details at least 15 days before your arrival, as the villa owner needs to organize your arrival."
                  }
                </div>
              </p.Stack>
            ) : null}
            {true ? (
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__iWbzQ)}
              >
                <h3
                  className={classNames(
                    projectcss.all,
                    projectcss.h3,
                    projectcss.__wab_text,
                    sty.h3__liHwN
                  )}
                >
                  {"Complete the payment"}
                </h3>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__kQhJv
                  )}
                >
                  {
                    "On the description page of each villa you will find the balance payment methods. In case you prefer to pay prior your arrival, please contact us a couple of days before the payment due day."
                  }
                </div>
              </p.Stack>
            ) : null}
            {true ? (
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__wzWjD)}
              >
                <h3
                  className={classNames(
                    projectcss.all,
                    projectcss.h3,
                    projectcss.__wab_text,
                    sty.h3__j914L
                  )}
                >
                  {"Get ready for your trip"}
                </h3>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__jMdBy
                  )}
                >
                  {
                    "Before you leave home, be sure that you have downloaded the driving directions that you will find on your reservation page on our site. The owner's contact number and the coordinates of the villa are also written in this document. Please also check that you have competed all fields on your reservation page, as the owner needs to know your arrival information so he can be at the villa on your arrival. Last but not least, make sure that your good mood is on your bag!"
                  }
                </div>
              </p.Stack>
            ) : null}
          </p.Stack>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "h1"],
  h1: ["h1"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  h1: "h1";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHowToBook__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHowToBook__VariantsArgs;
    args?: PlasmicHowToBook__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHowToBook__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicHowToBook__ArgsType,
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
          internalArgPropNames: PlasmicHowToBook__ArgProps,
          internalVariantPropNames: PlasmicHowToBook__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicHowToBook__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHowToBook";
  } else {
    func.displayName = `PlasmicHowToBook.${nodeName}`;
  }
  return func;
}

export const PlasmicHowToBook = Object.assign(
  // Top-level PlasmicHowToBook renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    h1: makeNodeComponent("h1"),

    // Metadata about props expected for PlasmicHowToBook
    internalVariantProps: PlasmicHowToBook__VariantProps,
    internalArgProps: PlasmicHowToBook__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "How To Book | Chania Rentals",
      description:
        "The best way to choose is to let us know what you need and we will help you find the perfect villa for you!",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicHowToBook;
/* prettier-ignore-end */
