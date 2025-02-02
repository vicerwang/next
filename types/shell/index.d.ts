import { HTMLAttributes, ElementType, Component, ComponentType } from "react";
import CommonProps from '../util';

export interface ShellProps extends HTMLAttributes<HTMLElement>, CommonProps {
    /**
     * 设备类型，针对不同的设备类型组件做出对应的响应式变化
     */
    device?: 'tablet' | 'desktop' | 'phone';
    type?: 'light' | 'dark' | 'brand';
}

export interface ShellCommonProps extends HTMLAttributes<HTMLElement>, CommonProps {

}

export interface ShellNavigationProps extends ShellCommonProps {
    collapse?: boolean;
    direction?: 'hoz' | 'ver';
    align?: 'left' | 'right' | 'center';
    onCollapseChange?: (collapse?: boolean) => {};
}

export interface ShellLocalNavigationProps extends ShellCommonProps {
    collapse?: boolean;
    onCollapseChange?: (collapse?: boolean) => {};
}

export interface ShellToolDockProps extends ShellCommonProps {
    collapse?: boolean;
    onCollapseChange?: (collapse?: boolean) => {};
}

export interface ShellAncillaryProps extends ShellCommonProps {
    collapse?: boolean;
    onCollapseChange?: (collapse?: boolean) => {};
}

export default class Shell extends Component<ShellProps, any> {
    static Branding: ComponentType<ShellCommonProps>;
    static Action: ComponentType<ShellCommonProps>;
    static MultiTask: ComponentType<ShellCommonProps>;
    static AppBar: ComponentType<ShellCommonProps>;
    static Content: ComponentType<ShellCommonProps>;
    static Footer: ComponentType<ShellCommonProps>;
    static ToolDockItem: ComponentType<ShellCommonProps>;

    static Navigation: ComponentType<ShellNavigationProps>;
    static LocalNavigation: ComponentType<ShellLocalNavigationProps>;
    static Ancillary: ComponentType<ShellAncillaryProps>;
    static ToolDock: ComponentType<ShellToolDockProps>;
}
