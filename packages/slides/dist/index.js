/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var head = document.getElementsByTagName('head')[0];
/******/ 				var script = document.createElement('script');
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = __webpack_require__.p + "" + chunkId + ".index.js";
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				function onScriptComplete(event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							var error = new Error('Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')');
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	__webpack_require__.p = "dist/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../node_modules/callbag-basics-esmodules/dist/bundle.umd.js":
/*!**********************************************************************************************************!*\
  !*** /home/fughye/workspace/slides-vanilla-way/node_modules/callbag-basics-esmodules/dist/bundle.umd.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("(function (global, factory) {\n\t true ? factory(exports) :\n\tundefined;\n}(this, (function (exports) { 'use strict';\n\nvar forEach = function forEach(operation) {\n  return function (source) {\n    var talkback = void 0;\n    source(0, function (t, d) {\n      if (t === 0) talkback = d;\n      if (t === 1) operation(d);\n      if (t === 1 || t === 0) talkback(1);\n    });\n  };\n};\n\nvar fromObs = function fromObs(observable) {\n  return function (start, sink) {\n    if (start !== 0) return;\n    var dispose = void 0;\n    sink(0, function (t) {\n      if (t === 2 && dispose) {\n        dispose();\n      }\n    });\n    dispose = observable.subscribe({\n      next: function next(x) {\n        return sink(1, x);\n      },\n      error: function error(e) {\n        return sink(2, e);\n      },\n      complete: function complete() {\n        return sink(2);\n      }\n    });\n  };\n};\n\nvar fromIter = function fromIter(iter) {\n  return function (start, sink) {\n    if (start !== 0) return;\n    var iterator = typeof Symbol !== 'undefined' && iter[Symbol.iterator] ? iter[Symbol.iterator]() : iter;\n    var inloop = false;\n    var got1 = false;\n    var res = void 0;\n    function loop() {\n      inloop = true;\n      while (got1) {\n        got1 = false;\n        res = iterator.next();\n        if (res.done) sink(2);else sink(1, res.value);\n      }\n      inloop = false;\n    }\n    sink(0, function (t) {\n      if (t === 1) {\n        got1 = true;\n        if (!inloop && !(res && res.done)) loop();\n      }\n    });\n  };\n};\n\nvar fromEvent = function fromEvent(node, name) {\n  return function (start, sink) {\n    if (start !== 0) return;\n    var handler = function handler(ev) {\n      return sink(1, ev);\n    };\n    sink(0, function (t) {\n      if (t === 2) node.removeEventListener(name, handler);\n    });\n    node.addEventListener(name, handler);\n  };\n};\n\nvar fromPromise = function fromPromise(promise) {\n  return function (start, sink) {\n    if (start !== 0) return;\n    var ended = false;\n    var onfulfilled = function onfulfilled(val) {\n      if (ended) return;\n      sink(1, val);\n      sink(2);\n    };\n    var onrejected = function onrejected(err) {\n      if (ended) return;\n      sink(2, err);\n    };\n    promise.then(onfulfilled, onrejected);\n    sink(0, function (t) {\n      if (t === 2) ended = true;\n    });\n  };\n};\n\nvar interval = function interval(period) {\n  return function (start, sink) {\n    if (start !== 0) return;\n    var i = 0;\n    var id = setInterval(function () {\n      sink(1, i++);\n    }, period);\n    sink(0, function (t) {\n      if (t === 2) clearInterval(id);\n    });\n  };\n};\n\nvar map = function map(f) {\n  return function (source) {\n    return function (start, sink) {\n      if (start !== 0) return;\n      source(0, function (t, d) {\n        sink(t, t === 1 ? f(d) : d);\n      });\n    };\n  };\n};\n\nfunction scan(reducer, seed) {\n  var hasAcc = arguments.length === 2;\n  return function (source) {\n    return function (start, sink) {\n      if (start !== 0) return;\n      var acc = seed;\n      source(0, function (t, d) {\n        if (t === 1) {\n          acc = hasAcc ? reducer(acc, d) : (hasAcc = true, d);\n          sink(1, acc);\n        } else sink(t, d);\n      });\n    };\n  };\n}\n\nvar flatten = function flatten(source) {\n  return function (start, sink) {\n    if (start !== 0) return;\n    var exists = function exists(x) {\n      return typeof x !== 'undefined';\n    };\n    var absent = function absent(x) {\n      return typeof x === 'undefined';\n    };\n    var noop = function noop() {};\n    var outerEnded = false;\n    var outerTalkback = void 0;\n    var innerTalkback = void 0;\n    function talkback(t) {\n      if (t === 1) (innerTalkback || outerTalkback || noop)(1);\n      if (t === 2) {\n        innerTalkback && innerTalkback(2);\n        outerTalkback && outerTalkback(2);\n      }\n    }\n    source(0, function (T, D) {\n      if (T === 0) {\n        outerTalkback = D;\n        sink(0, talkback);\n      } else if (T === 1) {\n        var innerSource = D;\n        if (innerTalkback) innerTalkback(2);\n        innerSource(0, function (t, d) {\n          if (t === 0) {\n            innerTalkback = d;\n            innerTalkback(1);\n          } else if (t === 1) sink(1, d);else if (t === 2 && absent(d)) {\n            if (outerEnded) sink(2);else {\n              innerTalkback = void 0;\n              outerTalkback(1);\n            }\n          } else if (t === 2 && exists(d)) sink(2, d);\n        });\n      } else if (T === 2 && absent(D)) {\n        if (!innerTalkback) sink(2);else outerEnded = true;\n      } else if (T === 2 && exists(D)) sink(2, D);\n    });\n  };\n};\n\nvar take = function take(max) {\n  return function (source) {\n    return function (start, sink) {\n      if (start !== 0) return;\n      var taken = 0;\n      var sourceTalkback = void 0;\n      function talkback(t, d) {\n        if (taken < max) sourceTalkback(t, d);\n      }\n      source(0, function (t, d) {\n        if (t === 0) {\n          sourceTalkback = d;\n          sink(0, talkback);\n        } else if (t === 1) {\n          if (taken < max) {\n            taken++;\n            sink(t, d);\n            if (taken === max) {\n              sink(2);\n              sourceTalkback(2);\n            }\n          }\n        } else {\n          sink(t, d);\n        }\n      });\n    };\n  };\n};\n\nvar skip = function skip(max) {\n  return function (source) {\n    return function (start, sink) {\n      if (start !== 0) return;\n      var skipped = 0;\n      var talkback = void 0;\n      source(0, function (t, d) {\n        if (t === 0) {\n          talkback = d;\n          sink(t, d);\n        } else if (t === 1) {\n          if (skipped < max) {\n            skipped++;\n            talkback(1);\n          } else sink(t, d);\n        } else {\n          sink(t, d);\n        }\n      });\n    };\n  };\n};\n\nvar filter = function filter(condition) {\n  return function (source) {\n    return function (start, sink) {\n      if (start !== 0) return;\n      var talkback = void 0;\n      source(0, function (t, d) {\n        if (t === 0) {\n          talkback = d;\n          sink(t, d);\n        } else if (t === 1) {\n          if (condition(d)) sink(t, d);else talkback(1);\n        } else sink(t, d);\n      });\n    };\n  };\n};\n\nfunction merge() {\n  for (var _len = arguments.length, sources = Array(_len), _key = 0; _key < _len; _key++) {\n    sources[_key] = arguments[_key];\n  }\n\n  return function (start, sink) {\n    if (start !== 0) return;\n    var n = sources.length;\n    var sourceTalkbacks = Array(n);\n    var startCount = 0;\n    var endCount = 0;\n    var talkback = function talkback(t) {\n      if (t !== 2) return;\n      for (var i = 0; i < n; i++) {\n        sourceTalkbacks[i](2);\n      }\n    };\n\n    var _loop = function _loop(i) {\n      sources[i](0, function (t, d) {\n        if (t === 0) {\n          sourceTalkbacks[i] = d;\n          if (++startCount === n) sink(0, talkback);\n        } else if (t === 2) {\n          if (++endCount === n) sink(2);\n        } else sink(t, d);\n      });\n    };\n\n    for (var i = 0; i < n; i++) {\n      _loop(i);\n    }\n  };\n}\n\nvar concat = function concat() {\n  for (var _len = arguments.length, sources = Array(_len), _key = 0; _key < _len; _key++) {\n    sources[_key] = arguments[_key];\n  }\n\n  return function (start, sink) {\n    if (start !== 0) return;\n    var n = sources.length;\n    if (n === 0) {\n      sink(0, function () {});\n      sink(2);\n      return;\n    }\n    var i = 0;\n    var sourceTalkback = void 0;\n    var talkback = function talkback(t, d) {\n      if (t === 1 || t === 2) {\n        sourceTalkback(t, d);\n      }\n    };\n    (function next() {\n      if (i === n) {\n        sink(2);\n        return;\n      }\n      sources[i](0, function (t, d) {\n        if (t === 0) {\n          sourceTalkback = d;\n          if (i === 0) sink(0, talkback);else sourceTalkback(1);\n        } else if (t === 1) {\n          sink(1, d);\n        } else if (t === 2) {\n          i++;\n          next();\n        }\n      });\n    })();\n  };\n};\n\nvar EMPTY = {};\n\nvar combine = function combine() {\n  for (var _len = arguments.length, sources = Array(_len), _key = 0; _key < _len; _key++) {\n    sources[_key] = arguments[_key];\n  }\n\n  return function (start, sink) {\n    if (start !== 0) return;\n    var n = sources.length;\n    if (n === 0) {\n      sink(0, function () {});\n      sink(1, []);\n      sink(2);\n      return;\n    }\n    var Ns = n; // start counter\n    var Nd = n; // data counter\n    var Ne = n; // end counter\n    var vals = Array(n);\n    var sourceTalkbacks = Array(n);\n    var talkback = function talkback(t, d) {\n      if (t !== 2) return;\n      for (var i = 0; i < n; i++) {\n        sourceTalkbacks[i](2);\n      }\n    };\n    sources.forEach(function (source, i) {\n      vals[i] = EMPTY;\n      source(0, function (t, d) {\n        if (t === 0) {\n          sourceTalkbacks[i] = d;\n          if (--Ns === 0) sink(0, talkback);\n        } else if (t === 1) {\n          var _Nd = !Nd ? 0 : vals[i] === EMPTY ? --Nd : Nd;\n          vals[i] = d;\n          if (_Nd === 0) {\n            var arr = Array(n);\n            for (var j = 0; j < n; ++j) {\n              arr[j] = vals[j];\n            }sink(1, arr);\n          }\n        } else if (t === 2) {\n          if (--Ne === 0) sink(2);\n        } else {\n          sink(t, d);\n        }\n      });\n    });\n  };\n};\n\nvar share = function share(source) {\n  var sinks = [];\n  var sourceTalkback = void 0;\n  return function shared(start, sink) {\n    if (start !== 0) return;\n    sinks.push(sink);\n    if (sinks.length === 1) {\n      source(0, function (t, d) {\n        if (t === 0) sourceTalkback = d;else {\n          var _iteratorNormalCompletion = true;\n          var _didIteratorError = false;\n          var _iteratorError = undefined;\n\n          try {\n            for (var _iterator = sinks.slice(0)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n              var s = _step.value;\n              s(t, d);\n            }\n          } catch (err) {\n            _didIteratorError = true;\n            _iteratorError = err;\n          } finally {\n            try {\n              if (!_iteratorNormalCompletion && _iterator.return) {\n                _iterator.return();\n              }\n            } finally {\n              if (_didIteratorError) {\n                throw _iteratorError;\n              }\n            }\n          }\n        }if (t === 2) sinks = [];\n      });\n    }\n    sink(0, function (t, d) {\n      if (t === 0) return;\n      if (t === 2) {\n        var i = sinks.indexOf(sink);\n        if (i > -1) sinks.splice(i, 1);\n        if (!sinks.length) sourceTalkback(2);\n      } else {\n        sourceTalkback(t, d);\n      }\n    });\n  };\n};\n\nfunction pipe() {\n  for (var _len = arguments.length, cbs = Array(_len), _key = 0; _key < _len; _key++) {\n    cbs[_key] = arguments[_key];\n  }\n\n  var res = cbs[0];\n  for (var i = 1, n = cbs.length; i < n; i++) {\n    res = cbs[i](res);\n  }return res;\n}\n\nexports.forEach = forEach;\nexports.fromObs = fromObs;\nexports.fromIter = fromIter;\nexports.fromEvent = fromEvent;\nexports.fromPromise = fromPromise;\nexports.interval = interval;\nexports.map = map;\nexports.scan = scan;\nexports.flatten = flatten;\nexports.take = take;\nexports.skip = skip;\nexports.filter = filter;\nexports.merge = merge;\nexports.concat = concat;\nexports.combine = combine;\nexports.share = share;\nexports.pipe = pipe;\n\nObject.defineProperty(exports, '__esModule', { value: true });\n\n})));\n\n\n//# sourceURL=webpack:////home/fughye/workspace/slides-vanilla-way/node_modules/callbag-basics-esmodules/dist/bundle.umd.js?");

/***/ }),

