import {
  __async,
  __objRest,
  __privateAdd,
  __privateGet,
  __privateSet,
  __spreadProps,
  __spreadValues,
  defaultData,
  getChanged,
  resolveAllData,
  resolveComponentData,
  resolveRootData,
  rootDroppableId,
  setupZone
} from "./chunk-OMQWZ6H2.mjs";

// types/API/Overrides.ts
var overrideKeys = [
  "header",
  "headerActions",
  "fields",
  "fieldLabel",
  "components",
  "componentItem",
  "outline",
  "puck",
  "preview"
];

// lib/get-class-name-factory.ts
import classnames from "classnames";
var getClassNameFactory = (rootClass, styles2, config = { baseClass: "" }) => (options = {}) => {
  if (typeof options === "string") {
    const descendant = options;
    const style = styles2[`${rootClass}-${descendant}`];
    if (style) {
      return config.baseClass + styles2[`${rootClass}-${descendant}`] || "";
    }
    return "";
  } else if (typeof options === "object") {
    const modifiers = options;
    const prefixedModifiers = {};
    for (let modifier in modifiers) {
      prefixedModifiers[styles2[`${rootClass}--${modifier}`]] = modifiers[modifier];
    }
    const c = styles2[rootClass];
    return config.baseClass + classnames(__spreadValues({
      [c]: !!c
    }, prefixedModifiers));
  } else {
    return config.baseClass + styles2[rootClass] || "";
  }
};
var get_class_name_factory_default = getClassNameFactory;

// css-module:/home/dev/Masaüstü/projeler/punk-turkish/components/ActionBar/styles.module.css#css-module
var styles_module_default = { "ActionBar": "_ActionBar_194sn_1", "ActionBar-label": "_ActionBar-label_194sn_18", "ActionBar-action": "_ActionBar-action_194sn_30", "ActionBar-group": "_ActionBar-group_194sn_38" };

// components/ActionBar/index.tsx
import { jsx, jsxs } from "react/jsx-runtime";
var getClassName = get_class_name_factory_default("ActionBar", styles_module_default);
var ActionBar = ({
  label,
  children
}) => /* @__PURE__ */ jsxs(
  "div",
  {
    className: getClassName(),
    onClick: (e) => {
      e.stopPropagation();
    },
    children: [
      label && /* @__PURE__ */ jsx(ActionBar.Group, { children: /* @__PURE__ */ jsx("div", { className: getClassName("label"), children: label }) }),
      children
    ]
  }
);
var Action = ({
  children,
  label,
  onClick
}) => /* @__PURE__ */ jsx(
  "button",
  {
    type: "button",
    className: getClassName("action"),
    onClick,
    title: label,
    children
  }
);
var Group = ({ children }) => /* @__PURE__ */ jsx("div", { className: getClassName("group"), children });
var Label = ({ label }) => /* @__PURE__ */ jsx("div", { className: getClassName("label"), children: label });
ActionBar.Action = Action;
ActionBar.Label = Label;
ActionBar.Group = Group;

// css-module:/home/dev/Masaüstü/projeler/punk-turkish/components/AutoField/styles.module.css#css-module
var styles_module_default2 = { "InputWrapper": "_InputWrapper_1h1p1_1", "Input-label": "_Input-label_1h1p1_5", "Input-labelIcon": "_Input-labelIcon_1h1p1_14", "Input-disabledIcon": "_Input-disabledIcon_1h1p1_21", "Input-input": "_Input-input_1h1p1_26", "Input": "_Input_1h1p1_1", "Input--readOnly": "_Input--readOnly_1h1p1_70", "Input-radioGroupItems": "_Input-radioGroupItems_1h1p1_81", "Input-radio": "_Input-radio_1h1p1_81", "Input-radioInner": "_Input-radioInner_1h1p1_98", "Input-radioInput": "_Input-radioInput_1h1p1_143" };

// components/AutoField/index.tsx
import {
  useCallback as useCallback5,
  useContext as useContext3,
  useEffect as useEffect9,
  useMemo as useMemo5,
  useState as useState11
} from "react";

// css-module:/home/dev/Masaüstü/projeler/punk-turkish/components/AutoField/fields/ArrayField/styles.module.css#css-module
var styles_module_default3 = { "ArrayField": "_ArrayField_1jcbq_5", "ArrayField--isDraggingFrom": "_ArrayField--isDraggingFrom_1jcbq_13", "ArrayField-addButton": "_ArrayField-addButton_1jcbq_18", "ArrayField--hasItems": "_ArrayField--hasItems_1jcbq_33", "ArrayFieldItem": "_ArrayFieldItem_1jcbq_63", "ArrayFieldItem--isDragging": "_ArrayFieldItem--isDragging_1jcbq_71", "ArrayFieldItem--isExpanded": "_ArrayFieldItem--isExpanded_1jcbq_81", "ArrayFieldItem-summary": "_ArrayFieldItem-summary_1jcbq_97", "ArrayField--addDisabled": "_ArrayField--addDisabled_1jcbq_128", "ArrayFieldItem-body": "_ArrayFieldItem-body_1jcbq_164", "ArrayFieldItem-fieldset": "_ArrayFieldItem-fieldset_1jcbq_173", "ArrayFieldItem-rhs": "_ArrayFieldItem-rhs_1jcbq_181", "ArrayFieldItem-actions": "_ArrayFieldItem-actions_1jcbq_187" };

// node_modules/lucide-react/dist/esm/createLucideIcon.js
import { forwardRef as forwardRef2, createElement as createElement2 } from "react";

// node_modules/lucide-react/dist/esm/shared/src/utils.js
var toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
var mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();

// node_modules/lucide-react/dist/esm/Icon.js
import { forwardRef, createElement } from "react";

// node_modules/lucide-react/dist/esm/defaultAttributes.js
var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};

// node_modules/lucide-react/dist/esm/Icon.js
var Icon = forwardRef(
  (_a, ref) => {
    var _b = _a, {
      color = "currentColor",
      size = 24,
      strokeWidth = 2,
      absoluteStrokeWidth,
      className = "",
      children,
      iconNode
    } = _b, rest = __objRest(_b, [
      "color",
      "size",
      "strokeWidth",
      "absoluteStrokeWidth",
      "className",
      "children",
      "iconNode"
    ]);
    return createElement(
      "svg",
      __spreadValues(__spreadProps(__spreadValues({
        ref
      }, defaultAttributes), {
        width: size,
        height: size,
        stroke: color,
        strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
        className: mergeClasses("lucide", className)
      }), rest),
      [
        ...iconNode.map(([tag, attrs]) => createElement(tag, attrs)),
        ...Array.isArray(children) ? children : [children]
      ]
    );
  }
);

// node_modules/lucide-react/dist/esm/createLucideIcon.js
var createLucideIcon = (iconName, iconNode) => {
  const Component = forwardRef2(
    (_a, ref) => {
      var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
      return createElement2(Icon, __spreadValues({
        ref,
        iconNode,
        className: mergeClasses(`lucide-${toKebabCase(iconName)}`, className)
      }, props));
    }
  );
  Component.displayName = `${iconName}`;
  return Component;
};

// node_modules/lucide-react/dist/esm/icons/chevron-down.js
var ChevronDown = createLucideIcon("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);

// node_modules/lucide-react/dist/esm/icons/chevron-right.js
var ChevronRight = createLucideIcon("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);

// node_modules/lucide-react/dist/esm/icons/chevron-up.js
var ChevronUp = createLucideIcon("ChevronUp", [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]]);

// node_modules/lucide-react/dist/esm/icons/circle-check-big.js
var CircleCheckBig = createLucideIcon("CircleCheckBig", [
  ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
]);

// node_modules/lucide-react/dist/esm/icons/copy.js
var Copy = createLucideIcon("Copy", [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
]);

// node_modules/lucide-react/dist/esm/icons/corner-left-up.js
var CornerLeftUp = createLucideIcon("CornerLeftUp", [
  ["polyline", { points: "14 9 9 4 4 9", key: "m9oyvo" }],
  ["path", { d: "M20 20h-7a4 4 0 0 1-4-4V4", key: "1blwi3" }]
]);

// node_modules/lucide-react/dist/esm/icons/ellipsis-vertical.js
var EllipsisVertical = createLucideIcon("EllipsisVertical", [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "12", cy: "5", r: "1", key: "gxeob9" }],
  ["circle", { cx: "12", cy: "19", r: "1", key: "lyex9k" }]
]);

// node_modules/lucide-react/dist/esm/icons/globe.js
var Globe = createLucideIcon("Globe", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" }],
  ["path", { d: "M2 12h20", key: "9i4pu4" }]
]);

// node_modules/lucide-react/dist/esm/icons/hash.js
var Hash = createLucideIcon("Hash", [
  ["line", { x1: "4", x2: "20", y1: "9", y2: "9", key: "4lhtct" }],
  ["line", { x1: "4", x2: "20", y1: "15", y2: "15", key: "vyu0kd" }],
  ["line", { x1: "10", x2: "8", y1: "3", y2: "21", key: "1ggp8o" }],
  ["line", { x1: "16", x2: "14", y1: "3", y2: "21", key: "weycgp" }]
]);

// node_modules/lucide-react/dist/esm/icons/layers.js
var Layers = createLucideIcon("Layers", [
  [
    "path",
    {
      d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",
      key: "zw3jo"
    }
  ],
  [
    "path",
    {
      d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",
      key: "1wduqc"
    }
  ],
  [
    "path",
    {
      d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",
      key: "kqbvx6"
    }
  ]
]);

// node_modules/lucide-react/dist/esm/icons/layout-grid.js
var LayoutGrid = createLucideIcon("LayoutGrid", [
  ["rect", { width: "7", height: "7", x: "3", y: "3", rx: "1", key: "1g98yp" }],
  ["rect", { width: "7", height: "7", x: "14", y: "3", rx: "1", key: "6d4xhi" }],
  ["rect", { width: "7", height: "7", x: "14", y: "14", rx: "1", key: "nxv5o0" }],
  ["rect", { width: "7", height: "7", x: "3", y: "14", rx: "1", key: "1bb6yr" }]
]);

// node_modules/lucide-react/dist/esm/icons/link.js
var Link = createLucideIcon("Link", [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
]);

// node_modules/lucide-react/dist/esm/icons/list.js
var List = createLucideIcon("List", [
  ["path", { d: "M3 12h.01", key: "nlz23k" }],
  ["path", { d: "M3 18h.01", key: "1tta3j" }],
  ["path", { d: "M3 6h.01", key: "1rqtza" }],
  ["path", { d: "M8 12h13", key: "1za7za" }],
  ["path", { d: "M8 18h13", key: "1lx6n3" }],
  ["path", { d: "M8 6h13", key: "ik3vkj" }]
]);

// node_modules/lucide-react/dist/esm/icons/lock-open.js
var LockOpen = createLucideIcon("LockOpen", [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 9.9-1", key: "1mm8w8" }]
]);

// node_modules/lucide-react/dist/esm/icons/lock.js
var Lock = createLucideIcon("Lock", [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]
]);

// node_modules/lucide-react/dist/esm/icons/monitor.js
var Monitor = createLucideIcon("Monitor", [
  ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2", key: "48i651" }],
  ["line", { x1: "8", x2: "16", y1: "21", y2: "21", key: "1svkeh" }],
  ["line", { x1: "12", x2: "12", y1: "17", y2: "21", key: "vw1qmm" }]
]);

// node_modules/lucide-react/dist/esm/icons/panel-left.js
var PanelLeft = createLucideIcon("PanelLeft", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M9 3v18", key: "fh3hqa" }]
]);

// node_modules/lucide-react/dist/esm/icons/panel-right.js
var PanelRight = createLucideIcon("PanelRight", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M15 3v18", key: "14nvp0" }]
]);

// node_modules/lucide-react/dist/esm/icons/plus.js
var Plus = createLucideIcon("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);

// node_modules/lucide-react/dist/esm/icons/redo-2.js
var Redo2 = createLucideIcon("Redo2", [
  ["path", { d: "m15 14 5-5-5-5", key: "12vg1m" }],
  ["path", { d: "M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13", key: "6uklza" }]
]);

// node_modules/lucide-react/dist/esm/icons/search.js
var Search = createLucideIcon("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);

// node_modules/lucide-react/dist/esm/icons/sliders-horizontal.js
var SlidersHorizontal = createLucideIcon("SlidersHorizontal", [
  ["line", { x1: "21", x2: "14", y1: "4", y2: "4", key: "obuewd" }],
  ["line", { x1: "10", x2: "3", y1: "4", y2: "4", key: "1q6298" }],
  ["line", { x1: "21", x2: "12", y1: "12", y2: "12", key: "1iu8h1" }],
  ["line", { x1: "8", x2: "3", y1: "12", y2: "12", key: "ntss68" }],
  ["line", { x1: "21", x2: "16", y1: "20", y2: "20", key: "14d8ph" }],
  ["line", { x1: "12", x2: "3", y1: "20", y2: "20", key: "m0wm8r" }],
  ["line", { x1: "14", x2: "14", y1: "2", y2: "6", key: "14e1ph" }],
  ["line", { x1: "8", x2: "8", y1: "10", y2: "14", key: "1i6ji0" }],
  ["line", { x1: "16", x2: "16", y1: "18", y2: "22", key: "1lctlv" }]
]);

// node_modules/lucide-react/dist/esm/icons/smartphone.js
var Smartphone = createLucideIcon("Smartphone", [
  ["rect", { width: "14", height: "20", x: "5", y: "2", rx: "2", ry: "2", key: "1yt0o3" }],
  ["path", { d: "M12 18h.01", key: "mhygvu" }]
]);

// node_modules/lucide-react/dist/esm/icons/tablet.js
var Tablet = createLucideIcon("Tablet", [
  ["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2", ry: "2", key: "76otgf" }],
  ["line", { x1: "12", x2: "12.01", y1: "18", y2: "18", key: "1dp563" }]
]);

// node_modules/lucide-react/dist/esm/icons/trash.js
var Trash = createLucideIcon("Trash", [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
]);

// node_modules/lucide-react/dist/esm/icons/type.js
var Type = createLucideIcon("Type", [
  ["polyline", { points: "4 7 4 4 20 4 20 7", key: "1nosan" }],
  ["line", { x1: "9", x2: "15", y1: "20", y2: "20", key: "swin9y" }],
  ["line", { x1: "12", x2: "12", y1: "4", y2: "20", key: "1tx1rr" }]
]);

// node_modules/lucide-react/dist/esm/icons/undo-2.js
var Undo2 = createLucideIcon("Undo2", [
  ["path", { d: "M9 14 4 9l5-5", key: "102s5s" }],
  ["path", { d: "M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11", key: "f3b9sd" }]
]);

// node_modules/lucide-react/dist/esm/icons/zoom-in.js
var ZoomIn = createLucideIcon("ZoomIn", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "11", x2: "11", y1: "8", y2: "14", key: "1vmskp" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
]);

// node_modules/lucide-react/dist/esm/icons/zoom-out.js
var ZoomOut = createLucideIcon("ZoomOut", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
]);

// components/IconButton/IconButton.tsx
import { useState } from "react";

// css-module:/home/dev/Masaüstü/projeler/punk-turkish/components/IconButton/IconButton.module.css#css-module
var IconButton_module_default = { "IconButton": "_IconButton_swpni_1", "IconButton--disabled": "_IconButton--disabled_swpni_20", "IconButton-title": "_IconButton-title_swpni_33" };

// lib/reorder.ts
var reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

// lib/replace.ts
var replace = (list, index, newItem) => {
  const result = Array.from(list);
  result.splice(index, 1);
  result.splice(index, 0, newItem);
  return result;
};

// css-module:/home/dev/Masaüstü/projeler/punk-turkish/components/Loader/styles.module.css#css-module
var styles_module_default4 = { "Loader": "_Loader_nacdm_13", "loader-animation": "_loader-animation_nacdm_1" };

// components/Loader/index.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
var getClassName2 = get_class_name_factory_default("Loader", styles_module_default4);
var Loader = (_a) => {
  var _b = _a, {
    color,
    size = 16
  } = _b, props = __objRest(_b, [
    "color",
    "size"
  ]);
  return /* @__PURE__ */ jsx2(
    "span",
    __spreadValues({
      className: getClassName2(),
      style: {
        width: size,
        height: size,
        color
      },
      "aria-label": "loading"
    }, props)
  );
};

