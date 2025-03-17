var Ge = { exports: {} }, Pe = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ut;
function lt() {
  if (ut)
    return Pe;
  ut = 1;
  var S = Symbol.for("react.transitional.element"), d = Symbol.for("react.fragment");
  function X(G, P, j) {
    var $ = null;
    if (j !== void 0 && ($ = "" + j), P.key !== void 0 && ($ = "" + P.key), "key" in P) {
      j = {};
      for (var Y in P)
        Y !== "key" && (j[Y] = P[Y]);
    } else
      j = P;
    return P = j.ref, {
      $$typeof: S,
      type: G,
      key: $,
      ref: P !== void 0 ? P : null,
      props: j
    };
  }
  return Pe.Fragment = d, Pe.jsx = X, Pe.jsxs = X, Pe;
}
var $e = {}, Be = { exports: {} }, y = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var st;
function dt() {
  if (st)
    return y;
  st = 1;
  var S = Symbol.for("react.transitional.element"), d = Symbol.for("react.portal"), X = Symbol.for("react.fragment"), G = Symbol.for("react.strict_mode"), P = Symbol.for("react.profiler"), j = Symbol.for("react.consumer"), $ = Symbol.for("react.context"), Y = Symbol.for("react.forward_ref"), Z = Symbol.for("react.suspense"), B = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), oe = Symbol.iterator;
  function ce(n) {
    return n === null || typeof n != "object" ? null : (n = oe && n[oe] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var J = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, U = Object.assign, F = {};
  function q(n, u, E) {
    this.props = n, this.context = u, this.refs = F, this.updater = E || J;
  }
  q.prototype.isReactComponent = {}, q.prototype.setState = function(n, u) {
    if (typeof n != "object" && typeof n != "function" && n != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, n, u, "setState");
  }, q.prototype.forceUpdate = function(n) {
    this.updater.enqueueForceUpdate(this, n, "forceUpdate");
  };
  function ue() {
  }
  ue.prototype = q.prototype;
  function ee(n, u, E) {
    this.props = n, this.context = u, this.refs = F, this.updater = E || J;
  }
  var fe = ee.prototype = new ue();
  fe.constructor = ee, U(fe, q.prototype), fe.isPureReactComponent = !0;
  var le = Array.isArray, O = { H: null, A: null, T: null, S: null }, te = Object.prototype.hasOwnProperty;
  function de(n, u, E, p, h, C) {
    return E = C.ref, {
      $$typeof: S,
      type: n,
      key: u,
      ref: E !== void 0 ? E : null,
      props: C
    };
  }
  function ye(n, u) {
    return de(
      n.type,
      u,
      void 0,
      void 0,
      void 0,
      n.props
    );
  }
  function H(n) {
    return typeof n == "object" && n !== null && n.$$typeof === S;
  }
  function _e(n) {
    var u = { "=": "=0", ":": "=2" };
    return "$" + n.replace(/[=:]/g, function(E) {
      return u[E];
    });
  }
  var pe = /\/+/g;
  function se(n, u) {
    return typeof n == "object" && n !== null && n.key != null ? _e("" + n.key) : u.toString(36);
  }
  function re() {
  }
  function ve(n) {
    switch (n.status) {
      case "fulfilled":
        return n.value;
      case "rejected":
        throw n.reason;
      default:
        switch (typeof n.status == "string" ? n.then(re, re) : (n.status = "pending", n.then(
          function(u) {
            n.status === "pending" && (n.status = "fulfilled", n.value = u);
          },
          function(u) {
            n.status === "pending" && (n.status = "rejected", n.reason = u);
          }
        )), n.status) {
          case "fulfilled":
            return n.value;
          case "rejected":
            throw n.reason;
        }
    }
    throw n;
  }
  function K(n, u, E, p, h) {
    var C = typeof n;
    (C === "undefined" || C === "boolean") && (n = null);
    var m = !1;
    if (n === null)
      m = !0;
    else
      switch (C) {
        case "bigint":
        case "string":
        case "number":
          m = !0;
          break;
        case "object":
          switch (n.$$typeof) {
            case S:
            case d:
              m = !0;
              break;
            case x:
              return m = n._init, K(
                m(n._payload),
                u,
                E,
                p,
                h
              );
          }
      }
    if (m)
      return h = h(n), m = p === "" ? "." + se(n, 0) : p, le(h) ? (E = "", m != null && (E = m.replace(pe, "$&/") + "/"), K(h, u, E, "", function(Ee) {
        return Ee;
      })) : h != null && (H(h) && (h = ye(
        h,
        E + (h.key == null || n && n.key === h.key ? "" : ("" + h.key).replace(
          pe,
          "$&/"
        ) + "/") + m
      )), u.push(h)), 1;
    m = 0;
    var W = p === "" ? "." : p + ":";
    if (le(n))
      for (var A = 0; A < n.length; A++)
        p = n[A], C = W + se(p, A), m += K(
          p,
          u,
          E,
          C,
          h
        );
    else if (A = ce(n), typeof A == "function")
      for (n = A.call(n), A = 0; !(p = n.next()).done; )
        p = p.value, C = W + se(p, A++), m += K(
          p,
          u,
          E,
          C,
          h
        );
    else if (C === "object") {
      if (typeof n.then == "function")
        return K(
          ve(n),
          u,
          E,
          p,
          h
        );
      throw u = String(n), Error(
        "Objects are not valid as a React child (found: " + (u === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : u) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return m;
  }
  function z(n, u, E) {
    if (n == null)
      return n;
    var p = [], h = 0;
    return K(n, p, "", "", function(C) {
      return u.call(E, C, h++);
    }), p;
  }
  function ie(n) {
    if (n._status === -1) {
      var u = n._result;
      u = u(), u.then(
        function(E) {
          (n._status === 0 || n._status === -1) && (n._status = 1, n._result = E);
        },
        function(E) {
          (n._status === 0 || n._status === -1) && (n._status = 2, n._result = E);
        }
      ), n._status === -1 && (n._status = 0, n._result = u);
    }
    if (n._status === 1)
      return n._result.default;
    throw n._result;
  }
  var Se = typeof reportError == "function" ? reportError : function(n) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var u = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof n == "object" && n !== null && typeof n.message == "string" ? String(n.message) : String(n),
        error: n
      });
      if (!window.dispatchEvent(u))
        return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", n);
      return;
    }
    console.error(n);
  };
  function b() {
  }
  return y.Children = {
    map: z,
    forEach: function(n, u, E) {
      z(
        n,
        function() {
          u.apply(this, arguments);
        },
        E
      );
    },
    count: function(n) {
      var u = 0;
      return z(n, function() {
        u++;
      }), u;
    },
    toArray: function(n) {
      return z(n, function(u) {
        return u;
      }) || [];
    },
    only: function(n) {
      if (!H(n))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return n;
    }
  }, y.Component = q, y.Fragment = X, y.Profiler = P, y.PureComponent = ee, y.StrictMode = G, y.Suspense = Z, y.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = O, y.act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  }, y.cache = function(n) {
    return function() {
      return n.apply(null, arguments);
    };
  }, y.cloneElement = function(n, u, E) {
    if (n == null)
      throw Error(
        "The argument must be a React element, but you passed " + n + "."
      );
    var p = U({}, n.props), h = n.key, C = void 0;
    if (u != null)
      for (m in u.ref !== void 0 && (C = void 0), u.key !== void 0 && (h = "" + u.key), u)
        !te.call(u, m) || m === "key" || m === "__self" || m === "__source" || m === "ref" && u.ref === void 0 || (p[m] = u[m]);
    var m = arguments.length - 2;
    if (m === 1)
      p.children = E;
    else if (1 < m) {
      for (var W = Array(m), A = 0; A < m; A++)
        W[A] = arguments[A + 2];
      p.children = W;
    }
    return de(n.type, h, void 0, void 0, C, p);
  }, y.createContext = function(n) {
    return n = {
      $$typeof: $,
      _currentValue: n,
      _currentValue2: n,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, n.Provider = n, n.Consumer = {
      $$typeof: j,
      _context: n
    }, n;
  }, y.createElement = function(n, u, E) {
    var p, h = {}, C = null;
    if (u != null)
      for (p in u.key !== void 0 && (C = "" + u.key), u)
        te.call(u, p) && p !== "key" && p !== "__self" && p !== "__source" && (h[p] = u[p]);
    var m = arguments.length - 2;
    if (m === 1)
      h.children = E;
    else if (1 < m) {
      for (var W = Array(m), A = 0; A < m; A++)
        W[A] = arguments[A + 2];
      h.children = W;
    }
    if (n && n.defaultProps)
      for (p in m = n.defaultProps, m)
        h[p] === void 0 && (h[p] = m[p]);
    return de(n, C, void 0, void 0, null, h);
  }, y.createRef = function() {
    return { current: null };
  }, y.forwardRef = function(n) {
    return { $$typeof: Y, render: n };
  }, y.isValidElement = H, y.lazy = function(n) {
    return {
      $$typeof: x,
      _payload: { _status: -1, _result: n },
      _init: ie
    };
  }, y.memo = function(n, u) {
    return {
      $$typeof: B,
      type: n,
      compare: u === void 0 ? null : u
    };
  }, y.startTransition = function(n) {
    var u = O.T, E = {};
    O.T = E;
    try {
      var p = n(), h = O.S;
      h !== null && h(E, p), typeof p == "object" && p !== null && typeof p.then == "function" && p.then(b, Se);
    } catch (C) {
      Se(C);
    } finally {
      O.T = u;
    }
  }, y.unstable_useCacheRefresh = function() {
    return O.H.useCacheRefresh();
  }, y.use = function(n) {
    return O.H.use(n);
  }, y.useActionState = function(n, u, E) {
    return O.H.useActionState(n, u, E);
  }, y.useCallback = function(n, u) {
    return O.H.useCallback(n, u);
  }, y.useContext = function(n) {
    return O.H.useContext(n);
  }, y.useDebugValue = function() {
  }, y.useDeferredValue = function(n, u) {
    return O.H.useDeferredValue(n, u);
  }, y.useEffect = function(n, u) {
    return O.H.useEffect(n, u);
  }, y.useId = function() {
    return O.H.useId();
  }, y.useImperativeHandle = function(n, u, E) {
    return O.H.useImperativeHandle(n, u, E);
  }, y.useInsertionEffect = function(n, u) {
    return O.H.useInsertionEffect(n, u);
  }, y.useLayoutEffect = function(n, u) {
    return O.H.useLayoutEffect(n, u);
  }, y.useMemo = function(n, u) {
    return O.H.useMemo(n, u);
  }, y.useOptimistic = function(n, u) {
    return O.H.useOptimistic(n, u);
  }, y.useReducer = function(n, u, E) {
    return O.H.useReducer(n, u, E);
  }, y.useRef = function(n) {
    return O.H.useRef(n);
  }, y.useState = function(n) {
    return O.H.useState(n);
  }, y.useSyncExternalStore = function(n, u, E) {
    return O.H.useSyncExternalStore(
      n,
      u,
      E
    );
  }, y.useTransition = function() {
    return O.H.useTransition();
  }, y.version = "19.0.0", y;
}
var Me = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Me.exports;
var it;
function pt() {
  return it || (it = 1, function(S, d) {
    process.env.NODE_ENV !== "production" && function() {
      function X(e, r) {
        Object.defineProperty(j.prototype, e, {
          get: function() {
            console.warn(
              "%s(...) is deprecated in plain JavaScript React classes. %s",
              r[0],
              r[1]
            );
          }
        });
      }
      function G(e) {
        return e === null || typeof e != "object" ? null : (e = ke && e[ke] || e["@@iterator"], typeof e == "function" ? e : null);
      }
      function P(e, r) {
        e = (e = e.constructor) && (e.displayName || e.name) || "ReactClass";
        var o = e + "." + r;
        Ne[o] || (console.error(
          "Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",
          r,
          e
        ), Ne[o] = !0);
      }
      function j(e, r, o) {
        this.props = e, this.context = r, this.refs = a, this.updater = o || t;
      }
      function $() {
      }
      function Y(e, r, o) {
        this.props = e, this.context = r, this.refs = a, this.updater = o || t;
      }
      function Z(e) {
        return "" + e;
      }
      function B(e) {
        try {
          Z(e);
          var r = !1;
        } catch {
          r = !0;
        }
        if (r) {
          r = console;
          var o = r.error, s = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
          return o.call(
            r,
            "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
            s
          ), Z(e);
        }
      }
      function x(e) {
        if (e == null)
          return null;
        if (typeof e == "function")
          return e.$$typeof === g ? null : e.displayName || e.name || null;
        if (typeof e == "string")
          return e;
        switch (e) {
          case A:
            return "Fragment";
          case W:
            return "Portal";
          case je:
            return "Profiler";
          case Ee:
            return "StrictMode";
          case me:
            return "Suspense";
          case Ce:
            return "SuspenseList";
        }
        if (typeof e == "object")
          switch (typeof e.tag == "number" && console.error(
            "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
          ), e.$$typeof) {
            case be:
              return (e.displayName || "Context") + ".Provider";
            case we:
              return (e._context.displayName || "Context") + ".Consumer";
            case Te:
              var r = e.render;
              return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
            case Re:
              return r = e.displayName || null, r !== null ? r : x(e.type) || "Memo";
            case he:
              r = e._payload, e = e._init;
              try {
                return x(e(r));
              } catch {
              }
          }
        return null;
      }
      function oe(e) {
        return typeof e == "string" || typeof e == "function" || e === A || e === je || e === Ee || e === me || e === Ce || e === Ye || typeof e == "object" && e !== null && (e.$$typeof === he || e.$$typeof === Re || e.$$typeof === be || e.$$typeof === we || e.$$typeof === Te || e.$$typeof === M || e.getModuleId !== void 0);
      }
      function ce() {
      }
      function J() {
        if (I === 0) {
          ge = console.log, V = console.info, Oe = console.warn, Q = console.error, Ke = console.group, Qe = console.groupCollapsed, Xe = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ce,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        I++;
      }
      function U() {
        if (I--, I === 0) {
          var e = { configurable: !0, enumerable: !0, writable: !0 };
          Object.defineProperties(console, {
            log: i({}, e, { value: ge }),
            info: i({}, e, { value: V }),
            warn: i({}, e, { value: Oe }),
            error: i({}, e, { value: Q }),
            group: i({}, e, { value: Ke }),
            groupCollapsed: i({}, e, { value: Qe }),
            groupEnd: i({}, e, { value: Xe })
          });
        }
        0 > I && console.error(
          "disabledDepth fell below zero. This is a bug in React. Please file an issue."
        );
      }
      function F(e) {
        if (Le === void 0)
          try {
            throw Error();
          } catch (o) {
            var r = o.stack.trim().match(/\n( *(at )?)/);
            Le = r && r[1] || "", De = -1 < o.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < o.stack.indexOf("@") ? "@unknown:0:0" : "";
          }
        return `
` + Le + e + De;
      }
      function q(e, r) {
        if (!e || qe)
          return "";
        var o = ze.get(e);
        if (o !== void 0)
          return o;
        qe = !0, o = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
        var s = null;
        s = v.H, v.H = null, J();
        try {
          var c = {
            DetermineComponentFrameRoot: function() {
              try {
                if (r) {
                  var ne = function() {
                    throw Error();
                  };
                  if (Object.defineProperty(ne.prototype, "props", {
                    set: function() {
                      throw Error();
                    }
                  }), typeof Reflect == "object" && Reflect.construct) {
                    try {
                      Reflect.construct(ne, []);
                    } catch (ae) {
                      var We = ae;
                    }
                    Reflect.construct(e, [], ne);
                  } else {
                    try {
                      ne.call();
                    } catch (ae) {
                      We = ae;
                    }
                    e.call(ne.prototype);
                  }
                } else {
                  try {
                    throw Error();
                  } catch (ae) {
                    We = ae;
                  }
                  (ne = e()) && typeof ne.catch == "function" && ne.catch(function() {
                  });
                }
              } catch (ae) {
                if (ae && We && typeof ae.stack == "string")
                  return [ae.stack, We.stack];
              }
              return [null, null];
            }
          };
          c.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
          var l = Object.getOwnPropertyDescriptor(
            c.DetermineComponentFrameRoot,
            "name"
          );
          l && l.configurable && Object.defineProperty(
            c.DetermineComponentFrameRoot,
            "name",
            { value: "DetermineComponentFrameRoot" }
          );
          var f = c.DetermineComponentFrameRoot(), T = f[0], w = f[1];
          if (T && w) {
            var k = T.split(`
`), L = w.split(`
`);
            for (f = l = 0; l < k.length && !k[l].includes(
              "DetermineComponentFrameRoot"
            ); )
              l++;
            for (; f < L.length && !L[f].includes(
              "DetermineComponentFrameRoot"
            ); )
              f++;
            if (l === k.length || f === L.length)
              for (l = k.length - 1, f = L.length - 1; 1 <= l && 0 <= f && k[l] !== L[f]; )
                f--;
            for (; 1 <= l && 0 <= f; l--, f--)
              if (k[l] !== L[f]) {
                if (l !== 1 || f !== 1)
                  do
                    if (l--, f--, 0 > f || k[l] !== L[f]) {
                      var Ae = `
` + k[l].replace(
                        " at new ",
                        " at "
                      );
                      return e.displayName && Ae.includes("<anonymous>") && (Ae = Ae.replace("<anonymous>", e.displayName)), typeof e == "function" && ze.set(e, Ae), Ae;
                    }
                  while (1 <= l && 0 <= f);
                break;
              }
          }
        } finally {
          qe = !1, v.H = s, U(), Error.prepareStackTrace = o;
        }
        return k = (k = e ? e.displayName || e.name : "") ? F(k) : "", typeof e == "function" && ze.set(e, k), k;
      }
      function ue(e) {
        if (e == null)
          return "";
        if (typeof e == "function") {
          var r = e.prototype;
          return q(
            e,
            !(!r || !r.isReactComponent)
          );
        }
        if (typeof e == "string")
          return F(e);
        switch (e) {
          case me:
            return F("Suspense");
          case Ce:
            return F("SuspenseList");
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case Te:
              return e = q(e.render, !1), e;
            case Re:
              return ue(e.type);
            case he:
              r = e._payload, e = e._init;
              try {
                return ue(e(r));
              } catch {
              }
          }
        return "";
      }
      function ee() {
        var e = v.A;
        return e === null ? null : e.getOwner();
      }
      function fe(e) {
        if (D.call(e, "key")) {
          var r = Object.getOwnPropertyDescriptor(e, "key").get;
          if (r && r.isReactWarning)
            return !1;
        }
        return e.key !== void 0;
      }
      function le(e, r) {
        function o() {
          Ve || (Ve = !0, console.error(
            "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
            r
          ));
        }
        o.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: o,
          configurable: !0
        });
      }
      function O() {
        var e = x(this.type);
        return Je[e] || (Je[e] = !0, console.error(
          "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
        )), e = this.props.ref, e !== void 0 ? e : null;
      }
      function te(e, r, o, s, c, l) {
        return o = l.ref, e = {
          $$typeof: m,
          type: e,
          key: r,
          props: l,
          _owner: c
        }, (o !== void 0 ? o : null) !== null ? Object.defineProperty(e, "ref", {
          enumerable: !1,
          get: O
        }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: 0
        }), Object.defineProperty(e, "_debugInfo", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: null
        }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
      }
      function de(e, r) {
        return r = te(
          e.type,
          r,
          void 0,
          void 0,
          e._owner,
          e.props
        ), r._store.validated = e._store.validated, r;
      }
      function ye(e, r) {
        if (typeof e == "object" && e && e.$$typeof !== ft) {
          if (R(e))
            for (var o = 0; o < e.length; o++) {
              var s = e[o];
              H(s) && _e(s, r);
            }
          else if (H(e))
            e._store && (e._store.validated = 1);
          else if (o = G(e), typeof o == "function" && o !== e.entries && (o = o.call(e), o !== e))
            for (; !(e = o.next()).done; )
              H(e.value) && _e(e.value, r);
        }
      }
      function H(e) {
        return typeof e == "object" && e !== null && e.$$typeof === m;
      }
      function _e(e, r) {
        if (e._store && !e._store.validated && e.key == null && (e._store.validated = 1, r = pe(r), !Fe[r])) {
          Fe[r] = !0;
          var o = "";
          e && e._owner != null && e._owner !== ee() && (o = null, typeof e._owner.tag == "number" ? o = x(e._owner.type) : typeof e._owner.name == "string" && (o = e._owner.name), o = " It was passed a child from " + o + ".");
          var s = v.getCurrentStack;
          v.getCurrentStack = function() {
            var c = ue(e.type);
            return s && (c += s() || ""), c;
          }, console.error(
            'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
            r,
            o
          ), v.getCurrentStack = s;
        }
      }
      function pe(e) {
        var r = "", o = ee();
        return o && (o = x(o.type)) && (r = `

Check the render method of \`` + o + "`."), r || (e = x(e)) && (r = `

Check the top-level render call using <` + e + ">."), r;
      }
      function se(e) {
        var r = { "=": "=0", ":": "=2" };
        return "$" + e.replace(/[=:]/g, function(o) {
          return r[o];
        });
      }
      function re(e, r) {
        return typeof e == "object" && e !== null && e.key != null ? (B(e.key), se("" + e.key)) : r.toString(36);
      }
      function ve() {
      }
      function K(e) {
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw e.reason;
          default:
            switch (typeof e.status == "string" ? e.then(ve, ve) : (e.status = "pending", e.then(
              function(r) {
                e.status === "pending" && (e.status = "fulfilled", e.value = r);
              },
              function(r) {
                e.status === "pending" && (e.status = "rejected", e.reason = r);
              }
            )), e.status) {
              case "fulfilled":
                return e.value;
              case "rejected":
                throw e.reason;
            }
        }
        throw e;
      }
      function z(e, r, o, s, c) {
        var l = typeof e;
        (l === "undefined" || l === "boolean") && (e = null);
        var f = !1;
        if (e === null)
          f = !0;
        else
          switch (l) {
            case "bigint":
            case "string":
            case "number":
              f = !0;
              break;
            case "object":
              switch (e.$$typeof) {
                case m:
                case W:
                  f = !0;
                  break;
                case he:
                  return f = e._init, z(
                    f(e._payload),
                    r,
                    o,
                    s,
                    c
                  );
              }
          }
        if (f) {
          f = e, c = c(f);
          var T = s === "" ? "." + re(f, 0) : s;
          return R(c) ? (o = "", T != null && (o = T.replace(tt, "$&/") + "/"), z(c, r, o, "", function(k) {
            return k;
          })) : c != null && (H(c) && (c.key != null && (f && f.key === c.key || B(c.key)), o = de(
            c,
            o + (c.key == null || f && f.key === c.key ? "" : ("" + c.key).replace(
              tt,
              "$&/"
            ) + "/") + T
          ), s !== "" && f != null && H(f) && f.key == null && f._store && !f._store.validated && (o._store.validated = 2), c = o), r.push(c)), 1;
        }
        if (f = 0, T = s === "" ? "." : s + ":", R(e))
          for (var w = 0; w < e.length; w++)
            s = e[w], l = T + re(s, w), f += z(
              s,
              r,
              o,
              l,
              c
            );
        else if (w = G(e), typeof w == "function")
          for (w === e.entries && (et || console.warn(
            "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
          ), et = !0), e = w.call(e), w = 0; !(s = e.next()).done; )
            s = s.value, l = T + re(s, w++), f += z(
              s,
              r,
              o,
              l,
              c
            );
        else if (l === "object") {
          if (typeof e.then == "function")
            return z(
              K(e),
              r,
              o,
              s,
              c
            );
          throw r = String(e), Error(
            "Objects are not valid as a React child (found: " + (r === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : r) + "). If you meant to render a collection of children, use an array instead."
          );
        }
        return f;
      }
      function ie(e, r, o) {
        if (e == null)
          return e;
        var s = [], c = 0;
        return z(e, s, "", "", function(l) {
          return r.call(o, l, c++);
        }), s;
      }
      function Se(e) {
        if (e._status === -1) {
          var r = e._result;
          r = r(), r.then(
            function(o) {
              (e._status === 0 || e._status === -1) && (e._status = 1, e._result = o);
            },
            function(o) {
              (e._status === 0 || e._status === -1) && (e._status = 2, e._result = o);
            }
          ), e._status === -1 && (e._status = 0, e._result = r);
        }
        if (e._status === 1)
          return r = e._result, r === void 0 && console.error(
            `lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`,
            r
          ), "default" in r || console.error(
            `lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`,
            r
          ), r.default;
        throw e._result;
      }
      function b() {
        var e = v.H;
        return e === null && console.error(
          `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
        ), e;
      }
      function n() {
      }
      function u(e) {
        if (xe === null)
          try {
            var r = ("require" + Math.random()).slice(0, 7);
            xe = (S && S[r]).call(
              S,
              "timers"
            ).setImmediate;
          } catch {
            xe = function(s) {
              nt === !1 && (nt = !0, typeof MessageChannel > "u" && console.error(
                "This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."
              ));
              var c = new MessageChannel();
              c.port1.onmessage = s, c.port2.postMessage(void 0);
            };
          }
        return xe(e);
      }
      function E(e) {
        return 1 < e.length && typeof AggregateError == "function" ? new AggregateError(e) : e[0];
      }
      function p(e, r) {
        r !== Ue - 1 && console.error(
          "You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "
        ), Ue = r;
      }
      function h(e, r, o) {
        var s = v.actQueue;
        if (s !== null)
          if (s.length !== 0)
            try {
              C(s), u(function() {
                return h(e, r, o);
              });
              return;
            } catch (c) {
              v.thrownErrors.push(c);
            }
          else
            v.actQueue = null;
        0 < v.thrownErrors.length ? (s = E(v.thrownErrors), v.thrownErrors.length = 0, o(s)) : r(e);
      }
      function C(e) {
        if (!Ie) {
          Ie = !0;
          var r = 0;
          try {
            for (; r < e.length; r++) {
              var o = e[r];
              do {
                v.didUsePromise = !1;
                var s = o(!1);
                if (s !== null) {
                  if (v.didUsePromise) {
                    e[r] = o, e.splice(0, r);
                    return;
                  }
                  o = s;
                } else
                  break;
              } while (1);
            }
            e.length = 0;
          } catch (c) {
            e.splice(0, r + 1), v.thrownErrors.push(c);
          } finally {
            Ie = !1;
          }
        }
      }
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
      var m = Symbol.for("react.transitional.element"), W = Symbol.for("react.portal"), A = Symbol.for("react.fragment"), Ee = Symbol.for("react.strict_mode"), je = Symbol.for("react.profiler"), we = Symbol.for("react.consumer"), be = Symbol.for("react.context"), Te = Symbol.for("react.forward_ref"), me = Symbol.for("react.suspense"), Ce = Symbol.for("react.suspense_list"), Re = Symbol.for("react.memo"), he = Symbol.for("react.lazy"), Ye = Symbol.for("react.offscreen"), ke = Symbol.iterator, Ne = {}, t = {
        isMounted: function() {
          return !1;
        },
        enqueueForceUpdate: function(e) {
          P(e, "forceUpdate");
        },
        enqueueReplaceState: function(e) {
          P(e, "replaceState");
        },
        enqueueSetState: function(e) {
          P(e, "setState");
        }
      }, i = Object.assign, a = {};
      Object.freeze(a), j.prototype.isReactComponent = {}, j.prototype.setState = function(e, r) {
        if (typeof e != "object" && typeof e != "function" && e != null)
          throw Error(
            "takes an object of state variables to update or a function which returns an object of state variables."
          );
        this.updater.enqueueSetState(this, e, r, "setState");
      }, j.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate");
      };
      var _ = {
        isMounted: [
          "isMounted",
          "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."
        ],
        replaceState: [
          "replaceState",
          "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."
        ]
      }, N;
      for (N in _)
        _.hasOwnProperty(N) && X(N, _[N]);
      $.prototype = j.prototype, _ = Y.prototype = new $(), _.constructor = Y, i(_, j.prototype), _.isPureReactComponent = !0;
      var R = Array.isArray, g = Symbol.for("react.client.reference"), v = {
        H: null,
        A: null,
        T: null,
        S: null,
        actQueue: null,
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1,
        didUsePromise: !1,
        thrownErrors: [],
        getCurrentStack: null
      }, D = Object.prototype.hasOwnProperty, M = Symbol.for("react.client.reference"), I = 0, ge, V, Oe, Q, Ke, Qe, Xe;
      ce.__reactDisabledLog = !0;
      var Le, De, qe = !1, ze = new (typeof WeakMap == "function" ? WeakMap : Map)(), ft = Symbol.for("react.client.reference"), Ve, Ze, Je = {}, Fe = {}, et = !1, tt = /\/+/g, rt = typeof reportError == "function" ? reportError : function(e) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
          var r = new window.ErrorEvent("error", {
            bubbles: !0,
            cancelable: !0,
            message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
            error: e
          });
          if (!window.dispatchEvent(r))
            return;
        } else if (typeof process == "object" && typeof process.emit == "function") {
          process.emit("uncaughtException", e);
          return;
        }
        console.error(e);
      }, nt = !1, xe = null, Ue = 0, He = !1, Ie = !1, ot = typeof queueMicrotask == "function" ? function(e) {
        queueMicrotask(function() {
          return queueMicrotask(e);
        });
      } : u;
      d.Children = {
        map: ie,
        forEach: function(e, r, o) {
          ie(
            e,
            function() {
              r.apply(this, arguments);
            },
            o
          );
        },
        count: function(e) {
          var r = 0;
          return ie(e, function() {
            r++;
          }), r;
        },
        toArray: function(e) {
          return ie(e, function(r) {
            return r;
          }) || [];
        },
        only: function(e) {
          if (!H(e))
            throw Error(
              "React.Children.only expected to receive a single React element child."
            );
          return e;
        }
      }, d.Component = j, d.Fragment = A, d.Profiler = je, d.PureComponent = Y, d.StrictMode = Ee, d.Suspense = me, d.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = v, d.act = function(e) {
        var r = v.actQueue, o = Ue;
        Ue++;
        var s = v.actQueue = r !== null ? r : [], c = !1;
        try {
          var l = e();
        } catch (w) {
          v.thrownErrors.push(w);
        }
        if (0 < v.thrownErrors.length)
          throw p(r, o), e = E(v.thrownErrors), v.thrownErrors.length = 0, e;
        if (l !== null && typeof l == "object" && typeof l.then == "function") {
          var f = l;
          return ot(function() {
            c || He || (He = !0, console.error(
              "You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"
            ));
          }), {
            then: function(w, k) {
              c = !0, f.then(
                function(L) {
                  if (p(r, o), o === 0) {
                    try {
                      C(s), u(function() {
                        return h(
                          L,
                          w,
                          k
                        );
                      });
                    } catch (ne) {
                      v.thrownErrors.push(ne);
                    }
                    if (0 < v.thrownErrors.length) {
                      var Ae = E(
                        v.thrownErrors
                      );
                      v.thrownErrors.length = 0, k(Ae);
                    }
                  } else
                    w(L);
                },
                function(L) {
                  p(r, o), 0 < v.thrownErrors.length && (L = E(
                    v.thrownErrors
                  ), v.thrownErrors.length = 0), k(L);
                }
              );
            }
          };
        }
        var T = l;
        if (p(r, o), o === 0 && (C(s), s.length !== 0 && ot(function() {
          c || He || (He = !0, console.error(
            "A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"
          ));
        }), v.actQueue = null), 0 < v.thrownErrors.length)
          throw e = E(v.thrownErrors), v.thrownErrors.length = 0, e;
        return {
          then: function(w, k) {
            c = !0, o === 0 ? (v.actQueue = s, u(function() {
              return h(
                T,
                w,
                k
              );
            })) : w(T);
          }
        };
      }, d.cache = function(e) {
        return function() {
          return e.apply(null, arguments);
        };
      }, d.cloneElement = function(e, r, o) {
        if (e == null)
          throw Error(
            "The argument must be a React element, but you passed " + e + "."
          );
        var s = i({}, e.props), c = e.key, l = e._owner;
        if (r != null) {
          var f;
          e: {
            if (D.call(r, "ref") && (f = Object.getOwnPropertyDescriptor(
              r,
              "ref"
            ).get) && f.isReactWarning) {
              f = !1;
              break e;
            }
            f = r.ref !== void 0;
          }
          f && (l = ee()), fe(r) && (B(r.key), c = "" + r.key);
          for (T in r)
            !D.call(r, T) || T === "key" || T === "__self" || T === "__source" || T === "ref" && r.ref === void 0 || (s[T] = r[T]);
        }
        var T = arguments.length - 2;
        if (T === 1)
          s.children = o;
        else if (1 < T) {
          f = Array(T);
          for (var w = 0; w < T; w++)
            f[w] = arguments[w + 2];
          s.children = f;
        }
        for (s = te(e.type, c, void 0, void 0, l, s), c = 2; c < arguments.length; c++)
          ye(arguments[c], s.type);
        return s;
      }, d.createContext = function(e) {
        return e = {
          $$typeof: be,
          _currentValue: e,
          _currentValue2: e,
          _threadCount: 0,
          Provider: null,
          Consumer: null
        }, e.Provider = e, e.Consumer = {
          $$typeof: we,
          _context: e
        }, e._currentRenderer = null, e._currentRenderer2 = null, e;
      }, d.createElement = function(e, r, o) {
        if (oe(e))
          for (var s = 2; s < arguments.length; s++)
            ye(arguments[s], e);
        else {
          if (s = "", (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (s += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), e === null)
            var c = "null";
          else
            R(e) ? c = "array" : e !== void 0 && e.$$typeof === m ? (c = "<" + (x(e.type) || "Unknown") + " />", s = " Did you accidentally export a JSX literal instead of a component?") : c = typeof e;
          console.error(
            "React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
            c,
            s
          );
        }
        var l;
        if (s = {}, c = null, r != null)
          for (l in Ze || !("__self" in r) || "key" in r || (Ze = !0, console.warn(
            "Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform"
          )), fe(r) && (B(r.key), c = "" + r.key), r)
            D.call(r, l) && l !== "key" && l !== "__self" && l !== "__source" && (s[l] = r[l]);
        var f = arguments.length - 2;
        if (f === 1)
          s.children = o;
        else if (1 < f) {
          for (var T = Array(f), w = 0; w < f; w++)
            T[w] = arguments[w + 2];
          Object.freeze && Object.freeze(T), s.children = T;
        }
        if (e && e.defaultProps)
          for (l in f = e.defaultProps, f)
            s[l] === void 0 && (s[l] = f[l]);
        return c && le(
          s,
          typeof e == "function" ? e.displayName || e.name || "Unknown" : e
        ), te(e, c, void 0, void 0, ee(), s);
      }, d.createRef = function() {
        var e = { current: null };
        return Object.seal(e), e;
      }, d.forwardRef = function(e) {
        e != null && e.$$typeof === Re ? console.error(
          "forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."
        ) : typeof e != "function" ? console.error(
          "forwardRef requires a render function but was given %s.",
          e === null ? "null" : typeof e
        ) : e.length !== 0 && e.length !== 2 && console.error(
          "forwardRef render functions accept exactly two parameters: props and ref. %s",
          e.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."
        ), e != null && e.defaultProps != null && console.error(
          "forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?"
        );
        var r = { $$typeof: Te, render: e }, o;
        return Object.defineProperty(r, "displayName", {
          enumerable: !1,
          configurable: !0,
          get: function() {
            return o;
          },
          set: function(s) {
            o = s, e.name || e.displayName || (Object.defineProperty(e, "name", { value: s }), e.displayName = s);
          }
        }), r;
      }, d.isValidElement = H, d.lazy = function(e) {
        return {
          $$typeof: he,
          _payload: { _status: -1, _result: e },
          _init: Se
        };
      }, d.memo = function(e, r) {
        oe(e) || console.error(
          "memo: The first argument must be a component. Instead received: %s",
          e === null ? "null" : typeof e
        ), r = {
          $$typeof: Re,
          type: e,
          compare: r === void 0 ? null : r
        };
        var o;
        return Object.defineProperty(r, "displayName", {
          enumerable: !1,
          configurable: !0,
          get: function() {
            return o;
          },
          set: function(s) {
            o = s, e.name || e.displayName || (Object.defineProperty(e, "name", { value: s }), e.displayName = s);
          }
        }), r;
      }, d.startTransition = function(e) {
        var r = v.T, o = {};
        v.T = o, o._updatedFibers = /* @__PURE__ */ new Set();
        try {
          var s = e(), c = v.S;
          c !== null && c(o, s), typeof s == "object" && s !== null && typeof s.then == "function" && s.then(n, rt);
        } catch (l) {
          rt(l);
        } finally {
          r === null && o._updatedFibers && (e = o._updatedFibers.size, o._updatedFibers.clear(), 10 < e && console.warn(
            "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
          )), v.T = r;
        }
      }, d.unstable_useCacheRefresh = function() {
        return b().useCacheRefresh();
      }, d.use = function(e) {
        return b().use(e);
      }, d.useActionState = function(e, r, o) {
        return b().useActionState(
          e,
          r,
          o
        );
      }, d.useCallback = function(e, r) {
        return b().useCallback(e, r);
      }, d.useContext = function(e) {
        var r = b();
        return e.$$typeof === we && console.error(
          "Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?"
        ), r.useContext(e);
      }, d.useDebugValue = function(e, r) {
        return b().useDebugValue(e, r);
      }, d.useDeferredValue = function(e, r) {
        return b().useDeferredValue(e, r);
      }, d.useEffect = function(e, r) {
        return b().useEffect(e, r);
      }, d.useId = function() {
        return b().useId();
      }, d.useImperativeHandle = function(e, r, o) {
        return b().useImperativeHandle(e, r, o);
      }, d.useInsertionEffect = function(e, r) {
        return b().useInsertionEffect(e, r);
      }, d.useLayoutEffect = function(e, r) {
        return b().useLayoutEffect(e, r);
      }, d.useMemo = function(e, r) {
        return b().useMemo(e, r);
      }, d.useOptimistic = function(e, r) {
        return b().useOptimistic(e, r);
      }, d.useReducer = function(e, r, o) {
        return b().useReducer(e, r, o);
      }, d.useRef = function(e) {
        return b().useRef(e);
      }, d.useState = function(e) {
        return b().useState(e);
      }, d.useSyncExternalStore = function(e, r, o) {
        return b().useSyncExternalStore(
          e,
          r,
          o
        );
      }, d.useTransition = function() {
        return b().useTransition();
      }, d.version = "19.0.0", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    }();
  }(Me, Me.exports)), Me.exports;
}
process.env.NODE_ENV === "production" ? Be.exports = dt() : Be.exports = pt();
var ct = Be.exports;
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var at;
function vt() {
  return at || (at = 1, process.env.NODE_ENV !== "production" && function() {
    function S(t) {
      if (t == null)
        return null;
      if (typeof t == "function")
        return t.$$typeof === Se ? null : t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
      switch (t) {
        case te:
          return "Fragment";
        case O:
          return "Portal";
        case ye:
          return "Profiler";
        case de:
          return "StrictMode";
        case se:
          return "Suspense";
        case re:
          return "SuspenseList";
      }
      if (typeof t == "object")
        switch (typeof t.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), t.$$typeof) {
          case _e:
            return (t.displayName || "Context") + ".Provider";
          case H:
            return (t._context.displayName || "Context") + ".Consumer";
          case pe:
            var i = t.render;
            return t = t.displayName, t || (t = i.displayName || i.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
          case ve:
            return i = t.displayName || null, i !== null ? i : S(t.type) || "Memo";
          case K:
            i = t._payload, t = t._init;
            try {
              return S(t(i));
            } catch {
            }
        }
      return null;
    }
    function d(t) {
      return "" + t;
    }
    function X(t) {
      try {
        d(t);
        var i = !1;
      } catch {
        i = !0;
      }
      if (i) {
        i = console;
        var a = i.error, _ = typeof Symbol == "function" && Symbol.toStringTag && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return a.call(
          i,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          _
        ), d(t);
      }
    }
    function G() {
    }
    function P() {
      if (h === 0) {
        C = console.log, m = console.info, W = console.warn, A = console.error, Ee = console.group, je = console.groupCollapsed, we = console.groupEnd;
        var t = {
          configurable: !0,
          enumerable: !0,
          value: G,
          writable: !0
        };
        Object.defineProperties(console, {
          info: t,
          log: t,
          warn: t,
          error: t,
          group: t,
          groupCollapsed: t,
          groupEnd: t
        });
      }
      h++;
    }
    function j() {
      if (h--, h === 0) {
        var t = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: u({}, t, { value: C }),
          info: u({}, t, { value: m }),
          warn: u({}, t, { value: W }),
          error: u({}, t, { value: A }),
          group: u({}, t, { value: Ee }),
          groupCollapsed: u({}, t, { value: je }),
          groupEnd: u({}, t, { value: we })
        });
      }
      0 > h && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function $(t) {
      if (be === void 0)
        try {
          throw Error();
        } catch (a) {
          var i = a.stack.trim().match(/\n( *(at )?)/);
          be = i && i[1] || "", Te = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + be + t + Te;
    }
    function Y(t, i) {
      if (!t || me)
        return "";
      var a = Ce.get(t);
      if (a !== void 0)
        return a;
      me = !0, a = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var _ = null;
      _ = b.H, b.H = null, P();
      try {
        var N = {
          DetermineComponentFrameRoot: function() {
            try {
              if (i) {
                var V = function() {
                  throw Error();
                };
                if (Object.defineProperty(V.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(V, []);
                  } catch (Q) {
                    var Oe = Q;
                  }
                  Reflect.construct(t, [], V);
                } else {
                  try {
                    V.call();
                  } catch (Q) {
                    Oe = Q;
                  }
                  t.call(V.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (Q) {
                  Oe = Q;
                }
                (V = t()) && typeof V.catch == "function" && V.catch(function() {
                });
              }
            } catch (Q) {
              if (Q && Oe && typeof Q.stack == "string")
                return [Q.stack, Oe.stack];
            }
            return [null, null];
          }
        };
        N.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var R = Object.getOwnPropertyDescriptor(
          N.DetermineComponentFrameRoot,
          "name"
        );
        R && R.configurable && Object.defineProperty(
          N.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var g = N.DetermineComponentFrameRoot(), v = g[0], D = g[1];
        if (v && D) {
          var M = v.split(`
`), I = D.split(`
`);
          for (g = R = 0; R < M.length && !M[R].includes(
            "DetermineComponentFrameRoot"
          ); )
            R++;
          for (; g < I.length && !I[g].includes(
            "DetermineComponentFrameRoot"
          ); )
            g++;
          if (R === M.length || g === I.length)
            for (R = M.length - 1, g = I.length - 1; 1 <= R && 0 <= g && M[R] !== I[g]; )
              g--;
          for (; 1 <= R && 0 <= g; R--, g--)
            if (M[R] !== I[g]) {
              if (R !== 1 || g !== 1)
                do
                  if (R--, g--, 0 > g || M[R] !== I[g]) {
                    var ge = `
` + M[R].replace(
                      " at new ",
                      " at "
                    );
                    return t.displayName && ge.includes("<anonymous>") && (ge = ge.replace("<anonymous>", t.displayName)), typeof t == "function" && Ce.set(t, ge), ge;
                  }
                while (1 <= R && 0 <= g);
              break;
            }
        }
      } finally {
        me = !1, b.H = _, j(), Error.prepareStackTrace = a;
      }
      return M = (M = t ? t.displayName || t.name : "") ? $(M) : "", typeof t == "function" && Ce.set(t, M), M;
    }
    function Z(t) {
      if (t == null)
        return "";
      if (typeof t == "function") {
        var i = t.prototype;
        return Y(
          t,
          !(!i || !i.isReactComponent)
        );
      }
      if (typeof t == "string")
        return $(t);
      switch (t) {
        case se:
          return $("Suspense");
        case re:
          return $("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case pe:
            return t = Y(t.render, !1), t;
          case ve:
            return Z(t.type);
          case K:
            i = t._payload, t = t._init;
            try {
              return Z(t(i));
            } catch {
            }
        }
      return "";
    }
    function B() {
      var t = b.A;
      return t === null ? null : t.getOwner();
    }
    function x(t) {
      if (n.call(t, "key")) {
        var i = Object.getOwnPropertyDescriptor(t, "key").get;
        if (i && i.isReactWarning)
          return !1;
      }
      return t.key !== void 0;
    }
    function oe(t, i) {
      function a() {
        he || (he = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          i
        ));
      }
      a.isReactWarning = !0, Object.defineProperty(t, "key", {
        get: a,
        configurable: !0
      });
    }
    function ce() {
      var t = S(this.type);
      return Ye[t] || (Ye[t] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), t = this.props.ref, t !== void 0 ? t : null;
    }
    function J(t, i, a, _, N, R) {
      return a = R.ref, t = {
        $$typeof: le,
        type: t,
        key: i,
        props: R,
        _owner: N
      }, (a !== void 0 ? a : null) !== null ? Object.defineProperty(t, "ref", {
        enumerable: !1,
        get: ce
      }) : Object.defineProperty(t, "ref", { enumerable: !1, value: null }), t._store = {}, Object.defineProperty(t._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(t, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.freeze && (Object.freeze(t.props), Object.freeze(t)), t;
    }
    function U(t, i, a, _, N, R) {
      if (typeof t == "string" || typeof t == "function" || t === te || t === ye || t === de || t === se || t === re || t === z || typeof t == "object" && t !== null && (t.$$typeof === K || t.$$typeof === ve || t.$$typeof === _e || t.$$typeof === H || t.$$typeof === pe || t.$$typeof === E || t.getModuleId !== void 0)) {
        var g = i.children;
        if (g !== void 0)
          if (_)
            if (p(g)) {
              for (_ = 0; _ < g.length; _++)
                F(g[_], t);
              Object.freeze && Object.freeze(g);
            } else
              console.error(
                "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
              );
          else
            F(g, t);
      } else
        g = "", (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (g += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), t === null ? _ = "null" : p(t) ? _ = "array" : t !== void 0 && t.$$typeof === le ? (_ = "<" + (S(t.type) || "Unknown") + " />", g = " Did you accidentally export a JSX literal instead of a component?") : _ = typeof t, console.error(
          "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
          _,
          g
        );
      if (n.call(i, "key")) {
        g = S(t);
        var v = Object.keys(i).filter(function(M) {
          return M !== "key";
        });
        _ = 0 < v.length ? "{key: someKey, " + v.join(": ..., ") + ": ...}" : "{key: someKey}", ke[g + _] || (v = 0 < v.length ? "{" + v.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          _,
          g,
          v,
          g
        ), ke[g + _] = !0);
      }
      if (g = null, a !== void 0 && (X(a), g = "" + a), x(i) && (X(i.key), g = "" + i.key), "key" in i) {
        a = {};
        for (var D in i)
          D !== "key" && (a[D] = i[D]);
      } else
        a = i;
      return g && oe(
        a,
        typeof t == "function" ? t.displayName || t.name || "Unknown" : t
      ), J(t, g, R, N, B(), a);
    }
    function F(t, i) {
      if (typeof t == "object" && t && t.$$typeof !== Re) {
        if (p(t))
          for (var a = 0; a < t.length; a++) {
            var _ = t[a];
            q(_) && ue(_, i);
          }
        else if (q(t))
          t._store && (t._store.validated = 1);
        else if (t === null || typeof t != "object" ? a = null : (a = ie && t[ie] || t["@@iterator"], a = typeof a == "function" ? a : null), typeof a == "function" && a !== t.entries && (a = a.call(t), a !== t))
          for (; !(t = a.next()).done; )
            q(t.value) && ue(t.value, i);
      }
    }
    function q(t) {
      return typeof t == "object" && t !== null && t.$$typeof === le;
    }
    function ue(t, i) {
      if (t._store && !t._store.validated && t.key == null && (t._store.validated = 1, i = ee(i), !Ne[i])) {
        Ne[i] = !0;
        var a = "";
        t && t._owner != null && t._owner !== B() && (a = null, typeof t._owner.tag == "number" ? a = S(t._owner.type) : typeof t._owner.name == "string" && (a = t._owner.name), a = " It was passed a child from " + a + ".");
        var _ = b.getCurrentStack;
        b.getCurrentStack = function() {
          var N = Z(t.type);
          return _ && (N += _() || ""), N;
        }, console.error(
          'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
          i,
          a
        ), b.getCurrentStack = _;
      }
    }
    function ee(t) {
      var i = "", a = B();
      return a && (a = S(a.type)) && (i = `

Check the render method of \`` + a + "`."), i || (t = S(t)) && (i = `

Check the top-level render call using <` + t + ">."), i;
    }
    var fe = ct, le = Symbol.for("react.transitional.element"), O = Symbol.for("react.portal"), te = Symbol.for("react.fragment"), de = Symbol.for("react.strict_mode"), ye = Symbol.for("react.profiler"), H = Symbol.for("react.consumer"), _e = Symbol.for("react.context"), pe = Symbol.for("react.forward_ref"), se = Symbol.for("react.suspense"), re = Symbol.for("react.suspense_list"), ve = Symbol.for("react.memo"), K = Symbol.for("react.lazy"), z = Symbol.for("react.offscreen"), ie = Symbol.iterator, Se = Symbol.for("react.client.reference"), b = fe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, n = Object.prototype.hasOwnProperty, u = Object.assign, E = Symbol.for("react.client.reference"), p = Array.isArray, h = 0, C, m, W, A, Ee, je, we;
    G.__reactDisabledLog = !0;
    var be, Te, me = !1, Ce = new (typeof WeakMap == "function" ? WeakMap : Map)(), Re = Symbol.for("react.client.reference"), he, Ye = {}, ke = {}, Ne = {};
    $e.Fragment = te, $e.jsx = function(t, i, a, _, N) {
      return U(t, i, a, !1, _, N);
    }, $e.jsxs = function(t, i, a, _, N) {
      return U(t, i, a, !0, _, N);
    };
  }()), $e;
}
process.env.NODE_ENV === "production" ? Ge.exports = lt() : Ge.exports = vt();
var Et = Ge.exports;
const mt = Et.jsx;
function ht(...S) {
  return S.filter(Boolean).map((d) => d.trim()).join(" ");
}
function gt(S) {
  return ct.forwardRef(S);
}
const yt = gt(
  ({
    icon: S,
    onClick: d,
    as: X,
    weight: G,
    fill: P = !1,
    grade: j,
    size: $,
    style: Y,
    color: Z,
    className: B,
    ...x
  }, oe) => {
    const ce = d ? "button" : X || "span", J = { color: Z, ...Y }, U = [];
    return P && U.push('"FILL" 1'), G && U.push(`"wght" ${G}`), j && U.push(`"GRAD" ${j}`), $ && (U.push(`"opsz" ${$}`), J.fontSize = $), U.length > 0 && (J.fontVariationSettings = U.join(", ")), /* @__PURE__ */ mt(
      ce,
      {
        ...x,
        ref: oe,
        style: J,
        onClick: d,
        className: ht("material-symbols", B),
        children: S
      }
    );
  }
);
export {
  yt as MaterialSymbol
};