/***/ "../../node_modules/callbag-observe/index.js":
/*!***************************************************************************************!*\
  !*** /home/fughye/workspace/slides-vanilla-way/node_modules/callbag-observe/index.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const observe = operation => source => {\n  source(0, (t, d) => {\n    if (t === 1) operation(d);\n  });\n}\n\nmodule.exports = observe;\n\n\n//# sourceURL=webpack:////home/fughye/workspace/slides-vanilla-way/node_modules/callbag-observe/index.js?");

/***/ }),

/***/ "../../node_modules/callbag-sample-when/dist/callbag-sample-when.es.js":
/*!*****************************************************************************************************************!*\
  !*** /home/fughye/workspace/slides-vanilla-way/node_modules/callbag-sample-when/dist/callbag-sample-when.es.js ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction sampleWhen(sampler) {\n  return function (listenable) {\n    return function (start, sink) {\n      if (start !== 0) return;\n      var inited = false;\n      var value;\n      var listenableTalkback;\n      var samplerTalkback;\n      listenable(0, function (type, data) {\n        if (type === 0) {\n          listenableTalkback = data;\n          sampler(0, function (type, data) {\n            if (type === 0) {\n              samplerTalkback = data;\n              return;\n            }\n\n            if (type === 1 && inited) {\n              sink(1, value);\n              return;\n            }\n\n            if (type === 2) {\n              listenableTalkback(2);\n              sink(2);\n              return;\n            }\n          });\n          sink(0, function (end) {\n            if (end !== 2) return;\n            listenableTalkback(2);\n            samplerTalkback(2);\n          });\n          return;\n        }\n\n        if (type === 1) {\n          inited = true;\n          value = data;\n          return;\n        }\n\n        if (type === 2) {\n          samplerTalkback(2);\n          sink(2);\n          return;\n        }\n      });\n    };\n  };\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (sampleWhen);\n\n\n//# sourceURL=webpack:////home/fughye/workspace/slides-vanilla-way/node_modules/callbag-sample-when/dist/callbag-sample-when.es.js?");

/***/ }),