// components/IconButton/IconButton.tsx
import { Fragment, jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
var getClassName3 = get_class_name_factory_default("IconButton", IconButton_module_default);
var IconButton = ({
  children,
  href,
  onClick,
  variant = "primary",
  type,
  disabled,
  tabIndex,
  newTab,
  fullWidth,
  title
}) => {
  const [loading, setLoading] = useState(false);
  const ElementType = href ? "a" : "button";
  const el = /* @__PURE__ */ jsxs2(
    ElementType,
    {
      className: getClassName3({
        primary: variant === "primary",
        secondary: variant === "secondary",
        disabled,
        fullWidth
      }),
      onClick: (e) => {
        if (!onClick) return;
        setLoading(true);
        Promise.resolve(onClick(e)).then(() => {
          setLoading(false);
        });
      },
      type,
      disabled: disabled || loading,
      tabIndex,
      target: newTab ? "_blank" : void 0,
      rel: newTab ? "noreferrer" : void 0,
      href,
      title,
      children: [
        /* @__PURE__ */ jsx3("span", { className: getClassName3("title"), children: title }),
        children,
        loading && /* @__PURE__ */ jsxs2(Fragment, { children: [
          "\xA0\xA0",
          /* @__PURE__ */ jsx3(Loader, { size: 14 })
        ] })
      ]
    }
  );
  return el;
};

// components/AutoField/fields/ArrayField/index.tsx
import { useCallback as useCallback3, useEffect as useEffect4, useState as useState6 } from "react";

// css-module:/home/dev/Masaüstü/projeler/punk-turkish/components/DragIcon/styles.module.css#css-module
var styles_module_default5 = { "DragIcon": "_DragIcon_17p8x_1", "DragIcon--disabled": "_DragIcon--disabled_17p8x_8" };

// components/DragIcon/index.tsx
import { jsx as jsx4 } from "react/jsx-runtime";
var getClassName4 = get_class_name_factory_default("DragIcon", styles_module_default5);
var DragIcon = ({ isDragDisabled }) => /* @__PURE__ */ jsx4("div", { className: getClassName4({ disabled: isDragDisabled }), children: /* @__PURE__ */ jsx4("svg", { viewBox: "0 0 20 20", width: "12", fill: "currentColor", children: /* @__PURE__ */ jsx4("path", { d: "M7 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 2zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 14zm6-8a2 2 0 1 0-.001-4.001A2 2 0 0 0 13 6zm0 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 14z" }) }) });

// components/Puck/context.tsx
import {
  createContext,
  useContext,
  useEffect as useEffect3,
  useState as useState4
} from "react";

// lib/get-item.ts
function getItem(selector, data, dynamicProps = {}) {
  if (!selector.zone || selector.zone === rootDroppableId) {
    const item2 = data.content[selector.index];
    return (item2 == null ? void 0 : item2.props) ? __spreadProps(__spreadValues({}, item2), { props: dynamicProps[item2.props.id] || item2.props }) : void 0;
  }
  const item = setupZone(data, selector.zone).zones[selector.zone][selector.index];
  return (item == null ? void 0 : item.props) ? __spreadProps(__spreadValues({}, item), { props: dynamicProps[item.props.id] || item.props }) : void 0;
}

// components/ViewportControls/default-viewports.ts
var defaultViewports = [
  { width: 360, height: "auto", icon: "Smartphone", label: "Mobil" },
  { width: 768, height: "auto", icon: "Tablet", label: "Tablet" },
  { width: 1280, height: "auto", icon: "Monitor", label: "Bilgisayar" }
];

// lib/use-resolved-permissions.ts
import { useCallback, useEffect, useState as useState2 } from "react";

// lib/flatten-data.ts
var flattenData = (data) => {
  return Object.keys(data.zones || {}).reduce(
    (acc, zone) => [...acc, ...data.zones[zone]],
    data.content
  );
};

// lib/use-resolved-permissions.ts
var useResolvedPermissions = (config, appState, globalPermissions, setComponentLoading, unsetComponentLoading) => {
  const [cache, setCache] = useState2({});
  const [resolvedPermissions, setResolvedPermissions] = useState2({});
  const resolveDataForItem = useCallback(
    (item, force = false) => __async(void 0, null, function* () {
      var _a, _b, _c;
      const componentConfig = item.type === "root" ? config.root : config.components[item.type];
      if (!componentConfig) {
        return;
      }
      const initialPermissions = __spreadValues(__spreadValues({}, globalPermissions), componentConfig.permissions);
      if (componentConfig.resolvePermissions) {
        const changed = getChanged(item, (_a = cache[item.props.id]) == null ? void 0 : _a.lastData);
        if (Object.values(changed).some((el) => el === true) || force) {
          setComponentLoading == null ? void 0 : setComponentLoading(item.props.id);
          const resolvedPermissions2 = yield componentConfig.resolvePermissions(
            item,
            {
              changed,
              lastPermissions: ((_b = cache[item.props.id]) == null ? void 0 : _b.lastPermissions) || null,
              permissions: initialPermissions,
              appState,
              lastData: ((_c = cache[item.props.id]) == null ? void 0 : _c.lastData) || null
            }
          );
          setCache((_cache) => __spreadProps(__spreadValues({}, _cache), {
            [item.props.id]: {
              lastData: item,
              lastPermissions: resolvedPermissions2
            }
          }));
          setResolvedPermissions((p) => __spreadProps(__spreadValues({}, p), {
            [item.props.id]: resolvedPermissions2
          }));
          unsetComponentLoading == null ? void 0 : unsetComponentLoading(item.props.id);
        }
      }
    }),
    [config, globalPermissions, appState, cache]
  );
  const resolveDataForRoot = (force = false) => {
    resolveDataForItem(
      // Shim the root data in by conforming to component data shape
      {
        type: "root",
        props: __spreadProps(__spreadValues({}, appState.data.root.props), { id: "puck-root" })
      },
      force
    );
  };
  const resolvePermissions = useCallback(
    (..._0) => __async(void 0, [..._0], function* ({ item, type, root } = {}, force = false) {
      if (item) {
        yield resolveDataForItem(item, force);
      } else if (type) {
        flattenData(appState.data).filter((item2) => item2.type === type).map((item2) => __async(void 0, null, function* () {
          yield resolveDataForItem(item2, force);
        }));
      } else if (root) {
        resolveDataForRoot(force);
      } else {
        resolveDataForRoot(force);
        flattenData(appState.data).map((item2) => __async(void 0, null, function* () {
          yield resolveDataForItem(item2, force);
        }));
      }
    }),
    [config, appState]
  );
  const refreshPermissions = useCallback(
    (params) => __async(void 0, null, function* () {
      resolvePermissions(params, true);
    }),
    [config, appState]
  );
  useEffect(() => {
    resolvePermissions();
  }, [config, appState.data]);
  const getPermissions = useCallback(
    ({ item, type, root } = {}) => {
      if (item) {
        const componentConfig = config.components[item.type];
        const initialPermissions = __spreadValues(__spreadValues({}, globalPermissions), componentConfig == null ? void 0 : componentConfig.permissions);
        const resolvedForItem = resolvedPermissions[item.props.id];
        return resolvedForItem ? __spreadValues(__spreadValues({}, globalPermissions), resolvedForItem) : initialPermissions;
      } else if (type) {
        const componentConfig = config.components[type];
        return __spreadValues(__spreadValues({}, globalPermissions), componentConfig == null ? void 0 : componentConfig.permissions);
      } else if (root) {
        const rootConfig = config.root;
        const initialPermissions = __spreadValues(__spreadValues({}, globalPermissions), rootConfig == null ? void 0 : rootConfig.permissions);
        const resolvedForItem = resolvedPermissions["puck-root"];
        return resolvedForItem ? __spreadValues(__spreadValues({}, globalPermissions), resolvedForItem) : initialPermissions;
      }
      return globalPermissions;
    },
    [config, resolvedPermissions]
  );
  return {
    getPermissions,
    refreshPermissions
  };
};

// lib/use-resolved-data.ts
import { useCallback as useCallback2, useEffect as useEffect2, useState as useState3 } from "react";

// lib/apply-dynamic-props.ts
var applyDynamicProps = (data, dynamicProps, rootData) => {
  return __spreadProps(__spreadValues({}, data), {
    root: __spreadValues(__spreadValues({}, data.root), rootData ? rootData : {}),
    content: data.content.map((item) => {
      return dynamicProps[item.props.id] ? __spreadValues(__spreadValues({}, item), dynamicProps[item.props.id]) : item;
    }),
    zones: Object.keys(data.zones || {}).reduce((acc, zoneKey) => {
      return __spreadProps(__spreadValues({}, acc), {
        [zoneKey]: data.zones[zoneKey].map((item) => {
          return dynamicProps[item.props.id] ? __spreadValues(__spreadValues({}, item), dynamicProps[item.props.id]) : item;
        })
      });
    }, {})
  });
};

// lib/use-resolved-data.ts
var useResolvedData = (appState, config, dispatch, setComponentLoading, unsetComponentLoading, refreshPermissions) => {
  const [{ resolverKey, newAppState }, setResolverState] = useState3({
    resolverKey: 0,
    newAppState: appState
  });
  const deferredSetStates = {};
  const _setComponentLoading = useCallback2(
    (id, loading, defer2 = 0) => {
      if (deferredSetStates[id]) {
        clearTimeout(deferredSetStates[id]);
        delete deferredSetStates[id];
      }
      deferredSetStates[id] = setTimeout(() => {
        if (loading) {
          setComponentLoading(id);
        } else {
          unsetComponentLoading(id);
        }
        delete deferredSetStates[id];
      }, defer2);
    },
    []
  );
  const runResolvers = () => __async(void 0, null, function* () {
    const newData = newAppState.data;
    const flatContent = flattenData(newData).filter(
      (item) => {
        var _a;
        return !!((_a = config.components[item.type]) == null ? void 0 : _a.resolveData);
      }
    );
    const applyIfChange = (dynamicDataMap, dynamicRoot) => {
      const processed = applyDynamicProps(
        appState.data,
        dynamicDataMap,
        dynamicRoot
      );
      const processedAppState = __spreadProps(__spreadValues({}, appState), { data: processed });
      const containsChanges = JSON.stringify(appState) !== JSON.stringify(processedAppState);
      if (containsChanges) {
        dispatch({
          type: "set",
          state: (prev) => __spreadProps(__spreadValues({}, prev), {
            data: applyDynamicProps(prev.data, dynamicDataMap, dynamicRoot),
            ui: resolverKey > 0 ? __spreadValues(__spreadValues({}, prev.ui), newAppState.ui) : prev.ui
          }),
          recordHistory: resolverKey > 0
        });
      }
    };
    const promises = [];
    promises.push(
      (() => __async(void 0, null, function* () {
        _setComponentLoading("puck-root", true, 50);
        const dynamicRoot = yield resolveRootData(newData, config);
        applyIfChange({}, dynamicRoot);
        _setComponentLoading("puck-root", false);
      }))()
    );
    flatContent.forEach((item) => {
      promises.push(
        (() => __async(void 0, null, function* () {
          refreshPermissions({ item });
          const dynamicData = yield resolveComponentData(
            item,
            config,
            (item2) => {
              _setComponentLoading(item2.props.id, true, 50);
            },
            (item2) => {
              deferredSetStates[item2.props.id];
              _setComponentLoading(item2.props.id, false);
            }
          );
          const dynamicDataMap = { [item.props.id]: dynamicData };
          applyIfChange(dynamicDataMap);
        }))()
      );
    });
    yield Promise.all(promises);
  });
  useEffect2(() => {
    runResolvers();
  }, [resolverKey]);
  const resolveData = useCallback2((newAppState2 = appState) => {
    setResolverState((curr) => ({
      resolverKey: curr.resolverKey + 1,
      newAppState: newAppState2
    }));
  }, []);
  return {
    resolveData
  };
};

// components/Puck/context.tsx
import { jsx as jsx5 } from "react/jsx-runtime";
var defaultAppState = {
  data: { content: [], root: {} },
  ui: {
    leftSideBarVisible: true,
    rightSideBarVisible: true,
    arrayState: {},
    itemSelector: null,
    componentList: {},
    isDragging: false,
    previewMode: "edit",
    viewports: {
      current: {
        width: defaultViewports[0].width,
        height: defaultViewports[0].height || "auto"
      },
      options: [],
      controlsVisible: true
    },
    field: { focus: null }
  }
};
var defaultContext = {
  state: defaultAppState,
  dispatch: () => null,
  config: { components: {} },
  componentState: {},
  setComponentState: () => {
  },
  resolveData: () => {
  },
  plugins: [],
  overrides: {},
  history: {},
  viewports: defaultViewports,
  zoomConfig: {
    autoZoom: 1,
    rootHeight: 0,
    zoom: 1
  },
  setZoomConfig: () => null,
  status: "LOADING",
  setStatus: () => null,
  iframe: {},
  globalPermissions: {},
  getPermissions: () => ({}),
  refreshPermissions: () => null
};
var appContext = createContext(defaultContext);
var AppProvider = ({
  children,
  value
}) => {
  const [zoomConfig, setZoomConfig] = useState4(defaultContext.zoomConfig);
  const [status, setStatus] = useState4("LOADING");
  useEffect3(() => {
    setStatus("MOUNTED");
  }, []);
  const selectedItem = value.state.ui.itemSelector ? getItem(value.state.ui.itemSelector, value.state.data) : void 0;
  const [componentState, setComponentState] = useState4({});
  const setComponentLoading = (id) => {
    setComponentState((prev) => {
      var _a;
      return __spreadProps(__spreadValues({}, prev), {
        [id]: __spreadProps(__spreadValues({}, prev[id]), {
          loadingCount: (((_a = prev[id]) == null ? void 0 : _a.loadingCount) || 0) + 1
        })
      });
    });
  };
  const unsetComponentLoading = (id) => {
    setComponentState((prev) => {
      var _a;
      return __spreadProps(__spreadValues({}, prev), {
        [id]: __spreadProps(__spreadValues({}, prev[id]), {
          loadingCount: Math.max((((_a = prev[id]) == null ? void 0 : _a.loadingCount) || 0) - 1, 0)
        })
      });
    });
  };
  const { getPermissions, refreshPermissions } = useResolvedPermissions(
    value.config,
    value.state,
    value.globalPermissions || {},
    setComponentLoading,
    unsetComponentLoading
  );
  const { resolveData } = useResolvedData(
    value.state,
    value.config,
    value.dispatch,
    setComponentLoading,
    unsetComponentLoading,
    refreshPermissions
  );
  return /* @__PURE__ */ jsx5(
    appContext.Provider,
    {
      value: __spreadProps(__spreadValues({}, value), {
        selectedItem,
        zoomConfig,
        setZoomConfig,
        status,
        setStatus,
        getPermissions,
        refreshPermissions,
        componentState,
        setComponentState,
        resolveData
      }),
      children
    }
  );
};
function useAppContext() {
  const mainContext = useContext(appContext);
  return __spreadProps(__spreadValues({}, mainContext), {
    // Helpers
    setUi: (ui, recordHistory) => {
      return mainContext.dispatch({
        type: "setUi",
        ui,
        recordHistory
      });
    }
  });
}

// components/Sortable/index.tsx
import { DragDropProvider } from "@dnd-kit/react";
import { useState as useState5 } from "react";

// lib/dnd/dnd-kit/safe.ts
import {
  useDraggable,
  useDroppable
} from "@dnd-kit/react";
import { useSortable } from "@dnd-kit/react/sortable";
function useDroppableSafe(input) {
  if (typeof window === "undefined") {
    return { ref: () => {
    } };
  }
  return useDroppable(input);
}
function useDraggableSafe(input) {
  if (typeof window === "undefined") {
    return { ref: () => {
    } };
  }
  return useDraggable(input);
}
function useSortableSafe(input) {
  if (typeof window === "undefined") {
    return { ref: () => {
    }, status: "idle" };
  }
  return useSortable(input);
}

// components/Sortable/index.tsx
import { jsx as jsx6 } from "react/jsx-runtime";
var SortableProvider = ({
  children,
  onMove
}) => {
  const [move, setMove] = useState5({ source: -1, target: -1 });
  return /* @__PURE__ */ jsx6(
    DragDropProvider,
    {
      onDragOver: (event) => {
        const { operation } = event;
        if (operation.source && operation.target) {
          const newMove = {
            source: operation.source.data.index,
            target: operation.target.data.index
          };
          if (newMove.source !== newMove.target) {
            setMove({
              source: operation.source.data.index,
              target: operation.target.data.index
            });
          }
        }
      },
      onDragEnd: () => {
        if (move.source !== -1 && move.target !== -1) {
          onMove(move);
        }
      },
      children
    }
  );
};
var Sortable = ({
  id,
  index,
  disabled,
  children,
  type = "item"
}) => {
  const { ref: sortableRef, status } = useSortableSafe({
    id,
    type,
    index,
    disabled,
    data: { index }
  });
  return children({ status, ref: sortableRef });
};

// components/AutoField/context.tsx
import { createContext as createContext2, useContext as useContext2, useMemo } from "react";
import { jsx as jsx7 } from "react/jsx-runtime";
var NestedFieldContext = createContext2({});
var useNestedFieldContext = () => {
  const context = useContext2(NestedFieldContext);
  return __spreadProps(__spreadValues({}, context), {
    readOnlyFields: context.readOnlyFields || {}
  });
};
var NestedFieldProvider = ({
  children,
  name,
  subName,
  wildcardName = name,
  readOnlyFields
}) => {
  const subPath = `${name}.${subName}`;
  const wildcardSubPath = `${wildcardName}.${subName}`;
  const subReadOnlyFields = useMemo(
    () => Object.keys(readOnlyFields).reduce((acc, readOnlyKey) => {
      const isLocal = readOnlyKey.indexOf(subPath) > -1 || readOnlyKey.indexOf(wildcardSubPath) > -1;
      if (isLocal) {
        const subPathPattern = new RegExp(
          `^(${name}|${wildcardName}).`.replace(/\[/g, "\\[").replace(/\]/g, "\\]").replace(/\./g, "\\.").replace(/\*/g, "\\*")
        );
        const localName = readOnlyKey.replace(subPathPattern, "");
        return __spreadProps(__spreadValues({}, acc), {
          [localName]: readOnlyFields[readOnlyKey]
        });
      }
      return acc;
    }, {}),
    [name, subName, wildcardName, readOnlyFields]
  );
  return /* @__PURE__ */ jsx7(
    NestedFieldContext.Provider,
    {
      value: { readOnlyFields: subReadOnlyFields, localName: subName },
      children
    }
  );
};

// components/AutoField/fields/ArrayField/index.tsx
import { jsx as jsx8, jsxs as jsxs3 } from "react/jsx-runtime";
var getClassName5 = get_class_name_factory_default("ArrayField", styles_module_default3);
var getClassNameItem = get_class_name_factory_default("ArrayFieldItem", styles_module_default3);
var ArrayField = ({
  field,
  onChange,
  value: _value,
  name,
  label,
  readOnly,
  id,
  Label: Label2 = (props) => /* @__PURE__ */ jsx8("div", __spreadValues({}, props))
}) => {
  const { state, setUi, selectedItem, getPermissions } = useAppContext();
  const { readOnlyFields, localName = name } = useNestedFieldContext();
  const value = _value;
  const arrayState = state.ui.arrayState[id] || {
    items: Array.from(value || []).map((item, idx) => {
      return {
        _originalIndex: idx,
        _arrayId: `${id}-${idx}`
      };
    }),
    openId: ""
  };
  const [localState, setLocalState] = useState6({ arrayState, value });
  useEffect4(() => {
    setLocalState({ arrayState, value });
  }, [value, state.ui.arrayState[id]]);
  const mapArrayStateToUi = useCallback3(
    (partialArrayState) => {
      return {
        arrayState: __spreadProps(__spreadValues({}, state.ui.arrayState), {
          [id]: __spreadValues(__spreadValues({}, arrayState), partialArrayState)
        })
      };
    },
    [arrayState]
  );
  const getHighestIndex = useCallback3(() => {
    return arrayState.items.reduce(
      (acc, item) => item._originalIndex > acc ? item._originalIndex : acc,
      -1
    );
  }, [arrayState]);
  const regenerateArrayState = useCallback3(
    (value2) => {
      let highestIndex = getHighestIndex();
      const newItems = Array.from(value2 || []).map((item, idx) => {
        var _a;
        const arrayStateItem = arrayState.items[idx];
        const newItem = {
          _originalIndex: typeof (arrayStateItem == null ? void 0 : arrayStateItem._originalIndex) !== "undefined" ? arrayStateItem._originalIndex : highestIndex + 1,
          _arrayId: ((_a = arrayState.items[idx]) == null ? void 0 : _a._arrayId) || `${id}-${highestIndex + 1}`
        };
        if (newItem._originalIndex > highestIndex) {
          highestIndex = newItem._originalIndex;
        }
        return newItem;
      });
      return __spreadProps(__spreadValues({}, arrayState), { items: newItems });
    },
    [arrayState]
  );
  useEffect4(() => {
    if (arrayState.items.length > 0) {
      setUi(mapArrayStateToUi(arrayState));
    }
  }, []);
  const forceReadOnly = getPermissions({ item: selectedItem }).edit === false;
  if (field.type !== "array" || !field.arrayFields) {
    return null;
  }
  const addDisabled = field.max !== void 0 && localState.arrayState.items.length >= field.max || readOnly;
  return /* @__PURE__ */ jsx8(
    Label2,
    {
      label: label || name,
      icon: /* @__PURE__ */ jsx8(List, { size: 16 }),
      el: "div",
      readOnly,
      children: /* @__PURE__ */ jsx8(
        SortableProvider,
        {
          onMove: (move) => {
            const newValue = reorder(value, move.source, move.target);
            const newArrayStateItems = reorder(
              arrayState.items,
              move.source,
              move.target
            );
            const newUi = {
              arrayState: __spreadProps(__spreadValues({}, state.ui.arrayState), {
                [id]: __spreadProps(__spreadValues({}, arrayState), { items: newArrayStateItems })
              })
            };
            setUi(newUi, false);
            onChange(newValue, newUi);
            setLocalState({
              value: newValue,
              arrayState: __spreadProps(__spreadValues({}, arrayState), { items: newArrayStateItems })
            });
          },
          children: /* @__PURE__ */ jsxs3(
            "div",
            {
              className: getClassName5({
                hasItems: Array.isArray(value) && value.length > 0,
                addDisabled
              }),
              onClick: (e) => {
                e.preventDefault();
              },
              children: [
                localState.arrayState.items.map((item, i) => {
                  const { _arrayId = `${id}-${i}`, _originalIndex = i } = item;
                  const data = Array.from(localState.value || [])[i] || {};
                  return /* @__PURE__ */ jsx8(
                    Sortable,
                    {
                      id: _arrayId,
                      index: i,
                      disabled: readOnly,
                      children: ({ status, ref }) => /* @__PURE__ */ jsxs3(
                        "div",
                        {
                          ref,
                          className: getClassNameItem({
                            isExpanded: arrayState.openId === _arrayId,
                            isDragging: status === "dragging",
                            readOnly
                          }),
                          children: [
                            /* @__PURE__ */ jsxs3(
                              "div",
                              {
                                onClick: (e) => {
                                  e.preventDefault();
                                  e.stopPropagation();
                                  if (arrayState.openId === _arrayId) {
                                    setUi(
                                      mapArrayStateToUi({
                                        openId: ""
                                      })
                                    );
                                  } else {
                                    setUi(
                                      mapArrayStateToUi({
                                        openId: _arrayId
                                      })
                                    );
                                  }
                                },
                                className: getClassNameItem("summary"),
                                children: [
                                  field.getItemSummary ? field.getItemSummary(data, i) : `Item #${_originalIndex}`,
                                  /* @__PURE__ */ jsxs3("div", { className: getClassNameItem("rhs"), children: [
                                    !readOnly && /* @__PURE__ */ jsxs3("div", { className: getClassNameItem("actions"), children: [
                                      /* @__PURE__ */ jsx8("div", { className: getClassNameItem("action"), children: /* @__PURE__ */ jsx8(
                                        IconButton,
                                        {
                                          type: "button",
                                          disabled: !!addDisabled,
                                          onClick: (e) => {
                                            e.stopPropagation();
                                            const existingValue = [...value || []];
                                            existingValue.splice(i, 0, existingValue[i]);
                                            onChange(
                                              existingValue,
                                              mapArrayStateToUi(
                                                regenerateArrayState(existingValue)
                                              )
                                            );
                                          },
                                          title: "Kopyala",
                                          children: /* @__PURE__ */ jsx8(Copy, { size: 16 })
                                        }
                                      ) }),
                                      /* @__PURE__ */ jsx8("div", { className: getClassNameItem("action"), children: /* @__PURE__ */ jsx8(
                                        IconButton,
                                        {
                                          type: "button",
                                          disabled: field.min !== void 0 && field.min >= localState.arrayState.items.length,
                                          onClick: (e) => {
                                            e.stopPropagation();
                                            const existingValue = [...value || []];
                                            const existingItems = [
                                              ...arrayState.items || []
                                            ];
                                            existingValue.splice(i, 1);
                                            existingItems.splice(i, 1);
                                            onChange(
                                              existingValue,
                                              mapArrayStateToUi({
                                                items: existingItems
                                              })
                                            );
                                          },
                                          title: "Sil",
                                          children: /* @__PURE__ */ jsx8(Trash, { size: 16 })
                                        }
                                      ) })
                                    ] }),
                                    /* @__PURE__ */ jsx8("div", { children: /* @__PURE__ */ jsx8(DragIcon, {}) })
                                  ] })
                                ]
                              }
                            ),
                            /* @__PURE__ */ jsx8("div", { className: getClassNameItem("body"), children: /* @__PURE__ */ jsx8("fieldset", { className: getClassNameItem("fieldset"), children: Object.keys(field.arrayFields).map((subName) => {
                              const subField = field.arrayFields[subName];
                              const indexName = `${name}[${i}]`;
                              const subPath = `${indexName}.${subName}`;
                              const localIndexName = `${localName}[${i}]`;
                              const localWildcardName = `${localName}[*]`;
                              const localSubPath = `${localIndexName}.${subName}`;
                              const localWildcardSubPath = `${localWildcardName}.${subName}`;
                              const subReadOnly = forceReadOnly ? forceReadOnly : typeof readOnlyFields[subPath] !== "undefined" ? readOnlyFields[localSubPath] : readOnlyFields[localWildcardSubPath];
                              const label2 = subField.label || subName;
                              return /* @__PURE__ */ jsx8(
                                NestedFieldProvider,
                                {
                                  name: localIndexName,
                                  wildcardName: localWildcardName,
                                  subName,
                                  readOnlyFields,
                                  children: /* @__PURE__ */ jsx8(
                                    AutoFieldPrivate,
                                    {
                                      name: subPath,
                                      label: label2,
                                      id: `${_arrayId}_${subName}`,
                                      readOnly: subReadOnly,
                                      field: __spreadProps(__spreadValues({}, subField), {
                                        label: label2
                                        // May be used by custom fields
                                      }),
                                      value: data[subName],
                                      onChange: (val, ui) => {
                                        onChange(
                                          replace(value, i, __spreadProps(__spreadValues({}, data), {
                                            [subName]: val
                                          })),
                                          ui
                                        );
                                      }
                                    }
                                  )
                                },
                                subPath
                              );
                            }) }) })
                          ]
                        }
                      )
                    },
                    _arrayId
                  );
                }),
                !addDisabled && /* @__PURE__ */ jsx8(
                  "button",
                  {
                    type: "button",
                    className: getClassName5("addButton"),
                    onClick: () => {
                      const existingValue = value || [];
                      const newValue = [
                        ...existingValue,
                        field.defaultItemProps || {}
                      ];
                      const newArrayState = regenerateArrayState(newValue);
                      onChange(newValue, mapArrayStateToUi(newArrayState));
                    },
                    children: /* @__PURE__ */ jsx8(Plus, { size: 21 })
                  }
                )
              ]
            }
          )
        }
      )
    }
  );
};

// components/AutoField/fields/DefaultField/index.tsx
import { Fragment as Fragment2, jsx as jsx9, jsxs as jsxs4 } from "react/jsx-runtime";
var getClassName6 = get_class_name_factory_default("Input", styles_module_default2);
var DefaultField = ({
  field,
  onChange,
  readOnly,
  value: _value,
  name,
  label,
  Label: Label2,
  id
}) => {
  const value = _value;
  return /* @__PURE__ */ jsx9(
    Label2,
    {
      label: label || name,
      icon: /* @__PURE__ */ jsxs4(Fragment2, { children: [
        field.type === "text" && /* @__PURE__ */ jsx9(Type, { size: 16 }),
        field.type === "number" && /* @__PURE__ */ jsx9(Hash, { size: 16 })
      ] }),
      readOnly,
      children: /* @__PURE__ */ jsx9(
        "input",
        {
          className: getClassName6("input"),
          autoComplete: "off",
          type: field.type,
          title: label || name,
          name,
          value: (value == null ? void 0 : value.toString) ? value.toString() : "",
          onChange: (e) => {
            if (field.type === "number") {
              const numberValue = Number(e.currentTarget.value);
              if (typeof field.min !== "undefined" && numberValue < field.min) {
                return;
              }
              if (typeof field.max !== "undefined" && numberValue > field.max) {
                return;
              }
              onChange(numberValue);
            } else {
              onChange(e.currentTarget.value);
            }
          },
          readOnly,
          tabIndex: readOnly ? -1 : void 0,
          id,
          min: field.type === "number" ? field.min : void 0,
          max: field.type === "number" ? field.max : void 0
        }
      )
    }
  );
};

// components/AutoField/fields/ExternalField/index.tsx
import { useEffect as useEffect8 } from "react";

// components/ExternalInput/index.tsx
import {
  useMemo as useMemo2,
  useEffect as useEffect7,
  useState as useState9,
  useCallback as useCallback4,
  isValidElement
} from "react";

// css-module:/home/dev/Masaüstü/projeler/punk-turkish/components/ExternalInput/styles.module.css#css-module
var styles_module_default6 = { "ExternalInput-actions": "_ExternalInput-actions_8wgzm_1", "ExternalInput-button": "_ExternalInput-button_8wgzm_5", "ExternalInput--dataSelected": "_ExternalInput--dataSelected_8wgzm_24", "ExternalInput--readOnly": "_ExternalInput--readOnly_8wgzm_31", "ExternalInput-detachButton": "_ExternalInput-detachButton_8wgzm_35", "ExternalInput": "_ExternalInput_8wgzm_1", "ExternalInputModal": "_ExternalInputModal_8wgzm_79", "ExternalInputModal-grid": "_ExternalInputModal-grid_8wgzm_89", "ExternalInputModal--filtersToggled": "_ExternalInputModal--filtersToggled_8wgzm_100", "ExternalInputModal-filters": "_ExternalInputModal-filters_8wgzm_105", "ExternalInputModal-masthead": "_ExternalInputModal-masthead_8wgzm_124", "ExternalInputModal-tableWrapper": "_ExternalInputModal-tableWrapper_8wgzm_133", "ExternalInputModal-table": "_ExternalInputModal-table_8wgzm_133", "ExternalInputModal-thead": "_ExternalInputModal-thead_8wgzm_149", "ExternalInputModal-th": "_ExternalInputModal-th_8wgzm_149", "ExternalInputModal-td": "_ExternalInputModal-td_8wgzm_164", "ExternalInputModal-tr": "_ExternalInputModal-tr_8wgzm_169", "ExternalInputModal-tbody": "_ExternalInputModal-tbody_8wgzm_176", "ExternalInputModal--hasData": "_ExternalInputModal--hasData_8wgzm_202", "ExternalInputModal-loadingBanner": "_ExternalInputModal-loadingBanner_8wgzm_206", "ExternalInputModal--isLoading": "_ExternalInputModal--isLoading_8wgzm_223", "ExternalInputModal-searchForm": "_ExternalInputModal-searchForm_8wgzm_227", "ExternalInputModal-search": "_ExternalInputModal-search_8wgzm_227", "ExternalInputModal-searchIcon": "_ExternalInputModal-searchIcon_8wgzm_264", "ExternalInputModal-searchIconText": "_ExternalInputModal-searchIconText_8wgzm_289", "ExternalInputModal-searchInput": "_ExternalInputModal-searchInput_8wgzm_299", "ExternalInputModal-searchActions": "_ExternalInputModal-searchActions_8wgzm_313", "ExternalInputModal-searchActionIcon": "_ExternalInputModal-searchActionIcon_8wgzm_326", "ExternalInputModal-footerContainer": "_ExternalInputModal-footerContainer_8wgzm_330", "ExternalInputModal-footer": "_ExternalInputModal-footer_8wgzm_330" };

// components/Modal/index.tsx
import { useEffect as useEffect5, useState as useState7 } from "react";

// css-module:/home/dev/Masaüstü/projeler/punk-turkish/components/Modal/styles.module.css#css-module
var styles_module_default7 = { "Modal": "_Modal_ikbaj_1", "Modal--isOpen": "_Modal--isOpen_ikbaj_15", "Modal-inner": "_Modal-inner_ikbaj_19" };

// components/Modal/index.tsx
import { createPortal } from "react-dom";
import { jsx as jsx10 } from "react/jsx-runtime";
var getClassName7 = get_class_name_factory_default("Modal", styles_module_default7);
var Modal = ({
  children,
  onClose,
  isOpen
}) => {
  const [rootEl, setRootEl] = useState7(null);
  useEffect5(() => {
    setRootEl(document.getElementById("puck-portal-root"));
  }, []);
  if (!rootEl) {
    return /* @__PURE__ */ jsx10("div", {});
  }
  return createPortal(
    /* @__PURE__ */ jsx10("div", { className: getClassName7({ isOpen }), onClick: onClose, children: /* @__PURE__ */ jsx10(
      "div",
      {
        className: getClassName7("inner"),
        onClick: (e) => e.stopPropagation(),
        children
      }
    ) }),
    rootEl
  );
};

// css-module:/home/dev/Masaüstü/projeler/punk-turkish/components/Heading/styles.module.css#css-module
var styles_module_default8 = { "Heading": "_Heading_qxrry_1", "Heading--xxxxl": "_Heading--xxxxl_qxrry_12", "Heading--xxxl": "_Heading--xxxl_qxrry_18", "Heading--xxl": "_Heading--xxl_qxrry_22", "Heading--xl": "_Heading--xl_qxrry_26", "Heading--l": "_Heading--l_qxrry_30", "Heading--m": "_Heading--m_qxrry_34", "Heading--s": "_Heading--s_qxrry_38", "Heading--xs": "_Heading--xs_qxrry_42" };

// components/Heading/index.tsx
import { jsx as jsx11 } from "react/jsx-runtime";
var getClassName8 = get_class_name_factory_default("Heading", styles_module_default8);
var Heading = ({ children, rank, size = "m" }) => {
  const Tag = rank ? `h${rank}` : "span";
  return /* @__PURE__ */ jsx11(
    Tag,
    {
      className: getClassName8({
        [size]: true
      }),
      children
    }
  );
};

// components/Button/Button.tsx
import { useEffect as useEffect6, useState as useState8 } from "react";

// css-module:/home/dev/Masaüstü/projeler/punk-turkish/components/Button/Button.module.css#css-module
var Button_module_default = { "Button": "_Button_1t64k_1", "Button--medium": "_Button--medium_1t64k_29", "Button--large": "_Button--large_1t64k_37", "Button-icon": "_Button-icon_1t64k_44", "Button--primary": "_Button--primary_1t64k_48", "Button--secondary": "_Button--secondary_1t64k_67", "Button--flush": "_Button--flush_1t64k_84", "Button--disabled": "_Button--disabled_1t64k_88", "Button--fullWidth": "_Button--fullWidth_1t64k_95", "Button-spinner": "_Button-spinner_1t64k_100" };

// lib/filter-data-attrs.ts
var dataAttrRe = /^(data-.*)$/;
var filterDataAttrs = (props) => {
  let filteredProps = {};
  for (const prop in props) {
    if (Object.prototype.hasOwnProperty.call(props, prop) && dataAttrRe.test(prop)) {
      filteredProps[prop] = props[prop];
    }
  }
  return filteredProps;
};

// components/Button/Button.tsx
import { jsx as jsx12, jsxs as jsxs5 } from "react/jsx-runtime";
var getClassName9 = get_class_name_factory_default("Button", Button_module_default);
var Button = (_a) => {
  var _b = _a, {
    children,
    href,
    onClick,
    variant = "primary",
    type,
    disabled,
    tabIndex,
    newTab,
    fullWidth,
    icon,
    size = "medium",
    loading: loadingProp = false
  } = _b, props = __objRest(_b, [
    "children",
    "href",
    "onClick",
    "variant",
    "type",
    "disabled",
    "tabIndex",
    "newTab",
    "fullWidth",
    "icon",
    "size",
    "loading"
  ]);
  const [loading, setLoading] = useState8(loadingProp);
  useEffect6(() => setLoading(loadingProp), [loadingProp]);
  const ElementType = href ? "a" : type ? "button" : "span";
  const dataAttrs = filterDataAttrs(props);
  const el = /* @__PURE__ */ jsxs5(
    ElementType,
    __spreadProps(__spreadValues({
      className: getClassName9({
        primary: variant === "primary",
        secondary: variant === "secondary",
        disabled,
        fullWidth,
        [size]: true
      }),
      onClick: (e) => {
        if (!onClick) return;
        setLoading(true);
        Promise.resolve(onClick(e)).then(() => {
          setLoading(false);
        });
      },
      type,
      disabled: disabled || loading,
      tabIndex,
      target: newTab ? "_blank" : void 0,
      rel: newTab ? "noreferrer" : void 0,
      href
    }, dataAttrs), {
      children: [
        icon && /* @__PURE__ */ jsx12("div", { className: getClassName9("icon"), children: icon }),
        children,
        loading && /* @__PURE__ */ jsx12("div", { className: getClassName9("spinner"), children: /* @__PURE__ */ jsx12(Loader, { size: 14 }) })
      ]
    })
  );
  return el;
};

// components/ExternalInput/index.tsx
import { Fragment as Fragment3, jsx as jsx13, jsxs as jsxs6 } from "react/jsx-runtime";
var getClassName10 = get_class_name_factory_default("ExternalInput", styles_module_default6);
var getClassNameModal = get_class_name_factory_default("ExternalInputModal", styles_module_default6);
var dataCache = {};
var ExternalInput = ({
  field,
  onChange,
  value = null,
  name,
  id,
  readOnly
}) => {
  const {
    mapProp = (val) => val,
    mapRow = (val) => val,
    filterFields
  } = field || {};
  const [data, setData] = useState9([]);
  const [isOpen, setOpen] = useState9(false);
  const [isLoading, setIsLoading] = useState9(true);
  const hasFilterFields = !!filterFields;
  const [filters, setFilters] = useState9(field.initialFilters || {});
  const [filtersToggled, setFiltersToggled] = useState9(hasFilterFields);
  const mappedData = useMemo2(() => {
    return data.map(mapRow);
  }, [data]);
  const keys = useMemo2(() => {
    const validKeys = /* @__PURE__ */ new Set();
    for (const item of mappedData) {
      for (const key of Object.keys(item)) {
        if (typeof item[key] === "string" || typeof item[key] === "number" || isValidElement(item[key])) {
          validKeys.add(key);
        }
      }
    }
    return Array.from(validKeys);
  }, [mappedData]);
  const [searchQuery, setSearchQuery] = useState9(field.initialQuery || "");
  const search = useCallback4(
    (query, filters2) => __async(void 0, null, function* () {
      setIsLoading(true);
      const cacheKey = `${id}-${query}-${JSON.stringify(filters2)}`;
      const listData = dataCache[cacheKey] || (yield field.fetchList({ query, filters: filters2 }));
      if (listData) {
        setData(listData);
        setIsLoading(false);
        dataCache[cacheKey] = listData;
      }
    }),
    [id, field]
  );
  const Footer = useCallback4(
    (props) => field.renderFooter ? field.renderFooter(props) : /* @__PURE__ */ jsxs6("span", { className: getClassNameModal("footer"), children: [
      props.items.length,
      " result",
      props.items.length === 1 ? "" : "s"
    ] }),
    [field.renderFooter]
  );
  useEffect7(() => {
    search(searchQuery, filters);
  }, []);
  return /* @__PURE__ */ jsxs6(
    "div",
    {
      className: getClassName10({
        dataSelected: !!value,
        modalVisible: isOpen,
        readOnly
      }),
      id,
      children: [
        /* @__PURE__ */ jsxs6("div", { className: getClassName10("actions"), children: [
          /* @__PURE__ */ jsx13(
            "button",
            {
              type: "button",
              onClick: () => setOpen(true),
              className: getClassName10("button"),
              disabled: readOnly,
              children: value ? field.getItemSummary ? field.getItemSummary(value) : "External item" : /* @__PURE__ */ jsxs6(Fragment3, { children: [
                /* @__PURE__ */ jsx13(Link, { size: "16" }),
                /* @__PURE__ */ jsx13("span", { children: field.placeholder })
              ] })
            }
          ),
          value && /* @__PURE__ */ jsx13(
            "button",
            {
              type: "button",
              className: getClassName10("detachButton"),
              onClick: () => {
                onChange(null);
              },
              disabled: readOnly,
              children: /* @__PURE__ */ jsx13(LockOpen, { size: 16 })
            }
          )
        ] }),
        /* @__PURE__ */ jsx13(Modal, { onClose: () => setOpen(false), isOpen, children: /* @__PURE__ */ jsxs6(
          "form",
          {
            className: getClassNameModal({
              isLoading,
              loaded: !isLoading,
              hasData: mappedData.length > 0,
              filtersToggled
            }),
            onSubmit: (e) => {
              e.preventDefault();
              search(searchQuery, filters);
            },
            children: [
              /* @__PURE__ */ jsx13("div", { className: getClassNameModal("masthead"), children: field.showSearch ? /* @__PURE__ */ jsxs6("div", { className: getClassNameModal("searchForm"), children: [
                /* @__PURE__ */ jsxs6("label", { className: getClassNameModal("search"), children: [
                  /* @__PURE__ */ jsx13("span", { className: getClassNameModal("searchIconText"), children: "Search" }),
                  /* @__PURE__ */ jsx13("div", { className: getClassNameModal("searchIcon"), children: /* @__PURE__ */ jsx13(Search, { size: "18" }) }),
                  /* @__PURE__ */ jsx13(
                    "input",
                    {
                      className: getClassNameModal("searchInput"),
                      name: "q",
                      type: "search",
                      placeholder: field.placeholder,
                      onChange: (e) => {
                        setSearchQuery(e.currentTarget.value);
                      },
                      autoComplete: "off",
                      value: searchQuery
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs6("div", { className: getClassNameModal("searchActions"), children: [
                  /* @__PURE__ */ jsx13(Button, { type: "submit", loading: isLoading, fullWidth: true, children: "Search" }),
                  hasFilterFields && /* @__PURE__ */ jsx13("div", { className: getClassNameModal("searchActionIcon"), children: /* @__PURE__ */ jsx13(
                    IconButton,
                    {
                      title: "Toggle filters",
                      onClick: (e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setFiltersToggled(!filtersToggled);
                      },
                      children: /* @__PURE__ */ jsx13(SlidersHorizontal, { size: 20 })
                    }
                  ) })
                ] })
              ] }) : /* @__PURE__ */ jsx13(Heading, { rank: "2", size: "xs", children: field.placeholder || "Select data" }) }),
              /* @__PURE__ */ jsxs6("div", { className: getClassNameModal("grid"), children: [
                hasFilterFields && /* @__PURE__ */ jsx13("div", { className: getClassNameModal("filters"), children: hasFilterFields && Object.keys(filterFields).map((fieldName) => {
                  const filterField = filterFields[fieldName];
                  return /* @__PURE__ */ jsx13(
                    AutoFieldPrivate,
                    {
                      field: filterField,
                      name: fieldName,
                      id: `external_field_${fieldName}_filter`,
                      label: filterField.label || fieldName,
                      value: filters[fieldName],
                      onChange: (value2) => {
                        const newFilters = __spreadProps(__spreadValues({}, filters), { [fieldName]: value2 });
                        setFilters(newFilters);
                        search(searchQuery, newFilters);
                      }
                    },
                    fieldName
                  );
                }) }),
                /* @__PURE__ */ jsxs6("div", { className: getClassNameModal("tableWrapper"), children: [
                  /* @__PURE__ */ jsxs6("table", { className: getClassNameModal("table"), children: [
                    /* @__PURE__ */ jsx13("thead", { className: getClassNameModal("thead"), children: /* @__PURE__ */ jsx13("tr", { className: getClassNameModal("tr"), children: keys.map((key) => /* @__PURE__ */ jsx13(
                      "th",
                      {
                        className: getClassNameModal("th"),
                        style: { textAlign: "left" },
                        children: key
                      },
                      key
                    )) }) }),
                    /* @__PURE__ */ jsx13("tbody", { className: getClassNameModal("tbody"), children: mappedData.map((item, i) => {
                      return /* @__PURE__ */ jsx13(
                        "tr",
                        {
                          style: { whiteSpace: "nowrap" },
                          className: getClassNameModal("tr"),
                          onClick: () => {
                            onChange(mapProp(data[i]));
                            setOpen(false);
                          },
                          children: keys.map((key) => /* @__PURE__ */ jsx13("td", { className: getClassNameModal("td"), children: item[key] }, key))
                        },
                        i
                      );
                    }) })
                  ] }),
                  /* @__PURE__ */ jsx13("div", { className: getClassNameModal("loadingBanner"), children: /* @__PURE__ */ jsx13(Loader, { size: 24 }) })
                ] })
              ] }),
              /* @__PURE__ */ jsx13("div", { className: getClassNameModal("footerContainer"), children: /* @__PURE__ */ jsx13(Footer, { items: mappedData }) })
            ]
          }
        ) })
      ]
    }
  );
};

// components/AutoField/fields/ExternalField/index.tsx
import { jsx as jsx14 } from "react/jsx-runtime";
var ExternalField = ({
  field,
  onChange,
  value,
  name,
  label,
  Label: Label2,
  id,
  readOnly
}) => {
  var _a, _b, _c;
  const validField = field;
  const deprecatedField = field;
  useEffect8(() => {
    if (deprecatedField.adaptor) {
      console.error(
        "Warning: The `adaptor` API is deprecated. Please use updated APIs on the `external` field instead. This will be a breaking change in a future release."
      );
    }
  }, []);
  if (field.type !== "external") {
    return null;
  }
  return /* @__PURE__ */ jsx14(Label2, { label: label || name, icon: /* @__PURE__ */ jsx14(Link, { size: 16 }), el: "div", children: /* @__PURE__ */ jsx14(
    ExternalInput,
    {
      name,
      field: __spreadProps(__spreadValues({}, validField), {
        // DEPRECATED
        placeholder: ((_a = deprecatedField.adaptor) == null ? void 0 : _a.name) ? `Select from ${deprecatedField.adaptor.name}` : validField.placeholder || "Select data",
        mapProp: ((_b = deprecatedField.adaptor) == null ? void 0 : _b.mapProp) || validField.mapProp,
        mapRow: validField.mapRow,
        fetchList: ((_c = deprecatedField.adaptor) == null ? void 0 : _c.fetchList) ? () => __async(void 0, null, function* () {
          return yield deprecatedField.adaptor.fetchList(
            deprecatedField.adaptorParams
          );
        }) : validField.fetchList
      }),
      onChange,
      value,
      id,
      readOnly
    }
  ) });
};

// components/AutoField/fields/RadioField/index.tsx
import { useMemo as useMemo3 } from "react";

// lib/safe-json-parse.ts
var safeJsonParse = (str) => {
  try {
    const jsonValue = JSON.parse(str);
    return jsonValue;
  } catch (e) {
    return str;
  }
};

// components/AutoField/fields/RadioField/index.tsx
import { jsx as jsx15, jsxs as jsxs7 } from "react/jsx-runtime";
var getClassName11 = get_class_name_factory_default("Input", styles_module_default2);
var RadioField = ({
  field,
  onChange,
  readOnly,
  value,
  name,
  id,
  label,
  Label: Label2
}) => {
  const flatOptions = useMemo3(
    () => field.type === "radio" ? field.options.map(({ value: value2 }) => value2) : [],
    [field]
  );
  if (field.type !== "radio" || !field.options) {
    return null;
  }
  return /* @__PURE__ */ jsx15(
    Label2,
    {
      icon: /* @__PURE__ */ jsx15(CircleCheckBig, { size: 16 }),
      label: label || name,
      readOnly,
      el: "div",
      children: /* @__PURE__ */ jsx15("div", { className: getClassName11("radioGroupItems"), id, children: field.options.map((option) => /* @__PURE__ */ jsxs7(
        "label",
        {
          className: getClassName11("radio"),
          children: [
            /* @__PURE__ */ jsx15(
              "input",
              {
                type: "radio",
                className: getClassName11("radioInput"),
                value: option.value,
                name,
                onChange: (e) => {
                  var _a;
                  const jsonValue = (_a = safeJsonParse(e.target.value)) != null ? _a : e.target.value;
                  if (flatOptions.indexOf(jsonValue) > -1) {
                    onChange(jsonValue);
                  } else {
                    onChange(e.target.value);
                  }
                },
                disabled: readOnly,
                checked: value === option.value
              }
            ),
            /* @__PURE__ */ jsx15("div", { className: getClassName11("radioInner"), children: option.label || option.value })
          ]
        },
        option.label + option.value
      )) })
    }
  );
};

// components/AutoField/fields/SelectField/index.tsx
import { useMemo as useMemo4 } from "react";
import { jsx as jsx16 } from "react/jsx-runtime";
var getClassName12 = get_class_name_factory_default("Input", styles_module_default2);
var SelectField = ({
  field,
  onChange,
  label,
  Label: Label2,
  value,
  name,
  readOnly,
  id
}) => {
  const flatOptions = useMemo4(
    () => field.type === "select" ? field.options.map(({ value: value2 }) => value2) : [],
    [field]
  );
  if (field.type !== "select" || !field.options) {
    return null;
  }
  return /* @__PURE__ */ jsx16(
    Label2,
    {
      label: label || name,
      icon: /* @__PURE__ */ jsx16(ChevronDown, { size: 16 }),
      readOnly,
      children: /* @__PURE__ */ jsx16(
        "select",
        {
          id,
          title: label || name,
          className: getClassName12("input"),
          disabled: readOnly,
          onChange: (e) => {
            var _a;
            const jsonValue = (_a = safeJsonParse(e.target.value)) != null ? _a : e.target.value;
            if (flatOptions.indexOf(jsonValue) > -1) {
              onChange(jsonValue);
            } else {
              onChange(e.target.value);
            }
          },
          value,
          children: field.options.map((option) => /* @__PURE__ */ jsx16(
            "option",
            {
              label: option.label,
              value: option.value
            },
            option.label + option.value
          ))
        }
      )
    }
  );
};

// components/AutoField/fields/TextareaField/index.tsx
import { jsx as jsx17 } from "react/jsx-runtime";
var getClassName13 = get_class_name_factory_default("Input", styles_module_default2);
var TextareaField = ({
  onChange,
  readOnly,
  value,
  name,
  label,
  Label: Label2,
  id
}) => {
  return /* @__PURE__ */ jsx17(Label2, { label: label || name, icon: /* @__PURE__ */ jsx17(Type, { size: 16 }), readOnly, children: /* @__PURE__ */ jsx17(
    "textarea",
    {
      id,
      className: getClassName13("input"),
      autoComplete: "off",
      name,
      value: typeof value === "undefined" ? "" : value,
      onChange: (e) => onChange(e.currentTarget.value),
      readOnly,
      tabIndex: readOnly ? -1 : void 0,
      rows: 5
    }
  ) });
};

// components/AutoField/index.tsx
import { useDebouncedCallback } from "use-debounce";

// css-module:/home/dev/Masaüstü/projeler/punk-turkish/components/AutoField/fields/ObjectField/styles.module.css#css-module
var styles_module_default9 = { "ObjectField": "_ObjectField_1ua3y_5", "ObjectField-fieldset": "_ObjectField-fieldset_1ua3y_13" };

// components/AutoField/fields/ObjectField/index.tsx
import { jsx as jsx18 } from "react/jsx-runtime";
var getClassName14 = get_class_name_factory_default("ObjectField", styles_module_default9);
var ObjectField = ({
  field,
  onChange,
  value,
  name,
  label,
  Label: Label2,
  readOnly,
  id
}) => {
  const { readOnlyFields, localName = name } = useNestedFieldContext();
  if (field.type !== "object" || !field.objectFields) {
    return null;
  }
  const data = value || {};
  return /* @__PURE__ */ jsx18(
    Label2,
    {
      label: label || name,
      icon: /* @__PURE__ */ jsx18(EllipsisVertical, { size: 16 }),
      el: "div",
      readOnly,
      children: /* @__PURE__ */ jsx18("div", { className: getClassName14(), children: /* @__PURE__ */ jsx18("fieldset", { className: getClassName14("fieldset"), children: Object.keys(field.objectFields).map((subName) => {
        const subField = field.objectFields[subName];
        const subPath = `${name}.${subName}`;
        const localSubPath = `${localName || name}.${subName}`;
        const subReadOnly = readOnly ? readOnly : readOnlyFields[localSubPath];
        const label2 = subField.label || subName;
        return /* @__PURE__ */ jsx18(
          NestedFieldProvider,
          {
            name: localName || id,
            subName,
            readOnlyFields,
            children: /* @__PURE__ */ jsx18(
              AutoFieldPrivate,
              {
                name: subPath,
                label: subPath,
                id: `${id}_${subName}`,
                readOnly: subReadOnly,
                field: __spreadProps(__spreadValues({}, subField), {
                  label: label2
                  // May be used by custom fields
                }),
                value: data[subName],
                onChange: (val, ui) => {
                  onChange(
                    __spreadProps(__spreadValues({}, data), {
                      [subName]: val
                    }),
                    ui
                  );
                }
              }
            )
          },
          subPath
        );
      }) }) })
    }
  );
};

// lib/use-safe-id.ts
import React2, { useState as useState10 } from "react";

// lib/generate-id.ts
import { v4 as uuidv4 } from "uuid";
var generateId = (type) => type ? `${type}-${uuidv4()}` : uuidv4();

// lib/use-safe-id.ts
var useSafeId = () => {
  if (typeof React2.useId !== "undefined") {
    return React2.useId();
  }
  const [id] = useState10(generateId());
  return id;
};

// components/AutoField/index.tsx
import { Fragment as Fragment4, jsx as jsx19, jsxs as jsxs8 } from "react/jsx-runtime";
var getClassName15 = get_class_name_factory_default("Input", styles_module_default2);
var getClassNameWrapper = get_class_name_factory_default("InputWrapper", styles_module_default2);
var FieldLabel = ({
  children,
  icon,
  label,
  el = "label",
  readOnly,
  className
}) => {
  const El = el;
  return /* @__PURE__ */ jsxs8(El, { className, children: [
    /* @__PURE__ */ jsxs8("div", { className: getClassName15("label"), children: [
      icon ? /* @__PURE__ */ jsx19("div", { className: getClassName15("labelIcon"), children: icon }) : /* @__PURE__ */ jsx19(Fragment4, {}),
      label,
      readOnly && /* @__PURE__ */ jsx19("div", { className: getClassName15("disabledIcon"), title: "Read-only", children: /* @__PURE__ */ jsx19(Lock, { size: "12" }) })
    ] }),
    children
  ] });
};
var FieldLabelInternal = ({
  children,
  icon,
  label,
  el = "label",
  readOnly
}) => {
  const { overrides } = useAppContext();
  const Wrapper = useMemo5(
    () => overrides.fieldLabel || FieldLabel,
    [overrides]
  );
  if (!label) {
    return /* @__PURE__ */ jsx19(Fragment4, { children });
  }
  return /* @__PURE__ */ jsx19(
    Wrapper,
    {
      label,
      icon,
      className: getClassName15({ readOnly }),
      readOnly,
      el,
      children
    }
  );
};
function AutoFieldInternal(props) {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  const { dispatch, overrides, selectedItem } = useAppContext();
  const nestedFieldContext = useContext3(NestedFieldContext);
  const { id, Label: Label2 = FieldLabelInternal } = props;
  const field = props.field;
  const label = field.label;
  const defaultId = useSafeId();
  const resolvedId = id || defaultId;
  const defaultFields = {
    array: ArrayField,
    external: ExternalField,
    object: ObjectField,
    select: SelectField,
    textarea: TextareaField,
    radio: RadioField,
    text: DefaultField,
    number: DefaultField
  };
  const render = __spreadProps(__spreadValues({}, overrides.fieldTypes), {
    array: ((_a = overrides.fieldTypes) == null ? void 0 : _a.array) || defaultFields.array,
    external: ((_b = overrides.fieldTypes) == null ? void 0 : _b.external) || defaultFields.external,
    object: ((_c = overrides.fieldTypes) == null ? void 0 : _c.object) || defaultFields.object,
    select: ((_d = overrides.fieldTypes) == null ? void 0 : _d.select) || defaultFields.select,
    textarea: ((_e = overrides.fieldTypes) == null ? void 0 : _e.textarea) || defaultFields.textarea,
    radio: ((_f = overrides.fieldTypes) == null ? void 0 : _f.radio) || defaultFields.radio,
    text: ((_g = overrides.fieldTypes) == null ? void 0 : _g.text) || defaultFields.text,
    number: ((_h = overrides.fieldTypes) == null ? void 0 : _h.number) || defaultFields.number
  });
  const mergedProps = __spreadProps(__spreadValues({}, props), {
    field,
    label,
    Label: Label2,
    id: resolvedId
  });
  const onFocus = useCallback5(
    (e) => {
      if (mergedProps.name && e.target.nodeName === "INPUT") {
        e.stopPropagation();
        dispatch({
          type: "setUi",
          ui: {
            field: { focus: mergedProps.name }
          }
        });
      }
    },
    [mergedProps.name]
  );
  const onBlur = useCallback5((e) => {
    if ("name" in e.target) {
      dispatch({
        type: "setUi",
        ui: {
          field: { focus: null }
        }
      });
    }
  }, []);
  if (field.type === "custom") {
    if (!field.render) {
      return null;
    }
    const CustomField = field.render;
    return /* @__PURE__ */ jsx19("div", { className: getClassNameWrapper(), onFocus, onBlur, children: /* @__PURE__ */ jsx19("div", { className: getClassName15(), children: /* @__PURE__ */ jsx19(CustomField, __spreadValues({}, mergedProps)) }) });
  }
  const children = defaultFields[field.type](mergedProps);
  const Render2 = render[field.type];
  return /* @__PURE__ */ jsx19(
    NestedFieldContext.Provider,
    {
      value: {
        readOnlyFields: nestedFieldContext.readOnlyFields || (selectedItem == null ? void 0 : selectedItem.readOnly) || {},
        localName: nestedFieldContext.localName
      },
      children: /* @__PURE__ */ jsx19(
        "div",
        {
          className: getClassNameWrapper(),
          onFocus,
          onBlur,
          onClick: (e) => {
            e.stopPropagation();
          },
          children: /* @__PURE__ */ jsx19(Render2, __spreadProps(__spreadValues({}, mergedProps), { children }))
        }
      )
    }
  );
}
function AutoFieldPrivate(props) {
  const { state } = useAppContext();
  const { value, onChange } = props;
  const [localValue, setLocalValue] = useState11(value);
  const onChangeDb = useDebouncedCallback(
    (val, ui) => {
      onChange(val, ui);
    },
    50,
    { leading: true }
  );
  const onChangeLocal = useCallback5((val, ui) => {
    setLocalValue(val);
    onChangeDb(val, ui);
  }, []);
  useEffect9(() => {
    if (state.ui.field.focus !== props.name) {
      setLocalValue(value);
    }
  }, [value]);
  const localProps = {
    value: localValue,
    onChange: onChangeLocal
  };
  return /* @__PURE__ */ jsx19(AutoFieldInternal, __spreadValues(__spreadValues({}, props), localProps));
}
function AutoField(props) {
  const DefaultLabel = useMemo5(() => {
    const DefaultLabel2 = (labelProps) => /* @__PURE__ */ jsx19(
      "div",
      __spreadProps(__spreadValues({}, labelProps), {
        className: getClassName15({ readOnly: props.readOnly })
      })
    );
    return DefaultLabel2;
  }, [props.readOnly]);
  return /* @__PURE__ */ jsx19(AutoFieldInternal, __spreadProps(__spreadValues({}, props), { Label: DefaultLabel }));
}

// css-module:/home/dev/Masaüstü/projeler/punk-turkish/components/Drawer/styles.module.css#css-module
var styles_module_default10 = { "Drawer": "_Drawer_fkqfo_1", "Drawer-draggable": "_Drawer-draggable_fkqfo_8", "Drawer-draggableBg": "_Drawer-draggableBg_fkqfo_12", "Drawer-draggableFg": "_Drawer-draggableFg_fkqfo_21", "DrawerItem-draggable": "_DrawerItem-draggable_fkqfo_25", "DrawerItem--disabled": "_DrawerItem--disabled_fkqfo_38", "DrawerItem": "_DrawerItem_fkqfo_25", "Drawer--isDraggingFrom": "_Drawer--isDraggingFrom_fkqfo_48", "DrawerItem-name": "_DrawerItem-name_fkqfo_66" };

// components/Drawer/index.tsx
import { useId as useId2, useMemo as useMemo9, useState as useState18 } from "react";

// components/DragDropContext/index.tsx
import { DragDropProvider as DragDropProvider2 } from "@dnd-kit/react";
import {
  createContext as createContext4,
  useCallback as useCallback11,
  useContext as useContext7,
  useEffect as useEffect15,
  useId,
  useRef as useRef3,
  useState as useState17
} from "react";
import { AutoScroller, defaultPreset } from "@dnd-kit/dom";

// components/DropZone/index.tsx
import {
  forwardRef as forwardRef3,
  useCallback as useCallback10,
  useContext as useContext6,
  useEffect as useEffect14,
  useMemo as useMemo8,
  useRef as useRef2
} from "react";

// components/DraggableComponent/index.tsx
import {
  useCallback as useCallback7,
  useContext as useContext5,
  useEffect as useEffect10,
  useMemo as useMemo7,
  useRef,
  useState as useState13
} from "react";

// css-module:/home/dev/Masaüstü/projeler/punk-turkish/components/DraggableComponent/styles.module.css#css-module
var styles_module_default11 = { "DraggableComponent": "_DraggableComponent_1ukn8_1", "DraggableComponent-overlay": "_DraggableComponent-overlay_1ukn8_12", "DraggableComponent-loadingOverlay": "_DraggableComponent-loadingOverlay_1ukn8_29", "DraggableComponent--hover": "_DraggableComponent--hover_1ukn8_45", "DraggableComponent--isLocked": "_DraggableComponent--isLocked_1ukn8_45", "DraggableComponent--isSelected": "_DraggableComponent--isSelected_1ukn8_54", "DraggableComponent-actionsOverlay": "_DraggableComponent-actionsOverlay_1ukn8_66", "DraggableComponent-actions": "_DraggableComponent-actions_1ukn8_66" };

// components/DraggableComponent/index.tsx
import { createPortal as createPortal2 } from "react-dom";

// lib/dnd/collision/dynamic/index.ts
import {
  CollisionPriority as CollisionPriority7,
  CollisionType as CollisionType7
} from "@dnd-kit/abstract";

// lib/dnd/collision/directional/index.ts
import { CollisionType } from "@dnd-kit/abstract";

// lib/dnd/collision/collision-debug.ts
var DEBUG = false;
var debugElements = {};
var timeout;
var collisionDebug = (a, b, id, color, label) => {
  if (!DEBUG) return;
  const debugId = `${id}-debug`;
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    Object.entries(debugElements).forEach(([id2, { svg }]) => {
      svg.remove();
      delete debugElements[id2];
    });
  }, 1e3);
  requestAnimationFrame(() => {
    var _a, _b;
    const existingEl = debugElements[debugId];
    let line = (_a = debugElements[debugId]) == null ? void 0 : _a.line;
    let text = (_b = debugElements[debugId]) == null ? void 0 : _b.text;
    if (!existingEl) {
      const svgNs = "http://www.w3.org/2000/svg";
      const svg = document.createElementNS(svgNs, "svg");
      line = document.createElementNS(svgNs, "line");
      text = document.createElementNS(svgNs, "text");
      svg.setAttribute("id", debugId);
      svg.setAttribute(
        "style",
        "position: fixed; height: 100%; width: 100%; pointer-events: none;"
      );
      svg.appendChild(line);
      svg.appendChild(text);
      text.setAttribute("fill", `black`);
      document.body.appendChild(svg);
      debugElements[debugId] = { svg, line, text };
    }
    line.setAttribute("x1", a.x.toString());
    line.setAttribute("x2", b.x.toString());
    line.setAttribute("y1", a.y.toString());
    line.setAttribute("y2", b.y.toString());
    line.setAttribute("style", `stroke:${color};stroke-width:2`);
    text.setAttribute("x", (a.x - (a.x - b.x) / 2).toString());
    text.setAttribute("y", (a.y - (a.y - b.y) / 2).toString());
    if (label) {
      text.innerHTML = label;
    }
  });
};

// lib/dnd/collision/directional/index.ts
var distanceChange = "increasing";
var directionalCollision = (input, previous) => {
  var _a;
  const { dragOperation, droppable } = input;
  const { shape: dropShape } = droppable;
  const { position } = dragOperation;
  const dragShape = (_a = dragOperation.shape) == null ? void 0 : _a.current;
  if (!dragShape || !dropShape) return null;
  const dropCenter = dropShape.center;
  const distanceToPrevious = Math.sqrt(
    Math.pow(dropCenter.x - previous.x, 2) + Math.pow(dropCenter.y - previous.y, 2)
  );
  const distanceToCurrent = Math.sqrt(
    Math.pow(dropCenter.x - position.current.x, 2) + Math.pow(dropCenter.y - position.current.y, 2)
  );
  distanceChange = distanceToCurrent === distanceToPrevious ? distanceChange : distanceToCurrent < distanceToPrevious ? "decreasing" : "increasing";
  collisionDebug(
    dragShape.center,
    dropCenter,
    droppable.id.toString(),
    "rebeccapurple"
  );
  if (distanceChange === "decreasing") {
    return {
      id: droppable.id,
      value: 1,
      type: CollisionType.Collision
    };
  }
  return null;
};

// lib/dnd/collision/dynamic/get-direction.ts
var getDirection = (dragAxis, delta) => {
  if (dragAxis === "dynamic") {
    if (Math.abs(delta.y) > Math.abs(delta.x)) {
      return delta.y === 0 ? null : delta.y > 0 ? "down" : "up";
    } else {
      return delta.x === 0 ? null : delta.x > 0 ? "right" : "left";
    }
  } else if (dragAxis === "x") {
    return delta.x === 0 ? null : delta.x > 0 ? "right" : "left";
  }
  return delta.y === 0 ? null : delta.y > 0 ? "down" : "up";
};

// lib/dnd/collision/dynamic/get-midpoint-impact.ts
var getMidpointImpact = (dragShape, dropShape, direction, offsetMultiplier = 0) => {
  const dragRect = dragShape.boundingRectangle;
  const dropCenter = dropShape.center;
  if (direction === "down") {
    const offset2 = offsetMultiplier * dropShape.boundingRectangle.height;
    return dragRect.bottom >= dropCenter.y + offset2;
  } else if (direction === "up") {
    const offset2 = offsetMultiplier * dropShape.boundingRectangle.height;
    return dragRect.top < dropCenter.y - offset2;
  } else if (direction === "left") {
    const offset2 = offsetMultiplier * dropShape.boundingRectangle.width;
    return dropCenter.x - offset2 >= dragRect.left;
  }
  const offset = offsetMultiplier * dropShape.boundingRectangle.width;
  return dragRect.right - offset >= dropCenter.x;
};

// lib/dnd/collision/dynamic/track-movement-interval.ts
import { Point } from "@dnd-kit/geometry";
var INTERVAL_SENSITIVITY = 10;
var intervalCache = {
  current: { x: 0, y: 0 },
  delta: { x: 0, y: 0 },
  previous: { x: 0, y: 0 },
  direction: null
};
var trackMovementInterval = (point, dragAxis = "dynamic") => {
  intervalCache.current = point;
  intervalCache.delta = {
    x: point.x - intervalCache.previous.x,
    y: point.y - intervalCache.previous.y
  };
  intervalCache.direction = getDirection(dragAxis, intervalCache.delta) || intervalCache.direction;
  if (Math.abs(intervalCache.delta.x) > INTERVAL_SENSITIVITY || Math.abs(intervalCache.delta.y) > INTERVAL_SENSITIVITY) {
    intervalCache.previous = Point.from(point);
  }
  return intervalCache;
};

// node_modules/@dnd-kit/collision/dist/index.js
import { CollisionPriority, CollisionType as CollisionType2 } from "@dnd-kit/abstract";
import { Point as Point2 } from "@dnd-kit/geometry";
import { CollisionPriority as CollisionPriority2, CollisionType as CollisionType22 } from "@dnd-kit/abstract";
import { Point as Point22 } from "@dnd-kit/geometry";
import { CollisionPriority as CollisionPriority3, CollisionType as CollisionType3 } from "@dnd-kit/abstract";
import { Point as Point3 } from "@dnd-kit/geometry";
import { CollisionPriority as CollisionPriority4, CollisionType as CollisionType4 } from "@dnd-kit/abstract";
import { Point as Point4 } from "@dnd-kit/geometry";
import { CollisionPriority as CollisionPriority5, CollisionType as CollisionType5 } from "@dnd-kit/abstract";
import { Point as Point5 } from "@dnd-kit/geometry";
import { CollisionPriority as CollisionPriority6, CollisionType as CollisionType6 } from "@dnd-kit/abstract";
import { Point as Point6 } from "@dnd-kit/geometry";
var pointerIntersection = ({
  dragOperation,
  droppable
}) => {
  const pointerCoordinates = dragOperation.position.current;
  if (!pointerCoordinates) {
    return null;
  }
  const { id } = droppable;
  if (!droppable.shape) {
    return null;
  }
  if (droppable.shape.containsPoint(pointerCoordinates)) {
    const distance = Point2.distance(droppable.shape.center, pointerCoordinates);
    return {
      id,
      value: 1 / distance,
      type: CollisionType2.PointerIntersection,
      priority: CollisionPriority.High
    };
  }
  return null;
};
var closestCorners = (input) => {
  const { dragOperation, droppable } = input;
  const { shape, position } = dragOperation;
  if (!droppable.shape) {
    return null;
  }
  const { left, top, right, bottom } = droppable.shape.boundingRectangle;
  const corners = [
    {
      x: left,
      y: top
    },
    {
      x: right,
      y: top
    },
    {
      x: left,
      y: bottom
    },
    {
      x: right,
      y: bottom
    }
  ];
  const distance = corners.reduce(
    (acc, corner) => {
      var _a;
      return acc + Point3.distance(
        Point3.from(corner),
        (_a = shape == null ? void 0 : shape.current.center) != null ? _a : position.current
      );
    },
    0
  );
  const value = distance / 4;
  return {
    id: droppable.id,
    value: 1 / value,
    type: CollisionType3.Collision,
    priority: CollisionPriority3.Normal
  };
};

// lib/dnd/collision/dynamic/store.ts
import { createStore } from "zustand/vanilla";
var collisionStore = createStore(() => ({
  fallbackEnabled: false
}));

// lib/dnd/collision/dynamic/index.ts
var flushNext = "";
var createDynamicCollisionDetector = (dragAxis, midpointOffset = 0.05) => (input) => {
  var _a, _b, _c, _d, _e;
  const { dragOperation, droppable } = input;
  const { position } = dragOperation;
  const dragShape = (_a = dragOperation.shape) == null ? void 0 : _a.current;
  const { shape: dropShape } = droppable;
  if (!dragShape || !dropShape) {
    return null;
  }
  const { center: dragCenter } = dragShape;
  const { fallbackEnabled } = collisionStore.getState();
  const interval = trackMovementInterval(position.current, dragAxis);
  dragOperation.data = __spreadProps(__spreadValues({}, dragOperation.data), {
    direction: interval.direction
  });
  const collisionMap = dragOperation.data.collisionMap || {};
  dragOperation.data.collisionMap = collisionMap;
  collisionMap[droppable.id] = {
    direction: interval.direction
  };
  const { center: dropCenter } = dropShape;
  const overMidpoint = getMidpointImpact(
    dragShape,
    dropShape,
    interval.direction,
    midpointOffset
  );
  if (((_b = dragOperation.source) == null ? void 0 : _b.id) === droppable.id) {
    const collision = directionalCollision(input, interval.previous);
    collisionDebug(dragCenter, dropCenter, droppable.id.toString(), "yellow");
    if (collision) {
      return __spreadProps(__spreadValues({}, collision), {
        priority: CollisionPriority7.Highest
      });
    }
  }
  const intersectionArea = dragShape.intersectionArea(dropShape);
  const intersectionRatio = intersectionArea / dropShape.area;
  if (intersectionArea && overMidpoint) {
    collisionDebug(
      dragCenter,
      dropCenter,
      droppable.id.toString(),
      "green",
      interval.direction
    );
    const collision = {
      id: droppable.id,
      value: intersectionRatio,
      priority: CollisionPriority7.High,
      type: CollisionType7.Collision
    };
    const shouldFlushId = flushNext === droppable.id;
    flushNext = "";
    return __spreadProps(__spreadValues({}, collision), { id: shouldFlushId ? "flush" : collision.id });
  }
  if (fallbackEnabled && ((_c = dragOperation.source) == null ? void 0 : _c.id) !== droppable.id) {
    const xAxisIntersection = dropShape.boundingRectangle.right > dragShape.boundingRectangle.left && dropShape.boundingRectangle.left < dragShape.boundingRectangle.right;
    const yAxisIntersection = dropShape.boundingRectangle.bottom > dragShape.boundingRectangle.top && dropShape.boundingRectangle.top < dragShape.boundingRectangle.bottom;
    if (dragAxis === "y" && xAxisIntersection || yAxisIntersection) {
      const fallbackCollision = closestCorners(input);
      if (fallbackCollision) {
        const direction = getDirection(dragAxis, {
          x: dragShape.center.x - (((_d = droppable.shape) == null ? void 0 : _d.center.x) || 0),
          y: dragShape.center.y - (((_e = droppable.shape) == null ? void 0 : _e.center.y) || 0)
        });
        collisionMap[droppable.id] = {
          direction
        };
        if (intersectionArea) {
          collisionDebug(
            dragCenter,
            dropCenter,
            droppable.id.toString(),
            "red",
            direction || ""
          );
          flushNext = droppable.id;
          return __spreadProps(__spreadValues({}, fallbackCollision), {
            priority: CollisionPriority7.Low
          });
        }
        collisionDebug(
          dragCenter,
          dropCenter,
          droppable.id.toString(),
          "orange",
          direction || ""
        );
        return __spreadProps(__spreadValues({}, fallbackCollision), { priority: CollisionPriority7.Lowest });
      }
    }
  }
  collisionDebug(dragCenter, dropCenter, droppable.id.toString(), "hotpink");
  delete collisionMap[droppable.id];
  return null;
};

// lib/get-deep-scroll-position.ts
function getDeepScrollPosition(element) {
  let totalScroll = {
    x: 0,
    y: 0
  };
  let current = element;
  while (current && current !== document.documentElement) {
    const parent = current.parentElement;
    if (parent) {
      totalScroll.x += parent.scrollLeft;
      totalScroll.y += parent.scrollTop;
    }
    current = parent;
  }
  return totalScroll;
}

// components/DropZone/context.tsx
import {
  createContext as createContext3,
  useCallback as useCallback6,
  useMemo as useMemo6,
  useState as useState12
} from "react";
import { createStore as createStore2 } from "zustand";
import { Fragment as Fragment5, jsx as jsx20 } from "react/jsx-runtime";
var dropZoneContext = createContext3(null);
var ZoneStoreContext = createContext3(
  createStore2(() => ({
    zoneDepthIndex: {},
    nextZoneDepthIndex: {},
    areaDepthIndex: {},
    nextAreaDepthIndex: {},
    draggedItem: null,
    previewIndex: {}
  }))
);
var ZoneStoreProvider = ({
  children,
  store
}) => {
  return /* @__PURE__ */ jsx20(ZoneStoreContext.Provider, { value: store, children });
};
var DropZoneProvider = ({
  children,
  value
}) => {
  const [hoveringComponent, setHoveringComponent] = useState12();
  const [areasWithZones, setAreasWithZones] = useState12(
    {}
  );
  const [activeZones, setActiveZones] = useState12({});
  const { dispatch } = useAppContext();
  const registerZoneArea = useCallback6(
    (area) => {
      setAreasWithZones((latest) => __spreadProps(__spreadValues({}, latest), { [area]: true }));
    },
    [setAreasWithZones]
  );
  const registerZone = useCallback6(
    (zoneCompound) => {
      if (!dispatch) {
        return;
      }
      dispatch({
        type: "registerZone",
        zone: zoneCompound
      });
      setActiveZones((latest) => __spreadProps(__spreadValues({}, latest), { [zoneCompound]: true }));
    },
    [setActiveZones, dispatch]
  );
  const unregisterZone = useCallback6(
    (zoneCompound) => {
      if (!dispatch) {
        return;
      }
      dispatch({
        type: "unregisterZone",
        zone: zoneCompound
      });
      setActiveZones((latest) => __spreadProps(__spreadValues({}, latest), {
        [zoneCompound]: false
      }));
    },
    [setActiveZones, dispatch]
  );
  const memoValue = useMemo6(
    () => __spreadValues({
      hoveringComponent,
      setHoveringComponent,
      registerZoneArea,
      areasWithZones,
      registerZone,
      unregisterZone,
      activeZones
    }, value),
    [value, hoveringComponent, areasWithZones, activeZones]
  );
  return /* @__PURE__ */ jsx20(Fragment5, { children: memoValue && /* @__PURE__ */ jsx20(dropZoneContext.Provider, { value: memoValue, children }) });
};

// lib/use-context-store.ts
import { useContext as useContext4 } from "react";
import { useStore } from "zustand";
import { useShallow } from "zustand/react/shallow";
function useContextStore(context, selector) {
  const store = useContext4(context);
  if (!store) {
    throw new Error("useContextStore must be used inside context");
  }
  return useStore(store, useShallow(selector));
}

// components/DraggableComponent/index.tsx
import { jsx as jsx21, jsxs as jsxs9 } from "react/jsx-runtime";
var getClassName16 = get_class_name_factory_default("DraggableComponent", styles_module_default11);
var DEBUG2 = false;
var space = 8;
var actionsOverlayTop = space * 6.5;
var actionsTop = -(actionsOverlayTop - 8);
var actionsSide = space;
var DefaultActionBar = ({
  label,
  children,
  parentAction
}) => /* @__PURE__ */ jsxs9(ActionBar, { children: [
  /* @__PURE__ */ jsxs9(ActionBar.Group, { children: [
    parentAction,
    label && /* @__PURE__ */ jsx21(ActionBar.Label, { label })
  ] }),
  /* @__PURE__ */ jsx21(ActionBar.Group, { children })
] });
var convertIdToSelector = (id, zoneCompound, data) => {
  const content = zoneCompound && data.zones && zoneCompound !== "default-zone" ? data.zones[zoneCompound] : data.content;
  const index = content.findIndex((item) => item.props.id === id);
  return {
    zone: zoneCompound || "",
    index
  };
};
var DraggableComponent = ({
  children,
  depth,
  componentType,
  id,
  index,
  zoneCompound,
  isLoading = false,
  isSelected = false,
  debug,
  label,
  isEnabled,
  autoDragAxis,
  userDragAxis,
  inDroppableZone = true
}) => {
  const {
    zoomConfig,
    overrides,
    selectedItem,
    getPermissions,
    dispatch,
    iframe,
    state
  } = useAppContext();
  const ctx = useContext5(dropZoneContext);
  const [localZones, setLocalZones] = useState13({});
  const registerLocalZone = useCallback7(
    (zoneCompound2, active) => {
      var _a;
      (_a = ctx == null ? void 0 : ctx.registerLocalZone) == null ? void 0 : _a.call(ctx, zoneCompound2, active);
      setLocalZones((obj) => __spreadProps(__spreadValues({}, obj), {
        [zoneCompound2]: active
      }));
    },
    [setLocalZones]
  );
  const unregisterLocalZone = useCallback7(
    (zoneCompound2) => {
      var _a;
      (_a = ctx == null ? void 0 : ctx.unregisterLocalZone) == null ? void 0 : _a.call(ctx, zoneCompound2);
      setLocalZones((obj) => {
        const newLocalZones = __spreadValues({}, obj);
        delete newLocalZones[zoneCompound2];
        return newLocalZones;
      });
    },
    [setLocalZones]
  );
  const containsActiveZone = Object.values(localZones).filter(Boolean).length > 0;
  const { path = [] } = ctx || {};
  const [canDrag, setCanDrag] = useState13(false);
  useEffect10(() => {
    var _a;
    const item = getItem({ index, zone: zoneCompound }, state.data);
    if (item) {
      const perms = getPermissions({
        item
      });
      setCanDrag((_a = perms.drag) != null ? _a : true);
    }
  }, [state, index, zoneCompound, getPermissions]);
  const userIsDragging = useContextStore(
    ZoneStoreContext,
    (s) => !!s.draggedItem
  );
  const canCollide = canDrag || userIsDragging;
  const disabled = !isEnabled || !canCollide;
  const [dragAxis, setDragAxis] = useState13(userDragAxis || autoDragAxis);
  const { ref: sortableRef, status } = useSortableSafe({
    id,
    index,
    group: zoneCompound,
    type: "component",
    data: {
      areaId: ctx == null ? void 0 : ctx.areaId,
      zone: zoneCompound,
      index,
      componentType,
      containsActiveZone,
      depth,
      path,
      inDroppableZone
    },
    collisionPriority: isEnabled ? depth : 0,
    collisionDetector: createDynamicCollisionDetector(dragAxis),
    disabled,
    // "Out of the way" transition from react-beautiful-dnd
    transition: {
      duration: 200,
      easing: "cubic-bezier(0.2, 0, 0, 1)"
    }
  });
  const thisIsDragging = status === "dragging";
  const ref = useRef(null);
  const refSetter = useCallback7(
    (el) => {
      sortableRef(el);
      if (el) {
        ref.current = el;
      }
    },
    [sortableRef]
  );
  const [portalEl, setPortalEl] = useState13();
  useEffect10(() => {
    var _a, _b, _c;
    setPortalEl(
      iframe.enabled ? (_a = ref.current) == null ? void 0 : _a.ownerDocument.body : (_c = (_b = ref.current) == null ? void 0 : _b.closest("[data-puck-preview]")) != null ? _c : document.body
    );
  }, [iframe.enabled, ref.current]);
  const getStyle = useCallback7(() => {
    var _a, _b, _c;
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const deepScrollPosition = getDeepScrollPosition(ref.current);
    const portalContainerEl = iframe.enabled ? null : (_a = ref.current) == null ? void 0 : _a.closest("[data-puck-preview]");
    const portalContainerRect = portalContainerEl == null ? void 0 : portalContainerEl.getBoundingClientRect();
    const portalScroll = portalContainerEl ? getDeepScrollPosition(portalContainerEl) : { x: 0, y: 0 };
    const scroll = {
      x: deepScrollPosition.x - portalScroll.x - ((_b = portalContainerRect == null ? void 0 : portalContainerRect.left) != null ? _b : 0),
      y: deepScrollPosition.y - portalScroll.y - ((_c = portalContainerRect == null ? void 0 : portalContainerRect.top) != null ? _c : 0)
    };
    const style2 = {
      left: `${rect.left + scroll.x}px`,
      top: `${rect.top + scroll.y}px`,
      height: `${rect.height}px`,
      width: `${rect.width}px`
    };
    return style2;
  }, [ref.current]);
  const [style, setStyle] = useState13();
  const sync = useCallback7(() => {
    setStyle(getStyle());
  }, [ref.current, iframe]);
  useEffect10(() => {
    if (ref.current) {
      const observer = new ResizeObserver(sync);
      observer.observe(ref.current);
      return () => {
        observer.disconnect();
      };
    }
  }, [ref.current]);
  useEffect10(() => {
    ctx == null ? void 0 : ctx.registerPath(
      id,
      {
        index,
        zone: zoneCompound
      },
      componentType
    );
    return () => {
      var _a;
      (_a = ctx == null ? void 0 : ctx.unregisterPath) == null ? void 0 : _a.call(ctx, id);
    };
  }, [id, zoneCompound, index, componentType]);
  const CustomActionBar = useMemo7(
    () => overrides.actionBar || DefaultActionBar,
    [overrides.actionBar]
  );
  const permissions = getPermissions({
    item: selectedItem
  });
  const onClick = useCallback7(
    (e) => {
      e.stopPropagation();
      dispatch({
        type: "setUi",
        ui: {
          itemSelector: { index, zone: zoneCompound }
        }
      });
    },
    [index, zoneCompound, id]
  );
  const onSelectParent = useCallback7(() => {
    if (!(ctx == null ? void 0 : ctx.areaId)) {
      return;
    }
    const parentAreaId = ctx.areaId;
    const parentZone = path[path.length - 3];
    const parentItemSelector = convertIdToSelector(
      parentAreaId,
      parentZone,
      state.data
    );
    dispatch({
      type: "setUi",
      ui: {
        itemSelector: parentItemSelector
      }
    });
  }, [ctx, path]);
  const onDuplicate = useCallback7(() => {
    dispatch({
      type: "duplicate",
      sourceIndex: index,
      sourceZone: zoneCompound
    });
  }, [index, zoneCompound]);
  const onDelete = useCallback7(() => {
    dispatch({
      type: "remove",
      index,
      zone: zoneCompound
    });
  }, [index, zoneCompound]);
  const [hover, setHover] = useState13(false);
  const indicativeHover = (ctx == null ? void 0 : ctx.hoveringComponent) === id;
  useEffect10(() => {
    if (!ref.current) {
      return;
    }
    const el = ref.current;
    const _onMouseOver = (e) => {
      if (userIsDragging) {
        if (thisIsDragging) {
          setHover(true);
        } else {
          setHover(false);
        }
      } else {
        setHover(true);
      }
      e.stopPropagation();
    };
    const _onMouseOut = (e) => {
      e.stopPropagation();
      setHover(false);
    };
    el.setAttribute("data-puck-component", id);
    el.setAttribute("data-puck-dnd", id);
    el.style.position = "relative";
    el.addEventListener("click", onClick);
    el.addEventListener("mouseover", _onMouseOver);
    el.addEventListener("mouseout", _onMouseOut);
    if (thisIsDragging) {
      el.setAttribute("data-puck-dragging", "");
    } else {
      el.removeAttribute("data-puck-dragging");
    }
    return () => {
      el.removeAttribute("data-puck-component");
      el.removeAttribute("data-puck-dnd");
      el.removeEventListener("click", onClick);
      el.removeEventListener("mouseover", _onMouseOver);
      el.removeEventListener("mouseout", _onMouseOut);
      el.removeAttribute("data-puck-dragging");
    };
  }, [
    ref,
    onClick,
    containsActiveZone,
    zoneCompound,
    id,
    userIsDragging,
    thisIsDragging,
    inDroppableZone
  ]);
  useEffect10(() => {
    if (ref.current && disabled) {
      ref.current.setAttribute("data-puck-disabled", "");
      return () => {
        var _a;
        (_a = ref.current) == null ? void 0 : _a.removeAttribute("data-puck-disabled");
      };
    }
  }, [disabled, ref]);
  const [isVisible, setIsVisible] = useState13(false);
  useEffect10(() => {
    sync();
    if ((isSelected || hover || indicativeHover) && !userIsDragging) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [isSelected, hover, indicativeHover, iframe, state.data, userIsDragging]);
  const syncActionsPosition = useCallback7(
    (el) => {
      if (el) {
        const view = el.ownerDocument.defaultView;
        if (view) {
          const rect = el.getBoundingClientRect();
          const diffLeft = rect.x;
          const exceedsBoundsLeft = diffLeft < 0;
          if (exceedsBoundsLeft) {
            el.style.transformOrigin = "left top";
            el.style.left = "0px";
          }
        }
      }
    },
    [zoomConfig]
  );
  useEffect10(() => {
    if (userDragAxis) {
      setDragAxis(userDragAxis);
      return;
    }
    if (ref.current) {
      const computedStyle = window.getComputedStyle(ref.current);
      if (computedStyle.display === "inline" || computedStyle.display === "inline-block") {
        setDragAxis("x");
        return;
      }
    }
    setDragAxis(autoDragAxis);
  }, [ref, userDragAxis, autoDragAxis]);
  const parentAction = (ctx == null ? void 0 : ctx.areaId) && (ctx == null ? void 0 : ctx.areaId) !== "root" && /* @__PURE__ */ jsx21(ActionBar.Action, { onClick: onSelectParent, label: "Select parent", children: /* @__PURE__ */ jsx21(CornerLeftUp, { size: 16 }) });
  return /* @__PURE__ */ jsxs9(
    DropZoneProvider,
    {
      value: __spreadProps(__spreadValues({}, ctx), {
        areaId: id,
        zoneCompound,
        index,
        depth: depth + 1,
        registerLocalZone,
        unregisterLocalZone,
        path: [...path, id]
      }),
      children: [
        isVisible && createPortal2(
          /* @__PURE__ */ jsxs9(
            "div",
            {
              className: getClassName16({
                isSelected,
                isDragging: thisIsDragging,
                hover: hover || indicativeHover
              }),
              style: __spreadValues({}, style),
              "data-puck-overlay": true,
              children: [
                debug,
                isLoading && /* @__PURE__ */ jsx21("div", { className: getClassName16("loadingOverlay"), children: /* @__PURE__ */ jsx21(Loader, {}) }),
                /* @__PURE__ */ jsx21(
                  "div",
                  {
                    className: getClassName16("actionsOverlay"),
                    style: {
                      top: actionsOverlayTop / zoomConfig.zoom
                    },
                    children: /* @__PURE__ */ jsx21(
                      "div",
                      {
                        className: getClassName16("actions"),
                        style: {
                          transform: `scale(${1 / zoomConfig.zoom}`,
                          top: actionsTop / zoomConfig.zoom,
                          right: 0,
                          paddingLeft: actionsSide,
                          paddingRight: actionsSide
                        },
                        ref: syncActionsPosition,
                        children: /* @__PURE__ */ jsxs9(
                          CustomActionBar,
                          {
                            parentAction,
                            label: DEBUG2 ? id : label,
                            children: [
                              permissions.duplicate && /* @__PURE__ */ jsx21(ActionBar.Action, { onClick: onDuplicate, label: "Kopyala", children: /* @__PURE__ */ jsx21(Copy, { size: 16 }) }),
                              permissions.delete && /* @__PURE__ */ jsx21(ActionBar.Action, { onClick: onDelete, label: "Sil", children: /* @__PURE__ */ jsx21(Trash, { size: 16 }) })
                            ]
                          }
                        )
                      }
                    )
                  }
                ),
                /* @__PURE__ */ jsx21("div", { className: getClassName16("overlay") })
              ]
            }
          ),
          portalEl || document.body
        ),
        children(refSetter)
      ]
    }
  );
};

// css-module:/home/dev/Masaüstü/projeler/punk-turkish/components/DropZone/styles.module.css#css-module
var styles_module_default12 = { "DropZone": "_DropZone_kmkdc_1", "DropZone--isActive": "_DropZone--isActive_kmkdc_10", "DropZone--hasChildren": "_DropZone--hasChildren_kmkdc_14", "DropZone--userIsDragging": "_DropZone--userIsDragging_kmkdc_22", "DropZone--isAreaSelected": "_DropZone--isAreaSelected_kmkdc_26", "DropZone--hoveringOverArea": "_DropZone--hoveringOverArea_kmkdc_27", "DropZone--isRootZone": "_DropZone--isRootZone_kmkdc_27", "DropZone--isDestination": "_DropZone--isDestination_kmkdc_37", "DropZone-item": "_DropZone-item_kmkdc_49", "DropZone-hitbox": "_DropZone-hitbox_kmkdc_53", "DropZone--isEnabled": "_DropZone--isEnabled_kmkdc_61", "DropZone--isAnimating": "_DropZone--isAnimating_kmkdc_70" };

// components/DropZone/lib/use-min-empty-height.ts
import { useEffect as useEffect11, useState as useState14 } from "react";
var useMinEmptyHeight = ({
  zoneCompound,
  userMinEmptyHeight,
  ref
}) => {
  const [prevHeight, setPrevHeight] = useState14(0);
  const [isAnimating, setIsAnimating] = useState14(false);
  const { draggedItem, isZone } = useContextStore(ZoneStoreContext, (s) => {
    var _a, _b;
    return {
      draggedItem: ((_a = s.draggedItem) == null ? void 0 : _a.data.zone) === zoneCompound ? s.draggedItem : null,
      isZone: ((_b = s.draggedItem) == null ? void 0 : _b.data.zone) === zoneCompound
    };
  });
  useEffect11(() => {
    if (draggedItem && ref.current) {
      if (isZone) {
        const rect = ref.current.getBoundingClientRect();
        setPrevHeight(rect.height);
        setIsAnimating(true);
        return;
      }
    }
    setPrevHeight(0);
    setTimeout(() => {
      setIsAnimating(false);
    }, 400);
  }, [ref.current, draggedItem, zoneCompound]);
  return [prevHeight || userMinEmptyHeight, isAnimating];
};

// lib/assign-refs.ts
function assignRef(ref, node) {
  if (typeof ref === "function") {
    ref(node);
  } else if (ref && typeof ref === "object" && "current" in ref) {
    ref.current = node;
  }
}
function assignRefs(refs, node) {
  refs.forEach((ref) => {
    assignRef(ref, node);
  });
}

// components/DropZone/lib/use-content-with-preview.ts
import { useEffect as useEffect12, useState as useState15 } from "react";

// lib/dnd/use-rendered-callback.ts
import { useDragDropManager } from "@dnd-kit/react";
import { useCallback as useCallback8 } from "react";
function useRenderedCallback(callback, deps) {
  const manager = useDragDropManager();
  return useCallback8(
    (...args) => __async(this, null, function* () {
      yield manager == null ? void 0 : manager.renderer.rendering;
      return callback(...args);
    }),
    [...deps, manager]
  );
}

// lib/insert.ts
var insert = (list, index, item) => {
  const result = Array.from(list);
  result.splice(index, 0, item);
  return result;
};

// components/DropZone/lib/use-content-with-preview.ts
var useContentWithPreview = (content, zoneCompound) => {
  const { draggedItemId, preview, previewExists } = useContextStore(
    ZoneStoreContext,
    (s) => {
      var _a;
      return {
        draggedItemId: (_a = s.draggedItem) == null ? void 0 : _a.id,
        preview: s.previewIndex[zoneCompound],
        previewExists: Object.keys(s.previewIndex || {}).length > 0
      };
    }
  );
  const {
    state: {
      ui: { isDragging }
    }
  } = useAppContext();
  const [contentWithPreview, setContentWithPreview] = useState15(content);
  const [localPreview, setLocalPreview] = useState15(
    preview
  );
  const updateContent = useRenderedCallback(
    (content2, preview2, isDragging2) => {
      if (isDragging2 && !previewExists) {
        return;
      }
      if (preview2) {
        if (preview2.type === "insert") {
          setContentWithPreview(
            insert(
              content2.filter((item) => item.props.id !== preview2.props.id),
              preview2.index,
              {
                type: "preview",
                props: { id: preview2.props.id }
              }
            )
          );
        } else {
          setContentWithPreview(
            insert(
              content2.filter((item) => item.props.id !== preview2.props.id),
              preview2.index,
              {
                type: preview2.componentType,
                props: preview2.props
              }
            )
          );
        }
      } else {
        setContentWithPreview(
          previewExists ? content2.filter((item) => item.props.id !== draggedItemId) : content2
        );
      }
      setLocalPreview(preview2);
    },
    [draggedItemId, previewExists]
  );
  useEffect12(() => {
    updateContent(content, preview, isDragging);
  }, [content, preview, isDragging]);
  return [contentWithPreview, localPreview];
};

// components/DropZone/lib/use-drag-axis.ts
import { useCallback as useCallback9, useEffect as useEffect13, useState as useState16 } from "react";
var GRID_DRAG_AXIS = "dynamic";
var FLEX_ROW_DRAG_AXIS = "x";
var DEFAULT_DRAG_AXIS = "y";
var useDragAxis = (ref, collisionAxis) => {
  const { status } = useAppContext();
  const [dragAxis, setDragAxis] = useState16(
    collisionAxis || DEFAULT_DRAG_AXIS
  );
  const calculateDragAxis = useCallback9(() => {
    if (ref.current) {
      const computedStyle = window.getComputedStyle(ref.current);
      if (computedStyle.display === "grid") {
        setDragAxis(GRID_DRAG_AXIS);
      } else if (computedStyle.display === "flex" && computedStyle.flexDirection === "row") {
        setDragAxis(FLEX_ROW_DRAG_AXIS);
      } else {
        setDragAxis(DEFAULT_DRAG_AXIS);
      }
    }
  }, [ref.current]);
  useEffect13(() => {
    const onViewportChange = () => {
      calculateDragAxis();
    };
    window.addEventListener("viewportchange", onViewportChange);
    return () => {
      window.removeEventListener("viewportchange", onViewportChange);
    };
  }, []);
  useEffect13(calculateDragAxis, [status, collisionAxis]);
  return [dragAxis, calculateDragAxis];
};

// components/DropZone/index.tsx
import { Fragment as Fragment6, jsx as jsx22, jsxs as jsxs10 } from "react/jsx-runtime";
var getClassName17 = get_class_name_factory_default("DropZone", styles_module_default12);
var getRandomColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
var RENDER_DEBUG = false;
var DropZoneEditPure = (props) => /* @__PURE__ */ jsx22(DropZoneEdit, __spreadValues({}, props));
var DropZoneEdit = forwardRef3(
  function DropZoneEditInternal({
    zone,
    allow,
    disallow,
    style,
    className,
    minEmptyHeight: userMinEmptyHeight = 128,
    collisionAxis
  }, userRef) {
    const appContext2 = useAppContext();
    const ctx = useContext6(dropZoneContext);
    const {
      // These all need setting via context
      data,
      config,
      areaId,
      registerZoneArea,
      depth,
      registerLocalZone,
      unregisterLocalZone,
      path = [],
      activeZones
    } = ctx;
    let zoneCompound = rootDroppableId;
    if (areaId) {
      if (zone !== rootDroppableId) {
        zoneCompound = `${areaId}:${zone}`;
      }
    }
    const isRootZone = zoneCompound === rootDroppableId || zone === rootDroppableId || areaId === "root";
    const {
      isDeepestZone,
      inNextDeepestArea,
      draggedComponentType,
      userIsDragging
    } = useContextStore(ZoneStoreContext, (s) => {
      var _a, _b, _c;
      return {
        isDeepestZone: (_a = s.zoneDepthIndex[zoneCompound]) != null ? _a : false,
        inNextDeepestArea: s.nextAreaDepthIndex[areaId || ""],
        draggedItemId: (_b = s.draggedItem) == null ? void 0 : _b.id,
        draggedComponentType: (_c = s.draggedItem) == null ? void 0 : _c.data.componentType,
        userIsDragging: !!s.draggedItem
      };
    });
    const { itemSelector } = appContext2.state.ui;
    useEffect14(() => {
      if (areaId && registerZoneArea) {
        registerZoneArea(areaId);
      }
    }, [areaId]);
    useEffect14(() => {
      if (ctx == null ? void 0 : ctx.registerZone) {
        ctx == null ? void 0 : ctx.registerZone(zoneCompound);
      }
      return () => {
        if (ctx == null ? void 0 : ctx.unregisterZone) {
          ctx == null ? void 0 : ctx.unregisterZone(zoneCompound);
        }
      };
    }, []);
    const content = useMemo8(() => {
      if (areaId && zone !== rootDroppableId) {
        return setupZone(data, zoneCompound).zones[zoneCompound];
      }
      return data.content || [];
    }, [data, zoneCompound]);
    const ref = useRef2(null);
    const acceptsTarget = useCallback10(
      (componentType) => {
        if (!componentType) {
          return true;
        }
        if (disallow) {
          const defaultedAllow = allow || [];
          const filteredDisallow = (disallow || []).filter(
            (item) => defaultedAllow.indexOf(item) === -1
          );
          if (filteredDisallow.indexOf(componentType) !== -1) {
            return false;
          }
        } else if (allow) {
          if (allow.indexOf(componentType) === -1) {
            return false;
          }
        }
        return true;
      },
      [allow, disallow]
    );
    useEffect14(() => {
      if (registerLocalZone) {
        registerLocalZone(zoneCompound, acceptsTarget(draggedComponentType));
      }
      return () => {
        if (unregisterLocalZone) {
          unregisterLocalZone(zoneCompound);
        }
      };
    }, [draggedComponentType, zoneCompound]);
    const hoveringOverArea = inNextDeepestArea || isRootZone;
    let isEnabled = true;
    if (userIsDragging) {
      isEnabled = isDeepestZone;
    }
    if (isEnabled) {
      isEnabled = acceptsTarget(draggedComponentType);
    }
    const [contentWithPreview, preview] = useContentWithPreview(
      content,
      zoneCompound
    );
    const isDropEnabled = isEnabled && (preview ? contentWithPreview.length === 1 : contentWithPreview.length === 0);
    const droppableConfig = {
      id: zoneCompound,
      collisionPriority: isEnabled ? depth : 0,
      disabled: !isDropEnabled,
      collisionDetector: pointerIntersection,
      type: "dropzone",
      data: {
        areaId,
        depth,
        isDroppableTarget: acceptsTarget(draggedComponentType),
        path
      }
    };
    const { ref: dropRef } = useDroppableSafe(droppableConfig);
    const selectedItem = itemSelector ? getItem(itemSelector, data) : null;
    const isAreaSelected = selectedItem && areaId === selectedItem.props.id;
    const [dragAxis] = useDragAxis(ref, collisionAxis);
    const [minEmptyHeight, isAnimating] = useMinEmptyHeight({
      zoneCompound,
      userMinEmptyHeight,
      ref
    });
    return /* @__PURE__ */ jsx22(
      "div",
      {
        className: `${getClassName17({
          isRootZone,
          userIsDragging,
          hoveringOverArea,
          isEnabled,
          isAreaSelected,
          hasChildren: content.length > 0,
          isActive: activeZones == null ? void 0 : activeZones[zoneCompound],
          isAnimating
        })}${className ? ` ${className}` : ""}`,
        ref: (node) => {
          assignRefs([ref, dropRef, userRef], node);
        },
        "data-testid": `dropzone:${zoneCompound}`,
        "data-puck-dropzone": zoneCompound,
        style: __spreadProps(__spreadValues({}, style), {
          "--min-empty-height": `${minEmptyHeight}px`,
          backgroundColor: RENDER_DEBUG ? getRandomColor() : style == null ? void 0 : style.backgroundColor
        }),
        children: contentWithPreview.map((item, i) => {
          var _a, _b, _c, _d, _e, _f, _g;
          const componentId = item.props.id;
          const puckProps = {
            renderDropZone: DropZoneEditPure,
            isEditing: true,
            dragRef: null
          };
          const defaultedProps = __spreadProps(__spreadValues(__spreadValues({}, (_a = config.components[item.type]) == null ? void 0 : _a.defaultProps), item.props), {
            puck: puckProps,
            editMode: true
            // DEPRECATED
          });
          const isSelected = (selectedItem == null ? void 0 : selectedItem.props.id) === componentId || false;
          let Render2 = config.components[item.type] && item.type !== "preview" ? config.components[item.type].render : () => /* @__PURE__ */ jsxs10("div", { style: { padding: 48, textAlign: "center" }, children: [
            "No configuration for ",
            item.type
          ] });
          const componentConfig = config.components[item.type];
          let componentType = item.type;
          let label = (_b = componentConfig == null ? void 0 : componentConfig["label"]) != null ? _b : item.type.toString();
          if (item.type === "preview") {
            let Preview4 = function() {
              return /* @__PURE__ */ jsx22(DrawerItemInner, { name: label, children: appContext2.overrides.componentItem });
            };
            var Preview3 = Preview4;
            componentType = (_c = preview == null ? void 0 : preview.componentType) != null ? _c : "__preview";
            label = (_f = (_e = (_d = config.components[componentType]) == null ? void 0 : _d.label) != null ? _e : componentType) != null ? _f : "Preview";
            Render2 = Preview4;
          }
          return /* @__PURE__ */ jsx22(
            DropZoneProvider,
            {
              value: __spreadProps(__spreadValues({}, ctx), { path: [...path, zoneCompound] }),
              children: /* @__PURE__ */ jsx22(
                DraggableComponent,
                {
                  id: componentId,
                  componentType,
                  zoneCompound,
                  depth: depth + 1,
                  index: i,
                  isLoading: ((_g = appContext2.componentState[componentId]) == null ? void 0 : _g.loadingCount) > 0,
                  isSelected,
                  label,
                  isEnabled,
                  autoDragAxis: dragAxis,
                  userDragAxis: collisionAxis,
                  inDroppableZone: acceptsTarget(draggedComponentType),
                  children: (dragRef) => (componentConfig == null ? void 0 : componentConfig.inline) ? /* @__PURE__ */ jsx22(
                    Render2,
                    __spreadProps(__spreadValues({}, defaultedProps), {
                      puck: __spreadProps(__spreadValues({}, defaultedProps.puck), {
                        dragRef
                      })
                    })
                  ) : /* @__PURE__ */ jsx22("div", { ref: dragRef, children: /* @__PURE__ */ jsx22(Render2, __spreadValues({}, defaultedProps)) })
                }
              )
            },
            componentId
          );
        })
      }
    );
  }
);
var DropZoneRenderPure = (props) => /* @__PURE__ */ jsx22(DropZoneRender, __spreadValues({}, props));
var DropZoneRender = forwardRef3(
  function DropZoneRenderInternal({ className, style, zone }, ref) {
    const ctx = useContext6(dropZoneContext);
    const { data, areaId = "root", config } = ctx || {};
    let zoneCompound = rootDroppableId;
    let content = (data == null ? void 0 : data.content) || [];
    useEffect14(() => {
      if (ctx == null ? void 0 : ctx.registerZone) {
        ctx == null ? void 0 : ctx.registerZone(zoneCompound);
      }
      return () => {
        if (ctx == null ? void 0 : ctx.unregisterZone) {
          ctx == null ? void 0 : ctx.unregisterZone(zoneCompound);
        }
      };
    }, []);
    if (!data || !config) {
      return null;
    }
    if (areaId && zone && zone !== rootDroppableId) {
      zoneCompound = `${areaId}:${zone}`;
      content = setupZone(data, zoneCompound).zones[zoneCompound];
    }
    return /* @__PURE__ */ jsx22("div", { className, style, ref, children: content.map((item) => {
      const Component = config.components[item.type];
      if (Component) {
        return /* @__PURE__ */ jsx22(
          DropZoneProvider,
          {
            value: {
              data,
              config,
              areaId: item.props.id,
              depth: 1,
              path: []
            },
            children: /* @__PURE__ */ jsx22(
              Component.render,
              __spreadProps(__spreadValues({}, item.props), {
                puck: {
                  renderDropZone: DropZoneRenderPure
                }
              })
            )
          },
          item.props.id
        );
      }
      return null;
    }) });
  }
);
var DropZone = forwardRef3(
  function DropZone2(props, ref) {
    const ctx = useContext6(dropZoneContext);
    if ((ctx == null ? void 0 : ctx.mode) === "edit") {
      return /* @__PURE__ */ jsx22(Fragment6, { children: /* @__PURE__ */ jsx22(DropZoneEdit, __spreadProps(__spreadValues({}, props), { ref })) });
    }
    return /* @__PURE__ */ jsx22(Fragment6, { children: /* @__PURE__ */ jsx22(DropZoneRender, __spreadProps(__spreadValues({}, props), { ref })) });
  }
);

// lib/get-zone-id.ts
var getZoneId = (zoneCompound) => {
  if (!zoneCompound) {
    return [];
  }
  if (zoneCompound && zoneCompound.indexOf(":") > -1) {
    return zoneCompound.split(":");
  }
  return [rootDroppableId, zoneCompound];
};

// lib/dnd/NestedDroppablePlugin.ts
import { Plugin } from "@dnd-kit/abstract";
import { effects } from "@dnd-kit/state";

// lib/throttle.ts
function timeout2(callback, duration) {
  const id = setTimeout(callback, duration);
  return () => clearTimeout(id);
}
function throttle(func, limit) {
  const time = () => performance.now();
  let cancel;
  let lastRan = 0;
  return function(...args) {
    const now = time();
    const context = this;
    if (now - lastRan >= limit) {
      func.apply(context, args);
      lastRan = now;
    } else {
      cancel == null ? void 0 : cancel();
      cancel = timeout2(() => {
        func.apply(context, args);
        lastRan = time();
      }, limit - (now - lastRan));
    }
  };
}

// lib/get-frame.ts
var getFrame = () => {
  if (typeof window === "undefined") return;
  let frameEl = document.querySelector("#preview-frame");
  if ((frameEl == null ? void 0 : frameEl.tagName) === "IFRAME") {
    return frameEl.contentDocument || document;
  }
  return (frameEl == null ? void 0 : frameEl.ownerDocument) || document;
};

// lib/global-position.ts
var GlobalPosition = class {
  constructor(target, original) {
    this.scaleFactor = 1;
    this.frameEl = null;
    this.frameRect = null;
    var _a;
    this.target = target;
    this.original = original;
    this.frameEl = document.querySelector("iframe");
    if (this.frameEl) {
      this.frameRect = this.frameEl.getBoundingClientRect();
      this.scaleFactor = this.frameRect.width / (((_a = this.frameEl.contentWindow) == null ? void 0 : _a.innerWidth) || 1);
    }
  }
  get x() {
    return this.original.x;
  }
  get y() {
    return this.original.y;
  }
  get global() {
    if (document !== this.target.ownerDocument && this.frameRect) {
      return {
        x: this.x * this.scaleFactor + this.frameRect.left,
        y: this.y * this.scaleFactor + this.frameRect.top
      };
    }
    return this.original;
  }
  get frame() {
    if (document === this.target.ownerDocument && this.frameRect) {
      return {
        x: (this.x - this.frameRect.left) / this.scaleFactor,
        y: (this.y - this.frameRect.top) / this.scaleFactor
      };
    }
    return this.original;
  }
};

// lib/dnd/NestedDroppablePlugin.ts
var depthSort = (candidates) => {
  return candidates.sort((a, b) => {
    const aData = a.data;
    const bData = b.data;
    if (aData.depth > bData.depth) {
      return 1;
    }
    if (bData.depth > aData.depth) {
      return -1;
    }
    return 0;
  });
};
var getZoneId2 = (candidate) => {
  let id = candidate == null ? void 0 : candidate.id;
  if (!candidate) return null;
  if (candidate.type === "component") {
    const data = candidate.data;
    if (data.containsActiveZone) {
      id = null;
    } else {
      id = data.zone;
    }
  } else if (candidate.type === "void") {
    return "void";
  }
  return id;
};
var getPointerCollisions = (position, manager) => {
  const candidates = [];
  let elements = position.target.ownerDocument.elementsFromPoint(
    position.x,
    position.y
  );
  const previewFrame = elements.find(
    (el) => el.getAttribute("data-puck-preview")
  );
  const drawer = elements.find((el) => el.getAttribute("data-puck-drawer"));
  if (drawer) {
    elements = [drawer];
  }
  if (previewFrame) {
    const frame = getFrame();
    if (frame) {
      elements = frame.elementsFromPoint(position.frame.x, position.frame.y);
    }
  }
  if (elements) {
    for (let i = 0; i < elements.length; i++) {
      const element = elements[i];
      const dropzoneId = element.getAttribute("data-puck-dropzone");
      if (dropzoneId) {
        const droppable = manager.registry.droppables.get(dropzoneId);
        if (droppable) {
          candidates.push(droppable);
        }
      }
      const id = element.getAttribute("data-puck-dnd");
      if (id) {
        const droppable = manager.registry.droppables.get(id);
        if (droppable) {
          candidates.push(droppable);
        }
      }
    }
  }
  return candidates;
};
var findDeepestCandidate = (position, manager) => {
  var _a;
  const candidates = getPointerCollisions(position, manager);
  if (candidates.length > 0) {
    const sortedCandidates = depthSort(candidates);
    const draggable = manager.dragOperation.source;
    const draggedCandidateIndex = sortedCandidates.findIndex(
      (candidate) => candidate.id === (draggable == null ? void 0 : draggable.id)
    );
    const draggedCandidateId = draggable == null ? void 0 : draggable.id;
    let filteredCandidates = [...sortedCandidates];
    if (draggedCandidateId && draggedCandidateIndex > -1) {
      filteredCandidates.splice(draggedCandidateIndex, 1);
    }
    filteredCandidates = filteredCandidates.filter((candidate) => {
      const candidateData = candidate.data;
      if (draggedCandidateId && draggedCandidateIndex > -1) {
        if (candidateData.path.indexOf(draggedCandidateId) > -1) {
          return false;
        }
      }
      if (candidate.type === "dropzone") {
        const candidateData2 = candidate.data;
        if (!candidateData2.isDroppableTarget) {
          return false;
        }
        if (candidateData2.areaId === draggedCandidateId) {
          return false;
        }
      } else if (candidate.type === "component") {
        const candidateData2 = candidate.data;
        if (!candidateData2.inDroppableZone) {
          return false;
        }
      }
      return true;
    });
    filteredCandidates.reverse();
    const zone = getZoneId2(filteredCandidates[0]);
    const area = (_a = filteredCandidates[0]) == null ? void 0 : _a.data.areaId;
    return { zone, area };
  }
  return {
    zone: "default-zone",
    area: null
  };
};
var createNestedDroppablePlugin = ({ onChange }, id) => class NestedDroppablePlugin extends Plugin {
  constructor(manager, options) {
    super(manager);
    if (typeof window === "undefined") {
      return;
    }
    const cleanupEffect = effects(() => {
      const handleMove = (event) => {
        const target = event.originalTarget || event.target;
        const position = new GlobalPosition(target, {
          x: event.clientX,
          y: event.clientY
        });
        const elements = document.elementsFromPoint(
          position.global.x,
          position.global.y
        );
        const overEl = elements.some((el) => el.id === id);
        if (overEl) {
          onChange(findDeepestCandidate(position, manager), manager);
        }
      };
      const handleMoveThrottled = throttle(handleMove, 50);
      const handlePointerMove = (event) => {
        handleMoveThrottled(event);
      };
      document.body.addEventListener("pointermove", handlePointerMove, {
        capture: true
        // dndkit's PointerSensor prevents propagation during drag
      });
      this.destroy = () => {
        document.body.removeEventListener("pointermove", handlePointerMove, {
          capture: true
        });
        cleanupEffect();
      };
    });
  }
};

// lib/remove.ts
var remove = (list, index) => {
  const result = Array.from(list);
  result.splice(index, 1);
  return result;
};

// lib/reduce-related-zones.ts
function reduceRelatedZones(item, data, fn) {
  return __spreadProps(__spreadValues({}, data), {
    zones: Object.keys(data.zones || {}).reduce(
      (acc, key) => {
        const [parentId] = getZoneId(key);
        if (parentId === item.props.id) {
          const zones = data.zones;
          return fn(acc, key, zones[key]);
        }
        return __spreadProps(__spreadValues({}, acc), { [key]: data.zones[key] });
      },
      {}
    )
  });
}
var findRelatedByZoneId = (zoneId, data) => {
  const [zoneParentId] = getZoneId(zoneId);
  return (data.zones[zoneId] || []).reduce(
    (acc, zoneItem) => {
      const related = findRelatedByItem(zoneItem, data);
      if (zoneItem.props.id === zoneParentId) {
        return __spreadProps(__spreadValues(__spreadValues({}, acc), related), { [zoneId]: zoneItem });
      }
      return __spreadValues(__spreadValues({}, acc), related);
    },
    {}
  );
};
var findRelatedByItem = (item, data) => {
  return Object.keys(data.zones || {}).reduce(
    (acc, zoneId) => {
      const [zoneParentId] = getZoneId(zoneId);
      if (item.props.id === zoneParentId) {
        const related = findRelatedByZoneId(zoneId, data);
        return __spreadProps(__spreadValues(__spreadValues({}, acc), related), {
          [zoneId]: data.zones[zoneId]
        });
      }
      return acc;
    },
    {}
  );
};
var removeRelatedZones = (item, data) => {
  const newData = __spreadValues({}, data);
  const related = findRelatedByItem(item, data);
  Object.keys(related).forEach((key) => {
    delete newData.zones[key];
  });
  return newData;
};
function duplicateRelatedZones(item, data, newId) {
  return reduceRelatedZones(item, data, (acc, key, zone) => {
    const dupedZone = zone.map((zoneItem) => __spreadProps(__spreadValues({}, zoneItem), {
      props: __spreadProps(__spreadValues({}, zoneItem.props), { id: generateId(zoneItem.type) })
    }));
    const dupeOfDupes = dupedZone.reduce(
      (dupeOfDupes2, item2, index) => __spreadValues(__spreadValues({}, dupeOfDupes2), duplicateRelatedZones(zone[index], data, item2.props.id).zones),
      acc
    );
    const [_, zoneId] = getZoneId(key);
    return __spreadProps(__spreadValues({}, dupeOfDupes), {
      [key]: zone,
      [`${newId}:${zoneId}`]: dupedZone
    });
  });
}

// reducer/data.ts
var zoneCache = {};
var addToZoneCache = (key, data) => {
  zoneCache[key] = data;
};
var replaceAction = (data, action) => {
  if (action.destinationZone === rootDroppableId) {
    return __spreadProps(__spreadValues({}, data), {
      content: replace(data.content, action.destinationIndex, action.data)
    });
  }
  const newData = setupZone(data, action.destinationZone);
  return __spreadProps(__spreadValues({}, newData), {
    zones: __spreadProps(__spreadValues({}, newData.zones), {
      [action.destinationZone]: replace(
        newData.zones[action.destinationZone],
        action.destinationIndex,
        action.data
      )
    })
  });
};
function insertAction(data, action, config) {
  const emptyComponentData = {
    type: action.componentType,
    props: __spreadProps(__spreadValues({}, config.components[action.componentType].defaultProps || {}), {
      id: action.id || generateId(action.componentType)
    })
  };
  if (action.destinationZone === rootDroppableId) {
    return __spreadProps(__spreadValues({}, data), {
      content: insert(
        data.content,
        action.destinationIndex,
        emptyComponentData
      )
    });
  }
  const newData = setupZone(data, action.destinationZone);
  return __spreadProps(__spreadValues({}, data), {
    zones: __spreadProps(__spreadValues({}, newData.zones), {
      [action.destinationZone]: insert(
        newData.zones[action.destinationZone],
        action.destinationIndex,
        emptyComponentData
      )
    })
  });
}
var reorderAction = (data, action) => {
  if (action.destinationZone === rootDroppableId) {
    return __spreadProps(__spreadValues({}, data), {
      content: reorder(
        data.content,
        action.sourceIndex,
        action.destinationIndex
      )
    });
  }
  const newData = setupZone(data, action.destinationZone);
  return __spreadProps(__spreadValues({}, data), {
    zones: __spreadProps(__spreadValues({}, newData.zones), {
      [action.destinationZone]: reorder(
        newData.zones[action.destinationZone],
        action.sourceIndex,
        action.destinationIndex
      )
    })
  });
};
function reduceData(data, action, config) {
  if (action.type === "insert") {
    return insertAction(data, action, config);
  }
  if (action.type === "duplicate") {
    const item = getItem(
      { index: action.sourceIndex, zone: action.sourceZone },
      data
    );
    const newItem = __spreadProps(__spreadValues({}, item), {
      props: __spreadProps(__spreadValues({}, item.props), {
        id: generateId(item.type)
      })
    });
    const dataWithRelatedDuplicated = duplicateRelatedZones(
      item,
      data,
      newItem.props.id
    );
    if (action.sourceZone === rootDroppableId) {
      return __spreadProps(__spreadValues({}, dataWithRelatedDuplicated), {
        content: insert(data.content, action.sourceIndex + 1, newItem)
      });
    }
    return __spreadProps(__spreadValues({}, dataWithRelatedDuplicated), {
      zones: __spreadProps(__spreadValues({}, dataWithRelatedDuplicated.zones), {
        [action.sourceZone]: insert(
          dataWithRelatedDuplicated.zones[action.sourceZone],
          action.sourceIndex + 1,
          newItem
        )
      })
    });
  }
  if (action.type === "reorder") {
    return reorderAction(data, action);
  }
  if (action.type === "move") {
    if (action.sourceZone === action.destinationZone && action.sourceIndex === action.destinationIndex) {
      return data;
    }
    const newData = setupZone(
      setupZone(data, action.sourceZone),
      action.destinationZone
    );
    const item = getItem(
      { zone: action.sourceZone, index: action.sourceIndex },
      newData
    );
    if (action.sourceZone === action.destinationZone) {
      return reorderAction(data, __spreadProps(__spreadValues({}, action), { type: "reorder" }));
    }
    if (action.sourceZone === rootDroppableId) {
      return __spreadProps(__spreadValues({}, newData), {
        content: remove(newData.content, action.sourceIndex),
        zones: __spreadProps(__spreadValues({}, newData.zones), {
          [action.destinationZone]: insert(
            newData.zones[action.destinationZone],
            action.destinationIndex,
            item
          )
        })
      });
    }
    if (action.destinationZone === rootDroppableId) {
      return __spreadProps(__spreadValues({}, newData), {
        content: insert(newData.content, action.destinationIndex, item),
        zones: __spreadProps(__spreadValues({}, newData.zones), {
          [action.sourceZone]: remove(
            newData.zones[action.sourceZone],
            action.sourceIndex
          )
        })
      });
    }
    return __spreadProps(__spreadValues({}, newData), {
      zones: __spreadProps(__spreadValues({}, newData.zones), {
        [action.sourceZone]: remove(
          newData.zones[action.sourceZone],
          action.sourceIndex
        ),
        [action.destinationZone]: insert(
          newData.zones[action.destinationZone],
          action.destinationIndex,
          item
        )
      })
    });
  }
  if (action.type === "replace") {
    return replaceAction(data, action);
  }
  if (action.type === "remove") {
    const item = getItem({ index: action.index, zone: action.zone }, data);
    const dataWithRelatedRemoved = setupZone(
      removeRelatedZones(item, data),
      action.zone
    );
    if (action.zone === rootDroppableId) {
      return __spreadProps(__spreadValues({}, dataWithRelatedRemoved), {
        content: remove(data.content, action.index)
      });
    }
    return __spreadProps(__spreadValues({}, dataWithRelatedRemoved), {
      zones: __spreadProps(__spreadValues({}, dataWithRelatedRemoved.zones), {
        [action.zone]: remove(
          dataWithRelatedRemoved.zones[action.zone],
          action.index
        )
      })
    });
  }
  if (action.type === "registerZone") {
    if (zoneCache[action.zone]) {
      return __spreadProps(__spreadValues({}, data), {
        zones: __spreadProps(__spreadValues({}, data.zones), {
          [action.zone]: zoneCache[action.zone]
        })
      });
    }
    return setupZone(data, action.zone);
  }
  if (action.type === "unregisterZone") {
    const _zones = __spreadValues({}, data.zones || {});
    if (_zones[action.zone]) {
      zoneCache[action.zone] = _zones[action.zone];
      delete _zones[action.zone];
    }
    return __spreadProps(__spreadValues({}, data), { zones: _zones });
  }
  if (action.type === "setData") {
    if (typeof action.data === "object") {
      return __spreadValues(__spreadValues({}, data), action.data);
    }
    return __spreadValues(__spreadValues({}, data), action.data(data));
  }
  return data;
}

// reducer/state.ts
var reduceUi = (ui, action) => {
  if (action.type === "setUi") {
    if (typeof action.ui === "object") {
      return __spreadValues(__spreadValues({}, ui), action.ui);
    }
    return __spreadValues(__spreadValues({}, ui), action.ui(ui));
  }
  if (action.type === "duplicate") {
    return __spreadProps(__spreadValues({}, ui), {
      itemSelector: { index: action.sourceIndex + 1, zone: action.sourceZone }
    });
  }
  if (action.type === "remove") {
    return __spreadProps(__spreadValues({}, ui), {
      itemSelector: null
    });
  }
  return ui;
};

// reducer/index.ts
function storeInterceptor(reducer, record, onAction) {
  return (state, action) => {
    const newAppState = reducer(state, action);
    const isValidType = ![
      "registerZone",
      "unregisterZone",
      "setData",
      "setUi",
      "set"
    ].includes(action.type);
    if (typeof action.recordHistory !== "undefined" ? action.recordHistory : isValidType) {
      if (record) record(newAppState);
    }
    onAction == null ? void 0 : onAction(action, newAppState, state);
    return newAppState;
  };
}
var setAction = (state, action) => {
  if (typeof action.state === "object") {
    return __spreadValues(__spreadValues({}, state), action.state);
  }
  return __spreadValues(__spreadValues({}, state), action.state(state));
};
function createReducer({
  config,
  record,
  onAction
}) {
  return storeInterceptor(
    (state, action) => {
      const data = reduceData(state.data, action, config);
      const ui = reduceUi(state.ui, action);
      if (action.type === "set") {
        return setAction(state, action);
      }
      return { data, ui };
    },
    record,
    onAction
  );
}

// lib/insert-component.ts
var insertComponent = (componentType, zone, index, {
  config,
  dispatch,
  resolveData,
  state
}) => {
  const id = generateId(componentType);
  const insertActionData = {
    type: "insert",
    componentType,
    destinationIndex: index,
    destinationZone: zone,
    id
  };
  const insertedData = insertAction(state.data, insertActionData, config);
  dispatch(__spreadProps(__spreadValues({}, insertActionData), {
    // Dispatch insert rather set, as user's may rely on this via onAction
    // We must always record history here so the insert is added to user history
    // If the user has defined a resolveData method, they will end up with 2 history
    // entries on insert - one for the initial insert, and one when the data resolves
    recordHistory: true
  }));
  const itemSelector = {
    index,
    zone
  };
  dispatch({ type: "setUi", ui: { itemSelector } });
  resolveData({
    data: insertedData,
    ui: __spreadProps(__spreadValues({}, state.ui), { itemSelector })
  });
};

// components/DragDropContext/index.tsx
import { useDebouncedCallback as useDebouncedCallback2 } from "use-debounce";
import { isElement as isElement2 } from "@dnd-kit/dom/utilities";

// lib/dnd/PointerSensor.ts
import { batch, effect } from "@dnd-kit/state";
import { Sensor, configurator } from "@dnd-kit/abstract";
import {
  exceedsDistance
} from "@dnd-kit/geometry";
import {
  getDocument,
  isElement,
  isHTMLElement,
  isPointerEvent,
  Listeners,
  getFrameTransform
} from "@dnd-kit/dom/utilities";
var _clearTimeout;
var _PointerSensor = class _PointerSensor extends Sensor {
  constructor(manager, options) {
    super(manager);
    this.manager = manager;
    this.options = options;
    this.listeners = new Listeners();
    this.cleanup = /* @__PURE__ */ new Set();
    this.source = void 0;
    __privateAdd(this, _clearTimeout);
    this.handleCancel = this.handleCancel.bind(this);
    this.handlePointerUp = this.handlePointerUp.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    effect(() => {
      const unbindGlobal = this.bindGlobal(options != null ? options : {});
      return () => {
        unbindGlobal();
      };
    });
  }
  bind(source, options = this.options) {
    const unbind = effect(() => {
      var _a;
      const target = (_a = source.handle) != null ? _a : source.element;
      const listener = (event) => {
        if (isPointerEvent(event)) {
          this.handlePointerDown(event, source, options);
        }
      };
      if (target) {
        patchWindow(target.ownerDocument.defaultView);
        target.addEventListener("pointerdown", listener);
        return () => {
          target.removeEventListener("pointerdown", listener);
        };
      }
    });
    return unbind;
  }
  bindGlobal(options) {
    const documents = /* @__PURE__ */ new Set();
    for (const draggable of this.manager.registry.draggables.value) {
      if (draggable.element) {
        documents.add(getDocument(draggable.element));
      }
    }
    for (const droppable of this.manager.registry.droppables.value) {
      if (droppable.element) {
        documents.add(getDocument(droppable.element));
      }
    }
    const unbindFns = Array.from(documents).map(
      (doc) => this.listeners.bind(doc, [
        {
          type: "pointermove",
          listener: (event) => this.handlePointerMove(event, doc, options)
        },
        {
          type: "pointerup",
          listener: this.handlePointerUp,
          options: {
            capture: true
          }
        },
        {
          // Cancel activation if there is a competing Drag and Drop interaction
          type: "dragstart",
          listener: this.handleDragStart
        }
      ])
    );
    return () => {
      unbindFns.forEach((unbind) => unbind());
    };
  }
  handlePointerDown(event, source, options = {}) {
    if (this.disabled || !event.isPrimary || event.button !== 0 || !isElement(event.target) || source.disabled) {
      return;
    }
    const offset = getFrameTransform(source.element);
    this.initialCoordinates = {
      x: event.clientX * offset.scaleX + offset.x,
      y: event.clientY * offset.scaleY + offset.y
    };
    this.source = source;
    const { activationConstraints } = options;
    const constraints = typeof activationConstraints === "function" ? activationConstraints(event, source) : activationConstraints;
    event.stopImmediatePropagation();
    if (!(constraints == null ? void 0 : constraints.delay) && !(constraints == null ? void 0 : constraints.distance)) {
      this.handleStart(source, event);
    } else {
      const { delay } = constraints;
      if (delay) {
        const timeout3 = setTimeout(
          () => this.handleStart(source, event),
          delay.value
        );
        __privateSet(this, _clearTimeout, () => {
          clearTimeout(timeout3);
          __privateSet(this, _clearTimeout, void 0);
        });
      }
    }
    const cleanup = () => {
      var _a;
      (_a = __privateGet(this, _clearTimeout)) == null ? void 0 : _a.call(this);
      this.initialCoordinates = void 0;
      this.source = void 0;
    };
    this.cleanup.add(cleanup);
  }
  handlePointerMove(event, doc, options) {
    if (!this.source) {
      return;
    }
    const ownerDocument = this.source.element && getDocument(this.source.element);
    if (doc !== ownerDocument) {
      return;
    }
    const coordinates = {
      x: event.clientX,
      y: event.clientY
    };
    const offset = getFrameTransform(this.source.element);
    coordinates.x = coordinates.x * offset.scaleX + offset.x;
    coordinates.y = coordinates.y * offset.scaleY + offset.y;
    if (this.manager.dragOperation.status.dragging) {
      event.preventDefault();
      event.stopPropagation();
      this.manager.actions.move({ to: coordinates });
      return;
    }
    if (!this.initialCoordinates) {
      return;
    }
    const delta = {
      x: coordinates.x - this.initialCoordinates.x,
      y: coordinates.y - this.initialCoordinates.y
    };
    const { activationConstraints } = options;
    const constraints = typeof activationConstraints === "function" ? activationConstraints(event, this.source) : activationConstraints;
    const { distance, delay } = constraints != null ? constraints : {};
    if (distance) {
      if (distance.tolerance != null && exceedsDistance(delta, distance.tolerance)) {
        return this.handleCancel();
      }
      if (exceedsDistance(delta, distance.value)) {
        return this.handleStart(this.source, event);
      }
    }
    if (delay) {
      if (exceedsDistance(delta, delay.tolerance)) {
        return this.handleCancel();
      }
    }
  }
  handlePointerUp(event) {
    if (!this.source) {
      return;
    }
    event.preventDefault();
    event.stopPropagation();
    const { status } = this.manager.dragOperation;
    if (!status.idle) {
      const canceled = !status.initialized;
      this.manager.actions.stop({ canceled });
    }
    this.cleanup.forEach((cleanup) => cleanup());
    this.cleanup.clear();
  }
  handleKeyDown(event) {
    if (event.key === "Escape") {
      event.preventDefault();
      this.handleCancel();
    }
  }
  handleStart(source, event) {
    var _a;
    const { manager, initialCoordinates } = this;
    (_a = __privateGet(this, _clearTimeout)) == null ? void 0 : _a.call(this);
    if (!initialCoordinates || manager.dragOperation.status.initialized) {
      return;
    }
    if (event.defaultPrevented) {
      return;
    }
    event.preventDefault();
    batch(() => {
      manager.actions.setDragSource(source.id);
      manager.actions.start({ coordinates: initialCoordinates, event });
    });
    const ownerDocument = getDocument(event.target);
    const unbind = this.listeners.bind(ownerDocument, [
      {
        // Prevent scrolling on touch devices
        type: "touchmove",
        listener: preventDefault,
        options: {
          passive: false
        }
      },
      {
        // Prevent click events
        type: "click",
        listener: preventDefault
      },
      {
        type: "keydown",
        listener: this.handleKeyDown
      }
    ]);
    ownerDocument.body.setPointerCapture(event.pointerId);
    this.cleanup.add(unbind);
  }
  handleDragStart(event) {
    const { target } = event;
    if (!isElement(target)) {
      return;
    }
    const isNativeDraggable = isHTMLElement(target) && target.draggable && target.getAttribute("draggable") === "true";
    if (isNativeDraggable) {
      this.handleCancel();
    } else {
      preventDefault(event);
    }
  }
  handleCancel() {
    const { dragOperation } = this.manager;
    if (dragOperation.status.initialized) {
      this.manager.actions.stop({ canceled: true });
    }
    this.cleanup.forEach((cleanup) => cleanup());
    this.cleanup.clear();
  }
  destroy() {
    this.listeners.clear();
  }
};
_clearTimeout = new WeakMap();
_PointerSensor.configure = configurator(_PointerSensor);
var PointerSensor = _PointerSensor;
function preventDefault(event) {
  event.preventDefault();
}
function noop() {
}
var windows = /* @__PURE__ */ new WeakSet();
function patchWindow(window2) {
  if (!window2 || windows.has(window2)) {
    return;
  }
  window2.addEventListener("touchmove", noop, {
    capture: false,
    passive: false
  });
  windows.add(window2);
}

// components/DragDropContext/index.tsx
import { createStore as createStore3 } from "zustand";
import { jsx as jsx23 } from "react/jsx-runtime";
var DEBUG3 = false;
var dragListenerContext = createContext4({
  dragListeners: {}
});
function useDragListener(type, fn, deps = []) {
  const { setDragListeners } = useContext7(dragListenerContext);
  useEffect15(() => {
    if (setDragListeners) {
      setDragListeners((old) => __spreadProps(__spreadValues({}, old), {
        [type]: [...old[type] || [], fn]
      }));
    }
  }, deps);
}
var AREA_CHANGE_DEBOUNCE_MS = 100;
var useTempDisableFallback = (timeout3) => {
  const lastFallbackDisable = useRef3(null);
  return useCallback11((manager) => {
    collisionStore.setState({ fallbackEnabled: false });
    const fallbackId = generateId();
    lastFallbackDisable.current = fallbackId;
    setTimeout(() => {
      if (lastFallbackDisable.current === fallbackId) {
        collisionStore.setState({ fallbackEnabled: true });
        manager.collisionObserver.forceUpdate(true);
      }
    }, timeout3);
  }, []);
};
var DragDropContextClient = ({
  children,
  disableAutoScroll
}) => {
  const { state, config, dispatch, resolveData } = useAppContext();
  const id = useId();
  const { data } = state;
  const debouncedParamsRef = useRef3(null);
  const tempDisableFallback = useTempDisableFallback(100);
  const [zoneStore] = useState17(
    () => createStore3(() => ({
      zoneDepthIndex: {},
      nextZoneDepthIndex: {},
      areaDepthIndex: {},
      nextAreaDepthIndex: {},
      draggedItem: null,
      previewIndex: {}
    }))
  );
  const getChanged2 = useCallback11(
    (params, id2) => {
      const { zoneDepthIndex = {}, areaDepthIndex = {} } = zoneStore.getState() || {};
      const stateHasZone = Object.keys(zoneDepthIndex).length > 0;
      const stateHasArea = Object.keys(areaDepthIndex).length > 0;
      let zoneChanged = false;
      let areaChanged = false;
      if (params.zone && !zoneDepthIndex[params.zone]) {
        zoneChanged = true;
      } else if (!params.zone && stateHasZone) {
        zoneChanged = true;
      }
      if (params.area && !areaDepthIndex[params.area]) {
        areaChanged = true;
      } else if (!params.area && stateHasArea) {
        areaChanged = true;
      }
      return { zoneChanged, areaChanged };
    },
    [zoneStore]
  );
  const setDeepestAndCollide = useCallback11(
    (params, manager) => {
      const { zoneChanged, areaChanged } = getChanged2(params, id);
      if (!zoneChanged && !areaChanged) return;
      zoneStore.setState({
        zoneDepthIndex: params.zone ? { [params.zone]: true } : {},
        areaDepthIndex: params.area ? { [params.area]: true } : {}
      });
      tempDisableFallback(manager);
      setTimeout(() => {
        manager.collisionObserver.forceUpdate(true);
      }, 50);
      debouncedParamsRef.current = null;
    },
    [zoneStore]
  );
  const setDeepestDb = useDebouncedCallback2(
    setDeepestAndCollide,
    AREA_CHANGE_DEBOUNCE_MS
  );
  const cancelDb = () => {
    setDeepestDb.cancel();
    debouncedParamsRef.current = null;
  };
  useEffect15(() => {
    if (DEBUG3) {
      zoneStore.subscribe(
        (s) => {
          var _a, _b;
          return console.log(
            s.previewIndex,
            (_a = Object.entries(s.zoneDepthIndex || {})[0]) == null ? void 0 : _a[0],
            (_b = Object.entries(s.areaDepthIndex || {})[0]) == null ? void 0 : _b[0]
          );
        }
      );
    }
  }, []);
  const [plugins] = useState17(() => [
    ...disableAutoScroll ? defaultPreset.plugins.filter((plugin) => plugin !== AutoScroller) : defaultPreset.plugins,
    createNestedDroppablePlugin(
      {
        onChange: (params, manager) => {
          const state2 = zoneStore.getState();
          const { zoneChanged, areaChanged } = getChanged2(params, id);
          const isDragging = manager.dragOperation.status.dragging;
          if (areaChanged || zoneChanged) {
            let nextZoneDepthIndex = {};
            let nextAreaDepthIndex = {};
            if (params.zone) {
              nextZoneDepthIndex = { [params.zone]: true };
            }
            if (params.area) {
              nextAreaDepthIndex = { [params.area]: true };
            }
            zoneStore.setState({ nextZoneDepthIndex, nextAreaDepthIndex });
          }
          if (params.zone !== "void" && (state2 == null ? void 0 : state2.zoneDepthIndex["void"])) {
            setDeepestAndCollide(params, manager);
            return;
          }
          if (areaChanged) {
            if (isDragging) {
              const debouncedParams = debouncedParamsRef.current;
              const isSameParams = debouncedParams && debouncedParams.area === params.area && debouncedParams.zone === params.zone;
              if (!isSameParams) {
                cancelDb();
                setDeepestDb(params, manager);
                debouncedParamsRef.current = params;
              }
            } else {
              cancelDb();
              setDeepestAndCollide(params, manager);
            }
            return;
          }
          if (zoneChanged) {
            setDeepestAndCollide(params, manager);
          }
          cancelDb();
        }
      },
      id
    )
  ]);
  const [sensors] = useState17(() => [
    PointerSensor.configure({
      activationConstraints(event, source) {
        var _a;
        const { pointerType, target } = event;
        if (pointerType === "mouse" && isElement2(target) && (source.handle === target || ((_a = source.handle) == null ? void 0 : _a.contains(target)))) {
          return void 0;
        }
        const delay = { value: 200, tolerance: 10 };
        if (pointerType === "touch") {
          return { delay };
        }
        return {
          delay,
          distance: { value: 5 }
        };
      }
    })
  ]);
  const [dragListeners, setDragListeners] = useState17({});
  const [pathData, setPathData] = useState17();
  const dragMode = useRef3(null);
  const registerPath = useCallback11(
    (id2, selector, label) => {
      const [area] = getZoneId(selector.zone);
      setPathData((latestPathData = {}) => {
        const parentPathData = latestPathData[area] || { path: [] };
        return __spreadProps(__spreadValues({}, latestPathData), {
          [id2]: {
            path: [
              ...parentPathData.path,
              ...selector.zone ? [selector.zone] : []
            ],
            label
          }
        });
      });
    },
    [data, setPathData]
  );
  const unregisterPath = useCallback11(
    (id2) => {
      setPathData((latestPathData = {}) => {
        const newPathData = __spreadValues({}, latestPathData);
        delete newPathData[id2];
        return newPathData;
      });
    },
    [data, setPathData]
  );
  const initialSelector = useRef3(void 0);
  return /* @__PURE__ */ jsx23("div", { id, children: /* @__PURE__ */ jsx23(
    dragListenerContext.Provider,
    {
      value: {
        dragListeners,
        setDragListeners
      },
      children: /* @__PURE__ */ jsx23(
        DragDropProvider2,
        {
          plugins,
          sensors,
          onDragEnd: (event, manager) => {
            var _a;
            const { source, target } = event.operation;
            if (!source) {
              zoneStore.setState({ draggedItem: null });
              return;
            }
            const { zone, index } = source.data;
            const { previewIndex = {} } = zoneStore.getState() || {};
            const thisPreview = ((_a = previewIndex[zone]) == null ? void 0 : _a.props.id) === source.id ? previewIndex[zone] : null;
            setTimeout(() => {
              var _a2, _b;
              zoneStore.setState({ draggedItem: null });
              if (event.canceled || (target == null ? void 0 : target.type) === "void") {
                zoneStore.setState({ previewIndex: {} });
                (_a2 = dragListeners.dragend) == null ? void 0 : _a2.forEach((fn) => {
                  fn(event, manager);
                });
                return;
              }
              if (thisPreview) {
                zoneStore.setState({ previewIndex: {} });
                if (thisPreview.type === "insert") {
                  insertComponent(
                    thisPreview.componentType,
                    thisPreview.zone,
                    thisPreview.index,
                    { config, dispatch, resolveData, state }
                  );
                } else if (initialSelector.current) {
                  dispatch({
                    type: "move",
                    sourceIndex: initialSelector.current.index,
                    sourceZone: initialSelector.current.zone,
                    destinationIndex: thisPreview.index,
                    destinationZone: thisPreview.zone,
                    recordHistory: false
                  });
                }
              }
              setTimeout(() => {
                dispatch({
                  type: "setUi",
                  ui: {
                    itemSelector: { index, zone },
                    isDragging: false
                  },
                  recordHistory: true
                });
              }, 50);
              (_b = dragListeners.dragend) == null ? void 0 : _b.forEach((fn) => {
                fn(event, manager);
              });
            }, 250);
          },
          onDragOver: (event, manager) => {
            var _a, _b, _c, _d, _e;
            event.preventDefault();
            const draggedItem = (_a = zoneStore.getState()) == null ? void 0 : _a.draggedItem;
            if (!draggedItem) return;
            cancelDb();
            const { source, target } = event.operation;
            if (!target || !source || target.type === "void") return;
            const [sourceId] = source.id.split(":");
            const [targetId] = target.id.split(":");
            const sourceData = source.data;
            let sourceZone = sourceData.zone;
            let sourceIndex = sourceData.index;
            let targetZone = "";
            let targetIndex = 0;
            if (target.type === "component") {
              const targetData = target.data;
              targetZone = targetData.zone;
              targetIndex = targetData.index;
              const collisionData = (_c = (_b = manager.dragOperation.data) == null ? void 0 : _b.collisionMap) == null ? void 0 : _c[targetId];
              const collisionPosition = (collisionData == null ? void 0 : collisionData.direction) === "up" || (collisionData == null ? void 0 : collisionData.direction) === "left" ? "before" : "after";
              if (targetIndex >= sourceIndex && sourceZone === targetZone) {
                targetIndex = targetIndex - 1;
              }
              if (collisionPosition === "after") {
                targetIndex = targetIndex + 1;
              }
            } else {
              targetZone = target.id.toString();
              targetIndex = 0;
            }
            if (targetId === sourceId || ((_d = pathData == null ? void 0 : pathData[target.id]) == null ? void 0 : _d.path.find((path) => {
              const [pathId] = path.split(":");
              return pathId === sourceId;
            }))) {
              return;
            }
            if (dragMode.current === "new") {
              zoneStore.setState({
                previewIndex: {
                  [targetZone]: {
                    componentType: sourceData.componentType,
                    type: "insert",
                    index: targetIndex,
                    zone: targetZone,
                    props: {
                      id: source.id.toString()
                    }
                  }
                }
              });
            } else {
              if (!initialSelector.current) {
                initialSelector.current = {
                  zone: sourceData.zone,
                  index: sourceData.index
                };
              }
              const item = getItem(initialSelector.current, data);
              if (item) {
                zoneStore.setState({
                  previewIndex: {
                    [targetZone]: {
                      componentType: sourceData.componentType,
                      type: "move",
                      index: targetIndex,
                      zone: targetZone,
                      props: item.props
                    }
                  }
                });
              }
            }
            (_e = dragListeners.dragover) == null ? void 0 : _e.forEach((fn) => {
              fn(event, manager);
            });
          },
          onDragStart: (event, manager) => {
            var _a;
            dispatch({
              type: "setUi",
              ui: { itemSelector: null, isDragging: true }
            });
            const { source } = event.operation;
            if (source && source.type !== "void") {
              const sourceData = source.data;
              const item = getItem(
                {
                  zone: sourceData.zone,
                  index: sourceData.index
                },
                data
              );
              if (item) {
                zoneStore.setState({
                  previewIndex: {
                    [sourceData.zone]: {
                      componentType: sourceData.componentType,
                      type: "move",
                      index: sourceData.index,
                      zone: sourceData.zone,
                      props: item.props
                    }
                  }
                });
              }
            }
            (_a = dragListeners.dragstart) == null ? void 0 : _a.forEach((fn) => {
              fn(event, manager);
            });
          },
          onBeforeDragStart: (event) => {
            var _a;
            const isNewComponent = ((_a = event.operation.source) == null ? void 0 : _a.data.type) === "drawer";
            dragMode.current = isNewComponent ? "new" : "existing";
            initialSelector.current = void 0;
            zoneStore.setState({ draggedItem: event.operation.source });
          },
          children: /* @__PURE__ */ jsx23(ZoneStoreProvider, { store: zoneStore, children: /* @__PURE__ */ jsx23(
            DropZoneProvider,
            {
              value: {
                data,
                config,
                mode: "edit",
                areaId: "root",
                depth: 0,
                registerPath,
                unregisterPath,
                pathData,
                path: []
              },
              children
            }
          ) })
        }
      )
    }
  ) });
};
var DragDropContext = ({
  children,
  disableAutoScroll
}) => {
  const { status } = useAppContext();
  if (status === "LOADING") {
    return children;
  }
  return /* @__PURE__ */ jsx23(DragDropContextClient, { disableAutoScroll, children });
};

// components/Drawer/index.tsx
import { jsx as jsx24, jsxs as jsxs11 } from "react/jsx-runtime";
var getClassName18 = get_class_name_factory_default("Drawer", styles_module_default10);
var getClassNameItem2 = get_class_name_factory_default("DrawerItem", styles_module_default10);
var DrawerItemInner = ({
  children,
  name,
  label,
  dragRef,
  isDragDisabled
}) => {
  const CustomInner = useMemo9(
    () => children || (({ children: children2 }) => /* @__PURE__ */ jsx24("div", { className: getClassNameItem2("default"), children: children2 })),
    [children]
  );
  return /* @__PURE__ */ jsx24(
    "div",
    {
      className: getClassNameItem2({ disabled: isDragDisabled }),
      ref: dragRef,
      onMouseDown: (e) => e.preventDefault(),
      "data-testid": dragRef ? `drawer-item:${name}` : "",
      "data-puck-drawer-item": true,
      children: /* @__PURE__ */ jsx24(CustomInner, { name, children: /* @__PURE__ */ jsx24("div", { className: getClassNameItem2("draggableWrapper"), children: /* @__PURE__ */ jsxs11("div", { className: getClassNameItem2("draggable"), children: [
        /* @__PURE__ */ jsx24("div", { className: getClassNameItem2("name"), children: label != null ? label : name }),
        /* @__PURE__ */ jsx24("div", { className: getClassNameItem2("icon"), children: /* @__PURE__ */ jsx24(DragIcon, {}) })
      ] }) }) })
    }
  );
};
var DrawerItemDraggable = ({
  children,
  name,
  label,
  id,
  isDragDisabled
}) => {
  const { ref } = useDraggableSafe({
    id,
    data: { type: "drawer", componentType: name },
    disabled: isDragDisabled
  });
  return /* @__PURE__ */ jsxs11("div", { className: getClassName18("draggable"), children: [
    /* @__PURE__ */ jsx24("div", { className: getClassName18("draggableBg"), children: /* @__PURE__ */ jsx24(DrawerItemInner, { name, label, children }) }),
    /* @__PURE__ */ jsx24("div", { className: getClassName18("draggableFg"), children: /* @__PURE__ */ jsx24(
      DrawerItemInner,
      {
        name,
        label,
        dragRef: ref,
        isDragDisabled,
        children
      }
    ) })
  ] });
};
var DrawerItem = ({
  name,
  children,
  id,
  label,
  index,
  isDragDisabled
}) => {
  const resolvedId = id || name;
  const [dynamicId, setDynamicId] = useState18(generateId(resolvedId));
  if (typeof index !== "undefined") {
    console.error(
      "Warning: The `index` prop on Drawer.Item is deprecated and no longer required."
    );
  }
  useDragListener(
    "dragend",
    () => {
      setDynamicId(generateId(resolvedId));
    },
    [resolvedId]
  );
  return /* @__PURE__ */ jsx24("div", { children: /* @__PURE__ */ jsx24(
    DrawerItemDraggable,
    {
      name,
      label,
      id: dynamicId,
      isDragDisabled,
      children
    }
  ) }, dynamicId);
};
var Drawer = ({
  children,
  droppableId,
  direction
}) => {
  if (droppableId) {
    console.error(
      "Warning: The `droppableId` prop on Drawer is deprecated and no longer required."
    );
  }
  if (direction) {
    console.error(
      "Warning: The `direction` prop on Drawer is deprecated and no longer required to achieve multi-directional dragging."
    );
  }
  const id = useId2();
  const { ref } = useDroppableSafe({
    id,
    type: "void",
    collisionPriority: 0
    // Never collide with this, but we use it so NestedDroppablePlugin respects the Drawer
  });
  return /* @__PURE__ */ jsx24(
    "div",
    {
      className: getClassName18(),
      ref,
      "data-puck-dnd": id,
      "data-puck-drawer": true,
      children
    }
  );
};
Drawer.Item = DrawerItem;

// components/Puck/index.tsx
import {
  useCallback as useCallback18,
  useEffect as useEffect24,
  useMemo as useMemo19,
  useReducer,
  useState as useState26
} from "react";

// css-module:/home/dev/Masaüstü/projeler/punk-turkish/components/SidebarSection/styles.module.css#css-module
var styles_module_default13 = { "SidebarSection": "_SidebarSection_125qe_1", "SidebarSection-title": "_SidebarSection-title_125qe_12", "SidebarSection--noBorderTop": "_SidebarSection--noBorderTop_125qe_20", "SidebarSection-content": "_SidebarSection-content_125qe_24", "SidebarSection--noPadding": "_SidebarSection--noPadding_125qe_28", "SidebarSection-breadcrumbLabel": "_SidebarSection-breadcrumbLabel_125qe_41", "SidebarSection-breadcrumbs": "_SidebarSection-breadcrumbs_125qe_70", "SidebarSection-breadcrumb": "_SidebarSection-breadcrumb_125qe_41", "SidebarSection-heading": "_SidebarSection-heading_125qe_82", "SidebarSection-loadingOverlay": "_SidebarSection-loadingOverlay_125qe_86" };

// lib/use-breadcrumbs.ts
import { useContext as useContext8, useMemo as useMemo10 } from "react";
var convertPathDataToBreadcrumbs = (selectedItem, pathData, data) => {
  const id = selectedItem ? selectedItem == null ? void 0 : selectedItem.props.id : "";
  const currentPathData = pathData && id && pathData[id] ? __spreadValues({}, pathData[id]) : { label: "Sayfa", path: [] };
  if (!id) {
    return [];
  }
  return currentPathData == null ? void 0 : currentPathData.path.reduce((acc, zoneCompound) => {
    const [area] = getZoneId(zoneCompound);
    if (area === rootDroppableId) {
      return [
        {
          label: "Sayfa",
          selector: null
        }
      ];
    }
    const parentZoneCompound = acc.length > 0 ? acc[acc.length - 1].zoneCompound : rootDroppableId;
    let parentZone = data.content;
    if (parentZoneCompound && parentZoneCompound !== rootDroppableId) {
      parentZone = data.zones[parentZoneCompound];
    }
    if (!parentZone) {
      return acc;
    }
    const itemIndex = parentZone.findIndex(
      (queryItem) => queryItem.props.id === area
    );
    const item = parentZone[itemIndex];
    if (!item) {
      return acc;
    }
    return [
      ...acc,
      {
        label: item.type.toString(),
        selector: {
          index: itemIndex,
          zone: parentZoneCompound
        },
        zoneCompound
      }
    ];
  }, []);
};
var useBreadcrumbs = (renderCount) => {
  const {
    state: { data },
    selectedItem
  } = useAppContext();
  const dzContext = useContext8(dropZoneContext);
  return useMemo10(() => {
    const breadcrumbs = convertPathDataToBreadcrumbs(
      selectedItem,
      dzContext == null ? void 0 : dzContext.pathData,
      data
    );
    if (renderCount) {
      return breadcrumbs.slice(breadcrumbs.length - renderCount);
    }
    return breadcrumbs;
  }, [selectedItem, dzContext == null ? void 0 : dzContext.pathData, renderCount]);
};

// components/SidebarSection/index.tsx
import { jsx as jsx25, jsxs as jsxs12 } from "react/jsx-runtime";
var getClassName19 = get_class_name_factory_default("SidebarSection", styles_module_default13);
var SidebarSection = ({
  children,
  title,
  background,
  showBreadcrumbs,
  noBorderTop,
  noPadding,
  isLoading
}) => {
  const { setUi } = useAppContext();
  const breadcrumbs = useBreadcrumbs(1);
  return /* @__PURE__ */ jsxs12(
    "div",
    {
      className: getClassName19({ noBorderTop, noPadding }),
      style: { background },
      children: [
        /* @__PURE__ */ jsx25("div", { className: getClassName19("title"), children: /* @__PURE__ */ jsxs12("div", { className: getClassName19("breadcrumbs"), children: [
          showBreadcrumbs ? breadcrumbs.map((breadcrumb, i) => /* @__PURE__ */ jsxs12("div", { className: getClassName19("breadcrumb"), children: [
            /* @__PURE__ */ jsx25(
              "button",
              {
                type: "button",
                className: getClassName19("breadcrumbLabel"),
                onClick: () => setUi({ itemSelector: breadcrumb.selector }),
                children: breadcrumb.label
              }
            ),
            /* @__PURE__ */ jsx25(ChevronRight, { size: 16 })
          ] }, i)) : null,
          /* @__PURE__ */ jsx25("div", { className: getClassName19("heading"), children: /* @__PURE__ */ jsx25(Heading, { rank: "2", size: "xs", children: title }) })
        ] }) }),
        /* @__PURE__ */ jsx25("div", { className: getClassName19("content"), children }),
        isLoading && /* @__PURE__ */ jsx25("div", { className: getClassName19("loadingOverlay"), children: /* @__PURE__ */ jsx25(Loader, { size: 32 }) })
      ]
    }
  );
};

// lib/flush-zones.ts
var flushZones = (appState) => {
  const containsZones = typeof appState.data.zones !== "undefined";
  if (containsZones) {
    Object.keys(appState.data.zones || {}).forEach((zone) => {
      addToZoneCache(zone, appState.data.zones[zone]);
    });
    return __spreadProps(__spreadValues({}, appState), {
      data: __spreadProps(__spreadValues({}, appState.data), {
        zones: {}
      })
    });
  }
  return appState;
};

// css-module:/home/dev/Masaüstü/projeler/punk-turkish/components/MenuBar/styles.module.css#css-module
var styles_module_default14 = { "MenuBar": "_MenuBar_8pf8c_1", "MenuBar--menuOpen": "_MenuBar--menuOpen_8pf8c_14", "MenuBar-inner": "_MenuBar-inner_8pf8c_29", "MenuBar-history": "_MenuBar-history_8pf8c_45" };

// components/MenuBar/index.tsx
import { Fragment as Fragment7, jsx as jsx26, jsxs as jsxs13 } from "react/jsx-runtime";
var getClassName20 = get_class_name_factory_default("MenuBar", styles_module_default14);
function MenuBar({
  appState,
  dispatch,
  menuOpen = false,
  onPublish,
  renderHeaderActions,
  setMenuOpen
}) {
  const {
    history: { back, forward, historyStore }
  } = useAppContext();
  const { hasFuture = false, hasPast = false } = historyStore || {};
  return /* @__PURE__ */ jsx26(
    "div",
    {
      className: getClassName20({ menuOpen }),
      onClick: (event) => {
        var _a;
        const element = event.target;
        if (window.matchMedia("(min-width: 638px)").matches) {
          return;
        }
        if (element.tagName === "A" && ((_a = element.getAttribute("href")) == null ? void 0 : _a.startsWith("#"))) {
          setMenuOpen(false);
        }
      },
      children: /* @__PURE__ */ jsxs13("div", { className: getClassName20("inner"), children: [
        /* @__PURE__ */ jsxs13("div", { className: getClassName20("history"), children: [
          /* @__PURE__ */ jsx26(IconButton, { title: "geri", disabled: !hasPast, onClick: back, children: /* @__PURE__ */ jsx26(Undo2, { size: 21 }) }),
          /* @__PURE__ */ jsx26(IconButton, { title: "ileri", disabled: !hasFuture, onClick: forward, children: /* @__PURE__ */ jsx26(Redo2, { size: 21 }) })
        ] }),
        /* @__PURE__ */ jsx26(Fragment7, { children: renderHeaderActions && renderHeaderActions({
          state: appState,
          dispatch
        }) })
      ] })
    }
  );
}

// css-module:/home/dev/Masaüstü/projeler/punk-turkish/components/Puck/styles.module.css#css-module
var styles_module_default15 = { "Puck": "_Puck_12s9r_19", "Puck-portal": "_Puck-portal_12s9r_24", "PuckLayout-inner": "_PuckLayout-inner_12s9r_31", "PuckLayout--mounted": "_PuckLayout--mounted_12s9r_43", "PuckLayout--leftSideBarVisible": "_PuckLayout--leftSideBarVisible_12s9r_47", "PuckLayout--rightSideBarVisible": "_PuckLayout--rightSideBarVisible_12s9r_53", "PuckLayout-mounted": "_PuckLayout-mounted_12s9r_67", "PuckLayout": "_PuckLayout_12s9r_31", "PuckLayout-header": "_PuckLayout-header_12s9r_108", "PuckLayout-headerInner": "_PuckLayout-headerInner_12s9r_117", "PuckLayout-headerToggle": "_PuckLayout-headerToggle_12s9r_127", "PuckLayout-rightSideBarToggle": "_PuckLayout-rightSideBarToggle_12s9r_134", "PuckLayout-leftSideBarToggle": "_PuckLayout-leftSideBarToggle_12s9r_135", "PuckLayout-headerTitle": "_PuckLayout-headerTitle_12s9r_139", "PuckLayout-headerPath": "_PuckLayout-headerPath_12s9r_143", "PuckLayout-headerTools": "_PuckLayout-headerTools_12s9r_150", "PuckLayout-menuButton": "_PuckLayout-menuButton_12s9r_156", "PuckLayout--menuOpen": "_PuckLayout--menuOpen_12s9r_161", "PuckLayout-leftSideBar": "_PuckLayout-leftSideBar_12s9r_135", "PuckLayout-rightSideBar": "_PuckLayout-rightSideBar_12s9r_134" };

// css-module:/home/dev/Masaüstü/projeler/punk-turkish/components/Puck/components/Fields/styles.module.css#css-module
var styles_module_default16 = { "PuckFields": "_PuckFields_10bh7_1", "PuckFields--isLoading": "_PuckFields--isLoading_10bh7_6", "PuckFields-loadingOverlay": "_PuckFields-loadingOverlay_10bh7_10", "PuckFields-loadingOverlayInner": "_PuckFields-loadingOverlayInner_10bh7_25", "PuckFields-field": "_PuckFields-field_10bh7_32", "PuckFields--wrapFields": "_PuckFields--wrapFields_10bh7_36" };

// components/Puck/components/Fields/index.tsx
import { useMemo as useMemo12 } from "react";

// lib/use-resolved-fields.ts
import { useCallback as useCallback13, useEffect as useEffect17, useMemo as useMemo11, useRef as useRef5, useState as useState19 } from "react";

// lib/use-parent.ts
import { useCallback as useCallback12, useContext as useContext9 } from "react";
var getParent = (itemSelector, pathData, data) => {
  var _a;
  if (!itemSelector) return null;
  const item = getItem(itemSelector, data);
  const breadcrumbs = convertPathDataToBreadcrumbs(item, pathData, data);
  const lastItem = breadcrumbs[breadcrumbs.length - 1];
  const parent = (lastItem == null ? void 0 : lastItem.selector) ? (_a = getItem(lastItem.selector, data)) != null ? _a : null : null;
  return parent || null;
};
var useGetParent = () => {
  const { state } = useAppContext();
  const { pathData } = useContext9(dropZoneContext) || {};
  return useCallback12(
    () => getParent(state.ui.itemSelector, pathData, state.data),
    [state.ui.itemSelector, pathData, state.data]
  );
};
var useParent = () => {
  return useGetParent()();
};

// lib/use-on-value-change.ts
import { useRef as useRef4, useEffect as useEffect16 } from "react";
function useOnValueChange(value, onChange, compare = Object.is, deps = []) {
  const tracked = useRef4(value);
  useEffect16(() => {
    const oldValue = tracked.current;
    if (!compare(value, oldValue)) {
      tracked.current = value;
      onChange(value, oldValue);
    }
  }, [onChange, compare, value, ...deps]);
}

// lib/selector-is.ts
var selectorIs = (a, b) => (a == null ? void 0 : a.zone) === (b == null ? void 0 : b.zone) && (a == null ? void 0 : a.index) === (b == null ? void 0 : b.index);

// lib/use-resolved-fields.ts
var defaultPageFields = {
  title: { type: "text" }
};
var useResolvedFields = () => {
  var _a, _b;
  const { selectedItem, state, config } = useAppContext();
  const parent = useParent();
  const { data } = state;
  const rootFields = ((_a = config.root) == null ? void 0 : _a.fields) || defaultPageFields;
  const componentConfig = selectedItem ? config.components[selectedItem.type] : null;
  const defaultFields = useMemo11(
    () => (selectedItem ? componentConfig == null ? void 0 : componentConfig.fields : rootFields) || {},
    [selectedItem, rootFields, componentConfig == null ? void 0 : componentConfig.fields]
  );
  const rootProps = data.root.props || data.root;
  const [lastSelectedData, setLastSelectedData] = useState19({});
  const [resolvedFields, setResolvedFields] = useState19(defaultFields);
  const [fieldsLoading, setFieldsLoading] = useState19(false);
  const lastFields = useRef5(defaultFields);
  const defaultResolveFields = (_componentData, _params) => defaultFields;
  const componentData = selectedItem ? selectedItem : { props: rootProps, readOnly: data.root.readOnly };
  const hasComponentResolver = selectedItem && (componentConfig == null ? void 0 : componentConfig.resolveFields);
  const hasRootResolver = !selectedItem && ((_b = config.root) == null ? void 0 : _b.resolveFields);
  const hasResolver = hasComponentResolver || hasRootResolver;
  const resolveFields = useCallback13(
    (..._0) => __async(void 0, [..._0], function* (fields = {}) {
      var _a2;
      const lastData = ((_a2 = lastSelectedData.props) == null ? void 0 : _a2.id) === componentData.props.id ? lastSelectedData : null;
      const changed = getChanged(componentData, lastData);
      setLastSelectedData(componentData);
      if (hasComponentResolver) {
        return yield componentConfig.resolveFields(
          componentData,
          {
            changed,
            fields,
            lastFields: lastFields.current,
            lastData,
            appState: state,
            parent
          }
        );
      }
      if (hasRootResolver) {
        return yield config.root.resolveFields(componentData, {
          changed,
          fields,
          lastFields: lastFields.current,
          lastData,
          appState: state,
          parent
        });
      }
      return defaultResolveFields(componentData, {
        changed,
        fields,
        lastFields: lastFields.current,
        lastData
      });
    }),
    [data, config, componentData, selectedItem, state, parent]
  );
  const triggerResolver = useCallback13(() => {
    var _a2, _b2;
    if (!((_a2 = state.ui.itemSelector) == null ? void 0 : _a2.zone) || ((_b2 = state.ui.itemSelector) == null ? void 0 : _b2.zone) === "default-zone" || parent) {
      if (hasResolver) {
        setFieldsLoading(true);
        resolveFields(defaultFields).then((fields) => {
          setResolvedFields(fields || {});
          lastFields.current = fields;
          setFieldsLoading(false);
        });
        return;
      }
    }
    setResolvedFields(defaultFields);
  }, [defaultFields, state.ui.itemSelector, hasResolver, parent]);
  useOnValueChange(
    state.ui.itemSelector,
    () => {
      lastFields.current = defaultFields;
    },
    selectorIs
  );
  useOnValueChange(
    { data, parent, itemSelector: state.ui.itemSelector },
    () => {
      triggerResolver();
    },
    (a, b) => JSON.stringify(a) === JSON.stringify(b)
  );
  useEffect17(() => {
    triggerResolver();
  }, []);
  return [resolvedFields, fieldsLoading];
};

// components/Puck/components/Fields/index.tsx
import { Fragment as Fragment8, jsx as jsx27, jsxs as jsxs14 } from "react/jsx-runtime";
var getClassName21 = get_class_name_factory_default("PuckFields", styles_module_default16);
var DefaultFields = ({
  children
}) => {
  return /* @__PURE__ */ jsx27(Fragment8, { children });
};
var Fields = ({ wrapFields = true }) => {
  var _a, _b;
  const {
    selectedItem,
    state,
    dispatch,
    config,
    resolveData,
    componentState,
    overrides
  } = useAppContext();
  const { data, ui } = state;
  const { itemSelector } = ui;
  const [fields, fieldsResolving] = useResolvedFields();
  const { getPermissions } = useAppContext();
  const componentResolving = selectedItem ? ((_a = componentState[selectedItem == null ? void 0 : selectedItem.props.id]) == null ? void 0 : _a.loadingCount) > 0 : ((_b = componentState["puck-root"]) == null ? void 0 : _b.loadingCount) > 0;
  const isLoading = fieldsResolving || componentResolving;
  const rootProps = data.root.props || data.root;
  const Wrapper = useMemo12(() => overrides.fields || DefaultFields, [overrides]);
  return /* @__PURE__ */ jsxs14(
    "form",
    {
      className: getClassName21({ wrapFields }),
      onSubmit: (e) => {
        e.preventDefault();
      },
      children: [
        /* @__PURE__ */ jsx27(Wrapper, { isLoading, itemSelector, children: Object.keys(fields).map((fieldName) => {
          const field = fields[fieldName];
          if (!(field == null ? void 0 : field.type)) return null;
          const onChange = (value, updatedUi) => {
            var _a2, _b2;
            let currentProps;
            if (selectedItem) {
              currentProps = selectedItem.props;
            } else {
              currentProps = rootProps;
            }
            const newProps = __spreadProps(__spreadValues({}, currentProps), {
              [fieldName]: value
            });
            if (itemSelector) {
              const replaceActionData = {
                type: "replace",
                destinationIndex: itemSelector.index,
                destinationZone: itemSelector.zone || rootDroppableId,
                data: __spreadProps(__spreadValues({}, selectedItem), { props: newProps })
              };
              const replacedData = replaceAction(data, replaceActionData);
              const setActionData = {
                type: "set",
                state: {
                  data: __spreadValues(__spreadValues({}, data), replacedData),
                  ui: __spreadValues(__spreadValues({}, ui), updatedUi)
                }
              };
              if ((_a2 = config.components[selectedItem.type]) == null ? void 0 : _a2.resolveData) {
                resolveData(setAction(state, setActionData));
              } else {
                dispatch(__spreadProps(__spreadValues({}, setActionData), {
                  recordHistory: true
                }));
              }
            } else {
              if (data.root.props) {
                if ((_b2 = config.root) == null ? void 0 : _b2.resolveData) {
                  resolveData({
                    ui: __spreadValues(__spreadValues({}, ui), updatedUi),
                    data: __spreadProps(__spreadValues({}, data), {
                      root: { props: newProps }
                    })
                  });
                } else {
                  dispatch({
                    type: "set",
                    state: {
                      ui: __spreadValues(__spreadValues({}, ui), updatedUi),
                      data: __spreadProps(__spreadValues({}, data), {
                        root: { props: newProps }
                      })
                    },
                    recordHistory: true
                  });
                }
              } else {
                dispatch({
                  type: "setData",
                  data: { root: newProps }
                });
              }
            }
          };
          if (selectedItem && itemSelector) {
            const { readOnly = {} } = selectedItem;
            const { edit } = getPermissions({
              item: selectedItem
            });
            const id = `${selectedItem.props.id}_${field.type}_${fieldName}`;
            return /* @__PURE__ */ jsx27("div", { className: getClassName21("field"), children: /* @__PURE__ */ jsx27(
              AutoFieldPrivate,
              {
                field,
                name: fieldName,
                id,
                readOnly: !edit || readOnly[fieldName],
                value: selectedItem.props[fieldName],
                onChange
              }
            ) }, id);
          } else {
            const readOnly = data.root.readOnly || {};
            const { edit } = getPermissions({
              root: true
            });
            const id = `root_${field.type}_${fieldName}`;
            return /* @__PURE__ */ jsx27("div", { className: getClassName21("field"), children: /* @__PURE__ */ jsx27(
              AutoFieldPrivate,
              {
                field,
                name: fieldName,
                id,
                readOnly: !edit || readOnly[fieldName],
                value: rootProps[fieldName],
                onChange
              }
            ) }, id);
          }
        }) }),
        isLoading && /* @__PURE__ */ jsx27("div", { className: getClassName21("loadingOverlay"), children: /* @__PURE__ */ jsx27("div", { className: getClassName21("loadingOverlayInner"), children: /* @__PURE__ */ jsx27(Loader, { size: 16 }) }) })
      ]
    }
  );
};

// lib/use-component-list.tsx
import { useEffect as useEffect18, useState as useState20 } from "react";

// css-module:/home/dev/Masaüstü/projeler/punk-turkish/components/ComponentList/styles.module.css#css-module
var styles_module_default17 = { "ComponentList": "_ComponentList_odh9d_1", "ComponentList--isExpanded": "_ComponentList--isExpanded_odh9d_5", "ComponentList-content": "_ComponentList-content_odh9d_9", "ComponentList-title": "_ComponentList-title_odh9d_17", "ComponentList-titleIcon": "_ComponentList-titleIcon_odh9d_53" };

// components/ComponentList/index.tsx
import { jsx as jsx28, jsxs as jsxs15 } from "react/jsx-runtime";
var getClassName22 = get_class_name_factory_default("ComponentList", styles_module_default17);
var ComponentListItem = ({
  name,
  label
}) => {
  const { overrides, getPermissions } = useAppContext();
  const canInsert = getPermissions({
    type: name
  }).insert;
  return /* @__PURE__ */ jsx28(Drawer.Item, { label, name, isDragDisabled: !canInsert, children: overrides.componentItem });
};
var ComponentList = ({
  children,
  title,
  id
}) => {
  const { config, state, setUi } = useAppContext();
  const { expanded = true } = state.ui.componentList[id] || {};
  return /* @__PURE__ */ jsxs15("div", { className: getClassName22({ isExpanded: expanded }), children: [
    title && /* @__PURE__ */ jsxs15(
      "button",
      {
        type: "button",
        className: getClassName22("title"),
        onClick: () => setUi({
          componentList: __spreadProps(__spreadValues({}, state.ui.componentList), {
            [id]: __spreadProps(__spreadValues({}, state.ui.componentList[id]), {
              expanded: !expanded
            })
          })
        }),
        title: expanded ? `Collapse${title ? ` ${title}` : ""}` : `Expand${title ? ` ${title}` : ""}`,
        children: [
          /* @__PURE__ */ jsx28("div", { children: title }),
          /* @__PURE__ */ jsx28("div", { className: getClassName22("titleIcon"), children: expanded ? /* @__PURE__ */ jsx28(ChevronUp, { size: 12 }) : /* @__PURE__ */ jsx28(ChevronDown, { size: 12 }) })
        ]
      }
    ),
    /* @__PURE__ */ jsx28("div", { className: getClassName22("content"), children: /* @__PURE__ */ jsx28(Drawer, { children: children || Object.keys(config.components).map((componentKey) => {
      var _a;
      return /* @__PURE__ */ jsx28(
        ComponentListItem,
        {
          label: (_a = config.components[componentKey]["label"]) != null ? _a : componentKey,
          name: componentKey
        },
        componentKey
      );
    }) }) })
  ] });
};
ComponentList.Item = ComponentListItem;

// lib/use-component-list.tsx
import { jsx as jsx29 } from "react/jsx-runtime";
var useComponentList = (config, ui) => {
  const [componentList, setComponentList] = useState20();
  useEffect18(() => {
    var _a, _b, _c;
    if (Object.keys(ui.componentList).length > 0) {
      const matchedComponents = [];
      let _componentList;
      _componentList = Object.entries(ui.componentList).map(
        ([categoryKey, category]) => {
          if (category.visible === false || !category.components) {
            return null;
          }
          return /* @__PURE__ */ jsx29(
            ComponentList,
            {
              id: categoryKey,
              title: category.title || categoryKey,
              children: category.components.map((componentName, i) => {
                var _a2;
                matchedComponents.push(componentName);
                const componentConf = config.components[componentName] || {};
                return /* @__PURE__ */ jsx29(
                  ComponentList.Item,
                  {
                    label: (_a2 = componentConf["label"]) != null ? _a2 : componentName,
                    name: componentName,
                    index: i
                  },
                  componentName
                );
              })
            },
            categoryKey
          );
        }
      );
      const remainingComponents = Object.keys(config.components).filter(
        (component) => matchedComponents.indexOf(component) === -1
      );
      if (remainingComponents.length > 0 && !((_a = ui.componentList.other) == null ? void 0 : _a.components) && ((_b = ui.componentList.other) == null ? void 0 : _b.visible) !== false) {
        _componentList.push(
          /* @__PURE__ */ jsx29(
            ComponentList,
            {
              id: "other",
              title: ((_c = ui.componentList.other) == null ? void 0 : _c.title) || "Other",
              children: remainingComponents.map((componentName, i) => {
                var _a2;
                const componentConf = config.components[componentName] || {};
                return /* @__PURE__ */ jsx29(
                  ComponentList.Item,
                  {
                    name: componentName,
                    label: (_a2 = componentConf["label"]) != null ? _a2 : componentName,
                    index: i
                  },
                  componentName
                );
              })
            },
            "other"
          )
        );
      }
      setComponentList(_componentList);
    }
  }, [config.categories, config.components, ui.componentList]);
  return componentList;
};

// components/Puck/components/Components/index.tsx
import { useMemo as useMemo13 } from "react";
import { jsx as jsx30 } from "react/jsx-runtime";
var Components = () => {
  const { config, state, overrides } = useAppContext();
  const componentList = useComponentList(config, state.ui);
  const Wrapper = useMemo13(() => overrides.components || "div", [overrides]);
  return /* @__PURE__ */ jsx30(Wrapper, { children: componentList ? componentList : /* @__PURE__ */ jsx30(ComponentList, { id: "all" }) });
};

// components/Puck/components/Preview/index.tsx
import { useCallback as useCallback14, useEffect as useEffect20, useRef as useRef7, useMemo as useMemo14 } from "react";

// components/AutoFrame/index.tsx
import {
  createContext as createContext5,
  useContext as useContext10,
  useEffect as useEffect19,
  useState as useState21
} from "react";
import hash from "object-hash";
import { createPortal as createPortal3 } from "react-dom";
import { Fragment as Fragment9, jsx as jsx31 } from "react/jsx-runtime";
var styleSelector = 'style, link[rel="stylesheet"]';
var collectStyles = (doc) => {
  const collected = [];
  doc.querySelectorAll(styleSelector).forEach((style) => {
    collected.push(style);
  });
  return collected;
};
var getStyleSheet = (el) => {
  return Array.from(document.styleSheets).find((ss) => {
    const ownerNode = ss.ownerNode;
    return ownerNode.href === el.href;
  });
};
var getStyles = (styleSheet) => {
  if (styleSheet) {
    try {
      return [...styleSheet.cssRules].map((rule) => rule.cssText).join("");
    } catch (e) {
      console.warn(
        "Access to stylesheet %s is denied. Ignoring\u2026",
        styleSheet.href
      );
    }
  }
  return "";
};
var syncAttributes = (sourceElement, targetElement) => {
  const attributes = sourceElement.attributes;
  if ((attributes == null ? void 0 : attributes.length) > 0) {
    Array.from(attributes).forEach((attribute) => {
      targetElement.setAttribute(attribute.name, attribute.value);
    });
  }
};
var defer = (fn) => setTimeout(fn, 0);
var CopyHostStyles = ({
  children,
  debug = false,
  onStylesLoaded = () => null
}) => {
  const { document: doc, window: win } = useFrame();
  useEffect19(() => {
    if (!win || !doc) {
      return () => {
      };
    }
    let elements = [];
    const hashes = {};
    const lookupEl = (el) => elements.findIndex((elementMap) => elementMap.original === el);
    const mirrorEl = (el, inlineStyles = false) => __async(void 0, null, function* () {
      let mirror;
      if (el.nodeName === "LINK" && inlineStyles) {
        mirror = document.createElement("style");
        mirror.type = "text/css";
        let styleSheet = getStyleSheet(el);
        if (!styleSheet) {
          yield new Promise((resolve) => {
            const fn = () => {
              resolve();
              el.removeEventListener("load", fn);
            };
            el.addEventListener("load", fn);
          });
          styleSheet = getStyleSheet(el);
        }
        const styles2 = getStyles(styleSheet);
        if (!styles2) {
          if (debug) {
            console.warn(
              `Tried to load styles for link element, but couldn't find them. Skipping...`
            );
          }
          return;
        }
        mirror.innerHTML = styles2;
        mirror.setAttribute("data-href", el.getAttribute("href"));
      } else {
        mirror = el.cloneNode(true);
      }
      return mirror;
    });
    const addEl = (el) => __async(void 0, null, function* () {
      const index = lookupEl(el);
      if (index > -1) {
        if (debug)
          console.log(
            `Tried to add an element that was already mirrored. Updating instead...`
          );
        elements[index].mirror.innerText = el.innerText;
        return;
      }
      const mirror = yield mirrorEl(el);
      if (!mirror) {
        return;
      }
      const elHash = hash(mirror.outerHTML);
      if (hashes[elHash]) {
        if (debug)
          console.log(
            `iframe already contains element that is being mirrored. Skipping...`
          );
        return;
      }
      hashes[elHash] = true;
      doc.head.append(mirror);
      elements.push({ original: el, mirror });
      if (debug) console.log(`Added style node ${el.outerHTML}`);
    });
    const removeEl = (el) => {
      var _a, _b;
      const index = lookupEl(el);
      if (index === -1) {
        if (debug)
          console.log(
            `Tried to remove an element that did not exist. Skipping...`
          );
        return;
      }
      const elHash = hash(el.outerHTML);
      (_b = (_a = elements[index]) == null ? void 0 : _a.mirror) == null ? void 0 : _b.remove();
      delete hashes[elHash];
      if (debug) console.log(`Removed style node ${el.outerHTML}`);
    };
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === "childList") {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === Node.TEXT_NODE || node.nodeType === Node.ELEMENT_NODE) {
              const el = node.nodeType === Node.TEXT_NODE ? node.parentElement : node;
              if (el && el.matches(styleSelector)) {
                defer(() => addEl(el));
              }
            }
          });
          mutation.removedNodes.forEach((node) => {
            if (node.nodeType === Node.TEXT_NODE || node.nodeType === Node.ELEMENT_NODE) {
              const el = node.nodeType === Node.TEXT_NODE ? node.parentElement : node;
              if (el && el.matches(styleSelector)) {
                defer(() => removeEl(el));
              }
            }
          });
        }
      });
    });
    const parentDocument = win.parent.document;
    const collectedStyles = collectStyles(parentDocument);
    const hrefs = [];
    let stylesLoaded = 0;
    const parentHtml = parentDocument.getElementsByTagName("html")[0];
    syncAttributes(parentHtml, doc.documentElement);
    const parentBody = parentDocument.getElementsByTagName("body")[0];
    syncAttributes(parentBody, doc.body);
    Promise.all(
      collectedStyles.map((styleNode, i) => __async(void 0, null, function* () {
        if (styleNode.nodeName === "LINK") {
          const linkHref = styleNode.href;
          if (hrefs.indexOf(linkHref) > -1) {
            return;
          }
          hrefs.push(linkHref);
        }
        const mirror = yield mirrorEl(styleNode);
        if (!mirror) return;
        elements.push({ original: styleNode, mirror });
        return mirror;
      }))
    ).then((mirrorStyles) => {
      const filtered = mirrorStyles.filter(
        (el) => typeof el !== "undefined"
      );
      filtered.forEach((mirror) => {
        mirror.onload = () => {
          stylesLoaded = stylesLoaded + 1;
          if (stylesLoaded >= elements.length) {
            onStylesLoaded();
          }
        };
        mirror.onerror = () => {
          console.warn(`AutoFrame couldn't load a stylesheet`);
          stylesLoaded = stylesLoaded + 1;
          if (stylesLoaded >= elements.length) {
            onStylesLoaded();
          }
        };
      });
      doc.head.innerHTML = "";
      doc.head.append(...filtered);
      observer.observe(parentDocument.head, { childList: true, subtree: true });
      filtered.forEach((el) => {
        const elHash = hash(el.outerHTML);
        hashes[elHash] = true;
      });
    });
    return () => {
      observer.disconnect();
    };
  }, []);
  return /* @__PURE__ */ jsx31(Fragment9, { children });
};
var autoFrameContext = createContext5({});
var useFrame = () => useContext10(autoFrameContext);
function AutoFrame(_a) {
  var _b = _a, {
    children,
    className,
    debug,
    id,
    onStylesLoaded,
    frameRef
  } = _b, props = __objRest(_b, [
    "children",
    "className",
    "debug",
    "id",
    "onStylesLoaded",
    "frameRef"
  ]);
  const [loaded, setLoaded] = useState21(false);
  const [ctx, setCtx] = useState21({});
  const [mountTarget, setMountTarget] = useState21();
  useEffect19(() => {
    var _a2;
    if (frameRef.current) {
      setCtx({
        document: frameRef.current.contentDocument || void 0,
        window: frameRef.current.contentWindow || void 0
      });
      setMountTarget(
        (_a2 = frameRef.current.contentDocument) == null ? void 0 : _a2.getElementById("frame-root")
      );
    }
  }, [frameRef, loaded]);
  return /* @__PURE__ */ jsx31(
    "iframe",
    __spreadProps(__spreadValues({}, props), {
      className,
      id,
      srcDoc: '<!DOCTYPE html><html><head></head><body><div id="frame-root" data-puck-entry></div></body></html>',
      ref: frameRef,
      onLoad: () => {
        setLoaded(true);
      },
      children: /* @__PURE__ */ jsx31(autoFrameContext.Provider, { value: ctx, children: loaded && mountTarget && /* @__PURE__ */ jsx31(CopyHostStyles, { debug, onStylesLoaded, children: createPortal3(children, mountTarget) }) })
    })
  );
}
AutoFrame.displayName = "AutoFrame";
var AutoFrame_default = AutoFrame;

