import React, { Component, ReactNode } from "react";
import { ItemRow } from "./Item/Items";
export * from "./ExportDefinition";
export declare const ListViewDragString = "ListViewDragData";
export interface ListViewDragData {
    type: string;
    items: ItemRow[];
}
interface Props {
    draggable?: boolean;
    dragString?: string;
    children?: ReactNode;
    onItemClick?: (row: number, col: number) => void;
    onItemDoubleClick?: (row: number, col: number) => void;
    onItemDragStart?: (e: React.DragEvent, row: number, col: number) => void;
    onItemDragEnter?: (e: React.DragEvent, row: number, col: number) => void;
    onItemDragLeave?: (e: React.DragEvent, row: number, col: number) => void;
    onItemDragOver?: (e: React.DragEvent, row: number, col: number) => void;
    onItemDrop?: (e: React.DragEvent, row: number, col: number) => void;
    onDrop?: (e: React.DragEvent) => void;
}
interface State {
    xScroll: number;
    headerSizes: number[];
    sortIndex?: number;
    sortOrder?: boolean;
    sortType?: string;
    selectItems: Set<number>;
    clientWidth?: number;
}
/**
 *WindowsライクなListView
 *
 * @export
 * @class ListView
 * @extends {Component<Props, State>}
 */
export declare class ListView extends Component<Props, State> {
    static defaultProps: {
        draggable: boolean;
        dragString: string;
        children: never[];
    };
    private resizeObserver?;
    private rootRef;
    private itemsRef;
    private headersRef;
    private itemRows;
    private headers;
    private manual;
    constructor(props: Props);
    createItem(props: Props): void;
    shouldComponentUpdate(props: Props): boolean;
    isManual(): boolean;
    render(): JSX.Element;
    componentDidMount(): void;
    componentWillUnmount(): void;
    /**
     *レイアウト処理
     *
     * @protected
     * @memberof SplitView
     */
    protected layout(): void;
    protected onHeaderClick(sortIndex: number): void;
    protected onItemClick(e: React.MouseEvent, row: number, col: number): void;
    protected onItemDoubleClick(e: React.MouseEvent, row: number, col: number): void;
    /**
     *選択中の最初のアイテムを返す
     *
     * @returns 0<=:アイテム番号 -1:選択無し
     * @memberof ListView
     */
    getSelectItem(): number;
    /**
     *選択中のアイテムを配列で返す
     *
     * @returns 選択中のアイテム番号の配列
     * @memberof ListView
     */
    getSelectItems(): number[];
    /**
     *アイテムの内容を返す
     *
     * @param {number} row
     * @param {number} col
     * @returns {(React.ReactNode | undefined)} 内容
     * @memberof ListView
     */
    getItem(row: number, col: number): React.ReactNode | undefined;
    /**
     *アイテムの内容を変更する
     *
     * @param {number} row
     * @param {number} col
     * @param {ReactNode} value
     * @memberof ListView
     */
    setItem(row: number, col: number, value: ReactNode): void;
    /**
     *アイテムの値を返す
     *
     * @param {number} row
     * @returns unknown
     * @memberof ListView
     */
    getItemValue(row: number): unknown;
    /**
     *アイテム数を返す
     *
     * @returns
     * @memberof ListView
     */
    getRows(): number;
    /**
     *アイテムのカラム数を返す
     *
     * @returns
     * @memberof ListView
     */
    getCols(): number;
    /**
     *アイテムの追加
     *
     * @param {ReactNode[]} item 追加するアイテム
     * @memberof ListView
     */
    addItem(item: ItemRow | ReactNode[]): void;
    /**
     *アイテムの削除
     *
     * @param {number} row 削除するレコード番号
     * @memberof ListView
     */
    removeItem(row: number): void;
    private static getSetValues;
}
