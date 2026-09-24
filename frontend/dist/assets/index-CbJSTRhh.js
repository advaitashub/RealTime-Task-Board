function Nh(o, i) {
  for (var s = 0; s < i.length; s++) {
    const u = i[s];
    if (typeof u != "string" && !Array.isArray(u)) {
      for (const f in u)
        if (f !== "default" && !(f in o)) {
          const h = Object.getOwnPropertyDescriptor(u, f);
          h &&
            Object.defineProperty(
              o,
              f,
              h.get ? h : { enumerable: !0, get: () => u[f] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(o, Symbol.toStringTag, { value: "Module" }),
  );
}
(function () {
  const i = document.createElement("link").relList;
  if (i && i.supports && i.supports("modulepreload")) return;
  for (const f of document.querySelectorAll('link[rel="modulepreload"]')) u(f);
  new MutationObserver((f) => {
    for (const h of f)
      if (h.type === "childList")
        for (const y of h.addedNodes)
          y.tagName === "LINK" && y.rel === "modulepreload" && u(y);
  }).observe(document, { childList: !0, subtree: !0 });
  function s(f) {
    const h = {};
    return (
      f.integrity && (h.integrity = f.integrity),
      f.referrerPolicy && (h.referrerPolicy = f.referrerPolicy),
      f.crossOrigin === "use-credentials"
        ? (h.credentials = "include")
        : f.crossOrigin === "anonymous"
          ? (h.credentials = "omit")
          : (h.credentials = "same-origin"),
      h
    );
  }
  function u(f) {
    if (f.ep) return;
    f.ep = !0;
    const h = s(f);
    fetch(f.href, h);
  }
})();
function bc(o) {
  return o && o.__esModule && Object.prototype.hasOwnProperty.call(o, "default")
    ? o.default
    : o;
}
var po = { exports: {} },
  Jr = {},
  mo = { exports: {} },
  b = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Tc;
function Th() {
  if (Tc) return b;
  Tc = 1;
  var o = Symbol.for("react.element"),
    i = Symbol.for("react.portal"),
    s = Symbol.for("react.fragment"),
    u = Symbol.for("react.strict_mode"),
    f = Symbol.for("react.profiler"),
    h = Symbol.for("react.provider"),
    y = Symbol.for("react.context"),
    g = Symbol.for("react.forward_ref"),
    k = Symbol.for("react.suspense"),
    C = Symbol.for("react.memo"),
    O = Symbol.for("react.lazy"),
    E = Symbol.iterator;
  function A(w) {
    return w === null || typeof w != "object"
      ? null
      : ((w = (E && w[E]) || w["@@iterator"]),
        typeof w == "function" ? w : null);
  }
  var Y = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    ee = Object.assign,
    H = {};
  function B(w, T, J) {
    ((this.props = w),
      (this.context = T),
      (this.refs = H),
      (this.updater = J || Y));
  }
  ((B.prototype.isReactComponent = {}),
    (B.prototype.setState = function (w, T) {
      if (typeof w != "object" && typeof w != "function" && w != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, w, T, "setState");
    }),
    (B.prototype.forceUpdate = function (w) {
      this.updater.enqueueForceUpdate(this, w, "forceUpdate");
    }));
  function te() {}
  te.prototype = B.prototype;
  function ie(w, T, J) {
    ((this.props = w),
      (this.context = T),
      (this.refs = H),
      (this.updater = J || Y));
  }
  var le = (ie.prototype = new te());
  ((le.constructor = ie), ee(le, B.prototype), (le.isPureReactComponent = !0));
  var oe = Array.isArray,
    Ee = Object.prototype.hasOwnProperty,
    he = { current: null },
    Ve = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Ae(w, T, J) {
    var Z,
      X = {},
      re = null,
      ae = null;
    if (T != null)
      for (Z in (T.ref !== void 0 && (ae = T.ref),
      T.key !== void 0 && (re = "" + T.key),
      T))
        Ee.call(T, Z) && !Ve.hasOwnProperty(Z) && (X[Z] = T[Z]);
    var ce = arguments.length - 2;
    if (ce === 1) X.children = J;
    else if (1 < ce) {
      for (var pe = Array(ce), $e = 0; $e < ce; $e++)
        pe[$e] = arguments[$e + 2];
      X.children = pe;
    }
    if (w && w.defaultProps)
      for (Z in ((ce = w.defaultProps), ce)) X[Z] === void 0 && (X[Z] = ce[Z]);
    return {
      $$typeof: o,
      type: w,
      key: re,
      ref: ae,
      props: X,
      _owner: he.current,
    };
  }
  function Nt(w, T) {
    return {
      $$typeof: o,
      type: w.type,
      key: T,
      ref: w.ref,
      props: w.props,
      _owner: w._owner,
    };
  }
  function Je(w) {
    return typeof w == "object" && w !== null && w.$$typeof === o;
  }
  function yt(w) {
    var T = { "=": "=0", ":": "=2" };
    return (
      "$" +
      w.replace(/[=:]/g, function (J) {
        return T[J];
      })
    );
  }
  var rt = /\/+/g;
  function Be(w, T) {
    return typeof w == "object" && w !== null && w.key != null
      ? yt("" + w.key)
      : T.toString(36);
  }
  function Me(w, T, J, Z, X) {
    var re = typeof w;
    (re === "undefined" || re === "boolean") && (w = null);
    var ae = !1;
    if (w === null) ae = !0;
    else
      switch (re) {
        case "string":
        case "number":
          ae = !0;
          break;
        case "object":
          switch (w.$$typeof) {
            case o:
            case i:
              ae = !0;
          }
      }
    if (ae)
      return (
        (ae = w),
        (X = X(ae)),
        (w = Z === "" ? "." + Be(ae, 0) : Z),
        oe(X)
          ? ((J = ""),
            w != null && (J = w.replace(rt, "$&/") + "/"),
            Me(X, T, J, "", function ($e) {
              return $e;
            }))
          : X != null &&
            (Je(X) &&
              (X = Nt(
                X,
                J +
                  (!X.key || (ae && ae.key === X.key)
                    ? ""
                    : ("" + X.key).replace(rt, "$&/") + "/") +
                  w,
              )),
            T.push(X)),
        1
      );
    if (((ae = 0), (Z = Z === "" ? "." : Z + ":"), oe(w)))
      for (var ce = 0; ce < w.length; ce++) {
        re = w[ce];
        var pe = Z + Be(re, ce);
        ae += Me(re, T, J, pe, X);
      }
    else if (((pe = A(w)), typeof pe == "function"))
      for (w = pe.call(w), ce = 0; !(re = w.next()).done; )
        ((re = re.value), (pe = Z + Be(re, ce++)), (ae += Me(re, T, J, pe, X)));
    else if (re === "object")
      throw (
        (T = String(w)),
        Error(
          "Objects are not valid as a React child (found: " +
            (T === "[object Object]"
              ? "object with keys {" + Object.keys(w).join(", ") + "}"
              : T) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    return ae;
  }
  function it(w, T, J) {
    if (w == null) return w;
    var Z = [],
      X = 0;
    return (
      Me(w, Z, "", "", function (re) {
        return T.call(J, re, X++);
      }),
      Z
    );
  }
  function je(w) {
    if (w._status === -1) {
      var T = w._result;
      ((T = T()),
        T.then(
          function (J) {
            (w._status === 0 || w._status === -1) &&
              ((w._status = 1), (w._result = J));
          },
          function (J) {
            (w._status === 0 || w._status === -1) &&
              ((w._status = 2), (w._result = J));
          },
        ),
        w._status === -1 && ((w._status = 0), (w._result = T)));
    }
    if (w._status === 1) return w._result.default;
    throw w._result;
  }
  var ye = { current: null },
    D = { transition: null },
    W = {
      ReactCurrentDispatcher: ye,
      ReactCurrentBatchConfig: D,
      ReactCurrentOwner: he,
    };
  function I() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (b.Children = {
      map: it,
      forEach: function (w, T, J) {
        it(
          w,
          function () {
            T.apply(this, arguments);
          },
          J,
        );
      },
      count: function (w) {
        var T = 0;
        return (
          it(w, function () {
            T++;
          }),
          T
        );
      },
      toArray: function (w) {
        return (
          it(w, function (T) {
            return T;
          }) || []
        );
      },
      only: function (w) {
        if (!Je(w))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return w;
      },
    }),
    (b.Component = B),
    (b.Fragment = s),
    (b.Profiler = f),
    (b.PureComponent = ie),
    (b.StrictMode = u),
    (b.Suspense = k),
    (b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W),
    (b.act = I),
    (b.cloneElement = function (w, T, J) {
      if (w == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            w +
            ".",
        );
      var Z = ee({}, w.props),
        X = w.key,
        re = w.ref,
        ae = w._owner;
      if (T != null) {
        if (
          (T.ref !== void 0 && ((re = T.ref), (ae = he.current)),
          T.key !== void 0 && (X = "" + T.key),
          w.type && w.type.defaultProps)
        )
          var ce = w.type.defaultProps;
        for (pe in T)
          Ee.call(T, pe) &&
            !Ve.hasOwnProperty(pe) &&
            (Z[pe] = T[pe] === void 0 && ce !== void 0 ? ce[pe] : T[pe]);
      }
      var pe = arguments.length - 2;
      if (pe === 1) Z.children = J;
      else if (1 < pe) {
        ce = Array(pe);
        for (var $e = 0; $e < pe; $e++) ce[$e] = arguments[$e + 2];
        Z.children = ce;
      }
      return {
        $$typeof: o,
        type: w.type,
        key: X,
        ref: re,
        props: Z,
        _owner: ae,
      };
    }),
    (b.createContext = function (w) {
      return (
        (w = {
          $$typeof: y,
          _currentValue: w,
          _currentValue2: w,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (w.Provider = { $$typeof: h, _context: w }),
        (w.Consumer = w)
      );
    }),
    (b.createElement = Ae),
    (b.createFactory = function (w) {
      var T = Ae.bind(null, w);
      return ((T.type = w), T);
    }),
    (b.createRef = function () {
      return { current: null };
    }),
    (b.forwardRef = function (w) {
      return { $$typeof: g, render: w };
    }),
    (b.isValidElement = Je),
    (b.lazy = function (w) {
      return { $$typeof: O, _payload: { _status: -1, _result: w }, _init: je };
    }),
    (b.memo = function (w, T) {
      return { $$typeof: C, type: w, compare: T === void 0 ? null : T };
    }),
    (b.startTransition = function (w) {
      var T = D.transition;
      D.transition = {};
      try {
        w();
      } finally {
        D.transition = T;
      }
    }),
    (b.unstable_act = I),
    (b.useCallback = function (w, T) {
      return ye.current.useCallback(w, T);
    }),
    (b.useContext = function (w) {
      return ye.current.useContext(w);
    }),
    (b.useDebugValue = function () {}),
    (b.useDeferredValue = function (w) {
      return ye.current.useDeferredValue(w);
    }),
    (b.useEffect = function (w, T) {
      return ye.current.useEffect(w, T);
    }),
    (b.useId = function () {
      return ye.current.useId();
    }),
    (b.useImperativeHandle = function (w, T, J) {
      return ye.current.useImperativeHandle(w, T, J);
    }),
    (b.useInsertionEffect = function (w, T) {
      return ye.current.useInsertionEffect(w, T);
    }),
    (b.useLayoutEffect = function (w, T) {
      return ye.current.useLayoutEffect(w, T);
    }),
    (b.useMemo = function (w, T) {
      return ye.current.useMemo(w, T);
    }),
    (b.useReducer = function (w, T, J) {
      return ye.current.useReducer(w, T, J);
    }),
    (b.useRef = function (w) {
      return ye.current.useRef(w);
    }),
    (b.useState = function (w) {
      return ye.current.useState(w);
    }),
    (b.useSyncExternalStore = function (w, T, J) {
      return ye.current.useSyncExternalStore(w, T, J);
    }),
    (b.useTransition = function () {
      return ye.current.useTransition();
    }),
    (b.version = "18.3.1"),
    b
  );
}
var Pc;
function Oo() {
  return (Pc || ((Pc = 1), (mo.exports = Th())), mo.exports);
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Rc;
function Ph() {
  if (Rc) return Jr;
  Rc = 1;
  var o = Oo(),
    i = Symbol.for("react.element"),
    s = Symbol.for("react.fragment"),
    u = Object.prototype.hasOwnProperty,
    f = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    h = { key: !0, ref: !0, __self: !0, __source: !0 };
  function y(g, k, C) {
    var O,
      E = {},
      A = null,
      Y = null;
    (C !== void 0 && (A = "" + C),
      k.key !== void 0 && (A = "" + k.key),
      k.ref !== void 0 && (Y = k.ref));
    for (O in k) u.call(k, O) && !h.hasOwnProperty(O) && (E[O] = k[O]);
    if (g && g.defaultProps)
      for (O in ((k = g.defaultProps), k)) E[O] === void 0 && (E[O] = k[O]);
    return {
      $$typeof: i,
      type: g,
      key: A,
      ref: Y,
      props: E,
      _owner: f.current,
    };
  }
  return ((Jr.Fragment = s), (Jr.jsx = y), (Jr.jsxs = y), Jr);
}
var jc;
function Rh() {
  return (jc || ((jc = 1), (po.exports = Ph())), po.exports);
}
var p = Rh(),
  N = Oo();
const ef = bc(N),
  jh = Nh({ __proto__: null, default: ef }, [N]);
var hs = {},
  vo = { exports: {} },
  tt = {},
  yo = { exports: {} },
  go = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Oc;
function Oh() {
  return (
    Oc ||
      ((Oc = 1),
      (function (o) {
        function i(D, W) {
          var I = D.length;
          D.push(W);
          e: for (; 0 < I; ) {
            var w = (I - 1) >>> 1,
              T = D[w];
            if (0 < f(T, W)) ((D[w] = W), (D[I] = T), (I = w));
            else break e;
          }
        }
        function s(D) {
          return D.length === 0 ? null : D[0];
        }
        function u(D) {
          if (D.length === 0) return null;
          var W = D[0],
            I = D.pop();
          if (I !== W) {
            D[0] = I;
            e: for (var w = 0, T = D.length, J = T >>> 1; w < J; ) {
              var Z = 2 * (w + 1) - 1,
                X = D[Z],
                re = Z + 1,
                ae = D[re];
              if (0 > f(X, I))
                re < T && 0 > f(ae, X)
                  ? ((D[w] = ae), (D[re] = I), (w = re))
                  : ((D[w] = X), (D[Z] = I), (w = Z));
              else if (re < T && 0 > f(ae, I))
                ((D[w] = ae), (D[re] = I), (w = re));
              else break e;
            }
          }
          return W;
        }
        function f(D, W) {
          var I = D.sortIndex - W.sortIndex;
          return I !== 0 ? I : D.id - W.id;
        }
        if (
          typeof performance == "object" &&
          typeof performance.now == "function"
        ) {
          var h = performance;
          o.unstable_now = function () {
            return h.now();
          };
        } else {
          var y = Date,
            g = y.now();
          o.unstable_now = function () {
            return y.now() - g;
          };
        }
        var k = [],
          C = [],
          O = 1,
          E = null,
          A = 3,
          Y = !1,
          ee = !1,
          H = !1,
          B = typeof setTimeout == "function" ? setTimeout : null,
          te = typeof clearTimeout == "function" ? clearTimeout : null,
          ie = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function le(D) {
          for (var W = s(C); W !== null; ) {
            if (W.callback === null) u(C);
            else if (W.startTime <= D)
              (u(C), (W.sortIndex = W.expirationTime), i(k, W));
            else break;
            W = s(C);
          }
        }
        function oe(D) {
          if (((H = !1), le(D), !ee))
            if (s(k) !== null) ((ee = !0), je(Ee));
            else {
              var W = s(C);
              W !== null && ye(oe, W.startTime - D);
            }
        }
        function Ee(D, W) {
          ((ee = !1), H && ((H = !1), te(Ae), (Ae = -1)), (Y = !0));
          var I = A;
          try {
            for (
              le(W), E = s(k);
              E !== null && (!(E.expirationTime > W) || (D && !yt()));
            ) {
              var w = E.callback;
              if (typeof w == "function") {
                ((E.callback = null), (A = E.priorityLevel));
                var T = w(E.expirationTime <= W);
                ((W = o.unstable_now()),
                  typeof T == "function"
                    ? (E.callback = T)
                    : E === s(k) && u(k),
                  le(W));
              } else u(k);
              E = s(k);
            }
            if (E !== null) var J = !0;
            else {
              var Z = s(C);
              (Z !== null && ye(oe, Z.startTime - W), (J = !1));
            }
            return J;
          } finally {
            ((E = null), (A = I), (Y = !1));
          }
        }
        var he = !1,
          Ve = null,
          Ae = -1,
          Nt = 5,
          Je = -1;
        function yt() {
          return !(o.unstable_now() - Je < Nt);
        }
        function rt() {
          if (Ve !== null) {
            var D = o.unstable_now();
            Je = D;
            var W = !0;
            try {
              W = Ve(!0, D);
            } finally {
              W ? Be() : ((he = !1), (Ve = null));
            }
          } else he = !1;
        }
        var Be;
        if (typeof ie == "function")
          Be = function () {
            ie(rt);
          };
        else if (typeof MessageChannel < "u") {
          var Me = new MessageChannel(),
            it = Me.port2;
          ((Me.port1.onmessage = rt),
            (Be = function () {
              it.postMessage(null);
            }));
        } else
          Be = function () {
            B(rt, 0);
          };
        function je(D) {
          ((Ve = D), he || ((he = !0), Be()));
        }
        function ye(D, W) {
          Ae = B(function () {
            D(o.unstable_now());
          }, W);
        }
        ((o.unstable_IdlePriority = 5),
          (o.unstable_ImmediatePriority = 1),
          (o.unstable_LowPriority = 4),
          (o.unstable_NormalPriority = 3),
          (o.unstable_Profiling = null),
          (o.unstable_UserBlockingPriority = 2),
          (o.unstable_cancelCallback = function (D) {
            D.callback = null;
          }),
          (o.unstable_continueExecution = function () {
            ee || Y || ((ee = !0), je(Ee));
          }),
          (o.unstable_forceFrameRate = function (D) {
            0 > D || 125 < D
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (Nt = 0 < D ? Math.floor(1e3 / D) : 5);
          }),
          (o.unstable_getCurrentPriorityLevel = function () {
            return A;
          }),
          (o.unstable_getFirstCallbackNode = function () {
            return s(k);
          }),
          (o.unstable_next = function (D) {
            switch (A) {
              case 1:
              case 2:
              case 3:
                var W = 3;
                break;
              default:
                W = A;
            }
            var I = A;
            A = W;
            try {
              return D();
            } finally {
              A = I;
            }
          }),
          (o.unstable_pauseExecution = function () {}),
          (o.unstable_requestPaint = function () {}),
          (o.unstable_runWithPriority = function (D, W) {
            switch (D) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                D = 3;
            }
            var I = A;
            A = D;
            try {
              return W();
            } finally {
              A = I;
            }
          }),
          (o.unstable_scheduleCallback = function (D, W, I) {
            var w = o.unstable_now();
            switch (
              (typeof I == "object" && I !== null
                ? ((I = I.delay),
                  (I = typeof I == "number" && 0 < I ? w + I : w))
                : (I = w),
              D)
            ) {
              case 1:
                var T = -1;
                break;
              case 2:
                T = 250;
                break;
              case 5:
                T = 1073741823;
                break;
              case 4:
                T = 1e4;
                break;
              default:
                T = 5e3;
            }
            return (
              (T = I + T),
              (D = {
                id: O++,
                callback: W,
                priorityLevel: D,
                startTime: I,
                expirationTime: T,
                sortIndex: -1,
              }),
              I > w
                ? ((D.sortIndex = I),
                  i(C, D),
                  s(k) === null &&
                    D === s(C) &&
                    (H ? (te(Ae), (Ae = -1)) : (H = !0), ye(oe, I - w)))
                : ((D.sortIndex = T), i(k, D), ee || Y || ((ee = !0), je(Ee))),
              D
            );
          }),
          (o.unstable_shouldYield = yt),
          (o.unstable_wrapCallback = function (D) {
            var W = A;
            return function () {
              var I = A;
              A = W;
              try {
                return D.apply(this, arguments);
              } finally {
                A = I;
              }
            };
          }));
      })(go)),
    go
  );
}
var Lc;
function Lh() {
  return (Lc || ((Lc = 1), (yo.exports = Oh())), yo.exports);
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ac;
function Ah() {
  if (Ac) return tt;
  Ac = 1;
  var o = Oo(),
    i = Lh();
  function s(e) {
    for (
      var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
        n = 1;
      n < arguments.length;
      n++
    )
      t += "&args[]=" + encodeURIComponent(arguments[n]);
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  var u = new Set(),
    f = {};
  function h(e, t) {
    (y(e, t), y(e + "Capture", t));
  }
  function y(e, t) {
    for (f[e] = t, e = 0; e < t.length; e++) u.add(t[e]);
  }
  var g = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    k = Object.prototype.hasOwnProperty,
    C =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    O = {},
    E = {};
  function A(e) {
    return k.call(E, e)
      ? !0
      : k.call(O, e)
        ? !1
        : C.test(e)
          ? (E[e] = !0)
          : ((O[e] = !0), !1);
  }
  function Y(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return r
          ? !1
          : n !== null
            ? !n.acceptsBooleans
            : ((e = e.toLowerCase().slice(0, 5)),
              e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function ee(e, t, n, r) {
    if (t === null || typeof t > "u" || Y(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null)
      switch (n.type) {
        case 3:
          return !t;
        case 4:
          return t === !1;
        case 5:
          return isNaN(t);
        case 6:
          return isNaN(t) || 1 > t;
      }
    return !1;
  }
  function H(e, t, n, r, l, a, c) {
    ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = r),
      (this.attributeNamespace = l),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = a),
      (this.removeEmptyString = c));
  }
  var B = {};
  ("children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      B[e] = new H(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var t = e[0];
      B[t] = new H(t, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(
      function (e) {
        B[e] = new H(e, 2, !1, e.toLowerCase(), null, !1, !1);
      },
    ),
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (e) {
      B[e] = new H(e, 2, !1, e, null, !1, !1);
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        B[e] = new H(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      B[e] = new H(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      B[e] = new H(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      B[e] = new H(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      B[e] = new H(e, 5, !1, e.toLowerCase(), null, !1, !1);
    }));
  var te = /[\-:]([a-z])/g;
  function ie(e) {
    return e[1].toUpperCase();
  }
  ("accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(te, ie);
      B[t] = new H(t, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(te, ie);
        B[t] = new H(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(te, ie);
      B[t] = new H(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    }),
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      B[e] = new H(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (B.xlinkHref = new H(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1,
    )),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      B[e] = new H(e, 1, !1, e.toLowerCase(), null, !0, !0);
    }));
  function le(e, t, n, r) {
    var l = B.hasOwnProperty(t) ? B[t] : null;
    (l !== null
      ? l.type !== 0
      : r ||
        !(2 < t.length) ||
        (t[0] !== "o" && t[0] !== "O") ||
        (t[1] !== "n" && t[1] !== "N")) &&
      (ee(t, n, l, r) && (n = null),
      r || l === null
        ? A(t) &&
          (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
        : l.mustUseProperty
          ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
          : ((t = l.attributeName),
            (r = l.attributeNamespace),
            n === null
              ? e.removeAttribute(t)
              : ((l = l.type),
                (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
                r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var oe = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    Ee = Symbol.for("react.element"),
    he = Symbol.for("react.portal"),
    Ve = Symbol.for("react.fragment"),
    Ae = Symbol.for("react.strict_mode"),
    Nt = Symbol.for("react.profiler"),
    Je = Symbol.for("react.provider"),
    yt = Symbol.for("react.context"),
    rt = Symbol.for("react.forward_ref"),
    Be = Symbol.for("react.suspense"),
    Me = Symbol.for("react.suspense_list"),
    it = Symbol.for("react.memo"),
    je = Symbol.for("react.lazy"),
    ye = Symbol.for("react.offscreen"),
    D = Symbol.iterator;
  function W(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (D && e[D]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var I = Object.assign,
    w;
  function T(e) {
    if (w === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        w = (t && t[1]) || "";
      }
    return (
      `
` +
      w +
      e
    );
  }
  var J = !1;
  function Z(e, t) {
    if (!e || J) return "";
    J = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t)
        if (
          ((t = function () {
            throw Error();
          }),
          Object.defineProperty(t.prototype, "props", {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == "object" && Reflect.construct)
        ) {
          try {
            Reflect.construct(t, []);
          } catch (_) {
            var r = _;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (_) {
            r = _;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (_) {
          r = _;
        }
        e();
      }
    } catch (_) {
      if (_ && r && typeof _.stack == "string") {
        for (
          var l = _.stack.split(`
`),
            a = r.stack.split(`
`),
            c = l.length - 1,
            d = a.length - 1;
          1 <= c && 0 <= d && l[c] !== a[d];
        )
          d--;
        for (; 1 <= c && 0 <= d; c--, d--)
          if (l[c] !== a[d]) {
            if (c !== 1 || d !== 1)
              do
                if ((c--, d--, 0 > d || l[c] !== a[d])) {
                  var m =
                    `
` + l[c].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      m.includes("<anonymous>") &&
                      (m = m.replace("<anonymous>", e.displayName)),
                    m
                  );
                }
              while (1 <= c && 0 <= d);
            break;
          }
      }
    } finally {
      ((J = !1), (Error.prepareStackTrace = n));
    }
    return (e = e ? e.displayName || e.name : "") ? T(e) : "";
  }
  function X(e) {
    switch (e.tag) {
      case 5:
        return T(e.type);
      case 16:
        return T("Lazy");
      case 13:
        return T("Suspense");
      case 19:
        return T("SuspenseList");
      case 0:
      case 2:
      case 15:
        return ((e = Z(e.type, !1)), e);
      case 11:
        return ((e = Z(e.type.render, !1)), e);
      case 1:
        return ((e = Z(e.type, !0)), e);
      default:
        return "";
    }
  }
  function re(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case Ve:
        return "Fragment";
      case he:
        return "Portal";
      case Nt:
        return "Profiler";
      case Ae:
        return "StrictMode";
      case Be:
        return "Suspense";
      case Me:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case yt:
          return (e.displayName || "Context") + ".Consumer";
        case Je:
          return (e._context.displayName || "Context") + ".Provider";
        case rt:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case it:
          return (
            (t = e.displayName || null),
            t !== null ? t : re(e.type) || "Memo"
          );
        case je:
          ((t = e._payload), (e = e._init));
          try {
            return re(e(t));
          } catch {}
      }
    return null;
  }
  function ae(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t.displayName || "Context") + ".Consumer";
      case 10:
        return (t._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return (
          (e = t.render),
          (e = e.displayName || e.name || ""),
          t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
        );
      case 7:
        return "Fragment";
      case 5:
        return t;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return re(t);
      case 8:
        return t === Ae ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == "function") return t.displayName || t.name || null;
        if (typeof t == "string") return t;
    }
    return null;
  }
  function ce(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function pe(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function $e(e) {
    var t = pe(e) ? "checked" : "value",
      n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      r = "" + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof n < "u" &&
      typeof n.get == "function" &&
      typeof n.set == "function"
    ) {
      var l = n.get,
        a = n.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return l.call(this);
          },
          set: function (c) {
            ((r = "" + c), a.call(this, c));
          },
        }),
        Object.defineProperty(e, t, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return r;
          },
          setValue: function (c) {
            r = "" + c;
          },
          stopTracking: function () {
            ((e._valueTracker = null), delete e[t]);
          },
        }
      );
    }
  }
  function jn(e) {
    e._valueTracker || (e._valueTracker = $e(e));
  }
  function ni(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      r = "";
    return (
      e && (r = pe(e) ? (e.checked ? "true" : "false") : e.value),
      (e = r),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function On(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function ar(e, t) {
    var n = t.checked;
    return I({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked,
    });
  }
  function ri(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
      r = t.checked != null ? t.checked : t.defaultChecked;
    ((n = ce(t.value != null ? t.value : n)),
      (e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled:
          t.type === "checkbox" || t.type === "radio"
            ? t.checked != null
            : t.value != null,
      }));
  }
  function ii(e, t) {
    ((t = t.checked), t != null && le(e, "checked", t, !1));
  }
  function ur(e, t) {
    ii(e, t);
    var n = ce(t.value),
      r = t.type;
    if (n != null)
      r === "number"
        ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
        : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    (t.hasOwnProperty("value")
      ? Ln(e, t.type, n)
      : t.hasOwnProperty("defaultValue") && Ln(e, t.type, ce(t.defaultValue)),
      t.checked == null &&
        t.defaultChecked != null &&
        (e.defaultChecked = !!t.defaultChecked));
  }
  function cr(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (
        !(
          (r !== "submit" && r !== "reset") ||
          (t.value !== void 0 && t.value !== null)
        )
      )
        return;
      ((t = "" + e._wrapperState.initialValue),
        n || t === e.value || (e.value = t),
        (e.defaultValue = t));
    }
    ((n = e.name),
      n !== "" && (e.name = ""),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      n !== "" && (e.name = n));
  }
  function Ln(e, t, n) {
    (t !== "number" || On(e.ownerDocument) !== e) &&
      (n == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var Ht = Array.isArray;
  function z(e, t, n, r) {
    if (((e = e.options), t)) {
      t = {};
      for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
      for (n = 0; n < e.length; n++)
        ((l = t.hasOwnProperty("$" + e[n].value)),
          e[n].selected !== l && (e[n].selected = l),
          l && r && (e[n].defaultSelected = !0));
    } else {
      for (n = "" + ce(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
          ((e[l].selected = !0), r && (e[l].defaultSelected = !0));
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function G(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(s(91));
    return I({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function de(e, t) {
    var n = t.value;
    if (n == null) {
      if (((n = t.children), (t = t.defaultValue), n != null)) {
        if (t != null) throw Error(s(92));
        if (Ht(n)) {
          if (1 < n.length) throw Error(s(93));
          n = n[0];
        }
        t = n;
      }
      (t == null && (t = ""), (n = t));
    }
    e._wrapperState = { initialValue: ce(n) };
  }
  function me(e, t) {
    var n = ce(t.value),
      r = ce(t.defaultValue);
    (n != null &&
      ((n = "" + n),
      n !== e.value && (e.value = n),
      t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
      r != null && (e.defaultValue = "" + r));
  }
  function ut(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
      t !== "" &&
      t !== null &&
      (e.value = t);
  }
  function Tt(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function An(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? Tt(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
        ? "http://www.w3.org/1999/xhtml"
        : e;
  }
  var si,
    Vo = (function (e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (t, n, r, l) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, n, r, l);
            });
          }
        : e;
    })(function (e, t) {
      if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
        e.innerHTML = t;
      else {
        for (
          si = si || document.createElement("div"),
            si.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = si.firstChild;
          e.firstChild;
        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    });
  function fr(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var dr = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    },
    jf = ["Webkit", "ms", "Moz", "O"];
  Object.keys(dr).forEach(function (e) {
    jf.forEach(function (t) {
      ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (dr[t] = dr[e]));
    });
  });
  function $o(e, t, n) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : n || typeof t != "number" || t === 0 || (dr.hasOwnProperty(e) && dr[e])
        ? ("" + t).trim()
        : t + "px";
  }
  function Wo(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = n.indexOf("--") === 0,
          l = $o(n, t[n], r);
        (n === "float" && (n = "cssFloat"),
          r ? e.setProperty(n, l) : (e[n] = l));
      }
  }
  var Of = I(
    { menuitem: !0 },
    {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    },
  );
  function Cs(e, t) {
    if (t) {
      if (Of[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(s(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(s(60));
        if (
          typeof t.dangerouslySetInnerHTML != "object" ||
          !("__html" in t.dangerouslySetInnerHTML)
        )
          throw Error(s(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(s(62));
    }
  }
  function Ns(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Ts = null;
  function Ps(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Rs = null,
    Bn = null,
    zn = null;
  function Ho(e) {
    if ((e = Br(e))) {
      if (typeof Rs != "function") throw Error(s(280));
      var t = e.stateNode;
      t && ((t = Pi(t)), Rs(e.stateNode, e.type, t));
    }
  }
  function Qo(e) {
    Bn ? (zn ? zn.push(e) : (zn = [e])) : (Bn = e);
  }
  function qo() {
    if (Bn) {
      var e = Bn,
        t = zn;
      if (((zn = Bn = null), Ho(e), t)) for (e = 0; e < t.length; e++) Ho(t[e]);
    }
  }
  function Ko(e, t) {
    return e(t);
  }
  function Yo() {}
  var js = !1;
  function Jo(e, t, n) {
    if (js) return e(t, n);
    js = !0;
    try {
      return Ko(e, t, n);
    } finally {
      ((js = !1), (Bn !== null || zn !== null) && (Yo(), qo()));
    }
  }
  function hr(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = Pi(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        ((r = !r.disabled) ||
          ((e = e.type),
          (r = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !r));
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(s(231, t, typeof n));
    return n;
  }
  var Os = !1;
  if (g)
    try {
      var pr = {};
      (Object.defineProperty(pr, "passive", {
        get: function () {
          Os = !0;
        },
      }),
        window.addEventListener("test", pr, pr),
        window.removeEventListener("test", pr, pr));
    } catch {
      Os = !1;
    }
  function Lf(e, t, n, r, l, a, c, d, m) {
    var _ = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, _);
    } catch (R) {
      this.onError(R);
    }
  }
  var mr = !1,
    li = null,
    oi = !1,
    Ls = null,
    Af = {
      onError: function (e) {
        ((mr = !0), (li = e));
      },
    };
  function Bf(e, t, n, r, l, a, c, d, m) {
    ((mr = !1), (li = null), Lf.apply(Af, arguments));
  }
  function zf(e, t, n, r, l, a, c, d, m) {
    if ((Bf.apply(this, arguments), mr)) {
      if (mr) {
        var _ = li;
        ((mr = !1), (li = null));
      } else throw Error(s(198));
      oi || ((oi = !0), (Ls = _));
    }
  }
  function mn(e) {
    var t = e,
      n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do ((t = e), (t.flags & 4098) !== 0 && (n = t.return), (e = t.return));
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function Xo(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function Go(e) {
    if (mn(e) !== e) throw Error(s(188));
  }
  function Df(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = mn(e)), t === null)) throw Error(s(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var l = n.return;
      if (l === null) break;
      var a = l.alternate;
      if (a === null) {
        if (((r = l.return), r !== null)) {
          n = r;
          continue;
        }
        break;
      }
      if (l.child === a.child) {
        for (a = l.child; a; ) {
          if (a === n) return (Go(l), e);
          if (a === r) return (Go(l), t);
          a = a.sibling;
        }
        throw Error(s(188));
      }
      if (n.return !== r.return) ((n = l), (r = a));
      else {
        for (var c = !1, d = l.child; d; ) {
          if (d === n) {
            ((c = !0), (n = l), (r = a));
            break;
          }
          if (d === r) {
            ((c = !0), (r = l), (n = a));
            break;
          }
          d = d.sibling;
        }
        if (!c) {
          for (d = a.child; d; ) {
            if (d === n) {
              ((c = !0), (n = a), (r = l));
              break;
            }
            if (d === r) {
              ((c = !0), (r = a), (n = l));
              break;
            }
            d = d.sibling;
          }
          if (!c) throw Error(s(189));
        }
      }
      if (n.alternate !== r) throw Error(s(190));
    }
    if (n.tag !== 3) throw Error(s(188));
    return n.stateNode.current === n ? e : t;
  }
  function Zo(e) {
    return ((e = Df(e)), e !== null ? bo(e) : null);
  }
  function bo(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = bo(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var ea = i.unstable_scheduleCallback,
    ta = i.unstable_cancelCallback,
    If = i.unstable_shouldYield,
    Mf = i.unstable_requestPaint,
    Ce = i.unstable_now,
    Uf = i.unstable_getCurrentPriorityLevel,
    As = i.unstable_ImmediatePriority,
    na = i.unstable_UserBlockingPriority,
    ai = i.unstable_NormalPriority,
    Ff = i.unstable_LowPriority,
    ra = i.unstable_IdlePriority,
    ui = null,
    Pt = null;
  function Vf(e) {
    if (Pt && typeof Pt.onCommitFiberRoot == "function")
      try {
        Pt.onCommitFiberRoot(ui, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var gt = Math.clz32 ? Math.clz32 : Hf,
    $f = Math.log,
    Wf = Math.LN2;
  function Hf(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - (($f(e) / Wf) | 0)) | 0);
  }
  var ci = 64,
    fi = 4194304;
  function vr(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function di(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
      l = e.suspendedLanes,
      a = e.pingedLanes,
      c = n & 268435455;
    if (c !== 0) {
      var d = c & ~l;
      d !== 0 ? (r = vr(d)) : ((a &= c), a !== 0 && (r = vr(a)));
    } else ((c = n & ~l), c !== 0 ? (r = vr(c)) : a !== 0 && (r = vr(a)));
    if (r === 0) return 0;
    if (
      t !== 0 &&
      t !== r &&
      (t & l) === 0 &&
      ((l = r & -r), (a = t & -t), l >= a || (l === 16 && (a & 4194240) !== 0))
    )
      return t;
    if (((r & 4) !== 0 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= r; 0 < t; )
        ((n = 31 - gt(t)), (l = 1 << n), (r |= e[n]), (t &= ~l));
    return r;
  }
  function Qf(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function qf(e, t) {
    for (
      var n = e.suspendedLanes,
        r = e.pingedLanes,
        l = e.expirationTimes,
        a = e.pendingLanes;
      0 < a;
    ) {
      var c = 31 - gt(a),
        d = 1 << c,
        m = l[c];
      (m === -1
        ? ((d & n) === 0 || (d & r) !== 0) && (l[c] = Qf(d, t))
        : m <= t && (e.expiredLanes |= d),
        (a &= ~d));
    }
  }
  function Bs(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
  }
  function ia() {
    var e = ci;
    return ((ci <<= 1), (ci & 4194240) === 0 && (ci = 64), e);
  }
  function zs(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function yr(e, t, n) {
    ((e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - gt(t)),
      (e[t] = n));
  }
  function Kf(e, t) {
    var n = e.pendingLanes & ~t;
    ((e.pendingLanes = t),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= t),
      (e.mutableReadLanes &= t),
      (e.entangledLanes &= t),
      (t = e.entanglements));
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var l = 31 - gt(n),
        a = 1 << l;
      ((t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~a));
    }
  }
  function Ds(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var r = 31 - gt(n),
        l = 1 << r;
      ((l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l));
    }
  }
  var fe = 0;
  function sa(e) {
    return (
      (e &= -e),
      1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1
    );
  }
  var la,
    Is,
    oa,
    aa,
    ua,
    Ms = !1,
    hi = [],
    Qt = null,
    qt = null,
    Kt = null,
    gr = new Map(),
    wr = new Map(),
    Yt = [],
    Yf =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " ",
      );
  function ca(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Qt = null;
        break;
      case "dragenter":
      case "dragleave":
        qt = null;
        break;
      case "mouseover":
      case "mouseout":
        Kt = null;
        break;
      case "pointerover":
      case "pointerout":
        gr.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        wr.delete(t.pointerId);
    }
  }
  function kr(e, t, n, r, l, a) {
    return e === null || e.nativeEvent !== a
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: r,
          nativeEvent: a,
          targetContainers: [l],
        }),
        t !== null && ((t = Br(t)), t !== null && Is(t)),
        e)
      : ((e.eventSystemFlags |= r),
        (t = e.targetContainers),
        l !== null && t.indexOf(l) === -1 && t.push(l),
        e);
  }
  function Jf(e, t, n, r, l) {
    switch (t) {
      case "focusin":
        return ((Qt = kr(Qt, e, t, n, r, l)), !0);
      case "dragenter":
        return ((qt = kr(qt, e, t, n, r, l)), !0);
      case "mouseover":
        return ((Kt = kr(Kt, e, t, n, r, l)), !0);
      case "pointerover":
        var a = l.pointerId;
        return (gr.set(a, kr(gr.get(a) || null, e, t, n, r, l)), !0);
      case "gotpointercapture":
        return (
          (a = l.pointerId),
          wr.set(a, kr(wr.get(a) || null, e, t, n, r, l)),
          !0
        );
    }
    return !1;
  }
  function fa(e) {
    var t = vn(e.target);
    if (t !== null) {
      var n = mn(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = Xo(n)), t !== null)) {
            ((e.blockedOn = t),
              ua(e.priority, function () {
                oa(n);
              }));
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function pi(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Fs(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        ((Ts = r), n.target.dispatchEvent(r), (Ts = null));
      } else return ((t = Br(n)), t !== null && Is(t), (e.blockedOn = n), !1);
      t.shift();
    }
    return !0;
  }
  function da(e, t, n) {
    pi(e) && n.delete(t);
  }
  function Xf() {
    ((Ms = !1),
      Qt !== null && pi(Qt) && (Qt = null),
      qt !== null && pi(qt) && (qt = null),
      Kt !== null && pi(Kt) && (Kt = null),
      gr.forEach(da),
      wr.forEach(da));
  }
  function Sr(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Ms ||
        ((Ms = !0),
        i.unstable_scheduleCallback(i.unstable_NormalPriority, Xf)));
  }
  function xr(e) {
    function t(l) {
      return Sr(l, e);
    }
    if (0 < hi.length) {
      Sr(hi[0], e);
      for (var n = 1; n < hi.length; n++) {
        var r = hi[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (
      Qt !== null && Sr(Qt, e),
        qt !== null && Sr(qt, e),
        Kt !== null && Sr(Kt, e),
        gr.forEach(t),
        wr.forEach(t),
        n = 0;
      n < Yt.length;
      n++
    )
      ((r = Yt[n]), r.blockedOn === e && (r.blockedOn = null));
    for (; 0 < Yt.length && ((n = Yt[0]), n.blockedOn === null); )
      (fa(n), n.blockedOn === null && Yt.shift());
  }
  var Dn = oe.ReactCurrentBatchConfig,
    mi = !0;
  function Gf(e, t, n, r) {
    var l = fe,
      a = Dn.transition;
    Dn.transition = null;
    try {
      ((fe = 1), Us(e, t, n, r));
    } finally {
      ((fe = l), (Dn.transition = a));
    }
  }
  function Zf(e, t, n, r) {
    var l = fe,
      a = Dn.transition;
    Dn.transition = null;
    try {
      ((fe = 4), Us(e, t, n, r));
    } finally {
      ((fe = l), (Dn.transition = a));
    }
  }
  function Us(e, t, n, r) {
    if (mi) {
      var l = Fs(e, t, n, r);
      if (l === null) (rl(e, t, r, vi, n), ca(e, r));
      else if (Jf(l, e, t, n, r)) r.stopPropagation();
      else if ((ca(e, r), t & 4 && -1 < Yf.indexOf(e))) {
        for (; l !== null; ) {
          var a = Br(l);
          if (
            (a !== null && la(a),
            (a = Fs(e, t, n, r)),
            a === null && rl(e, t, r, vi, n),
            a === l)
          )
            break;
          l = a;
        }
        l !== null && r.stopPropagation();
      } else rl(e, t, r, null, n);
    }
  }
  var vi = null;
  function Fs(e, t, n, r) {
    if (((vi = null), (e = Ps(r)), (e = vn(e)), e !== null))
      if (((t = mn(e)), t === null)) e = null;
      else if (((n = t.tag), n === 13)) {
        if (((e = Xo(t)), e !== null)) return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return ((vi = e), null);
  }
  function ha(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (Uf()) {
          case As:
            return 1;
          case na:
            return 4;
          case ai:
          case Ff:
            return 16;
          case ra:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Jt = null,
    Vs = null,
    yi = null;
  function pa() {
    if (yi) return yi;
    var e,
      t = Vs,
      n = t.length,
      r,
      l = "value" in Jt ? Jt.value : Jt.textContent,
      a = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++);
    var c = n - e;
    for (r = 1; r <= c && t[n - r] === l[a - r]; r++);
    return (yi = l.slice(e, 1 < r ? 1 - r : void 0));
  }
  function gi(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function wi() {
    return !0;
  }
  function ma() {
    return !1;
  }
  function st(e) {
    function t(n, r, l, a, c) {
      ((this._reactName = n),
        (this._targetInst = l),
        (this.type = r),
        (this.nativeEvent = a),
        (this.target = c),
        (this.currentTarget = null));
      for (var d in e)
        e.hasOwnProperty(d) && ((n = e[d]), (this[d] = n ? n(a) : a[d]));
      return (
        (this.isDefaultPrevented = (
          a.defaultPrevented != null ? a.defaultPrevented : a.returnValue === !1
        )
          ? wi
          : ma),
        (this.isPropagationStopped = ma),
        this
      );
    }
    return (
      I(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = wi));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = wi));
        },
        persist: function () {},
        isPersistent: wi,
      }),
      t
    );
  }
  var In = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    $s = st(In),
    _r = I({}, In, { view: 0, detail: 0 }),
    bf = st(_r),
    Ws,
    Hs,
    Er,
    ki = I({}, _r, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: qs,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== Er &&
              (Er && e.type === "mousemove"
                ? ((Ws = e.screenX - Er.screenX), (Hs = e.screenY - Er.screenY))
                : (Hs = Ws = 0),
              (Er = e)),
            Ws);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : Hs;
      },
    }),
    va = st(ki),
    ed = I({}, ki, { dataTransfer: 0 }),
    td = st(ed),
    nd = I({}, _r, { relatedTarget: 0 }),
    Qs = st(nd),
    rd = I({}, In, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    id = st(rd),
    sd = I({}, In, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    ld = st(sd),
    od = I({}, In, { data: 0 }),
    ya = st(od),
    ad = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    ud = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    cd = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function fd(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = cd[e])
        ? !!t[e]
        : !1;
  }
  function qs() {
    return fd;
  }
  var dd = I({}, _r, {
      key: function (e) {
        if (e.key) {
          var t = ad[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = gi(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
            ? ud[e.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: qs,
      charCode: function (e) {
        return e.type === "keypress" ? gi(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? gi(e)
          : e.type === "keydown" || e.type === "keyup"
            ? e.keyCode
            : 0;
      },
    }),
    hd = st(dd),
    pd = I({}, ki, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    ga = st(pd),
    md = I({}, _r, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: qs,
    }),
    vd = st(md),
    yd = I({}, In, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    gd = st(yd),
    wd = I({}, ki, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
            ? -e.wheelDeltaX
            : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
            ? -e.wheelDeltaY
            : "wheelDelta" in e
              ? -e.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    kd = st(wd),
    Sd = [9, 13, 27, 32],
    Ks = g && "CompositionEvent" in window,
    Cr = null;
  g && "documentMode" in document && (Cr = document.documentMode);
  var xd = g && "TextEvent" in window && !Cr,
    wa = g && (!Ks || (Cr && 8 < Cr && 11 >= Cr)),
    ka = " ",
    Sa = !1;
  function xa(e, t) {
    switch (e) {
      case "keyup":
        return Sd.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function _a(e) {
    return (
      (e = e.detail),
      typeof e == "object" && "data" in e ? e.data : null
    );
  }
  var Mn = !1;
  function _d(e, t) {
    switch (e) {
      case "compositionend":
        return _a(t);
      case "keypress":
        return t.which !== 32 ? null : ((Sa = !0), ka);
      case "textInput":
        return ((e = t.data), e === ka && Sa ? null : e);
      default:
        return null;
    }
  }
  function Ed(e, t) {
    if (Mn)
      return e === "compositionend" || (!Ks && xa(e, t))
        ? ((e = pa()), (yi = Vs = Jt = null), (Mn = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return wa && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Cd = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Ea(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Cd[e.type] : t === "textarea";
  }
  function Ca(e, t, n, r) {
    (Qo(r),
      (t = Ci(t, "onChange")),
      0 < t.length &&
        ((n = new $s("onChange", "change", null, n, r)),
        e.push({ event: n, listeners: t })));
  }
  var Nr = null,
    Tr = null;
  function Nd(e) {
    Wa(e, 0);
  }
  function Si(e) {
    var t = Wn(e);
    if (ni(t)) return e;
  }
  function Td(e, t) {
    if (e === "change") return t;
  }
  var Na = !1;
  if (g) {
    var Ys;
    if (g) {
      var Js = "oninput" in document;
      if (!Js) {
        var Ta = document.createElement("div");
        (Ta.setAttribute("oninput", "return;"),
          (Js = typeof Ta.oninput == "function"));
      }
      Ys = Js;
    } else Ys = !1;
    Na = Ys && (!document.documentMode || 9 < document.documentMode);
  }
  function Pa() {
    Nr && (Nr.detachEvent("onpropertychange", Ra), (Tr = Nr = null));
  }
  function Ra(e) {
    if (e.propertyName === "value" && Si(Tr)) {
      var t = [];
      (Ca(t, Tr, e, Ps(e)), Jo(Nd, t));
    }
  }
  function Pd(e, t, n) {
    e === "focusin"
      ? (Pa(), (Nr = t), (Tr = n), Nr.attachEvent("onpropertychange", Ra))
      : e === "focusout" && Pa();
  }
  function Rd(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Si(Tr);
  }
  function jd(e, t) {
    if (e === "click") return Si(t);
  }
  function Od(e, t) {
    if (e === "input" || e === "change") return Si(t);
  }
  function Ld(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var wt = typeof Object.is == "function" ? Object.is : Ld;
  function Pr(e, t) {
    if (wt(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var n = Object.keys(e),
      r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var l = n[r];
      if (!k.call(t, l) || !wt(e[l], t[l])) return !1;
    }
    return !0;
  }
  function ja(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Oa(e, t) {
    var n = ja(e);
    e = 0;
    for (var r; n; ) {
      if (n.nodeType === 3) {
        if (((r = e + n.textContent.length), e <= t && r >= t))
          return { node: n, offset: t - e };
        e = r;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = ja(n);
    }
  }
  function La(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? La(e, t.parentNode)
            : "contains" in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function Aa() {
    for (var e = window, t = On(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = On(e.document);
    }
    return t;
  }
  function Xs(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  function Ad(e) {
    var t = Aa(),
      n = e.focusedElem,
      r = e.selectionRange;
    if (
      t !== n &&
      n &&
      n.ownerDocument &&
      La(n.ownerDocument.documentElement, n)
    ) {
      if (r !== null && Xs(n)) {
        if (
          ((t = r.start),
          (e = r.end),
          e === void 0 && (e = t),
          "selectionStart" in n)
        )
          ((n.selectionStart = t),
            (n.selectionEnd = Math.min(e, n.value.length)));
        else if (
          ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
          e.getSelection)
        ) {
          e = e.getSelection();
          var l = n.textContent.length,
            a = Math.min(r.start, l);
          ((r = r.end === void 0 ? a : Math.min(r.end, l)),
            !e.extend && a > r && ((l = r), (r = a), (a = l)),
            (l = Oa(n, a)));
          var c = Oa(n, r);
          l &&
            c &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== l.node ||
              e.anchorOffset !== l.offset ||
              e.focusNode !== c.node ||
              e.focusOffset !== c.offset) &&
            ((t = t.createRange()),
            t.setStart(l.node, l.offset),
            e.removeAllRanges(),
            a > r
              ? (e.addRange(t), e.extend(c.node, c.offset))
              : (t.setEnd(c.node, c.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; (e = e.parentNode); )
        e.nodeType === 1 &&
          t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
        ((e = t[n]),
          (e.element.scrollLeft = e.left),
          (e.element.scrollTop = e.top));
    }
  }
  var Bd = g && "documentMode" in document && 11 >= document.documentMode,
    Un = null,
    Gs = null,
    Rr = null,
    Zs = !1;
  function Ba(e, t, n) {
    var r =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Zs ||
      Un == null ||
      Un !== On(r) ||
      ((r = Un),
      "selectionStart" in r && Xs(r)
        ? (r = { start: r.selectionStart, end: r.selectionEnd })
        : ((r = (
            (r.ownerDocument && r.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset,
          })),
      (Rr && Pr(Rr, r)) ||
        ((Rr = r),
        (r = Ci(Gs, "onSelect")),
        0 < r.length &&
          ((t = new $s("onSelect", "select", null, t, n)),
          e.push({ event: t, listeners: r }),
          (t.target = Un))));
  }
  function xi(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n["Webkit" + e] = "webkit" + t),
      (n["Moz" + e] = "moz" + t),
      n
    );
  }
  var Fn = {
      animationend: xi("Animation", "AnimationEnd"),
      animationiteration: xi("Animation", "AnimationIteration"),
      animationstart: xi("Animation", "AnimationStart"),
      transitionend: xi("Transition", "TransitionEnd"),
    },
    bs = {},
    za = {};
  g &&
    ((za = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Fn.animationend.animation,
      delete Fn.animationiteration.animation,
      delete Fn.animationstart.animation),
    "TransitionEvent" in window || delete Fn.transitionend.transition);
  function _i(e) {
    if (bs[e]) return bs[e];
    if (!Fn[e]) return e;
    var t = Fn[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in za) return (bs[e] = t[n]);
    return e;
  }
  var Da = _i("animationend"),
    Ia = _i("animationiteration"),
    Ma = _i("animationstart"),
    Ua = _i("transitionend"),
    Fa = new Map(),
    Va =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  function Xt(e, t) {
    (Fa.set(e, t), h(t, [e]));
  }
  for (var el = 0; el < Va.length; el++) {
    var tl = Va[el],
      zd = tl.toLowerCase(),
      Dd = tl[0].toUpperCase() + tl.slice(1);
    Xt(zd, "on" + Dd);
  }
  (Xt(Da, "onAnimationEnd"),
    Xt(Ia, "onAnimationIteration"),
    Xt(Ma, "onAnimationStart"),
    Xt("dblclick", "onDoubleClick"),
    Xt("focusin", "onFocus"),
    Xt("focusout", "onBlur"),
    Xt(Ua, "onTransitionEnd"),
    y("onMouseEnter", ["mouseout", "mouseover"]),
    y("onMouseLeave", ["mouseout", "mouseover"]),
    y("onPointerEnter", ["pointerout", "pointerover"]),
    y("onPointerLeave", ["pointerout", "pointerover"]),
    h(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    h(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    h("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    h(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    h(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    h(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ));
  var jr =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    Id = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(jr),
    );
  function $a(e, t, n) {
    var r = e.type || "unknown-event";
    ((e.currentTarget = n), zf(r, t, void 0, e), (e.currentTarget = null));
  }
  function Wa(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n],
        l = r.event;
      r = r.listeners;
      e: {
        var a = void 0;
        if (t)
          for (var c = r.length - 1; 0 <= c; c--) {
            var d = r[c],
              m = d.instance,
              _ = d.currentTarget;
            if (((d = d.listener), m !== a && l.isPropagationStopped()))
              break e;
            ($a(l, d, _), (a = m));
          }
        else
          for (c = 0; c < r.length; c++) {
            if (
              ((d = r[c]),
              (m = d.instance),
              (_ = d.currentTarget),
              (d = d.listener),
              m !== a && l.isPropagationStopped())
            )
              break e;
            ($a(l, d, _), (a = m));
          }
      }
    }
    if (oi) throw ((e = Ls), (oi = !1), (Ls = null), e);
  }
  function ge(e, t) {
    var n = t[ul];
    n === void 0 && (n = t[ul] = new Set());
    var r = e + "__bubble";
    n.has(r) || (Ha(t, e, 2, !1), n.add(r));
  }
  function nl(e, t, n) {
    var r = 0;
    (t && (r |= 4), Ha(n, e, r, t));
  }
  var Ei = "_reactListening" + Math.random().toString(36).slice(2);
  function Or(e) {
    if (!e[Ei]) {
      ((e[Ei] = !0),
        u.forEach(function (n) {
          n !== "selectionchange" && (Id.has(n) || nl(n, !1, e), nl(n, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Ei] || ((t[Ei] = !0), nl("selectionchange", !1, t));
    }
  }
  function Ha(e, t, n, r) {
    switch (ha(t)) {
      case 1:
        var l = Gf;
        break;
      case 4:
        l = Zf;
        break;
      default:
        l = Us;
    }
    ((n = l.bind(null, t, n, e)),
      (l = void 0),
      !Os ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (l = !0),
      r
        ? l !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: l })
          : e.addEventListener(t, n, !0)
        : l !== void 0
          ? e.addEventListener(t, n, { passive: l })
          : e.addEventListener(t, n, !1));
  }
  function rl(e, t, n, r, l) {
    var a = r;
    if ((t & 1) === 0 && (t & 2) === 0 && r !== null)
      e: for (;;) {
        if (r === null) return;
        var c = r.tag;
        if (c === 3 || c === 4) {
          var d = r.stateNode.containerInfo;
          if (d === l || (d.nodeType === 8 && d.parentNode === l)) break;
          if (c === 4)
            for (c = r.return; c !== null; ) {
              var m = c.tag;
              if (
                (m === 3 || m === 4) &&
                ((m = c.stateNode.containerInfo),
                m === l || (m.nodeType === 8 && m.parentNode === l))
              )
                return;
              c = c.return;
            }
          for (; d !== null; ) {
            if (((c = vn(d)), c === null)) return;
            if (((m = c.tag), m === 5 || m === 6)) {
              r = a = c;
              continue e;
            }
            d = d.parentNode;
          }
        }
        r = r.return;
      }
    Jo(function () {
      var _ = a,
        R = Ps(n),
        j = [];
      e: {
        var P = Fa.get(e);
        if (P !== void 0) {
          var M = $s,
            F = e;
          switch (e) {
            case "keypress":
              if (gi(n) === 0) break e;
            case "keydown":
            case "keyup":
              M = hd;
              break;
            case "focusin":
              ((F = "focus"), (M = Qs));
              break;
            case "focusout":
              ((F = "blur"), (M = Qs));
              break;
            case "beforeblur":
            case "afterblur":
              M = Qs;
              break;
            case "click":
              if (n.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              M = va;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              M = td;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              M = vd;
              break;
            case Da:
            case Ia:
            case Ma:
              M = id;
              break;
            case Ua:
              M = gd;
              break;
            case "scroll":
              M = bf;
              break;
            case "wheel":
              M = kd;
              break;
            case "copy":
            case "cut":
            case "paste":
              M = ld;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              M = ga;
          }
          var V = (t & 4) !== 0,
            Ne = !V && e === "scroll",
            S = V ? (P !== null ? P + "Capture" : null) : P;
          V = [];
          for (var v = _, x; v !== null; ) {
            x = v;
            var L = x.stateNode;
            if (
              (x.tag === 5 &&
                L !== null &&
                ((x = L),
                S !== null &&
                  ((L = hr(v, S)), L != null && V.push(Lr(v, L, x)))),
              Ne)
            )
              break;
            v = v.return;
          }
          0 < V.length &&
            ((P = new M(P, F, null, n, R)), j.push({ event: P, listeners: V }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((P = e === "mouseover" || e === "pointerover"),
            (M = e === "mouseout" || e === "pointerout"),
            P &&
              n !== Ts &&
              (F = n.relatedTarget || n.fromElement) &&
              (vn(F) || F[zt]))
          )
            break e;
          if (
            (M || P) &&
            ((P =
              R.window === R
                ? R
                : (P = R.ownerDocument)
                  ? P.defaultView || P.parentWindow
                  : window),
            M
              ? ((F = n.relatedTarget || n.toElement),
                (M = _),
                (F = F ? vn(F) : null),
                F !== null &&
                  ((Ne = mn(F)), F !== Ne || (F.tag !== 5 && F.tag !== 6)) &&
                  (F = null))
              : ((M = null), (F = _)),
            M !== F)
          ) {
            if (
              ((V = va),
              (L = "onMouseLeave"),
              (S = "onMouseEnter"),
              (v = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((V = ga),
                (L = "onPointerLeave"),
                (S = "onPointerEnter"),
                (v = "pointer")),
              (Ne = M == null ? P : Wn(M)),
              (x = F == null ? P : Wn(F)),
              (P = new V(L, v + "leave", M, n, R)),
              (P.target = Ne),
              (P.relatedTarget = x),
              (L = null),
              vn(R) === _ &&
                ((V = new V(S, v + "enter", F, n, R)),
                (V.target = x),
                (V.relatedTarget = Ne),
                (L = V)),
              (Ne = L),
              M && F)
            )
              t: {
                for (V = M, S = F, v = 0, x = V; x; x = Vn(x)) v++;
                for (x = 0, L = S; L; L = Vn(L)) x++;
                for (; 0 < v - x; ) ((V = Vn(V)), v--);
                for (; 0 < x - v; ) ((S = Vn(S)), x--);
                for (; v--; ) {
                  if (V === S || (S !== null && V === S.alternate)) break t;
                  ((V = Vn(V)), (S = Vn(S)));
                }
                V = null;
              }
            else V = null;
            (M !== null && Qa(j, P, M, V, !1),
              F !== null && Ne !== null && Qa(j, Ne, F, V, !0));
          }
        }
        e: {
          if (
            ((P = _ ? Wn(_) : window),
            (M = P.nodeName && P.nodeName.toLowerCase()),
            M === "select" || (M === "input" && P.type === "file"))
          )
            var $ = Td;
          else if (Ea(P))
            if (Na) $ = Od;
            else {
              $ = Rd;
              var Q = Pd;
            }
          else
            (M = P.nodeName) &&
              M.toLowerCase() === "input" &&
              (P.type === "checkbox" || P.type === "radio") &&
              ($ = jd);
          if ($ && ($ = $(e, _))) {
            Ca(j, $, n, R);
            break e;
          }
          (Q && Q(e, P, _),
            e === "focusout" &&
              (Q = P._wrapperState) &&
              Q.controlled &&
              P.type === "number" &&
              Ln(P, "number", P.value));
        }
        switch (((Q = _ ? Wn(_) : window), e)) {
          case "focusin":
            (Ea(Q) || Q.contentEditable === "true") &&
              ((Un = Q), (Gs = _), (Rr = null));
            break;
          case "focusout":
            Rr = Gs = Un = null;
            break;
          case "mousedown":
            Zs = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((Zs = !1), Ba(j, n, R));
            break;
          case "selectionchange":
            if (Bd) break;
          case "keydown":
          case "keyup":
            Ba(j, n, R);
        }
        var q;
        if (Ks)
          e: {
            switch (e) {
              case "compositionstart":
                var K = "onCompositionStart";
                break e;
              case "compositionend":
                K = "onCompositionEnd";
                break e;
              case "compositionupdate":
                K = "onCompositionUpdate";
                break e;
            }
            K = void 0;
          }
        else
          Mn
            ? xa(e, n) && (K = "onCompositionEnd")
            : e === "keydown" &&
              n.keyCode === 229 &&
              (K = "onCompositionStart");
        (K &&
          (wa &&
            n.locale !== "ko" &&
            (Mn || K !== "onCompositionStart"
              ? K === "onCompositionEnd" && Mn && (q = pa())
              : ((Jt = R),
                (Vs = "value" in Jt ? Jt.value : Jt.textContent),
                (Mn = !0))),
          (Q = Ci(_, K)),
          0 < Q.length &&
            ((K = new ya(K, e, null, n, R)),
            j.push({ event: K, listeners: Q }),
            q ? (K.data = q) : ((q = _a(n)), q !== null && (K.data = q)))),
          (q = xd ? _d(e, n) : Ed(e, n)) &&
            ((_ = Ci(_, "onBeforeInput")),
            0 < _.length &&
              ((R = new ya("onBeforeInput", "beforeinput", null, n, R)),
              j.push({ event: R, listeners: _ }),
              (R.data = q))));
      }
      Wa(j, t);
    });
  }
  function Lr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Ci(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var l = e,
        a = l.stateNode;
      (l.tag === 5 &&
        a !== null &&
        ((l = a),
        (a = hr(e, n)),
        a != null && r.unshift(Lr(e, a, l)),
        (a = hr(e, t)),
        a != null && r.push(Lr(e, a, l))),
        (e = e.return));
    }
    return r;
  }
  function Vn(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Qa(e, t, n, r, l) {
    for (var a = t._reactName, c = []; n !== null && n !== r; ) {
      var d = n,
        m = d.alternate,
        _ = d.stateNode;
      if (m !== null && m === r) break;
      (d.tag === 5 &&
        _ !== null &&
        ((d = _),
        l
          ? ((m = hr(n, a)), m != null && c.unshift(Lr(n, m, d)))
          : l || ((m = hr(n, a)), m != null && c.push(Lr(n, m, d)))),
        (n = n.return));
    }
    c.length !== 0 && e.push({ event: t, listeners: c });
  }
  var Md = /\r\n?/g,
    Ud = /\u0000|\uFFFD/g;
  function qa(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        Md,
        `
`,
      )
      .replace(Ud, "");
  }
  function Ni(e, t, n) {
    if (((t = qa(t)), qa(e) !== t && n)) throw Error(s(425));
  }
  function Ti() {}
  var il = null,
    sl = null;
  function ll(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var ol = typeof setTimeout == "function" ? setTimeout : void 0,
    Fd = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Ka = typeof Promise == "function" ? Promise : void 0,
    Vd =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Ka < "u"
          ? function (e) {
              return Ka.resolve(null).then(e).catch($d);
            }
          : ol;
  function $d(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function al(e, t) {
    var n = t,
      r = 0;
    do {
      var l = n.nextSibling;
      if ((e.removeChild(n), l && l.nodeType === 8))
        if (((n = l.data), n === "/$")) {
          if (r === 0) {
            (e.removeChild(l), xr(t));
            return;
          }
          r--;
        } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
      n = l;
    } while (n);
    xr(t);
  }
  function Gt(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  function Ya(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (t === 0) return e;
          t--;
        } else n === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var $n = Math.random().toString(36).slice(2),
    Rt = "__reactFiber$" + $n,
    Ar = "__reactProps$" + $n,
    zt = "__reactContainer$" + $n,
    ul = "__reactEvents$" + $n,
    Wd = "__reactListeners$" + $n,
    Hd = "__reactHandles$" + $n;
  function vn(e) {
    var t = e[Rt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[zt] || n[Rt])) {
        if (
          ((n = t.alternate),
          t.child !== null || (n !== null && n.child !== null))
        )
          for (e = Ya(e); e !== null; ) {
            if ((n = e[Rt])) return n;
            e = Ya(e);
          }
        return t;
      }
      ((e = n), (n = e.parentNode));
    }
    return null;
  }
  function Br(e) {
    return (
      (e = e[Rt] || e[zt]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    );
  }
  function Wn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(s(33));
  }
  function Pi(e) {
    return e[Ar] || null;
  }
  var cl = [],
    Hn = -1;
  function Zt(e) {
    return { current: e };
  }
  function we(e) {
    0 > Hn || ((e.current = cl[Hn]), (cl[Hn] = null), Hn--);
  }
  function ve(e, t) {
    (Hn++, (cl[Hn] = e.current), (e.current = t));
  }
  var bt = {},
    We = Zt(bt),
    Xe = Zt(!1),
    yn = bt;
  function Qn(e, t) {
    var n = e.type.contextTypes;
    if (!n) return bt;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
      return r.__reactInternalMemoizedMaskedChildContext;
    var l = {},
      a;
    for (a in n) l[a] = t[a];
    return (
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = l)),
      l
    );
  }
  function Ge(e) {
    return ((e = e.childContextTypes), e != null);
  }
  function Ri() {
    (we(Xe), we(We));
  }
  function Ja(e, t, n) {
    if (We.current !== bt) throw Error(s(168));
    (ve(We, t), ve(Xe, n));
  }
  function Xa(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
      return n;
    r = r.getChildContext();
    for (var l in r) if (!(l in t)) throw Error(s(108, ae(e) || "Unknown", l));
    return I({}, n, r);
  }
  function ji(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        bt),
      (yn = We.current),
      ve(We, e),
      ve(Xe, Xe.current),
      !0
    );
  }
  function Ga(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(s(169));
    (n
      ? ((e = Xa(e, t, yn)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        we(Xe),
        we(We),
        ve(We, e))
      : we(Xe),
      ve(Xe, n));
  }
  var Dt = null,
    Oi = !1,
    fl = !1;
  function Za(e) {
    Dt === null ? (Dt = [e]) : Dt.push(e);
  }
  function Qd(e) {
    ((Oi = !0), Za(e));
  }
  function en() {
    if (!fl && Dt !== null) {
      fl = !0;
      var e = 0,
        t = fe;
      try {
        var n = Dt;
        for (fe = 1; e < n.length; e++) {
          var r = n[e];
          do r = r(!0);
          while (r !== null);
        }
        ((Dt = null), (Oi = !1));
      } catch (l) {
        throw (Dt !== null && (Dt = Dt.slice(e + 1)), ea(As, en), l);
      } finally {
        ((fe = t), (fl = !1));
      }
    }
    return null;
  }
  var qn = [],
    Kn = 0,
    Li = null,
    Ai = 0,
    ct = [],
    ft = 0,
    gn = null,
    It = 1,
    Mt = "";
  function wn(e, t) {
    ((qn[Kn++] = Ai), (qn[Kn++] = Li), (Li = e), (Ai = t));
  }
  function ba(e, t, n) {
    ((ct[ft++] = It), (ct[ft++] = Mt), (ct[ft++] = gn), (gn = e));
    var r = It;
    e = Mt;
    var l = 32 - gt(r) - 1;
    ((r &= ~(1 << l)), (n += 1));
    var a = 32 - gt(t) + l;
    if (30 < a) {
      var c = l - (l % 5);
      ((a = (r & ((1 << c) - 1)).toString(32)),
        (r >>= c),
        (l -= c),
        (It = (1 << (32 - gt(t) + l)) | (n << l) | r),
        (Mt = a + e));
    } else ((It = (1 << a) | (n << l) | r), (Mt = e));
  }
  function dl(e) {
    e.return !== null && (wn(e, 1), ba(e, 1, 0));
  }
  function hl(e) {
    for (; e === Li; )
      ((Li = qn[--Kn]), (qn[Kn] = null), (Ai = qn[--Kn]), (qn[Kn] = null));
    for (; e === gn; )
      ((gn = ct[--ft]),
        (ct[ft] = null),
        (Mt = ct[--ft]),
        (ct[ft] = null),
        (It = ct[--ft]),
        (ct[ft] = null));
  }
  var lt = null,
    ot = null,
    ke = !1,
    kt = null;
  function eu(e, t) {
    var n = mt(5, null, null, 0);
    ((n.elementType = "DELETED"),
      (n.stateNode = t),
      (n.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
  }
  function tu(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return (
          (t =
            t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
              ? null
              : t),
          t !== null
            ? ((e.stateNode = t), (lt = e), (ot = Gt(t.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (lt = e), (ot = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((n = gn !== null ? { id: It, overflow: Mt } : null),
              (e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824,
              }),
              (n = mt(18, null, null, 0)),
              (n.stateNode = t),
              (n.return = e),
              (e.child = n),
              (lt = e),
              (ot = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function pl(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function ml(e) {
    if (ke) {
      var t = ot;
      if (t) {
        var n = t;
        if (!tu(e, t)) {
          if (pl(e)) throw Error(s(418));
          t = Gt(n.nextSibling);
          var r = lt;
          t && tu(e, t)
            ? eu(r, n)
            : ((e.flags = (e.flags & -4097) | 2), (ke = !1), (lt = e));
        }
      } else {
        if (pl(e)) throw Error(s(418));
        ((e.flags = (e.flags & -4097) | 2), (ke = !1), (lt = e));
      }
    }
  }
  function nu(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;
    )
      e = e.return;
    lt = e;
  }
  function Bi(e) {
    if (e !== lt) return !1;
    if (!ke) return (nu(e), (ke = !0), !1);
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type),
        (t = t !== "head" && t !== "body" && !ll(e.type, e.memoizedProps))),
      t && (t = ot))
    ) {
      if (pl(e)) throw (ru(), Error(s(418)));
      for (; t; ) (eu(e, t), (t = Gt(t.nextSibling)));
    }
    if ((nu(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(s(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                ot = Gt(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
          }
          e = e.nextSibling;
        }
        ot = null;
      }
    } else ot = lt ? Gt(e.stateNode.nextSibling) : null;
    return !0;
  }
  function ru() {
    for (var e = ot; e; ) e = Gt(e.nextSibling);
  }
  function Yn() {
    ((ot = lt = null), (ke = !1));
  }
  function vl(e) {
    kt === null ? (kt = [e]) : kt.push(e);
  }
  var qd = oe.ReactCurrentBatchConfig;
  function zr(e, t, n) {
    if (
      ((e = n.ref),
      e !== null && typeof e != "function" && typeof e != "object")
    ) {
      if (n._owner) {
        if (((n = n._owner), n)) {
          if (n.tag !== 1) throw Error(s(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(s(147, e));
        var l = r,
          a = "" + e;
        return t !== null &&
          t.ref !== null &&
          typeof t.ref == "function" &&
          t.ref._stringRef === a
          ? t.ref
          : ((t = function (c) {
              var d = l.refs;
              c === null ? delete d[a] : (d[a] = c);
            }),
            (t._stringRef = a),
            t);
      }
      if (typeof e != "string") throw Error(s(284));
      if (!n._owner) throw Error(s(290, e));
    }
    return e;
  }
  function zi(e, t) {
    throw (
      (e = Object.prototype.toString.call(t)),
      Error(
        s(
          31,
          e === "[object Object]"
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e,
        ),
      )
    );
  }
  function iu(e) {
    var t = e._init;
    return t(e._payload);
  }
  function su(e) {
    function t(S, v) {
      if (e) {
        var x = S.deletions;
        x === null ? ((S.deletions = [v]), (S.flags |= 16)) : x.push(v);
      }
    }
    function n(S, v) {
      if (!e) return null;
      for (; v !== null; ) (t(S, v), (v = v.sibling));
      return null;
    }
    function r(S, v) {
      for (S = new Map(); v !== null; )
        (v.key !== null ? S.set(v.key, v) : S.set(v.index, v), (v = v.sibling));
      return S;
    }
    function l(S, v) {
      return ((S = un(S, v)), (S.index = 0), (S.sibling = null), S);
    }
    function a(S, v, x) {
      return (
        (S.index = x),
        e
          ? ((x = S.alternate),
            x !== null
              ? ((x = x.index), x < v ? ((S.flags |= 2), v) : x)
              : ((S.flags |= 2), v))
          : ((S.flags |= 1048576), v)
      );
    }
    function c(S) {
      return (e && S.alternate === null && (S.flags |= 2), S);
    }
    function d(S, v, x, L) {
      return v === null || v.tag !== 6
        ? ((v = oo(x, S.mode, L)), (v.return = S), v)
        : ((v = l(v, x)), (v.return = S), v);
    }
    function m(S, v, x, L) {
      var $ = x.type;
      return $ === Ve
        ? R(S, v, x.props.children, L, x.key)
        : v !== null &&
            (v.elementType === $ ||
              (typeof $ == "object" &&
                $ !== null &&
                $.$$typeof === je &&
                iu($) === v.type))
          ? ((L = l(v, x.props)), (L.ref = zr(S, v, x)), (L.return = S), L)
          : ((L = ss(x.type, x.key, x.props, null, S.mode, L)),
            (L.ref = zr(S, v, x)),
            (L.return = S),
            L);
    }
    function _(S, v, x, L) {
      return v === null ||
        v.tag !== 4 ||
        v.stateNode.containerInfo !== x.containerInfo ||
        v.stateNode.implementation !== x.implementation
        ? ((v = ao(x, S.mode, L)), (v.return = S), v)
        : ((v = l(v, x.children || [])), (v.return = S), v);
    }
    function R(S, v, x, L, $) {
      return v === null || v.tag !== 7
        ? ((v = Tn(x, S.mode, L, $)), (v.return = S), v)
        : ((v = l(v, x)), (v.return = S), v);
    }
    function j(S, v, x) {
      if ((typeof v == "string" && v !== "") || typeof v == "number")
        return ((v = oo("" + v, S.mode, x)), (v.return = S), v);
      if (typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case Ee:
            return (
              (x = ss(v.type, v.key, v.props, null, S.mode, x)),
              (x.ref = zr(S, null, v)),
              (x.return = S),
              x
            );
          case he:
            return ((v = ao(v, S.mode, x)), (v.return = S), v);
          case je:
            var L = v._init;
            return j(S, L(v._payload), x);
        }
        if (Ht(v) || W(v))
          return ((v = Tn(v, S.mode, x, null)), (v.return = S), v);
        zi(S, v);
      }
      return null;
    }
    function P(S, v, x, L) {
      var $ = v !== null ? v.key : null;
      if ((typeof x == "string" && x !== "") || typeof x == "number")
        return $ !== null ? null : d(S, v, "" + x, L);
      if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case Ee:
            return x.key === $ ? m(S, v, x, L) : null;
          case he:
            return x.key === $ ? _(S, v, x, L) : null;
          case je:
            return (($ = x._init), P(S, v, $(x._payload), L));
        }
        if (Ht(x) || W(x)) return $ !== null ? null : R(S, v, x, L, null);
        zi(S, x);
      }
      return null;
    }
    function M(S, v, x, L, $) {
      if ((typeof L == "string" && L !== "") || typeof L == "number")
        return ((S = S.get(x) || null), d(v, S, "" + L, $));
      if (typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case Ee:
            return (
              (S = S.get(L.key === null ? x : L.key) || null),
              m(v, S, L, $)
            );
          case he:
            return (
              (S = S.get(L.key === null ? x : L.key) || null),
              _(v, S, L, $)
            );
          case je:
            var Q = L._init;
            return M(S, v, x, Q(L._payload), $);
        }
        if (Ht(L) || W(L)) return ((S = S.get(x) || null), R(v, S, L, $, null));
        zi(v, L);
      }
      return null;
    }
    function F(S, v, x, L) {
      for (
        var $ = null, Q = null, q = v, K = (v = 0), Ie = null;
        q !== null && K < x.length;
        K++
      ) {
        q.index > K ? ((Ie = q), (q = null)) : (Ie = q.sibling);
        var ue = P(S, q, x[K], L);
        if (ue === null) {
          q === null && (q = Ie);
          break;
        }
        (e && q && ue.alternate === null && t(S, q),
          (v = a(ue, v, K)),
          Q === null ? ($ = ue) : (Q.sibling = ue),
          (Q = ue),
          (q = Ie));
      }
      if (K === x.length) return (n(S, q), ke && wn(S, K), $);
      if (q === null) {
        for (; K < x.length; K++)
          ((q = j(S, x[K], L)),
            q !== null &&
              ((v = a(q, v, K)),
              Q === null ? ($ = q) : (Q.sibling = q),
              (Q = q)));
        return (ke && wn(S, K), $);
      }
      for (q = r(S, q); K < x.length; K++)
        ((Ie = M(q, S, K, x[K], L)),
          Ie !== null &&
            (e &&
              Ie.alternate !== null &&
              q.delete(Ie.key === null ? K : Ie.key),
            (v = a(Ie, v, K)),
            Q === null ? ($ = Ie) : (Q.sibling = Ie),
            (Q = Ie)));
      return (
        e &&
          q.forEach(function (cn) {
            return t(S, cn);
          }),
        ke && wn(S, K),
        $
      );
    }
    function V(S, v, x, L) {
      var $ = W(x);
      if (typeof $ != "function") throw Error(s(150));
      if (((x = $.call(x)), x == null)) throw Error(s(151));
      for (
        var Q = ($ = null), q = v, K = (v = 0), Ie = null, ue = x.next();
        q !== null && !ue.done;
        K++, ue = x.next()
      ) {
        q.index > K ? ((Ie = q), (q = null)) : (Ie = q.sibling);
        var cn = P(S, q, ue.value, L);
        if (cn === null) {
          q === null && (q = Ie);
          break;
        }
        (e && q && cn.alternate === null && t(S, q),
          (v = a(cn, v, K)),
          Q === null ? ($ = cn) : (Q.sibling = cn),
          (Q = cn),
          (q = Ie));
      }
      if (ue.done) return (n(S, q), ke && wn(S, K), $);
      if (q === null) {
        for (; !ue.done; K++, ue = x.next())
          ((ue = j(S, ue.value, L)),
            ue !== null &&
              ((v = a(ue, v, K)),
              Q === null ? ($ = ue) : (Q.sibling = ue),
              (Q = ue)));
        return (ke && wn(S, K), $);
      }
      for (q = r(S, q); !ue.done; K++, ue = x.next())
        ((ue = M(q, S, K, ue.value, L)),
          ue !== null &&
            (e &&
              ue.alternate !== null &&
              q.delete(ue.key === null ? K : ue.key),
            (v = a(ue, v, K)),
            Q === null ? ($ = ue) : (Q.sibling = ue),
            (Q = ue)));
      return (
        e &&
          q.forEach(function (Ch) {
            return t(S, Ch);
          }),
        ke && wn(S, K),
        $
      );
    }
    function Ne(S, v, x, L) {
      if (
        (typeof x == "object" &&
          x !== null &&
          x.type === Ve &&
          x.key === null &&
          (x = x.props.children),
        typeof x == "object" && x !== null)
      ) {
        switch (x.$$typeof) {
          case Ee:
            e: {
              for (var $ = x.key, Q = v; Q !== null; ) {
                if (Q.key === $) {
                  if ((($ = x.type), $ === Ve)) {
                    if (Q.tag === 7) {
                      (n(S, Q.sibling),
                        (v = l(Q, x.props.children)),
                        (v.return = S),
                        (S = v));
                      break e;
                    }
                  } else if (
                    Q.elementType === $ ||
                    (typeof $ == "object" &&
                      $ !== null &&
                      $.$$typeof === je &&
                      iu($) === Q.type)
                  ) {
                    (n(S, Q.sibling),
                      (v = l(Q, x.props)),
                      (v.ref = zr(S, Q, x)),
                      (v.return = S),
                      (S = v));
                    break e;
                  }
                  n(S, Q);
                  break;
                } else t(S, Q);
                Q = Q.sibling;
              }
              x.type === Ve
                ? ((v = Tn(x.props.children, S.mode, L, x.key)),
                  (v.return = S),
                  (S = v))
                : ((L = ss(x.type, x.key, x.props, null, S.mode, L)),
                  (L.ref = zr(S, v, x)),
                  (L.return = S),
                  (S = L));
            }
            return c(S);
          case he:
            e: {
              for (Q = x.key; v !== null; ) {
                if (v.key === Q)
                  if (
                    v.tag === 4 &&
                    v.stateNode.containerInfo === x.containerInfo &&
                    v.stateNode.implementation === x.implementation
                  ) {
                    (n(S, v.sibling),
                      (v = l(v, x.children || [])),
                      (v.return = S),
                      (S = v));
                    break e;
                  } else {
                    n(S, v);
                    break;
                  }
                else t(S, v);
                v = v.sibling;
              }
              ((v = ao(x, S.mode, L)), (v.return = S), (S = v));
            }
            return c(S);
          case je:
            return ((Q = x._init), Ne(S, v, Q(x._payload), L));
        }
        if (Ht(x)) return F(S, v, x, L);
        if (W(x)) return V(S, v, x, L);
        zi(S, x);
      }
      return (typeof x == "string" && x !== "") || typeof x == "number"
        ? ((x = "" + x),
          v !== null && v.tag === 6
            ? (n(S, v.sibling), (v = l(v, x)), (v.return = S), (S = v))
            : (n(S, v), (v = oo(x, S.mode, L)), (v.return = S), (S = v)),
          c(S))
        : n(S, v);
    }
    return Ne;
  }
  var Jn = su(!0),
    lu = su(!1),
    Di = Zt(null),
    Ii = null,
    Xn = null,
    yl = null;
  function gl() {
    yl = Xn = Ii = null;
  }
  function wl(e) {
    var t = Di.current;
    (we(Di), (e._currentValue = t));
  }
  function kl(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
          : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
      )
        break;
      e = e.return;
    }
  }
  function Gn(e, t) {
    ((Ii = e),
      (yl = Xn = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        ((e.lanes & t) !== 0 && (Ze = !0), (e.firstContext = null)));
  }
  function dt(e) {
    var t = e._currentValue;
    if (yl !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), Xn === null)) {
        if (Ii === null) throw Error(s(308));
        ((Xn = e), (Ii.dependencies = { lanes: 0, firstContext: e }));
      } else Xn = Xn.next = e;
    return t;
  }
  var kn = null;
  function Sl(e) {
    kn === null ? (kn = [e]) : kn.push(e);
  }
  function ou(e, t, n, r) {
    var l = t.interleaved;
    return (
      l === null ? ((n.next = n), Sl(t)) : ((n.next = l.next), (l.next = n)),
      (t.interleaved = n),
      Ut(e, r)
    );
  }
  function Ut(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
      ((e.childLanes |= t),
        (n = e.alternate),
        n !== null && (n.childLanes |= t),
        (n = e),
        (e = e.return));
    return n.tag === 3 ? n.stateNode : null;
  }
  var tn = !1;
  function xl(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function au(e, t) {
    ((e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects,
        }));
  }
  function Ft(e, t) {
    return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function nn(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), (se & 2) !== 0)) {
      var l = r.pending;
      return (
        l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
        (r.pending = t),
        Ut(e, n)
      );
    }
    return (
      (l = r.interleaved),
      l === null ? ((t.next = t), Sl(r)) : ((t.next = l.next), (l.next = t)),
      (r.interleaved = t),
      Ut(e, n)
    );
  }
  function Mi(e, t, n) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
    ) {
      var r = t.lanes;
      ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Ds(e, n));
    }
  }
  function uu(e, t) {
    var n = e.updateQueue,
      r = e.alternate;
    if (r !== null && ((r = r.updateQueue), n === r)) {
      var l = null,
        a = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var c = {
            eventTime: n.eventTime,
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: n.callback,
            next: null,
          };
          (a === null ? (l = a = c) : (a = a.next = c), (n = n.next));
        } while (n !== null);
        a === null ? (l = a = t) : (a = a.next = t);
      } else l = a = t;
      ((n = {
        baseState: r.baseState,
        firstBaseUpdate: l,
        lastBaseUpdate: a,
        shared: r.shared,
        effects: r.effects,
      }),
        (e.updateQueue = n));
      return;
    }
    ((e = n.lastBaseUpdate),
      e === null ? (n.firstBaseUpdate = t) : (e.next = t),
      (n.lastBaseUpdate = t));
  }
  function Ui(e, t, n, r) {
    var l = e.updateQueue;
    tn = !1;
    var a = l.firstBaseUpdate,
      c = l.lastBaseUpdate,
      d = l.shared.pending;
    if (d !== null) {
      l.shared.pending = null;
      var m = d,
        _ = m.next;
      ((m.next = null), c === null ? (a = _) : (c.next = _), (c = m));
      var R = e.alternate;
      R !== null &&
        ((R = R.updateQueue),
        (d = R.lastBaseUpdate),
        d !== c &&
          (d === null ? (R.firstBaseUpdate = _) : (d.next = _),
          (R.lastBaseUpdate = m)));
    }
    if (a !== null) {
      var j = l.baseState;
      ((c = 0), (R = _ = m = null), (d = a));
      do {
        var P = d.lane,
          M = d.eventTime;
        if ((r & P) === P) {
          R !== null &&
            (R = R.next =
              {
                eventTime: M,
                lane: 0,
                tag: d.tag,
                payload: d.payload,
                callback: d.callback,
                next: null,
              });
          e: {
            var F = e,
              V = d;
            switch (((P = t), (M = n), V.tag)) {
              case 1:
                if (((F = V.payload), typeof F == "function")) {
                  j = F.call(M, j, P);
                  break e;
                }
                j = F;
                break e;
              case 3:
                F.flags = (F.flags & -65537) | 128;
              case 0:
                if (
                  ((F = V.payload),
                  (P = typeof F == "function" ? F.call(M, j, P) : F),
                  P == null)
                )
                  break e;
                j = I({}, j, P);
                break e;
              case 2:
                tn = !0;
            }
          }
          d.callback !== null &&
            d.lane !== 0 &&
            ((e.flags |= 64),
            (P = l.effects),
            P === null ? (l.effects = [d]) : P.push(d));
        } else
          ((M = {
            eventTime: M,
            lane: P,
            tag: d.tag,
            payload: d.payload,
            callback: d.callback,
            next: null,
          }),
            R === null ? ((_ = R = M), (m = j)) : (R = R.next = M),
            (c |= P));
        if (((d = d.next), d === null)) {
          if (((d = l.shared.pending), d === null)) break;
          ((P = d),
            (d = P.next),
            (P.next = null),
            (l.lastBaseUpdate = P),
            (l.shared.pending = null));
        }
      } while (!0);
      if (
        (R === null && (m = j),
        (l.baseState = m),
        (l.firstBaseUpdate = _),
        (l.lastBaseUpdate = R),
        (t = l.shared.interleaved),
        t !== null)
      ) {
        l = t;
        do ((c |= l.lane), (l = l.next));
        while (l !== t);
      } else a === null && (l.shared.lanes = 0);
      ((_n |= c), (e.lanes = c), (e.memoizedState = j));
    }
  }
  function cu(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var r = e[t],
          l = r.callback;
        if (l !== null) {
          if (((r.callback = null), (r = n), typeof l != "function"))
            throw Error(s(191, l));
          l.call(r);
        }
      }
  }
  var Dr = {},
    jt = Zt(Dr),
    Ir = Zt(Dr),
    Mr = Zt(Dr);
  function Sn(e) {
    if (e === Dr) throw Error(s(174));
    return e;
  }
  function _l(e, t) {
    switch ((ve(Mr, t), ve(Ir, e), ve(jt, Dr), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : An(null, "");
        break;
      default:
        ((e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = An(t, e)));
    }
    (we(jt), ve(jt, t));
  }
  function Zn() {
    (we(jt), we(Ir), we(Mr));
  }
  function fu(e) {
    Sn(Mr.current);
    var t = Sn(jt.current),
      n = An(t, e.type);
    t !== n && (ve(Ir, e), ve(jt, n));
  }
  function El(e) {
    Ir.current === e && (we(jt), we(Ir));
  }
  var Se = Zt(0);
  function Fi(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (
          n !== null &&
          ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        ((t.child.return = t), (t = t.child));
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
    return null;
  }
  var Cl = [];
  function Nl() {
    for (var e = 0; e < Cl.length; e++)
      Cl[e]._workInProgressVersionPrimary = null;
    Cl.length = 0;
  }
  var Vi = oe.ReactCurrentDispatcher,
    Tl = oe.ReactCurrentBatchConfig,
    xn = 0,
    xe = null,
    Oe = null,
    ze = null,
    $i = !1,
    Ur = !1,
    Fr = 0,
    Kd = 0;
  function He() {
    throw Error(s(321));
  }
  function Pl(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!wt(e[n], t[n])) return !1;
    return !0;
  }
  function Rl(e, t, n, r, l, a) {
    if (
      ((xn = a),
      (xe = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (Vi.current = e === null || e.memoizedState === null ? Gd : Zd),
      (e = n(r, l)),
      Ur)
    ) {
      a = 0;
      do {
        if (((Ur = !1), (Fr = 0), 25 <= a)) throw Error(s(301));
        ((a += 1),
          (ze = Oe = null),
          (t.updateQueue = null),
          (Vi.current = bd),
          (e = n(r, l)));
      } while (Ur);
    }
    if (
      ((Vi.current = Qi),
      (t = Oe !== null && Oe.next !== null),
      (xn = 0),
      (ze = Oe = xe = null),
      ($i = !1),
      t)
    )
      throw Error(s(300));
    return e;
  }
  function jl() {
    var e = Fr !== 0;
    return ((Fr = 0), e);
  }
  function Ot() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (ze === null ? (xe.memoizedState = ze = e) : (ze = ze.next = e), ze);
  }
  function ht() {
    if (Oe === null) {
      var e = xe.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Oe.next;
    var t = ze === null ? xe.memoizedState : ze.next;
    if (t !== null) ((ze = t), (Oe = e));
    else {
      if (e === null) throw Error(s(310));
      ((Oe = e),
        (e = {
          memoizedState: Oe.memoizedState,
          baseState: Oe.baseState,
          baseQueue: Oe.baseQueue,
          queue: Oe.queue,
          next: null,
        }),
        ze === null ? (xe.memoizedState = ze = e) : (ze = ze.next = e));
    }
    return ze;
  }
  function Vr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Ol(e) {
    var t = ht(),
      n = t.queue;
    if (n === null) throw Error(s(311));
    n.lastRenderedReducer = e;
    var r = Oe,
      l = r.baseQueue,
      a = n.pending;
    if (a !== null) {
      if (l !== null) {
        var c = l.next;
        ((l.next = a.next), (a.next = c));
      }
      ((r.baseQueue = l = a), (n.pending = null));
    }
    if (l !== null) {
      ((a = l.next), (r = r.baseState));
      var d = (c = null),
        m = null,
        _ = a;
      do {
        var R = _.lane;
        if ((xn & R) === R)
          (m !== null &&
            (m = m.next =
              {
                lane: 0,
                action: _.action,
                hasEagerState: _.hasEagerState,
                eagerState: _.eagerState,
                next: null,
              }),
            (r = _.hasEagerState ? _.eagerState : e(r, _.action)));
        else {
          var j = {
            lane: R,
            action: _.action,
            hasEagerState: _.hasEagerState,
            eagerState: _.eagerState,
            next: null,
          };
          (m === null ? ((d = m = j), (c = r)) : (m = m.next = j),
            (xe.lanes |= R),
            (_n |= R));
        }
        _ = _.next;
      } while (_ !== null && _ !== a);
      (m === null ? (c = r) : (m.next = d),
        wt(r, t.memoizedState) || (Ze = !0),
        (t.memoizedState = r),
        (t.baseState = c),
        (t.baseQueue = m),
        (n.lastRenderedState = r));
    }
    if (((e = n.interleaved), e !== null)) {
      l = e;
      do ((a = l.lane), (xe.lanes |= a), (_n |= a), (l = l.next));
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Ll(e) {
    var t = ht(),
      n = t.queue;
    if (n === null) throw Error(s(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
      l = n.pending,
      a = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var c = (l = l.next);
      do ((a = e(a, c.action)), (c = c.next));
      while (c !== l);
      (wt(a, t.memoizedState) || (Ze = !0),
        (t.memoizedState = a),
        t.baseQueue === null && (t.baseState = a),
        (n.lastRenderedState = a));
    }
    return [a, r];
  }
  function du() {}
  function hu(e, t) {
    var n = xe,
      r = ht(),
      l = t(),
      a = !wt(r.memoizedState, l);
    if (
      (a && ((r.memoizedState = l), (Ze = !0)),
      (r = r.queue),
      Al(vu.bind(null, n, r, e), [e]),
      r.getSnapshot !== t || a || (ze !== null && ze.memoizedState.tag & 1))
    ) {
      if (
        ((n.flags |= 2048),
        $r(9, mu.bind(null, n, r, l, t), void 0, null),
        De === null)
      )
        throw Error(s(349));
      (xn & 30) !== 0 || pu(n, t, l);
    }
    return l;
  }
  function pu(e, t, n) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = xe.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (xe.updateQueue = t),
          (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
  }
  function mu(e, t, n, r) {
    ((t.value = n), (t.getSnapshot = r), yu(t) && gu(e));
  }
  function vu(e, t, n) {
    return n(function () {
      yu(t) && gu(e);
    });
  }
  function yu(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !wt(e, n);
    } catch {
      return !0;
    }
  }
  function gu(e) {
    var t = Ut(e, 1);
    t !== null && Et(t, e, 1, -1);
  }
  function wu(e) {
    var t = Ot();
    return (
      typeof e == "function" && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Vr,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = Xd.bind(null, xe, e)),
      [t.memoizedState, e]
    );
  }
  function $r(e, t, n, r) {
    return (
      (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
      (t = xe.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (xe.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((n = t.lastEffect),
          n === null
            ? (t.lastEffect = e.next = e)
            : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
      e
    );
  }
  function ku() {
    return ht().memoizedState;
  }
  function Wi(e, t, n, r) {
    var l = Ot();
    ((xe.flags |= e),
      (l.memoizedState = $r(1 | t, n, void 0, r === void 0 ? null : r)));
  }
  function Hi(e, t, n, r) {
    var l = ht();
    r = r === void 0 ? null : r;
    var a = void 0;
    if (Oe !== null) {
      var c = Oe.memoizedState;
      if (((a = c.destroy), r !== null && Pl(r, c.deps))) {
        l.memoizedState = $r(t, n, a, r);
        return;
      }
    }
    ((xe.flags |= e), (l.memoizedState = $r(1 | t, n, a, r)));
  }
  function Su(e, t) {
    return Wi(8390656, 8, e, t);
  }
  function Al(e, t) {
    return Hi(2048, 8, e, t);
  }
  function xu(e, t) {
    return Hi(4, 2, e, t);
  }
  function _u(e, t) {
    return Hi(4, 4, e, t);
  }
  function Eu(e, t) {
    if (typeof t == "function")
      return (
        (e = e()),
        t(e),
        function () {
          t(null);
        }
      );
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function Cu(e, t, n) {
    return (
      (n = n != null ? n.concat([e]) : null),
      Hi(4, 4, Eu.bind(null, t, e), n)
    );
  }
  function Bl() {}
  function Nu(e, t) {
    var n = ht();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Pl(t, r[1])
      ? r[0]
      : ((n.memoizedState = [e, t]), e);
  }
  function Tu(e, t) {
    var n = ht();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Pl(t, r[1])
      ? r[0]
      : ((e = e()), (n.memoizedState = [e, t]), e);
  }
  function Pu(e, t, n) {
    return (xn & 21) === 0
      ? (e.baseState && ((e.baseState = !1), (Ze = !0)), (e.memoizedState = n))
      : (wt(n, t) ||
          ((n = ia()), (xe.lanes |= n), (_n |= n), (e.baseState = !0)),
        t);
  }
  function Yd(e, t) {
    var n = fe;
    ((fe = n !== 0 && 4 > n ? n : 4), e(!0));
    var r = Tl.transition;
    Tl.transition = {};
    try {
      (e(!1), t());
    } finally {
      ((fe = n), (Tl.transition = r));
    }
  }
  function Ru() {
    return ht().memoizedState;
  }
  function Jd(e, t, n) {
    var r = on(e);
    if (
      ((n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      ju(e))
    )
      Ou(t, n);
    else if (((n = ou(e, t, n, r)), n !== null)) {
      var l = Ye();
      (Et(n, e, r, l), Lu(n, t, r));
    }
  }
  function Xd(e, t, n) {
    var r = on(e),
      l = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (ju(e)) Ou(t, l);
    else {
      var a = e.alternate;
      if (
        e.lanes === 0 &&
        (a === null || a.lanes === 0) &&
        ((a = t.lastRenderedReducer), a !== null)
      )
        try {
          var c = t.lastRenderedState,
            d = a(c, n);
          if (((l.hasEagerState = !0), (l.eagerState = d), wt(d, c))) {
            var m = t.interleaved;
            (m === null
              ? ((l.next = l), Sl(t))
              : ((l.next = m.next), (m.next = l)),
              (t.interleaved = l));
            return;
          }
        } catch {
        } finally {
        }
      ((n = ou(e, t, l, r)),
        n !== null && ((l = Ye()), Et(n, e, r, l), Lu(n, t, r)));
    }
  }
  function ju(e) {
    var t = e.alternate;
    return e === xe || (t !== null && t === xe);
  }
  function Ou(e, t) {
    Ur = $i = !0;
    var n = e.pending;
    (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t));
  }
  function Lu(e, t, n) {
    if ((n & 4194240) !== 0) {
      var r = t.lanes;
      ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Ds(e, n));
    }
  }
  var Qi = {
      readContext: dt,
      useCallback: He,
      useContext: He,
      useEffect: He,
      useImperativeHandle: He,
      useInsertionEffect: He,
      useLayoutEffect: He,
      useMemo: He,
      useReducer: He,
      useRef: He,
      useState: He,
      useDebugValue: He,
      useDeferredValue: He,
      useTransition: He,
      useMutableSource: He,
      useSyncExternalStore: He,
      useId: He,
      unstable_isNewReconciler: !1,
    },
    Gd = {
      readContext: dt,
      useCallback: function (e, t) {
        return ((Ot().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: dt,
      useEffect: Su,
      useImperativeHandle: function (e, t, n) {
        return (
          (n = n != null ? n.concat([e]) : null),
          Wi(4194308, 4, Eu.bind(null, t, e), n)
        );
      },
      useLayoutEffect: function (e, t) {
        return Wi(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return Wi(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = Ot();
        return (
          (t = t === void 0 ? null : t),
          (e = e()),
          (n.memoizedState = [e, t]),
          e
        );
      },
      useReducer: function (e, t, n) {
        var r = Ot();
        return (
          (t = n !== void 0 ? n(t) : t),
          (r.memoizedState = r.baseState = t),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
          (r.queue = e),
          (e = e.dispatch = Jd.bind(null, xe, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = Ot();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: wu,
      useDebugValue: Bl,
      useDeferredValue: function (e) {
        return (Ot().memoizedState = e);
      },
      useTransition: function () {
        var e = wu(!1),
          t = e[0];
        return ((e = Yd.bind(null, e[1])), (Ot().memoizedState = e), [t, e]);
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
        var r = xe,
          l = Ot();
        if (ke) {
          if (n === void 0) throw Error(s(407));
          n = n();
        } else {
          if (((n = t()), De === null)) throw Error(s(349));
          (xn & 30) !== 0 || pu(r, t, n);
        }
        l.memoizedState = n;
        var a = { value: n, getSnapshot: t };
        return (
          (l.queue = a),
          Su(vu.bind(null, r, a, e), [e]),
          (r.flags |= 2048),
          $r(9, mu.bind(null, r, a, n, t), void 0, null),
          n
        );
      },
      useId: function () {
        var e = Ot(),
          t = De.identifierPrefix;
        if (ke) {
          var n = Mt,
            r = It;
          ((n = (r & ~(1 << (32 - gt(r) - 1))).toString(32) + n),
            (t = ":" + t + "R" + n),
            (n = Fr++),
            0 < n && (t += "H" + n.toString(32)),
            (t += ":"));
        } else ((n = Kd++), (t = ":" + t + "r" + n.toString(32) + ":"));
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    Zd = {
      readContext: dt,
      useCallback: Nu,
      useContext: dt,
      useEffect: Al,
      useImperativeHandle: Cu,
      useInsertionEffect: xu,
      useLayoutEffect: _u,
      useMemo: Tu,
      useReducer: Ol,
      useRef: ku,
      useState: function () {
        return Ol(Vr);
      },
      useDebugValue: Bl,
      useDeferredValue: function (e) {
        var t = ht();
        return Pu(t, Oe.memoizedState, e);
      },
      useTransition: function () {
        var e = Ol(Vr)[0],
          t = ht().memoizedState;
        return [e, t];
      },
      useMutableSource: du,
      useSyncExternalStore: hu,
      useId: Ru,
      unstable_isNewReconciler: !1,
    },
    bd = {
      readContext: dt,
      useCallback: Nu,
      useContext: dt,
      useEffect: Al,
      useImperativeHandle: Cu,
      useInsertionEffect: xu,
      useLayoutEffect: _u,
      useMemo: Tu,
      useReducer: Ll,
      useRef: ku,
      useState: function () {
        return Ll(Vr);
      },
      useDebugValue: Bl,
      useDeferredValue: function (e) {
        var t = ht();
        return Oe === null ? (t.memoizedState = e) : Pu(t, Oe.memoizedState, e);
      },
      useTransition: function () {
        var e = Ll(Vr)[0],
          t = ht().memoizedState;
        return [e, t];
      },
      useMutableSource: du,
      useSyncExternalStore: hu,
      useId: Ru,
      unstable_isNewReconciler: !1,
    };
  function St(e, t) {
    if (e && e.defaultProps) {
      ((t = I({}, t)), (e = e.defaultProps));
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function zl(e, t, n, r) {
    ((t = e.memoizedState),
      (n = n(r, t)),
      (n = n == null ? t : I({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n));
  }
  var qi = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? mn(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var r = Ye(),
        l = on(e),
        a = Ft(r, l);
      ((a.payload = t),
        n != null && (a.callback = n),
        (t = nn(e, a, l)),
        t !== null && (Et(t, e, l, r), Mi(t, e, l)));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var r = Ye(),
        l = on(e),
        a = Ft(r, l);
      ((a.tag = 1),
        (a.payload = t),
        n != null && (a.callback = n),
        (t = nn(e, a, l)),
        t !== null && (Et(t, e, l, r), Mi(t, e, l)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = Ye(),
        r = on(e),
        l = Ft(n, r);
      ((l.tag = 2),
        t != null && (l.callback = t),
        (t = nn(e, l, r)),
        t !== null && (Et(t, e, r, n), Mi(t, e, r)));
    },
  };
  function Au(e, t, n, r, l, a, c) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(r, a, c)
        : t.prototype && t.prototype.isPureReactComponent
          ? !Pr(n, r) || !Pr(l, a)
          : !0
    );
  }
  function Bu(e, t, n) {
    var r = !1,
      l = bt,
      a = t.contextType;
    return (
      typeof a == "object" && a !== null
        ? (a = dt(a))
        : ((l = Ge(t) ? yn : We.current),
          (r = t.contextTypes),
          (a = (r = r != null) ? Qn(e, l) : bt)),
      (t = new t(n, a)),
      (e.memoizedState =
        t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = qi),
      (e.stateNode = t),
      (t._reactInternals = e),
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = l),
        (e.__reactInternalMemoizedMaskedChildContext = a)),
      t
    );
  }
  function zu(e, t, n, r) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(n, r),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(n, r),
      t.state !== e && qi.enqueueReplaceState(t, t.state, null));
  }
  function Dl(e, t, n, r) {
    var l = e.stateNode;
    ((l.props = n), (l.state = e.memoizedState), (l.refs = {}), xl(e));
    var a = t.contextType;
    (typeof a == "object" && a !== null
      ? (l.context = dt(a))
      : ((a = Ge(t) ? yn : We.current), (l.context = Qn(e, a))),
      (l.state = e.memoizedState),
      (a = t.getDerivedStateFromProps),
      typeof a == "function" && (zl(e, t, a, n), (l.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function" ||
        (typeof l.UNSAFE_componentWillMount != "function" &&
          typeof l.componentWillMount != "function") ||
        ((t = l.state),
        typeof l.componentWillMount == "function" && l.componentWillMount(),
        typeof l.UNSAFE_componentWillMount == "function" &&
          l.UNSAFE_componentWillMount(),
        t !== l.state && qi.enqueueReplaceState(l, l.state, null),
        Ui(e, n, l, r),
        (l.state = e.memoizedState)),
      typeof l.componentDidMount == "function" && (e.flags |= 4194308));
  }
  function bn(e, t) {
    try {
      var n = "",
        r = t;
      do ((n += X(r)), (r = r.return));
      while (r);
      var l = n;
    } catch (a) {
      l =
        `
Error generating stack: ` +
        a.message +
        `
` +
        a.stack;
    }
    return { value: e, source: t, stack: l, digest: null };
  }
  function Il(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function Ml(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  var eh = typeof WeakMap == "function" ? WeakMap : Map;
  function Du(e, t, n) {
    ((n = Ft(-1, n)), (n.tag = 3), (n.payload = { element: null }));
    var r = t.value;
    return (
      (n.callback = function () {
        (bi || ((bi = !0), (bl = r)), Ml(e, t));
      }),
      n
    );
  }
  function Iu(e, t, n) {
    ((n = Ft(-1, n)), (n.tag = 3));
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var l = t.value;
      ((n.payload = function () {
        return r(l);
      }),
        (n.callback = function () {
          Ml(e, t);
        }));
    }
    var a = e.stateNode;
    return (
      a !== null &&
        typeof a.componentDidCatch == "function" &&
        (n.callback = function () {
          (Ml(e, t),
            typeof r != "function" &&
              (sn === null ? (sn = new Set([this])) : sn.add(this)));
          var c = t.stack;
          this.componentDidCatch(t.value, {
            componentStack: c !== null ? c : "",
          });
        }),
      n
    );
  }
  function Mu(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new eh();
      var l = new Set();
      r.set(t, l);
    } else ((l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l)));
    l.has(n) || (l.add(n), (e = ph.bind(null, e, t, n)), t.then(e, e));
  }
  function Uu(e) {
    do {
      var t;
      if (
        ((t = e.tag === 13) &&
          ((t = e.memoizedState),
          (t = t !== null ? t.dehydrated !== null : !0)),
        t)
      )
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Fu(e, t, n, r, l) {
    return (e.mode & 1) === 0
      ? (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (n.flags |= 131072),
            (n.flags &= -52805),
            n.tag === 1 &&
              (n.alternate === null
                ? (n.tag = 17)
                : ((t = Ft(-1, 1)), (t.tag = 2), nn(n, t, 1))),
            (n.lanes |= 1)),
        e)
      : ((e.flags |= 65536), (e.lanes = l), e);
  }
  var th = oe.ReactCurrentOwner,
    Ze = !1;
  function Ke(e, t, n, r) {
    t.child = e === null ? lu(t, null, n, r) : Jn(t, e.child, n, r);
  }
  function Vu(e, t, n, r, l) {
    n = n.render;
    var a = t.ref;
    return (
      Gn(t, l),
      (r = Rl(e, t, n, r, a, l)),
      (n = jl()),
      e !== null && !Ze
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~l),
          Vt(e, t, l))
        : (ke && n && dl(t), (t.flags |= 1), Ke(e, t, r, l), t.child)
    );
  }
  function $u(e, t, n, r, l) {
    if (e === null) {
      var a = n.type;
      return typeof a == "function" &&
        !lo(a) &&
        a.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((t.tag = 15), (t.type = a), Wu(e, t, a, r, l))
        : ((e = ss(n.type, null, r, t, t.mode, l)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((a = e.child), (e.lanes & l) === 0)) {
      var c = a.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : Pr), n(c, r) && e.ref === t.ref)
      )
        return Vt(e, t, l);
    }
    return (
      (t.flags |= 1),
      (e = un(a, r)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function Wu(e, t, n, r, l) {
    if (e !== null) {
      var a = e.memoizedProps;
      if (Pr(a, r) && e.ref === t.ref)
        if (((Ze = !1), (t.pendingProps = r = a), (e.lanes & l) !== 0))
          (e.flags & 131072) !== 0 && (Ze = !0);
        else return ((t.lanes = e.lanes), Vt(e, t, l));
    }
    return Ul(e, t, n, r, l);
  }
  function Hu(e, t, n) {
    var r = t.pendingProps,
      l = r.children,
      a = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
      if ((t.mode & 1) === 0)
        ((t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          ve(tr, at),
          (at |= n));
      else {
        if ((n & 1073741824) === 0)
          return (
            (e = a !== null ? a.baseLanes | n : n),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null,
            }),
            (t.updateQueue = null),
            ve(tr, at),
            (at |= e),
            null
          );
        ((t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (r = a !== null ? a.baseLanes : n),
          ve(tr, at),
          (at |= r));
      }
    else
      (a !== null ? ((r = a.baseLanes | n), (t.memoizedState = null)) : (r = n),
        ve(tr, at),
        (at |= r));
    return (Ke(e, t, l, n), t.child);
  }
  function Qu(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function Ul(e, t, n, r, l) {
    var a = Ge(n) ? yn : We.current;
    return (
      (a = Qn(t, a)),
      Gn(t, l),
      (n = Rl(e, t, n, r, a, l)),
      (r = jl()),
      e !== null && !Ze
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~l),
          Vt(e, t, l))
        : (ke && r && dl(t), (t.flags |= 1), Ke(e, t, n, l), t.child)
    );
  }
  function qu(e, t, n, r, l) {
    if (Ge(n)) {
      var a = !0;
      ji(t);
    } else a = !1;
    if ((Gn(t, l), t.stateNode === null))
      (Yi(e, t), Bu(t, n, r), Dl(t, n, r, l), (r = !0));
    else if (e === null) {
      var c = t.stateNode,
        d = t.memoizedProps;
      c.props = d;
      var m = c.context,
        _ = n.contextType;
      typeof _ == "object" && _ !== null
        ? (_ = dt(_))
        : ((_ = Ge(n) ? yn : We.current), (_ = Qn(t, _)));
      var R = n.getDerivedStateFromProps,
        j =
          typeof R == "function" ||
          typeof c.getSnapshotBeforeUpdate == "function";
      (j ||
        (typeof c.UNSAFE_componentWillReceiveProps != "function" &&
          typeof c.componentWillReceiveProps != "function") ||
        ((d !== r || m !== _) && zu(t, c, r, _)),
        (tn = !1));
      var P = t.memoizedState;
      ((c.state = P),
        Ui(t, r, c, l),
        (m = t.memoizedState),
        d !== r || P !== m || Xe.current || tn
          ? (typeof R == "function" && (zl(t, n, R, r), (m = t.memoizedState)),
            (d = tn || Au(t, n, d, r, P, m, _))
              ? (j ||
                  (typeof c.UNSAFE_componentWillMount != "function" &&
                    typeof c.componentWillMount != "function") ||
                  (typeof c.componentWillMount == "function" &&
                    c.componentWillMount(),
                  typeof c.UNSAFE_componentWillMount == "function" &&
                    c.UNSAFE_componentWillMount()),
                typeof c.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof c.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = r),
                (t.memoizedState = m)),
            (c.props = r),
            (c.state = m),
            (c.context = _),
            (r = d))
          : (typeof c.componentDidMount == "function" && (t.flags |= 4194308),
            (r = !1)));
    } else {
      ((c = t.stateNode),
        au(e, t),
        (d = t.memoizedProps),
        (_ = t.type === t.elementType ? d : St(t.type, d)),
        (c.props = _),
        (j = t.pendingProps),
        (P = c.context),
        (m = n.contextType),
        typeof m == "object" && m !== null
          ? (m = dt(m))
          : ((m = Ge(n) ? yn : We.current), (m = Qn(t, m))));
      var M = n.getDerivedStateFromProps;
      ((R =
        typeof M == "function" ||
        typeof c.getSnapshotBeforeUpdate == "function") ||
        (typeof c.UNSAFE_componentWillReceiveProps != "function" &&
          typeof c.componentWillReceiveProps != "function") ||
        ((d !== j || P !== m) && zu(t, c, r, m)),
        (tn = !1),
        (P = t.memoizedState),
        (c.state = P),
        Ui(t, r, c, l));
      var F = t.memoizedState;
      d !== j || P !== F || Xe.current || tn
        ? (typeof M == "function" && (zl(t, n, M, r), (F = t.memoizedState)),
          (_ = tn || Au(t, n, _, r, P, F, m) || !1)
            ? (R ||
                (typeof c.UNSAFE_componentWillUpdate != "function" &&
                  typeof c.componentWillUpdate != "function") ||
                (typeof c.componentWillUpdate == "function" &&
                  c.componentWillUpdate(r, F, m),
                typeof c.UNSAFE_componentWillUpdate == "function" &&
                  c.UNSAFE_componentWillUpdate(r, F, m)),
              typeof c.componentDidUpdate == "function" && (t.flags |= 4),
              typeof c.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof c.componentDidUpdate != "function" ||
                (d === e.memoizedProps && P === e.memoizedState) ||
                (t.flags |= 4),
              typeof c.getSnapshotBeforeUpdate != "function" ||
                (d === e.memoizedProps && P === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = r),
              (t.memoizedState = F)),
          (c.props = r),
          (c.state = F),
          (c.context = m),
          (r = _))
        : (typeof c.componentDidUpdate != "function" ||
            (d === e.memoizedProps && P === e.memoizedState) ||
            (t.flags |= 4),
          typeof c.getSnapshotBeforeUpdate != "function" ||
            (d === e.memoizedProps && P === e.memoizedState) ||
            (t.flags |= 1024),
          (r = !1));
    }
    return Fl(e, t, n, r, a, l);
  }
  function Fl(e, t, n, r, l, a) {
    Qu(e, t);
    var c = (t.flags & 128) !== 0;
    if (!r && !c) return (l && Ga(t, n, !1), Vt(e, t, a));
    ((r = t.stateNode), (th.current = t));
    var d =
      c && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return (
      (t.flags |= 1),
      e !== null && c
        ? ((t.child = Jn(t, e.child, null, a)), (t.child = Jn(t, null, d, a)))
        : Ke(e, t, d, a),
      (t.memoizedState = r.state),
      l && Ga(t, n, !0),
      t.child
    );
  }
  function Ku(e) {
    var t = e.stateNode;
    (t.pendingContext
      ? Ja(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && Ja(e, t.context, !1),
      _l(e, t.containerInfo));
  }
  function Yu(e, t, n, r, l) {
    return (Yn(), vl(l), (t.flags |= 256), Ke(e, t, n, r), t.child);
  }
  var Vl = { dehydrated: null, treeContext: null, retryLane: 0 };
  function $l(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Ju(e, t, n) {
    var r = t.pendingProps,
      l = Se.current,
      a = !1,
      c = (t.flags & 128) !== 0,
      d;
    if (
      ((d = c) ||
        (d = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
      d
        ? ((a = !0), (t.flags &= -129))
        : (e === null || e.memoizedState !== null) && (l |= 1),
      ve(Se, l & 1),
      e === null)
    )
      return (
        ml(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? ((t.mode & 1) === 0
              ? (t.lanes = 1)
              : e.data === "$!"
                ? (t.lanes = 8)
                : (t.lanes = 1073741824),
            null)
          : ((c = r.children),
            (e = r.fallback),
            a
              ? ((r = t.mode),
                (a = t.child),
                (c = { mode: "hidden", children: c }),
                (r & 1) === 0 && a !== null
                  ? ((a.childLanes = 0), (a.pendingProps = c))
                  : (a = ls(c, r, 0, null)),
                (e = Tn(e, r, n, null)),
                (a.return = t),
                (e.return = t),
                (a.sibling = e),
                (t.child = a),
                (t.child.memoizedState = $l(n)),
                (t.memoizedState = Vl),
                e)
              : Wl(t, c))
      );
    if (((l = e.memoizedState), l !== null && ((d = l.dehydrated), d !== null)))
      return nh(e, t, c, r, d, l, n);
    if (a) {
      ((a = r.fallback), (c = t.mode), (l = e.child), (d = l.sibling));
      var m = { mode: "hidden", children: r.children };
      return (
        (c & 1) === 0 && t.child !== l
          ? ((r = t.child),
            (r.childLanes = 0),
            (r.pendingProps = m),
            (t.deletions = null))
          : ((r = un(l, m)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
        d !== null ? (a = un(d, a)) : ((a = Tn(a, c, n, null)), (a.flags |= 2)),
        (a.return = t),
        (r.return = t),
        (r.sibling = a),
        (t.child = r),
        (r = a),
        (a = t.child),
        (c = e.child.memoizedState),
        (c =
          c === null
            ? $l(n)
            : {
                baseLanes: c.baseLanes | n,
                cachePool: null,
                transitions: c.transitions,
              }),
        (a.memoizedState = c),
        (a.childLanes = e.childLanes & ~n),
        (t.memoizedState = Vl),
        r
      );
    }
    return (
      (a = e.child),
      (e = a.sibling),
      (r = un(a, { mode: "visible", children: r.children })),
      (t.mode & 1) === 0 && (r.lanes = n),
      (r.return = t),
      (r.sibling = null),
      e !== null &&
        ((n = t.deletions),
        n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
      (t.child = r),
      (t.memoizedState = null),
      r
    );
  }
  function Wl(e, t) {
    return (
      (t = ls({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function Ki(e, t, n, r) {
    return (
      r !== null && vl(r),
      Jn(t, e.child, null, n),
      (e = Wl(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function nh(e, t, n, r, l, a, c) {
    if (n)
      return t.flags & 256
        ? ((t.flags &= -257), (r = Il(Error(s(422)))), Ki(e, t, c, r))
        : t.memoizedState !== null
          ? ((t.child = e.child), (t.flags |= 128), null)
          : ((a = r.fallback),
            (l = t.mode),
            (r = ls({ mode: "visible", children: r.children }, l, 0, null)),
            (a = Tn(a, l, c, null)),
            (a.flags |= 2),
            (r.return = t),
            (a.return = t),
            (r.sibling = a),
            (t.child = r),
            (t.mode & 1) !== 0 && Jn(t, e.child, null, c),
            (t.child.memoizedState = $l(c)),
            (t.memoizedState = Vl),
            a);
    if ((t.mode & 1) === 0) return Ki(e, t, c, null);
    if (l.data === "$!") {
      if (((r = l.nextSibling && l.nextSibling.dataset), r)) var d = r.dgst;
      return (
        (r = d),
        (a = Error(s(419))),
        (r = Il(a, r, void 0)),
        Ki(e, t, c, r)
      );
    }
    if (((d = (c & e.childLanes) !== 0), Ze || d)) {
      if (((r = De), r !== null)) {
        switch (c & -c) {
          case 4:
            l = 2;
            break;
          case 16:
            l = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            l = 32;
            break;
          case 536870912:
            l = 268435456;
            break;
          default:
            l = 0;
        }
        ((l = (l & (r.suspendedLanes | c)) !== 0 ? 0 : l),
          l !== 0 &&
            l !== a.retryLane &&
            ((a.retryLane = l), Ut(e, l), Et(r, e, l, -1)));
      }
      return (so(), (r = Il(Error(s(421)))), Ki(e, t, c, r));
    }
    return l.data === "$?"
      ? ((t.flags |= 128),
        (t.child = e.child),
        (t = mh.bind(null, e)),
        (l._reactRetry = t),
        null)
      : ((e = a.treeContext),
        (ot = Gt(l.nextSibling)),
        (lt = t),
        (ke = !0),
        (kt = null),
        e !== null &&
          ((ct[ft++] = It),
          (ct[ft++] = Mt),
          (ct[ft++] = gn),
          (It = e.id),
          (Mt = e.overflow),
          (gn = t)),
        (t = Wl(t, r.children)),
        (t.flags |= 4096),
        t);
  }
  function Xu(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    (r !== null && (r.lanes |= t), kl(e.return, t, n));
  }
  function Hl(e, t, n, r, l) {
    var a = e.memoizedState;
    a === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: r,
          tail: n,
          tailMode: l,
        })
      : ((a.isBackwards = t),
        (a.rendering = null),
        (a.renderingStartTime = 0),
        (a.last = r),
        (a.tail = n),
        (a.tailMode = l));
  }
  function Gu(e, t, n) {
    var r = t.pendingProps,
      l = r.revealOrder,
      a = r.tail;
    if ((Ke(e, t, r.children, n), (r = Se.current), (r & 2) !== 0))
      ((r = (r & 1) | 2), (t.flags |= 128));
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && Xu(e, n, t);
          else if (e.tag === 19) Xu(e, n, t);
          else if (e.child !== null) {
            ((e.child.return = e), (e = e.child));
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          ((e.sibling.return = e.return), (e = e.sibling));
        }
      r &= 1;
    }
    if ((ve(Se, r), (t.mode & 1) === 0)) t.memoizedState = null;
    else
      switch (l) {
        case "forwards":
          for (n = t.child, l = null; n !== null; )
            ((e = n.alternate),
              e !== null && Fi(e) === null && (l = n),
              (n = n.sibling));
          ((n = l),
            n === null
              ? ((l = t.child), (t.child = null))
              : ((l = n.sibling), (n.sibling = null)),
            Hl(t, !1, l, n, a));
          break;
        case "backwards":
          for (n = null, l = t.child, t.child = null; l !== null; ) {
            if (((e = l.alternate), e !== null && Fi(e) === null)) {
              t.child = l;
              break;
            }
            ((e = l.sibling), (l.sibling = n), (n = l), (l = e));
          }
          Hl(t, !0, n, null, a);
          break;
        case "together":
          Hl(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function Yi(e, t) {
    (t.mode & 1) === 0 &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function Vt(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (_n |= t.lanes),
      (n & t.childLanes) === 0)
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(s(153));
    if (t.child !== null) {
      for (
        e = t.child, n = un(e, e.pendingProps), t.child = n, n.return = t;
        e.sibling !== null;
      )
        ((e = e.sibling),
          (n = n.sibling = un(e, e.pendingProps)),
          (n.return = t));
      n.sibling = null;
    }
    return t.child;
  }
  function rh(e, t, n) {
    switch (t.tag) {
      case 3:
        (Ku(t), Yn());
        break;
      case 5:
        fu(t);
        break;
      case 1:
        Ge(t.type) && ji(t);
        break;
      case 4:
        _l(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context,
          l = t.memoizedProps.value;
        (ve(Di, r._currentValue), (r._currentValue = l));
        break;
      case 13:
        if (((r = t.memoizedState), r !== null))
          return r.dehydrated !== null
            ? (ve(Se, Se.current & 1), (t.flags |= 128), null)
            : (n & t.child.childLanes) !== 0
              ? Ju(e, t, n)
              : (ve(Se, Se.current & 1),
                (e = Vt(e, t, n)),
                e !== null ? e.sibling : null);
        ve(Se, Se.current & 1);
        break;
      case 19:
        if (((r = (n & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
          if (r) return Gu(e, t, n);
          t.flags |= 128;
        }
        if (
          ((l = t.memoizedState),
          l !== null &&
            ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
          ve(Se, Se.current),
          r)
        )
          break;
        return null;
      case 22:
      case 23:
        return ((t.lanes = 0), Hu(e, t, n));
    }
    return Vt(e, t, n);
  }
  var Zu, Ql, bu, ec;
  ((Zu = function (e, t) {
    for (var n = t.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
        ((n.child.return = n), (n = n.child));
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return;
        n = n.return;
      }
      ((n.sibling.return = n.return), (n = n.sibling));
    }
  }),
    (Ql = function () {}),
    (bu = function (e, t, n, r) {
      var l = e.memoizedProps;
      if (l !== r) {
        ((e = t.stateNode), Sn(jt.current));
        var a = null;
        switch (n) {
          case "input":
            ((l = ar(e, l)), (r = ar(e, r)), (a = []));
            break;
          case "select":
            ((l = I({}, l, { value: void 0 })),
              (r = I({}, r, { value: void 0 })),
              (a = []));
            break;
          case "textarea":
            ((l = G(e, l)), (r = G(e, r)), (a = []));
            break;
          default:
            typeof l.onClick != "function" &&
              typeof r.onClick == "function" &&
              (e.onclick = Ti);
        }
        Cs(n, r);
        var c;
        n = null;
        for (_ in l)
          if (!r.hasOwnProperty(_) && l.hasOwnProperty(_) && l[_] != null)
            if (_ === "style") {
              var d = l[_];
              for (c in d) d.hasOwnProperty(c) && (n || (n = {}), (n[c] = ""));
            } else
              _ !== "dangerouslySetInnerHTML" &&
                _ !== "children" &&
                _ !== "suppressContentEditableWarning" &&
                _ !== "suppressHydrationWarning" &&
                _ !== "autoFocus" &&
                (f.hasOwnProperty(_)
                  ? a || (a = [])
                  : (a = a || []).push(_, null));
        for (_ in r) {
          var m = r[_];
          if (
            ((d = l != null ? l[_] : void 0),
            r.hasOwnProperty(_) && m !== d && (m != null || d != null))
          )
            if (_ === "style")
              if (d) {
                for (c in d)
                  !d.hasOwnProperty(c) ||
                    (m && m.hasOwnProperty(c)) ||
                    (n || (n = {}), (n[c] = ""));
                for (c in m)
                  m.hasOwnProperty(c) &&
                    d[c] !== m[c] &&
                    (n || (n = {}), (n[c] = m[c]));
              } else (n || (a || (a = []), a.push(_, n)), (n = m));
            else
              _ === "dangerouslySetInnerHTML"
                ? ((m = m ? m.__html : void 0),
                  (d = d ? d.__html : void 0),
                  m != null && d !== m && (a = a || []).push(_, m))
                : _ === "children"
                  ? (typeof m != "string" && typeof m != "number") ||
                    (a = a || []).push(_, "" + m)
                  : _ !== "suppressContentEditableWarning" &&
                    _ !== "suppressHydrationWarning" &&
                    (f.hasOwnProperty(_)
                      ? (m != null && _ === "onScroll" && ge("scroll", e),
                        a || d === m || (a = []))
                      : (a = a || []).push(_, m));
        }
        n && (a = a || []).push("style", n);
        var _ = a;
        (t.updateQueue = _) && (t.flags |= 4);
      }
    }),
    (ec = function (e, t, n, r) {
      n !== r && (t.flags |= 4);
    }));
  function Wr(e, t) {
    if (!ke)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; t !== null; )
            (t.alternate !== null && (n = t), (t = t.sibling));
          n === null ? (e.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = e.tail;
          for (var r = null; n !== null; )
            (n.alternate !== null && (r = n), (n = n.sibling));
          r === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (r.sibling = null);
      }
  }
  function Qe(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      n = 0,
      r = 0;
    if (t)
      for (var l = e.child; l !== null; )
        ((n |= l.lanes | l.childLanes),
          (r |= l.subtreeFlags & 14680064),
          (r |= l.flags & 14680064),
          (l.return = e),
          (l = l.sibling));
    else
      for (l = e.child; l !== null; )
        ((n |= l.lanes | l.childLanes),
          (r |= l.subtreeFlags),
          (r |= l.flags),
          (l.return = e),
          (l = l.sibling));
    return ((e.subtreeFlags |= r), (e.childLanes = n), t);
  }
  function ih(e, t, n) {
    var r = t.pendingProps;
    switch ((hl(t), t.tag)) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (Qe(t), null);
      case 1:
        return (Ge(t.type) && Ri(), Qe(t), null);
      case 3:
        return (
          (r = t.stateNode),
          Zn(),
          we(Xe),
          we(We),
          Nl(),
          r.pendingContext &&
            ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (Bi(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), kt !== null && (no(kt), (kt = null)))),
          Ql(e, t),
          Qe(t),
          null
        );
      case 5:
        El(t);
        var l = Sn(Mr.current);
        if (((n = t.type), e !== null && t.stateNode != null))
          (bu(e, t, n, r, l),
            e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(s(166));
            return (Qe(t), null);
          }
          if (((e = Sn(jt.current)), Bi(t))) {
            ((r = t.stateNode), (n = t.type));
            var a = t.memoizedProps;
            switch (((r[Rt] = t), (r[Ar] = a), (e = (t.mode & 1) !== 0), n)) {
              case "dialog":
                (ge("cancel", r), ge("close", r));
                break;
              case "iframe":
              case "object":
              case "embed":
                ge("load", r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < jr.length; l++) ge(jr[l], r);
                break;
              case "source":
                ge("error", r);
                break;
              case "img":
              case "image":
              case "link":
                (ge("error", r), ge("load", r));
                break;
              case "details":
                ge("toggle", r);
                break;
              case "input":
                (ri(r, a), ge("invalid", r));
                break;
              case "select":
                ((r._wrapperState = { wasMultiple: !!a.multiple }),
                  ge("invalid", r));
                break;
              case "textarea":
                (de(r, a), ge("invalid", r));
            }
            (Cs(n, a), (l = null));
            for (var c in a)
              if (a.hasOwnProperty(c)) {
                var d = a[c];
                c === "children"
                  ? typeof d == "string"
                    ? r.textContent !== d &&
                      (a.suppressHydrationWarning !== !0 &&
                        Ni(r.textContent, d, e),
                      (l = ["children", d]))
                    : typeof d == "number" &&
                      r.textContent !== "" + d &&
                      (a.suppressHydrationWarning !== !0 &&
                        Ni(r.textContent, d, e),
                      (l = ["children", "" + d]))
                  : f.hasOwnProperty(c) &&
                    d != null &&
                    c === "onScroll" &&
                    ge("scroll", r);
              }
            switch (n) {
              case "input":
                (jn(r), cr(r, a, !0));
                break;
              case "textarea":
                (jn(r), ut(r));
                break;
              case "select":
              case "option":
                break;
              default:
                typeof a.onClick == "function" && (r.onclick = Ti);
            }
            ((r = l), (t.updateQueue = r), r !== null && (t.flags |= 4));
          } else {
            ((c = l.nodeType === 9 ? l : l.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = Tt(n)),
              e === "http://www.w3.org/1999/xhtml"
                ? n === "script"
                  ? ((e = c.createElement("div")),
                    (e.innerHTML = "<script><\/script>"),
                    (e = e.removeChild(e.firstChild)))
                  : typeof r.is == "string"
                    ? (e = c.createElement(n, { is: r.is }))
                    : ((e = c.createElement(n)),
                      n === "select" &&
                        ((c = e),
                        r.multiple
                          ? (c.multiple = !0)
                          : r.size && (c.size = r.size)))
                : (e = c.createElementNS(e, n)),
              (e[Rt] = t),
              (e[Ar] = r),
              Zu(e, t, !1, !1),
              (t.stateNode = e));
            e: {
              switch (((c = Ns(n, r)), n)) {
                case "dialog":
                  (ge("cancel", e), ge("close", e), (l = r));
                  break;
                case "iframe":
                case "object":
                case "embed":
                  (ge("load", e), (l = r));
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < jr.length; l++) ge(jr[l], e);
                  l = r;
                  break;
                case "source":
                  (ge("error", e), (l = r));
                  break;
                case "img":
                case "image":
                case "link":
                  (ge("error", e), ge("load", e), (l = r));
                  break;
                case "details":
                  (ge("toggle", e), (l = r));
                  break;
                case "input":
                  (ri(e, r), (l = ar(e, r)), ge("invalid", e));
                  break;
                case "option":
                  l = r;
                  break;
                case "select":
                  ((e._wrapperState = { wasMultiple: !!r.multiple }),
                    (l = I({}, r, { value: void 0 })),
                    ge("invalid", e));
                  break;
                case "textarea":
                  (de(e, r), (l = G(e, r)), ge("invalid", e));
                  break;
                default:
                  l = r;
              }
              (Cs(n, l), (d = l));
              for (a in d)
                if (d.hasOwnProperty(a)) {
                  var m = d[a];
                  a === "style"
                    ? Wo(e, m)
                    : a === "dangerouslySetInnerHTML"
                      ? ((m = m ? m.__html : void 0), m != null && Vo(e, m))
                      : a === "children"
                        ? typeof m == "string"
                          ? (n !== "textarea" || m !== "") && fr(e, m)
                          : typeof m == "number" && fr(e, "" + m)
                        : a !== "suppressContentEditableWarning" &&
                          a !== "suppressHydrationWarning" &&
                          a !== "autoFocus" &&
                          (f.hasOwnProperty(a)
                            ? m != null && a === "onScroll" && ge("scroll", e)
                            : m != null && le(e, a, m, c));
                }
              switch (n) {
                case "input":
                  (jn(e), cr(e, r, !1));
                  break;
                case "textarea":
                  (jn(e), ut(e));
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + ce(r.value));
                  break;
                case "select":
                  ((e.multiple = !!r.multiple),
                    (a = r.value),
                    a != null
                      ? z(e, !!r.multiple, a, !1)
                      : r.defaultValue != null &&
                        z(e, !!r.multiple, r.defaultValue, !0));
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = Ti);
              }
              switch (n) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  r = !!r.autoFocus;
                  break e;
                case "img":
                  r = !0;
                  break e;
                default:
                  r = !1;
              }
            }
            r && (t.flags |= 4);
          }
          t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
        }
        return (Qe(t), null);
      case 6:
        if (e && t.stateNode != null) ec(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(s(166));
          if (((n = Sn(Mr.current)), Sn(jt.current), Bi(t))) {
            if (
              ((r = t.stateNode),
              (n = t.memoizedProps),
              (r[Rt] = t),
              (a = r.nodeValue !== n) && ((e = lt), e !== null))
            )
              switch (e.tag) {
                case 3:
                  Ni(r.nodeValue, n, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    Ni(r.nodeValue, n, (e.mode & 1) !== 0);
              }
            a && (t.flags |= 4);
          } else
            ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
              (r[Rt] = t),
              (t.stateNode = r));
        }
        return (Qe(t), null);
      case 13:
        if (
          (we(Se),
          (r = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (ke && ot !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
            (ru(), Yn(), (t.flags |= 98560), (a = !1));
          else if (((a = Bi(t)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!a) throw Error(s(318));
              if (
                ((a = t.memoizedState),
                (a = a !== null ? a.dehydrated : null),
                !a)
              )
                throw Error(s(317));
              a[Rt] = t;
            } else
              (Yn(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4));
            (Qe(t), (a = !1));
          } else (kt !== null && (no(kt), (kt = null)), (a = !0));
          if (!a) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0
          ? ((t.lanes = n), t)
          : ((r = r !== null),
            r !== (e !== null && e.memoizedState !== null) &&
              r &&
              ((t.child.flags |= 8192),
              (t.mode & 1) !== 0 &&
                (e === null || (Se.current & 1) !== 0
                  ? Le === 0 && (Le = 3)
                  : so())),
            t.updateQueue !== null && (t.flags |= 4),
            Qe(t),
            null);
      case 4:
        return (
          Zn(),
          Ql(e, t),
          e === null && Or(t.stateNode.containerInfo),
          Qe(t),
          null
        );
      case 10:
        return (wl(t.type._context), Qe(t), null);
      case 17:
        return (Ge(t.type) && Ri(), Qe(t), null);
      case 19:
        if ((we(Se), (a = t.memoizedState), a === null)) return (Qe(t), null);
        if (((r = (t.flags & 128) !== 0), (c = a.rendering), c === null))
          if (r) Wr(a, !1);
          else {
            if (Le !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((c = Fi(e)), c !== null)) {
                  for (
                    t.flags |= 128,
                      Wr(a, !1),
                      r = c.updateQueue,
                      r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      r = n,
                      n = t.child;
                    n !== null;
                  )
                    ((a = n),
                      (e = r),
                      (a.flags &= 14680066),
                      (c = a.alternate),
                      c === null
                        ? ((a.childLanes = 0),
                          (a.lanes = e),
                          (a.child = null),
                          (a.subtreeFlags = 0),
                          (a.memoizedProps = null),
                          (a.memoizedState = null),
                          (a.updateQueue = null),
                          (a.dependencies = null),
                          (a.stateNode = null))
                        : ((a.childLanes = c.childLanes),
                          (a.lanes = c.lanes),
                          (a.child = c.child),
                          (a.subtreeFlags = 0),
                          (a.deletions = null),
                          (a.memoizedProps = c.memoizedProps),
                          (a.memoizedState = c.memoizedState),
                          (a.updateQueue = c.updateQueue),
                          (a.type = c.type),
                          (e = c.dependencies),
                          (a.dependencies =
                            e === null
                              ? null
                              : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext,
                                })),
                      (n = n.sibling));
                  return (ve(Se, (Se.current & 1) | 2), t.child);
                }
                e = e.sibling;
              }
            a.tail !== null &&
              Ce() > nr &&
              ((t.flags |= 128), (r = !0), Wr(a, !1), (t.lanes = 4194304));
          }
        else {
          if (!r)
            if (((e = Fi(c)), e !== null)) {
              if (
                ((t.flags |= 128),
                (r = !0),
                (n = e.updateQueue),
                n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                Wr(a, !0),
                a.tail === null &&
                  a.tailMode === "hidden" &&
                  !c.alternate &&
                  !ke)
              )
                return (Qe(t), null);
            } else
              2 * Ce() - a.renderingStartTime > nr &&
                n !== 1073741824 &&
                ((t.flags |= 128), (r = !0), Wr(a, !1), (t.lanes = 4194304));
          a.isBackwards
            ? ((c.sibling = t.child), (t.child = c))
            : ((n = a.last),
              n !== null ? (n.sibling = c) : (t.child = c),
              (a.last = c));
        }
        return a.tail !== null
          ? ((t = a.tail),
            (a.rendering = t),
            (a.tail = t.sibling),
            (a.renderingStartTime = Ce()),
            (t.sibling = null),
            (n = Se.current),
            ve(Se, r ? (n & 1) | 2 : n & 1),
            t)
          : (Qe(t), null);
      case 22:
      case 23:
        return (
          io(),
          (r = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
          r && (t.mode & 1) !== 0
            ? (at & 1073741824) !== 0 &&
              (Qe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : Qe(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(s(156, t.tag));
  }
  function sh(e, t) {
    switch ((hl(t), t.tag)) {
      case 1:
        return (
          Ge(t.type) && Ri(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          Zn(),
          we(Xe),
          we(We),
          Nl(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((t.flags = (e & -65537) | 128), t)
            : null
        );
      case 5:
        return (El(t), null);
      case 13:
        if (
          (we(Se), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(s(340));
          Yn();
        }
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return (we(Se), null);
      case 4:
        return (Zn(), null);
      case 10:
        return (wl(t.type._context), null);
      case 22:
      case 23:
        return (io(), null);
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Ji = !1,
    qe = !1,
    lh = typeof WeakSet == "function" ? WeakSet : Set,
    U = null;
  function er(e, t) {
    var n = e.ref;
    if (n !== null)
      if (typeof n == "function")
        try {
          n(null);
        } catch (r) {
          _e(e, t, r);
        }
      else n.current = null;
  }
  function ql(e, t, n) {
    try {
      n();
    } catch (r) {
      _e(e, t, r);
    }
  }
  var tc = !1;
  function oh(e, t) {
    if (((il = mi), (e = Aa()), Xs(e))) {
      if ("selectionStart" in e)
        var n = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          n = ((n = e.ownerDocument) && n.defaultView) || window;
          var r = n.getSelection && n.getSelection();
          if (r && r.rangeCount !== 0) {
            n = r.anchorNode;
            var l = r.anchorOffset,
              a = r.focusNode;
            r = r.focusOffset;
            try {
              (n.nodeType, a.nodeType);
            } catch {
              n = null;
              break e;
            }
            var c = 0,
              d = -1,
              m = -1,
              _ = 0,
              R = 0,
              j = e,
              P = null;
            t: for (;;) {
              for (
                var M;
                j !== n || (l !== 0 && j.nodeType !== 3) || (d = c + l),
                  j !== a || (r !== 0 && j.nodeType !== 3) || (m = c + r),
                  j.nodeType === 3 && (c += j.nodeValue.length),
                  (M = j.firstChild) !== null;
              )
                ((P = j), (j = M));
              for (;;) {
                if (j === e) break t;
                if (
                  (P === n && ++_ === l && (d = c),
                  P === a && ++R === r && (m = c),
                  (M = j.nextSibling) !== null)
                )
                  break;
                ((j = P), (P = j.parentNode));
              }
              j = M;
            }
            n = d === -1 || m === -1 ? null : { start: d, end: m };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      sl = { focusedElem: e, selectionRange: n }, mi = !1, U = t;
      U !== null;
    )
      if (((t = U), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        ((e.return = t), (U = e));
      else
        for (; U !== null; ) {
          t = U;
          try {
            var F = t.alternate;
            if ((t.flags & 1024) !== 0)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (F !== null) {
                    var V = F.memoizedProps,
                      Ne = F.memoizedState,
                      S = t.stateNode,
                      v = S.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? V : St(t.type, V),
                        Ne,
                      );
                    S.__reactInternalSnapshotBeforeUpdate = v;
                  }
                  break;
                case 3:
                  var x = t.stateNode.containerInfo;
                  x.nodeType === 1
                    ? (x.textContent = "")
                    : x.nodeType === 9 &&
                      x.documentElement &&
                      x.removeChild(x.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(s(163));
              }
          } catch (L) {
            _e(t, t.return, L);
          }
          if (((e = t.sibling), e !== null)) {
            ((e.return = t.return), (U = e));
            break;
          }
          U = t.return;
        }
    return ((F = tc), (tc = !1), F);
  }
  function Hr(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
      var l = (r = r.next);
      do {
        if ((l.tag & e) === e) {
          var a = l.destroy;
          ((l.destroy = void 0), a !== void 0 && ql(t, n, a));
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function Xi(e, t) {
    if (
      ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
    ) {
      var n = (t = t.next);
      do {
        if ((n.tag & e) === e) {
          var r = n.create;
          n.destroy = r();
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function Kl(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      switch (e.tag) {
        case 5:
          e = n;
          break;
        default:
          e = n;
      }
      typeof t == "function" ? t(e) : (t.current = e);
    }
  }
  function nc(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), nc(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null &&
          (delete t[Rt],
          delete t[Ar],
          delete t[ul],
          delete t[Wd],
          delete t[Hd])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null));
  }
  function rc(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function ic(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || rc(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
      ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        ((e.child.return = e), (e = e.child));
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Yl(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      ((e = e.stateNode),
        t
          ? n.nodeType === 8
            ? n.parentNode.insertBefore(e, t)
            : n.insertBefore(e, t)
          : (n.nodeType === 8
              ? ((t = n.parentNode), t.insertBefore(e, n))
              : ((t = n), t.appendChild(e)),
            (n = n._reactRootContainer),
            n != null || t.onclick !== null || (t.onclick = Ti)));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (Yl(e, t, n), e = e.sibling; e !== null; )
        (Yl(e, t, n), (e = e.sibling));
  }
  function Jl(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (Jl(e, t, n), e = e.sibling; e !== null; )
        (Jl(e, t, n), (e = e.sibling));
  }
  var Ue = null,
    xt = !1;
  function rn(e, t, n) {
    for (n = n.child; n !== null; ) (sc(e, t, n), (n = n.sibling));
  }
  function sc(e, t, n) {
    if (Pt && typeof Pt.onCommitFiberUnmount == "function")
      try {
        Pt.onCommitFiberUnmount(ui, n);
      } catch {}
    switch (n.tag) {
      case 5:
        qe || er(n, t);
      case 6:
        var r = Ue,
          l = xt;
        ((Ue = null),
          rn(e, t, n),
          (Ue = r),
          (xt = l),
          Ue !== null &&
            (xt
              ? ((e = Ue),
                (n = n.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(n)
                  : e.removeChild(n))
              : Ue.removeChild(n.stateNode)));
        break;
      case 18:
        Ue !== null &&
          (xt
            ? ((e = Ue),
              (n = n.stateNode),
              e.nodeType === 8
                ? al(e.parentNode, n)
                : e.nodeType === 1 && al(e, n),
              xr(e))
            : al(Ue, n.stateNode));
        break;
      case 4:
        ((r = Ue),
          (l = xt),
          (Ue = n.stateNode.containerInfo),
          (xt = !0),
          rn(e, t, n),
          (Ue = r),
          (xt = l));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !qe &&
          ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
        ) {
          l = r = r.next;
          do {
            var a = l,
              c = a.destroy;
            ((a = a.tag),
              c !== void 0 && ((a & 2) !== 0 || (a & 4) !== 0) && ql(n, t, c),
              (l = l.next));
          } while (l !== r);
        }
        rn(e, t, n);
        break;
      case 1:
        if (
          !qe &&
          (er(n, t),
          (r = n.stateNode),
          typeof r.componentWillUnmount == "function")
        )
          try {
            ((r.props = n.memoizedProps),
              (r.state = n.memoizedState),
              r.componentWillUnmount());
          } catch (d) {
            _e(n, t, d);
          }
        rn(e, t, n);
        break;
      case 21:
        rn(e, t, n);
        break;
      case 22:
        n.mode & 1
          ? ((qe = (r = qe) || n.memoizedState !== null), rn(e, t, n), (qe = r))
          : rn(e, t, n);
        break;
      default:
        rn(e, t, n);
    }
  }
  function lc(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      (n === null && (n = e.stateNode = new lh()),
        t.forEach(function (r) {
          var l = vh.bind(null, e, r);
          n.has(r) || (n.add(r), r.then(l, l));
        }));
    }
  }
  function _t(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var r = 0; r < n.length; r++) {
        var l = n[r];
        try {
          var a = e,
            c = t,
            d = c;
          e: for (; d !== null; ) {
            switch (d.tag) {
              case 5:
                ((Ue = d.stateNode), (xt = !1));
                break e;
              case 3:
                ((Ue = d.stateNode.containerInfo), (xt = !0));
                break e;
              case 4:
                ((Ue = d.stateNode.containerInfo), (xt = !0));
                break e;
            }
            d = d.return;
          }
          if (Ue === null) throw Error(s(160));
          (sc(a, c, l), (Ue = null), (xt = !1));
          var m = l.alternate;
          (m !== null && (m.return = null), (l.return = null));
        } catch (_) {
          _e(l, t, _);
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; ) (oc(t, e), (t = t.sibling));
  }
  function oc(e, t) {
    var n = e.alternate,
      r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((_t(t, e), Lt(e), r & 4)) {
          try {
            (Hr(3, e, e.return), Xi(3, e));
          } catch (V) {
            _e(e, e.return, V);
          }
          try {
            Hr(5, e, e.return);
          } catch (V) {
            _e(e, e.return, V);
          }
        }
        break;
      case 1:
        (_t(t, e), Lt(e), r & 512 && n !== null && er(n, n.return));
        break;
      case 5:
        if (
          (_t(t, e),
          Lt(e),
          r & 512 && n !== null && er(n, n.return),
          e.flags & 32)
        ) {
          var l = e.stateNode;
          try {
            fr(l, "");
          } catch (V) {
            _e(e, e.return, V);
          }
        }
        if (r & 4 && ((l = e.stateNode), l != null)) {
          var a = e.memoizedProps,
            c = n !== null ? n.memoizedProps : a,
            d = e.type,
            m = e.updateQueue;
          if (((e.updateQueue = null), m !== null))
            try {
              (d === "input" &&
                a.type === "radio" &&
                a.name != null &&
                ii(l, a),
                Ns(d, c));
              var _ = Ns(d, a);
              for (c = 0; c < m.length; c += 2) {
                var R = m[c],
                  j = m[c + 1];
                R === "style"
                  ? Wo(l, j)
                  : R === "dangerouslySetInnerHTML"
                    ? Vo(l, j)
                    : R === "children"
                      ? fr(l, j)
                      : le(l, R, j, _);
              }
              switch (d) {
                case "input":
                  ur(l, a);
                  break;
                case "textarea":
                  me(l, a);
                  break;
                case "select":
                  var P = l._wrapperState.wasMultiple;
                  l._wrapperState.wasMultiple = !!a.multiple;
                  var M = a.value;
                  M != null
                    ? z(l, !!a.multiple, M, !1)
                    : P !== !!a.multiple &&
                      (a.defaultValue != null
                        ? z(l, !!a.multiple, a.defaultValue, !0)
                        : z(l, !!a.multiple, a.multiple ? [] : "", !1));
              }
              l[Ar] = a;
            } catch (V) {
              _e(e, e.return, V);
            }
        }
        break;
      case 6:
        if ((_t(t, e), Lt(e), r & 4)) {
          if (e.stateNode === null) throw Error(s(162));
          ((l = e.stateNode), (a = e.memoizedProps));
          try {
            l.nodeValue = a;
          } catch (V) {
            _e(e, e.return, V);
          }
        }
        break;
      case 3:
        if (
          (_t(t, e), Lt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            xr(t.containerInfo);
          } catch (V) {
            _e(e, e.return, V);
          }
        break;
      case 4:
        (_t(t, e), Lt(e));
        break;
      case 13:
        (_t(t, e),
          Lt(e),
          (l = e.child),
          l.flags & 8192 &&
            ((a = l.memoizedState !== null),
            (l.stateNode.isHidden = a),
            !a ||
              (l.alternate !== null && l.alternate.memoizedState !== null) ||
              (Zl = Ce())),
          r & 4 && lc(e));
        break;
      case 22:
        if (
          ((R = n !== null && n.memoizedState !== null),
          e.mode & 1 ? ((qe = (_ = qe) || R), _t(t, e), (qe = _)) : _t(t, e),
          Lt(e),
          r & 8192)
        ) {
          if (
            ((_ = e.memoizedState !== null),
            (e.stateNode.isHidden = _) && !R && (e.mode & 1) !== 0)
          )
            for (U = e, R = e.child; R !== null; ) {
              for (j = U = R; U !== null; ) {
                switch (((P = U), (M = P.child), P.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Hr(4, P, P.return);
                    break;
                  case 1:
                    er(P, P.return);
                    var F = P.stateNode;
                    if (typeof F.componentWillUnmount == "function") {
                      ((r = P), (n = P.return));
                      try {
                        ((t = r),
                          (F.props = t.memoizedProps),
                          (F.state = t.memoizedState),
                          F.componentWillUnmount());
                      } catch (V) {
                        _e(r, n, V);
                      }
                    }
                    break;
                  case 5:
                    er(P, P.return);
                    break;
                  case 22:
                    if (P.memoizedState !== null) {
                      cc(j);
                      continue;
                    }
                }
                M !== null ? ((M.return = P), (U = M)) : cc(j);
              }
              R = R.sibling;
            }
          e: for (R = null, j = e; ; ) {
            if (j.tag === 5) {
              if (R === null) {
                R = j;
                try {
                  ((l = j.stateNode),
                    _
                      ? ((a = l.style),
                        typeof a.setProperty == "function"
                          ? a.setProperty("display", "none", "important")
                          : (a.display = "none"))
                      : ((d = j.stateNode),
                        (m = j.memoizedProps.style),
                        (c =
                          m != null && m.hasOwnProperty("display")
                            ? m.display
                            : null),
                        (d.style.display = $o("display", c))));
                } catch (V) {
                  _e(e, e.return, V);
                }
              }
            } else if (j.tag === 6) {
              if (R === null)
                try {
                  j.stateNode.nodeValue = _ ? "" : j.memoizedProps;
                } catch (V) {
                  _e(e, e.return, V);
                }
            } else if (
              ((j.tag !== 22 && j.tag !== 23) ||
                j.memoizedState === null ||
                j === e) &&
              j.child !== null
            ) {
              ((j.child.return = j), (j = j.child));
              continue;
            }
            if (j === e) break e;
            for (; j.sibling === null; ) {
              if (j.return === null || j.return === e) break e;
              (R === j && (R = null), (j = j.return));
            }
            (R === j && (R = null),
              (j.sibling.return = j.return),
              (j = j.sibling));
          }
        }
        break;
      case 19:
        (_t(t, e), Lt(e), r & 4 && lc(e));
        break;
      case 21:
        break;
      default:
        (_t(t, e), Lt(e));
    }
  }
  function Lt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (rc(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(s(160));
        }
        switch (r.tag) {
          case 5:
            var l = r.stateNode;
            r.flags & 32 && (fr(l, ""), (r.flags &= -33));
            var a = ic(e);
            Jl(e, a, l);
            break;
          case 3:
          case 4:
            var c = r.stateNode.containerInfo,
              d = ic(e);
            Yl(e, d, c);
            break;
          default:
            throw Error(s(161));
        }
      } catch (m) {
        _e(e, e.return, m);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function ah(e, t, n) {
    ((U = e), ac(e));
  }
  function ac(e, t, n) {
    for (var r = (e.mode & 1) !== 0; U !== null; ) {
      var l = U,
        a = l.child;
      if (l.tag === 22 && r) {
        var c = l.memoizedState !== null || Ji;
        if (!c) {
          var d = l.alternate,
            m = (d !== null && d.memoizedState !== null) || qe;
          d = Ji;
          var _ = qe;
          if (((Ji = c), (qe = m) && !_))
            for (U = l; U !== null; )
              ((c = U),
                (m = c.child),
                c.tag === 22 && c.memoizedState !== null
                  ? fc(l)
                  : m !== null
                    ? ((m.return = c), (U = m))
                    : fc(l));
          for (; a !== null; ) ((U = a), ac(a), (a = a.sibling));
          ((U = l), (Ji = d), (qe = _));
        }
        uc(e);
      } else
        (l.subtreeFlags & 8772) !== 0 && a !== null
          ? ((a.return = l), (U = a))
          : uc(e);
    }
  }
  function uc(e) {
    for (; U !== null; ) {
      var t = U;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                qe || Xi(5, t);
                break;
              case 1:
                var r = t.stateNode;
                if (t.flags & 4 && !qe)
                  if (n === null) r.componentDidMount();
                  else {
                    var l =
                      t.elementType === t.type
                        ? n.memoizedProps
                        : St(t.type, n.memoizedProps);
                    r.componentDidUpdate(
                      l,
                      n.memoizedState,
                      r.__reactInternalSnapshotBeforeUpdate,
                    );
                  }
                var a = t.updateQueue;
                a !== null && cu(t, a, r);
                break;
              case 3:
                var c = t.updateQueue;
                if (c !== null) {
                  if (((n = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        n = t.child.stateNode;
                        break;
                      case 1:
                        n = t.child.stateNode;
                    }
                  cu(t, c, n);
                }
                break;
              case 5:
                var d = t.stateNode;
                if (n === null && t.flags & 4) {
                  n = d;
                  var m = t.memoizedProps;
                  switch (t.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      m.autoFocus && n.focus();
                      break;
                    case "img":
                      m.src && (n.src = m.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (t.memoizedState === null) {
                  var _ = t.alternate;
                  if (_ !== null) {
                    var R = _.memoizedState;
                    if (R !== null) {
                      var j = R.dehydrated;
                      j !== null && xr(j);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(s(163));
            }
          qe || (t.flags & 512 && Kl(t));
        } catch (P) {
          _e(t, t.return, P);
        }
      }
      if (t === e) {
        U = null;
        break;
      }
      if (((n = t.sibling), n !== null)) {
        ((n.return = t.return), (U = n));
        break;
      }
      U = t.return;
    }
  }
  function cc(e) {
    for (; U !== null; ) {
      var t = U;
      if (t === e) {
        U = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        ((n.return = t.return), (U = n));
        break;
      }
      U = t.return;
    }
  }
  function fc(e) {
    for (; U !== null; ) {
      var t = U;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              Xi(4, t);
            } catch (m) {
              _e(t, n, m);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var l = t.return;
              try {
                r.componentDidMount();
              } catch (m) {
                _e(t, l, m);
              }
            }
            var a = t.return;
            try {
              Kl(t);
            } catch (m) {
              _e(t, a, m);
            }
            break;
          case 5:
            var c = t.return;
            try {
              Kl(t);
            } catch (m) {
              _e(t, c, m);
            }
        }
      } catch (m) {
        _e(t, t.return, m);
      }
      if (t === e) {
        U = null;
        break;
      }
      var d = t.sibling;
      if (d !== null) {
        ((d.return = t.return), (U = d));
        break;
      }
      U = t.return;
    }
  }
  var uh = Math.ceil,
    Gi = oe.ReactCurrentDispatcher,
    Xl = oe.ReactCurrentOwner,
    pt = oe.ReactCurrentBatchConfig,
    se = 0,
    De = null,
    Pe = null,
    Fe = 0,
    at = 0,
    tr = Zt(0),
    Le = 0,
    Qr = null,
    _n = 0,
    Zi = 0,
    Gl = 0,
    qr = null,
    be = null,
    Zl = 0,
    nr = 1 / 0,
    $t = null,
    bi = !1,
    bl = null,
    sn = null,
    es = !1,
    ln = null,
    ts = 0,
    Kr = 0,
    eo = null,
    ns = -1,
    rs = 0;
  function Ye() {
    return (se & 6) !== 0 ? Ce() : ns !== -1 ? ns : (ns = Ce());
  }
  function on(e) {
    return (e.mode & 1) === 0
      ? 1
      : (se & 2) !== 0 && Fe !== 0
        ? Fe & -Fe
        : qd.transition !== null
          ? (rs === 0 && (rs = ia()), rs)
          : ((e = fe),
            e !== 0 ||
              ((e = window.event), (e = e === void 0 ? 16 : ha(e.type))),
            e);
  }
  function Et(e, t, n, r) {
    if (50 < Kr) throw ((Kr = 0), (eo = null), Error(s(185)));
    (yr(e, n, r),
      ((se & 2) === 0 || e !== De) &&
        (e === De && ((se & 2) === 0 && (Zi |= n), Le === 4 && an(e, Fe)),
        et(e, r),
        n === 1 &&
          se === 0 &&
          (t.mode & 1) === 0 &&
          ((nr = Ce() + 500), Oi && en())));
  }
  function et(e, t) {
    var n = e.callbackNode;
    qf(e, t);
    var r = di(e, e === De ? Fe : 0);
    if (r === 0)
      (n !== null && ta(n), (e.callbackNode = null), (e.callbackPriority = 0));
    else if (((t = r & -r), e.callbackPriority !== t)) {
      if ((n != null && ta(n), t === 1))
        (e.tag === 0 ? Qd(hc.bind(null, e)) : Za(hc.bind(null, e)),
          Vd(function () {
            (se & 6) === 0 && en();
          }),
          (n = null));
      else {
        switch (sa(r)) {
          case 1:
            n = As;
            break;
          case 4:
            n = na;
            break;
          case 16:
            n = ai;
            break;
          case 536870912:
            n = ra;
            break;
          default:
            n = ai;
        }
        n = Sc(n, dc.bind(null, e));
      }
      ((e.callbackPriority = t), (e.callbackNode = n));
    }
  }
  function dc(e, t) {
    if (((ns = -1), (rs = 0), (se & 6) !== 0)) throw Error(s(327));
    var n = e.callbackNode;
    if (rr() && e.callbackNode !== n) return null;
    var r = di(e, e === De ? Fe : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = is(e, r);
    else {
      t = r;
      var l = se;
      se |= 2;
      var a = mc();
      (De !== e || Fe !== t) && (($t = null), (nr = Ce() + 500), Cn(e, t));
      do
        try {
          dh();
          break;
        } catch (d) {
          pc(e, d);
        }
      while (!0);
      (gl(),
        (Gi.current = a),
        (se = l),
        Pe !== null ? (t = 0) : ((De = null), (Fe = 0), (t = Le)));
    }
    if (t !== 0) {
      if (
        (t === 2 && ((l = Bs(e)), l !== 0 && ((r = l), (t = to(e, l)))),
        t === 1)
      )
        throw ((n = Qr), Cn(e, 0), an(e, r), et(e, Ce()), n);
      if (t === 6) an(e, r);
      else {
        if (
          ((l = e.current.alternate),
          (r & 30) === 0 &&
            !ch(l) &&
            ((t = is(e, r)),
            t === 2 && ((a = Bs(e)), a !== 0 && ((r = a), (t = to(e, a)))),
            t === 1))
        )
          throw ((n = Qr), Cn(e, 0), an(e, r), et(e, Ce()), n);
        switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
          case 0:
          case 1:
            throw Error(s(345));
          case 2:
            Nn(e, be, $t);
            break;
          case 3:
            if (
              (an(e, r),
              (r & 130023424) === r && ((t = Zl + 500 - Ce()), 10 < t))
            ) {
              if (di(e, 0) !== 0) break;
              if (((l = e.suspendedLanes), (l & r) !== r)) {
                (Ye(), (e.pingedLanes |= e.suspendedLanes & l));
                break;
              }
              e.timeoutHandle = ol(Nn.bind(null, e, be, $t), t);
              break;
            }
            Nn(e, be, $t);
            break;
          case 4:
            if ((an(e, r), (r & 4194240) === r)) break;
            for (t = e.eventTimes, l = -1; 0 < r; ) {
              var c = 31 - gt(r);
              ((a = 1 << c), (c = t[c]), c > l && (l = c), (r &= ~a));
            }
            if (
              ((r = l),
              (r = Ce() - r),
              (r =
                (120 > r
                  ? 120
                  : 480 > r
                    ? 480
                    : 1080 > r
                      ? 1080
                      : 1920 > r
                        ? 1920
                        : 3e3 > r
                          ? 3e3
                          : 4320 > r
                            ? 4320
                            : 1960 * uh(r / 1960)) - r),
              10 < r)
            ) {
              e.timeoutHandle = ol(Nn.bind(null, e, be, $t), r);
              break;
            }
            Nn(e, be, $t);
            break;
          case 5:
            Nn(e, be, $t);
            break;
          default:
            throw Error(s(329));
        }
      }
    }
    return (et(e, Ce()), e.callbackNode === n ? dc.bind(null, e) : null);
  }
  function to(e, t) {
    var n = qr;
    return (
      e.current.memoizedState.isDehydrated && (Cn(e, t).flags |= 256),
      (e = is(e, t)),
      e !== 2 && ((t = be), (be = n), t !== null && no(t)),
      e
    );
  }
  function no(e) {
    be === null ? (be = e) : be.push.apply(be, e);
  }
  function ch(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && ((n = n.stores), n !== null))
          for (var r = 0; r < n.length; r++) {
            var l = n[r],
              a = l.getSnapshot;
            l = l.value;
            try {
              if (!wt(a(), l)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
        ((n.return = t), (t = n));
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
    }
    return !0;
  }
  function an(e, t) {
    for (
      t &= ~Gl,
        t &= ~Zi,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes;
      0 < t;
    ) {
      var n = 31 - gt(t),
        r = 1 << n;
      ((e[n] = -1), (t &= ~r));
    }
  }
  function hc(e) {
    if ((se & 6) !== 0) throw Error(s(327));
    rr();
    var t = di(e, 0);
    if ((t & 1) === 0) return (et(e, Ce()), null);
    var n = is(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = Bs(e);
      r !== 0 && ((t = r), (n = to(e, r)));
    }
    if (n === 1) throw ((n = Qr), Cn(e, 0), an(e, t), et(e, Ce()), n);
    if (n === 6) throw Error(s(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      Nn(e, be, $t),
      et(e, Ce()),
      null
    );
  }
  function ro(e, t) {
    var n = se;
    se |= 1;
    try {
      return e(t);
    } finally {
      ((se = n), se === 0 && ((nr = Ce() + 500), Oi && en()));
    }
  }
  function En(e) {
    ln !== null && ln.tag === 0 && (se & 6) === 0 && rr();
    var t = se;
    se |= 1;
    var n = pt.transition,
      r = fe;
    try {
      if (((pt.transition = null), (fe = 1), e)) return e();
    } finally {
      ((fe = r), (pt.transition = n), (se = t), (se & 6) === 0 && en());
    }
  }
  function io() {
    ((at = tr.current), we(tr));
  }
  function Cn(e, t) {
    ((e.finishedWork = null), (e.finishedLanes = 0));
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), Fd(n)), Pe !== null))
      for (n = Pe.return; n !== null; ) {
        var r = n;
        switch ((hl(r), r.tag)) {
          case 1:
            ((r = r.type.childContextTypes), r != null && Ri());
            break;
          case 3:
            (Zn(), we(Xe), we(We), Nl());
            break;
          case 5:
            El(r);
            break;
          case 4:
            Zn();
            break;
          case 13:
            we(Se);
            break;
          case 19:
            we(Se);
            break;
          case 10:
            wl(r.type._context);
            break;
          case 22:
          case 23:
            io();
        }
        n = n.return;
      }
    if (
      ((De = e),
      (Pe = e = un(e.current, null)),
      (Fe = at = t),
      (Le = 0),
      (Qr = null),
      (Gl = Zi = _n = 0),
      (be = qr = null),
      kn !== null)
    ) {
      for (t = 0; t < kn.length; t++)
        if (((n = kn[t]), (r = n.interleaved), r !== null)) {
          n.interleaved = null;
          var l = r.next,
            a = n.pending;
          if (a !== null) {
            var c = a.next;
            ((a.next = l), (r.next = c));
          }
          n.pending = r;
        }
      kn = null;
    }
    return e;
  }
  function pc(e, t) {
    do {
      var n = Pe;
      try {
        if ((gl(), (Vi.current = Qi), $i)) {
          for (var r = xe.memoizedState; r !== null; ) {
            var l = r.queue;
            (l !== null && (l.pending = null), (r = r.next));
          }
          $i = !1;
        }
        if (
          ((xn = 0),
          (ze = Oe = xe = null),
          (Ur = !1),
          (Fr = 0),
          (Xl.current = null),
          n === null || n.return === null)
        ) {
          ((Le = 1), (Qr = t), (Pe = null));
          break;
        }
        e: {
          var a = e,
            c = n.return,
            d = n,
            m = t;
          if (
            ((t = Fe),
            (d.flags |= 32768),
            m !== null && typeof m == "object" && typeof m.then == "function")
          ) {
            var _ = m,
              R = d,
              j = R.tag;
            if ((R.mode & 1) === 0 && (j === 0 || j === 11 || j === 15)) {
              var P = R.alternate;
              P
                ? ((R.updateQueue = P.updateQueue),
                  (R.memoizedState = P.memoizedState),
                  (R.lanes = P.lanes))
                : ((R.updateQueue = null), (R.memoizedState = null));
            }
            var M = Uu(c);
            if (M !== null) {
              ((M.flags &= -257),
                Fu(M, c, d, a, t),
                M.mode & 1 && Mu(a, _, t),
                (t = M),
                (m = _));
              var F = t.updateQueue;
              if (F === null) {
                var V = new Set();
                (V.add(m), (t.updateQueue = V));
              } else F.add(m);
              break e;
            } else {
              if ((t & 1) === 0) {
                (Mu(a, _, t), so());
                break e;
              }
              m = Error(s(426));
            }
          } else if (ke && d.mode & 1) {
            var Ne = Uu(c);
            if (Ne !== null) {
              ((Ne.flags & 65536) === 0 && (Ne.flags |= 256),
                Fu(Ne, c, d, a, t),
                vl(bn(m, d)));
              break e;
            }
          }
          ((a = m = bn(m, d)),
            Le !== 4 && (Le = 2),
            qr === null ? (qr = [a]) : qr.push(a),
            (a = c));
          do {
            switch (a.tag) {
              case 3:
                ((a.flags |= 65536), (t &= -t), (a.lanes |= t));
                var S = Du(a, m, t);
                uu(a, S);
                break e;
              case 1:
                d = m;
                var v = a.type,
                  x = a.stateNode;
                if (
                  (a.flags & 128) === 0 &&
                  (typeof v.getDerivedStateFromError == "function" ||
                    (x !== null &&
                      typeof x.componentDidCatch == "function" &&
                      (sn === null || !sn.has(x))))
                ) {
                  ((a.flags |= 65536), (t &= -t), (a.lanes |= t));
                  var L = Iu(a, d, t);
                  uu(a, L);
                  break e;
                }
            }
            a = a.return;
          } while (a !== null);
        }
        yc(n);
      } catch ($) {
        ((t = $), Pe === n && n !== null && (Pe = n = n.return));
        continue;
      }
      break;
    } while (!0);
  }
  function mc() {
    var e = Gi.current;
    return ((Gi.current = Qi), e === null ? Qi : e);
  }
  function so() {
    ((Le === 0 || Le === 3 || Le === 2) && (Le = 4),
      De === null ||
        ((_n & 268435455) === 0 && (Zi & 268435455) === 0) ||
        an(De, Fe));
  }
  function is(e, t) {
    var n = se;
    se |= 2;
    var r = mc();
    (De !== e || Fe !== t) && (($t = null), Cn(e, t));
    do
      try {
        fh();
        break;
      } catch (l) {
        pc(e, l);
      }
    while (!0);
    if ((gl(), (se = n), (Gi.current = r), Pe !== null)) throw Error(s(261));
    return ((De = null), (Fe = 0), Le);
  }
  function fh() {
    for (; Pe !== null; ) vc(Pe);
  }
  function dh() {
    for (; Pe !== null && !If(); ) vc(Pe);
  }
  function vc(e) {
    var t = kc(e.alternate, e, at);
    ((e.memoizedProps = e.pendingProps),
      t === null ? yc(e) : (Pe = t),
      (Xl.current = null));
  }
  function yc(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (((e = t.return), (t.flags & 32768) === 0)) {
        if (((n = ih(n, t, at)), n !== null)) {
          Pe = n;
          return;
        }
      } else {
        if (((n = sh(n, t)), n !== null)) {
          ((n.flags &= 32767), (Pe = n));
          return;
        }
        if (e !== null)
          ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
        else {
          ((Le = 6), (Pe = null));
          return;
        }
      }
      if (((t = t.sibling), t !== null)) {
        Pe = t;
        return;
      }
      Pe = t = e;
    } while (t !== null);
    Le === 0 && (Le = 5);
  }
  function Nn(e, t, n) {
    var r = fe,
      l = pt.transition;
    try {
      ((pt.transition = null), (fe = 1), hh(e, t, n, r));
    } finally {
      ((pt.transition = l), (fe = r));
    }
    return null;
  }
  function hh(e, t, n, r) {
    do rr();
    while (ln !== null);
    if ((se & 6) !== 0) throw Error(s(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
      throw Error(s(177));
    ((e.callbackNode = null), (e.callbackPriority = 0));
    var a = n.lanes | n.childLanes;
    if (
      (Kf(e, a),
      e === De && ((Pe = De = null), (Fe = 0)),
      ((n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0) ||
        es ||
        ((es = !0),
        Sc(ai, function () {
          return (rr(), null);
        })),
      (a = (n.flags & 15990) !== 0),
      (n.subtreeFlags & 15990) !== 0 || a)
    ) {
      ((a = pt.transition), (pt.transition = null));
      var c = fe;
      fe = 1;
      var d = se;
      ((se |= 4),
        (Xl.current = null),
        oh(e, n),
        oc(n, e),
        Ad(sl),
        (mi = !!il),
        (sl = il = null),
        (e.current = n),
        ah(n),
        Mf(),
        (se = d),
        (fe = c),
        (pt.transition = a));
    } else e.current = n;
    if (
      (es && ((es = !1), (ln = e), (ts = l)),
      (a = e.pendingLanes),
      a === 0 && (sn = null),
      Vf(n.stateNode),
      et(e, Ce()),
      t !== null)
    )
      for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        ((l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest }));
    if (bi) throw ((bi = !1), (e = bl), (bl = null), e);
    return (
      (ts & 1) !== 0 && e.tag !== 0 && rr(),
      (a = e.pendingLanes),
      (a & 1) !== 0 ? (e === eo ? Kr++ : ((Kr = 0), (eo = e))) : (Kr = 0),
      en(),
      null
    );
  }
  function rr() {
    if (ln !== null) {
      var e = sa(ts),
        t = pt.transition,
        n = fe;
      try {
        if (((pt.transition = null), (fe = 16 > e ? 16 : e), ln === null))
          var r = !1;
        else {
          if (((e = ln), (ln = null), (ts = 0), (se & 6) !== 0))
            throw Error(s(331));
          var l = se;
          for (se |= 4, U = e.current; U !== null; ) {
            var a = U,
              c = a.child;
            if ((U.flags & 16) !== 0) {
              var d = a.deletions;
              if (d !== null) {
                for (var m = 0; m < d.length; m++) {
                  var _ = d[m];
                  for (U = _; U !== null; ) {
                    var R = U;
                    switch (R.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Hr(8, R, a);
                    }
                    var j = R.child;
                    if (j !== null) ((j.return = R), (U = j));
                    else
                      for (; U !== null; ) {
                        R = U;
                        var P = R.sibling,
                          M = R.return;
                        if ((nc(R), R === _)) {
                          U = null;
                          break;
                        }
                        if (P !== null) {
                          ((P.return = M), (U = P));
                          break;
                        }
                        U = M;
                      }
                  }
                }
                var F = a.alternate;
                if (F !== null) {
                  var V = F.child;
                  if (V !== null) {
                    F.child = null;
                    do {
                      var Ne = V.sibling;
                      ((V.sibling = null), (V = Ne));
                    } while (V !== null);
                  }
                }
                U = a;
              }
            }
            if ((a.subtreeFlags & 2064) !== 0 && c !== null)
              ((c.return = a), (U = c));
            else
              e: for (; U !== null; ) {
                if (((a = U), (a.flags & 2048) !== 0))
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Hr(9, a, a.return);
                  }
                var S = a.sibling;
                if (S !== null) {
                  ((S.return = a.return), (U = S));
                  break e;
                }
                U = a.return;
              }
          }
          var v = e.current;
          for (U = v; U !== null; ) {
            c = U;
            var x = c.child;
            if ((c.subtreeFlags & 2064) !== 0 && x !== null)
              ((x.return = c), (U = x));
            else
              e: for (c = v; U !== null; ) {
                if (((d = U), (d.flags & 2048) !== 0))
                  try {
                    switch (d.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Xi(9, d);
                    }
                  } catch ($) {
                    _e(d, d.return, $);
                  }
                if (d === c) {
                  U = null;
                  break e;
                }
                var L = d.sibling;
                if (L !== null) {
                  ((L.return = d.return), (U = L));
                  break e;
                }
                U = d.return;
              }
          }
          if (
            ((se = l),
            en(),
            Pt && typeof Pt.onPostCommitFiberRoot == "function")
          )
            try {
              Pt.onPostCommitFiberRoot(ui, e);
            } catch {}
          r = !0;
        }
        return r;
      } finally {
        ((fe = n), (pt.transition = t));
      }
    }
    return !1;
  }
  function gc(e, t, n) {
    ((t = bn(n, t)),
      (t = Du(e, t, 1)),
      (e = nn(e, t, 1)),
      (t = Ye()),
      e !== null && (yr(e, 1, t), et(e, t)));
  }
  function _e(e, t, n) {
    if (e.tag === 3) gc(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          gc(t, e, n);
          break;
        } else if (t.tag === 1) {
          var r = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof r.componentDidCatch == "function" &&
              (sn === null || !sn.has(r)))
          ) {
            ((e = bn(n, e)),
              (e = Iu(t, e, 1)),
              (t = nn(t, e, 1)),
              (e = Ye()),
              t !== null && (yr(t, 1, e), et(t, e)));
            break;
          }
        }
        t = t.return;
      }
  }
  function ph(e, t, n) {
    var r = e.pingCache;
    (r !== null && r.delete(t),
      (t = Ye()),
      (e.pingedLanes |= e.suspendedLanes & n),
      De === e &&
        (Fe & n) === n &&
        (Le === 4 || (Le === 3 && (Fe & 130023424) === Fe && 500 > Ce() - Zl)
          ? Cn(e, 0)
          : (Gl |= n)),
      et(e, t));
  }
  function wc(e, t) {
    t === 0 &&
      ((e.mode & 1) === 0
        ? (t = 1)
        : ((t = fi), (fi <<= 1), (fi & 130023424) === 0 && (fi = 4194304)));
    var n = Ye();
    ((e = Ut(e, t)), e !== null && (yr(e, t, n), et(e, n)));
  }
  function mh(e) {
    var t = e.memoizedState,
      n = 0;
    (t !== null && (n = t.retryLane), wc(e, n));
  }
  function vh(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode,
          l = e.memoizedState;
        l !== null && (n = l.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(s(314));
    }
    (r !== null && r.delete(t), wc(e, n));
  }
  var kc;
  kc = function (e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || Xe.current) Ze = !0;
      else {
        if ((e.lanes & n) === 0 && (t.flags & 128) === 0)
          return ((Ze = !1), rh(e, t, n));
        Ze = (e.flags & 131072) !== 0;
      }
    else ((Ze = !1), ke && (t.flags & 1048576) !== 0 && ba(t, Ai, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var r = t.type;
        (Yi(e, t), (e = t.pendingProps));
        var l = Qn(t, We.current);
        (Gn(t, n), (l = Rl(null, t, r, e, l, n)));
        var a = jl();
        return (
          (t.flags |= 1),
          typeof l == "object" &&
          l !== null &&
          typeof l.render == "function" &&
          l.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              Ge(r) ? ((a = !0), ji(t)) : (a = !1),
              (t.memoizedState =
                l.state !== null && l.state !== void 0 ? l.state : null),
              xl(t),
              (l.updater = qi),
              (t.stateNode = l),
              (l._reactInternals = t),
              Dl(t, r, e, n),
              (t = Fl(null, t, r, !0, a, n)))
            : ((t.tag = 0), ke && a && dl(t), Ke(null, t, l, n), (t = t.child)),
          t
        );
      case 16:
        r = t.elementType;
        e: {
          switch (
            (Yi(e, t),
            (e = t.pendingProps),
            (l = r._init),
            (r = l(r._payload)),
            (t.type = r),
            (l = t.tag = gh(r)),
            (e = St(r, e)),
            l)
          ) {
            case 0:
              t = Ul(null, t, r, e, n);
              break e;
            case 1:
              t = qu(null, t, r, e, n);
              break e;
            case 11:
              t = Vu(null, t, r, e, n);
              break e;
            case 14:
              t = $u(null, t, r, St(r.type, e), n);
              break e;
          }
          throw Error(s(306, r, ""));
        }
        return t;
      case 0:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : St(r, l)),
          Ul(e, t, r, l, n)
        );
      case 1:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : St(r, l)),
          qu(e, t, r, l, n)
        );
      case 3:
        e: {
          if ((Ku(t), e === null)) throw Error(s(387));
          ((r = t.pendingProps),
            (a = t.memoizedState),
            (l = a.element),
            au(e, t),
            Ui(t, r, null, n));
          var c = t.memoizedState;
          if (((r = c.element), a.isDehydrated))
            if (
              ((a = {
                element: r,
                isDehydrated: !1,
                cache: c.cache,
                pendingSuspenseBoundaries: c.pendingSuspenseBoundaries,
                transitions: c.transitions,
              }),
              (t.updateQueue.baseState = a),
              (t.memoizedState = a),
              t.flags & 256)
            ) {
              ((l = bn(Error(s(423)), t)), (t = Yu(e, t, r, n, l)));
              break e;
            } else if (r !== l) {
              ((l = bn(Error(s(424)), t)), (t = Yu(e, t, r, n, l)));
              break e;
            } else
              for (
                ot = Gt(t.stateNode.containerInfo.firstChild),
                  lt = t,
                  ke = !0,
                  kt = null,
                  n = lu(t, null, r, n),
                  t.child = n;
                n;
              )
                ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
          else {
            if ((Yn(), r === l)) {
              t = Vt(e, t, n);
              break e;
            }
            Ke(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          fu(t),
          e === null && ml(t),
          (r = t.type),
          (l = t.pendingProps),
          (a = e !== null ? e.memoizedProps : null),
          (c = l.children),
          ll(r, l) ? (c = null) : a !== null && ll(r, a) && (t.flags |= 32),
          Qu(e, t),
          Ke(e, t, c, n),
          t.child
        );
      case 6:
        return (e === null && ml(t), null);
      case 13:
        return Ju(e, t, n);
      case 4:
        return (
          _l(t, t.stateNode.containerInfo),
          (r = t.pendingProps),
          e === null ? (t.child = Jn(t, null, r, n)) : Ke(e, t, r, n),
          t.child
        );
      case 11:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : St(r, l)),
          Vu(e, t, r, l, n)
        );
      case 7:
        return (Ke(e, t, t.pendingProps, n), t.child);
      case 8:
        return (Ke(e, t, t.pendingProps.children, n), t.child);
      case 12:
        return (Ke(e, t, t.pendingProps.children, n), t.child);
      case 10:
        e: {
          if (
            ((r = t.type._context),
            (l = t.pendingProps),
            (a = t.memoizedProps),
            (c = l.value),
            ve(Di, r._currentValue),
            (r._currentValue = c),
            a !== null)
          )
            if (wt(a.value, c)) {
              if (a.children === l.children && !Xe.current) {
                t = Vt(e, t, n);
                break e;
              }
            } else
              for (a = t.child, a !== null && (a.return = t); a !== null; ) {
                var d = a.dependencies;
                if (d !== null) {
                  c = a.child;
                  for (var m = d.firstContext; m !== null; ) {
                    if (m.context === r) {
                      if (a.tag === 1) {
                        ((m = Ft(-1, n & -n)), (m.tag = 2));
                        var _ = a.updateQueue;
                        if (_ !== null) {
                          _ = _.shared;
                          var R = _.pending;
                          (R === null
                            ? (m.next = m)
                            : ((m.next = R.next), (R.next = m)),
                            (_.pending = m));
                        }
                      }
                      ((a.lanes |= n),
                        (m = a.alternate),
                        m !== null && (m.lanes |= n),
                        kl(a.return, n, t),
                        (d.lanes |= n));
                      break;
                    }
                    m = m.next;
                  }
                } else if (a.tag === 10) c = a.type === t.type ? null : a.child;
                else if (a.tag === 18) {
                  if (((c = a.return), c === null)) throw Error(s(341));
                  ((c.lanes |= n),
                    (d = c.alternate),
                    d !== null && (d.lanes |= n),
                    kl(c, n, t),
                    (c = a.sibling));
                } else c = a.child;
                if (c !== null) c.return = a;
                else
                  for (c = a; c !== null; ) {
                    if (c === t) {
                      c = null;
                      break;
                    }
                    if (((a = c.sibling), a !== null)) {
                      ((a.return = c.return), (c = a));
                      break;
                    }
                    c = c.return;
                  }
                a = c;
              }
          (Ke(e, t, l.children, n), (t = t.child));
        }
        return t;
      case 9:
        return (
          (l = t.type),
          (r = t.pendingProps.children),
          Gn(t, n),
          (l = dt(l)),
          (r = r(l)),
          (t.flags |= 1),
          Ke(e, t, r, n),
          t.child
        );
      case 14:
        return (
          (r = t.type),
          (l = St(r, t.pendingProps)),
          (l = St(r.type, l)),
          $u(e, t, r, l, n)
        );
      case 15:
        return Wu(e, t, t.type, t.pendingProps, n);
      case 17:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : St(r, l)),
          Yi(e, t),
          (t.tag = 1),
          Ge(r) ? ((e = !0), ji(t)) : (e = !1),
          Gn(t, n),
          Bu(t, r, l),
          Dl(t, r, l, n),
          Fl(null, t, r, !0, e, n)
        );
      case 19:
        return Gu(e, t, n);
      case 22:
        return Hu(e, t, n);
    }
    throw Error(s(156, t.tag));
  };
  function Sc(e, t) {
    return ea(e, t);
  }
  function yh(e, t, n, r) {
    ((this.tag = e),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = r),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function mt(e, t, n, r) {
    return new yh(e, t, n, r);
  }
  function lo(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function gh(e) {
    if (typeof e == "function") return lo(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === rt)) return 11;
      if (e === it) return 14;
    }
    return 2;
  }
  function un(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = mt(e.tag, t, e.key, e.mode)),
          (n.elementType = e.elementType),
          (n.type = e.type),
          (n.stateNode = e.stateNode),
          (n.alternate = e),
          (e.alternate = n))
        : ((n.pendingProps = t),
          (n.type = e.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = e.flags & 14680064),
      (n.childLanes = e.childLanes),
      (n.lanes = e.lanes),
      (n.child = e.child),
      (n.memoizedProps = e.memoizedProps),
      (n.memoizedState = e.memoizedState),
      (n.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (n.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (n.sibling = e.sibling),
      (n.index = e.index),
      (n.ref = e.ref),
      n
    );
  }
  function ss(e, t, n, r, l, a) {
    var c = 2;
    if (((r = e), typeof e == "function")) lo(e) && (c = 1);
    else if (typeof e == "string") c = 5;
    else
      e: switch (e) {
        case Ve:
          return Tn(n.children, l, a, t);
        case Ae:
          ((c = 8), (l |= 8));
          break;
        case Nt:
          return (
            (e = mt(12, n, t, l | 2)),
            (e.elementType = Nt),
            (e.lanes = a),
            e
          );
        case Be:
          return (
            (e = mt(13, n, t, l)),
            (e.elementType = Be),
            (e.lanes = a),
            e
          );
        case Me:
          return (
            (e = mt(19, n, t, l)),
            (e.elementType = Me),
            (e.lanes = a),
            e
          );
        case ye:
          return ls(n, l, a, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case Je:
                c = 10;
                break e;
              case yt:
                c = 9;
                break e;
              case rt:
                c = 11;
                break e;
              case it:
                c = 14;
                break e;
              case je:
                ((c = 16), (r = null));
                break e;
            }
          throw Error(s(130, e == null ? e : typeof e, ""));
      }
    return (
      (t = mt(c, n, t, l)),
      (t.elementType = e),
      (t.type = r),
      (t.lanes = a),
      t
    );
  }
  function Tn(e, t, n, r) {
    return ((e = mt(7, e, r, t)), (e.lanes = n), e);
  }
  function ls(e, t, n, r) {
    return (
      (e = mt(22, e, r, t)),
      (e.elementType = ye),
      (e.lanes = n),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function oo(e, t, n) {
    return ((e = mt(6, e, null, t)), (e.lanes = n), e);
  }
  function ao(e, t, n) {
    return (
      (t = mt(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function wh(e, t, n, r, l) {
    ((this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = zs(0)),
      (this.expirationTimes = zs(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = zs(0)),
      (this.identifierPrefix = r),
      (this.onRecoverableError = l),
      (this.mutableSourceEagerHydrationData = null));
  }
  function uo(e, t, n, r, l, a, c, d, m) {
    return (
      (e = new wh(e, t, n, d, m)),
      t === 1 ? ((t = 1), a === !0 && (t |= 8)) : (t = 0),
      (a = mt(3, null, null, t)),
      (e.current = a),
      (a.stateNode = e),
      (a.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      xl(a),
      e
    );
  }
  function kh(e, t, n) {
    var r =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: he,
      key: r == null ? null : "" + r,
      children: e,
      containerInfo: t,
      implementation: n,
    };
  }
  function xc(e) {
    if (!e) return bt;
    e = e._reactInternals;
    e: {
      if (mn(e) !== e || e.tag !== 1) throw Error(s(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (Ge(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(s(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (Ge(n)) return Xa(e, n, t);
    }
    return t;
  }
  function _c(e, t, n, r, l, a, c, d, m) {
    return (
      (e = uo(n, r, !0, e, l, a, c, d, m)),
      (e.context = xc(null)),
      (n = e.current),
      (r = Ye()),
      (l = on(n)),
      (a = Ft(r, l)),
      (a.callback = t ?? null),
      nn(n, a, l),
      (e.current.lanes = l),
      yr(e, l, r),
      et(e, r),
      e
    );
  }
  function os(e, t, n, r) {
    var l = t.current,
      a = Ye(),
      c = on(l);
    return (
      (n = xc(n)),
      t.context === null ? (t.context = n) : (t.pendingContext = n),
      (t = Ft(a, c)),
      (t.payload = { element: e }),
      (r = r === void 0 ? null : r),
      r !== null && (t.callback = r),
      (e = nn(l, t, c)),
      e !== null && (Et(e, l, c, a), Mi(e, l, c)),
      c
    );
  }
  function as(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Ec(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function co(e, t) {
    (Ec(e, t), (e = e.alternate) && Ec(e, t));
  }
  function Sh() {
    return null;
  }
  var Cc =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function fo(e) {
    this._internalRoot = e;
  }
  ((us.prototype.render = fo.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(s(409));
      os(e, t, null, null);
    }),
    (us.prototype.unmount = fo.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (En(function () {
            os(null, e, null, null);
          }),
            (t[zt] = null));
        }
      }));
  function us(e) {
    this._internalRoot = e;
  }
  us.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = aa();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Yt.length && t !== 0 && t < Yt[n].priority; n++);
      (Yt.splice(n, 0, e), n === 0 && fa(e));
    }
  };
  function ho(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function cs(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function Nc() {}
  function xh(e, t, n, r, l) {
    if (l) {
      if (typeof r == "function") {
        var a = r;
        r = function () {
          var _ = as(c);
          a.call(_);
        };
      }
      var c = _c(t, r, e, 0, null, !1, !1, "", Nc);
      return (
        (e._reactRootContainer = c),
        (e[zt] = c.current),
        Or(e.nodeType === 8 ? e.parentNode : e),
        En(),
        c
      );
    }
    for (; (l = e.lastChild); ) e.removeChild(l);
    if (typeof r == "function") {
      var d = r;
      r = function () {
        var _ = as(m);
        d.call(_);
      };
    }
    var m = uo(e, 0, !1, null, null, !1, !1, "", Nc);
    return (
      (e._reactRootContainer = m),
      (e[zt] = m.current),
      Or(e.nodeType === 8 ? e.parentNode : e),
      En(function () {
        os(t, m, n, r);
      }),
      m
    );
  }
  function fs(e, t, n, r, l) {
    var a = n._reactRootContainer;
    if (a) {
      var c = a;
      if (typeof l == "function") {
        var d = l;
        l = function () {
          var m = as(c);
          d.call(m);
        };
      }
      os(t, c, e, l);
    } else c = xh(n, t, e, l, r);
    return as(c);
  }
  ((la = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = vr(t.pendingLanes);
          n !== 0 &&
            (Ds(t, n | 1),
            et(t, Ce()),
            (se & 6) === 0 && ((nr = Ce() + 500), en()));
        }
        break;
      case 13:
        (En(function () {
          var r = Ut(e, 1);
          if (r !== null) {
            var l = Ye();
            Et(r, e, 1, l);
          }
        }),
          co(e, 1));
    }
  }),
    (Is = function (e) {
      if (e.tag === 13) {
        var t = Ut(e, 134217728);
        if (t !== null) {
          var n = Ye();
          Et(t, e, 134217728, n);
        }
        co(e, 134217728);
      }
    }),
    (oa = function (e) {
      if (e.tag === 13) {
        var t = on(e),
          n = Ut(e, t);
        if (n !== null) {
          var r = Ye();
          Et(n, e, t, r);
        }
        co(e, t);
      }
    }),
    (aa = function () {
      return fe;
    }),
    (ua = function (e, t) {
      var n = fe;
      try {
        return ((fe = e), t());
      } finally {
        fe = n;
      }
    }),
    (Rs = function (e, t, n) {
      switch (t) {
        case "input":
          if ((ur(e, n), (t = n.name), n.type === "radio" && t != null)) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll(
                "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
              ),
                t = 0;
              t < n.length;
              t++
            ) {
              var r = n[t];
              if (r !== e && r.form === e.form) {
                var l = Pi(r);
                if (!l) throw Error(s(90));
                (ni(r), ur(r, l));
              }
            }
          }
          break;
        case "textarea":
          me(e, n);
          break;
        case "select":
          ((t = n.value), t != null && z(e, !!n.multiple, t, !1));
      }
    }),
    (Ko = ro),
    (Yo = En));
  var _h = { usingClientEntryPoint: !1, Events: [Br, Wn, Pi, Qo, qo, ro] },
    Yr = {
      findFiberByHostInstance: vn,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    Eh = {
      bundleType: Yr.bundleType,
      version: Yr.version,
      rendererPackageName: Yr.rendererPackageName,
      rendererConfig: Yr.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: oe.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return ((e = Zo(e)), e === null ? null : e.stateNode);
      },
      findFiberByHostInstance: Yr.findFiberByHostInstance || Sh,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ds = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ds.isDisabled && ds.supportsFiber)
      try {
        ((ui = ds.inject(Eh)), (Pt = ds));
      } catch {}
  }
  return (
    (tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = _h),
    (tt.createPortal = function (e, t) {
      var n =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!ho(t)) throw Error(s(200));
      return kh(e, t, null, n);
    }),
    (tt.createRoot = function (e, t) {
      if (!ho(e)) throw Error(s(299));
      var n = !1,
        r = "",
        l = Cc;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
        (t = uo(e, 1, !1, null, null, n, !1, r, l)),
        (e[zt] = t.current),
        Or(e.nodeType === 8 ? e.parentNode : e),
        new fo(t)
      );
    }),
    (tt.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function"
          ? Error(s(188))
          : ((e = Object.keys(e).join(",")), Error(s(268, e)));
      return ((e = Zo(t)), (e = e === null ? null : e.stateNode), e);
    }),
    (tt.flushSync = function (e) {
      return En(e);
    }),
    (tt.hydrate = function (e, t, n) {
      if (!cs(t)) throw Error(s(200));
      return fs(null, e, t, !0, n);
    }),
    (tt.hydrateRoot = function (e, t, n) {
      if (!ho(e)) throw Error(s(405));
      var r = (n != null && n.hydratedSources) || null,
        l = !1,
        a = "",
        c = Cc;
      if (
        (n != null &&
          (n.unstable_strictMode === !0 && (l = !0),
          n.identifierPrefix !== void 0 && (a = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (c = n.onRecoverableError)),
        (t = _c(t, null, e, 1, n ?? null, l, !1, a, c)),
        (e[zt] = t.current),
        Or(e),
        r)
      )
        for (e = 0; e < r.length; e++)
          ((n = r[e]),
            (l = n._getVersion),
            (l = l(n._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [n, l])
              : t.mutableSourceEagerHydrationData.push(n, l));
      return new us(t);
    }),
    (tt.render = function (e, t, n) {
      if (!cs(t)) throw Error(s(200));
      return fs(null, e, t, !1, n);
    }),
    (tt.unmountComponentAtNode = function (e) {
      if (!cs(e)) throw Error(s(40));
      return e._reactRootContainer
        ? (En(function () {
            fs(null, null, e, !1, function () {
              ((e._reactRootContainer = null), (e[zt] = null));
            });
          }),
          !0)
        : !1;
    }),
    (tt.unstable_batchedUpdates = ro),
    (tt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
      if (!cs(n)) throw Error(s(200));
      if (e == null || e._reactInternals === void 0) throw Error(s(38));
      return fs(e, t, n, !1, r);
    }),
    (tt.version = "18.3.1-next-f1338f8080-20240426"),
    tt
  );
}
var Bc;
function tf() {
  if (Bc) return vo.exports;
  Bc = 1;
  function o() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o);
      } catch (i) {
        console.error(i);
      }
  }
  return (o(), (vo.exports = Ah()), vo.exports);
}
var zc;
function Bh() {
  if (zc) return hs;
  zc = 1;
  var o = tf();
  return ((hs.createRoot = o.createRoot), (hs.hydrateRoot = o.hydrateRoot), hs);
}
var zh = Bh();
const Dh = bc(zh);
tf();
/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Zr() {
  return (
    (Zr = Object.assign
      ? Object.assign.bind()
      : function (o) {
          for (var i = 1; i < arguments.length; i++) {
            var s = arguments[i];
            for (var u in s) ({}).hasOwnProperty.call(s, u) && (o[u] = s[u]);
          }
          return o;
        }),
    Zr.apply(null, arguments)
  );
}
var fn;
(function (o) {
  ((o.Pop = "POP"), (o.Push = "PUSH"), (o.Replace = "REPLACE"));
})(fn || (fn = {}));
const Dc = "popstate";
function Ih(o) {
  o === void 0 && (o = {});
  function i(u, f) {
    let { pathname: h, search: y, hash: g } = u.location;
    return _o(
      "",
      { pathname: h, search: y, hash: g },
      (f.state && f.state.usr) || null,
      (f.state && f.state.key) || "default",
    );
  }
  function s(u, f) {
    return typeof f == "string" ? f : Ss(f);
  }
  return Uh(i, s, null, o);
}
function Te(o, i) {
  if (o === !1 || o === null || typeof o > "u") throw new Error(i);
}
function nf(o, i) {
  if (!o) {
    typeof console < "u" && console.warn(i);
    try {
      throw new Error(i);
    } catch {}
  }
}
function Mh() {
  return Math.random().toString(36).substr(2, 8);
}
function Ic(o, i) {
  return { usr: o.state, key: o.key, idx: i };
}
function _o(o, i, s, u) {
  return (
    s === void 0 && (s = null),
    Zr(
      { pathname: typeof o == "string" ? o : o.pathname, search: "", hash: "" },
      typeof i == "string" ? ir(i) : i,
      { state: s, key: (i && i.key) || u || Mh() },
    )
  );
}
function Ss(o) {
  let { pathname: i = "/", search: s = "", hash: u = "" } = o;
  return (
    s && s !== "?" && (i += s.charAt(0) === "?" ? s : "?" + s),
    u && u !== "#" && (i += u.charAt(0) === "#" ? u : "#" + u),
    i
  );
}
function ir(o) {
  let i = {};
  if (o) {
    let s = o.indexOf("#");
    s >= 0 && ((i.hash = o.substr(s)), (o = o.substr(0, s)));
    let u = o.indexOf("?");
    (u >= 0 && ((i.search = o.substr(u)), (o = o.substr(0, u))),
      o && (i.pathname = o));
  }
  return i;
}
function Uh(o, i, s, u) {
  u === void 0 && (u = {});
  let { window: f = document.defaultView, v5Compat: h = !1 } = u,
    y = f.history,
    g = fn.Pop,
    k = null,
    C = O();
  C == null && ((C = 0), y.replaceState(Zr({}, y.state, { idx: C }), ""));
  function O() {
    return (y.state || { idx: null }).idx;
  }
  function E() {
    g = fn.Pop;
    let B = O(),
      te = B == null ? null : B - C;
    ((C = B), k && k({ action: g, location: H.location, delta: te }));
  }
  function A(B, te) {
    g = fn.Push;
    let ie = _o(H.location, B, te);
    C = O() + 1;
    let le = Ic(ie, C),
      oe = H.createHref(ie);
    try {
      y.pushState(le, "", oe);
    } catch (Ee) {
      if (Ee instanceof DOMException && Ee.name === "DataCloneError") throw Ee;
      f.location.assign(oe);
    }
    h && k && k({ action: g, location: H.location, delta: 1 });
  }
  function Y(B, te) {
    g = fn.Replace;
    let ie = _o(H.location, B, te);
    C = O();
    let le = Ic(ie, C),
      oe = H.createHref(ie);
    (y.replaceState(le, "", oe),
      h && k && k({ action: g, location: H.location, delta: 0 }));
  }
  function ee(B) {
    let te = f.location.origin !== "null" ? f.location.origin : f.location.href,
      ie = typeof B == "string" ? B : Ss(B);
    return (
      (ie = ie.replace(/ $/, "%20")),
      Te(
        te,
        "No window.location.(origin|href) available to create URL for href: " +
          ie,
      ),
      new URL(ie, te)
    );
  }
  let H = {
    get action() {
      return g;
    },
    get location() {
      return o(f, y);
    },
    listen(B) {
      if (k) throw new Error("A history only accepts one active listener");
      return (
        f.addEventListener(Dc, E),
        (k = B),
        () => {
          (f.removeEventListener(Dc, E), (k = null));
        }
      );
    },
    createHref(B) {
      return i(f, B);
    },
    createURL: ee,
    encodeLocation(B) {
      let te = ee(B);
      return { pathname: te.pathname, search: te.search, hash: te.hash };
    },
    push: A,
    replace: Y,
    go(B) {
      return y.go(B);
    },
  };
  return H;
}
var Mc;
(function (o) {
  ((o.data = "data"),
    (o.deferred = "deferred"),
    (o.redirect = "redirect"),
    (o.error = "error"));
})(Mc || (Mc = {}));
function Fh(o, i, s) {
  return (s === void 0 && (s = "/"), Vh(o, i, s));
}
function Vh(o, i, s, u) {
  let f = typeof i == "string" ? ir(i) : i,
    h = Lo(f.pathname || "/", s);
  if (h == null) return null;
  let y = rf(o);
  $h(y);
  let g = null,
    k = ep(h);
  for (let C = 0; g == null && C < y.length; ++C) g = Gh(y[C], k);
  return g;
}
function rf(o, i, s, u) {
  (i === void 0 && (i = []),
    s === void 0 && (s = []),
    u === void 0 && (u = ""));
  let f = (h, y, g) => {
    let k = {
      relativePath: g === void 0 ? h.path || "" : g,
      caseSensitive: h.caseSensitive === !0,
      childrenIndex: y,
      route: h,
    };
    k.relativePath.startsWith("/") &&
      (Te(
        k.relativePath.startsWith(u),
        'Absolute route path "' +
          k.relativePath +
          '" nested under path ' +
          ('"' + u + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes.",
      ),
      (k.relativePath = k.relativePath.slice(u.length)));
    let C = dn([u, k.relativePath]),
      O = s.concat(k);
    (h.children &&
      h.children.length > 0 &&
      (Te(
        h.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + C + '".'),
      ),
      rf(h.children, i, O, C)),
      !(h.path == null && !h.index) &&
        i.push({ path: C, score: Jh(C, h.index), routesMeta: O }));
  };
  return (
    o.forEach((h, y) => {
      var g;
      if (h.path === "" || !((g = h.path) != null && g.includes("?"))) f(h, y);
      else for (let k of sf(h.path)) f(h, y, k);
    }),
    i
  );
}
function sf(o) {
  let i = o.split("/");
  if (i.length === 0) return [];
  let [s, ...u] = i,
    f = s.endsWith("?"),
    h = s.replace(/\?$/, "");
  if (u.length === 0) return f ? [h, ""] : [h];
  let y = sf(u.join("/")),
    g = [];
  return (
    g.push(...y.map((k) => (k === "" ? h : [h, k].join("/")))),
    f && g.push(...y),
    g.map((k) => (o.startsWith("/") && k === "" ? "/" : k))
  );
}
function $h(o) {
  o.sort((i, s) =>
    i.score !== s.score
      ? s.score - i.score
      : Xh(
          i.routesMeta.map((u) => u.childrenIndex),
          s.routesMeta.map((u) => u.childrenIndex),
        ),
  );
}
const Wh = /^:[\w-]+$/,
  Hh = 3,
  Qh = 2,
  qh = 1,
  Kh = 10,
  Yh = -2,
  Uc = (o) => o === "*";
function Jh(o, i) {
  let s = o.split("/"),
    u = s.length;
  return (
    s.some(Uc) && (u += Yh),
    i && (u += Qh),
    s
      .filter((f) => !Uc(f))
      .reduce((f, h) => f + (Wh.test(h) ? Hh : h === "" ? qh : Kh), u)
  );
}
function Xh(o, i) {
  return o.length === i.length && o.slice(0, -1).every((u, f) => u === i[f])
    ? o[o.length - 1] - i[i.length - 1]
    : 0;
}
function Gh(o, i, s) {
  let { routesMeta: u } = o,
    f = {},
    h = "/",
    y = [];
  for (let g = 0; g < u.length; ++g) {
    let k = u[g],
      C = g === u.length - 1,
      O = h === "/" ? i : i.slice(h.length) || "/",
      E = Zh(
        { path: k.relativePath, caseSensitive: k.caseSensitive, end: C },
        O,
      ),
      A = k.route;
    if (!E) return null;
    (Object.assign(f, E.params),
      y.push({
        params: f,
        pathname: dn([h, E.pathname]),
        pathnameBase: rp(dn([h, E.pathnameBase])),
        route: A,
      }),
      E.pathnameBase !== "/" && (h = dn([h, E.pathnameBase])));
  }
  return y;
}
function Zh(o, i) {
  typeof o == "string" && (o = { path: o, caseSensitive: !1, end: !0 });
  let [s, u] = bh(o.path, o.caseSensitive, o.end),
    f = i.match(s);
  if (!f) return null;
  let h = f[0],
    y = h.replace(/(.)\/+$/, "$1"),
    g = f.slice(1);
  return {
    params: u.reduce((C, O, E) => {
      let { paramName: A, isOptional: Y } = O;
      if (A === "*") {
        let H = g[E] || "";
        y = h.slice(0, h.length - H.length).replace(/(.)\/+$/, "$1");
      }
      const ee = g[E];
      return (
        Y && !ee ? (C[A] = void 0) : (C[A] = (ee || "").replace(/%2F/g, "/")),
        C
      );
    }, {}),
    pathname: h,
    pathnameBase: y,
    pattern: o,
  };
}
function bh(o, i, s) {
  (i === void 0 && (i = !1),
    s === void 0 && (s = !0),
    nf(
      o === "*" || !o.endsWith("*") || o.endsWith("/*"),
      'Route path "' +
        o +
        '" will be treated as if it were ' +
        ('"' + o.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + o.replace(/\*$/, "/*") + '".'),
    ));
  let u = [],
    f =
      "^" +
      o
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (y, g, k) => (
            u.push({ paramName: g, isOptional: k != null }),
            k ? "/?([^\\/]+)?" : "/([^\\/]+)"
          ),
        );
  return (
    o.endsWith("*")
      ? (u.push({ paramName: "*" }),
        (f += o === "*" || o === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : s
        ? (f += "\\/*$")
        : o !== "" && o !== "/" && (f += "(?:(?=\\/|$))"),
    [new RegExp(f, i ? void 0 : "i"), u]
  );
}
function ep(o) {
  try {
    return o
      .split("/")
      .map((i) => decodeURIComponent(i).replace(/\//g, "%2F"))
      .join("/");
  } catch (i) {
    return (
      nf(
        !1,
        'The URL path "' +
          o +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + i + ")."),
      ),
      o
    );
  }
}
function Lo(o, i) {
  if (i === "/") return o;
  if (!o.toLowerCase().startsWith(i.toLowerCase())) return null;
  let s = i.endsWith("/") ? i.length - 1 : i.length,
    u = o.charAt(s);
  return u && u !== "/" ? null : o.slice(s) || "/";
}
function tp(o, i) {
  i === void 0 && (i = "/");
  let {
      pathname: s,
      search: u = "",
      hash: f = "",
    } = typeof o == "string" ? ir(o) : o,
    h;
  return (
    s
      ? ((s = lf(s)),
        s.startsWith("/") ? (h = Fc(s.substring(1), "/")) : (h = Fc(s, i)))
      : (h = i),
    { pathname: h, search: ip(u), hash: sp(f) }
  );
}
function Fc(o, i) {
  let s = i.replace(/\/+$/, "").split("/");
  return (
    o.split("/").forEach((f) => {
      f === ".." ? s.length > 1 && s.pop() : f !== "." && s.push(f);
    }),
    s.length > 1 ? s.join("/") : "/"
  );
}
function wo(o, i, s, u) {
  return (
    "Cannot include a '" +
    o +
    "' character in a manually specified " +
    ("`to." +
      i +
      "` field [" +
      JSON.stringify(u) +
      "].  Please separate it out to the ") +
    ("`to." + s + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function np(o) {
  return o.filter(
    (i, s) => s === 0 || (i.route.path && i.route.path.length > 0),
  );
}
function Ao(o, i) {
  let s = np(o);
  return i
    ? s.map((u, f) => (f === s.length - 1 ? u.pathname : u.pathnameBase))
    : s.map((u) => u.pathnameBase);
}
function Bo(o, i, s, u) {
  u === void 0 && (u = !1);
  let f;
  typeof o == "string"
    ? (f = ir(o))
    : ((f = Zr({}, o)),
      Te(
        !f.pathname || !f.pathname.includes("?"),
        wo("?", "pathname", "search", f),
      ),
      Te(
        !f.pathname || !f.pathname.includes("#"),
        wo("#", "pathname", "hash", f),
      ),
      Te(!f.search || !f.search.includes("#"), wo("#", "search", "hash", f)));
  let h = o === "" || f.pathname === "",
    y = h ? "/" : f.pathname,
    g;
  if (y == null) g = s;
  else {
    let E = i.length - 1;
    if (!u && y.startsWith("..")) {
      let A = y.split("/");
      for (; A[0] === ".."; ) (A.shift(), (E -= 1));
      f.pathname = A.join("/");
    }
    g = E >= 0 ? i[E] : "/";
  }
  let k = tp(f, g),
    C = y && y !== "/" && y.endsWith("/"),
    O = (h || y === ".") && s.endsWith("/");
  return (!k.pathname.endsWith("/") && (C || O) && (k.pathname += "/"), k);
}
const lf = (o) => o.replace(/\/\/+/g, "/"),
  dn = (o) => lf(o.join("/")),
  rp = (o) => o.replace(/\/+$/, "").replace(/^\/*/, "/"),
  ip = (o) => (!o || o === "?" ? "" : o.startsWith("?") ? o : "?" + o),
  sp = (o) => (!o || o === "#" ? "" : o.startsWith("#") ? o : "#" + o);
function lp(o) {
  return (
    o != null &&
    typeof o.status == "number" &&
    typeof o.statusText == "string" &&
    typeof o.internal == "boolean" &&
    "data" in o
  );
}
const of = ["post", "put", "patch", "delete"];
new Set(of);
const op = ["get", ...of];
new Set(op);
/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function br() {
  return (
    (br = Object.assign
      ? Object.assign.bind()
      : function (o) {
          for (var i = 1; i < arguments.length; i++) {
            var s = arguments[i];
            for (var u in s) ({}).hasOwnProperty.call(s, u) && (o[u] = s[u]);
          }
          return o;
        }),
    br.apply(null, arguments)
  );
}
const zo = N.createContext(null),
  ap = N.createContext(null),
  pn = N.createContext(null),
  xs = N.createContext(null),
  Wt = N.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  af = N.createContext(null);
function up(o, i) {
  let { relative: s } = i === void 0 ? {} : i;
  sr() || Te(!1);
  let { basename: u, navigator: f } = N.useContext(pn),
    { hash: h, pathname: y, search: g } = cf(o, { relative: s }),
    k = y;
  return (
    u !== "/" && (k = y === "/" ? u : dn([u, y])),
    f.createHref({ pathname: k, search: g, hash: h })
  );
}
function sr() {
  return N.useContext(xs) != null;
}
function ei() {
  return (sr() || Te(!1), N.useContext(xs).location);
}
function uf(o) {
  N.useContext(pn).static || N.useLayoutEffect(o);
}
function Rn() {
  let { isDataRoute: o } = N.useContext(Wt);
  return o ? _p() : cp();
}
function cp() {
  sr() || Te(!1);
  let o = N.useContext(zo),
    { basename: i, future: s, navigator: u } = N.useContext(pn),
    { matches: f } = N.useContext(Wt),
    { pathname: h } = ei(),
    y = JSON.stringify(Ao(f, s.v7_relativeSplatPath)),
    g = N.useRef(!1);
  return (
    uf(() => {
      g.current = !0;
    }),
    N.useCallback(
      function (C, O) {
        if ((O === void 0 && (O = {}), !g.current)) return;
        if (typeof C == "number") {
          u.go(C);
          return;
        }
        let E = Bo(C, JSON.parse(y), h, O.relative === "path");
        (o == null &&
          i !== "/" &&
          (E.pathname = E.pathname === "/" ? i : dn([i, E.pathname])),
          (O.replace ? u.replace : u.push)(E, O.state, O));
      },
      [i, u, y, h, o],
    )
  );
}
function fp() {
  let { matches: o } = N.useContext(Wt),
    i = o[o.length - 1];
  return i ? i.params : {};
}
function cf(o, i) {
  let { relative: s } = i === void 0 ? {} : i,
    { future: u } = N.useContext(pn),
    { matches: f } = N.useContext(Wt),
    { pathname: h } = ei(),
    y = JSON.stringify(Ao(f, u.v7_relativeSplatPath));
  return N.useMemo(() => Bo(o, JSON.parse(y), h, s === "path"), [o, y, h, s]);
}
function dp(o, i) {
  return hp(o, i);
}
function hp(o, i, s, u) {
  sr() || Te(!1);
  let { navigator: f } = N.useContext(pn),
    { matches: h } = N.useContext(Wt),
    y = h[h.length - 1],
    g = y ? y.params : {};
  y && y.pathname;
  let k = y ? y.pathnameBase : "/";
  y && y.route;
  let C = ei(),
    O;
  if (i) {
    var E;
    let B = typeof i == "string" ? ir(i) : i;
    (k === "/" || ((E = B.pathname) != null && E.startsWith(k)) || Te(!1),
      (O = B));
  } else O = C;
  let A = O.pathname || "/",
    Y = A;
  if (k !== "/") {
    let B = k.replace(/^\//, "").split("/");
    Y = "/" + A.replace(/^\//, "").split("/").slice(B.length).join("/");
  }
  let ee = Fh(o, { pathname: Y }),
    H = gp(
      ee &&
        ee.map((B) =>
          Object.assign({}, B, {
            params: Object.assign({}, g, B.params),
            pathname: dn([
              k,
              f.encodeLocation
                ? f.encodeLocation(B.pathname).pathname
                : B.pathname,
            ]),
            pathnameBase:
              B.pathnameBase === "/"
                ? k
                : dn([
                    k,
                    f.encodeLocation
                      ? f.encodeLocation(B.pathnameBase).pathname
                      : B.pathnameBase,
                  ]),
          }),
        ),
      h,
      s,
      u,
    );
  return i && H
    ? N.createElement(
        xs.Provider,
        {
          value: {
            location: br(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              O,
            ),
            navigationType: fn.Pop,
          },
        },
        H,
      )
    : H;
}
function pp() {
  let o = xp(),
    i = lp(o)
      ? o.status + " " + o.statusText
      : o instanceof Error
        ? o.message
        : JSON.stringify(o),
    s = o instanceof Error ? o.stack : null,
    f = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return N.createElement(
    N.Fragment,
    null,
    N.createElement("h2", null, "Unexpected Application Error!"),
    N.createElement("h3", { style: { fontStyle: "italic" } }, i),
    s ? N.createElement("pre", { style: f }, s) : null,
    null,
  );
}
const mp = N.createElement(pp, null);
class vp extends N.Component {
  constructor(i) {
    (super(i),
      (this.state = {
        location: i.location,
        revalidation: i.revalidation,
        error: i.error,
      }));
  }
  static getDerivedStateFromError(i) {
    return { error: i };
  }
  static getDerivedStateFromProps(i, s) {
    return s.location !== i.location ||
      (s.revalidation !== "idle" && i.revalidation === "idle")
      ? { error: i.error, location: i.location, revalidation: i.revalidation }
      : {
          error: i.error !== void 0 ? i.error : s.error,
          location: s.location,
          revalidation: i.revalidation || s.revalidation,
        };
  }
  componentDidCatch(i, s) {
    console.error(
      "React Router caught the following error during render",
      i,
      s,
    );
  }
  render() {
    return this.state.error !== void 0
      ? N.createElement(
          Wt.Provider,
          { value: this.props.routeContext },
          N.createElement(af.Provider, {
            value: this.state.error,
            children: this.props.component,
          }),
        )
      : this.props.children;
  }
}
function yp(o) {
  let { routeContext: i, match: s, children: u } = o,
    f = N.useContext(zo);
  return (
    f &&
      f.static &&
      f.staticContext &&
      (s.route.errorElement || s.route.ErrorBoundary) &&
      (f.staticContext._deepestRenderedBoundaryId = s.route.id),
    N.createElement(Wt.Provider, { value: i }, u)
  );
}
function gp(o, i, s, u) {
  var f;
  if (
    (i === void 0 && (i = []),
    s === void 0 && (s = null),
    u === void 0 && (u = null),
    o == null)
  ) {
    var h;
    if (!s) return null;
    if (s.errors) o = s.matches;
    else if (
      (h = u) != null &&
      h.v7_partialHydration &&
      i.length === 0 &&
      !s.initialized &&
      s.matches.length > 0
    )
      o = s.matches;
    else return null;
  }
  let y = o,
    g = (f = s) == null ? void 0 : f.errors;
  if (g != null) {
    let O = y.findIndex(
      (E) => E.route.id && (g == null ? void 0 : g[E.route.id]) !== void 0,
    );
    (O >= 0 || Te(!1), (y = y.slice(0, Math.min(y.length, O + 1))));
  }
  let k = !1,
    C = -1;
  if (s && u && u.v7_partialHydration)
    for (let O = 0; O < y.length; O++) {
      let E = y[O];
      if (
        ((E.route.HydrateFallback || E.route.hydrateFallbackElement) && (C = O),
        E.route.id)
      ) {
        let { loaderData: A, errors: Y } = s,
          ee =
            E.route.loader &&
            A[E.route.id] === void 0 &&
            (!Y || Y[E.route.id] === void 0);
        if (E.route.lazy || ee) {
          ((k = !0), C >= 0 ? (y = y.slice(0, C + 1)) : (y = [y[0]]));
          break;
        }
      }
    }
  return y.reduceRight((O, E, A) => {
    let Y,
      ee = !1,
      H = null,
      B = null;
    s &&
      ((Y = g && E.route.id ? g[E.route.id] : void 0),
      (H = E.route.errorElement || mp),
      k &&
        (C < 0 && A === 0
          ? (Ep("route-fallback"), (ee = !0), (B = null))
          : C === A &&
            ((ee = !0), (B = E.route.hydrateFallbackElement || null))));
    let te = i.concat(y.slice(0, A + 1)),
      ie = () => {
        let le;
        return (
          Y
            ? (le = H)
            : ee
              ? (le = B)
              : E.route.Component
                ? (le = N.createElement(E.route.Component, null))
                : E.route.element
                  ? (le = E.route.element)
                  : (le = O),
          N.createElement(yp, {
            match: E,
            routeContext: { outlet: O, matches: te, isDataRoute: s != null },
            children: le,
          })
        );
      };
    return s && (E.route.ErrorBoundary || E.route.errorElement || A === 0)
      ? N.createElement(vp, {
          location: s.location,
          revalidation: s.revalidation,
          component: H,
          error: Y,
          children: ie(),
          routeContext: { outlet: null, matches: te, isDataRoute: !0 },
        })
      : ie();
  }, null);
}
var ff = (function (o) {
    return (
      (o.UseBlocker = "useBlocker"),
      (o.UseRevalidator = "useRevalidator"),
      (o.UseNavigateStable = "useNavigate"),
      o
    );
  })(ff || {}),
  df = (function (o) {
    return (
      (o.UseBlocker = "useBlocker"),
      (o.UseLoaderData = "useLoaderData"),
      (o.UseActionData = "useActionData"),
      (o.UseRouteError = "useRouteError"),
      (o.UseNavigation = "useNavigation"),
      (o.UseRouteLoaderData = "useRouteLoaderData"),
      (o.UseMatches = "useMatches"),
      (o.UseRevalidator = "useRevalidator"),
      (o.UseNavigateStable = "useNavigate"),
      (o.UseRouteId = "useRouteId"),
      o
    );
  })(df || {});
function wp(o) {
  let i = N.useContext(zo);
  return (i || Te(!1), i);
}
function kp(o) {
  let i = N.useContext(ap);
  return (i || Te(!1), i);
}
function Sp(o) {
  let i = N.useContext(Wt);
  return (i || Te(!1), i);
}
function hf(o) {
  let i = Sp(),
    s = i.matches[i.matches.length - 1];
  return (s.route.id || Te(!1), s.route.id);
}
function xp() {
  var o;
  let i = N.useContext(af),
    s = kp(),
    u = hf();
  return i !== void 0 ? i : (o = s.errors) == null ? void 0 : o[u];
}
function _p() {
  let { router: o } = wp(ff.UseNavigateStable),
    i = hf(df.UseNavigateStable),
    s = N.useRef(!1);
  return (
    uf(() => {
      s.current = !0;
    }),
    N.useCallback(
      function (f, h) {
        (h === void 0 && (h = {}),
          s.current &&
            (typeof f == "number"
              ? o.navigate(f)
              : o.navigate(f, br({ fromRouteId: i }, h))));
      },
      [o, i],
    )
  );
}
const Vc = {};
function Ep(o, i, s) {
  Vc[o] || (Vc[o] = !0);
}
function Cp(o, i) {
  (o == null || o.v7_startTransition, o == null || o.v7_relativeSplatPath);
}
function Np(o) {
  let { to: i, replace: s, state: u, relative: f } = o;
  sr() || Te(!1);
  let { future: h, static: y } = N.useContext(pn),
    { matches: g } = N.useContext(Wt),
    { pathname: k } = ei(),
    C = Rn(),
    O = Bo(i, Ao(g, h.v7_relativeSplatPath), k, f === "path"),
    E = JSON.stringify(O);
  return (
    N.useEffect(
      () => C(JSON.parse(E), { replace: s, state: u, relative: f }),
      [C, E, f, s, u],
    ),
    null
  );
}
function Pn(o) {
  Te(!1);
}
function Tp(o) {
  let {
    basename: i = "/",
    children: s = null,
    location: u,
    navigationType: f = fn.Pop,
    navigator: h,
    static: y = !1,
    future: g,
  } = o;
  sr() && Te(!1);
  let k = i.replace(/^\/*/, "/"),
    C = N.useMemo(
      () => ({
        basename: k,
        navigator: h,
        static: y,
        future: br({ v7_relativeSplatPath: !1 }, g),
      }),
      [k, g, h, y],
    );
  typeof u == "string" && (u = ir(u));
  let {
      pathname: O = "/",
      search: E = "",
      hash: A = "",
      state: Y = null,
      key: ee = "default",
    } = u,
    H = N.useMemo(() => {
      let B = Lo(O, k);
      return B == null
        ? null
        : {
            location: { pathname: B, search: E, hash: A, state: Y, key: ee },
            navigationType: f,
          };
    }, [k, O, E, A, Y, ee, f]);
  return H == null
    ? null
    : N.createElement(
        pn.Provider,
        { value: C },
        N.createElement(xs.Provider, { children: s, value: H }),
      );
}
function Pp(o) {
  let { children: i, location: s } = o;
  return dp(Eo(i), s);
}
new Promise(() => {});
function Eo(o, i) {
  i === void 0 && (i = []);
  let s = [];
  return (
    N.Children.forEach(o, (u, f) => {
      if (!N.isValidElement(u)) return;
      let h = [...i, f];
      if (u.type === N.Fragment) {
        s.push.apply(s, Eo(u.props.children, h));
        return;
      }
      (u.type !== Pn && Te(!1), !u.props.index || !u.props.children || Te(!1));
      let y = {
        id: u.props.id || h.join("-"),
        caseSensitive: u.props.caseSensitive,
        element: u.props.element,
        Component: u.props.Component,
        index: u.props.index,
        path: u.props.path,
        loader: u.props.loader,
        action: u.props.action,
        errorElement: u.props.errorElement,
        ErrorBoundary: u.props.ErrorBoundary,
        hasErrorBoundary:
          u.props.ErrorBoundary != null || u.props.errorElement != null,
        shouldRevalidate: u.props.shouldRevalidate,
        handle: u.props.handle,
        lazy: u.props.lazy,
      };
      (u.props.children && (y.children = Eo(u.props.children, h)), s.push(y));
    }),
    s
  );
}
/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Co() {
  return (
    (Co = Object.assign
      ? Object.assign.bind()
      : function (o) {
          for (var i = 1; i < arguments.length; i++) {
            var s = arguments[i];
            for (var u in s) ({}).hasOwnProperty.call(s, u) && (o[u] = s[u]);
          }
          return o;
        }),
    Co.apply(null, arguments)
  );
}
function Rp(o, i) {
  if (o == null) return {};
  var s = {};
  for (var u in o)
    if ({}.hasOwnProperty.call(o, u)) {
      if (i.indexOf(u) !== -1) continue;
      s[u] = o[u];
    }
  return s;
}
function jp(o) {
  return !!(o.metaKey || o.altKey || o.ctrlKey || o.shiftKey);
}
function Op(o, i) {
  return o.button === 0 && (!i || i === "_self") && !jp(o);
}
const Lp = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "viewTransition",
  ],
  Ap = "6";
try {
  window.__reactRouterVersion = Ap;
} catch {}
const Bp = "startTransition",
  $c = jh[Bp];
function zp(o) {
  let { basename: i, children: s, future: u, window: f } = o,
    h = N.useRef();
  h.current == null && (h.current = Ih({ window: f, v5Compat: !0 }));
  let y = h.current,
    [g, k] = N.useState({ action: y.action, location: y.location }),
    { v7_startTransition: C } = u || {},
    O = N.useCallback(
      (E) => {
        C && $c ? $c(() => k(E)) : k(E);
      },
      [k, C],
    );
  return (
    N.useLayoutEffect(() => y.listen(O), [y, O]),
    N.useEffect(() => Cp(u), [u]),
    N.createElement(Tp, {
      basename: i,
      children: s,
      location: g.location,
      navigationType: g.action,
      navigator: y,
      future: u,
    })
  );
}
const Dp =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  Ip = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  ti = N.forwardRef(function (i, s) {
    let {
        onClick: u,
        relative: f,
        reloadDocument: h,
        replace: y,
        state: g,
        target: k,
        to: C,
        preventScrollReset: O,
        viewTransition: E,
      } = i,
      A = Rp(i, Lp),
      { basename: Y } = N.useContext(pn),
      ee,
      H = !1;
    if (typeof C == "string" && Ip.test(C) && ((ee = C), Dp))
      try {
        let le = new URL(window.location.href),
          oe = C.startsWith("//") ? new URL(le.protocol + C) : new URL(C),
          Ee = Lo(oe.pathname, Y);
        oe.origin === le.origin && Ee != null
          ? (C = Ee + oe.search + oe.hash)
          : (H = !0);
      } catch {}
    let B = up(C, { relative: f }),
      te = Mp(C, {
        replace: y,
        state: g,
        target: k,
        preventScrollReset: O,
        relative: f,
        viewTransition: E,
      });
    function ie(le) {
      (u && u(le), le.defaultPrevented || te(le));
    }
    return N.createElement(
      "a",
      Co({}, A, { href: ee || B, onClick: H || h ? u : ie, ref: s, target: k }),
    );
  });
var Wc;
(function (o) {
  ((o.UseScrollRestoration = "useScrollRestoration"),
    (o.UseSubmit = "useSubmit"),
    (o.UseSubmitFetcher = "useSubmitFetcher"),
    (o.UseFetcher = "useFetcher"),
    (o.useViewTransitionState = "useViewTransitionState"));
})(Wc || (Wc = {}));
var Hc;
(function (o) {
  ((o.UseFetcher = "useFetcher"),
    (o.UseFetchers = "useFetchers"),
    (o.UseScrollRestoration = "useScrollRestoration"));
})(Hc || (Hc = {}));
function Mp(o, i) {
  let {
      target: s,
      replace: u,
      state: f,
      preventScrollReset: h,
      relative: y,
      viewTransition: g,
    } = i === void 0 ? {} : i,
    k = Rn(),
    C = ei(),
    O = cf(o, { relative: y });
  return N.useCallback(
    (E) => {
      if (Op(E, s)) {
        E.preventDefault();
        let A = u !== void 0 ? u : Ss(C) === Ss(O);
        k(o, {
          replace: A,
          state: f,
          preventScrollReset: h,
          relative: y,
          viewTransition: g,
        });
      }
    },
    [C, k, O, u, f, s, o, h, y, g],
  );
}
const Up = (() => {
  const i = "http://localhost:5000/api".trim().replace(/\/+$/, "");
  return i.endsWith("/api") ? i : `${i}/api`;
})();
function pf() {
  if (typeof window > "u") return null;
  try {
    const o = window.localStorage.getItem("task-board-session");
    return o ? JSON.parse(o) : null;
  } catch {
    return null;
  }
}
function Qc(o) {
  if (!(typeof window > "u")) {
    if (!o) {
      window.localStorage.removeItem("task-board-session");
      return;
    }
    window.localStorage.setItem("task-board-session", JSON.stringify(o));
  }
}
async function nt(o, i = {}) {
  const s = pf(),
    u = s == null ? void 0 : s.token,
    f = await fetch(`${Up}${o}`, {
      ...i,
      headers: {
        "Content-Type": "application/json",
        ...(u ? { Authorization: `Bearer ${u}` } : {}),
        ...(i.headers || {}),
      },
    }),
    h = await f.text(),
    y = h ? JSON.parse(h) : {};
  if (!f.ok) throw new Error(y.message || "Request failed");
  return y;
}
const mf = N.createContext(null);
function Fp({ children: o }) {
  const [i, s] = N.useState(null),
    [u, f] = N.useState(null),
    [h, y] = N.useState(!1);
  N.useEffect(() => {
    const A = pf();
    (A != null && A.user && A != null && A.token && (s(A.user), f(A.token)),
      y(!0));
  }, []);
  const g = (A) => {
      (s(A.user), f(A.token), Qc(A));
    },
    k = async (A) => {
      const Y = await nt("/auth/login", {
        method: "POST",
        body: JSON.stringify(A),
      });
      return (g({ user: Y.user, token: Y.token }), Y);
    },
    C = async (A) => {
      const Y = await nt("/auth/register", {
        method: "POST",
        body: JSON.stringify(A),
      });
      return (g({ user: Y.user, token: Y.token }), Y);
    },
    O = async () => {
      try {
        u &&
          (await nt("/auth/logout", {
            method: "POST",
            headers: { Authorization: `Bearer ${u}` },
          }));
      } catch {}
      (s(null), f(null), Qc(null));
    },
    E = N.useMemo(
      () => ({ user: i, token: u, ready: h, login: k, register: C, logout: O }),
      [i, u, h],
    );
  return p.jsx(mf.Provider, { value: E, children: o });
}
function lr() {
  const o = N.useContext(mf);
  if (!o) throw new Error("useAuth must be used within AuthProvider");
  return o;
}
function Vp() {
  const { ready: o, token: i } = lr(),
    s = Rn();
  return (
    N.useEffect(() => {
      o && s(i ? "/dashboard" : "/login", { replace: !0 });
    }, [o, i, s]),
    p.jsx("div", { className: "container", children: "Loading..." })
  );
}
function $p() {
  const o = Rn(),
    { login: i, token: s, ready: u } = lr(),
    [f, h] = N.useState({ email: "", password: "" }),
    [y, g] = N.useState(""),
    [k, C] = N.useState(!1);
  N.useEffect(() => {
    u && s && o("/dashboard", { replace: !0 });
  }, [u, s, o]);
  const O = async (E) => {
    (E.preventDefault(), C(!0), g(""));
    try {
      (await i(f), o("/dashboard"));
    } catch (A) {
      g(A.message || "Unable to log in.");
    } finally {
      C(!1);
    }
  };
  return p.jsx("div", {
    className: "auth-page",
    children: p.jsxs("div", {
      className: "auth-card",
      children: [
        p.jsx("h1", { children: "Welcome back" }),
        p.jsx("p", { children: "Sign in to your board workspace." }),
        p.jsxs("form", {
          onSubmit: O,
          className: "form-grid",
          children: [
            p.jsxs("div", {
              className: "input-wrap",
              children: [
                p.jsx("label", { htmlFor: "email", children: "Email" }),
                p.jsx("input", {
                  id: "email",
                  type: "email",
                  value: f.email,
                  onChange: (E) => h({ ...f, email: E.target.value }),
                  placeholder: "you@example.com",
                  required: !0,
                }),
              ],
            }),
            p.jsxs("div", {
              className: "input-wrap",
              children: [
                p.jsx("label", { htmlFor: "password", children: "Password" }),
                p.jsx("input", {
                  id: "password",
                  type: "password",
                  value: f.password,
                  onChange: (E) => h({ ...f, password: E.target.value }),
                  placeholder: "Your password",
                  required: !0,
                }),
              ],
            }),
            y
              ? p.jsx("div", { className: "inline-message", children: y })
              : null,
            p.jsx("button", {
              className: "primary-button",
              type: "submit",
              disabled: k,
              children: k ? "Signing in..." : "Sign in",
            }),
          ],
        }),
        p.jsxs("div", {
          className: "utility-row",
          style: { marginTop: "18px" },
          children: [
            p.jsx("span", { children: "Need an account?" }),
            p.jsx(ti, { to: "/register", children: "Create one" }),
          ],
        }),
      ],
    }),
  });
}
function Wp() {
  const o = Rn(),
    { register: i, token: s, ready: u } = lr(),
    [f, h] = N.useState({ name: "", email: "", password: "" }),
    [y, g] = N.useState(""),
    [k, C] = N.useState(!1);
  N.useEffect(() => {
    u && s && o("/dashboard", { replace: !0 });
  }, [u, s, o]);
  const O = async (E) => {
    (E.preventDefault(), C(!0), g(""));
    try {
      (await i(f), o("/dashboard"));
    } catch (A) {
      g(A.message || "Unable to create account.");
    } finally {
      C(!1);
    }
  };
  return p.jsx("div", {
    className: "auth-page",
    children: p.jsxs("div", {
      className: "auth-card",
      children: [
        p.jsx("h1", { children: "Create account" }),
        p.jsx("p", { children: "Set up your team workspace." }),
        p.jsxs("form", {
          onSubmit: O,
          className: "form-grid",
          children: [
            p.jsxs("div", {
              className: "input-wrap",
              children: [
                p.jsx("label", { htmlFor: "name", children: "Name" }),
                p.jsx("input", {
                  id: "name",
                  type: "text",
                  value: f.name,
                  onChange: (E) => h({ ...f, name: E.target.value }),
                  placeholder: "Your name",
                  required: !0,
                }),
              ],
            }),
            p.jsxs("div", {
              className: "input-wrap",
              children: [
                p.jsx("label", { htmlFor: "email", children: "Email" }),
                p.jsx("input", {
                  id: "email",
                  type: "email",
                  value: f.email,
                  onChange: (E) => h({ ...f, email: E.target.value }),
                  placeholder: "you@example.com",
                  required: !0,
                }),
              ],
            }),
            p.jsxs("div", {
              className: "input-wrap",
              children: [
                p.jsx("label", { htmlFor: "password", children: "Password" }),
                p.jsx("input", {
                  id: "password",
                  type: "password",
                  value: f.password,
                  onChange: (E) => h({ ...f, password: E.target.value }),
                  placeholder: "Minimum 6 characters",
                  required: !0,
                }),
              ],
            }),
            y
              ? p.jsx("div", { className: "inline-message", children: y })
              : null,
            p.jsx("button", {
              className: "primary-button",
              type: "submit",
              disabled: k,
              children: k ? "Creating account..." : "Create account",
            }),
          ],
        }),
        p.jsxs("div", {
          className: "utility-row",
          style: { marginTop: "18px" },
          children: [
            p.jsx("span", { children: "Already have an account?" }),
            p.jsx(ti, { to: "/login", children: "Sign in" }),
          ],
        }),
      ],
    }),
  });
}
function Hp({ board: o, onDelete: i }) {
  var s;
  return p.jsxs("div", {
    className: "board-card",
    children: [
      p.jsxs("div", {
        children: [
          p.jsxs("small", {
            children: [
              ((s = o.members) == null ? void 0 : s.length) || 1,
              " members",
            ],
          }),
          p.jsx("h3", { children: o.title }),
        ],
      }),
      p.jsx("div", {
        className: "board-card-meta",
        children: p.jsxs("small", {
          children: ["Updated ", new Date(o.updatedAt).toLocaleDateString()],
        }),
      }),
      p.jsxs("div", {
        className: "utility-row",
        children: [
          p.jsx(ti, {
            to: `/boards/${o._id}`,
            className: "secondary-button",
            style: { textAlign: "center" },
            children: "Open",
          }),
          p.jsx("button", {
            className: "danger-button",
            onClick: () => i(o._id),
            children: "Delete",
          }),
        ],
      }),
    ],
  });
}
function Qp({ boards: o = [], onDelete: i }) {
  return o.length === 0
    ? p.jsx("div", {
        className: "empty-state",
        children: "No boards yet. Start with a new board.",
      })
    : p.jsx("div", {
        className: "board-grid",
        children: o.map((s) => p.jsx(Hp, { board: s, onDelete: i }, s._id)),
      });
}
async function qp() {
  return (await nt("/boards")).boards || [];
}
async function Kp(o) {
  return (
    await nt("/boards", { method: "POST", body: JSON.stringify({ title: o }) })
  ).board;
}
async function Yp(o) {
  return (await nt(`/boards/${o}`)).board;
}
async function Jp(o, i) {
  return (
    await nt(`/boards/${o}`, {
      method: "PATCH",
      body: JSON.stringify({ title: i }),
    })
  ).board;
}
async function vf(o) {
  return await nt(`/boards/${o}`, { method: "DELETE" });
}
async function Xp(o, i) {
  return (
    await nt(`/boards/${o}/members`, {
      method: "POST",
      body: JSON.stringify({ email: i }),
    })
  ).board;
}
async function Gp(o, i) {
  return (await nt(`/boards/${o}/members/${i}`, { method: "DELETE" })).board;
}
function Zp() {
  const o = Rn(),
    { token: i, ready: s, logout: u, user: f } = lr(),
    [h, y] = N.useState([]),
    [g, k] = N.useState(""),
    [C, O] = N.useState(!0),
    [E, A] = N.useState("");
  N.useEffect(() => {
    if (s) {
      if (!i) {
        o("/login", { replace: !0 });
        return;
      }
      Y();
    }
  }, [s, i, o]);
  async function Y() {
    try {
      O(!0);
      const B = await qp();
      y(B);
    } catch (B) {
      A(B.message || "Unable to load boards.");
    } finally {
      O(!1);
    }
  }
  const ee = async (B) => {
      if ((B.preventDefault(), !!g.trim()))
        try {
          (A(""), await Kp(g.trim()), k(""), Y());
        } catch (te) {
          A(te.message || "Unable to create board.");
        }
    },
    H = async (B) => {
      if (window.confirm("Delete this board?"))
        try {
          (await vf(B), y((te) => te.filter((ie) => ie._id !== B)));
        } catch (te) {
          A(te.message || "Unable to delete board.");
        }
    };
  return p.jsxs("div", {
    className: "page-shell",
    children: [
      p.jsx("header", {
        className: "navbar",
        children: p.jsxs("div", {
          className: "navbar-inner",
          children: [
            p.jsx("div", { className: "brand", children: "Task Board" }),
            p.jsxs("div", {
              className: "nav-actions",
              children: [
                p.jsx("span", {
                  className: "user-pill",
                  children: (f == null ? void 0 : f.name) || "Member",
                }),
                p.jsx("button", {
                  className: "ghost-button",
                  onClick: () => u().then(() => o("/login")),
                  children: "Log out",
                }),
              ],
            }),
          ],
        }),
      }),
      p.jsxs("main", {
        className: "container",
        children: [
          p.jsx("div", {
            className: "toolbar",
            children: p.jsxs("div", {
              children: [
                p.jsx("h2", { className: "section-title", children: "Boards" }),
                p.jsx("p", {
                  style: { margin: 0, color: "#64748b" },
                  children: "Track work across your active projects.",
                }),
              ],
            }),
          }),
          p.jsxs("form", {
            onSubmit: ee,
            className: "utility-row",
            style: { marginBottom: "24px", alignItems: "stretch" },
            children: [
              p.jsx("input", {
                style: { flex: 1 },
                className: "input-wrap",
                value: g,
                onChange: (B) => k(B.target.value),
                placeholder: "Create a new board",
              }),
              p.jsx("button", {
                className: "primary-button",
                type: "submit",
                disabled: !g.trim(),
                children: "Create board",
              }),
            ],
          }),
          E
            ? p.jsx("div", {
                className: "inline-message",
                style: { marginBottom: "18px" },
                children: E,
              })
            : null,
          C
            ? p.jsx("div", {
                className: "empty-state",
                children: "Loading boards...",
              })
            : p.jsx(Qp, { boards: h, onDelete: H }),
        ],
      }),
    ],
  });
}
function qc({ user: o, onLogout: i, title: s = "Task Board AI" }) {
  return p.jsx("header", {
    className: "navbar",
    children: p.jsxs("div", {
      className: "navbar-inner",
      children: [
        p.jsx(ti, { to: "/dashboard", className: "brand", children: s }),
        p.jsxs("div", {
          className: "nav-actions",
          children: [
            p.jsx("span", {
              className: "user-pill",
              children: (o == null ? void 0 : o.name) || "Member",
            }),
            p.jsx("button", {
              className: "ghost-button",
              onClick: i,
              children: "Log out",
            }),
          ],
        }),
      ],
    }),
  });
}
function bp({ items: o = [] }) {
  return p.jsxs("aside", {
    className: "activity-panel",
    children: [
      p.jsx("h3", { children: "Recent activity" }),
      o.length === 0
        ? p.jsx("div", {
            className: "empty-state",
            children: "No recent activity.",
          })
        : p.jsx("ul", {
            className: "activity-list",
            children: o.map((i) => {
              var s, u;
              return p.jsxs(
                "li",
                {
                  className: "activity-item",
                  children: [
                    p.jsx("strong", { children: i.action.replace(/_/g, " ") }),
                    p.jsxs("div", {
                      children: [
                        ((s = i.user) == null ? void 0 : s.name) || "Unknown",
                        " • ",
                        ((u = i.task) == null ? void 0 : u.title) || "Task",
                      ],
                    }),
                    p.jsx("small", {
                      children: new Date(i.createdAt).toLocaleString(),
                    }),
                  ],
                },
                i._id || `${i.action}-${i.createdAt}`,
              );
            }),
          }),
    ],
  });
}
function em({ tasks: o, onOpenTask: i, onMoveTask: s, onDeleteTask: u }) {
  const f = [
      { label: "Todo", value: "Todo" },
      { label: "In Progress", value: "In Progress" },
      { label: "Done", value: "Done" },
    ],
    h = (y, g) => {
      g.preventDefault();
      const k = g.dataTransfer.getData("taskId"),
        C = o.find((O) => O._id === k);
      C && C.status !== y && s(C, y);
    };
  return p.jsx("div", {
    className: "columns",
    children: f.map((y) =>
      p.jsxs(
        "div",
        {
          className: "column",
          onDragOver: (g) => g.preventDefault(),
          onDrop: (g) => h(y.value, g),
          children: [
            p.jsx("h4", { children: y.label }),
            o.filter((g) => g.status === y.value).length === 0
              ? p.jsx("div", { className: "empty-state", children: "No tasks" })
              : p.jsx("div", {
                  className: "task-list",
                  children: o
                    .filter((g) => g.status === y.value)
                    .map((g) => {
                      var k;
                      return p.jsxs(
                        "div",
                        {
                          className: "task-card",
                          draggable: !0,
                          onDragStart: (C) =>
                            C.dataTransfer.setData("taskId", g._id),
                          children: [
                            p.jsxs("div", {
                              children: [
                                p.jsx("h5", { children: g.title }),
                                p.jsx("p", {
                                  children:
                                    g.description || "No description provided.",
                                }),
                              ],
                            }),
                            p.jsxs("div", {
                              className: "task-meta",
                              children: [
                                p.jsx("span", {
                                  children:
                                    ((k = g.assignee) == null
                                      ? void 0
                                      : k.name) || "Unassigned",
                                }),
                                p.jsx("span", { children: g.version || 1 }),
                              ],
                            }),
                            p.jsxs("div", {
                              className: "task-actions",
                              children: [
                                p.jsx("button", {
                                  className: "secondary-button",
                                  onClick: () => i(g),
                                  children: "Edit",
                                }),
                                p.jsx("button", {
                                  className: "danger-button",
                                  onClick: () => u(g),
                                  children: "Delete",
                                }),
                              ],
                            }),
                          ],
                        },
                        g._id,
                      );
                    }),
                }),
          ],
        },
        y.value,
      ),
    ),
  });
}
function tm({
  visible: o,
  form: i,
  members: s,
  canEditAssignee: u,
  onClose: f,
  onSubmit: h,
  setForm: y,
  saving: g,
}) {
  return !o || !i
    ? null
    : p.jsx("div", {
        className: "modal-backdrop",
        onClick: f,
        children: p.jsxs("div", {
          className: "modal",
          onClick: (k) => k.stopPropagation(),
          children: [
            p.jsxs("div", {
              className: "modal-header",
              children: [
                p.jsx("h3", { children: i._id ? "Edit task" : "Add task" }),
                p.jsx("button", {
                  className: "ghost-button",
                  onClick: f,
                  children: "Close",
                }),
              ],
            }),
            p.jsxs("div", {
              className: "form-grid",
              children: [
                p.jsxs("div", {
                  className: "input-wrap",
                  children: [
                    p.jsx("label", { children: "Title" }),
                    p.jsx("input", {
                      value: i.title,
                      onChange: (k) => y({ ...i, title: k.target.value }),
                      placeholder: "Task title",
                    }),
                  ],
                }),
                p.jsxs("div", {
                  className: "input-wrap",
                  children: [
                    p.jsx("label", { children: "Description" }),
                    p.jsx("textarea", {
                      value: i.description || "",
                      onChange: (k) => y({ ...i, description: k.target.value }),
                      rows: 4,
                      placeholder: "Add details",
                    }),
                  ],
                }),
                p.jsxs("div", {
                  className: "input-wrap",
                  children: [
                    p.jsx("label", { children: "Status" }),
                    p.jsxs("select", {
                      value: i.status || "Todo",
                      onChange: (k) => y({ ...i, status: k.target.value }),
                      children: [
                        p.jsx("option", { value: "Todo", children: "Todo" }),
                        p.jsx("option", {
                          value: "In Progress",
                          children: "In Progress",
                        }),
                        p.jsx("option", { value: "Done", children: "Done" }),
                      ],
                    }),
                  ],
                }),
                p.jsxs("div", {
                  className: "input-wrap",
                  children: [
                    p.jsx("label", { children: "Assignee" }),
                    p.jsxs("select", {
                      value: i.assignee || "",
                      onChange: (k) => y({ ...i, assignee: k.target.value }),
                      disabled: !u,
                      children: [
                        p.jsx("option", { value: "", children: "Unassigned" }),
                        s.map((k) => {
                          const C = k.user || k;
                          return p.jsx(
                            "option",
                            { value: C._id, children: C.name },
                            C._id,
                          );
                        }),
                      ],
                    }),
                    u
                      ? null
                      : p.jsx("small", {
                          className: "field-hint",
                          children:
                            "Only the board owner can change task assignments.",
                        }),
                  ],
                }),
              ],
            }),
            p.jsxs("div", {
              className: "modal-actions",
              children: [
                p.jsx("button", {
                  className: "ghost-button",
                  onClick: f,
                  children: "Cancel",
                }),
                p.jsx("button", {
                  className: "primary-button",
                  onClick: () => h(i),
                  disabled: g,
                  children: g ? "Saving..." : "Save task",
                }),
              ],
            }),
          ],
        }),
      });
}
async function nm(o) {
  return (await nt(`/boards/${o}/activity`)).activities || [];
}
async function rm(o, i) {
  return (
    await nt(`/boards/${o}/tasks`, { method: "POST", body: JSON.stringify(i) })
  ).task;
}
async function Kc(o, i) {
  return (await nt(`/tasks/${o}`, { method: "PATCH", body: JSON.stringify(i) }))
    .task;
}
async function im(o) {
  return await nt(`/tasks/${o}`, { method: "DELETE" });
}
const Bt = Object.create(null);
Bt.open = "0";
Bt.close = "1";
Bt.ping = "2";
Bt.pong = "3";
Bt.message = "4";
Bt.upgrade = "5";
Bt.noop = "6";
const vs = Object.create(null);
Object.keys(Bt).forEach((o) => {
  vs[Bt[o]] = o;
});
const No = { type: "error", data: "parser error" },
  yf =
    typeof Blob == "function" ||
    (typeof Blob < "u" &&
      Object.prototype.toString.call(Blob) === "[object BlobConstructor]"),
  gf = typeof ArrayBuffer == "function",
  wf = (o) =>
    typeof ArrayBuffer.isView == "function"
      ? ArrayBuffer.isView(o)
      : o && o.buffer instanceof ArrayBuffer,
  Do = ({ type: o, data: i }, s, u) =>
    yf && i instanceof Blob
      ? s
        ? u(i)
        : Yc(i, u)
      : gf && (i instanceof ArrayBuffer || wf(i))
        ? s
          ? u(i)
          : Yc(new Blob([i]), u)
        : u(Bt[o] + (i || "")),
  Yc = (o, i) => {
    const s = new FileReader();
    return (
      (s.onload = function () {
        const u = s.result.split(",")[1];
        i("b" + (u || ""));
      }),
      s.readAsDataURL(o)
    );
  };
function Jc(o) {
  return o instanceof Uint8Array
    ? o
    : o instanceof ArrayBuffer
      ? new Uint8Array(o)
      : new Uint8Array(o.buffer, o.byteOffset, o.byteLength);
}
let ko;
function sm(o, i) {
  if (yf && o.data instanceof Blob)
    return o.data.arrayBuffer().then(Jc).then(i);
  if (gf && (o.data instanceof ArrayBuffer || wf(o.data))) return i(Jc(o.data));
  Do(o, !1, (s) => {
    (ko || (ko = new TextEncoder()), i(ko.encode(s)));
  });
}
const Xc = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
  Gr = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let o = 0; o < Xc.length; o++) Gr[Xc.charCodeAt(o)] = o;
const lm = (o) => {
    let i = o.length * 0.75,
      s = o.length,
      u,
      f = 0,
      h,
      y,
      g,
      k;
    o[o.length - 1] === "=" && (i--, o[o.length - 2] === "=" && i--);
    const C = new ArrayBuffer(i),
      O = new Uint8Array(C);
    for (u = 0; u < s; u += 4)
      ((h = Gr[o.charCodeAt(u)]),
        (y = Gr[o.charCodeAt(u + 1)]),
        (g = Gr[o.charCodeAt(u + 2)]),
        (k = Gr[o.charCodeAt(u + 3)]),
        (O[f++] = (h << 2) | (y >> 4)),
        (O[f++] = ((y & 15) << 4) | (g >> 2)),
        (O[f++] = ((g & 3) << 6) | (k & 63)));
    return C;
  },
  om = typeof ArrayBuffer == "function",
  Io = (o, i) => {
    if (typeof o != "string") return { type: "message", data: kf(o, i) };
    const s = o.charAt(0);
    return s === "b"
      ? { type: "message", data: am(o.substring(1), i) }
      : vs[s]
        ? o.length > 1
          ? { type: vs[s], data: o.substring(1) }
          : { type: vs[s] }
        : No;
  },
  am = (o, i) => {
    if (om) {
      const s = lm(o);
      return kf(s, i);
    } else return { base64: !0, data: o };
  },
  kf = (o, i) => {
    switch (i) {
      case "blob":
        return o instanceof Blob ? o : new Blob([o]);
      case "arraybuffer":
      default:
        return o instanceof ArrayBuffer ? o : o.buffer;
    }
  },
  Sf = "",
  um = (o, i) => {
    const s = o.length,
      u = new Array(s);
    let f = 0;
    o.forEach((h, y) => {
      Do(h, !1, (g) => {
        ((u[y] = g), ++f === s && i(u.join(Sf)));
      });
    });
  },
  cm = (o, i) => {
    const s = o.split(Sf),
      u = [];
    for (let f = 0; f < s.length; f++) {
      const h = Io(s[f], i);
      if ((u.push(h), h.type === "error")) break;
    }
    return u;
  };
function fm() {
  return new TransformStream({
    transform(o, i) {
      sm(o, (s) => {
        const u = s.length;
        let f;
        if (u < 126)
          ((f = new Uint8Array(1)), new DataView(f.buffer).setUint8(0, u));
        else if (u < 65536) {
          f = new Uint8Array(3);
          const h = new DataView(f.buffer);
          (h.setUint8(0, 126), h.setUint16(1, u));
        } else {
          f = new Uint8Array(9);
          const h = new DataView(f.buffer);
          (h.setUint8(0, 127), h.setBigUint64(1, BigInt(u)));
        }
        (o.data && typeof o.data != "string" && (f[0] |= 128),
          i.enqueue(f),
          i.enqueue(s));
      });
    },
  });
}
let So;
function ps(o) {
  return o.reduce((i, s) => i + s.length, 0);
}
function ms(o, i) {
  if (o[0].length === i) return o.shift();
  const s = new Uint8Array(i);
  let u = 0;
  for (let f = 0; f < i; f++)
    ((s[f] = o[0][u++]), u === o[0].length && (o.shift(), (u = 0)));
  return (o.length && u < o[0].length && (o[0] = o[0].slice(u)), s);
}
function dm(o, i) {
  So || (So = new TextDecoder());
  const s = [];
  let u = 0,
    f = -1,
    h = !1;
  return new TransformStream({
    transform(y, g) {
      for (s.push(y); ; ) {
        if (u === 0) {
          if (ps(s) < 1) break;
          const k = ms(s, 1);
          ((h = (k[0] & 128) === 128),
            (f = k[0] & 127),
            f < 126 ? (u = 3) : f === 126 ? (u = 1) : (u = 2));
        } else if (u === 1) {
          if (ps(s) < 2) break;
          const k = ms(s, 2);
          ((f = new DataView(k.buffer, k.byteOffset, k.length).getUint16(0)),
            (u = 3));
        } else if (u === 2) {
          if (ps(s) < 8) break;
          const k = ms(s, 8),
            C = new DataView(k.buffer, k.byteOffset, k.length),
            O = C.getUint32(0);
          if (O > Math.pow(2, 21) - 1) {
            g.enqueue(No);
            break;
          }
          ((f = O * Math.pow(2, 32) + C.getUint32(4)), (u = 3));
        } else {
          if (ps(s) < f) break;
          const k = ms(s, f);
          (g.enqueue(Io(h ? k : So.decode(k), i)), (u = 0));
        }
        if (f === 0 || f > o) {
          g.enqueue(No);
          break;
        }
      }
    },
  });
}
const xf = 4;
function Re(o) {
  if (o) return hm(o);
}
function hm(o) {
  for (var i in Re.prototype) o[i] = Re.prototype[i];
  return o;
}
Re.prototype.on = Re.prototype.addEventListener = function (o, i) {
  return (
    (this._callbacks = this._callbacks || {}),
    (this._callbacks["$" + o] = this._callbacks["$" + o] || []).push(i),
    this
  );
};
Re.prototype.once = function (o, i) {
  function s() {
    (this.off(o, s), i.apply(this, arguments));
  }
  return ((s.fn = i), this.on(o, s), this);
};
Re.prototype.off =
  Re.prototype.removeListener =
  Re.prototype.removeAllListeners =
  Re.prototype.removeEventListener =
    function (o, i) {
      if (((this._callbacks = this._callbacks || {}), arguments.length == 0))
        return ((this._callbacks = {}), this);
      var s = this._callbacks["$" + o];
      if (!s) return this;
      if (arguments.length == 1) return (delete this._callbacks["$" + o], this);
      for (var u, f = 0; f < s.length; f++)
        if (((u = s[f]), u === i || u.fn === i)) {
          s.splice(f, 1);
          break;
        }
      return (s.length === 0 && delete this._callbacks["$" + o], this);
    };
Re.prototype.emit = function (o) {
  this._callbacks = this._callbacks || {};
  for (
    var i = new Array(arguments.length - 1),
      s = this._callbacks["$" + o],
      u = 1;
    u < arguments.length;
    u++
  )
    i[u - 1] = arguments[u];
  if (s) {
    s = s.slice(0);
    for (var u = 0, f = s.length; u < f; ++u) s[u].apply(this, i);
  }
  return this;
};
Re.prototype.emitReserved = Re.prototype.emit;
Re.prototype.listeners = function (o) {
  return (
    (this._callbacks = this._callbacks || {}),
    this._callbacks["$" + o] || []
  );
};
Re.prototype.hasListeners = function (o) {
  return !!this.listeners(o).length;
};
const _s =
    typeof Promise == "function" && typeof Promise.resolve == "function"
      ? (i) => Promise.resolve().then(i)
      : (i, s) => s(i, 0),
  vt =
    typeof self < "u"
      ? self
      : typeof window < "u"
        ? window
        : Function("return this")(),
  pm = "arraybuffer";
function _f(o, ...i) {
  return i.reduce((s, u) => (o.hasOwnProperty(u) && (s[u] = o[u]), s), {});
}
const mm = vt.setTimeout,
  vm = vt.clearTimeout;
function Es(o, i) {
  i.useNativeTimers
    ? ((o.setTimeoutFn = mm.bind(vt)), (o.clearTimeoutFn = vm.bind(vt)))
    : ((o.setTimeoutFn = vt.setTimeout.bind(vt)),
      (o.clearTimeoutFn = vt.clearTimeout.bind(vt)));
}
const ym = 1.33;
function gm(o) {
  return typeof o == "string"
    ? wm(o)
    : Math.ceil((o.byteLength || o.size) * ym);
}
function wm(o) {
  let i = 0,
    s = 0;
  for (let u = 0, f = o.length; u < f; u++)
    ((i = o.charCodeAt(u)),
      i < 128
        ? (s += 1)
        : i < 2048
          ? (s += 2)
          : i < 55296 || i >= 57344
            ? (s += 3)
            : (u++, (s += 4)));
  return s;
}
function Ef() {
  return (
    Date.now().toString(36).substring(3) +
    Math.random().toString(36).substring(2, 5)
  );
}
function km(o) {
  let i = "";
  for (let s in o)
    o.hasOwnProperty(s) &&
      (i.length && (i += "&"),
      (i += encodeURIComponent(s) + "=" + encodeURIComponent(o[s])));
  return i;
}
function Sm(o) {
  let i = {},
    s = o.split("&");
  for (let u = 0, f = s.length; u < f; u++) {
    let h = s[u].split("=");
    i[decodeURIComponent(h[0])] = decodeURIComponent(h[1]);
  }
  return i;
}
class xm extends Error {
  constructor(i, s, u) {
    (super(i),
      (this.description = s),
      (this.context = u),
      (this.type = "TransportError"));
  }
}
class Mo extends Re {
  constructor(i) {
    (super(),
      (this.writable = !1),
      Es(this, i),
      (this.opts = i),
      (this.query = i.query),
      (this.socket = i.socket),
      (this.supportsBinary = !i.forceBase64));
  }
  onError(i, s, u) {
    return (super.emitReserved("error", new xm(i, s, u)), this);
  }
  open() {
    return ((this.readyState = "opening"), this.doOpen(), this);
  }
  close() {
    return (
      (this.readyState === "opening" || this.readyState === "open") &&
        (this.doClose(), this.onClose()),
      this
    );
  }
  send(i) {
    this.readyState === "open" && this.write(i);
  }
  onOpen() {
    ((this.readyState = "open"),
      (this.writable = !0),
      super.emitReserved("open"));
  }
  onData(i) {
    const s = Io(i, this.socket.binaryType);
    this.onPacket(s);
  }
  onPacket(i) {
    super.emitReserved("packet", i);
  }
  onClose(i) {
    ((this.readyState = "closed"), super.emitReserved("close", i));
  }
  pause(i) {}
  createUri(i, s = {}) {
    return (
      i +
      "://" +
      this._hostname() +
      this._port() +
      this.opts.path +
      this._query(s)
    );
  }
  _hostname() {
    const i = this.opts.hostname;
    return i.indexOf(":") === -1 ? i : "[" + i + "]";
  }
  _port() {
    return this.opts.port &&
      ((this.opts.secure && Number(this.opts.port) !== 443) ||
        (!this.opts.secure && Number(this.opts.port) !== 80))
      ? ":" + this.opts.port
      : "";
  }
  _query(i) {
    const s = km(i);
    return s.length ? "?" + s : "";
  }
}
class _m extends Mo {
  constructor() {
    (super(...arguments), (this._polling = !1));
  }
  get name() {
    return "polling";
  }
  doOpen() {
    this._poll();
  }
  pause(i) {
    this.readyState = "pausing";
    const s = () => {
      ((this.readyState = "paused"), i());
    };
    if (this._polling || !this.writable) {
      let u = 0;
      (this._polling &&
        (u++,
        this.once("pollComplete", function () {
          --u || s();
        })),
        this.writable ||
          (u++,
          this.once("drain", function () {
            --u || s();
          })));
    } else s();
  }
  _poll() {
    ((this._polling = !0), this.doPoll(), this.emitReserved("poll"));
  }
  onData(i) {
    const s = (u) => {
      if (
        (this.readyState === "opening" && u.type === "open" && this.onOpen(),
        u.type === "close")
      )
        return (
          this.onClose({ description: "transport closed by the server" }),
          !1
        );
      this.onPacket(u);
    };
    (cm(i, this.socket.binaryType).forEach(s),
      this.readyState !== "closed" &&
        ((this._polling = !1),
        this.emitReserved("pollComplete"),
        this.readyState === "open" && this._poll()));
  }
  doClose() {
    const i = () => {
      this.write([{ type: "close" }]);
    };
    this.readyState === "open" ? i() : this.once("open", i);
  }
  write(i) {
    ((this.writable = !1),
      um(i, (s) => {
        this.doWrite(s, () => {
          ((this.writable = !0), this.emitReserved("drain"));
        });
      }));
  }
  uri() {
    const i = this.opts.secure ? "https" : "http",
      s = this.query || {};
    return (
      this.opts.timestampRequests !== !1 &&
        (s[this.opts.timestampParam] = Ef()),
      !this.supportsBinary && !s.sid && (s.b64 = 1),
      this.createUri(i, s)
    );
  }
}
let Cf = !1;
try {
  Cf = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest();
} catch {}
const Em = Cf;
function Cm() {}
class Nm extends _m {
  constructor(i) {
    if ((super(i), typeof location < "u")) {
      const s = location.protocol === "https:";
      let u = location.port;
      (u || (u = s ? "443" : "80"),
        (this.xd =
          (typeof location < "u" && i.hostname !== location.hostname) ||
          u !== i.port));
    }
  }
  doWrite(i, s) {
    const u = this.request({ method: "POST", data: i });
    (u.on("success", s),
      u.on("error", (f, h) => {
        this.onError("xhr post error", f, h);
      }));
  }
  doPoll() {
    const i = this.request();
    (i.on("data", this.onData.bind(this)),
      i.on("error", (s, u) => {
        this.onError("xhr poll error", s, u);
      }),
      (this.pollXhr = i));
  }
}
class At extends Re {
  constructor(i, s, u) {
    (super(),
      (this.createRequest = i),
      Es(this, u),
      (this._opts = u),
      (this._method = u.method || "GET"),
      (this._uri = s),
      (this._data = u.data !== void 0 ? u.data : null),
      this._create());
  }
  _create() {
    var i;
    const s = _f(
      this._opts,
      "agent",
      "pfx",
      "key",
      "passphrase",
      "cert",
      "ca",
      "ciphers",
      "rejectUnauthorized",
      "autoUnref",
    );
    s.xdomain = !!this._opts.xd;
    const u = (this._xhr = this.createRequest(s));
    try {
      u.open(this._method, this._uri, !0);
      try {
        if (this._opts.extraHeaders) {
          u.setDisableHeaderCheck && u.setDisableHeaderCheck(!0);
          for (let f in this._opts.extraHeaders)
            this._opts.extraHeaders.hasOwnProperty(f) &&
              u.setRequestHeader(f, this._opts.extraHeaders[f]);
        }
      } catch {}
      if (this._method === "POST")
        try {
          u.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
        } catch {}
      try {
        u.setRequestHeader("Accept", "*/*");
      } catch {}
      ((i = this._opts.cookieJar) === null || i === void 0 || i.addCookies(u),
        "withCredentials" in u &&
          (u.withCredentials = this._opts.withCredentials),
        this._opts.requestTimeout && (u.timeout = this._opts.requestTimeout),
        (u.onreadystatechange = () => {
          var f;
          (u.readyState === 3 &&
            ((f = this._opts.cookieJar) === null ||
              f === void 0 ||
              f.parseCookies(u.getResponseHeader("set-cookie"))),
            u.readyState === 4 &&
              (u.status === 200 || u.status === 1223
                ? this._onLoad()
                : this.setTimeoutFn(() => {
                    this._onError(typeof u.status == "number" ? u.status : 0);
                  }, 0)));
        }),
        u.send(this._data));
    } catch (f) {
      this.setTimeoutFn(() => {
        this._onError(f);
      }, 0);
      return;
    }
    typeof document < "u" &&
      ((this._index = At.requestsCount++), (At.requests[this._index] = this));
  }
  _onError(i) {
    (this.emitReserved("error", i, this._xhr), this._cleanup(!0));
  }
  _cleanup(i) {
    if (!(typeof this._xhr > "u" || this._xhr === null)) {
      if (((this._xhr.onreadystatechange = Cm), i))
        try {
          this._xhr.abort();
        } catch {}
      (typeof document < "u" && delete At.requests[this._index],
        (this._xhr = null));
    }
  }
  _onLoad() {
    const i = this._xhr.responseText;
    i !== null &&
      (this.emitReserved("data", i),
      this.emitReserved("success"),
      this._cleanup());
  }
  abort() {
    this._cleanup();
  }
}
At.requestsCount = 0;
At.requests = {};
if (typeof document < "u") {
  if (typeof attachEvent == "function") attachEvent("onunload", Gc);
  else if (typeof addEventListener == "function") {
    const o = "onpagehide" in vt ? "pagehide" : "unload";
    addEventListener(o, Gc, !1);
  }
}
function Gc() {
  for (let o in At.requests)
    At.requests.hasOwnProperty(o) && At.requests[o].abort();
}
const Tm = (function () {
  const o = Nf({ xdomain: !1 });
  return o && o.responseType !== null;
})();
class Pm extends Nm {
  constructor(i) {
    super(i);
    const s = i && i.forceBase64;
    this.supportsBinary = Tm && !s;
  }
  request(i = {}) {
    return (
      Object.assign(i, { xd: this.xd }, this.opts),
      new At(Nf, this.uri(), i)
    );
  }
}
function Nf(o) {
  const i = o.xdomain;
  try {
    if (typeof XMLHttpRequest < "u" && (!i || Em)) return new XMLHttpRequest();
  } catch {}
  if (!i)
    try {
      return new vt[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch {}
}
const Tf =
  typeof navigator < "u" &&
  typeof navigator.product == "string" &&
  navigator.product.toLowerCase() === "reactnative";
class Rm extends Mo {
  get name() {
    return "websocket";
  }
  doOpen() {
    const i = this.uri(),
      s = this.opts.protocols,
      u = Tf
        ? {}
        : _f(
            this.opts,
            "agent",
            "perMessageDeflate",
            "pfx",
            "key",
            "passphrase",
            "cert",
            "ca",
            "ciphers",
            "rejectUnauthorized",
            "localAddress",
            "protocolVersion",
            "origin",
            "maxPayload",
            "family",
            "checkServerIdentity",
          );
    this.opts.extraHeaders && (u.headers = this.opts.extraHeaders);
    try {
      this.ws = this.createSocket(i, s, u);
    } catch (f) {
      return this.emitReserved("error", f);
    }
    ((this.ws.binaryType = this.socket.binaryType), this.addEventListeners());
  }
  addEventListeners() {
    ((this.ws.onopen = () => {
      (this.opts.autoUnref && this.ws._socket.unref(), this.onOpen());
    }),
      (this.ws.onclose = (i) =>
        this.onClose({
          description: "websocket connection closed",
          context: i,
        })),
      (this.ws.onmessage = (i) => this.onData(i.data)),
      (this.ws.onerror = (i) => this.onError("websocket error", i)));
  }
  write(i) {
    this.writable = !1;
    for (let s = 0; s < i.length; s++) {
      const u = i[s],
        f = s === i.length - 1;
      Do(u, this.supportsBinary, (h) => {
        try {
          this.doWrite(u, h);
        } catch {}
        f &&
          _s(() => {
            ((this.writable = !0), this.emitReserved("drain"));
          }, this.setTimeoutFn);
      });
    }
  }
  doClose() {
    typeof this.ws < "u" &&
      ((this.ws.onerror = () => {}), this.ws.close(), (this.ws = null));
  }
  uri() {
    const i = this.opts.secure ? "wss" : "ws",
      s = this.query || {};
    return (
      this.opts.timestampRequests && (s[this.opts.timestampParam] = Ef()),
      this.supportsBinary || (s.b64 = 1),
      this.createUri(i, s)
    );
  }
}
const xo = vt.WebSocket || vt.MozWebSocket;
class jm extends Rm {
  createSocket(i, s, u) {
    return Tf ? new xo(i, s, u) : s ? new xo(i, s) : new xo(i);
  }
  doWrite(i, s) {
    this.ws.send(s);
  }
}
class Om extends Mo {
  get name() {
    return "webtransport";
  }
  doOpen() {
    try {
      this._transport = new WebTransport(
        this.createUri("https"),
        this.opts.transportOptions[this.name],
      );
    } catch (i) {
      return this.emitReserved("error", i);
    }
    (this._transport.closed
      .then(() => {
        this.onClose();
      })
      .catch((i) => {
        this.onError("webtransport error", i);
      }),
      this._transport.ready.then(() => {
        this._transport.createBidirectionalStream().then((i) => {
          const s = dm(Number.MAX_SAFE_INTEGER, this.socket.binaryType),
            u = i.readable.pipeThrough(s).getReader(),
            f = fm();
          (f.readable.pipeTo(i.writable),
            (this._writer = f.writable.getWriter()));
          const h = () => {
            u.read()
              .then(({ done: g, value: k }) => {
                g || (this.onPacket(k), h());
              })
              .catch((g) => {});
          };
          h();
          const y = { type: "open" };
          (this.query.sid && (y.data = `{"sid":"${this.query.sid}"}`),
            this._writer.write(y).then(() => this.onOpen()));
        });
      }));
  }
  write(i) {
    this.writable = !1;
    for (let s = 0; s < i.length; s++) {
      const u = i[s],
        f = s === i.length - 1;
      this._writer.write(u).then(() => {
        f &&
          _s(() => {
            ((this.writable = !0), this.emitReserved("drain"));
          }, this.setTimeoutFn);
      });
    }
  }
  doClose() {
    var i;
    (i = this._transport) === null || i === void 0 || i.close();
  }
}
const Lm = { websocket: jm, webtransport: Om, polling: Pm },
  Am =
    /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
  Bm = [
    "source",
    "protocol",
    "authority",
    "userInfo",
    "user",
    "password",
    "host",
    "port",
    "relative",
    "path",
    "directory",
    "file",
    "query",
    "anchor",
  ];
function To(o) {
  if (o.length > 8e3) throw "URI too long";
  const i = o,
    s = o.indexOf("["),
    u = o.indexOf("]");
  s != -1 &&
    u != -1 &&
    (o =
      o.substring(0, s) +
      o.substring(s, u).replace(/:/g, ";") +
      o.substring(u, o.length));
  let f = Am.exec(o || ""),
    h = {},
    y = 14;
  for (; y--; ) h[Bm[y]] = f[y] || "";
  return (
    s != -1 &&
      u != -1 &&
      ((h.source = i),
      (h.host = h.host.substring(1, h.host.length - 1).replace(/;/g, ":")),
      (h.authority = h.authority
        .replace("[", "")
        .replace("]", "")
        .replace(/;/g, ":")),
      (h.ipv6uri = !0)),
    (h.pathNames = zm(h, h.path)),
    (h.queryKey = Dm(h, h.query)),
    h
  );
}
function zm(o, i) {
  const s = /\/{2,9}/g,
    u = i.replace(s, "/").split("/");
  return (
    (i.slice(0, 1) == "/" || i.length === 0) && u.splice(0, 1),
    i.slice(-1) == "/" && u.splice(u.length - 1, 1),
    u
  );
}
function Dm(o, i) {
  const s = {};
  return (
    i.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function (u, f, h) {
      f && (s[f] = h);
    }),
    s
  );
}
const Po =
    typeof addEventListener == "function" &&
    typeof removeEventListener == "function",
  ys = [];
Po &&
  addEventListener(
    "offline",
    () => {
      ys.forEach((o) => o());
    },
    !1,
  );
class hn extends Re {
  constructor(i, s) {
    if (
      (super(),
      (this.binaryType = pm),
      (this.writeBuffer = []),
      (this._prevBufferLen = 0),
      (this._pingInterval = -1),
      (this._pingTimeout = -1),
      (this._maxPayload = -1),
      (this._pingTimeoutTime = 1 / 0),
      i && typeof i == "object" && ((s = i), (i = null)),
      i)
    ) {
      const u = To(i);
      ((s.hostname = u.host),
        (s.secure = u.protocol === "https" || u.protocol === "wss"),
        (s.port = u.port),
        u.query && (s.query = u.query));
    } else s.host && (s.hostname = To(s.host).host);
    (Es(this, s),
      (this.secure =
        s.secure != null
          ? s.secure
          : typeof location < "u" && location.protocol === "https:"),
      s.hostname && !s.port && (s.port = this.secure ? "443" : "80"),
      (this.hostname =
        s.hostname ||
        (typeof location < "u" ? location.hostname : "localhost")),
      (this.port =
        s.port ||
        (typeof location < "u" && location.port
          ? location.port
          : this.secure
            ? "443"
            : "80")),
      (this.transports = []),
      (this._transportsByName = {}),
      s.transports.forEach((u) => {
        const f = u.prototype.name;
        (this.transports.push(f), (this._transportsByName[f] = u));
      }),
      (this.opts = Object.assign(
        {
          path: "/engine.io",
          agent: !1,
          withCredentials: !1,
          upgrade: !0,
          timestampParam: "t",
          rememberUpgrade: !1,
          addTrailingSlash: !0,
          rejectUnauthorized: !0,
          perMessageDeflate: { threshold: 1024 },
          transportOptions: {},
          closeOnBeforeunload: !1,
        },
        s,
      )),
      (this.opts.path =
        this.opts.path.replace(/\/$/, "") +
        (this.opts.addTrailingSlash ? "/" : "")),
      typeof this.opts.query == "string" &&
        (this.opts.query = Sm(this.opts.query)),
      Po &&
        (this.opts.closeOnBeforeunload &&
          ((this._beforeunloadEventListener = () => {
            this.transport &&
              (this.transport.removeAllListeners(), this.transport.close());
          }),
          addEventListener(
            "beforeunload",
            this._beforeunloadEventListener,
            !1,
          )),
        this.hostname !== "localhost" &&
          ((this._offlineEventListener = () => {
            this._onClose("transport close", {
              description: "network connection lost",
            });
          }),
          ys.push(this._offlineEventListener))),
      this.opts.withCredentials && (this._cookieJar = void 0),
      this._open());
  }
  createTransport(i) {
    const s = Object.assign({}, this.opts.query);
    ((s.EIO = xf), (s.transport = i), this.id && (s.sid = this.id));
    const u = Object.assign(
      {},
      this.opts,
      {
        query: s,
        socket: this,
        hostname: this.hostname,
        secure: this.secure,
        port: this.port,
      },
      this.opts.transportOptions[i],
    );
    return new this._transportsByName[i](u);
  }
  _open() {
    if (this.transports.length === 0) {
      this.setTimeoutFn(() => {
        this.emitReserved("error", "No transports available");
      }, 0);
      return;
    }
    const i =
      this.opts.rememberUpgrade &&
      hn.priorWebsocketSuccess &&
      this.transports.indexOf("websocket") !== -1
        ? "websocket"
        : this.transports[0];
    this.readyState = "opening";
    const s = this.createTransport(i);
    (s.open(), this.setTransport(s));
  }
  setTransport(i) {
    (this.transport && this.transport.removeAllListeners(),
      (this.transport = i),
      i
        .on("drain", this._onDrain.bind(this))
        .on("packet", this._onPacket.bind(this))
        .on("error", this._onError.bind(this))
        .on("close", (s) => this._onClose("transport close", s)));
  }
  onOpen() {
    ((this.readyState = "open"),
      (hn.priorWebsocketSuccess = this.transport.name === "websocket"),
      this.emitReserved("open"),
      this.flush());
  }
  _onPacket(i) {
    if (
      this.readyState === "opening" ||
      this.readyState === "open" ||
      this.readyState === "closing"
    )
      switch (
        (this.emitReserved("packet", i), this.emitReserved("heartbeat"), i.type)
      ) {
        case "open":
          this.onHandshake(JSON.parse(i.data));
          break;
        case "ping":
          (this._sendPacket("pong"),
            this.emitReserved("ping"),
            this.emitReserved("pong"),
            this._resetPingTimeout());
          break;
        case "error":
          const s = new Error("server error");
          ((s.code = i.data), this._onError(s));
          break;
        case "message":
          (this.emitReserved("data", i.data),
            this.emitReserved("message", i.data));
          break;
      }
  }
  onHandshake(i) {
    (this.emitReserved("handshake", i),
      (this.id = i.sid),
      (this.transport.query.sid = i.sid),
      (this._pingInterval = i.pingInterval),
      (this._pingTimeout = i.pingTimeout),
      (this._maxPayload = i.maxPayload),
      this.onOpen(),
      this.readyState !== "closed" && this._resetPingTimeout());
  }
  _resetPingTimeout() {
    this.clearTimeoutFn(this._pingTimeoutTimer);
    const i = this._pingInterval + this._pingTimeout;
    ((this._pingTimeoutTime = Date.now() + i),
      (this._pingTimeoutTimer = this.setTimeoutFn(() => {
        this._onClose("ping timeout");
      }, i)),
      this.opts.autoUnref && this._pingTimeoutTimer.unref());
  }
  _onDrain() {
    (this.writeBuffer.splice(0, this._prevBufferLen),
      (this._prevBufferLen = 0),
      this.writeBuffer.length === 0
        ? this.emitReserved("drain")
        : this.flush());
  }
  flush() {
    if (
      this.readyState !== "closed" &&
      this.transport.writable &&
      !this.upgrading &&
      this.writeBuffer.length
    ) {
      const i = this._getWritablePackets();
      (this.transport.send(i),
        (this._prevBufferLen = i.length),
        this.emitReserved("flush"));
    }
  }
  _getWritablePackets() {
    if (
      !(
        this._maxPayload &&
        this.transport.name === "polling" &&
        this.writeBuffer.length > 1
      )
    )
      return this.writeBuffer;
    let s = 1;
    for (let u = 0; u < this.writeBuffer.length; u++) {
      const f = this.writeBuffer[u].data;
      if ((f && (s += gm(f)), u > 0 && s > this._maxPayload))
        return this.writeBuffer.slice(0, u);
      s += 2;
    }
    return this.writeBuffer;
  }
  _hasPingExpired() {
    if (!this._pingTimeoutTime) return !0;
    const i = Date.now() > this._pingTimeoutTime;
    return (
      i &&
        ((this._pingTimeoutTime = 0),
        _s(() => {
          this._onClose("ping timeout");
        }, this.setTimeoutFn)),
      i
    );
  }
  write(i, s, u) {
    return (this._sendPacket("message", i, s, u), this);
  }
  send(i, s, u) {
    return (this._sendPacket("message", i, s, u), this);
  }
  _sendPacket(i, s, u, f) {
    if (
      (typeof s == "function" && ((f = s), (s = void 0)),
      typeof u == "function" && ((f = u), (u = null)),
      this.readyState === "closing" || this.readyState === "closed")
    )
      return;
    ((u = u || {}), (u.compress = u.compress !== !1));
    const h = { type: i, data: s, options: u };
    (this.emitReserved("packetCreate", h),
      this.writeBuffer.push(h),
      f && this.once("flush", f),
      this.flush());
  }
  close() {
    const i = () => {
        (this._onClose("forced close"), this.transport.close());
      },
      s = () => {
        (this.off("upgrade", s), this.off("upgradeError", s), i());
      },
      u = () => {
        (this.once("upgrade", s), this.once("upgradeError", s));
      };
    return (
      (this.readyState === "opening" || this.readyState === "open") &&
        ((this.readyState = "closing"),
        this.writeBuffer.length
          ? this.once("drain", () => {
              this.upgrading ? u() : i();
            })
          : this.upgrading
            ? u()
            : i()),
      this
    );
  }
  _onError(i) {
    if (
      ((hn.priorWebsocketSuccess = !1),
      this.opts.tryAllTransports &&
        this.transports.length > 1 &&
        this.readyState === "opening")
    )
      return (this.transports.shift(), this._open());
    (this.emitReserved("error", i), this._onClose("transport error", i));
  }
  _onClose(i, s) {
    if (
      this.readyState === "opening" ||
      this.readyState === "open" ||
      this.readyState === "closing"
    ) {
      if (
        (this.clearTimeoutFn(this._pingTimeoutTimer),
        this.transport.removeAllListeners("close"),
        this.transport.close(),
        this.transport.removeAllListeners(),
        Po &&
          (this._beforeunloadEventListener &&
            removeEventListener(
              "beforeunload",
              this._beforeunloadEventListener,
              !1,
            ),
          this._offlineEventListener))
      ) {
        const u = ys.indexOf(this._offlineEventListener);
        u !== -1 && ys.splice(u, 1);
      }
      ((this.readyState = "closed"),
        (this.id = null),
        this.emitReserved("close", i, s),
        (this.writeBuffer = []),
        (this._prevBufferLen = 0));
    }
  }
}
hn.protocol = xf;
class Im extends hn {
  constructor() {
    (super(...arguments), (this._upgrades = []));
  }
  onOpen() {
    if ((super.onOpen(), this.readyState === "open" && this.opts.upgrade))
      for (let i = 0; i < this._upgrades.length; i++)
        this._probe(this._upgrades[i]);
  }
  _probe(i) {
    let s = this.createTransport(i),
      u = !1;
    hn.priorWebsocketSuccess = !1;
    const f = () => {
      u ||
        (s.send([{ type: "ping", data: "probe" }]),
        s.once("packet", (E) => {
          if (!u)
            if (E.type === "pong" && E.data === "probe") {
              if (
                ((this.upgrading = !0), this.emitReserved("upgrading", s), !s)
              )
                return;
              ((hn.priorWebsocketSuccess = s.name === "websocket"),
                this.transport.pause(() => {
                  u ||
                    (this.readyState !== "closed" &&
                      (O(),
                      this.setTransport(s),
                      s.send([{ type: "upgrade" }]),
                      this.emitReserved("upgrade", s),
                      (s = null),
                      (this.upgrading = !1),
                      this.flush()));
                }));
            } else {
              const A = new Error("probe error");
              ((A.transport = s.name), this.emitReserved("upgradeError", A));
            }
        }));
    };
    function h() {
      u || ((u = !0), O(), s.close(), (s = null));
    }
    const y = (E) => {
      const A = new Error("probe error: " + E);
      ((A.transport = s.name), h(), this.emitReserved("upgradeError", A));
    };
    function g() {
      y("transport closed");
    }
    function k() {
      y("socket closed");
    }
    function C(E) {
      s && E.name !== s.name && h();
    }
    const O = () => {
      (s.removeListener("open", f),
        s.removeListener("error", y),
        s.removeListener("close", g),
        this.off("close", k),
        this.off("upgrading", C));
    };
    (s.once("open", f),
      s.once("error", y),
      s.once("close", g),
      this.once("close", k),
      this.once("upgrading", C),
      this._upgrades.indexOf("webtransport") !== -1 && i !== "webtransport"
        ? this.setTimeoutFn(() => {
            u || s.open();
          }, 200)
        : s.open());
  }
  onHandshake(i) {
    ((this._upgrades = this._filterUpgrades(i.upgrades)), super.onHandshake(i));
  }
  _filterUpgrades(i) {
    const s = [];
    for (let u = 0; u < i.length; u++)
      ~this.transports.indexOf(i[u]) && s.push(i[u]);
    return s;
  }
}
let Mm = class extends Im {
  constructor(i, s = {}) {
    const u = typeof i == "object",
      f = u ? { ...i } : { ...s };
    ((!f.transports || (f.transports && typeof f.transports[0] == "string")) &&
      (f.transports = (f.transports || ["polling", "websocket", "webtransport"])
        .map((h) => Lm[h])
        .filter((h) => !!h)),
      super(u ? f : i, f));
  }
};
function Um(o, i = "", s) {
  let u = o;
  ((s = s || (typeof location < "u" && location)),
    o == null && (o = s.protocol + "//" + s.host),
    typeof o == "string" &&
      (o.charAt(0) === "/" &&
        (o.charAt(1) === "/" ? (o = s.protocol + o) : (o = s.host + o)),
      /^(https?|wss?):\/\//.test(o) ||
        (typeof s < "u" ? (o = s.protocol + "//" + o) : (o = "https://" + o)),
      (u = To(o))),
    u.port ||
      (/^(http|ws)$/.test(u.protocol)
        ? (u.port = "80")
        : /^(http|ws)s$/.test(u.protocol) && (u.port = "443")),
    (u.path = u.path || "/"));
  const h = u.host.indexOf(":") !== -1 ? "[" + u.host + "]" : u.host;
  return (
    (u.id = u.protocol + "://" + h + ":" + u.port + i),
    (u.href =
      u.protocol + "://" + h + (s && s.port === u.port ? "" : ":" + u.port)),
    u
  );
}
const Fm = typeof ArrayBuffer == "function",
  Vm = (o) =>
    typeof ArrayBuffer.isView == "function"
      ? ArrayBuffer.isView(o)
      : o.buffer instanceof ArrayBuffer,
  Pf = Object.prototype.toString,
  $m =
    typeof Blob == "function" ||
    (typeof Blob < "u" && Pf.call(Blob) === "[object BlobConstructor]"),
  Wm =
    typeof File == "function" ||
    (typeof File < "u" && Pf.call(File) === "[object FileConstructor]");
function Uo(o) {
  return (
    (Fm && (o instanceof ArrayBuffer || Vm(o))) ||
    ($m && o instanceof Blob) ||
    (Wm && o instanceof File)
  );
}
function gs(o, i) {
  if (!o || typeof o != "object") return !1;
  if (Array.isArray(o)) {
    for (let s = 0, u = o.length; s < u; s++) if (gs(o[s])) return !0;
    return !1;
  }
  if (Uo(o)) return !0;
  if (o.toJSON && typeof o.toJSON == "function" && arguments.length === 1)
    return gs(o.toJSON(), !0);
  for (const s in o)
    if (Object.prototype.hasOwnProperty.call(o, s) && gs(o[s])) return !0;
  return !1;
}
function Hm(o) {
  const i = [],
    s = o.data,
    u = o;
  return (
    (u.data = ws(s, i)),
    (u.attachments = i.length),
    { packet: u, buffers: i }
  );
}
function ws(o, i, s) {
  if (!o) return o;
  if (Uo(o)) {
    const u = { _placeholder: !0, num: i.length };
    return (i.push(o), u);
  } else if (Array.isArray(o)) {
    const u = new Array(o.length);
    for (let f = 0; f < o.length; f++) u[f] = ws(o[f], i);
    return u;
  } else if (typeof o == "object" && !(o instanceof Date)) {
    if (o.toJSON && typeof o.toJSON == "function" && !s)
      return ws(o.toJSON(), i, !0);
    const u = {};
    for (const f in o)
      Object.prototype.hasOwnProperty.call(o, f) && (u[f] = ws(o[f], i));
    return u;
  }
  return o;
}
function Qm(o, i) {
  return ((o.data = Ro(o.data, i)), delete o.attachments, o);
}
function Ro(o, i) {
  if (!o) return o;
  if (o && o._placeholder === !0) {
    if (typeof o.num == "number" && o.num >= 0 && o.num < i.length)
      return i[o.num];
    throw new Error("illegal attachments");
  } else if (Array.isArray(o))
    for (let s = 0; s < o.length; s++) o[s] = Ro(o[s], i);
  else if (typeof o == "object")
    for (const s in o)
      Object.prototype.hasOwnProperty.call(o, s) && (o[s] = Ro(o[s], i));
  return o;
}
const qm = [
  "connect",
  "connect_error",
  "disconnect",
  "disconnecting",
  "newListener",
  "removeListener",
];
var ne;
(function (o) {
  ((o[(o.CONNECT = 0)] = "CONNECT"),
    (o[(o.DISCONNECT = 1)] = "DISCONNECT"),
    (o[(o.EVENT = 2)] = "EVENT"),
    (o[(o.ACK = 3)] = "ACK"),
    (o[(o.CONNECT_ERROR = 4)] = "CONNECT_ERROR"),
    (o[(o.BINARY_EVENT = 5)] = "BINARY_EVENT"),
    (o[(o.BINARY_ACK = 6)] = "BINARY_ACK"));
})(ne || (ne = {}));
class Km {
  constructor(i) {
    this.replacer = i;
  }
  encode(i) {
    return (i.type === ne.EVENT || i.type === ne.ACK) && gs(i)
      ? this.encodeAsBinary({
          type: i.type === ne.EVENT ? ne.BINARY_EVENT : ne.BINARY_ACK,
          nsp: i.nsp,
          data: i.data,
          id: i.id,
        })
      : [this.encodeAsString(i)];
  }
  encodeAsString(i) {
    let s = "" + i.type;
    return (
      (i.type === ne.BINARY_EVENT || i.type === ne.BINARY_ACK) &&
        (s += i.attachments + "-"),
      i.nsp && i.nsp !== "/" && (s += i.nsp + ","),
      i.id != null && (s += i.id),
      i.data != null && (s += JSON.stringify(i.data, this.replacer)),
      s
    );
  }
  encodeAsBinary(i) {
    const s = Hm(i),
      u = this.encodeAsString(s.packet),
      f = s.buffers;
    return (f.unshift(u), f);
  }
}
class Fo extends Re {
  constructor(i) {
    (super(),
      (this.opts = Object.assign(
        { reviver: void 0, maxAttachments: 10 },
        typeof i == "function" ? { reviver: i } : i,
      )));
  }
  add(i) {
    let s;
    if (typeof i == "string") {
      if (this.reconstructor)
        throw new Error("got plaintext data when reconstructing a packet");
      s = this.decodeString(i);
      const u = s.type === ne.BINARY_EVENT;
      u || s.type === ne.BINARY_ACK
        ? ((s.type = u ? ne.EVENT : ne.ACK), (this.reconstructor = new Ym(s)))
        : super.emitReserved("decoded", s);
    } else if (Uo(i) || i.base64)
      if (this.reconstructor)
        ((s = this.reconstructor.takeBinaryData(i)),
          s && ((this.reconstructor = null), super.emitReserved("decoded", s)));
      else throw new Error("got binary data when not reconstructing a packet");
    else throw new Error("Unknown type: " + i);
  }
  decodeString(i) {
    let s = 0;
    const u = { type: Number(i.charAt(0)) };
    if (ne[u.type] === void 0) throw new Error("unknown packet type " + u.type);
    if (u.type === ne.BINARY_EVENT || u.type === ne.BINARY_ACK) {
      const h = s + 1;
      for (; i.charAt(++s) !== "-" && s != i.length; );
      const y = i.substring(h, s);
      if (y != Number(y) || i.charAt(s) !== "-")
        throw new Error("Illegal attachments");
      const g = Number(y);
      if (!Jm(g) || g < 1) throw new Error("Illegal attachments");
      if (g > this.opts.maxAttachments) throw new Error("too many attachments");
      u.attachments = g;
    }
    if (i.charAt(s + 1) === "/") {
      const h = s + 1;
      for (; ++s && !(i.charAt(s) === "," || s === i.length); );
      u.nsp = i.substring(h, s);
    } else u.nsp = "/";
    const f = i.charAt(s + 1);
    if (f !== "" && Number(f) == f) {
      const h = s + 1;
      for (; ++s; ) {
        const y = i.charAt(s);
        if (y == null || Number(y) != y) {
          --s;
          break;
        }
        if (s === i.length) break;
      }
      u.id = Number(i.substring(h, s + 1));
    }
    if (i.charAt(++s)) {
      const h = this.tryParse(i.substr(s));
      if (Fo.isPayloadValid(u.type, h)) u.data = h;
      else throw new Error("invalid payload");
    }
    return u;
  }
  tryParse(i) {
    try {
      return JSON.parse(i, this.opts.reviver);
    } catch {
      return !1;
    }
  }
  static isPayloadValid(i, s) {
    switch (i) {
      case ne.CONNECT:
        return Zc(s);
      case ne.DISCONNECT:
        return s === void 0;
      case ne.CONNECT_ERROR:
        return typeof s == "string" || Zc(s);
      case ne.EVENT:
      case ne.BINARY_EVENT:
        return (
          Array.isArray(s) &&
          (typeof s[0] == "number" ||
            (typeof s[0] == "string" && qm.indexOf(s[0]) === -1))
        );
      case ne.ACK:
      case ne.BINARY_ACK:
        return Array.isArray(s);
    }
  }
  destroy() {
    this.reconstructor &&
      (this.reconstructor.finishedReconstruction(),
      (this.reconstructor = null));
  }
}
class Ym {
  constructor(i) {
    ((this.packet = i), (this.buffers = []), (this.reconPack = i));
  }
  takeBinaryData(i) {
    if (
      (this.buffers.push(i), this.buffers.length === this.reconPack.attachments)
    ) {
      const s = Qm(this.reconPack, this.buffers);
      return (this.finishedReconstruction(), s);
    }
    return null;
  }
  finishedReconstruction() {
    ((this.reconPack = null), (this.buffers = []));
  }
}
const Jm =
  Number.isInteger ||
  function (o) {
    return typeof o == "number" && isFinite(o) && Math.floor(o) === o;
  };
function Zc(o) {
  return Object.prototype.toString.call(o) === "[object Object]";
}
const Xm = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      Decoder: Fo,
      Encoder: Km,
      get PacketType() {
        return ne;
      },
    },
    Symbol.toStringTag,
    { value: "Module" },
  ),
);
function Ct(o, i, s) {
  return (
    o.on(i, s),
    function () {
      o.off(i, s);
    }
  );
}
const Gm = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  newListener: 1,
  removeListener: 1,
});
class Rf extends Re {
  constructor(i, s, u) {
    (super(),
      (this.connected = !1),
      (this.recovered = !1),
      (this.receiveBuffer = []),
      (this.sendBuffer = []),
      (this._queue = []),
      (this._queueSeq = 0),
      (this.ids = 0),
      (this.acks = {}),
      (this.flags = {}),
      (this.io = i),
      (this.nsp = s),
      u && u.auth && (this.auth = u.auth),
      (this._opts = Object.assign({}, u)),
      this.io._autoConnect && this.open());
  }
  get disconnected() {
    return !this.connected;
  }
  subEvents() {
    if (this.subs) return;
    const i = this.io;
    this.subs = [
      Ct(i, "open", this.onopen.bind(this)),
      Ct(i, "packet", this.onpacket.bind(this)),
      Ct(i, "error", this.onerror.bind(this)),
      Ct(i, "close", this.onclose.bind(this)),
    ];
  }
  get active() {
    return !!this.subs;
  }
  connect() {
    return this.connected
      ? this
      : (this.subEvents(),
        this.io._reconnecting || this.io.open(),
        this.io._readyState === "open" && this.onopen(),
        this);
  }
  open() {
    return this.connect();
  }
  send(...i) {
    return (i.unshift("message"), this.emit.apply(this, i), this);
  }
  emit(i, ...s) {
    var u, f, h;
    if (Gm.hasOwnProperty(i))
      throw new Error('"' + i.toString() + '" is a reserved event name');
    if (
      (s.unshift(i),
      this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
    )
      return (this._addToQueue(s), this);
    const y = { type: ne.EVENT, data: s };
    if (
      ((y.options = {}),
      (y.options.compress = this.flags.compress !== !1),
      typeof s[s.length - 1] == "function")
    ) {
      const O = this.ids++,
        E = s.pop();
      (this._registerAckCallback(O, E), (y.id = O));
    }
    const g =
        (f =
          (u = this.io.engine) === null || u === void 0
            ? void 0
            : u.transport) === null || f === void 0
          ? void 0
          : f.writable,
      k =
        this.connected &&
        !(
          !((h = this.io.engine) === null || h === void 0) &&
          h._hasPingExpired()
        );
    return (
      (this.flags.volatile && !g) ||
        (k
          ? (this.notifyOutgoingListeners(y), this.packet(y))
          : this.sendBuffer.push(y)),
      (this.flags = {}),
      this
    );
  }
  _registerAckCallback(i, s) {
    var u;
    const f =
      (u = this.flags.timeout) !== null && u !== void 0
        ? u
        : this._opts.ackTimeout;
    if (f === void 0) {
      this.acks[i] = s;
      return;
    }
    const h = this.io.setTimeoutFn(() => {
        delete this.acks[i];
        for (let g = 0; g < this.sendBuffer.length; g++)
          this.sendBuffer[g].id === i && this.sendBuffer.splice(g, 1);
        s.call(this, new Error("operation has timed out"));
      }, f),
      y = (...g) => {
        (this.io.clearTimeoutFn(h), s.apply(this, g));
      };
    ((y.withError = !0), (this.acks[i] = y));
  }
  emitWithAck(i, ...s) {
    return new Promise((u, f) => {
      const h = (y, g) => (y ? f(y) : u(g));
      ((h.withError = !0), s.push(h), this.emit(i, ...s));
    });
  }
  _addToQueue(i) {
    let s;
    typeof i[i.length - 1] == "function" && (s = i.pop());
    const u = {
      id: this._queueSeq++,
      tryCount: 0,
      pending: !1,
      args: i,
      flags: Object.assign({ fromQueue: !0 }, this.flags),
    };
    (i.push(
      (f, ...h) => (
        this._queue[0],
        f !== null
          ? u.tryCount > this._opts.retries && (this._queue.shift(), s && s(f))
          : (this._queue.shift(), s && s(null, ...h)),
        (u.pending = !1),
        this._drainQueue()
      ),
    ),
      this._queue.push(u),
      this._drainQueue());
  }
  _drainQueue(i = !1) {
    if (!this.connected || this._queue.length === 0) return;
    const s = this._queue[0];
    (s.pending && !i) ||
      ((s.pending = !0),
      s.tryCount++,
      (this.flags = s.flags),
      this.emit.apply(this, s.args));
  }
  packet(i) {
    ((i.nsp = this.nsp), this.io._packet(i));
  }
  onopen() {
    typeof this.auth == "function"
      ? this.auth((i) => {
          this._sendConnectPacket(i);
        })
      : this._sendConnectPacket(this.auth);
  }
  _sendConnectPacket(i) {
    this.packet({
      type: ne.CONNECT,
      data: this._pid
        ? Object.assign({ pid: this._pid, offset: this._lastOffset }, i)
        : i,
    });
  }
  onerror(i) {
    this.connected || this.emitReserved("connect_error", i);
  }
  onclose(i, s) {
    ((this.connected = !1),
      delete this.id,
      this.emitReserved("disconnect", i, s),
      this._clearAcks());
  }
  _clearAcks() {
    Object.keys(this.acks).forEach((i) => {
      if (!this.sendBuffer.some((u) => String(u.id) === i)) {
        const u = this.acks[i];
        (delete this.acks[i],
          u.withError &&
            u.call(this, new Error("socket has been disconnected")));
      }
    });
  }
  onpacket(i) {
    if (i.nsp === this.nsp)
      switch (i.type) {
        case ne.CONNECT:
          i.data && i.data.sid
            ? this.onconnect(i.data.sid, i.data.pid)
            : this.emitReserved(
                "connect_error",
                new Error(
                  "It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)",
                ),
              );
          break;
        case ne.EVENT:
        case ne.BINARY_EVENT:
          this.onevent(i);
          break;
        case ne.ACK:
        case ne.BINARY_ACK:
          this.onack(i);
          break;
        case ne.DISCONNECT:
          this.ondisconnect();
          break;
        case ne.CONNECT_ERROR:
          this.destroy();
          const u = new Error(i.data.message);
          ((u.data = i.data.data), this.emitReserved("connect_error", u));
          break;
      }
  }
  onevent(i) {
    const s = i.data || [];
    (i.id != null && s.push(this.ack(i.id)),
      this.connected
        ? this.emitEvent(s)
        : this.receiveBuffer.push(Object.freeze(s)));
  }
  emitEvent(i) {
    if (this._anyListeners && this._anyListeners.length) {
      const s = this._anyListeners.slice();
      for (const u of s) u.apply(this, i);
    }
    (super.emit.apply(this, i),
      this._pid &&
        i.length &&
        typeof i[i.length - 1] == "string" &&
        (this._lastOffset = i[i.length - 1]));
  }
  ack(i) {
    const s = this;
    let u = !1;
    return function (...f) {
      u || ((u = !0), s.packet({ type: ne.ACK, id: i, data: f }));
    };
  }
  onack(i) {
    const s = this.acks[i.id];
    typeof s == "function" &&
      (delete this.acks[i.id],
      s.withError && i.data.unshift(null),
      s.apply(this, i.data));
  }
  onconnect(i, s) {
    ((this.id = i),
      (this.recovered = s && this._pid === s),
      (this._pid = s),
      (this.connected = !0),
      this.emitBuffered(),
      this._drainQueue(!0),
      this.emitReserved("connect"));
  }
  emitBuffered() {
    (this.receiveBuffer.forEach((i) => this.emitEvent(i)),
      (this.receiveBuffer = []),
      this.sendBuffer.forEach((i) => {
        (this.notifyOutgoingListeners(i), this.packet(i));
      }),
      (this.sendBuffer = []));
  }
  ondisconnect() {
    (this.destroy(), this.onclose("io server disconnect"));
  }
  destroy() {
    (this.subs && (this.subs.forEach((i) => i()), (this.subs = void 0)),
      this.io._destroy(this));
  }
  disconnect() {
    return (
      this.connected && this.packet({ type: ne.DISCONNECT }),
      this.destroy(),
      this.connected && this.onclose("io client disconnect"),
      this
    );
  }
  close() {
    return this.disconnect();
  }
  compress(i) {
    return ((this.flags.compress = i), this);
  }
  get volatile() {
    return ((this.flags.volatile = !0), this);
  }
  timeout(i) {
    return ((this.flags.timeout = i), this);
  }
  onAny(i) {
    return (
      (this._anyListeners = this._anyListeners || []),
      this._anyListeners.push(i),
      this
    );
  }
  prependAny(i) {
    return (
      (this._anyListeners = this._anyListeners || []),
      this._anyListeners.unshift(i),
      this
    );
  }
  offAny(i) {
    if (!this._anyListeners) return this;
    if (i) {
      const s = this._anyListeners;
      for (let u = 0; u < s.length; u++)
        if (i === s[u]) return (s.splice(u, 1), this);
    } else this._anyListeners = [];
    return this;
  }
  listenersAny() {
    return this._anyListeners || [];
  }
  onAnyOutgoing(i) {
    return (
      (this._anyOutgoingListeners = this._anyOutgoingListeners || []),
      this._anyOutgoingListeners.push(i),
      this
    );
  }
  prependAnyOutgoing(i) {
    return (
      (this._anyOutgoingListeners = this._anyOutgoingListeners || []),
      this._anyOutgoingListeners.unshift(i),
      this
    );
  }
  offAnyOutgoing(i) {
    if (!this._anyOutgoingListeners) return this;
    if (i) {
      const s = this._anyOutgoingListeners;
      for (let u = 0; u < s.length; u++)
        if (i === s[u]) return (s.splice(u, 1), this);
    } else this._anyOutgoingListeners = [];
    return this;
  }
  listenersAnyOutgoing() {
    return this._anyOutgoingListeners || [];
  }
  notifyOutgoingListeners(i) {
    if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
      const s = this._anyOutgoingListeners.slice();
      for (const u of s) u.apply(this, i.data);
    }
  }
}
function or(o) {
  ((o = o || {}),
    (this.ms = o.min || 100),
    (this.max = o.max || 1e4),
    (this.factor = o.factor || 2),
    (this.jitter = o.jitter > 0 && o.jitter <= 1 ? o.jitter : 0),
    (this.attempts = 0));
}
or.prototype.duration = function () {
  var o = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var i = Math.random(),
      s = Math.floor(i * this.jitter * o);
    o = (Math.floor(i * 10) & 1) == 0 ? o - s : o + s;
  }
  return Math.min(o, this.max) | 0;
};
or.prototype.reset = function () {
  this.attempts = 0;
};
or.prototype.setMin = function (o) {
  this.ms = o;
};
or.prototype.setMax = function (o) {
  this.max = o;
};
or.prototype.setJitter = function (o) {
  this.jitter = o;
};
class jo extends Re {
  constructor(i, s) {
    var u;
    (super(),
      (this.nsps = {}),
      (this.subs = []),
      i && typeof i == "object" && ((s = i), (i = void 0)),
      (s = s || {}),
      (s.path = s.path || "/socket.io"),
      (this.opts = s),
      Es(this, s),
      this.reconnection(s.reconnection !== !1),
      this.reconnectionAttempts(s.reconnectionAttempts || 1 / 0),
      this.reconnectionDelay(s.reconnectionDelay || 1e3),
      this.reconnectionDelayMax(s.reconnectionDelayMax || 5e3),
      this.randomizationFactor(
        (u = s.randomizationFactor) !== null && u !== void 0 ? u : 0.5,
      ),
      (this.backoff = new or({
        min: this.reconnectionDelay(),
        max: this.reconnectionDelayMax(),
        jitter: this.randomizationFactor(),
      })),
      this.timeout(s.timeout == null ? 2e4 : s.timeout),
      (this._readyState = "closed"),
      (this.uri = i));
    const f = s.parser || Xm;
    ((this.encoder = new f.Encoder()),
      (this.decoder = new f.Decoder()),
      (this._autoConnect = s.autoConnect !== !1),
      this._autoConnect && this.open());
  }
  reconnection(i) {
    return arguments.length
      ? ((this._reconnection = !!i), i || (this.skipReconnect = !0), this)
      : this._reconnection;
  }
  reconnectionAttempts(i) {
    return i === void 0
      ? this._reconnectionAttempts
      : ((this._reconnectionAttempts = i), this);
  }
  reconnectionDelay(i) {
    var s;
    return i === void 0
      ? this._reconnectionDelay
      : ((this._reconnectionDelay = i),
        (s = this.backoff) === null || s === void 0 || s.setMin(i),
        this);
  }
  randomizationFactor(i) {
    var s;
    return i === void 0
      ? this._randomizationFactor
      : ((this._randomizationFactor = i),
        (s = this.backoff) === null || s === void 0 || s.setJitter(i),
        this);
  }
  reconnectionDelayMax(i) {
    var s;
    return i === void 0
      ? this._reconnectionDelayMax
      : ((this._reconnectionDelayMax = i),
        (s = this.backoff) === null || s === void 0 || s.setMax(i),
        this);
  }
  timeout(i) {
    return arguments.length ? ((this._timeout = i), this) : this._timeout;
  }
  maybeReconnectOnOpen() {
    !this._reconnecting &&
      this._reconnection &&
      this.backoff.attempts === 0 &&
      this.reconnect();
  }
  open(i) {
    if (~this._readyState.indexOf("open")) return this;
    this.engine = new Mm(this.uri, this.opts);
    const s = this.engine,
      u = this;
    ((this._readyState = "opening"), (this.skipReconnect = !1));
    const f = Ct(s, "open", function () {
        (u.onopen(), i && i());
      }),
      h = (g) => {
        (this.cleanup(),
          (this._readyState = "closed"),
          this.emitReserved("error", g),
          i ? i(g) : this.maybeReconnectOnOpen());
      },
      y = Ct(s, "error", h);
    if (this._timeout !== !1) {
      const g = this._timeout,
        k = this.setTimeoutFn(() => {
          (f(), h(new Error("timeout")), s.close());
        }, g);
      (this.opts.autoUnref && k.unref(),
        this.subs.push(() => {
          this.clearTimeoutFn(k);
        }));
    }
    return (this.subs.push(f), this.subs.push(y), this);
  }
  connect(i) {
    return this.open(i);
  }
  onopen() {
    (this.cleanup(), (this._readyState = "open"), this.emitReserved("open"));
    const i = this.engine;
    this.subs.push(
      Ct(i, "ping", this.onping.bind(this)),
      Ct(i, "data", this.ondata.bind(this)),
      Ct(i, "error", this.onerror.bind(this)),
      Ct(i, "close", this.onclose.bind(this)),
      Ct(this.decoder, "decoded", this.ondecoded.bind(this)),
    );
  }
  onping() {
    this.emitReserved("ping");
  }
  ondata(i) {
    try {
      this.decoder.add(i);
    } catch (s) {
      this.onclose("parse error", s);
    }
  }
  ondecoded(i) {
    _s(() => {
      this.emitReserved("packet", i);
    }, this.setTimeoutFn);
  }
  onerror(i) {
    this.emitReserved("error", i);
  }
  socket(i, s) {
    let u = this.nsps[i];
    return (
      u
        ? this._autoConnect && !u.active && u.connect()
        : ((u = new Rf(this, i, s)), (this.nsps[i] = u)),
      u
    );
  }
  _destroy(i) {
    const s = Object.keys(this.nsps);
    for (const u of s) if (this.nsps[u].active) return;
    this._close();
  }
  _packet(i) {
    const s = this.encoder.encode(i);
    for (let u = 0; u < s.length; u++) this.engine.write(s[u], i.options);
  }
  cleanup() {
    (this.subs.forEach((i) => i()),
      (this.subs.length = 0),
      this.decoder.destroy());
  }
  _close() {
    ((this.skipReconnect = !0),
      (this._reconnecting = !1),
      this.onclose("forced close"));
  }
  disconnect() {
    return this._close();
  }
  onclose(i, s) {
    var u;
    (this.cleanup(),
      (u = this.engine) === null || u === void 0 || u.close(),
      this.backoff.reset(),
      (this._readyState = "closed"),
      this.emitReserved("close", i, s),
      this._reconnection && !this.skipReconnect && this.reconnect());
  }
  reconnect() {
    if (this._reconnecting || this.skipReconnect) return this;
    const i = this;
    if (this.backoff.attempts >= this._reconnectionAttempts)
      (this.backoff.reset(),
        this.emitReserved("reconnect_failed"),
        (this._reconnecting = !1));
    else {
      const s = this.backoff.duration();
      this._reconnecting = !0;
      const u = this.setTimeoutFn(() => {
        i.skipReconnect ||
          (this.emitReserved("reconnect_attempt", i.backoff.attempts),
          !i.skipReconnect &&
            i.open((f) => {
              f
                ? ((i._reconnecting = !1),
                  i.reconnect(),
                  this.emitReserved("reconnect_error", f))
                : i.onreconnect();
            }));
      }, s);
      (this.opts.autoUnref && u.unref(),
        this.subs.push(() => {
          this.clearTimeoutFn(u);
        }));
    }
  }
  onreconnect() {
    const i = this.backoff.attempts;
    ((this._reconnecting = !1),
      this.backoff.reset(),
      this.emitReserved("reconnect", i));
  }
}
const Xr = {};
function ks(o, i) {
  (typeof o == "object" && ((i = o), (o = void 0)), (i = i || {}));
  const s = Um(o, i.path || "/socket.io"),
    u = s.source,
    f = s.id,
    h = s.path,
    y = Xr[f] && h in Xr[f].nsps,
    g = i.forceNew || i["force new connection"] || i.multiplex === !1 || y;
  let k;
  return (
    g ? (k = new jo(u, i)) : (Xr[f] || (Xr[f] = new jo(u, i)), (k = Xr[f])),
    s.query && !i.query && (i.query = s.queryKey),
    k.socket(s.path, i)
  );
}
Object.assign(ks, { Manager: jo, Socket: Rf, io: ks, connect: ks });
const Zm = "http://localhost:5000";
function bm(o, i) {
  const { token: s } = lr(),
    u = N.useRef(null);
  return (
    N.useEffect(() => {
      if (!o || !s) return;
      const f = ks(Zm, { auth: { token: s }, transports: ["websocket"] });
      return (
        (u.current = f),
        f.emit("board:join", { boardId: o }),
        f.on("task:created", (h) => i("task:created", h)),
        f.on("task:updated", (h) => i("task:updated", h)),
        f.on("task:deleted", (h) => i("task:deleted", h)),
        f.on("activity:created", (h) => i("activity:created", h)),
        () => {
          (f.emit("board:leave", { boardId: o }), f.disconnect());
        }
      );
    }, [o, s, i]),
    u.current
  );
}
const ev = { title: "", description: "", status: "Todo", assignee: "" };
function tv(o = "") {
  const i = o.trim().split(/\s+/).filter(Boolean);
  return i.length
    ? i
        .slice(0, 2)
        .map((s) => {
          var u;
          return ((u = s[0]) == null ? void 0 : u.toUpperCase()) || "";
        })
        .join("")
    : "?";
}
function nv() {
  var Ln, Ht;
  const i = fp().id,
    s = Rn(),
    { user: u, token: f, ready: h, logout: y } = lr(),
    [g, k] = N.useState(null),
    [C, O] = N.useState(""),
    [E, A] = N.useState([]),
    [Y, ee] = N.useState(!0),
    [H, B] = N.useState(!1),
    [te, ie] = N.useState(!1),
    [le, oe] = N.useState(null),
    [Ee, he] = N.useState(""),
    [Ve, Ae] = N.useState(!1),
    [Nt, Je] = N.useState(!1),
    [yt, rt] = N.useState(""),
    [Be, Me] = N.useState(""),
    [it, je] = N.useState(""),
    [ye, D] = N.useState(!1),
    [W, I] = N.useState(null),
    [w, T] = N.useState(!1),
    J = N.useRef(!1),
    X =
      N.useMemo(() => {
        var G;
        if (!((G = g == null ? void 0 : g.members) != null && G.length))
          return "member";
        const z = g.members.find((de) => {
          var ut, Tt;
          const me = ((ut = de.user) == null ? void 0 : ut._id) || de.user;
          return (
            (me == null ? void 0 : me.toString()) ===
            ((Tt = u == null ? void 0 : u._id) == null ? void 0 : Tt.toString())
          );
        });
        return (z == null ? void 0 : z.role) || "member";
      }, [g, u]) === "owner",
    re = async () => {
      try {
        const z = await Yp(i);
        (k(z), O(z.title));
      } catch (z) {
        he(z.message || "Unable to load board.");
      }
    },
    ae = async () => {
      try {
        const z = await nm(i);
        A(z);
      } catch (z) {
        he(z.message || "Unable to load activity.");
      }
    };
  (N.useEffect(() => {
    if (h) {
      if (!f) {
        s("/login", { replace: !0 });
        return;
      }
      Promise.all([re(), ae()]).finally(() => ee(!1));
    }
  }, [h, f, s, i]),
    bm(i, (z, G) => {
      if (g) {
        if (z === "task:created" || z === "task:updated") {
          const de = G.task;
          (k((me) => {
            if (!me) return me;
            const ut = me.tasks.filter((Tt) => Tt._id !== de._id);
            return { ...me, tasks: [...ut, de] };
          }),
            ae());
        }
        z === "task:deleted" &&
          (k(
            (de) =>
              de && {
                ...de,
                tasks: de.tasks.filter((me) => me._id !== G.taskId),
              },
          ),
          ae());
      }
    }));
  const ce = () => {
      (oe({ ...ev }), ie(!0));
    },
    pe = (z) => {
      var G;
      (oe({
        _id: z._id,
        title: z.title,
        description: z.description || "",
        status: z.status,
        assignee: ((G = z.assignee) == null ? void 0 : G._id) || "",
        version: z.version || 1,
      }),
        ie(!0));
    },
    $e = (z, G) => {
      const me = ((z == null ? void 0 : z.tasks) || []).filter(
        (ut) => ut._id !== G._id,
      );
      return { ...z, tasks: [...me, G] };
    },
    jn = async (z) => {
      if (!J.current) {
        if (!z.title || !z.title.trim()) {
          he("Task title is required.");
          return;
        }
        try {
          ((J.current = !0), B(!0), he(""));
          const G = {
            title: z.title.trim(),
            description: z.description || "",
            status: z.status || "Todo",
          };
          if ((X && (G.assignee = z.assignee || null), z._id)) {
            const de = await Kc(z._id, { ...G, version: z.version || 1 });
            k((me) => $e(me, de));
          } else {
            const de = await rm(i, G);
            k((me) => $e(me, de));
          }
          (ie(!1), oe(null), ae());
        } catch (G) {
          he(G.message || "Unable to save task.");
        } finally {
          ((J.current = !1), B(!1));
        }
      }
    },
    ni = async (z) => {
      if (window.confirm(`Delete "${z.title}"?`))
        try {
          (await im(z._id),
            k((G) => ({
              ...G,
              tasks: G.tasks.filter((de) => de._id !== z._id),
            })),
            ae());
        } catch (G) {
          he(G.message || "Unable to delete task.");
        }
    },
    On = async (z, G) => {
      var de;
      try {
        const me = {
          title: z.title,
          description: z.description || "",
          status: G,
          version: z.version || 1,
        };
        X &&
          (me.assignee = ((de = z.assignee) == null ? void 0 : de._id) || null);
        const ut = await Kc(z._id, me);
        k((Tt) => ({
          ...Tt,
          tasks: Tt.tasks.map((An) => (An._id === ut._id ? ut : An)),
        }));
      } catch (me) {
        he(me.message || "Unable to move task.");
      }
    },
    ar = async () => {
      if (C.trim())
        try {
          const z = await Jp(i, C.trim());
          (k((G) => ({ ...G, title: z.title })), he(""));
        } catch (z) {
          he(z.message || "Unable to rename board.");
        }
    },
    ri = async () => {
      if (
        window.confirm(
          "Delete this board? This action removes tasks and activity.",
        )
      )
        try {
          (await vf(i), s("/dashboard"));
        } catch (z) {
          he(z.message || "Unable to delete board.");
        }
    },
    ii = async (z) => {
      if ((z.preventDefault(), !yt.trim())) {
        Me("Enter a user email.");
        return;
      }
      try {
        (D(!0), Me(""), je(""));
        const G = await Xp(i, yt.trim());
        (k(G), Je(!1), rt(""), je("Member added successfully."), Ae(!0));
      } catch (G) {
        Me(G.message || "Unable to add member.");
      } finally {
        D(!1);
      }
    },
    ur = async () => {
      if (W)
        try {
          T(!0);
          const z = await Gp(i, W.user._id);
          (k(z), I(null), je("Member removed from the board."), Ae(!0));
        } catch (z) {
          Me(z.message || "Unable to remove member.");
        } finally {
          T(!1);
        }
    },
    cr = async () => {
      (await y(), s("/login"));
    };
  return Y || !g
    ? p.jsxs("div", {
        className: "page-shell",
        children: [
          p.jsx(qc, { user: u, onLogout: cr }),
          p.jsx("main", {
            className: "container",
            children: p.jsx("div", {
              className: "loading-block",
              children: "Loading board...",
            }),
          }),
        ],
      })
    : p.jsxs("div", {
        className: "page-shell",
        children: [
          p.jsx(qc, { user: u, onLogout: cr }),
          p.jsxs("main", {
            className: "container board-page",
            children: [
              p.jsxs("div", {
                className: "board-topbar",
                children: [
                  p.jsxs("div", {
                    className: "board-title-wrap",
                    children: [
                      p.jsx(ti, {
                        to: "/dashboard",
                        className: "back-link",
                        children: "← Dashboard",
                      }),
                      p.jsxs("div", {
                        className: "board-summary",
                        children: [
                          p.jsx("h1", { children: g.title }),
                          p.jsxs("div", {
                            className: "board-summary-meta",
                            children: [
                              p.jsxs("span", {
                                children: [
                                  ((Ln = g.members) == null
                                    ? void 0
                                    : Ln.length) || 0,
                                  " members",
                                ],
                              }),
                              p.jsxs("span", {
                                children: [
                                  ((Ht = g.tasks) == null
                                    ? void 0
                                    : Ht.length) || 0,
                                  " tasks",
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  p.jsxs("div", {
                    className: "board-topbar-actions",
                    children: [
                      p.jsx("button", {
                        className: "secondary-button",
                        onClick: () => Ae(!0),
                        children: "Members",
                      }),
                      X
                        ? p.jsx("button", {
                            className: "primary-button",
                            onClick: ce,
                            children: "+ Add task",
                          })
                        : null,
                    ],
                  }),
                ],
              }),
              p.jsx("div", {
                className: "board-control-panel",
                children: X
                  ? p.jsxs("div", {
                      className: "inline-rename",
                      children: [
                        p.jsx("input", {
                          value: C,
                          onChange: (z) => O(z.target.value),
                          placeholder: "Board title",
                        }),
                        p.jsx("button", {
                          className: "secondary-button",
                          onClick: ar,
                          children: "Rename",
                        }),
                        p.jsx("button", {
                          className: "danger-button",
                          onClick: ri,
                          children: "Delete board",
                        }),
                      ],
                    })
                  : p.jsxs("div", {
                      className: "panel-note",
                      children: [
                        p.jsx("span", {
                          className: "role-badge member",
                          children: "Member",
                        }),
                        p.jsx("span", {
                          children:
                            "Board access is read/write for tasks and activity.",
                        }),
                      ],
                    }),
              }),
              Ee
                ? p.jsx("div", { className: "message error", children: Ee })
                : null,
              p.jsxs("div", {
                className: "board-shell",
                children: [
                  p.jsx("div", {
                    className: "board-main-panel",
                    children: p.jsx(em, {
                      tasks: g.tasks || [],
                      onOpenTask: pe,
                      onMoveTask: On,
                      onDeleteTask: ni,
                    }),
                  }),
                  p.jsx(bp, { items: E }),
                ],
              }),
            ],
          }),
          p.jsx(tm, {
            visible: te,
            form: le,
            members: g.members || [],
            canEditAssignee: X,
            setForm: oe,
            onClose: () => {
              (ie(!1), oe(null));
            },
            onSubmit: jn,
            saving: H,
          }),
          Ve
            ? p.jsx("div", {
                className: "modal-backdrop",
                onClick: () => Ae(!1),
                children: p.jsxs("div", {
                  className: "modal members-modal",
                  onClick: (z) => z.stopPropagation(),
                  children: [
                    p.jsxs("div", {
                      className: "modal-header members-header",
                      children: [
                        p.jsxs("div", {
                          children: [
                            p.jsx("p", {
                              className: "eyebrow",
                              children: "Board members",
                            }),
                            p.jsx("h3", { children: "Members" }),
                          ],
                        }),
                        X
                          ? p.jsx("button", {
                              className: "primary-button",
                              onClick: () => {
                                (Je(!0), Me(""), je(""));
                              },
                              children: "+ Add Member",
                            })
                          : null,
                      ],
                    }),
                    Be
                      ? p.jsx("div", {
                          className: "message error",
                          children: Be,
                        })
                      : null,
                    it
                      ? p.jsx("div", {
                          className: "message success",
                          children: it,
                        })
                      : null,
                    p.jsx("div", {
                      className: "member-list",
                      children: (g.members || []).map((z) => {
                        const G = z.user || z,
                          de = z.role || "member",
                          me = de === "owner";
                        return p.jsxs(
                          "div",
                          {
                            className: "member-item",
                            children: [
                              p.jsx("div", {
                                className: "member-avatar",
                                children: tv(G.name),
                              }),
                              p.jsxs("div", {
                                className: "member-details",
                                children: [
                                  p.jsxs("div", {
                                    className: "member-name-row",
                                    children: [
                                      p.jsx("strong", { children: G.name }),
                                      p.jsx("span", {
                                        className: `role-badge ${de}`,
                                        children:
                                          de === "owner" ? "Owner" : "Member",
                                      }),
                                    ],
                                  }),
                                  p.jsx("small", { children: G.email }),
                                ],
                              }),
                              X && !me
                                ? p.jsx("button", {
                                    className: "text-button danger",
                                    onClick: () => I({ user: G, role: de }),
                                    children: "Remove",
                                  })
                                : null,
                            ],
                          },
                          G._id,
                        );
                      }),
                    }),
                    p.jsx("div", {
                      className: "modal-actions",
                      children: p.jsx("button", {
                        className: "ghost-button",
                        onClick: () => Ae(!1),
                        children: "Close",
                      }),
                    }),
                  ],
                }),
              })
            : null,
          Nt
            ? p.jsx("div", {
                className: "modal-backdrop",
                onClick: () => Je(!1),
                children: p.jsxs("div", {
                  className: "modal compact-modal",
                  onClick: (z) => z.stopPropagation(),
                  children: [
                    p.jsx("div", {
                      className: "modal-header",
                      children: p.jsxs("div", {
                        children: [
                          p.jsx("p", {
                            className: "eyebrow",
                            children: "Invite a teammate",
                          }),
                          p.jsx("h3", { children: "Add member" }),
                        ],
                      }),
                    }),
                    p.jsxs("form", {
                      onSubmit: ii,
                      className: "form-grid",
                      children: [
                        p.jsxs("div", {
                          className: "input-wrap",
                          children: [
                            p.jsx("label", {
                              htmlFor: "member-email",
                              children: "Email",
                            }),
                            p.jsx("input", {
                              id: "member-email",
                              type: "email",
                              value: yt,
                              onChange: (z) => rt(z.target.value),
                              placeholder: "name@example.com",
                            }),
                          ],
                        }),
                        Be
                          ? p.jsx("div", {
                              className: "message error",
                              children: Be,
                            })
                          : null,
                        p.jsxs("div", {
                          className: "modal-actions",
                          children: [
                            p.jsx("button", {
                              type: "button",
                              className: "ghost-button",
                              onClick: () => Je(!1),
                              children: "Cancel",
                            }),
                            p.jsx("button", {
                              type: "submit",
                              className: "primary-button",
                              disabled: ye,
                              children: ye ? "Adding..." : "Add Member",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              })
            : null,
          W
            ? p.jsx("div", {
                className: "modal-backdrop",
                onClick: () => I(null),
                children: p.jsxs("div", {
                  className: "modal compact-modal",
                  onClick: (z) => z.stopPropagation(),
                  children: [
                    p.jsx("div", {
                      className: "modal-header",
                      children: p.jsxs("div", {
                        children: [
                          p.jsx("p", {
                            className: "eyebrow",
                            children: "Remove member",
                          }),
                          p.jsxs("h3", {
                            children: ["Remove ", W.user.name, "?"],
                          }),
                        ],
                      }),
                    }),
                    p.jsx("p", {
                      className: "confirmation-copy",
                      children:
                        "This removes them from the board and clears any task assignment linked to this board.",
                    }),
                    p.jsxs("div", {
                      className: "modal-actions",
                      children: [
                        p.jsx("button", {
                          className: "ghost-button",
                          onClick: () => I(null),
                          children: "Cancel",
                        }),
                        p.jsx("button", {
                          className: "danger-button",
                          onClick: ur,
                          disabled: w,
                          children: w ? "Removing..." : "Remove",
                        }),
                      ],
                    }),
                  ],
                }),
              })
            : null,
        ],
      });
}
function rv() {
  return p.jsxs(Pp, {
    children: [
      p.jsx(Pn, { path: "/", element: p.jsx(Vp, {}) }),
      p.jsx(Pn, { path: "/login", element: p.jsx($p, {}) }),
      p.jsx(Pn, { path: "/register", element: p.jsx(Wp, {}) }),
      p.jsx(Pn, { path: "/dashboard", element: p.jsx(Zp, {}) }),
      p.jsx(Pn, { path: "/boards/:id", element: p.jsx(nv, {}) }),
      p.jsx(Pn, { path: "*", element: p.jsx(Np, { to: "/", replace: !0 }) }),
    ],
  });
}
Dh.createRoot(document.getElementById("root")).render(
  p.jsx(ef.StrictMode, {
    children: p.jsx(zp, { children: p.jsx(Fp, { children: p.jsx(rv, {}) }) }),
  }),
);
