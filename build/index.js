var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toESM(require("react"));
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// server-entry-module:@remix-run/dev/server-build
init_react();

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_server = require("react-dom/server");
var import_remix = __toESM(require_remix());
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:/Users/joel/Code/joelhooks/joelhooks-remix-blog/app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
init_react();
var React2 = __toESM(require("react"));
var import_remix2 = __toESM(require_remix());
var import_remix3 = __toESM(require_remix());

// app/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-3KCLG6X7.css";

// app/utils/get-url.ts
init_react();

// app/utils/remove-trailing-slash.ts
init_react();
function removeTrailingSlash(s) {
  return s.endsWith("/") ? s.slice(0, -1) : s;
}

// app/utils/get-url.ts
function getUrl(requestInfo) {
  return removeTrailingSlash(`${(requestInfo == null ? void 0 : requestInfo.origin) ?? "https://joelhooks.com"}${(requestInfo == null ? void 0 : requestInfo.path) ?? ""}`);
}

// app/utils/get-social-metas.ts
init_react();
function getSocialMetas({
  url,
  title = "Ramblings of a software developer",
  description = `joel's digital garden`,
  origin,
  image = "",
  keywords = ""
}) {
  return {
    title,
    description,
    keywords,
    image,
    "og:url": url,
    "og:title": title,
    "og:description": description,
    "og:image": image,
    "twitter:card": image ? "summary_large_image" : "summary",
    "twitter:creator": "@jhooks",
    "twitter:site": "@jhooks",
    "twitter:title": title,
    "twitter:description": description,
    "twitter:image": image,
    "twitter:alt": title
  };
}

// route:/Users/joel/Code/joelhooks/joelhooks-remix-blog/app/root.tsx
function links() {
  return [{ rel: "stylesheet", href: tailwind_default }];
}
var meta = ({ data }) => {
  const requestInfo = data == null ? void 0 : data.requestInfo;
  const title = "Joel's digital garden";
  const description = "Ramblings of a software developer";
  return __spreadValues({
    viewport: "width=device-width,initial-scale=1,viewport-fit=cover"
  }, getSocialMetas({
    origin: (requestInfo == null ? void 0 : requestInfo.origin) ?? "",
    keywords: "",
    url: getUrl(requestInfo),
    image: "https://res.cloudinary.com/joelhooks-com/image/upload/v1646023414/seo/joelhooks-com.png",
    title,
    description
  }));
};
function App() {
  return /* @__PURE__ */ React2.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React2.createElement("head", null, /* @__PURE__ */ React2.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React2.createElement("title", null, "Joel Hooks Digital Gardener"), /* @__PURE__ */ React2.createElement(import_remix2.Meta, null), /* @__PURE__ */ React2.createElement(import_remix2.Links, null)), /* @__PURE__ */ React2.createElement("body", {
    className: "p-3"
  }, /* @__PURE__ */ React2.createElement(import_remix3.Outlet, null), /* @__PURE__ */ React2.createElement(import_remix2.ScrollRestoration, null), true ? /* @__PURE__ */ React2.createElement(import_remix3.LiveReload, null) : null));
}

// route:/Users/joel/Code/joelhooks/joelhooks-remix-blog/app/routes/blog.$year.$month.$day.$slug.tsx
var blog_year_month_day_slug_exports = {};
__export(blog_year_month_day_slug_exports, {
  default: () => PageRoute,
  loader: () => loader
});
init_react();
var React6 = __toESM(require("react"));
var import_remix4 = __toESM(require_remix());

// app/utils/mdx.tsx
init_react();
var React3 = __toESM(require("react"));
var mdxBundler = __toESM(require("mdx-bundler/client"));

// app/utils/compile-mdx.server.ts
init_react();
var import_path = __toESM(require("path"));
var import_promises = __toESM(require("fs/promises"));
var import_mdx_bundler = require("mdx-bundler");
async function downloadMdxFileOrDirectory(relativeMdxFileOrDirectory) {
  const mdxFileOrDirectory = import_path.default.join(__dirname, "..", "content", relativeMdxFileOrDirectory);
  let isDirectory = false;
  try {
    const stats = await import_promises.default.stat(mdxFileOrDirectory);
    isDirectory = stats.isDirectory();
  } catch (error) {
  }
  try {
    const fileName = isDirectory ? `${mdxFileOrDirectory}/index` : mdxFileOrDirectory;
    const file = await import_promises.default.readFile(fileName + ".mdx", "utf8");
    const { frontmatter, code } = await (0, import_mdx_bundler.bundleMDX)({
      source: file
    });
    return {
      code,
      frontmatter
    };
  } catch (error) {
    console.log(error);
  }
}

// app/utils/mdx.tsx
var import_react_responsive_embed = __toESM(require("react-responsive-embed"));
var import_react_twitter_embed = require("react-twitter-embed");
var mdxComponents = {
  ResponsiveEmbed: import_react_responsive_embed.default,
  TwitterTweetEmbed: import_react_twitter_embed.TwitterTweetEmbed
};
async function getMdxPage(options) {
  const { contentDir, slug } = options;
  return downloadMdxFileOrDirectory(`${contentDir}/${slug}`);
}
function getMdxComponent(code) {
  const Component = mdxBundler.getMDXComponent(code);
  function MdxComponent(_a) {
    var _b = _a, {
      components
    } = _b, rest = __objRest(_b, [
      "components"
    ]);
    return /* @__PURE__ */ React3.createElement(Component, __spreadValues({
      components: __spreadValues(__spreadValues({}, mdxComponents), components)
    }, rest));
  }
  return MdxComponent;
}
function useMdxComponent(code) {
  return React3.useMemo(() => getMdxComponent(code), [code]);
}

// app/components/layout.tsx
init_react();
var React5 = __toESM(require("react"));

