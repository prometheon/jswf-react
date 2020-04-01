import { Component, ReactNode } from "react";
import { TreeItem } from "./Item/TreeItem";
interface Props {
    children?: ReactNode;
    itemStyle?: number;
    onExpand?: (item: TreeItem, expand: boolean, first: boolean) => void;
    onItemClick?: (item: TreeItem) => void;
    onItemDoubleClick?: (item: TreeItem) => void;
}
interface State {
    item: TreeItemData;
}
export interface TreeItemData {
    itemStyle: number;
    label: ReactNode;
    expand: boolean;
    value: unknown;
    select: boolean;
    checked: boolean;
    uniqueKey: number;
    keys: {
        [key: string]: unknown;
    };
    parent: TreeItemData | null;
    children: TreeItemData[];
    onExpand?: (expand: boolean, first: boolean) => void;
    onItemClick?: () => void;
    onDoubleClick?: () => void;
}
export declare const ItemDataDefault: {
    itemStyle: number;
    label: string;
    value: undefined;
    expand: boolean;
    select: boolean;
    checked: boolean;
    keys: {};
    children: never[];
};
export declare var UniqueKey: {
    value: number;
};
/**
 *TreeViewクラス
 *
 * @export
 * @class TreeView
 * @extends {Component<Props, State>}
 */
export declare class TreeView extends Component<Props, State> {
    private rootItemRef;
    private select;
    private item;
    constructor(props: Props);
    render(): JSX.Element;
    componentDidMount(): void;
    /**
     *Rootアイテムを返す
     *
     * @returns {TreeItem}
     * @memberof TreeView
     */
    getItem(): TreeItem;
    /**
     *該当する値を持つアイテムを一つ返す
     *
     * @param {unknown} value
     * @returns {(TreeItem | null)}
     * @memberof TreeView
     */
    findItem(value: unknown): TreeItem | null;
    /**
     *該当する値を持つアイテムを複数返す
     *
     * @param {unknown} value
     * @returns {TreeItem[]}
     * @memberof TreeView
     */
    findItems(value: unknown): TreeItem[];
    /**
     *アイテムを削除する
     *
     * @param {TreeItem} item
     * @returns {boolean}
     * @memberof TreeView
     */
    delItem(item: TreeItem): boolean;
    /**
     *選択中のアイテムを返す
     *
     * @returns {(TreeItem | null)}
     * @memberof TreeView
     */
    getSelectItem(): TreeItem | null;
    /**
     *アイテムを選択する
     *
     * @param {(TreeItem | null)} item
     * @memberof TreeView
     */
    selectItem(item: TreeItem | null): void;
    /**
     *チェック中のアイテムを複数返す
     *
     * @returns {TreeItem[]}
     * @memberof TreeView
     */
    getCheckItems(): TreeItem[];
    getRootUniqueKey(): number;
}
export {};