// css-module:/home/dev/Masaüstü/projeler/punk-turkish/components/Puck/components/Preview/styles.module.css#css-module
var styles_module_default18 = { "PuckPreview": "_PuckPreview_z2rgu_1", "PuckPreview-frame": "_PuckPreview-frame_z2rgu_6" };

// components/Render/index.tsx
import { jsx as jsx32 } from "react/jsx-runtime";
function Render({
  config,
  data
}) {
  var _a;
  const defaultedData = __spreadProps(__spreadValues({}, data), {
    root: data.root || {},
    content: data.content || []
  });
  const rootProps = defaultedData.root.props || defaultedData.root;
  const title = (rootProps == null ? void 0 : rootProps.title) || "";
  if ((_a = config.root) == null ? void 0 : _a.render) {
    return /* @__PURE__ */ jsx32(
      DropZoneProvider,
      {
        value: {
          data: defaultedData,
          config,
          mode: "render",
          depth: 0,
          path: []
        },
        children: /* @__PURE__ */ jsx32(
          config.root.render,
          __spreadProps(__spreadValues({}, rootProps), {
            puck: {
              renderDropZone: DropZone,
              isEditing: false
            },
            title,
            editMode: false,
            id: "puck-root",
            children: /* @__PURE__ */ jsx32(DropZone, { zone: rootDroppableId })
          })
        )
      }
    );
  }
  return /* @__PURE__ */ jsx32(
    DropZoneProvider,
    {
      value: {
        data: defaultedData,
        config,
        mode: "render",
        depth: 0,
        path: []
      },
      children: /* @__PURE__ */ jsx32(DropZone, { zone: rootDroppableId })
    }
  );
}

