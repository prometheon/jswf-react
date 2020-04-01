import React, { Component, ReactNode } from "react";
import { TreeView, TreeItemData } from "..";
export declare enum TreeItemStyle {
    CHECKBOX = 1
}
export interface TreeItemProps {
    itemStyle?: number;
    children?: ReactNode;
    label?: ReactNode;
    expand?: boolean;
    value?: unknown;
    treeView?: TreeView;
    parent?: TreeItem | TreeView;
    select?: false;
    checked?: false;
    uniqueKey?: number;
    onExpand?: (expand: boolean, create: boolean) => void;
    onItemClick?: () => void;
    onDoubleClick?: () => void;
    item?: TreeItemData;
}
export interface State {
    item: TreeItemData;
    childAnimation?: boolean;
    expandState?: boolean;
}
/**
 *TreeView用アイテムクラス
 *
 * @export
 * @class TreeItem
 * @extends {Component<TreeItemProps, State>}
 */
export declare class TreeItem extends Component<TreeItemProps, State> {
    static referenceItem: Map<number, TreeItem>;
    static defaultProps: {
        itemStyle: number;
        label: string;
        expand: boolean;
        select: boolean;
        checked: boolean;
        items: never[];
    };
    private updateCache;
    private keyCache;
    private item;
    private mount;
    constructor(props: TreeItemProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    shouldComponentUpdate(_props: TreeItemProps, state: State): boolean;
    render(): JSX.Element;
    updateState(): void;
    onSelect(select: boolean): void;
    /**
     *ツリーの開閉を行う
     *
     * @param {boolean} expand 開閉状態
     * @memberof TreeItem
     */
    setExpand(expand: boolean): void;
    /**
     *アイテムを選択する
     *
     * @memberof TreeItem
     */
    select(): void;
    /**
     *ラベルを返す
     *
     * @returns {React.ReactNode}
     * @memberof TreeItem
     */
    getLabel(): React.ReactNode;
    /**
     *ラベルを設定する
     *
     * @param {ReactNode} label
     * @memberof TreeItem
     */
    setLabel(label: ReactNode): void;
    /**
     *値を取得する
     *
     * @returns {unknown}
     * @memberof TreeItem
     */
    getValue(): unknown;
    /**
     *値を設定する
     *
     * @param {unknown} value
     * @memberof TreeItem
     */
    setValue(value: unknown): void;
    /**
     *valueに該当するアイテムを一つ見つける
     *
     * @param {unknown} value
     * @returns {(TreeItem | null)}
     * @memberof TreeItem
     */
    findItem(value: unknown): TreeItem | null;
    /**
     *valueに該当するアイテムを複数見つける
     *
     * @param {unknown} value
     * @returns {TreeItem[]}
     * @memberof TreeItem
     */
    findItems(value: unknown): TreeItem[];
    /**
     *アイテムの追加
     *
     * @param {TreeItemProps} props
     * @memberof TreeItem
     */
    addItem(props?: TreeItemProps): TreeItem;
    /**
     *指定したアイテムを削除
     *
     * @param {TreeItem} item
     * @returns {boolean}
     * @memberof TreeItem
     */
    delItem(item: TreeItem): boolean;
    /**
     *自分自身を削除
     *
     * @memberof TreeItem
     */
    remove(): void;
    /**
     *子アイテムをすべて削除
     *
     * @memberof TreeItem
     */
    clear(): void;
    /**
     *子アイテムを取得
     *
     * @returns {TreeItemProps[]}
     * @memberof TreeItem
     */
    getChildren(): TreeItemData[];
    /**
     *チェックボックスの設定
     *
     * @param {boolean} checked
     * @memberof TreeItem
     */
    setChecked(checked: boolean): void;
    /**
     *チェックされているアイテムを返す
     *
     * @returns {TreeItem[]}
     * @memberof TreeItem
     */
    getCheckItems(): TreeItem[];
    /**
     *アイテムに対してキーを関連付ける
     *
     * @param {string} name
     * @param {*} value
     * @memberof TreeItem
     */
    setKey(name: string, value: unknown): void;
    /**
     *アイテムのキーを取得する
     *
     * @param {string} name
     * @returns
     * @memberof TreeItem
     */
    getKey(name: string): unknown;
}
