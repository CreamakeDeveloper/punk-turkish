import { F as FieldProps, a as Field, C as Config, D as Data, I as ItemSelector, b as DropZoneProps, U as UserGenerics, c as UiState, O as OnAction, P as Permissions, d as Plugin, e as Overrides, f as PuckAction, V as Viewports, g as IframeConfig, h as InitialHistory, i as DefaultComponentProps, j as DefaultRootFieldProps, H as History, A as AppState, E as ExtractPropsFromConfig, k as ExtractRootPropsFromConfig, l as ComponentDataMap } from './resolve-all-data-DzJEE28m.js';
export { W as Adaptor, L as ArrayField, t as ArrayState, a4 as AsFieldProps, B as BaseData, G as BaseField, v as ComponentConfig, y as ComponentData, z as Content, Z as CustomField, a1 as DefaultRootProps, a0 as DefaultRootRenderProps, m as Direction, n as DragAxis, Y as ExternalField, X as ExternalFieldWithAdaptor, r as FieldRenderFunctions, _ as Fields, s as ItemWithId, M as MappedItem, N as NumberField, Q as ObjectField, q as OverrideKey, u as PuckComponent, $ as PuckContext, K as RadioField, x as RootData, R as RootDataWithProps, w as RootDataWithoutProps, S as SelectField, T as TextField, J as TextareaField, o as Viewport, a5 as WithChildren, a2 as WithId, a3 as WithPuckProps, p as overrideKeys, a6 as resolveAllData } from './resolve-all-data-DzJEE28m.js';
import * as react_jsx_runtime from 'react/jsx-runtime';
import * as react from 'react';
import { ReactNode, SyntheticEvent, ReactElement } from 'react';
import { UniqueIdentifier } from '@dnd-kit/abstract';

declare const ActionBar: {
    ({ label, children, }: {
        label?: string;
        children?: ReactNode;
    }): react_jsx_runtime.JSX.Element;
    Action: ({ children, label, onClick, }: {
        children: ReactNode;
        label?: string;
        onClick: (e: SyntheticEvent) => void;
    }) => react_jsx_runtime.JSX.Element;
    Label: ({ label }: {
        label: string;
    }) => react_jsx_runtime.JSX.Element;
    Group: ({ children }: {
        children: ReactNode;
    }) => react_jsx_runtime.JSX.Element;
};
declare const Action: ({ children, label, onClick, }: {
    children: ReactNode;
    label?: string;
    onClick: (e: SyntheticEvent) => void;
}) => react_jsx_runtime.JSX.Element;
declare const Group: ({ children }: {
    children: ReactNode;
}) => react_jsx_runtime.JSX.Element;
declare const Label: ({ label }: {
    label: string;
}) => react_jsx_runtime.JSX.Element;

declare const FieldLabel: ({ children, icon, label, el, readOnly, className, }: {
    children?: ReactNode;
    icon?: ReactNode;
    label: string;
    el?: "label" | "div";
    readOnly?: boolean;
    className?: string;
}) => react_jsx_runtime.JSX.Element;
type FieldNoLabel<Props extends any = any> = Omit<Field<Props>, "label">;
declare function AutoField<ValueType = any, FieldType extends FieldNoLabel<ValueType> = FieldNoLabel<ValueType>>(props: FieldProps<ValueType, FieldType>): react_jsx_runtime.JSX.Element;

declare const Button: ({ children, href, onClick, variant, type, disabled, tabIndex, newTab, fullWidth, icon, size, loading: loadingProp, ...props }: {
    children: ReactNode;
    href?: string;
    onClick?: (e: any) => void | Promise<void>;
    variant?: "primary" | "secondary";
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
    tabIndex?: number;
    newTab?: boolean;
    fullWidth?: boolean;
    icon?: ReactNode;
    size?: "medium" | "large";
    loading?: boolean;
}) => react_jsx_runtime.JSX.Element;