// components/Puck/components/Preview/index.tsx
import { Fragment as Fragment10, jsx as jsx33 } from "react/jsx-runtime";
var getClassName23 = get_class_name_factory_default("PuckPreview", styles_module_default18);
var useBubbleIframeEvents = (ref) => {
  const { status } = useAppContext();
  useEffect20(() => {
    var _a;
    if (ref.current && status === "READY") {
      const iframe = ref.current;
      class BubbledPointerEventClass extends PointerEvent {
        constructor(type, data) {
          super(type, data);
          this.originalTarget = data.originalTarget;
        }
      }
      const handlePointerMove = (event) => {
        const evt = new BubbledPointerEventClass("pointermove", __spreadProps(__spreadValues({}, event), {
          bubbles: true,
          cancelable: false,
          clientX: event.clientX,
          clientY: event.clientY,
          originalTarget: event.target
        }));
        iframe.dispatchEvent(evt);
      };
      (_a = iframe.contentDocument) == null ? void 0 : _a.addEventListener(
        "pointermove",
        handlePointerMove,
        {
          capture: true
        }
      );
      return () => {
        var _a2;
        (_a2 = iframe.contentDocument) == null ? void 0 : _a2.removeEventListener(
          "pointermove",
          handlePointerMove
        );
      };
    }
  }, [status]);
};
var Preview2 = ({ id = "puck-preview" }) => {
  const { config, dispatch, state, setStatus, iframe, overrides } = useAppContext();
  const Page = useCallback14(
    (pageProps) => {
      var _a, _b;
      return ((_a = config.root) == null ? void 0 : _a.render) ? (_b = config.root) == null ? void 0 : _b.render(__spreadValues({
        id: "puck-root"
      }, pageProps)) : /* @__PURE__ */ jsx33(Fragment10, { children: pageProps.children });
    },
    [config.root]
  );
  const Frame = useMemo14(() => overrides.iframe, [overrides]);
  const rootProps = state.data.root.props || state.data.root;
  const ref = useRef7(null);
  useBubbleIframeEvents(ref);
  const inner = state.ui.previewMode === "edit" ? /* @__PURE__ */ jsx33(
    Page,
    __spreadProps(__spreadValues({}, rootProps), {
      puck: {
        renderDropZone: DropZone,
        isEditing: true,
        dragRef: null
      },
      editMode: true,
      children: /* @__PURE__ */ jsx33(DropZone, { zone: rootDroppableId })
    })
  ) : /* @__PURE__ */ jsx33(Render, { data: state.data, config });
  return /* @__PURE__ */ jsx33(
    "div",
    {
      className: getClassName23(),
      id,
      "data-puck-preview": true,
      onClick: () => {
        dispatch({ type: "setUi", ui: __spreadProps(__spreadValues({}, state.ui), { itemSelector: null }) });
      },
      children: iframe.enabled ? /* @__PURE__ */ jsx33(
        AutoFrame_default,
        {
          id: "preview-frame",
          className: getClassName23("frame"),
          "data-rfd-iframe": true,
          onStylesLoaded: () => {
            setStatus("READY");
          },
          frameRef: ref,
          children: /* @__PURE__ */ jsx33(autoFrameContext.Consumer, { children: ({ document: document2 }) => {
            if (Frame) {
              return /* @__PURE__ */ jsx33(Frame, { document: document2, children: inner });
            }
            return inner;
          } })
        }
      ) : /* @__PURE__ */ jsx33(
        "div",
        {
          id: "preview-frame",
          className: getClassName23("frame"),
          ref,
          "data-puck-entry": true,
          children: inner
        }
      )
    }
  );
};

