import React, { Component, ReactNode, ReactComponentElement } from "react";
import { ListView } from "..";
import { ListRow } from "../ExportDefinition";
interface ItemsProps {
    listView: ListView;
    xScroll: number;
    draggable: boolean;
    headerSizes: number[];
    headerTypes: ("string" | "number")[];
    children: ReactComponentElement<typeof ListRow>[];
    sortOrder?: boolean;
    sortIndex?: number;
    sortType?: string;
    selectItems: Set<number>;
    onClick: (e: React.MouseEvent, row: number, col: number) => void;
    onDoubleClick: (e: React.MouseEvent, row: number, col: number) => void;
    onItemDragStart?: (e: React.DragEvent, row: number, col: number) => void;
    onItemDragEnter?: (e: React.DragEvent, row: number, col: number) => void;
    onItemDragLeave?: (e: React.DragEvent, row: number, col: number) => void;
    onItemDragOver?: (e: React.DragEvent, row: number, col: number) => void;
    onItemDrop?: (e: React.DragEvent, row: number, col: number) => void;
}
export interface ItemRow {
    value?: unknown;
    items: {
        label: ReactNode;
        value?: unknown;
    }[];
}
interface State {
    itemRows: ItemRow[];
}
export declare class ItemArea extends Component<ItemsProps, State> {
    state: State;
    private rootRef;
    private columnsRef;
    private itemsRef;
    private sortOrder?;
    private sortIndex?;
    private itemRows;
    private fileImage?;
    private sortFlag;
    componentDidUpdate(): void;
    shouldComponentUpdate(props: ItemsProps): boolean;
    private createItem;
    componentDidMount(): void;
    render(): JSX.Element;
    protected onOver(index: number, flag: boolean): void;
    protected sort(): void;
    protected onDragStart(e: React.DragEvent, row: number, col: number): void;
    protected onDragLeave(e: React.DragEvent, row: number, col: number): void;
    protected onDragEnter(e: React.DragEvent, row: number, col: number): void;
    protected onDragOver(e: React.DragEvent, row: number, col: number): void;
    protected onDrop(e: React.DragEvent, row: number, col: number): void;
    getItems(): ItemRow[];
    addItem(item: ItemRow): void;
    removeItem(row: number): void;
}
export {};