declare const Drawer: {
    ({ children, droppableId, direction, }: {
        children: ReactNode;
        droppableId?: string;
        direction?: "vertical" | "horizontal";
    }): react_jsx_runtime.JSX.Element;
    Item: ({ name, children, id, label, index, isDragDisabled, }: {
        name: string;
        children?: (props: {
            children: ReactNode;
            name: string;
        }) => ReactElement;
        id?: string;
        label?: string;
        index?: number;
        isDragDisabled?: boolean;
    }) => react_jsx_runtime.JSX.Element;
};

type PathData = Record<string, {
    path: string[];
    label: string;
}>;
type DropZoneContext<UserConfig extends Config = Config> = {
    data: Data;
    config: UserConfig;
    componentState?: Record<string, any>;
    itemSelector?: ItemSelector | null;
    setItemSelector?: (newIndex: ItemSelector | null) => void;
    areaId?: string;
    zoneCompound?: string;
    index?: number;
    hoveringComponent?: string | null;
    setHoveringComponent?: (id: string | null) => void;
    registerZoneArea?: (areaId: string) => void;
    areasWithZones?: Record<string, boolean>;
    registerZone?: (zoneCompound: string) => void;
    unregisterZone?: (zoneCompound: string) => void;
    activeZones?: Record<string, boolean>;
    pathData?: PathData;
    registerPath?: (id: string, selector: ItemSelector, label: string) => void;
    unregisterPath?: (id: string) => void;
    mode?: "edit" | "render";
    depth: number;
    registerLocalZone?: (zone: string, active: boolean) => void;
    unregisterLocalZone?: (zone: string) => void;
    path: string[];
} | null;
declare const dropZoneContext: react.Context<DropZoneContext<Config>>;
declare const DropZoneProvider: ({ children, value, }: {
    children: ReactNode;
    value: DropZoneContext;
}) => react_jsx_runtime.JSX.Element;

type DropZoneDndData = {
    areaId?: string;
    depth: number;
    path: UniqueIdentifier[];
    isDroppableTarget: boolean;
};
declare const DropZone: react.ForwardRefExoticComponent<DropZoneProps & react.RefAttributes<HTMLDivElement>>;

declare const IconButton: ({ children, href, onClick, variant, type, disabled, tabIndex, newTab, fullWidth, title, }: {
    children: ReactNode;
    href?: string;
    onClick?: (e: SyntheticEvent) => void | Promise<void>;
    variant?: "primary" | "secondary";
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
    tabIndex?: number;
    newTab?: boolean;
    fullWidth?: boolean;
    title: string;
}) => react_jsx_runtime.JSX.Element;

declare function Puck<UserConfig extends Config = Config, G extends UserGenerics<UserConfig> = UserGenerics<UserConfig>>({ children, config, data: initialData, ui: initialUi, onChange, onPublish, onAction, permissions, plugins, overrides, renderHeader, renderHeaderActions, headerTitle, headerPath, viewports, iframe: _iframe, dnd, initialHistory: _initialHistory, }: {
    children?: ReactNode;
    config: UserConfig;
    data: Partial<G["UserData"] | Data>;
    ui?: Partial<UiState>;
    onChange?: (data: G["UserData"]) => void;
    onPublish?: (data: G["UserData"]) => void;
    onAction?: OnAction<G["UserData"]>;
    permissions?: Partial<Permissions>;
    plugins?: Plugin[];
    overrides?: Partial<Overrides>;
    renderHeader?: (props: {
        children: ReactNode;
        dispatch: (action: PuckAction) => void;
        state: G["UserAppState"];
    }) => ReactElement;
    renderHeaderActions?: (props: {
        state: G["UserAppState"];
        dispatch: (action: PuckAction) => void;
    }) => ReactElement;
    headerTitle?: string;
    headerPath?: string;
    viewports?: Viewports;
    iframe?: IframeConfig;
    dnd?: {
        disableAutoScroll?: boolean;
    };
    initialHistory?: InitialHistory;
}): react_jsx_runtime.JSX.Element;
declare namespace Puck {
    var Components: () => react_jsx_runtime.JSX.Element;
    var Fields: ({ wrapFields }: {
        wrapFields?: boolean;
    }) => react_jsx_runtime.JSX.Element;
    var Outline: () => react_jsx_runtime.JSX.Element;
    var Preview: ({ id }: {
        id?: string;
    }) => react_jsx_runtime.JSX.Element;
}