// lib/find-zones-for-area.ts
var findZonesForArea = (data, area) => {
  const { zones = {} } = data;
  const result = Object.keys(zones).filter(
    (zoneId) => getZoneId(zoneId)[0] === area
  );
  return result.reduce((acc, key) => {
    return __spreadProps(__spreadValues({}, acc), { [key]: zones[key] });
  }, {});
};

// lib/area-contains-zones.ts
var areaContainsZones = (data, area) => {
  const zones = Object.keys(findZonesForArea(data, area));
  return zones.length > 0;
};

// css-module:/home/dev/Masaüstü/projeler/punk-turkish/components/LayerTree/styles.module.css#css-module
var styles_module_default19 = { "LayerTree": "_LayerTree_1pgw8_1", "LayerTree-zoneTitle": "_LayerTree-zoneTitle_1pgw8_11", "LayerTree-helper": "_LayerTree-helper_1pgw8_17", "Layer": "_Layer_1pgw8_1", "Layer-inner": "_Layer-inner_1pgw8_29", "Layer--containsZone": "_Layer--containsZone_1pgw8_35", "Layer-clickable": "_Layer-clickable_1pgw8_39", "Layer--isSelected": "_Layer--isSelected_1pgw8_61", "Layer-chevron": "_Layer-chevron_1pgw8_77", "Layer--childIsSelected": "_Layer--childIsSelected_1pgw8_78", "Layer-zones": "_Layer-zones_1pgw8_82", "Layer-title": "_Layer-title_1pgw8_96", "Layer-name": "_Layer-name_1pgw8_105", "Layer-icon": "_Layer-icon_1pgw8_111", "Layer-zoneIcon": "_Layer-zoneIcon_1pgw8_116" };

