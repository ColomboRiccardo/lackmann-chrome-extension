/*! JsBarcode v3.11.0 | (c) Johan Lindell | MIT license */
!(function (t) {
  function e(r) {
    if (n[r]) return n[r].exports;
    var o = (n[r] = { i: r, l: !1, exports: {} });
    return (
      t[r].call(o.exports, o, o.exports, e),
      (o.l = !0),
      o.exports
    );
  }
  var n = {};
  (e.m = t),
    (e.c = n),
    (e.i = function (t) {
      return t;
    }),
    (e.d = function (t, n, r) {
      e.o(t, n) ||
        Object.defineProperty(t, n, {
          configurable: !1,
          enumerable: !0,
          get: r,
        });
    }),
    (e.n = function (t) {
      var n =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return e.d(n, "a", n), n;
    }),
    (e.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (e.p = ""),
    e((e.s = 15));
})([
  function (t, e, n) {
    "use strict";
    function r(t, e) {
      if (!(t instanceof e))
        throw new TypeError(
          "Cannot call a class as a function"
        );
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o = function t(e, n) {
      r(this, t),
        (this.data = e),
        (this.text = n.text || e),
        (this.options = n);
    };
    e.default = o;
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    (e.SIDE_BIN = "101"),
      (e.MIDDLE_BIN = "01010"),
      (e.BINARIES = {
        L: [
          "0001101",
          "0011001",
          "0010011",
          "0111101",
          "0100011",
          "0110001",
          "0101111",
          "0111011",
          "0110111",
          "0001011",
        ],
        G: [
          "0100111",
          "0110011",
          "0011011",
          "0100001",
          "0011101",
          "0111001",
          "0000101",
          "0010001",
          "0001001",
          "0010111",
        ],
        R: [
          "1110010",
          "1100110",
          "1101100",
          "1000010",
          "1011100",
          "1001110",
          "1010000",
          "1000100",
          "1001000",
          "1110100",
        ],
        O: [
          "0001101",
          "0011001",
          "0010011",
          "0111101",
          "0100011",
          "0110001",
          "0101111",
          "0111011",
          "0110111",
          "0001011",
        ],
        E: [
          "0100111",
          "0110011",
          "0011011",
          "0100001",
          "0011101",
          "0111001",
          "0000101",
          "0010001",
          "0001001",
          "0010111",
        ],
      }),
      (e.EAN2_STRUCTURE = ["LL", "LG", "GL", "GG"]),
      (e.EAN5_STRUCTURE = [
        "GGLLL",
        "GLGLL",
        "GLLGL",
        "GLLLG",
        "LGGLL",
        "LLGGL",
        "LLLGG",
        "LGLGL",
        "LGLLG",
        "LLGLG",
      ]),
      (e.EAN13_STRUCTURE = [
        "LLLLLL",
        "LLGLGG",
        "LLGGLG",
        "LLGGGL",
        "LGLLGG",
        "LGGLLG",
        "LGGGLL",
        "LGLGLG",
        "LGLGGL",
        "LGGLGL",
      ]);
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var r = n(1),
      o = function (t, e, n) {
        var o = t
          .split("")
          .map(function (t, n) {
            return r.BINARIES[e[n]];
          })
          .map(function (e, n) {
            return e ? e[t[n]] : "";
          });
        if (n) {
          var i = t.length - 1;
          o = o.map(function (t, e) {
            return e < i ? t + n : t;
          });
        }
        return o.join("");
      };
    e.default = o;
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var r =
      Object.assign ||
      function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = arguments[e];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) &&
              (t[r] = n[r]);
        }
        return t;
      };
    e.default = function (t, e) {
      return r({}, t, e);
    };
  },
  function (t, e, n) {
    "use strict";
    function r(t, e) {
      if (!(t instanceof e))
        throw new TypeError(
          "Cannot call a class as a function"
        );
    }
    function o(t, e) {
      if (!t)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !e ||
        ("object" != typeof e && "function" != typeof e)
        ? t
        : e;
    }
    function i(t, e) {
      if ("function" != typeof e && null !== e)
        throw new TypeError(
          "Super expression must either be null or a function, not " +
            typeof e
        );
      (t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      })),
        e &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(t, e)
            : (t.__proto__ = e));
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var a = (function (t) {
        function e(t, n) {
          r(this, e);
          var i = o(
            this,
            (e.__proto__ || Object.getPrototypeOf(e)).call(
              this
            )
          );
          return (
            (i.name = "InvalidInputException"),
            (i.symbology = t),
            (i.input = n),
            (i.message =
              '"' +
              i.input +
              '" is not a valid input for ' +
              i.symbology),
            i
          );
        }
        return i(e, t), e;
      })(Error),
      u = (function (t) {
        function e() {
          r(this, e);
          var t = o(
            this,
            (e.__proto__ || Object.getPrototypeOf(e)).call(
              this
            )
          );
          return (
            (t.name = "InvalidElementException"),
            (t.message = "Not supported type to render on"),
            t
          );
        }
        return i(e, t), e;
      })(Error),
      s = (function (t) {
        function e() {
          r(this, e);
          var t = o(
            this,
            (e.__proto__ || Object.getPrototypeOf(e)).call(
              this
            )
          );
          return (
            (t.name = "NoElementException"),
            (t.message = "No element to render on."),
            t
          );
        }
        return i(e, t), e;
      })(Error);
    (e.InvalidInputException = a),
      (e.InvalidElementException = u),
      (e.NoElementException = s);
  },
  function (t, e, n) {
    "use strict";
    function r(t) {
      var e = [
        "width",
        "height",
        "textMargin",
        "fontSize",
        "margin",
        "marginTop",
        "marginBottom",
        "marginLeft",
        "marginRight",
      ];
      for (var n in e)
        e.hasOwnProperty(n) &&
          ((n = e[n]),
          "string" == typeof t[n] &&
            (t[n] = parseInt(t[n], 10)));
      return (
        "string" == typeof t.displayValue &&
          (t.displayValue = "false" != t.displayValue),
        t
      );
    }
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.default = r);
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var r = {
      width: 2,
      height: 100,
      format: "auto",
      displayValue: !0,
      fontOptions: "",
      font: "monospace",
      text: void 0,
      textAlign: "center",
      textPosition: "bottom",
      textMargin: 2,
      fontSize: 20,
      background: "#ffffff",
      lineColor: "#000000",
      margin: 10,
      marginTop: void 0,
      marginBottom: void 0,
      marginLeft: void 0,
      marginRight: void 0,
      valid: function () {},
    };
    e.default = r;
  },
  function (t, e, n) {
    "use strict";
    function r(t) {
      return t && t.__esModule ? t : { default: t };
    }
    function o(t, e) {
      if (!(t instanceof e))
        throw new TypeError(
          "Cannot call a class as a function"
        );
    }
    function i(t, e) {
      if (!t)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !e ||
        ("object" != typeof e && "function" != typeof e)
        ? t
        : e;
    }
    function a(t, e) {
      if ("function" != typeof e && null !== e)
        throw new TypeError(
          "Super expression must either be null or a function, not " +
            typeof e
        );
      (t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      })),
        e &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(t, e)
            : (t.__proto__ = e));
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var u = (function () {
        function t(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(t, r.key, r);
          }
        }
        return function (e, n, r) {
          return n && t(e.prototype, n), r && t(e, r), e;
        };
      })(),
      s = n(1),
      f = n(2),
      c = r(f),
      l = n(0),
      d = r(l),
      p = (function (t) {
        function e(t, n) {
          o(this, e);
          var r = i(
            this,
            (e.__proto__ || Object.getPrototypeOf(e)).call(
              this,
              t,
              n
            )
          );
          return (
            (r.fontSize =
              !n.flat && n.fontSize > 10 * n.width
                ? 10 * n.width
                : n.fontSize),
            (r.guardHeight =
              n.height + r.fontSize / 2 + n.textMargin),
            r
          );
        }
        return (
          a(e, t),
          u(e, [
            {
              key: "encode",
              value: function () {
                return this.options.flat
                  ? this.encodeFlat()
                  : this.encodeGuarded();
              },
            },
            {
              key: "leftText",
              value: function (t, e) {
                return this.text.substr(t, e);
              },
            },
            {
              key: "leftEncode",
              value: function (t, e) {
                return (0, c.default)(t, e);
              },
            },
            {
              key: "rightText",
              value: function (t, e) {
                return this.text.substr(t, e);
              },
            },
            {
              key: "rightEncode",
              value: function (t, e) {
                return (0, c.default)(t, e);
              },
            },
            {
              key: "encodeGuarded",
              value: function () {
                var t = { fontSize: this.fontSize },
                  e = { height: this.guardHeight };
                return [
                  { data: s.SIDE_BIN, options: e },
                  {
                    data: this.leftEncode(),
                    text: this.leftText(),
                    options: t,
                  },
                  { data: s.MIDDLE_BIN, options: e },
                  {
                    data: this.rightEncode(),
                    text: this.rightText(),
                    options: t,
                  },
                  { data: s.SIDE_BIN, options: e },
                ];
              },
            },
            {
              key: "encodeFlat",
              value: function () {
                return {
                  data: [
                    s.SIDE_BIN,
                    this.leftEncode(),
                    s.MIDDLE_BIN,
                    this.rightEncode(),
                    s.SIDE_BIN,
                  ].join(""),
                  text: this.text,
                };
              },
            },
          ]),
          e
        );
      })(d.default);
    e.default = p;
  },
  function (t, e, n) {
    "use strict";
    function r(t) {
      return t && t.__esModule ? t : { default: t };
    }
    function o(t, e) {
      if (!(t instanceof e))
        throw new TypeError(
          "Cannot call a class as a function"
        );
    }
    function i(t, e) {
      if (!t)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !e ||
        ("object" != typeof e && "function" != typeof e)
        ? t
        : e;
    }
    function a(t, e) {
      if ("function" != typeof e && null !== e)
        throw new TypeError(
          "Super expression must either be null or a function, not " +
            typeof e
        );
      (t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      })),
        e &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(t, e)
            : (t.__proto__ = e));
    }
    function u(t) {
      var e,
        n = 0;
      for (e = 1; e < 11; e += 2) n += parseInt(t[e]);
      for (e = 0; e < 11; e += 2) n += 3 * parseInt(t[e]);
      return (10 - (n % 10)) % 10;
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var s = (function () {
      function t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      return function (e, n, r) {
        return n && t(e.prototype, n), r && t(e, r), e;
      };
    })();
    e.checksum = u;
    var f = n(2),
      c = r(f),
      l = n(0),
      d = r(l),
      p = (function (t) {
        function e(t, n) {
          o(this, e),
            -1 !== t.search(/^[0-9]{11}$/) && (t += u(t));
          var r = i(
            this,
            (e.__proto__ || Object.getPrototypeOf(e)).call(
              this,
              t,
              n
            )
          );
          return (
            (r.displayValue = n.displayValue),
            n.fontSize > 10 * n.width
              ? (r.fontSize = 10 * n.width)
              : (r.fontSize = n.fontSize),
            (r.guardHeight =
              n.height + r.fontSize / 2 + n.textMargin),
            r
          );
        }
        return (
          a(e, t),
          s(e, [
            {
              key: "valid",
              value: function () {
                return (
                  -1 !== this.data.search(/^[0-9]{12}$/) &&
                  this.data[11] == u(this.data)
                );
              },
            },
            {
              key: "encode",
              value: function () {
                return this.options.flat
                  ? this.flatEncoding()
                  : this.guardedEncoding();
              },
            },
            {
              key: "flatEncoding",
              value: function () {
                var t = "";
                return (
                  (t += "101"),
                  (t += (0, c.default)(
                    this.data.substr(0, 6),
                    "LLLLLL"
                  )),
                  (t += "01010"),
                  (t += (0, c.default)(
                    this.data.substr(6, 6),
                    "RRRRRR"
                  )),
                  (t += "101"),
                  { data: t, text: this.text }
                );
              },
            },
            {
              key: "guardedEncoding",
              value: function () {
                var t = [];
                return (
                  this.displayValue &&
                    t.push({
                      data: "00000000",
                      text: this.text.substr(0, 1),
                      options: {
                        textAlign: "left",
                        fontSize: this.fontSize,
                      },
                    }),
                  t.push({
                    data:
                      "101" +
                      (0, c.default)(this.data[0], "L"),
                    options: { height: this.guardHeight },
                  }),
                  t.push({
                    data: (0, c.default)(
                      this.data.substr(1, 5),
                      "LLLLL"
                    ),
                    text: this.text.substr(1, 5),
                    options: { fontSize: this.fontSize },
                  }),
                  t.push({
                    data: "01010",
                    options: { height: this.guardHeight },
                  }),
                  t.push({
                    data: (0, c.default)(
                      this.data.substr(6, 5),
                      "RRRRR"
                    ),
                    text: this.text.substr(6, 5),
                    options: { fontSize: this.fontSize },
                  }),
                  t.push({
                    data:
                      (0, c.default)(this.data[11], "R") +
                      "101",
                    options: { height: this.guardHeight },
                  }),
                  this.displayValue &&
                    t.push({
                      data: "00000000",
                      text: this.text.substr(11, 1),
                      options: {
                        textAlign: "right",
                        fontSize: this.fontSize,
                      },
                    }),
                  t
                );
              },
            },
          ]),
          e
        );
      })(d.default);
    e.default = p;
  },
  function (t, e, n) {
    "use strict";
    function r(t, e) {
      return (
        e.height +
        (e.displayValue && t.text.length > 0
          ? e.fontSize + e.textMargin
          : 0) +
        e.marginTop +
        e.marginBottom
      );
    }
    function o(t, e, n) {
      if (n.displayValue && e < t) {
        if ("center" == n.textAlign)
          return Math.floor((t - e) / 2);
        if ("left" == n.textAlign) return 0;
        if ("right" == n.textAlign)
          return Math.floor(t - e);
      }
      return 0;
    }
    function i(t, e, n) {
      for (var i = 0; i < t.length; i++) {
        var a,
          u = t[i],
          f = (0, c.default)(e, u.options);
        a = f.displayValue ? s(u.text, f, n) : 0;
        var l = u.data.length * f.width;
        (u.width = Math.ceil(Math.max(a, l))),
          (u.height = r(u, f)),
          (u.barcodePadding = o(a, l, f));
      }
    }
    function a(t) {
      for (var e = 0, n = 0; n < t.length; n++)
        e += t[n].width;
      return e;
    }
    function u(t) {
      for (var e = 0, n = 0; n < t.length; n++)
        t[n].height > e && (e = t[n].height);
      return e;
    }
    function s(t, e, n) {
      var r;
      if (n) r = n;
      else {
        if ("undefined" == typeof document) return 0;
        r = document
          .createElement("canvas")
          .getContext("2d");
      }
      return (
        (r.font =
          e.fontOptions +
          " " +
          e.fontSize +
          "px " +
          e.font),
        r.measureText(t).width
      );
    }
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.getTotalWidthOfEncodings =
        e.calculateEncodingAttributes =
        e.getBarcodePadding =
        e.getEncodingHeight =
        e.getMaximumHeightOfEncodings =
          void 0);
    var f = n(3),
      c = (function (t) {
        return t && t.__esModule ? t : { default: t };
      })(f);
    (e.getMaximumHeightOfEncodings = u),
      (e.getEncodingHeight = r),
      (e.getBarcodePadding = o),
      (e.calculateEncodingAttributes = i),
      (e.getTotalWidthOfEncodings = a);
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var r = n(21);
    e.default = {
      EAN13: r.EAN13,
      EAN8: r.EAN8,
      EAN5: r.EAN5,
      EAN2: r.EAN2,
      UPC: r.UPC,
    };
  },
  function (t, e, n) {
    "use strict";
    function r(t, e) {
      if (!(t instanceof e))
        throw new TypeError(
          "Cannot call a class as a function"
        );
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o = (function () {
        function t(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(t, r.key, r);
          }
        }
        return function (e, n, r) {
          return n && t(e.prototype, n), r && t(e, r), e;
        };
      })(),
      i = (function () {
        function t(e) {
          r(this, t), (this.api = e);
        }
        return (
          o(t, [
            {
              key: "handleCatch",
              value: function (t) {
                if ("InvalidInputException" !== t.name)
                  throw t;
                if (
                  this.api._options.valid ===
                  this.api._defaults.valid
                )
                  throw t.message;
                this.api._options.valid(!1),
                  (this.api.render = function () {});
              },
            },
            {
              key: "wrapBarcodeCall",
              value: function (t) {
                try {
                  var e = t.apply(void 0, arguments);
                  return this.api._options.valid(!0), e;
                } catch (t) {
                  return this.handleCatch(t), this.api;
                }
              },
            },
          ]),
          t
        );
      })();
    e.default = i;
  },
  function (t, e, n) {
    "use strict";
    function r(t) {
      return (
        (t.marginTop = t.marginTop || t.margin),
        (t.marginBottom = t.marginBottom || t.margin),
        (t.marginRight = t.marginRight || t.margin),
        (t.marginLeft = t.marginLeft || t.margin),
        t
      );
    }
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.default = r);
  },
  function (t, e, n) {
    "use strict";
    function r(t) {
      return t && t.__esModule ? t : { default: t };
    }
    function o(t) {
      if ("string" == typeof t) return i(t);
      if (Array.isArray(t)) {
        for (var e = [], n = 0; n < t.length; n++)
          e.push(o(t[n]));
        return e;
      }
      if (
        "undefined" != typeof HTMLCanvasElement &&
        t instanceof HTMLImageElement
      )
        return a(t);
      if (
        (t && "svg" === t.nodeName) ||
        ("undefined" != typeof SVGElement &&
          t instanceof SVGElement)
      )
        return {
          element: t,
          options: (0, f.default)(t),
          renderer: l.default.SVGRenderer,
        };
      if (
        "undefined" != typeof HTMLCanvasElement &&
        t instanceof HTMLCanvasElement
      )
        return {
          element: t,
          options: (0, f.default)(t),
          renderer: l.default.CanvasRenderer,
        };
      if (t && t.getContext)
        return {
          element: t,
          renderer: l.default.CanvasRenderer,
        };
      if (
        t &&
        "object" === (void 0 === t ? "undefined" : u(t)) &&
        !t.nodeName
      )
        return {
          element: t,
          renderer: l.default.ObjectRenderer,
        };
      throw new d.InvalidElementException();
    }
    function i(t) {
      var e = document.querySelectorAll(t);
      if (0 !== e.length) {
        for (var n = [], r = 0; r < e.length; r++)
          n.push(o(e[r]));
        return n;
      }
    }
    function a(t) {
      var e = document.createElement("canvas");
      return {
        element: e,
        options: (0, f.default)(t),
        renderer: l.default.CanvasRenderer,
        afterRender: function () {
          t.setAttribute("src", e.toDataURL());
        },
      };
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var u =
        "function" == typeof Symbol &&
        "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            },
      s = n(22),
      f = r(s),
      c = n(24),
      l = r(c),
      d = n(4);
    e.default = o;
  },
  function (t, e, n) {
    "use strict";
    function r(t) {
      function e(t) {
        if (Array.isArray(t))
          for (var r = 0; r < t.length; r++) e(t[r]);
        else
          (t.text = t.text || ""),
            (t.data = t.data || ""),
            n.push(t);
      }
      var n = [];
      return e(t), n;
    }
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.default = r);
  },
  function (t, e, n) {
    "use strict";
    function r(t) {
      return t && t.__esModule ? t : { default: t };
    }
    function o(t, e, n) {
      t = "" + t;
      var r = new e(t, n);
      if (!r.valid())
        throw new E.InvalidInputException(
          r.constructor.name,
          t
        );
      var o = r.encode();
      o = (0, d.default)(o);
      for (var i = 0; i < o.length; i++)
        o[i].options = (0, c.default)(n, o[i].options);
      return o;
    }
    function i() {
      return s.default.CODE128
        ? "CODE128"
        : Object.keys(s.default)[0];
    }
    function a(t, e, n) {
      e = (0, d.default)(e);
      for (var r = 0; r < e.length; r++)
        (e[r].options = (0, c.default)(n, e[r].options)),
          (0, h.default)(e[r].options);
      (0, h.default)(n),
        new (0, t.renderer)(t.element, e, n).render(),
        t.afterRender && t.afterRender();
    }
    var u = n(10),
      s = r(u),
      f = n(3),
      c = r(f),
      l = n(14),
      d = r(l),
      p = n(12),
      h = r(p),
      g = n(13),
      v = r(g),
      y = n(5),
      b = r(y),
      _ = n(11),
      O = r(_),
      E = n(4),
      m = n(6),
      w = r(m),
      x = function () {},
      P = function (t, e, n) {
        var r = new x();
        if (void 0 === t)
          throw Error(
            "No element to render on was provided."
          );
        return (
          (r._renderProperties = (0, v.default)(t)),
          (r._encodings = []),
          (r._options = w.default),
          (r._errorHandler = new O.default(r)),
          void 0 !== e &&
            ((n = n || {}),
            n.format || (n.format = i()),
            r.options(n)[n.format](e, n).render()),
          r
        );
      };
    P.getModule = function (t) {
      return s.default[t];
    };
    for (var j in s.default)
      s.default.hasOwnProperty(j) &&
        (function (t, e) {
          x.prototype[e] =
            x.prototype[e.toUpperCase()] =
            x.prototype[e.toLowerCase()] =
              function (n, r) {
                var i = this;
                return i._errorHandler.wrapBarcodeCall(
                  function () {
                    r.text =
                      void 0 === r.text
                        ? void 0
                        : "" + r.text;
                    var a = (0, c.default)(i._options, r);
                    a = (0, b.default)(a);
                    var u = t[e],
                      s = o(n, u, a);
                    return i._encodings.push(s), i;
                  }
                );
              };
        })(s.default, j);
    (x.prototype.options = function (t) {
      return (
        (this._options = (0, c.default)(this._options, t)),
        this
      );
    }),
      (x.prototype.blank = function (t) {
        var e = new Array(t + 1).join("0");
        return this._encodings.push({ data: e }), this;
      }),
      (x.prototype.init = function () {
        if (this._renderProperties) {
          Array.isArray(this._renderProperties) ||
            (this._renderProperties = [
              this._renderProperties,
            ]);
          var t;
          for (var e in this._renderProperties) {
            t = this._renderProperties[e];
            var n = (0, c.default)(
              this._options,
              t.options
            );
            "auto" == n.format && (n.format = i()),
              this._errorHandler.wrapBarcodeCall(
                function () {
                  var e = n.value,
                    r = s.default[n.format.toUpperCase()],
                    i = o(e, r, n);
                  a(t, i, n);
                }
              );
          }
        }
      }),
      (x.prototype.render = function () {
        if (!this._renderProperties)
          throw new E.NoElementException();
        if (Array.isArray(this._renderProperties))
          for (
            var t = 0;
            t < this._renderProperties.length;
            t++
          )
            a(
              this._renderProperties[t],
              this._encodings,
              this._options
            );
        else
          a(
            this._renderProperties,
            this._encodings,
            this._options
          );
        return this;
      }),
      (x.prototype._defaults = w.default),
      "undefined" != typeof window &&
        (window.JsBarcode = P),
      "undefined" != typeof jQuery &&
        (jQuery.fn.JsBarcode = function (t, e) {
          var n = [];
          return (
            jQuery(this).each(function () {
              n.push(this);
            }),
            P(n, t, e)
          );
        }),
      (t.exports = P);
  },
  function (t, e, n) {
    "use strict";
    function r(t, e) {
      if (!(t instanceof e))
        throw new TypeError(
          "Cannot call a class as a function"
        );
    }
    function o(t, e) {
      if (!t)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !e ||
        ("object" != typeof e && "function" != typeof e)
        ? t
        : e;
    }
    function i(t, e) {
      if ("function" != typeof e && null !== e)
        throw new TypeError(
          "Super expression must either be null or a function, not " +
            typeof e
        );
      (t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      })),
        e &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(t, e)
            : (t.__proto__ = e));
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var a = (function () {
        function t(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(t, r.key, r);
          }
        }
        return function (e, n, r) {
          return n && t(e.prototype, n), r && t(e, r), e;
        };
      })(),
      u = function t(e, n, r) {
        null === e && (e = Function.prototype);
        var o = Object.getOwnPropertyDescriptor(e, n);
        if (void 0 === o) {
          var i = Object.getPrototypeOf(e);
          return null === i ? void 0 : t(i, n, r);
        }
        if ("value" in o) return o.value;
        var a = o.get;
        if (void 0 !== a) return a.call(r);
      },
      s = n(1),
      f = n(7),
      c = (function (t) {
        return t && t.__esModule ? t : { default: t };
      })(f),
      l = function (t) {
        return (
          (10 -
            (t
              .substr(0, 12)
              .split("")
              .map(function (t) {
                return +t;
              })
              .reduce(function (t, e, n) {
                return n % 2 ? t + 3 * e : t + e;
              }, 0) %
              10)) %
          10
        );
      },
      d = (function (t) {
        function e(t, n) {
          r(this, e),
            -1 !== t.search(/^[0-9]{12}$/) && (t += l(t));
          var i = o(
            this,
            (e.__proto__ || Object.getPrototypeOf(e)).call(
              this,
              t,
              n
            )
          );
          return (i.lastChar = n.lastChar), i;
        }
        return (
          i(e, t),
          a(e, [
            {
              key: "valid",
              value: function () {
                return (
                  -1 !== this.data.search(/^[0-9]{13}$/) &&
                  +this.data[12] === l(this.data)
                );
              },
            },
            {
              key: "leftText",
              value: function () {
                return u(
                  e.prototype.__proto__ ||
                    Object.getPrototypeOf(e.prototype),
                  "leftText",
                  this
                ).call(this, 1, 6);
              },
            },
            {
              key: "leftEncode",
              value: function () {
                var t = this.data.substr(1, 6),
                  n = s.EAN13_STRUCTURE[this.data[0]];
                return u(
                  e.prototype.__proto__ ||
                    Object.getPrototypeOf(e.prototype),
                  "leftEncode",
                  this
                ).call(this, t, n);
              },
            },
            {
              key: "rightText",
              value: function () {
                return u(
                  e.prototype.__proto__ ||
                    Object.getPrototypeOf(e.prototype),
                  "rightText",
                  this
                ).call(this, 7, 6);
              },
            },
            {
              key: "rightEncode",
              value: function () {
                var t = this.data.substr(7, 6);
                return u(
                  e.prototype.__proto__ ||
                    Object.getPrototypeOf(e.prototype),
                  "rightEncode",
                  this
                ).call(this, t, "RRRRRR");
              },
            },
            {
              key: "encodeGuarded",
              value: function () {
                var t = u(
                  e.prototype.__proto__ ||
                    Object.getPrototypeOf(e.prototype),
                  "encodeGuarded",
                  this
                ).call(this);
                return (
                  this.options.displayValue &&
                    (t.unshift({
                      data: "000000000000",
                      text: this.text.substr(0, 1),
                      options: {
                        textAlign: "left",
                        fontSize: this.fontSize,
                      },
                    }),
                    this.options.lastChar &&
                      (t.push({ data: "00" }),
                      t.push({
                        data: "00000",
                        text: this.options.lastChar,
                        options: {
                          fontSize: this.fontSize,
                        },
                      }))),
                  t
                );
              },
            },
          ]),
          e
        );
      })(c.default);
    e.default = d;
  },
  function (t, e, n) {
    "use strict";
    function r(t) {
      return t && t.__esModule ? t : { default: t };
    }
    function o(t, e) {
      if (!(t instanceof e))
        throw new TypeError(
          "Cannot call a class as a function"
        );
    }
    function i(t, e) {
      if (!t)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !e ||
        ("object" != typeof e && "function" != typeof e)
        ? t
        : e;
    }
    function a(t, e) {
      if ("function" != typeof e && null !== e)
        throw new TypeError(
          "Super expression must either be null or a function, not " +
            typeof e
        );
      (t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      })),
        e &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(t, e)
            : (t.__proto__ = e));
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var u = (function () {
        function t(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(t, r.key, r);
          }
        }
        return function (e, n, r) {
          return n && t(e.prototype, n), r && t(e, r), e;
        };
      })(),
      s = n(1),
      f = n(2),
      c = r(f),
      l = n(0),
      d = r(l),
      p = (function (t) {
        function e(t, n) {
          return (
            o(this, e),
            i(
              this,
              (
                e.__proto__ || Object.getPrototypeOf(e)
              ).call(this, t, n)
            )
          );
        }
        return (
          a(e, t),
          u(e, [
            {
              key: "valid",
              value: function () {
                return (
                  -1 !== this.data.search(/^[0-9]{2}$/)
                );
              },
            },
            {
              key: "encode",
              value: function () {
                var t =
                  s.EAN2_STRUCTURE[parseInt(this.data) % 4];
                return {
                  data:
                    "1011" +
                    (0, c.default)(this.data, t, "01"),
                  text: this.text,
                };
              },
            },
          ]),
          e
        );
      })(d.default);
    e.default = p;
  },
  function (t, e, n) {
    "use strict";
    function r(t) {
      return t && t.__esModule ? t : { default: t };
    }
    function o(t, e) {
      if (!(t instanceof e))
        throw new TypeError(
          "Cannot call a class as a function"
        );
    }
    function i(t, e) {
      if (!t)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !e ||
        ("object" != typeof e && "function" != typeof e)
        ? t
        : e;
    }
    function a(t, e) {
      if ("function" != typeof e && null !== e)
        throw new TypeError(
          "Super expression must either be null or a function, not " +
            typeof e
        );
      (t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      })),
        e &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(t, e)
            : (t.__proto__ = e));
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var u = (function () {
        function t(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(t, r.key, r);
          }
        }
        return function (e, n, r) {
          return n && t(e.prototype, n), r && t(e, r), e;
        };
      })(),
      s = n(1),
      f = n(2),
      c = r(f),
      l = n(0),
      d = r(l),
      p = function (t) {
        return (
          t
            .split("")
            .map(function (t) {
              return +t;
            })
            .reduce(function (t, e, n) {
              return n % 2 ? t + 9 * e : t + 3 * e;
            }, 0) % 10
        );
      },
      h = (function (t) {
        function e(t, n) {
          return (
            o(this, e),
            i(
              this,
              (
                e.__proto__ || Object.getPrototypeOf(e)
              ).call(this, t, n)
            )
          );
        }
        return (
          a(e, t),
          u(e, [
            {
              key: "valid",
              value: function () {
                return (
                  -1 !== this.data.search(/^[0-9]{5}$/)
                );
              },
            },
            {
              key: "encode",
              value: function () {
                var t = s.EAN5_STRUCTURE[p(this.data)];
                return {
                  data:
                    "1011" +
                    (0, c.default)(this.data, t, "01"),
                  text: this.text,
                };
              },
            },
          ]),
          e
        );
      })(d.default);
    e.default = h;
  },
  function (t, e, n) {
    "use strict";
    function r(t, e) {
      if (!(t instanceof e))
        throw new TypeError(
          "Cannot call a class as a function"
        );
    }
    function o(t, e) {
      if (!t)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !e ||
        ("object" != typeof e && "function" != typeof e)
        ? t
        : e;
    }
    function i(t, e) {
      if ("function" != typeof e && null !== e)
        throw new TypeError(
          "Super expression must either be null or a function, not " +
            typeof e
        );
      (t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      })),
        e &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(t, e)
            : (t.__proto__ = e));
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var a = (function () {
        function t(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(t, r.key, r);
          }
        }
        return function (e, n, r) {
          return n && t(e.prototype, n), r && t(e, r), e;
        };
      })(),
      u = function t(e, n, r) {
        null === e && (e = Function.prototype);
        var o = Object.getOwnPropertyDescriptor(e, n);
        if (void 0 === o) {
          var i = Object.getPrototypeOf(e);
          return null === i ? void 0 : t(i, n, r);
        }
        if ("value" in o) return o.value;
        var a = o.get;
        if (void 0 !== a) return a.call(r);
      },
      s = n(7),
      f = (function (t) {
        return t && t.__esModule ? t : { default: t };
      })(s),
      c = function (t) {
        return (
          (10 -
            (t
              .substr(0, 7)
              .split("")
              .map(function (t) {
                return +t;
              })
              .reduce(function (t, e, n) {
                return n % 2 ? t + e : t + 3 * e;
              }, 0) %
              10)) %
          10
        );
      },
      l = (function (t) {
        function e(t, n) {
          return (
            r(this, e),
            -1 !== t.search(/^[0-9]{7}$/) && (t += c(t)),
            o(
              this,
              (
                e.__proto__ || Object.getPrototypeOf(e)
              ).call(this, t, n)
            )
          );
        }
        return (
          i(e, t),
          a(e, [
            {
              key: "valid",
              value: function () {
                return (
                  -1 !== this.data.search(/^[0-9]{8}$/) &&
                  +this.data[7] === c(this.data)
                );
              },
            },
            {
              key: "leftText",
              value: function () {
                return u(
                  e.prototype.__proto__ ||
                    Object.getPrototypeOf(e.prototype),
                  "leftText",
                  this
                ).call(this, 0, 4);
              },
            },
            {
              key: "leftEncode",
              value: function () {
                var t = this.data.substr(0, 4);
                return u(
                  e.prototype.__proto__ ||
                    Object.getPrototypeOf(e.prototype),
                  "leftEncode",
                  this
                ).call(this, t, "LLLL");
              },
            },
            {
              key: "rightText",
              value: function () {
                return u(
                  e.prototype.__proto__ ||
                    Object.getPrototypeOf(e.prototype),
                  "rightText",
                  this
                ).call(this, 4, 4);
              },
            },
            {
              key: "rightEncode",
              value: function () {
                var t = this.data.substr(4, 4);
                return u(
                  e.prototype.__proto__ ||
                    Object.getPrototypeOf(e.prototype),
                  "rightEncode",
                  this
                ).call(this, t, "RRRR");
              },
            },
          ]),
          e
        );
      })(f.default);
    e.default = l;
  },
  function (t, e, n) {
    "use strict";
    function r(t) {
      return t && t.__esModule ? t : { default: t };
    }
    function o(t, e) {
      if (!(t instanceof e))
        throw new TypeError(
          "Cannot call a class as a function"
        );
    }
    function i(t, e) {
      if (!t)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !e ||
        ("object" != typeof e && "function" != typeof e)
        ? t
        : e;
    }
    function a(t, e) {
      if ("function" != typeof e && null !== e)
        throw new TypeError(
          "Super expression must either be null or a function, not " +
            typeof e
        );
      (t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      })),
        e &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(t, e)
            : (t.__proto__ = e));
    }
    function u(t, e) {
      for (
        var n = parseInt(t[t.length - 1]),
          r = h[n],
          o = "",
          i = 0,
          a = 0;
        a < r.length;
        a++
      ) {
        var u = r[a];
        o += "X" === u ? t[i++] : u;
      }
      return "" + (o = "" + e + o) + (0, p.checksum)(o);
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var s = (function () {
        function t(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(t, r.key, r);
          }
        }
        return function (e, n, r) {
          return n && t(e.prototype, n), r && t(e, r), e;
        };
      })(),
      f = n(2),
      c = r(f),
      l = n(0),
      d = r(l),
      p = n(8),
      h = [
        "XX00000XXX",
        "XX10000XXX",
        "XX20000XXX",
        "XXX00000XX",
        "XXXX00000X",
        "XXXXX00005",
        "XXXXX00006",
        "XXXXX00007",
        "XXXXX00008",
        "XXXXX00009",
      ],
      g = [
        ["EEEOOO", "OOOEEE"],
        ["EEOEOO", "OOEOEE"],
        ["EEOOEO", "OOEEOE"],
        ["EEOOOE", "OOEEEO"],
        ["EOEEOO", "OEOOEE"],
        ["EOOEEO", "OEEOOE"],
        ["EOOOEE", "OEEEOO"],
        ["EOEOEO", "OEOEOE"],
        ["EOEOOE", "OEOEEO"],
        ["EOOEOE", "OEEOEO"],
      ],
      v = (function (t) {
        function e(t, n) {
          o(this, e);
          var r = i(
            this,
            (e.__proto__ || Object.getPrototypeOf(e)).call(
              this,
              t,
              n
            )
          );
          if (
            ((r.isValid = !1),
            -1 !== t.search(/^[0-9]{6}$/))
          )
            (r.middleDigits = t),
              (r.upcA = u(t, "0")),
              (r.text =
                n.text ||
                "" +
                  r.upcA[0] +
                  t +
                  r.upcA[r.upcA.length - 1]),
              (r.isValid = !0);
          else {
            if (-1 === t.search(/^[01][0-9]{7}$/))
              return i(r);
            if (
              ((r.middleDigits = t.substring(
                1,
                t.length - 1
              )),
              (r.upcA = u(r.middleDigits, t[0])),
              r.upcA[r.upcA.length - 1] !== t[t.length - 1])
            )
              return i(r);
            r.isValid = !0;
          }
          return (
            (r.displayValue = n.displayValue),
            n.fontSize > 10 * n.width
              ? (r.fontSize = 10 * n.width)
              : (r.fontSize = n.fontSize),
            (r.guardHeight =
              n.height + r.fontSize / 2 + n.textMargin),
            r
          );
        }
        return (
          a(e, t),
          s(e, [
            {
              key: "valid",
              value: function () {
                return this.isValid;
              },
            },
            {
              key: "encode",
              value: function () {
                return this.options.flat
                  ? this.flatEncoding()
                  : this.guardedEncoding();
              },
            },
            {
              key: "flatEncoding",
              value: function () {
                var t = "";
                return (
                  (t += "101"),
                  (t += this.encodeMiddleDigits()),
                  (t += "010101"),
                  { data: t, text: this.text }
                );
              },
            },
            {
              key: "guardedEncoding",
              value: function () {
                var t = [];
                return (
                  this.displayValue &&
                    t.push({
                      data: "00000000",
                      text: this.text[0],
                      options: {
                        textAlign: "left",
                        fontSize: this.fontSize,
                      },
                    }),
                  t.push({
                    data: "101",
                    options: { height: this.guardHeight },
                  }),
                  t.push({
                    data: this.encodeMiddleDigits(),
                    text: this.text.substring(1, 7),
                    options: { fontSize: this.fontSize },
                  }),
                  t.push({
                    data: "010101",
                    options: { height: this.guardHeight },
                  }),
                  this.displayValue &&
                    t.push({
                      data: "00000000",
                      text: this.text[7],
                      options: {
                        textAlign: "right",
                        fontSize: this.fontSize,
                      },
                    }),
                  t
                );
              },
            },
            {
              key: "encodeMiddleDigits",
              value: function () {
                var t = this.upcA[0],
                  e = this.upcA[this.upcA.length - 1],
                  n = g[parseInt(e)][parseInt(t)];
                return (0, c.default)(this.middleDigits, n);
              },
            },
          ]),
          e
        );
      })(d.default);
    e.default = v;
  },
  function (t, e, n) {
    "use strict";
    function r(t) {
      return t && t.__esModule ? t : { default: t };
    }
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.UPCE =
        e.UPC =
        e.EAN2 =
        e.EAN5 =
        e.EAN8 =
        e.EAN13 =
          void 0);
    var o = n(16),
      i = r(o),
      a = n(19),
      u = r(a),
      s = n(18),
      f = r(s),
      c = n(17),
      l = r(c),
      d = n(8),
      p = r(d),
      h = n(20),
      g = r(h);
    (e.EAN13 = i.default),
      (e.EAN8 = u.default),
      (e.EAN5 = f.default),
      (e.EAN2 = l.default),
      (e.UPC = p.default),
      (e.UPCE = g.default);
  },
  function (t, e, n) {
    "use strict";
    function r(t) {
      return t && t.__esModule ? t : { default: t };
    }
    function o(t) {
      var e = {};
      for (var n in s.default)
        s.default.hasOwnProperty(n) &&
          (t.hasAttribute("jsbarcode-" + n.toLowerCase()) &&
            (e[n] = t.getAttribute(
              "jsbarcode-" + n.toLowerCase()
            )),
          t.hasAttribute("data-" + n.toLowerCase()) &&
            (e[n] = t.getAttribute(
              "data-" + n.toLowerCase()
            )));
      return (
        (e.value =
          t.getAttribute("jsbarcode-value") ||
          t.getAttribute("data-value")),
        (e = (0, a.default)(e))
      );
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var i = n(5),
      a = r(i),
      u = n(6),
      s = r(u);
    e.default = o;
  },
  function (t, e, n) {
    "use strict";
    function r(t, e) {
      if (!(t instanceof e))
        throw new TypeError(
          "Cannot call a class as a function"
        );
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o = (function () {
        function t(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(t, r.key, r);
          }
        }
        return function (e, n, r) {
          return n && t(e.prototype, n), r && t(e, r), e;
        };
      })(),
      i = n(3),
      a = (function (t) {
        return t && t.__esModule ? t : { default: t };
      })(i),
      u = n(9),
      s = (function () {
        function t(e, n, o) {
          r(this, t),
            (this.canvas = e),
            (this.encodings = n),
            (this.options = o);
        }
        return (
          o(t, [
            {
              key: "render",
              value: function () {
                if (!this.canvas.getContext)
                  throw new Error(
                    "The browser does not support canvas."
                  );
                this.prepareCanvas();
                for (
                  var t = 0;
                  t < this.encodings.length;
                  t++
                ) {
                  var e = (0, a.default)(
                    this.options,
                    this.encodings[t].options
                  );
                  this.drawCanvasBarcode(
                    e,
                    this.encodings[t]
                  ),
                    this.drawCanvasText(
                      e,
                      this.encodings[t]
                    ),
                    this.moveCanvasDrawing(
                      this.encodings[t]
                    );
                }
                this.restoreCanvas();
              },
            },
            {
              key: "prepareCanvas",
              value: function () {
                var t = this.canvas.getContext("2d");
                t.save(),
                  (0, u.calculateEncodingAttributes)(
                    this.encodings,
                    this.options,
                    t
                  );
                var e = (0, u.getTotalWidthOfEncodings)(
                    this.encodings
                  ),
                  n = (0, u.getMaximumHeightOfEncodings)(
                    this.encodings
                  );
                (this.canvas.width =
                  e +
                  this.options.marginLeft +
                  this.options.marginRight),
                  (this.canvas.height = n),
                  t.clearRect(
                    0,
                    0,
                    this.canvas.width,
                    this.canvas.height
                  ),
                  this.options.background &&
                    ((t.fillStyle =
                      this.options.background),
                    t.fillRect(
                      0,
                      0,
                      this.canvas.width,
                      this.canvas.height
                    )),
                  t.translate(this.options.marginLeft, 0);
              },
            },
            {
              key: "drawCanvasBarcode",
              value: function (t, e) {
                var n,
                  r = this.canvas.getContext("2d"),
                  o = e.data;
                (n =
                  "top" == t.textPosition
                    ? t.marginTop +
                      t.fontSize +
                      t.textMargin
                    : t.marginTop),
                  (r.fillStyle = t.lineColor);
                for (var i = 0; i < o.length; i++) {
                  var a = i * t.width + e.barcodePadding;
                  "1" === o[i]
                    ? r.fillRect(a, n, t.width, t.height)
                    : o[i] &&
                      r.fillRect(
                        a,
                        n,
                        t.width,
                        t.height * o[i]
                      );
                }
              },
            },
            {
              key: "drawCanvasText",
              value: function (t, e) {
                var n = this.canvas.getContext("2d"),
                  r =
                    t.fontOptions +
                    " " +
                    t.fontSize +
                    "px " +
                    t.font;
                if (t.displayValue) {
                  var o, i;
                  (i =
                    "top" == t.textPosition
                      ? t.marginTop +
                        t.fontSize -
                        t.textMargin
                      : t.height +
                        t.textMargin +
                        t.marginTop +
                        t.fontSize),
                    (n.font = r),
                    "left" == t.textAlign ||
                    e.barcodePadding > 0
                      ? ((o = 0), (n.textAlign = "left"))
                      : "right" == t.textAlign
                      ? ((o = e.width - 1),
                        (n.textAlign = "right"))
                      : ((o = e.width / 2),
                        (n.textAlign = "center")),
                    n.fillText(e.text, o, i);
                }
              },
            },
            {
              key: "moveCanvasDrawing",
              value: function (t) {
                this.canvas
                  .getContext("2d")
                  .translate(t.width, 0);
              },
            },
            {
              key: "restoreCanvas",
              value: function () {
                this.canvas.getContext("2d").restore();
              },
            },
          ]),
          t
        );
      })();
    e.default = s;
  },
  function (t, e, n) {
    "use strict";
    function r(t) {
      return t && t.__esModule ? t : { default: t };
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o = n(23),
      i = r(o),
      a = n(26),
      u = r(a),
      s = n(25),
      f = r(s);
    e.default = {
      CanvasRenderer: i.default,
      SVGRenderer: u.default,
      ObjectRenderer: f.default,
    };
  },
  function (t, e, n) {
    "use strict";
    function r(t, e) {
      if (!(t instanceof e))
        throw new TypeError(
          "Cannot call a class as a function"
        );
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o = (function () {
        function t(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(t, r.key, r);
          }
        }
        return function (e, n, r) {
          return n && t(e.prototype, n), r && t(e, r), e;
        };
      })(),
      i = (function () {
        function t(e, n, o) {
          r(this, t),
            (this.object = e),
            (this.encodings = n),
            (this.options = o);
        }
        return (
          o(t, [
            {
              key: "render",
              value: function () {
                this.object.encodings = this.encodings;
              },
            },
          ]),
          t
        );
      })();
    e.default = i;
  },
  function (t, e, n) {
    "use strict";
    function r(t, e) {
      if (!(t instanceof e))
        throw new TypeError(
          "Cannot call a class as a function"
        );
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o = (function () {
        function t(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(t, r.key, r);
          }
        }
        return function (e, n, r) {
          return n && t(e.prototype, n), r && t(e, r), e;
        };
      })(),
      i = n(3),
      a = (function (t) {
        return t && t.__esModule ? t : { default: t };
      })(i),
      u = n(9),
      s = "http://www.w3.org/2000/svg",
      f = (function () {
        function t(e, n, o) {
          r(this, t),
            (this.svg = e),
            (this.encodings = n),
            (this.options = o),
            (this.document = o.xmlDocument || document);
        }
        return (
          o(t, [
            {
              key: "render",
              value: function () {
                var t = this.options.marginLeft;
                this.prepareSVG();
                for (
                  var e = 0;
                  e < this.encodings.length;
                  e++
                ) {
                  var n = this.encodings[e],
                    r = (0, a.default)(
                      this.options,
                      n.options
                    ),
                    o = this.createGroup(
                      t,
                      r.marginTop,
                      this.svg
                    );
                  this.setGroupOptions(o, r),
                    this.drawSvgBarcode(o, r, n),
                    this.drawSVGText(o, r, n),
                    (t += n.width);
                }
              },
            },
            {
              key: "prepareSVG",
              value: function () {
                for (; this.svg.firstChild; )
                  this.svg.removeChild(this.svg.firstChild);
                (0, u.calculateEncodingAttributes)(
                  this.encodings,
                  this.options
                );
                var t = (0, u.getTotalWidthOfEncodings)(
                    this.encodings
                  ),
                  e = (0, u.getMaximumHeightOfEncodings)(
                    this.encodings
                  ),
                  n =
                    t +
                    this.options.marginLeft +
                    this.options.marginRight;
                this.setSvgAttributes(n, e),
                  this.options.background &&
                    this.drawRect(
                      0,
                      0,
                      n,
                      e,
                      this.svg
                    ).setAttribute(
                      "style",
                      "fill:" +
                        this.options.background +
                        ";"
                    );
              },
            },
            {
              key: "drawSvgBarcode",
              value: function (t, e, n) {
                var r,
                  o = n.data;
                r =
                  "top" == e.textPosition
                    ? e.fontSize + e.textMargin
                    : 0;
                for (
                  var i = 0, a = 0, u = 0;
                  u < o.length;
                  u++
                )
                  (a = u * e.width + n.barcodePadding),
                    "1" === o[u]
                      ? i++
                      : i > 0 &&
                        (this.drawRect(
                          a - e.width * i,
                          r,
                          e.width * i,
                          e.height,
                          t
                        ),
                        (i = 0));
                i > 0 &&
                  this.drawRect(
                    a - e.width * (i - 1),
                    r,
                    e.width * i,
                    e.height,
                    t
                  );
              },
            },
            {
              key: "drawSVGText",
              value: function (t, e, n) {
                var r = this.document.createElementNS(
                  s,
                  "text"
                );
                if (e.displayValue) {
                  var o, i;
                  r.setAttribute(
                    "style",
                    "font:" +
                      e.fontOptions +
                      " " +
                      e.fontSize +
                      "px " +
                      e.font
                  ),
                    (i =
                      "top" == e.textPosition
                        ? e.fontSize - e.textMargin
                        : e.height +
                          e.textMargin +
                          e.fontSize),
                    "left" == e.textAlign ||
                    n.barcodePadding > 0
                      ? ((o = 0),
                        r.setAttribute(
                          "text-anchor",
                          "start"
                        ))
                      : "right" == e.textAlign
                      ? ((o = n.width - 1),
                        r.setAttribute(
                          "text-anchor",
                          "end"
                        ))
                      : ((o = n.width / 2),
                        r.setAttribute(
                          "text-anchor",
                          "middle"
                        )),
                    r.setAttribute("x", o),
                    r.setAttribute("y", i),
                    r.appendChild(
                      this.document.createTextNode(n.text)
                    ),
                    t.appendChild(r);
                }
              },
            },
            {
              key: "setSvgAttributes",
              value: function (t, e) {
                var n = this.svg;
                n.setAttribute("width", t + "px"),
                  n.setAttribute("height", e + "px"),
                  n.setAttribute("x", "0px"),
                  n.setAttribute("y", "0px"),
                  n.setAttribute(
                    "viewBox",
                    "0 0 " + t + " " + e
                  ),
                  n.setAttribute("xmlns", s),
                  n.setAttribute("version", "1.1"),
                  n.setAttribute(
                    "style",
                    "transform: translate(0,0)"
                  );
              },
            },
            {
              key: "createGroup",
              value: function (t, e, n) {
                var r = this.document.createElementNS(
                  s,
                  "g"
                );
                return (
                  r.setAttribute(
                    "transform",
                    "translate(" + t + ", " + e + ")"
                  ),
                  n.appendChild(r),
                  r
                );
              },
            },
            {
              key: "setGroupOptions",
              value: function (t, e) {
                t.setAttribute(
                  "style",
                  "fill:" + e.lineColor + ";"
                );
              },
            },
            {
              key: "drawRect",
              value: function (t, e, n, r, o) {
                var i = this.document.createElementNS(
                  s,
                  "rect"
                );
                return (
                  i.setAttribute("x", t),
                  i.setAttribute("y", e),
                  i.setAttribute("width", n),
                  i.setAttribute("height", r),
                  o.appendChild(i),
                  i
                );
              },
            },
          ]),
          t
        );
      })();
    e.default = f;
  },
]);
