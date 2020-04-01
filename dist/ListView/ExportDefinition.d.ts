import { ReactNode, ReactElement, Component } from "react";
export interface ListRowProps {
    value?: unknown;
    children?: ReactNode;
}
export declare class ListRow extends Component<ListRowProps> {
}
export interface ListHeadersProps {
    children?: ReactElement<typeof ListHeader> | ReactElement<typeof ListHeader>[];
}
export declare class ListHeaders extends Component<ListHeadersProps> {
}
export interface ListHeaderProps {
    type?: string;
    width?: number;
    children?: ReactNode;
}
export declare class ListHeader extends Component<ListHeaderProps> {
}
export interface ListItemProps {
    value?: unknown;
    children?: ReactNode;
}
export declare class ListItem extends Component<ListItemProps> {
}
