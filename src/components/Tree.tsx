"use client";
import { TreeItem, TreeView } from "@mui/x-tree-view";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import React, { useContext } from "react";
import { ThemeController } from "./ThemeController";

import { Node } from "@/types";
import { treeContext } from "@/context/TreeProvider";

const Tree = () => {
  const { nestedObject } = useContext(treeContext);
  const renderTree = (nodes: Node) => (
    <TreeItem key={nodes.id} nodeId={nodes.id.toString()} label={nodes.name}>
      {Array.isArray(nodes.children)
        ? nodes.children.map((node) => renderTree(node))
        : null}
    </TreeItem>
  );
  return (
    <section className="border-[1px] w-1/4 h-full overflow-scroll no-scrollbar rounded-xl p-5">
      <div className="text-2xl flex justify-between">
        <div>
          <h1 className="font-thin">Test</h1>
          <h1>Shadcn/ui</h1>
        </div>
        <ThemeController />
      </div>
      <div className="mt-5">
        <TreeView
          aria-label="rich object"
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpanded={["root"]}
          defaultExpandIcon={<ChevronRightIcon />}
        >
          {renderTree(nestedObject)}
        </TreeView>
      </div>
    </section>
  );
};

export default Tree;
