import React, { Component, ReactElement } from "react";
import { Header } from "./Header";
import { ListHeader } from "../ExportDefinition";
interface HeadersProps {
    onSize: (headers: number[]) => void;
    onClick: (index: number) => void;
    children: ReactElement<typeof ListHeader>[];
    clientWidth?: number;
}
/**
 *ListViewヘッダー管理クラス
 *
 * @export
 * @class Headers
 * @extends {Component<HeadersProps>}
 */
export declare class HeaderArea extends Component<HeadersProps> {
    private headersRef;
    private values;
    private rootRef;
    componentDidMount(): void;
    componentDidUpdate(): void;
    render(): JSX.Element;
    protected onSize(): void;
    protected onClick(index: number): void;
    getHeader(index: number): React.RefObject<Header>;
    getTypes(): ("string" | "number")[];
}
export {};
