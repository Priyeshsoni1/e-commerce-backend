var Pb = Object.defineProperty;
var Tb = (e, t, n) =>
  t in e
    ? Pb(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (e[t] = n);
var Uc = (e, t, n) => Tb(e, typeof t != "symbol" ? t + "" : t, n);
function py(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const i in r)
        if (i !== "default" && !(i in e)) {
          const s = Object.getOwnPropertyDescriptor(r, i);
          s &&
            Object.defineProperty(
              e,
              i,
              s.get ? s : { enumerable: !0, get: () => r[i] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const s of i)
      if (s.type === "childList")
        for (const o of s.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const s = {};
    return (
      i.integrity && (s.integrity = i.integrity),
      i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (s.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (s.credentials = "omit")
        : (s.credentials = "same-origin"),
      s
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const s = n(i);
    fetch(i.href, s);
  }
})();
function hy(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var gy = { exports: {} },
  Fu = {},
  yy = { exports: {} },
  ge = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var hl = Symbol.for("react.element"),
  $b = Symbol.for("react.portal"),
  Rb = Symbol.for("react.fragment"),
  Fb = Symbol.for("react.strict_mode"),
  Lb = Symbol.for("react.profiler"),
  Ob = Symbol.for("react.provider"),
  Db = Symbol.for("react.context"),
  Ab = Symbol.for("react.forward_ref"),
  Ib = Symbol.for("react.suspense"),
  Mb = Symbol.for("react.memo"),
  zb = Symbol.for("react.lazy"),
  gh = Symbol.iterator;
function Ub(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (gh && e[gh]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var vy = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  xy = Object.assign,
  wy = {};
function Fs(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = wy),
    (this.updater = n || vy);
}
Fs.prototype.isReactComponent = {};
Fs.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Fs.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function by() {}
by.prototype = Fs.prototype;
function wm(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = wy),
    (this.updater = n || vy);
}
var bm = (wm.prototype = new by());
bm.constructor = wm;
xy(bm, Fs.prototype);
bm.isPureReactComponent = !0;
var yh = Array.isArray,
  jy = Object.prototype.hasOwnProperty,
  jm = { current: null },
  Ey = { key: !0, ref: !0, __self: !0, __source: !0 };
function Sy(e, t, n) {
  var r,
    i = {},
    s = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (s = "" + t.key),
    t))
      jy.call(t, r) && !Ey.hasOwnProperty(r) && (i[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) i.children = n;
  else if (1 < a) {
    for (var u = Array(a), c = 0; c < a; c++) u[c] = arguments[c + 2];
    i.children = u;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) i[r] === void 0 && (i[r] = a[r]);
  return {
    $$typeof: hl,
    type: e,
    key: s,
    ref: o,
    props: i,
    _owner: jm.current,
  };
}
function Bb(e, t) {
  return {
    $$typeof: hl,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Em(e) {
  return typeof e == "object" && e !== null && e.$$typeof === hl;
}
function Hb(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var vh = /\/+/g;
function Bc(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Hb("" + e.key)
    : t.toString(36);
}
function ca(e, t, n, r, i) {
  var s = typeof e;
  (s === "undefined" || s === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (s) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case hl:
          case $b:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (i = i(o)),
      (e = r === "" ? "." + Bc(o, 0) : r),
      yh(i)
        ? ((n = ""),
          e != null && (n = e.replace(vh, "$&/") + "/"),
          ca(i, t, n, "", function (c) {
            return c;
          }))
        : i != null &&
          (Em(i) &&
            (i = Bb(
              i,
              n +
                (!i.key || (o && o.key === i.key)
                  ? ""
                  : ("" + i.key).replace(vh, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), yh(e)))
    for (var a = 0; a < e.length; a++) {
      s = e[a];
      var u = r + Bc(s, a);
      o += ca(s, t, n, u, i);
    }
  else if (((u = Ub(e)), typeof u == "function"))
    for (e = u.call(e), a = 0; !(s = e.next()).done; )
      (s = s.value), (u = r + Bc(s, a++)), (o += ca(s, t, n, u, i));
  else if (s === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return o;
}
function zl(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    ca(e, r, "", "", function (s) {
      return t.call(n, s, i++);
    }),
    r
  );
}
function Vb(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Dt = { current: null },
  da = { transition: null },
  Wb = {
    ReactCurrentDispatcher: Dt,
    ReactCurrentBatchConfig: da,
    ReactCurrentOwner: jm,
  };
function Ny() {
  throw Error("act(...) is not supported in production builds of React.");
}
ge.Children = {
  map: zl,
  forEach: function (e, t, n) {
    zl(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      zl(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      zl(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Em(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
ge.Component = Fs;
ge.Fragment = Rb;
ge.Profiler = Lb;
ge.PureComponent = wm;
ge.StrictMode = Fb;
ge.Suspense = Ib;
ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Wb;
ge.act = Ny;
ge.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = xy({}, e.props),
    i = e.key,
    s = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((s = t.ref), (o = jm.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (u in t)
      jy.call(t, u) &&
        !Ey.hasOwnProperty(u) &&
        (r[u] = t[u] === void 0 && a !== void 0 ? a[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    a = Array(u);
    for (var c = 0; c < u; c++) a[c] = arguments[c + 2];
    r.children = a;
  }
  return { $$typeof: hl, type: e.type, key: i, ref: s, props: r, _owner: o };
};
ge.createContext = function (e) {
  return (
    (e = {
      $$typeof: Db,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Ob, _context: e }),
    (e.Consumer = e)
  );
};
ge.createElement = Sy;
ge.createFactory = function (e) {
  var t = Sy.bind(null, e);
  return (t.type = e), t;
};
ge.createRef = function () {
  return { current: null };
};
ge.forwardRef = function (e) {
  return { $$typeof: Ab, render: e };
};
ge.isValidElement = Em;
ge.lazy = function (e) {
  return { $$typeof: zb, _payload: { _status: -1, _result: e }, _init: Vb };
};
ge.memo = function (e, t) {
  return { $$typeof: Mb, type: e, compare: t === void 0 ? null : t };
};
ge.startTransition = function (e) {
  var t = da.transition;
  da.transition = {};
  try {
    e();
  } finally {
    da.transition = t;
  }
};
ge.unstable_act = Ny;
ge.useCallback = function (e, t) {
  return Dt.current.useCallback(e, t);
};
ge.useContext = function (e) {
  return Dt.current.useContext(e);
};
ge.useDebugValue = function () {};
ge.useDeferredValue = function (e) {
  return Dt.current.useDeferredValue(e);
};
ge.useEffect = function (e, t) {
  return Dt.current.useEffect(e, t);
};
ge.useId = function () {
  return Dt.current.useId();
};
ge.useImperativeHandle = function (e, t, n) {
  return Dt.current.useImperativeHandle(e, t, n);
};
ge.useInsertionEffect = function (e, t) {
  return Dt.current.useInsertionEffect(e, t);
};
ge.useLayoutEffect = function (e, t) {
  return Dt.current.useLayoutEffect(e, t);
};
ge.useMemo = function (e, t) {
  return Dt.current.useMemo(e, t);
};
ge.useReducer = function (e, t, n) {
  return Dt.current.useReducer(e, t, n);
};
ge.useRef = function (e) {
  return Dt.current.useRef(e);
};
ge.useState = function (e) {
  return Dt.current.useState(e);
};
ge.useSyncExternalStore = function (e, t, n) {
  return Dt.current.useSyncExternalStore(e, t, n);
};
ge.useTransition = function () {
  return Dt.current.useTransition();
};
ge.version = "18.3.1";
yy.exports = ge;
var m = yy.exports;
const D = hy(m),
  hs = py({ __proto__: null, default: D }, [m]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var qb = m,
  Kb = Symbol.for("react.element"),
  Qb = Symbol.for("react.fragment"),
  Yb = Object.prototype.hasOwnProperty,
  Gb = qb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Xb = { key: !0, ref: !0, __self: !0, __source: !0 };
function ky(e, t, n) {
  var r,
    i = {},
    s = null,
    o = null;
  n !== void 0 && (s = "" + n),
    t.key !== void 0 && (s = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
  for (r in t) Yb.call(t, r) && !Xb.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: Kb,
    type: e,
    key: s,
    ref: o,
    props: i,
    _owner: Gb.current,
  };
}
Fu.Fragment = Qb;
Fu.jsx = ky;
Fu.jsxs = ky;
gy.exports = Fu;
var l = gy.exports,
  Cy = { exports: {} },
  ln = {},
  _y = { exports: {} },
  Py = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(T, I) {
    var W = T.length;
    T.push(I);
    e: for (; 0 < W; ) {
      var V = (W - 1) >>> 1,
        oe = T[V];
      if (0 < i(oe, I)) (T[V] = I), (T[W] = oe), (W = V);
      else break e;
    }
  }
  function n(T) {
    return T.length === 0 ? null : T[0];
  }
  function r(T) {
    if (T.length === 0) return null;
    var I = T[0],
      W = T.pop();
    if (W !== I) {
      T[0] = W;
      e: for (var V = 0, oe = T.length, ce = oe >>> 1; V < ce; ) {
        var je = 2 * (V + 1) - 1,
          pe = T[je],
          ve = je + 1,
          Ge = T[ve];
        if (0 > i(pe, W))
          ve < oe && 0 > i(Ge, pe)
            ? ((T[V] = Ge), (T[ve] = W), (V = ve))
            : ((T[V] = pe), (T[je] = W), (V = je));
        else if (ve < oe && 0 > i(Ge, W)) (T[V] = Ge), (T[ve] = W), (V = ve);
        else break e;
      }
    }
    return I;
  }
  function i(T, I) {
    var W = T.sortIndex - I.sortIndex;
    return W !== 0 ? W : T.id - I.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var s = performance;
    e.unstable_now = function () {
      return s.now();
    };
  } else {
    var o = Date,
      a = o.now();
    e.unstable_now = function () {
      return o.now() - a;
    };
  }
  var u = [],
    c = [],
    d = 1,
    f = null,
    p = 3,
    g = !1,
    x = !1,
    w = !1,
    j = typeof setTimeout == "function" ? setTimeout : null,
    y = typeof clearTimeout == "function" ? clearTimeout : null,
    h = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function v(T) {
    for (var I = n(c); I !== null; ) {
      if (I.callback === null) r(c);
      else if (I.startTime <= T)
        r(c), (I.sortIndex = I.expirationTime), t(u, I);
      else break;
      I = n(c);
    }
  }
  function b(T) {
    if (((w = !1), v(T), !x))
      if (n(u) !== null) (x = !0), le(S);
      else {
        var I = n(c);
        I !== null && Z(b, I.startTime - T);
      }
  }
  function S(T, I) {
    (x = !1), w && ((w = !1), y(k), (k = -1)), (g = !0);
    var W = p;
    try {
      for (
        v(I), f = n(u);
        f !== null && (!(f.expirationTime > I) || (T && !z()));

      ) {
        var V = f.callback;
        if (typeof V == "function") {
          (f.callback = null), (p = f.priorityLevel);
          var oe = V(f.expirationTime <= I);
          (I = e.unstable_now()),
            typeof oe == "function" ? (f.callback = oe) : f === n(u) && r(u),
            v(I);
        } else r(u);
        f = n(u);
      }
      if (f !== null) var ce = !0;
      else {
        var je = n(c);
        je !== null && Z(b, je.startTime - I), (ce = !1);
      }
      return ce;
    } finally {
      (f = null), (p = W), (g = !1);
    }
  }
  var E = !1,
    N = null,
    k = -1,
    L = 5,
    F = -1;
  function z() {
    return !(e.unstable_now() - F < L);
  }
  function A() {
    if (N !== null) {
      var T = e.unstable_now();
      F = T;
      var I = !0;
      try {
        I = N(!0, T);
      } finally {
        I ? H() : ((E = !1), (N = null));
      }
    } else E = !1;
  }
  var H;
  if (typeof h == "function")
    H = function () {
      h(A);
    };
  else if (typeof MessageChannel < "u") {
    var K = new MessageChannel(),
      ae = K.port2;
    (K.port1.onmessage = A),
      (H = function () {
        ae.postMessage(null);
      });
  } else
    H = function () {
      j(A, 0);
    };
  function le(T) {
    (N = T), E || ((E = !0), H());
  }
  function Z(T, I) {
    k = j(function () {
      T(e.unstable_now());
    }, I);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (T) {
      T.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      x || g || ((x = !0), le(S));
    }),
    (e.unstable_forceFrameRate = function (T) {
      0 > T || 125 < T
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (L = 0 < T ? Math.floor(1e3 / T) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return p;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(u);
    }),
    (e.unstable_next = function (T) {
      switch (p) {
        case 1:
        case 2:
        case 3:
          var I = 3;
          break;
        default:
          I = p;
      }
      var W = p;
      p = I;
      try {
        return T();
      } finally {
        p = W;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (T, I) {
      switch (T) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          T = 3;
      }
      var W = p;
      p = T;
      try {
        return I();
      } finally {
        p = W;
      }
    }),
    (e.unstable_scheduleCallback = function (T, I, W) {
      var V = e.unstable_now();
      switch (
        (typeof W == "object" && W !== null
          ? ((W = W.delay), (W = typeof W == "number" && 0 < W ? V + W : V))
          : (W = V),
        T)
      ) {
        case 1:
          var oe = -1;
          break;
        case 2:
          oe = 250;
          break;
        case 5:
          oe = 1073741823;
          break;
        case 4:
          oe = 1e4;
          break;
        default:
          oe = 5e3;
      }
      return (
        (oe = W + oe),
        (T = {
          id: d++,
          callback: I,
          priorityLevel: T,
          startTime: W,
          expirationTime: oe,
          sortIndex: -1,
        }),
        W > V
          ? ((T.sortIndex = W),
            t(c, T),
            n(u) === null &&
              T === n(c) &&
              (w ? (y(k), (k = -1)) : (w = !0), Z(b, W - V)))
          : ((T.sortIndex = oe), t(u, T), x || g || ((x = !0), le(S))),
        T
      );
    }),
    (e.unstable_shouldYield = z),
    (e.unstable_wrapCallback = function (T) {
      var I = p;
      return function () {
        var W = p;
        p = I;
        try {
          return T.apply(this, arguments);
        } finally {
          p = W;
        }
      };
    });
})(Py);
_y.exports = Py;
var Zb = _y.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Jb = m,
  rn = Zb;
function B(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
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
var Ty = new Set(),
  zo = {};
function Ai(e, t) {
  gs(e, t), gs(e + "Capture", t);
}
function gs(e, t) {
  for (zo[e] = t, e = 0; e < t.length; e++) Ty.add(t[e]);
}
var or = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  zd = Object.prototype.hasOwnProperty,
  ej =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  xh = {},
  wh = {};
function tj(e) {
  return zd.call(wh, e)
    ? !0
    : zd.call(xh, e)
    ? !1
    : ej.test(e)
    ? (wh[e] = !0)
    : ((xh[e] = !0), !1);
}
function nj(e, t, n, r) {
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
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function rj(e, t, n, r) {
  if (t === null || typeof t > "u" || nj(e, t, n, r)) return !0;
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
function At(e, t, n, r, i, s, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = s),
    (this.removeEmptyString = o);
}
var wt = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    wt[e] = new At(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  wt[t] = new At(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  wt[e] = new At(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  wt[e] = new At(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    wt[e] = new At(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  wt[e] = new At(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  wt[e] = new At(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  wt[e] = new At(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  wt[e] = new At(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Sm = /[\-:]([a-z])/g;
function Nm(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Sm, Nm);
    wt[t] = new At(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Sm, Nm);
    wt[t] = new At(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Sm, Nm);
  wt[t] = new At(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  wt[e] = new At(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
wt.xlinkHref = new At(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  wt[e] = new At(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function km(e, t, n, r) {
  var i = wt.hasOwnProperty(t) ? wt[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (rj(t, n, i, r) && (n = null),
    r || i === null
      ? tj(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var mr = Jb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Ul = Symbol.for("react.element"),
  Yi = Symbol.for("react.portal"),
  Gi = Symbol.for("react.fragment"),
  Cm = Symbol.for("react.strict_mode"),
  Ud = Symbol.for("react.profiler"),
  $y = Symbol.for("react.provider"),
  Ry = Symbol.for("react.context"),
  _m = Symbol.for("react.forward_ref"),
  Bd = Symbol.for("react.suspense"),
  Hd = Symbol.for("react.suspense_list"),
  Pm = Symbol.for("react.memo"),
  jr = Symbol.for("react.lazy"),
  Fy = Symbol.for("react.offscreen"),
  bh = Symbol.iterator;
function Js(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (bh && e[bh]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var We = Object.assign,
  Hc;
function yo(e) {
  if (Hc === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Hc = (t && t[1]) || "";
    }
  return (
    `
` +
    Hc +
    e
  );
}
var Vc = !1;
function Wc(e, t) {
  if (!e || Vc) return "";
  Vc = !0;
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
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          r = c;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (
        var i = c.stack.split(`
`),
          s = r.stack.split(`
`),
          o = i.length - 1,
          a = s.length - 1;
        1 <= o && 0 <= a && i[o] !== s[a];

      )
        a--;
      for (; 1 <= o && 0 <= a; o--, a--)
        if (i[o] !== s[a]) {
          if (o !== 1 || a !== 1)
            do
              if ((o--, a--, 0 > a || i[o] !== s[a])) {
                var u =
                  `
` + i[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    u.includes("<anonymous>") &&
                    (u = u.replace("<anonymous>", e.displayName)),
                  u
                );
              }
            while (1 <= o && 0 <= a);
          break;
        }
    }
  } finally {
    (Vc = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? yo(e) : "";
}
function ij(e) {
  switch (e.tag) {
    case 5:
      return yo(e.type);
    case 16:
      return yo("Lazy");
    case 13:
      return yo("Suspense");
    case 19:
      return yo("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Wc(e.type, !1)), e;
    case 11:
      return (e = Wc(e.type.render, !1)), e;
    case 1:
      return (e = Wc(e.type, !0)), e;
    default:
      return "";
  }
}
function Vd(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Gi:
      return "Fragment";
    case Yi:
      return "Portal";
    case Ud:
      return "Profiler";
    case Cm:
      return "StrictMode";
    case Bd:
      return "Suspense";
    case Hd:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Ry:
        return (e.displayName || "Context") + ".Consumer";
      case $y:
        return (e._context.displayName || "Context") + ".Provider";
      case _m:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Pm:
        return (
          (t = e.displayName || null), t !== null ? t : Vd(e.type) || "Memo"
        );
      case jr:
        (t = e._payload), (e = e._init);
        try {
          return Vd(e(t));
        } catch {}
    }
  return null;
}
function sj(e) {
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
      return Vd(t);
    case 8:
      return t === Cm ? "StrictMode" : "Mode";
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
function Br(e) {
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
function Ly(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function oj(e) {
  var t = Ly(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      s = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (o) {
          (r = "" + o), s.call(this, o);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Bl(e) {
  e._valueTracker || (e._valueTracker = oj(e));
}
function Oy(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Ly(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function La(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Wd(e, t) {
  var n = t.checked;
  return We({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function jh(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Br(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Dy(e, t) {
  (t = t.checked), t != null && km(e, "checked", t, !1);
}
function qd(e, t) {
  Dy(e, t);
  var n = Br(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Kd(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Kd(e, t.type, Br(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Eh(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Kd(e, t, n) {
  (t !== "number" || La(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var vo = Array.isArray;
function as(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Br(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function Qd(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(B(91));
  return We({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Sh(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(B(92));
      if (vo(n)) {
        if (1 < n.length) throw Error(B(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Br(n) };
}
function Ay(e, t) {
  var n = Br(t.value),
    r = Br(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Nh(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Iy(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Yd(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Iy(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Hl,
  My = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Hl = Hl || document.createElement("div"),
          Hl.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Hl.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Uo(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var No = {
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
  lj = ["Webkit", "ms", "Moz", "O"];
Object.keys(No).forEach(function (e) {
  lj.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (No[t] = No[e]);
  });
});
function zy(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (No.hasOwnProperty(e) && No[e])
    ? ("" + t).trim()
    : t + "px";
}
function Uy(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = zy(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var aj = We(
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
  }
);
function Gd(e, t) {
  if (t) {
    if (aj[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(B(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(B(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(B(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(B(62));
  }
}
function Xd(e, t) {
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
var Zd = null;
function Tm(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Jd = null,
  us = null,
  cs = null;
function kh(e) {
  if ((e = vl(e))) {
    if (typeof Jd != "function") throw Error(B(280));
    var t = e.stateNode;
    t && ((t = Iu(t)), Jd(e.stateNode, e.type, t));
  }
}
function By(e) {
  us ? (cs ? cs.push(e) : (cs = [e])) : (us = e);
}
function Hy() {
  if (us) {
    var e = us,
      t = cs;
    if (((cs = us = null), kh(e), t)) for (e = 0; e < t.length; e++) kh(t[e]);
  }
}
function Vy(e, t) {
  return e(t);
}
function Wy() {}
var qc = !1;
function qy(e, t, n) {
  if (qc) return e(t, n);
  qc = !0;
  try {
    return Vy(e, t, n);
  } finally {
    (qc = !1), (us !== null || cs !== null) && (Wy(), Hy());
  }
}
function Bo(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Iu(n);
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
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(B(231, t, typeof n));
  return n;
}
var ef = !1;
if (or)
  try {
    var eo = {};
    Object.defineProperty(eo, "passive", {
      get: function () {
        ef = !0;
      },
    }),
      window.addEventListener("test", eo, eo),
      window.removeEventListener("test", eo, eo);
  } catch {
    ef = !1;
  }
function uj(e, t, n, r, i, s, o, a, u) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (d) {
    this.onError(d);
  }
}
var ko = !1,
  Oa = null,
  Da = !1,
  tf = null,
  cj = {
    onError: function (e) {
      (ko = !0), (Oa = e);
    },
  };
function dj(e, t, n, r, i, s, o, a, u) {
  (ko = !1), (Oa = null), uj.apply(cj, arguments);
}
function fj(e, t, n, r, i, s, o, a, u) {
  if ((dj.apply(this, arguments), ko)) {
    if (ko) {
      var c = Oa;
      (ko = !1), (Oa = null);
    } else throw Error(B(198));
    Da || ((Da = !0), (tf = c));
  }
}
function Ii(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Ky(e) {
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
function Ch(e) {
  if (Ii(e) !== e) throw Error(B(188));
}
function mj(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Ii(e)), t === null)) throw Error(B(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var s = i.alternate;
    if (s === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === s.child) {
      for (s = i.child; s; ) {
        if (s === n) return Ch(i), e;
        if (s === r) return Ch(i), t;
        s = s.sibling;
      }
      throw Error(B(188));
    }
    if (n.return !== r.return) (n = i), (r = s);
    else {
      for (var o = !1, a = i.child; a; ) {
        if (a === n) {
          (o = !0), (n = i), (r = s);
          break;
        }
        if (a === r) {
          (o = !0), (r = i), (n = s);
          break;
        }
        a = a.sibling;
      }
      if (!o) {
        for (a = s.child; a; ) {
          if (a === n) {
            (o = !0), (n = s), (r = i);
            break;
          }
          if (a === r) {
            (o = !0), (r = s), (n = i);
            break;
          }
          a = a.sibling;
        }
        if (!o) throw Error(B(189));
      }
    }
    if (n.alternate !== r) throw Error(B(190));
  }
  if (n.tag !== 3) throw Error(B(188));
  return n.stateNode.current === n ? e : t;
}
function Qy(e) {
  return (e = mj(e)), e !== null ? Yy(e) : null;
}
function Yy(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Yy(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Gy = rn.unstable_scheduleCallback,
  _h = rn.unstable_cancelCallback,
  pj = rn.unstable_shouldYield,
  hj = rn.unstable_requestPaint,
  Ze = rn.unstable_now,
  gj = rn.unstable_getCurrentPriorityLevel,
  $m = rn.unstable_ImmediatePriority,
  Xy = rn.unstable_UserBlockingPriority,
  Aa = rn.unstable_NormalPriority,
  yj = rn.unstable_LowPriority,
  Zy = rn.unstable_IdlePriority,
  Lu = null,
  Bn = null;
function vj(e) {
  if (Bn && typeof Bn.onCommitFiberRoot == "function")
    try {
      Bn.onCommitFiberRoot(Lu, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var _n = Math.clz32 ? Math.clz32 : bj,
  xj = Math.log,
  wj = Math.LN2;
function bj(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((xj(e) / wj) | 0)) | 0;
}
var Vl = 64,
  Wl = 4194304;
function xo(e) {
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
function Ia(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    s = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var a = o & ~i;
    a !== 0 ? (r = xo(a)) : ((s &= o), s !== 0 && (r = xo(s)));
  } else (o = n & ~i), o !== 0 ? (r = xo(o)) : s !== 0 && (r = xo(s));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (s = t & -t), i >= s || (i === 16 && (s & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - _n(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function jj(e, t) {
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
function Ej(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      s = e.pendingLanes;
    0 < s;

  ) {
    var o = 31 - _n(s),
      a = 1 << o,
      u = i[o];
    u === -1
      ? (!(a & n) || a & r) && (i[o] = jj(a, t))
      : u <= t && (e.expiredLanes |= a),
      (s &= ~a);
  }
}
function nf(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Jy() {
  var e = Vl;
  return (Vl <<= 1), !(Vl & 4194240) && (Vl = 64), e;
}
function Kc(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function gl(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - _n(t)),
    (e[t] = n);
}
function Sj(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - _n(n),
      s = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~s);
  }
}
function Rm(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - _n(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var Ce = 0;
function ev(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var tv,
  Fm,
  nv,
  rv,
  iv,
  rf = !1,
  ql = [],
  Fr = null,
  Lr = null,
  Or = null,
  Ho = new Map(),
  Vo = new Map(),
  Nr = [],
  Nj =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Ph(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Fr = null;
      break;
    case "dragenter":
    case "dragleave":
      Lr = null;
      break;
    case "mouseover":
    case "mouseout":
      Or = null;
      break;
    case "pointerover":
    case "pointerout":
      Ho.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Vo.delete(t.pointerId);
  }
}
function to(e, t, n, r, i, s) {
  return e === null || e.nativeEvent !== s
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [i],
      }),
      t !== null && ((t = vl(t)), t !== null && Fm(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function kj(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (Fr = to(Fr, e, t, n, r, i)), !0;
    case "dragenter":
      return (Lr = to(Lr, e, t, n, r, i)), !0;
    case "mouseover":
      return (Or = to(Or, e, t, n, r, i)), !0;
    case "pointerover":
      var s = i.pointerId;
      return Ho.set(s, to(Ho.get(s) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (s = i.pointerId), Vo.set(s, to(Vo.get(s) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function sv(e) {
  var t = ui(e.target);
  if (t !== null) {
    var n = Ii(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Ky(n)), t !== null)) {
          (e.blockedOn = t),
            iv(e.priority, function () {
              nv(n);
            });
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
function fa(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = sf(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Zd = r), n.target.dispatchEvent(r), (Zd = null);
    } else return (t = vl(n)), t !== null && Fm(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Th(e, t, n) {
  fa(e) && n.delete(t);
}
function Cj() {
  (rf = !1),
    Fr !== null && fa(Fr) && (Fr = null),
    Lr !== null && fa(Lr) && (Lr = null),
    Or !== null && fa(Or) && (Or = null),
    Ho.forEach(Th),
    Vo.forEach(Th);
}
function no(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    rf ||
      ((rf = !0),
      rn.unstable_scheduleCallback(rn.unstable_NormalPriority, Cj)));
}
function Wo(e) {
  function t(i) {
    return no(i, e);
  }
  if (0 < ql.length) {
    no(ql[0], e);
    for (var n = 1; n < ql.length; n++) {
      var r = ql[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Fr !== null && no(Fr, e),
      Lr !== null && no(Lr, e),
      Or !== null && no(Or, e),
      Ho.forEach(t),
      Vo.forEach(t),
      n = 0;
    n < Nr.length;
    n++
  )
    (r = Nr[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Nr.length && ((n = Nr[0]), n.blockedOn === null); )
    sv(n), n.blockedOn === null && Nr.shift();
}
var ds = mr.ReactCurrentBatchConfig,
  Ma = !0;
function _j(e, t, n, r) {
  var i = Ce,
    s = ds.transition;
  ds.transition = null;
  try {
    (Ce = 1), Lm(e, t, n, r);
  } finally {
    (Ce = i), (ds.transition = s);
  }
}
function Pj(e, t, n, r) {
  var i = Ce,
    s = ds.transition;
  ds.transition = null;
  try {
    (Ce = 4), Lm(e, t, n, r);
  } finally {
    (Ce = i), (ds.transition = s);
  }
}
function Lm(e, t, n, r) {
  if (Ma) {
    var i = sf(e, t, n, r);
    if (i === null) rd(e, t, r, za, n), Ph(e, r);
    else if (kj(i, e, t, n, r)) r.stopPropagation();
    else if ((Ph(e, r), t & 4 && -1 < Nj.indexOf(e))) {
      for (; i !== null; ) {
        var s = vl(i);
        if (
          (s !== null && tv(s),
          (s = sf(e, t, n, r)),
          s === null && rd(e, t, r, za, n),
          s === i)
        )
          break;
        i = s;
      }
      i !== null && r.stopPropagation();
    } else rd(e, t, r, null, n);
  }
}
var za = null;
function sf(e, t, n, r) {
  if (((za = null), (e = Tm(r)), (e = ui(e)), e !== null))
    if (((t = Ii(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Ky(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (za = e), null;
}
function ov(e) {
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
      switch (gj()) {
        case $m:
          return 1;
        case Xy:
          return 4;
        case Aa:
        case yj:
          return 16;
        case Zy:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Pr = null,
  Om = null,
  ma = null;
function lv() {
  if (ma) return ma;
  var e,
    t = Om,
    n = t.length,
    r,
    i = "value" in Pr ? Pr.value : Pr.textContent,
    s = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === i[s - r]; r++);
  return (ma = i.slice(e, 1 < r ? 1 - r : void 0));
}
function pa(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Kl() {
  return !0;
}
function $h() {
  return !1;
}
function an(e) {
  function t(n, r, i, s, o) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = s),
      (this.target = o),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(s) : s[a]));
    return (
      (this.isDefaultPrevented = (
        s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1
      )
        ? Kl
        : $h),
      (this.isPropagationStopped = $h),
      this
    );
  }
  return (
    We(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Kl));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Kl));
      },
      persist: function () {},
      isPersistent: Kl,
    }),
    t
  );
}
var Ls = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Dm = an(Ls),
  yl = We({}, Ls, { view: 0, detail: 0 }),
  Tj = an(yl),
  Qc,
  Yc,
  ro,
  Ou = We({}, yl, {
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
    getModifierState: Am,
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
        : (e !== ro &&
            (ro && e.type === "mousemove"
              ? ((Qc = e.screenX - ro.screenX), (Yc = e.screenY - ro.screenY))
              : (Yc = Qc = 0),
            (ro = e)),
          Qc);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Yc;
    },
  }),
  Rh = an(Ou),
  $j = We({}, Ou, { dataTransfer: 0 }),
  Rj = an($j),
  Fj = We({}, yl, { relatedTarget: 0 }),
  Gc = an(Fj),
  Lj = We({}, Ls, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Oj = an(Lj),
  Dj = We({}, Ls, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Aj = an(Dj),
  Ij = We({}, Ls, { data: 0 }),
  Fh = an(Ij),
  Mj = {
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
  zj = {
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
  Uj = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Bj(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Uj[e]) ? !!t[e] : !1;
}
function Am() {
  return Bj;
}
var Hj = We({}, yl, {
    key: function (e) {
      if (e.key) {
        var t = Mj[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = pa(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? zj[e.keyCode] || "Unidentified"
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
    getModifierState: Am,
    charCode: function (e) {
      return e.type === "keypress" ? pa(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? pa(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Vj = an(Hj),
  Wj = We({}, Ou, {
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
  Lh = an(Wj),
  qj = We({}, yl, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Am,
  }),
  Kj = an(qj),
  Qj = We({}, Ls, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Yj = an(Qj),
  Gj = We({}, Ou, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
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
  Xj = an(Gj),
  Zj = [9, 13, 27, 32],
  Im = or && "CompositionEvent" in window,
  Co = null;
or && "documentMode" in document && (Co = document.documentMode);
var Jj = or && "TextEvent" in window && !Co,
  av = or && (!Im || (Co && 8 < Co && 11 >= Co)),
  Oh = " ",
  Dh = !1;
function uv(e, t) {
  switch (e) {
    case "keyup":
      return Zj.indexOf(t.keyCode) !== -1;
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
function cv(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Xi = !1;
function eE(e, t) {
  switch (e) {
    case "compositionend":
      return cv(t);
    case "keypress":
      return t.which !== 32 ? null : ((Dh = !0), Oh);
    case "textInput":
      return (e = t.data), e === Oh && Dh ? null : e;
    default:
      return null;
  }
}
function tE(e, t) {
  if (Xi)
    return e === "compositionend" || (!Im && uv(e, t))
      ? ((e = lv()), (ma = Om = Pr = null), (Xi = !1), e)
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
      return av && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var nE = {
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
function Ah(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!nE[e.type] : t === "textarea";
}
function dv(e, t, n, r) {
  By(r),
    (t = Ua(t, "onChange")),
    0 < t.length &&
      ((n = new Dm("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var _o = null,
  qo = null;
function rE(e) {
  jv(e, 0);
}
function Du(e) {
  var t = es(e);
  if (Oy(t)) return e;
}
function iE(e, t) {
  if (e === "change") return t;
}
var fv = !1;
if (or) {
  var Xc;
  if (or) {
    var Zc = "oninput" in document;
    if (!Zc) {
      var Ih = document.createElement("div");
      Ih.setAttribute("oninput", "return;"),
        (Zc = typeof Ih.oninput == "function");
    }
    Xc = Zc;
  } else Xc = !1;
  fv = Xc && (!document.documentMode || 9 < document.documentMode);
}
function Mh() {
  _o && (_o.detachEvent("onpropertychange", mv), (qo = _o = null));
}
function mv(e) {
  if (e.propertyName === "value" && Du(qo)) {
    var t = [];
    dv(t, qo, e, Tm(e)), qy(rE, t);
  }
}
function sE(e, t, n) {
  e === "focusin"
    ? (Mh(), (_o = t), (qo = n), _o.attachEvent("onpropertychange", mv))
    : e === "focusout" && Mh();
}
function oE(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Du(qo);
}
function lE(e, t) {
  if (e === "click") return Du(t);
}
function aE(e, t) {
  if (e === "input" || e === "change") return Du(t);
}
function uE(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var $n = typeof Object.is == "function" ? Object.is : uE;
function Ko(e, t) {
  if ($n(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!zd.call(t, i) || !$n(e[i], t[i])) return !1;
  }
  return !0;
}
function zh(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Uh(e, t) {
  var n = zh(e);
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
    n = zh(n);
  }
}
function pv(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? pv(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function hv() {
  for (var e = window, t = La(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = La(e.document);
  }
  return t;
}
function Mm(e) {
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
function cE(e) {
  var t = hv(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    pv(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Mm(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          s = Math.min(r.start, i);
        (r = r.end === void 0 ? s : Math.min(r.end, i)),
          !e.extend && s > r && ((i = r), (r = s), (s = i)),
          (i = Uh(n, s));
        var o = Uh(n, r);
        i &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          s > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var dE = or && "documentMode" in document && 11 >= document.documentMode,
  Zi = null,
  of = null,
  Po = null,
  lf = !1;
function Bh(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  lf ||
    Zi == null ||
    Zi !== La(r) ||
    ((r = Zi),
    "selectionStart" in r && Mm(r)
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
    (Po && Ko(Po, r)) ||
      ((Po = r),
      (r = Ua(of, "onSelect")),
      0 < r.length &&
        ((t = new Dm("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Zi))));
}
function Ql(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Ji = {
    animationend: Ql("Animation", "AnimationEnd"),
    animationiteration: Ql("Animation", "AnimationIteration"),
    animationstart: Ql("Animation", "AnimationStart"),
    transitionend: Ql("Transition", "TransitionEnd"),
  },
  Jc = {},
  gv = {};
or &&
  ((gv = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Ji.animationend.animation,
    delete Ji.animationiteration.animation,
    delete Ji.animationstart.animation),
  "TransitionEvent" in window || delete Ji.transitionend.transition);
function Au(e) {
  if (Jc[e]) return Jc[e];
  if (!Ji[e]) return e;
  var t = Ji[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in gv) return (Jc[e] = t[n]);
  return e;
}
var yv = Au("animationend"),
  vv = Au("animationiteration"),
  xv = Au("animationstart"),
  wv = Au("transitionend"),
  bv = new Map(),
  Hh =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Qr(e, t) {
  bv.set(e, t), Ai(t, [e]);
}
for (var ed = 0; ed < Hh.length; ed++) {
  var td = Hh[ed],
    fE = td.toLowerCase(),
    mE = td[0].toUpperCase() + td.slice(1);
  Qr(fE, "on" + mE);
}
Qr(yv, "onAnimationEnd");
Qr(vv, "onAnimationIteration");
Qr(xv, "onAnimationStart");
Qr("dblclick", "onDoubleClick");
Qr("focusin", "onFocus");
Qr("focusout", "onBlur");
Qr(wv, "onTransitionEnd");
gs("onMouseEnter", ["mouseout", "mouseover"]);
gs("onMouseLeave", ["mouseout", "mouseover"]);
gs("onPointerEnter", ["pointerout", "pointerover"]);
gs("onPointerLeave", ["pointerout", "pointerover"]);
Ai(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Ai(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Ai("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Ai(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Ai(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Ai(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var wo =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  pE = new Set("cancel close invalid load scroll toggle".split(" ").concat(wo));
function Vh(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), fj(r, t, void 0, e), (e.currentTarget = null);
}
function jv(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var s = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var a = r[o],
            u = a.instance,
            c = a.currentTarget;
          if (((a = a.listener), u !== s && i.isPropagationStopped())) break e;
          Vh(i, a, c), (s = u);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((a = r[o]),
            (u = a.instance),
            (c = a.currentTarget),
            (a = a.listener),
            u !== s && i.isPropagationStopped())
          )
            break e;
          Vh(i, a, c), (s = u);
        }
    }
  }
  if (Da) throw ((e = tf), (Da = !1), (tf = null), e);
}
function Oe(e, t) {
  var n = t[ff];
  n === void 0 && (n = t[ff] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Ev(t, e, 2, !1), n.add(r));
}
function nd(e, t, n) {
  var r = 0;
  t && (r |= 4), Ev(n, e, r, t);
}
var Yl = "_reactListening" + Math.random().toString(36).slice(2);
function Qo(e) {
  if (!e[Yl]) {
    (e[Yl] = !0),
      Ty.forEach(function (n) {
        n !== "selectionchange" && (pE.has(n) || nd(n, !1, e), nd(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Yl] || ((t[Yl] = !0), nd("selectionchange", !1, t));
  }
}
function Ev(e, t, n, r) {
  switch (ov(t)) {
    case 1:
      var i = _j;
      break;
    case 4:
      i = Pj;
      break;
    default:
      i = Lm;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !ef ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function rd(e, t, n, r, i) {
  var s = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var a = r.stateNode.containerInfo;
        if (a === i || (a.nodeType === 8 && a.parentNode === i)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var u = o.tag;
            if (
              (u === 3 || u === 4) &&
              ((u = o.stateNode.containerInfo),
              u === i || (u.nodeType === 8 && u.parentNode === i))
            )
              return;
            o = o.return;
          }
        for (; a !== null; ) {
          if (((o = ui(a)), o === null)) return;
          if (((u = o.tag), u === 5 || u === 6)) {
            r = s = o;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  qy(function () {
    var c = s,
      d = Tm(n),
      f = [];
    e: {
      var p = bv.get(e);
      if (p !== void 0) {
        var g = Dm,
          x = e;
        switch (e) {
          case "keypress":
            if (pa(n) === 0) break e;
          case "keydown":
          case "keyup":
            g = Vj;
            break;
          case "focusin":
            (x = "focus"), (g = Gc);
            break;
          case "focusout":
            (x = "blur"), (g = Gc);
            break;
          case "beforeblur":
          case "afterblur":
            g = Gc;
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
            g = Rh;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = Rj;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = Kj;
            break;
          case yv:
          case vv:
          case xv:
            g = Oj;
            break;
          case wv:
            g = Yj;
            break;
          case "scroll":
            g = Tj;
            break;
          case "wheel":
            g = Xj;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = Aj;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = Lh;
        }
        var w = (t & 4) !== 0,
          j = !w && e === "scroll",
          y = w ? (p !== null ? p + "Capture" : null) : p;
        w = [];
        for (var h = c, v; h !== null; ) {
          v = h;
          var b = v.stateNode;
          if (
            (v.tag === 5 &&
              b !== null &&
              ((v = b),
              y !== null && ((b = Bo(h, y)), b != null && w.push(Yo(h, b, v)))),
            j)
          )
            break;
          h = h.return;
        }
        0 < w.length &&
          ((p = new g(p, x, null, n, d)), f.push({ event: p, listeners: w }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((p = e === "mouseover" || e === "pointerover"),
          (g = e === "mouseout" || e === "pointerout"),
          p &&
            n !== Zd &&
            (x = n.relatedTarget || n.fromElement) &&
            (ui(x) || x[lr]))
        )
          break e;
        if (
          (g || p) &&
          ((p =
            d.window === d
              ? d
              : (p = d.ownerDocument)
              ? p.defaultView || p.parentWindow
              : window),
          g
            ? ((x = n.relatedTarget || n.toElement),
              (g = c),
              (x = x ? ui(x) : null),
              x !== null &&
                ((j = Ii(x)), x !== j || (x.tag !== 5 && x.tag !== 6)) &&
                (x = null))
            : ((g = null), (x = c)),
          g !== x)
        ) {
          if (
            ((w = Rh),
            (b = "onMouseLeave"),
            (y = "onMouseEnter"),
            (h = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((w = Lh),
              (b = "onPointerLeave"),
              (y = "onPointerEnter"),
              (h = "pointer")),
            (j = g == null ? p : es(g)),
            (v = x == null ? p : es(x)),
            (p = new w(b, h + "leave", g, n, d)),
            (p.target = j),
            (p.relatedTarget = v),
            (b = null),
            ui(d) === c &&
              ((w = new w(y, h + "enter", x, n, d)),
              (w.target = v),
              (w.relatedTarget = j),
              (b = w)),
            (j = b),
            g && x)
          )
            t: {
              for (w = g, y = x, h = 0, v = w; v; v = Vi(v)) h++;
              for (v = 0, b = y; b; b = Vi(b)) v++;
              for (; 0 < h - v; ) (w = Vi(w)), h--;
              for (; 0 < v - h; ) (y = Vi(y)), v--;
              for (; h--; ) {
                if (w === y || (y !== null && w === y.alternate)) break t;
                (w = Vi(w)), (y = Vi(y));
              }
              w = null;
            }
          else w = null;
          g !== null && Wh(f, p, g, w, !1),
            x !== null && j !== null && Wh(f, j, x, w, !0);
        }
      }
      e: {
        if (
          ((p = c ? es(c) : window),
          (g = p.nodeName && p.nodeName.toLowerCase()),
          g === "select" || (g === "input" && p.type === "file"))
        )
          var S = iE;
        else if (Ah(p))
          if (fv) S = aE;
          else {
            S = oE;
            var E = sE;
          }
        else
          (g = p.nodeName) &&
            g.toLowerCase() === "input" &&
            (p.type === "checkbox" || p.type === "radio") &&
            (S = lE);
        if (S && (S = S(e, c))) {
          dv(f, S, n, d);
          break e;
        }
        E && E(e, p, c),
          e === "focusout" &&
            (E = p._wrapperState) &&
            E.controlled &&
            p.type === "number" &&
            Kd(p, "number", p.value);
      }
      switch (((E = c ? es(c) : window), e)) {
        case "focusin":
          (Ah(E) || E.contentEditable === "true") &&
            ((Zi = E), (of = c), (Po = null));
          break;
        case "focusout":
          Po = of = Zi = null;
          break;
        case "mousedown":
          lf = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (lf = !1), Bh(f, n, d);
          break;
        case "selectionchange":
          if (dE) break;
        case "keydown":
        case "keyup":
          Bh(f, n, d);
      }
      var N;
      if (Im)
        e: {
          switch (e) {
            case "compositionstart":
              var k = "onCompositionStart";
              break e;
            case "compositionend":
              k = "onCompositionEnd";
              break e;
            case "compositionupdate":
              k = "onCompositionUpdate";
              break e;
          }
          k = void 0;
        }
      else
        Xi
          ? uv(e, n) && (k = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (k = "onCompositionStart");
      k &&
        (av &&
          n.locale !== "ko" &&
          (Xi || k !== "onCompositionStart"
            ? k === "onCompositionEnd" && Xi && (N = lv())
            : ((Pr = d),
              (Om = "value" in Pr ? Pr.value : Pr.textContent),
              (Xi = !0))),
        (E = Ua(c, k)),
        0 < E.length &&
          ((k = new Fh(k, e, null, n, d)),
          f.push({ event: k, listeners: E }),
          N ? (k.data = N) : ((N = cv(n)), N !== null && (k.data = N)))),
        (N = Jj ? eE(e, n) : tE(e, n)) &&
          ((c = Ua(c, "onBeforeInput")),
          0 < c.length &&
            ((d = new Fh("onBeforeInput", "beforeinput", null, n, d)),
            f.push({ event: d, listeners: c }),
            (d.data = N)));
    }
    jv(f, t);
  });
}
function Yo(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Ua(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      s = i.stateNode;
    i.tag === 5 &&
      s !== null &&
      ((i = s),
      (s = Bo(e, n)),
      s != null && r.unshift(Yo(e, s, i)),
      (s = Bo(e, t)),
      s != null && r.push(Yo(e, s, i))),
      (e = e.return);
  }
  return r;
}
function Vi(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Wh(e, t, n, r, i) {
  for (var s = t._reactName, o = []; n !== null && n !== r; ) {
    var a = n,
      u = a.alternate,
      c = a.stateNode;
    if (u !== null && u === r) break;
    a.tag === 5 &&
      c !== null &&
      ((a = c),
      i
        ? ((u = Bo(n, s)), u != null && o.unshift(Yo(n, u, a)))
        : i || ((u = Bo(n, s)), u != null && o.push(Yo(n, u, a)))),
      (n = n.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var hE = /\r\n?/g,
  gE = /\u0000|\uFFFD/g;
function qh(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      hE,
      `
`
    )
    .replace(gE, "");
}
function Gl(e, t, n) {
  if (((t = qh(t)), qh(e) !== t && n)) throw Error(B(425));
}
function Ba() {}
var af = null,
  uf = null;
function cf(e, t) {
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
var df = typeof setTimeout == "function" ? setTimeout : void 0,
  yE = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Kh = typeof Promise == "function" ? Promise : void 0,
  vE =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Kh < "u"
      ? function (e) {
          return Kh.resolve(null).then(e).catch(xE);
        }
      : df;
function xE(e) {
  setTimeout(function () {
    throw e;
  });
}
function id(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), Wo(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  Wo(t);
}
function Dr(e) {
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
function Qh(e) {
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
var Os = Math.random().toString(36).slice(2),
  Mn = "__reactFiber$" + Os,
  Go = "__reactProps$" + Os,
  lr = "__reactContainer$" + Os,
  ff = "__reactEvents$" + Os,
  wE = "__reactListeners$" + Os,
  bE = "__reactHandles$" + Os;
function ui(e) {
  var t = e[Mn];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[lr] || n[Mn])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Qh(e); e !== null; ) {
          if ((n = e[Mn])) return n;
          e = Qh(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function vl(e) {
  return (
    (e = e[Mn] || e[lr]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function es(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(B(33));
}
function Iu(e) {
  return e[Go] || null;
}
var mf = [],
  ts = -1;
function Yr(e) {
  return { current: e };
}
function Ie(e) {
  0 > ts || ((e.current = mf[ts]), (mf[ts] = null), ts--);
}
function Fe(e, t) {
  ts++, (mf[ts] = e.current), (e.current = t);
}
var Hr = {},
  Pt = Yr(Hr),
  Vt = Yr(!1),
  Si = Hr;
function ys(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Hr;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    s;
  for (s in n) i[s] = t[s];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function Wt(e) {
  return (e = e.childContextTypes), e != null;
}
function Ha() {
  Ie(Vt), Ie(Pt);
}
function Yh(e, t, n) {
  if (Pt.current !== Hr) throw Error(B(168));
  Fe(Pt, t), Fe(Vt, n);
}
function Sv(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(B(108, sj(e) || "Unknown", i));
  return We({}, n, r);
}
function Va(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Hr),
    (Si = Pt.current),
    Fe(Pt, e),
    Fe(Vt, Vt.current),
    !0
  );
}
function Gh(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(B(169));
  n
    ? ((e = Sv(e, t, Si)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      Ie(Vt),
      Ie(Pt),
      Fe(Pt, e))
    : Ie(Vt),
    Fe(Vt, n);
}
var tr = null,
  Mu = !1,
  sd = !1;
function Nv(e) {
  tr === null ? (tr = [e]) : tr.push(e);
}
function jE(e) {
  (Mu = !0), Nv(e);
}
function Gr() {
  if (!sd && tr !== null) {
    sd = !0;
    var e = 0,
      t = Ce;
    try {
      var n = tr;
      for (Ce = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (tr = null), (Mu = !1);
    } catch (i) {
      throw (tr !== null && (tr = tr.slice(e + 1)), Gy($m, Gr), i);
    } finally {
      (Ce = t), (sd = !1);
    }
  }
  return null;
}
var ns = [],
  rs = 0,
  Wa = null,
  qa = 0,
  cn = [],
  dn = 0,
  Ni = null,
  nr = 1,
  rr = "";
function ri(e, t) {
  (ns[rs++] = qa), (ns[rs++] = Wa), (Wa = e), (qa = t);
}
function kv(e, t, n) {
  (cn[dn++] = nr), (cn[dn++] = rr), (cn[dn++] = Ni), (Ni = e);
  var r = nr;
  e = rr;
  var i = 32 - _n(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var s = 32 - _n(t) + i;
  if (30 < s) {
    var o = i - (i % 5);
    (s = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (i -= o),
      (nr = (1 << (32 - _n(t) + i)) | (n << i) | r),
      (rr = s + e);
  } else (nr = (1 << s) | (n << i) | r), (rr = e);
}
function zm(e) {
  e.return !== null && (ri(e, 1), kv(e, 1, 0));
}
function Um(e) {
  for (; e === Wa; )
    (Wa = ns[--rs]), (ns[rs] = null), (qa = ns[--rs]), (ns[rs] = null);
  for (; e === Ni; )
    (Ni = cn[--dn]),
      (cn[dn] = null),
      (rr = cn[--dn]),
      (cn[dn] = null),
      (nr = cn[--dn]),
      (cn[dn] = null);
}
var en = null,
  Zt = null,
  Ue = !1,
  Nn = null;
function Cv(e, t) {
  var n = mn(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Xh(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (en = e), (Zt = Dr(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (en = e), (Zt = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Ni !== null ? { id: nr, overflow: rr } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = mn(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (en = e),
            (Zt = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function pf(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function hf(e) {
  if (Ue) {
    var t = Zt;
    if (t) {
      var n = t;
      if (!Xh(e, t)) {
        if (pf(e)) throw Error(B(418));
        t = Dr(n.nextSibling);
        var r = en;
        t && Xh(e, t)
          ? Cv(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (Ue = !1), (en = e));
      }
    } else {
      if (pf(e)) throw Error(B(418));
      (e.flags = (e.flags & -4097) | 2), (Ue = !1), (en = e);
    }
  }
}
function Zh(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  en = e;
}
function Xl(e) {
  if (e !== en) return !1;
  if (!Ue) return Zh(e), (Ue = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !cf(e.type, e.memoizedProps))),
    t && (t = Zt))
  ) {
    if (pf(e)) throw (_v(), Error(B(418)));
    for (; t; ) Cv(e, t), (t = Dr(t.nextSibling));
  }
  if ((Zh(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(B(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Zt = Dr(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Zt = null;
    }
  } else Zt = en ? Dr(e.stateNode.nextSibling) : null;
  return !0;
}
function _v() {
  for (var e = Zt; e; ) e = Dr(e.nextSibling);
}
function vs() {
  (Zt = en = null), (Ue = !1);
}
function Bm(e) {
  Nn === null ? (Nn = [e]) : Nn.push(e);
}
var EE = mr.ReactCurrentBatchConfig;
function io(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(B(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(B(147, e));
      var i = r,
        s = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === s
        ? t.ref
        : ((t = function (o) {
            var a = i.refs;
            o === null ? delete a[s] : (a[s] = o);
          }),
          (t._stringRef = s),
          t);
    }
    if (typeof e != "string") throw Error(B(284));
    if (!n._owner) throw Error(B(290, e));
  }
  return e;
}
function Zl(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      B(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Jh(e) {
  var t = e._init;
  return t(e._payload);
}
function Pv(e) {
  function t(y, h) {
    if (e) {
      var v = y.deletions;
      v === null ? ((y.deletions = [h]), (y.flags |= 16)) : v.push(h);
    }
  }
  function n(y, h) {
    if (!e) return null;
    for (; h !== null; ) t(y, h), (h = h.sibling);
    return null;
  }
  function r(y, h) {
    for (y = new Map(); h !== null; )
      h.key !== null ? y.set(h.key, h) : y.set(h.index, h), (h = h.sibling);
    return y;
  }
  function i(y, h) {
    return (y = zr(y, h)), (y.index = 0), (y.sibling = null), y;
  }
  function s(y, h, v) {
    return (
      (y.index = v),
      e
        ? ((v = y.alternate),
          v !== null
            ? ((v = v.index), v < h ? ((y.flags |= 2), h) : v)
            : ((y.flags |= 2), h))
        : ((y.flags |= 1048576), h)
    );
  }
  function o(y) {
    return e && y.alternate === null && (y.flags |= 2), y;
  }
  function a(y, h, v, b) {
    return h === null || h.tag !== 6
      ? ((h = fd(v, y.mode, b)), (h.return = y), h)
      : ((h = i(h, v)), (h.return = y), h);
  }
  function u(y, h, v, b) {
    var S = v.type;
    return S === Gi
      ? d(y, h, v.props.children, b, v.key)
      : h !== null &&
        (h.elementType === S ||
          (typeof S == "object" &&
            S !== null &&
            S.$$typeof === jr &&
            Jh(S) === h.type))
      ? ((b = i(h, v.props)), (b.ref = io(y, h, v)), (b.return = y), b)
      : ((b = ba(v.type, v.key, v.props, null, y.mode, b)),
        (b.ref = io(y, h, v)),
        (b.return = y),
        b);
  }
  function c(y, h, v, b) {
    return h === null ||
      h.tag !== 4 ||
      h.stateNode.containerInfo !== v.containerInfo ||
      h.stateNode.implementation !== v.implementation
      ? ((h = md(v, y.mode, b)), (h.return = y), h)
      : ((h = i(h, v.children || [])), (h.return = y), h);
  }
  function d(y, h, v, b, S) {
    return h === null || h.tag !== 7
      ? ((h = vi(v, y.mode, b, S)), (h.return = y), h)
      : ((h = i(h, v)), (h.return = y), h);
  }
  function f(y, h, v) {
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return (h = fd("" + h, y.mode, v)), (h.return = y), h;
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Ul:
          return (
            (v = ba(h.type, h.key, h.props, null, y.mode, v)),
            (v.ref = io(y, null, h)),
            (v.return = y),
            v
          );
        case Yi:
          return (h = md(h, y.mode, v)), (h.return = y), h;
        case jr:
          var b = h._init;
          return f(y, b(h._payload), v);
      }
      if (vo(h) || Js(h))
        return (h = vi(h, y.mode, v, null)), (h.return = y), h;
      Zl(y, h);
    }
    return null;
  }
  function p(y, h, v, b) {
    var S = h !== null ? h.key : null;
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return S !== null ? null : a(y, h, "" + v, b);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case Ul:
          return v.key === S ? u(y, h, v, b) : null;
        case Yi:
          return v.key === S ? c(y, h, v, b) : null;
        case jr:
          return (S = v._init), p(y, h, S(v._payload), b);
      }
      if (vo(v) || Js(v)) return S !== null ? null : d(y, h, v, b, null);
      Zl(y, v);
    }
    return null;
  }
  function g(y, h, v, b, S) {
    if ((typeof b == "string" && b !== "") || typeof b == "number")
      return (y = y.get(v) || null), a(h, y, "" + b, S);
    if (typeof b == "object" && b !== null) {
      switch (b.$$typeof) {
        case Ul:
          return (y = y.get(b.key === null ? v : b.key) || null), u(h, y, b, S);
        case Yi:
          return (y = y.get(b.key === null ? v : b.key) || null), c(h, y, b, S);
        case jr:
          var E = b._init;
          return g(y, h, v, E(b._payload), S);
      }
      if (vo(b) || Js(b)) return (y = y.get(v) || null), d(h, y, b, S, null);
      Zl(h, b);
    }
    return null;
  }
  function x(y, h, v, b) {
    for (
      var S = null, E = null, N = h, k = (h = 0), L = null;
      N !== null && k < v.length;
      k++
    ) {
      N.index > k ? ((L = N), (N = null)) : (L = N.sibling);
      var F = p(y, N, v[k], b);
      if (F === null) {
        N === null && (N = L);
        break;
      }
      e && N && F.alternate === null && t(y, N),
        (h = s(F, h, k)),
        E === null ? (S = F) : (E.sibling = F),
        (E = F),
        (N = L);
    }
    if (k === v.length) return n(y, N), Ue && ri(y, k), S;
    if (N === null) {
      for (; k < v.length; k++)
        (N = f(y, v[k], b)),
          N !== null &&
            ((h = s(N, h, k)), E === null ? (S = N) : (E.sibling = N), (E = N));
      return Ue && ri(y, k), S;
    }
    for (N = r(y, N); k < v.length; k++)
      (L = g(N, y, k, v[k], b)),
        L !== null &&
          (e && L.alternate !== null && N.delete(L.key === null ? k : L.key),
          (h = s(L, h, k)),
          E === null ? (S = L) : (E.sibling = L),
          (E = L));
    return (
      e &&
        N.forEach(function (z) {
          return t(y, z);
        }),
      Ue && ri(y, k),
      S
    );
  }
  function w(y, h, v, b) {
    var S = Js(v);
    if (typeof S != "function") throw Error(B(150));
    if (((v = S.call(v)), v == null)) throw Error(B(151));
    for (
      var E = (S = null), N = h, k = (h = 0), L = null, F = v.next();
      N !== null && !F.done;
      k++, F = v.next()
    ) {
      N.index > k ? ((L = N), (N = null)) : (L = N.sibling);
      var z = p(y, N, F.value, b);
      if (z === null) {
        N === null && (N = L);
        break;
      }
      e && N && z.alternate === null && t(y, N),
        (h = s(z, h, k)),
        E === null ? (S = z) : (E.sibling = z),
        (E = z),
        (N = L);
    }
    if (F.done) return n(y, N), Ue && ri(y, k), S;
    if (N === null) {
      for (; !F.done; k++, F = v.next())
        (F = f(y, F.value, b)),
          F !== null &&
            ((h = s(F, h, k)), E === null ? (S = F) : (E.sibling = F), (E = F));
      return Ue && ri(y, k), S;
    }
    for (N = r(y, N); !F.done; k++, F = v.next())
      (F = g(N, y, k, F.value, b)),
        F !== null &&
          (e && F.alternate !== null && N.delete(F.key === null ? k : F.key),
          (h = s(F, h, k)),
          E === null ? (S = F) : (E.sibling = F),
          (E = F));
    return (
      e &&
        N.forEach(function (A) {
          return t(y, A);
        }),
      Ue && ri(y, k),
      S
    );
  }
  function j(y, h, v, b) {
    if (
      (typeof v == "object" &&
        v !== null &&
        v.type === Gi &&
        v.key === null &&
        (v = v.props.children),
      typeof v == "object" && v !== null)
    ) {
      switch (v.$$typeof) {
        case Ul:
          e: {
            for (var S = v.key, E = h; E !== null; ) {
              if (E.key === S) {
                if (((S = v.type), S === Gi)) {
                  if (E.tag === 7) {
                    n(y, E.sibling),
                      (h = i(E, v.props.children)),
                      (h.return = y),
                      (y = h);
                    break e;
                  }
                } else if (
                  E.elementType === S ||
                  (typeof S == "object" &&
                    S !== null &&
                    S.$$typeof === jr &&
                    Jh(S) === E.type)
                ) {
                  n(y, E.sibling),
                    (h = i(E, v.props)),
                    (h.ref = io(y, E, v)),
                    (h.return = y),
                    (y = h);
                  break e;
                }
                n(y, E);
                break;
              } else t(y, E);
              E = E.sibling;
            }
            v.type === Gi
              ? ((h = vi(v.props.children, y.mode, b, v.key)),
                (h.return = y),
                (y = h))
              : ((b = ba(v.type, v.key, v.props, null, y.mode, b)),
                (b.ref = io(y, h, v)),
                (b.return = y),
                (y = b));
          }
          return o(y);
        case Yi:
          e: {
            for (E = v.key; h !== null; ) {
              if (h.key === E)
                if (
                  h.tag === 4 &&
                  h.stateNode.containerInfo === v.containerInfo &&
                  h.stateNode.implementation === v.implementation
                ) {
                  n(y, h.sibling),
                    (h = i(h, v.children || [])),
                    (h.return = y),
                    (y = h);
                  break e;
                } else {
                  n(y, h);
                  break;
                }
              else t(y, h);
              h = h.sibling;
            }
            (h = md(v, y.mode, b)), (h.return = y), (y = h);
          }
          return o(y);
        case jr:
          return (E = v._init), j(y, h, E(v._payload), b);
      }
      if (vo(v)) return x(y, h, v, b);
      if (Js(v)) return w(y, h, v, b);
      Zl(y, v);
    }
    return (typeof v == "string" && v !== "") || typeof v == "number"
      ? ((v = "" + v),
        h !== null && h.tag === 6
          ? (n(y, h.sibling), (h = i(h, v)), (h.return = y), (y = h))
          : (n(y, h), (h = fd(v, y.mode, b)), (h.return = y), (y = h)),
        o(y))
      : n(y, h);
  }
  return j;
}
var xs = Pv(!0),
  Tv = Pv(!1),
  Ka = Yr(null),
  Qa = null,
  is = null,
  Hm = null;
function Vm() {
  Hm = is = Qa = null;
}
function Wm(e) {
  var t = Ka.current;
  Ie(Ka), (e._currentValue = t);
}
function gf(e, t, n) {
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
function fs(e, t) {
  (Qa = e),
    (Hm = is = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Bt = !0), (e.firstContext = null));
}
function yn(e) {
  var t = e._currentValue;
  if (Hm !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), is === null)) {
      if (Qa === null) throw Error(B(308));
      (is = e), (Qa.dependencies = { lanes: 0, firstContext: e });
    } else is = is.next = e;
  return t;
}
var ci = null;
function qm(e) {
  ci === null ? (ci = [e]) : ci.push(e);
}
function $v(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), qm(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    ar(e, r)
  );
}
function ar(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Er = !1;
function Km(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Rv(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function ir(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Ar(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), we & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      ar(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), qm(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    ar(e, n)
  );
}
function ha(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Rm(e, n);
  }
}
function eg(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      s = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        s === null ? (i = s = o) : (s = s.next = o), (n = n.next);
      } while (n !== null);
      s === null ? (i = s = t) : (s = s.next = t);
    } else i = s = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: s,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Ya(e, t, n, r) {
  var i = e.updateQueue;
  Er = !1;
  var s = i.firstBaseUpdate,
    o = i.lastBaseUpdate,
    a = i.shared.pending;
  if (a !== null) {
    i.shared.pending = null;
    var u = a,
      c = u.next;
    (u.next = null), o === null ? (s = c) : (o.next = c), (o = u);
    var d = e.alternate;
    d !== null &&
      ((d = d.updateQueue),
      (a = d.lastBaseUpdate),
      a !== o &&
        (a === null ? (d.firstBaseUpdate = c) : (a.next = c),
        (d.lastBaseUpdate = u)));
  }
  if (s !== null) {
    var f = i.baseState;
    (o = 0), (d = c = u = null), (a = s);
    do {
      var p = a.lane,
        g = a.eventTime;
      if ((r & p) === p) {
        d !== null &&
          (d = d.next =
            {
              eventTime: g,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var x = e,
            w = a;
          switch (((p = t), (g = n), w.tag)) {
            case 1:
              if (((x = w.payload), typeof x == "function")) {
                f = x.call(g, f, p);
                break e;
              }
              f = x;
              break e;
            case 3:
              x.flags = (x.flags & -65537) | 128;
            case 0:
              if (
                ((x = w.payload),
                (p = typeof x == "function" ? x.call(g, f, p) : x),
                p == null)
              )
                break e;
              f = We({}, f, p);
              break e;
            case 2:
              Er = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (p = i.effects),
          p === null ? (i.effects = [a]) : p.push(a));
      } else
        (g = {
          eventTime: g,
          lane: p,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          d === null ? ((c = d = g), (u = f)) : (d = d.next = g),
          (o |= p);
      if (((a = a.next), a === null)) {
        if (((a = i.shared.pending), a === null)) break;
        (p = a),
          (a = p.next),
          (p.next = null),
          (i.lastBaseUpdate = p),
          (i.shared.pending = null);
      }
    } while (!0);
    if (
      (d === null && (u = f),
      (i.baseState = u),
      (i.firstBaseUpdate = c),
      (i.lastBaseUpdate = d),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (o |= i.lane), (i = i.next);
      while (i !== t);
    } else s === null && (i.shared.lanes = 0);
    (Ci |= o), (e.lanes = o), (e.memoizedState = f);
  }
}
function tg(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(B(191, i));
        i.call(r);
      }
    }
}
var xl = {},
  Hn = Yr(xl),
  Xo = Yr(xl),
  Zo = Yr(xl);
function di(e) {
  if (e === xl) throw Error(B(174));
  return e;
}
function Qm(e, t) {
  switch ((Fe(Zo, t), Fe(Xo, e), Fe(Hn, xl), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Yd(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Yd(t, e));
  }
  Ie(Hn), Fe(Hn, t);
}
function ws() {
  Ie(Hn), Ie(Xo), Ie(Zo);
}
function Fv(e) {
  di(Zo.current);
  var t = di(Hn.current),
    n = Yd(t, e.type);
  t !== n && (Fe(Xo, e), Fe(Hn, n));
}
function Ym(e) {
  Xo.current === e && (Ie(Hn), Ie(Xo));
}
var He = Yr(0);
function Ga(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var od = [];
function Gm() {
  for (var e = 0; e < od.length; e++)
    od[e]._workInProgressVersionPrimary = null;
  od.length = 0;
}
var ga = mr.ReactCurrentDispatcher,
  ld = mr.ReactCurrentBatchConfig,
  ki = 0,
  Ve = null,
  lt = null,
  dt = null,
  Xa = !1,
  To = !1,
  Jo = 0,
  SE = 0;
function jt() {
  throw Error(B(321));
}
function Xm(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!$n(e[n], t[n])) return !1;
  return !0;
}
function Zm(e, t, n, r, i, s) {
  if (
    ((ki = s),
    (Ve = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (ga.current = e === null || e.memoizedState === null ? _E : PE),
    (e = n(r, i)),
    To)
  ) {
    s = 0;
    do {
      if (((To = !1), (Jo = 0), 25 <= s)) throw Error(B(301));
      (s += 1),
        (dt = lt = null),
        (t.updateQueue = null),
        (ga.current = TE),
        (e = n(r, i));
    } while (To);
  }
  if (
    ((ga.current = Za),
    (t = lt !== null && lt.next !== null),
    (ki = 0),
    (dt = lt = Ve = null),
    (Xa = !1),
    t)
  )
    throw Error(B(300));
  return e;
}
function Jm() {
  var e = Jo !== 0;
  return (Jo = 0), e;
}
function Dn() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return dt === null ? (Ve.memoizedState = dt = e) : (dt = dt.next = e), dt;
}
function vn() {
  if (lt === null) {
    var e = Ve.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = lt.next;
  var t = dt === null ? Ve.memoizedState : dt.next;
  if (t !== null) (dt = t), (lt = e);
  else {
    if (e === null) throw Error(B(310));
    (lt = e),
      (e = {
        memoizedState: lt.memoizedState,
        baseState: lt.baseState,
        baseQueue: lt.baseQueue,
        queue: lt.queue,
        next: null,
      }),
      dt === null ? (Ve.memoizedState = dt = e) : (dt = dt.next = e);
  }
  return dt;
}
function el(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ad(e) {
  var t = vn(),
    n = t.queue;
  if (n === null) throw Error(B(311));
  n.lastRenderedReducer = e;
  var r = lt,
    i = r.baseQueue,
    s = n.pending;
  if (s !== null) {
    if (i !== null) {
      var o = i.next;
      (i.next = s.next), (s.next = o);
    }
    (r.baseQueue = i = s), (n.pending = null);
  }
  if (i !== null) {
    (s = i.next), (r = r.baseState);
    var a = (o = null),
      u = null,
      c = s;
    do {
      var d = c.lane;
      if ((ki & d) === d)
        u !== null &&
          (u = u.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action));
      else {
        var f = {
          lane: d,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        u === null ? ((a = u = f), (o = r)) : (u = u.next = f),
          (Ve.lanes |= d),
          (Ci |= d);
      }
      c = c.next;
    } while (c !== null && c !== s);
    u === null ? (o = r) : (u.next = a),
      $n(r, t.memoizedState) || (Bt = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = u),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (s = i.lane), (Ve.lanes |= s), (Ci |= s), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ud(e) {
  var t = vn(),
    n = t.queue;
  if (n === null) throw Error(B(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    s = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var o = (i = i.next);
    do (s = e(s, o.action)), (o = o.next);
    while (o !== i);
    $n(s, t.memoizedState) || (Bt = !0),
      (t.memoizedState = s),
      t.baseQueue === null && (t.baseState = s),
      (n.lastRenderedState = s);
  }
  return [s, r];
}
function Lv() {}
function Ov(e, t) {
  var n = Ve,
    r = vn(),
    i = t(),
    s = !$n(r.memoizedState, i);
  if (
    (s && ((r.memoizedState = i), (Bt = !0)),
    (r = r.queue),
    ep(Iv.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || s || (dt !== null && dt.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      tl(9, Av.bind(null, n, r, i, t), void 0, null),
      mt === null)
    )
      throw Error(B(349));
    ki & 30 || Dv(n, t, i);
  }
  return i;
}
function Dv(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Ve.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Ve.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Av(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Mv(t) && zv(e);
}
function Iv(e, t, n) {
  return n(function () {
    Mv(t) && zv(e);
  });
}
function Mv(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !$n(e, n);
  } catch {
    return !0;
  }
}
function zv(e) {
  var t = ar(e, 1);
  t !== null && Pn(t, e, 1, -1);
}
function ng(e) {
  var t = Dn();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: el,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = CE.bind(null, Ve, e)),
    [t.memoizedState, e]
  );
}
function tl(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = Ve.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Ve.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Uv() {
  return vn().memoizedState;
}
function ya(e, t, n, r) {
  var i = Dn();
  (Ve.flags |= e),
    (i.memoizedState = tl(1 | t, n, void 0, r === void 0 ? null : r));
}
function zu(e, t, n, r) {
  var i = vn();
  r = r === void 0 ? null : r;
  var s = void 0;
  if (lt !== null) {
    var o = lt.memoizedState;
    if (((s = o.destroy), r !== null && Xm(r, o.deps))) {
      i.memoizedState = tl(t, n, s, r);
      return;
    }
  }
  (Ve.flags |= e), (i.memoizedState = tl(1 | t, n, s, r));
}
function rg(e, t) {
  return ya(8390656, 8, e, t);
}
function ep(e, t) {
  return zu(2048, 8, e, t);
}
function Bv(e, t) {
  return zu(4, 2, e, t);
}
function Hv(e, t) {
  return zu(4, 4, e, t);
}
function Vv(e, t) {
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
function Wv(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), zu(4, 4, Vv.bind(null, t, e), n)
  );
}
function tp() {}
function qv(e, t) {
  var n = vn();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Xm(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Kv(e, t) {
  var n = vn();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Xm(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Qv(e, t, n) {
  return ki & 21
    ? ($n(n, t) || ((n = Jy()), (Ve.lanes |= n), (Ci |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Bt = !0)), (e.memoizedState = n));
}
function NE(e, t) {
  var n = Ce;
  (Ce = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = ld.transition;
  ld.transition = {};
  try {
    e(!1), t();
  } finally {
    (Ce = n), (ld.transition = r);
  }
}
function Yv() {
  return vn().memoizedState;
}
function kE(e, t, n) {
  var r = Mr(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Gv(e))
  )
    Xv(t, n);
  else if (((n = $v(e, t, n, r)), n !== null)) {
    var i = Ot();
    Pn(n, e, r, i), Zv(n, t, r);
  }
}
function CE(e, t, n) {
  var r = Mr(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Gv(e)) Xv(t, i);
  else {
    var s = e.alternate;
    if (
      e.lanes === 0 &&
      (s === null || s.lanes === 0) &&
      ((s = t.lastRenderedReducer), s !== null)
    )
      try {
        var o = t.lastRenderedState,
          a = s(o, n);
        if (((i.hasEagerState = !0), (i.eagerState = a), $n(a, o))) {
          var u = t.interleaved;
          u === null
            ? ((i.next = i), qm(t))
            : ((i.next = u.next), (u.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = $v(e, t, i, r)),
      n !== null && ((i = Ot()), Pn(n, e, r, i), Zv(n, t, r));
  }
}
function Gv(e) {
  var t = e.alternate;
  return e === Ve || (t !== null && t === Ve);
}
function Xv(e, t) {
  To = Xa = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Zv(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Rm(e, n);
  }
}
var Za = {
    readContext: yn,
    useCallback: jt,
    useContext: jt,
    useEffect: jt,
    useImperativeHandle: jt,
    useInsertionEffect: jt,
    useLayoutEffect: jt,
    useMemo: jt,
    useReducer: jt,
    useRef: jt,
    useState: jt,
    useDebugValue: jt,
    useDeferredValue: jt,
    useTransition: jt,
    useMutableSource: jt,
    useSyncExternalStore: jt,
    useId: jt,
    unstable_isNewReconciler: !1,
  },
  _E = {
    readContext: yn,
    useCallback: function (e, t) {
      return (Dn().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: yn,
    useEffect: rg,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        ya(4194308, 4, Vv.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return ya(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return ya(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Dn();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Dn();
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
        (e = e.dispatch = kE.bind(null, Ve, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Dn();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: ng,
    useDebugValue: tp,
    useDeferredValue: function (e) {
      return (Dn().memoizedState = e);
    },
    useTransition: function () {
      var e = ng(!1),
        t = e[0];
      return (e = NE.bind(null, e[1])), (Dn().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = Ve,
        i = Dn();
      if (Ue) {
        if (n === void 0) throw Error(B(407));
        n = n();
      } else {
        if (((n = t()), mt === null)) throw Error(B(349));
        ki & 30 || Dv(r, t, n);
      }
      i.memoizedState = n;
      var s = { value: n, getSnapshot: t };
      return (
        (i.queue = s),
        rg(Iv.bind(null, r, s, e), [e]),
        (r.flags |= 2048),
        tl(9, Av.bind(null, r, s, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Dn(),
        t = mt.identifierPrefix;
      if (Ue) {
        var n = rr,
          r = nr;
        (n = (r & ~(1 << (32 - _n(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Jo++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = SE++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  PE = {
    readContext: yn,
    useCallback: qv,
    useContext: yn,
    useEffect: ep,
    useImperativeHandle: Wv,
    useInsertionEffect: Bv,
    useLayoutEffect: Hv,
    useMemo: Kv,
    useReducer: ad,
    useRef: Uv,
    useState: function () {
      return ad(el);
    },
    useDebugValue: tp,
    useDeferredValue: function (e) {
      var t = vn();
      return Qv(t, lt.memoizedState, e);
    },
    useTransition: function () {
      var e = ad(el)[0],
        t = vn().memoizedState;
      return [e, t];
    },
    useMutableSource: Lv,
    useSyncExternalStore: Ov,
    useId: Yv,
    unstable_isNewReconciler: !1,
  },
  TE = {
    readContext: yn,
    useCallback: qv,
    useContext: yn,
    useEffect: ep,
    useImperativeHandle: Wv,
    useInsertionEffect: Bv,
    useLayoutEffect: Hv,
    useMemo: Kv,
    useReducer: ud,
    useRef: Uv,
    useState: function () {
      return ud(el);
    },
    useDebugValue: tp,
    useDeferredValue: function (e) {
      var t = vn();
      return lt === null ? (t.memoizedState = e) : Qv(t, lt.memoizedState, e);
    },
    useTransition: function () {
      var e = ud(el)[0],
        t = vn().memoizedState;
      return [e, t];
    },
    useMutableSource: Lv,
    useSyncExternalStore: Ov,
    useId: Yv,
    unstable_isNewReconciler: !1,
  };
function jn(e, t) {
  if (e && e.defaultProps) {
    (t = We({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function yf(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : We({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Uu = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Ii(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ot(),
      i = Mr(e),
      s = ir(r, i);
    (s.payload = t),
      n != null && (s.callback = n),
      (t = Ar(e, s, i)),
      t !== null && (Pn(t, e, i, r), ha(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ot(),
      i = Mr(e),
      s = ir(r, i);
    (s.tag = 1),
      (s.payload = t),
      n != null && (s.callback = n),
      (t = Ar(e, s, i)),
      t !== null && (Pn(t, e, i, r), ha(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Ot(),
      r = Mr(e),
      i = ir(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = Ar(e, i, r)),
      t !== null && (Pn(t, e, r, n), ha(t, e, r));
  },
};
function ig(e, t, n, r, i, s, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, s, o)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Ko(n, r) || !Ko(i, s)
      : !0
  );
}
function Jv(e, t, n) {
  var r = !1,
    i = Hr,
    s = t.contextType;
  return (
    typeof s == "object" && s !== null
      ? (s = yn(s))
      : ((i = Wt(t) ? Si : Pt.current),
        (r = t.contextTypes),
        (s = (r = r != null) ? ys(e, i) : Hr)),
    (t = new t(n, s)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Uu),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = s)),
    t
  );
}
function sg(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Uu.enqueueReplaceState(t, t.state, null);
}
function vf(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = {}), Km(e);
  var s = t.contextType;
  typeof s == "object" && s !== null
    ? (i.context = yn(s))
    : ((s = Wt(t) ? Si : Pt.current), (i.context = ys(e, s))),
    (i.state = e.memoizedState),
    (s = t.getDerivedStateFromProps),
    typeof s == "function" && (yf(e, t, s, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && Uu.enqueueReplaceState(i, i.state, null),
      Ya(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function bs(e, t) {
  try {
    var n = "",
      r = t;
    do (n += ij(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (s) {
    i =
      `
Error generating stack: ` +
      s.message +
      `
` +
      s.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function cd(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function xf(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var $E = typeof WeakMap == "function" ? WeakMap : Map;
function ex(e, t, n) {
  (n = ir(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      eu || ((eu = !0), (Pf = r)), xf(e, t);
    }),
    n
  );
}
function tx(e, t, n) {
  (n = ir(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        xf(e, t);
      });
  }
  var s = e.stateNode;
  return (
    s !== null &&
      typeof s.componentDidCatch == "function" &&
      (n.callback = function () {
        xf(e, t),
          typeof r != "function" &&
            (Ir === null ? (Ir = new Set([this])) : Ir.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function og(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new $E();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = WE.bind(null, e, t, n)), t.then(e, e));
}
function lg(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function ag(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = ir(-1, 1)), (t.tag = 2), Ar(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var RE = mr.ReactCurrentOwner,
  Bt = !1;
function Tt(e, t, n, r) {
  t.child = e === null ? Tv(t, null, n, r) : xs(t, e.child, n, r);
}
function ug(e, t, n, r, i) {
  n = n.render;
  var s = t.ref;
  return (
    fs(t, i),
    (r = Zm(e, t, n, r, s, i)),
    (n = Jm()),
    e !== null && !Bt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        ur(e, t, i))
      : (Ue && n && zm(t), (t.flags |= 1), Tt(e, t, r, i), t.child)
  );
}
function cg(e, t, n, r, i) {
  if (e === null) {
    var s = n.type;
    return typeof s == "function" &&
      !up(s) &&
      s.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = s), nx(e, t, s, r, i))
      : ((e = ba(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((s = e.child), !(e.lanes & i))) {
    var o = s.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Ko), n(o, r) && e.ref === t.ref)
    )
      return ur(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = zr(s, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function nx(e, t, n, r, i) {
  if (e !== null) {
    var s = e.memoizedProps;
    if (Ko(s, r) && e.ref === t.ref)
      if (((Bt = !1), (t.pendingProps = r = s), (e.lanes & i) !== 0))
        e.flags & 131072 && (Bt = !0);
      else return (t.lanes = e.lanes), ur(e, t, i);
  }
  return wf(e, t, n, r, i);
}
function rx(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    s = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        Fe(os, Gt),
        (Gt |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = s !== null ? s.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          Fe(os, Gt),
          (Gt |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = s !== null ? s.baseLanes : n),
        Fe(os, Gt),
        (Gt |= r);
    }
  else
    s !== null ? ((r = s.baseLanes | n), (t.memoizedState = null)) : (r = n),
      Fe(os, Gt),
      (Gt |= r);
  return Tt(e, t, i, n), t.child;
}
function ix(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function wf(e, t, n, r, i) {
  var s = Wt(n) ? Si : Pt.current;
  return (
    (s = ys(t, s)),
    fs(t, i),
    (n = Zm(e, t, n, r, s, i)),
    (r = Jm()),
    e !== null && !Bt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        ur(e, t, i))
      : (Ue && r && zm(t), (t.flags |= 1), Tt(e, t, n, i), t.child)
  );
}
function dg(e, t, n, r, i) {
  if (Wt(n)) {
    var s = !0;
    Va(t);
  } else s = !1;
  if ((fs(t, i), t.stateNode === null))
    va(e, t), Jv(t, n, r), vf(t, n, r, i), (r = !0);
  else if (e === null) {
    var o = t.stateNode,
      a = t.memoizedProps;
    o.props = a;
    var u = o.context,
      c = n.contextType;
    typeof c == "object" && c !== null
      ? (c = yn(c))
      : ((c = Wt(n) ? Si : Pt.current), (c = ys(t, c)));
    var d = n.getDerivedStateFromProps,
      f =
        typeof d == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    f ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((a !== r || u !== c) && sg(t, o, r, c)),
      (Er = !1);
    var p = t.memoizedState;
    (o.state = p),
      Ya(t, r, o, i),
      (u = t.memoizedState),
      a !== r || p !== u || Vt.current || Er
        ? (typeof d == "function" && (yf(t, n, d, r), (u = t.memoizedState)),
          (a = Er || ig(t, n, a, r, p, u, c))
            ? (f ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = u)),
          (o.props = r),
          (o.state = u),
          (o.context = c),
          (r = a))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (o = t.stateNode),
      Rv(e, t),
      (a = t.memoizedProps),
      (c = t.type === t.elementType ? a : jn(t.type, a)),
      (o.props = c),
      (f = t.pendingProps),
      (p = o.context),
      (u = n.contextType),
      typeof u == "object" && u !== null
        ? (u = yn(u))
        : ((u = Wt(n) ? Si : Pt.current), (u = ys(t, u)));
    var g = n.getDerivedStateFromProps;
    (d =
      typeof g == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((a !== f || p !== u) && sg(t, o, r, u)),
      (Er = !1),
      (p = t.memoizedState),
      (o.state = p),
      Ya(t, r, o, i);
    var x = t.memoizedState;
    a !== f || p !== x || Vt.current || Er
      ? (typeof g == "function" && (yf(t, n, g, r), (x = t.memoizedState)),
        (c = Er || ig(t, n, c, r, p, x, u) || !1)
          ? (d ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, x, u),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, x, u)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (a === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = x)),
        (o.props = r),
        (o.state = x),
        (o.context = u),
        (r = c))
      : (typeof o.componentDidUpdate != "function" ||
          (a === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return bf(e, t, n, r, s, i);
}
function bf(e, t, n, r, i, s) {
  ix(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return i && Gh(t, n, !1), ur(e, t, s);
  (r = t.stateNode), (RE.current = t);
  var a =
    o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = xs(t, e.child, null, s)), (t.child = xs(t, null, a, s)))
      : Tt(e, t, a, s),
    (t.memoizedState = r.state),
    i && Gh(t, n, !0),
    t.child
  );
}
function sx(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Yh(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Yh(e, t.context, !1),
    Qm(e, t.containerInfo);
}
function fg(e, t, n, r, i) {
  return vs(), Bm(i), (t.flags |= 256), Tt(e, t, n, r), t.child;
}
var jf = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ef(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function ox(e, t, n) {
  var r = t.pendingProps,
    i = He.current,
    s = !1,
    o = (t.flags & 128) !== 0,
    a;
  if (
    ((a = o) ||
      (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    a
      ? ((s = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    Fe(He, i & 1),
    e === null)
  )
    return (
      hf(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          s
            ? ((r = t.mode),
              (s = t.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && s !== null
                ? ((s.childLanes = 0), (s.pendingProps = o))
                : (s = Vu(o, r, 0, null)),
              (e = vi(e, r, n, null)),
              (s.return = t),
              (e.return = t),
              (s.sibling = e),
              (t.child = s),
              (t.child.memoizedState = Ef(n)),
              (t.memoizedState = jf),
              e)
            : np(t, o))
    );
  if (((i = e.memoizedState), i !== null && ((a = i.dehydrated), a !== null)))
    return FE(e, t, o, r, a, i, n);
  if (s) {
    (s = r.fallback), (o = t.mode), (i = e.child), (a = i.sibling);
    var u = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = u),
          (t.deletions = null))
        : ((r = zr(i, u)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      a !== null ? (s = zr(a, s)) : ((s = vi(s, o, n, null)), (s.flags |= 2)),
      (s.return = t),
      (r.return = t),
      (r.sibling = s),
      (t.child = r),
      (r = s),
      (s = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? Ef(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (s.memoizedState = o),
      (s.childLanes = e.childLanes & ~n),
      (t.memoizedState = jf),
      r
    );
  }
  return (
    (s = e.child),
    (e = s.sibling),
    (r = zr(s, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
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
function np(e, t) {
  return (
    (t = Vu({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Jl(e, t, n, r) {
  return (
    r !== null && Bm(r),
    xs(t, e.child, null, n),
    (e = np(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function FE(e, t, n, r, i, s, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = cd(Error(B(422)))), Jl(e, t, o, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((s = r.fallback),
        (i = t.mode),
        (r = Vu({ mode: "visible", children: r.children }, i, 0, null)),
        (s = vi(s, i, o, null)),
        (s.flags |= 2),
        (r.return = t),
        (s.return = t),
        (r.sibling = s),
        (t.child = r),
        t.mode & 1 && xs(t, e.child, null, o),
        (t.child.memoizedState = Ef(o)),
        (t.memoizedState = jf),
        s);
  if (!(t.mode & 1)) return Jl(e, t, o, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (s = Error(B(419))), (r = cd(s, r, void 0)), Jl(e, t, o, r);
  }
  if (((a = (o & e.childLanes) !== 0), Bt || a)) {
    if (((r = mt), r !== null)) {
      switch (o & -o) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
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
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | o) ? 0 : i),
        i !== 0 &&
          i !== s.retryLane &&
          ((s.retryLane = i), ar(e, i), Pn(r, e, i, -1));
    }
    return ap(), (r = cd(Error(B(421)))), Jl(e, t, o, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = qE.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = s.treeContext),
      (Zt = Dr(i.nextSibling)),
      (en = t),
      (Ue = !0),
      (Nn = null),
      e !== null &&
        ((cn[dn++] = nr),
        (cn[dn++] = rr),
        (cn[dn++] = Ni),
        (nr = e.id),
        (rr = e.overflow),
        (Ni = t)),
      (t = np(t, r.children)),
      (t.flags |= 4096),
      t);
}
function mg(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), gf(e.return, t, n);
}
function dd(e, t, n, r, i) {
  var s = e.memoizedState;
  s === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((s.isBackwards = t),
      (s.rendering = null),
      (s.renderingStartTime = 0),
      (s.last = r),
      (s.tail = n),
      (s.tailMode = i));
}
function lx(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    s = r.tail;
  if ((Tt(e, t, r.children, n), (r = He.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && mg(e, n, t);
        else if (e.tag === 19) mg(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((Fe(He, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && Ga(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          dd(t, !1, i, n, s);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && Ga(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        dd(t, !0, n, null, s);
        break;
      case "together":
        dd(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function va(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function ur(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Ci |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(B(153));
  if (t.child !== null) {
    for (
      e = t.child, n = zr(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = zr(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function LE(e, t, n) {
  switch (t.tag) {
    case 3:
      sx(t), vs();
      break;
    case 5:
      Fv(t);
      break;
    case 1:
      Wt(t.type) && Va(t);
      break;
    case 4:
      Qm(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      Fe(Ka, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (Fe(He, He.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? ox(e, t, n)
          : (Fe(He, He.current & 1),
            (e = ur(e, t, n)),
            e !== null ? e.sibling : null);
      Fe(He, He.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return lx(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        Fe(He, He.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), rx(e, t, n);
  }
  return ur(e, t, n);
}
var ax, Sf, ux, cx;
ax = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Sf = function () {};
ux = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), di(Hn.current);
    var s = null;
    switch (n) {
      case "input":
        (i = Wd(e, i)), (r = Wd(e, r)), (s = []);
        break;
      case "select":
        (i = We({}, i, { value: void 0 })),
          (r = We({}, r, { value: void 0 })),
          (s = []);
        break;
      case "textarea":
        (i = Qd(e, i)), (r = Qd(e, r)), (s = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Ba);
    }
    Gd(n, r);
    var o;
    n = null;
    for (c in i)
      if (!r.hasOwnProperty(c) && i.hasOwnProperty(c) && i[c] != null)
        if (c === "style") {
          var a = i[c];
          for (o in a) a.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (zo.hasOwnProperty(c)
              ? s || (s = [])
              : (s = s || []).push(c, null));
    for (c in r) {
      var u = r[c];
      if (
        ((a = i != null ? i[c] : void 0),
        r.hasOwnProperty(c) && u !== a && (u != null || a != null))
      )
        if (c === "style")
          if (a) {
            for (o in a)
              !a.hasOwnProperty(o) ||
                (u && u.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in u)
              u.hasOwnProperty(o) &&
                a[o] !== u[o] &&
                (n || (n = {}), (n[o] = u[o]));
          } else n || (s || (s = []), s.push(c, n)), (n = u);
        else
          c === "dangerouslySetInnerHTML"
            ? ((u = u ? u.__html : void 0),
              (a = a ? a.__html : void 0),
              u != null && a !== u && (s = s || []).push(c, u))
            : c === "children"
            ? (typeof u != "string" && typeof u != "number") ||
              (s = s || []).push(c, "" + u)
            : c !== "suppressContentEditableWarning" &&
              c !== "suppressHydrationWarning" &&
              (zo.hasOwnProperty(c)
                ? (u != null && c === "onScroll" && Oe("scroll", e),
                  s || a === u || (s = []))
                : (s = s || []).push(c, u));
    }
    n && (s = s || []).push("style", n);
    var c = s;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
cx = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function so(e, t) {
  if (!Ue)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Et(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function OE(e, t, n) {
  var r = t.pendingProps;
  switch ((Um(t), t.tag)) {
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
      return Et(t), null;
    case 1:
      return Wt(t.type) && Ha(), Et(t), null;
    case 3:
      return (
        (r = t.stateNode),
        ws(),
        Ie(Vt),
        Ie(Pt),
        Gm(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Xl(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Nn !== null && (Rf(Nn), (Nn = null)))),
        Sf(e, t),
        Et(t),
        null
      );
    case 5:
      Ym(t);
      var i = di(Zo.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        ux(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(B(166));
          return Et(t), null;
        }
        if (((e = di(Hn.current)), Xl(t))) {
          (r = t.stateNode), (n = t.type);
          var s = t.memoizedProps;
          switch (((r[Mn] = t), (r[Go] = s), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              Oe("cancel", r), Oe("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              Oe("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < wo.length; i++) Oe(wo[i], r);
              break;
            case "source":
              Oe("error", r);
              break;
            case "img":
            case "image":
            case "link":
              Oe("error", r), Oe("load", r);
              break;
            case "details":
              Oe("toggle", r);
              break;
            case "input":
              jh(r, s), Oe("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!s.multiple }),
                Oe("invalid", r);
              break;
            case "textarea":
              Sh(r, s), Oe("invalid", r);
          }
          Gd(n, s), (i = null);
          for (var o in s)
            if (s.hasOwnProperty(o)) {
              var a = s[o];
              o === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (s.suppressHydrationWarning !== !0 &&
                      Gl(r.textContent, a, e),
                    (i = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (s.suppressHydrationWarning !== !0 &&
                      Gl(r.textContent, a, e),
                    (i = ["children", "" + a]))
                : zo.hasOwnProperty(o) &&
                  a != null &&
                  o === "onScroll" &&
                  Oe("scroll", r);
            }
          switch (n) {
            case "input":
              Bl(r), Eh(r, s, !0);
              break;
            case "textarea":
              Bl(r), Nh(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof s.onClick == "function" && (r.onclick = Ba);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (o = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Iy(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = o.createElement(n, { is: r.is }))
                : ((e = o.createElement(n)),
                  n === "select" &&
                    ((o = e),
                    r.multiple
                      ? (o.multiple = !0)
                      : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[Mn] = t),
            (e[Go] = r),
            ax(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = Xd(n, r)), n)) {
              case "dialog":
                Oe("cancel", e), Oe("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                Oe("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < wo.length; i++) Oe(wo[i], e);
                i = r;
                break;
              case "source":
                Oe("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                Oe("error", e), Oe("load", e), (i = r);
                break;
              case "details":
                Oe("toggle", e), (i = r);
                break;
              case "input":
                jh(e, r), (i = Wd(e, r)), Oe("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = We({}, r, { value: void 0 })),
                  Oe("invalid", e);
                break;
              case "textarea":
                Sh(e, r), (i = Qd(e, r)), Oe("invalid", e);
                break;
              default:
                i = r;
            }
            Gd(n, i), (a = i);
            for (s in a)
              if (a.hasOwnProperty(s)) {
                var u = a[s];
                s === "style"
                  ? Uy(e, u)
                  : s === "dangerouslySetInnerHTML"
                  ? ((u = u ? u.__html : void 0), u != null && My(e, u))
                  : s === "children"
                  ? typeof u == "string"
                    ? (n !== "textarea" || u !== "") && Uo(e, u)
                    : typeof u == "number" && Uo(e, "" + u)
                  : s !== "suppressContentEditableWarning" &&
                    s !== "suppressHydrationWarning" &&
                    s !== "autoFocus" &&
                    (zo.hasOwnProperty(s)
                      ? u != null && s === "onScroll" && Oe("scroll", e)
                      : u != null && km(e, s, u, o));
              }
            switch (n) {
              case "input":
                Bl(e), Eh(e, r, !1);
                break;
              case "textarea":
                Bl(e), Nh(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Br(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (s = r.value),
                  s != null
                    ? as(e, !!r.multiple, s, !1)
                    : r.defaultValue != null &&
                      as(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = Ba);
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
      return Et(t), null;
    case 6:
      if (e && t.stateNode != null) cx(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(B(166));
        if (((n = di(Zo.current)), di(Hn.current), Xl(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Mn] = t),
            (s = r.nodeValue !== n) && ((e = en), e !== null))
          )
            switch (e.tag) {
              case 3:
                Gl(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Gl(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          s && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Mn] = t),
            (t.stateNode = r);
      }
      return Et(t), null;
    case 13:
      if (
        (Ie(He),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (Ue && Zt !== null && t.mode & 1 && !(t.flags & 128))
          _v(), vs(), (t.flags |= 98560), (s = !1);
        else if (((s = Xl(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!s) throw Error(B(318));
            if (
              ((s = t.memoizedState),
              (s = s !== null ? s.dehydrated : null),
              !s)
            )
              throw Error(B(317));
            s[Mn] = t;
          } else
            vs(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Et(t), (s = !1);
        } else Nn !== null && (Rf(Nn), (Nn = null)), (s = !0);
        if (!s) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || He.current & 1 ? at === 0 && (at = 3) : ap())),
          t.updateQueue !== null && (t.flags |= 4),
          Et(t),
          null);
    case 4:
      return (
        ws(), Sf(e, t), e === null && Qo(t.stateNode.containerInfo), Et(t), null
      );
    case 10:
      return Wm(t.type._context), Et(t), null;
    case 17:
      return Wt(t.type) && Ha(), Et(t), null;
    case 19:
      if ((Ie(He), (s = t.memoizedState), s === null)) return Et(t), null;
      if (((r = (t.flags & 128) !== 0), (o = s.rendering), o === null))
        if (r) so(s, !1);
        else {
          if (at !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = Ga(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    so(s, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (s = n),
                    (e = r),
                    (s.flags &= 14680066),
                    (o = s.alternate),
                    o === null
                      ? ((s.childLanes = 0),
                        (s.lanes = e),
                        (s.child = null),
                        (s.subtreeFlags = 0),
                        (s.memoizedProps = null),
                        (s.memoizedState = null),
                        (s.updateQueue = null),
                        (s.dependencies = null),
                        (s.stateNode = null))
                      : ((s.childLanes = o.childLanes),
                        (s.lanes = o.lanes),
                        (s.child = o.child),
                        (s.subtreeFlags = 0),
                        (s.deletions = null),
                        (s.memoizedProps = o.memoizedProps),
                        (s.memoizedState = o.memoizedState),
                        (s.updateQueue = o.updateQueue),
                        (s.type = o.type),
                        (e = o.dependencies),
                        (s.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return Fe(He, (He.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          s.tail !== null &&
            Ze() > js &&
            ((t.flags |= 128), (r = !0), so(s, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Ga(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              so(s, !0),
              s.tail === null && s.tailMode === "hidden" && !o.alternate && !Ue)
            )
              return Et(t), null;
          } else
            2 * Ze() - s.renderingStartTime > js &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), so(s, !1), (t.lanes = 4194304));
        s.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = s.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (s.last = o));
      }
      return s.tail !== null
        ? ((t = s.tail),
          (s.rendering = t),
          (s.tail = t.sibling),
          (s.renderingStartTime = Ze()),
          (t.sibling = null),
          (n = He.current),
          Fe(He, r ? (n & 1) | 2 : n & 1),
          t)
        : (Et(t), null);
    case 22:
    case 23:
      return (
        lp(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Gt & 1073741824 && (Et(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Et(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(B(156, t.tag));
}
function DE(e, t) {
  switch ((Um(t), t.tag)) {
    case 1:
      return (
        Wt(t.type) && Ha(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        ws(),
        Ie(Vt),
        Ie(Pt),
        Gm(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Ym(t), null;
    case 13:
      if (
        (Ie(He), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(B(340));
        vs();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return Ie(He), null;
    case 4:
      return ws(), null;
    case 10:
      return Wm(t.type._context), null;
    case 22:
    case 23:
      return lp(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var ea = !1,
  Nt = !1,
  AE = typeof WeakSet == "function" ? WeakSet : Set,
  Y = null;
function ss(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Ye(e, t, r);
      }
    else n.current = null;
}
function Nf(e, t, n) {
  try {
    n();
  } catch (r) {
    Ye(e, t, r);
  }
}
var pg = !1;
function IE(e, t) {
  if (((af = Ma), (e = hv()), Mm(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            s = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, s.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            a = -1,
            u = -1,
            c = 0,
            d = 0,
            f = e,
            p = null;
          t: for (;;) {
            for (
              var g;
              f !== n || (i !== 0 && f.nodeType !== 3) || (a = o + i),
                f !== s || (r !== 0 && f.nodeType !== 3) || (u = o + r),
                f.nodeType === 3 && (o += f.nodeValue.length),
                (g = f.firstChild) !== null;

            )
              (p = f), (f = g);
            for (;;) {
              if (f === e) break t;
              if (
                (p === n && ++c === i && (a = o),
                p === s && ++d === r && (u = o),
                (g = f.nextSibling) !== null)
              )
                break;
              (f = p), (p = f.parentNode);
            }
            f = g;
          }
          n = a === -1 || u === -1 ? null : { start: a, end: u };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (uf = { focusedElem: e, selectionRange: n }, Ma = !1, Y = t; Y !== null; )
    if (((t = Y), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (Y = e);
    else
      for (; Y !== null; ) {
        t = Y;
        try {
          var x = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (x !== null) {
                  var w = x.memoizedProps,
                    j = x.memoizedState,
                    y = t.stateNode,
                    h = y.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? w : jn(t.type, w),
                      j
                    );
                  y.__reactInternalSnapshotBeforeUpdate = h;
                }
                break;
              case 3:
                var v = t.stateNode.containerInfo;
                v.nodeType === 1
                  ? (v.textContent = "")
                  : v.nodeType === 9 &&
                    v.documentElement &&
                    v.removeChild(v.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(B(163));
            }
        } catch (b) {
          Ye(t, t.return, b);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (Y = e);
          break;
        }
        Y = t.return;
      }
  return (x = pg), (pg = !1), x;
}
function $o(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var s = i.destroy;
        (i.destroy = void 0), s !== void 0 && Nf(t, n, s);
      }
      i = i.next;
    } while (i !== r);
  }
}
function Bu(e, t) {
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
function kf(e) {
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
function dx(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), dx(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Mn], delete t[Go], delete t[ff], delete t[wE], delete t[bE])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function fx(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function hg(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || fx(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Cf(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Ba));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Cf(e, t, n), e = e.sibling; e !== null; ) Cf(e, t, n), (e = e.sibling);
}
function _f(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (_f(e, t, n), e = e.sibling; e !== null; ) _f(e, t, n), (e = e.sibling);
}
var vt = null,
  En = !1;
function xr(e, t, n) {
  for (n = n.child; n !== null; ) mx(e, t, n), (n = n.sibling);
}
function mx(e, t, n) {
  if (Bn && typeof Bn.onCommitFiberUnmount == "function")
    try {
      Bn.onCommitFiberUnmount(Lu, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Nt || ss(n, t);
    case 6:
      var r = vt,
        i = En;
      (vt = null),
        xr(e, t, n),
        (vt = r),
        (En = i),
        vt !== null &&
          (En
            ? ((e = vt),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : vt.removeChild(n.stateNode));
      break;
    case 18:
      vt !== null &&
        (En
          ? ((e = vt),
            (n = n.stateNode),
            e.nodeType === 8
              ? id(e.parentNode, n)
              : e.nodeType === 1 && id(e, n),
            Wo(e))
          : id(vt, n.stateNode));
      break;
    case 4:
      (r = vt),
        (i = En),
        (vt = n.stateNode.containerInfo),
        (En = !0),
        xr(e, t, n),
        (vt = r),
        (En = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Nt &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var s = i,
            o = s.destroy;
          (s = s.tag),
            o !== void 0 && (s & 2 || s & 4) && Nf(n, t, o),
            (i = i.next);
        } while (i !== r);
      }
      xr(e, t, n);
      break;
    case 1:
      if (
        !Nt &&
        (ss(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          Ye(n, t, a);
        }
      xr(e, t, n);
      break;
    case 21:
      xr(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Nt = (r = Nt) || n.memoizedState !== null), xr(e, t, n), (Nt = r))
        : xr(e, t, n);
      break;
    default:
      xr(e, t, n);
  }
}
function gg(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new AE()),
      t.forEach(function (r) {
        var i = KE.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function wn(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var s = e,
          o = t,
          a = o;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (vt = a.stateNode), (En = !1);
              break e;
            case 3:
              (vt = a.stateNode.containerInfo), (En = !0);
              break e;
            case 4:
              (vt = a.stateNode.containerInfo), (En = !0);
              break e;
          }
          a = a.return;
        }
        if (vt === null) throw Error(B(160));
        mx(s, o, i), (vt = null), (En = !1);
        var u = i.alternate;
        u !== null && (u.return = null), (i.return = null);
      } catch (c) {
        Ye(i, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) px(t, e), (t = t.sibling);
}
function px(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((wn(t, e), On(e), r & 4)) {
        try {
          $o(3, e, e.return), Bu(3, e);
        } catch (w) {
          Ye(e, e.return, w);
        }
        try {
          $o(5, e, e.return);
        } catch (w) {
          Ye(e, e.return, w);
        }
      }
      break;
    case 1:
      wn(t, e), On(e), r & 512 && n !== null && ss(n, n.return);
      break;
    case 5:
      if (
        (wn(t, e),
        On(e),
        r & 512 && n !== null && ss(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          Uo(i, "");
        } catch (w) {
          Ye(e, e.return, w);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var s = e.memoizedProps,
          o = n !== null ? n.memoizedProps : s,
          a = e.type,
          u = e.updateQueue;
        if (((e.updateQueue = null), u !== null))
          try {
            a === "input" && s.type === "radio" && s.name != null && Dy(i, s),
              Xd(a, o);
            var c = Xd(a, s);
            for (o = 0; o < u.length; o += 2) {
              var d = u[o],
                f = u[o + 1];
              d === "style"
                ? Uy(i, f)
                : d === "dangerouslySetInnerHTML"
                ? My(i, f)
                : d === "children"
                ? Uo(i, f)
                : km(i, d, f, c);
            }
            switch (a) {
              case "input":
                qd(i, s);
                break;
              case "textarea":
                Ay(i, s);
                break;
              case "select":
                var p = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!s.multiple;
                var g = s.value;
                g != null
                  ? as(i, !!s.multiple, g, !1)
                  : p !== !!s.multiple &&
                    (s.defaultValue != null
                      ? as(i, !!s.multiple, s.defaultValue, !0)
                      : as(i, !!s.multiple, s.multiple ? [] : "", !1));
            }
            i[Go] = s;
          } catch (w) {
            Ye(e, e.return, w);
          }
      }
      break;
    case 6:
      if ((wn(t, e), On(e), r & 4)) {
        if (e.stateNode === null) throw Error(B(162));
        (i = e.stateNode), (s = e.memoizedProps);
        try {
          i.nodeValue = s;
        } catch (w) {
          Ye(e, e.return, w);
        }
      }
      break;
    case 3:
      if (
        (wn(t, e), On(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Wo(t.containerInfo);
        } catch (w) {
          Ye(e, e.return, w);
        }
      break;
    case 4:
      wn(t, e), On(e);
      break;
    case 13:
      wn(t, e),
        On(e),
        (i = e.child),
        i.flags & 8192 &&
          ((s = i.memoizedState !== null),
          (i.stateNode.isHidden = s),
          !s ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (sp = Ze())),
        r & 4 && gg(e);
      break;
    case 22:
      if (
        ((d = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Nt = (c = Nt) || d), wn(t, e), (Nt = c)) : wn(t, e),
        On(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !d && e.mode & 1)
        )
          for (Y = e, d = e.child; d !== null; ) {
            for (f = Y = d; Y !== null; ) {
              switch (((p = Y), (g = p.child), p.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  $o(4, p, p.return);
                  break;
                case 1:
                  ss(p, p.return);
                  var x = p.stateNode;
                  if (typeof x.componentWillUnmount == "function") {
                    (r = p), (n = p.return);
                    try {
                      (t = r),
                        (x.props = t.memoizedProps),
                        (x.state = t.memoizedState),
                        x.componentWillUnmount();
                    } catch (w) {
                      Ye(r, n, w);
                    }
                  }
                  break;
                case 5:
                  ss(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    vg(f);
                    continue;
                  }
              }
              g !== null ? ((g.return = p), (Y = g)) : vg(f);
            }
            d = d.sibling;
          }
        e: for (d = null, f = e; ; ) {
          if (f.tag === 5) {
            if (d === null) {
              d = f;
              try {
                (i = f.stateNode),
                  c
                    ? ((s = i.style),
                      typeof s.setProperty == "function"
                        ? s.setProperty("display", "none", "important")
                        : (s.display = "none"))
                    : ((a = f.stateNode),
                      (u = f.memoizedProps.style),
                      (o =
                        u != null && u.hasOwnProperty("display")
                          ? u.display
                          : null),
                      (a.style.display = zy("display", o)));
              } catch (w) {
                Ye(e, e.return, w);
              }
            }
          } else if (f.tag === 6) {
            if (d === null)
              try {
                f.stateNode.nodeValue = c ? "" : f.memoizedProps;
              } catch (w) {
                Ye(e, e.return, w);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            (f.child.return = f), (f = f.child);
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            d === f && (d = null), (f = f.return);
          }
          d === f && (d = null), (f.sibling.return = f.return), (f = f.sibling);
        }
      }
      break;
    case 19:
      wn(t, e), On(e), r & 4 && gg(e);
      break;
    case 21:
      break;
    default:
      wn(t, e), On(e);
  }
}
function On(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (fx(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(B(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (Uo(i, ""), (r.flags &= -33));
          var s = hg(e);
          _f(e, s, i);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            a = hg(e);
          Cf(e, a, o);
          break;
        default:
          throw Error(B(161));
      }
    } catch (u) {
      Ye(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function ME(e, t, n) {
  (Y = e), hx(e);
}
function hx(e, t, n) {
  for (var r = (e.mode & 1) !== 0; Y !== null; ) {
    var i = Y,
      s = i.child;
    if (i.tag === 22 && r) {
      var o = i.memoizedState !== null || ea;
      if (!o) {
        var a = i.alternate,
          u = (a !== null && a.memoizedState !== null) || Nt;
        a = ea;
        var c = Nt;
        if (((ea = o), (Nt = u) && !c))
          for (Y = i; Y !== null; )
            (o = Y),
              (u = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? xg(i)
                : u !== null
                ? ((u.return = o), (Y = u))
                : xg(i);
        for (; s !== null; ) (Y = s), hx(s), (s = s.sibling);
        (Y = i), (ea = a), (Nt = c);
      }
      yg(e);
    } else
      i.subtreeFlags & 8772 && s !== null ? ((s.return = i), (Y = s)) : yg(e);
  }
}
function yg(e) {
  for (; Y !== null; ) {
    var t = Y;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Nt || Bu(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Nt)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : jn(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var s = t.updateQueue;
              s !== null && tg(t, s, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                tg(t, o, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var u = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    u.autoFocus && n.focus();
                    break;
                  case "img":
                    u.src && (n.src = u.src);
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
                var c = t.alternate;
                if (c !== null) {
                  var d = c.memoizedState;
                  if (d !== null) {
                    var f = d.dehydrated;
                    f !== null && Wo(f);
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
              throw Error(B(163));
          }
        Nt || (t.flags & 512 && kf(t));
      } catch (p) {
        Ye(t, t.return, p);
      }
    }
    if (t === e) {
      Y = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (Y = n);
      break;
    }
    Y = t.return;
  }
}
function vg(e) {
  for (; Y !== null; ) {
    var t = Y;
    if (t === e) {
      Y = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (Y = n);
      break;
    }
    Y = t.return;
  }
}
function xg(e) {
  for (; Y !== null; ) {
    var t = Y;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Bu(4, t);
          } catch (u) {
            Ye(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              Ye(t, i, u);
            }
          }
          var s = t.return;
          try {
            kf(t);
          } catch (u) {
            Ye(t, s, u);
          }
          break;
        case 5:
          var o = t.return;
          try {
            kf(t);
          } catch (u) {
            Ye(t, o, u);
          }
      }
    } catch (u) {
      Ye(t, t.return, u);
    }
    if (t === e) {
      Y = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (Y = a);
      break;
    }
    Y = t.return;
  }
}
var zE = Math.ceil,
  Ja = mr.ReactCurrentDispatcher,
  rp = mr.ReactCurrentOwner,
  gn = mr.ReactCurrentBatchConfig,
  we = 0,
  mt = null,
  st = null,
  xt = 0,
  Gt = 0,
  os = Yr(0),
  at = 0,
  nl = null,
  Ci = 0,
  Hu = 0,
  ip = 0,
  Ro = null,
  Ut = null,
  sp = 0,
  js = 1 / 0,
  Jn = null,
  eu = !1,
  Pf = null,
  Ir = null,
  ta = !1,
  Tr = null,
  tu = 0,
  Fo = 0,
  Tf = null,
  xa = -1,
  wa = 0;
function Ot() {
  return we & 6 ? Ze() : xa !== -1 ? xa : (xa = Ze());
}
function Mr(e) {
  return e.mode & 1
    ? we & 2 && xt !== 0
      ? xt & -xt
      : EE.transition !== null
      ? (wa === 0 && (wa = Jy()), wa)
      : ((e = Ce),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : ov(e.type))),
        e)
    : 1;
}
function Pn(e, t, n, r) {
  if (50 < Fo) throw ((Fo = 0), (Tf = null), Error(B(185)));
  gl(e, n, r),
    (!(we & 2) || e !== mt) &&
      (e === mt && (!(we & 2) && (Hu |= n), at === 4 && kr(e, xt)),
      qt(e, r),
      n === 1 && we === 0 && !(t.mode & 1) && ((js = Ze() + 500), Mu && Gr()));
}
function qt(e, t) {
  var n = e.callbackNode;
  Ej(e, t);
  var r = Ia(e, e === mt ? xt : 0);
  if (r === 0)
    n !== null && _h(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && _h(n), t === 1))
      e.tag === 0 ? jE(wg.bind(null, e)) : Nv(wg.bind(null, e)),
        vE(function () {
          !(we & 6) && Gr();
        }),
        (n = null);
    else {
      switch (ev(r)) {
        case 1:
          n = $m;
          break;
        case 4:
          n = Xy;
          break;
        case 16:
          n = Aa;
          break;
        case 536870912:
          n = Zy;
          break;
        default:
          n = Aa;
      }
      n = Ex(n, gx.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function gx(e, t) {
  if (((xa = -1), (wa = 0), we & 6)) throw Error(B(327));
  var n = e.callbackNode;
  if (ms() && e.callbackNode !== n) return null;
  var r = Ia(e, e === mt ? xt : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = nu(e, r);
  else {
    t = r;
    var i = we;
    we |= 2;
    var s = vx();
    (mt !== e || xt !== t) && ((Jn = null), (js = Ze() + 500), yi(e, t));
    do
      try {
        HE();
        break;
      } catch (a) {
        yx(e, a);
      }
    while (!0);
    Vm(),
      (Ja.current = s),
      (we = i),
      st !== null ? (t = 0) : ((mt = null), (xt = 0), (t = at));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = nf(e)), i !== 0 && ((r = i), (t = $f(e, i)))), t === 1)
    )
      throw ((n = nl), yi(e, 0), kr(e, r), qt(e, Ze()), n);
    if (t === 6) kr(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !UE(i) &&
          ((t = nu(e, r)),
          t === 2 && ((s = nf(e)), s !== 0 && ((r = s), (t = $f(e, s)))),
          t === 1))
      )
        throw ((n = nl), yi(e, 0), kr(e, r), qt(e, Ze()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(B(345));
        case 2:
          ii(e, Ut, Jn);
          break;
        case 3:
          if (
            (kr(e, r), (r & 130023424) === r && ((t = sp + 500 - Ze()), 10 < t))
          ) {
            if (Ia(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              Ot(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = df(ii.bind(null, e, Ut, Jn), t);
            break;
          }
          ii(e, Ut, Jn);
          break;
        case 4:
          if ((kr(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var o = 31 - _n(r);
            (s = 1 << o), (o = t[o]), o > i && (i = o), (r &= ~s);
          }
          if (
            ((r = i),
            (r = Ze() - r),
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
                : 1960 * zE(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = df(ii.bind(null, e, Ut, Jn), r);
            break;
          }
          ii(e, Ut, Jn);
          break;
        case 5:
          ii(e, Ut, Jn);
          break;
        default:
          throw Error(B(329));
      }
    }
  }
  return qt(e, Ze()), e.callbackNode === n ? gx.bind(null, e) : null;
}
function $f(e, t) {
  var n = Ro;
  return (
    e.current.memoizedState.isDehydrated && (yi(e, t).flags |= 256),
    (e = nu(e, t)),
    e !== 2 && ((t = Ut), (Ut = n), t !== null && Rf(t)),
    e
  );
}
function Rf(e) {
  Ut === null ? (Ut = e) : Ut.push.apply(Ut, e);
}
function UE(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            s = i.getSnapshot;
          i = i.value;
          try {
            if (!$n(s(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function kr(e, t) {
  for (
    t &= ~ip,
      t &= ~Hu,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - _n(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function wg(e) {
  if (we & 6) throw Error(B(327));
  ms();
  var t = Ia(e, 0);
  if (!(t & 1)) return qt(e, Ze()), null;
  var n = nu(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = nf(e);
    r !== 0 && ((t = r), (n = $f(e, r)));
  }
  if (n === 1) throw ((n = nl), yi(e, 0), kr(e, t), qt(e, Ze()), n);
  if (n === 6) throw Error(B(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    ii(e, Ut, Jn),
    qt(e, Ze()),
    null
  );
}
function op(e, t) {
  var n = we;
  we |= 1;
  try {
    return e(t);
  } finally {
    (we = n), we === 0 && ((js = Ze() + 500), Mu && Gr());
  }
}
function _i(e) {
  Tr !== null && Tr.tag === 0 && !(we & 6) && ms();
  var t = we;
  we |= 1;
  var n = gn.transition,
    r = Ce;
  try {
    if (((gn.transition = null), (Ce = 1), e)) return e();
  } finally {
    (Ce = r), (gn.transition = n), (we = t), !(we & 6) && Gr();
  }
}
function lp() {
  (Gt = os.current), Ie(os);
}
function yi(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), yE(n)), st !== null))
    for (n = st.return; n !== null; ) {
      var r = n;
      switch ((Um(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Ha();
          break;
        case 3:
          ws(), Ie(Vt), Ie(Pt), Gm();
          break;
        case 5:
          Ym(r);
          break;
        case 4:
          ws();
          break;
        case 13:
          Ie(He);
          break;
        case 19:
          Ie(He);
          break;
        case 10:
          Wm(r.type._context);
          break;
        case 22:
        case 23:
          lp();
      }
      n = n.return;
    }
  if (
    ((mt = e),
    (st = e = zr(e.current, null)),
    (xt = Gt = t),
    (at = 0),
    (nl = null),
    (ip = Hu = Ci = 0),
    (Ut = Ro = null),
    ci !== null)
  ) {
    for (t = 0; t < ci.length; t++)
      if (((n = ci[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          s = n.pending;
        if (s !== null) {
          var o = s.next;
          (s.next = i), (r.next = o);
        }
        n.pending = r;
      }
    ci = null;
  }
  return e;
}
function yx(e, t) {
  do {
    var n = st;
    try {
      if ((Vm(), (ga.current = Za), Xa)) {
        for (var r = Ve.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        Xa = !1;
      }
      if (
        ((ki = 0),
        (dt = lt = Ve = null),
        (To = !1),
        (Jo = 0),
        (rp.current = null),
        n === null || n.return === null)
      ) {
        (at = 1), (nl = t), (st = null);
        break;
      }
      e: {
        var s = e,
          o = n.return,
          a = n,
          u = t;
        if (
          ((t = xt),
          (a.flags |= 32768),
          u !== null && typeof u == "object" && typeof u.then == "function")
        ) {
          var c = u,
            d = a,
            f = d.tag;
          if (!(d.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var p = d.alternate;
            p
              ? ((d.updateQueue = p.updateQueue),
                (d.memoizedState = p.memoizedState),
                (d.lanes = p.lanes))
              : ((d.updateQueue = null), (d.memoizedState = null));
          }
          var g = lg(o);
          if (g !== null) {
            (g.flags &= -257),
              ag(g, o, a, s, t),
              g.mode & 1 && og(s, c, t),
              (t = g),
              (u = c);
            var x = t.updateQueue;
            if (x === null) {
              var w = new Set();
              w.add(u), (t.updateQueue = w);
            } else x.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              og(s, c, t), ap();
              break e;
            }
            u = Error(B(426));
          }
        } else if (Ue && a.mode & 1) {
          var j = lg(o);
          if (j !== null) {
            !(j.flags & 65536) && (j.flags |= 256),
              ag(j, o, a, s, t),
              Bm(bs(u, a));
            break e;
          }
        }
        (s = u = bs(u, a)),
          at !== 4 && (at = 2),
          Ro === null ? (Ro = [s]) : Ro.push(s),
          (s = o);
        do {
          switch (s.tag) {
            case 3:
              (s.flags |= 65536), (t &= -t), (s.lanes |= t);
              var y = ex(s, u, t);
              eg(s, y);
              break e;
            case 1:
              a = u;
              var h = s.type,
                v = s.stateNode;
              if (
                !(s.flags & 128) &&
                (typeof h.getDerivedStateFromError == "function" ||
                  (v !== null &&
                    typeof v.componentDidCatch == "function" &&
                    (Ir === null || !Ir.has(v))))
              ) {
                (s.flags |= 65536), (t &= -t), (s.lanes |= t);
                var b = tx(s, a, t);
                eg(s, b);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      wx(n);
    } catch (S) {
      (t = S), st === n && n !== null && (st = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function vx() {
  var e = Ja.current;
  return (Ja.current = Za), e === null ? Za : e;
}
function ap() {
  (at === 0 || at === 3 || at === 2) && (at = 4),
    mt === null || (!(Ci & 268435455) && !(Hu & 268435455)) || kr(mt, xt);
}
function nu(e, t) {
  var n = we;
  we |= 2;
  var r = vx();
  (mt !== e || xt !== t) && ((Jn = null), yi(e, t));
  do
    try {
      BE();
      break;
    } catch (i) {
      yx(e, i);
    }
  while (!0);
  if ((Vm(), (we = n), (Ja.current = r), st !== null)) throw Error(B(261));
  return (mt = null), (xt = 0), at;
}
function BE() {
  for (; st !== null; ) xx(st);
}
function HE() {
  for (; st !== null && !pj(); ) xx(st);
}
function xx(e) {
  var t = jx(e.alternate, e, Gt);
  (e.memoizedProps = e.pendingProps),
    t === null ? wx(e) : (st = t),
    (rp.current = null);
}
function wx(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = DE(n, t)), n !== null)) {
        (n.flags &= 32767), (st = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (at = 6), (st = null);
        return;
      }
    } else if (((n = OE(n, t, Gt)), n !== null)) {
      st = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      st = t;
      return;
    }
    st = t = e;
  } while (t !== null);
  at === 0 && (at = 5);
}
function ii(e, t, n) {
  var r = Ce,
    i = gn.transition;
  try {
    (gn.transition = null), (Ce = 1), VE(e, t, n, r);
  } finally {
    (gn.transition = i), (Ce = r);
  }
  return null;
}
function VE(e, t, n, r) {
  do ms();
  while (Tr !== null);
  if (we & 6) throw Error(B(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(B(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var s = n.lanes | n.childLanes;
  if (
    (Sj(e, s),
    e === mt && ((st = mt = null), (xt = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      ta ||
      ((ta = !0),
      Ex(Aa, function () {
        return ms(), null;
      })),
    (s = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || s)
  ) {
    (s = gn.transition), (gn.transition = null);
    var o = Ce;
    Ce = 1;
    var a = we;
    (we |= 4),
      (rp.current = null),
      IE(e, n),
      px(n, e),
      cE(uf),
      (Ma = !!af),
      (uf = af = null),
      (e.current = n),
      ME(n),
      hj(),
      (we = a),
      (Ce = o),
      (gn.transition = s);
  } else e.current = n;
  if (
    (ta && ((ta = !1), (Tr = e), (tu = i)),
    (s = e.pendingLanes),
    s === 0 && (Ir = null),
    vj(n.stateNode),
    qt(e, Ze()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (eu) throw ((eu = !1), (e = Pf), (Pf = null), e);
  return (
    tu & 1 && e.tag !== 0 && ms(),
    (s = e.pendingLanes),
    s & 1 ? (e === Tf ? Fo++ : ((Fo = 0), (Tf = e))) : (Fo = 0),
    Gr(),
    null
  );
}
function ms() {
  if (Tr !== null) {
    var e = ev(tu),
      t = gn.transition,
      n = Ce;
    try {
      if (((gn.transition = null), (Ce = 16 > e ? 16 : e), Tr === null))
        var r = !1;
      else {
        if (((e = Tr), (Tr = null), (tu = 0), we & 6)) throw Error(B(331));
        var i = we;
        for (we |= 4, Y = e.current; Y !== null; ) {
          var s = Y,
            o = s.child;
          if (Y.flags & 16) {
            var a = s.deletions;
            if (a !== null) {
              for (var u = 0; u < a.length; u++) {
                var c = a[u];
                for (Y = c; Y !== null; ) {
                  var d = Y;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      $o(8, d, s);
                  }
                  var f = d.child;
                  if (f !== null) (f.return = d), (Y = f);
                  else
                    for (; Y !== null; ) {
                      d = Y;
                      var p = d.sibling,
                        g = d.return;
                      if ((dx(d), d === c)) {
                        Y = null;
                        break;
                      }
                      if (p !== null) {
                        (p.return = g), (Y = p);
                        break;
                      }
                      Y = g;
                    }
                }
              }
              var x = s.alternate;
              if (x !== null) {
                var w = x.child;
                if (w !== null) {
                  x.child = null;
                  do {
                    var j = w.sibling;
                    (w.sibling = null), (w = j);
                  } while (w !== null);
                }
              }
              Y = s;
            }
          }
          if (s.subtreeFlags & 2064 && o !== null) (o.return = s), (Y = o);
          else
            e: for (; Y !== null; ) {
              if (((s = Y), s.flags & 2048))
                switch (s.tag) {
                  case 0:
                  case 11:
                  case 15:
                    $o(9, s, s.return);
                }
              var y = s.sibling;
              if (y !== null) {
                (y.return = s.return), (Y = y);
                break e;
              }
              Y = s.return;
            }
        }
        var h = e.current;
        for (Y = h; Y !== null; ) {
          o = Y;
          var v = o.child;
          if (o.subtreeFlags & 2064 && v !== null) (v.return = o), (Y = v);
          else
            e: for (o = h; Y !== null; ) {
              if (((a = Y), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Bu(9, a);
                  }
                } catch (S) {
                  Ye(a, a.return, S);
                }
              if (a === o) {
                Y = null;
                break e;
              }
              var b = a.sibling;
              if (b !== null) {
                (b.return = a.return), (Y = b);
                break e;
              }
              Y = a.return;
            }
        }
        if (
          ((we = i), Gr(), Bn && typeof Bn.onPostCommitFiberRoot == "function")
        )
          try {
            Bn.onPostCommitFiberRoot(Lu, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (Ce = n), (gn.transition = t);
    }
  }
  return !1;
}
function bg(e, t, n) {
  (t = bs(n, t)),
    (t = ex(e, t, 1)),
    (e = Ar(e, t, 1)),
    (t = Ot()),
    e !== null && (gl(e, 1, t), qt(e, t));
}
function Ye(e, t, n) {
  if (e.tag === 3) bg(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        bg(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Ir === null || !Ir.has(r)))
        ) {
          (e = bs(n, e)),
            (e = tx(t, e, 1)),
            (t = Ar(t, e, 1)),
            (e = Ot()),
            t !== null && (gl(t, 1, e), qt(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function WE(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Ot()),
    (e.pingedLanes |= e.suspendedLanes & n),
    mt === e &&
      (xt & n) === n &&
      (at === 4 || (at === 3 && (xt & 130023424) === xt && 500 > Ze() - sp)
        ? yi(e, 0)
        : (ip |= n)),
    qt(e, t);
}
function bx(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Wl), (Wl <<= 1), !(Wl & 130023424) && (Wl = 4194304))
      : (t = 1));
  var n = Ot();
  (e = ar(e, t)), e !== null && (gl(e, t, n), qt(e, n));
}
function qE(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), bx(e, n);
}
function KE(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(B(314));
  }
  r !== null && r.delete(t), bx(e, n);
}
var jx;
jx = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Vt.current) Bt = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Bt = !1), LE(e, t, n);
      Bt = !!(e.flags & 131072);
    }
  else (Bt = !1), Ue && t.flags & 1048576 && kv(t, qa, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      va(e, t), (e = t.pendingProps);
      var i = ys(t, Pt.current);
      fs(t, n), (i = Zm(null, t, r, e, i, n));
      var s = Jm();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Wt(r) ? ((s = !0), Va(t)) : (s = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            Km(t),
            (i.updater = Uu),
            (t.stateNode = i),
            (i._reactInternals = t),
            vf(t, r, e, n),
            (t = bf(null, t, r, !0, s, n)))
          : ((t.tag = 0), Ue && s && zm(t), Tt(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (va(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = YE(r)),
          (e = jn(r, e)),
          i)
        ) {
          case 0:
            t = wf(null, t, r, e, n);
            break e;
          case 1:
            t = dg(null, t, r, e, n);
            break e;
          case 11:
            t = ug(null, t, r, e, n);
            break e;
          case 14:
            t = cg(null, t, r, jn(r.type, e), n);
            break e;
        }
        throw Error(B(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : jn(r, i)),
        wf(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : jn(r, i)),
        dg(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((sx(t), e === null)) throw Error(B(387));
        (r = t.pendingProps),
          (s = t.memoizedState),
          (i = s.element),
          Rv(e, t),
          Ya(t, r, null, n);
        var o = t.memoizedState;
        if (((r = o.element), s.isDehydrated))
          if (
            ((s = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = s),
            (t.memoizedState = s),
            t.flags & 256)
          ) {
            (i = bs(Error(B(423)), t)), (t = fg(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = bs(Error(B(424)), t)), (t = fg(e, t, r, n, i));
            break e;
          } else
            for (
              Zt = Dr(t.stateNode.containerInfo.firstChild),
                en = t,
                Ue = !0,
                Nn = null,
                n = Tv(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((vs(), r === i)) {
            t = ur(e, t, n);
            break e;
          }
          Tt(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Fv(t),
        e === null && hf(t),
        (r = t.type),
        (i = t.pendingProps),
        (s = e !== null ? e.memoizedProps : null),
        (o = i.children),
        cf(r, i) ? (o = null) : s !== null && cf(r, s) && (t.flags |= 32),
        ix(e, t),
        Tt(e, t, o, n),
        t.child
      );
    case 6:
      return e === null && hf(t), null;
    case 13:
      return ox(e, t, n);
    case 4:
      return (
        Qm(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = xs(t, null, r, n)) : Tt(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : jn(r, i)),
        ug(e, t, r, i, n)
      );
    case 7:
      return Tt(e, t, t.pendingProps, n), t.child;
    case 8:
      return Tt(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Tt(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (s = t.memoizedProps),
          (o = i.value),
          Fe(Ka, r._currentValue),
          (r._currentValue = o),
          s !== null)
        )
          if ($n(s.value, o)) {
            if (s.children === i.children && !Vt.current) {
              t = ur(e, t, n);
              break e;
            }
          } else
            for (s = t.child, s !== null && (s.return = t); s !== null; ) {
              var a = s.dependencies;
              if (a !== null) {
                o = s.child;
                for (var u = a.firstContext; u !== null; ) {
                  if (u.context === r) {
                    if (s.tag === 1) {
                      (u = ir(-1, n & -n)), (u.tag = 2);
                      var c = s.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var d = c.pending;
                        d === null
                          ? (u.next = u)
                          : ((u.next = d.next), (d.next = u)),
                          (c.pending = u);
                      }
                    }
                    (s.lanes |= n),
                      (u = s.alternate),
                      u !== null && (u.lanes |= n),
                      gf(s.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  u = u.next;
                }
              } else if (s.tag === 10) o = s.type === t.type ? null : s.child;
              else if (s.tag === 18) {
                if (((o = s.return), o === null)) throw Error(B(341));
                (o.lanes |= n),
                  (a = o.alternate),
                  a !== null && (a.lanes |= n),
                  gf(o, n, t),
                  (o = s.sibling);
              } else o = s.child;
              if (o !== null) o.return = s;
              else
                for (o = s; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((s = o.sibling), s !== null)) {
                    (s.return = o.return), (o = s);
                    break;
                  }
                  o = o.return;
                }
              s = o;
            }
        Tt(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        fs(t, n),
        (i = yn(i)),
        (r = r(i)),
        (t.flags |= 1),
        Tt(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = jn(r, t.pendingProps)),
        (i = jn(r.type, i)),
        cg(e, t, r, i, n)
      );
    case 15:
      return nx(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : jn(r, i)),
        va(e, t),
        (t.tag = 1),
        Wt(r) ? ((e = !0), Va(t)) : (e = !1),
        fs(t, n),
        Jv(t, r, i),
        vf(t, r, i, n),
        bf(null, t, r, !0, e, n)
      );
    case 19:
      return lx(e, t, n);
    case 22:
      return rx(e, t, n);
  }
  throw Error(B(156, t.tag));
};
function Ex(e, t) {
  return Gy(e, t);
}
function QE(e, t, n, r) {
  (this.tag = e),
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
    (this.alternate = null);
}
function mn(e, t, n, r) {
  return new QE(e, t, n, r);
}
function up(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function YE(e) {
  if (typeof e == "function") return up(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === _m)) return 11;
    if (e === Pm) return 14;
  }
  return 2;
}
function zr(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = mn(e.tag, t, e.key, e.mode)),
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
function ba(e, t, n, r, i, s) {
  var o = 2;
  if (((r = e), typeof e == "function")) up(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case Gi:
        return vi(n.children, i, s, t);
      case Cm:
        (o = 8), (i |= 8);
        break;
      case Ud:
        return (
          (e = mn(12, n, t, i | 2)), (e.elementType = Ud), (e.lanes = s), e
        );
      case Bd:
        return (e = mn(13, n, t, i)), (e.elementType = Bd), (e.lanes = s), e;
      case Hd:
        return (e = mn(19, n, t, i)), (e.elementType = Hd), (e.lanes = s), e;
      case Fy:
        return Vu(n, i, s, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case $y:
              o = 10;
              break e;
            case Ry:
              o = 9;
              break e;
            case _m:
              o = 11;
              break e;
            case Pm:
              o = 14;
              break e;
            case jr:
              (o = 16), (r = null);
              break e;
          }
        throw Error(B(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = mn(o, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = s), t
  );
}
function vi(e, t, n, r) {
  return (e = mn(7, e, r, t)), (e.lanes = n), e;
}
function Vu(e, t, n, r) {
  return (
    (e = mn(22, e, r, t)),
    (e.elementType = Fy),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function fd(e, t, n) {
  return (e = mn(6, e, null, t)), (e.lanes = n), e;
}
function md(e, t, n) {
  return (
    (t = mn(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function GE(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Kc(0)),
    (this.expirationTimes = Kc(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Kc(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function cp(e, t, n, r, i, s, o, a, u) {
  return (
    (e = new GE(e, t, n, a, u)),
    t === 1 ? ((t = 1), s === !0 && (t |= 8)) : (t = 0),
    (s = mn(3, null, null, t)),
    (e.current = s),
    (s.stateNode = e),
    (s.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Km(s),
    e
  );
}
function XE(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Yi,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Sx(e) {
  if (!e) return Hr;
  e = e._reactInternals;
  e: {
    if (Ii(e) !== e || e.tag !== 1) throw Error(B(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Wt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(B(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Wt(n)) return Sv(e, n, t);
  }
  return t;
}
function Nx(e, t, n, r, i, s, o, a, u) {
  return (
    (e = cp(n, r, !0, e, i, s, o, a, u)),
    (e.context = Sx(null)),
    (n = e.current),
    (r = Ot()),
    (i = Mr(n)),
    (s = ir(r, i)),
    (s.callback = t ?? null),
    Ar(n, s, i),
    (e.current.lanes = i),
    gl(e, i, r),
    qt(e, r),
    e
  );
}
function Wu(e, t, n, r) {
  var i = t.current,
    s = Ot(),
    o = Mr(i);
  return (
    (n = Sx(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = ir(s, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Ar(i, t, o)),
    e !== null && (Pn(e, i, o, s), ha(e, i, o)),
    o
  );
}
function ru(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function jg(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function dp(e, t) {
  jg(e, t), (e = e.alternate) && jg(e, t);
}
function ZE() {
  return null;
}
var kx =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function fp(e) {
  this._internalRoot = e;
}
qu.prototype.render = fp.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(B(409));
  Wu(e, t, null, null);
};
qu.prototype.unmount = fp.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    _i(function () {
      Wu(null, e, null, null);
    }),
      (t[lr] = null);
  }
};
function qu(e) {
  this._internalRoot = e;
}
qu.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = rv();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Nr.length && t !== 0 && t < Nr[n].priority; n++);
    Nr.splice(n, 0, e), n === 0 && sv(e);
  }
};
function mp(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Ku(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Eg() {}
function JE(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var s = r;
      r = function () {
        var c = ru(o);
        s.call(c);
      };
    }
    var o = Nx(t, r, e, 0, null, !1, !1, "", Eg);
    return (
      (e._reactRootContainer = o),
      (e[lr] = o.current),
      Qo(e.nodeType === 8 ? e.parentNode : e),
      _i(),
      o
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var c = ru(u);
      a.call(c);
    };
  }
  var u = cp(e, 0, !1, null, null, !1, !1, "", Eg);
  return (
    (e._reactRootContainer = u),
    (e[lr] = u.current),
    Qo(e.nodeType === 8 ? e.parentNode : e),
    _i(function () {
      Wu(t, u, n, r);
    }),
    u
  );
}
function Qu(e, t, n, r, i) {
  var s = n._reactRootContainer;
  if (s) {
    var o = s;
    if (typeof i == "function") {
      var a = i;
      i = function () {
        var u = ru(o);
        a.call(u);
      };
    }
    Wu(t, o, e, i);
  } else o = JE(n, t, e, i, r);
  return ru(o);
}
tv = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = xo(t.pendingLanes);
        n !== 0 &&
          (Rm(t, n | 1), qt(t, Ze()), !(we & 6) && ((js = Ze() + 500), Gr()));
      }
      break;
    case 13:
      _i(function () {
        var r = ar(e, 1);
        if (r !== null) {
          var i = Ot();
          Pn(r, e, 1, i);
        }
      }),
        dp(e, 1);
  }
};
Fm = function (e) {
  if (e.tag === 13) {
    var t = ar(e, 134217728);
    if (t !== null) {
      var n = Ot();
      Pn(t, e, 134217728, n);
    }
    dp(e, 134217728);
  }
};
nv = function (e) {
  if (e.tag === 13) {
    var t = Mr(e),
      n = ar(e, t);
    if (n !== null) {
      var r = Ot();
      Pn(n, e, t, r);
    }
    dp(e, t);
  }
};
rv = function () {
  return Ce;
};
iv = function (e, t) {
  var n = Ce;
  try {
    return (Ce = e), t();
  } finally {
    Ce = n;
  }
};
Jd = function (e, t, n) {
  switch (t) {
    case "input":
      if ((qd(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = Iu(r);
            if (!i) throw Error(B(90));
            Oy(r), qd(r, i);
          }
        }
      }
      break;
    case "textarea":
      Ay(e, n);
      break;
    case "select":
      (t = n.value), t != null && as(e, !!n.multiple, t, !1);
  }
};
Vy = op;
Wy = _i;
var eS = { usingClientEntryPoint: !1, Events: [vl, es, Iu, By, Hy, op] },
  oo = {
    findFiberByHostInstance: ui,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  tS = {
    bundleType: oo.bundleType,
    version: oo.version,
    rendererPackageName: oo.rendererPackageName,
    rendererConfig: oo.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: mr.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Qy(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: oo.findFiberByHostInstance || ZE,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var na = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!na.isDisabled && na.supportsFiber)
    try {
      (Lu = na.inject(tS)), (Bn = na);
    } catch {}
}
ln.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = eS;
ln.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!mp(t)) throw Error(B(200));
  return XE(e, t, null, n);
};
ln.createRoot = function (e, t) {
  if (!mp(e)) throw Error(B(299));
  var n = !1,
    r = "",
    i = kx;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = cp(e, 1, !1, null, null, n, !1, r, i)),
    (e[lr] = t.current),
    Qo(e.nodeType === 8 ? e.parentNode : e),
    new fp(t)
  );
};
ln.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(B(188))
      : ((e = Object.keys(e).join(",")), Error(B(268, e)));
  return (e = Qy(t)), (e = e === null ? null : e.stateNode), e;
};
ln.flushSync = function (e) {
  return _i(e);
};
ln.hydrate = function (e, t, n) {
  if (!Ku(t)) throw Error(B(200));
  return Qu(null, e, t, !0, n);
};
ln.hydrateRoot = function (e, t, n) {
  if (!mp(e)) throw Error(B(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    s = "",
    o = kx;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = Nx(t, null, e, 1, n ?? null, i, !1, s, o)),
    (e[lr] = t.current),
    Qo(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new qu(t);
};
ln.render = function (e, t, n) {
  if (!Ku(t)) throw Error(B(200));
  return Qu(null, e, t, !1, n);
};
ln.unmountComponentAtNode = function (e) {
  if (!Ku(e)) throw Error(B(40));
  return e._reactRootContainer
    ? (_i(function () {
        Qu(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[lr] = null);
        });
      }),
      !0)
    : !1;
};
ln.unstable_batchedUpdates = op;
ln.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Ku(n)) throw Error(B(200));
  if (e == null || e._reactInternals === void 0) throw Error(B(38));
  return Qu(e, t, n, !1, r);
};
ln.version = "18.3.1-next-f1338f8080-20240426";
function Cx() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Cx);
    } catch (e) {
      console.error(e);
    }
}
Cx(), (Cy.exports = ln);
var Kt = Cy.exports;
const nS = hy(Kt),
  rS = py({ __proto__: null, default: nS }, [Kt]);
var _x,
  Sg = Kt;
(_x = Sg.createRoot), Sg.hydrateRoot;
var Px = { exports: {} },
  Tx = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var wl = m;
function iS(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var sS = typeof Object.is == "function" ? Object.is : iS,
  oS = wl.useSyncExternalStore,
  lS = wl.useRef,
  aS = wl.useEffect,
  uS = wl.useMemo,
  cS = wl.useDebugValue;
Tx.useSyncExternalStoreWithSelector = function (e, t, n, r, i) {
  var s = lS(null);
  if (s.current === null) {
    var o = { hasValue: !1, value: null };
    s.current = o;
  } else o = s.current;
  s = uS(
    function () {
      function u(g) {
        if (!c) {
          if (((c = !0), (d = g), (g = r(g)), i !== void 0 && o.hasValue)) {
            var x = o.value;
            if (i(x, g)) return (f = x);
          }
          return (f = g);
        }
        if (((x = f), sS(d, g))) return x;
        var w = r(g);
        return i !== void 0 && i(x, w) ? x : ((d = g), (f = w));
      }
      var c = !1,
        d,
        f,
        p = n === void 0 ? null : n;
      return [
        function () {
          return u(t());
        },
        p === null
          ? void 0
          : function () {
              return u(p());
            },
      ];
    },
    [t, n, r, i]
  );
  var a = oS(e, s[0], s[1]);
  return (
    aS(
      function () {
        (o.hasValue = !0), (o.value = a);
      },
      [a]
    ),
    cS(a),
    a
  );
};
Px.exports = Tx;
var dS = Px.exports,
  Jt = "default" in hs ? D : hs,
  Ng = Symbol.for("react-redux-context"),
  kg = typeof globalThis < "u" ? globalThis : {};
function fS() {
  if (!Jt.createContext) return {};
  const e = kg[Ng] ?? (kg[Ng] = new Map());
  let t = e.get(Jt.createContext);
  return t || ((t = Jt.createContext(null)), e.set(Jt.createContext, t)), t;
}
var Vr = fS(),
  mS = () => {
    throw new Error("uSES not initialized!");
  };
function pp(e = Vr) {
  return function () {
    return Jt.useContext(e);
  };
}
var $x = pp(),
  Rx = mS,
  pS = (e) => {
    Rx = e;
  },
  hS = (e, t) => e === t;
function gS(e = Vr) {
  const t = e === Vr ? $x : pp(e),
    n = (r, i = {}) => {
      const { equalityFn: s = hS, devModeChecks: o = {} } =
          typeof i == "function" ? { equalityFn: i } : i,
        {
          store: a,
          subscription: u,
          getServerState: c,
          stabilityCheck: d,
          identityFunctionCheck: f,
        } = t();
      Jt.useRef(!0);
      const p = Jt.useCallback(
          {
            [r.name](x) {
              return r(x);
            },
          }[r.name],
          [r, d, o.stabilityCheck]
        ),
        g = Rx(u.addNestedSub, a.getState, c || a.getState, p, s);
      return Jt.useDebugValue(g), g;
    };
  return Object.assign(n, { withTypes: () => n }), n;
}
var me = gS();
function yS(e) {
  e();
}
function vS() {
  let e = null,
    t = null;
  return {
    clear() {
      (e = null), (t = null);
    },
    notify() {
      yS(() => {
        let n = e;
        for (; n; ) n.callback(), (n = n.next);
      });
    },
    get() {
      const n = [];
      let r = e;
      for (; r; ) n.push(r), (r = r.next);
      return n;
    },
    subscribe(n) {
      let r = !0;
      const i = (t = { callback: n, next: null, prev: t });
      return (
        i.prev ? (i.prev.next = i) : (e = i),
        function () {
          !r ||
            e === null ||
            ((r = !1),
            i.next ? (i.next.prev = i.prev) : (t = i.prev),
            i.prev ? (i.prev.next = i.next) : (e = i.next));
        }
      );
    },
  };
}
var Cg = { notify() {}, get: () => [] };
function xS(e, t) {
  let n,
    r = Cg,
    i = 0,
    s = !1;
  function o(w) {
    d();
    const j = r.subscribe(w);
    let y = !1;
    return () => {
      y || ((y = !0), j(), f());
    };
  }
  function a() {
    r.notify();
  }
  function u() {
    x.onStateChange && x.onStateChange();
  }
  function c() {
    return s;
  }
  function d() {
    i++, n || ((n = e.subscribe(u)), (r = vS()));
  }
  function f() {
    i--, n && i === 0 && (n(), (n = void 0), r.clear(), (r = Cg));
  }
  function p() {
    s || ((s = !0), d());
  }
  function g() {
    s && ((s = !1), f());
  }
  const x = {
    addNestedSub: o,
    notifyNestedSubs: a,
    handleChangeWrapper: u,
    isSubscribed: c,
    trySubscribe: p,
    tryUnsubscribe: g,
    getListeners: () => r,
  };
  return x;
}
var wS =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  bS = typeof navigator < "u" && navigator.product === "ReactNative",
  jS = wS || bS ? Jt.useLayoutEffect : Jt.useEffect;
function ES({
  store: e,
  context: t,
  children: n,
  serverState: r,
  stabilityCheck: i = "once",
  identityFunctionCheck: s = "once",
}) {
  const o = Jt.useMemo(() => {
      const c = xS(e);
      return {
        store: e,
        subscription: c,
        getServerState: r ? () => r : void 0,
        stabilityCheck: i,
        identityFunctionCheck: s,
      };
    }, [e, r, i, s]),
    a = Jt.useMemo(() => e.getState(), [e]);
  jS(() => {
    const { subscription: c } = o;
    return (
      (c.onStateChange = c.notifyNestedSubs),
      c.trySubscribe(),
      a !== e.getState() && c.notifyNestedSubs(),
      () => {
        c.tryUnsubscribe(), (c.onStateChange = void 0);
      }
    );
  }, [o, a]);
  const u = t || Vr;
  return Jt.createElement(u.Provider, { value: o }, n);
}
var SS = ES;
function Fx(e = Vr) {
  const t = e === Vr ? $x : pp(e),
    n = () => {
      const { store: r } = t();
      return r;
    };
  return Object.assign(n, { withTypes: () => n }), n;
}
var NS = Fx();
function kS(e = Vr) {
  const t = e === Vr ? NS : Fx(e),
    n = () => t().dispatch;
  return Object.assign(n, { withTypes: () => n }), n;
}
var It = kS();
pS(dS.useSyncExternalStoreWithSelector);
/**
 * @remix-run/router v1.21.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ze() {
  return (
    (ze = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ze.apply(this, arguments)
  );
}
var nt;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(nt || (nt = {}));
const _g = "popstate";
function CS(e) {
  e === void 0 && (e = {});
  function t(r, i) {
    let { pathname: s, search: o, hash: a } = r.location;
    return rl(
      "",
      { pathname: s, search: o, hash: a },
      (i.state && i.state.usr) || null,
      (i.state && i.state.key) || "default"
    );
  }
  function n(r, i) {
    return typeof i == "string" ? i : Pi(i);
  }
  return PS(t, n, null, e);
}
function he(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function Es(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function _S() {
  return Math.random().toString(36).substr(2, 8);
}
function Pg(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function rl(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    ze(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? Xr(t) : t,
      { state: n, key: (t && t.key) || r || _S() }
    )
  );
}
function Pi(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function Xr(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function PS(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: i = document.defaultView, v5Compat: s = !1 } = r,
    o = i.history,
    a = nt.Pop,
    u = null,
    c = d();
  c == null && ((c = 0), o.replaceState(ze({}, o.state, { idx: c }), ""));
  function d() {
    return (o.state || { idx: null }).idx;
  }
  function f() {
    a = nt.Pop;
    let j = d(),
      y = j == null ? null : j - c;
    (c = j), u && u({ action: a, location: w.location, delta: y });
  }
  function p(j, y) {
    a = nt.Push;
    let h = rl(w.location, j, y);
    c = d() + 1;
    let v = Pg(h, c),
      b = w.createHref(h);
    try {
      o.pushState(v, "", b);
    } catch (S) {
      if (S instanceof DOMException && S.name === "DataCloneError") throw S;
      i.location.assign(b);
    }
    s && u && u({ action: a, location: w.location, delta: 1 });
  }
  function g(j, y) {
    a = nt.Replace;
    let h = rl(w.location, j, y);
    c = d();
    let v = Pg(h, c),
      b = w.createHref(h);
    o.replaceState(v, "", b),
      s && u && u({ action: a, location: w.location, delta: 0 });
  }
  function x(j) {
    let y = i.location.origin !== "null" ? i.location.origin : i.location.href,
      h = typeof j == "string" ? j : Pi(j);
    return (
      (h = h.replace(/ $/, "%20")),
      he(
        y,
        "No window.location.(origin|href) available to create URL for href: " +
          h
      ),
      new URL(h, y)
    );
  }
  let w = {
    get action() {
      return a;
    },
    get location() {
      return e(i, o);
    },
    listen(j) {
      if (u) throw new Error("A history only accepts one active listener");
      return (
        i.addEventListener(_g, f),
        (u = j),
        () => {
          i.removeEventListener(_g, f), (u = null);
        }
      );
    },
    createHref(j) {
      return t(i, j);
    },
    createURL: x,
    encodeLocation(j) {
      let y = x(j);
      return { pathname: y.pathname, search: y.search, hash: y.hash };
    },
    push: p,
    replace: g,
    go(j) {
      return o.go(j);
    },
  };
  return w;
}
var Pe;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(Pe || (Pe = {}));
const TS = new Set([
  "lazy",
  "caseSensitive",
  "path",
  "id",
  "index",
  "children",
]);
function $S(e) {
  return e.index === !0;
}
function iu(e, t, n, r) {
  return (
    n === void 0 && (n = []),
    r === void 0 && (r = {}),
    e.map((i, s) => {
      let o = [...n, String(s)],
        a = typeof i.id == "string" ? i.id : o.join("-");
      if (
        (he(
          i.index !== !0 || !i.children,
          "Cannot specify children on an index route"
        ),
        he(
          !r[a],
          'Found a route id collision on id "' +
            a +
            `".  Route id's must be globally unique within Data Router usages`
        ),
        $S(i))
      ) {
        let u = ze({}, i, t(i), { id: a });
        return (r[a] = u), u;
      } else {
        let u = ze({}, i, t(i), { id: a, children: void 0 });
        return (
          (r[a] = u), i.children && (u.children = iu(i.children, t, o, r)), u
        );
      }
    })
  );
}
function oi(e, t, n) {
  return n === void 0 && (n = "/"), ja(e, t, n, !1);
}
function ja(e, t, n, r) {
  let i = typeof t == "string" ? Xr(t) : t,
    s = Ds(i.pathname || "/", n);
  if (s == null) return null;
  let o = Lx(e);
  FS(o);
  let a = null;
  for (let u = 0; a == null && u < o.length; ++u) {
    let c = VS(s);
    a = BS(o[u], c, r);
  }
  return a;
}
function RS(e, t) {
  let { route: n, pathname: r, params: i } = e;
  return { id: n.id, pathname: r, params: i, data: t[n.id], handle: n.handle };
}
function Lx(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let i = (s, o, a) => {
    let u = {
      relativePath: a === void 0 ? s.path || "" : a,
      caseSensitive: s.caseSensitive === !0,
      childrenIndex: o,
      route: s,
    };
    u.relativePath.startsWith("/") &&
      (he(
        u.relativePath.startsWith(r),
        'Absolute route path "' +
          u.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (u.relativePath = u.relativePath.slice(r.length)));
    let c = sr([r, u.relativePath]),
      d = n.concat(u);
    s.children &&
      s.children.length > 0 &&
      (he(
        s.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + c + '".')
      ),
      Lx(s.children, t, d, c)),
      !(s.path == null && !s.index) &&
        t.push({ path: c, score: zS(c, s.index), routesMeta: d });
  };
  return (
    e.forEach((s, o) => {
      var a;
      if (s.path === "" || !((a = s.path) != null && a.includes("?"))) i(s, o);
      else for (let u of Ox(s.path)) i(s, o, u);
    }),
    t
  );
}
function Ox(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    i = n.endsWith("?"),
    s = n.replace(/\?$/, "");
  if (r.length === 0) return i ? [s, ""] : [s];
  let o = Ox(r.join("/")),
    a = [];
  return (
    a.push(...o.map((u) => (u === "" ? s : [s, u].join("/")))),
    i && a.push(...o),
    a.map((u) => (e.startsWith("/") && u === "" ? "/" : u))
  );
}
function FS(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : US(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const LS = /^:[\w-]+$/,
  OS = 3,
  DS = 2,
  AS = 1,
  IS = 10,
  MS = -2,
  Tg = (e) => e === "*";
function zS(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(Tg) && (r += MS),
    t && (r += DS),
    n
      .filter((i) => !Tg(i))
      .reduce((i, s) => i + (LS.test(s) ? OS : s === "" ? AS : IS), r)
  );
}
function US(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function BS(e, t, n) {
  n === void 0 && (n = !1);
  let { routesMeta: r } = e,
    i = {},
    s = "/",
    o = [];
  for (let a = 0; a < r.length; ++a) {
    let u = r[a],
      c = a === r.length - 1,
      d = s === "/" ? t : t.slice(s.length) || "/",
      f = $g(
        { path: u.relativePath, caseSensitive: u.caseSensitive, end: c },
        d
      ),
      p = u.route;
    if (
      (!f &&
        c &&
        n &&
        !r[r.length - 1].route.index &&
        (f = $g(
          { path: u.relativePath, caseSensitive: u.caseSensitive, end: !1 },
          d
        )),
      !f)
    )
      return null;
    Object.assign(i, f.params),
      o.push({
        params: i,
        pathname: sr([s, f.pathname]),
        pathnameBase: KS(sr([s, f.pathnameBase])),
        route: p,
      }),
      f.pathnameBase !== "/" && (s = sr([s, f.pathnameBase]));
  }
  return o;
}
function $g(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = HS(e.path, e.caseSensitive, e.end),
    i = t.match(n);
  if (!i) return null;
  let s = i[0],
    o = s.replace(/(.)\/+$/, "$1"),
    a = i.slice(1);
  return {
    params: r.reduce((c, d, f) => {
      let { paramName: p, isOptional: g } = d;
      if (p === "*") {
        let w = a[f] || "";
        o = s.slice(0, s.length - w.length).replace(/(.)\/+$/, "$1");
      }
      const x = a[f];
      return (
        g && !x ? (c[p] = void 0) : (c[p] = (x || "").replace(/%2F/g, "/")), c
      );
    }, {}),
    pathname: s,
    pathnameBase: o,
    pattern: e,
  };
}
function HS(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Es(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    i =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (o, a, u) => (
            r.push({ paramName: a, isOptional: u != null }),
            u ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (i += "\\/*$")
      : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"),
    [new RegExp(i, t ? void 0 : "i"), r]
  );
}
function VS(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      Es(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function Ds(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function WS(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: i = "",
  } = typeof e == "string" ? Xr(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : qS(n, t)) : t,
    search: QS(r),
    hash: YS(i),
  };
}
function qS(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((i) => {
      i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function pd(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function Dx(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function Yu(e, t) {
  let n = Dx(e);
  return t
    ? n.map((r, i) => (i === n.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function Gu(e, t, n, r) {
  r === void 0 && (r = !1);
  let i;
  typeof e == "string"
    ? (i = Xr(e))
    : ((i = ze({}, e)),
      he(
        !i.pathname || !i.pathname.includes("?"),
        pd("?", "pathname", "search", i)
      ),
      he(
        !i.pathname || !i.pathname.includes("#"),
        pd("#", "pathname", "hash", i)
      ),
      he(!i.search || !i.search.includes("#"), pd("#", "search", "hash", i)));
  let s = e === "" || i.pathname === "",
    o = s ? "/" : i.pathname,
    a;
  if (o == null) a = n;
  else {
    let f = t.length - 1;
    if (!r && o.startsWith("..")) {
      let p = o.split("/");
      for (; p[0] === ".."; ) p.shift(), (f -= 1);
      i.pathname = p.join("/");
    }
    a = f >= 0 ? t[f] : "/";
  }
  let u = WS(i, a),
    c = o && o !== "/" && o.endsWith("/"),
    d = (s || o === ".") && n.endsWith("/");
  return !u.pathname.endsWith("/") && (c || d) && (u.pathname += "/"), u;
}
const sr = (e) => e.join("/").replace(/\/\/+/g, "/"),
  KS = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  QS = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  YS = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
class su {
  constructor(t, n, r, i) {
    i === void 0 && (i = !1),
      (this.status = t),
      (this.statusText = n || ""),
      (this.internal = i),
      r instanceof Error
        ? ((this.data = r.toString()), (this.error = r))
        : (this.data = r);
  }
}
function Xu(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const Ax = ["post", "put", "patch", "delete"],
  GS = new Set(Ax),
  XS = ["get", ...Ax],
  ZS = new Set(XS),
  JS = new Set([301, 302, 303, 307, 308]),
  e2 = new Set([307, 308]),
  hd = {
    state: "idle",
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  t2 = {
    state: "idle",
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  lo = { state: "unblocked", proceed: void 0, reset: void 0, location: void 0 },
  hp = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  n2 = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary }),
  Ix = "remix-router-transitions";
function r2(e) {
  const t = e.window ? e.window : typeof window < "u" ? window : void 0,
    n =
      typeof t < "u" &&
      typeof t.document < "u" &&
      typeof t.document.createElement < "u",
    r = !n;
  he(
    e.routes.length > 0,
    "You must provide a non-empty routes array to createRouter"
  );
  let i;
  if (e.mapRouteProperties) i = e.mapRouteProperties;
  else if (e.detectErrorBoundary) {
    let _ = e.detectErrorBoundary;
    i = (P) => ({ hasErrorBoundary: _(P) });
  } else i = n2;
  let s = {},
    o = iu(e.routes, i, void 0, s),
    a,
    u = e.basename || "/",
    c = e.dataStrategy || l2,
    d = e.patchRoutesOnNavigation,
    f = ze(
      {
        v7_fetcherPersist: !1,
        v7_normalizeFormMethod: !1,
        v7_partialHydration: !1,
        v7_prependBasename: !1,
        v7_relativeSplatPath: !1,
        v7_skipActionErrorRevalidation: !1,
      },
      e.future
    ),
    p = null,
    g = new Set(),
    x = null,
    w = null,
    j = null,
    y = e.hydrationData != null,
    h = oi(o, e.history.location, u),
    v = null;
  if (h == null && !d) {
    let _ = Mt(404, { pathname: e.history.location.pathname }),
      { matches: P, route: R } = Bg(o);
    (h = P), (v = { [R.id]: _ });
  }
  h &&
    !e.hydrationData &&
    Dl(h, o, e.history.location.pathname).active &&
    (h = null);
  let b;
  if (h)
    if (h.some((_) => _.route.lazy)) b = !1;
    else if (!h.some((_) => _.route.loader)) b = !0;
    else if (f.v7_partialHydration) {
      let _ = e.hydrationData ? e.hydrationData.loaderData : null,
        P = e.hydrationData ? e.hydrationData.errors : null;
      if (P) {
        let R = h.findIndex((M) => P[M.route.id] !== void 0);
        b = h.slice(0, R + 1).every((M) => !Lf(M.route, _, P));
      } else b = h.every((R) => !Lf(R.route, _, P));
    } else b = e.hydrationData != null;
  else if (((b = !1), (h = []), f.v7_partialHydration)) {
    let _ = Dl(null, o, e.history.location.pathname);
    _.active && _.matches && (h = _.matches);
  }
  let S,
    E = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: h,
      initialized: b,
      navigation: hd,
      restoreScrollPosition: e.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: "idle",
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || v,
      fetchers: new Map(),
      blockers: new Map(),
    },
    N = nt.Pop,
    k = !1,
    L,
    F = !1,
    z = new Map(),
    A = null,
    H = !1,
    K = !1,
    ae = [],
    le = new Set(),
    Z = new Map(),
    T = 0,
    I = -1,
    W = new Map(),
    V = new Set(),
    oe = new Map(),
    ce = new Map(),
    je = new Set(),
    pe = new Map(),
    ve = new Map(),
    Ge;
  function bt() {
    if (
      ((p = e.history.listen((_) => {
        let { action: P, location: R, delta: M } = _;
        if (Ge) {
          Ge(), (Ge = void 0);
          return;
        }
        Es(
          ve.size === 0 || M != null,
          "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL."
        );
        let G = fh({
          currentLocation: E.location,
          nextLocation: R,
          historyAction: P,
        });
        if (G && M != null) {
          let ie = new Promise((ue) => {
            Ge = ue;
          });
          e.history.go(M * -1),
            Ol(G, {
              state: "blocked",
              location: R,
              proceed() {
                Ol(G, {
                  state: "proceeding",
                  proceed: void 0,
                  reset: void 0,
                  location: R,
                }),
                  ie.then(() => e.history.go(M));
              },
              reset() {
                let ue = new Map(E.blockers);
                ue.set(G, lo), Be({ blockers: ue });
              },
            });
          return;
        }
        return yr(P, R);
      })),
      n)
    ) {
      b2(t, z);
      let _ = () => j2(t, z);
      t.addEventListener("pagehide", _),
        (A = () => t.removeEventListener("pagehide", _));
    }
    return E.initialized || yr(nt.Pop, E.location, { initialHydration: !0 }), S;
  }
  function ct() {
    p && p(),
      A && A(),
      g.clear(),
      L && L.abort(),
      E.fetchers.forEach((_, P) => vr(P)),
      E.blockers.forEach((_, P) => dh(P));
  }
  function ti(_) {
    return g.add(_), () => g.delete(_);
  }
  function Be(_, P) {
    P === void 0 && (P = {}), (E = ze({}, E, _));
    let R = [],
      M = [];
    f.v7_fetcherPersist &&
      E.fetchers.forEach((G, ie) => {
        G.state === "idle" && (je.has(ie) ? M.push(ie) : R.push(ie));
      }),
      [...g].forEach((G) =>
        G(E, {
          deletedFetchers: M,
          viewTransitionOpts: P.viewTransitionOpts,
          flushSync: P.flushSync === !0,
        })
      ),
      f.v7_fetcherPersist &&
        (R.forEach((G) => E.fetchers.delete(G)), M.forEach((G) => vr(G)));
  }
  function pt(_, P, R) {
    var M, G;
    let { flushSync: ie } = R === void 0 ? {} : R,
      ue =
        E.actionData != null &&
        E.navigation.formMethod != null &&
        Sn(E.navigation.formMethod) &&
        E.navigation.state === "loading" &&
        ((M = _.state) == null ? void 0 : M._isRedirect) !== !0,
      ee;
    P.actionData
      ? Object.keys(P.actionData).length > 0
        ? (ee = P.actionData)
        : (ee = null)
      : ue
      ? (ee = E.actionData)
      : (ee = null);
    let te = P.loaderData
        ? zg(E.loaderData, P.loaderData, P.matches || [], P.errors)
        : E.loaderData,
      X = E.blockers;
    X.size > 0 && ((X = new Map(X)), X.forEach((xe, gt) => X.set(gt, lo)));
    let se =
      k === !0 ||
      (E.navigation.formMethod != null &&
        Sn(E.navigation.formMethod) &&
        ((G = _.state) == null ? void 0 : G._isRedirect) !== !0);
    a && ((o = a), (a = void 0)),
      H ||
        N === nt.Pop ||
        (N === nt.Push
          ? e.history.push(_, _.state)
          : N === nt.Replace && e.history.replace(_, _.state));
    let ye;
    if (N === nt.Pop) {
      let xe = z.get(E.location.pathname);
      xe && xe.has(_.pathname)
        ? (ye = { currentLocation: E.location, nextLocation: _ })
        : z.has(_.pathname) &&
          (ye = { currentLocation: _, nextLocation: E.location });
    } else if (F) {
      let xe = z.get(E.location.pathname);
      xe
        ? xe.add(_.pathname)
        : ((xe = new Set([_.pathname])), z.set(E.location.pathname, xe)),
        (ye = { currentLocation: E.location, nextLocation: _ });
    }
    Be(
      ze({}, P, {
        actionData: ee,
        loaderData: te,
        historyAction: N,
        location: _,
        initialized: !0,
        navigation: hd,
        revalidation: "idle",
        restoreScrollPosition: ph(_, P.matches || E.matches),
        preventScrollReset: se,
        blockers: X,
      }),
      { viewTransitionOpts: ye, flushSync: ie === !0 }
    ),
      (N = nt.Pop),
      (k = !1),
      (F = !1),
      (H = !1),
      (K = !1),
      (ae = []);
  }
  async function qs(_, P) {
    if (typeof _ == "number") {
      e.history.go(_);
      return;
    }
    let R = Ff(
        E.location,
        E.matches,
        u,
        f.v7_prependBasename,
        _,
        f.v7_relativeSplatPath,
        P == null ? void 0 : P.fromRouteId,
        P == null ? void 0 : P.relative
      ),
      {
        path: M,
        submission: G,
        error: ie,
      } = Rg(f.v7_normalizeFormMethod, !1, R, P),
      ue = E.location,
      ee = rl(E.location, M, P && P.state);
    ee = ze({}, ee, e.history.encodeLocation(ee));
    let te = P && P.replace != null ? P.replace : void 0,
      X = nt.Push;
    te === !0
      ? (X = nt.Replace)
      : te === !1 ||
        (G != null &&
          Sn(G.formMethod) &&
          G.formAction === E.location.pathname + E.location.search &&
          (X = nt.Replace));
    let se =
        P && "preventScrollReset" in P ? P.preventScrollReset === !0 : void 0,
      ye = (P && P.flushSync) === !0,
      xe = fh({ currentLocation: ue, nextLocation: ee, historyAction: X });
    if (xe) {
      Ol(xe, {
        state: "blocked",
        location: ee,
        proceed() {
          Ol(xe, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: ee,
          }),
            qs(_, P);
        },
        reset() {
          let gt = new Map(E.blockers);
          gt.set(xe, lo), Be({ blockers: gt });
        },
      });
      return;
    }
    return await yr(X, ee, {
      submission: G,
      pendingError: ie,
      preventScrollReset: se,
      replace: P && P.replace,
      enableViewTransition: P && P.viewTransition,
      flushSync: ye,
    });
  }
  function Rl() {
    if (
      (qe(),
      Be({ revalidation: "loading" }),
      E.navigation.state !== "submitting")
    ) {
      if (E.navigation.state === "idle") {
        yr(E.historyAction, E.location, { startUninterruptedRevalidation: !0 });
        return;
      }
      yr(N || E.historyAction, E.navigation.location, {
        overrideNavigation: E.navigation,
        enableViewTransition: F === !0,
      });
    }
  }
  async function yr(_, P, R) {
    L && L.abort(),
      (L = null),
      (N = _),
      (H = (R && R.startUninterruptedRevalidation) === !0),
      Nb(E.location, E.matches),
      (k = (R && R.preventScrollReset) === !0),
      (F = (R && R.enableViewTransition) === !0);
    let M = a || o,
      G = R && R.overrideNavigation,
      ie = oi(M, P, u),
      ue = (R && R.flushSync) === !0,
      ee = Dl(ie, M, P.pathname);
    if ((ee.active && ee.matches && (ie = ee.matches), !ie)) {
      let { error: Re, notFoundMatches: Ee, route: Ke } = Ic(P.pathname);
      pt(
        P,
        { matches: Ee, loaderData: {}, errors: { [Ke.id]: Re } },
        { flushSync: ue }
      );
      return;
    }
    if (
      E.initialized &&
      !K &&
      m2(E.location, P) &&
      !(R && R.submission && Sn(R.submission.formMethod))
    ) {
      pt(P, { matches: ie }, { flushSync: ue });
      return;
    }
    L = new AbortController();
    let te = Wi(e.history, P, L.signal, R && R.submission),
      X;
    if (R && R.pendingError)
      X = [li(ie).route.id, { type: Pe.error, error: R.pendingError }];
    else if (R && R.submission && Sn(R.submission.formMethod)) {
      let Re = await uh(te, P, R.submission, ie, ee.active, {
        replace: R.replace,
        flushSync: ue,
      });
      if (Re.shortCircuited) return;
      if (Re.pendingActionResult) {
        let [Ee, Ke] = Re.pendingActionResult;
        if (Xt(Ke) && Xu(Ke.error) && Ke.error.status === 404) {
          (L = null),
            pt(P, {
              matches: Re.matches,
              loaderData: {},
              errors: { [Ee]: Ke.error },
            });
          return;
        }
      }
      (ie = Re.matches || ie),
        (X = Re.pendingActionResult),
        (G = gd(P, R.submission)),
        (ue = !1),
        (ee.active = !1),
        (te = Wi(e.history, te.url, te.signal));
    }
    let {
      shortCircuited: se,
      matches: ye,
      loaderData: xe,
      errors: gt,
    } = await ch(
      te,
      P,
      ie,
      ee.active,
      G,
      R && R.submission,
      R && R.fetcherSubmission,
      R && R.replace,
      R && R.initialHydration === !0,
      ue,
      X
    );
    se ||
      ((L = null),
      pt(P, ze({ matches: ye || ie }, Ug(X), { loaderData: xe, errors: gt })));
  }
  async function uh(_, P, R, M, G, ie) {
    ie === void 0 && (ie = {}), qe();
    let ue = x2(P, R);
    if ((Be({ navigation: ue }, { flushSync: ie.flushSync === !0 }), G)) {
      let X = await Al(M, P.pathname, _.signal);
      if (X.type === "aborted") return { shortCircuited: !0 };
      if (X.type === "error") {
        let se = li(X.partialMatches).route.id;
        return {
          matches: X.partialMatches,
          pendingActionResult: [se, { type: Pe.error, error: X.error }],
        };
      } else if (X.matches) M = X.matches;
      else {
        let { notFoundMatches: se, error: ye, route: xe } = Ic(P.pathname);
        return {
          matches: se,
          pendingActionResult: [xe.id, { type: Pe.error, error: ye }],
        };
      }
    }
    let ee,
      te = bo(M, P);
    if (!te.route.action && !te.route.lazy)
      ee = {
        type: Pe.error,
        error: Mt(405, {
          method: _.method,
          pathname: P.pathname,
          routeId: te.route.id,
        }),
      };
    else if (
      ((ee = (await ne("action", E, _, [te], M, null))[te.route.id]),
      _.signal.aborted)
    )
      return { shortCircuited: !0 };
    if (fi(ee)) {
      let X;
      return (
        ie && ie.replace != null
          ? (X = ie.replace)
          : (X =
              Ag(ee.response.headers.get("Location"), new URL(_.url), u) ===
              E.location.pathname + E.location.search),
        await U(_, ee, !0, { submission: R, replace: X }),
        { shortCircuited: !0 }
      );
    }
    if ($r(ee)) throw Mt(400, { type: "defer-action" });
    if (Xt(ee)) {
      let X = li(M, te.route.id);
      return (
        (ie && ie.replace) !== !0 && (N = nt.Push),
        { matches: M, pendingActionResult: [X.route.id, ee] }
      );
    }
    return { matches: M, pendingActionResult: [te.route.id, ee] };
  }
  async function ch(_, P, R, M, G, ie, ue, ee, te, X, se) {
    let ye = G || gd(P, ie),
      xe = ie || ue || Vg(ye),
      gt = !H && (!f.v7_partialHydration || !te);
    if (M) {
      if (gt) {
        let Qe = C(se);
        Be(ze({ navigation: ye }, Qe !== void 0 ? { actionData: Qe } : {}), {
          flushSync: X,
        });
      }
      let be = await Al(R, P.pathname, _.signal);
      if (be.type === "aborted") return { shortCircuited: !0 };
      if (be.type === "error") {
        let Qe = li(be.partialMatches).route.id;
        return {
          matches: be.partialMatches,
          loaderData: {},
          errors: { [Qe]: be.error },
        };
      } else if (be.matches) R = be.matches;
      else {
        let { error: Qe, notFoundMatches: Bi, route: Zs } = Ic(P.pathname);
        return { matches: Bi, loaderData: {}, errors: { [Zs.id]: Qe } };
      }
    }
    let Re = a || o,
      [Ee, Ke] = Lg(
        e.history,
        E,
        R,
        xe,
        P,
        f.v7_partialHydration && te === !0,
        f.v7_skipActionErrorRevalidation,
        K,
        ae,
        le,
        je,
        oe,
        V,
        Re,
        u,
        se
      );
    if (
      (Mc(
        (be) =>
          !(R && R.some((Qe) => Qe.route.id === be)) ||
          (Ee && Ee.some((Qe) => Qe.route.id === be))
      ),
      (I = ++T),
      Ee.length === 0 && Ke.length === 0)
    ) {
      let be = Ll();
      return (
        pt(
          P,
          ze(
            {
              matches: R,
              loaderData: {},
              errors: se && Xt(se[1]) ? { [se[0]]: se[1].error } : null,
            },
            Ug(se),
            be ? { fetchers: new Map(E.fetchers) } : {}
          ),
          { flushSync: X }
        ),
        { shortCircuited: !0 }
      );
    }
    if (gt) {
      let be = {};
      if (!M) {
        be.navigation = ye;
        let Qe = C(se);
        Qe !== void 0 && (be.actionData = Qe);
      }
      Ke.length > 0 && (be.fetchers = $(Ke)), Be(be, { flushSync: X });
    }
    Ke.forEach((be) => {
      Fn(be.key), be.controller && Z.set(be.key, be.controller);
    });
    let Ui = () => Ke.forEach((be) => Fn(be.key));
    L && L.signal.addEventListener("abort", Ui);
    let { loaderResults: Gs, fetcherResults: Xn } = await de(E, R, Ee, Ke, _);
    if (_.signal.aborted) return { shortCircuited: !0 };
    L && L.signal.removeEventListener("abort", Ui),
      Ke.forEach((be) => Z.delete(be.key));
    let Ln = ra(Gs);
    if (Ln)
      return await U(_, Ln.result, !0, { replace: ee }), { shortCircuited: !0 };
    if (((Ln = ra(Xn)), Ln))
      return (
        V.add(Ln.key),
        await U(_, Ln.result, !0, { replace: ee }),
        { shortCircuited: !0 }
      );
    let { loaderData: zc, errors: Xs } = Mg(E, R, Gs, se, Ke, Xn, pe);
    pe.forEach((be, Qe) => {
      be.subscribe((Bi) => {
        (Bi || be.done) && pe.delete(Qe);
      });
    }),
      f.v7_partialHydration && te && E.errors && (Xs = ze({}, E.errors, Xs));
    let ni = Ll(),
      Il = Ys(I),
      Ml = ni || Il || Ke.length > 0;
    return ze(
      { matches: R, loaderData: zc, errors: Xs },
      Ml ? { fetchers: new Map(E.fetchers) } : {}
    );
  }
  function C(_) {
    if (_ && !Xt(_[1])) return { [_[0]]: _[1].data };
    if (E.actionData)
      return Object.keys(E.actionData).length === 0 ? null : E.actionData;
  }
  function $(_) {
    return (
      _.forEach((P) => {
        let R = E.fetchers.get(P.key),
          M = ao(void 0, R ? R.data : void 0);
        E.fetchers.set(P.key, M);
      }),
      new Map(E.fetchers)
    );
  }
  function O(_, P, R, M) {
    if (r)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback."
      );
    Fn(_);
    let G = (M && M.flushSync) === !0,
      ie = a || o,
      ue = Ff(
        E.location,
        E.matches,
        u,
        f.v7_prependBasename,
        R,
        f.v7_relativeSplatPath,
        P,
        M == null ? void 0 : M.relative
      ),
      ee = oi(ie, ue, u),
      te = Dl(ee, ie, ue);
    if ((te.active && te.matches && (ee = te.matches), !ee)) {
      ht(_, P, Mt(404, { pathname: ue }), { flushSync: G });
      return;
    }
    let {
      path: X,
      submission: se,
      error: ye,
    } = Rg(f.v7_normalizeFormMethod, !0, ue, M);
    if (ye) {
      ht(_, P, ye, { flushSync: G });
      return;
    }
    let xe = bo(ee, X),
      gt = (M && M.preventScrollReset) === !0;
    if (se && Sn(se.formMethod)) {
      Q(_, P, X, xe, ee, te.active, G, gt, se);
      return;
    }
    oe.set(_, { routeId: P, path: X }),
      q(_, P, X, xe, ee, te.active, G, gt, se);
  }
  async function Q(_, P, R, M, G, ie, ue, ee, te) {
    qe(), oe.delete(_);
    function X(tt) {
      if (!tt.route.action && !tt.route.lazy) {
        let Hi = Mt(405, { method: te.formMethod, pathname: R, routeId: P });
        return ht(_, P, Hi, { flushSync: ue }), !0;
      }
      return !1;
    }
    if (!ie && X(M)) return;
    let se = E.fetchers.get(_);
    $e(_, w2(te, se), { flushSync: ue });
    let ye = new AbortController(),
      xe = Wi(e.history, R, ye.signal, te);
    if (ie) {
      let tt = await Al(G, R, xe.signal);
      if (tt.type === "aborted") return;
      if (tt.type === "error") {
        ht(_, P, tt.error, { flushSync: ue });
        return;
      } else if (tt.matches) {
        if (((G = tt.matches), (M = bo(G, R)), X(M))) return;
      } else {
        ht(_, P, Mt(404, { pathname: R }), { flushSync: ue });
        return;
      }
    }
    Z.set(_, ye);
    let gt = T,
      Ee = (await ne("action", E, xe, [M], G, _))[M.route.id];
    if (xe.signal.aborted) {
      Z.get(_) === ye && Z.delete(_);
      return;
    }
    if (f.v7_fetcherPersist && je.has(_)) {
      if (fi(Ee) || Xt(Ee)) {
        $e(_, wr(void 0));
        return;
      }
    } else {
      if (fi(Ee))
        if ((Z.delete(_), I > gt)) {
          $e(_, wr(void 0));
          return;
        } else
          return (
            V.add(_),
            $e(_, ao(te)),
            U(xe, Ee, !1, { fetcherSubmission: te, preventScrollReset: ee })
          );
      if (Xt(Ee)) {
        ht(_, P, Ee.error);
        return;
      }
    }
    if ($r(Ee)) throw Mt(400, { type: "defer-action" });
    let Ke = E.navigation.location || E.location,
      Ui = Wi(e.history, Ke, ye.signal),
      Gs = a || o,
      Xn =
        E.navigation.state !== "idle"
          ? oi(Gs, E.navigation.location, u)
          : E.matches;
    he(Xn, "Didn't find any matches after fetcher action");
    let Ln = ++T;
    W.set(_, Ln);
    let zc = ao(te, Ee.data);
    E.fetchers.set(_, zc);
    let [Xs, ni] = Lg(
      e.history,
      E,
      Xn,
      te,
      Ke,
      !1,
      f.v7_skipActionErrorRevalidation,
      K,
      ae,
      le,
      je,
      oe,
      V,
      Gs,
      u,
      [M.route.id, Ee]
    );
    ni
      .filter((tt) => tt.key !== _)
      .forEach((tt) => {
        let Hi = tt.key,
          hh = E.fetchers.get(Hi),
          _b = ao(void 0, hh ? hh.data : void 0);
        E.fetchers.set(Hi, _b),
          Fn(Hi),
          tt.controller && Z.set(Hi, tt.controller);
      }),
      Be({ fetchers: new Map(E.fetchers) });
    let Il = () => ni.forEach((tt) => Fn(tt.key));
    ye.signal.addEventListener("abort", Il);
    let { loaderResults: Ml, fetcherResults: be } = await de(E, Xn, Xs, ni, Ui);
    if (ye.signal.aborted) return;
    ye.signal.removeEventListener("abort", Il),
      W.delete(_),
      Z.delete(_),
      ni.forEach((tt) => Z.delete(tt.key));
    let Qe = ra(Ml);
    if (Qe) return U(Ui, Qe.result, !1, { preventScrollReset: ee });
    if (((Qe = ra(be)), Qe))
      return V.add(Qe.key), U(Ui, Qe.result, !1, { preventScrollReset: ee });
    let { loaderData: Bi, errors: Zs } = Mg(E, Xn, Ml, void 0, ni, be, pe);
    if (E.fetchers.has(_)) {
      let tt = wr(Ee.data);
      E.fetchers.set(_, tt);
    }
    Ys(Ln),
      E.navigation.state === "loading" && Ln > I
        ? (he(N, "Expected pending action"),
          L && L.abort(),
          pt(E.navigation.location, {
            matches: Xn,
            loaderData: Bi,
            errors: Zs,
            fetchers: new Map(E.fetchers),
          }))
        : (Be({
            errors: Zs,
            loaderData: zg(E.loaderData, Bi, Xn, Zs),
            fetchers: new Map(E.fetchers),
          }),
          (K = !1));
  }
  async function q(_, P, R, M, G, ie, ue, ee, te) {
    let X = E.fetchers.get(_);
    $e(_, ao(te, X ? X.data : void 0), { flushSync: ue });
    let se = new AbortController(),
      ye = Wi(e.history, R, se.signal);
    if (ie) {
      let Ee = await Al(G, R, ye.signal);
      if (Ee.type === "aborted") return;
      if (Ee.type === "error") {
        ht(_, P, Ee.error, { flushSync: ue });
        return;
      } else if (Ee.matches) (G = Ee.matches), (M = bo(G, R));
      else {
        ht(_, P, Mt(404, { pathname: R }), { flushSync: ue });
        return;
      }
    }
    Z.set(_, se);
    let xe = T,
      Re = (await ne("loader", E, ye, [M], G, _))[M.route.id];
    if (
      ($r(Re) && (Re = (await gp(Re, ye.signal, !0)) || Re),
      Z.get(_) === se && Z.delete(_),
      !ye.signal.aborted)
    ) {
      if (je.has(_)) {
        $e(_, wr(void 0));
        return;
      }
      if (fi(Re))
        if (I > xe) {
          $e(_, wr(void 0));
          return;
        } else {
          V.add(_), await U(ye, Re, !1, { preventScrollReset: ee });
          return;
        }
      if (Xt(Re)) {
        ht(_, P, Re.error);
        return;
      }
      he(!$r(Re), "Unhandled fetcher deferred data"), $e(_, wr(Re.data));
    }
  }
  async function U(_, P, R, M) {
    let {
      submission: G,
      fetcherSubmission: ie,
      preventScrollReset: ue,
      replace: ee,
    } = M === void 0 ? {} : M;
    P.response.headers.has("X-Remix-Revalidate") && (K = !0);
    let te = P.response.headers.get("Location");
    he(te, "Expected a Location header on the redirect Response"),
      (te = Ag(te, new URL(_.url), u));
    let X = rl(E.location, te, { _isRedirect: !0 });
    if (n) {
      let Ee = !1;
      if (P.response.headers.has("X-Remix-Reload-Document")) Ee = !0;
      else if (hp.test(te)) {
        const Ke = e.history.createURL(te);
        Ee = Ke.origin !== t.location.origin || Ds(Ke.pathname, u) == null;
      }
      if (Ee) {
        ee ? t.location.replace(te) : t.location.assign(te);
        return;
      }
    }
    L = null;
    let se =
        ee === !0 || P.response.headers.has("X-Remix-Replace")
          ? nt.Replace
          : nt.Push,
      { formMethod: ye, formAction: xe, formEncType: gt } = E.navigation;
    !G && !ie && ye && xe && gt && (G = Vg(E.navigation));
    let Re = G || ie;
    if (e2.has(P.response.status) && Re && Sn(Re.formMethod))
      await yr(se, X, {
        submission: ze({}, Re, { formAction: te }),
        preventScrollReset: ue || k,
        enableViewTransition: R ? F : void 0,
      });
    else {
      let Ee = gd(X, G);
      await yr(se, X, {
        overrideNavigation: Ee,
        fetcherSubmission: ie,
        preventScrollReset: ue || k,
        enableViewTransition: R ? F : void 0,
      });
    }
  }
  async function ne(_, P, R, M, G, ie) {
    let ue,
      ee = {};
    try {
      ue = await a2(c, _, P, R, M, G, ie, s, i);
    } catch (te) {
      return (
        M.forEach((X) => {
          ee[X.route.id] = { type: Pe.error, error: te };
        }),
        ee
      );
    }
    for (let [te, X] of Object.entries(ue))
      if (p2(X)) {
        let se = X.result;
        ee[te] = {
          type: Pe.redirect,
          response: d2(se, R, te, G, u, f.v7_relativeSplatPath),
        };
      } else ee[te] = await c2(X);
    return ee;
  }
  async function de(_, P, R, M, G) {
    let ie = _.matches,
      ue = ne("loader", _, G, R, P, null),
      ee = Promise.all(
        M.map(async (se) => {
          if (se.matches && se.match && se.controller) {
            let xe = (
              await ne(
                "loader",
                _,
                Wi(e.history, se.path, se.controller.signal),
                [se.match],
                se.matches,
                se.key
              )
            )[se.match.route.id];
            return { [se.key]: xe };
          } else
            return Promise.resolve({
              [se.key]: {
                type: Pe.error,
                error: Mt(404, { pathname: se.path }),
              },
            });
        })
      ),
      te = await ue,
      X = (await ee).reduce((se, ye) => Object.assign(se, ye), {});
    return (
      await Promise.all([y2(P, te, G.signal, ie, _.loaderData), v2(P, X, M)]),
      { loaderResults: te, fetcherResults: X }
    );
  }
  function qe() {
    (K = !0),
      ae.push(...Mc()),
      oe.forEach((_, P) => {
        Z.has(P) && le.add(P), Fn(P);
      });
  }
  function $e(_, P, R) {
    R === void 0 && (R = {}),
      E.fetchers.set(_, P),
      Be(
        { fetchers: new Map(E.fetchers) },
        { flushSync: (R && R.flushSync) === !0 }
      );
  }
  function ht(_, P, R, M) {
    M === void 0 && (M = {});
    let G = li(E.matches, P);
    vr(_),
      Be(
        { errors: { [G.route.id]: R }, fetchers: new Map(E.fetchers) },
        { flushSync: (M && M.flushSync) === !0 }
      );
  }
  function Fl(_) {
    return (
      f.v7_fetcherPersist &&
        (ce.set(_, (ce.get(_) || 0) + 1), je.has(_) && je.delete(_)),
      E.fetchers.get(_) || t2
    );
  }
  function vr(_) {
    let P = E.fetchers.get(_);
    Z.has(_) && !(P && P.state === "loading" && W.has(_)) && Fn(_),
      oe.delete(_),
      W.delete(_),
      V.delete(_),
      je.delete(_),
      le.delete(_),
      E.fetchers.delete(_);
  }
  function Ks(_) {
    if (f.v7_fetcherPersist) {
      let P = (ce.get(_) || 0) - 1;
      P <= 0 ? (ce.delete(_), je.add(_)) : ce.set(_, P);
    } else vr(_);
    Be({ fetchers: new Map(E.fetchers) });
  }
  function Fn(_) {
    let P = Z.get(_);
    P && (P.abort(), Z.delete(_));
  }
  function Qs(_) {
    for (let P of _) {
      let R = Fl(P),
        M = wr(R.data);
      E.fetchers.set(P, M);
    }
  }
  function Ll() {
    let _ = [],
      P = !1;
    for (let R of V) {
      let M = E.fetchers.get(R);
      he(M, "Expected fetcher: " + R),
        M.state === "loading" && (V.delete(R), _.push(R), (P = !0));
    }
    return Qs(_), P;
  }
  function Ys(_) {
    let P = [];
    for (let [R, M] of W)
      if (M < _) {
        let G = E.fetchers.get(R);
        he(G, "Expected fetcher: " + R),
          G.state === "loading" && (Fn(R), W.delete(R), P.push(R));
      }
    return Qs(P), P.length > 0;
  }
  function Eb(_, P) {
    let R = E.blockers.get(_) || lo;
    return ve.get(_) !== P && ve.set(_, P), R;
  }
  function dh(_) {
    E.blockers.delete(_), ve.delete(_);
  }
  function Ol(_, P) {
    let R = E.blockers.get(_) || lo;
    he(
      (R.state === "unblocked" && P.state === "blocked") ||
        (R.state === "blocked" && P.state === "blocked") ||
        (R.state === "blocked" && P.state === "proceeding") ||
        (R.state === "blocked" && P.state === "unblocked") ||
        (R.state === "proceeding" && P.state === "unblocked"),
      "Invalid blocker state transition: " + R.state + " -> " + P.state
    );
    let M = new Map(E.blockers);
    M.set(_, P), Be({ blockers: M });
  }
  function fh(_) {
    let { currentLocation: P, nextLocation: R, historyAction: M } = _;
    if (ve.size === 0) return;
    ve.size > 1 && Es(!1, "A router only supports one blocker at a time");
    let G = Array.from(ve.entries()),
      [ie, ue] = G[G.length - 1],
      ee = E.blockers.get(ie);
    if (
      !(ee && ee.state === "proceeding") &&
      ue({ currentLocation: P, nextLocation: R, historyAction: M })
    )
      return ie;
  }
  function Ic(_) {
    let P = Mt(404, { pathname: _ }),
      R = a || o,
      { matches: M, route: G } = Bg(R);
    return Mc(), { notFoundMatches: M, route: G, error: P };
  }
  function Mc(_) {
    let P = [];
    return (
      pe.forEach((R, M) => {
        (!_ || _(M)) && (R.cancel(), P.push(M), pe.delete(M));
      }),
      P
    );
  }
  function Sb(_, P, R) {
    if (((x = _), (j = P), (w = R || null), !y && E.navigation === hd)) {
      y = !0;
      let M = ph(E.location, E.matches);
      M != null && Be({ restoreScrollPosition: M });
    }
    return () => {
      (x = null), (j = null), (w = null);
    };
  }
  function mh(_, P) {
    return (
      (w &&
        w(
          _,
          P.map((M) => RS(M, E.loaderData))
        )) ||
      _.key
    );
  }
  function Nb(_, P) {
    if (x && j) {
      let R = mh(_, P);
      x[R] = j();
    }
  }
  function ph(_, P) {
    if (x) {
      let R = mh(_, P),
        M = x[R];
      if (typeof M == "number") return M;
    }
    return null;
  }
  function Dl(_, P, R) {
    if (d)
      if (_) {
        if (Object.keys(_[0].params).length > 0)
          return { active: !0, matches: ja(P, R, u, !0) };
      } else return { active: !0, matches: ja(P, R, u, !0) || [] };
    return { active: !1, matches: null };
  }
  async function Al(_, P, R) {
    if (!d) return { type: "success", matches: _ };
    let M = _;
    for (;;) {
      let G = a == null,
        ie = a || o,
        ue = s;
      try {
        await d({
          path: P,
          matches: M,
          patch: (X, se) => {
            R.aborted || Dg(X, se, ie, ue, i);
          },
        });
      } catch (X) {
        return { type: "error", error: X, partialMatches: M };
      } finally {
        G && !R.aborted && (o = [...o]);
      }
      if (R.aborted) return { type: "aborted" };
      let ee = oi(ie, P, u);
      if (ee) return { type: "success", matches: ee };
      let te = ja(ie, P, u, !0);
      if (
        !te ||
        (M.length === te.length &&
          M.every((X, se) => X.route.id === te[se].route.id))
      )
        return { type: "success", matches: null };
      M = te;
    }
  }
  function kb(_) {
    (s = {}), (a = iu(_, i, void 0, s));
  }
  function Cb(_, P) {
    let R = a == null;
    Dg(_, P, a || o, s, i), R && ((o = [...o]), Be({}));
  }
  return (
    (S = {
      get basename() {
        return u;
      },
      get future() {
        return f;
      },
      get state() {
        return E;
      },
      get routes() {
        return o;
      },
      get window() {
        return t;
      },
      initialize: bt,
      subscribe: ti,
      enableScrollRestoration: Sb,
      navigate: qs,
      fetch: O,
      revalidate: Rl,
      createHref: (_) => e.history.createHref(_),
      encodeLocation: (_) => e.history.encodeLocation(_),
      getFetcher: Fl,
      deleteFetcher: Ks,
      dispose: ct,
      getBlocker: Eb,
      deleteBlocker: dh,
      patchRoutes: Cb,
      _internalFetchControllers: Z,
      _internalActiveDeferreds: pe,
      _internalSetRoutes: kb,
    }),
    S
  );
}
function i2(e) {
  return (
    e != null &&
    (("formData" in e && e.formData != null) ||
      ("body" in e && e.body !== void 0))
  );
}
function Ff(e, t, n, r, i, s, o, a) {
  let u, c;
  if (o) {
    u = [];
    for (let f of t)
      if ((u.push(f), f.route.id === o)) {
        c = f;
        break;
      }
  } else (u = t), (c = t[t.length - 1]);
  let d = Gu(i || ".", Yu(u, s), Ds(e.pathname, n) || e.pathname, a === "path");
  if (
    (i == null && ((d.search = e.search), (d.hash = e.hash)),
    (i == null || i === "" || i === ".") && c)
  ) {
    let f = yp(d.search);
    if (c.route.index && !f)
      d.search = d.search ? d.search.replace(/^\?/, "?index&") : "?index";
    else if (!c.route.index && f) {
      let p = new URLSearchParams(d.search),
        g = p.getAll("index");
      p.delete("index"),
        g.filter((w) => w).forEach((w) => p.append("index", w));
      let x = p.toString();
      d.search = x ? "?" + x : "";
    }
  }
  return (
    r &&
      n !== "/" &&
      (d.pathname = d.pathname === "/" ? n : sr([n, d.pathname])),
    Pi(d)
  );
}
function Rg(e, t, n, r) {
  if (!r || !i2(r)) return { path: n };
  if (r.formMethod && !g2(r.formMethod))
    return { path: n, error: Mt(405, { method: r.formMethod }) };
  let i = () => ({ path: n, error: Mt(400, { type: "invalid-body" }) }),
    s = r.formMethod || "get",
    o = e ? s.toUpperCase() : s.toLowerCase(),
    a = Ux(n);
  if (r.body !== void 0) {
    if (r.formEncType === "text/plain") {
      if (!Sn(o)) return i();
      let p =
        typeof r.body == "string"
          ? r.body
          : r.body instanceof FormData || r.body instanceof URLSearchParams
          ? Array.from(r.body.entries()).reduce((g, x) => {
              let [w, j] = x;
              return (
                "" +
                g +
                w +
                "=" +
                j +
                `
`
              );
            }, "")
          : String(r.body);
      return {
        path: n,
        submission: {
          formMethod: o,
          formAction: a,
          formEncType: r.formEncType,
          formData: void 0,
          json: void 0,
          text: p,
        },
      };
    } else if (r.formEncType === "application/json") {
      if (!Sn(o)) return i();
      try {
        let p = typeof r.body == "string" ? JSON.parse(r.body) : r.body;
        return {
          path: n,
          submission: {
            formMethod: o,
            formAction: a,
            formEncType: r.formEncType,
            formData: void 0,
            json: p,
            text: void 0,
          },
        };
      } catch {
        return i();
      }
    }
  }
  he(
    typeof FormData == "function",
    "FormData is not available in this environment"
  );
  let u, c;
  if (r.formData) (u = Of(r.formData)), (c = r.formData);
  else if (r.body instanceof FormData) (u = Of(r.body)), (c = r.body);
  else if (r.body instanceof URLSearchParams) (u = r.body), (c = Ig(u));
  else if (r.body == null) (u = new URLSearchParams()), (c = new FormData());
  else
    try {
      (u = new URLSearchParams(r.body)), (c = Ig(u));
    } catch {
      return i();
    }
  let d = {
    formMethod: o,
    formAction: a,
    formEncType: (r && r.formEncType) || "application/x-www-form-urlencoded",
    formData: c,
    json: void 0,
    text: void 0,
  };
  if (Sn(d.formMethod)) return { path: n, submission: d };
  let f = Xr(n);
  return (
    t && f.search && yp(f.search) && u.append("index", ""),
    (f.search = "?" + u),
    { path: Pi(f), submission: d }
  );
}
function Fg(e, t, n) {
  n === void 0 && (n = !1);
  let r = e.findIndex((i) => i.route.id === t);
  return r >= 0 ? e.slice(0, n ? r + 1 : r) : e;
}
function Lg(e, t, n, r, i, s, o, a, u, c, d, f, p, g, x, w) {
  let j = w ? (Xt(w[1]) ? w[1].error : w[1].data) : void 0,
    y = e.createURL(t.location),
    h = e.createURL(i),
    v = n;
  s && t.errors
    ? (v = Fg(n, Object.keys(t.errors)[0], !0))
    : w && Xt(w[1]) && (v = Fg(n, w[0]));
  let b = w ? w[1].statusCode : void 0,
    S = o && b && b >= 400,
    E = v.filter((k, L) => {
      let { route: F } = k;
      if (F.lazy) return !0;
      if (F.loader == null) return !1;
      if (s) return Lf(F, t.loaderData, t.errors);
      if (s2(t.loaderData, t.matches[L], k) || u.some((H) => H === k.route.id))
        return !0;
      let z = t.matches[L],
        A = k;
      return Og(
        k,
        ze(
          {
            currentUrl: y,
            currentParams: z.params,
            nextUrl: h,
            nextParams: A.params,
          },
          r,
          {
            actionResult: j,
            actionStatus: b,
            defaultShouldRevalidate: S
              ? !1
              : a ||
                y.pathname + y.search === h.pathname + h.search ||
                y.search !== h.search ||
                Mx(z, A),
          }
        )
      );
    }),
    N = [];
  return (
    f.forEach((k, L) => {
      if (s || !n.some((K) => K.route.id === k.routeId) || d.has(L)) return;
      let F = oi(g, k.path, x);
      if (!F) {
        N.push({
          key: L,
          routeId: k.routeId,
          path: k.path,
          matches: null,
          match: null,
          controller: null,
        });
        return;
      }
      let z = t.fetchers.get(L),
        A = bo(F, k.path),
        H = !1;
      p.has(L)
        ? (H = !1)
        : c.has(L)
        ? (c.delete(L), (H = !0))
        : z && z.state !== "idle" && z.data === void 0
        ? (H = a)
        : (H = Og(
            A,
            ze(
              {
                currentUrl: y,
                currentParams: t.matches[t.matches.length - 1].params,
                nextUrl: h,
                nextParams: n[n.length - 1].params,
              },
              r,
              {
                actionResult: j,
                actionStatus: b,
                defaultShouldRevalidate: S ? !1 : a,
              }
            )
          )),
        H &&
          N.push({
            key: L,
            routeId: k.routeId,
            path: k.path,
            matches: F,
            match: A,
            controller: new AbortController(),
          });
    }),
    [E, N]
  );
}
function Lf(e, t, n) {
  if (e.lazy) return !0;
  if (!e.loader) return !1;
  let r = t != null && t[e.id] !== void 0,
    i = n != null && n[e.id] !== void 0;
  return !r && i
    ? !1
    : typeof e.loader == "function" && e.loader.hydrate === !0
    ? !0
    : !r && !i;
}
function s2(e, t, n) {
  let r = !t || n.route.id !== t.route.id,
    i = e[n.route.id] === void 0;
  return r || i;
}
function Mx(e, t) {
  let n = e.route.path;
  return (
    e.pathname !== t.pathname ||
    (n != null && n.endsWith("*") && e.params["*"] !== t.params["*"])
  );
}
function Og(e, t) {
  if (e.route.shouldRevalidate) {
    let n = e.route.shouldRevalidate(t);
    if (typeof n == "boolean") return n;
  }
  return t.defaultShouldRevalidate;
}
function Dg(e, t, n, r, i) {
  var s;
  let o;
  if (e) {
    let c = r[e];
    he(c, "No route found to patch children into: routeId = " + e),
      c.children || (c.children = []),
      (o = c.children);
  } else o = n;
  let a = t.filter((c) => !o.some((d) => zx(c, d))),
    u = iu(
      a,
      i,
      [e || "_", "patch", String(((s = o) == null ? void 0 : s.length) || "0")],
      r
    );
  o.push(...u);
}
function zx(e, t) {
  return "id" in e && "id" in t && e.id === t.id
    ? !0
    : e.index === t.index &&
      e.path === t.path &&
      e.caseSensitive === t.caseSensitive
    ? (!e.children || e.children.length === 0) &&
      (!t.children || t.children.length === 0)
      ? !0
      : e.children.every((n, r) => {
          var i;
          return (i = t.children) == null ? void 0 : i.some((s) => zx(n, s));
        })
    : !1;
}
async function o2(e, t, n) {
  if (!e.lazy) return;
  let r = await e.lazy();
  if (!e.lazy) return;
  let i = n[e.id];
  he(i, "No route found in manifest");
  let s = {};
  for (let o in r) {
    let u = i[o] !== void 0 && o !== "hasErrorBoundary";
    Es(
      !u,
      'Route "' +
        i.id +
        '" has a static property "' +
        o +
        '" defined but its lazy function is also returning a value for this property. ' +
        ('The lazy route property "' + o + '" will be ignored.')
    ),
      !u && !TS.has(o) && (s[o] = r[o]);
  }
  Object.assign(i, s), Object.assign(i, ze({}, t(i), { lazy: void 0 }));
}
async function l2(e) {
  let { matches: t } = e,
    n = t.filter((i) => i.shouldLoad);
  return (await Promise.all(n.map((i) => i.resolve()))).reduce(
    (i, s, o) => Object.assign(i, { [n[o].route.id]: s }),
    {}
  );
}
async function a2(e, t, n, r, i, s, o, a, u, c) {
  let d = s.map((g) => (g.route.lazy ? o2(g.route, u, a) : void 0)),
    f = s.map((g, x) => {
      let w = d[x],
        j = i.some((h) => h.route.id === g.route.id);
      return ze({}, g, {
        shouldLoad: j,
        resolve: async (h) => (
          h &&
            r.method === "GET" &&
            (g.route.lazy || g.route.loader) &&
            (j = !0),
          j
            ? u2(t, r, g, w, h, c)
            : Promise.resolve({ type: Pe.data, result: void 0 })
        ),
      });
    }),
    p = await e({
      matches: f,
      request: r,
      params: s[0].params,
      fetcherKey: o,
      context: c,
    });
  try {
    await Promise.all(d);
  } catch {}
  return p;
}
async function u2(e, t, n, r, i, s) {
  let o,
    a,
    u = (c) => {
      let d,
        f = new Promise((x, w) => (d = w));
      (a = () => d()), t.signal.addEventListener("abort", a);
      let p = (x) =>
          typeof c != "function"
            ? Promise.reject(
                new Error(
                  "You cannot call the handler for a route which defines a boolean " +
                    ('"' + e + '" [routeId: ' + n.route.id + "]")
                )
              )
            : c(
                { request: t, params: n.params, context: s },
                ...(x !== void 0 ? [x] : [])
              ),
        g = (async () => {
          try {
            return { type: "data", result: await (i ? i((w) => p(w)) : p()) };
          } catch (x) {
            return { type: "error", result: x };
          }
        })();
      return Promise.race([g, f]);
    };
  try {
    let c = n.route[e];
    if (r)
      if (c) {
        let d,
          [f] = await Promise.all([
            u(c).catch((p) => {
              d = p;
            }),
            r,
          ]);
        if (d !== void 0) throw d;
        o = f;
      } else if ((await r, (c = n.route[e]), c)) o = await u(c);
      else if (e === "action") {
        let d = new URL(t.url),
          f = d.pathname + d.search;
        throw Mt(405, { method: t.method, pathname: f, routeId: n.route.id });
      } else return { type: Pe.data, result: void 0 };
    else if (c) o = await u(c);
    else {
      let d = new URL(t.url),
        f = d.pathname + d.search;
      throw Mt(404, { pathname: f });
    }
    he(
      o.result !== void 0,
      "You defined " +
        (e === "action" ? "an action" : "a loader") +
        " for route " +
        ('"' +
          n.route.id +
          "\" but didn't return anything from your `" +
          e +
          "` ") +
        "function. Please return a value or `null`."
    );
  } catch (c) {
    return { type: Pe.error, result: c };
  } finally {
    a && t.signal.removeEventListener("abort", a);
  }
  return o;
}
async function c2(e) {
  let { result: t, type: n } = e;
  if (Bx(t)) {
    let c;
    try {
      let d = t.headers.get("Content-Type");
      d && /\bapplication\/json\b/.test(d)
        ? t.body == null
          ? (c = null)
          : (c = await t.json())
        : (c = await t.text());
    } catch (d) {
      return { type: Pe.error, error: d };
    }
    return n === Pe.error
      ? {
          type: Pe.error,
          error: new su(t.status, t.statusText, c),
          statusCode: t.status,
          headers: t.headers,
        }
      : { type: Pe.data, data: c, statusCode: t.status, headers: t.headers };
  }
  if (n === Pe.error) {
    if (Hg(t)) {
      var r;
      if (t.data instanceof Error) {
        var i;
        return {
          type: Pe.error,
          error: t.data,
          statusCode: (i = t.init) == null ? void 0 : i.status,
        };
      }
      t = new su(
        ((r = t.init) == null ? void 0 : r.status) || 500,
        void 0,
        t.data
      );
    }
    return { type: Pe.error, error: t, statusCode: Xu(t) ? t.status : void 0 };
  }
  if (h2(t)) {
    var s, o;
    return {
      type: Pe.deferred,
      deferredData: t,
      statusCode: (s = t.init) == null ? void 0 : s.status,
      headers:
        ((o = t.init) == null ? void 0 : o.headers) &&
        new Headers(t.init.headers),
    };
  }
  if (Hg(t)) {
    var a, u;
    return {
      type: Pe.data,
      data: t.data,
      statusCode: (a = t.init) == null ? void 0 : a.status,
      headers:
        (u = t.init) != null && u.headers
          ? new Headers(t.init.headers)
          : void 0,
    };
  }
  return { type: Pe.data, data: t };
}
function d2(e, t, n, r, i, s) {
  let o = e.headers.get("Location");
  if (
    (he(
      o,
      "Redirects returned/thrown from loaders/actions must have a Location header"
    ),
    !hp.test(o))
  ) {
    let a = r.slice(0, r.findIndex((u) => u.route.id === n) + 1);
    (o = Ff(new URL(t.url), a, i, !0, o, s)), e.headers.set("Location", o);
  }
  return e;
}
function Ag(e, t, n) {
  if (hp.test(e)) {
    let r = e,
      i = r.startsWith("//") ? new URL(t.protocol + r) : new URL(r),
      s = Ds(i.pathname, n) != null;
    if (i.origin === t.origin && s) return i.pathname + i.search + i.hash;
  }
  return e;
}
function Wi(e, t, n, r) {
  let i = e.createURL(Ux(t)).toString(),
    s = { signal: n };
  if (r && Sn(r.formMethod)) {
    let { formMethod: o, formEncType: a } = r;
    (s.method = o.toUpperCase()),
      a === "application/json"
        ? ((s.headers = new Headers({ "Content-Type": a })),
          (s.body = JSON.stringify(r.json)))
        : a === "text/plain"
        ? (s.body = r.text)
        : a === "application/x-www-form-urlencoded" && r.formData
        ? (s.body = Of(r.formData))
        : (s.body = r.formData);
  }
  return new Request(i, s);
}
function Of(e) {
  let t = new URLSearchParams();
  for (let [n, r] of e.entries())
    t.append(n, typeof r == "string" ? r : r.name);
  return t;
}
function Ig(e) {
  let t = new FormData();
  for (let [n, r] of e.entries()) t.append(n, r);
  return t;
}
function f2(e, t, n, r, i) {
  let s = {},
    o = null,
    a,
    u = !1,
    c = {},
    d = n && Xt(n[1]) ? n[1].error : void 0;
  return (
    e.forEach((f) => {
      if (!(f.route.id in t)) return;
      let p = f.route.id,
        g = t[p];
      if (
        (he(!fi(g), "Cannot handle redirect results in processLoaderData"),
        Xt(g))
      ) {
        let x = g.error;
        d !== void 0 && ((x = d), (d = void 0)), (o = o || {});
        {
          let w = li(e, p);
          o[w.route.id] == null && (o[w.route.id] = x);
        }
        (s[p] = void 0),
          u || ((u = !0), (a = Xu(g.error) ? g.error.status : 500)),
          g.headers && (c[p] = g.headers);
      } else
        $r(g)
          ? (r.set(p, g.deferredData),
            (s[p] = g.deferredData.data),
            g.statusCode != null &&
              g.statusCode !== 200 &&
              !u &&
              (a = g.statusCode),
            g.headers && (c[p] = g.headers))
          : ((s[p] = g.data),
            g.statusCode && g.statusCode !== 200 && !u && (a = g.statusCode),
            g.headers && (c[p] = g.headers));
    }),
    d !== void 0 && n && ((o = { [n[0]]: d }), (s[n[0]] = void 0)),
    { loaderData: s, errors: o, statusCode: a || 200, loaderHeaders: c }
  );
}
function Mg(e, t, n, r, i, s, o) {
  let { loaderData: a, errors: u } = f2(t, n, r, o);
  return (
    i.forEach((c) => {
      let { key: d, match: f, controller: p } = c,
        g = s[d];
      if (
        (he(g, "Did not find corresponding fetcher result"),
        !(p && p.signal.aborted))
      )
        if (Xt(g)) {
          let x = li(e.matches, f == null ? void 0 : f.route.id);
          (u && u[x.route.id]) || (u = ze({}, u, { [x.route.id]: g.error })),
            e.fetchers.delete(d);
        } else if (fi(g)) he(!1, "Unhandled fetcher revalidation redirect");
        else if ($r(g)) he(!1, "Unhandled fetcher deferred data");
        else {
          let x = wr(g.data);
          e.fetchers.set(d, x);
        }
    }),
    { loaderData: a, errors: u }
  );
}
function zg(e, t, n, r) {
  let i = ze({}, t);
  for (let s of n) {
    let o = s.route.id;
    if (
      (t.hasOwnProperty(o)
        ? t[o] !== void 0 && (i[o] = t[o])
        : e[o] !== void 0 && s.route.loader && (i[o] = e[o]),
      r && r.hasOwnProperty(o))
    )
      break;
  }
  return i;
}
function Ug(e) {
  return e
    ? Xt(e[1])
      ? { actionData: {} }
      : { actionData: { [e[0]]: e[1].data } }
    : {};
}
function li(e, t) {
  return (
    (t ? e.slice(0, e.findIndex((r) => r.route.id === t) + 1) : [...e])
      .reverse()
      .find((r) => r.route.hasErrorBoundary === !0) || e[0]
  );
}
function Bg(e) {
  let t =
    e.length === 1
      ? e[0]
      : e.find((n) => n.index || !n.path || n.path === "/") || {
          id: "__shim-error-route__",
        };
  return {
    matches: [{ params: {}, pathname: "", pathnameBase: "", route: t }],
    route: t,
  };
}
function Mt(e, t) {
  let {
      pathname: n,
      routeId: r,
      method: i,
      type: s,
      message: o,
    } = t === void 0 ? {} : t,
    a = "Unknown Server Error",
    u = "Unknown @remix-run/router error";
  return (
    e === 400
      ? ((a = "Bad Request"),
        i && n && r
          ? (u =
              "You made a " +
              i +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide a `loader` for route "' + r + '", ') +
              "so there is no way to handle the request.")
          : s === "defer-action"
          ? (u = "defer() is not supported in actions")
          : s === "invalid-body" && (u = "Unable to encode submission body"))
      : e === 403
      ? ((a = "Forbidden"),
        (u = 'Route "' + r + '" does not match URL "' + n + '"'))
      : e === 404
      ? ((a = "Not Found"), (u = 'No route matches URL "' + n + '"'))
      : e === 405 &&
        ((a = "Method Not Allowed"),
        i && n && r
          ? (u =
              "You made a " +
              i.toUpperCase() +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide an `action` for route "' + r + '", ') +
              "so there is no way to handle the request.")
          : i && (u = 'Invalid request method "' + i.toUpperCase() + '"')),
    new su(e || 500, a, new Error(u), !0)
  );
}
function ra(e) {
  let t = Object.entries(e);
  for (let n = t.length - 1; n >= 0; n--) {
    let [r, i] = t[n];
    if (fi(i)) return { key: r, result: i };
  }
}
function Ux(e) {
  let t = typeof e == "string" ? Xr(e) : e;
  return Pi(ze({}, t, { hash: "" }));
}
function m2(e, t) {
  return e.pathname !== t.pathname || e.search !== t.search
    ? !1
    : e.hash === ""
    ? t.hash !== ""
    : e.hash === t.hash
    ? !0
    : t.hash !== "";
}
function p2(e) {
  return Bx(e.result) && JS.has(e.result.status);
}
function $r(e) {
  return e.type === Pe.deferred;
}
function Xt(e) {
  return e.type === Pe.error;
}
function fi(e) {
  return (e && e.type) === Pe.redirect;
}
function Hg(e) {
  return (
    typeof e == "object" &&
    e != null &&
    "type" in e &&
    "data" in e &&
    "init" in e &&
    e.type === "DataWithResponseInit"
  );
}
function h2(e) {
  let t = e;
  return (
    t &&
    typeof t == "object" &&
    typeof t.data == "object" &&
    typeof t.subscribe == "function" &&
    typeof t.cancel == "function" &&
    typeof t.resolveData == "function"
  );
}
function Bx(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.headers == "object" &&
    typeof e.body < "u"
  );
}
function g2(e) {
  return ZS.has(e.toLowerCase());
}
function Sn(e) {
  return GS.has(e.toLowerCase());
}
async function y2(e, t, n, r, i) {
  let s = Object.entries(t);
  for (let o = 0; o < s.length; o++) {
    let [a, u] = s[o],
      c = e.find((p) => (p == null ? void 0 : p.route.id) === a);
    if (!c) continue;
    let d = r.find((p) => p.route.id === c.route.id),
      f = d != null && !Mx(d, c) && (i && i[c.route.id]) !== void 0;
    $r(u) &&
      f &&
      (await gp(u, n, !1).then((p) => {
        p && (t[a] = p);
      }));
  }
}
async function v2(e, t, n) {
  for (let r = 0; r < n.length; r++) {
    let { key: i, routeId: s, controller: o } = n[r],
      a = t[i];
    e.find((c) => (c == null ? void 0 : c.route.id) === s) &&
      $r(a) &&
      (he(
        o,
        "Expected an AbortController for revalidating fetcher deferred result"
      ),
      await gp(a, o.signal, !0).then((c) => {
        c && (t[i] = c);
      }));
  }
}
async function gp(e, t, n) {
  if ((n === void 0 && (n = !1), !(await e.deferredData.resolveData(t)))) {
    if (n)
      try {
        return { type: Pe.data, data: e.deferredData.unwrappedData };
      } catch (i) {
        return { type: Pe.error, error: i };
      }
    return { type: Pe.data, data: e.deferredData.data };
  }
}
function yp(e) {
  return new URLSearchParams(e).getAll("index").some((t) => t === "");
}
function bo(e, t) {
  let n = typeof t == "string" ? Xr(t).search : t.search;
  if (e[e.length - 1].route.index && yp(n || "")) return e[e.length - 1];
  let r = Dx(e);
  return r[r.length - 1];
}
function Vg(e) {
  let {
    formMethod: t,
    formAction: n,
    formEncType: r,
    text: i,
    formData: s,
    json: o,
  } = e;
  if (!(!t || !n || !r)) {
    if (i != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: void 0,
        text: i,
      };
    if (s != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: s,
        json: void 0,
        text: void 0,
      };
    if (o !== void 0)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: o,
        text: void 0,
      };
  }
}
function gd(e, t) {
  return t
    ? {
        state: "loading",
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text,
      }
    : {
        state: "loading",
        location: e,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
      };
}
function x2(e, t) {
  return {
    state: "submitting",
    location: e,
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text,
  };
}
function ao(e, t) {
  return e
    ? {
        state: "loading",
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t,
      }
    : {
        state: "loading",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: t,
      };
}
function w2(e, t) {
  return {
    state: "submitting",
    formMethod: e.formMethod,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formData: e.formData,
    json: e.json,
    text: e.text,
    data: t ? t.data : void 0,
  };
}
function wr(e) {
  return {
    state: "idle",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: e,
  };
}
function b2(e, t) {
  try {
    let n = e.sessionStorage.getItem(Ix);
    if (n) {
      let r = JSON.parse(n);
      for (let [i, s] of Object.entries(r || {}))
        s && Array.isArray(s) && t.set(i, new Set(s || []));
    }
  } catch {}
}
function j2(e, t) {
  if (t.size > 0) {
    let n = {};
    for (let [r, i] of t) n[r] = [...i];
    try {
      e.sessionStorage.setItem(Ix, JSON.stringify(n));
    } catch (r) {
      Es(
        !1,
        "Failed to save applied view transitions in sessionStorage (" + r + ")."
      );
    }
  }
}
/**
 * React Router v6.28.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ou() {
  return (
    (ou = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ou.apply(this, arguments)
  );
}
const Zu = m.createContext(null),
  Hx = m.createContext(null),
  Zr = m.createContext(null),
  vp = m.createContext(null),
  pr = m.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Vx = m.createContext(null);
function E2(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  As() || he(!1);
  let { basename: r, navigator: i } = m.useContext(Zr),
    { hash: s, pathname: o, search: a } = qx(e, { relative: n }),
    u = o;
  return (
    r !== "/" && (u = o === "/" ? r : sr([r, o])),
    i.createHref({ pathname: u, search: a, hash: s })
  );
}
function As() {
  return m.useContext(vp) != null;
}
function bl() {
  return As() || he(!1), m.useContext(vp).location;
}
function Wx(e) {
  m.useContext(Zr).static || m.useLayoutEffect(e);
}
function Ju() {
  let { isDataRoute: e } = m.useContext(pr);
  return e ? O2() : S2();
}
function S2() {
  As() || he(!1);
  let e = m.useContext(Zu),
    { basename: t, future: n, navigator: r } = m.useContext(Zr),
    { matches: i } = m.useContext(pr),
    { pathname: s } = bl(),
    o = JSON.stringify(Yu(i, n.v7_relativeSplatPath)),
    a = m.useRef(!1);
  return (
    Wx(() => {
      a.current = !0;
    }),
    m.useCallback(
      function (c, d) {
        if ((d === void 0 && (d = {}), !a.current)) return;
        if (typeof c == "number") {
          r.go(c);
          return;
        }
        let f = Gu(c, JSON.parse(o), s, d.relative === "path");
        e == null &&
          t !== "/" &&
          (f.pathname = f.pathname === "/" ? t : sr([t, f.pathname])),
          (d.replace ? r.replace : r.push)(f, d.state, d);
      },
      [t, r, o, s, e]
    )
  );
}
function ec() {
  let { matches: e } = m.useContext(pr),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function qx(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = m.useContext(Zr),
    { matches: i } = m.useContext(pr),
    { pathname: s } = bl(),
    o = JSON.stringify(Yu(i, r.v7_relativeSplatPath));
  return m.useMemo(() => Gu(e, JSON.parse(o), s, n === "path"), [e, o, s, n]);
}
function N2(e, t, n, r) {
  As() || he(!1);
  let { navigator: i } = m.useContext(Zr),
    { matches: s } = m.useContext(pr),
    o = s[s.length - 1],
    a = o ? o.params : {};
  o && o.pathname;
  let u = o ? o.pathnameBase : "/";
  o && o.route;
  let c = bl(),
    d;
  d = c;
  let f = d.pathname || "/",
    p = f;
  if (u !== "/") {
    let w = u.replace(/^\//, "").split("/");
    p = "/" + f.replace(/^\//, "").split("/").slice(w.length).join("/");
  }
  let g = oi(e, { pathname: p });
  return T2(
    g &&
      g.map((w) =>
        Object.assign({}, w, {
          params: Object.assign({}, a, w.params),
          pathname: sr([
            u,
            i.encodeLocation
              ? i.encodeLocation(w.pathname).pathname
              : w.pathname,
          ]),
          pathnameBase:
            w.pathnameBase === "/"
              ? u
              : sr([
                  u,
                  i.encodeLocation
                    ? i.encodeLocation(w.pathnameBase).pathname
                    : w.pathnameBase,
                ]),
        })
      ),
    s,
    n,
    r
  );
}
function k2() {
  let e = L2(),
    t = Xu(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    i = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return m.createElement(
    m.Fragment,
    null,
    m.createElement("h2", null, "Unexpected Application Error!"),
    m.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? m.createElement("pre", { style: i }, n) : null,
    null
  );
}
const C2 = m.createElement(k2, null);
class _2 extends m.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error !== void 0
      ? m.createElement(
          pr.Provider,
          { value: this.props.routeContext },
          m.createElement(Vx.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function P2(e) {
  let { routeContext: t, match: n, children: r } = e,
    i = m.useContext(Zu);
  return (
    i &&
      i.static &&
      i.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    m.createElement(pr.Provider, { value: t }, r)
  );
}
function T2(e, t, n, r) {
  var i;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var s;
    if (!n) return null;
    if (n.errors) e = n.matches;
    else if (
      (s = r) != null &&
      s.v7_partialHydration &&
      t.length === 0 &&
      !n.initialized &&
      n.matches.length > 0
    )
      e = n.matches;
    else return null;
  }
  let o = e,
    a = (i = n) == null ? void 0 : i.errors;
  if (a != null) {
    let d = o.findIndex(
      (f) => f.route.id && (a == null ? void 0 : a[f.route.id]) !== void 0
    );
    d >= 0 || he(!1), (o = o.slice(0, Math.min(o.length, d + 1)));
  }
  let u = !1,
    c = -1;
  if (n && r && r.v7_partialHydration)
    for (let d = 0; d < o.length; d++) {
      let f = o[d];
      if (
        ((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (c = d),
        f.route.id)
      ) {
        let { loaderData: p, errors: g } = n,
          x =
            f.route.loader &&
            p[f.route.id] === void 0 &&
            (!g || g[f.route.id] === void 0);
        if (f.route.lazy || x) {
          (u = !0), c >= 0 ? (o = o.slice(0, c + 1)) : (o = [o[0]]);
          break;
        }
      }
    }
  return o.reduceRight((d, f, p) => {
    let g,
      x = !1,
      w = null,
      j = null;
    n &&
      ((g = a && f.route.id ? a[f.route.id] : void 0),
      (w = f.route.errorElement || C2),
      u &&
        (c < 0 && p === 0
          ? ((x = !0), (j = null))
          : c === p &&
            ((x = !0), (j = f.route.hydrateFallbackElement || null))));
    let y = t.concat(o.slice(0, p + 1)),
      h = () => {
        let v;
        return (
          g
            ? (v = w)
            : x
            ? (v = j)
            : f.route.Component
            ? (v = m.createElement(f.route.Component, null))
            : f.route.element
            ? (v = f.route.element)
            : (v = d),
          m.createElement(P2, {
            match: f,
            routeContext: { outlet: d, matches: y, isDataRoute: n != null },
            children: v,
          })
        );
      };
    return n && (f.route.ErrorBoundary || f.route.errorElement || p === 0)
      ? m.createElement(_2, {
          location: n.location,
          revalidation: n.revalidation,
          component: w,
          error: g,
          children: h(),
          routeContext: { outlet: null, matches: y, isDataRoute: !0 },
        })
      : h();
  }, null);
}
var Kx = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(Kx || {}),
  lu = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(lu || {});
function $2(e) {
  let t = m.useContext(Zu);
  return t || he(!1), t;
}
function R2(e) {
  let t = m.useContext(Hx);
  return t || he(!1), t;
}
function F2(e) {
  let t = m.useContext(pr);
  return t || he(!1), t;
}
function Qx(e) {
  let t = F2(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || he(!1), n.route.id;
}
function L2() {
  var e;
  let t = m.useContext(Vx),
    n = R2(lu.UseRouteError),
    r = Qx(lu.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function O2() {
  let { router: e } = $2(Kx.UseNavigateStable),
    t = Qx(lu.UseNavigateStable),
    n = m.useRef(!1);
  return (
    Wx(() => {
      n.current = !0;
    }),
    m.useCallback(
      function (i, s) {
        s === void 0 && (s = {}),
          n.current &&
            (typeof i == "number"
              ? e.navigate(i)
              : e.navigate(i, ou({ fromRouteId: t }, s)));
      },
      [e, t]
    )
  );
}
const Wg = {};
function D2(e, t) {
  Wg[t] || ((Wg[t] = !0), console.warn(t));
}
const qi = (e, t, n) =>
  D2(
    e,
    "⚠️ React Router Future Flag Warning: " +
      t +
      ". " +
      ("You can use the `" + e + "` future flag to opt-in early. ") +
      ("For more information, see " + n + ".")
  );
function A2(e, t) {
  (e != null && e.v7_startTransition) ||
    qi(
      "v7_startTransition",
      "React Router will begin wrapping state updates in `React.startTransition` in v7",
      "https://reactrouter.com/v6/upgrading/future#v7_starttransition"
    ),
    !(e != null && e.v7_relativeSplatPath) &&
      (!t || !t.v7_relativeSplatPath) &&
      qi(
        "v7_relativeSplatPath",
        "Relative route resolution within Splat routes is changing in v7",
        "https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath"
      ),
    t &&
      (t.v7_fetcherPersist ||
        qi(
          "v7_fetcherPersist",
          "The persistence behavior of fetchers is changing in v7",
          "https://reactrouter.com/v6/upgrading/future#v7_fetcherpersist"
        ),
      t.v7_normalizeFormMethod ||
        qi(
          "v7_normalizeFormMethod",
          "Casing of `formMethod` fields is being normalized to uppercase in v7",
          "https://reactrouter.com/v6/upgrading/future#v7_normalizeformmethod"
        ),
      t.v7_partialHydration ||
        qi(
          "v7_partialHydration",
          "`RouterProvider` hydration behavior is changing in v7",
          "https://reactrouter.com/v6/upgrading/future#v7_partialhydration"
        ),
      t.v7_skipActionErrorRevalidation ||
        qi(
          "v7_skipActionErrorRevalidation",
          "The revalidation behavior after 4xx/5xx `action` responses is changing in v7",
          "https://reactrouter.com/v6/upgrading/future#v7_skipactionerrorrevalidation"
        ));
}
function Kn(e) {
  let { to: t, replace: n, state: r, relative: i } = e;
  As() || he(!1);
  let { future: s, static: o } = m.useContext(Zr),
    { matches: a } = m.useContext(pr),
    { pathname: u } = bl(),
    c = Ju(),
    d = Gu(t, Yu(a, s.v7_relativeSplatPath), u, i === "path"),
    f = JSON.stringify(d);
  return (
    m.useEffect(
      () => c(JSON.parse(f), { replace: n, state: r, relative: i }),
      [c, f, i, n, r]
    ),
    null
  );
}
function I2(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: i = nt.Pop,
    navigator: s,
    static: o = !1,
    future: a,
  } = e;
  As() && he(!1);
  let u = t.replace(/^\/*/, "/"),
    c = m.useMemo(
      () => ({
        basename: u,
        navigator: s,
        static: o,
        future: ou({ v7_relativeSplatPath: !1 }, a),
      }),
      [u, a, s, o]
    );
  typeof r == "string" && (r = Xr(r));
  let {
      pathname: d = "/",
      search: f = "",
      hash: p = "",
      state: g = null,
      key: x = "default",
    } = r,
    w = m.useMemo(() => {
      let j = Ds(d, u);
      return j == null
        ? null
        : {
            location: { pathname: j, search: f, hash: p, state: g, key: x },
            navigationType: i,
          };
    }, [u, d, f, p, g, x, i]);
  return w == null
    ? null
    : m.createElement(
        Zr.Provider,
        { value: c },
        m.createElement(vp.Provider, { children: n, value: w })
      );
}
new Promise(() => {});
function M2(e) {
  let t = {
    hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null,
  };
  return (
    e.Component &&
      Object.assign(t, {
        element: m.createElement(e.Component),
        Component: void 0,
      }),
    e.HydrateFallback &&
      Object.assign(t, {
        hydrateFallbackElement: m.createElement(e.HydrateFallback),
        HydrateFallback: void 0,
      }),
    e.ErrorBoundary &&
      Object.assign(t, {
        errorElement: m.createElement(e.ErrorBoundary),
        ErrorBoundary: void 0,
      }),
    t
  );
}
/**
 * React Router DOM v6.28.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function il() {
  return (
    (il = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    il.apply(this, arguments)
  );
}
function z2(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    s;
  for (s = 0; s < r.length; s++)
    (i = r[s]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function U2(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function B2(e, t) {
  return e.button === 0 && (!t || t === "_self") && !U2(e);
}
const H2 = [
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
  V2 = "6";
try {
  window.__reactRouterVersion = V2;
} catch {}
function W2(e, t) {
  return r2({
    basename: void 0,
    future: il({}, void 0, { v7_prependBasename: !0 }),
    history: CS({ window: void 0 }),
    hydrationData: q2(),
    routes: e,
    mapRouteProperties: M2,
    dataStrategy: void 0,
    patchRoutesOnNavigation: void 0,
    window: void 0,
  }).initialize();
}
function q2() {
  var e;
  let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
  return t && t.errors && (t = il({}, t, { errors: K2(t.errors) })), t;
}
function K2(e) {
  if (!e) return null;
  let t = Object.entries(e),
    n = {};
  for (let [r, i] of t)
    if (i && i.__type === "RouteErrorResponse")
      n[r] = new su(i.status, i.statusText, i.data, i.internal === !0);
    else if (i && i.__type === "Error") {
      if (i.__subType) {
        let s = window[i.__subType];
        if (typeof s == "function")
          try {
            let o = new s(i.message);
            (o.stack = ""), (n[r] = o);
          } catch {}
      }
      if (n[r] == null) {
        let s = new Error(i.message);
        (s.stack = ""), (n[r] = s);
      }
    } else n[r] = i;
  return n;
}
const Q2 = m.createContext({ isTransitioning: !1 }),
  Y2 = m.createContext(new Map()),
  G2 = "startTransition",
  qg = hs[G2],
  X2 = "flushSync",
  Kg = rS[X2];
function Z2(e) {
  qg ? qg(e) : e();
}
function uo(e) {
  Kg ? Kg(e) : e();
}
class J2 {
  constructor() {
    (this.status = "pending"),
      (this.promise = new Promise((t, n) => {
        (this.resolve = (r) => {
          this.status === "pending" && ((this.status = "resolved"), t(r));
        }),
          (this.reject = (r) => {
            this.status === "pending" && ((this.status = "rejected"), n(r));
          });
      }));
  }
}
function eN(e) {
  let { fallbackElement: t, router: n, future: r } = e,
    [i, s] = m.useState(n.state),
    [o, a] = m.useState(),
    [u, c] = m.useState({ isTransitioning: !1 }),
    [d, f] = m.useState(),
    [p, g] = m.useState(),
    [x, w] = m.useState(),
    j = m.useRef(new Map()),
    { v7_startTransition: y } = r || {},
    h = m.useCallback(
      (k) => {
        y ? Z2(k) : k();
      },
      [y]
    ),
    v = m.useCallback(
      (k, L) => {
        let { deletedFetchers: F, flushSync: z, viewTransitionOpts: A } = L;
        F.forEach((K) => j.current.delete(K)),
          k.fetchers.forEach((K, ae) => {
            K.data !== void 0 && j.current.set(ae, K.data);
          });
        let H =
          n.window == null ||
          n.window.document == null ||
          typeof n.window.document.startViewTransition != "function";
        if (!A || H) {
          z ? uo(() => s(k)) : h(() => s(k));
          return;
        }
        if (z) {
          uo(() => {
            p && (d && d.resolve(), p.skipTransition()),
              c({
                isTransitioning: !0,
                flushSync: !0,
                currentLocation: A.currentLocation,
                nextLocation: A.nextLocation,
              });
          });
          let K = n.window.document.startViewTransition(() => {
            uo(() => s(k));
          });
          K.finished.finally(() => {
            uo(() => {
              f(void 0), g(void 0), a(void 0), c({ isTransitioning: !1 });
            });
          }),
            uo(() => g(K));
          return;
        }
        p
          ? (d && d.resolve(),
            p.skipTransition(),
            w({
              state: k,
              currentLocation: A.currentLocation,
              nextLocation: A.nextLocation,
            }))
          : (a(k),
            c({
              isTransitioning: !0,
              flushSync: !1,
              currentLocation: A.currentLocation,
              nextLocation: A.nextLocation,
            }));
      },
      [n.window, p, d, j, h]
    );
  m.useLayoutEffect(() => n.subscribe(v), [n, v]),
    m.useEffect(() => {
      u.isTransitioning && !u.flushSync && f(new J2());
    }, [u]),
    m.useEffect(() => {
      if (d && o && n.window) {
        let k = o,
          L = d.promise,
          F = n.window.document.startViewTransition(async () => {
            h(() => s(k)), await L;
          });
        F.finished.finally(() => {
          f(void 0), g(void 0), a(void 0), c({ isTransitioning: !1 });
        }),
          g(F);
      }
    }, [h, o, d, n.window]),
    m.useEffect(() => {
      d && o && i.location.key === o.location.key && d.resolve();
    }, [d, p, i.location, o]),
    m.useEffect(() => {
      !u.isTransitioning &&
        x &&
        (a(x.state),
        c({
          isTransitioning: !0,
          flushSync: !1,
          currentLocation: x.currentLocation,
          nextLocation: x.nextLocation,
        }),
        w(void 0));
    }, [u.isTransitioning, x]),
    m.useEffect(() => {}, []);
  let b = m.useMemo(
      () => ({
        createHref: n.createHref,
        encodeLocation: n.encodeLocation,
        go: (k) => n.navigate(k),
        push: (k, L, F) =>
          n.navigate(k, {
            state: L,
            preventScrollReset: F == null ? void 0 : F.preventScrollReset,
          }),
        replace: (k, L, F) =>
          n.navigate(k, {
            replace: !0,
            state: L,
            preventScrollReset: F == null ? void 0 : F.preventScrollReset,
          }),
      }),
      [n]
    ),
    S = n.basename || "/",
    E = m.useMemo(
      () => ({ router: n, navigator: b, static: !1, basename: S }),
      [n, b, S]
    ),
    N = m.useMemo(
      () => ({ v7_relativeSplatPath: n.future.v7_relativeSplatPath }),
      [n.future.v7_relativeSplatPath]
    );
  return (
    m.useEffect(() => A2(r, n.future), [r, n.future]),
    m.createElement(
      m.Fragment,
      null,
      m.createElement(
        Zu.Provider,
        { value: E },
        m.createElement(
          Hx.Provider,
          { value: i },
          m.createElement(
            Y2.Provider,
            { value: j.current },
            m.createElement(
              Q2.Provider,
              { value: u },
              m.createElement(
                I2,
                {
                  basename: S,
                  location: i.location,
                  navigationType: i.historyAction,
                  navigator: b,
                  future: N,
                },
                i.initialized || n.future.v7_partialHydration
                  ? m.createElement(tN, {
                      routes: n.routes,
                      future: n.future,
                      state: i,
                    })
                  : t
              )
            )
          )
        )
      ),
      null
    )
  );
}
const tN = m.memo(nN);
function nN(e) {
  let { routes: t, future: n, state: r } = e;
  return N2(t, void 0, r, n);
}
const rN =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  iN = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  rt = m.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: i,
        reloadDocument: s,
        replace: o,
        state: a,
        target: u,
        to: c,
        preventScrollReset: d,
        viewTransition: f,
      } = t,
      p = z2(t, H2),
      { basename: g } = m.useContext(Zr),
      x,
      w = !1;
    if (typeof c == "string" && iN.test(c) && ((x = c), rN))
      try {
        let v = new URL(window.location.href),
          b = c.startsWith("//") ? new URL(v.protocol + c) : new URL(c),
          S = Ds(b.pathname, g);
        b.origin === v.origin && S != null
          ? (c = S + b.search + b.hash)
          : (w = !0);
      } catch {}
    let j = E2(c, { relative: i }),
      y = sN(c, {
        replace: o,
        state: a,
        target: u,
        preventScrollReset: d,
        relative: i,
        viewTransition: f,
      });
    function h(v) {
      r && r(v), v.defaultPrevented || y(v);
    }
    return m.createElement(
      "a",
      il({}, p, { href: x || j, onClick: w || s ? r : h, ref: n, target: u })
    );
  });
var Qg;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(Qg || (Qg = {}));
var Yg;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(Yg || (Yg = {}));
function sN(e, t) {
  let {
      target: n,
      replace: r,
      state: i,
      preventScrollReset: s,
      relative: o,
      viewTransition: a,
    } = t === void 0 ? {} : t,
    u = Ju(),
    c = bl(),
    d = qx(e, { relative: o });
  return m.useCallback(
    (f) => {
      if (B2(f, n)) {
        f.preventDefault();
        let p = r !== void 0 ? r : Pi(c) === Pi(d);
        u(e, {
          replace: p,
          state: i,
          preventScrollReset: s,
          relative: o,
          viewTransition: a,
        });
      }
    },
    [c, u, d, r, i, n, e, s, o, a]
  );
}
function yt(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var oN = (typeof Symbol == "function" && Symbol.observable) || "@@observable",
  Gg = oN,
  yd = () => Math.random().toString(36).substring(7).split("").join("."),
  lN = {
    INIT: `@@redux/INIT${yd()}`,
    REPLACE: `@@redux/REPLACE${yd()}`,
    PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${yd()}`,
  },
  au = lN;
function xp(e) {
  if (typeof e != "object" || e === null) return !1;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; ) t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function Yx(e, t, n) {
  if (typeof e != "function") throw new Error(yt(2));
  if (
    (typeof t == "function" && typeof n == "function") ||
    (typeof n == "function" && typeof arguments[3] == "function")
  )
    throw new Error(yt(0));
  if (
    (typeof t == "function" && typeof n > "u" && ((n = t), (t = void 0)),
    typeof n < "u")
  ) {
    if (typeof n != "function") throw new Error(yt(1));
    return n(Yx)(e, t);
  }
  let r = e,
    i = t,
    s = new Map(),
    o = s,
    a = 0,
    u = !1;
  function c() {
    o === s &&
      ((o = new Map()),
      s.forEach((j, y) => {
        o.set(y, j);
      }));
  }
  function d() {
    if (u) throw new Error(yt(3));
    return i;
  }
  function f(j) {
    if (typeof j != "function") throw new Error(yt(4));
    if (u) throw new Error(yt(5));
    let y = !0;
    c();
    const h = a++;
    return (
      o.set(h, j),
      function () {
        if (y) {
          if (u) throw new Error(yt(6));
          (y = !1), c(), o.delete(h), (s = null);
        }
      }
    );
  }
  function p(j) {
    if (!xp(j)) throw new Error(yt(7));
    if (typeof j.type > "u") throw new Error(yt(8));
    if (typeof j.type != "string") throw new Error(yt(17));
    if (u) throw new Error(yt(9));
    try {
      (u = !0), (i = r(i, j));
    } finally {
      u = !1;
    }
    return (
      (s = o).forEach((h) => {
        h();
      }),
      j
    );
  }
  function g(j) {
    if (typeof j != "function") throw new Error(yt(10));
    (r = j), p({ type: au.REPLACE });
  }
  function x() {
    const j = f;
    return {
      subscribe(y) {
        if (typeof y != "object" || y === null) throw new Error(yt(11));
        function h() {
          const b = y;
          b.next && b.next(d());
        }
        return h(), { unsubscribe: j(h) };
      },
      [Gg]() {
        return this;
      },
    };
  }
  return (
    p({ type: au.INIT }),
    { dispatch: p, subscribe: f, getState: d, replaceReducer: g, [Gg]: x }
  );
}
function aN(e) {
  Object.keys(e).forEach((t) => {
    const n = e[t];
    if (typeof n(void 0, { type: au.INIT }) > "u") throw new Error(yt(12));
    if (typeof n(void 0, { type: au.PROBE_UNKNOWN_ACTION() }) > "u")
      throw new Error(yt(13));
  });
}
function uN(e) {
  const t = Object.keys(e),
    n = {};
  for (let s = 0; s < t.length; s++) {
    const o = t[s];
    typeof e[o] == "function" && (n[o] = e[o]);
  }
  const r = Object.keys(n);
  let i;
  try {
    aN(n);
  } catch (s) {
    i = s;
  }
  return function (o = {}, a) {
    if (i) throw i;
    let u = !1;
    const c = {};
    for (let d = 0; d < r.length; d++) {
      const f = r[d],
        p = n[f],
        g = o[f],
        x = p(g, a);
      if (typeof x > "u") throw (a && a.type, new Error(yt(14)));
      (c[f] = x), (u = u || x !== g);
    }
    return (u = u || r.length !== Object.keys(o).length), u ? c : o;
  };
}
function uu(...e) {
  return e.length === 0
    ? (t) => t
    : e.length === 1
    ? e[0]
    : e.reduce(
        (t, n) =>
          (...r) =>
            t(n(...r))
      );
}
function cN(...e) {
  return (t) => (n, r) => {
    const i = t(n, r);
    let s = () => {
      throw new Error(yt(15));
    };
    const o = { getState: i.getState, dispatch: (u, ...c) => s(u, ...c) },
      a = e.map((u) => u(o));
    return (s = uu(...a)(i.dispatch)), { ...i, dispatch: s };
  };
}
function dN(e) {
  return xp(e) && "type" in e && typeof e.type == "string";
}
var Gx = Symbol.for("immer-nothing"),
  Xg = Symbol.for("immer-draftable"),
  sn = Symbol.for("immer-state");
function kn(e, ...t) {
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var Ss = Object.getPrototypeOf;
function Ti(e) {
  return !!e && !!e[sn];
}
function cr(e) {
  var t;
  return e
    ? Xx(e) ||
        Array.isArray(e) ||
        !!e[Xg] ||
        !!((t = e.constructor) != null && t[Xg]) ||
        nc(e) ||
        rc(e)
    : !1;
}
var fN = Object.prototype.constructor.toString();
function Xx(e) {
  if (!e || typeof e != "object") return !1;
  const t = Ss(e);
  if (t === null) return !0;
  const n = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return n === Object
    ? !0
    : typeof n == "function" && Function.toString.call(n) === fN;
}
function cu(e, t) {
  tc(e) === 0
    ? Reflect.ownKeys(e).forEach((n) => {
        t(n, e[n], e);
      })
    : e.forEach((n, r) => t(r, n, e));
}
function tc(e) {
  const t = e[sn];
  return t ? t.type_ : Array.isArray(e) ? 1 : nc(e) ? 2 : rc(e) ? 3 : 0;
}
function Df(e, t) {
  return tc(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function Zx(e, t, n) {
  const r = tc(e);
  r === 2 ? e.set(t, n) : r === 3 ? e.add(n) : (e[t] = n);
}
function mN(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function nc(e) {
  return e instanceof Map;
}
function rc(e) {
  return e instanceof Set;
}
function si(e) {
  return e.copy_ || e.base_;
}
function Af(e, t) {
  if (nc(e)) return new Map(e);
  if (rc(e)) return new Set(e);
  if (Array.isArray(e)) return Array.prototype.slice.call(e);
  const n = Xx(e);
  if (t === !0 || (t === "class_only" && !n)) {
    const r = Object.getOwnPropertyDescriptors(e);
    delete r[sn];
    let i = Reflect.ownKeys(r);
    for (let s = 0; s < i.length; s++) {
      const o = i[s],
        a = r[o];
      a.writable === !1 && ((a.writable = !0), (a.configurable = !0)),
        (a.get || a.set) &&
          (r[o] = {
            configurable: !0,
            writable: !0,
            enumerable: a.enumerable,
            value: e[o],
          });
    }
    return Object.create(Ss(e), r);
  } else {
    const r = Ss(e);
    if (r !== null && n) return { ...e };
    const i = Object.create(r);
    return Object.assign(i, e);
  }
}
function wp(e, t = !1) {
  return (
    ic(e) ||
      Ti(e) ||
      !cr(e) ||
      (tc(e) > 1 && (e.set = e.add = e.clear = e.delete = pN),
      Object.freeze(e),
      t && Object.entries(e).forEach(([n, r]) => wp(r, !0))),
    e
  );
}
function pN() {
  kn(2);
}
function ic(e) {
  return Object.isFrozen(e);
}
var hN = {};
function $i(e) {
  const t = hN[e];
  return t || kn(0, e), t;
}
var sl;
function Jx() {
  return sl;
}
function gN(e, t) {
  return {
    drafts_: [],
    parent_: e,
    immer_: t,
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0,
  };
}
function Zg(e, t) {
  t &&
    ($i("Patches"),
    (e.patches_ = []),
    (e.inversePatches_ = []),
    (e.patchListener_ = t));
}
function If(e) {
  Mf(e), e.drafts_.forEach(yN), (e.drafts_ = null);
}
function Mf(e) {
  e === sl && (sl = e.parent_);
}
function Jg(e) {
  return (sl = gN(sl, e));
}
function yN(e) {
  const t = e[sn];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : (t.revoked_ = !0);
}
function e0(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const n = t.drafts_[0];
  return (
    e !== void 0 && e !== n
      ? (n[sn].modified_ && (If(t), kn(4)),
        cr(e) && ((e = du(t, e)), t.parent_ || fu(t, e)),
        t.patches_ &&
          $i("Patches").generateReplacementPatches_(
            n[sn].base_,
            e,
            t.patches_,
            t.inversePatches_
          ))
      : (e = du(t, n, [])),
    If(t),
    t.patches_ && t.patchListener_(t.patches_, t.inversePatches_),
    e !== Gx ? e : void 0
  );
}
function du(e, t, n) {
  if (ic(t)) return t;
  const r = t[sn];
  if (!r) return cu(t, (i, s) => t0(e, r, t, i, s, n)), t;
  if (r.scope_ !== e) return t;
  if (!r.modified_) return fu(e, r.base_, !0), r.base_;
  if (!r.finalized_) {
    (r.finalized_ = !0), r.scope_.unfinalizedDrafts_--;
    const i = r.copy_;
    let s = i,
      o = !1;
    r.type_ === 3 && ((s = new Set(i)), i.clear(), (o = !0)),
      cu(s, (a, u) => t0(e, r, i, a, u, n, o)),
      fu(e, i, !1),
      n &&
        e.patches_ &&
        $i("Patches").generatePatches_(r, n, e.patches_, e.inversePatches_);
  }
  return r.copy_;
}
function t0(e, t, n, r, i, s, o) {
  if (Ti(i)) {
    const a =
        s && t && t.type_ !== 3 && !Df(t.assigned_, r) ? s.concat(r) : void 0,
      u = du(e, i, a);
    if ((Zx(n, r, u), Ti(u))) e.canAutoFreeze_ = !1;
    else return;
  } else o && n.add(i);
  if (cr(i) && !ic(i)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1) return;
    du(e, i),
      (!t || !t.scope_.parent_) &&
        typeof r != "symbol" &&
        Object.prototype.propertyIsEnumerable.call(n, r) &&
        fu(e, i);
  }
}
function fu(e, t, n = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && wp(t, n);
}
function vN(e, t) {
  const n = Array.isArray(e),
    r = {
      type_: n ? 1 : 0,
      scope_: t ? t.scope_ : Jx(),
      modified_: !1,
      finalized_: !1,
      assigned_: {},
      parent_: t,
      base_: e,
      draft_: null,
      copy_: null,
      revoke_: null,
      isManual_: !1,
    };
  let i = r,
    s = bp;
  n && ((i = [r]), (s = ol));
  const { revoke: o, proxy: a } = Proxy.revocable(i, s);
  return (r.draft_ = a), (r.revoke_ = o), a;
}
var bp = {
    get(e, t) {
      if (t === sn) return e;
      const n = si(e);
      if (!Df(n, t)) return xN(e, n, t);
      const r = n[t];
      return e.finalized_ || !cr(r)
        ? r
        : r === vd(e.base_, t)
        ? (xd(e), (e.copy_[t] = Uf(r, e)))
        : r;
    },
    has(e, t) {
      return t in si(e);
    },
    ownKeys(e) {
      return Reflect.ownKeys(si(e));
    },
    set(e, t, n) {
      const r = e1(si(e), t);
      if (r != null && r.set) return r.set.call(e.draft_, n), !0;
      if (!e.modified_) {
        const i = vd(si(e), t),
          s = i == null ? void 0 : i[sn];
        if (s && s.base_ === n)
          return (e.copy_[t] = n), (e.assigned_[t] = !1), !0;
        if (mN(n, i) && (n !== void 0 || Df(e.base_, t))) return !0;
        xd(e), zf(e);
      }
      return (
        (e.copy_[t] === n && (n !== void 0 || t in e.copy_)) ||
          (Number.isNaN(n) && Number.isNaN(e.copy_[t])) ||
          ((e.copy_[t] = n), (e.assigned_[t] = !0)),
        !0
      );
    },
    deleteProperty(e, t) {
      return (
        vd(e.base_, t) !== void 0 || t in e.base_
          ? ((e.assigned_[t] = !1), xd(e), zf(e))
          : delete e.assigned_[t],
        e.copy_ && delete e.copy_[t],
        !0
      );
    },
    getOwnPropertyDescriptor(e, t) {
      const n = si(e),
        r = Reflect.getOwnPropertyDescriptor(n, t);
      return (
        r && {
          writable: !0,
          configurable: e.type_ !== 1 || t !== "length",
          enumerable: r.enumerable,
          value: n[t],
        }
      );
    },
    defineProperty() {
      kn(11);
    },
    getPrototypeOf(e) {
      return Ss(e.base_);
    },
    setPrototypeOf() {
      kn(12);
    },
  },
  ol = {};
cu(bp, (e, t) => {
  ol[e] = function () {
    return (arguments[0] = arguments[0][0]), t.apply(this, arguments);
  };
});
ol.deleteProperty = function (e, t) {
  return ol.set.call(this, e, t, void 0);
};
ol.set = function (e, t, n) {
  return bp.set.call(this, e[0], t, n, e[0]);
};
function vd(e, t) {
  const n = e[sn];
  return (n ? si(n) : e)[t];
}
function xN(e, t, n) {
  var i;
  const r = e1(t, n);
  return r
    ? "value" in r
      ? r.value
      : (i = r.get) == null
      ? void 0
      : i.call(e.draft_)
    : void 0;
}
function e1(e, t) {
  if (!(t in e)) return;
  let n = Ss(e);
  for (; n; ) {
    const r = Object.getOwnPropertyDescriptor(n, t);
    if (r) return r;
    n = Ss(n);
  }
}
function zf(e) {
  e.modified_ || ((e.modified_ = !0), e.parent_ && zf(e.parent_));
}
function xd(e) {
  e.copy_ || (e.copy_ = Af(e.base_, e.scope_.immer_.useStrictShallowCopy_));
}
var wN = class {
  constructor(e) {
    (this.autoFreeze_ = !0),
      (this.useStrictShallowCopy_ = !1),
      (this.produce = (t, n, r) => {
        if (typeof t == "function" && typeof n != "function") {
          const s = n;
          n = t;
          const o = this;
          return function (u = s, ...c) {
            return o.produce(u, (d) => n.call(this, d, ...c));
          };
        }
        typeof n != "function" && kn(6),
          r !== void 0 && typeof r != "function" && kn(7);
        let i;
        if (cr(t)) {
          const s = Jg(this),
            o = Uf(t, void 0);
          let a = !0;
          try {
            (i = n(o)), (a = !1);
          } finally {
            a ? If(s) : Mf(s);
          }
          return Zg(s, r), e0(i, s);
        } else if (!t || typeof t != "object") {
          if (
            ((i = n(t)),
            i === void 0 && (i = t),
            i === Gx && (i = void 0),
            this.autoFreeze_ && wp(i, !0),
            r)
          ) {
            const s = [],
              o = [];
            $i("Patches").generateReplacementPatches_(t, i, s, o), r(s, o);
          }
          return i;
        } else kn(1, t);
      }),
      (this.produceWithPatches = (t, n) => {
        if (typeof t == "function")
          return (o, ...a) => this.produceWithPatches(o, (u) => t(u, ...a));
        let r, i;
        return [
          this.produce(t, n, (o, a) => {
            (r = o), (i = a);
          }),
          r,
          i,
        ];
      }),
      typeof (e == null ? void 0 : e.autoFreeze) == "boolean" &&
        this.setAutoFreeze(e.autoFreeze),
      typeof (e == null ? void 0 : e.useStrictShallowCopy) == "boolean" &&
        this.setUseStrictShallowCopy(e.useStrictShallowCopy);
  }
  createDraft(e) {
    cr(e) || kn(8), Ti(e) && (e = bN(e));
    const t = Jg(this),
      n = Uf(e, void 0);
    return (n[sn].isManual_ = !0), Mf(t), n;
  }
  finishDraft(e, t) {
    const n = e && e[sn];
    (!n || !n.isManual_) && kn(9);
    const { scope_: r } = n;
    return Zg(r, t), e0(void 0, r);
  }
  setAutoFreeze(e) {
    this.autoFreeze_ = e;
  }
  setUseStrictShallowCopy(e) {
    this.useStrictShallowCopy_ = e;
  }
  applyPatches(e, t) {
    let n;
    for (n = t.length - 1; n >= 0; n--) {
      const i = t[n];
      if (i.path.length === 0 && i.op === "replace") {
        e = i.value;
        break;
      }
    }
    n > -1 && (t = t.slice(n + 1));
    const r = $i("Patches").applyPatches_;
    return Ti(e) ? r(e, t) : this.produce(e, (i) => r(i, t));
  }
};
function Uf(e, t) {
  const n = nc(e)
    ? $i("MapSet").proxyMap_(e, t)
    : rc(e)
    ? $i("MapSet").proxySet_(e, t)
    : vN(e, t);
  return (t ? t.scope_ : Jx()).drafts_.push(n), n;
}
function bN(e) {
  return Ti(e) || kn(10, e), t1(e);
}
function t1(e) {
  if (!cr(e) || ic(e)) return e;
  const t = e[sn];
  let n;
  if (t) {
    if (!t.modified_) return t.base_;
    (t.finalized_ = !0), (n = Af(e, t.scope_.immer_.useStrictShallowCopy_));
  } else n = Af(e, !0);
  return (
    cu(n, (r, i) => {
      Zx(n, r, t1(i));
    }),
    t && (t.finalized_ = !1),
    n
  );
}
var on = new wN(),
  n1 = on.produce;
on.produceWithPatches.bind(on);
on.setAutoFreeze.bind(on);
on.setUseStrictShallowCopy.bind(on);
on.applyPatches.bind(on);
on.createDraft.bind(on);
on.finishDraft.bind(on);
function r1(e) {
  return ({ dispatch: n, getState: r }) =>
    (i) =>
    (s) =>
      typeof s == "function" ? s(n, r, e) : i(s);
}
var jN = r1(),
  EN = r1,
  SN =
    typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : function () {
          if (arguments.length !== 0)
            return typeof arguments[0] == "object"
              ? uu
              : uu.apply(null, arguments);
        },
  NN = (e) => e && typeof e.match == "function";
function Lo(e, t) {
  function n(...r) {
    if (t) {
      let i = t(...r);
      if (!i) throw new Error(Vn(0));
      return {
        type: e,
        payload: i.payload,
        ...("meta" in i && { meta: i.meta }),
        ...("error" in i && { error: i.error }),
      };
    }
    return { type: e, payload: r[0] };
  }
  return (
    (n.toString = () => `${e}`),
    (n.type = e),
    (n.match = (r) => dN(r) && r.type === e),
    n
  );
}
var i1 = class jo extends Array {
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, jo.prototype);
  }
  static get [Symbol.species]() {
    return jo;
  }
  concat(...t) {
    return super.concat.apply(this, t);
  }
  prepend(...t) {
    return t.length === 1 && Array.isArray(t[0])
      ? new jo(...t[0].concat(this))
      : new jo(...t.concat(this));
  }
};
function n0(e) {
  return cr(e) ? n1(e, () => {}) : e;
}
function r0(e, t, n) {
  if (e.has(t)) {
    let i = e.get(t);
    return n.update && ((i = n.update(i, t, e)), e.set(t, i)), i;
  }
  if (!n.insert) throw new Error(Vn(10));
  const r = n.insert(t, e);
  return e.set(t, r), r;
}
function kN(e) {
  return typeof e == "boolean";
}
var CN = () =>
    function (t) {
      const {
        thunk: n = !0,
        immutableCheck: r = !0,
        serializableCheck: i = !0,
        actionCreatorCheck: s = !0,
      } = t ?? {};
      let o = new i1();
      return n && (kN(n) ? o.push(jN) : o.push(EN(n.extraArgument))), o;
    },
  _N = "RTK_autoBatch",
  s1 = (e) => (t) => {
    setTimeout(t, e);
  },
  PN =
    typeof window < "u" && window.requestAnimationFrame
      ? window.requestAnimationFrame
      : s1(10),
  TN =
    (e = { type: "raf" }) =>
    (t) =>
    (...n) => {
      const r = t(...n);
      let i = !0,
        s = !1,
        o = !1;
      const a = new Set(),
        u =
          e.type === "tick"
            ? queueMicrotask
            : e.type === "raf"
            ? PN
            : e.type === "callback"
            ? e.queueNotification
            : s1(e.timeout),
        c = () => {
          (o = !1), s && ((s = !1), a.forEach((d) => d()));
        };
      return Object.assign({}, r, {
        subscribe(d) {
          const f = () => i && d(),
            p = r.subscribe(f);
          return (
            a.add(d),
            () => {
              p(), a.delete(d);
            }
          );
        },
        dispatch(d) {
          var f;
          try {
            return (
              (i = !((f = d == null ? void 0 : d.meta) != null && f[_N])),
              (s = !i),
              s && (o || ((o = !0), u(c))),
              r.dispatch(d)
            );
          } finally {
            i = !0;
          }
        },
      });
    },
  $N = (e) =>
    function (n) {
      const { autoBatch: r = !0 } = n ?? {};
      let i = new i1(e);
      return r && i.push(TN(typeof r == "object" ? r : void 0)), i;
    };
function RN(e) {
  const t = CN(),
    {
      reducer: n = void 0,
      middleware: r,
      devTools: i = !0,
      preloadedState: s = void 0,
      enhancers: o = void 0,
    } = e || {};
  let a;
  if (typeof n == "function") a = n;
  else if (xp(n)) a = uN(n);
  else throw new Error(Vn(1));
  let u;
  typeof r == "function" ? (u = r(t)) : (u = t());
  let c = uu;
  i && (c = SN({ trace: !1, ...(typeof i == "object" && i) }));
  const d = cN(...u),
    f = $N(d);
  let p = typeof o == "function" ? o(f) : f();
  const g = c(...p);
  return Yx(a, s, g);
}
function o1(e) {
  const t = {},
    n = [];
  let r;
  const i = {
    addCase(s, o) {
      const a = typeof s == "string" ? s : s.type;
      if (!a) throw new Error(Vn(28));
      if (a in t) throw new Error(Vn(29));
      return (t[a] = o), i;
    },
    addMatcher(s, o) {
      return n.push({ matcher: s, reducer: o }), i;
    },
    addDefaultCase(s) {
      return (r = s), i;
    },
  };
  return e(i), [t, n, r];
}
function FN(e) {
  return typeof e == "function";
}
function LN(e, t) {
  let [n, r, i] = o1(t),
    s;
  if (FN(e)) s = () => n0(e());
  else {
    const a = n0(e);
    s = () => a;
  }
  function o(a = s(), u) {
    let c = [
      n[u.type],
      ...r.filter(({ matcher: d }) => d(u)).map(({ reducer: d }) => d),
    ];
    return (
      c.filter((d) => !!d).length === 0 && (c = [i]),
      c.reduce((d, f) => {
        if (f)
          if (Ti(d)) {
            const g = f(d, u);
            return g === void 0 ? d : g;
          } else {
            if (cr(d)) return n1(d, (p) => f(p, u));
            {
              const p = f(d, u);
              if (p === void 0) {
                if (d === null) return d;
                throw Error(
                  "A case reducer on a non-draftable value must not return undefined"
                );
              }
              return p;
            }
          }
        return d;
      }, a)
    );
  }
  return (o.getInitialState = s), o;
}
var ON = (e, t) => (NN(e) ? e.match(t) : e(t));
function DN(...e) {
  return (t) => e.some((n) => ON(n, t));
}
var AN = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",
  IN = (e = 21) => {
    let t = "",
      n = e;
    for (; n--; ) t += AN[(Math.random() * 64) | 0];
    return t;
  },
  MN = ["name", "message", "stack", "code"],
  wd = class {
    constructor(e, t) {
      Uc(this, "_type");
      (this.payload = e), (this.meta = t);
    }
  },
  i0 = class {
    constructor(e, t) {
      Uc(this, "_type");
      (this.payload = e), (this.meta = t);
    }
  },
  zN = (e) => {
    if (typeof e == "object" && e !== null) {
      const t = {};
      for (const n of MN) typeof e[n] == "string" && (t[n] = e[n]);
      return t;
    }
    return { message: String(e) };
  },
  Me = (() => {
    function e(t, n, r) {
      const i = Lo(t + "/fulfilled", (u, c, d, f) => ({
          payload: u,
          meta: {
            ...(f || {}),
            arg: d,
            requestId: c,
            requestStatus: "fulfilled",
          },
        })),
        s = Lo(t + "/pending", (u, c, d) => ({
          payload: void 0,
          meta: {
            ...(d || {}),
            arg: c,
            requestId: u,
            requestStatus: "pending",
          },
        })),
        o = Lo(t + "/rejected", (u, c, d, f, p) => ({
          payload: f,
          error: ((r && r.serializeError) || zN)(u || "Rejected"),
          meta: {
            ...(p || {}),
            arg: d,
            requestId: c,
            rejectedWithValue: !!f,
            requestStatus: "rejected",
            aborted: (u == null ? void 0 : u.name) === "AbortError",
            condition: (u == null ? void 0 : u.name) === "ConditionError",
          },
        }));
      function a(u) {
        return (c, d, f) => {
          const p = r != null && r.idGenerator ? r.idGenerator(u) : IN(),
            g = new AbortController();
          let x, w;
          function j(h) {
            (w = h), g.abort();
          }
          const y = (async function () {
            var b, S;
            let h;
            try {
              let E =
                (b = r == null ? void 0 : r.condition) == null
                  ? void 0
                  : b.call(r, u, { getState: d, extra: f });
              if ((BN(E) && (E = await E), E === !1 || g.signal.aborted))
                throw {
                  name: "ConditionError",
                  message: "Aborted due to condition callback returning false.",
                };
              const N = new Promise((k, L) => {
                (x = () => {
                  L({ name: "AbortError", message: w || "Aborted" });
                }),
                  g.signal.addEventListener("abort", x);
              });
              c(
                s(
                  p,
                  u,
                  (S = r == null ? void 0 : r.getPendingMeta) == null
                    ? void 0
                    : S.call(
                        r,
                        { requestId: p, arg: u },
                        { getState: d, extra: f }
                      )
                )
              ),
                (h = await Promise.race([
                  N,
                  Promise.resolve(
                    n(u, {
                      dispatch: c,
                      getState: d,
                      extra: f,
                      requestId: p,
                      signal: g.signal,
                      abort: j,
                      rejectWithValue: (k, L) => new wd(k, L),
                      fulfillWithValue: (k, L) => new i0(k, L),
                    })
                  ).then((k) => {
                    if (k instanceof wd) throw k;
                    return k instanceof i0
                      ? i(k.payload, p, u, k.meta)
                      : i(k, p, u);
                  }),
                ]));
            } catch (E) {
              h =
                E instanceof wd ? o(null, p, u, E.payload, E.meta) : o(E, p, u);
            } finally {
              x && g.signal.removeEventListener("abort", x);
            }
            return (
              (r &&
                !r.dispatchConditionRejection &&
                o.match(h) &&
                h.meta.condition) ||
                c(h),
              h
            );
          })();
          return Object.assign(y, {
            abort: j,
            requestId: p,
            arg: u,
            unwrap() {
              return y.then(UN);
            },
          });
        };
      }
      return Object.assign(a, {
        pending: s,
        rejected: o,
        fulfilled: i,
        settled: DN(o, i),
        typePrefix: t,
      });
    }
    return (e.withTypes = () => e), e;
  })();
function UN(e) {
  if (e.meta && e.meta.rejectedWithValue) throw e.payload;
  if (e.error) throw e.error;
  return e.payload;
}
function BN(e) {
  return e !== null && typeof e == "object" && typeof e.then == "function";
}
var HN = Symbol.for("rtk-slice-createasyncthunk");
function VN(e, t) {
  return `${e}/${t}`;
}
function WN({ creators: e } = {}) {
  var n;
  const t = (n = e == null ? void 0 : e.asyncThunk) == null ? void 0 : n[HN];
  return function (i) {
    const { name: s, reducerPath: o = s } = i;
    if (!s) throw new Error(Vn(11));
    typeof process < "u";
    const a =
        (typeof i.reducers == "function" ? i.reducers(KN()) : i.reducers) || {},
      u = Object.keys(a),
      c = {
        sliceCaseReducersByName: {},
        sliceCaseReducersByType: {},
        actionCreators: {},
        sliceMatchers: [],
      },
      d = {
        addCase(v, b) {
          const S = typeof v == "string" ? v : v.type;
          if (!S) throw new Error(Vn(12));
          if (S in c.sliceCaseReducersByType) throw new Error(Vn(13));
          return (c.sliceCaseReducersByType[S] = b), d;
        },
        addMatcher(v, b) {
          return c.sliceMatchers.push({ matcher: v, reducer: b }), d;
        },
        exposeAction(v, b) {
          return (c.actionCreators[v] = b), d;
        },
        exposeCaseReducer(v, b) {
          return (c.sliceCaseReducersByName[v] = b), d;
        },
      };
    u.forEach((v) => {
      const b = a[v],
        S = {
          reducerName: v,
          type: VN(s, v),
          createNotation: typeof i.reducers == "function",
        };
      YN(b) ? XN(S, b, d, t) : QN(S, b, d);
    });
    function f() {
      const [v = {}, b = [], S = void 0] =
          typeof i.extraReducers == "function"
            ? o1(i.extraReducers)
            : [i.extraReducers],
        E = { ...v, ...c.sliceCaseReducersByType };
      return LN(i.initialState, (N) => {
        for (let k in E) N.addCase(k, E[k]);
        for (let k of c.sliceMatchers) N.addMatcher(k.matcher, k.reducer);
        for (let k of b) N.addMatcher(k.matcher, k.reducer);
        S && N.addDefaultCase(S);
      });
    }
    const p = (v) => v,
      g = new Map();
    let x;
    function w(v, b) {
      return x || (x = f()), x(v, b);
    }
    function j() {
      return x || (x = f()), x.getInitialState();
    }
    function y(v, b = !1) {
      function S(N) {
        let k = N[v];
        return typeof k > "u" && b && (k = j()), k;
      }
      function E(N = p) {
        const k = r0(g, b, { insert: () => new WeakMap() });
        return r0(k, N, {
          insert: () => {
            const L = {};
            for (const [F, z] of Object.entries(i.selectors ?? {}))
              L[F] = qN(z, N, j, b);
            return L;
          },
        });
      }
      return {
        reducerPath: v,
        getSelectors: E,
        get selectors() {
          return E(S);
        },
        selectSlice: S,
      };
    }
    const h = {
      name: s,
      reducer: w,
      actions: c.actionCreators,
      caseReducers: c.sliceCaseReducersByName,
      getInitialState: j,
      ...y(o),
      injectInto(v, { reducerPath: b, ...S } = {}) {
        const E = b ?? o;
        return (
          v.inject({ reducerPath: E, reducer: w }, S), { ...h, ...y(E, !0) }
        );
      },
    };
    return h;
  };
}
function qN(e, t, n, r) {
  function i(s, ...o) {
    let a = t(s);
    return typeof a > "u" && r && (a = n()), e(a, ...o);
  }
  return (i.unwrapped = e), i;
}
var jl = WN();
function KN() {
  function e(t, n) {
    return { _reducerDefinitionType: "asyncThunk", payloadCreator: t, ...n };
  }
  return (
    (e.withTypes = () => e),
    {
      reducer(t) {
        return Object.assign(
          {
            [t.name](...n) {
              return t(...n);
            },
          }[t.name],
          { _reducerDefinitionType: "reducer" }
        );
      },
      preparedReducer(t, n) {
        return {
          _reducerDefinitionType: "reducerWithPrepare",
          prepare: t,
          reducer: n,
        };
      },
      asyncThunk: e,
    }
  );
}
function QN({ type: e, reducerName: t, createNotation: n }, r, i) {
  let s, o;
  if ("reducer" in r) {
    if (n && !GN(r)) throw new Error(Vn(17));
    (s = r.reducer), (o = r.prepare);
  } else s = r;
  i.addCase(e, s)
    .exposeCaseReducer(t, s)
    .exposeAction(t, o ? Lo(e, o) : Lo(e));
}
function YN(e) {
  return e._reducerDefinitionType === "asyncThunk";
}
function GN(e) {
  return e._reducerDefinitionType === "reducerWithPrepare";
}
function XN({ type: e, reducerName: t }, n, r, i) {
  if (!i) throw new Error(Vn(18));
  const {
      payloadCreator: s,
      fulfilled: o,
      pending: a,
      rejected: u,
      settled: c,
      options: d,
    } = n,
    f = i(e, s, d);
  r.exposeAction(t, f),
    o && r.addCase(f.fulfilled, o),
    a && r.addCase(f.pending, a),
    u && r.addCase(f.rejected, u),
    c && r.addMatcher(f.settled, c),
    r.exposeCaseReducer(t, {
      fulfilled: o || ia,
      pending: a || ia,
      rejected: u || ia,
      settled: c || ia,
    });
}
function ia() {}
function Vn(e) {
  return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
function ZN(e) {
  return new Promise(async (t) => {
    const r = await (
      await fetch("http://localhost:8080/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(e),
      })
    ).json();
    console.log(r, "response of user"), t({ data: r });
  });
}
function JN(e) {
  return new Promise(async (t, n) => {
    try {
      const r = await fetch("http://localhost:8080/auth/login", {
        method: "POST",
        body: JSON.stringify(e),
        headers: { "content-type": "application/json" },
      });
      if (r.ok) {
        const i = await r.json();
        t({ data: i });
      } else {
        const i = r.text();
        n(i);
      }
    } catch (r) {
      n(r);
    }
  });
}
function ek() {
  return new Promise(async (e, t) => {
    try {
      const n = await fetch("http://localhost:8080/auth/check");
      if (n.ok) {
        const r = await n.json();
        e({ data: r });
      } else {
        const r = await n.text();
        t(r);
      }
    } catch (n) {
      t(n);
    }
  });
}
function tk(e) {
  return new Promise(async (t, n) => {
    try {
      const r = await fetch("http://localhost:8080/auth/logout");
      if (r.ok) {
        const i = await r.json();
        t({ data: "success" });
      } else {
        const i = r.text();
        n(i);
      }
    } catch (r) {
      n(r);
    }
  });
}
function nk(e) {
  return new Promise(async (t, n) => {
    try {
      const r = await fetch(
        "http://localhost:8080/auth/reset-password-request",
        {
          method: "POST",
          body: JSON.stringify({ email: e }),
          headers: { "content-type": "application/json" },
        }
      );
      if (r.ok) {
        const i = await r.json();
        t({ data: i });
      } else {
        const i = r.text();
        n(i);
      }
    } catch (r) {
      n(r);
    }
  });
}
function rk(e) {
  return new Promise(async (t, n) => {
    try {
      const r = await fetch("http://localhost:8080/auth/reset-password", {
        method: "POST",
        body: JSON.stringify(e),
        headers: { "content-type": "application/json" },
      });
      if (r.ok) {
        const i = await r.json();
        t({ data: i });
      } else {
        const i = r.text();
        n(i);
      }
    } catch (r) {
      n(r);
    }
  });
}
function ik() {
  return new Promise(async (e) => {
    const n = await (await fetch("http://localhost:8080/orders/own")).json();
    e({ data: n });
  });
}
function sk() {
  return new Promise(async (e) => {
    const n = await (await fetch("http://localhost:8080/users/own")).json();
    e({ data: n });
  });
}
function l1(e) {
  return new Promise(async (t) => {
    const r = await (
      await fetch("http://localhost:8080/users/" + e.id, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(e),
      })
    ).json();
    t({ data: r });
  });
}
const ok = {
    loggedInUserToken: null,
    status: "idle",
    error: null,
    userChecked: !1,
    mailSent: !1,
    passwordReset: !1,
  },
  Bf = Me("user/createUser", async (e) => {
    const t = await ZN(e);
    return console.log(t, "response of user"), t.data;
  }),
  Ea = Me("user/loginUser", async (e, { rejectWithValue: t }) => {
    try {
      const n = await JN(e);
      return console.log(n, "response of user"), n.data;
    } catch (n) {
      return t(n);
    }
  }),
  lk = Me("user/updateUser", async (e) => {
    const t = await l1(e);
    return console.log(t, "response of user"), t.data;
  }),
  Sa = Me("user/checkAuth", async () => {
    try {
      return (await ek()).data;
    } catch (e) {
      console.log(e);
    }
  }),
  s0 = Me("user/resetPasswordRequest", async (e, { rejectWithValue: t }) => {
    try {
      return (await nk(e)).data;
    } catch (n) {
      return console.log(n), t(n);
    }
  }),
  bd = Me("user/resetPassword", async (e, { rejectWithValue: t }) => {
    try {
      const n = await rk(e);
      return console.log(n), n.data;
    } catch (n) {
      return console.log(n), t(n);
    }
  }),
  Hf = Me("user/signOut", async () => {
    const e = await tk();
    return console.log(e, "response of user"), e.data;
  }),
  ak = jl({
    name: "user",
    initialState: ok,
    reducers: {
      increment: (e) => {
        e.value += 1;
      },
    },
    extraReducers: (e) => {
      e.addCase(Bf.pending, (t) => {
        t.status = "loading";
      })
        .addCase(Bf.fulfilled, (t, n) => {
          (t.status = "idle"), (t.loggedInUserToken = n.payload);
        })
        .addCase(Ea.pending, (t) => {
          t.status = "loading";
        })
        .addCase(Ea.fulfilled, (t, n) => {
          (t.status = "idle"), (t.loggedInUserToken = n.payload);
        })
        .addCase(Ea.rejected, (t, n) => {
          (t.status = "idle"), (t.error = n.payload);
        })
        .addCase(Hf.pending, (t) => {
          t.status = "loading";
        })
        .addCase(Hf.fulfilled, (t, n) => {
          (t.status = "idle"), (t.loggedInUserToken = null);
        })
        .addCase(Sa.pending, (t) => {
          t.status = "loading";
        })
        .addCase(Sa.fulfilled, (t, n) => {
          (t.status = "idle"),
            (t.loggedInUserToken = n.payload),
            (t.userChecked = !0);
        })
        .addCase(Sa.rejected, (t, n) => {
          (t.status = "idle"), (t.userChecked = !0);
        })
        .addCase(s0.pending, (t) => {
          t.status = "loading";
        })
        .addCase(s0.fulfilled, (t, n) => {
          (t.status = "idle"), (t.mailSent = !0);
        })
        .addCase(bd.pending, (t) => {
          t.status = "loading";
        })
        .addCase(bd.fulfilled, (t, n) => {
          (t.status = "idle"), (t.passwordReset = !0);
        })
        .addCase(bd.rejected, (t, n) => {
          (t.status = "idle"), (t.error = n.payload);
        });
    },
  }),
  Jr = (e) => e.auth.loggedInUserToken,
  uk = (e) => e.auth.error,
  ck = (e) => e.auth.userChecked,
  dk = ak.reducer,
  sa = ({ children: e }) => {
    const t = me(Jr);
    return (
      console.log("ProtedUser", t),
      t ? (console.log("ProtedUser", t), e) : l.jsx(Kn, { to: "/login" })
    );
  },
  a1 = typeof document < "u" ? D.useLayoutEffect : () => {};
function fk(e) {
  const t = m.useRef(null);
  return (
    a1(() => {
      t.current = e;
    }, [e]),
    m.useCallback((...n) => {
      const r = t.current;
      return r == null ? void 0 : r(...n);
    }, [])
  );
}
const El = (e) => {
    var t;
    return (t = e == null ? void 0 : e.ownerDocument) !== null && t !== void 0
      ? t
      : document;
  },
  mi = (e) =>
    e && "window" in e && e.window === e ? e : El(e).defaultView || window;
function u1(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var i = e.length;
      for (t = 0; t < i; t++)
        e[t] && (n = u1(e[t])) && (r && (r += " "), (r += n));
    } else for (n in e) e[n] && (r && (r += " "), (r += n));
  return r;
}
function xi() {
  for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++)
    (e = arguments[n]) && (t = u1(e)) && (r && (r += " "), (r += t));
  return r;
}
function mk(e) {
  var t;
  return typeof window > "u" || window.navigator == null
    ? !1
    : ((t = window.navigator.userAgentData) === null || t === void 0
        ? void 0
        : t.brands.some((n) => e.test(n.brand))) ||
        e.test(window.navigator.userAgent);
}
function pk(e) {
  var t;
  return typeof window < "u" && window.navigator != null
    ? e.test(
        ((t = window.navigator.userAgentData) === null || t === void 0
          ? void 0
          : t.platform) || window.navigator.platform
      )
    : !1;
}
function c1(e) {
  let t = null;
  return () => (t == null && (t = e()), t);
}
const hk = c1(function () {
    return pk(/^Mac/i);
  }),
  gk = c1(function () {
    return mk(/Android/i);
  });
function yk(e) {
  return e.mozInputSource === 0 && e.isTrusted
    ? !0
    : gk() && e.pointerType
    ? e.type === "click" && e.buttons === 1
    : e.detail === 0 && !e.pointerType;
}
class vk {
  isDefaultPrevented() {
    return this.nativeEvent.defaultPrevented;
  }
  preventDefault() {
    (this.defaultPrevented = !0), this.nativeEvent.preventDefault();
  }
  stopPropagation() {
    this.nativeEvent.stopPropagation(), (this.isPropagationStopped = () => !0);
  }
  isPropagationStopped() {
    return !1;
  }
  persist() {}
  constructor(t, n) {
    (this.nativeEvent = n),
      (this.target = n.target),
      (this.currentTarget = n.currentTarget),
      (this.relatedTarget = n.relatedTarget),
      (this.bubbles = n.bubbles),
      (this.cancelable = n.cancelable),
      (this.defaultPrevented = n.defaultPrevented),
      (this.eventPhase = n.eventPhase),
      (this.isTrusted = n.isTrusted),
      (this.timeStamp = n.timeStamp),
      (this.type = t);
  }
}
function d1(e) {
  let t = m.useRef({ isFocused: !1, observer: null });
  a1(() => {
    const r = t.current;
    return () => {
      r.observer && (r.observer.disconnect(), (r.observer = null));
    };
  }, []);
  let n = fk((r) => {
    e == null || e(r);
  });
  return m.useCallback(
    (r) => {
      if (
        r.target instanceof HTMLButtonElement ||
        r.target instanceof HTMLInputElement ||
        r.target instanceof HTMLTextAreaElement ||
        r.target instanceof HTMLSelectElement
      ) {
        t.current.isFocused = !0;
        let i = r.target,
          s = (o) => {
            (t.current.isFocused = !1),
              i.disabled && n(new vk("blur", o)),
              t.current.observer &&
                (t.current.observer.disconnect(), (t.current.observer = null));
          };
        i.addEventListener("focusout", s, { once: !0 }),
          (t.current.observer = new MutationObserver(() => {
            if (t.current.isFocused && i.disabled) {
              var o;
              (o = t.current.observer) === null ||
                o === void 0 ||
                o.disconnect();
              let a =
                i === document.activeElement ? null : document.activeElement;
              i.dispatchEvent(new FocusEvent("blur", { relatedTarget: a })),
                i.dispatchEvent(
                  new FocusEvent("focusout", { bubbles: !0, relatedTarget: a })
                );
            }
          })),
          t.current.observer.observe(i, {
            attributes: !0,
            attributeFilter: ["disabled"],
          });
      }
    },
    [n]
  );
}
function xk(e) {
  let { isDisabled: t, onFocus: n, onBlur: r, onFocusChange: i } = e;
  const s = m.useCallback(
      (u) => {
        if (u.target === u.currentTarget) return r && r(u), i && i(!1), !0;
      },
      [r, i]
    ),
    o = d1(s),
    a = m.useCallback(
      (u) => {
        const c = El(u.target);
        u.target === u.currentTarget &&
          c.activeElement === u.target &&
          (n && n(u), i && i(!0), o(u));
      },
      [i, n, o]
    );
  return {
    focusProps: {
      onFocus: !t && (n || i || r) ? a : void 0,
      onBlur: !t && (r || i) ? s : void 0,
    },
  };
}
let Sl = null,
  Vf = new Set(),
  Oo = new Map(),
  Ri = !1,
  Wf = !1;
const wk = { Tab: !0, Escape: !0 };
function jp(e, t) {
  for (let n of Vf) n(e, t);
}
function bk(e) {
  return !(
    e.metaKey ||
    (!hk() && e.altKey) ||
    e.ctrlKey ||
    e.key === "Control" ||
    e.key === "Shift" ||
    e.key === "Meta"
  );
}
function mu(e) {
  (Ri = !0), bk(e) && ((Sl = "keyboard"), jp("keyboard", e));
}
function fn(e) {
  (Sl = "pointer"),
    (e.type === "mousedown" || e.type === "pointerdown") &&
      ((Ri = !0), jp("pointer", e));
}
function f1(e) {
  yk(e) && ((Ri = !0), (Sl = "virtual"));
}
function m1(e) {
  e.target === window ||
    e.target === document ||
    (!Ri && !Wf && ((Sl = "virtual"), jp("virtual", e)), (Ri = !1), (Wf = !1));
}
function p1() {
  (Ri = !1), (Wf = !0);
}
function qf(e) {
  if (typeof window > "u" || Oo.get(mi(e))) return;
  const t = mi(e),
    n = El(e);
  let r = t.HTMLElement.prototype.focus;
  (t.HTMLElement.prototype.focus = function () {
    (Ri = !0), r.apply(this, arguments);
  }),
    n.addEventListener("keydown", mu, !0),
    n.addEventListener("keyup", mu, !0),
    n.addEventListener("click", f1, !0),
    t.addEventListener("focus", m1, !0),
    t.addEventListener("blur", p1, !1),
    typeof PointerEvent < "u"
      ? (n.addEventListener("pointerdown", fn, !0),
        n.addEventListener("pointermove", fn, !0),
        n.addEventListener("pointerup", fn, !0))
      : (n.addEventListener("mousedown", fn, !0),
        n.addEventListener("mousemove", fn, !0),
        n.addEventListener("mouseup", fn, !0)),
    t.addEventListener(
      "beforeunload",
      () => {
        h1(e);
      },
      { once: !0 }
    ),
    Oo.set(t, { focus: r });
}
const h1 = (e, t) => {
  const n = mi(e),
    r = El(e);
  t && r.removeEventListener("DOMContentLoaded", t),
    Oo.has(n) &&
      ((n.HTMLElement.prototype.focus = Oo.get(n).focus),
      r.removeEventListener("keydown", mu, !0),
      r.removeEventListener("keyup", mu, !0),
      r.removeEventListener("click", f1, !0),
      n.removeEventListener("focus", m1, !0),
      n.removeEventListener("blur", p1, !1),
      typeof PointerEvent < "u"
        ? (r.removeEventListener("pointerdown", fn, !0),
          r.removeEventListener("pointermove", fn, !0),
          r.removeEventListener("pointerup", fn, !0))
        : (r.removeEventListener("mousedown", fn, !0),
          r.removeEventListener("mousemove", fn, !0),
          r.removeEventListener("mouseup", fn, !0)),
      Oo.delete(n));
};
function jk(e) {
  const t = El(e);
  let n;
  return (
    t.readyState !== "loading"
      ? qf(e)
      : ((n = () => {
          qf(e);
        }),
        t.addEventListener("DOMContentLoaded", n)),
    () => h1(e, n)
  );
}
typeof document < "u" && jk();
function g1() {
  return Sl !== "pointer";
}
const Ek = new Set([
  "checkbox",
  "radio",
  "range",
  "color",
  "file",
  "image",
  "button",
  "submit",
  "reset",
]);
function Sk(e, t, n) {
  var r;
  const i =
      typeof window < "u"
        ? mi(n == null ? void 0 : n.target).HTMLInputElement
        : HTMLInputElement,
    s =
      typeof window < "u"
        ? mi(n == null ? void 0 : n.target).HTMLTextAreaElement
        : HTMLTextAreaElement,
    o =
      typeof window < "u"
        ? mi(n == null ? void 0 : n.target).HTMLElement
        : HTMLElement,
    a =
      typeof window < "u"
        ? mi(n == null ? void 0 : n.target).KeyboardEvent
        : KeyboardEvent;
  return (
    (e =
      e ||
      ((n == null ? void 0 : n.target) instanceof i &&
        !Ek.has(
          n == null || (r = n.target) === null || r === void 0 ? void 0 : r.type
        )) ||
      (n == null ? void 0 : n.target) instanceof s ||
      ((n == null ? void 0 : n.target) instanceof o &&
        (n == null ? void 0 : n.target.isContentEditable))),
    !(e && t === "keyboard" && n instanceof a && !wk[n.key])
  );
}
function Nk(e, t, n) {
  qf(),
    m.useEffect(() => {
      let r = (i, s) => {
        Sk(!!(n != null && n.isTextInput), i, s) && e(g1());
      };
      return (
        Vf.add(r),
        () => {
          Vf.delete(r);
        }
      );
    }, t);
}
function kk(e) {
  let {
      isDisabled: t,
      onBlurWithin: n,
      onFocusWithin: r,
      onFocusWithinChange: i,
    } = e,
    s = m.useRef({ isFocusWithin: !1 }),
    o = m.useCallback(
      (c) => {
        s.current.isFocusWithin &&
          !c.currentTarget.contains(c.relatedTarget) &&
          ((s.current.isFocusWithin = !1), n && n(c), i && i(!1));
      },
      [n, i, s]
    ),
    a = d1(o),
    u = m.useCallback(
      (c) => {
        !s.current.isFocusWithin &&
          document.activeElement === c.target &&
          (r && r(c), i && i(!0), (s.current.isFocusWithin = !0), a(c));
      },
      [r, i, a]
    );
  return t
    ? { focusWithinProps: { onFocus: void 0, onBlur: void 0 } }
    : { focusWithinProps: { onFocus: u, onBlur: o } };
}
let pu = !1,
  jd = 0;
function Kf() {
  (pu = !0),
    setTimeout(() => {
      pu = !1;
    }, 50);
}
function o0(e) {
  e.pointerType === "touch" && Kf();
}
function Ck() {
  if (!(typeof document > "u"))
    return (
      typeof PointerEvent < "u"
        ? document.addEventListener("pointerup", o0)
        : document.addEventListener("touchend", Kf),
      jd++,
      () => {
        jd--,
          !(jd > 0) &&
            (typeof PointerEvent < "u"
              ? document.removeEventListener("pointerup", o0)
              : document.removeEventListener("touchend", Kf));
      }
    );
}
function sc(e) {
  let { onHoverStart: t, onHoverChange: n, onHoverEnd: r, isDisabled: i } = e,
    [s, o] = m.useState(!1),
    a = m.useRef({
      isHovered: !1,
      ignoreEmulatedMouseEvents: !1,
      pointerType: "",
      target: null,
    }).current;
  m.useEffect(Ck, []);
  let { hoverProps: u, triggerHoverEnd: c } = m.useMemo(() => {
    let d = (g, x) => {
        if (
          ((a.pointerType = x),
          i ||
            x === "touch" ||
            a.isHovered ||
            !g.currentTarget.contains(g.target))
        )
          return;
        a.isHovered = !0;
        let w = g.currentTarget;
        (a.target = w),
          t && t({ type: "hoverstart", target: w, pointerType: x }),
          n && n(!0),
          o(!0);
      },
      f = (g, x) => {
        if (
          ((a.pointerType = ""),
          (a.target = null),
          x === "touch" || !a.isHovered)
        )
          return;
        a.isHovered = !1;
        let w = g.currentTarget;
        r && r({ type: "hoverend", target: w, pointerType: x }),
          n && n(!1),
          o(!1);
      },
      p = {};
    return (
      typeof PointerEvent < "u"
        ? ((p.onPointerEnter = (g) => {
            (pu && g.pointerType === "mouse") || d(g, g.pointerType);
          }),
          (p.onPointerLeave = (g) => {
            !i && g.currentTarget.contains(g.target) && f(g, g.pointerType);
          }))
        : ((p.onTouchStart = () => {
            a.ignoreEmulatedMouseEvents = !0;
          }),
          (p.onMouseEnter = (g) => {
            !a.ignoreEmulatedMouseEvents && !pu && d(g, "mouse"),
              (a.ignoreEmulatedMouseEvents = !1);
          }),
          (p.onMouseLeave = (g) => {
            !i && g.currentTarget.contains(g.target) && f(g, "mouse");
          })),
      { hoverProps: p, triggerHoverEnd: f }
    );
  }, [t, n, r, i, a]);
  return (
    m.useEffect(() => {
      i && c({ currentTarget: a.target }, a.pointerType);
    }, [i]),
    { hoverProps: u, isHovered: s }
  );
}
function oc(e = {}) {
  let { autoFocus: t = !1, isTextInput: n, within: r } = e,
    i = m.useRef({ isFocused: !1, isFocusVisible: t || g1() }),
    [s, o] = m.useState(!1),
    [a, u] = m.useState(() => i.current.isFocused && i.current.isFocusVisible),
    c = m.useCallback(
      () => u(i.current.isFocused && i.current.isFocusVisible),
      []
    ),
    d = m.useCallback(
      (g) => {
        (i.current.isFocused = g), o(g), c();
      },
      [c]
    );
  Nk(
    (g) => {
      (i.current.isFocusVisible = g), c();
    },
    [],
    { isTextInput: n }
  );
  let { focusProps: f } = xk({ isDisabled: r, onFocusChange: d }),
    { focusWithinProps: p } = kk({ isDisabled: !r, onFocusWithinChange: d });
  return { isFocused: s, isFocusVisible: a, focusProps: r ? p : f };
}
var _k = Object.defineProperty,
  Pk = (e, t, n) =>
    t in e
      ? _k(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  Ed = (e, t, n) => (Pk(e, typeof t != "symbol" ? t + "" : t, n), n);
let Tk = class {
    constructor() {
      Ed(this, "current", this.detect()),
        Ed(this, "handoffState", "pending"),
        Ed(this, "currentId", 0);
    }
    set(t) {
      this.current !== t &&
        ((this.handoffState = "pending"),
        (this.currentId = 0),
        (this.current = t));
    }
    reset() {
      this.set(this.detect());
    }
    nextId() {
      return ++this.currentId;
    }
    get isServer() {
      return this.current === "server";
    }
    get isClient() {
      return this.current === "client";
    }
    detect() {
      return typeof window > "u" || typeof document > "u" ? "server" : "client";
    }
    handoff() {
      this.handoffState === "pending" && (this.handoffState = "complete");
    }
    get isHandoffComplete() {
      return this.handoffState === "complete";
    }
  },
  wi = new Tk();
function hr(e) {
  return wi.isServer
    ? null
    : e instanceof Node
    ? e.ownerDocument
    : e != null && e.hasOwnProperty("current") && e.current instanceof Node
    ? e.current.ownerDocument
    : document;
}
function lc(e) {
  typeof queueMicrotask == "function"
    ? queueMicrotask(e)
    : Promise.resolve()
        .then(e)
        .catch((t) =>
          setTimeout(() => {
            throw t;
          })
        );
}
function Yn() {
  let e = [],
    t = {
      addEventListener(n, r, i, s) {
        return (
          n.addEventListener(r, i, s),
          t.add(() => n.removeEventListener(r, i, s))
        );
      },
      requestAnimationFrame(...n) {
        let r = requestAnimationFrame(...n);
        return t.add(() => cancelAnimationFrame(r));
      },
      nextFrame(...n) {
        return t.requestAnimationFrame(() => t.requestAnimationFrame(...n));
      },
      setTimeout(...n) {
        let r = setTimeout(...n);
        return t.add(() => clearTimeout(r));
      },
      microTask(...n) {
        let r = { current: !0 };
        return (
          lc(() => {
            r.current && n[0]();
          }),
          t.add(() => {
            r.current = !1;
          })
        );
      },
      style(n, r, i) {
        let s = n.style.getPropertyValue(r);
        return (
          Object.assign(n.style, { [r]: i }),
          this.add(() => {
            Object.assign(n.style, { [r]: s });
          })
        );
      },
      group(n) {
        let r = Yn();
        return n(r), this.add(() => r.dispose());
      },
      add(n) {
        return (
          e.includes(n) || e.push(n),
          () => {
            let r = e.indexOf(n);
            if (r >= 0) for (let i of e.splice(r, 1)) i();
          }
        );
      },
      dispose() {
        for (let n of e.splice(0)) n();
      },
    };
  return t;
}
function Mi() {
  let [e] = m.useState(Yn);
  return m.useEffect(() => () => e.dispose(), [e]), e;
}
let _e = (e, t) => {
  wi.isServer ? m.useEffect(e, t) : m.useLayoutEffect(e, t);
};
function gr(e) {
  let t = m.useRef(e);
  return (
    _e(() => {
      t.current = e;
    }, [e]),
    t
  );
}
let re = function (e) {
  let t = gr(e);
  return D.useCallback((...n) => t.current(...n), [t]);
};
function $k(e) {
  let t = e.width / 2,
    n = e.height / 2;
  return {
    top: e.clientY - n,
    right: e.clientX + t,
    bottom: e.clientY + n,
    left: e.clientX - t,
  };
}
function Rk(e, t) {
  return !(
    !e ||
    !t ||
    e.right < t.left ||
    e.left > t.right ||
    e.bottom < t.top ||
    e.top > t.bottom
  );
}
function y1({ disabled: e = !1 } = {}) {
  let t = m.useRef(null),
    [n, r] = m.useState(!1),
    i = Mi(),
    s = re(() => {
      (t.current = null), r(!1), i.dispose();
    }),
    o = re((a) => {
      if ((i.dispose(), t.current === null)) {
        (t.current = a.currentTarget), r(!0);
        {
          let u = hr(a.currentTarget);
          i.addEventListener(u, "pointerup", s, !1),
            i.addEventListener(
              u,
              "pointermove",
              (c) => {
                if (t.current) {
                  let d = $k(c);
                  r(Rk(d, t.current.getBoundingClientRect()));
                }
              },
              !1
            ),
            i.addEventListener(u, "pointercancel", s, !1);
        }
      }
    });
  return {
    pressed: n,
    pressProps: e ? {} : { onPointerDown: o, onPointerUp: s, onClick: s },
  };
}
let Fk = m.createContext(void 0);
function ac() {
  return m.useContext(Fk);
}
function Qf(...e) {
  return Array.from(
    new Set(e.flatMap((t) => (typeof t == "string" ? t.split(" ") : [])))
  )
    .filter(Boolean)
    .join(" ");
}
function Qt(e, t, ...n) {
  if (e in t) {
    let i = t[e];
    return typeof i == "function" ? i(...n) : i;
  }
  let r = new Error(
    `Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(
      t
    )
      .map((i) => `"${i}"`)
      .join(", ")}.`
  );
  throw (Error.captureStackTrace && Error.captureStackTrace(r, Qt), r);
}
var Wr = ((e) => (
    (e[(e.None = 0)] = "None"),
    (e[(e.RenderStrategy = 1)] = "RenderStrategy"),
    (e[(e.Static = 2)] = "Static"),
    e
  ))(Wr || {}),
  Rr = ((e) => (
    (e[(e.Unmount = 0)] = "Unmount"), (e[(e.Hidden = 1)] = "Hidden"), e
  ))(Rr || {});
function Le() {
  let e = Ok();
  return m.useCallback((t) => Lk({ mergeRefs: e, ...t }), [e]);
}
function Lk({
  ourProps: e,
  theirProps: t,
  slot: n,
  defaultTag: r,
  features: i,
  visible: s = !0,
  name: o,
  mergeRefs: a,
}) {
  a = a ?? Dk;
  let u = v1(t, e);
  if (s) return oa(u, n, r, o, a);
  let c = i ?? 0;
  if (c & 2) {
    let { static: d = !1, ...f } = u;
    if (d) return oa(f, n, r, o, a);
  }
  if (c & 1) {
    let { unmount: d = !0, ...f } = u;
    return Qt(d ? 0 : 1, {
      0() {
        return null;
      },
      1() {
        return oa({ ...f, hidden: !0, style: { display: "none" } }, n, r, o, a);
      },
    });
  }
  return oa(u, n, r, o, a);
}
function oa(e, t = {}, n, r, i) {
  let {
      as: s = n,
      children: o,
      refName: a = "ref",
      ...u
    } = Sd(e, ["unmount", "static"]),
    c = e.ref !== void 0 ? { [a]: e.ref } : {},
    d = typeof o == "function" ? o(t) : o;
  "className" in u &&
    u.className &&
    typeof u.className == "function" &&
    (u.className = u.className(t)),
    u["aria-labelledby"] &&
      u["aria-labelledby"] === u.id &&
      (u["aria-labelledby"] = void 0);
  let f = {};
  if (t) {
    let p = !1,
      g = [];
    for (let [x, w] of Object.entries(t))
      typeof w == "boolean" && (p = !0),
        w === !0 && g.push(x.replace(/([A-Z])/g, (j) => `-${j.toLowerCase()}`));
    if (p) {
      f["data-headlessui-state"] = g.join(" ");
      for (let x of g) f[`data-${x}`] = "";
    }
  }
  if (
    s === m.Fragment &&
    (Object.keys(Sr(u)).length > 0 || Object.keys(Sr(f)).length > 0)
  )
    if (!m.isValidElement(d) || (Array.isArray(d) && d.length > 1)) {
      if (Object.keys(Sr(u)).length > 0)
        throw new Error(
          [
            'Passing props on "Fragment"!',
            "",
            `The current component <${r} /> is rendering a "Fragment".`,
            "However we need to passthrough the following props:",
            Object.keys(Sr(u))
              .concat(Object.keys(Sr(f)))
              .map((p) => `  - ${p}`).join(`
`),
            "",
            "You can apply a few solutions:",
            [
              'Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',
              "Render a single element as the child so that we can forward the props onto that element.",
            ].map((p) => `  - ${p}`).join(`
`),
          ].join(`
`)
        );
    } else {
      let p = d.props,
        g = p == null ? void 0 : p.className,
        x =
          typeof g == "function"
            ? (...y) => Qf(g(...y), u.className)
            : Qf(g, u.className),
        w = x ? { className: x } : {},
        j = v1(d.props, Sr(Sd(u, ["ref"])));
      for (let y in f) y in j && delete f[y];
      return m.cloneElement(
        d,
        Object.assign({}, j, f, c, { ref: i(Ak(d), c.ref) }, w)
      );
    }
  return m.createElement(
    s,
    Object.assign(
      {},
      Sd(u, ["ref"]),
      s !== m.Fragment && c,
      s !== m.Fragment && f
    ),
    d
  );
}
function Ok() {
  let e = m.useRef([]),
    t = m.useCallback((n) => {
      for (let r of e.current)
        r != null && (typeof r == "function" ? r(n) : (r.current = n));
    }, []);
  return (...n) => {
    if (!n.every((r) => r == null)) return (e.current = n), t;
  };
}
function Dk(...e) {
  return e.every((t) => t == null)
    ? void 0
    : (t) => {
        for (let n of e)
          n != null && (typeof n == "function" ? n(t) : (n.current = t));
      };
}
function v1(...e) {
  if (e.length === 0) return {};
  if (e.length === 1) return e[0];
  let t = {},
    n = {};
  for (let r of e)
    for (let i in r)
      i.startsWith("on") && typeof r[i] == "function"
        ? (n[i] != null || (n[i] = []), n[i].push(r[i]))
        : (t[i] = r[i]);
  if (t.disabled || t["aria-disabled"])
    for (let r in n)
      /^(on(?:Click|Pointer|Mouse|Key)(?:Down|Up|Press)?)$/.test(r) &&
        (n[r] = [
          (i) => {
            var s;
            return (s = i == null ? void 0 : i.preventDefault) == null
              ? void 0
              : s.call(i);
          },
        ]);
  for (let r in n)
    Object.assign(t, {
      [r](i, ...s) {
        let o = n[r];
        for (let a of o) {
          if (
            (i instanceof Event ||
              (i == null ? void 0 : i.nativeEvent) instanceof Event) &&
            i.defaultPrevented
          )
            return;
          a(i, ...s);
        }
      },
    });
  return t;
}
function Ns(...e) {
  if (e.length === 0) return {};
  if (e.length === 1) return e[0];
  let t = {},
    n = {};
  for (let r of e)
    for (let i in r)
      i.startsWith("on") && typeof r[i] == "function"
        ? (n[i] != null || (n[i] = []), n[i].push(r[i]))
        : (t[i] = r[i]);
  for (let r in n)
    Object.assign(t, {
      [r](...i) {
        let s = n[r];
        for (let o of s) o == null || o(...i);
      },
    });
  return t;
}
function Te(e) {
  var t;
  return Object.assign(m.forwardRef(e), {
    displayName: (t = e.displayName) != null ? t : e.name,
  });
}
function Sr(e) {
  let t = Object.assign({}, e);
  for (let n in t) t[n] === void 0 && delete t[n];
  return t;
}
function Sd(e, t = []) {
  let n = Object.assign({}, e);
  for (let r of t) r in n && delete n[r];
  return n;
}
function Ak(e) {
  return D.version.split(".")[0] >= "19" ? e.props.ref : e.ref;
}
function Ik(e, t, n) {
  let [r, i] = m.useState(n),
    s = e !== void 0,
    o = m.useRef(s),
    a = m.useRef(!1),
    u = m.useRef(!1);
  return (
    s && !o.current && !a.current
      ? ((a.current = !0),
        (o.current = s),
        console.error(
          "A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen."
        ))
      : !s &&
        o.current &&
        !u.current &&
        ((u.current = !0),
        (o.current = s),
        console.error(
          "A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen."
        )),
    [s ? e : r, re((c) => (s || i(c), t == null ? void 0 : t(c)))]
  );
}
function Mk(e) {
  let [t] = m.useState(e);
  return t;
}
function x1(e = {}, t = null, n = []) {
  for (let [r, i] of Object.entries(e)) b1(n, w1(t, r), i);
  return n;
}
function w1(e, t) {
  return e ? e + "[" + t + "]" : t;
}
function b1(e, t, n) {
  if (Array.isArray(n))
    for (let [r, i] of n.entries()) b1(e, w1(t, r.toString()), i);
  else
    n instanceof Date
      ? e.push([t, n.toISOString()])
      : typeof n == "boolean"
      ? e.push([t, n ? "1" : "0"])
      : typeof n == "string"
      ? e.push([t, n])
      : typeof n == "number"
      ? e.push([t, `${n}`])
      : n == null
      ? e.push([t, ""])
      : x1(n, t, e);
}
function zk(e) {
  var t, n;
  let r = (t = e == null ? void 0 : e.form) != null ? t : e.closest("form");
  if (r) {
    for (let i of r.elements)
      if (
        i !== e &&
        ((i.tagName === "INPUT" && i.type === "submit") ||
          (i.tagName === "BUTTON" && i.type === "submit") ||
          (i.nodeName === "INPUT" && i.type === "image"))
      ) {
        i.click();
        return;
      }
    (n = r.requestSubmit) == null || n.call(r);
  }
}
let Uk = "span";
var ks = ((e) => (
  (e[(e.None = 1)] = "None"),
  (e[(e.Focusable = 2)] = "Focusable"),
  (e[(e.Hidden = 4)] = "Hidden"),
  e
))(ks || {});
function Bk(e, t) {
  var n;
  let { features: r = 1, ...i } = e,
    s = {
      ref: t,
      "aria-hidden":
        (r & 2) === 2 ? !0 : (n = i["aria-hidden"]) != null ? n : void 0,
      hidden: (r & 4) === 4 ? !0 : void 0,
      style: {
        position: "fixed",
        top: 1,
        left: 1,
        width: 1,
        height: 0,
        padding: 0,
        margin: -1,
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        borderWidth: "0",
        ...((r & 4) === 4 && (r & 2) !== 2 && { display: "none" }),
      },
    };
  return Le()({
    ourProps: s,
    theirProps: i,
    slot: {},
    defaultTag: Uk,
    name: "Hidden",
  });
}
let ll = Te(Bk),
  Hk = m.createContext(null);
function Vk({ children: e }) {
  let t = m.useContext(Hk);
  if (!t) return D.createElement(D.Fragment, null, e);
  let { target: n } = t;
  return n ? Kt.createPortal(D.createElement(D.Fragment, null, e), n) : null;
}
function Wk({ data: e, form: t, disabled: n, onReset: r, overrides: i }) {
  let [s, o] = m.useState(null),
    a = Mi();
  return (
    m.useEffect(() => {
      if (r && s) return a.addEventListener(s, "reset", r);
    }, [s, t, r]),
    D.createElement(
      Vk,
      null,
      D.createElement(qk, { setForm: o, formId: t }),
      x1(e).map(([u, c]) =>
        D.createElement(ll, {
          features: ks.Hidden,
          ...Sr({
            key: u,
            as: "input",
            type: "hidden",
            hidden: !0,
            readOnly: !0,
            form: t,
            disabled: n,
            name: u,
            value: c,
            ...i,
          }),
        })
      )
    )
  );
}
function qk({ setForm: e, formId: t }) {
  return (
    m.useEffect(() => {
      if (t) {
        let n = document.getElementById(t);
        n && e(n);
      }
    }, [e, t]),
    t
      ? null
      : D.createElement(ll, {
          features: ks.Hidden,
          as: "input",
          type: "hidden",
          hidden: !0,
          readOnly: !0,
          ref: (n) => {
            if (!n) return;
            let r = n.closest("form");
            r && e(r);
          },
        })
  );
}
let Kk = m.createContext(void 0);
function j1() {
  return m.useContext(Kk);
}
function uc(e) {
  let t = e.parentElement,
    n = null;
  for (; t && !(t instanceof HTMLFieldSetElement); )
    t instanceof HTMLLegendElement && (n = t), (t = t.parentElement);
  let r = (t == null ? void 0 : t.getAttribute("disabled")) === "";
  return r && Qk(n) ? !1 : r;
}
function Qk(e) {
  if (!e) return !1;
  let t = e.previousElementSibling;
  for (; t !== null; ) {
    if (t instanceof HTMLLegendElement) return !1;
    t = t.previousElementSibling;
  }
  return !0;
}
let E1 = Symbol();
function S1(e, t = !0) {
  return Object.assign(e, { [E1]: t });
}
function et(...e) {
  let t = m.useRef(e);
  m.useEffect(() => {
    t.current = e;
  }, [e]);
  let n = re((r) => {
    for (let i of t.current)
      i != null && (typeof i == "function" ? i(r) : (i.current = r));
  });
  return e.every((r) => r == null || (r == null ? void 0 : r[E1])) ? void 0 : n;
}
let cc = m.createContext(null);
cc.displayName = "DescriptionContext";
function N1() {
  let e = m.useContext(cc);
  if (e === null) {
    let t = new Error(
      "You used a <Description /> component, but it is not inside a relevant parent."
    );
    throw (Error.captureStackTrace && Error.captureStackTrace(t, N1), t);
  }
  return e;
}
function Yk() {
  var e, t;
  return (t = (e = m.useContext(cc)) == null ? void 0 : e.value) != null
    ? t
    : void 0;
}
function dc() {
  let [e, t] = m.useState([]);
  return [
    e.length > 0 ? e.join(" ") : void 0,
    m.useMemo(
      () =>
        function (n) {
          let r = re(
              (s) => (
                t((o) => [...o, s]),
                () =>
                  t((o) => {
                    let a = o.slice(),
                      u = a.indexOf(s);
                    return u !== -1 && a.splice(u, 1), a;
                  })
              )
            ),
            i = m.useMemo(
              () => ({
                register: r,
                slot: n.slot,
                name: n.name,
                props: n.props,
                value: n.value,
              }),
              [r, n.slot, n.name, n.props, n.value]
            );
          return D.createElement(cc.Provider, { value: i }, n.children);
        },
      [t]
    ),
  ];
}
let Gk = "p";
function Xk(e, t) {
  let n = m.useId(),
    r = ac(),
    { id: i = `headlessui-description-${n}`, ...s } = e,
    o = N1(),
    a = et(t);
  _e(() => o.register(i), [i, o.register]);
  let u = r || !1,
    c = m.useMemo(() => ({ ...o.slot, disabled: u }), [o.slot, u]),
    d = { ref: a, ...o.props, id: i };
  return Le()({
    ourProps: d,
    theirProps: s,
    slot: c,
    defaultTag: Gk,
    name: o.name || "Description",
  });
}
let Zk = Te(Xk),
  k1 = Object.assign(Zk, {});
var Ne = ((e) => (
  (e.Space = " "),
  (e.Enter = "Enter"),
  (e.Escape = "Escape"),
  (e.Backspace = "Backspace"),
  (e.Delete = "Delete"),
  (e.ArrowLeft = "ArrowLeft"),
  (e.ArrowUp = "ArrowUp"),
  (e.ArrowRight = "ArrowRight"),
  (e.ArrowDown = "ArrowDown"),
  (e.Home = "Home"),
  (e.End = "End"),
  (e.PageUp = "PageUp"),
  (e.PageDown = "PageDown"),
  (e.Tab = "Tab"),
  e
))(Ne || {});
let fc = m.createContext(null);
fc.displayName = "LabelContext";
function Ep() {
  let e = m.useContext(fc);
  if (e === null) {
    let t = new Error(
      "You used a <Label /> component, but it is not inside a relevant parent."
    );
    throw (Error.captureStackTrace && Error.captureStackTrace(t, Ep), t);
  }
  return e;
}
function C1(e) {
  var t, n, r;
  let i =
    (n = (t = m.useContext(fc)) == null ? void 0 : t.value) != null
      ? n
      : void 0;
  return ((r = void 0) != null ? r : 0) > 0
    ? [i, ...e].filter(Boolean).join(" ")
    : i;
}
function mc({ inherit: e = !1 } = {}) {
  let t = C1(),
    [n, r] = m.useState([]),
    i = e ? [t, ...n].filter(Boolean) : n;
  return [
    i.length > 0 ? i.join(" ") : void 0,
    m.useMemo(
      () =>
        function (s) {
          let o = re(
              (u) => (
                r((c) => [...c, u]),
                () =>
                  r((c) => {
                    let d = c.slice(),
                      f = d.indexOf(u);
                    return f !== -1 && d.splice(f, 1), d;
                  })
              )
            ),
            a = m.useMemo(
              () => ({
                register: o,
                slot: s.slot,
                name: s.name,
                props: s.props,
                value: s.value,
              }),
              [o, s.slot, s.name, s.props, s.value]
            );
          return D.createElement(fc.Provider, { value: a }, s.children);
        },
      [r]
    ),
  ];
}
let Jk = "label";
function eC(e, t) {
  var n;
  let r = m.useId(),
    i = Ep(),
    s = j1(),
    o = ac(),
    {
      id: a = `headlessui-label-${r}`,
      htmlFor: u = s ?? ((n = i.props) == null ? void 0 : n.htmlFor),
      passive: c = !1,
      ...d
    } = e,
    f = et(t);
  _e(() => i.register(a), [a, i.register]);
  let p = re((j) => {
      let y = j.currentTarget;
      if (
        (y instanceof HTMLLabelElement && j.preventDefault(),
        i.props &&
          "onClick" in i.props &&
          typeof i.props.onClick == "function" &&
          i.props.onClick(j),
        y instanceof HTMLLabelElement)
      ) {
        let h = document.getElementById(y.htmlFor);
        if (h) {
          let v = h.getAttribute("disabled");
          if (v === "true" || v === "") return;
          let b = h.getAttribute("aria-disabled");
          if (b === "true" || b === "") return;
          ((h instanceof HTMLInputElement &&
            (h.type === "radio" || h.type === "checkbox")) ||
            h.role === "radio" ||
            h.role === "checkbox" ||
            h.role === "switch") &&
            h.click(),
            h.focus({ preventScroll: !0 });
        }
      }
    }),
    g = o || !1,
    x = m.useMemo(() => ({ ...i.slot, disabled: g }), [i.slot, g]),
    w = { ref: f, ...i.props, id: a, htmlFor: u, onClick: p };
  return (
    c &&
      ("onClick" in w && (delete w.htmlFor, delete w.onClick),
      "onClick" in d && delete d.onClick),
    Le()({
      ourProps: w,
      theirProps: d,
      slot: x,
      defaultTag: u ? Jk : "div",
      name: i.name || "Label",
    })
  );
}
let tC = Te(eC),
  nC = Object.assign(tC, {}),
  rC = m.createContext(() => {});
function _1({ value: e, children: t }) {
  return D.createElement(rC.Provider, { value: e }, t);
}
function iC(e, t) {
  return e !== null &&
    t !== null &&
    typeof e == "object" &&
    typeof t == "object" &&
    "id" in e &&
    "id" in t
    ? e.id === t.id
    : e === t;
}
function sC(e = iC) {
  return m.useCallback(
    (t, n) => {
      if (typeof e == "string") {
        let r = e;
        return (t == null ? void 0 : t[r]) === (n == null ? void 0 : n[r]);
      }
      return e(t, n);
    },
    [e]
  );
}
function oC(e) {
  if (e === null) return { width: 0, height: 0 };
  let { width: t, height: n } = e.getBoundingClientRect();
  return { width: t, height: n };
}
function lC(e, t = !1) {
  let [n, r] = m.useReducer(() => ({}), {}),
    i = m.useMemo(() => oC(e), [e, n]);
  return (
    _e(() => {
      if (!e) return;
      let s = new ResizeObserver(r);
      return (
        s.observe(e),
        () => {
          s.disconnect();
        }
      );
    }, [e]),
    t ? { width: `${i.width}px`, height: `${i.height}px` } : i
  );
}
let aC = class extends Map {
  constructor(t) {
    super(), (this.factory = t);
  }
  get(t) {
    let n = super.get(t);
    return n === void 0 && ((n = this.factory(t)), this.set(t, n)), n;
  }
};
function P1(e, t) {
  let n = e(),
    r = new Set();
  return {
    getSnapshot() {
      return n;
    },
    subscribe(i) {
      return r.add(i), () => r.delete(i);
    },
    dispatch(i, ...s) {
      let o = t[i].call(n, ...s);
      o && ((n = o), r.forEach((a) => a()));
    },
  };
}
function T1(e) {
  return m.useSyncExternalStore(e.subscribe, e.getSnapshot, e.getSnapshot);
}
let uC = new aC(() =>
  P1(() => [], {
    ADD(e) {
      return this.includes(e) ? this : [...this, e];
    },
    REMOVE(e) {
      let t = this.indexOf(e);
      if (t === -1) return this;
      let n = this.slice();
      return n.splice(t, 1), n;
    },
  })
);
function Is(e, t) {
  let n = uC.get(t),
    r = m.useId(),
    i = T1(n);
  if (
    (_e(() => {
      if (e) return n.dispatch("ADD", r), () => n.dispatch("REMOVE", r);
    }, [n, e]),
    !e)
  )
    return !1;
  let s = i.indexOf(r),
    o = i.length;
  return s === -1 && ((s = o), (o += 1)), s === o - 1;
}
let Yf = new Map(),
  Do = new Map();
function l0(e) {
  var t;
  let n = (t = Do.get(e)) != null ? t : 0;
  return (
    Do.set(e, n + 1),
    n !== 0
      ? () => a0(e)
      : (Yf.set(e, {
          "aria-hidden": e.getAttribute("aria-hidden"),
          inert: e.inert,
        }),
        e.setAttribute("aria-hidden", "true"),
        (e.inert = !0),
        () => a0(e))
  );
}
function a0(e) {
  var t;
  let n = (t = Do.get(e)) != null ? t : 1;
  if ((n === 1 ? Do.delete(e) : Do.set(e, n - 1), n !== 1)) return;
  let r = Yf.get(e);
  r &&
    (r["aria-hidden"] === null
      ? e.removeAttribute("aria-hidden")
      : e.setAttribute("aria-hidden", r["aria-hidden"]),
    (e.inert = r.inert),
    Yf.delete(e));
}
function $1(e, { allowed: t, disallowed: n } = {}) {
  let r = Is(e, "inert-others");
  _e(() => {
    var i, s;
    if (!r) return;
    let o = Yn();
    for (let u of (i = n == null ? void 0 : n()) != null ? i : [])
      u && o.add(l0(u));
    let a = (s = t == null ? void 0 : t()) != null ? s : [];
    for (let u of a) {
      if (!u) continue;
      let c = hr(u);
      if (!c) continue;
      let d = u.parentElement;
      for (; d && d !== c.body; ) {
        for (let f of d.children) a.some((p) => f.contains(p)) || o.add(l0(f));
        d = d.parentElement;
      }
    }
    return o.dispose;
  }, [r, t, n]);
}
function R1(e, t, n) {
  let r = gr((i) => {
    let s = i.getBoundingClientRect();
    s.x === 0 && s.y === 0 && s.width === 0 && s.height === 0 && n();
  });
  m.useEffect(() => {
    if (!e) return;
    let i = t === null ? null : t instanceof HTMLElement ? t : t.current;
    if (!i) return;
    let s = Yn();
    if (typeof ResizeObserver < "u") {
      let o = new ResizeObserver(() => r.current(i));
      o.observe(i), s.add(() => o.disconnect());
    }
    if (typeof IntersectionObserver < "u") {
      let o = new IntersectionObserver(() => r.current(i));
      o.observe(i), s.add(() => o.disconnect());
    }
    return () => s.dispose();
  }, [t, r, e]);
}
let hu = [
    "[contentEditable=true]",
    "[tabindex]",
    "a[href]",
    "area[href]",
    "button:not([disabled])",
    "iframe",
    "input:not([disabled])",
    "select:not([disabled])",
    "textarea:not([disabled])",
  ]
    .map((e) => `${e}:not([tabindex='-1'])`)
    .join(","),
  cC = ["[data-autofocus]"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var Rt = ((e) => (
    (e[(e.First = 1)] = "First"),
    (e[(e.Previous = 2)] = "Previous"),
    (e[(e.Next = 4)] = "Next"),
    (e[(e.Last = 8)] = "Last"),
    (e[(e.WrapAround = 16)] = "WrapAround"),
    (e[(e.NoScroll = 32)] = "NoScroll"),
    (e[(e.AutoFocus = 64)] = "AutoFocus"),
    e
  ))(Rt || {}),
  al = ((e) => (
    (e[(e.Error = 0)] = "Error"),
    (e[(e.Overflow = 1)] = "Overflow"),
    (e[(e.Success = 2)] = "Success"),
    (e[(e.Underflow = 3)] = "Underflow"),
    e
  ))(al || {}),
  dC = ((e) => (
    (e[(e.Previous = -1)] = "Previous"), (e[(e.Next = 1)] = "Next"), e
  ))(dC || {});
function F1(e = document.body) {
  return e == null
    ? []
    : Array.from(e.querySelectorAll(hu)).sort((t, n) =>
        Math.sign(
          (t.tabIndex || Number.MAX_SAFE_INTEGER) -
            (n.tabIndex || Number.MAX_SAFE_INTEGER)
        )
      );
}
function fC(e = document.body) {
  return e == null
    ? []
    : Array.from(e.querySelectorAll(cC)).sort((t, n) =>
        Math.sign(
          (t.tabIndex || Number.MAX_SAFE_INTEGER) -
            (n.tabIndex || Number.MAX_SAFE_INTEGER)
        )
      );
}
var Sp = ((e) => (
  (e[(e.Strict = 0)] = "Strict"), (e[(e.Loose = 1)] = "Loose"), e
))(Sp || {});
function Np(e, t = 0) {
  var n;
  return e === ((n = hr(e)) == null ? void 0 : n.body)
    ? !1
    : Qt(t, {
        0() {
          return e.matches(hu);
        },
        1() {
          let r = e;
          for (; r !== null; ) {
            if (r.matches(hu)) return !0;
            r = r.parentElement;
          }
          return !1;
        },
      });
}
function L1(e) {
  let t = hr(e);
  Yn().nextFrame(() => {
    t && !Np(t.activeElement, 0) && Wn(e);
  });
}
var mC = ((e) => (
  (e[(e.Keyboard = 0)] = "Keyboard"), (e[(e.Mouse = 1)] = "Mouse"), e
))(mC || {});
typeof window < "u" &&
  typeof document < "u" &&
  (document.addEventListener(
    "keydown",
    (e) => {
      e.metaKey ||
        e.altKey ||
        e.ctrlKey ||
        (document.documentElement.dataset.headlessuiFocusVisible = "");
    },
    !0
  ),
  document.addEventListener(
    "click",
    (e) => {
      e.detail === 1
        ? delete document.documentElement.dataset.headlessuiFocusVisible
        : e.detail === 0 &&
          (document.documentElement.dataset.headlessuiFocusVisible = "");
    },
    !0
  ));
function Wn(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let pC = ["textarea", "input"].join(",");
function hC(e) {
  var t, n;
  return (n =
    (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, pC)) !=
    null
    ? n
    : !1;
}
function kp(e, t = (n) => n) {
  return e.slice().sort((n, r) => {
    let i = t(n),
      s = t(r);
    if (i === null || s === null) return 0;
    let o = i.compareDocumentPosition(s);
    return o & Node.DOCUMENT_POSITION_FOLLOWING
      ? -1
      : o & Node.DOCUMENT_POSITION_PRECEDING
      ? 1
      : 0;
  });
}
function gC(e, t) {
  return Ur(F1(), t, { relativeTo: e });
}
function Ur(
  e,
  t,
  { sorted: n = !0, relativeTo: r = null, skipElements: i = [] } = {}
) {
  let s = Array.isArray(e)
      ? e.length > 0
        ? e[0].ownerDocument
        : document
      : e.ownerDocument,
    o = Array.isArray(e) ? (n ? kp(e) : e) : t & 64 ? fC(e) : F1(e);
  i.length > 0 &&
    o.length > 1 &&
    (o = o.filter(
      (g) =>
        !i.some((x) =>
          x != null && "current" in x
            ? (x == null ? void 0 : x.current) === g
            : x === g
        )
    )),
    (r = r ?? s.activeElement);
  let a = (() => {
      if (t & 5) return 1;
      if (t & 10) return -1;
      throw new Error(
        "Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last"
      );
    })(),
    u = (() => {
      if (t & 1) return 0;
      if (t & 2) return Math.max(0, o.indexOf(r)) - 1;
      if (t & 4) return Math.max(0, o.indexOf(r)) + 1;
      if (t & 8) return o.length - 1;
      throw new Error(
        "Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last"
      );
    })(),
    c = t & 32 ? { preventScroll: !0 } : {},
    d = 0,
    f = o.length,
    p;
  do {
    if (d >= f || d + f <= 0) return 0;
    let g = u + d;
    if (t & 16) g = (g + f) % f;
    else {
      if (g < 0) return 3;
      if (g >= f) return 1;
    }
    (p = o[g]), p == null || p.focus(c), (d += a);
  } while (p !== s.activeElement);
  return t & 6 && hC(p) && p.select(), 2;
}
function O1() {
  return (
    /iPhone/gi.test(window.navigator.platform) ||
    (/Mac/gi.test(window.navigator.platform) &&
      window.navigator.maxTouchPoints > 0)
  );
}
function yC() {
  return /Android/gi.test(window.navigator.userAgent);
}
function vC() {
  return O1() || yC();
}
function co(e, t, n, r) {
  let i = gr(n);
  m.useEffect(() => {
    if (!e) return;
    function s(o) {
      i.current(o);
    }
    return (
      document.addEventListener(t, s, r),
      () => document.removeEventListener(t, s, r)
    );
  }, [e, t, r]);
}
function D1(e, t, n, r) {
  let i = gr(n);
  m.useEffect(() => {
    if (!e) return;
    function s(o) {
      i.current(o);
    }
    return (
      window.addEventListener(t, s, r),
      () => window.removeEventListener(t, s, r)
    );
  }, [e, t, r]);
}
const u0 = 30;
function A1(e, t, n) {
  let r = Is(e, "outside-click"),
    i = gr(n),
    s = m.useCallback(
      function (u, c) {
        if (u.defaultPrevented) return;
        let d = c(u);
        if (d === null || !d.getRootNode().contains(d) || !d.isConnected)
          return;
        let f = (function p(g) {
          return typeof g == "function"
            ? p(g())
            : Array.isArray(g) || g instanceof Set
            ? g
            : [g];
        })(t);
        for (let p of f)
          if (
            p !== null &&
            (p.contains(d) || (u.composed && u.composedPath().includes(p)))
          )
            return;
        return (
          !Np(d, Sp.Loose) && d.tabIndex !== -1 && u.preventDefault(),
          i.current(u, d)
        );
      },
      [i, t]
    ),
    o = m.useRef(null);
  co(
    r,
    "pointerdown",
    (u) => {
      var c, d;
      o.current =
        ((d = (c = u.composedPath) == null ? void 0 : c.call(u)) == null
          ? void 0
          : d[0]) || u.target;
    },
    !0
  ),
    co(
      r,
      "mousedown",
      (u) => {
        var c, d;
        o.current =
          ((d = (c = u.composedPath) == null ? void 0 : c.call(u)) == null
            ? void 0
            : d[0]) || u.target;
      },
      !0
    ),
    co(
      r,
      "click",
      (u) => {
        vC() || (o.current && (s(u, () => o.current), (o.current = null)));
      },
      !0
    );
  let a = m.useRef({ x: 0, y: 0 });
  co(
    r,
    "touchstart",
    (u) => {
      (a.current.x = u.touches[0].clientX),
        (a.current.y = u.touches[0].clientY);
    },
    !0
  ),
    co(
      r,
      "touchend",
      (u) => {
        let c = {
          x: u.changedTouches[0].clientX,
          y: u.changedTouches[0].clientY,
        };
        if (
          !(
            Math.abs(c.x - a.current.x) >= u0 ||
            Math.abs(c.y - a.current.y) >= u0
          )
        )
          return s(u, () =>
            u.target instanceof HTMLElement ? u.target : null
          );
      },
      !0
    ),
    D1(
      r,
      "blur",
      (u) =>
        s(u, () =>
          window.document.activeElement instanceof HTMLIFrameElement
            ? window.document.activeElement
            : null
        ),
      !0
    );
}
function Ms(...e) {
  return m.useMemo(() => hr(...e), [...e]);
}
function I1(e, t, n, r) {
  let i = gr(n);
  m.useEffect(() => {
    e = e ?? window;
    function s(o) {
      i.current(o);
    }
    return e.addEventListener(t, s, r), () => e.removeEventListener(t, s, r);
  }, [e, t, r]);
}
function M1(e, t) {
  return m.useMemo(() => {
    var n;
    if (e.type) return e.type;
    let r = (n = e.as) != null ? n : "button";
    if (
      (typeof r == "string" && r.toLowerCase() === "button") ||
      ((t == null ? void 0 : t.tagName) === "BUTTON" && !t.hasAttribute("type"))
    )
      return "button";
  }, [e.type, e.as, t]);
}
function xC() {
  let e;
  return {
    before({ doc: t }) {
      var n;
      let r = t.documentElement,
        i = (n = t.defaultView) != null ? n : window;
      e = Math.max(0, i.innerWidth - r.clientWidth);
    },
    after({ doc: t, d: n }) {
      let r = t.documentElement,
        i = Math.max(0, r.clientWidth - r.offsetWidth),
        s = Math.max(0, e - i);
      n.style(r, "paddingRight", `${s}px`);
    },
  };
}
function wC() {
  return O1()
    ? {
        before({ doc: e, d: t, meta: n }) {
          function r(i) {
            return n.containers.flatMap((s) => s()).some((s) => s.contains(i));
          }
          t.microTask(() => {
            var i;
            if (
              window.getComputedStyle(e.documentElement).scrollBehavior !==
              "auto"
            ) {
              let a = Yn();
              a.style(e.documentElement, "scrollBehavior", "auto"),
                t.add(() => t.microTask(() => a.dispose()));
            }
            let s = (i = window.scrollY) != null ? i : window.pageYOffset,
              o = null;
            t.addEventListener(
              e,
              "click",
              (a) => {
                if (a.target instanceof HTMLElement)
                  try {
                    let u = a.target.closest("a");
                    if (!u) return;
                    let { hash: c } = new URL(u.href),
                      d = e.querySelector(c);
                    d && !r(d) && (o = d);
                  } catch {}
              },
              !0
            ),
              t.addEventListener(e, "touchstart", (a) => {
                if (a.target instanceof HTMLElement)
                  if (r(a.target)) {
                    let u = a.target;
                    for (; u.parentElement && r(u.parentElement); )
                      u = u.parentElement;
                    t.style(u, "overscrollBehavior", "contain");
                  } else t.style(a.target, "touchAction", "none");
              }),
              t.addEventListener(
                e,
                "touchmove",
                (a) => {
                  if (a.target instanceof HTMLElement) {
                    if (a.target.tagName === "INPUT") return;
                    if (r(a.target)) {
                      let u = a.target;
                      for (
                        ;
                        u.parentElement &&
                        u.dataset.headlessuiPortal !== "" &&
                        !(
                          u.scrollHeight > u.clientHeight ||
                          u.scrollWidth > u.clientWidth
                        );

                      )
                        u = u.parentElement;
                      u.dataset.headlessuiPortal === "" && a.preventDefault();
                    } else a.preventDefault();
                  }
                },
                { passive: !1 }
              ),
              t.add(() => {
                var a;
                let u = (a = window.scrollY) != null ? a : window.pageYOffset;
                s !== u && window.scrollTo(0, s),
                  o &&
                    o.isConnected &&
                    (o.scrollIntoView({ block: "nearest" }), (o = null));
              });
          });
        },
      }
    : {};
}
function bC() {
  return {
    before({ doc: e, d: t }) {
      t.style(e.documentElement, "overflow", "hidden");
    },
  };
}
function jC(e) {
  let t = {};
  for (let n of e) Object.assign(t, n(t));
  return t;
}
let pi = P1(() => new Map(), {
  PUSH(e, t) {
    var n;
    let r =
      (n = this.get(e)) != null
        ? n
        : { doc: e, count: 0, d: Yn(), meta: new Set() };
    return r.count++, r.meta.add(t), this.set(e, r), this;
  },
  POP(e, t) {
    let n = this.get(e);
    return n && (n.count--, n.meta.delete(t)), this;
  },
  SCROLL_PREVENT({ doc: e, d: t, meta: n }) {
    let r = { doc: e, d: t, meta: jC(n) },
      i = [wC(), xC(), bC()];
    i.forEach(({ before: s }) => (s == null ? void 0 : s(r))),
      i.forEach(({ after: s }) => (s == null ? void 0 : s(r)));
  },
  SCROLL_ALLOW({ d: e }) {
    e.dispose();
  },
  TEARDOWN({ doc: e }) {
    this.delete(e);
  },
});
pi.subscribe(() => {
  let e = pi.getSnapshot(),
    t = new Map();
  for (let [n] of e) t.set(n, n.documentElement.style.overflow);
  for (let n of e.values()) {
    let r = t.get(n.doc) === "hidden",
      i = n.count !== 0;
    ((i && !r) || (!i && r)) &&
      pi.dispatch(n.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", n),
      n.count === 0 && pi.dispatch("TEARDOWN", n);
  }
});
function EC(e, t, n = () => ({ containers: [] })) {
  let r = T1(pi),
    i = t ? r.get(t) : void 0,
    s = i ? i.count > 0 : !1;
  return (
    _e(() => {
      if (!(!t || !e))
        return pi.dispatch("PUSH", t, n), () => pi.dispatch("POP", t, n);
    }, [e, t]),
    s
  );
}
function z1(e, t, n = () => [document.body]) {
  let r = Is(e, "scroll-lock");
  EC(r, t, (i) => {
    var s;
    return { containers: [...((s = i.containers) != null ? s : []), n] };
  });
}
function c0(e) {
  return [e.screenX, e.screenY];
}
function SC() {
  let e = m.useRef([-1, -1]);
  return {
    wasMoved(t) {
      let n = c0(t);
      return e.current[0] === n[0] && e.current[1] === n[1]
        ? !1
        : ((e.current = n), !0);
    },
    update(t) {
      e.current = c0(t);
    },
  };
}
function NC(e = 0) {
  let [t, n] = m.useState(e),
    r = m.useCallback((u) => n(u), [t]),
    i = m.useCallback((u) => n((c) => c | u), [t]),
    s = m.useCallback((u) => (t & u) === u, [t]),
    o = m.useCallback((u) => n((c) => c & ~u), [n]),
    a = m.useCallback((u) => n((c) => c ^ u), [n]);
  return {
    flags: t,
    setFlag: r,
    addFlag: i,
    hasFlag: s,
    removeFlag: o,
    toggleFlag: a,
  };
}
var kC = {},
  d0,
  f0;
typeof process < "u" &&
  typeof globalThis < "u" &&
  typeof Element < "u" &&
  ((d0 = process == null ? void 0 : kC) == null ? void 0 : d0.NODE_ENV) ===
    "test" &&
  typeof ((f0 = Element == null ? void 0 : Element.prototype) == null
    ? void 0
    : f0.getAnimations) > "u" &&
  (Element.prototype.getAnimations = function () {
    return (
      console.warn(
        [
          "Headless UI has polyfilled `Element.prototype.getAnimations` for your tests.",
          "Please install a proper polyfill e.g. `jsdom-testing-mocks`, to silence these warnings.",
          "",
          "Example usage:",
          "```js",
          "import { mockAnimationsApi } from 'jsdom-testing-mocks'",
          "mockAnimationsApi()",
          "```",
        ].join(`
`)
      ),
      []
    );
  });
var CC = ((e) => (
  (e[(e.None = 0)] = "None"),
  (e[(e.Closed = 1)] = "Closed"),
  (e[(e.Enter = 2)] = "Enter"),
  (e[(e.Leave = 4)] = "Leave"),
  e
))(CC || {});
function Cp(e) {
  let t = {};
  for (let n in e) e[n] === !0 && (t[`data-${n}`] = "");
  return t;
}
function _p(e, t, n, r) {
  let [i, s] = m.useState(n),
    { hasFlag: o, addFlag: a, removeFlag: u } = NC(e && i ? 3 : 0),
    c = m.useRef(!1),
    d = m.useRef(!1),
    f = Mi();
  return (
    _e(() => {
      var p;
      if (e) {
        if ((n && s(!0), !t)) {
          n && a(3);
          return;
        }
        return (
          (p = r == null ? void 0 : r.start) == null || p.call(r, n),
          _C(t, {
            inFlight: c,
            prepare() {
              d.current ? (d.current = !1) : (d.current = c.current),
                (c.current = !0),
                !d.current && (n ? (a(3), u(4)) : (a(4), u(2)));
            },
            run() {
              d.current ? (n ? (u(3), a(4)) : (u(4), a(3))) : n ? u(1) : a(1);
            },
            done() {
              var g;
              (d.current &&
                typeof t.getAnimations == "function" &&
                t.getAnimations().length > 0) ||
                ((c.current = !1),
                u(7),
                n || s(!1),
                (g = r == null ? void 0 : r.end) == null || g.call(r, n));
            },
          })
        );
      }
    }, [e, n, t, f]),
    e
      ? [
          i,
          { closed: o(1), enter: o(2), leave: o(4), transition: o(2) || o(4) },
        ]
      : [
          n,
          { closed: void 0, enter: void 0, leave: void 0, transition: void 0 },
        ]
  );
}
function _C(e, { prepare: t, run: n, done: r, inFlight: i }) {
  let s = Yn();
  return (
    TC(e, { prepare: t, inFlight: i }),
    s.nextFrame(() => {
      n(),
        s.requestAnimationFrame(() => {
          s.add(PC(e, r));
        });
    }),
    s.dispose
  );
}
function PC(e, t) {
  var n, r;
  let i = Yn();
  if (!e) return i.dispose;
  let s = !1;
  i.add(() => {
    s = !0;
  });
  let o =
    (r =
      (n = e.getAnimations) == null
        ? void 0
        : n.call(e).filter((a) => a instanceof CSSTransition)) != null
      ? r
      : [];
  return o.length === 0
    ? (t(), i.dispose)
    : (Promise.allSettled(o.map((a) => a.finished)).then(() => {
        s || t();
      }),
      i.dispose);
}
function TC(e, { inFlight: t, prepare: n }) {
  if (t != null && t.current) {
    n();
    return;
  }
  let r = e.style.transition;
  (e.style.transition = "none"), n(), e.offsetHeight, (e.style.transition = r);
}
function $C(e, { container: t, accept: n, walk: r }) {
  let i = m.useRef(n),
    s = m.useRef(r);
  m.useEffect(() => {
    (i.current = n), (s.current = r);
  }, [n, r]),
    _e(() => {
      if (!t || !e) return;
      let o = hr(t);
      if (!o) return;
      let a = i.current,
        u = s.current,
        c = Object.assign((f) => a(f), { acceptNode: a }),
        d = o.createTreeWalker(t, NodeFilter.SHOW_ELEMENT, c, !1);
      for (; d.nextNode(); ) u(d.currentNode);
    }, [t, e, i, s]);
}
function Pp(e, t) {
  let n = m.useRef([]),
    r = re(e);
  m.useEffect(() => {
    let i = [...n.current];
    for (let [s, o] of t.entries())
      if (n.current[s] !== o) {
        let a = r(t, i);
        return (n.current = t), a;
      }
  }, [r, ...t]);
}
function pc() {
  return typeof window < "u";
}
function zs(e) {
  return U1(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function tn(e) {
  var t;
  return (
    (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) ||
    window
  );
}
function Gn(e) {
  var t;
  return (t = (U1(e) ? e.ownerDocument : e.document) || window.document) == null
    ? void 0
    : t.documentElement;
}
function U1(e) {
  return pc() ? e instanceof Node || e instanceof tn(e).Node : !1;
}
function Ft(e) {
  return pc() ? e instanceof Element || e instanceof tn(e).Element : !1;
}
function Qn(e) {
  return pc() ? e instanceof HTMLElement || e instanceof tn(e).HTMLElement : !1;
}
function m0(e) {
  return !pc() || typeof ShadowRoot > "u"
    ? !1
    : e instanceof ShadowRoot || e instanceof tn(e).ShadowRoot;
}
function Nl(e) {
  const { overflow: t, overflowX: n, overflowY: r, display: i } = Rn(e);
  return (
    /auto|scroll|overlay|hidden|clip/.test(t + r + n) &&
    !["inline", "contents"].includes(i)
  );
}
function RC(e) {
  return ["table", "td", "th"].includes(zs(e));
}
function hc(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function Tp(e) {
  const t = $p(),
    n = Ft(e) ? Rn(e) : e;
  return (
    n.transform !== "none" ||
    n.perspective !== "none" ||
    (n.containerType ? n.containerType !== "normal" : !1) ||
    (!t && (n.backdropFilter ? n.backdropFilter !== "none" : !1)) ||
    (!t && (n.filter ? n.filter !== "none" : !1)) ||
    ["transform", "perspective", "filter"].some((r) =>
      (n.willChange || "").includes(r)
    ) ||
    ["paint", "layout", "strict", "content"].some((r) =>
      (n.contain || "").includes(r)
    )
  );
}
function FC(e) {
  let t = qr(e);
  for (; Qn(t) && !Cs(t); ) {
    if (Tp(t)) return t;
    if (hc(t)) return null;
    t = qr(t);
  }
  return null;
}
function $p() {
  return typeof CSS > "u" || !CSS.supports
    ? !1
    : CSS.supports("-webkit-backdrop-filter", "none");
}
function Cs(e) {
  return ["html", "body", "#document"].includes(zs(e));
}
function Rn(e) {
  return tn(e).getComputedStyle(e);
}
function gc(e) {
  return Ft(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function qr(e) {
  if (zs(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || (m0(e) && e.host) || Gn(e);
  return m0(t) ? t.host : t;
}
function B1(e) {
  const t = qr(e);
  return Cs(t)
    ? e.ownerDocument
      ? e.ownerDocument.body
      : e.body
    : Qn(t) && Nl(t)
    ? t
    : B1(t);
}
function ul(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const i = B1(e),
    s = i === ((r = e.ownerDocument) == null ? void 0 : r.body),
    o = tn(i);
  if (s) {
    const a = Gf(o);
    return t.concat(
      o,
      o.visualViewport || [],
      Nl(i) ? i : [],
      a && n ? ul(a) : []
    );
  }
  return t.concat(i, ul(i, [], n));
}
function Gf(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function LC() {
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands)
    ? e.brands
        .map((t) => {
          let { brand: n, version: r } = t;
          return n + "/" + r;
        })
        .join(" ")
    : navigator.userAgent;
}
const Fi = Math.min,
  kt = Math.max,
  cl = Math.round,
  la = Math.floor,
  qn = (e) => ({ x: e, y: e }),
  OC = { left: "right", right: "left", bottom: "top", top: "bottom" },
  DC = { start: "end", end: "start" };
function p0(e, t, n) {
  return kt(e, Fi(t, n));
}
function Us(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Kr(e) {
  return e.split("-")[0];
}
function kl(e) {
  return e.split("-")[1];
}
function H1(e) {
  return e === "x" ? "y" : "x";
}
function V1(e) {
  return e === "y" ? "height" : "width";
}
function Li(e) {
  return ["top", "bottom"].includes(Kr(e)) ? "y" : "x";
}
function W1(e) {
  return H1(Li(e));
}
function AC(e, t, n) {
  n === void 0 && (n = !1);
  const r = kl(e),
    i = W1(e),
    s = V1(i);
  let o =
    i === "x"
      ? r === (n ? "end" : "start")
        ? "right"
        : "left"
      : r === "start"
      ? "bottom"
      : "top";
  return t.reference[s] > t.floating[s] && (o = gu(o)), [o, gu(o)];
}
function IC(e) {
  const t = gu(e);
  return [Xf(e), t, Xf(t)];
}
function Xf(e) {
  return e.replace(/start|end/g, (t) => DC[t]);
}
function MC(e, t, n) {
  const r = ["left", "right"],
    i = ["right", "left"],
    s = ["top", "bottom"],
    o = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? (t ? i : r) : t ? r : i;
    case "left":
    case "right":
      return t ? s : o;
    default:
      return [];
  }
}
function zC(e, t, n, r) {
  const i = kl(e);
  let s = MC(Kr(e), n === "start", r);
  return (
    i && ((s = s.map((o) => o + "-" + i)), t && (s = s.concat(s.map(Xf)))), s
  );
}
function gu(e) {
  return e.replace(/left|right|bottom|top/g, (t) => OC[t]);
}
function UC(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function BC(e) {
  return typeof e != "number"
    ? UC(e)
    : { top: e, right: e, bottom: e, left: e };
}
function yu(e) {
  const { x: t, y: n, width: r, height: i } = e;
  return {
    width: r,
    height: i,
    top: n,
    left: t,
    right: t + r,
    bottom: n + i,
    x: t,
    y: n,
  };
}
function h0(e, t, n) {
  let { reference: r, floating: i } = e;
  const s = Li(t),
    o = W1(t),
    a = V1(o),
    u = Kr(t),
    c = s === "y",
    d = r.x + r.width / 2 - i.width / 2,
    f = r.y + r.height / 2 - i.height / 2,
    p = r[a] / 2 - i[a] / 2;
  let g;
  switch (u) {
    case "top":
      g = { x: d, y: r.y - i.height };
      break;
    case "bottom":
      g = { x: d, y: r.y + r.height };
      break;
    case "right":
      g = { x: r.x + r.width, y: f };
      break;
    case "left":
      g = { x: r.x - i.width, y: f };
      break;
    default:
      g = { x: r.x, y: r.y };
  }
  switch (kl(t)) {
    case "start":
      g[o] -= p * (n && c ? -1 : 1);
      break;
    case "end":
      g[o] += p * (n && c ? -1 : 1);
      break;
  }
  return g;
}
const HC = async (e, t, n) => {
  const {
      placement: r = "bottom",
      strategy: i = "absolute",
      middleware: s = [],
      platform: o,
    } = n,
    a = s.filter(Boolean),
    u = await (o.isRTL == null ? void 0 : o.isRTL(t));
  let c = await o.getElementRects({ reference: e, floating: t, strategy: i }),
    { x: d, y: f } = h0(c, r, u),
    p = r,
    g = {},
    x = 0;
  for (let w = 0; w < a.length; w++) {
    const { name: j, fn: y } = a[w],
      {
        x: h,
        y: v,
        data: b,
        reset: S,
      } = await y({
        x: d,
        y: f,
        initialPlacement: r,
        placement: p,
        strategy: i,
        middlewareData: g,
        rects: c,
        platform: o,
        elements: { reference: e, floating: t },
      });
    (d = h ?? d),
      (f = v ?? f),
      (g = { ...g, [j]: { ...g[j], ...b } }),
      S &&
        x <= 50 &&
        (x++,
        typeof S == "object" &&
          (S.placement && (p = S.placement),
          S.rects &&
            (c =
              S.rects === !0
                ? await o.getElementRects({
                    reference: e,
                    floating: t,
                    strategy: i,
                  })
                : S.rects),
          ({ x: d, y: f } = h0(c, p, u))),
        (w = -1));
  }
  return { x: d, y: f, placement: p, strategy: i, middlewareData: g };
};
async function yc(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: r, y: i, platform: s, rects: o, elements: a, strategy: u } = e,
    {
      boundary: c = "clippingAncestors",
      rootBoundary: d = "viewport",
      elementContext: f = "floating",
      altBoundary: p = !1,
      padding: g = 0,
    } = Us(t, e),
    x = BC(g),
    j = a[p ? (f === "floating" ? "reference" : "floating") : f],
    y = yu(
      await s.getClippingRect({
        element:
          (n = await (s.isElement == null ? void 0 : s.isElement(j))) == null ||
          n
            ? j
            : j.contextElement ||
              (await (s.getDocumentElement == null
                ? void 0
                : s.getDocumentElement(a.floating))),
        boundary: c,
        rootBoundary: d,
        strategy: u,
      })
    ),
    h =
      f === "floating"
        ? { x: r, y: i, width: o.floating.width, height: o.floating.height }
        : o.reference,
    v = await (s.getOffsetParent == null
      ? void 0
      : s.getOffsetParent(a.floating)),
    b = (await (s.isElement == null ? void 0 : s.isElement(v)))
      ? (await (s.getScale == null ? void 0 : s.getScale(v))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    S = yu(
      s.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: a,
            rect: h,
            offsetParent: v,
            strategy: u,
          })
        : h
    );
  return {
    top: (y.top - S.top + x.top) / b.y,
    bottom: (S.bottom - y.bottom + x.bottom) / b.y,
    left: (y.left - S.left + x.left) / b.x,
    right: (S.right - y.right + x.right) / b.x,
  };
}
const VC = function (e) {
  return (
    e === void 0 && (e = {}),
    {
      name: "flip",
      options: e,
      async fn(t) {
        var n, r;
        const {
            placement: i,
            middlewareData: s,
            rects: o,
            initialPlacement: a,
            platform: u,
            elements: c,
          } = t,
          {
            mainAxis: d = !0,
            crossAxis: f = !0,
            fallbackPlacements: p,
            fallbackStrategy: g = "bestFit",
            fallbackAxisSideDirection: x = "none",
            flipAlignment: w = !0,
            ...j
          } = Us(e, t);
        if ((n = s.arrow) != null && n.alignmentOffset) return {};
        const y = Kr(i),
          h = Li(a),
          v = Kr(a) === a,
          b = await (u.isRTL == null ? void 0 : u.isRTL(c.floating)),
          S = p || (v || !w ? [gu(a)] : IC(a)),
          E = x !== "none";
        !p && E && S.push(...zC(a, w, x, b));
        const N = [a, ...S],
          k = await yc(t, j),
          L = [];
        let F = ((r = s.flip) == null ? void 0 : r.overflows) || [];
        if ((d && L.push(k[y]), f)) {
          const K = AC(i, o, b);
          L.push(k[K[0]], k[K[1]]);
        }
        if (
          ((F = [...F, { placement: i, overflows: L }]),
          !L.every((K) => K <= 0))
        ) {
          var z, A;
          const K = (((z = s.flip) == null ? void 0 : z.index) || 0) + 1,
            ae = N[K];
          if (ae)
            return {
              data: { index: K, overflows: F },
              reset: { placement: ae },
            };
          let le =
            (A = F.filter((Z) => Z.overflows[0] <= 0).sort(
              (Z, T) => Z.overflows[1] - T.overflows[1]
            )[0]) == null
              ? void 0
              : A.placement;
          if (!le)
            switch (g) {
              case "bestFit": {
                var H;
                const Z =
                  (H = F.filter((T) => {
                    if (E) {
                      const I = Li(T.placement);
                      return I === h || I === "y";
                    }
                    return !0;
                  })
                    .map((T) => [
                      T.placement,
                      T.overflows
                        .filter((I) => I > 0)
                        .reduce((I, W) => I + W, 0),
                    ])
                    .sort((T, I) => T[1] - I[1])[0]) == null
                    ? void 0
                    : H[0];
                Z && (le = Z);
                break;
              }
              case "initialPlacement":
                le = a;
                break;
            }
          if (i !== le) return { reset: { placement: le } };
        }
        return {};
      },
    }
  );
};
async function WC(e, t) {
  const { placement: n, platform: r, elements: i } = e,
    s = await (r.isRTL == null ? void 0 : r.isRTL(i.floating)),
    o = Kr(n),
    a = kl(n),
    u = Li(n) === "y",
    c = ["left", "top"].includes(o) ? -1 : 1,
    d = s && u ? -1 : 1,
    f = Us(t, e);
  let {
    mainAxis: p,
    crossAxis: g,
    alignmentAxis: x,
  } = typeof f == "number"
    ? { mainAxis: f, crossAxis: 0, alignmentAxis: null }
    : {
        mainAxis: f.mainAxis || 0,
        crossAxis: f.crossAxis || 0,
        alignmentAxis: f.alignmentAxis,
      };
  return (
    a && typeof x == "number" && (g = a === "end" ? x * -1 : x),
    u ? { x: g * d, y: p * c } : { x: p * c, y: g * d }
  );
}
const qC = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: "offset",
        options: e,
        async fn(t) {
          var n, r;
          const { x: i, y: s, placement: o, middlewareData: a } = t,
            u = await WC(t, e);
          return o === ((n = a.offset) == null ? void 0 : n.placement) &&
            (r = a.arrow) != null &&
            r.alignmentOffset
            ? {}
            : { x: i + u.x, y: s + u.y, data: { ...u, placement: o } };
        },
      }
    );
  },
  KC = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "shift",
        options: e,
        async fn(t) {
          const { x: n, y: r, placement: i } = t,
            {
              mainAxis: s = !0,
              crossAxis: o = !1,
              limiter: a = {
                fn: (j) => {
                  let { x: y, y: h } = j;
                  return { x: y, y: h };
                },
              },
              ...u
            } = Us(e, t),
            c = { x: n, y: r },
            d = await yc(t, u),
            f = Li(Kr(i)),
            p = H1(f);
          let g = c[p],
            x = c[f];
          if (s) {
            const j = p === "y" ? "top" : "left",
              y = p === "y" ? "bottom" : "right",
              h = g + d[j],
              v = g - d[y];
            g = p0(h, g, v);
          }
          if (o) {
            const j = f === "y" ? "top" : "left",
              y = f === "y" ? "bottom" : "right",
              h = x + d[j],
              v = x - d[y];
            x = p0(h, x, v);
          }
          const w = a.fn({ ...t, [p]: g, [f]: x });
          return {
            ...w,
            data: { x: w.x - n, y: w.y - r, enabled: { [p]: s, [f]: o } },
          };
        },
      }
    );
  },
  QC = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "size",
        options: e,
        async fn(t) {
          var n, r;
          const { placement: i, rects: s, platform: o, elements: a } = t,
            { apply: u = () => {}, ...c } = Us(e, t),
            d = await yc(t, c),
            f = Kr(i),
            p = kl(i),
            g = Li(i) === "y",
            { width: x, height: w } = s.floating;
          let j, y;
          f === "top" || f === "bottom"
            ? ((j = f),
              (y =
                p ===
                ((await (o.isRTL == null ? void 0 : o.isRTL(a.floating)))
                  ? "start"
                  : "end")
                  ? "left"
                  : "right"))
            : ((y = f), (j = p === "end" ? "top" : "bottom"));
          const h = w - d.top - d.bottom,
            v = x - d.left - d.right,
            b = Fi(w - d[j], h),
            S = Fi(x - d[y], v),
            E = !t.middlewareData.shift;
          let N = b,
            k = S;
          if (
            ((n = t.middlewareData.shift) != null && n.enabled.x && (k = v),
            (r = t.middlewareData.shift) != null && r.enabled.y && (N = h),
            E && !p)
          ) {
            const F = kt(d.left, 0),
              z = kt(d.right, 0),
              A = kt(d.top, 0),
              H = kt(d.bottom, 0);
            g
              ? (k = x - 2 * (F !== 0 || z !== 0 ? F + z : kt(d.left, d.right)))
              : (N =
                  w - 2 * (A !== 0 || H !== 0 ? A + H : kt(d.top, d.bottom)));
          }
          await u({ ...t, availableWidth: k, availableHeight: N });
          const L = await o.getDimensions(a.floating);
          return x !== L.width || w !== L.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function q1(e) {
  const t = Rn(e);
  let n = parseFloat(t.width) || 0,
    r = parseFloat(t.height) || 0;
  const i = Qn(e),
    s = i ? e.offsetWidth : n,
    o = i ? e.offsetHeight : r,
    a = cl(n) !== s || cl(r) !== o;
  return a && ((n = s), (r = o)), { width: n, height: r, $: a };
}
function Rp(e) {
  return Ft(e) ? e : e.contextElement;
}
function ps(e) {
  const t = Rp(e);
  if (!Qn(t)) return qn(1);
  const n = t.getBoundingClientRect(),
    { width: r, height: i, $: s } = q1(t);
  let o = (s ? cl(n.width) : n.width) / r,
    a = (s ? cl(n.height) : n.height) / i;
  return (
    (!o || !Number.isFinite(o)) && (o = 1),
    (!a || !Number.isFinite(a)) && (a = 1),
    { x: o, y: a }
  );
}
const YC = qn(0);
function K1(e) {
  const t = tn(e);
  return !$p() || !t.visualViewport
    ? YC
    : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function GC(e, t, n) {
  return t === void 0 && (t = !1), !n || (t && n !== tn(e)) ? !1 : t;
}
function Oi(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const i = e.getBoundingClientRect(),
    s = Rp(e);
  let o = qn(1);
  t && (r ? Ft(r) && (o = ps(r)) : (o = ps(e)));
  const a = GC(s, n, r) ? K1(s) : qn(0);
  let u = (i.left + a.x) / o.x,
    c = (i.top + a.y) / o.y,
    d = i.width / o.x,
    f = i.height / o.y;
  if (s) {
    const p = tn(s),
      g = r && Ft(r) ? tn(r) : r;
    let x = p,
      w = Gf(x);
    for (; w && r && g !== x; ) {
      const j = ps(w),
        y = w.getBoundingClientRect(),
        h = Rn(w),
        v = y.left + (w.clientLeft + parseFloat(h.paddingLeft)) * j.x,
        b = y.top + (w.clientTop + parseFloat(h.paddingTop)) * j.y;
      (u *= j.x),
        (c *= j.y),
        (d *= j.x),
        (f *= j.y),
        (u += v),
        (c += b),
        (x = tn(w)),
        (w = Gf(x));
    }
  }
  return yu({ width: d, height: f, x: u, y: c });
}
function Fp(e, t) {
  const n = gc(e).scrollLeft;
  return t ? t.left + n : Oi(Gn(e)).left + n;
}
function Q1(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(),
    i = r.left + t.scrollLeft - (n ? 0 : Fp(e, r)),
    s = r.top + t.scrollTop;
  return { x: i, y: s };
}
function XC(e) {
  let { elements: t, rect: n, offsetParent: r, strategy: i } = e;
  const s = i === "fixed",
    o = Gn(r),
    a = t ? hc(t.floating) : !1;
  if (r === o || (a && s)) return n;
  let u = { scrollLeft: 0, scrollTop: 0 },
    c = qn(1);
  const d = qn(0),
    f = Qn(r);
  if (
    (f || (!f && !s)) &&
    ((zs(r) !== "body" || Nl(o)) && (u = gc(r)), Qn(r))
  ) {
    const g = Oi(r);
    (c = ps(r)), (d.x = g.x + r.clientLeft), (d.y = g.y + r.clientTop);
  }
  const p = o && !f && !s ? Q1(o, u, !0) : qn(0);
  return {
    width: n.width * c.x,
    height: n.height * c.y,
    x: n.x * c.x - u.scrollLeft * c.x + d.x + p.x,
    y: n.y * c.y - u.scrollTop * c.y + d.y + p.y,
  };
}
function ZC(e) {
  return Array.from(e.getClientRects());
}
function JC(e) {
  const t = Gn(e),
    n = gc(e),
    r = e.ownerDocument.body,
    i = kt(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
    s = kt(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let o = -n.scrollLeft + Fp(e);
  const a = -n.scrollTop;
  return (
    Rn(r).direction === "rtl" && (o += kt(t.clientWidth, r.clientWidth) - i),
    { width: i, height: s, x: o, y: a }
  );
}
function e_(e, t) {
  const n = tn(e),
    r = Gn(e),
    i = n.visualViewport;
  let s = r.clientWidth,
    o = r.clientHeight,
    a = 0,
    u = 0;
  if (i) {
    (s = i.width), (o = i.height);
    const c = $p();
    (!c || (c && t === "fixed")) && ((a = i.offsetLeft), (u = i.offsetTop));
  }
  return { width: s, height: o, x: a, y: u };
}
function t_(e, t) {
  const n = Oi(e, !0, t === "fixed"),
    r = n.top + e.clientTop,
    i = n.left + e.clientLeft,
    s = Qn(e) ? ps(e) : qn(1),
    o = e.clientWidth * s.x,
    a = e.clientHeight * s.y,
    u = i * s.x,
    c = r * s.y;
  return { width: o, height: a, x: u, y: c };
}
function g0(e, t, n) {
  let r;
  if (t === "viewport") r = e_(e, n);
  else if (t === "document") r = JC(Gn(e));
  else if (Ft(t)) r = t_(t, n);
  else {
    const i = K1(e);
    r = { x: t.x - i.x, y: t.y - i.y, width: t.width, height: t.height };
  }
  return yu(r);
}
function Y1(e, t) {
  const n = qr(e);
  return n === t || !Ft(n) || Cs(n)
    ? !1
    : Rn(n).position === "fixed" || Y1(n, t);
}
function n_(e, t) {
  const n = t.get(e);
  if (n) return n;
  let r = ul(e, [], !1).filter((a) => Ft(a) && zs(a) !== "body"),
    i = null;
  const s = Rn(e).position === "fixed";
  let o = s ? qr(e) : e;
  for (; Ft(o) && !Cs(o); ) {
    const a = Rn(o),
      u = Tp(o);
    !u && a.position === "fixed" && (i = null),
      (
        s
          ? !u && !i
          : (!u &&
              a.position === "static" &&
              !!i &&
              ["absolute", "fixed"].includes(i.position)) ||
            (Nl(o) && !u && Y1(e, o))
      )
        ? (r = r.filter((d) => d !== o))
        : (i = a),
      (o = qr(o));
  }
  return t.set(e, r), r;
}
function r_(e) {
  let { element: t, boundary: n, rootBoundary: r, strategy: i } = e;
  const o = [
      ...(n === "clippingAncestors"
        ? hc(t)
          ? []
          : n_(t, this._c)
        : [].concat(n)),
      r,
    ],
    a = o[0],
    u = o.reduce((c, d) => {
      const f = g0(t, d, i);
      return (
        (c.top = kt(f.top, c.top)),
        (c.right = Fi(f.right, c.right)),
        (c.bottom = Fi(f.bottom, c.bottom)),
        (c.left = kt(f.left, c.left)),
        c
      );
    }, g0(t, a, i));
  return {
    width: u.right - u.left,
    height: u.bottom - u.top,
    x: u.left,
    y: u.top,
  };
}
function i_(e) {
  const { width: t, height: n } = q1(e);
  return { width: t, height: n };
}
function s_(e, t, n) {
  const r = Qn(t),
    i = Gn(t),
    s = n === "fixed",
    o = Oi(e, !0, s, t);
  let a = { scrollLeft: 0, scrollTop: 0 };
  const u = qn(0);
  if (r || (!r && !s))
    if (((zs(t) !== "body" || Nl(i)) && (a = gc(t)), r)) {
      const p = Oi(t, !0, s, t);
      (u.x = p.x + t.clientLeft), (u.y = p.y + t.clientTop);
    } else i && (u.x = Fp(i));
  const c = i && !r && !s ? Q1(i, a) : qn(0),
    d = o.left + a.scrollLeft - u.x - c.x,
    f = o.top + a.scrollTop - u.y - c.y;
  return { x: d, y: f, width: o.width, height: o.height };
}
function Nd(e) {
  return Rn(e).position === "static";
}
function y0(e, t) {
  if (!Qn(e) || Rn(e).position === "fixed") return null;
  if (t) return t(e);
  let n = e.offsetParent;
  return Gn(e) === n && (n = n.ownerDocument.body), n;
}
function G1(e, t) {
  const n = tn(e);
  if (hc(e)) return n;
  if (!Qn(e)) {
    let i = qr(e);
    for (; i && !Cs(i); ) {
      if (Ft(i) && !Nd(i)) return i;
      i = qr(i);
    }
    return n;
  }
  let r = y0(e, t);
  for (; r && RC(r) && Nd(r); ) r = y0(r, t);
  return r && Cs(r) && Nd(r) && !Tp(r) ? n : r || FC(e) || n;
}
const o_ = async function (e) {
  const t = this.getOffsetParent || G1,
    n = this.getDimensions,
    r = await n(e.floating);
  return {
    reference: s_(e.reference, await t(e.floating), e.strategy),
    floating: { x: 0, y: 0, width: r.width, height: r.height },
  };
};
function l_(e) {
  return Rn(e).direction === "rtl";
}
const a_ = {
  convertOffsetParentRelativeRectToViewportRelativeRect: XC,
  getDocumentElement: Gn,
  getClippingRect: r_,
  getOffsetParent: G1,
  getElementRects: o_,
  getClientRects: ZC,
  getDimensions: i_,
  getScale: ps,
  isElement: Ft,
  isRTL: l_,
};
function u_(e, t) {
  let n = null,
    r;
  const i = Gn(e);
  function s() {
    var a;
    clearTimeout(r), (a = n) == null || a.disconnect(), (n = null);
  }
  function o(a, u) {
    a === void 0 && (a = !1), u === void 0 && (u = 1), s();
    const { left: c, top: d, width: f, height: p } = e.getBoundingClientRect();
    if ((a || t(), !f || !p)) return;
    const g = la(d),
      x = la(i.clientWidth - (c + f)),
      w = la(i.clientHeight - (d + p)),
      j = la(c),
      h = {
        rootMargin: -g + "px " + -x + "px " + -w + "px " + -j + "px",
        threshold: kt(0, Fi(1, u)) || 1,
      };
    let v = !0;
    function b(S) {
      const E = S[0].intersectionRatio;
      if (E !== u) {
        if (!v) return o();
        E
          ? o(!1, E)
          : (r = setTimeout(() => {
              o(!1, 1e-7);
            }, 1e3));
      }
      v = !1;
    }
    try {
      n = new IntersectionObserver(b, { ...h, root: i.ownerDocument });
    } catch {
      n = new IntersectionObserver(b, h);
    }
    n.observe(e);
  }
  return o(!0), s;
}
function c_(e, t, n, r) {
  r === void 0 && (r = {});
  const {
      ancestorScroll: i = !0,
      ancestorResize: s = !0,
      elementResize: o = typeof ResizeObserver == "function",
      layoutShift: a = typeof IntersectionObserver == "function",
      animationFrame: u = !1,
    } = r,
    c = Rp(e),
    d = i || s ? [...(c ? ul(c) : []), ...ul(t)] : [];
  d.forEach((y) => {
    i && y.addEventListener("scroll", n, { passive: !0 }),
      s && y.addEventListener("resize", n);
  });
  const f = c && a ? u_(c, n) : null;
  let p = -1,
    g = null;
  o &&
    ((g = new ResizeObserver((y) => {
      let [h] = y;
      h &&
        h.target === c &&
        g &&
        (g.unobserve(t),
        cancelAnimationFrame(p),
        (p = requestAnimationFrame(() => {
          var v;
          (v = g) == null || v.observe(t);
        }))),
        n();
    })),
    c && !u && g.observe(c),
    g.observe(t));
  let x,
    w = u ? Oi(e) : null;
  u && j();
  function j() {
    const y = Oi(e);
    w &&
      (y.x !== w.x ||
        y.y !== w.y ||
        y.width !== w.width ||
        y.height !== w.height) &&
      n(),
      (w = y),
      (x = requestAnimationFrame(j));
  }
  return (
    n(),
    () => {
      var y;
      d.forEach((h) => {
        i && h.removeEventListener("scroll", n),
          s && h.removeEventListener("resize", n);
      }),
        f == null || f(),
        (y = g) == null || y.disconnect(),
        (g = null),
        u && cancelAnimationFrame(x);
    }
  );
}
const kd = yc,
  d_ = qC,
  f_ = KC,
  m_ = VC,
  p_ = QC,
  h_ = (e, t, n) => {
    const r = new Map(),
      i = { platform: a_, ...n },
      s = { ...i.platform, _c: r };
    return HC(e, t, { ...i, platform: s });
  };
var Na = typeof document < "u" ? m.useLayoutEffect : m.useEffect;
function vu(e, t) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (typeof e == "function" && e.toString() === t.toString()) return !0;
  let n, r, i;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (((n = e.length), n !== t.length)) return !1;
      for (r = n; r-- !== 0; ) if (!vu(e[r], t[r])) return !1;
      return !0;
    }
    if (((i = Object.keys(e)), (n = i.length), n !== Object.keys(t).length))
      return !1;
    for (r = n; r-- !== 0; ) if (!{}.hasOwnProperty.call(t, i[r])) return !1;
    for (r = n; r-- !== 0; ) {
      const s = i[r];
      if (!(s === "_owner" && e.$$typeof) && !vu(e[s], t[s])) return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function X1(e) {
  return typeof window > "u"
    ? 1
    : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function v0(e, t) {
  const n = X1(e);
  return Math.round(t * n) / n;
}
function Cd(e) {
  const t = m.useRef(e);
  return (
    Na(() => {
      t.current = e;
    }),
    t
  );
}
function g_(e) {
  e === void 0 && (e = {});
  const {
      placement: t = "bottom",
      strategy: n = "absolute",
      middleware: r = [],
      platform: i,
      elements: { reference: s, floating: o } = {},
      transform: a = !0,
      whileElementsMounted: u,
      open: c,
    } = e,
    [d, f] = m.useState({
      x: 0,
      y: 0,
      strategy: n,
      placement: t,
      middlewareData: {},
      isPositioned: !1,
    }),
    [p, g] = m.useState(r);
  vu(p, r) || g(r);
  const [x, w] = m.useState(null),
    [j, y] = m.useState(null),
    h = m.useCallback((T) => {
      T !== E.current && ((E.current = T), w(T));
    }, []),
    v = m.useCallback((T) => {
      T !== N.current && ((N.current = T), y(T));
    }, []),
    b = s || x,
    S = o || j,
    E = m.useRef(null),
    N = m.useRef(null),
    k = m.useRef(d),
    L = u != null,
    F = Cd(u),
    z = Cd(i),
    A = Cd(c),
    H = m.useCallback(() => {
      if (!E.current || !N.current) return;
      const T = { placement: t, strategy: n, middleware: p };
      z.current && (T.platform = z.current),
        h_(E.current, N.current, T).then((I) => {
          const W = { ...I, isPositioned: A.current !== !1 };
          K.current &&
            !vu(k.current, W) &&
            ((k.current = W),
            Kt.flushSync(() => {
              f(W);
            }));
        });
    }, [p, t, n, z, A]);
  Na(() => {
    c === !1 &&
      k.current.isPositioned &&
      ((k.current.isPositioned = !1), f((T) => ({ ...T, isPositioned: !1 })));
  }, [c]);
  const K = m.useRef(!1);
  Na(
    () => (
      (K.current = !0),
      () => {
        K.current = !1;
      }
    ),
    []
  ),
    Na(() => {
      if ((b && (E.current = b), S && (N.current = S), b && S)) {
        if (F.current) return F.current(b, S, H);
        H();
      }
    }, [b, S, H, F, L]);
  const ae = m.useMemo(
      () => ({ reference: E, floating: N, setReference: h, setFloating: v }),
      [h, v]
    ),
    le = m.useMemo(() => ({ reference: b, floating: S }), [b, S]),
    Z = m.useMemo(() => {
      const T = { position: n, left: 0, top: 0 };
      if (!le.floating) return T;
      const I = v0(le.floating, d.x),
        W = v0(le.floating, d.y);
      return a
        ? {
            ...T,
            transform: "translate(" + I + "px, " + W + "px)",
            ...(X1(le.floating) >= 1.5 && { willChange: "transform" }),
          }
        : { position: n, left: I, top: W };
    }, [n, a, le.floating, d.x, d.y]);
  return m.useMemo(
    () => ({ ...d, update: H, refs: ae, elements: le, floatingStyles: Z }),
    [d, H, ae, le, Z]
  );
}
const Z1 = (e, t) => ({ ...d_(e), options: [e, t] }),
  y_ = (e, t) => ({ ...f_(e), options: [e, t] }),
  v_ = (e, t) => ({ ...m_(e), options: [e, t] }),
  x_ = (e, t) => ({ ...p_(e), options: [e, t] }),
  J1 = { ...hs },
  w_ = J1.useInsertionEffect,
  b_ = w_ || ((e) => e());
function ew(e) {
  const t = m.useRef(() => {});
  return (
    b_(() => {
      t.current = e;
    }),
    m.useCallback(function () {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return t.current == null ? void 0 : t.current(...r);
    }, [])
  );
}
var Zf = typeof document < "u" ? m.useLayoutEffect : m.useEffect;
let x0 = !1,
  j_ = 0;
const w0 = () => "floating-ui-" + Math.random().toString(36).slice(2, 6) + j_++;
function E_() {
  const [e, t] = m.useState(() => (x0 ? w0() : void 0));
  return (
    Zf(() => {
      e == null && t(w0());
    }, []),
    m.useEffect(() => {
      x0 = !0;
    }, []),
    e
  );
}
const S_ = J1.useId,
  N_ = S_ || E_;
function k_() {
  const e = new Map();
  return {
    emit(t, n) {
      var r;
      (r = e.get(t)) == null || r.forEach((i) => i(n));
    },
    on(t, n) {
      e.set(t, [...(e.get(t) || []), n]);
    },
    off(t, n) {
      var r;
      e.set(
        t,
        ((r = e.get(t)) == null ? void 0 : r.filter((i) => i !== n)) || []
      );
    },
  };
}
const C_ = m.createContext(null),
  __ = m.createContext(null),
  P_ = () => {
    var e;
    return ((e = m.useContext(C_)) == null ? void 0 : e.id) || null;
  },
  T_ = () => m.useContext(__),
  $_ = "data-floating-ui-focusable";
function R_(e) {
  const { open: t = !1, onOpenChange: n, elements: r } = e,
    i = N_(),
    s = m.useRef({}),
    [o] = m.useState(() => k_()),
    a = P_() != null,
    [u, c] = m.useState(r.reference),
    d = ew((g, x, w) => {
      (s.current.openEvent = g ? x : void 0),
        o.emit("openchange", { open: g, event: x, reason: w, nested: a }),
        n == null || n(g, x, w);
    }),
    f = m.useMemo(() => ({ setPositionReference: c }), []),
    p = m.useMemo(
      () => ({
        reference: u || r.reference || null,
        floating: r.floating || null,
        domReference: r.reference,
      }),
      [u, r.reference, r.floating]
    );
  return m.useMemo(
    () => ({
      dataRef: s,
      open: t,
      onOpenChange: d,
      elements: p,
      events: o,
      floatingId: i,
      refs: f,
    }),
    [t, d, p, o, i, f]
  );
}
function F_(e) {
  e === void 0 && (e = {});
  const { nodeId: t } = e,
    n = R_({
      ...e,
      elements: { reference: null, floating: null, ...e.elements },
    }),
    r = e.rootContext || n,
    i = r.elements,
    [s, o] = m.useState(null),
    [a, u] = m.useState(null),
    d = (i == null ? void 0 : i.domReference) || s,
    f = m.useRef(null),
    p = T_();
  Zf(() => {
    d && (f.current = d);
  }, [d]);
  const g = g_({ ...e, elements: { ...i, ...(a && { reference: a }) } }),
    x = m.useCallback(
      (v) => {
        const b = Ft(v)
          ? {
              getBoundingClientRect: () => v.getBoundingClientRect(),
              contextElement: v,
            }
          : v;
        u(b), g.refs.setReference(b);
      },
      [g.refs]
    ),
    w = m.useCallback(
      (v) => {
        (Ft(v) || v === null) && ((f.current = v), o(v)),
          (Ft(g.refs.reference.current) ||
            g.refs.reference.current === null ||
            (v !== null && !Ft(v))) &&
            g.refs.setReference(v);
      },
      [g.refs]
    ),
    j = m.useMemo(
      () => ({
        ...g.refs,
        setReference: w,
        setPositionReference: x,
        domReference: f,
      }),
      [g.refs, w, x]
    ),
    y = m.useMemo(() => ({ ...g.elements, domReference: d }), [g.elements, d]),
    h = m.useMemo(
      () => ({ ...g, ...r, refs: j, elements: y, nodeId: t }),
      [g, j, y, t, r]
    );
  return (
    Zf(() => {
      r.dataRef.current.floatingContext = h;
      const v = p == null ? void 0 : p.nodesRef.current.find((b) => b.id === t);
      v && (v.context = h);
    }),
    m.useMemo(() => ({ ...g, context: h, refs: j, elements: y }), [g, j, y, h])
  );
}
const b0 = "active",
  j0 = "selected";
function _d(e, t, n) {
  const r = new Map(),
    i = n === "item";
  let s = e;
  if (i && e) {
    const { [b0]: o, [j0]: a, ...u } = e;
    s = u;
  }
  return {
    ...(n === "floating" && { tabIndex: -1, [$_]: "" }),
    ...s,
    ...t
      .map((o) => {
        const a = o ? o[n] : null;
        return typeof a == "function" ? (e ? a(e) : null) : a;
      })
      .concat(e)
      .reduce(
        (o, a) => (
          a &&
            Object.entries(a).forEach((u) => {
              let [c, d] = u;
              if (!(i && [b0, j0].includes(c)))
                if (c.indexOf("on") === 0) {
                  if ((r.has(c) || r.set(c, []), typeof d == "function")) {
                    var f;
                    (f = r.get(c)) == null || f.push(d),
                      (o[c] = function () {
                        for (
                          var p, g = arguments.length, x = new Array(g), w = 0;
                          w < g;
                          w++
                        )
                          x[w] = arguments[w];
                        return (p = r.get(c)) == null
                          ? void 0
                          : p.map((j) => j(...x)).find((j) => j !== void 0);
                      });
                  }
                } else o[c] = d;
            }),
          o
        ),
        {}
      ),
  };
}
function L_(e) {
  e === void 0 && (e = []);
  const t = e.map((a) => (a == null ? void 0 : a.reference)),
    n = e.map((a) => (a == null ? void 0 : a.floating)),
    r = e.map((a) => (a == null ? void 0 : a.item)),
    i = m.useCallback((a) => _d(a, e, "reference"), t),
    s = m.useCallback((a) => _d(a, e, "floating"), n),
    o = m.useCallback((a) => _d(a, e, "item"), r);
  return m.useMemo(
    () => ({ getReferenceProps: i, getFloatingProps: s, getItemProps: o }),
    [i, s, o]
  );
}
function E0(e, t) {
  return {
    ...e,
    rects: { ...e.rects, floating: { ...e.rects.floating, height: t } },
  };
}
const O_ = (e) => ({
  name: "inner",
  options: e,
  async fn(t) {
    const {
        listRef: n,
        overflowRef: r,
        onFallbackChange: i,
        offset: s = 0,
        index: o = 0,
        minItemsVisible: a = 4,
        referenceOverflowThreshold: u = 0,
        scrollRef: c,
        ...d
      } = Us(e, t),
      {
        rects: f,
        elements: { floating: p },
      } = t,
      g = n.current[o],
      x = (c == null ? void 0 : c.current) || p,
      w = p.clientTop || x.clientTop,
      j = p.clientTop !== 0,
      y = x.clientTop !== 0,
      h = p === x;
    if (!g) return {};
    const v = {
        ...t,
        ...(await Z1(
          -g.offsetTop -
            p.clientTop -
            f.reference.height / 2 -
            g.offsetHeight / 2 -
            s
        ).fn(t)),
      },
      b = await kd(E0(v, x.scrollHeight + w + p.clientTop), d),
      S = await kd(v, { ...d, elementContext: "reference" }),
      E = kt(0, b.top),
      N = v.y + E,
      F = (x.scrollHeight > x.clientHeight ? (z) => z : cl)(
        kt(
          0,
          x.scrollHeight + ((j && h) || y ? w * 2 : 0) - E - kt(0, b.bottom)
        )
      );
    if (((x.style.maxHeight = F + "px"), (x.scrollTop = E), i)) {
      const z =
        x.offsetHeight < g.offsetHeight * Fi(a, n.current.length) - 1 ||
        S.top >= -u ||
        S.bottom >= -u;
      Kt.flushSync(() => i(z));
    }
    return (
      r &&
        (r.current = await kd(
          E0({ ...v, y: N }, x.offsetHeight + w + p.clientTop),
          d
        )),
      { y: N }
    );
  },
});
function D_(e, t) {
  const { open: n, elements: r } = e,
    { enabled: i = !0, overflowRef: s, scrollRef: o, onChange: a } = t,
    u = ew(a),
    c = m.useRef(!1),
    d = m.useRef(null),
    f = m.useRef(null);
  m.useEffect(() => {
    if (!i) return;
    function g(w) {
      if (w.ctrlKey || !x || s.current == null) return;
      const j = w.deltaY,
        y = s.current.top >= -0.5,
        h = s.current.bottom >= -0.5,
        v = x.scrollHeight - x.clientHeight,
        b = j < 0 ? -1 : 1,
        S = j < 0 ? "max" : "min";
      x.scrollHeight <= x.clientHeight ||
        ((!y && j > 0) || (!h && j < 0)
          ? (w.preventDefault(),
            Kt.flushSync(() => {
              u((E) => E + Math[S](j, v * b));
            }))
          : /firefox/i.test(LC()) && (x.scrollTop += j));
    }
    const x = (o == null ? void 0 : o.current) || r.floating;
    if (n && x)
      return (
        x.addEventListener("wheel", g),
        requestAnimationFrame(() => {
          (d.current = x.scrollTop),
            s.current != null && (f.current = { ...s.current });
        }),
        () => {
          (d.current = null),
            (f.current = null),
            x.removeEventListener("wheel", g);
        }
      );
  }, [i, n, r.floating, s, o, u]);
  const p = m.useMemo(
    () => ({
      onKeyDown() {
        c.current = !0;
      },
      onWheel() {
        c.current = !1;
      },
      onPointerMove() {
        c.current = !1;
      },
      onScroll() {
        const g = (o == null ? void 0 : o.current) || r.floating;
        if (!(!s.current || !g || !c.current)) {
          if (d.current !== null) {
            const x = g.scrollTop - d.current;
            ((s.current.bottom < -0.5 && x < -1) ||
              (s.current.top < -0.5 && x > 1)) &&
              Kt.flushSync(() => u((w) => w + x));
          }
          requestAnimationFrame(() => {
            d.current = g.scrollTop;
          });
        }
      },
    }),
    [r.floating, u, s, o]
  );
  return m.useMemo(() => (i ? { floating: p } : {}), [i, p]);
}
let Bs = m.createContext({
  styles: void 0,
  setReference: () => {},
  setFloating: () => {},
  getReferenceProps: () => ({}),
  getFloatingProps: () => ({}),
  slot: {},
});
Bs.displayName = "FloatingContext";
let Lp = m.createContext(null);
Lp.displayName = "PlacementContext";
function A_(e) {
  return m.useMemo(
    () => (e ? (typeof e == "string" ? { to: e } : e) : null),
    [e]
  );
}
function I_() {
  return m.useContext(Bs).setReference;
}
function M_() {
  return m.useContext(Bs).getReferenceProps;
}
function z_() {
  let { getFloatingProps: e, slot: t } = m.useContext(Bs);
  return m.useCallback(
    (...n) => Object.assign({}, e(...n), { "data-anchor": t.anchor }),
    [e, t]
  );
}
function U_(e = null) {
  e === !1 && (e = null), typeof e == "string" && (e = { to: e });
  let t = m.useContext(Lp),
    n = m.useMemo(
      () => e,
      [
        JSON.stringify(e, (i, s) => {
          var o;
          return (o = s == null ? void 0 : s.outerHTML) != null ? o : s;
        }),
      ]
    );
  _e(() => {
    t == null || t(n ?? null);
  }, [t, n]);
  let r = m.useContext(Bs);
  return m.useMemo(
    () => [r.setFloating, e ? r.styles : {}],
    [r.setFloating, e, r.styles]
  );
}
let S0 = 4;
function B_({ children: e, enabled: t = !0 }) {
  let [n, r] = m.useState(null),
    [i, s] = m.useState(0),
    o = m.useRef(null),
    [a, u] = m.useState(null);
  H_(a);
  let c = t && n !== null && a !== null,
    {
      to: d = "bottom",
      gap: f = 0,
      offset: p = 0,
      padding: g = 0,
      inner: x,
    } = V_(n, a),
    [w, j = "center"] = d.split(" ");
  _e(() => {
    c && s(0);
  }, [c]);
  let {
      refs: y,
      floatingStyles: h,
      context: v,
    } = F_({
      open: c,
      placement:
        w === "selection"
          ? j === "center"
            ? "bottom"
            : `bottom-${j}`
          : j === "center"
          ? `${w}`
          : `${w}-${j}`,
      strategy: "absolute",
      transform: !1,
      middleware: [
        Z1({ mainAxis: w === "selection" ? 0 : f, crossAxis: p }),
        y_({ padding: g }),
        w !== "selection" && v_({ padding: g }),
        w === "selection" && x
          ? O_({
              ...x,
              padding: g,
              overflowRef: o,
              offset: i,
              minItemsVisible: S0,
              referenceOverflowThreshold: g,
              onFallbackChange(z) {
                var A, H;
                if (!z) return;
                let K = v.elements.floating;
                if (!K) return;
                let ae =
                    parseFloat(getComputedStyle(K).scrollPaddingBottom) || 0,
                  le = Math.min(S0, K.childElementCount),
                  Z = 0,
                  T = 0;
                for (let I of (H =
                  (A = v.elements.floating) == null ? void 0 : A.childNodes) !=
                null
                  ? H
                  : [])
                  if (I instanceof HTMLElement) {
                    let W = I.offsetTop,
                      V = W + I.clientHeight + ae,
                      oe = K.scrollTop,
                      ce = oe + K.clientHeight;
                    if (W >= oe && V <= ce) le--;
                    else {
                      (T = Math.max(0, Math.min(V, ce) - Math.max(W, oe))),
                        (Z = I.clientHeight);
                      break;
                    }
                  }
                le >= 1 &&
                  s((I) => {
                    let W = Z * le - T + ae;
                    return I >= W ? I : W;
                  });
              },
            })
          : null,
        x_({
          padding: g,
          apply({ availableWidth: z, availableHeight: A, elements: H }) {
            Object.assign(H.floating.style, {
              overflow: "auto",
              maxWidth: `${z}px`,
              maxHeight: `min(var(--anchor-max-height, 100vh), ${A}px)`,
            });
          },
        }),
      ].filter(Boolean),
      whileElementsMounted: c_,
    }),
    [b = w, S = j] = v.placement.split("-");
  w === "selection" && (b = "selection");
  let E = m.useMemo(
      () => ({ anchor: [b, S].filter(Boolean).join(" ") }),
      [b, S]
    ),
    N = D_(v, { overflowRef: o, onChange: s }),
    { getReferenceProps: k, getFloatingProps: L } = L_([N]),
    F = re((z) => {
      u(z), y.setFloating(z);
    });
  return m.createElement(
    Lp.Provider,
    { value: r },
    m.createElement(
      Bs.Provider,
      {
        value: {
          setFloating: F,
          setReference: y.setReference,
          styles: h,
          getReferenceProps: k,
          getFloatingProps: L,
          slot: E,
        },
      },
      e
    )
  );
}
function H_(e) {
  _e(() => {
    if (!e) return;
    let t = new MutationObserver(() => {
      let n = window.getComputedStyle(e).maxHeight,
        r = parseFloat(n);
      if (isNaN(r)) return;
      let i = parseInt(n);
      isNaN(i) || (r !== i && (e.style.maxHeight = `${Math.ceil(r)}px`));
    });
    return (
      t.observe(e, { attributes: !0, attributeFilter: ["style"] }),
      () => {
        t.disconnect();
      }
    );
  }, [e]);
}
function V_(e, t) {
  var n, r, i;
  let s = Pd(
      (n = e == null ? void 0 : e.gap) != null ? n : "var(--anchor-gap, 0)",
      t
    ),
    o = Pd(
      (r = e == null ? void 0 : e.offset) != null
        ? r
        : "var(--anchor-offset, 0)",
      t
    ),
    a = Pd(
      (i = e == null ? void 0 : e.padding) != null
        ? i
        : "var(--anchor-padding, 0)",
      t
    );
  return { ...e, gap: s, offset: o, padding: a };
}
function Pd(e, t, n = void 0) {
  let r = Mi(),
    i = re((u, c) => {
      if (u == null) return [n, null];
      if (typeof u == "number") return [u, null];
      if (typeof u == "string") {
        if (!c) return [n, null];
        let d = N0(u, c);
        return [
          d,
          (f) => {
            let p = tw(u);
            {
              let g = p.map((x) =>
                window.getComputedStyle(c).getPropertyValue(x)
              );
              r.requestAnimationFrame(function x() {
                r.nextFrame(x);
                let w = !1;
                for (let [y, h] of p.entries()) {
                  let v = window.getComputedStyle(c).getPropertyValue(h);
                  if (g[y] !== v) {
                    (g[y] = v), (w = !0);
                    break;
                  }
                }
                if (!w) return;
                let j = N0(u, c);
                d !== j && (f(j), (d = j));
              });
            }
            return r.dispose;
          },
        ];
      }
      return [n, null];
    }),
    s = m.useMemo(() => i(e, t)[0], [e, t]),
    [o = s, a] = m.useState();
  return (
    _e(() => {
      let [u, c] = i(e, t);
      if ((a(u), !!c)) return c(a);
    }, [e, t]),
    o
  );
}
function tw(e) {
  let t = /var\((.*)\)/.exec(e);
  if (t) {
    let n = t[1].indexOf(",");
    if (n === -1) return [t[1]];
    let r = t[1].slice(0, n).trim(),
      i = t[1].slice(n + 1).trim();
    return i ? [r, ...tw(i)] : [r];
  }
  return [];
}
function N0(e, t) {
  let n = document.createElement("div");
  t.appendChild(n),
    n.style.setProperty("margin-top", "0px", "important"),
    n.style.setProperty("margin-top", e, "important");
  let r = parseFloat(window.getComputedStyle(n).marginTop) || 0;
  return t.removeChild(n), r;
}
let vc = m.createContext(null);
vc.displayName = "OpenClosedContext";
var ut = ((e) => (
  (e[(e.Open = 1)] = "Open"),
  (e[(e.Closed = 2)] = "Closed"),
  (e[(e.Closing = 4)] = "Closing"),
  (e[(e.Opening = 8)] = "Opening"),
  e
))(ut || {});
function Hs() {
  return m.useContext(vc);
}
function Op({ value: e, children: t }) {
  return D.createElement(vc.Provider, { value: e }, t);
}
function nw({ children: e }) {
  return D.createElement(vc.Provider, { value: null }, e);
}
function W_(e) {
  function t() {
    document.readyState !== "loading" &&
      (e(), document.removeEventListener("DOMContentLoaded", t));
  }
  typeof window < "u" &&
    typeof document < "u" &&
    (document.addEventListener("DOMContentLoaded", t), t());
}
let Cr = [];
W_(() => {
  function e(t) {
    if (
      !(t.target instanceof HTMLElement) ||
      t.target === document.body ||
      Cr[0] === t.target
    )
      return;
    let n = t.target;
    (n = n.closest(hu)),
      Cr.unshift(n ?? t.target),
      (Cr = Cr.filter((r) => r != null && r.isConnected)),
      Cr.splice(10);
  }
  window.addEventListener("click", e, { capture: !0 }),
    window.addEventListener("mousedown", e, { capture: !0 }),
    window.addEventListener("focus", e, { capture: !0 }),
    document.body.addEventListener("click", e, { capture: !0 }),
    document.body.addEventListener("mousedown", e, { capture: !0 }),
    document.body.addEventListener("focus", e, { capture: !0 });
});
function q_(e) {
  throw new Error("Unexpected object: " + e);
}
var Ct = ((e) => (
  (e[(e.First = 0)] = "First"),
  (e[(e.Previous = 1)] = "Previous"),
  (e[(e.Next = 2)] = "Next"),
  (e[(e.Last = 3)] = "Last"),
  (e[(e.Specific = 4)] = "Specific"),
  (e[(e.Nothing = 5)] = "Nothing"),
  e
))(Ct || {});
function Td(e, t) {
  let n = t.resolveItems();
  if (n.length <= 0) return null;
  let r = t.resolveActiveIndex(),
    i = r ?? -1;
  switch (e.focus) {
    case 0: {
      for (let s = 0; s < n.length; ++s)
        if (!t.resolveDisabled(n[s], s, n)) return s;
      return r;
    }
    case 1: {
      i === -1 && (i = n.length);
      for (let s = i - 1; s >= 0; --s)
        if (!t.resolveDisabled(n[s], s, n)) return s;
      return r;
    }
    case 2: {
      for (let s = i + 1; s < n.length; ++s)
        if (!t.resolveDisabled(n[s], s, n)) return s;
      return r;
    }
    case 3: {
      for (let s = n.length - 1; s >= 0; --s)
        if (!t.resolveDisabled(n[s], s, n)) return s;
      return r;
    }
    case 4: {
      for (let s = 0; s < n.length; ++s)
        if (t.resolveId(n[s], s, n) === e.id) return s;
      return r;
    }
    case 5:
      return null;
    default:
      q_(e);
  }
}
function rw(e) {
  let t = re(e),
    n = m.useRef(!1);
  m.useEffect(
    () => (
      (n.current = !1),
      () => {
        (n.current = !0),
          lc(() => {
            n.current && t();
          });
      }
    ),
    [t]
  );
}
function K_() {
  let e = typeof document > "u";
  return "useSyncExternalStore" in hs
    ? ((t) => t.useSyncExternalStore)(hs)(
        () => () => {},
        () => !1,
        () => !e
      )
    : !1;
}
function Cl() {
  let e = K_(),
    [t, n] = m.useState(wi.isHandoffComplete);
  return (
    t && wi.isHandoffComplete === !1 && n(!1),
    m.useEffect(() => {
      t !== !0 && n(!0);
    }, [t]),
    m.useEffect(() => wi.handoff(), []),
    e ? !1 : t
  );
}
let iw = m.createContext(!1);
function Q_() {
  return m.useContext(iw);
}
function k0(e) {
  return D.createElement(iw.Provider, { value: e.force }, e.children);
}
function Y_(e) {
  let t = Q_(),
    n = m.useContext(ow),
    r = Ms(e),
    [i, s] = m.useState(() => {
      var o;
      if (!t && n !== null) return (o = n.current) != null ? o : null;
      if (wi.isServer) return null;
      let a = r == null ? void 0 : r.getElementById("headlessui-portal-root");
      if (a) return a;
      if (r === null) return null;
      let u = r.createElement("div");
      return (
        u.setAttribute("id", "headlessui-portal-root"), r.body.appendChild(u)
      );
    });
  return (
    m.useEffect(() => {
      i !== null &&
        ((r != null && r.body.contains(i)) ||
          r == null ||
          r.body.appendChild(i));
    }, [i, r]),
    m.useEffect(() => {
      t || (n !== null && s(n.current));
    }, [n, s, t]),
    i
  );
}
let sw = m.Fragment,
  G_ = Te(function (e, t) {
    let n = e,
      r = m.useRef(null),
      i = et(
        S1((f) => {
          r.current = f;
        }),
        t
      ),
      s = Ms(r),
      o = Y_(r),
      [a] = m.useState(() => {
        var f;
        return wi.isServer
          ? null
          : (f = s == null ? void 0 : s.createElement("div")) != null
          ? f
          : null;
      }),
      u = m.useContext(Jf),
      c = Cl();
    _e(() => {
      !o ||
        !a ||
        o.contains(a) ||
        (a.setAttribute("data-headlessui-portal", ""), o.appendChild(a));
    }, [o, a]),
      _e(() => {
        if (a && u) return u.register(a);
      }, [u, a]),
      rw(() => {
        var f;
        !o ||
          !a ||
          (a instanceof Node && o.contains(a) && o.removeChild(a),
          o.childNodes.length <= 0 &&
            ((f = o.parentElement) == null || f.removeChild(o)));
      });
    let d = Le();
    return c
      ? !o || !a
        ? null
        : Kt.createPortal(
            d({
              ourProps: { ref: i },
              theirProps: n,
              slot: {},
              defaultTag: sw,
              name: "Portal",
            }),
            a
          )
      : null;
  });
function X_(e, t) {
  let n = et(t),
    { enabled: r = !0, ...i } = e,
    s = Le();
  return r
    ? D.createElement(G_, { ...i, ref: n })
    : s({
        ourProps: { ref: n },
        theirProps: i,
        slot: {},
        defaultTag: sw,
        name: "Portal",
      });
}
let Z_ = m.Fragment,
  ow = m.createContext(null);
function J_(e, t) {
  let { target: n, ...r } = e,
    i = { ref: et(t) },
    s = Le();
  return D.createElement(
    ow.Provider,
    { value: n },
    s({ ourProps: i, theirProps: r, defaultTag: Z_, name: "Popover.Group" })
  );
}
let Jf = m.createContext(null);
function e5() {
  let e = m.useContext(Jf),
    t = m.useRef([]),
    n = re((s) => (t.current.push(s), e && e.register(s), () => r(s))),
    r = re((s) => {
      let o = t.current.indexOf(s);
      o !== -1 && t.current.splice(o, 1), e && e.unregister(s);
    }),
    i = m.useMemo(
      () => ({ register: n, unregister: r, portals: t }),
      [n, r, t]
    );
  return [
    t,
    m.useMemo(
      () =>
        function ({ children: s }) {
          return D.createElement(Jf.Provider, { value: i }, s);
        },
      [i]
    ),
  ];
}
let t5 = Te(X_),
  lw = Te(J_),
  aw = Object.assign(t5, { Group: lw });
function n5(e, t = typeof document < "u" ? document.defaultView : null, n) {
  let r = Is(e, "escape");
  I1(t, "keydown", (i) => {
    r && (i.defaultPrevented || (i.key === Ne.Escape && n(i)));
  });
}
function r5() {
  var e;
  let [t] = m.useState(() =>
      typeof window < "u" && typeof window.matchMedia == "function"
        ? window.matchMedia("(pointer: coarse)")
        : null
    ),
    [n, r] = m.useState((e = t == null ? void 0 : t.matches) != null ? e : !1);
  return (
    _e(() => {
      if (!t) return;
      function i(s) {
        r(s.matches);
      }
      return (
        t.addEventListener("change", i),
        () => t.removeEventListener("change", i)
      );
    }, [t]),
    n
  );
}
function i5({ defaultContainers: e = [], portals: t, mainTreeNode: n } = {}) {
  let r = Ms(n),
    i = re(() => {
      var s, o;
      let a = [];
      for (let u of e)
        u !== null &&
          (u instanceof HTMLElement
            ? a.push(u)
            : "current" in u &&
              u.current instanceof HTMLElement &&
              a.push(u.current));
      if (t != null && t.current) for (let u of t.current) a.push(u);
      for (let u of (s =
        r == null ? void 0 : r.querySelectorAll("html > *, body > *")) != null
        ? s
        : [])
        u !== document.body &&
          u !== document.head &&
          u instanceof HTMLElement &&
          u.id !== "headlessui-portal-root" &&
          ((n &&
            (u.contains(n) ||
              u.contains(
                (o = n == null ? void 0 : n.getRootNode()) == null
                  ? void 0
                  : o.host
              ))) ||
            a.some((c) => u.contains(c)) ||
            a.push(u));
      return a;
    });
  return {
    resolveContainers: i,
    contains: re((s) => i().some((o) => o.contains(s))),
  };
}
let uw = m.createContext(null);
function C0({ children: e, node: t }) {
  let [n, r] = m.useState(null),
    i = cw(t ?? n);
  return D.createElement(
    uw.Provider,
    { value: i },
    e,
    i === null &&
      D.createElement(ll, {
        features: ks.Hidden,
        ref: (s) => {
          var o, a;
          if (s) {
            for (let u of (a =
              (o = hr(s)) == null
                ? void 0
                : o.querySelectorAll("html > *, body > *")) != null
              ? a
              : [])
              if (
                u !== document.body &&
                u !== document.head &&
                u instanceof HTMLElement &&
                u != null &&
                u.contains(s)
              ) {
                r(u);
                break;
              }
          }
        },
      })
  );
}
function cw(e = null) {
  var t;
  return (t = m.useContext(uw)) != null ? t : e;
}
function Dp() {
  let e = m.useRef(!1);
  return (
    _e(
      () => (
        (e.current = !0),
        () => {
          e.current = !1;
        }
      ),
      []
    ),
    e
  );
}
var Eo = ((e) => (
  (e[(e.Forwards = 0)] = "Forwards"), (e[(e.Backwards = 1)] = "Backwards"), e
))(Eo || {});
function s5() {
  let e = m.useRef(0);
  return (
    D1(
      !0,
      "keydown",
      (t) => {
        t.key === "Tab" && (e.current = t.shiftKey ? 1 : 0);
      },
      !0
    ),
    e
  );
}
function dw(e) {
  if (!e) return new Set();
  if (typeof e == "function") return new Set(e());
  let t = new Set();
  for (let n of e.current) n.current instanceof HTMLElement && t.add(n.current);
  return t;
}
let o5 = "div";
var ai = ((e) => (
  (e[(e.None = 0)] = "None"),
  (e[(e.InitialFocus = 1)] = "InitialFocus"),
  (e[(e.TabLock = 2)] = "TabLock"),
  (e[(e.FocusLock = 4)] = "FocusLock"),
  (e[(e.RestoreFocus = 8)] = "RestoreFocus"),
  (e[(e.AutoFocus = 16)] = "AutoFocus"),
  e
))(ai || {});
function l5(e, t) {
  let n = m.useRef(null),
    r = et(n, t),
    {
      initialFocus: i,
      initialFocusFallback: s,
      containers: o,
      features: a = 15,
      ...u
    } = e;
  Cl() || (a = 0);
  let c = Ms(n);
  d5(a, { ownerDocument: c });
  let d = f5(a, {
    ownerDocument: c,
    container: n,
    initialFocus: i,
    initialFocusFallback: s,
  });
  m5(a, {
    ownerDocument: c,
    container: n,
    containers: o,
    previousActiveElement: d,
  });
  let f = s5(),
    p = re((h) => {
      let v = n.current;
      v &&
        ((b) => b())(() => {
          Qt(f.current, {
            [Eo.Forwards]: () => {
              Ur(v, Rt.First, { skipElements: [h.relatedTarget, s] });
            },
            [Eo.Backwards]: () => {
              Ur(v, Rt.Last, { skipElements: [h.relatedTarget, s] });
            },
          });
        });
    }),
    g = Is(!!(a & 2), "focus-trap#tab-lock"),
    x = Mi(),
    w = m.useRef(!1),
    j = {
      ref: r,
      onKeyDown(h) {
        h.key == "Tab" &&
          ((w.current = !0),
          x.requestAnimationFrame(() => {
            w.current = !1;
          }));
      },
      onBlur(h) {
        if (!(a & 4)) return;
        let v = dw(o);
        n.current instanceof HTMLElement && v.add(n.current);
        let b = h.relatedTarget;
        b instanceof HTMLElement &&
          b.dataset.headlessuiFocusGuard !== "true" &&
          (fw(v, b) ||
            (w.current
              ? Ur(
                  n.current,
                  Qt(f.current, {
                    [Eo.Forwards]: () => Rt.Next,
                    [Eo.Backwards]: () => Rt.Previous,
                  }) | Rt.WrapAround,
                  { relativeTo: h.target }
                )
              : h.target instanceof HTMLElement && Wn(h.target)));
      },
    },
    y = Le();
  return D.createElement(
    D.Fragment,
    null,
    g &&
      D.createElement(ll, {
        as: "button",
        type: "button",
        "data-headlessui-focus-guard": !0,
        onFocus: p,
        features: ks.Focusable,
      }),
    y({ ourProps: j, theirProps: u, defaultTag: o5, name: "FocusTrap" }),
    g &&
      D.createElement(ll, {
        as: "button",
        type: "button",
        "data-headlessui-focus-guard": !0,
        onFocus: p,
        features: ks.Focusable,
      })
  );
}
let a5 = Te(l5),
  u5 = Object.assign(a5, { features: ai });
function c5(e = !0) {
  let t = m.useRef(Cr.slice());
  return (
    Pp(
      ([n], [r]) => {
        r === !0 &&
          n === !1 &&
          lc(() => {
            t.current.splice(0);
          }),
          r === !1 && n === !0 && (t.current = Cr.slice());
      },
      [e, Cr, t]
    ),
    re(() => {
      var n;
      return (n = t.current.find((r) => r != null && r.isConnected)) != null
        ? n
        : null;
    })
  );
}
function d5(e, { ownerDocument: t }) {
  let n = !!(e & 8),
    r = c5(n);
  Pp(() => {
    n ||
      ((t == null ? void 0 : t.activeElement) ===
        (t == null ? void 0 : t.body) &&
        Wn(r()));
  }, [n]),
    rw(() => {
      n && Wn(r());
    });
}
function f5(
  e,
  { ownerDocument: t, container: n, initialFocus: r, initialFocusFallback: i }
) {
  let s = m.useRef(null),
    o = Is(!!(e & 1), "focus-trap#initial-focus"),
    a = Dp();
  return (
    Pp(() => {
      if (e === 0) return;
      if (!o) {
        i != null && i.current && Wn(i.current);
        return;
      }
      let u = n.current;
      u &&
        lc(() => {
          if (!a.current) return;
          let c = t == null ? void 0 : t.activeElement;
          if (r != null && r.current) {
            if ((r == null ? void 0 : r.current) === c) {
              s.current = c;
              return;
            }
          } else if (u.contains(c)) {
            s.current = c;
            return;
          }
          if (r != null && r.current) Wn(r.current);
          else {
            if (e & 16) {
              if (Ur(u, Rt.First | Rt.AutoFocus) !== al.Error) return;
            } else if (Ur(u, Rt.First) !== al.Error) return;
            if (
              i != null &&
              i.current &&
              (Wn(i.current),
              (t == null ? void 0 : t.activeElement) === i.current)
            )
              return;
            console.warn(
              "There are no focusable elements inside the <FocusTrap />"
            );
          }
          s.current = t == null ? void 0 : t.activeElement;
        });
    }, [i, o, e]),
    s
  );
}
function m5(
  e,
  { ownerDocument: t, container: n, containers: r, previousActiveElement: i }
) {
  let s = Dp(),
    o = !!(e & 4);
  I1(
    t == null ? void 0 : t.defaultView,
    "focus",
    (a) => {
      if (!o || !s.current) return;
      let u = dw(r);
      n.current instanceof HTMLElement && u.add(n.current);
      let c = i.current;
      if (!c) return;
      let d = a.target;
      d && d instanceof HTMLElement
        ? fw(u, d)
          ? ((i.current = d), Wn(d))
          : (a.preventDefault(), a.stopPropagation(), Wn(c))
        : Wn(i.current);
    },
    !0
  );
}
function fw(e, t) {
  for (let n of e) if (n.contains(t)) return !0;
  return !1;
}
function mw(e) {
  var t;
  return (
    !!(
      e.enter ||
      e.enterFrom ||
      e.enterTo ||
      e.leave ||
      e.leaveFrom ||
      e.leaveTo
    ) ||
    ((t = e.as) != null ? t : hw) !== m.Fragment ||
    D.Children.count(e.children) === 1
  );
}
let xc = m.createContext(null);
xc.displayName = "TransitionContext";
var p5 = ((e) => ((e.Visible = "visible"), (e.Hidden = "hidden"), e))(p5 || {});
function h5() {
  let e = m.useContext(xc);
  if (e === null)
    throw new Error(
      "A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />."
    );
  return e;
}
function g5() {
  let e = m.useContext(wc);
  if (e === null)
    throw new Error(
      "A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />."
    );
  return e;
}
let wc = m.createContext(null);
wc.displayName = "NestingContext";
function bc(e) {
  return "children" in e
    ? bc(e.children)
    : e.current
        .filter(({ el: t }) => t.current !== null)
        .filter(({ state: t }) => t === "visible").length > 0;
}
function pw(e, t) {
  let n = gr(e),
    r = m.useRef([]),
    i = Dp(),
    s = Mi(),
    o = re((g, x = Rr.Hidden) => {
      let w = r.current.findIndex(({ el: j }) => j === g);
      w !== -1 &&
        (Qt(x, {
          [Rr.Unmount]() {
            r.current.splice(w, 1);
          },
          [Rr.Hidden]() {
            r.current[w].state = "hidden";
          },
        }),
        s.microTask(() => {
          var j;
          !bc(r) && i.current && ((j = n.current) == null || j.call(n));
        }));
    }),
    a = re((g) => {
      let x = r.current.find(({ el: w }) => w === g);
      return (
        x
          ? x.state !== "visible" && (x.state = "visible")
          : r.current.push({ el: g, state: "visible" }),
        () => o(g, Rr.Unmount)
      );
    }),
    u = m.useRef([]),
    c = m.useRef(Promise.resolve()),
    d = m.useRef({ enter: [], leave: [] }),
    f = re((g, x, w) => {
      u.current.splice(0),
        t &&
          (t.chains.current[x] = t.chains.current[x].filter(([j]) => j !== g)),
        t == null ||
          t.chains.current[x].push([
            g,
            new Promise((j) => {
              u.current.push(j);
            }),
          ]),
        t == null ||
          t.chains.current[x].push([
            g,
            new Promise((j) => {
              Promise.all(d.current[x].map(([y, h]) => h)).then(() => j());
            }),
          ]),
        x === "enter"
          ? (c.current = c.current
              .then(() => (t == null ? void 0 : t.wait.current))
              .then(() => w(x)))
          : w(x);
    }),
    p = re((g, x, w) => {
      Promise.all(d.current[x].splice(0).map(([j, y]) => y))
        .then(() => {
          var j;
          (j = u.current.shift()) == null || j();
        })
        .then(() => w(x));
    });
  return m.useMemo(
    () => ({
      children: r,
      register: a,
      unregister: o,
      onStart: f,
      onStop: p,
      wait: c,
      chains: d,
    }),
    [a, o, r, f, p, d, c]
  );
}
let hw = m.Fragment,
  gw = Wr.RenderStrategy;
function y5(e, t) {
  var n, r;
  let {
      transition: i = !0,
      beforeEnter: s,
      afterEnter: o,
      beforeLeave: a,
      afterLeave: u,
      enter: c,
      enterFrom: d,
      enterTo: f,
      entered: p,
      leave: g,
      leaveFrom: x,
      leaveTo: w,
      ...j
    } = e,
    [y, h] = m.useState(null),
    v = m.useRef(null),
    b = mw(e),
    S = et(...(b ? [v, t, h] : t === null ? [] : [t])),
    E = (n = j.unmount) == null || n ? Rr.Unmount : Rr.Hidden,
    { show: N, appear: k, initial: L } = h5(),
    [F, z] = m.useState(N ? "visible" : "hidden"),
    A = g5(),
    { register: H, unregister: K } = A;
  _e(() => H(v), [H, v]),
    _e(() => {
      if (E === Rr.Hidden && v.current) {
        if (N && F !== "visible") {
          z("visible");
          return;
        }
        return Qt(F, { hidden: () => K(v), visible: () => H(v) });
      }
    }, [F, v, H, K, N, E]);
  let ae = Cl();
  _e(() => {
    if (b && ae && F === "visible" && v.current === null)
      throw new Error(
        "Did you forget to passthrough the `ref` to the actual DOM node?"
      );
  }, [v, F, ae, b]);
  let le = L && !k,
    Z = k && N && L,
    T = m.useRef(!1),
    I = pw(() => {
      T.current || (z("hidden"), K(v));
    }, A),
    W = re((Ge) => {
      T.current = !0;
      let bt = Ge ? "enter" : "leave";
      I.onStart(v, bt, (ct) => {
        ct === "enter"
          ? s == null || s()
          : ct === "leave" && (a == null || a());
      });
    }),
    V = re((Ge) => {
      let bt = Ge ? "enter" : "leave";
      (T.current = !1),
        I.onStop(v, bt, (ct) => {
          ct === "enter"
            ? o == null || o()
            : ct === "leave" && (u == null || u());
        }),
        bt === "leave" && !bc(I) && (z("hidden"), K(v));
    });
  m.useEffect(() => {
    (b && i) || (W(N), V(N));
  }, [N, b, i]);
  let oe = !(!i || !b || !ae || le),
    [, ce] = _p(oe, y, N, { start: W, end: V }),
    je = Sr({
      ref: S,
      className:
        ((r = Qf(
          j.className,
          Z && c,
          Z && d,
          ce.enter && c,
          ce.enter && ce.closed && d,
          ce.enter && !ce.closed && f,
          ce.leave && g,
          ce.leave && !ce.closed && x,
          ce.leave && ce.closed && w,
          !ce.transition && N && p
        )) == null
          ? void 0
          : r.trim()) || void 0,
      ...Cp(ce),
    }),
    pe = 0;
  F === "visible" && (pe |= ut.Open),
    F === "hidden" && (pe |= ut.Closed),
    ce.enter && (pe |= ut.Opening),
    ce.leave && (pe |= ut.Closing);
  let ve = Le();
  return D.createElement(
    wc.Provider,
    { value: I },
    D.createElement(
      Op,
      { value: pe },
      ve({
        ourProps: je,
        theirProps: j,
        defaultTag: hw,
        features: gw,
        visible: F === "visible",
        name: "Transition.Child",
      })
    )
  );
}
function v5(e, t) {
  let { show: n, appear: r = !1, unmount: i = !0, ...s } = e,
    o = m.useRef(null),
    a = mw(e),
    u = et(...(a ? [o, t] : t === null ? [] : [t]));
  Cl();
  let c = Hs();
  if (
    (n === void 0 && c !== null && (n = (c & ut.Open) === ut.Open),
    n === void 0)
  )
    throw new Error(
      "A <Transition /> is used but it is missing a `show={true | false}` prop."
    );
  let [d, f] = m.useState(n ? "visible" : "hidden"),
    p = pw(() => {
      n || f("hidden");
    }),
    [g, x] = m.useState(!0),
    w = m.useRef([n]);
  _e(() => {
    g !== !1 &&
      w.current[w.current.length - 1] !== n &&
      (w.current.push(n), x(!1));
  }, [w, n]);
  let j = m.useMemo(() => ({ show: n, appear: r, initial: g }), [n, r, g]);
  _e(() => {
    n ? f("visible") : !bc(p) && o.current !== null && f("hidden");
  }, [n, p]);
  let y = { unmount: i },
    h = re(() => {
      var S;
      g && x(!1), (S = e.beforeEnter) == null || S.call(e);
    }),
    v = re(() => {
      var S;
      g && x(!1), (S = e.beforeLeave) == null || S.call(e);
    }),
    b = Le();
  return D.createElement(
    wc.Provider,
    { value: p },
    D.createElement(
      xc.Provider,
      { value: j },
      b({
        ourProps: {
          ...y,
          as: m.Fragment,
          children: D.createElement(yw, {
            ref: u,
            ...y,
            ...s,
            beforeEnter: h,
            beforeLeave: v,
          }),
        },
        theirProps: {},
        defaultTag: m.Fragment,
        features: gw,
        visible: d === "visible",
        name: "Transition",
      })
    )
  );
}
function x5(e, t) {
  let n = m.useContext(xc) !== null,
    r = Hs() !== null;
  return D.createElement(
    D.Fragment,
    null,
    !n && r
      ? D.createElement(em, { ref: t, ...e })
      : D.createElement(yw, { ref: t, ...e })
  );
}
let em = Te(v5),
  yw = Te(y5),
  Ap = Te(x5),
  nn = Object.assign(em, { Child: Ap, Root: em });
var w5 = ((e) => (
    (e[(e.Open = 0)] = "Open"), (e[(e.Closed = 1)] = "Closed"), e
  ))(w5 || {}),
  b5 = ((e) => ((e[(e.SetTitleId = 0)] = "SetTitleId"), e))(b5 || {});
let j5 = {
    0(e, t) {
      return e.titleId === t.id ? e : { ...e, titleId: t.id };
    },
  },
  Ip = m.createContext(null);
Ip.displayName = "DialogContext";
function jc(e) {
  let t = m.useContext(Ip);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw (Error.captureStackTrace && Error.captureStackTrace(n, jc), n);
  }
  return t;
}
function E5(e, t) {
  return Qt(t.type, j5, e, t);
}
let _0 = Te(function (e, t) {
    let n = m.useId(),
      {
        id: r = `headlessui-dialog-${n}`,
        open: i,
        onClose: s,
        initialFocus: o,
        role: a = "dialog",
        autoFocus: u = !0,
        __demoMode: c = !1,
        unmount: d = !1,
        ...f
      } = e,
      p = m.useRef(!1);
    a = (function () {
      return a === "dialog" || a === "alertdialog"
        ? a
        : (p.current ||
            ((p.current = !0),
            console.warn(
              `Invalid role [${a}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`
            )),
          "dialog");
    })();
    let g = Hs();
    i === void 0 && g !== null && (i = (g & ut.Open) === ut.Open);
    let x = m.useRef(null),
      w = et(x, t),
      j = Ms(x),
      y = i ? 0 : 1,
      [h, v] = m.useReducer(E5, {
        titleId: null,
        descriptionId: null,
        panelRef: m.createRef(),
      }),
      b = re(() => s(!1)),
      S = re((V) => v({ type: 0, id: V })),
      E = Cl() ? y === 0 : !1,
      [N, k] = e5(),
      L = {
        get current() {
          var V;
          return (V = h.panelRef.current) != null ? V : x.current;
        },
      },
      F = cw(),
      { resolveContainers: z } = i5({
        mainTreeNode: F,
        portals: N,
        defaultContainers: [L],
      }),
      A = g !== null ? (g & ut.Closing) === ut.Closing : !1;
    $1(c || A ? !1 : E, {
      allowed: re(() => {
        var V, oe;
        return [
          (oe =
            (V = x.current) == null
              ? void 0
              : V.closest("[data-headlessui-portal]")) != null
            ? oe
            : null,
        ];
      }),
      disallowed: re(() => {
        var V;
        return [
          (V =
            F == null
              ? void 0
              : F.closest("body > *:not(#headlessui-portal-root)")) != null
            ? V
            : null,
        ];
      }),
    }),
      A1(E, z, (V) => {
        V.preventDefault(), b();
      }),
      n5(E, j == null ? void 0 : j.defaultView, (V) => {
        V.preventDefault(),
          V.stopPropagation(),
          document.activeElement &&
            "blur" in document.activeElement &&
            typeof document.activeElement.blur == "function" &&
            document.activeElement.blur(),
          b();
      }),
      z1(c || A ? !1 : E, j, z),
      R1(E, x, b);
    let [H, K] = dc(),
      ae = m.useMemo(
        () => [{ dialogState: y, close: b, setTitleId: S, unmount: d }, h],
        [y, h, b, S, d]
      ),
      le = m.useMemo(() => ({ open: y === 0 }), [y]),
      Z = {
        ref: w,
        id: r,
        role: a,
        tabIndex: -1,
        "aria-modal": c ? void 0 : y === 0 ? !0 : void 0,
        "aria-labelledby": h.titleId,
        "aria-describedby": H,
        unmount: d,
      },
      T = !r5(),
      I = ai.None;
    E &&
      !c &&
      ((I |= ai.RestoreFocus),
      (I |= ai.TabLock),
      u && (I |= ai.AutoFocus),
      T && (I |= ai.InitialFocus));
    let W = Le();
    return D.createElement(
      nw,
      null,
      D.createElement(
        k0,
        { force: !0 },
        D.createElement(
          aw,
          null,
          D.createElement(
            Ip.Provider,
            { value: ae },
            D.createElement(
              lw,
              { target: x },
              D.createElement(
                k0,
                { force: !1 },
                D.createElement(
                  K,
                  { slot: le },
                  D.createElement(
                    k,
                    null,
                    D.createElement(
                      u5,
                      {
                        initialFocus: o,
                        initialFocusFallback: x,
                        containers: z,
                        features: I,
                      },
                      D.createElement(
                        _1,
                        { value: b },
                        W({
                          ourProps: Z,
                          theirProps: f,
                          slot: le,
                          defaultTag: S5,
                          features: N5,
                          visible: y === 0,
                          name: "Dialog",
                        })
                      )
                    )
                  )
                )
              )
            )
          )
        )
      )
    );
  }),
  S5 = "div",
  N5 = Wr.RenderStrategy | Wr.Static;
function k5(e, t) {
  let { transition: n = !1, open: r, ...i } = e,
    s = Hs(),
    o = e.hasOwnProperty("open") || s !== null,
    a = e.hasOwnProperty("onClose");
  if (!o && !a)
    throw new Error(
      "You have to provide an `open` and an `onClose` prop to the `Dialog` component."
    );
  if (!o)
    throw new Error(
      "You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop."
    );
  if (!a)
    throw new Error(
      "You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop."
    );
  if (!s && typeof e.open != "boolean")
    throw new Error(
      `You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${e.open}`
    );
  if (typeof e.onClose != "function")
    throw new Error(
      `You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${e.onClose}`
    );
  return (r !== void 0 || n) && !i.static
    ? D.createElement(
        C0,
        null,
        D.createElement(
          nn,
          { show: r, transition: n, unmount: i.unmount },
          D.createElement(_0, { ref: t, ...i })
        )
      )
    : D.createElement(C0, null, D.createElement(_0, { ref: t, open: r, ...i }));
}
let C5 = "div";
function _5(e, t) {
  let n = m.useId(),
    { id: r = `headlessui-dialog-panel-${n}`, transition: i = !1, ...s } = e,
    [{ dialogState: o, unmount: a }, u] = jc("Dialog.Panel"),
    c = et(t, u.panelRef),
    d = m.useMemo(() => ({ open: o === 0 }), [o]),
    f = re((j) => {
      j.stopPropagation();
    }),
    p = { ref: c, id: r, onClick: f },
    g = i ? Ap : m.Fragment,
    x = i ? { unmount: a } : {},
    w = Le();
  return D.createElement(
    g,
    { ...x },
    w({
      ourProps: p,
      theirProps: s,
      slot: d,
      defaultTag: C5,
      name: "Dialog.Panel",
    })
  );
}
let P5 = "div";
function T5(e, t) {
  let { transition: n = !1, ...r } = e,
    [{ dialogState: i, unmount: s }] = jc("Dialog.Backdrop"),
    o = m.useMemo(() => ({ open: i === 0 }), [i]),
    a = { ref: t, "aria-hidden": !0 },
    u = n ? Ap : m.Fragment,
    c = n ? { unmount: s } : {},
    d = Le();
  return D.createElement(
    u,
    { ...c },
    d({
      ourProps: a,
      theirProps: r,
      slot: o,
      defaultTag: P5,
      name: "Dialog.Backdrop",
    })
  );
}
let $5 = "h2";
function R5(e, t) {
  let n = m.useId(),
    { id: r = `headlessui-dialog-title-${n}`, ...i } = e,
    [{ dialogState: s, setTitleId: o }] = jc("Dialog.Title"),
    a = et(t);
  m.useEffect(() => (o(r), () => o(null)), [r, o]);
  let u = m.useMemo(() => ({ open: s === 0 }), [s]),
    c = { ref: a, id: r };
  return Le()({
    ourProps: c,
    theirProps: i,
    slot: u,
    defaultTag: $5,
    name: "Dialog.Title",
  });
}
let F5 = Te(k5),
  L5 = Te(_5);
Te(T5);
let O5 = Te(R5),
  bi = Object.assign(F5, { Panel: L5, Title: O5, Description: k1 });
var P0;
let D5 =
  (P0 = D.startTransition) != null
    ? P0
    : function (e) {
        e();
      };
var A5 = ((e) => (
    (e[(e.Open = 0)] = "Open"), (e[(e.Closed = 1)] = "Closed"), e
  ))(A5 || {}),
  I5 = ((e) => (
    (e[(e.ToggleDisclosure = 0)] = "ToggleDisclosure"),
    (e[(e.CloseDisclosure = 1)] = "CloseDisclosure"),
    (e[(e.SetButtonId = 2)] = "SetButtonId"),
    (e[(e.SetPanelId = 3)] = "SetPanelId"),
    (e[(e.SetButtonElement = 4)] = "SetButtonElement"),
    (e[(e.SetPanelElement = 5)] = "SetPanelElement"),
    e
  ))(I5 || {});
let M5 = {
    0: (e) => ({
      ...e,
      disclosureState: Qt(e.disclosureState, { 0: 1, 1: 0 }),
    }),
    1: (e) => (e.disclosureState === 1 ? e : { ...e, disclosureState: 1 }),
    2(e, t) {
      return e.buttonId === t.buttonId ? e : { ...e, buttonId: t.buttonId };
    },
    3(e, t) {
      return e.panelId === t.panelId ? e : { ...e, panelId: t.panelId };
    },
    4(e, t) {
      return e.buttonElement === t.element
        ? e
        : { ...e, buttonElement: t.element };
    },
    5(e, t) {
      return e.panelElement === t.element
        ? e
        : { ...e, panelElement: t.element };
    },
  },
  Mp = m.createContext(null);
Mp.displayName = "DisclosureContext";
function zp(e) {
  let t = m.useContext(Mp);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Disclosure /> component.`);
    throw (Error.captureStackTrace && Error.captureStackTrace(n, zp), n);
  }
  return t;
}
let Up = m.createContext(null);
Up.displayName = "DisclosureAPIContext";
function vw(e) {
  let t = m.useContext(Up);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Disclosure /> component.`);
    throw (Error.captureStackTrace && Error.captureStackTrace(n, vw), n);
  }
  return t;
}
let Bp = m.createContext(null);
Bp.displayName = "DisclosurePanelContext";
function z5() {
  return m.useContext(Bp);
}
function U5(e, t) {
  return Qt(t.type, M5, e, t);
}
let B5 = m.Fragment;
function H5(e, t) {
  let { defaultOpen: n = !1, ...r } = e,
    i = m.useRef(null),
    s = et(
      t,
      S1((w) => {
        i.current = w;
      }, e.as === void 0 || e.as === m.Fragment)
    ),
    o = m.useReducer(U5, {
      disclosureState: n ? 0 : 1,
      buttonElement: null,
      panelElement: null,
      buttonId: null,
      panelId: null,
    }),
    [{ disclosureState: a, buttonId: u }, c] = o,
    d = re((w) => {
      c({ type: 1 });
      let j = hr(i);
      if (!j || !u) return;
      let y = w
        ? w instanceof HTMLElement
          ? w
          : w.current instanceof HTMLElement
          ? w.current
          : j.getElementById(u)
        : j.getElementById(u);
      y == null || y.focus();
    }),
    f = m.useMemo(() => ({ close: d }), [d]),
    p = m.useMemo(() => ({ open: a === 0, close: d }), [a, d]),
    g = { ref: s },
    x = Le();
  return D.createElement(
    Mp.Provider,
    { value: o },
    D.createElement(
      Up.Provider,
      { value: f },
      D.createElement(
        _1,
        { value: d },
        D.createElement(
          Op,
          { value: Qt(a, { 0: ut.Open, 1: ut.Closed }) },
          x({
            ourProps: g,
            theirProps: r,
            slot: p,
            defaultTag: B5,
            name: "Disclosure",
          })
        )
      )
    )
  );
}
let V5 = "button";
function W5(e, t) {
  let n = m.useId(),
    {
      id: r = `headlessui-disclosure-button-${n}`,
      disabled: i = !1,
      autoFocus: s = !1,
      ...o
    } = e,
    [a, u] = zp("Disclosure.Button"),
    c = z5(),
    d = c === null ? !1 : c === a.panelId,
    f = m.useRef(null),
    p = et(
      f,
      t,
      re((L) => {
        if (!d) return u({ type: 4, element: L });
      })
    );
  m.useEffect(() => {
    if (!d)
      return (
        u({ type: 2, buttonId: r }),
        () => {
          u({ type: 2, buttonId: null });
        }
      );
  }, [r, u, d]);
  let g = re((L) => {
      var F;
      if (d) {
        if (a.disclosureState === 1) return;
        switch (L.key) {
          case Ne.Space:
          case Ne.Enter:
            L.preventDefault(),
              L.stopPropagation(),
              u({ type: 0 }),
              (F = a.buttonElement) == null || F.focus();
            break;
        }
      } else
        switch (L.key) {
          case Ne.Space:
          case Ne.Enter:
            L.preventDefault(), L.stopPropagation(), u({ type: 0 });
            break;
        }
    }),
    x = re((L) => {
      switch (L.key) {
        case Ne.Space:
          L.preventDefault();
          break;
      }
    }),
    w = re((L) => {
      var F;
      uc(L.currentTarget) ||
        i ||
        (d
          ? (u({ type: 0 }), (F = a.buttonElement) == null || F.focus())
          : u({ type: 0 }));
    }),
    { isFocusVisible: j, focusProps: y } = oc({ autoFocus: s }),
    { isHovered: h, hoverProps: v } = sc({ isDisabled: i }),
    { pressed: b, pressProps: S } = y1({ disabled: i }),
    E = m.useMemo(
      () => ({
        open: a.disclosureState === 0,
        hover: h,
        active: b,
        disabled: i,
        focus: j,
        autofocus: s,
      }),
      [a, h, b, j, i, s]
    ),
    N = M1(e, a.buttonElement),
    k = Ns(
      d
        ? {
            ref: p,
            type: N,
            disabled: i || void 0,
            autoFocus: s,
            onKeyDown: g,
            onClick: w,
          }
        : {
            ref: p,
            id: r,
            type: N,
            "aria-expanded": a.disclosureState === 0,
            "aria-controls": a.panelElement ? a.panelId : void 0,
            disabled: i || void 0,
            autoFocus: s,
            onKeyDown: g,
            onKeyUp: x,
            onClick: w,
          },
      y,
      v,
      S
    );
  return Le()({
    ourProps: k,
    theirProps: o,
    slot: E,
    defaultTag: V5,
    name: "Disclosure.Button",
  });
}
let q5 = "div",
  K5 = Wr.RenderStrategy | Wr.Static;
function Q5(e, t) {
  let n = m.useId(),
    {
      id: r = `headlessui-disclosure-panel-${n}`,
      transition: i = !1,
      ...s
    } = e,
    [o, a] = zp("Disclosure.Panel"),
    { close: u } = vw("Disclosure.Panel"),
    [c, d] = m.useState(null),
    f = et(
      t,
      re((h) => {
        D5(() => a({ type: 5, element: h }));
      }),
      d
    );
  m.useEffect(
    () => (
      a({ type: 3, panelId: r }),
      () => {
        a({ type: 3, panelId: null });
      }
    ),
    [r, a]
  );
  let p = Hs(),
    [g, x] = _p(
      i,
      c,
      p !== null ? (p & ut.Open) === ut.Open : o.disclosureState === 0
    ),
    w = m.useMemo(
      () => ({ open: o.disclosureState === 0, close: u }),
      [o.disclosureState, u]
    ),
    j = { ref: f, id: r, ...Cp(x) },
    y = Le();
  return D.createElement(
    nw,
    null,
    D.createElement(
      Bp.Provider,
      { value: o.panelId },
      y({
        ourProps: j,
        theirProps: s,
        slot: w,
        defaultTag: q5,
        features: K5,
        visible: g,
        name: "Disclosure.Panel",
      })
    )
  );
}
let Y5 = Te(H5),
  G5 = Te(W5),
  X5 = Te(Q5),
  _t = Object.assign(Y5, { Button: G5, Panel: X5 });
function Z5(e, t) {
  let n = m.useRef({ left: 0, top: 0 });
  if (
    (_e(() => {
      if (!t) return;
      let i = t.getBoundingClientRect();
      i && (n.current = i);
    }, [e, t]),
    t == null || !e || t === document.activeElement)
  )
    return !1;
  let r = t.getBoundingClientRect();
  return r.top !== n.current.top || r.left !== n.current.left;
}
let T0 =
  /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;
function $0(e) {
  var t, n;
  let r = (t = e.innerText) != null ? t : "",
    i = e.cloneNode(!0);
  if (!(i instanceof HTMLElement)) return r;
  let s = !1;
  for (let a of i.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))
    a.remove(), (s = !0);
  let o = s ? ((n = i.innerText) != null ? n : "") : r;
  return T0.test(o) && (o = o.replace(T0, "")), o;
}
function J5(e) {
  let t = e.getAttribute("aria-label");
  if (typeof t == "string") return t.trim();
  let n = e.getAttribute("aria-labelledby");
  if (n) {
    let r = n
      .split(" ")
      .map((i) => {
        let s = document.getElementById(i);
        if (s) {
          let o = s.getAttribute("aria-label");
          return typeof o == "string" ? o.trim() : $0(s).trim();
        }
        return null;
      })
      .filter(Boolean);
    if (r.length > 0) return r.join(", ");
  }
  return $0(e).trim();
}
function eP(e) {
  let t = m.useRef(""),
    n = m.useRef("");
  return re(() => {
    let r = e.current;
    if (!r) return "";
    let i = r.innerText;
    if (t.current === i) return n.current;
    let s = J5(r).trim().toLowerCase();
    return (t.current = i), (n.current = s), s;
  });
}
var tP = ((e) => (
    (e[(e.Open = 0)] = "Open"), (e[(e.Closed = 1)] = "Closed"), e
  ))(tP || {}),
  nP = ((e) => (
    (e[(e.Pointer = 0)] = "Pointer"), (e[(e.Other = 1)] = "Other"), e
  ))(nP || {}),
  rP = ((e) => (
    (e[(e.OpenMenu = 0)] = "OpenMenu"),
    (e[(e.CloseMenu = 1)] = "CloseMenu"),
    (e[(e.GoToItem = 2)] = "GoToItem"),
    (e[(e.Search = 3)] = "Search"),
    (e[(e.ClearSearch = 4)] = "ClearSearch"),
    (e[(e.RegisterItem = 5)] = "RegisterItem"),
    (e[(e.UnregisterItem = 6)] = "UnregisterItem"),
    (e[(e.SetButtonElement = 7)] = "SetButtonElement"),
    (e[(e.SetItemsElement = 8)] = "SetItemsElement"),
    e
  ))(rP || {});
function $d(e, t = (n) => n) {
  let n = e.activeItemIndex !== null ? e.items[e.activeItemIndex] : null,
    r = kp(t(e.items.slice()), (s) => s.dataRef.current.domRef.current),
    i = n ? r.indexOf(n) : null;
  return i === -1 && (i = null), { items: r, activeItemIndex: i };
}
let iP = {
    1(e) {
      return e.menuState === 1
        ? e
        : { ...e, activeItemIndex: null, menuState: 1 };
    },
    0(e) {
      return e.menuState === 0 ? e : { ...e, __demoMode: !1, menuState: 0 };
    },
    2: (e, t) => {
      var n, r, i, s, o;
      if (e.menuState === 1) return e;
      let a = {
        ...e,
        searchQuery: "",
        activationTrigger: (n = t.trigger) != null ? n : 1,
        __demoMode: !1,
      };
      if (t.focus === Ct.Nothing) return { ...a, activeItemIndex: null };
      if (t.focus === Ct.Specific)
        return {
          ...a,
          activeItemIndex: e.items.findIndex((d) => d.id === t.id),
        };
      if (t.focus === Ct.Previous) {
        let d = e.activeItemIndex;
        if (d !== null) {
          let f = e.items[d].dataRef.current.domRef,
            p = Td(t, {
              resolveItems: () => e.items,
              resolveActiveIndex: () => e.activeItemIndex,
              resolveId: (g) => g.id,
              resolveDisabled: (g) => g.dataRef.current.disabled,
            });
          if (p !== null) {
            let g = e.items[p].dataRef.current.domRef;
            if (
              ((r = f.current) == null ? void 0 : r.previousElementSibling) ===
                g.current ||
              ((i = g.current) == null ? void 0 : i.previousElementSibling) ===
                null
            )
              return { ...a, activeItemIndex: p };
          }
        }
      } else if (t.focus === Ct.Next) {
        let d = e.activeItemIndex;
        if (d !== null) {
          let f = e.items[d].dataRef.current.domRef,
            p = Td(t, {
              resolveItems: () => e.items,
              resolveActiveIndex: () => e.activeItemIndex,
              resolveId: (g) => g.id,
              resolveDisabled: (g) => g.dataRef.current.disabled,
            });
          if (p !== null) {
            let g = e.items[p].dataRef.current.domRef;
            if (
              ((s = f.current) == null ? void 0 : s.nextElementSibling) ===
                g.current ||
              ((o = g.current) == null ? void 0 : o.nextElementSibling) === null
            )
              return { ...a, activeItemIndex: p };
          }
        }
      }
      let u = $d(e),
        c = Td(t, {
          resolveItems: () => u.items,
          resolveActiveIndex: () => u.activeItemIndex,
          resolveId: (d) => d.id,
          resolveDisabled: (d) => d.dataRef.current.disabled,
        });
      return { ...a, ...u, activeItemIndex: c };
    },
    3: (e, t) => {
      let n = e.searchQuery !== "" ? 0 : 1,
        r = e.searchQuery + t.value.toLowerCase(),
        i = (
          e.activeItemIndex !== null
            ? e.items
                .slice(e.activeItemIndex + n)
                .concat(e.items.slice(0, e.activeItemIndex + n))
            : e.items
        ).find((o) => {
          var a;
          return (
            ((a = o.dataRef.current.textValue) == null
              ? void 0
              : a.startsWith(r)) && !o.dataRef.current.disabled
          );
        }),
        s = i ? e.items.indexOf(i) : -1;
      return s === -1 || s === e.activeItemIndex
        ? { ...e, searchQuery: r }
        : { ...e, searchQuery: r, activeItemIndex: s, activationTrigger: 1 };
    },
    4(e) {
      return e.searchQuery === ""
        ? e
        : { ...e, searchQuery: "", searchActiveItemIndex: null };
    },
    5: (e, t) => {
      let n = $d(e, (r) => [...r, { id: t.id, dataRef: t.dataRef }]);
      return { ...e, ...n };
    },
    6: (e, t) => {
      let n = $d(e, (r) => {
        let i = r.findIndex((s) => s.id === t.id);
        return i !== -1 && r.splice(i, 1), r;
      });
      return { ...e, ...n, activationTrigger: 1 };
    },
    7: (e, t) =>
      e.buttonElement === t.element ? e : { ...e, buttonElement: t.element },
    8: (e, t) =>
      e.itemsElement === t.element ? e : { ...e, itemsElement: t.element },
  },
  Hp = m.createContext(null);
Hp.displayName = "MenuContext";
function Ec(e) {
  let t = m.useContext(Hp);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Menu /> component.`);
    throw (Error.captureStackTrace && Error.captureStackTrace(n, Ec), n);
  }
  return t;
}
function sP(e, t) {
  return Qt(t.type, iP, e, t);
}
let oP = m.Fragment;
function lP(e, t) {
  let { __demoMode: n = !1, ...r } = e,
    i = m.useReducer(sP, {
      __demoMode: n,
      menuState: n ? 0 : 1,
      buttonElement: null,
      itemsElement: null,
      items: [],
      searchQuery: "",
      activeItemIndex: null,
      activationTrigger: 1,
    }),
    [{ menuState: s, itemsElement: o, buttonElement: a }, u] = i,
    c = et(t);
  A1(s === 0, [a, o], (x, w) => {
    u({ type: 1 }),
      Np(w, Sp.Loose) || (x.preventDefault(), a == null || a.focus());
  });
  let d = re(() => {
      u({ type: 1 });
    }),
    f = m.useMemo(() => ({ open: s === 0, close: d }), [s, d]),
    p = { ref: c },
    g = Le();
  return D.createElement(
    B_,
    null,
    D.createElement(
      Hp.Provider,
      { value: i },
      D.createElement(
        Op,
        { value: Qt(s, { 0: ut.Open, 1: ut.Closed }) },
        g({ ourProps: p, theirProps: r, slot: f, defaultTag: oP, name: "Menu" })
      )
    )
  );
}
let aP = "button";
function uP(e, t) {
  var n;
  let r = m.useId(),
    {
      id: i = `headlessui-menu-button-${r}`,
      disabled: s = !1,
      autoFocus: o = !1,
      ...a
    } = e,
    [u, c] = Ec("Menu.Button"),
    d = M_(),
    f = et(
      t,
      I_(),
      re((N) => c({ type: 7, element: N }))
    ),
    p = re((N) => {
      switch (N.key) {
        case Ne.Space:
        case Ne.Enter:
        case Ne.ArrowDown:
          N.preventDefault(),
            N.stopPropagation(),
            Kt.flushSync(() => c({ type: 0 })),
            c({ type: 2, focus: Ct.First });
          break;
        case Ne.ArrowUp:
          N.preventDefault(),
            N.stopPropagation(),
            Kt.flushSync(() => c({ type: 0 })),
            c({ type: 2, focus: Ct.Last });
          break;
      }
    }),
    g = re((N) => {
      switch (N.key) {
        case Ne.Space:
          N.preventDefault();
          break;
      }
    }),
    x = re((N) => {
      var k;
      if (uc(N.currentTarget)) return N.preventDefault();
      s ||
        (u.menuState === 0
          ? (Kt.flushSync(() => c({ type: 1 })),
            (k = u.buttonElement) == null || k.focus({ preventScroll: !0 }))
          : (N.preventDefault(), c({ type: 0 })));
    }),
    { isFocusVisible: w, focusProps: j } = oc({ autoFocus: o }),
    { isHovered: y, hoverProps: h } = sc({ isDisabled: s }),
    { pressed: v, pressProps: b } = y1({ disabled: s }),
    S = m.useMemo(
      () => ({
        open: u.menuState === 0,
        active: v || u.menuState === 0,
        disabled: s,
        hover: y,
        focus: w,
        autofocus: o,
      }),
      [u, y, w, v, s, o]
    ),
    E = Ns(
      d(),
      {
        ref: f,
        id: i,
        type: M1(e, u.buttonElement),
        "aria-haspopup": "menu",
        "aria-controls": (n = u.itemsElement) == null ? void 0 : n.id,
        "aria-expanded": u.menuState === 0,
        disabled: s || void 0,
        autoFocus: o,
        onKeyDown: p,
        onKeyUp: g,
        onClick: x,
      },
      j,
      h,
      b
    );
  return Le()({
    ourProps: E,
    theirProps: a,
    slot: S,
    defaultTag: aP,
    name: "Menu.Button",
  });
}
let cP = "div",
  dP = Wr.RenderStrategy | Wr.Static;
function fP(e, t) {
  var n, r;
  let i = m.useId(),
    {
      id: s = `headlessui-menu-items-${i}`,
      anchor: o,
      portal: a = !1,
      modal: u = !0,
      transition: c = !1,
      ...d
    } = e,
    f = A_(o),
    [p, g] = Ec("Menu.Items"),
    [x, w] = U_(f),
    j = z_(),
    [y, h] = m.useState(null),
    v = et(
      t,
      f ? x : null,
      re((T) => g({ type: 8, element: T })),
      h
    ),
    b = Ms(p.itemsElement);
  f && (a = !0);
  let S = Hs(),
    [E, N] = _p(
      c,
      y,
      S !== null ? (S & ut.Open) === ut.Open : p.menuState === 0
    );
  R1(E, p.buttonElement, () => {
    g({ type: 1 });
  });
  let k = p.__demoMode ? !1 : u && p.menuState === 0;
  z1(k, b);
  let L = p.__demoMode ? !1 : u && p.menuState === 0;
  $1(L, {
    allowed: m.useCallback(
      () => [p.buttonElement, p.itemsElement],
      [p.buttonElement, p.itemsElement]
    ),
  });
  let F = p.menuState !== 0,
    z = Z5(F, p.buttonElement) ? !1 : E;
  m.useEffect(() => {
    let T = p.itemsElement;
    T &&
      p.menuState === 0 &&
      T !== (b == null ? void 0 : b.activeElement) &&
      T.focus({ preventScroll: !0 });
  }, [p.menuState, p.itemsElement, b]),
    $C(p.menuState === 0, {
      container: p.itemsElement,
      accept(T) {
        return T.getAttribute("role") === "menuitem"
          ? NodeFilter.FILTER_REJECT
          : T.hasAttribute("role")
          ? NodeFilter.FILTER_SKIP
          : NodeFilter.FILTER_ACCEPT;
      },
      walk(T) {
        T.setAttribute("role", "none");
      },
    });
  let A = Mi(),
    H = re((T) => {
      var I, W, V;
      switch ((A.dispose(), T.key)) {
        case Ne.Space:
          if (p.searchQuery !== "")
            return (
              T.preventDefault(),
              T.stopPropagation(),
              g({ type: 3, value: T.key })
            );
        case Ne.Enter:
          if (
            (T.preventDefault(),
            T.stopPropagation(),
            g({ type: 1 }),
            p.activeItemIndex !== null)
          ) {
            let { dataRef: oe } = p.items[p.activeItemIndex];
            (W = (I = oe.current) == null ? void 0 : I.domRef.current) ==
              null || W.click();
          }
          L1(p.buttonElement);
          break;
        case Ne.ArrowDown:
          return (
            T.preventDefault(),
            T.stopPropagation(),
            g({ type: 2, focus: Ct.Next })
          );
        case Ne.ArrowUp:
          return (
            T.preventDefault(),
            T.stopPropagation(),
            g({ type: 2, focus: Ct.Previous })
          );
        case Ne.Home:
        case Ne.PageUp:
          return (
            T.preventDefault(),
            T.stopPropagation(),
            g({ type: 2, focus: Ct.First })
          );
        case Ne.End:
        case Ne.PageDown:
          return (
            T.preventDefault(),
            T.stopPropagation(),
            g({ type: 2, focus: Ct.Last })
          );
        case Ne.Escape:
          T.preventDefault(),
            T.stopPropagation(),
            Kt.flushSync(() => g({ type: 1 })),
            (V = p.buttonElement) == null || V.focus({ preventScroll: !0 });
          break;
        case Ne.Tab:
          T.preventDefault(),
            T.stopPropagation(),
            Kt.flushSync(() => g({ type: 1 })),
            gC(p.buttonElement, T.shiftKey ? Rt.Previous : Rt.Next);
          break;
        default:
          T.key.length === 1 &&
            (g({ type: 3, value: T.key }),
            A.setTimeout(() => g({ type: 4 }), 350));
          break;
      }
    }),
    K = re((T) => {
      switch (T.key) {
        case Ne.Space:
          T.preventDefault();
          break;
      }
    }),
    ae = m.useMemo(() => ({ open: p.menuState === 0 }), [p.menuState]),
    le = Ns(f ? j() : {}, {
      "aria-activedescendant":
        p.activeItemIndex === null || (n = p.items[p.activeItemIndex]) == null
          ? void 0
          : n.id,
      "aria-labelledby": (r = p.buttonElement) == null ? void 0 : r.id,
      id: s,
      onKeyDown: H,
      onKeyUp: K,
      role: "menu",
      tabIndex: p.menuState === 0 ? 0 : void 0,
      ref: v,
      style: {
        ...d.style,
        ...w,
        "--button-width": lC(p.buttonElement, !0).width,
      },
      ...Cp(N),
    }),
    Z = Le();
  return D.createElement(
    aw,
    { enabled: a ? e.static || E : !1 },
    Z({
      ourProps: le,
      theirProps: d,
      slot: ae,
      defaultTag: cP,
      features: dP,
      visible: z,
      name: "Menu.Items",
    })
  );
}
let mP = m.Fragment;
function pP(e, t) {
  let n = m.useId(),
    { id: r = `headlessui-menu-item-${n}`, disabled: i = !1, ...s } = e,
    [o, a] = Ec("Menu.Item"),
    u = o.activeItemIndex !== null ? o.items[o.activeItemIndex].id === r : !1,
    c = m.useRef(null),
    d = et(t, c);
  _e(() => {
    if (!o.__demoMode && o.menuState === 0 && u && o.activationTrigger !== 0)
      return Yn().requestAnimationFrame(() => {
        var z, A;
        (A = (z = c.current) == null ? void 0 : z.scrollIntoView) == null ||
          A.call(z, { block: "nearest" });
      });
  }, [o.__demoMode, c, u, o.menuState, o.activationTrigger, o.activeItemIndex]);
  let f = eP(c),
    p = m.useRef({
      disabled: i,
      domRef: c,
      get textValue() {
        return f();
      },
    });
  _e(() => {
    p.current.disabled = i;
  }, [p, i]),
    _e(
      () => (a({ type: 5, id: r, dataRef: p }), () => a({ type: 6, id: r })),
      [p, r]
    );
  let g = re(() => {
      a({ type: 1 });
    }),
    x = re((z) => {
      if (i) return z.preventDefault();
      a({ type: 1 }), L1(o.buttonElement);
    }),
    w = re(() => {
      if (i) return a({ type: 2, focus: Ct.Nothing });
      a({ type: 2, focus: Ct.Specific, id: r });
    }),
    j = SC(),
    y = re((z) => {
      j.update(z),
        !i && (u || a({ type: 2, focus: Ct.Specific, id: r, trigger: 0 }));
    }),
    h = re((z) => {
      j.wasMoved(z) &&
        (i || u || a({ type: 2, focus: Ct.Specific, id: r, trigger: 0 }));
    }),
    v = re((z) => {
      j.wasMoved(z) && (i || (u && a({ type: 2, focus: Ct.Nothing })));
    }),
    [b, S] = mc(),
    [E, N] = dc(),
    k = m.useMemo(
      () => ({ active: u, focus: u, disabled: i, close: g }),
      [u, i, g]
    ),
    L = {
      id: r,
      ref: d,
      role: "menuitem",
      tabIndex: i === !0 ? void 0 : -1,
      "aria-disabled": i === !0 ? !0 : void 0,
      "aria-labelledby": b,
      "aria-describedby": E,
      disabled: void 0,
      onClick: x,
      onFocus: w,
      onPointerEnter: y,
      onMouseEnter: y,
      onPointerMove: h,
      onMouseMove: h,
      onPointerLeave: v,
      onMouseLeave: v,
    },
    F = Le();
  return D.createElement(
    S,
    null,
    D.createElement(
      N,
      null,
      F({
        ourProps: L,
        theirProps: s,
        slot: k,
        defaultTag: mP,
        name: "Menu.Item",
      })
    )
  );
}
let hP = "div";
function gP(e, t) {
  let [n, r] = mc(),
    i = e,
    s = { ref: t, "aria-labelledby": n, role: "group" },
    o = Le();
  return D.createElement(
    r,
    null,
    o({
      ourProps: s,
      theirProps: i,
      slot: {},
      defaultTag: hP,
      name: "Menu.Section",
    })
  );
}
let yP = "header";
function vP(e, t) {
  let n = m.useId(),
    { id: r = `headlessui-menu-heading-${n}`, ...i } = e,
    s = Ep();
  _e(() => s.register(r), [r, s.register]);
  let o = { id: r, ref: t, role: "presentation", ...s.props };
  return Le()({
    ourProps: o,
    theirProps: i,
    slot: {},
    defaultTag: yP,
    name: "Menu.Heading",
  });
}
let xP = "div";
function wP(e, t) {
  let n = e,
    r = { ref: t, role: "separator" };
  return Le()({
    ourProps: r,
    theirProps: n,
    slot: {},
    defaultTag: xP,
    name: "Menu.Separator",
  });
}
let bP = Te(lP),
  jP = Te(uP),
  EP = Te(fP),
  SP = Te(pP),
  NP = Te(gP),
  kP = Te(vP),
  CP = Te(wP),
  pn = Object.assign(bP, {
    Button: jP,
    Items: EP,
    Item: SP,
    Section: NP,
    Heading: kP,
    Separator: CP,
  });
var _P = ((e) => (
  (e[(e.RegisterOption = 0)] = "RegisterOption"),
  (e[(e.UnregisterOption = 1)] = "UnregisterOption"),
  e
))(_P || {});
let PP = {
    0(e, t) {
      let n = [
        ...e.options,
        { id: t.id, element: t.element, propsRef: t.propsRef },
      ];
      return { ...e, options: kp(n, (r) => r.element.current) };
    },
    1(e, t) {
      let n = e.options.slice(),
        r = e.options.findIndex((i) => i.id === t.id);
      return r === -1 ? e : (n.splice(r, 1), { ...e, options: n });
    },
  },
  Vp = m.createContext(null);
Vp.displayName = "RadioGroupDataContext";
function Wp(e) {
  let t = m.useContext(Vp);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <RadioGroup /> component.`);
    throw (Error.captureStackTrace && Error.captureStackTrace(n, Wp), n);
  }
  return t;
}
let qp = m.createContext(null);
qp.displayName = "RadioGroupActionsContext";
function Kp(e) {
  let t = m.useContext(qp);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <RadioGroup /> component.`);
    throw (Error.captureStackTrace && Error.captureStackTrace(n, Kp), n);
  }
  return t;
}
function TP(e, t) {
  return Qt(t.type, PP, e, t);
}
let $P = "div";
function RP(e, t) {
  let n = m.useId(),
    r = ac(),
    {
      id: i = `headlessui-radiogroup-${n}`,
      value: s,
      form: o,
      name: a,
      onChange: u,
      by: c,
      disabled: d = r || !1,
      defaultValue: f,
      ...p
    } = e,
    g = sC(c),
    [x, w] = m.useReducer(TP, { options: [] }),
    j = x.options,
    [y, h] = mc(),
    [v, b] = dc(),
    S = m.useRef(null),
    E = et(S, t),
    N = Mk(f),
    [k, L] = Ik(s, u, N),
    F = m.useMemo(() => j.find((V) => !V.propsRef.current.disabled), [j]),
    z = m.useMemo(() => j.some((V) => g(V.propsRef.current.value, k)), [j, k]),
    A = re((V) => {
      var oe;
      if (d || g(V, k)) return !1;
      let ce =
        (oe = j.find((je) => g(je.propsRef.current.value, V))) == null
          ? void 0
          : oe.propsRef.current;
      return ce != null && ce.disabled ? !1 : (L == null || L(V), !0);
    }),
    H = re((V) => {
      let oe = S.current;
      if (!oe) return;
      let ce = hr(oe),
        je = j
          .filter((pe) => pe.propsRef.current.disabled === !1)
          .map((pe) => pe.element.current);
      switch (V.key) {
        case Ne.Enter:
          zk(V.currentTarget);
          break;
        case Ne.ArrowLeft:
        case Ne.ArrowUp:
          if (
            (V.preventDefault(),
            V.stopPropagation(),
            Ur(je, Rt.Previous | Rt.WrapAround) === al.Success)
          ) {
            let pe = j.find(
              (ve) =>
                ve.element.current === (ce == null ? void 0 : ce.activeElement)
            );
            pe && A(pe.propsRef.current.value);
          }
          break;
        case Ne.ArrowRight:
        case Ne.ArrowDown:
          if (
            (V.preventDefault(),
            V.stopPropagation(),
            Ur(je, Rt.Next | Rt.WrapAround) === al.Success)
          ) {
            let pe = j.find(
              (ve) =>
                ve.element.current === (ce == null ? void 0 : ce.activeElement)
            );
            pe && A(pe.propsRef.current.value);
          }
          break;
        case Ne.Space:
          {
            V.preventDefault(), V.stopPropagation();
            let pe = j.find(
              (ve) =>
                ve.element.current === (ce == null ? void 0 : ce.activeElement)
            );
            pe && A(pe.propsRef.current.value);
          }
          break;
      }
    }),
    K = re((V) => (w({ type: 0, ...V }), () => w({ type: 1, id: V.id }))),
    ae = m.useMemo(
      () => ({
        value: k,
        firstOption: F,
        containsCheckedOption: z,
        disabled: d,
        compare: g,
        ...x,
      }),
      [k, F, z, d, g, x]
    ),
    le = m.useMemo(() => ({ registerOption: K, change: A }), [K, A]),
    Z = {
      ref: E,
      id: i,
      role: "radiogroup",
      "aria-labelledby": y,
      "aria-describedby": v,
      onKeyDown: H,
    },
    T = m.useMemo(() => ({ value: k }), [k]),
    I = m.useCallback(() => {
      if (N !== void 0) return A(N);
    }, [A, N]),
    W = Le();
  return D.createElement(
    b,
    { name: "RadioGroup.Description" },
    D.createElement(
      h,
      { name: "RadioGroup.Label" },
      D.createElement(
        qp.Provider,
        { value: le },
        D.createElement(
          Vp.Provider,
          { value: ae },
          a != null &&
            D.createElement(Wk, {
              disabled: d,
              data: { [a]: k || "on" },
              overrides: { type: "radio", checked: k != null },
              form: o,
              onReset: I,
            }),
          W({
            ourProps: Z,
            theirProps: p,
            slot: T,
            defaultTag: $P,
            name: "RadioGroup",
          })
        )
      )
    )
  );
}
let FP = "div";
function LP(e, t) {
  var n;
  let r = Wp("RadioGroup.Option"),
    i = Kp("RadioGroup.Option"),
    s = m.useId(),
    {
      id: o = `headlessui-radiogroup-option-${s}`,
      value: a,
      disabled: u = r.disabled || !1,
      autoFocus: c = !1,
      ...d
    } = e,
    f = m.useRef(null),
    p = et(f, t),
    [g, x] = mc(),
    [w, j] = dc(),
    y = gr({ value: a, disabled: u });
  _e(() => i.registerOption({ id: o, element: f, propsRef: y }), [o, i, f, y]);
  let h = re((A) => {
      var H;
      if (uc(A.currentTarget)) return A.preventDefault();
      i.change(a) && ((H = f.current) == null || H.focus());
    }),
    v = ((n = r.firstOption) == null ? void 0 : n.id) === o,
    { isFocusVisible: b, focusProps: S } = oc({ autoFocus: c }),
    { isHovered: E, hoverProps: N } = sc({ isDisabled: u }),
    k = r.compare(r.value, a),
    L = Ns(
      {
        ref: p,
        id: o,
        role: "radio",
        "aria-checked": k ? "true" : "false",
        "aria-labelledby": g,
        "aria-describedby": w,
        "aria-disabled": u ? !0 : void 0,
        tabIndex: u ? -1 : k || (!r.containsCheckedOption && v) ? 0 : -1,
        onClick: u ? void 0 : h,
        autoFocus: c,
      },
      S,
      N
    ),
    F = m.useMemo(
      () => ({
        checked: k,
        disabled: u,
        active: b,
        hover: E,
        focus: b,
        autofocus: c,
      }),
      [k, u, E, b, c]
    ),
    z = Le();
  return D.createElement(
    j,
    { name: "RadioGroup.Description" },
    D.createElement(
      x,
      { name: "RadioGroup.Label" },
      z({
        ourProps: L,
        theirProps: d,
        slot: F,
        defaultTag: FP,
        name: "RadioGroup.Option",
      })
    )
  );
}
let OP = "span";
function DP(e, t) {
  var n;
  let r = Wp("Radio"),
    i = Kp("Radio"),
    s = m.useId(),
    o = j1(),
    a = ac(),
    {
      id: u = o || `headlessui-radio-${s}`,
      value: c,
      disabled: d = r.disabled || a || !1,
      autoFocus: f = !1,
      ...p
    } = e,
    g = m.useRef(null),
    x = et(g, t),
    w = C1(),
    j = Yk(),
    y = gr({ value: c, disabled: d });
  _e(() => i.registerOption({ id: u, element: g, propsRef: y }), [u, i, g, y]);
  let h = re((z) => {
      var A;
      if (uc(z.currentTarget)) return z.preventDefault();
      i.change(c) && ((A = g.current) == null || A.focus());
    }),
    { isFocusVisible: v, focusProps: b } = oc({ autoFocus: f }),
    { isHovered: S, hoverProps: E } = sc({ isDisabled: d }),
    N = ((n = r.firstOption) == null ? void 0 : n.id) === u,
    k = r.compare(r.value, c),
    L = Ns(
      {
        ref: x,
        id: u,
        role: "radio",
        "aria-checked": k ? "true" : "false",
        "aria-labelledby": w,
        "aria-describedby": j,
        "aria-disabled": d ? !0 : void 0,
        tabIndex: d ? -1 : k || (!r.containsCheckedOption && N) ? 0 : -1,
        autoFocus: f,
        onClick: d ? void 0 : h,
      },
      b,
      E
    ),
    F = m.useMemo(
      () => ({ checked: k, disabled: d, hover: S, focus: v, autofocus: f }),
      [k, d, S, v, f]
    );
  return Le()({
    ourProps: L,
    theirProps: p,
    slot: F,
    defaultTag: OP,
    name: "Radio",
  });
}
let AP = Te(RP),
  IP = Te(LP),
  MP = Te(DP),
  zP = nC,
  UP = k1,
  St = Object.assign(AP, { Option: IP, Radio: MP, Label: zP, Description: UP });
function BP({ title: e, titleId: t, ...n }, r) {
  return m.createElement(
    "svg",
    Object.assign(
      {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: r,
        "aria-labelledby": t,
      },
      n
    ),
    e ? m.createElement("title", { id: t }, e) : null,
    m.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3",
    })
  );
}
const R0 = m.forwardRef(BP);
function HP({ title: e, titleId: t, ...n }, r) {
  return m.createElement(
    "svg",
    Object.assign(
      {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: r,
        "aria-labelledby": t,
      },
      n
    ),
    e ? m.createElement("title", { id: t }, e) : null,
    m.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18",
    })
  );
}
const F0 = m.forwardRef(HP);
function VP({ title: e, titleId: t, ...n }, r) {
  return m.createElement(
    "svg",
    Object.assign(
      {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: r,
        "aria-labelledby": t,
      },
      n
    ),
    e ? m.createElement("title", { id: t }, e) : null,
    m.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5",
    })
  );
}
const WP = m.forwardRef(VP);
function qP({ title: e, titleId: t, ...n }, r) {
  return m.createElement(
    "svg",
    Object.assign(
      {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: r,
        "aria-labelledby": t,
      },
      n
    ),
    e ? m.createElement("title", { id: t }, e) : null,
    m.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M15.75 19.5 8.25 12l7.5-7.5",
    })
  );
}
const KP = m.forwardRef(qP);
function QP({ title: e, titleId: t, ...n }, r) {
  return m.createElement(
    "svg",
    Object.assign(
      {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: r,
        "aria-labelledby": t,
      },
      n
    ),
    e ? m.createElement("title", { id: t }, e) : null,
    m.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "m8.25 4.5 7.5 7.5-7.5 7.5",
    })
  );
}
const YP = m.forwardRef(QP);
function GP({ title: e, titleId: t, ...n }, r) {
  return m.createElement(
    "svg",
    Object.assign(
      {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: r,
        "aria-labelledby": t,
      },
      n
    ),
    e ? m.createElement("title", { id: t }, e) : null,
    m.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z",
    })
  );
}
const XP = m.forwardRef(GP);
function ZP({ title: e, titleId: t, ...n }, r) {
  return m.createElement(
    "svg",
    Object.assign(
      {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: r,
        "aria-labelledby": t,
      },
      n
    ),
    e ? m.createElement("title", { id: t }, e) : null,
    m.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z",
    }),
    m.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z",
    })
  );
}
const JP = m.forwardRef(ZP);
function eT({ title: e, titleId: t, ...n }, r) {
  return m.createElement(
    "svg",
    Object.assign(
      {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: r,
        "aria-labelledby": t,
      },
      n
    ),
    e ? m.createElement("title", { id: t }, e) : null,
    m.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125",
    })
  );
}
const tT = m.forwardRef(eT);
function nT({ title: e, titleId: t, ...n }, r) {
  return m.createElement(
    "svg",
    Object.assign(
      {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: r,
        "aria-labelledby": t,
      },
      n
    ),
    e ? m.createElement("title", { id: t }, e) : null,
    m.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z",
    })
  );
}
const L0 = m.forwardRef(nT);
function rT({ title: e, titleId: t, ...n }, r) {
  return m.createElement(
    "svg",
    Object.assign(
      {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: r,
        "aria-labelledby": t,
      },
      n
    ),
    e ? m.createElement("title", { id: t }, e) : null,
    m.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z",
    })
  );
}
const xw = m.forwardRef(rT);
function iT({ title: e, titleId: t, ...n }, r) {
  return m.createElement(
    "svg",
    Object.assign(
      {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: r,
        "aria-labelledby": t,
      },
      n
    ),
    e ? m.createElement("title", { id: t }, e) : null,
    m.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M6 18 18 6M6 6l12 12",
    })
  );
}
const Qp = m.forwardRef(iT);
function sT(e) {
  return new Promise(async (t) => {
    const r = await (
      await fetch("http://localhost:8080/cart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(e),
      })
    ).json();
    t({ data: r });
  });
}
function ww() {
  return new Promise(async (e) => {
    const n = await (await fetch("http://localhost:8080/cart")).json();
    e({ data: n });
  });
}
function oT(e) {
  return new Promise(async (t) => {
    const r = await (
      await fetch("http://localhost:8080/cart/" + e.id, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(e),
      })
    ).json();
    t({ data: r });
  });
}
function bw(e) {
  return new Promise(async (t) => {
    await (
      await fetch("http://localhost:8080/cart/" + e, {
        method: "DELETE",
        headers: { "content-type": "application/json" },
      })
    ).json(),
      t({ data: { id: e } });
  });
}
function lT() {
  return new Promise(async (e) => {
    (await ww()).data.forEach(async (n) => {
      await bw(n.id);
    }),
      e({ status: "success" });
  });
}
function aT(e) {
  if (typeof document > "u") return;
  let t = document.head || document.getElementsByTagName("head")[0],
    n = document.createElement("style");
  (n.type = "text/css"),
    t.firstChild ? t.insertBefore(n, t.firstChild) : t.appendChild(n),
    n.styleSheet
      ? (n.styleSheet.cssText = e)
      : n.appendChild(document.createTextNode(e));
}
aT(`:root{--toastify-color-light: #fff;--toastify-color-dark: #121212;--toastify-color-info: #3498db;--toastify-color-success: #07bc0c;--toastify-color-warning: #f1c40f;--toastify-color-error: hsl(6, 78%, 57%);--toastify-color-transparent: rgba(255, 255, 255, .7);--toastify-icon-color-info: var(--toastify-color-info);--toastify-icon-color-success: var(--toastify-color-success);--toastify-icon-color-warning: var(--toastify-color-warning);--toastify-icon-color-error: var(--toastify-color-error);--toastify-container-width: fit-content;--toastify-toast-width: 320px;--toastify-toast-offset: 16px;--toastify-toast-top: max(var(--toastify-toast-offset), env(safe-area-inset-top));--toastify-toast-right: max(var(--toastify-toast-offset), env(safe-area-inset-right));--toastify-toast-left: max(var(--toastify-toast-offset), env(safe-area-inset-left));--toastify-toast-bottom: max(var(--toastify-toast-offset), env(safe-area-inset-bottom));--toastify-toast-background: #fff;--toastify-toast-padding: 14px;--toastify-toast-min-height: 64px;--toastify-toast-max-height: 800px;--toastify-toast-bd-radius: 6px;--toastify-toast-shadow: 0px 4px 12px rgba(0, 0, 0, .1);--toastify-font-family: sans-serif;--toastify-z-index: 9999;--toastify-text-color-light: #757575;--toastify-text-color-dark: #fff;--toastify-text-color-info: #fff;--toastify-text-color-success: #fff;--toastify-text-color-warning: #fff;--toastify-text-color-error: #fff;--toastify-spinner-color: #616161;--toastify-spinner-color-empty-area: #e0e0e0;--toastify-color-progress-light: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);--toastify-color-progress-dark: #bb86fc;--toastify-color-progress-info: var(--toastify-color-info);--toastify-color-progress-success: var(--toastify-color-success);--toastify-color-progress-warning: var(--toastify-color-warning);--toastify-color-progress-error: var(--toastify-color-error);--toastify-color-progress-bgo: .2}.Toastify__toast-container{z-index:var(--toastify-z-index);-webkit-transform:translate3d(0,0,var(--toastify-z-index));position:fixed;width:var(--toastify-container-width);box-sizing:border-box;color:#fff;display:flex;flex-direction:column}.Toastify__toast-container--top-left{top:var(--toastify-toast-top);left:var(--toastify-toast-left)}.Toastify__toast-container--top-center{top:var(--toastify-toast-top);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--top-right{top:var(--toastify-toast-top);right:var(--toastify-toast-right);align-items:end}.Toastify__toast-container--bottom-left{bottom:var(--toastify-toast-bottom);left:var(--toastify-toast-left)}.Toastify__toast-container--bottom-center{bottom:var(--toastify-toast-bottom);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--bottom-right{bottom:var(--toastify-toast-bottom);right:var(--toastify-toast-right);align-items:end}@media only screen and (max-width: 480px){.Toastify__toast-container{width:100vw;left:env(safe-area-inset-left);margin:0}.Toastify__toast-container--top-left,.Toastify__toast-container--top-center,.Toastify__toast-container--top-right{top:env(safe-area-inset-top);transform:translate(0)}.Toastify__toast-container--bottom-left,.Toastify__toast-container--bottom-center,.Toastify__toast-container--bottom-right{bottom:env(safe-area-inset-bottom);transform:translate(0)}.Toastify__toast-container--rtl{right:env(safe-area-inset-right);left:initial}.Toastify__toast{--toastify-toast-width: 100%;margin-bottom:0;border-radius:0}}.Toastify__toast{--y: 0;position:relative;touch-action:none;width:var(--toastify-toast-width);min-height:var(--toastify-toast-min-height);box-sizing:border-box;margin-bottom:1rem;padding:var(--toastify-toast-padding);border-radius:var(--toastify-toast-bd-radius);box-shadow:var(--toastify-toast-shadow);max-height:var(--toastify-toast-max-height);font-family:var(--toastify-font-family);z-index:0;display:flex;flex:1 auto;align-items:center;word-break:break-word}.Toastify__toast-container[data-stacked=true]{width:var(--toastify-toast-width)}.Toastify__toast--stacked{position:absolute;width:100%;transform:translate3d(0,var(--y),0) scale(var(--s));transition:transform .3s}.Toastify__toast--stacked[data-collapsed] .Toastify__toast-body,.Toastify__toast--stacked[data-collapsed] .Toastify__close-button{transition:opacity .1s}.Toastify__toast--stacked[data-collapsed=false]{overflow:visible}.Toastify__toast--stacked[data-collapsed=true]:not(:last-child)>*{opacity:0}.Toastify__toast--stacked:after{content:"";position:absolute;left:0;right:0;height:calc(var(--g) * 1px);bottom:100%}.Toastify__toast--stacked[data-pos=top]{top:0}.Toastify__toast--stacked[data-pos=bot]{bottom:0}.Toastify__toast--stacked[data-pos=bot].Toastify__toast--stacked:before{transform-origin:top}.Toastify__toast--stacked[data-pos=top].Toastify__toast--stacked:before{transform-origin:bottom}.Toastify__toast--stacked:before{content:"";position:absolute;left:0;right:0;bottom:0;height:100%;transform:scaleY(3);z-index:-1}.Toastify__toast--rtl{direction:rtl}.Toastify__toast--close-on-click{cursor:pointer}.Toastify__toast-icon{margin-inline-end:10px;width:22px;flex-shrink:0;display:flex}.Toastify--animate{animation-fill-mode:both;animation-duration:.5s}.Toastify--animate-icon{animation-fill-mode:both;animation-duration:.3s}.Toastify__toast-theme--dark{background:var(--toastify-color-dark);color:var(--toastify-text-color-dark)}.Toastify__toast-theme--light,.Toastify__toast-theme--colored.Toastify__toast--default{background:var(--toastify-color-light);color:var(--toastify-text-color-light)}.Toastify__toast-theme--colored.Toastify__toast--info{color:var(--toastify-text-color-info);background:var(--toastify-color-info)}.Toastify__toast-theme--colored.Toastify__toast--success{color:var(--toastify-text-color-success);background:var(--toastify-color-success)}.Toastify__toast-theme--colored.Toastify__toast--warning{color:var(--toastify-text-color-warning);background:var(--toastify-color-warning)}.Toastify__toast-theme--colored.Toastify__toast--error{color:var(--toastify-text-color-error);background:var(--toastify-color-error)}.Toastify__progress-bar-theme--light{background:var(--toastify-color-progress-light)}.Toastify__progress-bar-theme--dark{background:var(--toastify-color-progress-dark)}.Toastify__progress-bar--info{background:var(--toastify-color-progress-info)}.Toastify__progress-bar--success{background:var(--toastify-color-progress-success)}.Toastify__progress-bar--warning{background:var(--toastify-color-progress-warning)}.Toastify__progress-bar--error{background:var(--toastify-color-progress-error)}.Toastify__progress-bar-theme--colored.Toastify__progress-bar--info,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--success,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--warning,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--error{background:var(--toastify-color-transparent)}.Toastify__close-button{color:#fff;position:absolute;top:6px;right:6px;background:transparent;outline:none;border:none;padding:0;cursor:pointer;opacity:.7;transition:.3s ease;z-index:1}.Toastify__toast--rtl .Toastify__close-button{left:6px;right:unset}.Toastify__close-button--light{color:#000;opacity:.3}.Toastify__close-button>svg{fill:currentColor;height:16px;width:14px}.Toastify__close-button:hover,.Toastify__close-button:focus{opacity:1}@keyframes Toastify__trackProgress{0%{transform:scaleX(1)}to{transform:scaleX(0)}}.Toastify__progress-bar{position:absolute;bottom:0;left:0;width:100%;height:100%;z-index:1;opacity:.7;transform-origin:left}.Toastify__progress-bar--animated{animation:Toastify__trackProgress linear 1 forwards}.Toastify__progress-bar--controlled{transition:transform .2s}.Toastify__progress-bar--rtl{right:0;left:initial;transform-origin:right;border-bottom-left-radius:initial}.Toastify__progress-bar--wrp{position:absolute;overflow:hidden;bottom:0;left:0;width:100%;height:5px;border-bottom-left-radius:var(--toastify-toast-bd-radius);border-bottom-right-radius:var(--toastify-toast-bd-radius)}.Toastify__progress-bar--wrp[data-hidden=true]{opacity:0}.Toastify__progress-bar--bg{opacity:var(--toastify-color-progress-bgo);width:100%;height:100%}.Toastify__spinner{width:20px;height:20px;box-sizing:border-box;border:2px solid;border-radius:100%;border-color:var(--toastify-spinner-color-empty-area);border-right-color:var(--toastify-spinner-color);animation:Toastify__spin .65s linear infinite}@keyframes Toastify__bounceInRight{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(3000px,0,0)}60%{opacity:1;transform:translate3d(-25px,0,0)}75%{transform:translate3d(10px,0,0)}90%{transform:translate3d(-5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutRight{20%{opacity:1;transform:translate3d(-20px,var(--y),0)}to{opacity:0;transform:translate3d(2000px,var(--y),0)}}@keyframes Toastify__bounceInLeft{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(-3000px,0,0)}60%{opacity:1;transform:translate3d(25px,0,0)}75%{transform:translate3d(-10px,0,0)}90%{transform:translate3d(5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutLeft{20%{opacity:1;transform:translate3d(20px,var(--y),0)}to{opacity:0;transform:translate3d(-2000px,var(--y),0)}}@keyframes Toastify__bounceInUp{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,3000px,0)}60%{opacity:1;transform:translate3d(0,-20px,0)}75%{transform:translate3d(0,10px,0)}90%{transform:translate3d(0,-5px,0)}to{transform:translateZ(0)}}@keyframes Toastify__bounceOutUp{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,-2000px,0)}}@keyframes Toastify__bounceInDown{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,-3000px,0)}60%{opacity:1;transform:translate3d(0,25px,0)}75%{transform:translate3d(0,-10px,0)}90%{transform:translate3d(0,5px,0)}to{transform:none}}@keyframes Toastify__bounceOutDown{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,2000px,0)}}.Toastify__bounce-enter--top-left,.Toastify__bounce-enter--bottom-left{animation-name:Toastify__bounceInLeft}.Toastify__bounce-enter--top-right,.Toastify__bounce-enter--bottom-right{animation-name:Toastify__bounceInRight}.Toastify__bounce-enter--top-center{animation-name:Toastify__bounceInDown}.Toastify__bounce-enter--bottom-center{animation-name:Toastify__bounceInUp}.Toastify__bounce-exit--top-left,.Toastify__bounce-exit--bottom-left{animation-name:Toastify__bounceOutLeft}.Toastify__bounce-exit--top-right,.Toastify__bounce-exit--bottom-right{animation-name:Toastify__bounceOutRight}.Toastify__bounce-exit--top-center{animation-name:Toastify__bounceOutUp}.Toastify__bounce-exit--bottom-center{animation-name:Toastify__bounceOutDown}@keyframes Toastify__zoomIn{0%{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes Toastify__zoomOut{0%{opacity:1}50%{opacity:0;transform:translate3d(0,var(--y),0) scale3d(.3,.3,.3)}to{opacity:0}}.Toastify__zoom-enter{animation-name:Toastify__zoomIn}.Toastify__zoom-exit{animation-name:Toastify__zoomOut}@keyframes Toastify__flipIn{0%{transform:perspective(400px) rotateX(90deg);animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotateX(-20deg);animation-timing-function:ease-in}60%{transform:perspective(400px) rotateX(10deg);opacity:1}80%{transform:perspective(400px) rotateX(-5deg)}to{transform:perspective(400px)}}@keyframes Toastify__flipOut{0%{transform:translate3d(0,var(--y),0) perspective(400px)}30%{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(-20deg);opacity:1}to{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(90deg);opacity:0}}.Toastify__flip-enter{animation-name:Toastify__flipIn}.Toastify__flip-exit{animation-name:Toastify__flipOut}@keyframes Toastify__slideInRight{0%{transform:translate3d(110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInLeft{0%{transform:translate3d(-110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInUp{0%{transform:translate3d(0,110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInDown{0%{transform:translate3d(0,-110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideOutRight{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(110%,var(--y),0)}}@keyframes Toastify__slideOutLeft{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(-110%,var(--y),0)}}@keyframes Toastify__slideOutDown{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,500px,0)}}@keyframes Toastify__slideOutUp{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,-500px,0)}}.Toastify__slide-enter--top-left,.Toastify__slide-enter--bottom-left{animation-name:Toastify__slideInLeft}.Toastify__slide-enter--top-right,.Toastify__slide-enter--bottom-right{animation-name:Toastify__slideInRight}.Toastify__slide-enter--top-center{animation-name:Toastify__slideInDown}.Toastify__slide-enter--bottom-center{animation-name:Toastify__slideInUp}.Toastify__slide-exit--top-left,.Toastify__slide-exit--bottom-left{animation-name:Toastify__slideOutLeft;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-right,.Toastify__slide-exit--bottom-right{animation-name:Toastify__slideOutRight;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-center{animation-name:Toastify__slideOutUp;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--bottom-center{animation-name:Toastify__slideOutDown;animation-timing-function:ease-in;animation-duration:.3s}@keyframes Toastify__spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}
`);
var _l = (e) => typeof e == "number" && !isNaN(e),
  Di = (e) => typeof e == "string",
  dr = (e) => typeof e == "function",
  uT = (e) => Di(e) || _l(e),
  tm = (e) => (Di(e) || dr(e) ? e : null),
  cT = (e, t) => (e === !1 || (_l(e) && e > 0) ? e : t),
  nm = (e) => m.isValidElement(e) || Di(e) || dr(e) || _l(e);
function dT(e, t, n = 300) {
  let { scrollHeight: r, style: i } = e;
  requestAnimationFrame(() => {
    (i.minHeight = "initial"),
      (i.height = r + "px"),
      (i.transition = `all ${n}ms`),
      requestAnimationFrame(() => {
        (i.height = "0"), (i.padding = "0"), (i.margin = "0"), setTimeout(t, n);
      });
  });
}
function fT({
  enter: e,
  exit: t,
  appendPosition: n = !1,
  collapse: r = !0,
  collapseDuration: i = 300,
}) {
  return function ({
    children: s,
    position: o,
    preventExitTransition: a,
    done: u,
    nodeRef: c,
    isIn: d,
    playToast: f,
  }) {
    let p = n ? `${e}--${o}` : e,
      g = n ? `${t}--${o}` : t,
      x = m.useRef(0);
    return (
      m.useLayoutEffect(() => {
        let w = c.current,
          j = p.split(" "),
          y = (h) => {
            h.target === c.current &&
              (f(),
              w.removeEventListener("animationend", y),
              w.removeEventListener("animationcancel", y),
              x.current === 0 &&
                h.type !== "animationcancel" &&
                w.classList.remove(...j));
          };
        w.classList.add(...j),
          w.addEventListener("animationend", y),
          w.addEventListener("animationcancel", y);
      }, []),
      m.useEffect(() => {
        let w = c.current,
          j = () => {
            w.removeEventListener("animationend", j), r ? dT(w, u, i) : u();
          };
        d ||
          (a
            ? j()
            : ((x.current = 1),
              (w.className += ` ${g}`),
              w.addEventListener("animationend", j)));
      }, [d]),
      D.createElement(D.Fragment, null, s)
    );
  };
}
function O0(e, t) {
  return {
    content: jw(e.content, e.props),
    containerId: e.props.containerId,
    id: e.props.toastId,
    theme: e.props.theme,
    type: e.props.type,
    data: e.props.data || {},
    isLoading: e.props.isLoading,
    icon: e.props.icon,
    reason: e.removalReason,
    status: t,
  };
}
function jw(e, t, n = !1) {
  return m.isValidElement(e) && !Di(e.type)
    ? m.cloneElement(e, {
        closeToast: t.closeToast,
        toastProps: t,
        data: t.data,
        isPaused: n,
      })
    : dr(e)
    ? e({ closeToast: t.closeToast, toastProps: t, data: t.data, isPaused: n })
    : e;
}
function mT({ closeToast: e, theme: t, ariaLabel: n = "close" }) {
  return D.createElement(
    "button",
    {
      className: `Toastify__close-button Toastify__close-button--${t}`,
      type: "button",
      onClick: (r) => {
        r.stopPropagation(), e(!0);
      },
      "aria-label": n,
    },
    D.createElement(
      "svg",
      { "aria-hidden": "true", viewBox: "0 0 14 16" },
      D.createElement("path", {
        fillRule: "evenodd",
        d: "M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z",
      })
    )
  );
}
function pT({
  delay: e,
  isRunning: t,
  closeToast: n,
  type: r = "default",
  hide: i,
  className: s,
  controlledProgress: o,
  progress: a,
  rtl: u,
  isIn: c,
  theme: d,
}) {
  let f = i || (o && a === 0),
    p = {
      animationDuration: `${e}ms`,
      animationPlayState: t ? "running" : "paused",
    };
  o && (p.transform = `scaleX(${a})`);
  let g = xi(
      "Toastify__progress-bar",
      o
        ? "Toastify__progress-bar--controlled"
        : "Toastify__progress-bar--animated",
      `Toastify__progress-bar-theme--${d}`,
      `Toastify__progress-bar--${r}`,
      { "Toastify__progress-bar--rtl": u }
    ),
    x = dr(s) ? s({ rtl: u, type: r, defaultClassName: g }) : xi(g, s),
    w = {
      [o && a >= 1 ? "onTransitionEnd" : "onAnimationEnd"]:
        o && a < 1
          ? null
          : () => {
              c && n();
            },
    };
  return D.createElement(
    "div",
    { className: "Toastify__progress-bar--wrp", "data-hidden": f },
    D.createElement("div", {
      className: `Toastify__progress-bar--bg Toastify__progress-bar-theme--${d} Toastify__progress-bar--${r}`,
    }),
    D.createElement("div", {
      role: "progressbar",
      "aria-hidden": f ? "true" : "false",
      "aria-label": "notification timer",
      className: x,
      style: p,
      ...w,
    })
  );
}
var hT = 1,
  Ew = () => `${hT++}`;
function gT(e, t, n) {
  let r = 1,
    i = 0,
    s = [],
    o = [],
    a = t,
    u = new Map(),
    c = new Set(),
    d = (h) => (c.add(h), () => c.delete(h)),
    f = () => {
      (o = Array.from(u.values())), c.forEach((h) => h());
    },
    p = ({ containerId: h, toastId: v, updateId: b }) => {
      let S = h ? h !== e : e !== 1,
        E = u.has(v) && b == null;
      return S || E;
    },
    g = (h, v) => {
      u.forEach((b) => {
        var S;
        (v == null || v === b.props.toastId) &&
          ((S = b.toggle) == null || S.call(b, h));
      });
    },
    x = (h) => {
      var v, b;
      (b = (v = h.props) == null ? void 0 : v.onClose) == null ||
        b.call(v, h.removalReason),
        (h.isActive = !1);
    },
    w = (h) => {
      if (h == null) u.forEach(x);
      else {
        let v = u.get(h);
        v && x(v);
      }
      f();
    },
    j = () => {
      (i -= s.length), (s = []);
    },
    y = (h) => {
      var v, b;
      let { toastId: S, updateId: E } = h.props,
        N = E == null;
      h.staleId && u.delete(h.staleId),
        (h.isActive = !0),
        u.set(S, h),
        f(),
        n(O0(h, N ? "added" : "updated")),
        N && ((b = (v = h.props).onOpen) == null || b.call(v));
    };
  return {
    id: e,
    props: a,
    observe: d,
    toggle: g,
    removeToast: w,
    toasts: u,
    clearQueue: j,
    buildToast: (h, v) => {
      if (p(v)) return;
      let { toastId: b, updateId: S, data: E, staleId: N, delay: k } = v,
        L = S == null;
      L && i++;
      let F = {
        ...a,
        style: a.toastStyle,
        key: r++,
        ...Object.fromEntries(Object.entries(v).filter(([A, H]) => H != null)),
        toastId: b,
        updateId: S,
        data: E,
        isIn: !1,
        className: tm(v.className || a.toastClassName),
        progressClassName: tm(v.progressClassName || a.progressClassName),
        autoClose: v.isLoading ? !1 : cT(v.autoClose, a.autoClose),
        closeToast(A) {
          (u.get(b).removalReason = A), w(b);
        },
        deleteToast() {
          let A = u.get(b);
          if (A != null) {
            if (
              (n(O0(A, "removed")),
              u.delete(b),
              i--,
              i < 0 && (i = 0),
              s.length > 0)
            ) {
              y(s.shift());
              return;
            }
            f();
          }
        },
      };
      (F.closeButton = a.closeButton),
        v.closeButton === !1 || nm(v.closeButton)
          ? (F.closeButton = v.closeButton)
          : v.closeButton === !0 &&
            (F.closeButton = nm(a.closeButton) ? a.closeButton : !0);
      let z = { content: h, props: F, staleId: N };
      a.limit && a.limit > 0 && i > a.limit && L
        ? s.push(z)
        : _l(k)
        ? setTimeout(() => {
            y(z);
          }, k)
        : y(z);
    },
    setProps(h) {
      a = h;
    },
    setToggle: (h, v) => {
      let b = u.get(h);
      b && (b.toggle = v);
    },
    isToastActive: (h) => {
      var v;
      return (v = u.get(h)) == null ? void 0 : v.isActive;
    },
    getSnapshot: () => o,
  };
}
var Lt = new Map(),
  dl = [],
  rm = new Set(),
  yT = (e) => rm.forEach((t) => t(e)),
  Sw = () => Lt.size > 0;
function vT() {
  dl.forEach((e) => kw(e.content, e.options)), (dl = []);
}
var xT = (e, { containerId: t }) => {
  var n;
  return (n = Lt.get(t || 1)) == null ? void 0 : n.toasts.get(e);
};
function Nw(e, t) {
  var n;
  if (t) return !!((n = Lt.get(t)) != null && n.isToastActive(e));
  let r = !1;
  return (
    Lt.forEach((i) => {
      i.isToastActive(e) && (r = !0);
    }),
    r
  );
}
function wT(e) {
  if (!Sw()) {
    dl = dl.filter((t) => e != null && t.options.toastId !== e);
    return;
  }
  if (e == null || uT(e))
    Lt.forEach((t) => {
      t.removeToast(e);
    });
  else if (e && ("containerId" in e || "id" in e)) {
    let t = Lt.get(e.containerId);
    t
      ? t.removeToast(e.id)
      : Lt.forEach((n) => {
          n.removeToast(e.id);
        });
  }
}
var bT = (e = {}) => {
  Lt.forEach((t) => {
    t.props.limit &&
      (!e.containerId || t.id === e.containerId) &&
      t.clearQueue();
  });
};
function kw(e, t) {
  nm(e) &&
    (Sw() || dl.push({ content: e, options: t }),
    Lt.forEach((n) => {
      n.buildToast(e, t);
    }));
}
function jT(e) {
  var t;
  (t = Lt.get(e.containerId || 1)) == null || t.setToggle(e.id, e.fn);
}
function Cw(e, t) {
  Lt.forEach((n) => {
    (t == null ||
      !(t != null && t.containerId) ||
      (t == null ? void 0 : t.containerId) === n.id) &&
      n.toggle(e, t == null ? void 0 : t.id);
  });
}
function ET(e) {
  let t = e.containerId || 1;
  return {
    subscribe(n) {
      let r = gT(t, e, yT);
      Lt.set(t, r);
      let i = r.observe(n);
      return (
        vT(),
        () => {
          i(), Lt.delete(t);
        }
      );
    },
    setProps(n) {
      var r;
      (r = Lt.get(t)) == null || r.setProps(n);
    },
    getSnapshot() {
      var n;
      return (n = Lt.get(t)) == null ? void 0 : n.getSnapshot();
    },
  };
}
function ST(e) {
  return (
    rm.add(e),
    () => {
      rm.delete(e);
    }
  );
}
function NT(e) {
  return e && (Di(e.toastId) || _l(e.toastId)) ? e.toastId : Ew();
}
function Pl(e, t) {
  return kw(e, t), t.toastId;
}
function Sc(e, t) {
  return { ...t, type: (t && t.type) || e, toastId: NT(t) };
}
function Nc(e) {
  return (t, n) => Pl(t, Sc(e, n));
}
function ke(e, t) {
  return Pl(e, Sc("default", t));
}
ke.loading = (e, t) =>
  Pl(
    e,
    Sc("default", {
      isLoading: !0,
      autoClose: !1,
      closeOnClick: !1,
      closeButton: !1,
      draggable: !1,
      ...t,
    })
  );
function kT(e, { pending: t, error: n, success: r }, i) {
  let s;
  t && (s = Di(t) ? ke.loading(t, i) : ke.loading(t.render, { ...i, ...t }));
  let o = {
      isLoading: null,
      autoClose: null,
      closeOnClick: null,
      closeButton: null,
      draggable: null,
    },
    a = (c, d, f) => {
      if (d == null) {
        ke.dismiss(s);
        return;
      }
      let p = { type: c, ...o, ...i, data: f },
        g = Di(d) ? { render: d } : d;
      return s ? ke.update(s, { ...p, ...g }) : ke(g.render, { ...p, ...g }), f;
    },
    u = dr(e) ? e() : e;
  return u.then((c) => a("success", r, c)).catch((c) => a("error", n, c)), u;
}
ke.promise = kT;
ke.success = Nc("success");
ke.info = Nc("info");
ke.error = Nc("error");
ke.warning = Nc("warning");
ke.warn = ke.warning;
ke.dark = (e, t) => Pl(e, Sc("default", { theme: "dark", ...t }));
function CT(e) {
  wT(e);
}
ke.dismiss = CT;
ke.clearWaitingQueue = bT;
ke.isActive = Nw;
ke.update = (e, t = {}) => {
  let n = xT(e, t);
  if (n) {
    let { props: r, content: i } = n,
      s = { delay: 100, ...r, ...t, toastId: t.toastId || e, updateId: Ew() };
    s.toastId !== e && (s.staleId = e);
    let o = s.render || i;
    delete s.render, Pl(o, s);
  }
};
ke.done = (e) => {
  ke.update(e, { progress: 1 });
};
ke.onChange = ST;
ke.play = (e) => Cw(!0, e);
ke.pause = (e) => Cw(!1, e);
function _T(e) {
  var t;
  let { subscribe: n, getSnapshot: r, setProps: i } = m.useRef(ET(e)).current;
  i(e);
  let s = (t = m.useSyncExternalStore(n, r, r)) == null ? void 0 : t.slice();
  function o(a) {
    if (!s) return [];
    let u = new Map();
    return (
      e.newestOnTop && s.reverse(),
      s.forEach((c) => {
        let { position: d } = c.props;
        u.has(d) || u.set(d, []), u.get(d).push(c);
      }),
      Array.from(u, (c) => a(c[0], c[1]))
    );
  }
  return {
    getToastToRender: o,
    isToastActive: Nw,
    count: s == null ? void 0 : s.length,
  };
}
function PT(e) {
  let [t, n] = m.useState(!1),
    [r, i] = m.useState(!1),
    s = m.useRef(null),
    o = m.useRef({
      start: 0,
      delta: 0,
      removalDistance: 0,
      canCloseOnClick: !0,
      canDrag: !1,
      didMove: !1,
    }).current,
    {
      autoClose: a,
      pauseOnHover: u,
      closeToast: c,
      onClick: d,
      closeOnClick: f,
    } = e;
  jT({ id: e.toastId, containerId: e.containerId, fn: n }),
    m.useEffect(() => {
      if (e.pauseOnFocusLoss)
        return (
          p(),
          () => {
            g();
          }
        );
    }, [e.pauseOnFocusLoss]);
  function p() {
    document.hasFocus() || y(),
      window.addEventListener("focus", j),
      window.addEventListener("blur", y);
  }
  function g() {
    window.removeEventListener("focus", j),
      window.removeEventListener("blur", y);
  }
  function x(N) {
    if (e.draggable === !0 || e.draggable === N.pointerType) {
      h();
      let k = s.current;
      (o.canCloseOnClick = !0),
        (o.canDrag = !0),
        (k.style.transition = "none"),
        e.draggableDirection === "x"
          ? ((o.start = N.clientX),
            (o.removalDistance = k.offsetWidth * (e.draggablePercent / 100)))
          : ((o.start = N.clientY),
            (o.removalDistance =
              (k.offsetHeight *
                (e.draggablePercent === 80
                  ? e.draggablePercent * 1.5
                  : e.draggablePercent)) /
              100));
    }
  }
  function w(N) {
    let {
      top: k,
      bottom: L,
      left: F,
      right: z,
    } = s.current.getBoundingClientRect();
    N.nativeEvent.type !== "touchend" &&
    e.pauseOnHover &&
    N.clientX >= F &&
    N.clientX <= z &&
    N.clientY >= k &&
    N.clientY <= L
      ? y()
      : j();
  }
  function j() {
    n(!0);
  }
  function y() {
    n(!1);
  }
  function h() {
    (o.didMove = !1),
      document.addEventListener("pointermove", b),
      document.addEventListener("pointerup", S);
  }
  function v() {
    document.removeEventListener("pointermove", b),
      document.removeEventListener("pointerup", S);
  }
  function b(N) {
    let k = s.current;
    if (o.canDrag && k) {
      (o.didMove = !0),
        t && y(),
        e.draggableDirection === "x"
          ? (o.delta = N.clientX - o.start)
          : (o.delta = N.clientY - o.start),
        o.start !== N.clientX && (o.canCloseOnClick = !1);
      let L =
        e.draggableDirection === "x"
          ? `${o.delta}px, var(--y)`
          : `0, calc(${o.delta}px + var(--y))`;
      (k.style.transform = `translate3d(${L},0)`),
        (k.style.opacity = `${1 - Math.abs(o.delta / o.removalDistance)}`);
    }
  }
  function S() {
    v();
    let N = s.current;
    if (o.canDrag && o.didMove && N) {
      if (((o.canDrag = !1), Math.abs(o.delta) > o.removalDistance)) {
        i(!0), e.closeToast(!0), e.collapseAll();
        return;
      }
      (N.style.transition = "transform 0.2s, opacity 0.2s"),
        N.style.removeProperty("transform"),
        N.style.removeProperty("opacity");
    }
  }
  let E = { onPointerDown: x, onPointerUp: w };
  return (
    a && u && ((E.onMouseEnter = y), e.stacked || (E.onMouseLeave = j)),
    f &&
      (E.onClick = (N) => {
        d && d(N), o.canCloseOnClick && c(!0);
      }),
    {
      playToast: j,
      pauseToast: y,
      isRunning: t,
      preventExitTransition: r,
      toastRef: s,
      eventHandlers: E,
    }
  );
}
var TT = typeof window < "u" ? m.useLayoutEffect : m.useEffect,
  kc = ({ theme: e, type: t, isLoading: n, ...r }) =>
    D.createElement("svg", {
      viewBox: "0 0 24 24",
      width: "100%",
      height: "100%",
      fill:
        e === "colored" ? "currentColor" : `var(--toastify-icon-color-${t})`,
      ...r,
    });
function $T(e) {
  return D.createElement(
    kc,
    { ...e },
    D.createElement("path", {
      d: "M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z",
    })
  );
}
function RT(e) {
  return D.createElement(
    kc,
    { ...e },
    D.createElement("path", {
      d: "M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z",
    })
  );
}
function FT(e) {
  return D.createElement(
    kc,
    { ...e },
    D.createElement("path", {
      d: "M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z",
    })
  );
}
function LT(e) {
  return D.createElement(
    kc,
    { ...e },
    D.createElement("path", {
      d: "M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z",
    })
  );
}
function OT() {
  return D.createElement("div", { className: "Toastify__spinner" });
}
var im = { info: RT, warning: $T, success: FT, error: LT, spinner: OT },
  DT = (e) => e in im;
function AT({ theme: e, type: t, isLoading: n, icon: r }) {
  let i = null,
    s = { theme: e, type: t };
  return (
    r === !1 ||
      (dr(r)
        ? (i = r({ ...s, isLoading: n }))
        : m.isValidElement(r)
        ? (i = m.cloneElement(r, s))
        : n
        ? (i = im.spinner())
        : DT(t) && (i = im[t](s))),
    i
  );
}
var IT = (e) => {
    let {
        isRunning: t,
        preventExitTransition: n,
        toastRef: r,
        eventHandlers: i,
        playToast: s,
      } = PT(e),
      {
        closeButton: o,
        children: a,
        autoClose: u,
        onClick: c,
        type: d,
        hideProgressBar: f,
        closeToast: p,
        transition: g,
        position: x,
        className: w,
        style: j,
        progressClassName: y,
        updateId: h,
        role: v,
        progress: b,
        rtl: S,
        toastId: E,
        deleteToast: N,
        isIn: k,
        isLoading: L,
        closeOnClick: F,
        theme: z,
        ariaLabel: A,
      } = e,
      H = xi(
        "Toastify__toast",
        `Toastify__toast-theme--${z}`,
        `Toastify__toast--${d}`,
        { "Toastify__toast--rtl": S },
        { "Toastify__toast--close-on-click": F }
      ),
      K = dr(w)
        ? w({ rtl: S, position: x, type: d, defaultClassName: H })
        : xi(H, w),
      ae = AT(e),
      le = !!b || !u,
      Z = { closeToast: p, type: d, theme: z },
      T = null;
    return (
      o === !1 ||
        (dr(o)
          ? (T = o(Z))
          : m.isValidElement(o)
          ? (T = m.cloneElement(o, Z))
          : (T = mT(Z))),
      D.createElement(
        g,
        {
          isIn: k,
          done: N,
          position: x,
          preventExitTransition: n,
          nodeRef: r,
          playToast: s,
        },
        D.createElement(
          "div",
          {
            id: E,
            tabIndex: 0,
            onClick: c,
            "data-in": k,
            className: K,
            ...i,
            style: j,
            ref: r,
            ...(k && { role: v, "aria-label": A }),
          },
          ae != null &&
            D.createElement(
              "div",
              {
                className: xi("Toastify__toast-icon", {
                  "Toastify--animate-icon Toastify__zoom-enter": !L,
                }),
              },
              ae
            ),
          jw(a, e, !t),
          T,
          !e.customProgressBar &&
            D.createElement(pT, {
              ...(h && !le ? { key: `p-${h}` } : {}),
              rtl: S,
              theme: z,
              delay: u,
              isRunning: t,
              isIn: k,
              closeToast: p,
              hide: f,
              type: d,
              className: y,
              controlledProgress: le,
              progress: b || 0,
            })
        )
      )
    );
  },
  MT = (e, t = !1) => ({
    enter: `Toastify--animate Toastify__${e}-enter`,
    exit: `Toastify--animate Toastify__${e}-exit`,
    appendPosition: t,
  }),
  zT = fT(MT("bounce", !0)),
  UT = {
    position: "top-right",
    transition: zT,
    autoClose: 5e3,
    closeButton: !0,
    pauseOnHover: !0,
    pauseOnFocusLoss: !0,
    draggable: "touch",
    draggablePercent: 80,
    draggableDirection: "x",
    role: "alert",
    theme: "light",
    "aria-label": "Notifications Alt+T",
    hotKeys: (e) => e.altKey && e.code === "KeyT",
  };
function BT(e) {
  let t = { ...UT, ...e },
    n = e.stacked,
    [r, i] = m.useState(!0),
    s = m.useRef(null),
    { getToastToRender: o, isToastActive: a, count: u } = _T(t),
    { className: c, style: d, rtl: f, containerId: p, hotKeys: g } = t;
  function x(j) {
    let y = xi("Toastify__toast-container", `Toastify__toast-container--${j}`, {
      "Toastify__toast-container--rtl": f,
    });
    return dr(c)
      ? c({ position: j, rtl: f, defaultClassName: y })
      : xi(y, tm(c));
  }
  function w() {
    n && (i(!0), ke.play());
  }
  return (
    TT(() => {
      var j;
      if (n) {
        let y = s.current.querySelectorAll('[data-in="true"]'),
          h = 12,
          v = (j = t.position) == null ? void 0 : j.includes("top"),
          b = 0,
          S = 0;
        Array.from(y)
          .reverse()
          .forEach((E, N) => {
            let k = E;
            k.classList.add("Toastify__toast--stacked"),
              N > 0 && (k.dataset.collapsed = `${r}`),
              k.dataset.pos || (k.dataset.pos = v ? "top" : "bot");
            let L = b * (r ? 0.2 : 1) + (r ? 0 : h * N);
            k.style.setProperty("--y", `${v ? L : L * -1}px`),
              k.style.setProperty("--g", `${h}`),
              k.style.setProperty("--s", `${1 - (r ? S : 0)}`),
              (b += k.offsetHeight),
              (S += 0.025);
          });
      }
    }, [r, u, n]),
    m.useEffect(() => {
      function j(y) {
        var h;
        let v = s.current;
        g(y) &&
          ((h = v.querySelector('[tabIndex="0"]')) == null || h.focus(),
          i(!1),
          ke.pause()),
          y.key === "Escape" &&
            (document.activeElement === v ||
              (v != null && v.contains(document.activeElement))) &&
            (i(!0), ke.play());
      }
      return (
        document.addEventListener("keydown", j),
        () => {
          document.removeEventListener("keydown", j);
        }
      );
    }, [g]),
    D.createElement(
      "section",
      {
        ref: s,
        className: "Toastify",
        id: p,
        onMouseEnter: () => {
          n && (i(!1), ke.pause());
        },
        onMouseLeave: w,
        "aria-live": "polite",
        "aria-atomic": "false",
        "aria-relevant": "additions text",
        "aria-label": t["aria-label"],
      },
      o((j, y) => {
        let h = y.length ? { ...d } : { ...d, pointerEvents: "none" };
        return D.createElement(
          "div",
          {
            tabIndex: -1,
            className: x(j),
            "data-stacked": n,
            style: h,
            key: `c-${j}`,
          },
          y.map(({ content: v, props: b }) =>
            D.createElement(
              IT,
              {
                ...b,
                stacked: n,
                collapseAll: w,
                isIn: a(b.toastId, b.containerId),
                key: `t-${b.key}`,
              },
              v
            )
          )
        );
      })
    )
  );
}
const HT = { items: [], status: "idle", cartLoaded: !1 },
  xu = Me("cart/addToCart", async (e) => {
    const t = await sT(e);
    return ke.success("Item added to cart"), t.data;
  }),
  ka = Me("cart/fetchItemsByUserId", async () => (await ww()).data),
  wu = Me("cart/updateCart", async (e) => (await oT(e)).data),
  bu = Me("cart/deleteItemFromCart", async (e) => (await bw(e)).data),
  sm = Me("cart/resetCart", async () => (await lT()).data),
  _w = jl({
    name: "cart",
    initialState: HT,
    reducers: {
      increment: (e) => {
        e.value += 1;
      },
    },
    extraReducers: (e) => {
      e.addCase(xu.pending, (t) => {
        t.status = "loading";
      })
        .addCase(xu.fulfilled, (t, n) => {
          (t.status = "idle"), t.items.push(n.payload);
        })
        .addCase(ka.pending, (t) => {
          t.status = "loading";
        })
        .addCase(ka.fulfilled, (t, n) => {
          (t.status = "idle"), (t.items = n.payload), (t.cartLoaded = !0);
        })
        .addCase(ka.rejected, (t, n) => {
          (t.status = "idle"), (t.cartLoaded = !0);
        })
        .addCase(wu.pending, (t) => {
          t.status = "loading";
        })
        .addCase(wu.fulfilled, (t, n) => {
          t.status = "idle";
          const r = t.items.findIndex((i) => i.id === n.payload.id);
          t.items[r] = n.payload;
        })
        .addCase(bu.pending, (t) => {
          t.status = "loading";
        })
        .addCase(bu.fulfilled, (t, n) => {
          (t.status = "idle"),
            (t.items = t.items.filter((r) => r.id !== n.payload.id));
        })
        .addCase(sm.pending, (t) => {
          t.status = "loading";
        })
        .addCase(sm.fulfilled, (t, n) => {
          (t.status = "idle"), (t.items = []);
        });
    },
  }),
  { increment: H$ } = _w.actions,
  Cc = (e) => e.cart.items,
  VT = (e) => e.cart.status,
  WT = (e) => e.cart.cartLoaded,
  qT = _w.reducer,
  hn = 10;
function fr(e) {
  return Math.round(e.price * (1 - e.discountPercentage / 100));
}
var Ht = function () {
  return (
    (Ht =
      Object.assign ||
      function (t) {
        for (var n, r = 1, i = arguments.length; r < i; r++) {
          n = arguments[r];
          for (var s in n)
            Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s]);
        }
        return t;
      }),
    Ht.apply(this, arguments)
  );
};
function fl(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, i = t.length, s; r < i; r++)
      (s || !(r in t)) &&
        (s || (s = Array.prototype.slice.call(t, 0, r)), (s[r] = t[r]));
  return e.concat(s || Array.prototype.slice.call(t));
}
var De = "-ms-",
  Ao = "-moz-",
  Se = "-webkit-",
  Pw = "comm",
  _c = "rule",
  Yp = "decl",
  KT = "@import",
  Tw = "@keyframes",
  QT = "@layer",
  $w = Math.abs,
  Gp = String.fromCharCode,
  om = Object.assign;
function YT(e, t) {
  return ft(e, 0) ^ 45
    ? (((((((t << 2) ^ ft(e, 0)) << 2) ^ ft(e, 1)) << 2) ^ ft(e, 2)) << 2) ^
        ft(e, 3)
    : 0;
}
function Rw(e) {
  return e.trim();
}
function er(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function fe(e, t, n) {
  return e.replace(t, n);
}
function Ca(e, t, n) {
  return e.indexOf(t, n);
}
function ft(e, t) {
  return e.charCodeAt(t) | 0;
}
function _s(e, t, n) {
  return e.slice(t, n);
}
function In(e) {
  return e.length;
}
function Fw(e) {
  return e.length;
}
function So(e, t) {
  return t.push(e), e;
}
function GT(e, t) {
  return e.map(t).join("");
}
function D0(e, t) {
  return e.filter(function (n) {
    return !er(n, t);
  });
}
var Pc = 1,
  Ps = 1,
  Lw = 0,
  xn = 0,
  it = 0,
  Vs = "";
function Tc(e, t, n, r, i, s, o, a) {
  return {
    value: e,
    root: t,
    parent: n,
    type: r,
    props: i,
    children: s,
    line: Pc,
    column: Ps,
    length: o,
    return: "",
    siblings: a,
  };
}
function br(e, t) {
  return om(
    Tc("", null, null, "", null, null, 0, e.siblings),
    e,
    { length: -e.length },
    t
  );
}
function Ki(e) {
  for (; e.root; ) e = br(e.root, { children: [e] });
  So(e, e.siblings);
}
function XT() {
  return it;
}
function ZT() {
  return (
    (it = xn > 0 ? ft(Vs, --xn) : 0), Ps--, it === 10 && ((Ps = 1), Pc--), it
  );
}
function Tn() {
  return (
    (it = xn < Lw ? ft(Vs, xn++) : 0), Ps++, it === 10 && ((Ps = 1), Pc++), it
  );
}
function ji() {
  return ft(Vs, xn);
}
function _a() {
  return xn;
}
function $c(e, t) {
  return _s(Vs, e, t);
}
function lm(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function JT(e) {
  return (Pc = Ps = 1), (Lw = In((Vs = e))), (xn = 0), [];
}
function e3(e) {
  return (Vs = ""), e;
}
function Rd(e) {
  return Rw($c(xn - 1, am(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function t3(e) {
  for (; (it = ji()) && it < 33; ) Tn();
  return lm(e) > 2 || lm(it) > 3 ? "" : " ";
}
function n3(e, t) {
  for (
    ;
    --t &&
    Tn() &&
    !(it < 48 || it > 102 || (it > 57 && it < 65) || (it > 70 && it < 97));

  );
  return $c(e, _a() + (t < 6 && ji() == 32 && Tn() == 32));
}
function am(e) {
  for (; Tn(); )
    switch (it) {
      case e:
        return xn;
      case 34:
      case 39:
        e !== 34 && e !== 39 && am(it);
        break;
      case 40:
        e === 41 && am(e);
        break;
      case 92:
        Tn();
        break;
    }
  return xn;
}
function r3(e, t) {
  for (; Tn() && e + it !== 57; ) if (e + it === 84 && ji() === 47) break;
  return "/*" + $c(t, xn - 1) + "*" + Gp(e === 47 ? e : Tn());
}
function i3(e) {
  for (; !lm(ji()); ) Tn();
  return $c(e, xn);
}
function s3(e) {
  return e3(Pa("", null, null, null, [""], (e = JT(e)), 0, [0], e));
}
function Pa(e, t, n, r, i, s, o, a, u) {
  for (
    var c = 0,
      d = 0,
      f = o,
      p = 0,
      g = 0,
      x = 0,
      w = 1,
      j = 1,
      y = 1,
      h = 0,
      v = "",
      b = i,
      S = s,
      E = r,
      N = v;
    j;

  )
    switch (((x = h), (h = Tn()))) {
      case 40:
        if (x != 108 && ft(N, f - 1) == 58) {
          Ca((N += fe(Rd(h), "&", "&\f")), "&\f", $w(c ? a[c - 1] : 0)) != -1 &&
            (y = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        N += Rd(h);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        N += t3(x);
        break;
      case 92:
        N += n3(_a() - 1, 7);
        continue;
      case 47:
        switch (ji()) {
          case 42:
          case 47:
            So(o3(r3(Tn(), _a()), t, n, u), u);
            break;
          default:
            N += "/";
        }
        break;
      case 123 * w:
        a[c++] = In(N) * y;
      case 125 * w:
      case 59:
      case 0:
        switch (h) {
          case 0:
          case 125:
            j = 0;
          case 59 + d:
            y == -1 && (N = fe(N, /\f/g, "")),
              g > 0 &&
                In(N) - f &&
                So(
                  g > 32
                    ? I0(N + ";", r, n, f - 1, u)
                    : I0(fe(N, " ", "") + ";", r, n, f - 2, u),
                  u
                );
            break;
          case 59:
            N += ";";
          default:
            if (
              (So(
                (E = A0(N, t, n, c, d, i, a, v, (b = []), (S = []), f, s)),
                s
              ),
              h === 123)
            )
              if (d === 0) Pa(N, t, E, E, b, s, f, a, S);
              else
                switch (p === 99 && ft(N, 3) === 110 ? 100 : p) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Pa(
                      e,
                      E,
                      E,
                      r && So(A0(e, E, E, 0, 0, i, a, v, i, (b = []), f, S), S),
                      i,
                      S,
                      f,
                      a,
                      r ? b : S
                    );
                    break;
                  default:
                    Pa(N, E, E, E, [""], S, 0, a, S);
                }
        }
        (c = d = g = 0), (w = y = 1), (v = N = ""), (f = o);
        break;
      case 58:
        (f = 1 + In(N)), (g = x);
      default:
        if (w < 1) {
          if (h == 123) --w;
          else if (h == 125 && w++ == 0 && ZT() == 125) continue;
        }
        switch (((N += Gp(h)), h * w)) {
          case 38:
            y = d > 0 ? 1 : ((N += "\f"), -1);
            break;
          case 44:
            (a[c++] = (In(N) - 1) * y), (y = 1);
            break;
          case 64:
            ji() === 45 && (N += Rd(Tn())),
              (p = ji()),
              (d = f = In((v = N += i3(_a())))),
              h++;
            break;
          case 45:
            x === 45 && In(N) == 2 && (w = 0);
        }
    }
  return s;
}
function A0(e, t, n, r, i, s, o, a, u, c, d, f) {
  for (
    var p = i - 1, g = i === 0 ? s : [""], x = Fw(g), w = 0, j = 0, y = 0;
    w < r;
    ++w
  )
    for (var h = 0, v = _s(e, p + 1, (p = $w((j = o[w])))), b = e; h < x; ++h)
      (b = Rw(j > 0 ? g[h] + " " + v : fe(v, /&\f/g, g[h]))) && (u[y++] = b);
  return Tc(e, t, n, i === 0 ? _c : a, u, c, d, f);
}
function o3(e, t, n, r) {
  return Tc(e, t, n, Pw, Gp(XT()), _s(e, 2, -2), 0, r);
}
function I0(e, t, n, r, i) {
  return Tc(e, t, n, Yp, _s(e, 0, r), _s(e, r + 1, -1), r, i);
}
function Ow(e, t, n) {
  switch (YT(e, t)) {
    case 5103:
      return Se + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return Se + e + e;
    case 4789:
      return Ao + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Se + e + Ao + e + De + e + e;
    case 5936:
      switch (ft(e, t + 11)) {
        case 114:
          return Se + e + De + fe(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return Se + e + De + fe(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return Se + e + De + fe(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
    case 6828:
    case 4268:
    case 2903:
      return Se + e + De + e + e;
    case 6165:
      return Se + e + De + "flex-" + e + e;
    case 5187:
      return (
        Se + e + fe(e, /(\w+).+(:[^]+)/, Se + "box-$1$2" + De + "flex-$1$2") + e
      );
    case 5443:
      return (
        Se +
        e +
        De +
        "flex-item-" +
        fe(e, /flex-|-self/g, "") +
        (er(e, /flex-|baseline/)
          ? ""
          : De + "grid-row-" + fe(e, /flex-|-self/g, "")) +
        e
      );
    case 4675:
      return (
        Se +
        e +
        De +
        "flex-line-pack" +
        fe(e, /align-content|flex-|-self/g, "") +
        e
      );
    case 5548:
      return Se + e + De + fe(e, "shrink", "negative") + e;
    case 5292:
      return Se + e + De + fe(e, "basis", "preferred-size") + e;
    case 6060:
      return (
        Se +
        "box-" +
        fe(e, "-grow", "") +
        Se +
        e +
        De +
        fe(e, "grow", "positive") +
        e
      );
    case 4554:
      return Se + fe(e, /([^-])(transform)/g, "$1" + Se + "$2") + e;
    case 6187:
      return (
        fe(
          fe(fe(e, /(zoom-|grab)/, Se + "$1"), /(image-set)/, Se + "$1"),
          e,
          ""
        ) + e
      );
    case 5495:
    case 3959:
      return fe(e, /(image-set\([^]*)/, Se + "$1$`$1");
    case 4968:
      return (
        fe(
          fe(e, /(.+:)(flex-)?(.*)/, Se + "box-pack:$3" + De + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify"
        ) +
        Se +
        e +
        e
      );
    case 4200:
      if (!er(e, /flex-|baseline/))
        return De + "grid-column-align" + _s(e, t) + e;
      break;
    case 2592:
    case 3360:
      return De + fe(e, "template-", "") + e;
    case 4384:
    case 3616:
      return n &&
        n.some(function (r, i) {
          return (t = i), er(r.props, /grid-\w+-end/);
        })
        ? ~Ca(e + (n = n[t].value), "span", 0)
          ? e
          : De +
            fe(e, "-start", "") +
            e +
            De +
            "grid-row-span:" +
            (~Ca(n, "span", 0) ? er(n, /\d+/) : +er(n, /\d+/) - +er(e, /\d+/)) +
            ";"
        : De + fe(e, "-start", "") + e;
    case 4896:
    case 4128:
      return n &&
        n.some(function (r) {
          return er(r.props, /grid-\w+-start/);
        })
        ? e
        : De + fe(fe(e, "-end", "-span"), "span ", "") + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return fe(e, /(.+)-inline(.+)/, Se + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (In(e) - 1 - t > 6)
        switch (ft(e, t + 1)) {
          case 109:
            if (ft(e, t + 4) !== 45) break;
          case 102:
            return (
              fe(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" +
                  Se +
                  "$2-$3$1" +
                  Ao +
                  (ft(e, t + 3) == 108 ? "$3" : "$2-$3")
              ) + e
            );
          case 115:
            return ~Ca(e, "stretch", 0)
              ? Ow(fe(e, "stretch", "fill-available"), t, n) + e
              : e;
        }
      break;
    case 5152:
    case 5920:
      return fe(
        e,
        /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,
        function (r, i, s, o, a, u, c) {
          return (
            De +
            i +
            ":" +
            s +
            c +
            (o ? De + i + "-span:" + (a ? u : +u - +s) + c : "") +
            e
          );
        }
      );
    case 4949:
      if (ft(e, t + 6) === 121) return fe(e, ":", ":" + Se) + e;
      break;
    case 6444:
      switch (ft(e, ft(e, 14) === 45 ? 18 : 11)) {
        case 120:
          return (
            fe(
              e,
              /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,
              "$1" +
                Se +
                (ft(e, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                Se +
                "$2$3$1" +
                De +
                "$2box$3"
            ) + e
          );
        case 100:
          return fe(e, ":", ":" + De) + e;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return fe(e, "scroll-", "scroll-snap-") + e;
  }
  return e;
}
function ju(e, t) {
  for (var n = "", r = 0; r < e.length; r++) n += t(e[r], r, e, t) || "";
  return n;
}
function l3(e, t, n, r) {
  switch (e.type) {
    case QT:
      if (e.children.length) break;
    case KT:
    case Yp:
      return (e.return = e.return || e.value);
    case Pw:
      return "";
    case Tw:
      return (e.return = e.value + "{" + ju(e.children, r) + "}");
    case _c:
      if (!In((e.value = e.props.join(",")))) return "";
  }
  return In((n = ju(e.children, r)))
    ? (e.return = e.value + "{" + n + "}")
    : "";
}
function a3(e) {
  var t = Fw(e);
  return function (n, r, i, s) {
    for (var o = "", a = 0; a < t; a++) o += e[a](n, r, i, s) || "";
    return o;
  };
}
function u3(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
function c3(e, t, n, r) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case Yp:
        e.return = Ow(e.value, e.length, n);
        return;
      case Tw:
        return ju([br(e, { value: fe(e.value, "@", "@" + Se) })], r);
      case _c:
        if (e.length)
          return GT((n = e.props), function (i) {
            switch (er(i, (r = /(::plac\w+|:read-\w+)/))) {
              case ":read-only":
              case ":read-write":
                Ki(br(e, { props: [fe(i, /:(read-\w+)/, ":" + Ao + "$1")] })),
                  Ki(br(e, { props: [i] })),
                  om(e, { props: D0(n, r) });
                break;
              case "::placeholder":
                Ki(
                  br(e, { props: [fe(i, /:(plac\w+)/, ":" + Se + "input-$1")] })
                ),
                  Ki(br(e, { props: [fe(i, /:(plac\w+)/, ":" + Ao + "$1")] })),
                  Ki(br(e, { props: [fe(i, /:(plac\w+)/, De + "input-$1")] })),
                  Ki(br(e, { props: [i] })),
                  om(e, { props: D0(n, r) });
                break;
            }
            return "";
          });
    }
}
var d3 = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  Yt = {},
  Ts =
    (typeof process < "u" &&
      Yt !== void 0 &&
      (Yt.REACT_APP_SC_ATTR || Yt.SC_ATTR)) ||
    "data-styled",
  Dw = "active",
  Aw = "data-styled-version",
  Rc = "6.1.14",
  Xp = `/*!sc*/
`,
  Eu = typeof window < "u" && "HTMLElement" in window,
  f3 = !!(typeof SC_DISABLE_SPEEDY == "boolean"
    ? SC_DISABLE_SPEEDY
    : typeof process < "u" &&
      Yt !== void 0 &&
      Yt.REACT_APP_SC_DISABLE_SPEEDY !== void 0 &&
      Yt.REACT_APP_SC_DISABLE_SPEEDY !== ""
    ? Yt.REACT_APP_SC_DISABLE_SPEEDY !== "false" &&
      Yt.REACT_APP_SC_DISABLE_SPEEDY
    : typeof process < "u" &&
      Yt !== void 0 &&
      Yt.SC_DISABLE_SPEEDY !== void 0 &&
      Yt.SC_DISABLE_SPEEDY !== "" &&
      Yt.SC_DISABLE_SPEEDY !== "false" &&
      Yt.SC_DISABLE_SPEEDY),
  Fc = Object.freeze([]),
  $s = Object.freeze({});
function m3(e, t, n) {
  return (
    n === void 0 && (n = $s), (e.theme !== n.theme && e.theme) || t || n.theme
  );
}
var Iw = new Set([
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "tr",
    "track",
    "u",
    "ul",
    "use",
    "var",
    "video",
    "wbr",
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "marker",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "text",
    "tspan",
  ]),
  p3 = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
  h3 = /(^-|-$)/g;
function M0(e) {
  return e.replace(p3, "-").replace(h3, "");
}
var g3 = /(a)(d)/gi,
  aa = 52,
  z0 = function (e) {
    return String.fromCharCode(e + (e > 25 ? 39 : 97));
  };
function um(e) {
  var t,
    n = "";
  for (t = Math.abs(e); t > aa; t = (t / aa) | 0) n = z0(t % aa) + n;
  return (z0(t % aa) + n).replace(g3, "$1-$2");
}
var Fd,
  Mw = 5381,
  ls = function (e, t) {
    for (var n = t.length; n; ) e = (33 * e) ^ t.charCodeAt(--n);
    return e;
  },
  zw = function (e) {
    return ls(Mw, e);
  };
function Uw(e) {
  return um(zw(e) >>> 0);
}
function y3(e) {
  return e.displayName || e.name || "Component";
}
function Ld(e) {
  return typeof e == "string" && !0;
}
var Bw = typeof Symbol == "function" && Symbol.for,
  Hw = Bw ? Symbol.for("react.memo") : 60115,
  v3 = Bw ? Symbol.for("react.forward_ref") : 60112,
  x3 = {
    childContextTypes: !0,
    contextType: !0,
    contextTypes: !0,
    defaultProps: !0,
    displayName: !0,
    getDefaultProps: !0,
    getDerivedStateFromError: !0,
    getDerivedStateFromProps: !0,
    mixins: !0,
    propTypes: !0,
    type: !0,
  },
  w3 = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0,
  },
  Vw = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  b3 =
    (((Fd = {})[v3] = {
      $$typeof: !0,
      render: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
    }),
    (Fd[Hw] = Vw),
    Fd);
function U0(e) {
  return ("type" in (t = e) && t.type.$$typeof) === Hw
    ? Vw
    : "$$typeof" in e
    ? b3[e.$$typeof]
    : x3;
  var t;
}
var j3 = Object.defineProperty,
  E3 = Object.getOwnPropertyNames,
  B0 = Object.getOwnPropertySymbols,
  S3 = Object.getOwnPropertyDescriptor,
  N3 = Object.getPrototypeOf,
  H0 = Object.prototype;
function Ww(e, t, n) {
  if (typeof t != "string") {
    if (H0) {
      var r = N3(t);
      r && r !== H0 && Ww(e, r, n);
    }
    var i = E3(t);
    B0 && (i = i.concat(B0(t)));
    for (var s = U0(e), o = U0(t), a = 0; a < i.length; ++a) {
      var u = i[a];
      if (!(u in w3 || (n && n[u]) || (o && u in o) || (s && u in s))) {
        var c = S3(t, u);
        try {
          j3(e, u, c);
        } catch {}
      }
    }
  }
  return e;
}
function Rs(e) {
  return typeof e == "function";
}
function Zp(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function hi(e, t) {
  return e && t ? "".concat(e, " ").concat(t) : e || t || "";
}
function cm(e, t) {
  if (e.length === 0) return "";
  for (var n = e[0], r = 1; r < e.length; r++) n += e[r];
  return n;
}
function ml(e) {
  return (
    e !== null &&
    typeof e == "object" &&
    e.constructor.name === Object.name &&
    !("props" in e && e.$$typeof)
  );
}
function dm(e, t, n) {
  if ((n === void 0 && (n = !1), !n && !ml(e) && !Array.isArray(e))) return t;
  if (Array.isArray(t))
    for (var r = 0; r < t.length; r++) e[r] = dm(e[r], t[r]);
  else if (ml(t)) for (var r in t) e[r] = dm(e[r], t[r]);
  return e;
}
function Jp(e, t) {
  Object.defineProperty(e, "toString", { value: t });
}
function Tl(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  return new Error(
    "An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#"
      .concat(e, " for more information.")
      .concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : "")
  );
}
var k3 = (function () {
    function e(t) {
      (this.groupSizes = new Uint32Array(512)),
        (this.length = 512),
        (this.tag = t);
    }
    return (
      (e.prototype.indexOfGroup = function (t) {
        for (var n = 0, r = 0; r < t; r++) n += this.groupSizes[r];
        return n;
      }),
      (e.prototype.insertRules = function (t, n) {
        if (t >= this.groupSizes.length) {
          for (var r = this.groupSizes, i = r.length, s = i; t >= s; )
            if ((s <<= 1) < 0) throw Tl(16, "".concat(t));
          (this.groupSizes = new Uint32Array(s)),
            this.groupSizes.set(r),
            (this.length = s);
          for (var o = i; o < s; o++) this.groupSizes[o] = 0;
        }
        for (
          var a = this.indexOfGroup(t + 1), u = ((o = 0), n.length);
          o < u;
          o++
        )
          this.tag.insertRule(a, n[o]) && (this.groupSizes[t]++, a++);
      }),
      (e.prototype.clearGroup = function (t) {
        if (t < this.length) {
          var n = this.groupSizes[t],
            r = this.indexOfGroup(t),
            i = r + n;
          this.groupSizes[t] = 0;
          for (var s = r; s < i; s++) this.tag.deleteRule(r);
        }
      }),
      (e.prototype.getGroup = function (t) {
        var n = "";
        if (t >= this.length || this.groupSizes[t] === 0) return n;
        for (
          var r = this.groupSizes[t],
            i = this.indexOfGroup(t),
            s = i + r,
            o = i;
          o < s;
          o++
        )
          n += "".concat(this.tag.getRule(o)).concat(Xp);
        return n;
      }),
      e
    );
  })(),
  Ta = new Map(),
  Su = new Map(),
  $a = 1,
  ua = function (e) {
    if (Ta.has(e)) return Ta.get(e);
    for (; Su.has($a); ) $a++;
    var t = $a++;
    return Ta.set(e, t), Su.set(t, e), t;
  },
  C3 = function (e, t) {
    ($a = t + 1), Ta.set(e, t), Su.set(t, e);
  },
  _3 = "style[".concat(Ts, "][").concat(Aw, '="').concat(Rc, '"]'),
  P3 = new RegExp(
    "^".concat(Ts, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')
  ),
  T3 = function (e, t, n) {
    for (var r, i = n.split(","), s = 0, o = i.length; s < o; s++)
      (r = i[s]) && e.registerName(t, r);
  },
  $3 = function (e, t) {
    for (
      var n,
        r = ((n = t.textContent) !== null && n !== void 0 ? n : "").split(Xp),
        i = [],
        s = 0,
        o = r.length;
      s < o;
      s++
    ) {
      var a = r[s].trim();
      if (a) {
        var u = a.match(P3);
        if (u) {
          var c = 0 | parseInt(u[1], 10),
            d = u[2];
          c !== 0 && (C3(d, c), T3(e, d, u[3]), e.getTag().insertRules(c, i)),
            (i.length = 0);
        } else i.push(a);
      }
    }
  },
  V0 = function (e) {
    for (
      var t = document.querySelectorAll(_3), n = 0, r = t.length;
      n < r;
      n++
    ) {
      var i = t[n];
      i &&
        i.getAttribute(Ts) !== Dw &&
        ($3(e, i), i.parentNode && i.parentNode.removeChild(i));
    }
  };
function R3() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var qw = function (e) {
    var t = document.head,
      n = e || t,
      r = document.createElement("style"),
      i = (function (a) {
        var u = Array.from(a.querySelectorAll("style[".concat(Ts, "]")));
        return u[u.length - 1];
      })(n),
      s = i !== void 0 ? i.nextSibling : null;
    r.setAttribute(Ts, Dw), r.setAttribute(Aw, Rc);
    var o = R3();
    return o && r.setAttribute("nonce", o), n.insertBefore(r, s), r;
  },
  F3 = (function () {
    function e(t) {
      (this.element = qw(t)),
        this.element.appendChild(document.createTextNode("")),
        (this.sheet = (function (n) {
          if (n.sheet) return n.sheet;
          for (var r = document.styleSheets, i = 0, s = r.length; i < s; i++) {
            var o = r[i];
            if (o.ownerNode === n) return o;
          }
          throw Tl(17);
        })(this.element)),
        (this.length = 0);
    }
    return (
      (e.prototype.insertRule = function (t, n) {
        try {
          return this.sheet.insertRule(n, t), this.length++, !0;
        } catch {
          return !1;
        }
      }),
      (e.prototype.deleteRule = function (t) {
        this.sheet.deleteRule(t), this.length--;
      }),
      (e.prototype.getRule = function (t) {
        var n = this.sheet.cssRules[t];
        return n && n.cssText ? n.cssText : "";
      }),
      e
    );
  })(),
  L3 = (function () {
    function e(t) {
      (this.element = qw(t)),
        (this.nodes = this.element.childNodes),
        (this.length = 0);
    }
    return (
      (e.prototype.insertRule = function (t, n) {
        if (t <= this.length && t >= 0) {
          var r = document.createTextNode(n);
          return (
            this.element.insertBefore(r, this.nodes[t] || null),
            this.length++,
            !0
          );
        }
        return !1;
      }),
      (e.prototype.deleteRule = function (t) {
        this.element.removeChild(this.nodes[t]), this.length--;
      }),
      (e.prototype.getRule = function (t) {
        return t < this.length ? this.nodes[t].textContent : "";
      }),
      e
    );
  })(),
  O3 = (function () {
    function e(t) {
      (this.rules = []), (this.length = 0);
    }
    return (
      (e.prototype.insertRule = function (t, n) {
        return (
          t <= this.length && (this.rules.splice(t, 0, n), this.length++, !0)
        );
      }),
      (e.prototype.deleteRule = function (t) {
        this.rules.splice(t, 1), this.length--;
      }),
      (e.prototype.getRule = function (t) {
        return t < this.length ? this.rules[t] : "";
      }),
      e
    );
  })(),
  W0 = Eu,
  D3 = { isServer: !Eu, useCSSOMInjection: !f3 },
  Kw = (function () {
    function e(t, n, r) {
      t === void 0 && (t = $s), n === void 0 && (n = {});
      var i = this;
      (this.options = Ht(Ht({}, D3), t)),
        (this.gs = n),
        (this.names = new Map(r)),
        (this.server = !!t.isServer),
        !this.server && Eu && W0 && ((W0 = !1), V0(this)),
        Jp(this, function () {
          return (function (s) {
            for (
              var o = s.getTag(),
                a = o.length,
                u = "",
                c = function (f) {
                  var p = (function (y) {
                    return Su.get(y);
                  })(f);
                  if (p === void 0) return "continue";
                  var g = s.names.get(p),
                    x = o.getGroup(f);
                  if (g === void 0 || !g.size || x.length === 0)
                    return "continue";
                  var w = ""
                      .concat(Ts, ".g")
                      .concat(f, '[id="')
                      .concat(p, '"]'),
                    j = "";
                  g !== void 0 &&
                    g.forEach(function (y) {
                      y.length > 0 && (j += "".concat(y, ","));
                    }),
                    (u += ""
                      .concat(x)
                      .concat(w, '{content:"')
                      .concat(j, '"}')
                      .concat(Xp));
                },
                d = 0;
              d < a;
              d++
            )
              c(d);
            return u;
          })(i);
        });
    }
    return (
      (e.registerId = function (t) {
        return ua(t);
      }),
      (e.prototype.rehydrate = function () {
        !this.server && Eu && V0(this);
      }),
      (e.prototype.reconstructWithOptions = function (t, n) {
        return (
          n === void 0 && (n = !0),
          new e(
            Ht(Ht({}, this.options), t),
            this.gs,
            (n && this.names) || void 0
          )
        );
      }),
      (e.prototype.allocateGSInstance = function (t) {
        return (this.gs[t] = (this.gs[t] || 0) + 1);
      }),
      (e.prototype.getTag = function () {
        return (
          this.tag ||
          (this.tag =
            ((t = (function (n) {
              var r = n.useCSSOMInjection,
                i = n.target;
              return n.isServer ? new O3(i) : r ? new F3(i) : new L3(i);
            })(this.options)),
            new k3(t)))
        );
        var t;
      }),
      (e.prototype.hasNameForId = function (t, n) {
        return this.names.has(t) && this.names.get(t).has(n);
      }),
      (e.prototype.registerName = function (t, n) {
        if ((ua(t), this.names.has(t))) this.names.get(t).add(n);
        else {
          var r = new Set();
          r.add(n), this.names.set(t, r);
        }
      }),
      (e.prototype.insertRules = function (t, n, r) {
        this.registerName(t, n), this.getTag().insertRules(ua(t), r);
      }),
      (e.prototype.clearNames = function (t) {
        this.names.has(t) && this.names.get(t).clear();
      }),
      (e.prototype.clearRules = function (t) {
        this.getTag().clearGroup(ua(t)), this.clearNames(t);
      }),
      (e.prototype.clearTag = function () {
        this.tag = void 0;
      }),
      e
    );
  })(),
  A3 = /&/g,
  I3 = /^\s*\/\/.*$/gm;
function Qw(e, t) {
  return e.map(function (n) {
    return (
      n.type === "rule" &&
        ((n.value = "".concat(t, " ").concat(n.value)),
        (n.value = n.value.replaceAll(",", ",".concat(t, " "))),
        (n.props = n.props.map(function (r) {
          return "".concat(t, " ").concat(r);
        }))),
      Array.isArray(n.children) &&
        n.type !== "@keyframes" &&
        (n.children = Qw(n.children, t)),
      n
    );
  });
}
function M3(e) {
  var t,
    n,
    r,
    i = $s,
    s = i.options,
    o = s === void 0 ? $s : s,
    a = i.plugins,
    u = a === void 0 ? Fc : a,
    c = function (p, g, x) {
      return x.startsWith(n) && x.endsWith(n) && x.replaceAll(n, "").length > 0
        ? ".".concat(t)
        : p;
    },
    d = u.slice();
  d.push(function (p) {
    p.type === _c &&
      p.value.includes("&") &&
      (p.props[0] = p.props[0].replace(A3, n).replace(r, c));
  }),
    o.prefix && d.push(c3),
    d.push(l3);
  var f = function (p, g, x, w) {
    g === void 0 && (g = ""),
      x === void 0 && (x = ""),
      w === void 0 && (w = "&"),
      (t = w),
      (n = g),
      (r = new RegExp("\\".concat(n, "\\b"), "g"));
    var j = p.replace(I3, ""),
      y = s3(x || g ? "".concat(x, " ").concat(g, " { ").concat(j, " }") : j);
    o.namespace && (y = Qw(y, o.namespace));
    var h = [];
    return (
      ju(
        y,
        a3(
          d.concat(
            u3(function (v) {
              return h.push(v);
            })
          )
        )
      ),
      h
    );
  };
  return (
    (f.hash = u.length
      ? u
          .reduce(function (p, g) {
            return g.name || Tl(15), ls(p, g.name);
          }, Mw)
          .toString()
      : ""),
    f
  );
}
var z3 = new Kw(),
  fm = M3(),
  Yw = D.createContext({
    shouldForwardProp: void 0,
    styleSheet: z3,
    stylis: fm,
  });
Yw.Consumer;
D.createContext(void 0);
function q0() {
  return m.useContext(Yw);
}
var Gw = (function () {
    function e(t, n) {
      var r = this;
      (this.inject = function (i, s) {
        s === void 0 && (s = fm);
        var o = r.name + s.hash;
        i.hasNameForId(r.id, o) ||
          i.insertRules(r.id, o, s(r.rules, o, "@keyframes"));
      }),
        (this.name = t),
        (this.id = "sc-keyframes-".concat(t)),
        (this.rules = n),
        Jp(this, function () {
          throw Tl(12, String(r.name));
        });
    }
    return (
      (e.prototype.getName = function (t) {
        return t === void 0 && (t = fm), this.name + t.hash;
      }),
      e
    );
  })(),
  U3 = function (e) {
    return e >= "A" && e <= "Z";
  };
function K0(e) {
  for (var t = "", n = 0; n < e.length; n++) {
    var r = e[n];
    if (n === 1 && r === "-" && e[0] === "-") return e;
    U3(r) ? (t += "-" + r.toLowerCase()) : (t += r);
  }
  return t.startsWith("ms-") ? "-" + t : t;
}
var Xw = function (e) {
    return e == null || e === !1 || e === "";
  },
  Zw = function (e) {
    var t,
      n,
      r = [];
    for (var i in e) {
      var s = e[i];
      e.hasOwnProperty(i) &&
        !Xw(s) &&
        ((Array.isArray(s) && s.isCss) || Rs(s)
          ? r.push("".concat(K0(i), ":"), s, ";")
          : ml(s)
          ? r.push.apply(r, fl(fl(["".concat(i, " {")], Zw(s), !1), ["}"], !1))
          : r.push(
              ""
                .concat(K0(i), ": ")
                .concat(
                  ((t = i),
                  (n = s) == null || typeof n == "boolean" || n === ""
                    ? ""
                    : typeof n != "number" ||
                      n === 0 ||
                      t in d3 ||
                      t.startsWith("--")
                    ? String(n).trim()
                    : "".concat(n, "px")),
                  ";"
                )
            ));
    }
    return r;
  };
function Ei(e, t, n, r) {
  if (Xw(e)) return [];
  if (Zp(e)) return [".".concat(e.styledComponentId)];
  if (Rs(e)) {
    if (!Rs((s = e)) || (s.prototype && s.prototype.isReactComponent) || !t)
      return [e];
    var i = e(t);
    return Ei(i, t, n, r);
  }
  var s;
  return e instanceof Gw
    ? n
      ? (e.inject(n, r), [e.getName(r)])
      : [e]
    : ml(e)
    ? Zw(e)
    : Array.isArray(e)
    ? Array.prototype.concat.apply(
        Fc,
        e.map(function (o) {
          return Ei(o, t, n, r);
        })
      )
    : [e.toString()];
}
function B3(e) {
  for (var t = 0; t < e.length; t += 1) {
    var n = e[t];
    if (Rs(n) && !Zp(n)) return !1;
  }
  return !0;
}
var H3 = zw(Rc),
  V3 = (function () {
    function e(t, n, r) {
      (this.rules = t),
        (this.staticRulesId = ""),
        (this.isStatic = (r === void 0 || r.isStatic) && B3(t)),
        (this.componentId = n),
        (this.baseHash = ls(H3, n)),
        (this.baseStyle = r),
        Kw.registerId(n);
    }
    return (
      (e.prototype.generateAndInjectStyles = function (t, n, r) {
        var i = this.baseStyle
          ? this.baseStyle.generateAndInjectStyles(t, n, r)
          : "";
        if (this.isStatic && !r.hash)
          if (
            this.staticRulesId &&
            n.hasNameForId(this.componentId, this.staticRulesId)
          )
            i = hi(i, this.staticRulesId);
          else {
            var s = cm(Ei(this.rules, t, n, r)),
              o = um(ls(this.baseHash, s) >>> 0);
            if (!n.hasNameForId(this.componentId, o)) {
              var a = r(s, ".".concat(o), void 0, this.componentId);
              n.insertRules(this.componentId, o, a);
            }
            (i = hi(i, o)), (this.staticRulesId = o);
          }
        else {
          for (
            var u = ls(this.baseHash, r.hash), c = "", d = 0;
            d < this.rules.length;
            d++
          ) {
            var f = this.rules[d];
            if (typeof f == "string") c += f;
            else if (f) {
              var p = cm(Ei(f, t, n, r));
              (u = ls(u, p + d)), (c += p);
            }
          }
          if (c) {
            var g = um(u >>> 0);
            n.hasNameForId(this.componentId, g) ||
              n.insertRules(
                this.componentId,
                g,
                r(c, ".".concat(g), void 0, this.componentId)
              ),
              (i = hi(i, g));
          }
        }
        return i;
      }),
      e
    );
  })(),
  Jw = D.createContext(void 0);
Jw.Consumer;
var Od = {};
function W3(e, t, n) {
  var r = Zp(e),
    i = e,
    s = !Ld(e),
    o = t.attrs,
    a = o === void 0 ? Fc : o,
    u = t.componentId,
    c =
      u === void 0
        ? (function (b, S) {
            var E = typeof b != "string" ? "sc" : M0(b);
            Od[E] = (Od[E] || 0) + 1;
            var N = "".concat(E, "-").concat(Uw(Rc + E + Od[E]));
            return S ? "".concat(S, "-").concat(N) : N;
          })(t.displayName, t.parentComponentId)
        : u,
    d = t.displayName,
    f =
      d === void 0
        ? (function (b) {
            return Ld(b) ? "styled.".concat(b) : "Styled(".concat(y3(b), ")");
          })(e)
        : d,
    p =
      t.displayName && t.componentId
        ? "".concat(M0(t.displayName), "-").concat(t.componentId)
        : t.componentId || c,
    g = r && i.attrs ? i.attrs.concat(a).filter(Boolean) : a,
    x = t.shouldForwardProp;
  if (r && i.shouldForwardProp) {
    var w = i.shouldForwardProp;
    if (t.shouldForwardProp) {
      var j = t.shouldForwardProp;
      x = function (b, S) {
        return w(b, S) && j(b, S);
      };
    } else x = w;
  }
  var y = new V3(n, p, r ? i.componentStyle : void 0);
  function h(b, S) {
    return (function (E, N, k) {
      var L = E.attrs,
        F = E.componentStyle,
        z = E.defaultProps,
        A = E.foldedComponentIds,
        H = E.styledComponentId,
        K = E.target,
        ae = D.useContext(Jw),
        le = q0(),
        Z = E.shouldForwardProp || le.shouldForwardProp,
        T = m3(N, ae, z) || $s,
        I = (function (pe, ve, Ge) {
          for (
            var bt,
              ct = Ht(Ht({}, ve), { className: void 0, theme: Ge }),
              ti = 0;
            ti < pe.length;
            ti += 1
          ) {
            var Be = Rs((bt = pe[ti])) ? bt(ct) : bt;
            for (var pt in Be)
              ct[pt] =
                pt === "className"
                  ? hi(ct[pt], Be[pt])
                  : pt === "style"
                  ? Ht(Ht({}, ct[pt]), Be[pt])
                  : Be[pt];
          }
          return (
            ve.className && (ct.className = hi(ct.className, ve.className)), ct
          );
        })(L, N, T),
        W = I.as || K,
        V = {};
      for (var oe in I)
        I[oe] === void 0 ||
          oe[0] === "$" ||
          oe === "as" ||
          (oe === "theme" && I.theme === T) ||
          (oe === "forwardedAs"
            ? (V.as = I.forwardedAs)
            : (Z && !Z(oe, W)) || (V[oe] = I[oe]));
      var ce = (function (pe, ve) {
          var Ge = q0(),
            bt = pe.generateAndInjectStyles(ve, Ge.styleSheet, Ge.stylis);
          return bt;
        })(F, I),
        je = hi(A, H);
      return (
        ce && (je += " " + ce),
        I.className && (je += " " + I.className),
        (V[Ld(W) && !Iw.has(W) ? "class" : "className"] = je),
        k && (V.ref = k),
        m.createElement(W, V)
      );
    })(v, b, S);
  }
  h.displayName = f;
  var v = D.forwardRef(h);
  return (
    (v.attrs = g),
    (v.componentStyle = y),
    (v.displayName = f),
    (v.shouldForwardProp = x),
    (v.foldedComponentIds = r
      ? hi(i.foldedComponentIds, i.styledComponentId)
      : ""),
    (v.styledComponentId = p),
    (v.target = r ? i.target : e),
    Object.defineProperty(v, "defaultProps", {
      get: function () {
        return this._foldedDefaultProps;
      },
      set: function (b) {
        this._foldedDefaultProps = r
          ? (function (S) {
              for (var E = [], N = 1; N < arguments.length; N++)
                E[N - 1] = arguments[N];
              for (var k = 0, L = E; k < L.length; k++) dm(S, L[k], !0);
              return S;
            })({}, i.defaultProps, b)
          : b;
      },
    }),
    Jp(v, function () {
      return ".".concat(v.styledComponentId);
    }),
    s &&
      Ww(v, e, {
        attrs: !0,
        componentStyle: !0,
        displayName: !0,
        foldedComponentIds: !0,
        shouldForwardProp: !0,
        styledComponentId: !0,
        target: !0,
      }),
    v
  );
}
function Q0(e, t) {
  for (var n = [e[0]], r = 0, i = t.length; r < i; r += 1)
    n.push(t[r], e[r + 1]);
  return n;
}
var Y0 = function (e) {
  return Object.assign(e, { isCss: !0 });
};
function eb(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  if (Rs(e) || ml(e)) return Y0(Ei(Q0(Fc, fl([e], t, !0))));
  var r = e;
  return t.length === 0 && r.length === 1 && typeof r[0] == "string"
    ? Ei(r)
    : Y0(Ei(Q0(r, t)));
}
function mm(e, t, n) {
  if ((n === void 0 && (n = $s), !t)) throw Tl(1, t);
  var r = function (i) {
    for (var s = [], o = 1; o < arguments.length; o++) s[o - 1] = arguments[o];
    return e(t, n, eb.apply(void 0, fl([i], s, !1)));
  };
  return (
    (r.attrs = function (i) {
      return mm(
        e,
        t,
        Ht(Ht({}, n), {
          attrs: Array.prototype.concat(n.attrs, i).filter(Boolean),
        })
      );
    }),
    (r.withConfig = function (i) {
      return mm(e, t, Ht(Ht({}, n), i));
    }),
    r
  );
}
var tb = function (e) {
    return mm(W3, e);
  },
  zi = tb;
Iw.forEach(function (e) {
  zi[e] = tb(e);
});
function eh(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  var r = cm(eb.apply(void 0, fl([e], t, !1))),
    i = Uw(r);
  return new Gw(i, r);
}
const q3 = "#4fa94d",
  K3 = { "aria-busy": !0, role: "progressbar" },
  Q3 = zi.div`
  display: ${(e) => (e.$visible ? "flex" : "none")};
`,
  th = ({
    height: e = 80,
    width: t = 80,
    radius: n = 12.5,
    color: r = q3,
    ariaLabel: i = "grid-loading",
    wrapperStyle: s,
    wrapperClass: o,
    visible: a = !0,
  }) =>
    l.jsx(Q3, {
      style: s,
      $visible: a,
      className: o,
      "data-testid": "grid-loading",
      "aria-label": i,
      ...K3,
      children: l.jsxs("svg", {
        width: t,
        height: e,
        viewBox: "0 0 105 105",
        fill: r,
        "data-testid": "grid-svg",
        children: [
          l.jsx("circle", {
            cx: "12.5",
            cy: "12.5",
            r: `${n}`,
            children: l.jsx("animate", {
              attributeName: "fill-opacity",
              begin: "0s",
              dur: "1s",
              values: "1;.2;1",
              calcMode: "linear",
              repeatCount: "indefinite",
            }),
          }),
          l.jsx("circle", {
            cx: "12.5",
            cy: "52.5",
            r: `${n}`,
            children: l.jsx("animate", {
              attributeName: "fill-opacity",
              begin: "100ms",
              dur: "1s",
              values: "1;.2;1",
              calcMode: "linear",
              repeatCount: "indefinite",
            }),
          }),
          l.jsx("circle", {
            cx: "52.5",
            cy: "12.5",
            r: `${n}`,
            children: l.jsx("animate", {
              attributeName: "fill-opacity",
              begin: "300ms",
              dur: "1s",
              values: "1;.2;1",
              calcMode: "linear",
              repeatCount: "indefinite",
            }),
          }),
          l.jsx("circle", {
            cx: "52.5",
            cy: "52.5",
            r: `${n}`,
            children: l.jsx("animate", {
              attributeName: "fill-opacity",
              begin: "600ms",
              dur: "1s",
              values: "1;.2;1",
              calcMode: "linear",
              repeatCount: "indefinite",
            }),
          }),
          l.jsx("circle", {
            cx: "92.5",
            cy: "12.5",
            r: `${n}`,
            children: l.jsx("animate", {
              attributeName: "fill-opacity",
              begin: "800ms",
              dur: "1s",
              values: "1;.2;1",
              calcMode: "linear",
              repeatCount: "indefinite",
            }),
          }),
          l.jsx("circle", {
            cx: "92.5",
            cy: "52.5",
            r: `${n}`,
            children: l.jsx("animate", {
              attributeName: "fill-opacity",
              begin: "400ms",
              dur: "1s",
              values: "1;.2;1",
              calcMode: "linear",
              repeatCount: "indefinite",
            }),
          }),
          l.jsx("circle", {
            cx: "12.5",
            cy: "92.5",
            r: `${n}`,
            children: l.jsx("animate", {
              attributeName: "fill-opacity",
              begin: "700ms",
              dur: "1s",
              values: "1;.2;1",
              calcMode: "linear",
              repeatCount: "indefinite",
            }),
          }),
          l.jsx("circle", {
            cx: "52.5",
            cy: "92.5",
            r: `${n}`,
            children: l.jsx("animate", {
              attributeName: "fill-opacity",
              begin: "500ms",
              dur: "1s",
              values: "1;.2;1",
              calcMode: "linear",
              repeatCount: "indefinite",
            }),
          }),
          l.jsx("circle", {
            cx: "92.5",
            cy: "92.5",
            r: `${n}`,
            children: l.jsx("animate", {
              attributeName: "fill-opacity",
              begin: "200ms",
              dur: "1s",
              values: "1;.2;1",
              calcMode: "linear",
              repeatCount: "indefinite",
            }),
          }),
        ],
      }),
    }),
  bn = 242.776657104492,
  Y3 = 1.6,
  G3 = eh`
12.5% {
  stroke-dasharray: ${bn * 0.14}px, ${bn}px;
  stroke-dashoffset: -${bn * 0.11}px;
}
43.75% {
  stroke-dasharray: ${bn * 0.35}px, ${bn}px;
  stroke-dashoffset: -${bn * 0.35}px;
}
100% {
  stroke-dasharray: ${bn * 0.01}px, ${bn}px;
  stroke-dashoffset: -${bn * 0.99}px;
}
`;
zi.path`
  stroke-dasharray: ${bn * 0.01}px, ${bn};
  stroke-dashoffset: 0;
  animation: ${G3} ${Y3}s linear infinite;
`;
const X3 = eh`
to {
   transform: rotate(360deg);
 }
`;
zi.svg`
  animation: ${X3} 0.75s steps(12, end) infinite;
  animation-duration: 0.75s;
`;
zi.polyline`
  stroke-width: ${(e) => e.width}px;
  stroke-linecap: round;

  &:nth-child(12n + 0) {
    stroke-opacity: 0.08;
  }

  &:nth-child(12n + 1) {
    stroke-opacity: 0.17;
  }

  &:nth-child(12n + 2) {
    stroke-opacity: 0.25;
  }

  &:nth-child(12n + 3) {
    stroke-opacity: 0.33;
  }

  &:nth-child(12n + 4) {
    stroke-opacity: 0.42;
  }

  &:nth-child(12n + 5) {
    stroke-opacity: 0.5;
  }

  &:nth-child(12n + 6) {
    stroke-opacity: 0.58;
  }

  &:nth-child(12n + 7) {
    stroke-opacity: 0.66;
  }

  &:nth-child(12n + 8) {
    stroke-opacity: 0.75;
  }

  &:nth-child(12n + 9) {
    stroke-opacity: 0.83;
  }

  &:nth-child(12n + 11) {
    stroke-opacity: 0.92;
  }
`;
const Z3 = eh`
to {
   stroke-dashoffset: 136;
 }
`;
zi.polygon`
  stroke-dasharray: 17;
  animation: ${Z3} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`;
zi.svg`
  transform-origin: 50% 65%;
`;
function nb({
  title: e,
  message: t,
  dangerOption: n,
  cancelOption: r,
  dangerAction: i,
  cancelAction: s,
  showModal: o,
}) {
  const [a, u] = m.useState(!1),
    c = m.useRef(null),
    d = () => {
      u(!1), i();
    },
    f = () => {
      u(!1), s();
    };
  return (
    m.useEffect(() => {
      u(!!o);
    }, [o]),
    l.jsx(nn.Root, {
      show: a,
      as: m.Fragment,
      children: l.jsxs(bi, {
        as: "div",
        className: "relative z-10",
        initialFocus: c,
        onClose: u,
        children: [
          l.jsx(nn.Child, {
            as: m.Fragment,
            enter: "ease-out duration-300",
            enterFrom: "opacity-0",
            enterTo: "opacity-100",
            leave: "ease-in duration-200",
            leaveFrom: "opacity-100",
            leaveTo: "opacity-0",
            children: l.jsx("div", {
              className:
                "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity",
            }),
          }),
          l.jsx("div", {
            className: "fixed inset-0 z-10 overflow-y-auto",
            children: l.jsx("div", {
              className:
                "flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0",
              children: l.jsx(nn.Child, {
                as: m.Fragment,
                enter: "ease-out duration-300",
                enterFrom:
                  "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                enterTo: "opacity-100 translate-y-0 sm:scale-100",
                leave: "ease-in duration-200",
                leaveFrom: "opacity-100 translate-y-0 sm:scale-100",
                leaveTo: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                children: l.jsxs(bi.Panel, {
                  className:
                    "relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg",
                  children: [
                    l.jsx("div", {
                      className: "bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4",
                      children: l.jsxs("div", {
                        className: "sm:flex sm:items-start",
                        children: [
                          l.jsx("div", {
                            className:
                              "mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10",
                            children: l.jsx(XP, {
                              className: "h-6 w-6 text-red-600",
                              "aria-hidden": "true",
                            }),
                          }),
                          l.jsxs("div", {
                            className:
                              "mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left",
                            children: [
                              l.jsx(bi.Title, {
                                as: "h3",
                                className:
                                  "text-base font-semibold leading-6 text-gray-900",
                                children: e,
                              }),
                              l.jsx("div", {
                                className: "mt-2",
                                children: l.jsx("p", {
                                  className: "text-sm text-gray-500",
                                  children: t,
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    l.jsxs("div", {
                      className:
                        "bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6",
                      children: [
                        l.jsx("button", {
                          type: "button",
                          className:
                            "inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto",
                          onClick: d,
                          children: n,
                        }),
                        l.jsx("button", {
                          type: "button",
                          className:
                            "mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto",
                          onClick: f,
                          ref: c,
                          children: r,
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          }),
        ],
      }),
    })
  );
}
function J3() {
  const [e, t] = m.useState(!0),
    n = me(Cc),
    r = me(VT),
    i = me(WT),
    s = n.reduce((f, p) => f + fr(p) * p.quantity, 0),
    o = It(),
    a = n.reduce((f, p) => f + p.quantity, 0),
    u = (f, p) => {
      o(wu({ ...p, quantity: +f.target.value }));
    },
    [c, d] = m.useState(-1);
  return l.jsxs("div", {
    className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 bg-white mt-12",
    children: [
      " ",
      !n.length && i && l.jsx(Kn, { to: "/", replace: !0 }),
      l.jsxs("div", {
        className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-2",
        children: [
          l.jsx("h1", {
            className:
              "text-4xl my-10 mt-10 font-bold tracking-tight text-gray-900",
            children: "Cart",
          }),
          l.jsxs("div", {
            className: "flow-root",
            children: [
              r === "loading"
                ? l.jsx(th, {
                    height: "80",
                    width: "80",
                    color: "rgb(79, 70, 229) ",
                    ariaLabel: "grid-loading",
                    radius: "12.5",
                    wrapperStyle: {},
                    wrapperClass: "",
                    visible: !0,
                  })
                : null,
              l.jsx("ul", {
                role: "list",
                className: "-my-6 divide-y divide-gray-200",
                children: n.map((f) =>
                  l.jsxs(
                    "li",
                    {
                      className: "flex py-6",
                      children: [
                        l.jsx("div", {
                          className:
                            "size-24 shrink-0 overflow-hidden rounded-md border border-gray-200",
                          children: l.jsx("img", {
                            alt: f.product.thumbnail,
                            src: f.product.images,
                            className: "size-full object-cover",
                          }),
                        }),
                        l.jsxs("div", {
                          className: "ml-4 flex flex-1 flex-col",
                          children: [
                            l.jsxs("div", {
                              children: [
                                l.jsxs("div", {
                                  className:
                                    "flex justify-between text-base font-medium text-gray-900",
                                  children: [
                                    l.jsx("h3", {
                                      children: l.jsx("a", {
                                        href: f.product.href,
                                        children: f.product.title,
                                      }),
                                    }),
                                    l.jsx("p", {
                                      className: "ml-4",
                                      children: fr(f),
                                    }),
                                  ],
                                }),
                                l.jsx("p", {
                                  className: "mt-1 text-sm text-gray-500",
                                  children: f.product.color,
                                }),
                              ],
                            }),
                            l.jsxs("div", {
                              className:
                                "flex flex-1 items-end justify-between text-sm",
                              children: [
                                l.jsxs("div", {
                                  className: "text-gray-500",
                                  children: [
                                    l.jsx("label", {
                                      htmlFor: "quantity",
                                      className:
                                        "inline mr-5 text-sm font-medium leading-6",
                                      children: "Qty",
                                    }),
                                    l.jsxs("select", {
                                      value: f.product.quantity,
                                      onChange: (p) => {
                                        u(p, f);
                                      },
                                      children: [
                                        l.jsx("option", {
                                          value: "1",
                                          children: "1",
                                        }),
                                        l.jsx("option", {
                                          value: "2",
                                          children: "2",
                                        }),
                                        l.jsx("option", {
                                          value: "3",
                                          children: "3",
                                        }),
                                        l.jsx("option", {
                                          value: "4",
                                          children: "4",
                                        }),
                                        l.jsx("option", {
                                          value: "5",
                                          children: "5",
                                        }),
                                        l.jsx("option", {
                                          value: "6",
                                          children: "6",
                                        }),
                                        l.jsx("option", {
                                          value: "7",
                                          children: "7",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                l.jsxs("div", {
                                  className: "flex",
                                  children: [
                                    l.jsx(nb, {
                                      title: `Delete ${f.product.title}`,
                                      message:
                                        "Are you sure you want to delete this cart Item ?",
                                      dangerOption: "Delete",
                                      cancelOption: "Cancel",
                                      dangerAction: () => o(bu(f.product.id)),
                                      cancelAction: () => {
                                        d(-1);
                                      },
                                      showModal: f.product.id == c,
                                    }),
                                    l.jsx("button", {
                                      onClick: () => d(f.product.id),
                                      type: "button",
                                      className:
                                        "font-medium text-indigo-600 hover:text-indigo-500",
                                      children: "Remove",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    },
                    f.product.id
                  )
                ),
              }),
            ],
          }),
        ],
      }),
      l.jsxs("div", {
        className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
        children: [
          l.jsxs("div", {
            className:
              "flex justify-between my-2 text-base font-medium text-gray-900",
            children: [
              l.jsx("p", { children: "Subtotal" }),
              l.jsxs("p", { children: ["$", s] }),
            ],
          }),
          l.jsxs("div", {
            className:
              "flex justify-between my-2 text-base font-medium text-gray-900",
            children: [
              l.jsx("p", { children: "Total items in Cart" }),
              l.jsxs("p", { children: [a, " items"] }),
            ],
          }),
          l.jsx("p", {
            className: "mt-0.5 text-sm text-gray-500",
            children: "Shipping and taxes calculated at checkout.",
          }),
          l.jsx("div", {
            className: "mt-6",
            children: l.jsx(rt, {
              to: "/checkout",
              className:
                "flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700",
              children: "Checkout",
            }),
          }),
          l.jsx("div", {
            className:
              "mt-6 flex justify-center text-center text-sm text-gray-500",
            children: l.jsxs("p", {
              children: [
                "or",
                " ",
                l.jsx(rt, {
                  to: "/",
                  children: l.jsxs("button", {
                    type: "button",
                    onClick: () => t(!1),
                    className:
                      "font-medium text-indigo-600 hover:text-indigo-500",
                    children: [
                      "Continue Shopping",
                      l.jsx("span", { "aria-hidden": "true", children: " →" }),
                    ],
                  }),
                }),
              ],
            }),
          }),
        ],
      }),
    ],
  });
}
const e4 = () => l.jsx("div", { children: l.jsx(J3, {}) });
var $l = (e) => e.type === "checkbox",
  gi = (e) => e instanceof Date,
  $t = (e) => e == null;
const rb = (e) => typeof e == "object";
var Je = (e) => !$t(e) && !Array.isArray(e) && rb(e) && !gi(e),
  t4 = (e) =>
    Je(e) && e.target ? ($l(e.target) ? e.target.checked : e.target.value) : e,
  n4 = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e,
  r4 = (e, t) => e.has(n4(t)),
  i4 = (e) => {
    const t = e.constructor && e.constructor.prototype;
    return Je(t) && t.hasOwnProperty("isPrototypeOf");
  },
  nh =
    typeof window < "u" &&
    typeof window.HTMLElement < "u" &&
    typeof document < "u";
function un(e) {
  let t;
  const n = Array.isArray(e);
  if (e instanceof Date) t = new Date(e);
  else if (e instanceof Set) t = new Set(e);
  else if (
    !(nh && (e instanceof Blob || e instanceof FileList)) &&
    (n || Je(e))
  )
    if (((t = n ? [] : {}), !n && !i4(e))) t = e;
    else for (const r in e) e.hasOwnProperty(r) && (t[r] = un(e[r]));
  else return e;
  return t;
}
var Lc = (e) => (Array.isArray(e) ? e.filter(Boolean) : []),
  Xe = (e) => e === void 0,
  J = (e, t, n) => {
    if (!t || !Je(e)) return n;
    const r = Lc(t.split(/[,[\].]+?/)).reduce((i, s) => ($t(i) ? i : i[s]), e);
    return Xe(r) || r === e ? (Xe(e[t]) ? n : e[t]) : r;
  },
  An = (e) => typeof e == "boolean",
  rh = (e) => /^\w*$/.test(e),
  ib = (e) => Lc(e.replace(/["|']|\]/g, "").split(/\.|\[/)),
  Ae = (e, t, n) => {
    let r = -1;
    const i = rh(t) ? [t] : ib(t),
      s = i.length,
      o = s - 1;
    for (; ++r < s; ) {
      const a = i[r];
      let u = n;
      if (r !== o) {
        const c = e[a];
        u = Je(c) || Array.isArray(c) ? c : isNaN(+i[r + 1]) ? {} : [];
      }
      if (a === "__proto__") return;
      (e[a] = u), (e = e[a]);
    }
    return e;
  };
const G0 = { BLUR: "blur", FOCUS_OUT: "focusout" },
  Cn = {
    onBlur: "onBlur",
    onChange: "onChange",
    onSubmit: "onSubmit",
    onTouched: "onTouched",
    all: "all",
  },
  Zn = {
    max: "max",
    min: "min",
    maxLength: "maxLength",
    minLength: "minLength",
    pattern: "pattern",
    required: "required",
    validate: "validate",
  };
D.createContext(null);
var s4 = (e, t, n, r = !0) => {
    const i = { defaultValues: t._defaultValues };
    for (const s in e)
      Object.defineProperty(i, s, {
        get: () => {
          const o = s;
          return (
            t._proxyFormState[o] !== Cn.all &&
              (t._proxyFormState[o] = !r || Cn.all),
            e[o]
          );
        },
      });
    return i;
  },
  zt = (e) => Je(e) && !Object.keys(e).length,
  o4 = (e, t, n, r) => {
    n(e);
    const { name: i, ...s } = e;
    return (
      zt(s) ||
      Object.keys(s).length >= Object.keys(t).length ||
      Object.keys(s).find((o) => t[o] === Cn.all)
    );
  },
  Ra = (e) => (Array.isArray(e) ? e : [e]);
function l4(e) {
  const t = D.useRef(e);
  (t.current = e),
    D.useEffect(() => {
      const n =
        !e.disabled &&
        t.current.subject &&
        t.current.subject.subscribe({ next: t.current.next });
      return () => {
        n && n.unsubscribe();
      };
    }, [e.disabled]);
}
var Un = (e) => typeof e == "string",
  a4 = (e, t, n, r, i) =>
    Un(e)
      ? (r && t.watch.add(e), J(n, e, i))
      : Array.isArray(e)
      ? e.map((s) => (r && t.watch.add(s), J(n, s)))
      : (r && (t.watchAll = !0), n),
  u4 = (e, t, n, r, i) =>
    t
      ? {
          ...n[e],
          types: { ...(n[e] && n[e].types ? n[e].types : {}), [r]: i || !0 },
        }
      : {},
  X0 = (e) => ({
    isOnSubmit: !e || e === Cn.onSubmit,
    isOnBlur: e === Cn.onBlur,
    isOnChange: e === Cn.onChange,
    isOnAll: e === Cn.all,
    isOnTouch: e === Cn.onTouched,
  }),
  Z0 = (e, t, n) =>
    !n &&
    (t.watchAll ||
      t.watch.has(e) ||
      [...t.watch].some(
        (r) => e.startsWith(r) && /^\.\w+/.test(e.slice(r.length))
      ));
const Io = (e, t, n, r) => {
  for (const i of n || Object.keys(e)) {
    const s = J(e, i);
    if (s) {
      const { _f: o, ...a } = s;
      if (o) {
        if (o.refs && o.refs[0] && t(o.refs[0], i) && !r) return !0;
        if (o.ref && t(o.ref, o.name) && !r) return !0;
        if (Io(a, t)) break;
      } else if (Je(a) && Io(a, t)) break;
    }
  }
};
var c4 = (e, t, n) => {
    const r = Ra(J(e, n));
    return Ae(r, "root", t[n]), Ae(e, n, r), e;
  },
  ih = (e) => e.type === "file",
  zn = (e) => typeof e == "function",
  Nu = (e) => {
    if (!nh) return !1;
    const t = e ? e.ownerDocument : 0;
    return (
      e instanceof
      (t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement)
    );
  },
  Fa = (e) => Un(e),
  sh = (e) => e.type === "radio",
  ku = (e) => e instanceof RegExp;
const J0 = { value: !1, isValid: !1 },
  ey = { value: !0, isValid: !0 };
var sb = (e) => {
  if (Array.isArray(e)) {
    if (e.length > 1) {
      const t = e
        .filter((n) => n && n.checked && !n.disabled)
        .map((n) => n.value);
      return { value: t, isValid: !!t.length };
    }
    return e[0].checked && !e[0].disabled
      ? e[0].attributes && !Xe(e[0].attributes.value)
        ? Xe(e[0].value) || e[0].value === ""
          ? ey
          : { value: e[0].value, isValid: !0 }
        : ey
      : J0;
  }
  return J0;
};
const ty = { isValid: !1, value: null };
var ob = (e) =>
  Array.isArray(e)
    ? e.reduce(
        (t, n) =>
          n && n.checked && !n.disabled ? { isValid: !0, value: n.value } : t,
        ty
      )
    : ty;
function ny(e, t, n = "validate") {
  if (Fa(e) || (Array.isArray(e) && e.every(Fa)) || (An(e) && !e))
    return { type: n, message: Fa(e) ? e : "", ref: t };
}
var Qi = (e) => (Je(e) && !ku(e) ? e : { value: e, message: "" }),
  ry = async (e, t, n, r, i) => {
    const {
        ref: s,
        refs: o,
        required: a,
        maxLength: u,
        minLength: c,
        min: d,
        max: f,
        pattern: p,
        validate: g,
        name: x,
        valueAsNumber: w,
        mount: j,
        disabled: y,
      } = e._f,
      h = J(t, x);
    if (!j || y) return {};
    const v = o ? o[0] : s,
      b = (A) => {
        r &&
          v.reportValidity &&
          (v.setCustomValidity(An(A) ? "" : A || ""), v.reportValidity());
      },
      S = {},
      E = sh(s),
      N = $l(s),
      k = E || N,
      L =
        ((w || ih(s)) && Xe(s.value) && Xe(h)) ||
        (Nu(s) && s.value === "") ||
        h === "" ||
        (Array.isArray(h) && !h.length),
      F = u4.bind(null, x, n, S),
      z = (A, H, K, ae = Zn.maxLength, le = Zn.minLength) => {
        const Z = A ? H : K;
        S[x] = { type: A ? ae : le, message: Z, ref: s, ...F(A ? ae : le, Z) };
      };
    if (
      i
        ? !Array.isArray(h) || !h.length
        : a &&
          ((!k && (L || $t(h))) ||
            (An(h) && !h) ||
            (N && !sb(o).isValid) ||
            (E && !ob(o).isValid))
    ) {
      const { value: A, message: H } = Fa(a)
        ? { value: !!a, message: a }
        : Qi(a);
      if (
        A &&
        ((S[x] = {
          type: Zn.required,
          message: H,
          ref: v,
          ...F(Zn.required, H),
        }),
        !n)
      )
        return b(H), S;
    }
    if (!L && (!$t(d) || !$t(f))) {
      let A, H;
      const K = Qi(f),
        ae = Qi(d);
      if (!$t(h) && !isNaN(h)) {
        const le = s.valueAsNumber || (h && +h);
        $t(K.value) || (A = le > K.value), $t(ae.value) || (H = le < ae.value);
      } else {
        const le = s.valueAsDate || new Date(h),
          Z = (W) => new Date(new Date().toDateString() + " " + W),
          T = s.type == "time",
          I = s.type == "week";
        Un(K.value) &&
          h &&
          (A = T
            ? Z(h) > Z(K.value)
            : I
            ? h > K.value
            : le > new Date(K.value)),
          Un(ae.value) &&
            h &&
            (H = T
              ? Z(h) < Z(ae.value)
              : I
              ? h < ae.value
              : le < new Date(ae.value));
      }
      if ((A || H) && (z(!!A, K.message, ae.message, Zn.max, Zn.min), !n))
        return b(S[x].message), S;
    }
    if ((u || c) && !L && (Un(h) || (i && Array.isArray(h)))) {
      const A = Qi(u),
        H = Qi(c),
        K = !$t(A.value) && h.length > +A.value,
        ae = !$t(H.value) && h.length < +H.value;
      if ((K || ae) && (z(K, A.message, H.message), !n))
        return b(S[x].message), S;
    }
    if (p && !L && Un(h)) {
      const { value: A, message: H } = Qi(p);
      if (
        ku(A) &&
        !h.match(A) &&
        ((S[x] = { type: Zn.pattern, message: H, ref: s, ...F(Zn.pattern, H) }),
        !n)
      )
        return b(H), S;
    }
    if (g) {
      if (zn(g)) {
        const A = await g(h, t),
          H = ny(A, v);
        if (H && ((S[x] = { ...H, ...F(Zn.validate, H.message) }), !n))
          return b(H.message), S;
      } else if (Je(g)) {
        let A = {};
        for (const H in g) {
          if (!zt(A) && !n) break;
          const K = ny(await g[H](h, t), v, H);
          K &&
            ((A = { ...K, ...F(H, K.message) }), b(K.message), n && (S[x] = A));
        }
        if (!zt(A) && ((S[x] = { ref: v, ...A }), !n)) return S;
      }
    }
    return b(!0), S;
  };
function d4(e, t) {
  const n = t.slice(0, -1).length;
  let r = 0;
  for (; r < n; ) e = Xe(e) ? r++ : e[t[r++]];
  return e;
}
function f4(e) {
  for (const t in e) if (e.hasOwnProperty(t) && !Xe(e[t])) return !1;
  return !0;
}
function ot(e, t) {
  const n = Array.isArray(t) ? t : rh(t) ? [t] : ib(t),
    r = n.length === 1 ? e : d4(e, n),
    i = n.length - 1,
    s = n[i];
  return (
    r && delete r[s],
    i !== 0 &&
      ((Je(r) && zt(r)) || (Array.isArray(r) && f4(r))) &&
      ot(e, n.slice(0, -1)),
    e
  );
}
var Dd = () => {
    let e = [];
    return {
      get observers() {
        return e;
      },
      next: (i) => {
        for (const s of e) s.next && s.next(i);
      },
      subscribe: (i) => (
        e.push(i),
        {
          unsubscribe: () => {
            e = e.filter((s) => s !== i);
          },
        }
      ),
      unsubscribe: () => {
        e = [];
      },
    };
  },
  pm = (e) => $t(e) || !rb(e);
function _r(e, t) {
  if (pm(e) || pm(t)) return e === t;
  if (gi(e) && gi(t)) return e.getTime() === t.getTime();
  const n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (const i of n) {
    const s = e[i];
    if (!r.includes(i)) return !1;
    if (i !== "ref") {
      const o = t[i];
      if (
        (gi(s) && gi(o)) ||
        (Je(s) && Je(o)) ||
        (Array.isArray(s) && Array.isArray(o))
          ? !_r(s, o)
          : s !== o
      )
        return !1;
    }
  }
  return !0;
}
var lb = (e) => e.type === "select-multiple",
  m4 = (e) => sh(e) || $l(e),
  Ad = (e) => Nu(e) && e.isConnected,
  ab = (e) => {
    for (const t in e) if (zn(e[t])) return !0;
    return !1;
  };
function Cu(e, t = {}) {
  const n = Array.isArray(e);
  if (Je(e) || n)
    for (const r in e)
      Array.isArray(e[r]) || (Je(e[r]) && !ab(e[r]))
        ? ((t[r] = Array.isArray(e[r]) ? [] : {}), Cu(e[r], t[r]))
        : $t(e[r]) || (t[r] = !0);
  return t;
}
function ub(e, t, n) {
  const r = Array.isArray(e);
  if (Je(e) || r)
    for (const i in e)
      Array.isArray(e[i]) || (Je(e[i]) && !ab(e[i]))
        ? Xe(t) || pm(n[i])
          ? (n[i] = Array.isArray(e[i]) ? Cu(e[i], []) : { ...Cu(e[i]) })
          : ub(e[i], $t(t) ? {} : t[i], n[i])
        : (n[i] = !_r(e[i], t[i]));
  return n;
}
var fo = (e, t) => ub(e, t, Cu(t)),
  cb = (e, { valueAsNumber: t, valueAsDate: n, setValueAs: r }) =>
    Xe(e)
      ? e
      : t
      ? e === ""
        ? NaN
        : e && +e
      : n && Un(e)
      ? new Date(e)
      : r
      ? r(e)
      : e;
function Id(e) {
  const t = e.ref;
  if (!(e.refs ? e.refs.every((n) => n.disabled) : t.disabled))
    return ih(t)
      ? t.files
      : sh(t)
      ? ob(e.refs).value
      : lb(t)
      ? [...t.selectedOptions].map(({ value: n }) => n)
      : $l(t)
      ? sb(e.refs).value
      : cb(Xe(t.value) ? e.ref.value : t.value, e);
}
var p4 = (e, t, n, r) => {
    const i = {};
    for (const s of e) {
      const o = J(t, s);
      o && Ae(i, s, o._f);
    }
    return {
      criteriaMode: n,
      names: [...e],
      fields: i,
      shouldUseNativeValidation: r,
    };
  },
  mo = (e) =>
    Xe(e)
      ? e
      : ku(e)
      ? e.source
      : Je(e)
      ? ku(e.value)
        ? e.value.source
        : e.value
      : e;
const iy = "AsyncFunction";
var h4 = (e) =>
    (!e || !e.validate) &&
    !!(
      (zn(e.validate) && e.validate.constructor.name === iy) ||
      (Je(e.validate) &&
        Object.values(e.validate).find((t) => t.constructor.name === iy))
    ),
  g4 = (e) =>
    e.mount &&
    (e.required ||
      e.min ||
      e.max ||
      e.maxLength ||
      e.minLength ||
      e.pattern ||
      e.validate);
function sy(e, t, n) {
  const r = J(e, n);
  if (r || rh(n)) return { error: r, name: n };
  const i = n.split(".");
  for (; i.length; ) {
    const s = i.join("."),
      o = J(t, s),
      a = J(e, s);
    if (o && !Array.isArray(o) && n !== s) return { name: n };
    if (a && a.type) return { name: s, error: a };
    i.pop();
  }
  return { name: n };
}
var y4 = (e, t, n, r, i) =>
    i.isOnAll
      ? !1
      : !n && i.isOnTouch
      ? !(t || e)
      : (n ? r.isOnBlur : i.isOnBlur)
      ? !e
      : (n ? r.isOnChange : i.isOnChange)
      ? e
      : !0,
  v4 = (e, t) => !Lc(J(e, t)).length && ot(e, t);
const x4 = {
  mode: Cn.onSubmit,
  reValidateMode: Cn.onChange,
  shouldFocusError: !0,
};
function w4(e = {}) {
  let t = { ...x4, ...e },
    n = {
      submitCount: 0,
      isDirty: !1,
      isLoading: zn(t.defaultValues),
      isValidating: !1,
      isSubmitted: !1,
      isSubmitting: !1,
      isSubmitSuccessful: !1,
      isValid: !1,
      touchedFields: {},
      dirtyFields: {},
      validatingFields: {},
      errors: t.errors || {},
      disabled: t.disabled || !1,
    },
    r = {},
    i =
      Je(t.defaultValues) || Je(t.values)
        ? un(t.defaultValues || t.values) || {}
        : {},
    s = t.shouldUnregister ? {} : un(i),
    o = { action: !1, mount: !1, watch: !1 },
    a = {
      mount: new Set(),
      unMount: new Set(),
      array: new Set(),
      watch: new Set(),
    },
    u,
    c = 0;
  const d = {
      isDirty: !1,
      dirtyFields: !1,
      validatingFields: !1,
      touchedFields: !1,
      isValidating: !1,
      isValid: !1,
      errors: !1,
    },
    f = { values: Dd(), array: Dd(), state: Dd() },
    p = X0(t.mode),
    g = X0(t.reValidateMode),
    x = t.criteriaMode === Cn.all,
    w = (C) => ($) => {
      clearTimeout(c), (c = setTimeout(C, $));
    },
    j = async (C) => {
      if (!t.disabled && (d.isValid || C)) {
        const $ = t.resolver ? zt((await k()).errors) : await F(r, !0);
        $ !== n.isValid && f.state.next({ isValid: $ });
      }
    },
    y = (C, $) => {
      !t.disabled &&
        (d.isValidating || d.validatingFields) &&
        ((C || Array.from(a.mount)).forEach((O) => {
          O && ($ ? Ae(n.validatingFields, O, $) : ot(n.validatingFields, O));
        }),
        f.state.next({
          validatingFields: n.validatingFields,
          isValidating: !zt(n.validatingFields),
        }));
    },
    h = (C, $ = [], O, Q, q = !0, U = !0) => {
      if (Q && O && !t.disabled) {
        if (((o.action = !0), U && Array.isArray(J(r, C)))) {
          const ne = O(J(r, C), Q.argA, Q.argB);
          q && Ae(r, C, ne);
        }
        if (U && Array.isArray(J(n.errors, C))) {
          const ne = O(J(n.errors, C), Q.argA, Q.argB);
          q && Ae(n.errors, C, ne), v4(n.errors, C);
        }
        if (d.touchedFields && U && Array.isArray(J(n.touchedFields, C))) {
          const ne = O(J(n.touchedFields, C), Q.argA, Q.argB);
          q && Ae(n.touchedFields, C, ne);
        }
        d.dirtyFields && (n.dirtyFields = fo(i, s)),
          f.state.next({
            name: C,
            isDirty: A(C, $),
            dirtyFields: n.dirtyFields,
            errors: n.errors,
            isValid: n.isValid,
          });
      } else Ae(s, C, $);
    },
    v = (C, $) => {
      Ae(n.errors, C, $), f.state.next({ errors: n.errors });
    },
    b = (C) => {
      (n.errors = C), f.state.next({ errors: n.errors, isValid: !1 });
    },
    S = (C, $, O, Q) => {
      const q = J(r, C);
      if (q) {
        const U = J(s, C, Xe(O) ? J(i, C) : O);
        Xe(U) || (Q && Q.defaultChecked) || $
          ? Ae(s, C, $ ? U : Id(q._f))
          : ae(C, U),
          o.mount && j();
      }
    },
    E = (C, $, O, Q, q) => {
      let U = !1,
        ne = !1;
      const de = { name: C };
      if (!t.disabled) {
        const qe = !!(J(r, C) && J(r, C)._f && J(r, C)._f.disabled);
        if (!O || Q) {
          d.isDirty &&
            ((ne = n.isDirty),
            (n.isDirty = de.isDirty = A()),
            (U = ne !== de.isDirty));
          const $e = qe || _r(J(i, C), $);
          (ne = !!(!qe && J(n.dirtyFields, C))),
            $e || qe ? ot(n.dirtyFields, C) : Ae(n.dirtyFields, C, !0),
            (de.dirtyFields = n.dirtyFields),
            (U = U || (d.dirtyFields && ne !== !$e));
        }
        if (O) {
          const $e = J(n.touchedFields, C);
          $e ||
            (Ae(n.touchedFields, C, O),
            (de.touchedFields = n.touchedFields),
            (U = U || (d.touchedFields && $e !== O)));
        }
        U && q && f.state.next(de);
      }
      return U ? de : {};
    },
    N = (C, $, O, Q) => {
      const q = J(n.errors, C),
        U = d.isValid && An($) && n.isValid !== $;
      if (
        (e.delayError && O
          ? ((u = w(() => v(C, O))), u(e.delayError))
          : (clearTimeout(c),
            (u = null),
            O ? Ae(n.errors, C, O) : ot(n.errors, C)),
        (O ? !_r(q, O) : q) || !zt(Q) || U)
      ) {
        const ne = {
          ...Q,
          ...(U && An($) ? { isValid: $ } : {}),
          errors: n.errors,
          name: C,
        };
        (n = { ...n, ...ne }), f.state.next(ne);
      }
    },
    k = async (C) => {
      y(C, !0);
      const $ = await t.resolver(
        s,
        t.context,
        p4(C || a.mount, r, t.criteriaMode, t.shouldUseNativeValidation)
      );
      return y(C), $;
    },
    L = async (C) => {
      const { errors: $ } = await k(C);
      if (C)
        for (const O of C) {
          const Q = J($, O);
          Q ? Ae(n.errors, O, Q) : ot(n.errors, O);
        }
      else n.errors = $;
      return $;
    },
    F = async (C, $, O = { valid: !0 }) => {
      for (const Q in C) {
        const q = C[Q];
        if (q) {
          const { _f: U, ...ne } = q;
          if (U) {
            const de = a.array.has(U.name),
              qe = q._f && h4(q._f);
            qe && d.validatingFields && y([Q], !0);
            const $e = await ry(q, s, x, t.shouldUseNativeValidation && !$, de);
            if (
              (qe && d.validatingFields && y([Q]),
              $e[U.name] && ((O.valid = !1), $))
            )
              break;
            !$ &&
              (J($e, U.name)
                ? de
                  ? c4(n.errors, $e, U.name)
                  : Ae(n.errors, U.name, $e[U.name])
                : ot(n.errors, U.name));
          }
          !zt(ne) && (await F(ne, $, O));
        }
      }
      return O.valid;
    },
    z = () => {
      for (const C of a.unMount) {
        const $ = J(r, C);
        $ &&
          ($._f.refs ? $._f.refs.every((O) => !Ad(O)) : !Ad($._f.ref)) &&
          ve(C);
      }
      a.unMount = new Set();
    },
    A = (C, $) => !t.disabled && (C && $ && Ae(s, C, $), !_r(V(), i)),
    H = (C, $, O) =>
      a4(C, a, { ...(o.mount ? s : Xe($) ? i : Un(C) ? { [C]: $ } : $) }, O, $),
    K = (C) => Lc(J(o.mount ? s : i, C, e.shouldUnregister ? J(i, C, []) : [])),
    ae = (C, $, O = {}) => {
      const Q = J(r, C);
      let q = $;
      if (Q) {
        const U = Q._f;
        U &&
          (!U.disabled && Ae(s, C, cb($, U)),
          (q = Nu(U.ref) && $t($) ? "" : $),
          lb(U.ref)
            ? [...U.ref.options].forEach(
                (ne) => (ne.selected = q.includes(ne.value))
              )
            : U.refs
            ? $l(U.ref)
              ? U.refs.length > 1
                ? U.refs.forEach(
                    (ne) =>
                      (!ne.defaultChecked || !ne.disabled) &&
                      (ne.checked = Array.isArray(q)
                        ? !!q.find((de) => de === ne.value)
                        : q === ne.value)
                  )
                : U.refs[0] && (U.refs[0].checked = !!q)
              : U.refs.forEach((ne) => (ne.checked = ne.value === q))
            : ih(U.ref)
            ? (U.ref.value = "")
            : ((U.ref.value = q),
              U.ref.type || f.values.next({ name: C, values: { ...s } })));
      }
      (O.shouldDirty || O.shouldTouch) &&
        E(C, q, O.shouldTouch, O.shouldDirty, !0),
        O.shouldValidate && W(C);
    },
    le = (C, $, O) => {
      for (const Q in $) {
        const q = $[Q],
          U = `${C}.${Q}`,
          ne = J(r, U);
        (a.array.has(C) || Je(q) || (ne && !ne._f)) && !gi(q)
          ? le(U, q, O)
          : ae(U, q, O);
      }
    },
    Z = (C, $, O = {}) => {
      const Q = J(r, C),
        q = a.array.has(C),
        U = un($);
      Ae(s, C, U),
        q
          ? (f.array.next({ name: C, values: { ...s } }),
            (d.isDirty || d.dirtyFields) &&
              O.shouldDirty &&
              f.state.next({
                name: C,
                dirtyFields: fo(i, s),
                isDirty: A(C, U),
              }))
          : Q && !Q._f && !$t(U)
          ? le(C, U, O)
          : ae(C, U, O),
        Z0(C, a) && f.state.next({ ...n }),
        f.values.next({ name: o.mount ? C : void 0, values: { ...s } });
    },
    T = async (C) => {
      o.mount = !0;
      const $ = C.target;
      let O = $.name,
        Q = !0;
      const q = J(r, O),
        U = () => ($.type ? Id(q._f) : t4(C)),
        ne = (de) => {
          Q =
            Number.isNaN(de) ||
            (gi(de) && isNaN(de.getTime())) ||
            _r(de, J(s, O, de));
        };
      if (q) {
        let de, qe;
        const $e = U(),
          ht = C.type === G0.BLUR || C.type === G0.FOCUS_OUT,
          Fl =
            (!g4(q._f) && !t.resolver && !J(n.errors, O) && !q._f.deps) ||
            y4(ht, J(n.touchedFields, O), n.isSubmitted, g, p),
          vr = Z0(O, a, ht);
        Ae(s, O, $e),
          ht
            ? (q._f.onBlur && q._f.onBlur(C), u && u(0))
            : q._f.onChange && q._f.onChange(C);
        const Ks = E(O, $e, ht, !1),
          Fn = !zt(Ks) || vr;
        if (
          (!ht && f.values.next({ name: O, type: C.type, values: { ...s } }),
          Fl)
        )
          return (
            d.isValid && (e.mode === "onBlur" ? ht && j() : j()),
            Fn && f.state.next({ name: O, ...(vr ? {} : Ks) })
          );
        if ((!ht && vr && f.state.next({ ...n }), t.resolver)) {
          const { errors: Qs } = await k([O]);
          if ((ne($e), Q)) {
            const Ll = sy(n.errors, r, O),
              Ys = sy(Qs, r, Ll.name || O);
            (de = Ys.error), (O = Ys.name), (qe = zt(Qs));
          }
        } else
          y([O], !0),
            (de = (await ry(q, s, x, t.shouldUseNativeValidation))[O]),
            y([O]),
            ne($e),
            Q && (de ? (qe = !1) : d.isValid && (qe = await F(r, !0)));
        Q && (q._f.deps && W(q._f.deps), N(O, qe, de, Ks));
      }
    },
    I = (C, $) => {
      if (J(n.errors, $) && C.focus) return C.focus(), 1;
    },
    W = async (C, $ = {}) => {
      let O, Q;
      const q = Ra(C);
      if (t.resolver) {
        const U = await L(Xe(C) ? C : q);
        (O = zt(U)), (Q = C ? !q.some((ne) => J(U, ne)) : O);
      } else
        C
          ? ((Q = (
              await Promise.all(
                q.map(async (U) => {
                  const ne = J(r, U);
                  return await F(ne && ne._f ? { [U]: ne } : ne);
                })
              )
            ).every(Boolean)),
            !(!Q && !n.isValid) && j())
          : (Q = O = await F(r));
      return (
        f.state.next({
          ...(!Un(C) || (d.isValid && O !== n.isValid) ? {} : { name: C }),
          ...(t.resolver || !C ? { isValid: O } : {}),
          errors: n.errors,
        }),
        $.shouldFocus && !Q && Io(r, I, C ? q : a.mount),
        Q
      );
    },
    V = (C) => {
      const $ = { ...(o.mount ? s : i) };
      return Xe(C) ? $ : Un(C) ? J($, C) : C.map((O) => J($, O));
    },
    oe = (C, $) => ({
      invalid: !!J(($ || n).errors, C),
      isDirty: !!J(($ || n).dirtyFields, C),
      error: J(($ || n).errors, C),
      isValidating: !!J(n.validatingFields, C),
      isTouched: !!J(($ || n).touchedFields, C),
    }),
    ce = (C) => {
      C && Ra(C).forEach(($) => ot(n.errors, $)),
        f.state.next({ errors: C ? n.errors : {} });
    },
    je = (C, $, O) => {
      const Q = (J(r, C, { _f: {} })._f || {}).ref,
        q = J(n.errors, C) || {},
        { ref: U, message: ne, type: de, ...qe } = q;
      Ae(n.errors, C, { ...qe, ...$, ref: Q }),
        f.state.next({ name: C, errors: n.errors, isValid: !1 }),
        O && O.shouldFocus && Q && Q.focus && Q.focus();
    },
    pe = (C, $) =>
      zn(C)
        ? f.values.subscribe({ next: (O) => C(H(void 0, $), O) })
        : H(C, $, !0),
    ve = (C, $ = {}) => {
      for (const O of C ? Ra(C) : a.mount)
        a.mount.delete(O),
          a.array.delete(O),
          $.keepValue || (ot(r, O), ot(s, O)),
          !$.keepError && ot(n.errors, O),
          !$.keepDirty && ot(n.dirtyFields, O),
          !$.keepTouched && ot(n.touchedFields, O),
          !$.keepIsValidating && ot(n.validatingFields, O),
          !t.shouldUnregister && !$.keepDefaultValue && ot(i, O);
      f.values.next({ values: { ...s } }),
        f.state.next({ ...n, ...($.keepDirty ? { isDirty: A() } : {}) }),
        !$.keepIsValid && j();
    },
    Ge = ({ disabled: C, name: $, field: O, fields: Q, value: q }) => {
      if ((An(C) && o.mount) || C) {
        const U = C ? void 0 : Xe(q) ? Id(O ? O._f : J(Q, $)._f) : q;
        Ae(s, $, U), E($, U, !1, !1, !0);
      }
    },
    bt = (C, $ = {}) => {
      let O = J(r, C);
      const Q = An($.disabled) || An(t.disabled);
      return (
        Ae(r, C, {
          ...(O || {}),
          _f: {
            ...(O && O._f ? O._f : { ref: { name: C } }),
            name: C,
            mount: !0,
            ...$,
          },
        }),
        a.mount.add(C),
        O
          ? Ge({
              field: O,
              disabled: An($.disabled) ? $.disabled : t.disabled,
              name: C,
              value: $.value,
            })
          : S(C, !0, $.value),
        {
          ...(Q ? { disabled: $.disabled || t.disabled } : {}),
          ...(t.progressive
            ? {
                required: !!$.required,
                min: mo($.min),
                max: mo($.max),
                minLength: mo($.minLength),
                maxLength: mo($.maxLength),
                pattern: mo($.pattern),
              }
            : {}),
          name: C,
          onChange: T,
          onBlur: T,
          ref: (q) => {
            if (q) {
              bt(C, $), (O = J(r, C));
              const U =
                  (Xe(q.value) &&
                    q.querySelectorAll &&
                    q.querySelectorAll("input,select,textarea")[0]) ||
                  q,
                ne = m4(U),
                de = O._f.refs || [];
              if (ne ? de.find((qe) => qe === U) : U === O._f.ref) return;
              Ae(r, C, {
                _f: {
                  ...O._f,
                  ...(ne
                    ? {
                        refs: [
                          ...de.filter(Ad),
                          U,
                          ...(Array.isArray(J(i, C)) ? [{}] : []),
                        ],
                        ref: { type: U.type, name: C },
                      }
                    : { ref: U }),
                },
              }),
                S(C, !1, void 0, U);
            } else
              (O = J(r, C, {})),
                O._f && (O._f.mount = !1),
                (t.shouldUnregister || $.shouldUnregister) &&
                  !(r4(a.array, C) && o.action) &&
                  a.unMount.add(C);
          },
        }
      );
    },
    ct = () => t.shouldFocusError && Io(r, I, a.mount),
    ti = (C) => {
      An(C) &&
        (f.state.next({ disabled: C }),
        Io(
          r,
          ($, O) => {
            const Q = J(r, O);
            Q &&
              (($.disabled = Q._f.disabled || C),
              Array.isArray(Q._f.refs) &&
                Q._f.refs.forEach((q) => {
                  q.disabled = Q._f.disabled || C;
                }));
          },
          0,
          !1
        ));
    },
    Be = (C, $) => async (O) => {
      let Q;
      if (
        (O &&
          (O.preventDefault && O.preventDefault(), O.persist && O.persist()),
        t.disabled)
      ) {
        $ && (await $({ ...n.errors }, O));
        return;
      }
      let q = un(s);
      if ((f.state.next({ isSubmitting: !0 }), t.resolver)) {
        const { errors: U, values: ne } = await k();
        (n.errors = U), (q = ne);
      } else await F(r);
      if ((ot(n.errors, "root"), zt(n.errors))) {
        f.state.next({ errors: {} });
        try {
          await C(q, O);
        } catch (U) {
          Q = U;
        }
      } else $ && (await $({ ...n.errors }, O)), ct(), setTimeout(ct);
      if (
        (f.state.next({
          isSubmitted: !0,
          isSubmitting: !1,
          isSubmitSuccessful: zt(n.errors) && !Q,
          submitCount: n.submitCount + 1,
          errors: n.errors,
        }),
        Q)
      )
        throw Q;
    },
    pt = (C, $ = {}) => {
      J(r, C) &&
        (Xe($.defaultValue)
          ? Z(C, un(J(i, C)))
          : (Z(C, $.defaultValue), Ae(i, C, un($.defaultValue))),
        $.keepTouched || ot(n.touchedFields, C),
        $.keepDirty ||
          (ot(n.dirtyFields, C),
          (n.isDirty = $.defaultValue ? A(C, un(J(i, C))) : A())),
        $.keepError || (ot(n.errors, C), d.isValid && j()),
        f.state.next({ ...n }));
    },
    qs = (C, $ = {}) => {
      const O = C ? un(C) : i,
        Q = un(O),
        q = zt(C),
        U = q ? i : Q;
      if (($.keepDefaultValues || (i = O), !$.keepValues)) {
        if ($.keepDirtyValues) {
          const ne = new Set([...a.mount, ...Object.keys(fo(i, s))]);
          for (const de of Array.from(ne))
            J(n.dirtyFields, de) ? Ae(U, de, J(s, de)) : Z(de, J(U, de));
        } else {
          if (nh && Xe(C))
            for (const ne of a.mount) {
              const de = J(r, ne);
              if (de && de._f) {
                const qe = Array.isArray(de._f.refs)
                  ? de._f.refs[0]
                  : de._f.ref;
                if (Nu(qe)) {
                  const $e = qe.closest("form");
                  if ($e) {
                    $e.reset();
                    break;
                  }
                }
              }
            }
          r = {};
        }
        (s = e.shouldUnregister ? ($.keepDefaultValues ? un(i) : {}) : un(U)),
          f.array.next({ values: { ...U } }),
          f.values.next({ values: { ...U } });
      }
      (a = {
        mount: $.keepDirtyValues ? a.mount : new Set(),
        unMount: new Set(),
        array: new Set(),
        watch: new Set(),
        watchAll: !1,
        focus: "",
      }),
        (o.mount = !d.isValid || !!$.keepIsValid || !!$.keepDirtyValues),
        (o.watch = !!e.shouldUnregister),
        f.state.next({
          submitCount: $.keepSubmitCount ? n.submitCount : 0,
          isDirty: q
            ? !1
            : $.keepDirty
            ? n.isDirty
            : !!($.keepDefaultValues && !_r(C, i)),
          isSubmitted: $.keepIsSubmitted ? n.isSubmitted : !1,
          dirtyFields: q
            ? {}
            : $.keepDirtyValues
            ? $.keepDefaultValues && s
              ? fo(i, s)
              : n.dirtyFields
            : $.keepDefaultValues && C
            ? fo(i, C)
            : $.keepDirty
            ? n.dirtyFields
            : {},
          touchedFields: $.keepTouched ? n.touchedFields : {},
          errors: $.keepErrors ? n.errors : {},
          isSubmitSuccessful: $.keepIsSubmitSuccessful
            ? n.isSubmitSuccessful
            : !1,
          isSubmitting: !1,
        });
    },
    Rl = (C, $) => qs(zn(C) ? C(s) : C, $);
  return {
    control: {
      register: bt,
      unregister: ve,
      getFieldState: oe,
      handleSubmit: Be,
      setError: je,
      _executeSchema: k,
      _getWatch: H,
      _getDirty: A,
      _updateValid: j,
      _removeUnmounted: z,
      _updateFieldArray: h,
      _updateDisabledField: Ge,
      _getFieldArray: K,
      _reset: qs,
      _resetDefaultValues: () =>
        zn(t.defaultValues) &&
        t.defaultValues().then((C) => {
          Rl(C, t.resetOptions), f.state.next({ isLoading: !1 });
        }),
      _updateFormState: (C) => {
        n = { ...n, ...C };
      },
      _disableForm: ti,
      _subjects: f,
      _proxyFormState: d,
      _setErrors: b,
      get _fields() {
        return r;
      },
      get _formValues() {
        return s;
      },
      get _state() {
        return o;
      },
      set _state(C) {
        o = C;
      },
      get _defaultValues() {
        return i;
      },
      get _names() {
        return a;
      },
      set _names(C) {
        a = C;
      },
      get _formState() {
        return n;
      },
      set _formState(C) {
        n = C;
      },
      get _options() {
        return t;
      },
      set _options(C) {
        t = { ...t, ...C };
      },
    },
    trigger: W,
    register: bt,
    handleSubmit: Be,
    watch: pe,
    setValue: Z,
    getValues: V,
    reset: Rl,
    resetField: pt,
    clearErrors: ce,
    unregister: ve,
    setError: je,
    setFocus: (C, $ = {}) => {
      const O = J(r, C),
        Q = O && O._f;
      if (Q) {
        const q = Q.refs ? Q.refs[0] : Q.ref;
        q.focus && (q.focus(), $.shouldSelect && zn(q.select) && q.select());
      }
    },
    getFieldState: oe,
  };
}
function Ws(e = {}) {
  const t = D.useRef(),
    n = D.useRef(),
    [r, i] = D.useState({
      isDirty: !1,
      isValidating: !1,
      isLoading: zn(e.defaultValues),
      isSubmitted: !1,
      isSubmitting: !1,
      isSubmitSuccessful: !1,
      isValid: !1,
      submitCount: 0,
      dirtyFields: {},
      touchedFields: {},
      validatingFields: {},
      errors: e.errors || {},
      disabled: e.disabled || !1,
      defaultValues: zn(e.defaultValues) ? void 0 : e.defaultValues,
    });
  t.current || (t.current = { ...w4(e), formState: r });
  const s = t.current.control;
  return (
    (s._options = e),
    l4({
      subject: s._subjects.state,
      next: (o) => {
        o4(o, s._proxyFormState, s._updateFormState) && i({ ...s._formState });
      },
    }),
    D.useEffect(() => s._disableForm(e.disabled), [s, e.disabled]),
    D.useEffect(() => {
      if (s._proxyFormState.isDirty) {
        const o = s._getDirty();
        o !== r.isDirty && s._subjects.state.next({ isDirty: o });
      }
    }, [s, r.isDirty]),
    D.useEffect(() => {
      e.values && !_r(e.values, n.current)
        ? (s._reset(e.values, s._options.resetOptions),
          (n.current = e.values),
          i((o) => ({ ...o })))
        : s._resetDefaultValues();
    }, [e.values, s]),
    D.useEffect(() => {
      e.errors && s._setErrors(e.errors);
    }, [e.errors, s]),
    D.useEffect(() => {
      s._state.mount || (s._updateValid(), (s._state.mount = !0)),
        s._state.watch &&
          ((s._state.watch = !1), s._subjects.state.next({ ...s._formState })),
        s._removeUnmounted();
    }),
    D.useEffect(() => {
      e.shouldUnregister && s._subjects.values.next({ values: s._getWatch() });
    }, [e.shouldUnregister, s]),
    (t.current.formState = s4(r, s)),
    t.current
  );
}
function b4(e) {
  return new Promise(async (t) => {
    const r = await (
      await fetch("http://localhost:8080/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(e),
      })
    ).json();
    t({ data: r });
  });
}
function j4(e) {
  return new Promise(async (t) => {
    const r = await (
      await fetch("http://localhost:8080/orders/" + e.id, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(e),
      })
    ).json();
    t({ data: r });
  });
}
function E4(e, t) {
  let n = "";
  for (let r in e) n += `${r}=${e[r]}&`;
  for (let r in t) n += `${r}=${t[r]}&`;
  return (
    console.log(n, "response"),
    new Promise(async (r) => {
      const i = await fetch("http://localhost:8080/orders?" + n),
        s = await i.json(),
        o = i.headers.get("X-Total-Count");
      console.log(o, "toatlaCOundt"),
        r({ data: { orders: s, totalOrders: +o } });
    })
  );
}
const S4 = { orders: [], status: "idle", currentOrder: null, totalOrders: 0 },
  hm = Me("order/createOrder", async (e) => (await b4(e)).data),
  _u = Me(
    "order/fetchAllOrders",
    async ({ sort: e, pagination: t }) => (await E4(e, t)).data
  ),
  gm = Me("order/updateOrder", async (e) => (await j4(e)).data),
  db = jl({
    name: "order",
    initialState: S4,
    reducers: {
      resetOrder: (e) => {
        e.currentOrder = null;
      },
    },
    extraReducers: (e) => {
      e.addCase(hm.pending, (t) => {
        t.status = "loading";
      })
        .addCase(hm.fulfilled, (t, n) => {
          (t.status = "idle"),
            t.orders.push(n.payload),
            (t.currentOrder = n.payload);
        })
        .addCase(_u.pending, (t) => {
          t.status = "loading";
        })
        .addCase(_u.fulfilled, (t, n) => {
          (t.status = "idle"),
            (t.orders = n.payload.orders),
            (t.totalOrders = n.payload.totalOrders);
        })
        .addCase(gm.pending, (t) => {
          t.status = "loading";
        })
        .addCase(gm.fulfilled, (t, n) => {
          t.status = "idle";
          const r = t.orders.findIndex((i) => i.id == n.payload.id);
          t.orders[r] = n.payload;
        });
    },
  }),
  { resetOrder: N4 } = db.actions,
  k4 = (e) => e.order.currentOrder,
  C4 = (e) => e.order.orders,
  _4 = (e) => e.order.totalOrders,
  P4 = db.reducer,
  T4 = { status: "idle", userInfo: null },
  ym = Me("user/fetchLoggedInUserOrder", async () => (await ik()).data),
  Mo = Me("user/updateUser", async (e) => {
    const t = await l1(e);
    return console.log(t, "response of user"), t.data;
  }),
  vm = Me("user/fetchLoggedInUser", async () => (await sk()).data),
  fb = jl({
    name: "user",
    initialState: T4,
    reducers: {
      increment: (e) => {
        e.value += 1;
      },
    },
    extraReducers: (e) => {
      e.addCase(ym.pending, (t) => {
        t.status = "loading";
      })
        .addCase(ym.fulfilled, (t, n) => {
          (t.status = "idle"), (t.userInfo.orders = n.payload);
        })
        .addCase(Mo.pending, (t) => {
          t.status = "loading";
        })
        .addCase(Mo.fulfilled, (t, n) => {
          (t.status = "idle"), (t.userInfo = n.payload);
        })
        .addCase(vm.pending, (t) => {
          t.status = "loading";
        })
        .addCase(vm.fulfilled, (t, n) => {
          (t.status = "idle"), (t.userInfo = n.payload);
        });
    },
  }),
  { increment: V$ } = fb.actions,
  $4 = (e) => e.user.userInfo.orders,
  Oc = (e) => e.user.userInfo,
  R4 = (e) => e.user.status,
  F4 = fb.reducer;
function L4() {
  const [e, t] = m.useState(!0),
    {
      register: n,
      handleSubmit: r,
      watch: i,
      reset: s,
      formState: { errors: o },
    } = Ws(),
    a = me(Cc),
    u = a.reduce((S, E) => S + fr(E) * E.quantity, 0),
    c = It(),
    d = a.reduce((S, E) => S + E.quantity, 0),
    f = (S, E) => {
      c(wu({ ...E, quantity: +S.target.value }));
    },
    p = me(Oc),
    [g, x] = m.useState(null),
    [w, j] = m.useState("cash"),
    y = (S) => {
      console.log(S.target.value, "address"), x(p.address[S.target.value]);
    },
    h = (S) => {
      console.log(S.target.value, "payment"), j(S.target.value);
    },
    v = me(k4),
    b = () => {
      c(
        hm({
          products: a,
          totalAmount: u,
          totalCount: d,
          user: p,
          selectedAddress: g,
          paymentMethod: w,
          status: "pending",
        })
      );
    };
  return l.jsxs("div", {
    className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
    children: [
      " ",
      !a.length && l.jsx(Kn, { to: "/", replace: !0 }),
      v && l.jsx(Kn, { to: `/order-success/${v.id}`, replace: !0 }),
      l.jsxs("div", {
        className: "grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-5",
        children: [
          l.jsx("div", {
            className: "lg:col-span-3",
            children: l.jsx("form", {
              className: "bg-white px-5 py-12 mt-12",
              onSubmit: r((S) => {
                c(lk({ ...p, address: [...p.address, S] })), s();
              }),
              noValidate: !0,
              children: l.jsxs("div", {
                className: "space-y-12",
                children: [
                  l.jsxs("div", {
                    className: "border-b border-gray-900/10 pb-12",
                    children: [
                      l.jsx("h2", {
                        className:
                          "text-2xl font-semibold leading-7 text-gray-900",
                        children: "Personal Information",
                      }),
                      l.jsx("p", {
                        className: "mt-1 text-sm leading-6 text-gray-600",
                        children:
                          "Use a permanent address where you can receive mail.",
                      }),
                      l.jsxs("div", {
                        className:
                          "mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6",
                        children: [
                          l.jsxs("div", {
                            className: "sm:col-span-3",
                            children: [
                              l.jsx("label", {
                                htmlFor: "name",
                                className:
                                  "block text-sm font-medium leading-6 text-gray-900",
                                children: "Full name",
                              }),
                              l.jsx("div", {
                                className: "mt-2",
                                children: l.jsx("input", {
                                  type: "text",
                                  ...n("name", {
                                    required: "Name is required",
                                  }),
                                  id: "name",
                                  autoComplete: "given-name",
                                  className:
                                    "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
                                }),
                              }),
                            ],
                          }),
                          l.jsxs("div", {
                            className: "sm:col-span-4",
                            children: [
                              l.jsx("label", {
                                htmlFor: "email",
                                className:
                                  "block text-sm font-medium leading-6 text-gray-900",
                                children: "Email address",
                              }),
                              l.jsx("div", {
                                className: "mt-2",
                                children: l.jsx("input", {
                                  id: "email",
                                  ...n("email", {
                                    required: "Email is required",
                                  }),
                                  type: "email",
                                  autoComplete: "email",
                                  className:
                                    "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
                                }),
                              }),
                            ],
                          }),
                          l.jsxs("div", {
                            className: "sm:col-span-3",
                            children: [
                              l.jsx("label", {
                                htmlFor: "phone",
                                className:
                                  "block text-sm font-medium leading-6 text-gray-900",
                                children: "Phone",
                              }),
                              l.jsx("div", {
                                className: "mt-2",
                                children: l.jsx("input", {
                                  type: "tel",
                                  ...n("phone", {
                                    required: "Phone Address is required",
                                  }),
                                  id: "phone",
                                  autoComplete: "phone",
                                  className:
                                    "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
                                }),
                              }),
                            ],
                          }),
                          l.jsxs("div", {
                            className: "col-span-full",
                            children: [
                              l.jsx("label", {
                                htmlFor: "street",
                                className:
                                  "block text-sm font-medium leading-6 text-gray-900",
                                children: "Street address",
                              }),
                              l.jsx("div", {
                                className: "mt-2",
                                children: l.jsx("input", {
                                  type: "text",
                                  ...n("street", {
                                    required: "Street Address is required",
                                  }),
                                  id: "street",
                                  autoComplete: "street",
                                  className:
                                    "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
                                }),
                              }),
                            ],
                          }),
                          l.jsxs("div", {
                            className: "sm:col-span-2 sm:col-start-1",
                            children: [
                              l.jsx("label", {
                                htmlFor: "city",
                                className:
                                  "block text-sm font-medium leading-6 text-gray-900",
                                children: "City",
                              }),
                              l.jsx("div", {
                                className: "mt-2",
                                children: l.jsx("input", {
                                  type: "text",
                                  ...n("city", {
                                    required: "City is required",
                                  }),
                                  id: "city",
                                  autoComplete: "address-level2",
                                  className:
                                    "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
                                }),
                              }),
                            ],
                          }),
                          l.jsxs("div", {
                            className: "sm:col-span-2",
                            children: [
                              l.jsx("label", {
                                htmlFor: "state",
                                className:
                                  "block text-sm font-medium leading-6 text-gray-900",
                                children: "State / Province",
                              }),
                              l.jsx("div", {
                                className: "mt-2",
                                children: l.jsx("input", {
                                  type: "text",
                                  ...n("state", {
                                    required: "state is required",
                                  }),
                                  id: "state",
                                  autoComplete: "address-level1",
                                  className:
                                    "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
                                }),
                              }),
                            ],
                          }),
                          l.jsxs("div", {
                            className: "sm:col-span-2",
                            children: [
                              l.jsx("label", {
                                htmlFor: "pinCode",
                                className:
                                  "block text-sm font-medium leading-6 text-gray-900",
                                children: "ZIP / Postal code",
                              }),
                              l.jsx("div", {
                                className: "mt-2",
                                children: l.jsx("input", {
                                  type: "text",
                                  ...n("pinCode", {
                                    required: "Postal code is required",
                                  }),
                                  id: "pinCode",
                                  autoComplete: "pinCode",
                                  className:
                                    "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  l.jsxs("div", {
                    className: "mt-6 flex items-center justify-end gap-x-6",
                    children: [
                      l.jsx("button", {
                        type: "button",
                        className:
                          "text-sm font-semibold leading-6 text-gray-900",
                        children: "Reset",
                      }),
                      l.jsx("button", {
                        type: "submit",
                        className:
                          "rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
                        children: "Add Address",
                      }),
                    ],
                  }),
                  l.jsxs("div", {
                    className: "border-b border-gray-900/10 pb-12",
                    children: [
                      l.jsx("h2", {
                        className:
                          "text-base font-semibold leading-7 text-gray-900",
                        children: "address",
                      }),
                      l.jsx("p", {
                        className: "mt-1 text-sm leading-6 text-gray-600",
                        children: "Choose from Existing address",
                      }),
                      l.jsx("ul", {
                        role: "list",
                        children: p.address.map((S, E) =>
                          l.jsxs(
                            "li",
                            {
                              className:
                                "flex justify-between gap-x-6 px-5 py-5 border-solid border-2 border-gray-200",
                              children: [
                                l.jsxs("div", {
                                  className: "flex gap-x-4",
                                  children: [
                                    l.jsx("input", {
                                      onClick: y,
                                      name: "address",
                                      type: "radio",
                                      value: E,
                                      className:
                                        "h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600",
                                    }),
                                    l.jsxs("div", {
                                      className: "min-w-0 flex-auto",
                                      children: [
                                        l.jsx("p", {
                                          className:
                                            "text-sm font-semibold leading-6 text-gray-900",
                                          children: S.name,
                                        }),
                                        l.jsx("p", {
                                          className:
                                            "mt-1 truncate text-xs leading-5 text-gray-500",
                                          children: S.street,
                                        }),
                                        l.jsx("p", {
                                          className:
                                            "mt-1 truncate text-xs leading-5 text-gray-500",
                                          children: S.pinCode,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                l.jsxs("div", {
                                  className:
                                    "hidden sm:flex sm:flex-col sm:items-end",
                                  children: [
                                    l.jsxs("p", {
                                      className:
                                        "text-sm leading-6 text-gray-900",
                                      children: ["Phone: ", S.phone],
                                    }),
                                    l.jsx("p", {
                                      className:
                                        "text-sm leading-6 text-gray-500",
                                      children: S.city,
                                    }),
                                  ],
                                }),
                              ],
                            },
                            E
                          )
                        ),
                      }),
                      l.jsx("div", {
                        className: "mt-10 space-y-10",
                        children: l.jsxs("fieldset", {
                          children: [
                            l.jsx("legend", {
                              className:
                                "text-sm font-semibold leading-6 text-gray-900",
                              children: "Payment Methods",
                            }),
                            l.jsx("p", {
                              className: "mt-1 text-sm leading-6 text-gray-600",
                              children: "Choose One",
                            }),
                            l.jsxs("div", {
                              className: "mt-6 space-y-6",
                              children: [
                                l.jsxs("div", {
                                  className: "flex items-center gap-x-3",
                                  children: [
                                    l.jsx("input", {
                                      id: "cash",
                                      onClick: h,
                                      name: "payments",
                                      type: "radio",
                                      value: "cash",
                                      checked: w === "cash",
                                      className:
                                        "h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600",
                                    }),
                                    l.jsx("label", {
                                      htmlFor: "cash",
                                      className:
                                        "block text-sm font-medium leading-6 text-gray-900",
                                      children: "Cash",
                                    }),
                                  ],
                                }),
                                l.jsxs("div", {
                                  className: "flex items-center gap-x-3",
                                  children: [
                                    l.jsx("input", {
                                      id: "card",
                                      name: "payments",
                                      type: "radio",
                                      value: "card",
                                      onClick: h,
                                      checked: w === "card",
                                      className:
                                        "h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600",
                                    }),
                                    l.jsx("label", {
                                      htmlFor: "card",
                                      className:
                                        "block text-sm font-medium leading-6 text-gray-900",
                                      children: "Card Payment",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          }),
          l.jsx("div", {
            className: "lg:col-span-2",
            children: l.jsxs("div", {
              className:
                "mx-auto max-w-7xl px-2 sm:px-2 lg:px-4 bg-white mt-12",
              children: [
                l.jsxs("div", {
                  className: "mx-auto max-w-7xl px-1 sm:px-3 lg:px-8 py-2",
                  children: [
                    l.jsx("h1", {
                      className:
                        "text-4xl my-10 mt-10 font-bold tracking-tight text-gray-900",
                      children: "Cart",
                    }),
                    l.jsx("div", {
                      className: "flow-root",
                      children: l.jsx("ul", {
                        role: "list",
                        className: "-my-6 divide-y divide-gray-200",
                        children: a.map((S) =>
                          l.jsxs(
                            "li",
                            {
                              className: "flex py-6",
                              children: [
                                l.jsx("div", {
                                  className:
                                    "size-24 shrink-0 overflow-hidden rounded-md border border-gray-200",
                                  children: l.jsx("img", {
                                    alt: S.thumbnail,
                                    src: S.images,
                                    className: "size-full object-cover",
                                  }),
                                }),
                                l.jsxs("div", {
                                  className: "ml-4 flex flex-1 flex-col",
                                  children: [
                                    l.jsxs("div", {
                                      children: [
                                        l.jsxs("div", {
                                          className:
                                            "flex justify-between text-base font-medium text-gray-900",
                                          children: [
                                            l.jsx("h3", {
                                              children: l.jsx("a", {
                                                href: S.href,
                                                children: S.title,
                                              }),
                                            }),
                                            l.jsx("p", {
                                              className: "ml-4",
                                              children: fr(S),
                                            }),
                                          ],
                                        }),
                                        l.jsx("p", {
                                          className:
                                            "mt-1 text-sm text-gray-500",
                                          children: S.color,
                                        }),
                                      ],
                                    }),
                                    l.jsxs("div", {
                                      className:
                                        "flex flex-1 items-end justify-between text-sm",
                                      children: [
                                        l.jsxs("div", {
                                          className: "text-gray-500",
                                          children: [
                                            l.jsx("label", {
                                              htmlFor: "quantity",
                                              className:
                                                "inline mr-5 text-sm font-medium leading-6",
                                              children: "Qty",
                                            }),
                                            l.jsxs("select", {
                                              value: S.quantity,
                                              onChange: (E) => {
                                                f(E, S);
                                              },
                                              children: [
                                                l.jsx("option", {
                                                  value: "1",
                                                  children: "1",
                                                }),
                                                l.jsx("option", {
                                                  value: "2",
                                                  children: "2",
                                                }),
                                                l.jsx("option", {
                                                  value: "3",
                                                  children: "3",
                                                }),
                                                l.jsx("option", {
                                                  value: "4",
                                                  children: "4",
                                                }),
                                                l.jsx("option", {
                                                  value: "5",
                                                  children: "5",
                                                }),
                                                l.jsx("option", {
                                                  value: "6",
                                                  children: "6",
                                                }),
                                                l.jsx("option", {
                                                  value: "7",
                                                  children: "7",
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        l.jsx("div", {
                                          className: "flex",
                                          children: l.jsx("button", {
                                            onClick: () => c(bu(S.id)),
                                            type: "button",
                                            className:
                                              "font-medium text-indigo-600 hover:text-indigo-500",
                                            children: "Remove",
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            },
                            S.id
                          )
                        ),
                      }),
                    }),
                  ],
                }),
                l.jsxs("div", {
                  className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
                  children: [
                    l.jsxs("div", {
                      className:
                        "flex justify-between my-2 text-base font-medium text-gray-900",
                      children: [
                        l.jsx("p", { children: "Subtotal" }),
                        l.jsxs("p", { children: ["$", u] }),
                      ],
                    }),
                    l.jsxs("div", {
                      className:
                        "flex justify-between my-2 text-base font-medium text-gray-900",
                      children: [
                        l.jsx("p", { children: "Total items in Cart" }),
                        l.jsxs("p", { children: [d, " items"] }),
                      ],
                    }),
                    l.jsx("p", {
                      className: "mt-0.5 text-sm text-gray-500",
                      children: "Shipping and taxes calculated at checkout.",
                    }),
                    l.jsx("div", {
                      className: "mt-6",
                      children: l.jsx("div", {
                        onClick: b,
                        className:
                          "flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 cursor-pointer",
                        children: "Order Now",
                      }),
                    }),
                    l.jsx("div", {
                      className:
                        "mt-6 flex justify-center text-center text-sm text-gray-500",
                      children: l.jsxs("p", {
                        children: [
                          "or",
                          " ",
                          l.jsx(rt, {
                            to: "/",
                            children: l.jsxs("button", {
                              type: "button",
                              onClick: () => t(!1),
                              className:
                                "font-medium text-indigo-600 hover:text-indigo-500",
                              children: [
                                "Continue Shopping",
                                l.jsx("span", {
                                  "aria-hidden": "true",
                                  children: " →",
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      }),
    ],
  });
}
const oy = [
    { name: "Products", href: "/", user: !0 },
    { name: "Admin", href: "/admin", admin: !0 },
    { name: "Orders", href: "/admin/orders", admin: !0 },
  ],
  ly = [
    { name: "My Profile", link: "/profile" },
    { name: "My Orders", link: "/orders" },
    { name: "Sign out", link: "/logout" },
  ];
function Md(...e) {
  return e.filter(Boolean).join(" ");
}
function ei({ children: e }) {
  const t = me(Cc),
    n = me(Oc);
  return l.jsx(l.Fragment, {
    children: l.jsxs("div", {
      className: "min-h-full",
      children: [
        l.jsx(_t, {
          as: "nav",
          className: "bg-gray-800",
          children: ({ open: r }) =>
            l.jsxs(l.Fragment, {
              children: [
                l.jsx("div", {
                  className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
                  children: l.jsxs("div", {
                    className: "flex h-16 items-center justify-between",
                    children: [
                      l.jsxs("div", {
                        className: "flex items-center",
                        children: [
                          l.jsx("div", {
                            className: "flex-shrink-0",
                            children: l.jsx(rt, {
                              to: "/",
                              children: l.jsx("img", {
                                alt: "Your Company",
                                src: "/ecommerce.png",
                                className: "h-8 w-auto",
                              }),
                            }),
                          }),
                          l.jsx("div", {
                            className: "hidden md:block",
                            children: l.jsx("div", {
                              className: "ml-10 flex items-baseline space-x-4",
                              children: oy.map(
                                (i) =>
                                  i[n == null ? void 0 : n.role] &&
                                  l.jsx(
                                    rt,
                                    {
                                      to: i.href,
                                      className: Md(
                                        i.current
                                          ? "bg-gray-900 text-white"
                                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                                        "rounded-md px-3 py-2 text-sm font-medium"
                                      ),
                                      "aria-current": i.current
                                        ? "page"
                                        : void 0,
                                      children: i.name,
                                    },
                                    i.name
                                  )
                              ),
                            }),
                          }),
                        ],
                      }),
                      l.jsx("div", {
                        className: "hidden md:block",
                        children: l.jsxs("div", {
                          className: "ml-4 flex items-center md:ml-6",
                          children: [
                            l.jsxs(rt, {
                              to: "/cart",
                              children: [
                                l.jsxs("button", {
                                  type: "button",
                                  className:
                                    "rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800",
                                  children: [
                                    l.jsx("span", {
                                      className: "sr-only",
                                      children: "View notifications",
                                    }),
                                    l.jsx(L0, {
                                      className: "h-6 w-6",
                                      "aria-hidden": "true",
                                    }),
                                  ],
                                }),
                                " ",
                              ],
                            }),
                            !!t.length &&
                              l.jsx("span", {
                                className:
                                  "inline-flex items-center rounded-md mb-7 -ml-3 bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10",
                                children: t.length,
                              }),
                            l.jsxs(pn, {
                              as: "div",
                              className: "relative ml-3",
                              children: [
                                l.jsx("div", {
                                  children: l.jsxs(pn.Button, {
                                    className:
                                      "flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800",
                                    children: [
                                      l.jsx("span", {
                                        className: "sr-only",
                                        children: "Open user menu",
                                      }),
                                      l.jsx("img", {
                                        className: "h-8 w-8 rounded-full",
                                        src: n == null ? void 0 : n.imageUrl,
                                        alt: "",
                                      }),
                                    ],
                                  }),
                                }),
                                l.jsx(nn, {
                                  as: m.Fragment,
                                  enter: "transition ease-out duration-100",
                                  enterFrom: "transform opacity-0 scale-95",
                                  enterTo: "transform opacity-100 scale-100",
                                  leave: "transition ease-in duration-75",
                                  leaveFrom: "transform opacity-100 scale-100",
                                  leaveTo: "transform opacity-0 scale-95",
                                  children: l.jsx(pn.Items, {
                                    className:
                                      "absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",
                                    children: ly.map((i) =>
                                      l.jsx(
                                        pn.Item,
                                        {
                                          children: ({ active: s }) =>
                                            l.jsx(rt, {
                                              to: i.link,
                                              className: Md(
                                                s ? "bg-gray-100" : "",
                                                "block px-4 py-2 text-sm text-gray-700"
                                              ),
                                              children: i.name,
                                            }),
                                        },
                                        i.name
                                      )
                                    ),
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      l.jsx("div", {
                        className: "-mr-2 flex md:hidden",
                        children: l.jsxs(_t.Button, {
                          className:
                            "inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800",
                          children: [
                            l.jsx("span", {
                              className: "sr-only",
                              children: "Open main menu",
                            }),
                            r
                              ? l.jsx(Qp, {
                                  className: "block h-6 w-6",
                                  "aria-hidden": "true",
                                })
                              : l.jsx(WP, {
                                  className: "block h-6 w-6",
                                  "aria-hidden": "true",
                                }),
                          ],
                        }),
                      }),
                    ],
                  }),
                }),
                l.jsxs(_t.Panel, {
                  className: "md:hidden",
                  children: [
                    l.jsx("div", {
                      className: "space-y-1 px-2 pb-3 pt-2 sm:px-3",
                      children: oy.map(
                        (i) =>
                          i[n == null ? void 0 : n.role] &&
                          l.jsx(
                            _t.Button,
                            {
                              as: "a",
                              href: i.href,
                              className: Md(
                                i.current
                                  ? "bg-gray-900 text-white"
                                  : "text-gray-300 hover:bg-gray-700 hover:text-white",
                                "block rounded-md px-3 py-2 text-base font-medium"
                              ),
                              "aria-current": i.current ? "page" : void 0,
                              children: i.name,
                            },
                            i.name
                          )
                      ),
                    }),
                    l.jsxs("div", {
                      className: "border-t border-gray-700 pb-3 pt-4",
                      children: [
                        l.jsxs("div", {
                          className: "flex items-center px-5",
                          children: [
                            l.jsx("div", {
                              className: "flex-shrink-0",
                              children: l.jsx("img", {
                                className: "h-10 w-10 rounded-full",
                                src: n == null ? void 0 : n.imageUrl,
                                alt: "",
                              }),
                            }),
                            l.jsxs("div", {
                              className: "ml-3",
                              children: [
                                l.jsx("div", {
                                  className:
                                    "text-base font-medium leading-none text-white",
                                  children: n == null ? void 0 : n.name,
                                }),
                                l.jsx("div", {
                                  className:
                                    "text-sm font-medium leading-none text-gray-400",
                                  children: n == null ? void 0 : n.email,
                                }),
                              ],
                            }),
                            " ",
                            l.jsx(rt, {
                              to: "/cart",
                              children: l.jsx("button", {
                                type: "button",
                                className:
                                  "ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800",
                                children: l.jsx(L0, {
                                  className: "h-6 w-6",
                                  "aria-hidden": "true",
                                }),
                              }),
                            }),
                            !!t.length &&
                              l.jsx("span", {
                                className:
                                  "inline-flex items-center rounded-md bg-red-50 mb-7 -ml-3 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10",
                                children: t.length,
                              }),
                          ],
                        }),
                        l.jsx("div", {
                          className: "mt-3 space-y-1 px-2",
                          children: ly.map((i) =>
                            l.jsx(
                              rt,
                              {
                                as: "a",
                                to: i.link,
                                className:
                                  "block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-green-400",
                                children: i.name,
                              },
                              i.name
                            )
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
        }),
        l.jsx("header", {
          className: "bg-white shadow",
          children: l.jsx("div", {
            className: "mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8",
            children: l.jsx("h1", {
              className: "text-3xl font-bold tracking-tight text-gray-900",
              children: "E-Commerce",
            }),
          }),
        }),
        l.jsx("main", {
          children: l.jsx("div", {
            className: "mx-auto max-w-7xl py-6 sm:px-6 lg:px-8",
            children: e,
          }),
        }),
      ],
    }),
  });
}
function mb() {
  return l.jsx(l.Fragment, {
    children: l.jsx("div", {
      className: " bg-gray-900",
      children: l.jsxs("div", {
        className: "max-w-2xl mx-auto text-white py-10",
        children: [
          l.jsxs("div", {
            className: "text-center",
            children: [
              l.jsx("h3", {
                className: "text-3xl mb-3",
                children: " Download our Ecommerce App ",
              }),
              l.jsx("p", { children: " Buy what you want. " }),
              l.jsxs("div", {
                className: "flex justify-center my-10",
                children: [
                  l.jsxs("div", {
                    className:
                      "flex items-center border w-auto rounded-lg px-4 py-2 w-52 mx-2",
                    children: [
                      l.jsx("img", {
                        src: "https://cdn-icons-png.flaticon.com/512/888/888857.png",
                        className: "w-7 md:w-8",
                      }),
                      l.jsxs("div", {
                        className: "text-left ml-3",
                        children: [
                          l.jsx("p", {
                            className: "text-xs text-gray-200",
                            children: "Download on ",
                          }),
                          l.jsx("p", {
                            className: "text-sm md:text-base",
                            children: " Google Play Store ",
                          }),
                        ],
                      }),
                    ],
                  }),
                  l.jsxs("div", {
                    className:
                      "flex items-center border w-auto rounded-lg px-4 py-2 w-44 mx-2",
                    children: [
                      l.jsx("img", {
                        src: "https://cdn-icons-png.flaticon.com/512/888/888841.png",
                        className: "w-7 md:w-8",
                      }),
                      l.jsxs("div", {
                        className: "text-left ml-3",
                        children: [
                          l.jsx("p", {
                            className: "text-xs text-gray-200",
                            children: "Download on ",
                          }),
                          l.jsx("p", {
                            className: "text-sm md:text-base",
                            children: " Apple Store ",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          l.jsxs("div", {
            className:
              "mt-28 flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400",
            children: [
              l.jsxs("p", {
                className: "order-2 md:order-1 mt-8 md:mt-0",
                children: [" ", "© CoderDost, 2023.", " "],
              }),
              l.jsxs("div", {
                className: "order-1 md:order-2",
                children: [
                  l.jsx("span", { className: "px-2", children: "About us" }),
                  l.jsx("span", {
                    className: "px-2 border-l",
                    children: "Contact us",
                  }),
                  l.jsx("span", {
                    className: "px-2 border-l",
                    children: "Privacy Policy",
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    }),
  });
}
function O4({ title: e, titleId: t, ...n }, r) {
  return m.createElement(
    "svg",
    Object.assign(
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: r,
        "aria-labelledby": t,
      },
      n
    ),
    e ? m.createElement("title", { id: t }, e) : null,
    m.createElement("path", {
      fillRule: "evenodd",
      d: "M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z",
      clipRule: "evenodd",
    })
  );
}
const pb = m.forwardRef(O4);
function D4({ title: e, titleId: t, ...n }, r) {
  return m.createElement(
    "svg",
    Object.assign(
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: r,
        "aria-labelledby": t,
      },
      n
    ),
    e ? m.createElement("title", { id: t }, e) : null,
    m.createElement("path", {
      fillRule: "evenodd",
      d: "M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z",
      clipRule: "evenodd",
    })
  );
}
const A4 = m.forwardRef(D4);
function I4({ title: e, titleId: t, ...n }, r) {
  return m.createElement(
    "svg",
    Object.assign(
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: r,
        "aria-labelledby": t,
      },
      n
    ),
    e ? m.createElement("title", { id: t }, e) : null,
    m.createElement("path", {
      fillRule: "evenodd",
      d: "M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z",
      clipRule: "evenodd",
    })
  );
}
const M4 = m.forwardRef(I4);
function z4({ title: e, titleId: t, ...n }, r) {
  return m.createElement(
    "svg",
    Object.assign(
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: r,
        "aria-labelledby": t,
      },
      n
    ),
    e ? m.createElement("title", { id: t }, e) : null,
    m.createElement("path", {
      fillRule: "evenodd",
      d: "M2.628 1.601C5.028 1.206 7.49 1 10 1s4.973.206 7.372.601a.75.75 0 0 1 .628.74v2.288a2.25 2.25 0 0 1-.659 1.59l-4.682 4.683a2.25 2.25 0 0 0-.659 1.59v3.037c0 .684-.31 1.33-.844 1.757l-1.937 1.55A.75.75 0 0 1 8 18.25v-5.757a2.25 2.25 0 0 0-.659-1.591L2.659 6.22A2.25 2.25 0 0 1 2 4.629V2.34a.75.75 0 0 1 .628-.74Z",
      clipRule: "evenodd",
    })
  );
}
const hb = m.forwardRef(z4);
function U4({ title: e, titleId: t, ...n }, r) {
  return m.createElement(
    "svg",
    Object.assign(
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: r,
        "aria-labelledby": t,
      },
      n
    ),
    e ? m.createElement("title", { id: t }, e) : null,
    m.createElement("path", {
      fillRule: "evenodd",
      d: "M4 10a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H4.75A.75.75 0 0 1 4 10Z",
      clipRule: "evenodd",
    })
  );
}
const Dc = m.forwardRef(U4);
function B4({ title: e, titleId: t, ...n }, r) {
  return m.createElement(
    "svg",
    Object.assign(
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: r,
        "aria-labelledby": t,
      },
      n
    ),
    e ? m.createElement("title", { id: t }, e) : null,
    m.createElement("path", {
      d: "M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z",
    })
  );
}
const Ac = m.forwardRef(B4);
function H4({ title: e, titleId: t, ...n }, r) {
  return m.createElement(
    "svg",
    Object.assign(
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: r,
        "aria-labelledby": t,
      },
      n
    ),
    e ? m.createElement("title", { id: t }, e) : null,
    m.createElement("path", {
      fillRule: "evenodd",
      d: "M4.25 2A2.25 2.25 0 0 0 2 4.25v2.5A2.25 2.25 0 0 0 4.25 9h2.5A2.25 2.25 0 0 0 9 6.75v-2.5A2.25 2.25 0 0 0 6.75 2h-2.5Zm0 9A2.25 2.25 0 0 0 2 13.25v2.5A2.25 2.25 0 0 0 4.25 18h2.5A2.25 2.25 0 0 0 9 15.75v-2.5A2.25 2.25 0 0 0 6.75 11h-2.5Zm9-9A2.25 2.25 0 0 0 11 4.25v2.5A2.25 2.25 0 0 0 13.25 9h2.5A2.25 2.25 0 0 0 18 6.75v-2.5A2.25 2.25 0 0 0 15.75 2h-2.5Zm0 9A2.25 2.25 0 0 0 11 13.25v2.5A2.25 2.25 0 0 0 13.25 18h2.5A2.25 2.25 0 0 0 18 15.75v-2.5A2.25 2.25 0 0 0 15.75 11h-2.5Z",
      clipRule: "evenodd",
    })
  );
}
const gb = m.forwardRef(H4);
function V4({ title: e, titleId: t, ...n }, r) {
  return m.createElement(
    "svg",
    Object.assign(
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: r,
        "aria-labelledby": t,
      },
      n
    ),
    e ? m.createElement("title", { id: t }, e) : null,
    m.createElement("path", {
      fillRule: "evenodd",
      d: "M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z",
      clipRule: "evenodd",
    })
  );
}
const yb = m.forwardRef(V4);
function W4() {
  return new Promise((e) => {
    fetch("http://localhost:8080/products")
      .then((t) => t.json())
      .then((t) => e({ data: t }));
  });
}
function q4(e, t, n) {
  console.log(n, "responsePagination");
  let r = "";
  for (const i in e) {
    const s = e[i];
    if (s.length) {
      const o = s[s.length - 1];
      r += `${i}=${o}&`;
    }
  }
  for (let i in t) r += `${i}=${t[i]}&`;
  for (let i in n) r += `${i}=${n[i]}&`;
  return (
    console.log(r, "response"),
    new Promise(async (i) => {
      const s = await fetch("http://localhost:8080/products?" + r),
        o = await s.json(),
        a = await s.headers.get("X-Total-Count");
      i({ data: { products: o, totalItems: +a } });
    })
  );
}
function K4() {
  return new Promise((e) => {
    fetch("http://localhost:8080/brands")
      .then((t) => t.json())
      .then((t) => e({ data: t }));
  });
}
function Q4(e) {
  return new Promise((t) => {
    fetch("http://localhost:8080/products/" + e)
      .then((n) => n.json())
      .then((n) => t({ data: n }));
  });
}
function Y4() {
  return new Promise((e) => {
    fetch("http://localhost:8080/categories")
      .then((t) => t.json())
      .then((t) => e({ data: t }));
  });
}
function G4(e) {
  return new Promise(async (t) => {
    const r = await (
      await fetch("http://localhost:8080/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(e),
      })
    ).json();
    t({ data: r });
  });
}
function X4(e) {
  return new Promise(async (t) => {
    const r = await (
      await fetch("http://localhost:8080/products/" + e.id, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(e),
      })
    ).json();
    t({ data: r });
  });
}
const Z4 = {
    products: [],
    brands: [],
    categories: [],
    status: "idle",
    totalItems: 0,
    selectedProduct: null,
  },
  ay = Me("product/fetchAllProducts", async () => (await W4()).data),
  pl = Me("product/fetchAllProductById", async (e) => {
    const t = await Q4(e);
    return console.log(t, "product"), t.data;
  }),
  Pu = Me(
    "product/fetchProductsByFilters",
    async ({ filter: e, sort: t, pagination: n }) => {
      console.log(n, "responsePagination");
      const r = await q4(e, t, n);
      return console.log(r.data, "responseFilter"), r.data;
    }
  ),
  Tu = Me("product/fetchBrands", async () => (await K4()).data),
  $u = Me("product/fetchCategories", async () => (await Y4()).data),
  xm = Me("product/createProduct", async (e) => (await G4(e)).data),
  Ru = Me("product/updateProduct", async (e) => (await X4(e)).data),
  vb = jl({
    name: "product",
    initialState: Z4,
    reducers: {
      increment: (e) => {
        e.value += 1;
      },
    },
    extraReducers: (e) => {
      e.addCase(ay.pending, (t) => {
        t.status = "loading";
      })
        .addCase(ay.fulfilled, (t, n) => {
          (t.status = "idle"), (t.products = n.payload);
        })
        .addCase(Pu.pending, (t) => {
          t.status = "loading";
        })
        .addCase(Pu.fulfilled, (t, n) => {
          (t.status = "idle"),
            (t.products = n.payload.products),
            (t.totalItems = n.payload.totalItems);
        })
        .addCase(Tu.pending, (t) => {
          t.status = "loading";
        })
        .addCase(Tu.fulfilled, (t, n) => {
          (t.status = "idle"), (t.brands = n.payload);
        })
        .addCase($u.pending, (t) => {
          t.status = "loading";
        })
        .addCase($u.fulfilled, (t, n) => {
          (t.status = "idle"), (t.categories = n.payload);
        })
        .addCase(pl.pending, (t) => {
          t.status = "loading";
        })
        .addCase(pl.fulfilled, (t, n) => {
          (t.status = "idle"), (t.selectedProduct = n.payload);
        })
        .addCase(xm.pending, (t) => {
          t.status = "loading";
        })
        .addCase(xm.fulfilled, (t, n) => {
          (t.status = "idle"), (t.products = [...t.products, n.payload]);
        })
        .addCase(Ru.pending, (t) => {
          t.status = "loading";
        })
        .addCase(Ru.fulfilled, (t, n) => {
          (t.status = "idle"),
            (t.products = t.products.map((r) =>
              r.id === n.payload.id ? n.payload : r
            )),
            (t.selectedProduct = n.payload);
        });
    },
  }),
  { increment: W$ } = vb.actions,
  xb = (e) => e.product.products,
  wb = (e) => e.product.totalItems,
  oh = (e) => e.product.brands,
  lh = (e) => e.product.categories,
  ah = (e) => e.product.selectedProduct,
  bb = (e) => e.product.status,
  J4 = vb.reducer,
  jb = ({ handlePage: e, page: t, setPage: n, totalItems: r, filters: i }) => {
    const s = Math.ceil(r / hn);
    return l.jsxs("div", {
      children: [
        " ",
        l.jsxs("div", {
          className:
            "flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6",
          children: [
            l.jsxs("div", {
              className: "flex flex-1 justify-between sm:hidden",
              children: [
                l.jsx("div", {
                  onClick: (o) => e(o, t > 1 ? t - 1 : t),
                  className:
                    "relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50",
                  children: "Previous",
                }),
                l.jsx("div", {
                  onClick: (o) => e(o, t < s ? t + 1 : t),
                  className:
                    "relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50",
                  children: "Next",
                }),
              ],
            }),
            l.jsxs("div", {
              className:
                "hidden sm:flex sm:flex-1 sm:items-center sm:justify-between",
              children: [
                l.jsx("div", {
                  children: l.jsxs("p", {
                    className: "text-sm text-gray-700",
                    children: [
                      "Showing",
                      " ",
                      l.jsx("span", {
                        className: "font-medium",
                        children: (t - 1) * hn + 1,
                      }),
                      " ",
                      "to",
                      " ",
                      l.jsx("span", {
                        className: "font-medium",
                        children: t * hn > r ? r : t * hn,
                      }),
                      " ",
                      "of ",
                      l.jsx("span", { className: "font-medium", children: r }),
                      " results",
                    ],
                  }),
                }),
                l.jsx("div", {
                  children: l.jsxs("nav", {
                    className:
                      "isolate inline-flex -space-x-px rounded-md shadow-sm",
                    "aria-label": "Pagination",
                    children: [
                      l.jsxs("a", {
                        onClick: (o) => e(o, t > 1 ? t - 1 : t),
                        className:
                          "relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0",
                        children: [
                          l.jsx("span", {
                            className: "sr-only",
                            children: "Previous",
                          }),
                          l.jsx(KP, {
                            className: "h-5 w-5",
                            "aria-hidden": "true",
                          }),
                        ],
                      }),
                      Array.from({ length: s }).map((o, a) =>
                        l.jsx(
                          "div",
                          {
                            onClick: (u) => e(u, a + 1),
                            "aria-current": "page",
                            className: ` cursor-pointer relative z-10 inline-flex items-center ${
                              a + 1 === t
                                ? "bg-indigo-600 text-white"
                                : "text-gray-400"
                            } px-4 py-2 text-sm font-semibold focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`,
                            children: a + 1,
                          },
                          o
                        )
                      ),
                      l.jsxs("a", {
                        onClick: (o) => e(o, t < s ? t + 1 : t),
                        className:
                          "relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0",
                        children: [
                          l.jsx("span", {
                            className: "sr-only",
                            children: "Next",
                          }),
                          l.jsx(YP, {
                            className: "h-5 w-5",
                            "aria-hidden": "true",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  e$ = [
    { name: "Best Rating", sort: "rating", order: "desc", current: !1 },
    { name: "Price: Low to High", sort: "price", order: "asc", current: !1 },
    { name: "Price: High to Low", sort: "price", order: "desc", current: !1 },
  ];
function t$(...e) {
  return e.filter(Boolean).join(" ");
}
function n$() {
  const e = It(),
    [t, n] = m.useState(!1),
    r = me(xb),
    i = me(wb),
    s = me(oh),
    o = me(lh);
  console.log(i, "responseTotla"), console.log(r);
  const a = [
      { id: "category", name: "Category", options: o },
      { id: "brand", name: "Brands", options: s },
    ],
    [u, c] = m.useState({}),
    [d, f] = m.useState({}),
    [p, g] = m.useState(1),
    x = (y, h, v) => {
      console.log(y.target.checked);
      const b = { ...u };
      if (y.target.checked)
        b[h.id] ? b[h.id].push(v.value) : (b[h.id] = [v.value]);
      else {
        const S = b[h.id].findIndex((E) => E === v.value);
        b[h.id].splice(S, 1);
      }
      console.log({ newFilter: b }), c(b);
    },
    w = (y, h) => {
      const v = { _sort: h.sort, _order: h.order };
      console.log({ sort: v }), f(v);
    },
    j = (y, h) => {
      g(h);
    };
  return (
    m.useEffect(() => {
      const y = { _page: p, _limit: hn };
      console.log(y, "responsePagination"),
        e(Pu({ filter: u, sort: d, pagination: y }));
    }, [e, u, d, p]),
    m.useEffect(() => {
      g(1);
    }, [i, d]),
    m.useEffect(() => {
      e(Tu()), e($u());
    }, [e]),
    l.jsx("div", {
      className: "bg-white",
      children: l.jsxs("div", {
        children: [
          l.jsx(i$, {
            mobileFiltersOpen: t,
            setMobileFiltersOpen: n,
            handleFilter: x,
            filters: a,
          }),
          l.jsxs("main", {
            className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
            children: [
              l.jsxs("div", {
                className:
                  "flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24",
                children: [
                  l.jsx("h1", {
                    className:
                      "text-4xl font-bold tracking-tight text-gray-900",
                    children: "All Products",
                  }),
                  l.jsxs("div", {
                    className: "flex items-center",
                    children: [
                      l.jsxs(pn, {
                        as: "div",
                        className: "relative inline-block text-left",
                        children: [
                          l.jsx("div", {
                            children: l.jsxs(pn.Button, {
                              className:
                                "group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900 bg-white",
                              children: [
                                "Sort",
                                l.jsx(pb, {
                                  className:
                                    "-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500",
                                  "aria-hidden": "true",
                                }),
                              ],
                            }),
                          }),
                          l.jsx(s$, {
                            handleFilter: x,
                            handleSort: w,
                            filters: a,
                          }),
                        ],
                      }),
                      l.jsxs("button", {
                        type: "button",
                        className:
                          "-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7 bg-white",
                        children: [
                          l.jsx("span", {
                            className: "sr-only",
                            children: "View grid",
                          }),
                          l.jsx(gb, {
                            className: "h-5 w-5",
                            "aria-hidden": "true",
                          }),
                        ],
                      }),
                      l.jsxs("button", {
                        type: "button",
                        className:
                          "-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden bg-white",
                        onClick: () => n(!0),
                        children: [
                          l.jsx("span", {
                            className: "sr-only",
                            children: "Filters",
                          }),
                          l.jsx(hb, {
                            className: "h-5 w-5",
                            "aria-hidden": "true",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              l.jsxs("section", {
                "aria-labelledby": "products-heading",
                className: "pb-24 pt-6",
                children: [
                  l.jsx("h2", {
                    id: "products-heading",
                    className: "sr-only",
                    children: "Products",
                  }),
                  l.jsxs("div", {
                    className:
                      "grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4",
                    children: [
                      l.jsx("form", {
                        className: "hidden lg:block",
                        children: a.map((y) =>
                          l.jsx(
                            _t,
                            {
                              as: "div",
                              className: "border-b border-gray-200 py-6",
                              children: ({ open: h }) =>
                                l.jsxs(l.Fragment, {
                                  children: [
                                    l.jsx("h3", {
                                      className: "-my-3 flow-root",
                                      children: l.jsxs(_t.Button, {
                                        className:
                                          "flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500",
                                        children: [
                                          l.jsx("span", {
                                            className:
                                              "font-medium text-gray-900",
                                            children: y.name,
                                          }),
                                          l.jsx("span", {
                                            className: "ml-6 flex items-center",
                                            children: h
                                              ? l.jsx(Dc, {
                                                  className: "h-5 w-5",
                                                  "aria-hidden": "true",
                                                })
                                              : l.jsx(Ac, {
                                                  className: "h-5 w-5",
                                                  "aria-hidden": "true",
                                                }),
                                          }),
                                        ],
                                      }),
                                    }),
                                    l.jsx(_t.Panel, {
                                      className: "pt-6",
                                      children: l.jsx("div", {
                                        className: "space-y-4",
                                        children: y.options.map((v, b) =>
                                          l.jsxs(
                                            "div",
                                            {
                                              className: "flex items-center",
                                              children: [
                                                l.jsx("input", {
                                                  id: `filter-${y.id}-${b}`,
                                                  name: `${y.id}[]`,
                                                  defaultValue: v.value,
                                                  type: "checkbox",
                                                  onChange: (S) => x(S, y, v),
                                                  defaultChecked: v.checked,
                                                  className:
                                                    "h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500",
                                                }),
                                                l.jsx("label", {
                                                  htmlFor: `filter-${y.id}-${b}`,
                                                  className:
                                                    "ml-3 text-sm text-gray-600",
                                                  children: v.label,
                                                }),
                                              ],
                                            },
                                            v.value
                                          )
                                        ),
                                      }),
                                    }),
                                  ],
                                }),
                            },
                            y.id
                          )
                        ),
                      }),
                      l.jsx(r$, { products: r, filters: a }),
                    ],
                  }),
                ],
              }),
              l.jsx(jb, {
                handlePage: j,
                page: p,
                setPage: g,
                totalItems: i,
                filters: a,
              }),
            ],
          }),
        ],
      }),
    })
  );
}
const r$ = ({ products: e, filters: t }) => {
    const n = me(bb);
    return l.jsx("div", {
      className: "lg:col-span-3",
      children: l.jsx("div", {
        className: "bg-white",
        children: l.jsx("div", {
          className:
            "mx-auto max-w-2xl px-4 py-0 sm:px-6 sm:py-0 lg:max-w-7xl lg:px-8",
          children: l.jsxs("div", {
            className:
              "mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8",
            children: [
              " ",
              n === "loading"
                ? l.jsx(th, {
                    height: "80",
                    width: "80",
                    color: "rgb(79, 70, 229) ",
                    ariaLabel: "grid-loading",
                    radius: "12.5",
                    wrapperStyle: {},
                    wrapperClass: "",
                    visible: !0,
                  })
                : null,
              e == null
                ? void 0
                : e.map((r) =>
                    l.jsxs(
                      rt,
                      {
                        to: `/product-detail/${r.id}`,
                        children: [
                          l.jsxs(
                            "div",
                            {
                              className: "group relative",
                              children: [
                                l.jsx("div", {
                                  className:
                                    "min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80",
                                  children: l.jsx("img", {
                                    src: r.thumbnail,
                                    alt: r.title,
                                    className:
                                      "h-full w-full object-cover object-center lg:h-full lg:w-full",
                                  }),
                                }),
                                l.jsxs("div", {
                                  className: "mt-4 flex justify-between",
                                  children: [
                                    l.jsxs("div", {
                                      children: [
                                        l.jsx("h3", {
                                          className: "text-sm text-gray-700",
                                          children: l.jsxs("p", {
                                            href: r.thumbnail,
                                            children: [
                                              l.jsx("span", {
                                                "aria-hidden": "true",
                                                className: "absolute inset-0",
                                              }),
                                              r.title,
                                            ],
                                          }),
                                        }),
                                        l.jsxs("p", {
                                          className:
                                            "mt-1 text-sm text-gray-500",
                                          children: [
                                            l.jsx(xw, {
                                              className: "h-6 w-6 inline",
                                            }),
                                            l.jsxs("span", {
                                              className: "align-bottom",
                                              children: [" ", r.rating],
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    l.jsxs("div", {
                                      children: [
                                        " ",
                                        l.jsx("p", {
                                          className:
                                            "text-sm font-medium text-gray-900",
                                          children: fr(r),
                                        }),
                                        l.jsxs("p", {
                                          className:
                                            "text-sm font-medium text-gray-500 line-through",
                                          children: ["$", r.price],
                                        }),
                                      ],
                                    }),
                                    " ",
                                  ],
                                }),
                                " ",
                              ],
                            },
                            r.id
                          ),
                          " ",
                          r.stock <= 0 &&
                            l.jsx("div", {
                              children: l.jsx("p", {
                                className: "text-sm text-red-400 mt-2",
                                children: "out of stock",
                              }),
                            }),
                        ],
                      },
                      r.id
                    )
                  ),
            ],
          }),
        }),
      }),
    });
  },
  i$ = ({
    mobileFiltersOpen: e,
    setMobileFiltersOpen: t,
    handleFilter: n,
    filters: r,
  }) =>
    l.jsx(l.Fragment, {
      children: l.jsx(nn.Root, {
        show: e,
        as: m.Fragment,
        children: l.jsxs(bi, {
          as: "div",
          className: "relative z-40 lg:hidden",
          onClose: t,
          children: [
            l.jsx(nn.Child, {
              as: m.Fragment,
              enter: "transition-opacity ease-linear duration-300",
              enterFrom: "opacity-0",
              enterTo: "opacity-100",
              leave: "transition-opacity ease-linear duration-300",
              leaveFrom: "opacity-100",
              leaveTo: "opacity-0",
              children: l.jsx("div", {
                className: "fixed inset-0 bg-black bg-opacity-25",
              }),
            }),
            l.jsx("div", {
              className: "fixed inset-0 z-40 flex",
              children: l.jsx(nn.Child, {
                as: m.Fragment,
                enter: "transition ease-in-out duration-300 transform",
                enterFrom: "translate-x-full",
                enterTo: "translate-x-0",
                leave: "transition ease-in-out duration-300 transform",
                leaveFrom: "translate-x-0",
                leaveTo: "translate-x-full",
                children: l.jsxs(bi.Panel, {
                  className:
                    "relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl",
                  children: [
                    l.jsxs("div", {
                      className: "flex items-center justify-between px-4",
                      children: [
                        l.jsx("h2", {
                          className: "text-lg font-medium text-gray-900",
                          children: "Filters",
                        }),
                        l.jsxs("button", {
                          type: "button",
                          className:
                            "-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400",
                          onClick: () => t(!1),
                          children: [
                            l.jsx("span", {
                              className: "sr-only",
                              children: "Close menu",
                            }),
                            l.jsx(Qp, {
                              className: "h-6 w-6",
                              "aria-hidden": "true",
                            }),
                          ],
                        }),
                      ],
                    }),
                    l.jsx("form", {
                      className: "mt-4 border-t border-gray-200",
                      children: r.map((i) =>
                        l.jsx(
                          _t,
                          {
                            as: "div",
                            className: "border-t border-gray-200 px-4 py-6",
                            children: ({ open: s }) =>
                              l.jsxs(l.Fragment, {
                                children: [
                                  l.jsx("h3", {
                                    className: "-mx-2 -my-3 flow-root",
                                    children: l.jsxs(_t.Button, {
                                      className:
                                        "flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500",
                                      children: [
                                        l.jsx("span", {
                                          className:
                                            "font-medium text-gray-900",
                                          children: i.name,
                                        }),
                                        l.jsx("span", {
                                          className: "ml-6 flex items-center",
                                          children: s
                                            ? l.jsx(Dc, {
                                                className: "h-5 w-5",
                                                "aria-hidden": "true",
                                              })
                                            : l.jsx(Ac, {
                                                className: "h-5 w-5",
                                                "aria-hidden": "true",
                                              }),
                                        }),
                                      ],
                                    }),
                                  }),
                                  l.jsx(_t.Panel, {
                                    className: "pt-6",
                                    children: l.jsx("div", {
                                      className: "space-y-6",
                                      children: i.options.map((o, a) =>
                                        l.jsxs(
                                          "div",
                                          {
                                            className: "flex items-center",
                                            children: [
                                              l.jsx("input", {
                                                id: `filter-mobile-${i.id}-${a}`,
                                                name: `${i.id}[]`,
                                                defaultValue: o.value,
                                                type: "checkbox",
                                                defaultChecked: o.checked,
                                                onChange: (u) => n(u, i, o),
                                                className:
                                                  "h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500",
                                              }),
                                              l.jsx("label", {
                                                htmlFor: `filter-mobile-${i.id}-${a}`,
                                                className:
                                                  "ml-3 min-w-0 flex-1 text-gray-500",
                                                children: o.label,
                                              }),
                                            ],
                                          },
                                          o.value
                                        )
                                      ),
                                    }),
                                  }),
                                ],
                              }),
                          },
                          i.id
                        )
                      ),
                    }),
                  ],
                }),
              }),
            }),
          ],
        }),
      }),
    }),
  s$ = ({ handleSort: e, handleFilter: t, filters: n }) =>
    l.jsx(l.Fragment, {
      children: l.jsx(nn, {
        as: m.Fragment,
        enter: "transition ease-out duration-100",
        enterFrom: "transform opacity-0 scale-95",
        enterTo: "transform opacity-100 scale-100",
        leave: "transition ease-in duration-75",
        leaveFrom: "transform opacity-100 scale-100",
        leaveTo: "transform opacity-0 scale-95",
        children: l.jsx(pn.Items, {
          className:
            "absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none",
          children: l.jsx("div", {
            className: "py-1",
            children: e$.map((r) =>
              l.jsx(
                pn.Item,
                {
                  children: ({ active: i }) =>
                    l.jsx("p", {
                      onClick: (s) => {
                        e(s, r);
                      },
                      className: t$(
                        r.current
                          ? "font-medium text-gray-900"
                          : "text-gray-500",
                        i ? "bg-gray-100" : "",
                        "block px-4 py-2 text-sm"
                      ),
                      children: r.name,
                    }),
                },
                r.name
              )
            ),
          }),
        }),
      }),
    });
function o$() {
  return l.jsxs("div", {
    children: [l.jsx(ei, { children: l.jsx(n$, {}) }), l.jsx(mb, {})],
  });
}
function l$() {
  const {
      register: e,
      handleSubmit: t,
      watch: n,
      formState: { errors: r },
    } = Ws(),
    i = It(),
    s = me(uk),
    o = me(Jr);
  return l.jsxs(l.Fragment, {
    children: [
      o && l.jsx(Kn, { to: "/", replace: !0 }),
      l.jsxs("div", {
        className:
          "flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8",
        children: [
          l.jsxs("div", {
            className: "sm:mx-auto sm:w-full sm:max-w-sm",
            children: [
              l.jsx("img", {
                alt: "Your Company",
                src: "/ecommerce.png",
                className: "mx-auto h-10 w-auto",
              }),
              l.jsx("h2", {
                className:
                  "mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900",
                children: "Log in to your account",
              }),
            ],
          }),
          l.jsxs("div", {
            className: "mt-10 sm:mx-auto sm:w-full sm:max-w-sm",
            children: [
              l.jsxs("form", {
                className: "space-y-6",
                noValidate: !0,
                onSubmit: t((a) => {
                  i(Ea(a));
                }),
                method: "POST",
                children: [
                  l.jsxs("div", {
                    children: [
                      l.jsx("label", {
                        htmlFor: "email",
                        className:
                          "block text-sm font-medium leading-6 text-gray-900",
                        children: "Email address",
                      }),
                      l.jsxs("div", {
                        className: "mt-2",
                        children: [
                          l.jsx("input", {
                            ...e("email", { required: "Email is required" }),
                            type: "email",
                            className:
                              "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
                          }),
                          " ",
                          l.jsx("p", {
                            className: "text-red-500 text-xs italic",
                            children: r.email && r.email.message,
                          }),
                        ],
                      }),
                    ],
                  }),
                  l.jsxs("div", {
                    children: [
                      l.jsxs("div", {
                        className: "flex items-center justify-between",
                        children: [
                          l.jsx("label", {
                            htmlFor: "password",
                            className:
                              "block text-sm font-medium leading-6 text-gray-900",
                            children: "Password",
                          }),
                          l.jsx("div", {
                            className: "text-sm",
                            children: l.jsx(rt, {
                              to: "/forgotPassword",
                              className:
                                "font-semibold text-indigo-600 hover:text-indigo-500",
                              children: "Forgot password?",
                            }),
                          }),
                        ],
                      }),
                      l.jsxs("div", {
                        className: "mt-2",
                        children: [
                          l.jsx("input", {
                            id: "password",
                            ...e("password", {
                              required: "Password is required",
                            }),
                            type: "password",
                            className:
                              "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
                          }),
                          " ",
                          l.jsx("p", {
                            className: "text-red-500 text-xs italic",
                            children: s && s.message,
                          }),
                        ],
                      }),
                    ],
                  }),
                  l.jsx("div", {
                    children: l.jsx("button", {
                      type: "submit",
                      className:
                        "flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
                      children: "Log in",
                    }),
                  }),
                ],
              }),
              l.jsxs("p", {
                className: "mt-10 text-center text-sm text-gray-500",
                children: [
                  "Not a member?",
                  " ",
                  l.jsx(rt, {
                    to: "/signup",
                    className:
                      "font-semibold leading-6 text-indigo-600 hover:text-indigo-500",
                    children: "Create an Account",
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function a$() {
  return l.jsx("div", { children: l.jsx(l$, {}) });
}
const uy = [
    { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
    { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
    { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
  ],
  cy = [
    { name: "XXS", inStock: !1 },
    { name: "XS", inStock: !0 },
    { name: "S", inStock: !0 },
    { name: "M", inStock: !0 },
    { name: "L", inStock: !0 },
    { name: "XL", inStock: !0 },
    { name: "2XL", inStock: !0 },
    { name: "3XL", inStock: !0 },
  ],
  u$ = [
    "Hand cut and sewn locally",
    "Dyed with our proprietary colors",
    "Pre-washed & pre-shrunk",
    "Ultra-soft 100% cotton",
  ];
function po(...e) {
  return e.filter(Boolean).join(" ");
}
const c$ = () => {
    const [e, t] = m.useState(uy[0]),
      [n, r] = m.useState(cy[2]),
      i = me(ah);
    console.log(i, "product");
    const s = It(),
      o = ec(),
      a = me(bb);
    m.useEffect(() => {
      s(pl(o.id));
    }, [s, o.id]);
    const u = me(Cc),
      c = (d, f) => {
        if (
          (d.preventDefault(), u.findIndex((p) => p.product.id == f.id) < 0)
        ) {
          const p = { product: f.id, quantity: 1 };
          s(xu(p));
        } else ke.info("Already Present");
      };
    return l.jsxs("div", {
      className: "bg-white",
      children: [
        a === "loading"
          ? l.jsx(th, {
              height: "80",
              width: "80",
              color: "rgb(79, 70, 229) ",
              ariaLabel: "grid-loading",
              radius: "12.5",
              wrapperStyle: {},
              wrapperClass: "",
              visible: !0,
            })
          : null,
        i &&
          l.jsxs("div", {
            className: "pt-6",
            children: [
              l.jsx("nav", {
                "aria-label": "Breadcrumb",
                children: l.jsxs("ol", {
                  role: "list",
                  className:
                    "mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8",
                  children: [
                    i.breadcrumbs &&
                      i.breadcrumbs.map((d) =>
                        l.jsx(
                          "li",
                          {
                            children: l.jsxs("div", {
                              className: "flex items-center",
                              children: [
                                l.jsx("a", {
                                  href: d.href,
                                  className:
                                    "mr-2 text-sm font-medium text-gray-900",
                                  children: d.name,
                                }),
                                l.jsx("svg", {
                                  width: 16,
                                  height: 20,
                                  viewBox: "0 0 16 20",
                                  fill: "currentColor",
                                  "aria-hidden": "true",
                                  className: "h-5 w-4 text-gray-300",
                                  children: l.jsx("path", {
                                    d: "M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z",
                                  }),
                                }),
                              ],
                            }),
                          },
                          d.id
                        )
                      ),
                    l.jsx("li", {
                      className: "text-sm",
                      children: l.jsx("a", {
                        href: i.href,
                        "aria-current": "page",
                        className:
                          "font-medium text-gray-500 hover:text-gray-600",
                        children: i.title,
                      }),
                    }),
                  ],
                }),
              }),
              l.jsxs("div", {
                className:
                  "mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8",
                children: [
                  l.jsx("div", {
                    className:
                      "aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block",
                    children: l.jsx("img", {
                      src: i == null ? void 0 : i.thumbnail,
                      alt: i.title,
                      className: "h-full w-full object-cover object-center",
                    }),
                  }),
                  l.jsxs("div", {
                    className: "hidden lg:grid lg:grid-cols-1 lg:gap-y-8",
                    children: [
                      l.jsx("div", {
                        className:
                          "aspect-h-2 aspect-w-3 overflow-hidden rounded-lg",
                        children: l.jsx("img", {
                          src: i == null ? void 0 : i.thumbnail,
                          alt: i.title,
                          className: "h-full w-full object-cover object-center",
                        }),
                      }),
                      l.jsx("div", {
                        className:
                          "aspect-h-2 aspect-w-3 overflow-hidden rounded-lg",
                        children: l.jsx("img", {
                          src: i == null ? void 0 : i.thumbnail,
                          alt: i.title,
                          className: "h-full w-full object-cover object-center",
                        }),
                      }),
                    ],
                  }),
                  l.jsx("div", {
                    className:
                      "aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg",
                    children: l.jsx("img", {
                      src: i == null ? void 0 : i.thumbnail,
                      alt: i.title,
                      className: "h-full w-full object-cover object-center",
                    }),
                  }),
                ],
              }),
              l.jsxs("div", {
                className:
                  "mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16",
                children: [
                  l.jsx("div", {
                    className:
                      "lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8",
                    children: l.jsx("h1", {
                      className:
                        "text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl",
                      children: i.title,
                    }),
                  }),
                  l.jsxs("div", {
                    className: "mt-4 lg:row-span-3 lg:mt-0",
                    children: [
                      l.jsx("h2", {
                        className: "sr-only",
                        children: "Product information",
                      }),
                      l.jsxs("p", {
                        className:
                          "text-3xl line-through tracking-tight text-gray-900",
                        children: ["$", i.price],
                      }),
                      l.jsxs("p", {
                        className: "text-3xl tracking-tight text-gray-900",
                        children: ["$", fr(i)],
                      }),
                      l.jsxs("div", {
                        className: "mt-6",
                        children: [
                          l.jsx("h3", {
                            className: "sr-only",
                            children: "Reviews",
                          }),
                          l.jsxs("div", {
                            className: "flex items-center",
                            children: [
                              l.jsx("div", {
                                className: "flex items-center",
                                children: [0, 1, 2, 3, 4].map((d) =>
                                  l.jsx(
                                    yb,
                                    {
                                      className: po(
                                        i.rating > d
                                          ? "text-gray-900"
                                          : "text-gray-200",
                                        "h-5 w-5 flex-shrink-0"
                                      ),
                                      "aria-hidden": "true",
                                    },
                                    d
                                  )
                                ),
                              }),
                              l.jsxs("p", {
                                className: "sr-only",
                                children: [i.rating, " out of 5 stars"],
                              }),
                            ],
                          }),
                        ],
                      }),
                      l.jsxs("form", {
                        className: "mt-10",
                        children: [
                          l.jsxs("div", {
                            children: [
                              l.jsx("h3", {
                                className: "text-sm font-medium text-gray-900",
                                children: "Color",
                              }),
                              l.jsxs(St, {
                                value: e,
                                onChange: t,
                                className: "mt-4",
                                children: [
                                  l.jsx(St.Label, {
                                    className: "sr-only",
                                    children: "Choose a color",
                                  }),
                                  l.jsx("div", {
                                    className: "flex items-center space-x-3",
                                    children: uy.map((d) =>
                                      l.jsxs(
                                        St.Option,
                                        {
                                          value: d,
                                          className: ({
                                            active: f,
                                            checked: p,
                                          }) =>
                                            po(
                                              d.selectedClass,
                                              f && p
                                                ? "ring ring-offset-1"
                                                : "",
                                              !f && p ? "ring-2" : "",
                                              "relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none"
                                            ),
                                          children: [
                                            l.jsx(St.Label, {
                                              as: "span",
                                              className: "sr-only",
                                              children: d.name,
                                            }),
                                            l.jsx("span", {
                                              "aria-hidden": "true",
                                              className: po(
                                                d.class,
                                                "h-8 w-8 rounded-full border border-black border-opacity-10"
                                              ),
                                            }),
                                          ],
                                        },
                                        d.name
                                      )
                                    ),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          l.jsxs("div", {
                            className: "mt-10",
                            children: [
                              l.jsxs("div", {
                                className: "flex items-center justify-between",
                                children: [
                                  l.jsx("h3", {
                                    className:
                                      "text-sm font-medium text-gray-900",
                                    children: "Size",
                                  }),
                                  l.jsx("a", {
                                    href: "#",
                                    className:
                                      "text-sm font-medium text-indigo-600 hover:text-indigo-500",
                                    children: "Size guide",
                                  }),
                                ],
                              }),
                              l.jsxs(St, {
                                value: n,
                                onChange: r,
                                className: "mt-4",
                                children: [
                                  l.jsx(St.Label, {
                                    className: "sr-only",
                                    children: "Choose a size",
                                  }),
                                  l.jsx("div", {
                                    className:
                                      "grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4",
                                    children: cy.map((d) =>
                                      l.jsx(
                                        St.Option,
                                        {
                                          value: d,
                                          disabled: !d.inStock,
                                          className: ({ active: f }) =>
                                            po(
                                              d.inStock
                                                ? "cursor-pointer bg-white text-gray-900 shadow-sm"
                                                : "cursor-not-allowed bg-gray-50 text-gray-200",
                                              f ? "ring-2 ring-indigo-500" : "",
                                              "group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6"
                                            ),
                                          children: ({
                                            active: f,
                                            checked: p,
                                          }) =>
                                            l.jsxs(l.Fragment, {
                                              children: [
                                                l.jsx(St.Label, {
                                                  as: "span",
                                                  children: d.name,
                                                }),
                                                d.inStock
                                                  ? l.jsx("span", {
                                                      className: po(
                                                        f
                                                          ? "border"
                                                          : "border-2",
                                                        p
                                                          ? "border-indigo-500"
                                                          : "border-transparent",
                                                        "pointer-events-none absolute -inset-px rounded-md"
                                                      ),
                                                      "aria-hidden": "true",
                                                    })
                                                  : l.jsx("span", {
                                                      "aria-hidden": "true",
                                                      className:
                                                        "pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200",
                                                      children: l.jsx("svg", {
                                                        className:
                                                          "absolute inset-0 h-full w-full stroke-2 text-gray-200",
                                                        viewBox: "0 0 100 100",
                                                        preserveAspectRatio:
                                                          "none",
                                                        stroke: "currentColor",
                                                        children: l.jsx(
                                                          "line",
                                                          {
                                                            x1: 0,
                                                            y1: 100,
                                                            x2: 100,
                                                            y2: 0,
                                                            vectorEffect:
                                                              "non-scaling-stroke",
                                                          }
                                                        ),
                                                      }),
                                                    }),
                                              ],
                                            }),
                                        },
                                        d.name
                                      )
                                    ),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          l.jsx("button", {
                            onClick: (d) => {
                              c(d, i);
                            },
                            type: "submit",
                            className:
                              "mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",
                            children: "Add to Cart",
                          }),
                        ],
                      }),
                    ],
                  }),
                  l.jsxs("div", {
                    className:
                      "py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6",
                    children: [
                      l.jsxs("div", {
                        children: [
                          l.jsx("h3", {
                            className: "sr-only",
                            children: "Description",
                          }),
                          l.jsx("div", {
                            className: "space-y-6",
                            children: l.jsx("p", {
                              className: "text-base text-gray-900",
                              children: i.description,
                            }),
                          }),
                        ],
                      }),
                      l.jsxs("div", {
                        className: "mt-10",
                        children: [
                          l.jsx("h3", {
                            className: "text-sm font-medium text-gray-900",
                            children: "Highlights",
                          }),
                          l.jsx("div", {
                            className: "mt-4",
                            children: l.jsx("ul", {
                              role: "list",
                              className: "list-disc space-y-2 pl-4 text-sm",
                              children: u$.map((d) =>
                                l.jsx(
                                  "li",
                                  {
                                    className: "text-gray-400",
                                    children: l.jsx("span", {
                                      className: "text-gray-600",
                                      children: d,
                                    }),
                                  },
                                  d
                                )
                              ),
                            }),
                          }),
                        ],
                      }),
                      l.jsxs("div", {
                        className: "mt-10",
                        children: [
                          l.jsx("h2", {
                            className: "text-sm font-medium text-gray-900",
                            children: "Details",
                          }),
                          l.jsx("div", {
                            className: "mt-4 space-y-6",
                            children: l.jsx("p", {
                              className: "text-sm text-gray-600",
                              children: i.description,
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
      ],
    });
  },
  d$ = () =>
    l.jsxs("div", {
      children: [l.jsx(ei, { children: l.jsx(c$, {}) }), " ", l.jsx(mb, {})],
    });
function f$() {
  const {
    register: e,
    handleSubmit: t,
    watch: n,
    formState: { errors: r },
  } = Ws();
  console.log(r), Ju();
  const i = It(),
    s = me(Jr);
  return l.jsxs(l.Fragment, {
    children: [
      " ",
      s && l.jsx(Kn, { to: "/", replace: !0 }),
      l.jsxs("div", {
        className:
          "flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8",
        children: [
          l.jsxs("div", {
            className: "sm:mx-auto sm:w-full sm:max-w-sm",
            children: [
              l.jsx("img", {
                alt: "Your Company",
                src: "/ecommerce.png",
                className: "mx-auto h-10 w-auto",
              }),
              l.jsx("h2", {
                className:
                  "mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900",
                children: "Create a New Account",
              }),
            ],
          }),
          l.jsxs("div", {
            className: "mt-10 sm:mx-auto sm:w-full sm:max-w-sm",
            children: [
              l.jsxs("form", {
                noValidate: !0,
                className: "space-y-6",
                onSubmit: t((o) =>
                  i(
                    Bf({
                      email: o.email,
                      password: o.password,
                      address: [],
                      role: "user",
                    })
                  )
                ),
                method: "POST",
                children: [
                  l.jsxs("div", {
                    children: [
                      l.jsx("label", {
                        htmlFor: "email",
                        className:
                          "block text-sm font-medium leading-6 text-gray-900",
                        children: "Email address",
                      }),
                      l.jsxs("div", {
                        className: "mt-2",
                        children: [
                          l.jsx("input", {
                            ...e("email", {
                              required: "Email is required",
                              pattern: {
                                value: /^\S+@\S+$/i,
                                message: "Invalid email",
                              },
                            }),
                            type: "email",
                            className:
                              "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
                          }),
                          l.jsx("p", {
                            className: "text-red-500 text-xs italic",
                            children: r.email && r.email.message,
                          }),
                        ],
                      }),
                    ],
                  }),
                  l.jsxs("div", {
                    children: [
                      l.jsxs("div", {
                        className: "flex items-center justify-between",
                        children: [
                          l.jsx("label", {
                            htmlFor: "password",
                            className:
                              "block text-sm font-medium leading-6 text-gray-900",
                            children: "Password",
                          }),
                          l.jsx("div", {
                            className: "text-sm",
                            children: l.jsx(rt, {
                              to: "/forgotPassword",
                              className:
                                "font-semibold text-indigo-600 hover:text-indigo-500",
                              children: "Forgot password?",
                            }),
                          }),
                        ],
                      }),
                      l.jsxs("div", {
                        className: "mt-2",
                        children: [
                          l.jsx("input", {
                            id: "password",
                            ...e("password", {
                              required: "Password is required",
                              pattern: {
                                value:
                                  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
                                message:
                                  "Password must contain at least 8 characters, including uppercase, lowercase, and numbers.",
                              },
                            }),
                            type: "password",
                            className:
                              "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
                          }),
                          l.jsx("p", {
                            className: "text-red-500 text-xs italic",
                            children: r.password && r.password.message,
                          }),
                        ],
                      }),
                    ],
                  }),
                  l.jsxs("div", {
                    children: [
                      l.jsx("div", {
                        className: "flex items-center justify-between",
                        children: l.jsx("label", {
                          htmlFor: "confirmPassword",
                          className:
                            "block text-sm font-medium leading-6 text-gray-900",
                          children: "Confirm Password",
                        }),
                      }),
                      l.jsxs("div", {
                        className: "mt-2",
                        children: [
                          l.jsx("input", {
                            id: "confirmPassword",
                            ...e("confirmPassword", {
                              required: "Confirm Password is required",
                              validate: (o) =>
                                o === n("password") || "Passwords do not match",
                            }),
                            type: "password",
                            className:
                              "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
                          }),
                          l.jsx("p", {
                            className: "text-red-500 text-xs italic",
                            children:
                              r.confirmPassword && r.confirmPassword.message,
                          }),
                        ],
                      }),
                    ],
                  }),
                  l.jsx("div", {
                    children: l.jsx("button", {
                      type: "submit",
                      className:
                        "flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
                      children: "Sign Up",
                    }),
                  }),
                ],
              }),
              l.jsxs("p", {
                className: "mt-10 text-center text-sm text-gray-500",
                children: [
                  "Already a Member?",
                  " ",
                  l.jsx(rt, {
                    to: "/login",
                    className:
                      "font-semibold leading-6 text-indigo-600 hover:text-indigo-500",
                    children: "Log In",
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function m$() {
  return l.jsx("div", { children: l.jsx(f$, {}) });
}
const p$ = () =>
    l.jsx(l.Fragment, {
      children: l.jsx("main", {
        className:
          "grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8",
        children: l.jsxs("div", {
          className: "text-center",
          children: [
            l.jsx("p", {
              className: "text-base font-semibold text-indigo-600",
              children: "404",
            }),
            l.jsx("h1", {
              className:
                "mt-4 text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl",
              children: "Page not found",
            }),
            l.jsx("p", {
              className:
                "mt-6 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8",
              children: "Sorry, we couldn’t find the page you’re looking for.",
            }),
            l.jsx("div", {
              className: "mt-10 flex items-center justify-center gap-x-6",
              children: l.jsx(rt, {
                to: "/",
                className:
                  "rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
                children: "Go back home",
              }),
            }),
          ],
        }),
      }),
    }),
  h$ = () => {
    const e = ec(),
      t = It(),
      n = me(Jr);
    return (
      m.useEffect(() => {
        t(sm()), t(N4());
      }, [t, n]),
      l.jsxs(l.Fragment, {
        children: [
          !e.id && l.jsx(Kn, { to: "/", replace: !0 }),
          l.jsx("main", {
            className:
              "grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8",
            children: l.jsxs("div", {
              className: "text-center",
              children: [
                l.jsxs("p", {
                  className: "text-base font-semibold text-indigo-600",
                  children: [" ", "Order Successfully Placed"],
                }),
                l.jsxs("h1", {
                  className:
                    "mt-4 text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl",
                  children: [
                    "order Number #",
                    e != null && e.id ? (e == null ? void 0 : e.id) : 123456,
                  ],
                }),
                l.jsx("p", {
                  className:
                    "mt-6 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8",
                  children:
                    "you can check your order status in the order section",
                }),
                l.jsx("div", {
                  className: "mt-10 flex items-center justify-center gap-x-6",
                  children: l.jsx(rt, {
                    to: "/",
                    className:
                      "rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
                    children: "Go back home",
                  }),
                }),
              ],
            }),
          }),
        ],
      })
    );
  },
  g$ = () => {
    const e = It(),
      t = me($4),
      n = me(R4);
    return (
      m.useEffect(() => {
        e(ym());
      }, [e]),
      l.jsxs("div", {
        children: [
          t &&
            t.map((r) =>
              l.jsx(
                "div",
                {
                  children: l.jsx("div", {
                    children: l.jsxs("div", {
                      className:
                        "mx-auto mt-12 bg-white max-w-7xl px-4 sm:px-6 lg:px-8",
                      children: [
                        l.jsxs("div", {
                          className:
                            "border-t border-gray-200 px-4 py-6 sm:px-6",
                          children: [
                            l.jsxs("h1", {
                              className:
                                "text-4xl my-5 font-bold tracking-tight text-gray-900",
                              children: ["Order # ", r.id],
                            }),
                            l.jsxs("h3", {
                              className:
                                "text-xl my-5 font-bold tracking-tight text-red-900",
                              children: ["Order Status : ", r.status],
                            }),
                            l.jsx("div", {
                              className: "flow-root",
                              children: l.jsx("ul", {
                                className: "-my-6 divide-y divide-gray-200",
                                children: r.items.map((i) =>
                                  l.jsxs(
                                    "li",
                                    {
                                      className: "flex py-6",
                                      children: [
                                        l.jsx("div", {
                                          className:
                                            "h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200",
                                          children: l.jsx("img", {
                                            src: i.product.thumbnail,
                                            alt: i.product.title,
                                            className:
                                              "h-full w-full object-cover object-center",
                                          }),
                                        }),
                                        l.jsxs("div", {
                                          className:
                                            "ml-4 flex flex-1 flex-col",
                                          children: [
                                            l.jsxs("div", {
                                              children: [
                                                l.jsxs("div", {
                                                  className:
                                                    "flex justify-between text-base font-medium text-gray-900",
                                                  children: [
                                                    l.jsx("h3", {
                                                      children: l.jsx("a", {
                                                        href: i.product.id,
                                                        children:
                                                          i.product.title,
                                                      }),
                                                    }),
                                                    l.jsxs("p", {
                                                      className: "ml-4",
                                                      children: [
                                                        "$",
                                                        i.product.discountPrice,
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                                l.jsx("p", {
                                                  className:
                                                    "mt-1 text-sm text-gray-500",
                                                  children: i.product.brand,
                                                }),
                                              ],
                                            }),
                                            l.jsxs("div", {
                                              className:
                                                "flex flex-1 items-end justify-between text-sm",
                                              children: [
                                                l.jsx("div", {
                                                  className: "text-gray-500",
                                                  children: l.jsxs("label", {
                                                    htmlFor: "quantity",
                                                    className:
                                                      "inline mr-5 text-sm font-medium leading-6 text-gray-900",
                                                    children: [
                                                      "Qty :",
                                                      i.quantity,
                                                    ],
                                                  }),
                                                }),
                                                l.jsx("div", {
                                                  className: "flex",
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      ],
                                    },
                                    i.id
                                  )
                                ),
                              }),
                            }),
                          ],
                        }),
                        l.jsxs("div", {
                          className:
                            "border-t border-gray-200 px-4 py-6 sm:px-6",
                          children: [
                            l.jsxs("div", {
                              className:
                                "flex justify-between my-2 text-base font-medium text-gray-900",
                              children: [
                                l.jsx("p", { children: "Subtotal" }),
                                l.jsxs("p", {
                                  children: ["$ ", r.totalAmount],
                                }),
                              ],
                            }),
                            l.jsxs("div", {
                              className:
                                "flex justify-between my-2 text-base font-medium text-gray-900",
                              children: [
                                l.jsx("p", { children: "Total Items in Cart" }),
                                l.jsxs("p", {
                                  children: [r.totalItems, " items"],
                                }),
                              ],
                            }),
                            l.jsx("p", {
                              className: "mt-0.5 text-sm text-gray-500",
                              children: "Shipping Address :",
                            }),
                            l.jsxs("div", {
                              className:
                                "flex justify-between gap-x-6 px-5 py-5 border-solid border-2 border-gray-200",
                              children: [
                                l.jsx("div", {
                                  className: "flex gap-x-4",
                                  children: l.jsxs("div", {
                                    className: "min-w-0 flex-auto",
                                    children: [
                                      l.jsx("p", {
                                        className:
                                          "text-sm font-semibold leading-6 text-gray-900",
                                        children: r.selectedAddress.name,
                                      }),
                                      l.jsx("p", {
                                        className:
                                          "mt-1 truncate text-xs leading-5 text-gray-500",
                                        children: r.selectedAddress.street,
                                      }),
                                      l.jsx("p", {
                                        className:
                                          "mt-1 truncate text-xs leading-5 text-gray-500",
                                        children: r.selectedAddress.pinCode,
                                      }),
                                    ],
                                  }),
                                }),
                                l.jsxs("div", {
                                  className:
                                    "hidden sm:flex sm:flex-col sm:items-end",
                                  children: [
                                    l.jsxs("p", {
                                      className:
                                        "text-sm leading-6 text-gray-900",
                                      children: [
                                        "Phone: ",
                                        r.selectedAddress.phone,
                                      ],
                                    }),
                                    l.jsx("p", {
                                      className:
                                        "text-sm leading-6 text-gray-500",
                                      children: r.selectedAddress.city,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                },
                r.id
              )
            ),
          n === "loading"
            ? l.jsx(Grid, {
                height: "80",
                width: "80",
                color: "rgb(79, 70, 229) ",
                ariaLabel: "grid-loading",
                radius: "12.5",
                wrapperStyle: {},
                wrapperClass: "",
                visible: !0,
              })
            : null,
        ],
      })
    );
  },
  y$ = () =>
    l.jsxs("div", {
      children: [
        " ",
        l.jsxs(ei, {
          children: [
            l.jsx("h1", {
              className: "mx-auto text-2xl text-black font-bold",
              children: "Order History",
            }),
            l.jsx(g$, {}),
          ],
        }),
      ],
    });
function v$() {
  var j;
  const e = me(Oc),
    t = It(),
    {
      register: n,
      handleSubmit: r,
      watch: i,
      reset: s,
      setValue: o,
      formState: { errors: a },
    } = Ws(),
    [u, c] = m.useState(-1),
    d = (y, h) => {
      console.log("Remove");
      const v = { ...e, address: [...e.address] };
      v.address.splice(h, 1), t(Mo(v));
    },
    [f, p] = m.useState(!1),
    g = (y) => {
      c(y),
        o("name", e.address[y].name),
        o("email", e.address[y].email),
        o("phone", e.address[y].phone),
        o("street", e.address[y].street),
        o("city", e.address[y].city),
        o("state", e.address[y].state);
    },
    x = (y, h) => {
      const v = { ...e, address: [...e.address] };
      (v.address[h] = y), t(Mo(v)), c(-1);
    },
    w = (y) => {
      const h = { ...e, address: [...e.address] };
      h.address.push(y), t(Mo(h)), p(!1);
    };
  return l.jsx("div", {
    children: l.jsx("div", {
      children: l.jsxs("div", {
        className: "mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8 bg-white mt-12",
        children: [
          " ",
          l.jsxs("div", {
            className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-2",
            children: [
              l.jsxs("h1", {
                className:
                  "text-4xl my-10 mt-10 font-bold tracking-tight text-gray-900",
                children: [
                  "Name: ",
                  e != null && e.name
                    ? e == null
                      ? void 0
                      : e.name
                    : "Guest User",
                ],
              }),
              l.jsxs("h3", {
                className:
                  "text-xl my-10 mt-10 font-bold tracking-tight text-red-900",
                children: ["Email: ", e == null ? void 0 : e.email],
              }),
              (e == null ? void 0 : e.role) == "admin" &&
                l.jsxs("h3", {
                  className:
                    "text-xl my-10 mt-10 font-bold tracking-tight text-red-900",
                  children: ["Role: ", e == null ? void 0 : e.role],
                }),
            ],
          }),
          l.jsxs("div", {
            className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
            children: [
              l.jsx("p", {
                className: "mt-0.5 text-sm text-gray-500",
                children: "Your Address",
              }),
              l.jsx("button", {
                type: "submit",
                onClick: () => {
                  p(!0), c(-1);
                },
                className:
                  "rounded-md bg-green-600 px-3 py-2 mb-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ",
                children: "Add New Address",
              }),
              f &&
                l.jsx("form", {
                  className: "bg-white px-5 py-12 mt-12",
                  onSubmit: r((y) => {
                    w(y), s();
                  }),
                  noValidate: !0,
                  children: l.jsxs("div", {
                    className: "space-y-12",
                    children: [
                      l.jsxs("div", {
                        className: "border-b border-gray-900/10 pb-12",
                        children: [
                          l.jsx("h2", {
                            className:
                              "text-2xl font-semibold leading-7 text-gray-900",
                            children: "Personal Information",
                          }),
                          l.jsx("p", {
                            className: "mt-1 text-sm leading-6 text-gray-600",
                            children:
                              "Use a permanent address where you can receive mail.",
                          }),
                          l.jsxs("div", {
                            className:
                              "mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6",
                            children: [
                              l.jsxs("div", {
                                className: "sm:col-span-3",
                                children: [
                                  l.jsx("label", {
                                    htmlFor: "name",
                                    className:
                                      "block text-sm font-medium leading-6 text-gray-900",
                                    children: "Full name",
                                  }),
                                  l.jsx("div", {
                                    className: "mt-2",
                                    children: l.jsx("input", {
                                      type: "text",
                                      ...n("name", {
                                        required: "Name is required",
                                      }),
                                      id: "name",
                                      autoComplete: "given-name",
                                      className:
                                        "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
                                    }),
                                  }),
                                ],
                              }),
                              l.jsxs("div", {
                                className: "sm:col-span-4",
                                children: [
                                  l.jsx("label", {
                                    htmlFor: "email",
                                    className:
                                      "block text-sm font-medium leading-6 text-gray-900",
                                    children: "Email address",
                                  }),
                                  l.jsx("div", {
                                    className: "mt-2",
                                    children: l.jsx("input", {
                                      id: "email",
                                      ...n("email", {
                                        required: "Email is required",
                                      }),
                                      type: "email",
                                      autoComplete: "email",
                                      className:
                                        "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
                                    }),
                                  }),
                                ],
                              }),
                              l.jsxs("div", {
                                className: "sm:col-span-3",
                                children: [
                                  l.jsx("label", {
                                    htmlFor: "phone",
                                    className:
                                      "block text-sm font-medium leading-6 text-gray-900",
                                    children: "Phone",
                                  }),
                                  l.jsx("div", {
                                    className: "mt-2",
                                    children: l.jsx("input", {
                                      type: "tel",
                                      ...n("phone", {
                                        required: "Phone Address is required",
                                      }),
                                      id: "phone",
                                      autoComplete: "phone",
                                      className:
                                        "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
                                    }),
                                  }),
                                ],
                              }),
                              l.jsxs("div", {
                                className: "col-span-full",
                                children: [
                                  l.jsx("label", {
                                    htmlFor: "street",
                                    className:
                                      "block text-sm font-medium leading-6 text-gray-900",
                                    children: "Street address",
                                  }),
                                  l.jsx("div", {
                                    className: "mt-2",
                                    children: l.jsx("input", {
                                      type: "text",
                                      ...n("street", {
                                        required: "Street Address is required",
                                      }),
                                      id: "street",
                                      autoComplete: "street",
                                      className:
                                        "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
                                    }),
                                  }),
                                ],
                              }),
                              l.jsxs("div", {
                                className: "sm:col-span-2 sm:col-start-1",
                                children: [
                                  l.jsx("label", {
                                    htmlFor: "city",
                                    className:
                                      "block text-sm font-medium leading-6 text-gray-900",
                                    children: "City",
                                  }),
                                  l.jsx("div", {
                                    className: "mt-2",
                                    children: l.jsx("input", {
                                      type: "text",
                                      ...n("city", {
                                        required: "City is required",
                                      }),
                                      id: "city",
                                      autoComplete: "address-level2",
                                      className:
                                        "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
                                    }),
                                  }),
                                ],
                              }),
                              l.jsxs("div", {
                                className: "sm:col-span-2",
                                children: [
                                  l.jsx("label", {
                                    htmlFor: "state",
                                    className:
                                      "block text-sm font-medium leading-6 text-gray-900",
                                    children: "State / Province",
                                  }),
                                  l.jsx("div", {
                                    className: "mt-2",
                                    children: l.jsx("input", {
                                      type: "text",
                                      ...n("state", {
                                        required: "state is required",
                                      }),
                                      id: "state",
                                      autoComplete: "address-level1",
                                      className:
                                        "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
                                    }),
                                  }),
                                ],
                              }),
                              l.jsxs("div", {
                                className: "sm:col-span-2",
                                children: [
                                  l.jsx("label", {
                                    htmlFor: "pinCode",
                                    className:
                                      "block text-sm font-medium leading-6 text-gray-900",
                                    children: "ZIP / Postal code",
                                  }),
                                  l.jsx("div", {
                                    className: "mt-2",
                                    children: l.jsx("input", {
                                      type: "text",
                                      ...n("pinCode", {
                                        required: "Postal code is required",
                                      }),
                                      id: "pinCode",
                                      autoComplete: "pinCode",
                                      className:
                                        "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      l.jsxs("div", {
                        className: "mt-6 flex items-center justify-end gap-x-6",
                        children: [
                          l.jsx("button", {
                            onClick: () => p(!1),
                            type: "submit",
                            className:
                              "rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
                            children: "Cancel",
                          }),
                          l.jsx("button", {
                            type: "submit",
                            className:
                              "rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
                            children: "Add Address",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              (j = e == null ? void 0 : e.address) == null
                ? void 0
                : j.map((y, h) =>
                    l.jsxs(
                      "div",
                      {
                        children: [
                          u == h &&
                            l.jsx("form", {
                              className: "bg-white px-5 py-12 mt-12",
                              onSubmit: r((v) => {
                                x(v, h), s();
                              }),
                              noValidate: !0,
                              children: l.jsxs("div", {
                                className: "space-y-12",
                                children: [
                                  l.jsxs("div", {
                                    className:
                                      "border-b border-gray-900/10 pb-12",
                                    children: [
                                      l.jsx("h2", {
                                        className:
                                          "text-2xl font-semibold leading-7 text-gray-900",
                                        children: "Personal Information",
                                      }),
                                      l.jsx("p", {
                                        className:
                                          "mt-1 text-sm leading-6 text-gray-600",
                                        children:
                                          "Use a permanent address where you can receive mail.",
                                      }),
                                      l.jsxs("div", {
                                        className:
                                          "mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6",
                                        children: [
                                          l.jsxs("div", {
                                            className: "sm:col-span-3",
                                            children: [
                                              l.jsx("label", {
                                                htmlFor: "name",
                                                className:
                                                  "block text-sm font-medium leading-6 text-gray-900",
                                                children: "Full name",
                                              }),
                                              l.jsx("div", {
                                                className: "mt-2",
                                                children: l.jsx("input", {
                                                  type: "text",
                                                  ...n("name", {
                                                    required:
                                                      "Name is required",
                                                  }),
                                                  id: "name",
                                                  autoComplete: "given-name",
                                                  className:
                                                    "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
                                                }),
                                              }),
                                            ],
                                          }),
                                          l.jsxs("div", {
                                            className: "sm:col-span-4",
                                            children: [
                                              l.jsx("label", {
                                                htmlFor: "email",
                                                className:
                                                  "block text-sm font-medium leading-6 text-gray-900",
                                                children: "Email address",
                                              }),
                                              l.jsx("div", {
                                                className: "mt-2",
                                                children: l.jsx("input", {
                                                  id: "email",
                                                  ...n("email", {
                                                    required:
                                                      "Email is required",
                                                  }),
                                                  type: "email",
                                                  autoComplete: "email",
                                                  className:
                                                    "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
                                                }),
                                              }),
                                            ],
                                          }),
                                          l.jsxs("div", {
                                            className: "sm:col-span-3",
                                            children: [
                                              l.jsx("label", {
                                                htmlFor: "phone",
                                                className:
                                                  "block text-sm font-medium leading-6 text-gray-900",
                                                children: "Phone",
                                              }),
                                              l.jsx("div", {
                                                className: "mt-2",
                                                children: l.jsx("input", {
                                                  type: "tel",
                                                  ...n("phone", {
                                                    required:
                                                      "Phone Address is required",
                                                  }),
                                                  id: "phone",
                                                  autoComplete: "phone",
                                                  className:
                                                    "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
                                                }),
                                              }),
                                            ],
                                          }),
                                          l.jsxs("div", {
                                            className: "col-span-full",
                                            children: [
                                              l.jsx("label", {
                                                htmlFor: "street",
                                                className:
                                                  "block text-sm font-medium leading-6 text-gray-900",
                                                children: "Street address",
                                              }),
                                              l.jsx("div", {
                                                className: "mt-2",
                                                children: l.jsx("input", {
                                                  type: "text",
                                                  ...n("street", {
                                                    required:
                                                      "Street Address is required",
                                                  }),
                                                  id: "street",
                                                  autoComplete: "street",
                                                  className:
                                                    "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
                                                }),
                                              }),
                                            ],
                                          }),
                                          l.jsxs("div", {
                                            className:
                                              "sm:col-span-2 sm:col-start-1",
                                            children: [
                                              l.jsx("label", {
                                                htmlFor: "city",
                                                className:
                                                  "block text-sm font-medium leading-6 text-gray-900",
                                                children: "City",
                                              }),
                                              l.jsx("div", {
                                                className: "mt-2",
                                                children: l.jsx("input", {
                                                  type: "text",
                                                  ...n("city", {
                                                    required:
                                                      "City is required",
                                                  }),
                                                  id: "city",
                                                  autoComplete:
                                                    "address-level2",
                                                  className:
                                                    "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
                                                }),
                                              }),
                                            ],
                                          }),
                                          l.jsxs("div", {
                                            className: "sm:col-span-2",
                                            children: [
                                              l.jsx("label", {
                                                htmlFor: "state",
                                                className:
                                                  "block text-sm font-medium leading-6 text-gray-900",
                                                children: "State / Province",
                                              }),
                                              l.jsx("div", {
                                                className: "mt-2",
                                                children: l.jsx("input", {
                                                  type: "text",
                                                  ...n("state", {
                                                    required:
                                                      "state is required",
                                                  }),
                                                  id: "state",
                                                  autoComplete:
                                                    "address-level1",
                                                  className:
                                                    "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
                                                }),
                                              }),
                                            ],
                                          }),
                                          l.jsxs("div", {
                                            className: "sm:col-span-2",
                                            children: [
                                              l.jsx("label", {
                                                htmlFor: "pinCode",
                                                className:
                                                  "block text-sm font-medium leading-6 text-gray-900",
                                                children: "ZIP / Postal code",
                                              }),
                                              l.jsx("div", {
                                                className: "mt-2",
                                                children: l.jsx("input", {
                                                  type: "text",
                                                  ...n("pinCode", {
                                                    required:
                                                      "Postal code is required",
                                                  }),
                                                  id: "pinCode",
                                                  autoComplete: "pinCode",
                                                  className:
                                                    "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
                                                }),
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  l.jsxs("div", {
                                    className:
                                      "mt-6 flex items-center justify-end gap-x-6",
                                    children: [
                                      l.jsx("button", {
                                        onClick: () => c(-1),
                                        type: "submit",
                                        className:
                                          "rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
                                        children: "Cancel",
                                      }),
                                      l.jsx("button", {
                                        type: "submit",
                                        className:
                                          "rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
                                        children: "Edit Address",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                          l.jsxs(
                            "li",
                            {
                              className:
                                "flex justify-between gap-x-6 px-5 py-5 mb-1 border-solid border-2 border-gray-400 rounded-md",
                              children: [
                                l.jsx("div", {
                                  className: "flex gap-x-4",
                                  children: l.jsxs("div", {
                                    className: "min-w-0 flex-auto",
                                    children: [
                                      l.jsx("p", {
                                        className:
                                          "text-sm font-semibold leading-6 text-gray-900",
                                        children: y == null ? void 0 : y.name,
                                      }),
                                      l.jsx("p", {
                                        className:
                                          "mt-1 truncate text-xs leading-5 text-gray-500",
                                        children: y == null ? void 0 : y.street,
                                      }),
                                      l.jsx("p", {
                                        className:
                                          "mt-1 truncate text-xs leading-5 text-gray-500",
                                        children:
                                          y == null ? void 0 : y.pinCode,
                                      }),
                                    ],
                                  }),
                                }),
                                l.jsxs("div", {
                                  className:
                                    "hidden sm:flex sm:flex-col sm:items-end",
                                  children: [
                                    l.jsxs("p", {
                                      className:
                                        "text-sm leading-6 text-gray-900",
                                      children: [
                                        "Phone: ",
                                        y == null ? void 0 : y.phone,
                                      ],
                                    }),
                                    l.jsx("p", {
                                      className:
                                        "text-sm leading-6 text-gray-500",
                                      children: y == null ? void 0 : y.city,
                                    }),
                                  ],
                                }),
                                l.jsxs("div", {
                                  className:
                                    "hidden sm:flex sm:flex-col sm:items-end",
                                  children: [
                                    l.jsx("button", {
                                      onClick: () => {
                                        g(h);
                                      },
                                      type: "button",
                                      className:
                                        "font-medium text-indigo-600 hover:text-indigo-500",
                                      children: "Edit",
                                    }),
                                    " ",
                                    l.jsx("button", {
                                      onClick: (v) => d(v, h),
                                      type: "button",
                                      className:
                                        "font-medium text-indigo-600 hover:text-indigo-500",
                                      children: "Remove",
                                    }),
                                  ],
                                }),
                              ],
                            },
                            h
                          ),
                        ],
                      },
                      h
                    )
                  ),
            ],
          }),
        ],
      }),
    }),
  });
}
const x$ = () =>
    l.jsxs("div", {
      children: [
        " ",
        l.jsxs(ei, {
          children: [
            l.jsx("h1", {
              className: "mx-auto text-2xl text-black font-bold",
              children: "My Profile",
            }),
            l.jsx(v$, {}),
          ],
        }),
      ],
    }),
  w$ = () => {
    const e = It(),
      t = me(Jr);
    return (
      m.useEffect(() => {
        e(Hf());
      }),
      l.jsx("div", { children: !t && l.jsx(Kn, { to: "/login" }) })
    );
  };
function b$() {
  const {
    register: e,
    handleSubmit: t,
    watch: n,
    formState: { errors: r },
  } = Ws();
  return l.jsx(l.Fragment, {
    children: l.jsxs("div", {
      className:
        "flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8",
      children: [
        l.jsxs("div", {
          className: "sm:mx-auto sm:w-full sm:max-w-sm",
          children: [
            l.jsx("img", {
              alt: "Your Company",
              src: "/ecommerce.png",
              className: "mx-auto h-10 w-auto",
            }),
            l.jsx("h2", {
              className:
                "mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900",
              children: "Log in to your account",
            }),
          ],
        }),
        l.jsxs("div", {
          className: "mt-10 sm:mx-auto sm:w-full sm:max-w-sm",
          children: [
            l.jsxs("form", {
              className: "space-y-6",
              noValidate: !0,
              onSubmit: t((i) => {
                console.log(i);
              }),
              method: "POST",
              children: [
                l.jsxs("div", {
                  children: [
                    l.jsx("label", {
                      htmlFor: "email",
                      className:
                        "block text-sm font-medium leading-6 text-gray-900",
                      children: "Email address",
                    }),
                    l.jsxs("div", {
                      className: "mt-2",
                      children: [
                        l.jsx("input", {
                          ...e("email", { required: "Email is required" }),
                          type: "email",
                          className:
                            "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
                        }),
                        " ",
                      ],
                    }),
                  ],
                }),
                l.jsx("div", {
                  children: l.jsx("button", {
                    type: "submit",
                    className:
                      "flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
                    children: "Send Email",
                  }),
                }),
              ],
            }),
            l.jsxs("p", {
              className: "mt-10 text-center text-sm text-gray-500",
              children: [
                "Send me back to?",
                l.jsx(rt, {
                  to: "/login",
                  className:
                    "font-semibold leading-6 text-indigo-600 hover:text-indigo-500",
                  children: "Login",
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
const j$ = () => l.jsx("div", { children: l.jsx(b$, {}) }),
  ho = ({ children: e }) => {
    const t = me(Jr),
      n = me(Oc);
    return t
      ? t && n.role !== "admin"
        ? l.jsx(Kn, { to: "/" })
        : e
      : l.jsx(Kn, { to: "/login" });
  },
  E$ = [
    { name: "Best Rating", sort: "rating", order: "desc", current: !1 },
    { name: "Price: Low to High", sort: "price", order: "asc", current: !1 },
    { name: "Price: High to Low", sort: "price", order: "desc", current: !1 },
  ];
function S$(...e) {
  return e.filter(Boolean).join(" ");
}
function N$() {
  const e = It(),
    [t, n] = m.useState(!1),
    r = me(xb);
  console.log(r, "admintpage");
  const i = me(wb),
    s = me(oh),
    o = me(lh);
  console.log(i, "responseTotla"), console.log(r);
  const a = [
      { id: "category", name: "Category", options: o },
      { id: "brand", name: "Brands", options: s },
    ],
    [u, c] = m.useState({}),
    [d, f] = m.useState({}),
    [p, g] = m.useState(1),
    x = (y, h, v) => {
      console.log(y.target.checked);
      const b = { ...u };
      if (y.target.checked)
        b[h.id] ? b[h.id].push(v.value) : (b[h.id] = [v.value]);
      else {
        const S = b[h.id].findIndex((E) => E === v.value);
        b[h.id].splice(S, 1);
      }
      console.log({ newFilter: b }), c(b);
    },
    w = (y, h) => {
      const v = { _sort: h.sort, _order: h.order };
      console.log({ sort: v }), f(v);
    },
    j = (y, h) => {
      g(h);
    };
  return (
    m.useEffect(() => {
      const y = { _page: p, _limit: hn };
      console.log(y, "responsePagination"),
        e(Pu({ filter: u, sort: d, pagination: y }));
    }, [e, u, d, p]),
    m.useEffect(() => {
      g(1);
    }, [i, d]),
    m.useEffect(() => {
      e(Tu()), e($u());
    }, [e]),
    l.jsx("div", {
      className: "bg-white",
      children: l.jsxs("div", {
        children: [
          l.jsx(_$, {
            mobileFiltersOpen: t,
            setMobileFiltersOpen: n,
            handleFilter: x,
            filters: a,
          }),
          l.jsxs("main", {
            className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
            children: [
              l.jsxs("div", {
                className:
                  "flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24",
                children: [
                  l.jsx("h1", {
                    className:
                      "text-4xl font-bold tracking-tight text-gray-900",
                    children: "All Products",
                  }),
                  l.jsxs("div", {
                    className: "flex items-center",
                    children: [
                      " ",
                      l.jsxs(pn, {
                        as: "div",
                        className: "relative inline-block text-left",
                        children: [
                          l.jsx("div", {
                            children: l.jsxs(pn.Button, {
                              className:
                                "group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900 bg-white",
                              children: [
                                "Sort",
                                l.jsx(pb, {
                                  className:
                                    "-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500",
                                  "aria-hidden": "true",
                                }),
                              ],
                            }),
                          }),
                          l.jsx(P$, {
                            handleFilter: x,
                            handleSort: w,
                            filters: a,
                          }),
                        ],
                      }),
                      l.jsxs("button", {
                        type: "button",
                        className:
                          "-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7 bg-white",
                        children: [
                          l.jsx("span", {
                            className: "sr-only",
                            children: "View grid",
                          }),
                          l.jsx(gb, {
                            className: "h-5 w-5",
                            "aria-hidden": "true",
                          }),
                        ],
                      }),
                      l.jsxs("button", {
                        type: "button",
                        className:
                          "-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden bg-white",
                        onClick: () => n(!0),
                        children: [
                          l.jsx("span", {
                            className: "sr-only",
                            children: "Filters",
                          }),
                          l.jsx(hb, {
                            className: "h-5 w-5",
                            "aria-hidden": "true",
                          }),
                        ],
                      }),
                    ],
                  }),
                  " ",
                ],
              }),
              " ",
              l.jsx(rt, {
                to: "/admin/product-form",
                children: l.jsx("button", {
                  type: "submit",
                  className:
                    "flex w-64 justify-center rounded-md bg-green-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm green:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 mt-4",
                  children: "Add New Product",
                }),
              }),
              l.jsxs("section", {
                "aria-labelledby": "products-heading",
                className: "pb-24 pt-6",
                children: [
                  l.jsx("h2", {
                    id: "products-heading",
                    className: "sr-only",
                    children: "Products",
                  }),
                  l.jsxs("div", {
                    className:
                      "grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4",
                    children: [
                      l.jsx("form", {
                        className: "hidden lg:block",
                        children: a.map((y) =>
                          l.jsx(
                            _t,
                            {
                              as: "div",
                              className: "border-b border-gray-200 py-6",
                              children: ({ open: h }) =>
                                l.jsxs(l.Fragment, {
                                  children: [
                                    l.jsx("h3", {
                                      className: "-my-3 flow-root",
                                      children: l.jsxs(_t.Button, {
                                        className:
                                          "flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500",
                                        children: [
                                          l.jsx("span", {
                                            className:
                                              "font-medium text-gray-900",
                                            children: y.name,
                                          }),
                                          l.jsx("span", {
                                            className: "ml-6 flex items-center",
                                            children: h
                                              ? l.jsx(Dc, {
                                                  className: "h-5 w-5",
                                                  "aria-hidden": "true",
                                                })
                                              : l.jsx(Ac, {
                                                  className: "h-5 w-5",
                                                  "aria-hidden": "true",
                                                }),
                                          }),
                                        ],
                                      }),
                                    }),
                                    l.jsx(_t.Panel, {
                                      className: "pt-6",
                                      children: l.jsx("div", {
                                        className: "space-y-4",
                                        children: y.options.map((v, b) =>
                                          l.jsxs(
                                            "div",
                                            {
                                              className: "flex items-center",
                                              children: [
                                                l.jsx("input", {
                                                  id: `filter-${y.id}-${b}`,
                                                  name: `${y.id}[]`,
                                                  defaultValue: v.value,
                                                  type: "checkbox",
                                                  onChange: (S) => x(S, y, v),
                                                  defaultChecked: v.checked,
                                                  className:
                                                    "h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500",
                                                }),
                                                l.jsx("label", {
                                                  htmlFor: `filter-${y.id}-${b}`,
                                                  className:
                                                    "ml-3 text-sm text-gray-600",
                                                  children: v.label,
                                                }),
                                              ],
                                            },
                                            v.value
                                          )
                                        ),
                                      }),
                                    }),
                                  ],
                                }),
                            },
                            y.id
                          )
                        ),
                      }),
                      l.jsx(C$, { products: r, filters: a }),
                    ],
                  }),
                ],
              }),
              l.jsx(k$, {
                handlePage: j,
                page: p,
                setPage: g,
                totalItems: i,
                filters: a,
              }),
            ],
          }),
        ],
      }),
    })
  );
}
const k$ = ({
    handlePage: e,
    page: t,
    setPage: n,
    totalItems: r,
    filters: i,
  }) => {
    const s = Math.ceil(r / hn);
    return l.jsxs("div", {
      children: [
        " ",
        l.jsxs("div", {
          className:
            "flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6",
          children: [
            l.jsxs("div", {
              className: "flex flex-1 justify-between sm:hidden",
              children: [
                l.jsx("div", {
                  onClick: (o) => e(o, t > 1 ? t - 1 : t),
                  className:
                    "relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50",
                  children: "Previous",
                }),
                l.jsx("div", {
                  onClick: (o) => e(o, t < s ? t + 1 : t),
                  className:
                    "relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50",
                  children: "Next",
                }),
              ],
            }),
            l.jsxs("div", {
              className:
                "hidden sm:flex sm:flex-1 sm:items-center sm:justify-between",
              children: [
                l.jsx("div", {
                  children: l.jsxs("p", {
                    className: "text-sm text-gray-700",
                    children: [
                      "Showing",
                      " ",
                      l.jsx("span", {
                        className: "font-medium",
                        children: (t - 1) * hn + 1,
                      }),
                      " ",
                      "to",
                      " ",
                      l.jsx("span", {
                        className: "font-medium",
                        children: t * hn > r ? r : t * hn,
                      }),
                      " ",
                      "of ",
                      l.jsx("span", { className: "font-medium", children: r }),
                      " results",
                    ],
                  }),
                }),
                l.jsx("div", {
                  children: l.jsxs("nav", {
                    className:
                      "isolate inline-flex -space-x-px rounded-md shadow-sm",
                    "aria-label": "Pagination",
                    children: [
                      l.jsxs("a", {
                        onClick: (o) => e(o, t > 1 ? t - 1 : t),
                        className:
                          "relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0",
                        children: [
                          l.jsx("span", {
                            className: "sr-only",
                            children: "Previous",
                          }),
                          l.jsx(A4, {
                            className: "h-5 w-5",
                            "aria-hidden": "true",
                          }),
                        ],
                      }),
                      Array.from({ length: s }).map((o, a) =>
                        l.jsx(
                          "div",
                          {
                            onClick: (u) => e(u, a + 1),
                            "aria-current": "page",
                            className: ` cursor-pointer relative z-10 inline-flex items-center ${
                              a + 1 === t
                                ? "bg-indigo-600 text-white"
                                : "text-gray-400"
                            } px-4 py-2 text-sm font-semibold focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`,
                            children: a + 1,
                          },
                          o
                        )
                      ),
                      l.jsxs("a", {
                        onClick: (o) => e(o, t < s ? t + 1 : t),
                        className:
                          "relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0",
                        children: [
                          l.jsx("span", {
                            className: "sr-only",
                            children: "Next",
                          }),
                          l.jsx(M4, {
                            className: "h-5 w-5",
                            "aria-hidden": "true",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  C$ = ({ products: e, filters: t }) => (
    console.log(e, "admintpage"),
    l.jsx("div", {
      className: "lg:col-span-3",
      children: l.jsx("div", {
        className: "bg-white",
        children: l.jsx("div", {
          className:
            "mx-auto max-w-2xl px-4 py-0 sm:px-6 sm:py-0 lg:max-w-7xl lg:px-8",
          children: l.jsx("div", {
            className:
              "mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8",
            children:
              e &&
              e.map((n) =>
                l.jsxs(
                  "div",
                  {
                    className: "group relative",
                    children: [
                      l.jsxs(
                        rt,
                        {
                          to: `/product-detail/${n.id}`,
                          children: [
                            l.jsxs(
                              "div",
                              {
                                className: "group relative",
                                children: [
                                  l.jsx("div", {
                                    className:
                                      "min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80",
                                    children: l.jsx("img", {
                                      src: n.thumbnail,
                                      alt: n.title,
                                      className:
                                        "h-full w-full object-cover object-center lg:h-full lg:w-full",
                                    }),
                                  }),
                                  l.jsxs("div", {
                                    className: "mt-4 flex justify-between",
                                    children: [
                                      l.jsxs("div", {
                                        children: [
                                          l.jsx("h3", {
                                            className: "text-sm text-gray-700",
                                            children: l.jsxs("p", {
                                              href: n.thumbnail,
                                              children: [
                                                l.jsx("span", {
                                                  "aria-hidden": "true",
                                                  className: "absolute inset-0",
                                                }),
                                                n.title,
                                              ],
                                            }),
                                          }),
                                          l.jsxs("p", {
                                            className:
                                              "mt-1 text-sm text-gray-500",
                                            children: [
                                              l.jsx(xw, {
                                                className: "h-6 w-6 inline",
                                              }),
                                              l.jsxs("span", {
                                                className: "align-bottom",
                                                children: [" ", n.rating],
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      l.jsxs("div", {
                                        children: [
                                          " ",
                                          l.jsx("p", {
                                            className:
                                              "text-sm font-medium text-gray-900",
                                            children: fr(n),
                                          }),
                                          l.jsxs("p", {
                                            className:
                                              "text-sm font-medium text-gray-500 line-through",
                                            children: ["$", n.price],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  " ",
                                  n.deleted &&
                                    l.jsxs("div", {
                                      className: "text-sm text-red-500",
                                      children: [" ", "Product Deleted", " "],
                                    }),
                                ],
                              },
                              n.id
                            ),
                            " ",
                          ],
                        },
                        n.id
                      ),
                      " ",
                      l.jsx(rt, {
                        to: `/admin/product-form/edit/${n.id}`,
                        type: "submit",
                        className:
                          "flex w-full justify-center rounded-md bg-indigo-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-3",
                        children: "Edit Product",
                      }),
                    ],
                  },
                  n.id
                )
              ),
          }),
        }),
      }),
    })
  ),
  _$ = ({
    mobileFiltersOpen: e,
    setMobileFiltersOpen: t,
    handleFilter: n,
    filters: r,
  }) =>
    l.jsx(l.Fragment, {
      children: l.jsx(nn.Root, {
        show: e,
        as: m.Fragment,
        children: l.jsxs(bi, {
          as: "div",
          className: "relative z-40 lg:hidden",
          onClose: t,
          children: [
            l.jsx(nn.Child, {
              as: m.Fragment,
              enter: "transition-opacity ease-linear duration-300",
              enterFrom: "opacity-0",
              enterTo: "opacity-100",
              leave: "transition-opacity ease-linear duration-300",
              leaveFrom: "opacity-100",
              leaveTo: "opacity-0",
              children: l.jsx("div", {
                className: "fixed inset-0 bg-black bg-opacity-25",
              }),
            }),
            l.jsx("div", {
              className: "fixed inset-0 z-40 flex",
              children: l.jsx(nn.Child, {
                as: m.Fragment,
                enter: "transition ease-in-out duration-300 transform",
                enterFrom: "translate-x-full",
                enterTo: "translate-x-0",
                leave: "transition ease-in-out duration-300 transform",
                leaveFrom: "translate-x-0",
                leaveTo: "translate-x-full",
                children: l.jsxs(bi.Panel, {
                  className:
                    "relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl",
                  children: [
                    l.jsxs("div", {
                      className: "flex items-center justify-between px-4",
                      children: [
                        l.jsx("h2", {
                          className: "text-lg font-medium text-gray-900",
                          children: "Filters",
                        }),
                        l.jsxs("button", {
                          type: "button",
                          className:
                            "-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400",
                          onClick: () => t(!1),
                          children: [
                            l.jsx("span", {
                              className: "sr-only",
                              children: "Close menu",
                            }),
                            l.jsx(Qp, {
                              className: "h-6 w-6",
                              "aria-hidden": "true",
                            }),
                          ],
                        }),
                      ],
                    }),
                    l.jsx("form", {
                      className: "mt-4 border-t border-gray-200",
                      children: r.map((i) =>
                        l.jsx(
                          _t,
                          {
                            as: "div",
                            className: "border-t border-gray-200 px-4 py-6",
                            children: ({ open: s }) =>
                              l.jsxs(l.Fragment, {
                                children: [
                                  l.jsx("h3", {
                                    className: "-mx-2 -my-3 flow-root",
                                    children: l.jsxs(_t.Button, {
                                      className:
                                        "flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500",
                                      children: [
                                        l.jsx("span", {
                                          className:
                                            "font-medium text-gray-900",
                                          children: i.name,
                                        }),
                                        l.jsx("span", {
                                          className: "ml-6 flex items-center",
                                          children: s
                                            ? l.jsx(Dc, {
                                                className: "h-5 w-5",
                                                "aria-hidden": "true",
                                              })
                                            : l.jsx(Ac, {
                                                className: "h-5 w-5",
                                                "aria-hidden": "true",
                                              }),
                                        }),
                                      ],
                                    }),
                                  }),
                                  l.jsx(_t.Panel, {
                                    className: "pt-6",
                                    children: l.jsx("div", {
                                      className: "space-y-6",
                                      children: i.options.map((o, a) =>
                                        l.jsxs(
                                          "div",
                                          {
                                            className: "flex items-center",
                                            children: [
                                              l.jsx("input", {
                                                id: `filter-mobile-${i.id}-${a}`,
                                                name: `${i.id}[]`,
                                                defaultValue: o.value,
                                                type: "checkbox",
                                                defaultChecked: o.checked,
                                                onChange: (u) => n(u, i, o),
                                                className:
                                                  "h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500",
                                              }),
                                              l.jsx("label", {
                                                htmlFor: `filter-mobile-${i.id}-${a}`,
                                                className:
                                                  "ml-3 min-w-0 flex-1 text-gray-500",
                                                children: o.label,
                                              }),
                                            ],
                                          },
                                          o.value
                                        )
                                      ),
                                    }),
                                  }),
                                ],
                              }),
                          },
                          i.id
                        )
                      ),
                    }),
                  ],
                }),
              }),
            }),
          ],
        }),
      }),
    }),
  P$ = ({ handleSort: e, handleFilter: t, filters: n }) =>
    l.jsx(l.Fragment, {
      children: l.jsx(nn, {
        as: m.Fragment,
        enter: "transition ease-out duration-100",
        enterFrom: "transform opacity-0 scale-95",
        enterTo: "transform opacity-100 scale-100",
        leave: "transition ease-in duration-75",
        leaveFrom: "transform opacity-100 scale-100",
        leaveTo: "transform opacity-0 scale-95",
        children: l.jsx(pn.Items, {
          className:
            "absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none",
          children: l.jsx("div", {
            className: "py-1",
            children: E$.map((r) =>
              l.jsx(
                pn.Item,
                {
                  children: ({ active: i }) =>
                    l.jsx("p", {
                      onClick: (s) => {
                        e(s, r);
                      },
                      className: S$(
                        r.current
                          ? "font-medium text-gray-900"
                          : "text-gray-500",
                        i ? "bg-gray-100" : "",
                        "block px-4 py-2 text-sm"
                      ),
                      children: r.name,
                    }),
                },
                r.name
              )
            ),
          }),
        }),
      }),
    });
function T$() {
  return l.jsx("div", { children: l.jsx(ei, { children: l.jsx(N$, {}) }) });
}
const dy = [
    { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
    { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
    { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
  ],
  fy = [
    { name: "XXS", inStock: !1 },
    { name: "XS", inStock: !0 },
    { name: "S", inStock: !0 },
    { name: "M", inStock: !0 },
    { name: "L", inStock: !0 },
    { name: "XL", inStock: !0 },
    { name: "2XL", inStock: !0 },
    { name: "3XL", inStock: !0 },
  ],
  $$ = [
    "Hand cut and sewn locally",
    "Dyed with our proprietary colors",
    "Pre-washed & pre-shrunk",
    "Ultra-soft 100% cotton",
  ];
function go(...e) {
  return e.filter(Boolean).join(" ");
}
const R$ = () => {
    const [e, t] = m.useState(dy[0]),
      [n, r] = m.useState(fy[2]),
      i = me(ah);
    console.log(i, "product");
    const s = It(),
      o = ec();
    me(Jr),
      m.useEffect(() => {
        s(pl(o.id));
      }, [s, o.id]);
    const a = (u, c) => {
      u.preventDefault();
      const d = { ...c, quantity: 1 };
      delete d.id, s(xu(d));
    };
    return l.jsx("div", {
      className: "bg-white",
      children:
        i &&
        l.jsxs("div", {
          className: "pt-6",
          children: [
            l.jsx("nav", {
              "aria-label": "Breadcrumb",
              children: l.jsxs("ol", {
                role: "list",
                className:
                  "mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8",
                children: [
                  i.breadcrumbs &&
                    i.breadcrumbs.map((u) =>
                      l.jsx(
                        "li",
                        {
                          children: l.jsxs("div", {
                            className: "flex items-center",
                            children: [
                              l.jsx("a", {
                                href: u.href,
                                className:
                                  "mr-2 text-sm font-medium text-gray-900",
                                children: u.name,
                              }),
                              l.jsx("svg", {
                                width: 16,
                                height: 20,
                                viewBox: "0 0 16 20",
                                fill: "currentColor",
                                "aria-hidden": "true",
                                className: "h-5 w-4 text-gray-300",
                                children: l.jsx("path", {
                                  d: "M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z",
                                }),
                              }),
                            ],
                          }),
                        },
                        u.id
                      )
                    ),
                  l.jsx("li", {
                    className: "text-sm",
                    children: l.jsx("a", {
                      href: i.href,
                      "aria-current": "page",
                      className:
                        "font-medium text-gray-500 hover:text-gray-600",
                      children: i.title,
                    }),
                  }),
                ],
              }),
            }),
            l.jsxs("div", {
              className:
                "mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8",
              children: [
                l.jsx("div", {
                  className:
                    "aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block",
                  children: l.jsx("img", {
                    src: i == null ? void 0 : i.thumbnail,
                    alt: i.title,
                    className: "h-full w-full object-cover object-center",
                  }),
                }),
                l.jsxs("div", {
                  className: "hidden lg:grid lg:grid-cols-1 lg:gap-y-8",
                  children: [
                    l.jsx("div", {
                      className:
                        "aspect-h-2 aspect-w-3 overflow-hidden rounded-lg",
                      children: l.jsx("img", {
                        src: i == null ? void 0 : i.thumbnail,
                        alt: i.title,
                        className: "h-full w-full object-cover object-center",
                      }),
                    }),
                    l.jsx("div", {
                      className:
                        "aspect-h-2 aspect-w-3 overflow-hidden rounded-lg",
                      children: l.jsx("img", {
                        src: i == null ? void 0 : i.thumbnail,
                        alt: i.title,
                        className: "h-full w-full object-cover object-center",
                      }),
                    }),
                  ],
                }),
                l.jsx("div", {
                  className:
                    "aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg",
                  children: l.jsx("img", {
                    src: i == null ? void 0 : i.thumbnail,
                    alt: i.title,
                    className: "h-full w-full object-cover object-center",
                  }),
                }),
              ],
            }),
            l.jsxs("div", {
              className:
                "mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16",
              children: [
                l.jsx("div", {
                  className:
                    "lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8",
                  children: l.jsx("h1", {
                    className:
                      "text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl",
                    children: i.title,
                  }),
                }),
                l.jsxs("div", {
                  className: "mt-4 lg:row-span-3 lg:mt-0",
                  children: [
                    l.jsx("h2", {
                      className: "sr-only",
                      children: "Product information",
                    }),
                    l.jsxs("p", {
                      className: "text-3xl tracking-tight text-gray-900",
                      children: ["$", i.price],
                    }),
                    l.jsxs("p", {
                      className: "text-3xl tracking-tight text-gray-900",
                      children: ["$", fr(i)],
                    }),
                    l.jsxs("div", {
                      className: "mt-6",
                      children: [
                        l.jsx("h3", {
                          className: "sr-only",
                          children: "Reviews",
                        }),
                        l.jsxs("div", {
                          className: "flex items-center",
                          children: [
                            l.jsx("div", {
                              className: "flex items-center",
                              children: [0, 1, 2, 3, 4].map((u) =>
                                l.jsx(
                                  yb,
                                  {
                                    className: go(
                                      i.rating > u
                                        ? "text-gray-900"
                                        : "text-gray-200",
                                      "h-5 w-5 flex-shrink-0"
                                    ),
                                    "aria-hidden": "true",
                                  },
                                  u
                                )
                              ),
                            }),
                            l.jsxs("p", {
                              className: "sr-only",
                              children: [i.rating, " out of 5 stars"],
                            }),
                          ],
                        }),
                      ],
                    }),
                    l.jsxs("form", {
                      className: "mt-10",
                      children: [
                        l.jsxs("div", {
                          children: [
                            l.jsx("h3", {
                              className: "text-sm font-medium text-gray-900",
                              children: "Color",
                            }),
                            l.jsxs(St, {
                              value: e,
                              onChange: t,
                              className: "mt-4",
                              children: [
                                l.jsx(St.Label, {
                                  className: "sr-only",
                                  children: "Choose a color",
                                }),
                                l.jsx("div", {
                                  className: "flex items-center space-x-3",
                                  children: dy.map((u) =>
                                    l.jsxs(
                                      St.Option,
                                      {
                                        value: u,
                                        className: ({
                                          active: c,
                                          checked: d,
                                        }) =>
                                          go(
                                            u.selectedClass,
                                            c && d ? "ring ring-offset-1" : "",
                                            !c && d ? "ring-2" : "",
                                            "relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none"
                                          ),
                                        children: [
                                          l.jsx(St.Label, {
                                            as: "span",
                                            className: "sr-only",
                                            children: u.name,
                                          }),
                                          l.jsx("span", {
                                            "aria-hidden": "true",
                                            className: go(
                                              u.class,
                                              "h-8 w-8 rounded-full border border-black border-opacity-10"
                                            ),
                                          }),
                                        ],
                                      },
                                      u.name
                                    )
                                  ),
                                }),
                              ],
                            }),
                          ],
                        }),
                        l.jsxs("div", {
                          className: "mt-10",
                          children: [
                            l.jsxs("div", {
                              className: "flex items-center justify-between",
                              children: [
                                l.jsx("h3", {
                                  className:
                                    "text-sm font-medium text-gray-900",
                                  children: "Size",
                                }),
                                l.jsx("a", {
                                  href: "#",
                                  className:
                                    "text-sm font-medium text-indigo-600 hover:text-indigo-500",
                                  children: "Size guide",
                                }),
                              ],
                            }),
                            l.jsxs(St, {
                              value: n,
                              onChange: r,
                              className: "mt-4",
                              children: [
                                l.jsx(St.Label, {
                                  className: "sr-only",
                                  children: "Choose a size",
                                }),
                                l.jsx("div", {
                                  className:
                                    "grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4",
                                  children: fy.map((u) =>
                                    l.jsx(
                                      St.Option,
                                      {
                                        value: u,
                                        disabled: !u.inStock,
                                        className: ({ active: c }) =>
                                          go(
                                            u.inStock
                                              ? "cursor-pointer bg-white text-gray-900 shadow-sm"
                                              : "cursor-not-allowed bg-gray-50 text-gray-200",
                                            c ? "ring-2 ring-indigo-500" : "",
                                            "group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6"
                                          ),
                                        children: ({ active: c, checked: d }) =>
                                          l.jsxs(l.Fragment, {
                                            children: [
                                              l.jsx(St.Label, {
                                                as: "span",
                                                children: u.name,
                                              }),
                                              u.inStock
                                                ? l.jsx("span", {
                                                    className: go(
                                                      c ? "border" : "border-2",
                                                      d
                                                        ? "border-indigo-500"
                                                        : "border-transparent",
                                                      "pointer-events-none absolute -inset-px rounded-md"
                                                    ),
                                                    "aria-hidden": "true",
                                                  })
                                                : l.jsx("span", {
                                                    "aria-hidden": "true",
                                                    className:
                                                      "pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200",
                                                    children: l.jsx("svg", {
                                                      className:
                                                        "absolute inset-0 h-full w-full stroke-2 text-gray-200",
                                                      viewBox: "0 0 100 100",
                                                      preserveAspectRatio:
                                                        "none",
                                                      stroke: "currentColor",
                                                      children: l.jsx("line", {
                                                        x1: 0,
                                                        y1: 100,
                                                        x2: 100,
                                                        y2: 0,
                                                        vectorEffect:
                                                          "non-scaling-stroke",
                                                      }),
                                                    }),
                                                  }),
                                            ],
                                          }),
                                      },
                                      u.name
                                    )
                                  ),
                                }),
                              ],
                            }),
                          ],
                        }),
                        l.jsx("button", {
                          onClick: (u) => {
                            a(u, i);
                          },
                          type: "submit",
                          className:
                            "mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",
                          children: "Add to Cart",
                        }),
                      ],
                    }),
                  ],
                }),
                l.jsxs("div", {
                  className:
                    "py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6",
                  children: [
                    l.jsxs("div", {
                      children: [
                        l.jsx("h3", {
                          className: "sr-only",
                          children: "Description",
                        }),
                        l.jsx("div", {
                          className: "space-y-6",
                          children: l.jsx("p", {
                            className: "text-base text-gray-900",
                            children: i.description,
                          }),
                        }),
                      ],
                    }),
                    l.jsxs("div", {
                      className: "mt-10",
                      children: [
                        l.jsx("h3", {
                          className: "text-sm font-medium text-gray-900",
                          children: "Highlights",
                        }),
                        l.jsx("div", {
                          className: "mt-4",
                          children: l.jsx("ul", {
                            role: "list",
                            className: "list-disc space-y-2 pl-4 text-sm",
                            children: $$.map((u) =>
                              l.jsx(
                                "li",
                                {
                                  className: "text-gray-400",
                                  children: l.jsx("span", {
                                    className: "text-gray-600",
                                    children: u,
                                  }),
                                },
                                u
                              )
                            ),
                          }),
                        }),
                      ],
                    }),
                    l.jsxs("div", {
                      className: "mt-10",
                      children: [
                        l.jsx("h2", {
                          className: "text-sm font-medium text-gray-900",
                          children: "Details",
                        }),
                        l.jsx("div", {
                          className: "mt-4 space-y-6",
                          children: l.jsx("p", {
                            className: "text-sm text-gray-600",
                            children: i.description,
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
    });
  },
  F$ = () => l.jsx("div", { children: l.jsx(ei, { children: l.jsx(R$, {}) }) }),
  L$ = () => {
    const e = me(oh),
      t = me(lh),
      {
        register: n,
        handleSubmit: r,
        watch: i,
        setValue: s,
        reset: o,
        formState: { errors: a },
      } = Ws(),
      u = It(),
      c = Ju(),
      d = ec(),
      f = me(ah);
    m.useEffect(() => {
      d.id && u(pl(d.id));
    }, [u, d.id]),
      m.useEffect(() => {
        f &&
          d.id &&
          (s("title", f.title),
          s("description", f.description),
          s("price", f.price),
          s("discountPercentage", f.discountPercentage),
          s("stock", f.stock),
          s("brand", f.brand),
          s("category", f.category),
          s("thumbnail", f.thumbnail),
          s("image1", f == null ? void 0 : f.images[0]),
          s("image2", f == null ? void 0 : f.images[1]),
          s("image3", f == null ? void 0 : f.images[2]));
      }, [f, s, d.id]);
    const [p, g] = m.useState(!1),
      x = (w) => {
        const j = { ...f };
        (j.deleted = !0), u(Ru(j)), c("/admin");
      };
    return l.jsxs("form", {
      onSubmit: r((w) => {
        const j = { ...w };
        (j.images = [j.image1, j.image2, j.image3, j.thumbnail]),
          delete j.image1,
          delete j.image2,
          delete j.image3,
          (j.price = parseInt(j.price)),
          (j.discountPercentage = parseInt(j.discountPercentage)),
          (j.stock = parseInt(j.stock)),
          console.log(j),
          d.id ? u(Ru({ id: d.id, ...f, ...j })) : u(xm({ ...j, rating: 0 })),
          o();
      }),
      children: [
        l.jsx("div", {
          className: "space-y-12 p-10 bg-white",
          children: l.jsxs("div", {
            className: "border-b border-gray-900/10 pb-12",
            children: [
              l.jsx("h2", {
                className: `text-base/7 font-semibold ${
                  f != null && f.deleted ? "text-red-500" : "text-gray-900"
                }`,
                children:
                  d != null && d.id && !(f != null && f.deleted)
                    ? "Edit Product"
                    : f != null && f.deleted
                    ? "Product is Deleted"
                    : "Add New Product",
              }),
              l.jsxs("div", {
                className: "mt-10 grid grid-cols-1 gap-x-6 gap-y-8 ",
                children: [
                  l.jsxs("div", {
                    className: "sm:col-span-4  ",
                    children: [
                      l.jsx("label", {
                        htmlFor: "title",
                        className: "block text-sm/6 font-medium text-gray-900",
                        children: "Product Name",
                      }),
                      l.jsx("div", {
                        className: "mt-2",
                        children: l.jsx("input", {
                          id: "title",
                          ...n("title", { required: "Title is required" }),
                          type: "text",
                          placeholder: "Priyesh",
                          className:
                            "block w-full grow py-1.5 pl-1  text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6 rounded-md ",
                        }),
                      }),
                    ],
                  }),
                  l.jsxs("div", {
                    className: "sm:col-span-4  ",
                    children: [
                      l.jsx("label", {
                        htmlFor: "description",
                        className: "block text-sm/6 font-medium text-gray-900",
                        children: "Description",
                      }),
                      l.jsx("div", {
                        className: "mt-2",
                        children: l.jsx("textarea", {
                          id: "description",
                          ...n("description", {
                            required: "Description is required",
                          }),
                          rows: 3,
                          className:
                            "block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6",
                          defaultValue: "",
                        }),
                      }),
                      l.jsx("p", {
                        className: "mt-3 text-sm/6 text-gray-600",
                        children:
                          "Write a few sentences description of Products.",
                      }),
                    ],
                  }),
                  l.jsxs("div", {
                    className:
                      "flex flex-col sm:flex-row gap-6 w-full justify-between",
                    children: [
                      l.jsxs("div", {
                        className: "sm:col-span-3 w-full sm:w-1/3",
                        children: [
                          l.jsx("label", {
                            htmlFor: "price",
                            className:
                              "block text-sm font-medium text-gray-900",
                            children: "Price",
                          }),
                          l.jsx("div", {
                            className: "mt-2",
                            children: l.jsx("input", {
                              id: "price",
                              ...n("price", {
                                required: "Price is required",
                                min: 0,
                              }),
                              type: "number",
                              placeholder: "1000",
                              className:
                                "block w-full py-1.5 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm rounded-md",
                            }),
                          }),
                        ],
                      }),
                      l.jsxs("div", {
                        className: "sm:col-span-3 w-full sm:w-1/3",
                        children: [
                          l.jsx("label", {
                            htmlFor: "discountPercentage",
                            className:
                              "block text-sm font-medium text-gray-900",
                            children: "Discount Percentage",
                          }),
                          l.jsx("div", {
                            className: "mt-2",
                            children: l.jsx("input", {
                              id: "discountPercentage",
                              ...n("discountPercentage", {
                                required: "Discount Percentage is required",
                              }),
                              type: "text",
                              placeholder: "30",
                              className:
                                "block w-full py-1.5 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm rounded-md",
                            }),
                          }),
                        ],
                      }),
                      l.jsxs("div", {
                        className: "sm:col-span-3 w-full sm:w-1/3",
                        children: [
                          l.jsx("label", {
                            htmlFor: "stock",
                            className:
                              "block text-sm font-medium text-gray-900",
                            children: "Stock",
                          }),
                          l.jsx("div", {
                            className: "mt-2",
                            children: l.jsx("input", {
                              id: "stock",
                              ...n("stock", { required: "Stock is required" }),
                              type: "text",
                              placeholder: "4",
                              className:
                                "block w-full py-1.5 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm rounded-md",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  l.jsxs("div", {
                    className: "sm:col-span-4  ",
                    children: [
                      l.jsx("label", {
                        htmlFor: "brand",
                        className: "block text-sm/6 font-medium text-gray-900",
                        children: "Brand",
                      }),
                      l.jsx("div", {
                        className: "mt-2",
                        children: l.jsxs("select", {
                          id: "brand",
                          ...n("brand", { required: "Brand is required" }),
                          className:
                            "block w-full grow py-1.5 pl-1  text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6 rounded-md",
                          children: [
                            l.jsx("option", {
                              value: "",
                              defaultChecked: !0,
                              children: "Choose Brand",
                            }),
                            e.map((w, j) =>
                              l.jsx(
                                "option",
                                { value: w.value, children: w.label },
                                j
                              )
                            ),
                          ],
                        }),
                      }),
                    ],
                  }),
                  l.jsxs("div", {
                    className: "sm:col-span-4  ",
                    children: [
                      l.jsx("label", {
                        htmlFor: "category",
                        className: "block text-sm/6 font-medium text-gray-900",
                        children: "Category",
                      }),
                      l.jsx("div", {
                        className: "mt-2",
                        children: l.jsxs("select", {
                          id: "category",
                          ...n("category", {
                            required: "Category is required",
                          }),
                          className:
                            "block w-full grow py-1.5 pl-1  text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6 rounded-md",
                          children: [
                            l.jsx("option", {
                              value: "",
                              defaultChecked: !0,
                              children: "Choose Category",
                            }),
                            t.map((w, j) =>
                              l.jsx(
                                "option",
                                { value: w.value, children: w.label },
                                j
                              )
                            ),
                          ],
                        }),
                      }),
                    ],
                  }),
                  l.jsxs("div", {
                    className: "sm:col-span-4  ",
                    children: [
                      l.jsx("label", {
                        htmlFor: "thumbnail",
                        className: "block text-sm/6 font-medium text-gray-900",
                        children: "Thumbnail Url",
                      }),
                      l.jsx("div", {
                        className: "mt-2",
                        children: l.jsx("input", {
                          id: "thumbnail",
                          ...n("thumbnail", {
                            required: "Thumbnail is required",
                          }),
                          type: "text",
                          placeholder: "www.example.com",
                          className:
                            "block w-full grow py-1.5 pl-1  text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6 rounded-md ",
                        }),
                      }),
                    ],
                  }),
                  l.jsxs("div", {
                    className: "sm:col-span-4  ",
                    children: [
                      l.jsx("label", {
                        htmlFor: "image1",
                        className: "block text-sm/6 font-medium text-gray-900",
                        children: "Image1 Url",
                      }),
                      l.jsx("div", {
                        className: "mt-2",
                        children: l.jsx("input", {
                          id: "image1",
                          ...n("image1", { required: "Image1 is required" }),
                          type: "text",
                          placeholder: "www.example.com",
                          className:
                            "block w-full grow py-1.5 pl-1  text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6 rounded-md ",
                        }),
                      }),
                    ],
                  }),
                  l.jsxs("div", {
                    className: "sm:col-span-4  ",
                    children: [
                      l.jsx("label", {
                        htmlFor: "image2",
                        className: "block text-sm/6 font-medium text-gray-900",
                        children: "Image2 Url",
                      }),
                      l.jsx("div", {
                        className: "mt-2",
                        children: l.jsx("input", {
                          id: "image2",
                          ...n("image2"),
                          type: "text",
                          placeholder: "www.example.com",
                          className:
                            "block w-full grow py-1.5 pl-1  text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6 rounded-md ",
                        }),
                      }),
                    ],
                  }),
                  l.jsxs("div", {
                    className: "sm:col-span-4  ",
                    children: [
                      l.jsx("label", {
                        htmlFor: "image3",
                        className: "block text-sm/6 font-medium text-gray-900",
                        children: "Image3 Url",
                      }),
                      l.jsx("div", {
                        className: "mt-2",
                        children: l.jsx("input", {
                          id: "image3",
                          ...n("image3"),
                          type: "text",
                          placeholder: "www.example.com",
                          className:
                            "block w-full grow py-1.5 pl-1  text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6 rounded-md ",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
        l.jsxs("div", {
          className: "mt-6 flex items-center justify-end gap-x-6",
          children: [
            l.jsx("button", {
              type: "button",
              onClick: () => c("/admin"),
              className:
                "rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black-600",
              children: "Cancel",
            }),
            d.id &&
              !(f != null && f.deleted) &&
              l.jsx("button", {
                onClick: () => g(!0),
                className:
                  "rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600",
                children: "Delete",
              }),
            l.jsx("button", {
              type: "submit",
              className:
                "rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
              children: "Save",
            }),
          ],
        }),
        l.jsx(nb, {
          title: `Delete ${f == null ? void 0 : f.title}`,
          message: "Are you sure you want to delete this product  ?",
          dangerOption: "Delete",
          cancelOption: "Cancel",
          dangerAction: () => x(f == null ? void 0 : f.id),
          cancelAction: () => {
            g(!1);
          },
          showModal: p,
        }),
      ],
    });
  },
  my = () => l.jsx("div", { children: l.jsx(ei, { children: l.jsx(L$, {}) }) });
function O$() {
  const [e, t] = m.useState(1),
    n = It(),
    r = me(C4),
    i = me(_4),
    [s, o] = m.useState(-1),
    [a, u] = m.useState({});
  console.log(r, i, "admintOrders");
  const c = (w) => {
      o(w.id);
    },
    d = () => {
      console.log("handleShow");
    },
    f = (w, j) => {
      const y = { ...j, status: w.target.value };
      n(gm(y)), o(-1);
    },
    p = (w) => {
      t(w), n(_u({ sort: a, pagination: { _page: w, _limit: hn } }));
    },
    g = (w) => {
      const j = { _sort: w.sort, _order: w.order };
      console.log({ sort: j }), u(j);
    },
    x = (w) => {
      switch (w) {
        case "pending":
          return "bg-purple-200 text-purple-600";
        case "dispatched":
          return "bg-yellow-200 text-yellow-600";
        case "delivered":
          return "bg-green-200 text-green-600";
        case "cancelled":
          return "bg-red-200 text-red-600";
        default:
          return "bg-purple-200 text-purple-600";
      }
    };
  return (
    m.useEffect(() => {
      n(_u({ sort: a, pagination: { _page: e, _limit: hn } }));
    }, [n, e, a]),
    l.jsxs("div", {
      className: "overflow-x-auto",
      children: [
        l.jsx("div", {
          className:
            "bg-gray-100 flex items-center justify-center font-sans overflow-hidden",
          children: l.jsx("div", {
            className: "w-full",
            children: l.jsx("div", {
              className: "bg-white shadow-md rounded my-6",
              children: l.jsxs("table", {
                className: "min-w-max w-full table-auto",
                children: [
                  l.jsx("thead", {
                    children: l.jsxs("tr", {
                      className:
                        "bg-gray-200 text-gray-600 uppercase text-sm leading-normal",
                      children: [
                        l.jsxs("th", {
                          className: "py-3 px-6 text-left cursor-pointer",
                          onClick: (w) =>
                            g({
                              sort: "id",
                              order:
                                (a == null ? void 0 : a._order) === "asc"
                                  ? "desc"
                                  : "asc",
                            }),
                          children: [
                            "Order#",
                            " ",
                            a._sort === "id" &&
                              (a._order === "asc"
                                ? l.jsx(F0, { className: "w-4 h-4 inline" })
                                : l.jsx(R0, { className: "w-4 h-4 inline" })),
                          ],
                        }),
                        l.jsx("th", {
                          className: "py-3 px-6 text-left",
                          children: "Items",
                        }),
                        l.jsxs("th", {
                          className: "py-3 px-6 text-left cursor-pointer",
                          onClick: (w) =>
                            g({
                              sort: "totalAmount",
                              order:
                                (a == null ? void 0 : a._order) === "asc"
                                  ? "desc"
                                  : "asc",
                            }),
                          children: [
                            "Total Amount",
                            " ",
                            a._sort === "totalAmount" &&
                              (a._order === "asc"
                                ? l.jsx(F0, { className: "w-4 h-4 inline" })
                                : l.jsx(R0, { className: "w-4 h-4 inline" })),
                          ],
                        }),
                        l.jsx("th", {
                          className: "py-3 px-6 text-center",
                          children: "Shipping Address",
                        }),
                        l.jsx("th", {
                          className: "py-3 px-6 text-center",
                          children: "Status",
                        }),
                        l.jsx("th", {
                          className: "py-3 px-6 text-center",
                          children: "Actions",
                        }),
                      ],
                    }),
                  }),
                  l.jsx("tbody", {
                    className: "text-gray-600 text-sm font-light",
                    children: r.map((w, j) => {
                      var y, h, v, b, S, E;
                      return l.jsxs(
                        "tr",
                        {
                          className:
                            "border-b border-gray-200 hover:bg-gray-100",
                          children: [
                            l.jsx("td", {
                              className:
                                "py-3 px-6 text-left whitespace-nowrap",
                              children: l.jsxs("div", {
                                className: "flex items-center",
                                children: [
                                  l.jsx("div", { className: "mr-2" }),
                                  l.jsx("span", {
                                    className: "font-medium",
                                    children: w.id,
                                  }),
                                ],
                              }),
                            }),
                            l.jsx("td", {
                              className: "py-3 px-6 text-left",
                              children: w.products.map((N, k) =>
                                l.jsxs(
                                  "div",
                                  {
                                    className: "flex items-center",
                                    children: [
                                      l.jsx("div", {
                                        className: "mr-2",
                                        children: l.jsx("img", {
                                          className: "w-6 h-6 rounded-full",
                                          src: N.thumbnail,
                                        }),
                                      }),
                                      l.jsxs("span", {
                                        children: [
                                          N.title,
                                          " - #",
                                          N.quantity,
                                          " - $",
                                          fr(N),
                                        ],
                                      }),
                                    ],
                                  },
                                  k
                                )
                              ),
                            }),
                            l.jsx("td", {
                              className: "py-3 px-6 text-center",
                              children: l.jsxs("div", {
                                className: "flex items-center justify-center",
                                children: ["$", w.totalAmount],
                              }),
                            }),
                            l.jsx("td", {
                              className: "py-3 px-6 text-center",
                              children: l.jsxs("div", {
                                className: "",
                                children: [
                                  l.jsxs("div", {
                                    children: [
                                      l.jsx("strong", {
                                        children:
                                          (y = w.selectedAddress) == null
                                            ? void 0
                                            : y.name,
                                      }),
                                      ",",
                                    ],
                                  }),
                                  l.jsxs("div", {
                                    children: [
                                      (h = w.selectedAddress) == null
                                        ? void 0
                                        : h.street,
                                      ",",
                                    ],
                                  }),
                                  l.jsxs("div", {
                                    children: [
                                      (v = w.selectedAddress) == null
                                        ? void 0
                                        : v.city,
                                      ", ",
                                    ],
                                  }),
                                  l.jsxs("div", {
                                    children: [
                                      (b = w.selectedAddress) == null
                                        ? void 0
                                        : b.state,
                                      ", ",
                                    ],
                                  }),
                                  l.jsxs("div", {
                                    children: [
                                      (S = w.selectedAddress) == null
                                        ? void 0
                                        : S.pinCode,
                                      ", ",
                                    ],
                                  }),
                                  l.jsxs("div", {
                                    children: [
                                      (E = w.selectedAddress) == null
                                        ? void 0
                                        : E.phone,
                                      ", ",
                                    ],
                                  }),
                                ],
                              }),
                            }),
                            l.jsx("td", {
                              className: "py-3 px-6 text-center",
                              children:
                                w.id === s
                                  ? l.jsxs("select", {
                                      onChange: (N) => f(N, w),
                                      children: [
                                        l.jsx("option", {
                                          value: "pending",
                                          children: "Pending",
                                        }),
                                        l.jsx("option", {
                                          value: "dispatched",
                                          children: "Dispatched",
                                        }),
                                        l.jsx("option", {
                                          value: "delivered",
                                          children: "Delivered",
                                        }),
                                        l.jsx("option", {
                                          value: "cancelled",
                                          children: "Cancelled",
                                        }),
                                      ],
                                    })
                                  : l.jsx("span", {
                                      className: `${x(
                                        w.status
                                      )} py-1 px-3 rounded-full text-xs`,
                                      children: w.status,
                                    }),
                            }),
                            l.jsx("td", {
                              className: "py-3 px-6 text-center",
                              children: l.jsxs("div", {
                                className: "flex item-center justify-center",
                                children: [
                                  l.jsx("div", {
                                    className:
                                      "w-6 mr-4 transform hover:text-purple-500 hover:scale-120",
                                    children: l.jsx(JP, {
                                      className: "w-8 h-8",
                                      onClick: (N) => d(),
                                    }),
                                  }),
                                  l.jsx("div", {
                                    className:
                                      "w-6 mr-2 transform hover:text-purple-500 hover:scale-120",
                                    children: l.jsx(tT, {
                                      className: "w-8 h-8",
                                      onClick: (N) => c(w),
                                    }),
                                  }),
                                ],
                              }),
                            }),
                          ],
                        },
                        j
                      );
                    }),
                  }),
                ],
              }),
            }),
          }),
        }),
        l.jsx(jb, { page: e, setPage: t, handlePage: p, totalItems: i }),
      ],
    })
  );
}
function D$() {
  return l.jsx("div", { children: l.jsx(ei, { children: l.jsx(O$, {}) }) });
}
const A$ = W2([
  { path: "/", element: l.jsx(sa, { children: l.jsx(o$, {}) }) },
  { path: "/admin", element: l.jsx(ho, { children: l.jsx(T$, {}) }) },
  { path: "/login", element: l.jsx(a$, {}) },
  { path: "/signup", element: l.jsx(m$, {}) },
  { path: "/cart", element: l.jsx(sa, { children: l.jsx(e4, {}) }) },
  { path: "/checkout", element: l.jsx(sa, { children: l.jsx(L4, {}) }) },
  {
    path: "/product-detail/:id",
    element: l.jsx(sa, { children: l.jsx(d$, {}) }),
  },
  {
    path: "/admin/product-detail/:id",
    element: l.jsx(ho, { children: l.jsx(F$, {}) }),
  },
  {
    path: "/admin/product-form",
    element: l.jsx(ho, { children: l.jsx(my, {}) }),
  },
  { path: "/admin/orders", element: l.jsx(ho, { children: l.jsx(D$, {}) }) },
  {
    path: "/admin/product-form/edit/:id",
    element: l.jsx(ho, { children: l.jsx(my, {}) }),
  },
  { path: "/orders", element: l.jsx(y$, {}) },
  { path: "/profile", element: l.jsx(x$, {}) },
  { path: "/order-success/:id", element: l.jsx(h$, {}) },
  { path: "/logout", element: l.jsx(w$, {}) },
  { path: "/forgotPassword", element: l.jsx(j$, {}) },
  { path: "*", element: l.jsx(p$, {}) },
]);
function I$() {
  const e = It(),
    t = me(Jr),
    n = me(ck);
  return (
    m.useEffect(() => {
      e(Sa());
    }, [e]),
    m.useEffect(() => {
      t && (e(ka()), e(vm()));
    }, [e, t]),
    l.jsx("div", {
      className: "App",
      children:
        n &&
        l.jsxs(l.Fragment, {
          children: [l.jsx(eN, { router: A$ }), l.jsx(BT, {})],
        }),
    })
  );
}
const M$ = RN({
  reducer: { product: J4, auth: dk, cart: qT, order: P4, user: F4 },
});
_x(document.getElementById("root")).render(
  l.jsx(m.StrictMode, {
    children: l.jsx(SS, { store: M$, children: l.jsx(I$, {}) }),
  })
);
