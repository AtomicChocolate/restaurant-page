(() => {
  "use strict";
  var t = {
      426: (t, e, n) => {
        n.d(e, { Z: () => i });
        var r = n(645),
          o = n.n(r)()(function (t) {
            return t[1];
          });
        o.push([
          t.id,
          "* {\r\n\tfont-family: Gill Sans, sans-serif;\r\n\ttext-align: center;\r\n}\r\n\r\nh1 {\r\n    font-size: 5vw;\r\n\tmargin: auto;\r\n\tline-height: 1;\r\n}\r\n\r\nh2 {\r\n\tfont-size: 2vw;\r\n\tmargin: 0;\r\n\tmargin-top: 5px;\r\n}\r\n\r\nh3 {\r\n\tfont-size: 1.5vw;\r\n\tline-height: 0;\r\n}\r\n\r\nbutton {\r\n\tfont-size: 1vw;\r\n\tmargin: 0;\r\n\t/*margin: 0 0.5vw 0 0.5vw;*/\r\n}\r\n\r\n.menu-item {\r\n\twidth: 50%;\r\n\tdisplay: inline-block;\r\n\tmargin-bottom: 3px;\r\n\tbackground-color: #eee;\r\n}\r\n\r\ndiv .menu-item > p {\r\n\tpadding-left: 2.5%;\r\n}\r\n\r\ndiv .menu-item > img {\r\n\tmax-width: 95%;\r\n\theight: auto;\r\n}\r\n\r\n@media screen and (max-width: 1440px) {\r\n\tbutton {\r\n\t\tfont-size: 2vw;\r\n\t}\r\n\th3 {\r\n\t\tfont-size: 4vw;\r\n\t}\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n\th1 {\r\n\t\tfont-size: 10vw;\r\n\t}\r\n\th2 {\r\n\t\tfont-size: 5vw;\r\n\t}\r\n\th3 {\r\n\t\tfont-size: 4vw;\r\n\t}\r\n\tbutton {\r\n\t\tfont-size: 5vw;\r\n\t}\r\n\t.menu-item {\r\n\t\twidth: 90%;\r\n\t}\r\n}",
          "",
        ]);
        const i = o;
      },
      645: (t) => {
        t.exports = function (t) {
          var e = [];
          return (
            (e.toString = function () {
              return this.map(function (e) {
                var n = t(e);
                return e[2] ? "@media ".concat(e[2], " {").concat(n, "}") : n;
              }).join("");
            }),
            (e.i = function (t, n, r) {
              "string" == typeof t && (t = [[null, t, ""]]);
              var o = {};
              if (r)
                for (var i = 0; i < this.length; i++) {
                  var a = this[i][0];
                  null != a && (o[a] = !0);
                }
              for (var s = 0; s < t.length; s++) {
                var c = [].concat(t[s]);
                (r && o[c[0]]) ||
                  (n &&
                    (c[2]
                      ? (c[2] = "".concat(n, " and ").concat(c[2]))
                      : (c[2] = n)),
                  e.push(c));
              }
            }),
            e
          );
        };
      },
      379: (t, e, n) => {
        var r,
          o = (function () {
            var t = {};
            return function (e) {
              if (void 0 === t[e]) {
                var n = document.querySelector(e);
                if (
                  window.HTMLIFrameElement &&
                  n instanceof window.HTMLIFrameElement
                )
                  try {
                    n = n.contentDocument.head;
                  } catch (t) {
                    n = null;
                  }
                t[e] = n;
              }
              return t[e];
            };
          })(),
          i = [];
        function a(t) {
          for (var e = -1, n = 0; n < i.length; n++)
            if (i[n].identifier === t) {
              e = n;
              break;
            }
          return e;
        }
        function s(t, e) {
          for (var n = {}, r = [], o = 0; o < t.length; o++) {
            var s = t[o],
              c = e.base ? s[0] + e.base : s[0],
              u = n[c] || 0,
              l = "".concat(c, " ").concat(u);
            n[c] = u + 1;
            var d = a(l),
              h = { css: s[1], media: s[2], sourceMap: s[3] };
            -1 !== d
              ? (i[d].references++, i[d].updater(h))
              : i.push({ identifier: l, updater: p(h, e), references: 1 }),
              r.push(l);
          }
          return r;
        }
        function c(t) {
          var e = document.createElement("style"),
            r = t.attributes || {};
          if (void 0 === r.nonce) {
            var i = n.nc;
            i && (r.nonce = i);
          }
          if (
            (Object.keys(r).forEach(function (t) {
              e.setAttribute(t, r[t]);
            }),
            "function" == typeof t.insert)
          )
            t.insert(e);
          else {
            var a = o(t.insert || "head");
            if (!a)
              throw new Error(
                "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
              );
            a.appendChild(e);
          }
          return e;
        }
        var u,
          l =
            ((u = []),
            function (t, e) {
              return (u[t] = e), u.filter(Boolean).join("\n");
            });
        function d(t, e, n, r) {
          var o = n
            ? ""
            : r.media
            ? "@media ".concat(r.media, " {").concat(r.css, "}")
            : r.css;
          if (t.styleSheet) t.styleSheet.cssText = l(e, o);
          else {
            var i = document.createTextNode(o),
              a = t.childNodes;
            a[e] && t.removeChild(a[e]),
              a.length ? t.insertBefore(i, a[e]) : t.appendChild(i);
          }
        }
        function h(t, e, n) {
          var r = n.css,
            o = n.media,
            i = n.sourceMap;
          if (
            (o ? t.setAttribute("media", o) : t.removeAttribute("media"),
            i &&
              "undefined" != typeof btoa &&
              (r +=
                "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                  btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
                  " */"
                )),
            t.styleSheet)
          )
            t.styleSheet.cssText = r;
          else {
            for (; t.firstChild; ) t.removeChild(t.firstChild);
            t.appendChild(document.createTextNode(r));
          }
        }
        var f = null,
          m = 0;
        function p(t, e) {
          var n, r, o;
          if (e.singleton) {
            var i = m++;
            (n = f || (f = c(e))),
              (r = d.bind(null, n, i, !1)),
              (o = d.bind(null, n, i, !0));
          } else
            (n = c(e)),
              (r = h.bind(null, n, e)),
              (o = function () {
                !(function (t) {
                  if (null === t.parentNode) return !1;
                  t.parentNode.removeChild(t);
                })(n);
              });
          return (
            r(t),
            function (e) {
              if (e) {
                if (
                  e.css === t.css &&
                  e.media === t.media &&
                  e.sourceMap === t.sourceMap
                )
                  return;
                r((t = e));
              } else o();
            }
          );
        }
        t.exports = function (t, e) {
          (e = e || {}).singleton ||
            "boolean" == typeof e.singleton ||
            (e.singleton =
              (void 0 === r &&
                (r = Boolean(
                  window && document && document.all && !window.atob
                )),
              r));
          var n = s((t = t || []), e);
          return function (t) {
            if (
              ((t = t || []),
              "[object Array]" === Object.prototype.toString.call(t))
            ) {
              for (var r = 0; r < n.length; r++) {
                var o = a(n[r]);
                i[o].references--;
              }
              for (var c = s(t, e), u = 0; u < n.length; u++) {
                var l = a(n[u]);
                0 === i[l].references && (i[l].updater(), i.splice(l, 1));
              }
              n = c;
            }
          };
        };
      },
    },
    e = {};
  function n(r) {
    if (e[r]) return e[r].exports;
    var o = (e[r] = { id: r, exports: {} });
    return t[r](o, o.exports, n), o.exports;
  }
  (n.n = (t) => {
    var e = t && t.__esModule ? () => t.default : () => t;
    return n.d(e, { a: e }), e;
  }),
    (n.d = (t, e) => {
      for (var r in e)
        n.o(e, r) &&
          !n.o(t, r) &&
          Object.defineProperty(t, r, { enumerable: !0, get: e[r] });
    }),
    (n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
    (() => {
      const t = function () {
        const t = document.querySelector("#content");
        (t.innerHTML = ""),
          (t.innerHTML =
            '\n\t\t<header>\n\t\t\t<h2>Welcome to Untitled! The best restaurant with no name.</h2>\n\t\t\t<p>Welcome to the website for Untitled, our restaurant. Come spend your money here, I would write more but they only pay me minimum wage.</p>\n\t\t</header>\n\t\t<img src="imgs/home/pizzer.gif">\n\t');
      };
      var e = n(379),
        r = n.n(e),
        o = n(426);
      r()(o.Z, { insert: "head", singleton: !1 }), o.Z.locals;
      const i = document.querySelectorAll(".nav-btn");
      function a(e) {
        switch (
          (e.classList.contains("nav-active") ||
            (i.forEach((t) => {
              t.classList.remove("nav-active");
            }),
            e.classList.add("nav-active")),
          e.id)
        ) {
          case "homeBtn":
            t();
            break;
          case "menuBtn":
            !(function () {
              const t = document.querySelector("#content");
              (t.innerHTML = ""),
                (t.innerHTML =
                  '\n\t\t<header>\n\t\t\t<h2>Restaurant Menu</h2>\n\t\t\t<p>Check out some of our featured items that make our restaurant famous. To see the full menu, visit our restaurant in-person or check on Doordash or whatever.</p>\n\t\t</header>\n\n\t\t<div class="menu-item">\n\t\t\t<h3>Healthy Pizza</h3>\n\t\t\t<img src="imgs/menu/healthypizza.png">\n\t\t\t<p>We use advanced cooking techniques to make pizza healthier for everyone by reducing the number of slices you eat while still getting the same amount of food.</p>\n\t\t</div>\n\t\t<div class="menu-item">\n\t\t\t<h3>Telekinesis Pizza</h3>\n\t\t\t<img src="imgs/menu/floatingpizza.jpg">\n\t\t\t<p>If you\'re jealous of all the gifted people who can move things with their mind, this pizza is for you. Advanced cooking techniques make this pizza able to be moved by anyone\'s mind, no superpowers required.</p>\n\t\t</div>\n\t');
            })();
            break;
          case "contactBtn":
            !(function () {
              const t = document.querySelector("#content");
              (t.innerHTML = ""),
                (t.innerHTML =
                  '\n\t\t<header>\n\t\t\t<h2>Contact Us</h2>\n\t\t\t<p>Call us at (202)-555-0159.</p>\n\t\t</header>\n\n\t\t<h3>Or find us on social media:</h3>\n\t\t<a href="https://twitter.com">Twitter</a>\n\t\t<a href="https://www.youtube.com">YouTube</a>\n\t\t<a href="https://www.facebook.com">Facebook</a>\n\t');
            })();
            break;
          default:
            t();
        }
      }
      i.forEach((t) => {
        t.addEventListener("click", () => {
          console.log(`Click ${t.id}`), a(t);
        });
      }),
        a(document.getElementById("homeBtn"));
    })();
})();
