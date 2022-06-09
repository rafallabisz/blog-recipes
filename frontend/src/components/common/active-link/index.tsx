import { useRouter } from "next/router";
import { UrlObject } from "url";
import React, { cloneElement } from "react";
import Link, { LinkProps as NextLinkProps } from "next/link";

interface Props extends Partial<NextLinkProps> {
  href: UrlObject | string;
  children: JSX.Element;
  activeClassName?: string;
}

const ActiveLink = ({
  href,
  children,
  activeClassName = "active",
  passHref = true,
  ...rest
}: Props) => {
  const router = useRouter();

  const pathname = typeof href === "string" ? href : href.pathname;

  let className = children.props.className || "";
  if (router.pathname === pathname) {
    className = `${className} ${activeClassName}`;
  }

  return (
    <Link href={href} prefetch={false} passHref={passHref} {...rest}>
      {cloneElement(children, { className })}
    </Link>
  );
};

export default ActiveLink;