// app/components/Logo.tsx
init_react();
var React4 = __toESM(require("react"));
var Logo = (props) => /* @__PURE__ */ React4.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "140",
  height: "115",
  viewBox: "0 0 140 115",
  style: { color: "black", stroke: "black" }
}, /* @__PURE__ */ React4.createElement("title", null, "joelhooks.com"), /* @__PURE__ */ React4.createElement("defs", null, /* @__PURE__ */ React4.createElement("path", {
  id: "joelhooks-com-a",
  d: "M9.78135788,18.1887142 C10.2162972,19.722325 10.2162972,22.5167089 9.78135788,26.5718657 C8.92142279,34.5894714 12.8167814,39.9728551 21.4674336,42.7220167 C25.9020439,46.9427999 28.119349,52.2456059 28.119349,58.6304348 C28.119349,68.2076781 19.3490054,68.4551876 19.3490054,77.747714 C19.3490054,83.9427317 20.0551482,87.0402405 21.4674336,87.0402405"
}), /* @__PURE__ */ React4.createElement("path", {
  id: "joelhooks-com-b",
  d: "M29.5065557,31.2467623 C22.65141,35.7851028 19.2238372,42.596298 19.2238372,51.6803479 C19.2238372,65.3064227 34.0991287,65.3064227 26.9233931,89.4144311"
})), /* @__PURE__ */ React4.createElement("g", {
  fill: "none",
  fillRule: "evenodd",
  transform: "translate(1 -2)"
}, /* @__PURE__ */ React4.createElement("g", {
  transform: "translate(0 48.543)"
}, /* @__PURE__ */ React4.createElement("rect", {
  className: "sb",
  width: "53.797",
  height: "39.087",
  strokeWidth: "1.266",
  rx: "1.266"
}), /* @__PURE__ */ React4.createElement("g", {
  className: "fb",
  transform: "translate(3.797 22.696)"
}, /* @__PURE__ */ React4.createElement("rect", {
  width: "6.329",
  height: "1.261",
  y: "11.348",
  rx: ".63"
}), /* @__PURE__ */ React4.createElement("rect", {
  width: "6.329",
  height: "1.261",
  x: "9.494",
  y: "11.348",
  rx: ".63"
}), /* @__PURE__ */ React4.createElement("rect", {
  width: "6.962",
  height: "1.261",
  x: "20.253",
  y: "11.348",
  rx: ".63"
}), /* @__PURE__ */ React4.createElement("rect", {
  width: "3.797",
  height: "1.261",
  x: "10.759",
  y: "7.565",
  rx: ".63"
}), /* @__PURE__ */ React4.createElement("rect", {
  width: "4.43",
  height: "1.261",
  y: "7.565",
  rx: ".63"
}), /* @__PURE__ */ React4.createElement("rect", {
  width: "5.063",
  height: "1.261",
  x: "17.089",
  y: "3.783",
  rx: ".63"
}), /* @__PURE__ */ React4.createElement("rect", {
  width: "10.759",
  height: "1.261",
  y: "3.783",
  rx: ".63"
}), /* @__PURE__ */ React4.createElement("rect", {
  width: "6.329",
  height: "1.261",
  rx: ".63"
})), /* @__PURE__ */ React4.createElement("ellipse", {
  cx: "3.797",
  cy: "3.783",
  className: "fb",
  rx: "1.266",
  ry: "1.261"
}), /* @__PURE__ */ React4.createElement("ellipse", {
  cx: "7.595",
  cy: "3.783",
  className: "fb",
  rx: "1.266",
  ry: "1.261"
}), /* @__PURE__ */ React4.createElement("ellipse", {
  cx: "11.392",
  cy: "3.783",
  className: "fb",
  rx: "1.266",
  ry: "1.261"
})), /* @__PURE__ */ React4.createElement("rect", {
  width: "46.203",
  height: "32.152",
  x: "53.797",
  y: "69.978",
  className: "sb",
  strokeWidth: "1.266",
  rx: "1.266"
}), /* @__PURE__ */ React4.createElement("path", {
  className: "fb",
  d: "M90.225348,92.5025921 L92.5613317,92.110912 C92.9060667,92.0531094 93.2323878,92.2857141 93.2901903,92.630449 C93.3018084,92.6997392 93.3018084,92.7704804 93.2901903,92.8397706 L92.8985102,95.1757543 C92.8407077,95.5204893 92.5143865,95.7530939 92.1696516,95.6952914 C92.039763,95.6735126 91.9199037,95.6117567 91.8267764,95.5186295 L89.8824728,93.5743259 C89.6353056,93.3271586 89.6353056,92.9264213 89.8824728,92.679254 C89.9756001,92.5861268 90.0954594,92.5243708 90.225348,92.5025921 Z",
  transform: "rotate(45 91.498 93.903)"
}), /* @__PURE__ */ React4.createElement("g", {
  transform: "translate(25.95)"
}, /* @__PURE__ */ React4.createElement("g", {
  transform: "matrix(-1 0 0 1 59.494 0)"
}, /* @__PURE__ */ React4.createElement("g", {
  transform: "translate(4.43)"
}, /* @__PURE__ */ React4.createElement("ellipse", {
  cx: "24.051",
  cy: "80.696",
  className: "sb fa",
  strokeWidth: "1.266",
  rx: "15.19",
  ry: "1.891"
}), /* @__PURE__ */ React4.createElement("g", {
  strokeLinecap: "square"
}, /* @__PURE__ */ React4.createElement("use", {
  className: "sb",
  strokeWidth: "4.43",
  xlinkHref: "#joelhooks-com-a"
}), /* @__PURE__ */ React4.createElement("use", {
  className: "sa",
  strokeWidth: "1.899",
  xlinkHref: "#joelhooks-com-a"
})), /* @__PURE__ */ React4.createElement("g", {
  strokeLinecap: "square"
}, /* @__PURE__ */ React4.createElement("use", {
  className: "sb",
  strokeWidth: "4.43",
  xlinkHref: "#joelhooks-com-b"
}), /* @__PURE__ */ React4.createElement("use", {
  className: "sa",
  strokeWidth: "1.899",
  xlinkHref: "#joelhooks-com-b"
})), /* @__PURE__ */ React4.createElement("path", {
  className: "fb",
  d: "M25.5936392,20.0034333 L30.2070893,28.3852947 L30.2215314,39.0896256 C30.222003,39.4391725 30.5057492,39.7221541 30.8552962,39.7216825 C30.9952189,39.7214937 31.1311348,39.6749427 31.2417925,39.589308 L50.9970961,24.3012666 C51.2735347,24.087339 51.3242099,23.6898187 51.1102823,23.4133801 C51.0128249,23.2874451 50.8714773,23.2028749 50.71443,23.1765363 L26.2527946,19.0740535 C25.9080618,19.016238 25.581732,19.2488305 25.5239165,19.5935633 C25.5003403,19.7341399 25.5249073,19.8785591 25.5936392,20.0034333 Z",
  transform: "rotate(-13 38.379 29.393)"
}), /* @__PURE__ */ React4.createElement("path", {
  className: "fb",
  d: "M0.453590444,3.87804538 L3.51225721,9.78986617 L3.49704502,17.33182 C3.49633998,17.6813666 3.77913194,17.9653017 4.12867854,17.9660067 C4.27556092,17.966303 4.41797332,17.9155027 4.53150792,17.8223125 L17.8006592,6.93087395 C18.0708457,6.70910247 18.1100938,6.31029175 17.8883223,6.04010527 C17.7921394,5.92292466 17.6570907,5.84416048 17.507741,5.81813953 L1.12435592,2.9636907 C0.77999614,2.90369349 0.452200035,3.1342149 0.392202827,3.47857468 C0.368457708,3.61486208 0.390020075,3.75517595 0.453590444,3.87804538 Z",
  transform: "rotate(-96 9.207 10.46)"
}), /* @__PURE__ */ React4.createElement("path", {
  className: "fb",
  d: "M26.1260891,37.1822387 L22.9368733,34.8080481 C26.3918571,30.5872649 29.7139569,28.4768733 32.9031728,28.4768733 C36.0923886,28.4768733 35.9595046,29.5980188 32.5045208,31.8403099 L29.3153049,33.5545266 L26.1260891,37.1822387 Z"
}), /* @__PURE__ */ React4.createElement("polygon", {
  className: "fb",
  points: "13.005 22.805 9.816 23.6 7.033 17.634 9.285 16.476",
  transform: "rotate(17 10.02 20.038)"
})), /* @__PURE__ */ React4.createElement("g", {
  className: "sb",
  strokeWidth: "1.266",
  transform: "translate(32.55 54.593)"
}, /* @__PURE__ */ React4.createElement("path", {
  className: "fa",
  d: "M2.39191189,10.5655431 C2.39191189,10.5655431 7.6375425,-5.67577566 22.3245109,2.1147756 C22.3245109,2.1147756 20.8392982,9.84769402 15.7202114,12.0180187 C10.8808629,14.0697436 2.39191189,10.5655431 2.39191189,10.5655431 Z"
}), /* @__PURE__ */ React4.createElement("path", {
  d: "M22.3245109,2.37419056 C12.9661468,7.44657888 5.52464318,10.6121663 0,11.8709528"
}), /* @__PURE__ */ React4.createElement("polyline", {
  points: "13.935 0 13.554 6.386 19.135 9.497"
}), /* @__PURE__ */ React4.createElement("polyline", {
  points: "9.966 1.187 8.77 8.696 14.351 12.662"
})), /* @__PURE__ */ React4.createElement("g", {
  className: "sb",
  strokeWidth: "1.266",
  transform: "scale(-1 1) rotate(-5 505.06 296.862)"
}, /* @__PURE__ */ React4.createElement("path", {
  className: "fa",
  d: "M2.39191189,10.5655431 C2.39191189,10.5655431 7.6375425,-5.67577566 22.3245109,2.1147756 C22.3245109,2.1147756 20.8392982,9.84769402 15.7202114,12.0180187 C10.8808629,14.0697436 2.39191189,10.5655431 2.39191189,10.5655431 Z"
}), /* @__PURE__ */ React4.createElement("path", {
  d: "M22.3245109,2.37419056 C12.9661468,7.44657888 5.52464318,10.6121663 0,11.8709528"
}), /* @__PURE__ */ React4.createElement("polyline", {
  points: "13.935 0 13.554 6.386 19.135 9.497"
}), /* @__PURE__ */ React4.createElement("polyline", {
  points: "9.966 1.187 8.77 8.696 14.351 12.662"
}))), /* @__PURE__ */ React4.createElement("g", {
  className: "sb fa",
  transform: "translate(4.43 80.696)"
}, /* @__PURE__ */ React4.createElement("path", {
  strokeWidth: "1.266",
  d: "M12.1548849,0.0667424164 C18.6730432,0.632160289 23.4821744,0.914869226 26.5822785,0.914869226 C29.6823721,0.914869226 34.4914813,0.632162193 41.0096062,0.066748127 L41.0095999,0.0666755412 C41.3578796,0.0364640585 41.6647073,0.29430926 41.6949188,0.642588919 C41.6983634,0.68229897 41.6980495,0.722245617 41.6939814,0.761896639 L40.9311398,8.19647852 C40.9004799,8.49530813 40.6639685,8.73140935 40.3650861,8.76155048 C35.7708169,9.22486465 31.1765477,9.45652174 26.5822785,9.45652174 C21.9880282,9.45652174 17.393778,9.22486657 12.7995278,8.76155622 L12.7995211,8.76162251 C12.5005818,8.73147577 12.2640253,8.49532965 12.2333596,8.19644315 L11.4705368,0.761929533 C11.4348582,0.414184588 11.687838,0.103358384 12.0355829,0.0676797758 C12.075232,0.0636117794 12.1151768,0.0632979325 12.1548849,0.0667424164 Z"
}), /* @__PURE__ */ React4.createElement("path", {
  strokeWidth: "1.266",
  d: "M14.57587,8.79669734 C18.6344995,9.23658027 22.7421209,9.45652174 26.8987342,9.45652174 C31.0624583,9.45652174 35.2261824,9.23582711 39.3899065,8.79443786 L39.3899092,8.79446307 C39.7374949,8.75761611 40.0491392,9.00951964 40.0859861,9.35710536 C40.0908107,9.40261655 40.0906845,9.44851679 40.0856097,9.49400074 L37.3899205,33.6548951 C37.3628309,33.8976909 37.1984297,34.1032202 36.9675128,34.1829763 C34.8030486,34.9305573 31.4467891,35.3043478 26.8987342,35.3043478 C22.3588941,35.3043478 19.0557459,34.9319064 16.9892896,34.1870235 L16.9892903,34.1870217 C16.762357,34.1052204 16.6016557,33.9015327 16.5749071,33.6617939 L13.8785857,9.49618398 C13.8398215,9.1487529 14.0900455,8.83567976 14.4374766,8.79691555 C14.4834611,8.79178489 14.5298695,8.79171171 14.57587,8.79669734 Z"
}), /* @__PURE__ */ React4.createElement("g", {
  transform: "translate(.2 25.965)"
}, /* @__PURE__ */ React4.createElement("path", {
  strokeWidth: "1.266",
  d: "M15.1898734,0.161274014 C17.5882745,0.785976964 21.4246058,1.09832844 26.6988674,1.09832844 C31.973129,1.09832844 35.7317344,0.785976964 37.9746835,0.161274014"
}), /* @__PURE__ */ React4.createElement("path", {
  strokeLinecap: "round",
  strokeWidth: "1.266",
  d: "M16.2558294,3.3281092 C19.8423273,3.84125379 23.4288252,4.09782609 27.0153231,4.09782609 C30.601821,4.09782609 33.1334666,3.84125379 34.6102598,3.3281092"
}), /* @__PURE__ */ React4.createElement("path", {
  strokeLinecap: "round",
  strokeWidth: ".633",
  d: "M8.63709675 8.39357937L13.8974001 8.39357937M42.1814006 8.39357937L44.3514708 8.39357937M45.9788689 8.39357937L53.9140573 8.39357937M4.92646829 8.39357937L6.71765698 8.39357937M39.1036835 8.39357937L40.8948722 8.39357937M56.8252025 8.39357937L57.7115256 8.39357937M.496088545 8.39357937L1.38241173 8.39357937"
})))), /* @__PURE__ */ React4.createElement("g", {
  transform: "translate(79 48)"
}, /* @__PURE__ */ React4.createElement("circle", {
  cx: "30",
  cy: "30",
  r: "30",
  fill: "currentColor"
}), /* @__PURE__ */ React4.createElement("path", {
  className: "fa",
  fill: "white",
  d: "M24 18L24 21.4121313 24 24.9925321 24 28.0135927 24 31.6687799C24 33.7441036 23.6719121 35.5919519 23.0141515 37.2107667 22.3563908 38.8280234 21.476735 40.2489658 20.3767689 41.4735937 19.226084 42.7621018 17.9232424 43.8652017 16.4698291 44.7813356 15.0148307 45.7005856 13.5661723 46.4391017 12.1254387 47L10 40.2629882C10.4422054 39.979423 10.8939205 39.6693709 11.3551455 39.337506 11.8179554 39.0040832 12.250651 38.6098963 12.6564021 38.1487133 13.3268425 37.4024069 13.8229367 36.6031268 14.1446847 35.749315 14.4664327 34.8970612 14.6280992 33.9341858 14.6280992 32.8653629 14.6280992 32.1673561 14.6312691 31.427282 14.6391939 30.6420244 14.6439488 29.8583248 14.6471188 28.6929028 14.6471188 27.1519905 14.6471188 25.9335948 14.6439488 24.7011766 14.6391939 23.4531779 14.6312691 22.2036211 14.6280992 21.250094 14.6280992 20.5925966L24 18zM45.9808685 37.1840625L36.7642727 39.7392406 36.7642727 37.1353475 36.7642727 30.1675369C36.5586092 30.2241091 36.3417856 30.2838242 36.1106134 30.3482537 35.8794412 30.4126831 35.6626177 30.4723982 35.4569541 30.5289704 35.2656392 30.5823998 35.05041 30.6421149 34.8128606 30.7081158 34.5753113 30.7741167 34.3744306 30.8306889 34.2070301 30.876261L34.2070301 35.8499012C34.2070301 38.2007908 34.2134072 39.7329548 34.2261616 40.4432504L25.0095657 43C24.9968114 42.2001318 24.9968114 40.8801135 25.0095657 39.0399453 25.0223201 37.199777 25.0286972 34.2988797 25.0286972 30.3372535L25.0286972 22.6528616C25.0286972 20.6398337 25.0223201 19.0275257 25.0095657 17.8143661L34.2261616 15.2591879C34.2261616 16.6750646 34.222973 18.1066559 34.2165958 19.5492472 34.2102186 20.99341 34.2070301 22.5130025 34.2070301 24.1033102 34.3744306 24.0577381 34.5657455 24.0043088 34.7841634 23.9445937 35.0025812 23.8833071 35.2194048 23.823592 35.4378227 23.7623055 35.6945035 23.6915902 35.9320528 23.6255893 36.1488764 23.5643027 36.3672943 23.5045876 36.5729578 23.4480154 36.7642727 23.3945861 36.777027 21.9991382 36.7802156 20.5345466 36.7738384 18.9992396 36.7674613 17.4670756 36.7642727 15.9836265 36.7642727 14.5551782L45.9808685 12C45.9936228 14.5284635 46 16.9092107 46 19.1406701L46 24.4820297 46 31.5362701C46 34.4827394 45.9936228 36.3653368 45.9808685 37.1840625"
}))));
var Logo_default = Logo;

// app/components/layout.tsx
var import_react = require("@remix-run/react");
var Layout = ({
  children,
  className,
  meta: meta2,
  noIndex,
  showNavigation = true
}) => {
  const {
    title,
    description,
    titleAppendSiteName = false,
    url,
    ogImage
  } = meta2 || {};
  return /* @__PURE__ */ React5.createElement(React5.Fragment, null, /* @__PURE__ */ React5.createElement("div", {
    className: `flex flex-col min-h-screen max-w-4xl mx-auto`
  }, /* @__PURE__ */ React5.createElement(import_react.Link, {
    to: "/",
    className: "flex w-full lg:py-12 py-8 text-black items-center"
  }, /* @__PURE__ */ React5.createElement("div", null, /* @__PURE__ */ React5.createElement(Logo_default, null)), /* @__PURE__ */ React5.createElement("div", {
    className: "ml-5 mt-4 text-xl"
  }, "your friend Joel's digital garden")), /* @__PURE__ */ React5.createElement("main", {
    className: "flex-grow flex flex-col justify-center mx-auto "
  }, children)));
};
var layout_default = Layout;

// route:/Users/joel/Code/joelhooks/joelhooks-remix-blog/app/routes/blog.$year.$month.$day.$slug.tsx
var loader = async ({ request, params }) => {
  const page = await getMdxPage({
    contentDir: "legacy_blog",
    slug: `${params.year}-${params.month}-${params.day}-${params.slug}`
  });
  const headers = {
    "Cache-Control": "private, max-age=3600"
  };
  return (0, import_remix4.json)({ page }, { status: 200, headers });
};
function PageRoute() {
  const data = (0, import_remix4.useLoaderData)();
  const { code, frontmatter } = data.page;
  const Component = useMdxComponent(code);
  return /* @__PURE__ */ React6.createElement(layout_default, null, /* @__PURE__ */ React6.createElement("article", {
    className: "prose lg:prose-xl"
  }, frontmatter.banner && /* @__PURE__ */ React6.createElement("img", {
    src: frontmatter.banner
  }), /* @__PURE__ */ React6.createElement("h1", null, frontmatter.title), /* @__PURE__ */ React6.createElement(Component, null)));
}

