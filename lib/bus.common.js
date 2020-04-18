module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    if (document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);

// CONCATENATED MODULE: ./src/MiniBus.js

/* harmony default export */ var MiniBus = (class {
  constructor(data) {
    this.data = data;
    this.vueInstance = new external_commonjs_vue_commonjs2_vue_root_Vue_default.a({
      data: {
        data
      }
    });
  } // 获取minibus内部数据


  get(name, def = null) {
    const {
      data,
      attr
    } = this.getDataByDot(name);

    if (data && attr in data) {
      return data[attr];
    }

    this.set({
      [name]: def
    });
    return this.get(name, def);
  } // 设置迷你bus内部数据


  set(data) {
    Object.entries(data).forEach(([name, value]) => {
      const {
        data,
        attr
      } = this.getDataByDot(name);

      if (data) {
        this.vueInstance.$set(data, attr, value);
      }
    });
  }

  watch(name, ...arg) {
    this.vueInstance.$watch(`data.${name}`, ...arg);
  } // 触发minibus事件


  emit(...arg) {
    this.vueInstance.$emit(...arg);
  } // 监听minibus事件


  on(...arg) {
    this.vueInstance.$on(...arg);
  } // 监听一次minibus事件


  once(...arg) {
    this.vueInstance.$once(...arg);
  } // 解绑minibus事件


  off(...arg) {
    this.vueInstance.$off(...arg);
  } // 通过点分割对象属性，获取指定数据


  getDataByDot(name) {
    // 'value.username1'
    const names = name.split('.');
    const attr = names.pop();
    let data = this.data;
    names.forEach(name => data && (data = data[name]));
    return {
      data,
      attr
    };
  }

});
// CONCATENATED MODULE: ./src/main.js
 // 向上寻找minibus实例

function findMiniBusInstance(context) {
  if (context._miniBusInstance) {
    return context._miniBusInstance;
  }

  let current = context;

  while (current) {
    if (current.miniBusInstance) {
      context._miniBusInstance = current.miniBusInstance;
      return current.miniBusInstance;
    }

    current = current.$parent;
  }

  if (!context) {
    console.error('context 不存在');
  } else {
    console.error(`${context.$options.name} 不包含minibus实例`);
  }

  return busInit();
} // 初始化一个通信Bus


function busInit(...arg) {
  return {
    miniBusInstance: new MiniBus(...arg)
  };
} // 获取通信Bus的内部数据

function busGet(...arg) {
  return findMiniBusInstance(this).get(...arg);
} // 序列化参数

function normalizeMap(map) {
  if (typeof map === 'string') {
    return [{
      key: map,
      val: null
    }];
  } else if (Array.isArray(map)) {
    return map.map(key => ({
      key,
      val: null
    }));
  }

  return Object.entries(map).map(([key, val]) => ({
    key,
    val
  }));
} // computed内部使用，参考mapGetters


function busGetters(name) {
  const res = {};
  normalizeMap(name).forEach(({
    key,
    val
  }) => res[key.split('.').pop()] = function () {
    return findMiniBusInstance(this).get(key, val);
  });
  return res;
} // 设置通信Bus的内部数据

function busSet(...arg) {
  return findMiniBusInstance(this).set(...arg);
}
function busWatch(...arg) {
  return findMiniBusInstance(this).watch(...arg);
} // 触发通信Bus的事件

function busEmit(...arg) {
  return findMiniBusInstance(this).emit(...arg);
} // 监听通信Bus的事件

function busOn(...arg) {
  return findMiniBusInstance(this).on(...arg);
} // 监听一次通信Bus的事件

function busOnce(...arg) {
  return findMiniBusInstance(this).once(...arg);
} // 解绑通信Bus的事件

function busOff(...arg) {
  return findMiniBusInstance(this).off(...arg);
}
// CONCATENATED MODULE: ./src/utils.js
// 向上寻找指定父组件
// @param context 当前组件
// @param name    父组件name
// @param cross    跨级父组件
// @return Array  父组件集合
function findParentComponents(context, name, cross = false) {
  const names = [].concat(name);
  const components = [];
  let parent = context.$parent;

  while (parent) {
    if (names.includes(parent.$options.name)) {
      components.push(parent);
      if (!cross) break;
    }

    parent = parent.$parent;
  }

  return components;
} // 向下寻找指定子组件
// @param context 当前组件
// @param name    子组件name
// @param cross    跨级子组件
// @return Array  子组件集合

function findChildComponents(context, name, cross = false) {
  const names = [].concat(name);
  return context.$children.reduce((components, child) => {
    if (names.includes(child.$options.name)) {
      components.push(child);
      if (!cross) return components;
    }

    return components.concat(findChildComponents(child, name, cross));
  }, []);
}
// CONCATENATED MODULE: ./src/index.js
// 库的入口文件


/* harmony default export */ var src_0 = ({
  install: Vue => {
    // 初始化
    Vue.prototype.$b_init = busInit; // 数据通信

    Vue.prototype.$b_get = busGet;
    Vue.prototype.$b_set = busSet;
    Vue.prototype.$b_watch = busWatch; // 事件通信

    Vue.prototype.$b_emit = busEmit;
    Vue.prototype.$b_on = busOn;
    Vue.prototype.$b_once = busOnce;
    Vue.prototype.$b_off = busOff; // 寻找组件

    Vue.prototype.$findParentComponents = findParentComponents;
    Vue.prototype.$findChildComponents = findChildComponents;
  }
});
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (src_0);



/***/ })

/******/ });
//# sourceMappingURL=bus.common.js.map