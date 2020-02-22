!(function(e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t(
        require("react"),
        require("draft-js"),
        require("immutable")
      ))
    : "function" == typeof define && define.amd
    ? define(["react", "draft-js", "immutable"], t)
    : "object" == typeof exports
    ? (exports.reactDraftWysiwyg = t(
        require("react"),
        require("draft-js"),
        require("immutable")
      ))
    : (e.reactDraftWysiwyg = t(e.react, e["draft-js"], e.immutable));
})(window, function(n, o, r) {
  return (
    (c = {}),
    (i.m = a = [
      function(e, t, n) {
        e.exports = n(9)();
      },
      function(e, t) {
        e.exports = n;
      },
      function(e, t, n) {
        var o;
        /*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
        !(function() {
          "use strict";
          var a = {}.hasOwnProperty;
          function c() {
            for (var e = [], t = 0; t < arguments.length; t++) {
              var n = arguments[t];
              if (n) {
                var o = typeof n;
                if ("string" == o || "number" == o) e.push(n);
                else if (Array.isArray(n) && n.length) {
                  var r = c.apply(null, n);
                  r && e.push(r);
                } else if ("object" == o)
                  for (var i in n) a.call(n, i) && n[i] && e.push(i);
              }
            }
            return e.join(" ");
          }
          e.exports
            ? ((c.default = c), (e.exports = c))
            : void 0 ===
                (o = function() {
                  return c;
                }.apply(t, [])) || (e.exports = o);
        })();
      },
      function(e, t) {
        e.exports = o;
      },
      function(e, t, n) {
        function r(e) {
          if (c[e]) return c[e].exports;
          var t = (c[e] = { i: e, l: !1, exports: {} });
          return a[e].call(t.exports, t, t.exports, r), (t.l = !0), t.exports;
        }
        var o, i, a, c;
        window,
          (e.exports =
            ((o = n(3)),
            (i = n(5)),
            (c = {}),
            (r.m = a = [
              function(e, t) {
                e.exports = o;
              },
              function(e, t) {
                e.exports = i;
              },
              function(e, t, n) {
                e.exports = n(3);
              },
              function(e, t, n) {
                "use strict";
                n.r(t);
                var b = n(0),
                  i = n(1);
                function j(e) {
                  var t = e.getSelection(),
                    n = e.getCurrentContent(),
                    o = t.getStartKey(),
                    r = t.getEndKey(),
                    i = n.getBlockMap();
                  return i
                    .toSeq()
                    .skipUntil(function(e, t) {
                      return t === o;
                    })
                    .takeUntil(function(e, t) {
                      return t === r;
                    })
                    .concat([[r, i.get(r)]]);
                }
                function u(e) {
                  return j(e).toList();
                }
                function l(e) {
                  if (e) return u(e).get(0);
                }
                function o(e) {
                  if (e) {
                    var n = l(e),
                      t = e
                        .getCurrentContent()
                        .getBlockMap()
                        .toSeq()
                        .toList(),
                      o = 0;
                    if (
                      (t.forEach(function(e, t) {
                        e.get("key") === n.get("key") && (o = t - 1);
                      }),
                      -1 < o)
                    )
                      return t.get(o);
                  }
                }
                function r(e) {
                  return e
                    ? e
                        .getCurrentContent()
                        .getBlockMap()
                        .toList()
                    : new i.List();
                }
                function a(e) {
                  var t = u(e);
                  if (
                    !t.some(function(e) {
                      return e.type !== t.get(0).type;
                    })
                  )
                    return t.get(0).type;
                }
                function c(e) {
                  var t = b.RichUtils.tryToRemoveBlockStyle(e);
                  return t ? b.EditorState.push(e, t, "change-block-type") : e;
                }
                function s(e) {
                  var t = "",
                    n = e.getSelection(),
                    o = n.getAnchorOffset(),
                    r = n.getFocusOffset(),
                    i = u(e);
                  if (0 < i.size) {
                    if (n.getIsBackward()) {
                      var a = o;
                      (o = r), (r = a);
                    }
                    for (var c = 0; c < i.size; c += 1) {
                      var l = 0 === c ? o : 0,
                        s = c === i.size - 1 ? r : i.get(c).getText().length;
                      t += i
                        .get(c)
                        .getText()
                        .slice(l, s);
                    }
                  }
                  return t;
                }
                function p(e) {
                  var t = e.getCurrentContent(),
                    n = e.getSelection(),
                    o = b.Modifier.removeRange(t, n, "forward"),
                    r = o.getSelectionAfter(),
                    i = o.getBlockForKey(r.getStartKey());
                  return (
                    (o = b.Modifier.insertText(
                      o,
                      r,
                      "\n",
                      i.getInlineStyleAt(r.getStartOffset()),
                      null
                    )),
                    b.EditorState.push(e, o, "insert-fragment")
                  );
                }
                function d(e) {
                  var t = b.Modifier.splitBlock(
                    e.getCurrentContent(),
                    e.getSelection()
                  );
                  return c(b.EditorState.push(e, t, "split-block"));
                }
                function m(e) {
                  var t = e
                      .getCurrentContent()
                      .getBlockMap()
                      .toList(),
                    n = e
                      .getSelection()
                      .merge({
                        anchorKey: t.first().get("key"),
                        anchorOffset: 0,
                        focusKey: t.last().get("key"),
                        focusOffset: t.last().getLength()
                      }),
                    o = b.Modifier.removeRange(
                      e.getCurrentContent(),
                      n,
                      "forward"
                    );
                  return b.EditorState.push(e, o, "remove-range");
                }
                function f(e, t) {
                  var n = b.Modifier.setBlockData(
                    e.getCurrentContent(),
                    e.getSelection(),
                    t
                  );
                  return b.EditorState.push(e, n, "change-block-data");
                }
                function g(e) {
                  var o = new i.Map({}),
                    t = u(e);
                  if (t && 0 < t.size)
                    for (
                      var n = function(e) {
                          var n = t.get(e).getData();
                          if (!n || 0 === n.size)
                            return (o = o.clear()), "break";
                          if (0 === e) o = n;
                          else if (
                            (o.forEach(function(e, t) {
                              (n.get(t) && n.get(t) === e) || (o = o.delete(t));
                            }),
                            0 === o.size)
                          )
                            return (o = o.clear()), "break";
                        },
                        r = 0;
                      r < t.size && "break" !== n(r);
                      r += 1
                    );
                  return o;
                }
                var y = Object(i.Map)({ code: { element: "pre" } }),
                  h = b.DefaultDraftBlockRenderMap.merge(y);
                function M(e) {
                  if (e) {
                    var t = e.getType();
                    return (
                      "unordered-list-item" === t || "ordered-list-item" === t
                    );
                  }
                  return !1;
                }
                function N(e, t, n) {
                  var o,
                    r = e.getSelection();
                  o = r.getIsBackward() ? r.getFocusKey() : r.getAnchorKey();
                  var i = e.getCurrentContent(),
                    a = i.getBlockForKey(o),
                    c = a.getType();
                  if ("unordered-list-item" !== c && "ordered-list-item" !== c)
                    return e;
                  var l = i.getBlockBefore(o);
                  if (!l) return e;
                  if (l.getType() !== c) return e;
                  var s = a.getDepth();
                  if (1 === t && s === n) return e;
                  var u,
                    p,
                    d,
                    m,
                    f,
                    g,
                    y,
                    h = Math.min(l.getDepth() + 1, n),
                    M =
                      ((p = t),
                      (d = h),
                      (m = (u = e).getSelection()),
                      (f = u.getCurrentContent()),
                      (g = f.getBlockMap()),
                      (y = j(u).map(function(e) {
                        var t = e.getDepth() + p;
                        return (
                          (t = Math.max(0, Math.min(t, d))), e.set("depth", t)
                        );
                      })),
                      (g = g.merge(y)),
                      f.merge({
                        blockMap: g,
                        selectionBefore: m,
                        selectionAfter: m
                      }));
                  return b.EditorState.push(e, M, "adjust-depth");
                }
                function S(e, t) {
                  var n;
                  return 13 === (n = t).which &&
                    (n.getModifierState("Shift") ||
                      n.getModifierState("Alt") ||
                      n.getModifierState("Control"))
                    ? e.getSelection().isCollapsed()
                      ? b.RichUtils.insertSoftNewline(e)
                      : p(e)
                    : (function(e) {
                        var t = e.getSelection();
                        if (t.isCollapsed()) {
                          var n = e.getCurrentContent(),
                            o = t.getStartKey(),
                            r = n.getBlockForKey(o);
                          if (
                            !M(r) &&
                            "unstyled" !== r.getType() &&
                            r.getLength() === t.getStartOffset()
                          )
                            return d(e);
                          if (M(r) && 0 === r.getLength()) {
                            var i = r.getDepth();
                            if (0 === i) return c(e);
                            if (0 < i) return N(e, -1, i);
                          }
                        }
                      })(e);
                }
                function E(t, e) {
                  var n = Object.keys(t);
                  if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(t);
                    e &&
                      (o = o.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                      })),
                      n.push.apply(n, o);
                  }
                  return n;
                }
                function C(e, t, n) {
                  return (
                    t in e
                      ? Object.defineProperty(e, t, {
                          value: n,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0
                        })
                      : (e[t] = n),
                    e
                  );
                }
                function L(e) {
                  return (L =
                    "function" == typeof Symbol &&
                    "symbol" == typeof Symbol.iterator
                      ? function(e) {
                          return typeof e;
                        }
                      : function(e) {
                          return e &&
                            "function" == typeof Symbol &&
                            e.constructor === Symbol &&
                            e !== Symbol.prototype
                            ? "symbol"
                            : typeof e;
                        })(e);
                }
                function k(e) {
                  var t = e.getSelection();
                  if (t.isCollapsed()) {
                    var n = {},
                      o = e
                        .getCurrentInlineStyle()
                        .toList()
                        .toJS();
                    if (o)
                      return (
                        [
                          "BOLD",
                          "ITALIC",
                          "UNDERLINE",
                          "STRIKETHROUGH",
                          "CODE",
                          "SUPERSCRIPT",
                          "SUBSCRIPT"
                        ].forEach(function(e) {
                          n[e] = 0 <= o.indexOf(e);
                        }),
                        n
                      );
                  }
                  var a = t.getStartOffset(),
                    c = t.getEndOffset(),
                    l = u(e);
                  if (0 < l.size) {
                    var r = (function() {
                      for (
                        var n = {
                            BOLD: !0,
                            ITALIC: !0,
                            UNDERLINE: !0,
                            STRIKETHROUGH: !0,
                            CODE: !0,
                            SUPERSCRIPT: !0,
                            SUBSCRIPT: !0
                          },
                          o = 0;
                        o < l.size;
                        o += 1
                      ) {
                        var e = 0 === o ? a : 0,
                          t = o === l.size - 1 ? c : l.get(o).getText().length;
                        e === t && 0 === e
                          ? ((e = 1), (t = 2))
                          : e === t && --e;
                        for (
                          var r = function(e) {
                              var t = l.get(o).getInlineStyleAt(e);
                              [
                                "BOLD",
                                "ITALIC",
                                "UNDERLINE",
                                "STRIKETHROUGH",
                                "CODE",
                                "SUPERSCRIPT",
                                "SUBSCRIPT"
                              ].forEach(function(e) {
                                n[e] = n[e] && t.get(e) === e;
                              });
                            },
                            i = e;
                          i < t;
                          i += 1
                        )
                          r(i);
                      }
                      return { v: n };
                    })();
                    if ("object" === L(r)) return r.v;
                  }
                  return {};
                }
                function D(e) {
                  var t,
                    n = e.getSelection(),
                    o = n.getStartOffset(),
                    r = n.getEndOffset();
                  o === r && 0 === o ? (r = 1) : o === r && --o;
                  for (var i = l(e), a = o; a < r; a += 1) {
                    var c = i.getEntityAt(a);
                    if (!c) {
                      t = void 0;
                      break;
                    }
                    if (a === o) t = c;
                    else if (t !== c) {
                      t = void 0;
                      break;
                    }
                  }
                  return t;
                }
                function v(e, t) {
                  var n,
                    o = l(e);
                  return (
                    o.findEntityRanges(
                      function(e) {
                        return e.get("entity") === t;
                      },
                      function(e, t) {
                        n = {
                          start: e,
                          end: t,
                          text: o.get("text").slice(e, t)
                        };
                      }
                    ),
                    n
                  );
                }
                function w(e, t, n) {
                  I[e]["".concat(e.toLowerCase(), "-").concat(n)] = C(
                    {},
                    "".concat(t),
                    n
                  );
                }
                function x() {
                  return (function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                      var n = null != arguments[e] ? arguments[e] : {};
                      e % 2
                        ? E(Object(n), !0).forEach(function(e) {
                            C(t, e, n[e]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                            t,
                            Object.getOwnPropertyDescriptors(n)
                          )
                        : E(Object(n)).forEach(function(e) {
                            Object.defineProperty(
                              t,
                              e,
                              Object.getOwnPropertyDescriptor(n, e)
                            );
                          });
                    }
                    return t;
                  })(
                    {},
                    I.color,
                    {},
                    I.bgcolor,
                    {},
                    I.fontSize,
                    {},
                    I.fontFamily,
                    {
                      CODE: I.CODE,
                      SUPERSCRIPT: I.SUPERSCRIPT,
                      SUBSCRIPT: I.SUBSCRIPT
                    }
                  );
                }
                var I = {
                  color: {},
                  bgcolor: {},
                  fontSize: {},
                  fontFamily: {},
                  CODE: {
                    fontFamily: "monospace",
                    wordWrap: "break-word",
                    background: "#f1f1f1",
                    borderRadius: 3,
                    padding: "1px 3px"
                  },
                  SUPERSCRIPT: {
                    fontSize: 11,
                    position: "relative",
                    top: -8,
                    display: "inline-flex"
                  },
                  SUBSCRIPT: {
                    fontSize: 11,
                    position: "relative",
                    bottom: -8,
                    display: "inline-flex"
                  }
                };
                function O(e, t, n) {
                  var o = e.getSelection(),
                    r = Object.keys(I[t]).reduce(function(e, t) {
                      return b.Modifier.removeInlineStyle(e, o, t);
                    }, e.getCurrentContent()),
                    i = b.EditorState.push(e, r, "changeinline-style"),
                    a = e.getCurrentInlineStyle();
                  if (
                    (o.isCollapsed() &&
                      (i = a.reduce(function(e, t) {
                        return b.RichUtils.toggleInlineStyle(e, t);
                      }, i)),
                    "SUPERSCRIPT" === t || "SUBSCRIPT" == t)
                  )
                    a.has(n) || (i = b.RichUtils.toggleInlineStyle(i, n));
                  else {
                    var c = "bgcolor" === t ? "backgroundColor" : t;
                    a.has("".concat(c, "-").concat(n)) ||
                      ((i = b.RichUtils.toggleInlineStyle(
                        i,
                        "".concat(t.toLowerCase(), "-").concat(n)
                      )),
                      w(t, c, n));
                  }
                  return i;
                }
                function A(e) {
                  e &&
                    e
                      .getCurrentContent()
                      .getBlockMap()
                      .map(function(e) {
                        return e.get("characterList");
                      })
                      .toList()
                      .flatten()
                      .forEach(function(e) {
                        e && 0 === e.indexOf("color-")
                          ? w("color", "color", e.substr(6))
                          : e && 0 === e.indexOf("bgcolor-")
                          ? w("bgcolor", "backgroundColor", e.substr(8))
                          : e && 0 === e.indexOf("fontsize-")
                          ? w("fontSize", "fontSize", +e.substr(9))
                          : e &&
                            0 === e.indexOf("fontfamily-") &&
                            w("fontFamily", "fontFamily", e.substr(11));
                      });
                }
                function T(e, t, n) {
                  var o = e
                    .getInlineStyleAt(n)
                    .toList()
                    .filter(function(e) {
                      return e.startsWith(t.toLowerCase());
                    });
                  if (o && 0 < o.size) return o.get(0);
                }
                function z(o, s) {
                  if (o && s && 0 < s.length) {
                    var e = (function() {
                      var e = o.getSelection(),
                        i = {};
                      if (e.isCollapsed())
                        return (
                          s.forEach(function(e) {
                            i[e] = (function(e, t) {
                              var n = e
                                .getCurrentInlineStyle()
                                .toList()
                                .filter(function(e) {
                                  return e.startsWith(t.toLowerCase());
                                });
                              if (n && 0 < n.size) return n.get(0);
                            })(o, e);
                          }),
                          { v: i }
                        );
                      var a = e.getStartOffset(),
                        c = e.getEndOffset(),
                        l = u(o);
                      if (0 < l.size) {
                        for (
                          var t = function(n) {
                              var e = 0 === n ? a : 0,
                                t =
                                  n === l.size - 1
                                    ? c
                                    : l.get(n).getText().length;
                              e === t && 0 === e
                                ? ((e = 1), (t = 2))
                                : e === t && --e;
                              for (
                                var o = function(t) {
                                    t === e
                                      ? s.forEach(function(e) {
                                          i[e] = T(l.get(n), e, t);
                                        })
                                      : s.forEach(function(e) {
                                          i[e] &&
                                            i[e] !== T(l.get(n), e, t) &&
                                            (i[e] = void 0);
                                        });
                                  },
                                  r = e;
                                r < t;
                                r += 1
                              )
                                o(r);
                            },
                            n = 0;
                          n < l.size;
                          n += 1
                        )
                          t(n);
                        return { v: i };
                      }
                    })();
                    if ("object" === L(e)) return e.v;
                  }
                  return {};
                }
                function _(t) {
                  var e = t.getCurrentInlineStyle(),
                    n = t.getCurrentContent();
                  return (
                    e.forEach(function(e) {
                      n = b.Modifier.removeInlineStyle(n, t.getSelection(), e);
                    }),
                    b.EditorState.push(t, n, "change-inline-style")
                  );
                }
                n.d(t, "isListBlock", function() {
                  return M;
                }),
                  n.d(t, "changeDepth", function() {
                    return N;
                  }),
                  n.d(t, "handleNewLine", function() {
                    return S;
                  }),
                  n.d(t, "getEntityRange", function() {
                    return v;
                  }),
                  n.d(t, "getCustomStyleMap", function() {
                    return x;
                  }),
                  n.d(t, "toggleCustomInlineStyle", function() {
                    return O;
                  }),
                  n.d(t, "getSelectionEntity", function() {
                    return D;
                  }),
                  n.d(t, "extractInlineStyle", function() {
                    return A;
                  }),
                  n.d(t, "removeAllInlineStyles", function() {
                    return _;
                  }),
                  n.d(t, "getSelectionInlineStyle", function() {
                    return k;
                  }),
                  n.d(t, "getSelectionCustomInlineStyle", function() {
                    return z;
                  }),
                  n.d(t, "getSelectedBlocksMap", function() {
                    return j;
                  }),
                  n.d(t, "getSelectedBlocksList", function() {
                    return u;
                  }),
                  n.d(t, "getSelectedBlock", function() {
                    return l;
                  }),
                  n.d(t, "getBlockBeforeSelectedBlock", function() {
                    return o;
                  }),
                  n.d(t, "getAllBlocks", function() {
                    return r;
                  }),
                  n.d(t, "getSelectedBlocksType", function() {
                    return a;
                  }),
                  n.d(t, "removeSelectedBlocksStyle", function() {
                    return c;
                  }),
                  n.d(t, "getSelectionText", function() {
                    return s;
                  }),
                  n.d(t, "addLineBreakRemovingSelection", function() {
                    return p;
                  }),
                  n.d(t, "insertNewUnstyledBlock", function() {
                    return d;
                  }),
                  n.d(t, "clearEditorContent", function() {
                    return m;
                  }),
                  n.d(t, "setBlockData", function() {
                    return f;
                  }),
                  n.d(t, "getSelectedBlocksMetadata", function() {
                    return g;
                  }),
                  n.d(t, "blockRenderMap", function() {
                    return h;
                  });
              }
            ]),
            (r.c = c),
            (r.d = function(e, t, n) {
              r.o(e, t) ||
                Object.defineProperty(e, t, { enumerable: !0, get: n });
            }),
            (r.r = function(e) {
              "undefined" != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, {
                  value: "Module"
                }),
                Object.defineProperty(e, "__esModule", { value: !0 });
            }),
            (r.t = function(t, e) {
              if ((1 & e && (t = r(t)), 8 & e)) return t;
              if (4 & e && "object" == typeof t && t && t.__esModule) return t;
              var n = Object.create(null);
              if (
                (r.r(n),
                Object.defineProperty(n, "default", {
                  enumerable: !0,
                  value: t
                }),
                2 & e && "string" != typeof t)
              )
                for (var o in t)
                  r.d(
                    n,
                    o,
                    function(e) {
                      return t[e];
                    }.bind(null, o)
                  );
              return n;
            }),
            (r.n = function(e) {
              var t =
                e && e.__esModule
                  ? function() {
                      return e.default;
                    }
                  : function() {
                      return e;
                    };
              return r.d(t, "a", t), t;
            }),
            (r.o = function(e, t) {
              return Object.prototype.hasOwnProperty.call(e, t);
            }),
            (r.p = ""),
            r((r.s = 2))));
      },
      function(e, t) {
        e.exports = r;
      },
      function(e, t, n) {
        function r(e) {
          if (c[e]) return c[e].exports;
          var t = (c[e] = { i: e, l: !1, exports: {} });
          return a[e].call(t.exports, t, t.exports, r), (t.l = !0), t.exports;
        }
        var o, i, a, c;
        window,
          (e.exports =
            ((o = n(5)),
            (i = n(3)),
            (c = {}),
            (r.m = a = [
              function(e, t) {
                e.exports = o;
              },
              function(e, t) {
                e.exports = i;
              },
              function(e, t, n) {
                e.exports = n(3);
              },
              function(e, t, n) {
                "use strict";
                n.r(t);
                var j = n(1),
                  s = n(0),
                  N = function(e, t, n) {
                    var o,
                      r = e.textContent;
                    return "" === r.trim()
                      ? {
                          chunk:
                            ((o = n),
                            {
                              text: " ",
                              inlines: [new s.OrderedSet()],
                              entities: [o],
                              blocks: []
                            })
                        }
                      : {
                          chunk: {
                            text: r,
                            inlines: Array(r.length).fill(t),
                            entities: Array(r.length).fill(n),
                            blocks: []
                          }
                        };
                  },
                  S = function() {
                    return {
                      text: "\n",
                      inlines: [new s.OrderedSet()],
                      entities: new Array(1),
                      blocks: []
                    };
                  },
                  E = function() {
                    return { text: "", inlines: [], entities: [], blocks: [] };
                  },
                  C = function(e, t) {
                    return {
                      text: "",
                      inlines: [],
                      entities: [],
                      blocks: [{ type: e, depth: 0, data: t || new s.Map({}) }]
                    };
                  },
                  L = function(e, t, n) {
                    return {
                      text: "\r",
                      inlines: [],
                      entities: [],
                      blocks: [
                        {
                          type: e,
                          depth: Math.max(0, Math.min(4, t)),
                          data: n || new s.Map({})
                        }
                      ]
                    };
                  },
                  k = function(e) {
                    return {
                      text: "\r ",
                      inlines: [new s.OrderedSet()],
                      entities: [e],
                      blocks: [
                        { type: "atomic", depth: 0, data: new s.Map({}) }
                      ]
                    };
                  },
                  D = function(e, t) {
                    return {
                      text: e.text + t.text,
                      inlines: e.inlines.concat(t.inlines),
                      entities: e.entities.concat(t.entities),
                      blocks: e.blocks.concat(t.blocks)
                    };
                  },
                  v = new s.Map({
                    "header-one": { element: "h1" },
                    "header-two": { element: "h2" },
                    "header-three": { element: "h3" },
                    "header-four": { element: "h4" },
                    "header-five": { element: "h5" },
                    "header-six": { element: "h6" },
                    "unordered-list-item": { element: "li", wrapper: "ul" },
                    "ordered-list-item": { element: "li", wrapper: "ol" },
                    blockquote: { element: "blockquote" },
                    code: { element: "pre" },
                    atomic: { element: "figure" },
                    unstyled: { element: "p", aliasedElements: ["div"] }
                  }),
                  w = {
                    code: "CODE",
                    del: "STRIKETHROUGH",
                    em: "ITALIC",
                    strong: "BOLD",
                    ins: "UNDERLINE",
                    sub: "SUBSCRIPT",
                    sup: "SUPERSCRIPT"
                  };
                function x(e) {
                  return e.style.textAlign
                    ? new s.Map({ "text-align": e.style.textAlign })
                    : e.style.marginLeft
                    ? new s.Map({ "margin-left": e.style.marginLeft })
                    : void 0;
                }
                var I = function(e) {
                  var t = void 0;
                  if (e instanceof HTMLAnchorElement) {
                    var n = {};
                    t =
                      e.dataset && void 0 !== e.dataset.mention
                        ? ((n.url = e.href),
                          (n.text = e.innerHTML),
                          (n.value = e.dataset.value),
                          j.Entity.__create("MENTION", "IMMUTABLE", n))
                        : ((n.url =
                            (e.getAttribute && e.getAttribute("href")) ||
                            e.href),
                          (n.title = e.innerHTML),
                          (n.targetOption = e.target),
                          j.Entity.__create("LINK", "MUTABLE", n));
                  }
                  return t;
                };
                n.d(t, "default", function() {
                  return o;
                });
                var u = " ",
                  p = new RegExp("&nbsp;", "g"),
                  O = !0;
                function o(e, t) {
                  var n,
                    o,
                    r,
                    i =
                      ((n = t),
                      (o = e.trim().replace(p, u)),
                      (r = (function(e) {
                        var t,
                          n = null;
                        return (
                          document.implementation &&
                            document.implementation.createHTMLDocument &&
                            (((t = document.implementation.createHTMLDocument(
                              "foo"
                            )).documentElement.innerHTML = e),
                            (n = t.getElementsByTagName("body")[0])),
                          n
                        );
                      })(o))
                        ? ((O = !0),
                          {
                            chunk: (function e(t, n, o, r, i, a) {
                              var c = t.nodeName.toLowerCase();
                              if (a) {
                                var l = a(c, t);
                                if (l) {
                                  var s = j.Entity.__create(
                                    l.type,
                                    l.mutability,
                                    l.data || {}
                                  );
                                  return { chunk: k(s) };
                                }
                              }
                              if ("#text" === c && "\n" !== t.textContent)
                                return N(t, n, i);
                              if ("br" === c) return { chunk: S() };
                              if (
                                "img" === c &&
                                t instanceof HTMLImageElement
                              ) {
                                var u = {};
                                (u.src =
                                  (t.getAttribute && t.getAttribute("src")) ||
                                  t.src),
                                  (u.alt = t.alt),
                                  (u.height = t.style.height),
                                  (u.width = t.style.width),
                                  t.style.float &&
                                    (u.alignment = t.style.float);
                                var p = j.Entity.__create(
                                  "IMAGE",
                                  "MUTABLE",
                                  u
                                );
                                return { chunk: k(p) };
                              }
                              if (
                                "video" === c &&
                                t instanceof HTMLVideoElement
                              ) {
                                var d = {};
                                (d.src =
                                  (t.getAttribute && t.getAttribute("src")) ||
                                  t.src),
                                  (d.alt = t.alt),
                                  (d.height = t.style.height),
                                  (d.width = t.style.width),
                                  t.style.float &&
                                    (d.alignment = t.style.float);
                                var m = j.Entity.__create(
                                  "VIDEO",
                                  "MUTABLE",
                                  d
                                );
                                return { chunk: k(m) };
                              }
                              if (
                                "iframe" === c &&
                                t instanceof HTMLIFrameElement
                              ) {
                                var f = {};
                                (f.src =
                                  (t.getAttribute && t.getAttribute("src")) ||
                                  t.src),
                                  (f.height = t.height),
                                  (f.width = t.width);
                                var g = j.Entity.__create(
                                  "EMBEDDED_LINK",
                                  "MUTABLE",
                                  f
                                );
                                return { chunk: k(g) };
                              }
                              var y,
                                h = (function(t, n) {
                                  var e = v
                                    .filter(function(e) {
                                      return (
                                        (e.element === t &&
                                          (!e.wrapper || e.wrapper === n)) ||
                                        e.wrapper === t ||
                                        (e.aliasedElements &&
                                          -1 < e.aliasedElements.indexOf(t))
                                      );
                                    })
                                    .keySeq()
                                    .toSet()
                                    .toArray();
                                  if (1 === e.length) return e[0];
                                })(c, r);
                              h &&
                                ("ul" === c || "ol" === c
                                  ? ((r = c), (o += 1))
                                  : ("unordered-list-item" !== h &&
                                      "ordered-list-item" !== h &&
                                      ((r = ""), (o = -1)),
                                    O
                                      ? ((y = C(h, x(t))), (O = !1))
                                      : (y = L(h, o, x(t))))),
                                (y = y || E()),
                                (n = (function(e, t, n) {
                                  var o,
                                    r = w[e];
                                  if (r) o = n.add(r).toOrderedSet();
                                  else if (t instanceof HTMLElement) {
                                    var l = t;
                                    o = (o = n)
                                      .withMutations(function(e) {
                                        var t = l.style.color,
                                          n = l.style.backgroundColor,
                                          o = l.style.fontSize,
                                          r = l.style.fontFamily.replace(
                                            /^"|"$/g,
                                            ""
                                          ),
                                          i = l.style.fontWeight,
                                          a = l.style.textDecoration,
                                          c = l.style.fontStyle;
                                        t &&
                                          e.add(
                                            "color-".concat(t.replace(/ /g, ""))
                                          ),
                                          n &&
                                            e.add(
                                              "bgcolor-".concat(
                                                n.replace(/ /g, "")
                                              )
                                            ),
                                          o &&
                                            e.add(
                                              "fontsize-".concat(
                                                o.replace(/px$/g, "")
                                              )
                                            ),
                                          r && e.add("fontfamily-".concat(r)),
                                          "bold" === i && e.add(w.strong),
                                          "underline" === a && e.add(w.ins),
                                          "italic" === c && e.add(w.em);
                                      })
                                      .toOrderedSet();
                                  }
                                  return o;
                                })(c, t, n));
                              for (var M = t.firstChild; M; ) {
                                var b = e(M, n, o, r, I(M) || i, a).chunk;
                                (y = D(y, b)), (M = M.nextSibling);
                              }
                              return { chunk: y };
                            })(r, new s.OrderedSet(), -1, "", void 0, n).chunk
                          })
                        : null);
                  if (i) {
                    var a = i.chunk,
                      c = new s.OrderedMap({});
                    a.entities &&
                      a.entities.forEach(function(e) {
                        e && (c = c.set(e, j.Entity.__get(e)));
                      });
                    var l = 0;
                    return {
                      contentBlocks: a.text.split("\r").map(function(e, t) {
                        var n = l + e.length,
                          o = a && a.inlines.slice(l, n),
                          r = a && a.entities.slice(l, n),
                          i = new s.List(
                            o.map(function(e, t) {
                              var n = { style: e, entity: null };
                              return (
                                r[t] && (n.entity = r[t]),
                                j.CharacterMetadata.create(n)
                              );
                            })
                          );
                        return (
                          (l = n),
                          new j.ContentBlock({
                            key: Object(j.genKey)(),
                            type:
                              (a && a.blocks[t] && a.blocks[t].type) ||
                              "unstyled",
                            depth: a && a.blocks[t] && a.blocks[t].depth,
                            data:
                              (a && a.blocks[t] && a.blocks[t].data) ||
                              new s.Map({}),
                            text: e,
                            characterList: i
                          })
                        );
                      }),
                      entityMap: c
                    };
                  }
                  return null;
                }
              }
            ]),
            (r.c = c),
            (r.d = function(e, t, n) {
              r.o(e, t) ||
                Object.defineProperty(e, t, { enumerable: !0, get: n });
            }),
            (r.r = function(e) {
              "undefined" != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, {
                  value: "Module"
                }),
                Object.defineProperty(e, "__esModule", { value: !0 });
            }),
            (r.t = function(t, e) {
              if ((1 & e && (t = r(t)), 8 & e)) return t;
              if (4 & e && "object" == typeof t && t && t.__esModule) return t;
              var n = Object.create(null);
              if (
                (r.r(n),
                Object.defineProperty(n, "default", {
                  enumerable: !0,
                  value: t
                }),
                2 & e && "string" != typeof t)
              )
                for (var o in t)
                  r.d(
                    n,
                    o,
                    function(e) {
                      return t[e];
                    }.bind(null, o)
                  );
              return n;
            }),
            (r.n = function(e) {
              var t =
                e && e.__esModule
                  ? function() {
                      return e.default;
                    }
                  : function() {
                      return e;
                    };
              return r.d(t, "a", t), t;
            }),
            (r.o = function(e, t) {
              return Object.prototype.hasOwnProperty.call(e, t);
            }),
            (r.p = ""),
            r((r.s = 2))));
      },
      function(e, t, l) {
        "use strict";
        function o(n) {
          return (
            Array.prototype.slice.call(arguments, 1).forEach(function(t) {
              t &&
                Object.keys(t).forEach(function(e) {
                  n[e] = t[e];
                });
            }),
            n
          );
        }
        function s(e) {
          return Object.prototype.toString.call(e);
        }
        function u(e) {
          return "[object Function]" === s(e);
        }
        function p(e) {
          return e.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
        }
        var r = { fuzzyLink: !0, fuzzyEmail: !0, fuzzyIP: !1 };
        var i = {
            "http:": {
              validate: function(e, t, n) {
                var o = e.slice(t);
                return (
                  n.re.http ||
                    (n.re.http = new RegExp(
                      "^\\/\\/" +
                        n.re.src_auth +
                        n.re.src_host_port_strict +
                        n.re.src_path,
                      "i"
                    )),
                  n.re.http.test(o) ? o.match(n.re.http)[0].length : 0
                );
              }
            },
            "https:": "http:",
            "ftp:": "http:",
            "//": {
              validate: function(e, t, n) {
                var o = e.slice(t);
                return (
                  n.re.no_http ||
                    (n.re.no_http = new RegExp(
                      "^" +
                        n.re.src_auth +
                        "(?:localhost|(?:(?:" +
                        n.re.src_domain +
                        ")\\.)+" +
                        n.re.src_domain_root +
                        ")" +
                        n.re.src_port +
                        n.re.src_host_terminator +
                        n.re.src_path,
                      "i"
                    )),
                  n.re.no_http.test(o)
                    ? 3 <= t && ":" === e[t - 3]
                      ? 0
                      : 3 <= t && "/" === e[t - 3]
                      ? 0
                      : o.match(n.re.no_http)[0].length
                    : 0
                );
              }
            },
            "mailto:": {
              validate: function(e, t, n) {
                var o = e.slice(t);
                return (
                  n.re.mailto ||
                    (n.re.mailto = new RegExp(
                      "^" + n.re.src_email_name + "@" + n.re.src_host_strict,
                      "i"
                    )),
                  n.re.mailto.test(o) ? o.match(n.re.mailto)[0].length : 0
                );
              }
            }
          },
          d =
            "a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]",
          a = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split(
            "|"
          );
        function m() {
          return function(e, t) {
            t.normalize(e);
          };
        }
        function c(r) {
          var t = (r.re = l(21)(r.__opts__)),
            e = r.__tlds__.slice();
          function n(e) {
            return e.replace("%TLDS%", t.src_tlds);
          }
          r.onCompile(),
            r.__tlds_replaced__ || e.push(d),
            e.push(t.src_xn),
            (t.src_tlds = e.join("|")),
            (t.email_fuzzy = RegExp(n(t.tpl_email_fuzzy), "i")),
            (t.link_fuzzy = RegExp(n(t.tpl_link_fuzzy), "i")),
            (t.link_no_ip_fuzzy = RegExp(n(t.tpl_link_no_ip_fuzzy), "i")),
            (t.host_fuzzy_test = RegExp(n(t.tpl_host_fuzzy_test), "i"));
          var i = [];
          function a(e, t) {
            throw new Error('(LinkifyIt) Invalid schema "' + e + '": ' + t);
          }
          (r.__compiled__ = {}),
            Object.keys(r.__schemas__).forEach(function(e) {
              var t = r.__schemas__[e];
              if (null !== t) {
                var o,
                  n = { validate: null, link: null };
                if (((r.__compiled__[e] = n), "[object Object]" === s(t)))
                  return (
                    "[object RegExp]" === s(t.validate)
                      ? (n.validate =
                          ((o = t.validate),
                          function(e, t) {
                            var n = e.slice(t);
                            return o.test(n) ? n.match(o)[0].length : 0;
                          }))
                      : u(t.validate)
                      ? (n.validate = t.validate)
                      : a(e, t),
                    void (u(t.normalize)
                      ? (n.normalize = t.normalize)
                      : t.normalize
                      ? a(e, t)
                      : (n.normalize = m()))
                  );
                if ("[object String]" !== s(t)) a(e, t);
                else i.push(e);
              }
            }),
            i.forEach(function(e) {
              r.__compiled__[r.__schemas__[e]] &&
                ((r.__compiled__[e].validate =
                  r.__compiled__[r.__schemas__[e]].validate),
                (r.__compiled__[e].normalize =
                  r.__compiled__[r.__schemas__[e]].normalize));
            }),
            (r.__compiled__[""] = { validate: null, normalize: m() });
          var o,
            c = Object.keys(r.__compiled__)
              .filter(function(e) {
                return 0 < e.length && r.__compiled__[e];
              })
              .map(p)
              .join("|");
          (r.re.schema_test = RegExp(
            "(^|(?!_)(?:[><｜]|" + t.src_ZPCc + "))(" + c + ")",
            "i"
          )),
            (r.re.schema_search = RegExp(
              "(^|(?!_)(?:[><｜]|" + t.src_ZPCc + "))(" + c + ")",
              "ig"
            )),
            (r.re.pretest = RegExp(
              "(" +
                r.re.schema_test.source +
                ")|(" +
                r.re.host_fuzzy_test.source +
                ")|@",
              "i"
            )),
            ((o = r).__index__ = -1),
            (o.__text_cache__ = "");
        }
        function f(e, t) {
          var n = e.__index__,
            o = e.__last_index__,
            r = e.__text_cache__.slice(n, o);
          (this.schema = e.__schema__.toLowerCase()),
            (this.index = n + t),
            (this.lastIndex = o + t),
            (this.raw = r),
            (this.text = r),
            (this.url = r);
        }
        function g(e, t) {
          var n = new f(e, t);
          return e.__compiled__[n.schema].normalize(n, e), n;
        }
        function y(e, t) {
          if (!(this instanceof y)) return new y(e, t);
          var n;
          t ||
            ((n = e),
            Object.keys(n || {}).reduce(function(e, t) {
              return e || r.hasOwnProperty(t);
            }, !1) && ((t = e), (e = {}))),
            (this.__opts__ = o({}, r, t)),
            (this.__index__ = -1),
            (this.__last_index__ = -1),
            (this.__schema__ = ""),
            (this.__text_cache__ = ""),
            (this.__schemas__ = o({}, i, e)),
            (this.__compiled__ = {}),
            (this.__tlds__ = a),
            (this.__tlds_replaced__ = !1),
            (this.re = {}),
            c(this);
        }
        (y.prototype.add = function(e, t) {
          return (this.__schemas__[e] = t), c(this), this;
        }),
          (y.prototype.set = function(e) {
            return (this.__opts__ = o(this.__opts__, e)), this;
          }),
          (y.prototype.test = function(e) {
            if (((this.__text_cache__ = e), (this.__index__ = -1), !e.length))
              return !1;
            var t, n, o, r, i, a, c, l;
            if (this.re.schema_test.test(e))
              for (
                (c = this.re.schema_search).lastIndex = 0;
                null !== (t = c.exec(e));

              )
                if ((r = this.testSchemaAt(e, t[2], c.lastIndex))) {
                  (this.__schema__ = t[2]),
                    (this.__index__ = t.index + t[1].length),
                    (this.__last_index__ = t.index + t[0].length + r);
                  break;
                }
            return (
              this.__opts__.fuzzyLink &&
                this.__compiled__["http:"] &&
                0 <= (l = e.search(this.re.host_fuzzy_test)) &&
                (this.__index__ < 0 || l < this.__index__) &&
                null !==
                  (n = e.match(
                    this.__opts__.fuzzyIP
                      ? this.re.link_fuzzy
                      : this.re.link_no_ip_fuzzy
                  )) &&
                ((i = n.index + n[1].length),
                (this.__index__ < 0 || i < this.__index__) &&
                  ((this.__schema__ = ""),
                  (this.__index__ = i),
                  (this.__last_index__ = n.index + n[0].length))),
              this.__opts__.fuzzyEmail &&
                this.__compiled__["mailto:"] &&
                0 <= e.indexOf("@") &&
                null !== (o = e.match(this.re.email_fuzzy)) &&
                ((i = o.index + o[1].length),
                (a = o.index + o[0].length),
                (this.__index__ < 0 ||
                  i < this.__index__ ||
                  (i === this.__index__ && a > this.__last_index__)) &&
                  ((this.__schema__ = "mailto:"),
                  (this.__index__ = i),
                  (this.__last_index__ = a))),
              0 <= this.__index__
            );
          }),
          (y.prototype.pretest = function(e) {
            return this.re.pretest.test(e);
          }),
          (y.prototype.testSchemaAt = function(e, t, n) {
            return this.__compiled__[t.toLowerCase()]
              ? this.__compiled__[t.toLowerCase()].validate(e, n, this)
              : 0;
          }),
          (y.prototype.match = function(e) {
            var t = 0,
              n = [];
            0 <= this.__index__ &&
              this.__text_cache__ === e &&
              (n.push(g(this, t)), (t = this.__last_index__));
            for (var o = t ? e.slice(t) : e; this.test(o); )
              n.push(g(this, t)),
                (o = o.slice(this.__last_index__)),
                (t += this.__last_index__);
            return n.length ? n : null;
          }),
          (y.prototype.tlds = function(e, t) {
            return (
              (e = Array.isArray(e) ? e : [e]),
              t
                ? (this.__tlds__ = this.__tlds__
                    .concat(e)
                    .sort()
                    .filter(function(e, t, n) {
                      return e !== n[t - 1];
                    })
                    .reverse())
                : ((this.__tlds__ = e.slice()), (this.__tlds_replaced__ = !0)),
              c(this),
              this
            );
          }),
          (y.prototype.normalize = function(e) {
            e.schema || (e.url = "http://" + e.url),
              "mailto:" !== e.schema ||
                /^mailto:/i.test(e.url) ||
                (e.url = "mailto:" + e.url);
          }),
          (y.prototype.onCompile = function() {}),
          (e.exports = y);
      },
      function(e, t, n) {
        e.exports = n(40);
      },
      function(e, t, n) {
        "use strict";
        var c = n(10);
        function o() {}
        function r() {}
        (r.resetWarningCache = o),
          (e.exports = function() {
            function e(e, t, n, o, r, i) {
              if (i !== c) {
                var a = new Error(
                  "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
                );
                throw ((a.name = "Invariant Violation"), a);
              }
            }
            function t() {
              return e;
            }
            var n = {
              array: (e.isRequired = e),
              bool: e,
              func: e,
              number: e,
              object: e,
              string: e,
              symbol: e,
              any: e,
              arrayOf: t,
              element: e,
              elementType: e,
              instanceOf: t,
              node: e,
              objectOf: t,
              oneOf: t,
              oneOfType: t,
              shape: t,
              exact: t,
              checkPropTypes: r,
              resetWarningCache: o
            };
            return (n.PropTypes = n);
          });
      },
      function(e, t, n) {
        "use strict";
        e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
      },
      function(e, t, n) {},
      function(e, t, n) {},
      function(e, t, n) {},
      function(e, t, n) {},
      function(e, t, n) {},
      function(e, t, n) {},
      function(e, t, n) {},
      function(e, t, n) {},
      function(e, t, n) {},
      function(e, t, n) {},
      function(e, t, o) {
        "use strict";
        e.exports = function(e) {
          var t = {};
          (t.src_Any = o(22).source),
            (t.src_Cc = o(23).source),
            (t.src_Z = o(24).source),
            (t.src_P = o(25).source),
            (t.src_ZPCc = [t.src_Z, t.src_P, t.src_Cc].join("|")),
            (t.src_ZCc = [t.src_Z, t.src_Cc].join("|"));
          var n = "[><｜]";
          return (
            (t.src_pseudo_letter =
              "(?:(?![><｜]|" + t.src_ZPCc + ")" + t.src_Any + ")"),
            (t.src_ip4 =
              "(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)"),
            (t.src_auth = "(?:(?:(?!" + t.src_ZCc + "|[@/\\[\\]()]).)+@)?"),
            (t.src_port =
              "(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?"),
            (t.src_host_terminator =
              "(?=$|[><｜]|" +
              t.src_ZPCc +
              ")(?!-|_|:\\d|\\.-|\\.(?!$|" +
              t.src_ZPCc +
              "))"),
            (t.src_path =
              "(?:[/?#](?:(?!" +
              t.src_ZCc +
              "|" +
              n +
              "|[()[\\]{}.,\"'?!\\-]).|\\[(?:(?!" +
              t.src_ZCc +
              "|\\]).)*\\]|\\((?:(?!" +
              t.src_ZCc +
              "|[)]).)*\\)|\\{(?:(?!" +
              t.src_ZCc +
              '|[}]).)*\\}|\\"(?:(?!' +
              t.src_ZCc +
              '|["]).)+\\"|\\\'(?:(?!' +
              t.src_ZCc +
              "|[']).)+\\'|\\'(?=" +
              t.src_pseudo_letter +
              "|[-]).|\\.{2,4}[a-zA-Z0-9%/]|\\.(?!" +
              t.src_ZCc +
              "|[.]).|" +
              (e && e["---"] ? "\\-(?!--(?:[^-]|$))(?:-*)|" : "\\-+|") +
              "\\,(?!" +
              t.src_ZCc +
              ").|\\!(?!" +
              t.src_ZCc +
              "|[!]).|\\?(?!" +
              t.src_ZCc +
              "|[?]).)+|\\/)?"),
            (t.src_email_name =
              '[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*'),
            (t.src_xn = "xn--[a-z0-9\\-]{1,59}"),
            (t.src_domain_root =
              "(?:" + t.src_xn + "|" + t.src_pseudo_letter + "{1,63})"),
            (t.src_domain =
              "(?:" +
              t.src_xn +
              "|(?:" +
              t.src_pseudo_letter +
              ")|(?:" +
              t.src_pseudo_letter +
              "(?:-|" +
              t.src_pseudo_letter +
              "){0,61}" +
              t.src_pseudo_letter +
              "))"),
            (t.src_host =
              "(?:(?:(?:(?:" + t.src_domain + ")\\.)*" + t.src_domain + "))"),
            (t.tpl_host_fuzzy =
              "(?:" +
              t.src_ip4 +
              "|(?:(?:(?:" +
              t.src_domain +
              ")\\.)+(?:%TLDS%)))"),
            (t.tpl_host_no_ip_fuzzy =
              "(?:(?:(?:" + t.src_domain + ")\\.)+(?:%TLDS%))"),
            (t.src_host_strict = t.src_host + t.src_host_terminator),
            (t.tpl_host_fuzzy_strict =
              t.tpl_host_fuzzy + t.src_host_terminator),
            (t.src_host_port_strict =
              t.src_host + t.src_port + t.src_host_terminator),
            (t.tpl_host_port_fuzzy_strict =
              t.tpl_host_fuzzy + t.src_port + t.src_host_terminator),
            (t.tpl_host_port_no_ip_fuzzy_strict =
              t.tpl_host_no_ip_fuzzy + t.src_port + t.src_host_terminator),
            (t.tpl_host_fuzzy_test =
              "localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:" +
              t.src_ZPCc +
              "|>|$))"),
            (t.tpl_email_fuzzy =
              '(^|[><｜]|"|\\(|' +
              t.src_ZCc +
              ")(" +
              t.src_email_name +
              "@" +
              t.tpl_host_fuzzy_strict +
              ")"),
            (t.tpl_link_fuzzy =
              "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" +
              t.src_ZPCc +
              "))((?![$+<=>^`|｜])" +
              t.tpl_host_port_fuzzy_strict +
              t.src_path +
              ")"),
            (t.tpl_link_no_ip_fuzzy =
              "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" +
              t.src_ZPCc +
              "))((?![$+<=>^`|｜])" +
              t.tpl_host_port_no_ip_fuzzy_strict +
              t.src_path +
              ")"),
            t
          );
        };
      },
      function(e, t) {
        e.exports = /[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
      },
      function(e, t) {
        e.exports = /[\0-\x1F\x7F-\x9F]/;
      },
      function(e, t) {
        e.exports = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/;
      },
      function(e, t) {
        e.exports = /[!-#%-\*,-/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E44\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC9\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD807[\uDC41-\uDC45\uDC70\uDC71]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/;
      },
      function(e, t, n) {},
      function(e, t, n) {},
      function(e, t, n) {},
      function(e, t, n) {},
      function(e, t, n) {},
      function(e, t, n) {},
      function(e, t, n) {},
      function(e, t, n) {},
      function(e, t, n) {},
      function(e, t, n) {},
      function(e, t, n) {},
      function(e, t, n) {},
      function(e, t, n) {},
      function(e, t, n) {},
      function(e, t, n) {
        "use strict";
        n.r(t);
        var m = n(1),
          S = n.n(m),
          o = n(0),
          f = n.n(o),
          E = n(3),
          C = n(4),
          r = n(2),
          L = n.n(r);
        function i() {
          var n = this;
          !(function(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, i),
            (this.callBacks = []),
            (this.suggestionCallback = void 0),
            (this.editorFlag = !1),
            (this.suggestionFlag = !1),
            (this.closeAllModals = function(t) {
              n.callBacks.forEach(function(e) {
                e(t);
              });
            }),
            (this.init = function(e) {
              var t = document.getElementById(e);
              t &&
                t.addEventListener("click", function() {
                  n.editorFlag = !0;
                }),
                document &&
                  (document.addEventListener("click", function() {
                    n.editorFlag
                      ? (n.editorFlag = !1)
                      : (n.closeAllModals(),
                        n.suggestionCallback && n.suggestionCallback());
                  }),
                  document.addEventListener("keydown", function(e) {
                    "Escape" === e.key && n.closeAllModals();
                  }));
            }),
            (this.onEditorClick = function() {
              n.closeModals(),
                !n.suggestionFlag && n.suggestionCallback
                  ? n.suggestionCallback()
                  : (n.suggestionFlag = !1);
            }),
            (this.closeModals = function(e) {
              n.closeAllModals(e);
            }),
            (this.registerCallBack = function(e) {
              n.callBacks.push(e);
            }),
            (this.deregisterCallBack = function(t) {
              n.callBacks = n.callBacks.filter(function(e) {
                return e !== t;
              });
            }),
            (this.setSuggestionCallback = function(e) {
              n.suggestionCallback = e;
            }),
            (this.removeSuggestionCallback = function() {
              n.suggestionCallback = void 0;
            }),
            (this.onSuggestionClick = function() {
              n.suggestionFlag = !0;
            });
        }
        function c() {
          var t = this;
          !(function(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, c),
            (this.inputFocused = !1),
            (this.editorMouseDown = !1),
            (this.onEditorMouseDown = function() {
              t.editorFocused = !0;
            }),
            (this.onInputMouseDown = function() {
              t.inputFocused = !0;
            }),
            (this.isEditorBlur = function(e) {
              return ("INPUT" !== e.target.tagName &&
                "LABEL" !== e.target.tagName &&
                "TEXTAREA" !== e.target.tagName) ||
                t.editorFocused
                ? !(
                    ("INPUT" === e.target.tagName &&
                      "LABEL" === e.target.tagName &&
                      "TEXTAREA" === e.target.tagName) ||
                    t.inputFocused
                  ) && !(t.editorFocused = !1)
                : !(t.inputFocused = !1);
            }),
            (this.isEditorFocused = function() {
              return !t.inputFocused || (t.inputFocused = !1);
            }),
            (this.isToolbarFocused = function() {
              return !t.editorFocused || (t.editorFocused = !1);
            }),
            (this.isInputFocused = function() {
              return t.inputFocused;
            });
        }
        var a,
          l = [],
          k = {
            onKeyDown: function(t) {
              l.forEach(function(e) {
                e(t);
              });
            },
            registerCallBack: function(e) {
              l.push(e);
            },
            deregisterCallBack: function(t) {
              l = l.filter(function(e) {
                return e !== t;
              });
            }
          },
          g = function() {
            a = !0;
          },
          y = function() {
            a = !1;
          },
          s = function() {
            return a;
          };
        function D(e) {
          var t = e.getData() && e.getData().get("text-align");
          return t ? "rdw-".concat(t, "-aligned-block") : "";
        }
        function u(e, t) {
          if (e) for (var n in e) !{}.hasOwnProperty.call(e, n) || t(n, e[n]);
        }
        function p(e, t) {
          var n = !1;
          if (e)
            for (var o in e)
              if ({}.hasOwnProperty.call(e, o) && t === o) {
                n = !0;
                break;
              }
          return n;
        }
        function d(e) {
          e.stopPropagation();
        }
        function h(e) {
          return e[e.options[0]].icon;
        }
        function M(e, o) {
          if (e && void 0 === o) return e;
          var r = {};
          return (
            u(e, function(e, t) {
              var n;
              (n = t),
                "[object Object]" === Object.prototype.toString.call(n)
                  ? (r[e] = M(t, o[e]))
                  : (r[e] = void 0 !== o[e] ? o[e] : t);
            }),
            r
          );
        }
        var b = n(6),
          j = n.n(b),
          N = n(5);
        n(11);
        function v(e) {
          return (v =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function(e) {
                  return typeof e;
                }
              : function(e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                })(e);
        }
        function w(e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
                })
              : (e[t] = n),
            e
          );
        }
        function x(e, t) {
          for (var n = 0; n < t.length; n++) {
            var o = t[n];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              "value" in o && (o.writable = !0),
              Object.defineProperty(e, o.key, o);
          }
        }
        function I(e, t) {
          return !t || ("object" !== v(t) && "function" != typeof t)
            ? (function(e) {
                if (void 0 !== e) return e;
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              })(e)
            : t;
        }
        function O(e) {
          return (O = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              })(e);
        }
        function A(e, t) {
          return (A =
            Object.setPrototypeOf ||
            function(e, t) {
              return (e.__proto__ = t), e;
            })(e, t);
        }
        var T = (function() {
          function i() {
            var e, r;
            !(function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, i);
            for (var t = arguments.length, n = new Array(t), o = 0; o < t; o++)
              n[o] = arguments[o];
            return (
              ((r = I(
                this,
                (e = O(i)).call.apply(e, [this].concat(n))
              )).onClick = function() {
                var e = r.props,
                  t = e.disabled,
                  n = e.onClick,
                  o = e.value;
                t || n(o);
              }),
              r
            );
          }
          var e, t, n;
          return (
            (function(e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 }
              })),
                t && A(e, t);
            })(i, m["Component"]),
            (e = i),
            (t = [
              {
                key: "render",
                value: function() {
                  var e,
                    t = this.props,
                    n = t.children,
                    o = t.className,
                    r = t.activeClassName,
                    i = t.active,
                    a = t.disabled,
                    c = t.title;
                  return S.a.createElement(
                    "div",
                    {
                      className: L()(
                        "rdw-option-wrapper",
                        o,
                        (w((e = {}), "rdw-option-active ".concat(r), i),
                        w(e, "rdw-option-disabled", a),
                        e)
                      ),
                      onClick: this.onClick,
                      "aria-selected": i,
                      title: c
                    },
                    n
                  );
                }
              }
            ]) && x(e.prototype, t),
            n && x(e, n),
            i
          );
        })();
        (T.propTypes = {
          onClick: f.a.func.isRequired,
          children: f.a.any,
          value: f.a.string,
          className: f.a.string,
          activeClassName: f.a.string,
          active: f.a.bool,
          disabled: f.a.bool,
          title: f.a.string
        }),
          (T.defaultProps = { activeClassName: "" });
        n(12);
        function z(e) {
          return (z =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function(e) {
                  return typeof e;
                }
              : function(e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                })(e);
        }
        function _(e, t) {
          for (var n = 0; n < t.length; n++) {
            var o = t[n];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              "value" in o && (o.writable = !0),
              Object.defineProperty(e, o.key, o);
          }
        }
        function P(e, t) {
          return !t || ("object" !== z(t) && "function" != typeof t)
            ? (function(e) {
                if (void 0 !== e) return e;
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              })(e)
            : t;
        }
        function U(e) {
          return (U = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              })(e);
        }
        function Y(e, t) {
          return (Y =
            Object.setPrototypeOf ||
            function(e, t) {
              return (e.__proto__ = t), e;
            })(e, t);
        }
        var F = (function() {
          function i() {
            var e, o;
            !(function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, i);
            for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
              n[r] = arguments[r];
            return (
              ((o = P(
                this,
                (e = U(i)).call.apply(e, [this].concat(n))
              )).state = { highlighted: -1 }),
              (o.onChange = function(e) {
                var t = o.props.onChange;
                t && t(e), o.toggleExpansion();
              }),
              (o.setHighlighted = function(e) {
                o.setState({ highlighted: e });
              }),
              (o.toggleExpansion = function() {
                var e = o.props,
                  t = e.doExpand,
                  n = e.doCollapse;
                e.expanded ? n() : t();
              }),
              o
            );
          }
          var e, t, n;
          return (
            (function(e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 }
              })),
                t && Y(e, t);
            })(i, m["Component"]),
            (e = i),
            (t = [
              {
                key: "componentDidUpdate",
                value: function(e) {
                  var t = this.props.expanded;
                  e.expanded && !t && this.setState({ highlighted: -1 });
                }
              },
              {
                key: "render",
                value: function() {
                  var n = this,
                    e = this.props,
                    t = e.expanded,
                    o = e.children,
                    r = e.className,
                    i = e.optionWrapperClassName,
                    a = e.ariaLabel,
                    c = e.onExpandEvent,
                    l = e.title,
                    s = this.state.highlighted,
                    u = o.slice(1, o.length);
                  return S.a.createElement(
                    "div",
                    {
                      className: L()("rdw-dropdown-wrapper", r),
                      "aria-expanded": t,
                      "aria-label": a || "rdw-dropdown"
                    },
                    S.a.createElement(
                      "a",
                      {
                        className: "rdw-dropdown-selectedtext",
                        onClick: c,
                        title: l
                      },
                      o[0],
                      S.a.createElement("div", {
                        className: L()({
                          "rdw-dropdown-carettoclose": t,
                          "rdw-dropdown-carettoopen": !t
                        })
                      })
                    ),
                    t
                      ? S.a.createElement(
                          "ul",
                          {
                            className: L()("rdw-dropdown-optionwrapper", i),
                            onClick: d
                          },
                          S.a.Children.map(u, function(e, t) {
                            return (
                              e &&
                              S.a.cloneElement(e, {
                                onSelect: n.onChange,
                                highlighted: s === t,
                                setHighlighted: n.setHighlighted,
                                index: t
                              })
                            );
                          })
                        )
                      : void 0
                  );
                }
              }
            ]) && _(e.prototype, t),
            n && _(e, n),
            i
          );
        })();
        F.propTypes = {
          children: f.a.any,
          onChange: f.a.func,
          className: f.a.string,
          expanded: f.a.bool,
          doExpand: f.a.func,
          doCollapse: f.a.func,
          onExpandEvent: f.a.func,
          optionWrapperClassName: f.a.string,
          ariaLabel: f.a.string,
          title: f.a.string
        };
        n(13);
        function R(e) {
          return (R =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function(e) {
                  return typeof e;
                }
              : function(e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                })(e);
        }
        function B(e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
                })
              : (e[t] = n),
            e
          );
        }
        function Q(e, t) {
          for (var n = 0; n < t.length; n++) {
            var o = t[n];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              "value" in o && (o.writable = !0),
              Object.defineProperty(e, o.key, o);
          }
        }
        function H(e, t) {
          return !t || ("object" !== R(t) && "function" != typeof t)
            ? (function(e) {
                if (void 0 !== e) return e;
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              })(e)
            : t;
        }
        function Z(e) {
          return (Z = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              })(e);
        }
        function W(e, t) {
          return (W =
            Object.setPrototypeOf ||
            function(e, t) {
              return (e.__proto__ = t), e;
            })(e, t);
        }
        var G = (function() {
          function r() {
            var e, i;
            !(function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, r);
            for (var t = arguments.length, n = new Array(t), o = 0; o < t; o++)
              n[o] = arguments[o];
            return (
              ((i = H(
                this,
                (e = Z(r)).call.apply(e, [this].concat(n))
              )).onClick = function(e) {
                var t = i.props,
                  n = t.onSelect,
                  o = t.onClick,
                  r = t.value;
                t.disabled || (n && n(r), o && (e.stopPropagation(), o(r)));
              }),
              (i.setHighlighted = function() {
                var e = i.props;
                (0, e.setHighlighted)(e.index);
              }),
              (i.resetHighlighted = function() {
                (0, i.props.setHighlighted)(-1);
              }),
              i
            );
          }
          var e, t, n;
          return (
            (function(e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 }
              })),
                t && W(e, t);
            })(r, m["Component"]),
            (e = r),
            (t = [
              {
                key: "render",
                value: function() {
                  var e,
                    t = this.props,
                    n = t.children,
                    o = t.active,
                    r = t.disabled,
                    i = t.highlighted,
                    a = t.className,
                    c = t.activeClassName,
                    l = t.disabledClassName,
                    s = t.highlightedClassName,
                    u = t.title;
                  return S.a.createElement(
                    "li",
                    {
                      className: L()(
                        "rdw-dropdownoption-default",
                        a,
                        (B((e = {}), "rdw-dropdownoption-active ".concat(c), o),
                        B(e, "rdw-dropdownoption-highlighted ".concat(s), i),
                        B(e, "rdw-dropdownoption-disabled ".concat(l), r),
                        e)
                      ),
                      onMouseEnter: this.setHighlighted,
                      onMouseLeave: this.resetHighlighted,
                      onClick: this.onClick,
                      title: u
                    },
                    n
                  );
                }
              }
            ]) && Q(e.prototype, t),
            n && Q(e, n),
            r
          );
        })();
        (G.propTypes = {
          children: f.a.any,
          value: f.a.any,
          onClick: f.a.func,
          onSelect: f.a.func,
          setHighlighted: f.a.func,
          index: f.a.number,
          disabled: f.a.bool,
          active: f.a.bool,
          highlighted: f.a.bool,
          className: f.a.string,
          activeClassName: f.a.string,
          disabledClassName: f.a.string,
          highlightedClassName: f.a.string,
          title: f.a.string
        }),
          (G.defaultProps = {
            activeClassName: "",
            disabledClassName: "",
            highlightedClassName: ""
          });
        n(14);
        function J(e) {
          return (J =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function(e) {
                  return typeof e;
                }
              : function(e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                })(e);
        }
        function V(e, t) {
          for (var n = 0; n < t.length; n++) {
            var o = t[n];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              "value" in o && (o.writable = !0),
              Object.defineProperty(e, o.key, o);
          }
        }
        function q(e, t) {
          return !t || ("object" !== J(t) && "function" != typeof t)
            ? (function(e) {
                if (void 0 !== e) return e;
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              })(e)
            : t;
        }
        function K(e) {
          return (K = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              })(e);
        }
        function X(e, t) {
          return (X =
            Object.setPrototypeOf ||
            function(e, t) {
              return (e.__proto__ = t), e;
            })(e, t);
        }
        var $ = (function() {
          function e() {
            return (
              (function(e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e),
              q(this, K(e).apply(this, arguments))
            );
          }
          var t, n, o;
          return (
            (function(e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 }
              })),
                t && X(e, t);
            })(e, m["Component"]),
            (t = e),
            (n = [
              {
                key: "renderInFlatList",
                value: function() {
                  var e = this.props,
                    n = e.config,
                    o = e.currentState,
                    r = e.onChange,
                    i = e.translations;
                  return S.a.createElement(
                    "div",
                    {
                      className: L()("rdw-inline-wrapper", n.className),
                      "aria-label": "rdw-inline-control"
                    },
                    n.options.map(function(e, t) {
                      return S.a.createElement(
                        T,
                        {
                          key: t,
                          value: e,
                          onClick: r,
                          className: L()(n[e].className),
                          active: !0 === o[e] || ("MONOSPACE" === e && o.CODE),
                          title:
                            n[e].title ||
                            i["components.controls.inline.".concat(e)]
                        },
                        S.a.createElement("img", { alt: "", src: n[e].icon })
                      );
                    })
                  );
                }
              },
              {
                key: "renderInDropDown",
                value: function() {
                  var e = this.props,
                    n = e.config,
                    t = e.expanded,
                    o = e.doExpand,
                    r = e.onExpandEvent,
                    i = e.doCollapse,
                    a = e.currentState,
                    c = e.onChange,
                    l = e.translations,
                    s = n.className,
                    u = n.dropdownClassName,
                    p = n.title;
                  return S.a.createElement(
                    F,
                    {
                      className: L()("rdw-inline-dropdown", s),
                      optionWrapperClassName: L()(u),
                      onChange: c,
                      expanded: t,
                      doExpand: o,
                      doCollapse: i,
                      onExpandEvent: r,
                      "aria-label": "rdw-inline-control",
                      title: p
                    },
                    S.a.createElement("img", { src: h(n), alt: "" }),
                    n.options.map(function(e, t) {
                      return S.a.createElement(
                        G,
                        {
                          key: t,
                          value: e,
                          className: L()(
                            "rdw-inline-dropdownoption",
                            n[e].className
                          ),
                          active: !0 === a[e] || ("MONOSPACE" === e && a.CODE),
                          title:
                            n[e].title ||
                            l["components.controls.inline.".concat(e)]
                        },
                        S.a.createElement("img", { src: n[e].icon, alt: "" })
                      );
                    })
                  );
                }
              },
              {
                key: "render",
                value: function() {
                  return this.props.config.inDropdown
                    ? this.renderInDropDown()
                    : this.renderInFlatList();
                }
              }
            ]) && V(t.prototype, n),
            o && V(t, o),
            e
          );
        })();
        function ee(e) {
          return (ee =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function(e) {
                  return typeof e;
                }
              : function(e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                })(e);
        }
        function te(e, t) {
          for (var n = 0; n < t.length; n++) {
            var o = t[n];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              "value" in o && (o.writable = !0),
              Object.defineProperty(e, o.key, o);
          }
        }
        function ne(e, t) {
          return !t || ("object" !== ee(t) && "function" != typeof t)
            ? (function(e) {
                if (void 0 !== e) return e;
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              })(e)
            : t;
        }
        function oe(e) {
          return (oe = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              })(e);
        }
        function re(e, t) {
          return (re =
            Object.setPrototypeOf ||
            function(e, t) {
              return (e.__proto__ = t), e;
            })(e, t);
        }
        $.propTypes = {
          expanded: f.a.bool,
          doExpand: f.a.func,
          doCollapse: f.a.func,
          onExpandEvent: f.a.func,
          config: f.a.object,
          onChange: f.a.func,
          currentState: f.a.object,
          translations: f.a.object
        };
        var ie = (function() {
          function r(e) {
            var l;
            !(function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, r),
              ((l = ne(this, oe(r).call(this, e))).onExpandEvent = function() {
                l.signalExpanded = !l.state.expanded;
              }),
              (l.expandCollapse = function() {
                l.setState({ expanded: l.signalExpanded }),
                  (l.signalExpanded = !1);
              }),
              (l.toggleInlineStyle = function(e) {
                var t = "monospace" === e ? "CODE" : e.toUpperCase(),
                  n = l.props,
                  o = n.editorState,
                  r = n.onChange,
                  i = E.RichUtils.toggleInlineStyle(o, t);
                if ("subscript" === e || "superscript" === e) {
                  var a = "subscript" === e ? "SUPERSCRIPT" : "SUBSCRIPT",
                    c = E.Modifier.removeInlineStyle(
                      i.getCurrentContent(),
                      i.getSelection(),
                      a
                    );
                  i = E.EditorState.push(i, c, "change-inline-style");
                }
                i && r(i);
              }),
              (l.changeKeys = function(e) {
                if (e) {
                  var n = {};
                  return (
                    u(e, function(e, t) {
                      n["CODE" === e ? "monospace" : e.toLowerCase()] = t;
                    }),
                    n
                  );
                }
              }),
              (l.doExpand = function() {
                l.setState({ expanded: !0 });
              }),
              (l.doCollapse = function() {
                l.setState({ expanded: !1 });
              });
            var t = l.props,
              n = t.editorState,
              o = t.modalHandler;
            return (
              (l.state = {
                currentStyles: n
                  ? l.changeKeys(Object(C.getSelectionInlineStyle)(n))
                  : {}
              }),
              o.registerCallBack(l.expandCollapse),
              l
            );
          }
          var e, t, n;
          return (
            (function(e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 }
              })),
                t && re(e, t);
            })(r, m["Component"]),
            (e = r),
            (t = [
              {
                key: "componentDidUpdate",
                value: function(e) {
                  var t = this.props.editorState;
                  t &&
                    t !== e.editorState &&
                    this.setState({
                      currentStyles: this.changeKeys(
                        Object(C.getSelectionInlineStyle)(t)
                      )
                    });
                }
              },
              {
                key: "componentWillUnmount",
                value: function() {
                  this.props.modalHandler.deregisterCallBack(
                    this.expandCollapse
                  );
                }
              },
              {
                key: "render",
                value: function() {
                  var e = this.props,
                    t = e.config,
                    n = e.translations,
                    o = this.state,
                    r = o.expanded,
                    i = o.currentStyles,
                    a = t.component || $;
                  return S.a.createElement(a, {
                    config: t,
                    translations: n,
                    currentState: i,
                    expanded: r,
                    onExpandEvent: this.onExpandEvent,
                    doExpand: this.doExpand,
                    doCollapse: this.doCollapse,
                    onChange: this.toggleInlineStyle
                  });
                }
              }
            ]) && te(e.prototype, t),
            n && te(e, n),
            r
          );
        })();
        ie.propTypes = {
          onChange: f.a.func.isRequired,
          editorState: f.a.object.isRequired,
          modalHandler: f.a.object,
          config: f.a.object,
          translations: f.a.object
        };
        n(15);
        function ae(e) {
          return (ae =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function(e) {
                  return typeof e;
                }
              : function(e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                })(e);
        }
        function ce(e, t) {
          for (var n = 0; n < t.length; n++) {
            var o = t[n];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              "value" in o && (o.writable = !0),
              Object.defineProperty(e, o.key, o);
          }
        }
        function le(e, t) {
          return !t || ("object" !== ae(t) && "function" != typeof t)
            ? (function(e) {
                if (void 0 !== e) return e;
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              })(e)
            : t;
        }
        function se(e) {
          return (se = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              })(e);
        }
        function ue(e, t) {
          return (ue =
            Object.setPrototypeOf ||
            function(e, t) {
              return (e.__proto__ = t), e;
            })(e, t);
        }
        var pe = (function() {
          function n(e) {
            var t;
            return (
              (function(e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, n),
              ((t = le(this, se(n).call(this, e))).getBlockTypes = function(e) {
                return [
                  {
                    label: "Normal",
                    displayName: e["components.controls.blocktype.normal"]
                  },
                  {
                    label: "H1",
                    displayName: e["components.controls.blocktype.h1"]
                  },
                  {
                    label: "H2",
                    displayName: e["components.controls.blocktype.h2"]
                  },
                  {
                    label: "H3",
                    displayName: e["components.controls.blocktype.h3"]
                  },
                  {
                    label: "H4",
                    displayName: e["components.controls.blocktype.h4"]
                  },
                  {
                    label: "H5",
                    displayName: e["components.controls.blocktype.h5"]
                  },
                  {
                    label: "H6",
                    displayName: e["components.controls.blocktype.h6"]
                  },
                  {
                    label: "Blockquote",
                    displayName: e["components.controls.blocktype.blockquote"]
                  },
                  {
                    label: "Code",
                    displayName: e["components.controls.blocktype.code"]
                  }
                ];
              }),
              (t.state = { blockTypes: t.getBlockTypes(e.translations) }),
              t
            );
          }
          var e, t, o;
          return (
            (function(e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 }
              })),
                t && ue(e, t);
            })(n, m["Component"]),
            (e = n),
            (t = [
              {
                key: "componentDidUpdate",
                value: function(e) {
                  var t = this.props.translations;
                  t !== e.translations &&
                    this.setState({ blockTypes: this.getBlockTypes(t) });
                }
              },
              {
                key: "renderFlat",
                value: function(e) {
                  var t = this.props,
                    n = t.config.className,
                    o = t.onChange,
                    r = t.currentState.blockType;
                  return S.a.createElement(
                    "div",
                    { className: L()("rdw-inline-wrapper", n) },
                    e.map(function(e, t) {
                      return S.a.createElement(
                        T,
                        {
                          key: t,
                          value: e.label,
                          active: r === e.label,
                          onClick: o
                        },
                        e.displayName
                      );
                    })
                  );
                }
              },
              {
                key: "renderInDropdown",
                value: function(e) {
                  var t = this.props,
                    n = t.config,
                    o = n.className,
                    r = n.dropdownClassName,
                    i = n.title,
                    a = t.currentState.blockType,
                    c = t.expanded,
                    l = t.doExpand,
                    s = t.onExpandEvent,
                    u = t.doCollapse,
                    p = t.onChange,
                    d = t.translations,
                    m = this.state.blockTypes.filter(function(e) {
                      return e.label === a;
                    }),
                    f = m && m[0] && m[0].displayName;
                  return S.a.createElement(
                    "div",
                    {
                      className: "rdw-block-wrapper",
                      "aria-label": "rdw-block-control"
                    },
                    S.a.createElement(
                      F,
                      {
                        className: L()("rdw-block-dropdown", o),
                        optionWrapperClassName: L()(r),
                        onChange: p,
                        expanded: c,
                        doExpand: l,
                        doCollapse: u,
                        onExpandEvent: s,
                        title: i || d["components.controls.blocktype.blocktype"]
                      },
                      S.a.createElement(
                        "span",
                        null,
                        f || d["components.controls.blocktype.blocktype"]
                      ),
                      e.map(function(e, t) {
                        return S.a.createElement(
                          G,
                          { active: a === e.label, value: e.label, key: t },
                          e.displayName
                        );
                      })
                    )
                  );
                }
              },
              {
                key: "render",
                value: function() {
                  var n = this.props.config,
                    e = n.inDropdown,
                    t = this.state.blockTypes.filter(function(e) {
                      var t = e.label;
                      return -1 < n.options.indexOf(t);
                    });
                  return e ? this.renderInDropdown(t) : this.renderFlat(t);
                }
              }
            ]) && ce(e.prototype, t),
            o && ce(e, o),
            n
          );
        })();
        pe.propTypes = {
          expanded: f.a.bool,
          onExpandEvent: f.a.func,
          doExpand: f.a.func,
          doCollapse: f.a.func,
          onChange: f.a.func,
          config: f.a.object,
          currentState: f.a.object,
          translations: f.a.object
        };
        var de = pe;
        function me(e) {
          return (me =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function(e) {
                  return typeof e;
                }
              : function(e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                })(e);
        }
        function fe(e, t) {
          for (var n = 0; n < t.length; n++) {
            var o = t[n];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              "value" in o && (o.writable = !0),
              Object.defineProperty(e, o.key, o);
          }
        }
        function ge(e, t) {
          return !t || ("object" !== me(t) && "function" != typeof t)
            ? (function(e) {
                if (void 0 !== e) return e;
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              })(e)
            : t;
        }
        function ye(e) {
          return (ye = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              })(e);
        }
        function he(e, t) {
          return (he =
            Object.setPrototypeOf ||
            function(e, t) {
              return (e.__proto__ = t), e;
            })(e, t);
        }
        var Me = (function() {
          function o(e) {
            var a;
            !(function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, o),
              ((a = ge(this, ye(o).call(this, e))).onExpandEvent = function() {
                a.signalExpanded = !a.state.expanded;
              }),
              (a.expandCollapse = function() {
                a.setState({ expanded: a.signalExpanded }),
                  (a.signalExpanded = !1);
              }),
              (a.blocksTypes = [
                { label: "Normal", style: "unstyled" },
                { label: "H1", style: "header-one" },
                { label: "H2", style: "header-two" },
                { label: "H3", style: "header-three" },
                { label: "H4", style: "header-four" },
                { label: "H5", style: "header-five" },
                { label: "H6", style: "header-six" },
                { label: "Blockquote", style: "blockquote" },
                { label: "Code", style: "code" }
              ]),
              (a.doExpand = function() {
                a.setState({ expanded: !0 });
              }),
              (a.doCollapse = function() {
                a.setState({ expanded: !1 });
              }),
              (a.toggleBlockType = function(t) {
                var e = a.blocksTypes.find(function(e) {
                    return e.label === t;
                  }).style,
                  n = a.props,
                  o = n.editorState,
                  r = n.onChange,
                  i = E.RichUtils.toggleBlockType(o, e);
                i && r(i);
              });
            var t = e.editorState,
              n = e.modalHandler;
            return (
              (a.state = {
                expanded: !1,
                currentBlockType: t
                  ? Object(C.getSelectedBlocksType)(t)
                  : "unstyled"
              }),
              n.registerCallBack(a.expandCollapse),
              a
            );
          }
          var e, t, n;
          return (
            (function(e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 }
              })),
                t && he(e, t);
            })(o, m["Component"]),
            (e = o),
            (t = [
              {
                key: "componentDidUpdate",
                value: function(e) {
                  var t = this.props.editorState;
                  t &&
                    t !== e.editorState &&
                    this.setState({
                      currentBlockType: Object(C.getSelectedBlocksType)(t)
                    });
                }
              },
              {
                key: "componentWillUnmount",
                value: function() {
                  this.props.modalHandler.deregisterCallBack(
                    this.expandCollapse
                  );
                }
              },
              {
                key: "render",
                value: function() {
                  var e = this.props,
                    t = e.config,
                    n = e.translations,
                    o = this.state,
                    r = o.expanded,
                    i = o.currentBlockType,
                    a = t.component || de,
                    c = this.blocksTypes.find(function(e) {
                      return e.style === i;
                    });
                  return S.a.createElement(a, {
                    config: t,
                    translations: n,
                    currentState: { blockType: c && c.label },
                    onChange: this.toggleBlockType,
                    expanded: r,
                    onExpandEvent: this.onExpandEvent,
                    doExpand: this.doExpand,
                    doCollapse: this.doCollapse
                  });
                }
              }
            ]) && fe(e.prototype, t),
            n && fe(e, n),
            o
          );
        })();
        Me.propTypes = {
          onChange: f.a.func.isRequired,
          editorState: f.a.object,
          modalHandler: f.a.object,
          config: f.a.object,
          translations: f.a.object
        };
        var be = Me;
        n(16);
        function je(e) {
          return (je =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function(e) {
                  return typeof e;
                }
              : function(e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                })(e);
        }
        function Ne(e, t) {
          for (var n = 0; n < t.length; n++) {
            var o = t[n];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              "value" in o && (o.writable = !0),
              Object.defineProperty(e, o.key, o);
          }
        }
        function Se(e, t) {
          return !t || ("object" !== je(t) && "function" != typeof t)
            ? (function(e) {
                if (void 0 !== e) return e;
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              })(e)
            : t;
        }
        function Ee(e) {
          return (Ee = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              })(e);
        }
        function Ce(e, t) {
          return (Ce =
            Object.setPrototypeOf ||
            function(e, t) {
              return (e.__proto__ = t), e;
            })(e, t);
        }
        var Le = (function() {
          function i() {
            var e, t;
            !(function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, i);
            for (var n = arguments.length, o = new Array(n), r = 0; r < n; r++)
              o[r] = arguments[r];
            return (
              ((t = Se(
                this,
                (e = Ee(i)).call.apply(e, [this].concat(o))
              )).state = { defaultFontSize: void 0 }),
              t
            );
          }
          var e, t, n;
          return (
            (function(e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 }
              })),
                t && Ce(e, t);
            })(i, m["Component"]),
            (e = i),
            (t = [
              {
                key: "componentDidMount",
                value: function() {
                  var e = document.getElementsByClassName("DraftEditor-root");
                  if (e && 0 < e.length) {
                    var t = window
                      .getComputedStyle(e[0])
                      .getPropertyValue("font-size");
                    (t = t.substring(0, t.length - 2)),
                      this.setState({ defaultFontSize: t });
                  }
                }
              },
              {
                key: "render",
                value: function() {
                  var e = this.props,
                    t = e.config,
                    n = t.icon,
                    o = t.className,
                    r = t.dropdownClassName,
                    i = t.options,
                    a = t.title,
                    c = e.onChange,
                    l = e.expanded,
                    s = e.doCollapse,
                    u = e.onExpandEvent,
                    p = e.doExpand,
                    d = e.translations,
                    m = this.props.currentState.fontSize,
                    f = this.state.defaultFontSize;
                  return (
                    (f = Number(f)),
                    (m = m || (i && 0 <= i.indexOf(f) && f)),
                    S.a.createElement(
                      "div",
                      {
                        className: "rdw-fontsize-wrapper",
                        "aria-label": "rdw-font-size-control"
                      },
                      S.a.createElement(
                        F,
                        {
                          className: L()("rdw-fontsize-dropdown", o),
                          optionWrapperClassName: L()(r),
                          onChange: c,
                          expanded: l,
                          doExpand: p,
                          doCollapse: s,
                          onExpandEvent: u,
                          title: a || d["components.controls.fontsize.fontsize"]
                        },
                        m
                          ? S.a.createElement("span", null, m)
                          : S.a.createElement("img", { src: n, alt: "" }),
                        i.map(function(e, t) {
                          return S.a.createElement(
                            G,
                            {
                              className: "rdw-fontsize-option",
                              active: m === e,
                              value: e,
                              key: t
                            },
                            e
                          );
                        })
                      )
                    )
                  );
                }
              }
            ]) && Ne(e.prototype, t),
            n && Ne(e, n),
            i
          );
        })();
        function ke(e) {
          return (ke =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function(e) {
                  return typeof e;
                }
              : function(e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                })(e);
        }
        function De(e, t) {
          for (var n = 0; n < t.length; n++) {
            var o = t[n];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              "value" in o && (o.writable = !0),
              Object.defineProperty(e, o.key, o);
          }
        }
        function ve(e, t) {
          return !t || ("object" !== ke(t) && "function" != typeof t)
            ? (function(e) {
                if (void 0 !== e) return e;
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              })(e)
            : t;
        }
        function we(e) {
          return (we = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              })(e);
        }
        function xe(e, t) {
          return (xe =
            Object.setPrototypeOf ||
            function(e, t) {
              return (e.__proto__ = t), e;
            })(e, t);
        }
        Le.propTypes = {
          expanded: f.a.bool,
          onExpandEvent: f.a.func,
          doExpand: f.a.func,
          doCollapse: f.a.func,
          onChange: f.a.func,
          config: f.a.object,
          currentState: f.a.object,
          translations: f.a.object
        };
        var Ie = (function() {
          function o(e) {
            var i;
            !(function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, o),
              ((i = ve(this, we(o).call(this, e))).onExpandEvent = function() {
                i.signalExpanded = !i.state.expanded;
              }),
              (i.expandCollapse = function() {
                i.setState({ expanded: i.signalExpanded }),
                  (i.signalExpanded = !1);
              }),
              (i.doExpand = function() {
                i.setState({ expanded: !0 });
              }),
              (i.doCollapse = function() {
                i.setState({ expanded: !1 });
              }),
              (i.toggleFontSize = function(e) {
                var t = i.props,
                  n = t.editorState,
                  o = t.onChange,
                  r = Object(C.toggleCustomInlineStyle)(n, "fontSize", e);
                r && o(r);
              });
            var t = e.editorState,
              n = e.modalHandler;
            return (
              (i.state = {
                expanded: void 0,
                currentFontSize: t
                  ? Object(C.getSelectionCustomInlineStyle)(t, ["FONTSIZE"])
                      .FONTSIZE
                  : void 0
              }),
              n.registerCallBack(i.expandCollapse),
              i
            );
          }
          var e, t, n;
          return (
            (function(e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 }
              })),
                t && xe(e, t);
            })(o, m["Component"]),
            (e = o),
            (t = [
              {
                key: "componentDidUpdate",
                value: function(e) {
                  var t = this.props.editorState;
                  t &&
                    t !== e.editorState &&
                    this.setState({
                      currentFontSize: Object(
                        C.getSelectionCustomInlineStyle
                      )(t, ["FONTSIZE"]).FONTSIZE
                    });
                }
              },
              {
                key: "componentWillUnmount",
                value: function() {
                  this.props.modalHandler.deregisterCallBack(
                    this.expandCollapse
                  );
                }
              },
              {
                key: "render",
                value: function() {
                  var e = this.props,
                    t = e.config,
                    n = e.translations,
                    o = this.state,
                    r = o.expanded,
                    i = o.currentFontSize,
                    a = t.component || Le,
                    c = i && Number(i.substring(9));
                  return S.a.createElement(a, {
                    config: t,
                    translations: n,
                    currentState: { fontSize: c },
                    onChange: this.toggleFontSize,
                    expanded: r,
                    onExpandEvent: this.onExpandEvent,
                    doExpand: this.doExpand,
                    doCollapse: this.doCollapse
                  });
                }
              }
            ]) && De(e.prototype, t),
            n && De(e, n),
            o
          );
        })();
        Ie.propTypes = {
          onChange: f.a.func.isRequired,
          editorState: f.a.object,
          modalHandler: f.a.object,
          config: f.a.object,
          translations: f.a.object
        };
        n(17);
        function Oe(e) {
          return (Oe =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function(e) {
                  return typeof e;
                }
              : function(e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                })(e);
        }
        function Ae(e, t) {
          for (var n = 0; n < t.length; n++) {
            var o = t[n];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              "value" in o && (o.writable = !0),
              Object.defineProperty(e, o.key, o);
          }
        }
        function Te(e, t) {
          return !t || ("object" !== Oe(t) && "function" != typeof t)
            ? (function(e) {
                if (void 0 !== e) return e;
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              })(e)
            : t;
        }
        function ze(e) {
          return (ze = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              })(e);
        }
        function _e(e, t) {
          return (_e =
            Object.setPrototypeOf ||
            function(e, t) {
              return (e.__proto__ = t), e;
            })(e, t);
        }
        var Pe = (function() {
          function i() {
            var e, t;
            !(function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, i);
            for (var n = arguments.length, o = new Array(n), r = 0; r < n; r++)
              o[r] = arguments[r];
            return (
              ((t = Te(
                this,
                (e = ze(i)).call.apply(e, [this].concat(o))
              )).state = { defaultFontFamily: void 0 }),
              t
            );
          }
          var e, t, n;
          return (
            (function(e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 }
              })),
                t && _e(e, t);
            })(i, m["Component"]),
            (e = i),
            (t = [
              {
                key: "componentDidMount",
                value: function() {
                  var e = document.getElementsByClassName("DraftEditor-root");
                  if (e && 0 < e.length) {
                    var t = window
                      .getComputedStyle(e[0])
                      .getPropertyValue("font-family");
                    this.setState({ defaultFontFamily: t });
                  }
                }
              },
              {
                key: "render",
                value: function() {
                  var t = this.state.defaultFontFamily,
                    e = this.props,
                    n = e.config,
                    o = n.className,
                    r = n.dropdownClassName,
                    i = n.options,
                    a = n.title,
                    c = e.translations,
                    l = e.onChange,
                    s = e.expanded,
                    u = e.doCollapse,
                    p = e.onExpandEvent,
                    d = e.doExpand,
                    m = this.props.currentState.fontFamily;
                  return (
                    (m =
                      m ||
                      (i &&
                        t &&
                        i.some(function(e) {
                          return e.toLowerCase() === t.toLowerCase();
                        }) &&
                        t)),
                    S.a.createElement(
                      "div",
                      {
                        className: "rdw-fontfamily-wrapper",
                        "aria-label": "rdw-font-family-control"
                      },
                      S.a.createElement(
                        F,
                        {
                          className: L()("rdw-fontfamily-dropdown", o),
                          optionWrapperClassName: L()(
                            "rdw-fontfamily-optionwrapper",
                            r
                          ),
                          onChange: l,
                          expanded: s,
                          doExpand: d,
                          doCollapse: u,
                          onExpandEvent: p,
                          title:
                            a || c["components.controls.fontfamily.fontfamily"]
                        },
                        S.a.createElement(
                          "span",
                          { className: "rdw-fontfamily-placeholder" },
                          m || c["components.controls.fontfamily.fontfamily"]
                        ),
                        i.map(function(e, t) {
                          return S.a.createElement(
                            G,
                            { active: m === e, value: e, key: t },
                            e
                          );
                        })
                      )
                    )
                  );
                }
              }
            ]) && Ae(e.prototype, t),
            n && Ae(e, n),
            i
          );
        })();
        Pe.propTypes = {
          expanded: f.a.bool,
          onExpandEvent: f.a.func,
          doExpand: f.a.func,
          doCollapse: f.a.func,
          onChange: f.a.func,
          config: f.a.object,
          currentState: f.a.object,
          translations: f.a.object
        };
        var Ue = Pe;
        function Ye(e) {
          return (Ye =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function(e) {
                  return typeof e;
                }
              : function(e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                })(e);
        }
        function Fe(e, t) {
          for (var n = 0; n < t.length; n++) {
            var o = t[n];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              "value" in o && (o.writable = !0),
              Object.defineProperty(e, o.key, o);
          }
        }
        function Re(e, t) {
          return !t || ("object" !== Ye(t) && "function" != typeof t)
            ? (function(e) {
                if (void 0 !== e) return e;
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              })(e)
            : t;
        }
        function Be(e) {
          return (Be = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              })(e);
        }
        function Qe(e, t) {
          return (Qe =
            Object.setPrototypeOf ||
            function(e, t) {
              return (e.__proto__ = t), e;
            })(e, t);
        }
        var He = (function() {
          function o(e) {
            var i;
            !(function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, o),
              ((i = Re(this, Be(o).call(this, e))).onExpandEvent = function() {
                i.signalExpanded = !i.state.expanded;
              }),
              (i.expandCollapse = function() {
                i.setState({ expanded: i.signalExpanded }),
                  (i.signalExpanded = !1);
              }),
              (i.doExpand = function() {
                i.setState({ expanded: !0 });
              }),
              (i.doCollapse = function() {
                i.setState({ expanded: !1 });
              }),
              (i.toggleFontFamily = function(e) {
                var t = i.props,
                  n = t.editorState,
                  o = t.onChange,
                  r = Object(C.toggleCustomInlineStyle)(n, "fontFamily", e);
                r && o(r);
              });
            var t = e.editorState,
              n = e.modalHandler;
            return (
              (i.state = {
                expanded: void 0,
                currentFontFamily: t
                  ? Object(C.getSelectionCustomInlineStyle)(t, ["FONTFAMILY"])
                      .FONTFAMILY
                  : void 0
              }),
              n.registerCallBack(i.expandCollapse),
              i
            );
          }
          var e, t, n;
          return (
            (function(e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 }
              })),
                t && Qe(e, t);
            })(o, m["Component"]),
            (e = o),
            (t = [
              {
                key: "componentDidUpdate",
                value: function(e) {
                  var t = this.props.editorState;
                  t &&
                    t !== e.editorState &&
                    this.setState({
                      currentFontFamily: Object(
                        C.getSelectionCustomInlineStyle
                      )(t, ["FONTFAMILY"]).FONTFAMILY
                    });
                }
              },
              {
                key: "componentWillUnmount",
                value: function() {
                  this.props.modalHandler.deregisterCallBack(
                    this.expandCollapse
                  );
                }
              },
              {
                key: "render",
                value: function() {
                  var e = this.props,
                    t = e.config,
                    n = e.translations,
                    o = this.state,
                    r = o.expanded,
                    i = o.currentFontFamily,
                    a = t.component || Ue,
                    c = i && i.substring(11);
                  return S.a.createElement(a, {
                    translations: n,
                    config: t,
                    currentState: { fontFamily: c },
                    onChange: this.toggleFontFamily,
                    expanded: r,
                    onExpandEvent: this.onExpandEvent,
                    doExpand: this.doExpand,
                    doCollapse: this.doCollapse
                  });
                }
              }
            ]) && Fe(e.prototype, t),
            n && Fe(e, n),
            o
          );
        })();
        He.propTypes = {
          onChange: f.a.func.isRequired,
          editorState: f.a.object,
          modalHandler: f.a.object,
          config: f.a.object,
          translations: f.a.object
        };
        n(18);
        function Ze(e) {
          return (Ze =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function(e) {
                  return typeof e;
                }
              : function(e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                })(e);
        }
        function We(e, t) {
          for (var n = 0; n < t.length; n++) {
            var o = t[n];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              "value" in o && (o.writable = !0),
              Object.defineProperty(e, o.key, o);
          }
        }
        function Ge(e, t) {
          return !t || ("object" !== Ze(t) && "function" != typeof t)
            ? (function(e) {
                if (void 0 !== e) return e;
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              })(e)
            : t;
        }
        function Je(e) {
          return (Je = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              })(e);
        }
        function Ve(e, t) {
          return (Ve =
            Object.setPrototypeOf ||
            function(e, t) {
              return (e.__proto__ = t), e;
            })(e, t);
        }
        var qe = (function() {
          function i() {
            var e, t;
            !(function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, i);
            for (var n = arguments.length, o = new Array(n), r = 0; r < n; r++)
              o[r] = arguments[r];
            return (
              ((t = Ge(
                this,
                (e = Je(i)).call.apply(e, [this].concat(o))
              )).options = ["unordered", "ordered", "indent", "outdent"]),
              (t.toggleBlockType = function(e) {
                (0, t.props.onChange)(e);
              }),
              (t.indent = function() {
                (0, t.props.onChange)("indent");
              }),
              (t.outdent = function() {
                (0, t.props.onChange)("outdent");
              }),
              t
            );
          }
          var e, t, n;
          return (
            (function(e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 }
              })),
                t && Ve(e, t);
            })(i, m["Component"]),
            (e = i),
            (t = [
              {
                key: "renderInFlatList",
                value: function() {
                  var e = this.props,
                    t = e.config,
                    n = e.currentState.listType,
                    o = e.translations,
                    r = e.indentDisabled,
                    i = e.outdentDisabled,
                    a = t.options,
                    c = t.unordered,
                    l = t.ordered,
                    s = t.indent,
                    u = t.outdent,
                    p = t.className;
                  return S.a.createElement(
                    "div",
                    {
                      className: L()("rdw-list-wrapper", p),
                      "aria-label": "rdw-list-control"
                    },
                    0 <= a.indexOf("unordered") &&
                      S.a.createElement(
                        T,
                        {
                          value: "unordered",
                          onClick: this.toggleBlockType,
                          className: L()(c.className),
                          active: "unordered" === n,
                          title:
                            c.title || o["components.controls.list.unordered"]
                        },
                        S.a.createElement("img", { src: c.icon, alt: "" })
                      ),
                    0 <= a.indexOf("ordered") &&
                      S.a.createElement(
                        T,
                        {
                          value: "ordered",
                          onClick: this.toggleBlockType,
                          className: L()(l.className),
                          active: "ordered" === n,
                          title:
                            l.title || o["components.controls.list.ordered"]
                        },
                        S.a.createElement("img", { src: l.icon, alt: "" })
                      ),
                    0 <= a.indexOf("indent") &&
                      S.a.createElement(
                        T,
                        {
                          onClick: this.indent,
                          disabled: r,
                          className: L()(s.className),
                          title: s.title || o["components.controls.list.indent"]
                        },
                        S.a.createElement("img", { src: s.icon, alt: "" })
                      ),
                    0 <= a.indexOf("outdent") &&
                      S.a.createElement(
                        T,
                        {
                          onClick: this.outdent,
                          disabled: i,
                          className: L()(u.className),
                          title:
                            u.title || o["components.controls.list.outdent"]
                        },
                        S.a.createElement("img", { src: u.icon, alt: "" })
                      )
                  );
                }
              },
              {
                key: "renderInDropDown",
                value: function() {
                  var n = this,
                    e = this.props,
                    o = e.config,
                    t = e.expanded,
                    r = e.doCollapse,
                    i = e.doExpand,
                    a = e.onExpandEvent,
                    c = e.onChange,
                    l = e.currentState.listType,
                    s = e.translations,
                    u = o.options,
                    p = o.className,
                    d = o.dropdownClassName,
                    m = o.title;
                  return S.a.createElement(
                    F,
                    {
                      className: L()("rdw-list-dropdown", p),
                      optionWrapperClassName: L()(d),
                      onChange: c,
                      expanded: t,
                      doExpand: i,
                      doCollapse: r,
                      onExpandEvent: a,
                      "aria-label": "rdw-list-control",
                      title: m || s["components.controls.list.list"]
                    },
                    S.a.createElement("img", { src: h(o), alt: "" }),
                    this.options
                      .filter(function(e) {
                        return 0 <= u.indexOf(e);
                      })
                      .map(function(e, t) {
                        return S.a.createElement(
                          G,
                          {
                            key: t,
                            value: e,
                            disabled: n.props["".concat(e, "Disabled")],
                            className: L()(
                              "rdw-list-dropdownOption",
                              o[e].className
                            ),
                            active: l === e,
                            title:
                              o[e].title ||
                              s["components.controls.list.".concat(e)]
                          },
                          S.a.createElement("img", { src: o[e].icon, alt: "" })
                        );
                      })
                  );
                }
              },
              {
                key: "render",
                value: function() {
                  return this.props.config.inDropdown
                    ? this.renderInDropDown()
                    : this.renderInFlatList();
                }
              }
            ]) && We(e.prototype, t),
            n && We(e, n),
            i
          );
        })();
        function Ke(e) {
          return (Ke =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function(e) {
                  return typeof e;
                }
              : function(e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                })(e);
        }
        function Xe(e, t) {
          for (var n = 0; n < t.length; n++) {
            var o = t[n];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              "value" in o && (o.writable = !0),
              Object.defineProperty(e, o.key, o);
          }
        }
        function $e(e, t) {
          return !t || ("object" !== Ke(t) && "function" != typeof t)
            ? (function(e) {
                if (void 0 !== e) return e;
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              })(e)
            : t;
        }
        function et(e) {
          return (et = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              })(e);
        }
        function tt(e, t) {
          return (tt =
            Object.setPrototypeOf ||
            function(e, t) {
              return (e.__proto__ = t), e;
            })(e, t);
        }
        qe.propTypes = {
          expanded: f.a.bool,
          doExpand: f.a.func,
          doCollapse: f.a.func,
          onExpandEvent: f.a.func,
          config: f.a.object,
          onChange: f.a.func,
          currentState: f.a.object,
          translations: f.a.object,
          indentDisabled: f.a.bool,
          outdentDisabled: f.a.bool
        };
        var nt = (function() {
          function r(e) {
            var i;
            !(function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, r),
              ((i = $e(this, et(r).call(this, e))).onExpandEvent = function() {
                i.signalExpanded = !i.state.expanded;
              }),
              (i.onChange = function(e) {
                "unordered" === e
                  ? i.toggleBlockType("unordered-list-item")
                  : "ordered" === e
                  ? i.toggleBlockType("ordered-list-item")
                  : "indent" === e
                  ? i.adjustDepth(1)
                  : i.adjustDepth(-1);
              }),
              (i.expandCollapse = function() {
                i.setState({ expanded: i.signalExpanded }),
                  (i.signalExpanded = !1);
              }),
              (i.doExpand = function() {
                i.setState({ expanded: !0 });
              }),
              (i.doCollapse = function() {
                i.setState({ expanded: !1 });
              }),
              (i.toggleBlockType = function(e) {
                var t = i.props,
                  n = t.onChange,
                  o = t.editorState,
                  r = E.RichUtils.toggleBlockType(o, e);
                r && n(r);
              }),
              (i.adjustDepth = function(e) {
                var t = i.props,
                  n = t.onChange,
                  o = t.editorState,
                  r = Object(C.changeDepth)(o, e, 4);
                r && n(r);
              }),
              (i.isIndentDisabled = function() {
                var e = i.props.editorState,
                  t = i.state.currentBlock,
                  n = Object(C.getBlockBeforeSelectedBlock)(e);
                return (
                  !n ||
                  !Object(C.isListBlock)(t) ||
                  n.get("type") !== t.get("type") ||
                  n.get("depth") < t.get("depth")
                );
              }),
              (i.isOutdentDisabled = function() {
                var e = i.state.currentBlock;
                return !e || !Object(C.isListBlock)(e) || e.get("depth") <= 0;
              });
            var t = i.props,
              n = t.editorState,
              o = t.modalHandler;
            return (
              (i.state = {
                expanded: !1,
                currentBlock: n ? Object(C.getSelectedBlock)(n) : void 0
              }),
              o.registerCallBack(i.expandCollapse),
              i
            );
          }
          var e, t, n;
          return (
            (function(e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 }
              })),
                t && tt(e, t);
            })(r, m["Component"]),
            (e = r),
            (t = [
              {
                key: "componentDidUpdate",
                value: function(e) {
                  var t = this.props.editorState;
                  t &&
                    t !== e.editorState &&
                    this.setState({
                      currentBlock: Object(C.getSelectedBlock)(t)
                    });
                }
              },
              {
                key: "componentWillUnmount",
                value: function() {
                  this.props.modalHandler.deregisterCallBack(
                    this.expandCollapse
                  );
                }
              },
              {
                key: "render",
                value: function() {
                  var e,
                    t = this.props,
                    n = t.config,
                    o = t.translations,
                    r = this.state,
                    i = r.expanded,
                    a = r.currentBlock,
                    c = n.component || qe;
                  "unordered-list-item" === a.get("type")
                    ? (e = "unordered")
                    : "ordered-list-item" === a.get("type") && (e = "ordered");
                  var l = this.isIndentDisabled(),
                    s = this.isOutdentDisabled();
                  return S.a.createElement(c, {
                    config: n,
                    translations: o,
                    currentState: { listType: e },
                    expanded: i,
                    onExpandEvent: this.onExpandEvent,
                    doExpand: this.doExpand,
                    doCollapse: this.doCollapse,
                    onChange: this.onChange,
                    indentDisabled: l,
                    outdentDisabled: s
                  });
                }
              }
            ]) && Xe(e.prototype, t),
            n && Xe(e, n),
            r
          );
        })();
        nt.propTypes = {
          onChange: f.a.func.isRequired,
          editorState: f.a.object.isRequired,
          modalHandler: f.a.object,
          config: f.a.object,
          translations: f.a.object
        };
        n(19);
        function ot(e) {
          return (ot =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function(e) {
                  return typeof e;
                }
              : function(e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                })(e);
        }
        function rt(e, t) {
          for (var n = 0; n < t.length; n++) {
            var o = t[n];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              "value" in o && (o.writable = !0),
              Object.defineProperty(e, o.key, o);
          }
        }
        function it(e, t) {
          return !t || ("object" !== ot(t) && "function" != typeof t)
            ? (function(e) {
                if (void 0 !== e) return e;
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              })(e)
            : t;
        }
        function at(e) {
          return (at = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              })(e);
        }
        function ct(e, t) {
          return (ct =
            Object.setPrototypeOf ||
            function(e, t) {
              return (e.__proto__ = t), e;
            })(e, t);
        }
        var lt = (function() {
          function e() {
            return (
              (function(e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e),
              it(this, at(e).apply(this, arguments))
            );
          }
          var t, n, o;
          return (
            (function(e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 }
              })),
                t && ct(e, t);
            })(e, m["Component"]),
            (t = e),
            (n = [
              {
                key: "renderInFlatList",
                value: function() {
                  var e = this.props,
                    t = e.config,
                    n = t.options,
                    o = t.left,
                    r = t.center,
                    i = t.right,
                    a = t.justify,
                    c = t.className,
                    l = e.onChange,
                    s = e.currentState.textAlignment,
                    u = e.translations;
                  return S.a.createElement(
                    "div",
                    {
                      className: L()("rdw-text-align-wrapper", c),
                      "aria-label": "rdw-textalign-control"
                    },
                    0 <= n.indexOf("left") &&
                      S.a.createElement(
                        T,
                        {
                          value: "left",
                          className: L()(o.className),
                          active: "left" === s,
                          onClick: l,
                          title:
                            o.title || u["components.controls.textalign.left"]
                        },
                        S.a.createElement("img", { src: o.icon, alt: "" })
                      ),
                    0 <= n.indexOf("center") &&
                      S.a.createElement(
                        T,
                        {
                          value: "center",
                          className: L()(r.className),
                          active: "center" === s,
                          onClick: l,
                          title:
                            r.title || u["components.controls.textalign.center"]
                        },
                        S.a.createElement("img", { src: r.icon, alt: "" })
                      ),
                    0 <= n.indexOf("right") &&
                      S.a.createElement(
                        T,
                        {
                          value: "right",
                          className: L()(i.className),
                          active: "right" === s,
                          onClick: l,
                          title:
                            i.title || u["components.controls.textalign.right"]
                        },
                        S.a.createElement("img", { src: i.icon, alt: "" })
                      ),
                    0 <= n.indexOf("justify") &&
                      S.a.createElement(
                        T,
                        {
                          value: "justify",
                          className: L()(a.className),
                          active: "justify" === s,
                          onClick: l,
                          title:
                            a.title ||
                            u["components.controls.textalign.justify"]
                        },
                        S.a.createElement("img", { src: a.icon, alt: "" })
                      )
                  );
                }
              },
              {
                key: "renderInDropDown",
                value: function() {
                  var e = this.props,
                    t = e.config,
                    n = e.expanded,
                    o = e.doExpand,
                    r = e.onExpandEvent,
                    i = e.doCollapse,
                    a = e.currentState.textAlignment,
                    c = e.onChange,
                    l = e.translations,
                    s = t.options,
                    u = t.left,
                    p = t.center,
                    d = t.right,
                    m = t.justify,
                    f = t.className,
                    g = t.dropdownClassName,
                    y = t.title;
                  return S.a.createElement(
                    F,
                    {
                      className: L()("rdw-text-align-dropdown", f),
                      optionWrapperClassName: L()(g),
                      onChange: c,
                      expanded: n,
                      doExpand: o,
                      doCollapse: i,
                      onExpandEvent: r,
                      "aria-label": "rdw-textalign-control",
                      title: y || l["components.controls.textalign.textalign"]
                    },
                    S.a.createElement("img", {
                      src: (a && t[a] && t[a].icon) || h(t),
                      alt: ""
                    }),
                    0 <= s.indexOf("left") &&
                      S.a.createElement(
                        G,
                        {
                          value: "left",
                          active: "left" === a,
                          className: L()(
                            "rdw-text-align-dropdownOption",
                            u.className
                          ),
                          title:
                            u.title || l["components.controls.textalign.left"]
                        },
                        S.a.createElement("img", { src: u.icon, alt: "" })
                      ),
                    0 <= s.indexOf("center") &&
                      S.a.createElement(
                        G,
                        {
                          value: "center",
                          active: "center" === a,
                          className: L()(
                            "rdw-text-align-dropdownOption",
                            p.className
                          ),
                          title:
                            p.title || l["components.controls.textalign.center"]
                        },
                        S.a.createElement("img", { src: p.icon, alt: "" })
                      ),
                    0 <= s.indexOf("right") &&
                      S.a.createElement(
                        G,
                        {
                          value: "right",
                          active: "right" === a,
                          className: L()(
                            "rdw-text-align-dropdownOption",
                            d.className
                          ),
                          title:
                            d.title || l["components.controls.textalign.right"]
                        },
                        S.a.createElement("img", { src: d.icon, alt: "" })
                      ),
                    0 <= s.indexOf("justify") &&
                      S.a.createElement(
                        G,
                        {
                          value: "justify",
                          active: "justify" === a,
                          className: L()(
                            "rdw-text-align-dropdownOption",
                            m.className
                          ),
                          title:
                            m.title ||
                            l["components.controls.textalign.justify"]
                        },
                        S.a.createElement("img", { src: m.icon, alt: "" })
                      )
                  );
                }
              },
              {
                key: "render",
                value: function() {
                  return this.props.config.inDropdown
                    ? this.renderInDropDown()
                    : this.renderInFlatList();
                }
              }
            ]) && rt(t.prototype, n),
            o && rt(t, o),
            e
          );
        })();
        function st(e) {
          return (st =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function(e) {
                  return typeof e;
                }
              : function(e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                })(e);
        }
        function ut(e, t) {
          for (var n = 0; n < t.length; n++) {
            var o = t[n];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              "value" in o && (o.writable = !0),
              Object.defineProperty(e, o.key, o);
          }
        }
        function pt(e, t) {
          return !t || ("object" !== st(t) && "function" != typeof t)
            ? (function(e) {
                if (void 0 !== e) return e;
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              })(e)
            : t;
        }
        function dt(e) {
          return (dt = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              })(e);
        }
        function mt(e, t) {
          return (mt =
            Object.setPrototypeOf ||
            function(e, t) {
              return (e.__proto__ = t), e;
            })(e, t);
        }
        lt.propTypes = {
          expanded: f.a.bool,
          doExpand: f.a.func,
          doCollapse: f.a.func,
          onExpandEvent: f.a.func,
          config: f.a.object,
          onChange: f.a.func,
          currentState: f.a.object,
          translations: f.a.object
        };
        var ft = (function() {
          function n(e) {
            var r;
            !(function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, n),
              ((r = pt(this, dt(n).call(this, e))).onExpandEvent = function() {
                r.signalExpanded = !r.state.expanded;
              }),
              (r.expandCollapse = function() {
                r.setState({ expanded: r.signalExpanded }),
                  (r.signalExpanded = !1);
              }),
              (r.doExpand = function() {
                r.setState({ expanded: !0 });
              }),
              (r.doCollapse = function() {
                r.setState({ expanded: !1 });
              }),
              (r.addBlockAlignmentData = function(e) {
                var t = r.props,
                  n = t.editorState,
                  o = t.onChange;
                o(
                  r.state.currentTextAlignment !== e
                    ? Object(C.setBlockData)(n, { "text-align": e })
                    : Object(C.setBlockData)(n, { "text-align": void 0 })
                );
              });
            var t = r.props.modalHandler;
            return (
              (r.state = { currentTextAlignment: void 0 }),
              t.registerCallBack(r.expandCollapse),
              r
            );
          }
          var e, t, o;
          return (
            (function(e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 }
              })),
                t && mt(e, t);
            })(n, m["Component"]),
            (e = n),
            (t = [
              {
                key: "componentDidUpdate",
                value: function(e) {
                  var t = this.props.editorState;
                  t !== e.editorState &&
                    this.setState({
                      currentTextAlignment: Object(C.getSelectedBlocksMetadata)(
                        t
                      ).get("text-align")
                    });
                }
              },
              {
                key: "componentWillUnmount",
                value: function() {
                  this.props.modalHandler.deregisterCallBack(
                    this.expandCollapse
                  );
                }
              },
              {
                key: "render",
                value: function() {
                  var e = this.props,
                    t = e.config,
                    n = e.translations,
                    o = this.state,
                    r = o.expanded,
                    i = o.currentTextAlignment,
                    a = t.component || lt;
                  return S.a.createElement(a, {
                    config: t,
                    translations: n,
                    expanded: r,
                    onExpandEvent: this.onExpandEvent,
                    doExpand: this.doExpand,
                    doCollapse: this.doCollapse,
                    currentState: { textAlignment: i },
                    onChange: this.addBlockAlignmentData
                  });
                }
              }
            ]) && ut(e.prototype, t),
            o && ut(e, o),
            n
          );
        })();
        ft.propTypes = {
          editorState: f.a.object.isRequired,
          onChange: f.a.func.isRequired,
          modalHandler: f.a.object,
          config: f.a.object,
          translations: f.a.object
        };
        n(20);
        function gt(e) {
          return (gt =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function(e) {
                  return typeof e;
                }
              : function(e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                })(e);
        }
        function yt(e, t) {
          for (var n = 0; n < t.length; n++) {
            var o = t[n];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              "value" in o && (o.writable = !0),
              Object.defineProperty(e, o.key, o);
          }
        }
        function ht(e, t) {
          return !t || ("object" !== gt(t) && "function" != typeof t)
            ? (function(e) {
                if (void 0 !== e) return e;
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              })(e)
            : t;
        }
        function Mt(e) {
          return (Mt = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              })(e);
        }
        function bt(e, t) {
          return (bt =
            Object.setPrototypeOf ||
            function(e, t) {
              return (e.__proto__ = t), e;
            })(e, t);
        }
        var jt = (function() {
          function r() {
            var e, u;
            !(function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, r);
            for (var t = arguments.length, n = new Array(t), o = 0; o < t; o++)
              n[o] = arguments[o];
            return (
              ((u = ht(
                this,
                (e = Mt(r)).call.apply(e, [this].concat(n))
              )).state = { currentStyle: "color" }),
              (u.onChange = function(e) {
                (0, u.props.onChange)(u.state.currentStyle, e);
              }),
              (u.setCurrentStyleColor = function() {
                u.setState({ currentStyle: "color" });
              }),
              (u.setCurrentStyleBgcolor = function() {
                u.setState({ currentStyle: "bgcolor" });
              }),
              (u.renderModal = function() {
                var e = u.props,
                  t = e.config,
                  n = t.popupClassName,
                  o = t.colors,
                  r = e.currentState,
                  i = r.color,
                  a = r.bgColor,
                  c = e.translations,
                  l = u.state.currentStyle,
                  s = "color" === l ? i : a;
                return S.a.createElement(
                  "div",
                  { className: L()("rdw-colorpicker-modal", n), onClick: d },
                  S.a.createElement(
                    "span",
                    { className: "rdw-colorpicker-modal-header" },
                    S.a.createElement(
                      "span",
                      {
                        className: L()("rdw-colorpicker-modal-style-label", {
                          "rdw-colorpicker-modal-style-label-active":
                            "color" === l
                        }),
                        onClick: u.setCurrentStyleColor
                      },
                      c["components.controls.colorpicker.text"]
                    ),
                    S.a.createElement(
                      "span",
                      {
                        className: L()("rdw-colorpicker-modal-style-label", {
                          "rdw-colorpicker-modal-style-label-active":
                            "bgcolor" === l
                        }),
                        onClick: u.setCurrentStyleBgcolor
                      },
                      c["components.controls.colorpicker.background"]
                    )
                  ),
                  S.a.createElement(
                    "span",
                    { className: "rdw-colorpicker-modal-options" },
                    o.map(function(e, t) {
                      return S.a.createElement(
                        T,
                        {
                          value: e,
                          key: t,
                          className: "rdw-colorpicker-option",
                          activeClassName: "rdw-colorpicker-option-active",
                          active: s === e,
                          onClick: u.onChange
                        },
                        S.a.createElement("span", {
                          style: { backgroundColor: e },
                          className: "rdw-colorpicker-cube"
                        })
                      );
                    })
                  )
                );
              }),
              u
            );
          }
          var e, t, n;
          return (
            (function(e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 }
              })),
                t && bt(e, t);
            })(r, m["Component"]),
            (e = r),
            (t = [
              {
                key: "componentDidUpdate",
                value: function(e) {
                  this.props.expanded &&
                    !e.expanded &&
                    this.setState({ currentStyle: "color" });
                }
              },
              {
                key: "render",
                value: function() {
                  var e = this.props,
                    t = e.config,
                    n = t.icon,
                    o = t.className,
                    r = t.title,
                    i = e.expanded,
                    a = e.onExpandEvent,
                    c = e.translations;
                  return S.a.createElement(
                    "div",
                    {
                      className: "rdw-colorpicker-wrapper",
                      "aria-haspopup": "true",
                      "aria-expanded": i,
                      "aria-label": "rdw-color-picker",
                      title:
                        r || c["components.controls.colorpicker.colorpicker"]
                    },
                    S.a.createElement(
                      T,
                      { onClick: a, className: L()(o) },
                      S.a.createElement("img", { src: n, alt: "" })
                    ),
                    i ? this.renderModal() : void 0
                  );
                }
              }
            ]) && yt(e.prototype, t),
            n && yt(e, n),
            r
          );
        })();
        jt.propTypes = {
          expanded: f.a.bool,
          onExpandEvent: f.a.func,
          onChange: f.a.func,
          config: f.a.object,
          currentState: f.a.object,
          translations: f.a.object
        };
        var Nt = jt;
        function St(e) {
          return (St =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function(e) {
                  return typeof e;
                }
              : function(e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                })(e);
        }
        function Et(e, t) {
          for (var n = 0; n < t.length; n++) {
            var o = t[n];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              "value" in o && (o.writable = !0),
              Object.defineProperty(e, o.key, o);
          }
        }
        function Ct(e, t) {
          return !t || ("object" !== St(t) && "function" != typeof t)
            ? (function(e) {
                if (void 0 !== e) return e;
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              })(e)
            : t;
        }
        function Lt(e) {
          return (Lt = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              })(e);
        }
        function kt(e, t) {
          return (kt =
            Object.setPrototypeOf ||
            function(e, t) {
              return (e.__proto__ = t), e;
            })(e, t);
        }
        var Dt = (function() {
          function r(e) {
            var a;
            !(function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, r),
              ((a = Ct(this, Lt(r).call(this, e))).state = {
                expanded: !1,
                currentColor: void 0,
                currentBgColor: void 0
              }),
              (a.onExpandEvent = function() {
                a.signalExpanded = !a.state.expanded;
              }),
              (a.expandCollapse = function() {
                a.setState({ expanded: a.signalExpanded }),
                  (a.signalExpanded = !1);
              }),
              (a.doExpand = function() {
                a.setState({ expanded: !0 });
              }),
              (a.doCollapse = function() {
                a.setState({ expanded: !1 });
              }),
              (a.toggleColor = function(e, t) {
                var n = a.props,
                  o = n.editorState,
                  r = n.onChange,
                  i = Object(C.toggleCustomInlineStyle)(o, e, t);
                i && r(i), a.doCollapse();
              });
            var t = e.editorState,
              n = e.modalHandler,
              o = {
                expanded: !1,
                currentColor: void 0,
                currentBgColor: void 0
              };
            return (
              t &&
                ((o.currentColor = Object(C.getSelectionCustomInlineStyle)(t, [
                  "COLOR"
                ]).COLOR),
                (o.currentBgColor = Object(C.getSelectionCustomInlineStyle)(t, [
                  "BGCOLOR"
                ]).BGCOLOR)),
              (a.state = o),
              n.registerCallBack(a.expandCollapse),
              a
            );
          }
          var e, t, n;
          return (
            (function(e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 }
              })),
                t && kt(e, t);
            })(r, m["Component"]),
            (e = r),
            (t = [
              {
                key: "componentDidUpdate",
                value: function(e) {
                  var t = this.props.editorState;
                  t &&
                    t !== e.editorState &&
                    this.setState({
                      currentColor: Object(C.getSelectionCustomInlineStyle)(t, [
                        "COLOR"
                      ]).COLOR,
                      currentBgColor: Object(C.getSelectionCustomInlineStyle)(
                        t,
                        ["BGCOLOR"]
                      ).BGCOLOR
                    });
                }
              },
              {
                key: "componentWillUnmount",
                value: function() {
                  this.props.modalHandler.deregisterCallBack(
                    this.expandCollapse
                  );
                }
              },
              {
                key: "render",
                value: function() {
                  var e = this.props,
                    t = e.config,
                    n = e.translations,
                    o = this.state,
                    r = o.currentColor,
                    i = o.currentBgColor,
                    a = o.expanded,
                    c = t.component || Nt,
                    l = r && r.substring(6),
                    s = i && i.substring(8);
                  return S.a.createElement(c, {
                    config: t,
                    translations: n,
                    onChange: this.toggleColor,
                    expanded: a,
                    onExpandEvent: this.onExpandEvent,
                    doExpand: this.doExpand,
                    doCollapse: this.doCollapse,
                    currentState: { color: l, bgColor: s }
                  });
                }
              }
            ]) && Et(e.prototype, t),
            n && Et(e, n),
            r
          );
        })();
        Dt.propTypes = {
          onChange: f.a.func.isRequired,
          editorState: f.a.object.isRequired,
          modalHandler: f.a.object,
          config: f.a.object,
          translations: f.a.object
        };
        var vt = Dt,
          wt = n(7),
          xt = n.n(wt);
        n(26);
        function It(e) {
          return (It =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function(e) {
                  return typeof e;
                }
              : function(e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                })(e);
        }
        function Ot(e, t) {
          for (var n = 0; n < t.length; n++) {
            var o = t[n];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              "value" in o && (o.writable = !0),
              Object.defineProperty(e, o.key, o);
          }
        }
        function At(e, t) {
          return !t || ("object" !== It(t) && "function" != typeof t)
            ? (function(e) {
                if (void 0 !== e) return e;
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              })(e)
            : t;
        }
        function Tt(e) {
          return (Tt = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              })(e);
        }
        function zt(e, t) {
          return (zt =
            Object.setPrototypeOf ||
            function(e, t) {
              return (e.__proto__ = t), e;
            })(e, t);
        }
        var _t = (function() {
          function r() {
            var e, a;
            !(function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, r);
            for (var t = arguments.length, n = new Array(t), o = 0; o < t; o++)
              n[o] = arguments[o];
            return (
              ((a = At(
                this,
                (e = Tt(r)).call.apply(e, [this].concat(n))
              )).state = {
                showModal: !1,
                linkTarget: "",
                linkTitle: "",
                linkTargetOption: a.props.config.defaultTargetOption
              }),
              (a.removeLink = function() {
                (0, a.props.onChange)("unlink");
              }),
              (a.addLink = function() {
                var e = a.props.onChange,
                  t = a.state;
                e("link", t.linkTitle, t.linkTarget, t.linkTargetOption);
              }),
              (a.updateValue = function(e) {
                var t, n, o;
                a.setState(
                  ((t = {}),
                  (n = "".concat(e.target.name)),
                  (o = e.target.value),
                  n in t
                    ? Object.defineProperty(t, n, {
                        value: o,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                      })
                    : (t[n] = o),
                  t)
                );
              }),
              (a.updateTargetOption = function(e) {
                a.setState({
                  linkTargetOption: e.target.checked ? "_blank" : "_self"
                });
              }),
              (a.hideModal = function() {
                a.setState({ showModal: !1 });
              }),
              (a.signalExpandShowModal = function() {
                var e = a.props,
                  t = e.onExpandEvent,
                  n = e.currentState,
                  o = n.link,
                  r = n.selectionText,
                  i = a.state.linkTargetOption;
                t(),
                  a.setState({
                    showModal: !0,
                    linkTarget: (o && o.target) || "",
                    linkTargetOption: (o && o.targetOption) || i,
                    linkTitle: (o && o.title) || r
                  });
              }),
              (a.forceExpandAndShowModal = function() {
                var e = a.props,
                  t = e.doExpand,
                  n = e.currentState,
                  o = n.link,
                  r = n.selectionText,
                  i = a.state.linkTargetOption;
                t(),
                  a.setState({
                    showModal: !0,
                    linkTarget: o && o.target,
                    linkTargetOption: (o && o.targetOption) || i,
                    linkTitle: (o && o.title) || r
                  });
              }),
              a
            );
          }
          var e, t, n;
          return (
            (function(e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 }
              })),
                t && zt(e, t);
            })(r, m["Component"]),
            (e = r),
            (t = [
              {
                key: "componentDidUpdate",
                value: function(e) {
                  e.expanded &&
                    !this.props.expanded &&
                    this.setState({
                      showModal: !1,
                      linkTarget: "",
                      linkTitle: "",
                      linkTargetOption: this.props.config.defaultTargetOption
                    });
                }
              },
              {
                key: "renderAddLinkModal",
                value: function() {
                  var e = this.props,
                    t = e.config.popupClassName,
                    n = e.doCollapse,
                    o = e.translations,
                    r = this.state,
                    i = r.linkTitle,
                    a = r.linkTarget,
                    c = r.linkTargetOption;
                  return S.a.createElement(
                    "div",
                    { className: L()("rdw-link-modal", t), onClick: d },
                    S.a.createElement(
                      "label",
                      {
                        className: "rdw-link-modal-label",
                        htmlFor: "linkTitle"
                      },
                      o["components.controls.link.linkTitle"]
                    ),
                    S.a.createElement("input", {
                      id: "linkTitle",
                      className: "rdw-link-modal-input",
                      onChange: this.updateValue,
                      onBlur: this.updateValue,
                      name: "linkTitle",
                      value: i
                    }),
                    S.a.createElement(
                      "label",
                      {
                        className: "rdw-link-modal-label",
                        htmlFor: "linkTarget"
                      },
                      o["components.controls.link.linkTarget"]
                    ),
                    S.a.createElement("input", {
                      id: "linkTarget",
                      className: "rdw-link-modal-input",
                      onChange: this.updateValue,
                      onBlur: this.updateValue,
                      name: "linkTarget",
                      value: a
                    }),
                    S.a.createElement(
                      "label",
                      {
                        className: "rdw-link-modal-target-option",
                        htmlFor: "openLinkInNewWindow"
                      },
                      S.a.createElement("input", {
                        id: "openLinkInNewWindow",
                        type: "checkbox",
                        defaultChecked: "_blank" === c,
                        value: "_blank",
                        onChange: this.updateTargetOption
                      }),
                      S.a.createElement(
                        "span",
                        null,
                        o["components.controls.link.linkTargetOption"]
                      )
                    ),
                    S.a.createElement(
                      "span",
                      { className: "rdw-link-modal-buttonsection" },
                      S.a.createElement(
                        "button",
                        {
                          className: "rdw-link-modal-btn",
                          onClick: this.addLink,
                          disabled: !a || !i
                        },
                        o["generic.add"]
                      ),
                      S.a.createElement(
                        "button",
                        { className: "rdw-link-modal-btn", onClick: n },
                        o["generic.cancel"]
                      )
                    )
                  );
                }
              },
              {
                key: "renderInFlatList",
                value: function() {
                  var e = this.props,
                    t = e.config,
                    n = t.options,
                    o = t.link,
                    r = t.unlink,
                    i = t.className,
                    a = e.currentState,
                    c = e.expanded,
                    l = e.translations,
                    s = this.state.showModal;
                  return S.a.createElement(
                    "div",
                    {
                      className: L()("rdw-link-wrapper", i),
                      "aria-label": "rdw-link-control"
                    },
                    0 <= n.indexOf("link") &&
                      S.a.createElement(
                        T,
                        {
                          value: "unordered-list-item",
                          className: L()(o.className),
                          onClick: this.signalExpandShowModal,
                          "aria-haspopup": "true",
                          "aria-expanded": s,
                          title: o.title || l["components.controls.link.link"]
                        },
                        S.a.createElement("img", { src: o.icon, alt: "" })
                      ),
                    0 <= n.indexOf("unlink") &&
                      S.a.createElement(
                        T,
                        {
                          disabled: !a.link,
                          value: "ordered-list-item",
                          className: L()(r.className),
                          onClick: this.removeLink,
                          title: r.title || l["components.controls.link.unlink"]
                        },
                        S.a.createElement("img", { src: r.icon, alt: "" })
                      ),
                    c && s ? this.renderAddLinkModal() : void 0
                  );
                }
              },
              {
                key: "renderInDropDown",
                value: function() {
                  var e = this.props,
                    t = e.expanded,
                    n = e.onExpandEvent,
                    o = e.doCollapse,
                    r = e.doExpand,
                    i = e.onChange,
                    a = e.config,
                    c = e.currentState,
                    l = e.translations,
                    s = a.options,
                    u = a.link,
                    p = a.unlink,
                    d = a.className,
                    m = a.dropdownClassName,
                    f = a.title,
                    g = this.state.showModal;
                  return S.a.createElement(
                    "div",
                    {
                      className: "rdw-link-wrapper",
                      "aria-haspopup": "true",
                      "aria-label": "rdw-link-control",
                      "aria-expanded": t,
                      title: f
                    },
                    S.a.createElement(
                      F,
                      {
                        className: L()("rdw-link-dropdown", d),
                        optionWrapperClassName: L()(m),
                        onChange: i,
                        expanded: t && !g,
                        doExpand: r,
                        doCollapse: o,
                        onExpandEvent: n
                      },
                      S.a.createElement("img", { src: h(a), alt: "" }),
                      0 <= s.indexOf("link") &&
                        S.a.createElement(
                          G,
                          {
                            onClick: this.forceExpandAndShowModal,
                            className: L()(
                              "rdw-link-dropdownoption",
                              u.className
                            ),
                            title: u.title || l["components.controls.link.link"]
                          },
                          S.a.createElement("img", { src: u.icon, alt: "" })
                        ),
                      0 <= s.indexOf("unlink") &&
                        S.a.createElement(
                          G,
                          {
                            onClick: this.removeLink,
                            disabled: !c.link,
                            className: L()(
                              "rdw-link-dropdownoption",
                              p.className
                            ),
                            title:
                              p.title || l["components.controls.link.unlink"]
                          },
                          S.a.createElement("img", { src: p.icon, alt: "" })
                        )
                    ),
                    t && g ? this.renderAddLinkModal() : void 0
                  );
                }
              },
              {
                key: "render",
                value: function() {
                  return this.props.config.inDropdown
                    ? this.renderInDropDown()
                    : this.renderInFlatList();
                }
              }
            ]) && Ot(e.prototype, t),
            n && Ot(e, n),
            r
          );
        })();
        _t.propTypes = {
          expanded: f.a.bool,
          doExpand: f.a.func,
          doCollapse: f.a.func,
          onExpandEvent: f.a.func,
          config: f.a.object,
          onChange: f.a.func,
          currentState: f.a.object,
          translations: f.a.object
        };
        var Pt = _t;
        function Ut(e) {
          return (Ut =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function(e) {
                  return typeof e;
                }
              : function(e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                })(e);
        }
        function Yt(e, t) {
          for (var n = 0; n < t.length; n++) {
            var o = t[n];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              "value" in o && (o.writable = !0),
              Object.defineProperty(e, o.key, o);
          }
        }
        function Ft(e, t) {
          return !t || ("object" !== Ut(t) && "function" != typeof t)
            ? (function(e) {
                if (void 0 !== e) return e;
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              })(e)
            : t;
        }
        function Rt(e) {
          return (Rt = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              })(e);
        }
        function Bt(e, t) {
          return (Bt =
            Object.setPrototypeOf ||
            function(e, t) {
              return (e.__proto__ = t), e;
            })(e, t);
        }
        function Qt(t, e) {
          var n = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(t);
            e &&
              (o = o.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })),
              n.push.apply(n, o);
          }
          return n;
        }
        function Ht(e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
                })
              : (e[t] = n),
            e
          );
        }
        function Zt(e) {
          var t = Wt.match(e.target);
          return (function(t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = null != arguments[e] ? arguments[e] : {};
              e % 2
                ? Qt(Object(n), !0).forEach(function(e) {
                    Ht(t, e, n[e]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    t,
                    Object.getOwnPropertyDescriptors(n)
                  )
                : Qt(Object(n)).forEach(function(e) {
                    Object.defineProperty(
                      t,
                      e,
                      Object.getOwnPropertyDescriptor(n, e)
                    );
                  });
            }
            return t;
          })({}, e, { target: (t && t[0] && t[0].url) || e.target });
        }
        var Wt = xt()(),
          Gt = (function() {
            function r(e) {
              var d;
              !(function(e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, r),
                ((d = Ft(
                  this,
                  Rt(r).call(this, e)
                )).onExpandEvent = function() {
                  d.signalExpanded = !d.state.expanded;
                }),
                (d.onChange = function(e, t, n, o) {
                  var r = d.props.config.linkCallback;
                  if ("link" === e) {
                    var i = (r || Zt)({ title: t, target: n, targetOption: o });
                    d.addLink(i.title, i.target, i.targetOption);
                  } else d.removeLink();
                }),
                (d.getCurrentValues = function() {
                  var e = d.props.editorState,
                    t = d.state.currentEntity,
                    n = e.getCurrentContent(),
                    o = {};
                  if (t && "LINK" === n.getEntity(t).get("type")) {
                    o.link = {};
                    var r = t && Object(C.getEntityRange)(e, t);
                    (o.link.target = t && n.getEntity(t).get("data").url),
                      (o.link.targetOption =
                        t && n.getEntity(t).get("data").targetOption),
                      (o.link.title = r && r.text);
                  }
                  return (o.selectionText = Object(C.getSelectionText)(e)), o;
                }),
                (d.doExpand = function() {
                  d.setState({ expanded: !0 });
                }),
                (d.expandCollapse = function() {
                  d.setState({ expanded: d.signalExpanded }),
                    (d.signalExpanded = !1);
                }),
                (d.doCollapse = function() {
                  d.setState({ expanded: !1 });
                }),
                (d.removeLink = function() {
                  var e = d.props,
                    t = e.editorState,
                    n = e.onChange,
                    o = d.state.currentEntity,
                    r = t.getSelection();
                  if (o) {
                    var i = Object(C.getEntityRange)(t, o);
                    (r = r.getIsBackward()
                      ? r.merge({ anchorOffset: i.end, focusOffset: i.start })
                      : r.merge({ anchorOffset: i.start, focusOffset: i.end })),
                      n(E.RichUtils.toggleLink(t, r, null));
                  }
                }),
                (d.addLink = function(e, t, n) {
                  var o = d.props,
                    r = o.editorState,
                    i = o.onChange,
                    a = d.state.currentEntity,
                    c = r.getSelection();
                  if (a) {
                    var l = Object(C.getEntityRange)(r, a);
                    c = c.getIsBackward()
                      ? c.merge({ anchorOffset: l.end, focusOffset: l.start })
                      : c.merge({ anchorOffset: l.start, focusOffset: l.end });
                  }
                  var s = r
                      .getCurrentContent()
                      .createEntity("LINK", "MUTABLE", {
                        url: t,
                        targetOption: n
                      })
                      .getLastCreatedEntityKey(),
                    u = E.Modifier.replaceText(
                      r.getCurrentContent(),
                      c,
                      "".concat(e),
                      r.getCurrentInlineStyle(),
                      s
                    ),
                    p = E.EditorState.push(r, u, "insert-characters");
                  (c = p
                    .getSelection()
                    .merge({
                      anchorOffset: c.get("anchorOffset") + e.length,
                      focusOffset: c.get("anchorOffset") + e.length
                    })),
                    (p = E.EditorState.acceptSelection(p, c)),
                    (u = E.Modifier.insertText(
                      p.getCurrentContent(),
                      c,
                      " ",
                      p.getCurrentInlineStyle(),
                      void 0
                    )),
                    i(E.EditorState.push(p, u, "insert-characters")),
                    d.doCollapse();
                });
              var t = d.props,
                n = t.editorState,
                o = t.modalHandler;
              return (
                (d.state = {
                  expanded: !1,
                  link: void 0,
                  selectionText: void 0,
                  currentEntity: n ? Object(C.getSelectionEntity)(n) : void 0
                }),
                o.registerCallBack(d.expandCollapse),
                d
              );
            }
            var e, t, n;
            return (
              (function(e, t) {
                if ("function" != typeof t && null !== t)
                  throw new TypeError(
                    "Super expression must either be null or a function"
                  );
                (e.prototype = Object.create(t && t.prototype, {
                  constructor: { value: e, writable: !0, configurable: !0 }
                })),
                  t && Bt(e, t);
              })(r, m["Component"]),
              (e = r),
              (t = [
                {
                  key: "componentDidUpdate",
                  value: function(e) {
                    var t = this.props.editorState;
                    t &&
                      t !== e.editorState &&
                      this.setState({
                        currentEntity: Object(C.getSelectionEntity)(t)
                      });
                  }
                },
                {
                  key: "componentWillUnmount",
                  value: function() {
                    this.props.modalHandler.deregisterCallBack(
                      this.expandCollapse
                    );
                  }
                },
                {
                  key: "render",
                  value: function() {
                    var e = this.props,
                      t = e.config,
                      n = e.translations,
                      o = this.state.expanded,
                      r = this.getCurrentValues(),
                      i = r.link,
                      a = r.selectionText,
                      c = t.component || Pt;
                    return S.a.createElement(c, {
                      config: t,
                      translations: n,
                      expanded: o,
                      onExpandEvent: this.onExpandEvent,
                      doExpand: this.doExpand,
                      doCollapse: this.doCollapse,
                      currentState: { link: i, selectionText: a },
                      onChange: this.onChange
                    });
                  }
                }
              ]) && Yt(e.prototype, t),
              n && Yt(e, n),
              r
            );
          })();
        Gt.propTypes = {
          editorState: f.a.object.isRequired,
          onChange: f.a.func.isRequired,
          modalHandler: f.a.object,
          config: f.a.object,
          translations: f.a.object
        };
        var Jt = Gt;
        n(27);
        function Vt(e) {
          return (Vt =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function(e) {
                  return typeof e;
                }
              : function(e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                })(e);
        }
        function qt(e, t) {
          for (var n = 0; n < t.length; n++) {
            var o = t[n];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              "value" in o && (o.writable = !0),
              Object.defineProperty(e, o.key, o);
          }
        }
        function Kt(e, t) {
          return !t || ("object" !== Vt(t) && "function" != typeof t)
            ? (function(e) {
                if (void 0 !== e) return e;
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              })(e)
            : t;
        }
        function Xt(e) {
          return (Xt = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              })(e);
        }
        function $t(e, t) {
          return ($t =
            Object.setPrototypeOf ||
            function(e, t) {
              return (e.__proto__ = t), e;
            })(e, t);
        }
        var en = (function() {
          function i() {
            var e, r;
            !(function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, i);
            for (var t = arguments.length, n = new Array(t), o = 0; o < t; o++)
              n[o] = arguments[o];
            return (
              ((r = Kt(
                this,
                (e = Xt(i)).call.apply(e, [this].concat(n))
              )).state = {
                embeddedLink: "",
                height: r.props.config.defaultSize.height,
                width: r.props.config.defaultSize.width
              }),
              (r.onChange = function() {
                var e = r.props.onChange,
                  t = r.state;
                e(t.embeddedLink, t.height, t.width);
              }),
              (r.updateValue = function(e) {
                var t, n, o;
                r.setState(
                  ((t = {}),
                  (n = "".concat(e.target.name)),
                  (o = e.target.value),
                  n in t
                    ? Object.defineProperty(t, n, {
                        value: o,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                      })
                    : (t[n] = o),
                  t)
                );
              }),
              r
            );
          }
          var e, t, n;
          return (
            (function(e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 }
              })),
                t && $t(e, t);
            })(i, m["Component"]),
            (e = i),
            (t = [
              {
                key: "componentDidUpdate",
                value: function(e) {
                  var t = this.props,
                    n = t.expanded,
                    o = t.config;
                  if (!n && e.expanded) {
                    var r = o.defaultSize,
                      i = r.height,
                      a = r.width;
                    this.setState({ embeddedLink: "", height: i, width: a });
                  }
                }
              },
              {
                key: "rendeEmbeddedLinkModal",
                value: function() {
                  var e = this.state,
                    t = e.embeddedLink,
                    n = e.height,
                    o = e.width,
                    r = this.props,
                    i = r.config.popupClassName,
                    a = r.doCollapse,
                    c = r.translations;
                  return S.a.createElement(
                    "div",
                    { className: L()("rdw-embedded-modal", i), onClick: d },
                    S.a.createElement(
                      "div",
                      { className: "rdw-embedded-modal-header" },
                      S.a.createElement(
                        "span",
                        { className: "rdw-embedded-modal-header-option" },
                        c["components.controls.embedded.embeddedlink"],
                        S.a.createElement("span", {
                          className: "rdw-embedded-modal-header-label"
                        })
                      )
                    ),
                    S.a.createElement(
                      "div",
                      { className: "rdw-embedded-modal-link-section" },
                      S.a.createElement(
                        "span",
                        { className: "rdw-embedded-modal-link-input-wrapper" },
                        S.a.createElement("input", {
                          className: "rdw-embedded-modal-link-input",
                          placeholder:
                            c["components.controls.embedded.enterlink"],
                          onChange: this.updateValue,
                          onBlur: this.updateValue,
                          value: t,
                          name: "embeddedLink"
                        }),
                        S.a.createElement(
                          "span",
                          { className: "rdw-image-mandatory-sign" },
                          "*"
                        )
                      ),
                      S.a.createElement(
                        "div",
                        { className: "rdw-embedded-modal-size" },
                        S.a.createElement(
                          "span",
                          null,
                          S.a.createElement("input", {
                            onChange: this.updateValue,
                            onBlur: this.updateValue,
                            value: n,
                            name: "height",
                            className: "rdw-embedded-modal-size-input",
                            placeholder: "Height"
                          }),
                          S.a.createElement(
                            "span",
                            { className: "rdw-image-mandatory-sign" },
                            "*"
                          )
                        ),
                        S.a.createElement(
                          "span",
                          null,
                          S.a.createElement("input", {
                            onChange: this.updateValue,
                            onBlur: this.updateValue,
                            value: o,
                            name: "width",
                            className: "rdw-embedded-modal-size-input",
                            placeholder: "Width"
                          }),
                          S.a.createElement(
                            "span",
                            { className: "rdw-image-mandatory-sign" },
                            "*"
                          )
                        )
                      )
                    ),
                    S.a.createElement(
                      "span",
                      { className: "rdw-embedded-modal-btn-section" },
                      S.a.createElement(
                        "button",
                        {
                          type: "button",
                          className: "rdw-embedded-modal-btn",
                          onClick: this.onChange,
                          disabled: !t || !n || !o
                        },
                        c["generic.add"]
                      ),
                      S.a.createElement(
                        "button",
                        {
                          type: "button",
                          className: "rdw-embedded-modal-btn",
                          onClick: a
                        },
                        c["generic.cancel"]
                      )
                    )
                  );
                }
              },
              {
                key: "render",
                value: function() {
                  var e = this.props,
                    t = e.config,
                    n = t.icon,
                    o = t.className,
                    r = t.title,
                    i = e.expanded,
                    a = e.onExpandEvent,
                    c = e.translations;
                  return S.a.createElement(
                    "div",
                    {
                      className: "rdw-embedded-wrapper",
                      "aria-haspopup": "true",
                      "aria-expanded": i,
                      "aria-label": "rdw-embedded-control"
                    },
                    S.a.createElement(
                      T,
                      {
                        className: L()(o),
                        value: "unordered-list-item",
                        onClick: a,
                        title: r || c["components.controls.embedded.embedded"]
                      },
                      S.a.createElement("img", { src: n, alt: "" })
                    ),
                    i ? this.rendeEmbeddedLinkModal() : void 0
                  );
                }
              }
            ]) && qt(e.prototype, t),
            n && qt(e, n),
            i
          );
        })();
        en.propTypes = {
          expanded: f.a.bool,
          onExpandEvent: f.a.func,
          onChange: f.a.func,
          config: f.a.object,
          translations: f.a.object,
          doCollapse: f.a.func
        };
        var tn = en;
        function nn(e) {
          return (nn =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function(e) {
                  return typeof e;
                }
              : function(e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                })(e);
        }
        function on(e, t) {
          for (var n = 0; n < t.length; n++) {
            var o = t[n];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              "value" in o && (o.writable = !0),
              Object.defineProperty(e, o.key, o);
          }
        }
        function rn(e, t) {
          return !t || ("object" !== nn(t) && "function" != typeof t)
            ? (function(e) {
                if (void 0 !== e) return e;
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              })(e)
            : t;
        }
        function an(e) {
          return (an = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              })(e);
        }
        function cn(e, t) {
          return (cn =
            Object.setPrototypeOf ||
            function(e, t) {
              return (e.__proto__ = t), e;
            })(e, t);
        }
        var ln = (function() {
          function r() {
            var e, s;
            !(function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, r);
            for (var t = arguments.length, n = new Array(t), o = 0; o < t; o++)
              n[o] = arguments[o];
            return (
              ((s = rn(
                this,
                (e = an(r)).call.apply(e, [this].concat(n))
              )).state = { expanded: !1 }),
              (s.onExpandEvent = function() {
                s.signalExpanded = !s.state.expanded;
              }),
              (s.expandCollapse = function() {
                s.setState({ expanded: s.signalExpanded }),
                  (s.signalExpanded = !1);
              }),
              (s.doExpand = function() {
                s.setState({ expanded: !0 });
              }),
              (s.doCollapse = function() {
                s.setState({ expanded: !1 });
              }),
              (s.addEmbeddedLink = function(e, t, n) {
                var o = s.props,
                  r = o.editorState,
                  i = o.onChange,
                  a = o.config.embedCallback,
                  c = a ? a(e) : e,
                  l = r
                    .getCurrentContent()
                    .createEntity("EMBEDDED_LINK", "MUTABLE", {
                      src: c,
                      height: t,
                      width: n
                    })
                    .getLastCreatedEntityKey();
                i(E.AtomicBlockUtils.insertAtomicBlock(r, l, " ")),
                  s.doCollapse();
              }),
              s
            );
          }
          var e, t, n;
          return (
            (function(e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 }
              })),
                t && cn(e, t);
            })(r, m["Component"]),
            (e = r),
            (t = [
              {
                key: "componentDidMount",
                value: function() {
                  this.props.modalHandler.registerCallBack(this.expandCollapse);
                }
              },
              {
                key: "componentWillUnmount",
                value: function() {
                  this.props.modalHandler.deregisterCallBack(
                    this.expandCollapse
                  );
                }
              },
              {
                key: "render",
                value: function() {
                  var e = this.props,
                    t = e.config,
                    n = e.translations,
                    o = this.state.expanded,
                    r = t.component || tn;
                  return S.a.createElement(r, {
                    config: t,
                    translations: n,
                    onChange: this.addEmbeddedLink,
                    expanded: o,
                    onExpandEvent: this.onExpandEvent,
                    doExpand: this.doExpand,
                    doCollapse: this.doCollapse
                  });
                }
              }
            ]) && on(e.prototype, t),
            n && on(e, n),
            r
          );
        })();
        ln.propTypes = {
          editorState: f.a.object.isRequired,
          onChange: f.a.func.isRequired,
          modalHandler: f.a.object,
          config: f.a.object,
          translations: f.a.object
        };
        var sn = ln;
        n(28);
        function un(e) {
          return (un =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function(e) {
                  return typeof e;
                }
              : function(e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                })(e);
        }
        function pn(e, t) {
          for (var n = 0; n < t.length; n++) {
            var o = t[n];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              "value" in o && (o.writable = !0),
              Object.defineProperty(e, o.key, o);
          }
        }
        function dn(e, t) {
          return !t || ("object" !== un(t) && "function" != typeof t)
            ? (function(e) {
                if (void 0 !== e) return e;
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              })(e)
            : t;
        }
        function mn(e) {
          return (mn = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              })(e);
        }
        function fn(e, t) {
          return (fn =
            Object.setPrototypeOf ||
            function(e, t) {
              return (e.__proto__ = t), e;
            })(e, t);
        }
        var gn = (function() {
          function i() {
            var e, t;
            !(function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, i);
            for (var n = arguments.length, o = new Array(n), r = 0; r < n; r++)
              o[r] = arguments[r];
            return (
              ((t = dn(
                this,
                (e = mn(i)).call.apply(e, [this].concat(o))
              )).onChange = function(e) {
                (0, t.props.onChange)(e.target.innerHTML);
              }),
              t
            );
          }
          var e, t, n;
          return (
            (function(e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 }
              })),
                t && fn(e, t);
            })(i, m["Component"]),
            (e = i),
            (t = [
              {
                key: "renderEmojiModal",
                value: function() {
                  var n = this,
                    e = this.props.config,
                    t = e.popupClassName,
                    o = e.emojis;
                  return S.a.createElement(
                    "div",
                    { className: L()("rdw-emoji-modal", t), onClick: d },
                    o.map(function(e, t) {
                      return S.a.createElement(
                        "span",
                        {
                          key: t,
                          className: "rdw-emoji-icon",
                          alt: "",
                          onClick: n.onChange
                        },
                        e
                      );
                    })
                  );
                }
              },
              {
                key: "render",
                value: function() {
                  var e = this.props,
                    t = e.config,
                    n = t.icon,
                    o = t.className,
                    r = t.title,
                    i = e.expanded,
                    a = e.onExpandEvent,
                    c = e.translations;
                  return S.a.createElement(
                    "div",
                    {
                      className: "rdw-emoji-wrapper",
                      "aria-haspopup": "true",
                      "aria-label": "rdw-emoji-control",
                      "aria-expanded": i,
                      title: r || c["components.controls.emoji.emoji"]
                    },
                    S.a.createElement(
                      T,
                      {
                        className: L()(o),
                        value: "unordered-list-item",
                        onClick: a
                      },
                      S.a.createElement("img", { src: n, alt: "" })
                    ),
                    i ? this.renderEmojiModal() : void 0
                  );
                }
              }
            ]) && pn(e.prototype, t),
            n && pn(e, n),
            i
          );
        })();
        gn.propTypes = {
          expanded: f.a.bool,
          onExpandEvent: f.a.func,
          onChange: f.a.func,
          config: f.a.object,
          translations: f.a.object
        };
        var yn = gn;
        function hn(e) {
          return (hn =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function(e) {
                  return typeof e;
                }
              : function(e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                })(e);
        }
        function Mn(e, t) {
          for (var n = 0; n < t.length; n++) {
            var o = t[n];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              "value" in o && (o.writable = !0),
              Object.defineProperty(e, o.key, o);
          }
        }
        function bn(e, t) {
          return !t || ("object" !== hn(t) && "function" != typeof t)
            ? (function(e) {
                if (void 0 !== e) return e;
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              })(e)
            : t;
        }
        function jn(e) {
          return (jn = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              })(e);
        }
        function Nn(e, t) {
          return (Nn =
            Object.setPrototypeOf ||
            function(e, t) {
              return (e.__proto__ = t), e;
            })(e, t);
        }
        var Sn = (function() {
          function r() {
            var e, i;
            !(function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, r);
            for (var t = arguments.length, n = new Array(t), o = 0; o < t; o++)
              n[o] = arguments[o];
            return (
              ((i = bn(
                this,
                (e = jn(r)).call.apply(e, [this].concat(n))
              )).state = { expanded: !1 }),
              (i.onExpandEvent = function() {
                i.signalExpanded = !i.state.expanded;
              }),
              (i.expandCollapse = function() {
                i.setState({ expanded: i.signalExpanded }),
                  (i.signalExpanded = !1);
              }),
              (i.doExpand = function() {
                i.setState({ expanded: !0 });
              }),
              (i.doCollapse = function() {
                i.setState({ expanded: !1 });
              }),
              (i.addEmoji = function(e) {
                var t = i.props,
                  n = t.editorState,
                  o = t.onChange,
                  r = E.Modifier.replaceText(
                    n.getCurrentContent(),
                    n.getSelection(),
                    e,
                    n.getCurrentInlineStyle()
                  );
                o(E.EditorState.push(n, r, "insert-characters")),
                  i.doCollapse();
              }),
              i
            );
          }
          var e, t, n;
          return (
            (function(e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 }
              })),
                t && Nn(e, t);
            })(r, m["Component"]),
            (e = r),
            (t = [
              {
                key: "componentDidMount",
                value: function() {
                  this.props.modalHandler.registerCallBack(this.expandCollapse);
                }
              },
              {
                key: "componentWillUnmount",
                value: function() {
                  this.props.modalHandler.deregisterCallBack(
                    this.expandCollapse
                  );
                }
              },
              {
                key: "render",
                value: function() {
                  var e = this.props,
                    t = e.config,
                    n = e.translations,
                    o = this.state.expanded,
                    r = t.component || yn;
                  return S.a.createElement(r, {
                    config: t,
                    translations: n,
                    onChange: this.addEmoji,
                    expanded: o,
                    onExpandEvent: this.onExpandEvent,
                    doExpand: this.doExpand,
                    doCollapse: this.doCollapse,
                    onCollpase: this.closeModal
                  });
                }
              }
            ]) && Mn(e.prototype, t),
            n && Mn(e, n),
            r
          );
        })();
        Sn.propTypes = {
          editorState: f.a.object.isRequired,
          onChange: f.a.func.isRequired,
          modalHandler: f.a.object,
          config: f.a.object,
          translations: f.a.object
        };
        function En() {
          return S.a.createElement(
            "div",
            { className: "rdw-spinner" },
            S.a.createElement("div", { className: "rdw-bounce1" }),
            S.a.createElement("div", { className: "rdw-bounce2" }),
            S.a.createElement("div", { className: "rdw-bounce3" })
          );
        }
        n(29), n(30);
        function Cn(e) {
          return (Cn =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function(e) {
                  return typeof e;
                }
              : function(e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                })(e);
        }
        function Ln(e, t) {
          for (var n = 0; n < t.length; n++) {
            var o = t[n];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              "value" in o && (o.writable = !0),
              Object.defineProperty(e, o.key, o);
          }
        }
        function kn(e, t) {
          return !t || ("object" !== Cn(t) && "function" != typeof t)
            ? (function(e) {
                if (void 0 !== e) return e;
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              })(e)
            : t;
        }
        function Dn(e) {
          return (Dn = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              })(e);
        }
        function vn(e, t) {
          return (vn =
            Object.setPrototypeOf ||
            function(e, t) {
              return (e.__proto__ = t), e;
            })(e, t);
        }
        var wn = (function() {
          function r() {
            var e, c;
            !(function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, r);
            for (var t = arguments.length, n = new Array(t), o = 0; o < t; o++)
              n[o] = arguments[o];
            return (
              ((c = kn(
                this,
                (e = Dn(r)).call.apply(e, [this].concat(n))
              )).state = {
                imgSrc: "",
                dragEnter: !1,
                uploadHighlighted:
                  c.props.config.uploadEnabled &&
                  !!c.props.config.uploadCallback,
                showImageLoading: !1,
                height: c.props.config.defaultSize.height,
                width: c.props.config.defaultSize.width,
                alt: ""
              }),
              (c.onDragEnter = function(e) {
                c.stopPropagation(e), c.setState({ dragEnter: !0 });
              }),
              (c.onImageDrop = function(e) {
                var t, n;
                e.preventDefault(),
                  e.stopPropagation(),
                  c.setState({ dragEnter: !1 }),
                  (n = e.dataTransfer.items
                    ? ((t = e.dataTransfer.items), !0)
                    : ((t = e.dataTransfer.files), !1));
                for (var o = 0; o < t.length; o += 1)
                  if (
                    (!n || "file" === t[o].kind) &&
                    t[o].type.match("^image/")
                  ) {
                    var r = n ? t[o].getAsFile() : t[o];
                    c.uploadImage(r);
                  }
              }),
              (c.showImageUploadOption = function() {
                c.setState({ uploadHighlighted: !0 });
              }),
              (c.addImageFromState = function() {
                var e = c.state,
                  t = e.imgSrc,
                  n = e.alt,
                  o = c.state,
                  r = o.height,
                  i = o.width,
                  a = c.props.onChange;
                isNaN(r) || (r += "px"), isNaN(i) || (i += "px"), a(t, r, i, n);
              }),
              (c.showImageURLOption = function() {
                c.setState({ uploadHighlighted: !1 });
              }),
              (c.toggleShowImageLoading = function() {
                var e = !c.state.showImageLoading;
                c.setState({ showImageLoading: e });
              }),
              (c.updateValue = function(e) {
                var t, n, o;
                c.setState(
                  ((t = {}),
                  (n = "".concat(e.target.name)),
                  (o = e.target.value),
                  n in t
                    ? Object.defineProperty(t, n, {
                        value: o,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                      })
                    : (t[n] = o),
                  t)
                );
              }),
              (c.selectImage = function(e) {
                e.target.files &&
                  0 < e.target.files.length &&
                  c.uploadImage(e.target.files[0]);
              }),
              (c.uploadImage = function(e) {
                c.toggleShowImageLoading(),
                  (0, c.props.config.uploadCallback)(e)
                    .then(function(e) {
                      var t = e.data;
                      c.setState({
                        showImageLoading: !1,
                        dragEnter: !1,
                        imgSrc: t.link || t.url
                      }),
                        (c.fileUpload = !1);
                    })
                    .catch(function() {
                      c.setState({ showImageLoading: !1, dragEnter: !1 });
                    });
              }),
              (c.fileUploadClick = function(e) {
                (c.fileUpload = !0), e.stopPropagation();
              }),
              (c.stopPropagation = function(e) {
                c.fileUpload
                  ? (c.fileUpload = !1)
                  : (e.preventDefault(), e.stopPropagation());
              }),
              c
            );
          }
          var e, t, n;
          return (
            (function(e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 }
              })),
                t && vn(e, t);
            })(r, m["Component"]),
            (e = r),
            (t = [
              {
                key: "componentDidUpdate",
                value: function(e) {
                  var t = this.props.config;
                  e.expanded && !this.props.expanded
                    ? this.setState({
                        imgSrc: "",
                        dragEnter: !1,
                        uploadHighlighted:
                          t.uploadEnabled && !!t.uploadCallback,
                        showImageLoading: !1,
                        height: t.defaultSize.height,
                        width: t.defaultSize.width,
                        alt: ""
                      })
                    : (t.uploadCallback === e.config.uploadCallback &&
                        t.uploadEnabled === e.config.uploadEnabled) ||
                      this.setState({
                        uploadHighlighted: t.uploadEnabled && !!t.uploadCallback
                      });
                }
              },
              {
                key: "renderAddImageModal",
                value: function() {
                  var e = this.state,
                    t = e.imgSrc,
                    n = e.uploadHighlighted,
                    o = e.showImageLoading,
                    r = e.dragEnter,
                    i = e.height,
                    a = e.width,
                    c = e.alt,
                    l = this.props,
                    s = l.config,
                    u = s.popupClassName,
                    p = s.uploadCallback,
                    d = s.uploadEnabled,
                    m = s.urlEnabled,
                    f = s.previewImage,
                    g = s.inputAccept,
                    y = s.alt,
                    h = l.doCollapse,
                    M = l.translations;
                  return S.a.createElement(
                    "div",
                    {
                      className: L()("rdw-image-modal", u),
                      onClick: this.stopPropagation
                    },
                    S.a.createElement(
                      "div",
                      { className: "rdw-image-modal-header" },
                      d &&
                        p &&
                        S.a.createElement(
                          "span",
                          {
                            onClick: this.showImageUploadOption,
                            className: "rdw-image-modal-header-option"
                          },
                          M["components.controls.image.fileUpload"],
                          S.a.createElement("span", {
                            className: L()("rdw-image-modal-header-label", {
                              "rdw-image-modal-header-label-highlighted": n
                            })
                          })
                        ),
                      m &&
                        S.a.createElement(
                          "span",
                          {
                            onClick: this.showImageURLOption,
                            className: "rdw-image-modal-header-option"
                          },
                          M["components.controls.image.byURL"],
                          S.a.createElement("span", {
                            className: L()("rdw-image-modal-header-label", {
                              "rdw-image-modal-header-label-highlighted": !n
                            })
                          })
                        )
                    ),
                    n
                      ? S.a.createElement(
                          "div",
                          { onClick: this.fileUploadClick },
                          S.a.createElement(
                            "div",
                            {
                              onDragEnter: this.onDragEnter,
                              onDragOver: this.stopPropagation,
                              onDrop: this.onImageDrop,
                              className: L()("rdw-image-modal-upload-option", {
                                "rdw-image-modal-upload-option-highlighted": r
                              })
                            },
                            S.a.createElement(
                              "label",
                              {
                                htmlFor: "file",
                                className: "rdw-image-modal-upload-option-label"
                              },
                              f && t
                                ? S.a.createElement("img", {
                                    src: t,
                                    alt: t,
                                    className:
                                      "rdw-image-modal-upload-option-image-preview"
                                  })
                                : t ||
                                    M["components.controls.image.dropFileText"]
                            )
                          ),
                          S.a.createElement("input", {
                            type: "file",
                            id: "file",
                            accept: g,
                            onChange: this.selectImage,
                            className: "rdw-image-modal-upload-option-input"
                          })
                        )
                      : S.a.createElement(
                          "div",
                          { className: "rdw-image-modal-url-section" },
                          S.a.createElement("input", {
                            className: "rdw-image-modal-url-input",
                            placeholder:
                              M["components.controls.image.enterlink"],
                            name: "imgSrc",
                            onChange: this.updateValue,
                            onBlur: this.updateValue,
                            value: t
                          }),
                          S.a.createElement(
                            "span",
                            { className: "rdw-image-mandatory-sign" },
                            "*"
                          )
                        ),
                    y.present &&
                      S.a.createElement(
                        "div",
                        { className: "rdw-image-modal-size" },
                        S.a.createElement(
                          "span",
                          { className: "rdw-image-modal-alt-lbl" },
                          "Alt Text"
                        ),
                        S.a.createElement("input", {
                          onChange: this.updateValue,
                          onBlur: this.updateValue,
                          value: c,
                          name: "alt",
                          className: "rdw-image-modal-alt-input",
                          placeholder: "alt"
                        }),
                        S.a.createElement(
                          "span",
                          { className: "rdw-image-mandatory-sign" },
                          y.mandatory && "*"
                        )
                      ),
                    S.a.createElement(
                      "div",
                      { className: "rdw-image-modal-size" },
                      "↕ ",
                      S.a.createElement("input", {
                        onChange: this.updateValue,
                        onBlur: this.updateValue,
                        value: i,
                        name: "height",
                        className: "rdw-image-modal-size-input",
                        placeholder: "Height"
                      }),
                      S.a.createElement(
                        "span",
                        { className: "rdw-image-mandatory-sign" },
                        "*"
                      ),
                      " ↔ ",
                      S.a.createElement("input", {
                        onChange: this.updateValue,
                        onBlur: this.updateValue,
                        value: a,
                        name: "width",
                        className: "rdw-image-modal-size-input",
                        placeholder: "Width"
                      }),
                      S.a.createElement(
                        "span",
                        { className: "rdw-image-mandatory-sign" },
                        "*"
                      )
                    ),
                    S.a.createElement(
                      "span",
                      { className: "rdw-image-modal-btn-section" },
                      S.a.createElement(
                        "button",
                        {
                          className: "rdw-image-modal-btn",
                          onClick: this.addImageFromState,
                          disabled: !t || !i || !a || (y.mandatory && !c)
                        },
                        M["generic.add"]
                      ),
                      S.a.createElement(
                        "button",
                        { className: "rdw-image-modal-btn", onClick: h },
                        M["generic.cancel"]
                      )
                    ),
                    o
                      ? S.a.createElement(
                          "div",
                          { className: "rdw-image-modal-spinner" },
                          S.a.createElement(En, null)
                        )
                      : void 0
                  );
                }
              },
              {
                key: "render",
                value: function() {
                  var e = this.props,
                    t = e.config,
                    n = t.icon,
                    o = t.className,
                    r = t.title,
                    i = e.expanded,
                    a = e.onExpandEvent,
                    c = e.translations;
                  return S.a.createElement(
                    "div",
                    {
                      className: "rdw-image-wrapper",
                      "aria-haspopup": "true",
                      "aria-expanded": i,
                      "aria-label": "rdw-image-control"
                    },
                    S.a.createElement(
                      T,
                      {
                        className: L()(o),
                        value: "unordered-list-item",
                        onClick: a,
                        title: r || c["components.controls.image.image"]
                      },
                      S.a.createElement("img", { src: n, alt: "" })
                    ),
                    i ? this.renderAddImageModal() : void 0
                  );
                }
              }
            ]) && Ln(e.prototype, t),
            n && Ln(e, n),
            r
          );
        })();
        wn.propTypes = {
          expanded: f.a.bool,
          onExpandEvent: f.a.func,
          doCollapse: f.a.func,
          onChange: f.a.func,
          config: f.a.object,
          translations: f.a.object
        };
        var xn = wn;
        function In(e) {
          return (In =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function(e) {
                  return typeof e;
                }
              : function(e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                })(e);
        }
        function On(e, t) {
          for (var n = 0; n < t.length; n++) {
            var o = t[n];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              "value" in o && (o.writable = !0),
              Object.defineProperty(e, o.key, o);
          }
        }
        function An(e, t) {
          return !t || ("object" !== In(t) && "function" != typeof t)
            ? (function(e) {
                if (void 0 !== e) return e;
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              })(e)
            : t;
        }
        function Tn(e) {
          return (Tn = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              })(e);
        }
        function zn(e, t) {
          return (zn =
            Object.setPrototypeOf ||
            function(e, t) {
              return (e.__proto__ = t), e;
            })(e, t);
        }
        var _n = (function() {
          function n(e) {
            var s;
            !(function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, n),
              ((s = An(this, Tn(n).call(this, e))).onExpandEvent = function() {
                s.signalExpanded = !s.state.expanded;
              }),
              (s.doExpand = function() {
                s.setState({ expanded: !0 });
              }),
              (s.doCollapse = function() {
                s.setState({ expanded: !1 });
              }),
              (s.expandCollapse = function() {
                s.setState({ expanded: s.signalExpanded }),
                  (s.signalExpanded = !1);
              }),
              (s.addImage = function(e, t, n, o) {
                var r = s.props,
                  i = r.editorState,
                  a = r.onChange,
                  c = { src: e, height: t, width: n };
                r.config.alt.present && (c.alt = o);
                var l = i
                  .getCurrentContent()
                  .createEntity("IMAGE", "MUTABLE", c)
                  .getLastCreatedEntityKey();
                a(E.AtomicBlockUtils.insertAtomicBlock(i, l, " ")),
                  s.doCollapse();
              });
            var t = s.props.modalHandler;
            return (
              (s.state = { expanded: !1 }),
              t.registerCallBack(s.expandCollapse),
              s
            );
          }
          var e, t, o;
          return (
            (function(e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 }
              })),
                t && zn(e, t);
            })(n, m["Component"]),
            (e = n),
            (t = [
              {
                key: "componentWillUnmount",
                value: function() {
                  this.props.modalHandler.deregisterCallBack(
                    this.expandCollapse
                  );
                }
              },
              {
                key: "render",
                value: function() {
                  var e = this.props,
                    t = e.config,
                    n = e.translations,
                    o = this.state.expanded,
                    r = t.component || xn;
                  return S.a.createElement(r, {
                    config: t,
                    translations: n,
                    onChange: this.addImage,
                    expanded: o,
                    onExpandEvent: this.onExpandEvent,
                    doExpand: this.doExpand,
                    doCollapse: this.doCollapse
                  });
                }
              }
            ]) && On(e.prototype, t),
            o && On(e, o),
            n
          );
        })();
        _n.propTypes = {
          editorState: f.a.object.isRequired,
          onChange: f.a.func.isRequired,
          modalHandler: f.a.object,
          config: f.a.object,
          translations: f.a.object
        };
        function Pn(e) {
          var t = e.config,
            n = e.onChange,
            o = e.translations,
            r = t.icon,
            i = t.className,
            a = t.title;
          return S.a.createElement(
            "div",
            {
              className: "rdw-remove-wrapper",
              "aria-label": "rdw-remove-control"
            },
            S.a.createElement(
              T,
              {
                className: L()(i),
                onClick: n,
                title: a || o["components.controls.remove.remove"]
              },
              S.a.createElement("img", { src: r, alt: "" })
            )
          );
        }
        var Un = _n;
        n(31);
        Pn.propTypes = {
          onChange: f.a.func,
          config: f.a.object,
          translations: f.a.object
        };
        var Yn = Pn;
        function Fn(e) {
          return (Fn =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function(e) {
                  return typeof e;
                }
              : function(e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                })(e);
        }
        function Rn(e, t) {
          for (var n = 0; n < t.length; n++) {
            var o = t[n];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              "value" in o && (o.writable = !0),
              Object.defineProperty(e, o.key, o);
          }
        }
        function Bn(e, t) {
          return !t || ("object" !== Fn(t) && "function" != typeof t)
            ? (function(e) {
                if (void 0 !== e) return e;
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              })(e)
            : t;
        }
        function Qn(e) {
          return (Qn = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              })(e);
        }
        function Hn(e, t) {
          return (Hn =
            Object.setPrototypeOf ||
            function(e, t) {
              return (e.__proto__ = t), e;
            })(e, t);
        }
        var Zn = (function() {
          function i() {
            var e, n;
            !(function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, i);
            for (var t = arguments.length, o = new Array(t), r = 0; r < t; r++)
              o[r] = arguments[r];
            return (
              ((n = Bn(
                this,
                (e = Qn(i)).call.apply(e, [this].concat(o))
              )).state = { expanded: !1 }),
              (n.onExpandEvent = function() {
                n.signalExpanded = !n.state.expanded;
              }),
              (n.expandCollapse = function() {
                n.setState({ expanded: n.signalExpanded }),
                  (n.signalExpanded = !1);
              }),
              (n.removeInlineStyles = function() {
                var e = n.props,
                  t = e.editorState;
                (0, e.onChange)(n.removeAllInlineStyles(t));
              }),
              (n.removeAllInlineStyles = function(n) {
                var o = n.getCurrentContent();
                return (
                  [
                    "BOLD",
                    "ITALIC",
                    "UNDERLINE",
                    "STRIKETHROUGH",
                    "MONOSPACE",
                    "SUPERSCRIPT",
                    "SUBSCRIPT"
                  ].forEach(function(e) {
                    o = E.Modifier.removeInlineStyle(o, n.getSelection(), e);
                  }),
                  u(
                    Object(C.getSelectionCustomInlineStyle)(n, [
                      "FONTSIZE",
                      "FONTFAMILY",
                      "COLOR",
                      "BGCOLOR"
                    ]),
                    function(e, t) {
                      t &&
                        (o = E.Modifier.removeInlineStyle(
                          o,
                          n.getSelection(),
                          t
                        ));
                    }
                  ),
                  E.EditorState.push(n, o, "change-inline-style")
                );
              }),
              (n.doExpand = function() {
                n.setState({ expanded: !0 });
              }),
              (n.doCollapse = function() {
                n.setState({ expanded: !1 });
              }),
              n
            );
          }
          var e, t, n;
          return (
            (function(e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 }
              })),
                t && Hn(e, t);
            })(i, m["Component"]),
            (e = i),
            (t = [
              {
                key: "componentDidMount",
                value: function() {
                  this.props.modalHandler.registerCallBack(this.expandCollapse);
                }
              },
              {
                key: "componentWillUnmount",
                value: function() {
                  this.props.modalHandler.deregisterCallBack(
                    this.expandCollapse
                  );
                }
              },
              {
                key: "render",
                value: function() {
                  var e = this.props,
                    t = e.config,
                    n = e.translations,
                    o = this.state.expanded,
                    r = t.component || Yn;
                  return S.a.createElement(r, {
                    config: t,
                    translations: n,
                    expanded: o,
                    onExpandEvent: this.onExpandEvent,
                    doExpand: this.doExpand,
                    doCollapse: this.doCollapse,
                    onChange: this.removeInlineStyles
                  });
                }
              }
            ]) && Rn(e.prototype, t),
            n && Rn(e, n),
            i
          );
        })();
        Zn.propTypes = {
          onChange: f.a.func.isRequired,
          editorState: f.a.object.isRequired,
          config: f.a.object,
          translations: f.a.object,
          modalHandler: f.a.object
        };
        n(32);
        function Wn(e) {
          return (Wn =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function(e) {
                  return typeof e;
                }
              : function(e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                })(e);
        }
        function Gn(e, t) {
          for (var n = 0; n < t.length; n++) {
            var o = t[n];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              "value" in o && (o.writable = !0),
              Object.defineProperty(e, o.key, o);
          }
        }
        function Jn(e, t) {
          return !t || ("object" !== Wn(t) && "function" != typeof t)
            ? (function(e) {
                if (void 0 !== e) return e;
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              })(e)
            : t;
        }
        function Vn(e) {
          return (Vn = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              })(e);
        }
        function qn(e, t) {
          return (qn =
            Object.setPrototypeOf ||
            function(e, t) {
              return (e.__proto__ = t), e;
            })(e, t);
        }
        var Kn = (function() {
          function i() {
            var e, t;
            !(function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, i);
            for (var n = arguments.length, o = new Array(n), r = 0; r < n; r++)
              o[r] = arguments[r];
            return (
              ((t = Jn(
                this,
                (e = Vn(i)).call.apply(e, [this].concat(o))
              )).onChange = function(e) {
                (0, t.props.onChange)(e);
              }),
              t
            );
          }
          var e, t, n;
          return (
            (function(e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 }
              })),
                t && qn(e, t);
            })(i, m["Component"]),
            (e = i),
            (t = [
              {
                key: "renderInDropDown",
                value: function() {
                  var e = this.props,
                    t = e.config,
                    n = e.expanded,
                    o = e.doExpand,
                    r = e.onExpandEvent,
                    i = e.doCollapse,
                    a = e.currentState,
                    c = a.undoDisabled,
                    l = a.redoDisabled,
                    s = e.translations,
                    u = t.options,
                    p = t.undo,
                    d = t.redo,
                    m = t.className,
                    f = t.dropdownClassName,
                    g = t.title;
                  return S.a.createElement(
                    F,
                    {
                      className: L()("rdw-history-dropdown", m),
                      optionWrapperClassName: L()(f),
                      expanded: n,
                      doExpand: o,
                      doCollapse: i,
                      onExpandEvent: r,
                      "aria-label": "rdw-history-control",
                      title: g || s["components.controls.history.history"]
                    },
                    S.a.createElement("img", { src: h(t), alt: "" }),
                    0 <= u.indexOf("undo") &&
                      S.a.createElement(
                        G,
                        {
                          value: "undo",
                          onClick: this.onChange,
                          disabled: c,
                          className: L()(
                            "rdw-history-dropdownoption",
                            p.className
                          ),
                          title:
                            p.title || s["components.controls.history.undo"]
                        },
                        S.a.createElement("img", { src: p.icon, alt: "" })
                      ),
                    0 <= u.indexOf("redo") &&
                      S.a.createElement(
                        G,
                        {
                          value: "redo",
                          onClick: this.onChange,
                          disabled: l,
                          className: L()(
                            "rdw-history-dropdownoption",
                            d.className
                          ),
                          title:
                            d.title || s["components.controls.history.redo"]
                        },
                        S.a.createElement("img", { src: d.icon, alt: "" })
                      )
                  );
                }
              },
              {
                key: "renderInFlatList",
                value: function() {
                  var e = this.props,
                    t = e.config,
                    n = t.options,
                    o = t.undo,
                    r = t.redo,
                    i = t.className,
                    a = e.currentState,
                    c = a.undoDisabled,
                    l = a.redoDisabled,
                    s = e.translations;
                  return S.a.createElement(
                    "div",
                    {
                      className: L()("rdw-history-wrapper", i),
                      "aria-label": "rdw-history-control"
                    },
                    0 <= n.indexOf("undo") &&
                      S.a.createElement(
                        T,
                        {
                          value: "undo",
                          onClick: this.onChange,
                          className: L()(o.className),
                          disabled: c,
                          title:
                            o.title || s["components.controls.history.undo"]
                        },
                        S.a.createElement("img", { src: o.icon, alt: "" })
                      ),
                    0 <= n.indexOf("redo") &&
                      S.a.createElement(
                        T,
                        {
                          value: "redo",
                          onClick: this.onChange,
                          className: L()(r.className),
                          disabled: l,
                          title:
                            r.title || s["components.controls.history.redo"]
                        },
                        S.a.createElement("img", { src: r.icon, alt: "" })
                      )
                  );
                }
              },
              {
                key: "render",
                value: function() {
                  return this.props.config.inDropdown
                    ? this.renderInDropDown()
                    : this.renderInFlatList();
                }
              }
            ]) && Gn(e.prototype, t),
            n && Gn(e, n),
            i
          );
        })();
        function Xn(e) {
          return (Xn =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function(e) {
                  return typeof e;
                }
              : function(e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                })(e);
        }
        function $n(e, t) {
          for (var n = 0; n < t.length; n++) {
            var o = t[n];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              "value" in o && (o.writable = !0),
              Object.defineProperty(e, o.key, o);
          }
        }
        function eo(e, t) {
          return !t || ("object" !== Xn(t) && "function" != typeof t)
            ? (function(e) {
                if (void 0 !== e) return e;
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              })(e)
            : t;
        }
        function to(e) {
          return (to = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              })(e);
        }
        function no(e, t) {
          return (no =
            Object.setPrototypeOf ||
            function(e, t) {
              return (e.__proto__ = t), e;
            })(e, t);
        }
        Kn.propTypes = {
          expanded: f.a.bool,
          doExpand: f.a.func,
          doCollapse: f.a.func,
          onExpandEvent: f.a.func,
          config: f.a.object,
          onChange: f.a.func,
          currentState: f.a.object,
          translations: f.a.object
        };
        var oo = (function() {
          function r(e) {
            var i;
            !(function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, r),
              ((i = eo(this, to(r).call(this, e))).onExpandEvent = function() {
                i.signalExpanded = !i.state.expanded;
              }),
              (i.onChange = function(e) {
                var t = i.props,
                  n = t.editorState,
                  o = t.onChange,
                  r = E.EditorState[e](n);
                r && o(r);
              }),
              (i.doExpand = function() {
                i.setState({ expanded: !0 });
              }),
              (i.doCollapse = function() {
                i.setState({ expanded: !1 });
              });
            var t = {
                expanded: !(i.expandCollapse = function() {
                  i.setState({ expanded: i.signalExpanded }),
                    (i.signalExpanded = !1);
                }),
                undoDisabled: !1,
                redoDisabled: !1
              },
              n = e.editorState,
              o = e.modalHandler;
            return (
              n &&
                ((t.undoDisabled = 0 === n.getUndoStack().size),
                (t.redoDisabled = 0 === n.getRedoStack().size)),
              (i.state = t),
              o.registerCallBack(i.expandCollapse),
              i
            );
          }
          var e, t, n;
          return (
            (function(e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 }
              })),
                t && no(e, t);
            })(r, m["Component"]),
            (e = r),
            (t = [
              {
                key: "componentDidUpdate",
                value: function(e) {
                  var t = this.props.editorState;
                  t &&
                    e.editorState !== t &&
                    this.setState({
                      undoDisabled: 0 === t.getUndoStack().size,
                      redoDisabled: 0 === t.getRedoStack().size
                    });
                }
              },
              {
                key: "componentWillUnmount",
                value: function() {
                  this.props.modalHandler.deregisterCallBack(
                    this.expandCollapse
                  );
                }
              },
              {
                key: "render",
                value: function() {
                  var e = this.props,
                    t = e.config,
                    n = e.translations,
                    o = this.state,
                    r = o.undoDisabled,
                    i = o.redoDisabled,
                    a = o.expanded,
                    c = t.component || Kn;
                  return S.a.createElement(c, {
                    config: t,
                    translations: n,
                    currentState: { undoDisabled: r, redoDisabled: i },
                    expanded: a,
                    onExpandEvent: this.onExpandEvent,
                    doExpand: this.doExpand,
                    doCollapse: this.doCollapse,
                    onChange: this.onChange
                  });
                }
              }
            ]) && $n(e.prototype, t),
            n && $n(e, n),
            r
          );
        })();
        oo.propTypes = {
          onChange: f.a.func.isRequired,
          editorState: f.a.object,
          modalHandler: f.a.object,
          config: f.a.object,
          translations: f.a.object
        };
        var ro = {
          inline: ie,
          blockType: be,
          fontSize: Ie,
          fontFamily: He,
          list: nt,
          textAlign: ft,
          colorPicker: vt,
          link: Jt,
          embedded: sn,
          emoji: Sn,
          image: Un,
          remove: Zn,
          history: oo
        };
        n(33);
        function io(e) {
          return (io =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function(e) {
                  return typeof e;
                }
              : function(e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                })(e);
        }
        function ao(e, t) {
          for (var n = 0; n < t.length; n++) {
            var o = t[n];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              "value" in o && (o.writable = !0),
              Object.defineProperty(e, o.key, o);
          }
        }
        function co(e, t) {
          return !t || ("object" !== io(t) && "function" != typeof t)
            ? (function(e) {
                if (void 0 !== e) return e;
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              })(e)
            : t;
        }
        function lo(e) {
          return (lo = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              })(e);
        }
        function so(e, t) {
          return (so =
            Object.setPrototypeOf ||
            function(e, t) {
              return (e.__proto__ = t), e;
            })(e, t);
        }
        function uo(e, t, n) {
          e.findEntityRanges(function(e) {
            var t = e.getEntity();
            return null !== t && "LINK" === n.getEntity(t).getType();
          }, t);
        }
        function po(e) {
          var t,
            n,
            c = e.showOpenOptionOnHover;
          return (
            (n = t = (function() {
              function i() {
                var e, r;
                !(function(e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, i);
                for (
                  var t = arguments.length, n = new Array(t), o = 0;
                  o < t;
                  o++
                )
                  n[o] = arguments[o];
                return (
                  ((r = co(
                    this,
                    (e = lo(i)).call.apply(e, [this].concat(n))
                  )).state = { showPopOver: !1 }),
                  (r.openLink = function() {
                    var e = r.props,
                      t = e.entityKey,
                      n = e.contentState.getEntity(t).getData().url,
                      o = window.open(n, "blank");
                    o && o.focus();
                  }),
                  (r.toggleShowPopOver = function() {
                    var e = !r.state.showPopOver;
                    r.setState({ showPopOver: e });
                  }),
                  r
                );
              }
              var e, t, n;
              return (
                (function(e, t) {
                  if ("function" != typeof t && null !== t)
                    throw new TypeError(
                      "Super expression must either be null or a function"
                    );
                  (e.prototype = Object.create(t && t.prototype, {
                    constructor: { value: e, writable: !0, configurable: !0 }
                  })),
                    t && so(e, t);
                })(i, m["Component"]),
                (e = i),
                (t = [
                  {
                    key: "render",
                    value: function() {
                      var e = this.props,
                        t = e.children,
                        n = e.entityKey,
                        o = e.contentState.getEntity(n).getData(),
                        r = o.url,
                        i = o.targetOption,
                        a = this.state.showPopOver;
                      return S.a.createElement(
                        "span",
                        {
                          className: "rdw-link-decorator-wrapper",
                          onMouseEnter: this.toggleShowPopOver,
                          onMouseLeave: this.toggleShowPopOver
                        },
                        S.a.createElement("a", { href: r, target: i }, t),
                        a && c
                          ? S.a.createElement("img", {
                              src:
                                "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMTUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTQuMDcyIDBIOC45MTVhLjkyNS45MjUgMCAwIDAgMCAxLjg0OWgyLjkyNUw2Ljk2MSA2LjcyN2EuOTE4LjkxOCAwIDAgMC0uMjcuNjU0YzAgLjI0Ny4wOTUuNDguMjcuNjU0YS45MTguOTE4IDAgMCAwIC42NTQuMjcuOTE4LjkxOCAwIDAgMCAuNjUzLS4yN2w0Ljg4LTQuODh2Mi45MjZhLjkyNS45MjUgMCAwIDAgMS44NDggMFYuOTI0QS45MjUuOTI1IDAgMCAwIDE0LjA3MiAweiIvPjxwYXRoIGQ9Ik0xMC42MjMgMTMuNDExSDEuNTg1VjQuMzcyaDYuNzk4bDEuNTg0LTEuNTg0SC43OTJBLjc5Mi43OTIgMCAwIDAgMCAzLjU4djEwLjYyNGMwIC40MzcuMzU1Ljc5Mi43OTIuNzkyaDEwLjYyNGEuNzkyLjc5MiAwIDAgMCAuNzkyLS43OTJWNS4wMjlsLTEuNTg1IDEuNTg0djYuNzk4eiIvPjwvZz48L3N2Zz4=",
                              alt: "",
                              onClick: this.openLink,
                              className: "rdw-link-decorator-icon"
                            })
                          : void 0
                      );
                    }
                  }
                ]) && ao(e.prototype, t),
                n && ao(e, n),
                i
              );
            })()),
            (t.propTypes = {
              entityKey: f.a.string.isRequired,
              children: f.a.array,
              contentState: f.a.object
            }),
            n
          );
        }
        n(34);
        function mo(e) {
          var t = this;
          !(function(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, mo),
            (this.getMentionComponent = function() {
              function e(e) {
                var t = e.entityKey,
                  n = e.children,
                  o = e.contentState.getEntity(t).getData(),
                  r = o.url,
                  i = o.value;
                return S.a.createElement(
                  "a",
                  { href: r || i, className: L()("rdw-mention-link", a) },
                  n
                );
              }
              var a = t.className;
              return (
                (e.propTypes = {
                  entityKey: f.a.number,
                  children: f.a.array,
                  contentState: f.a.object
                }),
                e
              );
            }),
            (this.getMentionDecorator = function() {
              return {
                strategy: t.findMentionEntities,
                component: t.getMentionComponent()
              };
            }),
            (this.className = e);
        }
        mo.prototype.findMentionEntities = function(e, t, n) {
          e.findEntityRanges(function(e) {
            var t = e.getEntity();
            return null !== t && "MENTION" === n.getEntity(t).getType();
          }, t);
        };
        var fo = mo;
        n(35);
        function go(e) {
          return (go =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function(e) {
                  return typeof e;
                }
              : function(e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                })(e);
        }
        function yo(e, t) {
          for (var n = 0; n < t.length; n++) {
            var o = t[n];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              "value" in o && (o.writable = !0),
              Object.defineProperty(e, o.key, o);
          }
        }
        function ho(e, t) {
          return !t || ("object" !== go(t) && "function" != typeof t)
            ? (function(e) {
                if (void 0 !== e) return e;
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              })(e)
            : t;
        }
        function Mo(e) {
          return (Mo = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              })(e);
        }
        function bo(e, t) {
          return (bo =
            Object.setPrototypeOf ||
            function(e, t) {
              return (e.__proto__ = t), e;
            })(e, t);
        }
        function jo(e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        }
        var No = function e(t) {
            var p = this;
            jo(this, e),
              (this.findSuggestionEntities = function(e, t) {
                if (p.config.getEditorState()) {
                  var n = p.config,
                    o = n.separator,
                    r = n.trigger,
                    i = n.getSuggestions,
                    a = (0, n.getEditorState)().getSelection();
                  if (
                    a.get("anchorKey") === e.get("key") &&
                    a.get("anchorKey") === a.get("focusKey")
                  ) {
                    var c = e.getText(),
                      l = (c = c.substr(
                        0,
                        a.get("focusOffset") === c.length - 1
                          ? c.length
                          : a.get("focusOffset") + 1
                      )).lastIndexOf(o + r),
                      s = o + r;
                    if (
                      ((void 0 === l || l < 0) &&
                        c[0] === r &&
                        ((l = 0), (s = r)),
                      0 <= l)
                    ) {
                      var u = c.substr(l + s.length, c.length);
                      i().some(function(e) {
                        return (
                          !!e.value &&
                          (p.config.caseSensitive
                            ? 0 <= e.value.indexOf(u)
                            : 0 <=
                              e.value
                                .toLowerCase()
                                .indexOf(u && u.toLowerCase()))
                        );
                      }) && t(0 === l ? 0 : l + 1, c.length);
                    }
                  }
                }
              }),
              (this.getSuggestionComponent = function() {
                var e,
                  t,
                  c = this.config;
                return (
                  (t = e = (function() {
                    function r() {
                      var e, a;
                      jo(this, r);
                      for (
                        var t = arguments.length, n = new Array(t), o = 0;
                        o < t;
                        o++
                      )
                        n[o] = arguments[o];
                      return (
                        ((a = ho(
                          this,
                          (e = Mo(r)).call.apply(e, [this].concat(n))
                        )).state = {
                          style: { left: 15 },
                          activeOption: -1,
                          showSuggestions: !0
                        }),
                        (a.onEditorKeyDown = function(e) {
                          var t = a.state.activeOption,
                            n = {};
                          "ArrowDown" === e.key
                            ? (e.preventDefault(),
                              t === a.filteredSuggestions.length - 1
                                ? (n.activeOption = 0)
                                : (n.activeOption = t + 1))
                            : "ArrowUp" === e.key
                            ? (n.activeOption =
                                t <= 0
                                  ? a.filteredSuggestions.length - 1
                                  : t - 1)
                            : "Escape" === e.key
                            ? ((n.showSuggestions = !1), y())
                            : "Enter" === e.key && a.addMention(),
                            a.setState(n);
                        }),
                        (a.onOptionMouseEnter = function(e) {
                          var t = e.target.getAttribute("data-index");
                          a.setState({ activeOption: t });
                        }),
                        (a.onOptionMouseLeave = function() {
                          a.setState({ activeOption: -1 });
                        }),
                        (a.setSuggestionReference = function(e) {
                          a.suggestion = e;
                        }),
                        (a.setDropdownReference = function(e) {
                          a.dropdown = e;
                        }),
                        (a.closeSuggestionDropdown = function() {
                          a.setState({ showSuggestions: !1 });
                        }),
                        (a.filteredSuggestions = []),
                        (a.filterSuggestions = function(e) {
                          var t = e.children[0].props.text.substr(1),
                            n = c.getSuggestions();
                          a.filteredSuggestions =
                            n &&
                            n.filter(function(e) {
                              return (
                                !t ||
                                0 === t.length ||
                                (c.caseSensitive
                                  ? 0 <= e.value.indexOf(t)
                                  : 0 <=
                                    e.value
                                      .toLowerCase()
                                      .indexOf(t && t.toLowerCase()))
                              );
                            });
                        }),
                        (a.addMention = function() {
                          var e = a.state.activeOption,
                            t = c.getEditorState(),
                            n = c.onChange,
                            o = c.separator,
                            r = c.trigger,
                            i = a.filteredSuggestions[e];
                          i &&
                            (function(e, t, n, o, r) {
                              var i = r.value,
                                a = r.url,
                                c = e
                                  .getCurrentContent()
                                  .createEntity("MENTION", "IMMUTABLE", {
                                    text: "".concat(o).concat(i),
                                    value: i,
                                    url: a
                                  })
                                  .getLastCreatedEntityKey(),
                                l = Object(C.getSelectedBlock)(e).getText(),
                                s = e.getSelection().focusOffset,
                                u = (l.lastIndexOf(n + o, s) || 0) + 1,
                                p = !1;
                              l.length === u + 1 && (s = l.length),
                                " " === l[s] && (p = !0);
                              var d = e
                                  .getSelection()
                                  .merge({ anchorOffset: u, focusOffset: s }),
                                m = E.EditorState.acceptSelection(e, d),
                                f = E.Modifier.replaceText(
                                  m.getCurrentContent(),
                                  d,
                                  "".concat(o).concat(i),
                                  m.getCurrentInlineStyle(),
                                  c
                                );
                              (m = E.EditorState.push(
                                m,
                                f,
                                "insert-characters"
                              )),
                                p ||
                                  ((d = m
                                    .getSelection()
                                    .merge({
                                      anchorOffset: u + i.length + o.length,
                                      focusOffset: u + i.length + o.length
                                    })),
                                  (m = E.EditorState.acceptSelection(m, d)),
                                  (f = E.Modifier.insertText(
                                    m.getCurrentContent(),
                                    d,
                                    " ",
                                    m.getCurrentInlineStyle(),
                                    void 0
                                  ))),
                                t(
                                  E.EditorState.push(m, f, "insert-characters")
                                );
                            })(t, n, o, r, i);
                        }),
                        a
                      );
                    }
                    var e, t, n;
                    return (
                      (function(e, t) {
                        if ("function" != typeof t && null !== t)
                          throw new TypeError(
                            "Super expression must either be null or a function"
                          );
                        (e.prototype = Object.create(t && t.prototype, {
                          constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                          }
                        })),
                          t && bo(e, t);
                      })(r, m["Component"]),
                      (e = r),
                      (t = [
                        {
                          key: "componentDidMount",
                          value: function() {
                            var e,
                              t,
                              n,
                              o = c.getWrapperRef().getBoundingClientRect(),
                              r = this.suggestion.getBoundingClientRect(),
                              i = this.dropdown.getBoundingClientRect();
                            o.width < r.left - o.left + i.width
                              ? (t = 15)
                              : (e = 15),
                              o.bottom < i.bottom && (n = 0),
                              this.setState({
                                style: { left: e, right: t, bottom: n }
                              }),
                              k.registerCallBack(this.onEditorKeyDown),
                              g(),
                              c.modalHandler.setSuggestionCallback(
                                this.closeSuggestionDropdown
                              ),
                              this.filterSuggestions(this.props);
                          }
                        },
                        {
                          key: "componentDidUpdate",
                          value: function(e) {
                            this.props.children !== e.children &&
                              (this.filterSuggestions(e),
                              this.setState({ showSuggestions: !0 }));
                          }
                        },
                        {
                          key: "componentWillUnmount",
                          value: function() {
                            k.deregisterCallBack(this.onEditorKeyDown),
                              y(),
                              c.modalHandler.removeSuggestionCallback();
                          }
                        },
                        {
                          key: "render",
                          value: function() {
                            var n = this,
                              e = this.props.children,
                              t = this.state,
                              o = t.activeOption,
                              r = t.showSuggestions,
                              i = c.dropdownClassName,
                              a = c.optionClassName;
                            return S.a.createElement(
                              "span",
                              {
                                className: "rdw-suggestion-wrapper",
                                ref: this.setSuggestionReference,
                                onClick: c.modalHandler.onSuggestionClick,
                                "aria-haspopup": "true",
                                "aria-label": "rdw-suggestion-popup"
                              },
                              S.a.createElement("span", null, e),
                              r &&
                                S.a.createElement(
                                  "span",
                                  {
                                    className: L()(
                                      "rdw-suggestion-dropdown",
                                      i
                                    ),
                                    contentEditable: "false",
                                    suppressContentEditableWarning: !0,
                                    style: this.state.style,
                                    ref: this.setDropdownReference
                                  },
                                  this.filteredSuggestions.map(function(e, t) {
                                    return S.a.createElement(
                                      "span",
                                      {
                                        key: t,
                                        spellCheck: !1,
                                        onClick: n.addMention,
                                        "data-index": t,
                                        onMouseEnter: n.onOptionMouseEnter,
                                        onMouseLeave: n.onOptionMouseLeave,
                                        className: L()(
                                          "rdw-suggestion-option",
                                          a,
                                          {
                                            "rdw-suggestion-option-active":
                                              t === o
                                          }
                                        )
                                      },
                                      e.text
                                    );
                                  })
                                )
                            );
                          }
                        }
                      ]) && yo(e.prototype, t),
                      n && yo(e, n),
                      r
                    );
                  })()),
                  (e.propTypes = { children: f.a.array }),
                  t
                );
              }.bind(this)),
              (this.getSuggestionDecorator = function() {
                return {
                  strategy: p.findSuggestionEntities,
                  component: p.getSuggestionComponent()
                };
              });
            var n = t.separator,
              o = t.trigger,
              r = t.getSuggestions,
              i = t.onChange,
              a = t.getEditorState,
              c = t.getWrapperRef,
              l = t.caseSensitive,
              s = t.dropdownClassName,
              u = t.optionClassName,
              d = t.modalHandler;
            this.config = {
              separator: n,
              trigger: o,
              getSuggestions: r,
              onChange: i,
              getEditorState: a,
              getWrapperRef: c,
              caseSensitive: l,
              dropdownClassName: s,
              optionClassName: u,
              modalHandler: d
            };
          },
          So = function(e) {
            return [
              new fo(e.mentionClassName).getMentionDecorator(),
              new No(e).getSuggestionDecorator()
            ];
          };
        n(36);
        function Eo(e) {
          var c = this;
          !(function(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, Eo),
            (this.getHashtagComponent = function() {
              function e(e) {
                var t = e.children,
                  n = t[0].props.text;
                return S.a.createElement(
                  "a",
                  { href: n, className: L()("rdw-hashtag-link", o) },
                  t
                );
              }
              var o = c.className;
              return (e.propTypes = { children: f.a.object }), e;
            }),
            (this.findHashtagEntities = function(e, t) {
              for (var n = e.getText(), o = 0, r = 0; 0 < n.length && 0 <= o; )
                if (
                  (n[0] === c.hashCharacter
                    ? ((r = o = 0), (n = n.substr(c.hashCharacter.length)))
                    : 0 <= (o = n.indexOf(c.separator + c.hashCharacter)) &&
                      ((n = n.substr(
                        o + (c.separator + c.hashCharacter).length
                      )),
                      (r += o + c.separator.length)),
                  0 <= o)
                ) {
                  var i =
                      0 <= n.indexOf(c.separator)
                        ? n.indexOf(c.separator)
                        : n.length,
                    a = n.substr(0, i);
                  a &&
                    0 < a.length &&
                    (t(r, r + a.length + c.hashCharacter.length),
                    (r += c.hashCharacter.length));
                }
            }),
            (this.getHashtagDecorator = function() {
              return {
                strategy: c.findHashtagEntities,
                component: c.getHashtagComponent()
              };
            }),
            (this.className = e.className),
            (this.hashCharacter = e.hashCharacter || "#"),
            (this.separator = e.separator || " ");
        }
        function Co(e) {
          var t = e.block,
            n = e.contentState.getEntity(t.getEntityAt(0)).getData(),
            o = n.src,
            r = n.height,
            i = n.width;
          return S.a.createElement("iframe", {
            height: r,
            width: i,
            src: o,
            frameBorder: "0",
            allowFullScreen: !0,
            title: "Wysiwyg Embedded Content"
          });
        }
        var Lo = function(e) {
          return new Eo(e).getHashtagDecorator();
        };
        Co.propTypes = { block: f.a.object, contentState: f.a.object };
        var ko = Co;
        n(37);
        function Do(e) {
          return (Do =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function(e) {
                  return typeof e;
                }
              : function(e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                })(e);
        }
        function vo(e, t) {
          for (var n = 0; n < t.length; n++) {
            var o = t[n];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              "value" in o && (o.writable = !0),
              Object.defineProperty(e, o.key, o);
          }
        }
        function wo(e, t) {
          return !t || ("object" !== Do(t) && "function" != typeof t)
            ? (function(e) {
                if (void 0 !== e) return e;
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              })(e)
            : t;
        }
        function xo(e) {
          return (xo = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              })(e);
        }
        function Io(e, t) {
          return (Io =
            Object.setPrototypeOf ||
            function(e, t) {
              return (e.__proto__ = t), e;
            })(e, t);
        }
        var Oo = function(d) {
            var e, t;
            return (
              (t = e = (function() {
                function r() {
                  var e, i;
                  !(function(e, t) {
                    if (!(e instanceof t))
                      throw new TypeError("Cannot call a class as a function");
                  })(this, r);
                  for (
                    var t = arguments.length, n = new Array(t), o = 0;
                    o < t;
                    o++
                  )
                    n[o] = arguments[o];
                  return (
                    ((i = wo(
                      this,
                      (e = xo(r)).call.apply(e, [this].concat(n))
                    )).state = { hovered: !1 }),
                    (i.setEntityAlignmentLeft = function() {
                      i.setEntityAlignment("left");
                    }),
                    (i.setEntityAlignmentRight = function() {
                      i.setEntityAlignment("right");
                    }),
                    (i.setEntityAlignmentCenter = function() {
                      i.setEntityAlignment("none");
                    }),
                    (i.setEntityAlignment = function(e) {
                      var t = i.props,
                        n = t.block,
                        o = t.contentState,
                        r = n.getEntityAt(0);
                      o.mergeEntityData(r, { alignment: e }),
                        d.onChange(
                          E.EditorState.push(
                            d.getEditorState(),
                            o,
                            "change-block-data"
                          )
                        ),
                        i.setState({ dummy: !0 });
                    }),
                    (i.toggleHovered = function() {
                      var e = !i.state.hovered;
                      i.setState({ hovered: e });
                    }),
                    i
                  );
                }
                var e, t, n;
                return (
                  (function(e, t) {
                    if ("function" != typeof t && null !== t)
                      throw new TypeError(
                        "Super expression must either be null or a function"
                      );
                    (e.prototype = Object.create(t && t.prototype, {
                      constructor: { value: e, writable: !0, configurable: !0 }
                    })),
                      t && Io(e, t);
                  })(r, m["Component"]),
                  (e = r),
                  (t = [
                    {
                      key: "renderAlignmentOptions",
                      value: function(e) {
                        return S.a.createElement(
                          "div",
                          {
                            className: L()(
                              "rdw-image-alignment-options-popup",
                              {
                                "rdw-image-alignment-options-popup-right":
                                  "right" === e
                              }
                            )
                          },
                          S.a.createElement(
                            T,
                            {
                              onClick: this.setEntityAlignmentLeft,
                              className: "rdw-image-alignment-option"
                            },
                            "L"
                          ),
                          S.a.createElement(
                            T,
                            {
                              onClick: this.setEntityAlignmentCenter,
                              className: "rdw-image-alignment-option"
                            },
                            "C"
                          ),
                          S.a.createElement(
                            T,
                            {
                              onClick: this.setEntityAlignmentRight,
                              className: "rdw-image-alignment-option"
                            },
                            "R"
                          )
                        );
                      }
                    },
                    {
                      key: "render",
                      value: function() {
                        var e = this.props,
                          t = e.block,
                          n = e.contentState,
                          o = this.state.hovered,
                          r = d.isReadOnly,
                          i = d.isImageAlignmentEnabled,
                          a = n.getEntity(t.getEntityAt(0)).getData(),
                          c = a.src,
                          l = a.alignment,
                          s = a.height,
                          u = a.width,
                          p = a.alt;
                        return S.a.createElement(
                          "span",
                          {
                            onMouseEnter: this.toggleHovered,
                            onMouseLeave: this.toggleHovered,
                            className: L()("rdw-image-alignment", {
                              "rdw-image-left": "left" === l,
                              "rdw-image-right": "right" === l,
                              "rdw-image-center": !l || "none" === l
                            })
                          },
                          S.a.createElement(
                            "span",
                            { className: "rdw-image-imagewrapper" },
                            S.a.createElement("img", {
                              src: c,
                              alt: p,
                              style: { height: s, width: u }
                            }),
                            !r() && o && i()
                              ? this.renderAlignmentOptions(l)
                              : void 0
                          )
                        );
                      }
                    }
                  ]) && vo(e.prototype, t),
                  n && vo(e, n),
                  r
                );
              })()),
              (e.propTypes = { block: f.a.object, contentState: f.a.object }),
              t
            );
          },
          Ao = function(o, r) {
            return function(e) {
              if ("function" == typeof r) {
                var t = r(e, o, o.getEditorState);
                if (t) return t;
              }
              if ("atomic" === e.getType()) {
                var n = o
                  .getEditorState()
                  .getCurrentContent()
                  .getEntity(e.getEntityAt(0));
                if (n && "IMAGE" === n.type)
                  return { component: Oo(o), editable: !1 };
                if (n && "EMBEDDED_LINK" === n.type)
                  return { component: ko, editable: !1 };
              }
            };
          },
          To = {
            options: [
              "inline",
              "blockType",
              "fontSize",
              "fontFamily",
              "list",
              "textAlign",
              "colorPicker",
              "link",
              "embedded",
              "emoji",
              "image",
              "remove",
              "history"
            ],
            inline: {
              inDropdown: !1,
              className: void 0,
              component: void 0,
              dropdownClassName: void 0,
              options: [
                "bold",
                "italic",
                "underline",
                "strikethrough",
                "monospace",
                "superscript",
                "subscript"
              ],
              bold: {
                icon:
                  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTYuMjM2IDBjMS42NTIgMCAyLjk0LjI5OCAzLjg2Ni44OTMuOTI1LjU5NSAxLjM4OCAxLjQ4NSAxLjM4OCAyLjY2OSAwIC42MDEtLjE3MyAxLjEzOS0uNTE2IDEuNjEtLjM0My40NzQtLjg0NC44My0xLjQ5OSAxLjA2OC44NDMuMTY3IDEuNDc0LjUyMyAxLjg5NSAxLjA3MS40MTkuNTUuNjMgMS4xODMuNjMgMS45MDMgMCAxLjI0NS0uNDQ0IDIuMTg3LTEuMzMgMi44MjUtLjg4Ni42NDEtMi4xNDQuOTYxLTMuNzY5Ljk2MUgwdi0yLjE2N2gxLjQ5NFYyLjE2N0gwVjBoNi4yMzZ6TTQuMzA4IDUuNDQ2aDIuMDI0Yy43NTIgMCAxLjMzLS4xNDMgMS43MzQtLjQzLjQwNS0uMjg1LjYwOC0uNzAxLjYwOC0xLjI1IDAtLjYtLjIwNC0xLjA0NC0uNjEyLTEuMzMtLjQwOC0uMjg2LTEuMDE2LS40MjctMS44MjYtLjQyN0g0LjMwOHYzLjQzN3ptMCAxLjgwNFYxMWgyLjU5M2MuNzQ3IDAgMS4zMTQtLjE1MiAxLjcwNy0uNDUyLjM5LS4zLjU4OC0uNzQ1LjU4OC0xLjMzNCAwLS42MzYtLjE2OC0xLjEyNC0uNS0xLjQ2LS4zMzYtLjMzNS0uODY0LS41MDQtMS41ODItLjUwNEg0LjMwOHoiIGZpbGw9IiMwMDAiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==",
                className: void 0,
                title: void 0
              },
              italic: {
                icon:
                  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiI+PHBhdGggZD0iTTcgM1YyaDR2MUg5Ljc1M2wtMyAxMEg4djFINHYtMWgxLjI0N2wzLTEwSDd6Ii8+PC9zdmc+",
                className: void 0,
                title: void 0
              },
              underline: {
                icon:
                  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiI+PHBhdGggZD0iTTYuMDQ1IDJ2Ljk5Mkw0Ljc4NSAzdjUuMTcyYzAgLjg1OS4yNDMgMS41MTIuNzI3IDEuOTU3czEuMTI0LjY2OCAxLjkxOC42NjhjLjgzNiAwIDEuNTA5LS4yMjEgMi4wMTktLjY2NC41MTEtLjQ0Mi43NjYtMS4wOTYuNzY2LTEuOTYxVjNsLTEuMjYtLjAwOFYySDEzdi45OTJMMTEuNzM5IDN2NS4xNzJjMCAxLjIzNC0uMzk4IDIuMTgxLTEuMTk1IDIuODQtLjc5Ny42NTktMS44MzUuOTg4LTMuMTE0Ljk4OC0xLjI0MiAwLTIuMjQ4LS4zMjktMy4wMTctLjk4OC0uNzY5LS42NTktMS4xNTItMS42MDUtMS4xNTItMi44NFYzTDIgMi45OTJWMmg0LjA0NXpNMiAxM2gxMXYxSDJ6Ii8+PC9zdmc+",
                className: void 0,
                title: void 0
              },
              strikethrough: {
                icon:
                  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMTMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNNC4wNCA1Ljk1NGg2LjIxNWE3LjQxMiA3LjQxMiAwIDAgMC0uNzk1LS40MzggMTEuOTA3IDExLjkwNyAwIDAgMC0xLjQ0Ny0uNTU3Yy0xLjE4OC0uMzQ4LTEuOTY2LS43MTEtMi4zMzQtMS4wODgtLjM2OC0uMzc3LS41NTItLjc3LS41NTItMS4xODEgMC0uNDk1LjE4Ny0uOTA2LjU2LTEuMjMyLjM4LS4zMzEuODg3LS40OTcgMS41MjMtLjQ5Ny42OCAwIDEuMjY2LjI1NSAxLjc1Ny43NjcuMjk1LjMxNS41ODIuODkxLjg2MSAxLjczbC4xMTcuMDE2LjcwMy4wNS4xLS4wMjRjLjAyOC0uMTUyLjA0Mi0uMjc5LjA0Mi0uMzggMC0uMzM3LS4wMzktLjg1Mi0uMTE3LTEuNTQ0YTkuMzc0IDkuMzc0IDAgMCAwLS4xNzYtLjk5NUM5Ljg4LjM3OSA5LjM4NS4yNDQgOS4wMTcuMTc2IDguMzY1LjA3IDcuODk5LjAxNiA3LjYyLjAxNmMtMS40NSAwLTIuNTQ1LjM1Ny0zLjI4NyAxLjA3MS0uNzQ3LjcyLTEuMTIgMS41ODktMS4xMiAyLjYwNyAwIC41MTEuMTMzIDEuMDQuNCAxLjU4Ni4xMjkuMjUzLjI3LjQ3OC40MjcuNjc0ek04LjI4IDguMTE0Yy41NzUuMjM2Ljk1Ny40MzYgMS4xNDcuNTk5LjQ1MS40MS42NzcuODUyLjY3NyAxLjMyNCAwIC4zODMtLjEzLjc0NS0uMzkzIDEuMDg4LS4yNS4zMzgtLjU5LjU4LTEuMDIuNzI2YTMuNDE2IDMuNDE2IDAgMCAxLTEuMTYzLjIyOGMtLjQwNyAwLS43NzUtLjA2Mi0xLjEwNC0uMTg2YTIuNjk2IDIuNjk2IDAgMCAxLS44NzgtLjQ4IDMuMTMzIDMuMTMzIDAgMCAxLS42Ny0uNzk0IDEuNTI3IDEuNTI3IDAgMCAxLS4xMDQtLjIyNyA1Ny41MjMgNTcuNTIzIDAgMCAwLS4xODgtLjQ3MyAyMS4zNzEgMjEuMzcxIDAgMCAwLS4yNTEtLjU5OWwtLjg1My4wMTd2LjM3MWwtLjAxNy4zMTNhOS45MiA5LjkyIDAgMCAwIDAgLjU3M2MuMDExLjI3LjAxNy43MDkuMDE3IDEuMzE2di4xMWMwIC4wNzkuMDIyLjE0LjA2Ny4xODUuMDgzLjA2OC4yODQuMTQ3LjYwMi4yMzdsMS4xNy4zMzdjLjQ1Mi4xMy45OTYuMTk0IDEuNjMyLjE5NC42ODYgMCAxLjI1Mi0uMDU5IDEuNjk4LS4xNzdhNC42OTQgNC42OTQgMCAwIDAgMS4yOC0uNTU3Yy40MDEtLjI1OS43MDUtLjQ4Ni45MTEtLjY4My4yNjgtLjI3Ni40NjYtLjU2OC41OTQtLjg3OGE0Ljc0IDQuNzQgMCAwIDAgLjM0My0xLjc4OGMwLS4yOTgtLjAyLS41NTctLjA1OC0uNzc2SDguMjgxek0xNC45MTQgNi41N2EuMjYuMjYgMCAwIDAtLjE5My0uMDc2SC4yNjhhLjI2LjI2IDAgMCAwLS4xOTMuMDc2LjI2NC4yNjQgMCAwIDAtLjA3NS4xOTR2LjU0YzAgLjA3OS4wMjUuMTQzLjA3NS4xOTRhLjI2LjI2IDAgMCAwIC4xOTMuMDc2SDE0LjcyYS4yNi4yNiAwIDAgMCAuMTkzLS4wNzYuMjY0LjI2NCAwIDAgMCAuMDc1LS4xOTR2LS41NGEuMjY0LjI2NCAwIDAgMC0uMDc1LS4xOTR6Ii8+PC9nPjwvc3ZnPg==",
                className: void 0,
                title: void 0
              },
              monospace: {
                icon:
                  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMiIGhlaWdodD0iMTUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iIzQ0NCIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMS4wMjEgMi45MDZjLjE4NiAxLjIxOS4zNzIgMS41LjM3MiAyLjcxOUMxLjM5MyA2LjM3NSAwIDcuMDMxIDAgNy4wMzF2LjkzOHMxLjM5My42NTYgMS4zOTMgMS40MDZjMCAxLjIxOS0uMTg2IDEuNS0uMzcyIDIuNzE5Qy43NDMgMTQuMDYzIDEuNzY0IDE1IDIuNjkzIDE1aDEuOTV2LTEuODc1cy0xLjY3Mi4xODgtMS42NzItLjkzOGMwLS44NDMuMTg2LS44NDMuMzcyLTIuNzE4LjA5My0uODQ0LS40NjQtMS41LTEuMDIyLTEuOTY5LjU1OC0uNDY5IDEuMTE1LTEuMDMxIDEuMDIyLTEuODc1QzMuMDY0IDMuNzUgMi45NyAzLjc1IDIuOTcgMi45MDZjMC0xLjEyNSAxLjY3Mi0xLjAzMSAxLjY3Mi0xLjAzMVYwaC0xLjk1QzEuNjcgMCAuNzQzLjkzOCAxLjAyIDIuOTA2ek0xMS45NzkgMi45MDZjLS4xODYgMS4yMTktLjM3MiAxLjUtLjM3MiAyLjcxOSAwIC43NSAxLjM5MyAxLjQwNiAxLjM5MyAxLjQwNnYuOTM4cy0xLjM5My42NTYtMS4zOTMgMS40MDZjMCAxLjIxOS4xODYgMS41LjM3MiAyLjcxOS4yNzggMS45NjktLjc0MyAyLjkwNi0xLjY3MiAyLjkwNmgtMS45NXYtMS44NzVzMS42NzIuMTg4IDEuNjcyLS45MzhjMC0uODQzLS4xODYtLjg0My0uMzcyLTIuNzE4LS4wOTMtLjg0NC40NjQtMS41IDEuMDIyLTEuOTY5LS41NTgtLjQ2OS0xLjExNS0xLjAzMS0xLjAyMi0xLjg3NS4xODYtMS44NzUuMzcyLTEuODc1LjM3Mi0yLjcxOSAwLTEuMTI1LTEuNjcyLTEuMDMxLTEuNjcyLTEuMDMxVjBoMS45NWMxLjAyMiAwIDEuOTUuOTM4IDEuNjcyIDIuOTA2eiIvPjwvZz48L3N2Zz4=",
                className: void 0,
                title: void 0
              },
              superscript: {
                icon:
                  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTciIGhlaWdodD0iMTUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTcuMzA1IDEwLjE2NUwxMS44NjUgMTVIOS4wNTdsLTMuMTkyLTMuNTM2TDIuNzQ2IDE1SDBsNC41MjMtNC44MzVMLjIxOCA1LjYwM2gyLjc3TDUuOTg2IDguOTEgOS4wMSA1LjYwM2gyLjY0OWwtNC4zNTQgNC41NjJ6bTYuMjM0LTMuMjY5bDEuODc5LTEuMzA2Yy42NC0uNDE2IDEuMDYyLS44MDEgMS4yNjQtMS4xNTcuMjAxLS4zNTYuMzAyLS43MzguMzAyLTEuMTQ4IDAtLjY2OS0uMjM3LTEuMjEtLjcxLTEuNjItLjQ3NC0uNDExLTEuMDk3LS42MTctMS44NjgtLjYxNy0uNzQ0IDAtMS4zNC4yMDgtMS43ODUuNjI0LS40NDcuNDE2LS42NyAxLjA0My0uNjcgMS44ODFoMS40MzZjMC0uNS4wOTQtLjg0Ni4yODEtMS4wMzguMTg4LS4xOTEuNDQ1LS4yODcuNzcyLS4yODdzLjU4NS4wOTcuNzc3LjI5MmMuMTkuMTk1LjI4Ni40MzcuMjg2LjcyNiAwIC4yOS0uMDg5LjU1LS4yNjYuNzg1cy0uNjcuNjI4LTEuNDc5IDEuMTg0Yy0uNjkxLjQ3Ny0xLjYyNy45MjctMS45MDggMS4zNWwuMDE0IDEuNTY5SDE3VjYuODk2aC0zLjQ2MXoiLz48L3N2Zz4=",
                className: void 0,
                title: void 0
              },
              subscript: {
                icon:
                  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTciIGhlaWdodD0iMTUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTExLjg2NiAxMS42NDZIOS4wNkw1Ljg2NyA3Ljk0MmwtMy4xMjEgMy43MDRIMGw0LjUyNC01LjA2NEwuMjE4IDEuODA0aDIuNzdsMyAzLjQ2NCAzLjAyMy0zLjQ2NGgyLjY1TDcuMzA2IDYuNTgybDQuNTYgNS4wNjR6bTEuNzI1IDIuMDU4bDEuODI3LTEuMzY4Yy42NC0uNDM1IDEuMDYyLS44NCAxLjI2NC0xLjIxMi4yMDItLjM3Mi4zMDItLjc3My4zMDItMS4yMDIgMC0uNy0uMjM3LTEuMjY2LS43MS0xLjY5Ni0uNDc0LS40MzEtMS4wOTctLjY0Ni0xLjg2OS0uNjQ2LS43NDQgMC0xLjM0LjIxOC0xLjc4NS42NTMtLjQ0Ni40MzYtLjY3IDEuMDkyLS42NyAxLjk3aDEuNDM2YzAtLjUyNC4wOTQtLjg4Ni4yODEtMS4wODcuMTg4LS4yLjQ0NS0uMzAxLjc3Mi0uMzAxcy41ODYuMTAyLjc3Ny4zMDZjLjE5LjIwNC4yODYuNDU4LjI4Ni43NiAwIC4zMDMtLjA4OC41NzctLjI2Ni44MjItLjE3Ny4yNDUtLjY3LjY1OC0xLjQ3OCAxLjI0LS42OTIuNS0xLjYyOC45NzEtMS45MSAxLjQxM0wxMS44NjQgMTVIMTd2LTEuMjk2aC0zLjQxeiIvPjwvc3ZnPg==",
                className: void 0,
                title: void 0
              }
            },
            blockType: {
              inDropdown: !0,
              options: [
                "Normal",
                "H1",
                "H2",
                "H3",
                "H4",
                "H5",
                "H6",
                "Blockquote",
                "Code"
              ],
              className: void 0,
              component: void 0,
              dropdownClassName: void 0,
              title: void 0
            },
            fontSize: {
              icon:
                "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTEuOTIxIDMuMTE5YS40MjcuNDI3IDAgMCAwIC4zMzUuMTY0aC45N2EuNDI2LjQyNiAwIDAgMCAuMzA0LS4xMy40NDEuNDQxIDAgMCAwIC4xMjUtLjMxbC4wMDItMi40MWEuNDM0LjQzNCAwIDAgMC0uNDMtLjQzMkguNDNBLjQzNC40MzQgMCAwIDAgMCAuNDR2Mi40MDZjMCAuMjQyLjE5Mi40MzguNDMuNDM4aC45N2MuMTMgMCAuMjU0LS4wNi4zMzUtLjE2NWwuNzMtLjkzSDUuNTR2MTEuMzZjMCAuMjQxLjE5Mi40MzcuNDMuNDM3aDEuNzE3Yy4yMzcgMCAuNDMtLjE5Ni40My0uNDM3VjIuMTg4aDMuMDdsLjczNC45MzF6TTEzLjg5OCAxMS4yNjNhLjQyNS40MjUgMCAwIDAtLjQ4Mi0uMTQ2bC0uNTQ3LjE5NFY5LjYxN2EuNDQyLjQ0MiAwIDAgMC0uMTI2LS4zMS40MjYuNDI2IDAgMCAwLS4zMDQtLjEyN2gtLjQyOWEuNDM0LjQzNCAwIDAgMC0uNDMuNDM3djEuNjk0bC0uNTQ3LS4xOTRhLjQyNS40MjUgMCAwIDAtLjQ4MS4xNDYuNDQ0LjQ0NCAwIDAgMC0uMDE2LjUxMmwxLjMzMiAyLjAxN2EuNDI3LjQyNyAwIDAgMCAuNzEzIDBsMS4zMzMtMi4wMTdhLjQ0NC40NDQgMCAwIDAtLjAxNi0uNTEyeiIvPjwvZz48L3N2Zz4=",
              options: [
                8,
                9,
                10,
                11,
                12,
                14,
                16,
                18,
                24,
                30,
                36,
                48,
                60,
                72,
                96
              ],
              className: void 0,
              component: void 0,
              dropdownClassName: void 0,
              title: void 0
            },
            fontFamily: {
              options: [
                "Arial",
                "Georgia",
                "Impact",
                "Tahoma",
                "Times New Roman",
                "Verdana"
              ],
              className: void 0,
              component: void 0,
              dropdownClassName: void 0,
              title: void 0
            },
            list: {
              inDropdown: !1,
              className: void 0,
              component: void 0,
              dropdownClassName: void 0,
              options: ["unordered", "ordered", "indent", "outdent"],
              unordered: {
                icon:
                  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMS43MiAzLjQyN2MuOTUxIDAgMS43MjItLjc2OCAxLjcyMi0xLjcwOFMyLjY3LjAxIDEuNzIuMDFDLjc3LjAwOCAwIC43NzUgMCAxLjcxNWMwIC45NC43NzQgMS43MTEgMS43MiAxLjcxMXptMC0yLjYyNWMuNTEgMCAuOTIyLjQxMi45MjIuOTE0YS45Mi45MiAwIDAgMS0xLjg0MiAwIC45Mi45MiAwIDAgMSAuOTItLjkxNHpNMS43MiA4LjcwM2MuOTUxIDAgMS43MjItLjc2OCAxLjcyMi0xLjcwOFMyLjY3IDUuMjg3IDEuNzIgNS4yODdDLjc3IDUuMjg3IDAgNi4wNTIgMCA2Ljk5NXMuNzc0IDEuNzA4IDEuNzIgMS43MDh6bTAtMi42MjJjLjUxIDAgLjkyMi40MTIuOTIyLjkxNGEuOTIuOTIgMCAwIDEtMS44NDIgMGMwLS41MDUuNDE1LS45MTQuOTItLjkxNHpNMS43MiAxMy45ODJjLjk1MSAwIDEuNzIyLS43NjggMS43MjItMS43MDggMC0uOTQzLS43NzQtMS43MDgtMS43MjEtMS43MDgtLjk0NyAwLTEuNzIxLjc2OC0xLjcyMSAxLjcwOHMuNzc0IDEuNzA4IDEuNzIgMS43MDh6bTAtMi42MjVjLjUxIDAgLjkyMi40MTIuOTIyLjkxNGEuOTIuOTIgMCAxIDEtMS44NDIgMCAuOTIuOTIgMCAwIDEgLjkyLS45MTR6TTUuNzQ0IDIuMTE1aDkuODQ1YS40LjQgMCAwIDAgLjQwMS0uMzk5LjQuNCAwIDAgMC0uNDAxLS4zOTlINS43NDRhLjQuNCAwIDAgMC0uNDAyLjM5OS40LjQgMCAwIDAgLjQwMi4zOTl6TTUuNzQ0IDcuMzk0aDkuODQ1YS40LjQgMCAwIDAgLjQwMS0uMzk5LjQuNCAwIDAgMC0uNDAxLS4zOThINS43NDRhLjQuNCAwIDAgMC0uNDAyLjM5OC40LjQgMCAwIDAgLjQwMi4zOTl6TTUuNzQ0IDEyLjY3aDkuODQ1YS40LjQgMCAwIDAgLjQwMS0uMzk5LjQuNCAwIDAgMC0uNDAxLS4zOTlINS43NDRhLjQuNCAwIDAgMC0uNDAyLjQuNC40IDAgMCAwIC40MDIuMzk4eiIvPjwvZz48L3N2Zz4=",
                className: void 0,
                title: void 0
              },
              ordered: {
                icon:
                  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMiIGhlaWdodD0iMTMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNNC4yMDIgMS40NjZoOC4xNWMuMzM4IDAgLjYxMi0uMzIyLjYxMi0uNzIgMC0uMzk3LS4yNzQtLjcyLS42MTItLjcyaC04LjE1Yy0uMzM4IDAtLjYxMS4zMjMtLjYxMS43MiAwIC4zOTguMjczLjcyLjYxLjcyek0xMi4zNTIgNS43ODNoLTguMTVjLS4zMzggMC0uNjExLjMyMi0uNjExLjcyIDAgLjM5Ny4yNzMuNzIuNjEuNzJoOC4xNTFjLjMzOCAwIC42MTItLjMyMy42MTItLjcyIDAtLjM5OC0uMjc0LS43Mi0uNjEyLS43MnpNMTIuMzUyIDExLjU0aC04LjE1Yy0uMzM4IDAtLjYxMS4zMjItLjYxMS43MiAwIC4zOTYuMjczLjcxOS42MS43MTloOC4xNTFjLjMzOCAwIC42MTItLjMyMy42MTItLjcyIDAtLjM5Ny0uMjc0LS43Mi0uNjEyLS43MnpNLjc2NyAxLjI0OXYxLjgwMmMwIC4xOTUuMTM2LjM0My4zMTUuMzQzLjE3NiAwIC4zMTUtLjE1LjMxNS0uMzQzVi4zNTZjMC0uMTktLjEzMy0uMzM5LS4zMDItLjMzOS0uMTQ4IDAtLjIyMy4xMTgtLjI0Ny4xNTZhLjIyOC4yMjggMCAwIDAtLjAwMy4wMDVMLjU3OS42MjFhLjQ3NC40NzQgMCAwIDAtLjA5OC4yNzNjMCAuMTk0LjEyOC4zNTEuMjg2LjM1NXpNLjM1MiA4LjE5SDEuNTVjLjE1NyAwIC4yODUtLjE2Mi4yODUtLjM2MiAwLS4xOTgtLjEyOC0uMzU5LS4yODUtLjM1OUguNjh2LS4wMDZjMC0uMTA3LjIxLS4yODEuMzc4LS40MjIuMzM2LS4yNzguNzUzLS42MjUuNzUzLTEuMjI2IDAtLjU3LS4zNzYtMS0uODc0LTEtLjQ3NyAwLS44MzYuMzg1LS44MzYuODk3IDAgLjI5Ny4xNjQuNDAyLjMwNS40MDIuMiAwIC4zMjEtLjE3Ni4zMjEtLjM0NiAwLS4xMDYuMDIzLS4yMjguMjA0LS4yMjguMjQzIDAgLjI1LjI1NC4yNS4yODMgMCAuMjI4LS4yNTIuNDQyLS40OTUuNjQ5LS4zMDEuMjU1LS42NDIuNTQ0LS42NDIuOTkydi4zODRjMCAuMjA1LjE1OS4zNDMuMzA4LjM0M3pNMS43NyAxMC41NDNjMC0uNTkyLS4yOTYtLjkzMS0uODE0LS45MzEtLjY4IDAtLjg1OS41Ny0uODU5Ljg3MiAwIC4zNTEuMjIyLjM5LjMxOC4zOS4xODUgMCAuMzEtLjE0OC4zMS0uMzY2IDAtLjA4NC4wMjYtLjE4MS4yMjQtLjE4MS4xNDIgMCAuMi4wMjQuMi4yNjcgMCAuMjM3LS4wNDMuMjYzLS4yMTMuMjYzLS4xNjQgMC0uMjg4LjE1Mi0uMjg4LjM1NCAwIC4yLjEyNS4zNS4yOTEuMzUuMjI1IDAgLjI3LjEwOC4yNy4yODN2LjA3NWMwIC4yOTQtLjA5Ny4zNS0uMjc3LjM1LS4yNDggMC0uMjY3LS4xNS0uMjY3LS4xOTcgMC0uMTc0LS4wOTgtLjM1LS4zMTctLjM1LS4xOTIgMC0uMzA3LjE0MS0uMzA3LjM3OCAwIC40My4zMTMuODg4Ljg5NS44ODguNTY0IDAgLjkwMS0uNC45MDEtMS4wN3YtLjA3NGMwLS4yNzQtLjA3NC0uNTAyLS4yMTQtLjY2Ni4wOTYtLjE2My4xNDgtLjM4LjE0OC0uNjM1eiIvPjwvZz48L3N2Zz4=",
                className: void 0,
                title: void 0
              },
              indent: {
                icon:
                  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTciIGhlaWdodD0iMTQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNNS43MTYgMy4yMTFIMTd2MS4xOTdINS43MTZ6TTAgLjAyaDE3djEuMTk3SDB6TTAgMTIuNzgzaDE3djEuMTk3SDB6TTUuNzE2IDkuNTkzSDE3djEuMTk3SDUuNzE2ek01LjcxNiA2LjQwMkgxN3YxLjE5N0g1LjcxNnpNLjE4NyA5LjQ5MUwyLjUyIDcgLjE4NyA0LjUwOXoiLz48L2c+PC9zdmc+",
                className: void 0,
                title: void 0
              },
              outdent: {
                icon:
                  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNNS4zOTYgMy4xOTNoMTAuNTczVjQuMzlINS4zOTZ6TS4wMzkuMDAzaDE1LjkzVjEuMkguMDM5ek0uMDM5IDEyLjc2NmgxNS45M3YxLjE5N0guMDM5ek01LjM5NiA5LjU3NWgxMC41NzN2MS4xOTdINS4zOTZ6TTUuMzk2IDYuMzg0aDEwLjU3M3YxLjE5N0g1LjM5NnpNMi4xODcgNC40OTFMMCA2Ljk4M2wyLjE4NyAyLjQ5MXoiLz48L2c+PC9zdmc+",
                className: void 0,
                title: void 0
              },
              title: void 0
            },
            textAlign: {
              inDropdown: !1,
              className: void 0,
              component: void 0,
              dropdownClassName: void 0,
              options: ["left", "center", "right", "justify"],
              left: {
                icon:
                  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMTUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNOC40OTMgMTQuODg3SC4zMjZhLjMyNi4zMjYgMCAwIDEgMC0uNjUyaDguMTY3YS4zMjYuMzI2IDAgMCAxIDAgLjY1MnpNMTQuNjE4IDEwLjE2MkguMzI2YS4zMjYuMzI2IDAgMCAxIDAtLjY1M2gxNC4yOTJhLjMyNi4zMjYgMCAwIDEgMCAuNjUzek04LjQ5MyA1LjQzNUguMzI2YS4zMjYuMzI2IDAgMCAxIDAtLjY1Mmg4LjE2N2EuMzI2LjMyNiAwIDAgMSAwIC42NTJ6TTE0LjYxOC43MDlILjMyNmEuMzI2LjMyNiAwIDAgMSAwLS42NTJoMTQuMjkyYS4zMjYuMzI2IDAgMCAxIDAgLjY1MnoiLz48L2c+PC9zdmc+",
                className: void 0,
                title: void 0
              },
              center: {
                icon:
                  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMTUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTEuNTU2IDE0Ljg4N0gzLjM4OGEuMzI2LjMyNiAwIDAgMSAwLS42NTJoOC4xNjdhLjMyNi4zMjYgMCAwIDEgMCAuNjUyek0xNC42MTggMTAuMTYySC4zMjZhLjMyNi4zMjYgMCAwIDEgMC0uNjUzaDE0LjI5MmEuMzI2LjMyNiAwIDAgMSAwIC42NTN6TTExLjU1NiA1LjQzNUgzLjM4OGEuMzI2LjMyNiAwIDAgMSAwLS42NTJoOC4xNjdhLjMyNi4zMjYgMCAwIDEgMCAuNjUyek0xNC42MTguNzA5SC4zMjZhLjMyNi4zMjYgMCAwIDEgMC0uNjUyaDE0LjI5MmEuMzI2LjMyNiAwIDAgMSAwIC42NTJ6Ii8+PC9nPjwvc3ZnPg==",
                className: void 0,
                title: void 0
              },
              right: {
                icon:
                  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMTUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTQuNjE4IDE0Ljg4N0g2LjQ1YS4zMjYuMzI2IDAgMCAxIDAtLjY1Mmg4LjE2N2EuMzI2LjMyNiAwIDAgMSAwIC42NTJ6TTE0LjYxOCAxMC4xNjJILjMyNmEuMzI2LjMyNiAwIDAgMSAwLS42NTNoMTQuMjkyYS4zMjYuMzI2IDAgMCAxIDAgLjY1M3pNMTQuNjE4IDUuNDM1SDYuNDVhLjMyNi4zMjYgMCAwIDEgMC0uNjUyaDguMTY3YS4zMjYuMzI2IDAgMCAxIDAgLjY1MnpNMTQuNjE4LjcwOUguMzI2YS4zMjYuMzI2IDAgMCAxIDAtLjY1MmgxNC4yOTJhLjMyNi4zMjYgMCAwIDEgMCAuNjUyeiIvPjwvZz48L3N2Zz4=",
                className: void 0,
                title: void 0
              },
              justify: {
                icon:
                  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMTUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTQuNjIgMTQuODg4SC4zMjVhLjMyNi4zMjYgMCAwIDEgMC0uNjUySDE0LjYyYS4zMjYuMzI2IDAgMCAxIDAgLjY1MnpNMTQuNjIgMTAuMTYySC4zMjVhLjMyNi4zMjYgMCAwIDEgMC0uNjUySDE0LjYyYS4zMjYuMzI2IDAgMCAxIDAgLjY1MnpNMTQuNjIgNS40MzZILjMyNWEuMzI2LjMyNiAwIDAgMSAwLS42NTJIMTQuNjJhLjMyNi4zMjYgMCAwIDEgMCAuNjUyek0xNC42Mi43MUguMzI1YS4zMjYuMzI2IDAgMCAxIDAtLjY1M0gxNC42MmEuMzI2LjMyNiAwIDAgMSAwIC42NTN6Ii8+PC9nPjwvc3ZnPg==",
                className: void 0,
                title: void 0
              },
              title: void 0
            },
            colorPicker: {
              icon:
                "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMTUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTQuNDA2LjU4NWExLjk5OCAxLjk5OCAwIDAgMC0yLjgyNSAwbC0uNTQuNTRhLjc0MS43NDEgMCAxIDAtMS4wNDggMS4wNDhsLjE3NS4xNzUtNS44MjYgNS44MjUtMi4wMjIgMi4wMjNhLjkxLjkxIDAgMCAwLS4yNjYuNjAybC0uMDA1LjEwOHYuMDAybC0uMDgxIDEuODI5YS4zMDIuMzAyIDAgMCAwIC4zMDIuMzE2aC4wMTNsLjk3LS4wNDQuNTkyLS4wMjYuMjY4LS4wMTJjLjI5Ny0uMDEzLjU3OS0uMTM3Ljc5LS4zNDdsNy43Ny03Ljc3LjE0Ni4xNDRhLjc0Ljc0IDAgMCAwIDEuMDQ4IDBjLjI5LS4yOS4yOS0uNzU5IDAtMS4wNDhsLjU0LS41NGMuNzgtLjc4Ljc4LTIuMDQ0IDAtMi44MjV6TTguNzk1IDcuMzMzbC0yLjczLjUxNSA0LjQ1Mi00LjQ1MiAxLjEwOCAxLjEwNy0yLjgzIDIuODN6TTIuMDggMTMuNjczYy0xLjE0OCAwLTIuMDguMjk1LTIuMDguNjYgMCAuMzYzLjkzMi42NTggMi4wOC42NTggMS4xNSAwIDIuMDgtLjI5NCAyLjA4LS42NTkgMC0uMzY0LS45My0uNjU5LTIuMDgtLjY1OXoiLz48L2c+PC9zdmc+",
              className: void 0,
              component: void 0,
              popupClassName: void 0,
              colors: [
                "rgb(97,189,109)",
                "rgb(26,188,156)",
                "rgb(84,172,210)",
                "rgb(44,130,201)",
                "rgb(147,101,184)",
                "rgb(71,85,119)",
                "rgb(204,204,204)",
                "rgb(65,168,95)",
                "rgb(0,168,133)",
                "rgb(61,142,185)",
                "rgb(41,105,176)",
                "rgb(85,57,130)",
                "rgb(40,50,78)",
                "rgb(0,0,0)",
                "rgb(247,218,100)",
                "rgb(251,160,38)",
                "rgb(235,107,86)",
                "rgb(226,80,65)",
                "rgb(163,143,132)",
                "rgb(239,239,239)",
                "rgb(255,255,255)",
                "rgb(250,197,28)",
                "rgb(243,121,52)",
                "rgb(209,72,65)",
                "rgb(184,49,47)",
                "rgb(124,112,107)",
                "rgb(209,213,216)"
              ],
              title: void 0
            },
            link: {
              inDropdown: !1,
              className: void 0,
              component: void 0,
              popupClassName: void 0,
              dropdownClassName: void 0,
              showOpenOptionOnHover: !0,
              defaultTargetOption: "_self",
              options: ["link", "unlink"],
              link: {
                icon:
                  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMTUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEzLjk2Ny45NUEzLjIyNiAzLjIyNiAwIDAgMCAxMS42Ny4wMDJjLS44NyAwLTEuNjg2LjMzNy0yLjI5Ny45NDhMNy4xMDUgMy4yMThBMy4yNDcgMy4yNDcgMCAwIDAgNi4yNCA2LjI0YTMuMjI1IDMuMjI1IDAgMCAwLTMuMDIyLjg2NUwuOTUgOS4zNzNhMy4yNTMgMy4yNTMgMCAwIDAgMCA0LjU5NCAzLjIyNiAzLjIyNiAwIDAgMCAyLjI5Ny45NDhjLjg3IDAgMS42ODYtLjMzNiAyLjI5OC0uOTQ4TDcuODEyIDExLjdhMy4yNDcgMy4yNDcgMCAwIDAgLjg2NS0zLjAyMyAzLjIyNSAzLjIyNSAwIDAgMCAzLjAyMi0uODY1bDIuMjY4LTIuMjY3YTMuMjUyIDMuMjUyIDAgMCAwIDAtNC41OTV6TTcuMTA1IDEwLjk5M0w0LjgzNyAxMy4yNmEyLjIzMyAyLjIzMyAwIDAgMS0xLjU5LjY1NSAyLjIzMyAyLjIzMyAwIDAgMS0xLjU5LS42NTUgMi4yNTIgMi4yNTIgMCAwIDEgMC0zLjE4bDIuMjY4LTIuMjY4YTIuMjMyIDIuMjMyIDAgMCAxIDEuNTktLjY1NWMuNDMgMCAuODQxLjEyIDEuMTk1LjM0M0w0Ljc3MiA5LjQzOGEuNS41IDAgMSAwIC43MDcuNzA3bDEuOTM5LTEuOTM4Yy41NDUuODY4LjQ0MiAyLjAzLS4zMTMgMi43ODV6bTYuMTU1LTYuMTU1bC0yLjI2OCAyLjI2N2EyLjIzMyAyLjIzMyAwIDAgMS0xLjU5LjY1NWMtLjQzMSAwLS44NDEtLjEyLTEuMTk1LS4zNDNsMS45MzgtMS45MzhhLjUuNSAwIDEgMC0uNzA3LS43MDdMNy40OTkgNi43MWEyLjI1MiAyLjI1MiAwIDAgMSAuMzEzLTIuNzg1bDIuMjY3LTIuMjY4YTIuMjMzIDIuMjMzIDAgMCAxIDEuNTktLjY1NSAyLjIzMyAyLjIzMyAwIDAgMSAyLjI0NiAyLjI0NWMwIC42MDMtLjIzMiAxLjE2OC0uNjU1IDEuNTl6IiBmaWxsPSIjMDAwIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=",
                className: void 0,
                title: void 0
              },
              unlink: {
                icon:
                  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMTUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTMuOTU2IDEuMDM3YTMuNTUgMy41NSAwIDAgMC01LjAxNCAwTDYuNDM2IDMuNTQ0YS41NDUuNTQ1IDAgMSAwIC43Ny43N2wyLjUwOC0yLjUwNmEyLjQzOCAyLjQzOCAwIDAgMSAxLjczNS0uNzE1Yy42NTggMCAxLjI3NS4yNTQgMS43MzYuNzE1LjQ2LjQ2MS43MTUgMS4wNzguNzE1IDEuNzM2IDAgLjY1OC0uMjU0IDEuMjc0LS43MTUgMS43MzVMOS45MDcgOC41NThhMi40NTggMi40NTggMCAwIDEtMy40NzIgMCAuNTQ1LjU0NSAwIDEgMC0uNzcxLjc3MSAzLjUzNCAzLjUzNCAwIDAgMCAyLjUwNyAxLjAzN2MuOTA4IDAgMS44MTYtLjM0NiAyLjUwNy0xLjAzN2wzLjI3OC0zLjI3OGEzLjUyIDMuNTIgMCAwIDAgMS4wMzUtMi41MDdjMC0uOTUtLjM2Ny0xLjg0LTEuMDM1LTIuNTA3eiIvPjxwYXRoIGQ9Ik03LjQgMTEuMDY1bC0yLjEyMiAyLjEyYTIuNDM3IDIuNDM3IDAgMCAxLTEuNzM1LjcxNiAyLjQzNyAyLjQzNyAwIDAgMS0xLjczNi0uNzE1IDIuNDU3IDIuNDU3IDAgMCAxIDAtMy40NzFsMy4wODYtMy4wODZhMi40MzggMi40MzggMCAwIDEgMS43MzUtLjcxNWMuNjU4IDAgMS4yNzUuMjU0IDEuNzM2LjcxNWEuNTQ1LjU0NSAwIDEgMCAuNzcxLS43NzEgMy41NSAzLjU1IDAgMCAwLTUuMDE0IDBMMS4wMzYgOC45NDRBMy41MiAzLjUyIDAgMCAwIDAgMTEuNDVjMCAuOTUuMzY3IDEuODQgMS4wMzUgMi41MDdhMy41MiAzLjUyIDAgMCAwIDIuNTA2IDEuMDM1Yy45NSAwIDEuODQtLjM2OCAyLjUwNy0xLjAzNWwyLjEyMi0yLjEyMWEuNTQ1LjU0NSAwIDAgMC0uNzcxLS43NzF6TTkuMjc0IDEyLjAwMmEuNTQ2LjU0NiAwIDAgMC0uNTQ2LjU0NXYxLjYzN2EuNTQ2LjU0NiAwIDAgMCAxLjA5MSAwdi0xLjYzN2EuNTQ1LjU0NSAwIDAgMC0uNTQ1LS41NDV6TTExLjIzIDExLjYxNmEuNTQ1LjU0NSAwIDEgMC0uNzcyLjc3MmwxLjE1NyAxLjE1NmEuNTQzLjU0MyAwIDAgMCAuNzcxIDAgLjU0NS41NDUgMCAwIDAgMC0uNzdsLTEuMTU2LTEuMTU4ek0xMi41MzcgOS44MkgxMC45YS41NDYuNTQ2IDAgMCAwIDAgMS4wOTFoMS42MzdhLjU0Ni41NDYgMCAwIDAgMC0xLjA5ek00LjkxIDMuNTQ3YS41NDYuNTQ2IDAgMCAwIC41NDUtLjU0NVYxLjM2NmEuNTQ2LjU0NiAwIDAgMC0xLjA5IDB2MS42MzZjMCAuMzAxLjI0NC41NDUuNTQ1LjU0NXpNMi44ODggMy45MzNhLjU0My41NDMgMCAwIDAgLjc3MSAwIC41NDUuNTQ1IDAgMCAwIDAtLjc3MUwyLjUwMiAyLjAwNWEuNTQ1LjU0NSAwIDEgMC0uNzcxLjc3bDEuMTU3IDEuMTU4ek0xLjYyOCA1LjczaDEuNjM2YS41NDYuNTQ2IDAgMCAwIDAtMS4wOTJIMS42MjhhLjU0Ni41NDYgMCAwIDAgMCAxLjA5MXoiLz48L2c+PC9zdmc+",
                className: void 0,
                title: void 0
              },
              linkCallback: void 0
            },
            emoji: {
              icon:
                "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTciIGhlaWdodD0iMTciIHZpZXdCb3g9IjE1LjcyOSAyMi4wODIgMTcgMTciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTI5LjcwOCAyNS4xMDRjLTMuMDIxLTMuMDIyLTcuOTM3LTMuMDIyLTEwLjk1OCAwLTMuMDIxIDMuMDItMy4wMiA3LjkzNiAwIDEwLjk1OCAzLjAyMSAzLjAyIDcuOTM3IDMuMDIgMTAuOTU4LS4wMDEgMy4wMi0zLjAyMSAzLjAyLTcuOTM2IDAtMTAuOTU3em0tLjg0NSAxMC4xMTJhNi41NiA2LjU2IDAgMCAxLTkuMjY4IDAgNi41NiA2LjU2IDAgMCAxIDAtOS4yNjcgNi41NiA2LjU2IDAgMCAxIDkuMjY4IDAgNi41NiA2LjU2IDAgMCAxIDAgOS4yNjd6bS03LjUyNC02LjczYS45MDYuOTA2IDAgMSAxIDEuODExIDAgLjkwNi45MDYgMCAwIDEtMS44MTEgMHptNC4xMDYgMGEuOTA2LjkwNiAwIDEgMSAxLjgxMiAwIC45MDYuOTA2IDAgMCAxLTEuODEyIDB6bTIuMTQxIDMuNzA4Yy0uNTYxIDEuMjk4LTEuODc1IDIuMTM3LTMuMzQ4IDIuMTM3LTEuNTA1IDAtMi44MjctLjg0My0zLjM2OS0yLjE0N2EuNDM4LjQzOCAwIDAgMSAuODEtLjMzNmMuNDA1Ljk3NiAxLjQxIDEuNjA3IDIuNTU5IDEuNjA3IDEuMTIzIDAgMi4xMjEtLjYzMSAyLjU0NC0xLjYwOGEuNDM4LjQzOCAwIDAgMSAuODA0LjM0N3oiLz48L3N2Zz4=",
              className: void 0,
              component: void 0,
              popupClassName: void 0,
              emojis: [
                "😀",
                "😁",
                "😂",
                "😃",
                "😉",
                "😋",
                "😎",
                "😍",
                "😗",
                "🤗",
                "🤔",
                "😣",
                "😫",
                "😴",
                "😌",
                "🤓",
                "😛",
                "😜",
                "😠",
                "😇",
                "😷",
                "😈",
                "👻",
                "😺",
                "😸",
                "😹",
                "😻",
                "😼",
                "😽",
                "🙀",
                "🙈",
                "🙉",
                "🙊",
                "👼",
                "👮",
                "🕵",
                "💂",
                "👳",
                "🎅",
                "👸",
                "👰",
                "👲",
                "🙍",
                "🙇",
                "🚶",
                "🏃",
                "💃",
                "⛷",
                "🏂",
                "🏌",
                "🏄",
                "🚣",
                "🏊",
                "⛹",
                "🏋",
                "🚴",
                "👫",
                "💪",
                "👈",
                "👉",
                "👆",
                "🖕",
                "👇",
                "🖖",
                "🤘",
                "🖐",
                "👌",
                "👍",
                "👎",
                "✊",
                "👊",
                "👏",
                "🙌",
                "🙏",
                "🐵",
                "🐶",
                "🐇",
                "🐥",
                "🐸",
                "🐌",
                "🐛",
                "🐜",
                "🐝",
                "🍉",
                "🍄",
                "🍔",
                "🍤",
                "🍨",
                "🍪",
                "🎂",
                "🍰",
                "🍾",
                "🍷",
                "🍸",
                "🍺",
                "🌍",
                "🚑",
                "⏰",
                "🌙",
                "🌝",
                "🌞",
                "⭐",
                "🌟",
                "🌠",
                "🌨",
                "🌩",
                "⛄",
                "🔥",
                "🎄",
                "🎈",
                "🎉",
                "🎊",
                "🎁",
                "🎗",
                "🏀",
                "🏈",
                "🎲",
                "🔇",
                "🔈",
                "📣",
                "🔔",
                "🎵",
                "🎷",
                "💰",
                "🖊",
                "📅",
                "✅",
                "❎",
                "💯"
              ],
              title: void 0
            },
            embedded: {
              icon:
                "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTciIGhlaWdodD0iMTciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTYuNzA4IDYuNjE1YS40MzYuNDM2IDAgMCAwLS41NDMuMjkxbC0xLjgzIDYuMDQ1YS40MzYuNDM2IDAgMCAwIC44MzMuMjUyTDcgNy4xNmEuNDM2LjQzNiAwIDAgMC0uMjktLjU0NHpNOC45MzEgNi42MTVhLjQzNi40MzYgMCAwIDAtLjU0My4yOTFsLTEuODMgNi4wNDVhLjQzNi40MzYgMCAwIDAgLjgzNC4yNTJsMS44My02LjA0NGEuNDM2LjQzNiAwIDAgMC0uMjktLjU0NHoiLz48cGF0aCBkPSJNMTYuNTY0IDBILjQzNkEuNDM2LjQzNiAwIDAgMCAwIC40MzZ2MTYuMTI4YzAgLjI0LjE5NS40MzYuNDM2LjQzNmgxNi4xMjhjLjI0IDAgLjQzNi0uMTk1LjQzNi0uNDM2Vi40MzZBLjQzNi40MzYgMCAwIDAgMTYuNTY0IDB6TTMuNDg3Ljg3MmgxMC4wMjZ2MS43NDNIMy40ODdWLjg3MnptLTIuNjE1IDBoMS43NDN2MS43NDNILjg3MlYuODcyem0xNS4yNTYgMTUuMjU2SC44NzJWMy40ODhoMTUuMjU2djEyLjY0em0wLTEzLjUxM2gtMS43NDNWLjg3MmgxLjc0M3YxLjc0M3oiLz48Y2lyY2xlIGN4PSI5My44NjciIGN5PSIyNDUuMDY0IiByPSIxMy4xMjgiIHRyYW5zZm9ybT0ibWF0cml4KC4wMzMyIDAgMCAuMDMzMiAwIDApIi8+PGNpcmNsZSBjeD0iOTMuODY3IiBjeT0iMzYwLjU5MiIgcj0iMTMuMTI4IiB0cmFuc2Zvcm09Im1hdHJpeCguMDMzMiAwIDAgLjAzMzIgMCAwKSIvPjxwYXRoIGQ9Ik0xNC4yNTQgMTIuNjQxSDEwLjJhLjQzNi40MzYgMCAwIDAgMCAuODcyaDQuMDU0YS40MzYuNDM2IDAgMCAwIDAtLjg3MnoiLz48L3N2Zz4=",
              className: void 0,
              component: void 0,
              popupClassName: void 0,
              embedCallback: void 0,
              defaultSize: { height: "auto", width: "auto" },
              title: void 0
            },
            image: {
              icon:
                "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMTQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTQuNzQxIDBILjI2Qy4xMTYgMCAwIC4xMzYgMCAuMzA0djEzLjM5MmMwIC4xNjguMTE2LjMwNC4yNTkuMzA0SDE0Ljc0Yy4xNDMgMCAuMjU5LS4xMzYuMjU5LS4zMDRWLjMwNEMxNSAuMTM2IDE0Ljg4NCAwIDE0Ljc0MSAwem0tLjI1OCAxMy4zOTFILjUxN1YuNjFoMTMuOTY2VjEzLjM5eiIvPjxwYXRoIGQ9Ik00LjEzOCA2LjczOGMuNzk0IDAgMS40NC0uNzYgMS40NC0xLjY5NXMtLjY0Ni0xLjY5NS0xLjQ0LTEuNjk1Yy0uNzk0IDAtMS40NC43Ni0xLjQ0IDEuNjk1IDAgLjkzNC42NDYgMS42OTUgMS40NCAxLjY5NXptMC0yLjc4MWMuNTA5IDAgLjkyMy40ODcuOTIzIDEuMDg2IDAgLjU5OC0uNDE0IDEuMDg2LS45MjMgMS4wODYtLjUwOSAwLS45MjMtLjQ4Ny0uOTIzLTEuMDg2IDAtLjU5OS40MTQtMS4wODYuOTIzLTEuMDg2ek0xLjgxIDEyLjE3NGMuMDYgMCAuMTIyLS4wMjUuMTcxLS4wNzZMNi4yIDcuNzI4bDIuNjY0IDMuMTM0YS4yMzIuMjMyIDAgMCAwIC4zNjYgMCAuMzQzLjM0MyAwIDAgMCAwLS40M0w3Ljk4NyA4Ljk2OWwyLjM3NC0zLjA2IDIuOTEyIDMuMTQyYy4xMDYuMTEzLjI3LjEwNS4zNjYtLjAyYS4zNDMuMzQzIDAgMCAwLS4wMTYtLjQzbC0zLjEwNC0zLjM0N2EuMjQ0LjI0NCAwIDAgMC0uMTg2LS4wOC4yNDUuMjQ1IDAgMCAwLS4xOC4xTDcuNjIyIDguNTM3IDYuMzk0IDcuMDk0YS4yMzIuMjMyIDAgMCAwLS4zNTQtLjAxM2wtNC40IDQuNTZhLjM0My4zNDMgMCAwIDAtLjAyNC40My4yNDMuMjQzIDAgMCAwIC4xOTQuMTAzeiIvPjwvZz48L3N2Zz4=",
              className: void 0,
              component: void 0,
              popupClassName: void 0,
              urlEnabled: !0,
              uploadEnabled: !0,
              previewImage: !1,
              alignmentEnabled: !0,
              uploadCallback: void 0,
              inputAccept: "image/gif,image/jpeg,image/jpg,image/png,image/svg",
              alt: { present: !1, mandatory: !1 },
              defaultSize: { height: "auto", width: "auto" },
              title: void 0
            },
            remove: {
              icon:
                "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNSIgaGVpZ2h0PSIxNSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBkPSJNOC4xIDE0bDYuNC03LjJjLjYtLjcuNi0xLjgtLjEtMi41bC0yLjctMi43Yy0uMy0uNC0uOC0uNi0xLjMtLjZIOC42Yy0uNSAwLTEgLjItMS40LjZMLjUgOS4yYy0uNi43LS42IDEuOS4xIDIuNWwyLjcgMi43Yy4zLjQuOC42IDEuMy42SDE2di0xSDguMXptLTEuMy0uMXMwLS4xIDAgMGwtMi43LTIuN2MtLjQtLjQtLjQtLjkgMC0xLjNMNy41IDZoLTFsLTMgMy4zYy0uNi43LS42IDEuNy4xIDIuNEw1LjkgMTRINC42Yy0uMiAwLS40LS4xLS42LS4yTDEuMiAxMWMtLjMtLjMtLjMtLjggMC0xLjFMNC43IDZoMS44TDEwIDJoMUw3LjUgNmwzLjEgMy43LTMuNSA0Yy0uMS4xLS4yLjEtLjMuMnoiLz48L3N2Zz4=",
              className: void 0,
              component: void 0,
              title: void 0
            },
            history: {
              inDropdown: !1,
              className: void 0,
              component: void 0,
              dropdownClassName: void 0,
              options: ["undo", "redo"],
              undo: {
                icon:
                  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTcgMTQuODc1YzIuNjcyIDAgNC44NDYtMi4xNDUgNC44NDYtNC43ODEgMC0yLjYzNy0yLjE3NC00Ljc4MS00Ljg0Ni00Ljc4MVY4LjVMMS42MTUgNC4yNSA3IDB2My4xODhjMy44NiAwIDcgMy4wOTggNyA2LjkwNlMxMC44NiAxNyA3IDE3cy03LTMuMDk4LTctNi45MDZoMi4xNTRjMCAyLjYzNiAyLjE3NCA0Ljc4MSA0Ljg0NiA0Ljc4MXoiIGZpbGw9IiMwMDAiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==",
                className: void 0,
                title: void 0
              },
              redo: {
                icon:
                  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTYuNTA0IDEzLjk3N2E0LjQ5NyA0LjQ5NyAwIDAgMS00LjQ5Mi00LjQ5MiA0LjQ5NyA0LjQ5NyAwIDAgMSA0LjQ5Mi00LjQ5M3YyLjk5NWw0Ljk5LTMuOTkzTDYuNTA0IDB2Mi45OTVhNi40OTYgNi40OTYgMCAwIDAtNi40ODggNi40OWMwIDMuNTc4IDIuOTEgNi40OSA2LjQ4OCA2LjQ5YTYuNDk2IDYuNDk2IDAgMCAwIDYuNDg3LTYuNDloLTEuOTk2YTQuNDk3IDQuNDk3IDAgMCAxLTQuNDkxIDQuNDkyeiIgZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+",
                className: void 0,
                title: void 0
              },
              title: void 0
            }
          },
          zo = {
            en: {
              "generic.add": "Add",
              "generic.cancel": "Cancel",
              "components.controls.blocktype.h1": "H1",
              "components.controls.blocktype.h2": "H2",
              "components.controls.blocktype.h3": "H3",
              "components.controls.blocktype.h4": "H4",
              "components.controls.blocktype.h5": "H5",
              "components.controls.blocktype.h6": "H6",
              "components.controls.blocktype.blockquote": "Blockquote",
              "components.controls.blocktype.code": "Code",
              "components.controls.blocktype.blocktype": "Block Type",
              "components.controls.blocktype.normal": "Normal",
              "components.controls.colorpicker.colorpicker": "Color Picker",
              "components.controls.colorpicker.text": "Text",
              "components.controls.colorpicker.background": "Highlight",
              "components.controls.embedded.embedded": "Embedded",
              "components.controls.embedded.embeddedlink": "Embedded Link",
              "components.controls.embedded.enterlink": "Enter link",
              "components.controls.emoji.emoji": "Emoji",
              "components.controls.fontfamily.fontfamily": "Font",
              "components.controls.fontsize.fontsize": "Font Size",
              "components.controls.history.history": "History",
              "components.controls.history.undo": "Undo",
              "components.controls.history.redo": "Redo",
              "components.controls.image.image": "Image",
              "components.controls.image.fileUpload": "File Upload",
              "components.controls.image.byURL": "URL",
              "components.controls.image.dropFileText":
                "Drop the file or click to upload",
              "components.controls.inline.bold": "Bold",
              "components.controls.inline.italic": "Italic",
              "components.controls.inline.underline": "Underline",
              "components.controls.inline.strikethrough": "Strikethrough",
              "components.controls.inline.monospace": "Monospace",
              "components.controls.inline.superscript": "Superscript",
              "components.controls.inline.subscript": "Subscript",
              "components.controls.link.linkTitle": "Link Title",
              "components.controls.link.linkTarget": "Link Target",
              "components.controls.link.linkTargetOption":
                "Open link in new window",
              "components.controls.link.link": "Link",
              "components.controls.link.unlink": "Unlink",
              "components.controls.list.list": "List",
              "components.controls.list.unordered": "Unordered",
              "components.controls.list.ordered": "Ordered",
              "components.controls.list.indent": "Indent",
              "components.controls.list.outdent": "Outdent",
              "components.controls.remove.remove": "Remove",
              "components.controls.textalign.textalign": "Text Align",
              "components.controls.textalign.left": "Left",
              "components.controls.textalign.center": "Center",
              "components.controls.textalign.right": "Right",
              "components.controls.textalign.justify": "Justify"
            },
            fr: {
              "generic.add": "Ok",
              "generic.cancel": "Annuler",
              "components.controls.blocktype.h1": "Titre 1",
              "components.controls.blocktype.h2": "Titre 2",
              "components.controls.blocktype.h3": "Titre 3",
              "components.controls.blocktype.h4": "Titre 4",
              "components.controls.blocktype.h5": "Titre 5",
              "components.controls.blocktype.h6": "Titre 6",
              "components.controls.blocktype.blockquote": "Citation",
              "components.controls.blocktype.code": "Code",
              "components.controls.blocktype.blocktype": "Type bloc",
              "components.controls.blocktype.normal": "Normal",
              "components.controls.colorpicker.colorpicker":
                "Palette de couleur",
              "components.controls.colorpicker.text": "Texte",
              "components.controls.colorpicker.background": "Fond",
              "components.controls.embedded.embedded": "Embedded",
              "components.controls.embedded.embeddedlink": "Lien iFrame",
              "components.controls.embedded.enterlink": "Entrer le lien",
              "components.controls.emoji.emoji": "Emoji",
              "components.controls.fontfamily.fontfamily": "Police",
              "components.controls.fontsize.fontsize": "Taille de police",
              "components.controls.history.history": "Historique",
              "components.controls.history.undo": "Précédent",
              "components.controls.history.redo": "Suivant",
              "components.controls.image.image": "Image",
              "components.controls.image.fileUpload": "Téléchargement",
              "components.controls.image.byURL": "URL",
              "components.controls.image.dropFileText":
                "Glisser une image ou cliquer pour télécharger",
              "components.controls.inline.bold": "Gras",
              "components.controls.inline.italic": "Italique",
              "components.controls.inline.underline": "Souligner",
              "components.controls.inline.strikethrough": "Barrer",
              "components.controls.inline.monospace": "Monospace",
              "components.controls.inline.superscript": "Exposant",
              "components.controls.inline.subscript": "Indice",
              "components.controls.link.linkTitle": "Titre du lien",
              "components.controls.link.linkTarget": "Cible du lien",
              "components.controls.link.linkTargetOption":
                "Ouvrir le lien dans une nouvelle fenêtre",
              "components.controls.link.link": "Lier",
              "components.controls.link.unlink": "Délier",
              "components.controls.list.list": "Liste",
              "components.controls.list.unordered": "Désordonnée",
              "components.controls.list.ordered": "Ordonnée",
              "components.controls.list.indent": "Augmenter le retrait",
              "components.controls.list.outdent": "Diminuer le retrait",
              "components.controls.remove.remove": "Supprimer",
              "components.controls.textalign.textalign": "Alignement du texte",
              "components.controls.textalign.left": "Gauche",
              "components.controls.textalign.center": "Centre",
              "components.controls.textalign.right": "Droite",
              "components.controls.textalign.justify": "Justifier"
            },
            zh: {
              "generic.add": "添加",
              "generic.cancel": "取消",
              "components.controls.blocktype.h1": "标题1",
              "components.controls.blocktype.h2": "标题2",
              "components.controls.blocktype.h3": "标题3",
              "components.controls.blocktype.h4": "标题4",
              "components.controls.blocktype.h5": "标题5",
              "components.controls.blocktype.h6": "标题6",
              "components.controls.blocktype.blockquote": "引用",
              "components.controls.blocktype.code": "源码",
              "components.controls.blocktype.blocktype": "样式",
              "components.controls.blocktype.normal": "正文",
              "components.controls.colorpicker.colorpicker": "选色器",
              "components.controls.colorpicker.text": "文字",
              "components.controls.colorpicker.background": "背景",
              "components.controls.embedded.embedded": "内嵌",
              "components.controls.embedded.embeddedlink": "内嵌网页",
              "components.controls.embedded.enterlink": "输入网页地址",
              "components.controls.emoji.emoji": "表情符号",
              "components.controls.fontfamily.fontfamily": "字体",
              "components.controls.fontsize.fontsize": "字号",
              "components.controls.history.history": "历史",
              "components.controls.history.undo": "撤销",
              "components.controls.history.redo": "恢复",
              "components.controls.image.image": "图片",
              "components.controls.image.fileUpload": "来自文件",
              "components.controls.image.byURL": "在线图片",
              "components.controls.image.dropFileText": "点击或者拖拽文件上传",
              "components.controls.inline.bold": "粗体",
              "components.controls.inline.italic": "斜体",
              "components.controls.inline.underline": "下划线",
              "components.controls.inline.strikethrough": "删除线",
              "components.controls.inline.monospace": "等宽字体",
              "components.controls.inline.superscript": "上标",
              "components.controls.inline.subscript": "下标",
              "components.controls.link.linkTitle": "超链接",
              "components.controls.link.linkTarget": "输入链接地址",
              "components.controls.link.linkTargetOption": "在新窗口中打开链接",
              "components.controls.link.link": "链接",
              "components.controls.link.unlink": "删除链接",
              "components.controls.list.list": "列表",
              "components.controls.list.unordered": "项目符号",
              "components.controls.list.ordered": "编号",
              "components.controls.list.indent": "增加缩进量",
              "components.controls.list.outdent": "减少缩进量",
              "components.controls.remove.remove": "清除格式",
              "components.controls.textalign.textalign": "文本对齐",
              "components.controls.textalign.left": "文本左对齐",
              "components.controls.textalign.center": "居中",
              "components.controls.textalign.right": "文本右对齐",
              "components.controls.textalign.justify": "两端对齐"
            },
            ru: {
              "generic.add": "Добавить",
              "generic.cancel": "Отменить",
              "components.controls.blocktype.h1": "Заголовок 1",
              "components.controls.blocktype.h2": "Заголовок 2",
              "components.controls.blocktype.h3": "Заголовок 3",
              "components.controls.blocktype.h4": "Заголовок 4",
              "components.controls.blocktype.h5": "Заголовок 5",
              "components.controls.blocktype.h6": "Заголовок 6",
              "components.controls.blocktype.blockquote": "Цитата",
              "components.controls.blocktype.code": "Код",
              "components.controls.blocktype.blocktype": "Форматирование",
              "components.controls.blocktype.normal": "Обычный",
              "components.controls.colorpicker.colorpicker": "Выбор цвета",
              "components.controls.colorpicker.text": "Текст",
              "components.controls.colorpicker.background": "Фон",
              "components.controls.embedded.embedded": "Встраивание",
              "components.controls.embedded.embeddedlink": "Ссылка в iFrame",
              "components.controls.embedded.enterlink": "Вставьте ссылку",
              "components.controls.emoji.emoji": "Эмодзи",
              "components.controls.fontfamily.fontfamily": "Шрифт",
              "components.controls.fontsize.fontsize": "Размер шрифта",
              "components.controls.history.history": "История",
              "components.controls.history.undo": "Отменить",
              "components.controls.history.redo": "Вернуть",
              "components.controls.image.image": "Изображение",
              "components.controls.image.fileUpload": "Файлы",
              "components.controls.image.byURL": "URL",
              "components.controls.image.dropFileText":
                "Переместите в эту область файлы или кликните для загрузки",
              "components.controls.inline.bold": "Жирный",
              "components.controls.inline.italic": "Курсив",
              "components.controls.inline.underline": "Подчеркивание",
              "components.controls.inline.strikethrough": "Зачеркивание",
              "components.controls.inline.monospace": "Monospace",
              "components.controls.inline.superscript": "Верхний индекс",
              "components.controls.inline.subscript": "Нижний индекс",
              "components.controls.link.linkTitle": "Текст",
              "components.controls.link.linkTarget": "Адрес ссылки",
              "components.controls.link.linkTargetOption":
                "Открывать в новом окне",
              "components.controls.link.link": "Ссылка",
              "components.controls.link.unlink": "Убрать ссылку",
              "components.controls.list.list": "Список",
              "components.controls.list.unordered": "Неупорядоченный",
              "components.controls.list.ordered": "Упорядоченный",
              "components.controls.list.indent": "Отступ",
              "components.controls.list.outdent": "Выступ",
              "components.controls.remove.remove": "Удалить",
              "components.controls.textalign.textalign": "Выравнивание текста",
              "components.controls.textalign.left": "Слева",
              "components.controls.textalign.center": "По центру",
              "components.controls.textalign.right": "Справа",
              "components.controls.textalign.justify": "Выравнить"
            },
            pt: {
              "generic.add": "Ok",
              "generic.cancel": "Cancelar",
              "components.controls.blocktype.h1": "Título 1",
              "components.controls.blocktype.h2": "Título 2",
              "components.controls.blocktype.h3": "Título 3",
              "components.controls.blocktype.h4": "Título 4",
              "components.controls.blocktype.h5": "Título 5",
              "components.controls.blocktype.h6": "Título 6",
              "components.controls.blocktype.blockquote": "Citação",
              "components.controls.blocktype.code": "Code",
              "components.controls.blocktype.blocktype": "Estilo",
              "components.controls.blocktype.normal": "Normal",
              "components.controls.colorpicker.colorpicker": "Paleta de cores",
              "components.controls.colorpicker.text": "Texto",
              "components.controls.colorpicker.background": "Fundo",
              "components.controls.embedded.embedded": "Embarcado",
              "components.controls.embedded.embeddedlink": "Link embarcado",
              "components.controls.embedded.enterlink": "Coloque o link",
              "components.controls.emoji.emoji": "Emoji",
              "components.controls.fontfamily.fontfamily": "Fonte",
              "components.controls.fontsize.fontsize": "Tamanho da Fonte",
              "components.controls.history.history": "Histórico",
              "components.controls.history.undo": "Desfazer",
              "components.controls.history.redo": "Refazer",
              "components.controls.image.image": "Imagem",
              "components.controls.image.fileUpload": "Carregar arquivo",
              "components.controls.image.byURL": "URL",
              "components.controls.image.dropFileText":
                "Arraste uma imagem aqui ou clique para carregar",
              "components.controls.inline.bold": "Negrito",
              "components.controls.inline.italic": "Itálico",
              "components.controls.inline.underline": "Sublinhado",
              "components.controls.inline.strikethrough": "Strikethrough",
              "components.controls.inline.monospace": "Monospace",
              "components.controls.inline.superscript": "Sobrescrito",
              "components.controls.inline.subscript": "Subscrito",
              "components.controls.link.linkTitle": "Título do link",
              "components.controls.link.linkTarget": "Alvo do link",
              "components.controls.link.linkTargetOption":
                "Abrir link em outra janela",
              "components.controls.link.link": "Adicionar Link",
              "components.controls.link.unlink": "Remover link",
              "components.controls.list.list": "Lista",
              "components.controls.list.unordered": "Sem ordenção",
              "components.controls.list.ordered": "Ordenada",
              "components.controls.list.indent": "Aumentar recuo",
              "components.controls.list.outdent": "Diminuir recuo",
              "components.controls.remove.remove": "Remover",
              "components.controls.textalign.textalign": "Alinhamento do texto",
              "components.controls.textalign.left": "À Esquerda",
              "components.controls.textalign.center": "Centralizado",
              "components.controls.textalign.right": "À Direita",
              "components.controls.textalign.justify": "Justificado"
            },
            ko: {
              "generic.add": "입력",
              "generic.cancel": "취소",
              "components.controls.blocktype.h1": "제목1",
              "components.controls.blocktype.h2": "제목2",
              "components.controls.blocktype.h3": "제목3",
              "components.controls.blocktype.h4": "제목4",
              "components.controls.blocktype.h5": "제목5",
              "components.controls.blocktype.h6": "제목6",
              "components.controls.blocktype.blockquote": "인용",
              "components.controls.blocktype.code": "Code",
              "components.controls.blocktype.blocktype": "블록",
              "components.controls.blocktype.normal": "표준",
              "components.controls.colorpicker.colorpicker": "색상 선택",
              "components.controls.colorpicker.text": "글꼴색",
              "components.controls.colorpicker.background": "배경색",
              "components.controls.embedded.embedded": "임베드",
              "components.controls.embedded.embeddedlink": "임베드 링크",
              "components.controls.embedded.enterlink": "주소를 입력하세요",
              "components.controls.emoji.emoji": "이모지",
              "components.controls.fontfamily.fontfamily": "글꼴",
              "components.controls.fontsize.fontsize": "글꼴 크기",
              "components.controls.history.history": "히스토리",
              "components.controls.history.undo": "실행 취소",
              "components.controls.history.redo": "다시 실행",
              "components.controls.image.image": "이미지",
              "components.controls.image.fileUpload": "파일 업로드",
              "components.controls.image.byURL": "주소",
              "components.controls.image.dropFileText":
                "클릭하거나 파일을 드롭하여 업로드하세요",
              "components.controls.inline.bold": "굵게",
              "components.controls.inline.italic": "기울임꼴",
              "components.controls.inline.underline": "밑줄",
              "components.controls.inline.strikethrough": "취소선",
              "components.controls.inline.monospace": "고정 너비",
              "components.controls.inline.superscript": "위 첨자",
              "components.controls.inline.subscript": "아래 첨자",
              "components.controls.link.linkTitle": "링크 제목",
              "components.controls.link.linkTarget": "링크 타겟",
              "components.controls.link.linkTargetOption": "새창으로 열기",
              "components.controls.link.link": "링크",
              "components.controls.link.unlink": "링크 제거",
              "components.controls.list.list": "리스트",
              "components.controls.list.unordered": "일반 리스트",
              "components.controls.list.ordered": "순서 리스트",
              "components.controls.list.indent": "들여쓰기",
              "components.controls.list.outdent": "내어쓰기",
              "components.controls.remove.remove": "삭제",
              "components.controls.textalign.textalign": "텍스트 정렬",
              "components.controls.textalign.left": "왼쪽",
              "components.controls.textalign.center": "중앙",
              "components.controls.textalign.right": "오른쪽",
              "components.controls.textalign.justify": "양쪽"
            },
            it: {
              "generic.add": "Aggiungi",
              "generic.cancel": "Annulla",
              "components.controls.blocktype.h1": "H1",
              "components.controls.blocktype.h2": "H2",
              "components.controls.blocktype.h3": "H3",
              "components.controls.blocktype.h4": "H4",
              "components.controls.blocktype.h5": "H5",
              "components.controls.blocktype.h6": "H6",
              "components.controls.blocktype.blockquote": "Citazione",
              "components.controls.blocktype.code": "Codice",
              "components.controls.blocktype.blocktype": "Stili",
              "components.controls.blocktype.normal": "Normale",
              "components.controls.colorpicker.colorpicker": "Colore testo",
              "components.controls.colorpicker.text": "Testo",
              "components.controls.colorpicker.background": "Evidenziazione",
              "components.controls.embedded.embedded": "Incorpora",
              "components.controls.embedded.embeddedlink": "Incorpora link",
              "components.controls.embedded.enterlink": "Inserisci link",
              "components.controls.emoji.emoji": "Emoji",
              "components.controls.fontfamily.fontfamily": "Carattere",
              "components.controls.fontsize.fontsize": "Dimensione carattere",
              "components.controls.history.history": "Modifiche",
              "components.controls.history.undo": "Annulla",
              "components.controls.history.redo": "Ripristina",
              "components.controls.image.image": "Immagine",
              "components.controls.image.fileUpload": "Carica immagine",
              "components.controls.image.byURL": "URL",
              "components.controls.image.dropFileText":
                "Trascina il file o clicca per caricare",
              "components.controls.inline.bold": "Grassetto",
              "components.controls.inline.italic": "Corsivo",
              "components.controls.inline.underline": "Sottolineato",
              "components.controls.inline.strikethrough": "Barrato",
              "components.controls.inline.monospace": "Monospace",
              "components.controls.inline.superscript": "Apice",
              "components.controls.inline.subscript": "Pedice",
              "components.controls.link.linkTitle": "Testo",
              "components.controls.link.linkTarget": "Link",
              "components.controls.link.linkTargetOption":
                "Apri link in una nuova finestra",
              "components.controls.link.link": "Inserisci link",
              "components.controls.link.unlink": "Rimuovi link",
              "components.controls.list.list": "Lista",
              "components.controls.list.unordered": "Elenco puntato",
              "components.controls.list.ordered": "Elenco numerato",
              "components.controls.list.indent": "Indent",
              "components.controls.list.outdent": "Outdent",
              "components.controls.remove.remove": "Rimuovi formattazione",
              "components.controls.textalign.textalign":
                "Allineamento del testo",
              "components.controls.textalign.left": "Allinea a sinistra",
              "components.controls.textalign.center": "Allinea al centro",
              "components.controls.textalign.right": "Allinea a destra",
              "components.controls.textalign.justify": "Giustifica"
            },
            nl: {
              "generic.add": "Toevoegen",
              "generic.cancel": "Annuleren",
              "components.controls.blocktype.h1": "H1",
              "components.controls.blocktype.h2": "H2",
              "components.controls.blocktype.h3": "H3",
              "components.controls.blocktype.h4": "H4",
              "components.controls.blocktype.h5": "H5",
              "components.controls.blocktype.h6": "H6",
              "components.controls.blocktype.blockquote": "Blockquote",
              "components.controls.blocktype.code": "Code",
              "components.controls.blocktype.blocktype": "Blocktype",
              "components.controls.blocktype.normal": "Normaal",
              "components.controls.colorpicker.colorpicker": "Kleurkiezer",
              "components.controls.colorpicker.text": "Tekst",
              "components.controls.colorpicker.background": "Achtergrond",
              "components.controls.embedded.embedded": "Ingevoegd",
              "components.controls.embedded.embeddedlink": "Ingevoegde link",
              "components.controls.embedded.enterlink": "Voeg link toe",
              "components.controls.emoji.emoji": "Emoji",
              "components.controls.fontfamily.fontfamily": "Lettertype",
              "components.controls.fontsize.fontsize": "Lettergrootte",
              "components.controls.history.history": "Geschiedenis",
              "components.controls.history.undo": "Ongedaan maken",
              "components.controls.history.redo": "Opnieuw",
              "components.controls.image.image": "Afbeelding",
              "components.controls.image.fileUpload": "Bestand uploaden",
              "components.controls.image.byURL": "URL",
              "components.controls.image.dropFileText":
                "Drop het bestand hier of klik om te uploaden",
              "components.controls.inline.bold": "Dikgedrukt",
              "components.controls.inline.italic": "Schuingedrukt",
              "components.controls.inline.underline": "Onderstrepen",
              "components.controls.inline.strikethrough": "Doorstrepen",
              "components.controls.inline.monospace": "Monospace",
              "components.controls.inline.superscript": "Superscript",
              "components.controls.inline.subscript": "Subscript",
              "components.controls.link.linkTitle": "Linktitel",
              "components.controls.link.linkTarget": "Link bestemming",
              "components.controls.link.linkTargetOption":
                "Open link in een nieuw venster",
              "components.controls.link.link": "Link",
              "components.controls.link.unlink": "Unlink",
              "components.controls.list.list": "Lijst",
              "components.controls.list.unordered": "Ongeordend",
              "components.controls.list.ordered": "Geordend",
              "components.controls.list.indent": "Inspringen",
              "components.controls.list.outdent": "Inspringen verkleinen",
              "components.controls.remove.remove": "Verwijderen",
              "components.controls.textalign.textalign": "Tekst uitlijnen",
              "components.controls.textalign.left": "Links",
              "components.controls.textalign.center": "Gecentreerd",
              "components.controls.textalign.right": "Rechts",
              "components.controls.textalign.justify": "Uitgelijnd"
            },
            de: {
              "generic.add": "Hinzufügen",
              "generic.cancel": "Abbrechen",
              "components.controls.blocktype.h1": "Überschrift 1",
              "components.controls.blocktype.h2": "Überschrift 2",
              "components.controls.blocktype.h3": "Überschrift 3",
              "components.controls.blocktype.h4": "Überschrift 4",
              "components.controls.blocktype.h5": "Überschrift 5",
              "components.controls.blocktype.h6": "Überschrift 6",
              "components.controls.blocktype.blockquote": "Zitat",
              "components.controls.blocktype.code": "Quellcode",
              "components.controls.blocktype.blocktype": "Blocktyp",
              "components.controls.blocktype.normal": "Normal",
              "components.controls.colorpicker.colorpicker": "Farbauswahl",
              "components.controls.colorpicker.text": "Text",
              "components.controls.colorpicker.background": "Hintergrund",
              "components.controls.embedded.embedded": "Eingebettet",
              "components.controls.embedded.embeddedlink": "Eingebetteter Link",
              "components.controls.embedded.enterlink": "Link eingeben",
              "components.controls.emoji.emoji": "Emoji",
              "components.controls.fontfamily.fontfamily": "Schriftart",
              "components.controls.fontsize.fontsize": "Schriftgröße",
              "components.controls.history.history": "Historie",
              "components.controls.history.undo": "Zurücknehmen",
              "components.controls.history.redo": "Wiederholen",
              "components.controls.image.image": "Bild",
              "components.controls.image.fileUpload": "Datei-Upload",
              "components.controls.image.byURL": "URL",
              "components.controls.image.dropFileText":
                "Dateien ziehen und ablegen, oder klicken zum Hochladen",
              "components.controls.inline.bold": "Fett",
              "components.controls.inline.italic": "Kursiv",
              "components.controls.inline.underline": "Unterstreichen",
              "components.controls.inline.strikethrough": "Durchstreichen",
              "components.controls.inline.monospace": "Monospace",
              "components.controls.inline.superscript": "Hochgestellt",
              "components.controls.inline.subscript": "Tiefgestellt",
              "components.controls.link.linkTitle": "Link-Titel",
              "components.controls.link.linkTarget": "Link-Ziel",
              "components.controls.link.linkTargetOption":
                "Link in neuem Fenster öffnen",
              "components.controls.link.link": "Link",
              "components.controls.link.unlink": "Aufheben",
              "components.controls.list.list": "Liste",
              "components.controls.list.unordered": "Aufzählung",
              "components.controls.list.ordered": "Nummerierte Liste",
              "components.controls.list.indent": "Einzug vergrößern",
              "components.controls.list.outdent": "Einzug reduzieren",
              "components.controls.remove.remove": "Entfernen",
              "components.controls.textalign.textalign": "Textausrichtung",
              "components.controls.textalign.left": "Linksbündig",
              "components.controls.textalign.center": "Zentrieren",
              "components.controls.textalign.right": "Rechtsbündig",
              "components.controls.textalign.justify": "Blocksatz"
            },
            da: {
              "generic.add": "Tilføj",
              "generic.cancel": "Annuller",
              "components.controls.blocktype.h1": "Overskrift 1",
              "components.controls.blocktype.h2": "Overskrift 2",
              "components.controls.blocktype.h3": "Overskrift 3",
              "components.controls.blocktype.h4": "Overskrift 4",
              "components.controls.blocktype.h5": "Overskrift 5",
              "components.controls.blocktype.h6": "Overskrift 6",
              "components.controls.blocktype.blockquote": "Blokcitat",
              "components.controls.blocktype.code": "Kode",
              "components.controls.blocktype.blocktype": "Blok Type",
              "components.controls.blocktype.normal": "Normal",
              "components.controls.colorpicker.colorpicker": "Farver",
              "components.controls.colorpicker.text": "Tekst",
              "components.controls.colorpicker.background": "Baggrund",
              "components.controls.embedded.embedded": "Indlejre",
              "components.controls.embedded.embeddedlink": "Indlejre Link",
              "components.controls.embedded.enterlink": "Indtast link",
              "components.controls.emoji.emoji": "Emoji",
              "components.controls.fontfamily.fontfamily": "Fonttype",
              "components.controls.fontsize.fontsize": "Fontstørrelser",
              "components.controls.history.history": "Historie",
              "components.controls.history.undo": "Fortryd",
              "components.controls.history.redo": "Gendan",
              "components.controls.image.image": "Billede",
              "components.controls.image.fileUpload": "Filoverførsel",
              "components.controls.image.byURL": "URL",
              "components.controls.image.dropFileText":
                "Drop filen eller klik for at uploade",
              "components.controls.inline.bold": "Fed",
              "components.controls.inline.italic": "Kursiv",
              "components.controls.inline.underline": "Understrege",
              "components.controls.inline.strikethrough": "Gennemstreget",
              "components.controls.inline.monospace": "Monospace",
              "components.controls.inline.superscript": "Hævet",
              "components.controls.inline.subscript": "Sænket",
              "components.controls.link.linkTitle": "Link Titel",
              "components.controls.link.linkTarget": "Link Mål",
              "components.controls.link.linkTargetOption":
                "Åbn link i nyt vindue",
              "components.controls.link.link": "Link",
              "components.controls.link.unlink": "Fjern link",
              "components.controls.list.list": "Liste",
              "components.controls.list.unordered": "Uordnet",
              "components.controls.list.ordered": "Ordnet",
              "components.controls.list.indent": "Indrykning",
              "components.controls.list.outdent": "Udrykning",
              "components.controls.remove.remove": "Fjern",
              "components.controls.textalign.textalign": "Tekstjustering",
              "components.controls.textalign.left": "Venstre",
              "components.controls.textalign.center": "Center",
              "components.controls.textalign.right": "Højre",
              "components.controls.textalign.justify": "Margener"
            },
            zh_tw: {
              "generic.add": "新增",
              "generic.cancel": "取消",
              "components.controls.blocktype.h1": "標題1",
              "components.controls.blocktype.h2": "標題2",
              "components.controls.blocktype.h3": "標題3",
              "components.controls.blocktype.h4": "標題4",
              "components.controls.blocktype.h5": "標題5",
              "components.controls.blocktype.h6": "標題6",
              "components.controls.blocktype.blockquote": "引用",
              "components.controls.blocktype.code": "程式碼",
              "components.controls.blocktype.blocktype": "樣式",
              "components.controls.blocktype.normal": "正文",
              "components.controls.colorpicker.colorpicker": "選色器",
              "components.controls.colorpicker.text": "文字",
              "components.controls.colorpicker.background": "背景",
              "components.controls.embedded.embedded": "內嵌",
              "components.controls.embedded.embeddedlink": "內嵌網頁",
              "components.controls.embedded.enterlink": "輸入網頁地址",
              "components.controls.emoji.emoji": "表情符號",
              "components.controls.fontfamily.fontfamily": "字體",
              "components.controls.fontsize.fontsize": "字體大小",
              "components.controls.history.history": "歷史紀錄",
              "components.controls.history.undo": "復原",
              "components.controls.history.redo": "重做",
              "components.controls.image.image": "圖片",
              "components.controls.image.fileUpload": "檔案上傳",
              "components.controls.image.byURL": "網址",
              "components.controls.image.dropFileText": "點擊或拖曳檔案上傳",
              "components.controls.inline.bold": "粗體",
              "components.controls.inline.italic": "斜體",
              "components.controls.inline.underline": "底線",
              "components.controls.inline.strikethrough": "刪除線",
              "components.controls.inline.monospace": "等寬字體",
              "components.controls.inline.superscript": "上標",
              "components.controls.inline.subscript": "下標",
              "components.controls.link.linkTitle": "超連結",
              "components.controls.link.linkTarget": "輸入連結位址",
              "components.controls.link.linkTargetOption": "在新視窗打開連結",
              "components.controls.link.link": "連結",
              "components.controls.link.unlink": "刪除連結",
              "components.controls.list.list": "列表",
              "components.controls.list.unordered": "項目符號",
              "components.controls.list.ordered": "編號",
              "components.controls.list.indent": "增加縮排",
              "components.controls.list.outdent": "減少縮排",
              "components.controls.remove.remove": "清除格式",
              "components.controls.textalign.textalign": "文字對齊",
              "components.controls.textalign.left": "文字向左對齊",
              "components.controls.textalign.center": "文字置中",
              "components.controls.textalign.right": "文字向右對齊",
              "components.controls.textalign.justify": "兩端對齊"
            },
            pl: {
              "generic.add": "Dodaj",
              "generic.cancel": "Anuluj",
              "components.controls.blocktype.h1": "Nagłówek 1",
              "components.controls.blocktype.h2": "Nagłówek 2",
              "components.controls.blocktype.h3": "Nagłówek 3",
              "components.controls.blocktype.h4": "Nagłówek 4",
              "components.controls.blocktype.h5": "Nagłówek 5",
              "components.controls.blocktype.h6": "Nagłówek 6",
              "components.controls.blocktype.blockquote": "Cytat",
              "components.controls.blocktype.code": "Kod",
              "components.controls.blocktype.blocktype": "Format",
              "components.controls.blocktype.normal": "Normalny",
              "components.controls.colorpicker.colorpicker": "Kolor",
              "components.controls.colorpicker.text": "Tekst",
              "components.controls.colorpicker.background": "Tło",
              "components.controls.embedded.embedded": "Osadź",
              "components.controls.embedded.embeddedlink": "Osadź odnośnik",
              "components.controls.embedded.enterlink": "Wprowadź odnośnik",
              "components.controls.emoji.emoji": "Emoji",
              "components.controls.fontfamily.fontfamily": "Krój czcionki",
              "components.controls.fontsize.fontsize": "Rozmiar czcionki",
              "components.controls.history.history": "Historia",
              "components.controls.history.undo": "Cofnij",
              "components.controls.history.redo": "Ponów",
              "components.controls.image.image": "Obrazek",
              "components.controls.image.fileUpload": "Prześlij plik",
              "components.controls.image.byURL": "URL",
              "components.controls.image.dropFileText":
                "Upuść plik lub kliknij, aby przesłać",
              "components.controls.inline.bold": "Pogrubienie",
              "components.controls.inline.italic": "Kursywa",
              "components.controls.inline.underline": "Podkreślenie",
              "components.controls.inline.strikethrough": "Przekreślenie",
              "components.controls.inline.monospace": "Monospace",
              "components.controls.inline.superscript": "Indeks górny",
              "components.controls.inline.subscript": "Indeks dolny",
              "components.controls.link.linkTitle": "Tytuł odnośnika",
              "components.controls.link.linkTarget": "Adres odnośnika",
              "components.controls.link.linkTargetOption":
                "Otwórz odnośnik w nowej karcie",
              "components.controls.link.link": "Wstaw odnośnik",
              "components.controls.link.unlink": "Usuń odnośnik",
              "components.controls.list.list": "Lista",
              "components.controls.list.unordered": "Lista nieuporządkowana",
              "components.controls.list.ordered": "Lista uporządkowana",
              "components.controls.list.indent": "Zwiększ wcięcie",
              "components.controls.list.outdent": "Zmniejsz wcięcie",
              "components.controls.remove.remove": "Usuń",
              "components.controls.textalign.textalign": "Wyrównaj tekst",
              "components.controls.textalign.left": "Do lewej",
              "components.controls.textalign.center": "Do środka",
              "components.controls.textalign.right": "Do prawej",
              "components.controls.textalign.justify": "Wyjustuj"
            },
            es: {
              "generic.add": "Añadir",
              "generic.cancel": "Cancelar",
              "components.controls.blocktype.h1": "H1",
              "components.controls.blocktype.h2": "H2",
              "components.controls.blocktype.h3": "H3",
              "components.controls.blocktype.h4": "H4",
              "components.controls.blocktype.h5": "H5",
              "components.controls.blocktype.h6": "H6",
              "components.controls.blocktype.blockquote": "Blockquote",
              "components.controls.blocktype.code": "Código",
              "components.controls.blocktype.blocktype": "Tipo de bloque",
              "components.controls.blocktype.normal": "Normal",
              "components.controls.colorpicker.colorpicker":
                "Seleccionar color",
              "components.controls.colorpicker.text": "Texto",
              "components.controls.colorpicker.background": "Subrayado",
              "components.controls.embedded.embedded": "Adjuntar",
              "components.controls.embedded.embeddedlink": "Adjuntar Link",
              "components.controls.embedded.enterlink": "Introducir link",
              "components.controls.emoji.emoji": "Emoji",
              "components.controls.fontfamily.fontfamily": "Fuente",
              "components.controls.fontsize.fontsize": "Tamaño de fuente",
              "components.controls.history.history": "Histórico",
              "components.controls.history.undo": "Deshacer",
              "components.controls.history.redo": "Rehacer",
              "components.controls.image.image": "Imagen",
              "components.controls.image.fileUpload": "Subir archivo",
              "components.controls.image.byURL": "URL",
              "components.controls.image.dropFileText":
                "Arrastra el archivo o haz click para subirlo",
              "components.controls.inline.bold": "Negrita",
              "components.controls.inline.italic": "Cursiva",
              "components.controls.inline.underline": "Subrayado",
              "components.controls.inline.strikethrough": "Tachado",
              "components.controls.inline.monospace": "Monospace",
              "components.controls.inline.superscript": "Sobreíndice",
              "components.controls.inline.subscript": "Subíndice",
              "components.controls.link.linkTitle": "Título del enlace",
              "components.controls.link.linkTarget": "Objetivo del enlace",
              "components.controls.link.linkTargetOption":
                "Abrir en nueva ventana",
              "components.controls.link.link": "Enlazar",
              "components.controls.link.unlink": "Desenlazar",
              "components.controls.list.list": "Lista",
              "components.controls.list.unordered": "Desordenada",
              "components.controls.list.ordered": "Ordenada",
              "components.controls.list.indent": "Indentada",
              "components.controls.list.outdent": "Dentada",
              "components.controls.remove.remove": "Eliminar",
              "components.controls.textalign.textalign": "Alineación del texto",
              "components.controls.textalign.left": "Izquierda",
              "components.controls.textalign.center": "Centrado",
              "components.controls.textalign.right": "Derecha",
              "components.controls.textalign.justify": "Justificado"
            },
            ja: {
              "generic.add": "追加",
              "generic.cancel": "キャンセル",
              "components.controls.blocktype.h1": "見出し1",
              "components.controls.blocktype.h2": "見出し2",
              "components.controls.blocktype.h3": "見出し3",
              "components.controls.blocktype.h4": "見出し4",
              "components.controls.blocktype.h5": "見出し5",
              "components.controls.blocktype.h6": "見出し6",
              "components.controls.blocktype.blockquote": "引用",
              "components.controls.blocktype.code": "コード",
              "components.controls.blocktype.blocktype": "スタイル",
              "components.controls.blocktype.normal": "標準テキスト",
              "components.controls.colorpicker.colorpicker": "テキストの色",
              "components.controls.colorpicker.text": "テキスト",
              "components.controls.colorpicker.background": "ハイライト",
              "components.controls.embedded.embedded": "埋め込み",
              "components.controls.embedded.embeddedlink": "埋め込みリンク",
              "components.controls.embedded.enterlink":
                "リンクを入力してください",
              "components.controls.emoji.emoji": "絵文字",
              "components.controls.fontfamily.fontfamily": "フォント",
              "components.controls.fontsize.fontsize": "フォントサイズ",
              "components.controls.history.history": "履歴",
              "components.controls.history.undo": "元に戻す",
              "components.controls.history.redo": "やり直し",
              "components.controls.image.image": "画像",
              "components.controls.image.fileUpload": "ファイルをアップロード",
              "components.controls.image.byURL": "URL",
              "components.controls.image.dropFileText":
                "ここに画像をドラッグするか、クリックしてください",
              "components.controls.inline.bold": "太字",
              "components.controls.inline.italic": "斜体",
              "components.controls.inline.underline": "下線",
              "components.controls.inline.strikethrough": "取り消し線",
              "components.controls.inline.monospace": "等幅フォント",
              "components.controls.inline.superscript": "上付き文字",
              "components.controls.inline.subscript": "下付き文字",
              "components.controls.link.linkTitle": "リンクタイトル",
              "components.controls.link.linkTarget": "リンク対象",
              "components.controls.link.linkTargetOption":
                "新しいウィンドウで開く",
              "components.controls.link.link": "リンク",
              "components.controls.link.unlink": "リンクを解除",
              "components.controls.list.list": "リスト",
              "components.controls.list.unordered": "箇条書き",
              "components.controls.list.ordered": "番号付き",
              "components.controls.list.indent": "インデント増",
              "components.controls.list.outdent": "インデント減",
              "components.controls.remove.remove": "書式をクリア",
              "components.controls.textalign.textalign": "整列",
              "components.controls.textalign.left": "左揃え",
              "components.controls.textalign.center": "中央揃え",
              "components.controls.textalign.right": "右揃え",
              "components.controls.textalign.justify": "両端揃え"
            }
          };
        n(38), n(39);
        function _o(e) {
          return (_o =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function(e) {
                  return typeof e;
                }
              : function(e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                })(e);
        }
        function Po() {
          return (Po =
            Object.assign ||
            function(e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n)
                  Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
              }
              return e;
            }).apply(this, arguments);
        }
        function Uo(t, e) {
          var n = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(t);
            e &&
              (o = o.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })),
              n.push.apply(n, o);
          }
          return n;
        }
        function Yo(t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2
              ? Uo(Object(n), !0).forEach(function(e) {
                  Fo(t, e, n[e]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : Uo(Object(n)).forEach(function(e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e)
                  );
                });
          }
          return t;
        }
        function Fo(e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
                })
              : (e[t] = n),
            e
          );
        }
        function Ro(e) {
          return (
            (function(e) {
              if (Array.isArray(e)) {
                for (var t = 0, n = new Array(e.length); t < e.length; t++)
                  n[t] = e[t];
                return n;
              }
            })(e) ||
            (function(e) {
              if (
                Symbol.iterator in Object(e) ||
                "[object Arguments]" === Object.prototype.toString.call(e)
              )
                return Array.from(e);
            })(e) ||
            (function() {
              throw new TypeError(
                "Invalid attempt to spread non-iterable instance"
              );
            })()
          );
        }
        function Bo(e, t) {
          for (var n = 0; n < t.length; n++) {
            var o = t[n];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              "value" in o && (o.writable = !0),
              Object.defineProperty(e, o.key, o);
          }
        }
        function Qo(e, t) {
          return !t || ("object" !== _o(t) && "function" != typeof t)
            ? (function(e) {
                if (void 0 !== e) return e;
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              })(e)
            : t;
        }
        function Ho(e) {
          return (Ho = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              })(e);
        }
        function Zo(e, t) {
          return (Zo =
            Object.setPrototypeOf ||
            function(e, t) {
              return (e.__proto__ = t), e;
            })(e, t);
        }
        var Wo = (function() {
          function r(e) {
            var a;
            !(function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, r),
              ((a = Qo(this, Ho(r).call(this, e))).onEditorBlur = function() {
                a.setState({ editorFocused: !1 });
              }),
              (a.onEditorFocus = function(e) {
                var t = a.props.onFocus;
                a.setState({ editorFocused: !0 });
                var n = a.focusHandler.isEditorFocused();
                t && n && t(e);
              }),
              (a.onEditorMouseDown = function() {
                a.focusHandler.onEditorMouseDown();
              }),
              (a.keyBindingFn = function(e) {
                if ("Tab" !== e.key)
                  return (
                    ("ArrowUp" !== e.key && "ArrowDown" !== e.key) ||
                      (s() && e.preventDefault()),
                    Object(E.getDefaultKeyBinding)(e)
                  );
                var t = a.props.onTab;
                if (!t || !t(e)) {
                  var n = Object(C.changeDepth)(
                    a.state.editorState,
                    e.shiftKey ? -1 : 1,
                    4
                  );
                  n &&
                    n !== a.state.editorState &&
                    (a.onChange(n), e.preventDefault());
                }
                return null;
              }),
              (a.onToolbarFocus = function(e) {
                var t = a.props.onFocus;
                t && a.focusHandler.isToolbarFocused() && t(e);
              }),
              (a.onWrapperBlur = function(e) {
                var t = a.props.onBlur;
                t && a.focusHandler.isEditorBlur(e) && t(e, a.getEditorState());
              }),
              (a.onChange = function(e) {
                var t = a.props,
                  n = t.readOnly,
                  o = t.onEditorStateChange;
                n ||
                  ("atomic" === Object(C.getSelectedBlocksType)(e) &&
                    e.getSelection().isCollapsed) ||
                  (o && o(e, a.props.wrapperId),
                  p(a.props, "editorState")
                    ? a.afterChange(e)
                    : a.setState({ editorState: e }, a.afterChange(e)));
              }),
              (a.setWrapperReference = function(e) {
                a.wrapper = e;
              }),
              (a.setEditorReference = function(e) {
                a.props.editorRef && a.props.editorRef(e), (a.editor = e);
              }),
              (a.getCompositeDecorator = function(e) {
                var t = [].concat(Ro(a.props.customDecorators), [
                  {
                    strategy: uo,
                    component: po({
                      showOpenOptionOnHover: e.link.showOpenOptionOnHover
                    })
                  }
                ]);
                return (
                  a.props.mention &&
                    t.push.apply(
                      t,
                      Ro(
                        So(
                          Yo({}, a.props.mention, {
                            onChange: a.onChange,
                            getEditorState: a.getEditorState,
                            getSuggestions: a.getSuggestions,
                            getWrapperRef: a.getWrapperRef,
                            modalHandler: a.modalHandler
                          })
                        )
                      )
                    ),
                  a.props.hashtag && t.push(Lo(a.props.hashtag)),
                  new E.CompositeDecorator(t)
                );
              }),
              (a.getWrapperRef = function() {
                return a.wrapper;
              }),
              (a.getEditorState = function() {
                return a.state.editorState;
              }),
              (a.getSuggestions = function() {
                return a.props.mention && a.props.mention.suggestions;
              }),
              (a.afterChange = function(o) {
                setTimeout(function() {
                  var e = a.props,
                    t = e.onChange,
                    n = e.onContentStateChange;
                  t && t(Object(E.convertToRaw)(o.getCurrentContent())),
                    n && n(Object(E.convertToRaw)(o.getCurrentContent()));
                });
              }),
              (a.isReadOnly = function() {
                return a.props.readOnly;
              }),
              (a.isImageAlignmentEnabled = function() {
                return a.state.toolbar.image.alignmentEnabled;
              }),
              (a.createEditorState = function(e) {
                var t;
                if (p(a.props, "editorState"))
                  a.props.editorState &&
                    (t = E.EditorState.set(a.props.editorState, {
                      decorator: e
                    }));
                else if (p(a.props, "defaultEditorState"))
                  a.props.defaultEditorState &&
                    (t = E.EditorState.set(a.props.defaultEditorState, {
                      decorator: e
                    }));
                else if (p(a.props, "contentState")) {
                  if (a.props.contentState) {
                    var n = Object(E.convertFromRaw)(a.props.contentState);
                    (t = E.EditorState.createWithContent(n, e)),
                      (t = E.EditorState.moveSelectionToEnd(t));
                  }
                } else if (
                  p(a.props, "defaultContentState") ||
                  p(a.props, "initialContentState")
                ) {
                  var o =
                    a.props.defaultContentState || a.props.initialContentState;
                  o &&
                    ((o = Object(E.convertFromRaw)(o)),
                    (t = E.EditorState.createWithContent(o, e)),
                    (t = E.EditorState.moveSelectionToEnd(t)));
                }
                return (t = t || E.EditorState.createEmpty(e));
              }),
              (a.filterEditorProps = function(e) {
                return (
                  (t = e),
                  (n = [
                    "onChange",
                    "onEditorStateChange",
                    "onContentStateChange",
                    "initialContentState",
                    "defaultContentState",
                    "contentState",
                    "editorState",
                    "defaultEditorState",
                    "locale",
                    "localization",
                    "toolbarOnFocus",
                    "toolbar",
                    "toolbarCustomButtons",
                    "toolbarClassName",
                    "editorClassName",
                    "toolbarHidden",
                    "wrapperClassName",
                    "toolbarStyle",
                    "editorStyle",
                    "wrapperStyle",
                    "uploadCallback",
                    "onFocus",
                    "onBlur",
                    "onTab",
                    "mention",
                    "hashtag",
                    "ariaLabel",
                    "customBlockRenderFunc",
                    "customDecorators",
                    "handlePastedText",
                    "customStyleMap"
                  ]),
                  (o = Object.keys(t).filter(function(e) {
                    return n.indexOf(e) < 0;
                  })),
                  (r = {}),
                  o &&
                    0 < o.length &&
                    o.forEach(function(e) {
                      r[e] = t[e];
                    }),
                  r
                );
                var t, n, o, r;
              }),
              (a.getStyleMap = function(e) {
                return Yo(
                  {},
                  Object(C.getCustomStyleMap)(),
                  {},
                  e.customStyleMap
                );
              }),
              (a.changeEditorState = function(e) {
                var t = Object(E.convertFromRaw)(e),
                  n = a.state.editorState;
                return (
                  (n = E.EditorState.push(n, t, "insert-characters")),
                  (n = E.EditorState.moveSelectionToEnd(n))
                );
              }),
              (a.focusEditor = function() {
                setTimeout(function() {
                  a.editor.focus();
                });
              }),
              (a.handleKeyCommand = function(e) {
                var t = a.state,
                  n = t.editorState,
                  o = t.toolbar.inline;
                if (o && 0 <= o.options.indexOf(e)) {
                  var r = E.RichUtils.handleKeyCommand(n, e);
                  if (r) return a.onChange(r), !0;
                }
                return !1;
              }),
              (a.handleReturn = function(e) {
                if (s()) return !0;
                var t = a.state.editorState,
                  n = Object(C.handleNewLine)(t, e);
                return !!n && (a.onChange(n), !0);
              }),
              (a.handlePastedTextFn = function(e, t) {
                var n = a.state.editorState,
                  o = a.props,
                  r = o.handlePastedText,
                  i = o.stripPastedStyles;
                return r
                  ? r(e, t, n, a.onChange)
                  : !i &&
                      (function(e, t, n, o) {
                        var r = Object(C.getSelectedBlock)(n);
                        if (r && "code" === r.type) {
                          var i = E.Modifier.replaceText(
                            n.getCurrentContent(),
                            n.getSelection(),
                            e,
                            n.getCurrentInlineStyle()
                          );
                          return (
                            o(E.EditorState.push(n, i, "insert-characters")), !0
                          );
                        }
                        if (t) {
                          var a = j()(t),
                            c = n.getCurrentContent();
                          return (
                            a.entityMap.forEach(function(e, t) {
                              c = c.mergeEntityData(t, e);
                            }),
                            (c = E.Modifier.replaceWithFragment(
                              c,
                              n.getSelection(),
                              new N.List(a.contentBlocks)
                            )),
                            o(E.EditorState.push(n, c, "insert-characters")),
                            !0
                          );
                        }
                        return !1;
                      })(e, t, n, a.onChange);
              }),
              (a.preventDefault = function(e) {
                "INPUT" === e.target.tagName ||
                "LABEL" === e.target.tagName ||
                "TEXTAREA" === e.target.tagName
                  ? a.focusHandler.onInputMouseDown()
                  : e.preventDefault();
              });
            var t = M(To, e.toolbar),
              n = e.wrapperId ? e.wrapperId : Math.floor(1e4 * Math.random());
            (a.wrapperId = "rdw-wrapper-".concat(n)),
              (a.modalHandler = new i()),
              (a.focusHandler = new c()),
              (a.blockRendererFn = Ao(
                {
                  isReadOnly: a.isReadOnly,
                  isImageAlignmentEnabled: a.isImageAlignmentEnabled,
                  getEditorState: a.getEditorState,
                  onChange: a.onChange
                },
                e.customBlockRenderFunc
              )),
              (a.editorProps = a.filterEditorProps(e)),
              (a.customStyleMap = a.getStyleMap(e)),
              (a.compositeDecorator = a.getCompositeDecorator(t));
            var o = a.createEditorState(a.compositeDecorator);
            return (
              Object(C.extractInlineStyle)(o),
              (a.state = { editorState: o, editorFocused: !1, toolbar: t }),
              a
            );
          }
          var e, t, n;
          return (
            (function(e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 }
              })),
                t && Zo(e, t);
            })(r, m["Component"]),
            (e = r),
            (t = [
              {
                key: "componentDidMount",
                value: function() {
                  this.modalHandler.init(this.wrapperId);
                }
              },
              {
                key: "componentDidUpdate",
                value: function(e) {
                  if (e !== this.props) {
                    var t = {},
                      n = this.props,
                      o = n.editorState,
                      r = n.contentState;
                    if (!this.state.toolbar) {
                      var i = M(To, i);
                      t.toolbar = i;
                    }
                    if (p(this.props, "editorState") && o !== e.editorState)
                      t.editorState = o
                        ? E.EditorState.set(o, {
                            decorator: this.compositeDecorator
                          })
                        : E.EditorState.createEmpty(this.compositeDecorator);
                    else if (
                      p(this.props, "contentState") &&
                      r !== e.contentState
                    )
                      if (r) {
                        var a = this.changeEditorState(r);
                        a && (t.editorState = a);
                      } else
                        t.editorState = E.EditorState.createEmpty(
                          this.compositeDecorator
                        );
                    (e.editorState === o && e.contentState === r) ||
                      Object(C.extractInlineStyle)(t.editorState),
                      Object.keys(t).length && this.setState(t),
                      (this.editorProps = this.filterEditorProps(this.props)),
                      (this.customStyleMap = this.getStyleMap(this.props));
                  }
                }
              },
              {
                key: "render",
                value: function() {
                  var e = this.state,
                    t = e.editorState,
                    n = e.editorFocused,
                    r = e.toolbar,
                    o = this.props,
                    i = o.locale,
                    a = o.localization,
                    c = a.locale,
                    l = a.translations,
                    s = o.toolbarCustomButtons,
                    u = o.toolbarOnFocus,
                    p = o.toolbarClassName,
                    d = o.toolbarHidden,
                    m = o.editorClassName,
                    f = o.wrapperClassName,
                    g = o.toolbarStyle,
                    y = o.editorStyle,
                    h = o.wrapperStyle,
                    M = o.uploadCallback,
                    b = o.ariaLabel,
                    j = {
                      modalHandler: this.modalHandler,
                      editorState: t,
                      onChange: this.onChange,
                      translations: Yo({}, zo[i || c], {}, l)
                    },
                    N = n || this.focusHandler.isInputFocused() || !u;
                  return S.a.createElement(
                    "div",
                    {
                      id: this.wrapperId,
                      className: L()(f, "rdw-editor-wrapper"),
                      style: h,
                      onClick: this.modalHandler.onEditorClick,
                      onBlur: this.onWrapperBlur,
                      "aria-label": "rdw-wrapper"
                    },
                    !d &&
                      S.a.createElement(
                        "div",
                        {
                          className: L()("rdw-editor-toolbar", p),
                          style: Yo(
                            { visibility: N ? "visible" : "hidden" },
                            g
                          ),
                          onMouseDown: this.preventDefault,
                          "aria-label": "rdw-toolbar",
                          "aria-hidden": (!n && u).toString(),
                          onFocus: this.onToolbarFocus
                        },
                        r.options.map(function(e, t) {
                          var n = ro[e],
                            o = r[e];
                          return (
                            "image" === e && M && (o.uploadCallback = M),
                            S.a.createElement(
                              n,
                              Po({ key: t }, j, { config: o })
                            )
                          );
                        }),
                        s &&
                          s.map(function(e, t) {
                            return S.a.cloneElement(e, Yo({ key: t }, j));
                          })
                      ),
                    S.a.createElement(
                      "div",
                      {
                        ref: this.setWrapperReference,
                        className: L()(m, "rdw-editor-main"),
                        style: y,
                        onClick: this.focusEditor,
                        onFocus: this.onEditorFocus,
                        onBlur: this.onEditorBlur,
                        onKeyDown: k.onKeyDown,
                        onMouseDown: this.onEditorMouseDown
                      },
                      S.a.createElement(
                        E.Editor,
                        Po(
                          {
                            ref: this.setEditorReference,
                            keyBindingFn: this.keyBindingFn,
                            editorState: t,
                            onChange: this.onChange,
                            blockStyleFn: D,
                            customStyleMap: this.getStyleMap(this.props),
                            handleReturn: this.handleReturn,
                            handlePastedText: this.handlePastedTextFn,
                            blockRendererFn: this.blockRendererFn,
                            handleKeyCommand: this.handleKeyCommand,
                            ariaLabel: b || "rdw-editor",
                            blockRenderMap: C.blockRenderMap
                          },
                          this.editorProps
                        )
                      )
                    )
                  );
                }
              }
            ]) && Bo(e.prototype, t),
            n && Bo(e, n),
            r
          );
        })();
        (Wo.propTypes = {
          onChange: f.a.func,
          onEditorStateChange: f.a.func,
          onContentStateChange: f.a.func,
          initialContentState: f.a.object,
          defaultContentState: f.a.object,
          contentState: f.a.object,
          editorState: f.a.object,
          defaultEditorState: f.a.object,
          toolbarOnFocus: f.a.bool,
          spellCheck: f.a.bool,
          stripPastedStyles: f.a.bool,
          toolbar: f.a.object,
          toolbarCustomButtons: f.a.array,
          toolbarClassName: f.a.string,
          toolbarHidden: f.a.bool,
          locale: f.a.string,
          localization: f.a.object,
          editorClassName: f.a.string,
          wrapperClassName: f.a.string,
          toolbarStyle: f.a.object,
          editorStyle: f.a.object,
          wrapperStyle: f.a.object,
          uploadCallback: f.a.func,
          onFocus: f.a.func,
          onBlur: f.a.func,
          onTab: f.a.func,
          mention: f.a.object,
          hashtag: f.a.object,
          textAlignment: f.a.string,
          readOnly: f.a.bool,
          tabIndex: f.a.number,
          placeholder: f.a.string,
          ariaLabel: f.a.string,
          ariaOwneeID: f.a.string,
          ariaActiveDescendantID: f.a.string,
          ariaAutoComplete: f.a.string,
          ariaDescribedBy: f.a.string,
          ariaExpanded: f.a.string,
          ariaHasPopup: f.a.string,
          customBlockRenderFunc: f.a.func,
          wrapperId: f.a.number,
          customDecorators: f.a.array,
          editorRef: f.a.func,
          handlePastedText: f.a.func
        }),
          (Wo.defaultProps = {
            toolbarOnFocus: !1,
            toolbarHidden: !1,
            stripPastedStyles: !1,
            localization: { locale: "en", translations: {} },
            customDecorators: []
          });
        var Go = Wo;
        n.d(t, "Editor", function() {
          return Go;
        });
      }
    ]),
    (i.c = c),
    (i.d = function(e, t, n) {
      i.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (i.r = function(e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (i.t = function(t, e) {
      if ((1 & e && (t = i(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var n = Object.create(null);
      if (
        (i.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var o in t)
          i.d(
            n,
            o,
            function(e) {
              return t[e];
            }.bind(null, o)
          );
      return n;
    }),
    (i.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return i.d(t, "a", t), t;
    }),
    (i.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (i.p = ""),
    i((i.s = 8))
  );
  function i(e) {
    if (c[e]) return c[e].exports;
    var t = (c[e] = { i: e, l: !1, exports: {} });
    return a[e].call(t.exports, t, t.exports, i), (t.l = !0), t.exports;
  }
  var a, c;
});