// lib/scroll-into-view.ts
var scrollIntoView = (el) => {
  const oldStyle = __spreadValues({}, el.style);
  el.style.scrollMargin = "256px";
  if (el) {
    el == null ? void 0 : el.scrollIntoView({ behavior: "smooth" });
    el.style.scrollMargin = oldStyle.scrollMargin || "";
  }
};

// components/LayerTree/index.tsx
import { useContext as useContext11 } from "react";

// lib/is-child-of-zone.ts
var isChildOfZone = (item, maybeChild, ctx) => {
  var _a;
  const { data, pathData = {} } = ctx || {};
  return maybeChild && data ? !!((_a = pathData[maybeChild.props.id]) == null ? void 0 : _a.path.find((zoneCompound) => {
    const [area] = getZoneId(zoneCompound);
    return area === item.props.id;
  })) : false;
};

// lib/on-scroll-end.ts
var onScrollEnd = (frame, cb) => {
  let scrollTimeout;
  const callback = function() {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(function() {
      cb();
      frame == null ? void 0 : frame.removeEventListener("scroll", callback);
    }, 50);
  };
  frame == null ? void 0 : frame.addEventListener("scroll", callback);
  setTimeout(() => {
    if (!scrollTimeout) {
      cb();
    }
  }, 50);
};

