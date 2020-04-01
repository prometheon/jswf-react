import { ReactNode } from "react";
interface StyleProps {
    type?: "ns" | "sn" | "we" | "ew";
    pos?: number;
    children?: ReactNode | null;
}
export declare const Root: import("styled-components").StyledComponent<"div", any, StyleProps, never>;
export {};
