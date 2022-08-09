import { Component, Vue, Prop } from 'vue-property-decorator';

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

let SimpleButton = class SimpleButton extends Vue {
    mounted() {
        console.log('MOOUNTED');
    }
    onClick(e) {
        console.log(e, 'click');
    }
};
SimpleButton = __decorate([
    Component({
        name: 'SimpleButton'
    })
], SimpleButton);
var script$1 = SimpleButton;

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}

const isOldIE = typeof navigator !== 'undefined' &&
    /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
function createInjector(context) {
    return (id, style) => addStyle(id, style);
}
let HEAD;
const styles = {};
function addStyle(id, css) {
    const group = isOldIE ? css.media || 'default' : id;
    const style = styles[group] || (styles[group] = { ids: new Set(), styles: [] });
    if (!style.ids.has(id)) {
        style.ids.add(id);
        let code = css.source;
        if (css.map) {
            // https://developer.chrome.com/devtools/docs/javascript-debugging
            // this makes source maps inside style tags work properly in Chrome
            code += '\n/*# sourceURL=' + css.map.sources[0] + ' */';
            // http://stackoverflow.com/a/26603875
            code +=
                '\n/*# sourceMappingURL=data:application/json;base64,' +
                    btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) +
                    ' */';
        }
        if (!style.element) {
            style.element = document.createElement('style');
            style.element.type = 'text/css';
            if (css.media)
                style.element.setAttribute('media', css.media);
            if (HEAD === undefined) {
                HEAD = document.head || document.getElementsByTagName('head')[0];
            }
            HEAD.appendChild(style.element);
        }
        if ('styleSheet' in style.element) {
            style.styles.push(code);
            style.element.styleSheet.cssText = style.styles
                .filter(Boolean)
                .join('\n');
        }
        else {
            const index = style.ids.size - 1;
            const textNode = document.createTextNode(code);
            const nodes = style.element.childNodes;
            if (nodes[index])
                style.element.removeChild(nodes[index]);
            if (nodes.length)
                style.element.insertBefore(textNode, nodes[index]);
            else
                style.element.appendChild(textNode);
        }
    }
}

/* script */
const __vue_script__$1 = script$1;