/***/ "../custom-elements/dist/index.js":
/*!****************************************!*\
  !*** ../custom-elements/dist/index.js ***!
  \****************************************/
/*! exports provided: HTMLElement, define, whenDefined */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HTMLElement\", function() { return HTMLElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"define\", function() { return define; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"whenDefined\", function() { return whenDefined; });\nvar loader = void 0;\n\nif (\"customElements\" in window) {\n  //Native CE requires a shim to work with ES5 classes\n  loader = __webpack_require__.e(/*! import() */ 0).then(function() { var module = __webpack_require__(/*! @webcomponents/webcomponentsjs/custom-elements-es5-adapter.js */ \"../../node_modules/@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js\"); return typeof module === \"object\" && module && module.__esModule ? module : Object.assign({/* fake namespace object */}, typeof module === \"object\" && module, { \"default\": module }); });\n} else {\n  loader = __webpack_require__.e(/*! import() */ 1).then(function() { var module = __webpack_require__(/*! @webcomponents/custom-elements */ \"../../node_modules/@webcomponents/custom-elements/custom-elements.min.js\"); return typeof module === \"object\" && module && module.__esModule ? module : Object.assign({/* fake namespace object */}, typeof module === \"object\" && module, { \"default\": module }); });\n}\n\n//A series of proxies to let us instantly create our CE\nvar HTMLElement = function HTMLElement() {\n  return window.HTMLElement.call(this);\n};\n\nHTMLElement.prototype = window.HTMLElement.prototype;\n\nvar define = function define(tagName, CustomElement, options) {\n  return loader.then(function () {\n    customElements.define(tagName, CustomElement, options);\n  });\n};\n\nvar whenDefined = function whenDefined(tagName) {\n  return loader.then(function () {\n    return customElements.whenDefined(tagName);\n  });\n};\n\n\n\n//# sourceURL=webpack:///../custom-elements/dist/index.js?");

/***/ }),

/***/ "./src/Deck.js":
/*!*********************!*\
  !*** ./src/Deck.js ***!
  \*********************/
/*! exports provided: isSlide, Deck */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isSlide\", function() { return isSlide; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Deck\", function() { return Deck; });\n/* harmony import */ var my_custom_elements_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! my-custom-elements-loader */ \"../custom-elements/dist/index.js\");\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n\nvar isSlide = function isSlide(el) {\n  return el instanceof Slide;\n};\n\nvar toggle = function toggle(el, name, value) {\n  el.classList.toggle(name, !!value);\n};\n\nvar Deck = function (_HTMLElement) {\n  _inherits(Deck, _HTMLElement);\n\n  function Deck() {\n    _classCallCheck(this, Deck);\n\n    return _possibleConstructorReturn(this, (Deck.__proto__ || Object.getPrototypeOf(Deck)).apply(this, arguments));\n  }\n\n  _createClass(Deck, [{\n    key: \"slides\",\n    get: function get() {\n      return Array.from(this.children);\n    }\n  }, {\n    key: \"length\",\n    get: function get() {\n      return this.slides.length;\n    }\n  }, {\n    key: \"active\",\n    get: function get() {\n      return this.slides.findIndex(function (slide) {\n        return slide.classList.contains(\"active\");\n      });\n    },\n    set: function set(value) {\n      if (value < 0 || value >= this.length) return;\n\n      this.slides.forEach(function (slide, i) {\n        toggle(slide, \"active\", i === value);\n        toggle(slide, \"prev\", i === value - 1);\n        toggle(slide, \"next\", i === value + 1);\n      });\n    }\n  }], [{\n    key: \"is\",\n    get: function get() {\n      return \"x-deck\";\n    }\n  }]);\n\n  return Deck;\n}(my_custom_elements_loader__WEBPACK_IMPORTED_MODULE_0__[\"HTMLElement\"]);\n\nObject(my_custom_elements_loader__WEBPACK_IMPORTED_MODULE_0__[\"define\"])(Deck.is, Deck);\n\n//# sourceURL=webpack:///./src/Deck.js?");

/***/ }),

/***/ "./src/Progress.js":
/*!*************************!*\
  !*** ./src/Progress.js ***!
  \*************************/
