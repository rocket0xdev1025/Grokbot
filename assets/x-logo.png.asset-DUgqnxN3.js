import {
  f as e,
  m as t,
  n,
  o as r,
  p as i,
  r as a,
  t as o,
} from "./index-C45LxvcJ.js";
var s = t(i()),
  c = (...e) =>
    e
      .filter((e, t, n) => !!e && e.trim() !== `` && n.indexOf(e) === t)
      .join(` `)
      .trim(),
  l = (e) => e.replace(/([a-z0-9])([A-Z])/g, `$1-$2`).toLowerCase(),
  u = (e) =>
    e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, n) =>
      n ? n.toUpperCase() : t.toLowerCase()
    ),
  d = (e) => {
    let t = u(e);
    return t.charAt(0).toUpperCase() + t.slice(1);
  },
  f = {
    xmlns: `http://www.w3.org/2000/svg`,
    width: 24,
    height: 24,
    viewBox: `0 0 24 24`,
    fill: `none`,
    stroke: `currentColor`,
    strokeWidth: 2,
    strokeLinecap: `round`,
    strokeLinejoin: `round`,
  },
  p = (e) => {
    for (let t in e)
      if (t.startsWith(`aria-`) || t === `role` || t === `title`) return !0;
    return !1;
  },
  m = (0, s.forwardRef)(
    (
      {
        color: e = `currentColor`,
        size: t = 24,
        strokeWidth: n = 2,
        absoluteStrokeWidth: r,
        className: i = ``,
        children: a,
        iconNode: o,
        ...l
      },
      u
    ) =>
      (0, s.createElement)(
        `svg`,
        {
          ref: u,
          ...f,
          width: t,
          height: t,
          stroke: e,
          strokeWidth: r ? (Number(n) * 24) / Number(t) : n,
          className: c(`lucide`, i),
          ...(!a && !p(l) && { "aria-hidden": `true` }),
          ...l,
        },
        [
          ...o.map(([e, t]) => (0, s.createElement)(e, t)),
          ...(Array.isArray(a) ? a : [a]),
        ]
      )
  ),
  h = (e, t) => {
    let n = (0, s.forwardRef)(({ className: n, ...r }, i) =>
      (0, s.createElement)(m, {
        ref: i,
        iconNode: t,
        className: c(`lucide-${l(d(e))}`, `lucide-${e}`, n),
        ...r,
      })
    );
    return (n.displayName = d(e)), n;
  },
  g = h(`check`, [[`path`, { d: `M20 6 9 17l-5-5`, key: `1gmf2c` }]]),
  _ = h(`graduation-cap`, [
    [
      `path`,
      {
        d: `M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z`,
        key: `j76jl0`,
      },
    ],
    [`path`, { d: `M22 10v6`, key: `1lu8f3` }],
    [`path`, { d: `M6 12.5V16a6 3 0 0 0 12 0v-3.5`, key: `1r8lef` }],
  ]),
  ee = h(`heart`, [
    [
      `path`,
      {
        d: `M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5`,
        key: `mvr1a0`,
      },
    ],
  ]),
  te = h(`sparkles`, [
    [
      `path`,
      {
        d: `M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z`,
        key: `1s2grr`,
      },
    ],
    [`path`, { d: `M20 2v4`, key: `1rf3ol` }],
    [`path`, { d: `M22 4h-4`, key: `gwowj6` }],
    [`circle`, { cx: `4`, cy: `20`, r: `2`, key: `6kqj1y` }],
  ]),
  v = h(`x`, [
    [`path`, { d: `M18 6 6 18`, key: `1bl5f8` }],
    [`path`, { d: `m6 6 12 12`, key: `d8bk6v` }],
  ]),
  ne = Object.defineProperty,
  y = (e, t) => ne(e, `name`, { value: t, configurable: !0 });
function b(e, t) {
  if (typeof e == `function`) return e(t);
  e != null && (e.current = t);
}
y(b, `setRef`);
function x(...e) {
  return (t) => {
    let n = !1,
      r = e.map((e) => {
        let r = b(e, t);
        return !n && typeof r == `function` && (n = !0), r;
      });
    if (n)
      return () => {
        for (let t = 0; t < r.length; t++) {
          let n = r[t];
          typeof n == `function` ? n() : b(e[t], null);
        }
      };
  };
}
y(x, `composeRefs`);
function S(...e) {
  return s.useCallback(x(...e), e);
}
y(S, `useComposedRefs`);
var re = Object.defineProperty,
  C = (e, t) => re(e, `name`, { value: t, configurable: !0 });
function w(e) {
  let t = s.forwardRef((t, n) => {
    let { children: r, ...i } = t,
      a = null,
      o = !1,
      c = [];
    ce(r) && typeof k == `function` && (r = k(r._payload)),
      s.Children.forEach(r, (e) => {
        if (se(e)) {
          o = !0;
          let t = e,
            n = `child` in t.props ? t.props.child : t.props.children;
          ce(n) && typeof k == `function` && (n = k(n._payload)),
            (a = E(t, n)),
            c.push(a?.props?.children);
        } else c.push(e);
      }),
      a
        ? (a = s.cloneElement(a, void 0, c))
        : !o && s.Children.count(r) === 1 && s.isValidElement(r) && (a = r);
    let l = a ? oe(a) : void 0,
      u = S(n, l);
    if (!a) {
      if (r || r === 0) throw Error(o ? de(e) : ue(e));
      return r;
    }
    let d = D(i, a.props ?? {});
    return a.type !== s.Fragment && (d.ref = n ? u : l), s.cloneElement(a, d);
  });
  return (t.displayName = `${e}.Slot`), t;
}
C(w, `createSlot`);
var ie = w(`Slot`),
  ae = Symbol.for(`radix.slottable`);
