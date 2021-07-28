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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var nullstack__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nullstack */ "./node_modules/nullstack/nullstack.js");
/* harmony import */ var _src_Application__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/Application */ "./src/Application.njs");


/* harmony default export */ __webpack_exports__["default"] = (nullstack__WEBPACK_IMPORTED_MODULE_0__["default"].start(_src_Application__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./node_modules/nullstack/client/anchorableNode.js":
/*!*********************************************************!*\
  !*** ./node_modules/nullstack/client/anchorableNode.js ***!
  \*********************************************************/
/*! exports provided: anchorableElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "anchorableElement", function() { return anchorableElement; });
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./router */ "./node_modules/nullstack/client/router.js");

function anchorableElement(element) {
  const links = element.querySelectorAll('a[href^="/"]:not([target])');

  for (const link of links) {
    link.onclick = event => {
      event.preventDefault();
      _router__WEBPACK_IMPORTED_MODULE_0__["default"].url = link.getAttribute('href');
    };
  }
}

/***/ }),

/***/ "./node_modules/nullstack/client/client.js":
/*!*************************************************!*\
  !*** ./node_modules/nullstack/client/client.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./router */ "./node_modules/nullstack/client/router.js");
/* harmony import */ var _rerender__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rerender */ "./node_modules/nullstack/client/rerender.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./context */ "./node_modules/nullstack/client/context.js");
/* harmony import */ var _shared_generateTree__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/generateTree */ "./node_modules/nullstack/shared/generateTree.js");
/* harmony import */ var _shared_plugins__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/plugins */ "./node_modules/nullstack/shared/plugins.js");





const client = {};
client.initialized = false;
client.hydrated = false;
client.initializer = null;
client.instances = {};
_context__WEBPACK_IMPORTED_MODULE_2__["default"].instances = client.instances;
client.initiationQueue = [];
client.renewalQueue = [];
client.hydrationQueue = [];
client.virtualDom = {};
client.selector = null;
client.events = {};
client.generateContext = _context__WEBPACK_IMPORTED_MODULE_2__["generateContext"];
client.renderQueue = null;

client.update = async function () {
  if (client.initialized) {
    clearInterval(client.renderQueue);
    client.renderQueue = setTimeout(async () => {
      const scope = client;
      scope.context = _context__WEBPACK_IMPORTED_MODULE_2__["default"];
      scope.plugins = Object(_shared_plugins__WEBPACK_IMPORTED_MODULE_4__["loadPlugins"])(scope);
      client.initialized = false;
      client.initiationQueue = [];
      client.renewalQueue = [];
      client.hydrationQueue = [];
      client.nextVirtualDom = await Object(_shared_generateTree__WEBPACK_IMPORTED_MODULE_3__["default"])(client.initializer(), scope);
      Object(_rerender__WEBPACK_IMPORTED_MODULE_1__["default"])(client.selector);
      client.virtualDom = client.nextVirtualDom;
      client.nextVirtualDom = null;
      client.processLifecycleQueues();
    }, 16);
  }
};

client.processLifecycleQueues = async function () {
  if (!client.initialized) {
    client.initialized = true;
    client.hydrated = true;
  }

  const initiationQueue = client.initiationQueue;
  const hydrationQueue = client.hydrationQueue;

  for (const instance of initiationQueue) {
    instance.initiate && (await instance.initiate());
    instance._self.initiated = true;
  }

  if (initiationQueue.length) {
    client.update();
  }

  for (const instance of hydrationQueue) {
    instance.hydrate && (await instance.hydrate());
    instance._self.hydrated = true;
  }

  if (hydrationQueue.length) {
    client.update();
  }

  for (const key in client.instances) {
    const instance = client.instances[key];

    if (!client.renewalQueue.includes(instance)) {
      instance.terminate && (await instance.terminate());
      delete client.instances[key];
    }
  }

  _router__WEBPACK_IMPORTED_MODULE_0__["default"]._changed = false;
};

/* harmony default export */ __webpack_exports__["default"] = (client);

/***/ }),

/***/ "./node_modules/nullstack/client/context.js":
/*!**************************************************!*\
  !*** ./node_modules/nullstack/client/context.js ***!
  \**************************************************/
/*! exports provided: generateContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateContext", function() { return generateContext; });
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./client */ "./node_modules/nullstack/client/client.js");
/* harmony import */ var _shared_deserialize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/deserialize */ "./node_modules/nullstack/shared/deserialize.js");
/* harmony import */ var _objectProxyHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./objectProxyHandler */ "./node_modules/nullstack/client/objectProxyHandler.js");



const context = {};
const memory = Object(_shared_deserialize__WEBPACK_IMPORTED_MODULE_1__["default"])(JSON.stringify(window.context));

for (const key of Object.keys(memory)) {
  context[key] = Object(_objectProxyHandler__WEBPACK_IMPORTED_MODULE_2__["generateObjectProxy"])(key, memory[key]);
}

const contextProxyHandler = {
  set(target, name, value) {
    context[name] = Object(_objectProxyHandler__WEBPACK_IMPORTED_MODULE_2__["generateObjectProxy"])(name, value);
    _client__WEBPACK_IMPORTED_MODULE_0__["default"].update();
    return true;
  },

  get(target, name) {
    if (name === '_isProxy') return true;
    return target[name] === undefined ? context[name] : target[name];
  }

};
function generateContext(temporary) {
  return new Proxy(temporary, contextProxyHandler);
}
/* harmony default export */ __webpack_exports__["default"] = (context);

/***/ }),

/***/ "./node_modules/nullstack/client/environment.js":
/*!******************************************************!*\
  !*** ./node_modules/nullstack/client/environment.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const environment = { ...window.environment,
  client: true,
  server: false
}; //delete window.environment;

Object.freeze(environment);
/* harmony default export */ __webpack_exports__["default"] = (environment);

/***/ }),

/***/ "./node_modules/nullstack/client/index.js":
/*!************************************************!*\
  !*** ./node_modules/nullstack/client/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Nullstack; });
/* harmony import */ var _shared_deserialize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/deserialize */ "./node_modules/nullstack/shared/deserialize.js");
/* harmony import */ var _shared_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/element */ "./node_modules/nullstack/shared/element.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./router */ "./node_modules/nullstack/client/router.js");
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./client */ "./node_modules/nullstack/client/client.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./context */ "./node_modules/nullstack/client/context.js");
/* harmony import */ var _rerender__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rerender */ "./node_modules/nullstack/client/rerender.js");
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./render */ "./node_modules/nullstack/client/render.js");
/* harmony import */ var _instanceProxyHandler__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./instanceProxyHandler */ "./node_modules/nullstack/client/instanceProxyHandler.js");
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./page */ "./node_modules/nullstack/client/page.js");
/* harmony import */ var _environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./environment */ "./node_modules/nullstack/client/environment.js");
/* harmony import */ var _params__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./params */ "./node_modules/nullstack/client/params.js");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./settings */ "./node_modules/nullstack/client/settings.js");
/* harmony import */ var _worker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./worker */ "./node_modules/nullstack/client/worker.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./project */ "./node_modules/nullstack/client/project.js");
/* harmony import */ var _invoke__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./invoke */ "./node_modules/nullstack/client/invoke.js");
/* harmony import */ var _shared_getProxyableMethods__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../shared/getProxyableMethods */ "./node_modules/nullstack/shared/getProxyableMethods.js");
/* harmony import */ var _shared_fragment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../shared/fragment */ "./node_modules/nullstack/shared/fragment.js");
/* harmony import */ var _shared_generateTree__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../shared/generateTree */ "./node_modules/nullstack/shared/generateTree.js");
/* harmony import */ var _shared_plugins__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../shared/plugins */ "./node_modules/nullstack/shared/plugins.js");
/* harmony import */ var _liveReload__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./liveReload */ "./node_modules/nullstack/client/liveReload.js");
/* harmony import */ var _liveReload__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_liveReload__WEBPACK_IMPORTED_MODULE_19__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





















_context__WEBPACK_IMPORTED_MODULE_4__["default"].page = _page__WEBPACK_IMPORTED_MODULE_8__["default"];
_context__WEBPACK_IMPORTED_MODULE_4__["default"].router = _router__WEBPACK_IMPORTED_MODULE_2__["default"];
_context__WEBPACK_IMPORTED_MODULE_4__["default"].settings = _settings__WEBPACK_IMPORTED_MODULE_11__["default"];
_context__WEBPACK_IMPORTED_MODULE_4__["default"].worker = _worker__WEBPACK_IMPORTED_MODULE_12__["default"];
_context__WEBPACK_IMPORTED_MODULE_4__["default"].params = _params__WEBPACK_IMPORTED_MODULE_10__["default"];
_context__WEBPACK_IMPORTED_MODULE_4__["default"].project = _project__WEBPACK_IMPORTED_MODULE_13__["default"];
_context__WEBPACK_IMPORTED_MODULE_4__["default"].environment = window.environment;
_client__WEBPACK_IMPORTED_MODULE_3__["default"].memory = Object(_shared_deserialize__WEBPACK_IMPORTED_MODULE_0__["default"])(JSON.stringify(window.instances));
const scope = _client__WEBPACK_IMPORTED_MODULE_3__["default"];
scope.generateContext = _context__WEBPACK_IMPORTED_MODULE_4__["generateContext"];
scope.context = _context__WEBPACK_IMPORTED_MODULE_4__["default"];
_client__WEBPACK_IMPORTED_MODULE_3__["default"].plugins = Object(_shared_plugins__WEBPACK_IMPORTED_MODULE_18__["loadPlugins"])(scope);
class Nullstack {
  static async start(Starter) {
    window.addEventListener('popstate', () => {
      _router__WEBPACK_IMPORTED_MODULE_2__["default"]._popState();
    });
    _client__WEBPACK_IMPORTED_MODULE_3__["default"].routes = {};
    Object(_params__WEBPACK_IMPORTED_MODULE_10__["updateParams"])(_router__WEBPACK_IMPORTED_MODULE_2__["default"].url);
    _client__WEBPACK_IMPORTED_MODULE_3__["default"].currentInstance = null;

    _client__WEBPACK_IMPORTED_MODULE_3__["default"].initializer = () => Object(_shared_element__WEBPACK_IMPORTED_MODULE_1__["default"])(Starter);

    _client__WEBPACK_IMPORTED_MODULE_3__["default"].selector = document.querySelector('#application');

    if (_environment__WEBPACK_IMPORTED_MODULE_9__["default"].mode === 'spa') {
      scope.plugins = Object(_shared_plugins__WEBPACK_IMPORTED_MODULE_18__["loadPlugins"])(scope);
      _context__WEBPACK_IMPORTED_MODULE_4__["default"].environment = _environment__WEBPACK_IMPORTED_MODULE_9__["default"];
      _client__WEBPACK_IMPORTED_MODULE_3__["default"].virtualDom = await Object(_shared_generateTree__WEBPACK_IMPORTED_MODULE_17__["default"])(_client__WEBPACK_IMPORTED_MODULE_3__["default"].initializer(), scope);
      const body = Object(_render__WEBPACK_IMPORTED_MODULE_6__["default"])(_client__WEBPACK_IMPORTED_MODULE_3__["default"].virtualDom);
      _client__WEBPACK_IMPORTED_MODULE_3__["default"].selector.replaceWith(body);
      _client__WEBPACK_IMPORTED_MODULE_3__["default"].selector = body;
    } else {
      _client__WEBPACK_IMPORTED_MODULE_3__["default"].virtualDom = await Object(_shared_generateTree__WEBPACK_IMPORTED_MODULE_17__["default"])(_client__WEBPACK_IMPORTED_MODULE_3__["default"].initializer(), scope);
      _context__WEBPACK_IMPORTED_MODULE_4__["default"].environment = _environment__WEBPACK_IMPORTED_MODULE_9__["default"];
      scope.plugins = Object(_shared_plugins__WEBPACK_IMPORTED_MODULE_18__["loadPlugins"])(scope);
      _client__WEBPACK_IMPORTED_MODULE_3__["default"].nextVirtualDom = await Object(_shared_generateTree__WEBPACK_IMPORTED_MODULE_17__["default"])(_client__WEBPACK_IMPORTED_MODULE_3__["default"].initializer(), scope);
      Object(_rerender__WEBPACK_IMPORTED_MODULE_5__["default"])(_client__WEBPACK_IMPORTED_MODULE_3__["default"].selector);
      _client__WEBPACK_IMPORTED_MODULE_3__["default"].virtualDom = _client__WEBPACK_IMPORTED_MODULE_3__["default"].nextVirtualDom;
      _client__WEBPACK_IMPORTED_MODULE_3__["default"].nextVirtualDom = null;
    }

    _client__WEBPACK_IMPORTED_MODULE_3__["default"].processLifecycleQueues();
    delete window.context;
  }

  constructor() {
    _defineProperty(this, "_self", {
      prerendered: false,
      initiated: false,
      hydrated: false
    });

    const methods = Object(_shared_getProxyableMethods__WEBPACK_IMPORTED_MODULE_15__["default"])(this);
    const proxy = new Proxy(this, _instanceProxyHandler__WEBPACK_IMPORTED_MODULE_7__["default"]);

    for (const method of methods) {
      this[method] = this[method].bind(proxy);
    }

    return proxy;
  }

  render() {
    return false;
  }

}

_defineProperty(Nullstack, "element", _shared_element__WEBPACK_IMPORTED_MODULE_1__["default"]);

_defineProperty(Nullstack, "invoke", _invoke__WEBPACK_IMPORTED_MODULE_14__["default"]);

_defineProperty(Nullstack, "fragment", _shared_fragment__WEBPACK_IMPORTED_MODULE_16__["default"]);

_defineProperty(Nullstack, "use", Object(_shared_plugins__WEBPACK_IMPORTED_MODULE_18__["usePlugins"])('client'));

/***/ }),

/***/ "./node_modules/nullstack/client/instanceProxyHandler.js":
/*!***************************************************************!*\
  !*** ./node_modules/nullstack/client/instanceProxyHandler.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _objectProxyHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objectProxyHandler */ "./node_modules/nullstack/client/objectProxyHandler.js");
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./client */ "./node_modules/nullstack/client/client.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./context */ "./node_modules/nullstack/client/context.js");



const instanceProxyHandler = {
  get(target, name) {
    if (name === '_isProxy') return true;

    if (typeof target[name] == 'function' && !target[name].name.startsWith('_') && name !== 'constructor') {
      return args => {
        const context = Object(_context__WEBPACK_IMPORTED_MODULE_2__["generateContext"])({ ...target._attributes,
          ...args,
          self: target._self
        });
        return target[name](context);
      };
    }

    return Reflect.get(...arguments);
  },

  set(target, name, value) {
    target[name] = Object(_objectProxyHandler__WEBPACK_IMPORTED_MODULE_0__["generateObjectProxy"])(name, value);

    if (!name.startsWith('_')) {
      _client__WEBPACK_IMPORTED_MODULE_1__["default"].update();
    }

    return true;
  }

};
/* harmony default export */ __webpack_exports__["default"] = (instanceProxyHandler);

/***/ }),

/***/ "./node_modules/nullstack/client/invoke.js":
/*!*************************************************!*\
  !*** ./node_modules/nullstack/client/invoke.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return invoke; });
/* harmony import */ var _shared_deserialize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/deserialize */ "./node_modules/nullstack/shared/deserialize.js");
/* harmony import */ var _worker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./worker */ "./node_modules/nullstack/client/worker.js");
/* harmony import */ var _shared_prefix__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/prefix */ "./node_modules/nullstack/shared/prefix.js");
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page */ "./node_modules/nullstack/client/page.js");




function invoke(name, hash) {
  return async function _invoke(params = {}) {
    var _worker$queues$name;

    let payload;
    _worker__WEBPACK_IMPORTED_MODULE_1__["default"].fetching = true;

    if (Object.isFrozen(_worker__WEBPACK_IMPORTED_MODULE_1__["default"].queues[name])) {
      _worker__WEBPACK_IMPORTED_MODULE_1__["default"].queues[name] = [params];
    } else {
      _worker__WEBPACK_IMPORTED_MODULE_1__["default"].queues[name] = [..._worker__WEBPACK_IMPORTED_MODULE_1__["default"].queues[name], params];
    }

    const finalHash = hash === this.constructor.hash ? hash : `${hash}-${this.constructor.hash}`;
    let url = `${_worker__WEBPACK_IMPORTED_MODULE_1__["default"].api}/${_shared_prefix__WEBPACK_IMPORTED_MODULE_2__["default"]}/${finalHash}/${name}.json`;

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: _worker__WEBPACK_IMPORTED_MODULE_1__["default"].headers,
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(params || {})
      });
      _page__WEBPACK_IMPORTED_MODULE_3__["default"].status = response.status;
      const text = await response.text();
      payload = Object(_shared_deserialize__WEBPACK_IMPORTED_MODULE_0__["default"])(text).result;
      _worker__WEBPACK_IMPORTED_MODULE_1__["default"].responsive = true;
    } catch (e) {
      _worker__WEBPACK_IMPORTED_MODULE_1__["default"].responsive = false;
    }

    if (((_worker$queues$name = _worker__WEBPACK_IMPORTED_MODULE_1__["default"].queues[name]) === null || _worker$queues$name === void 0 ? void 0 : _worker$queues$name.length) === 1) {
      delete _worker__WEBPACK_IMPORTED_MODULE_1__["default"].queues[name];
    } else {
      _worker__WEBPACK_IMPORTED_MODULE_1__["default"].queues[name] = _worker__WEBPACK_IMPORTED_MODULE_1__["default"].queues[name].filter(task => task !== params);
    }

    _worker__WEBPACK_IMPORTED_MODULE_1__["default"].fetching = !!Object.keys(_worker__WEBPACK_IMPORTED_MODULE_1__["default"].queues).length;
    return payload;
  };
}

/***/ }),

/***/ "./node_modules/nullstack/client/liveReload.js":
/*!*****************************************************!*\
  !*** ./node_modules/nullstack/client/liveReload.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

let shouldReloadNext = false;
let timer = null;

function reload() {
  if (shouldReloadNext) {
    clearInterval(timer);
    timer = setTimeout(() => {
      location.reload();
    }, 10);
  } else {
    shouldReloadNext = true;
  }
}

function liveReload() {
  const socket = new WebSocket('ws://' + location.host);
  socket.addEventListener('open', reload);
  socket.addEventListener('close', liveReload);
}

liveReload();

/***/ }),

/***/ "./node_modules/nullstack/client/objectProxyHandler.js":
/*!*************************************************************!*\
  !*** ./node_modules/nullstack/client/objectProxyHandler.js ***!
  \*************************************************************/
/*! exports provided: generateObjectProxy, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateObjectProxy", function() { return generateObjectProxy; });
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./client */ "./node_modules/nullstack/client/client.js");

const objectProxyHandler = {
  set(target, name, value) {
    if (isProxyable(name, value)) {
      value._isProxy = true;
      target[name] = new Proxy(value, this);
    } else {
      target[name] = value;
    }

    if (!name.startsWith('_')) {
      _client__WEBPACK_IMPORTED_MODULE_0__["default"].update();
    }

    return true;
  },

  get(target, name) {
    if (name === '_isProxy') return true;
    return Reflect.get(...arguments);
  }

};

function isProxyable(name, value) {
  return !name.startsWith('_') && value !== null && typeof value === 'object' && value._isProxy === undefined && !(value instanceof Date);
}

function generateObjectProxy(name, value) {
  if (isProxyable(name, value)) {
    if (typeof value === 'object') {
      for (const key of Object.keys(value)) {
        value[key] = generateObjectProxy(key, value[key]);
      }
    }

    return new Proxy(value, objectProxyHandler);
  } else {
    return value;
  }
}
/* harmony default export */ __webpack_exports__["default"] = (objectProxyHandler);

/***/ }),

/***/ "./node_modules/nullstack/client/page.js":
/*!***********************************************!*\
  !*** ./node_modules/nullstack/client/page.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./client */ "./node_modules/nullstack/client/client.js");
/* harmony import */ var _windowEvent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./windowEvent */ "./node_modules/nullstack/client/windowEvent.js");


const page = { ...window.page,
  event: 'nullstack.page'
};
delete window.page;
const pageProxyHandler = {
  set(target, name, value) {
    if (name === 'title') {
      document.title = value;
    }

    const result = Reflect.set(...arguments);

    if (name === 'title') {
      Object(_windowEvent__WEBPACK_IMPORTED_MODULE_1__["default"])('page');
    }

    _client__WEBPACK_IMPORTED_MODULE_0__["default"].update();
    return result;
  }

};
const proxy = new Proxy(page, pageProxyHandler);
/* harmony default export */ __webpack_exports__["default"] = (proxy);

/***/ }),

/***/ "./node_modules/nullstack/client/params.js":
/*!*************************************************!*\
  !*** ./node_modules/nullstack/client/params.js ***!
  \*************************************************/
/*! exports provided: updateParams, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateParams", function() { return updateParams; });
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./router */ "./node_modules/nullstack/client/router.js");
/* harmony import */ var _shared_getQueryStringParams__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/getQueryStringParams */ "./node_modules/nullstack/shared/getQueryStringParams.js");
/* harmony import */ var _shared_serializeParam__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/serializeParam */ "./node_modules/nullstack/shared/serializeParam.js");
/* harmony import */ var _shared_serializeSearch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/serializeSearch */ "./node_modules/nullstack/shared/serializeSearch.js");
/* harmony import */ var _segments__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./segments */ "./node_modules/nullstack/client/segments.js");





