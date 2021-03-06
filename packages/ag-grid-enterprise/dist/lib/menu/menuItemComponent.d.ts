// ag-grid-enterprise v20.0.0
import { AgEvent, Component, MenuItemDef } from "ag-grid-community";
export interface MenuItemSelectedEvent extends AgEvent {
    name: string;
    disabled?: boolean;
    shortcut?: string;
    action?: () => void;
    checked?: boolean;
    icon?: HTMLElement | string;
    subMenu?: (MenuItemDef | string)[];
    cssClasses?: string[];
    tooltip?: string;
    mouseEvent: MouseEvent;
}
export declare class MenuItemComponent extends Component {
    private gridOptionsWrapper;
    private static TEMPLATE;
    static EVENT_ITEM_SELECTED: string;
    private params;
    constructor(params: MenuItemDef);
    private init;
    private onOptionSelected;
    destroy(): void;
}