declare function Render<UserConfig extends Config = Config, G extends UserGenerics<UserConfig> = UserGenerics<UserConfig>>({ config, data, }: {
    config: UserConfig;
    data: Partial<G["UserData"] | Data>;
}): react_jsx_runtime.JSX.Element;

declare function migrate(data: Data): Data;

type PropTransform<Props extends DefaultComponentProps = DefaultComponentProps, RootProps extends DefaultComponentProps = DefaultRootFieldProps> = Partial<{
    [ComponentName in keyof Props]: (props: Props[ComponentName] & {
        [key: string]: any;
    }) => Props[ComponentName];
} & {
    root: (props: RootProps & {
        [key: string]: any;
    }) => RootProps;
}>;
declare function transformProps<Props extends DefaultComponentProps = DefaultComponentProps, RootProps extends DefaultComponentProps = DefaultRootFieldProps>(data: Partial<Data>, propTransforms: PropTransform<Props, RootProps>): Data;

type HistoryStore<D = any> = {
    index: number;
    hasPast: boolean;
    hasFuture: boolean;
    histories: History<D>[];
    record: (data: D) => void;
    back: VoidFunction;
    forward: VoidFunction;
    currentHistory: History;
    nextHistory: History<D> | null;
    prevHistory: History<D> | null;
    setHistories: (histories: History[]) => void;
    setHistoryIndex: (index: number) => void;
};

type PermissionsArgs<UserConfig extends Config = Config, G extends UserGenerics<UserConfig> = UserGenerics<UserConfig>> = {
    item?: G["UserComponentData"];
    type?: keyof G["UserProps"];
    root?: boolean;
};
type GetPermissions<UserConfig extends Config = Config> = (params?: PermissionsArgs<UserConfig>) => Partial<Permissions>;
type RefreshPermissions<UserConfig extends Config = Config> = (params?: PermissionsArgs<UserConfig>, force?: boolean) => void;

declare const usePuck: <UserConfig extends Config = Config>() => {
    appState: AppState<Data<ExtractPropsFromConfig<UserConfig>, ExtractRootPropsFromConfig<UserConfig>>>;
    config: UserConfig;
    dispatch: (action: PuckAction) => void;
    getPermissions: GetPermissions<UserConfig>;
    refreshPermissions: RefreshPermissions<UserConfig>;
    history: {
        back: VoidFunction;
        forward: VoidFunction;
        setHistories: (histories: History[]) => void;
        setHistoryIndex: (index: number) => void;
        hasPast: boolean;
        hasFuture: boolean;
        histories: History<any>[];
        index: number;
        historyStore: HistoryStore | undefined;
    };
    selectedItem: ComponentDataMap<ExtractPropsFromConfig<UserConfig>> | null;
};

export { Action, ActionBar, AppState, AutoField, Button, ComponentDataMap, Config, Data, DefaultComponentProps, DefaultRootFieldProps, Drawer, DropZone, type DropZoneDndData, DropZoneProvider, ExtractPropsFromConfig, ExtractRootPropsFromConfig, Field, FieldLabel, FieldProps, Group, History, IconButton, IframeConfig, InitialHistory, Label, OnAction, Overrides, Permissions, Plugin, Puck, PuckAction, Render, UiState, UserGenerics, Viewports, dropZoneContext, migrate, transformProps, usePuck };