const paramsProxyHandler = {
  set(target, name, value) {
    const serializedValue = Object(_shared_serializeParam__WEBPACK_IMPORTED_MODULE_2__["default"])(value);
    target[name] = serializedValue;
    const search = Object(_shared_serializeSearch__WEBPACK_IMPORTED_MODULE_3__["default"])(target);
    _router__WEBPACK_IMPORTED_MODULE_0__["default"].url = _router__WEBPACK_IMPORTED_MODULE_0__["default"].path + (search ? '?' : '') + search;
    return true;
  },

  get(target, name) {
    if (target[name] === false) return false;
    if (_segments__WEBPACK_IMPORTED_MODULE_4__["default"][name] === false) return false;
    return target[name] || _segments__WEBPACK_IMPORTED_MODULE_4__["default"][name] || '';
  }

};
const params = { ...window.params
};
delete window.params;
const proxy = new Proxy(params, paramsProxyHandler);
function updateParams(query) {
  Object(_segments__WEBPACK_IMPORTED_MODULE_4__["resetSegments"])();
  const delta = Object(_shared_getQueryStringParams__WEBPACK_IMPORTED_MODULE_1__["default"])(query);

  for (const key of Object.keys({ ...delta,
    ...params
  })) {
    params[key] = delta[key];
  }

  return proxy;
}
/* harmony default export */ __webpack_exports__["default"] = (proxy);

/***/ }),

/***/ "./node_modules/nullstack/client/project.js":
/*!**************************************************!*\
  !*** ./node_modules/nullstack/client/project.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const project = { ...window.project
};
delete window.project;
Object.freeze(project);
/* harmony default export */ __webpack_exports__["default"] = (project);

/***/ }),

/***/ "./node_modules/nullstack/client/render.js":
/*!*************************************************!*\
  !*** ./node_modules/nullstack/client/render.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return render; });
/* harmony import */ var _shared_nodes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/nodes */ "./node_modules/nullstack/shared/nodes.js");
/* harmony import */ var _anchorableNode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./anchorableNode */ "./node_modules/nullstack/client/anchorableNode.js");


function render(node, options) {
  if (Object(_shared_nodes__WEBPACK_IMPORTED_MODULE_0__["isFalse"])(node) || node.type === 'head') {
    return document.createComment("");
  }

  if (Object(_shared_nodes__WEBPACK_IMPORTED_MODULE_0__["isText"])(node)) {
    return document.createTextNode(node);
  }

  const svg = options && options.svg || node.type === 'svg';
  let element;

  if (svg) {
    element = document.createElementNS("http://www.w3.org/2000/svg", node.type);
  } else {
    element = document.createElement(node.type);
  }

  if (node.instance) {
    node.instance._self.element = element;
  }

  for (let name in node.attributes) {
    if (name === 'html') {
      element.innerHTML = node.attributes[name];
      Object(_anchorableNode__WEBPACK_IMPORTED_MODULE_1__["anchorableElement"])(element);
    } else if (name.startsWith('on')) {
      const eventName = name.replace('on', '');
      const key = '_event.' + eventName;

      node[key] = event => {
        if (node.attributes.default !== true) {
          event.preventDefault();
        }

        node.attributes[name]({ ...node.attributes,
          event
        });
      };

      element.addEventListener(eventName, node[key]);
    } else {
      const type = typeof node.attributes[name];

      if (type !== 'object' && type !== 'function') {
        if (name != 'value' && node.attributes[name] === true) {
          element.setAttribute(name, '');
        } else if (name == 'value' || node.attributes[name] !== false && node.attributes[name] !== null && node.attributes[name] !== undefined) {
          element.setAttribute(name, node.attributes[name]);
        }
      }
    }
  }

  if (!node.attributes.html) {
    for (let i = 0; i < node.children.length; i++) {
      const child = render(node.children[i], {
        svg
      });
      element.appendChild(child);
    }

    if (node.type == 'select') {
      element.value = node.attributes.value;
    }
  }

  return element;
}

/***/ }),

/***/ "./node_modules/nullstack/client/rerender.js":
/*!***************************************************!*\
  !*** ./node_modules/nullstack/client/rerender.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rerender; });
/* harmony import */ var _shared_nodes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/nodes */ "./node_modules/nullstack/shared/nodes.js");
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./client */ "./node_modules/nullstack/client/client.js");
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render */ "./node_modules/nullstack/client/render.js");
/* harmony import */ var _anchorableNode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./anchorableNode */ "./node_modules/nullstack/client/anchorableNode.js");




function rerender(selector, current, next) {
  current = current === undefined ? _client__WEBPACK_IMPORTED_MODULE_1__["default"].virtualDom : current;
  next = next === undefined ? _client__WEBPACK_IMPORTED_MODULE_1__["default"].nextVirtualDom : next;

  if (next.instance) {
    next.instance._self.element = selector;
  }

  if (!_client__WEBPACK_IMPORTED_MODULE_1__["default"].hydrated && selector) {
    for (const element of selector.childNodes) {
      if (element.tagName && element.tagName.toLowerCase() == 'textarea' && element.childNodes.length == 0) {
        element.appendChild(document.createTextNode(''));
      }

      if (element.COMMENT_NODE === 8 && element.textContent === '#') {
        selector.removeChild(element);
      }
    }
  }

  if (Object(_shared_nodes__WEBPACK_IMPORTED_MODULE_0__["isFalse"])(current) && Object(_shared_nodes__WEBPACK_IMPORTED_MODULE_0__["isFalse"])(next)) {
    return;
  }

  if ((Object(_shared_nodes__WEBPACK_IMPORTED_MODULE_0__["isFalse"])(current) || Object(_shared_nodes__WEBPACK_IMPORTED_MODULE_0__["isFalse"])(next)) && current != next) {
    const nextSelector = Object(_render__WEBPACK_IMPORTED_MODULE_2__["default"])(next);
    return selector.replaceWith(nextSelector);
  }

  if (current.type == 'head' && next.type == 'head') {
    return;
  }

  if (current.type == 'head' || next.type == 'head') {
    const nextSelector = Object(_render__WEBPACK_IMPORTED_MODULE_2__["default"])(next);
    return selector.replaceWith(nextSelector);
  }

  if (current.type !== next.type) {
    const nextSelector = Object(_render__WEBPACK_IMPORTED_MODULE_2__["default"])(next);
    return selector.replaceWith(nextSelector);
  }

  if (Object(_shared_nodes__WEBPACK_IMPORTED_MODULE_0__["isText"])(current) && Object(_shared_nodes__WEBPACK_IMPORTED_MODULE_0__["isText"])(next)) {
    if (current != next) {
      selector.nodeValue = next;
    }

    return;
  }

  if (current.type === next.type) {
    const attributeNames = Object.keys({ ...current.attributes,
      ...next.attributes
    });

    for (const name of attributeNames) {
      if (name === 'html') {
        if (next.attributes[name] !== current.attributes[name]) {
          selector.innerHTML = next.attributes[name];
          Object(_anchorableNode__WEBPACK_IMPORTED_MODULE_3__["anchorableElement"])(selector);
        }
      } else if (name === 'checked') {
        if (next.attributes[name] !== selector.value) {
          selector.checked = next.attributes[name];
        }
      } else if (name === 'value') {
        if (next.attributes[name] !== selector.value) {
          selector.value = next.attributes[name];
        }
      } else if (name.startsWith('on')) {
        const eventName = name.replace('on', '');
        const key = '_event.' + eventName;
        selector.removeEventListener(eventName, current[key]);

        if (next.attributes[name]) {
          next[key] = event => {
            if (next.attributes.default !== true) {
              event.preventDefault();
            }

            next.attributes[name]({ ...next.attributes,
              event
            });
          };

          selector.addEventListener(eventName, next[key]);
        }
      } else {
        const type = typeof next.attributes[name];

        if (type !== 'object' && type !== 'function') {
          if (current.attributes[name] !== undefined && next.attributes[name] === undefined) {
            selector.removeAttribute(name);
          } else if (current.attributes[name] !== next.attributes[name]) {
            if (name != 'value' && next.attributes[name] === false || next.attributes[name] === null || next.attributes[name] === undefined) {
              selector.removeAttribute(name);
            } else if (name != 'value' && next.attributes[name] === true) {
              selector.setAttribute(name, '');
            } else {
              selector.setAttribute(name, next.attributes[name]);
            }
          }
        }
      }
    }

    if (next.attributes.html) return;
    const limit = Math.max(current.children.length, next.children.length);

    if (next.children.length > current.children.length) {
      for (let i = 0; i < current.children.length; i++) {
        rerender(selector.childNodes[i], current.children[i], next.children[i]);
      }

      for (let i = current.children.length; i < next.children.length; i++) {
        const nextSelector = Object(_render__WEBPACK_IMPORTED_MODULE_2__["default"])(next.children[i]);
        selector.appendChild(nextSelector);
      }
    } else if (current.children.length > next.children.length) {
      for (let i = 0; i < next.children.length; i++) {
        rerender(selector.childNodes[i], current.children[i], next.children[i]);
      }

      for (let i = current.children.length - 1; i >= next.children.length; i--) {
        selector.removeChild(selector.childNodes[i]);
      }
    } else {
      for (let i = limit - 1; i > -1; i--) {
        if (typeof selector.childNodes[i] === 'undefined') {
          console.error(`Virtual DOM does not match the DOM. Expected tag ${current.type} but instead found undefined. This error usually happens because of an invalid HTML hierarchy like nested forms or tables without tr.`);
          return;
        }

        rerender(selector.childNodes[i], current.children[i], next.children[i]);
      }
    }

    if (next.type == 'textarea') {
      selector.value = next.children.join("");
    }

    if (next.type == 'select') {
      selector.value = next.attributes.value;
    }
  }
}

/***/ }),

/***/ "./node_modules/nullstack/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/nullstack/client/router.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _params__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./params */ "./node_modules/nullstack/client/params.js");
/* harmony import */ var _environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environment */ "./node_modules/nullstack/client/environment.js");
/* harmony import */ var _shared_extractLocation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/extractLocation */ "./node_modules/nullstack/shared/extractLocation.js");
/* harmony import */ var _worker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./worker */ "./node_modules/nullstack/client/worker.js");
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page */ "./node_modules/nullstack/client/page.js");
/* harmony import */ var _windowEvent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./windowEvent */ "./node_modules/nullstack/client/windowEvent.js");
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./client */ "./node_modules/nullstack/client/client.js");
/* harmony import */ var _segments__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./segments */ "./node_modules/nullstack/client/segments.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









let redirectTimer = null;

class Router {
  constructor() {
    _defineProperty(this, "event", 'nullstack.router');

    _defineProperty(this, "_changed", false);

    _defineProperty(this, "_segments", _segments__WEBPACK_IMPORTED_MODULE_7__["default"]);

    const {
      hash,
      url
    } = Object(_shared_extractLocation__WEBPACK_IMPORTED_MODULE_2__["default"])(window.location.pathname + window.location.search);
    this._url = url;
    this._hash = hash;
  }

  async _popState() {
    const {
      urlWithHash
    } = Object(_shared_extractLocation__WEBPACK_IMPORTED_MODULE_2__["default"])(window.location.pathname + window.location.search);
    await this._update(urlWithHash, false);
  }

  async _update(target, push) {
    const {
      url,
      path,
      hash,
      urlWithHash
    } = Object(_shared_extractLocation__WEBPACK_IMPORTED_MODULE_2__["default"])(target);
    clearTimeout(redirectTimer);
    redirectTimer = setTimeout(async () => {
      _page__WEBPACK_IMPORTED_MODULE_4__["default"].status = 200;

      if (_environment__WEBPACK_IMPORTED_MODULE_1__["default"].mode === 'ssg') {
        _worker__WEBPACK_IMPORTED_MODULE_3__["default"].fetching = true;
        const api = '/index.json';
        const endpoint = path === '/' ? api : path + api;

        try {
          const response = await fetch(endpoint);
          const payload = await response.json(url);
          _client__WEBPACK_IMPORTED_MODULE_6__["default"].memory = payload.instances;

          for (const key in payload.page) {
            _page__WEBPACK_IMPORTED_MODULE_4__["default"][key] = payload.page[key];
          }

          _worker__WEBPACK_IMPORTED_MODULE_3__["default"].responsive = true;
        } catch (error) {
          _worker__WEBPACK_IMPORTED_MODULE_3__["default"].responsive = false;
        }

        _worker__WEBPACK_IMPORTED_MODULE_3__["default"].fetching = false;
      }

      if (push) {
        history.pushState({}, document.title, urlWithHash);
      }

      this._url = url;
      this._hash = hash;
      this._changed = true;
      Object(_params__WEBPACK_IMPORTED_MODULE_0__["updateParams"])(url);
      _client__WEBPACK_IMPORTED_MODULE_6__["default"].update();
      Object(_windowEvent__WEBPACK_IMPORTED_MODULE_5__["default"])('router');
    }, 0);
  }

  async _redirect(target) {
    if (target.startsWith('http')) {
      return window.location.href = target;
    }

    const {
      url,
      hash,
      urlWithHash
    } = Object(_shared_extractLocation__WEBPACK_IMPORTED_MODULE_2__["default"])(target);

    if (url !== this._url || this._hash !== hash) {
      await this._update(urlWithHash, true);
    }

    if (!hash) {
      window.scroll(0, 0);
    }
  }

  get url() {
    return this._url;
  }

  set url(target) {
    this._redirect(target);
  }

  get path() {
    return Object(_shared_extractLocation__WEBPACK_IMPORTED_MODULE_2__["default"])(this._url).path;
  }

  set path(target) {
    this._redirect(target + window.location.search);
  }

}

const router = new Router();
/* harmony default export */ __webpack_exports__["default"] = (router);

/***/ }),

/***/ "./node_modules/nullstack/client/segments.js":
/*!***************************************************!*\
  !*** ./node_modules/nullstack/client/segments.js ***!
  \***************************************************/
/*! exports provided: default, resetSegments */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetSegments", function() { return resetSegments; });
const segments = {};
/* harmony default export */ __webpack_exports__["default"] = (segments);
function resetSegments() {
  for (const key in segments) {
    delete segments[key];
  }
}

/***/ }),

/***/ "./node_modules/nullstack/client/settings.js":
/*!***************************************************!*\
  !*** ./node_modules/nullstack/client/settings.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const settings = { ...window.settings
};
delete window.settings;
Object.freeze(settings);
/* harmony default export */ __webpack_exports__["default"] = (settings);

/***/ }),

/***/ "./node_modules/nullstack/client/windowEvent.js":
/*!******************************************************!*\
  !*** ./node_modules/nullstack/client/windowEvent.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return windowEvent; });
let timer = null;
function windowEvent(name) {
  clearTimeout(timer);
  setTimeout(() => {
    const event = new Event('nullstack.' + name);
    window.dispatchEvent(event);
  }, 0);
}

/***/ }),

/***/ "./node_modules/nullstack/client/worker.js":
/*!*************************************************!*\
  !*** ./node_modules/nullstack/client/worker.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./environment */ "./node_modules/nullstack/client/environment.js");
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./client */ "./node_modules/nullstack/client/client.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./router */ "./node_modules/nullstack/client/router.js");



const worker = { ...window.worker
};
worker.online = navigator.onLine;
delete window.worker;
const emptyQueue = Object.freeze([]);
const queuesProxyHandler = {
  set(target, name, value) {
    target[name] = value;
    _client__WEBPACK_IMPORTED_MODULE_1__["default"].update();
    return true;
  },

  get(target, name) {
    return target[name] || emptyQueue;
  }

};
worker.queues = new Proxy({}, queuesProxyHandler);
const workerProxyHandler = {
  set(target, name, value) {
    if (target[name] !== value) {
      target[name] = value;
      _client__WEBPACK_IMPORTED_MODULE_1__["default"].update();
    }

    return true;
  }

};
const proxy = new Proxy(worker, workerProxyHandler);

if (worker.enabled) {
  window.addEventListener('beforeinstallprompt', function (event) {
    event.preventDefault();
    proxy.installation = event;
  });

  async function register() {
    if ('serviceWorker' in navigator) {
      const request = `/service-worker-${_environment__WEBPACK_IMPORTED_MODULE_0__["default"].key}.js`;

      try {
        proxy.registration = await navigator.serviceWorker.register(request, {
          scope: '/'
        });
      } catch (error) {
        console.log(error);
      }

      ;
    }
  }

  ;
  register();
}

window.addEventListener('online', () => {
  proxy.online = true;

  if (_environment__WEBPACK_IMPORTED_MODULE_0__["default"].mode === 'ssg') {
    _router__WEBPACK_IMPORTED_MODULE_2__["default"]._update(_router__WEBPACK_IMPORTED_MODULE_2__["default"].url);
  } else {
    proxy.responsive = true;
  }
});
window.addEventListener('offline', () => {
  proxy.online = false;
});
/* harmony default export */ __webpack_exports__["default"] = (proxy);

/***/ }),

/***/ "./node_modules/nullstack/nullstack.js":
/*!*********************************************!*\
  !*** ./node_modules/nullstack/nullstack.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./client */ "./node_modules/nullstack/client/index.js");

/* harmony default export */ __webpack_exports__["default"] = (_client__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./node_modules/nullstack/plugins/anchorable.js":
/*!******************************************************!*\
  !*** ./node_modules/nullstack/plugins/anchorable.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function match(node) {
  return node && node.type === 'a' && node.attributes.href && node.attributes.href.startsWith('/') && !node.attributes.target;
}

function transform({
  node,
  router
}) {
  if (!match(node)) return;
  const originalEvent = node.attributes.onclick;

  node.attributes.onclick = ({
    event
  }) => {
    event.preventDefault();
    router.url = node.attributes.href;

    if (originalEvent) {
      setTimeout(() => {
        originalEvent({ ...node.attributes,
          event
        });
      }, 0);
    }
  };
}

/* harmony default export */ __webpack_exports__["default"] = ({
  transform,
  client: true
});

/***/ }),

/***/ "./node_modules/nullstack/plugins/bindable.js":
/*!****************************************************!*\
  !*** ./node_modules/nullstack/plugins/bindable.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function attachEvent(node) {
  const target = node.attributes.source;
  let eventName = 'oninput';
  let valueName = 'value';

  if (node.attributes.type === 'checkbox' || node.attributes.type === 'radio') {
    eventName = 'onclick';
    valueName = 'checked';
  } else if (node.type !== 'input' && node.type !== 'textarea') {
    eventName = 'onchange';
  }

  const originalEvent = node.attributes[eventName];

  node.attributes[eventName] = ({
    event,
    value
  }) => {
    if (valueName == 'checked') {
      target[node.attributes.bind] = event.target[valueName];
    } else if (target[node.attributes.bind] === true || target[node.attributes.bind] === false) {
      target[node.attributes.bind] = event ? event.target[valueName] == 'true' : value;
    } else if (typeof target[node.attributes.bind] === 'number') {
      target[node.attributes.bind] = parseFloat(event ? event.target[valueName] : value) || 0;
    } else {
      target[node.attributes.bind] = event ? event.target[valueName] : value;
    }

    if (originalEvent !== undefined) {
      setTimeout(() => {
        originalEvent({ ...node.attributes,
          event,
          value
        });
      }, 0);
    }
  };
}

function match(node) {
  return node !== undefined && node.attributes !== undefined && node.attributes.bind !== undefined && node.attributes.source !== undefined;
}

function transform({
  node,
  environment
}) {
  if (!match(node)) return;
  const target = node.attributes.source;

  if (node.type === 'textarea') {
    node.children = [target[node.attributes.bind]];
  } else if (node.type === 'input' && node.attributes.type === 'checkbox') {
    node.attributes.checked = target[node.attributes.bind];
  } else {
    node.attributes.value = target[node.attributes.bind];
  }

  node.attributes.name = node.attributes.name || node.attributes.bind;

  if (environment.client) {
    attachEvent(node);
  }
}

/* harmony default export */ __webpack_exports__["default"] = ({
  transform,
  client: true,
  server: true
});

/***/ }),

/***/ "./node_modules/nullstack/plugins/datable.js":
/*!***************************************************!*\
  !*** ./node_modules/nullstack/plugins/datable.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shared_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/string */ "./node_modules/nullstack/shared/string.js");


function match(node) {
  return node && node.attributes !== undefined;
}

function transform({
  node
}) {
  if (!match(node)) return;
  node.attributes.data = node.attributes.data || {};

  for (const attribute in node.attributes) {
    if (attribute.startsWith('data-')) {
      const key = Object(_shared_string__WEBPACK_IMPORTED_MODULE_0__["camelize"])(attribute.slice(5));
      node.attributes.data[key] = node.attributes[attribute];
    }
  }

  for (const key in node.attributes.data) {
    const attribute = 'data-' + Object(_shared_string__WEBPACK_IMPORTED_MODULE_0__["kebabize"])(key);
    node.attributes[attribute] = node.attributes.data[key];
  }
}

/* harmony default export */ __webpack_exports__["default"] = ({
  transform,
  client: true,
  server: true
});

/***/ }),

/***/ "./node_modules/nullstack/plugins/objectable.js":
/*!******************************************************!*\
  !*** ./node_modules/nullstack/plugins/objectable.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function match(node) {
  return node && node.attributes !== undefined;
}

function transform({
  node
}) {
  if (!match(node)) return;

  for (const attribute in node.attributes) {
    if (attribute.startsWith('on') && typeof node.attributes[attribute] === 'object') {
      const target = node.attributes.source;
      const object = node.attributes[attribute];

      node.attributes[attribute] = function () {
        Object.assign(target, object);
      }.bind(target);
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = ({
  transform,
  client: true
});

/***/ }),

