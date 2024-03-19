"use client";
import React, { useContext, useState } from "react";
import { Button } from "@/components/ui/button";
import { Node, TreeNodeProps } from "@/types";
import { treeContext } from "@/context/TreeProvider";
let nextId = 2;
const TreeNode: React.FC<TreeNodeProps> = ({
  data,
  onDataChange,
  onAddChild,
  onRemove,
  onRemoveChild,
}) => {
  const handleInputChange = (key: string, value: string) => {
    const updatedData = { ...data, [key]: value };
    onDataChange(updatedData);
  };

  const handleAddChild = () => {
    const newChild = { id: nextId++, name: "", children: [] };
    const updatedChildren = [...data.children, newChild];
    const updatedData = { ...data, children: updatedChildren };
    onDataChange(updatedData);
  };

  const handleRemoveChild = (index: number) => {
    const updatedChildren = [
      ...data.children.slice(0, index),
      ...data.children.slice(index + 1),
    ];
    const updatedData = { ...data, children: updatedChildren };
    onDataChange(updatedData);
  };

  return (
    <div className="ml-5 mt-2">
      <input
        className="border-2 p-2 rounded-md mr-2"
        type="text"
        placeholder="Name"
        value={data.name}
        onChange={(e) => handleInputChange("name", e.target.value)}
      />
      <Button className="bg-green-400 mr-4 p-2" onClick={handleAddChild}>
        Add Child
      </Button>
      <Button className="bg-red-600" onClick={onRemove}>
        Remove
      </Button>
      {data.children.map((child, index) => (
        <TreeNode
          key={index}
          data={child}
          onDataChange={(updatedChild) => {
            const updatedChildren = [...data.children];
            updatedChildren[index] = updatedChild;
            onDataChange({ ...data, children: updatedChildren });
          }}
          onAddChild={() => handleAddChild()}
          onRemove={() => handleRemoveChild(index)}
          onRemoveChild={onRemoveChild}
        />
      ))}
    </div>
  );
};

const TreeForm = () => {
  const { nestedObject, setNestedObject } = useContext(treeContext);
  const handleRemoveChildAtIndex = (index: number) => {
    const updatedChildren = [
      ...nestedObject.children.slice(0, index),
      ...nestedObject.children.slice(index + 1),
    ];
    const updatedData = { ...nestedObject, children: updatedChildren };
    setNestedObject(updatedData);
  };
  return (
    <div>
      <h1 className="text-2xl">Create Tree</h1>
      <div className="mt-16">
        <TreeNode
          data={nestedObject}
          onDataChange={setNestedObject}
          onAddChild={() => {
            const newChild = { id: nextId++, name: "", children: [] };
            const updatedChildren = [...nestedObject.children, newChild];
            setNestedObject({ ...nestedObject, children: updatedChildren });
          }}
          onRemove={() =>
            setNestedObject({ id: nextId, name: "Root", children: [] })
          }
          onRemoveChild={handleRemoveChildAtIndex}
        />
      </div>
    </div>
  );
};

export default TreeForm;