/*! exports provided: Progress */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Progress\", function() { return Progress; });\n/* harmony import */ var my_custom_elements_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! my-custom-elements-loader */ \"../custom-elements/dist/index.js\");\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n\n\nvar Progress = function (_HTMLElement) {\n  _inherits(Progress, _HTMLElement);\n\n  function Progress() {\n    _classCallCheck(this, Progress);\n\n    return _possibleConstructorReturn(this, (Progress.__proto__ || Object.getPrototypeOf(Progress)).apply(this, arguments));\n  }\n\n  _createClass(Progress, [{\n    key: \"percentage\",\n    set: function set(value) {\n      this.style.setProperty(\"--progress\", value);\n    },\n    get: function get() {\n      return parseFloat(this.style.getPropertyValue(\"--progress\"));\n    }\n  }], [{\n    key: \"is\",\n    get: function get() {\n      return 'x-progress';\n    }\n  }]);\n\n  return Progress;\n}(my_custom_elements_loader__WEBPACK_IMPORTED_MODULE_0__[\"HTMLElement\"]);\n\nObject(my_custom_elements_loader__WEBPACK_IMPORTED_MODULE_0__[\"define\"])(Progress.is, Progress);\n\n//# sourceURL=webpack:///./src/Progress.js?");

/***/ }),

/***/ "./src/Slide.js":
/*!**********************!*\
  !*** ./src/Slide.js ***!
  \**********************/
/*! exports provided: isSlide, Slide */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isSlide\", function() { return isSlide; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Slide\", function() { return Slide; });\n/* harmony import */ var my_custom_elements_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! my-custom-elements-loader */ \"../custom-elements/dist/index.js\");\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n\nvar isSlide = function isSlide(el) {\n  return el instanceof Slide;\n};\n\nvar toggle = function toggle(el, name, value) {\n  el.classList.toggle(name, !!value);\n};\n\nvar Slide = function (_HTMLElement) {\n  _inherits(Slide, _HTMLElement);\n\n  function Slide() {\n    _classCallCheck(this, Slide);\n\n    return _possibleConstructorReturn(this, (Slide.__proto__ || Object.getPrototypeOf(Slide)).apply(this, arguments));\n  }\n\n  _createClass(Slide, [{\n    key: \"fragments\",\n    get: function get() {\n      return Array.from(this.querySelectorAll(\".fragment\"));\n    }\n  }, {\n    key: \"active\",\n    get: function get() {\n      return this.fragments.map(function (fragment) {\n        return fragment.classList.contains(\"active\");\n      }).lastIndexOf(true);\n    },\n    set: function set(value) {\n      this.fragments.forEach(function (fragment, i) {\n        fragment.classList.toggle(\"active\", i <= value);\n      });\n    }\n  }], [{\n    key: \"is\",\n    get: function get() {\n      return \"x-slide\";\n    }\n  }]);\n\n  return Slide;\n}(my_custom_elements_loader__WEBPACK_IMPORTED_MODULE_0__[\"HTMLElement\"]);\n\nObject(my_custom_elements_loader__WEBPACK_IMPORTED_MODULE_0__[\"define\"])(Slide.is, Slide);\n\n//# sourceURL=webpack:///./src/Slide.js?");

/***/ }),

/***/ "./src/emit.js":
/*!*********************!*\
  !*** ./src/emit.js ***!
  \*********************/
/*! exports provided: emit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"emit\", function() { return emit; });\nfunction emit(el, name, detail) {\n  var _ref = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {},\n      bubbles = _ref.bubbles,\n      cancelable = _ref.cancelable;\n\n  var eventOptions = {\n    bubbles: bubbles || true,\n    cancelable: cancelable || false,\n    detail: detail\n  };\n\n  var evt = void 0;\n\n  if (\"composed\" in CustomEvent.prototype) {\n    evt = new CustomEvent(name, eventOptions);\n  } else {\n    evt = document.createEvent(\"CustomEvent\");\n    EventTarget.initCustomEvent(name, eventOptions.bubbles, eventOptions.cancelable, detail);\n    Object.defineProperty(evt, \"composed\", { value: eventOptions.composed });\n  }\n\n  return el.dispatchEvent(evt);\n}\n\n//# sourceURL=webpack:///./src/emit.js?");

/***/ }),

/***/ "./src/example/AnimatedMessage.js":
/*!****************************************!*\
  !*** ./src/example/AnimatedMessage.js ***!
  \****************************************/
/*! exports provided: AnimatedMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AnimatedMessage\", function() { return AnimatedMessage; });\n/* harmony import */ var my_custom_elements_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! my-custom-elements-loader */ \"../custom-elements/dist/index.js\");\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n\n\nvar AnimatedMessage = function (_HTMLElement) {\n  _inherits(AnimatedMessage, _HTMLElement);\n\n  function AnimatedMessage(_ref) {\n    var message = _ref.message,\n        x = _ref.x,\n        y = _ref.y,\n        className = _ref.className,\n        duration = _ref.duration;\n\n    _classCallCheck(this, AnimatedMessage);\n\n    var _this = _possibleConstructorReturn(this, (AnimatedMessage.__proto__ || Object.getPrototypeOf(AnimatedMessage)).call(this));\n\n    _this.textContent = message;\n    _this.style.top = y + \"px\";\n    _this.style.left = x + \"px\";\n    _this.className = className;\n    _this.duration = duration;\n    return _this;\n  }\n\n  _createClass(AnimatedMessage, [{\n    key: \"connectedCallback\",\n    value: function connectedCallback() {\n      var _this2 = this;\n\n      //Autodestroy\n      setTimeout(function () {\n        _this2.remove();\n      }, this.duration);\n    }\n  }]);\n\n  return AnimatedMessage;\n}(my_custom_elements_loader__WEBPACK_IMPORTED_MODULE_0__[\"HTMLElement\"]);\n\nAnimatedMessage.is = \"animated-message\";\nObject(my_custom_elements_loader__WEBPACK_IMPORTED_MODULE_0__[\"define\"])(AnimatedMessage.is, AnimatedMessage);\n\n//# sourceURL=webpack:///./src/example/AnimatedMessage.js?");

/***/ }),

/***/ "./src/example/BasicMole.js":
/*!**********************************!*\
  !*** ./src/example/BasicMole.js ***!
  \**********************************/