/***/ "./node_modules/nullstack/plugins/parameterizable.js":
/*!***********************************************************!*\
  !*** ./node_modules/nullstack/plugins/parameterizable.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shared_serializeParam__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/serializeParam */ "./node_modules/nullstack/shared/serializeParam.js");
/* harmony import */ var _shared_serializeSearch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/serializeSearch */ "./node_modules/nullstack/shared/serializeSearch.js");



function match(node) {
  return node && node.attributes && (node.attributes.params || node.attributes.path);
}

function transform({
  node,
  router,
  params
}) {
  if (!match(node)) return;
  let serializedParams;

  if (node.attributes.params) {
    serializedParams = {};

    for (const key in node.attributes.params) {
      serializedParams[key] = Object(_shared_serializeParam__WEBPACK_IMPORTED_MODULE_0__["default"])(node.attributes.params[key]);
    }
  } else {
    serializedParams = params;
  }

  const search = Object(_shared_serializeSearch__WEBPACK_IMPORTED_MODULE_1__["default"])(serializedParams);
  const path = node.attributes.path || router.path;
  node.attributes.href = path + (search ? '?' : '') + search;
  delete node.attributes.path;
  delete node.attributes.params;
}

/* harmony default export */ __webpack_exports__["default"] = ({
  transform,
  client: true,
  server: true
});

/***/ }),

/***/ "./node_modules/nullstack/plugins/routable.js":
/*!****************************************************!*\
  !*** ./node_modules/nullstack/plugins/routable.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shared_routeMatches__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/routeMatches */ "./node_modules/nullstack/shared/routeMatches.js");


function erase(node) {
  node.type = false;
  delete node.attributes;
  delete node.children;
}

function match(node) {
  return node && node.attributes !== undefined && node.attributes.route !== undefined;
}

function load({
  router
}) {
  router._routes = {};

  if (!router._oldSegments) {
    router._oldSegments = {};
    router._newSegments = {};
  } else {
    router._oldSegments = router._newSegments;
    router._newSegments = {};
  }
}

function transform({
  node,
  depth,
  router
}) {
  if (!match(node)) return;
  const routeDepth = depth.slice(0, -1).join('.');

  if (router._routes[routeDepth] !== undefined) {
    erase(node);
  } else {
    const params = Object(_shared_routeMatches__WEBPACK_IMPORTED_MODULE_0__["default"])(router.url, node.attributes.route);

    if (params) {
      router._routes[routeDepth] = true;
      router._newSegments[routeDepth] = params;
      Object.assign(router._segments, params);
    } else {
      erase(node);
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = ({
  load,
  transform,
  client: true,
  server: true
});

/***/ }),

/***/ "./node_modules/nullstack/shared/deserialize.js":
/*!******************************************************!*\
  !*** ./node_modules/nullstack/shared/deserialize.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return deserialize; });
const reISO = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*))(?:Z|(\+|-)([\d|:]*))?$/;
const reMsAjax = /^\/Date\((d|-|.*)\)[\/|\\]$/;

function dateParser(key, value) {
  if (typeof value === 'string') {
    let a = reISO.exec(value);
    if (a) return new Date(value);
    a = reMsAjax.exec(value);

    if (a) {
      const b = a[1].split(/[-+,.]/);
      return new Date(b[0] ? +b[0] : 0 - +b[1]);
    }
  }

  return value;
}

;
function deserialize(string) {
  return JSON.parse(string, dateParser);
}

/***/ }),

/***/ "./node_modules/nullstack/shared/element.js":
/*!**************************************************!*\
  !*** ./node_modules/nullstack/shared/element.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return element; });
/* harmony import */ var _fragment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fragment */ "./node_modules/nullstack/shared/fragment.js");


function flattenChildren(children) {
  children = [].concat.apply([], children).map(child => {
    if (child === null || child === undefined) return false;
    return child;
  });
  return [].concat.apply([], children);
}

function element(type, props, ...children) {
  children = flattenChildren(children);

  if (type === 'textarea') {
    children = [children.join('')];
  }

  const attributes = { ...props,
    children
  };

  if (type === 'element') {
    type = attributes.tag || _fragment__WEBPACK_IMPORTED_MODULE_0__["default"];
    delete attributes.tag;
  }

  if (typeof type === 'function' && type.render !== undefined) {
    return {
      type,
      attributes,
      children: null
    };
  }

  return {
    type,
    attributes,
    children
  };
}

/***/ }),

/***/ "./node_modules/nullstack/shared/extractLocation.js":
/*!**********************************************************!*\
  !*** ./node_modules/nullstack/shared/extractLocation.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return extractLocation; });
function extractLocation(originalUrl) {
  let [target, hash] = originalUrl.split('#');
  let [path, search] = target.split('?');

  if (path !== '/' && path.endsWith('/')) {
    path = path.substring(0, path.length - 1);
  }

  let url = path;

  if (search) {
    url += '?' + search;
  }

  let urlWithHash = url;

  if (hash) {
    urlWithHash += '#' + hash;
  }

  if (hash === undefined) {
    hash = '';
  }

  return {
    path,
    search,
    url,
    urlWithHash,
    hash
  };
}

/***/ }),

/***/ "./node_modules/nullstack/shared/extractParamValue.js":
/*!************************************************************!*\
  !*** ./node_modules/nullstack/shared/extractParamValue.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return extractParamValue; });
function extractParamValue(value) {
  if (value === 'true') return true;
  if (value === 'false') return false;
  return value ? decodeURIComponent(value.replace(/\+/g, ' ')) : '';
}

/***/ }),

/***/ "./node_modules/nullstack/shared/fragment.js":
/*!***************************************************!*\
  !*** ./node_modules/nullstack/shared/fragment.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return fragment; });
function fragment({
  children
}) {
  return children;
}

/***/ }),

/***/ "./node_modules/nullstack/shared/generateKey.js":
/*!******************************************************!*\
  !*** ./node_modules/nullstack/shared/generateKey.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return generateKey; });
function generateKey(depth) {
  if (depth.length === 1) return 'application';
  return 'n-' + depth.join('-');
}

/***/ }),

/***/ "./node_modules/nullstack/shared/generateTree.js":
/*!*******************************************************!*\
  !*** ./node_modules/nullstack/shared/generateTree.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return generateTree; });
/* harmony import */ var _shared_generateKey__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/generateKey */ "./node_modules/nullstack/shared/generateKey.js");
/* harmony import */ var _shared_nodes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/nodes */ "./node_modules/nullstack/shared/nodes.js");
/* harmony import */ var _plugins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./plugins */ "./node_modules/nullstack/shared/plugins.js");




async function generateBranch(parent, node, depth, scope) {
  Object(_plugins__WEBPACK_IMPORTED_MODULE_2__["transformNodes"])(scope, node, depth);

  if (Object(_shared_nodes__WEBPACK_IMPORTED_MODULE_1__["isFalse"])(node)) {
    parent.children.push(false);
    return;
  }

  if (Object(_shared_nodes__WEBPACK_IMPORTED_MODULE_1__["isClass"])(node)) {
    const key = node.attributes.key || Object(_shared_generateKey__WEBPACK_IMPORTED_MODULE_0__["default"])(depth);

    if (scope.context.environment.client && scope.context.router._changed && node.attributes && node.attributes.route && scope.context.environment.mode !== 'ssg') {
      const routeDepth = depth.slice(0, -1).join('.');
      const newSegments = scope.context.router._newSegments[routeDepth];

      if (newSegments) {
        const oldSegments = scope.context.router._oldSegments[routeDepth];

        for (const segment in newSegments) {
          if (oldSegments[segment] !== newSegments[segment]) {
            delete scope.memory[key];
            delete scope.instances[key];
          }
        }
      }
    }

    const instance = scope.instances[key] || new node.type(scope);
    instance._self.key = key;
    instance._attributes = node.attributes;
    instance._scope = scope;
    let memory;

    if (scope.memory) {
      memory = scope.memory[key];

      if (memory) {
        instance._self.initiated = true;
        Object.assign(instance, memory);
        delete scope.memory[key];
      }
    }

    let shouldHydrate = false;
    const shouldPrepare = scope.instances[key] === undefined;
    scope.instances[key] = instance;

    if (shouldPrepare) {
      if (memory === undefined) {
        instance.prepare && instance.prepare();

        if (scope.context.environment.server) {
          instance.initiate && (await instance.initiate());
          instance._self.initiated = true;
        } else {
          scope.initiationQueue.push(instance);
        }
      }

      shouldHydrate = true;
    }

    if (scope.hydrationQueue) {
      if (shouldHydrate) {
        scope.hydrationQueue.push(instance);
      } else if (instance._self.initiated == true) {
        instance.update && instance.update();
      }
    }

    if (scope.context.environment.client) {
      scope.renewalQueue.push(instance);
    }

    const children = instance.render();

    if (children && children.type) {
      children.instance = instance;
    }

    node.children = [].concat(children);

    for (let i = 0; i < node.children.length; i++) {
      await generateBranch(parent, node.children[i], [...depth, i], scope);
    }

    return;
  }

  if (Object(_shared_nodes__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(node)) {
    const context = node.type.name ? scope.generateContext(node.attributes) : node.attributes;
    const children = node.type(context);
    node.children = [].concat(children);

    for (let i = 0; i < node.children.length; i++) {
      await generateBranch(parent, node.children[i], [...depth, i], scope);
    }

    return;
  }

  if (node.type) {
    const branch = {
      type: node.type,
      attributes: node.attributes || {},
      instance: node.instance,
      children: []
    };

    if (node.children) {
      for (let i = 0; i < node.children.length; i++) {
        await generateBranch(branch, node.children[i], [...depth, i], scope);
      }
    }

    parent.children.push(branch);
    return;
  }

  parent.children.push(node);
}

async function generateTree(node, scope) {
  const tree = {
    type: 'div',
    attributes: {
      id: 'application'
    },
    children: []
  };
  await generateBranch(tree, node, [0], scope);
  return tree;
}

/***/ }),

/***/ "./node_modules/nullstack/shared/getProxyableMethods.js":
/*!**************************************************************!*\
  !*** ./node_modules/nullstack/shared/getProxyableMethods.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getProxyableMethods; });
function getProxyableMethods(target) {
  let properties = new Set();
  let current = target;

  do {
    Object.getOwnPropertyNames(current).map(name => properties.add(name));
  } while ((current = Object.getPrototypeOf(current)) && current != Object.prototype);

  return [...properties.keys()].filter(name => {
    return name !== 'constructor' && typeof target[name] === 'function' && !name.startsWith('_') && !target[name].name.startsWith('_');
  });
}

/***/ }),

/***/ "./node_modules/nullstack/shared/getQueryStringParams.js":
/*!***************************************************************!*\
  !*** ./node_modules/nullstack/shared/getQueryStringParams.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getQueryStringParams; });
/* harmony import */ var _extractParamValue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./extractParamValue */ "./node_modules/nullstack/shared/extractParamValue.js");

function getQueryStringParams(url) {
  const [path, query] = url.split('?');

  if (query) {
    return query.split('&').reduce((params, param) => {
      let [key, value] = param.split('=');
      params[key] = Object(_extractParamValue__WEBPACK_IMPORTED_MODULE_0__["default"])(value);
      return params;
    }, {});
  } else {
    return {};
  }
}
;

/***/ }),

/***/ "./node_modules/nullstack/shared/nodes.js":
/*!************************************************!*\
  !*** ./node_modules/nullstack/shared/nodes.js ***!
  \************************************************/
/*! exports provided: isFalse, isClass, isFunction, isText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFalse", function() { return isFalse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isClass", function() { return isClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return isFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isText", function() { return isText; });
function isFalse(node) {
  if (node === undefined || node === null || node === false) return true;
  if (typeof node !== 'object') return false;
  return node.type === undefined || node.type === null || node.type === false;
}
function isClass(node) {
  return typeof node.type === 'function' && node.type.prototype && typeof node.type.prototype.render === 'function';
}
function isFunction(node) {
  return typeof node.type === 'function';
}
function isText(node) {
  return typeof node.children === 'undefined';
}

/***/ }),

/***/ "./node_modules/nullstack/shared/plugins.js":
/*!**************************************************!*\
  !*** ./node_modules/nullstack/shared/plugins.js ***!
  \**************************************************/
/*! exports provided: transformNodes, loadPlugins, usePlugins */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformNodes", function() { return transformNodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadPlugins", function() { return loadPlugins; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usePlugins", function() { return usePlugins; });
/* harmony import */ var _plugins_routable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../plugins/routable */ "./node_modules/nullstack/plugins/routable.js");
/* harmony import */ var _plugins_bindable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../plugins/bindable */ "./node_modules/nullstack/plugins/bindable.js");
/* harmony import */ var _plugins_datable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../plugins/datable */ "./node_modules/nullstack/plugins/datable.js");
/* harmony import */ var _plugins_parameterizable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../plugins/parameterizable */ "./node_modules/nullstack/plugins/parameterizable.js");
/* harmony import */ var _plugins_anchorable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../plugins/anchorable */ "./node_modules/nullstack/plugins/anchorable.js");
/* harmony import */ var _plugins_objectable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../plugins/objectable */ "./node_modules/nullstack/plugins/objectable.js");






let plugins = [_plugins_objectable__WEBPACK_IMPORTED_MODULE_5__["default"], _plugins_parameterizable__WEBPACK_IMPORTED_MODULE_3__["default"], _plugins_anchorable__WEBPACK_IMPORTED_MODULE_4__["default"], _plugins_routable__WEBPACK_IMPORTED_MODULE_0__["default"], _plugins_datable__WEBPACK_IMPORTED_MODULE_2__["default"], _plugins_bindable__WEBPACK_IMPORTED_MODULE_1__["default"]];
function transformNodes(scope, node, depth) {
  for (const plugin of plugins) {
    plugin.transform({ ...scope.context,
      node,
      depth
    });
  }
}
function loadPlugins(scope) {
  for (const plugin of plugins) {
    plugin.load && plugin.load(scope.context);
  }

  return plugins;
}
function usePlugins(environment) {
  return async (...userPlugins) => {
    plugins = [...new Set([...userPlugins.flat(), ...plugins])].filter(plugin => plugin[environment]);
  };
}

/***/ }),

/***/ "./node_modules/nullstack/shared/prefix.js":
/*!*************************************************!*\
  !*** ./node_modules/nullstack/shared/prefix.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const prefix = 'nullstack';
/* harmony default export */ __webpack_exports__["default"] = (prefix);

/***/ }),

/***/ "./node_modules/nullstack/shared/routeMatches.js":
/*!*******************************************************!*\
  !*** ./node_modules/nullstack/shared/routeMatches.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return routeMatches; });
/* harmony import */ var _shared_extractLocation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/extractLocation */ "./node_modules/nullstack/shared/extractLocation.js");
/* harmony import */ var _extractParamValue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extractParamValue */ "./node_modules/nullstack/shared/extractParamValue.js");


function routeMatches(url, route) {
  let {
    path
  } = Object(_shared_extractLocation__WEBPACK_IMPORTED_MODULE_0__["default"])(url);
  const urlPaths = path.split('/');
  const routePaths = route.split('/');
  const params = {};
  const length = Math.max(urlPaths.length, routePaths.length);
  let catchall = false;

  for (let i = 0; i < length; i++) {
    if (catchall) {
      continue;
    } else if (routePaths[i] === '*') {
      catchall = true;
    } else if (routePaths[i] && routePaths[i].startsWith(':')) {
      const key = routePaths[i].replace(':', '');
      params[key] = Object(_extractParamValue__WEBPACK_IMPORTED_MODULE_1__["default"])(urlPaths[i]);
    } else if (routePaths[i] !== urlPaths[i]) {
      return false;
    }
  }

  return params;
}

/***/ }),

/***/ "./node_modules/nullstack/shared/serializeParam.js":
/*!*********************************************************!*\
  !*** ./node_modules/nullstack/shared/serializeParam.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return serializeParam; });
function serializeParam(value) {
  return value && value.toJSON !== undefined ? value.toJSON() : value;
}

/***/ }),

/***/ "./node_modules/nullstack/shared/serializeSearch.js":
/*!**********************************************************!*\
  !*** ./node_modules/nullstack/shared/serializeSearch.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return serializeSearch; });
function serializeSearch(params) {
  const keys = Object.keys(params);
  return keys.map(key => {
    if (params[key] === false || !!params[key]) {
      return `${key}=${params[key]}`;
    } else {
      return '';
    }
  }).filter(segment => !!segment).join('&');
}

/***/ }),

/***/ "./node_modules/nullstack/shared/string.js":
/*!*************************************************!*\
  !*** ./node_modules/nullstack/shared/string.js ***!
  \*************************************************/
/*! exports provided: camelize, kebabize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "camelize", function() { return camelize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "kebabize", function() { return kebabize; });
function camelize(key) {
  return key.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
}
function kebabize(key) {
  return key.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();
}
;

/***/ }),

/***/ "./src/Application.njs":
/*!*****************************!*\
  !*** ./src/Application.njs ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var nullstack__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nullstack */ "./node_modules/nullstack/nullstack.js");
/* harmony import */ var _Application_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Application.scss */ "./src/Application.scss");
/* harmony import */ var _Application_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Application_scss__WEBPACK_IMPORTED_MODULE_1__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


 // const prisma = new PrismaClient()

class Application extends nullstack__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "users", []);

    _defineProperty(this, "getUsers", nullstack__WEBPACK_IMPORTED_MODULE_0__["default"].invoke('getUsers', '88a60d83719ba2ee5cd324e36315684f'));
  }

  prepare({
    page
  }) {
    page.locale = 'pt-BR';
  }

  async hydrate() {
    this.users = await this.getUsers();
  }

  renderHead() {
    return nullstack__WEBPACK_IMPORTED_MODULE_0__["default"].element("head", null);
  }

  render() {
    const Head = this.renderHead;
    return nullstack__WEBPACK_IMPORTED_MODULE_0__["default"].element("main", null, nullstack__WEBPACK_IMPORTED_MODULE_0__["default"].element(Head, null), this.users);
  }

}

_defineProperty(Application, "hash", '88a60d83719ba2ee5cd324e36315684f');

/* harmony default export */ __webpack_exports__["default"] = (Application);

/***/ }),