// components/LayerTree/index.tsx
import { Fragment as Fragment11, jsx as jsx34, jsxs as jsxs16 } from "react/jsx-runtime";
var getClassName24 = get_class_name_factory_default("LayerTree", styles_module_default19);
var getClassNameLayer = get_class_name_factory_default("Layer", styles_module_default19);
var LayerTree = ({
  data,
  config,
  zoneContent,
  itemSelector,
  setItemSelector,
  zone,
  label
}) => {
  const zones = data.zones || {};
  const ctx = useContext11(dropZoneContext);
  return /* @__PURE__ */ jsxs16(Fragment11, { children: [
    label && /* @__PURE__ */ jsxs16("div", { className: getClassName24("zoneTitle"), children: [
      /* @__PURE__ */ jsx34("div", { className: getClassName24("zoneIcon"), children: /* @__PURE__ */ jsx34(Layers, { size: "16" }) }),
      " ",
      label
    ] }),
    /* @__PURE__ */ jsxs16("ul", { className: getClassName24(), children: [
      zoneContent.length === 0 && /* @__PURE__ */ jsx34("div", { className: getClassName24("helper"), children: "\u0130\xE7erik yok" }),
      zoneContent.map((item, i) => {
        var _a;
        const isSelected = (itemSelector == null ? void 0 : itemSelector.index) === i && (itemSelector.zone === zone || itemSelector.zone === rootDroppableId && !zone);
        const zonesForItem = findZonesForArea(data, item.props.id);
        const containsZone = Object.keys(zonesForItem).length > 0;
        const { setHoveringComponent = () => {
        }, hoveringComponent } = ctx || {};
        const selectedItem = itemSelector && data ? getItem(itemSelector, data) : null;
        const isHovering = hoveringComponent === item.props.id;
        const childIsSelected = isChildOfZone(item, selectedItem, ctx);
        const componentConfig = config.components[item.type];
        const label2 = (_a = componentConfig == null ? void 0 : componentConfig["label"]) != null ? _a : item.type.toString();
        return /* @__PURE__ */ jsxs16(
          "li",
          {
            className: getClassNameLayer({
              isSelected,
              isHovering,
              containsZone,
              childIsSelected
            }),
            children: [
              /* @__PURE__ */ jsx34("div", { className: getClassNameLayer("inner"), children: /* @__PURE__ */ jsxs16(
                "button",
                {
                  type: "button",
                  className: getClassNameLayer("clickable"),
                  onClick: () => {
                    if (isSelected) {
                      setItemSelector(null);
                      return;
                    }
                    const id = zoneContent[i].props.id;
                    const frame = getFrame();
                    const el = frame == null ? void 0 : frame.querySelector(
                      `[data-puck-component="${id}"]`
                    );
                    if (!el) {
                      console.error(
                        "Scroll failed. No element was found for",
                        id
                      );
                      return;
                    }
                    scrollIntoView(el);
                    onScrollEnd(frame, () => {
                      setItemSelector({
                        index: i,
                        zone
                      });
                    });
                  },
                  onMouseOver: (e) => {
                    e.stopPropagation();
                    setHoveringComponent(item.props.id);
                  },
                  onMouseOut: (e) => {
                    e.stopPropagation();
                    setHoveringComponent(null);
                  },
                  children: [
                    containsZone && /* @__PURE__ */ jsx34(
                      "div",
                      {
                        className: getClassNameLayer("chevron"),
                        title: isSelected ? "Collapse" : "Expand",
                        children: /* @__PURE__ */ jsx34(ChevronDown, { size: "12" })
                      }
                    ),
                    /* @__PURE__ */ jsxs16("div", { className: getClassNameLayer("title"), children: [
                      /* @__PURE__ */ jsx34("div", { className: getClassNameLayer("icon"), children: item.type === "Text" || item.type === "Heading" ? /* @__PURE__ */ jsx34(Type, { size: "16" }) : /* @__PURE__ */ jsx34(LayoutGrid, { size: "16" }) }),
                      /* @__PURE__ */ jsx34("div", { className: getClassNameLayer("name"), children: label2 })
                    ] })
                  ]
                }
              ) }),
              containsZone && Object.keys(zonesForItem).map((zoneKey, idx) => /* @__PURE__ */ jsx34("div", { className: getClassNameLayer("zones"), children: /* @__PURE__ */ jsx34(
                LayerTree,
                {
                  config,
                  data,
                  zoneContent: zones[zoneKey],
                  setItemSelector,
                  itemSelector,
                  zone: zoneKey,
                  label: getZoneId(zoneKey)[1]
                }
              ) }, idx))
            ]
          },
          `${item.props.id}_${i}`
        );
      })
    ] })
  ] });
};

// components/Puck/components/Outline/index.tsx
import { useCallback as useCallback15, useMemo as useMemo15 } from "react";
import { Fragment as Fragment12, jsx as jsx35, jsxs as jsxs17 } from "react/jsx-runtime";
var Outline = () => {
  const { dispatch, state, overrides, config } = useAppContext();
  const { data, ui } = state;
  const { itemSelector } = ui;
  const setItemSelector = useCallback15(
    (newItemSelector) => {
      dispatch({
        type: "setUi",
        ui: { itemSelector: newItemSelector }
      });
    },
    []
  );
  const Wrapper = useMemo15(() => overrides.outline || "div", [overrides]);
  return /* @__PURE__ */ jsx35(Wrapper, { children: /* @__PURE__ */ jsx35(dropZoneContext.Consumer, { children: (ctx) => /* @__PURE__ */ jsxs17(Fragment12, { children: [
    (ctx == null ? void 0 : ctx.activeZones) && (ctx == null ? void 0 : ctx.activeZones[rootDroppableId]) && /* @__PURE__ */ jsx35(
      LayerTree,
      {
        config,
        data,
        label: areaContainsZones(data, "root") ? rootDroppableId : "",
        zoneContent: data.content,
        setItemSelector,
        itemSelector
      }
    ),
    Object.entries(findZonesForArea(data, "root")).map(
      ([zoneKey, zone]) => {
        return /* @__PURE__ */ jsx35(
          LayerTree,
          {
            config,
            data,
            label: zoneKey,
            zone: zoneKey,
            zoneContent: zone,
            setItemSelector,
            itemSelector
          },
          zoneKey
        );
      }
    )
  ] }) }) });
};

// lib/use-puck-history.ts
import { useHotkeys } from "react-hotkeys-hook";
function usePuckHistory({
  dispatch,
  initialAppState,
  historyStore,
  iframeEnabled
}) {
  const back = () => {
    var _a;
    if (historyStore.hasPast) {
      dispatch({
        type: "set",
        state: ((_a = historyStore.prevHistory) == null ? void 0 : _a.state) || initialAppState
      });
      historyStore.back();
    }
  };
  const forward = () => {
    if (historyStore.nextHistory) {
      dispatch({ type: "set", state: historyStore.nextHistory.state });
      historyStore.forward();
    }
  };
  const backIframe = () => {
    if (iframeEnabled) {
      back();
    }
  };
  const forwardIframe = () => {
    if (iframeEnabled) {
      forward();
    }
  };
  const setHistories = (histories) => {
    var _a;
    dispatch({
      type: "set",
      state: ((_a = histories[histories.length - 1]) == null ? void 0 : _a.state) || initialAppState
    });
    historyStore.setHistories(histories);
  };
  const setHistoryIndex = (index) => {
    var _a;
    if (historyStore.histories.length > index) {
      dispatch({
        type: "set",
        state: ((_a = historyStore.histories[index]) == null ? void 0 : _a.state) || initialAppState
      });
      historyStore.setHistoryIndex(index);
    }
  };
  const frame = getFrame();
  const resolvedFrame = typeof window !== "undefined" && frame !== document ? frame : void 0;
  useHotkeys("meta+z", back, { preventDefault: true });
  useHotkeys("meta+shift+z", forward, { preventDefault: true });
  useHotkeys("meta+y", forward, { preventDefault: true });
  useHotkeys("meta+z", backIframe, {
    preventDefault: true,
    document: resolvedFrame
  });
  useHotkeys("meta+shift+z", forwardIframe, {
    preventDefault: true,
    document: resolvedFrame
  });
  useHotkeys("meta+y", forwardIframe, {
    preventDefault: true,
    document: resolvedFrame
  });
  return {
    back,
    forward,
    historyStore,
    setHistories,
    setHistoryIndex
  };
}

// lib/use-history-store.ts
import { useState as useState22 } from "react";
import { useDebouncedCallback as useDebouncedCallback3 } from "use-debounce";
var EMPTY_HISTORY_INDEX = 0;
function useHistoryStore(initialHistory) {
  var _a, _b;
  const [histories, setHistories] = useState22(
    (_a = initialHistory == null ? void 0 : initialHistory.histories) != null ? _a : []
  );
  const updateHistories = (histories2) => {
    setHistories(histories2);
    setIndex(histories2.length - 1);
  };
  const [index, setIndex] = useState22(
    (_b = initialHistory == null ? void 0 : initialHistory.index) != null ? _b : EMPTY_HISTORY_INDEX
  );
  const hasPast = index > EMPTY_HISTORY_INDEX;
  const hasFuture = index < histories.length - 1;
  const currentHistory = histories[index];
  const nextHistory = hasFuture ? histories[index + 1] : null;
  const prevHistory = hasPast ? histories[index - 1] : null;
  const record = useDebouncedCallback3((state) => {
    const history = {
      state,
      id: generateId("history")
    };
    updateHistories([...histories.slice(0, index + 1), history]);
  }, 250);
  const back = () => {
    setIndex(index - 1);
  };
  const forward = () => {
    setIndex(index + 1);
  };
  return {
    index,
    currentHistory,
    hasPast,
    hasFuture,
    record,
    back,
    forward,
    nextHistory,
    prevHistory,
    histories,
    setHistories: updateHistories,
    setHistoryIndex: setIndex
  };
}

// node_modules/tiny-invariant/dist/esm/tiny-invariant.js
var isProduction = process.env.NODE_ENV === "production";
var prefix = "Invariant failed";
function invariant(condition, message) {
  if (condition) {
    return;
  }
  if (isProduction) {
    throw new Error(prefix);
  }
  var provided = typeof message === "function" ? message() : message;
  var value = provided ? "".concat(prefix, ": ").concat(provided) : prefix;
  throw new Error(value);
}

// node_modules/css-box-model/dist/css-box-model.esm.js
var getRect = function getRect2(_ref) {
  var top = _ref.top, right = _ref.right, bottom = _ref.bottom, left = _ref.left;
  var width = right - left;
  var height = bottom - top;
  var rect = {
    top,
    right,
    bottom,
    left,
    width,
    height,
    x: left,
    y: top,
    center: {
      x: (right + left) / 2,
      y: (bottom + top) / 2
    }
  };
  return rect;
};
var expand = function expand2(target, expandBy) {
  return {
    top: target.top - expandBy.top,
    left: target.left - expandBy.left,
    bottom: target.bottom + expandBy.bottom,
    right: target.right + expandBy.right
  };
};
var shrink = function shrink2(target, shrinkBy) {
  return {
    top: target.top + shrinkBy.top,
    left: target.left + shrinkBy.left,
    bottom: target.bottom - shrinkBy.bottom,
    right: target.right - shrinkBy.right
  };
};
var noSpacing = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
};
var createBox = function createBox2(_ref2) {
  var borderBox = _ref2.borderBox, _ref2$margin = _ref2.margin, margin = _ref2$margin === void 0 ? noSpacing : _ref2$margin, _ref2$border = _ref2.border, border = _ref2$border === void 0 ? noSpacing : _ref2$border, _ref2$padding = _ref2.padding, padding = _ref2$padding === void 0 ? noSpacing : _ref2$padding;
  var marginBox = getRect(expand(borderBox, margin));
  var paddingBox = getRect(shrink(borderBox, border));
  var contentBox = getRect(shrink(paddingBox, padding));
  return {
    marginBox,
    borderBox: getRect(borderBox),
    paddingBox,
    contentBox,
    margin,
    border,
    padding
  };
};
var parse = function parse2(raw) {
  var value = raw.slice(0, -2);
  var suffix = raw.slice(-2);
  if (suffix !== "px") {
    return 0;
  }
  var result = Number(value);
  !!isNaN(result) ? process.env.NODE_ENV !== "production" ? invariant(false, "Could not parse value [raw: " + raw + ", without suffix: " + value + "]") : invariant(false) : void 0;
  return result;
};
var calculateBox = function calculateBox2(borderBox, styles2) {
  var margin = {
    top: parse(styles2.marginTop),
    right: parse(styles2.marginRight),
    bottom: parse(styles2.marginBottom),
    left: parse(styles2.marginLeft)
  };
  var padding = {
    top: parse(styles2.paddingTop),
    right: parse(styles2.paddingRight),
    bottom: parse(styles2.paddingBottom),
    left: parse(styles2.paddingLeft)
  };
  var border = {
    top: parse(styles2.borderTopWidth),
    right: parse(styles2.borderRightWidth),
    bottom: parse(styles2.borderBottomWidth),
    left: parse(styles2.borderLeftWidth)
  };
  return createBox({
    borderBox,
    margin,
    padding,
    border
  });
};
var getBox = function getBox2(el) {
  var borderBox = el.getBoundingClientRect();
  var styles2 = window.getComputedStyle(el);
  return calculateBox(borderBox, styles2);
};

// components/Puck/components/Canvas/index.tsx
import {
  useCallback as useCallback16,
  useEffect as useEffect22,
  useMemo as useMemo17,
  useRef as useRef8,
  useState as useState24
} from "react";

// components/ViewportControls/index.tsx
import { useEffect as useEffect21, useMemo as useMemo16, useState as useState23 } from "react";

// css-module:/home/dev/Masaüstü/projeler/punk-turkish/components/ViewportControls/styles.module.css#css-module
var styles_module_default20 = { "ViewportControls": "_ViewportControls_g1wgg_1", "ViewportControls-divider": "_ViewportControls-divider_g1wgg_15", "ViewportControls-zoomSelect": "_ViewportControls-zoomSelect_g1wgg_21", "ViewportButton--isActive": "_ViewportButton--isActive_g1wgg_34", "ViewportButton-inner": "_ViewportButton-inner_g1wgg_34" };