function T(e) {
  let t = C(
    (e) => (`child` in e ? e.children(e.child) : e.children),
    `Slottable`
  );
  return (t.displayName = `${e}.Slottable`), (t.__radixId = ae), t;
}
C(T, `createSlottable`);
var E = C((e, t) => {
  if (`child` in e.props) {
    let t = e.props.child;
    return s.isValidElement(t)
      ? s.cloneElement(t, void 0, e.props.children(t.props.children))
      : null;
  }
  return s.isValidElement(t) ? t : null;
}, `getSlottableElementFromSlottable`);
function D(e, t) {
  let n = { ...t };
  for (let r in t) {
    let i = e[r],
      a = t[r];
    /^on[A-Z]/.test(r)
      ? i && a
        ? (n[r] = (...e) => {
            let t = a(...e);
            return i(...e), t;
          })
        : i && (n[r] = i)
      : r === `style`
      ? (n[r] = { ...i, ...a })
      : r === `className` && (n[r] = [i, a].filter(Boolean).join(` `));
  }
  return { ...e, ...n };
}
C(D, `mergeProps`);
function oe(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, `ref`)?.get,
    n = t && `isReactWarning` in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t = Object.getOwnPropertyDescriptor(e, `ref`)?.get),
      (n = t && `isReactWarning` in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
C(oe, `getElementRef`);
function se(e) {
  return (
    s.isValidElement(e) &&
    typeof e.type == `function` &&
    `__radixId` in e.type &&
    e.type.__radixId === ae
  );
}
C(se, `isSlottable`);
var O = Symbol.for(`react.lazy`);
function ce(e) {
  return (
    typeof e == `object` &&
    !!e &&
    `$$typeof` in e &&
    e.$$typeof === O &&
    `_payload` in e &&
    le(e._payload)
  );
}
C(ce, `isLazyComponent`);
function le(e) {
  return typeof e == `object` && !!e && `then` in e;
}
C(le, `isPromiseLike`);
var ue = C(
    (e) =>
      `${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`,
    `createSlotError`
  ),
  de = C(
    (e) =>
      `${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`,
    `createSlottableError`
  ),
  k = s.use;
function A(e) {
  var t,
    n,
    r = ``;
  if (typeof e == `string` || typeof e == `number`) r += e;
  else if (typeof e == `object`)
    if (Array.isArray(e)) {
      var i = e.length;
      for (t = 0; t < i; t++)
        e[t] && (n = A(e[t])) && (r && (r += ` `), (r += n));
    } else for (n in e) e[n] && (r && (r += ` `), (r += n));
  return r;
}
function fe() {
  for (var e, t, n = 0, r = ``, i = arguments.length; n < i; n++)
    (e = arguments[n]) && (t = A(e)) && (r && (r += ` `), (r += t));
  return r;
}
var pe = (e) => (typeof e == `boolean` ? `${e}` : e === 0 ? `0` : e),
  j = fe,
  me = (e, t) => (n) => {
    if (t?.variants == null) return j(e, n?.class, n?.className);
    let { variants: r, defaultVariants: i } = t,
      a = Object.keys(r).map((e) => {
        let t = n?.[e],
          a = i?.[e];
        if (t === null) return null;
        let o = pe(t) || pe(a);
        return r[e][o];
      }),
      o =
        n &&
        Object.entries(n).reduce((e, t) => {
          let [n, r] = t;
          return r === void 0 || (e[n] = r), e;
        }, {});
    return j(
      e,
      a,
      t?.compoundVariants?.reduce((e, t) => {
        let { class: n, className: r, ...a } = t;
        return Object.entries(a).every((e) => {
          let [t, n] = e;
          return Array.isArray(n)
            ? n.includes({ ...i, ...o }[t])
            : { ...i, ...o }[t] === n;
        })
          ? [...e, n, r]
          : e;
      }, []),
      n?.class,
      n?.className
    );
  },
  he = (e, t) => {
    let n = Array(e.length + t.length);
    for (let t = 0; t < e.length; t++) n[t] = e[t];
    for (let r = 0; r < t.length; r++) n[e.length + r] = t[r];
    return n;
  },
  ge = (e, t) => ({ classGroupId: e, validator: t }),
  _e = (e = new Map(), t = null, n) => ({
    nextPart: e,
    validators: t,
    classGroupId: n,
  }),
  M = `-`,
  ve = [],
  ye = `arbitrary..`,
  be = (e) => {
    let t = Ce(e),
      { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
    return {
      getClassGroupId: (e) => {
        if (e.startsWith(`[`) && e.endsWith(`]`)) return Se(e);
        let n = e.split(M);
        return xe(n, +(n[0] === `` && n.length > 1), t);
      },
      getConflictingClassGroupIds: (e, t) => {
        if (t) {
          let t = r[e],
            i = n[e];
          return t ? (i ? he(i, t) : t) : i || ve;
        }
        return n[e] || ve;
      },
    };
  },
  xe = (e, t, n) => {
    if (e.length - t === 0) return n.classGroupId;
    let r = e[t],
      i = n.nextPart.get(r);
    if (i) {
      let n = xe(e, t + 1, i);
      if (n) return n;
    }
    let a = n.validators;
    if (a === null) return;
    let o = t === 0 ? e.join(M) : e.slice(t).join(M),
      s = a.length;
    for (let e = 0; e < s; e++) {
      let t = a[e];
      if (t.validator(o)) return t.classGroupId;
    }
  },
  Se = (e) =>
    e.slice(1, -1).indexOf(`:`) === -1
      ? void 0
      : (() => {
          let t = e.slice(1, -1),
            n = t.indexOf(`:`),
            r = t.slice(0, n);
          return r ? ye + r : void 0;
        })(),
  Ce = (e) => {
    let { theme: t, classGroups: n } = e;
    return we(n, t);
  },
  we = (e, t) => {
    let n = _e();
    for (let r in e) {
      let i = e[r];
      Te(i, n, r, t);
    }
    return n;
  },
  Te = (e, t, n, r) => {
    let i = e.length;
    for (let a = 0; a < i; a++) {
      let i = e[a];
      Ee(i, t, n, r);
    }
  },
  Ee = (e, t, n, r) => {
    if (typeof e == `string`) {
      De(e, t, n);
      return;
    }
    if (typeof e == `function`) {
      Oe(e, t, n, r);
      return;
    }
    ke(e, t, n, r);
  },
  De = (e, t, n) => {
    let r = e === `` ? t : Ae(t, e);
    r.classGroupId = n;
  },
  Oe = (e, t, n, r) => {
    if (je(e)) {
      Te(e(r), t, n, r);
      return;
    }
    t.validators === null && (t.validators = []), t.validators.push(ge(n, e));
  },
  ke = (e, t, n, r) => {
    let i = Object.entries(e),
      a = i.length;
    for (let e = 0; e < a; e++) {
      let [a, o] = i[e];
      Te(o, Ae(t, a), n, r);
    }
  },
  Ae = (e, t) => {
    let n = e,
      r = t.split(M),
      i = r.length;
    for (let e = 0; e < i; e++) {
      let t = r[e],
        i = n.nextPart.get(t);
      i || ((i = _e()), n.nextPart.set(t, i)), (n = i);
    }
    return n;
  },
  je = (e) => `isThemeGetter` in e && e.isThemeGetter === !0,
  Me = (e) => {
    if (e < 1) return { get: () => void 0, set: () => {} };
    let t = 0,
      n = Object.create(null),
      r = Object.create(null),
      i = (i, a) => {
        (n[i] = a), t++, t > e && ((t = 0), (r = n), (n = Object.create(null)));
      };
    return {
      get(e) {
        let t = n[e];
        if (t !== void 0) return t;
        if ((t = r[e]) !== void 0) return i(e, t), t;
      },
      set(e, t) {
        e in n ? (n[e] = t) : i(e, t);
      },
    };
  },
  Ne = `!`,
  Pe = `:`,
  Fe = [],
  Ie = (e, t, n, r, i) => ({
    modifiers: e,
    hasImportantModifier: t,
    baseClassName: n,
    maybePostfixModifierPosition: r,
    isExternal: i,
  }),
  Le = (e) => {
    let { prefix: t, experimentalParseClassName: n } = e,
      r = (e) => {
        let t = [],
          n = 0,
          r = 0,
          i = 0,
          a,
          o = e.length;
        for (let s = 0; s < o; s++) {
          let o = e[s];
          if (n === 0 && r === 0) {
            if (o === Pe) {
              t.push(e.slice(i, s)), (i = s + 1);
              continue;
            }
            if (o === `/`) {
              a = s;
              continue;
            }
          }
          o === `[`
            ? n++
            : o === `]`
            ? n--
            : o === `(`
            ? r++
            : o === `)` && r--;
        }
        let s = t.length === 0 ? e : e.slice(i),
          c = s,
          l = !1;
        s.endsWith(Ne)
          ? ((c = s.slice(0, -1)), (l = !0))
          : s.startsWith(Ne) && ((c = s.slice(1)), (l = !0));
        let u = a && a > i ? a - i : void 0;
        return Ie(t, l, c, u);
      };
    if (t) {
      let e = t + Pe,
        n = r;
      r = (t) =>
        t.startsWith(e) ? n(t.slice(e.length)) : Ie(Fe, !1, t, void 0, !0);
    }
    if (n) {
      let e = r;
      r = (t) => n({ className: t, parseClassName: e });
    }
    return r;
  },
  Re = (e) => {
    let t = new Map();
    return (
      e.orderSensitiveModifiers.forEach((e, n) => {
        t.set(e, 1e6 + n);
      }),
      (e) => {
        let n = [],
          r = [];
        for (let i = 0; i < e.length; i++) {
          let a = e[i],
            o = a[0] === `[`,
            s = t.has(a);
          o || s
            ? (r.length > 0 && (r.sort(), n.push(...r), (r = [])), n.push(a))
            : r.push(a);
        }
        return r.length > 0 && (r.sort(), n.push(...r)), n;
      }
    );
  },
  ze = (e) => ({
    cache: Me(e.cacheSize),
    parseClassName: Le(e),
    sortModifiers: Re(e),
    postfixLookupClassGroupIds: Be(e),
    ...be(e),
  }),
  Be = (e) => {
    let t = Object.create(null),
      n = e.postfixLookupClassGroups;
    if (n) for (let e = 0; e < n.length; e++) t[n[e]] = !0;
    return t;
  },
  Ve = /\s+/,
  He = (e, t) => {
    let {
        parseClassName: n,
        getClassGroupId: r,
        getConflictingClassGroupIds: i,
        sortModifiers: a,
        postfixLookupClassGroupIds: o,
      } = t,
      s = [],
      c = e.trim().split(Ve),
      l = ``;
    for (let e = c.length - 1; e >= 0; --e) {
      let t = c[e],
        {
          isExternal: u,
          modifiers: d,
          hasImportantModifier: f,
          baseClassName: p,
          maybePostfixModifierPosition: m,
        } = n(t);
      if (u) {
        l = t + (l.length > 0 ? ` ` + l : l);
        continue;
      }
      let h = !!m,
        g;
      if (h) {
        g = r(p.substring(0, m));
        let e = g && o[g] ? r(p) : void 0;
        e && e !== g && ((g = e), (h = !1));
      } else g = r(p);
      if (!g) {
        if (!h) {
          l = t + (l.length > 0 ? ` ` + l : l);
          continue;
        }
        if (((g = r(p)), !g)) {
          l = t + (l.length > 0 ? ` ` + l : l);
          continue;
        }
        h = !1;
      }
      let _ = d.length === 0 ? `` : d.length === 1 ? d[0] : a(d).join(`:`),
        ee = f ? _ + Ne : _,
        te = ee + g;
      if (s.indexOf(te) > -1) continue;
      s.push(te);
      let v = i(g, h);
      for (let e = 0; e < v.length; ++e) {
        let t = v[e];
        s.push(ee + t);
      }
      l = t + (l.length > 0 ? ` ` + l : l);
    }
    return l;
  },
  Ue = (...e) => {
    let t = 0,
      n,
      r,
      i = ``;
    for (; t < e.length; )
      (n = e[t++]) && (r = We(n)) && (i && (i += ` `), (i += r));
    return i;
  },
  We = (e) => {
    if (typeof e == `string`) return e;
    let t,
      n = ``;
    for (let r = 0; r < e.length; r++)
      e[r] && (t = We(e[r])) && (n && (n += ` `), (n += t));
    return n;
  },
  Ge = (e, ...t) => {
    let n,
      r,
      i,
      a,
      o = (o) => (
        (n = ze(t.reduce((e, t) => t(e), e()))),
        (r = n.cache.get),
        (i = n.cache.set),
        (a = s),
        s(o)
      ),
      s = (e) => {
        let t = r(e);
        if (t) return t;
        let a = He(e, n);
        return i(e, a), a;
      };
    return (a = o), (...e) => a(Ue(...e));
  },
  Ke = [],
  N = (e) => {
    let t = (t) => t[e] || Ke;
    return (t.isThemeGetter = !0), t;
  },
  qe = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
  Je = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
  Ye = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,
  Xe = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  Ze =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  Qe = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
  $e = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  et =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  P = (e) => Ye.test(e),
  F = (e) => !!e && !Number.isNaN(Number(e)),
  I = (e) => !!e && Number.isInteger(Number(e)),
  tt = (e) => e.endsWith(`%`) && F(e.slice(0, -1)),
  L = (e) => Xe.test(e),
  nt = () => !0,
  rt = (e) => Ze.test(e) && !Qe.test(e),
  it = () => !1,
  at = (e) => $e.test(e),
  ot = (e) => et.test(e),
  st = (e) => !R(e) && !B(e),
  ct = (e) =>
    e.startsWith(`@container`) &&
    ((e[10] === `/` && e[11] !== void 0) ||
      (e[11] === `s` && e[16] !== void 0 && e.startsWith(`-size/`, 10)) ||
      (e[11] === `n` && e[18] !== void 0 && e.startsWith(`-normal/`, 10))),
  lt = (e) => V(e, Tt, it),
  R = (e) => qe.test(e),
  z = (e) => V(e, Et, rt),
  ut = (e) => V(e, Dt, F),
  dt = (e) => V(e, kt, nt),
  ft = (e) => V(e, Ot, it),
  pt = (e) => V(e, Ct, it),
  mt = (e) => V(e, wt, ot),
  ht = (e) => V(e, At, at),
  B = (e) => Je.test(e),
  gt = (e) => H(e, Et),
  _t = (e) => H(e, Ot),
  vt = (e) => H(e, Ct),
  yt = (e) => H(e, Tt),
  bt = (e) => H(e, wt),
  xt = (e) => H(e, At, !0),
  St = (e) => H(e, kt, !0),
  V = (e, t, n) => {
    let r = qe.exec(e);
    return r ? (r[1] ? t(r[1]) : n(r[2])) : !1;
  },
  H = (e, t, n = !1) => {
    let r = Je.exec(e);
    return r ? (r[1] ? t(r[1]) : n) : !1;
  },
  Ct = (e) => e === `position` || e === `percentage`,
  wt = (e) => e === `image` || e === `url`,
  Tt = (e) => e === `length` || e === `size` || e === `bg-size`,
  Et = (e) => e === `length`,
  Dt = (e) => e === `number`,
  Ot = (e) => e === `family-name`,
  kt = (e) => e === `number` || e === `weight`,
  At = (e) => e === `shadow`,
  jt = Ge(() => {
    let e = N(`color`),
      t = N(`font`),
      n = N(`text`),
      r = N(`font-weight`),
      i = N(`tracking`),
      a = N(`leading`),
      o = N(`breakpoint`),
      s = N(`container`),
      c = N(`spacing`),
      l = N(`radius`),
      u = N(`shadow`),
      d = N(`inset-shadow`),
      f = N(`text-shadow`),
      p = N(`drop-shadow`),
      m = N(`blur`),
      h = N(`perspective`),
      g = N(`aspect`),
      _ = N(`ease`),
      ee = N(`animate`),
      te = () => [
        `auto`,
        `avoid`,
        `all`,
        `avoid-page`,
        `page`,
        `left`,
        `right`,
        `column`,
      ],
      v = () => [
        `center`,
        `top`,
        `bottom`,
        `left`,
        `right`,
        `top-left`,
        `left-top`,
        `top-right`,
        `right-top`,
        `bottom-right`,
        `right-bottom`,
        `bottom-left`,
        `left-bottom`,
      ],
      ne = () => [...v(), B, R],
      y = () => [`auto`, `hidden`, `clip`, `visible`, `scroll`],
      b = () => [`auto`, `contain`, `none`],
      x = () => [B, R, c],
      S = () => [P, `full`, `auto`, ...x()],
      re = () => [I, `none`, `subgrid`, B, R],
      C = () => [`auto`, { span: [`full`, I, B, R] }, I, B, R],
      w = () => [I, `auto`, B, R],
      ie = () => [`auto`, `min`, `max`, `fr`, B, R],
      ae = () => [
        `start`,
        `end`,
        `center`,
        `between`,
        `around`,
        `evenly`,
        `stretch`,
        `baseline`,
        `center-safe`,
        `end-safe`,
      ],
      T = () => [
        `start`,
        `end`,
        `center`,
        `stretch`,
        `center-safe`,
        `end-safe`,
      ],
      E = () => [`auto`, ...x()],
      D = () => [
        P,
        `auto`,
        `full`,
        `dvw`,
        `dvh`,
        `lvw`,
        `lvh`,
        `svw`,
        `svh`,
        `min`,
        `max`,
        `fit`,
        ...x(),
      ],
      oe = () => [
        P,
        `screen`,
        `full`,
        `dvw`,
        `lvw`,
        `svw`,
        `min`,
        `max`,
        `fit`,
        ...x(),
      ],
      se = () => [
        P,
        `screen`,
        `full`,
        `lh`,
        `dvh`,
        `lvh`,
        `svh`,
        `min`,
        `max`,
        `fit`,
        ...x(),
      ],
      O = () => [e, B, R],
      ce = () => [...v(), vt, pt, { position: [B, R] }],
      le = () => [`no-repeat`, { repeat: [``, `x`, `y`, `space`, `round`] }],
      ue = () => [`auto`, `cover`, `contain`, yt, lt, { size: [B, R] }],
      de = () => [tt, gt, z],
      k = () => [``, `none`, `full`, l, B, R],
      A = () => [``, F, gt, z],
      fe = () => [`solid`, `dashed`, `dotted`, `double`],
      pe = () => [
        `normal`,
        `multiply`,
        `screen`,
        `overlay`,
        `darken`,
        `lighten`,
        `color-dodge`,
        `color-burn`,
        `hard-light`,
        `soft-light`,
        `difference`,
        `exclusion`,
        `hue`,
        `saturation`,
        `color`,
        `luminosity`,
      ],
      j = () => [F, tt, vt, pt],
      me = () => [``, `none`, m, B, R],
      he = () => [`none`, F, B, R],
      ge = () => [`none`, F, B, R],
      _e = () => [F, B, R],
      M = () => [P, `full`, ...x()];
    return {
      cacheSize: 500,
      theme: {
        animate: [`spin`, `ping`, `pulse`, `bounce`],
        aspect: [`video`],
        blur: [L],
        breakpoint: [L],
        color: [nt],
        container: [L],
        "drop-shadow": [L],
        ease: [`in`, `out`, `in-out`],
        font: [st],
        "font-weight": [
          `thin`,
          `extralight`,
          `light`,
          `normal`,
          `medium`,
          `semibold`,
          `bold`,
          `extrabold`,
          `black`,
        ],
        "inset-shadow": [L],
        leading: [`none`, `tight`, `snug`, `normal`, `relaxed`, `loose`],
        perspective: [
          `dramatic`,
          `near`,
          `normal`,
          `midrange`,
          `distant`,
          `none`,
        ],
        radius: [L],
        shadow: [L],
        spacing: [`px`, F],
        text: [L],
        "text-shadow": [L],
        tracking: [`tighter`, `tight`, `normal`, `wide`, `wider`, `widest`],
      },
      classGroups: {
        aspect: [{ aspect: [`auto`, `square`, P, R, B, g] }],
        container: [`container`],
        "container-type": [{ "@container": [``, `normal`, `size`, B, R] }],
        "container-named": [ct],
        columns: [{ columns: [F, R, B, s] }],
        "break-after": [{ "break-after": te() }],
        "break-before": [{ "break-before": te() }],
        "break-inside": [
          { "break-inside": [`auto`, `avoid`, `avoid-page`, `avoid-column`] },
        ],
        "box-decoration": [{ "box-decoration": [`slice`, `clone`] }],
        box: [{ box: [`border`, `content`] }],
        display: [
          `block`,
          `inline-block`,
          `inline`,
          `flex`,
          `inline-flex`,
          `table`,
          `inline-table`,
          `table-caption`,
          `table-cell`,
          `table-column`,
          `table-column-group`,
          `table-footer-group`,
          `table-header-group`,
          `table-row-group`,
          `table-row`,
          `flow-root`,
          `grid`,
          `inline-grid`,
          `contents`,
          `list-item`,
          `hidden`,
        ],
        sr: [`sr-only`, `not-sr-only`],
        float: [{ float: [`right`, `left`, `none`, `start`, `end`] }],
        clear: [{ clear: [`left`, `right`, `both`, `none`, `start`, `end`] }],
        isolation: [`isolate`, `isolation-auto`],
        "object-fit": [
          { object: [`contain`, `cover`, `fill`, `none`, `scale-down`] },
        ],
        "object-position": [{ object: ne() }],
        overflow: [{ overflow: y() }],
        "overflow-x": [{ "overflow-x": y() }],
        "overflow-y": [{ "overflow-y": y() }],
        overscroll: [{ overscroll: b() }],
        "overscroll-x": [{ "overscroll-x": b() }],
        "overscroll-y": [{ "overscroll-y": b() }],
        position: [`static`, `fixed`, `absolute`, `relative`, `sticky`],
        inset: [{ inset: S() }],
        "inset-x": [{ "inset-x": S() }],
        "inset-y": [{ "inset-y": S() }],
        start: [{ "inset-s": S(), start: S() }],
        end: [{ "inset-e": S(), end: S() }],
        "inset-bs": [{ "inset-bs": S() }],
        "inset-be": [{ "inset-be": S() }],
        top: [{ top: S() }],
        right: [{ right: S() }],
        bottom: [{ bottom: S() }],
        left: [{ left: S() }],
        visibility: [`visible`, `invisible`, `collapse`],
        z: [{ z: [I, `auto`, B, R] }],
        basis: [{ basis: [P, `full`, `auto`, s, ...x()] }],
        "flex-direction": [
          { flex: [`row`, `row-reverse`, `col`, `col-reverse`] },
        ],
        "flex-wrap": [{ flex: [`nowrap`, `wrap`, `wrap-reverse`] }],
        flex: [{ flex: [F, P, `auto`, `initial`, `none`, R] }],
        grow: [{ grow: [``, F, B, R] }],
        shrink: [{ shrink: [``, F, B, R] }],
        order: [{ order: [I, `first`, `last`, `none`, B, R] }],
        "grid-cols": [{ "grid-cols": re() }],
        "col-start-end": [{ col: C() }],
        "col-start": [{ "col-start": w() }],
        "col-end": [{ "col-end": w() }],
        "grid-rows": [{ "grid-rows": re() }],
        "row-start-end": [{ row: C() }],
        "row-start": [{ "row-start": w() }],
        "row-end": [{ "row-end": w() }],
        "grid-flow": [
          { "grid-flow": [`row`, `col`, `dense`, `row-dense`, `col-dense`] },
        ],
        "auto-cols": [{ "auto-cols": ie() }],
        "auto-rows": [{ "auto-rows": ie() }],
        gap: [{ gap: x() }],
        "gap-x": [{ "gap-x": x() }],
        "gap-y": [{ "gap-y": x() }],
        "justify-content": [{ justify: [...ae(), `normal`] }],
        "justify-items": [{ "justify-items": [...T(), `normal`] }],
        "justify-self": [{ "justify-self": [`auto`, ...T()] }],
        "align-content": [{ content: [`normal`, ...ae()] }],
        "align-items": [{ items: [...T(), { baseline: [``, `last`] }] }],
        "align-self": [{ self: [`auto`, ...T(), { baseline: [``, `last`] }] }],
        "place-content": [{ "place-content": ae() }],
        "place-items": [{ "place-items": [...T(), `baseline`] }],
        "place-self": [{ "place-self": [`auto`, ...T()] }],
        p: [{ p: x() }],
        px: [{ px: x() }],
        py: [{ py: x() }],
        ps: [{ ps: x() }],
        pe: [{ pe: x() }],
        pbs: [{ pbs: x() }],
        pbe: [{ pbe: x() }],
        pt: [{ pt: x() }],
        pr: [{ pr: x() }],
        pb: [{ pb: x() }],
        pl: [{ pl: x() }],
        m: [{ m: E() }],
        mx: [{ mx: E() }],
        my: [{ my: E() }],
        ms: [{ ms: E() }],
        me: [{ me: E() }],
        mbs: [{ mbs: E() }],
        mbe: [{ mbe: E() }],
        mt: [{ mt: E() }],
        mr: [{ mr: E() }],
        mb: [{ mb: E() }],
        ml: [{ ml: E() }],
        "space-x": [{ "space-x": x() }],
        "space-x-reverse": [`space-x-reverse`],
        "space-y": [{ "space-y": x() }],
        "space-y-reverse": [`space-y-reverse`],
        size: [{ size: D() }],
        "inline-size": [{ inline: [`auto`, ...oe()] }],
        "min-inline-size": [{ "min-inline": [`auto`, ...oe()] }],
        "max-inline-size": [{ "max-inline": [`none`, ...oe()] }],
        "block-size": [{ block: [`auto`, ...se()] }],
        "min-block-size": [{ "min-block": [`auto`, ...se()] }],
        "max-block-size": [{ "max-block": [`none`, ...se()] }],
        w: [{ w: [s, `screen`, ...D()] }],
        "min-w": [{ "min-w": [s, `screen`, `none`, ...D()] }],
        "max-w": [
          { "max-w": [s, `screen`, `none`, `prose`, { screen: [o] }, ...D()] },
        ],
        h: [{ h: [`screen`, `lh`, ...D()] }],
        "min-h": [{ "min-h": [`screen`, `lh`, `none`, ...D()] }],
        "max-h": [{ "max-h": [`screen`, `lh`, ...D()] }],
        "font-size": [{ text: [`base`, n, gt, z] }],
        "font-smoothing": [`antialiased`, `subpixel-antialiased`],
        "font-style": [`italic`, `not-italic`],
        "font-weight": [{ font: [r, St, dt] }],
        "font-stretch": [
          {
            "font-stretch": [
              `ultra-condensed`,
              `extra-condensed`,
              `condensed`,
              `semi-condensed`,
              `normal`,
              `semi-expanded`,
              `expanded`,
              `extra-expanded`,
              `ultra-expanded`,
              tt,
              R,
            ],
          },
        ],
        "font-family": [{ font: [_t, ft, t] }],
        "font-features": [{ "font-features": [R] }],
        "fvn-normal": [`normal-nums`],
        "fvn-ordinal": [`ordinal`],
        "fvn-slashed-zero": [`slashed-zero`],
        "fvn-figure": [`lining-nums`, `oldstyle-nums`],
        "fvn-spacing": [`proportional-nums`, `tabular-nums`],
        "fvn-fraction": [`diagonal-fractions`, `stacked-fractions`],
        tracking: [{ tracking: [i, B, R] }],
        "line-clamp": [{ "line-clamp": [F, `none`, B, ut] }],
        leading: [{ leading: [a, ...x()] }],
        "list-image": [{ "list-image": [`none`, B, R] }],
        "list-style-position": [{ list: [`inside`, `outside`] }],
        "list-style-type": [{ list: [`disc`, `decimal`, `none`, B, R] }],
        "text-alignment": [
          { text: [`left`, `center`, `right`, `justify`, `start`, `end`] },
        ],
        "placeholder-color": [{ placeholder: O() }],
        "text-color": [{ text: O() }],
        "text-decoration": [
          `underline`,
          `overline`,
          `line-through`,
          `no-underline`,
        ],
        "text-decoration-style": [{ decoration: [...fe(), `wavy`] }],
        "text-decoration-thickness": [
          { decoration: [F, `from-font`, `auto`, B, z] },
        ],
        "text-decoration-color": [{ decoration: O() }],
        "underline-offset": [{ "underline-offset": [F, `auto`, B, R] }],
        "text-transform": [
          `uppercase`,
          `lowercase`,
          `capitalize`,
          `normal-case`,
        ],
        "text-overflow": [`truncate`, `text-ellipsis`, `text-clip`],
        "text-wrap": [{ text: [`wrap`, `nowrap`, `balance`, `pretty`] }],
        indent: [{ indent: x() }],
        "tab-size": [{ tab: [I, B, R] }],
        "vertical-align": [
          {
            align: [
              `baseline`,
              `top`,
              `middle`,
              `bottom`,
              `text-top`,
              `text-bottom`,
              `sub`,
              `super`,
              B,
              R,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              `normal`,
              `nowrap`,
              `pre`,
              `pre-line`,
              `pre-wrap`,
              `break-spaces`,
            ],
          },
        ],
        break: [{ break: [`normal`, `words`, `all`, `keep`] }],
        wrap: [{ wrap: [`break-word`, `anywhere`, `normal`] }],
        hyphens: [{ hyphens: [`none`, `manual`, `auto`] }],
        content: [{ content: [`none`, B, R] }],
        "bg-attachment": [{ bg: [`fixed`, `local`, `scroll`] }],
        "bg-clip": [{ "bg-clip": [`border`, `padding`, `content`, `text`] }],
        "bg-origin": [{ "bg-origin": [`border`, `padding`, `content`] }],
        "bg-position": [{ bg: ce() }],
        "bg-repeat": [{ bg: le() }],
        "bg-size": [{ bg: ue() }],
        "bg-image": [
          {
            bg: [
              `none`,
              {
                linear: [
                  { to: [`t`, `tr`, `r`, `br`, `b`, `bl`, `l`, `tl`] },
                  I,
                  B,
                  R,
                ],
                radial: [``, B, R],
                conic: [I, B, R],
              },
              bt,
              mt,
            ],
          },
        ],
        "bg-color": [{ bg: O() }],
        "gradient-from-pos": [{ from: de() }],
        "gradient-via-pos": [{ via: de() }],
        "gradient-to-pos": [{ to: de() }],
        "gradient-from": [{ from: O() }],
        "gradient-via": [{ via: O() }],
        "gradient-to": [{ to: O() }],
        rounded: [{ rounded: k() }],
        "rounded-s": [{ "rounded-s": k() }],
        "rounded-e": [{ "rounded-e": k() }],
        "rounded-t": [{ "rounded-t": k() }],
        "rounded-r": [{ "rounded-r": k() }],
        "rounded-b": [{ "rounded-b": k() }],
        "rounded-l": [{ "rounded-l": k() }],
        "rounded-ss": [{ "rounded-ss": k() }],
        "rounded-se": [{ "rounded-se": k() }],
        "rounded-ee": [{ "rounded-ee": k() }],
        "rounded-es": [{ "rounded-es": k() }],
        "rounded-tl": [{ "rounded-tl": k() }],
        "rounded-tr": [{ "rounded-tr": k() }],
        "rounded-br": [{ "rounded-br": k() }],
        "rounded-bl": [{ "rounded-bl": k() }],
        "border-w": [{ border: A() }],
        "border-w-x": [{ "border-x": A() }],
        "border-w-y": [{ "border-y": A() }],
        "border-w-s": [{ "border-s": A() }],
        "border-w-e": [{ "border-e": A() }],
        "border-w-bs": [{ "border-bs": A() }],
        "border-w-be": [{ "border-be": A() }],
        "border-w-t": [{ "border-t": A() }],
        "border-w-r": [{ "border-r": A() }],
        "border-w-b": [{ "border-b": A() }],
        "border-w-l": [{ "border-l": A() }],
        "divide-x": [{ "divide-x": A() }],
        "divide-x-reverse": [`divide-x-reverse`],
        "divide-y": [{ "divide-y": A() }],
        "divide-y-reverse": [`divide-y-reverse`],
        "border-style": [{ border: [...fe(), `hidden`, `none`] }],
        "divide-style": [{ divide: [...fe(), `hidden`, `none`] }],
        "border-color": [{ border: O() }],
        "border-color-x": [{ "border-x": O() }],
        "border-color-y": [{ "border-y": O() }],
        "border-color-s": [{ "border-s": O() }],
        "border-color-e": [{ "border-e": O() }],
        "border-color-bs": [{ "border-bs": O() }],
        "border-color-be": [{ "border-be": O() }],
        "border-color-t": [{ "border-t": O() }],
        "border-color-r": [{ "border-r": O() }],
        "border-color-b": [{ "border-b": O() }],
        "border-color-l": [{ "border-l": O() }],
        "divide-color": [{ divide: O() }],
        "outline-style": [{ outline: [...fe(), `none`, `hidden`] }],
        "outline-offset": [{ "outline-offset": [F, B, R] }],
        "outline-w": [{ outline: [``, F, gt, z] }],
        "outline-color": [{ outline: O() }],
        shadow: [{ shadow: [``, `none`, u, xt, ht] }],
        "shadow-color": [{ shadow: O() }],
        "inset-shadow": [{ "inset-shadow": [`none`, d, xt, ht] }],
        "inset-shadow-color": [{ "inset-shadow": O() }],
        "ring-w": [{ ring: A() }],
        "ring-w-inset": [`ring-inset`],
        "ring-color": [{ ring: O() }],
        "ring-offset-w": [{ "ring-offset": [F, z] }],
        "ring-offset-color": [{ "ring-offset": O() }],
        "inset-ring-w": [{ "inset-ring": A() }],
        "inset-ring-color": [{ "inset-ring": O() }],
        "text-shadow": [{ "text-shadow": [`none`, f, xt, ht] }],
        "text-shadow-color": [{ "text-shadow": O() }],
        opacity: [{ opacity: [F, B, R] }],
        "mix-blend": [
          { "mix-blend": [...pe(), `plus-darker`, `plus-lighter`] },
        ],
        "bg-blend": [{ "bg-blend": pe() }],
        "mask-clip": [
          {
            "mask-clip": [
              `border`,
              `padding`,
              `content`,
              `fill`,
              `stroke`,
              `view`,
            ],
          },
          `mask-no-clip`,
        ],
        "mask-composite": [
          { mask: [`add`, `subtract`, `intersect`, `exclude`] },
        ],
        "mask-image-linear-pos": [{ "mask-linear": [F] }],
        "mask-image-linear-from-pos": [{ "mask-linear-from": j() }],
        "mask-image-linear-to-pos": [{ "mask-linear-to": j() }],
        "mask-image-linear-from-color": [{ "mask-linear-from": O() }],
        "mask-image-linear-to-color": [{ "mask-linear-to": O() }],
        "mask-image-t-from-pos": [{ "mask-t-from": j() }],
        "mask-image-t-to-pos": [{ "mask-t-to": j() }],
        "mask-image-t-from-color": [{ "mask-t-from": O() }],
        "mask-image-t-to-color": [{ "mask-t-to": O() }],
        "mask-image-r-from-pos": [{ "mask-r-from": j() }],
        "mask-image-r-to-pos": [{ "mask-r-to": j() }],
        "mask-image-r-from-color": [{ "mask-r-from": O() }],
        "mask-image-r-to-color": [{ "mask-r-to": O() }],
        "mask-image-b-from-pos": [{ "mask-b-from": j() }],
        "mask-image-b-to-pos": [{ "mask-b-to": j() }],
        "mask-image-b-from-color": [{ "mask-b-from": O() }],
        "mask-image-b-to-color": [{ "mask-b-to": O() }],
        "mask-image-l-from-pos": [{ "mask-l-from": j() }],
        "mask-image-l-to-pos": [{ "mask-l-to": j() }],
        "mask-image-l-from-color": [{ "mask-l-from": O() }],
        "mask-image-l-to-color": [{ "mask-l-to": O() }],
        "mask-image-x-from-pos": [{ "mask-x-from": j() }],
        "mask-image-x-to-pos": [{ "mask-x-to": j() }],
        "mask-image-x-from-color": [{ "mask-x-from": O() }],
        "mask-image-x-to-color": [{ "mask-x-to": O() }],
        "mask-image-y-from-pos": [{ "mask-y-from": j() }],
        "mask-image-y-to-pos": [{ "mask-y-to": j() }],
        "mask-image-y-from-color": [{ "mask-y-from": O() }],
        "mask-image-y-to-color": [{ "mask-y-to": O() }],
        "mask-image-radial": [{ "mask-radial": [B, R] }],
        "mask-image-radial-from-pos": [{ "mask-radial-from": j() }],
        "mask-image-radial-to-pos": [{ "mask-radial-to": j() }],
        "mask-image-radial-from-color": [{ "mask-radial-from": O() }],
        "mask-image-radial-to-color": [{ "mask-radial-to": O() }],
        "mask-image-radial-shape": [{ "mask-radial": [`circle`, `ellipse`] }],
        "mask-image-radial-size": [
          {
            "mask-radial": [
              { closest: [`side`, `corner`], farthest: [`side`, `corner`] },
            ],
          },
        ],
        "mask-image-radial-pos": [{ "mask-radial-at": v() }],
        "mask-image-conic-pos": [{ "mask-conic": [F] }],
        "mask-image-conic-from-pos": [{ "mask-conic-from": j() }],
        "mask-image-conic-to-pos": [{ "mask-conic-to": j() }],
        "mask-image-conic-from-color": [{ "mask-conic-from": O() }],
        "mask-image-conic-to-color": [{ "mask-conic-to": O() }],
        "mask-mode": [{ mask: [`alpha`, `luminance`, `match`] }],
        "mask-origin": [
          {
            "mask-origin": [
              `border`,
              `padding`,
              `content`,
              `fill`,
              `stroke`,
              `view`,
            ],
          },
        ],
        "mask-position": [{ mask: ce() }],
        "mask-repeat": [{ mask: le() }],
        "mask-size": [{ mask: ue() }],
        "mask-type": [{ "mask-type": [`alpha`, `luminance`] }],
        "mask-image": [{ mask: [`none`, B, R] }],
        filter: [{ filter: [``, `none`, B, R] }],
        blur: [{ blur: me() }],
        brightness: [{ brightness: [F, B, R] }],
        contrast: [{ contrast: [F, B, R] }],
        "drop-shadow": [{ "drop-shadow": [``, `none`, p, xt, ht] }],
        "drop-shadow-color": [{ "drop-shadow": O() }],
        grayscale: [{ grayscale: [``, F, B, R] }],
        "hue-rotate": [{ "hue-rotate": [F, B, R] }],
        invert: [{ invert: [``, F, B, R] }],
        saturate: [{ saturate: [F, B, R] }],
        sepia: [{ sepia: [``, F, B, R] }],
        "backdrop-filter": [{ "backdrop-filter": [``, `none`, B, R] }],
        "backdrop-blur": [{ "backdrop-blur": me() }],
        "backdrop-brightness": [{ "backdrop-brightness": [F, B, R] }],
        "backdrop-contrast": [{ "backdrop-contrast": [F, B, R] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": [``, F, B, R] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [F, B, R] }],
        "backdrop-invert": [{ "backdrop-invert": [``, F, B, R] }],
        "backdrop-opacity": [{ "backdrop-opacity": [F, B, R] }],
        "backdrop-saturate": [{ "backdrop-saturate": [F, B, R] }],
        "backdrop-sepia": [{ "backdrop-sepia": [``, F, B, R] }],
        "border-collapse": [{ border: [`collapse`, `separate`] }],
        "border-spacing": [{ "border-spacing": x() }],
        "border-spacing-x": [{ "border-spacing-x": x() }],
        "border-spacing-y": [{ "border-spacing-y": x() }],
        "table-layout": [{ table: [`auto`, `fixed`] }],
        caption: [{ caption: [`top`, `bottom`] }],
        transition: [
          {
            transition: [
              ``,
              `all`,
              `colors`,
              `opacity`,
              `shadow`,
              `transform`,
              `none`,
              B,
              R,
            ],
          },
        ],
        "transition-behavior": [{ transition: [`normal`, `discrete`] }],
        duration: [{ duration: [F, `initial`, B, R] }],
        ease: [{ ease: [`linear`, `initial`, _, B, R] }],
        delay: [{ delay: [F, B, R] }],
        animate: [{ animate: [`none`, ee, B, R] }],
        backface: [{ backface: [`hidden`, `visible`] }],
        perspective: [{ perspective: [h, B, R] }],
        "perspective-origin": [{ "perspective-origin": ne() }],
        rotate: [{ rotate: he() }],
        "rotate-x": [{ "rotate-x": he() }],
        "rotate-y": [{ "rotate-y": he() }],
        "rotate-z": [{ "rotate-z": he() }],
        scale: [{ scale: ge() }],
        "scale-x": [{ "scale-x": ge() }],
        "scale-y": [{ "scale-y": ge() }],
        "scale-z": [{ "scale-z": ge() }],
        "scale-3d": [`scale-3d`],
        skew: [{ skew: _e() }],
        "skew-x": [{ "skew-x": _e() }],
        "skew-y": [{ "skew-y": _e() }],
        transform: [{ transform: [B, R, ``, `none`, `gpu`, `cpu`] }],
        "transform-origin": [{ origin: ne() }],
        "transform-style": [{ transform: [`3d`, `flat`] }],
        translate: [{ translate: M() }],
        "translate-x": [{ "translate-x": M() }],
        "translate-y": [{ "translate-y": M() }],
        "translate-z": [{ "translate-z": M() }],
        "translate-none": [`translate-none`],
        zoom: [{ zoom: [I, B, R] }],
        accent: [{ accent: O() }],
        appearance: [{ appearance: [`none`, `auto`] }],
        "caret-color": [{ caret: O() }],
        "color-scheme": [
          {
            scheme: [
              `normal`,
              `dark`,
              `light`,
              `light-dark`,
              `only-dark`,
              `only-light`,
            ],
          },
        ],
        cursor: [
          {
            cursor: [
              `auto`,
              `default`,
              `pointer`,
              `wait`,
              `text`,
              `move`,
              `help`,
              `not-allowed`,
              `none`,
              `context-menu`,
              `progress`,
              `cell`,
              `crosshair`,
              `vertical-text`,
              `alias`,
              `copy`,
              `no-drop`,
              `grab`,
              `grabbing`,
              `all-scroll`,
              `col-resize`,
              `row-resize`,
              `n-resize`,
              `e-resize`,
              `s-resize`,
              `w-resize`,
              `ne-resize`,
              `nw-resize`,
              `se-resize`,
              `sw-resize`,
              `ew-resize`,
              `ns-resize`,
              `nesw-resize`,
              `nwse-resize`,
              `zoom-in`,
              `zoom-out`,
              B,
              R,
            ],
          },
        ],
        "field-sizing": [{ "field-sizing": [`fixed`, `content`] }],
        "pointer-events": [{ "pointer-events": [`auto`, `none`] }],
        resize: [{ resize: [`none`, ``, `y`, `x`] }],
        "scroll-behavior": [{ scroll: [`auto`, `smooth`] }],
        "scrollbar-thumb-color": [{ "scrollbar-thumb": O() }],
        "scrollbar-track-color": [{ "scrollbar-track": O() }],
        "scrollbar-gutter": [
          { "scrollbar-gutter": [`auto`, `stable`, `both`] },
        ],
        "scrollbar-w": [{ scrollbar: [`auto`, `thin`, `none`] }],
        "scroll-m": [{ "scroll-m": x() }],
        "scroll-mx": [{ "scroll-mx": x() }],
        "scroll-my": [{ "scroll-my": x() }],
        "scroll-ms": [{ "scroll-ms": x() }],
        "scroll-me": [{ "scroll-me": x() }],
        "scroll-mbs": [{ "scroll-mbs": x() }],
        "scroll-mbe": [{ "scroll-mbe": x() }],
        "scroll-mt": [{ "scroll-mt": x() }],
        "scroll-mr": [{ "scroll-mr": x() }],
        "scroll-mb": [{ "scroll-mb": x() }],
        "scroll-ml": [{ "scroll-ml": x() }],
        "scroll-p": [{ "scroll-p": x() }],
        "scroll-px": [{ "scroll-px": x() }],
        "scroll-py": [{ "scroll-py": x() }],
        "scroll-ps": [{ "scroll-ps": x() }],
        "scroll-pe": [{ "scroll-pe": x() }],
        "scroll-pbs": [{ "scroll-pbs": x() }],
        "scroll-pbe": [{ "scroll-pbe": x() }],
        "scroll-pt": [{ "scroll-pt": x() }],
        "scroll-pr": [{ "scroll-pr": x() }],
        "scroll-pb": [{ "scroll-pb": x() }],
        "scroll-pl": [{ "scroll-pl": x() }],
        "snap-align": [{ snap: [`start`, `end`, `center`, `align-none`] }],
        "snap-stop": [{ snap: [`normal`, `always`] }],
        "snap-type": [{ snap: [`none`, `x`, `y`, `both`] }],
        "snap-strictness": [{ snap: [`mandatory`, `proximity`] }],
        touch: [{ touch: [`auto`, `none`, `manipulation`] }],
        "touch-x": [{ "touch-pan": [`x`, `left`, `right`] }],
        "touch-y": [{ "touch-pan": [`y`, `up`, `down`] }],
        "touch-pz": [`touch-pinch-zoom`],
        select: [{ select: [`none`, `text`, `all`, `auto`] }],
        "will-change": [
          { "will-change": [`auto`, `scroll`, `contents`, `transform`, B, R] },
        ],
        fill: [{ fill: [`none`, ...O()] }],
        "stroke-w": [{ stroke: [F, gt, z, ut] }],
        stroke: [{ stroke: [`none`, ...O()] }],
        "forced-color-adjust": [{ "forced-color-adjust": [`auto`, `none`] }],
      },
      conflictingClassGroups: {
        "container-named": [`container-type`],
        overflow: [`overflow-x`, `overflow-y`],
        overscroll: [`overscroll-x`, `overscroll-y`],
        inset: [
          `inset-x`,
          `inset-y`,
          `inset-bs`,
          `inset-be`,
          `start`,
          `end`,
          `top`,
          `right`,
          `bottom`,
          `left`,
        ],
        "inset-x": [`right`, `left`],
        "inset-y": [`top`, `bottom`],
        flex: [`basis`, `grow`, `shrink`],
        gap: [`gap-x`, `gap-y`],
        p: [`px`, `py`, `ps`, `pe`, `pbs`, `pbe`, `pt`, `pr`, `pb`, `pl`],
        px: [`pr`, `pl`],
        py: [`pt`, `pb`],
        m: [`mx`, `my`, `ms`, `me`, `mbs`, `mbe`, `mt`, `mr`, `mb`, `ml`],
        mx: [`mr`, `ml`],
        my: [`mt`, `mb`],
        size: [`w`, `h`],
        "font-size": [`leading`],
        "fvn-normal": [
          `fvn-ordinal`,
          `fvn-slashed-zero`,
          `fvn-figure`,
          `fvn-spacing`,
          `fvn-fraction`,
        ],
        "fvn-ordinal": [`fvn-normal`],
        "fvn-slashed-zero": [`fvn-normal`],
        "fvn-figure": [`fvn-normal`],
        "fvn-spacing": [`fvn-normal`],
        "fvn-fraction": [`fvn-normal`],
        "line-clamp": [`display`, `overflow`],
        rounded: [
          `rounded-s`,
          `rounded-e`,
          `rounded-t`,
          `rounded-r`,
          `rounded-b`,
          `rounded-l`,
          `rounded-ss`,
          `rounded-se`,
          `rounded-ee`,
          `rounded-es`,
          `rounded-tl`,
          `rounded-tr`,
          `rounded-br`,
          `rounded-bl`,
        ],
        "rounded-s": [`rounded-ss`, `rounded-es`],
        "rounded-e": [`rounded-se`, `rounded-ee`],
        "rounded-t": [`rounded-tl`, `rounded-tr`],
        "rounded-r": [`rounded-tr`, `rounded-br`],
        "rounded-b": [`rounded-br`, `rounded-bl`],
        "rounded-l": [`rounded-tl`, `rounded-bl`],
        "border-spacing": [`border-spacing-x`, `border-spacing-y`],
        "border-w": [
          `border-w-x`,
          `border-w-y`,
          `border-w-s`,
          `border-w-e`,
          `border-w-bs`,
          `border-w-be`,
          `border-w-t`,
          `border-w-r`,
          `border-w-b`,
          `border-w-l`,
        ],
        "border-w-x": [`border-w-r`, `border-w-l`],
        "border-w-y": [`border-w-t`, `border-w-b`],
        "border-color": [
          `border-color-x`,
          `border-color-y`,
          `border-color-s`,
          `border-color-e`,
          `border-color-bs`,
          `border-color-be`,
          `border-color-t`,
          `border-color-r`,
          `border-color-b`,
          `border-color-l`,
        ],
        "border-color-x": [`border-color-r`, `border-color-l`],
        "border-color-y": [`border-color-t`, `border-color-b`],
        translate: [`translate-x`, `translate-y`, `translate-none`],
        "translate-none": [
          `translate`,
          `translate-x`,
          `translate-y`,
          `translate-z`,
        ],
        "scroll-m": [
          `scroll-mx`,
          `scroll-my`,
          `scroll-ms`,
          `scroll-me`,
          `scroll-mbs`,
          `scroll-mbe`,
          `scroll-mt`,
          `scroll-mr`,
          `scroll-mb`,
          `scroll-ml`,
        ],
        "scroll-mx": [`scroll-mr`, `scroll-ml`],
        "scroll-my": [`scroll-mt`, `scroll-mb`],
        "scroll-p": [
          `scroll-px`,
          `scroll-py`,
          `scroll-ps`,
          `scroll-pe`,
          `scroll-pbs`,
          `scroll-pbe`,
          `scroll-pt`,
          `scroll-pr`,
          `scroll-pb`,
          `scroll-pl`,
        ],
        "scroll-px": [`scroll-pr`, `scroll-pl`],
        "scroll-py": [`scroll-pt`, `scroll-pb`],
        touch: [`touch-x`, `touch-y`, `touch-pz`],
        "touch-x": [`touch`],
        "touch-y": [`touch`],
        "touch-pz": [`touch`],
      },
      conflictingClassGroupModifiers: { "font-size": [`leading`] },
      postfixLookupClassGroups: [`container-type`],
      orderSensitiveModifiers: [
        `*`,
        `**`,
        `after`,
        `backdrop`,
        `before`,
        `details-content`,
        `file`,
        `first-letter`,
        `first-line`,
        `marker`,
        `placeholder`,
        `selection`,
      ],
    };
  });
function Mt(...e) {
  return jt(fe(e));
}
var U = r(),
  Nt = me(
    `button-feedback inline-flex items-center justify-center gap-2 whitespace-nowrap font-display text-sm font-black transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50`,
    {
      variants: {
        variant: {
          default: `rounded-md bg-primary px-4 text-primary-foreground shadow-sm hover:bg-primary/90`,
          destructive: `rounded-md bg-destructive px-4 text-destructive-foreground shadow-sm hover:bg-destructive/90`,
          outline: `rounded-md border border-input bg-background px-4 text-foreground shadow-sm hover:bg-accent hover:text-accent-foreground`,
          secondary: `rounded-md bg-secondary px-4 text-secondary-foreground shadow-sm hover:bg-secondary/80`,
          ghost: `rounded-md px-4 text-foreground hover:bg-accent hover:text-accent-foreground`,
          link: `h-auto rounded-none px-0 text-primary underline-offset-4 hover:underline`,
          candy: `rounded-full border-2 border-primary-border bg-primary px-6 py-3 text-primary-foreground shadow-candy hover:-translate-y-1 hover:shadow-candy-hover active:translate-y-0`,
          cloud: `rounded-full border-2 border-border bg-card px-5 py-2.5 text-foreground shadow-cloud hover:-translate-y-0.5 hover:bg-secondary`,
          buyFomo: `trade-cloud bg-buy-fomo px-5 py-2.5 text-foreground hover:-translate-y-1`,
          buyPump: `trade-cloud bg-buy-pump px-5 py-2.5 text-foreground hover:-translate-y-1`,
          icon: `size-11 rounded-full border-2 border-border bg-card text-foreground shadow-cloud hover:-rotate-6 hover:scale-105`,
          upload: `h-full w-full flex-col rounded-none p-6 text-center text-foreground hover:bg-card/25 sm:gap-4 sm:p-8`,
          contract: `ca-copy-cloud trade-cloud h-auto max-w-full justify-start whitespace-normal bg-card px-4 py-3 text-foreground sm:px-6 sm:py-3.5`,
        },
        size: {
          default: `h-12`,
          lg: `h-14 px-8 text-base`,
          icon: `size-11 p-0`,
        },
      },
      defaultVariants: { variant: `default`, size: `default` },
    }
  ),
  Pt = (0, s.forwardRef)(function (
    { className: e, variant: t, size: n, asChild: r = !1, ...i },
    a
  ) {
    return (0, U.jsx)(r ? ie : `button`, {
      ref: a,
      className: Mt(Nt({ variant: t, size: n, className: e })),
      ...i,
    });
  }),
  Ft = Object.defineProperty,
  It = (e, t) => Ft(e, `name`, { value: t, configurable: !0 }),
  Lt = !!(
    typeof window < `u` &&
    window.document &&
    window.document.createElement
  );
function W(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return It(function (r) {
    if ((e?.(r), n === !1 || !r || !r.defaultPrevented)) return t?.(r);
  }, `handleEvent`);
}
It(W, `composeEventHandlers`);
function Rt(e) {
  if (!Lt) throw Error(`Cannot access window outside of the DOM`);
  return e?.ownerDocument?.defaultView ?? window;
}
It(Rt, `getOwnerWindow`);
function zt(e) {
  if (!Lt) throw Error(`Cannot access document outside of the DOM`);
  return e?.ownerDocument ?? document;
}
It(zt, `getOwnerDocument`);
function Bt(e, t = !1) {
  let { activeElement: n } = zt(e);
  if (!n?.nodeName) return null;
  if (Vt(n) && n.contentDocument) return Bt(n.contentDocument.body, t);
  if (t) {
    let e = n.getAttribute(`aria-activedescendant`);
    if (e) {
      let t = zt(n).getElementById(e);
      if (t) return t;
    }
  }
  return n;
}
It(Bt, `getActiveElement`);
function Vt(e) {
  return e.tagName === `IFRAME`;
}
It(Vt, `isFrame`);
var Ht = Object.defineProperty,
  G = (e, t) => Ht(e, `name`, { value: t, configurable: !0 });
function Ut(e, t) {
  let n = s.createContext(t);
  n.displayName = e + `Context`;
  let r = G((e) => {
    let { children: t, ...r } = e,
      i = s.useMemo(() => r, Object.values(r));
    return (0, U.jsx)(n.Provider, { value: i, children: t });
  }, `Provider`);
  r.displayName = e + `Provider`;
  function i(r, i = {}) {
    let { optional: a = !1 } = i,
      o = s.useContext(n);
    if (o) return o;
    if (t !== void 0) return t;
    if (!a) throw Error(`\`${r}\` must be used within \`${e}\``);
  }
  return G(i, `useContext`), [r, i];
}
G(Ut, `createContext`);
function Wt(e, t = []) {
  let n = [];
  function r(t, r) {
    let i = s.createContext(r);
    i.displayName = t + `Context`;
    let a = n.length;
    n = [...n, r];
    let o = G((t) => {
      let { scope: n, children: r, ...o } = t,
        c = n?.[e]?.[a] || i,
        l = s.useMemo(() => o, Object.values(o));
      return (0, U.jsx)(c.Provider, { value: l, children: r });
    }, `Provider`);
    o.displayName = t + `Provider`;
    function c(n, o, c = {}) {
      let { optional: l = !1 } = c,
        u = o?.[e]?.[a] || i,
        d = s.useContext(u);
      if (d) return d;
      if (r !== void 0) return r;
      if (!l) throw Error(`\`${n}\` must be used within \`${t}\``);
    }
    return G(c, `useContext`), [o, c];
  }
  G(r, `createContext`);
  let i = G(() => {
    let t = n.map((e) => s.createContext(e));
    return G(function (n) {
      let r = n?.[e] || t;
      return s.useMemo(() => ({ [`__scope${e}`]: { ...n, [e]: r } }), [n, r]);
    }, `useScope`);
  }, `createScope`);
  return (i.scopeName = e), [r, Gt(i, ...t)];
}
G(Wt, `createContextScope`);
function Gt(...e) {
  let t = e[0];
  if (e.length === 1) return t;
  let n = G(() => {
    let n = e.map((e) => ({ useScope: e(), scopeName: e.scopeName }));
    return G(function (e) {
      let r = n.reduce((t, { useScope: n, scopeName: r }) => {
        let i = n(e)[`__scope${r}`];
        return { ...t, ...i };
      }, {});
      return s.useMemo(() => ({ [`__scope${t.scopeName}`]: r }), [r]);
    }, `useComposedScopes`);
  }, `createScope`);
  return (n.scopeName = t.scopeName), n;
}
G(Gt, `composeContextScopes`);
var K = globalThis?.document ? s.useLayoutEffect : () => {},
  Kt = Object.defineProperty,
  qt = (e, t) => Kt(e, `name`, { value: t, configurable: !0 }),
  Jt = s.useId || (() => void 0),
  Yt = 0;
function Xt(e) {
  let [t, n] = s.useState(Jt());
  return (
    K(() => {
      e || n((e) => e ?? String(Yt++));
    }, [e]),
    e || (t ? `radix-${t}` : ``)
  );
}
qt(Xt, `useId`);
var Zt = Object.defineProperty,
  Qt = (e, t) => Zt(e, `name`, { value: t, configurable: !0 }),
  $t = s.useEffectEvent,
  en = s.useInsertionEffect;
function tn(e) {
  if (typeof $t == `function`) return $t(e);
  let t = s.useRef(() => {
    throw Error(`Cannot call an event handler while rendering.`);
  });
  return (
    typeof en == `function`
      ? en(() => {
          t.current = e;
        })
      : K(() => {
          t.current = e;
        }),
    s.useMemo(
      () =>
        (...e) =>
          t.current?.(...e),
      []
    )
  );
}
Qt(tn, `useEffectEvent`);
var nn = Object.defineProperty,
  rn = (e, t) => nn(e, `name`, { value: t, configurable: !0 }),
  an = s.useInsertionEffect || K;
function on({
  prop: e,
  defaultProp: t,
  onChange: n = rn(() => {}, `onChange`),
  caller: r,
}) {
  let [i, a, o] = sn({ defaultProp: t, onChange: n }),
    c = e !== void 0;
  return [
    c ? e : i,
    s.useCallback(
      (t) => {
        if (c) {
          let n = cn(t) ? t(e) : t;
          n !== e && o.current?.(n);
        } else a(t);
      },
      [c, e, a, o]
    ),
  ];
}
rn(on, `useControllableState`);
function sn({ defaultProp: e, onChange: t }) {
  let [n, r] = s.useState(e),
    i = s.useRef(n),
    a = s.useRef(t);
  return (
    an(() => {
      a.current = t;
    }, [t]),
    s.useEffect(() => {
      i.current !== n && (a.current?.(n), (i.current = n));
    }, [n, i]),
    [n, r, a]
  );
}
rn(sn, `useUncontrolledState`);
function cn(e) {
  return typeof e == `function`;
}
rn(cn, `isFunction`);
var ln = Symbol(`RADIX:SYNC_STATE`);
function un(e, t, n, r) {
  let { prop: i, defaultProp: a, onChange: o, caller: c } = t,
    l = i !== void 0,
    u = tn(o),
    d = [{ ...n, state: a }];
  r && d.push(r);
  let [f, p] = s.useReducer((t, n) => {
      if (n.type === ln) return { ...t, state: n.state };
      let r = e(t, n);
      return l && !Object.is(r.state, t.state) && u(r.state), r;
    }, ...d),
    m = f.state,
    h = s.useRef(m);
  s.useEffect(() => {
    h.current !== m && ((h.current = m), l || u(m));
  }, [m, h, l]);
  let g = s.useMemo(() => (i === void 0 ? f : { ...f, state: i }), [f, i]);
  return (
    s.useEffect(() => {
      l && !Object.is(i, f.state) && p({ type: ln, state: i });
    }, [i, f.state, l]),
    [g, p]
  );
}
rn(un, `useControllableStateReducer`);
var dn = t(e(), 1),
  fn = Object.defineProperty,
  pn = (e, t) => fn(e, `name`, { value: t, configurable: !0 }),
  q = [
    `a`,
    `button`,
    `div`,
    `form`,
    `h2`,
    `h3`,
    `img`,
    `input`,
    `label`,
    `li`,
    `nav`,
    `ol`,
    `p`,
    `select`,
    `span`,
    `svg`,
    `ul`,
  ].reduce((e, t) => {
    let n = w(`Primitive.${t}`),
      r = s.forwardRef((e, r) => {
        let { asChild: i, ...a } = e,
          o = i ? n : t;
        return (
          typeof window < `u` && (window[Symbol.for(`radix-ui`)] = !0),
          (0, U.jsx)(o, { ...a, ref: r })
        );
      });
    return (r.displayName = `Primitive.${t}`), { ...e, [t]: r };
  }, {});
function mn(e, t) {
  e && dn.flushSync(() => e.dispatchEvent(t));
}
pn(mn, `dispatchDiscreteCustomEvent`);
var hn = Object.defineProperty,
  gn = (e, t) => hn(e, `name`, { value: t, configurable: !0 });
function _n(e) {
  let t = s.useRef(e);
  return (
    s.useEffect(() => {
      t.current = e;
    }),
    s.useMemo(
      () =>
        (...e) =>
          t.current?.(...e),
      []
    )
  );
}
gn(_n, `useCallbackRef`);
var vn = Object.defineProperty,
  J = (e, t) => vn(e, `name`, { value: t, configurable: !0 }),
  yn = `dismissableLayer.update`,
  bn = `dismissableLayer.pointerDownOutside`,
  xn = `dismissableLayer.focusOutside`,
  Sn,
  Cn = s.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
    dismissableSurfaces: new Set(),
  }),
  wn = s.forwardRef(
    J(function (e, t) {
      let {
          disableOutsidePointerEvents: n = !1,
          deferPointerDownOutside: r = !1,
          onEscapeKeyDown: i,
          onPointerDownOutside: a,
          onFocusOutside: o,
          onInteractOutside: c,
          onDismiss: l,
          ...u
        } = e,
        d = s.useContext(Cn),
        [f, p] = s.useState(null),
        m = f?.ownerDocument ?? globalThis?.document,
        [, h] = s.useState({}),
        g = S(t, p),
        _ = Array.from(d.layers),
        [ee] = [...d.layersWithOutsidePointerEventsDisabled].slice(-1),
        te = ee ? _.indexOf(ee) : -1,
        v = f ? _.indexOf(f) : -1,
        ne = d.layersWithOutsidePointerEventsDisabled.size > 0,
        y = v >= te,
        b = s.useRef(!1),
        x = Dn(
          (e) => {
            a?.(e), c?.(e), e.defaultPrevented || l?.();
          },
          {
            ownerDocument: m,
            deferPointerDownOutside: r,
            isDeferredPointerDownOutsideRef: b,
            dismissableSurfaces: d.dismissableSurfaces,
            shouldHandlePointerDownOutside: s.useCallback(
              (e) => {
                if (!(e instanceof Node)) return !1;
                let t = [...d.branches].some((t) => t.contains(e));
                return y && !t;
              },
              [d.branches, y]
            ),
          }
        ),
        re = On((e) => {
          if (r && b.current) return;
          let t = e.target;
          [...d.branches].some((e) => e.contains(t)) ||
            (o?.(e), c?.(e), e.defaultPrevented || l?.());
        }, m),
        C = f ? v === _.length - 1 : !1,
        w = _n((e) => {
          e.key === `Escape` &&
            (i?.(e), !e.defaultPrevented && l && (e.preventDefault(), l()));
        });
      return (
        s.useEffect(() => {
          if (C)
            return (
              m.addEventListener(`keydown`, w, { capture: !0 }),
              () => m.removeEventListener(`keydown`, w, { capture: !0 })
            );
        }, [m, C, w]),
        s.useEffect(() => {
          if (f)
            return (
              n &&
                (d.layersWithOutsidePointerEventsDisabled.size === 0 &&
                  ((Sn = m.body.style.pointerEvents),
                  (m.body.style.pointerEvents = `none`)),
                d.layersWithOutsidePointerEventsDisabled.add(f)),
              d.layers.add(f),
              kn(),
              () => {
                n &&
                  (d.layersWithOutsidePointerEventsDisabled.delete(f),
                  d.layersWithOutsidePointerEventsDisabled.size === 0 &&
                    (m.body.style.pointerEvents = Sn));
              }
            );
        }, [f, m, n, d]),
        s.useEffect(
          () => () => {
            f &&
              (d.layers.delete(f),
              d.layersWithOutsidePointerEventsDisabled.delete(f),
              kn());
          },
          [f, d]
        ),
        s.useEffect(() => {
          let e = J(() => h({}), `handleUpdate`);
          return (
            document.addEventListener(yn, e),
            () => document.removeEventListener(yn, e)
          );
        }, []),
        (0, U.jsx)(q.div, {
          ...u,
          ref: g,
          style: {
            pointerEvents: ne ? (y ? `auto` : `none`) : void 0,
            ...e.style,
          },
          onFocusCapture: W(e.onFocusCapture, re.onFocusCapture),
          onBlurCapture: W(e.onBlurCapture, re.onBlurCapture),
          onPointerDownCapture: W(
            e.onPointerDownCapture,
            x.onPointerDownCapture
          ),
        })
      );
    }, `DismissableLayer`)
  );
function Tn() {
  let e = s.useContext(Cn),
    [t, n] = s.useState(null);
  return (
    s.useEffect(() => {
      if (t)
        return (
          e.dismissableSurfaces.add(t),
          () => {
            e.dismissableSurfaces.delete(t);
          }
        );
    }, [t, e.dismissableSurfaces]),
    n
  );
}
J(Tn, `useDismissableLayerSurface`);
var En = J(() => !0, `IS_TRUE`);
function Dn(e, t) {
  let {
      ownerDocument: n = globalThis?.document,
      deferPointerDownOutside: r = !1,
      isDeferredPointerDownOutsideRef: i,
      dismissableSurfaces: a,
      shouldHandlePointerDownOutside: o = En,
    } = t,
    c = _n(e),
    l = s.useRef(!1),
    u = s.useRef(!1),
    d = s.useRef(new Map()),
    f = s.useRef(() => {});
  return (
    s.useEffect(() => {
      function e() {
        (u.current = !1), (i.current = !1), d.current.clear();
      }
      J(e, `resetOutsideInteraction`);
      function t() {
        return Array.from(d.current.values()).some(Boolean);
      }
      J(t, `isOutsideInteractionIntercepted`);
      function s(e) {
        if (!u.current) return;
        let t = e.target;
        (t instanceof Node && [...a].some((e) => e.contains(t))) ||
          d.current.set(e.type, !0),
          e.type === `click` &&
            window.setTimeout(() => {
              u.current && f.current();
            }, 0);
      }
      J(s, `handleInteractionCapture`);
      function p(e) {
        u.current && d.current.set(e.type, !1);
      }
      J(p, `handleInteractionBubble`);
      let m = J((a) => {
          if (a.target && !l.current) {
            let s = function () {
              n.removeEventListener(`click`, f.current);
              let r = t();
              e(), r || An(bn, c, p, { discrete: !0 });
            };
            if (
              (J(s, `handleAndDispatchPointerDownOutsideEvent`), !o(a.target))
            ) {
              n.removeEventListener(`click`, f.current), e(), (l.current = !1);
              return;
            }
            let p = { originalEvent: a };
            (u.current = !0),
              (i.current = r && a.button === 0),
              d.current.clear(),
              !r || a.button !== 0
                ? s()
                : (n.removeEventListener(`click`, f.current),
                  (f.current = s),
                  n.addEventListener(`click`, f.current, { once: !0 }));
          } else n.removeEventListener(`click`, f.current), e();
          l.current = !1;
        }, `handlePointerDown`),
        h = [
          `pointerup`,
          `mousedown`,
          `mouseup`,
          `touchstart`,
          `touchend`,
          `click`,
        ];
      for (let e of h) n.addEventListener(e, s, !0), n.addEventListener(e, p);
      let g = window.setTimeout(() => {
        n.addEventListener(`pointerdown`, m);
      }, 0);
      return () => {
        window.clearTimeout(g),
          n.removeEventListener(`pointerdown`, m),
          n.removeEventListener(`click`, f.current);
        for (let e of h)
          n.removeEventListener(e, s, !0), n.removeEventListener(e, p);
      };
    }, [n, c, r, i, a, o]),
    { onPointerDownCapture: J(() => (l.current = !0), `onPointerDownCapture`) }
  );
}
J(Dn, `usePointerDownOutside`);
function On(e, t = globalThis?.document) {
  let n = _n(e),
    r = s.useRef(!1);
  return (
    s.useEffect(() => {
      let e = J((e) => {
        e.target &&
          !r.current &&
          An(xn, n, { originalEvent: e }, { discrete: !1 });
      }, `handleFocus`);
      return (
        t.addEventListener(`focusin`, e),
        () => t.removeEventListener(`focusin`, e)
      );
    }, [t, n]),
    {
      onFocusCapture: J(() => (r.current = !0), `onFocusCapture`),
      onBlurCapture: J(() => (r.current = !1), `onBlurCapture`),
    }
  );
}
J(On, `useFocusOutside`);
function kn() {
  let e = new CustomEvent(yn);
  document.dispatchEvent(e);
}
J(kn, `dispatchUpdate`);
function An(e, t, n, { discrete: r }) {
  let i = n.originalEvent.target,
    a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && i.addEventListener(e, t, { once: !0 }),
    r ? mn(i, a) : i.dispatchEvent(a);
}
J(An, `handleAndDispatchCustomEvent`);
var jn = Object.defineProperty,
  Y = (e, t) => jn(e, `name`, { value: t, configurable: !0 }),
  Mn = `focusScope.autoFocusOnMount`,
  Nn = `focusScope.autoFocusOnUnmount`,
  Pn = { bubbles: !1, cancelable: !0 },
  Fn = s.forwardRef(
    Y(function (e, t) {
      let {
          loop: n = !1,
          trapped: r = !1,
          onMountAutoFocus: i,
          onUnmountAutoFocus: a,
          ...o
        } = e,
        [c, l] = s.useState(null),
        u = _n(i),
        d = _n(a),
        f = s.useRef(null),
        p = S(t, l),
        m = s.useRef({
          paused: !1,
          pause() {
            this.paused = !0;
          },
          resume() {
            this.paused = !1;
          },
        }).current;
      s.useEffect(() => {
        if (r) {
          let e = function (e) {
              if (m.paused || !c) return;
              let t = e.target;
              c.contains(t) ? (f.current = t) : X(f.current, { select: !0 });
            },
            t = function (e) {
              if (m.paused || !c) return;
              let t = e.relatedTarget;
              t !== null && (c.contains(t) || X(f.current, { select: !0 }));
            },
            n = function (e) {
              if (document.activeElement === document.body)
                for (let t of e) t.removedNodes.length > 0 && X(c);
            };
          Y(e, `handleFocusIn`),
            Y(t, `handleFocusOut`),
            Y(n, `handleMutations`),
            document.addEventListener(`focusin`, e),
            document.addEventListener(`focusout`, t);
          let r = new MutationObserver(n);
          return (
            c && r.observe(c, { childList: !0, subtree: !0 }),
            () => {
              document.removeEventListener(`focusin`, e),
                document.removeEventListener(`focusout`, t),
                r.disconnect();
            }
          );
        }
      }, [r, c, m.paused]),
        s.useEffect(() => {
          if (c) {
            Hn.add(m);
            let e = document.activeElement;
            if (!c.contains(e)) {
              let t = new CustomEvent(Mn, Pn);
              c.addEventListener(Mn, u),
                c.dispatchEvent(t),
                t.defaultPrevented ||
                  (In(Gn(Rn(c)), { select: !0 }),
                  document.activeElement === e && X(c));
            }
            return () => {
              c.removeEventListener(Mn, u),
                setTimeout(() => {
                  let t = new CustomEvent(Nn, Pn);
                  c.addEventListener(Nn, d),
                    c.dispatchEvent(t),
                    t.defaultPrevented || X(e ?? document.body, { select: !0 }),
                    c.removeEventListener(Nn, d),
                    Hn.remove(m);
                }, 0);
            };
          }
        }, [c, u, d, m]);
      let h = s.useCallback(
        (e) => {
          if ((!n && !r) || m.paused) return;
          let t = e.key === `Tab` && !e.altKey && !e.ctrlKey && !e.metaKey,
            i = document.activeElement;
          if (t && i) {
            let t = e.currentTarget,
              [r, a] = Ln(t);
            r && a
              ? !e.shiftKey && i === a
                ? (e.preventDefault(), n && X(r, { select: !0 }))
                : e.shiftKey &&
                  i === r &&
                  (e.preventDefault(), n && X(a, { select: !0 }))
              : i === t && e.preventDefault();
          }
        },
        [n, r, m.paused]
      );
      return (0, U.jsx)(q.div, { tabIndex: -1, ...o, ref: p, onKeyDown: h });
    }, `FocusScope`)
  );
function In(e, { select: t = !1 } = {}) {
  let n = document.activeElement;
  for (let r of e)
    if ((X(r, { select: t }), document.activeElement !== n)) return;
}
Y(In, `focusFirst`);
function Ln(e) {
  let t = Rn(e);
  return [zn(t, e), zn(t.reverse(), e)];
}
Y(Ln, `getTabbableEdges`);
function Rn(e) {
  let t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: Y((e) => {
        let t = e.tagName === `INPUT` && e.type === `hidden`;
        return e.disabled || e.hidden || t
          ? NodeFilter.FILTER_SKIP
          : e.tabIndex >= 0
          ? NodeFilter.FILTER_ACCEPT
          : NodeFilter.FILTER_SKIP;
      }, `acceptNode`),
    });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
Y(Rn, `getTabbableCandidates`);
function zn(e, t) {
  let n =
    typeof t.checkVisibility == `function` &&
    t.checkVisibility({ checkVisibilityCSS: !0 });
  for (let r of e)
    if (
      !(n ? !r.checkVisibility({ checkVisibilityCSS: !0 }) : Bn(r, { upTo: t }))
    )
      return r;
}
Y(zn, `findVisible`);
function Bn(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === `hidden`) return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === `none`) return !0;
    e = e.parentElement;
  }
  return !1;
}
Y(Bn, `isHidden`);
function Vn(e) {
  return e instanceof HTMLInputElement && `select` in e;
}
Y(Vn, `isSelectableInput`);
function X(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    let n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && Vn(e) && t && e.select();
  }
}
Y(X, `focus`);
var Hn = Un();
function Un() {
  let e = [];
  return {
    add(t) {
      let n = e[0];
      t !== n && n?.pause(), (e = Wn(e, t)), e.unshift(t);
    },
    remove(t) {
      (e = Wn(e, t)), e[0]?.resume();
    },
  };
}
Y(Un, `createFocusScopesStack`);
function Wn(e, t) {
  let n = [...e],
    r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
Y(Wn, `arrayRemove`);
function Gn(e) {
  return e.filter((e) => e.tagName !== `A`);
}
Y(Gn, `removeLinks`);
var Kn = Object.defineProperty,
  qn = s.forwardRef(
    ((e, t) => Kn(e, `name`, { value: t, configurable: !0 }))(function (e, t) {
      let { container: n, ...r } = e,
        [i, a] = s.useState(!1);
      K(() => a(!0), []);
      let o = n || (i && globalThis?.document?.body);
      return o ? dn.createPortal((0, U.jsx)(q.div, { ...r, ref: t }), o) : null;
    }, `Portal`)
  ),
  Jn = Object.defineProperty,
  Z = (e, t) => Jn(e, `name`, { value: t, configurable: !0 });
function Yn(e, t) {
  return s.useReducer((e, n) => t[e][n] ?? e, e);
}
Z(Yn, `useStateMachine`);
var Xn = Z((e) => {
  let { present: t, children: n } = e,
    r = Zn(t),
    i =
      typeof n == `function` ? n({ present: r.isPresent }) : s.Children.only(n),
    a = $n(r.ref, tr(i));
  return typeof n == `function` || r.isPresent
    ? s.cloneElement(i, { ref: a })
    : null;
}, `Presence`);
function Zn(e) {
  let [t, n] = s.useState(),
    r = s.useRef(null),
    i = s.useRef(e),
    a = s.useRef(`none`),
    o = s.useRef(void 0),
    [c, l] = Yn(e ? `mounted` : `unmounted`, {
      mounted: { UNMOUNT: `unmounted`, ANIMATION_OUT: `unmountSuspended` },
      unmountSuspended: { MOUNT: `mounted`, ANIMATION_END: `unmounted` },
      unmounted: { MOUNT: `mounted` },
    });
  return (
    s.useEffect(() => {
      c === `mounted`
        ? ((a.current = o.current ?? er(r.current)), (o.current = void 0))
        : (a.current = `none`);
    }, [c]),
    K(() => {
      let t = r.current,
        n = i.current;
      if (n !== e) {
        let r = a.current,
          s = er(t);
        e
          ? ((o.current = s), l(`MOUNT`))
          : s === `none` || t?.display === `none`
          ? l(`UNMOUNT`)
          : l(n && r !== s ? `ANIMATION_OUT` : `UNMOUNT`),
          (i.current = e);
      }
    }, [e, l]),
    K(() => {
      if (t) {
        let e,
          n = t.ownerDocument.defaultView ?? window,
          o = Z((a) => {
            let o = er(r.current).includes(CSS.escape(a.animationName));
            if (a.target === t && o && (l(`ANIMATION_END`), !i.current)) {
              let r = t.style.animationFillMode;
              (t.style.animationFillMode = `forwards`),
                (e = n.setTimeout(() => {
                  t.style.animationFillMode === `forwards` &&
                    (t.style.animationFillMode = r);
                }));
            }
          }, `handleAnimationEnd`),
          s = Z((e) => {
            e.target === t && (a.current = er(r.current));
          }, `handleAnimationStart`);
        return (
          t.addEventListener(`animationstart`, s),
          t.addEventListener(`animationcancel`, o),
          t.addEventListener(`animationend`, o),
          () => {
            n.clearTimeout(e),
              t.removeEventListener(`animationstart`, s),
              t.removeEventListener(`animationcancel`, o),
              t.removeEventListener(`animationend`, o);
          }
        );
      }
      l(`ANIMATION_END`);
    }, [t, l]),
    {
      isPresent: [`mounted`, `unmountSuspended`].includes(c),
      ref: s.useCallback((e) => {
        if (e) {
          let t = getComputedStyle(e);
          (r.current = t), (o.current = er(t));
        } else r.current = null;
        n(e);
      }, []),
    }
  );
}
Z(Zn, `usePresence`);
function Qn(e, t) {
  if (typeof e == `function`) return e(t);
  e != null && (e.current = t);
}
Z(Qn, `setRef`);
function $n(...e) {
  let t = s.useRef(e);
  return (
    (t.current = e),
    s.useCallback((e) => {
      let n = t.current,
        r = !1,
        i = n.map((t) => {
          let n = Qn(t, e);
          return !r && typeof n == `function` && (r = !0), n;
        });
      if (r)
        return () => {
          for (let e = 0; e < i.length; e++) {
            let t = i[e];
            typeof t == `function` ? t() : Qn(n[e], null);
          }
        };
    }, [])
  );
}
Z($n, `useStableComposedRefs`);
function er(e) {
  return e?.animationName || `none`;
}
Z(er, `getAnimationName`);
function tr(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, `ref`)?.get,
    n = t && `isReactWarning` in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t = Object.getOwnPropertyDescriptor(e, `ref`)?.get),
      (n = t && `isReactWarning` in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
Z(tr, `getElementRef`);
var nr = Object.defineProperty,
  rr = (e, t) => nr(e, `name`, { value: t, configurable: !0 }),
  ir = 0,
  ar = null;
function or(e) {
  return sr(), e.children;
}
rr(or, `FocusGuards`);
function sr() {
  s.useEffect(() => {
    ar ||= { start: cr(), end: cr() };
    let { start: e, end: t } = ar;
    return (
      document.body.firstElementChild !== e &&
        document.body.insertAdjacentElement(`afterbegin`, e),
      document.body.lastElementChild !== t &&
        document.body.insertAdjacentElement(`beforeend`, t),
      ir++,
      () => {
        ir === 1 && (ar?.start.remove(), ar?.end.remove(), (ar = null)),
          (ir = Math.max(0, ir - 1));
      }
    );
  }, []);
}
rr(sr, `useFocusGuards`);
function cr() {
  let e = document.createElement(`span`);
  return (
    e.setAttribute(`data-radix-focus-guard`, ``),
    (e.tabIndex = 0),
    (e.style.outline = `none`),
    (e.style.opacity = `0`),
    (e.style.position = `fixed`),
    (e.style.pointerEvents = `none`),
    e
  );
}
rr(cr, `createFocusGuard`);
var lr = `right-scroll-bar-position`,
  ur = `width-before-scroll-bar`,
  dr = `with-scroll-bars-hidden`,
  fr = `--removed-body-scroll-bar-size`;
function pr(e, t) {
  return typeof e == `function` ? e(t) : e && (e.current = t), e;
}
function mr(e, t) {
  var n = (0, s.useState)(function () {
    return {
      value: e,
      callback: t,
      facade: {
        get current() {
          return n.value;
        },
        set current(e) {
          var t = n.value;
          t !== e && ((n.value = e), n.callback(e, t));
        },
      },
    };
  })[0];
  return (n.callback = t), n.facade;
}
var hr = typeof window < `u` ? s.useLayoutEffect : s.useEffect,
  gr = new WeakMap();
function _r(e, t) {
  var n = mr(t || null, function (t) {
    return e.forEach(function (e) {
      return pr(e, t);
    });
  });
  return (
    hr(
      function () {
        var t = gr.get(n);
        if (t) {
          var r = new Set(t),
            i = new Set(e),
            a = n.current;
          r.forEach(function (e) {
            i.has(e) || pr(e, null);
          }),
            i.forEach(function (e) {
              r.has(e) || pr(e, a);
            });
        }
        gr.set(n, e);
      },
      [e]
    ),
    n
  );
}
function vr(e) {
  return e;
}
function yr(e, t) {
  t === void 0 && (t = vr);
  var n = [],
    r = !1;
  return {
    read: function () {
      if (r)
        throw Error(
          "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`."
        );
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function (e) {
      var i = t(e, r);
      return (
        n.push(i),
        function () {
          n = n.filter(function (e) {
            return e !== i;
          });
        }
      );
    },
    assignSyncMedium: function (e) {
      for (r = !0; n.length; ) {
        var t = n;
        (n = []), t.forEach(e);
      }
      n = {
        push: function (t) {
          return e(t);
        },
        filter: function () {
          return n;
        },
      };
    },
    assignMedium: function (e) {
      r = !0;
      var t = [];
      if (n.length) {
        var i = n;
        (n = []), i.forEach(e), (t = n);
      }
      var a = function () {
          var n = t;
          (t = []), n.forEach(e);
        },
        o = function () {
          return Promise.resolve().then(a);
        };
      o(),
        (n = {
          push: function (e) {
            t.push(e), o();
          },
          filter: function (e) {
            return (t = t.filter(e)), n;
          },
        });
    },
  };
}
function br(e) {
  e === void 0 && (e = {});
  var t = yr(null);
  return (t.options = o({ async: !0, ssr: !1 }, e)), t;
}
var xr = function (e) {
  var t = e.sideCar,
    r = n(e, [`sideCar`]);
  if (!t)
    throw Error(
      "Sidecar: please provide `sideCar` property to import the right car"
    );
  var i = t.read();
  if (!i) throw Error(`Sidecar medium not found`);
  return s.createElement(i, o({}, r));
};
xr.isSideCarExport = !0;
function Sr(e, t) {
  return e.useMedium(t), xr;
}
var Cr = br(),
  wr = function () {},
  Tr = s.forwardRef(function (e, t) {
    var r = s.useRef(null),
      i = s.useState({
        onScrollCapture: wr,
        onWheelCapture: wr,
        onTouchMoveCapture: wr,
      }),
      a = i[0],
      c = i[1],
      l = e.forwardProps,
      u = e.children,
      d = e.className,
      f = e.removeScrollBar,
      p = e.enabled,
      m = e.shards,
      h = e.sideCar,
      g = e.noRelative,
      _ = e.noIsolation,
      ee = e.inert,
      te = e.allowPinchZoom,
      v = e.as,
      ne = v === void 0 ? `div` : v,
      y = e.gapMode,
      b = n(e, [
        `forwardProps`,
        `children`,
        `className`,
        `removeScrollBar`,
        `enabled`,
        `shards`,
        `sideCar`,
        `noRelative`,
        `noIsolation`,
        `inert`,
        `allowPinchZoom`,
        `as`,
        `gapMode`,
      ]),
      x = h,
      S = _r([r, t]),
      re = o(o({}, b), a);
    return s.createElement(
      s.Fragment,
      null,
      p &&
        s.createElement(x, {
          sideCar: Cr,
          removeScrollBar: f,
          shards: m,
          noRelative: g,
          noIsolation: _,
          inert: ee,
          setCallbacks: c,
          allowPinchZoom: !!te,
          lockRef: r,
          gapMode: y,
        }),
      l
        ? s.cloneElement(s.Children.only(u), o(o({}, re), { ref: S }))
        : s.createElement(ne, o({}, re, { className: d, ref: S }), u)
    );
  });
(Tr.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }),
  (Tr.classNames = { fullWidth: ur, zeroRight: lr });
var Er,
  Dr = function () {
    if (Er) return Er;
    if (typeof __webpack_nonce__ < `u`) return __webpack_nonce__;
  };
function Or() {
  if (!document) return null;
  var e = document.createElement(`style`);
  e.type = `text/css`;
  var t = Dr();
  return t && e.setAttribute(`nonce`, t), e;
}
function kr(e, t) {
  e.styleSheet
    ? (e.styleSheet.cssText = t)
    : e.appendChild(document.createTextNode(t));
}
function Ar(e) {
  (document.head || document.getElementsByTagName(`head`)[0]).appendChild(e);
}
var jr = function () {
    var e = 0,
      t = null;
    return {
      add: function (n) {
        e == 0 && (t = Or()) && (kr(t, n), Ar(t)), e++;
      },
      remove: function () {
        e--,
          !e && t && (t.parentNode && t.parentNode.removeChild(t), (t = null));
      },
    };
  },
  Mr = function () {
    var e = jr();
    return function (t, n) {
      s.useEffect(
        function () {
          return (
            e.add(t),
            function () {
              e.remove();
            }
          );
        },
        [t && n]
      );
    };
  },
  Nr = function () {
    var e = Mr();
    return function (t) {
      var n = t.styles,
        r = t.dynamic;
      return e(n, r), null;
    };
  },
  Pr = { left: 0, top: 0, right: 0, gap: 0 },
  Fr = function (e) {
    return parseInt(e || ``, 10) || 0;
  },
  Ir = function (e) {
    var t = window.getComputedStyle(document.body),
      n = t[e === `padding` ? `paddingLeft` : `marginLeft`],
      r = t[e === `padding` ? `paddingTop` : `marginTop`],
      i = t[e === `padding` ? `paddingRight` : `marginRight`];
    return [Fr(n), Fr(r), Fr(i)];
  },
  Lr = function (e) {
    if ((e === void 0 && (e = `margin`), typeof window > `u`)) return Pr;
    var t = Ir(e),
      n = document.documentElement.clientWidth,
      r = window.innerWidth;
    return {
      left: t[0],
      top: t[1],
      right: t[2],
      gap: Math.max(0, r - n + t[2] - t[0]),
    };
  },
  Rr = Nr(),
  zr = `data-scroll-locked`,
  Br = function (e, t, n, r) {
    var i = e.left,
      a = e.top,
      o = e.right,
      s = e.gap;
    return (
      n === void 0 && (n = `margin`),
      `
  .${dr} {
   overflow: hidden ${r};
   padding-right: ${s}px ${r};
  }
  body[${zr}] {
    overflow: hidden ${r};
    overscroll-behavior: contain;
    ${[
      t && `position: relative ${r};`,
      n === `margin` &&
        `
    padding-left: ${i}px;
    padding-top: ${a}px;
    padding-right: ${o}px;
    margin-left:0;
    margin-top:0;
    margin-right: ${s}px ${r};
    `,
      n === `padding` && `padding-right: ${s}px ${r};`,
    ]
      .filter(Boolean)
      .join(``)}
  }
  
  .${lr} {
    right: ${s}px ${r};
  }
  
  .${ur} {
    margin-right: ${s}px ${r};
  }
  
  .${lr} .${lr} {
    right: 0 ${r};
  }
  
  .${ur} .${ur} {
    margin-right: 0 ${r};
  }
  
  body[${zr}] {
    ${fr}: ${s}px;
  }
`
    );
  },
  Vr = function () {
    var e = parseInt(
      document.body.getAttribute(`data-scroll-locked`) || `0`,
      10
    );
    return isFinite(e) ? e : 0;
  },
  Hr = function () {
    s.useEffect(function () {
      return (
        document.body.setAttribute(zr, (Vr() + 1).toString()),
        function () {
          var e = Vr() - 1;
          e <= 0
            ? document.body.removeAttribute(zr)
            : document.body.setAttribute(zr, e.toString());
        }
      );
    }, []);
  },
  Ur = function (e) {
    var t = e.noRelative,
      n = e.noImportant,
      r = e.gapMode,
      i = r === void 0 ? `margin` : r;
    Hr();
    var a = s.useMemo(
      function () {
        return Lr(i);
      },
      [i]
    );
    return s.createElement(Rr, { styles: Br(a, !t, i, n ? `` : `!important`) });
  },
  Wr = !1;
if (typeof window < `u`)
  try {
    var Gr = Object.defineProperty({}, "passive", {
      get: function () {
        return (Wr = !0), !0;
      },
    });
    window.addEventListener(`test`, Gr, Gr),
      window.removeEventListener(`test`, Gr, Gr);
  } catch {
    Wr = !1;
  }
var Kr = Wr ? { passive: !1 } : !1,
  qr = function (e) {
    return e.tagName === `TEXTAREA`;
  },
  Jr = function (e, t) {
    if (!(e instanceof Element)) return !1;
    var n = window.getComputedStyle(e);
    return (
      n[t] !== `hidden` &&
      !(n.overflowY === n.overflowX && !qr(e) && n[t] === `visible`)
    );
  },
  Yr = function (e) {
    return Jr(e, `overflowY`);
  },
  Xr = function (e) {
    return Jr(e, `overflowX`);
  },
  Zr = function (e, t) {
    var n = t.ownerDocument,
      r = t;
    do {
      if (
        (typeof ShadowRoot < `u` && r instanceof ShadowRoot && (r = r.host),
        ei(e, r))
      ) {
        var i = ti(e, r);
        if (i[1] > i[2]) return !0;
      }
      r = r.parentNode;
    } while (r && r !== n.body);
    return !1;
  },
  Qr = function (e) {
    return [e.scrollTop, e.scrollHeight, e.clientHeight];
  },
  $r = function (e) {
    return [e.scrollLeft, e.scrollWidth, e.clientWidth];
  },
  ei = function (e, t) {
    return e === `v` ? Yr(t) : Xr(t);
  },
  ti = function (e, t) {
    return e === `v` ? Qr(t) : $r(t);
  },
  ni = function (e, t) {
    return e === `h` && t === `rtl` ? -1 : 1;
  },
  ri = function (e, t, n, r, i) {
    var a = ni(e, window.getComputedStyle(t).direction),
      o = a * r,
      s = n.target,
      c = t.contains(s),
      l = !1,
      u = o > 0,
      d = 0,
      f = 0;
    do {
      if (!s) break;
      var p = ti(e, s),
        m = p[0],
        h = p[1] - p[2] - a * m;
      (m || h) && ei(e, s) && ((d += h), (f += m));
      var g = s.parentNode;
      s = g && g.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? g.host : g;
    } while ((!c && s !== document.body) || (c && (t.contains(s) || t === s)));
    return (
      ((u && ((i && Math.abs(d) < 1) || (!i && o > d))) ||
        (!u && ((i && Math.abs(f) < 1) || (!i && -o > f)))) &&
        (l = !0),
      l
    );
  },
  ii = function (e) {
    return `changedTouches` in e
      ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
      : [0, 0];
  },
  ai = function (e) {
    return [e.deltaX, e.deltaY];
  },
  oi = function (e) {
    return e && `current` in e ? e.current : e;
  },
  si = function (e, t) {
    return e[0] === t[0] && e[1] === t[1];
  },
  ci = function (e) {
    return `
  .block-interactivity-${e} {pointer-events: none;}
  .allow-interactivity-${e} {pointer-events: all;}
`;
  },
  li = 0,
  ui = [];
function di(e) {
  var t = s.useRef([]),
    n = s.useRef([0, 0]),
    r = s.useRef(),
    i = s.useState(li++)[0],
    o = s.useState(Nr)[0],
    c = s.useRef(e);
  s.useEffect(
    function () {
      c.current = e;
    },
    [e]
  ),
    s.useEffect(
      function () {
        if (e.inert) {
          document.body.classList.add(`block-interactivity-${i}`);
          var t = a([e.lockRef.current], (e.shards || []).map(oi), !0).filter(
            Boolean
          );
          return (
            t.forEach(function (e) {
              return e.classList.add(`allow-interactivity-${i}`);
            }),
            function () {
              document.body.classList.remove(`block-interactivity-${i}`),
                t.forEach(function (e) {
                  return e.classList.remove(`allow-interactivity-${i}`);
                });
            }
          );
        }
      },
      [e.inert, e.lockRef.current, e.shards]
    );
  var l = s.useCallback(function (e, t) {
      if (
        (`touches` in e && e.touches.length === 2) ||
        (e.type === `wheel` && e.ctrlKey)
      )
        return !c.current.allowPinchZoom;
      var i = ii(e),
        a = n.current,
        o = `deltaX` in e ? e.deltaX : a[0] - i[0],
        s = `deltaY` in e ? e.deltaY : a[1] - i[1],
        l,
        u = e.target,
        d = Math.abs(o) > Math.abs(s) ? `h` : `v`;
      if (`touches` in e && d === `h` && u.type === `range`) return !1;
      var f = window.getSelection(),
        p = f && f.anchorNode;
      if (p && (p === u || p.contains(u))) return !1;
      var m = Zr(d, u);
      if (!m) return !0;
      if ((m ? (l = d) : ((l = d === `v` ? `h` : `v`), (m = Zr(d, u))), !m))
        return !1;
      if (
        (!r.current && `changedTouches` in e && (o || s) && (r.current = l), !l)
      )
        return !0;
      var h = r.current || l;
      return ri(h, t, e, h === `h` ? o : s, !0);
    }, []),
    u = s.useCallback(function (e) {
      var n = e;
      if (!(!ui.length || ui[ui.length - 1] !== o)) {
        var r = `deltaY` in n ? ai(n) : ii(n),
          i = t.current.filter(function (e) {
            return (
              e.name === n.type &&
              (e.target === n.target || n.target === e.shadowParent) &&
              si(e.delta, r)
            );
          })[0];
        if (i && i.should) {
          n.cancelable && n.preventDefault();
          return;
        }
        if (!i) {
          var a = (c.current.shards || [])
            .map(oi)
            .filter(Boolean)
            .filter(function (e) {
              return e.contains(n.target);
            });
          (a.length > 0 ? l(n, a[0]) : !c.current.noIsolation) &&
            n.cancelable &&
            n.preventDefault();
        }
      }
    }, []),
    d = s.useCallback(function (e, n, r, i) {
      var a = { name: e, delta: n, target: r, should: i, shadowParent: fi(r) };
      t.current.push(a),
        setTimeout(function () {
          t.current = t.current.filter(function (e) {
            return e !== a;
          });
        }, 1);
    }, []),
    f = s.useCallback(function (e) {
      (n.current = ii(e)), (r.current = void 0);
    }, []),
    p = s.useCallback(function (t) {
      d(t.type, ai(t), t.target, l(t, e.lockRef.current));
    }, []),
    m = s.useCallback(function (t) {
      d(t.type, ii(t), t.target, l(t, e.lockRef.current));
    }, []);
  s.useEffect(function () {
    return (
      ui.push(o),
      e.setCallbacks({
        onScrollCapture: p,
        onWheelCapture: p,
        onTouchMoveCapture: m,
      }),
      document.addEventListener(`wheel`, u, Kr),
      document.addEventListener(`touchmove`, u, Kr),
      document.addEventListener(`touchstart`, f, Kr),
      function () {
        (ui = ui.filter(function (e) {
          return e !== o;
        })),
          document.removeEventListener(`wheel`, u, Kr),
          document.removeEventListener(`touchmove`, u, Kr),
          document.removeEventListener(`touchstart`, f, Kr);
      }
    );
  }, []);
  var h = e.removeScrollBar,
    g = e.inert;
  return s.createElement(
    s.Fragment,
    null,
    g ? s.createElement(o, { styles: ci(i) }) : null,
    h
      ? s.createElement(Ur, { noRelative: e.noRelative, gapMode: e.gapMode })
      : null
  );
}
function fi(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && ((t = e.host), (e = e.host)), (e = e.parentNode);
  return t;
}
var pi = Sr(Cr, di),
  mi = s.forwardRef(function (e, t) {
    return s.createElement(Tr, o({}, e, { ref: t, sideCar: pi }));
  });
mi.classNames = Tr.classNames;
var hi = function (e) {
    return typeof document > `u`
      ? null
      : (Array.isArray(e) ? e[0] : e).ownerDocument.body;
  },
  gi = new WeakMap(),
  _i = new WeakMap(),
  vi = {},
  yi = 0,
  bi = function (e) {
    return e && (e.host || bi(e.parentNode));
  },
  xi = function (e, t) {
    return t
      .map(function (t) {
        if (e.contains(t)) return t;
        var n = bi(t);
        return n && e.contains(n)
          ? n
          : (console.error(
              `aria-hidden`,
              t,
              `in not contained inside`,
              e,
              `. Doing nothing`
            ),
            null);
      })
      .filter(function (e) {
        return !!e;
      });
  },
  Si = function (e, t, n, r) {
    var i = xi(t, Array.isArray(e) ? e : [e]);
    vi[n] || (vi[n] = new WeakMap());
    var a = vi[n],
      o = [],
      s = new Set(),
      c = new Set(i),
      l = function (e) {
        !e || s.has(e) || (s.add(e), l(e.parentNode));
      };
    i.forEach(l);
    var u = function (e) {
      !e ||
        c.has(e) ||
        Array.prototype.forEach.call(e.children, function (e) {
          if (s.has(e)) u(e);
          else
            try {
              var t = e.getAttribute(r),
                i = t !== null && t !== `false`,
                c = (gi.get(e) || 0) + 1,
                l = (a.get(e) || 0) + 1;
              gi.set(e, c),
                a.set(e, l),
                o.push(e),
                c === 1 && i && _i.set(e, !0),
                l === 1 && e.setAttribute(n, `true`),
                i || e.setAttribute(r, `true`);
            } catch (t) {
              console.error(`aria-hidden: cannot operate on `, e, t);
            }
        });
    };
    return (
      u(t),
      s.clear(),
      yi++,
      function () {
        o.forEach(function (e) {
          var t = gi.get(e) - 1,
            i = a.get(e) - 1;
          gi.set(e, t),
            a.set(e, i),
            t || (_i.has(e) || e.removeAttribute(r), _i.delete(e)),
            i || e.removeAttribute(n);
        }),
          yi--,
          yi ||
            ((gi = new WeakMap()),
            (gi = new WeakMap()),
            (_i = new WeakMap()),
            (vi = {}));
      }
    );
  },
  Ci = function (e, t, n) {
    n === void 0 && (n = `data-aria-hidden`);
    var r = Array.from(Array.isArray(e) ? e : [e]),
      i = t || hi(e);
    return i
      ? (r.push.apply(r, Array.from(i.querySelectorAll(`[aria-live], script`))),
        Si(r, i, n, `aria-hidden`))
      : function () {
          return null;
        };
  },
  wi = Object.defineProperty,
  Q = (e, t) => wi(e, `name`, { value: t, configurable: !0 }),
  Ti = `Dialog`,
  [Ei, Di] = Wt(Ti),
  [Oi, $] = Ei(Ti),
  ki = Q((e) => {
    let {
        __scopeDialog: t,
        children: n,
        open: r,
        defaultOpen: i,
        onOpenChange: a,
        modal: o = !0,
      } = e,
      c = s.useRef(null),
      l = s.useRef(null),
      [u, d] = on({ prop: r, defaultProp: i ?? !1, onChange: a, caller: Ti }),
      [f, p] = s.useState(0),
      [m, h] = s.useState(0);
    return (0, U.jsx)(Oi, {
      scope: t,
      triggerRef: c,
      contentRef: l,
      contentId: Xt(),
      titleId: Xt(),
      descriptionId: Xt(),
      titlePresent: f > 0,
      descriptionPresent: m > 0,
      setTitleCount: p,
      setDescriptionCount: h,
      open: u,
      onOpenChange: d,
      onOpenToggle: s.useCallback(() => d((e) => !e), [d]),
      modal: o,
      children: n,
    });
  }, `Dialog`),
  Ai = `DialogTrigger`,
  ji = s.forwardRef(
    Q(function (e, t) {
      let { __scopeDialog: n, ...r } = e,
        i = $(Ai, n),
        a = S(t, i.triggerRef);
      return (0,
      U.jsx)(q.button, { type: `button`, "aria-haspopup": `dialog`, "aria-expanded": i.open, "aria-controls": i.open ? i.contentId : void 0, "data-state": Zi(i.open), ...r, ref: a, onClick: W(e.onClick, i.onOpenToggle) });
    }, `DialogTrigger`)
  ),
  Mi = `DialogPortal`,
  [Ni, Pi] = Ei(Mi, { forceMount: void 0 }),
  Fi = Q((e) => {
    let { __scopeDialog: t, forceMount: n, children: r, container: i } = e,
      a = $(Mi, t);
    return (0, U.jsx)(Ni, {
      scope: t,
      forceMount: n,
      children: s.Children.map(r, (e) =>
        (0, U.jsx)(Xn, {
          present: n || a.open,
          children: (0, U.jsx)(qn, { asChild: !0, container: i, children: e }),
        })
      ),
    });
  }, `DialogPortal`),
  Ii = `DialogOverlay`,
  Li = s.forwardRef(
    Q(function (e, t) {
      let n = Pi(Ii, e.__scopeDialog),
        { forceMount: r = n.forceMount, ...i } = e,
        a = $(Ii, e.__scopeDialog);
      return a.modal
        ? (0, U.jsx)(Xn, {
            present: r || a.open,
            children: (0, U.jsx)(zi, { ...i, ref: t }),
          })
        : null;
    }, `DialogOverlay`)
  ),
  Ri = w(`DialogOverlay.RemoveScroll`),
  zi = s.forwardRef(
    Q(function (e, t) {
      let { __scopeDialog: n, ...r } = e,
        i = $(Ii, n),
        a = S(t, Tn());
      return (0,
      U.jsx)(mi, { as: Ri, allowPinchZoom: !0, shards: [i.contentRef], children: (0, U.jsx)(q.div, { "data-state": Zi(i.open), ...r, ref: a, style: { pointerEvents: `auto`, ...r.style } }) });
    }, `DialogOverlayImpl`)
  ),
  Bi = `DialogContent`,
  Vi = s.forwardRef(
    Q(function (e, t) {
      let n = Pi(Bi, e.__scopeDialog),
        { forceMount: r = n.forceMount, ...i } = e,
        a = $(Bi, e.__scopeDialog);
      return (0,
      U.jsx)(Xn, { present: r || a.open, children: a.modal ? (0, U.jsx)(Hi, { ...i, ref: t }) : (0, U.jsx)(Ui, { ...i, ref: t }) });
    }, `DialogContent`)
  ),
  Hi = s.forwardRef(
    Q(function (e, t) {
      let n = $(Bi, e.__scopeDialog),
        r = s.useRef(null),
        i = S(t, n.contentRef, r);
      return (
        s.useEffect(() => {
          let e = r.current;
          if (e) return Ci(e);
        }, []),
        (0, U.jsx)(Wi, {
          ...e,
          ref: i,
          trapFocus: n.open,
          disableOutsidePointerEvents: n.open,
          onCloseAutoFocus: W(e.onCloseAutoFocus, (e) => {
            e.preventDefault(), n.triggerRef.current?.focus();
          }),
          onPointerDownOutside: W(e.onPointerDownOutside, (e) => {
            let t = e.detail.originalEvent,
              n = t.button === 0 && t.ctrlKey === !0;
            (t.button === 2 || n) && e.preventDefault();
          }),
          onFocusOutside: W(e.onFocusOutside, (e) => e.preventDefault()),
        })
      );
    }, `DialogContentModal`)
  ),
  Ui = s.forwardRef(
    Q(function (e, t) {
      let n = $(Bi, e.__scopeDialog),
        r = s.useRef(!1),
        i = s.useRef(!1);
      return (0, U.jsx)(Wi, {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (t) => {
          e.onCloseAutoFocus?.(t),
            t.defaultPrevented ||
              (r.current || n.triggerRef.current?.focus(), t.preventDefault()),
            (r.current = !1),
            (i.current = !1);
        },
        onInteractOutside: (t) => {
          e.onInteractOutside?.(t),
            t.defaultPrevented ||
              ((r.current = !0),
              t.detail.originalEvent.type === `pointerdown` &&
                (i.current = !0));
          let a = t.target;
          n.triggerRef.current?.contains(a) && t.preventDefault(),
            t.detail.originalEvent.type === `focusin` &&
              i.current &&
              t.preventDefault();
        },
      });
    }, `DialogContentNonModal`)
  ),
  Wi = s.forwardRef(
    Q(function (e, t) {
      let {
          __scopeDialog: n,
          trapFocus: r,
          onOpenAutoFocus: i,
          onCloseAutoFocus: a,
          ...o
        } = e,
        s = $(Bi, n);
      return (
        sr(),
        (0, U.jsx)(U.Fragment, {
          children: (0, U.jsx)(Fn, {
            asChild: !0,
            loop: !0,
            trapped: r,
            onMountAutoFocus: i,
            onUnmountAutoFocus: a,
            children: (0, U.jsx)(wn, {
              role: `dialog`,
              id: s.contentId,
              "aria-describedby": s.descriptionPresent
                ? s.descriptionId
                : void 0,
              "aria-labelledby": s.titlePresent ? s.titleId : void 0,
              "data-state": Zi(s.open),
              ...o,
              ref: t,
              deferPointerDownOutside: !0,
              onDismiss: () => s.onOpenChange(!1),
            }),
          }),
        })
      );
    }, `DialogContentImpl`)
  ),
  Gi = `DialogTitle`,
  Ki = s.forwardRef(
    Q(function (e, t) {
      let { __scopeDialog: n, ...r } = e,
        i = $(Gi, n),
        { setTitleCount: a } = i;
      return (
        K(() => (a((e) => e + 1), () => a((e) => e - 1)), [a]),
        (0, U.jsx)(q.h2, { id: i.titleId, ...r, ref: t })
      );
    }, `DialogTitle`)
  ),
  qi = `DialogDescription`,
  Ji = s.forwardRef(
    Q(function (e, t) {
      let { __scopeDialog: n, ...r } = e,
        i = $(qi, n),
        { setDescriptionCount: a } = i;
      return (
        K(() => (a((e) => e + 1), () => a((e) => e - 1)), [a]),
        (0, U.jsx)(q.p, { id: i.descriptionId, ...r, ref: t })
      );
    }, `DialogDescription`)
  ),
  Yi = `DialogClose`,
  Xi = s.forwardRef(
    Q(function (e, t) {
      let { __scopeDialog: n, ...r } = e,
        i = $(Yi, n);
      return (0,
      U.jsx)(q.button, { type: `button`, ...r, ref: t, onClick: W(e.onClick, () => i.onOpenChange(!1)) });
    }, `DialogClose`)
  );
function Zi(e) {
  return e ? `open` : `closed`;
}
Q(Zi, `getState`);
var Qi = ki,
  $i = ji,
  ea = Fi,
  ta = s.forwardRef(({ className: e, ...t }, n) =>
    (0, U.jsx)(Li, {
      ref: n,
      className: Mt(
        `fixed inset-0 z-50 bg-foreground/55 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0`,
        e
      ),
      ...t,
    })
  );
ta.displayName = Li.displayName;
var na = s.forwardRef(({ className: e, children: t, ...n }, r) =>
  (0, U.jsxs)(ea, {
    children: [
      (0, U.jsx)(ta, {}),
      (0, U.jsxs)(Vi, {
        ref: r,
        className: Mt(
          `fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg`,
          e
        ),
        ...n,
        children: [
          t,
          (0, U.jsxs)(Xi, {
            className: `absolute right-5 top-5 z-10 flex size-10 cursor-pointer items-center justify-center rounded-full border-2 border-foreground bg-pink-soft text-foreground shadow-cloud transition-all duration-200 hover:rotate-90 hover:scale-110 hover:bg-primary hover:text-primary-foreground active:scale-90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none`,
            children: [
              (0, U.jsx)(v, { className: `size-5`, strokeWidth: 3 }),
              (0, U.jsx)(`span`, { className: `sr-only`, children: `Close` }),
            ],
          }),
        ],
      }),
    ],
  })
);
na.displayName = Vi.displayName;
var ra = ({ className: e, ...t }) =>
  (0, U.jsx)(`div`, {
    className: Mt(`flex flex-col space-y-1.5 text-center sm:text-left`, e),
    ...t,
  });
ra.displayName = `DialogHeader`;
var ia = s.forwardRef(({ className: e, ...t }, n) =>
  (0, U.jsx)(Ki, {
    ref: n,
    className: Mt(`text-lg font-semibold leading-none tracking-tight`, e),
    ...t,
  })
);
ia.displayName = Ki.displayName;
var aa = s.forwardRef(({ className: e, ...t }, n) =>
  (0, U.jsx)(Ji, {
    ref: n,
    className: Mt(`text-sm text-muted-foreground`, e),
    ...t,
  })
);
aa.displayName = Ji.displayName;
var oa = {
  version: 1,
  asset_id: `76b1864d-7c5d-4f6d-b11c-71ee62761a0c`,
  project_id: `c25e4e5d-55ee-451d-bf44-221f3a966890`,
  url: `/__l5e/assets-v1/76b1864d-7c5d-4f6d-b11c-71ee62761a0c/x-logo.png`,
  r2_key: `a/v1/c25e4e5d-55ee-451d-bf44-221f3a966890/76b1864d-7c5d-4f6d-b11c-71ee62761a0c/x-logo.png`,
  original_filename: `x-logo.png`,
  size: 50614,
  content_type: `image/png`,
  created_at: `2026-09-22T02:06:33Z`,
};
export {
  ra as a,
  Pt as c,
  _ as d,
  g as f,
  aa as i,
  te as l,
  Qi as n,
  ia as o,
  h as p,
  na as r,
  $i as s,
  oa as t,
  ee as u,
};