/*! exports provided: BasicMole */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BasicMole\", function() { return BasicMole; });\n/* harmony import */ var my_custom_elements_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! my-custom-elements-loader */ \"../custom-elements/dist/index.js\");\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n\n\nvar MIN_TIME = 500;\nvar MAX_TIME = 3000;\n\nfunction randomTime(min, max) {\n  return Math.round(Math.random() * (max - min) + min);\n}\n\nvar BasicMole = function (_HTMLElement) {\n  _inherits(BasicMole, _HTMLElement);\n\n  //Called on element creation\n  function BasicMole() {\n    _classCallCheck(this, BasicMole);\n\n    //To create the endless random-interval loop\n    var _this = _possibleConstructorReturn(this, (BasicMole.__proto__ || Object.getPrototypeOf(BasicMole)).call(this));\n\n    _this.addEventListener('animationend', function () {\n      _this.classList.remove(\"up\");\n      _this._goUp();\n    });\n    return _this;\n  }\n\n  _createClass(BasicMole, [{\n    key: \"_goUp\",\n    value: function _goUp() {\n      var _this2 = this;\n\n      setTimeout(function () {\n        _this2.classList.add(\"up\");\n      }, randomTime(MIN_TIME, MAX_TIME));\n    }\n\n    //Called when element is attached to the document\n\n  }, {\n    key: \"connectedCallback\",\n    value: function connectedCallback() {\n      this._goUp();\n    }\n  }]);\n\n  return BasicMole;\n}(my_custom_elements_loader__WEBPACK_IMPORTED_MODULE_0__[\"HTMLElement\"]);\n\nBasicMole.is = \"a-basic-mole\";\nObject(my_custom_elements_loader__WEBPACK_IMPORTED_MODULE_0__[\"define\"])(BasicMole.is, BasicMole);\n\n//# sourceURL=webpack:///./src/example/BasicMole.js?");

/***/ }),

/***/ "./src/example/Lives.js":
/*!******************************!*\
  !*** ./src/example/Lives.js ***!
  \******************************/
/*! exports provided: Lives */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Lives\", function() { return Lives; });\n/* harmony import */ var my_custom_elements_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! my-custom-elements-loader */ \"../custom-elements/dist/index.js\");\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n\n\nvar Lives = function (_HTMLElement) {\n  _inherits(Lives, _HTMLElement);\n\n  function Lives() {\n    _classCallCheck(this, Lives);\n\n    return _possibleConstructorReturn(this, (Lives.__proto__ || Object.getPrototypeOf(Lives)).apply(this, arguments));\n  }\n\n  _createClass(Lives, [{\n    key: \"value\",\n    get: function get() {\n      return this.querySelectorAll('.heart').length;\n    },\n    set: function set(value) {\n      this.innerHTML = Array.apply(null, Array(value)).map(function () {\n        return '<i class=\"heart\"></i>';\n      }).join('');\n    }\n  }]);\n\n  return Lives;\n}(my_custom_elements_loader__WEBPACK_IMPORTED_MODULE_0__[\"HTMLElement\"]);\n\nLives.is = \"lives-count\";\nObject(my_custom_elements_loader__WEBPACK_IMPORTED_MODULE_0__[\"define\"])(Lives.is, Lives);\n\n//# sourceURL=webpack:///./src/example/Lives.js?");

/***/ }),

/***/ "./src/example/Mole.js":
/*!*****************************!*\
  !*** ./src/example/Mole.js ***!
  \*****************************/
/*! exports provided: Mole */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Mole\", function() { return Mole; });\n/* harmony import */ var my_custom_elements_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! my-custom-elements-loader */ \"../custom-elements/dist/index.js\");\n/* harmony import */ var _emit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../emit */ \"./src/emit.js\");\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n\n\n\nvar MIN_TIME = 500;\nvar MAX_TIME = 7000;\n\nfunction randomTime(min, max) {\n  return Math.round(Math.random() * (max - min) + min);\n}\n\nvar Mole = function (_HTMLElement) {\n  _inherits(Mole, _HTMLElement);\n\n  function Mole() {\n    _classCallCheck(this, Mole);\n\n    var _this = _possibleConstructorReturn(this, (Mole.__proto__ || Object.getPrototypeOf(Mole)).call(this));\n\n    _this._hit = false;\n    _this._start = false;\n    _this._timeout = null;\n\n\n    _this.addEventListener('click', function () {\n      if (!_this.isHittable) return;\n\n      Object(_emit__WEBPACK_IMPORTED_MODULE_1__[\"emit\"])(_this, \"hit!\");\n      _this._hit = true;\n    });\n\n    _this.addEventListener('animationend', function () {\n      if (_this.isHittable) Object(_emit__WEBPACK_IMPORTED_MODULE_1__[\"emit\"])(_this, \"miss!\");\n\n      _this._hit = false;\n      _this.classList.remove(\"up\");\n\n      if (_this._active) _this._goUp();\n    });\n    return _this;\n  }\n\n  _createClass(Mole, [{\n    key: \"_goUp\",\n    value: function _goUp() {\n      var _this2 = this;\n\n      this._timeout = setTimeout(function () {\n        _this2.classList.add(\"up\");\n      }, randomTime(MIN_TIME, MAX_TIME));\n    }\n  }, {\n    key: \"start\",\n    value: function start() {\n      this._active = true;\n      this._goUp();\n    }\n  }, {\n    key: \"stop\",\n    value: function stop() {\n      this._active = false;\n      clearTimeout(this._timeout);\n    }\n  }, {\n    key: \"isHittable\",\n    get: function get() {\n      return this.classList.contains(\"up\") && !this._hit && this._active;\n    }\n  }]);\n\n  return Mole;\n}(my_custom_elements_loader__WEBPACK_IMPORTED_MODULE_0__[\"HTMLElement\"]);\n\nMole.is = \"a-mole\";\nObject(my_custom_elements_loader__WEBPACK_IMPORTED_MODULE_0__[\"define\"])(Mole.is, Mole);\n\n//# sourceURL=webpack:///./src/example/Mole.js?");

/***/ }),

/***/ "./src/example/ScoreBoard.js":
/*!***********************************!*\
  !*** ./src/example/ScoreBoard.js ***!
  \***********************************/
