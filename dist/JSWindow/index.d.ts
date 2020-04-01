import React, { ReactNode, Component } from "react";
export declare enum WindowStyle {
    TITLE = 1,
    MAX = 2,
    MIN = 4,
    CLOSE = 8,
    FRAME = 16,
    RESIZE = 32
}
export interface WindowProps {
    x?: number | null;
    y?: number | null;
    width?: number;
    height?: number;
    zoomSensitivity?: number;
    minScale?: number;
    maxScale?: number;
    moveable?: boolean;
    workspace?: boolean;
    borderSize?: number;
    titleSize?: number;
    title?: string;
    children?: ReactNode | null;
    active?: boolean;
    overlapped?: boolean;
    windowStyle?: number;
    windowState?: WindowState;
    onUpdate?: ((status: WindowInfo) => void) | null;
    clientStyle?: React.CSSProperties;
}
declare type NonNullableType<T, K extends keyof T = keyof T> = {
    [P in K]-?: T[P];
};
export interface WindowInfo extends NonNullableType<WindowProps> {
    realX: number;
    realY: number;
    realWidth: number;
    realHeight: number;
    realWindowState: WindowState;
    clientWidth: number;
    clientHeight: number;
}
export declare enum WindowState {
    NORMAL = 1,
    MAX = 2,
    MIN = 3,
    HIDE = 4
}
interface ZoomTransformState {
    originX: number;
    originY: number;
    translateX: number;
    translateY: number;
    scale: number;
}
interface State {
    active: boolean;
    overlapped: boolean;
    titlePrmisson: number;
    titleSize: number;
    borderSize: number;
    x: number | null;
    y: number | null;
    width: number;
    height: number;
    transformation: ZoomTransformState;
    clientWidth: number;
    clientHeight: number;
    windowState: number;
    oldEnumState: number;
    boxEnumState: number;
}
/**
 *FrameWindow of React
 *
 * @export
 * @class JswfWindow
 * @extends {Component<WindowProps, State>}
 */
export declare class JSWindow extends Component<WindowProps, State> {
    static defaultProps: WindowProps;
    private rootRef;
    private titleRef;
    private clientRef;
    private zoomRef;
    private resizeObserver?;
    private resizeHandle?;
    private moveHandle?;
    private moveParams?;
    private updateInfoHandle?;
    private windowInfo;
    private windowInfoKeep;
    flagWindowState: boolean;
    /**
     *Creates an instance of JswfWindow.
     * @param {WindowProps} props
     * @memberof JswfWindow
     */
    constructor(props: WindowProps);
    shouldComponentUpdate(props: WindowProps, state: State): boolean;
    /**
     *React componentDidMount
     *
     * @memberof JswfWindow
     */
    componentDidMount(): void;
    /**
     *React componentWillUnmount
     *
     * @memberof JswfWindow
     */
    componentWillUnmount(): void;
    componentDidUpdate(): void;
    /**
     * React render
     *
     * @returns
     * @memberof JswfWindow
     */
    render(): JSX.Element;
    /**
     *ウインドウ情報を返す
     *
     * @returns
     * @memberof JswfWindow
     */
    getWindowInfo(): WindowInfo;
    /**
     *ウインドウの状態を変更する
     *
     * @param {(WindowState | undefined)} enumState
     *  WindowState.NORMAL
     *  WindowState.MAX
     *  WindowState.MIN
     *  WindowState.HIDE
     * @memberof JswfWindow
     */
    setWindowState(state: WindowState | undefined): void;
    _setWindowState(state: WindowState | undefined): void;
    /**
     *ウインドウをフォアグラウンドにする
     *
     * @memberof JswfWindow
     */
    foreground(): void;
    protected update(): void;
    private changeState;
    private min;
    private max;
    private normal;
    private hide;
    private onMouseDown;
    private onFrame;
    private onActive;
    private onParentSize;
    private getParentScale;
    private onMove;
    private getTranslate;
    private getScale;
    private panBy;
    private zoom;
    private onWheel;
    private onMouseMove;
}
export {};