/***/ "./src/Application.scss":
/*!******************************!*\
  !*** ./src/Application.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy8uL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9udWxsc3RhY2svY2xpZW50L2FuY2hvcmFibGVOb2RlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9udWxsc3RhY2svY2xpZW50L2NsaWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbnVsbHN0YWNrL2NsaWVudC9jb250ZXh0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9udWxsc3RhY2svY2xpZW50L2Vudmlyb25tZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9udWxsc3RhY2svY2xpZW50L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9udWxsc3RhY2svY2xpZW50L2luc3RhbmNlUHJveHlIYW5kbGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9udWxsc3RhY2svY2xpZW50L2ludm9rZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbnVsbHN0YWNrL2NsaWVudC9saXZlUmVsb2FkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9udWxsc3RhY2svY2xpZW50L29iamVjdFByb3h5SGFuZGxlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbnVsbHN0YWNrL2NsaWVudC9wYWdlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9udWxsc3RhY2svY2xpZW50L3BhcmFtcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbnVsbHN0YWNrL2NsaWVudC9wcm9qZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9udWxsc3RhY2svY2xpZW50L3JlbmRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbnVsbHN0YWNrL2NsaWVudC9yZXJlbmRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbnVsbHN0YWNrL2NsaWVudC9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL251bGxzdGFjay9jbGllbnQvc2VnbWVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL251bGxzdGFjay9jbGllbnQvc2V0dGluZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL251bGxzdGFjay9jbGllbnQvd2luZG93RXZlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL251bGxzdGFjay9jbGllbnQvd29ya2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9udWxsc3RhY2svbnVsbHN0YWNrLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9udWxsc3RhY2svcGx1Z2lucy9hbmNob3JhYmxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9udWxsc3RhY2svcGx1Z2lucy9iaW5kYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbnVsbHN0YWNrL3BsdWdpbnMvZGF0YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbnVsbHN0YWNrL3BsdWdpbnMvb2JqZWN0YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbnVsbHN0YWNrL3BsdWdpbnMvcGFyYW1ldGVyaXphYmxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9udWxsc3RhY2svcGx1Z2lucy9yb3V0YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbnVsbHN0YWNrL3NoYXJlZC9kZXNlcmlhbGl6ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbnVsbHN0YWNrL3NoYXJlZC9lbGVtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9udWxsc3RhY2svc2hhcmVkL2V4dHJhY3RMb2NhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbnVsbHN0YWNrL3NoYXJlZC9leHRyYWN0UGFyYW1WYWx1ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbnVsbHN0YWNrL3NoYXJlZC9mcmFnbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbnVsbHN0YWNrL3NoYXJlZC9nZW5lcmF0ZUtleS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbnVsbHN0YWNrL3NoYXJlZC9nZW5lcmF0ZVRyZWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL251bGxzdGFjay9zaGFyZWQvZ2V0UHJveHlhYmxlTWV0aG9kcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbnVsbHN0YWNrL3NoYXJlZC9nZXRRdWVyeVN0cmluZ1BhcmFtcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbnVsbHN0YWNrL3NoYXJlZC9ub2Rlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbnVsbHN0YWNrL3NoYXJlZC9wbHVnaW5zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9udWxsc3RhY2svc2hhcmVkL3ByZWZpeC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbnVsbHN0YWNrL3NoYXJlZC9yb3V0ZU1hdGNoZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL251bGxzdGFjay9zaGFyZWQvc2VyaWFsaXplUGFyYW0uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL251bGxzdGFjay9zaGFyZWQvc2VyaWFsaXplU2VhcmNoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9udWxsc3RhY2svc2hhcmVkL3N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQXBwbGljYXRpb24ubmpzIiwid2VicGFjazovLy8uL3NyYy9BcHBsaWNhdGlvbi5zY3NzPzhjZWYiXSwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBOdWxsc3RhY2sgZnJvbSAnbnVsbHN0YWNrJztcbmltcG9ydCBBcHBsaWNhdGlvbiBmcm9tICcuL3NyYy9BcHBsaWNhdGlvbic7XG5cbmV4cG9ydCBkZWZhdWx0IE51bGxzdGFjay5zdGFydChBcHBsaWNhdGlvbik7IiwiaW1wb3J0IHJvdXRlciBmcm9tICcuL3JvdXRlcic7XG5cbmV4cG9ydCBmdW5jdGlvbiBhbmNob3JhYmxlRWxlbWVudChlbGVtZW50KSB7XG4gIGNvbnN0IGxpbmtzID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdhW2hyZWZePVwiL1wiXTpub3QoW3RhcmdldF0pJyk7XG4gIGZvcihjb25zdCBsaW5rIG9mIGxpbmtzKSB7XG4gICAgbGluay5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgcm91dGVyLnVybCA9IGxpbmsuZ2V0QXR0cmlidXRlKCdocmVmJyk7XG4gICAgfTtcbiAgfVxufSIsImltcG9ydCByb3V0ZXIgZnJvbSAnLi9yb3V0ZXInO1xuaW1wb3J0IHJlcmVuZGVyIGZyb20gJy4vcmVyZW5kZXInO1xuaW1wb3J0IGNvbnRleHQsIHsgZ2VuZXJhdGVDb250ZXh0IH0gZnJvbSAnLi9jb250ZXh0JztcblxuaW1wb3J0IGdlbmVyYXRlVHJlZSBmcm9tICcuLi9zaGFyZWQvZ2VuZXJhdGVUcmVlJztcbmltcG9ydCB7IGxvYWRQbHVnaW5zIH0gZnJvbSAnLi4vc2hhcmVkL3BsdWdpbnMnO1xuXG5jb25zdCBjbGllbnQgPSB7fTtcblxuY2xpZW50LmluaXRpYWxpemVkID0gZmFsc2U7XG5jbGllbnQuaHlkcmF0ZWQgPSBmYWxzZTtcbmNsaWVudC5pbml0aWFsaXplciA9IG51bGw7XG5cbmNsaWVudC5pbnN0YW5jZXMgPSB7fTtcbmNvbnRleHQuaW5zdGFuY2VzID0gY2xpZW50Lmluc3RhbmNlcztcbmNsaWVudC5pbml0aWF0aW9uUXVldWUgPSBbXTtcbmNsaWVudC5yZW5ld2FsUXVldWUgPSBbXTtcbmNsaWVudC5oeWRyYXRpb25RdWV1ZSA9IFtdO1xuY2xpZW50LnZpcnR1YWxEb20gPSB7fTtcbmNsaWVudC5zZWxlY3RvciA9IG51bGw7XG5jbGllbnQuZXZlbnRzID0ge307XG5jbGllbnQuZ2VuZXJhdGVDb250ZXh0ID0gZ2VuZXJhdGVDb250ZXh0O1xuXG5jbGllbnQucmVuZGVyUXVldWUgPSBudWxsO1xuXG5jbGllbnQudXBkYXRlID0gYXN5bmMgZnVuY3Rpb24oKSB7XG4gIGlmKGNsaWVudC5pbml0aWFsaXplZCkge1xuICAgIGNsZWFySW50ZXJ2YWwoY2xpZW50LnJlbmRlclF1ZXVlKTtcbiAgICBjbGllbnQucmVuZGVyUXVldWUgPSBzZXRUaW1lb3V0KGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IHNjb3BlID0gY2xpZW50O1xuICAgICAgc2NvcGUuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgICBzY29wZS5wbHVnaW5zID0gbG9hZFBsdWdpbnMoc2NvcGUpO1xuICAgICAgY2xpZW50LmluaXRpYWxpemVkID0gZmFsc2U7XG4gICAgICBjbGllbnQuaW5pdGlhdGlvblF1ZXVlID0gW107XG4gICAgICBjbGllbnQucmVuZXdhbFF1ZXVlID0gW107XG4gICAgICBjbGllbnQuaHlkcmF0aW9uUXVldWUgPSBbXTtcbiAgICAgIGNsaWVudC5uZXh0VmlydHVhbERvbSA9IGF3YWl0IGdlbmVyYXRlVHJlZShjbGllbnQuaW5pdGlhbGl6ZXIoKSwgc2NvcGUpO1xuICAgICAgcmVyZW5kZXIoY2xpZW50LnNlbGVjdG9yKTtcbiAgICAgIGNsaWVudC52aXJ0dWFsRG9tID0gY2xpZW50Lm5leHRWaXJ0dWFsRG9tO1xuICAgICAgY2xpZW50Lm5leHRWaXJ0dWFsRG9tID0gbnVsbDtcbiAgICAgIGNsaWVudC5wcm9jZXNzTGlmZWN5Y2xlUXVldWVzKCk7XG4gICAgfSwgMTYpO1xuICB9XG59XG5cbmNsaWVudC5wcm9jZXNzTGlmZWN5Y2xlUXVldWVzID0gYXN5bmMgZnVuY3Rpb24oKSB7XG4gIGlmKCFjbGllbnQuaW5pdGlhbGl6ZWQpIHtcbiAgICBjbGllbnQuaW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgIGNsaWVudC5oeWRyYXRlZCA9IHRydWU7XG4gIH1cbiAgY29uc3QgaW5pdGlhdGlvblF1ZXVlID0gY2xpZW50LmluaXRpYXRpb25RdWV1ZTtcbiAgY29uc3QgaHlkcmF0aW9uUXVldWUgPSBjbGllbnQuaHlkcmF0aW9uUXVldWU7XG4gIGZvcihjb25zdCBpbnN0YW5jZSBvZiBpbml0aWF0aW9uUXVldWUpIHtcbiAgICBpbnN0YW5jZS5pbml0aWF0ZSAmJiBhd2FpdCBpbnN0YW5jZS5pbml0aWF0ZSgpO1xuICAgIGluc3RhbmNlLl9zZWxmLmluaXRpYXRlZCA9IHRydWU7XG4gIH1cbiAgaWYoaW5pdGlhdGlvblF1ZXVlLmxlbmd0aCkge1xuICAgIGNsaWVudC51cGRhdGUoKTtcbiAgfVxuICBmb3IoY29uc3QgaW5zdGFuY2Ugb2YgaHlkcmF0aW9uUXVldWUpIHtcbiAgICBpbnN0YW5jZS5oeWRyYXRlICYmIGF3YWl0IGluc3RhbmNlLmh5ZHJhdGUoKTtcbiAgICBpbnN0YW5jZS5fc2VsZi5oeWRyYXRlZCA9IHRydWU7XG4gIH1cbiAgaWYoaHlkcmF0aW9uUXVldWUubGVuZ3RoKSB7XG4gICAgY2xpZW50LnVwZGF0ZSgpO1xuICB9XG4gIGZvcihjb25zdCBrZXkgaW4gY2xpZW50Lmluc3RhbmNlcykge1xuICAgIGNvbnN0IGluc3RhbmNlID0gY2xpZW50Lmluc3RhbmNlc1trZXldO1xuICAgIGlmKCFjbGllbnQucmVuZXdhbFF1ZXVlLmluY2x1ZGVzKGluc3RhbmNlKSkge1xuICAgICAgaW5zdGFuY2UudGVybWluYXRlICYmIGF3YWl0IGluc3RhbmNlLnRlcm1pbmF0ZSgpO1xuICAgICAgZGVsZXRlIGNsaWVudC5pbnN0YW5jZXNba2V5XTtcbiAgICB9XG4gIH1cbiAgcm91dGVyLl9jaGFuZ2VkID0gZmFsc2U7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsaWVudDsiLCJpbXBvcnQgY2xpZW50IGZyb20gJy4vY2xpZW50JztcbmltcG9ydCBkZXNlcmlhbGl6ZSBmcm9tICcuLi9zaGFyZWQvZGVzZXJpYWxpemUnO1xuaW1wb3J0IHtnZW5lcmF0ZU9iamVjdFByb3h5fSBmcm9tICcuL29iamVjdFByb3h5SGFuZGxlcic7XG5cbmNvbnN0IGNvbnRleHQgPSB7fTtcblxuY29uc3QgbWVtb3J5ID0gZGVzZXJpYWxpemUoSlNPTi5zdHJpbmdpZnkod2luZG93LmNvbnRleHQpKTtcbmZvcihjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMobWVtb3J5KSkge1xuICBjb250ZXh0W2tleV0gPSBnZW5lcmF0ZU9iamVjdFByb3h5KGtleSwgbWVtb3J5W2tleV0pO1xufVxuXG5jb25zdCBjb250ZXh0UHJveHlIYW5kbGVyID0ge1xuICBzZXQodGFyZ2V0LCBuYW1lLCB2YWx1ZSkge1xuICAgIGNvbnRleHRbbmFtZV0gPSBnZW5lcmF0ZU9iamVjdFByb3h5KG5hbWUsIHZhbHVlKTtcbiAgICBjbGllbnQudXBkYXRlKCk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0sXG4gIGdldCh0YXJnZXQsIG5hbWUpIHtcbiAgICBpZihuYW1lID09PSAnX2lzUHJveHknKSByZXR1cm4gdHJ1ZTtcbiAgICByZXR1cm4gdGFyZ2V0W25hbWVdID09PSB1bmRlZmluZWQgPyBjb250ZXh0W25hbWVdIDogdGFyZ2V0W25hbWVdO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZUNvbnRleHQodGVtcG9yYXJ5KSB7XG4gIHJldHVybiBuZXcgUHJveHkodGVtcG9yYXJ5LCBjb250ZXh0UHJveHlIYW5kbGVyKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29udGV4dDsiLCJjb25zdCBlbnZpcm9ubWVudCA9IHsuLi53aW5kb3cuZW52aXJvbm1lbnQsIGNsaWVudDogdHJ1ZSwgc2VydmVyOiBmYWxzZX07XG4vL2RlbGV0ZSB3aW5kb3cuZW52aXJvbm1lbnQ7XG5cbk9iamVjdC5mcmVlemUoZW52aXJvbm1lbnQpO1xuXG5leHBvcnQgZGVmYXVsdCBlbnZpcm9ubWVudDsiLCJpbXBvcnQgZGVzZXJpYWxpemUgZnJvbSAnLi4vc2hhcmVkL2Rlc2VyaWFsaXplJztcbmltcG9ydCBlbGVtZW50IGZyb20gJy4uL3NoYXJlZC9lbGVtZW50JztcbmltcG9ydCByb3V0ZXIgZnJvbSAnLi9yb3V0ZXInO1xuaW1wb3J0IGNsaWVudCBmcm9tICcuL2NsaWVudCc7XG5pbXBvcnQgY29udGV4dCwgeyBnZW5lcmF0ZUNvbnRleHQgfSBmcm9tICcuL2NvbnRleHQnO1xuaW1wb3J0IHJlcmVuZGVyIGZyb20gJy4vcmVyZW5kZXInO1xuaW1wb3J0IHJlbmRlciBmcm9tICcuL3JlbmRlcic7XG5pbXBvcnQgaW5zdGFuY2VQcm94eUhhbmRsZXIgZnJvbSAnLi9pbnN0YW5jZVByb3h5SGFuZGxlcic7XG5pbXBvcnQgcGFnZSBmcm9tICcuL3BhZ2UnO1xuaW1wb3J0IGVudmlyb25tZW50IGZyb20gJy4vZW52aXJvbm1lbnQnO1xuaW1wb3J0IHBhcmFtcywge3VwZGF0ZVBhcmFtc30gZnJvbSAnLi9wYXJhbXMnO1xuaW1wb3J0IHNldHRpbmdzIGZyb20gJy4vc2V0dGluZ3MnO1xuaW1wb3J0IHdvcmtlciBmcm9tICcuL3dvcmtlcic7XG5pbXBvcnQgcHJvamVjdCBmcm9tICcuL3Byb2plY3QnO1xuaW1wb3J0IGludm9rZSBmcm9tICcuL2ludm9rZSc7XG5pbXBvcnQgZ2V0UHJveHlhYmxlTWV0aG9kcyBmcm9tICcuLi9zaGFyZWQvZ2V0UHJveHlhYmxlTWV0aG9kcyc7XG5pbXBvcnQgZnJhZ21lbnQgZnJvbSAnLi4vc2hhcmVkL2ZyYWdtZW50JztcblxuaW1wb3J0IGdlbmVyYXRlVHJlZSBmcm9tICcuLi9zaGFyZWQvZ2VuZXJhdGVUcmVlJztcbmltcG9ydCB7IGxvYWRQbHVnaW5zLCB1c2VQbHVnaW5zIH0gZnJvbSAnLi4vc2hhcmVkL3BsdWdpbnMnO1xuXG5pbXBvcnQgJy4vbGl2ZVJlbG9hZCc7XG5cbmNvbnRleHQucGFnZSA9IHBhZ2U7XG5jb250ZXh0LnJvdXRlciA9IHJvdXRlcjtcbmNvbnRleHQuc2V0dGluZ3MgPSBzZXR0aW5ncztcbmNvbnRleHQud29ya2VyID0gd29ya2VyO1xuY29udGV4dC5wYXJhbXMgPSBwYXJhbXM7XG5jb250ZXh0LnByb2plY3QgPSBwcm9qZWN0O1xuY29udGV4dC5lbnZpcm9ubWVudCA9IHdpbmRvdy5lbnZpcm9ubWVudDtcblxuY2xpZW50Lm1lbW9yeSA9IGRlc2VyaWFsaXplKEpTT04uc3RyaW5naWZ5KHdpbmRvdy5pbnN0YW5jZXMpKTtcblxuY29uc3Qgc2NvcGUgPSBjbGllbnQ7XG5zY29wZS5nZW5lcmF0ZUNvbnRleHQgPSBnZW5lcmF0ZUNvbnRleHQ7XG5zY29wZS5jb250ZXh0ID0gY29udGV4dDtcblxuY2xpZW50LnBsdWdpbnMgPSBsb2FkUGx1Z2lucyhzY29wZSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE51bGxzdGFjayB7XG5cbiAgc3RhdGljIGVsZW1lbnQgPSBlbGVtZW50O1xuICBzdGF0aWMgaW52b2tlID0gaW52b2tlO1xuICBzdGF0aWMgZnJhZ21lbnQgPSBmcmFnbWVudDtcbiAgc3RhdGljIHVzZSA9IHVzZVBsdWdpbnMoJ2NsaWVudCcpO1xuXG4gIHN0YXRpYyBhc3luYyBzdGFydChTdGFydGVyKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgKCkgPT4ge1xuICAgICAgcm91dGVyLl9wb3BTdGF0ZSgpO1xuICAgIH0pO1xuICAgIGNsaWVudC5yb3V0ZXMgPSB7fTtcbiAgICB1cGRhdGVQYXJhbXMocm91dGVyLnVybCk7XG4gICAgY2xpZW50LmN1cnJlbnRJbnN0YW5jZSA9IG51bGw7XG4gICAgY2xpZW50LmluaXRpYWxpemVyID0gKCkgPT4gZWxlbWVudChTdGFydGVyKTtcbiAgICBjbGllbnQuc2VsZWN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXBwbGljYXRpb24nKTtcbiAgICBpZihlbnZpcm9ubWVudC5tb2RlID09PSAnc3BhJykge1xuICAgICAgc2NvcGUucGx1Z2lucyA9IGxvYWRQbHVnaW5zKHNjb3BlKTtcbiAgICAgIGNvbnRleHQuZW52aXJvbm1lbnQgPSBlbnZpcm9ubWVudDtcbiAgICAgIGNsaWVudC52aXJ0dWFsRG9tID0gYXdhaXQgZ2VuZXJhdGVUcmVlKGNsaWVudC5pbml0aWFsaXplcigpLCBzY29wZSk7XG4gICAgICBjb25zdCBib2R5ID0gcmVuZGVyKGNsaWVudC52aXJ0dWFsRG9tKTtcbiAgICAgIGNsaWVudC5zZWxlY3Rvci5yZXBsYWNlV2l0aChib2R5KTtcbiAgICAgIGNsaWVudC5zZWxlY3RvciA9IGJvZHlcbiAgICB9IGVsc2Uge1xuICAgICAgY2xpZW50LnZpcnR1YWxEb20gPSBhd2FpdCBnZW5lcmF0ZVRyZWUoY2xpZW50LmluaXRpYWxpemVyKCksIHNjb3BlKTtcbiAgICAgIGNvbnRleHQuZW52aXJvbm1lbnQgPSBlbnZpcm9ubWVudDtcbiAgICAgIHNjb3BlLnBsdWdpbnMgPSBsb2FkUGx1Z2lucyhzY29wZSk7XG4gICAgICBjbGllbnQubmV4dFZpcnR1YWxEb20gPSBhd2FpdCBnZW5lcmF0ZVRyZWUoY2xpZW50LmluaXRpYWxpemVyKCksIHNjb3BlKTtcbiAgICAgIHJlcmVuZGVyKGNsaWVudC5zZWxlY3Rvcik7XG4gICAgICBjbGllbnQudmlydHVhbERvbSA9IGNsaWVudC5uZXh0VmlydHVhbERvbTtcbiAgICAgIGNsaWVudC5uZXh0VmlydHVhbERvbSA9IG51bGw7XG4gICAgfVxuICAgIGNsaWVudC5wcm9jZXNzTGlmZWN5Y2xlUXVldWVzKCk7XG4gICAgZGVsZXRlIHdpbmRvdy5jb250ZXh0O1xuICB9XG5cbiAgX3NlbGYgPSB7XG4gICAgcHJlcmVuZGVyZWQ6IGZhbHNlLFxuICAgIGluaXRpYXRlZDogZmFsc2UsXG4gICAgaHlkcmF0ZWQ6IGZhbHNlXG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBtZXRob2RzID0gZ2V0UHJveHlhYmxlTWV0aG9kcyh0aGlzKTtcbiAgICBjb25zdCBwcm94eSA9IG5ldyBQcm94eSh0aGlzLCBpbnN0YW5jZVByb3h5SGFuZGxlcik7XG4gICAgZm9yKGNvbnN0IG1ldGhvZCBvZiBtZXRob2RzKSB7XG4gICAgICB0aGlzW21ldGhvZF0gPSB0aGlzW21ldGhvZF0uYmluZChwcm94eSk7XG4gICAgfVxuICAgIHJldHVybiBwcm94eTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxufSIsImltcG9ydCB7IGdlbmVyYXRlT2JqZWN0UHJveHkgfSBmcm9tICcuL29iamVjdFByb3h5SGFuZGxlcic7XG5pbXBvcnQgY2xpZW50IGZyb20gJy4vY2xpZW50JztcbmltcG9ydCB7Z2VuZXJhdGVDb250ZXh0fSBmcm9tICcuL2NvbnRleHQnO1xuXG5jb25zdCBpbnN0YW5jZVByb3h5SGFuZGxlciA9IHtcbiAgZ2V0KHRhcmdldCwgbmFtZSkge1xuICAgIGlmKG5hbWUgPT09ICdfaXNQcm94eScpIHJldHVybiB0cnVlO1xuICAgIGlmKHR5cGVvZih0YXJnZXRbbmFtZV0pID09ICdmdW5jdGlvbicgJiYgIXRhcmdldFtuYW1lXS5uYW1lLnN0YXJ0c1dpdGgoJ18nKSAmJiBuYW1lICE9PSAnY29uc3RydWN0b3InKSB7XG4gICAgICByZXR1cm4gKGFyZ3MpID0+IHtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IGdlbmVyYXRlQ29udGV4dCh7Li4udGFyZ2V0Ll9hdHRyaWJ1dGVzLCAuLi5hcmdzLCBzZWxmOiB0YXJnZXQuX3NlbGZ9KTtcbiAgICAgICAgcmV0dXJuIHRhcmdldFtuYW1lXShjb250ZXh0KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIFJlZmxlY3QuZ2V0KC4uLmFyZ3VtZW50cyk7XG4gIH0sXG4gIHNldCh0YXJnZXQsIG5hbWUsIHZhbHVlKSB7XG4gICAgdGFyZ2V0W25hbWVdID0gZ2VuZXJhdGVPYmplY3RQcm94eShuYW1lLCB2YWx1ZSk7XG4gICAgaWYoIW5hbWUuc3RhcnRzV2l0aCgnXycpKSB7XG4gICAgICBjbGllbnQudXBkYXRlKCk7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGluc3RhbmNlUHJveHlIYW5kbGVyOyIsImltcG9ydCBkZXNlcmlhbGl6ZSBmcm9tICcuLi9zaGFyZWQvZGVzZXJpYWxpemUnO1xuaW1wb3J0IHdvcmtlciBmcm9tICcuL3dvcmtlcic7XG5pbXBvcnQgcHJlZml4IGZyb20gJy4uL3NoYXJlZC9wcmVmaXgnO1xuaW1wb3J0IHBhZ2UgZnJvbSAnLi9wYWdlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW52b2tlKG5hbWUsIGhhc2gpIHtcbiAgcmV0dXJuIGFzeW5jIGZ1bmN0aW9uIF9pbnZva2UocGFyYW1zID0ge30pIHtcbiAgICBsZXQgcGF5bG9hZDtcbiAgICB3b3JrZXIuZmV0Y2hpbmcgPSB0cnVlO1xuICAgIGlmKE9iamVjdC5pc0Zyb3plbih3b3JrZXIucXVldWVzW25hbWVdKSkge1xuICAgICAgd29ya2VyLnF1ZXVlc1tuYW1lXSA9IFtwYXJhbXNdO1xuICAgIH0gZWxzZSB7XG4gICAgICB3b3JrZXIucXVldWVzW25hbWVdID0gWy4uLndvcmtlci5xdWV1ZXNbbmFtZV0sIHBhcmFtc107XG4gICAgfVxuICAgIGNvbnN0IGZpbmFsSGFzaCA9IGhhc2ggPT09IHRoaXMuY29uc3RydWN0b3IuaGFzaCA/IGhhc2ggOiBgJHtoYXNofS0ke3RoaXMuY29uc3RydWN0b3IuaGFzaH1gO1xuICAgIGxldCB1cmwgPSBgJHt3b3JrZXIuYXBpfS8ke3ByZWZpeH0vJHtmaW5hbEhhc2h9LyR7bmFtZX0uanNvbmA7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB3b3JrZXIuaGVhZGVycyxcbiAgICAgICAgbW9kZTogJ2NvcnMnLFxuICAgICAgICBjYWNoZTogJ25vLWNhY2hlJyxcbiAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gICAgICAgIHJlZGlyZWN0OiAnZm9sbG93JyxcbiAgICAgICAgcmVmZXJyZXJQb2xpY3k6ICduby1yZWZlcnJlcicsXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBhcmFtcyB8fCB7fSlcbiAgICAgIH0pO1xuICAgICAgcGFnZS5zdGF0dXMgPSByZXNwb25zZS5zdGF0dXM7XG4gICAgICBjb25zdCB0ZXh0ID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xuICAgICAgcGF5bG9hZCA9IGRlc2VyaWFsaXplKHRleHQpLnJlc3VsdDtcbiAgICAgIHdvcmtlci5yZXNwb25zaXZlID0gdHJ1ZTtcbiAgICB9IGNhdGNoKGUpIHtcbiAgICAgIHdvcmtlci5yZXNwb25zaXZlID0gZmFsc2U7XG4gICAgfVxuICAgIGlmKHdvcmtlci5xdWV1ZXNbbmFtZV0/Lmxlbmd0aCA9PT0gMSkge1xuICAgICAgZGVsZXRlIHdvcmtlci5xdWV1ZXNbbmFtZV07XG4gICAgfSBlbHNlIHtcbiAgICAgIHdvcmtlci5xdWV1ZXNbbmFtZV0gPSB3b3JrZXIucXVldWVzW25hbWVdLmZpbHRlcigodGFzaykgPT4gdGFzayAhPT0gcGFyYW1zKTtcbiAgICB9XG4gICAgd29ya2VyLmZldGNoaW5nID0gISFPYmplY3Qua2V5cyh3b3JrZXIucXVldWVzKS5sZW5ndGg7XG4gICAgcmV0dXJuIHBheWxvYWQ7XG4gIH1cbn0iLCJsZXQgc2hvdWxkUmVsb2FkTmV4dCA9IGZhbHNlO1xubGV0IHRpbWVyID0gbnVsbDtcblxuZnVuY3Rpb24gcmVsb2FkKCkge1xuICBpZihzaG91bGRSZWxvYWROZXh0KSB7XG4gICAgY2xlYXJJbnRlcnZhbCh0aW1lcik7XG4gICAgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH0sIDEwKVxuICB9IGVsc2Uge1xuICAgIHNob3VsZFJlbG9hZE5leHQgPSB0cnVlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGxpdmVSZWxvYWQoKSB7XG4gIGNvbnN0IHNvY2tldCA9IG5ldyBXZWJTb2NrZXQoJ3dzOi8vJyArIGxvY2F0aW9uLmhvc3QpO1xuICBzb2NrZXQuYWRkRXZlbnRMaXN0ZW5lcignb3BlbicsIHJlbG9hZCk7XG4gIHNvY2tldC5hZGRFdmVudExpc3RlbmVyKCdjbG9zZScsIGxpdmVSZWxvYWQpO1xufVxuXG5saXZlUmVsb2FkKCk7IiwiaW1wb3J0IGNsaWVudCBmcm9tICcuL2NsaWVudCc7XG5cbmNvbnN0IG9iamVjdFByb3h5SGFuZGxlciA9IHtcbiAgc2V0KHRhcmdldCwgbmFtZSwgdmFsdWUpIHtcbiAgICBpZihpc1Byb3h5YWJsZShuYW1lLCB2YWx1ZSkpIHtcbiAgICAgIHZhbHVlLl9pc1Byb3h5ID0gdHJ1ZTtcbiAgICAgIHRhcmdldFtuYW1lXSA9IG5ldyBQcm94eSh2YWx1ZSwgdGhpcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRhcmdldFtuYW1lXSA9IHZhbHVlO1xuICAgIH1cbiAgICBpZighbmFtZS5zdGFydHNXaXRoKCdfJykpIHtcbiAgICAgIGNsaWVudC51cGRhdGUoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH0sXG4gIGdldCh0YXJnZXQsIG5hbWUpIHtcbiAgICBpZihuYW1lID09PSAnX2lzUHJveHknKSByZXR1cm4gdHJ1ZTtcbiAgICByZXR1cm4gUmVmbGVjdC5nZXQoLi4uYXJndW1lbnRzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpc1Byb3h5YWJsZShuYW1lLCB2YWx1ZSkge1xuICByZXR1cm4gKFxuICAgICFuYW1lLnN0YXJ0c1dpdGgoJ18nKSAmJiBcbiAgICB2YWx1ZSAhPT0gbnVsbCAmJiBcbiAgICB0eXBlb2YodmFsdWUpID09PSAnb2JqZWN0JyAmJiBcbiAgICB2YWx1ZS5faXNQcm94eSA9PT0gdW5kZWZpbmVkICYmIFxuICAgICEodmFsdWUgaW5zdGFuY2VvZiBEYXRlKVxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVPYmplY3RQcm94eShuYW1lLCB2YWx1ZSkge1xuICBpZihpc1Byb3h5YWJsZShuYW1lLCB2YWx1ZSkpIHtcbiAgICBpZih0eXBlb2YodmFsdWUpID09PSAnb2JqZWN0Jykge1xuICAgICAgZm9yKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyh2YWx1ZSkpIHtcbiAgICAgICAgdmFsdWVba2V5XSA9IGdlbmVyYXRlT2JqZWN0UHJveHkoa2V5LCB2YWx1ZVtrZXldKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5ldyBQcm94eSh2YWx1ZSwgb2JqZWN0UHJveHlIYW5kbGVyKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgb2JqZWN0UHJveHlIYW5kbGVyOyIsImltcG9ydCBjbGllbnQgZnJvbSAnLi9jbGllbnQnO1xuaW1wb3J0IHdpbmRvd0V2ZW50IGZyb20gJy4vd2luZG93RXZlbnQnO1xuXG5jb25zdCBwYWdlID0ge1xuICAuLi53aW5kb3cucGFnZSxcbiAgZXZlbnQ6ICdudWxsc3RhY2sucGFnZSdcbn1cblxuZGVsZXRlIHdpbmRvdy5wYWdlO1xuXG5jb25zdCBwYWdlUHJveHlIYW5kbGVyID0ge1xuICBzZXQodGFyZ2V0LCBuYW1lLCB2YWx1ZSkge1xuICAgIGlmKG5hbWUgPT09ICd0aXRsZScpIHtcbiAgICAgIGRvY3VtZW50LnRpdGxlID0gdmFsdWU7XG4gICAgfVxuICAgIGNvbnN0IHJlc3VsdCA9IFJlZmxlY3Quc2V0KC4uLmFyZ3VtZW50cyk7XG4gICAgaWYobmFtZSA9PT0gJ3RpdGxlJykge1xuICAgICAgd2luZG93RXZlbnQoJ3BhZ2UnKTtcbiAgICB9XG4gICAgY2xpZW50LnVwZGF0ZSgpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn1cblxuY29uc3QgcHJveHkgPSBuZXcgUHJveHkocGFnZSwgcGFnZVByb3h5SGFuZGxlcik7XG5cbmV4cG9ydCBkZWZhdWx0IHByb3h5OyIsImltcG9ydCByb3V0ZXIgZnJvbSAnLi9yb3V0ZXInO1xuaW1wb3J0IGdldFF1ZXJ5U3RyaW5nUGFyYW1zIGZyb20gJy4uL3NoYXJlZC9nZXRRdWVyeVN0cmluZ1BhcmFtcyc7XG5pbXBvcnQgc2VzZXJpYWxpemVQYXJhbSBmcm9tICcuLi9zaGFyZWQvc2VyaWFsaXplUGFyYW0nO1xuaW1wb3J0IHNlcmlhbGl6ZVNlYXJjaCBmcm9tICcuLi9zaGFyZWQvc2VyaWFsaXplU2VhcmNoJztcbmltcG9ydCBzZWdtZW50cywge3Jlc2V0U2VnbWVudHN9IGZyb20gJy4vc2VnbWVudHMnO1xuXG5jb25zdCBwYXJhbXNQcm94eUhhbmRsZXIgPSB7XG4gIHNldCh0YXJnZXQsIG5hbWUsIHZhbHVlKSB7XG4gICAgY29uc3Qgc2VyaWFsaXplZFZhbHVlID0gc2VzZXJpYWxpemVQYXJhbSh2YWx1ZSk7XG4gICAgdGFyZ2V0W25hbWVdID0gc2VyaWFsaXplZFZhbHVlO1xuICAgIGNvbnN0IHNlYXJjaCA9IHNlcmlhbGl6ZVNlYXJjaCh0YXJnZXQpO1xuICAgIHJvdXRlci51cmwgPSByb3V0ZXIucGF0aCArIChzZWFyY2ggPyAnPycgOiAnJykgKyBzZWFyY2g7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0sXG4gIGdldCh0YXJnZXQsIG5hbWUpIHtcbiAgICBpZih0YXJnZXRbbmFtZV0gPT09IGZhbHNlKSByZXR1cm4gZmFsc2U7XG4gICAgaWYoc2VnbWVudHNbbmFtZV0gPT09IGZhbHNlKSByZXR1cm4gZmFsc2U7XG4gICAgcmV0dXJuIHRhcmdldFtuYW1lXSB8fCBzZWdtZW50c1tuYW1lXSB8fCAnJztcbiAgfVxufVxuXG5jb25zdCBwYXJhbXMgPSB7Li4ud2luZG93LnBhcmFtc307XG5cbmRlbGV0ZSB3aW5kb3cucGFyYW1zO1xuXG5jb25zdCBwcm94eSA9IG5ldyBQcm94eShwYXJhbXMsIHBhcmFtc1Byb3h5SGFuZGxlcik7XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVQYXJhbXMocXVlcnkpIHtcbiAgcmVzZXRTZWdtZW50cygpO1xuICBjb25zdCBkZWx0YSA9IGdldFF1ZXJ5U3RyaW5nUGFyYW1zKHF1ZXJ5KTtcbiAgZm9yKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyh7Li4uZGVsdGEsIC4uLnBhcmFtc30pKSB7XG4gICAgcGFyYW1zW2tleV0gPSBkZWx0YVtrZXldO1xuICB9XG4gIHJldHVybiBwcm94eTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcHJveHk7IiwiY29uc3QgcHJvamVjdCA9IHsuLi53aW5kb3cucHJvamVjdH07XG5cbmRlbGV0ZSB3aW5kb3cucHJvamVjdDtcblxuT2JqZWN0LmZyZWV6ZShwcm9qZWN0KTtcblxuZXhwb3J0IGRlZmF1bHQgcHJvamVjdDsiLCJpbXBvcnQge2lzRmFsc2UsIGlzVGV4dH0gZnJvbSAnLi4vc2hhcmVkL25vZGVzJztcbmltcG9ydCB7YW5jaG9yYWJsZUVsZW1lbnR9IGZyb20gJy4vYW5jaG9yYWJsZU5vZGUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXIobm9kZSwgb3B0aW9ucykge1xuXG4gIGlmKGlzRmFsc2Uobm9kZSkgfHwgbm9kZS50eXBlID09PSAnaGVhZCcpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlQ29tbWVudChcIlwiKTtcbiAgfVxuXG4gIGlmKGlzVGV4dChub2RlKSkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShub2RlKTtcbiAgfVxuXG4gIGNvbnN0IHN2ZyA9IChvcHRpb25zICYmIG9wdGlvbnMuc3ZnKSB8fCBub2RlLnR5cGUgPT09ICdzdmcnO1xuXG4gIGxldCBlbGVtZW50O1xuICBpZihzdmcpIHtcbiAgICBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgbm9kZS50eXBlKTtcbiAgfSBlbHNlIHtcbiAgICBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChub2RlLnR5cGUpO1xuICB9XG5cbiAgaWYobm9kZS5pbnN0YW5jZSkge1xuICAgIG5vZGUuaW5zdGFuY2UuX3NlbGYuZWxlbWVudCA9IGVsZW1lbnQ7XG4gIH1cblxuICBmb3IobGV0IG5hbWUgaW4gbm9kZS5hdHRyaWJ1dGVzKSB7XG4gICAgaWYobmFtZSA9PT0gJ2h0bWwnKSB7XG4gICAgICBlbGVtZW50LmlubmVySFRNTCA9IG5vZGUuYXR0cmlidXRlc1tuYW1lXTtcbiAgICAgIGFuY2hvcmFibGVFbGVtZW50KGVsZW1lbnQpO1xuICAgIH0gZWxzZSBpZihuYW1lLnN0YXJ0c1dpdGgoJ29uJykpIHtcbiAgICAgIGNvbnN0IGV2ZW50TmFtZSA9IG5hbWUucmVwbGFjZSgnb24nLCAnJyk7XG4gICAgICBjb25zdCBrZXkgPSAnX2V2ZW50LicgKyBldmVudE5hbWU7XG4gICAgICBub2RlW2tleV0gPSAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYobm9kZS5hdHRyaWJ1dGVzLmRlZmF1bHQgIT09IHRydWUpIHtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgICAgIG5vZGUuYXR0cmlidXRlc1tuYW1lXSh7Li4ubm9kZS5hdHRyaWJ1dGVzLCBldmVudH0pO1xuICAgICAgfTtcbiAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIG5vZGVba2V5XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHR5cGUgPSB0eXBlb2Yobm9kZS5hdHRyaWJ1dGVzW25hbWVdKTtcbiAgICAgIGlmKHR5cGUgIT09ICdvYmplY3QnICYmIHR5cGUgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgaWYobmFtZSAhPSAndmFsdWUnICYmIG5vZGUuYXR0cmlidXRlc1tuYW1lXSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKG5hbWUsICcnKTtcbiAgICAgICAgfSBlbHNlIGlmKG5hbWUgPT0gJ3ZhbHVlJyB8fCAobm9kZS5hdHRyaWJ1dGVzW25hbWVdICE9PSBmYWxzZSAmJiBub2RlLmF0dHJpYnV0ZXNbbmFtZV0gIT09IG51bGwgJiYgbm9kZS5hdHRyaWJ1dGVzW25hbWVdICE9PSB1bmRlZmluZWQpKSB7XG4gICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUobmFtZSwgbm9kZS5hdHRyaWJ1dGVzW25hbWVdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmKCFub2RlLmF0dHJpYnV0ZXMuaHRtbCkge1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBub2RlLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBjaGlsZCA9IHJlbmRlcihub2RlLmNoaWxkcmVuW2ldLCB7c3ZnfSk7XG4gICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGNoaWxkKTtcbiAgICB9XG4gICAgXG4gICAgaWYobm9kZS50eXBlID09ICdzZWxlY3QnKSB7XG4gICAgICBlbGVtZW50LnZhbHVlID0gbm9kZS5hdHRyaWJ1dGVzLnZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlbGVtZW50O1xuXG59IiwiaW1wb3J0IHtpc0ZhbHNlLCBpc1RleHR9IGZyb20gJy4uL3NoYXJlZC9ub2Rlcyc7XG5pbXBvcnQgY2xpZW50IGZyb20gJy4vY2xpZW50JztcbmltcG9ydCByZW5kZXIgZnJvbSAnLi9yZW5kZXInO1xuaW1wb3J0IHthbmNob3JhYmxlRWxlbWVudH0gZnJvbSAnLi9hbmNob3JhYmxlTm9kZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcmVuZGVyKHNlbGVjdG9yLCBjdXJyZW50LCBuZXh0KSB7XG5cbiAgY3VycmVudCA9IGN1cnJlbnQgPT09IHVuZGVmaW5lZCA/IGNsaWVudC52aXJ0dWFsRG9tIDogY3VycmVudDtcbiAgbmV4dCA9IG5leHQgPT09IHVuZGVmaW5lZCA/IGNsaWVudC5uZXh0VmlydHVhbERvbSA6IG5leHQ7XG5cbiAgaWYobmV4dC5pbnN0YW5jZSkge1xuICAgIG5leHQuaW5zdGFuY2UuX3NlbGYuZWxlbWVudCA9IHNlbGVjdG9yO1xuICB9XG5cbiAgaWYoIWNsaWVudC5oeWRyYXRlZCAmJiBzZWxlY3Rvcikge1xuICAgIGZvcihjb25zdCBlbGVtZW50IG9mIHNlbGVjdG9yLmNoaWxkTm9kZXMpIHtcbiAgICAgIGlmKGVsZW1lbnQudGFnTmFtZSAmJiBlbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PSAndGV4dGFyZWEnICYmIGVsZW1lbnQuY2hpbGROb2Rlcy5sZW5ndGggPT0gMCkge1xuICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKSk7XG4gICAgICB9XG4gICAgICBpZihlbGVtZW50LkNPTU1FTlRfTk9ERSA9PT0gOCAmJiBlbGVtZW50LnRleHRDb250ZW50ID09PSAnIycpIHtcbiAgICAgICAgc2VsZWN0b3IucmVtb3ZlQ2hpbGQoZWxlbWVudCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYoaXNGYWxzZShjdXJyZW50KSAmJiBpc0ZhbHNlKG5leHQpKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYoKGlzRmFsc2UoY3VycmVudCkgfHwgaXNGYWxzZShuZXh0KSkgJiYgY3VycmVudCAhPSBuZXh0KSB7XG4gICAgY29uc3QgbmV4dFNlbGVjdG9yID0gcmVuZGVyKG5leHQpO1xuICAgIHJldHVybiBzZWxlY3Rvci5yZXBsYWNlV2l0aChuZXh0U2VsZWN0b3IpO1xuICB9XG5cbiAgaWYoY3VycmVudC50eXBlID09ICdoZWFkJyAmJiBuZXh0LnR5cGUgPT0gJ2hlYWQnKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYoY3VycmVudC50eXBlID09ICdoZWFkJyB8fCBuZXh0LnR5cGUgPT0gJ2hlYWQnKSB7XG4gICAgY29uc3QgbmV4dFNlbGVjdG9yID0gcmVuZGVyKG5leHQpO1xuICAgIHJldHVybiBzZWxlY3Rvci5yZXBsYWNlV2l0aChuZXh0U2VsZWN0b3IpO1xuICB9XG5cbiAgaWYgKGN1cnJlbnQudHlwZSAhPT0gbmV4dC50eXBlKSB7XG4gICAgY29uc3QgbmV4dFNlbGVjdG9yID0gcmVuZGVyKG5leHQpO1xuICAgIHJldHVybiBzZWxlY3Rvci5yZXBsYWNlV2l0aChuZXh0U2VsZWN0b3IpO1xuICB9XG5cbiAgaWYgKGlzVGV4dChjdXJyZW50KSAmJiBpc1RleHQobmV4dCkpIHtcbiAgICBpZihjdXJyZW50ICE9IG5leHQpIHtcbiAgICAgIHNlbGVjdG9yLm5vZGVWYWx1ZSA9IG5leHQ7XG4gICAgfVxuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChjdXJyZW50LnR5cGUgPT09IG5leHQudHlwZSkge1xuXG4gICAgY29uc3QgYXR0cmlidXRlTmFtZXMgPSBPYmplY3Qua2V5cyh7Li4uY3VycmVudC5hdHRyaWJ1dGVzLCAuLi5uZXh0LmF0dHJpYnV0ZXN9KTtcbiAgICBmb3IoY29uc3QgbmFtZSBvZiBhdHRyaWJ1dGVOYW1lcykge1xuICAgICAgaWYobmFtZSA9PT0gJ2h0bWwnKSB7XG4gICAgICAgIGlmKG5leHQuYXR0cmlidXRlc1tuYW1lXSAhPT0gY3VycmVudC5hdHRyaWJ1dGVzW25hbWVdKSB7XG4gICAgICAgICAgc2VsZWN0b3IuaW5uZXJIVE1MID0gbmV4dC5hdHRyaWJ1dGVzW25hbWVdO1xuICAgICAgICAgIGFuY2hvcmFibGVFbGVtZW50KHNlbGVjdG9yKTtcbiAgICAgICAgfSAgICAgICAgXG4gICAgICB9IGVsc2UgaWYobmFtZSA9PT0gJ2NoZWNrZWQnKSB7XG4gICAgICAgIGlmKG5leHQuYXR0cmlidXRlc1tuYW1lXSAhPT0gc2VsZWN0b3IudmFsdWUpIHtcbiAgICAgICAgICBzZWxlY3Rvci5jaGVja2VkID0gbmV4dC5hdHRyaWJ1dGVzW25hbWVdO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYobmFtZSA9PT0gJ3ZhbHVlJykge1xuICAgICAgICBpZihuZXh0LmF0dHJpYnV0ZXNbbmFtZV0gIT09IHNlbGVjdG9yLnZhbHVlKSB7XG4gICAgICAgICAgc2VsZWN0b3IudmFsdWUgPSBuZXh0LmF0dHJpYnV0ZXNbbmFtZV07XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZihuYW1lLnN0YXJ0c1dpdGgoJ29uJykpIHtcbiAgICAgICAgY29uc3QgZXZlbnROYW1lID0gbmFtZS5yZXBsYWNlKCdvbicsICcnKTtcbiAgICAgICAgY29uc3Qga2V5ID0gJ19ldmVudC4nICsgZXZlbnROYW1lO1xuICAgICAgICBzZWxlY3Rvci5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgY3VycmVudFtrZXldKTtcbiAgICAgICAgaWYobmV4dC5hdHRyaWJ1dGVzW25hbWVdKSB7XG4gICAgICAgICAgbmV4dFtrZXldID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZihuZXh0LmF0dHJpYnV0ZXMuZGVmYXVsdCAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbmV4dC5hdHRyaWJ1dGVzW25hbWVdKHsuLi5uZXh0LmF0dHJpYnV0ZXMsIGV2ZW50fSk7XG4gICAgICAgICAgfTtcbiAgICAgICAgICBzZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgbmV4dFtrZXldKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgdHlwZSA9IHR5cGVvZihuZXh0LmF0dHJpYnV0ZXNbbmFtZV0pO1xuICAgICAgICBpZih0eXBlICE9PSAnb2JqZWN0JyAmJiB0eXBlICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgaWYoY3VycmVudC5hdHRyaWJ1dGVzW25hbWVdICE9PSB1bmRlZmluZWQgJiYgbmV4dC5hdHRyaWJ1dGVzW25hbWVdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHNlbGVjdG9yLnJlbW92ZUF0dHJpYnV0ZShuYW1lKTtcbiAgICAgICAgICB9IGVsc2UgaWYoY3VycmVudC5hdHRyaWJ1dGVzW25hbWVdICE9PSBuZXh0LmF0dHJpYnV0ZXNbbmFtZV0pIHtcbiAgICAgICAgICAgIGlmKG5hbWUgIT0gJ3ZhbHVlJyAmJiBuZXh0LmF0dHJpYnV0ZXNbbmFtZV0gPT09IGZhbHNlIHx8IG5leHQuYXR0cmlidXRlc1tuYW1lXSA9PT0gbnVsbCB8fCBuZXh0LmF0dHJpYnV0ZXNbbmFtZV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICBzZWxlY3Rvci5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYobmFtZSAhPSAndmFsdWUnICYmIG5leHQuYXR0cmlidXRlc1tuYW1lXSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICBzZWxlY3Rvci5zZXRBdHRyaWJ1dGUobmFtZSwgJycpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgc2VsZWN0b3Iuc2V0QXR0cmlidXRlKG5hbWUsIG5leHQuYXR0cmlidXRlc1tuYW1lXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYobmV4dC5hdHRyaWJ1dGVzLmh0bWwpIHJldHVybjtcblxuICAgIGNvbnN0IGxpbWl0ID0gTWF0aC5tYXgoY3VycmVudC5jaGlsZHJlbi5sZW5ndGgsIG5leHQuY2hpbGRyZW4ubGVuZ3RoKTtcbiAgICBpZihuZXh0LmNoaWxkcmVuLmxlbmd0aCA+IGN1cnJlbnQuY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgY3VycmVudC5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICByZXJlbmRlcihzZWxlY3Rvci5jaGlsZE5vZGVzW2ldLCBjdXJyZW50LmNoaWxkcmVuW2ldLCBuZXh0LmNoaWxkcmVuW2ldKTtcbiAgICAgIH1cbiAgICAgIGZvcihsZXQgaSA9IGN1cnJlbnQuY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbmV4dC5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBuZXh0U2VsZWN0b3IgPSByZW5kZXIobmV4dC5jaGlsZHJlbltpXSk7XG4gICAgICAgIHNlbGVjdG9yLmFwcGVuZENoaWxkKG5leHRTZWxlY3Rvcik7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmKGN1cnJlbnQuY2hpbGRyZW4ubGVuZ3RoID4gbmV4dC5jaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBuZXh0LmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJlcmVuZGVyKHNlbGVjdG9yLmNoaWxkTm9kZXNbaV0sIGN1cnJlbnQuY2hpbGRyZW5baV0sIG5leHQuY2hpbGRyZW5baV0pO1xuICAgICAgfVxuICAgICAgZm9yKGxldCBpID0gY3VycmVudC5jaGlsZHJlbi5sZW5ndGggLSAxOyBpID49IG5leHQuY2hpbGRyZW4ubGVuZ3RoOyBpLS0pIHtcbiAgICAgICAgc2VsZWN0b3IucmVtb3ZlQ2hpbGQoc2VsZWN0b3IuY2hpbGROb2Rlc1tpXSk7ICAgICAgICAgIFxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmb3IobGV0IGkgPSBsaW1pdCAtIDE7IGkgPiAtMTsgaS0tKSB7XG4gICAgICAgIGlmKHR5cGVvZiBzZWxlY3Rvci5jaGlsZE5vZGVzW2ldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFZpcnR1YWwgRE9NIGRvZXMgbm90IG1hdGNoIHRoZSBET00uIEV4cGVjdGVkIHRhZyAke2N1cnJlbnQudHlwZX0gYnV0IGluc3RlYWQgZm91bmQgdW5kZWZpbmVkLiBUaGlzIGVycm9yIHVzdWFsbHkgaGFwcGVucyBiZWNhdXNlIG9mIGFuIGludmFsaWQgSFRNTCBoaWVyYXJjaHkgbGlrZSBuZXN0ZWQgZm9ybXMgb3IgdGFibGVzIHdpdGhvdXQgdHIuYCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHJlcmVuZGVyKHNlbGVjdG9yLmNoaWxkTm9kZXNbaV0sIGN1cnJlbnQuY2hpbGRyZW5baV0sIG5leHQuY2hpbGRyZW5baV0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmKG5leHQudHlwZSA9PSAndGV4dGFyZWEnKSB7XG4gICAgICBzZWxlY3Rvci52YWx1ZSA9IG5leHQuY2hpbGRyZW4uam9pbihcIlwiKTtcbiAgICB9XG5cbiAgICBpZihuZXh0LnR5cGUgPT0gJ3NlbGVjdCcpIHtcbiAgICAgIHNlbGVjdG9yLnZhbHVlID0gbmV4dC5hdHRyaWJ1dGVzLnZhbHVlO1xuICAgIH1cblxuICB9XG5cbn0iLCJpbXBvcnQge3VwZGF0ZVBhcmFtc30gZnJvbSAnLi9wYXJhbXMnO1xuaW1wb3J0IGVudmlyb25tZW50IGZyb20gJy4vZW52aXJvbm1lbnQnO1xuaW1wb3J0IGV4dHJhY3RMb2NhdGlvbiBmcm9tICcuLi9zaGFyZWQvZXh0cmFjdExvY2F0aW9uJztcbmltcG9ydCB3b3JrZXIgZnJvbSAnLi93b3JrZXInO1xuaW1wb3J0IHBhZ2UgZnJvbSAnLi9wYWdlJztcbmltcG9ydCB3aW5kb3dFdmVudCBmcm9tICcuL3dpbmRvd0V2ZW50JztcbmltcG9ydCBjbGllbnQgZnJvbSAnLi9jbGllbnQnO1xuaW1wb3J0IHNlZ21lbnRzIGZyb20gJy4vc2VnbWVudHMnO1xuXG5sZXQgcmVkaXJlY3RUaW1lciA9IG51bGw7XG5cbmNsYXNzIFJvdXRlciB7XG5cbiAgZXZlbnQgPSAnbnVsbHN0YWNrLnJvdXRlcic7XG5cbiAgX2NoYW5nZWQgPSBmYWxzZTtcbiAgX3NlZ21lbnRzID0gc2VnbWVudHM7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3Qge2hhc2gsIHVybH0gPSBleHRyYWN0TG9jYXRpb24od2luZG93LmxvY2F0aW9uLnBhdGhuYW1lK3dpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xuICAgIHRoaXMuX3VybCA9IHVybDtcbiAgICB0aGlzLl9oYXNoID0gaGFzaDtcbiAgfVxuXG4gIGFzeW5jIF9wb3BTdGF0ZSgpIHtcbiAgICBjb25zdCB7dXJsV2l0aEhhc2h9ID0gZXh0cmFjdExvY2F0aW9uKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSt3aW5kb3cubG9jYXRpb24uc2VhcmNoKTtcbiAgICBhd2FpdCB0aGlzLl91cGRhdGUodXJsV2l0aEhhc2gsIGZhbHNlKTtcbiAgfVxuXG4gIGFzeW5jIF91cGRhdGUodGFyZ2V0LCBwdXNoKSB7XG4gICAgY29uc3Qge3VybCwgcGF0aCwgaGFzaCwgdXJsV2l0aEhhc2h9ID0gZXh0cmFjdExvY2F0aW9uKHRhcmdldCk7XG4gICAgY2xlYXJUaW1lb3V0KHJlZGlyZWN0VGltZXIpO1xuICAgIHJlZGlyZWN0VGltZXIgPSBzZXRUaW1lb3V0KGFzeW5jICgpID0+IHtcbiAgICAgIHBhZ2Uuc3RhdHVzID0gMjAwO1xuICAgICAgaWYoZW52aXJvbm1lbnQubW9kZSA9PT0gJ3NzZycpIHtcbiAgICAgICAgd29ya2VyLmZldGNoaW5nID0gdHJ1ZTtcbiAgICAgICAgY29uc3QgYXBpID0gJy9pbmRleC5qc29uJztcbiAgICAgICAgY29uc3QgZW5kcG9pbnQgPSBwYXRoID09PSAnLycgPyBhcGkgOiBwYXRoK2FwaTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGVuZHBvaW50KTtcbiAgICAgICAgICBjb25zdCBwYXlsb2FkID0gYXdhaXQgcmVzcG9uc2UuanNvbih1cmwpO1xuICAgICAgICAgIGNsaWVudC5tZW1vcnkgPSBwYXlsb2FkLmluc3RhbmNlcztcbiAgICAgICAgICBmb3IoY29uc3Qga2V5IGluIHBheWxvYWQucGFnZSkge1xuICAgICAgICAgICAgcGFnZVtrZXldID0gcGF5bG9hZC5wYWdlW2tleV07XG4gICAgICAgICAgfVxuICAgICAgICAgIHdvcmtlci5yZXNwb25zaXZlID0gdHJ1ZTtcbiAgICAgICAgfSBjYXRjaChlcnJvcikge1xuICAgICAgICAgIHdvcmtlci5yZXNwb25zaXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgd29ya2VyLmZldGNoaW5nID0gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZihwdXNoKSB7XG4gICAgICAgIGhpc3RvcnkucHVzaFN0YXRlKHt9LCBkb2N1bWVudC50aXRsZSwgdXJsV2l0aEhhc2gpO1xuICAgICAgfVxuICAgICAgdGhpcy5fdXJsID0gdXJsO1xuICAgICAgdGhpcy5faGFzaCA9IGhhc2g7XG4gICAgICB0aGlzLl9jaGFuZ2VkID0gdHJ1ZTtcbiAgICAgIHVwZGF0ZVBhcmFtcyh1cmwpO1xuICAgICAgY2xpZW50LnVwZGF0ZSgpO1xuICAgICAgd2luZG93RXZlbnQoJ3JvdXRlcicpO1xuICAgIH0sIDApO1xuICB9XG5cbiAgYXN5bmMgX3JlZGlyZWN0KHRhcmdldCkge1xuICAgIGlmICh0YXJnZXQuc3RhcnRzV2l0aCgnaHR0cCcpKSB7XG4gICAgICByZXR1cm4gKHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdGFyZ2V0KTtcbiAgICB9XG4gICAgY29uc3Qge3VybCwgaGFzaCwgdXJsV2l0aEhhc2h9ID0gZXh0cmFjdExvY2F0aW9uKHRhcmdldCk7XG4gICAgaWYodXJsICE9PSB0aGlzLl91cmwgfHwgdGhpcy5faGFzaCAhPT0gaGFzaCkge1xuICAgICAgYXdhaXQgdGhpcy5fdXBkYXRlKHVybFdpdGhIYXNoLCB0cnVlKTtcbiAgICB9XG4gICAgaWYoIWhhc2gpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGwoMCwgMCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IHVybCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdXJsO1xuICB9XG5cbiAgc2V0IHVybCh0YXJnZXQpIHtcbiAgICB0aGlzLl9yZWRpcmVjdCh0YXJnZXQpO1xuICB9XG5cbiAgZ2V0IHBhdGgoKSB7XG4gICAgcmV0dXJuIGV4dHJhY3RMb2NhdGlvbih0aGlzLl91cmwpLnBhdGg7XG4gIH1cblxuICBzZXQgcGF0aCh0YXJnZXQpIHtcbiAgICB0aGlzLl9yZWRpcmVjdCh0YXJnZXQrd2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XG4gIH1cblxufVxuXG5jb25zdCByb3V0ZXIgPSBuZXcgUm91dGVyKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjsiLCJjb25zdCBzZWdtZW50cyA9IHt9O1xuZXhwb3J0IGRlZmF1bHQgc2VnbWVudHM7XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNldFNlZ21lbnRzKCkge1xuICBmb3IoY29uc3Qga2V5IGluIHNlZ21lbnRzKSB7XG4gICAgZGVsZXRlIHNlZ21lbnRzW2tleV07XG4gIH1cbn0iLCJjb25zdCBzZXR0aW5ncyA9IHsuLi53aW5kb3cuc2V0dGluZ3N9O1xuZGVsZXRlIHdpbmRvdy5zZXR0aW5ncztcblxuT2JqZWN0LmZyZWV6ZShzZXR0aW5ncyk7XG5cbmV4cG9ydCBkZWZhdWx0IHNldHRpbmdzOyIsImxldCB0aW1lciA9IG51bGw7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpbmRvd0V2ZW50KG5hbWUpIHtcbiAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgY29uc3QgZXZlbnQgPSBuZXcgRXZlbnQoJ251bGxzdGFjay4nK25hbWUpO1xuICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgfSwgMCk7XG59IiwiaW1wb3J0IGVudmlyb25tZW50IGZyb20gJy4vZW52aXJvbm1lbnQnO1xuaW1wb3J0IGNsaWVudCBmcm9tICcuL2NsaWVudCc7XG5pbXBvcnQgcm91dGVyIGZyb20gJy4vcm91dGVyJztcblxuY29uc3Qgd29ya2VyID0gey4uLndpbmRvdy53b3JrZXJ9O1xud29ya2VyLm9ubGluZSA9IG5hdmlnYXRvci5vbkxpbmU7XG5kZWxldGUgd2luZG93LndvcmtlcjtcblxuY29uc3QgZW1wdHlRdWV1ZSA9IE9iamVjdC5mcmVlemUoW10pO1xuXG5jb25zdCBxdWV1ZXNQcm94eUhhbmRsZXIgPSB7XG4gIHNldCh0YXJnZXQsIG5hbWUsIHZhbHVlKSB7XG4gICAgdGFyZ2V0W25hbWVdID0gdmFsdWU7XG4gICAgY2xpZW50LnVwZGF0ZSgpO1xuICAgIHJldHVybiB0cnVlO1xuICB9LFxuICBnZXQodGFyZ2V0LCBuYW1lKSB7XHRcbiAgICByZXR1cm4gdGFyZ2V0W25hbWVdIHx8IGVtcHR5UXVldWU7XHRcbiAgfVxufVxuXG53b3JrZXIucXVldWVzID0gbmV3IFByb3h5KHt9LCBxdWV1ZXNQcm94eUhhbmRsZXIpO1xuXG5jb25zdCB3b3JrZXJQcm94eUhhbmRsZXIgPSB7XG4gIHNldCh0YXJnZXQsIG5hbWUsIHZhbHVlKSB7XG4gICAgaWYodGFyZ2V0W25hbWVdICE9PSB2YWx1ZSkge1xuICAgICAgdGFyZ2V0W25hbWVdID0gdmFsdWU7XG4gICAgICBjbGllbnQudXBkYXRlKCk7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG5cbmNvbnN0IHByb3h5ID0gbmV3IFByb3h5KHdvcmtlciwgd29ya2VyUHJveHlIYW5kbGVyKTtcblxuaWYod29ya2VyLmVuYWJsZWQpIHtcblxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignYmVmb3JlaW5zdGFsbHByb21wdCcsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBwcm94eS5pbnN0YWxsYXRpb24gPSBldmVudDtcbiAgfSk7XG5cbiAgYXN5bmMgZnVuY3Rpb24gcmVnaXN0ZXIoKSB7XG4gICAgaWYoJ3NlcnZpY2VXb3JrZXInIGluIG5hdmlnYXRvcikge1xuICAgICAgY29uc3QgcmVxdWVzdCA9IGAvc2VydmljZS13b3JrZXItJHtlbnZpcm9ubWVudC5rZXl9LmpzYDtcbiAgICAgIHRyeSB7XG4gICAgICAgIHByb3h5LnJlZ2lzdHJhdGlvbiA9IGF3YWl0IG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLnJlZ2lzdGVyKHJlcXVlc3QsIHtzY29wZTogJy8nfSk7XG4gICAgICB9IGNhdGNoKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgIH07XG4gICAgfVxuICB9O1xuXG4gIHJlZ2lzdGVyKCk7XG5cbn1cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ29ubGluZScsICgpID0+IHtcbiAgcHJveHkub25saW5lID0gdHJ1ZTtcbiAgaWYoZW52aXJvbm1lbnQubW9kZSA9PT0gJ3NzZycpIHtcbiAgICByb3V0ZXIuX3VwZGF0ZShyb3V0ZXIudXJsKTtcbiAgfSBlbHNlIHtcbiAgICBwcm94eS5yZXNwb25zaXZlID0gdHJ1ZTtcbiAgfVxufSk7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdvZmZsaW5lJywgKCkgPT4ge1xuICBwcm94eS5vbmxpbmUgPSBmYWxzZTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBwcm94eTsiLCJpbXBvcnQgTnVsbHN0YWNrIGZyb20gXCIuL3t7TlVMTFNUQUNLX0VOVklST05NRU5UX05BTUV9fVwiO1xuXG5leHBvcnQgZGVmYXVsdCBOdWxsc3RhY2s7IiwiZnVuY3Rpb24gbWF0Y2gobm9kZSkge1xuICByZXR1cm4gKFxuICAgIG5vZGUgJiZcbiAgICBub2RlLnR5cGUgPT09ICdhJyAmJlxuICAgIG5vZGUuYXR0cmlidXRlcy5ocmVmICYmXG4gICAgbm9kZS5hdHRyaWJ1dGVzLmhyZWYuc3RhcnRzV2l0aCgnLycpICYmXG4gICAgIW5vZGUuYXR0cmlidXRlcy50YXJnZXRcbiAgKVxufVxuXG5mdW5jdGlvbiB0cmFuc2Zvcm0oe25vZGUsIHJvdXRlcn0pIHtcbiAgaWYoIW1hdGNoKG5vZGUpKSByZXR1cm47XG4gIGNvbnN0IG9yaWdpbmFsRXZlbnQgPSBub2RlLmF0dHJpYnV0ZXMub25jbGljaztcbiAgbm9kZS5hdHRyaWJ1dGVzLm9uY2xpY2sgPSAoe2V2ZW50fSkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgcm91dGVyLnVybCA9IG5vZGUuYXR0cmlidXRlcy5ocmVmO1xuICAgIGlmKG9yaWdpbmFsRXZlbnQpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBvcmlnaW5hbEV2ZW50KHsuLi5ub2RlLmF0dHJpYnV0ZXMsIGV2ZW50fSk7XG4gICAgICB9LCAwKTtcbiAgICB9XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHsgdHJhbnNmb3JtLCBjbGllbnQ6IHRydWUgfSIsImZ1bmN0aW9uIGF0dGFjaEV2ZW50KG5vZGUpIHtcbiAgY29uc3QgdGFyZ2V0ID0gbm9kZS5hdHRyaWJ1dGVzLnNvdXJjZTtcbiAgbGV0IGV2ZW50TmFtZSA9ICdvbmlucHV0JztcbiAgbGV0IHZhbHVlTmFtZSA9ICd2YWx1ZSc7XG4gIGlmKG5vZGUuYXR0cmlidXRlcy50eXBlID09PSAnY2hlY2tib3gnIHx8IG5vZGUuYXR0cmlidXRlcy50eXBlID09PSAncmFkaW8nKSB7XG4gICAgZXZlbnROYW1lID0gJ29uY2xpY2snO1xuICAgIHZhbHVlTmFtZSA9ICdjaGVja2VkJztcbiAgfSBlbHNlIGlmKG5vZGUudHlwZSAhPT0gJ2lucHV0JyAmJiBub2RlLnR5cGUgIT09ICd0ZXh0YXJlYScpIHtcbiAgICBldmVudE5hbWUgPSAnb25jaGFuZ2UnO1xuICB9XG4gIGNvbnN0IG9yaWdpbmFsRXZlbnQgPSBub2RlLmF0dHJpYnV0ZXNbZXZlbnROYW1lXTtcbiAgbm9kZS5hdHRyaWJ1dGVzW2V2ZW50TmFtZV0gPSAoe2V2ZW50LCB2YWx1ZX0pID0+IHtcbiAgICBpZih2YWx1ZU5hbWUgPT0gJ2NoZWNrZWQnKSB7XG4gICAgICB0YXJnZXRbbm9kZS5hdHRyaWJ1dGVzLmJpbmRdID0gZXZlbnQudGFyZ2V0W3ZhbHVlTmFtZV07XG4gICAgfSBlbHNlIGlmKHRhcmdldFtub2RlLmF0dHJpYnV0ZXMuYmluZF0gPT09IHRydWUgfHwgdGFyZ2V0W25vZGUuYXR0cmlidXRlcy5iaW5kXSA9PT0gZmFsc2UpIHtcbiAgICAgIHRhcmdldFtub2RlLmF0dHJpYnV0ZXMuYmluZF0gPSBldmVudCA/IChldmVudC50YXJnZXRbdmFsdWVOYW1lXSA9PSAndHJ1ZScpIDogdmFsdWU7XG4gICAgfSBlbHNlIGlmKHR5cGVvZiB0YXJnZXRbbm9kZS5hdHRyaWJ1dGVzLmJpbmRdID09PSAnbnVtYmVyJykge1xuICAgICAgdGFyZ2V0W25vZGUuYXR0cmlidXRlcy5iaW5kXSA9IHBhcnNlRmxvYXQoZXZlbnQgPyBldmVudC50YXJnZXRbdmFsdWVOYW1lXSA6IHZhbHVlKSB8fCAwO1xuICAgIH0gZWxzZSB7XG4gICAgICB0YXJnZXRbbm9kZS5hdHRyaWJ1dGVzLmJpbmRdID0gZXZlbnQgPyBldmVudC50YXJnZXRbdmFsdWVOYW1lXSA6IHZhbHVlO1xuICAgIH1cbiAgICBpZihvcmlnaW5hbEV2ZW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBvcmlnaW5hbEV2ZW50KHsuLi5ub2RlLmF0dHJpYnV0ZXMsIGV2ZW50LCB2YWx1ZX0pO1xuICAgICAgfSwgMCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIG1hdGNoKG5vZGUpIHtcbiAgcmV0dXJuIChcbiAgICBub2RlICE9PSB1bmRlZmluZWQgJiYgXG4gICAgbm9kZS5hdHRyaWJ1dGVzICE9PSB1bmRlZmluZWQgJiYgXG4gICAgbm9kZS5hdHRyaWJ1dGVzLmJpbmQgIT09IHVuZGVmaW5lZCAmJiBcbiAgICBub2RlLmF0dHJpYnV0ZXMuc291cmNlICE9PSB1bmRlZmluZWRcbiAgKVxufVxuXG5mdW5jdGlvbiB0cmFuc2Zvcm0oe25vZGUsIGVudmlyb25tZW50fSkge1xuICBpZighbWF0Y2gobm9kZSkpIHJldHVybjtcbiAgY29uc3QgdGFyZ2V0ID0gbm9kZS5hdHRyaWJ1dGVzLnNvdXJjZTtcbiAgaWYobm9kZS50eXBlID09PSAndGV4dGFyZWEnKSB7XG4gICAgbm9kZS5jaGlsZHJlbiA9IFt0YXJnZXRbbm9kZS5hdHRyaWJ1dGVzLmJpbmRdXTtcbiAgfSBlbHNlIGlmKG5vZGUudHlwZSA9PT0gJ2lucHV0JyAmJiBub2RlLmF0dHJpYnV0ZXMudHlwZSA9PT0gJ2NoZWNrYm94Jykge1xuICAgIG5vZGUuYXR0cmlidXRlcy5jaGVja2VkID0gdGFyZ2V0W25vZGUuYXR0cmlidXRlcy5iaW5kXTtcbiAgfSBlbHNlIHtcbiAgICBub2RlLmF0dHJpYnV0ZXMudmFsdWUgPSB0YXJnZXRbbm9kZS5hdHRyaWJ1dGVzLmJpbmRdO1xuICB9XG4gIG5vZGUuYXR0cmlidXRlcy5uYW1lID0gbm9kZS5hdHRyaWJ1dGVzLm5hbWUgfHwgbm9kZS5hdHRyaWJ1dGVzLmJpbmQ7XG5cbiAgaWYoZW52aXJvbm1lbnQuY2xpZW50KSB7XG4gICAgYXR0YWNoRXZlbnQobm9kZSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgeyB0cmFuc2Zvcm0sIGNsaWVudDogdHJ1ZSwgc2VydmVyOiB0cnVlIH0iLCJpbXBvcnQge2NhbWVsaXplLCBrZWJhYml6ZX0gZnJvbSAnLi4vc2hhcmVkL3N0cmluZyc7XG5cbmZ1bmN0aW9uIG1hdGNoKG5vZGUpIHtcbiAgcmV0dXJuIChcbiAgICBub2RlICYmIFxuICAgIG5vZGUuYXR0cmlidXRlcyAhPT0gdW5kZWZpbmVkXG4gIClcbn1cblxuZnVuY3Rpb24gdHJhbnNmb3JtKHtub2RlfSkge1xuICBpZighbWF0Y2gobm9kZSkpIHJldHVybjtcbiAgbm9kZS5hdHRyaWJ1dGVzLmRhdGEgPSBub2RlLmF0dHJpYnV0ZXMuZGF0YSB8fCB7fTtcbiAgZm9yKGNvbnN0IGF0dHJpYnV0ZSBpbiBub2RlLmF0dHJpYnV0ZXMpIHtcbiAgICBpZihhdHRyaWJ1dGUuc3RhcnRzV2l0aCgnZGF0YS0nKSkge1xuICAgICAgY29uc3Qga2V5ID0gY2FtZWxpemUoYXR0cmlidXRlLnNsaWNlKDUpKTtcbiAgICAgIG5vZGUuYXR0cmlidXRlcy5kYXRhW2tleV0gPSBub2RlLmF0dHJpYnV0ZXNbYXR0cmlidXRlXTtcbiAgICB9XG4gIH1cbiAgZm9yKGNvbnN0IGtleSBpbiBub2RlLmF0dHJpYnV0ZXMuZGF0YSkge1xuICAgIGNvbnN0IGF0dHJpYnV0ZSA9ICdkYXRhLScgKyBrZWJhYml6ZShrZXkpO1xuICAgIG5vZGUuYXR0cmlidXRlc1thdHRyaWJ1dGVdID0gbm9kZS5hdHRyaWJ1dGVzLmRhdGFba2V5XTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7IHRyYW5zZm9ybSwgY2xpZW50OiB0cnVlLCBzZXJ2ZXI6IHRydWUgfSIsIlxuXG5mdW5jdGlvbiBtYXRjaChub2RlKSB7XG4gIHJldHVybiAoXG4gICAgbm9kZSAmJlxuICAgIG5vZGUuYXR0cmlidXRlcyAhPT0gdW5kZWZpbmVkXG4gIClcbn1cblxuZnVuY3Rpb24gdHJhbnNmb3JtKHtub2RlfSkge1xuICBpZighbWF0Y2gobm9kZSkpIHJldHVybjtcbiAgZm9yKGNvbnN0IGF0dHJpYnV0ZSBpbiBub2RlLmF0dHJpYnV0ZXMpIHtcbiAgICBpZihhdHRyaWJ1dGUuc3RhcnRzV2l0aCgnb24nKSAmJiB0eXBlb2Yobm9kZS5hdHRyaWJ1dGVzW2F0dHJpYnV0ZV0pID09PSAnb2JqZWN0Jykge1xuICAgICAgY29uc3QgdGFyZ2V0ID0gbm9kZS5hdHRyaWJ1dGVzLnNvdXJjZTtcbiAgICAgIGNvbnN0IG9iamVjdCA9IG5vZGUuYXR0cmlidXRlc1thdHRyaWJ1dGVdO1xuICAgICAgbm9kZS5hdHRyaWJ1dGVzW2F0dHJpYnV0ZV0gPSAoZnVuY3Rpb24oKSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBvYmplY3QpO1xuICAgICAgfSkuYmluZCh0YXJnZXQpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7IHRyYW5zZm9ybSwgY2xpZW50OiB0cnVlIH0iLCJpbXBvcnQgc2VyaWFsaXplUGFyYW0gZnJvbSAnLi4vc2hhcmVkL3NlcmlhbGl6ZVBhcmFtJztcbmltcG9ydCBzZXJpYWxpemVTZWFyY2ggZnJvbSAnLi4vc2hhcmVkL3NlcmlhbGl6ZVNlYXJjaCc7XG5cbmZ1bmN0aW9uIG1hdGNoKG5vZGUpIHtcbiAgcmV0dXJuIChcbiAgICBub2RlICYmXG4gICAgbm9kZS5hdHRyaWJ1dGVzICYmXG4gICAgKG5vZGUuYXR0cmlidXRlcy5wYXJhbXMgfHwgbm9kZS5hdHRyaWJ1dGVzLnBhdGgpXG4gIClcbn1cblxuZnVuY3Rpb24gdHJhbnNmb3JtKHtub2RlLCByb3V0ZXIsIHBhcmFtc30pIHtcbiAgaWYoIW1hdGNoKG5vZGUpKSByZXR1cm47XG4gIGxldCBzZXJpYWxpemVkUGFyYW1zO1xuICBpZihub2RlLmF0dHJpYnV0ZXMucGFyYW1zKSB7XG4gICAgc2VyaWFsaXplZFBhcmFtcyA9IHt9O1xuICAgIGZvcihjb25zdCBrZXkgaW4gbm9kZS5hdHRyaWJ1dGVzLnBhcmFtcykge1xuICAgICAgc2VyaWFsaXplZFBhcmFtc1trZXldID0gc2VyaWFsaXplUGFyYW0obm9kZS5hdHRyaWJ1dGVzLnBhcmFtc1trZXldKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgc2VyaWFsaXplZFBhcmFtcyA9IHBhcmFtcztcbiAgfVxuICBjb25zdCBzZWFyY2ggPSBzZXJpYWxpemVTZWFyY2goc2VyaWFsaXplZFBhcmFtcyk7XG4gIGNvbnN0IHBhdGggPSBub2RlLmF0dHJpYnV0ZXMucGF0aCB8fCByb3V0ZXIucGF0aDtcbiAgbm9kZS5hdHRyaWJ1dGVzLmhyZWYgPSBwYXRoICsgKHNlYXJjaCA/ICc/JyA6ICcnKSArIHNlYXJjaDtcbiAgZGVsZXRlIG5vZGUuYXR0cmlidXRlcy5wYXRoO1xuICBkZWxldGUgbm9kZS5hdHRyaWJ1dGVzLnBhcmFtcztcbn1cblxuZXhwb3J0IGRlZmF1bHQgeyB0cmFuc2Zvcm0sIGNsaWVudDogdHJ1ZSwgc2VydmVyOiB0cnVlIH0iLCJpbXBvcnQgcm91dGVNYXRjaGVzIGZyb20gJy4uL3NoYXJlZC9yb3V0ZU1hdGNoZXMnO1xuXG5mdW5jdGlvbiBlcmFzZShub2RlKSB7XG4gIG5vZGUudHlwZSA9IGZhbHNlO1xuICBkZWxldGUgbm9kZS5hdHRyaWJ1dGVzO1xuICBkZWxldGUgbm9kZS5jaGlsZHJlbjtcbn1cblxuZnVuY3Rpb24gbWF0Y2gobm9kZSkge1xuICByZXR1cm4gKFxuICAgIG5vZGUgJiYgXG4gICAgbm9kZS5hdHRyaWJ1dGVzICE9PSB1bmRlZmluZWQgJiZcbiAgICBub2RlLmF0dHJpYnV0ZXMucm91dGUgIT09IHVuZGVmaW5lZFxuICApXG59XG5cbmZ1bmN0aW9uIGxvYWQoe3JvdXRlcn0pIHtcbiAgcm91dGVyLl9yb3V0ZXMgPSB7fTtcbiAgaWYoIXJvdXRlci5fb2xkU2VnbWVudHMpIHtcbiAgICByb3V0ZXIuX29sZFNlZ21lbnRzID0ge307XG4gICAgcm91dGVyLl9uZXdTZWdtZW50cyA9IHt9O1xuICB9IGVsc2Uge1xuICAgIHJvdXRlci5fb2xkU2VnbWVudHMgPSByb3V0ZXIuX25ld1NlZ21lbnRzO1xuICAgIHJvdXRlci5fbmV3U2VnbWVudHMgPSB7fTtcbiAgfVxufVxuXG5mdW5jdGlvbiB0cmFuc2Zvcm0oe25vZGUsIGRlcHRoLCByb3V0ZXJ9KSB7XG4gIGlmKCFtYXRjaChub2RlKSkgcmV0dXJuO1xuICBjb25zdCByb3V0ZURlcHRoID0gZGVwdGguc2xpY2UoMCwgLTEpLmpvaW4oJy4nKTtcbiAgaWYocm91dGVyLl9yb3V0ZXNbcm91dGVEZXB0aF0gIT09IHVuZGVmaW5lZCkge1xuICAgIGVyYXNlKG5vZGUpO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHBhcmFtcyA9IHJvdXRlTWF0Y2hlcyhyb3V0ZXIudXJsLCBub2RlLmF0dHJpYnV0ZXMucm91dGUpO1xuICAgIGlmKHBhcmFtcykge1xuICAgICAgcm91dGVyLl9yb3V0ZXNbcm91dGVEZXB0aF0gPSB0cnVlO1xuICAgICAgcm91dGVyLl9uZXdTZWdtZW50c1tyb3V0ZURlcHRoXSA9IHBhcmFtcztcbiAgICAgIE9iamVjdC5hc3NpZ24ocm91dGVyLl9zZWdtZW50cywgcGFyYW1zKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZXJhc2Uobm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHsgbG9hZCwgdHJhbnNmb3JtLCBjbGllbnQ6IHRydWUsIHNlcnZlcjogdHJ1ZSB9IiwiY29uc3QgcmVJU08gPSAvXihcXGR7NH0pLShcXGR7Mn0pLShcXGR7Mn0pVChcXGR7Mn0pOihcXGR7Mn0pOihcXGR7Mn0oPzpcXC5cXGQqKSkoPzpafChcXCt8LSkoW1xcZHw6XSopKT8kLztcbmNvbnN0IHJlTXNBamF4ID0gL15cXC9EYXRlXFwoKGR8LXwuKilcXClbXFwvfFxcXFxdJC87XG5cbmZ1bmN0aW9uIGRhdGVQYXJzZXIoa2V5LCB2YWx1ZSkge1xuICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIGxldCBhID0gcmVJU08uZXhlYyh2YWx1ZSk7XG4gICAgaWYgKGEpIHJldHVybiBuZXcgRGF0ZSh2YWx1ZSk7XG4gICAgYSA9IHJlTXNBamF4LmV4ZWModmFsdWUpO1xuICAgIGlmIChhKSB7XG4gICAgICBjb25zdCBiID0gYVsxXS5zcGxpdCgvWy0rLC5dLyk7XG4gICAgICByZXR1cm4gbmV3IERhdGUoYlswXSA/ICtiWzBdIDogMCAtICtiWzFdKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHZhbHVlO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGVzZXJpYWxpemUoc3RyaW5nKSB7XG4gIHJldHVybiBKU09OLnBhcnNlKHN0cmluZywgZGF0ZVBhcnNlcik7XG59IiwiaW1wb3J0IGZyYWdtZW50IGZyb20gJy4vZnJhZ21lbnQnO1xuXG5mdW5jdGlvbiBmbGF0dGVuQ2hpbGRyZW4oY2hpbGRyZW4pIHtcbiAgY2hpbGRyZW4gPSBbXS5jb25jYXQuYXBwbHkoW10sIGNoaWxkcmVuKS5tYXAoKGNoaWxkKSA9PiB7XG4gICAgaWYoY2hpbGQgPT09IG51bGwgfHwgY2hpbGQgPT09IHVuZGVmaW5lZCkgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiBjaGlsZDtcbiAgfSk7XG4gIHJldHVybiBbXS5jb25jYXQuYXBwbHkoW10sIGNoaWxkcmVuKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZWxlbWVudCh0eXBlLCBwcm9wcywgLi4uY2hpbGRyZW4pIHtcbiAgY2hpbGRyZW4gPSBmbGF0dGVuQ2hpbGRyZW4oY2hpbGRyZW4pO1xuICBpZih0eXBlID09PSAndGV4dGFyZWEnKSB7XG4gICAgY2hpbGRyZW4gPSBbY2hpbGRyZW4uam9pbignJyldO1xuICB9XG4gIGNvbnN0IGF0dHJpYnV0ZXMgPSB7Li4ucHJvcHMsIGNoaWxkcmVufTtcbiAgaWYodHlwZSA9PT0gJ2VsZW1lbnQnKSB7XG4gICAgdHlwZSA9IGF0dHJpYnV0ZXMudGFnIHx8IGZyYWdtZW50O1xuICAgIGRlbGV0ZSBhdHRyaWJ1dGVzLnRhZztcbiAgfVxuICBpZih0eXBlb2YodHlwZSkgPT09ICdmdW5jdGlvbicgJiYgdHlwZS5yZW5kZXIgIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiB7dHlwZSwgYXR0cmlidXRlcywgY2hpbGRyZW46IG51bGx9XG4gIH1cbiAgcmV0dXJuIHt0eXBlLCBhdHRyaWJ1dGVzLCBjaGlsZHJlbn07XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZXh0cmFjdExvY2F0aW9uKG9yaWdpbmFsVXJsKSB7XG4gIGxldCBbdGFyZ2V0LCBoYXNoXSA9IG9yaWdpbmFsVXJsLnNwbGl0KCcjJyk7XG4gIGxldCBbcGF0aCwgc2VhcmNoXSA9IHRhcmdldC5zcGxpdCgnPycpO1xuICBpZihwYXRoICE9PSAnLycgJiYgcGF0aC5lbmRzV2l0aCgnLycpKSB7XG4gICAgcGF0aCA9IHBhdGguc3Vic3RyaW5nKDAsIHBhdGgubGVuZ3RoIC0gMSk7XG4gIH1cbiAgbGV0IHVybCA9IHBhdGg7XG4gIGlmKHNlYXJjaCkge1xuICAgIHVybCArPSAnPycgKyBzZWFyY2g7XG4gIH1cbiAgbGV0IHVybFdpdGhIYXNoID0gdXJsO1xuICBpZihoYXNoKSB7XG4gICAgdXJsV2l0aEhhc2ggKz0gJyMnICsgaGFzaDtcbiAgfVxuICBpZihoYXNoID09PSB1bmRlZmluZWQpIHtcbiAgICBoYXNoID0gJyc7XG4gIH1cbiAgcmV0dXJuIHtwYXRoLCBzZWFyY2gsIHVybCwgdXJsV2l0aEhhc2gsIGhhc2h9O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGV4dHJhY3RQYXJhbVZhbHVlKHZhbHVlKSB7XG4gIGlmKHZhbHVlID09PSAndHJ1ZScpIHJldHVybiB0cnVlO1xuICBpZiAodmFsdWUgPT09ICdmYWxzZScpIHJldHVybiBmYWxzZTtcbiAgcmV0dXJuIHZhbHVlID8gZGVjb2RlVVJJQ29tcG9uZW50KHZhbHVlLnJlcGxhY2UoL1xcKy9nLCAnICcpKSA6ICcnO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZyYWdtZW50KHtjaGlsZHJlbn0pIHtcbiAgcmV0dXJuIGNoaWxkcmVuO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdlbmVyYXRlS2V5KGRlcHRoKSB7XG4gIGlmKGRlcHRoLmxlbmd0aCA9PT0gMSkgcmV0dXJuICdhcHBsaWNhdGlvbic7XG4gIHJldHVybiAnbi0nICsgZGVwdGguam9pbignLScpO1xufSIsImltcG9ydCBnZW5lcmF0ZUtleSBmcm9tICcuLi9zaGFyZWQvZ2VuZXJhdGVLZXknO1xuaW1wb3J0IHtpc0NsYXNzLCBpc0ZhbHNlLCBpc0Z1bmN0aW9ufSBmcm9tICcuLi9zaGFyZWQvbm9kZXMnO1xuaW1wb3J0IHt0cmFuc2Zvcm1Ob2Rlc30gZnJvbSAnLi9wbHVnaW5zJztcblxuYXN5bmMgZnVuY3Rpb24gZ2VuZXJhdGVCcmFuY2gocGFyZW50LCBub2RlLCBkZXB0aCwgc2NvcGUpIHtcblxuICB0cmFuc2Zvcm1Ob2RlcyhzY29wZSwgbm9kZSwgZGVwdGgpO1xuXG4gIGlmKGlzRmFsc2Uobm9kZSkpIHtcbiAgICBwYXJlbnQuY2hpbGRyZW4ucHVzaChmYWxzZSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYoaXNDbGFzcyhub2RlKSkge1xuICAgIGNvbnN0IGtleSA9IG5vZGUuYXR0cmlidXRlcy5rZXkgfHwgZ2VuZXJhdGVLZXkoZGVwdGgpO1xuICAgIGlmKFxuICAgICAgc2NvcGUuY29udGV4dC5lbnZpcm9ubWVudC5jbGllbnQgJiYgXG4gICAgICBzY29wZS5jb250ZXh0LnJvdXRlci5fY2hhbmdlZCAmJlxuICAgICAgbm9kZS5hdHRyaWJ1dGVzICYmIFxuICAgICAgbm9kZS5hdHRyaWJ1dGVzLnJvdXRlICYmIFxuICAgICAgc2NvcGUuY29udGV4dC5lbnZpcm9ubWVudC5tb2RlICE9PSAnc3NnJ1xuICAgICkge1xuICAgICAgY29uc3Qgcm91dGVEZXB0aCA9IGRlcHRoLnNsaWNlKDAsIC0xKS5qb2luKCcuJyk7XG4gICAgICBjb25zdCBuZXdTZWdtZW50cyA9IHNjb3BlLmNvbnRleHQucm91dGVyLl9uZXdTZWdtZW50c1tyb3V0ZURlcHRoXTtcbiAgICAgIGlmKG5ld1NlZ21lbnRzKSB7XG4gICAgICAgIGNvbnN0IG9sZFNlZ21lbnRzID0gc2NvcGUuY29udGV4dC5yb3V0ZXIuX29sZFNlZ21lbnRzW3JvdXRlRGVwdGhdO1xuICAgICAgICBmb3IoY29uc3Qgc2VnbWVudCBpbiBuZXdTZWdtZW50cykge1xuICAgICAgICAgIGlmKG9sZFNlZ21lbnRzW3NlZ21lbnRdICE9PSBuZXdTZWdtZW50c1tzZWdtZW50XSkge1xuICAgICAgICAgICAgZGVsZXRlIHNjb3BlLm1lbW9yeVtrZXldO1xuICAgICAgICAgICAgZGVsZXRlIHNjb3BlLmluc3RhbmNlc1trZXldO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gIFxuICAgIGNvbnN0IGluc3RhbmNlID0gc2NvcGUuaW5zdGFuY2VzW2tleV0gfHwgbmV3IG5vZGUudHlwZShzY29wZSk7XG4gICAgaW5zdGFuY2UuX3NlbGYua2V5ID0ga2V5O1xuICAgIGluc3RhbmNlLl9hdHRyaWJ1dGVzID0gbm9kZS5hdHRyaWJ1dGVzO1xuICAgIGluc3RhbmNlLl9zY29wZSA9IHNjb3BlO1xuICAgIGxldCBtZW1vcnk7XG4gICAgaWYoc2NvcGUubWVtb3J5KSB7XG4gICAgICBtZW1vcnkgPSBzY29wZS5tZW1vcnlba2V5XTtcbiAgICAgIGlmKG1lbW9yeSkge1xuICAgICAgICBpbnN0YW5jZS5fc2VsZi5pbml0aWF0ZWQgPSB0cnVlO1xuICAgICAgICBPYmplY3QuYXNzaWduKGluc3RhbmNlLCBtZW1vcnkpO1xuICAgICAgICBkZWxldGUgc2NvcGUubWVtb3J5W2tleV07XG4gICAgICB9XG4gICAgfVxuICAgIGxldCBzaG91bGRIeWRyYXRlID0gZmFsc2U7XG4gICAgY29uc3Qgc2hvdWxkUHJlcGFyZSA9IHNjb3BlLmluc3RhbmNlc1trZXldID09PSB1bmRlZmluZWQ7XG4gICAgc2NvcGUuaW5zdGFuY2VzW2tleV0gPSBpbnN0YW5jZTtcbiAgICBpZihzaG91bGRQcmVwYXJlKSB7XG4gICAgICBpZihtZW1vcnkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpbnN0YW5jZS5wcmVwYXJlICYmIGluc3RhbmNlLnByZXBhcmUoKTtcbiAgICAgICAgaWYoc2NvcGUuY29udGV4dC5lbnZpcm9ubWVudC5zZXJ2ZXIpIHtcbiAgICAgICAgICBpbnN0YW5jZS5pbml0aWF0ZSAmJiBhd2FpdCBpbnN0YW5jZS5pbml0aWF0ZSgpO1xuICAgICAgICAgIGluc3RhbmNlLl9zZWxmLmluaXRpYXRlZCA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2NvcGUuaW5pdGlhdGlvblF1ZXVlLnB1c2goaW5zdGFuY2UpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBzaG91bGRIeWRyYXRlID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKHNjb3BlLmh5ZHJhdGlvblF1ZXVlKSB7XG4gICAgICBpZihzaG91bGRIeWRyYXRlKSB7XG4gICAgICAgIHNjb3BlLmh5ZHJhdGlvblF1ZXVlLnB1c2goaW5zdGFuY2UpO1xuICAgICAgfSBlbHNlIGlmKGluc3RhbmNlLl9zZWxmLmluaXRpYXRlZCA9PSB0cnVlKSB7XG4gICAgICAgIGluc3RhbmNlLnVwZGF0ZSAmJiBpbnN0YW5jZS51cGRhdGUoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYoc2NvcGUuY29udGV4dC5lbnZpcm9ubWVudC5jbGllbnQpIHtcbiAgICAgIHNjb3BlLnJlbmV3YWxRdWV1ZS5wdXNoKGluc3RhbmNlKTtcbiAgICB9XG4gICAgY29uc3QgY2hpbGRyZW4gPSBpbnN0YW5jZS5yZW5kZXIoKTtcbiAgICBpZihjaGlsZHJlbiAmJiBjaGlsZHJlbi50eXBlKSB7XG4gICAgICBjaGlsZHJlbi5pbnN0YW5jZSA9IGluc3RhbmNlO1xuICAgIH1cbiAgICBub2RlLmNoaWxkcmVuID0gW10uY29uY2F0KGNoaWxkcmVuKTtcbiAgICBmb3IobGV0IGk9MDsgaTxub2RlLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhd2FpdCBnZW5lcmF0ZUJyYW5jaChwYXJlbnQsIG5vZGUuY2hpbGRyZW5baV0sIFsuLi5kZXB0aCwgaV0sIHNjb3BlKTtcbiAgICB9XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYoaXNGdW5jdGlvbihub2RlKSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSBub2RlLnR5cGUubmFtZSA/IHNjb3BlLmdlbmVyYXRlQ29udGV4dChub2RlLmF0dHJpYnV0ZXMpIDogbm9kZS5hdHRyaWJ1dGVzO1xuICAgIGNvbnN0IGNoaWxkcmVuID0gbm9kZS50eXBlKGNvbnRleHQpO1xuICAgIG5vZGUuY2hpbGRyZW4gPSBbXS5jb25jYXQoY2hpbGRyZW4pO1xuICAgIGZvcihsZXQgaT0wOyBpPG5vZGUuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGF3YWl0IGdlbmVyYXRlQnJhbmNoKHBhcmVudCwgbm9kZS5jaGlsZHJlbltpXSwgWy4uLmRlcHRoLCBpXSwgc2NvcGUpO1xuICAgIH1cbiAgICByZXR1cm47XG4gIH1cblxuICBpZihub2RlLnR5cGUpIHtcbiAgICBjb25zdCBicmFuY2ggPSB7XG4gICAgICB0eXBlOiBub2RlLnR5cGUsXG4gICAgICBhdHRyaWJ1dGVzOiBub2RlLmF0dHJpYnV0ZXMgfHwge30sXG4gICAgICBpbnN0YW5jZTogbm9kZS5pbnN0YW5jZSxcbiAgICAgIGNoaWxkcmVuOiBbXVxuICAgIH1cbiAgICBpZihub2RlLmNoaWxkcmVuKSB7XG4gICAgICBmb3IobGV0IGk9MDsgaTxub2RlLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGF3YWl0IGdlbmVyYXRlQnJhbmNoKGJyYW5jaCwgbm9kZS5jaGlsZHJlbltpXSwgWy4uLmRlcHRoLCBpXSwgc2NvcGUpO1xuICAgICAgfVxuICAgIH1cbiAgICBwYXJlbnQuY2hpbGRyZW4ucHVzaChicmFuY2gpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHBhcmVudC5jaGlsZHJlbi5wdXNoKG5vZGUpO1xuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGdlbmVyYXRlVHJlZShub2RlLCBzY29wZSkge1xuICBjb25zdCB0cmVlID0ge3R5cGU6ICdkaXYnLCBhdHRyaWJ1dGVzOiB7aWQ6ICdhcHBsaWNhdGlvbid9LCBjaGlsZHJlbjogW119O1xuICBhd2FpdCBnZW5lcmF0ZUJyYW5jaCh0cmVlLCBub2RlLCBbMF0sIHNjb3BlKTtcbiAgcmV0dXJuIHRyZWU7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0UHJveHlhYmxlTWV0aG9kcyh0YXJnZXQpIHtcbiAgbGV0IHByb3BlcnRpZXMgPSBuZXcgU2V0KCk7XG4gIGxldCBjdXJyZW50ID0gdGFyZ2V0O1xuICBkbyB7XG4gICAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoY3VycmVudCkubWFwKG5hbWUgPT4gcHJvcGVydGllcy5hZGQobmFtZSkpXG4gIH0gd2hpbGUgKChjdXJyZW50ID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKGN1cnJlbnQpKSAmJiBjdXJyZW50ICE9IE9iamVjdC5wcm90b3R5cGUpXG4gIHJldHVybiBbLi4ucHJvcGVydGllcy5rZXlzKCldLmZpbHRlcigobmFtZSkgPT4ge1xuICAgIHJldHVybiBuYW1lICE9PSAnY29uc3RydWN0b3InICYmIHR5cGVvZiB0YXJnZXRbbmFtZV0gPT09ICdmdW5jdGlvbicgJiYgIW5hbWUuc3RhcnRzV2l0aCgnXycpICYmICF0YXJnZXRbbmFtZV0ubmFtZS5zdGFydHNXaXRoKCdfJylcbiAgfSk7XG59IiwiaW1wb3J0IGV4dHJhY3RQYXJhbVZhbHVlIGZyb20gJy4vZXh0cmFjdFBhcmFtVmFsdWUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRRdWVyeVN0cmluZ1BhcmFtcyh1cmwpIHtcbiAgY29uc3QgW3BhdGgsIHF1ZXJ5XSA9IHVybC5zcGxpdCgnPycpO1xuICBpZihxdWVyeSkge1xuICAgIHJldHVybiBxdWVyeS5zcGxpdCgnJicpLnJlZHVjZSgocGFyYW1zLCBwYXJhbSkgPT4ge1xuICAgICAgbGV0IFtrZXksIHZhbHVlXSA9IHBhcmFtLnNwbGl0KCc9Jyk7XG4gICAgICBwYXJhbXNba2V5XSA9IGV4dHJhY3RQYXJhbVZhbHVlKHZhbHVlKTtcbiAgICAgIHJldHVybiBwYXJhbXM7XG4gICAgfSwge30pO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB7fTtcbiAgfVxufTsiLCJleHBvcnQgZnVuY3Rpb24gaXNGYWxzZShub2RlKSB7XG4gIGlmKG5vZGUgPT09IHVuZGVmaW5lZCB8fCBub2RlID09PSBudWxsIHx8IG5vZGUgPT09IGZhbHNlKSByZXR1cm4gdHJ1ZTtcbiAgaWYodHlwZW9mKG5vZGUpICE9PSAnb2JqZWN0JykgcmV0dXJuIGZhbHNlO1xuICByZXR1cm4gbm9kZS50eXBlID09PSB1bmRlZmluZWQgfHwgbm9kZS50eXBlID09PSBudWxsIHx8IG5vZGUudHlwZSA9PT0gZmFsc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0NsYXNzKG5vZGUpIHtcbiAgcmV0dXJuIHR5cGVvZihub2RlLnR5cGUpID09PSAnZnVuY3Rpb24nICYmIG5vZGUudHlwZS5wcm90b3R5cGUgJiYgdHlwZW9mKG5vZGUudHlwZS5wcm90b3R5cGUucmVuZGVyKSA9PT0gJ2Z1bmN0aW9uJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRnVuY3Rpb24obm9kZSkge1xuICByZXR1cm4gdHlwZW9mKG5vZGUudHlwZSkgPT09ICdmdW5jdGlvbic7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1RleHQobm9kZSkge1xuICByZXR1cm4gdHlwZW9mKG5vZGUuY2hpbGRyZW4pID09PSAndW5kZWZpbmVkJztcbn0iLCJpbXBvcnQgcm91dGFibGUgZnJvbSAnLi4vcGx1Z2lucy9yb3V0YWJsZSc7XG5pbXBvcnQgYmluZGFibGUgZnJvbSAnLi4vcGx1Z2lucy9iaW5kYWJsZSc7XG5pbXBvcnQgZGF0YWJsZSBmcm9tICcuLi9wbHVnaW5zL2RhdGFibGUnO1xuaW1wb3J0IHBhcmFtZXRlcml6YWJsZSBmcm9tICcuLi9wbHVnaW5zL3BhcmFtZXRlcml6YWJsZSc7XG5pbXBvcnQgYW5jaG9yYWJsZSBmcm9tICcuLi9wbHVnaW5zL2FuY2hvcmFibGUnO1xuaW1wb3J0IG9iamVjdGFibGUgZnJvbSAnLi4vcGx1Z2lucy9vYmplY3RhYmxlJztcblxubGV0IHBsdWdpbnMgPSBbXG4gIG9iamVjdGFibGUsXG4gIHBhcmFtZXRlcml6YWJsZSxcbiAgYW5jaG9yYWJsZSxcbiAgcm91dGFibGUsXG4gIGRhdGFibGUsXG4gIGJpbmRhYmxlXG5dO1xuXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtTm9kZXMoc2NvcGUsIG5vZGUsIGRlcHRoKSB7XG4gIGZvcihjb25zdCBwbHVnaW4gb2YgcGx1Z2lucykge1xuICAgIHBsdWdpbi50cmFuc2Zvcm0oey4uLnNjb3BlLmNvbnRleHQsIG5vZGUsIGRlcHRofSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRQbHVnaW5zKHNjb3BlKSB7XG4gIGZvcihjb25zdCBwbHVnaW4gb2YgcGx1Z2lucykge1xuICAgIHBsdWdpbi5sb2FkICYmIHBsdWdpbi5sb2FkKHNjb3BlLmNvbnRleHQpXG4gIH1cbiAgcmV0dXJuIHBsdWdpbnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VQbHVnaW5zKGVudmlyb25tZW50KSB7XG4gIHJldHVybiBhc3luYyAoLi4udXNlclBsdWdpbnMpID0+IHtcbiAgICBwbHVnaW5zID0gW1xuICAgICAgLi4ubmV3IFNldChbLi4udXNlclBsdWdpbnMuZmxhdCgpLCAuLi5wbHVnaW5zXSlcbiAgICBdLmZpbHRlcigocGx1Z2luKSA9PiBwbHVnaW5bZW52aXJvbm1lbnRdKVxuICB9XG59IiwiY29uc3QgcHJlZml4ID0gJ251bGxzdGFjayc7XG5cbmV4cG9ydCBkZWZhdWx0IHByZWZpeDsiLCJpbXBvcnQgZXh0cmFjdExvY2F0aW9uIGZyb20gJy4uL3NoYXJlZC9leHRyYWN0TG9jYXRpb24nO1xuaW1wb3J0IGV4dHJhY3RQYXJhbVZhbHVlIGZyb20gJy4vZXh0cmFjdFBhcmFtVmFsdWUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByb3V0ZU1hdGNoZXModXJsLCByb3V0ZSkge1xuICBsZXQge3BhdGh9ID0gZXh0cmFjdExvY2F0aW9uKHVybCk7XG4gIGNvbnN0IHVybFBhdGhzID0gcGF0aC5zcGxpdCgnLycpO1xuICBjb25zdCByb3V0ZVBhdGhzID0gcm91dGUuc3BsaXQoJy8nKTtcbiAgY29uc3QgcGFyYW1zID0ge307XG4gIGNvbnN0IGxlbmd0aCA9IE1hdGgubWF4KHVybFBhdGhzLmxlbmd0aCwgcm91dGVQYXRocy5sZW5ndGgpO1xuICBsZXQgY2F0Y2hhbGwgPSBmYWxzZTtcbiAgZm9yKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgaWYoY2F0Y2hhbGwpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH0gZWxzZSBpZiAocm91dGVQYXRoc1tpXSA9PT0gJyonKSB7XG4gICAgICBjYXRjaGFsbCA9IHRydWU7XG4gICAgfSBlbHNlIGlmIChyb3V0ZVBhdGhzW2ldICYmIHJvdXRlUGF0aHNbaV0uc3RhcnRzV2l0aCgnOicpKSB7XG4gICAgICBjb25zdCBrZXkgPSByb3V0ZVBhdGhzW2ldLnJlcGxhY2UoJzonLCAnJylcbiAgICAgIHBhcmFtc1trZXldID0gZXh0cmFjdFBhcmFtVmFsdWUodXJsUGF0aHNbaV0pO1xuICAgIH0gZWxzZSBpZiAocm91dGVQYXRoc1tpXSAhPT0gdXJsUGF0aHNbaV0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHBhcmFtcztcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXJpYWxpemVQYXJhbSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgJiYgdmFsdWUudG9KU09OICE9PSB1bmRlZmluZWQgPyB2YWx1ZS50b0pTT04oKSA6IHZhbHVlO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNlcmlhbGl6ZVNlYXJjaChwYXJhbXMpIHtcbiAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHBhcmFtcyk7XG4gIHJldHVybiBrZXlzLm1hcCgoa2V5KSA9PiB7XG4gICAgaWYocGFyYW1zW2tleV0gPT09IGZhbHNlIHx8ICEhcGFyYW1zW2tleV0pIHtcbiAgICAgIHJldHVybiBgJHtrZXl9PSR7cGFyYW1zW2tleV19YDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgfSkuZmlsdGVyKChzZWdtZW50KSA9PiAhIXNlZ21lbnQpLmpvaW4oJyYnKTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBjYW1lbGl6ZShrZXkpIHtcbiAgcmV0dXJuIGtleS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1teYS16QS1aMC05XSsoLikvZywgKG0sIGNocikgPT4gY2hyLnRvVXBwZXJDYXNlKCkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24ga2ViYWJpemUoa2V5KSB7XG4gIHJldHVybiBrZXkucmVwbGFjZSgvKFthLXowLTldfCg/PVtBLVpdKSkoW0EtWl0pL2csICckMS0kMicpLnRvTG93ZXJDYXNlKCk7XG59OyIsImltcG9ydCBOdWxsc3RhY2sgZnJvbSAnbnVsbHN0YWNrJztcbmltcG9ydCAnLi9BcHBsaWNhdGlvbi5zY3NzJztcbi8vIGNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKVxuXG5jbGFzcyBBcHBsaWNhdGlvbiBleHRlbmRzIE51bGxzdGFjayB7XG5cbiAgc3RhdGljIGhhc2ggPSAnODhhNjBkODM3MTliYTJlZTVjZDMyNGUzNjMxNTY4NGYnO1xuXG4gIHVzZXJzID0gW11cblxuICBwcmVwYXJlKHsgcGFnZSB9KSB7XG4gICAgcGFnZS5sb2NhbGUgPSAncHQtQlInO1xuICB9XG5cbiAgZ2V0VXNlcnMgPSBOdWxsc3RhY2suaW52b2tlKCdnZXRVc2VycycsICc4OGE2MGQ4MzcxOWJhMmVlNWNkMzI0ZTM2MzE1Njg0ZicpO1xuXG4gIGFzeW5jIGh5ZHJhdGUoKSB7XG4gICAgdGhpcy51c2VycyA9IGF3YWl0IHRoaXMuZ2V0VXNlcnMoKTtcbiAgfVxuXG4gIHJlbmRlckhlYWQoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxoZWFkPlxuICAgICAgXG4gICAgICA8L2hlYWQ+IFxuICAgIClcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBIZWFkID0gdGhpcy5yZW5kZXJIZWFkO1xuICAgIHJldHVybiAoXG4gICAgICA8bWFpbj5cbiAgICAgICAgPEhlYWQgLz5cbiAgICAgICAge3RoaXMudXNlcnN9XG4gICAgICA8L21haW4+XG4gICAgKVxuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwbGljYXRpb247IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7OztBQ0hBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1ZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzVFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFWQTtBQVlBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7QUMzQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBQUE7QUFMQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXREQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUNBO0FBREE7Ozs7Ozs7Ozs7OztBQ3ZDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQWxCQTtBQW9CQTs7Ozs7Ozs7Ozs7O0FDeEJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQzFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3BCQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWpCQTtBQUNBO0FBa0JBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7O0FDNUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBRkE7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBWkE7QUFjQTtBQUVBOzs7Ozs7Ozs7Ozs7QUMxQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBYkE7QUFlQTtBQUFBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7QUNwQ0E7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7QUNOQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7OztBQ2pFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3SUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQU9BO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFoRkE7QUFDQTtBQWtGQTtBQUVBOzs7Ozs7Ozs7Ozs7QUNoR0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNQQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7OztBQ0xBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNSQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBVEE7QUFXQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBUkE7QUFVQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7QUN0RUE7QUFBQTtBQUFBO0FBRUE7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQUE7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7QUN2REE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDdEJBO0FBQUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7OztBQ3RCQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDN0JBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDNUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEJBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN4QkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xCQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDSkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBT0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3JIQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNUQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7Ozs7Ozs7Ozs7OztBQ2JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNoQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQVNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ25DQTtBQUFBO0FBRUE7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN2QkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDRkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNUQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFqQ0E7QUFDQTtBQURBO0FBQ0E7QUFtQ0E7Ozs7Ozs7Ozs7O0FDeENBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=