/*! exports provided: ScoreBoard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ScoreBoard\", function() { return ScoreBoard; });\n/* harmony import */ var my_custom_elements_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! my-custom-elements-loader */ \"../custom-elements/dist/index.js\");\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n\n\nvar ScoreBoard = function (_HTMLElement) {\n  _inherits(ScoreBoard, _HTMLElement);\n\n  function ScoreBoard() {\n    _classCallCheck(this, ScoreBoard);\n\n    return _possibleConstructorReturn(this, (ScoreBoard.__proto__ || Object.getPrototypeOf(ScoreBoard)).apply(this, arguments));\n  }\n\n  _createClass(ScoreBoard, [{\n    key: \"value\",\n    get: function get() {\n      return parseInt(this.textContent.trim(), 10);\n    },\n    set: function set(value) {\n      this.textContent = value;\n    }\n  }]);\n\n  return ScoreBoard;\n}(my_custom_elements_loader__WEBPACK_IMPORTED_MODULE_0__[\"HTMLElement\"]);\n\nScoreBoard.is = \"score-board\";\nObject(my_custom_elements_loader__WEBPACK_IMPORTED_MODULE_0__[\"define\"])(ScoreBoard.is, ScoreBoard);\n\n//# sourceURL=webpack:///./src/example/ScoreBoard.js?");

/***/ }),

/***/ "./src/example/callbag-simple-whack.js":
/*!*********************************************!*\
  !*** ./src/example/callbag-simple-whack.js ***!
  \*********************************************/
/*! exports provided: callbagWhack */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"callbagWhack\", function() { return callbagWhack; });\n/* harmony import */ var callbag_basics_esmodules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! callbag-basics-esmodules */ \"../../node_modules/callbag-basics-esmodules/dist/bundle.umd.js\");\n/* harmony import */ var callbag_basics_esmodules__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(callbag_basics_esmodules__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var callbag_observe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! callbag-observe */ \"../../node_modules/callbag-observe/index.js\");\n/* harmony import */ var callbag_observe__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(callbag_observe__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var callbag_sample_when__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! callbag-sample-when */ \"../../node_modules/callbag-sample-when/dist/callbag-sample-when.es.js\");\n/* harmony import */ var _AnimatedMessage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AnimatedMessage */ \"./src/example/AnimatedMessage.js\");\n/* harmony import */ var _miss_message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./miss-message */ \"./src/example/miss-message.js\");\n/* harmony import */ var _hit_message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hit-message */ \"./src/example/hit-message.js\");\n\n\n\n\n\n\n\nvar makeLoseMessage = function makeLoseMessage() {\n  return new _AnimatedMessage__WEBPACK_IMPORTED_MODULE_3__[\"AnimatedMessage\"]({\n    message: \"Looser!\",\n    className: \"lose-message\",\n    duration: 3000\n  });\n};\n\nfunction callbagWhack(el) {\n  var score = el.querySelector(\".score\");\n  var lives = el.querySelector(\".lives\");\n  var moles = [].slice.call(el.querySelectorAll(\"a-mole\"));\n\n  Object(callbag_basics_esmodules__WEBPACK_IMPORTED_MODULE_0__[\"pipe\"])(Object(callbag_basics_esmodules__WEBPACK_IMPORTED_MODULE_0__[\"fromEvent\"])(el.querySelector(\".start\"), \"click\"), callbag_observe__WEBPACK_IMPORTED_MODULE_1___default()(function () {\n    moles.forEach(function (mole) {\n      return mole.start();\n    });\n    score.value = 0;\n    lives.value = 3;\n  }));\n\n  Object(callbag_basics_esmodules__WEBPACK_IMPORTED_MODULE_0__[\"pipe\"])(Object(callbag_basics_esmodules__WEBPACK_IMPORTED_MODULE_0__[\"fromEvent\"])(el, \"hit!\"), callbag_observe__WEBPACK_IMPORTED_MODULE_1___default()(function () {\n    score.value += 1;\n  }));\n\n  Object(callbag_basics_esmodules__WEBPACK_IMPORTED_MODULE_0__[\"pipe\"])(Object(callbag_basics_esmodules__WEBPACK_IMPORTED_MODULE_0__[\"fromEvent\"])(el, \"miss!\"), callbag_observe__WEBPACK_IMPORTED_MODULE_1___default()(function () {\n    lives.value -= 1;\n\n    if (!lives.value) {\n      moles.forEach(function (mole) {\n        return mole.stop();\n      });\n      el.appendChild(makeLoseMessage());\n    }\n  }));\n\n  Object(_miss_message__WEBPACK_IMPORTED_MODULE_4__[\"missMessage\"])(el);\n  Object(_hit_message__WEBPACK_IMPORTED_MODULE_5__[\"hitMessage\"])(el);\n}\n\n//# sourceURL=webpack:///./src/example/callbag-simple-whack.js?");

/***/ }),

/***/ "./src/example/hit-message.js":
/*!************************************!*\
  !*** ./src/example/hit-message.js ***!
  \************************************/
/*! exports provided: hitMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hitMessage\", function() { return hitMessage; });\n/* harmony import */ var callbag_basics_esmodules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! callbag-basics-esmodules */ \"../../node_modules/callbag-basics-esmodules/dist/bundle.umd.js\");\n/* harmony import */ var callbag_basics_esmodules__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(callbag_basics_esmodules__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var callbag_observe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! callbag-observe */ \"../../node_modules/callbag-observe/index.js\");\n/* harmony import */ var callbag_observe__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(callbag_observe__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var callbag_sample_when__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! callbag-sample-when */ \"../../node_modules/callbag-sample-when/dist/callbag-sample-when.es.js\");\n/* harmony import */ var _AnimatedMessage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AnimatedMessage */ \"./src/example/AnimatedMessage.js\");\n\n\n\n\n\nvar makeHitMessage = function makeHitMessage(_ref) {\n  var x = _ref.x,\n      y = _ref.y;\n  return new _AnimatedMessage__WEBPACK_IMPORTED_MODULE_3__[\"AnimatedMessage\"]({\n    message: \"Hit!\",\n    className: \"hit-message\",\n    duration: 1000,\n    x: x,\n    y: y\n  });\n};\n\nfunction hitMessage(el) {\n  Object(callbag_basics_esmodules__WEBPACK_IMPORTED_MODULE_0__[\"pipe\"])(Object(callbag_basics_esmodules__WEBPACK_IMPORTED_MODULE_0__[\"fromEvent\"])(el, \"mousemove\"), Object(callbag_sample_when__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Object(callbag_basics_esmodules__WEBPACK_IMPORTED_MODULE_0__[\"fromEvent\"])(el, \"hit!\")), Object(callbag_basics_esmodules__WEBPACK_IMPORTED_MODULE_0__[\"map\"])(function (_ref2) {\n    var clientX = _ref2.clientX,\n        clientY = _ref2.clientY;\n    return { x: clientX, y: clientY };\n  }), callbag_observe__WEBPACK_IMPORTED_MODULE_1___default()(function (coords) {\n    el.appendChild(makeHitMessage(coords));\n  }));\n}\n\n//# sourceURL=webpack:///./src/example/hit-message.js?");

