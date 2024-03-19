export interface Node {
  id: number;
  name: string;
  children: Node[];
}
export interface TreeNodeProps {
  data: Node;
  onDataChange: React.Dispatch<React.SetStateAction<any>>;
  onAddChild: () => void;
  onRemove: () => void;
  onRemoveChild: (index: number) => void;
}
