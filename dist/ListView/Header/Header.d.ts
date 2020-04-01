import React, { Component } from "react";
import { MEvent } from "@jswf/manager";
interface HeaderProps {
    type?: "string" | "number";
    width?: number;
    minWidth?: number;
    children?: React.ReactNode;
    onSize: () => void;
    onClick: () => void;
}
interface HeaderState {
    width: number;
    tempWidth: number;
}
/**
 *ListViewヘッダークラス
 *
 * @export
 * @class Header
 * @extends {Component<HeaderProps, HeaderState>}
 */
export declare class Header extends Component<HeaderProps, HeaderState> {
    static defaultProps: {
        minWidth: number;
        width: number;
        type: string;
    };
    state: HeaderState;
    private labelRef;
    private sliderRef;
    constructor(props: HeaderProps);
    render(): JSX.Element;
    componentDidMount(): void;
    componentWillUnmount(): void;
    getWidth(): number;
    getTempWidth(): number;
    getType(): "string" | "number";
    protected onSlider(e: React.MouseEvent<HTMLDivElement, MouseEvent> | React.TouchEvent<HTMLDivElement>): void;
    protected onMove(e: MEvent): void;
}
export {};