// components/ViewportControls/index.tsx
import { jsx as jsx36, jsxs as jsxs18 } from "react/jsx-runtime";
var icons = {
  Smartphone: /* @__PURE__ */ jsx36(Smartphone, { size: 16 }),
  Tablet: /* @__PURE__ */ jsx36(Tablet, { size: 16 }),
  Monitor: /* @__PURE__ */ jsx36(Monitor, { size: 16 })
};
var getClassName25 = get_class_name_factory_default("ViewportControls", styles_module_default20);
var getClassNameButton = get_class_name_factory_default("ViewportButton", styles_module_default20);
var ViewportButton = ({
  children,
  height = "auto",
  title,
  width,
  onClick
}) => {
  const { state } = useAppContext();
  const [isActive, setIsActive] = useState23(false);
  useEffect21(() => {
    setIsActive(width === state.ui.viewports.current.width);
  }, [width, state.ui.viewports.current.width]);
  return /* @__PURE__ */ jsx36("span", { className: getClassNameButton({ isActive }), children: /* @__PURE__ */ jsx36(
    IconButton,
    {
      title,
      disabled: isActive,
      onClick: (e) => {
        e.stopPropagation();
        onClick({ width, height });
      },
      children: /* @__PURE__ */ jsx36("span", { className: getClassNameButton("inner"), children })
    }
  ) });
};
var defaultZoomOptions = [
  { label: "25%", value: 0.25 },
  { label: "50%", value: 0.5 },
  { label: "75%", value: 0.75 },
  { label: "100%", value: 1 },
  { label: "125%", value: 1.25 },
  { label: "150%", value: 1.5 },
  { label: "200%", value: 2 }
];
var ViewportControls = ({
  autoZoom,
  zoom,
  onViewportChange,
  onZoom
}) => {
  var _a, _b;
  const { viewports } = useAppContext();
  const defaultsContainAutoZoom = defaultZoomOptions.find(
    (option) => option.value === autoZoom
  );
  const zoomOptions = useMemo16(
    () => [
      ...defaultZoomOptions,
      ...defaultsContainAutoZoom ? [] : [
        {
          value: autoZoom,
          label: `${(autoZoom * 100).toFixed(0)}% (Otomatik)`
        }
      ]
    ].filter((a) => a.value <= autoZoom).sort((a, b) => a.value > b.value ? 1 : -1),
    [autoZoom]
  );
  return /* @__PURE__ */ jsxs18("div", { className: getClassName25(), children: [
    viewports.map((viewport, i) => /* @__PURE__ */ jsx36(
      ViewportButton,
      {
        height: viewport.height,
        width: viewport.width,
        title: viewport.label ? `G\xF6r\xFCn\xFCm penceresini ${viewport.label} olarak de\u011Fi\u015Ftir` : "G\xF6r\xFCn\xFCm penceresini de\u011Fi\u015Ftir",
        onClick: onViewportChange,
        children: typeof viewport.icon === "string" ? icons[viewport.icon] || viewport.icon : viewport.icon || icons.Smartphone
      },
      i
    )),
    /* @__PURE__ */ jsx36("div", { className: getClassName25("divider") }),
    /* @__PURE__ */ jsx36(
      IconButton,
      {
        title: "G\xF6r\xFCn\xFCm penceresini uzakla\u015Ft\u0131r",
        disabled: zoom <= ((_a = zoomOptions[0]) == null ? void 0 : _a.value),
        onClick: (e) => {
          e.stopPropagation();
          onZoom(
            zoomOptions[Math.max(
              zoomOptions.findIndex((option) => option.value === zoom) - 1,
              0
            )].value
          );
        },
        children: /* @__PURE__ */ jsx36(ZoomOut, { size: 16 })
      }
    ),
    /* @__PURE__ */ jsx36(
      IconButton,
      {
        title: "G\xF6r\xFCn\xFCm penceresini yak\u0131nla\u015Ft\u0131r",
        disabled: zoom >= ((_b = zoomOptions[zoomOptions.length - 1]) == null ? void 0 : _b.value),
        onClick: (e) => {
          e.stopPropagation();
          onZoom(
            zoomOptions[Math.min(
              zoomOptions.findIndex((option) => option.value === zoom) + 1,
              zoomOptions.length - 1
            )].value
          );
        },
        children: /* @__PURE__ */ jsx36(ZoomIn, { size: 16 })
      }
    ),
    /* @__PURE__ */ jsx36("div", { className: getClassName25("divider") }),
    /* @__PURE__ */ jsx36(
      "select",
      {
        className: getClassName25("zoomSelect"),
        value: zoom.toString(),
        onChange: (e) => {
          onZoom(parseFloat(e.currentTarget.value));
        },
        children: zoomOptions.map((option) => /* @__PURE__ */ jsx36(
          "option",
          {
            value: option.value,
            label: option.label
          },
          option.label
        ))
      }
    )
  ] });
};

// css-module:/home/dev/Masaüstü/projeler/punk-turkish/components/Puck/components/Canvas/styles.module.css#css-module
var styles_module_default21 = { "PuckCanvas": "_PuckCanvas_18jay_1", "PuckCanvas-controls": "_PuckCanvas-controls_18jay_16", "PuckCanvas-inner": "_PuckCanvas-inner_18jay_21", "PuckCanvas-root": "_PuckCanvas-root_18jay_30", "PuckCanvas--ready": "_PuckCanvas--ready_18jay_55", "PuckCanvas-loader": "_PuckCanvas-loader_18jay_60", "PuckCanvas--showLoader": "_PuckCanvas--showLoader_18jay_70" };

// lib/get-zoom-config.ts
var RESET_ZOOM_SMALLER_THAN_FRAME = true;
var getZoomConfig = (uiViewport, frame, zoom) => {
  const box = getBox(frame);
  const { width: frameWidth, height: frameHeight } = box.contentBox;
  const viewportHeight = uiViewport.height === "auto" ? frameHeight : uiViewport.height;
  let rootHeight = 0;
  let autoZoom = 1;
  if (uiViewport.width > frameWidth || viewportHeight > frameHeight) {
    const widthZoom = Math.min(frameWidth / uiViewport.width, 1);
    const heightZoom = Math.min(frameHeight / viewportHeight, 1);
    zoom = widthZoom;
    if (widthZoom < heightZoom) {
      rootHeight = viewportHeight / zoom;
    } else {
      rootHeight = viewportHeight;
      zoom = heightZoom;
    }
    autoZoom = zoom;
  } else {
    if (RESET_ZOOM_SMALLER_THAN_FRAME) {
      autoZoom = 1;
      zoom = 1;
      rootHeight = viewportHeight;
    }
  }
  return { autoZoom, rootHeight, zoom };
};

// components/Puck/components/Canvas/index.tsx
import { Fragment as Fragment13, jsx as jsx37, jsxs as jsxs19 } from "react/jsx-runtime";
var getClassName26 = get_class_name_factory_default("PuckCanvas", styles_module_default21);
var ZOOM_ON_CHANGE = true;
var Canvas = () => {
  const { status, iframe } = useAppContext();
  const { dispatch, state, overrides, setUi, zoomConfig, setZoomConfig } = useAppContext();
  const { ui } = state;
  const frameRef = useRef8(null);
  const [showTransition, setShowTransition] = useState24(false);
  const defaultRender = useMemo17(() => {
    const PuckDefault = ({ children }) => /* @__PURE__ */ jsx37(Fragment13, { children });
    return PuckDefault;
  }, []);
  const CustomPreview = useMemo17(
    () => overrides.preview || defaultRender,
    [overrides]
  );
  const getFrameDimensions = useCallback16(() => {
    if (frameRef.current) {
      const frame = frameRef.current;
      const box = getBox(frame);
      return { width: box.contentBox.width, height: box.contentBox.height };
    }
    return { width: 0, height: 0 };
  }, [frameRef]);
  const resetAutoZoom = useCallback16(
    (ui2 = state.ui) => {
      if (frameRef.current) {
        setZoomConfig(
          getZoomConfig(ui2.viewports.current, frameRef.current, zoomConfig.zoom)
        );
      }
    },
    [frameRef, zoomConfig, state.ui]
  );
  useEffect22(() => {
    setShowTransition(false);
    resetAutoZoom();
  }, [frameRef, ui.leftSideBarVisible, ui.rightSideBarVisible]);
  useEffect22(() => {
    const { height: frameHeight } = getFrameDimensions();
    if (ui.viewports.current.height === "auto") {
      setZoomConfig(__spreadProps(__spreadValues({}, zoomConfig), {
        rootHeight: frameHeight / zoomConfig.zoom
      }));
    }
  }, [zoomConfig.zoom]);
  useEffect22(() => {
    if (ZOOM_ON_CHANGE) {
      setShowTransition(true);
      resetAutoZoom(ui);
    }
  }, [ui.viewports.current.width]);
  useEffect22(() => {
    const cb = () => {
      setShowTransition(false);
      resetAutoZoom();
    };
    window.addEventListener("resize", cb);
    return () => {
      window.removeEventListener("resize", cb);
    };
  }, []);
  const [showLoader, setShowLoader] = useState24(false);
  useEffect22(() => {
    setTimeout(() => {
      setShowLoader(true);
    }, 500);
  }, []);
  return /* @__PURE__ */ jsxs19(
    "div",
    {
      className: getClassName26({
        ready: status === "READY" || !iframe.enabled || !iframe.waitForStyles,
        showLoader
      }),
      onClick: () => dispatch({
        type: "setUi",
        ui: { itemSelector: null },
        recordHistory: true
      }),
      children: [
        ui.viewports.controlsVisible && iframe.enabled && /* @__PURE__ */ jsx37("div", { className: getClassName26("controls"), children: /* @__PURE__ */ jsx37(
          ViewportControls,
          {
            autoZoom: zoomConfig.autoZoom,
            zoom: zoomConfig.zoom,
            onViewportChange: (viewport) => {
              setShowTransition(true);
              const uiViewport = __spreadProps(__spreadValues({}, viewport), {
                height: viewport.height || "auto",
                zoom: zoomConfig.zoom
              });
              const newUi = __spreadProps(__spreadValues({}, ui), {
                viewports: __spreadProps(__spreadValues({}, ui.viewports), { current: uiViewport }),
                itemSelector: null
              });
              setUi(newUi);
              if (ZOOM_ON_CHANGE) {
                resetAutoZoom(newUi);
              }
            },
            onZoom: (zoom) => {
              setShowTransition(true);
              setZoomConfig(__spreadProps(__spreadValues({}, zoomConfig), { zoom }));
            }
          }
        ) }),
        /* @__PURE__ */ jsxs19("div", { className: getClassName26("inner"), ref: frameRef, children: [
          /* @__PURE__ */ jsx37(
            "div",
            {
              className: getClassName26("root"),
              style: {
                width: iframe.enabled ? ui.viewports.current.width : "100%",
                height: zoomConfig.rootHeight,
                transform: iframe.enabled ? `scale(${zoomConfig.zoom})` : void 0,
                transition: showTransition ? "width 150ms ease-out, height 150ms ease-out, transform 150ms ease-out" : "",
                overflow: iframe.enabled ? void 0 : "auto"
              },
              suppressHydrationWarning: true,
              id: "puck-canvas-root",
              onTransitionEnd: () => {
                window.dispatchEvent(
                  new CustomEvent("viewportchange", {
                    bubbles: true,
                    cancelable: false
                  })
                );
              },
              children: /* @__PURE__ */ jsx37(CustomPreview, { children: /* @__PURE__ */ jsx37(Preview2, {}) })
            }
          ),
          /* @__PURE__ */ jsx37("div", { className: getClassName26("loader"), children: /* @__PURE__ */ jsx37(Loader, { size: 24 }) })
        ] })
      ]
    }
  );
};

// lib/use-loaded-overrides.ts
import { useMemo as useMemo18 } from "react";

// lib/load-overrides.ts
var loadOverrides = ({
  overrides,
  plugins
}) => {
  const collected = __spreadValues({}, overrides);
  plugins == null ? void 0 : plugins.forEach((plugin) => {
    Object.keys(plugin.overrides).forEach((_overridesType) => {
      const overridesType = _overridesType;
      if (overridesType === "fieldTypes") {
        const fieldTypes = plugin.overrides.fieldTypes;
        Object.keys(fieldTypes).forEach((fieldType) => {
          collected.fieldTypes = collected.fieldTypes || {};
          const childNode2 = collected.fieldTypes[fieldType];
          const Comp2 = (props) => fieldTypes[fieldType](__spreadProps(__spreadValues({}, props), {
            children: childNode2 ? childNode2(props) : props.children
          }));
          collected.fieldTypes[fieldType] = Comp2;
        });
        return;
      }
      const childNode = collected[overridesType];
      const Comp = (props) => plugin.overrides[overridesType](__spreadProps(__spreadValues({}, props), {
        children: childNode ? childNode(props) : props.children
      }));
      collected[overridesType] = Comp;
    });
  });
  return collected;
};

// lib/use-loaded-overrides.ts
var useLoadedOverrides = ({
  overrides,
  plugins
}) => {
  return useMemo18(() => {
    return loadOverrides({ overrides, plugins });
  }, [plugins, overrides]);
};

// components/DefaultOverride/index.tsx
import { Fragment as Fragment14, jsx as jsx38 } from "react/jsx-runtime";
var DefaultOverride = ({ children }) => /* @__PURE__ */ jsx38(Fragment14, { children });

// lib/use-inject-css.ts
import { useEffect as useEffect23, useState as useState25 } from "react";
var styles = ``;
var useInjectStyleSheet = (initialStyles, iframeEnabled) => {
  const [el, setEl] = useState25();
  useEffect23(() => {
    setEl(document.createElement("style"));
  }, []);
  useEffect23(() => {
    var _a;
    if (!el || typeof window === "undefined") {
      return;
    }
    el.innerHTML = initialStyles;
    if (iframeEnabled) {
      const frame = getFrame();
      (_a = frame == null ? void 0 : frame.head) == null ? void 0 : _a.appendChild(el);
    }
    document.head.appendChild(el);
  }, [iframeEnabled, el]);
  return el;
};
var useInjectGlobalCss = (iframeEnabled) => {
  return useInjectStyleSheet(styles, iframeEnabled);
};

// lib/use-preview-mode-hotkeys.ts
import { useCallback as useCallback17 } from "react";
import { useHotkeys as useHotkeys2 } from "react-hotkeys-hook";
var usePreviewModeHotkeys = (dispatch, iframeEnabled) => {
  const toggleInteractive = useCallback17(() => {
    dispatch({
      type: "setUi",
      ui: (ui) => ({
        previewMode: ui.previewMode === "edit" ? "interactive" : "edit"
      })
    });
  }, [dispatch]);
  const toggleInteractiveIframe = () => {
    if (iframeEnabled) {
      toggleInteractive();
    }
  };
  const frame = getFrame();
  const resolvedFrame = typeof window !== "undefined" && frame !== document ? frame : void 0;
  useHotkeys2("meta+i", toggleInteractive, { preventDefault: true });
  useHotkeys2("meta+i", toggleInteractiveIframe, {
    preventDefault: true,
    document: resolvedFrame
  });
};

// components/Puck/index.tsx
import { Fragment as Fragment15, jsx as jsx39, jsxs as jsxs20 } from "react/jsx-runtime";
var getClassName27 = get_class_name_factory_default("Puck", styles_module_default15);
var getLayoutClassName = get_class_name_factory_default("PuckLayout", styles_module_default15);
function Puck({
  children,
  config,
  data: initialData,
  ui: initialUi,
  onChange,
  onPublish,
  onAction,
  permissions = {},
  plugins,
  overrides,
  renderHeader,
  renderHeaderActions,
  headerTitle,
  headerPath,
  viewports = defaultViewports,
  iframe: _iframe,
  dnd,
  initialHistory: _initialHistory
}) {
  var _a, _b;
  const iframe = __spreadValues({
    enabled: true,
    waitForStyles: true
  }, _iframe);
  useInjectGlobalCss(iframe.enabled);
  const [generatedAppState] = useState26(() => {
    var _a2, _b2, _c, _d, _e, _f, _g, _h, _i;
    const initial = __spreadValues(__spreadValues({}, defaultAppState.ui), initialUi);
    let clientUiState = {};
    if (typeof window !== "undefined") {
      if (window.matchMedia("(max-width: 638px)").matches) {
        clientUiState = __spreadProps(__spreadValues({}, clientUiState), {
          leftSideBarVisible: false,
          rightSideBarVisible: false
        });
      }
      const viewportWidth = window.innerWidth;
      const viewportDifferences = Object.entries(viewports).map(([key, value]) => ({
        key,
        diff: Math.abs(viewportWidth - value.width)
      })).sort((a, b) => a.diff > b.diff ? 1 : -1);
      const closestViewport = viewportDifferences[0].key;
      if (iframe.enabled) {
        clientUiState = __spreadProps(__spreadValues({}, clientUiState), {
          viewports: __spreadProps(__spreadValues({}, initial.viewports), {
            current: __spreadProps(__spreadValues({}, initial.viewports.current), {
              height: ((_b2 = (_a2 = initialUi == null ? void 0 : initialUi.viewports) == null ? void 0 : _a2.current) == null ? void 0 : _b2.height) || ((_c = viewports[closestViewport]) == null ? void 0 : _c.height) || "auto",
              width: ((_e = (_d = initialUi == null ? void 0 : initialUi.viewports) == null ? void 0 : _d.current) == null ? void 0 : _e.width) || ((_f = viewports[closestViewport]) == null ? void 0 : _f.width)
            })
          })
        });
      }
    }
    if (Object.keys((initialData == null ? void 0 : initialData.root) || {}).length > 0 && !((_g = initialData == null ? void 0 : initialData.root) == null ? void 0 : _g.props)) {
      console.error(
        "Warning: Defining props on `root` is deprecated. Please use `root.props`, or republish this page to migrate automatically."
      );
    }
    const rootProps2 = ((_h = initialData == null ? void 0 : initialData.root) == null ? void 0 : _h.props) || (initialData == null ? void 0 : initialData.root) || {};
    const defaultedRootProps = __spreadValues(__spreadValues({}, (_i = config.root) == null ? void 0 : _i.defaultProps), rootProps2);
    return __spreadProps(__spreadValues({}, defaultAppState), {
      data: __spreadProps(__spreadValues({}, initialData), {
        root: __spreadProps(__spreadValues({}, initialData == null ? void 0 : initialData.root), { props: defaultedRootProps }),
        content: initialData.content || []
      }),
      ui: __spreadProps(__spreadValues(__spreadValues({}, initial), clientUiState), {
        // Store categories under componentList on state to allow render functions and plugins to modify
        componentList: config.categories ? Object.entries(config.categories).reduce(
          (acc, [categoryName, category]) => {
            return __spreadProps(__spreadValues({}, acc), {
              [categoryName]: {
                title: category.title,
                components: category.components,
                expanded: category.defaultExpanded,
                visible: category.visible
              }
            });
          },
          {}
        ) : {}
      })
    });
  });
  const { appendData = true } = _initialHistory || {};
  const histories = [
    ...(_initialHistory == null ? void 0 : _initialHistory.histories) || [],
    ...appendData ? [{ state: generatedAppState }] : []
  ].map((history2) => __spreadProps(__spreadValues({}, history2), {
    // Inject default data to enable partial history injections
    state: __spreadValues(__spreadValues({}, generatedAppState), history2.state)
  }));
  const initialHistoryIndex = (_initialHistory == null ? void 0 : _initialHistory.index) || histories.length - 1;
  const initialAppState = histories[initialHistoryIndex].state;
  const historyStore = useHistoryStore({
    histories,
    index: initialHistoryIndex
  });
  const [reducer] = useState26(
    () => createReducer({
      config,
      record: historyStore.record,
      onAction
    })
  );
  const [appState, dispatch] = useReducer(
    reducer,
    flushZones(initialAppState)
  );
  const { data, ui } = appState;
  const history = usePuckHistory({
    dispatch,
    initialAppState,
    historyStore,
    iframeEnabled: (_a = _iframe == null ? void 0 : _iframe.enabled) != null ? _a : true
  });
  const [menuOpen, setMenuOpen] = useState26(false);
  const { itemSelector, leftSideBarVisible, rightSideBarVisible } = ui;
  const selectedItem = itemSelector ? getItem(itemSelector, data) : null;
  useEffect24(() => {
    if (onChange) onChange(data);
  }, [data]);
  const rootProps = data.root.props || data.root;
  const toggleSidebars = useCallback18(
    (sidebar) => {
      const widerViewport = window.matchMedia("(min-width: 638px)").matches;
      const sideBarVisible = sidebar === "left" ? leftSideBarVisible : rightSideBarVisible;
      const oppositeSideBar = sidebar === "left" ? "rightSideBarVisible" : "leftSideBarVisible";
      dispatch({
        type: "setUi",
        ui: __spreadValues({
          [`${sidebar}SideBarVisible`]: !sideBarVisible
        }, !widerViewport ? { [oppositeSideBar]: false } : {})
      });
    },
    [dispatch, leftSideBarVisible, rightSideBarVisible]
  );
  useEffect24(() => {
    if (!window.matchMedia("(min-width: 638px)").matches) {
      dispatch({
        type: "setUi",
        ui: {
          leftSideBarVisible: false,
          rightSideBarVisible: false
        }
      });
    }
    const handleResize = () => {
      if (!window.matchMedia("(min-width: 638px)").matches) {
        dispatch({
          type: "setUi",
          ui: (ui2) => __spreadValues(__spreadValues({}, ui2), ui2.rightSideBarVisible ? { leftSideBarVisible: false } : {})
        });
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const defaultHeaderRender = useMemo19(() => {
    if (renderHeader) {
      console.warn(
        "`renderHeader` is deprecated. Please use `overrides.header` and the `usePuck` hook instead"
      );
      const RenderHeader = (_a2) => {
        var _b2 = _a2, { actions } = _b2, props = __objRest(_b2, ["actions"]);
        const Comp = renderHeader;
        return /* @__PURE__ */ jsx39(Comp, __spreadProps(__spreadValues({}, props), { dispatch, state: appState, children: actions }));
      };
      return RenderHeader;
    }
    return DefaultOverride;
  }, [renderHeader]);
  const defaultHeaderActionsRender = useMemo19(() => {
    if (renderHeaderActions) {
      console.warn(
        "`renderHeaderActions` is deprecated. Please use `overrides.headerActions` and the `usePuck` hook instead."
      );
      const RenderHeader = (props) => {
        const Comp = renderHeaderActions;
        return /* @__PURE__ */ jsx39(Comp, __spreadProps(__spreadValues({}, props), { dispatch, state: appState }));
      };
      return RenderHeader;
    }
    return DefaultOverride;
  }, [renderHeader]);
  const loadedOverrides = useLoadedOverrides({
    overrides,
    plugins
  });
  const CustomPuck = useMemo19(
    () => loadedOverrides.puck || DefaultOverride,
    [loadedOverrides]
  );
  const CustomHeader = useMemo19(
    () => loadedOverrides.header || defaultHeaderRender,
    [loadedOverrides]
  );
  const CustomHeaderActions = useMemo19(
    () => loadedOverrides.headerActions || defaultHeaderActionsRender,
    [loadedOverrides]
  );
  const [mounted, setMounted] = useState26(false);
  useEffect24(() => {
    setMounted(true);
  }, []);
  const selectedComponentConfig = selectedItem && config.components[selectedItem.type];
  const selectedComponentLabel = selectedItem ? (_b = selectedComponentConfig == null ? void 0 : selectedComponentConfig["label"]) != null ? _b : selectedItem.type.toString() : "";
  usePreviewModeHotkeys(dispatch, iframe.enabled);
  return /* @__PURE__ */ jsxs20("div", { className: `Puck ${getClassName27()}`, children: [
    /* @__PURE__ */ jsx39(
      AppProvider,
      {
        value: {
          state: appState,
          dispatch,
          config,
          plugins: plugins || [],
          overrides: loadedOverrides,
          history,
          viewports,
          iframe,
          globalPermissions: __spreadValues({
            delete: true,
            drag: true,
            duplicate: true,
            insert: true,
            edit: true
          }, permissions),
          getPermissions: () => ({}),
          refreshPermissions: () => null
        },
        children: /* @__PURE__ */ jsx39(DragDropContext, { disableAutoScroll: dnd == null ? void 0 : dnd.disableAutoScroll, children: /* @__PURE__ */ jsx39(CustomPuck, { children: children || /* @__PURE__ */ jsx39(
          "div",
          {
            className: getLayoutClassName({
              leftSideBarVisible,
              menuOpen,
              mounted,
              rightSideBarVisible
            }),
            children: /* @__PURE__ */ jsxs20("div", { className: getLayoutClassName("inner"), children: [
              /* @__PURE__ */ jsx39(
                CustomHeader,
                {
                  actions: /* @__PURE__ */ jsx39(Fragment15, { children: /* @__PURE__ */ jsx39(CustomHeaderActions, { children: /* @__PURE__ */ jsx39(
                    Button,
                    {
                      onClick: () => {
                        onPublish && onPublish(data);
                      },
                      icon: /* @__PURE__ */ jsx39(Globe, { size: "14px" }),
                      children: "Kaydet"
                    }
                  ) }) }),
                  children: /* @__PURE__ */ jsx39("header", { className: getLayoutClassName("header"), children: /* @__PURE__ */ jsxs20("div", { className: getLayoutClassName("headerInner"), children: [
                    /* @__PURE__ */ jsxs20("div", { className: getLayoutClassName("headerToggle"), children: [
                      /* @__PURE__ */ jsx39(
                        "div",
                        {
                          className: getLayoutClassName("leftSideBarToggle"),
                          children: /* @__PURE__ */ jsx39(
                            IconButton,
                            {
                              onClick: () => {
                                toggleSidebars("left");
                              },
                              title: "A\xE7/Kapa Sol Alan",
                              children: /* @__PURE__ */ jsx39(PanelLeft, { focusable: "false" })
                            }
                          )
                        }
                      ),
                      /* @__PURE__ */ jsx39(
                        "div",
                        {
                          className: getLayoutClassName("rightSideBarToggle"),
                          children: /* @__PURE__ */ jsx39(
                            IconButton,
                            {
                              onClick: () => {
                                toggleSidebars("right");
                              },
                              title: "A\xE7/Kapa Sa\u011F Alan",
                              children: /* @__PURE__ */ jsx39(PanelRight, { focusable: "false" })
                            }
                          )
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsx39("div", { className: getLayoutClassName("headerTitle"), children: /* @__PURE__ */ jsxs20(Heading, { rank: "2", size: "xs", children: [
                      headerTitle || rootProps.title || "Sayfa",
                      headerPath && /* @__PURE__ */ jsxs20(Fragment15, { children: [
                        " ",
                        /* @__PURE__ */ jsx39(
                          "code",
                          {
                            className: getLayoutClassName("headerPath"),
                            children: headerPath
                          }
                        )
                      ] })
                    ] }) }),
                    /* @__PURE__ */ jsxs20("div", { className: getLayoutClassName("headerTools"), children: [
                      /* @__PURE__ */ jsx39("div", { className: getLayoutClassName("menuButton"), children: /* @__PURE__ */ jsx39(
                        IconButton,
                        {
                          onClick: () => {
                            return setMenuOpen(!menuOpen);
                          },
                          title: "A\xE7/Kapa Men\xFC Alan\u0131",
                          children: menuOpen ? /* @__PURE__ */ jsx39(ChevronUp, { focusable: "false" }) : /* @__PURE__ */ jsx39(ChevronDown, { focusable: "false" })
                        }
                      ) }),
                      /* @__PURE__ */ jsx39(
                        MenuBar,
                        {
                          appState,
                          dispatch,
                          onPublish,
                          menuOpen,
                          renderHeaderActions: () => /* @__PURE__ */ jsx39(CustomHeaderActions, { children: /* @__PURE__ */ jsx39(
                            Button,
                            {
                              onClick: () => {
                                onPublish && onPublish(data);
                              },
                              icon: /* @__PURE__ */ jsx39(Globe, { size: "14px" }),
                              children: "Kaydet"
                            }
                          ) }),
                          setMenuOpen
                        }
                      )
                    ] })
                  ] }) })
                }
              ),
              /* @__PURE__ */ jsxs20("div", { className: getLayoutClassName("leftSideBar"), children: [
                /* @__PURE__ */ jsx39(SidebarSection, { title: "Mod\xFCller", noBorderTop: true, children: /* @__PURE__ */ jsx39(Components, {}) }),
                /* @__PURE__ */ jsx39(SidebarSection, { title: "Sayafa Ana Hatlar\u0131", children: /* @__PURE__ */ jsx39(Outline, {}) })
              ] }),
              /* @__PURE__ */ jsx39(Canvas, {}),
              /* @__PURE__ */ jsx39("div", { className: getLayoutClassName("rightSideBar"), children: /* @__PURE__ */ jsx39(
                SidebarSection,
                {
                  noPadding: true,
                  noBorderTop: true,
                  showBreadcrumbs: true,
                  title: selectedItem ? selectedComponentLabel : "Sayfa",
                  children: /* @__PURE__ */ jsx39(Fields, {})
                }
              ) })
            ] })
          }
        ) }) })
      }
    ),
    /* @__PURE__ */ jsx39("div", { id: "puck-portal-root", className: getClassName27("portal") })
  ] });
}
Puck.Components = Components;
Puck.Fields = Fields;
Puck.Outline = Outline;
Puck.Preview = Preview2;

// lib/migrate.ts
var migrations = [
  // Migrate root to root.props
  (data) => {
    const rootProps = data.root.props || data.root;
    if (Object.keys(data.root).length > 0 && !data.root.props) {
      console.warn(
        "Migration applied: Root props moved from `root` to `root.props`."
      );
      return __spreadProps(__spreadValues({}, data), {
        root: {
          props: __spreadValues({}, rootProps)
        }
      });
    }
    return data;
  }
];
function migrate(data) {
  return migrations == null ? void 0 : migrations.reduce((acc, migration) => migration(acc), data);
}

// lib/transform-props.ts
function transformProps(data, propTransforms) {
  const mapItem = (item) => {
    if (propTransforms[item.type]) {
      return __spreadProps(__spreadValues({}, item), {
        props: propTransforms[item.type](item.props)
      });
    }
    return item;
  };
  const defaultedData = defaultData(data);
  const rootProps = defaultedData.root.props || defaultedData.root;
  let newRoot = __spreadValues({}, defaultedData.root);
  if (propTransforms["root"]) {
    if (defaultedData.root.props) {
      newRoot.props = propTransforms["root"](rootProps);
    } else {
      newRoot = propTransforms["root"](rootProps);
    }
  }
  const afterPropTransforms = __spreadProps(__spreadValues({}, defaultedData), {
    root: newRoot,
    content: defaultedData.content.map(mapItem),
    zones: Object.keys(data.zones || {}).reduce(
      (acc, zoneKey) => __spreadProps(__spreadValues({}, acc), {
        [zoneKey]: data.zones[zoneKey].map(mapItem)
      }),
      {}
    )
  });
  return afterPropTransforms;
}

// lib/use-puck.ts
var usePuck = () => {
  const {
    state: appState,
    config,
    history,
    dispatch,
    selectedItem: currentItem,
    getPermissions,
    refreshPermissions
  } = useAppContext();
  if (dispatch === defaultContext.dispatch) {
    throw new Error(
      "usePuck was used outside of the <Puck> component. The usePuck hook must be rendered within the <Puck> context as children, overrides or plugins as described in https://puckeditor.com/docs/api-reference/functions/use-puck."
    );
  }
  return {
    appState,
    config,
    dispatch,
    getPermissions,
    refreshPermissions,
    history: {
      back: history.back,
      forward: history.forward,
      setHistories: history.setHistories,
      setHistoryIndex: history.setHistoryIndex,
      hasPast: history.historyStore.hasPast,
      hasFuture: history.historyStore.hasFuture,
      histories: history.historyStore.histories,
      index: history.historyStore.index,
      historyStore: history.historyStore
    },
    selectedItem: currentItem || null
  };
};
export {
  Action,
  ActionBar,
  AutoField,
  Button,
  Drawer,
  DropZone,
  DropZoneProvider,
  FieldLabel,
  Group,
  IconButton,
  Label,
  Puck,
  Render,
  dropZoneContext,
  migrate,
  overrideKeys,
  resolveAllData,
  transformProps,
  usePuck
};
/*! Bundled license information:

lucide-react/dist/esm/shared/src/utils.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/defaultAttributes.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/Icon.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/createLucideIcon.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/chevron-down.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/chevron-right.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/chevron-up.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/circle-check-big.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/copy.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/corner-left-up.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/ellipsis-vertical.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/globe.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/hash.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/layers.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/layout-grid.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/link.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/list.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/lock-open.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/lock.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/monitor.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/panel-left.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/panel-right.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/plus.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/redo-2.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/search.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/sliders-horizontal.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/smartphone.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/tablet.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/trash.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/type.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/undo-2.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/zoom-in.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/zoom-out.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/lucide-react.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)
*/