/***/ }),

/***/ "./src/example/index.js":
/*!******************************!*\
  !*** ./src/example/index.js ***!
  \******************************/
/*! exports provided: startExample1, startExample2, startExample3, startExample4, startExample4b, startExample5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"startExample1\", function() { return startExample1; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"startExample2\", function() { return startExample2; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"startExample3\", function() { return startExample3; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"startExample4\", function() { return startExample4; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"startExample4b\", function() { return startExample4b; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"startExample5\", function() { return startExample5; });\n/* harmony import */ var _BasicMole__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BasicMole */ \"./src/example/BasicMole.js\");\n/* harmony import */ var _Mole__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Mole */ \"./src/example/Mole.js\");\n/* harmony import */ var _ScoreBoard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ScoreBoard */ \"./src/example/ScoreBoard.js\");\n/* harmony import */ var _Lives__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Lives */ \"./src/example/Lives.js\");\n/* harmony import */ var _simple_whack__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./simple-whack */ \"./src/example/simple-whack.js\");\n/* harmony import */ var _scored_whack__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scored-whack */ \"./src/example/scored-whack.js\");\n/* harmony import */ var _callbag_simple_whack__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./callbag-simple-whack */ \"./src/example/callbag-simple-whack.js\");\n/* harmony import */ var _miss_message__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./miss-message */ \"./src/example/miss-message.js\");\n/* harmony import */ var _hit_message__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./hit-message */ \"./src/example/hit-message.js\");\n\n\n\n\n\n\n\n\n\n\nfunction startExample1(deck) {}\n\nfunction startExample2(deck) {\n  Object(_simple_whack__WEBPACK_IMPORTED_MODULE_4__[\"simpleWhack\"])(deck.querySelector(\".example2\"));\n}\n\nfunction startExample3(deck) {}\n\nfunction startExample4(deck) {\n  Object(_miss_message__WEBPACK_IMPORTED_MODULE_7__[\"missMessage\"])(deck.querySelector(\".example4\"));\n  deck.querySelector(\".example4 a-mole\").start();\n}\n\nfunction startExample4b(deck) {\n  Object(_hit_message__WEBPACK_IMPORTED_MODULE_8__[\"hitMessage\"])(deck.querySelector(\".example4b\"));\n  deck.querySelector(\".example4b a-mole\").start();\n}\n\nfunction startExample5(deck) {\n  Object(_callbag_simple_whack__WEBPACK_IMPORTED_MODULE_6__[\"callbagWhack\"])(deck.querySelector(\".example5\"));\n}\n\n//# sourceURL=webpack:///./src/example/index.js?");

/***/ }),

/***/ "./src/example/miss-message.js":
/*!*************************************!*\
  !*** ./src/example/miss-message.js ***!
  \*************************************/
/*! exports provided: missMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"missMessage\", function() { return missMessage; });\n/* harmony import */ var callbag_basics_esmodules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! callbag-basics-esmodules */ \"../../node_modules/callbag-basics-esmodules/dist/bundle.umd.js\");\n/* harmony import */ var callbag_basics_esmodules__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(callbag_basics_esmodules__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var callbag_observe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! callbag-observe */ \"../../node_modules/callbag-observe/index.js\");\n/* harmony import */ var callbag_observe__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(callbag_observe__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _AnimatedMessage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AnimatedMessage */ \"./src/example/AnimatedMessage.js\");\n\n\n\n\nvar makeMissMessage = function makeMissMessage(_ref) {\n  var x = _ref.x,\n      y = _ref.y;\n  return new _AnimatedMessage__WEBPACK_IMPORTED_MODULE_2__[\"AnimatedMessage\"]({\n    message: \"Miss!\",\n    className: \"hit-message miss\",\n    duration: 1000,\n    x: x,\n    y: y\n  });\n};\n\nvar getRectCenter = function getRectCenter(rect) {\n  return {\n    x: (rect.left + rect.right) / 2,\n    y: (rect.top + rect.bottom) / 2\n  };\n};\n\nfunction missMessage(el) {\n  Object(callbag_basics_esmodules__WEBPACK_IMPORTED_MODULE_0__[\"pipe\"])(Object(callbag_basics_esmodules__WEBPACK_IMPORTED_MODULE_0__[\"fromEvent\"])(el, \"miss!\"), Object(callbag_basics_esmodules__WEBPACK_IMPORTED_MODULE_0__[\"map\"])(function (_ref2) {\n    var target = _ref2.target;\n    return target.getBoundingClientRect();\n  }), Object(callbag_basics_esmodules__WEBPACK_IMPORTED_MODULE_0__[\"map\"])(function (rect) {\n    return getRectCenter(rect);\n  }), callbag_observe__WEBPACK_IMPORTED_MODULE_1___default()(function (coords) {\n    el.appendChild(makeMissMessage(coords));\n  }));\n}\n\n//# sourceURL=webpack:///./src/example/miss-message.js?");

/***/ }),

/***/ "./src/example/scored-whack.js":
/*!*************************************!*\
  !*** ./src/example/scored-whack.js ***!
  \*************************************/
/*! exports provided: scoredWhack */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"scoredWhack\", function() { return scoredWhack; });\n\nfunction scoredWhack(el) {\n    var score = el.querySelector('.score');\n    var lives = el.querySelector('.lives');\n    var moles = [].slice.call(el.querySelectorAll('a-mole'));\n\n    el.querySelector('.start').addEventListener('click', function () {\n        moles.forEach(function (mole) {\n            return mole.start();\n        });\n        score.value = 0;\n        lives.value = 3;\n    });\n\n    el.addEventListener('hit!', function () {\n        score.value += 1;\n    });\n\n    el.addEventListener('miss!', function () {\n        lives.value -= 1;\n\n        if (!lives.value) {\n            moles.forEach(function (mole) {\n                return mole.stop();\n            });\n        }\n    });\n}\n\n//# sourceURL=webpack:///./src/example/scored-whack.js?");

/***/ }),

/***/ "./src/example/simple-whack.js":
/*!*************************************!*\
  !*** ./src/example/simple-whack.js ***!
  \*************************************/
