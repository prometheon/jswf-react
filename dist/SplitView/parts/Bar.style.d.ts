import { ReactNode } from "react";
export interface BarProps extends React.HTMLAttributes<HTMLDivElement> {
    pos: number;
    size: number;
    children?: ReactNode | null;
    type: "ns" | "sn" | "we" | "ew";
    open: boolean;
    activeMode: boolean;
    procOpen: (open: boolean) => void;
    procMove: (pos: number) => void;
}
export declare const BarStyle: import("styled-components").StyledComponent<"div", any, BarProps, never>;
