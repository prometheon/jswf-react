import React, { Component, ReactNode } from "react";
export declare type SplitType = "ns" | "sn" | "we" | "ew";
interface SplitProps {
    type?: SplitType;
    pos?: number;
    activeSize?: number;
    activeWait?: number;
    bold?: number;
    children?: ReactNode | null;
    style?: React.CSSProperties;
}
interface State {
    pos: number;
    activeMode: boolean;
    barOpen: boolean;
}
/**
 *画面分割コンポーネント
 *
 * @export
 * @class SplitView
 * @extends {Component<SplitProps, { pos: number }>}
 */
export declare class SplitView extends Component<SplitProps, State> {
    static defaultProps: SplitProps;
    private type;
    private activeStop;
    private closeHandle?;
    private layoutHandle?;
    private resizeObserver?;
    private rootRef;
    private childRef;
    constructor(props: SplitProps);
    render(): JSX.Element;
    componentDidUpdate(): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    closeBar(): void;
    /**
     *分割レイアウトの遅延実行
     *
     * @protected
     * @memberof SplitView
     */
    protected layout(): void;
    /**
     *分割レイアウト処理
     *
     * @protected
     * @memberof SplitView
     */
    protected onLayout(): void;
    protected onOpen(open: boolean): void;
    protected onMove(pos: number): void;
}
export {};