/*! exports provided: simpleWhack */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"simpleWhack\", function() { return simpleWhack; });\n\nfunction simpleWhack(el) {\n    var points = 0;\n    var livesCount = 3;\n    var score = el.querySelector('.score');\n    var lives = el.querySelector('.lives');\n    var moles = [].slice.call(el.querySelectorAll('a-mole'));\n\n    el.querySelector('.start').addEventListener('click', function () {\n        moles.forEach(function (mole) {\n            return mole.start();\n        });\n        points = 0;\n        livesCount = 3;\n    });\n\n    el.addEventListener('hit!', function () {\n        score.textContent = ++points;\n    });\n\n    el.addEventListener('miss!', function () {\n        lives.textContent = --livesCount;\n\n        if (!livesCount) {\n            moles.forEach(function (mole) {\n                return mole.stop();\n            });\n        }\n    });\n}\n\n//# sourceURL=webpack:///./src/example/simple-whack.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var my_custom_elements_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! my-custom-elements-loader */ \"../custom-elements/dist/index.js\");\n/* harmony import */ var _presentation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./presentation */ \"./src/presentation.js\");\n/* harmony import */ var _example__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./example */ \"./src/example/index.js\");\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n\n\n\n\nvar App = function (_HTMLElement) {\n  _inherits(App, _HTMLElement);\n\n  function App() {\n    _classCallCheck(this, App);\n\n    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));\n  }\n\n  _createClass(App, [{\n    key: \"connectedCallback\",\n    value: function connectedCallback() {\n      Object(_presentation__WEBPACK_IMPORTED_MODULE_1__[\"presentation\"])(this);\n\n      //Examples\n      Object(_example__WEBPACK_IMPORTED_MODULE_2__[\"startExample1\"])(this);\n      Object(_example__WEBPACK_IMPORTED_MODULE_2__[\"startExample2\"])(this);\n      Object(_example__WEBPACK_IMPORTED_MODULE_2__[\"startExample3\"])(this);\n      Object(_example__WEBPACK_IMPORTED_MODULE_2__[\"startExample4\"])(this);\n      Object(_example__WEBPACK_IMPORTED_MODULE_2__[\"startExample4b\"])(this);\n      Object(_example__WEBPACK_IMPORTED_MODULE_2__[\"startExample5\"])(this);\n    }\n  }]);\n\n  return App;\n}(my_custom_elements_loader__WEBPACK_IMPORTED_MODULE_0__[\"HTMLElement\"]);\n\nApp.is = \"my-presentation\";\n\n\nObject(my_custom_elements_loader__WEBPACK_IMPORTED_MODULE_0__[\"define\"])(App.is, App);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/presentation.js":
/*!*****************************!*\
  !*** ./src/presentation.js ***!
  \*****************************/
/*! exports provided: presentation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"presentation\", function() { return presentation; });\n/* harmony import */ var callbag_observe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! callbag-observe */ \"../../node_modules/callbag-observe/index.js\");\n/* harmony import */ var callbag_observe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(callbag_observe__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var callbag_basics_esmodules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! callbag-basics-esmodules */ \"../../node_modules/callbag-basics-esmodules/dist/bundle.umd.js\");\n/* harmony import */ var callbag_basics_esmodules__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(callbag_basics_esmodules__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Deck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Deck */ \"./src/Deck.js\");\n/* harmony import */ var _Progress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Progress */ \"./src/Progress.js\");\n/* harmony import */ var _Slide__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Slide */ \"./src/Slide.js\");\n\n\n\n\n\n\nvar fromArrowKeyDown = function fromArrowKeyDown(el) {\n  return Object(callbag_basics_esmodules__WEBPACK_IMPORTED_MODULE_1__[\"pipe\"])(Object(callbag_basics_esmodules__WEBPACK_IMPORTED_MODULE_1__[\"fromEvent\"])(el, \"keydown\"), Object(callbag_basics_esmodules__WEBPACK_IMPORTED_MODULE_1__[\"map\"])(function (evt) {\n    return evt.key;\n  }), Object(callbag_basics_esmodules__WEBPACK_IMPORTED_MODULE_1__[\"filter\"])(function (key) {\n    return key.indexOf(\"Arrow\") === 0;\n  }), Object(callbag_basics_esmodules__WEBPACK_IMPORTED_MODULE_1__[\"map\"])(function (key) {\n    return key === \"ArrowRight\" || key === \"ArrowUp\" ? 1 : -1;\n  }));\n};\n\nvar fromEnterKeyDown = function fromEnterKeyDown(el) {\n  return Object(callbag_basics_esmodules__WEBPACK_IMPORTED_MODULE_1__[\"pipe\"])(Object(callbag_basics_esmodules__WEBPACK_IMPORTED_MODULE_1__[\"fromEvent\"])(el, \"keydown\"), Object(callbag_basics_esmodules__WEBPACK_IMPORTED_MODULE_1__[\"map\"])(function (evt) {\n    return evt.key;\n  }), Object(callbag_basics_esmodules__WEBPACK_IMPORTED_MODULE_1__[\"filter\"])(function (key) {\n    return key === \"Enter\";\n  }), Object(callbag_basics_esmodules__WEBPACK_IMPORTED_MODULE_1__[\"map\"])(function () {\n    return 1;\n  }));\n};\n\nvar fromKeyboard = function fromKeyboard(el) {\n  return Object(callbag_basics_esmodules__WEBPACK_IMPORTED_MODULE_1__[\"merge\"])(fromArrowKeyDown(el), fromEnterKeyDown(el));\n};\n\nvar activeSlide = function activeSlide(deck) {\n  return deck.slides[deck.active];\n};\nvar inFragmentsRange = function inFragmentsRange(slide, modifier) {\n  return slide.active + modifier >= -1 && slide.active + modifier < slide.fragments.length;\n};\n\nvar presentation = function presentation(el) {\n  var deck = el.querySelector(\"x-deck\");\n  var progress = el.querySelector(\"x-progress\");\n  var initialSlide = location.hash.slice(1) || deck.active;\n\n  deck.active = Math.max(parseInt(initialSlide, 10), 0);\n\n  Object(callbag_basics_esmodules__WEBPACK_IMPORTED_MODULE_1__[\"pipe\"])(fromKeyboard(document), callbag_observe__WEBPACK_IMPORTED_MODULE_0___default()(function (modifier) {\n    var slide = activeSlide(deck);\n    if (inFragmentsRange(slide, modifier)) {\n      slide.active += modifier;\n    } else {\n      deck.active += modifier;\n      progress.percentage = deck.active / (deck.length - 1);\n      location.hash = deck.active;\n    }\n  }));\n};\n\n//# sourceURL=webpack:///./src/presentation.js?");

/***/ })

/******/ });