import React, { Component } from "react";
import { MEvent } from "@jswf/manager";
import { BarProps } from "./Bar.style";
interface BarState {
    open: boolean;
    pos: number;
}
export declare class Bar extends Component<BarProps, BarState> {
    private barRef;
    constructor(props: BarProps);
    render(): JSX.Element;
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentDidUpdate(): void;
    protected onMove(e: MEvent): void;
    protected onMouseDown(e: React.MouseEvent<HTMLDivElement, MouseEvent> | React.TouchEvent<HTMLDivElement>): void;
}
export {};