// route:/Users/joel/Code/joelhooks/joelhooks-remix-blog/app/routes/$slug.tsx
var slug_exports = {};
__export(slug_exports, {
  default: () => PageRoute2,
  loader: () => loader2
});
init_react();
var React7 = __toESM(require("react"));
var import_remix5 = __toESM(require_remix());
var loader2 = async ({ request, params }) => {
  const page = await getMdxPage({
    contentDir: "blog",
    slug: params.slug
  });
  const headers = {
    "Cache-Control": "private, max-age=3600"
  };
  return (0, import_remix5.json)({ page }, { status: 200, headers });
};
function PageRoute2() {
  const data = (0, import_remix5.useLoaderData)();
  const { code, frontmatter } = data.page;
  const Component = useMdxComponent(code);
  return /* @__PURE__ */ React7.createElement(layout_default, null, /* @__PURE__ */ React7.createElement("article", {
    className: "prose lg:prose-xl"
  }, frontmatter.banner && /* @__PURE__ */ React7.createElement("img", {
    src: frontmatter.banner
  }), /* @__PURE__ */ React7.createElement("h1", null, frontmatter.title), /* @__PURE__ */ React7.createElement(Component, null)));
}

// route:/Users/joel/Code/joelhooks/joelhooks-remix-blog/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => IndexRoute,
  loader: () => loader3
});
init_react();
var React8 = __toESM(require("react"));
var import_remix6 = __toESM(require_remix());
var loader3 = async ({ request, params }) => {
  const page = await getMdxPage({
    contentDir: "pages",
    slug: "home"
  });
  return (0, import_remix6.json)({ page });
};
function IndexRoute() {
  const data = (0, import_remix6.useLoaderData)();
  const { code, frontmatter } = data.page;
  const Component = useMdxComponent(code);
  return /* @__PURE__ */ React8.createElement(layout_default, null, /* @__PURE__ */ React8.createElement("article", {
    className: "prose lg:prose-xl"
  }, /* @__PURE__ */ React8.createElement(Component, null)));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "9773bf68", "entry": { "module": "/build/entry.client-LG26RDMR.js", "imports": ["/build/_shared/chunk-5Z7JHOWC.js", "/build/_shared/chunk-ZWT3URCI.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-ICRGGKEM.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/$slug": { "id": "routes/$slug", "parentId": "root", "path": ":slug", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/$slug-75URX4RY.js", "imports": ["/build/_shared/chunk-WTBCLGKR.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/blog.$year.$month.$day.$slug": { "id": "routes/blog.$year.$month.$day.$slug", "parentId": "root", "path": "blog/:year/:month/:day/:slug", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/blog.$year.$month.$day.$slug-HYCKEAEN.js", "imports": ["/build/_shared/chunk-WTBCLGKR.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-DTUVELVL.js", "imports": ["/build/_shared/chunk-WTBCLGKR.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-9773BF68.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/blog.$year.$month.$day.$slug": {
    id: "routes/blog.$year.$month.$day.$slug",
    parentId: "root",
    path: "blog/:year/:month/:day/:slug",
    index: void 0,
    caseSensitive: void 0,
    module: blog_year_month_day_slug_exports
  },
  "routes/$slug": {
    id: "routes/$slug",
    parentId: "root",
    path: ":slug",
    index: void 0,
    caseSensitive: void 0,
    module: slug_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  }
};
module.exports = __toCommonJS(stdin_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
/**
 * @remix-run/node v1.2.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.2.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.2.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICI8c3RkaW4+IiwgInNlcnZlci1lbnRyeS1tb2R1bGU6QHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkIiwgIi4uL2FwcC9lbnRyeS5zZXJ2ZXIudHN4IiwgInJvdXRlOi9Vc2Vycy9qb2VsL0NvZGUvam9lbGhvb2tzL2pvZWxob29rcy1yZW1peC1ibG9nL2FwcC9yb290LnRzeCIsICIuLi9hcHAvdXRpbHMvZ2V0LXVybC50cyIsICIuLi9hcHAvdXRpbHMvcmVtb3ZlLXRyYWlsaW5nLXNsYXNoLnRzIiwgIi4uL2FwcC91dGlscy9nZXQtc29jaWFsLW1ldGFzLnRzIiwgInJvdXRlOi9Vc2Vycy9qb2VsL0NvZGUvam9lbGhvb2tzL2pvZWxob29rcy1yZW1peC1ibG9nL2FwcC9yb3V0ZXMvYmxvZy4keWVhci4kbW9udGguJGRheS4kc2x1Zy50c3giLCAiLi4vYXBwL3V0aWxzL21keC50c3giLCAiLi4vYXBwL3V0aWxzL2NvbXBpbGUtbWR4LnNlcnZlci50cyIsICIuLi9hcHAvY29tcG9uZW50cy9sYXlvdXQudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0xvZ28udHN4IiwgInJvdXRlOi9Vc2Vycy9qb2VsL0NvZGUvam9lbGhvb2tzL2pvZWxob29rcy1yZW1peC1ibG9nL2FwcC9yb3V0ZXMvJHNsdWcudHN4IiwgInJvdXRlOi9Vc2Vycy9qb2VsL0NvZGUvam9lbGhvb2tzL2pvZWxob29rcy1yZW1peC1ibG9nL2FwcC9yb3V0ZXMvaW5kZXgudHN4IiwgInNlcnZlci1hc3NldHMtbWFuaWZlc3Q6QHJlbWl4LXJ1bi9kZXYvYXNzZXRzLW1hbmlmZXN0Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCB7IFJlYWN0IH07XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL25vZGUgdjEuMi4yXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIG5vZGUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL25vZGUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUuY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGE7IH1cbn0pO1xuXG4vKipcbiAqIEByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUgdjEuMi4yXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHNlcnZlclJ1bnRpbWUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc0Nvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2pzb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5qc29uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAncmVkaXJlY3QnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5yZWRpcmVjdDsgfVxufSk7XG5cbi8qKlxuICogQHJlbWl4LXJ1bi9yZWFjdCB2MS4yLjJcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgcmVhY3QgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3JlYWN0Jyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0Zvcm0nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuRm9ybTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGl2ZVJlbG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaXZlUmVsb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTWV0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5NZXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTmF2TGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5OYXZMaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1ByZWZldGNoUGFnZUxpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlByZWZldGNoUGFnZUxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhCcm93c2VyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4QnJvd3NlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4U2VydmVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4U2VydmVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2NyaXB0cycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JpcHRzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2Nyb2xsUmVzdG9yYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2Nyb2xsUmVzdG9yYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VBY3Rpb25EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUFjdGlvbkRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VCZWZvcmVVbmxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQmVmb3JlVW5sb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQ2F0Y2gnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQ2F0Y2g7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVycycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZvcm1BY3Rpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRm9ybUFjdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUhyZWYnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlSHJlZjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvYWRlckRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9hZGVyRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvY2F0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvY2F0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTWF0Y2hlcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VNYXRjaGVzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0aW9uVHlwZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0aW9uVHlwZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXRDb250ZXh0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldENvbnRleHQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUmVzb2x2ZWRQYXRoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVJlc29sdmVkUGF0aDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVNlYXJjaFBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTZWFyY2hQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTdWJtaXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU3VibWl0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlVHJhbnNpdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VUcmFuc2l0aW9uOyB9XG59KTtcblxuIiwgImV4cG9ydCAqIGZyb20gXCJAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGRcIjsiLCAiXG5pbXBvcnQgKiBhcyBlbnRyeVNlcnZlciBmcm9tIFwiL1VzZXJzL2pvZWwvQ29kZS9qb2VsaG9va3Mvam9lbGhvb2tzLXJlbWl4LWJsb2cvYXBwL2VudHJ5LnNlcnZlci50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMCBmcm9tIFwiL1VzZXJzL2pvZWwvQ29kZS9qb2VsaG9va3Mvam9lbGhvb2tzLXJlbWl4LWJsb2cvYXBwL3Jvb3QudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEgZnJvbSBcIi9Vc2Vycy9qb2VsL0NvZGUvam9lbGhvb2tzL2pvZWxob29rcy1yZW1peC1ibG9nL2FwcC9yb3V0ZXMvYmxvZy4keWVhci4kbW9udGguJGRheS4kc2x1Zy50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMiBmcm9tIFwiL1VzZXJzL2pvZWwvQ29kZS9qb2VsaG9va3Mvam9lbGhvb2tzLXJlbWl4LWJsb2cvYXBwL3JvdXRlcy8kc2x1Zy50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMyBmcm9tIFwiL1VzZXJzL2pvZWwvQ29kZS9qb2VsaG9va3Mvam9lbGhvb2tzLXJlbWl4LWJsb2cvYXBwL3JvdXRlcy9pbmRleC50c3hcIjtcbiAgZXhwb3J0IHsgZGVmYXVsdCBhcyBhc3NldHMgfSBmcm9tIFwiQHJlbWl4LXJ1bi9kZXYvYXNzZXRzLW1hbmlmZXN0XCI7XG4gIGV4cG9ydCBjb25zdCBlbnRyeSA9IHsgbW9kdWxlOiBlbnRyeVNlcnZlciB9O1xuICBleHBvcnQgY29uc3Qgcm91dGVzID0ge1xuICAgIFwicm9vdFwiOiB7XG4gICAgICBpZDogXCJyb290XCIsXG4gICAgICBwYXJlbnRJZDogdW5kZWZpbmVkLFxuICAgICAgcGF0aDogXCJcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMFxuICAgIH0sXG4gIFwicm91dGVzL2Jsb2cuJHllYXIuJG1vbnRoLiRkYXkuJHNsdWdcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2Jsb2cuJHllYXIuJG1vbnRoLiRkYXkuJHNsdWdcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiYmxvZy86eWVhci86bW9udGgvOmRheS86c2x1Z1wiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxXG4gICAgfSxcbiAgXCJyb3V0ZXMvJHNsdWdcIjoge1xuICAgICAgaWQ6IFwicm91dGVzLyRzbHVnXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcIjpzbHVnXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTJcbiAgICB9LFxuICBcInJvdXRlcy9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IHVuZGVmaW5lZCxcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTNcbiAgICB9XG4gIH07IiwgImltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSBcInJlYWN0LWRvbS9zZXJ2ZXJcIjtcbmltcG9ydCB7IFJlbWl4U2VydmVyIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgdHlwZSB7IEVudHJ5Q29udGV4dCB9IGZyb20gXCJyZW1peFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVSZXF1ZXN0KFxuICByZXF1ZXN0OiBSZXF1ZXN0LFxuICByZXNwb25zZVN0YXR1c0NvZGU6IG51bWJlcixcbiAgcmVzcG9uc2VIZWFkZXJzOiBIZWFkZXJzLFxuICByZW1peENvbnRleHQ6IEVudHJ5Q29udGV4dFxuKSB7XG4gIGNvbnN0IG1hcmt1cCA9IHJlbmRlclRvU3RyaW5nKFxuICAgIDxSZW1peFNlcnZlciBjb250ZXh0PXtyZW1peENvbnRleHR9IHVybD17cmVxdWVzdC51cmx9IC8+XG4gICk7XG5cbiAgcmVzcG9uc2VIZWFkZXJzLnNldChcIkNvbnRlbnQtVHlwZVwiLCBcInRleHQvaHRtbFwiKTtcblxuICByZXR1cm4gbmV3IFJlc3BvbnNlKFwiPCFET0NUWVBFIGh0bWw+XCIgKyBtYXJrdXAsIHtcbiAgICBzdGF0dXM6IHJlc3BvbnNlU3RhdHVzQ29kZSxcbiAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnNcbiAgfSk7XG59XG4iLCAiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge0xpbmtzLCBNZXRhLCBNZXRhRnVuY3Rpb24sIFNjcm9sbFJlc3RvcmF0aW9ufSBmcm9tICdyZW1peCdcbmltcG9ydCB7TGl2ZVJlbG9hZCwgT3V0bGV0fSBmcm9tICdyZW1peCdcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy90YWlsd2luZC5jc3MnXG5pbXBvcnQgdHlwZSB7Z2V0RW52fSBmcm9tICd+L3V0aWxzL2Vudi5zZXJ2ZXInXG5pbXBvcnQge2dldFVybH0gZnJvbSAnfi91dGlscy9nZXQtdXJsJ1xuaW1wb3J0IHtnZXRTb2NpYWxNZXRhc30gZnJvbSAnfi91dGlscy9nZXQtc29jaWFsLW1ldGFzJ1xuXG5leHBvcnQgZnVuY3Rpb24gbGlua3MoKSB7XG4gIHJldHVybiBbe3JlbDogJ3N0eWxlc2hlZXQnLCBocmVmOiBzdHlsZXN9XVxufVxuXG5leHBvcnQgdHlwZSBMb2FkZXJEYXRhID0ge1xuICBFTlY6IFJldHVyblR5cGU8dHlwZW9mIGdldEVudj5cbiAgcmVxdWVzdEluZm86IHtcbiAgICBvcmlnaW46IHN0cmluZ1xuICAgIHBhdGg6IHN0cmluZ1xuICAgIHNlc3Npb24/OiB7XG4gICAgICBlbWFpbDogc3RyaW5nIHwgdW5kZWZpbmVkXG4gICAgICBtYWdpY0xpbmtWZXJpZmllZDogYm9vbGVhbiB8IHVuZGVmaW5lZFxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKHtkYXRhfSkgPT4ge1xuICBjb25zdCByZXF1ZXN0SW5mbyA9IChkYXRhIGFzIExvYWRlckRhdGEgfCB1bmRlZmluZWQpPy5yZXF1ZXN0SW5mb1xuICBjb25zdCB0aXRsZSA9IFwiSm9lbCdzIGRpZ2l0YWwgZ2FyZGVuXCJcbiAgY29uc3QgZGVzY3JpcHRpb24gPSAnUmFtYmxpbmdzIG9mIGEgc29mdHdhcmUgZGV2ZWxvcGVyJ1xuICByZXR1cm4ge1xuICAgIHZpZXdwb3J0OiAnd2lkdGg9ZGV2aWNlLXdpZHRoLGluaXRpYWwtc2NhbGU9MSx2aWV3cG9ydC1maXQ9Y292ZXInLFxuICAgIC4uLmdldFNvY2lhbE1ldGFzKHtcbiAgICAgIG9yaWdpbjogcmVxdWVzdEluZm8/Lm9yaWdpbiA/PyAnJyxcbiAgICAgIGtleXdvcmRzOiAnJyxcbiAgICAgIHVybDogZ2V0VXJsKHJlcXVlc3RJbmZvKSxcbiAgICAgIGltYWdlOlxuICAgICAgICAnaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vam9lbGhvb2tzLWNvbS9pbWFnZS91cGxvYWQvdjE2NDYwMjM0MTQvc2VvL2pvZWxob29rcy1jb20ucG5nJyxcbiAgICAgIHRpdGxlLFxuICAgICAgZGVzY3JpcHRpb24sXG4gICAgfSksXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xuICByZXR1cm4gKFxuICAgIDxodG1sIGxhbmc9XCJlblwiPlxuICAgICAgPGhlYWQ+XG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICAgIDx0aXRsZT5Kb2VsIEhvb2tzIERpZ2l0YWwgR2FyZGVuZXI8L3RpdGxlPlxuICAgICAgICA8TWV0YSAvPlxuICAgICAgICA8TGlua3MgLz5cbiAgICAgIDwvaGVhZD5cbiAgICAgIDxib2R5IGNsYXNzTmFtZT1cInAtM1wiPlxuICAgICAgICA8T3V0bGV0IC8+XG4gICAgICAgIDxTY3JvbGxSZXN0b3JhdGlvbiAvPlxuICAgICAgICB7cHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcgPyA8TGl2ZVJlbG9hZCAvPiA6IG51bGx9XG4gICAgICA8L2JvZHk+XG4gICAgPC9odG1sPlxuICApXG59XG4iLCAiaW1wb3J0IHtyZW1vdmVUcmFpbGluZ1NsYXNofSBmcm9tICd+L3V0aWxzL3JlbW92ZS10cmFpbGluZy1zbGFzaCdcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVybChyZXF1ZXN0SW5mbz86IHtvcmlnaW46IHN0cmluZzsgcGF0aDogc3RyaW5nfSkge1xuICByZXR1cm4gcmVtb3ZlVHJhaWxpbmdTbGFzaChcbiAgICBgJHtyZXF1ZXN0SW5mbz8ub3JpZ2luID8/ICdodHRwczovL2pvZWxob29rcy5jb20nfSR7XG4gICAgICByZXF1ZXN0SW5mbz8ucGF0aCA/PyAnJ1xuICAgIH1gLFxuICApXG59XG4iLCAiZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVRyYWlsaW5nU2xhc2goczogc3RyaW5nKSB7XG4gIHJldHVybiBzLmVuZHNXaXRoKCcvJykgPyBzLnNsaWNlKDAsIC0xKSA6IHNcbn1cbiIsICJleHBvcnQgZnVuY3Rpb24gZ2V0U29jaWFsTWV0YXMoe1xuICB1cmwsXG4gIHRpdGxlID0gJ1JhbWJsaW5ncyBvZiBhIHNvZnR3YXJlIGRldmVsb3BlcicsXG4gIGRlc2NyaXB0aW9uID0gYGpvZWwncyBkaWdpdGFsIGdhcmRlbmAsXG4gIG9yaWdpbixcbiAgaW1hZ2UgPSAnJyxcbiAga2V5d29yZHMgPSAnJyxcbn06IHtcbiAgb3JpZ2luOiBzdHJpbmdcbiAgaW1hZ2U/OiBzdHJpbmdcbiAgdXJsOiBzdHJpbmdcbiAgdGl0bGU/OiBzdHJpbmdcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmdcbiAga2V5d29yZHM/OiBzdHJpbmdcbn0pIHtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZSxcbiAgICBkZXNjcmlwdGlvbixcbiAgICBrZXl3b3JkcyxcbiAgICBpbWFnZSxcbiAgICAnb2c6dXJsJzogdXJsLFxuICAgICdvZzp0aXRsZSc6IHRpdGxlLFxuICAgICdvZzpkZXNjcmlwdGlvbic6IGRlc2NyaXB0aW9uLFxuICAgICdvZzppbWFnZSc6IGltYWdlLFxuICAgICd0d2l0dGVyOmNhcmQnOiBpbWFnZSA/ICdzdW1tYXJ5X2xhcmdlX2ltYWdlJyA6ICdzdW1tYXJ5JyxcbiAgICAndHdpdHRlcjpjcmVhdG9yJzogJ0BqaG9va3MnLFxuICAgICd0d2l0dGVyOnNpdGUnOiAnQGpob29rcycsXG4gICAgJ3R3aXR0ZXI6dGl0bGUnOiB0aXRsZSxcbiAgICAndHdpdHRlcjpkZXNjcmlwdGlvbic6IGRlc2NyaXB0aW9uLFxuICAgICd0d2l0dGVyOmltYWdlJzogaW1hZ2UsXG4gICAgJ3R3aXR0ZXI6YWx0JzogdGl0bGUsXG4gIH1cbn1cbiIsICJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7anNvbiwgTG9hZGVyRnVuY3Rpb24sIHVzZUxvYWRlckRhdGF9IGZyb20gJ3JlbWl4J1xuaW1wb3J0IHtnZXRNZHhQYWdlLCB1c2VNZHhDb21wb25lbnR9IGZyb20gJ34vdXRpbHMvbWR4J1xuaW1wb3J0IExheW91dCBmcm9tICd+L2NvbXBvbmVudHMvbGF5b3V0J1xuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7cmVxdWVzdCwgcGFyYW1zfSkgPT4ge1xuICBjb25zdCBwYWdlID0gYXdhaXQgZ2V0TWR4UGFnZSh7XG4gICAgY29udGVudERpcjogJ2xlZ2FjeV9ibG9nJyxcbiAgICBzbHVnOiBgJHtwYXJhbXMueWVhcn0tJHtwYXJhbXMubW9udGh9LSR7cGFyYW1zLmRheX0tJHtwYXJhbXMuc2x1Z31gLFxuICB9KVxuXG4gIGNvbnN0IGhlYWRlcnMgPSB7XG4gICAgJ0NhY2hlLUNvbnRyb2wnOiAncHJpdmF0ZSwgbWF4LWFnZT0zNjAwJyxcbiAgfVxuXG4gIHJldHVybiBqc29uKHtwYWdlfSwge3N0YXR1czogMjAwLCBoZWFkZXJzfSlcbn1cblxudHlwZSBMb2FkZXJEYXRhID0ge1xuICBwYWdlOiB7Y29kZTogc3RyaW5nOyBmcm9udG1hdHRlcj86IGFueX1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFnZVJvdXRlKCkge1xuICBjb25zdCBkYXRhID0gdXNlTG9hZGVyRGF0YTxMb2FkZXJEYXRhPigpXG4gIGNvbnN0IHtjb2RlLCBmcm9udG1hdHRlcn0gPSBkYXRhLnBhZ2VcblxuICBjb25zdCBDb21wb25lbnQgPSB1c2VNZHhDb21wb25lbnQoY29kZSlcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPGFydGljbGUgY2xhc3NOYW1lPVwicHJvc2UgbGc6cHJvc2UteGxcIj5cbiAgICAgICAge2Zyb250bWF0dGVyLmJhbm5lciAmJiA8aW1nIHNyYz17ZnJvbnRtYXR0ZXIuYmFubmVyfSAvPn1cbiAgICAgICAgPGgxPntmcm9udG1hdHRlci50aXRsZX08L2gxPlxuICAgICAgICA8Q29tcG9uZW50IC8+XG4gICAgICA8L2FydGljbGU+XG4gICAgPC9MYXlvdXQ+XG4gIClcbn1cbiIsICJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCAqIGFzIG1keEJ1bmRsZXIgZnJvbSAnbWR4LWJ1bmRsZXIvY2xpZW50J1xuaW1wb3J0IHsgZG93bmxvYWRNZHhGaWxlT3JEaXJlY3RvcnkgfSBmcm9tICd+L3V0aWxzL2NvbXBpbGUtbWR4LnNlcnZlcic7XG5pbXBvcnQgUmVzcG9uc2l2ZUVtYmVkIGZyb20gJ3JlYWN0LXJlc3BvbnNpdmUtZW1iZWQnXG5pbXBvcnQge1R3aXR0ZXJUd2VldEVtYmVkfSBmcm9tICdyZWFjdC10d2l0dGVyLWVtYmVkJ1xuXG5jb25zdCBtZHhDb21wb25lbnRzID0ge1xuICAgIFJlc3BvbnNpdmVFbWJlZCxcbiAgICBUd2l0dGVyVHdlZXRFbWJlZFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0TWR4UGFnZShvcHRpb25zOiB7Y29udGVudERpcjogc3RyaW5nLCBzbHVnPzpzdHJpbmd9KSB7XG4gIGNvbnN0IHsgY29udGVudERpciwgc2x1ZyB9ID0gb3B0aW9uc1xuICByZXR1cm4gZG93bmxvYWRNZHhGaWxlT3JEaXJlY3RvcnkoYCR7Y29udGVudERpcn0vJHtzbHVnfWApXG59XG5cbi8qKlxuICogVGhpcyBzaG91bGQgYmUgcmVuZGVyZWQgd2l0aGluIGEgdXNlTWVtb1xuICogQHBhcmFtIGNvZGUgdGhlIGNvZGUgdG8gZ2V0IHRoZSBjb21wb25lbnQgZnJvbVxuICogQHJldHVybnMgdGhlIGNvbXBvbmVudFxuICovXG4gZXhwb3J0IGZ1bmN0aW9uIGdldE1keENvbXBvbmVudChjb2RlOiBzdHJpbmcpIHtcbiAgY29uc3QgQ29tcG9uZW50ID0gbWR4QnVuZGxlci5nZXRNRFhDb21wb25lbnQoY29kZSlcblxuICBmdW5jdGlvbiBNZHhDb21wb25lbnQoe1xuICAgIGNvbXBvbmVudHMsXG4gICAgLi4ucmVzdFxuICB9OiBQYXJhbWV0ZXJzPHR5cGVvZiBDb21wb25lbnQ+WycwJ10pIHtcbiAgICByZXR1cm4gKFxuICAgICAgPENvbXBvbmVudCBjb21wb25lbnRzPXt7Li4ubWR4Q29tcG9uZW50cywgLi4uY29tcG9uZW50c319IHsuLi5yZXN0fSAvPlxuICAgIClcbiAgfVxuXG4gIHJldHVybiBNZHhDb21wb25lbnRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZU1keENvbXBvbmVudChjb2RlOiBzdHJpbmcpIHtcbiAgcmV0dXJuIFJlYWN0LnVzZU1lbW8oKCkgPT4gZ2V0TWR4Q29tcG9uZW50KGNvZGUpLCBbY29kZV0pXG59IiwgImltcG9ydCBub2RlUGF0aCBmcm9tIFwicGF0aFwiO1xuaW1wb3J0IGZzIGZyb20gXCJmcy9wcm9taXNlc1wiO1xuXG5pbXBvcnQgeyBidW5kbGVNRFggfSBmcm9tICdtZHgtYnVuZGxlcic7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkb3dubG9hZE1keEZpbGVPckRpcmVjdG9yeShyZWxhdGl2ZU1keEZpbGVPckRpcmVjdG9yeTogc3RyaW5nKSB7XG4gIGNvbnN0IG1keEZpbGVPckRpcmVjdG9yeSA9IG5vZGVQYXRoLmpvaW4oX19kaXJuYW1lLCBcIi4uXCIsIFwiY29udGVudFwiLCByZWxhdGl2ZU1keEZpbGVPckRpcmVjdG9yeSk7XG4gIGxldCBpc0RpcmVjdG9yeSA9IGZhbHNlO1xuXG4gIHRyeSB7XG4gICAgY29uc3Qgc3RhdHMgPSBhd2FpdCBmcy5zdGF0KG1keEZpbGVPckRpcmVjdG9yeSlcbiAgICAgaXNEaXJlY3RvcnkgPSBzdGF0cy5pc0RpcmVjdG9yeSgpIFxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIFxuICB9XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBmaWxlTmFtZSA9IGlzRGlyZWN0b3J5ID8gYCR7bWR4RmlsZU9yRGlyZWN0b3J5fS9pbmRleGAgOiBtZHhGaWxlT3JEaXJlY3Rvcnk7XG4gICAgY29uc3QgZmlsZSA9IGF3YWl0IGZzLnJlYWRGaWxlKGZpbGVOYW1lICsgJy5tZHgnLCBcInV0ZjhcIilcblxuICAgIGNvbnN0IHtmcm9udG1hdHRlciwgY29kZX0gPSBhd2FpdCBidW5kbGVNRFgoe1xuICAgICAgc291cmNlOiBmaWxlLFxuICAgIH0pXG5cbiAgICByZXR1cm4ge1xuICAgICAgY29kZSxcbiAgICAgIGZyb250bWF0dGVyXG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICB9XG59IiwgImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExvZ28gZnJvbSAnfi9jb21wb25lbnRzL0xvZ28nXG5pbXBvcnQge0xpbmt9IGZyb20gJ0ByZW1peC1ydW4vcmVhY3QnXG5cbmV4cG9ydCB0eXBlIExheW91dFByb3BzID0ge1xuICBtZXRhPzogYW55XG4gIG5vSW5kZXg/OiBib29sZWFuXG4gIGNsYXNzTmFtZT86IHN0cmluZ1xuICBzaG93TmF2aWdhdGlvbj86IGJvb2xlYW5cbn1cblxuY29uc3QgTGF5b3V0OiBSZWFjdC5GQzxMYXlvdXRQcm9wcz4gPSAoe1xuICBjaGlsZHJlbixcbiAgY2xhc3NOYW1lLFxuICBtZXRhLFxuICBub0luZGV4LFxuICBzaG93TmF2aWdhdGlvbiA9IHRydWUsXG59KSA9PiB7XG4gIGNvbnN0IHtcbiAgICB0aXRsZSxcbiAgICBkZXNjcmlwdGlvbixcbiAgICB0aXRsZUFwcGVuZFNpdGVOYW1lID0gZmFsc2UsXG4gICAgdXJsLFxuICAgIG9nSW1hZ2UsXG4gIH0gPSBtZXRhIHx8IHt9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2BmbGV4IGZsZXgtY29sIG1pbi1oLXNjcmVlbiBtYXgtdy00eGwgbXgtYXV0b2B9PlxuICAgICAgICA8TGlua1xuICAgICAgICAgIHRvPVwiL1wiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCB3LWZ1bGwgbGc6cHktMTIgcHktOCB0ZXh0LWJsYWNrIGl0ZW1zLWNlbnRlclwiXG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPExvZ28gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1sLTUgbXQtNCB0ZXh0LXhsXCI+XG4gICAgICAgICAgICB5b3VyIGZyaWVuZCBKb2VsJ3MgZGlnaXRhbCBnYXJkZW5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJmbGV4LWdyb3cgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBteC1hdXRvIFwiPlxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9tYWluPlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0XG4iLCAiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmNvbnN0IExvZ286IFJlYWN0LkZDID0gKHByb3BzKSA9PiAoXG4gIDxzdmdcbiAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICB3aWR0aD1cIjE0MFwiXG4gICAgaGVpZ2h0PVwiMTE1XCJcbiAgICB2aWV3Qm94PVwiMCAwIDE0MCAxMTVcIlxuICAgIHN0eWxlPXt7Y29sb3I6ICdibGFjaycsIHN0cm9rZTogJ2JsYWNrJ319XG4gID5cbiAgICA8dGl0bGU+am9lbGhvb2tzLmNvbTwvdGl0bGU+XG4gICAgPGRlZnM+XG4gICAgICA8cGF0aFxuICAgICAgICBpZD1cImpvZWxob29rcy1jb20tYVwiXG4gICAgICAgIGQ9XCJNOS43ODEzNTc4OCwxOC4xODg3MTQyIEMxMC4yMTYyOTcyLDE5LjcyMjMyNSAxMC4yMTYyOTcyLDIyLjUxNjcwODkgOS43ODEzNTc4OCwyNi41NzE4NjU3IEM4LjkyMTQyMjc5LDM0LjU4OTQ3MTQgMTIuODE2NzgxNCwzOS45NzI4NTUxIDIxLjQ2NzQzMzYsNDIuNzIyMDE2NyBDMjUuOTAyMDQzOSw0Ni45NDI3OTk5IDI4LjExOTM0OSw1Mi4yNDU2MDU5IDI4LjExOTM0OSw1OC42MzA0MzQ4IEMyOC4xMTkzNDksNjguMjA3Njc4MSAxOS4zNDkwMDU0LDY4LjQ1NTE4NzYgMTkuMzQ5MDA1NCw3Ny43NDc3MTQgQzE5LjM0OTAwNTQsODMuOTQyNzMxNyAyMC4wNTUxNDgyLDg3LjA0MDI0MDUgMjEuNDY3NDMzNiw4Ny4wNDAyNDA1XCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBpZD1cImpvZWxob29rcy1jb20tYlwiXG4gICAgICAgIGQ9XCJNMjkuNTA2NTU1NywzMS4yNDY3NjIzIEMyMi42NTE0MSwzNS43ODUxMDI4IDE5LjIyMzgzNzIsNDIuNTk2Mjk4IDE5LjIyMzgzNzIsNTEuNjgwMzQ3OSBDMTkuMjIzODM3Miw2NS4zMDY0MjI3IDM0LjA5OTEyODcsNjUuMzA2NDIyNyAyNi45MjMzOTMxLDg5LjQxNDQzMTFcIlxuICAgICAgLz5cbiAgICA8L2RlZnM+XG4gICAgPGcgZmlsbD1cIm5vbmVcIiBmaWxsUnVsZT1cImV2ZW5vZGRcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMSAtMilcIj5cbiAgICAgIDxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgwIDQ4LjU0MylcIj5cbiAgICAgICAgPHJlY3RcbiAgICAgICAgICBjbGFzc05hbWU9XCJzYlwiXG4gICAgICAgICAgd2lkdGg9XCI1My43OTdcIlxuICAgICAgICAgIGhlaWdodD1cIjM5LjA4N1wiXG4gICAgICAgICAgLy8gc3Ryb2tlPXtiYXNlQ29sb3J9XG4gICAgICAgICAgc3Ryb2tlV2lkdGg9XCIxLjI2NlwiXG4gICAgICAgICAgcng9XCIxLjI2NlwiXG4gICAgICAgIC8+XG4gICAgICAgIDxnXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZmJcIlxuICAgICAgICAgIC8vIGZpbGw9e2Jhc2VDb2xvcn1cbiAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMy43OTcgMjIuNjk2KVwiXG4gICAgICAgID5cbiAgICAgICAgICA8cmVjdCB3aWR0aD1cIjYuMzI5XCIgaGVpZ2h0PVwiMS4yNjFcIiB5PVwiMTEuMzQ4XCIgcng9XCIuNjNcIiAvPlxuICAgICAgICAgIDxyZWN0IHdpZHRoPVwiNi4zMjlcIiBoZWlnaHQ9XCIxLjI2MVwiIHg9XCI5LjQ5NFwiIHk9XCIxMS4zNDhcIiByeD1cIi42M1wiIC8+XG4gICAgICAgICAgPHJlY3Qgd2lkdGg9XCI2Ljk2MlwiIGhlaWdodD1cIjEuMjYxXCIgeD1cIjIwLjI1M1wiIHk9XCIxMS4zNDhcIiByeD1cIi42M1wiIC8+XG4gICAgICAgICAgPHJlY3Qgd2lkdGg9XCIzLjc5N1wiIGhlaWdodD1cIjEuMjYxXCIgeD1cIjEwLjc1OVwiIHk9XCI3LjU2NVwiIHJ4PVwiLjYzXCIgLz5cbiAgICAgICAgICA8cmVjdCB3aWR0aD1cIjQuNDNcIiBoZWlnaHQ9XCIxLjI2MVwiIHk9XCI3LjU2NVwiIHJ4PVwiLjYzXCIgLz5cbiAgICAgICAgICA8cmVjdCB3aWR0aD1cIjUuMDYzXCIgaGVpZ2h0PVwiMS4yNjFcIiB4PVwiMTcuMDg5XCIgeT1cIjMuNzgzXCIgcng9XCIuNjNcIiAvPlxuICAgICAgICAgIDxyZWN0IHdpZHRoPVwiMTAuNzU5XCIgaGVpZ2h0PVwiMS4yNjFcIiB5PVwiMy43ODNcIiByeD1cIi42M1wiIC8+XG4gICAgICAgICAgPHJlY3Qgd2lkdGg9XCI2LjMyOVwiIGhlaWdodD1cIjEuMjYxXCIgcng9XCIuNjNcIiAvPlxuICAgICAgICA8L2c+XG4gICAgICAgIDxlbGxpcHNlXG4gICAgICAgICAgY3g9XCIzLjc5N1wiXG4gICAgICAgICAgY3k9XCIzLjc4M1wiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZmJcIlxuICAgICAgICAgIC8vIGZpbGw9e2Jhc2VDb2xvcn1cbiAgICAgICAgICByeD1cIjEuMjY2XCJcbiAgICAgICAgICByeT1cIjEuMjYxXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGVsbGlwc2VcbiAgICAgICAgICBjeD1cIjcuNTk1XCJcbiAgICAgICAgICBjeT1cIjMuNzgzXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJmYlwiXG4gICAgICAgICAgLy8gZmlsbD17YmFzZUNvbG9yfVxuICAgICAgICAgIHJ4PVwiMS4yNjZcIlxuICAgICAgICAgIHJ5PVwiMS4yNjFcIlxuICAgICAgICAvPlxuICAgICAgICA8ZWxsaXBzZVxuICAgICAgICAgIGN4PVwiMTEuMzkyXCJcbiAgICAgICAgICBjeT1cIjMuNzgzXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJmYlwiXG4gICAgICAgICAgLy8gZmlsbD17YmFzZUNvbG9yfVxuICAgICAgICAgIHJ4PVwiMS4yNjZcIlxuICAgICAgICAgIHJ5PVwiMS4yNjFcIlxuICAgICAgICAvPlxuICAgICAgPC9nPlxuICAgICAgPHJlY3RcbiAgICAgICAgd2lkdGg9XCI0Ni4yMDNcIlxuICAgICAgICBoZWlnaHQ9XCIzMi4xNTJcIlxuICAgICAgICB4PVwiNTMuNzk3XCJcbiAgICAgICAgeT1cIjY5Ljk3OFwiXG4gICAgICAgIGNsYXNzTmFtZT1cInNiXCJcbiAgICAgICAgLy8gc3Ryb2tlPXtiYXNlQ29sb3J9XG4gICAgICAgIHN0cm9rZVdpZHRoPVwiMS4yNjZcIlxuICAgICAgICByeD1cIjEuMjY2XCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBjbGFzc05hbWU9XCJmYlwiXG4gICAgICAgIC8vIGZpbGw9e2Jhc2VDb2xvcn1cbiAgICAgICAgZD1cIk05MC4yMjUzNDgsOTIuNTAyNTkyMSBMOTIuNTYxMzMxNyw5Mi4xMTA5MTIgQzkyLjkwNjA2NjcsOTIuMDUzMTA5NCA5My4yMzIzODc4LDkyLjI4NTcxNDEgOTMuMjkwMTkwMyw5Mi42MzA0NDkgQzkzLjMwMTgwODQsOTIuNjk5NzM5MiA5My4zMDE4MDg0LDkyLjc3MDQ4MDQgOTMuMjkwMTkwMyw5Mi44Mzk3NzA2IEw5Mi44OTg1MTAyLDk1LjE3NTc1NDMgQzkyLjg0MDcwNzcsOTUuNTIwNDg5MyA5Mi41MTQzODY1LDk1Ljc1MzA5MzkgOTIuMTY5NjUxNiw5NS42OTUyOTE0IEM5Mi4wMzk3NjMsOTUuNjczNTEyNiA5MS45MTk5MDM3LDk1LjYxMTc1NjcgOTEuODI2Nzc2NCw5NS41MTg2Mjk1IEw4OS44ODI0NzI4LDkzLjU3NDMyNTkgQzg5LjYzNTMwNTYsOTMuMzI3MTU4NiA4OS42MzUzMDU2LDkyLjkyNjQyMTMgODkuODgyNDcyOCw5Mi42NzkyNTQgQzg5Ljk3NTYwMDEsOTIuNTg2MTI2OCA5MC4wOTU0NTk0LDkyLjUyNDM3MDggOTAuMjI1MzQ4LDkyLjUwMjU5MjEgWlwiXG4gICAgICAgIHRyYW5zZm9ybT1cInJvdGF0ZSg0NSA5MS40OTggOTMuOTAzKVwiXG4gICAgICAvPlxuICAgICAgPGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDI1Ljk1KVwiPlxuICAgICAgICA8ZyB0cmFuc2Zvcm09XCJtYXRyaXgoLTEgMCAwIDEgNTkuNDk0IDApXCI+XG4gICAgICAgICAgPGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDQuNDMpXCI+XG4gICAgICAgICAgICA8ZWxsaXBzZVxuICAgICAgICAgICAgICBjeD1cIjI0LjA1MVwiXG4gICAgICAgICAgICAgIGN5PVwiODAuNjk2XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2IgZmFcIlxuICAgICAgICAgICAgICAvLyBmaWxsPXthbHRDb2xvcn1cbiAgICAgICAgICAgICAgLy8gc3Ryb2tlPXtiYXNlQ29sb3J9XG4gICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMS4yNjZcIlxuICAgICAgICAgICAgICByeD1cIjE1LjE5XCJcbiAgICAgICAgICAgICAgcnk9XCIxLjg5MVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGcgc3Ryb2tlTGluZWNhcD1cInNxdWFyZVwiPlxuICAgICAgICAgICAgICA8dXNlXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2JcIlxuICAgICAgICAgICAgICAgIC8vIHN0cm9rZT17YmFzZUNvbG9yfVxuICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiNC40M1wiXG4gICAgICAgICAgICAgICAgeGxpbmtIcmVmPVwiI2pvZWxob29rcy1jb20tYVwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDx1c2VcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzYVwiXG4gICAgICAgICAgICAgICAgLy8gc3Ryb2tlPXthbHRDb2xvcn1cbiAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjEuODk5XCJcbiAgICAgICAgICAgICAgICB4bGlua0hyZWY9XCIjam9lbGhvb2tzLWNvbS1hXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgIDxnIHN0cm9rZUxpbmVjYXA9XCJzcXVhcmVcIj5cbiAgICAgICAgICAgICAgPHVzZVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNiXCJcbiAgICAgICAgICAgICAgICAvLyBzdHJva2U9e2Jhc2VDb2xvcn1cbiAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjQuNDNcIlxuICAgICAgICAgICAgICAgIHhsaW5rSHJlZj1cIiNqb2VsaG9va3MtY29tLWJcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8dXNlXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2FcIlxuICAgICAgICAgICAgICAgIC8vIHN0cm9rZT17YWx0Q29sb3J9XG4gICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIxLjg5OVwiXG4gICAgICAgICAgICAgICAgeGxpbmtIcmVmPVwiI2pvZWxob29rcy1jb20tYlwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmYlwiXG4gICAgICAgICAgICAgIC8vIGZpbGw9e2Jhc2VDb2xvcn1cbiAgICAgICAgICAgICAgZD1cIk0yNS41OTM2MzkyLDIwLjAwMzQzMzMgTDMwLjIwNzA4OTMsMjguMzg1Mjk0NyBMMzAuMjIxNTMxNCwzOS4wODk2MjU2IEMzMC4yMjIwMDMsMzkuNDM5MTcyNSAzMC41MDU3NDkyLDM5LjcyMjE1NDEgMzAuODU1Mjk2MiwzOS43MjE2ODI1IEMzMC45OTUyMTg5LDM5LjcyMTQ5MzcgMzEuMTMxMTM0OCwzOS42NzQ5NDI3IDMxLjI0MTc5MjUsMzkuNTg5MzA4IEw1MC45OTcwOTYxLDI0LjMwMTI2NjYgQzUxLjI3MzUzNDcsMjQuMDg3MzM5IDUxLjMyNDIwOTksMjMuNjg5ODE4NyA1MS4xMTAyODIzLDIzLjQxMzM4MDEgQzUxLjAxMjgyNDksMjMuMjg3NDQ1MSA1MC44NzE0NzczLDIzLjIwMjg3NDkgNTAuNzE0NDMsMjMuMTc2NTM2MyBMMjYuMjUyNzk0NiwxOS4wNzQwNTM1IEMyNS45MDgwNjE4LDE5LjAxNjIzOCAyNS41ODE3MzIsMTkuMjQ4ODMwNSAyNS41MjM5MTY1LDE5LjU5MzU2MzMgQzI1LjUwMDM0MDMsMTkuNzM0MTM5OSAyNS41MjQ5MDczLDE5Ljg3ODU1OTEgMjUuNTkzNjM5MiwyMC4wMDM0MzMzIFpcIlxuICAgICAgICAgICAgICB0cmFuc2Zvcm09XCJyb3RhdGUoLTEzIDM4LjM3OSAyOS4zOTMpXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmYlwiXG4gICAgICAgICAgICAgIC8vIGZpbGw9e2Jhc2VDb2xvcn1cbiAgICAgICAgICAgICAgZD1cIk0wLjQ1MzU5MDQ0NCwzLjg3ODA0NTM4IEwzLjUxMjI1NzIxLDkuNzg5ODY2MTcgTDMuNDk3MDQ1MDIsMTcuMzMxODIgQzMuNDk2MzM5OTgsMTcuNjgxMzY2NiAzLjc3OTEzMTk0LDE3Ljk2NTMwMTcgNC4xMjg2Nzg1NCwxNy45NjYwMDY3IEM0LjI3NTU2MDkyLDE3Ljk2NjMwMyA0LjQxNzk3MzMyLDE3LjkxNTUwMjcgNC41MzE1MDc5MiwxNy44MjIzMTI1IEwxNy44MDA2NTkyLDYuOTMwODczOTUgQzE4LjA3MDg0NTcsNi43MDkxMDI0NyAxOC4xMTAwOTM4LDYuMzEwMjkxNzUgMTcuODg4MzIyMyw2LjA0MDEwNTI3IEMxNy43OTIxMzk0LDUuOTIyOTI0NjYgMTcuNjU3MDkwNyw1Ljg0NDE2MDQ4IDE3LjUwNzc0MSw1LjgxODEzOTUzIEwxLjEyNDM1NTkyLDIuOTYzNjkwNyBDMC43Nzk5OTYxNCwyLjkwMzY5MzQ5IDAuNDUyMjAwMDM1LDMuMTM0MjE0OSAwLjM5MjIwMjgyNywzLjQ3ODU3NDY4IEMwLjM2ODQ1NzcwOCwzLjYxNDg2MjA4IDAuMzkwMDIwMDc1LDMuNzU1MTc1OTUgMC40NTM1OTA0NDQsMy44NzgwNDUzOCBaXCJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtPVwicm90YXRlKC05NiA5LjIwNyAxMC40NilcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZiXCJcbiAgICAgICAgICAgICAgLy8gZmlsbD17YmFzZUNvbG9yfVxuICAgICAgICAgICAgICBkPVwiTTI2LjEyNjA4OTEsMzcuMTgyMjM4NyBMMjIuOTM2ODczMywzNC44MDgwNDgxIEMyNi4zOTE4NTcxLDMwLjU4NzI2NDkgMjkuNzEzOTU2OSwyOC40NzY4NzMzIDMyLjkwMzE3MjgsMjguNDc2ODczMyBDMzYuMDkyMzg4NiwyOC40NzY4NzMzIDM1Ljk1OTUwNDYsMjkuNTk4MDE4OCAzMi41MDQ1MjA4LDMxLjg0MDMwOTkgTDI5LjMxNTMwNDksMzMuNTU0NTI2NiBMMjYuMTI2MDg5MSwzNy4xODIyMzg3IFpcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwb2x5Z29uXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZiXCJcbiAgICAgICAgICAgICAgLy8gZmlsbD17YmFzZUNvbG9yfVxuICAgICAgICAgICAgICBwb2ludHM9XCIxMy4wMDUgMjIuODA1IDkuODE2IDIzLjYgNy4wMzMgMTcuNjM0IDkuMjg1IDE2LjQ3NlwiXG4gICAgICAgICAgICAgIHRyYW5zZm9ybT1cInJvdGF0ZSgxNyAxMC4wMiAyMC4wMzgpXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9nPlxuICAgICAgICAgIDxnXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJzYlwiXG4gICAgICAgICAgICAvLyBzdHJva2U9e2Jhc2VDb2xvcn1cbiAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMS4yNjZcIlxuICAgICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDMyLjU1IDU0LjU5MylcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZhXCJcbiAgICAgICAgICAgICAgLy8gZmlsbD17YWx0Q29sb3J9XG4gICAgICAgICAgICAgIGQ9XCJNMi4zOTE5MTE4OSwxMC41NjU1NDMxIEMyLjM5MTkxMTg5LDEwLjU2NTU0MzEgNy42Mzc1NDI1LC01LjY3NTc3NTY2IDIyLjMyNDUxMDksMi4xMTQ3NzU2IEMyMi4zMjQ1MTA5LDIuMTE0Nzc1NiAyMC44MzkyOTgyLDkuODQ3Njk0MDIgMTUuNzIwMjExNCwxMi4wMTgwMTg3IEMxMC44ODA4NjI5LDE0LjA2OTc0MzYgMi4zOTE5MTE4OSwxMC41NjU1NDMxIDIuMzkxOTExODksMTAuNTY1NTQzMSBaXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTTIyLjMyNDUxMDksMi4zNzQxOTA1NiBDMTIuOTY2MTQ2OCw3LjQ0NjU3ODg4IDUuNTI0NjQzMTgsMTAuNjEyMTY2MyAwLDExLjg3MDk1MjhcIiAvPlxuICAgICAgICAgICAgPHBvbHlsaW5lIHBvaW50cz1cIjEzLjkzNSAwIDEzLjU1NCA2LjM4NiAxOS4xMzUgOS40OTdcIiAvPlxuICAgICAgICAgICAgPHBvbHlsaW5lIHBvaW50cz1cIjkuOTY2IDEuMTg3IDguNzcgOC42OTYgMTQuMzUxIDEyLjY2MlwiIC8+XG4gICAgICAgICAgPC9nPlxuICAgICAgICAgIDxnXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJzYlwiXG4gICAgICAgICAgICAvLyBzdHJva2U9e2Jhc2VDb2xvcn1cbiAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMS4yNjZcIlxuICAgICAgICAgICAgdHJhbnNmb3JtPVwic2NhbGUoLTEgMSkgcm90YXRlKC01IDUwNS4wNiAyOTYuODYyKVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmFcIlxuICAgICAgICAgICAgICAvLyBmaWxsPXthbHRDb2xvcn1cbiAgICAgICAgICAgICAgZD1cIk0yLjM5MTkxMTg5LDEwLjU2NTU0MzEgQzIuMzkxOTExODksMTAuNTY1NTQzMSA3LjYzNzU0MjUsLTUuNjc1Nzc1NjYgMjIuMzI0NTEwOSwyLjExNDc3NTYgQzIyLjMyNDUxMDksMi4xMTQ3NzU2IDIwLjgzOTI5ODIsOS44NDc2OTQwMiAxNS43MjAyMTE0LDEyLjAxODAxODcgQzEwLjg4MDg2MjksMTQuMDY5NzQzNiAyLjM5MTkxMTg5LDEwLjU2NTU0MzEgMi4zOTE5MTE4OSwxMC41NjU1NDMxIFpcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNMjIuMzI0NTEwOSwyLjM3NDE5MDU2IEMxMi45NjYxNDY4LDcuNDQ2NTc4ODggNS41MjQ2NDMxOCwxMC42MTIxNjYzIDAsMTEuODcwOTUyOFwiIC8+XG4gICAgICAgICAgICA8cG9seWxpbmUgcG9pbnRzPVwiMTMuOTM1IDAgMTMuNTU0IDYuMzg2IDE5LjEzNSA5LjQ5N1wiIC8+XG4gICAgICAgICAgICA8cG9seWxpbmUgcG9pbnRzPVwiOS45NjYgMS4xODcgOC43NyA4LjY5NiAxNC4zNTEgMTIuNjYyXCIgLz5cbiAgICAgICAgICA8L2c+XG4gICAgICAgIDwvZz5cbiAgICAgICAgPGdcbiAgICAgICAgICBjbGFzc05hbWU9XCJzYiBmYVwiXG4gICAgICAgICAgLy8gZmlsbD17YWx0Q29sb3J9XG4gICAgICAgICAgLy8gc3Ryb2tlPXtiYXNlQ29sb3J9XG4gICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDQuNDMgODAuNjk2KVwiXG4gICAgICAgID5cbiAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIxLjI2NlwiXG4gICAgICAgICAgICBkPVwiTTEyLjE1NDg4NDksMC4wNjY3NDI0MTY0IEMxOC42NzMwNDMyLDAuNjMyMTYwMjg5IDIzLjQ4MjE3NDQsMC45MTQ4NjkyMjYgMjYuNTgyMjc4NSwwLjkxNDg2OTIyNiBDMjkuNjgyMzcyMSwwLjkxNDg2OTIyNiAzNC40OTE0ODEzLDAuNjMyMTYyMTkzIDQxLjAwOTYwNjIsMC4wNjY3NDgxMjcgTDQxLjAwOTU5OTksMC4wNjY2NzU1NDEyIEM0MS4zNTc4Nzk2LDAuMDM2NDY0MDU4NSA0MS42NjQ3MDczLDAuMjk0MzA5MjYgNDEuNjk0OTE4OCwwLjY0MjU4ODkxOSBDNDEuNjk4MzYzNCwwLjY4MjI5ODk3IDQxLjY5ODA0OTUsMC43MjIyNDU2MTcgNDEuNjkzOTgxNCwwLjc2MTg5NjYzOSBMNDAuOTMxMTM5OCw4LjE5NjQ3ODUyIEM0MC45MDA0Nzk5LDguNDk1MzA4MTMgNDAuNjYzOTY4NSw4LjczMTQwOTM1IDQwLjM2NTA4NjEsOC43NjE1NTA0OCBDMzUuNzcwODE2OSw5LjIyNDg2NDY1IDMxLjE3NjU0NzcsOS40NTY1MjE3NCAyNi41ODIyNzg1LDkuNDU2NTIxNzQgQzIxLjk4ODAyODIsOS40NTY1MjE3NCAxNy4zOTM3NzgsOS4yMjQ4NjY1NyAxMi43OTk1Mjc4LDguNzYxNTU2MjIgTDEyLjc5OTUyMTEsOC43NjE2MjI1MSBDMTIuNTAwNTgxOCw4LjczMTQ3NTc3IDEyLjI2NDAyNTMsOC40OTUzMjk2NSAxMi4yMzMzNTk2LDguMTk2NDQzMTUgTDExLjQ3MDUzNjgsMC43NjE5Mjk1MzMgQzExLjQzNDg1ODIsMC40MTQxODQ1ODggMTEuNjg3ODM4LDAuMTAzMzU4Mzg0IDEyLjAzNTU4MjksMC4wNjc2Nzk3NzU4IEMxMi4wNzUyMzIsMC4wNjM2MTE3Nzk0IDEyLjExNTE3NjgsMC4wNjMyOTc5MzI1IDEyLjE1NDg4NDksMC4wNjY3NDI0MTY0IFpcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMS4yNjZcIlxuICAgICAgICAgICAgZD1cIk0xNC41NzU4Nyw4Ljc5NjY5NzM0IEMxOC42MzQ0OTk1LDkuMjM2NTgwMjcgMjIuNzQyMTIwOSw5LjQ1NjUyMTc0IDI2Ljg5ODczNDIsOS40NTY1MjE3NCBDMzEuMDYyNDU4Myw5LjQ1NjUyMTc0IDM1LjIyNjE4MjQsOS4yMzU4MjcxMSAzOS4zODk5MDY1LDguNzk0NDM3ODYgTDM5LjM4OTkwOTIsOC43OTQ0NjMwNyBDMzkuNzM3NDk0OSw4Ljc1NzYxNjExIDQwLjA0OTEzOTIsOS4wMDk1MTk2NCA0MC4wODU5ODYxLDkuMzU3MTA1MzYgQzQwLjA5MDgxMDcsOS40MDI2MTY1NSA0MC4wOTA2ODQ1LDkuNDQ4NTE2NzkgNDAuMDg1NjA5Nyw5LjQ5NDAwMDc0IEwzNy4zODk5MjA1LDMzLjY1NDg5NTEgQzM3LjM2MjgzMDksMzMuODk3NjkwOSAzNy4xOTg0Mjk3LDM0LjEwMzIyMDIgMzYuOTY3NTEyOCwzNC4xODI5NzYzIEMzNC44MDMwNDg2LDM0LjkzMDU1NzMgMzEuNDQ2Nzg5MSwzNS4zMDQzNDc4IDI2Ljg5ODczNDIsMzUuMzA0MzQ3OCBDMjIuMzU4ODk0MSwzNS4zMDQzNDc4IDE5LjA1NTc0NTksMzQuOTMxOTA2NCAxNi45ODkyODk2LDM0LjE4NzAyMzUgTDE2Ljk4OTI5MDMsMzQuMTg3MDIxNyBDMTYuNzYyMzU3LDM0LjEwNTIyMDQgMTYuNjAxNjU1NywzMy45MDE1MzI3IDE2LjU3NDkwNzEsMzMuNjYxNzkzOSBMMTMuODc4NTg1Nyw5LjQ5NjE4Mzk4IEMxMy44Mzk4MjE1LDkuMTQ4NzUyOSAxNC4wOTAwNDU1LDguODM1Njc5NzYgMTQuNDM3NDc2Niw4Ljc5NjkxNTU1IEMxNC40ODM0NjExLDguNzkxNzg0ODkgMTQuNTI5ODY5NSw4Ljc5MTcxMTcxIDE0LjU3NTg3LDguNzk2Njk3MzQgWlwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLjIgMjUuOTY1KVwiPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIxLjI2NlwiXG4gICAgICAgICAgICAgIGQ9XCJNMTUuMTg5ODczNCwwLjE2MTI3NDAxNCBDMTcuNTg4Mjc0NSwwLjc4NTk3Njk2NCAyMS40MjQ2MDU4LDEuMDk4MzI4NDQgMjYuNjk4ODY3NCwxLjA5ODMyODQ0IEMzMS45NzMxMjksMS4wOTgzMjg0NCAzNS43MzE3MzQ0LDAuNzg1OTc2OTY0IDM3Ljk3NDY4MzUsMC4xNjEyNzQwMTRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMS4yNjZcIlxuICAgICAgICAgICAgICBkPVwiTTE2LjI1NTgyOTQsMy4zMjgxMDkyIEMxOS44NDIzMjczLDMuODQxMjUzNzkgMjMuNDI4ODI1Miw0LjA5NzgyNjA5IDI3LjAxNTMyMzEsNC4wOTc4MjYwOSBDMzAuNjAxODIxLDQuMDk3ODI2MDkgMzMuMTMzNDY2NiwzLjg0MTI1Mzc5IDM0LjYxMDI1OTgsMy4zMjgxMDkyXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIi42MzNcIlxuICAgICAgICAgICAgICBkPVwiTTguNjM3MDk2NzUgOC4zOTM1NzkzN0wxMy44OTc0MDAxIDguMzkzNTc5MzdNNDIuMTgxNDAwNiA4LjM5MzU3OTM3TDQ0LjM1MTQ3MDggOC4zOTM1NzkzN000NS45Nzg4Njg5IDguMzkzNTc5MzdMNTMuOTE0MDU3MyA4LjM5MzU3OTM3TTQuOTI2NDY4MjkgOC4zOTM1NzkzN0w2LjcxNzY1Njk4IDguMzkzNTc5MzdNMzkuMTAzNjgzNSA4LjM5MzU3OTM3TDQwLjg5NDg3MjIgOC4zOTM1NzkzN001Ni44MjUyMDI1IDguMzkzNTc5MzdMNTcuNzExNTI1NiA4LjM5MzU3OTM3TS40OTYwODg1NDUgOC4zOTM1NzkzN0wxLjM4MjQxMTczIDguMzkzNTc5MzdcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2c+XG4gICAgICAgIDwvZz5cbiAgICAgIDwvZz5cbiAgICAgIDxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg3OSA0OClcIj5cbiAgICAgICAgPGNpcmNsZSBjeD1cIjMwXCIgY3k9XCIzMFwiIHI9XCIzMFwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiAvPlxuICAgICAgICA8cGF0aFxuICAgICAgICAgIGNsYXNzTmFtZT1cImZhXCJcbiAgICAgICAgICBmaWxsPVwid2hpdGVcIlxuICAgICAgICAgIGQ9XCJNMjQgMThMMjQgMjEuNDEyMTMxMyAyNCAyNC45OTI1MzIxIDI0IDI4LjAxMzU5MjcgMjQgMzEuNjY4Nzc5OUMyNCAzMy43NDQxMDM2IDIzLjY3MTkxMjEgMzUuNTkxOTUxOSAyMy4wMTQxNTE1IDM3LjIxMDc2NjcgMjIuMzU2MzkwOCAzOC44MjgwMjM0IDIxLjQ3NjczNSA0MC4yNDg5NjU4IDIwLjM3Njc2ODkgNDEuNDczNTkzNyAxOS4yMjYwODQgNDIuNzYyMTAxOCAxNy45MjMyNDI0IDQzLjg2NTIwMTcgMTYuNDY5ODI5MSA0NC43ODEzMzU2IDE1LjAxNDgzMDcgNDUuNzAwNTg1NiAxMy41NjYxNzIzIDQ2LjQzOTEwMTcgMTIuMTI1NDM4NyA0N0wxMCA0MC4yNjI5ODgyQzEwLjQ0MjIwNTQgMzkuOTc5NDIzIDEwLjg5MzkyMDUgMzkuNjY5MzcwOSAxMS4zNTUxNDU1IDM5LjMzNzUwNiAxMS44MTc5NTU0IDM5LjAwNDA4MzIgMTIuMjUwNjUxIDM4LjYwOTg5NjMgMTIuNjU2NDAyMSAzOC4xNDg3MTMzIDEzLjMyNjg0MjUgMzcuNDAyNDA2OSAxMy44MjI5MzY3IDM2LjYwMzEyNjggMTQuMTQ0Njg0NyAzNS43NDkzMTUgMTQuNDY2NDMyNyAzNC44OTcwNjEyIDE0LjYyODA5OTIgMzMuOTM0MTg1OCAxNC42MjgwOTkyIDMyLjg2NTM2MjkgMTQuNjI4MDk5MiAzMi4xNjczNTYxIDE0LjYzMTI2OTEgMzEuNDI3MjgyIDE0LjYzOTE5MzkgMzAuNjQyMDI0NCAxNC42NDM5NDg4IDI5Ljg1ODMyNDggMTQuNjQ3MTE4OCAyOC42OTI5MDI4IDE0LjY0NzExODggMjcuMTUxOTkwNSAxNC42NDcxMTg4IDI1LjkzMzU5NDggMTQuNjQzOTQ4OCAyNC43MDExNzY2IDE0LjYzOTE5MzkgMjMuNDUzMTc3OSAxNC42MzEyNjkxIDIyLjIwMzYyMTEgMTQuNjI4MDk5MiAyMS4yNTAwOTQgMTQuNjI4MDk5MiAyMC41OTI1OTY2TDI0IDE4ek00NS45ODA4Njg1IDM3LjE4NDA2MjVMMzYuNzY0MjcyNyAzOS43MzkyNDA2IDM2Ljc2NDI3MjcgMzcuMTM1MzQ3NSAzNi43NjQyNzI3IDMwLjE2NzUzNjlDMzYuNTU4NjA5MiAzMC4yMjQxMDkxIDM2LjM0MTc4NTYgMzAuMjgzODI0MiAzNi4xMTA2MTM0IDMwLjM0ODI1MzcgMzUuODc5NDQxMiAzMC40MTI2ODMxIDM1LjY2MjYxNzcgMzAuNDcyMzk4MiAzNS40NTY5NTQxIDMwLjUyODk3MDQgMzUuMjY1NjM5MiAzMC41ODIzOTk4IDM1LjA1MDQxIDMwLjY0MjExNDkgMzQuODEyODYwNiAzMC43MDgxMTU4IDM0LjU3NTMxMTMgMzAuNzc0MTE2NyAzNC4zNzQ0MzA2IDMwLjgzMDY4ODkgMzQuMjA3MDMwMSAzMC44NzYyNjFMMzQuMjA3MDMwMSAzNS44NDk5MDEyQzM0LjIwNzAzMDEgMzguMjAwNzkwOCAzNC4yMTM0MDcyIDM5LjczMjk1NDggMzQuMjI2MTYxNiA0MC40NDMyNTA0TDI1LjAwOTU2NTcgNDNDMjQuOTk2ODExNCA0Mi4yMDAxMzE4IDI0Ljk5NjgxMTQgNDAuODgwMTEzNSAyNS4wMDk1NjU3IDM5LjAzOTk0NTMgMjUuMDIyMzIwMSAzNy4xOTk3NzcgMjUuMDI4Njk3MiAzNC4yOTg4Nzk3IDI1LjAyODY5NzIgMzAuMzM3MjUzNUwyNS4wMjg2OTcyIDIyLjY1Mjg2MTZDMjUuMDI4Njk3MiAyMC42Mzk4MzM3IDI1LjAyMjMyMDEgMTkuMDI3NTI1NyAyNS4wMDk1NjU3IDE3LjgxNDM2NjFMMzQuMjI2MTYxNiAxNS4yNTkxODc5QzM0LjIyNjE2MTYgMTYuNjc1MDY0NiAzNC4yMjI5NzMgMTguMTA2NjU1OSAzNC4yMTY1OTU4IDE5LjU0OTI0NzIgMzQuMjEwMjE4NiAyMC45OTM0MSAzNC4yMDcwMzAxIDIyLjUxMzAwMjUgMzQuMjA3MDMwMSAyNC4xMDMzMTAyIDM0LjM3NDQzMDYgMjQuMDU3NzM4MSAzNC41NjU3NDU1IDI0LjAwNDMwODggMzQuNzg0MTYzNCAyMy45NDQ1OTM3IDM1LjAwMjU4MTIgMjMuODgzMzA3MSAzNS4yMTk0MDQ4IDIzLjgyMzU5MiAzNS40Mzc4MjI3IDIzLjc2MjMwNTUgMzUuNjk0NTAzNSAyMy42OTE1OTAyIDM1LjkzMjA1MjggMjMuNjI1NTg5MyAzNi4xNDg4NzY0IDIzLjU2NDMwMjcgMzYuMzY3Mjk0MyAyMy41MDQ1ODc2IDM2LjU3Mjk1NzggMjMuNDQ4MDE1NCAzNi43NjQyNzI3IDIzLjM5NDU4NjEgMzYuNzc3MDI3IDIxLjk5OTEzODIgMzYuNzgwMjE1NiAyMC41MzQ1NDY2IDM2Ljc3MzgzODQgMTguOTk5MjM5NiAzNi43Njc0NjEzIDE3LjQ2NzA3NTYgMzYuNzY0MjcyNyAxNS45ODM2MjY1IDM2Ljc2NDI3MjcgMTQuNTU1MTc4Mkw0NS45ODA4Njg1IDEyQzQ1Ljk5MzYyMjggMTQuNTI4NDYzNSA0NiAxNi45MDkyMTA3IDQ2IDE5LjE0MDY3MDFMNDYgMjQuNDgyMDI5NyA0NiAzMS41MzYyNzAxQzQ2IDM0LjQ4MjczOTQgNDUuOTkzNjIyOCAzNi4zNjUzMzY4IDQ1Ljk4MDg2ODUgMzcuMTg0MDYyNVwiXG4gICAgICAgIC8+XG4gICAgICA8L2c+XG4gICAgPC9nPlxuICA8L3N2Zz5cbilcblxuZXhwb3J0IGRlZmF1bHQgTG9nb1xuIiwgImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtqc29uLCBMb2FkZXJGdW5jdGlvbiwgdXNlTG9hZGVyRGF0YX0gZnJvbSAncmVtaXgnXG5pbXBvcnQge2dldE1keFBhZ2UsIHVzZU1keENvbXBvbmVudH0gZnJvbSAnfi91dGlscy9tZHgnXG5pbXBvcnQgTGF5b3V0IGZyb20gJ34vY29tcG9uZW50cy9sYXlvdXQnXG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHtyZXF1ZXN0LCBwYXJhbXN9KSA9PiB7XG4gIGNvbnN0IHBhZ2UgPSBhd2FpdCBnZXRNZHhQYWdlKHtcbiAgICBjb250ZW50RGlyOiAnYmxvZycsXG4gICAgc2x1ZzogcGFyYW1zLnNsdWcsXG4gIH0pXG5cbiAgY29uc3QgaGVhZGVycyA9IHtcbiAgICAnQ2FjaGUtQ29udHJvbCc6ICdwcml2YXRlLCBtYXgtYWdlPTM2MDAnLFxuICB9XG5cbiAgcmV0dXJuIGpzb24oe3BhZ2V9LCB7c3RhdHVzOiAyMDAsIGhlYWRlcnN9KVxufVxuXG50eXBlIExvYWRlckRhdGEgPSB7XG4gIHBhZ2U6IHtjb2RlOiBzdHJpbmc7IGZyb250bWF0dGVyPzogYW55fVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWdlUm91dGUoKSB7XG4gIGNvbnN0IGRhdGEgPSB1c2VMb2FkZXJEYXRhPExvYWRlckRhdGE+KClcbiAgY29uc3Qge2NvZGUsIGZyb250bWF0dGVyfSA9IGRhdGEucGFnZVxuXG4gIGNvbnN0IENvbXBvbmVudCA9IHVzZU1keENvbXBvbmVudChjb2RlKVxuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cInByb3NlIGxnOnByb3NlLXhsXCI+XG4gICAgICAgIHtmcm9udG1hdHRlci5iYW5uZXIgJiYgPGltZyBzcmM9e2Zyb250bWF0dGVyLmJhbm5lcn0gLz59XG4gICAgICAgIDxoMT57ZnJvbnRtYXR0ZXIudGl0bGV9PC9oMT5cbiAgICAgICAgPENvbXBvbmVudCAvPlxuICAgICAgPC9hcnRpY2xlPlxuICAgIDwvTGF5b3V0PlxuICApXG59XG4iLCAiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2pzb24sIExvYWRlckZ1bmN0aW9uLCB1c2VMb2FkZXJEYXRhfSBmcm9tICdyZW1peCdcbmltcG9ydCB7Z2V0TWR4UGFnZSwgdXNlTWR4Q29tcG9uZW50fSBmcm9tICd+L3V0aWxzL21keCdcbmltcG9ydCBMYXlvdXQgZnJvbSAnfi9jb21wb25lbnRzL2xheW91dCdcbmltcG9ydCBMb2dvIGZyb20gJ34vY29tcG9uZW50cy9Mb2dvJ1xuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7cmVxdWVzdCwgcGFyYW1zfSkgPT4ge1xuICBjb25zdCBwYWdlID0gYXdhaXQgZ2V0TWR4UGFnZSh7XG4gICAgY29udGVudERpcjogJ3BhZ2VzJyxcbiAgICBzbHVnOiAnaG9tZScsXG4gIH0pXG5cbiAgcmV0dXJuIGpzb24oe3BhZ2V9KVxufVxuXG50eXBlIExvYWRlckRhdGEgPSB7XG4gIHBhZ2U6IHtjb2RlOiBzdHJpbmc7IGZyb250bWF0dGVyPzogYW55fVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleFJvdXRlKCkge1xuICBjb25zdCBkYXRhID0gdXNlTG9hZGVyRGF0YTxMb2FkZXJEYXRhPigpXG4gIGNvbnN0IHtjb2RlLCBmcm9udG1hdHRlcn0gPSBkYXRhLnBhZ2VcblxuICBjb25zdCBDb21wb25lbnQgPSB1c2VNZHhDb21wb25lbnQoY29kZSlcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPGFydGljbGUgY2xhc3NOYW1lPVwicHJvc2UgbGc6cHJvc2UteGxcIj5cbiAgICAgICAgPENvbXBvbmVudCAvPlxuICAgICAgPC9hcnRpY2xlPlxuICAgIDwvTGF5b3V0PlxuICApXG59XG4iLCAiZXhwb3J0IGRlZmF1bHQgeyd2ZXJzaW9uJzonOTc3M2JmNjgnLCdlbnRyeSc6eydtb2R1bGUnOicvYnVpbGQvZW50cnkuY2xpZW50LUxHMjZSRE1SLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay01WjdKSE9XQy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVpXVDNVUkNJLmpzJ119LCdyb3V0ZXMnOnsncm9vdCc6eydpZCc6J3Jvb3QnLCdwYXJlbnRJZCc6dW5kZWZpbmVkLCdwYXRoJzonJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm9vdC1JQ1JHR0tFTS5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzLyRzbHVnJzp7J2lkJzoncm91dGVzLyRzbHVnJywncGFyZW50SWQnOidyb290JywncGF0aCc6JzpzbHVnJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzLyRzbHVnLTc1VVJYNFJZLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1XVEJDTEdLUi5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9ibG9nLiR5ZWFyLiRtb250aC4kZGF5LiRzbHVnJzp7J2lkJzoncm91dGVzL2Jsb2cuJHllYXIuJG1vbnRoLiRkYXkuJHNsdWcnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonYmxvZy86eWVhci86bW9udGgvOmRheS86c2x1ZycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9ibG9nLiR5ZWFyLiRtb250aC4kZGF5LiRzbHVnLUhZQ0tFQUVOLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1XVEJDTEdLUi5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9pbmRleCc6eydpZCc6J3JvdXRlcy9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOnVuZGVmaW5lZCwnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9pbmRleC1EVFVWRUxWTC5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstV1RCQ0xHS1IuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9fSwndXJsJzonL2J1aWxkL21hbmlmZXN0LTk3NzNCRjY4LmpzJ307Il0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQXVCO0FBQUE7QUFBQTs7O0FDQXZCO0FBQUE7QUFBQTtBQUFBO0FBWUEsV0FBTyxlQUFlLFNBQVMsY0FBYyxFQUFFLE9BQU87QUFFdEQsUUFBSSxPQUFPLFFBQVE7QUFJbkIsV0FBTyxlQUFlLFNBQVMsNEJBQTRCO0FBQUEsTUFDekQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUVqQyxXQUFPLGVBQWUsU0FBUyxvQ0FBb0M7QUFBQSxNQUNqRSxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFB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RDtBQUFBLEVBQ0UsSUFBRztBQUFBLEVBQ0gsSUFBRztBQUFBLEVBQ0gsV0FBVTtBQUFBLEVBR1YsYUFBWTtBQUFBLEVBQ1osSUFBRztBQUFBLEVBQ0gsSUFBRztBQUFBLElBRUwscUNBQUMsS0FBRDtBQUFBLEVBQUcsZUFBYztBQUFBLEdBQ2YscUNBQUMsT0FBRDtBQUFBLEVBQ0UsV0FBVTtBQUFBLEVBRVYsYUFBWTtBQUFBLEVBQ1osV0FBVTtBQUFBLElBRVoscUNBQUMsT0FBRDtBQUFBLEVBQ0UsV0FBVTtBQUFBLEVBRVYsYUFBWTtBQUFBLEVBQ1osV0FBVTtBQUFBLEtBR2QscUNBQUMsS0FBRDtBQUFBLEVBQUcsZUFBYztBQUFBLEdBQ2YscUNBQUMsT0FBRDtBQUFBLEVBQ0UsV0FBVTtBQUFBLEVBRVYsYUFBWTtBQUFBLEVBQ1osV0FBVTtBQUFBLElBRVoscUNBQUMsT0FBRDtBQUFBLEVBQ0UsV0FBVTtBQUFBLEVBRVYsYUFBWTtBQUFBLEVBQ1osV0FBVTtBQUFBLEtBR2QscUNBQUMsUUFBRDtBQUFBLEVBQ0UsV0FBVTtBQUFBLEVBRVYsR0FBRTtBQUFBLEVBQ0YsV0FBVTtBQUFBLElBRVoscUNBQUMsUUFBRDtBQUFBLEVBQ0UsV0FBVTtBQUFBLEVBRVYsR0FBRTtBQUFBLEVBQ0YsV0FBVTtBQUFBLElBRVoscUNBQUMsUUFBRDtBQUFBLEVBQ0UsV0FBVTtBQUFBLEVBRVYsR0FBRTtBQUFBLElBRUoscUNBQUMsV0FBRDtBQUFBLEVBQ0UsV0FBVTtBQUFBLEVBRVYsUUFBTztBQUFBLEVBQ1AsV0FBVTtBQUFBLEtBR2QscUNBQUMsS0FBRDtBQUFBLEVBQ0UsV0FBVTtBQUFBLEVBRVYsYUFBWTtBQUFBLEVBQ1osV0FBVTtBQUFBLEdBRVYscUNBQUMsUUFBRDtBQUFBLEVBQ0UsV0FBVTtBQUFBLEVBRVYsR0FBRTtBQUFBLElBRUoscUNBQUMsUUFBRDtBQUFBLEVBQU0sR0FBRTtBQUFBLElBQ1IscUNBQUMsWUFBRDtBQUFBLEVBQVUsUUFBTztBQUFBLElBQ2pCLHFDQUFDLFlBQUQ7QUFBQSxFQUFVLFFB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
