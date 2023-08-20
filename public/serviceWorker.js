// node_modules/workbox-window/build/workbox-window.prod.es5.mjs
try {
  self["workbox:window:6.5.4"] && _();
} catch (n3) {
}
function n(n3, t3) {
  return new Promise(function(r3) {
    var e3 = new MessageChannel();
    e3.port1.onmessage = function(n4) {
      r3(n4.data);
    }, n3.postMessage(t3, [e3.port2]);
  });
}
function t(n3, t3) {
  for (var r3 = 0; r3 < t3.length; r3++) {
    var e3 = t3[r3];
    e3.enumerable = e3.enumerable || false, e3.configurable = true, "value" in e3 && (e3.writable = true), Object.defineProperty(n3, e3.key, e3);
  }
}
function r(n3, t3) {
  (null == t3 || t3 > n3.length) && (t3 = n3.length);
  for (var r3 = 0, e3 = new Array(t3); r3 < t3; r3++)
    e3[r3] = n3[r3];
  return e3;
}
function e(n3, t3) {
  var e3;
  if ("undefined" == typeof Symbol || null == n3[Symbol.iterator]) {
    if (Array.isArray(n3) || (e3 = function(n4, t4) {
      if (n4) {
        if ("string" == typeof n4)
          return r(n4, t4);
        var e4 = Object.prototype.toString.call(n4).slice(8, -1);
        return "Object" === e4 && n4.constructor && (e4 = n4.constructor.name), "Map" === e4 || "Set" === e4 ? Array.from(n4) : "Arguments" === e4 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e4) ? r(n4, t4) : void 0;
      }
    }(n3)) || t3 && n3 && "number" == typeof n3.length) {
      e3 && (n3 = e3);
      var i3 = 0;
      return function() {
        return i3 >= n3.length ? { done: true } : { done: false, value: n3[i3++] };
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  return (e3 = n3[Symbol.iterator]()).next.bind(e3);
}
try {
  self["workbox:core:6.5.4"] && _();
} catch (n3) {
}
var i = function() {
  var n3 = this;
  this.promise = new Promise(function(t3, r3) {
    n3.resolve = t3, n3.reject = r3;
  });
};
function o(n3, t3) {
  var r3 = location.href;
  return new URL(n3, r3).href === new URL(t3, r3).href;
}
var u = function(n3, t3) {
  this.type = n3, Object.assign(this, t3);
};
function a(n3, t3, r3) {
  return r3 ? t3 ? t3(n3) : n3 : (n3 && n3.then || (n3 = Promise.resolve(n3)), t3 ? n3.then(t3) : n3);
}
function c() {
}
var f = { type: "SKIP_WAITING" };
function s(n3, t3) {
  if (!t3)
    return n3 && n3.then ? n3.then(c) : Promise.resolve();
}
var v = function(r3) {
  var e3, c5;
  function v2(n3, t3) {
    var e4, c6;
    return void 0 === t3 && (t3 = {}), (e4 = r3.call(this) || this).nn = {}, e4.tn = 0, e4.rn = new i(), e4.en = new i(), e4.on = new i(), e4.un = 0, e4.an = /* @__PURE__ */ new Set(), e4.cn = function() {
      var n4 = e4.fn, t4 = n4.installing;
      e4.tn > 0 || !o(t4.scriptURL, e4.sn.toString()) || performance.now() > e4.un + 6e4 ? (e4.vn = t4, n4.removeEventListener("updatefound", e4.cn)) : (e4.hn = t4, e4.an.add(t4), e4.rn.resolve(t4)), ++e4.tn, t4.addEventListener("statechange", e4.ln);
    }, e4.ln = function(n4) {
      var t4 = e4.fn, r4 = n4.target, i3 = r4.state, o6 = r4 === e4.vn, a3 = { sw: r4, isExternal: o6, originalEvent: n4 };
      !o6 && e4.mn && (a3.isUpdate = true), e4.dispatchEvent(new u(i3, a3)), "installed" === i3 ? e4.wn = self.setTimeout(function() {
        "installed" === i3 && t4.waiting === r4 && e4.dispatchEvent(new u("waiting", a3));
      }, 200) : "activating" === i3 && (clearTimeout(e4.wn), o6 || e4.en.resolve(r4));
    }, e4.dn = function(n4) {
      var t4 = e4.hn, r4 = t4 !== navigator.serviceWorker.controller;
      e4.dispatchEvent(new u("controlling", { isExternal: r4, originalEvent: n4, sw: t4, isUpdate: e4.mn })), r4 || e4.on.resolve(t4);
    }, e4.gn = (c6 = function(n4) {
      var t4 = n4.data, r4 = n4.ports, i3 = n4.source;
      return a(e4.getSW(), function() {
        e4.an.has(i3) && e4.dispatchEvent(new u("message", { data: t4, originalEvent: n4, ports: r4, sw: i3 }));
      });
    }, function() {
      for (var n4 = [], t4 = 0; t4 < arguments.length; t4++)
        n4[t4] = arguments[t4];
      try {
        return Promise.resolve(c6.apply(this, n4));
      } catch (n5) {
        return Promise.reject(n5);
      }
    }), e4.sn = n3, e4.nn = t3, navigator.serviceWorker.addEventListener("message", e4.gn), e4;
  }
  c5 = r3, (e3 = v2).prototype = Object.create(c5.prototype), e3.prototype.constructor = e3, e3.__proto__ = c5;
  var h3, l, m, w = v2.prototype;
  return w.register = function(n3) {
    var t3 = (void 0 === n3 ? {} : n3).immediate, r4 = void 0 !== t3 && t3;
    try {
      var e4 = this;
      return function(n4, t4) {
        var r5 = n4();
        if (r5 && r5.then)
          return r5.then(t4);
        return t4(r5);
      }(function() {
        if (!r4 && "complete" !== document.readyState)
          return s(new Promise(function(n4) {
            return window.addEventListener("load", n4);
          }));
      }, function() {
        return e4.mn = Boolean(navigator.serviceWorker.controller), e4.yn = e4.pn(), a(e4.bn(), function(n4) {
          e4.fn = n4, e4.yn && (e4.hn = e4.yn, e4.en.resolve(e4.yn), e4.on.resolve(e4.yn), e4.yn.addEventListener("statechange", e4.ln, { once: true }));
          var t4 = e4.fn.waiting;
          return t4 && o(t4.scriptURL, e4.sn.toString()) && (e4.hn = t4, Promise.resolve().then(function() {
            e4.dispatchEvent(new u("waiting", { sw: t4, wasWaitingBeforeRegister: true }));
          }).then(function() {
          })), e4.hn && (e4.rn.resolve(e4.hn), e4.an.add(e4.hn)), e4.fn.addEventListener("updatefound", e4.cn), navigator.serviceWorker.addEventListener("controllerchange", e4.dn), e4.fn;
        });
      });
    } catch (n4) {
      return Promise.reject(n4);
    }
  }, w.update = function() {
    try {
      return this.fn ? s(this.fn.update()) : void 0;
    } catch (n3) {
      return Promise.reject(n3);
    }
  }, w.getSW = function() {
    return void 0 !== this.hn ? Promise.resolve(this.hn) : this.rn.promise;
  }, w.messageSW = function(t3) {
    try {
      return a(this.getSW(), function(r4) {
        return n(r4, t3);
      });
    } catch (n3) {
      return Promise.reject(n3);
    }
  }, w.messageSkipWaiting = function() {
    this.fn && this.fn.waiting && n(this.fn.waiting, f);
  }, w.pn = function() {
    var n3 = navigator.serviceWorker.controller;
    return n3 && o(n3.scriptURL, this.sn.toString()) ? n3 : void 0;
  }, w.bn = function() {
    try {
      var n3 = this;
      return function(n4, t3) {
        try {
          var r4 = n4();
        } catch (n5) {
          return t3(n5);
        }
        if (r4 && r4.then)
          return r4.then(void 0, t3);
        return r4;
      }(function() {
        return a(navigator.serviceWorker.register(n3.sn, n3.nn), function(t3) {
          return n3.un = performance.now(), t3;
        });
      }, function(n4) {
        throw n4;
      });
    } catch (n4) {
      return Promise.reject(n4);
    }
  }, h3 = v2, (l = [{ key: "active", get: function() {
    return this.en.promise;
  } }, { key: "controlling", get: function() {
    return this.on.promise;
  } }]) && t(h3.prototype, l), m && t(h3, m), v2;
}(function() {
  function n3() {
    this.Pn = /* @__PURE__ */ new Map();
  }
  var t3 = n3.prototype;
  return t3.addEventListener = function(n4, t4) {
    this.Sn(n4).add(t4);
  }, t3.removeEventListener = function(n4, t4) {
    this.Sn(n4).delete(t4);
  }, t3.dispatchEvent = function(n4) {
    n4.target = this;
    for (var t4, r3 = e(this.Sn(n4.type)); !(t4 = r3()).done; ) {
      (0, t4.value)(n4);
    }
  }, t3.Sn = function(n4) {
    return this.Pn.has(n4) || this.Pn.set(n4, /* @__PURE__ */ new Set()), this.Pn.get(n4);
  }, n3;
}());

// node_modules/workbox-core/_version.js
try {
  self["workbox:core:6.5.4"] && _();
} catch (e3) {
}

// node_modules/workbox-core/models/messages/messages.js
var messages = {
  "invalid-value": ({ paramName, validValueDescription, value }) => {
    if (!paramName || !validValueDescription) {
      throw new Error(`Unexpected input to 'invalid-value' error.`);
    }
    return `The '${paramName}' parameter was given a value with an unexpected value. ${validValueDescription} Received a value of ${JSON.stringify(value)}.`;
  },
  "not-an-array": ({ moduleName, className, funcName, paramName }) => {
    if (!moduleName || !className || !funcName || !paramName) {
      throw new Error(`Unexpected input to 'not-an-array' error.`);
    }
    return `The parameter '${paramName}' passed into '${moduleName}.${className}.${funcName}()' must be an array.`;
  },
  "incorrect-type": ({ expectedType, paramName, moduleName, className, funcName }) => {
    if (!expectedType || !paramName || !moduleName || !funcName) {
      throw new Error(`Unexpected input to 'incorrect-type' error.`);
    }
    const classNameStr = className ? `${className}.` : "";
    return `The parameter '${paramName}' passed into '${moduleName}.${classNameStr}${funcName}()' must be of type ${expectedType}.`;
  },
  "incorrect-class": ({ expectedClassName, paramName, moduleName, className, funcName, isReturnValueProblem }) => {
    if (!expectedClassName || !moduleName || !funcName) {
      throw new Error(`Unexpected input to 'incorrect-class' error.`);
    }
    const classNameStr = className ? `${className}.` : "";
    if (isReturnValueProblem) {
      return `The return value from '${moduleName}.${classNameStr}${funcName}()' must be an instance of class ${expectedClassName}.`;
    }
    return `The parameter '${paramName}' passed into '${moduleName}.${classNameStr}${funcName}()' must be an instance of class ${expectedClassName}.`;
  },
  "missing-a-method": ({ expectedMethod, paramName, moduleName, className, funcName }) => {
    if (!expectedMethod || !paramName || !moduleName || !className || !funcName) {
      throw new Error(`Unexpected input to 'missing-a-method' error.`);
    }
    return `${moduleName}.${className}.${funcName}() expected the '${paramName}' parameter to expose a '${expectedMethod}' method.`;
  },
  "add-to-cache-list-unexpected-type": ({ entry }) => {
    return `An unexpected entry was passed to 'workbox-precaching.PrecacheController.addToCacheList()' The entry '${JSON.stringify(entry)}' isn't supported. You must supply an array of strings with one or more characters, objects with a url property or Request objects.`;
  },
  "add-to-cache-list-conflicting-entries": ({ firstEntry, secondEntry }) => {
    if (!firstEntry || !secondEntry) {
      throw new Error(`Unexpected input to 'add-to-cache-list-duplicate-entries' error.`);
    }
    return `Two of the entries passed to 'workbox-precaching.PrecacheController.addToCacheList()' had the URL ${firstEntry} but different revision details. Workbox is unable to cache and version the asset correctly. Please remove one of the entries.`;
  },
  "plugin-error-request-will-fetch": ({ thrownErrorMessage }) => {
    if (!thrownErrorMessage) {
      throw new Error(`Unexpected input to 'plugin-error-request-will-fetch', error.`);
    }
    return `An error was thrown by a plugins 'requestWillFetch()' method. The thrown error message was: '${thrownErrorMessage}'.`;
  },
  "invalid-cache-name": ({ cacheNameId, value }) => {
    if (!cacheNameId) {
      throw new Error(`Expected a 'cacheNameId' for error 'invalid-cache-name'`);
    }
    return `You must provide a name containing at least one character for setCacheDetails({${cacheNameId}: '...'}). Received a value of '${JSON.stringify(value)}'`;
  },
  "unregister-route-but-not-found-with-method": ({ method }) => {
    if (!method) {
      throw new Error(`Unexpected input to 'unregister-route-but-not-found-with-method' error.`);
    }
    return `The route you're trying to unregister was not  previously registered for the method type '${method}'.`;
  },
  "unregister-route-route-not-registered": () => {
    return `The route you're trying to unregister was not previously registered.`;
  },
  "queue-replay-failed": ({ name }) => {
    return `Replaying the background sync queue '${name}' failed.`;
  },
  "duplicate-queue-name": ({ name }) => {
    return `The Queue name '${name}' is already being used. All instances of backgroundSync.Queue must be given unique names.`;
  },
  "expired-test-without-max-age": ({ methodName, paramName }) => {
    return `The '${methodName}()' method can only be used when the '${paramName}' is used in the constructor.`;
  },
  "unsupported-route-type": ({ moduleName, className, funcName, paramName }) => {
    return `The supplied '${paramName}' parameter was an unsupported type. Please check the docs for ${moduleName}.${className}.${funcName} for valid input types.`;
  },
  "not-array-of-class": ({ value, expectedClass, moduleName, className, funcName, paramName }) => {
    return `The supplied '${paramName}' parameter must be an array of '${expectedClass}' objects. Received '${JSON.stringify(value)},'. Please check the call to ${moduleName}.${className}.${funcName}() to fix the issue.`;
  },
  "max-entries-or-age-required": ({ moduleName, className, funcName }) => {
    return `You must define either config.maxEntries or config.maxAgeSecondsin ${moduleName}.${className}.${funcName}`;
  },
  "statuses-or-headers-required": ({ moduleName, className, funcName }) => {
    return `You must define either config.statuses or config.headersin ${moduleName}.${className}.${funcName}`;
  },
  "invalid-string": ({ moduleName, funcName, paramName }) => {
    if (!paramName || !moduleName || !funcName) {
      throw new Error(`Unexpected input to 'invalid-string' error.`);
    }
    return `When using strings, the '${paramName}' parameter must start with 'http' (for cross-origin matches) or '/' (for same-origin matches). Please see the docs for ${moduleName}.${funcName}() for more info.`;
  },
  "channel-name-required": () => {
    return `You must provide a channelName to construct a BroadcastCacheUpdate instance.`;
  },
  "invalid-responses-are-same-args": () => {
    return `The arguments passed into responsesAreSame() appear to be invalid. Please ensure valid Responses are used.`;
  },
  "expire-custom-caches-only": () => {
    return `You must provide a 'cacheName' property when using the expiration plugin with a runtime caching strategy.`;
  },
  "unit-must-be-bytes": ({ normalizedRangeHeader }) => {
    if (!normalizedRangeHeader) {
      throw new Error(`Unexpected input to 'unit-must-be-bytes' error.`);
    }
    return `The 'unit' portion of the Range header must be set to 'bytes'. The Range header provided was "${normalizedRangeHeader}"`;
  },
  "single-range-only": ({ normalizedRangeHeader }) => {
    if (!normalizedRangeHeader) {
      throw new Error(`Unexpected input to 'single-range-only' error.`);
    }
    return `Multiple ranges are not supported. Please use a  single start value, and optional end value. The Range header provided was "${normalizedRangeHeader}"`;
  },
  "invalid-range-values": ({ normalizedRangeHeader }) => {
    if (!normalizedRangeHeader) {
      throw new Error(`Unexpected input to 'invalid-range-values' error.`);
    }
    return `The Range header is missing both start and end values. At least one of those values is needed. The Range header provided was "${normalizedRangeHeader}"`;
  },
  "no-range-header": () => {
    return `No Range header was found in the Request provided.`;
  },
  "range-not-satisfiable": ({ size, start, end }) => {
    return `The start (${start}) and end (${end}) values in the Range are not satisfiable by the cached response, which is ${size} bytes.`;
  },
  "attempt-to-cache-non-get-request": ({ url, method }) => {
    return `Unable to cache '${url}' because it is a '${method}' request and only 'GET' requests can be cached.`;
  },
  "cache-put-with-no-response": ({ url }) => {
    return `There was an attempt to cache '${url}' but the response was not defined.`;
  },
  "no-response": ({ url, error }) => {
    let message = `The strategy could not generate a response for '${url}'.`;
    if (error) {
      message += ` The underlying error is ${error}.`;
    }
    return message;
  },
  "bad-precaching-response": ({ url, status }) => {
    return `The precaching request for '${url}' failed` + (status ? ` with an HTTP status of ${status}.` : `.`);
  },
  "non-precached-url": ({ url }) => {
    return `createHandlerBoundToURL('${url}') was called, but that URL is not precached. Please pass in a URL that is precached instead.`;
  },
  "add-to-cache-list-conflicting-integrities": ({ url }) => {
    return `Two of the entries passed to 'workbox-precaching.PrecacheController.addToCacheList()' had the URL ${url} with different integrity values. Please remove one of them.`;
  },
  "missing-precache-entry": ({ cacheName, url }) => {
    return `Unable to find a precached response in ${cacheName} for ${url}.`;
  },
  "cross-origin-copy-response": ({ origin }) => {
    return `workbox-core.copyResponse() can only be used with same-origin responses. It was passed a response with origin ${origin}.`;
  },
  "opaque-streams-source": ({ type }) => {
    const message = `One of the workbox-streams sources resulted in an '${type}' response.`;
    if (type === "opaqueredirect") {
      return `${message} Please do not use a navigation request that results in a redirect as a source.`;
    }
    return `${message} Please ensure your sources are CORS-enabled.`;
  }
};

// node_modules/workbox-core/models/messages/messageGenerator.js
var generatorFunction = (code, details = {}) => {
  const message = messages[code];
  if (!message) {
    throw new Error(`Unable to find message for code '${code}'.`);
  }
  return message(details);
};
var messageGenerator = false ? fallback : generatorFunction;

// node_modules/workbox-core/_private/WorkboxError.js
var WorkboxError = class extends Error {
  /**
   *
   * @param {string} errorCode The error code that
   * identifies this particular error.
   * @param {Object=} details Any relevant arguments
   * that will help developers identify issues should
   * be added as a key on the context object.
   */
  constructor(errorCode, details) {
    const message = messageGenerator(errorCode, details);
    super(message);
    this.name = errorCode;
    this.details = details;
  }
};

// node_modules/workbox-core/_private/assert.js
var isArray = (value, details) => {
  if (!Array.isArray(value)) {
    throw new WorkboxError("not-an-array", details);
  }
};
var hasMethod = (object, expectedMethod, details) => {
  const type = typeof object[expectedMethod];
  if (type !== "function") {
    details["expectedMethod"] = expectedMethod;
    throw new WorkboxError("missing-a-method", details);
  }
};
var isType = (object, expectedType, details) => {
  if (typeof object !== expectedType) {
    details["expectedType"] = expectedType;
    throw new WorkboxError("incorrect-type", details);
  }
};
var isInstance = (object, expectedClass, details) => {
  if (!(object instanceof expectedClass)) {
    details["expectedClassName"] = expectedClass.name;
    throw new WorkboxError("incorrect-class", details);
  }
};
var isOneOf = (value, validValues, details) => {
  if (!validValues.includes(value)) {
    details["validValueDescription"] = `Valid values are ${JSON.stringify(validValues)}.`;
    throw new WorkboxError("invalid-value", details);
  }
};
var isArrayOfClass = (value, expectedClass, details) => {
  const error = new WorkboxError("not-array-of-class", details);
  if (!Array.isArray(value)) {
    throw error;
  }
  for (const item of value) {
    if (!(item instanceof expectedClass)) {
      throw error;
    }
  }
};
var finalAssertExports = false ? null : {
  hasMethod,
  isArray,
  isInstance,
  isOneOf,
  isType,
  isArrayOfClass
};

// node_modules/workbox-core/_private/logger.js
var logger = false ? null : (() => {
  if (!("__WB_DISABLE_DEV_LOGS" in globalThis)) {
    self.__WB_DISABLE_DEV_LOGS = false;
  }
  let inGroup = false;
  const methodToColorMap = {
    debug: `#7f8c8d`,
    log: `#2ecc71`,
    warn: `#f39c12`,
    error: `#c0392b`,
    groupCollapsed: `#3498db`,
    groupEnd: null
    // No colored prefix on groupEnd
  };
  const print = function(method, args) {
    if (self.__WB_DISABLE_DEV_LOGS) {
      return;
    }
    if (method === "groupCollapsed") {
      if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
        console[method](...args);
        return;
      }
    }
    const styles = [
      `background: ${methodToColorMap[method]}`,
      `border-radius: 0.5em`,
      `color: white`,
      `font-weight: bold`,
      `padding: 2px 0.5em`
    ];
    const logPrefix = inGroup ? [] : ["%cworkbox", styles.join(";")];
    console[method](...logPrefix, ...args);
    if (method === "groupCollapsed") {
      inGroup = true;
    }
    if (method === "groupEnd") {
      inGroup = false;
    }
  };
  const api = {};
  const loggerMethods = Object.keys(methodToColorMap);
  for (const key of loggerMethods) {
    const method = key;
    api[method] = (...args) => {
      print(method, args);
    };
  }
  return api;
})();

// node_modules/workbox-routing/_version.js
try {
  self["workbox:routing:6.5.4"] && _();
} catch (e3) {
}

// node_modules/workbox-routing/utils/constants.js
var defaultMethod = "GET";
var validMethods = [
  "DELETE",
  "GET",
  "HEAD",
  "PATCH",
  "POST",
  "PUT"
];

// node_modules/workbox-routing/utils/normalizeHandler.js
var normalizeHandler = (handler) => {
  if (handler && typeof handler === "object") {
    if (true) {
      finalAssertExports.hasMethod(handler, "handle", {
        moduleName: "workbox-routing",
        className: "Route",
        funcName: "constructor",
        paramName: "handler"
      });
    }
    return handler;
  } else {
    if (true) {
      finalAssertExports.isType(handler, "function", {
        moduleName: "workbox-routing",
        className: "Route",
        funcName: "constructor",
        paramName: "handler"
      });
    }
    return { handle: handler };
  }
};

// node_modules/workbox-routing/Route.js
var Route = class {
  /**
   * Constructor for Route class.
   *
   * @param {workbox-routing~matchCallback} match
   * A callback function that determines whether the route matches a given
   * `fetch` event by returning a non-falsy value.
   * @param {workbox-routing~handlerCallback} handler A callback
   * function that returns a Promise resolving to a Response.
   * @param {string} [method='GET'] The HTTP method to match the Route
   * against.
   */
  constructor(match, handler, method = defaultMethod) {
    if (true) {
      finalAssertExports.isType(match, "function", {
        moduleName: "workbox-routing",
        className: "Route",
        funcName: "constructor",
        paramName: "match"
      });
      if (method) {
        finalAssertExports.isOneOf(method, validMethods, { paramName: "method" });
      }
    }
    this.handler = normalizeHandler(handler);
    this.match = match;
    this.method = method;
  }
  /**
   *
   * @param {workbox-routing-handlerCallback} handler A callback
   * function that returns a Promise resolving to a Response
   */
  setCatchHandler(handler) {
    this.catchHandler = normalizeHandler(handler);
  }
};

// node_modules/workbox-routing/RegExpRoute.js
var RegExpRoute = class extends Route {
  /**
   * If the regular expression contains
   * [capture groups]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp#grouping-back-references},
   * the captured values will be passed to the
   * {@link workbox-routing~handlerCallback} `params`
   * argument.
   *
   * @param {RegExp} regExp The regular expression to match against URLs.
   * @param {workbox-routing~handlerCallback} handler A callback
   * function that returns a Promise resulting in a Response.
   * @param {string} [method='GET'] The HTTP method to match the Route
   * against.
   */
  constructor(regExp, handler, method) {
    if (true) {
      finalAssertExports.isInstance(regExp, RegExp, {
        moduleName: "workbox-routing",
        className: "RegExpRoute",
        funcName: "constructor",
        paramName: "pattern"
      });
    }
    const match = ({ url }) => {
      const result = regExp.exec(url.href);
      if (!result) {
        return;
      }
      if (url.origin !== location.origin && result.index !== 0) {
        if (true) {
          logger.debug(`The regular expression '${regExp.toString()}' only partially matched against the cross-origin URL '${url.toString()}'. RegExpRoute's will only handle cross-origin requests if they match the entire URL.`);
        }
        return;
      }
      return result.slice(1);
    };
    super(match, handler, method);
  }
};

// node_modules/workbox-core/_private/getFriendlyURL.js
var getFriendlyURL = (url) => {
  const urlObj = new URL(String(url), location.href);
  return urlObj.href.replace(new RegExp(`^${location.origin}`), "");
};

// node_modules/workbox-routing/Router.js
var Router = class {
  /**
   * Initializes a new Router.
   */
  constructor() {
    this._routes = /* @__PURE__ */ new Map();
    this._defaultHandlerMap = /* @__PURE__ */ new Map();
  }
  /**
   * @return {Map<string, Array<workbox-routing.Route>>} routes A `Map` of HTTP
   * method name ('GET', etc.) to an array of all the corresponding `Route`
   * instances that are registered.
   */
  get routes() {
    return this._routes;
  }
  /**
   * Adds a fetch event listener to respond to events when a route matches
   * the event's request.
   */
  addFetchListener() {
    self.addEventListener("fetch", (event) => {
      const { request } = event;
      const responsePromise = this.handleRequest({ request, event });
      if (responsePromise) {
        event.respondWith(responsePromise);
      }
    });
  }
  /**
   * Adds a message event listener for URLs to cache from the window.
   * This is useful to cache resources loaded on the page prior to when the
   * service worker started controlling it.
   *
   * The format of the message data sent from the window should be as follows.
   * Where the `urlsToCache` array may consist of URL strings or an array of
   * URL string + `requestInit` object (the same as you'd pass to `fetch()`).
   *
   * ```
   * {
   *   type: 'CACHE_URLS',
   *   payload: {
   *     urlsToCache: [
   *       './script1.js',
   *       './script2.js',
   *       ['./script3.js', {mode: 'no-cors'}],
   *     ],
   *   },
   * }
   * ```
   */
  addCacheListener() {
    self.addEventListener("message", (event) => {
      if (event.data && event.data.type === "CACHE_URLS") {
        const { payload } = event.data;
        if (true) {
          logger.debug(`Caching URLs from the window`, payload.urlsToCache);
        }
        const requestPromises = Promise.all(payload.urlsToCache.map((entry) => {
          if (typeof entry === "string") {
            entry = [entry];
          }
          const request = new Request(...entry);
          return this.handleRequest({ request, event });
        }));
        event.waitUntil(requestPromises);
        if (event.ports && event.ports[0]) {
          void requestPromises.then(() => event.ports[0].postMessage(true));
        }
      }
    });
  }
  /**
   * Apply the routing rules to a FetchEvent object to get a Response from an
   * appropriate Route's handler.
   *
   * @param {Object} options
   * @param {Request} options.request The request to handle.
   * @param {ExtendableEvent} options.event The event that triggered the
   *     request.
   * @return {Promise<Response>|undefined} A promise is returned if a
   *     registered route can handle the request. If there is no matching
   *     route and there's no `defaultHandler`, `undefined` is returned.
   */
  handleRequest({ request, event }) {
    if (true) {
      finalAssertExports.isInstance(request, Request, {
        moduleName: "workbox-routing",
        className: "Router",
        funcName: "handleRequest",
        paramName: "options.request"
      });
    }
    const url = new URL(request.url, location.href);
    if (!url.protocol.startsWith("http")) {
      if (true) {
        logger.debug(`Workbox Router only supports URLs that start with 'http'.`);
      }
      return;
    }
    const sameOrigin = url.origin === location.origin;
    const { params, route } = this.findMatchingRoute({
      event,
      request,
      sameOrigin,
      url
    });
    let handler = route && route.handler;
    const debugMessages = [];
    if (true) {
      if (handler) {
        debugMessages.push([`Found a route to handle this request:`, route]);
        if (params) {
          debugMessages.push([
            `Passing the following params to the route's handler:`,
            params
          ]);
        }
      }
    }
    const method = request.method;
    if (!handler && this._defaultHandlerMap.has(method)) {
      if (true) {
        debugMessages.push(`Failed to find a matching route. Falling back to the default handler for ${method}.`);
      }
      handler = this._defaultHandlerMap.get(method);
    }
    if (!handler) {
      if (true) {
        logger.debug(`No route found for: ${getFriendlyURL(url)}`);
      }
      return;
    }
    if (true) {
      logger.groupCollapsed(`Router is responding to: ${getFriendlyURL(url)}`);
      debugMessages.forEach((msg) => {
        if (Array.isArray(msg)) {
          logger.log(...msg);
        } else {
          logger.log(msg);
        }
      });
      logger.groupEnd();
    }
    let responsePromise;
    try {
      responsePromise = handler.handle({ url, request, event, params });
    } catch (err) {
      responsePromise = Promise.reject(err);
    }
    const catchHandler = route && route.catchHandler;
    if (responsePromise instanceof Promise && (this._catchHandler || catchHandler)) {
      responsePromise = responsePromise.catch(async (err) => {
        if (catchHandler) {
          if (true) {
            logger.groupCollapsed(`Error thrown when responding to:  ${getFriendlyURL(url)}. Falling back to route's Catch Handler.`);
            logger.error(`Error thrown by:`, route);
            logger.error(err);
            logger.groupEnd();
          }
          try {
            return await catchHandler.handle({ url, request, event, params });
          } catch (catchErr) {
            if (catchErr instanceof Error) {
              err = catchErr;
            }
          }
        }
        if (this._catchHandler) {
          if (true) {
            logger.groupCollapsed(`Error thrown when responding to:  ${getFriendlyURL(url)}. Falling back to global Catch Handler.`);
            logger.error(`Error thrown by:`, route);
            logger.error(err);
            logger.groupEnd();
          }
          return this._catchHandler.handle({ url, request, event });
        }
        throw err;
      });
    }
    return responsePromise;
  }
  /**
   * Checks a request and URL (and optionally an event) against the list of
   * registered routes, and if there's a match, returns the corresponding
   * route along with any params generated by the match.
   *
   * @param {Object} options
   * @param {URL} options.url
   * @param {boolean} options.sameOrigin The result of comparing `url.origin`
   *     against the current origin.
   * @param {Request} options.request The request to match.
   * @param {Event} options.event The corresponding event.
   * @return {Object} An object with `route` and `params` properties.
   *     They are populated if a matching route was found or `undefined`
   *     otherwise.
   */
  findMatchingRoute({ url, sameOrigin, request, event }) {
    const routes = this._routes.get(request.method) || [];
    for (const route of routes) {
      let params;
      const matchResult = route.match({ url, sameOrigin, request, event });
      if (matchResult) {
        if (true) {
          if (matchResult instanceof Promise) {
            logger.warn(`While routing ${getFriendlyURL(url)}, an async matchCallback function was used. Please convert the following route to use a synchronous matchCallback function:`, route);
          }
        }
        params = matchResult;
        if (Array.isArray(params) && params.length === 0) {
          params = void 0;
        } else if (matchResult.constructor === Object && // eslint-disable-line
        Object.keys(matchResult).length === 0) {
          params = void 0;
        } else if (typeof matchResult === "boolean") {
          params = void 0;
        }
        return { route, params };
      }
    }
    return {};
  }
  /**
   * Define a default `handler` that's called when no routes explicitly
   * match the incoming request.
   *
   * Each HTTP method ('GET', 'POST', etc.) gets its own default handler.
   *
   * Without a default handler, unmatched requests will go against the
   * network as if there were no service worker present.
   *
   * @param {workbox-routing~handlerCallback} handler A callback
   * function that returns a Promise resulting in a Response.
   * @param {string} [method='GET'] The HTTP method to associate with this
   * default handler. Each method has its own default.
   */
  setDefaultHandler(handler, method = defaultMethod) {
    this._defaultHandlerMap.set(method, normalizeHandler(handler));
  }
  /**
   * If a Route throws an error while handling a request, this `handler`
   * will be called and given a chance to provide a response.
   *
   * @param {workbox-routing~handlerCallback} handler A callback
   * function that returns a Promise resulting in a Response.
   */
  setCatchHandler(handler) {
    this._catchHandler = normalizeHandler(handler);
  }
  /**
   * Registers a route with the router.
   *
   * @param {workbox-routing.Route} route The route to register.
   */
  registerRoute(route) {
    if (true) {
      finalAssertExports.isType(route, "object", {
        moduleName: "workbox-routing",
        className: "Router",
        funcName: "registerRoute",
        paramName: "route"
      });
      finalAssertExports.hasMethod(route, "match", {
        moduleName: "workbox-routing",
        className: "Router",
        funcName: "registerRoute",
        paramName: "route"
      });
      finalAssertExports.isType(route.handler, "object", {
        moduleName: "workbox-routing",
        className: "Router",
        funcName: "registerRoute",
        paramName: "route"
      });
      finalAssertExports.hasMethod(route.handler, "handle", {
        moduleName: "workbox-routing",
        className: "Router",
        funcName: "registerRoute",
        paramName: "route.handler"
      });
      finalAssertExports.isType(route.method, "string", {
        moduleName: "workbox-routing",
        className: "Router",
        funcName: "registerRoute",
        paramName: "route.method"
      });
    }
    if (!this._routes.has(route.method)) {
      this._routes.set(route.method, []);
    }
    this._routes.get(route.method).push(route);
  }
  /**
   * Unregisters a route with the router.
   *
   * @param {workbox-routing.Route} route The route to unregister.
   */
  unregisterRoute(route) {
    if (!this._routes.has(route.method)) {
      throw new WorkboxError("unregister-route-but-not-found-with-method", {
        method: route.method
      });
    }
    const routeIndex = this._routes.get(route.method).indexOf(route);
    if (routeIndex > -1) {
      this._routes.get(route.method).splice(routeIndex, 1);
    } else {
      throw new WorkboxError("unregister-route-route-not-registered");
    }
  }
};

// node_modules/workbox-routing/utils/getOrCreateDefaultRouter.js
var defaultRouter;
var getOrCreateDefaultRouter = () => {
  if (!defaultRouter) {
    defaultRouter = new Router();
    defaultRouter.addFetchListener();
    defaultRouter.addCacheListener();
  }
  return defaultRouter;
};

// node_modules/workbox-routing/registerRoute.js
function registerRoute(capture, handler, method) {
  let route;
  if (typeof capture === "string") {
    const captureUrl = new URL(capture, location.href);
    if (true) {
      if (!(capture.startsWith("/") || capture.startsWith("http"))) {
        throw new WorkboxError("invalid-string", {
          moduleName: "workbox-routing",
          funcName: "registerRoute",
          paramName: "capture"
        });
      }
      const valueToCheck = capture.startsWith("http") ? captureUrl.pathname : capture;
      const wildcards = "[*:?+]";
      if (new RegExp(`${wildcards}`).exec(valueToCheck)) {
        logger.debug(`The '$capture' parameter contains an Express-style wildcard character (${wildcards}). Strings are now always interpreted as exact matches; use a RegExp for partial or wildcard matches.`);
      }
    }
    const matchCallback = ({ url }) => {
      if (true) {
        if (url.pathname === captureUrl.pathname && url.origin !== captureUrl.origin) {
          logger.debug(`${capture} only partially matches the cross-origin URL ${url.toString()}. This route will only handle cross-origin requests if they match the entire URL.`);
        }
      }
      return url.href === captureUrl.href;
    };
    route = new Route(matchCallback, handler, method);
  } else if (capture instanceof RegExp) {
    route = new RegExpRoute(capture, handler, method);
  } else if (typeof capture === "function") {
    route = new Route(capture, handler, method);
  } else if (capture instanceof Route) {
    route = capture;
  } else {
    throw new WorkboxError("unsupported-route-type", {
      moduleName: "workbox-routing",
      funcName: "registerRoute",
      paramName: "capture"
    });
  }
  const defaultRouter2 = getOrCreateDefaultRouter();
  defaultRouter2.registerRoute(route);
  return route;
}

// node_modules/workbox-routing/setCatchHandler.js
function setCatchHandler(handler) {
  const defaultRouter2 = getOrCreateDefaultRouter();
  defaultRouter2.setCatchHandler(handler);
}

// node_modules/workbox-routing/setDefaultHandler.js
function setDefaultHandler(handler) {
  const defaultRouter2 = getOrCreateDefaultRouter();
  defaultRouter2.setDefaultHandler(handler);
}

// node_modules/workbox-strategies/_version.js
try {
  self["workbox:strategies:6.5.4"] && _();
} catch (e3) {
}

// node_modules/workbox-strategies/plugins/cacheOkAndOpaquePlugin.js
var cacheOkAndOpaquePlugin = {
  /**
   * Returns a valid response (to allow caching) if the status is 200 (OK) or
   * 0 (opaque).
   *
   * @param {Object} options
   * @param {Response} options.response
   * @return {Response|null}
   *
   * @private
   */
  cacheWillUpdate: async ({ response }) => {
    if (response.status === 200 || response.status === 0) {
      return response;
    }
    return null;
  }
};

// node_modules/workbox-core/_private/cacheNames.js
var _cacheNameDetails = {
  googleAnalytics: "googleAnalytics",
  precache: "precache-v2",
  prefix: "workbox",
  runtime: "runtime",
  suffix: typeof registration !== "undefined" ? registration.scope : ""
};
var _createCacheName = (cacheName) => {
  return [_cacheNameDetails.prefix, cacheName, _cacheNameDetails.suffix].filter((value) => value && value.length > 0).join("-");
};
var eachCacheNameDetail = (fn) => {
  for (const key of Object.keys(_cacheNameDetails)) {
    fn(key);
  }
};
var cacheNames = {
  updateDetails: (details) => {
    eachCacheNameDetail((key) => {
      if (typeof details[key] === "string") {
        _cacheNameDetails[key] = details[key];
      }
    });
  },
  getGoogleAnalyticsName: (userCacheName) => {
    return userCacheName || _createCacheName(_cacheNameDetails.googleAnalytics);
  },
  getPrecacheName: (userCacheName) => {
    return userCacheName || _createCacheName(_cacheNameDetails.precache);
  },
  getPrefix: () => {
    return _cacheNameDetails.prefix;
  },
  getRuntimeName: (userCacheName) => {
    return userCacheName || _createCacheName(_cacheNameDetails.runtime);
  },
  getSuffix: () => {
    return _cacheNameDetails.suffix;
  }
};

// node_modules/workbox-core/_private/cacheMatchIgnoreParams.js
function stripParams(fullURL, ignoreParams) {
  const strippedURL = new URL(fullURL);
  for (const param of ignoreParams) {
    strippedURL.searchParams.delete(param);
  }
  return strippedURL.href;
}
async function cacheMatchIgnoreParams(cache, request, ignoreParams, matchOptions) {
  const strippedRequestURL = stripParams(request.url, ignoreParams);
  if (request.url === strippedRequestURL) {
    return cache.match(request, matchOptions);
  }
  const keysOptions = Object.assign(Object.assign({}, matchOptions), { ignoreSearch: true });
  const cacheKeys = await cache.keys(request, keysOptions);
  for (const cacheKey of cacheKeys) {
    const strippedCacheKeyURL = stripParams(cacheKey.url, ignoreParams);
    if (strippedRequestURL === strippedCacheKeyURL) {
      return cache.match(cacheKey, matchOptions);
    }
  }
  return;
}

// node_modules/workbox-core/_private/Deferred.js
var Deferred = class {
  /**
   * Creates a promise and exposes its resolve and reject functions as methods.
   */
  constructor() {
    this.promise = new Promise((resolve, reject) => {
      this.resolve = resolve;
      this.reject = reject;
    });
  }
};

// node_modules/workbox-core/models/quotaErrorCallbacks.js
var quotaErrorCallbacks = /* @__PURE__ */ new Set();

// node_modules/workbox-core/_private/executeQuotaErrorCallbacks.js
async function executeQuotaErrorCallbacks() {
  if (true) {
    logger.log(`About to run ${quotaErrorCallbacks.size} callbacks to clean up caches.`);
  }
  for (const callback of quotaErrorCallbacks) {
    await callback();
    if (true) {
      logger.log(callback, "is complete.");
    }
  }
  if (true) {
    logger.log("Finished running callbacks.");
  }
}

// node_modules/workbox-core/_private/timeout.js
function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// node_modules/workbox-strategies/StrategyHandler.js
function toRequest(input) {
  return typeof input === "string" ? new Request(input) : input;
}
var StrategyHandler = class {
  /**
   * Creates a new instance associated with the passed strategy and event
   * that's handling the request.
   *
   * The constructor also initializes the state that will be passed to each of
   * the plugins handling this request.
   *
   * @param {workbox-strategies.Strategy} strategy
   * @param {Object} options
   * @param {Request|string} options.request A request to run this strategy for.
   * @param {ExtendableEvent} options.event The event associated with the
   *     request.
   * @param {URL} [options.url]
   * @param {*} [options.params] The return value from the
   *     {@link workbox-routing~matchCallback} (if applicable).
   */
  constructor(strategy, options) {
    this._cacheKeys = {};
    if (true) {
      finalAssertExports.isInstance(options.event, ExtendableEvent, {
        moduleName: "workbox-strategies",
        className: "StrategyHandler",
        funcName: "constructor",
        paramName: "options.event"
      });
    }
    Object.assign(this, options);
    this.event = options.event;
    this._strategy = strategy;
    this._handlerDeferred = new Deferred();
    this._extendLifetimePromises = [];
    this._plugins = [...strategy.plugins];
    this._pluginStateMap = /* @__PURE__ */ new Map();
    for (const plugin of this._plugins) {
      this._pluginStateMap.set(plugin, {});
    }
    this.event.waitUntil(this._handlerDeferred.promise);
  }
  /**
   * Fetches a given request (and invokes any applicable plugin callback
   * methods) using the `fetchOptions` (for non-navigation requests) and
   * `plugins` defined on the `Strategy` object.
   *
   * The following plugin lifecycle methods are invoked when using this method:
   * - `requestWillFetch()`
   * - `fetchDidSucceed()`
   * - `fetchDidFail()`
   *
   * @param {Request|string} input The URL or request to fetch.
   * @return {Promise<Response>}
   */
  async fetch(input) {
    const { event } = this;
    let request = toRequest(input);
    if (request.mode === "navigate" && event instanceof FetchEvent && event.preloadResponse) {
      const possiblePreloadResponse = await event.preloadResponse;
      if (possiblePreloadResponse) {
        if (true) {
          logger.log(`Using a preloaded navigation response for '${getFriendlyURL(request.url)}'`);
        }
        return possiblePreloadResponse;
      }
    }
    const originalRequest = this.hasCallback("fetchDidFail") ? request.clone() : null;
    try {
      for (const cb of this.iterateCallbacks("requestWillFetch")) {
        request = await cb({ request: request.clone(), event });
      }
    } catch (err) {
      if (err instanceof Error) {
        throw new WorkboxError("plugin-error-request-will-fetch", {
          thrownErrorMessage: err.message
        });
      }
    }
    const pluginFilteredRequest = request.clone();
    try {
      let fetchResponse;
      fetchResponse = await fetch(request, request.mode === "navigate" ? void 0 : this._strategy.fetchOptions);
      if (true) {
        logger.debug(`Network request for '${getFriendlyURL(request.url)}' returned a response with status '${fetchResponse.status}'.`);
      }
      for (const callback of this.iterateCallbacks("fetchDidSucceed")) {
        fetchResponse = await callback({
          event,
          request: pluginFilteredRequest,
          response: fetchResponse
        });
      }
      return fetchResponse;
    } catch (error) {
      if (true) {
        logger.log(`Network request for '${getFriendlyURL(request.url)}' threw an error.`, error);
      }
      if (originalRequest) {
        await this.runCallbacks("fetchDidFail", {
          error,
          event,
          originalRequest: originalRequest.clone(),
          request: pluginFilteredRequest.clone()
        });
      }
      throw error;
    }
  }
  /**
   * Calls `this.fetch()` and (in the background) runs `this.cachePut()` on
   * the response generated by `this.fetch()`.
   *
   * The call to `this.cachePut()` automatically invokes `this.waitUntil()`,
   * so you do not have to manually call `waitUntil()` on the event.
   *
   * @param {Request|string} input The request or URL to fetch and cache.
   * @return {Promise<Response>}
   */
  async fetchAndCachePut(input) {
    const response = await this.fetch(input);
    const responseClone = response.clone();
    void this.waitUntil(this.cachePut(input, responseClone));
    return response;
  }
  /**
   * Matches a request from the cache (and invokes any applicable plugin
   * callback methods) using the `cacheName`, `matchOptions`, and `plugins`
   * defined on the strategy object.
   *
   * The following plugin lifecycle methods are invoked when using this method:
   * - cacheKeyWillByUsed()
   * - cachedResponseWillByUsed()
   *
   * @param {Request|string} key The Request or URL to use as the cache key.
   * @return {Promise<Response|undefined>} A matching response, if found.
   */
  async cacheMatch(key) {
    const request = toRequest(key);
    let cachedResponse;
    const { cacheName, matchOptions } = this._strategy;
    const effectiveRequest = await this.getCacheKey(request, "read");
    const multiMatchOptions = Object.assign(Object.assign({}, matchOptions), { cacheName });
    cachedResponse = await caches.match(effectiveRequest, multiMatchOptions);
    if (true) {
      if (cachedResponse) {
        logger.debug(`Found a cached response in '${cacheName}'.`);
      } else {
        logger.debug(`No cached response found in '${cacheName}'.`);
      }
    }
    for (const callback of this.iterateCallbacks("cachedResponseWillBeUsed")) {
      cachedResponse = await callback({
        cacheName,
        matchOptions,
        cachedResponse,
        request: effectiveRequest,
        event: this.event
      }) || void 0;
    }
    return cachedResponse;
  }
  /**
   * Puts a request/response pair in the cache (and invokes any applicable
   * plugin callback methods) using the `cacheName` and `plugins` defined on
   * the strategy object.
   *
   * The following plugin lifecycle methods are invoked when using this method:
   * - cacheKeyWillByUsed()
   * - cacheWillUpdate()
   * - cacheDidUpdate()
   *
   * @param {Request|string} key The request or URL to use as the cache key.
   * @param {Response} response The response to cache.
   * @return {Promise<boolean>} `false` if a cacheWillUpdate caused the response
   * not be cached, and `true` otherwise.
   */
  async cachePut(key, response) {
    const request = toRequest(key);
    await timeout(0);
    const effectiveRequest = await this.getCacheKey(request, "write");
    if (true) {
      if (effectiveRequest.method && effectiveRequest.method !== "GET") {
        throw new WorkboxError("attempt-to-cache-non-get-request", {
          url: getFriendlyURL(effectiveRequest.url),
          method: effectiveRequest.method
        });
      }
      const vary = response.headers.get("Vary");
      if (vary) {
        logger.debug(`The response for ${getFriendlyURL(effectiveRequest.url)} has a 'Vary: ${vary}' header. Consider setting the {ignoreVary: true} option on your strategy to ensure cache matching and deletion works as expected.`);
      }
    }
    if (!response) {
      if (true) {
        logger.error(`Cannot cache non-existent response for '${getFriendlyURL(effectiveRequest.url)}'.`);
      }
      throw new WorkboxError("cache-put-with-no-response", {
        url: getFriendlyURL(effectiveRequest.url)
      });
    }
    const responseToCache = await this._ensureResponseSafeToCache(response);
    if (!responseToCache) {
      if (true) {
        logger.debug(`Response '${getFriendlyURL(effectiveRequest.url)}' will not be cached.`, responseToCache);
      }
      return false;
    }
    const { cacheName, matchOptions } = this._strategy;
    const cache = await self.caches.open(cacheName);
    const hasCacheUpdateCallback = this.hasCallback("cacheDidUpdate");
    const oldResponse = hasCacheUpdateCallback ? await cacheMatchIgnoreParams(
      // TODO(philipwalton): the `__WB_REVISION__` param is a precaching
      // feature. Consider into ways to only add this behavior if using
      // precaching.
      cache,
      effectiveRequest.clone(),
      ["__WB_REVISION__"],
      matchOptions
    ) : null;
    if (true) {
      logger.debug(`Updating the '${cacheName}' cache with a new Response for ${getFriendlyURL(effectiveRequest.url)}.`);
    }
    try {
      await cache.put(effectiveRequest, hasCacheUpdateCallback ? responseToCache.clone() : responseToCache);
    } catch (error) {
      if (error instanceof Error) {
        if (error.name === "QuotaExceededError") {
          await executeQuotaErrorCallbacks();
        }
        throw error;
      }
    }
    for (const callback of this.iterateCallbacks("cacheDidUpdate")) {
      await callback({
        cacheName,
        oldResponse,
        newResponse: responseToCache.clone(),
        request: effectiveRequest,
        event: this.event
      });
    }
    return true;
  }
  /**
   * Checks the list of plugins for the `cacheKeyWillBeUsed` callback, and
   * executes any of those callbacks found in sequence. The final `Request`
   * object returned by the last plugin is treated as the cache key for cache
   * reads and/or writes. If no `cacheKeyWillBeUsed` plugin callbacks have
   * been registered, the passed request is returned unmodified
   *
   * @param {Request} request
   * @param {string} mode
   * @return {Promise<Request>}
   */
  async getCacheKey(request, mode) {
    const key = `${request.url} | ${mode}`;
    if (!this._cacheKeys[key]) {
      let effectiveRequest = request;
      for (const callback of this.iterateCallbacks("cacheKeyWillBeUsed")) {
        effectiveRequest = toRequest(await callback({
          mode,
          request: effectiveRequest,
          event: this.event,
          // params has a type any can't change right now.
          params: this.params
          // eslint-disable-line
        }));
      }
      this._cacheKeys[key] = effectiveRequest;
    }
    return this._cacheKeys[key];
  }
  /**
   * Returns true if the strategy has at least one plugin with the given
   * callback.
   *
   * @param {string} name The name of the callback to check for.
   * @return {boolean}
   */
  hasCallback(name) {
    for (const plugin of this._strategy.plugins) {
      if (name in plugin) {
        return true;
      }
    }
    return false;
  }
  /**
   * Runs all plugin callbacks matching the given name, in order, passing the
   * given param object (merged ith the current plugin state) as the only
   * argument.
   *
   * Note: since this method runs all plugins, it's not suitable for cases
   * where the return value of a callback needs to be applied prior to calling
   * the next callback. See
   * {@link workbox-strategies.StrategyHandler#iterateCallbacks}
   * below for how to handle that case.
   *
   * @param {string} name The name of the callback to run within each plugin.
   * @param {Object} param The object to pass as the first (and only) param
   *     when executing each callback. This object will be merged with the
   *     current plugin state prior to callback execution.
   */
  async runCallbacks(name, param) {
    for (const callback of this.iterateCallbacks(name)) {
      await callback(param);
    }
  }
  /**
   * Accepts a callback and returns an iterable of matching plugin callbacks,
   * where each callback is wrapped with the current handler state (i.e. when
   * you call each callback, whatever object parameter you pass it will
   * be merged with the plugin's current state).
   *
   * @param {string} name The name fo the callback to run
   * @return {Array<Function>}
   */
  *iterateCallbacks(name) {
    for (const plugin of this._strategy.plugins) {
      if (typeof plugin[name] === "function") {
        const state = this._pluginStateMap.get(plugin);
        const statefulCallback = (param) => {
          const statefulParam = Object.assign(Object.assign({}, param), { state });
          return plugin[name](statefulParam);
        };
        yield statefulCallback;
      }
    }
  }
  /**
   * Adds a promise to the
   * [extend lifetime promises]{@link https://w3c.github.io/ServiceWorker/#extendableevent-extend-lifetime-promises}
   * of the event event associated with the request being handled (usually a
   * `FetchEvent`).
   *
   * Note: you can await
   * {@link workbox-strategies.StrategyHandler~doneWaiting}
   * to know when all added promises have settled.
   *
   * @param {Promise} promise A promise to add to the extend lifetime promises
   *     of the event that triggered the request.
   */
  waitUntil(promise) {
    this._extendLifetimePromises.push(promise);
    return promise;
  }
  /**
   * Returns a promise that resolves once all promises passed to
   * {@link workbox-strategies.StrategyHandler~waitUntil}
   * have settled.
   *
   * Note: any work done after `doneWaiting()` settles should be manually
   * passed to an event's `waitUntil()` method (not this handler's
   * `waitUntil()` method), otherwise the service worker thread my be killed
   * prior to your work completing.
   */
  async doneWaiting() {
    let promise;
    while (promise = this._extendLifetimePromises.shift()) {
      await promise;
    }
  }
  /**
   * Stops running the strategy and immediately resolves any pending
   * `waitUntil()` promises.
   */
  destroy() {
    this._handlerDeferred.resolve(null);
  }
  /**
   * This method will call cacheWillUpdate on the available plugins (or use
   * status === 200) to determine if the Response is safe and valid to cache.
   *
   * @param {Request} options.request
   * @param {Response} options.response
   * @return {Promise<Response|undefined>}
   *
   * @private
   */
  async _ensureResponseSafeToCache(response) {
    let responseToCache = response;
    let pluginsUsed = false;
    for (const callback of this.iterateCallbacks("cacheWillUpdate")) {
      responseToCache = await callback({
        request: this.request,
        response: responseToCache,
        event: this.event
      }) || void 0;
      pluginsUsed = true;
      if (!responseToCache) {
        break;
      }
    }
    if (!pluginsUsed) {
      if (responseToCache && responseToCache.status !== 200) {
        responseToCache = void 0;
      }
      if (true) {
        if (responseToCache) {
          if (responseToCache.status !== 200) {
            if (responseToCache.status === 0) {
              logger.warn(`The response for '${this.request.url}' is an opaque response. The caching strategy that you're using will not cache opaque responses by default.`);
            } else {
              logger.debug(`The response for '${this.request.url}' returned a status code of '${response.status}' and won't be cached as a result.`);
            }
          }
        }
      }
    }
    return responseToCache;
  }
};

// node_modules/workbox-strategies/Strategy.js
var Strategy = class {
  /**
   * Creates a new instance of the strategy and sets all documented option
   * properties as public instance properties.
   *
   * Note: if a custom strategy class extends the base Strategy class and does
   * not need more than these properties, it does not need to define its own
   * constructor.
   *
   * @param {Object} [options]
   * @param {string} [options.cacheName] Cache name to store and retrieve
   * requests. Defaults to the cache names provided by
   * {@link workbox-core.cacheNames}.
   * @param {Array<Object>} [options.plugins] [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
   * to use in conjunction with this caching strategy.
   * @param {Object} [options.fetchOptions] Values passed along to the
   * [`init`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters)
   * of [non-navigation](https://github.com/GoogleChrome/workbox/issues/1796)
   * `fetch()` requests made by this strategy.
   * @param {Object} [options.matchOptions] The
   * [`CacheQueryOptions`]{@link https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions}
   * for any `cache.match()` or `cache.put()` calls made by this strategy.
   */
  constructor(options = {}) {
    this.cacheName = cacheNames.getRuntimeName(options.cacheName);
    this.plugins = options.plugins || [];
    this.fetchOptions = options.fetchOptions;
    this.matchOptions = options.matchOptions;
  }
  /**
   * Perform a request strategy and returns a `Promise` that will resolve with
   * a `Response`, invoking all relevant plugin callbacks.
   *
   * When a strategy instance is registered with a Workbox
   * {@link workbox-routing.Route}, this method is automatically
   * called when the route matches.
   *
   * Alternatively, this method can be used in a standalone `FetchEvent`
   * listener by passing it to `event.respondWith()`.
   *
   * @param {FetchEvent|Object} options A `FetchEvent` or an object with the
   *     properties listed below.
   * @param {Request|string} options.request A request to run this strategy for.
   * @param {ExtendableEvent} options.event The event associated with the
   *     request.
   * @param {URL} [options.url]
   * @param {*} [options.params]
   */
  handle(options) {
    const [responseDone] = this.handleAll(options);
    return responseDone;
  }
  /**
   * Similar to {@link workbox-strategies.Strategy~handle}, but
   * instead of just returning a `Promise` that resolves to a `Response` it
   * it will return an tuple of `[response, done]` promises, where the former
   * (`response`) is equivalent to what `handle()` returns, and the latter is a
   * Promise that will resolve once any promises that were added to
   * `event.waitUntil()` as part of performing the strategy have completed.
   *
   * You can await the `done` promise to ensure any extra work performed by
   * the strategy (usually caching responses) completes successfully.
   *
   * @param {FetchEvent|Object} options A `FetchEvent` or an object with the
   *     properties listed below.
   * @param {Request|string} options.request A request to run this strategy for.
   * @param {ExtendableEvent} options.event The event associated with the
   *     request.
   * @param {URL} [options.url]
   * @param {*} [options.params]
   * @return {Array<Promise>} A tuple of [response, done]
   *     promises that can be used to determine when the response resolves as
   *     well as when the handler has completed all its work.
   */
  handleAll(options) {
    if (options instanceof FetchEvent) {
      options = {
        event: options,
        request: options.request
      };
    }
    const event = options.event;
    const request = typeof options.request === "string" ? new Request(options.request) : options.request;
    const params = "params" in options ? options.params : void 0;
    const handler = new StrategyHandler(this, { event, request, params });
    const responseDone = this._getResponse(handler, request, event);
    const handlerDone = this._awaitComplete(responseDone, handler, request, event);
    return [responseDone, handlerDone];
  }
  async _getResponse(handler, request, event) {
    await handler.runCallbacks("handlerWillStart", { event, request });
    let response = void 0;
    try {
      response = await this._handle(request, handler);
      if (!response || response.type === "error") {
        throw new WorkboxError("no-response", { url: request.url });
      }
    } catch (error) {
      if (error instanceof Error) {
        for (const callback of handler.iterateCallbacks("handlerDidError")) {
          response = await callback({ error, event, request });
          if (response) {
            break;
          }
        }
      }
      if (!response) {
        throw error;
      } else if (true) {
        logger.log(`While responding to '${getFriendlyURL(request.url)}', an ${error instanceof Error ? error.toString() : ""} error occurred. Using a fallback response provided by a handlerDidError plugin.`);
      }
    }
    for (const callback of handler.iterateCallbacks("handlerWillRespond")) {
      response = await callback({ event, request, response });
    }
    return response;
  }
  async _awaitComplete(responseDone, handler, request, event) {
    let response;
    let error;
    try {
      response = await responseDone;
    } catch (error2) {
    }
    try {
      await handler.runCallbacks("handlerDidRespond", {
        event,
        request,
        response
      });
      await handler.doneWaiting();
    } catch (waitUntilError) {
      if (waitUntilError instanceof Error) {
        error = waitUntilError;
      }
    }
    await handler.runCallbacks("handlerDidComplete", {
      event,
      request,
      response,
      error
    });
    handler.destroy();
    if (error) {
      throw error;
    }
  }
};

// node_modules/workbox-strategies/utils/messages.js
var messages2 = {
  strategyStart: (strategyName, request) => `Using ${strategyName} to respond to '${getFriendlyURL(request.url)}'`,
  printFinalResponse: (response) => {
    if (response) {
      logger.groupCollapsed(`View the final response here.`);
      logger.log(response || "[No response returned]");
      logger.groupEnd();
    }
  }
};

// node_modules/workbox-strategies/StaleWhileRevalidate.js
var StaleWhileRevalidate = class extends Strategy {
  /**
   * @param {Object} [options]
   * @param {string} [options.cacheName] Cache name to store and retrieve
   * requests. Defaults to cache names provided by
   * {@link workbox-core.cacheNames}.
   * @param {Array<Object>} [options.plugins] [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
   * to use in conjunction with this caching strategy.
   * @param {Object} [options.fetchOptions] Values passed along to the
   * [`init`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters)
   * of [non-navigation](https://github.com/GoogleChrome/workbox/issues/1796)
   * `fetch()` requests made by this strategy.
   * @param {Object} [options.matchOptions] [`CacheQueryOptions`](https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions)
   */
  constructor(options = {}) {
    super(options);
    if (!this.plugins.some((p2) => "cacheWillUpdate" in p2)) {
      this.plugins.unshift(cacheOkAndOpaquePlugin);
    }
  }
  /**
   * @private
   * @param {Request|string} request A request to run this strategy for.
   * @param {workbox-strategies.StrategyHandler} handler The event that
   *     triggered the request.
   * @return {Promise<Response>}
   */
  async _handle(request, handler) {
    const logs = [];
    if (true) {
      finalAssertExports.isInstance(request, Request, {
        moduleName: "workbox-strategies",
        className: this.constructor.name,
        funcName: "handle",
        paramName: "request"
      });
    }
    const fetchAndCachePromise = handler.fetchAndCachePut(request).catch(() => {
    });
    void handler.waitUntil(fetchAndCachePromise);
    let response = await handler.cacheMatch(request);
    let error;
    if (response) {
      if (true) {
        logs.push(`Found a cached response in the '${this.cacheName}' cache. Will update with the network response in the background.`);
      }
    } else {
      if (true) {
        logs.push(`No response found in the '${this.cacheName}' cache. Will wait for the network response.`);
      }
      try {
        response = await fetchAndCachePromise;
      } catch (err) {
        if (err instanceof Error) {
          error = err;
        }
      }
    }
    if (true) {
      logger.groupCollapsed(messages2.strategyStart(this.constructor.name, request));
      for (const log of logs) {
        logger.log(log);
      }
      messages2.printFinalResponse(response);
      logger.groupEnd();
    }
    if (!response) {
      throw new WorkboxError("no-response", { url: request.url, error });
    }
    return response;
  }
};

// node_modules/workbox-strategies/CacheFirst.js
var CacheFirst = class extends Strategy {
  /**
   * @private
   * @param {Request|string} request A request to run this strategy for.
   * @param {workbox-strategies.StrategyHandler} handler The event that
   *     triggered the request.
   * @return {Promise<Response>}
   */
  async _handle(request, handler) {
    const logs = [];
    if (true) {
      finalAssertExports.isInstance(request, Request, {
        moduleName: "workbox-strategies",
        className: this.constructor.name,
        funcName: "makeRequest",
        paramName: "request"
      });
    }
    let response = await handler.cacheMatch(request);
    let error = void 0;
    if (!response) {
      if (true) {
        logs.push(`No response found in the '${this.cacheName}' cache. Will respond with a network request.`);
      }
      try {
        response = await handler.fetchAndCachePut(request);
      } catch (err) {
        if (err instanceof Error) {
          error = err;
        }
      }
      if (true) {
        if (response) {
          logs.push(`Got response from network.`);
        } else {
          logs.push(`Unable to get a response from the network.`);
        }
      }
    } else {
      if (true) {
        logs.push(`Found a cached response in the '${this.cacheName}' cache.`);
      }
    }
    if (true) {
      logger.groupCollapsed(messages2.strategyStart(this.constructor.name, request));
      for (const log of logs) {
        logger.log(log);
      }
      messages2.printFinalResponse(response);
      logger.groupEnd();
    }
    if (!response) {
      throw new WorkboxError("no-response", { url: request.url, error });
    }
    return response;
  }
};

// node_modules/workbox-cacheable-response/_version.js
try {
  self["workbox:cacheable-response:6.5.4"] && _();
} catch (e3) {
}

// node_modules/workbox-cacheable-response/CacheableResponse.js
var CacheableResponse = class {
  /**
   * To construct a new CacheableResponse instance you must provide at least
   * one of the `config` properties.
   *
   * If both `statuses` and `headers` are specified, then both conditions must
   * be met for the `Response` to be considered cacheable.
   *
   * @param {Object} config
   * @param {Array<number>} [config.statuses] One or more status codes that a
   * `Response` can have and be considered cacheable.
   * @param {Object<string,string>} [config.headers] A mapping of header names
   * and expected values that a `Response` can have and be considered cacheable.
   * If multiple headers are provided, only one needs to be present.
   */
  constructor(config = {}) {
    if (true) {
      if (!(config.statuses || config.headers)) {
        throw new WorkboxError("statuses-or-headers-required", {
          moduleName: "workbox-cacheable-response",
          className: "CacheableResponse",
          funcName: "constructor"
        });
      }
      if (config.statuses) {
        finalAssertExports.isArray(config.statuses, {
          moduleName: "workbox-cacheable-response",
          className: "CacheableResponse",
          funcName: "constructor",
          paramName: "config.statuses"
        });
      }
      if (config.headers) {
        finalAssertExports.isType(config.headers, "object", {
          moduleName: "workbox-cacheable-response",
          className: "CacheableResponse",
          funcName: "constructor",
          paramName: "config.headers"
        });
      }
    }
    this._statuses = config.statuses;
    this._headers = config.headers;
  }
  /**
   * Checks a response to see whether it's cacheable or not, based on this
   * object's configuration.
   *
   * @param {Response} response The response whose cacheability is being
   * checked.
   * @return {boolean} `true` if the `Response` is cacheable, and `false`
   * otherwise.
   */
  isResponseCacheable(response) {
    if (true) {
      finalAssertExports.isInstance(response, Response, {
        moduleName: "workbox-cacheable-response",
        className: "CacheableResponse",
        funcName: "isResponseCacheable",
        paramName: "response"
      });
    }
    let cacheable = true;
    if (this._statuses) {
      cacheable = this._statuses.includes(response.status);
    }
    if (this._headers && cacheable) {
      cacheable = Object.keys(this._headers).some((headerName) => {
        return response.headers.get(headerName) === this._headers[headerName];
      });
    }
    if (true) {
      if (!cacheable) {
        logger.groupCollapsed(`The request for '${getFriendlyURL(response.url)}' returned a response that does not meet the criteria for being cached.`);
        logger.groupCollapsed(`View cacheability criteria here.`);
        logger.log(`Cacheable statuses: ` + JSON.stringify(this._statuses));
        logger.log(`Cacheable headers: ` + JSON.stringify(this._headers, null, 2));
        logger.groupEnd();
        const logFriendlyHeaders = {};
        response.headers.forEach((value, key) => {
          logFriendlyHeaders[key] = value;
        });
        logger.groupCollapsed(`View response status and headers here.`);
        logger.log(`Response status: ${response.status}`);
        logger.log(`Response headers: ` + JSON.stringify(logFriendlyHeaders, null, 2));
        logger.groupEnd();
        logger.groupCollapsed(`View full response details here.`);
        logger.log(response.headers);
        logger.log(response);
        logger.groupEnd();
        logger.groupEnd();
      }
    }
    return cacheable;
  }
};

// node_modules/workbox-cacheable-response/CacheableResponsePlugin.js
var CacheableResponsePlugin = class {
  /**
   * To construct a new CacheableResponsePlugin instance you must provide at
   * least one of the `config` properties.
   *
   * If both `statuses` and `headers` are specified, then both conditions must
   * be met for the `Response` to be considered cacheable.
   *
   * @param {Object} config
   * @param {Array<number>} [config.statuses] One or more status codes that a
   * `Response` can have and be considered cacheable.
   * @param {Object<string,string>} [config.headers] A mapping of header names
   * and expected values that a `Response` can have and be considered cacheable.
   * If multiple headers are provided, only one needs to be present.
   */
  constructor(config) {
    this.cacheWillUpdate = async ({ response }) => {
      if (this._cacheableResponse.isResponseCacheable(response)) {
        return response;
      }
      return null;
    };
    this._cacheableResponse = new CacheableResponse(config);
  }
};

// node_modules/workbox-core/_private/dontWaitFor.js
function dontWaitFor(promise) {
  void promise.then(() => {
  });
}

// node_modules/workbox-core/registerQuotaErrorCallback.js
function registerQuotaErrorCallback(callback) {
  if (true) {
    finalAssertExports.isType(callback, "function", {
      moduleName: "workbox-core",
      funcName: "register",
      paramName: "callback"
    });
  }
  quotaErrorCallbacks.add(callback);
  if (true) {
    logger.log("Registered a callback to respond to quota errors.", callback);
  }
}

// node_modules/idb/build/wrap-idb-value.js
var instanceOfAny = (object, constructors) => constructors.some((c5) => object instanceof c5);
var idbProxyableTypes;
var cursorAdvanceMethods;
function getIdbProxyableTypes() {
  return idbProxyableTypes || (idbProxyableTypes = [
    IDBDatabase,
    IDBObjectStore,
    IDBIndex,
    IDBCursor,
    IDBTransaction
  ]);
}
function getCursorAdvanceMethods() {
  return cursorAdvanceMethods || (cursorAdvanceMethods = [
    IDBCursor.prototype.advance,
    IDBCursor.prototype.continue,
    IDBCursor.prototype.continuePrimaryKey
  ]);
}
var cursorRequestMap = /* @__PURE__ */ new WeakMap();
var transactionDoneMap = /* @__PURE__ */ new WeakMap();
var transactionStoreNamesMap = /* @__PURE__ */ new WeakMap();
var transformCache = /* @__PURE__ */ new WeakMap();
var reverseTransformCache = /* @__PURE__ */ new WeakMap();
function promisifyRequest(request) {
  const promise = new Promise((resolve, reject) => {
    const unlisten = () => {
      request.removeEventListener("success", success);
      request.removeEventListener("error", error);
    };
    const success = () => {
      resolve(wrap(request.result));
      unlisten();
    };
    const error = () => {
      reject(request.error);
      unlisten();
    };
    request.addEventListener("success", success);
    request.addEventListener("error", error);
  });
  promise.then((value) => {
    if (value instanceof IDBCursor) {
      cursorRequestMap.set(value, request);
    }
  }).catch(() => {
  });
  reverseTransformCache.set(promise, request);
  return promise;
}
function cacheDonePromiseForTransaction(tx) {
  if (transactionDoneMap.has(tx))
    return;
  const done = new Promise((resolve, reject) => {
    const unlisten = () => {
      tx.removeEventListener("complete", complete);
      tx.removeEventListener("error", error);
      tx.removeEventListener("abort", error);
    };
    const complete = () => {
      resolve();
      unlisten();
    };
    const error = () => {
      reject(tx.error || new DOMException("AbortError", "AbortError"));
      unlisten();
    };
    tx.addEventListener("complete", complete);
    tx.addEventListener("error", error);
    tx.addEventListener("abort", error);
  });
  transactionDoneMap.set(tx, done);
}
var idbProxyTraps = {
  get(target, prop, receiver) {
    if (target instanceof IDBTransaction) {
      if (prop === "done")
        return transactionDoneMap.get(target);
      if (prop === "objectStoreNames") {
        return target.objectStoreNames || transactionStoreNamesMap.get(target);
      }
      if (prop === "store") {
        return receiver.objectStoreNames[1] ? void 0 : receiver.objectStore(receiver.objectStoreNames[0]);
      }
    }
    return wrap(target[prop]);
  },
  set(target, prop, value) {
    target[prop] = value;
    return true;
  },
  has(target, prop) {
    if (target instanceof IDBTransaction && (prop === "done" || prop === "store")) {
      return true;
    }
    return prop in target;
  }
};
function replaceTraps(callback) {
  idbProxyTraps = callback(idbProxyTraps);
}
function wrapFunction(func) {
  if (func === IDBDatabase.prototype.transaction && !("objectStoreNames" in IDBTransaction.prototype)) {
    return function(storeNames, ...args) {
      const tx = func.call(unwrap(this), storeNames, ...args);
      transactionStoreNamesMap.set(tx, storeNames.sort ? storeNames.sort() : [storeNames]);
      return wrap(tx);
    };
  }
  if (getCursorAdvanceMethods().includes(func)) {
    return function(...args) {
      func.apply(unwrap(this), args);
      return wrap(cursorRequestMap.get(this));
    };
  }
  return function(...args) {
    return wrap(func.apply(unwrap(this), args));
  };
}
function transformCachableValue(value) {
  if (typeof value === "function")
    return wrapFunction(value);
  if (value instanceof IDBTransaction)
    cacheDonePromiseForTransaction(value);
  if (instanceOfAny(value, getIdbProxyableTypes()))
    return new Proxy(value, idbProxyTraps);
  return value;
}
function wrap(value) {
  if (value instanceof IDBRequest)
    return promisifyRequest(value);
  if (transformCache.has(value))
    return transformCache.get(value);
  const newValue = transformCachableValue(value);
  if (newValue !== value) {
    transformCache.set(value, newValue);
    reverseTransformCache.set(newValue, value);
  }
  return newValue;
}
var unwrap = (value) => reverseTransformCache.get(value);

// node_modules/idb/build/index.js
function openDB(name, version, { blocked, upgrade, blocking, terminated } = {}) {
  const request = indexedDB.open(name, version);
  const openPromise = wrap(request);
  if (upgrade) {
    request.addEventListener("upgradeneeded", (event) => {
      upgrade(wrap(request.result), event.oldVersion, event.newVersion, wrap(request.transaction), event);
    });
  }
  if (blocked) {
    request.addEventListener("blocked", (event) => blocked(
      // Casting due to https://github.com/microsoft/TypeScript-DOM-lib-generator/pull/1405
      event.oldVersion,
      event.newVersion,
      event
    ));
  }
  openPromise.then((db) => {
    if (terminated)
      db.addEventListener("close", () => terminated());
    if (blocking) {
      db.addEventListener("versionchange", (event) => blocking(event.oldVersion, event.newVersion, event));
    }
  }).catch(() => {
  });
  return openPromise;
}
function deleteDB(name, { blocked } = {}) {
  const request = indexedDB.deleteDatabase(name);
  if (blocked) {
    request.addEventListener("blocked", (event) => blocked(
      // Casting due to https://github.com/microsoft/TypeScript-DOM-lib-generator/pull/1405
      event.oldVersion,
      event
    ));
  }
  return wrap(request).then(() => void 0);
}
var readMethods = ["get", "getKey", "getAll", "getAllKeys", "count"];
var writeMethods = ["put", "add", "delete", "clear"];
var cachedMethods = /* @__PURE__ */ new Map();
function getMethod(target, prop) {
  if (!(target instanceof IDBDatabase && !(prop in target) && typeof prop === "string")) {
    return;
  }
  if (cachedMethods.get(prop))
    return cachedMethods.get(prop);
  const targetFuncName = prop.replace(/FromIndex$/, "");
  const useIndex = prop !== targetFuncName;
  const isWrite = writeMethods.includes(targetFuncName);
  if (
    // Bail if the target doesn't exist on the target. Eg, getAll isn't in Edge.
    !(targetFuncName in (useIndex ? IDBIndex : IDBObjectStore).prototype) || !(isWrite || readMethods.includes(targetFuncName))
  ) {
    return;
  }
  const method = async function(storeName, ...args) {
    const tx = this.transaction(storeName, isWrite ? "readwrite" : "readonly");
    let target2 = tx.store;
    if (useIndex)
      target2 = target2.index(args.shift());
    return (await Promise.all([
      target2[targetFuncName](...args),
      isWrite && tx.done
    ]))[0];
  };
  cachedMethods.set(prop, method);
  return method;
}
replaceTraps((oldTraps) => ({
  ...oldTraps,
  get: (target, prop, receiver) => getMethod(target, prop) || oldTraps.get(target, prop, receiver),
  has: (target, prop) => !!getMethod(target, prop) || oldTraps.has(target, prop)
}));

// node_modules/workbox-expiration/_version.js
try {
  self["workbox:expiration:6.5.4"] && _();
} catch (e3) {
}

// node_modules/workbox-expiration/models/CacheTimestampsModel.js
var DB_NAME = "workbox-expiration";
var CACHE_OBJECT_STORE = "cache-entries";
var normalizeURL = (unNormalizedUrl) => {
  const url = new URL(unNormalizedUrl, location.href);
  url.hash = "";
  return url.href;
};
var CacheTimestampsModel = class {
  /**
   *
   * @param {string} cacheName
   *
   * @private
   */
  constructor(cacheName) {
    this._db = null;
    this._cacheName = cacheName;
  }
  /**
   * Performs an upgrade of indexedDB.
   *
   * @param {IDBPDatabase<CacheDbSchema>} db
   *
   * @private
   */
  _upgradeDb(db) {
    const objStore = db.createObjectStore(CACHE_OBJECT_STORE, { keyPath: "id" });
    objStore.createIndex("cacheName", "cacheName", { unique: false });
    objStore.createIndex("timestamp", "timestamp", { unique: false });
  }
  /**
   * Performs an upgrade of indexedDB and deletes deprecated DBs.
   *
   * @param {IDBPDatabase<CacheDbSchema>} db
   *
   * @private
   */
  _upgradeDbAndDeleteOldDbs(db) {
    this._upgradeDb(db);
    if (this._cacheName) {
      void deleteDB(this._cacheName);
    }
  }
  /**
   * @param {string} url
   * @param {number} timestamp
   *
   * @private
   */
  async setTimestamp(url, timestamp) {
    url = normalizeURL(url);
    const entry = {
      url,
      timestamp,
      cacheName: this._cacheName,
      // Creating an ID from the URL and cache name won't be necessary once
      // Edge switches to Chromium and all browsers we support work with
      // array keyPaths.
      id: this._getId(url)
    };
    const db = await this.getDb();
    const tx = db.transaction(CACHE_OBJECT_STORE, "readwrite", {
      durability: "relaxed"
    });
    await tx.store.put(entry);
    await tx.done;
  }
  /**
   * Returns the timestamp stored for a given URL.
   *
   * @param {string} url
   * @return {number | undefined}
   *
   * @private
   */
  async getTimestamp(url) {
    const db = await this.getDb();
    const entry = await db.get(CACHE_OBJECT_STORE, this._getId(url));
    return entry === null || entry === void 0 ? void 0 : entry.timestamp;
  }
  /**
   * Iterates through all the entries in the object store (from newest to
   * oldest) and removes entries once either `maxCount` is reached or the
   * entry's timestamp is less than `minTimestamp`.
   *
   * @param {number} minTimestamp
   * @param {number} maxCount
   * @return {Array<string>}
   *
   * @private
   */
  async expireEntries(minTimestamp, maxCount) {
    const db = await this.getDb();
    let cursor = await db.transaction(CACHE_OBJECT_STORE).store.index("timestamp").openCursor(null, "prev");
    const entriesToDelete = [];
    let entriesNotDeletedCount = 0;
    while (cursor) {
      const result = cursor.value;
      if (result.cacheName === this._cacheName) {
        if (minTimestamp && result.timestamp < minTimestamp || maxCount && entriesNotDeletedCount >= maxCount) {
          entriesToDelete.push(cursor.value);
        } else {
          entriesNotDeletedCount++;
        }
      }
      cursor = await cursor.continue();
    }
    const urlsDeleted = [];
    for (const entry of entriesToDelete) {
      await db.delete(CACHE_OBJECT_STORE, entry.id);
      urlsDeleted.push(entry.url);
    }
    return urlsDeleted;
  }
  /**
   * Takes a URL and returns an ID that will be unique in the object store.
   *
   * @param {string} url
   * @return {string}
   *
   * @private
   */
  _getId(url) {
    return this._cacheName + "|" + normalizeURL(url);
  }
  /**
   * Returns an open connection to the database.
   *
   * @private
   */
  async getDb() {
    if (!this._db) {
      this._db = await openDB(DB_NAME, 1, {
        upgrade: this._upgradeDbAndDeleteOldDbs.bind(this)
      });
    }
    return this._db;
  }
};

// node_modules/workbox-expiration/CacheExpiration.js
var CacheExpiration = class {
  /**
   * To construct a new CacheExpiration instance you must provide at least
   * one of the `config` properties.
   *
   * @param {string} cacheName Name of the cache to apply restrictions to.
   * @param {Object} config
   * @param {number} [config.maxEntries] The maximum number of entries to cache.
   * Entries used the least will be removed as the maximum is reached.
   * @param {number} [config.maxAgeSeconds] The maximum age of an entry before
   * it's treated as stale and removed.
   * @param {Object} [config.matchOptions] The [`CacheQueryOptions`](https://developer.mozilla.org/en-US/docs/Web/API/Cache/delete#Parameters)
   * that will be used when calling `delete()` on the cache.
   */
  constructor(cacheName, config = {}) {
    this._isRunning = false;
    this._rerunRequested = false;
    if (true) {
      finalAssertExports.isType(cacheName, "string", {
        moduleName: "workbox-expiration",
        className: "CacheExpiration",
        funcName: "constructor",
        paramName: "cacheName"
      });
      if (!(config.maxEntries || config.maxAgeSeconds)) {
        throw new WorkboxError("max-entries-or-age-required", {
          moduleName: "workbox-expiration",
          className: "CacheExpiration",
          funcName: "constructor"
        });
      }
      if (config.maxEntries) {
        finalAssertExports.isType(config.maxEntries, "number", {
          moduleName: "workbox-expiration",
          className: "CacheExpiration",
          funcName: "constructor",
          paramName: "config.maxEntries"
        });
      }
      if (config.maxAgeSeconds) {
        finalAssertExports.isType(config.maxAgeSeconds, "number", {
          moduleName: "workbox-expiration",
          className: "CacheExpiration",
          funcName: "constructor",
          paramName: "config.maxAgeSeconds"
        });
      }
    }
    this._maxEntries = config.maxEntries;
    this._maxAgeSeconds = config.maxAgeSeconds;
    this._matchOptions = config.matchOptions;
    this._cacheName = cacheName;
    this._timestampModel = new CacheTimestampsModel(cacheName);
  }
  /**
   * Expires entries for the given cache and given criteria.
   */
  async expireEntries() {
    if (this._isRunning) {
      this._rerunRequested = true;
      return;
    }
    this._isRunning = true;
    const minTimestamp = this._maxAgeSeconds ? Date.now() - this._maxAgeSeconds * 1e3 : 0;
    const urlsExpired = await this._timestampModel.expireEntries(minTimestamp, this._maxEntries);
    const cache = await self.caches.open(this._cacheName);
    for (const url of urlsExpired) {
      await cache.delete(url, this._matchOptions);
    }
    if (true) {
      if (urlsExpired.length > 0) {
        logger.groupCollapsed(`Expired ${urlsExpired.length} ${urlsExpired.length === 1 ? "entry" : "entries"} and removed ${urlsExpired.length === 1 ? "it" : "them"} from the '${this._cacheName}' cache.`);
        logger.log(`Expired the following ${urlsExpired.length === 1 ? "URL" : "URLs"}:`);
        urlsExpired.forEach((url) => logger.log(`    ${url}`));
        logger.groupEnd();
      } else {
        logger.debug(`Cache expiration ran and found no entries to remove.`);
      }
    }
    this._isRunning = false;
    if (this._rerunRequested) {
      this._rerunRequested = false;
      dontWaitFor(this.expireEntries());
    }
  }
  /**
   * Update the timestamp for the given URL. This ensures the when
   * removing entries based on maximum entries, most recently used
   * is accurate or when expiring, the timestamp is up-to-date.
   *
   * @param {string} url
   */
  async updateTimestamp(url) {
    if (true) {
      finalAssertExports.isType(url, "string", {
        moduleName: "workbox-expiration",
        className: "CacheExpiration",
        funcName: "updateTimestamp",
        paramName: "url"
      });
    }
    await this._timestampModel.setTimestamp(url, Date.now());
  }
  /**
   * Can be used to check if a URL has expired or not before it's used.
   *
   * This requires a look up from IndexedDB, so can be slow.
   *
   * Note: This method will not remove the cached entry, call
   * `expireEntries()` to remove indexedDB and Cache entries.
   *
   * @param {string} url
   * @return {boolean}
   */
  async isURLExpired(url) {
    if (!this._maxAgeSeconds) {
      if (true) {
        throw new WorkboxError(`expired-test-without-max-age`, {
          methodName: "isURLExpired",
          paramName: "maxAgeSeconds"
        });
      }
      return false;
    } else {
      const timestamp = await this._timestampModel.getTimestamp(url);
      const expireOlderThan = Date.now() - this._maxAgeSeconds * 1e3;
      return timestamp !== void 0 ? timestamp < expireOlderThan : true;
    }
  }
  /**
   * Removes the IndexedDB object store used to keep track of cache expiration
   * metadata.
   */
  async delete() {
    this._rerunRequested = false;
    await this._timestampModel.expireEntries(Infinity);
  }
};

// node_modules/workbox-expiration/ExpirationPlugin.js
var ExpirationPlugin = class {
  /**
   * @param {ExpirationPluginOptions} config
   * @param {number} [config.maxEntries] The maximum number of entries to cache.
   * Entries used the least will be removed as the maximum is reached.
   * @param {number} [config.maxAgeSeconds] The maximum age of an entry before
   * it's treated as stale and removed.
   * @param {Object} [config.matchOptions] The [`CacheQueryOptions`](https://developer.mozilla.org/en-US/docs/Web/API/Cache/delete#Parameters)
   * that will be used when calling `delete()` on the cache.
   * @param {boolean} [config.purgeOnQuotaError] Whether to opt this cache in to
   * automatic deletion if the available storage quota has been exceeded.
   */
  constructor(config = {}) {
    this.cachedResponseWillBeUsed = async ({ event, request, cacheName, cachedResponse }) => {
      if (!cachedResponse) {
        return null;
      }
      const isFresh = this._isResponseDateFresh(cachedResponse);
      const cacheExpiration = this._getCacheExpiration(cacheName);
      dontWaitFor(cacheExpiration.expireEntries());
      const updateTimestampDone = cacheExpiration.updateTimestamp(request.url);
      if (event) {
        try {
          event.waitUntil(updateTimestampDone);
        } catch (error) {
          if (true) {
            if ("request" in event) {
              logger.warn(`Unable to ensure service worker stays alive when updating cache entry for '${getFriendlyURL(event.request.url)}'.`);
            }
          }
        }
      }
      return isFresh ? cachedResponse : null;
    };
    this.cacheDidUpdate = async ({ cacheName, request }) => {
      if (true) {
        finalAssertExports.isType(cacheName, "string", {
          moduleName: "workbox-expiration",
          className: "Plugin",
          funcName: "cacheDidUpdate",
          paramName: "cacheName"
        });
        finalAssertExports.isInstance(request, Request, {
          moduleName: "workbox-expiration",
          className: "Plugin",
          funcName: "cacheDidUpdate",
          paramName: "request"
        });
      }
      const cacheExpiration = this._getCacheExpiration(cacheName);
      await cacheExpiration.updateTimestamp(request.url);
      await cacheExpiration.expireEntries();
    };
    if (true) {
      if (!(config.maxEntries || config.maxAgeSeconds)) {
        throw new WorkboxError("max-entries-or-age-required", {
          moduleName: "workbox-expiration",
          className: "Plugin",
          funcName: "constructor"
        });
      }
      if (config.maxEntries) {
        finalAssertExports.isType(config.maxEntries, "number", {
          moduleName: "workbox-expiration",
          className: "Plugin",
          funcName: "constructor",
          paramName: "config.maxEntries"
        });
      }
      if (config.maxAgeSeconds) {
        finalAssertExports.isType(config.maxAgeSeconds, "number", {
          moduleName: "workbox-expiration",
          className: "Plugin",
          funcName: "constructor",
          paramName: "config.maxAgeSeconds"
        });
      }
    }
    this._config = config;
    this._maxAgeSeconds = config.maxAgeSeconds;
    this._cacheExpirations = /* @__PURE__ */ new Map();
    if (config.purgeOnQuotaError) {
      registerQuotaErrorCallback(() => this.deleteCacheAndMetadata());
    }
  }
  /**
   * A simple helper method to return a CacheExpiration instance for a given
   * cache name.
   *
   * @param {string} cacheName
   * @return {CacheExpiration}
   *
   * @private
   */
  _getCacheExpiration(cacheName) {
    if (cacheName === cacheNames.getRuntimeName()) {
      throw new WorkboxError("expire-custom-caches-only");
    }
    let cacheExpiration = this._cacheExpirations.get(cacheName);
    if (!cacheExpiration) {
      cacheExpiration = new CacheExpiration(cacheName, this._config);
      this._cacheExpirations.set(cacheName, cacheExpiration);
    }
    return cacheExpiration;
  }
  /**
   * @param {Response} cachedResponse
   * @return {boolean}
   *
   * @private
   */
  _isResponseDateFresh(cachedResponse) {
    if (!this._maxAgeSeconds) {
      return true;
    }
    const dateHeaderTimestamp = this._getDateHeaderTimestamp(cachedResponse);
    if (dateHeaderTimestamp === null) {
      return true;
    }
    const now = Date.now();
    return dateHeaderTimestamp >= now - this._maxAgeSeconds * 1e3;
  }
  /**
   * This method will extract the data header and parse it into a useful
   * value.
   *
   * @param {Response} cachedResponse
   * @return {number|null}
   *
   * @private
   */
  _getDateHeaderTimestamp(cachedResponse) {
    if (!cachedResponse.headers.has("date")) {
      return null;
    }
    const dateHeader = cachedResponse.headers.get("date");
    const parsedDate = new Date(dateHeader);
    const headerTime = parsedDate.getTime();
    if (isNaN(headerTime)) {
      return null;
    }
    return headerTime;
  }
  /**
   * This is a helper method that performs two operations:
   *
   * - Deletes *all* the underlying Cache instances associated with this plugin
   * instance, by calling caches.delete() on your behalf.
   * - Deletes the metadata from IndexedDB used to keep track of expiration
   * details for each Cache instance.
   *
   * When using cache expiration, calling this method is preferable to calling
   * `caches.delete()` directly, since this will ensure that the IndexedDB
   * metadata is also cleanly removed and open IndexedDB instances are deleted.
   *
   * Note that if you're *not* using cache expiration for a given cache, calling
   * `caches.delete()` and passing in the cache's name should be sufficient.
   * There is no Workbox-specific method needed for cleanup in that case.
   */
  async deleteCacheAndMetadata() {
    for (const [cacheName, cacheExpiration] of this._cacheExpirations) {
      await self.caches.delete(cacheName);
      await cacheExpiration.delete();
    }
    this._cacheExpirations = /* @__PURE__ */ new Map();
  }
};

// node_modules/workbox-recipes/_version.js
try {
  self["workbox:recipes:6.5.4"] && _();
} catch (e3) {
}

// node_modules/workbox-recipes/warmStrategyCache.js
function warmStrategyCache(options) {
  self.addEventListener("install", (event) => {
    const done = options.urls.map((path) => options.strategy.handleAll({
      event,
      request: new Request(path)
    })[1]);
    event.waitUntil(Promise.all(done));
  });
}

// node_modules/workbox-strategies/NetworkFirst.js
var NetworkFirst = class extends Strategy {
  /**
   * @param {Object} [options]
   * @param {string} [options.cacheName] Cache name to store and retrieve
   * requests. Defaults to cache names provided by
   * {@link workbox-core.cacheNames}.
   * @param {Array<Object>} [options.plugins] [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
   * to use in conjunction with this caching strategy.
   * @param {Object} [options.fetchOptions] Values passed along to the
   * [`init`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters)
   * of [non-navigation](https://github.com/GoogleChrome/workbox/issues/1796)
   * `fetch()` requests made by this strategy.
   * @param {Object} [options.matchOptions] [`CacheQueryOptions`](https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions)
   * @param {number} [options.networkTimeoutSeconds] If set, any network requests
   * that fail to respond within the timeout will fallback to the cache.
   *
   * This option can be used to combat
   * "[lie-fi]{@link https://developers.google.com/web/fundamentals/performance/poor-connectivity/#lie-fi}"
   * scenarios.
   */
  constructor(options = {}) {
    super(options);
    if (!this.plugins.some((p2) => "cacheWillUpdate" in p2)) {
      this.plugins.unshift(cacheOkAndOpaquePlugin);
    }
    this._networkTimeoutSeconds = options.networkTimeoutSeconds || 0;
    if (true) {
      if (this._networkTimeoutSeconds) {
        finalAssertExports.isType(this._networkTimeoutSeconds, "number", {
          moduleName: "workbox-strategies",
          className: this.constructor.name,
          funcName: "constructor",
          paramName: "networkTimeoutSeconds"
        });
      }
    }
  }
  /**
   * @private
   * @param {Request|string} request A request to run this strategy for.
   * @param {workbox-strategies.StrategyHandler} handler The event that
   *     triggered the request.
   * @return {Promise<Response>}
   */
  async _handle(request, handler) {
    const logs = [];
    if (true) {
      finalAssertExports.isInstance(request, Request, {
        moduleName: "workbox-strategies",
        className: this.constructor.name,
        funcName: "handle",
        paramName: "makeRequest"
      });
    }
    const promises = [];
    let timeoutId;
    if (this._networkTimeoutSeconds) {
      const { id, promise } = this._getTimeoutPromise({ request, logs, handler });
      timeoutId = id;
      promises.push(promise);
    }
    const networkPromise = this._getNetworkPromise({
      timeoutId,
      request,
      logs,
      handler
    });
    promises.push(networkPromise);
    const response = await handler.waitUntil((async () => {
      return await handler.waitUntil(Promise.race(promises)) || // If Promise.race() resolved with null, it might be due to a network
      // timeout + a cache miss. If that were to happen, we'd rather wait until
      // the networkPromise resolves instead of returning null.
      // Note that it's fine to await an already-resolved promise, so we don't
      // have to check to see if it's still "in flight".
      await networkPromise;
    })());
    if (true) {
      logger.groupCollapsed(messages2.strategyStart(this.constructor.name, request));
      for (const log of logs) {
        logger.log(log);
      }
      messages2.printFinalResponse(response);
      logger.groupEnd();
    }
    if (!response) {
      throw new WorkboxError("no-response", { url: request.url });
    }
    return response;
  }
  /**
   * @param {Object} options
   * @param {Request} options.request
   * @param {Array} options.logs A reference to the logs array
   * @param {Event} options.event
   * @return {Promise<Response>}
   *
   * @private
   */
  _getTimeoutPromise({ request, logs, handler }) {
    let timeoutId;
    const timeoutPromise = new Promise((resolve) => {
      const onNetworkTimeout = async () => {
        if (true) {
          logs.push(`Timing out the network response at ${this._networkTimeoutSeconds} seconds.`);
        }
        resolve(await handler.cacheMatch(request));
      };
      timeoutId = setTimeout(onNetworkTimeout, this._networkTimeoutSeconds * 1e3);
    });
    return {
      promise: timeoutPromise,
      id: timeoutId
    };
  }
  /**
   * @param {Object} options
   * @param {number|undefined} options.timeoutId
   * @param {Request} options.request
   * @param {Array} options.logs A reference to the logs Array.
   * @param {Event} options.event
   * @return {Promise<Response>}
   *
   * @private
   */
  async _getNetworkPromise({ timeoutId, request, logs, handler }) {
    let error;
    let response;
    try {
      response = await handler.fetchAndCachePut(request);
    } catch (fetchError) {
      if (fetchError instanceof Error) {
        error = fetchError;
      }
    }
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    if (true) {
      if (response) {
        logs.push(`Got response from network.`);
      } else {
        logs.push(`Unable to get a response from the network. Will respond with a cached response.`);
      }
    }
    if (error || !response) {
      response = await handler.cacheMatch(request);
      if (true) {
        if (response) {
          logs.push(`Found a cached response in the '${this.cacheName}' cache.`);
        } else {
          logs.push(`No response found in the '${this.cacheName}' cache.`);
        }
      }
    }
    return response;
  }
};

// node_modules/workbox-core/_private/waitUntil.js
function waitUntil(event, asyncFn) {
  const returnPromise = asyncFn();
  event.waitUntil(returnPromise);
  return returnPromise;
}

// node_modules/workbox-precaching/_version.js
try {
  self["workbox:precaching:6.5.4"] && _();
} catch (e3) {
}

// node_modules/workbox-precaching/utils/createCacheKey.js
var REVISION_SEARCH_PARAM = "__WB_REVISION__";
function createCacheKey(entry) {
  if (!entry) {
    throw new WorkboxError("add-to-cache-list-unexpected-type", { entry });
  }
  if (typeof entry === "string") {
    const urlObject = new URL(entry, location.href);
    return {
      cacheKey: urlObject.href,
      url: urlObject.href
    };
  }
  const { revision, url } = entry;
  if (!url) {
    throw new WorkboxError("add-to-cache-list-unexpected-type", { entry });
  }
  if (!revision) {
    const urlObject = new URL(url, location.href);
    return {
      cacheKey: urlObject.href,
      url: urlObject.href
    };
  }
  const cacheKeyURL = new URL(url, location.href);
  const originalURL = new URL(url, location.href);
  cacheKeyURL.searchParams.set(REVISION_SEARCH_PARAM, revision);
  return {
    cacheKey: cacheKeyURL.href,
    url: originalURL.href
  };
}

// node_modules/workbox-precaching/utils/PrecacheInstallReportPlugin.js
var PrecacheInstallReportPlugin = class {
  constructor() {
    this.updatedURLs = [];
    this.notUpdatedURLs = [];
    this.handlerWillStart = async ({ request, state }) => {
      if (state) {
        state.originalRequest = request;
      }
    };
    this.cachedResponseWillBeUsed = async ({ event, state, cachedResponse }) => {
      if (event.type === "install") {
        if (state && state.originalRequest && state.originalRequest instanceof Request) {
          const url = state.originalRequest.url;
          if (cachedResponse) {
            this.notUpdatedURLs.push(url);
          } else {
            this.updatedURLs.push(url);
          }
        }
      }
      return cachedResponse;
    };
  }
};

// node_modules/workbox-precaching/utils/PrecacheCacheKeyPlugin.js
var PrecacheCacheKeyPlugin = class {
  constructor({ precacheController: precacheController2 }) {
    this.cacheKeyWillBeUsed = async ({ request, params }) => {
      const cacheKey = (params === null || params === void 0 ? void 0 : params.cacheKey) || this._precacheController.getCacheKeyForURL(request.url);
      return cacheKey ? new Request(cacheKey, { headers: request.headers }) : request;
    };
    this._precacheController = precacheController2;
  }
};

// node_modules/workbox-precaching/utils/printCleanupDetails.js
var logGroup = (groupTitle, deletedURLs) => {
  logger.groupCollapsed(groupTitle);
  for (const url of deletedURLs) {
    logger.log(url);
  }
  logger.groupEnd();
};
function printCleanupDetails(deletedURLs) {
  const deletionCount = deletedURLs.length;
  if (deletionCount > 0) {
    logger.groupCollapsed(`During precaching cleanup, ${deletionCount} cached request${deletionCount === 1 ? " was" : "s were"} deleted.`);
    logGroup("Deleted Cache Requests", deletedURLs);
    logger.groupEnd();
  }
}

// node_modules/workbox-precaching/utils/printInstallDetails.js
function _nestedGroup(groupTitle, urls) {
  if (urls.length === 0) {
    return;
  }
  logger.groupCollapsed(groupTitle);
  for (const url of urls) {
    logger.log(url);
  }
  logger.groupEnd();
}
function printInstallDetails(urlsToPrecache, urlsAlreadyPrecached) {
  const precachedCount = urlsToPrecache.length;
  const alreadyPrecachedCount = urlsAlreadyPrecached.length;
  if (precachedCount || alreadyPrecachedCount) {
    let message = `Precaching ${precachedCount} file${precachedCount === 1 ? "" : "s"}.`;
    if (alreadyPrecachedCount > 0) {
      message += ` ${alreadyPrecachedCount} file${alreadyPrecachedCount === 1 ? " is" : "s are"} already cached.`;
    }
    logger.groupCollapsed(message);
    _nestedGroup(`View newly precached URLs.`, urlsToPrecache);
    _nestedGroup(`View previously precached URLs.`, urlsAlreadyPrecached);
    logger.groupEnd();
  }
}

// node_modules/workbox-core/_private/canConstructResponseFromBodyStream.js
var supportStatus;
function canConstructResponseFromBodyStream() {
  if (supportStatus === void 0) {
    const testResponse = new Response("");
    if ("body" in testResponse) {
      try {
        new Response(testResponse.body);
        supportStatus = true;
      } catch (error) {
        supportStatus = false;
      }
    }
    supportStatus = false;
  }
  return supportStatus;
}

// node_modules/workbox-core/copyResponse.js
async function copyResponse(response, modifier) {
  let origin = null;
  if (response.url) {
    const responseURL = new URL(response.url);
    origin = responseURL.origin;
  }
  if (origin !== self.location.origin) {
    throw new WorkboxError("cross-origin-copy-response", { origin });
  }
  const clonedResponse = response.clone();
  const responseInit = {
    headers: new Headers(clonedResponse.headers),
    status: clonedResponse.status,
    statusText: clonedResponse.statusText
  };
  const modifiedResponseInit = modifier ? modifier(responseInit) : responseInit;
  const body = canConstructResponseFromBodyStream() ? clonedResponse.body : await clonedResponse.blob();
  return new Response(body, modifiedResponseInit);
}

// node_modules/workbox-precaching/PrecacheStrategy.js
var PrecacheStrategy = class extends Strategy {
  /**
   *
   * @param {Object} [options]
   * @param {string} [options.cacheName] Cache name to store and retrieve
   * requests. Defaults to the cache names provided by
   * {@link workbox-core.cacheNames}.
   * @param {Array<Object>} [options.plugins] {@link https://developers.google.com/web/tools/workbox/guides/using-plugins|Plugins}
   * to use in conjunction with this caching strategy.
   * @param {Object} [options.fetchOptions] Values passed along to the
   * {@link https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters|init}
   * of all fetch() requests made by this strategy.
   * @param {Object} [options.matchOptions] The
   * {@link https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions|CacheQueryOptions}
   * for any `cache.match()` or `cache.put()` calls made by this strategy.
   * @param {boolean} [options.fallbackToNetwork=true] Whether to attempt to
   * get the response from the network if there's a precache miss.
   */
  constructor(options = {}) {
    options.cacheName = cacheNames.getPrecacheName(options.cacheName);
    super(options);
    this._fallbackToNetwork = options.fallbackToNetwork === false ? false : true;
    this.plugins.push(PrecacheStrategy.copyRedirectedCacheableResponsesPlugin);
  }
  /**
   * @private
   * @param {Request|string} request A request to run this strategy for.
   * @param {workbox-strategies.StrategyHandler} handler The event that
   *     triggered the request.
   * @return {Promise<Response>}
   */
  async _handle(request, handler) {
    const response = await handler.cacheMatch(request);
    if (response) {
      return response;
    }
    if (handler.event && handler.event.type === "install") {
      return await this._handleInstall(request, handler);
    }
    return await this._handleFetch(request, handler);
  }
  async _handleFetch(request, handler) {
    let response;
    const params = handler.params || {};
    if (this._fallbackToNetwork) {
      if (true) {
        logger.warn(`The precached response for ${getFriendlyURL(request.url)} in ${this.cacheName} was not found. Falling back to the network.`);
      }
      const integrityInManifest = params.integrity;
      const integrityInRequest = request.integrity;
      const noIntegrityConflict = !integrityInRequest || integrityInRequest === integrityInManifest;
      response = await handler.fetch(new Request(request, {
        integrity: request.mode !== "no-cors" ? integrityInRequest || integrityInManifest : void 0
      }));
      if (integrityInManifest && noIntegrityConflict && request.mode !== "no-cors") {
        this._useDefaultCacheabilityPluginIfNeeded();
        const wasCached = await handler.cachePut(request, response.clone());
        if (true) {
          if (wasCached) {
            logger.log(`A response for ${getFriendlyURL(request.url)} was used to "repair" the precache.`);
          }
        }
      }
    } else {
      throw new WorkboxError("missing-precache-entry", {
        cacheName: this.cacheName,
        url: request.url
      });
    }
    if (true) {
      const cacheKey = params.cacheKey || await handler.getCacheKey(request, "read");
      logger.groupCollapsed(`Precaching is responding to: ` + getFriendlyURL(request.url));
      logger.log(`Serving the precached url: ${getFriendlyURL(cacheKey instanceof Request ? cacheKey.url : cacheKey)}`);
      logger.groupCollapsed(`View request details here.`);
      logger.log(request);
      logger.groupEnd();
      logger.groupCollapsed(`View response details here.`);
      logger.log(response);
      logger.groupEnd();
      logger.groupEnd();
    }
    return response;
  }
  async _handleInstall(request, handler) {
    this._useDefaultCacheabilityPluginIfNeeded();
    const response = await handler.fetch(request);
    const wasCached = await handler.cachePut(request, response.clone());
    if (!wasCached) {
      throw new WorkboxError("bad-precaching-response", {
        url: request.url,
        status: response.status
      });
    }
    return response;
  }
  /**
   * This method is complex, as there a number of things to account for:
   *
   * The `plugins` array can be set at construction, and/or it might be added to
   * to at any time before the strategy is used.
   *
   * At the time the strategy is used (i.e. during an `install` event), there
   * needs to be at least one plugin that implements `cacheWillUpdate` in the
   * array, other than `copyRedirectedCacheableResponsesPlugin`.
   *
   * - If this method is called and there are no suitable `cacheWillUpdate`
   * plugins, we need to add `defaultPrecacheCacheabilityPlugin`.
   *
   * - If this method is called and there is exactly one `cacheWillUpdate`, then
   * we don't have to do anything (this might be a previously added
   * `defaultPrecacheCacheabilityPlugin`, or it might be a custom plugin).
   *
   * - If this method is called and there is more than one `cacheWillUpdate`,
   * then we need to check if one is `defaultPrecacheCacheabilityPlugin`. If so,
   * we need to remove it. (This situation is unlikely, but it could happen if
   * the strategy is used multiple times, the first without a `cacheWillUpdate`,
   * and then later on after manually adding a custom `cacheWillUpdate`.)
   *
   * See https://github.com/GoogleChrome/workbox/issues/2737 for more context.
   *
   * @private
   */
  _useDefaultCacheabilityPluginIfNeeded() {
    let defaultPluginIndex = null;
    let cacheWillUpdatePluginCount = 0;
    for (const [index, plugin] of this.plugins.entries()) {
      if (plugin === PrecacheStrategy.copyRedirectedCacheableResponsesPlugin) {
        continue;
      }
      if (plugin === PrecacheStrategy.defaultPrecacheCacheabilityPlugin) {
        defaultPluginIndex = index;
      }
      if (plugin.cacheWillUpdate) {
        cacheWillUpdatePluginCount++;
      }
    }
    if (cacheWillUpdatePluginCount === 0) {
      this.plugins.push(PrecacheStrategy.defaultPrecacheCacheabilityPlugin);
    } else if (cacheWillUpdatePluginCount > 1 && defaultPluginIndex !== null) {
      this.plugins.splice(defaultPluginIndex, 1);
    }
  }
};
PrecacheStrategy.defaultPrecacheCacheabilityPlugin = {
  async cacheWillUpdate({ response }) {
    if (!response || response.status >= 400) {
      return null;
    }
    return response;
  }
};
PrecacheStrategy.copyRedirectedCacheableResponsesPlugin = {
  async cacheWillUpdate({ response }) {
    return response.redirected ? await copyResponse(response) : response;
  }
};

// node_modules/workbox-precaching/PrecacheController.js
var PrecacheController = class {
  /**
   * Create a new PrecacheController.
   *
   * @param {Object} [options]
   * @param {string} [options.cacheName] The cache to use for precaching.
   * @param {string} [options.plugins] Plugins to use when precaching as well
   * as responding to fetch events for precached assets.
   * @param {boolean} [options.fallbackToNetwork=true] Whether to attempt to
   * get the response from the network if there's a precache miss.
   */
  constructor({ cacheName, plugins = [], fallbackToNetwork = true } = {}) {
    this._urlsToCacheKeys = /* @__PURE__ */ new Map();
    this._urlsToCacheModes = /* @__PURE__ */ new Map();
    this._cacheKeysToIntegrities = /* @__PURE__ */ new Map();
    this._strategy = new PrecacheStrategy({
      cacheName: cacheNames.getPrecacheName(cacheName),
      plugins: [
        ...plugins,
        new PrecacheCacheKeyPlugin({ precacheController: this })
      ],
      fallbackToNetwork
    });
    this.install = this.install.bind(this);
    this.activate = this.activate.bind(this);
  }
  /**
   * @type {workbox-precaching.PrecacheStrategy} The strategy created by this controller and
   * used to cache assets and respond to fetch events.
   */
  get strategy() {
    return this._strategy;
  }
  /**
   * Adds items to the precache list, removing any duplicates and
   * stores the files in the
   * {@link workbox-core.cacheNames|"precache cache"} when the service
   * worker installs.
   *
   * This method can be called multiple times.
   *
   * @param {Array<Object|string>} [entries=[]] Array of entries to precache.
   */
  precache(entries) {
    this.addToCacheList(entries);
    if (!this._installAndActiveListenersAdded) {
      self.addEventListener("install", this.install);
      self.addEventListener("activate", this.activate);
      this._installAndActiveListenersAdded = true;
    }
  }
  /**
   * This method will add items to the precache list, removing duplicates
   * and ensuring the information is valid.
   *
   * @param {Array<workbox-precaching.PrecacheController.PrecacheEntry|string>} entries
   *     Array of entries to precache.
   */
  addToCacheList(entries) {
    if (true) {
      finalAssertExports.isArray(entries, {
        moduleName: "workbox-precaching",
        className: "PrecacheController",
        funcName: "addToCacheList",
        paramName: "entries"
      });
    }
    const urlsToWarnAbout = [];
    for (const entry of entries) {
      if (typeof entry === "string") {
        urlsToWarnAbout.push(entry);
      } else if (entry && entry.revision === void 0) {
        urlsToWarnAbout.push(entry.url);
      }
      const { cacheKey, url } = createCacheKey(entry);
      const cacheMode = typeof entry !== "string" && entry.revision ? "reload" : "default";
      if (this._urlsToCacheKeys.has(url) && this._urlsToCacheKeys.get(url) !== cacheKey) {
        throw new WorkboxError("add-to-cache-list-conflicting-entries", {
          firstEntry: this._urlsToCacheKeys.get(url),
          secondEntry: cacheKey
        });
      }
      if (typeof entry !== "string" && entry.integrity) {
        if (this._cacheKeysToIntegrities.has(cacheKey) && this._cacheKeysToIntegrities.get(cacheKey) !== entry.integrity) {
          throw new WorkboxError("add-to-cache-list-conflicting-integrities", {
            url
          });
        }
        this._cacheKeysToIntegrities.set(cacheKey, entry.integrity);
      }
      this._urlsToCacheKeys.set(url, cacheKey);
      this._urlsToCacheModes.set(url, cacheMode);
      if (urlsToWarnAbout.length > 0) {
        const warningMessage = `Workbox is precaching URLs without revision info: ${urlsToWarnAbout.join(", ")}
This is generally NOT safe. Learn more at https://bit.ly/wb-precache`;
        if (false) {
          console.warn(warningMessage);
        } else {
          logger.warn(warningMessage);
        }
      }
    }
  }
  /**
   * Precaches new and updated assets. Call this method from the service worker
   * install event.
   *
   * Note: this method calls `event.waitUntil()` for you, so you do not need
   * to call it yourself in your event handlers.
   *
   * @param {ExtendableEvent} event
   * @return {Promise<workbox-precaching.InstallResult>}
   */
  install(event) {
    return waitUntil(event, async () => {
      const installReportPlugin = new PrecacheInstallReportPlugin();
      this.strategy.plugins.push(installReportPlugin);
      for (const [url, cacheKey] of this._urlsToCacheKeys) {
        const integrity = this._cacheKeysToIntegrities.get(cacheKey);
        const cacheMode = this._urlsToCacheModes.get(url);
        const request = new Request(url, {
          integrity,
          cache: cacheMode,
          credentials: "same-origin"
        });
        await Promise.all(this.strategy.handleAll({
          params: { cacheKey },
          request,
          event
        }));
      }
      const { updatedURLs, notUpdatedURLs } = installReportPlugin;
      if (true) {
        printInstallDetails(updatedURLs, notUpdatedURLs);
      }
      return { updatedURLs, notUpdatedURLs };
    });
  }
  /**
   * Deletes assets that are no longer present in the current precache manifest.
   * Call this method from the service worker activate event.
   *
   * Note: this method calls `event.waitUntil()` for you, so you do not need
   * to call it yourself in your event handlers.
   *
   * @param {ExtendableEvent} event
   * @return {Promise<workbox-precaching.CleanupResult>}
   */
  activate(event) {
    return waitUntil(event, async () => {
      const cache = await self.caches.open(this.strategy.cacheName);
      const currentlyCachedRequests = await cache.keys();
      const expectedCacheKeys = new Set(this._urlsToCacheKeys.values());
      const deletedURLs = [];
      for (const request of currentlyCachedRequests) {
        if (!expectedCacheKeys.has(request.url)) {
          await cache.delete(request);
          deletedURLs.push(request.url);
        }
      }
      if (true) {
        printCleanupDetails(deletedURLs);
      }
      return { deletedURLs };
    });
  }
  /**
   * Returns a mapping of a precached URL to the corresponding cache key, taking
   * into account the revision information for the URL.
   *
   * @return {Map<string, string>} A URL to cache key mapping.
   */
  getURLsToCacheKeys() {
    return this._urlsToCacheKeys;
  }
  /**
   * Returns a list of all the URLs that have been precached by the current
   * service worker.
   *
   * @return {Array<string>} The precached URLs.
   */
  getCachedURLs() {
    return [...this._urlsToCacheKeys.keys()];
  }
  /**
   * Returns the cache key used for storing a given URL. If that URL is
   * unversioned, like `/index.html', then the cache key will be the original
   * URL with a search parameter appended to it.
   *
   * @param {string} url A URL whose cache key you want to look up.
   * @return {string} The versioned URL that corresponds to a cache key
   * for the original URL, or undefined if that URL isn't precached.
   */
  getCacheKeyForURL(url) {
    const urlObject = new URL(url, location.href);
    return this._urlsToCacheKeys.get(urlObject.href);
  }
  /**
   * @param {string} url A cache key whose SRI you want to look up.
   * @return {string} The subresource integrity associated with the cache key,
   * or undefined if it's not set.
   */
  getIntegrityForCacheKey(cacheKey) {
    return this._cacheKeysToIntegrities.get(cacheKey);
  }
  /**
   * This acts as a drop-in replacement for
   * [`cache.match()`](https://developer.mozilla.org/en-US/docs/Web/API/Cache/match)
   * with the following differences:
   *
   * - It knows what the name of the precache is, and only checks in that cache.
   * - It allows you to pass in an "original" URL without versioning parameters,
   * and it will automatically look up the correct cache key for the currently
   * active revision of that URL.
   *
   * E.g., `matchPrecache('index.html')` will find the correct precached
   * response for the currently active service worker, even if the actual cache
   * key is `'/index.html?__WB_REVISION__=1234abcd'`.
   *
   * @param {string|Request} request The key (without revisioning parameters)
   * to look up in the precache.
   * @return {Promise<Response|undefined>}
   */
  async matchPrecache(request) {
    const url = request instanceof Request ? request.url : request;
    const cacheKey = this.getCacheKeyForURL(url);
    if (cacheKey) {
      const cache = await self.caches.open(this.strategy.cacheName);
      return cache.match(cacheKey);
    }
    return void 0;
  }
  /**
   * Returns a function that looks up `url` in the precache (taking into
   * account revision information), and returns the corresponding `Response`.
   *
   * @param {string} url The precached URL which will be used to lookup the
   * `Response`.
   * @return {workbox-routing~handlerCallback}
   */
  createHandlerBoundToURL(url) {
    const cacheKey = this.getCacheKeyForURL(url);
    if (!cacheKey) {
      throw new WorkboxError("non-precached-url", { url });
    }
    return (options) => {
      options.request = new Request(url);
      options.params = Object.assign({ cacheKey }, options.params);
      return this.strategy.handle(options);
    };
  }
};

// node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js
var precacheController;
var getOrCreatePrecacheController = () => {
  if (!precacheController) {
    precacheController = new PrecacheController();
  }
  return precacheController;
};

// node_modules/workbox-precaching/matchPrecache.js
function matchPrecache(request) {
  const precacheController2 = getOrCreatePrecacheController();
  return precacheController2.matchPrecache(request);
}

// node_modules/workbox-recipes/offlineFallback.js
function offlineFallback(options = {}) {
  const pageFallback = options.pageFallback || "offline.html";
  const imageFallback = options.imageFallback || false;
  const fontFallback = options.fontFallback || false;
  self.addEventListener("install", (event) => {
    const files = [pageFallback];
    if (imageFallback) {
      files.push(imageFallback);
    }
    if (fontFallback) {
      files.push(fontFallback);
    }
    event.waitUntil(self.caches.open("workbox-offline-fallbacks").then((cache) => cache.addAll(files)));
  });
  const handler = async (options2) => {
    const dest = options2.request.destination;
    const cache = await self.caches.open("workbox-offline-fallbacks");
    if (dest === "document") {
      const match = await matchPrecache(pageFallback) || await cache.match(pageFallback);
      return match || Response.error();
    }
    if (dest === "image" && imageFallback !== false) {
      const match = await matchPrecache(imageFallback) || await cache.match(imageFallback);
      return match || Response.error();
    }
    if (dest === "font" && fontFallback !== false) {
      const match = await matchPrecache(fontFallback) || await cache.match(fontFallback);
      return match || Response.error();
    }
    return Response.error();
  };
  setCatchHandler(handler);
}

// node_modules/workbox-strategies/CacheOnly.js
var CacheOnly = class extends Strategy {
  /**
   * @private
   * @param {Request|string} request A request to run this strategy for.
   * @param {workbox-strategies.StrategyHandler} handler The event that
   *     triggered the request.
   * @return {Promise<Response>}
   */
  async _handle(request, handler) {
    if (true) {
      finalAssertExports.isInstance(request, Request, {
        moduleName: "workbox-strategies",
        className: this.constructor.name,
        funcName: "makeRequest",
        paramName: "request"
      });
    }
    const response = await handler.cacheMatch(request);
    if (true) {
      logger.groupCollapsed(messages2.strategyStart(this.constructor.name, request));
      if (response) {
        logger.log(`Found a cached response in the '${this.cacheName}' cache.`);
        messages2.printFinalResponse(response);
      } else {
        logger.log(`No response found in the '${this.cacheName}' cache.`);
      }
      logger.groupEnd();
    }
    if (!response) {
      throw new WorkboxError("no-response", { url: request.url });
    }
    return response;
  }
};

// node_modules/workbox-strategies/NetworkOnly.js
var NetworkOnly = class extends Strategy {
  /**
   * @param {Object} [options]
   * @param {Array<Object>} [options.plugins] [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
   * to use in conjunction with this caching strategy.
   * @param {Object} [options.fetchOptions] Values passed along to the
   * [`init`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters)
   * of [non-navigation](https://github.com/GoogleChrome/workbox/issues/1796)
   * `fetch()` requests made by this strategy.
   * @param {number} [options.networkTimeoutSeconds] If set, any network requests
   * that fail to respond within the timeout will result in a network error.
   */
  constructor(options = {}) {
    super(options);
    this._networkTimeoutSeconds = options.networkTimeoutSeconds || 0;
  }
  /**
   * @private
   * @param {Request|string} request A request to run this strategy for.
   * @param {workbox-strategies.StrategyHandler} handler The event that
   *     triggered the request.
   * @return {Promise<Response>}
   */
  async _handle(request, handler) {
    if (true) {
      finalAssertExports.isInstance(request, Request, {
        moduleName: "workbox-strategies",
        className: this.constructor.name,
        funcName: "_handle",
        paramName: "request"
      });
    }
    let error = void 0;
    let response;
    try {
      const promises = [
        handler.fetch(request)
      ];
      if (this._networkTimeoutSeconds) {
        const timeoutPromise = timeout(this._networkTimeoutSeconds * 1e3);
        promises.push(timeoutPromise);
      }
      response = await Promise.race(promises);
      if (!response) {
        throw new Error(`Timed out the network response after ${this._networkTimeoutSeconds} seconds.`);
      }
    } catch (err) {
      if (err instanceof Error) {
        error = err;
      }
    }
    if (true) {
      logger.groupCollapsed(messages2.strategyStart(this.constructor.name, request));
      if (response) {
        logger.log(`Got response from network.`);
      } else {
        logger.log(`Unable to get a response from the network.`);
      }
      messages2.printFinalResponse(response);
      logger.groupEnd();
    }
    if (!response) {
      throw new WorkboxError("no-response", { url: request.url, error });
    }
    return response;
  }
};

// node_modules/workbox-background-sync/_version.js
try {
  self["workbox:background-sync:6.5.4"] && _();
} catch (e3) {
}

// node_modules/workbox-background-sync/lib/QueueDb.js
var DB_VERSION = 3;
var DB_NAME2 = "workbox-background-sync";
var REQUEST_OBJECT_STORE_NAME = "requests";
var QUEUE_NAME_INDEX = "queueName";
var QueueDb = class {
  constructor() {
    this._db = null;
  }
  /**
   * Add QueueStoreEntry to underlying db.
   *
   * @param {UnidentifiedQueueStoreEntry} entry
   */
  async addEntry(entry) {
    const db = await this.getDb();
    const tx = db.transaction(REQUEST_OBJECT_STORE_NAME, "readwrite", {
      durability: "relaxed"
    });
    await tx.store.add(entry);
    await tx.done;
  }
  /**
   * Returns the first entry id in the ObjectStore.
   *
   * @return {number | undefined}
   */
  async getFirstEntryId() {
    const db = await this.getDb();
    const cursor = await db.transaction(REQUEST_OBJECT_STORE_NAME).store.openCursor();
    return cursor === null || cursor === void 0 ? void 0 : cursor.value.id;
  }
  /**
   * Get all the entries filtered by index
   *
   * @param queueName
   * @return {Promise<QueueStoreEntry[]>}
   */
  async getAllEntriesByQueueName(queueName) {
    const db = await this.getDb();
    const results = await db.getAllFromIndex(REQUEST_OBJECT_STORE_NAME, QUEUE_NAME_INDEX, IDBKeyRange.only(queueName));
    return results ? results : new Array();
  }
  /**
   * Returns the number of entries filtered by index
   *
   * @param queueName
   * @return {Promise<number>}
   */
  async getEntryCountByQueueName(queueName) {
    const db = await this.getDb();
    return db.countFromIndex(REQUEST_OBJECT_STORE_NAME, QUEUE_NAME_INDEX, IDBKeyRange.only(queueName));
  }
  /**
   * Deletes a single entry by id.
   *
   * @param {number} id the id of the entry to be deleted
   */
  async deleteEntry(id) {
    const db = await this.getDb();
    await db.delete(REQUEST_OBJECT_STORE_NAME, id);
  }
  /**
   *
   * @param queueName
   * @returns {Promise<QueueStoreEntry | undefined>}
   */
  async getFirstEntryByQueueName(queueName) {
    return await this.getEndEntryFromIndex(IDBKeyRange.only(queueName), "next");
  }
  /**
   *
   * @param queueName
   * @returns {Promise<QueueStoreEntry | undefined>}
   */
  async getLastEntryByQueueName(queueName) {
    return await this.getEndEntryFromIndex(IDBKeyRange.only(queueName), "prev");
  }
  /**
   * Returns either the first or the last entries, depending on direction.
   * Filtered by index.
   *
   * @param {IDBCursorDirection} direction
   * @param {IDBKeyRange} query
   * @return {Promise<QueueStoreEntry | undefined>}
   * @private
   */
  async getEndEntryFromIndex(query, direction) {
    const db = await this.getDb();
    const cursor = await db.transaction(REQUEST_OBJECT_STORE_NAME).store.index(QUEUE_NAME_INDEX).openCursor(query, direction);
    return cursor === null || cursor === void 0 ? void 0 : cursor.value;
  }
  /**
   * Returns an open connection to the database.
   *
   * @private
   */
  async getDb() {
    if (!this._db) {
      this._db = await openDB(DB_NAME2, DB_VERSION, {
        upgrade: this._upgradeDb
      });
    }
    return this._db;
  }
  /**
   * Upgrades QueueDB
   *
   * @param {IDBPDatabase<QueueDBSchema>} db
   * @param {number} oldVersion
   * @private
   */
  _upgradeDb(db, oldVersion) {
    if (oldVersion > 0 && oldVersion < DB_VERSION) {
      if (db.objectStoreNames.contains(REQUEST_OBJECT_STORE_NAME)) {
        db.deleteObjectStore(REQUEST_OBJECT_STORE_NAME);
      }
    }
    const objStore = db.createObjectStore(REQUEST_OBJECT_STORE_NAME, {
      autoIncrement: true,
      keyPath: "id"
    });
    objStore.createIndex(QUEUE_NAME_INDEX, QUEUE_NAME_INDEX, { unique: false });
  }
};

// node_modules/workbox-background-sync/lib/QueueStore.js
var QueueStore = class {
  /**
   * Associates this instance with a Queue instance, so entries added can be
   * identified by their queue name.
   *
   * @param {string} queueName
   */
  constructor(queueName) {
    this._queueName = queueName;
    this._queueDb = new QueueDb();
  }
  /**
   * Append an entry last in the queue.
   *
   * @param {Object} entry
   * @param {Object} entry.requestData
   * @param {number} [entry.timestamp]
   * @param {Object} [entry.metadata]
   */
  async pushEntry(entry) {
    if (true) {
      finalAssertExports.isType(entry, "object", {
        moduleName: "workbox-background-sync",
        className: "QueueStore",
        funcName: "pushEntry",
        paramName: "entry"
      });
      finalAssertExports.isType(entry.requestData, "object", {
        moduleName: "workbox-background-sync",
        className: "QueueStore",
        funcName: "pushEntry",
        paramName: "entry.requestData"
      });
    }
    delete entry.id;
    entry.queueName = this._queueName;
    await this._queueDb.addEntry(entry);
  }
  /**
   * Prepend an entry first in the queue.
   *
   * @param {Object} entry
   * @param {Object} entry.requestData
   * @param {number} [entry.timestamp]
   * @param {Object} [entry.metadata]
   */
  async unshiftEntry(entry) {
    if (true) {
      finalAssertExports.isType(entry, "object", {
        moduleName: "workbox-background-sync",
        className: "QueueStore",
        funcName: "unshiftEntry",
        paramName: "entry"
      });
      finalAssertExports.isType(entry.requestData, "object", {
        moduleName: "workbox-background-sync",
        className: "QueueStore",
        funcName: "unshiftEntry",
        paramName: "entry.requestData"
      });
    }
    const firstId = await this._queueDb.getFirstEntryId();
    if (firstId) {
      entry.id = firstId - 1;
    } else {
      delete entry.id;
    }
    entry.queueName = this._queueName;
    await this._queueDb.addEntry(entry);
  }
  /**
   * Removes and returns the last entry in the queue matching the `queueName`.
   *
   * @return {Promise<QueueStoreEntry|undefined>}
   */
  async popEntry() {
    return this._removeEntry(await this._queueDb.getLastEntryByQueueName(this._queueName));
  }
  /**
   * Removes and returns the first entry in the queue matching the `queueName`.
   *
   * @return {Promise<QueueStoreEntry|undefined>}
   */
  async shiftEntry() {
    return this._removeEntry(await this._queueDb.getFirstEntryByQueueName(this._queueName));
  }
  /**
   * Returns all entries in the store matching the `queueName`.
   *
   * @param {Object} options See {@link workbox-background-sync.Queue~getAll}
   * @return {Promise<Array<Object>>}
   */
  async getAll() {
    return await this._queueDb.getAllEntriesByQueueName(this._queueName);
  }
  /**
   * Returns the number of entries in the store matching the `queueName`.
   *
   * @param {Object} options See {@link workbox-background-sync.Queue~size}
   * @return {Promise<number>}
   */
  async size() {
    return await this._queueDb.getEntryCountByQueueName(this._queueName);
  }
  /**
   * Deletes the entry for the given ID.
   *
   * WARNING: this method does not ensure the deleted entry belongs to this
   * queue (i.e. matches the `queueName`). But this limitation is acceptable
   * as this class is not publicly exposed. An additional check would make
   * this method slower than it needs to be.
   *
   * @param {number} id
   */
  async deleteEntry(id) {
    await this._queueDb.deleteEntry(id);
  }
  /**
   * Removes and returns the first or last entry in the queue (based on the
   * `direction` argument) matching the `queueName`.
   *
   * @return {Promise<QueueStoreEntry|undefined>}
   * @private
   */
  async _removeEntry(entry) {
    if (entry) {
      await this.deleteEntry(entry.id);
    }
    return entry;
  }
};

// node_modules/workbox-background-sync/lib/StorableRequest.js
var serializableProperties = [
  "method",
  "referrer",
  "referrerPolicy",
  "mode",
  "credentials",
  "cache",
  "redirect",
  "integrity",
  "keepalive"
];
var StorableRequest = class {
  /**
   * Converts a Request object to a plain object that can be structured
   * cloned or JSON-stringified.
   *
   * @param {Request} request
   * @return {Promise<StorableRequest>}
   */
  static async fromRequest(request) {
    const requestData = {
      url: request.url,
      headers: {}
    };
    if (request.method !== "GET") {
      requestData.body = await request.clone().arrayBuffer();
    }
    for (const [key, value] of request.headers.entries()) {
      requestData.headers[key] = value;
    }
    for (const prop of serializableProperties) {
      if (request[prop] !== void 0) {
        requestData[prop] = request[prop];
      }
    }
    return new StorableRequest(requestData);
  }
  /**
   * Accepts an object of request data that can be used to construct a
   * `Request` but can also be stored in IndexedDB.
   *
   * @param {Object} requestData An object of request data that includes the
   *     `url` plus any relevant properties of
   *     [requestInit]{@link https://fetch.spec.whatwg.org/#requestinit}.
   */
  constructor(requestData) {
    if (true) {
      finalAssertExports.isType(requestData, "object", {
        moduleName: "workbox-background-sync",
        className: "StorableRequest",
        funcName: "constructor",
        paramName: "requestData"
      });
      finalAssertExports.isType(requestData.url, "string", {
        moduleName: "workbox-background-sync",
        className: "StorableRequest",
        funcName: "constructor",
        paramName: "requestData.url"
      });
    }
    if (requestData["mode"] === "navigate") {
      requestData["mode"] = "same-origin";
    }
    this._requestData = requestData;
  }
  /**
   * Returns a deep clone of the instances `_requestData` object.
   *
   * @return {Object}
   */
  toObject() {
    const requestData = Object.assign({}, this._requestData);
    requestData.headers = Object.assign({}, this._requestData.headers);
    if (requestData.body) {
      requestData.body = requestData.body.slice(0);
    }
    return requestData;
  }
  /**
   * Converts this instance to a Request.
   *
   * @return {Request}
   */
  toRequest() {
    return new Request(this._requestData.url, this._requestData);
  }
  /**
   * Creates and returns a deep clone of the instance.
   *
   * @return {StorableRequest}
   */
  clone() {
    return new StorableRequest(this.toObject());
  }
};

// node_modules/workbox-background-sync/Queue.js
var TAG_PREFIX = "workbox-background-sync";
var MAX_RETENTION_TIME = 60 * 24 * 7;
var queueNames = /* @__PURE__ */ new Set();
var convertEntry = (queueStoreEntry) => {
  const queueEntry = {
    request: new StorableRequest(queueStoreEntry.requestData).toRequest(),
    timestamp: queueStoreEntry.timestamp
  };
  if (queueStoreEntry.metadata) {
    queueEntry.metadata = queueStoreEntry.metadata;
  }
  return queueEntry;
};
var Queue = class {
  /**
   * Creates an instance of Queue with the given options
   *
   * @param {string} name The unique name for this queue. This name must be
   *     unique as it's used to register sync events and store requests
   *     in IndexedDB specific to this instance. An error will be thrown if
   *     a duplicate name is detected.
   * @param {Object} [options]
   * @param {Function} [options.onSync] A function that gets invoked whenever
   *     the 'sync' event fires. The function is invoked with an object
   *     containing the `queue` property (referencing this instance), and you
   *     can use the callback to customize the replay behavior of the queue.
   *     When not set the `replayRequests()` method is called.
   *     Note: if the replay fails after a sync event, make sure you throw an
   *     error, so the browser knows to retry the sync event later.
   * @param {number} [options.maxRetentionTime=7 days] The amount of time (in
   *     minutes) a request may be retried. After this amount of time has
   *     passed, the request will be deleted from the queue.
   * @param {boolean} [options.forceSyncFallback=false] If `true`, instead
   *     of attempting to use background sync events, always attempt to replay
   *     queued request at service worker startup. Most folks will not need
   *     this, unless you explicitly target a runtime like Electron that
   *     exposes the interfaces for background sync, but does not have a working
   *     implementation.
   */
  constructor(name, { forceSyncFallback, onSync, maxRetentionTime } = {}) {
    this._syncInProgress = false;
    this._requestsAddedDuringSync = false;
    if (queueNames.has(name)) {
      throw new WorkboxError("duplicate-queue-name", { name });
    } else {
      queueNames.add(name);
    }
    this._name = name;
    this._onSync = onSync || this.replayRequests;
    this._maxRetentionTime = maxRetentionTime || MAX_RETENTION_TIME;
    this._forceSyncFallback = Boolean(forceSyncFallback);
    this._queueStore = new QueueStore(this._name);
    this._addSyncListener();
  }
  /**
   * @return {string}
   */
  get name() {
    return this._name;
  }
  /**
   * Stores the passed request in IndexedDB (with its timestamp and any
   * metadata) at the end of the queue.
   *
   * @param {QueueEntry} entry
   * @param {Request} entry.request The request to store in the queue.
   * @param {Object} [entry.metadata] Any metadata you want associated with the
   *     stored request. When requests are replayed you'll have access to this
   *     metadata object in case you need to modify the request beforehand.
   * @param {number} [entry.timestamp] The timestamp (Epoch time in
   *     milliseconds) when the request was first added to the queue. This is
   *     used along with `maxRetentionTime` to remove outdated requests. In
   *     general you don't need to set this value, as it's automatically set
   *     for you (defaulting to `Date.now()`), but you can update it if you
   *     don't want particular requests to expire.
   */
  async pushRequest(entry) {
    if (true) {
      finalAssertExports.isType(entry, "object", {
        moduleName: "workbox-background-sync",
        className: "Queue",
        funcName: "pushRequest",
        paramName: "entry"
      });
      finalAssertExports.isInstance(entry.request, Request, {
        moduleName: "workbox-background-sync",
        className: "Queue",
        funcName: "pushRequest",
        paramName: "entry.request"
      });
    }
    await this._addRequest(entry, "push");
  }
  /**
   * Stores the passed request in IndexedDB (with its timestamp and any
   * metadata) at the beginning of the queue.
   *
   * @param {QueueEntry} entry
   * @param {Request} entry.request The request to store in the queue.
   * @param {Object} [entry.metadata] Any metadata you want associated with the
   *     stored request. When requests are replayed you'll have access to this
   *     metadata object in case you need to modify the request beforehand.
   * @param {number} [entry.timestamp] The timestamp (Epoch time in
   *     milliseconds) when the request was first added to the queue. This is
   *     used along with `maxRetentionTime` to remove outdated requests. In
   *     general you don't need to set this value, as it's automatically set
   *     for you (defaulting to `Date.now()`), but you can update it if you
   *     don't want particular requests to expire.
   */
  async unshiftRequest(entry) {
    if (true) {
      finalAssertExports.isType(entry, "object", {
        moduleName: "workbox-background-sync",
        className: "Queue",
        funcName: "unshiftRequest",
        paramName: "entry"
      });
      finalAssertExports.isInstance(entry.request, Request, {
        moduleName: "workbox-background-sync",
        className: "Queue",
        funcName: "unshiftRequest",
        paramName: "entry.request"
      });
    }
    await this._addRequest(entry, "unshift");
  }
  /**
   * Removes and returns the last request in the queue (along with its
   * timestamp and any metadata). The returned object takes the form:
   * `{request, timestamp, metadata}`.
   *
   * @return {Promise<QueueEntry | undefined>}
   */
  async popRequest() {
    return this._removeRequest("pop");
  }
  /**
   * Removes and returns the first request in the queue (along with its
   * timestamp and any metadata). The returned object takes the form:
   * `{request, timestamp, metadata}`.
   *
   * @return {Promise<QueueEntry | undefined>}
   */
  async shiftRequest() {
    return this._removeRequest("shift");
  }
  /**
   * Returns all the entries that have not expired (per `maxRetentionTime`).
   * Any expired entries are removed from the queue.
   *
   * @return {Promise<Array<QueueEntry>>}
   */
  async getAll() {
    const allEntries = await this._queueStore.getAll();
    const now = Date.now();
    const unexpiredEntries = [];
    for (const entry of allEntries) {
      const maxRetentionTimeInMs = this._maxRetentionTime * 60 * 1e3;
      if (now - entry.timestamp > maxRetentionTimeInMs) {
        await this._queueStore.deleteEntry(entry.id);
      } else {
        unexpiredEntries.push(convertEntry(entry));
      }
    }
    return unexpiredEntries;
  }
  /**
   * Returns the number of entries present in the queue.
   * Note that expired entries (per `maxRetentionTime`) are also included in this count.
   *
   * @return {Promise<number>}
   */
  async size() {
    return await this._queueStore.size();
  }
  /**
   * Adds the entry to the QueueStore and registers for a sync event.
   *
   * @param {Object} entry
   * @param {Request} entry.request
   * @param {Object} [entry.metadata]
   * @param {number} [entry.timestamp=Date.now()]
   * @param {string} operation ('push' or 'unshift')
   * @private
   */
  async _addRequest({ request, metadata, timestamp = Date.now() }, operation) {
    const storableRequest = await StorableRequest.fromRequest(request.clone());
    const entry = {
      requestData: storableRequest.toObject(),
      timestamp
    };
    if (metadata) {
      entry.metadata = metadata;
    }
    switch (operation) {
      case "push":
        await this._queueStore.pushEntry(entry);
        break;
      case "unshift":
        await this._queueStore.unshiftEntry(entry);
        break;
    }
    if (true) {
      logger.log(`Request for '${getFriendlyURL(request.url)}' has been added to background sync queue '${this._name}'.`);
    }
    if (this._syncInProgress) {
      this._requestsAddedDuringSync = true;
    } else {
      await this.registerSync();
    }
  }
  /**
   * Removes and returns the first or last (depending on `operation`) entry
   * from the QueueStore that's not older than the `maxRetentionTime`.
   *
   * @param {string} operation ('pop' or 'shift')
   * @return {Object|undefined}
   * @private
   */
  async _removeRequest(operation) {
    const now = Date.now();
    let entry;
    switch (operation) {
      case "pop":
        entry = await this._queueStore.popEntry();
        break;
      case "shift":
        entry = await this._queueStore.shiftEntry();
        break;
    }
    if (entry) {
      const maxRetentionTimeInMs = this._maxRetentionTime * 60 * 1e3;
      if (now - entry.timestamp > maxRetentionTimeInMs) {
        return this._removeRequest(operation);
      }
      return convertEntry(entry);
    } else {
      return void 0;
    }
  }
  /**
   * Loops through each request in the queue and attempts to re-fetch it.
   * If any request fails to re-fetch, it's put back in the same position in
   * the queue (which registers a retry for the next sync event).
   */
  async replayRequests() {
    let entry;
    while (entry = await this.shiftRequest()) {
      try {
        await fetch(entry.request.clone());
        if (true) {
          logger.log(`Request for '${getFriendlyURL(entry.request.url)}' has been replayed in queue '${this._name}'`);
        }
      } catch (error) {
        await this.unshiftRequest(entry);
        if (true) {
          logger.log(`Request for '${getFriendlyURL(entry.request.url)}' failed to replay, putting it back in queue '${this._name}'`);
        }
        throw new WorkboxError("queue-replay-failed", { name: this._name });
      }
    }
    if (true) {
      logger.log(`All requests in queue '${this.name}' have successfully replayed; the queue is now empty!`);
    }
  }
  /**
   * Registers a sync event with a tag unique to this instance.
   */
  async registerSync() {
    if ("sync" in self.registration && !this._forceSyncFallback) {
      try {
        await self.registration.sync.register(`${TAG_PREFIX}:${this._name}`);
      } catch (err) {
        if (true) {
          logger.warn(`Unable to register sync event for '${this._name}'.`, err);
        }
      }
    }
  }
  /**
   * In sync-supporting browsers, this adds a listener for the sync event.
   * In non-sync-supporting browsers, or if _forceSyncFallback is true, this
   * will retry the queue on service worker startup.
   *
   * @private
   */
  _addSyncListener() {
    if ("sync" in self.registration && !this._forceSyncFallback) {
      self.addEventListener("sync", (event) => {
        if (event.tag === `${TAG_PREFIX}:${this._name}`) {
          if (true) {
            logger.log(`Background sync for tag '${event.tag}' has been received`);
          }
          const syncComplete = async () => {
            this._syncInProgress = true;
            let syncError;
            try {
              await this._onSync({ queue: this });
            } catch (error) {
              if (error instanceof Error) {
                syncError = error;
                throw syncError;
              }
            } finally {
              if (this._requestsAddedDuringSync && !(syncError && !event.lastChance)) {
                await this.registerSync();
              }
              this._syncInProgress = false;
              this._requestsAddedDuringSync = false;
            }
          };
          event.waitUntil(syncComplete());
        }
      });
    } else {
      if (true) {
        logger.log(`Background sync replaying without background sync event`);
      }
      void this._onSync({ queue: this });
    }
  }
  /**
   * Returns the set of queue names. This is primarily used to reset the list
   * of queue names in tests.
   *
   * @return {Set<string>}
   *
   * @private
   */
  static get _queueNames() {
    return queueNames;
  }
};

// node_modules/workbox-background-sync/BackgroundSyncPlugin.js
var BackgroundSyncPlugin = class {
  /**
   * @param {string} name See the {@link workbox-background-sync.Queue}
   *     documentation for parameter details.
   * @param {Object} [options] See the
   *     {@link workbox-background-sync.Queue} documentation for
   *     parameter details.
   */
  constructor(name, options) {
    this.fetchDidFail = async ({ request }) => {
      await this._queue.pushRequest({ request });
    };
    this._queue = new Queue(name, options);
  }
};

// node_modules/workbox-core/_private/resultingClientExists.js
var MAX_RETRY_TIME = 2e3;
async function resultingClientExists(resultingClientId) {
  if (!resultingClientId) {
    return;
  }
  let existingWindows = await self.clients.matchAll({ type: "window" });
  const existingWindowIds = new Set(existingWindows.map((w) => w.id));
  let resultingWindow;
  const startTime = performance.now();
  while (performance.now() - startTime < MAX_RETRY_TIME) {
    existingWindows = await self.clients.matchAll({ type: "window" });
    resultingWindow = existingWindows.find((w) => {
      if (resultingClientId) {
        return w.id === resultingClientId;
      } else {
        return !existingWindowIds.has(w.id);
      }
    });
    if (resultingWindow) {
      break;
    }
    await timeout(100);
  }
  return resultingWindow;
}

// node_modules/workbox-broadcast-update/_version.js
try {
  self["workbox:broadcast-update:6.5.4"] && _();
} catch (e3) {
}

// node_modules/workbox-broadcast-update/responsesAreSame.js
var responsesAreSame = (firstResponse, secondResponse, headersToCheck) => {
  if (true) {
    if (!(firstResponse instanceof Response && secondResponse instanceof Response)) {
      throw new WorkboxError("invalid-responses-are-same-args");
    }
  }
  const atLeastOneHeaderAvailable = headersToCheck.some((header) => {
    return firstResponse.headers.has(header) && secondResponse.headers.has(header);
  });
  if (!atLeastOneHeaderAvailable) {
    if (true) {
      logger.warn(`Unable to determine where the response has been updated because none of the headers that would be checked are present.`);
      logger.debug(`Attempting to compare the following: `, firstResponse, secondResponse, headersToCheck);
    }
    return true;
  }
  return headersToCheck.every((header) => {
    const headerStateComparison = firstResponse.headers.has(header) === secondResponse.headers.has(header);
    const headerValueComparison = firstResponse.headers.get(header) === secondResponse.headers.get(header);
    return headerStateComparison && headerValueComparison;
  });
};

// node_modules/workbox-broadcast-update/utils/constants.js
var CACHE_UPDATED_MESSAGE_TYPE = "CACHE_UPDATED";
var CACHE_UPDATED_MESSAGE_META = "workbox-broadcast-update";
var NOTIFY_ALL_CLIENTS = true;
var DEFAULT_HEADERS_TO_CHECK = [
  "content-length",
  "etag",
  "last-modified"
];

// node_modules/workbox-broadcast-update/BroadcastCacheUpdate.js
var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
function defaultPayloadGenerator(data) {
  return {
    cacheName: data.cacheName,
    updatedURL: data.request.url
  };
}
var BroadcastCacheUpdate = class {
  /**
   * Construct a BroadcastCacheUpdate instance with a specific `channelName` to
   * broadcast messages on
   *
   * @param {Object} [options]
   * @param {Array<string>} [options.headersToCheck=['content-length', 'etag', 'last-modified']]
   *     A list of headers that will be used to determine whether the responses
   *     differ.
   * @param {string} [options.generatePayload] A function whose return value
   *     will be used as the `payload` field in any cache update messages sent
   *     to the window clients.
   * @param {boolean} [options.notifyAllClients=true] If true (the default) then
   *     all open clients will receive a message. If false, then only the client
   *     that make the original request will be notified of the update.
   */
  constructor({ generatePayload, headersToCheck, notifyAllClients } = {}) {
    this._headersToCheck = headersToCheck || DEFAULT_HEADERS_TO_CHECK;
    this._generatePayload = generatePayload || defaultPayloadGenerator;
    this._notifyAllClients = notifyAllClients !== null && notifyAllClients !== void 0 ? notifyAllClients : NOTIFY_ALL_CLIENTS;
  }
  /**
   * Compares two [Responses](https://developer.mozilla.org/en-US/docs/Web/API/Response)
   * and sends a message (via `postMessage()`) to all window clients if the
   * responses differ. Neither of the Responses can be
   * [opaque](https://developer.chrome.com/docs/workbox/caching-resources-during-runtime/#opaque-responses).
   *
   * The message that's posted has the following format (where `payload` can
   * be customized via the `generatePayload` option the instance is created
   * with):
   *
   * ```
   * {
   *   type: 'CACHE_UPDATED',
   *   meta: 'workbox-broadcast-update',
   *   payload: {
   *     cacheName: 'the-cache-name',
   *     updatedURL: 'https://example.com/'
   *   }
   * }
   * ```
   *
   * @param {Object} options
   * @param {Response} [options.oldResponse] Cached response to compare.
   * @param {Response} options.newResponse Possibly updated response to compare.
   * @param {Request} options.request The request.
   * @param {string} options.cacheName Name of the cache the responses belong
   *     to. This is included in the broadcast message.
   * @param {Event} options.event event The event that triggered
   *     this possible cache update.
   * @return {Promise} Resolves once the update is sent.
   */
  async notifyIfUpdated(options) {
    if (true) {
      finalAssertExports.isType(options.cacheName, "string", {
        moduleName: "workbox-broadcast-update",
        className: "BroadcastCacheUpdate",
        funcName: "notifyIfUpdated",
        paramName: "cacheName"
      });
      finalAssertExports.isInstance(options.newResponse, Response, {
        moduleName: "workbox-broadcast-update",
        className: "BroadcastCacheUpdate",
        funcName: "notifyIfUpdated",
        paramName: "newResponse"
      });
      finalAssertExports.isInstance(options.request, Request, {
        moduleName: "workbox-broadcast-update",
        className: "BroadcastCacheUpdate",
        funcName: "notifyIfUpdated",
        paramName: "request"
      });
    }
    if (!options.oldResponse) {
      return;
    }
    if (!responsesAreSame(options.oldResponse, options.newResponse, this._headersToCheck)) {
      if (true) {
        logger.log(`Newer response found (and cached) for:`, options.request.url);
      }
      const messageData = {
        type: CACHE_UPDATED_MESSAGE_TYPE,
        meta: CACHE_UPDATED_MESSAGE_META,
        payload: this._generatePayload(options)
      };
      if (options.request.mode === "navigate") {
        let resultingClientId;
        if (options.event instanceof FetchEvent) {
          resultingClientId = options.event.resultingClientId;
        }
        const resultingWin = await resultingClientExists(resultingClientId);
        if (!resultingWin || isSafari) {
          await timeout(3500);
        }
      }
      if (this._notifyAllClients) {
        const windows = await self.clients.matchAll({ type: "window" });
        for (const win of windows) {
          win.postMessage(messageData);
        }
      } else {
        if (options.event instanceof FetchEvent) {
          const client = await self.clients.get(options.event.clientId);
          client === null || client === void 0 ? void 0 : client.postMessage(messageData);
        }
      }
    }
  }
};

// node_modules/workbox-broadcast-update/BroadcastUpdatePlugin.js
var BroadcastUpdatePlugin = class {
  /**
   * Construct a {@link workbox-broadcast-update.BroadcastUpdate} instance with
   * the passed options and calls its `notifyIfUpdated` method whenever the
   * plugin's `cacheDidUpdate` callback is invoked.
   *
   * @param {Object} [options]
   * @param {Array<string>} [options.headersToCheck=['content-length', 'etag', 'last-modified']]
   *     A list of headers that will be used to determine whether the responses
   *     differ.
   * @param {string} [options.generatePayload] A function whose return value
   *     will be used as the `payload` field in any cache update messages sent
   *     to the window clients.
   */
  constructor(options) {
    this.cacheDidUpdate = async (options2) => {
      dontWaitFor(this._broadcastUpdate.notifyIfUpdated(options2));
    };
    this._broadcastUpdate = new BroadcastCacheUpdate(options);
  }
};

// node_modules/workbox-range-requests/_version.js
try {
  self["workbox:range-requests:6.5.4"] && _();
} catch (e3) {
}

// node_modules/workbox-range-requests/utils/calculateEffectiveBoundaries.js
function calculateEffectiveBoundaries(blob, start, end) {
  if (true) {
    finalAssertExports.isInstance(blob, Blob, {
      moduleName: "workbox-range-requests",
      funcName: "calculateEffectiveBoundaries",
      paramName: "blob"
    });
  }
  const blobSize = blob.size;
  if (end && end > blobSize || start && start < 0) {
    throw new WorkboxError("range-not-satisfiable", {
      size: blobSize,
      end,
      start
    });
  }
  let effectiveStart;
  let effectiveEnd;
  if (start !== void 0 && end !== void 0) {
    effectiveStart = start;
    effectiveEnd = end + 1;
  } else if (start !== void 0 && end === void 0) {
    effectiveStart = start;
    effectiveEnd = blobSize;
  } else if (end !== void 0 && start === void 0) {
    effectiveStart = blobSize - end;
    effectiveEnd = blobSize;
  }
  return {
    start: effectiveStart,
    end: effectiveEnd
  };
}

// node_modules/workbox-range-requests/utils/parseRangeHeader.js
function parseRangeHeader(rangeHeader) {
  if (true) {
    finalAssertExports.isType(rangeHeader, "string", {
      moduleName: "workbox-range-requests",
      funcName: "parseRangeHeader",
      paramName: "rangeHeader"
    });
  }
  const normalizedRangeHeader = rangeHeader.trim().toLowerCase();
  if (!normalizedRangeHeader.startsWith("bytes=")) {
    throw new WorkboxError("unit-must-be-bytes", { normalizedRangeHeader });
  }
  if (normalizedRangeHeader.includes(",")) {
    throw new WorkboxError("single-range-only", { normalizedRangeHeader });
  }
  const rangeParts = /(\d*)-(\d*)/.exec(normalizedRangeHeader);
  if (!rangeParts || !(rangeParts[1] || rangeParts[2])) {
    throw new WorkboxError("invalid-range-values", { normalizedRangeHeader });
  }
  return {
    start: rangeParts[1] === "" ? void 0 : Number(rangeParts[1]),
    end: rangeParts[2] === "" ? void 0 : Number(rangeParts[2])
  };
}

// node_modules/workbox-range-requests/createPartialResponse.js
async function createPartialResponse(request, originalResponse) {
  try {
    if (true) {
      finalAssertExports.isInstance(request, Request, {
        moduleName: "workbox-range-requests",
        funcName: "createPartialResponse",
        paramName: "request"
      });
      finalAssertExports.isInstance(originalResponse, Response, {
        moduleName: "workbox-range-requests",
        funcName: "createPartialResponse",
        paramName: "originalResponse"
      });
    }
    if (originalResponse.status === 206) {
      return originalResponse;
    }
    const rangeHeader = request.headers.get("range");
    if (!rangeHeader) {
      throw new WorkboxError("no-range-header");
    }
    const boundaries = parseRangeHeader(rangeHeader);
    const originalBlob = await originalResponse.blob();
    const effectiveBoundaries = calculateEffectiveBoundaries(originalBlob, boundaries.start, boundaries.end);
    const slicedBlob = originalBlob.slice(effectiveBoundaries.start, effectiveBoundaries.end);
    const slicedBlobSize = slicedBlob.size;
    const slicedResponse = new Response(slicedBlob, {
      // Status code 206 is for a Partial Content response.
      // See https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/206
      status: 206,
      statusText: "Partial Content",
      headers: originalResponse.headers
    });
    slicedResponse.headers.set("Content-Length", String(slicedBlobSize));
    slicedResponse.headers.set("Content-Range", `bytes ${effectiveBoundaries.start}-${effectiveBoundaries.end - 1}/${originalBlob.size}`);
    return slicedResponse;
  } catch (error) {
    if (true) {
      logger.warn(`Unable to construct a partial response; returning a 416 Range Not Satisfiable response instead.`);
      logger.groupCollapsed(`View details here.`);
      logger.log(error);
      logger.log(request);
      logger.log(originalResponse);
      logger.groupEnd();
    }
    return new Response("", {
      status: 416,
      statusText: "Range Not Satisfiable"
    });
  }
}

// node_modules/workbox-range-requests/RangeRequestsPlugin.js
var RangeRequestsPlugin = class {
  constructor() {
    this.cachedResponseWillBeUsed = async ({ request, cachedResponse }) => {
      if (cachedResponse && request.headers.has("range")) {
        return await createPartialResponse(request, cachedResponse);
      }
      return cachedResponse;
    };
  }
};

// node_modules/@sailrs/pwa/dist/esm/lib/cache/plugins.js
function h(e3) {
  switch (e3.name) {
    case "backgroundSync":
      return new BackgroundSyncPlugin(e3.queueName || "retryQueue", e3.options);
    case "broadcastUpdate":
      return new BroadcastUpdatePlugin(e3.options);
    case "cacheableResponses":
      return new CacheableResponsePlugin(e3.options);
    case "expiration":
      return new ExpirationPlugin(e3.options);
    case "rangeRequests":
      return new RangeRequestsPlugin();
  }
}

// node_modules/@sailrs/pwa/dist/esm/lib/cache/strategies.js
function A(e3) {
  const t3 = [];
  switch (e3.expiration && t3.push(h({ name: "expiration", options: e3.expiration })), e3.cacheableResponses && t3.push(h({ name: "cacheableResponses", options: e3.cacheableResponses })), e3.backgroundSync && t3.push(h({ name: "backgroundSync", options: e3.backgroundSync })), e3.rangeRequests && t3.push(h({ name: "rangeRequests" })), e3.broadcastUpdate && t3.push(h({ name: "broadcastUpdate", options: e3.broadcastUpdate })), e3.strategy) {
    case "cacheFirst":
      return new CacheFirst({ cacheName: e3.cacheName, plugins: t3 });
    case "cacheOnly":
      return new CacheOnly({ cacheName: e3.cacheName, plugins: t3 });
    case "networkFirst":
      return new NetworkFirst({ cacheName: e3.cacheName, plugins: t3, networkTimeoutSeconds: e3.networkTimeoutSeconds });
    case "networkOnly":
      return new NetworkOnly({ plugins: t3, networkTimeoutSeconds: e3.networkTimeoutSeconds });
    case "staleWhileRevalidate":
      return new StaleWhileRevalidate({ cacheName: e3.cacheName, plugins: t3 });
  }
}

// node_modules/@sailrs/pwa/dist/esm/lib/cache/recipes/warmCache.js
function h2(t3) {
  const { urls: r3, ...a3 } = t3, e3 = A({ strategy: t3.strategy || "cacheFirst", cacheName: "warmCache", ...a3 });
  warmStrategyCache({ urls: r3, strategy: e3 });
}

// node_modules/@sailrs/pwa/dist/esm/lib/cache/recipes/offlineFallback.js
function t2(l) {
  setDefaultHandler(new NetworkOnly()), offlineFallback(l);
}

// node_modules/@sailrs/pwa/dist/esm/lib/cache/recipes/pageCache.js
var c2 = ({ request: e3 }) => e3.mode === "navigate";
var o3 = { statuses: [0, 200] };
function n2(e3) {
  const t3 = A({ cacheName: "pages", strategy: "networkFirst", networkTimeoutSeconds: 3, cacheableResponses: e3.cacheableResponses || o3, ...e3 });
  registerRoute(e3.match || c2, t3);
}

// node_modules/@sailrs/pwa/dist/esm/lib/cache/recipes/staticResourcesCache.js
var c3 = ({ request: t3 }) => t3.destination === "style" || t3.destination === "script" || t3.destination === "worker";
var o4 = { statuses: [0, 200] };
function g(t3) {
  const e3 = A({ strategy: "staleWhileRevalidate", cacheName: "static-resources", cacheableResponses: t3.cacheableResponses || o4, ...t3 });
  registerRoute(t3.match || c3, e3);
}

// node_modules/@sailrs/pwa/dist/esm/lib/cache/recipes/imageCache.js
var c4 = ({ request: e3 }) => e3.destination === "image";
var o5 = { maxAgeSeconds: 30 * 24 * 60 * 60, maxEntries: 60 };
var r2 = { statuses: [0, 200] };
function p(e3 = {}) {
  const t3 = A({ cacheName: "images", strategy: "staleWhileRevalidate", expiration: e3.expiration || o5, cacheableResponses: e3.cacheableResponses || r2 });
  registerRoute(e3.match || c4, t3);
}

// node_modules/@sailrs/pwa/dist/esm/notifications/utils.js
function e2(o6) {
  return new Promise((i3) => {
    if (o6.data) {
      const { title: n3, ...t3 } = o6.data.json();
      self.registration.showNotification(n3, { ...t3 });
    }
    i3();
  });
}
function a2(o6) {
  return new Promise((i3) => {
    o6.action || i3(), clients.openWindow(o6.action), i3();
  });
}

// node_modules/@sailrs/pwa/dist/esm/notifications/serviceWorker.js
function f2({ onPush: i3, onNotificationClick: n3 } = {}) {
  if (i3) {
    const e3 = typeof i3 == "function" ? i3 : e2;
    self.addEventListener("push", (o6) => o6.waitUntil(e3(o6)));
  }
  if (n3) {
    const e3 = typeof n3 == "function" ? n3 : a2;
    self.addEventListener("notificationclick", (o6) => o6.waitUntil(e3(o6)));
  }
}

// node_modules/@sailrs/pwa/dist/esm/lib/setupServiceWorker.js
var i2 = (e3) => typeof e3 == "boolean";
function H(e3 = {}) {
  var o6, r3, t3, c5, p2, f3, h3, m, C, l, n3, u2, g2, k;
  if ((o6 = e3.recipes) != null && o6.pageCache) {
    const a3 = i2((r3 = e3.recipes) == null ? void 0 : r3.pageCache) ? {} : (t3 = e3.recipes) == null ? void 0 : t3.pageCache;
    n2(a3);
  }
  if ((c5 = e3.recipes) != null && c5.offlineFallback) {
    const a3 = i2((p2 = e3.recipes) == null ? void 0 : p2.offlineFallback) ? {} : (f3 = e3.recipes) == null ? void 0 : f3.offlineFallback;
    t2(a3);
  }
  if ((h3 = e3.recipes) != null && h3.warmCache && h2((m = e3.recipes) == null ? void 0 : m.warmCache), (C = e3.recipes) != null && C.staticResourcesCache) {
    const a3 = i2((l = e3.recipes) == null ? void 0 : l.staticResourcesCache) ? {} : (n3 = e3.recipes) == null ? void 0 : n3.staticResourcesCache;
    g(a3);
  }
  if ((u2 = e3.recipes) != null && u2.imageCache) {
    const a3 = i2((g2 = e3.recipes) == null ? void 0 : g2.imageCache) ? {} : (k = e3.recipes) == null ? void 0 : k.imageCache;
    p(a3);
  }
  e3.caches && Object.entries(e3.caches).forEach(async ([a3, s2]) => {
    const b = A({ cacheName: a3, ...s2 });
    registerRoute(s2.match, b);
  }), e3.pushNotifications && f2(e3.pushNotifications), self.addEventListener("message", (a3) => {
    var s2;
    a3 != null && a3.data && ((s2 = a3.data) == null ? void 0 : s2.type) === "SKIP_WAITING" && self.skipWaiting();
  });
}

// app/serviceWorker.ts
self.__WB_DISABLE_DEV_LOGS = true;
H({
  recipes: {
    pageCache: true,
    imageCache: true,
    staticResourcesCache: true,
    offlineFallback: {
      pageFallback: "/",
      imageFallback: "/images/logo.png"
    },
    warmCache: {
      strategy: "staleWhileRevalidate",
      urls: ["/"],
      expiration: {
        maxEntries: 100,
        maxAgeSeconds: 60 * 60 * 24 * 7
        // 7 days
      },
      cacheableResponses: {
        statuses: [0, 200]
      }
    }
  },
  pushNotifications: {
    onPush: true
  }
});
