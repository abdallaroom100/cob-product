(() => {
  var e = {
      8771: () => {},
      3482: function (e, t, n) {
        var r, o, i;
        !(function (s, a) {
          "use strict";
          (o = [n(3550)]),
            void 0 ===
              (i =
                "function" ==
                typeof (r = function (e) {
                  var t = /(^|@)\S+:\d+/,
                    n = /^\s*at .*(\S+:\d+|\(native\))/m,
                    r = /^(eval@)?(\[native code])?$/;
                  return {
                    parse: function (e) {
                      if (
                        void 0 !== e.stacktrace ||
                        void 0 !== e["opera#sourceloc"]
                      )
                        return this.parseOpera(e);
                      if (e.stack && e.stack.match(n))
                        return this.parseV8OrIE(e);
                      if (e.stack) return this.parseFFOrSafari(e);
                      throw new Error("Cannot parse given Error object");
                    },
                    extractLocation: function (e) {
                      if (-1 === e.indexOf(":")) return [e];
                      var t = /(.+?)(?::(\d+))?(?::(\d+))?$/.exec(
                        e.replace(/[()]/g, "")
                      );
                      return [t[1], t[2] || void 0, t[3] || void 0];
                    },
                    parseV8OrIE: function (t) {
                      return t.stack
                        .split("\n")
                        .filter(function (e) {
                          return !!e.match(n);
                        }, this)
                        .map(function (t) {
                          t.indexOf("(eval ") > -1 &&
                            (t = t
                              .replace(/eval code/g, "eval")
                              .replace(/(\(eval at [^()]*)|(,.*$)/g, ""));
                          var n = t
                              .replace(/^\s+/, "")
                              .replace(/\(eval code/g, "(")
                              .replace(/^.*?\s+/, ""),
                            r = n.match(/ (\(.+\)$)/);
                          n = r ? n.replace(r[0], "") : n;
                          var o = this.extractLocation(r ? r[1] : n),
                            i = (r && n) || void 0,
                            s =
                              ["eval", "<anonymous>"].indexOf(o[0]) > -1
                                ? void 0
                                : o[0];
                          return new e({
                            functionName: i,
                            fileName: s,
                            lineNumber: o[1],
                            columnNumber: o[2],
                            source: t,
                          });
                        }, this);
                    },
                    parseFFOrSafari: function (t) {
                      return t.stack
                        .split("\n")
                        .filter(function (e) {
                          return !e.match(r);
                        }, this)
                        .map(function (t) {
                          if (
                            (t.indexOf(" > eval") > -1 &&
                              (t = t.replace(
                                / line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g,
                                ":$1"
                              )),
                            -1 === t.indexOf("@") && -1 === t.indexOf(":"))
                          )
                            return new e({ functionName: t });
                          var n = /((.*".+"[^@]*)?[^@]*)(?:@)/,
                            r = t.match(n),
                            o = r && r[1] ? r[1] : void 0,
                            i = this.extractLocation(t.replace(n, ""));
                          return new e({
                            functionName: o,
                            fileName: i[0],
                            lineNumber: i[1],
                            columnNumber: i[2],
                            source: t,
                          });
                        }, this);
                    },
                    parseOpera: function (e) {
                      return !e.stacktrace ||
                        (e.message.indexOf("\n") > -1 &&
                          e.message.split("\n").length >
                            e.stacktrace.split("\n").length)
                        ? this.parseOpera9(e)
                        : e.stack
                        ? this.parseOpera11(e)
                        : this.parseOpera10(e);
                    },
                    parseOpera9: function (t) {
                      for (
                        var n = /Line (\d+).*script (?:in )?(\S+)/i,
                          r = t.message.split("\n"),
                          o = [],
                          i = 2,
                          s = r.length;
                        i < s;
                        i += 2
                      ) {
                        var a = n.exec(r[i]);
                        a &&
                          o.push(
                            new e({
                              fileName: a[2],
                              lineNumber: a[1],
                              source: r[i],
                            })
                          );
                      }
                      return o;
                    },
                    parseOpera10: function (t) {
                      for (
                        var n =
                            /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i,
                          r = t.stacktrace.split("\n"),
                          o = [],
                          i = 0,
                          s = r.length;
                        i < s;
                        i += 2
                      ) {
                        var a = n.exec(r[i]);
                        a &&
                          o.push(
                            new e({
                              functionName: a[3] || void 0,
                              fileName: a[2],
                              lineNumber: a[1],
                              source: r[i],
                            })
                          );
                      }
                      return o;
                    },
                    parseOpera11: function (n) {
                      return n.stack
                        .split("\n")
                        .filter(function (e) {
                          return !!e.match(t) && !e.match(/^Error created at/);
                        }, this)
                        .map(function (t) {
                          var n,
                            r = t.split("@"),
                            o = this.extractLocation(r.pop()),
                            i = r.shift() || "",
                            s =
                              i
                                .replace(/<anonymous function(: (\w+))?>/, "$2")
                                .replace(/\([^)]*\)/g, "") || void 0;
                          i.match(/\(([^)]*)\)/) &&
                            (n = i.replace(/^[^(]+\(([^)]*)\)$/, "$1"));
                          var a =
                            void 0 === n || "[arguments not available]" === n
                              ? void 0
                              : n.split(",");
                          return new e({
                            functionName: s,
                            args: a,
                            fileName: o[0],
                            lineNumber: o[1],
                            columnNumber: o[2],
                            source: t,
                          });
                        }, this);
                    },
                  };
                })
                  ? r.apply(t, o)
                  : r) || (e.exports = i);
        })();
      },
      3550: function (e, t) {
        var n, r, o;
        !(function (i, s) {
          "use strict";
          (r = []),
            void 0 ===
              (o =
                "function" ==
                typeof (n = function () {
                  function e(e) {
                    return e.charAt(0).toUpperCase() + e.substring(1);
                  }
                  function t(e) {
                    return function () {
                      return this[e];
                    };
                  }
                  var n = ["isConstructor", "isEval", "isNative", "isToplevel"],
                    r = ["columnNumber", "lineNumber"],
                    o = ["fileName", "functionName", "source"],
                    i = n.concat(r, o, ["args"], ["evalOrigin"]);
                  function s(t) {
                    if (t)
                      for (var n = 0; n < i.length; n++)
                        void 0 !== t[i[n]] && this["set" + e(i[n])](t[i[n]]);
                  }
                  (s.prototype = {
                    getArgs: function () {
                      return this.args;
                    },
                    setArgs: function (e) {
                      if (
                        "[object Array]" !== Object.prototype.toString.call(e)
                      )
                        throw new TypeError("Args must be an Array");
                      this.args = e;
                    },
                    getEvalOrigin: function () {
                      return this.evalOrigin;
                    },
                    setEvalOrigin: function (e) {
                      if (e instanceof s) this.evalOrigin = e;
                      else {
                        if (!(e instanceof Object))
                          throw new TypeError(
                            "Eval Origin must be an Object or StackFrame"
                          );
                        this.evalOrigin = new s(e);
                      }
                    },
                    toString: function () {
                      var e = this.getFileName() || "",
                        t = this.getLineNumber() || "",
                        n = this.getColumnNumber() || "",
                        r = this.getFunctionName() || "";
                      return this.getIsEval()
                        ? e
                          ? "[eval] (" + e + ":" + t + ":" + n + ")"
                          : "[eval]:" + t + ":" + n
                        : r
                        ? r + " (" + e + ":" + t + ":" + n + ")"
                        : e + ":" + t + ":" + n;
                    },
                  }),
                    (s.fromString = function (e) {
                      var t = e.indexOf("("),
                        n = e.lastIndexOf(")"),
                        r = e.substring(0, t),
                        o = e.substring(t + 1, n).split(","),
                        i = e.substring(n + 1);
                      if (0 === i.indexOf("@"))
                        var a = /@(.+?)(?::(\d+))?(?::(\d+))?$/.exec(i, ""),
                          c = a[1],
                          u = a[2],
                          l = a[3];
                      return new s({
                        functionName: r,
                        args: o || void 0,
                        fileName: c,
                        lineNumber: u || void 0,
                        columnNumber: l || void 0,
                      });
                    });
                  for (var a = 0; a < n.length; a++)
                    (s.prototype["get" + e(n[a])] = t(n[a])),
                      (s.prototype["set" + e(n[a])] = (function (e) {
                        return function (t) {
                          this[e] = Boolean(t);
                        };
                      })(n[a]));
                  for (var c = 0; c < r.length; c++)
                    (s.prototype["get" + e(r[c])] = t(r[c])),
                      (s.prototype["set" + e(r[c])] = (function (e) {
                        return function (t) {
                          if (((n = t), isNaN(parseFloat(n)) || !isFinite(n)))
                            throw new TypeError(e + " must be a Number");
                          var n;
                          this[e] = Number(t);
                        };
                      })(r[c]));
                  for (var u = 0; u < o.length; u++)
                    (s.prototype["get" + e(o[u])] = t(o[u])),
                      (s.prototype["set" + e(o[u])] = (function (e) {
                        return function (t) {
                          this[e] = String(t);
                        };
                      })(o[u]));
                  return s;
                })
                  ? n.apply(t, r)
                  : n) || (e.exports = o);
        })();
      },
      8047: function (e, t, n) {
        var r;
        !(function (o, i) {
          "use strict";
          var s = "function",
            a = "undefined",
            c = "object",
            u = "string",
            l = "major",
            d = "model",
            p = "name",
            f = "type",
            m = "vendor",
            h = "version",
            b = "architecture",
            w = "console",
            v = "mobile",
            g = "tablet",
            y = "smarttv",
            x = "wearable",
            E = "embedded",
            _ = "Amazon",
            S = "Apple",
            k = "ASUS",
            C = "BlackBerry",
            A = "Browser",
            T = "Chrome",
            I = "Firefox",
            O = "Google",
            N = "Huawei",
            R = "LG",
            P = "Microsoft",
            D = "Motorola",
            L = "Opera",
            M = "Samsung",
            j = "Sharp",
            $ = "Sony",
            U = "Xiaomi",
            z = "Zebra",
            F = "Facebook",
            V = "Chromium OS",
            B = "Mac OS",
            H = function (e) {
              for (var t = {}, n = 0; n < e.length; n++)
                t[e[n].toUpperCase()] = e[n];
              return t;
            },
            q = function (e, t) {
              return typeof e === u && -1 !== K(t).indexOf(K(e));
            },
            K = function (e) {
              return e.toLowerCase();
            },
            W = function (e, t) {
              if (typeof e === u)
                return (
                  (e = e.replace(/^\s\s*/, "")),
                  typeof t === a ? e : e.substring(0, 500)
                );
            },
            X = function (e, t) {
              for (var n, r, o, a, u, l, d = 0; d < t.length && !u; ) {
                var p = t[d],
                  f = t[d + 1];
                for (n = r = 0; n < p.length && !u && p[n]; )
                  if ((u = p[n++].exec(e)))
                    for (o = 0; o < f.length; o++)
                      (l = u[++r]),
                        typeof (a = f[o]) === c && a.length > 0
                          ? 2 === a.length
                            ? typeof a[1] == s
                              ? (this[a[0]] = a[1].call(this, l))
                              : (this[a[0]] = a[1])
                            : 3 === a.length
                            ? typeof a[1] !== s || (a[1].exec && a[1].test)
                              ? (this[a[0]] = l ? l.replace(a[1], a[2]) : i)
                              : (this[a[0]] = l ? a[1].call(this, l, a[2]) : i)
                            : 4 === a.length &&
                              (this[a[0]] = l
                                ? a[3].call(this, l.replace(a[1], a[2]))
                                : i)
                          : (this[a] = l || i);
                d += 2;
              }
            },
            Y = function (e, t) {
              for (var n in t)
                if (typeof t[n] === c && t[n].length > 0) {
                  for (var r = 0; r < t[n].length; r++)
                    if (q(t[n][r], e)) return "?" === n ? i : n;
                } else if (q(t[n], e)) return "?" === n ? i : n;
              return e;
            },
            G = {
              ME: "4.90",
              "NT 3.11": "NT3.51",
              "NT 4.0": "NT4.0",
              2e3: "NT 5.0",
              XP: ["NT 5.1", "NT 5.2"],
              Vista: "NT 6.0",
              7: "NT 6.1",
              8: "NT 6.2",
              8.1: "NT 6.3",
              10: ["NT 6.4", "NT 10.0"],
              RT: "ARM",
            },
            J = {
              browser: [
                [/\b(?:crmo|crios)\/([\w\.]+)/i],
                [h, [p, "Chrome"]],
                [/edg(?:e|ios|a)?\/([\w\.]+)/i],
                [h, [p, "Edge"]],
                [
                  /(opera mini)\/([-\w\.]+)/i,
                  /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
                  /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i,
                ],
                [p, h],
                [/opios[\/ ]+([\w\.]+)/i],
                [h, [p, L + " Mini"]],
                [/\bopr\/([\w\.]+)/i],
                [h, [p, L]],
                [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
                [h, [p, "Baidu"]],
                [
                  /(kindle)\/([\w\.]+)/i,
                  /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,
                  /(avant|iemobile|slim)\s?(?:browser)?[\/ ]?([\w\.]*)/i,
                  /(?:ms|\()(ie) ([\w\.]+)/i,
                  /(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,
                  /(heytap|ovi)browser\/([\d\.]+)/i,
                  /(weibo)__([\d\.]+)/i,
                ],
                [p, h],
                [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
                [h, [p, "UC" + A]],
                [
                  /microm.+\bqbcore\/([\w\.]+)/i,
                  /\bqbcore\/([\w\.]+).+microm/i,
                  /micromessenger\/([\w\.]+)/i,
                ],
                [h, [p, "WeChat"]],
                [/konqueror\/([\w\.]+)/i],
                [h, [p, "Konqueror"]],
                [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
                [h, [p, "IE"]],
                [/ya(?:search)?browser\/([\w\.]+)/i],
                [h, [p, "Yandex"]],
                [/slbrowser\/([\w\.]+)/i],
                [h, [p, "Smart Lenovo " + A]],
                [/(avast|avg)\/([\w\.]+)/i],
                [[p, /(.+)/, "$1 Secure " + A], h],
                [/\bfocus\/([\w\.]+)/i],
                [h, [p, I + " Focus"]],
                [/\bopt\/([\w\.]+)/i],
                [h, [p, L + " Touch"]],
                [/coc_coc\w+\/([\w\.]+)/i],
                [h, [p, "Coc Coc"]],
                [/dolfin\/([\w\.]+)/i],
                [h, [p, "Dolphin"]],
                [/coast\/([\w\.]+)/i],
                [h, [p, L + " Coast"]],
                [/miuibrowser\/([\w\.]+)/i],
                [h, [p, "MIUI " + A]],
                [/fxios\/([-\w\.]+)/i],
                [h, [p, I]],
                [/\bqihu|(qi?ho?o?|360)browser/i],
                [[p, "360 " + A]],
                [/(oculus|sailfish|huawei|vivo)browser\/([\w\.]+)/i],
                [[p, /(.+)/, "$1 " + A], h],
                [/samsungbrowser\/([\w\.]+)/i],
                [h, [p, M + " Internet"]],
                [/(comodo_dragon)\/([\w\.]+)/i],
                [[p, /_/g, " "], h],
                [/metasr[\/ ]?([\d\.]+)/i],
                [h, [p, "Sogou Explorer"]],
                [/(sogou)mo\w+\/([\d\.]+)/i],
                [[p, "Sogou Mobile"], h],
                [
                  /(electron)\/([\w\.]+) safari/i,
                  /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
                  /m?(qqbrowser|2345Explorer)[\/ ]?([\w\.]+)/i,
                ],
                [p, h],
                [/(lbbrowser)/i, /\[(linkedin)app\]/i],
                [p],
                [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
                [[p, F], h],
                [
                  /(Klarna)\/([\w\.]+)/i,
                  /(kakao(?:talk|story))[\/ ]([\w\.]+)/i,
                  /(naver)\(.*?(\d+\.[\w\.]+).*\)/i,
                  /safari (line)\/([\w\.]+)/i,
                  /\b(line)\/([\w\.]+)\/iab/i,
                  /(alipay)client\/([\w\.]+)/i,
                  /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i,
                ],
                [p, h],
                [/\bgsa\/([\w\.]+) .*safari\//i],
                [h, [p, "GSA"]],
                [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
                [h, [p, "TikTok"]],
                [/headlesschrome(?:\/([\w\.]+)| )/i],
                [h, [p, T + " Headless"]],
                [/ wv\).+(chrome)\/([\w\.]+)/i],
                [[p, T + " WebView"], h],
                [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
                [h, [p, "Android " + A]],
                [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
                [p, h],
                [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
                [h, [p, "Mobile Safari"]],
                [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
                [h, p],
                [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
                [
                  p,
                  [
                    h,
                    Y,
                    {
                      "1.0": "/8",
                      1.2: "/1",
                      1.3: "/3",
                      "2.0": "/412",
                      "2.0.2": "/416",
                      "2.0.3": "/417",
                      "2.0.4": "/419",
                      "?": "/",
                    },
                  ],
                ],
                [/(webkit|khtml)\/([\w\.]+)/i],
                [p, h],
                [/(navigator|netscape\d?)\/([-\w\.]+)/i],
                [[p, "Netscape"], h],
                [/mobile vr; rv:([\w\.]+)\).+firefox/i],
                [h, [p, I + " Reality"]],
                [
                  /ekiohf.+(flow)\/([\w\.]+)/i,
                  /(swiftfox)/i,
                  /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,
                  /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,
                  /(firefox)\/([\w\.]+)/i,
                  /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,
                  /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
                  /(links) \(([\w\.]+)/i,
                  /panasonic;(viera)/i,
                ],
                [p, h],
                [/(cobalt)\/([\w\.]+)/i],
                [p, [h, /master.|lts./, ""]],
              ],
              cpu: [
                [/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],
                [[b, "amd64"]],
                [/(ia32(?=;))/i],
                [[b, K]],
                [/((?:i[346]|x)86)[;\)]/i],
                [[b, "ia32"]],
                [/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
                [[b, "arm64"]],
                [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
                [[b, "armhf"]],
                [/windows (ce|mobile); ppc;/i],
                [[b, "arm"]],
                [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
                [[b, /ower/, "", K]],
                [/(sun4\w)[;\)]/i],
                [[b, "sparc"]],
                [
                  /((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i,
                ],
                [[b, K]],
              ],
              device: [
                [
                  /\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i,
                ],
                [d, [m, M], [f, g]],
                [
                  /\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,
                  /samsung[- ]([-\w]+)/i,
                  /sec-(sgh\w+)/i,
                ],
                [d, [m, M], [f, v]],
                [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
                [d, [m, S], [f, v]],
                [
                  /\((ipad);[-\w\),; ]+apple/i,
                  /applecoremedia\/[\w\.]+ \((ipad)/i,
                  /\b(ipad)\d\d?,\d\d?[;\]].+ios/i,
                ],
                [d, [m, S], [f, g]],
                [/(macintosh);/i],
                [d, [m, S]],
                [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
                [d, [m, j], [f, v]],
                [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],
                [d, [m, N], [f, g]],
                [
                  /(?:huawei|honor)([-\w ]+)[;\)]/i,
                  /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i,
                ],
                [d, [m, N], [f, v]],
                [
                  /\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i,
                  /\b; (\w+) build\/hm\1/i,
                  /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
                  /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,
                  /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i,
                  /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i,
                ],
                [
                  [d, /_/g, " "],
                  [m, U],
                  [f, v],
                ],
                [
                  /oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i,
                  /\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i,
                ],
                [
                  [d, /_/g, " "],
                  [m, U],
                  [f, g],
                ],
                [
                  /; (\w+) bui.+ oppo/i,
                  /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i,
                ],
                [d, [m, "OPPO"], [f, v]],
                [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
                [d, [m, "Vivo"], [f, v]],
                [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
                [d, [m, "Realme"], [f, v]],
                [
                  /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
                  /\bmot(?:orola)?[- ](\w*)/i,
                  /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i,
                ],
                [d, [m, D], [f, v]],
                [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
                [d, [m, D], [f, g]],
                [
                  /((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i,
                ],
                [d, [m, R], [f, g]],
                [
                  /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
                  /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,
                  /\blg-?([\d\w]+) bui/i,
                ],
                [d, [m, R], [f, v]],
                [
                  /(ideatab[-\w ]+)/i,
                  /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i,
                ],
                [d, [m, "Lenovo"], [f, g]],
                [
                  /(?:maemo|nokia).*(n900|lumia \d+)/i,
                  /nokia[-_ ]?([-\w\.]*)/i,
                ],
                [
                  [d, /_/g, " "],
                  [m, "Nokia"],
                  [f, v],
                ],
                [/(pixel c)\b/i],
                [d, [m, O], [f, g]],
                [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
                [d, [m, O], [f, v]],
                [
                  /droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i,
                ],
                [d, [m, $], [f, v]],
                [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
                [
                  [d, "Xperia Tablet"],
                  [m, $],
                  [f, g],
                ],
                [
                  / (kb2005|in20[12]5|be20[12][59])\b/i,
                  /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i,
                ],
                [d, [m, "OnePlus"], [f, v]],
                [
                  /(alexa)webm/i,
                  /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i,
                  /(kf[a-z]+)( bui|\)).+silk\//i,
                ],
                [d, [m, _], [f, g]],
                [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
                [
                  [d, /(.+)/g, "Fire Phone $1"],
                  [m, _],
                  [f, v],
                ],
                [/(playbook);[-\w\),; ]+(rim)/i],
                [d, m, [f, g]],
                [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
                [d, [m, C], [f, v]],
                [
                  /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i,
                ],
                [d, [m, k], [f, g]],
                [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
                [d, [m, k], [f, v]],
                [/(nexus 9)/i],
                [d, [m, "HTC"], [f, g]],
                [
                  /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
                  /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
                  /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i,
                ],
                [m, [d, /_/g, " "], [f, v]],
                [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
                [d, [m, "Acer"], [f, g]],
                [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
                [d, [m, "Meizu"], [f, v]],
                [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
                [d, [m, "Ulefone"], [f, v]],
                [
                  /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno)[-_ ]?([-\w]*)/i,
                  /(hp) ([\w ]+\w)/i,
                  /(asus)-?(\w+)/i,
                  /(microsoft); (lumia[\w ]+)/i,
                  /(lenovo)[-_ ]?([-\w]+)/i,
                  /(jolla)/i,
                  /(oppo) ?([\w ]+) bui/i,
                ],
                [m, d, [f, v]],
                [
                  /(kobo)\s(ereader|touch)/i,
                  /(archos) (gamepad2?)/i,
                  /(hp).+(touchpad(?!.+tablet)|tablet)/i,
                  /(kindle)\/([\w\.]+)/i,
                  /(nook)[\w ]+build\/(\w+)/i,
                  /(dell) (strea[kpr\d ]*[\dko])/i,
                  /(le[- ]+pan)[- ]+(\w{1,9}) bui/i,
                  /(trinity)[- ]*(t\d{3}) bui/i,
                  /(gigaset)[- ]+(q\w{1,9}) bui/i,
                  /(vodafone) ([\w ]+)(?:\)| bui)/i,
                ],
                [m, d, [f, g]],
                [/(surface duo)/i],
                [d, [m, P], [f, g]],
                [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
                [d, [m, "Fairphone"], [f, v]],
                [/(u304aa)/i],
                [d, [m, "AT&T"], [f, v]],
                [/\bsie-(\w*)/i],
                [d, [m, "Siemens"], [f, v]],
                [/\b(rct\w+) b/i],
                [d, [m, "RCA"], [f, g]],
                [/\b(venue[\d ]{2,7}) b/i],
                [d, [m, "Dell"], [f, g]],
                [/\b(q(?:mv|ta)\w+) b/i],
                [d, [m, "Verizon"], [f, g]],
                [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
                [d, [m, "Barnes & Noble"], [f, g]],
                [/\b(tm\d{3}\w+) b/i],
                [d, [m, "NuVision"], [f, g]],
                [/\b(k88) b/i],
                [d, [m, "ZTE"], [f, g]],
                [/\b(nx\d{3}j) b/i],
                [d, [m, "ZTE"], [f, v]],
                [/\b(gen\d{3}) b.+49h/i],
                [d, [m, "Swiss"], [f, v]],
                [/\b(zur\d{3}) b/i],
                [d, [m, "Swiss"], [f, g]],
                [/\b((zeki)?tb.*\b) b/i],
                [d, [m, "Zeki"], [f, g]],
                [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
                [[m, "Dragon Touch"], d, [f, g]],
                [/\b(ns-?\w{0,9}) b/i],
                [d, [m, "Insignia"], [f, g]],
                [/\b((nxa|next)-?\w{0,9}) b/i],
                [d, [m, "NextBook"], [f, g]],
                [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
                [[m, "Voice"], d, [f, v]],
                [/\b(lvtel\-)?(v1[12]) b/i],
                [[m, "LvTel"], d, [f, v]],
                [/\b(ph-1) /i],
                [d, [m, "Essential"], [f, v]],
                [/\b(v(100md|700na|7011|917g).*\b) b/i],
                [d, [m, "Envizen"], [f, g]],
                [/\b(trio[-\w\. ]+) b/i],
                [d, [m, "MachSpeed"], [f, g]],
                [/\btu_(1491) b/i],
                [d, [m, "Rotor"], [f, g]],
                [/(shield[\w ]+) b/i],
                [d, [m, "Nvidia"], [f, g]],
                [/(sprint) (\w+)/i],
                [m, d, [f, v]],
                [/(kin\.[onetw]{3})/i],
                [
                  [d, /\./g, " "],
                  [m, P],
                  [f, v],
                ],
                [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
                [d, [m, z], [f, g]],
                [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
                [d, [m, z], [f, v]],
                [/smart-tv.+(samsung)/i],
                [m, [f, y]],
                [/hbbtv.+maple;(\d+)/i],
                [
                  [d, /^/, "SmartTV"],
                  [m, M],
                  [f, y],
                ],
                [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
                [
                  [m, R],
                  [f, y],
                ],
                [/(apple) ?tv/i],
                [m, [d, S + " TV"], [f, y]],
                [/crkey/i],
                [
                  [d, T + "cast"],
                  [m, O],
                  [f, y],
                ],
                [/droid.+aft(\w+)( bui|\))/i],
                [d, [m, _], [f, y]],
                [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
                [d, [m, j], [f, y]],
                [/(bravia[\w ]+)( bui|\))/i],
                [d, [m, $], [f, y]],
                [/(mitv-\w{5}) bui/i],
                [d, [m, U], [f, y]],
                [/Hbbtv.*(technisat) (.*);/i],
                [m, d, [f, y]],
                [
                  /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
                  /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i,
                ],
                [
                  [m, W],
                  [d, W],
                  [f, y],
                ],
                [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
                [[f, y]],
                [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
                [m, d, [f, w]],
                [/droid.+; (shield) bui/i],
                [d, [m, "Nvidia"], [f, w]],
                [/(playstation [345portablevi]+)/i],
                [d, [m, $], [f, w]],
                [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
                [d, [m, P], [f, w]],
                [/((pebble))app/i],
                [m, d, [f, x]],
                [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
                [d, [m, S], [f, x]],
                [/droid.+; (glass) \d/i],
                [d, [m, O], [f, x]],
                [/droid.+; (wt63?0{2,3})\)/i],
                [d, [m, z], [f, x]],
                [/(quest( 2| pro)?)/i],
                [d, [m, F], [f, x]],
                [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
                [m, [f, E]],
                [/(aeobc)\b/i],
                [d, [m, _], [f, E]],
                [
                  /droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i,
                ],
                [d, [f, v]],
                [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
                [d, [f, g]],
                [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
                [[f, g]],
                [
                  /(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i,
                ],
                [[f, v]],
                [/(android[-\w\. ]{0,9});.+buil/i],
                [d, [m, "Generic"]],
              ],
              engine: [
                [/windows.+ edge\/([\w\.]+)/i],
                [h, [p, "EdgeHTML"]],
                [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
                [h, [p, "Blink"]],
                [
                  /(presto)\/([\w\.]+)/i,
                  /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,
                  /ekioh(flow)\/([\w\.]+)/i,
                  /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,
                  /(icab)[\/ ]([23]\.[\d\.]+)/i,
                  /\b(libweb)/i,
                ],
                [p, h],
                [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
                [h, p],
              ],
              os: [
                [/microsoft (windows) (vista|xp)/i],
                [p, h],
                [/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i],
                [p, [h, Y, G]],
                [
                  /windows nt 6\.2; (arm)/i,
                  /windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i,
                  /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i,
                ],
                [
                  [h, Y, G],
                  [p, "Windows"],
                ],
                [
                  /ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,
                  /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,
                  /cfnetwork\/.+darwin/i,
                ],
                [
                  [h, /_/g, "."],
                  [p, "iOS"],
                ],
                [
                  /(mac os x) ?([\w\. ]*)/i,
                  /(macintosh|mac_powerpc\b)(?!.+haiku)/i,
                ],
                [
                  [p, B],
                  [h, /_/g, "."],
                ],
                [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
                [h, p],
                [
                  /(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,
                  /(blackberry)\w*\/([\w\.]*)/i,
                  /(tizen|kaios)[\/ ]([\w\.]+)/i,
                  /\((series40);/i,
                ],
                [p, h],
                [/\(bb(10);/i],
                [h, [p, C]],
                [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
                [h, [p, "Symbian"]],
                [
                  /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i,
                ],
                [h, [p, I + " OS"]],
                [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
                [h, [p, "webOS"]],
                [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
                [h, [p, "watchOS"]],
                [/crkey\/([\d\.]+)/i],
                [h, [p, T + "cast"]],
                [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
                [[p, V], h],
                [
                  /panasonic;(viera)/i,
                  /(netrange)mmh/i,
                  /(nettv)\/(\d+\.[\w\.]+)/i,
                  /(nintendo|playstation) ([wids345portablevuch]+)/i,
                  /(xbox); +xbox ([^\);]+)/i,
                  /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,
                  /(mint)[\/\(\) ]?(\w*)/i,
                  /(mageia|vectorlinux)[; ]/i,
                  /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
                  /(hurd|linux) ?([\w\.]*)/i,
                  /(gnu) ?([\w\.]*)/i,
                  /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,
                  /(haiku) (\w+)/i,
                ],
                [p, h],
                [/(sunos) ?([\w\.\d]*)/i],
                [[p, "Solaris"], h],
                [
                  /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,
                  /(aix) ((\d)(?=\.|\)| )[\w\.])*/i,
                  /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,
                  /(unix) ?([\w\.]*)/i,
                ],
                [p, h],
              ],
            },
            Q = function (e, t) {
              if ((typeof e === c && ((t = e), (e = i)), !(this instanceof Q)))
                return new Q(e, t).getResult();
              var n = typeof o !== a && o.navigator ? o.navigator : i,
                r = e || (n && n.userAgent ? n.userAgent : ""),
                w = n && n.userAgentData ? n.userAgentData : i,
                y = t
                  ? (function (e, t) {
                      var n = {};
                      for (var r in e)
                        t[r] && t[r].length % 2 == 0
                          ? (n[r] = t[r].concat(e[r]))
                          : (n[r] = e[r]);
                      return n;
                    })(J, t)
                  : J,
                x = n && n.userAgent == r;
              return (
                (this.getBrowser = function () {
                  var e,
                    t = {};
                  return (
                    (t[p] = i),
                    (t[h] = i),
                    X.call(t, r, y.browser),
                    (t[l] =
                      typeof (e = t[h]) === u
                        ? e.replace(/[^\d\.]/g, "").split(".")[0]
                        : i),
                    x &&
                      n &&
                      n.brave &&
                      typeof n.brave.isBrave == s &&
                      (t[p] = "Brave"),
                    t
                  );
                }),
                (this.getCPU = function () {
                  var e = {};
                  return (e[b] = i), X.call(e, r, y.cpu), e;
                }),
                (this.getDevice = function () {
                  var e = {};
                  return (
                    (e[m] = i),
                    (e[d] = i),
                    (e[f] = i),
                    X.call(e, r, y.device),
                    x && !e[f] && w && w.mobile && (e[f] = v),
                    x &&
                      "Macintosh" == e[d] &&
                      n &&
                      typeof n.standalone !== a &&
                      n.maxTouchPoints &&
                      n.maxTouchPoints > 2 &&
                      ((e[d] = "iPad"), (e[f] = g)),
                    e
                  );
                }),
                (this.getEngine = function () {
                  var e = {};
                  return (e[p] = i), (e[h] = i), X.call(e, r, y.engine), e;
                }),
                (this.getOS = function () {
                  var e = {};
                  return (
                    (e[p] = i),
                    (e[h] = i),
                    X.call(e, r, y.os),
                    x &&
                      !e[p] &&
                      w &&
                      "Unknown" != w.platform &&
                      (e[p] = w.platform
                        .replace(/chrome os/i, V)
                        .replace(/macos/i, B)),
                    e
                  );
                }),
                (this.getResult = function () {
                  return {
                    ua: this.getUA(),
                    browser: this.getBrowser(),
                    engine: this.getEngine(),
                    os: this.getOS(),
                    device: this.getDevice(),
                    cpu: this.getCPU(),
                  };
                }),
                (this.getUA = function () {
                  return r;
                }),
                (this.setUA = function (e) {
                  return (
                    (r = typeof e === u && e.length > 500 ? W(e, 500) : e), this
                  );
                }),
                this.setUA(r),
                this
              );
            };
          (Q.VERSION = "1.0.37"),
            (Q.BROWSER = H([p, h, l])),
            (Q.CPU = H([b])),
            (Q.DEVICE = H([d, m, f, w, v, y, g, x, E])),
            (Q.ENGINE = Q.OS = H([p, h])),
            typeof t !== a
              ? (e.exports && (t = e.exports = Q), (t.UAParser = Q))
              : n.amdO
              ? (r = function () {
                  return Q;
                }.call(t, n, t, e)) === i || (e.exports = r)
              : typeof o !== a && (o.UAParser = Q);
          var Z = typeof o !== a && (o.jQuery || o.Zepto);
          if (Z && !Z.ua) {
            var ee = new Q();
            (Z.ua = ee.getResult()),
              (Z.ua.get = function () {
                return ee.getUA();
              }),
              (Z.ua.set = function (e) {
                ee.setUA(e);
                var t = ee.getResult();
                for (var n in t) Z.ua[n] = t[n];
              });
          }
        })("object" == typeof window ? window : this);
      },
      1404: () => {},
      9666: () => {},
      9350: () => {},
      9661: () => {},
      7019: () => {},
      2475: () => {},
      6583: () => {},
      7866: () => {},
      6581: () => {},
      3256: () => {},
      9742: () => {},
      9397: () => {},
      2560: () => {},
      4977: (e, t, n) => {
        "use strict";
        var r = n(4188),
          o = n(3174),
          i = TypeError;
        e.exports = function (e) {
          if (r(e)) return e;
          throw new i(o(e) + " is not a function");
        };
      },
      4121: (e, t, n) => {
        "use strict";
        var r = n(6712),
          o = String,
          i = TypeError;
        e.exports = function (e) {
          if (r(e)) return e;
          throw new i("Can't set " + o(e) + " as a prototype");
        };
      },
      2937: (e, t, n) => {
        "use strict";
        var r = n(3243).has;
        e.exports = function (e) {
          return r(e), e;
        };
      },
      7905: (e, t, n) => {
        "use strict";
        var r = n(4578),
          o = TypeError;
        e.exports = function (e, t) {
          if (r(t, e)) return e;
          throw new o("Incorrect invocation");
        };
      },
      3770: (e, t, n) => {
        "use strict";
        var r = n(831),
          o = String,
          i = TypeError;
        e.exports = function (e) {
          if (r(e)) return e;
          throw new i(o(e) + " is not an object");
        };
      },
      1458: (e, t, n) => {
        "use strict";
        var r = n(380),
          o = n(675),
          i = n(9389),
          s = function (e) {
            return function (t, n, s) {
              var a = r(t),
                c = i(a);
              if (0 === c) return !e && -1;
              var u,
                l = o(s, c);
              if (e && n != n) {
                for (; c > l; ) if ((u = a[l++]) != u) return !0;
              } else
                for (; c > l; l++)
                  if ((e || l in a) && a[l] === n) return e || l || 0;
              return !e && -1;
            };
          };
        e.exports = { includes: s(!0), indexOf: s(!1) };
      },
      8689: (e, t, n) => {
        "use strict";
        var r = n(6881),
          o = r({}.toString),
          i = r("".slice);
        e.exports = function (e) {
          return i(o(e), 8, -1);
        };
      },
      5438: (e, t, n) => {
        "use strict";
        var r = n(9345),
          o = n(4188),
          i = n(8689),
          s = n(4282)("toStringTag"),
          a = Object,
          c =
            "Arguments" ===
            i(
              (function () {
                return arguments;
              })()
            );
        e.exports = r
          ? i
          : function (e) {
              var t, n, r;
              return void 0 === e
                ? "Undefined"
                : null === e
                ? "Null"
                : "string" ==
                  typeof (n = (function (e, t) {
                    try {
                      return e[t];
                    } catch (n) {}
                  })((t = a(e)), s))
                ? n
                : c
                ? i(t)
                : "Object" === (r = i(t)) && o(t.callee)
                ? "Arguments"
                : r;
            };
      },
      8657: (e, t, n) => {
        "use strict";
        var r = n(4418),
          o = n(3168),
          i = n(9304),
          s = n(4466);
        e.exports = function (e, t, n) {
          for (var a = o(t), c = s.f, u = i.f, l = 0; l < a.length; l++) {
            var d = a[l];
            r(e, d) || (n && r(n, d)) || c(e, d, u(t, d));
          }
        };
      },
      8088: (e, t, n) => {
        "use strict";
        var r = n(6893),
          o = n(4466),
          i = n(9123);
        e.exports = r
          ? function (e, t, n) {
              return o.f(e, t, i(1, n));
            }
          : function (e, t, n) {
              return (e[t] = n), e;
            };
      },
      9123: (e) => {
        "use strict";
        e.exports = function (e, t) {
          return {
            enumerable: !(1 & e),
            configurable: !(2 & e),
            writable: !(4 & e),
            value: t,
          };
        };
      },
      997: (e, t, n) => {
        "use strict";
        var r = n(4530),
          o = n(4466);
        e.exports = function (e, t, n) {
          return (
            n.get && r(n.get, t, { getter: !0 }),
            n.set && r(n.set, t, { setter: !0 }),
            o.f(e, t, n)
          );
        };
      },
      7509: (e, t, n) => {
        "use strict";
        var r = n(4188),
          o = n(4466),
          i = n(4530),
          s = n(4798);
        e.exports = function (e, t, n, a) {
          a || (a = {});
          var c = a.enumerable,
            u = void 0 !== a.name ? a.name : t;
          if ((r(n) && i(n, u, a), a.global)) c ? (e[t] = n) : s(t, n);
          else {
            try {
              a.unsafe ? e[t] && (c = !0) : delete e[t];
            } catch (l) {}
            c
              ? (e[t] = n)
              : o.f(e, t, {
                  value: n,
                  enumerable: !1,
                  configurable: !a.nonConfigurable,
                  writable: !a.nonWritable,
                });
          }
          return e;
        };
      },
      4798: (e, t, n) => {
        "use strict";
        var r = n(1488),
          o = Object.defineProperty;
        e.exports = function (e, t) {
          try {
            o(r, e, { value: t, configurable: !0, writable: !0 });
          } catch (n) {
            r[e] = t;
          }
          return t;
        };
      },
      6893: (e, t, n) => {
        "use strict";
        var r = n(5234);
        e.exports = !r(function () {
          return (
            7 !==
            Object.defineProperty({}, 1, {
              get: function () {
                return 7;
              },
            })[1]
          );
        });
      },
      5926: (e, t, n) => {
        "use strict";
        var r = n(1488),
          o = n(831),
          i = r.document,
          s = o(i) && o(i.createElement);
        e.exports = function (e) {
          return s ? i.createElement(e) : {};
        };
      },
      8015: (e) => {
        "use strict";
        e.exports = {
          IndexSizeError: { s: "INDEX_SIZE_ERR", c: 1, m: 1 },
          DOMStringSizeError: { s: "DOMSTRING_SIZE_ERR", c: 2, m: 0 },
          HierarchyRequestError: { s: "HIERARCHY_REQUEST_ERR", c: 3, m: 1 },
          WrongDocumentError: { s: "WRONG_DOCUMENT_ERR", c: 4, m: 1 },
          InvalidCharacterError: { s: "INVALID_CHARACTER_ERR", c: 5, m: 1 },
          NoDataAllowedError: { s: "NO_DATA_ALLOWED_ERR", c: 6, m: 0 },
          NoModificationAllowedError: {
            s: "NO_MODIFICATION_ALLOWED_ERR",
            c: 7,
            m: 1,
          },
          NotFoundError: { s: "NOT_FOUND_ERR", c: 8, m: 1 },
          NotSupportedError: { s: "NOT_SUPPORTED_ERR", c: 9, m: 1 },
          InUseAttributeError: { s: "INUSE_ATTRIBUTE_ERR", c: 10, m: 1 },
          InvalidStateError: { s: "INVALID_STATE_ERR", c: 11, m: 1 },
          SyntaxError: { s: "SYNTAX_ERR", c: 12, m: 1 },
          InvalidModificationError: {
            s: "INVALID_MODIFICATION_ERR",
            c: 13,
            m: 1,
          },
          NamespaceError: { s: "NAMESPACE_ERR", c: 14, m: 1 },
          InvalidAccessError: { s: "INVALID_ACCESS_ERR", c: 15, m: 1 },
          ValidationError: { s: "VALIDATION_ERR", c: 16, m: 0 },
          TypeMismatchError: { s: "TYPE_MISMATCH_ERR", c: 17, m: 1 },
          SecurityError: { s: "SECURITY_ERR", c: 18, m: 1 },
          NetworkError: { s: "NETWORK_ERR", c: 19, m: 1 },
          AbortError: { s: "ABORT_ERR", c: 20, m: 1 },
          URLMismatchError: { s: "URL_MISMATCH_ERR", c: 21, m: 1 },
          QuotaExceededError: { s: "QUOTA_EXCEEDED_ERR", c: 22, m: 1 },
          TimeoutError: { s: "TIMEOUT_ERR", c: 23, m: 1 },
          InvalidNodeTypeError: { s: "INVALID_NODE_TYPE_ERR", c: 24, m: 1 },
          DataCloneError: { s: "DATA_CLONE_ERR", c: 25, m: 1 },
        };
      },
      4109: (e) => {
        "use strict";
        e.exports =
          ("undefined" != typeof navigator && String(navigator.userAgent)) ||
          "";
      },
      3749: (e, t, n) => {
        "use strict";
        var r,
          o,
          i = n(1488),
          s = n(4109),
          a = i.process,
          c = i.Deno,
          u = (a && a.versions) || (c && c.version),
          l = u && u.v8;
        l && (o = (r = l.split("."))[0] > 0 && r[0] < 4 ? 1 : +(r[0] + r[1])),
          !o &&
            s &&
            (!(r = s.match(/Edge\/(\d+)/)) || r[1] >= 74) &&
            (r = s.match(/Chrome\/(\d+)/)) &&
            (o = +r[1]),
          (e.exports = o);
      },
      1274: (e) => {
        "use strict";
        e.exports = [
          "constructor",
          "hasOwnProperty",
          "isPrototypeOf",
          "propertyIsEnumerable",
          "toLocaleString",
          "toString",
          "valueOf",
        ];
      },
      7308: (e, t, n) => {
        "use strict";
        var r = n(6881),
          o = Error,
          i = r("".replace),
          s = String(new o("zxcasd").stack),
          a = /\n\s*at [^:]*:[^\n]*/,
          c = a.test(s);
        e.exports = function (e, t) {
          if (c && "string" == typeof e && !o.prepareStackTrace)
            for (; t--; ) e = i(e, a, "");
          return e;
        };
      },
      5613: (e, t, n) => {
        "use strict";
        var r = n(1488),
          o = n(9304).f,
          i = n(8088),
          s = n(7509),
          a = n(4798),
          c = n(8657),
          u = n(8489);
        e.exports = function (e, t) {
          var n,
            l,
            d,
            p,
            f,
            m = e.target,
            h = e.global,
            b = e.stat;
          if ((n = h ? r : b ? r[m] || a(m, {}) : r[m] && r[m].prototype))
            for (l in t) {
              if (
                ((p = t[l]),
                (d = e.dontCallGetSet ? (f = o(n, l)) && f.value : n[l]),
                !u(h ? l : m + (b ? "." : "#") + l, e.forced) && void 0 !== d)
              ) {
                if (typeof p == typeof d) continue;
                c(p, d);
              }
              (e.sham || (d && d.sham)) && i(p, "sham", !0), s(n, l, p, e);
            }
        };
      },
      5234: (e) => {
        "use strict";
        e.exports = function (e) {
          try {
            return !!e();
          } catch (t) {
            return !0;
          }
        };
      },
      9055: (e, t, n) => {
        "use strict";
        var r = n(5234);
        e.exports = !r(function () {
          var e = function () {}.bind();
          return "function" != typeof e || e.hasOwnProperty("prototype");
        });
      },
      9944: (e, t, n) => {
        "use strict";
        var r = n(9055),
          o = Function.prototype.call;
        e.exports = r
          ? o.bind(o)
          : function () {
              return o.apply(o, arguments);
            };
      },
      2735: (e, t, n) => {
        "use strict";
        var r = n(6893),
          o = n(4418),
          i = Function.prototype,
          s = r && Object.getOwnPropertyDescriptor,
          a = o(i, "name"),
          c = a && "something" === function () {}.name,
          u = a && (!r || (r && s(i, "name").configurable));
        e.exports = { EXISTS: a, PROPER: c, CONFIGURABLE: u };
      },
      1025: (e, t, n) => {
        "use strict";
        var r = n(6881),
          o = n(4977);
        e.exports = function (e, t, n) {
          try {
            return r(o(Object.getOwnPropertyDescriptor(e, t)[n]));
          } catch (i) {}
        };
      },
      6881: (e, t, n) => {
        "use strict";
        var r = n(9055),
          o = Function.prototype,
          i = o.call,
          s = r && o.bind.bind(i, i);
        e.exports = r
          ? s
          : function (e) {
              return function () {
                return i.apply(e, arguments);
              };
            };
      },
      5604: (e, t, n) => {
        "use strict";
        var r = n(1488),
          o = n(4188);
        e.exports = function (e, t) {
          return arguments.length < 2
            ? ((n = r[e]), o(n) ? n : void 0)
            : r[e] && r[e][t];
          var n;
        };
      },
      6002: (e) => {
        "use strict";
        e.exports = function (e) {
          return { iterator: e, next: e.next, done: !1 };
        };
      },
      2913: (e, t, n) => {
        "use strict";
        var r = n(4977),
          o = n(4318);
        e.exports = function (e, t) {
          var n = e[t];
          return o(n) ? void 0 : r(n);
        };
      },
      5558: (e, t, n) => {
        "use strict";
        var r = n(4977),
          o = n(3770),
          i = n(9944),
          s = n(6744),
          a = n(6002),
          c = "Invalid size",
          u = RangeError,
          l = TypeError,
          d = Math.max,
          p = function (e, t) {
            (this.set = e),
              (this.size = d(t, 0)),
              (this.has = r(e.has)),
              (this.keys = r(e.keys));
          };
        (p.prototype = {
          getIterator: function () {
            return a(o(i(this.keys, this.set)));
          },
          includes: function (e) {
            return i(this.has, this.set, e);
          },
        }),
          (e.exports = function (e) {
            o(e);
            var t = +e.size;
            if (t != t) throw new l(c);
            var n = s(t);
            if (n < 0) throw new u(c);
            return new p(e, n);
          });
      },
      1488: function (e, t, n) {
        "use strict";
        var r = function (e) {
          return e && e.Math === Math && e;
        };
        e.exports =
          r("object" == typeof globalThis && globalThis) ||
          r("object" == typeof window && window) ||
          r("object" == typeof self && self) ||
          r("object" == typeof n.g && n.g) ||
          r("object" == typeof this && this) ||
          (function () {
            return this;
          })() ||
          Function("return this")();
      },
      4418: (e, t, n) => {
        "use strict";
        var r = n(6881),
          o = n(3628),
          i = r({}.hasOwnProperty);
        e.exports =
          Object.hasOwn ||
          function (e, t) {
            return i(o(e), t);
          };
      },
      7588: (e) => {
        "use strict";
        e.exports = {};
      },
      9622: (e, t, n) => {
        "use strict";
        var r = n(6893),
          o = n(5234),
          i = n(5926);
        e.exports =
          !r &&
          !o(function () {
            return (
              7 !==
              Object.defineProperty(i("div"), "a", {
                get: function () {
                  return 7;
                },
              }).a
            );
          });
      },
      7568: (e, t, n) => {
        "use strict";
        var r = n(6881),
          o = n(5234),
          i = n(8689),
          s = Object,
          a = r("".split);
        e.exports = o(function () {
          return !s("z").propertyIsEnumerable(0);
        })
          ? function (e) {
              return "String" === i(e) ? a(e, "") : s(e);
            }
          : s;
      },
      4166: (e, t, n) => {
        "use strict";
        var r = n(4188),
          o = n(831),
          i = n(5054);
        e.exports = function (e, t, n) {
          var s, a;
          return (
            i &&
              r((s = t.constructor)) &&
              s !== n &&
              o((a = s.prototype)) &&
              a !== n.prototype &&
              i(e, a),
            e
          );
        };
      },
      3029: (e, t, n) => {
        "use strict";
        var r = n(6881),
          o = n(4188),
          i = n(2694),
          s = r(Function.toString);
        o(i.inspectSource) ||
          (i.inspectSource = function (e) {
            return s(e);
          }),
          (e.exports = i.inspectSource);
      },
      3086: (e, t, n) => {
        "use strict";
        var r,
          o,
          i,
          s = n(5945),
          a = n(1488),
          c = n(831),
          u = n(8088),
          l = n(4418),
          d = n(2694),
          p = n(168),
          f = n(7588),
          m = "Object already initialized",
          h = a.TypeError,
          b = a.WeakMap;
        if (s || d.state) {
          var w = d.state || (d.state = new b());
          (w.get = w.get),
            (w.has = w.has),
            (w.set = w.set),
            (r = function (e, t) {
              if (w.has(e)) throw new h(m);
              return (t.facade = e), w.set(e, t), t;
            }),
            (o = function (e) {
              return w.get(e) || {};
            }),
            (i = function (e) {
              return w.has(e);
            });
        } else {
          var v = p("state");
          (f[v] = !0),
            (r = function (e, t) {
              if (l(e, v)) throw new h(m);
              return (t.facade = e), u(e, v, t), t;
            }),
            (o = function (e) {
              return l(e, v) ? e[v] : {};
            }),
            (i = function (e) {
              return l(e, v);
            });
        }
        e.exports = {
          set: r,
          get: o,
          has: i,
          enforce: function (e) {
            return i(e) ? o(e) : r(e, {});
          },
          getterFor: function (e) {
            return function (t) {
              var n;
              if (!c(t) || (n = o(t)).type !== e)
                throw new h("Incompatible receiver, " + e + " required");
              return n;
            };
          },
        };
      },
      4188: (e) => {
        "use strict";
        var t = "object" == typeof document && document.all;
        e.exports =
          void 0 === t && void 0 !== t
            ? function (e) {
                return "function" == typeof e || e === t;
              }
            : function (e) {
                return "function" == typeof e;
              };
      },
      8489: (e, t, n) => {
        "use strict";
        var r = n(5234),
          o = n(4188),
          i = /#|\.prototype\./,
          s = function (e, t) {
            var n = c[a(e)];
            return n === l || (n !== u && (o(t) ? r(t) : !!t));
          },
          a = (s.normalize = function (e) {
            return String(e).replace(i, ".").toLowerCase();
          }),
          c = (s.data = {}),
          u = (s.NATIVE = "N"),
          l = (s.POLYFILL = "P");
        e.exports = s;
      },
      4318: (e) => {
        "use strict";
        e.exports = function (e) {
          return null == e;
        };
      },
      831: (e, t, n) => {
        "use strict";
        var r = n(4188);
        e.exports = function (e) {
          return "object" == typeof e ? null !== e : r(e);
        };
      },
      6712: (e, t, n) => {
        "use strict";
        var r = n(831);
        e.exports = function (e) {
          return r(e) || null === e;
        };
      },
      1942: (e) => {
        "use strict";
        e.exports = !1;
      },
      6032: (e, t, n) => {
        "use strict";
        var r = n(5604),
          o = n(4188),
          i = n(4578),
          s = n(9809),
          a = Object;
        e.exports = s
          ? function (e) {
              return "symbol" == typeof e;
            }
          : function (e) {
              var t = r("Symbol");
              return o(t) && i(t.prototype, a(e));
            };
      },
      7032: (e, t, n) => {
        "use strict";
        var r = n(9944);
        e.exports = function (e, t, n) {
          for (
            var o, i, s = n ? e : e.iterator, a = e.next;
            !(o = r(a, s)).done;

          )
            if (void 0 !== (i = t(o.value))) return i;
        };
      },
      8500: (e, t, n) => {
        "use strict";
        var r = n(9944),
          o = n(3770),
          i = n(2913);
        e.exports = function (e, t, n) {
          var s, a;
          o(e);
          try {
            if (!(s = i(e, "return"))) {
              if ("throw" === t) throw n;
              return n;
            }
            s = r(s, e);
          } catch (c) {
            (a = !0), (s = c);
          }
          if ("throw" === t) throw n;
          if (a) throw s;
          return o(s), n;
        };
      },
      9389: (e, t, n) => {
        "use strict";
        var r = n(7611);
        e.exports = function (e) {
          return r(e.length);
        };
      },
      4530: (e, t, n) => {
        "use strict";
        var r = n(6881),
          o = n(5234),
          i = n(4188),
          s = n(4418),
          a = n(6893),
          c = n(2735).CONFIGURABLE,
          u = n(3029),
          l = n(3086),
          d = l.enforce,
          p = l.get,
          f = String,
          m = Object.defineProperty,
          h = r("".slice),
          b = r("".replace),
          w = r([].join),
          v =
            a &&
            !o(function () {
              return 8 !== m(function () {}, "length", { value: 8 }).length;
            }),
          g = String(String).split("String"),
          y = (e.exports = function (e, t, n) {
            "Symbol(" === h(f(t), 0, 7) &&
              (t = "[" + b(f(t), /^Symbol\(([^)]*)\).*$/, "$1") + "]"),
              n && n.getter && (t = "get " + t),
              n && n.setter && (t = "set " + t),
              (!s(e, "name") || (c && e.name !== t)) &&
                (a
                  ? m(e, "name", { value: t, configurable: !0 })
                  : (e.name = t)),
              v &&
                n &&
                s(n, "arity") &&
                e.length !== n.arity &&
                m(e, "length", { value: n.arity });
            try {
              n && s(n, "constructor") && n.constructor
                ? a && m(e, "prototype", { writable: !1 })
                : e.prototype && (e.prototype = void 0);
            } catch (o) {}
            var r = d(e);
            return (
              s(r, "source") ||
                (r.source = w(g, "string" == typeof t ? t : "")),
              e
            );
          });
        Function.prototype.toString = y(function () {
          return (i(this) && p(this).source) || u(this);
        }, "toString");
      },
      142: (e) => {
        "use strict";
        var t = Math.ceil,
          n = Math.floor;
        e.exports =
          Math.trunc ||
          function (e) {
            var r = +e;
            return (r > 0 ? n : t)(r);
          };
      },
      9866: (e, t, n) => {
        "use strict";
        var r = n(2618);
        e.exports = function (e, t) {
          return void 0 === e ? (arguments.length < 2 ? "" : t) : r(e);
        };
      },
      4466: (e, t, n) => {
        "use strict";
        var r = n(6893),
          o = n(9622),
          i = n(3315),
          s = n(3770),
          a = n(2344),
          c = TypeError,
          u = Object.defineProperty,
          l = Object.getOwnPropertyDescriptor,
          d = "enumerable",
          p = "configurable",
          f = "writable";
        t.f = r
          ? i
            ? function (e, t, n) {
                if (
                  (s(e),
                  (t = a(t)),
                  s(n),
                  "function" == typeof e &&
                    "prototype" === t &&
                    "value" in n &&
                    f in n &&
                    !n[f])
                ) {
                  var r = l(e, t);
                  r &&
                    r[f] &&
                    ((e[t] = n.value),
                    (n = {
                      configurable: p in n ? n[p] : r[p],
                      enumerable: d in n ? n[d] : r[d],
                      writable: !1,
                    }));
                }
                return u(e, t, n);
              }
            : u
          : function (e, t, n) {
              if ((s(e), (t = a(t)), s(n), o))
                try {
                  return u(e, t, n);
                } catch (r) {}
              if ("get" in n || "set" in n)
                throw new c("Accessors not supported");
              return "value" in n && (e[t] = n.value), e;
            };
      },
      9304: (e, t, n) => {
        "use strict";
        var r = n(6893),
          o = n(9944),
          i = n(4416),
          s = n(9123),
          a = n(380),
          c = n(2344),
          u = n(4418),
          l = n(9622),
          d = Object.getOwnPropertyDescriptor;
        t.f = r
          ? d
          : function (e, t) {
              if (((e = a(e)), (t = c(t)), l))
                try {
                  return d(e, t);
                } catch (n) {}
              if (u(e, t)) return s(!o(i.f, e, t), e[t]);
            };
      },
      5629: (e, t, n) => {
        "use strict";
        var r = n(1843),
          o = n(1274).concat("length", "prototype");
        t.f =
          Object.getOwnPropertyNames ||
          function (e) {
            return r(e, o);
          };
      },
      156: (e, t) => {
        "use strict";
        t.f = Object.getOwnPropertySymbols;
      },
      4578: (e, t, n) => {
        "use strict";
        var r = n(6881);
        e.exports = r({}.isPrototypeOf);
      },
      1843: (e, t, n) => {
        "use strict";
        var r = n(6881),
          o = n(4418),
          i = n(380),
          s = n(1458).indexOf,
          a = n(7588),
          c = r([].push);
        e.exports = function (e, t) {
          var n,
            r = i(e),
            u = 0,
            l = [];
          for (n in r) !o(a, n) && o(r, n) && c(l, n);
          for (; t.length > u; ) o(r, (n = t[u++])) && (~s(l, n) || c(l, n));
          return l;
        };
      },
      4416: (e, t) => {
        "use strict";
        var n = {}.propertyIsEnumerable,
          r = Object.getOwnPropertyDescriptor,
          o = r && !n.call({ 1: 2 }, 1);
        t.f = o
          ? function (e) {
              var t = r(this, e);
              return !!t && t.enumerable;
            }
          : n;
      },
      5054: (e, t, n) => {
        "use strict";
        var r = n(1025),
          o = n(831),
          i = n(9509),
          s = n(4121);
        e.exports =
          Object.setPrototypeOf ||
          ("__proto__" in {}
            ? (function () {
                var e,
                  t = !1,
                  n = {};
                try {
                  (e = r(Object.prototype, "__proto__", "set"))(n, []),
                    (t = n instanceof Array);
                } catch (a) {}
                return function (n, r) {
                  return (
                    i(n), s(r), o(n) ? (t ? e(n, r) : (n.__proto__ = r), n) : n
                  );
                };
              })()
            : void 0);
      },
      2287: (e, t, n) => {
        "use strict";
        var r = n(9944),
          o = n(4188),
          i = n(831),
          s = TypeError;
        e.exports = function (e, t) {
          var n, a;
          if ("string" === t && o((n = e.toString)) && !i((a = r(n, e))))
            return a;
          if (o((n = e.valueOf)) && !i((a = r(n, e)))) return a;
          if ("string" !== t && o((n = e.toString)) && !i((a = r(n, e))))
            return a;
          throw new s("Can't convert object to primitive value");
        };
      },
      3168: (e, t, n) => {
        "use strict";
        var r = n(5604),
          o = n(6881),
          i = n(5629),
          s = n(156),
          a = n(3770),
          c = o([].concat);
        e.exports =
          r("Reflect", "ownKeys") ||
          function (e) {
            var t = i.f(a(e)),
              n = s.f;
            return n ? c(t, n(e)) : t;
          };
      },
      9509: (e, t, n) => {
        "use strict";
        var r = n(4318),
          o = TypeError;
        e.exports = function (e) {
          if (r(e)) throw new o("Can't call method on " + e);
          return e;
        };
      },
      679: (e, t, n) => {
        "use strict";
        var r = n(3243),
          o = n(9800),
          i = r.Set,
          s = r.add;
        e.exports = function (e) {
          var t = new i();
          return (
            o(e, function (e) {
              s(t, e);
            }),
            t
          );
        };
      },
      7059: (e, t, n) => {
        "use strict";
        var r = n(2937),
          o = n(3243),
          i = n(679),
          s = n(7173),
          a = n(5558),
          c = n(9800),
          u = n(7032),
          l = o.has,
          d = o.remove;
        e.exports = function (e) {
          var t = r(this),
            n = a(e),
            o = i(t);
          return (
            s(t) <= n.size
              ? c(t, function (e) {
                  n.includes(e) && d(o, e);
                })
              : u(n.getIterator(), function (e) {
                  l(t, e) && d(o, e);
                }),
            o
          );
        };
      },
      3243: (e, t, n) => {
        "use strict";
        var r = n(6881),
          o = Set.prototype;
        e.exports = {
          Set,
          add: r(o.add),
          has: r(o.has),
          remove: r(o.delete),
          proto: o,
        };
      },
      3721: (e, t, n) => {
        "use strict";
        var r = n(2937),
          o = n(3243),
          i = n(7173),
          s = n(5558),
          a = n(9800),
          c = n(7032),
          u = o.Set,
          l = o.add,
          d = o.has;
        e.exports = function (e) {
          var t = r(this),
            n = s(e),
            o = new u();
          return (
            i(t) > n.size
              ? c(n.getIterator(), function (e) {
                  d(t, e) && l(o, e);
                })
              : a(t, function (e) {
                  n.includes(e) && l(o, e);
                }),
            o
          );
        };
      },
      9978: (e, t, n) => {
        "use strict";
        var r = n(2937),
          o = n(3243).has,
          i = n(7173),
          s = n(5558),
          a = n(9800),
          c = n(7032),
          u = n(8500);
        e.exports = function (e) {
          var t = r(this),
            n = s(e);
          if (i(t) <= n.size)
            return (
              !1 !==
              a(
                t,
                function (e) {
                  if (n.includes(e)) return !1;
                },
                !0
              )
            );
          var l = n.getIterator();
          return (
            !1 !==
            c(l, function (e) {
              if (o(t, e)) return u(l, "normal", !1);
            })
          );
        };
      },
      4361: (e, t, n) => {
        "use strict";
        var r = n(2937),
          o = n(7173),
          i = n(9800),
          s = n(5558);
        e.exports = function (e) {
          var t = r(this),
            n = s(e);
          return (
            !(o(t) > n.size) &&
            !1 !==
              i(
                t,
                function (e) {
                  if (!n.includes(e)) return !1;
                },
                !0
              )
          );
        };
      },
      7528: (e, t, n) => {
        "use strict";
        var r = n(2937),
          o = n(3243).has,
          i = n(7173),
          s = n(5558),
          a = n(7032),
          c = n(8500);
        e.exports = function (e) {
          var t = r(this),
            n = s(e);
          if (i(t) < n.size) return !1;
          var u = n.getIterator();
          return (
            !1 !==
            a(u, function (e) {
              if (!o(t, e)) return c(u, "normal", !1);
            })
          );
        };
      },
      9800: (e, t, n) => {
        "use strict";
        var r = n(6881),
          o = n(7032),
          i = n(3243),
          s = i.Set,
          a = i.proto,
          c = r(a.forEach),
          u = r(a.keys),
          l = u(new s()).next;
        e.exports = function (e, t, n) {
          return n ? o({ iterator: u(e), next: l }, t) : c(e, t);
        };
      },
      4471: (e, t, n) => {
        "use strict";
        var r = n(5604),
          o = function (e) {
            return {
              size: e,
              has: function () {
                return !1;
              },
              keys: function () {
                return {
                  next: function () {
                    return { done: !0 };
                  },
                };
              },
            };
          };
        e.exports = function (e) {
          var t = r("Set");
          try {
            new t()[e](o(0));
            try {
              return new t()[e](o(-1)), !1;
            } catch (n) {
              return !0;
            }
          } catch (i) {
            return !1;
          }
        };
      },
      7173: (e, t, n) => {
        "use strict";
        var r = n(1025),
          o = n(3243);
        e.exports =
          r(o.proto, "size", "get") ||
          function (e) {
            return e.size;
          };
      },
      1657: (e, t, n) => {
        "use strict";
        var r = n(2937),
          o = n(3243),
          i = n(679),
          s = n(5558),
          a = n(7032),
          c = o.add,
          u = o.has,
          l = o.remove;
        e.exports = function (e) {
          var t = r(this),
            n = s(e).getIterator(),
            o = i(t);
          return (
            a(n, function (e) {
              u(t, e) ? l(o, e) : c(o, e);
            }),
            o
          );
        };
      },
      5077: (e, t, n) => {
        "use strict";
        var r = n(2937),
          o = n(3243).add,
          i = n(679),
          s = n(5558),
          a = n(7032);
        e.exports = function (e) {
          var t = r(this),
            n = s(e).getIterator(),
            c = i(t);
          return (
            a(n, function (e) {
              o(c, e);
            }),
            c
          );
        };
      },
      168: (e, t, n) => {
        "use strict";
        var r = n(746),
          o = n(6209),
          i = r("keys");
        e.exports = function (e) {
          return i[e] || (i[e] = o(e));
        };
      },
      2694: (e, t, n) => {
        "use strict";
        var r = n(1942),
          o = n(1488),
          i = n(4798),
          s = "__core-js_shared__",
          a = (e.exports = o[s] || i(s, {}));
        (a.versions || (a.versions = [])).push({
          version: "3.37.0",
          mode: r ? "pure" : "global",
          copyright: "© 2014-2024 Denis Pushkarev (zloirock.ru)",
          license: "https://github.com/zloirock/core-js/blob/v3.37.0/LICENSE",
          source: "https://github.com/zloirock/core-js",
        });
      },
      746: (e, t, n) => {
        "use strict";
        var r = n(2694);
        e.exports = function (e, t) {
          return r[e] || (r[e] = t || {});
        };
      },
      8944: (e, t, n) => {
        "use strict";
        var r = n(3749),
          o = n(5234),
          i = n(1488).String;
        e.exports =
          !!Object.getOwnPropertySymbols &&
          !o(function () {
            var e = Symbol("symbol detection");
            return (
              !i(e) ||
              !(Object(e) instanceof Symbol) ||
              (!Symbol.sham && r && r < 41)
            );
          });
      },
      675: (e, t, n) => {
        "use strict";
        var r = n(6744),
          o = Math.max,
          i = Math.min;
        e.exports = function (e, t) {
          var n = r(e);
          return n < 0 ? o(n + t, 0) : i(n, t);
        };
      },
      380: (e, t, n) => {
        "use strict";
        var r = n(7568),
          o = n(9509);
        e.exports = function (e) {
          return r(o(e));
        };
      },
      6744: (e, t, n) => {
        "use strict";
        var r = n(142);
        e.exports = function (e) {
          var t = +e;
          return t != t || 0 === t ? 0 : r(t);
        };
      },
      7611: (e, t, n) => {
        "use strict";
        var r = n(6744),
          o = Math.min;
        e.exports = function (e) {
          var t = r(e);
          return t > 0 ? o(t, 9007199254740991) : 0;
        };
      },
      3628: (e, t, n) => {
        "use strict";
        var r = n(9509),
          o = Object;
        e.exports = function (e) {
          return o(r(e));
        };
      },
      290: (e, t, n) => {
        "use strict";
        var r = n(9944),
          o = n(831),
          i = n(6032),
          s = n(2913),
          a = n(2287),
          c = n(4282),
          u = TypeError,
          l = c("toPrimitive");
        e.exports = function (e, t) {
          if (!o(e) || i(e)) return e;
          var n,
            c = s(e, l);
          if (c) {
            if (
              (void 0 === t && (t = "default"), (n = r(c, e, t)), !o(n) || i(n))
            )
              return n;
            throw new u("Can't convert object to primitive value");
          }
          return void 0 === t && (t = "number"), a(e, t);
        };
      },
      2344: (e, t, n) => {
        "use strict";
        var r = n(290),
          o = n(6032);
        e.exports = function (e) {
          var t = r(e, "string");
          return o(t) ? t : t + "";
        };
      },
      9345: (e, t, n) => {
        "use strict";
        var r = {};
        (r[n(4282)("toStringTag")] = "z"),
          (e.exports = "[object z]" === String(r));
      },
      2618: (e, t, n) => {
        "use strict";
        var r = n(5438),
          o = String;
        e.exports = function (e) {
          if ("Symbol" === r(e))
            throw new TypeError("Cannot convert a Symbol value to a string");
          return o(e);
        };
      },
      3174: (e) => {
        "use strict";
        var t = String;
        e.exports = function (e) {
          try {
            return t(e);
          } catch (n) {
            return "Object";
          }
        };
      },
      6209: (e, t, n) => {
        "use strict";
        var r = n(6881),
          o = 0,
          i = Math.random(),
          s = r((1).toString);
        e.exports = function (e) {
          return "Symbol(" + (void 0 === e ? "" : e) + ")_" + s(++o + i, 36);
        };
      },
      9809: (e, t, n) => {
        "use strict";
        var r = n(8944);
        e.exports = r && !Symbol.sham && "symbol" == typeof Symbol.iterator;
      },
      3315: (e, t, n) => {
        "use strict";
        var r = n(6893),
          o = n(5234);
        e.exports =
          r &&
          o(function () {
            return (
              42 !==
              Object.defineProperty(function () {}, "prototype", {
                value: 42,
                writable: !1,
              }).prototype
            );
          });
      },
      9445: (e) => {
        "use strict";
        var t = TypeError;
        e.exports = function (e, n) {
          if (e < n) throw new t("Not enough arguments");
          return e;
        };
      },
      5945: (e, t, n) => {
        "use strict";
        var r = n(1488),
          o = n(4188),
          i = r.WeakMap;
        e.exports = o(i) && /native code/.test(String(i));
      },
      4282: (e, t, n) => {
        "use strict";
        var r = n(1488),
          o = n(746),
          i = n(4418),
          s = n(6209),
          a = n(8944),
          c = n(9809),
          u = r.Symbol,
          l = o("wks"),
          d = c ? u.for || u : (u && u.withoutSetter) || s;
        e.exports = function (e) {
          return (
            i(l, e) || (l[e] = a && i(u, e) ? u[e] : d("Symbol." + e)), l[e]
          );
        };
      },
      9033: (e, t, n) => {
        "use strict";
        var r = n(5613),
          o = n(7059);
        r(
          {
            target: "Set",
            proto: !0,
            real: !0,
            forced: !n(4471)("difference"),
          },
          { difference: o }
        );
      },
      8903: (e, t, n) => {
        "use strict";
        var r = n(5613),
          o = n(5234),
          i = n(3721);
        r(
          {
            target: "Set",
            proto: !0,
            real: !0,
            forced:
              !n(4471)("intersection") ||
              o(function () {
                return (
                  "3,2" !==
                  String(
                    Array.from(new Set([1, 2, 3]).intersection(new Set([3, 2])))
                  )
                );
              }),
          },
          { intersection: i }
        );
      },
      1018: (e, t, n) => {
        "use strict";
        var r = n(5613),
          o = n(9978);
        r(
          {
            target: "Set",
            proto: !0,
            real: !0,
            forced: !n(4471)("isDisjointFrom"),
          },
          { isDisjointFrom: o }
        );
      },
      1415: (e, t, n) => {
        "use strict";
        var r = n(5613),
          o = n(4361);
        r(
          {
            target: "Set",
            proto: !0,
            real: !0,
            forced: !n(4471)("isSubsetOf"),
          },
          { isSubsetOf: o }
        );
      },
      4448: (e, t, n) => {
        "use strict";
        var r = n(5613),
          o = n(7528);
        r(
          {
            target: "Set",
            proto: !0,
            real: !0,
            forced: !n(4471)("isSupersetOf"),
          },
          { isSupersetOf: o }
        );
      },
      8871: (e, t, n) => {
        "use strict";
        var r = n(5613),
          o = n(1657);
        r(
          {
            target: "Set",
            proto: !0,
            real: !0,
            forced: !n(4471)("symmetricDifference"),
          },
          { symmetricDifference: o }
        );
      },
      6539: (e, t, n) => {
        "use strict";
        var r = n(5613),
          o = n(5077);
        r(
          { target: "Set", proto: !0, real: !0, forced: !n(4471)("union") },
          { union: o }
        );
      },
      5100: (e, t, n) => {
        "use strict";
        n(9033);
      },
      7162: (e, t, n) => {
        "use strict";
        n(8903);
      },
      6403: (e, t, n) => {
        "use strict";
        n(1018);
      },
      4154: (e, t, n) => {
        "use strict";
        n(1415);
      },
      4777: (e, t, n) => {
        "use strict";
        n(4448);
      },
      8846: (e, t, n) => {
        "use strict";
        n(8871);
      },
      2896: (e, t, n) => {
        "use strict";
        n(6539);
      },
      7182: (e, t, n) => {
        "use strict";
        var r = n(5613),
          o = n(1488),
          i = n(5604),
          s = n(9123),
          a = n(4466).f,
          c = n(4418),
          u = n(7905),
          l = n(4166),
          d = n(9866),
          p = n(8015),
          f = n(7308),
          m = n(6893),
          h = n(1942),
          b = "DOMException",
          w = i("Error"),
          v = i(b),
          g = function () {
            u(this, y);
            var e = arguments.length,
              t = d(e < 1 ? void 0 : arguments[0]),
              n = d(e < 2 ? void 0 : arguments[1], "Error"),
              r = new v(t, n),
              o = new w(t);
            return (
              (o.name = b), a(r, "stack", s(1, f(o.stack, 1))), l(r, this, g), r
            );
          },
          y = (g.prototype = v.prototype),
          x = "stack" in new w(b),
          E = "stack" in new v(1, 2),
          _ = v && m && Object.getOwnPropertyDescriptor(o, b),
          S = !(!_ || (_.writable && _.configurable)),
          k = x && !S && !E;
        r(
          { global: !0, constructor: !0, forced: h || k },
          { DOMException: k ? g : v }
        );
        var C = i(b),
          A = C.prototype;
        if (A.constructor !== C)
          for (var T in (h || a(A, "constructor", s(1, C)), p))
            if (c(p, T)) {
              var I = p[T],
                O = I.s;
              c(C, O) || a(C, O, s(6, I.c));
            }
      },
      1412: (e, t, n) => {
        "use strict";
        var r = n(7509),
          o = n(6881),
          i = n(2618),
          s = n(9445),
          a = URLSearchParams,
          c = a.prototype,
          u = o(c.append),
          l = o(c.delete),
          d = o(c.forEach),
          p = o([].push),
          f = new a("a=1&a=2&b=3");
        f.delete("a", 1),
          f.delete("b", void 0),
          f + "" != "a=2" &&
            r(
              c,
              "delete",
              function (e) {
                var t = arguments.length,
                  n = t < 2 ? void 0 : arguments[1];
                if (t && void 0 === n) return l(this, e);
                var r = [];
                d(this, function (e, t) {
                  p(r, { key: t, value: e });
                }),
                  s(t, 1);
                for (
                  var o, a = i(e), c = i(n), f = 0, m = 0, h = !1, b = r.length;
                  f < b;

                )
                  (o = r[f++]),
                    h || o.key === a ? ((h = !0), l(this, o.key)) : m++;
                for (; m < b; )
                  ((o = r[m++]).key === a && o.value === c) ||
                    u(this, o.key, o.value);
              },
              { enumerable: !0, unsafe: !0 }
            );
      },
      1883: (e, t, n) => {
        "use strict";
        var r = n(7509),
          o = n(6881),
          i = n(2618),
          s = n(9445),
          a = URLSearchParams,
          c = a.prototype,
          u = o(c.getAll),
          l = o(c.has),
          d = new a("a=1");
        (!d.has("a", 2) && d.has("a", void 0)) ||
          r(
            c,
            "has",
            function (e) {
              var t = arguments.length,
                n = t < 2 ? void 0 : arguments[1];
              if (t && void 0 === n) return l(this, e);
              var r = u(this, e);
              s(t, 1);
              for (var o = i(n), a = 0; a < r.length; )
                if (r[a++] === o) return !0;
              return !1;
            },
            { enumerable: !0, unsafe: !0 }
          );
      },
      286: (e, t, n) => {
        "use strict";
        var r = n(6893),
          o = n(6881),
          i = n(997),
          s = URLSearchParams.prototype,
          a = o(s.forEach);
        r &&
          !("size" in s) &&
          i(s, "size", {
            get: function () {
              var e = 0;
              return (
                a(this, function () {
                  e++;
                }),
                e
              );
            },
            configurable: !0,
            enumerable: !0,
          });
      },
    },
    t = {};
  function n(r) {
    var o = t[r];
    if (void 0 !== o) return o.exports;
    var i = (t[r] = { exports: {} });
    return e[r].call(i.exports, i, i.exports, n), i.exports;
  }
  (n.amdO = {}),
    (n.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return n.d(t, { a: t }), t;
    }),
    (n.d = (e, t) => {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      "use strict";
      const e = "webPixelsManager",
        t = "production",
        r = "0.0.475",
        o = "modern",
        i = "f69b9fb6w3396cff1pe45e79a7m2cbe3366",
        s = "bf69b9fb6w3396cff1pe45e79a7m2cbe3366m.js",
        a = "loggedConversion2",
        c = "WebPixel::Render",
        u = "web-pixels-manager-sandbox-container";
      n(6581);
      const l = "product_added_to_cart",
        d = "Added Product Next",
        p = "product_removed_from_cart",
        f = "payment_info_submitted";
      function m() {
        return window;
      }
      let h = "OFF";
      function b(e, t, n) {
        const { jQuery: r } = m();
        r && r(e).bind
          ? r(e).bind(t, n)
          : e.addEventListener && e.addEventListener(t, n);
      }
      function w(e, t) {
        "ON" === h &&
          console &&
          console.warn &&
          console.warn(
            `[pixel_shop_events_listener] Error in ${e}:  ${t.message}`
          );
      }
      function v(e) {
        b(window, "load", () => {
          for (const t of document.forms) e(t);
        });
      }
      function g(e) {
        const t = (function (e) {
          var t, n, r, o, i, s, a, c, u, l, d, p, f, m, h;
          const b =
              (null === (t = e.merchandise) || void 0 === t
                ? void 0
                : t.product.title) || void 0,
            w =
              (null === (n = e.merchandise) || void 0 === n
                ? void 0
                : n.title) || void 0,
            v = b && w ? `${b} - ${w}` : b || w || "";
          return e
            ? {
                productId:
                  null === (r = e.merchandise) ||
                  void 0 === r ||
                  null === (o = r.product) ||
                  void 0 === o
                    ? void 0
                    : o.id,
                variantId:
                  null === (i = e.merchandise) || void 0 === i ? void 0 : i.id,
                name: v,
                sku:
                  null === (s = e.merchandise) || void 0 === s ? void 0 : s.sku,
                category:
                  null === (a = e.merchandise) ||
                  void 0 === a ||
                  null === (c = a.product) ||
                  void 0 === c
                    ? void 0
                    : c.type,
                brand:
                  null === (u = e.merchandise) ||
                  void 0 === u ||
                  null === (l = u.product) ||
                  void 0 === l
                    ? void 0
                    : l.vendor,
                variant:
                  null === (d = e.merchandise) || void 0 === d
                    ? void 0
                    : d.title,
                price:
                  null === (p = e.merchandise) ||
                  void 0 === p ||
                  null === (f = p.price) ||
                  void 0 === f
                    ? void 0
                    : f.amount,
                quantity: e.quantity,
                currency:
                  null === (m = e.merchandise) ||
                  void 0 === m ||
                  null === (h = m.price) ||
                  void 0 === h
                    ? void 0
                    : h.currencyCode,
                cartToken: y(document.cookie).cart || void 0,
              }
            : {};
        })(e);
        window.ShopifyAnalytics &&
          window.ShopifyAnalytics.lib &&
          "function" == typeof window.ShopifyAnalytics.lib.track &&
          window.ShopifyAnalytics.lib.track(d, { ...t });
      }
      function y(e) {
        const t = {};
        for (const r of e.split(/ *; */)) {
          const [e, o] = r.split("=");
          if (void 0 !== e)
            try {
              t[decodeURIComponent(e)] = decodeURIComponent(o || "");
            } catch (n) {
              continue;
            }
        }
        return t;
      }
      function x(e, t, n) {
        if (t.length !== n.length)
          throw Error(
            "Payload body and response have different number of items"
          );
        t.forEach((t, r) => {
          let o = 1;
          try {
            o = parseInt(n[r].quantity, 10) || 1;
          } catch (i) {
            w("handleBulkItemCartAddResponse", i);
          }
          _(e, t, o);
        });
      }
      function E(e, t, n, r, o) {
        const i = (
            (null ===
              (c =
                null === (u = m()) || void 0 === u
                  ? void 0
                  : u.ShopifyAnalytics) || void 0 === c
              ? void 0
              : c.meta) || {}
          ).currency,
          s = {
            id: String("add" === o ? t.id : t.variant_id),
            image: { src: t.image },
            price: { amount: t.presentment_price, currencyCode: i },
            product: {
              id: String(t.product_id),
              title: t.product_title,
              vendor: t.vendor,
              type: t.product_type,
              untranslatedTitle: t.untranslated_product_title,
              url: t.url,
            },
            sku: t.sku,
            title: t.variant_title,
            untranslatedTitle: t.untranslated_variant_title,
          },
          a = {
            cost: {
              totalAmount: { amount: s.price.amount * n, currencyCode: i },
            },
            merchandise: s,
            quantity: n,
          };
        var c, u;
        e(r, { cartLine: a }), r === l && g(a);
      }
      function _(e, t, n, r = "add") {
        E(e, t, n, l, r);
      }
      function S(e, t) {
        const n = t.items_added,
          r = t.items_removed;
        n.forEach((t) => {
          _(e, t, null == t ? void 0 : t.quantity, "change");
        }),
          r.forEach((t) => {
            !(function (e, t, n, r) {
              E(e, t, n, p, "change");
            })(e, t, null == t ? void 0 : t.quantity);
          });
      }
      function k(e) {
        if (!e) return 1;
        try {
          return JSON.parse(e).quantity || 1;
        } catch (t) {
          if (e instanceof FormData || e instanceof URLSearchParams) {
            if (e.has("quantity")) return Number(e.get("quantity"));
          } else {
            const t = e.split("&");
            for (const e of t) {
              const t = e.split("=");
              if ("quantity" === t[0]) return Number(t[1]);
            }
          }
        }
        return 1;
      }
      class C {
        static handleXhrOpen() {}
        static handleXhrDone(e) {
          try {
            const t = document.createElement("a");
            t.href = e.url;
            const n = t.pathname ? t.pathname : e.url;
            C.ADD_TO_CART_REGEX.test(n)
              ? C.parsePayloadResponse(e, (t) => {
                  const n = Object.keys(t).find((e) => "items" === e);
                  if (n) {
                    const o = t[n];
                    let i;
                    try {
                      i = JSON.parse(e.body).items;
                    } catch (r) {
                      i = (function (e, t) {
                        const n = new Array(t);
                        for (let r = 0; r < t; r++) n[r] = {};
                        for (const r of decodeURI(e).split("&")) {
                          const [e = "", t] = r.split("="),
                            o = e.match(/items\[(\d+)\]\[(\w+)\].*/);
                          if (o) {
                            const e = Number(o[1]),
                              r = o[2];
                            "quantity" === r
                              ? (n[e].quantity = t)
                              : "id" === r && (n[e].id = t);
                          }
                        }
                        return n;
                      })(e.body, o.length);
                    }
                    x(e.publish, o, i);
                  } else _(e.publish, t, k(e.body));
                })
              : C.CHANGE_TO_CART_REGEX.test(n) &&
                C.parsePayloadResponse(e, (t) => {
                  S(e.publish, t);
                });
          } catch (t) {
            w("handleXhrDone", t);
          }
        }
        static parseBlobToJson(e, t) {
          const n = new FileReader();
          n.addEventListener("loadend", () => {
            t(JSON.parse(String.fromCharCode(...new Uint8Array(n.result))));
          }),
            n.readAsArrayBuffer(e);
        }
        static parsePayloadResponse(e, t) {
          e.xhr.response instanceof Blob
            ? C.parseBlobToJson(e.xhr.response, t)
            : e.xhr.responseText && t(JSON.parse(e.xhr.responseText));
        }
        constructor(e, t, n, r, o) {
          (this.oldOnReadyStateChange = void 0),
            (this.xhr = void 0),
            (this.url = void 0),
            (this.method = void 0),
            (this.body = void 0),
            (this.publish = void 0),
            (this.xhr = e),
            (this.url = t),
            (this.method = n),
            (this.body = r),
            (this.publish = o);
        }
        onReadyStateChange() {
          this.xhr.readyState === XMLHttpRequest.DONE &&
            C.handleXhrDone({
              method: this.method,
              url: this.url,
              body: this.body,
              xhr: this.xhr,
              publish: this.publish,
            }),
            this.oldOnReadyStateChange &&
              this.oldOnReadyStateChange.call(
                this.xhr,
                new Event("oldOnReadyStateChange")
              );
        }
      }
      function A(e, t) {
        const n = e.fetch;
        function r(e) {
          w("handleFetchRequest", e);
        }
        "function" == typeof n &&
          (e.fetch = function (...e) {
            return n.apply(this, Array.prototype.slice.call(e)).then((e) => {
              if (!e.ok) return e;
              const n = document.createElement("a");
              n.href = e.url;
              const o = n.pathname ? n.pathname : e.url;
              try {
                if (C.ADD_TO_CART_REGEX.test(o)) {
                  try {
                    const n =
                      (i = arguments[1].body) instanceof FormData
                        ? (function (e) {
                            const t = {};
                            return (
                              e.forEach((e, n) => {
                                T(n, e, t);
                              }),
                              t
                            );
                          })(i)
                        : i instanceof URLSearchParams
                        ? ((s = i), Object.fromEntries(s.entries()))
                        : JSON.parse(i);
                    if (Object.keys(n).includes("items"))
                      return (
                        (function (e, n) {
                          e.clone()
                            .json()
                            .then((e) => {
                              const r = n.items,
                                o = e.items;
                              return x(t, o, r), e;
                            })
                            .catch(r);
                        })(e, n),
                        e
                      );
                  } catch (a) {
                    r(a);
                  }
                  !(function (e, n) {
                    const o = k(n);
                    e.clone()
                      .json()
                      .then((e) => _(t, e, o))
                      .catch(r);
                  })(e, arguments[1].body);
                } else
                  C.CHANGE_TO_CART_REGEX.test(o) &&
                    (function (e) {
                      e.clone()
                        .json()
                        .then((e) => {
                          S(t, e);
                        })
                        .catch(r);
                    })(e);
              } catch (a) {
                r(a);
              }
              var i, s;
              return e;
            });
          });
      }
      function T(e, t, n) {
        const [r, ...o] = e.split(".").filter((e) => e);
        if (r && o.length > 0)
          return (n[r] = n[r] || {}), void T(o.join("."), t, n[r]);
        const i = /(\w+)?\[(\d+)?\](.+)?/.exec(e);
        if (i) {
          const [e, r, o, s = ""] = i;
          if (r) return (n[r] = n[r] || []), void T(e.replace(r, ""), t, n[r]);
          if (o) {
            const e = s && "[" === s[0] ? [] : {};
            return (n[o] = n[o] || e), void T(s, t, n[o]);
          }
          n.push(t);
        } else n[e] = t;
      }
      function I(e, t) {
        !(function (e, t) {
          const n = e.prototype.open,
            r = e.prototype.send;
          (e.prototype.open = function (e, t) {
            (this._url = t), (this._method = e), n.apply(this, arguments);
          }),
            (e.prototype.send = function (e) {
              if (!(e instanceof Document)) {
                const n = new C(this, this._url, this._method, e || "", t);
                this.addEventListener
                  ? this.addEventListener(
                      "readystatechange",
                      n.onReadyStateChange.bind(n),
                      !1
                    )
                  : ((n.oldOnReadyStateChange = this.onreadystatechange),
                    (this.onreadystatechange = n.onReadyStateChange));
              }
              r.call(this, e);
            });
        })(XMLHttpRequest, e),
          A(m(), e),
          v((n) => {
            const r = n.getAttribute("action");
            r &&
              r.indexOf("/cart/add") >= 0 &&
              b(n, "submit", (n) => {
                !(function (e, t, n) {
                  const r = t || window.event;
                  if (
                    r.defaultPrevented ||
                    (r.isDefaultPrevented && r.isDefaultPrevented())
                  )
                    return;
                  const o = r.currentTarget || r.srcElement;
                  if (
                    o &&
                    o instanceof Element &&
                    (o.getAttribute("action") || o.getAttribute("href"))
                  )
                    try {
                      const t = (function (e) {
                        let t;
                        const n = e.querySelector('[name="id"]');
                        return (
                          n instanceof HTMLSelectElement && n.options
                            ? (t = n.options[n.selectedIndex])
                            : (n instanceof HTMLOptionElement ||
                                n instanceof HTMLInputElement) &&
                              (t = n),
                          t
                        );
                      })(o);
                      if (!t) return;
                      const r = t.value,
                        i = (function (e) {
                          const t = e.querySelector('[name="quantity"]');
                          return t instanceof HTMLInputElement
                            ? Number(t.value)
                            : 1;
                        })(o),
                        s = (function (e, t) {
                          var n;
                          const [r] =
                            (null === (n = t.productVariants) || void 0 === n
                              ? void 0
                              : n.filter((t) => t.id === e)) || [];
                          if (!r) throw new Error("Product variant not found");
                          return r;
                        })(r, n),
                        a = {
                          cost: {
                            totalAmount: {
                              amount: s.price.amount * i,
                              currencyCode: s.price.currencyCode,
                            },
                          },
                          merchandise: s,
                          quantity: i,
                        };
                      e(l, { cartLine: a }), g(a);
                    } catch (i) {
                      w("handleSubmitCartAdd", i);
                    }
                })(e, n, t);
              });
          });
      }
      function O(e, t, n) {
        var r;
        null != n && n.logLevel && ((r = n.logLevel), (h = r)),
          I(e, t),
          (function (e, t) {
            v((n) => {
              const r = n.querySelector('[name="previous_step"]');
              r &&
                r instanceof HTMLInputElement &&
                "payment_method" === r.value &&
                b(document.body, "submit", (n) => {
                  !(function (e, t, n) {
                    const r = t || window.event,
                      o = r.target || r.srcElement;
                    if (
                      o &&
                      o instanceof HTMLFormElement &&
                      o.getAttribute("action") &&
                      null !== o.getAttribute("data-payment-form")
                    )
                      try {
                        const t = n.checkout;
                        if (!t) throw new Error("Checkout data not found");
                        e(f, { checkout: t });
                      } catch (i) {
                        w("handleSubmitToPaymentAdd", i);
                      }
                  })(e, n, t);
                });
            });
          })(e, t),
          (function (e) {
            document.addEventListener("acceleratedCheckoutStarted", (t) => {
              const n = t;
              try {
                e("accelerated_checkout_started", {
                  acceleratedCheckout: {
                    name: n.detail.acceleratedCheckoutName,
                  },
                });
              } catch (r) {
                w("handleAcceleratedCheckoutStarted", r);
              }
            });
          })(e);
      }
      (C.ADD_TO_CART_REGEX =
        /^(?:\/[a-zA-Z]+(?:-[a-zA-Z]+)?)?\/cart\/add(?:\.js|\.json)?$/),
        (C.CHANGE_TO_CART_REGEX =
          /^(?:\/[a-zA-Z]+(?:-[a-zA-Z]+)?)?\/cart\/change(?:\.js|\.json)?$/);
      const N = {
          TRACKING_ACCEPTED: "trackingConsentAccepted",
          TRACKING_DECLINED: "trackingConsentDeclined",
          MARKETING_ACCEPTED: "firstPartyMarketingConsentAccepted",
          SALE_OF_DATA_ACCEPTED: "thirdPartyMarketingConsentAccepted",
          ANALYTICS_ACCEPTED: "analyticsConsentAccepted",
          PREFERENCES_ACCEPTED: "preferencesConsentAccepted",
          MARKETING_DECLINED: "firstPartyMarketingConsentDeclined",
          SALE_OF_DATA_DECLINED: "thirdPartyMarketingConsentDeclined",
          ANALYTICS_DECLINED: "analyticsConsentDeclined",
          PREFERENCES_DECLINED: "preferencesConsentDeclined",
          CONSENT_COLLECTED: "visitorConsentCollected",
          CONSENT_TRACKING_API_LOADED: "consentTrackingApiLoaded",
        },
        R = "2.1",
        P = { NO_VALUE: "", ACCEPTED: "1", DECLINED: "0" },
        D = {
          PREFERENCES: "p",
          ANALYTICS: "a",
          MARKETING: "m",
          SALE_OF_DATA: "t",
        },
        L = {
          MARKETING: "m",
          ANALYTICS: "a",
          PREFERENCES: "p",
          SALE_OF_DATA: "s",
        },
        M = {
          MARKETING: "marketing",
          ANALYTICS: "analytics",
          PREFERENCES: "preferences",
          SALE_OF_DATA: "sale_of_data",
          EMAIL: "email",
        },
        j = {
          HEADLESS_STOREFRONT: "headlessStorefront",
          ROOT_DOMAIN: "rootDomain",
          CHECKOUT_ROOT_DOMAIN: "checkoutRootDomain",
          STOREFRONT_ROOT_DOMAIN: "storefrontRootDomain",
          STOREFRONT_ACCESS_TOKEN: "storefrontAccessToken",
          IS_EXTENSION_TOKEN: "isExtensionToken",
          METAFIELDS: "metafields",
        },
        $ = ["v", "con"];
      function U(e, t) {
        if (null === e) return "null";
        if (Array.isArray(e)) return `[${e.map((e) => U(e, !0)).join(",")}]`;
        if ("object" == typeof e) {
          let n = [];
          for (const t in e)
            e.hasOwnProperty(t) &&
              void 0 !== e[t] &&
              n.push(`${t}:${U(e[t], !0)}`);
          const r = n.join(",");
          return t ? `{${r}}` : r;
        }
        return "string" == typeof e ? `"${e}"` : `${e}`;
      }
      function z(e) {
        return (function (e) {
          const t = document.cookie ? document.cookie.split("; ") : [];
          for (let n = 0; n < t.length; n++) {
            const [r, o] = t[n].split("=");
            if (e === decodeURIComponent(r))
              return JSON.parse(decodeURIComponent(o));
          }
        })(e);
      }
      function F(e) {
        return e === encodeURIComponent(decodeURIComponent(e));
      }
      function V(e, t, n, r) {
        if (!F(r))
          throw new TypeError("Cookie value is not correctly URI encoded.");
        if (!F(e))
          throw new TypeError("Cookie name is not correctly URI encoded.");
        let o = `${e}=${r}`;
        (o += "; path=/"),
          t && (o += `; domain=${t}`),
          (o += `; expires=${new Date(
            new Date().getTime() + n
          ).toUTCString()}`),
          (o += "; secure"),
          (document.cookie = o);
      }
      n(9666);
      const B = "_tracking_consent",
        H = 31536e6;
      function q() {
        try {
          let e = (function () {
            const e = z(B);
            if (
              void 0 !== e &&
              (t = e).v === R &&
              (function (e, t) {
                const n = t.slice().sort();
                return (
                  e.length === t.length &&
                  e
                    .slice()
                    .sort()
                    .every((e, t) => e === n[t])
                );
              })(
                Object.keys(t).filter(
                  (e) =>
                    "region" !== e && "lim" !== e && "cus" !== e && "reg" !== e
                ),
                $
              )
            )
              return e;
            var t;
          })();
          if (!e) return;
          return e;
        } catch {
          return;
        }
      }
      const K = "_cmp_a";
      function W(e) {
        const t = z(K);
        if (!t) return !0;
        const n = t.purposes[e];
        return "boolean" != typeof n || n;
      }
      function X() {
        return W(D.PREFERENCES);
      }
      function Y() {
        return W(D.ANALYTICS);
      }
      function G() {
        return W(D.MARKETING);
      }
      function J() {
        return W(D.SALE_OF_DATA);
      }
      function Q(e, t) {
        document.dispatchEvent(new CustomEvent(e, { detail: t || {} }));
      }
      const Z = "_landing_page",
        ee = "_orig_referrer";
      function te(e) {
        const t = e.granular_consent;
        return {
          query: `query { consentManagement { cookies(${U({
            visitorConsent: {
              marketing: t.marketing,
              analytics: t.analytics,
              preferences: t.preferences,
              saleOfData: t.sale_of_data,
              ...(t.metafields && { metafields: t.metafields }),
            },
            origReferrer: e.referrer,
            landingPage: e.landing_page,
          })}) { answersCookie trackingConsentCookie cookieDomain landingPageCookie origReferrerCookie } } }`,
          variables: {},
        };
      }
      function ne(e, t) {
        const n = e.granular_consent,
          r =
            n.storefrontAccessToken ||
            (function () {
              const e =
                  document.documentElement.querySelector("#shopify-features"),
                t = "Could not find liquid access token";
              if (!e) return void console.warn(t);
              const n = JSON.parse(e.textContent || "").accessToken;
              if (n) return n;
              console.warn(t);
            })(),
          o = n.checkoutRootDomain || window.location.host,
          i = n.isExtensionToken
            ? "Shopify-Storefront-Extension-Token"
            : "x-shopify-storefront-access-token",
          s = {
            headers: { "content-type": "application/json", [i]: r },
            body: JSON.stringify(te(e)),
            method: "POST",
          };
        return fetch(`https://${o}/api/unstable/graphql.json`, s)
          .then((e) => {
            if (e.ok) return e.json();
            throw new Error("Server error");
          })
          .then((r) => {
            const o = 31536e6,
              i = 12096e5,
              s = r.data.consentManagement.cookies.cookieDomain,
              a = "." + (n.checkoutRootDomain || s || window.location.hostname),
              c =
                "." + (n.storefrontRootDomain || s || window.location.hostname),
              u = r.data.consentManagement.cookies.trackingConsentCookie,
              l = r.data.consentManagement.cookies.answersCookie,
              d = r.data.consentManagement.cookies.landingPageCookie,
              p = r.data.consentManagement.cookies.origReferrerCookie;
            return (
              V(B, a, o, u),
              V(K, a, o, l),
              d && p && (V(Z, a, i, d), V(ee, a, i, p)),
              c !== a &&
                (V(B, c, o, u),
                V(K, c, o, l),
                d && p && (V(Z, c, i, d), V(ee, c, i, p))),
              void 0 !== e.granular_consent &&
                (function (e) {
                  const t = e[D.MARKETING],
                    n = e[D.SALE_OF_DATA],
                    r = e[D.ANALYTICS],
                    o = e[D.PREFERENCES];
                  !0 === t
                    ? Q(N.MARKETING_ACCEPTED)
                    : !1 === t && Q(N.MARKETING_DECLINED),
                    !0 === n
                      ? Q(N.SALE_OF_DATA_ACCEPTED)
                      : !1 === n && Q(N.SALE_OF_DATA_DECLINED),
                    !0 === r
                      ? Q(N.ANALYTICS_ACCEPTED)
                      : !1 === r && Q(N.ANALYTICS_DECLINED),
                    !0 === o
                      ? Q(N.PREFERENCES_ACCEPTED)
                      : !1 === o && Q(N.PREFERENCES_DECLINED);
                  const i = (function (e) {
                    return {
                      marketingAllowed: e[D.MARKETING],
                      saleOfDataAllowed: e[D.SALE_OF_DATA],
                      analyticsAllowed: e[D.ANALYTICS],
                      preferencesAllowed: e[D.PREFERENCES],
                      firstPartyMarketingAllowed: e[D.MARKETING],
                      thirdPartyMarketingAllowed: e[D.SALE_OF_DATA],
                    };
                  })(e);
                  Q(N.CONSENT_COLLECTED, i);
                  const s = [r, o, t, n];
                  s.every((e) => !0 === e) && Q(N.TRACKING_ACCEPTED),
                    s.every((e) => !1 === e) && Q(N.TRACKING_DECLINED);
                })({
                  [D.PREFERENCES]: X(),
                  [D.ANALYTICS]: Y(),
                  [D.MARKETING]: G(),
                  [D.SALE_OF_DATA]: J(),
                }),
              void 0 !== t && t(null, r),
              r
            );
          })
          .catch((e) => {
            const n =
              "Error while setting storefront API consent: " + e.message;
            if (void 0 === t) throw { error: n };
            t({ error: n });
          });
      }
      function re() {
        if ("" === document.referrer) return !0;
        const e = document.createElement("a");
        return (
          (e.href = document.referrer), window.location.hostname != e.hostname
        );
      }
      function oe() {
        return (
          !!(function (e = null) {
            return null === e && (e = q()), void 0 === e;
          })() ||
          (G() && Y())
        );
      }
      function ie() {
        return G();
      }
      function se() {
        return Y();
      }
      function ae() {
        return X();
      }
      function ce() {
        return J();
      }
      function ue(e, t) {
        return "object" == typeof e &&
          e.headlessStorefront &&
          !e.storefrontAccessToken
          ? (console.warn(
              "Headless consent has been updated. Please read shopify.dev/docs/api/customer-privacy to integrate."
            ),
            (function (e, t) {
              function n(e, t = P.NO_VALUE) {
                return !0 === e ? P.ACCEPTED : !1 === e ? P.DECLINED : t;
              }
              const r = {
                  [L.ANALYTICS]: n(e[M.ANALYTICS], P.DECLINED),
                  [L.MARKETING]: n(e[M.MARKETING], P.DECLINED),
                  [L.PREFERENCES]: n(e[M.PREFERENCES], P.DECLINED),
                  [L.SALE_OF_DATA]: n(e[M.SALE_OF_DATA]),
                },
                o = { v: R, reg: "", con: { CMP: r } },
                i = encodeURIComponent(JSON.stringify(o));
              return (
                V(B, e.rootDomain, H, i), t(null), new Promise((e, t) => {})
              );
            })(e, t || (() => {})))
          : (function (e, t) {
              if (
                ((function (e) {
                  if ("boolean" != typeof e && "object" != typeof e)
                    throw TypeError(
                      "setTrackingConsent must be called with a boolean or object consent value"
                    );
                  if ("object" == typeof e) {
                    const t = Object.keys(e);
                    if (0 === t.length)
                      throw TypeError("The submitted consent object is empty.");
                    const n = [
                      M.MARKETING,
                      M.ANALYTICS,
                      M.PREFERENCES,
                      M.SALE_OF_DATA,
                      M.EMAIL,
                      j.ROOT_DOMAIN,
                      j.CHECKOUT_ROOT_DOMAIN,
                      j.STOREFRONT_ROOT_DOMAIN,
                      j.STOREFRONT_ACCESS_TOKEN,
                      j.HEADLESS_STOREFRONT,
                      j.IS_EXTENSION_TOKEN,
                      j.METAFIELDS,
                    ];
                    for (const e of t)
                      if (!n.includes(e))
                        throw TypeError(
                          `The submitted consent object should only contain the following keys: ${n.join(
                            ", "
                          )}. Extraneous key: ${e}.`
                        );
                  }
                })(e),
                void 0 !== t && "function" != typeof t)
              )
                throw TypeError(
                  "setTrackingConsent must be called with a callback function if the callback argument is provided"
                );
              let n;
              !0 === e || !1 === e
                ? (console.warn(
                    "Binary consent is deprecated. Please update to granular consent (shopify.dev/docs/api/consent-tracking)"
                  ),
                  (n = { analytics: e, preferences: e, marketing: e }))
                : (n = e);
              const r = (function (e) {
                  return e ? (re() ? document.referrer : "") : null;
                })(n.analytics),
                o = (function (e) {
                  return e
                    ? re()
                      ? window.location.pathname + window.location.search
                      : "/"
                    : null;
                })(n.analytics);
              return ne(
                {
                  granular_consent: n,
                  ...(null !== r && { referrer: r }),
                  ...(null !== o && { landing_page: o }),
                },
                t
              );
            })(e, t);
      }
      const le = "sh",
        de = "shu",
        pe = [
          "page_viewed",
          "collection_viewed",
          "product_viewed",
          "product_variant_viewed",
          "search_submitted",
          "product_added_to_cart",
          "checkout_started",
          "checkout_completed",
          "payment_info_submitted",
          "checkout_contact_step_started",
          "checkout_contact_info_submitted",
          "checkout_address_info_submitted",
          "checkout_shipping_step_started",
          "checkout_shipping_info_submitted",
          "checkout_payment_step_started",
          "session_started",
        ],
        fe = "wpm",
        me = "trekkie";
      let he, be;
      function we(e) {
        return `${e || le}-${(function () {
          const e = "xxxx-4xxx-xxxx-xxxxxxxxxxxx";
          let t = "";
          try {
            const n = window.crypto,
              r = new Uint16Array(31);
            n.getRandomValues(r);
            let o = 0;
            t = e
              .replace(/[x]/g, (e) => {
                const t = r[o];
                if ("number" != typeof t)
                  throw new Error(
                    `Event ID service: Invalid random number at index "${o}".`
                  );
                const n = t % 16;
                return o++, ("x" === e ? n : (3 & n) | 8).toString(16);
              })
              .toUpperCase();
          } catch (n) {
            t = e
              .replace(/[x]/g, (e) => {
                const t = (16 * Math.random()) | 0;
                return ("x" === e ? t : (3 & t) | 8).toString(16);
              })
              .toUpperCase();
          }
          return `${(function () {
            let e = 0,
              t = 0;
            e = new Date().getTime() >>> 0;
            try {
              t = performance.now() >>> 0;
            } catch (n) {
              t = 0;
            }
            return Math.abs(e + t)
              .toString(16)
              .toLowerCase()
              .padStart(8, "0");
          })()}-${t}`;
        })()}`;
      }
      function ve() {
        (window.Shopify = window.Shopify || {}),
          window.Shopify.evids ||
            ((he = {}),
            (be = { [fe]: {}, [me]: {} }),
            (window.Shopify.evids = (...e) =>
              (function (e, t) {
                if (
                  !(function (e) {
                    return pe.includes(e);
                  })(e) ||
                  ((null == t ? void 0 : t.analyticsFramework) !== me &&
                    (null == t ? void 0 : t.analyticsFramework) !== fe)
                )
                  return we(de);
                const n =
                  "string" == typeof (r = t.cacheKey) && r ? r : "default";
                var r;
                const o = (function (e, t, n) {
                  var r;
                  const o = be[t],
                    i = null !== (r = o[e]) && void 0 !== r ? r : (o[e] = {}),
                    s = i[n];
                  return (i[n] = "number" == typeof s ? s + 1 : 0);
                })(e, t.analyticsFramework, n);
                return (function (e, t, n) {
                  var r, o;
                  const i =
                      null !== (r = he[e]) && void 0 !== r ? r : (he[e] = {}),
                    s = null !== (o = i[n]) && void 0 !== o ? o : [];
                  let a = s[t];
                  return a || ((a = we()), s.push(a)), (i[n] = s), a;
                })(e, o, n);
              })(...e)));
      }
      n(5100), n(7162), n(6403), n(4154), n(4777), n(8846), n(2896);
      const ge = new Set();
      function ye(e) {
        return ge.has(e);
      }
      const xe = "6a396365";
      class Ee extends Set {
        constructor(e, t) {
          if (
            (super(),
            (this.maxSize = void 0),
            (this.keep = void 0),
            (Number.isFinite(e) && !Number.isInteger(e)) || e <= 0)
          )
            throw new Error("Invalid maxSize specified");
          (this.maxSize = e), (this.keep = t);
        }
        push(e) {
          if ("oldest" === this.keep) this.size < this.maxSize && this.add(e);
          else if (
            "newest" === this.keep &&
            (this.add(e), this.size > this.maxSize)
          )
            for (const t of this)
              if ((this.delete(t), this.size <= this.maxSize)) break;
          return this;
        }
      }
      const _e = (e, t, n) => !0;
      class Se {
        constructor({
          bufferSize: e = 50,
          replayKeep: t = "oldest",
          subscribeAllKey: n,
          eligibility: r,
        } = {}) {
          (this.channelSubscribers = new Map()),
            (this.replayQueue = void 0),
            (this.bufferSize = void 0),
            (this.replayKeep = void 0),
            (this.subscribeAllKey = void 0),
            (this.eligibility = void 0),
            (this.bufferSize = e),
            (this.replayKeep = t),
            (this.subscribeAllKey = n),
            (this.replayQueue = new Ee(e, t)),
            (this.eligibility = null != r ? r : _e);
        }
        publish(e, t, n = {}) {
          var r;
          if (this.subscribeAllKey && e === this.subscribeAllKey)
            throw new Error(`Cannot publish to ${String(e)}`);
          this.replayQueue.push({ name: e, payload: t, options: n });
          const o = (r, o) => {
            this.eligibility(n, r, e) && o.call({}, { ...t });
          };
          var i;
          return (
            null === (r = this.channelSubscribers.get(e)) ||
              void 0 === r ||
              r.forEach(o),
            this.subscribeAllKey &&
              (null ===
                (i = this.channelSubscribers.get(this.subscribeAllKey)) ||
                void 0 === i ||
                i.forEach(o)),
            !0
          );
        }
        subscribe(e, t, n = {}) {
          const r = this.channelSubscribers.get(e) || new Map();
          return (
            this.channelSubscribers.set(e, r.set(t, n)),
            this.replayQueue.forEach(({ name: r, payload: o, options: i }) => {
              (e === r ||
                (this.subscribeAllKey && e === this.subscribeAllKey)) &&
                this.eligibility(i, n, r) &&
                t.call({}, { ...o });
            }),
            () => r.delete(t)
          );
        }
      }
      const ke = {
        randomUUID:
          "undefined" != typeof crypto &&
          crypto.randomUUID &&
          crypto.randomUUID.bind(crypto),
      };
      let Ce;
      const Ae = new Uint8Array(16);
      function Te() {
        if (
          !Ce &&
          ((Ce =
            "undefined" != typeof crypto &&
            crypto.getRandomValues &&
            crypto.getRandomValues.bind(crypto)),
          !Ce)
        )
          throw new Error(
            "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported"
          );
        return Ce(Ae);
      }
      const Ie = [];
      for (let n = 0; n < 256; ++n) Ie.push((n + 256).toString(16).slice(1));
      const Oe = function (e, t, n) {
        if (ke.randomUUID && !t && !e) return ke.randomUUID();
        const r = (e = e || {}).random || (e.rng || Te)();
        if (((r[6] = (15 & r[6]) | 64), (r[8] = (63 & r[8]) | 128), t)) {
          n = n || 0;
          for (let e = 0; e < 16; ++e) t[n + e] = r[e];
          return t;
        }
        return (function (e, t = 0) {
          return (
            Ie[e[t + 0]] +
            Ie[e[t + 1]] +
            Ie[e[t + 2]] +
            Ie[e[t + 3]] +
            "-" +
            Ie[e[t + 4]] +
            Ie[e[t + 5]] +
            "-" +
            Ie[e[t + 6]] +
            Ie[e[t + 7]] +
            "-" +
            Ie[e[t + 8]] +
            Ie[e[t + 9]] +
            "-" +
            Ie[e[t + 10]] +
            Ie[e[t + 11]] +
            Ie[e[t + 12]] +
            Ie[e[t + 13]] +
            Ie[e[t + 14]] +
            Ie[e[t + 15]]
          );
        })(r);
      };
      n(8771);
      let Ne = (function (e) {
          return (
            (e.Custom = "custom"),
            (e.Dom = "dom"),
            (e.Error = "error"),
            (e.Standard = "standard"),
            e
          );
        })({}),
        Re = (function (e) {
          return (e.ExtendedDom = "extended-dom"), (e.Meta = "meta"), e;
        })({}),
        Pe = (function (e) {
          return (e.App = "APP"), (e.Custom = "CUSTOM"), e;
        })({}),
        De = (function (e) {
          return (e.Strict = "STRICT"), (e.Lax = "LAX"), (e.Open = "OPEN"), e;
        })({});
      function Le(e) {
        return "shopify-custom-pixel" === e.id
          ? "shopify-pixel"
          : e.type === Pe.Custom
          ? "-1"
          : e.apiClientId
          ? `${e.apiClientId}`
          : void 0;
      }
      let Me = (function (e) {
          return (
            (e.Shopify = "shopify"),
            (e.StorefrontRenderer = "storefront-renderer"),
            (e.CheckoutOne = "checkout-one"),
            (e.CheckoutOneSdk = "checkout-one-sdk"),
            (e.Unknown = "unknown"),
            e
          );
        })({}),
        je = (function (e) {
          return (
            (e.Storefront = "storefront"),
            (e.Checkout = "checkout"),
            (e.Unknown = "unknown"),
            e
          );
        })({}),
        $e = (function (e) {
          return (
            (e.WebPixelExtension = "web-pixel-extension"),
            (e.CheckoutOneSdk = "checkout-one-sdk"),
            (e.Unknown = "unknown"),
            e
          );
        })({});
      const Ue = (e, t, n) => {
        const { pixelRuntimeConfig: r } = t || {},
          { apiClientId: o, restrictions: i } = r || {},
          { allowedEvents: s, disallowedEvents: a } = i || {},
          { sendTo: c } = e || {},
          u = c && String(c) === String(o),
          l = c && !u,
          d = !s || s.includes(n),
          p = a && a.includes(n);
        return Boolean((d && !p && !l) || u);
      };
      function ze(e) {
        if (e <= 0 || e > 100) throw new Error("Invalid sampling percent");
        return 100 * Math.random() <= e;
      }
      n(9397);
      var Fe = n(3482),
        Ve = n.n(Fe);
      class Be extends Error {
        constructor(...e) {
          super(...e),
            (this.message =
              "Excessive Stacktrace: May indicate infinite loop forming");
        }
      }
      var He = n(8047);
      class qe extends Error {
        constructor(...e) {
          super(...e),
            Error.captureStackTrace && Error.captureStackTrace(this, qe);
        }
      }
      const Ke = {
          production: "https://notify.bugsnag.com",
          test: "https://localhost",
        },
        We = {
          severity: "error",
          context: "",
          unhandled: !0,
          library: "browser",
        },
        Xe = {
          notify: (e, n) => {
            try {
              if (n?.options?.sampleRate && !ze(n.options.sampleRate)) return;
              const u = { ...We, ...n };
              let l = {
                errorClass: e?.name,
                message: e?.message,
                stacktrace: [],
                type: "browserjs",
              };
              try {
                l = (function (e) {
                  if (
                    ((t = e),
                    "string" !=
                      typeof (
                        t?.stack ||
                        t?.stacktrace ||
                        t?.["opera#sourceloc"]
                      ) || t.stack === `${t.name}: ${t.message}`)
                  )
                    throw new Error(
                      "Error incompatible with error-stack-parser"
                    );
                  var t;
                  const n = Ve()
                    .parse(e)
                    .reduce((e, t) => {
                      const n = (function ({
                        functionName: e,
                        lineNumber: t,
                        columnNumber: n,
                      }) {
                        const r = /^global code$/i.test((o = e) || "")
                          ? "global code"
                          : o;
                        var o;
                        return {
                          file: `https://cdn.shopify.com/cdn/wpm/${s}`,
                          method: r,
                          lineNumber: t,
                          columnNumber: n,
                        };
                      })(t);
                      try {
                        return "{}" === JSON.stringify(n) ? e : e.concat(n);
                      } catch (r) {
                        return e;
                      }
                    }, []);
                  return {
                    errorClass: e?.name,
                    message: e?.message,
                    stacktrace: n,
                    type: "browserjs",
                  };
                })(e);
              } catch (a) {
                try {
                  l = (function (e, t) {
                    let n = "";
                    const r = {
                      lineNumber: "1",
                      columnNumber: "1",
                      method: t.context,
                      file: `https://cdn.shopify.com/cdn/wpm/${s}`,
                    };
                    if (e.stackTrace || e.stack || e.description) {
                      n = e.stack.split("\n")[0];
                      const t = e.stack.match(/([0-9]+):([0-9]+)/);
                      if (
                        t &&
                        t.length > 2 &&
                        ((r.lineNumber = t[1]),
                        (r.columnNumber = t[2]),
                        parseInt(r.lineNumber, 10) > 1e5)
                      )
                        throw new Be();
                    }
                    return {
                      errorClass: e?.name || n,
                      message: e?.message || n,
                      stacktrace: [r],
                      type: "browserjs",
                    };
                  })(e, u);
                } catch (c) {
                  if (c instanceof Be) return;
                }
              }
              const d = (function (
                  n,
                  {
                    userAgent: s,
                    context: a,
                    severity: c,
                    unhandled: u,
                    library: l,
                    hashVersionSandbox: d,
                    sandboxUrl: p,
                    pixelId: f,
                    pixelType: m,
                    runtimeContext: h,
                    shopId: b,
                    initConfig: w,
                    notes: v,
                  }
                ) {
                  const {
                    device: g,
                    os: y,
                    browser: x,
                    engine: E,
                  } = (function (t) {
                    try {
                      return new He.UAParser(t).getResult();
                    } catch (e) {
                      return {
                        ua: "",
                        browser: { name: "", version: "", major: "" },
                        engine: { name: "", version: "" },
                        os: { name: "", version: "" },
                        device: { model: "", type: "", vendor: "" },
                        cpu: { architecture: "" },
                      };
                    }
                  })(s || self.navigator?.userAgent);
                  return {
                    payloadVersion: 5,
                    notifier: {
                      name: "web-pixel-manager",
                      version: r,
                      url: "-",
                    },
                    events: [
                      {
                        exceptions: [n],
                        context: a,
                        severity: c,
                        unhandled: u,
                        app: { version: r },
                        device: {
                          manufacturer: g.vendor,
                          model: g.model,
                          osName: y.name,
                          osVersion: y.version,
                          browserName: x.name,
                          browserVersion: x.version,
                        },
                        metaData: {
                          app: {
                            library: l,
                            browserTarget: o,
                            env: t,
                            hashVersion: i,
                            hashVersionSandbox: d || "N/A",
                            sandboxUrl: p || "N/A",
                          },
                          device: {
                            userAgent: s || self.navigator?.userAgent,
                            renderingEngineName: E.name,
                            renderingEngineVersion: E.version,
                          },
                          request: {
                            shopId: b,
                            shopUrl: self.location.href,
                            pixelId: f,
                            pixelType: m,
                            runtimeContext: h,
                          },
                          "Additional Notes": {
                            initConfig: JSON.stringify(w),
                            notes: v,
                          },
                        },
                      },
                    ],
                  };
                })(l, u),
                p = Ke[t];
              if (!p) return void console?.log(`[${t}]`, "Bugsnag notify:", d);
              fetch(p, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  "Bugsnag-Api-Key": "bcbc9f6762da195561967577c2d74ff8",
                  "Bugsnag-Payload-Version": "5",
                },
                body: JSON.stringify(d),
              }).catch(() => {});
            } catch (u) {}
          },
        };
      function Ye(e) {
        const t = {};
        for (const n in e)
          if (Object.prototype.hasOwnProperty.call(e, n)) {
            const r = n.replace(/[A-Z]/g, (e) => `_${e}`).toLowerCase(),
              o = e[n];
            t[r] = null !== o && "object" == typeof o ? Ye(o) : o;
          }
        return t;
      }
      function Ge(e) {
        return e.replace(/\/$/, "");
      }
      n(2560);
      const Je = {},
        Qe = {
          "pixel:register": {
            start: {
              name: "pixel:register:started",
              params: { pixelId: "", source: "" },
            },
            end: {
              name: "pixel:register:completed",
              params: { pixelId: "", source: "" },
            },
          },
          "page:session": {
            start: { name: "start", params: Je },
            end: { name: "page:unload", params: Je },
          },
          completed: {
            start: { name: "start", params: Je },
            end: { name: "pixels:resolved", params: Je },
          },
        };
      function Ze(e, t = Je) {
        const n = et(e, "end", t),
          r = (function (e, t) {
            try {
              const n = tt(e, "start", t),
                r = tt(e, "end", t),
                o = (function (e, t) {
                  return nt(e, t);
                })(e, t),
                i = self.performance.measure(o, n, r);
              return {
                ...i,
                duration: Math.round(i.duration),
                startTime: Math.round(i.startTime),
              };
            } catch (n) {
              return null;
            }
          })(e, t);
        return { mark: n, measurement: r };
      }
      function et(e, t, n) {
        try {
          const r = tt(e, t, n);
          return self.performance.mark(r), { name: r, params: n };
        } catch (r) {
          return { name: null, params: n };
        }
      }
      function tt(e, t, n) {
        return nt(Qe[e][t].name, n);
      }
      function nt(e, t = {}) {
        const n = ["wpm", e];
        return (
          Object.keys(t).forEach((e) => {
            const r = t[e];
            r && n.push(r);
          }),
          n.join(":")
        );
      }
      const rt = {
        test: "edge_test_click/1.0",
        load: "web_pixels_manager_load/3.1",
        init: "web_pixels_manager_init/3.2",
        register: "web_pixels_manager_pixel_register/3.6",
        subscriberEventEmit: "web_pixels_manager_subscriber_event_emit/4.0",
        eventPublish: "web_pixels_manager_event_publish/1.6",
        consentAccepted: "web_pixels_manager_consent_accepted/1.2",
        unload: "web_pixels_manager_unload/1.2",
        visitor: "web_pixels_manager_visitor/1.0",
        subscriberEventEmitDom:
          "web_pixels_manager_subscriber_event_emit_dom/2.0",
        subscriberEventEmitPrivacy:
          "web_pixels_manager_subscriber_event_emit_privacy/1.0",
        helperLoad: "web_pixels_helper_load/1.0",
        helperWindowButtonClick: "web_pixels_helper_window_button_click/1.0",
      };
      function ot(e, t) {
        return { schemaId: rt[e], payload: t };
      }
      let it = "";
      function st(e = "") {
        it = Ge(e);
      }
      const at = "",
        ct = 500;
      let ut = "wellKnown";
      const lt = new Array();
      let dt;
      function pt(e, t = !1) {
        const n = {
          schema_id: e.schemaId,
          payload: Ye(e.payload),
          metadata: { event_created_at_ms: ht() },
        };
        lt.push(n), t ? mt() : void 0 === dt && (dt = setTimeout(mt, ct));
      }
      function ft(e, t, n = !1) {
        pt(ot(e, t), n);
      }
      function mt({ skipXhr: e } = { skipXhr: !1 }) {
        if (((dt = void 0), 0 === lt.length)) return;
        const t = [...lt];
        (lt.length = 0),
          (function (e, t) {
            if (0 === e.length) return !1;
            const n = { metadata: { event_sent_at_ms: ht() }, events: e };
            !(function (e, t) {
              const n = `${
                {
                  global: "https://monorail-edge.shopifysvc.com",
                  wellKnown: ``,
                  staging: "https://monorail-edge-staging.shopifycloud.com",
                  test: "https://localhost",
                }[ut]
              }${at}`;
              try {
                if (self.navigator.sendBeacon.bind(self.navigator)(n, e))
                  return !0;
              } catch (r) {}
              if (!t) {
                const t = new XMLHttpRequest();
                try {
                  t.open("POST", n, !0),
                    t.setRequestHeader("Content-Type", "text/plain"),
                    t.send(e);
                } catch (o) {
                  Xe.notify(o, {
                    context: "v0/utilities/monorail/sendRequest",
                    unhandled: !1,
                  });
                }
              }
            })(JSON.stringify(n), t);
          })(t, e);
      }
      function ht() {
        return new Date().getTime();
      }
      class bt {
        constructor(e) {
          (this.maxSize = e), (this.cache = new Map());
        }
        get(e) {
          if (!this.cache.has(e)) return;
          const t = this.cache.get(e);
          return this.cache.delete(e), this.cache.set(e, t), t;
        }
        has(e) {
          return this.cache.has(e);
        }
        set(e, t) {
          if (this.cache.size >= this.maxSize) {
            const e = this.cache.keys().next().value;
            this.cache.delete(e);
          }
          return this.cache.set(e, t), this;
        }
        delete(e) {
          return this.cache.delete(e);
        }
        clear() {
          this.cache.clear();
        }
      }
      const wt = (e) => ("number" == typeof e ? new bt(e) : new Map()),
        vt = (...e) => JSON.stringify(e);
      function gt(e, { cache: t, cacheKey: n = vt } = {}) {
        function r(...t) {
          const o = r.cache,
            i = n.apply(this, t);
          if (o.has(i)) return o.get(i);
          {
            const n = e(...t);
            return o.set(i, n), n;
          }
        }
        return (r.cache = t ?? wt()), r;
      }
      const yt = gt(
          (e = "") => {
            const t = e.indexOf("=");
            return -1 === t
              ? [e.trim(), void 0]
              : [e.slice(0, t).trim(), e.slice(t + 1).trim()];
          },
          { cache: wt(100), cacheKey: (e = "") => e }
        ),
        xt = gt(
          (e = "") =>
            e.split(";").reduce((e, t) => {
              const [n, r] = yt(t);
              if (n)
                try {
                  e[decodeURIComponent(n)] = decodeURIComponent(r ?? "");
                } catch {
                  e[n] = r ?? "";
                }
              return e;
            }, Object.create(null)),
          { cache: wt(50), cacheKey: (e = "") => e }
        );
      let Et = !1;
      n(3256);
      const _t = [],
        St = (e) => {
          _t.push(e);
        };
      function kt(e) {
        const t = e;
        _t.forEach((e) => {
          e(t);
        });
      }
      let Ct = !1;
      const At = ["analytics", "preferences", "marketing", "sale_of_data"];
      function Tt(e, t) {
        return e ? !t || Object.keys(e).every((n) => !e[n] || t[n]) : oe();
      }
      function It(e) {
        return new Promise((t, n) => {
          const r = {
            analytics: se(),
            marketing: ie(),
            preferences: ae(),
            sale_of_data: ce(),
          };
          Tt(e, r)
            ? t(!0)
            : St((n) => {
                (function (e, t) {
                  const n = e.detail;
                  return Tt(t, {
                    analytics: !0 === n?.analyticsAllowed,
                    marketing: !0 === n?.marketingAllowed,
                    preferences: !0 === n?.preferencesAllowed,
                    sale_of_data: !0 === n?.saleOfDataAllowed,
                  });
                })(n, e) && t(!0);
              });
        });
      }
      const Ot = new Set();
      class Nt extends Error {
        constructor(e) {
          super(e), (this.name = "VisitorError");
        }
      }
      let Rt, Pt;
      function Dt() {
        return (
          Rt ||
            (Rt = (function () {
              let e;
              try {
                e = window.Shopify?.evids
                  ? window.Shopify?.evids("session_started", {
                      analyticsFramework: "wpm",
                    })
                  : Oe();
              } catch (t) {
                e = Oe();
              }
              return e;
            })()),
          Rt
        );
      }
      n(1412), n(1883), n(286);
      const Lt = () => (
          void 0 === Pt &&
            (Pt = (function () {
              let e = !1;
              try {
                const t = {
                    get passive() {
                      return (e = !0), !1;
                    },
                  },
                  n = () => {};
                self.addEventListener("test", n, t),
                  self.removeEventListener("test", n, t);
              } catch (t) {
                return !1;
              }
              return e;
            })()),
          Pt
        ),
        Mt = { capture: !0, passive: !0 };
      function jt(e, t, n, r = {}) {
        const o = r.addEventListenerOptions
          ? { ...Mt, ...r.addEventListenerOptions }
          : Mt;
        try {
          const i = (function (e, { sampleRate: t, throttleDelay: n } = {}) {
            const r = (n) => {
              try {
                e(n);
              } catch (r) {
                Xe.notify(r, {
                  context: "v0/createDomEventsListener/listenTo/handler",
                  unhandled: !1,
                  options: { sampleRate: t ?? 50 },
                });
              }
            };
            return "number" == typeof n
              ? (function (e, t, { leading: n = !0, trailing: r = !0 } = {}) {
                  if (t <= 0)
                    throw new Error(
                      "The throttle function requires a positive wait time above zero."
                    );
                  if (!n && !r)
                    throw new Error(
                      "The throttle function requires at least one of leading or trailing to be true, otherwise, its callback will never be called."
                    );
                  let o,
                    i,
                    s,
                    a = null,
                    c = 0;
                  function u() {
                    (c = !1 === n ? 0 : new Date().valueOf()),
                      (a = null),
                      o && (i = e.apply(s, o)),
                      (s = null),
                      (o = null);
                  }
                  return function (...l) {
                    const d = new Date().valueOf();
                    c || !1 !== n || (c = d);
                    const p = t - (d - c);
                    return (
                      (s = this),
                      (o = l),
                      p <= 0 || p > t
                        ? (a && (clearTimeout(a), (a = null)),
                          (c = d),
                          o && (i = e.apply(s, o)),
                          (s = null),
                          (o = null))
                        : a || !1 === r || (a = setTimeout(u, p)),
                      i
                    );
                  };
                })(r, n)
              : r;
          })(n, r);
          return (
            e.addEventListener(t, i, Lt() ? o : o.capture),
            () => {
              e.removeEventListener(t, i, Lt() ? o : o.capture);
            }
          );
        } catch (i) {
          Xe.notify(i, {
            context: "v0/createDomEventsListener/listenTo",
            unhandled: !1,
          });
        }
        return () => {};
      }
      function $t(e, t) {
        return t.reduce((t, n) => (n in e && (t[n] = e[n]), t), {});
      }
      const Ut = new RegExp(
          [
            "password",
            "pass",
            "pw",
            "ssn",
            "sin",
            "social",
            "security",
            "cc",
            "card",
            "creditcard",
            "cvv",
            "cvc",
            "cvn",
            "billing",
            "license",
            "health",
            "secret",
            "unique",
          ]
            .map((e) => `^(.*[^a-z])?${e}([^a-z].*)?$`)
            .join("|"),
          "i"
        ),
        zt = "******",
        Ft = ["SCRIPT", "IFRAME"],
        Vt = (e) => {
          if (!(e instanceof HTMLElement)) return !1;
          if (
            Ft.includes(e.tagName.toUpperCase()) ||
            "exclude" === e.dataset.shopifyPrivacy ||
            e.hidden
          )
            return !0;
          const t = e.parentElement;
          return !!t && Vt(t);
        },
        Bt = ["id", "name", "type"],
        Ht = (e) =>
          (e instanceof HTMLElement && "redact" === e.dataset.shopifyPrivacy) ||
          Bt.some((t) => {
            const n = e.getAttribute(t);
            return "string" == typeof n && n.match(Ut);
          }),
        qt = (e, t) => (
          "value" in t && "string" == typeof t.value && Ht(e) && (t.value = zt),
          t
        ),
        Kt = ["number", "string", "boolean"];
      function Wt(e, t, n) {
        const r = t.reduce((t, r) => {
          const o = (function (e, t, n) {
            if (t in e) {
              const n = e[t];
              if (Kt.includes(typeof n)) return n;
            }
            return e.getAttribute(t) ?? n;
          })(e, r, n?.[r]);
          return void 0 !== o && (t[r] = o), t;
        }, {});
        return qt(e, r), r;
      }
      const Xt = {
          id: null,
          href: null,
          name: null,
          tagName: null,
          type: null,
          value: null,
        },
        Yt = Object.keys(Xt);
      function Gt(e) {
        return Wt(e, Yt, Xt);
      }
      const Jt = [
          "screenX",
          "screenY",
          "pageX",
          "pageY",
          "offsetX",
          "offsetY",
          "movementX",
          "movementY",
        ],
        Qt = Jt.reduce((e, t) => ((e[t] = 0), e), {});
      let Zt = 0;
      const en = new WeakMap();
      function tn(e) {
        if (!e) return -1;
        let t = en.get(e);
        return void 0 === t && ((t = Zt), en.set(e, t), (Zt += 1)), t;
      }
      const nn = new WeakMap();
      function rn(e) {
        if (!e)
          return { parentSerializationId: -1, prevSiblingSerializationId: -1 };
        if (!nn.has(e)) {
          let t = e.previousSibling;
          for (; t && Vt(t); ) t = t.previousSibling;
          nn.set(e, {
            parentSerializationId: tn(e.parentNode),
            prevSiblingSerializationId: tn(t),
          });
        }
        return nn.get(e);
      }
      function on(e) {
        nn.delete(e);
      }
      function sn(e) {
        const t = { nodeType: e.nodeType, serializationId: tn(e) };
        if (e instanceof Element) {
          (t.attributes = Wt(e, [...e.getAttributeNames(), "value"])),
            (t.tagName = e.tagName);
          const { x: n, y: r, height: o, width: i } = e.getBoundingClientRect();
          (t.clientRect = { x: n, y: r, height: o, width: i }),
            (t.scroll = {
              x: e.scrollLeft,
              y: e.scrollTop,
              width: e.scrollWidth,
              height: e.scrollHeight,
            });
        }
        return (
          e.nodeType === Node.TEXT_NODE &&
            (t.textContent = e.textContent ?? ""),
          t
        );
      }
      function an(e, t) {
        return { element: sn(t), ...Qt, ...$t(e, Jt) };
      }
      const cn = [
          HTMLInputElement,
          HTMLSelectElement,
          HTMLTextAreaElement,
          HTMLButtonElement,
        ],
        un = ["id", "name", "tagName", "type", "value"];
      function ln(e) {
        return Wt(e, un);
      }
      const dn =
          (e, t) =>
          (n, { eventPrefix: r } = {}) =>
            jt(window, e, (e) => {
              const o = e?.target;
              (o instanceof HTMLInputElement ||
                o instanceof HTMLSelectElement ||
                o instanceof HTMLTextAreaElement) &&
                !Vt(o) &&
                (r
                  ? n(`${r}${t}`, { element: sn(o) })
                  : n(t, { element: ln(o) }));
            }),
        pn = dn("blur", "input_blurred"),
        fn = dn("focus", "input_focused"),
        mn = dn("change", "input_changed");
      n(9661);
      const hn = (e, t) =>
          Array.from(e).reduce((e, n) => (Vt(n) || e.push(t(n)), e), []),
        bn = (e) => ({
          element: sn(e),
          children: hn(e.childNodes, bn),
          ...rn(e),
        }),
        wn = ["action", "id"],
        vn = [
          pn,
          mn,
          (e, { eventPrefix: t } = {}) =>
            jt(
              self.window,
              "click",
              (n) => {
                const r = n?.target;
                if (!(r instanceof Element) || Vt(r)) return;
                const o = t
                  ? an(n, r)
                  : (function (e, t) {
                      return { element: Gt(t), ...Qt, ...$t(e, Jt) };
                    })(n, r);
                e(`${t ?? ""}clicked`, o);
              },
              { throttleDelay: 50 }
            ),
          fn,
          (e, { eventPrefix: t } = {}) =>
            jt(window, "submit", (n) => {
              const r = n?.target;
              r instanceof HTMLFormElement &&
                !Vt(r) &&
                (t
                  ? e(`${t}form_submitted`, { element: bn(r) })
                  : e("form_submitted", {
                      element: {
                        ...Wt(r, wn),
                        elements: Array.from(r.elements)
                          .filter(
                            (e) => cn.some((t) => e instanceof t) && !Vt(e)
                          )
                          .map((e) => ln(e)),
                      },
                    }));
            }),
        ],
        gn = (e, t) => {
          const n = vn.map((n) => n(e, t));
          return () => {
            n.forEach((e) => e());
          };
        };
      function yn() {
        return /checkouts\/(.+)\/(thank_you|thank-you|post_purchase)$/.test(
          self.location.pathname
        );
      }
      const xn = {
          string: "[object String]",
          number: "[object Number]",
          boolean: "[object Boolean]",
          undefined: "[object Undefined]",
          null: "[object Null]",
          object: "[object Object]",
        },
        En = [xn.string, xn.number, xn.boolean, xn.undefined, xn.null],
        _n = (e) =>
          null === e
            ? xn.null
            : void 0 === e
            ? xn.undefined
            : Object.prototype.toString.call(e);
      function Sn(e) {
        let t = null,
          n = null;
        function r(e) {
          return _n(e) === xn.object;
        }
        return void 0 === e || r(e)
          ? {
              isValid: (function e(o, i = "root") {
                if (Array.isArray(o))
                  return o.every((t, n) => e(t, `${i}[${n}]`));
                if (r(o))
                  return Object.keys(o).every((t) => e(o[t], `${i}.${t}`));
                const s = _n(o),
                  a = En.includes(s);
                return (
                  a ||
                    ((n = i),
                    (t = `Value of type "${s}" at "${n}" must be one of the following types: ${En.join(
                      ", "
                    )}.`)),
                  a
                );
              })(e, "root"),
              error: t,
              errorKey: n,
            }
          : ((n = "root"),
            (t = `Value of type "${_n(e)}" at "${n}" must be an object.`),
            { isValid: !1, error: t, errorKey: n });
      }
      let kn, Cn;
      function An() {
        if (void 0 !== kn) return kn;
        try {
          return (
            window.localStorage.setItem("local-storage-test", "test"),
            window.localStorage.removeItem("local-storage-test"),
            (kn = !0),
            !0
          );
        } catch (e) {
          return (kn = !1), !1;
        }
      }
      function Tn() {
        if (void 0 !== Cn) return Cn;
        try {
          return (
            window.sessionStorage.setItem("session-storage-test", "test"),
            window.sessionStorage.removeItem("session-storage-test"),
            (Cn = !0),
            !0
          );
        } catch (e) {
          return (Cn = !1), !1;
        }
      }
      n(7866);
      const In = 216,
        On = 300,
        Nn = 300,
        Rn = 200,
        Pn = "remote-ui::ready";
      function Dn(e, { terminate: t = !0, targetOrigin: n = "*" } = {}) {
        var r;
        if ("undefined" == typeof window)
          throw new Error(
            "You can only run fromIframe() in a browser context, but no window was found."
          );
        const o = new WeakMap();
        let i;
        function s(t) {
          t.source === e.contentWindow &&
            t.data === Pn &&
            (window.removeEventListener("message", s), i());
        }
        null === (r = e.contentWindow) || void 0 === r || r.postMessage(Pn, n);
        const a = new Promise((e) => {
          (i = e), window.addEventListener("message", s);
        });
        return {
          async postMessage(t, r) {
            var o;
            await a,
              null === (o = e.contentWindow) ||
                void 0 === o ||
                o.postMessage(t, n, r);
          },
          addEventListener(t, n) {
            const r = (t) => {
              t.source === e.contentWindow && n(t);
            };
            o.set(n, r), self.addEventListener(t, r);
          },
          removeEventListener(e, t) {
            const n = o.get(t);
            null != n && (o.delete(t), self.removeEventListener(e, n));
          },
          terminate() {
            window.removeEventListener("message", s), t && e.remove();
          },
        };
      }
      const Ln = Symbol.for("RemoteUi::Retain"),
        Mn = Symbol.for("RemoteUi::Release"),
        jn = Symbol.for("RemoteUi::RetainedBy");
      class $n {
        constructor() {
          this.memoryManaged = new Set();
        }
        add(e) {
          this.memoryManaged.add(e), e[jn].add(this), e[Ln]();
        }
        release() {
          for (const e of this.memoryManaged) e[jn].delete(this), e[Mn]();
          this.memoryManaged.clear();
        }
      }
      function Un(e) {
        return Boolean(e && e[Ln] && e[Mn]);
      }
      function zn(e, { deep: t = !0 } = {}) {
        return Fn(e, t, new Map());
      }
      function Fn(e, t, n) {
        const r = n.get(e);
        if (null != r) return r;
        const o = Un(e);
        if ((o && e[Ln](), n.set(e, o), t)) {
          if (Array.isArray(e)) {
            const r = e.reduce((e, r) => Fn(r, t, n) || e, o);
            return n.set(e, r), r;
          }
          if (Vn(e)) {
            const r = Object.keys(e).reduce((r, o) => Fn(e[o], t, n) || r, o);
            return n.set(e, r), r;
          }
        }
        return n.set(e, o), o;
      }
      function Vn(e) {
        if (null == e || "object" != typeof e) return !1;
        const t = Object.getPrototypeOf(e);
        return null == t || t === Object.prototype;
      }
      n(1404);
      const Bn = "_@f";
      function Hn(e) {
        const t = new Map(),
          n = new Map(),
          r = new Map();
        return {
          encode: function r(o, i = new Map()) {
            if (null == o) return [o];
            const s = i.get(o);
            if (s) return s;
            if ("object" == typeof o) {
              if (Array.isArray(o)) {
                i.set(o, [void 0]);
                const e = [],
                  t = [
                    o.map((t) => {
                      const [n, o = []] = r(t, i);
                      return e.push(...o), n;
                    }),
                    e,
                  ];
                return i.set(o, t), t;
              }
              if (Vn(o)) {
                i.set(o, [void 0]);
                const e = [],
                  t = [
                    Object.keys(o).reduce((t, n) => {
                      const [s, a = []] = r(o[n], i);
                      return e.push(...a), { ...t, [n]: s };
                    }, {}),
                    e,
                  ];
                return i.set(o, t), t;
              }
            }
            if ("function" == typeof o) {
              if (t.has(o)) {
                const e = t.get(o),
                  n = [{ [Bn]: e }];
                return i.set(o, n), n;
              }
              const r = e.uuid();
              t.set(o, r), n.set(r, o);
              const s = [{ [Bn]: r }];
              return i.set(o, s), s;
            }
            const a = [o];
            return i.set(o, a), a;
          },
          decode: o,
          async call(e, t) {
            const r = new $n(),
              i = n.get(e);
            if (null == i)
              throw new Error(
                "You attempted to call a function that was already released."
              );
            try {
              const e = Un(i) ? [r, ...i[jn]] : [r];
              return await i(...o(t, e));
            } finally {
              r.release();
            }
          },
          release(e) {
            const r = n.get(e);
            r && (n.delete(e), t.delete(r));
          },
          terminate() {
            t.clear(), n.clear(), r.clear();
          },
        };
        function o(t, n) {
          if ("object" == typeof t) {
            if (null == t) return t;
            if (Array.isArray(t)) return t.map((e) => o(e, n));
            if (Bn in t) {
              const o = t[Bn];
              if (r.has(o)) return r.get(o);
              let i = 0,
                s = !1;
              const a = () => {
                  (i -= 1), 0 === i && ((s = !0), r.delete(o), e.release(o));
                },
                c = () => {
                  i += 1;
                },
                u = new Set(n),
                l = (...t) => {
                  if (s)
                    throw new Error(
                      "You attempted to call a function that was already released."
                    );
                  if (!r.has(o))
                    throw new Error(
                      "You attempted to call a function that was already revoked."
                    );
                  return e.call(o, t);
                };
              Object.defineProperties(l, {
                [Mn]: { value: a, writable: !1 },
                [Ln]: { value: c, writable: !1 },
                [jn]: { value: u, writable: !1 },
              });
              for (const e of u) e.add(l);
              return r.set(o, l), l;
            }
            if (Vn(t))
              return Object.keys(t).reduce(
                (e, r) => ({ ...e, [r]: o(t[r], n) }),
                {}
              );
          }
          return t;
        }
      }
      const qn = 0,
        Kn = 1,
        Wn = 2,
        Xn = 3,
        Yn = 5,
        Gn = 6;
      function Jn(
        e,
        { uuid: t = Qn, createEncoder: n = Hn, callable: r } = {}
      ) {
        let o = !1,
          i = e;
        const s = new Map(),
          a = new Map(),
          c = (function (e, t) {
            let n;
            if (null == t) {
              if ("function" != typeof Proxy)
                throw new Error(
                  "You must pass an array of callable methods in environments without Proxies."
                );
              const t = new Map();
              n = new Proxy(
                {},
                {
                  get(n, r) {
                    if (t.has(r)) return t.get(r);
                    const o = e(r);
                    return t.set(r, o), o;
                  },
                }
              );
            } else {
              n = {};
              for (const r of t)
                Object.defineProperty(n, r, {
                  value: e(r),
                  writable: !1,
                  configurable: !0,
                  enumerable: !0,
                });
            }
            return n;
          })(p, r),
          u = n({
            uuid: t,
            release(e) {
              l(Xn, [e]);
            },
            call(e, n, r) {
              const o = t(),
                i = f(o, r),
                [s, a] = u.encode(n);
              return l(Yn, [o, e, s], a), i;
            },
          });
        return (
          i.addEventListener("message", d),
          {
            call: c,
            replace(e) {
              const t = i;
              (i = e),
                t.removeEventListener("message", d),
                e.addEventListener("message", d);
            },
            expose(e) {
              for (const t of Object.keys(e)) {
                const n = e[t];
                "function" == typeof n ? s.set(t, n) : s.delete(t);
              }
            },
            callable(...e) {
              if (null != r)
                for (const t of e)
                  Object.defineProperty(c, t, {
                    value: p(t),
                    writable: !1,
                    configurable: !0,
                    enumerable: !0,
                  });
            },
            terminate() {
              l(Wn, void 0), m(), i.terminate && i.terminate();
            },
          }
        );
        function l(e, t, n) {
          o || i.postMessage(t ? [e, t] : [e], n);
        }
        async function d(e) {
          const { data: t } = e;
          if (null != t && Array.isArray(t))
            switch (t[0]) {
              case Wn:
                m();
                break;
              case qn: {
                const e = new $n(),
                  [r, o, i] = t[1],
                  a = s.get(o);
                try {
                  if (null == a)
                    throw new Error(
                      `No '${o}' method is exposed on this endpoint`
                    );
                  const [t, n] = u.encode(await a(...u.decode(i, [e])));
                  l(Kn, [r, void 0, t], n);
                } catch (n) {
                  const { name: e, message: t, stack: o } = n;
                  throw (l(Kn, [r, { name: e, message: t, stack: o }]), n);
                } finally {
                  e.release();
                }
                break;
              }
              case Kn: {
                const [e] = t[1];
                a.get(e)(...t[1]), a.delete(e);
                break;
              }
              case Xn: {
                const [e] = t[1];
                u.release(e);
                break;
              }
              case Gn: {
                const [e] = t[1];
                a.get(e)(...t[1]), a.delete(e);
                break;
              }
              case Yn: {
                const [e, r, o] = t[1];
                try {
                  const t = await u.call(r, o),
                    [n, i] = u.encode(t);
                  l(Gn, [e, void 0, n], i);
                } catch (n) {
                  const { name: t, message: r, stack: o } = n;
                  throw (l(Gn, [e, { name: t, message: r, stack: o }]), n);
                }
                break;
              }
            }
        }
        function p(e) {
          return (...n) => {
            if (o)
              return Promise.reject(
                new Error(
                  "You attempted to call a function on a terminated web worker."
                )
              );
            if ("string" != typeof e && "number" != typeof e)
              return Promise.reject(
                new Error(
                  `Can’t call a symbol method on a remote endpoint: ${e.toString()}`
                )
              );
            const r = t(),
              i = f(r),
              [s, a] = u.encode(n);
            return l(qn, [r, e, s], a), i;
          };
        }
        function f(e, t) {
          return new Promise((n, r) => {
            a.set(e, (e, o, i) => {
              if (null == o) n(i && u.decode(i, t));
              else {
                const e = new Error();
                Object.assign(e, o), r(e);
              }
            });
          });
        }
        function m() {
          var e;
          (o = !0),
            s.clear(),
            a.clear(),
            null === (e = u.terminate) || void 0 === e || e.call(u),
            i.removeEventListener("message", d);
        }
      }
      function Qn() {
        return `${Zn()}-${Zn()}-${Zn()}-${Zn()}`;
      }
      function Zn() {
        return Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16);
      }
      const er = (e, t, { important: n = !1 } = {}) =>
          Object.keys(t).forEach((r) => {
            const o = t[r],
              [i = "", s = n ? "important" : void 0] = Array.isArray(o)
                ? o
                : [o];
            e.style.setProperty(r, i, s);
          }),
        tr = new Set();
      function nr(e) {
        if (!e) return null;
        try {
          return JSON.parse(atob(e));
        } catch (t) {
          return (
            Xe.notify(t, {
              context: "v0/createWebPixelsHelper/state/deserializeState",
              unhandled: !1,
              severity: "warning",
            }),
            null
          );
        }
      }
      n(7182);
      const rr = "webPixelDebug",
        or =
          "Session storage is not available. The Pixel Helper experience may be degraded.";
      class ir extends Error {
        constructor(...e) {
          super(...e),
            (this.name = "HelperStateNotValidError"),
            (this.message = "Helper state is not valid.");
        }
      }
      function sr() {
        const e = (function (e) {
          return { position: null, height: In, ...(e || {}) };
        })(
          (function () {
            const e = Tn() ? nr(sessionStorage.getItem(rr)) : null;
            return e || nr(new URLSearchParams(self.location.search).get(rr));
          })()
        );
        if (
          !(function (e) {
            return (
              !(!e || !e.pixel) &&
              "string" == typeof e.pixel.type &&
              "string" == typeof e.pixel.id &&
              "number" == typeof e.height
            );
          })(e)
        )
          throw new ir();
        return e;
      }
      function ar(e) {
        !(function (e) {
          if (!Tn())
            return (
              (t = or),
              void (
                tr.has(t) || (tr.add(t), "console" in self && console.warn(t))
              )
            );
          var t;
          const n = (function (e) {
            try {
              return btoa(JSON.stringify(e));
            } catch (t) {
              return (
                Xe.notify(t, {
                  context: "v0/createWebPixelsHelper/state/serializeState",
                  unhandled: !1,
                  severity: "warning",
                }),
                null
              );
            }
          })(e);
          n && sessionStorage.setItem(rr, n);
        })(e);
      }
      const cr = "web-pixels-helper-sandbox-handle",
        ur = { height: "26px", width: "21px", top: "12px", left: "12px" },
        lr = { height: "100%", width: "100%", top: "0px", left: "0px" };
      const dr = (e, t) => {
        const n = document.createElement(e);
        return (
          Object.keys(t).forEach((e) => {
            const r = t[e];
            void 0 !== r && n.setAttribute(e, r);
          }),
          n
        );
      };
      function pr({ id: e, tagName: t, attributes: n, dataset: r, styles: o }) {
        const i = document.querySelector(`${t}#${e}`);
        if (i) return [i, !1];
        const s = dr(t, { ...n, id: e });
        return (
          r &&
            Object.keys(r).forEach((e) => {
              s.dataset[e] = r[e];
            }),
          er(s, o.props, o.options),
          [s, !0]
        );
      }
      async function fr({ containerSpec: e, iframeSpec: t }) {
        await new Promise((e) => {
          if (document.body) e();
          else {
            const t = () => {
              "loading" !== document.readyState &&
                (e(), document.removeEventListener("readystatechange", t));
            };
            document.addEventListener("readystatechange", t);
          }
        });
        const [n, r] = pr({
          id: e.id,
          tagName: e.tagName,
          styles: { props: e.styles, options: { important: !0 } },
          attributes: { tabIndex: "-1", ...e.attributes },
          dataset: e.dataset,
        });
        r && document.body.appendChild(n);
        const o = t.attributes || {},
          [i, s] = pr({
            id: t.id,
            tagName: "iframe",
            styles: { props: t.styles, options: { important: !0 } },
            attributes: { tabIndex: "-1", ...o, name: t.id, src: t.src },
          });
        if (s) {
          if (t.privileges) {
            if (
              !(function (e) {
                return "sandbox" in e;
              })(i)
            )
              throw new qe(
                "browser does not support the sandbox attribute on IFrames"
              );
            i.setAttribute("sandbox", t.privileges.join(" "));
          }
          n.appendChild(i);
        }
        return { container: n, iframe: i };
      }
      async function mr({ extensionsBaseUrl: e, onHelperReady: t }) {
        const n = await (async function ({ extensionsBaseUrl: e }) {
            const t = `${e}/web-pixels-helper/h${i}m.html`,
              { height: n, position: r } = sr();
            return fr({
              containerSpec: {
                id: "web-pixels-helper-sandbox-container",
                tagName: "dialog",
                attributes: { popover: "manual" },
                styles: {
                  ...(r
                    ? {
                        top: `${r.y}px`,
                        left: `${r.x}px`,
                        right: "auto",
                        bottom: "auto",
                      }
                    : {
                        top: "max(0px, calc(100% - 770px))",
                        bottom: "auto",
                        right: "30px",
                        left: "auto",
                      }),
                  width: "393px",
                  height: `${n}px`,
                  position: "fixed",
                  border: "0",
                  opacity: "0",
                  margin: "0",
                  padding: "0",
                  background: "transparent",
                  overflow: "hidden",
                  visibility: "hidden",
                  transform: "translate(0px, 0px)",
                  "border-radius": "16px",
                  "box-shadow":
                    "rgba(0, 0, 0, 0.2) 0px 3px 5px -1px, rgba(0, 0, 0, 0.14) 0px 5px 8px 0px, rgba(0, 0, 0, 0.12) 0px 1px 14px 0px",
                  transition: `opacity ${Rn}ms ease-in-out, height ${Nn}ms ease-in-out, top ${Nn}ms ease-in-out, box-shadow ${On}ms`,
                },
                dataset: { shopifyPrivacy: "exclude" },
              },
              iframeSpec: {
                id: "web-pixels-helper-sandbox-iframe",
                src: t,
                styles: {
                  border: "none",
                  background: "#fff",
                  clip: "initial",
                  display: "inline",
                  margin: "0",
                  opacity: "1",
                  padding: "0",
                  visibility: "visible",
                  width: "100%",
                  height: "100%",
                  "border-radius": "16px",
                },
              },
            });
          })({ extensionsBaseUrl: e }),
          r = Jn(Dn(n.iframe), {
            callable: [
              "initializeHelper",
              "logConsentGranted",
              "logPixelRegister",
              "logSubscribe",
              "logEvent",
            ],
          });
        return (
          r.expose({ ...hr(n, t) }),
          (function (e) {
            if (e.querySelector(`#${cr}`)) return;
            const t = document.createElement("div");
            var n;
            t.setAttribute("id", cr),
              er(
                t,
                {
                  display: "block",
                  position: "absolute",
                  cursor: "grab",
                  background: "transparent",
                  ...ur,
                },
                { important: !0 }
              ),
              e.appendChild(t),
              (n = { container: e, handle: t }).handle.addEventListener(
                "mousedown",
                (function ({ container: e, handle: t }, n) {
                  function r(t) {
                    t.preventDefault();
                    const r = 25,
                      o = self.innerHeight - 25,
                      i = 25,
                      s = self.innerWidth - 25;
                    if (
                      t.clientY < r ||
                      t.clientY > o ||
                      t.clientX < i ||
                      t.clientX > s
                    )
                      return;
                    ar({
                      ...sr(),
                      position: { x: t.clientX - 25, y: t.clientY - 25 },
                    }),
                      (n[1] = n[3] - t.clientX),
                      (n[2] = n[4] - t.clientY),
                      (n[3] = t.clientX),
                      (n[4] = t.clientY);
                    const a = new DOMMatrix(getComputedStyle(e).transform),
                      c = a.e,
                      u = a.f,
                      l = c - n[1],
                      d = u - n[2];
                    er(
                      e,
                      { transform: `translate(${l}px, ${d}px)` },
                      { important: !0 }
                    );
                  }
                  function o(e) {
                    er(t, ur, { important: !0 }),
                      self.removeEventListener("mouseup", o),
                      self.removeEventListener("mousemove", r);
                  }
                  return (e) => {
                    e.preventDefault(),
                      (n[3] = e.clientX),
                      (n[4] = e.clientY),
                      self.addEventListener("mouseup", o),
                      self.addEventListener("mousemove", r),
                      er(t, lr, { important: !0 });
                  };
                })(n, { 1: 0, 2: 0, 3: 0, 4: 0 })
              );
          })(n.container),
          r
        );
      }
      function hr(e, t) {
        return {
          async setHelperReady() {
            e.container.showPopover(),
              er(
                e.container,
                { visibility: "visible", opacity: "1" },
                { important: !0 }
              ),
              t();
          },
          setHeight: ({ height: t }) =>
            new Promise((n, r) => {
              try {
                er(e.container, { height: `${t}px` }, { important: !0 }),
                  ar({ ...sr(), height: t }),
                  n(!0);
              } catch (o) {
                n(!1);
              }
            }),
          async proceedWithoutConsent() {
            try {
              const { success: e } = await ue(
                At.reduce((e, t) => ((e[t] = !0), e), {})
              );
              return Boolean(e);
            } catch (e) {
              return !1;
            }
          },
          async setClipboard({ text: e }) {
            try {
              return self.navigator.clipboard.writeText(e), !0;
            } catch (t) {
              return !1;
            }
          },
          async sendMonorailEvent({ schemaKey: e, payload: t }) {
            ft(e, t);
          },
        };
      }
      let br = (function (e) {
        return (e.Standard = "standard"), (e.Advanced = "advanced"), e;
      })({});
      const wr = {
          extensionsBaseUrl: "",
          endpoint: null,
          replayQueue: [],
          message(e, t) {
            try {
              this.endpoint
                ? this.endpoint.call[e](t)
                : this.replayQueue.push(() => {
                    this.endpoint.call[e](t);
                  });
            } catch (n) {
              Xe.notify(n, {
                context: "v0/createWebPixelsHelper/message",
                unhandled: !1,
                severity: "warning",
              });
            }
          },
          init(e) {
            try {
              this.extensionsBaseUrl = e.extensionsBaseUrl;
              const n = sr(),
                i = e.webPixelsConfigList.find(
                  (e) => e.type === n.pixel.type && e.id === n.pixel.id
                );
              if (
                (function (e, t) {
                  return (
                    (e.pixel.type === Pe.Custom || e.pixel.type === Pe.App) &&
                    !e.pixel.id.match(/shopify/i) &&
                    void 0 !== t &&
                    e.pixel.id === t.id &&
                    e.pixel.type === t.type
                  );
                })(n, i)
              )
                try {
                  ar(n);
                  let t = !1;
                  const { shopId: s, surface: a = Me.Unknown } = e,
                    c = ot("helperLoad", {
                      version: r,
                      pageUrl: self.location.href,
                      surface: a,
                      status: "loaded",
                      bundleTarget: o,
                      shopId: s,
                    });
                  mr({
                    extensionsBaseUrl: this.extensionsBaseUrl,
                    onHelperReady: () => {
                      t || (pt(c), (t = !0));
                    },
                  })
                    .then((t) => {
                      t &&
                        ((this.endpoint = t),
                        this.message("initializeHelper", {
                          pixelUid: { id: i.id, type: i.type },
                          pixelName: i.name || "",
                          config: e,
                          collapsed: n.height <= In,
                          loggerLevel:
                            An() &&
                            "true" ===
                              self.localStorage.getItem("pixel-helper-advanced")
                              ? br.Advanced
                              : br.Standard,
                        }),
                        this.replayQueue.forEach((e) => e()),
                        (this.replayQueue = []));
                    })
                    .catch((t) => {
                      Xe.notify(t, {
                        context:
                          "v0/createWebPixelsHelper/init/createHelperSandbox",
                        unhandled: !1,
                        severity: "warning",
                      });
                      const { shopId: n, surface: i = Me.Unknown } = e;
                      ft("helperLoad", {
                        version: r,
                        pageUrl: self.location.href,
                        surface: i,
                        status: "helper-create-error",
                        bundleTarget: o,
                        shopId: n,
                      });
                    });
                } catch (t) {
                  Xe.notify(t, {
                    context: "v0/createWebPixelsHelper/init/selectedPixelValid",
                    unhandled: !1,
                    severity: "warning",
                  });
                  const { shopId: n, surface: i = Me.Unknown } = e;
                  ft("helperLoad", {
                    version: r,
                    pageUrl: self.location.href,
                    surface: i,
                    status: "failed",
                    bundleTarget: o,
                    shopId: n,
                  });
                }
            } catch (t) {
              if (!(t instanceof ir)) {
                Xe.notify(t, {
                  context: "v0/createWebPixelsHelper/init",
                  unhandled: !1,
                  severity: "warning",
                });
                const { shopId: n, surface: i = Me.Unknown } = e;
                ft("helperLoad", {
                  version: r,
                  pageUrl: self.location.href,
                  surface: i,
                  status: "helper-read-error",
                  bundleTarget: o,
                  shopId: n,
                });
              }
            }
          },
        },
        vr = {
          all_events: Re.Meta,
          all_standard_events: Re.Meta,
          all_custom_events: Re.Meta,
          all_dom_events: Re.Meta,
          all_error_events: Re.Meta,
          checkout_address_info_submitted: Ne.Standard,
          checkout_completed: Ne.Standard,
          checkout_started: Ne.Standard,
          payment_info_submitted: Ne.Standard,
          collection_viewed: Ne.Standard,
          checkout_contact_info_submitted: Ne.Standard,
          page_viewed: Ne.Standard,
          product_added_to_cart: Ne.Standard,
          product_removed_from_cart: Ne.Standard,
          product_viewed: Ne.Standard,
          product_variant_viewed: Ne.Standard,
          search_submitted: Ne.Standard,
          cart_viewed: Ne.Standard,
          checkout_shipping_info_submitted: Ne.Standard,
          accelerated_checkout_started: Ne.Standard,
          application_error: Ne.Error,
          ui_extension_error: Ne.Error,
          input_changed: Ne.Dom,
          input_blurred: Ne.Dom,
          input_focused: Ne.Dom,
          form_submitted: Ne.Dom,
          clicked: Ne.Dom,
          dom_mouse_moved: Re.ExtendedDom,
          dom_window_resized: Re.ExtendedDom,
          dom_scroll: Re.ExtendedDom,
          dom_clipboard: Re.ExtendedDom,
          dom_selection_changed: Re.ExtendedDom,
          dom_available: Re.ExtendedDom,
          dom_changed: Re.ExtendedDom,
          dom_clicked: Re.ExtendedDom,
          dom_form_submitted: Re.ExtendedDom,
          dom_input_changed: Re.ExtendedDom,
          dom_input_blurred: Re.ExtendedDom,
          dom_input_focused: Re.ExtendedDom,
        };
      function gr(e) {
        return (function (e) {
          return e in vr;
        })(e)
          ? vr[e]
          : Ne.Custom;
      }
      function yr(e) {
        return gr(e) === Ne.Standard;
      }
      function xr(e) {
        return gr(e) === Ne.Error;
      }
      function Er(e) {
        return gr(e) === Ne.Dom;
      }
      function _r(e) {
        return gr(e) === Re.ExtendedDom;
      }
      function Sr() {
        return {
          document: {
            location: {
              href: window.location.href,
              hash: window.location.hash,
              host: window.location.host,
              hostname: window.location.hostname,
              origin: window.location.origin,
              pathname: window.location.pathname,
              port: window.location.port,
              protocol: window.location.protocol,
              search: window.location.search,
            },
            referrer: document.referrer,
            characterSet: document.characterSet,
            title: document.title,
          },
          navigator: {
            language: navigator.language,
            cookieEnabled: navigator.cookieEnabled,
            languages: navigator.languages,
            userAgent: navigator.userAgent,
          },
          window: {
            innerHeight: window.innerHeight,
            innerWidth: window.innerWidth,
            outerHeight: window.outerHeight,
            outerWidth: window.outerWidth,
            pageXOffset: window.pageXOffset,
            pageYOffset: window.pageYOffset,
            location: {
              href: window.location.href,
              hash: window.location.hash,
              host: window.location.host,
              hostname: window.location.hostname,
              origin: window.location.origin,
              pathname: window.location.pathname,
              port: window.location.port,
              protocol: window.location.protocol,
              search: window.location.search,
            },
            origin: window.origin,
            screen: {
              height: window.screen.height,
              width: window.screen.width,
            },
            screenX: window.screenX,
            screenY: window.screenY,
            scrollX: window.scrollX,
            scrollY: window.scrollY,
          },
        };
      }
      const kr = (e) => ({
        ...e,
        clientId: xt(document.cookie)._shopify_y ?? "",
        timestamp: new Date().toISOString(),
        context: Sr(),
        id: "string" == typeof e.id && e.id.length > 0 ? e.id : Oe(),
      });
      const Cr = "all_standard_events",
        Ar = "all_custom_events",
        Tr = "all_dom_events",
        Ir = "all_error_events",
        Or = ["application_error", "ui_extension_error"];
      class Nr extends Error {
        constructor(e) {
          super(e), (this.name = "PublishDomEventError");
        }
      }
      function Rr(e) {
        const t = new Se({
            bufferSize: Number.POSITIVE_INFINITY,
            subscribeAllKey: Cr,
            eligibility: Ue,
          }),
          n = new Se({ bufferSize: 1e3, subscribeAllKey: Ar, eligibility: Ue }),
          i = new Se({
            bufferSize: 1e3,
            replayKeep: "newest",
            subscribeAllKey: Tr,
            eligibility: Ue,
          }),
          s = new Se({ bufferSize: 1e3, subscribeAllKey: Ir, eligibility: Ue }),
          c = new Se({
            bufferSize: 1e3,
            replayKeep: "newest",
            eligibility: Ue,
          });
        e.initData;
        let u = !1;
        return {
          publish(n, i, c) {
            if ("string" != typeof n)
              throw new Error(
                "Expected event name to be a string, but got " + typeof n
              );
            if (!yr(n) && !xr(n)) return !1;
            if (Or.includes(n) && !ye("a545847e")) return !1;
            if (
              "checkout_completed" === n &&
              yn() &&
              "1" === xt(document.cookie)[a]
            )
              return !1;
            const l = Sn(i);
            if (!l.isValid) return console.error(l.error), !1;
            const d = (function (e, t, n, r = {}) {
                const o = (function (e, t, n) {
                  if ("checkout_completed" === e && n.eventId) return n.eventId;
                  const r = { analyticsFramework: "wpm" };
                  try {
                    return (
                      "product_added_to_cart" === e &&
                        "cartLine" in t &&
                        (r.cacheKey = (function (
                          { cartLine: e } = { cartLine: null }
                        ) {
                          const t = e?.merchandise.product.id,
                            n = e?.merchandise.id;
                          if (t && n) return `${t}-${n}`;
                        })(t)),
                      window.Shopify?.evids?.(e, r)
                    );
                  } catch {
                    return;
                  }
                })(e, n, r);
                return kr({ id: o, name: e, data: n, type: vr[e] });
              })(n, 0, i, c),
              p = d.data?.checkout?.token;
            return (
              ft("eventPublish", {
                version: r,
                bundleTarget: o,
                pageUrl: self.location.href,
                shopId: e.shopId,
                surface: e.surface || Me.Unknown,
                eventName: d.name,
                eventType: d.type,
                extensionId: c?.extension?.extensionId,
                extensionAppId: c?.extension?.appId,
                extensionType: c?.extension?.type,
                userCanBeTracked: oe().toString(),
                shopPrefs: "unknown",
                eventId: d.id,
                checkoutToken: p,
              }),
              (function (e) {
                "checkout_completed" === e &&
                  (function () {
                    if (yn()) {
                      const e = self.location.pathname
                          .split("/")
                          .slice(0, -1)
                          .join("/"),
                        t = new Date();
                      t.setMonth(t.getMonth() + 2),
                        (document.cookie = `${a}=1; expires=${t}; path=${e}`);
                    }
                  })();
              })(n),
              u ||
                ((u = !0),
                (f = e.shopId),
                (m = e.surface || Me.Unknown),
                Ot.add(() =>
                  (function (e, t) {
                    Et ||
                      ((Et = !0),
                      ft("consentAccepted", {
                        version: r,
                        bundleTarget: o,
                        shopId: e,
                        surface: t,
                        shopPrefs: "unknown",
                      }));
                  })(f, m)
                )),
              d.type === Ne.Error ? s.publish(d.name, d) : t.publish(d.name, d)
            );
            var f, m;
          },
          publishCustomEvent(t, i, s) {
            if ("string" != typeof t)
              throw new Error(
                "Expected event name to be a string, but got " + typeof t
              );
            if (
              !(function (e) {
                return gr(e) === Ne.Custom;
              })(t)
            )
              return !1;
            const a = Sn(i);
            if (!a.isValid) return console.error(a.error), !1;
            const c = (function (e, t, n = null) {
              return kr({ name: e, customData: n, type: Ne.Custom });
            })(t, 0, i);
            return (
              ft("eventPublish", {
                version: r,
                bundleTarget: o,
                pageUrl: self.location.href,
                shopId: e.shopId,
                surface: e.surface || Me.Unknown,
                eventName: c.name,
                eventType: "custom",
                extensionId: s?.extension?.extensionId,
                extensionAppId: s?.extension?.appId,
                extensionType: s?.extension?.type,
                eventId: c.id,
              }),
              n.publish(t, c, s)
            );
          },
          publishDomEvent(e, t, n) {
            if ("string" != typeof e) {
              const t = JSON.stringify(e);
              throw new Nr(
                `Expected event name "${t}" to be a string, but got ${typeof e}`
              );
            }
            if (!Er(e) && !_r(e))
              throw new Nr(`Event name "${e}" is not a supported DOM Event`);
            if (_r(e) && !ye(xe)) return !1;
            const r = Sn(t);
            if (!r.isValid)
              throw new Nr(
                `Input Validation Error for event ${e}: ${
                  r.error
                }\nPayload: ${JSON.stringify(t)}`
              );
            const o = (function (e, t) {
              return kr({ name: e, data: t, type: Ne.Dom });
            })(e, t);
            return _r(e) ? c.publish(e, o) : i.publish(e, o);
          },
          subscribe(a, u, l = {}) {
            const d = Oe(),
              p = async (t) => {
                if (
                  e.surface === Me.CheckoutOneSdk &&
                  l.scope !== $e.CheckoutOneSdk
                )
                  return;
                const n = {
                    configuration: l.pixelRuntimeConfig?.configuration,
                    eventPayloadVersion:
                      l.schemaVersion ||
                      l.pixelRuntimeConfig?.eventPayloadVersion ||
                      "unknown",
                    id: l.pixelRuntimeConfig?.id || "unknown",
                    type: l.pixelRuntimeConfig?.type || "unknown",
                    runtimeContext:
                      l.pixelRuntimeConfig?.runtimeContext || "unknown",
                    restrictions: l.pixelRuntimeConfig?.restrictions,
                    scriptVersion:
                      l.pixelRuntimeConfig?.scriptVersion || "unknown",
                    apiClientId: l.pixelRuntimeConfig?.apiClientId,
                  },
                  i = {
                    pixelUid: { id: n.id, type: n.type },
                    event: t,
                    eventNameAsSubscribed: a,
                    subscriptionId: d,
                    status: "SUCCESS",
                  };
                let s;
                try {
                  await u.call(t, t), wr.message("logEvent", i);
                } catch (h) {
                  (s = h),
                    wr.message("logEvent", { ...i, status: "FAIL", error: s });
                }
                const c = gr(t.name),
                  p = {
                    version: r,
                    bundleTarget: o,
                    pageUrl: self.location.href,
                    shopId: l.shopId,
                    surface: l.surface,
                    pixelId: n.id,
                    pixelAppId: Le(n),
                    pixelSource: n.type,
                    pixelRuntimeContext: n.runtimeContext,
                    pixelScriptVersion: n.scriptVersion,
                    pixelConfiguration: n.configuration,
                    pixelEventSchemaVersion: n.eventPayloadVersion,
                    eventName: t.name,
                    eventId: t.id,
                  },
                  f = s ? "FAILURE" : "SUCCESS",
                  m = s ? String(s) : void 0;
                if (c !== Ne.Dom) {
                  let e;
                  yr(t.name) && (e = t?.data?.checkout?.token),
                    ft("subscriberEventEmit", {
                      ...p,
                      eventType: c,
                      checkoutToken: e || void 0,
                      status: f,
                      errorMessage: m,
                    });
                } else
                  ze(1) &&
                    ft("subscriberEventEmitDom", {
                      ...p,
                      status: f,
                      errorMessage: m,
                    });
              };
            if (_r(a)) return c.subscribe(a, p, l);
            if ("all_events" === a) {
              const e = t.subscribe(Cr, p, l),
                r = n.subscribe(Ar, p, l),
                o = i.subscribe(Tr, p, l),
                a = s.subscribe(Ir, p, l);
              return () => {
                const t = e(),
                  n = r(),
                  i = o(),
                  s = a();
                return t && n && i && s;
              };
            }
            return a === Ar
              ? n.subscribe(Ar, p, l)
              : a === Cr || yr(a)
              ? t.subscribe(a, p, l)
              : a === Tr || Er(a)
              ? i.subscribe(a, p, l)
              : a === Ir || xr(a)
              ? s.subscribe(a, p, l)
              : n.subscribe(a, p, l);
          },
        };
      }
      const Pr = ["31014027265", "28638674945", "44186959873"];
      n(6583), n(9742);
      const Dr = "wpm-test-cookie",
        Lr = new Map();
      function Mr() {
        const e = self?.location?.hostname || "",
          t = Lr.get(e);
        if (t) return t;
        const n = e.split("."),
          r = [];
        return (
          n.reverse().reduce((e, t) => {
            const n = "" === e ? t : `${t}.${e}`;
            return (
              (function (e) {
                document.cookie = `${Dr}=1; path=/; domain=${e}`;
              })(n),
              document.cookie.split(";").find((e) => e.includes(Dr)) ||
                r.push(n),
              (function (e) {
                document.cookie = `${Dr}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; domain=${e}`;
              })(n),
              n
            );
          }, ""),
          Lr.set(e, r),
          r
        );
      }
      function jr({
        eventBus: e,
        customerPrivacyEventBus: t,
        webPixelConfig: n,
        shopId: r,
        surface: o,
        initData: i,
        forRPC: s = !1,
      }) {
        let a = {};
        try {
          a = n.configuration ? JSON.parse(n.configuration) : {};
        } catch (f) {}
        const c = (function (e) {
          return e === Me.Shopify ||
            e === Me.CheckoutOne ||
            e === Me.CheckoutOneSdk
            ? je.Checkout
            : e === Me.StorefrontRenderer
            ? je.Storefront
            : je.Unknown;
        })(o);
        var u, l, d, p;
        return {
          analytics: {
            subscribe: (t, i, a) => (
              s && zn(i),
              e.subscribe(t, i, {
                ...a,
                pixelRuntimeConfig: n,
                shopId: r,
                surface: o,
                scope: $e.WebPixelExtension,
              })
            ),
          },
          browser: {
            cookie: {
              get: async (e) =>
                e ? xt(document.cookie)[e] ?? "" : document.cookie,
              set: async (e, t) => {
                if (t) {
                  const n = `${e}=${t}`;
                  document.cookie = n;
                } else document.cookie = e;
                return document.cookie;
              },
            },
            sendBeacon: async (e, t = "") => {
              if (
                e.includes(self.location.origin)
              )
                return !1;
              const n = new window.Blob([t], { type: "text/plain" });
              return window.navigator.sendBeacon(e, n);
            },
            localStorage: {
              setItem: async (e, t) =>
                An() ? window.localStorage.setItem(e, t) : Promise.resolve(),
              getItem: async (e) =>
                An() ? window.localStorage.getItem(e) : Promise.resolve(null),
              key: async (e) =>
                An() ? window.localStorage.key(e) : Promise.resolve(null),
              removeItem: async (e) =>
                An() ? window.localStorage.removeItem(e) : Promise.resolve(),
              clear: async () =>
                An() ? window.localStorage.clear() : Promise.resolve(),
              length: async () =>
                An() ? window.localStorage.length : Promise.resolve(0),
            },
            sessionStorage: {
              setItem: async (e, t) =>
                Tn() ? window.sessionStorage.setItem(e, t) : Promise.resolve(),
              getItem: async (e) =>
                Tn() ? window.sessionStorage.getItem(e) : Promise.resolve(null),
              key: async (e) =>
                Tn() ? window.sessionStorage.key(e) : Promise.resolve(null),
              removeItem: async (e) =>
                Tn() ? window.sessionStorage.removeItem(e) : Promise.resolve(),
              clear: async () =>
                Tn() ? window.sessionStorage.clear() : Promise.resolve(),
              length: async () =>
                Tn() ? window.sessionStorage.length : Promise.resolve(0),
            },
          },
          settings: a,
          init:
            ((u = i),
            {
              context: Sr(),
              data: {
                customer:
                  ((p = u.customer),
                  p
                    ? {
                        email: p.email,
                        firstName: p.firstName,
                        id: p.id,
                        lastName: p.lastName,
                        phone: p.phone,
                        ordersCount: p.ordersCount,
                      }
                    : null),
                cart:
                  ((d = u.cart),
                  d
                    ? {
                        id: d?.id,
                        cost: {
                          totalAmount: {
                            amount: d?.cost?.totalAmount?.amount,
                            currencyCode: d?.cost?.totalAmount?.currencyCode,
                          },
                        },
                        lines: d?.lines,
                        totalQuantity: d?.totalQuantity,
                        attributes: d?.attributes,
                      }
                    : null),
                shop: u.shop,
                purchasingCompany:
                  ((l = u.purchasingCompany),
                  l ? { company: l.company, location: l.location } : null),
              },
              customerPrivacy: {
                analyticsProcessingAllowed: se(),
                marketingAllowed: ie(),
                preferencesProcessingAllowed: ae(),
                saleOfDataAllowed: ce(),
              },
            }),
          _pixelInfo: { ...n, surface: o, surfaceNext: c },
          customerPrivacy: {
            subscribe: (e, i, a) => (
              s && zn(i),
              t.subscribe(e, i, {
                ...a,
                pixelRuntimeConfig: n,
                shopId: r,
                surface: o,
                scope: $e.WebPixelExtension,
              })
            ),
          },
        };
      }
      n(7019);
      const $r = () => {
          let e, t;
          return {
            promise: new Promise((...n) => {
              [e, t] = n;
            }),
            resolve: e,
            reject: t,
          };
        },
        Ur = 1e3;
      n(2475);
      class zr extends Error {
        constructor(e, t) {
          super(e),
            (this.url = void 0),
            (this.name = "WebWorkerTopLevelError"),
            (this.url = t);
        }
      }
      let Fr;
      const Vr = () => (
        Fr ||
          (Fr = {
            localStorageItems: { ...self.localStorage },
            sessionStorageItems: { ...self.sessionStorage },
          }),
        Fr
      );
      class Br extends Error {
        constructor(...e) {
          super(...e),
            (this.name = "SandboxAlreadyCreatedError"),
            (this.message = "Sandbox already created.");
        }
      }
      class Hr extends Error {
        constructor(e, t) {
          super(e), (this.name = "PixelInitializationError"), (this.stack = t);
        }
      }
      class qr extends Error {
        constructor(...e) {
          super(...e),
            (this.name = "InvalidExtensionPointError"),
            (this.message = "Invalid Extension Point");
        }
      }
      class Kr extends Error {
        constructor(...e) {
          super(...e), (this.name = "PixelError");
        }
      }
      const Wr = new Map();
      async function Xr(t) {
        let n = !1,
          s = null;
        const { webPixelConfig: a, eventBus: l, shopId: d, surface: p } = t,
          f = a.id,
          m = a.type.toLowerCase();
        if (a.runtimeContext === De.Open && !ye("5de24938")) return !1;
        var h, b;
        switch (
          (a.restrictions ||
            (a.restrictions = (function (e, t) {
              if (!e) return {};
              const n = (function (e) {
                  return Pr.includes(String(e));
                })(e),
                r = t !== Me.StorefrontRenderer;
              return n && r
                ? {
                    allowedEvents: [],
                    preventLoadingBeforeEvent: `shopify:app:pixels:load:${e}`,
                  }
                : n
                ? { allowedEvents: [] }
                : {};
            })(String(a.apiClientId), p)),
          await Promise.all([
            (async () => {
              await It(
                (function (e) {
                  if (e)
                    return At.reduce(
                      (t, n) => ((t[n] = e.includes(n.toUpperCase())), t),
                      {}
                    );
                })(a.privacyPurposes)
              ),
                wr.message("logConsentGranted", {
                  pixelUid: { id: f, type: a.type },
                });
            })(),
            ((h = (e, t) =>
              l.subscribe(e, t, {
                pixelRuntimeConfig: { apiClientId: "PIXEL-LOADER" },
              })),
            (b = a.restrictions?.preventLoadingBeforeEvent),
            new Promise((e, t) => {
              void 0 === b
                ? e(!0)
                : h(b, () => {
                    e(!0);
                  });
            })),
          ]),
          et("pixel:register", "start", { pixelId: f, source: m }),
          a.runtimeContext)
        ) {
          case De.Lax:
          case De.Strict:
            try {
              n = await (async function ({
                webPixelConfig: e,
                eventBus: t,
                customerPrivacyEventBus: n,
                shopId: r,
                storefrontBaseUrl: s,
                surface: a,
                initData: c,
              }) {
                const l = `web-pixel-sandbox-${e.type}-${e.id}-${e.runtimeContext}-${i}`;
                if (e.runtimeContext === De.Lax && document.getElementById(l)) {
                  const t = new Br();
                  throw (
                    (Xe.notify(t, {
                      pixelId: e.id,
                      pixelType: e.type,
                      runtimeContext: e.runtimeContext,
                      shopId: r,
                      context: "v0/createWebPixelSandbox/alreadyCreatedError",
                      userAgent: self.navigator.userAgent,
                      hashVersionSandbox: i,
                      sandboxUrl: self.location.href || "unknown",
                      options: { sampleRate: 15 },
                    }),
                    t)
                  );
                }
                let d, p;
                switch (e.runtimeContext) {
                  case De.Strict:
                    [d, p] = await (async function ({
                      sandboxId: e,
                      webPixelConfig: t,
                      storefrontBaseUrl: n,
                    }) {
                      const r = t.id,
                        s = [
                          Ge(n),
                          "/wpm",
                          `@${i}`,
                          `/web-pixel-${r}`,
                          `@${t.scriptVersion}`,
                          "/sandbox",
                          `/worker.${o}.js`,
                        ];
                      n.match(/spin\.dev\/?/) &&
                        s.push("?fast_storefront_renderer=1");
                      const a = s.join(""),
                        c = new Worker(a, {
                          name: e,
                          type: "classic",
                          credentials: "omit",
                        }),
                        u = new Promise((e, t) => {
                          const n = (e) => {
                            c.removeEventListener("error", n),
                              t(
                                e?.filename && e?.lineno && e?.message
                                  ? new zr(e.message, a)
                                  : new Error(
                                      `Failed to load web worker for pixel ${r} with url ${a}}`
                                    )
                              );
                          };
                          c.addEventListener("error", n);
                        });
                      return [c, u];
                    })({
                      sandboxId: l,
                      webPixelConfig: e,
                      storefrontBaseUrl: s,
                    });
                    break;
                  case De.Lax:
                    [d, p] = await (async function ({
                      sandboxId: e,
                      webPixelConfig: t,
                      storefrontBaseUrl: n,
                    }) {
                      const { search: r } = self.location,
                        s = t.id,
                        a = t.type.toLowerCase(),
                        c = [
                          Ge(n),
                          "/wpm",
                          `@${i}`,
                          `/${a}`,
                          `/web-pixel-${s}`,
                          `@${t.scriptVersion}`,
                          "/sandbox",
                          `/${o}`,
                          /\.(js|json|xml)$/.test(self.location.pathname)
                            ? ""
                            : self.location.pathname,
                          r,
                        ];
                      if (n.match(/spin\.dev\/?/)) {
                        const e = r.length ? "&" : "?";
                        c.push(`${r}${e}fast_storefront_renderer=1`);
                      }
                      const { iframe: l } = await fr({
                          containerSpec: {
                            id: u,
                            tagName: "div",
                            styles: {
                              height: "0",
                              width: "0",
                              position: "fixed",
                              visibility: "hidden",
                              overflow: "hidden",
                              "z-index": "-100",
                              margin: "0",
                              padding: "0",
                              border: "0",
                            },
                            attributes: { "aria-hidden": "true" },
                            dataset: { shopifyPrivacy: "exclude" },
                          },
                          iframeSpec: {
                            id: e,
                            src: c.join(""),
                            privileges: ["allow-scripts", "allow-forms"],
                            styles: {
                              height: "0",
                              width: "0",
                              visibility: "hidden",
                            },
                            attributes: { "aria-hidden": "true" },
                          },
                        }),
                        { promise: d, reject: p } = $r();
                      let f;
                      const m = () => {
                        f = setTimeout(() => {
                          p(
                            new Error(
                              `Failed to load iframe for pixel ${s} with url ${c.join(
                                ""
                              )}}`
                            )
                          );
                        }, Ur);
                      };
                      l.addEventListener("load", m);
                      const h = Dn(l);
                      return (
                        h.addEventListener("message", (e) => {
                          "remote-ui::ready" === e.data &&
                            (clearTimeout(f), l.removeEventListener("load", m));
                        }),
                        [h, d]
                      );
                    })({
                      sandboxId: l,
                      webPixelConfig: e,
                      storefrontBaseUrl: s,
                    });
                    break;
                  default:
                    throw new Error(
                      `Unsupported runtime context: ${e.runtimeContext}`
                    );
                }
                const f = Jn(d, { callable: ["initialize"] }),
                  m = jr({
                    eventBus: t,
                    customerPrivacyEventBus: n,
                    webPixelConfig: e,
                    shopId: r,
                    surface: a,
                    initData: c,
                    forRPC: !0,
                  }),
                  h = Sr();
                let b = {
                  status: "unknown",
                  hashVersion: "unknown",
                  sandboxUrl: "unknown",
                };
                const w =
                    e.runtimeContext === De.Lax
                      ? Vr()
                      : { localStorageItems: {}, sessionStorageItems: {} },
                  v = [
                    f.call
                      .initialize({
                        pageTitle: self.document.title,
                        webPixelConfig: e,
                        shopId: r,
                        webPixelApi: m,
                        cookie: self.document.cookie,
                        cookieRestrictedDomains: Mr(),
                        origin: self.origin,
                        referrer: self.document.referrer,
                        ...w,
                      })
                      .then((e) => {
                        b = e;
                      })
                      .catch((e) => {
                        throw new Hr(e.toString(), e.stack ?? "");
                      }),
                  ];
                if (
                  (p && v.push(p), await Promise.race(v), i !== b.hashVersion)
                ) {
                  const t = new Error(
                    `The main bundle hash (${i}) does not match the sandbox hash (${b.hashVersion})`
                  );
                  throw (
                    (Xe.notify(t, {
                      severity: "warning",
                      pixelId: e.id,
                      pixelType: e.type,
                      runtimeContext: e.runtimeContext,
                      context: "v0/createSandbox/hashMismatch",
                      shopId: r,
                      userAgent:
                        h.navigator.userAgent || self.navigator.userAgent,
                      hashVersionSandbox: b.hashVersion,
                      sandboxUrl: b.sandboxUrl,
                    }),
                    t)
                  );
                }
                return !0;
              })(t);
            } catch (x) {
              (s = x), (n = !1);
            }
            break;
          case De.Open:
            try {
              n = await (async function ({
                webPixelConfig: t,
                eventBus: n,
                customerPrivacyEventBus: r,
                shopId: s,
                storefrontBaseUrl: a,
                surface: u,
                initData: l,
              }) {
                const { promise: d, resolve: p, reject: f } = $r(),
                  { id: m, type: h } = t,
                  b = `${m}-${h}`.toLowerCase();
                Wr.set(b, () => ({
                  webPixelApi: jr({
                    eventBus: n,
                    customerPrivacyEventBus: r,
                    webPixelConfig: t,
                    shopId: s,
                    surface: u,
                    initData: l,
                    forRPC: !0,
                  }),
                  resolve: p,
                  reject: f,
                }));
                const w = a.match(/spin\.dev\/?/),
                  v = [
                    Ge(a),
                    `/wpm@${i}`,
                    `/${t.type.toLocaleLowerCase()}`,
                    `/web-pixel-${m}@${t.scriptVersion}`,
                    `/pixel.${o}.js`,
                    w ? "?fast_storefront_renderer=1" : "",
                  ].join("");
                if (!("createShopifyExtend" in (self[e] ?? {}))) {
                  const t = (e, t) => {
                    const n = Wr.get(`${e}-${t}`.toLowerCase());
                    if (!n)
                      return (
                        f(new Error(`No openPixelFn found for ${e}-${t}.`)),
                        null
                      );
                    const { resolve: r, reject: o, webPixelApi: i } = n();
                    return (
                      i || o(new Error(`No api found for pixel ${e}-${t}.`)),
                      Object.freeze({
                        extend: (e, t) => {
                          e !== c && o(new qr());
                          try {
                            t.call(i, i), r(!0);
                          } catch (x) {
                            o(new Kr(x));
                          }
                        },
                      })
                    );
                  };
                  Object.defineProperty(self, e, {
                    value: {},
                    enumerable: !0,
                    writable: !1,
                    configurable: !1,
                  }),
                    Object.defineProperty(self[e], "createShopifyExtend", {
                      value: t,
                      enumerable: !0,
                      writable: !1,
                      configurable: !1,
                    });
                }
                var g;
                return (
                  await ((g = v),
                  new Promise((e, t) => {
                    try {
                      const n = document.createElement("script");
                      (n.src = g),
                        (n.async = !0),
                        (n.onload = () => {
                          e();
                        }),
                        (n.onerror = () => {
                          r(), t(new Error(`Failed to load script: ${g}`));
                        });
                      const r = () => {
                        (n.onload = null), (n.onerror = null), n.remove();
                      };
                      document.head.appendChild(n);
                    } catch (x) {
                      t(x);
                    }
                  })),
                  d
                );
              })(t);
            } catch (x) {
              (s = x), (n = !1);
            }
            break;
          default: {
            const e = new Error(`Invalid runtimeContext: ${a.runtimeContext}`);
            throw (
              (wr.message("logPixelRegister", {
                pixelUid: { id: f, type: a.type },
                status: "FAIL",
                errorType: "PixelRegistrationError",
                error: e,
              }),
              e)
            );
          }
        }
        const w = Le(a),
          { measurement: v } = Ze("pixel:register", { pixelId: f, source: m });
        s && !n
          ? wr.message("logPixelRegister", {
              pixelUid: { id: f, type: a.type },
              status: "FAIL",
              errorType:
                s instanceof Hr
                  ? "PixelInitializationError"
                  : "PixelRegistrationError",
              error: s,
            })
          : n &&
            wr.message("logPixelRegister", {
              pixelUid: { id: f, type: a.type },
              status: "SUCCESS",
            });
        const g = s ? "failed" : "registered",
          y = s ? s.message : void 0;
        return (
          ft("register", {
            version: r,
            pageUrl: self.location.href,
            shopId: d,
            surface: p,
            pixelId: f,
            pixelAppId: w,
            pixelSource: a.type,
            pixelRuntimeContext: a.runtimeContext,
            pixelScriptVersion: a.scriptVersion,
            pixelConfiguration: a?.configuration,
            pixelEventSchemaVersion: a.eventPayloadVersion,
            status: g,
            userCanBeTracked: oe().toString(),
            shopPrefs: "unknown",
            bundleTarget: o,
            errorMsg: y,
            duration: v?.duration,
            startTime: v?.startTime,
            sessionId: Dt(),
          }),
          n
        );
      }
      function Yr(e, t) {
        return jt(
          document,
          e,
          (n) => {
            if (!(n instanceof Event && n.type === e)) return;
            const r = n.target;
            if (!(r instanceof Element) || Vt(r)) return;
            const o = sn(r);
            t("dom_clipboard", { element: o, action: n.type ?? "copy" });
          },
          { throttleDelay: 100 }
        );
      }
      n(9350);
      const Gr = [
          (e) => {
            let t = null;
            return jt(
              self.window,
              "mousemove",
              (n) => {
                if (!(n instanceof MouseEvent)) return;
                const r = n?.target;
                if (!(r instanceof Element) || Vt(r)) return;
                const o = an(n, r);
                (o.movementX = t ? n.screenX - t.screenX : 0),
                  (o.movementY = t ? n.screenY - t.screenY : 0),
                  e("dom_mouse_moved", o),
                  (t = n);
              },
              { throttleDelay: 50 }
            );
          },
          (e) =>
            jt(
              self.window,
              "resize",
              () => {
                e("dom_window_resized", {
                  innerHeight: self.window.innerHeight,
                  innerWidth: self.window.innerWidth,
                });
              },
              { throttleDelay: 100 }
            ),
          (e) =>
            jt(
              self.window,
              "scroll",
              (t) => {
                if (!(t instanceof Event)) return;
                const n = t?.target;
                let r;
                if (n instanceof Document)
                  r = n.scrollingElement ?? document.documentElement;
                else {
                  if (!(n instanceof Element)) return;
                  r = n;
                }
                Vt(r) || e("dom_scroll", { scrollingElement: sn(r) });
              },
              { throttleDelay: 100 }
            ),
          (e) => {
            const t = [Yr("cut", e), Yr("paste", e), Yr("copy", e)];
            return () => {
              t.forEach((e) => e());
            };
          },
          (e) =>
            jt(
              self.document,
              "selectionchange",
              (t) => {
                const n = document.activeElement;
                if (!(n instanceof Element) || Vt(n)) return;
                let r = null;
                (r =
                  n instanceof HTMLInputElement ||
                  n instanceof HTMLTextAreaElement
                    ? Ht(n)
                      ? zt
                      : n.value.substring(
                          n.selectionStart || 0,
                          n.selectionEnd || 0
                        )
                    : window.getSelection()?.toString() || null),
                  e("dom_selection_changed", { value: r, element: sn(n) });
              },
              { throttleDelay: 250 }
            ),
          (e) => {
            const t = () => {
              const t = self.document.documentElement;
              if (!(t instanceof HTMLElement)) return;
              const n = bn(t);
              e("dom_available", { root: n });
            };
            return "loading" !== document.readyState
              ? (t(), () => {})
              : jt(self.window, "DOMContentLoaded", t);
          },
          (e) => {
            const t = new MutationObserver((t) => {
              t.forEach((t) => {
                const n = hn(t.addedNodes, bn),
                  r = (function (e) {
                    if (0 === e.removedNodes.length) return [];
                    return Vt(e.target)
                      ? (e.removedNodes.forEach((e) => on(e)), [])
                      : hn(e.removedNodes, (e) => {
                          const t = bn(e);
                          return on(e), t;
                        });
                  })(t),
                  o = [];
                if ("attributes" === t.type && !Vt(t.target)) {
                  const { target: e, attributeName: n } = t;
                  n &&
                    e instanceof HTMLElement &&
                    t.oldValue !== e.getAttribute(n) &&
                    o.push(sn(t.target));
                }
                (0 === n.length && 0 === r.length && 0 === o.length) ||
                  e("dom_changed", {
                    addedNodes: n,
                    removedNodes: r,
                    modifiedElements: o,
                  });
              });
            });
            return (
              t.observe(document.body, {
                attributes: !0,
                attributeFilter: ["style", "class"],
                attributeOldValue: !0,
                childList: !0,
                subtree: !0,
              }),
              () => {
                t.disconnect();
              }
            );
          },
        ],
        Jr = (function () {
          const e = self.Shopify?.Checkout
              ? Me.Shopify
              : self.Shopify?.analytics?.replayQueue
              ? Me.StorefrontRenderer
              : Me.CheckoutOne,
            t = self.location.href,
            n = ot("load", {
              version: r,
              bundleTarget: o,
              pageUrl: t,
              status: "loading",
              surface: e,
            }),
            i = {
              publish: () => !1,
              publishCustomEvent: () => !1,
              publishDomEvent: () => !1,
              visitor: () => !1,
              subscribe: () => () => !1,
            };
          try {
            const e = Dt();
            return (
              (n.payload.status = "loaded"),
              pt(n),
              {
                init(n) {
                  if (null !== self.location.href.match(/\/wpm@(.+)\/sandbox/))
                    return i;
                  const {
                    shopId: s,
                    surface: a = Me.Unknown,
                    initData: c,
                    enabledBetaFlags: u,
                  } = n;
                  let { webPixelsConfigList: l } = n || {};
                  ve();
                  const d = self.location.origin;
                  st(d),
                    (function (e = []) {
                      (Array.isArray(e) ? e : [e]).forEach((e) => ge.add(e));
                    })(u),
                    ye("4735909c") && wr.init(n);
                  const p = oe().toString(),
                    f = ot("unload", {
                      version: r,
                      bundleTarget: o,
                      pageUrl: t,
                      shopId: s,
                      surface: a,
                      isCompleted: "false",
                      runtimeErrorCaught: "false",
                      userCanBeTracked: p,
                      sessionId: e,
                    });
                  var m;
                  (m = f),
                    window.addEventListener("pagehide", () => {
                      (m.payload.pageDuration =
                        Ze("page:session")?.measurement?.duration),
                        pt(m),
                        mt({ skipXhr: !0 });
                    });
                  const h = Rr(n),
                    b = (function (e) {
                      const t = new Se({
                        bufferSize: 1e3,
                        subscribeAllKey: "all_customer_privacy_events",
                        eligibility: Ue,
                      });
                      return {
                        publish(e, n, r) {
                          if ("string" != typeof e)
                            throw new Error(
                              "Expected event name to be a string, but got " +
                                typeof e
                            );
                          if (e !== N.CONSENT_COLLECTED)
                            throw new Error(
                              `Expected event name to be a ${N.CONSENT_COLLECTED}, but got "${e}".`
                            );
                          return t.publish(e, n, r);
                        },
                        subscribe(n, i, s = {}) {
                          if (n !== N.CONSENT_COLLECTED)
                            throw new Error(
                              `Event name "${n}" is not supported in the CustomerPrivacyEventBus.`
                            );
                          return t.subscribe(
                            n,
                            (t) => {
                              if (
                                e === Me.CheckoutOneSdk &&
                                s.scope !== $e.CheckoutOneSdk
                              )
                                return;
                              const n = {
                                configuration:
                                  s.pixelRuntimeConfig?.configuration,
                                eventPayloadVersion:
                                  s.schemaVersion ||
                                  s.pixelRuntimeConfig?.eventPayloadVersion ||
                                  "unknown",
                                id: s.pixelRuntimeConfig?.id || "unknown",
                                type: s.pixelRuntimeConfig?.type || "unknown",
                                runtimeContext:
                                  s.pixelRuntimeConfig?.runtimeContext ||
                                  "unknown",
                                restrictions:
                                  s.pixelRuntimeConfig?.restrictions,
                                scriptVersion:
                                  s.pixelRuntimeConfig?.scriptVersion ||
                                  "unknown",
                                apiClientId: s.pixelRuntimeConfig?.apiClientId,
                              };
                              i.call(t, t),
                                ft("subscriberEventEmitPrivacy", {
                                  version: r,
                                  bundleTarget: o,
                                  pageUrl: self.location.href,
                                  shopId: s.shopId,
                                  surface: s.surface,
                                  pixelId: n.id,
                                  pixelAppId: Le(n),
                                  pixelSource: n.type,
                                  pixelRuntimeContext: n.runtimeContext,
                                  pixelScriptVersion: n.scriptVersion,
                                  pixelConfiguration: n.configuration,
                                  pixelEventSchemaVersion:
                                    n.eventPayloadVersion,
                                  eventName: N.CONSENT_COLLECTED,
                                  eventId: Oe(),
                                });
                            },
                            s
                          );
                        },
                      };
                    })(a),
                    w = {
                      severity: "warning",
                      context: "v0/createWebPixelsManager/init",
                      unhandled: !1,
                      shopId: s,
                      initConfig: n,
                    },
                    v = ot("init", {
                      version: r,
                      bundleTarget: o,
                      pageUrl: t,
                      shopId: s,
                      surface: a,
                      status: "initializing",
                      userCanBeTracked: p,
                    });
                  try {
                    if (self.Shopify && !0 === self.Shopify.designMode)
                      return (
                        self.console &&
                          console.log(
                            "[WebPixelsManager] Prevented from executing in the Theme Editor"
                          ),
                        i
                      );
                    if (/^web-pixel-sandbox/.test(self.name)) {
                      const e = new qe(
                        "WebPixelsManager: browser library is being run in a sandbox"
                      );
                      throw ((w.library = "browser"), Xe.notify(e, w), e);
                    }
                    if (!s) {
                      const e = new qe("WebPixelsManager: shopId is required");
                      throw (Xe.notify(e, w), e);
                    }
                    if (!d) {
                      const e = new qe(
                        "WebPixelsManager: storefrontBaseUrl is required"
                      );
                      throw (Xe.notify(e, w), e);
                    }
                    if (
                      !(function (e) {
                        try {
                          return new URL(e), !0;
                        } catch (t) {
                          return (function (e) {
                            const t = new RegExp(
                              "^(https?:\\/\\/)((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)*[a-z]{1,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$",
                              "i"
                            );
                            return Boolean(t.test(e));
                          })(e);
                        }
                      })(d)
                    ) {
                      const e = new qe(
                        `WebPixelsManager: storefrontBaseUrl is not a valid absolute URL: ${d}`
                      );
                      throw (Xe.notify(e, w), e);
                    }
                    a === Me.CheckoutOneSdk && (l = []);
                    const e = l.reduce(
                      (e, t) => {
                        (t.type = t.type.toUpperCase()),
                          (t.runtimeContext = t.runtimeContext?.toUpperCase());
                        const n = Xr({
                          webPixelConfig: t,
                          eventBus: h,
                          customerPrivacyEventBus: b,
                          shopId: s,
                          storefrontBaseUrl: d,
                          surface: a,
                          initData: c,
                        });
                        return (
                          t.restrictions?.preventLoadingBeforeEvent
                            ? e.waiting.push(n)
                            : e.ready.push(n),
                          e
                        );
                      },
                      { ready: [], waiting: [] }
                    );
                    if (
                      (Promise.all(e.ready)
                        .then(() =>
                          (function (e) {
                            const { measurement: t } = Ze("completed");
                            (e.payload.isCompleted = "true"),
                              (e.payload.runTimeDuration = t?.duration),
                              (e.payload.startTime = t?.startTime);
                          })(f)
                        )
                        .catch((e) => {
                          self.console && console.error("[Web Pixels]", e);
                        }),
                      Promise.all(e.waiting).catch(() => {}),
                      a !== Me.CheckoutOne &&
                        a !== Me.CheckoutOneSdk &&
                        (O(h.publish, c),
                        ye("d04dc9f4") && gn(h.publishDomEvent.bind(h)),
                        (function () {
                          if (!Ct)
                            try {
                              document.addEventListener(
                                N.CONSENT_COLLECTED,
                                kt
                              ),
                                (Ct = !0);
                            } catch (e) {
                              Xe.notify(e, {
                                context:
                                  "v0/onConsentCollected/createOnConsentCollectedListener",
                                unhandled: !1,
                              });
                            }
                        })(),
                        St((e) => {
                          b.publish(N.CONSENT_COLLECTED, {
                            customerPrivacy: {
                              analyticsProcessingAllowed:
                                e.detail.analyticsAllowed,
                              marketingAllowed: e.detail.marketingAllowed,
                              preferencesProcessingAllowed:
                                e.detail.preferencesAllowed,
                              saleOfDataAllowed: e.detail.saleOfDataAllowed,
                            },
                          });
                        })),
                      ye(xe))
                    ) {
                      const e = h.publishDomEvent.bind(h);
                      (y = e),
                        Gr.map((e) => e(y)),
                        gn(e, { eventPrefix: "dom_" });
                    }
                    (v.payload.status = "initialized"), pt(v);
                    const n =
                      ((g = {
                        shopId: s,
                        surface: a,
                        pageUrl: t,
                        clientId: xt(document.cookie)._shopify_y ?? "",
                        version: r,
                        customerId: c?.customer?.id,
                      }),
                      {
                        visitor: (e, t) =>
                          (function (e, t, n) {
                            const r = (function (e, t) {
                              return e && (e.email || e.phone)
                                ? e?.email && "string" != typeof e.email
                                  ? {
                                      valid: !1,
                                      error: "Email must be of type string",
                                    }
                                  : e?.phone && "string" != typeof e.phone
                                  ? {
                                      valid: !1,
                                      error: "Phone must be of type string",
                                    }
                                  : t?.appId && "string" != typeof t.appId
                                  ? {
                                      valid: !1,
                                      error: "appId must be of type string",
                                    }
                                  : t?.apiClientId &&
                                    "string" != typeof t.apiClientId
                                  ? {
                                      valid: !1,
                                      error:
                                        "apiClientId must be of type string",
                                    }
                                  : { valid: !0 }
                                : {
                                    valid: !1,
                                    error:
                                      "Visitor must have one of phone or email",
                                  };
                            })(t, n);
                            if (!r.valid)
                              throw new Nt(
                                r.error || "Invalid input payload to visitorApi"
                              );
                            const o = {
                              ...e,
                              ...t,
                              apiClientId: n?.appId || n?.apiClientId,
                            };
                            return (
                              It({
                                analytics: !0,
                                marketing: !0,
                                preferences: !1,
                                sale_of_data: !1,
                              })
                                .then(() => ft("visitor", o))
                                .catch(() =>
                                  Xe.notify("visitor error", {
                                    severity: "error",
                                    context: `v0/visitor-${e.surface}`,
                                    unhandled: !1,
                                    shopId: e.shopId,
                                  })
                                ),
                              !0
                            );
                          })(g, e, t),
                      });
                    return {
                      publish: (e, t, n = {}) => h.publish(e, t, n),
                      publishCustomEvent: (e, t, n = {}) =>
                        h.publishCustomEvent(e, t, n),
                      publishDomEvent: (e, t, n = {}) =>
                        h.publishDomEvent(e, t, n),
                      subscribe: (e, t, n) =>
                        h.subscribe(e, t, {
                          ...n,
                          shopId: s,
                          surface: a,
                          scope:
                            a === Me.CheckoutOneSdk
                              ? $e.CheckoutOneSdk
                              : void 0,
                        }),
                      visitor: (e, t) => n.visitor(e, t),
                    };
                  } catch (x) {
                    return (
                      x instanceof qe ||
                        Xe.notify(x, {
                          context: "v0/init",
                          shopId: s,
                          initConfig: n,
                        }),
                      self.console && console.error(x),
                      (v.payload.status = "failed"),
                      (v.payload.errorMsg = x?.message),
                      pt(v),
                      (f.payload.runtimeErrorCaught = "true"),
                      i
                    );
                  }
                  var g, y;
                },
              }
            );
          } catch (s) {
            return (
              s instanceof qe ||
                Xe.notify(s, { context: "v0/createWebPixelsManager" }),
              self.console && console.error(s),
              (n.payload.status = "manager-create-error"),
              (n.payload.errorMsg = s?.message),
              pt(n, !0),
              { init: () => i }
            );
          }
        })();
      self[e] = Jr;
    })();
})();