/* template */
var __vue_render__$1 = function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("button", { staticClass: "button", on: { click: _vm.onClick } }, [
    _c("span", { staticClass: "button__title" }, [_vm._t("default")], 2),
  ])
};
var __vue_staticRenderFns__$1 = [];
__vue_render__$1._withStripped = true;

  /* style */
  const __vue_inject_styles__$1 = function (inject) {
    if (!inject) return
    inject("data-v-57562ec6_0", { source: ".button_title[data-v-57562ec6] {\n  color: red;\n}\n\n/*# sourceMappingURL=SimpleButton.vue.map */", map: {"version":3,"sources":["C:\\projects\\ui\\src\\components\\SimpleButton\\SimpleButton.vue","SimpleButton.vue"],"names":[],"mappings":"AAyBA;EACA,UAAA;ACxBA;;AAEA,2CAA2C","file":"SimpleButton.vue","sourcesContent":["<template>\r\n  <button class=\"button\" @click=\"onClick\">\r\n    <span class=\"button__title\"><slot /></span>\r\n  </button>\r\n</template>\r\n\r\n<script lang=\"ts\">\r\nimport { Component, Vue } from 'vue-property-decorator';\r\n\r\n@Component({\r\n  name: 'SimpleButton'\r\n})\r\nexport default class SimpleButton extends Vue {\r\n  mounted() {\r\n    console.log('MOOUNTED')\r\n  }\r\n\r\n  protected onClick(e: Event) {\r\n    console.log(e, 'click')\r\n  }\r\n}\r\n</script>\r\n\r\n<style scoped lang=\"scss\">\r\n  .button {\r\n    &_title {\r\n      color: red\r\n    }\r\n  }\r\n</style>\r\n",".button_title {\n  color: red;\n}\n\n/*# sourceMappingURL=SimpleButton.vue.map */"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$1 = "data-v-57562ec6";
  /* module identifier */
  const __vue_module_identifier__$1 = undefined;
  /* functional template */
  const __vue_is_functional_template__$1 = false;
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$1 = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
    __vue_inject_styles__$1,
    __vue_script__$1,
    __vue_scope_id__$1,
    __vue_is_functional_template__$1,
    __vue_module_identifier__$1,
    false,
    createInjector,
    undefined,
    undefined
  );

let HelloWorld = class HelloWorld extends Vue {
    msg;
};
__decorate([
    Prop({ required: true })
], HelloWorld.prototype, "msg", void 0);
HelloWorld = __decorate([
    Component({
        components: {
            SimpleButton: __vue_component__$1
        }
    })
], HelloWorld);
var script = HelloWorld;

/* script */
const __vue_script__ = script;

/* template */
var __vue_render__ = function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    { staticClass: "hello" },
    [
      _c("h1", [_vm._v(_vm._s(_vm.msg))]),
      _vm._v(" "),
      _vm._m(0),
      _vm._v(" "),
      _c("h3", [_vm._v("Installed CLI Plugins")]),
      _vm._v(" "),
      _vm._m(1),
      _vm._v(" "),
      _c("h3", [_vm._v("Essential Links")]),
      _vm._v(" "),
      _vm._m(2),
      _vm._v(" "),
      _c("h3", [_vm._v("Ecosystem")]),
      _vm._v(" "),
      _vm._m(3),
      _vm._v(" "),
      _c("SimpleButton", [_vm._v("123")]),
    ],
    1
  )
};
var __vue_staticRenderFns__ = [
  function () {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("p", [
      _vm._v(
        "\n    For a guide and recipes on how to configure / customize this project,"
      ),
      _c("br"),
      _vm._v("\n    check out the\n    "),
      _c(
        "a",
        {
          attrs: {
            href: "https://cli.vuejs.org",
            target: "_blank",
            rel: "noopener",
          },
        },
        [_vm._v("vue-cli documentation")]
      ),
      _vm._v(".\n  "),
    ])
  },
  function () {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("ul", [
      _c("li", [
        _c(
          "a",
          {
            attrs: {
              href: "https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",
              target: "_blank",
              rel: "noopener",
            },
          },
          [_vm._v("babel")]
        ),
      ]),
      _vm._v(" "),
      _c("li", [
        _c(
          "a",
          {
            attrs: {
              href: "https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript",
              target: "_blank",
              rel: "noopener",
            },
          },
          [_vm._v("typescript")]
        ),
      ]),
    ])
  },
  function () {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("ul", [
      _c("li", [
        _c(
          "a",
          {
            attrs: {
              href: "https://vuejs.org",
              target: "_blank",
              rel: "noopener",
            },
          },
          [_vm._v("Core Docs")]
        ),
      ]),
      _vm._v(" "),
      _c("li", [
        _c(
          "a",
          {
            attrs: {
              href: "https://forum.vuejs.org",
              target: "_blank",
              rel: "noopener",
            },
          },
          [_vm._v("Forum")]
        ),
      ]),
      _vm._v(" "),
      _c("li", [
        _c(
          "a",
          {
            attrs: {
              href: "https://chat.vuejs.org",
              target: "_blank",
              rel: "noopener",
            },
          },
          [_vm._v("Community Chat")]
        ),
      ]),
      _vm._v(" "),
      _c("li", [
        _c(
          "a",
          {
            attrs: {
              href: "https://twitter.com/vuejs",
              target: "_blank",
              rel: "noopener",
            },
          },
          [_vm._v("Twitter")]
        ),
      ]),
      _vm._v(" "),
      _c("li", [
        _c(
          "a",
          {
            attrs: {
              href: "https://news.vuejs.org",
              target: "_blank",
              rel: "noopener",
            },
          },
          [_vm._v("News")]
        ),
      ]),
    ])
  },
  function () {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("ul", [
      _c("li", [
        _c(
          "a",
          {
            attrs: {
              href: "https://router.vuejs.org",
              target: "_blank",
              rel: "noopener",
            },
          },
          [_vm._v("vue-router")]
        ),
      ]),
      _vm._v(" "),
      _c("li", [
        _c(
          "a",
          {
            attrs: {
              href: "https://vuex.vuejs.org",
              target: "_blank",
              rel: "noopener",
            },
          },
          [_vm._v("vuex")]
        ),
      ]),
      _vm._v(" "),
      _c("li", [
        _c(
          "a",
          {
            attrs: {
              href: "https://github.com/vuejs/vue-devtools#vue-devtools",
              target: "_blank",
              rel: "noopener",
            },
          },
          [_vm._v("vue-devtools")]
        ),
      ]),
      _vm._v(" "),
      _c("li", [
        _c(
          "a",
          {
            attrs: {
              href: "https://vue-loader.vuejs.org",
              target: "_blank",
              rel: "noopener",
            },
          },
          [_vm._v("vue-loader")]
        ),
      ]),
      _vm._v(" "),
      _c("li", [
        _c(
          "a",
          {
            attrs: {
              href: "https://github.com/vuejs/awesome-vue",
              target: "_blank",
              rel: "noopener",
            },
          },
          [_vm._v("awesome-vue")]
        ),
      ]),
    ])
  },
];
__vue_render__._withStripped = true;

  /* style */
  const __vue_inject_styles__ = function (inject) {
    if (!inject) return
    inject("data-v-2a2585d2_0", { source: "h3[data-v-2a2585d2] {\n  margin: 40px 0 0;\n}\nul[data-v-2a2585d2] {\n  list-style-type: none;\n  padding: 0;\n}\nli[data-v-2a2585d2] {\n  display: inline-block;\n  margin: 0 10px;\n}\na[data-v-2a2585d2] {\n  color: #42b983;\n}\n\n/*# sourceMappingURL=HelloWorld.vue.map */", map: {"version":3,"sources":["C:\\projects\\ui\\src\\components\\HelloWorld\\HelloWorld.vue","HelloWorld.vue"],"names":[],"mappings":"AAiDA;EACA,gBAAA;AChDA;ADkDA;EACA,qBAAA;EACA,UAAA;AC/CA;ADiDA;EACA,qBAAA;EACA,cAAA;AC9CA;ADgDA;EACA,cAAA;AC7CA;;AAEA,yCAAyC","file":"HelloWorld.vue","sourcesContent":["<template>\n  <div class=\"hello\">\n    <h1>{{ msg }}</h1>\n    <p>\n      For a guide and recipes on how to configure / customize this project,<br>\n      check out the\n      <a href=\"https://cli.vuejs.org\" target=\"_blank\" rel=\"noopener\">vue-cli documentation</a>.\n    </p>\n    <h3>Installed CLI Plugins</h3>\n    <ul>\n      <li><a href=\"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel\" target=\"_blank\" rel=\"noopener\">babel</a></li>\n      <li><a href=\"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript\" target=\"_blank\" rel=\"noopener\">typescript</a></li>\n    </ul>\n    <h3>Essential Links</h3>\n    <ul>\n      <li><a href=\"https://vuejs.org\" target=\"_blank\" rel=\"noopener\">Core Docs</a></li>\n      <li><a href=\"https://forum.vuejs.org\" target=\"_blank\" rel=\"noopener\">Forum</a></li>\n      <li><a href=\"https://chat.vuejs.org\" target=\"_blank\" rel=\"noopener\">Community Chat</a></li>\n      <li><a href=\"https://twitter.com/vuejs\" target=\"_blank\" rel=\"noopener\">Twitter</a></li>\n      <li><a href=\"https://news.vuejs.org\" target=\"_blank\" rel=\"noopener\">News</a></li>\n    </ul>\n    <h3>Ecosystem</h3>\n    <ul>\n      <li><a href=\"https://router.vuejs.org\" target=\"_blank\" rel=\"noopener\">vue-router</a></li>\n      <li><a href=\"https://vuex.vuejs.org\" target=\"_blank\" rel=\"noopener\">vuex</a></li>\n      <li><a href=\"https://github.com/vuejs/vue-devtools#vue-devtools\" target=\"_blank\" rel=\"noopener\">vue-devtools</a></li>\n      <li><a href=\"https://vue-loader.vuejs.org\" target=\"_blank\" rel=\"noopener\">vue-loader</a></li>\n      <li><a href=\"https://github.com/vuejs/awesome-vue\" target=\"_blank\" rel=\"noopener\">awesome-vue</a></li>\n    </ul>\n    <SimpleButton >123</SimpleButton>\n  </div>\n</template>\n\n<script lang=\"ts\">\nimport { Component, Prop, Vue } from 'vue-property-decorator';\nimport SimpleButton from \"../SimpleButton/SimpleButton.vue\";\n\n@Component({\n  components: {\n    SimpleButton\n  }\n})\nexport default class HelloWorld extends Vue {\n  @Prop({required: true}) private readonly msg!: string;\n}\n</script>\n\n<!-- Add \"scoped\" attribute to limit CSS to this component only -->\n<style scoped lang=\"scss\">\nh3 {\n  margin: 40px 0 0;\n}\nul {\n  list-style-type: none;\n  padding: 0;\n}\nli {\n  display: inline-block;\n  margin: 0 10px;\n}\na {\n  color: #42b983;\n}\n</style>\n","h3 {\n  margin: 40px 0 0;\n}\n\nul {\n  list-style-type: none;\n  padding: 0;\n}\n\nli {\n  display: inline-block;\n  margin: 0 10px;\n}\n\na {\n  color: #42b983;\n}\n\n/*# sourceMappingURL=HelloWorld.vue.map */"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__ = "data-v-2a2585d2";
  /* module identifier */
  const __vue_module_identifier__ = undefined;
  /* functional template */
  const __vue_is_functional_template__ = false;
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__ = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    false,
    createInjector,
    undefined,
    undefined
  );

export { __vue_component__ as HelloWorld, __vue_component__$1 as SimpleButton };
//# sourceMappingURL=index.esm.js.map
