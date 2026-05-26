"use client";

import { usePathname } from "next/navigation";
import { DropdownItem } from "./dropdown-item";
import { navigation } from "../lib/navigation";
import { useState } from "react";
import type { Dispatch, SetStateAction } from "react";

type NavNode = (typeof navigation)[number];

type RenderNodeProps = {
  node: NavNode;
  level: number;
  pathKey: string;
  openPaths: string[];
  setOpenPaths: Dispatch<SetStateAction<string[]>>;
  pathname: string;
};

function collectCurrentPathKeys(nodes: NavNode[], pathname: string, prefix = ""): string[] {
  for (const node of nodes) {
    const key = prefix ? `${prefix}/${node.title}` : node.title;
    const hasDirectMatch = node.href === pathname;
    const childKeys = node.items ? collectCurrentPathKeys(node.items, pathname, key) : [];

    if (hasDirectMatch || childKeys.length > 0) {
      return [key, ...childKeys];
    }
  }

  return [] as string[];
}

function getPathPrefixes(pathKey: string) {
  const parts = pathKey.split("/");
  const prefixes: string[] = [];

  for (let index = 1; index <= parts.length; index += 1) {
    prefixes.push(parts.slice(0, index).join("/"));
  }

  return prefixes;
}

function RenderNode({
  node,
  level,
  pathKey,
  openPaths,
  setOpenPaths,
  pathname,
}: RenderNodeProps) {
  const hasChildren = Boolean(node.items?.length);
  const isActive = pathname === node.href;
  const isExpanded = hasChildren ? openPaths.includes(pathKey) : false;

  if (!hasChildren) {
    return (
      <DropdownItem
        key={pathKey}
        tag="a"
        href={node.href ?? "#"}
        className={isActive ? "sidebar__link sidebar__link--active" : "sidebar__link"}
        baseClassName={`sidebar__item sidebar__item--level-${level}`}
        onItemClick={() => {
          setOpenPaths((current) => Array.from(new Set([...current, ...getPathPrefixes(pathKey)])));
        }}
      >
        {node.title}
      </DropdownItem>
    );
  }

  return (
    <div className={`sidebar__nested sidebar__nested--level-${level}`}>
      <button
        type="button"
        className="sidebar__summary sidebar__summary--nested dropdown-toggle"
        data-open={isExpanded}
        onClick={() => {
          setOpenPaths((current) =>
            current.includes(pathKey)
              ? current.filter((item) => item !== pathKey)
              : [...current, pathKey],
          );
        }}
      >
        <span>{node.title}</span>
        <span className="sidebar__chevron" aria-hidden="true">
          ▶
        </span>
      </button>

      {isExpanded ? (
        <nav className="sidebar__links sidebar__links--nested" aria-label={node.title}>
          {node.items?.map((child) => (
            <RenderNode
              key={`${pathKey}/${child.title}`}
              node={child}
              level={level + 1}
              pathKey={`${pathKey}/${child.title}`}
              openPaths={openPaths}
              setOpenPaths={setOpenPaths}
              pathname={pathname}
            />
          ))}
        </nav>
      ) : null}
    </div>
  );
}

export function Sidebar() {
  const pathname = usePathname();
  const [openPaths, setOpenPaths] = useState<string[]>(() => collectCurrentPathKeys(navigation, pathname));

  return (
    <aside className="sidebar" aria-label="Primary navigation">
      <div className="sidebar__brand">
        <div className="sidebar__brand-mark">HS</div>
        <div className="sidebar__brand-copy">
          <span className="sidebar__brand-title">HSMS</span>
          <span className="sidebar__brand-subtitle">Hospital Suite</span>
        </div>
      </div>

      {navigation.map((section) => (
        <RenderNode
          key={section.title}
          node={section}
          level={0}
          pathKey={section.title}
          openPaths={openPaths}
          setOpenPaths={setOpenPaths}
          pathname={pathname}
        />
      ))}
    </aside>
  );
}