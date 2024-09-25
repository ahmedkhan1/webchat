(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/react/cjs/react.development.js
  var require_react_development = __commonJS({
    "node_modules/react/cjs/react.development.js"(exports, module) {
      "use strict";
      if (true) {
        (function() {
          "use strict";
          if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === "function") {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
          }
          var ReactVersion = "18.3.1";
          var REACT_ELEMENT_TYPE = Symbol.for("react.element");
          var REACT_PORTAL_TYPE = Symbol.for("react.portal");
          var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
          var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
          var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
          var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
          var REACT_CONTEXT_TYPE = Symbol.for("react.context");
          var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
          var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
          var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
          var REACT_MEMO_TYPE = Symbol.for("react.memo");
          var REACT_LAZY_TYPE = Symbol.for("react.lazy");
          var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
          var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
          var FAUX_ITERATOR_SYMBOL = "@@iterator";
          function getIteratorFn(maybeIterable) {
            if (maybeIterable === null || typeof maybeIterable !== "object") {
              return null;
            }
            var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
            if (typeof maybeIterator === "function") {
              return maybeIterator;
            }
            return null;
          }
          var ReactCurrentDispatcher = {
            /**
             * @internal
             * @type {ReactComponent}
             */
            current: null
          };
          var ReactCurrentBatchConfig = {
            transition: null
          };
          var ReactCurrentActQueue = {
            current: null,
            // Used to reproduce behavior of `batchedUpdates` in legacy mode.
            isBatchingLegacy: false,
            didScheduleLegacyUpdate: false
          };
          var ReactCurrentOwner = {
            /**
             * @internal
             * @type {ReactComponent}
             */
            current: null
          };
          var ReactDebugCurrentFrame = {};
          var currentExtraStackFrame = null;
          function setExtraStackFrame(stack) {
            {
              currentExtraStackFrame = stack;
            }
          }
          {
            ReactDebugCurrentFrame.setExtraStackFrame = function(stack) {
              {
                currentExtraStackFrame = stack;
              }
            };
            ReactDebugCurrentFrame.getCurrentStack = null;
            ReactDebugCurrentFrame.getStackAddendum = function() {
              var stack = "";
              if (currentExtraStackFrame) {
                stack += currentExtraStackFrame;
              }
              var impl = ReactDebugCurrentFrame.getCurrentStack;
              if (impl) {
                stack += impl() || "";
              }
              return stack;
            };
          }
          var enableScopeAPI = false;
          var enableCacheElement = false;
          var enableTransitionTracing = false;
          var enableLegacyHidden = false;
          var enableDebugTracing = false;
          var ReactSharedInternals = {
            ReactCurrentDispatcher,
            ReactCurrentBatchConfig,
            ReactCurrentOwner
          };
          {
            ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;
            ReactSharedInternals.ReactCurrentActQueue = ReactCurrentActQueue;
          }
          function warn(format) {
            {
              {
                for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                  args[_key - 1] = arguments[_key];
                }
                printWarning("warn", format, args);
              }
            }
          }
          function error(format) {
            {
              {
                for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                  args[_key2 - 1] = arguments[_key2];
                }
                printWarning("error", format, args);
              }
            }
          }
          function printWarning(level, format, args) {
            {
              var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
              var stack = ReactDebugCurrentFrame2.getStackAddendum();
              if (stack !== "") {
                format += "%s";
                args = args.concat([stack]);
              }
              var argsWithFormat = args.map(function(item) {
                return String(item);
              });
              argsWithFormat.unshift("Warning: " + format);
              Function.prototype.apply.call(console[level], console, argsWithFormat);
            }
          }
          var didWarnStateUpdateForUnmountedComponent = {};
          function warnNoop(publicInstance, callerName) {
            {
              var _constructor = publicInstance.constructor;
              var componentName = _constructor && (_constructor.displayName || _constructor.name) || "ReactClass";
              var warningKey = componentName + "." + callerName;
              if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
                return;
              }
              error("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", callerName, componentName);
              didWarnStateUpdateForUnmountedComponent[warningKey] = true;
            }
          }
          var ReactNoopUpdateQueue = {
            /**
             * Checks whether or not this composite component is mounted.
             * @param {ReactClass} publicInstance The instance we want to test.
             * @return {boolean} True if mounted, false otherwise.
             * @protected
             * @final
             */
            isMounted: function(publicInstance) {
              return false;
            },
            /**
             * Forces an update. This should only be invoked when it is known with
             * certainty that we are **not** in a DOM transaction.
             *
             * You may want to call this when you know that some deeper aspect of the
             * component's state has changed but `setState` was not called.
             *
             * This will not invoke `shouldComponentUpdate`, but it will invoke
             * `componentWillUpdate` and `componentDidUpdate`.
             *
             * @param {ReactClass} publicInstance The instance that should rerender.
             * @param {?function} callback Called after component is updated.
             * @param {?string} callerName name of the calling function in the public API.
             * @internal
             */
            enqueueForceUpdate: function(publicInstance, callback, callerName) {
              warnNoop(publicInstance, "forceUpdate");
            },
            /**
             * Replaces all of the state. Always use this or `setState` to mutate state.
             * You should treat `this.state` as immutable.
             *
             * There is no guarantee that `this.state` will be immediately updated, so
             * accessing `this.state` after calling this method may return the old value.
             *
             * @param {ReactClass} publicInstance The instance that should rerender.
             * @param {object} completeState Next state.
             * @param {?function} callback Called after component is updated.
             * @param {?string} callerName name of the calling function in the public API.
             * @internal
             */
            enqueueReplaceState: function(publicInstance, completeState, callback, callerName) {
              warnNoop(publicInstance, "replaceState");
            },
            /**
             * Sets a subset of the state. This only exists because _pendingState is
             * internal. This provides a merging strategy that is not available to deep
             * properties which is confusing. TODO: Expose pendingState or don't use it
             * during the merge.
             *
             * @param {ReactClass} publicInstance The instance that should rerender.
             * @param {object} partialState Next partial state to be merged with state.
             * @param {?function} callback Called after component is updated.
             * @param {?string} Name of the calling function in the public API.
             * @internal
             */
            enqueueSetState: function(publicInstance, partialState, callback, callerName) {
              warnNoop(publicInstance, "setState");
            }
          };
          var assign = Object.assign;
          var emptyObject = {};
          {
            Object.freeze(emptyObject);
          }
          function Component10(props, context, updater) {
            this.props = props;
            this.context = context;
            this.refs = emptyObject;
            this.updater = updater || ReactNoopUpdateQueue;
          }
          Component10.prototype.isReactComponent = {};
          Component10.prototype.setState = function(partialState, callback) {
            if (typeof partialState !== "object" && typeof partialState !== "function" && partialState != null) {
              throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
            }
            this.updater.enqueueSetState(this, partialState, callback, "setState");
          };
          Component10.prototype.forceUpdate = function(callback) {
            this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
          };
          {
            var deprecatedAPIs = {
              isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
              replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
            };
            var defineDeprecationWarning = function(methodName, info) {
              Object.defineProperty(Component10.prototype, methodName, {
                get: function() {
                  warn("%s(...) is deprecated in plain JavaScript React classes. %s", info[0], info[1]);
                  return void 0;
                }
              });
            };
            for (var fnName in deprecatedAPIs) {
              if (deprecatedAPIs.hasOwnProperty(fnName)) {
                defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
              }
            }
          }
          function ComponentDummy() {
          }
          ComponentDummy.prototype = Component10.prototype;
          function PureComponent(props, context, updater) {
            this.props = props;
            this.context = context;
            this.refs = emptyObject;
            this.updater = updater || ReactNoopUpdateQueue;
          }
          var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
          pureComponentPrototype.constructor = PureComponent;
          assign(pureComponentPrototype, Component10.prototype);
          pureComponentPrototype.isPureReactComponent = true;
          function createRef() {
            var refObject = {
              current: null
            };
            {
              Object.seal(refObject);
            }
            return refObject;
          }
          var isArrayImpl = Array.isArray;
          function isArray(a) {
            return isArrayImpl(a);
          }
          function typeName(value) {
            {
              var hasToStringTag = typeof Symbol === "function" && Symbol.toStringTag;
              var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
              return type;
            }
          }
          function willCoercionThrow(value) {
            {
              try {
                testStringCoercion(value);
                return false;
              } catch (e) {
                return true;
              }
            }
          }
          function testStringCoercion(value) {
            return "" + value;
          }
          function checkKeyStringCoercion(value) {
            {
              if (willCoercionThrow(value)) {
                error("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", typeName(value));
                return testStringCoercion(value);
              }
            }
          }
          function getWrappedName(outerType, innerType, wrapperName) {
            var displayName = outerType.displayName;
            if (displayName) {
              return displayName;
            }
            var functionName = innerType.displayName || innerType.name || "";
            return functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName;
          }
          function getContextName(type) {
            return type.displayName || "Context";
          }
          function getComponentNameFromType(type) {
            if (type == null) {
              return null;
            }
            {
              if (typeof type.tag === "number") {
                error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.");
              }
            }
            if (typeof type === "function") {
              return type.displayName || type.name || null;
            }
            if (typeof type === "string") {
              return type;
            }
            switch (type) {
              case REACT_FRAGMENT_TYPE:
                return "Fragment";
              case REACT_PORTAL_TYPE:
                return "Portal";
              case REACT_PROFILER_TYPE:
                return "Profiler";
              case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
              case REACT_SUSPENSE_TYPE:
                return "Suspense";
              case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            }
            if (typeof type === "object") {
              switch (type.$$typeof) {
                case REACT_CONTEXT_TYPE:
                  var context = type;
                  return getContextName(context) + ".Consumer";
                case REACT_PROVIDER_TYPE:
                  var provider = type;
                  return getContextName(provider._context) + ".Provider";
                case REACT_FORWARD_REF_TYPE:
                  return getWrappedName(type, type.render, "ForwardRef");
                case REACT_MEMO_TYPE:
                  var outerName = type.displayName || null;
                  if (outerName !== null) {
                    return outerName;
                  }
                  return getComponentNameFromType(type.type) || "Memo";
                case REACT_LAZY_TYPE: {
                  var lazyComponent = type;
                  var payload = lazyComponent._payload;
                  var init = lazyComponent._init;
                  try {
                    return getComponentNameFromType(init(payload));
                  } catch (x) {
                    return null;
                  }
                }
              }
            }
            return null;
          }
          var hasOwnProperty = Object.prototype.hasOwnProperty;
          var RESERVED_PROPS = {
            key: true,
            ref: true,
            __self: true,
            __source: true
          };
          var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;
          {
            didWarnAboutStringRefs = {};
          }
          function hasValidRef(config) {
            {
              if (hasOwnProperty.call(config, "ref")) {
                var getter = Object.getOwnPropertyDescriptor(config, "ref").get;
                if (getter && getter.isReactWarning) {
                  return false;
                }
              }
            }
            return config.ref !== void 0;
          }
          function hasValidKey(config) {
            {
              if (hasOwnProperty.call(config, "key")) {
                var getter = Object.getOwnPropertyDescriptor(config, "key").get;
                if (getter && getter.isReactWarning) {
                  return false;
                }
              }
            }
            return config.key !== void 0;
          }
          function defineKeyPropWarningGetter(props, displayName) {
            var warnAboutAccessingKey = function() {
              {
                if (!specialPropKeyWarningShown) {
                  specialPropKeyWarningShown = true;
                  error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
                }
              }
            };
            warnAboutAccessingKey.isReactWarning = true;
            Object.defineProperty(props, "key", {
              get: warnAboutAccessingKey,
              configurable: true
            });
          }
          function defineRefPropWarningGetter(props, displayName) {
            var warnAboutAccessingRef = function() {
              {
                if (!specialPropRefWarningShown) {
                  specialPropRefWarningShown = true;
                  error("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
                }
              }
            };
            warnAboutAccessingRef.isReactWarning = true;
            Object.defineProperty(props, "ref", {
              get: warnAboutAccessingRef,
              configurable: true
            });
          }
          function warnIfStringRefCannotBeAutoConverted(config) {
            {
              if (typeof config.ref === "string" && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
                var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);
                if (!didWarnAboutStringRefs[componentName]) {
                  error('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', componentName, config.ref);
                  didWarnAboutStringRefs[componentName] = true;
                }
              }
            }
          }
          var ReactElement = function(type, key, ref, self, source, owner, props) {
            var element = {
              // This tag allows us to uniquely identify this as a React Element
              $$typeof: REACT_ELEMENT_TYPE,
              // Built-in properties that belong on the element
              type,
              key,
              ref,
              props,
              // Record the component responsible for creating this element.
              _owner: owner
            };
            {
              element._store = {};
              Object.defineProperty(element._store, "validated", {
                configurable: false,
                enumerable: false,
                writable: true,
                value: false
              });
              Object.defineProperty(element, "_self", {
                configurable: false,
                enumerable: false,
                writable: false,
                value: self
              });
              Object.defineProperty(element, "_source", {
                configurable: false,
                enumerable: false,
                writable: false,
                value: source
              });
              if (Object.freeze) {
                Object.freeze(element.props);
                Object.freeze(element);
              }
            }
            return element;
          };
          function createElement(type, config, children) {
            var propName;
            var props = {};
            var key = null;
            var ref = null;
            var self = null;
            var source = null;
            if (config != null) {
              if (hasValidRef(config)) {
                ref = config.ref;
                {
                  warnIfStringRefCannotBeAutoConverted(config);
                }
              }
              if (hasValidKey(config)) {
                {
                  checkKeyStringCoercion(config.key);
                }
                key = "" + config.key;
              }
              self = config.__self === void 0 ? null : config.__self;
              source = config.__source === void 0 ? null : config.__source;
              for (propName in config) {
                if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                  props[propName] = config[propName];
                }
              }
            }
            var childrenLength = arguments.length - 2;
            if (childrenLength === 1) {
              props.children = children;
            } else if (childrenLength > 1) {
              var childArray = Array(childrenLength);
              for (var i = 0; i < childrenLength; i++) {
                childArray[i] = arguments[i + 2];
              }
              {
                if (Object.freeze) {
                  Object.freeze(childArray);
                }
              }
              props.children = childArray;
            }
            if (type && type.defaultProps) {
              var defaultProps = type.defaultProps;
              for (propName in defaultProps) {
                if (props[propName] === void 0) {
                  props[propName] = defaultProps[propName];
                }
              }
            }
            {
              if (key || ref) {
                var displayName = typeof type === "function" ? type.displayName || type.name || "Unknown" : type;
                if (key) {
                  defineKeyPropWarningGetter(props, displayName);
                }
                if (ref) {
                  defineRefPropWarningGetter(props, displayName);
                }
              }
            }
            return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
          }
          function cloneAndReplaceKey(oldElement, newKey) {
            var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
            return newElement;
          }
          function cloneElement(element, config, children) {
            if (element === null || element === void 0) {
              throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + element + ".");
            }
            var propName;
            var props = assign({}, element.props);
            var key = element.key;
            var ref = element.ref;
            var self = element._self;
            var source = element._source;
            var owner = element._owner;
            if (config != null) {
              if (hasValidRef(config)) {
                ref = config.ref;
                owner = ReactCurrentOwner.current;
              }
              if (hasValidKey(config)) {
                {
                  checkKeyStringCoercion(config.key);
                }
                key = "" + config.key;
              }
              var defaultProps;
              if (element.type && element.type.defaultProps) {
                defaultProps = element.type.defaultProps;
              }
              for (propName in config) {
                if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                  if (config[propName] === void 0 && defaultProps !== void 0) {
                    props[propName] = defaultProps[propName];
                  } else {
                    props[propName] = config[propName];
                  }
                }
              }
            }
            var childrenLength = arguments.length - 2;
            if (childrenLength === 1) {
              props.children = children;
            } else if (childrenLength > 1) {
              var childArray = Array(childrenLength);
              for (var i = 0; i < childrenLength; i++) {
                childArray[i] = arguments[i + 2];
              }
              props.children = childArray;
            }
            return ReactElement(element.type, key, ref, self, source, owner, props);
          }
          function isValidElement(object) {
            return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
          }
          var SEPARATOR = ".";
          var SUBSEPARATOR = ":";
          function escape(key) {
            var escapeRegex = /[=:]/g;
            var escaperLookup = {
              "=": "=0",
              ":": "=2"
            };
            var escapedString = key.replace(escapeRegex, function(match) {
              return escaperLookup[match];
            });
            return "$" + escapedString;
          }
          var didWarnAboutMaps = false;
          var userProvidedKeyEscapeRegex = /\/+/g;
          function escapeUserProvidedKey(text) {
            return text.replace(userProvidedKeyEscapeRegex, "$&/");
          }
          function getElementKey(element, index) {
            if (typeof element === "object" && element !== null && element.key != null) {
              {
                checkKeyStringCoercion(element.key);
              }
              return escape("" + element.key);
            }
            return index.toString(36);
          }
          function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
            var type = typeof children;
            if (type === "undefined" || type === "boolean") {
              children = null;
            }
            var invokeCallback = false;
            if (children === null) {
              invokeCallback = true;
            } else {
              switch (type) {
                case "string":
                case "number":
                  invokeCallback = true;
                  break;
                case "object":
                  switch (children.$$typeof) {
                    case REACT_ELEMENT_TYPE:
                    case REACT_PORTAL_TYPE:
                      invokeCallback = true;
                  }
              }
            }
            if (invokeCallback) {
              var _child = children;
              var mappedChild = callback(_child);
              var childKey = nameSoFar === "" ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;
              if (isArray(mappedChild)) {
                var escapedChildKey = "";
                if (childKey != null) {
                  escapedChildKey = escapeUserProvidedKey(childKey) + "/";
                }
                mapIntoArray(mappedChild, array, escapedChildKey, "", function(c) {
                  return c;
                });
              } else if (mappedChild != null) {
                if (isValidElement(mappedChild)) {
                  {
                    if (mappedChild.key && (!_child || _child.key !== mappedChild.key)) {
                      checkKeyStringCoercion(mappedChild.key);
                    }
                  }
                  mappedChild = cloneAndReplaceKey(
                    mappedChild,
                    // Keep both the (mapped) and old keys if they differ, just as
                    // traverseAllChildren used to do for objects as children
                    escapedPrefix + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
                    (mappedChild.key && (!_child || _child.key !== mappedChild.key) ? (
                      // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                      // eslint-disable-next-line react-internal/safe-string-coercion
                      escapeUserProvidedKey("" + mappedChild.key) + "/"
                    ) : "") + childKey
                  );
                }
                array.push(mappedChild);
              }
              return 1;
            }
            var child;
            var nextName;
            var subtreeCount = 0;
            var nextNamePrefix = nameSoFar === "" ? SEPARATOR : nameSoFar + SUBSEPARATOR;
            if (isArray(children)) {
              for (var i = 0; i < children.length; i++) {
                child = children[i];
                nextName = nextNamePrefix + getElementKey(child, i);
                subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
              }
            } else {
              var iteratorFn = getIteratorFn(children);
              if (typeof iteratorFn === "function") {
                var iterableChildren = children;
                {
                  if (iteratorFn === iterableChildren.entries) {
                    if (!didWarnAboutMaps) {
                      warn("Using Maps as children is not supported. Use an array of keyed ReactElements instead.");
                    }
                    didWarnAboutMaps = true;
                  }
                }
                var iterator = iteratorFn.call(iterableChildren);
                var step;
                var ii = 0;
                while (!(step = iterator.next()).done) {
                  child = step.value;
                  nextName = nextNamePrefix + getElementKey(child, ii++);
                  subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
                }
              } else if (type === "object") {
                var childrenString = String(children);
                throw new Error("Objects are not valid as a React child (found: " + (childrenString === "[object Object]" ? "object with keys {" + Object.keys(children).join(", ") + "}" : childrenString) + "). If you meant to render a collection of children, use an array instead.");
              }
            }
            return subtreeCount;
          }
          function mapChildren(children, func, context) {
            if (children == null) {
              return children;
            }
            var result = [];
            var count = 0;
            mapIntoArray(children, result, "", "", function(child) {
              return func.call(context, child, count++);
            });
            return result;
          }
          function countChildren(children) {
            var n = 0;
            mapChildren(children, function() {
              n++;
            });
            return n;
          }
          function forEachChildren(children, forEachFunc, forEachContext) {
            mapChildren(children, function() {
              forEachFunc.apply(this, arguments);
            }, forEachContext);
          }
          function toArray(children) {
            return mapChildren(children, function(child) {
              return child;
            }) || [];
          }
          function onlyChild(children) {
            if (!isValidElement(children)) {
              throw new Error("React.Children.only expected to receive a single React element child.");
            }
            return children;
          }
          function createContext(defaultValue) {
            var context = {
              $$typeof: REACT_CONTEXT_TYPE,
              // As a workaround to support multiple concurrent renderers, we categorize
              // some renderers as primary and others as secondary. We only expect
              // there to be two concurrent renderers at most: React Native (primary) and
              // Fabric (secondary); React DOM (primary) and React ART (secondary).
              // Secondary renderers store their context values on separate fields.
              _currentValue: defaultValue,
              _currentValue2: defaultValue,
              // Used to track how many concurrent renderers this context currently
              // supports within in a single renderer. Such as parallel server rendering.
              _threadCount: 0,
              // These are circular
              Provider: null,
              Consumer: null,
              // Add these to use same hidden class in VM as ServerContext
              _defaultValue: null,
              _globalName: null
            };
            context.Provider = {
              $$typeof: REACT_PROVIDER_TYPE,
              _context: context
            };
            var hasWarnedAboutUsingNestedContextConsumers = false;
            var hasWarnedAboutUsingConsumerProvider = false;
            var hasWarnedAboutDisplayNameOnConsumer = false;
            {
              var Consumer = {
                $$typeof: REACT_CONTEXT_TYPE,
                _context: context
              };
              Object.defineProperties(Consumer, {
                Provider: {
                  get: function() {
                    if (!hasWarnedAboutUsingConsumerProvider) {
                      hasWarnedAboutUsingConsumerProvider = true;
                      error("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?");
                    }
                    return context.Provider;
                  },
                  set: function(_Provider) {
                    context.Provider = _Provider;
                  }
                },
                _currentValue: {
                  get: function() {
                    return context._currentValue;
                  },
                  set: function(_currentValue) {
                    context._currentValue = _currentValue;
                  }
                },
                _currentValue2: {
                  get: function() {
                    return context._currentValue2;
                  },
                  set: function(_currentValue2) {
                    context._currentValue2 = _currentValue2;
                  }
                },
                _threadCount: {
                  get: function() {
                    return context._threadCount;
                  },
                  set: function(_threadCount) {
                    context._threadCount = _threadCount;
                  }
                },
                Consumer: {
                  get: function() {
                    if (!hasWarnedAboutUsingNestedContextConsumers) {
                      hasWarnedAboutUsingNestedContextConsumers = true;
                      error("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?");
                    }
                    return context.Consumer;
                  }
                },
                displayName: {
                  get: function() {
                    return context.displayName;
                  },
                  set: function(displayName) {
                    if (!hasWarnedAboutDisplayNameOnConsumer) {
                      warn("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", displayName);
                      hasWarnedAboutDisplayNameOnConsumer = true;
                    }
                  }
                }
              });
              context.Consumer = Consumer;
            }
            {
              context._currentRenderer = null;
              context._currentRenderer2 = null;
            }
            return context;
          }
          var Uninitialized = -1;
          var Pending = 0;
          var Resolved = 1;
          var Rejected = 2;
          function lazyInitializer(payload) {
            if (payload._status === Uninitialized) {
              var ctor = payload._result;
              var thenable = ctor();
              thenable.then(function(moduleObject2) {
                if (payload._status === Pending || payload._status === Uninitialized) {
                  var resolved = payload;
                  resolved._status = Resolved;
                  resolved._result = moduleObject2;
                }
              }, function(error2) {
                if (payload._status === Pending || payload._status === Uninitialized) {
                  var rejected = payload;
                  rejected._status = Rejected;
                  rejected._result = error2;
                }
              });
              if (payload._status === Uninitialized) {
                var pending = payload;
                pending._status = Pending;
                pending._result = thenable;
              }
            }
            if (payload._status === Resolved) {
              var moduleObject = payload._result;
              {
                if (moduleObject === void 0) {
                  error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))\n\nDid you accidentally put curly braces around the import?", moduleObject);
                }
              }
              {
                if (!("default" in moduleObject)) {
                  error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))", moduleObject);
                }
              }
              return moduleObject.default;
            } else {
              throw payload._result;
            }
          }
          function lazy(ctor) {
            var payload = {
              // We use these fields to store the result.
              _status: Uninitialized,
              _result: ctor
            };
            var lazyType = {
              $$typeof: REACT_LAZY_TYPE,
              _payload: payload,
              _init: lazyInitializer
            };
            {
              var defaultProps;
              var propTypes;
              Object.defineProperties(lazyType, {
                defaultProps: {
                  configurable: true,
                  get: function() {
                    return defaultProps;
                  },
                  set: function(newDefaultProps) {
                    error("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
                    defaultProps = newDefaultProps;
                    Object.defineProperty(lazyType, "defaultProps", {
                      enumerable: true
                    });
                  }
                },
                propTypes: {
                  configurable: true,
                  get: function() {
                    return propTypes;
                  },
                  set: function(newPropTypes) {
                    error("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
                    propTypes = newPropTypes;
                    Object.defineProperty(lazyType, "propTypes", {
                      enumerable: true
                    });
                  }
                }
              });
            }
            return lazyType;
          }
          function forwardRef(render) {
            {
              if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
                error("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).");
              } else if (typeof render !== "function") {
                error("forwardRef requires a render function but was given %s.", render === null ? "null" : typeof render);
              } else {
                if (render.length !== 0 && render.length !== 2) {
                  error("forwardRef render functions accept exactly two parameters: props and ref. %s", render.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined.");
                }
              }
              if (render != null) {
                if (render.defaultProps != null || render.propTypes != null) {
                  error("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
                }
              }
            }
            var elementType = {
              $$typeof: REACT_FORWARD_REF_TYPE,
              render
            };
            {
              var ownName;
              Object.defineProperty(elementType, "displayName", {
                enumerable: false,
                configurable: true,
                get: function() {
                  return ownName;
                },
                set: function(name) {
                  ownName = name;
                  if (!render.name && !render.displayName) {
                    render.displayName = name;
                  }
                }
              });
            }
            return elementType;
          }
          var REACT_MODULE_REFERENCE;
          {
            REACT_MODULE_REFERENCE = Symbol.for("react.module.reference");
          }
          function isValidElementType(type) {
            if (typeof type === "string" || typeof type === "function") {
              return true;
            }
            if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
              return true;
            }
            if (typeof type === "object" && type !== null) {
              if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
              // types supported by any Flight configuration anywhere since
              // we don't know which Flight build this will end up being used
              // with.
              type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== void 0) {
                return true;
              }
            }
            return false;
          }
          function memo(type, compare) {
            {
              if (!isValidElementType(type)) {
                error("memo: The first argument must be a component. Instead received: %s", type === null ? "null" : typeof type);
              }
            }
            var elementType = {
              $$typeof: REACT_MEMO_TYPE,
              type,
              compare: compare === void 0 ? null : compare
            };
            {
              var ownName;
              Object.defineProperty(elementType, "displayName", {
                enumerable: false,
                configurable: true,
                get: function() {
                  return ownName;
                },
                set: function(name) {
                  ownName = name;
                  if (!type.name && !type.displayName) {
                    type.displayName = name;
                  }
                }
              });
            }
            return elementType;
          }
          function resolveDispatcher() {
            var dispatcher = ReactCurrentDispatcher.current;
            {
              if (dispatcher === null) {
                error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.");
              }
            }
            return dispatcher;
          }
          function useContext(Context) {
            var dispatcher = resolveDispatcher();
            {
              if (Context._context !== void 0) {
                var realContext = Context._context;
                if (realContext.Consumer === Context) {
                  error("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?");
                } else if (realContext.Provider === Context) {
                  error("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
                }
              }
            }
            return dispatcher.useContext(Context);
          }
          function useState3(initialState) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useState(initialState);
          }
          function useReducer(reducer, initialArg, init) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useReducer(reducer, initialArg, init);
          }
          function useRef3(initialValue) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useRef(initialValue);
          }
          function useEffect3(create, deps) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useEffect(create, deps);
          }
          function useInsertionEffect(create, deps) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useInsertionEffect(create, deps);
          }
          function useLayoutEffect(create, deps) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useLayoutEffect(create, deps);
          }
          function useCallback2(callback, deps) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useCallback(callback, deps);
          }
          function useMemo(create, deps) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useMemo(create, deps);
          }
          function useImperativeHandle(ref, create, deps) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useImperativeHandle(ref, create, deps);
          }
          function useDebugValue(value, formatterFn) {
            {
              var dispatcher = resolveDispatcher();
              return dispatcher.useDebugValue(value, formatterFn);
            }
          }
          function useTransition() {
            var dispatcher = resolveDispatcher();
            return dispatcher.useTransition();
          }
          function useDeferredValue(value) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useDeferredValue(value);
          }
          function useId() {
            var dispatcher = resolveDispatcher();
            return dispatcher.useId();
          }
          function useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
          }
          var disabledDepth = 0;
          var prevLog;
          var prevInfo;
          var prevWarn;
          var prevError;
          var prevGroup;
          var prevGroupCollapsed;
          var prevGroupEnd;
          function disabledLog() {
          }
          disabledLog.__reactDisabledLog = true;
          function disableLogs() {
            {
              if (disabledDepth === 0) {
                prevLog = console.log;
                prevInfo = console.info;
                prevWarn = console.warn;
                prevError = console.error;
                prevGroup = console.group;
                prevGroupCollapsed = console.groupCollapsed;
                prevGroupEnd = console.groupEnd;
                var props = {
                  configurable: true,
                  enumerable: true,
                  value: disabledLog,
                  writable: true
                };
                Object.defineProperties(console, {
                  info: props,
                  log: props,
                  warn: props,
                  error: props,
                  group: props,
                  groupCollapsed: props,
                  groupEnd: props
                });
              }
              disabledDepth++;
            }
          }
          function reenableLogs() {
            {
              disabledDepth--;
              if (disabledDepth === 0) {
                var props = {
                  configurable: true,
                  enumerable: true,
                  writable: true
                };
                Object.defineProperties(console, {
                  log: assign({}, props, {
                    value: prevLog
                  }),
                  info: assign({}, props, {
                    value: prevInfo
                  }),
                  warn: assign({}, props, {
                    value: prevWarn
                  }),
                  error: assign({}, props, {
                    value: prevError
                  }),
                  group: assign({}, props, {
                    value: prevGroup
                  }),
                  groupCollapsed: assign({}, props, {
                    value: prevGroupCollapsed
                  }),
                  groupEnd: assign({}, props, {
                    value: prevGroupEnd
                  })
                });
              }
              if (disabledDepth < 0) {
                error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
              }
            }
          }
          var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
          var prefix;
          function describeBuiltInComponentFrame(name, source, ownerFn) {
            {
              if (prefix === void 0) {
                try {
                  throw Error();
                } catch (x) {
                  var match = x.stack.trim().match(/\n( *(at )?)/);
                  prefix = match && match[1] || "";
                }
              }
              return "\n" + prefix + name;
            }
          }
          var reentry = false;
          var componentFrameCache;
          {
            var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
            componentFrameCache = new PossiblyWeakMap();
          }
          function describeNativeComponentFrame(fn, construct) {
            if (!fn || reentry) {
              return "";
            }
            {
              var frame = componentFrameCache.get(fn);
              if (frame !== void 0) {
                return frame;
              }
            }
            var control;
            reentry = true;
            var previousPrepareStackTrace = Error.prepareStackTrace;
            Error.prepareStackTrace = void 0;
            var previousDispatcher;
            {
              previousDispatcher = ReactCurrentDispatcher$1.current;
              ReactCurrentDispatcher$1.current = null;
              disableLogs();
            }
            try {
              if (construct) {
                var Fake = function() {
                  throw Error();
                };
                Object.defineProperty(Fake.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                });
                if (typeof Reflect === "object" && Reflect.construct) {
                  try {
                    Reflect.construct(Fake, []);
                  } catch (x) {
                    control = x;
                  }
                  Reflect.construct(fn, [], Fake);
                } else {
                  try {
                    Fake.call();
                  } catch (x) {
                    control = x;
                  }
                  fn.call(Fake.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (x) {
                  control = x;
                }
                fn();
              }
            } catch (sample) {
              if (sample && control && typeof sample.stack === "string") {
                var sampleLines = sample.stack.split("\n");
                var controlLines = control.stack.split("\n");
                var s = sampleLines.length - 1;
                var c = controlLines.length - 1;
                while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
                  c--;
                }
                for (; s >= 1 && c >= 0; s--, c--) {
                  if (sampleLines[s] !== controlLines[c]) {
                    if (s !== 1 || c !== 1) {
                      do {
                        s--;
                        c--;
                        if (c < 0 || sampleLines[s] !== controlLines[c]) {
                          var _frame = "\n" + sampleLines[s].replace(" at new ", " at ");
                          if (fn.displayName && _frame.includes("<anonymous>")) {
                            _frame = _frame.replace("<anonymous>", fn.displayName);
                          }
                          {
                            if (typeof fn === "function") {
                              componentFrameCache.set(fn, _frame);
                            }
                          }
                          return _frame;
                        }
                      } while (s >= 1 && c >= 0);
                    }
                    break;
                  }
                }
              }
            } finally {
              reentry = false;
              {
                ReactCurrentDispatcher$1.current = previousDispatcher;
                reenableLogs();
              }
              Error.prepareStackTrace = previousPrepareStackTrace;
            }
            var name = fn ? fn.displayName || fn.name : "";
            var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
            {
              if (typeof fn === "function") {
                componentFrameCache.set(fn, syntheticFrame);
              }
            }
            return syntheticFrame;
          }
          function describeFunctionComponentFrame(fn, source, ownerFn) {
            {
              return describeNativeComponentFrame(fn, false);
            }
          }
          function shouldConstruct(Component11) {
            var prototype = Component11.prototype;
            return !!(prototype && prototype.isReactComponent);
          }
          function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
            if (type == null) {
              return "";
            }
            if (typeof type === "function") {
              {
                return describeNativeComponentFrame(type, shouldConstruct(type));
              }
            }
            if (typeof type === "string") {
              return describeBuiltInComponentFrame(type);
            }
            switch (type) {
              case REACT_SUSPENSE_TYPE:
                return describeBuiltInComponentFrame("Suspense");
              case REACT_SUSPENSE_LIST_TYPE:
                return describeBuiltInComponentFrame("SuspenseList");
            }
            if (typeof type === "object") {
              switch (type.$$typeof) {
                case REACT_FORWARD_REF_TYPE:
                  return describeFunctionComponentFrame(type.render);
                case REACT_MEMO_TYPE:
                  return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
                case REACT_LAZY_TYPE: {
                  var lazyComponent = type;
                  var payload = lazyComponent._payload;
                  var init = lazyComponent._init;
                  try {
                    return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                  } catch (x) {
                  }
                }
              }
            }
            return "";
          }
          var loggedTypeFailures = {};
          var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
          function setCurrentlyValidatingElement(element) {
            {
              if (element) {
                var owner = element._owner;
                var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
                ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
              } else {
                ReactDebugCurrentFrame$1.setExtraStackFrame(null);
              }
            }
          }
          function checkPropTypes(typeSpecs, values, location, componentName, element) {
            {
              var has = Function.call.bind(hasOwnProperty);
              for (var typeSpecName in typeSpecs) {
                if (has(typeSpecs, typeSpecName)) {
                  var error$1 = void 0;
                  try {
                    if (typeof typeSpecs[typeSpecName] !== "function") {
                      var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                      err.name = "Invariant Violation";
                      throw err;
                    }
                    error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
                  } catch (ex) {
                    error$1 = ex;
                  }
                  if (error$1 && !(error$1 instanceof Error)) {
                    setCurrentlyValidatingElement(element);
                    error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error$1);
                    setCurrentlyValidatingElement(null);
                  }
                  if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                    loggedTypeFailures[error$1.message] = true;
                    setCurrentlyValidatingElement(element);
                    error("Failed %s type: %s", location, error$1.message);
                    setCurrentlyValidatingElement(null);
                  }
                }
              }
            }
          }
          function setCurrentlyValidatingElement$1(element) {
            {
              if (element) {
                var owner = element._owner;
                var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
                setExtraStackFrame(stack);
              } else {
                setExtraStackFrame(null);
              }
            }
          }
          var propTypesMisspellWarningShown;
          {
            propTypesMisspellWarningShown = false;
          }
          function getDeclarationErrorAddendum() {
            if (ReactCurrentOwner.current) {
              var name = getComponentNameFromType(ReactCurrentOwner.current.type);
              if (name) {
                return "\n\nCheck the render method of `" + name + "`.";
              }
            }
            return "";
          }
          function getSourceInfoErrorAddendum(source) {
            if (source !== void 0) {
              var fileName = source.fileName.replace(/^.*[\\\/]/, "");
              var lineNumber = source.lineNumber;
              return "\n\nCheck your code at " + fileName + ":" + lineNumber + ".";
            }
            return "";
          }
          function getSourceInfoErrorAddendumForProps(elementProps) {
            if (elementProps !== null && elementProps !== void 0) {
              return getSourceInfoErrorAddendum(elementProps.__source);
            }
            return "";
          }
          var ownerHasKeyUseWarning = {};
          function getCurrentComponentErrorInfo(parentType) {
            var info = getDeclarationErrorAddendum();
            if (!info) {
              var parentName = typeof parentType === "string" ? parentType : parentType.displayName || parentType.name;
              if (parentName) {
                info = "\n\nCheck the top-level render call using <" + parentName + ">.";
              }
            }
            return info;
          }
          function validateExplicitKey(element, parentType) {
            if (!element._store || element._store.validated || element.key != null) {
              return;
            }
            element._store.validated = true;
            var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
            if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
              return;
            }
            ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
            var childOwner = "";
            if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
              childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
            }
            {
              setCurrentlyValidatingElement$1(element);
              error('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
              setCurrentlyValidatingElement$1(null);
            }
          }
          function validateChildKeys(node, parentType) {
            if (typeof node !== "object") {
              return;
            }
            if (isArray(node)) {
              for (var i = 0; i < node.length; i++) {
                var child = node[i];
                if (isValidElement(child)) {
                  validateExplicitKey(child, parentType);
                }
              }
            } else if (isValidElement(node)) {
              if (node._store) {
                node._store.validated = true;
              }
            } else if (node) {
              var iteratorFn = getIteratorFn(node);
              if (typeof iteratorFn === "function") {
                if (iteratorFn !== node.entries) {
                  var iterator = iteratorFn.call(node);
                  var step;
                  while (!(step = iterator.next()).done) {
                    if (isValidElement(step.value)) {
                      validateExplicitKey(step.value, parentType);
                    }
                  }
                }
              }
            }
          }
          function validatePropTypes(element) {
            {
              var type = element.type;
              if (type === null || type === void 0 || typeof type === "string") {
                return;
              }
              var propTypes;
              if (typeof type === "function") {
                propTypes = type.propTypes;
              } else if (typeof type === "object" && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
              // Inner props are checked in the reconciler.
              type.$$typeof === REACT_MEMO_TYPE)) {
                propTypes = type.propTypes;
              } else {
                return;
              }
              if (propTypes) {
                var name = getComponentNameFromType(type);
                checkPropTypes(propTypes, element.props, "prop", name, element);
              } else if (type.PropTypes !== void 0 && !propTypesMisspellWarningShown) {
                propTypesMisspellWarningShown = true;
                var _name = getComponentNameFromType(type);
                error("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _name || "Unknown");
              }
              if (typeof type.getDefaultProps === "function" && !type.getDefaultProps.isReactClassApproved) {
                error("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
              }
            }
          }
          function validateFragmentProps(fragment) {
            {
              var keys = Object.keys(fragment.props);
              for (var i = 0; i < keys.length; i++) {
                var key = keys[i];
                if (key !== "children" && key !== "key") {
                  setCurrentlyValidatingElement$1(fragment);
                  error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key);
                  setCurrentlyValidatingElement$1(null);
                  break;
                }
              }
              if (fragment.ref !== null) {
                setCurrentlyValidatingElement$1(fragment);
                error("Invalid attribute `ref` supplied to `React.Fragment`.");
                setCurrentlyValidatingElement$1(null);
              }
            }
          }
          function createElementWithValidation(type, props, children) {
            var validType = isValidElementType(type);
            if (!validType) {
              var info = "";
              if (type === void 0 || typeof type === "object" && type !== null && Object.keys(type).length === 0) {
                info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
              }
              var sourceInfo = getSourceInfoErrorAddendumForProps(props);
              if (sourceInfo) {
                info += sourceInfo;
              } else {
                info += getDeclarationErrorAddendum();
              }
              var typeString;
              if (type === null) {
                typeString = "null";
              } else if (isArray(type)) {
                typeString = "array";
              } else if (type !== void 0 && type.$$typeof === REACT_ELEMENT_TYPE) {
                typeString = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />";
                info = " Did you accidentally export a JSX literal instead of a component?";
              } else {
                typeString = typeof type;
              }
              {
                error("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
              }
            }
            var element = createElement.apply(this, arguments);
            if (element == null) {
              return element;
            }
            if (validType) {
              for (var i = 2; i < arguments.length; i++) {
                validateChildKeys(arguments[i], type);
              }
            }
            if (type === REACT_FRAGMENT_TYPE) {
              validateFragmentProps(element);
            } else {
              validatePropTypes(element);
            }
            return element;
          }
          var didWarnAboutDeprecatedCreateFactory = false;
          function createFactoryWithValidation(type) {
            var validatedFactory = createElementWithValidation.bind(null, type);
            validatedFactory.type = type;
            {
              if (!didWarnAboutDeprecatedCreateFactory) {
                didWarnAboutDeprecatedCreateFactory = true;
                warn("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.");
              }
              Object.defineProperty(validatedFactory, "type", {
                enumerable: false,
                get: function() {
                  warn("Factory.type is deprecated. Access the class directly before passing it to createFactory.");
                  Object.defineProperty(this, "type", {
                    value: type
                  });
                  return type;
                }
              });
            }
            return validatedFactory;
          }
          function cloneElementWithValidation(element, props, children) {
            var newElement = cloneElement.apply(this, arguments);
            for (var i = 2; i < arguments.length; i++) {
              validateChildKeys(arguments[i], newElement.type);
            }
            validatePropTypes(newElement);
            return newElement;
          }
          function startTransition(scope, options) {
            var prevTransition = ReactCurrentBatchConfig.transition;
            ReactCurrentBatchConfig.transition = {};
            var currentTransition = ReactCurrentBatchConfig.transition;
            {
              ReactCurrentBatchConfig.transition._updatedFibers = /* @__PURE__ */ new Set();
            }
            try {
              scope();
            } finally {
              ReactCurrentBatchConfig.transition = prevTransition;
              {
                if (prevTransition === null && currentTransition._updatedFibers) {
                  var updatedFibersCount = currentTransition._updatedFibers.size;
                  if (updatedFibersCount > 10) {
                    warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.");
                  }
                  currentTransition._updatedFibers.clear();
                }
              }
            }
          }
          var didWarnAboutMessageChannel = false;
          var enqueueTaskImpl = null;
          function enqueueTask(task) {
            if (enqueueTaskImpl === null) {
              try {
                var requireString = ("require" + Math.random()).slice(0, 7);
                var nodeRequire = module && module[requireString];
                enqueueTaskImpl = nodeRequire.call(module, "timers").setImmediate;
              } catch (_err) {
                enqueueTaskImpl = function(callback) {
                  {
                    if (didWarnAboutMessageChannel === false) {
                      didWarnAboutMessageChannel = true;
                      if (typeof MessageChannel === "undefined") {
                        error("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning.");
                      }
                    }
                  }
                  var channel = new MessageChannel();
                  channel.port1.onmessage = callback;
                  channel.port2.postMessage(void 0);
                };
              }
            }
            return enqueueTaskImpl(task);
          }
          var actScopeDepth = 0;
          var didWarnNoAwaitAct = false;
          function act(callback) {
            {
              var prevActScopeDepth = actScopeDepth;
              actScopeDepth++;
              if (ReactCurrentActQueue.current === null) {
                ReactCurrentActQueue.current = [];
              }
              var prevIsBatchingLegacy = ReactCurrentActQueue.isBatchingLegacy;
              var result;
              try {
                ReactCurrentActQueue.isBatchingLegacy = true;
                result = callback();
                if (!prevIsBatchingLegacy && ReactCurrentActQueue.didScheduleLegacyUpdate) {
                  var queue = ReactCurrentActQueue.current;
                  if (queue !== null) {
                    ReactCurrentActQueue.didScheduleLegacyUpdate = false;
                    flushActQueue(queue);
                  }
                }
              } catch (error2) {
                popActScope(prevActScopeDepth);
                throw error2;
              } finally {
                ReactCurrentActQueue.isBatchingLegacy = prevIsBatchingLegacy;
              }
              if (result !== null && typeof result === "object" && typeof result.then === "function") {
                var thenableResult = result;
                var wasAwaited = false;
                var thenable = {
                  then: function(resolve, reject) {
                    wasAwaited = true;
                    thenableResult.then(function(returnValue2) {
                      popActScope(prevActScopeDepth);
                      if (actScopeDepth === 0) {
                        recursivelyFlushAsyncActWork(returnValue2, resolve, reject);
                      } else {
                        resolve(returnValue2);
                      }
                    }, function(error2) {
                      popActScope(prevActScopeDepth);
                      reject(error2);
                    });
                  }
                };
                {
                  if (!didWarnNoAwaitAct && typeof Promise !== "undefined") {
                    Promise.resolve().then(function() {
                    }).then(function() {
                      if (!wasAwaited) {
                        didWarnNoAwaitAct = true;
                        error("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);");
                      }
                    });
                  }
                }
                return thenable;
              } else {
                var returnValue = result;
                popActScope(prevActScopeDepth);
                if (actScopeDepth === 0) {
                  var _queue = ReactCurrentActQueue.current;
                  if (_queue !== null) {
                    flushActQueue(_queue);
                    ReactCurrentActQueue.current = null;
                  }
                  var _thenable = {
                    then: function(resolve, reject) {
                      if (ReactCurrentActQueue.current === null) {
                        ReactCurrentActQueue.current = [];
                        recursivelyFlushAsyncActWork(returnValue, resolve, reject);
                      } else {
                        resolve(returnValue);
                      }
                    }
                  };
                  return _thenable;
                } else {
                  var _thenable2 = {
                    then: function(resolve, reject) {
                      resolve(returnValue);
                    }
                  };
                  return _thenable2;
                }
              }
            }
          }
          function popActScope(prevActScopeDepth) {
            {
              if (prevActScopeDepth !== actScopeDepth - 1) {
                error("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. ");
              }
              actScopeDepth = prevActScopeDepth;
            }
          }
          function recursivelyFlushAsyncActWork(returnValue, resolve, reject) {
            {
              var queue = ReactCurrentActQueue.current;
              if (queue !== null) {
                try {
                  flushActQueue(queue);
                  enqueueTask(function() {
                    if (queue.length === 0) {
                      ReactCurrentActQueue.current = null;
                      resolve(returnValue);
                    } else {
                      recursivelyFlushAsyncActWork(returnValue, resolve, reject);
                    }
                  });
                } catch (error2) {
                  reject(error2);
                }
              } else {
                resolve(returnValue);
              }
            }
          }
          var isFlushing = false;
          function flushActQueue(queue) {
            {
              if (!isFlushing) {
                isFlushing = true;
                var i = 0;
                try {
                  for (; i < queue.length; i++) {
                    var callback = queue[i];
                    do {
                      callback = callback(true);
                    } while (callback !== null);
                  }
                  queue.length = 0;
                } catch (error2) {
                  queue = queue.slice(i + 1);
                  throw error2;
                } finally {
                  isFlushing = false;
                }
              }
            }
          }
          var createElement$1 = createElementWithValidation;
          var cloneElement$1 = cloneElementWithValidation;
          var createFactory = createFactoryWithValidation;
          var Children = {
            map: mapChildren,
            forEach: forEachChildren,
            count: countChildren,
            toArray,
            only: onlyChild
          };
          exports.Children = Children;
          exports.Component = Component10;
          exports.Fragment = REACT_FRAGMENT_TYPE;
          exports.Profiler = REACT_PROFILER_TYPE;
          exports.PureComponent = PureComponent;
          exports.StrictMode = REACT_STRICT_MODE_TYPE;
          exports.Suspense = REACT_SUSPENSE_TYPE;
          exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
          exports.act = act;
          exports.cloneElement = cloneElement$1;
          exports.createContext = createContext;
          exports.createElement = createElement$1;
          exports.createFactory = createFactory;
          exports.createRef = createRef;
          exports.forwardRef = forwardRef;
          exports.isValidElement = isValidElement;
          exports.lazy = lazy;
          exports.memo = memo;
          exports.startTransition = startTransition;
          exports.unstable_act = act;
          exports.useCallback = useCallback2;
          exports.useContext = useContext;
          exports.useDebugValue = useDebugValue;
          exports.useDeferredValue = useDeferredValue;
          exports.useEffect = useEffect3;
          exports.useId = useId;
          exports.useImperativeHandle = useImperativeHandle;
          exports.useInsertionEffect = useInsertionEffect;
          exports.useLayoutEffect = useLayoutEffect;
          exports.useMemo = useMemo;
          exports.useReducer = useReducer;
          exports.useRef = useRef3;
          exports.useState = useState3;
          exports.useSyncExternalStore = useSyncExternalStore;
          exports.useTransition = useTransition;
          exports.version = ReactVersion;
          if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === "function") {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
          }
        })();
      }
    }
  });

  // node_modules/react/index.js
  var require_react = __commonJS({
    "node_modules/react/index.js"(exports, module) {
      "use strict";
      if (false) {
        module.exports = null;
      } else {
        module.exports = require_react_development();
      }
    }
  });

  // node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js
  var require_react_is_development = __commonJS({
    "node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js"(exports) {
      "use strict";
      if (true) {
        (function() {
          "use strict";
          var hasSymbol = typeof Symbol === "function" && Symbol.for;
          var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103;
          var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106;
          var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107;
          var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108;
          var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114;
          var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109;
          var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110;
          var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for("react.async_mode") : 60111;
          var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111;
          var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112;
          var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113;
          var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 60120;
          var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115;
          var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116;
          var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 60121;
          var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 60117;
          var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 60118;
          var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 60119;
          function isValidElementType(type) {
            return typeof type === "string" || typeof type === "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
            type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
          }
          function typeOf(object) {
            if (typeof object === "object" && object !== null) {
              var $$typeof = object.$$typeof;
              switch ($$typeof) {
                case REACT_ELEMENT_TYPE:
                  var type = object.type;
                  switch (type) {
                    case REACT_ASYNC_MODE_TYPE:
                    case REACT_CONCURRENT_MODE_TYPE:
                    case REACT_FRAGMENT_TYPE:
                    case REACT_PROFILER_TYPE:
                    case REACT_STRICT_MODE_TYPE:
                    case REACT_SUSPENSE_TYPE:
                      return type;
                    default:
                      var $$typeofType = type && type.$$typeof;
                      switch ($$typeofType) {
                        case REACT_CONTEXT_TYPE:
                        case REACT_FORWARD_REF_TYPE:
                        case REACT_LAZY_TYPE:
                        case REACT_MEMO_TYPE:
                        case REACT_PROVIDER_TYPE:
                          return $$typeofType;
                        default:
                          return $$typeof;
                      }
                  }
                case REACT_PORTAL_TYPE:
                  return $$typeof;
              }
            }
            return void 0;
          }
          var AsyncMode = REACT_ASYNC_MODE_TYPE;
          var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
          var ContextConsumer = REACT_CONTEXT_TYPE;
          var ContextProvider = REACT_PROVIDER_TYPE;
          var Element = REACT_ELEMENT_TYPE;
          var ForwardRef = REACT_FORWARD_REF_TYPE;
          var Fragment = REACT_FRAGMENT_TYPE;
          var Lazy = REACT_LAZY_TYPE;
          var Memo = REACT_MEMO_TYPE;
          var Portal = REACT_PORTAL_TYPE;
          var Profiler = REACT_PROFILER_TYPE;
          var StrictMode = REACT_STRICT_MODE_TYPE;
          var Suspense = REACT_SUSPENSE_TYPE;
          var hasWarnedAboutDeprecatedIsAsyncMode = false;
          function isAsyncMode(object) {
            {
              if (!hasWarnedAboutDeprecatedIsAsyncMode) {
                hasWarnedAboutDeprecatedIsAsyncMode = true;
                console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.");
              }
            }
            return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
          }
          function isConcurrentMode(object) {
            return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
          }
          function isContextConsumer(object) {
            return typeOf(object) === REACT_CONTEXT_TYPE;
          }
          function isContextProvider(object) {
            return typeOf(object) === REACT_PROVIDER_TYPE;
          }
          function isElement(object) {
            return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
          }
          function isForwardRef(object) {
            return typeOf(object) === REACT_FORWARD_REF_TYPE;
          }
          function isFragment(object) {
            return typeOf(object) === REACT_FRAGMENT_TYPE;
          }
          function isLazy(object) {
            return typeOf(object) === REACT_LAZY_TYPE;
          }
          function isMemo(object) {
            return typeOf(object) === REACT_MEMO_TYPE;
          }
          function isPortal(object) {
            return typeOf(object) === REACT_PORTAL_TYPE;
          }
          function isProfiler(object) {
            return typeOf(object) === REACT_PROFILER_TYPE;
          }
          function isStrictMode(object) {
            return typeOf(object) === REACT_STRICT_MODE_TYPE;
          }
          function isSuspense(object) {
            return typeOf(object) === REACT_SUSPENSE_TYPE;
          }
          exports.AsyncMode = AsyncMode;
          exports.ConcurrentMode = ConcurrentMode;
          exports.ContextConsumer = ContextConsumer;
          exports.ContextProvider = ContextProvider;
          exports.Element = Element;
          exports.ForwardRef = ForwardRef;
          exports.Fragment = Fragment;
          exports.Lazy = Lazy;
          exports.Memo = Memo;
          exports.Portal = Portal;
          exports.Profiler = Profiler;
          exports.StrictMode = StrictMode;
          exports.Suspense = Suspense;
          exports.isAsyncMode = isAsyncMode;
          exports.isConcurrentMode = isConcurrentMode;
          exports.isContextConsumer = isContextConsumer;
          exports.isContextProvider = isContextProvider;
          exports.isElement = isElement;
          exports.isForwardRef = isForwardRef;
          exports.isFragment = isFragment;
          exports.isLazy = isLazy;
          exports.isMemo = isMemo;
          exports.isPortal = isPortal;
          exports.isProfiler = isProfiler;
          exports.isStrictMode = isStrictMode;
          exports.isSuspense = isSuspense;
          exports.isValidElementType = isValidElementType;
          exports.typeOf = typeOf;
        })();
      }
    }
  });

  // node_modules/prop-types/node_modules/react-is/index.js
  var require_react_is = __commonJS({
    "node_modules/prop-types/node_modules/react-is/index.js"(exports, module) {
      "use strict";
      if (false) {
        module.exports = null;
      } else {
        module.exports = require_react_is_development();
      }
    }
  });

  // node_modules/object-assign/index.js
  var require_object_assign = __commonJS({
    "node_modules/object-assign/index.js"(exports, module) {
      "use strict";
      var getOwnPropertySymbols = Object.getOwnPropertySymbols;
      var hasOwnProperty = Object.prototype.hasOwnProperty;
      var propIsEnumerable = Object.prototype.propertyIsEnumerable;
      function toObject(val) {
        if (val === null || val === void 0) {
          throw new TypeError("Object.assign cannot be called with null or undefined");
        }
        return Object(val);
      }
      function shouldUseNative() {
        try {
          if (!Object.assign) {
            return false;
          }
          var test1 = new String("abc");
          test1[5] = "de";
          if (Object.getOwnPropertyNames(test1)[0] === "5") {
            return false;
          }
          var test2 = {};
          for (var i = 0; i < 10; i++) {
            test2["_" + String.fromCharCode(i)] = i;
          }
          var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
            return test2[n];
          });
          if (order2.join("") !== "0123456789") {
            return false;
          }
          var test3 = {};
          "abcdefghijklmnopqrst".split("").forEach(function(letter) {
            test3[letter] = letter;
          });
          if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
            return false;
          }
          return true;
        } catch (err) {
          return false;
        }
      }
      module.exports = shouldUseNative() ? Object.assign : function(target, source) {
        var from;
        var to = toObject(target);
        var symbols;
        for (var s = 1; s < arguments.length; s++) {
          from = Object(arguments[s]);
          for (var key in from) {
            if (hasOwnProperty.call(from, key)) {
              to[key] = from[key];
            }
          }
          if (getOwnPropertySymbols) {
            symbols = getOwnPropertySymbols(from);
            for (var i = 0; i < symbols.length; i++) {
              if (propIsEnumerable.call(from, symbols[i])) {
                to[symbols[i]] = from[symbols[i]];
              }
            }
          }
        }
        return to;
      };
    }
  });

  // node_modules/prop-types/lib/ReactPropTypesSecret.js
  var require_ReactPropTypesSecret = __commonJS({
    "node_modules/prop-types/lib/ReactPropTypesSecret.js"(exports, module) {
      "use strict";
      var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
      module.exports = ReactPropTypesSecret;
    }
  });

  // node_modules/prop-types/lib/has.js
  var require_has = __commonJS({
    "node_modules/prop-types/lib/has.js"(exports, module) {
      module.exports = Function.call.bind(Object.prototype.hasOwnProperty);
    }
  });

  // node_modules/prop-types/checkPropTypes.js
  var require_checkPropTypes = __commonJS({
    "node_modules/prop-types/checkPropTypes.js"(exports, module) {
      "use strict";
      var printWarning = function() {
      };
      if (true) {
        ReactPropTypesSecret = require_ReactPropTypesSecret();
        loggedTypeFailures = {};
        has = require_has();
        printWarning = function(text) {
          var message = "Warning: " + text;
          if (typeof console !== "undefined") {
            console.error(message);
          }
          try {
            throw new Error(message);
          } catch (x) {
          }
        };
      }
      var ReactPropTypesSecret;
      var loggedTypeFailures;
      var has;
      function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
        if (true) {
          for (var typeSpecName in typeSpecs) {
            if (has(typeSpecs, typeSpecName)) {
              var error;
              try {
                if (typeof typeSpecs[typeSpecName] !== "function") {
                  var err = Error(
                    (componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
                  );
                  err.name = "Invariant Violation";
                  throw err;
                }
                error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
              } catch (ex) {
                error = ex;
              }
              if (error && !(error instanceof Error)) {
                printWarning(
                  (componentName || "React class") + ": type specification of " + location + " `" + typeSpecName + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof error + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
                );
              }
              if (error instanceof Error && !(error.message in loggedTypeFailures)) {
                loggedTypeFailures[error.message] = true;
                var stack = getStack ? getStack() : "";
                printWarning(
                  "Failed " + location + " type: " + error.message + (stack != null ? stack : "")
                );
              }
            }
          }
        }
      }
      checkPropTypes.resetWarningCache = function() {
        if (true) {
          loggedTypeFailures = {};
        }
      };
      module.exports = checkPropTypes;
    }
  });

  // node_modules/prop-types/factoryWithTypeCheckers.js
  var require_factoryWithTypeCheckers = __commonJS({
    "node_modules/prop-types/factoryWithTypeCheckers.js"(exports, module) {
      "use strict";
      var ReactIs = require_react_is();
      var assign = require_object_assign();
      var ReactPropTypesSecret = require_ReactPropTypesSecret();
      var has = require_has();
      var checkPropTypes = require_checkPropTypes();
      var printWarning = function() {
      };
      if (true) {
        printWarning = function(text) {
          var message = "Warning: " + text;
          if (typeof console !== "undefined") {
            console.error(message);
          }
          try {
            throw new Error(message);
          } catch (x) {
          }
        };
      }
      function emptyFunctionThatReturnsNull() {
        return null;
      }
      module.exports = function(isValidElement, throwOnDirectAccess) {
        var ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
        var FAUX_ITERATOR_SYMBOL = "@@iterator";
        function getIteratorFn(maybeIterable) {
          var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
          if (typeof iteratorFn === "function") {
            return iteratorFn;
          }
        }
        var ANONYMOUS = "<<anonymous>>";
        var ReactPropTypes = {
          array: createPrimitiveTypeChecker("array"),
          bigint: createPrimitiveTypeChecker("bigint"),
          bool: createPrimitiveTypeChecker("boolean"),
          func: createPrimitiveTypeChecker("function"),
          number: createPrimitiveTypeChecker("number"),
          object: createPrimitiveTypeChecker("object"),
          string: createPrimitiveTypeChecker("string"),
          symbol: createPrimitiveTypeChecker("symbol"),
          any: createAnyTypeChecker(),
          arrayOf: createArrayOfTypeChecker,
          element: createElementTypeChecker(),
          elementType: createElementTypeTypeChecker(),
          instanceOf: createInstanceTypeChecker,
          node: createNodeChecker(),
          objectOf: createObjectOfTypeChecker,
          oneOf: createEnumTypeChecker,
          oneOfType: createUnionTypeChecker,
          shape: createShapeTypeChecker,
          exact: createStrictShapeTypeChecker
        };
        function is(x, y) {
          if (x === y) {
            return x !== 0 || 1 / x === 1 / y;
          } else {
            return x !== x && y !== y;
          }
        }
        function PropTypeError(message, data) {
          this.message = message;
          this.data = data && typeof data === "object" ? data : {};
          this.stack = "";
        }
        PropTypeError.prototype = Error.prototype;
        function createChainableTypeChecker(validate2) {
          if (true) {
            var manualPropTypeCallCache = {};
            var manualPropTypeWarningCount = 0;
          }
          function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
            componentName = componentName || ANONYMOUS;
            propFullName = propFullName || propName;
            if (secret !== ReactPropTypesSecret) {
              if (throwOnDirectAccess) {
                var err = new Error(
                  "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
                );
                err.name = "Invariant Violation";
                throw err;
              } else if (typeof console !== "undefined") {
                var cacheKey = componentName + ":" + propName;
                if (!manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
                manualPropTypeWarningCount < 3) {
                  printWarning(
                    "You are manually calling a React.PropTypes validation function for the `" + propFullName + "` prop on `" + componentName + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
                  );
                  manualPropTypeCallCache[cacheKey] = true;
                  manualPropTypeWarningCount++;
                }
              }
            }
            if (props[propName] == null) {
              if (isRequired) {
                if (props[propName] === null) {
                  return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required " + ("in `" + componentName + "`, but its value is `null`."));
                }
                return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required in " + ("`" + componentName + "`, but its value is `undefined`."));
              }
              return null;
            } else {
              return validate2(props, propName, componentName, location, propFullName);
            }
          }
          var chainedCheckType = checkType.bind(null, false);
          chainedCheckType.isRequired = checkType.bind(null, true);
          return chainedCheckType;
        }
        function createPrimitiveTypeChecker(expectedType) {
          function validate2(props, propName, componentName, location, propFullName, secret) {
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== expectedType) {
              var preciseType = getPreciseType(propValue);
              return new PropTypeError(
                "Invalid " + location + " `" + propFullName + "` of type " + ("`" + preciseType + "` supplied to `" + componentName + "`, expected ") + ("`" + expectedType + "`."),
                { expectedType }
              );
            }
            return null;
          }
          return createChainableTypeChecker(validate2);
        }
        function createAnyTypeChecker() {
          return createChainableTypeChecker(emptyFunctionThatReturnsNull);
        }
        function createArrayOfTypeChecker(typeChecker) {
          function validate2(props, propName, componentName, location, propFullName) {
            if (typeof typeChecker !== "function") {
              return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside arrayOf.");
            }
            var propValue = props[propName];
            if (!Array.isArray(propValue)) {
              var propType = getPropType(propValue);
              return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an array."));
            }
            for (var i = 0; i < propValue.length; i++) {
              var error = typeChecker(propValue, i, componentName, location, propFullName + "[" + i + "]", ReactPropTypesSecret);
              if (error instanceof Error) {
                return error;
              }
            }
            return null;
          }
          return createChainableTypeChecker(validate2);
        }
        function createElementTypeChecker() {
          function validate2(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            if (!isValidElement(propValue)) {
              var propType = getPropType(propValue);
              return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement."));
            }
            return null;
          }
          return createChainableTypeChecker(validate2);
        }
        function createElementTypeTypeChecker() {
          function validate2(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            if (!ReactIs.isValidElementType(propValue)) {
              var propType = getPropType(propValue);
              return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement type."));
            }
            return null;
          }
          return createChainableTypeChecker(validate2);
        }
        function createInstanceTypeChecker(expectedClass) {
          function validate2(props, propName, componentName, location, propFullName) {
            if (!(props[propName] instanceof expectedClass)) {
              var expectedClassName = expectedClass.name || ANONYMOUS;
              var actualClassName = getClassName(props[propName]);
              return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + actualClassName + "` supplied to `" + componentName + "`, expected ") + ("instance of `" + expectedClassName + "`."));
            }
            return null;
          }
          return createChainableTypeChecker(validate2);
        }
        function createEnumTypeChecker(expectedValues) {
          if (!Array.isArray(expectedValues)) {
            if (true) {
              if (arguments.length > 1) {
                printWarning(
                  "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
                );
              } else {
                printWarning("Invalid argument supplied to oneOf, expected an array.");
              }
            }
            return emptyFunctionThatReturnsNull;
          }
          function validate2(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            for (var i = 0; i < expectedValues.length; i++) {
              if (is(propValue, expectedValues[i])) {
                return null;
              }
            }
            var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
              var type = getPreciseType(value);
              if (type === "symbol") {
                return String(value);
              }
              return value;
            });
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of value `" + String(propValue) + "` " + ("supplied to `" + componentName + "`, expected one of " + valuesString + "."));
          }
          return createChainableTypeChecker(validate2);
        }
        function createObjectOfTypeChecker(typeChecker) {
          function validate2(props, propName, componentName, location, propFullName) {
            if (typeof typeChecker !== "function") {
              return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside objectOf.");
            }
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== "object") {
              return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an object."));
            }
            for (var key in propValue) {
              if (has(propValue, key)) {
                var error = typeChecker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
                if (error instanceof Error) {
                  return error;
                }
              }
            }
            return null;
          }
          return createChainableTypeChecker(validate2);
        }
        function createUnionTypeChecker(arrayOfTypeCheckers) {
          if (!Array.isArray(arrayOfTypeCheckers)) {
            true ? printWarning("Invalid argument supplied to oneOfType, expected an instance of array.") : void 0;
            return emptyFunctionThatReturnsNull;
          }
          for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
            var checker = arrayOfTypeCheckers[i];
            if (typeof checker !== "function") {
              printWarning(
                "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + getPostfixForTypeWarning(checker) + " at index " + i + "."
              );
              return emptyFunctionThatReturnsNull;
            }
          }
          function validate2(props, propName, componentName, location, propFullName) {
            var expectedTypes = [];
            for (var i2 = 0; i2 < arrayOfTypeCheckers.length; i2++) {
              var checker2 = arrayOfTypeCheckers[i2];
              var checkerResult = checker2(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
              if (checkerResult == null) {
                return null;
              }
              if (checkerResult.data && has(checkerResult.data, "expectedType")) {
                expectedTypes.push(checkerResult.data.expectedType);
              }
            }
            var expectedTypesMessage = expectedTypes.length > 0 ? ", expected one of type [" + expectedTypes.join(", ") + "]" : "";
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`" + expectedTypesMessage + "."));
          }
          return createChainableTypeChecker(validate2);
        }
        function createNodeChecker() {
          function validate2(props, propName, componentName, location, propFullName) {
            if (!isNode(props[propName])) {
              return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`, expected a ReactNode."));
            }
            return null;
          }
          return createChainableTypeChecker(validate2);
        }
        function invalidValidatorError(componentName, location, propFullName, key, type) {
          return new PropTypeError(
            (componentName || "React class") + ": " + location + " type `" + propFullName + "." + key + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + type + "`."
          );
        }
        function createShapeTypeChecker(shapeTypes) {
          function validate2(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== "object") {
              return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
            }
            for (var key in shapeTypes) {
              var checker = shapeTypes[key];
              if (typeof checker !== "function") {
                return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
              }
              var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
              if (error) {
                return error;
              }
            }
            return null;
          }
          return createChainableTypeChecker(validate2);
        }
        function createStrictShapeTypeChecker(shapeTypes) {
          function validate2(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== "object") {
              return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
            }
            var allKeys = assign({}, props[propName], shapeTypes);
            for (var key in allKeys) {
              var checker = shapeTypes[key];
              if (has(shapeTypes, key) && typeof checker !== "function") {
                return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
              }
              if (!checker) {
                return new PropTypeError(
                  "Invalid " + location + " `" + propFullName + "` key `" + key + "` supplied to `" + componentName + "`.\nBad object: " + JSON.stringify(props[propName], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(shapeTypes), null, "  ")
                );
              }
              var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
              if (error) {
                return error;
              }
            }
            return null;
          }
          return createChainableTypeChecker(validate2);
        }
        function isNode(propValue) {
          switch (typeof propValue) {
            case "number":
            case "string":
            case "undefined":
              return true;
            case "boolean":
              return !propValue;
            case "object":
              if (Array.isArray(propValue)) {
                return propValue.every(isNode);
              }
              if (propValue === null || isValidElement(propValue)) {
                return true;
              }
              var iteratorFn = getIteratorFn(propValue);
              if (iteratorFn) {
                var iterator = iteratorFn.call(propValue);
                var step;
                if (iteratorFn !== propValue.entries) {
                  while (!(step = iterator.next()).done) {
                    if (!isNode(step.value)) {
                      return false;
                    }
                  }
                } else {
                  while (!(step = iterator.next()).done) {
                    var entry = step.value;
                    if (entry) {
                      if (!isNode(entry[1])) {
                        return false;
                      }
                    }
                  }
                }
              } else {
                return false;
              }
              return true;
            default:
              return false;
          }
        }
        function isSymbol(propType, propValue) {
          if (propType === "symbol") {
            return true;
          }
          if (!propValue) {
            return false;
          }
          if (propValue["@@toStringTag"] === "Symbol") {
            return true;
          }
          if (typeof Symbol === "function" && propValue instanceof Symbol) {
            return true;
          }
          return false;
        }
        function getPropType(propValue) {
          var propType = typeof propValue;
          if (Array.isArray(propValue)) {
            return "array";
          }
          if (propValue instanceof RegExp) {
            return "object";
          }
          if (isSymbol(propType, propValue)) {
            return "symbol";
          }
          return propType;
        }
        function getPreciseType(propValue) {
          if (typeof propValue === "undefined" || propValue === null) {
            return "" + propValue;
          }
          var propType = getPropType(propValue);
          if (propType === "object") {
            if (propValue instanceof Date) {
              return "date";
            } else if (propValue instanceof RegExp) {
              return "regexp";
            }
          }
          return propType;
        }
        function getPostfixForTypeWarning(value) {
          var type = getPreciseType(value);
          switch (type) {
            case "array":
            case "object":
              return "an " + type;
            case "boolean":
            case "date":
            case "regexp":
              return "a " + type;
            default:
              return type;
          }
        }
        function getClassName(propValue) {
          if (!propValue.constructor || !propValue.constructor.name) {
            return ANONYMOUS;
          }
          return propValue.constructor.name;
        }
        ReactPropTypes.checkPropTypes = checkPropTypes;
        ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
        ReactPropTypes.PropTypes = ReactPropTypes;
        return ReactPropTypes;
      };
    }
  });

  // node_modules/prop-types/index.js
  var require_prop_types = __commonJS({
    "node_modules/prop-types/index.js"(exports, module) {
      if (true) {
        ReactIs = require_react_is();
        throwOnDirectAccess = true;
        module.exports = require_factoryWithTypeCheckers()(ReactIs.isElement, throwOnDirectAccess);
      } else {
        module.exports = null();
      }
      var ReactIs;
      var throwOnDirectAccess;
    }
  });

  // node_modules/uc.micro/properties/Any/regex.js
  var require_regex = __commonJS({
    "node_modules/uc.micro/properties/Any/regex.js"(exports, module) {
      module.exports = /[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
    }
  });

  // node_modules/uc.micro/categories/Cc/regex.js
  var require_regex2 = __commonJS({
    "node_modules/uc.micro/categories/Cc/regex.js"(exports, module) {
      module.exports = /[\0-\x1F\x7F-\x9F]/;
    }
  });

  // node_modules/uc.micro/categories/Z/regex.js
  var require_regex3 = __commonJS({
    "node_modules/uc.micro/categories/Z/regex.js"(exports, module) {
      module.exports = /[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/;
    }
  });

  // node_modules/uc.micro/categories/P/regex.js
  var require_regex4 = __commonJS({
    "node_modules/uc.micro/categories/P/regex.js"(exports, module) {
      module.exports = /[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4E\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDF55-\uDF59]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD806[\uDC3B\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/;
    }
  });

  // node_modules/linkify-it/lib/re.js
  var require_re = __commonJS({
    "node_modules/linkify-it/lib/re.js"(exports, module) {
      "use strict";
      module.exports = function(opts) {
        var re = {};
        re.src_Any = require_regex().source;
        re.src_Cc = require_regex2().source;
        re.src_Z = require_regex3().source;
        re.src_P = require_regex4().source;
        re.src_ZPCc = [re.src_Z, re.src_P, re.src_Cc].join("|");
        re.src_ZCc = [re.src_Z, re.src_Cc].join("|");
        var text_separators = "[><\uFF5C]";
        re.src_pseudo_letter = "(?:(?!" + text_separators + "|" + re.src_ZPCc + ")" + re.src_Any + ")";
        re.src_ip4 = "(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)";
        re.src_auth = "(?:(?:(?!" + re.src_ZCc + "|[@/\\[\\]()]).)+@)?";
        re.src_port = "(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?";
        re.src_host_terminator = "(?=$|" + text_separators + "|" + re.src_ZPCc + ")(?!-|_|:\\d|\\.-|\\.(?!$|" + re.src_ZPCc + "))";
        re.src_path = "(?:[/?#](?:(?!" + re.src_ZCc + "|" + text_separators + `|[()[\\]{}.,"'?!\\-]).|\\[(?:(?!` + re.src_ZCc + "|\\]).)*\\]|\\((?:(?!" + re.src_ZCc + "|[)]).)*\\)|\\{(?:(?!" + re.src_ZCc + '|[}]).)*\\}|\\"(?:(?!' + re.src_ZCc + `|["]).)+\\"|\\'(?:(?!` + re.src_ZCc + "|[']).)+\\'|\\'(?=" + re.src_pseudo_letter + "|[-]).|\\.{2,4}[a-zA-Z0-9%/]|\\.(?!" + re.src_ZCc + "|[.]).|" + (opts && opts["---"] ? "\\-(?!--(?:[^-]|$))(?:-*)|" : "\\-+|") + "\\,(?!" + re.src_ZCc + ").|\\!(?!" + re.src_ZCc + "|[!]).|\\?(?!" + re.src_ZCc + "|[?]).)+|\\/)?";
        re.src_email_name = '[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*';
        re.src_xn = "xn--[a-z0-9\\-]{1,59}";
        re.src_domain_root = // Allow letters & digits (http://test1)
        "(?:" + re.src_xn + "|" + re.src_pseudo_letter + "{1,63})";
        re.src_domain = "(?:" + re.src_xn + "|(?:" + re.src_pseudo_letter + ")|(?:" + re.src_pseudo_letter + "(?:-|" + re.src_pseudo_letter + "){0,61}" + re.src_pseudo_letter + "))";
        re.src_host = "(?:(?:(?:(?:" + re.src_domain + ")\\.)*" + re.src_domain + "))";
        re.tpl_host_fuzzy = "(?:" + re.src_ip4 + "|(?:(?:(?:" + re.src_domain + ")\\.)+(?:%TLDS%)))";
        re.tpl_host_no_ip_fuzzy = "(?:(?:(?:" + re.src_domain + ")\\.)+(?:%TLDS%))";
        re.src_host_strict = re.src_host + re.src_host_terminator;
        re.tpl_host_fuzzy_strict = re.tpl_host_fuzzy + re.src_host_terminator;
        re.src_host_port_strict = re.src_host + re.src_port + re.src_host_terminator;
        re.tpl_host_port_fuzzy_strict = re.tpl_host_fuzzy + re.src_port + re.src_host_terminator;
        re.tpl_host_port_no_ip_fuzzy_strict = re.tpl_host_no_ip_fuzzy + re.src_port + re.src_host_terminator;
        re.tpl_host_fuzzy_test = "localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:" + re.src_ZPCc + "|>|$))";
        re.tpl_email_fuzzy = "(^|" + text_separators + '|"|\\(|' + re.src_ZCc + ")(" + re.src_email_name + "@" + re.tpl_host_fuzzy_strict + ")";
        re.tpl_link_fuzzy = // Fuzzy link can't be prepended with .:/\- and non punctuation.
        // but can start with > (markdown blockquote)
        "(^|(?![.:/\\-_@])(?:[$+<=>^`|\uFF5C]|" + re.src_ZPCc + "))((?![$+<=>^`|\uFF5C])" + re.tpl_host_port_fuzzy_strict + re.src_path + ")";
        re.tpl_link_no_ip_fuzzy = // Fuzzy link can't be prepended with .:/\- and non punctuation.
        // but can start with > (markdown blockquote)
        "(^|(?![.:/\\-_@])(?:[$+<=>^`|\uFF5C]|" + re.src_ZPCc + "))((?![$+<=>^`|\uFF5C])" + re.tpl_host_port_no_ip_fuzzy_strict + re.src_path + ")";
        return re;
      };
    }
  });

  // node_modules/linkify-it/index.js
  var require_linkify_it = __commonJS({
    "node_modules/linkify-it/index.js"(exports, module) {
      "use strict";
      function assign(obj) {
        var sources = Array.prototype.slice.call(arguments, 1);
        sources.forEach(function(source) {
          if (!source) {
            return;
          }
          Object.keys(source).forEach(function(key) {
            obj[key] = source[key];
          });
        });
        return obj;
      }
      function _class(obj) {
        return Object.prototype.toString.call(obj);
      }
      function isString(obj) {
        return _class(obj) === "[object String]";
      }
      function isObject(obj) {
        return _class(obj) === "[object Object]";
      }
      function isRegExp(obj) {
        return _class(obj) === "[object RegExp]";
      }
      function isFunction(obj) {
        return _class(obj) === "[object Function]";
      }
      function escapeRE(str) {
        return str.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
      }
      var defaultOptions = {
        fuzzyLink: true,
        fuzzyEmail: true,
        fuzzyIP: false
      };
      function isOptionsObj(obj) {
        return Object.keys(obj || {}).reduce(function(acc, k) {
          return acc || defaultOptions.hasOwnProperty(k);
        }, false);
      }
      var defaultSchemas = {
        "http:": {
          validate: function(text, pos, self) {
            var tail = text.slice(pos);
            if (!self.re.http) {
              self.re.http = new RegExp(
                "^\\/\\/" + self.re.src_auth + self.re.src_host_port_strict + self.re.src_path,
                "i"
              );
            }
            if (self.re.http.test(tail)) {
              return tail.match(self.re.http)[0].length;
            }
            return 0;
          }
        },
        "https:": "http:",
        "ftp:": "http:",
        "//": {
          validate: function(text, pos, self) {
            var tail = text.slice(pos);
            if (!self.re.no_http) {
              self.re.no_http = new RegExp(
                "^" + self.re.src_auth + // Don't allow single-level domains, because of false positives like '//test'
                // with code comments
                "(?:localhost|(?:(?:" + self.re.src_domain + ")\\.)+" + self.re.src_domain_root + ")" + self.re.src_port + self.re.src_host_terminator + self.re.src_path,
                "i"
              );
            }
            if (self.re.no_http.test(tail)) {
              if (pos >= 3 && text[pos - 3] === ":") {
                return 0;
              }
              if (pos >= 3 && text[pos - 3] === "/") {
                return 0;
              }
              return tail.match(self.re.no_http)[0].length;
            }
            return 0;
          }
        },
        "mailto:": {
          validate: function(text, pos, self) {
            var tail = text.slice(pos);
            if (!self.re.mailto) {
              self.re.mailto = new RegExp(
                "^" + self.re.src_email_name + "@" + self.re.src_host_strict,
                "i"
              );
            }
            if (self.re.mailto.test(tail)) {
              return tail.match(self.re.mailto)[0].length;
            }
            return 0;
          }
        }
      };
      var tlds_2ch_src_re = "a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]";
      var tlds_default = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|\u0440\u0444".split("|");
      function resetScanCache(self) {
        self.__index__ = -1;
        self.__text_cache__ = "";
      }
      function createValidator(re) {
        return function(text, pos) {
          var tail = text.slice(pos);
          if (re.test(tail)) {
            return tail.match(re)[0].length;
          }
          return 0;
        };
      }
      function createNormalizer() {
        return function(match, self) {
          self.normalize(match);
        };
      }
      function compile(self) {
        var re = self.re = require_re()(self.__opts__);
        var tlds = self.__tlds__.slice();
        self.onCompile();
        if (!self.__tlds_replaced__) {
          tlds.push(tlds_2ch_src_re);
        }
        tlds.push(re.src_xn);
        re.src_tlds = tlds.join("|");
        function untpl(tpl) {
          return tpl.replace("%TLDS%", re.src_tlds);
        }
        re.email_fuzzy = RegExp(untpl(re.tpl_email_fuzzy), "i");
        re.link_fuzzy = RegExp(untpl(re.tpl_link_fuzzy), "i");
        re.link_no_ip_fuzzy = RegExp(untpl(re.tpl_link_no_ip_fuzzy), "i");
        re.host_fuzzy_test = RegExp(untpl(re.tpl_host_fuzzy_test), "i");
        var aliases = [];
        self.__compiled__ = {};
        function schemaError(name, val) {
          throw new Error('(LinkifyIt) Invalid schema "' + name + '": ' + val);
        }
        Object.keys(self.__schemas__).forEach(function(name) {
          var val = self.__schemas__[name];
          if (val === null) {
            return;
          }
          var compiled = { validate: null, link: null };
          self.__compiled__[name] = compiled;
          if (isObject(val)) {
            if (isRegExp(val.validate)) {
              compiled.validate = createValidator(val.validate);
            } else if (isFunction(val.validate)) {
              compiled.validate = val.validate;
            } else {
              schemaError(name, val);
            }
            if (isFunction(val.normalize)) {
              compiled.normalize = val.normalize;
            } else if (!val.normalize) {
              compiled.normalize = createNormalizer();
            } else {
              schemaError(name, val);
            }
            return;
          }
          if (isString(val)) {
            aliases.push(name);
            return;
          }
          schemaError(name, val);
        });
        aliases.forEach(function(alias) {
          if (!self.__compiled__[self.__schemas__[alias]]) {
            return;
          }
          self.__compiled__[alias].validate = self.__compiled__[self.__schemas__[alias]].validate;
          self.__compiled__[alias].normalize = self.__compiled__[self.__schemas__[alias]].normalize;
        });
        self.__compiled__[""] = { validate: null, normalize: createNormalizer() };
        var slist = Object.keys(self.__compiled__).filter(function(name) {
          return name.length > 0 && self.__compiled__[name];
        }).map(escapeRE).join("|");
        self.re.schema_test = RegExp("(^|(?!_)(?:[><\uFF5C]|" + re.src_ZPCc + "))(" + slist + ")", "i");
        self.re.schema_search = RegExp("(^|(?!_)(?:[><\uFF5C]|" + re.src_ZPCc + "))(" + slist + ")", "ig");
        self.re.pretest = RegExp(
          "(" + self.re.schema_test.source + ")|(" + self.re.host_fuzzy_test.source + ")|@",
          "i"
        );
        resetScanCache(self);
      }
      function Match(self, shift) {
        var start = self.__index__, end = self.__last_index__, text = self.__text_cache__.slice(start, end);
        this.schema = self.__schema__.toLowerCase();
        this.index = start + shift;
        this.lastIndex = end + shift;
        this.raw = text;
        this.text = text;
        this.url = text;
      }
      function createMatch(self, shift) {
        var match = new Match(self, shift);
        self.__compiled__[match.schema].normalize(match, self);
        return match;
      }
      function LinkifyIt(schemas, options) {
        if (!(this instanceof LinkifyIt)) {
          return new LinkifyIt(schemas, options);
        }
        if (!options) {
          if (isOptionsObj(schemas)) {
            options = schemas;
            schemas = {};
          }
        }
        this.__opts__ = assign({}, defaultOptions, options);
        this.__index__ = -1;
        this.__last_index__ = -1;
        this.__schema__ = "";
        this.__text_cache__ = "";
        this.__schemas__ = assign({}, defaultSchemas, schemas);
        this.__compiled__ = {};
        this.__tlds__ = tlds_default;
        this.__tlds_replaced__ = false;
        this.re = {};
        compile(this);
      }
      LinkifyIt.prototype.add = function add(schema, definition) {
        this.__schemas__[schema] = definition;
        compile(this);
        return this;
      };
      LinkifyIt.prototype.set = function set(options) {
        this.__opts__ = assign(this.__opts__, options);
        return this;
      };
      LinkifyIt.prototype.test = function test(text) {
        this.__text_cache__ = text;
        this.__index__ = -1;
        if (!text.length) {
          return false;
        }
        var m, ml, me, len, shift, next, re, tld_pos, at_pos;
        if (this.re.schema_test.test(text)) {
          re = this.re.schema_search;
          re.lastIndex = 0;
          while ((m = re.exec(text)) !== null) {
            len = this.testSchemaAt(text, m[2], re.lastIndex);
            if (len) {
              this.__schema__ = m[2];
              this.__index__ = m.index + m[1].length;
              this.__last_index__ = m.index + m[0].length + len;
              break;
            }
          }
        }
        if (this.__opts__.fuzzyLink && this.__compiled__["http:"]) {
          tld_pos = text.search(this.re.host_fuzzy_test);
          if (tld_pos >= 0) {
            if (this.__index__ < 0 || tld_pos < this.__index__) {
              if ((ml = text.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) !== null) {
                shift = ml.index + ml[1].length;
                if (this.__index__ < 0 || shift < this.__index__) {
                  this.__schema__ = "";
                  this.__index__ = shift;
                  this.__last_index__ = ml.index + ml[0].length;
                }
              }
            }
          }
        }
        if (this.__opts__.fuzzyEmail && this.__compiled__["mailto:"]) {
          at_pos = text.indexOf("@");
          if (at_pos >= 0) {
            if ((me = text.match(this.re.email_fuzzy)) !== null) {
              shift = me.index + me[1].length;
              next = me.index + me[0].length;
              if (this.__index__ < 0 || shift < this.__index__ || shift === this.__index__ && next > this.__last_index__) {
                this.__schema__ = "mailto:";
                this.__index__ = shift;
                this.__last_index__ = next;
              }
            }
          }
        }
        return this.__index__ >= 0;
      };
      LinkifyIt.prototype.pretest = function pretest(text) {
        return this.re.pretest.test(text);
      };
      LinkifyIt.prototype.testSchemaAt = function testSchemaAt(text, schema, pos) {
        if (!this.__compiled__[schema.toLowerCase()]) {
          return 0;
        }
        return this.__compiled__[schema.toLowerCase()].validate(text, pos, this);
      };
      LinkifyIt.prototype.match = function match(text) {
        var shift = 0, result = [];
        if (this.__index__ >= 0 && this.__text_cache__ === text) {
          result.push(createMatch(this, shift));
          shift = this.__last_index__;
        }
        var tail = shift ? text.slice(shift) : text;
        while (this.test(tail)) {
          result.push(createMatch(this, shift));
          tail = tail.slice(this.__last_index__);
          shift += this.__last_index__;
        }
        if (result.length) {
          return result;
        }
        return null;
      };
      LinkifyIt.prototype.tlds = function tlds(list, keepOld) {
        list = Array.isArray(list) ? list : [list];
        if (!keepOld) {
          this.__tlds__ = list.slice();
          this.__tlds_replaced__ = true;
          compile(this);
          return this;
        }
        this.__tlds__ = this.__tlds__.concat(list).sort().filter(function(el, idx, arr) {
          return el !== arr[idx - 1];
        }).reverse();
        compile(this);
        return this;
      };
      LinkifyIt.prototype.normalize = function normalize(match) {
        if (!match.schema) {
          match.url = "http://" + match.url;
        }
        if (match.schema === "mailto:" && !/^mailto:/i.test(match.url)) {
          match.url = "mailto:" + match.url;
        }
      };
      LinkifyIt.prototype.onCompile = function onCompile() {
      };
      module.exports = LinkifyIt;
    }
  });

  // node_modules/tlds/index.json
  var require_tlds = __commonJS({
    "node_modules/tlds/index.json"(exports, module) {
      module.exports = [
        "aaa",
        "aarp",
        "abb",
        "abbott",
        "abbvie",
        "abc",
        "able",
        "abogado",
        "abudhabi",
        "ac",
        "academy",
        "accenture",
        "accountant",
        "accountants",
        "aco",
        "actor",
        "ad",
        "ads",
        "adult",
        "ae",
        "aeg",
        "aero",
        "aetna",
        "af",
        "afl",
        "africa",
        "ag",
        "agakhan",
        "agency",
        "ai",
        "aig",
        "airbus",
        "airforce",
        "airtel",
        "akdn",
        "al",
        "alibaba",
        "alipay",
        "allfinanz",
        "allstate",
        "ally",
        "alsace",
        "alstom",
        "am",
        "amazon",
        "americanexpress",
        "americanfamily",
        "amex",
        "amfam",
        "amica",
        "amsterdam",
        "analytics",
        "android",
        "anquan",
        "anz",
        "ao",
        "aol",
        "apartments",
        "app",
        "apple",
        "aq",
        "aquarelle",
        "ar",
        "arab",
        "aramco",
        "archi",
        "army",
        "arpa",
        "art",
        "arte",
        "as",
        "asda",
        "asia",
        "associates",
        "at",
        "athleta",
        "attorney",
        "au",
        "auction",
        "audi",
        "audible",
        "audio",
        "auspost",
        "author",
        "auto",
        "autos",
        "aw",
        "aws",
        "ax",
        "axa",
        "az",
        "azure",
        "ba",
        "baby",
        "baidu",
        "banamex",
        "band",
        "bank",
        "bar",
        "barcelona",
        "barclaycard",
        "barclays",
        "barefoot",
        "bargains",
        "baseball",
        "basketball",
        "bauhaus",
        "bayern",
        "bb",
        "bbc",
        "bbt",
        "bbva",
        "bcg",
        "bcn",
        "bd",
        "be",
        "beats",
        "beauty",
        "beer",
        "bentley",
        "berlin",
        "best",
        "bestbuy",
        "bet",
        "bf",
        "bg",
        "bh",
        "bharti",
        "bi",
        "bible",
        "bid",
        "bike",
        "bing",
        "bingo",
        "bio",
        "biz",
        "bj",
        "black",
        "blackfriday",
        "blockbuster",
        "blog",
        "bloomberg",
        "blue",
        "bm",
        "bms",
        "bmw",
        "bn",
        "bnpparibas",
        "bo",
        "boats",
        "boehringer",
        "bofa",
        "bom",
        "bond",
        "boo",
        "book",
        "booking",
        "bosch",
        "bostik",
        "boston",
        "bot",
        "boutique",
        "box",
        "br",
        "bradesco",
        "bridgestone",
        "broadway",
        "broker",
        "brother",
        "brussels",
        "bs",
        "bt",
        "build",
        "builders",
        "business",
        "buy",
        "buzz",
        "bv",
        "bw",
        "by",
        "bz",
        "bzh",
        "ca",
        "cab",
        "cafe",
        "cal",
        "call",
        "calvinklein",
        "cam",
        "camera",
        "camp",
        "canon",
        "capetown",
        "capital",
        "capitalone",
        "car",
        "caravan",
        "cards",
        "care",
        "career",
        "careers",
        "cars",
        "casa",
        "case",
        "cash",
        "casino",
        "cat",
        "catering",
        "catholic",
        "cba",
        "cbn",
        "cbre",
        "cc",
        "cd",
        "center",
        "ceo",
        "cern",
        "cf",
        "cfa",
        "cfd",
        "cg",
        "ch",
        "chanel",
        "channel",
        "charity",
        "chase",
        "chat",
        "cheap",
        "chintai",
        "christmas",
        "chrome",
        "church",
        "ci",
        "cipriani",
        "circle",
        "cisco",
        "citadel",
        "citi",
        "citic",
        "city",
        "ck",
        "cl",
        "claims",
        "cleaning",
        "click",
        "clinic",
        "clinique",
        "clothing",
        "cloud",
        "club",
        "clubmed",
        "cm",
        "cn",
        "co",
        "coach",
        "codes",
        "coffee",
        "college",
        "cologne",
        "com",
        "commbank",
        "community",
        "company",
        "compare",
        "computer",
        "comsec",
        "condos",
        "construction",
        "consulting",
        "contact",
        "contractors",
        "cooking",
        "cool",
        "coop",
        "corsica",
        "country",
        "coupon",
        "coupons",
        "courses",
        "cpa",
        "cr",
        "credit",
        "creditcard",
        "creditunion",
        "cricket",
        "crown",
        "crs",
        "cruise",
        "cruises",
        "cu",
        "cuisinella",
        "cv",
        "cw",
        "cx",
        "cy",
        "cymru",
        "cyou",
        "cz",
        "dabur",
        "dad",
        "dance",
        "data",
        "date",
        "dating",
        "datsun",
        "day",
        "dclk",
        "dds",
        "de",
        "deal",
        "dealer",
        "deals",
        "degree",
        "delivery",
        "dell",
        "deloitte",
        "delta",
        "democrat",
        "dental",
        "dentist",
        "desi",
        "design",
        "dev",
        "dhl",
        "diamonds",
        "diet",
        "digital",
        "direct",
        "directory",
        "discount",
        "discover",
        "dish",
        "diy",
        "dj",
        "dk",
        "dm",
        "dnp",
        "do",
        "docs",
        "doctor",
        "dog",
        "domains",
        "dot",
        "download",
        "drive",
        "dtv",
        "dubai",
        "dunlop",
        "dupont",
        "durban",
        "dvag",
        "dvr",
        "dz",
        "earth",
        "eat",
        "ec",
        "eco",
        "edeka",
        "edu",
        "education",
        "ee",
        "eg",
        "email",
        "emerck",
        "energy",
        "engineer",
        "engineering",
        "enterprises",
        "epson",
        "equipment",
        "er",
        "ericsson",
        "erni",
        "es",
        "esq",
        "estate",
        "et",
        "eu",
        "eurovision",
        "eus",
        "events",
        "exchange",
        "expert",
        "exposed",
        "express",
        "extraspace",
        "fage",
        "fail",
        "fairwinds",
        "faith",
        "family",
        "fan",
        "fans",
        "farm",
        "farmers",
        "fashion",
        "fast",
        "fedex",
        "feedback",
        "ferrari",
        "ferrero",
        "fi",
        "fidelity",
        "fido",
        "film",
        "final",
        "finance",
        "financial",
        "fire",
        "firestone",
        "firmdale",
        "fish",
        "fishing",
        "fit",
        "fitness",
        "fj",
        "fk",
        "flickr",
        "flights",
        "flir",
        "florist",
        "flowers",
        "fly",
        "fm",
        "fo",
        "foo",
        "food",
        "football",
        "ford",
        "forex",
        "forsale",
        "forum",
        "foundation",
        "fox",
        "fr",
        "free",
        "fresenius",
        "frl",
        "frogans",
        "frontier",
        "ftr",
        "fujitsu",
        "fun",
        "fund",
        "furniture",
        "futbol",
        "fyi",
        "ga",
        "gal",
        "gallery",
        "gallo",
        "gallup",
        "game",
        "games",
        "gap",
        "garden",
        "gay",
        "gb",
        "gbiz",
        "gd",
        "gdn",
        "ge",
        "gea",
        "gent",
        "genting",
        "george",
        "gf",
        "gg",
        "ggee",
        "gh",
        "gi",
        "gift",
        "gifts",
        "gives",
        "giving",
        "gl",
        "glass",
        "gle",
        "global",
        "globo",
        "gm",
        "gmail",
        "gmbh",
        "gmo",
        "gmx",
        "gn",
        "godaddy",
        "gold",
        "goldpoint",
        "golf",
        "goo",
        "goodyear",
        "goog",
        "google",
        "gop",
        "got",
        "gov",
        "gp",
        "gq",
        "gr",
        "grainger",
        "graphics",
        "gratis",
        "green",
        "gripe",
        "grocery",
        "group",
        "gs",
        "gt",
        "gu",
        "gucci",
        "guge",
        "guide",
        "guitars",
        "guru",
        "gw",
        "gy",
        "hair",
        "hamburg",
        "hangout",
        "haus",
        "hbo",
        "hdfc",
        "hdfcbank",
        "health",
        "healthcare",
        "help",
        "helsinki",
        "here",
        "hermes",
        "hiphop",
        "hisamitsu",
        "hitachi",
        "hiv",
        "hk",
        "hkt",
        "hm",
        "hn",
        "hockey",
        "holdings",
        "holiday",
        "homedepot",
        "homegoods",
        "homes",
        "homesense",
        "honda",
        "horse",
        "hospital",
        "host",
        "hosting",
        "hot",
        "hotels",
        "hotmail",
        "house",
        "how",
        "hr",
        "hsbc",
        "ht",
        "hu",
        "hughes",
        "hyatt",
        "hyundai",
        "ibm",
        "icbc",
        "ice",
        "icu",
        "id",
        "ie",
        "ieee",
        "ifm",
        "ikano",
        "il",
        "im",
        "imamat",
        "imdb",
        "immo",
        "immobilien",
        "in",
        "inc",
        "industries",
        "infiniti",
        "info",
        "ing",
        "ink",
        "institute",
        "insurance",
        "insure",
        "int",
        "international",
        "intuit",
        "investments",
        "io",
        "ipiranga",
        "iq",
        "ir",
        "irish",
        "is",
        "ismaili",
        "ist",
        "istanbul",
        "it",
        "itau",
        "itv",
        "jaguar",
        "java",
        "jcb",
        "je",
        "jeep",
        "jetzt",
        "jewelry",
        "jio",
        "jll",
        "jm",
        "jmp",
        "jnj",
        "jo",
        "jobs",
        "joburg",
        "jot",
        "joy",
        "jp",
        "jpmorgan",
        "jprs",
        "juegos",
        "juniper",
        "kaufen",
        "kddi",
        "ke",
        "kerryhotels",
        "kerrylogistics",
        "kerryproperties",
        "kfh",
        "kg",
        "kh",
        "ki",
        "kia",
        "kids",
        "kim",
        "kindle",
        "kitchen",
        "kiwi",
        "km",
        "kn",
        "koeln",
        "komatsu",
        "kosher",
        "kp",
        "kpmg",
        "kpn",
        "kr",
        "krd",
        "kred",
        "kuokgroup",
        "kw",
        "ky",
        "kyoto",
        "kz",
        "la",
        "lacaixa",
        "lamborghini",
        "lamer",
        "lancaster",
        "land",
        "landrover",
        "lanxess",
        "lasalle",
        "lat",
        "latino",
        "latrobe",
        "law",
        "lawyer",
        "lb",
        "lc",
        "lds",
        "lease",
        "leclerc",
        "lefrak",
        "legal",
        "lego",
        "lexus",
        "lgbt",
        "li",
        "lidl",
        "life",
        "lifeinsurance",
        "lifestyle",
        "lighting",
        "like",
        "lilly",
        "limited",
        "limo",
        "lincoln",
        "link",
        "lipsy",
        "live",
        "living",
        "lk",
        "llc",
        "llp",
        "loan",
        "loans",
        "locker",
        "locus",
        "lol",
        "london",
        "lotte",
        "lotto",
        "love",
        "lpl",
        "lplfinancial",
        "lr",
        "ls",
        "lt",
        "ltd",
        "ltda",
        "lu",
        "lundbeck",
        "luxe",
        "luxury",
        "lv",
        "ly",
        "ma",
        "madrid",
        "maif",
        "maison",
        "makeup",
        "man",
        "management",
        "mango",
        "map",
        "market",
        "marketing",
        "markets",
        "marriott",
        "marshalls",
        "mattel",
        "mba",
        "mc",
        "mckinsey",
        "md",
        "me",
        "med",
        "media",
        "meet",
        "melbourne",
        "meme",
        "memorial",
        "men",
        "menu",
        "merckmsd",
        "mg",
        "mh",
        "miami",
        "microsoft",
        "mil",
        "mini",
        "mint",
        "mit",
        "mitsubishi",
        "mk",
        "ml",
        "mlb",
        "mls",
        "mm",
        "mma",
        "mn",
        "mo",
        "mobi",
        "mobile",
        "moda",
        "moe",
        "moi",
        "mom",
        "monash",
        "money",
        "monster",
        "mormon",
        "mortgage",
        "moscow",
        "moto",
        "motorcycles",
        "mov",
        "movie",
        "mp",
        "mq",
        "mr",
        "ms",
        "msd",
        "mt",
        "mtn",
        "mtr",
        "mu",
        "museum",
        "music",
        "mv",
        "mw",
        "mx",
        "my",
        "mz",
        "na",
        "nab",
        "nagoya",
        "name",
        "navy",
        "nba",
        "nc",
        "ne",
        "nec",
        "net",
        "netbank",
        "netflix",
        "network",
        "neustar",
        "new",
        "news",
        "next",
        "nextdirect",
        "nexus",
        "nf",
        "nfl",
        "ng",
        "ngo",
        "nhk",
        "ni",
        "nico",
        "nike",
        "nikon",
        "ninja",
        "nissan",
        "nissay",
        "nl",
        "no",
        "nokia",
        "norton",
        "now",
        "nowruz",
        "nowtv",
        "np",
        "nr",
        "nra",
        "nrw",
        "ntt",
        "nu",
        "nyc",
        "nz",
        "obi",
        "observer",
        "office",
        "okinawa",
        "olayan",
        "olayangroup",
        "ollo",
        "om",
        "omega",
        "one",
        "ong",
        "onl",
        "online",
        "ooo",
        "open",
        "oracle",
        "orange",
        "org",
        "organic",
        "origins",
        "osaka",
        "otsuka",
        "ott",
        "ovh",
        "pa",
        "page",
        "panasonic",
        "paris",
        "pars",
        "partners",
        "parts",
        "party",
        "pay",
        "pccw",
        "pe",
        "pet",
        "pf",
        "pfizer",
        "pg",
        "ph",
        "pharmacy",
        "phd",
        "philips",
        "phone",
        "photo",
        "photography",
        "photos",
        "physio",
        "pics",
        "pictet",
        "pictures",
        "pid",
        "pin",
        "ping",
        "pink",
        "pioneer",
        "pizza",
        "pk",
        "pl",
        "place",
        "play",
        "playstation",
        "plumbing",
        "plus",
        "pm",
        "pn",
        "pnc",
        "pohl",
        "poker",
        "politie",
        "porn",
        "post",
        "pr",
        "pramerica",
        "praxi",
        "press",
        "prime",
        "pro",
        "prod",
        "productions",
        "prof",
        "progressive",
        "promo",
        "properties",
        "property",
        "protection",
        "pru",
        "prudential",
        "ps",
        "pt",
        "pub",
        "pw",
        "pwc",
        "py",
        "qa",
        "qpon",
        "quebec",
        "quest",
        "racing",
        "radio",
        "re",
        "read",
        "realestate",
        "realtor",
        "realty",
        "recipes",
        "red",
        "redstone",
        "redumbrella",
        "rehab",
        "reise",
        "reisen",
        "reit",
        "reliance",
        "ren",
        "rent",
        "rentals",
        "repair",
        "report",
        "republican",
        "rest",
        "restaurant",
        "review",
        "reviews",
        "rexroth",
        "rich",
        "richardli",
        "ricoh",
        "ril",
        "rio",
        "rip",
        "ro",
        "rocks",
        "rodeo",
        "rogers",
        "room",
        "rs",
        "rsvp",
        "ru",
        "rugby",
        "ruhr",
        "run",
        "rw",
        "rwe",
        "ryukyu",
        "sa",
        "saarland",
        "safe",
        "safety",
        "sakura",
        "sale",
        "salon",
        "samsclub",
        "samsung",
        "sandvik",
        "sandvikcoromant",
        "sanofi",
        "sap",
        "sarl",
        "sas",
        "save",
        "saxo",
        "sb",
        "sbi",
        "sbs",
        "sc",
        "scb",
        "schaeffler",
        "schmidt",
        "scholarships",
        "school",
        "schule",
        "schwarz",
        "science",
        "scot",
        "sd",
        "se",
        "search",
        "seat",
        "secure",
        "security",
        "seek",
        "select",
        "sener",
        "services",
        "seven",
        "sew",
        "sex",
        "sexy",
        "sfr",
        "sg",
        "sh",
        "shangrila",
        "sharp",
        "shell",
        "shia",
        "shiksha",
        "shoes",
        "shop",
        "shopping",
        "shouji",
        "show",
        "si",
        "silk",
        "sina",
        "singles",
        "site",
        "sj",
        "sk",
        "ski",
        "skin",
        "sky",
        "skype",
        "sl",
        "sling",
        "sm",
        "smart",
        "smile",
        "sn",
        "sncf",
        "so",
        "soccer",
        "social",
        "softbank",
        "software",
        "sohu",
        "solar",
        "solutions",
        "song",
        "sony",
        "soy",
        "spa",
        "space",
        "sport",
        "spot",
        "sr",
        "srl",
        "ss",
        "st",
        "stada",
        "staples",
        "star",
        "statebank",
        "statefarm",
        "stc",
        "stcgroup",
        "stockholm",
        "storage",
        "store",
        "stream",
        "studio",
        "study",
        "style",
        "su",
        "sucks",
        "supplies",
        "supply",
        "support",
        "surf",
        "surgery",
        "suzuki",
        "sv",
        "swatch",
        "swiss",
        "sx",
        "sy",
        "sydney",
        "systems",
        "sz",
        "tab",
        "taipei",
        "talk",
        "taobao",
        "target",
        "tatamotors",
        "tatar",
        "tattoo",
        "tax",
        "taxi",
        "tc",
        "tci",
        "td",
        "tdk",
        "team",
        "tech",
        "technology",
        "tel",
        "temasek",
        "tennis",
        "teva",
        "tf",
        "tg",
        "th",
        "thd",
        "theater",
        "theatre",
        "tiaa",
        "tickets",
        "tienda",
        "tips",
        "tires",
        "tirol",
        "tj",
        "tjmaxx",
        "tjx",
        "tk",
        "tkmaxx",
        "tl",
        "tm",
        "tmall",
        "tn",
        "to",
        "today",
        "tokyo",
        "tools",
        "top",
        "toray",
        "toshiba",
        "total",
        "tours",
        "town",
        "toyota",
        "toys",
        "tr",
        "trade",
        "trading",
        "training",
        "travel",
        "travelers",
        "travelersinsurance",
        "trust",
        "trv",
        "tt",
        "tube",
        "tui",
        "tunes",
        "tushu",
        "tv",
        "tvs",
        "tw",
        "tz",
        "ua",
        "ubank",
        "ubs",
        "ug",
        "uk",
        "unicom",
        "university",
        "uno",
        "uol",
        "ups",
        "us",
        "uy",
        "uz",
        "va",
        "vacations",
        "vana",
        "vanguard",
        "vc",
        "ve",
        "vegas",
        "ventures",
        "verisign",
        "verm\xF6gensberater",
        "verm\xF6gensberatung",
        "versicherung",
        "vet",
        "vg",
        "vi",
        "viajes",
        "video",
        "vig",
        "viking",
        "villas",
        "vin",
        "vip",
        "virgin",
        "visa",
        "vision",
        "viva",
        "vivo",
        "vlaanderen",
        "vn",
        "vodka",
        "volvo",
        "vote",
        "voting",
        "voto",
        "voyage",
        "vu",
        "wales",
        "walmart",
        "walter",
        "wang",
        "wanggou",
        "watch",
        "watches",
        "weather",
        "weatherchannel",
        "webcam",
        "weber",
        "website",
        "wed",
        "wedding",
        "weibo",
        "weir",
        "wf",
        "whoswho",
        "wien",
        "wiki",
        "williamhill",
        "win",
        "windows",
        "wine",
        "winners",
        "wme",
        "wolterskluwer",
        "woodside",
        "work",
        "works",
        "world",
        "wow",
        "ws",
        "wtc",
        "wtf",
        "xbox",
        "xerox",
        "xihuan",
        "xin",
        "xxx",
        "xyz",
        "yachts",
        "yahoo",
        "yamaxun",
        "yandex",
        "ye",
        "yodobashi",
        "yoga",
        "yokohama",
        "you",
        "youtube",
        "yt",
        "yun",
        "za",
        "zappos",
        "zara",
        "zero",
        "zip",
        "zm",
        "zone",
        "zuerich",
        "zw",
        "\u03B5\u03BB",
        "\u03B5\u03C5",
        "\u0431\u0433",
        "\u0431\u0435\u043B",
        "\u0434\u0435\u0442\u0438",
        "\u0435\u044E",
        "\u043A\u0430\u0442\u043E\u043B\u0438\u043A",
        "\u043A\u043E\u043C",
        "\u043C\u043A\u0434",
        "\u043C\u043E\u043D",
        "\u043C\u043E\u0441\u043A\u0432\u0430",
        "\u043E\u043D\u043B\u0430\u0439\u043D",
        "\u043E\u0440\u0433",
        "\u0440\u0443\u0441",
        "\u0440\u0444",
        "\u0441\u0430\u0439\u0442",
        "\u0441\u0440\u0431",
        "\u0443\u043A\u0440",
        "\u049B\u0430\u0437",
        "\u0570\u0561\u0575",
        "\u05D9\u05E9\u05E8\u05D0\u05DC",
        "\u05E7\u05D5\u05DD",
        "\u0627\u0628\u0648\u0638\u0628\u064A",
        "\u0627\u0631\u0627\u0645\u0643\u0648",
        "\u0627\u0644\u0627\u0631\u062F\u0646",
        "\u0627\u0644\u0628\u062D\u0631\u064A\u0646",
        "\u0627\u0644\u062C\u0632\u0627\u0626\u0631",
        "\u0627\u0644\u0633\u0639\u0648\u062F\u064A\u0629",
        "\u0627\u0644\u0639\u0644\u064A\u0627\u0646",
        "\u0627\u0644\u0645\u063A\u0631\u0628",
        "\u0627\u0645\u0627\u0631\u0627\u062A",
        "\u0627\u06CC\u0631\u0627\u0646",
        "\u0628\u0627\u0631\u062A",
        "\u0628\u0627\u0632\u0627\u0631",
        "\u0628\u064A\u062A\u0643",
        "\u0628\u06BE\u0627\u0631\u062A",
        "\u062A\u0648\u0646\u0633",
        "\u0633\u0648\u062F\u0627\u0646",
        "\u0633\u0648\u0631\u064A\u0629",
        "\u0634\u0628\u0643\u0629",
        "\u0639\u0631\u0627\u0642",
        "\u0639\u0631\u0628",
        "\u0639\u0645\u0627\u0646",
        "\u0641\u0644\u0633\u0637\u064A\u0646",
        "\u0642\u0637\u0631",
        "\u0643\u0627\u062B\u0648\u0644\u064A\u0643",
        "\u0643\u0648\u0645",
        "\u0645\u0635\u0631",
        "\u0645\u0644\u064A\u0633\u064A\u0627",
        "\u0645\u0648\u0631\u064A\u062A\u0627\u0646\u064A\u0627",
        "\u0645\u0648\u0642\u0639",
        "\u0647\u0645\u0631\u0627\u0647",
        "\u067E\u0627\u06A9\u0633\u062A\u0627\u0646",
        "\u0680\u0627\u0631\u062A",
        "\u0915\u0949\u092E",
        "\u0928\u0947\u091F",
        "\u092D\u093E\u0930\u0924",
        "\u092D\u093E\u0930\u0924\u092E\u094D",
        "\u092D\u093E\u0930\u094B\u0924",
        "\u0938\u0902\u0917\u0920\u0928",
        "\u09AC\u09BE\u0982\u09B2\u09BE",
        "\u09AD\u09BE\u09B0\u09A4",
        "\u09AD\u09BE\u09F0\u09A4",
        "\u0A2D\u0A3E\u0A30\u0A24",
        "\u0AAD\u0ABE\u0AB0\u0AA4",
        "\u0B2D\u0B3E\u0B30\u0B24",
        "\u0B87\u0BA8\u0BCD\u0BA4\u0BBF\u0BAF\u0BBE",
        "\u0B87\u0BB2\u0B99\u0BCD\u0B95\u0BC8",
        "\u0B9A\u0BBF\u0B99\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0BC2\u0BB0\u0BCD",
        "\u0C2D\u0C3E\u0C30\u0C24\u0C4D",
        "\u0CAD\u0CBE\u0CB0\u0CA4",
        "\u0D2D\u0D3E\u0D30\u0D24\u0D02",
        "\u0DBD\u0D82\u0D9A\u0DCF",
        "\u0E04\u0E2D\u0E21",
        "\u0E44\u0E17\u0E22",
        "\u0EA5\u0EB2\u0EA7",
        "\u10D2\u10D4",
        "\u307F\u3093\u306A",
        "\u30A2\u30DE\u30BE\u30F3",
        "\u30AF\u30E9\u30A6\u30C9",
        "\u30B0\u30FC\u30B0\u30EB",
        "\u30B3\u30E0",
        "\u30B9\u30C8\u30A2",
        "\u30BB\u30FC\u30EB",
        "\u30D5\u30A1\u30C3\u30B7\u30E7\u30F3",
        "\u30DD\u30A4\u30F3\u30C8",
        "\u4E16\u754C",
        "\u4E2D\u4FE1",
        "\u4E2D\u56FD",
        "\u4E2D\u570B",
        "\u4E2D\u6587\u7F51",
        "\u4E9A\u9A6C\u900A",
        "\u4F01\u4E1A",
        "\u4F5B\u5C71",
        "\u4FE1\u606F",
        "\u5065\u5EB7",
        "\u516B\u5366",
        "\u516C\u53F8",
        "\u516C\u76CA",
        "\u53F0\u6E7E",
        "\u53F0\u7063",
        "\u5546\u57CE",
        "\u5546\u5E97",
        "\u5546\u6807",
        "\u5609\u91CC",
        "\u5609\u91CC\u5927\u9152\u5E97",
        "\u5728\u7EBF",
        "\u5927\u62FF",
        "\u5929\u4E3B\u6559",
        "\u5A31\u4E50",
        "\u5BB6\u96FB",
        "\u5E7F\u4E1C",
        "\u5FAE\u535A",
        "\u6148\u5584",
        "\u6211\u7231\u4F60",
        "\u624B\u673A",
        "\u62DB\u8058",
        "\u653F\u52A1",
        "\u653F\u5E9C",
        "\u65B0\u52A0\u5761",
        "\u65B0\u95FB",
        "\u65F6\u5C1A",
        "\u66F8\u7C4D",
        "\u673A\u6784",
        "\u6DE1\u9A6C\u9521",
        "\u6E38\u620F",
        "\u6FB3\u9580",
        "\u70B9\u770B",
        "\u79FB\u52A8",
        "\u7EC4\u7EC7\u673A\u6784",
        "\u7F51\u5740",
        "\u7F51\u5E97",
        "\u7F51\u7AD9",
        "\u7F51\u7EDC",
        "\u8054\u901A",
        "\u8C37\u6B4C",
        "\u8D2D\u7269",
        "\u901A\u8CA9",
        "\u96C6\u56E2",
        "\u96FB\u8A0A\u76C8\u79D1",
        "\u98DE\u5229\u6D66",
        "\u98DF\u54C1",
        "\u9910\u5385",
        "\u9999\u683C\u91CC\u62C9",
        "\u9999\u6E2F",
        "\uB2F7\uB137",
        "\uB2F7\uCEF4",
        "\uC0BC\uC131",
        "\uD55C\uAD6D"
      ];
    }
  });

  // node_modules/react-linkify/dist/Linkify.js
  var require_Linkify = __commonJS({
    "node_modules/react-linkify/dist/Linkify.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.linkify = void 0;
      var _createClass = /* @__PURE__ */ function() {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        return function(Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();
      var _react = require_react();
      var _react2 = _interopRequireDefault(_react);
      var _linkifyIt = require_linkify_it();
      var _linkifyIt2 = _interopRequireDefault(_linkifyIt);
      var _tlds = require_tlds();
      var _tlds2 = _interopRequireDefault(_tlds);
      var _propTypes = require_prop_types();
      var _propTypes2 = _interopRequireDefault(_propTypes);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return call && (typeof call === "object" || typeof call === "function") ? call : self;
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }
      var linkify = exports.linkify = new _linkifyIt2.default();
      linkify.tlds(_tlds2.default);
      var Linkify3 = function(_React$Component) {
        _inherits(Linkify4, _React$Component);
        function Linkify4() {
          var _ref;
          var _temp, _this, _ret;
          _classCallCheck(this, Linkify4);
          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Linkify4.__proto__ || Object.getPrototypeOf(Linkify4)).call.apply(_ref, [this].concat(args))), _this), _this.parseCounter = 0, _temp), _possibleConstructorReturn(_this, _ret);
        }
        _createClass(Linkify4, [{
          key: "getMatches",
          value: function getMatches(string) {
            return linkify.match(string);
          }
        }, {
          key: "parseString",
          value: function parseString(string) {
            var _this2 = this;
            var elements = [];
            if (string === "") {
              return elements;
            }
            var matches = this.getMatches(string);
            if (!matches) {
              return string;
            }
            var lastIndex = 0;
            matches.forEach(function(match, idx) {
              if (match.index > lastIndex) {
                elements.push(string.substring(lastIndex, match.index));
              }
              var props = { href: match.url, key: "parse" + _this2.parseCounter + "match" + idx };
              for (var key in _this2.props.properties) {
                var val = _this2.props.properties[key];
                if (val === Linkify4.MATCH) {
                  val = match.url;
                }
                props[key] = val;
              }
              elements.push(_react2.default.createElement(_this2.props.component, props, match.text));
              lastIndex = match.lastIndex;
            });
            if (lastIndex < string.length) {
              elements.push(string.substring(lastIndex));
            }
            return elements.length === 1 ? elements[0] : elements;
          }
        }, {
          key: "parse",
          value: function parse(children) {
            var _this3 = this;
            var parsed = children;
            if (typeof children === "string") {
              parsed = this.parseString(children);
            } else if (_react2.default.isValidElement(children) && children.type !== "a" && children.type !== "button") {
              parsed = _react2.default.cloneElement(children, { key: "parse" + ++this.parseCounter }, this.parse(children.props.children));
            } else if (children instanceof Array) {
              parsed = children.map(function(child) {
                return _this3.parse(child);
              });
            }
            return parsed;
          }
        }, {
          key: "render",
          value: function render() {
            this.parseCounter = 0;
            var parsedChildren = this.parse(this.props.children);
            return _react2.default.createElement(
              "span",
              { className: this.props.className },
              parsedChildren
            );
          }
        }]);
        return Linkify4;
      }(_react2.default.Component);
      Linkify3.MATCH = "LINKIFY_MATCH";
      Linkify3.propTypes = {
        className: _propTypes2.default.string,
        component: _propTypes2.default.any,
        properties: _propTypes2.default.object,
        urlRegex: _propTypes2.default.object,
        emailRegex: _propTypes2.default.object
      };
      Linkify3.defaultProps = {
        className: "Linkify",
        component: "a",
        properties: {}
      };
      exports.default = Linkify3;
    }
  });

  // src/assets/file/pdf.png
  var require_pdf = __commonJS({
    "src/assets/file/pdf.png"(exports, module) {
      module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHQSURBVHgBtVPJSsNQFD1pG6vQxmgVoQp157gQZ904fIB+gvoFguBaBd2KIgruBNF1EdyoWFeKE2ihDjsXtl1opKRNR5P6XoqlNNE0Ug/cvJfLvSf3vPMClBmMXjIWi02TZQoGUBRlneM4r4bwvGdorUEQJunewlejaniQT975+cqhfqQfnmDhnLA1NSJ5cZVvrDs6pEuExJjD4bj7ztvow6rIPJBtpvuK1hZIgwNw9XSjor0NUkyCPRKBdHwCORQqHpL0wUcU5UktelLshChxeQX5NQhJktSc3NmhqYtGozR4URR9gUCgS5dQEaMIbmwifnSCD1ctHH4/xHAYqdV1DaHT6VSDnCNPJpzNSxbqeW+atb2oVe9vqOloG8nOz41mHp8Qcbly3fNzKAW6LhMZiwzDLBTn5WBINYghUxVDEIQdj8czo3uGP4GakvAe/FpjivDz+dmwxhQhNYzt6y0fYeb6For2Lv6NMH19A/v4qDqltLWtvsd395Ald7EQtlLIUqc+0rwPbmUJVrdbdZuep0LI6AesBa4bEtJJ0kQqt5wjo7A2utWwj49p6g0l06tCpVKCUmA4YdXkBMzAlMulQHdC8tu9kOUMJsCy7D3+A18X/qto/yY1sQAAAABJRU5ErkJggg==";
    }
  });

  // src/assets/file/excel.png
  var require_excel = __commonJS({
    "src/assets/file/excel.png"(exports, module) {
      module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAbCAYAAABiFp9rAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPgSURBVHgBvVVNbFtFEJ7d9+z4J3YTlBBIgxpQEEgRaqRI/FQIckFCSFFzSYAbSIDECa7lgi9cKiRAPXDnR0LKgQJC6tECDpWCD3BrDpHbqlGixonjl8TPft7dfjP+idu6jaP+jLzefbs78818OztL9JhEHbVh8tfPhxLlcKjX2tCLp3rqXH7tXPHYQM/9+PG3jtRnvdayT4+QnxjotfRb4fUvF7onNB0hABmiY4oidUJ0nesf6EFEKaUBJqz5dy6ePL8wY5w9axuWN7jaRum00hqROZJfZEjH4uQ/kSbDY8/cjeA1/Z+dnfXQNbqB2mflGsZ8Ay/elDmEHoVVdJZ56IDVV6+TdzJDNorITyV7xSL/u7u7mqPC0Ah0N5diEOFmB5Lu7edfEZBnTjxJZ069RM46shYR+EfmkEgYhrqFqvwWl9wJsrXstaWdakCfvHyWytUKvX/6Lfqn+F8zMtuMqh+x1nY8ksPK5XKqBQRjBrZgzVj1xaXv6Yd3c2L358IlcsaiGYm6HzHGqLm5ORn7iMYtLi7qyclJr1gsRkKddQokud1qoNh9pg5aTSCs+6U6DdQOaD+8RjZx78Td3NxUExMTinWEw+XlZQKIhOlwBs5aJlH9/uHX9MaFj4Sqd144I0BkbN8RjY6OUiaTcXw0TB0hPDU+Pi5A1jgml7KxFJ3744K7urVOn/7yFZX3KwKCtOwbSGvd2ahbiSB8NiOyZGGMDf/5/1+KDV+7eYP+vvKvgBwHqFsk6/L5/KFm5L5DJuQ5Kmk3DhZc2JgR4/ipyJKqYR+KTHwjvK/x7qwTIKZudXXVra+vU/l8/iKmLrY3jC7MPEsUm2neBjTUUJXxqR9h6oIg6JQg157stdkbTFDfF+ceIlnHf8gOl0gkLD0i4TzwW8nALvcE2vjp8gdPvfdqjo4hcLrcHnN6i/12Gcel9eghy9jYWJpaedBdHRVXiLW1NV0oFLyRkZHY1tZWEt6lURyTsRjehqaS6ESo3Jjj3qFX6C16A4bCer1+kM1m9yqVShU26ygI5rb0wYRFhHZpacmurKzw3dJQ0gDDtIvQOvvj8fihh03+8WpE/DhF6XS65vs+v0Od4+guVMIl177p6WmH2tfY2dmpw2AVnu5BMfA8LwAw95VWHySTSfmGbpBKpfYGBwf3sb8G5xp4+CzbupO6Q0ScG6ISGkulEhdbplLzBdze3tbDw8OufbYs5XLZYY4jc1jnqAxAzPz8vMHL4OiI+8GGPE4SXGimLA7vpGE8MDU1Ja095nVuvJd1AKC7nbnvU8kbmX6+a9y33q2O4LvTc3Pu9iLIEdLjllvqIASpNsj6CQAAAABJRU5ErkJggg==";
    }
  });

  // src/assets/file/csv.png
  var require_csv = __commonJS({
    "src/assets/file/csv.png"(exports, module) {
      module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAF6SURBVHgBtVQ9SwNBFJx3F0ULQcHO5lAEC8HOWn+BicHGSNBSMKCFrRixsYoWYqkWaholFmIjBEsFQfEPpFRsLFSC3t1zLiliwuaSgzhwe7vvY3Z29+0CHYbUjfLJZahOIgoUT5i/2DU7TxNHiIqz2cO/w5gx6CS+CFgOQiGvSJ0fNFrNhGrdwPbNvhYwJ3Xbg/CsfrRGqT1C98fhcYUTKt5NZjOh9DywtRGG3nIEQv1OUkG4wrK8sd1vNNfqMJ+YgC856tpEFCjW4HobWLh8rlfoo0CvAw/TiAqxJ9gOB12rSUgJIimILlU2XzWDmMzQflz99JP+rCnRvIc+djjVHJNe+L+F7V1ReZrkQ1SzyomUpB/tE8bwRVV97FUPxrPTlTsLGeBojDNmoVI0pZqXrFiHq9skyFVO28c1tKvE6BGIvwJbRhnlmLWYCceZVESwsgAid6z2wF6Fiyk0QY3Q8rdYNhlmFxAJGufd3zP7Ov986WNkUsU9/hO/JUZv9Kr/H4IAAAAASUVORK5CYII=";
    }
  });

  // src/assets/file/doc.png
  var require_doc = __commonJS({
    "src/assets/file/doc.png"(exports, module) {
      module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHvSURBVHgBrZLNSxtRFMXPm4SYSmg+TClUbXVhW7rp0EV10UUoNK6KpXRTuivtWtp1/4QW22333bipgqA7s4kLBUHwA0T8GBE1iSYxCRqT96533iiCOjgDOTBzmbnc35xz3wAtlrjpZep/MYYTxOBDmY/xTVfg638HvwliGP40Pv0p8c64qUPCnzstgahdDLRYQfvW9zVrSoEhoCnsb+QW1p8H2rhFBLI/TnW0x8No6+h0JxnGJVAZaoRnU8RZiVUtHNvVAepCKG+sItIbvNWhxkoFPIiH0N8XBSkSb8yE6EyEELkTwMDjKJRNFQF4keNTOU6G3z7Ubn59foK0mcSzrgg+vLoPkgSvCjoOFbbzx+hOhtHPjqbmC0i/SGp4dumQgRIU8AbVQL0v1pJVxSCDpuby+P6+FwNPo/g5ugbVlKgVKzilnDtJiMvIevEce2a5iC/pLnZ1gBm+ujvCWFwvs0NessfUzrHxjnjxNDmbg7VXE+WjOv5ObCC7kNcwHZl8RFb2EClh7ddg7VageKfWbg1bOxXtnJRyYngFSin/QCGjf2webhRWhlS9ajox2X2zDmqUoBrSnXS+Qw3MjQ6OcRm76N19+aOHi3nxbARDQPgRPDu8KqP9nudDuDaLFku4NWKpkR74U6mU+VZCq3UGch/iBYutY1kAAAAASUVORK5CYII=";
    }
  });

  // src/assets/file/zip.png
  var require_zip = __commonJS({
    "src/assets/file/zip.png"(exports, module) {
      module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFmSURBVHgB1ZS/S0JRFIC/axoUpUKNCRYlVEtQFFRERJtTrUVNkUtFTUGLf0EErU5B0NBQtKVQg4MVkVMQLUJNaUg/KEV9t2eiPuw99MFb+uByL/ee83HuO7wr0CDPvBsoMqgu3ejhcEHH6LIYCx1ggK0iO/VMqbK9X1lbNwzugHdBJ0WG5E1guq4QmmYqy+wrZFLgW4f+7docB0r+XF6tjtQRalOc6okAJYc+0gH5sLxeGWpMWKSttzSn74wi3EjlQsa3fPWFuXdIHJYq7QtoCitAIaMdbr6TERn295RD7LrC1i4Y3oevZ7hdq+7nPyEZrY32gFhS56BxhW/3EJmEdvU2s1HMYDc8KV43tgipGGYwboprAMaPMIux0NZcmu1OrBF2TsDDrvrJ57FG+PEILWoDsy+YwbgpT8elYRIbFvOfhDYyWEBVmMfcL6HFzskfoZhLXCJF8TVN0CiCNIrYFP5EvLz1A8i1Ynhn94nQAAAAAElFTkSuQmCC";
    }
  });

  // src/assets/file/ppt.png
  var require_ppt = __commonJS({
    "src/assets/file/ppt.png"(exports, module) {
      module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHjSURBVHgBrVRNSyNBEH2dmUjY3WTjBiRL9tCwuqwiOgoigmJAPOhRQUE9KF7FoycPgt486Q8Qf0FQED14EBXix8ERBAU/IyiCF0M0Eo2Ttnsk4iTtDME86Jmiu+rVq+qZAooM4uRwEab+x2c3BTKawRCv2TpbsPNXs4Ye/k8VI62xF0YJIbUuMI0x0Icn+AHD9HERMs9fC44KD5r+rgEsDAcovp8x96+ymOzs8fJkvTZ6PqGiAPia22hofJrKzk4HOoDoOVwoAMbDPZJ727gY6cPzzZXUJ09hye8/+F7XaNpJfccSmNhYhfLDy0l3cNzdivL5JXj+VdoTlg2PwtvSztUkEPT6zEDjPmHxcfOkAqnTwzxCacmJzVXERvq5Gt97cBZJfZdXETJXthJbhQKCKNAzZNqZHHWiBWKJ1uQm+5RQZE4Hr3AzM2npocJb4Kmogqe8EoHeQVmonFCUfD01Jk0U6Bk07TRPJJZQWfJBaR6huAAXVyJD6uQI8eWIZa+0s8ue8HZuFp/BHQzhW731ItScPkoVfgUF/XriUynt7C4eYXwlsn+3ElnM2faLBwPZF+/3eag3VGiKmqEMb+OL8NHF3bRsgOnMx1d19GzILqnjgNX5gFVTqsbnIzWI84AtOl4B1nScpcsVmE4AAAAASUVORK5CYII=";
    }
  });

  // src/assets/file/music.png
  var require_music = __commonJS({
    "src/assets/file/music.png"(exports, module) {
      module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC+SURBVHgBxZMNDcIwEIVflgmYAyoBCzgYDoYCigMcLCgACcMBEnDAJMwBvCYlLM31jzXwJS+XNde39u4K/JiGalGQI/WkVOqGCt+zpzp3sRYSexsPCKNtvMwXpRO28NdNIULOlU2DHvicLGioE/7eOHGOgq1nZT96CAXOoKPOxmtJl0WKG5qxmagTnPZnMlAranwbaizjTu0AebB9jNSWuoWSas/GyZM/IIJkuEEa11TDVMS6Fx+bGOaZrfFPXpn4FvwvoItHAAAAAElFTkSuQmCC";
    }
  });

  // src/assets/file/gala_file.png
  var require_gala_file = __commonJS({
    "src/assets/file/gala_file.png"(exports, module) {
      module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADHSURBVHgB7ZThDYIwEIUfhgEYoW7ACLoBG8gm4iZuIBs4St1ANtA7vMajaWtr/GV4yUuhvPt6KU0rLNWQdzKGNJFHZMqQLfkuo2+ef5CPuUAuuiS66wWYBTUSbBOZXhYdUtDae5/wWYM3npDo0CCuDq99bBSQaw7fAhnk9rmV7DkGzQG6nMX752jPtTXKdCNvsVyYn6/upRSowUFt8GOtwD8Fxm6n+XCmrq8YjGusm6jURyNQDuXcOlDZPeSwV4FQh7IuR6gGnsSLM0glqouCAAAAAElFTkSuQmCC";
    }
  });

  // node_modules/emoji-js/lib/emoji.js
  var require_emoji = __commonJS({
    "node_modules/emoji-js/lib/emoji.js"(exports, module) {
      "use strict";
      (function() {
        var root = this;
        var previous_emoji = root.EmojiConvertor;
        var emoji = function() {
          var self = this;
          self.img_set = "apple";
          self.img_sets = {
            "apple": { "path": "/emoji-data/img-apple-64/", "sheet": "/emoji-data/sheet_apple_64.png", "mask": 1 },
            "google": { "path": "/emoji-data/img-google-64/", "sheet": "/emoji-data/sheet_google_64.png", "mask": 2 },
            "twitter": { "path": "/emoji-data/img-twitter-64/", "sheet": "/emoji-data/sheet_twitter_64.png", "mask": 4 },
            "emojione": { "path": "/emoji-data/img-emojione-64/", "sheet": "/emoji-data/sheet_emojione_64.png", "mask": 8 },
            "facebook": { "path": "/emoji-data/img-facebook-64/", "sheet": "/emoji-data/sheet_facebook_64.png", "mask": 16 },
            "messenger": { "path": "/emoji-data/img-messenger-64/", "sheet": "/emoji-data/sheet_messenger_64.png", "mask": 32 }
          };
          self.use_css_imgs = false;
          self.colons_mode = false;
          self.text_mode = false;
          self.include_title = false;
          self.include_text = false;
          self.allow_native = true;
          self.use_sheet = false;
          self.avoid_ms_emoji = true;
          self.allow_caps = false;
          self.img_suffix = "";
          self.inits = {};
          self.map = {};
          self.init_env();
          return self;
        };
        emoji.prototype.noConflict = function() {
          root.EmojiConvertor = previous_emoji;
          return emoji;
        };
        emoji.prototype.replace_emoticons = function(str) {
          var self = this;
          var colonized = self.replace_emoticons_with_colons(str);
          return self.replace_colons(colonized);
        };
        emoji.prototype.replace_emoticons_with_colons = function(str) {
          var self = this;
          self.init_emoticons();
          var _prev_offset = 0;
          var emoticons_with_parens = [];
          var str_replaced = str.replace(self.rx_emoticons, function(m, $1, emoticon, offset) {
            var prev_offset = _prev_offset;
            _prev_offset = offset + m.length;
            var has_open_paren = emoticon.indexOf("(") !== -1;
            var has_close_paren = emoticon.indexOf(")") !== -1;
            if ((has_open_paren || has_close_paren) && emoticons_with_parens.indexOf(emoticon) == -1) {
              emoticons_with_parens.push(emoticon);
            }
            if (has_close_paren && !has_open_paren) {
              var piece = str.substring(prev_offset, offset);
              if (piece.indexOf("(") !== -1 && piece.indexOf(")") === -1) return m;
            }
            if (m === "\n8)") {
              var before_match = str.substring(0, offset);
              if (/\n?(6\)|7\))/.test(before_match)) return m;
            }
            var val = self.data[self.map.emoticons[emoticon]][3][0];
            return val ? $1 + ":" + val + ":" : m;
          });
          if (emoticons_with_parens.length) {
            var escaped_emoticons = emoticons_with_parens.map(self.escape_rx);
            var parenthetical_rx = new RegExp("(\\(.+)(" + escaped_emoticons.join("|") + ")(.+\\))", "g");
            str_replaced = str_replaced.replace(parenthetical_rx, function(m, $1, emoticon, $2) {
              var val = self.data[self.map.emoticons[emoticon]][3][0];
              return val ? $1 + ":" + val + ":" + $2 : m;
            });
          }
          return str_replaced;
        };
        emoji.prototype.replace_colons = function(str) {
          var self = this;
          self.init_colons();
          return str.replace(self.rx_colons, function(m) {
            var idx = m.substr(1, m.length - 2);
            if (self.allow_caps) idx = idx.toLowerCase();
            if (idx.indexOf("::skin-tone-") > -1) {
              var skin_tone = idx.substr(-1, 1);
              var skin_idx = "skin-tone-" + skin_tone;
              var skin_val = self.map.colons[skin_idx];
              idx = idx.substr(0, idx.length - 13);
              var val = self.map.colons[idx];
              if (val) {
                return self.replacement(val, idx, ":", {
                  "idx": skin_val,
                  "actual": skin_idx,
                  "wrapper": ":"
                });
              } else {
                return ":" + idx + ":" + self.replacement(skin_val, skin_idx, ":");
              }
            } else {
              var val = self.map.colons[idx];
              return val ? self.replacement(val, idx, ":") : m;
            }
          });
        };
        emoji.prototype.replace_unified = function(str) {
          var self = this;
          self.init_unified();
          return str.replace(self.rx_unified, function(m, p1, p2) {
            var val = self.map.unified[p1];
            if (val) {
              var idx = null;
              if (p2 == "\u{1F3FB}") idx = "1f3fb";
              if (p2 == "\u{1F3FC}") idx = "1f3fc";
              if (p2 == "\u{1F3FD}") idx = "1f3fd";
              if (p2 == "\u{1F3FE}") idx = "1f3fe";
              if (p2 == "\u{1F3FF}") idx = "1f3ff";
              if (idx) {
                return self.replacement(val, null, null, {
                  idx,
                  actual: p2,
                  wrapper: ""
                });
              }
              return self.replacement(val);
            }
            val = self.map.unified_vars[p1];
            if (val) {
              return self.replacement(val[0], null, null, {
                "idx": val[1],
                "actual": "",
                "wrapper": ""
              });
            }
            return m;
          });
        };
        emoji.prototype.addAliases = function(map) {
          var self = this;
          self.init_colons();
          for (var i in map) {
            self.map.colons[i] = map[i];
          }
        };
        emoji.prototype.removeAliases = function(list) {
          var self = this;
          for (var i = 0; i < list.length; i++) {
            var alias = list[i];
            delete self.map.colons[alias];
            finder_block: {
              for (var j in self.data) {
                for (var k = 0; k < self.data[j][3].length; k++) {
                  if (alias == self.data[j][3][k]) {
                    self.map.colons[alias] = j;
                    break finder_block;
                  }
                }
              }
            }
          }
        };
        emoji.prototype.replacement = function(idx, actual, wrapper, variation) {
          var self = this;
          var full_idx = idx;
          var extra = "";
          var var_idx = null;
          if (typeof variation === "object") {
            extra = self.replacement(variation.idx, variation.actual, variation.wrapper);
            var_idx = variation.idx;
          }
          wrapper = wrapper || "";
          if (self.colons_mode) return ":" + self.data[idx][3][0] + ":" + extra;
          var text_name = actual ? wrapper + actual + wrapper : self.data[idx][8] || wrapper + self.data[idx][3][0] + wrapper;
          if (self.text_mode) return text_name + extra;
          self.init_env();
          if (self.replace_mode == "unified" && self.allow_native && self.data[idx][0][0]) return self.data[idx][0][0] + extra;
          if (self.replace_mode == "softbank" && self.allow_native && self.data[idx][1]) return self.data[idx][1] + extra;
          if (self.replace_mode == "google" && self.allow_native && self.data[idx][2]) return self.data[idx][2] + extra;
          var img = self.find_image(idx, var_idx);
          var title = self.include_title ? ' title="' + (actual || self.data[idx][3][0]) + '"' : "";
          var text = self.include_text ? wrapper + (actual || self.data[idx][3][0]) + wrapper : "";
          if (self.data[idx][7]) {
            img.path = self.data[idx][7];
            img.px = null;
            img.py = null;
            img.is_var = false;
          }
          if (img.is_var) {
            extra = "";
            if (self.include_text && variation && variation.actual && variation.wrapper) {
              text += variation.wrapper + variation.actual + variation.wrapper;
            }
          }
          if (self.supports_css) {
            if (self.use_sheet && img.px != null && img.py != null) {
              var mul = 100 / (self.sheet_size - 1);
              var style = "background: url(" + img.sheet + ");background-position:" + mul * img.px + "% " + mul * img.py + "%;background-size:" + self.sheet_size + "00%";
              return '<span class="emoji-outer emoji-sizer"><span class="emoji-inner" style="' + style + '"' + title + ' data-codepoints="' + img.full_idx + '">' + text + "</span></span>" + extra;
            } else if (self.use_css_imgs) {
              return '<span class="emoji emoji-' + idx + '"' + title + ' data-codepoints="' + img.full_idx + '">' + text + "</span>" + extra;
            } else {
              return '<span class="emoji emoji-sizer" style="background-image:url(' + img.path + ')"' + title + ' data-codepoints="' + img.full_idx + '">' + text + "</span>" + extra;
            }
          }
          return '<img src="' + img.path + '" class="emoji" data-codepoints="' + img.full_idx + '" ' + title + "/>" + extra;
        };
        emoji.prototype.find_image = function(idx, var_idx) {
          var self = this;
          var out = {
            "path": "",
            "sheet": "",
            "px": self.data[idx][4],
            "py": self.data[idx][5],
            "full_idx": idx,
            "is_var": false
          };
          var use_mask = self.data[idx][6];
          if (var_idx && self.variations_data[idx] && self.variations_data[idx][var_idx]) {
            var var_data = self.variations_data[idx][var_idx];
            out.px = var_data[1];
            out.py = var_data[2];
            out.full_idx = var_data[0];
            out.is_var = true;
            use_mask = var_data[3];
          }
          var try_order = [self.img_set, "apple", "emojione", "google", "twitter", "facebook", "messenger"];
          for (var j = 0; j < try_order.length; j++) {
            if (use_mask & self.img_sets[try_order[j]].mask) {
              out.path = self.img_sets[try_order[j]].path + out.full_idx + ".png" + self.img_suffix;
              out.sheet = self.img_sets[self.img_set].sheet;
              return out;
            }
            if (self.obsoletes_data[out.full_idx]) {
              var ob_data = self.obsoletes_data[out.full_idx];
              if (ob_data[3] & self.img_sets[try_order[j]].mask) {
                out.path = self.img_sets[try_order[j]].path + ob_data[0] + ".png" + self.img_suffix;
                out.sheet = self.img_sets[try_order[j]].sheet;
                out.px = ob_data[1];
                out.py = ob_data[2];
                return out;
              }
            }
          }
          return out;
        };
        emoji.prototype.init_emoticons = function() {
          var self = this;
          if (self.inits.emoticons) return;
          self.init_colons();
          self.inits.emoticons = 1;
          var a = [];
          self.map.emoticons = {};
          for (var i in self.emoticons_data) {
            var emoticon = i.replace(/\&/g, "&amp;").replace(/\</g, "&lt;").replace(/\>/g, "&gt;");
            if (!self.map.colons[self.emoticons_data[i]]) continue;
            self.map.emoticons[emoticon] = self.map.colons[self.emoticons_data[i]];
            a.push(self.escape_rx(emoticon));
          }
          self.rx_emoticons = new RegExp("(^|\\s)(" + a.join("|") + ")(?=$|[\\s|\\?\\.,!])", "g");
        };
        emoji.prototype.init_colons = function() {
          var self = this;
          if (self.inits.colons) return;
          self.inits.colons = 1;
          self.rx_colons = new RegExp(":[a-zA-Z0-9-_+]+:(:skin-tone-[2-6]:)?", "g");
          self.map.colons = {};
          for (var i in self.data) {
            for (var j = 0; j < self.data[i][3].length; j++) {
              self.map.colons[self.data[i][3][j]] = i;
            }
          }
        };
        emoji.prototype.init_unified = function() {
          var self = this;
          if (self.inits.unified) return;
          self.inits.unified = 1;
          var a = [];
          self.map.unified = {};
          self.map.unified_vars = {};
          for (var i in self.data) {
            for (var j = 0; j < self.data[i][0].length; j++) {
              a.push(self.data[i][0][j].replace("*", "\\*"));
              self.map.unified[self.data[i][0][j]] = i;
            }
          }
          for (var i in self.variations_data) {
            if (self.variations_data[i]["1f3fb"][0] == i + "-1f3fb") continue;
            for (var k in self.variations_data[i]) {
              for (var j = 0; j < self.variations_data[i][k][4].length; j++) {
                a.push(self.variations_data[i][k][4][j].replace("*", "\\*"));
                self.map.unified_vars[self.variations_data[i][k][4][j]] = [i, k];
              }
            }
          }
          a = a.sort(function(a2, b) {
            return b.length - a2.length;
          });
          self.rx_unified = new RegExp("(" + a.join("|") + ")(\uD83C[\uDFFB-\uDFFF])?", "g");
        };
        emoji.prototype.init_env = function() {
          var self = this;
          if (self.inits.env) return;
          self.inits.env = 1;
          self.replace_mode = "img";
          self.supports_css = false;
          if (typeof navigator !== "undefined") {
            var ua = navigator.userAgent;
            if (window.getComputedStyle) {
              try {
                var st = window.getComputedStyle(document.body);
                if (st["background-size"] || st["backgroundSize"]) {
                  self.supports_css = true;
                }
              } catch (e) {
                if (ua.match(/Firefox/i)) {
                  self.supports_css = true;
                }
              }
            }
            if (ua.match(/(iPhone|iPod|iPad|iPhone\s+Simulator)/i)) {
              if (ua.match(/OS\s+[12345]/i)) {
                self.replace_mode = "softbank";
                return;
              }
              if (ua.match(/OS\s+[6789]/i)) {
                self.replace_mode = "unified";
                return;
              }
            }
            if (ua.match(/Mac OS X 10[._ ](?:[789]|1\d)/i)) {
              self.replace_mode = "unified";
              return;
            }
            if (!self.avoid_ms_emoji) {
              if (ua.match(/Windows NT 6.[1-9]/i) || ua.match(/Windows NT 10.[0-9]/i)) {
                if (!ua.match(/Chrome/i) && !ua.match(/MSIE 8/i)) {
                  self.replace_mode = "unified";
                  return;
                }
              }
            }
          }
          if (false) {
            self.replace_mode = "google";
            return;
          }
          if (self.supports_css) {
            self.replace_mode = "css";
          }
        };
        emoji.prototype.escape_rx = function(text) {
          return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
        };
        emoji.prototype.sheet_size = 49;
        emoji.prototype.data = {
          "00a9": [["\xA9\uFE0F", "\xA9"], "\uE24E", "\u{FEB29}", ["copyright"], 0, 0, 11, 0],
          "00ae": [["\xAE\uFE0F", "\xAE"], "\uE24F", "\u{FEB2D}", ["registered"], 0, 1, 11, 0],
          "203c": [["\u203C\uFE0F", "\u203C"], "", "\u{FEB06}", ["bangbang"], 0, 2, 63, 0],
          "2049": [["\u2049\uFE0F", "\u2049"], "", "\u{FEB05}", ["interrobang"], 0, 3, 63, 0],
          "2122": [["\u2122\uFE0F", "\u2122"], "\uE537", "\u{FEB2A}", ["tm"], 0, 4, 63, 0],
          "2139": [["\u2139\uFE0F", "\u2139"], "", "\u{FEB47}", ["information_source"], 0, 5, 63, 0],
          "2194": [["\u2194\uFE0F", "\u2194"], "", "\u{FEAF6}", ["left_right_arrow"], 0, 6, 63, 0],
          "2195": [["\u2195\uFE0F", "\u2195"], "", "\u{FEAF7}", ["arrow_up_down"], 0, 7, 63, 0],
          "2196": [["\u2196\uFE0F", "\u2196"], "\uE237", "\u{FEAF2}", ["arrow_upper_left"], 0, 8, 63, 0],
          "2197": [["\u2197\uFE0F", "\u2197"], "\uE236", "\u{FEAF0}", ["arrow_upper_right"], 0, 9, 63, 0],
          "2198": [["\u2198\uFE0F", "\u2198"], "\uE238", "\u{FEAF1}", ["arrow_lower_right"], 0, 10, 63, 0],
          "2199": [["\u2199\uFE0F", "\u2199"], "\uE239", "\u{FEAF3}", ["arrow_lower_left"], 0, 11, 63, 0],
          "21a9": [["\u21A9\uFE0F", "\u21A9"], "", "\u{FEB83}", ["leftwards_arrow_with_hook"], 0, 12, 63, 0],
          "21aa": [["\u21AA\uFE0F", "\u21AA"], "", "\u{FEB88}", ["arrow_right_hook"], 0, 13, 63, 0],
          "231a": [["\u231A\uFE0F", "\u231A"], "", "\u{FE01D}", ["watch"], 0, 14, 63, 0],
          "231b": [["\u231B\uFE0F", "\u231B"], "", "\u{FE01C}", ["hourglass"], 0, 15, 63, 0],
          "2328": [["\u2328\uFE0F", "\u2328"], "", "", ["keyboard"], 0, 16, 31, 0],
          "23cf": [["\u23CF"], "", "", ["eject"], 0, 17, 30, 0],
          "23e9": [["\u23E9"], "\uE23C", "\u{FEAFE}", ["fast_forward"], 0, 18, 63, 0],
          "23ea": [["\u23EA"], "\uE23D", "\u{FEAFF}", ["rewind"], 0, 19, 63, 0],
          "23eb": [["\u23EB"], "", "\u{FEB03}", ["arrow_double_up"], 0, 20, 63, 0],
          "23ec": [["\u23EC"], "", "\u{FEB02}", ["arrow_double_down"], 0, 21, 63, 0],
          "23ed": [["\u23ED"], "", "", ["black_right_pointing_double_triangle_with_vertical_bar"], 0, 22, 31, 0],
          "23ee": [["\u23EE"], "", "", ["black_left_pointing_double_triangle_with_vertical_bar"], 0, 23, 31, 0],
          "23ef": [["\u23EF"], "", "", ["black_right_pointing_triangle_with_double_vertical_bar"], 0, 24, 31, 0],
          "23f0": [["\u23F0"], "\uE02D", "\u{FE02A}", ["alarm_clock"], 0, 25, 63, 0],
          "23f1": [["\u23F1"], "", "", ["stopwatch"], 0, 26, 31, 0],
          "23f2": [["\u23F2"], "", "", ["timer_clock"], 0, 27, 31, 0],
          "23f3": [["\u23F3"], "", "\u{FE01B}", ["hourglass_flowing_sand"], 0, 28, 63, 0],
          "23f8": [["\u23F8"], "", "", ["double_vertical_bar"], 0, 29, 31, 0],
          "23f9": [["\u23F9"], "", "", ["black_square_for_stop"], 0, 30, 31, 0],
          "23fa": [["\u23FA"], "", "", ["black_circle_for_record"], 0, 31, 31, 0],
          "24c2": [["\u24C2\uFE0F", "\u24C2"], "\uE434", "\u{FE7E1}", ["m"], 0, 32, 63, 0],
          "25aa": [["\u25AA\uFE0F", "\u25AA"], "\uE21A", "\u{FEB6E}", ["black_small_square"], 0, 33, 63, 0],
          "25ab": [["\u25AB\uFE0F", "\u25AB"], "\uE21B", "\u{FEB6D}", ["white_small_square"], 0, 34, 63, 0],
          "25b6": [["\u25B6\uFE0F", "\u25B6"], "\uE23A", "\u{FEAFC}", ["arrow_forward"], 0, 35, 63, 0],
          "25c0": [["\u25C0\uFE0F", "\u25C0"], "\uE23B", "\u{FEAFD}", ["arrow_backward"], 0, 36, 63, 0],
          "25fb": [["\u25FB\uFE0F", "\u25FB"], "\uE21B", "\u{FEB71}", ["white_medium_square"], 0, 37, 63, 0],
          "25fc": [["\u25FC\uFE0F", "\u25FC"], "\uE21A", "\u{FEB72}", ["black_medium_square"], 0, 38, 63, 0],
          "25fd": [["\u25FD\uFE0F", "\u25FD"], "\uE21B", "\u{FEB6F}", ["white_medium_small_square"], 0, 39, 63, 0],
          "25fe": [["\u25FE\uFE0F", "\u25FE"], "\uE21A", "\u{FEB70}", ["black_medium_small_square"], 0, 40, 63, 0],
          "2600": [["\u2600\uFE0F", "\u2600"], "\uE04A", "\u{FE000}", ["sunny"], 0, 41, 63, 0],
          "2601": [["\u2601\uFE0F", "\u2601"], "\uE049", "\u{FE001}", ["cloud"], 0, 42, 63, 0],
          "2602": [["\u2602\uFE0F", "\u2602"], "", "", ["umbrella"], 0, 43, 31, 0],
          "2603": [["\u2603\uFE0F", "\u2603"], "", "", ["snowman"], 0, 44, 31, 0],
          "2604": [["\u2604\uFE0F", "\u2604"], "", "", ["comet"], 0, 45, 31, 0],
          "260e": [["\u260E\uFE0F", "\u260E"], "\uE009", "\u{FE523}", ["phone", "telephone"], 0, 46, 63, 0],
          "2611": [["\u2611\uFE0F", "\u2611"], "", "\u{FEB8B}", ["ballot_box_with_check"], 0, 47, 63, 0],
          "2614": [["\u2614\uFE0F", "\u2614"], "\uE04B", "\u{FE002}", ["umbrella_with_rain_drops"], 0, 48, 63, 0],
          "2615": [["\u2615\uFE0F", "\u2615"], "\uE045", "\u{FE981}", ["coffee"], 1, 0, 63, 0],
          "2618": [["\u2618\uFE0F", "\u2618"], "", "", ["shamrock"], 1, 1, 31, 0],
          "261d": [["\u261D\uFE0F", "\u261D"], "\uE00F", "\u{FEB98}", ["point_up"], 1, 2, 63, 0],
          "2620": [["\u2620\uFE0F", "\u2620"], "", "", ["skull_and_crossbones"], 1, 8, 31, 0],
          "2622": [["\u2622\uFE0F", "\u2622"], "", "", ["radioactive_sign"], 1, 9, 31, 0],
          "2623": [["\u2623\uFE0F", "\u2623"], "", "", ["biohazard_sign"], 1, 10, 31, 0],
          "2626": [["\u2626\uFE0F", "\u2626"], "", "", ["orthodox_cross"], 1, 11, 31, 0],
          "262a": [["\u262A\uFE0F", "\u262A"], "", "", ["star_and_crescent"], 1, 12, 31, 0],
          "262e": [["\u262E\uFE0F", "\u262E"], "", "", ["peace_symbol"], 1, 13, 31, 0],
          "262f": [["\u262F\uFE0F", "\u262F"], "", "", ["yin_yang"], 1, 14, 31, 0],
          "2638": [["\u2638\uFE0F", "\u2638"], "", "", ["wheel_of_dharma"], 1, 15, 31, 0],
          "2639": [["\u2639\uFE0F", "\u2639"], "", "", ["white_frowning_face"], 1, 16, 31, 0],
          "263a": [["\u263A\uFE0F", "\u263A"], "\uE414", "\u{FE336}", ["relaxed"], 1, 17, 63, 0],
          "2640": [["\u2640"], "", "", ["female_sign"], 1, 18, 22, 0],
          "2642": [["\u2642"], "", "", ["male_sign"], 1, 19, 22, 0],
          "2648": [["\u2648\uFE0F", "\u2648"], "\uE23F", "\u{FE02B}", ["aries"], 1, 20, 63, 0],
          "2649": [["\u2649\uFE0F", "\u2649"], "\uE240", "\u{FE02C}", ["taurus"], 1, 21, 63, 0],
          "264a": [["\u264A\uFE0F", "\u264A"], "\uE241", "\u{FE02D}", ["gemini"], 1, 22, 63, 0],
          "264b": [["\u264B\uFE0F", "\u264B"], "\uE242", "\u{FE02E}", ["cancer"], 1, 23, 63, 0],
          "264c": [["\u264C\uFE0F", "\u264C"], "\uE243", "\u{FE02F}", ["leo"], 1, 24, 63, 0],
          "264d": [["\u264D\uFE0F", "\u264D"], "\uE244", "\u{FE030}", ["virgo"], 1, 25, 63, 0],
          "264e": [["\u264E\uFE0F", "\u264E"], "\uE245", "\u{FE031}", ["libra"], 1, 26, 63, 0],
          "264f": [["\u264F\uFE0F", "\u264F"], "\uE246", "\u{FE032}", ["scorpius"], 1, 27, 63, 0],
          "2650": [["\u2650\uFE0F", "\u2650"], "\uE247", "\u{FE033}", ["sagittarius"], 1, 28, 63, 0],
          "2651": [["\u2651\uFE0F", "\u2651"], "\uE248", "\u{FE034}", ["capricorn"], 1, 29, 63, 0],
          "2652": [["\u2652\uFE0F", "\u2652"], "\uE249", "\u{FE035}", ["aquarius"], 1, 30, 63, 0],
          "2653": [["\u2653\uFE0F", "\u2653"], "\uE24A", "\u{FE036}", ["pisces"], 1, 31, 63, 0],
          "2660": [["\u2660\uFE0F", "\u2660"], "\uE20E", "\u{FEB1B}", ["spades"], 1, 32, 63, 0],
          "2663": [["\u2663\uFE0F", "\u2663"], "\uE20F", "\u{FEB1D}", ["clubs"], 1, 33, 63, 0],
          "2665": [["\u2665\uFE0F", "\u2665"], "\uE20C", "\u{FEB1A}", ["hearts"], 1, 34, 63, 0],
          "2666": [["\u2666\uFE0F", "\u2666"], "\uE20D", "\u{FEB1C}", ["diamonds"], 1, 35, 63, 0],
          "2668": [["\u2668\uFE0F", "\u2668"], "\uE123", "\u{FE7FA}", ["hotsprings"], 1, 36, 63, 0],
          "267b": [["\u267B\uFE0F", "\u267B"], "", "\u{FEB2C}", ["recycle"], 1, 37, 63, 0],
          "267f": [["\u267F\uFE0F", "\u267F"], "\uE20A", "\u{FEB20}", ["wheelchair"], 1, 38, 63, 0],
          "2692": [["\u2692"], "", "", ["hammer_and_pick"], 1, 39, 31, 0],
          "2693": [["\u2693\uFE0F", "\u2693"], "\uE202", "\u{FE4C1}", ["anchor"], 1, 40, 63, 0],
          "2694": [["\u2694\uFE0F", "\u2694"], "", "", ["crossed_swords"], 1, 41, 31, 0],
          "2695": [["\u2695"], "", "", ["staff_of_aesculapius"], 1, 42, 7, 0],
          "2696": [["\u2696\uFE0F", "\u2696"], "", "", ["scales"], 1, 43, 31, 0],
          "2697": [["\u2697\uFE0F", "\u2697"], "", "", ["alembic"], 1, 44, 31, 0],
          "2699": [["\u2699\uFE0F", "\u2699"], "", "", ["gear"], 1, 45, 31, 0],
          "269b": [["\u269B\uFE0F", "\u269B"], "", "", ["atom_symbol"], 1, 46, 31, 0],
          "269c": [["\u269C\uFE0F", "\u269C"], "", "", ["fleur_de_lis"], 1, 47, 31, 0],
          "26a0": [["\u26A0\uFE0F", "\u26A0"], "\uE252", "\u{FEB23}", ["warning"], 1, 48, 63, 0],
          "26a1": [["\u26A1\uFE0F", "\u26A1"], "\uE13D", "\u{FE004}", ["zap"], 2, 0, 63, 0],
          "26aa": [["\u26AA\uFE0F", "\u26AA"], "\uE219", "\u{FEB65}", ["white_circle"], 2, 1, 63, 0],
          "26ab": [["\u26AB\uFE0F", "\u26AB"], "\uE219", "\u{FEB66}", ["black_circle"], 2, 2, 63, 0],
          "26b0": [["\u26B0\uFE0F", "\u26B0"], "", "", ["coffin"], 2, 3, 31, 0],
          "26b1": [["\u26B1\uFE0F", "\u26B1"], "", "", ["funeral_urn"], 2, 4, 31, 0],
          "26bd": [["\u26BD\uFE0F", "\u26BD"], "\uE018", "\u{FE7D4}", ["soccer"], 2, 5, 63, 0],
          "26be": [["\u26BE\uFE0F", "\u26BE"], "\uE016", "\u{FE7D1}", ["baseball"], 2, 6, 63, 0],
          "26c4": [["\u26C4\uFE0F", "\u26C4"], "\uE048", "\u{FE003}", ["snowman_without_snow"], 2, 7, 63, 0],
          "26c5": [["\u26C5\uFE0F", "\u26C5"], "\uE04A\uE049", "\u{FE00F}", ["partly_sunny"], 2, 8, 63, 0],
          "26c8": [["\u26C8"], "", "", ["thunder_cloud_and_rain"], 2, 9, 31, 0],
          "26ce": [["\u26CE"], "\uE24B", "\u{FE037}", ["ophiuchus"], 2, 10, 63, 0],
          "26cf": [["\u26CF"], "", "", ["pick"], 2, 11, 31, 0],
          "26d1": [["\u26D1"], "", "", ["helmet_with_white_cross"], 2, 12, 31, 0],
          "26d3": [["\u26D3"], "", "", ["chains"], 2, 13, 31, 0],
          "26d4": [["\u26D4\uFE0F", "\u26D4"], "\uE137", "\u{FEB26}", ["no_entry"], 2, 14, 63, 0],
          "26e9": [["\u26E9"], "", "", ["shinto_shrine"], 2, 15, 31, 0],
          "26ea": [["\u26EA\uFE0F", "\u26EA"], "\uE037", "\u{FE4BB}", ["church"], 2, 16, 63, 0],
          "26f0": [["\u26F0"], "", "", ["mountain"], 2, 17, 31, 0],
          "26f1": [["\u26F1"], "", "", ["umbrella_on_ground"], 2, 18, 31, 0],
          "26f2": [["\u26F2\uFE0F", "\u26F2"], "\uE121", "\u{FE4BC}", ["fountain"], 2, 19, 63, 0],
          "26f3": [["\u26F3\uFE0F", "\u26F3"], "\uE014", "\u{FE7D2}", ["golf"], 2, 20, 63, 0],
          "26f4": [["\u26F4"], "", "", ["ferry"], 2, 21, 31, 0],
          "26f5": [["\u26F5\uFE0F", "\u26F5"], "\uE01C", "\u{FE7EA}", ["boat", "sailboat"], 2, 22, 63, 0],
          "26f7": [["\u26F7"], "", "", ["skier"], 2, 23, 31, 0],
          "26f8": [["\u26F8"], "", "", ["ice_skate"], 2, 24, 31, 0],
          "26fa": [["\u26FA\uFE0F", "\u26FA"], "\uE122", "\u{FE7FB}", ["tent"], 2, 31, 63, 0],
          "26fd": [["\u26FD\uFE0F", "\u26FD"], "\uE03A", "\u{FE7F5}", ["fuelpump"], 2, 32, 63, 0],
          "2702": [["\u2702\uFE0F", "\u2702"], "\uE313", "\u{FE53E}", ["scissors"], 2, 33, 63, 0],
          "2705": [["\u2705"], "", "\u{FEB4A}", ["white_check_mark"], 2, 34, 63, 0],
          "2708": [["\u2708\uFE0F", "\u2708"], "\uE01D", "\u{FE7E9}", ["airplane"], 2, 35, 63, 0],
          "2709": [["\u2709\uFE0F", "\u2709"], "\uE103", "\u{FE529}", ["email", "envelope"], 2, 36, 63, 0],
          "270a": [["\u270A"], "\uE010", "\u{FEB93}", ["fist"], 2, 37, 63, 0],
          "270b": [["\u270B"], "\uE012", "\u{FEB95}", ["hand", "raised_hand"], 2, 43, 63, 0],
          "270c": [["\u270C\uFE0F", "\u270C"], "\uE011", "\u{FEB94}", ["v"], 3, 0, 63, 0],
          "270d": [["\u270D\uFE0F", "\u270D"], "", "", ["writing_hand"], 3, 6, 31, 0],
          "270f": [["\u270F\uFE0F", "\u270F"], "\uE301", "\u{FE539}", ["pencil2"], 3, 12, 63, 0],
          "2712": [["\u2712\uFE0F", "\u2712"], "", "\u{FE536}", ["black_nib"], 3, 13, 63, 0],
          "2714": [["\u2714\uFE0F", "\u2714"], "", "\u{FEB49}", ["heavy_check_mark"], 3, 14, 63, 0],
          "2716": [["\u2716\uFE0F", "\u2716"], "\uE333", "\u{FEB53}", ["heavy_multiplication_x"], 3, 15, 63, 0],
          "271d": [["\u271D\uFE0F", "\u271D"], "", "", ["latin_cross"], 3, 16, 31, 0],
          "2721": [["\u2721\uFE0F", "\u2721"], "", "", ["star_of_david"], 3, 17, 31, 0],
          "2728": [["\u2728"], "\uE32E", "\u{FEB60}", ["sparkles"], 3, 18, 63, 0],
          "2733": [["\u2733\uFE0F", "\u2733"], "\uE206", "\u{FEB62}", ["eight_spoked_asterisk"], 3, 19, 63, 0],
          "2734": [["\u2734\uFE0F", "\u2734"], "\uE205", "\u{FEB61}", ["eight_pointed_black_star"], 3, 20, 63, 0],
          "2744": [["\u2744\uFE0F", "\u2744"], "", "\u{FE00E}", ["snowflake"], 3, 21, 63, 0],
          "2747": [["\u2747\uFE0F", "\u2747"], "\uE32E", "\u{FEB77}", ["sparkle"], 3, 22, 63, 0],
          "274c": [["\u274C"], "\uE333", "\u{FEB45}", ["x"], 3, 23, 63, 0],
          "274e": [["\u274E"], "\uE333", "\u{FEB46}", ["negative_squared_cross_mark"], 3, 24, 63, 0],
          "2753": [["\u2753"], "\uE020", "\u{FEB09}", ["question"], 3, 25, 63, 0],
          "2754": [["\u2754"], "\uE336", "\u{FEB0A}", ["grey_question"], 3, 26, 63, 0],
          "2755": [["\u2755"], "\uE337", "\u{FEB0B}", ["grey_exclamation"], 3, 27, 63, 0],
          "2757": [["\u2757\uFE0F", "\u2757"], "\uE021", "\u{FEB04}", ["exclamation", "heavy_exclamation_mark"], 3, 28, 63, 0],
          "2763": [["\u2763\uFE0F", "\u2763"], "", "", ["heavy_heart_exclamation_mark_ornament"], 3, 29, 31, 0],
          "2764": [["\u2764\uFE0F", "\u2764"], "\uE022", "\u{FEB0C}", ["heart"], 3, 30, 63, 0, "<3"],
          "2795": [["\u2795"], "", "\u{FEB51}", ["heavy_plus_sign"], 3, 31, 63, 0],
          "2796": [["\u2796"], "", "\u{FEB52}", ["heavy_minus_sign"], 3, 32, 63, 0],
          "2797": [["\u2797"], "", "\u{FEB54}", ["heavy_division_sign"], 3, 33, 63, 0],
          "27a1": [["\u27A1\uFE0F", "\u27A1"], "\uE234", "\u{FEAFA}", ["arrow_right"], 3, 34, 63, 0],
          "27b0": [["\u27B0"], "", "\u{FEB08}", ["curly_loop"], 3, 35, 63, 0],
          "27bf": [["\u27BF"], "\uE211", "\u{FE82B}", ["loop"], 3, 36, 63, 0],
          "2934": [["\u2934\uFE0F", "\u2934"], "\uE236", "\u{FEAF4}", ["arrow_heading_up"], 3, 37, 63, 0],
          "2935": [["\u2935\uFE0F", "\u2935"], "\uE238", "\u{FEAF5}", ["arrow_heading_down"], 3, 38, 63, 0],
          "2b05": [["\u2B05\uFE0F", "\u2B05"], "\uE235", "\u{FEAFB}", ["arrow_left"], 3, 39, 63, 0],
          "2b06": [["\u2B06\uFE0F", "\u2B06"], "\uE232", "\u{FEAF8}", ["arrow_up"], 3, 40, 63, 0],
          "2b07": [["\u2B07\uFE0F", "\u2B07"], "\uE233", "\u{FEAF9}", ["arrow_down"], 3, 41, 63, 0],
          "2b1b": [["\u2B1B\uFE0F", "\u2B1B"], "\uE21A", "\u{FEB6C}", ["black_large_square"], 3, 42, 63, 0],
          "2b1c": [["\u2B1C\uFE0F", "\u2B1C"], "\uE21B", "\u{FEB6B}", ["white_large_square"], 3, 43, 63, 0],
          "2b50": [["\u2B50\uFE0F", "\u2B50"], "\uE32F", "\u{FEB68}", ["star"], 3, 44, 63, 0],
          "2b55": [["\u2B55\uFE0F", "\u2B55"], "\uE332", "\u{FEB44}", ["o"], 3, 45, 63, 0],
          "3030": [["\u3030\uFE0F", "\u3030"], "", "\u{FEB07}", ["wavy_dash"], 3, 46, 63, 0],
          "303d": [["\u303D\uFE0F", "\u303D"], "\uE12C", "\u{FE81B}", ["part_alternation_mark"], 3, 47, 63, 0],
          "3297": [["\u3297\uFE0F", "\u3297"], "\uE30D", "\u{FEB43}", ["congratulations"], 3, 48, 63, 0],
          "3299": [["\u3299\uFE0F", "\u3299"], "\uE315", "\u{FEB2B}", ["secret"], 4, 0, 63, 0],
          "1f004": [["\u{1F004}\uFE0F", "\u{1F004}"], "\uE12D", "\u{FE80B}", ["mahjong"], 4, 1, 63, 0],
          "1f0cf": [["\u{1F0CF}"], "", "\u{FE812}", ["black_joker"], 4, 2, 63, 0],
          "1f170": [["\u{1F170}\uFE0F", "\u{1F170}"], "\uE532", "\u{FE50B}", ["a"], 4, 3, 63, 0],
          "1f171": [["\u{1F171}\uFE0F", "\u{1F171}"], "\uE533", "\u{FE50C}", ["b"], 4, 4, 63, 0],
          "1f17e": [["\u{1F17E}\uFE0F", "\u{1F17E}"], "\uE535", "\u{FE50E}", ["o2"], 4, 5, 63, 0],
          "1f17f": [["\u{1F17F}\uFE0F", "\u{1F17F}"], "\uE14F", "\u{FE7F6}", ["parking"], 4, 6, 63, 0],
          "1f18e": [["\u{1F18E}"], "\uE534", "\u{FE50D}", ["ab"], 4, 7, 63, 0],
          "1f191": [["\u{1F191}"], "", "\u{FEB84}", ["cl"], 4, 8, 63, 0],
          "1f192": [["\u{1F192}"], "\uE214", "\u{FEB38}", ["cool"], 4, 9, 63, 0],
          "1f193": [["\u{1F193}"], "", "\u{FEB21}", ["free"], 4, 10, 63, 0],
          "1f194": [["\u{1F194}"], "\uE229", "\u{FEB81}", ["id"], 4, 11, 63, 0],
          "1f195": [["\u{1F195}"], "\uE212", "\u{FEB36}", ["new"], 4, 12, 63, 0],
          "1f196": [["\u{1F196}"], "", "\u{FEB28}", ["ng"], 4, 13, 63, 0],
          "1f197": [["\u{1F197}"], "\uE24D", "\u{FEB27}", ["ok"], 4, 14, 63, 0],
          "1f198": [["\u{1F198}"], "", "\u{FEB4F}", ["sos"], 4, 15, 63, 0],
          "1f199": [["\u{1F199}"], "\uE213", "\u{FEB37}", ["up"], 4, 16, 63, 0],
          "1f19a": [["\u{1F19A}"], "\uE12E", "\u{FEB32}", ["vs"], 4, 17, 63, 0],
          "1f201": [["\u{1F201}"], "\uE203", "\u{FEB24}", ["koko"], 4, 18, 63, 0],
          "1f202": [["\u{1F202}\uFE0F", "\u{1F202}"], "\uE228", "\u{FEB3F}", ["sa"], 4, 19, 63, 0],
          "1f21a": [["\u{1F21A}\uFE0F", "\u{1F21A}"], "\uE216", "\u{FEB3A}", ["u7121"], 4, 20, 63, 0],
          "1f22f": [["\u{1F22F}\uFE0F", "\u{1F22F}"], "\uE22C", "\u{FEB40}", ["u6307"], 4, 21, 63, 0],
          "1f232": [["\u{1F232}"], "", "\u{FEB2E}", ["u7981"], 4, 22, 63, 0],
          "1f233": [["\u{1F233}"], "\uE22B", "\u{FEB2F}", ["u7a7a"], 4, 23, 63, 0],
          "1f234": [["\u{1F234}"], "", "\u{FEB30}", ["u5408"], 4, 24, 63, 0],
          "1f235": [["\u{1F235}"], "\uE22A", "\u{FEB31}", ["u6e80"], 4, 25, 63, 0],
          "1f236": [["\u{1F236}"], "\uE215", "\u{FEB39}", ["u6709"], 4, 26, 63, 0],
          "1f237": [["\u{1F237}\uFE0F", "\u{1F237}"], "\uE217", "\u{FEB3B}", ["u6708"], 4, 27, 63, 0],
          "1f238": [["\u{1F238}"], "\uE218", "\u{FEB3C}", ["u7533"], 4, 28, 63, 0],
          "1f239": [["\u{1F239}"], "\uE227", "\u{FEB3E}", ["u5272"], 4, 29, 63, 0],
          "1f23a": [["\u{1F23A}"], "\uE22D", "\u{FEB41}", ["u55b6"], 4, 30, 63, 0],
          "1f250": [["\u{1F250}"], "\uE226", "\u{FEB3D}", ["ideograph_advantage"], 4, 31, 63, 0],
          "1f251": [["\u{1F251}"], "", "\u{FEB50}", ["accept"], 4, 32, 63, 0],
          "1f300": [["\u{1F300}"], "\uE443", "\u{FE005}", ["cyclone"], 4, 33, 63, 0],
          "1f301": [["\u{1F301}"], "", "\u{FE006}", ["foggy"], 4, 34, 63, 0],
          "1f302": [["\u{1F302}"], "\uE43C", "\u{FE007}", ["closed_umbrella"], 4, 35, 63, 0],
          "1f303": [["\u{1F303}"], "\uE44B", "\u{FE008}", ["night_with_stars"], 4, 36, 63, 0],
          "1f304": [["\u{1F304}"], "\uE04D", "\u{FE009}", ["sunrise_over_mountains"], 4, 37, 63, 0],
          "1f305": [["\u{1F305}"], "\uE449", "\u{FE00A}", ["sunrise"], 4, 38, 63, 0],
          "1f306": [["\u{1F306}"], "\uE146", "\u{FE00B}", ["city_sunset"], 4, 39, 63, 0],
          "1f307": [["\u{1F307}"], "\uE44A", "\u{FE00C}", ["city_sunrise"], 4, 40, 63, 0],
          "1f308": [["\u{1F308}"], "\uE44C", "\u{FE00D}", ["rainbow"], 4, 41, 63, 0],
          "1f309": [["\u{1F309}"], "\uE44B", "\u{FE010}", ["bridge_at_night"], 4, 42, 63, 0],
          "1f30a": [["\u{1F30A}"], "\uE43E", "\u{FE038}", ["ocean"], 4, 43, 63, 0],
          "1f30b": [["\u{1F30B}"], "", "\u{FE03A}", ["volcano"], 4, 44, 63, 0],
          "1f30c": [["\u{1F30C}"], "\uE44B", "\u{FE03B}", ["milky_way"], 4, 45, 63, 0],
          "1f30d": [["\u{1F30D}"], "", "", ["earth_africa"], 4, 46, 63, 0],
          "1f30e": [["\u{1F30E}"], "", "", ["earth_americas"], 4, 47, 63, 0],
          "1f30f": [["\u{1F30F}"], "", "\u{FE039}", ["earth_asia"], 4, 48, 63, 0],
          "1f310": [["\u{1F310}"], "", "", ["globe_with_meridians"], 5, 0, 63, 0],
          "1f311": [["\u{1F311}"], "", "\u{FE011}", ["new_moon"], 5, 1, 63, 0],
          "1f312": [["\u{1F312}"], "", "", ["waxing_crescent_moon"], 5, 2, 63, 0],
          "1f313": [["\u{1F313}"], "\uE04C", "\u{FE013}", ["first_quarter_moon"], 5, 3, 63, 0],
          "1f314": [["\u{1F314}"], "\uE04C", "\u{FE012}", ["moon", "waxing_gibbous_moon"], 5, 4, 63, 0],
          "1f315": [["\u{1F315}"], "", "\u{FE015}", ["full_moon"], 5, 5, 63, 0],
          "1f316": [["\u{1F316}"], "", "", ["waning_gibbous_moon"], 5, 6, 63, 0],
          "1f317": [["\u{1F317}"], "", "", ["last_quarter_moon"], 5, 7, 63, 0],
          "1f318": [["\u{1F318}"], "", "", ["waning_crescent_moon"], 5, 8, 63, 0],
          "1f319": [["\u{1F319}"], "\uE04C", "\u{FE014}", ["crescent_moon"], 5, 9, 63, 0],
          "1f31a": [["\u{1F31A}"], "", "", ["new_moon_with_face"], 5, 10, 63, 0],
          "1f31b": [["\u{1F31B}"], "\uE04C", "\u{FE016}", ["first_quarter_moon_with_face"], 5, 11, 63, 0],
          "1f31c": [["\u{1F31C}"], "", "", ["last_quarter_moon_with_face"], 5, 12, 63, 0],
          "1f31d": [["\u{1F31D}"], "", "", ["full_moon_with_face"], 5, 13, 63, 0],
          "1f31e": [["\u{1F31E}"], "", "", ["sun_with_face"], 5, 14, 63, 0],
          "1f31f": [["\u{1F31F}"], "\uE335", "\u{FEB69}", ["star2"], 5, 15, 63, 0],
          "1f320": [["\u{1F320}"], "", "\u{FEB6A}", ["stars"], 5, 16, 63, 0],
          "1f321": [["\u{1F321}"], "", "", ["thermometer"], 5, 17, 31, 0],
          "1f324": [["\u{1F324}"], "", "", ["mostly_sunny", "sun_small_cloud"], 5, 18, 31, 0],
          "1f325": [["\u{1F325}"], "", "", ["barely_sunny", "sun_behind_cloud"], 5, 19, 31, 0],
          "1f326": [["\u{1F326}"], "", "", ["partly_sunny_rain", "sun_behind_rain_cloud"], 5, 20, 31, 0],
          "1f327": [["\u{1F327}"], "", "", ["rain_cloud"], 5, 21, 31, 0],
          "1f328": [["\u{1F328}"], "", "", ["snow_cloud"], 5, 22, 31, 0],
          "1f329": [["\u{1F329}"], "", "", ["lightning", "lightning_cloud"], 5, 23, 31, 0],
          "1f32a": [["\u{1F32A}"], "", "", ["tornado", "tornado_cloud"], 5, 24, 31, 0],
          "1f32b": [["\u{1F32B}"], "", "", ["fog"], 5, 25, 31, 0],
          "1f32c": [["\u{1F32C}"], "", "", ["wind_blowing_face"], 5, 26, 31, 0],
          "1f32d": [["\u{1F32D}"], "", "", ["hotdog"], 5, 27, 31, 0],
          "1f32e": [["\u{1F32E}"], "", "", ["taco"], 5, 28, 31, 0],
          "1f32f": [["\u{1F32F}"], "", "", ["burrito"], 5, 29, 31, 0],
          "1f330": [["\u{1F330}"], "", "\u{FE04C}", ["chestnut"], 5, 30, 63, 0],
          "1f331": [["\u{1F331}"], "\uE110", "\u{FE03E}", ["seedling"], 5, 31, 63, 0],
          "1f332": [["\u{1F332}"], "", "", ["evergreen_tree"], 5, 32, 63, 0],
          "1f333": [["\u{1F333}"], "", "", ["deciduous_tree"], 5, 33, 63, 0],
          "1f334": [["\u{1F334}"], "\uE307", "\u{FE047}", ["palm_tree"], 5, 34, 63, 0],
          "1f335": [["\u{1F335}"], "\uE308", "\u{FE048}", ["cactus"], 5, 35, 63, 0],
          "1f336": [["\u{1F336}"], "", "", ["hot_pepper"], 5, 36, 31, 0],
          "1f337": [["\u{1F337}"], "\uE304", "\u{FE03D}", ["tulip"], 5, 37, 63, 0],
          "1f338": [["\u{1F338}"], "\uE030", "\u{FE040}", ["cherry_blossom"], 5, 38, 63, 0],
          "1f339": [["\u{1F339}"], "\uE032", "\u{FE041}", ["rose"], 5, 39, 63, 0],
          "1f33a": [["\u{1F33A}"], "\uE303", "\u{FE045}", ["hibiscus"], 5, 40, 63, 0],
          "1f33b": [["\u{1F33B}"], "\uE305", "\u{FE046}", ["sunflower"], 5, 41, 63, 0],
          "1f33c": [["\u{1F33C}"], "\uE305", "\u{FE04D}", ["blossom"], 5, 42, 63, 0],
          "1f33d": [["\u{1F33D}"], "", "\u{FE04A}", ["corn"], 5, 43, 63, 0],
          "1f33e": [["\u{1F33E}"], "\uE444", "\u{FE049}", ["ear_of_rice"], 5, 44, 63, 0],
          "1f33f": [["\u{1F33F}"], "\uE110", "\u{FE04E}", ["herb"], 5, 45, 63, 0],
          "1f340": [["\u{1F340}"], "\uE110", "\u{FE03C}", ["four_leaf_clover"], 5, 46, 63, 0],
          "1f341": [["\u{1F341}"], "\uE118", "\u{FE03F}", ["maple_leaf"], 5, 47, 63, 0],
          "1f342": [["\u{1F342}"], "\uE119", "\u{FE042}", ["fallen_leaf"], 5, 48, 63, 0],
          "1f343": [["\u{1F343}"], "\uE447", "\u{FE043}", ["leaves"], 6, 0, 63, 0],
          "1f344": [["\u{1F344}"], "", "\u{FE04B}", ["mushroom"], 6, 1, 63, 0],
          "1f345": [["\u{1F345}"], "\uE349", "\u{FE055}", ["tomato"], 6, 2, 63, 0],
          "1f346": [["\u{1F346}"], "\uE34A", "\u{FE056}", ["eggplant"], 6, 3, 63, 0],
          "1f347": [["\u{1F347}"], "", "\u{FE059}", ["grapes"], 6, 4, 63, 0],
          "1f348": [["\u{1F348}"], "", "\u{FE057}", ["melon"], 6, 5, 63, 0],
          "1f349": [["\u{1F349}"], "\uE348", "\u{FE054}", ["watermelon"], 6, 6, 63, 0],
          "1f34a": [["\u{1F34A}"], "\uE346", "\u{FE052}", ["tangerine"], 6, 7, 63, 0],
          "1f34b": [["\u{1F34B}"], "", "", ["lemon"], 6, 8, 63, 0],
          "1f34c": [["\u{1F34C}"], "", "\u{FE050}", ["banana"], 6, 9, 63, 0],
          "1f34d": [["\u{1F34D}"], "", "\u{FE058}", ["pineapple"], 6, 10, 63, 0],
          "1f34e": [["\u{1F34E}"], "\uE345", "\u{FE051}", ["apple"], 6, 11, 63, 0],
          "1f34f": [["\u{1F34F}"], "\uE345", "\u{FE05B}", ["green_apple"], 6, 12, 63, 0],
          "1f350": [["\u{1F350}"], "", "", ["pear"], 6, 13, 63, 0],
          "1f351": [["\u{1F351}"], "", "\u{FE05A}", ["peach"], 6, 14, 63, 0],
          "1f352": [["\u{1F352}"], "", "\u{FE04F}", ["cherries"], 6, 15, 63, 0],
          "1f353": [["\u{1F353}"], "\uE347", "\u{FE053}", ["strawberry"], 6, 16, 63, 0],
          "1f354": [["\u{1F354}"], "\uE120", "\u{FE960}", ["hamburger"], 6, 17, 63, 0],
          "1f355": [["\u{1F355}"], "", "\u{FE975}", ["pizza"], 6, 18, 63, 0],
          "1f356": [["\u{1F356}"], "", "\u{FE972}", ["meat_on_bone"], 6, 19, 63, 0],
          "1f357": [["\u{1F357}"], "", "\u{FE976}", ["poultry_leg"], 6, 20, 63, 0],
          "1f358": [["\u{1F358}"], "\uE33D", "\u{FE969}", ["rice_cracker"], 6, 21, 63, 0],
          "1f359": [["\u{1F359}"], "\uE342", "\u{FE961}", ["rice_ball"], 6, 22, 63, 0],
          "1f35a": [["\u{1F35A}"], "\uE33E", "\u{FE96A}", ["rice"], 6, 23, 63, 0],
          "1f35b": [["\u{1F35B}"], "\uE341", "\u{FE96C}", ["curry"], 6, 24, 63, 0],
          "1f35c": [["\u{1F35C}"], "\uE340", "\u{FE963}", ["ramen"], 6, 25, 63, 0],
          "1f35d": [["\u{1F35D}"], "\uE33F", "\u{FE96B}", ["spaghetti"], 6, 26, 63, 0],
          "1f35e": [["\u{1F35E}"], "\uE339", "\u{FE964}", ["bread"], 6, 27, 63, 0],
          "1f35f": [["\u{1F35F}"], "\uE33B", "\u{FE967}", ["fries"], 6, 28, 63, 0],
          "1f360": [["\u{1F360}"], "", "\u{FE974}", ["sweet_potato"], 6, 29, 63, 0],
          "1f361": [["\u{1F361}"], "\uE33C", "\u{FE968}", ["dango"], 6, 30, 63, 0],
          "1f362": [["\u{1F362}"], "\uE343", "\u{FE96D}", ["oden"], 6, 31, 63, 0],
          "1f363": [["\u{1F363}"], "\uE344", "\u{FE96E}", ["sushi"], 6, 32, 63, 0],
          "1f364": [["\u{1F364}"], "", "\u{FE97F}", ["fried_shrimp"], 6, 33, 63, 0],
          "1f365": [["\u{1F365}"], "", "\u{FE973}", ["fish_cake"], 6, 34, 63, 0],
          "1f366": [["\u{1F366}"], "\uE33A", "\u{FE966}", ["icecream"], 6, 35, 63, 0],
          "1f367": [["\u{1F367}"], "\uE43F", "\u{FE971}", ["shaved_ice"], 6, 36, 63, 0],
          "1f368": [["\u{1F368}"], "", "\u{FE977}", ["ice_cream"], 6, 37, 63, 0],
          "1f369": [["\u{1F369}"], "", "\u{FE978}", ["doughnut"], 6, 38, 63, 0],
          "1f36a": [["\u{1F36A}"], "", "\u{FE979}", ["cookie"], 6, 39, 63, 0],
          "1f36b": [["\u{1F36B}"], "", "\u{FE97A}", ["chocolate_bar"], 6, 40, 63, 0],
          "1f36c": [["\u{1F36C}"], "", "\u{FE97B}", ["candy"], 6, 41, 63, 0],
          "1f36d": [["\u{1F36D}"], "", "\u{FE97C}", ["lollipop"], 6, 42, 63, 0],
          "1f36e": [["\u{1F36E}"], "", "\u{FE97D}", ["custard"], 6, 43, 63, 0],
          "1f36f": [["\u{1F36F}"], "", "\u{FE97E}", ["honey_pot"], 6, 44, 63, 0],
          "1f370": [["\u{1F370}"], "\uE046", "\u{FE962}", ["cake"], 6, 45, 63, 0],
          "1f371": [["\u{1F371}"], "\uE34C", "\u{FE96F}", ["bento"], 6, 46, 63, 0],
          "1f372": [["\u{1F372}"], "\uE34D", "\u{FE970}", ["stew"], 6, 47, 63, 0],
          "1f373": [["\u{1F373}"], "\uE147", "\u{FE965}", ["fried_egg", "cooking"], 6, 48, 63, 0],
          "1f374": [["\u{1F374}"], "\uE043", "\u{FE980}", ["fork_and_knife"], 7, 0, 63, 0],
          "1f375": [["\u{1F375}"], "\uE338", "\u{FE984}", ["tea"], 7, 1, 63, 0],
          "1f376": [["\u{1F376}"], "\uE30B", "\u{FE985}", ["sake"], 7, 2, 63, 0],
          "1f377": [["\u{1F377}"], "\uE044", "\u{FE986}", ["wine_glass"], 7, 3, 63, 0],
          "1f378": [["\u{1F378}"], "\uE044", "\u{FE982}", ["cocktail"], 7, 4, 63, 0],
          "1f379": [["\u{1F379}"], "\uE044", "\u{FE988}", ["tropical_drink"], 7, 5, 63, 0],
          "1f37a": [["\u{1F37A}"], "\uE047", "\u{FE983}", ["beer"], 7, 6, 63, 0],
          "1f37b": [["\u{1F37B}"], "\uE30C", "\u{FE987}", ["beers"], 7, 7, 63, 0],
          "1f37c": [["\u{1F37C}"], "", "", ["baby_bottle"], 7, 8, 63, 0],
          "1f37d": [["\u{1F37D}"], "", "", ["knife_fork_plate"], 7, 9, 31, 0],
          "1f37e": [["\u{1F37E}"], "", "", ["champagne"], 7, 10, 31, 0],
          "1f37f": [["\u{1F37F}"], "", "", ["popcorn"], 7, 11, 31, 0],
          "1f380": [["\u{1F380}"], "\uE314", "\u{FE50F}", ["ribbon"], 7, 12, 63, 0],
          "1f381": [["\u{1F381}"], "\uE112", "\u{FE510}", ["gift"], 7, 13, 63, 0],
          "1f382": [["\u{1F382}"], "\uE34B", "\u{FE511}", ["birthday"], 7, 14, 63, 0],
          "1f383": [["\u{1F383}"], "\uE445", "\u{FE51F}", ["jack_o_lantern"], 7, 15, 63, 0],
          "1f384": [["\u{1F384}"], "\uE033", "\u{FE512}", ["christmas_tree"], 7, 16, 63, 0],
          "1f385": [["\u{1F385}"], "\uE448", "\u{FE513}", ["santa"], 7, 17, 63, 0],
          "1f386": [["\u{1F386}"], "\uE117", "\u{FE515}", ["fireworks"], 7, 23, 63, 0],
          "1f387": [["\u{1F387}"], "\uE440", "\u{FE51D}", ["sparkler"], 7, 24, 63, 0],
          "1f388": [["\u{1F388}"], "\uE310", "\u{FE516}", ["balloon"], 7, 25, 63, 0],
          "1f389": [["\u{1F389}"], "\uE312", "\u{FE517}", ["tada"], 7, 26, 63, 0],
          "1f38a": [["\u{1F38A}"], "", "\u{FE520}", ["confetti_ball"], 7, 27, 63, 0],
          "1f38b": [["\u{1F38B}"], "", "\u{FE521}", ["tanabata_tree"], 7, 28, 63, 0],
          "1f38c": [["\u{1F38C}"], "\uE143", "\u{FE514}", ["crossed_flags"], 7, 29, 63, 0],
          "1f38d": [["\u{1F38D}"], "\uE436", "\u{FE518}", ["bamboo"], 7, 30, 63, 0],
          "1f38e": [["\u{1F38E}"], "\uE438", "\u{FE519}", ["dolls"], 7, 31, 63, 0],
          "1f38f": [["\u{1F38F}"], "\uE43B", "\u{FE51C}", ["flags"], 7, 32, 63, 0],
          "1f390": [["\u{1F390}"], "\uE442", "\u{FE51E}", ["wind_chime"], 7, 33, 63, 0],
          "1f391": [["\u{1F391}"], "\uE446", "\u{FE017}", ["rice_scene"], 7, 34, 63, 0],
          "1f392": [["\u{1F392}"], "\uE43A", "\u{FE51B}", ["school_satchel"], 7, 35, 63, 0],
          "1f393": [["\u{1F393}"], "\uE439", "\u{FE51A}", ["mortar_board"], 7, 36, 63, 0],
          "1f396": [["\u{1F396}"], "", "", ["medal"], 7, 37, 31, 0],
          "1f397": [["\u{1F397}"], "", "", ["reminder_ribbon"], 7, 38, 31, 0],
          "1f399": [["\u{1F399}"], "", "", ["studio_microphone"], 7, 39, 31, 0],
          "1f39a": [["\u{1F39A}"], "", "", ["level_slider"], 7, 40, 31, 0],
          "1f39b": [["\u{1F39B}"], "", "", ["control_knobs"], 7, 41, 31, 0],
          "1f39e": [["\u{1F39E}"], "", "", ["film_frames"], 7, 42, 31, 0],
          "1f39f": [["\u{1F39F}"], "", "", ["admission_tickets"], 7, 43, 31, 0],
          "1f3a0": [["\u{1F3A0}"], "", "\u{FE7FC}", ["carousel_horse"], 7, 44, 63, 0],
          "1f3a1": [["\u{1F3A1}"], "\uE124", "\u{FE7FD}", ["ferris_wheel"], 7, 45, 63, 0],
          "1f3a2": [["\u{1F3A2}"], "\uE433", "\u{FE7FE}", ["roller_coaster"], 7, 46, 63, 0],
          "1f3a3": [["\u{1F3A3}"], "\uE019", "\u{FE7FF}", ["fishing_pole_and_fish"], 7, 47, 63, 0],
          "1f3a4": [["\u{1F3A4}"], "\uE03C", "\u{FE800}", ["microphone"], 7, 48, 63, 0],
          "1f3a5": [["\u{1F3A5}"], "\uE03D", "\u{FE801}", ["movie_camera"], 8, 0, 63, 0],
          "1f3a6": [["\u{1F3A6}"], "\uE507", "\u{FE802}", ["cinema"], 8, 1, 63, 0],
          "1f3a7": [["\u{1F3A7}"], "\uE30A", "\u{FE803}", ["headphones"], 8, 2, 63, 0],
          "1f3a8": [["\u{1F3A8}"], "\uE502", "\u{FE804}", ["art"], 8, 3, 63, 0],
          "1f3a9": [["\u{1F3A9}"], "\uE503", "\u{FE805}", ["tophat"], 8, 4, 63, 0],
          "1f3aa": [["\u{1F3AA}"], "", "\u{FE806}", ["circus_tent"], 8, 5, 63, 0],
          "1f3ab": [["\u{1F3AB}"], "\uE125", "\u{FE807}", ["ticket"], 8, 6, 63, 0],
          "1f3ac": [["\u{1F3AC}"], "\uE324", "\u{FE808}", ["clapper"], 8, 7, 63, 0],
          "1f3ad": [["\u{1F3AD}"], "\uE503", "\u{FE809}", ["performing_arts"], 8, 8, 63, 0],
          "1f3ae": [["\u{1F3AE}"], "", "\u{FE80A}", ["video_game"], 8, 9, 63, 0],
          "1f3af": [["\u{1F3AF}"], "\uE130", "\u{FE80C}", ["dart"], 8, 10, 63, 0],
          "1f3b0": [["\u{1F3B0}"], "\uE133", "\u{FE80D}", ["slot_machine"], 8, 11, 63, 0],
          "1f3b1": [["\u{1F3B1}"], "\uE42C", "\u{FE80E}", ["8ball"], 8, 12, 63, 0],
          "1f3b2": [["\u{1F3B2}"], "", "\u{FE80F}", ["game_die"], 8, 13, 63, 0],
          "1f3b3": [["\u{1F3B3}"], "", "\u{FE810}", ["bowling"], 8, 14, 63, 0],
          "1f3b4": [["\u{1F3B4}"], "", "\u{FE811}", ["flower_playing_cards"], 8, 15, 63, 0],
          "1f3b5": [["\u{1F3B5}"], "\uE03E", "\u{FE813}", ["musical_note"], 8, 16, 63, 0],
          "1f3b6": [["\u{1F3B6}"], "\uE326", "\u{FE814}", ["notes"], 8, 17, 63, 0],
          "1f3b7": [["\u{1F3B7}"], "\uE040", "\u{FE815}", ["saxophone"], 8, 18, 63, 0],
          "1f3b8": [["\u{1F3B8}"], "\uE041", "\u{FE816}", ["guitar"], 8, 19, 63, 0],
          "1f3b9": [["\u{1F3B9}"], "", "\u{FE817}", ["musical_keyboard"], 8, 20, 63, 0],
          "1f3ba": [["\u{1F3BA}"], "\uE042", "\u{FE818}", ["trumpet"], 8, 21, 63, 0],
          "1f3bb": [["\u{1F3BB}"], "", "\u{FE819}", ["violin"], 8, 22, 63, 0],
          "1f3bc": [["\u{1F3BC}"], "\uE326", "\u{FE81A}", ["musical_score"], 8, 23, 63, 0],
          "1f3bd": [["\u{1F3BD}"], "", "\u{FE7D0}", ["running_shirt_with_sash"], 8, 24, 63, 0],
          "1f3be": [["\u{1F3BE}"], "\uE015", "\u{FE7D3}", ["tennis"], 8, 25, 63, 0],
          "1f3bf": [["\u{1F3BF}"], "\uE013", "\u{FE7D5}", ["ski"], 8, 26, 63, 0],
          "1f3c0": [["\u{1F3C0}"], "\uE42A", "\u{FE7D6}", ["basketball"], 8, 27, 63, 0],
          "1f3c1": [["\u{1F3C1}"], "\uE132", "\u{FE7D7}", ["checkered_flag"], 8, 28, 63, 0],
          "1f3c2": [["\u{1F3C2}"], "", "\u{FE7D8}", ["snowboarder"], 8, 29, 63, 0],
          "1f3c5": [["\u{1F3C5}"], "", "", ["sports_medal"], 8, 47, 31, 0],
          "1f3c6": [["\u{1F3C6}"], "\uE131", "\u{FE7DB}", ["trophy"], 8, 48, 63, 0],
          "1f3c7": [["\u{1F3C7}"], "", "", ["horse_racing"], 9, 0, 63, 0],
          "1f3c8": [["\u{1F3C8}"], "\uE42B", "\u{FE7DD}", ["football"], 9, 6, 63, 0],
          "1f3c9": [["\u{1F3C9}"], "", "", ["rugby_football"], 9, 7, 63, 0],
          "1f3cd": [["\u{1F3CD}"], "", "", ["racing_motorcycle"], 9, 26, 31, 0],
          "1f3ce": [["\u{1F3CE}"], "", "", ["racing_car"], 9, 27, 31, 0],
          "1f3cf": [["\u{1F3CF}"], "", "", ["cricket_bat_and_ball"], 9, 28, 31, 0],
          "1f3d0": [["\u{1F3D0}"], "", "", ["volleyball"], 9, 29, 31, 0],
          "1f3d1": [["\u{1F3D1}"], "", "", ["field_hockey_stick_and_ball"], 9, 30, 31, 0],
          "1f3d2": [["\u{1F3D2}"], "", "", ["ice_hockey_stick_and_puck"], 9, 31, 31, 0],
          "1f3d3": [["\u{1F3D3}"], "", "", ["table_tennis_paddle_and_ball"], 9, 32, 31, 0],
          "1f3d4": [["\u{1F3D4}"], "", "", ["snow_capped_mountain"], 9, 33, 31, 0],
          "1f3d5": [["\u{1F3D5}"], "", "", ["camping"], 9, 34, 31, 0],
          "1f3d6": [["\u{1F3D6}"], "", "", ["beach_with_umbrella"], 9, 35, 31, 0],
          "1f3d7": [["\u{1F3D7}"], "", "", ["building_construction"], 9, 36, 31, 0],
          "1f3d8": [["\u{1F3D8}"], "", "", ["house_buildings"], 9, 37, 31, 0],
          "1f3d9": [["\u{1F3D9}"], "", "", ["cityscape"], 9, 38, 31, 0],
          "1f3da": [["\u{1F3DA}"], "", "", ["derelict_house_building"], 9, 39, 31, 0],
          "1f3db": [["\u{1F3DB}"], "", "", ["classical_building"], 9, 40, 31, 0],
          "1f3dc": [["\u{1F3DC}"], "", "", ["desert"], 9, 41, 31, 0],
          "1f3dd": [["\u{1F3DD}"], "", "", ["desert_island"], 9, 42, 31, 0],
          "1f3de": [["\u{1F3DE}"], "", "", ["national_park"], 9, 43, 31, 0],
          "1f3df": [["\u{1F3DF}"], "", "", ["stadium"], 9, 44, 31, 0],
          "1f3e0": [["\u{1F3E0}"], "\uE036", "\u{FE4B0}", ["house"], 9, 45, 63, 0],
          "1f3e1": [["\u{1F3E1}"], "\uE036", "\u{FE4B1}", ["house_with_garden"], 9, 46, 63, 0],
          "1f3e2": [["\u{1F3E2}"], "\uE038", "\u{FE4B2}", ["office"], 9, 47, 63, 0],
          "1f3e3": [["\u{1F3E3}"], "\uE153", "\u{FE4B3}", ["post_office"], 9, 48, 63, 0],
          "1f3e4": [["\u{1F3E4}"], "", "", ["european_post_office"], 10, 0, 63, 0],
          "1f3e5": [["\u{1F3E5}"], "\uE155", "\u{FE4B4}", ["hospital"], 10, 1, 63, 0],
          "1f3e6": [["\u{1F3E6}"], "\uE14D", "\u{FE4B5}", ["bank"], 10, 2, 63, 0],
          "1f3e7": [["\u{1F3E7}"], "\uE154", "\u{FE4B6}", ["atm"], 10, 3, 63, 0],
          "1f3e8": [["\u{1F3E8}"], "\uE158", "\u{FE4B7}", ["hotel"], 10, 4, 63, 0],
          "1f3e9": [["\u{1F3E9}"], "\uE501", "\u{FE4B8}", ["love_hotel"], 10, 5, 63, 0],
          "1f3ea": [["\u{1F3EA}"], "\uE156", "\u{FE4B9}", ["convenience_store"], 10, 6, 63, 0],
          "1f3eb": [["\u{1F3EB}"], "\uE157", "\u{FE4BA}", ["school"], 10, 7, 63, 0],
          "1f3ec": [["\u{1F3EC}"], "\uE504", "\u{FE4BD}", ["department_store"], 10, 8, 63, 0],
          "1f3ed": [["\u{1F3ED}"], "\uE508", "\u{FE4C0}", ["factory"], 10, 9, 63, 0],
          "1f3ee": [["\u{1F3EE}"], "\uE30B", "\u{FE4C2}", ["izakaya_lantern", "lantern"], 10, 10, 63, 0],
          "1f3ef": [["\u{1F3EF}"], "\uE505", "\u{FE4BE}", ["japanese_castle"], 10, 11, 63, 0],
          "1f3f0": [["\u{1F3F0}"], "\uE506", "\u{FE4BF}", ["european_castle"], 10, 12, 63, 0],
          "1f3f3": [["\u{1F3F3}\uFE0F", "\u{1F3F3}"], "", "", ["waving_white_flag"], 10, 13, 31, 0],
          "1f3f4": [["\u{1F3F4}"], "", "", ["waving_black_flag"], 10, 14, 31, 0],
          "1f3f5": [["\u{1F3F5}"], "", "", ["rosette"], 10, 15, 31, 0],
          "1f3f7": [["\u{1F3F7}"], "", "", ["label"], 10, 16, 31, 0],
          "1f3f8": [["\u{1F3F8}"], "", "", ["badminton_racquet_and_shuttlecock"], 10, 17, 31, 0],
          "1f3f9": [["\u{1F3F9}"], "", "", ["bow_and_arrow"], 10, 18, 31, 0],
          "1f3fa": [["\u{1F3FA}"], "", "", ["amphora"], 10, 19, 31, 0],
          "1f3fb": [["\u{1F3FB}"], "", "", ["skin-tone-2"], 10, 20, 31, 0],
          "1f3fc": [["\u{1F3FC}"], "", "", ["skin-tone-3"], 10, 21, 31, 0],
          "1f3fd": [["\u{1F3FD}"], "", "", ["skin-tone-4"], 10, 22, 31, 0],
          "1f3fe": [["\u{1F3FE}"], "", "", ["skin-tone-5"], 10, 23, 31, 0],
          "1f3ff": [["\u{1F3FF}"], "", "", ["skin-tone-6"], 10, 24, 31, 0],
          "1f400": [["\u{1F400}"], "", "", ["rat"], 10, 25, 63, 0],
          "1f401": [["\u{1F401}"], "", "", ["mouse2"], 10, 26, 63, 0],
          "1f402": [["\u{1F402}"], "", "", ["ox"], 10, 27, 63, 0],
          "1f403": [["\u{1F403}"], "", "", ["water_buffalo"], 10, 28, 63, 0],
          "1f404": [["\u{1F404}"], "", "", ["cow2"], 10, 29, 63, 0],
          "1f405": [["\u{1F405}"], "", "", ["tiger2"], 10, 30, 63, 0],
          "1f406": [["\u{1F406}"], "", "", ["leopard"], 10, 31, 63, 0],
          "1f407": [["\u{1F407}"], "", "", ["rabbit2"], 10, 32, 63, 0],
          "1f408": [["\u{1F408}"], "", "", ["cat2"], 10, 33, 63, 0],
          "1f409": [["\u{1F409}"], "", "", ["dragon"], 10, 34, 63, 0],
          "1f40a": [["\u{1F40A}"], "", "", ["crocodile"], 10, 35, 63, 0],
          "1f40b": [["\u{1F40B}"], "", "", ["whale2"], 10, 36, 63, 0],
          "1f40c": [["\u{1F40C}"], "", "\u{FE1B9}", ["snail"], 10, 37, 63, 0],
          "1f40d": [["\u{1F40D}"], "\uE52D", "\u{FE1D3}", ["snake"], 10, 38, 63, 0],
          "1f40e": [["\u{1F40E}"], "\uE134", "\u{FE7DC}", ["racehorse"], 10, 39, 63, 0],
          "1f40f": [["\u{1F40F}"], "", "", ["ram"], 10, 40, 63, 0],
          "1f410": [["\u{1F410}"], "", "", ["goat"], 10, 41, 63, 0],
          "1f411": [["\u{1F411}"], "\uE529", "\u{FE1CF}", ["sheep"], 10, 42, 63, 0],
          "1f412": [["\u{1F412}"], "\uE528", "\u{FE1CE}", ["monkey"], 10, 43, 63, 0],
          "1f413": [["\u{1F413}"], "", "", ["rooster"], 10, 44, 63, 0],
          "1f414": [["\u{1F414}"], "\uE52E", "\u{FE1D4}", ["chicken"], 10, 45, 63, 0],
          "1f415": [["\u{1F415}"], "", "", ["dog2"], 10, 46, 63, 0],
          "1f416": [["\u{1F416}"], "", "", ["pig2"], 10, 47, 63, 0],
          "1f417": [["\u{1F417}"], "\uE52F", "\u{FE1D5}", ["boar"], 10, 48, 63, 0],
          "1f418": [["\u{1F418}"], "\uE526", "\u{FE1CC}", ["elephant"], 11, 0, 63, 0],
          "1f419": [["\u{1F419}"], "\uE10A", "\u{FE1C5}", ["octopus"], 11, 1, 63, 0],
          "1f41a": [["\u{1F41A}"], "\uE441", "\u{FE1C6}", ["shell"], 11, 2, 63, 0],
          "1f41b": [["\u{1F41B}"], "\uE525", "\u{FE1CB}", ["bug"], 11, 3, 63, 0],
          "1f41c": [["\u{1F41C}"], "", "\u{FE1DA}", ["ant"], 11, 4, 63, 0],
          "1f41d": [["\u{1F41D}"], "", "\u{FE1E1}", ["bee", "honeybee"], 11, 5, 63, 0],
          "1f41e": [["\u{1F41E}"], "", "\u{FE1E2}", ["beetle"], 11, 6, 63, 0],
          "1f41f": [["\u{1F41F}"], "\uE019", "\u{FE1BD}", ["fish"], 11, 7, 63, 0],
          "1f420": [["\u{1F420}"], "\uE522", "\u{FE1C9}", ["tropical_fish"], 11, 8, 63, 0],
          "1f421": [["\u{1F421}"], "\uE019", "\u{FE1D9}", ["blowfish"], 11, 9, 63, 0],
          "1f422": [["\u{1F422}"], "", "\u{FE1DC}", ["turtle"], 11, 10, 63, 0],
          "1f423": [["\u{1F423}"], "\uE523", "\u{FE1DD}", ["hatching_chick"], 11, 11, 63, 0],
          "1f424": [["\u{1F424}"], "\uE523", "\u{FE1BA}", ["baby_chick"], 11, 12, 63, 0],
          "1f425": [["\u{1F425}"], "\uE523", "\u{FE1BB}", ["hatched_chick"], 11, 13, 63, 0],
          "1f426": [["\u{1F426}"], "\uE521", "\u{FE1C8}", ["bird"], 11, 14, 63, 0],
          "1f427": [["\u{1F427}"], "\uE055", "\u{FE1BC}", ["penguin"], 11, 15, 63, 0],
          "1f428": [["\u{1F428}"], "\uE527", "\u{FE1CD}", ["koala"], 11, 16, 63, 0],
          "1f429": [["\u{1F429}"], "\uE052", "\u{FE1D8}", ["poodle"], 11, 17, 63, 0],
          "1f42a": [["\u{1F42A}"], "", "", ["dromedary_camel"], 11, 18, 63, 0],
          "1f42b": [["\u{1F42B}"], "\uE530", "\u{FE1D6}", ["camel"], 11, 19, 63, 0],
          "1f42c": [["\u{1F42C}"], "\uE520", "\u{FE1C7}", ["dolphin", "flipper"], 11, 20, 63, 0],
          "1f42d": [["\u{1F42D}"], "\uE053", "\u{FE1C2}", ["mouse"], 11, 21, 63, 0],
          "1f42e": [["\u{1F42E}"], "\uE52B", "\u{FE1D1}", ["cow"], 11, 22, 63, 0],
          "1f42f": [["\u{1F42F}"], "\uE050", "\u{FE1C0}", ["tiger"], 11, 23, 63, 0],
          "1f430": [["\u{1F430}"], "\uE52C", "\u{FE1D2}", ["rabbit"], 11, 24, 63, 0],
          "1f431": [["\u{1F431}"], "\uE04F", "\u{FE1B8}", ["cat"], 11, 25, 63, 0],
          "1f432": [["\u{1F432}"], "", "\u{FE1DE}", ["dragon_face"], 11, 26, 63, 0],
          "1f433": [["\u{1F433}"], "\uE054", "\u{FE1C3}", ["whale"], 11, 27, 63, 0],
          "1f434": [["\u{1F434}"], "\uE01A", "\u{FE1BE}", ["horse"], 11, 28, 63, 0],
          "1f435": [["\u{1F435}"], "\uE109", "\u{FE1C4}", ["monkey_face"], 11, 29, 63, 0],
          "1f436": [["\u{1F436}"], "\uE052", "\u{FE1B7}", ["dog"], 11, 30, 63, 0],
          "1f437": [["\u{1F437}"], "\uE10B", "\u{FE1BF}", ["pig"], 11, 31, 63, 0],
          "1f438": [["\u{1F438}"], "\uE531", "\u{FE1D7}", ["frog"], 11, 32, 63, 0],
          "1f439": [["\u{1F439}"], "\uE524", "\u{FE1CA}", ["hamster"], 11, 33, 63, 0],
          "1f43a": [["\u{1F43A}"], "\uE52A", "\u{FE1D0}", ["wolf"], 11, 34, 63, 0],
          "1f43b": [["\u{1F43B}"], "\uE051", "\u{FE1C1}", ["bear"], 11, 35, 63, 0],
          "1f43c": [["\u{1F43C}"], "", "\u{FE1DF}", ["panda_face"], 11, 36, 63, 0],
          "1f43d": [["\u{1F43D}"], "\uE10B", "\u{FE1E0}", ["pig_nose"], 11, 37, 63, 0],
          "1f43e": [["\u{1F43E}"], "\uE536", "\u{FE1DB}", ["feet", "paw_prints"], 11, 38, 63, 0],
          "1f43f": [["\u{1F43F}"], "", "", ["chipmunk"], 11, 39, 31, 0],
          "1f440": [["\u{1F440}"], "\uE419", "\u{FE190}", ["eyes"], 11, 40, 63, 0],
          "1f441": [["\u{1F441}"], "", "", ["eye"], 11, 41, 31, 0],
          "1f442": [["\u{1F442}"], "\uE41B", "\u{FE191}", ["ear"], 11, 42, 63, 0],
          "1f443": [["\u{1F443}"], "\uE41A", "\u{FE192}", ["nose"], 11, 48, 63, 0],
          "1f444": [["\u{1F444}"], "\uE41C", "\u{FE193}", ["lips"], 12, 5, 63, 0],
          "1f445": [["\u{1F445}"], "\uE409", "\u{FE194}", ["tongue"], 12, 6, 63, 0],
          "1f446": [["\u{1F446}"], "\uE22E", "\u{FEB99}", ["point_up_2"], 12, 7, 63, 0],
          "1f447": [["\u{1F447}"], "\uE22F", "\u{FEB9A}", ["point_down"], 12, 13, 63, 0],
          "1f448": [["\u{1F448}"], "\uE230", "\u{FEB9B}", ["point_left"], 12, 19, 63, 0],
          "1f449": [["\u{1F449}"], "\uE231", "\u{FEB9C}", ["point_right"], 12, 25, 63, 0],
          "1f44a": [["\u{1F44A}"], "\uE00D", "\u{FEB96}", ["facepunch", "punch"], 12, 31, 63, 0],
          "1f44b": [["\u{1F44B}"], "\uE41E", "\u{FEB9D}", ["wave"], 12, 37, 63, 0],
          "1f44c": [["\u{1F44C}"], "\uE420", "\u{FEB9F}", ["ok_hand"], 12, 43, 63, 0],
          "1f44d": [["\u{1F44D}"], "\uE00E", "\u{FEB97}", ["+1", "thumbsup"], 13, 0, 63, 0],
          "1f44e": [["\u{1F44E}"], "\uE421", "\u{FEBA0}", ["-1", "thumbsdown"], 13, 6, 63, 0],
          "1f44f": [["\u{1F44F}"], "\uE41F", "\u{FEB9E}", ["clap"], 13, 12, 63, 0],
          "1f450": [["\u{1F450}"], "\uE422", "\u{FEBA1}", ["open_hands"], 13, 18, 63, 0],
          "1f451": [["\u{1F451}"], "\uE10E", "\u{FE4D1}", ["crown"], 13, 24, 63, 0],
          "1f452": [["\u{1F452}"], "\uE318", "\u{FE4D4}", ["womans_hat"], 13, 25, 63, 0],
          "1f453": [["\u{1F453}"], "", "\u{FE4CE}", ["eyeglasses"], 13, 26, 63, 0],
          "1f454": [["\u{1F454}"], "\uE302", "\u{FE4D3}", ["necktie"], 13, 27, 63, 0],
          "1f455": [["\u{1F455}"], "\uE006", "\u{FE4CF}", ["shirt", "tshirt"], 13, 28, 63, 0],
          "1f456": [["\u{1F456}"], "", "\u{FE4D0}", ["jeans"], 13, 29, 63, 0],
          "1f457": [["\u{1F457}"], "\uE319", "\u{FE4D5}", ["dress"], 13, 30, 63, 0],
          "1f458": [["\u{1F458}"], "\uE321", "\u{FE4D9}", ["kimono"], 13, 31, 63, 0],
          "1f459": [["\u{1F459}"], "\uE322", "\u{FE4DA}", ["bikini"], 13, 32, 63, 0],
          "1f45a": [["\u{1F45A}"], "\uE006", "\u{FE4DB}", ["womans_clothes"], 13, 33, 63, 0],
          "1f45b": [["\u{1F45B}"], "", "\u{FE4DC}", ["purse"], 13, 34, 63, 0],
          "1f45c": [["\u{1F45C}"], "\uE323", "\u{FE4F0}", ["handbag"], 13, 35, 63, 0],
          "1f45d": [["\u{1F45D}"], "", "\u{FE4F1}", ["pouch"], 13, 36, 63, 0],
          "1f45e": [["\u{1F45E}"], "\uE007", "\u{FE4CC}", ["mans_shoe", "shoe"], 13, 37, 63, 0],
          "1f45f": [["\u{1F45F}"], "\uE007", "\u{FE4CD}", ["athletic_shoe"], 13, 38, 63, 0],
          "1f460": [["\u{1F460}"], "\uE13E", "\u{FE4D6}", ["high_heel"], 13, 39, 63, 0],
          "1f461": [["\u{1F461}"], "\uE31A", "\u{FE4D7}", ["sandal"], 13, 40, 63, 0],
          "1f462": [["\u{1F462}"], "\uE31B", "\u{FE4D8}", ["boot"], 13, 41, 63, 0],
          "1f463": [["\u{1F463}"], "\uE536", "\u{FE553}", ["footprints"], 13, 42, 63, 0],
          "1f464": [["\u{1F464}"], "", "\u{FE19A}", ["bust_in_silhouette"], 13, 43, 63, 0],
          "1f465": [["\u{1F465}"], "", "", ["busts_in_silhouette"], 13, 44, 63, 0],
          "1f466": [["\u{1F466}"], "\uE001", "\u{FE19B}", ["boy"], 13, 45, 63, 0],
          "1f467": [["\u{1F467}"], "\uE002", "\u{FE19C}", ["girl"], 14, 2, 63, 0],
          "1f468": [["\u{1F468}"], "\uE004", "\u{FE19D}", ["man"], 14, 8, 63, 0],
          "1f469": [["\u{1F469}"], "\uE005", "\u{FE19E}", ["woman"], 14, 14, 63, 0],
          "1f46b": [["\u{1F46B}"], "\uE428", "\u{FE1A0}", ["couple", "man_and_woman_holding_hands"], 14, 21, 63, 0],
          "1f46c": [["\u{1F46C}"], "", "", ["two_men_holding_hands"], 14, 22, 63, 0],
          "1f46d": [["\u{1F46D}"], "", "", ["two_women_holding_hands"], 14, 23, 63, 0],
          "1f470": [["\u{1F470}"], "", "\u{FE1A3}", ["bride_with_veil"], 14, 31, 63, 0],
          "1f472": [["\u{1F472}"], "\uE516", "\u{FE1A5}", ["man_with_gua_pi_mao"], 14, 43, 63, 0],
          "1f474": [["\u{1F474}"], "\uE518", "\u{FE1A7}", ["older_man"], 15, 6, 63, 0],
          "1f475": [["\u{1F475}"], "\uE519", "\u{FE1A8}", ["older_woman"], 15, 12, 63, 0],
          "1f476": [["\u{1F476}"], "\uE51A", "\u{FE1A9}", ["baby"], 15, 18, 63, 0],
          "1f478": [["\u{1F478}"], "\uE51C", "\u{FE1AB}", ["princess"], 15, 30, 63, 0],
          "1f479": [["\u{1F479}"], "", "\u{FE1AC}", ["japanese_ogre"], 15, 36, 63, 0],
          "1f47a": [["\u{1F47A}"], "", "\u{FE1AD}", ["japanese_goblin"], 15, 37, 63, 0],
          "1f47b": [["\u{1F47B}"], "\uE11B", "\u{FE1AE}", ["ghost"], 15, 38, 63, 0],
          "1f47c": [["\u{1F47C}"], "\uE04E", "\u{FE1AF}", ["angel"], 15, 39, 63, 0],
          "1f47d": [["\u{1F47D}"], "\uE10C", "\u{FE1B0}", ["alien"], 15, 45, 63, 0],
          "1f47e": [["\u{1F47E}"], "\uE12B", "\u{FE1B1}", ["space_invader"], 15, 46, 63, 0],
          "1f47f": [["\u{1F47F}"], "\uE11A", "\u{FE1B2}", ["imp"], 15, 47, 63, 0],
          "1f480": [["\u{1F480}"], "\uE11C", "\u{FE1B3}", ["skull"], 15, 48, 63, 0],
          "1f483": [["\u{1F483}"], "\uE51F", "\u{FE1B6}", ["dancer"], 16, 12, 63, 0],
          "1f484": [["\u{1F484}"], "\uE31C", "\u{FE195}", ["lipstick"], 16, 18, 63, 0],
          "1f485": [["\u{1F485}"], "\uE31D", "\u{FE196}", ["nail_care"], 16, 19, 63, 0],
          "1f488": [["\u{1F488}"], "\uE320", "\u{FE199}", ["barber"], 16, 37, 63, 0],
          "1f489": [["\u{1F489}"], "\uE13B", "\u{FE509}", ["syringe"], 16, 38, 63, 0],
          "1f48a": [["\u{1F48A}"], "\uE30F", "\u{FE50A}", ["pill"], 16, 39, 63, 0],
          "1f48b": [["\u{1F48B}"], "\uE003", "\u{FE823}", ["kiss"], 16, 40, 63, 0],
          "1f48c": [["\u{1F48C}"], "\uE103\uE328", "\u{FE824}", ["love_letter"], 16, 41, 63, 0],
          "1f48d": [["\u{1F48D}"], "\uE034", "\u{FE825}", ["ring"], 16, 42, 63, 0],
          "1f48e": [["\u{1F48E}"], "\uE035", "\u{FE826}", ["gem"], 16, 43, 63, 0],
          "1f490": [["\u{1F490}"], "\uE306", "\u{FE828}", ["bouquet"], 16, 45, 63, 0],
          "1f492": [["\u{1F492}"], "\uE43D", "\u{FE82A}", ["wedding"], 16, 47, 63, 0],
          "1f493": [["\u{1F493}"], "\uE327", "\u{FEB0D}", ["heartbeat"], 16, 48, 63, 0],
          "1f494": [["\u{1F494}"], "\uE023", "\u{FEB0E}", ["broken_heart"], 17, 0, 63, 0, "</3"],
          "1f495": [["\u{1F495}"], "\uE327", "\u{FEB0F}", ["two_hearts"], 17, 1, 63, 0],
          "1f496": [["\u{1F496}"], "\uE327", "\u{FEB10}", ["sparkling_heart"], 17, 2, 63, 0],
          "1f497": [["\u{1F497}"], "\uE328", "\u{FEB11}", ["heartpulse"], 17, 3, 63, 0],
          "1f498": [["\u{1F498}"], "\uE329", "\u{FEB12}", ["cupid"], 17, 4, 63, 0],
          "1f499": [["\u{1F499}"], "\uE32A", "\u{FEB13}", ["blue_heart"], 17, 5, 63, 0, "<3"],
          "1f49a": [["\u{1F49A}"], "\uE32B", "\u{FEB14}", ["green_heart"], 17, 6, 63, 0, "<3"],
          "1f49b": [["\u{1F49B}"], "\uE32C", "\u{FEB15}", ["yellow_heart"], 17, 7, 63, 0, "<3"],
          "1f49c": [["\u{1F49C}"], "\uE32D", "\u{FEB16}", ["purple_heart"], 17, 8, 63, 0, "<3"],
          "1f49d": [["\u{1F49D}"], "\uE437", "\u{FEB17}", ["gift_heart"], 17, 9, 63, 0],
          "1f49e": [["\u{1F49E}"], "\uE327", "\u{FEB18}", ["revolving_hearts"], 17, 10, 63, 0],
          "1f49f": [["\u{1F49F}"], "\uE204", "\u{FEB19}", ["heart_decoration"], 17, 11, 63, 0],
          "1f4a0": [["\u{1F4A0}"], "", "\u{FEB55}", ["diamond_shape_with_a_dot_inside"], 17, 12, 63, 0],
          "1f4a1": [["\u{1F4A1}"], "\uE10F", "\u{FEB56}", ["bulb"], 17, 13, 63, 0],
          "1f4a2": [["\u{1F4A2}"], "\uE334", "\u{FEB57}", ["anger"], 17, 14, 63, 0],
          "1f4a3": [["\u{1F4A3}"], "\uE311", "\u{FEB58}", ["bomb"], 17, 15, 63, 0],
          "1f4a4": [["\u{1F4A4}"], "\uE13C", "\u{FEB59}", ["zzz"], 17, 16, 63, 0],
          "1f4a5": [["\u{1F4A5}"], "", "\u{FEB5A}", ["boom", "collision"], 17, 17, 63, 0],
          "1f4a6": [["\u{1F4A6}"], "\uE331", "\u{FEB5B}", ["sweat_drops"], 17, 18, 63, 0],
          "1f4a7": [["\u{1F4A7}"], "\uE331", "\u{FEB5C}", ["droplet"], 17, 19, 63, 0],
          "1f4a8": [["\u{1F4A8}"], "\uE330", "\u{FEB5D}", ["dash"], 17, 20, 63, 0],
          "1f4a9": [["\u{1F4A9}"], "\uE05A", "\u{FE4F4}", ["hankey", "poop", "shit"], 17, 21, 63, 0],
          "1f4aa": [["\u{1F4AA}"], "\uE14C", "\u{FEB5E}", ["muscle"], 17, 22, 63, 0],
          "1f4ab": [["\u{1F4AB}"], "\uE407", "\u{FEB5F}", ["dizzy"], 17, 28, 63, 0],
          "1f4ac": [["\u{1F4AC}"], "", "\u{FE532}", ["speech_balloon"], 17, 29, 63, 0],
          "1f4ad": [["\u{1F4AD}"], "", "", ["thought_balloon"], 17, 30, 63, 0],
          "1f4ae": [["\u{1F4AE}"], "", "\u{FEB7A}", ["white_flower"], 17, 31, 63, 0],
          "1f4af": [["\u{1F4AF}"], "", "\u{FEB7B}", ["100"], 17, 32, 63, 0],
          "1f4b0": [["\u{1F4B0}"], "\uE12F", "\u{FE4DD}", ["moneybag"], 17, 33, 63, 0],
          "1f4b1": [["\u{1F4B1}"], "\uE149", "\u{FE4DE}", ["currency_exchange"], 17, 34, 63, 0],
          "1f4b2": [["\u{1F4B2}"], "\uE12F", "\u{FE4E0}", ["heavy_dollar_sign"], 17, 35, 63, 0],
          "1f4b3": [["\u{1F4B3}"], "", "\u{FE4E1}", ["credit_card"], 17, 36, 63, 0],
          "1f4b4": [["\u{1F4B4}"], "", "\u{FE4E2}", ["yen"], 17, 37, 63, 0],
          "1f4b5": [["\u{1F4B5}"], "\uE12F", "\u{FE4E3}", ["dollar"], 17, 38, 63, 0],
          "1f4b6": [["\u{1F4B6}"], "", "", ["euro"], 17, 39, 63, 0],
          "1f4b7": [["\u{1F4B7}"], "", "", ["pound"], 17, 40, 63, 0],
          "1f4b8": [["\u{1F4B8}"], "", "\u{FE4E4}", ["money_with_wings"], 17, 41, 63, 0],
          "1f4b9": [["\u{1F4B9}"], "\uE14A", "\u{FE4DF}", ["chart"], 17, 42, 63, 0],
          "1f4ba": [["\u{1F4BA}"], "\uE11F", "\u{FE537}", ["seat"], 17, 43, 63, 0],
          "1f4bb": [["\u{1F4BB}"], "\uE00C", "\u{FE538}", ["computer"], 17, 44, 63, 0],
          "1f4bc": [["\u{1F4BC}"], "\uE11E", "\u{FE53B}", ["briefcase"], 17, 45, 63, 0],
          "1f4bd": [["\u{1F4BD}"], "\uE316", "\u{FE53C}", ["minidisc"], 17, 46, 63, 0],
          "1f4be": [["\u{1F4BE}"], "\uE316", "\u{FE53D}", ["floppy_disk"], 17, 47, 63, 0],
          "1f4bf": [["\u{1F4BF}"], "\uE126", "\u{FE81D}", ["cd"], 17, 48, 63, 0],
          "1f4c0": [["\u{1F4C0}"], "\uE127", "\u{FE81E}", ["dvd"], 18, 0, 63, 0],
          "1f4c1": [["\u{1F4C1}"], "", "\u{FE543}", ["file_folder"], 18, 1, 63, 0],
          "1f4c2": [["\u{1F4C2}"], "", "\u{FE544}", ["open_file_folder"], 18, 2, 63, 0],
          "1f4c3": [["\u{1F4C3}"], "\uE301", "\u{FE540}", ["page_with_curl"], 18, 3, 63, 0],
          "1f4c4": [["\u{1F4C4}"], "\uE301", "\u{FE541}", ["page_facing_up"], 18, 4, 63, 0],
          "1f4c5": [["\u{1F4C5}"], "", "\u{FE542}", ["date"], 18, 5, 63, 0],
          "1f4c6": [["\u{1F4C6}"], "", "\u{FE549}", ["calendar"], 18, 6, 63, 0],
          "1f4c7": [["\u{1F4C7}"], "\uE148", "\u{FE54D}", ["card_index"], 18, 7, 63, 0],
          "1f4c8": [["\u{1F4C8}"], "\uE14A", "\u{FE54B}", ["chart_with_upwards_trend"], 18, 8, 63, 0],
          "1f4c9": [["\u{1F4C9}"], "", "\u{FE54C}", ["chart_with_downwards_trend"], 18, 9, 63, 0],
          "1f4ca": [["\u{1F4CA}"], "\uE14A", "\u{FE54A}", ["bar_chart"], 18, 10, 63, 0],
          "1f4cb": [["\u{1F4CB}"], "\uE301", "\u{FE548}", ["clipboard"], 18, 11, 63, 0],
          "1f4cc": [["\u{1F4CC}"], "", "\u{FE54E}", ["pushpin"], 18, 12, 63, 0],
          "1f4cd": [["\u{1F4CD}"], "", "\u{FE53F}", ["round_pushpin"], 18, 13, 63, 0],
          "1f4ce": [["\u{1F4CE}"], "", "\u{FE53A}", ["paperclip"], 18, 14, 63, 0],
          "1f4cf": [["\u{1F4CF}"], "", "\u{FE550}", ["straight_ruler"], 18, 15, 63, 0],
          "1f4d0": [["\u{1F4D0}"], "", "\u{FE551}", ["triangular_ruler"], 18, 16, 63, 0],
          "1f4d1": [["\u{1F4D1}"], "\uE301", "\u{FE552}", ["bookmark_tabs"], 18, 17, 63, 0],
          "1f4d2": [["\u{1F4D2}"], "\uE148", "\u{FE54F}", ["ledger"], 18, 18, 63, 0],
          "1f4d3": [["\u{1F4D3}"], "\uE148", "\u{FE545}", ["notebook"], 18, 19, 63, 0],
          "1f4d4": [["\u{1F4D4}"], "\uE148", "\u{FE547}", ["notebook_with_decorative_cover"], 18, 20, 63, 0],
          "1f4d5": [["\u{1F4D5}"], "\uE148", "\u{FE502}", ["closed_book"], 18, 21, 63, 0],
          "1f4d6": [["\u{1F4D6}"], "\uE148", "\u{FE546}", ["book", "open_book"], 18, 22, 63, 0],
          "1f4d7": [["\u{1F4D7}"], "\uE148", "\u{FE4FF}", ["green_book"], 18, 23, 63, 0],
          "1f4d8": [["\u{1F4D8}"], "\uE148", "\u{FE500}", ["blue_book"], 18, 24, 63, 0],
          "1f4d9": [["\u{1F4D9}"], "\uE148", "\u{FE501}", ["orange_book"], 18, 25, 63, 0],
          "1f4da": [["\u{1F4DA}"], "\uE148", "\u{FE503}", ["books"], 18, 26, 63, 0],
          "1f4db": [["\u{1F4DB}"], "", "\u{FE504}", ["name_badge"], 18, 27, 63, 0],
          "1f4dc": [["\u{1F4DC}"], "", "\u{FE4FD}", ["scroll"], 18, 28, 63, 0],
          "1f4dd": [["\u{1F4DD}"], "\uE301", "\u{FE527}", ["memo", "pencil"], 18, 29, 63, 0],
          "1f4de": [["\u{1F4DE}"], "\uE009", "\u{FE524}", ["telephone_receiver"], 18, 30, 63, 0],
          "1f4df": [["\u{1F4DF}"], "", "\u{FE522}", ["pager"], 18, 31, 63, 0],
          "1f4e0": [["\u{1F4E0}"], "\uE00B", "\u{FE528}", ["fax"], 18, 32, 63, 0],
          "1f4e1": [["\u{1F4E1}"], "\uE14B", "\u{FE531}", ["satellite_antenna"], 18, 33, 63, 0],
          "1f4e2": [["\u{1F4E2}"], "\uE142", "\u{FE52F}", ["loudspeaker"], 18, 34, 63, 0],
          "1f4e3": [["\u{1F4E3}"], "\uE317", "\u{FE530}", ["mega"], 18, 35, 63, 0],
          "1f4e4": [["\u{1F4E4}"], "", "\u{FE533}", ["outbox_tray"], 18, 36, 63, 0],
          "1f4e5": [["\u{1F4E5}"], "", "\u{FE534}", ["inbox_tray"], 18, 37, 63, 0],
          "1f4e6": [["\u{1F4E6}"], "\uE112", "\u{FE535}", ["package"], 18, 38, 63, 0],
          "1f4e7": [["\u{1F4E7}"], "\uE103", "\u{FEB92}", ["e-mail"], 18, 39, 63, 0],
          "1f4e8": [["\u{1F4E8}"], "\uE103", "\u{FE52A}", ["incoming_envelope"], 18, 40, 63, 0],
          "1f4e9": [["\u{1F4E9}"], "\uE103", "\u{FE52B}", ["envelope_with_arrow"], 18, 41, 63, 0],
          "1f4ea": [["\u{1F4EA}"], "\uE101", "\u{FE52C}", ["mailbox_closed"], 18, 42, 63, 0],
          "1f4eb": [["\u{1F4EB}"], "\uE101", "\u{FE52D}", ["mailbox"], 18, 43, 63, 0],
          "1f4ec": [["\u{1F4EC}"], "", "", ["mailbox_with_mail"], 18, 44, 63, 0],
          "1f4ed": [["\u{1F4ED}"], "", "", ["mailbox_with_no_mail"], 18, 45, 63, 0],
          "1f4ee": [["\u{1F4EE}"], "\uE102", "\u{FE52E}", ["postbox"], 18, 46, 63, 0],
          "1f4ef": [["\u{1F4EF}"], "", "", ["postal_horn"], 18, 47, 63, 0],
          "1f4f0": [["\u{1F4F0}"], "", "\u{FE822}", ["newspaper"], 18, 48, 63, 0],
          "1f4f1": [["\u{1F4F1}"], "\uE00A", "\u{FE525}", ["iphone"], 19, 0, 63, 0],
          "1f4f2": [["\u{1F4F2}"], "\uE104", "\u{FE526}", ["calling"], 19, 1, 63, 0],
          "1f4f3": [["\u{1F4F3}"], "\uE250", "\u{FE839}", ["vibration_mode"], 19, 2, 63, 0],
          "1f4f4": [["\u{1F4F4}"], "\uE251", "\u{FE83A}", ["mobile_phone_off"], 19, 3, 63, 0],
          "1f4f5": [["\u{1F4F5}"], "", "", ["no_mobile_phones"], 19, 4, 63, 0],
          "1f4f6": [["\u{1F4F6}"], "\uE20B", "\u{FE838}", ["signal_strength"], 19, 5, 63, 0],
          "1f4f7": [["\u{1F4F7}"], "\uE008", "\u{FE4EF}", ["camera"], 19, 6, 63, 0],
          "1f4f8": [["\u{1F4F8}"], "", "", ["camera_with_flash"], 19, 7, 31, 0],
          "1f4f9": [["\u{1F4F9}"], "\uE03D", "\u{FE4F9}", ["video_camera"], 19, 8, 63, 0],
          "1f4fa": [["\u{1F4FA}"], "\uE12A", "\u{FE81C}", ["tv"], 19, 9, 63, 0],
          "1f4fb": [["\u{1F4FB}"], "\uE128", "\u{FE81F}", ["radio"], 19, 10, 63, 0],
          "1f4fc": [["\u{1F4FC}"], "\uE129", "\u{FE820}", ["vhs"], 19, 11, 63, 0],
          "1f4fd": [["\u{1F4FD}"], "", "", ["film_projector"], 19, 12, 31, 0],
          "1f4ff": [["\u{1F4FF}"], "", "", ["prayer_beads"], 19, 13, 31, 0],
          "1f500": [["\u{1F500}"], "", "", ["twisted_rightwards_arrows"], 19, 14, 63, 0],
          "1f501": [["\u{1F501}"], "", "", ["repeat"], 19, 15, 63, 0],
          "1f502": [["\u{1F502}"], "", "", ["repeat_one"], 19, 16, 63, 0],
          "1f503": [["\u{1F503}"], "", "\u{FEB91}", ["arrows_clockwise"], 19, 17, 63, 0],
          "1f504": [["\u{1F504}"], "", "", ["arrows_counterclockwise"], 19, 18, 63, 0],
          "1f505": [["\u{1F505}"], "", "", ["low_brightness"], 19, 19, 63, 0],
          "1f506": [["\u{1F506}"], "", "", ["high_brightness"], 19, 20, 63, 0],
          "1f507": [["\u{1F507}"], "", "", ["mute"], 19, 21, 63, 0],
          "1f508": [["\u{1F508}"], "", "", ["speaker"], 19, 22, 63, 0],
          "1f509": [["\u{1F509}"], "", "", ["sound"], 19, 23, 63, 0],
          "1f50a": [["\u{1F50A}"], "\uE141", "\u{FE821}", ["loud_sound"], 19, 24, 63, 0],
          "1f50b": [["\u{1F50B}"], "", "\u{FE4FC}", ["battery"], 19, 25, 63, 0],
          "1f50c": [["\u{1F50C}"], "", "\u{FE4FE}", ["electric_plug"], 19, 26, 63, 0],
          "1f50d": [["\u{1F50D}"], "\uE114", "\u{FEB85}", ["mag"], 19, 27, 63, 0],
          "1f50e": [["\u{1F50E}"], "\uE114", "\u{FEB8D}", ["mag_right"], 19, 28, 63, 0],
          "1f50f": [["\u{1F50F}"], "\uE144", "\u{FEB90}", ["lock_with_ink_pen"], 19, 29, 63, 0],
          "1f510": [["\u{1F510}"], "\uE144", "\u{FEB8A}", ["closed_lock_with_key"], 19, 30, 63, 0],
          "1f511": [["\u{1F511}"], "\uE03F", "\u{FEB82}", ["key"], 19, 31, 63, 0],
          "1f512": [["\u{1F512}"], "\uE144", "\u{FEB86}", ["lock"], 19, 32, 63, 0],
          "1f513": [["\u{1F513}"], "\uE145", "\u{FEB87}", ["unlock"], 19, 33, 63, 0],
          "1f514": [["\u{1F514}"], "\uE325", "\u{FE4F2}", ["bell"], 19, 34, 63, 0],
          "1f515": [["\u{1F515}"], "", "", ["no_bell"], 19, 35, 63, 0],
          "1f516": [["\u{1F516}"], "", "\u{FEB8F}", ["bookmark"], 19, 36, 63, 0],
          "1f517": [["\u{1F517}"], "", "\u{FEB4B}", ["link"], 19, 37, 63, 0],
          "1f518": [["\u{1F518}"], "", "\u{FEB8C}", ["radio_button"], 19, 38, 63, 0],
          "1f519": [["\u{1F519}"], "\uE235", "\u{FEB8E}", ["back"], 19, 39, 63, 0],
          "1f51a": [["\u{1F51A}"], "", "\u{FE01A}", ["end"], 19, 40, 63, 0],
          "1f51b": [["\u{1F51B}"], "", "\u{FE019}", ["on"], 19, 41, 63, 0],
          "1f51c": [["\u{1F51C}"], "", "\u{FE018}", ["soon"], 19, 42, 63, 0],
          "1f51d": [["\u{1F51D}"], "\uE24C", "\u{FEB42}", ["top"], 19, 43, 63, 0],
          "1f51e": [["\u{1F51E}"], "\uE207", "\u{FEB25}", ["underage"], 19, 44, 63, 0],
          "1f51f": [["\u{1F51F}"], "", "\u{FE83B}", ["keycap_ten"], 19, 45, 63, 0],
          "1f520": [["\u{1F520}"], "", "\u{FEB7C}", ["capital_abcd"], 19, 46, 63, 0],
          "1f521": [["\u{1F521}"], "", "\u{FEB7D}", ["abcd"], 19, 47, 63, 0],
          "1f522": [["\u{1F522}"], "", "\u{FEB7E}", ["1234"], 19, 48, 63, 0],
          "1f523": [["\u{1F523}"], "", "\u{FEB7F}", ["symbols"], 20, 0, 63, 0],
          "1f524": [["\u{1F524}"], "", "\u{FEB80}", ["abc"], 20, 1, 63, 0],
          "1f525": [["\u{1F525}"], "\uE11D", "\u{FE4F6}", ["fire"], 20, 2, 63, 0],
          "1f526": [["\u{1F526}"], "", "\u{FE4FB}", ["flashlight"], 20, 3, 63, 0],
          "1f527": [["\u{1F527}"], "", "\u{FE4C9}", ["wrench"], 20, 4, 63, 0],
          "1f528": [["\u{1F528}"], "\uE116", "\u{FE4CA}", ["hammer"], 20, 5, 63, 0],
          "1f529": [["\u{1F529}"], "", "\u{FE4CB}", ["nut_and_bolt"], 20, 6, 63, 0],
          "1f52a": [["\u{1F52A}"], "", "\u{FE4FA}", ["hocho", "knife"], 20, 7, 63, 0],
          "1f52b": [["\u{1F52B}"], "\uE113", "\u{FE4F5}", ["gun"], 20, 8, 63, 0],
          "1f52c": [["\u{1F52C}"], "", "", ["microscope"], 20, 9, 63, 0],
          "1f52d": [["\u{1F52D}"], "", "", ["telescope"], 20, 10, 63, 0],
          "1f52e": [["\u{1F52E}"], "\uE23E", "\u{FE4F7}", ["crystal_ball"], 20, 11, 63, 0],
          "1f52f": [["\u{1F52F}"], "\uE23E", "\u{FE4F8}", ["six_pointed_star"], 20, 12, 63, 0],
          "1f530": [["\u{1F530}"], "\uE209", "\u{FE044}", ["beginner"], 20, 13, 63, 0],
          "1f531": [["\u{1F531}"], "\uE031", "\u{FE4D2}", ["trident"], 20, 14, 63, 0],
          "1f532": [["\u{1F532}"], "\uE21A", "\u{FEB64}", ["black_square_button"], 20, 15, 63, 0],
          "1f533": [["\u{1F533}"], "\uE21B", "\u{FEB67}", ["white_square_button"], 20, 16, 63, 0],
          "1f534": [["\u{1F534}"], "\uE219", "\u{FEB63}", ["red_circle"], 20, 17, 63, 0],
          "1f535": [["\u{1F535}"], "\uE21A", "\u{FEB64}", ["large_blue_circle"], 20, 18, 63, 0],
          "1f536": [["\u{1F536}"], "\uE21B", "\u{FEB73}", ["large_orange_diamond"], 20, 19, 63, 0],
          "1f537": [["\u{1F537}"], "\uE21B", "\u{FEB74}", ["large_blue_diamond"], 20, 20, 63, 0],
          "1f538": [["\u{1F538}"], "\uE21B", "\u{FEB75}", ["small_orange_diamond"], 20, 21, 63, 0],
          "1f539": [["\u{1F539}"], "\uE21B", "\u{FEB76}", ["small_blue_diamond"], 20, 22, 63, 0],
          "1f53a": [["\u{1F53A}"], "", "\u{FEB78}", ["small_red_triangle"], 20, 23, 63, 0],
          "1f53b": [["\u{1F53B}"], "", "\u{FEB79}", ["small_red_triangle_down"], 20, 24, 63, 0],
          "1f53c": [["\u{1F53C}"], "", "\u{FEB01}", ["arrow_up_small"], 20, 25, 63, 0],
          "1f53d": [["\u{1F53D}"], "", "\u{FEB00}", ["arrow_down_small"], 20, 26, 63, 0],
          "1f549": [["\u{1F549}"], "", "", ["om_symbol"], 20, 27, 31, 0],
          "1f54a": [["\u{1F54A}"], "", "", ["dove_of_peace"], 20, 28, 31, 0],
          "1f54b": [["\u{1F54B}"], "", "", ["kaaba"], 20, 29, 31, 0],
          "1f54c": [["\u{1F54C}"], "", "", ["mosque"], 20, 30, 31, 0],
          "1f54d": [["\u{1F54D}"], "", "", ["synagogue"], 20, 31, 31, 0],
          "1f54e": [["\u{1F54E}"], "", "", ["menorah_with_nine_branches"], 20, 32, 31, 0],
          "1f550": [["\u{1F550}"], "\uE024", "\u{FE01E}", ["clock1"], 20, 33, 63, 0],
          "1f551": [["\u{1F551}"], "\uE025", "\u{FE01F}", ["clock2"], 20, 34, 63, 0],
          "1f552": [["\u{1F552}"], "\uE026", "\u{FE020}", ["clock3"], 20, 35, 63, 0],
          "1f553": [["\u{1F553}"], "\uE027", "\u{FE021}", ["clock4"], 20, 36, 63, 0],
          "1f554": [["\u{1F554}"], "\uE028", "\u{FE022}", ["clock5"], 20, 37, 63, 0],
          "1f555": [["\u{1F555}"], "\uE029", "\u{FE023}", ["clock6"], 20, 38, 63, 0],
          "1f556": [["\u{1F556}"], "\uE02A", "\u{FE024}", ["clock7"], 20, 39, 63, 0],
          "1f557": [["\u{1F557}"], "\uE02B", "\u{FE025}", ["clock8"], 20, 40, 63, 0],
          "1f558": [["\u{1F558}"], "\uE02C", "\u{FE026}", ["clock9"], 20, 41, 63, 0],
          "1f559": [["\u{1F559}"], "\uE02D", "\u{FE027}", ["clock10"], 20, 42, 63, 0],
          "1f55a": [["\u{1F55A}"], "\uE02E", "\u{FE028}", ["clock11"], 20, 43, 63, 0],
          "1f55b": [["\u{1F55B}"], "\uE02F", "\u{FE029}", ["clock12"], 20, 44, 63, 0],
          "1f55c": [["\u{1F55C}"], "", "", ["clock130"], 20, 45, 63, 0],
          "1f55d": [["\u{1F55D}"], "", "", ["clock230"], 20, 46, 63, 0],
          "1f55e": [["\u{1F55E}"], "", "", ["clock330"], 20, 47, 63, 0],
          "1f55f": [["\u{1F55F}"], "", "", ["clock430"], 20, 48, 63, 0],
          "1f560": [["\u{1F560}"], "", "", ["clock530"], 21, 0, 63, 0],
          "1f561": [["\u{1F561}"], "", "", ["clock630"], 21, 1, 63, 0],
          "1f562": [["\u{1F562}"], "", "", ["clock730"], 21, 2, 63, 0],
          "1f563": [["\u{1F563}"], "", "", ["clock830"], 21, 3, 63, 0],
          "1f564": [["\u{1F564}"], "", "", ["clock930"], 21, 4, 63, 0],
          "1f565": [["\u{1F565}"], "", "", ["clock1030"], 21, 5, 63, 0],
          "1f566": [["\u{1F566}"], "", "", ["clock1130"], 21, 6, 63, 0],
          "1f567": [["\u{1F567}"], "", "", ["clock1230"], 21, 7, 63, 0],
          "1f56f": [["\u{1F56F}"], "", "", ["candle"], 21, 8, 31, 0],
          "1f570": [["\u{1F570}"], "", "", ["mantelpiece_clock"], 21, 9, 31, 0],
          "1f573": [["\u{1F573}"], "", "", ["hole"], 21, 10, 31, 0],
          "1f574": [["\u{1F574}"], "", "", ["man_in_business_suit_levitating"], 21, 11, 31, 0],
          "1f576": [["\u{1F576}"], "", "", ["dark_sunglasses"], 21, 23, 31, 0],
          "1f577": [["\u{1F577}"], "", "", ["spider"], 21, 24, 31, 0],
          "1f578": [["\u{1F578}"], "", "", ["spider_web"], 21, 25, 31, 0],
          "1f579": [["\u{1F579}"], "", "", ["joystick"], 21, 26, 31, 0],
          "1f57a": [["\u{1F57A}"], "", "", ["man_dancing"], 21, 27, 31, 0],
          "1f587": [["\u{1F587}"], "", "", ["linked_paperclips"], 21, 33, 31, 0],
          "1f58a": [["\u{1F58A}"], "", "", ["lower_left_ballpoint_pen"], 21, 34, 31, 0],
          "1f58b": [["\u{1F58B}"], "", "", ["lower_left_fountain_pen"], 21, 35, 31, 0],
          "1f58c": [["\u{1F58C}"], "", "", ["lower_left_paintbrush"], 21, 36, 31, 0],
          "1f58d": [["\u{1F58D}"], "", "", ["lower_left_crayon"], 21, 37, 31, 0],
          "1f590": [["\u{1F590}"], "", "", ["raised_hand_with_fingers_splayed"], 21, 38, 31, 0],
          "1f595": [["\u{1F595}"], "", "", ["middle_finger", "reversed_hand_with_middle_finger_extended"], 21, 44, 31, 0],
          "1f596": [["\u{1F596}"], "", "", ["spock-hand"], 22, 1, 31, 0],
          "1f5a4": [["\u{1F5A4}"], "", "", ["black_heart"], 22, 7, 31, 0],
          "1f5a5": [["\u{1F5A5}"], "", "", ["desktop_computer"], 22, 8, 31, 0],
          "1f5a8": [["\u{1F5A8}"], "", "", ["printer"], 22, 9, 31, 0],
          "1f5b1": [["\u{1F5B1}"], "", "", ["three_button_mouse"], 22, 10, 31, 0],
          "1f5b2": [["\u{1F5B2}"], "", "", ["trackball"], 22, 11, 31, 0],
          "1f5bc": [["\u{1F5BC}"], "", "", ["frame_with_picture"], 22, 12, 31, 0],
          "1f5c2": [["\u{1F5C2}"], "", "", ["card_index_dividers"], 22, 13, 31, 0],
          "1f5c3": [["\u{1F5C3}"], "", "", ["card_file_box"], 22, 14, 31, 0],
          "1f5c4": [["\u{1F5C4}"], "", "", ["file_cabinet"], 22, 15, 31, 0],
          "1f5d1": [["\u{1F5D1}"], "", "", ["wastebasket"], 22, 16, 31, 0],
          "1f5d2": [["\u{1F5D2}"], "", "", ["spiral_note_pad"], 22, 17, 31, 0],
          "1f5d3": [["\u{1F5D3}"], "", "", ["spiral_calendar_pad"], 22, 18, 31, 0],
          "1f5dc": [["\u{1F5DC}"], "", "", ["compression"], 22, 19, 31, 0],
          "1f5dd": [["\u{1F5DD}"], "", "", ["old_key"], 22, 20, 31, 0],
          "1f5de": [["\u{1F5DE}"], "", "", ["rolled_up_newspaper"], 22, 21, 31, 0],
          "1f5e1": [["\u{1F5E1}"], "", "", ["dagger_knife"], 22, 22, 31, 0],
          "1f5e3": [["\u{1F5E3}"], "", "", ["speaking_head_in_silhouette"], 22, 23, 31, 0],
          "1f5e8": [["\u{1F5E8}"], "", "", ["left_speech_bubble"], 22, 24, 31, 0],
          "1f5ef": [["\u{1F5EF}"], "", "", ["right_anger_bubble"], 22, 25, 31, 0],
          "1f5f3": [["\u{1F5F3}"], "", "", ["ballot_box_with_ballot"], 22, 26, 31, 0],
          "1f5fa": [["\u{1F5FA}"], "", "", ["world_map"], 22, 27, 31, 0],
          "1f5fb": [["\u{1F5FB}"], "\uE03B", "\u{FE4C3}", ["mount_fuji"], 22, 28, 63, 0],
          "1f5fc": [["\u{1F5FC}"], "\uE509", "\u{FE4C4}", ["tokyo_tower"], 22, 29, 63, 0],
          "1f5fd": [["\u{1F5FD}"], "\uE51D", "\u{FE4C6}", ["statue_of_liberty"], 22, 30, 63, 0],
          "1f5fe": [["\u{1F5FE}"], "", "\u{FE4C7}", ["japan"], 22, 31, 63, 0],
          "1f5ff": [["\u{1F5FF}"], "", "\u{FE4C8}", ["moyai"], 22, 32, 63, 0],
          "1f600": [["\u{1F600}"], "", "", ["grinning"], 22, 33, 63, 0, ":D"],
          "1f601": [["\u{1F601}"], "\uE404", "\u{FE333}", ["grin"], 22, 34, 63, 0],
          "1f602": [["\u{1F602}"], "\uE412", "\u{FE334}", ["joy"], 22, 35, 63, 0],
          "1f603": [["\u{1F603}"], "\uE057", "\u{FE330}", ["smiley"], 22, 36, 63, 0, ":)"],
          "1f604": [["\u{1F604}"], "\uE415", "\u{FE338}", ["smile"], 22, 37, 63, 0, ":)"],
          "1f605": [["\u{1F605}"], "\uE415\uE331", "\u{FE331}", ["sweat_smile"], 22, 38, 63, 0],
          "1f606": [["\u{1F606}"], "\uE40A", "\u{FE332}", ["laughing", "satisfied"], 22, 39, 63, 0],
          "1f607": [["\u{1F607}"], "", "", ["innocent"], 22, 40, 63, 0],
          "1f608": [["\u{1F608}"], "", "", ["smiling_imp"], 22, 41, 63, 0],
          "1f609": [["\u{1F609}"], "\uE405", "\u{FE347}", ["wink"], 22, 42, 63, 0, ";)"],
          "1f60a": [["\u{1F60A}"], "\uE056", "\u{FE335}", ["blush"], 22, 43, 63, 0, ":)"],
          "1f60b": [["\u{1F60B}"], "\uE056", "\u{FE32B}", ["yum"], 22, 44, 63, 0],
          "1f60c": [["\u{1F60C}"], "\uE40A", "\u{FE33E}", ["relieved"], 22, 45, 63, 0],
          "1f60d": [["\u{1F60D}"], "\uE106", "\u{FE327}", ["heart_eyes"], 22, 46, 63, 0],
          "1f60e": [["\u{1F60E}"], "", "", ["sunglasses"], 22, 47, 63, 0],
          "1f60f": [["\u{1F60F}"], "\uE402", "\u{FE343}", ["smirk"], 22, 48, 63, 0],
          "1f610": [["\u{1F610}"], "", "", ["neutral_face"], 23, 0, 63, 0],
          "1f611": [["\u{1F611}"], "", "", ["expressionless"], 23, 1, 63, 0],
          "1f612": [["\u{1F612}"], "\uE40E", "\u{FE326}", ["unamused"], 23, 2, 63, 0, ":("],
          "1f613": [["\u{1F613}"], "\uE108", "\u{FE344}", ["sweat"], 23, 3, 63, 0],
          "1f614": [["\u{1F614}"], "\uE403", "\u{FE340}", ["pensive"], 23, 4, 63, 0],
          "1f615": [["\u{1F615}"], "", "", ["confused"], 23, 5, 63, 0],
          "1f616": [["\u{1F616}"], "\uE407", "\u{FE33F}", ["confounded"], 23, 6, 63, 0],
          "1f617": [["\u{1F617}"], "", "", ["kissing"], 23, 7, 63, 0],
          "1f618": [["\u{1F618}"], "\uE418", "\u{FE32C}", ["kissing_heart"], 23, 8, 63, 0],
          "1f619": [["\u{1F619}"], "", "", ["kissing_smiling_eyes"], 23, 9, 63, 0],
          "1f61a": [["\u{1F61A}"], "\uE417", "\u{FE32D}", ["kissing_closed_eyes"], 23, 10, 63, 0],
          "1f61b": [["\u{1F61B}"], "", "", ["stuck_out_tongue"], 23, 11, 63, 0, ":p"],
          "1f61c": [["\u{1F61C}"], "\uE105", "\u{FE329}", ["stuck_out_tongue_winking_eye"], 23, 12, 63, 0, ";p"],
          "1f61d": [["\u{1F61D}"], "\uE409", "\u{FE32A}", ["stuck_out_tongue_closed_eyes"], 23, 13, 63, 0],
          "1f61e": [["\u{1F61E}"], "\uE058", "\u{FE323}", ["disappointed"], 23, 14, 63, 0, ":("],
          "1f61f": [["\u{1F61F}"], "", "", ["worried"], 23, 15, 63, 0],
          "1f620": [["\u{1F620}"], "\uE059", "\u{FE320}", ["angry"], 23, 16, 63, 0],
          "1f621": [["\u{1F621}"], "\uE416", "\u{FE33D}", ["rage"], 23, 17, 63, 0],
          "1f622": [["\u{1F622}"], "\uE413", "\u{FE339}", ["cry"], 23, 18, 63, 0, ":'("],
          "1f623": [["\u{1F623}"], "\uE406", "\u{FE33C}", ["persevere"], 23, 19, 63, 0],
          "1f624": [["\u{1F624}"], "\uE404", "\u{FE328}", ["triumph"], 23, 20, 63, 0],
          "1f625": [["\u{1F625}"], "\uE401", "\u{FE345}", ["disappointed_relieved"], 23, 21, 63, 0],
          "1f626": [["\u{1F626}"], "", "", ["frowning"], 23, 22, 63, 0],
          "1f627": [["\u{1F627}"], "", "", ["anguished"], 23, 23, 63, 0],
          "1f628": [["\u{1F628}"], "\uE40B", "\u{FE33B}", ["fearful"], 23, 24, 63, 0],
          "1f629": [["\u{1F629}"], "\uE403", "\u{FE321}", ["weary"], 23, 25, 63, 0],
          "1f62a": [["\u{1F62A}"], "\uE408", "\u{FE342}", ["sleepy"], 23, 26, 63, 0],
          "1f62b": [["\u{1F62B}"], "\uE406", "\u{FE346}", ["tired_face"], 23, 27, 63, 0],
          "1f62c": [["\u{1F62C}"], "", "", ["grimacing"], 23, 28, 63, 0],
          "1f62d": [["\u{1F62D}"], "\uE411", "\u{FE33A}", ["sob"], 23, 29, 63, 0, ":'("],
          "1f62e": [["\u{1F62E}"], "", "", ["open_mouth"], 23, 30, 63, 0],
          "1f62f": [["\u{1F62F}"], "", "", ["hushed"], 23, 31, 63, 0],
          "1f630": [["\u{1F630}"], "\uE40F", "\u{FE325}", ["cold_sweat"], 23, 32, 63, 0],
          "1f631": [["\u{1F631}"], "\uE107", "\u{FE341}", ["scream"], 23, 33, 63, 0],
          "1f632": [["\u{1F632}"], "\uE410", "\u{FE322}", ["astonished"], 23, 34, 63, 0],
          "1f633": [["\u{1F633}"], "\uE40D", "\u{FE32F}", ["flushed"], 23, 35, 63, 0],
          "1f634": [["\u{1F634}"], "", "", ["sleeping"], 23, 36, 63, 0],
          "1f635": [["\u{1F635}"], "\uE406", "\u{FE324}", ["dizzy_face"], 23, 37, 63, 0],
          "1f636": [["\u{1F636}"], "", "", ["no_mouth"], 23, 38, 63, 0],
          "1f637": [["\u{1F637}"], "\uE40C", "\u{FE32E}", ["mask"], 23, 39, 63, 0],
          "1f638": [["\u{1F638}"], "\uE404", "\u{FE349}", ["smile_cat"], 23, 40, 63, 0],
          "1f639": [["\u{1F639}"], "\uE412", "\u{FE34A}", ["joy_cat"], 23, 41, 63, 0],
          "1f63a": [["\u{1F63A}"], "\uE057", "\u{FE348}", ["smiley_cat"], 23, 42, 63, 0],
          "1f63b": [["\u{1F63B}"], "\uE106", "\u{FE34C}", ["heart_eyes_cat"], 23, 43, 63, 0],
          "1f63c": [["\u{1F63C}"], "\uE404", "\u{FE34F}", ["smirk_cat"], 23, 44, 63, 0],
          "1f63d": [["\u{1F63D}"], "\uE418", "\u{FE34B}", ["kissing_cat"], 23, 45, 63, 0],
          "1f63e": [["\u{1F63E}"], "\uE416", "\u{FE34E}", ["pouting_cat"], 23, 46, 63, 0],
          "1f63f": [["\u{1F63F}"], "\uE413", "\u{FE34D}", ["crying_cat_face"], 23, 47, 63, 0],
          "1f640": [["\u{1F640}"], "\uE403", "\u{FE350}", ["scream_cat"], 23, 48, 63, 0],
          "1f641": [["\u{1F641}"], "", "", ["slightly_frowning_face"], 24, 0, 31, 0],
          "1f642": [["\u{1F642}"], "", "", ["slightly_smiling_face"], 24, 1, 63, 0],
          "1f643": [["\u{1F643}"], "", "", ["upside_down_face"], 24, 2, 31, 0],
          "1f644": [["\u{1F644}"], "", "", ["face_with_rolling_eyes"], 24, 3, 31, 0],
          "1f648": [["\u{1F648}"], "", "\u{FE354}", ["see_no_evil"], 24, 22, 63, 0],
          "1f649": [["\u{1F649}"], "", "\u{FE356}", ["hear_no_evil"], 24, 23, 63, 0],
          "1f64a": [["\u{1F64A}"], "", "\u{FE355}", ["speak_no_evil"], 24, 24, 63, 0],
          "1f64c": [["\u{1F64C}"], "\uE427", "\u{FE358}", ["raised_hands"], 24, 31, 63, 0],
          "1f64f": [["\u{1F64F}"], "\uE41D", "\u{FE35B}", ["pray"], 25, 0, 63, 0],
          "1f680": [["\u{1F680}"], "\uE10D", "\u{FE7ED}", ["rocket"], 25, 6, 63, 0],
          "1f681": [["\u{1F681}"], "", "", ["helicopter"], 25, 7, 63, 0],
          "1f682": [["\u{1F682}"], "", "", ["steam_locomotive"], 25, 8, 63, 0],
          "1f683": [["\u{1F683}"], "\uE01E", "\u{FE7DF}", ["railway_car"], 25, 9, 63, 0],
          "1f684": [["\u{1F684}"], "\uE435", "\u{FE7E2}", ["bullettrain_side"], 25, 10, 63, 0],
          "1f685": [["\u{1F685}"], "\uE01F", "\u{FE7E3}", ["bullettrain_front"], 25, 11, 63, 0],
          "1f686": [["\u{1F686}"], "", "", ["train2"], 25, 12, 63, 0],
          "1f687": [["\u{1F687}"], "\uE434", "\u{FE7E0}", ["metro"], 25, 13, 63, 0],
          "1f688": [["\u{1F688}"], "", "", ["light_rail"], 25, 14, 63, 0],
          "1f689": [["\u{1F689}"], "\uE039", "\u{FE7EC}", ["station"], 25, 15, 63, 0],
          "1f68a": [["\u{1F68A}"], "", "", ["tram"], 25, 16, 63, 0],
          "1f68b": [["\u{1F68B}"], "", "", ["train"], 25, 17, 63, 0],
          "1f68c": [["\u{1F68C}"], "\uE159", "\u{FE7E6}", ["bus"], 25, 18, 63, 0],
          "1f68d": [["\u{1F68D}"], "", "", ["oncoming_bus"], 25, 19, 63, 0],
          "1f68e": [["\u{1F68E}"], "", "", ["trolleybus"], 25, 20, 63, 0],
          "1f68f": [["\u{1F68F}"], "\uE150", "\u{FE7E7}", ["busstop"], 25, 21, 63, 0],
          "1f690": [["\u{1F690}"], "", "", ["minibus"], 25, 22, 63, 0],
          "1f691": [["\u{1F691}"], "\uE431", "\u{FE7F3}", ["ambulance"], 25, 23, 63, 0],
          "1f692": [["\u{1F692}"], "\uE430", "\u{FE7F2}", ["fire_engine"], 25, 24, 63, 0],
          "1f693": [["\u{1F693}"], "\uE432", "\u{FE7F4}", ["police_car"], 25, 25, 63, 0],
          "1f694": [["\u{1F694}"], "", "", ["oncoming_police_car"], 25, 26, 63, 0],
          "1f695": [["\u{1F695}"], "\uE15A", "\u{FE7EF}", ["taxi"], 25, 27, 63, 0],
          "1f696": [["\u{1F696}"], "", "", ["oncoming_taxi"], 25, 28, 63, 0],
          "1f697": [["\u{1F697}"], "\uE01B", "\u{FE7E4}", ["car", "red_car"], 25, 29, 63, 0],
          "1f698": [["\u{1F698}"], "", "", ["oncoming_automobile"], 25, 30, 63, 0],
          "1f699": [["\u{1F699}"], "\uE42E", "\u{FE7E5}", ["blue_car"], 25, 31, 63, 0],
          "1f69a": [["\u{1F69A}"], "\uE42F", "\u{FE7F1}", ["truck"], 25, 32, 63, 0],
          "1f69b": [["\u{1F69B}"], "", "", ["articulated_lorry"], 25, 33, 63, 0],
          "1f69c": [["\u{1F69C}"], "", "", ["tractor"], 25, 34, 63, 0],
          "1f69d": [["\u{1F69D}"], "", "", ["monorail"], 25, 35, 63, 0],
          "1f69e": [["\u{1F69E}"], "", "", ["mountain_railway"], 25, 36, 63, 0],
          "1f69f": [["\u{1F69F}"], "", "", ["suspension_railway"], 25, 37, 63, 0],
          "1f6a0": [["\u{1F6A0}"], "", "", ["mountain_cableway"], 25, 38, 63, 0],
          "1f6a1": [["\u{1F6A1}"], "", "", ["aerial_tramway"], 25, 39, 63, 0],
          "1f6a2": [["\u{1F6A2}"], "\uE202", "\u{FE7E8}", ["ship"], 25, 40, 63, 0],
          "1f6a4": [["\u{1F6A4}"], "\uE135", "\u{FE7EE}", ["speedboat"], 25, 47, 63, 0],
          "1f6a5": [["\u{1F6A5}"], "\uE14E", "\u{FE7F7}", ["traffic_light"], 25, 48, 63, 0],
          "1f6a6": [["\u{1F6A6}"], "", "", ["vertical_traffic_light"], 26, 0, 63, 0],
          "1f6a7": [["\u{1F6A7}"], "\uE137", "\u{FE7F8}", ["construction"], 26, 1, 63, 0],
          "1f6a8": [["\u{1F6A8}"], "\uE432", "\u{FE7F9}", ["rotating_light"], 26, 2, 63, 0],
          "1f6a9": [["\u{1F6A9}"], "", "\u{FEB22}", ["triangular_flag_on_post"], 26, 3, 63, 0],
          "1f6aa": [["\u{1F6AA}"], "", "\u{FE4F3}", ["door"], 26, 4, 63, 0],
          "1f6ab": [["\u{1F6AB}"], "", "\u{FEB48}", ["no_entry_sign"], 26, 5, 63, 0],
          "1f6ac": [["\u{1F6AC}"], "\uE30E", "\u{FEB1E}", ["smoking"], 26, 6, 63, 0],
          "1f6ad": [["\u{1F6AD}"], "\uE208", "\u{FEB1F}", ["no_smoking"], 26, 7, 63, 0],
          "1f6ae": [["\u{1F6AE}"], "", "", ["put_litter_in_its_place"], 26, 8, 63, 0],
          "1f6af": [["\u{1F6AF}"], "", "", ["do_not_litter"], 26, 9, 63, 0],
          "1f6b0": [["\u{1F6B0}"], "", "", ["potable_water"], 26, 10, 63, 0],
          "1f6b1": [["\u{1F6B1}"], "", "", ["non-potable_water"], 26, 11, 63, 0],
          "1f6b2": [["\u{1F6B2}"], "\uE136", "\u{FE7EB}", ["bike"], 26, 12, 63, 0],
          "1f6b3": [["\u{1F6B3}"], "", "", ["no_bicycles"], 26, 13, 63, 0],
          "1f6b7": [["\u{1F6B7}"], "", "", ["no_pedestrians"], 26, 32, 63, 0],
          "1f6b8": [["\u{1F6B8}"], "", "", ["children_crossing"], 26, 33, 63, 0],
          "1f6b9": [["\u{1F6B9}"], "\uE138", "\u{FEB33}", ["mens"], 26, 34, 63, 0],
          "1f6ba": [["\u{1F6BA}"], "\uE139", "\u{FEB34}", ["womens"], 26, 35, 63, 0],
          "1f6bb": [["\u{1F6BB}"], "\uE151", "\u{FE506}", ["restroom"], 26, 36, 63, 0],
          "1f6bc": [["\u{1F6BC}"], "\uE13A", "\u{FEB35}", ["baby_symbol"], 26, 37, 63, 0],
          "1f6bd": [["\u{1F6BD}"], "\uE140", "\u{FE507}", ["toilet"], 26, 38, 63, 0],
          "1f6be": [["\u{1F6BE}"], "\uE309", "\u{FE508}", ["wc"], 26, 39, 63, 0],
          "1f6bf": [["\u{1F6BF}"], "", "", ["shower"], 26, 40, 63, 0],
          "1f6c0": [["\u{1F6C0}"], "\uE13F", "\u{FE505}", ["bath"], 26, 41, 63, 0],
          "1f6c1": [["\u{1F6C1}"], "", "", ["bathtub"], 26, 47, 63, 0],
          "1f6c2": [["\u{1F6C2}"], "", "", ["passport_control"], 26, 48, 63, 0],
          "1f6c3": [["\u{1F6C3}"], "", "", ["customs"], 27, 0, 63, 0],
          "1f6c4": [["\u{1F6C4}"], "", "", ["baggage_claim"], 27, 1, 63, 0],
          "1f6c5": [["\u{1F6C5}"], "", "", ["left_luggage"], 27, 2, 63, 0],
          "1f6cb": [["\u{1F6CB}"], "", "", ["couch_and_lamp"], 27, 3, 31, 0],
          "1f6cc": [["\u{1F6CC}"], "", "", ["sleeping_accommodation"], 27, 4, 31, 0],
          "1f6cd": [["\u{1F6CD}"], "", "", ["shopping_bags"], 27, 10, 31, 0],
          "1f6ce": [["\u{1F6CE}"], "", "", ["bellhop_bell"], 27, 11, 31, 0],
          "1f6cf": [["\u{1F6CF}"], "", "", ["bed"], 27, 12, 31, 0],
          "1f6d0": [["\u{1F6D0}"], "", "", ["place_of_worship"], 27, 13, 31, 0],
          "1f6d1": [["\u{1F6D1}"], "", "", ["octagonal_sign"], 27, 14, 31, 0],
          "1f6d2": [["\u{1F6D2}"], "", "", ["shopping_trolley"], 27, 15, 31, 0],
          "1f6e0": [["\u{1F6E0}"], "", "", ["hammer_and_wrench"], 27, 16, 31, 0],
          "1f6e1": [["\u{1F6E1}"], "", "", ["shield"], 27, 17, 31, 0],
          "1f6e2": [["\u{1F6E2}"], "", "", ["oil_drum"], 27, 18, 31, 0],
          "1f6e3": [["\u{1F6E3}"], "", "", ["motorway"], 27, 19, 31, 0],
          "1f6e4": [["\u{1F6E4}"], "", "", ["railway_track"], 27, 20, 31, 0],
          "1f6e5": [["\u{1F6E5}"], "", "", ["motor_boat"], 27, 21, 31, 0],
          "1f6e9": [["\u{1F6E9}"], "", "", ["small_airplane"], 27, 22, 31, 0],
          "1f6eb": [["\u{1F6EB}"], "", "", ["airplane_departure"], 27, 23, 31, 0],
          "1f6ec": [["\u{1F6EC}"], "", "", ["airplane_arriving"], 27, 24, 31, 0],
          "1f6f0": [["\u{1F6F0}"], "", "", ["satellite"], 27, 25, 31, 0],
          "1f6f3": [["\u{1F6F3}"], "", "", ["passenger_ship"], 27, 26, 31, 0],
          "1f6f4": [["\u{1F6F4}"], "", "", ["scooter"], 27, 27, 31, 0],
          "1f6f5": [["\u{1F6F5}"], "", "", ["motor_scooter"], 27, 28, 31, 0],
          "1f6f6": [["\u{1F6F6}"], "", "", ["canoe"], 27, 29, 31, 0],
          "1f910": [["\u{1F910}"], "", "", ["zipper_mouth_face"], 27, 30, 31, 0],
          "1f911": [["\u{1F911}"], "", "", ["money_mouth_face"], 27, 31, 31, 0],
          "1f912": [["\u{1F912}"], "", "", ["face_with_thermometer"], 27, 32, 31, 0],
          "1f913": [["\u{1F913}"], "", "", ["nerd_face"], 27, 33, 31, 0],
          "1f914": [["\u{1F914}"], "", "", ["thinking_face"], 27, 34, 31, 0],
          "1f915": [["\u{1F915}"], "", "", ["face_with_head_bandage"], 27, 35, 31, 0],
          "1f916": [["\u{1F916}"], "", "", ["robot_face"], 27, 36, 31, 0],
          "1f917": [["\u{1F917}"], "", "", ["hugging_face"], 27, 37, 31, 0],
          "1f918": [["\u{1F918}"], "", "", ["the_horns", "sign_of_the_horns"], 27, 38, 31, 0],
          "1f919": [["\u{1F919}"], "", "", ["call_me_hand"], 27, 44, 31, 0],
          "1f91a": [["\u{1F91A}"], "", "", ["raised_back_of_hand"], 28, 1, 31, 0],
          "1f91b": [["\u{1F91B}"], "", "", ["left-facing_fist"], 28, 7, 31, 0],
          "1f91c": [["\u{1F91C}"], "", "", ["right-facing_fist"], 28, 13, 31, 0],
          "1f91d": [["\u{1F91D}"], "", "", ["handshake"], 28, 19, 31, 0],
          "1f91e": [["\u{1F91E}"], "", "", ["hand_with_index_and_middle_fingers_crossed"], 28, 20, 31, 0],
          "1f920": [["\u{1F920}"], "", "", ["face_with_cowboy_hat"], 28, 26, 31, 0],
          "1f921": [["\u{1F921}"], "", "", ["clown_face"], 28, 27, 31, 0],
          "1f922": [["\u{1F922}"], "", "", ["nauseated_face"], 28, 28, 31, 0],
          "1f923": [["\u{1F923}"], "", "", ["rolling_on_the_floor_laughing"], 28, 29, 31, 0],
          "1f924": [["\u{1F924}"], "", "", ["drooling_face"], 28, 30, 31, 0],
          "1f925": [["\u{1F925}"], "", "", ["lying_face"], 28, 31, 31, 0],
          "1f926": [["\u{1F926}"], "", "", ["face_palm"], 28, 32, 31, 0],
          "1f927": [["\u{1F927}"], "", "", ["sneezing_face"], 28, 38, 31, 0],
          "1f930": [["\u{1F930}"], "", "", ["pregnant_woman"], 28, 39, 31, 0],
          "1f933": [["\u{1F933}"], "", "", ["selfie"], 28, 45, 31, 0],
          "1f934": [["\u{1F934}"], "", "", ["prince"], 29, 2, 31, 0],
          "1f935": [["\u{1F935}"], "", "", ["man_in_tuxedo"], 29, 8, 31, 0],
          "1f936": [["\u{1F936}"], "", "", ["mother_christmas"], 29, 14, 31, 0],
          "1f937": [["\u{1F937}"], "", "", ["shrug"], 29, 20, 31, 0],
          "1f938": [["\u{1F938}"], "", "", ["person_doing_cartwheel"], 29, 26, 31, 0],
          "1f939": [["\u{1F939}"], "", "", ["juggling"], 29, 32, 31, 0],
          "1f93a": [["\u{1F93A}"], "", "", ["fencer"], 29, 38, 31, 0],
          "1f93c": [["\u{1F93C}"], "", "", ["wrestlers"], 29, 39, 31, 0],
          "1f93d": [["\u{1F93D}"], "", "", ["water_polo"], 29, 40, 31, 0],
          "1f93e": [["\u{1F93E}"], "", "", ["handball"], 29, 46, 31, 0],
          "1f940": [["\u{1F940}"], "", "", ["wilted_flower"], 30, 3, 31, 0],
          "1f941": [["\u{1F941}"], "", "", ["drum_with_drumsticks"], 30, 4, 31, 0],
          "1f942": [["\u{1F942}"], "", "", ["clinking_glasses"], 30, 5, 31, 0],
          "1f943": [["\u{1F943}"], "", "", ["tumbler_glass"], 30, 6, 31, 0],
          "1f944": [["\u{1F944}"], "", "", ["spoon"], 30, 7, 31, 0],
          "1f945": [["\u{1F945}"], "", "", ["goal_net"], 30, 8, 31, 0],
          "1f947": [["\u{1F947}"], "", "", ["first_place_medal"], 30, 9, 31, 0],
          "1f948": [["\u{1F948}"], "", "", ["second_place_medal"], 30, 10, 31, 0],
          "1f949": [["\u{1F949}"], "", "", ["third_place_medal"], 30, 11, 31, 0],
          "1f94a": [["\u{1F94A}"], "", "", ["boxing_glove"], 30, 12, 31, 0],
          "1f94b": [["\u{1F94B}"], "", "", ["martial_arts_uniform"], 30, 13, 31, 0],
          "1f950": [["\u{1F950}"], "", "", ["croissant"], 30, 14, 31, 0],
          "1f951": [["\u{1F951}"], "", "", ["avocado"], 30, 15, 31, 0],
          "1f952": [["\u{1F952}"], "", "", ["cucumber"], 30, 16, 31, 0],
          "1f953": [["\u{1F953}"], "", "", ["bacon"], 30, 17, 31, 0],
          "1f954": [["\u{1F954}"], "", "", ["potato"], 30, 18, 31, 0],
          "1f955": [["\u{1F955}"], "", "", ["carrot"], 30, 19, 31, 0],
          "1f956": [["\u{1F956}"], "", "", ["baguette_bread"], 30, 20, 31, 0],
          "1f957": [["\u{1F957}"], "", "", ["green_salad"], 30, 21, 31, 0],
          "1f958": [["\u{1F958}"], "", "", ["shallow_pan_of_food"], 30, 22, 31, 0],
          "1f959": [["\u{1F959}"], "", "", ["stuffed_flatbread"], 30, 23, 31, 0],
          "1f95a": [["\u{1F95A}"], "", "", ["egg"], 30, 24, 31, 0],
          "1f95b": [["\u{1F95B}"], "", "", ["glass_of_milk"], 30, 25, 31, 0],
          "1f95c": [["\u{1F95C}"], "", "", ["peanuts"], 30, 26, 31, 0],
          "1f95d": [["\u{1F95D}"], "", "", ["kiwifruit"], 30, 27, 31, 0],
          "1f95e": [["\u{1F95E}"], "", "", ["pancakes"], 30, 28, 31, 0],
          "1f980": [["\u{1F980}"], "", "", ["crab"], 30, 29, 31, 0],
          "1f981": [["\u{1F981}"], "", "", ["lion_face"], 30, 30, 31, 0],
          "1f982": [["\u{1F982}"], "", "", ["scorpion"], 30, 31, 31, 0],
          "1f983": [["\u{1F983}"], "", "", ["turkey"], 30, 32, 31, 0],
          "1f984": [["\u{1F984}"], "", "", ["unicorn_face"], 30, 33, 31, 0],
          "1f985": [["\u{1F985}"], "", "", ["eagle"], 30, 34, 31, 0],
          "1f986": [["\u{1F986}"], "", "", ["duck"], 30, 35, 31, 0],
          "1f987": [["\u{1F987}"], "", "", ["bat"], 30, 36, 31, 0],
          "1f988": [["\u{1F988}"], "", "", ["shark"], 30, 37, 31, 0],
          "1f989": [["\u{1F989}"], "", "", ["owl"], 30, 38, 31, 0],
          "1f98a": [["\u{1F98A}"], "", "", ["fox_face"], 30, 39, 31, 0],
          "1f98b": [["\u{1F98B}"], "", "", ["butterfly"], 30, 40, 31, 0],
          "1f98c": [["\u{1F98C}"], "", "", ["deer"], 30, 41, 31, 0],
          "1f98d": [["\u{1F98D}"], "", "", ["gorilla"], 30, 42, 31, 0],
          "1f98e": [["\u{1F98E}"], "", "", ["lizard"], 30, 43, 31, 0],
          "1f98f": [["\u{1F98F}"], "", "", ["rhinoceros"], 30, 44, 31, 0],
          "1f990": [["\u{1F990}"], "", "", ["shrimp"], 30, 45, 31, 0],
          "1f991": [["\u{1F991}"], "", "", ["squid"], 30, 46, 31, 0],
          "1f9c0": [["\u{1F9C0}"], "", "", ["cheese_wedge"], 30, 47, 31, 0],
          "0023-20e3": [["#\uFE0F\u20E3", "#\u20E3"], "\uE210", "\u{FE82C}", ["hash"], 30, 48, 15, 0],
          "002a-20e3": [["*\uFE0F\u20E3", "*\u20E3"], "", "", ["keycap_star"], 31, 0, 15, 0],
          "0030-20e3": [["0\uFE0F\u20E3", "0\u20E3"], "\uE225", "\u{FE837}", ["zero"], 31, 1, 15, 0],
          "0031-20e3": [["1\uFE0F\u20E3", "1\u20E3"], "\uE21C", "\u{FE82E}", ["one"], 31, 2, 15, 0],
          "0032-20e3": [["2\uFE0F\u20E3", "2\u20E3"], "\uE21D", "\u{FE82F}", ["two"], 31, 3, 15, 0],
          "0033-20e3": [["3\uFE0F\u20E3", "3\u20E3"], "\uE21E", "\u{FE830}", ["three"], 31, 4, 15, 0],
          "0034-20e3": [["4\uFE0F\u20E3", "4\u20E3"], "\uE21F", "\u{FE831}", ["four"], 31, 5, 15, 0],
          "0035-20e3": [["5\uFE0F\u20E3", "5\u20E3"], "\uE220", "\u{FE832}", ["five"], 31, 6, 15, 0],
          "0036-20e3": [["6\uFE0F\u20E3", "6\u20E3"], "\uE221", "\u{FE833}", ["six"], 31, 7, 15, 0],
          "0037-20e3": [["7\uFE0F\u20E3", "7\u20E3"], "\uE222", "\u{FE834}", ["seven"], 31, 8, 15, 0],
          "0038-20e3": [["8\uFE0F\u20E3", "8\u20E3"], "\uE223", "\u{FE835}", ["eight"], 31, 9, 15, 0],
          "0039-20e3": [["9\uFE0F\u20E3", "9\u20E3"], "\uE224", "\u{FE836}", ["nine"], 31, 10, 15, 0],
          "1f1e6-1f1e8": [["\u{1F1E6}\u{1F1E8}"], "", "", ["flag-ac"], 31, 11, 63, 0],
          "1f1e6-1f1e9": [["\u{1F1E6}\u{1F1E9}"], "", "", ["flag-ad"], 31, 12, 63, 0],
          "1f1e6-1f1ea": [["\u{1F1E6}\u{1F1EA}"], "", "", ["flag-ae"], 31, 13, 63, 0],
          "1f1e6-1f1eb": [["\u{1F1E6}\u{1F1EB}"], "", "", ["flag-af"], 31, 14, 63, 0],
          "1f1e6-1f1ec": [["\u{1F1E6}\u{1F1EC}"], "", "", ["flag-ag"], 31, 15, 63, 0],
          "1f1e6-1f1ee": [["\u{1F1E6}\u{1F1EE}"], "", "", ["flag-ai"], 31, 16, 63, 0],
          "1f1e6-1f1f1": [["\u{1F1E6}\u{1F1F1}"], "", "", ["flag-al"], 31, 17, 63, 0],
          "1f1e6-1f1f2": [["\u{1F1E6}\u{1F1F2}"], "", "", ["flag-am"], 31, 18, 63, 0],
          "1f1e6-1f1f4": [["\u{1F1E6}\u{1F1F4}"], "", "", ["flag-ao"], 31, 19, 63, 0],
          "1f1e6-1f1f6": [["\u{1F1E6}\u{1F1F6}"], "", "", ["flag-aq"], 31, 20, 63, 0],
          "1f1e6-1f1f7": [["\u{1F1E6}\u{1F1F7}"], "", "", ["flag-ar"], 31, 21, 63, 0],
          "1f1e6-1f1f8": [["\u{1F1E6}\u{1F1F8}"], "", "", ["flag-as"], 31, 22, 63, 0],
          "1f1e6-1f1f9": [["\u{1F1E6}\u{1F1F9}"], "", "", ["flag-at"], 31, 23, 63, 0],
          "1f1e6-1f1fa": [["\u{1F1E6}\u{1F1FA}"], "", "", ["flag-au"], 31, 24, 63, 0],
          "1f1e6-1f1fc": [["\u{1F1E6}\u{1F1FC}"], "", "", ["flag-aw"], 31, 25, 63, 0],
          "1f1e6-1f1fd": [["\u{1F1E6}\u{1F1FD}"], "", "", ["flag-ax"], 31, 26, 63, 0],
          "1f1e6-1f1ff": [["\u{1F1E6}\u{1F1FF}"], "", "", ["flag-az"], 31, 27, 63, 0],
          "1f1e7-1f1e6": [["\u{1F1E7}\u{1F1E6}"], "", "", ["flag-ba"], 31, 28, 31, 0],
          "1f1e7-1f1e7": [["\u{1F1E7}\u{1F1E7}"], "", "", ["flag-bb"], 31, 29, 63, 0],
          "1f1e7-1f1e9": [["\u{1F1E7}\u{1F1E9}"], "", "", ["flag-bd"], 31, 30, 63, 0],
          "1f1e7-1f1ea": [["\u{1F1E7}\u{1F1EA}"], "", "", ["flag-be"], 31, 31, 63, 0],
          "1f1e7-1f1eb": [["\u{1F1E7}\u{1F1EB}"], "", "", ["flag-bf"], 31, 32, 63, 0],
          "1f1e7-1f1ec": [["\u{1F1E7}\u{1F1EC}"], "", "", ["flag-bg"], 31, 33, 63, 0],
          "1f1e7-1f1ed": [["\u{1F1E7}\u{1F1ED}"], "", "", ["flag-bh"], 31, 34, 63, 0],
          "1f1e7-1f1ee": [["\u{1F1E7}\u{1F1EE}"], "", "", ["flag-bi"], 31, 35, 63, 0],
          "1f1e7-1f1ef": [["\u{1F1E7}\u{1F1EF}"], "", "", ["flag-bj"], 31, 36, 63, 0],
          "1f1e7-1f1f1": [["\u{1F1E7}\u{1F1F1}"], "", "", ["flag-bl"], 31, 37, 61, 0],
          "1f1e7-1f1f2": [["\u{1F1E7}\u{1F1F2}"], "", "", ["flag-bm"], 31, 38, 63, 0],
          "1f1e7-1f1f3": [["\u{1F1E7}\u{1F1F3}"], "", "", ["flag-bn"], 31, 39, 31, 0],
          "1f1e7-1f1f4": [["\u{1F1E7}\u{1F1F4}"], "", "", ["flag-bo"], 31, 40, 63, 0],
          "1f1e7-1f1f6": [["\u{1F1E7}\u{1F1F6}"], "", "", ["flag-bq"], 31, 41, 61, 0],
          "1f1e7-1f1f7": [["\u{1F1E7}\u{1F1F7}"], "", "", ["flag-br"], 31, 42, 63, 0],
          "1f1e7-1f1f8": [["\u{1F1E7}\u{1F1F8}"], "", "", ["flag-bs"], 31, 43, 63, 0],
          "1f1e7-1f1f9": [["\u{1F1E7}\u{1F1F9}"], "", "", ["flag-bt"], 31, 44, 63, 0],
          "1f1e7-1f1fb": [["\u{1F1E7}\u{1F1FB}"], "", "", ["flag-bv"], 31, 45, 61, 0],
          "1f1e7-1f1fc": [["\u{1F1E7}\u{1F1FC}"], "", "", ["flag-bw"], 31, 46, 63, 0],
          "1f1e7-1f1fe": [["\u{1F1E7}\u{1F1FE}"], "", "", ["flag-by"], 31, 47, 63, 0],
          "1f1e7-1f1ff": [["\u{1F1E7}\u{1F1FF}"], "", "", ["flag-bz"], 31, 48, 63, 0],
          "1f1e8-1f1e6": [["\u{1F1E8}\u{1F1E6}"], "", "", ["flag-ca"], 32, 0, 63, 0],
          "1f1e8-1f1e8": [["\u{1F1E8}\u{1F1E8}"], "", "", ["flag-cc"], 32, 1, 63, 0],
          "1f1e8-1f1e9": [["\u{1F1E8}\u{1F1E9}"], "", "", ["flag-cd"], 32, 2, 63, 0],
          "1f1e8-1f1eb": [["\u{1F1E8}\u{1F1EB}"], "", "", ["flag-cf"], 32, 3, 63, 0],
          "1f1e8-1f1ec": [["\u{1F1E8}\u{1F1EC}"], "", "", ["flag-cg"], 32, 4, 63, 0],
          "1f1e8-1f1ed": [["\u{1F1E8}\u{1F1ED}"], "", "", ["flag-ch"], 32, 5, 63, 0],
          "1f1e8-1f1ee": [["\u{1F1E8}\u{1F1EE}"], "", "", ["flag-ci"], 32, 6, 63, 0],
          "1f1e8-1f1f0": [["\u{1F1E8}\u{1F1F0}"], "", "", ["flag-ck"], 32, 7, 63, 0],
          "1f1e8-1f1f1": [["\u{1F1E8}\u{1F1F1}"], "", "", ["flag-cl"], 32, 8, 63, 0],
          "1f1e8-1f1f2": [["\u{1F1E8}\u{1F1F2}"], "", "", ["flag-cm"], 32, 9, 63, 0],
          "1f1e8-1f1f3": [["\u{1F1E8}\u{1F1F3}"], "\uE513", "\u{FE4ED}", ["flag-cn", "cn"], 32, 10, 63, 0],
          "1f1e8-1f1f4": [["\u{1F1E8}\u{1F1F4}"], "", "", ["flag-co"], 32, 11, 63, 0],
          "1f1e8-1f1f5": [["\u{1F1E8}\u{1F1F5}"], "", "", ["flag-cp"], 32, 12, 29, 0],
          "1f1e8-1f1f7": [["\u{1F1E8}\u{1F1F7}"], "", "", ["flag-cr"], 32, 13, 63, 0],
          "1f1e8-1f1fa": [["\u{1F1E8}\u{1F1FA}"], "", "", ["flag-cu"], 32, 14, 63, 0],
          "1f1e8-1f1fb": [["\u{1F1E8}\u{1F1FB}"], "", "", ["flag-cv"], 32, 15, 63, 0],
          "1f1e8-1f1fc": [["\u{1F1E8}\u{1F1FC}"], "", "", ["flag-cw"], 32, 16, 63, 0],
          "1f1e8-1f1fd": [["\u{1F1E8}\u{1F1FD}"], "", "", ["flag-cx"], 32, 17, 63, 0],
          "1f1e8-1f1fe": [["\u{1F1E8}\u{1F1FE}"], "", "", ["flag-cy"], 32, 18, 63, 0],
          "1f1e8-1f1ff": [["\u{1F1E8}\u{1F1FF}"], "", "", ["flag-cz"], 32, 19, 63, 0],
          "1f1e9-1f1ea": [["\u{1F1E9}\u{1F1EA}"], "\uE50E", "\u{FE4E8}", ["flag-de", "de"], 32, 20, 63, 0],
          "1f1e9-1f1ec": [["\u{1F1E9}\u{1F1EC}"], "", "", ["flag-dg"], 32, 21, 61, 0],
          "1f1e9-1f1ef": [["\u{1F1E9}\u{1F1EF}"], "", "", ["flag-dj"], 32, 22, 63, 0],
          "1f1e9-1f1f0": [["\u{1F1E9}\u{1F1F0}"], "", "", ["flag-dk"], 32, 23, 63, 0],
          "1f1e9-1f1f2": [["\u{1F1E9}\u{1F1F2}"], "", "", ["flag-dm"], 32, 24, 63, 0],
          "1f1e9-1f1f4": [["\u{1F1E9}\u{1F1F4}"], "", "", ["flag-do"], 32, 25, 63, 0],
          "1f1e9-1f1ff": [["\u{1F1E9}\u{1F1FF}"], "", "", ["flag-dz"], 32, 26, 63, 0],
          "1f1ea-1f1e6": [["\u{1F1EA}\u{1F1E6}"], "", "", ["flag-ea"], 32, 27, 61, 0],
          "1f1ea-1f1e8": [["\u{1F1EA}\u{1F1E8}"], "", "", ["flag-ec"], 32, 28, 63, 0],
          "1f1ea-1f1ea": [["\u{1F1EA}\u{1F1EA}"], "", "", ["flag-ee"], 32, 29, 63, 0],
          "1f1ea-1f1ec": [["\u{1F1EA}\u{1F1EC}"], "", "", ["flag-eg"], 32, 30, 63, 0],
          "1f1ea-1f1ed": [["\u{1F1EA}\u{1F1ED}"], "", "", ["flag-eh"], 32, 31, 61, 0],
          "1f1ea-1f1f7": [["\u{1F1EA}\u{1F1F7}"], "", "", ["flag-er"], 32, 32, 63, 0],
          "1f1ea-1f1f8": [["\u{1F1EA}\u{1F1F8}"], "\uE511", "\u{FE4EB}", ["flag-es", "es"], 32, 33, 63, 0],
          "1f1ea-1f1f9": [["\u{1F1EA}\u{1F1F9}"], "", "", ["flag-et"], 32, 34, 63, 0],
          "1f1ea-1f1fa": [["\u{1F1EA}\u{1F1FA}"], "", "", ["flag-eu"], 32, 35, 63, 0],
          "1f1eb-1f1ee": [["\u{1F1EB}\u{1F1EE}"], "", "", ["flag-fi"], 32, 36, 63, 0],
          "1f1eb-1f1ef": [["\u{1F1EB}\u{1F1EF}"], "", "", ["flag-fj"], 32, 37, 63, 0],
          "1f1eb-1f1f0": [["\u{1F1EB}\u{1F1F0}"], "", "", ["flag-fk"], 32, 38, 61, 0],
          "1f1eb-1f1f2": [["\u{1F1EB}\u{1F1F2}"], "", "", ["flag-fm"], 32, 39, 63, 0],
          "1f1eb-1f1f4": [["\u{1F1EB}\u{1F1F4}"], "", "", ["flag-fo"], 32, 40, 63, 0],
          "1f1eb-1f1f7": [["\u{1F1EB}\u{1F1F7}"], "\uE50D", "\u{FE4E7}", ["flag-fr", "fr"], 32, 41, 63, 0],
          "1f1ec-1f1e6": [["\u{1F1EC}\u{1F1E6}"], "", "", ["flag-ga"], 32, 42, 63, 0],
          "1f1ec-1f1e7": [["\u{1F1EC}\u{1F1E7}"], "\uE510", "\u{FE4EA}", ["flag-gb", "gb", "uk"], 32, 43, 63, 0],
          "1f1ec-1f1e9": [["\u{1F1EC}\u{1F1E9}"], "", "", ["flag-gd"], 32, 44, 63, 0],
          "1f1ec-1f1ea": [["\u{1F1EC}\u{1F1EA}"], "", "", ["flag-ge"], 32, 45, 63, 0],
          "1f1ec-1f1eb": [["\u{1F1EC}\u{1F1EB}"], "", "", ["flag-gf"], 32, 46, 61, 0],
          "1f1ec-1f1ec": [["\u{1F1EC}\u{1F1EC}"], "", "", ["flag-gg"], 32, 47, 63, 0],
          "1f1ec-1f1ed": [["\u{1F1EC}\u{1F1ED}"], "", "", ["flag-gh"], 32, 48, 63, 0],
          "1f1ec-1f1ee": [["\u{1F1EC}\u{1F1EE}"], "", "", ["flag-gi"], 33, 0, 63, 0],
          "1f1ec-1f1f1": [["\u{1F1EC}\u{1F1F1}"], "", "", ["flag-gl"], 33, 1, 63, 0],
          "1f1ec-1f1f2": [["\u{1F1EC}\u{1F1F2}"], "", "", ["flag-gm"], 33, 2, 63, 0],
          "1f1ec-1f1f3": [["\u{1F1EC}\u{1F1F3}"], "", "", ["flag-gn"], 33, 3, 63, 0],
          "1f1ec-1f1f5": [["\u{1F1EC}\u{1F1F5}"], "", "", ["flag-gp"], 33, 4, 61, 0],
          "1f1ec-1f1f6": [["\u{1F1EC}\u{1F1F6}"], "", "", ["flag-gq"], 33, 5, 63, 0],
          "1f1ec-1f1f7": [["\u{1F1EC}\u{1F1F7}"], "", "", ["flag-gr"], 33, 6, 63, 0],
          "1f1ec-1f1f8": [["\u{1F1EC}\u{1F1F8}"], "", "", ["flag-gs"], 33, 7, 61, 0],
          "1f1ec-1f1f9": [["\u{1F1EC}\u{1F1F9}"], "", "", ["flag-gt"], 33, 8, 63, 0],
          "1f1ec-1f1fa": [["\u{1F1EC}\u{1F1FA}"], "", "", ["flag-gu"], 33, 9, 63, 0],
          "1f1ec-1f1fc": [["\u{1F1EC}\u{1F1FC}"], "", "", ["flag-gw"], 33, 10, 63, 0],
          "1f1ec-1f1fe": [["\u{1F1EC}\u{1F1FE}"], "", "", ["flag-gy"], 33, 11, 63, 0],
          "1f1ed-1f1f0": [["\u{1F1ED}\u{1F1F0}"], "", "", ["flag-hk"], 33, 12, 63, 0],
          "1f1ed-1f1f2": [["\u{1F1ED}\u{1F1F2}"], "", "", ["flag-hm"], 33, 13, 61, 0],
          "1f1ed-1f1f3": [["\u{1F1ED}\u{1F1F3}"], "", "", ["flag-hn"], 33, 14, 63, 0],
          "1f1ed-1f1f7": [["\u{1F1ED}\u{1F1F7}"], "", "", ["flag-hr"], 33, 15, 63, 0],
          "1f1ed-1f1f9": [["\u{1F1ED}\u{1F1F9}"], "", "", ["flag-ht"], 33, 16, 63, 0],
          "1f1ed-1f1fa": [["\u{1F1ED}\u{1F1FA}"], "", "", ["flag-hu"], 33, 17, 63, 0],
          "1f1ee-1f1e8": [["\u{1F1EE}\u{1F1E8}"], "", "", ["flag-ic"], 33, 18, 63, 0],
          "1f1ee-1f1e9": [["\u{1F1EE}\u{1F1E9}"], "", "", ["flag-id"], 33, 19, 63, 0],
          "1f1ee-1f1ea": [["\u{1F1EE}\u{1F1EA}"], "", "", ["flag-ie"], 33, 20, 63, 0],
          "1f1ee-1f1f1": [["\u{1F1EE}\u{1F1F1}"], "", "", ["flag-il"], 33, 21, 63, 0],
          "1f1ee-1f1f2": [["\u{1F1EE}\u{1F1F2}"], "", "", ["flag-im"], 33, 22, 63, 0],
          "1f1ee-1f1f3": [["\u{1F1EE}\u{1F1F3}"], "", "", ["flag-in"], 33, 23, 63, 0],
          "1f1ee-1f1f4": [["\u{1F1EE}\u{1F1F4}"], "", "", ["flag-io"], 33, 24, 63, 0],
          "1f1ee-1f1f6": [["\u{1F1EE}\u{1F1F6}"], "", "", ["flag-iq"], 33, 25, 63, 0],
          "1f1ee-1f1f7": [["\u{1F1EE}\u{1F1F7}"], "", "", ["flag-ir"], 33, 26, 63, 0],
          "1f1ee-1f1f8": [["\u{1F1EE}\u{1F1F8}"], "", "", ["flag-is"], 33, 27, 63, 0],
          "1f1ee-1f1f9": [["\u{1F1EE}\u{1F1F9}"], "\uE50F", "\u{FE4E9}", ["flag-it", "it"], 33, 28, 63, 0],
          "1f1ef-1f1ea": [["\u{1F1EF}\u{1F1EA}"], "", "", ["flag-je"], 33, 29, 63, 0],
          "1f1ef-1f1f2": [["\u{1F1EF}\u{1F1F2}"], "", "", ["flag-jm"], 33, 30, 63, 0],
          "1f1ef-1f1f4": [["\u{1F1EF}\u{1F1F4}"], "", "", ["flag-jo"], 33, 31, 63, 0],
          "1f1ef-1f1f5": [["\u{1F1EF}\u{1F1F5}"], "\uE50B", "\u{FE4E5}", ["flag-jp", "jp"], 33, 32, 63, 0],
          "1f1f0-1f1ea": [["\u{1F1F0}\u{1F1EA}"], "", "", ["flag-ke"], 33, 33, 63, 0],
          "1f1f0-1f1ec": [["\u{1F1F0}\u{1F1EC}"], "", "", ["flag-kg"], 33, 34, 63, 0],
          "1f1f0-1f1ed": [["\u{1F1F0}\u{1F1ED}"], "", "", ["flag-kh"], 33, 35, 63, 0],
          "1f1f0-1f1ee": [["\u{1F1F0}\u{1F1EE}"], "", "", ["flag-ki"], 33, 36, 63, 0],
          "1f1f0-1f1f2": [["\u{1F1F0}\u{1F1F2}"], "", "", ["flag-km"], 33, 37, 63, 0],
          "1f1f0-1f1f3": [["\u{1F1F0}\u{1F1F3}"], "", "", ["flag-kn"], 33, 38, 63, 0],
          "1f1f0-1f1f5": [["\u{1F1F0}\u{1F1F5}"], "", "", ["flag-kp"], 33, 39, 63, 0],
          "1f1f0-1f1f7": [["\u{1F1F0}\u{1F1F7}"], "\uE514", "\u{FE4EE}", ["flag-kr", "kr"], 33, 40, 63, 0],
          "1f1f0-1f1fc": [["\u{1F1F0}\u{1F1FC}"], "", "", ["flag-kw"], 33, 41, 63, 0],
          "1f1f0-1f1fe": [["\u{1F1F0}\u{1F1FE}"], "", "", ["flag-ky"], 33, 42, 63, 0],
          "1f1f0-1f1ff": [["\u{1F1F0}\u{1F1FF}"], "", "", ["flag-kz"], 33, 43, 63, 0],
          "1f1f1-1f1e6": [["\u{1F1F1}\u{1F1E6}"], "", "", ["flag-la"], 33, 44, 63, 0],
          "1f1f1-1f1e7": [["\u{1F1F1}\u{1F1E7}"], "", "", ["flag-lb"], 33, 45, 63, 0],
          "1f1f1-1f1e8": [["\u{1F1F1}\u{1F1E8}"], "", "", ["flag-lc"], 33, 46, 63, 0],
          "1f1f1-1f1ee": [["\u{1F1F1}\u{1F1EE}"], "", "", ["flag-li"], 33, 47, 63, 0],
          "1f1f1-1f1f0": [["\u{1F1F1}\u{1F1F0}"], "", "", ["flag-lk"], 33, 48, 63, 0],
          "1f1f1-1f1f7": [["\u{1F1F1}\u{1F1F7}"], "", "", ["flag-lr"], 34, 0, 63, 0],
          "1f1f1-1f1f8": [["\u{1F1F1}\u{1F1F8}"], "", "", ["flag-ls"], 34, 1, 63, 0],
          "1f1f1-1f1f9": [["\u{1F1F1}\u{1F1F9}"], "", "", ["flag-lt"], 34, 2, 63, 0],
          "1f1f1-1f1fa": [["\u{1F1F1}\u{1F1FA}"], "", "", ["flag-lu"], 34, 3, 63, 0],
          "1f1f1-1f1fb": [["\u{1F1F1}\u{1F1FB}"], "", "", ["flag-lv"], 34, 4, 63, 0],
          "1f1f1-1f1fe": [["\u{1F1F1}\u{1F1FE}"], "", "", ["flag-ly"], 34, 5, 63, 0],
          "1f1f2-1f1e6": [["\u{1F1F2}\u{1F1E6}"], "", "", ["flag-ma"], 34, 6, 63, 0],
          "1f1f2-1f1e8": [["\u{1F1F2}\u{1F1E8}"], "", "", ["flag-mc"], 34, 7, 63, 0],
          "1f1f2-1f1e9": [["\u{1F1F2}\u{1F1E9}"], "", "", ["flag-md"], 34, 8, 63, 0],
          "1f1f2-1f1ea": [["\u{1F1F2}\u{1F1EA}"], "", "", ["flag-me"], 34, 9, 63, 0],
          "1f1f2-1f1eb": [["\u{1F1F2}\u{1F1EB}"], "", "", ["flag-mf"], 34, 10, 61, 0],
          "1f1f2-1f1ec": [["\u{1F1F2}\u{1F1EC}"], "", "", ["flag-mg"], 34, 11, 63, 0],
          "1f1f2-1f1ed": [["\u{1F1F2}\u{1F1ED}"], "", "", ["flag-mh"], 34, 12, 63, 0],
          "1f1f2-1f1f0": [["\u{1F1F2}\u{1F1F0}"], "", "", ["flag-mk"], 34, 13, 63, 0],
          "1f1f2-1f1f1": [["\u{1F1F2}\u{1F1F1}"], "", "", ["flag-ml"], 34, 14, 63, 0],
          "1f1f2-1f1f2": [["\u{1F1F2}\u{1F1F2}"], "", "", ["flag-mm"], 34, 15, 63, 0],
          "1f1f2-1f1f3": [["\u{1F1F2}\u{1F1F3}"], "", "", ["flag-mn"], 34, 16, 63, 0],
          "1f1f2-1f1f4": [["\u{1F1F2}\u{1F1F4}"], "", "", ["flag-mo"], 34, 17, 63, 0],
          "1f1f2-1f1f5": [["\u{1F1F2}\u{1F1F5}"], "", "", ["flag-mp"], 34, 18, 63, 0],
          "1f1f2-1f1f6": [["\u{1F1F2}\u{1F1F6}"], "", "", ["flag-mq"], 34, 19, 61, 0],
          "1f1f2-1f1f7": [["\u{1F1F2}\u{1F1F7}"], "", "", ["flag-mr"], 34, 20, 63, 0],
          "1f1f2-1f1f8": [["\u{1F1F2}\u{1F1F8}"], "", "", ["flag-ms"], 34, 21, 63, 0],
          "1f1f2-1f1f9": [["\u{1F1F2}\u{1F1F9}"], "", "", ["flag-mt"], 34, 22, 63, 0],
          "1f1f2-1f1fa": [["\u{1F1F2}\u{1F1FA}"], "", "", ["flag-mu"], 34, 23, 63, 0],
          "1f1f2-1f1fb": [["\u{1F1F2}\u{1F1FB}"], "", "", ["flag-mv"], 34, 24, 63, 0],
          "1f1f2-1f1fc": [["\u{1F1F2}\u{1F1FC}"], "", "", ["flag-mw"], 34, 25, 63, 0],
          "1f1f2-1f1fd": [["\u{1F1F2}\u{1F1FD}"], "", "", ["flag-mx"], 34, 26, 63, 0],
          "1f1f2-1f1fe": [["\u{1F1F2}\u{1F1FE}"], "", "", ["flag-my"], 34, 27, 63, 0],
          "1f1f2-1f1ff": [["\u{1F1F2}\u{1F1FF}"], "", "", ["flag-mz"], 34, 28, 63, 0],
          "1f1f3-1f1e6": [["\u{1F1F3}\u{1F1E6}"], "", "", ["flag-na"], 34, 29, 63, 0],
          "1f1f3-1f1e8": [["\u{1F1F3}\u{1F1E8}"], "", "", ["flag-nc"], 34, 30, 61, 0],
          "1f1f3-1f1ea": [["\u{1F1F3}\u{1F1EA}"], "", "", ["flag-ne"], 34, 31, 63, 0],
          "1f1f3-1f1eb": [["\u{1F1F3}\u{1F1EB}"], "", "", ["flag-nf"], 34, 32, 63, 0],
          "1f1f3-1f1ec": [["\u{1F1F3}\u{1F1EC}"], "", "", ["flag-ng"], 34, 33, 63, 0],
          "1f1f3-1f1ee": [["\u{1F1F3}\u{1F1EE}"], "", "", ["flag-ni"], 34, 34, 63, 0],
          "1f1f3-1f1f1": [["\u{1F1F3}\u{1F1F1}"], "", "", ["flag-nl"], 34, 35, 63, 0],
          "1f1f3-1f1f4": [["\u{1F1F3}\u{1F1F4}"], "", "", ["flag-no"], 34, 36, 63, 0],
          "1f1f3-1f1f5": [["\u{1F1F3}\u{1F1F5}"], "", "", ["flag-np"], 34, 37, 63, 0],
          "1f1f3-1f1f7": [["\u{1F1F3}\u{1F1F7}"], "", "", ["flag-nr"], 34, 38, 63, 0],
          "1f1f3-1f1fa": [["\u{1F1F3}\u{1F1FA}"], "", "", ["flag-nu"], 34, 39, 63, 0],
          "1f1f3-1f1ff": [["\u{1F1F3}\u{1F1FF}"], "", "", ["flag-nz"], 34, 40, 63, 0],
          "1f1f4-1f1f2": [["\u{1F1F4}\u{1F1F2}"], "", "", ["flag-om"], 34, 41, 63, 0],
          "1f1f5-1f1e6": [["\u{1F1F5}\u{1F1E6}"], "", "", ["flag-pa"], 34, 42, 63, 0],
          "1f1f5-1f1ea": [["\u{1F1F5}\u{1F1EA}"], "", "", ["flag-pe"], 34, 43, 63, 0],
          "1f1f5-1f1eb": [["\u{1F1F5}\u{1F1EB}"], "", "", ["flag-pf"], 34, 44, 63, 0],
          "1f1f5-1f1ec": [["\u{1F1F5}\u{1F1EC}"], "", "", ["flag-pg"], 34, 45, 63, 0],
          "1f1f5-1f1ed": [["\u{1F1F5}\u{1F1ED}"], "", "", ["flag-ph"], 34, 46, 63, 0],
          "1f1f5-1f1f0": [["\u{1F1F5}\u{1F1F0}"], "", "", ["flag-pk"], 34, 47, 63, 0],
          "1f1f5-1f1f1": [["\u{1F1F5}\u{1F1F1}"], "", "", ["flag-pl"], 34, 48, 63, 0],
          "1f1f5-1f1f2": [["\u{1F1F5}\u{1F1F2}"], "", "", ["flag-pm"], 35, 0, 61, 0],
          "1f1f5-1f1f3": [["\u{1F1F5}\u{1F1F3}"], "", "", ["flag-pn"], 35, 1, 63, 0],
          "1f1f5-1f1f7": [["\u{1F1F5}\u{1F1F7}"], "", "", ["flag-pr"], 35, 2, 63, 0],
          "1f1f5-1f1f8": [["\u{1F1F5}\u{1F1F8}"], "", "", ["flag-ps"], 35, 3, 63, 0],
          "1f1f5-1f1f9": [["\u{1F1F5}\u{1F1F9}"], "", "", ["flag-pt"], 35, 4, 63, 0],
          "1f1f5-1f1fc": [["\u{1F1F5}\u{1F1FC}"], "", "", ["flag-pw"], 35, 5, 63, 0],
          "1f1f5-1f1fe": [["\u{1F1F5}\u{1F1FE}"], "", "", ["flag-py"], 35, 6, 63, 0],
          "1f1f6-1f1e6": [["\u{1F1F6}\u{1F1E6}"], "", "", ["flag-qa"], 35, 7, 63, 0],
          "1f1f7-1f1ea": [["\u{1F1F7}\u{1F1EA}"], "", "", ["flag-re"], 35, 8, 61, 0],
          "1f1f7-1f1f4": [["\u{1F1F7}\u{1F1F4}"], "", "", ["flag-ro"], 35, 9, 63, 0],
          "1f1f7-1f1f8": [["\u{1F1F7}\u{1F1F8}"], "", "", ["flag-rs"], 35, 10, 63, 0],
          "1f1f7-1f1fa": [["\u{1F1F7}\u{1F1FA}"], "\uE512", "\u{FE4EC}", ["flag-ru", "ru"], 35, 11, 63, 0],
          "1f1f7-1f1fc": [["\u{1F1F7}\u{1F1FC}"], "", "", ["flag-rw"], 35, 12, 63, 0],
          "1f1f8-1f1e6": [["\u{1F1F8}\u{1F1E6}"], "", "", ["flag-sa"], 35, 13, 63, 0],
          "1f1f8-1f1e7": [["\u{1F1F8}\u{1F1E7}"], "", "", ["flag-sb"], 35, 14, 63, 0],
          "1f1f8-1f1e8": [["\u{1F1F8}\u{1F1E8}"], "", "", ["flag-sc"], 35, 15, 63, 0],
          "1f1f8-1f1e9": [["\u{1F1F8}\u{1F1E9}"], "", "", ["flag-sd"], 35, 16, 63, 0],
          "1f1f8-1f1ea": [["\u{1F1F8}\u{1F1EA}"], "", "", ["flag-se"], 35, 17, 63, 0],
          "1f1f8-1f1ec": [["\u{1F1F8}\u{1F1EC}"], "", "", ["flag-sg"], 35, 18, 63, 0],
          "1f1f8-1f1ed": [["\u{1F1F8}\u{1F1ED}"], "", "", ["flag-sh"], 35, 19, 63, 0],
          "1f1f8-1f1ee": [["\u{1F1F8}\u{1F1EE}"], "", "", ["flag-si"], 35, 20, 63, 0],
          "1f1f8-1f1ef": [["\u{1F1F8}\u{1F1EF}"], "", "", ["flag-sj"], 35, 21, 61, 0],
          "1f1f8-1f1f0": [["\u{1F1F8}\u{1F1F0}"], "", "", ["flag-sk"], 35, 22, 63, 0],
          "1f1f8-1f1f1": [["\u{1F1F8}\u{1F1F1}"], "", "", ["flag-sl"], 35, 23, 63, 0],
          "1f1f8-1f1f2": [["\u{1F1F8}\u{1F1F2}"], "", "", ["flag-sm"], 35, 24, 63, 0],
          "1f1f8-1f1f3": [["\u{1F1F8}\u{1F1F3}"], "", "", ["flag-sn"], 35, 25, 63, 0],
          "1f1f8-1f1f4": [["\u{1F1F8}\u{1F1F4}"], "", "", ["flag-so"], 35, 26, 63, 0],
          "1f1f8-1f1f7": [["\u{1F1F8}\u{1F1F7}"], "", "", ["flag-sr"], 35, 27, 63, 0],
          "1f1f8-1f1f8": [["\u{1F1F8}\u{1F1F8}"], "", "", ["flag-ss"], 35, 28, 63, 0],
          "1f1f8-1f1f9": [["\u{1F1F8}\u{1F1F9}"], "", "", ["flag-st"], 35, 29, 63, 0],
          "1f1f8-1f1fb": [["\u{1F1F8}\u{1F1FB}"], "", "", ["flag-sv"], 35, 30, 63, 0],
          "1f1f8-1f1fd": [["\u{1F1F8}\u{1F1FD}"], "", "", ["flag-sx"], 35, 31, 63, 0],
          "1f1f8-1f1fe": [["\u{1F1F8}\u{1F1FE}"], "", "", ["flag-sy"], 35, 32, 63, 0],
          "1f1f8-1f1ff": [["\u{1F1F8}\u{1F1FF}"], "", "", ["flag-sz"], 35, 33, 63, 0],
          "1f1f9-1f1e6": [["\u{1F1F9}\u{1F1E6}"], "", "", ["flag-ta"], 35, 34, 63, 0],
          "1f1f9-1f1e8": [["\u{1F1F9}\u{1F1E8}"], "", "", ["flag-tc"], 35, 35, 63, 0],
          "1f1f9-1f1e9": [["\u{1F1F9}\u{1F1E9}"], "", "", ["flag-td"], 35, 36, 63, 0],
          "1f1f9-1f1eb": [["\u{1F1F9}\u{1F1EB}"], "", "", ["flag-tf"], 35, 37, 61, 0],
          "1f1f9-1f1ec": [["\u{1F1F9}\u{1F1EC}"], "", "", ["flag-tg"], 35, 38, 63, 0],
          "1f1f9-1f1ed": [["\u{1F1F9}\u{1F1ED}"], "", "", ["flag-th"], 35, 39, 63, 0],
          "1f1f9-1f1ef": [["\u{1F1F9}\u{1F1EF}"], "", "", ["flag-tj"], 35, 40, 63, 0],
          "1f1f9-1f1f0": [["\u{1F1F9}\u{1F1F0}"], "", "", ["flag-tk"], 35, 41, 63, 0],
          "1f1f9-1f1f1": [["\u{1F1F9}\u{1F1F1}"], "", "", ["flag-tl"], 35, 42, 63, 0],
          "1f1f9-1f1f2": [["\u{1F1F9}\u{1F1F2}"], "", "", ["flag-tm"], 35, 43, 63, 0],
          "1f1f9-1f1f3": [["\u{1F1F9}\u{1F1F3}"], "", "", ["flag-tn"], 35, 44, 63, 0],
          "1f1f9-1f1f4": [["\u{1F1F9}\u{1F1F4}"], "", "", ["flag-to"], 35, 45, 63, 0],
          "1f1f9-1f1f7": [["\u{1F1F9}\u{1F1F7}"], "", "", ["flag-tr"], 35, 46, 63, 0],
          "1f1f9-1f1f9": [["\u{1F1F9}\u{1F1F9}"], "", "", ["flag-tt"], 35, 47, 63, 0],
          "1f1f9-1f1fb": [["\u{1F1F9}\u{1F1FB}"], "", "", ["flag-tv"], 35, 48, 63, 0],
          "1f1f9-1f1fc": [["\u{1F1F9}\u{1F1FC}"], "", "", ["flag-tw"], 36, 0, 63, 0],
          "1f1f9-1f1ff": [["\u{1F1F9}\u{1F1FF}"], "", "", ["flag-tz"], 36, 1, 63, 0],
          "1f1fa-1f1e6": [["\u{1F1FA}\u{1F1E6}"], "", "", ["flag-ua"], 36, 2, 63, 0],
          "1f1fa-1f1ec": [["\u{1F1FA}\u{1F1EC}"], "", "", ["flag-ug"], 36, 3, 63, 0],
          "1f1fa-1f1f2": [["\u{1F1FA}\u{1F1F2}"], "", "", ["flag-um"], 36, 4, 61, 0],
          "1f1fa-1f1f3": [["\u{1F1FA}\u{1F1F3}"], "", "", ["flag-un"], 36, 5, 6, 0],
          "1f1fa-1f1f8": [["\u{1F1FA}\u{1F1F8}"], "\uE50C", "\u{FE4E6}", ["flag-us", "us"], 36, 6, 63, 0],
          "1f1fa-1f1fe": [["\u{1F1FA}\u{1F1FE}"], "", "", ["flag-uy"], 36, 7, 63, 0],
          "1f1fa-1f1ff": [["\u{1F1FA}\u{1F1FF}"], "", "", ["flag-uz"], 36, 8, 63, 0],
          "1f1fb-1f1e6": [["\u{1F1FB}\u{1F1E6}"], "", "", ["flag-va"], 36, 9, 63, 0],
          "1f1fb-1f1e8": [["\u{1F1FB}\u{1F1E8}"], "", "", ["flag-vc"], 36, 10, 63, 0],
          "1f1fb-1f1ea": [["\u{1F1FB}\u{1F1EA}"], "", "", ["flag-ve"], 36, 11, 63, 0],
          "1f1fb-1f1ec": [["\u{1F1FB}\u{1F1EC}"], "", "", ["flag-vg"], 36, 12, 63, 0],
          "1f1fb-1f1ee": [["\u{1F1FB}\u{1F1EE}"], "", "", ["flag-vi"], 36, 13, 63, 0],
          "1f1fb-1f1f3": [["\u{1F1FB}\u{1F1F3}"], "", "", ["flag-vn"], 36, 14, 63, 0],
          "1f1fb-1f1fa": [["\u{1F1FB}\u{1F1FA}"], "", "", ["flag-vu"], 36, 15, 63, 0],
          "1f1fc-1f1eb": [["\u{1F1FC}\u{1F1EB}"], "", "", ["flag-wf"], 36, 16, 61, 0],
          "1f1fc-1f1f8": [["\u{1F1FC}\u{1F1F8}"], "", "", ["flag-ws"], 36, 17, 63, 0],
          "1f1fd-1f1f0": [["\u{1F1FD}\u{1F1F0}"], "", "", ["flag-xk"], 36, 18, 61, 0],
          "1f1fe-1f1ea": [["\u{1F1FE}\u{1F1EA}"], "", "", ["flag-ye"], 36, 19, 63, 0],
          "1f1fe-1f1f9": [["\u{1F1FE}\u{1F1F9}"], "", "", ["flag-yt"], 36, 20, 61, 0],
          "1f1ff-1f1e6": [["\u{1F1FF}\u{1F1E6}"], "", "", ["flag-za"], 36, 21, 63, 0],
          "1f1ff-1f1f2": [["\u{1F1FF}\u{1F1F2}"], "", "", ["flag-zm"], 36, 22, 63, 0],
          "1f1ff-1f1fc": [["\u{1F1FF}\u{1F1FC}"], "", "", ["flag-zw"], 36, 23, 63, 0],
          "1f468-200d-1f33e": [["\u{1F468}\u200D\u{1F33E}"], "", "", ["male-farmer"], 36, 24, 23, 0],
          "1f468-200d-1f373": [["\u{1F468}\u200D\u{1F373}"], "", "", ["male-cook"], 36, 30, 23, 0],
          "1f468-200d-1f393": [["\u{1F468}\u200D\u{1F393}"], "", "", ["male-student"], 36, 36, 23, 0],
          "1f468-200d-1f3a4": [["\u{1F468}\u200D\u{1F3A4}"], "", "", ["male-singer"], 36, 42, 23, 0],
          "1f468-200d-1f3a8": [["\u{1F468}\u200D\u{1F3A8}"], "", "", ["male-artist"], 36, 48, 23, 0],
          "1f468-200d-1f3eb": [["\u{1F468}\u200D\u{1F3EB}"], "", "", ["male-teacher"], 37, 5, 23, 0],
          "1f468-200d-1f3ed": [["\u{1F468}\u200D\u{1F3ED}"], "", "", ["male-factory-worker"], 37, 11, 23, 0],
          "1f468-200d-1f466": [["\u{1F468}\u200D\u{1F466}"], "", "", ["man-boy"], 37, 17, 23, 0],
          "1f468-200d-1f467": [["\u{1F468}\u200D\u{1F467}"], "", "", ["man-girl"], 37, 18, 23, 0],
          "1f468-200d-1f4bb": [["\u{1F468}\u200D\u{1F4BB}"], "", "", ["male-technologist"], 37, 19, 23, 0],
          "1f468-200d-1f4bc": [["\u{1F468}\u200D\u{1F4BC}"], "", "", ["male-office-worker"], 37, 25, 23, 0],
          "1f468-200d-1f527": [["\u{1F468}\u200D\u{1F527}"], "", "", ["male-mechanic"], 37, 31, 23, 0],
          "1f468-200d-1f52c": [["\u{1F468}\u200D\u{1F52C}"], "", "", ["male-scientist"], 37, 37, 23, 0],
          "1f468-200d-1f680": [["\u{1F468}\u200D\u{1F680}"], "", "", ["male-astronaut"], 37, 43, 23, 0],
          "1f468-200d-1f692": [["\u{1F468}\u200D\u{1F692}"], "", "", ["male-firefighter"], 38, 0, 23, 0],
          "1f469-200d-1f33e": [["\u{1F469}\u200D\u{1F33E}"], "", "", ["female-farmer"], 38, 6, 23, 0],
          "1f469-200d-1f373": [["\u{1F469}\u200D\u{1F373}"], "", "", ["female-cook"], 38, 12, 23, 0],
          "1f469-200d-1f393": [["\u{1F469}\u200D\u{1F393}"], "", "", ["female-student"], 38, 18, 23, 0],
          "1f469-200d-1f3a4": [["\u{1F469}\u200D\u{1F3A4}"], "", "", ["female-singer"], 38, 24, 23, 0],
          "1f469-200d-1f3a8": [["\u{1F469}\u200D\u{1F3A8}"], "", "", ["female-artist"], 38, 30, 23, 0],
          "1f469-200d-1f3eb": [["\u{1F469}\u200D\u{1F3EB}"], "", "", ["female-teacher"], 38, 36, 23, 0],
          "1f469-200d-1f3ed": [["\u{1F469}\u200D\u{1F3ED}"], "", "", ["female-factory-worker"], 38, 42, 23, 0],
          "1f469-200d-1f466": [["\u{1F469}\u200D\u{1F466}"], "", "", ["woman-boy"], 38, 48, 23, 0],
          "1f469-200d-1f467": [["\u{1F469}\u200D\u{1F467}"], "", "", ["woman-girl"], 39, 0, 23, 0],
          "1f469-200d-1f4bb": [["\u{1F469}\u200D\u{1F4BB}"], "", "", ["female-technologist"], 39, 1, 23, 0],
          "1f469-200d-1f4bc": [["\u{1F469}\u200D\u{1F4BC}"], "", "", ["female-office-worker"], 39, 7, 23, 0],
          "1f469-200d-1f527": [["\u{1F469}\u200D\u{1F527}"], "", "", ["female-mechanic"], 39, 13, 23, 0],
          "1f469-200d-1f52c": [["\u{1F469}\u200D\u{1F52C}"], "", "", ["female-scientist"], 39, 19, 23, 0],
          "1f469-200d-1f680": [["\u{1F469}\u200D\u{1F680}"], "", "", ["female-astronaut"], 39, 25, 23, 0],
          "1f469-200d-1f692": [["\u{1F469}\u200D\u{1F692}"], "", "", ["female-firefighter"], 39, 31, 23, 0],
          "1f3c3-200d-2640-fe0f": [["\u{1F3C3}\u200D\u2640\uFE0F"], "", "", ["woman-running"], 39, 37, 5, 0],
          "1f3c3-200d-2642-fe0f": [["\u{1F3C3}\u200D\u2642\uFE0F", "\u{1F3C3}"], "", "", ["man-running", "runner", "running"], 39, 43, 5, 0],
          "1f3c4-200d-2640-fe0f": [["\u{1F3C4}\u200D\u2640\uFE0F"], "", "", ["woman-surfing"], 40, 0, 5, 0],
          "1f3c4-200d-2642-fe0f": [["\u{1F3C4}\u200D\u2642\uFE0F", "\u{1F3C4}"], "", "", ["man-surfing", "surfer"], 40, 6, 5, 0],
          "1f3ca-200d-2640-fe0f": [["\u{1F3CA}\u200D\u2640\uFE0F"], "", "", ["woman-swimming"], 40, 12, 5, 0],
          "1f3ca-200d-2642-fe0f": [["\u{1F3CA}\u200D\u2642\uFE0F", "\u{1F3CA}"], "", "", ["man-swimming", "swimmer"], 40, 18, 5, 0],
          "1f3cb-fe0f-200d-2640-fe0f": [["\u{1F3CB}\uFE0F\u200D\u2640\uFE0F"], "", "", ["woman-lifting-weights"], 40, 24, 5, 0],
          "1f3cb-fe0f-200d-2642-fe0f": [["\u{1F3CB}\uFE0F\u200D\u2642\uFE0F", "\u{1F3CB}\uFE0F", "\u{1F3CB}"], "", "", ["man-lifting-weights", "weight_lifter"], 40, 30, 5, 0],
          "1f3cc-fe0f-200d-2640-fe0f": [["\u{1F3CC}\uFE0F\u200D\u2640\uFE0F"], "", "", ["woman-golfing"], 40, 36, 5, 0],
          "1f3cc-fe0f-200d-2642-fe0f": [["\u{1F3CC}\uFE0F\u200D\u2642\uFE0F", "\u{1F3CC}\uFE0F", "\u{1F3CC}"], "", "", ["man-golfing", "golfer"], 40, 42, 5, 0],
          "1f3f3-fe0f-200d-1f308": [["\u{1F3F3}\uFE0F\u200D\u{1F308}"], "", "", ["rainbow-flag"], 40, 48, 53, 0],
          "1f441-fe0f-200d-1f5e8-fe0f": [["\u{1F441}\uFE0F\u200D\u{1F5E8}\uFE0F"], "", "", ["eye-in-speech-bubble"], 41, 0, 1, 0],
          "1f468-200d-1f466-200d-1f466": [["\u{1F468}\u200D\u{1F466}\u200D\u{1F466}"], "", "", ["man-boy-boy"], 41, 1, 23, 0],
          "1f468-200d-1f467-200d-1f466": [["\u{1F468}\u200D\u{1F467}\u200D\u{1F466}"], "", "", ["man-girl-boy"], 41, 2, 23, 0],
          "1f468-200d-1f467-200d-1f467": [["\u{1F468}\u200D\u{1F467}\u200D\u{1F467}"], "", "", ["man-girl-girl"], 41, 3, 23, 0],
          "1f468-200d-1f468-200d-1f466": [["\u{1F468}\u200D\u{1F468}\u200D\u{1F466}"], "", "", ["man-man-boy"], 41, 4, 63, 0],
          "1f468-200d-1f468-200d-1f466-200d-1f466": [["\u{1F468}\u200D\u{1F468}\u200D\u{1F466}\u200D\u{1F466}"], "", "", ["man-man-boy-boy"], 41, 5, 63, 0],
          "1f468-200d-1f468-200d-1f467": [["\u{1F468}\u200D\u{1F468}\u200D\u{1F467}"], "", "", ["man-man-girl"], 41, 6, 63, 0],
          "1f468-200d-1f468-200d-1f467-200d-1f466": [["\u{1F468}\u200D\u{1F468}\u200D\u{1F467}\u200D\u{1F466}"], "", "", ["man-man-girl-boy"], 41, 7, 63, 0],
          "1f468-200d-1f468-200d-1f467-200d-1f467": [["\u{1F468}\u200D\u{1F468}\u200D\u{1F467}\u200D\u{1F467}"], "", "", ["man-man-girl-girl"], 41, 8, 63, 0],
          "1f468-200d-1f469-200d-1f466": [["\u{1F468}\u200D\u{1F469}\u200D\u{1F466}", "\u{1F46A}"], "", "", ["man-woman-boy", "family"], 41, 9, 55, 0],
          "1f468-200d-1f469-200d-1f466-200d-1f466": [["\u{1F468}\u200D\u{1F469}\u200D\u{1F466}\u200D\u{1F466}"], "", "", ["man-woman-boy-boy"], 41, 10, 63, 0],
          "1f468-200d-1f469-200d-1f467": [["\u{1F468}\u200D\u{1F469}\u200D\u{1F467}"], "", "", ["man-woman-girl"], 41, 11, 63, 0],
          "1f468-200d-1f469-200d-1f467-200d-1f466": [["\u{1F468}\u200D\u{1F469}\u200D\u{1F467}\u200D\u{1F466}"], "", "", ["man-woman-girl-boy"], 41, 12, 63, 0],
          "1f468-200d-1f469-200d-1f467-200d-1f467": [["\u{1F468}\u200D\u{1F469}\u200D\u{1F467}\u200D\u{1F467}"], "", "", ["man-woman-girl-girl"], 41, 13, 63, 0],
          "1f468-200d-2695-fe0f": [["\u{1F468}\u200D\u2695\uFE0F"], "", "", ["male-doctor"], 41, 14, 5, 0],
          "1f468-200d-2696-fe0f": [["\u{1F468}\u200D\u2696\uFE0F"], "", "", ["male-judge"], 41, 20, 5, 0],
          "1f468-200d-2708-fe0f": [["\u{1F468}\u200D\u2708\uFE0F"], "", "", ["male-pilot"], 41, 26, 5, 0],
          "1f468-200d-2764-fe0f-200d-1f468": [["\u{1F468}\u200D\u2764\uFE0F\u200D\u{1F468}"], "", "", ["man-heart-man"], 41, 32, 53, 0],
          "1f468-200d-2764-fe0f-200d-1f48b-200d-1f468": [["\u{1F468}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}"], "", "", ["man-kiss-man"], 41, 33, 53, 0],
          "1f469-200d-1f466-200d-1f466": [["\u{1F469}\u200D\u{1F466}\u200D\u{1F466}"], "", "", ["woman-boy-boy"], 41, 34, 23, 0],
          "1f469-200d-1f467-200d-1f466": [["\u{1F469}\u200D\u{1F467}\u200D\u{1F466}"], "", "", ["woman-girl-boy"], 41, 35, 23, 0],
          "1f469-200d-1f467-200d-1f467": [["\u{1F469}\u200D\u{1F467}\u200D\u{1F467}"], "", "", ["woman-girl-girl"], 41, 36, 23, 0],
          "1f469-200d-1f469-200d-1f466": [["\u{1F469}\u200D\u{1F469}\u200D\u{1F466}"], "", "", ["woman-woman-boy"], 41, 37, 63, 0],
          "1f469-200d-1f469-200d-1f466-200d-1f466": [["\u{1F469}\u200D\u{1F469}\u200D\u{1F466}\u200D\u{1F466}"], "", "", ["woman-woman-boy-boy"], 41, 38, 63, 0],
          "1f469-200d-1f469-200d-1f467": [["\u{1F469}\u200D\u{1F469}\u200D\u{1F467}"], "", "", ["woman-woman-girl"], 41, 39, 63, 0],
          "1f469-200d-1f469-200d-1f467-200d-1f466": [["\u{1F469}\u200D\u{1F469}\u200D\u{1F467}\u200D\u{1F466}"], "", "", ["woman-woman-girl-boy"], 41, 40, 63, 0],
          "1f469-200d-1f469-200d-1f467-200d-1f467": [["\u{1F469}\u200D\u{1F469}\u200D\u{1F467}\u200D\u{1F467}"], "", "", ["woman-woman-girl-girl"], 41, 41, 63, 0],
          "1f469-200d-2695-fe0f": [["\u{1F469}\u200D\u2695\uFE0F"], "", "", ["female-doctor"], 41, 42, 5, 0],
          "1f469-200d-2696-fe0f": [["\u{1F469}\u200D\u2696\uFE0F"], "", "", ["female-judge"], 41, 48, 5, 0],
          "1f469-200d-2708-fe0f": [["\u{1F469}\u200D\u2708\uFE0F"], "", "", ["female-pilot"], 42, 5, 5, 0],
          "1f469-200d-2764-fe0f-200d-1f468": [["\u{1F469}\u200D\u2764\uFE0F\u200D\u{1F468}", "\u{1F491}"], "", "", ["woman-heart-man", "couple_with_heart"], 42, 11, 21, 0],
          "1f469-200d-2764-fe0f-200d-1f469": [["\u{1F469}\u200D\u2764\uFE0F\u200D\u{1F469}"], "", "", ["woman-heart-woman"], 42, 12, 53, 0],
          "1f469-200d-2764-fe0f-200d-1f48b-200d-1f468": [["\u{1F469}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}", "\u{1F48F}"], "", "", ["woman-kiss-man", "couplekiss"], 42, 13, 21, 0],
          "1f469-200d-2764-fe0f-200d-1f48b-200d-1f469": [["\u{1F469}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F469}"], "", "", ["woman-kiss-woman"], 42, 14, 53, 0],
          "1f46e-200d-2640-fe0f": [["\u{1F46E}\u200D\u2640\uFE0F"], "", "", ["female-police-officer"], 42, 15, 5, 0],
          "1f46e-200d-2642-fe0f": [["\u{1F46E}\u200D\u2642\uFE0F", "\u{1F46E}"], "", "", ["male-police-officer", "cop"], 42, 21, 5, 0],
          "1f46f-200d-2640-fe0f": [["\u{1F46F}\u200D\u2640\uFE0F", "\u{1F46F}"], "", "", ["woman-with-bunny-ears-partying", "dancers"], 42, 27, 5, 0],
          "1f46f-200d-2642-fe0f": [["\u{1F46F}\u200D\u2642\uFE0F"], "", "", ["man-with-bunny-ears-partying"], 42, 28, 5, 0],
          "1f471-200d-2640-fe0f": [["\u{1F471}\u200D\u2640\uFE0F"], "", "", ["blond-haired-woman"], 42, 29, 5, 0],
          "1f471-200d-2642-fe0f": [["\u{1F471}\u200D\u2642\uFE0F", "\u{1F471}"], "", "", ["blond-haired-man", "person_with_blond_hair"], 42, 35, 5, 0],
          "1f473-200d-2640-fe0f": [["\u{1F473}\u200D\u2640\uFE0F"], "", "", ["woman-wearing-turban"], 42, 41, 5, 0],
          "1f473-200d-2642-fe0f": [["\u{1F473}\u200D\u2642\uFE0F", "\u{1F473}"], "", "", ["man-wearing-turban", "man_with_turban"], 42, 47, 5, 0],
          "1f477-200d-2640-fe0f": [["\u{1F477}\u200D\u2640\uFE0F"], "", "", ["female-construction-worker"], 43, 4, 5, 0],
          "1f477-200d-2642-fe0f": [["\u{1F477}\u200D\u2642\uFE0F", "\u{1F477}"], "", "", ["male-construction-worker", "construction_worker"], 43, 10, 5, 0],
          "1f481-200d-2640-fe0f": [["\u{1F481}\u200D\u2640\uFE0F", "\u{1F481}"], "", "", ["woman-tipping-hand", "information_desk_person"], 43, 16, 5, 0],
          "1f481-200d-2642-fe0f": [["\u{1F481}\u200D\u2642\uFE0F"], "", "", ["man-tipping-hand"], 43, 22, 5, 0],
          "1f482-200d-2640-fe0f": [["\u{1F482}\u200D\u2640\uFE0F"], "", "", ["female-guard"], 43, 28, 5, 0],
          "1f482-200d-2642-fe0f": [["\u{1F482}\u200D\u2642\uFE0F", "\u{1F482}"], "", "", ["male-guard", "guardsman"], 43, 34, 5, 0],
          "1f486-200d-2640-fe0f": [["\u{1F486}\u200D\u2640\uFE0F", "\u{1F486}"], "", "", ["woman-getting-massage", "massage"], 43, 40, 5, 0],
          "1f486-200d-2642-fe0f": [["\u{1F486}\u200D\u2642\uFE0F"], "", "", ["man-getting-massage"], 43, 46, 5, 0],
          "1f487-200d-2640-fe0f": [["\u{1F487}\u200D\u2640\uFE0F", "\u{1F487}"], "", "", ["woman-getting-haircut", "haircut"], 44, 3, 5, 0],
          "1f487-200d-2642-fe0f": [["\u{1F487}\u200D\u2642\uFE0F"], "", "", ["man-getting-haircut"], 44, 9, 5, 0],
          "1f575-fe0f-200d-2640-fe0f": [["\u{1F575}\uFE0F\u200D\u2640\uFE0F"], "", "", ["female-detective"], 44, 15, 5, 0],
          "1f575-fe0f-200d-2642-fe0f": [["\u{1F575}\uFE0F\u200D\u2642\uFE0F", "\u{1F575}\uFE0F", "\u{1F575}"], "", "", ["male-detective", "sleuth_or_spy"], 44, 21, 5, 0],
          "1f645-200d-2640-fe0f": [["\u{1F645}\u200D\u2640\uFE0F", "\u{1F645}"], "", "", ["woman-gesturing-no", "no_good"], 44, 27, 5, 0],
          "1f645-200d-2642-fe0f": [["\u{1F645}\u200D\u2642\uFE0F"], "", "", ["man-gesturing-no"], 44, 33, 5, 0],
          "1f646-200d-2640-fe0f": [["\u{1F646}\u200D\u2640\uFE0F", "\u{1F646}"], "", "", ["woman-gesturing-ok", "ok_woman"], 44, 39, 5, 0],
          "1f646-200d-2642-fe0f": [["\u{1F646}\u200D\u2642\uFE0F"], "", "", ["man-gesturing-ok"], 44, 45, 5, 0],
          "1f647-200d-2640-fe0f": [["\u{1F647}\u200D\u2640\uFE0F"], "", "", ["woman-bowing"], 45, 2, 5, 0],
          "1f647-200d-2642-fe0f": [["\u{1F647}\u200D\u2642\uFE0F", "\u{1F647}"], "", "", ["man-bowing", "bow"], 45, 8, 5, 0],
          "1f64b-200d-2640-fe0f": [["\u{1F64B}\u200D\u2640\uFE0F", "\u{1F64B}"], "", "", ["woman-raising-hand", "raising_hand"], 45, 14, 5, 0],
          "1f64b-200d-2642-fe0f": [["\u{1F64B}\u200D\u2642\uFE0F"], "", "", ["man-raising-hand"], 45, 20, 5, 0],
          "1f64d-200d-2640-fe0f": [["\u{1F64D}\u200D\u2640\uFE0F", "\u{1F64D}"], "", "", ["woman-frowning", "person_frowning"], 45, 26, 5, 0],
          "1f64d-200d-2642-fe0f": [["\u{1F64D}\u200D\u2642\uFE0F"], "", "", ["man-frowning"], 45, 32, 5, 0],
          "1f64e-200d-2640-fe0f": [["\u{1F64E}\u200D\u2640\uFE0F", "\u{1F64E}"], "", "", ["woman-pouting", "person_with_pouting_face"], 45, 38, 5, 0],
          "1f64e-200d-2642-fe0f": [["\u{1F64E}\u200D\u2642\uFE0F"], "", "", ["man-pouting"], 45, 44, 5, 0],
          "1f6a3-200d-2640-fe0f": [["\u{1F6A3}\u200D\u2640\uFE0F"], "", "", ["woman-rowing-boat"], 46, 1, 5, 0],
          "1f6a3-200d-2642-fe0f": [["\u{1F6A3}\u200D\u2642\uFE0F", "\u{1F6A3}"], "", "", ["man-rowing-boat", "rowboat"], 46, 7, 5, 0],
          "1f6b4-200d-2640-fe0f": [["\u{1F6B4}\u200D\u2640\uFE0F"], "", "", ["woman-biking"], 46, 13, 5, 0],
          "1f6b4-200d-2642-fe0f": [["\u{1F6B4}\u200D\u2642\uFE0F", "\u{1F6B4}"], "", "", ["man-biking", "bicyclist"], 46, 19, 5, 0],
          "1f6b5-200d-2640-fe0f": [["\u{1F6B5}\u200D\u2640\uFE0F"], "", "", ["woman-mountain-biking"], 46, 25, 5, 0],
          "1f6b5-200d-2642-fe0f": [["\u{1F6B5}\u200D\u2642\uFE0F", "\u{1F6B5}"], "", "", ["man-mountain-biking", "mountain_bicyclist"], 46, 31, 5, 0],
          "1f6b6-200d-2640-fe0f": [["\u{1F6B6}\u200D\u2640\uFE0F"], "", "", ["woman-walking"], 46, 37, 5, 0],
          "1f6b6-200d-2642-fe0f": [["\u{1F6B6}\u200D\u2642\uFE0F", "\u{1F6B6}"], "", "", ["man-walking", "walking"], 46, 43, 5, 0],
          "1f926-200d-2640-fe0f": [["\u{1F926}\u200D\u2640\uFE0F"], "", "", ["woman-facepalming"], 47, 0, 5, 0],
          "1f926-200d-2642-fe0f": [["\u{1F926}\u200D\u2642\uFE0F"], "", "", ["man-facepalming"], 47, 6, 5, 0],
          "1f937-200d-2640-fe0f": [["\u{1F937}\u200D\u2640\uFE0F"], "", "", ["woman-shrugging"], 47, 12, 5, 0],
          "1f937-200d-2642-fe0f": [["\u{1F937}\u200D\u2642\uFE0F"], "", "", ["man-shrugging"], 47, 18, 5, 0],
          "1f938-200d-2640-fe0f": [["\u{1F938}\u200D\u2640\uFE0F"], "", "", ["woman-cartwheeling"], 47, 24, 5, 0],
          "1f938-200d-2642-fe0f": [["\u{1F938}\u200D\u2642\uFE0F"], "", "", ["man-cartwheeling"], 47, 30, 5, 0],
          "1f939-200d-2640-fe0f": [["\u{1F939}\u200D\u2640\uFE0F"], "", "", ["woman-juggling"], 47, 36, 5, 0],
          "1f939-200d-2642-fe0f": [["\u{1F939}\u200D\u2642\uFE0F"], "", "", ["man-juggling"], 47, 42, 5, 0],
          "1f93c-200d-2640-fe0f": [["\u{1F93C}\u200D\u2640\uFE0F"], "", "", ["woman-wrestling"], 47, 48, 5, 0],
          "1f93c-200d-2642-fe0f": [["\u{1F93C}\u200D\u2642\uFE0F"], "", "", ["man-wrestling"], 48, 0, 5, 0],
          "1f93d-200d-2640-fe0f": [["\u{1F93D}\u200D\u2640\uFE0F"], "", "", ["woman-playing-water-polo"], 48, 1, 5, 0],
          "1f93d-200d-2642-fe0f": [["\u{1F93D}\u200D\u2642\uFE0F"], "", "", ["man-playing-water-polo"], 48, 7, 5, 0],
          "1f93e-200d-2640-fe0f": [["\u{1F93E}\u200D\u2640\uFE0F"], "", "", ["woman-playing-handball"], 48, 13, 5, 0],
          "1f93e-200d-2642-fe0f": [["\u{1F93E}\u200D\u2642\uFE0F"], "", "", ["man-playing-handball"], 48, 19, 5, 0],
          "26f9-fe0f-200d-2640-fe0f": [["\u26F9\uFE0F\u200D\u2640\uFE0F"], "", "", ["woman-bouncing-ball"], 48, 25, 5, 0],
          "26f9-fe0f-200d-2642-fe0f": [["\u26F9\uFE0F\u200D\u2642\uFE0F", "\u26F9\uFE0F", "\u26F9"], "", "", ["man-bouncing-ball", "person_with_ball"], 48, 31, 5, 0]
        };
        emoji.prototype.emoticons_data = {
          "<3": "heart",
          ":o)": "monkey_face",
          "</3": "broken_heart",
          "=)": "smiley",
          "=-)": "smiley",
          "C:": "smile",
          "c:": "smile",
          ":D": "smile",
          ":-D": "smile",
          ":>": "laughing",
          ":->": "laughing",
          ";)": "wink",
          ";-)": "wink",
          "8)": "sunglasses",
          ":|": "neutral_face",
          ":-|": "neutral_face",
          ":\\": "confused",
          ":-\\": "confused",
          ":/": "confused",
          ":-/": "confused",
          ":*": "kissing_heart",
          ":-*": "kissing_heart",
          ":p": "stuck_out_tongue",
          ":-p": "stuck_out_tongue",
          ":P": "stuck_out_tongue",
          ":-P": "stuck_out_tongue",
          ":b": "stuck_out_tongue",
          ":-b": "stuck_out_tongue",
          ";p": "stuck_out_tongue_winking_eye",
          ";-p": "stuck_out_tongue_winking_eye",
          ";b": "stuck_out_tongue_winking_eye",
          ";-b": "stuck_out_tongue_winking_eye",
          ";P": "stuck_out_tongue_winking_eye",
          ";-P": "stuck_out_tongue_winking_eye",
          "):": "disappointed",
          ":(": "disappointed",
          ":-(": "disappointed",
          ">:(": "angry",
          ">:-(": "angry",
          ":'(": "cry",
          "D:": "anguished",
          ":o": "open_mouth",
          ":-o": "open_mouth",
          ":O": "open_mouth",
          ":-O": "open_mouth",
          ":)": "slightly_smiling_face",
          "(:": "slightly_smiling_face",
          ":-)": "slightly_smiling_face"
        };
        emoji.prototype.variations_data = {
          "261d": { "1f3fb": ["261d-1f3fb", 1, 3, 63, ["\u261D\u{1F3FB}"]], "1f3fc": ["261d-1f3fc", 1, 4, 63, ["\u261D\u{1F3FC}"]], "1f3fd": ["261d-1f3fd", 1, 5, 63, ["\u261D\u{1F3FD}"]], "1f3fe": ["261d-1f3fe", 1, 6, 63, ["\u261D\u{1F3FE}"]], "1f3ff": ["261d-1f3ff", 1, 7, 63, ["\u261D\u{1F3FF}"]] },
          "270a": { "1f3fb": ["270a-1f3fb", 2, 38, 63, ["\u270A\u{1F3FB}"]], "1f3fc": ["270a-1f3fc", 2, 39, 63, ["\u270A\u{1F3FC}"]], "1f3fd": ["270a-1f3fd", 2, 40, 63, ["\u270A\u{1F3FD}"]], "1f3fe": ["270a-1f3fe", 2, 41, 63, ["\u270A\u{1F3FE}"]], "1f3ff": ["270a-1f3ff", 2, 42, 63, ["\u270A\u{1F3FF}"]] },
          "270b": { "1f3fb": ["270b-1f3fb", 2, 44, 63, ["\u270B\u{1F3FB}"]], "1f3fc": ["270b-1f3fc", 2, 45, 63, ["\u270B\u{1F3FC}"]], "1f3fd": ["270b-1f3fd", 2, 46, 63, ["\u270B\u{1F3FD}"]], "1f3fe": ["270b-1f3fe", 2, 47, 63, ["\u270B\u{1F3FE}"]], "1f3ff": ["270b-1f3ff", 2, 48, 63, ["\u270B\u{1F3FF}"]] },
          "270c": { "1f3fb": ["270c-1f3fb", 3, 1, 63, ["\u270C\u{1F3FB}"]], "1f3fc": ["270c-1f3fc", 3, 2, 63, ["\u270C\u{1F3FC}"]], "1f3fd": ["270c-1f3fd", 3, 3, 63, ["\u270C\u{1F3FD}"]], "1f3fe": ["270c-1f3fe", 3, 4, 63, ["\u270C\u{1F3FE}"]], "1f3ff": ["270c-1f3ff", 3, 5, 63, ["\u270C\u{1F3FF}"]] },
          "270d": { "1f3fb": ["270d-1f3fb", 3, 7, 31, ["\u270D\u{1F3FB}"]], "1f3fc": ["270d-1f3fc", 3, 8, 31, ["\u270D\u{1F3FC}"]], "1f3fd": ["270d-1f3fd", 3, 9, 31, ["\u270D\u{1F3FD}"]], "1f3fe": ["270d-1f3fe", 3, 10, 31, ["\u270D\u{1F3FE}"]], "1f3ff": ["270d-1f3ff", 3, 11, 31, ["\u270D\u{1F3FF}"]] },
          "1f385": { "1f3fb": ["1f385-1f3fb", 7, 18, 63, ["\u{1F385}\u{1F3FB}"]], "1f3fc": ["1f385-1f3fc", 7, 19, 63, ["\u{1F385}\u{1F3FC}"]], "1f3fd": ["1f385-1f3fd", 7, 20, 63, ["\u{1F385}\u{1F3FD}"]], "1f3fe": ["1f385-1f3fe", 7, 21, 63, ["\u{1F385}\u{1F3FE}"]], "1f3ff": ["1f385-1f3ff", 7, 22, 63, ["\u{1F385}\u{1F3FF}"]] },
          "1f3c2": { "1f3fb": ["1f3c2-1f3fb", 8, 30, 53, ["\u{1F3C2}\u{1F3FB}"]], "1f3fc": ["1f3c2-1f3fc", 8, 31, 53, ["\u{1F3C2}\u{1F3FC}"]], "1f3fd": ["1f3c2-1f3fd", 8, 32, 53, ["\u{1F3C2}\u{1F3FD}"]], "1f3fe": ["1f3c2-1f3fe", 8, 33, 53, ["\u{1F3C2}\u{1F3FE}"]], "1f3ff": ["1f3c2-1f3ff", 8, 34, 53, ["\u{1F3C2}\u{1F3FF}"]] },
          "1f3c7": { "1f3fb": ["1f3c7-1f3fb", 9, 1, 61, ["\u{1F3C7}\u{1F3FB}"]], "1f3fc": ["1f3c7-1f3fc", 9, 2, 61, ["\u{1F3C7}\u{1F3FC}"]], "1f3fd": ["1f3c7-1f3fd", 9, 3, 61, ["\u{1F3C7}\u{1F3FD}"]], "1f3fe": ["1f3c7-1f3fe", 9, 4, 61, ["\u{1F3C7}\u{1F3FE}"]], "1f3ff": ["1f3c7-1f3ff", 9, 5, 61, ["\u{1F3C7}\u{1F3FF}"]] },
          "1f442": { "1f3fb": ["1f442-1f3fb", 11, 43, 63, ["\u{1F442}\u{1F3FB}"]], "1f3fc": ["1f442-1f3fc", 11, 44, 63, ["\u{1F442}\u{1F3FC}"]], "1f3fd": ["1f442-1f3fd", 11, 45, 63, ["\u{1F442}\u{1F3FD}"]], "1f3fe": ["1f442-1f3fe", 11, 46, 63, ["\u{1F442}\u{1F3FE}"]], "1f3ff": ["1f442-1f3ff", 11, 47, 63, ["\u{1F442}\u{1F3FF}"]] },
          "1f443": { "1f3fb": ["1f443-1f3fb", 12, 0, 63, ["\u{1F443}\u{1F3FB}"]], "1f3fc": ["1f443-1f3fc", 12, 1, 63, ["\u{1F443}\u{1F3FC}"]], "1f3fd": ["1f443-1f3fd", 12, 2, 63, ["\u{1F443}\u{1F3FD}"]], "1f3fe": ["1f443-1f3fe", 12, 3, 63, ["\u{1F443}\u{1F3FE}"]], "1f3ff": ["1f443-1f3ff", 12, 4, 63, ["\u{1F443}\u{1F3FF}"]] },
          "1f446": { "1f3fb": ["1f446-1f3fb", 12, 8, 63, ["\u{1F446}\u{1F3FB}"]], "1f3fc": ["1f446-1f3fc", 12, 9, 63, ["\u{1F446}\u{1F3FC}"]], "1f3fd": ["1f446-1f3fd", 12, 10, 63, ["\u{1F446}\u{1F3FD}"]], "1f3fe": ["1f446-1f3fe", 12, 11, 63, ["\u{1F446}\u{1F3FE}"]], "1f3ff": ["1f446-1f3ff", 12, 12, 63, ["\u{1F446}\u{1F3FF}"]] },
          "1f447": { "1f3fb": ["1f447-1f3fb", 12, 14, 63, ["\u{1F447}\u{1F3FB}"]], "1f3fc": ["1f447-1f3fc", 12, 15, 63, ["\u{1F447}\u{1F3FC}"]], "1f3fd": ["1f447-1f3fd", 12, 16, 63, ["\u{1F447}\u{1F3FD}"]], "1f3fe": ["1f447-1f3fe", 12, 17, 63, ["\u{1F447}\u{1F3FE}"]], "1f3ff": ["1f447-1f3ff", 12, 18, 63, ["\u{1F447}\u{1F3FF}"]] },
          "1f448": { "1f3fb": ["1f448-1f3fb", 12, 20, 63, ["\u{1F448}\u{1F3FB}"]], "1f3fc": ["1f448-1f3fc", 12, 21, 63, ["\u{1F448}\u{1F3FC}"]], "1f3fd": ["1f448-1f3fd", 12, 22, 63, ["\u{1F448}\u{1F3FD}"]], "1f3fe": ["1f448-1f3fe", 12, 23, 63, ["\u{1F448}\u{1F3FE}"]], "1f3ff": ["1f448-1f3ff", 12, 24, 63, ["\u{1F448}\u{1F3FF}"]] },
          "1f449": { "1f3fb": ["1f449-1f3fb", 12, 26, 63, ["\u{1F449}\u{1F3FB}"]], "1f3fc": ["1f449-1f3fc", 12, 27, 63, ["\u{1F449}\u{1F3FC}"]], "1f3fd": ["1f449-1f3fd", 12, 28, 63, ["\u{1F449}\u{1F3FD}"]], "1f3fe": ["1f449-1f3fe", 12, 29, 63, ["\u{1F449}\u{1F3FE}"]], "1f3ff": ["1f449-1f3ff", 12, 30, 63, ["\u{1F449}\u{1F3FF}"]] },
          "1f44a": { "1f3fb": ["1f44a-1f3fb", 12, 32, 63, ["\u{1F44A}\u{1F3FB}"]], "1f3fc": ["1f44a-1f3fc", 12, 33, 63, ["\u{1F44A}\u{1F3FC}"]], "1f3fd": ["1f44a-1f3fd", 12, 34, 63, ["\u{1F44A}\u{1F3FD}"]], "1f3fe": ["1f44a-1f3fe", 12, 35, 63, ["\u{1F44A}\u{1F3FE}"]], "1f3ff": ["1f44a-1f3ff", 12, 36, 63, ["\u{1F44A}\u{1F3FF}"]] },
          "1f44b": { "1f3fb": ["1f44b-1f3fb", 12, 38, 63, ["\u{1F44B}\u{1F3FB}"]], "1f3fc": ["1f44b-1f3fc", 12, 39, 63, ["\u{1F44B}\u{1F3FC}"]], "1f3fd": ["1f44b-1f3fd", 12, 40, 63, ["\u{1F44B}\u{1F3FD}"]], "1f3fe": ["1f44b-1f3fe", 12, 41, 63, ["\u{1F44B}\u{1F3FE}"]], "1f3ff": ["1f44b-1f3ff", 12, 42, 63, ["\u{1F44B}\u{1F3FF}"]] },
          "1f44c": { "1f3fb": ["1f44c-1f3fb", 12, 44, 63, ["\u{1F44C}\u{1F3FB}"]], "1f3fc": ["1f44c-1f3fc", 12, 45, 63, ["\u{1F44C}\u{1F3FC}"]], "1f3fd": ["1f44c-1f3fd", 12, 46, 63, ["\u{1F44C}\u{1F3FD}"]], "1f3fe": ["1f44c-1f3fe", 12, 47, 63, ["\u{1F44C}\u{1F3FE}"]], "1f3ff": ["1f44c-1f3ff", 12, 48, 63, ["\u{1F44C}\u{1F3FF}"]] },
          "1f44d": { "1f3fb": ["1f44d-1f3fb", 13, 1, 63, ["\u{1F44D}\u{1F3FB}"]], "1f3fc": ["1f44d-1f3fc", 13, 2, 63, ["\u{1F44D}\u{1F3FC}"]], "1f3fd": ["1f44d-1f3fd", 13, 3, 63, ["\u{1F44D}\u{1F3FD}"]], "1f3fe": ["1f44d-1f3fe", 13, 4, 63, ["\u{1F44D}\u{1F3FE}"]], "1f3ff": ["1f44d-1f3ff", 13, 5, 63, ["\u{1F44D}\u{1F3FF}"]] },
          "1f44e": { "1f3fb": ["1f44e-1f3fb", 13, 7, 63, ["\u{1F44E}\u{1F3FB}"]], "1f3fc": ["1f44e-1f3fc", 13, 8, 63, ["\u{1F44E}\u{1F3FC}"]], "1f3fd": ["1f44e-1f3fd", 13, 9, 63, ["\u{1F44E}\u{1F3FD}"]], "1f3fe": ["1f44e-1f3fe", 13, 10, 63, ["\u{1F44E}\u{1F3FE}"]], "1f3ff": ["1f44e-1f3ff", 13, 11, 63, ["\u{1F44E}\u{1F3FF}"]] },
          "1f44f": { "1f3fb": ["1f44f-1f3fb", 13, 13, 63, ["\u{1F44F}\u{1F3FB}"]], "1f3fc": ["1f44f-1f3fc", 13, 14, 63, ["\u{1F44F}\u{1F3FC}"]], "1f3fd": ["1f44f-1f3fd", 13, 15, 63, ["\u{1F44F}\u{1F3FD}"]], "1f3fe": ["1f44f-1f3fe", 13, 16, 63, ["\u{1F44F}\u{1F3FE}"]], "1f3ff": ["1f44f-1f3ff", 13, 17, 63, ["\u{1F44F}\u{1F3FF}"]] },
          "1f450": { "1f3fb": ["1f450-1f3fb", 13, 19, 63, ["\u{1F450}\u{1F3FB}"]], "1f3fc": ["1f450-1f3fc", 13, 20, 63, ["\u{1F450}\u{1F3FC}"]], "1f3fd": ["1f450-1f3fd", 13, 21, 63, ["\u{1F450}\u{1F3FD}"]], "1f3fe": ["1f450-1f3fe", 13, 22, 63, ["\u{1F450}\u{1F3FE}"]], "1f3ff": ["1f450-1f3ff", 13, 23, 63, ["\u{1F450}\u{1F3FF}"]] },
          "1f466": { "1f3fb": ["1f466-1f3fb", 13, 46, 63, ["\u{1F466}\u{1F3FB}"]], "1f3fc": ["1f466-1f3fc", 13, 47, 63, ["\u{1F466}\u{1F3FC}"]], "1f3fd": ["1f466-1f3fd", 13, 48, 63, ["\u{1F466}\u{1F3FD}"]], "1f3fe": ["1f466-1f3fe", 14, 0, 63, ["\u{1F466}\u{1F3FE}"]], "1f3ff": ["1f466-1f3ff", 14, 1, 63, ["\u{1F466}\u{1F3FF}"]] },
          "1f467": { "1f3fb": ["1f467-1f3fb", 14, 3, 63, ["\u{1F467}\u{1F3FB}"]], "1f3fc": ["1f467-1f3fc", 14, 4, 63, ["\u{1F467}\u{1F3FC}"]], "1f3fd": ["1f467-1f3fd", 14, 5, 63, ["\u{1F467}\u{1F3FD}"]], "1f3fe": ["1f467-1f3fe", 14, 6, 63, ["\u{1F467}\u{1F3FE}"]], "1f3ff": ["1f467-1f3ff", 14, 7, 63, ["\u{1F467}\u{1F3FF}"]] },
          "1f468": { "1f3fb": ["1f468-1f3fb", 14, 9, 63, ["\u{1F468}\u{1F3FB}"]], "1f3fc": ["1f468-1f3fc", 14, 10, 63, ["\u{1F468}\u{1F3FC}"]], "1f3fd": ["1f468-1f3fd", 14, 11, 63, ["\u{1F468}\u{1F3FD}"]], "1f3fe": ["1f468-1f3fe", 14, 12, 63, ["\u{1F468}\u{1F3FE}"]], "1f3ff": ["1f468-1f3ff", 14, 13, 63, ["\u{1F468}\u{1F3FF}"]] },
          "1f469": { "1f3fb": ["1f469-1f3fb", 14, 15, 63, ["\u{1F469}\u{1F3FB}"]], "1f3fc": ["1f469-1f3fc", 14, 16, 63, ["\u{1F469}\u{1F3FC}"]], "1f3fd": ["1f469-1f3fd", 14, 17, 63, ["\u{1F469}\u{1F3FD}"]], "1f3fe": ["1f469-1f3fe", 14, 18, 63, ["\u{1F469}\u{1F3FE}"]], "1f3ff": ["1f469-1f3ff", 14, 19, 63, ["\u{1F469}\u{1F3FF}"]] },
          "1f470": { "1f3fb": ["1f470-1f3fb", 14, 32, 63, ["\u{1F470}\u{1F3FB}"]], "1f3fc": ["1f470-1f3fc", 14, 33, 63, ["\u{1F470}\u{1F3FC}"]], "1f3fd": ["1f470-1f3fd", 14, 34, 63, ["\u{1F470}\u{1F3FD}"]], "1f3fe": ["1f470-1f3fe", 14, 35, 63, ["\u{1F470}\u{1F3FE}"]], "1f3ff": ["1f470-1f3ff", 14, 36, 63, ["\u{1F470}\u{1F3FF}"]] },
          "1f472": { "1f3fb": ["1f472-1f3fb", 14, 44, 63, ["\u{1F472}\u{1F3FB}"]], "1f3fc": ["1f472-1f3fc", 14, 45, 63, ["\u{1F472}\u{1F3FC}"]], "1f3fd": ["1f472-1f3fd", 14, 46, 63, ["\u{1F472}\u{1F3FD}"]], "1f3fe": ["1f472-1f3fe", 14, 47, 63, ["\u{1F472}\u{1F3FE}"]], "1f3ff": ["1f472-1f3ff", 14, 48, 63, ["\u{1F472}\u{1F3FF}"]] },
          "1f474": { "1f3fb": ["1f474-1f3fb", 15, 7, 63, ["\u{1F474}\u{1F3FB}"]], "1f3fc": ["1f474-1f3fc", 15, 8, 63, ["\u{1F474}\u{1F3FC}"]], "1f3fd": ["1f474-1f3fd", 15, 9, 63, ["\u{1F474}\u{1F3FD}"]], "1f3fe": ["1f474-1f3fe", 15, 10, 63, ["\u{1F474}\u{1F3FE}"]], "1f3ff": ["1f474-1f3ff", 15, 11, 63, ["\u{1F474}\u{1F3FF}"]] },
          "1f475": { "1f3fb": ["1f475-1f3fb", 15, 13, 63, ["\u{1F475}\u{1F3FB}"]], "1f3fc": ["1f475-1f3fc", 15, 14, 63, ["\u{1F475}\u{1F3FC}"]], "1f3fd": ["1f475-1f3fd", 15, 15, 63, ["\u{1F475}\u{1F3FD}"]], "1f3fe": ["1f475-1f3fe", 15, 16, 63, ["\u{1F475}\u{1F3FE}"]], "1f3ff": ["1f475-1f3ff", 15, 17, 63, ["\u{1F475}\u{1F3FF}"]] },
          "1f476": { "1f3fb": ["1f476-1f3fb", 15, 19, 63, ["\u{1F476}\u{1F3FB}"]], "1f3fc": ["1f476-1f3fc", 15, 20, 63, ["\u{1F476}\u{1F3FC}"]], "1f3fd": ["1f476-1f3fd", 15, 21, 63, ["\u{1F476}\u{1F3FD}"]], "1f3fe": ["1f476-1f3fe", 15, 22, 63, ["\u{1F476}\u{1F3FE}"]], "1f3ff": ["1f476-1f3ff", 15, 23, 63, ["\u{1F476}\u{1F3FF}"]] },
          "1f478": { "1f3fb": ["1f478-1f3fb", 15, 31, 63, ["\u{1F478}\u{1F3FB}"]], "1f3fc": ["1f478-1f3fc", 15, 32, 63, ["\u{1F478}\u{1F3FC}"]], "1f3fd": ["1f478-1f3fd", 15, 33, 63, ["\u{1F478}\u{1F3FD}"]], "1f3fe": ["1f478-1f3fe", 15, 34, 63, ["\u{1F478}\u{1F3FE}"]], "1f3ff": ["1f478-1f3ff", 15, 35, 63, ["\u{1F478}\u{1F3FF}"]] },
          "1f47c": { "1f3fb": ["1f47c-1f3fb", 15, 40, 63, ["\u{1F47C}\u{1F3FB}"]], "1f3fc": ["1f47c-1f3fc", 15, 41, 63, ["\u{1F47C}\u{1F3FC}"]], "1f3fd": ["1f47c-1f3fd", 15, 42, 63, ["\u{1F47C}\u{1F3FD}"]], "1f3fe": ["1f47c-1f3fe", 15, 43, 63, ["\u{1F47C}\u{1F3FE}"]], "1f3ff": ["1f47c-1f3ff", 15, 44, 63, ["\u{1F47C}\u{1F3FF}"]] },
          "1f483": { "1f3fb": ["1f483-1f3fb", 16, 13, 63, ["\u{1F483}\u{1F3FB}"]], "1f3fc": ["1f483-1f3fc", 16, 14, 63, ["\u{1F483}\u{1F3FC}"]], "1f3fd": ["1f483-1f3fd", 16, 15, 63, ["\u{1F483}\u{1F3FD}"]], "1f3fe": ["1f483-1f3fe", 16, 16, 63, ["\u{1F483}\u{1F3FE}"]], "1f3ff": ["1f483-1f3ff", 16, 17, 63, ["\u{1F483}\u{1F3FF}"]] },
          "1f485": { "1f3fb": ["1f485-1f3fb", 16, 20, 63, ["\u{1F485}\u{1F3FB}"]], "1f3fc": ["1f485-1f3fc", 16, 21, 63, ["\u{1F485}\u{1F3FC}"]], "1f3fd": ["1f485-1f3fd", 16, 22, 63, ["\u{1F485}\u{1F3FD}"]], "1f3fe": ["1f485-1f3fe", 16, 23, 63, ["\u{1F485}\u{1F3FE}"]], "1f3ff": ["1f485-1f3ff", 16, 24, 63, ["\u{1F485}\u{1F3FF}"]] },
          "1f4aa": { "1f3fb": ["1f4aa-1f3fb", 17, 23, 63, ["\u{1F4AA}\u{1F3FB}"]], "1f3fc": ["1f4aa-1f3fc", 17, 24, 63, ["\u{1F4AA}\u{1F3FC}"]], "1f3fd": ["1f4aa-1f3fd", 17, 25, 63, ["\u{1F4AA}\u{1F3FD}"]], "1f3fe": ["1f4aa-1f3fe", 17, 26, 63, ["\u{1F4AA}\u{1F3FE}"]], "1f3ff": ["1f4aa-1f3ff", 17, 27, 63, ["\u{1F4AA}\u{1F3FF}"]] },
          "1f574": { "1f3fb": ["1f574-1f3fb", 21, 12, 21, ["\u{1F574}\u{1F3FB}"]], "1f3fc": ["1f574-1f3fc", 21, 13, 21, ["\u{1F574}\u{1F3FC}"]], "1f3fd": ["1f574-1f3fd", 21, 14, 21, ["\u{1F574}\u{1F3FD}"]], "1f3fe": ["1f574-1f3fe", 21, 15, 21, ["\u{1F574}\u{1F3FE}"]], "1f3ff": ["1f574-1f3ff", 21, 16, 21, ["\u{1F574}\u{1F3FF}"]] },
          "1f57a": { "1f3fb": ["1f57a-1f3fb", 21, 28, 31, ["\u{1F57A}\u{1F3FB}"]], "1f3fc": ["1f57a-1f3fc", 21, 29, 31, ["\u{1F57A}\u{1F3FC}"]], "1f3fd": ["1f57a-1f3fd", 21, 30, 31, ["\u{1F57A}\u{1F3FD}"]], "1f3fe": ["1f57a-1f3fe", 21, 31, 31, ["\u{1F57A}\u{1F3FE}"]], "1f3ff": ["1f57a-1f3ff", 21, 32, 31, ["\u{1F57A}\u{1F3FF}"]] },
          "1f590": { "1f3fb": ["1f590-1f3fb", 21, 39, 31, ["\u{1F590}\u{1F3FB}"]], "1f3fc": ["1f590-1f3fc", 21, 40, 31, ["\u{1F590}\u{1F3FC}"]], "1f3fd": ["1f590-1f3fd", 21, 41, 31, ["\u{1F590}\u{1F3FD}"]], "1f3fe": ["1f590-1f3fe", 21, 42, 31, ["\u{1F590}\u{1F3FE}"]], "1f3ff": ["1f590-1f3ff", 21, 43, 31, ["\u{1F590}\u{1F3FF}"]] },
          "1f595": { "1f3fb": ["1f595-1f3fb", 21, 45, 31, ["\u{1F595}\u{1F3FB}"]], "1f3fc": ["1f595-1f3fc", 21, 46, 31, ["\u{1F595}\u{1F3FC}"]], "1f3fd": ["1f595-1f3fd", 21, 47, 31, ["\u{1F595}\u{1F3FD}"]], "1f3fe": ["1f595-1f3fe", 21, 48, 31, ["\u{1F595}\u{1F3FE}"]], "1f3ff": ["1f595-1f3ff", 22, 0, 31, ["\u{1F595}\u{1F3FF}"]] },
          "1f596": { "1f3fb": ["1f596-1f3fb", 22, 2, 31, ["\u{1F596}\u{1F3FB}"]], "1f3fc": ["1f596-1f3fc", 22, 3, 31, ["\u{1F596}\u{1F3FC}"]], "1f3fd": ["1f596-1f3fd", 22, 4, 31, ["\u{1F596}\u{1F3FD}"]], "1f3fe": ["1f596-1f3fe", 22, 5, 31, ["\u{1F596}\u{1F3FE}"]], "1f3ff": ["1f596-1f3ff", 22, 6, 31, ["\u{1F596}\u{1F3FF}"]] },
          "1f64c": { "1f3fb": ["1f64c-1f3fb", 24, 32, 63, ["\u{1F64C}\u{1F3FB}"]], "1f3fc": ["1f64c-1f3fc", 24, 33, 63, ["\u{1F64C}\u{1F3FC}"]], "1f3fd": ["1f64c-1f3fd", 24, 34, 63, ["\u{1F64C}\u{1F3FD}"]], "1f3fe": ["1f64c-1f3fe", 24, 35, 63, ["\u{1F64C}\u{1F3FE}"]], "1f3ff": ["1f64c-1f3ff", 24, 36, 63, ["\u{1F64C}\u{1F3FF}"]] },
          "1f64f": { "1f3fb": ["1f64f-1f3fb", 25, 1, 63, ["\u{1F64F}\u{1F3FB}"]], "1f3fc": ["1f64f-1f3fc", 25, 2, 63, ["\u{1F64F}\u{1F3FC}"]], "1f3fd": ["1f64f-1f3fd", 25, 3, 63, ["\u{1F64F}\u{1F3FD}"]], "1f3fe": ["1f64f-1f3fe", 25, 4, 63, ["\u{1F64F}\u{1F3FE}"]], "1f3ff": ["1f64f-1f3ff", 25, 5, 63, ["\u{1F64F}\u{1F3FF}"]] },
          "1f6c0": { "1f3fb": ["1f6c0-1f3fb", 26, 42, 63, ["\u{1F6C0}\u{1F3FB}"]], "1f3fc": ["1f6c0-1f3fc", 26, 43, 63, ["\u{1F6C0}\u{1F3FC}"]], "1f3fd": ["1f6c0-1f3fd", 26, 44, 63, ["\u{1F6C0}\u{1F3FD}"]], "1f3fe": ["1f6c0-1f3fe", 26, 45, 63, ["\u{1F6C0}\u{1F3FE}"]], "1f3ff": ["1f6c0-1f3ff", 26, 46, 63, ["\u{1F6C0}\u{1F3FF}"]] },
          "1f6cc": { "1f3fb": ["1f6cc-1f3fb", 27, 5, 21, ["\u{1F6CC}\u{1F3FB}"]], "1f3fc": ["1f6cc-1f3fc", 27, 6, 21, ["\u{1F6CC}\u{1F3FC}"]], "1f3fd": ["1f6cc-1f3fd", 27, 7, 21, ["\u{1F6CC}\u{1F3FD}"]], "1f3fe": ["1f6cc-1f3fe", 27, 8, 21, ["\u{1F6CC}\u{1F3FE}"]], "1f3ff": ["1f6cc-1f3ff", 27, 9, 21, ["\u{1F6CC}\u{1F3FF}"]] },
          "1f918": { "1f3fb": ["1f918-1f3fb", 27, 39, 31, ["\u{1F918}\u{1F3FB}"]], "1f3fc": ["1f918-1f3fc", 27, 40, 31, ["\u{1F918}\u{1F3FC}"]], "1f3fd": ["1f918-1f3fd", 27, 41, 31, ["\u{1F918}\u{1F3FD}"]], "1f3fe": ["1f918-1f3fe", 27, 42, 31, ["\u{1F918}\u{1F3FE}"]], "1f3ff": ["1f918-1f3ff", 27, 43, 31, ["\u{1F918}\u{1F3FF}"]] },
          "1f919": { "1f3fb": ["1f919-1f3fb", 27, 45, 31, ["\u{1F919}\u{1F3FB}"]], "1f3fc": ["1f919-1f3fc", 27, 46, 31, ["\u{1F919}\u{1F3FC}"]], "1f3fd": ["1f919-1f3fd", 27, 47, 31, ["\u{1F919}\u{1F3FD}"]], "1f3fe": ["1f919-1f3fe", 27, 48, 31, ["\u{1F919}\u{1F3FE}"]], "1f3ff": ["1f919-1f3ff", 28, 0, 31, ["\u{1F919}\u{1F3FF}"]] },
          "1f91a": { "1f3fb": ["1f91a-1f3fb", 28, 2, 31, ["\u{1F91A}\u{1F3FB}"]], "1f3fc": ["1f91a-1f3fc", 28, 3, 31, ["\u{1F91A}\u{1F3FC}"]], "1f3fd": ["1f91a-1f3fd", 28, 4, 31, ["\u{1F91A}\u{1F3FD}"]], "1f3fe": ["1f91a-1f3fe", 28, 5, 31, ["\u{1F91A}\u{1F3FE}"]], "1f3ff": ["1f91a-1f3ff", 28, 6, 31, ["\u{1F91A}\u{1F3FF}"]] },
          "1f91b": { "1f3fb": ["1f91b-1f3fb", 28, 8, 31, ["\u{1F91B}\u{1F3FB}"]], "1f3fc": ["1f91b-1f3fc", 28, 9, 31, ["\u{1F91B}\u{1F3FC}"]], "1f3fd": ["1f91b-1f3fd", 28, 10, 31, ["\u{1F91B}\u{1F3FD}"]], "1f3fe": ["1f91b-1f3fe", 28, 11, 31, ["\u{1F91B}\u{1F3FE}"]], "1f3ff": ["1f91b-1f3ff", 28, 12, 31, ["\u{1F91B}\u{1F3FF}"]] },
          "1f91c": { "1f3fb": ["1f91c-1f3fb", 28, 14, 31, ["\u{1F91C}\u{1F3FB}"]], "1f3fc": ["1f91c-1f3fc", 28, 15, 31, ["\u{1F91C}\u{1F3FC}"]], "1f3fd": ["1f91c-1f3fd", 28, 16, 31, ["\u{1F91C}\u{1F3FD}"]], "1f3fe": ["1f91c-1f3fe", 28, 17, 31, ["\u{1F91C}\u{1F3FE}"]], "1f3ff": ["1f91c-1f3ff", 28, 18, 31, ["\u{1F91C}\u{1F3FF}"]] },
          "1f91e": { "1f3fb": ["1f91e-1f3fb", 28, 21, 31, ["\u{1F91E}\u{1F3FB}"]], "1f3fc": ["1f91e-1f3fc", 28, 22, 31, ["\u{1F91E}\u{1F3FC}"]], "1f3fd": ["1f91e-1f3fd", 28, 23, 31, ["\u{1F91E}\u{1F3FD}"]], "1f3fe": ["1f91e-1f3fe", 28, 24, 31, ["\u{1F91E}\u{1F3FE}"]], "1f3ff": ["1f91e-1f3ff", 28, 25, 31, ["\u{1F91E}\u{1F3FF}"]] },
          "1f926": { "1f3fb": ["1f926-1f3fb", 28, 33, 31, ["\u{1F926}\u{1F3FB}"]], "1f3fc": ["1f926-1f3fc", 28, 34, 31, ["\u{1F926}\u{1F3FC}"]], "1f3fd": ["1f926-1f3fd", 28, 35, 31, ["\u{1F926}\u{1F3FD}"]], "1f3fe": ["1f926-1f3fe", 28, 36, 31, ["\u{1F926}\u{1F3FE}"]], "1f3ff": ["1f926-1f3ff", 28, 37, 31, ["\u{1F926}\u{1F3FF}"]] },
          "1f930": { "1f3fb": ["1f930-1f3fb", 28, 40, 31, ["\u{1F930}\u{1F3FB}"]], "1f3fc": ["1f930-1f3fc", 28, 41, 31, ["\u{1F930}\u{1F3FC}"]], "1f3fd": ["1f930-1f3fd", 28, 42, 31, ["\u{1F930}\u{1F3FD}"]], "1f3fe": ["1f930-1f3fe", 28, 43, 31, ["\u{1F930}\u{1F3FE}"]], "1f3ff": ["1f930-1f3ff", 28, 44, 31, ["\u{1F930}\u{1F3FF}"]] },
          "1f933": { "1f3fb": ["1f933-1f3fb", 28, 46, 31, ["\u{1F933}\u{1F3FB}"]], "1f3fc": ["1f933-1f3fc", 28, 47, 31, ["\u{1F933}\u{1F3FC}"]], "1f3fd": ["1f933-1f3fd", 28, 48, 31, ["\u{1F933}\u{1F3FD}"]], "1f3fe": ["1f933-1f3fe", 29, 0, 31, ["\u{1F933}\u{1F3FE}"]], "1f3ff": ["1f933-1f3ff", 29, 1, 31, ["\u{1F933}\u{1F3FF}"]] },
          "1f934": { "1f3fb": ["1f934-1f3fb", 29, 3, 31, ["\u{1F934}\u{1F3FB}"]], "1f3fc": ["1f934-1f3fc", 29, 4, 31, ["\u{1F934}\u{1F3FC}"]], "1f3fd": ["1f934-1f3fd", 29, 5, 31, ["\u{1F934}\u{1F3FD}"]], "1f3fe": ["1f934-1f3fe", 29, 6, 31, ["\u{1F934}\u{1F3FE}"]], "1f3ff": ["1f934-1f3ff", 29, 7, 31, ["\u{1F934}\u{1F3FF}"]] },
          "1f935": { "1f3fb": ["1f935-1f3fb", 29, 9, 31, ["\u{1F935}\u{1F3FB}"]], "1f3fc": ["1f935-1f3fc", 29, 10, 31, ["\u{1F935}\u{1F3FC}"]], "1f3fd": ["1f935-1f3fd", 29, 11, 31, ["\u{1F935}\u{1F3FD}"]], "1f3fe": ["1f935-1f3fe", 29, 12, 31, ["\u{1F935}\u{1F3FE}"]], "1f3ff": ["1f935-1f3ff", 29, 13, 31, ["\u{1F935}\u{1F3FF}"]] },
          "1f936": { "1f3fb": ["1f936-1f3fb", 29, 15, 31, ["\u{1F936}\u{1F3FB}"]], "1f3fc": ["1f936-1f3fc", 29, 16, 31, ["\u{1F936}\u{1F3FC}"]], "1f3fd": ["1f936-1f3fd", 29, 17, 31, ["\u{1F936}\u{1F3FD}"]], "1f3fe": ["1f936-1f3fe", 29, 18, 31, ["\u{1F936}\u{1F3FE}"]], "1f3ff": ["1f936-1f3ff", 29, 19, 31, ["\u{1F936}\u{1F3FF}"]] },
          "1f937": { "1f3fb": ["1f937-1f3fb", 29, 21, 31, ["\u{1F937}\u{1F3FB}"]], "1f3fc": ["1f937-1f3fc", 29, 22, 31, ["\u{1F937}\u{1F3FC}"]], "1f3fd": ["1f937-1f3fd", 29, 23, 31, ["\u{1F937}\u{1F3FD}"]], "1f3fe": ["1f937-1f3fe", 29, 24, 31, ["\u{1F937}\u{1F3FE}"]], "1f3ff": ["1f937-1f3ff", 29, 25, 31, ["\u{1F937}\u{1F3FF}"]] },
          "1f938": { "1f3fb": ["1f938-1f3fb", 29, 27, 31, ["\u{1F938}\u{1F3FB}"]], "1f3fc": ["1f938-1f3fc", 29, 28, 31, ["\u{1F938}\u{1F3FC}"]], "1f3fd": ["1f938-1f3fd", 29, 29, 31, ["\u{1F938}\u{1F3FD}"]], "1f3fe": ["1f938-1f3fe", 29, 30, 31, ["\u{1F938}\u{1F3FE}"]], "1f3ff": ["1f938-1f3ff", 29, 31, 31, ["\u{1F938}\u{1F3FF}"]] },
          "1f939": { "1f3fb": ["1f939-1f3fb", 29, 33, 31, ["\u{1F939}\u{1F3FB}"]], "1f3fc": ["1f939-1f3fc", 29, 34, 31, ["\u{1F939}\u{1F3FC}"]], "1f3fd": ["1f939-1f3fd", 29, 35, 31, ["\u{1F939}\u{1F3FD}"]], "1f3fe": ["1f939-1f3fe", 29, 36, 31, ["\u{1F939}\u{1F3FE}"]], "1f3ff": ["1f939-1f3ff", 29, 37, 31, ["\u{1F939}\u{1F3FF}"]] },
          "1f93d": { "1f3fb": ["1f93d-1f3fb", 29, 41, 31, ["\u{1F93D}\u{1F3FB}"]], "1f3fc": ["1f93d-1f3fc", 29, 42, 31, ["\u{1F93D}\u{1F3FC}"]], "1f3fd": ["1f93d-1f3fd", 29, 43, 31, ["\u{1F93D}\u{1F3FD}"]], "1f3fe": ["1f93d-1f3fe", 29, 44, 31, ["\u{1F93D}\u{1F3FE}"]], "1f3ff": ["1f93d-1f3ff", 29, 45, 31, ["\u{1F93D}\u{1F3FF}"]] },
          "1f93e": { "1f3fb": ["1f93e-1f3fb", 29, 47, 31, ["\u{1F93E}\u{1F3FB}"]], "1f3fc": ["1f93e-1f3fc", 29, 48, 31, ["\u{1F93E}\u{1F3FC}"]], "1f3fd": ["1f93e-1f3fd", 30, 0, 31, ["\u{1F93E}\u{1F3FD}"]], "1f3fe": ["1f93e-1f3fe", 30, 1, 31, ["\u{1F93E}\u{1F3FE}"]], "1f3ff": ["1f93e-1f3ff", 30, 2, 31, ["\u{1F93E}\u{1F3FF}"]] },
          "1f468-200d-1f33e": { "1f3fb": ["1f468-1f3fb-200d-1f33e", 36, 25, 23, ["\u{1F468}\u{1F3FB}\u200D\u{1F33E}"]], "1f3fc": ["1f468-1f3fc-200d-1f33e", 36, 26, 23, ["\u{1F468}\u{1F3FC}\u200D\u{1F33E}"]], "1f3fd": ["1f468-1f3fd-200d-1f33e", 36, 27, 23, ["\u{1F468}\u{1F3FD}\u200D\u{1F33E}"]], "1f3fe": ["1f468-1f3fe-200d-1f33e", 36, 28, 23, ["\u{1F468}\u{1F3FE}\u200D\u{1F33E}"]], "1f3ff": ["1f468-1f3ff-200d-1f33e", 36, 29, 23, ["\u{1F468}\u{1F3FF}\u200D\u{1F33E}"]] },
          "1f468-200d-1f373": { "1f3fb": ["1f468-1f3fb-200d-1f373", 36, 31, 23, ["\u{1F468}\u{1F3FB}\u200D\u{1F373}"]], "1f3fc": ["1f468-1f3fc-200d-1f373", 36, 32, 23, ["\u{1F468}\u{1F3FC}\u200D\u{1F373}"]], "1f3fd": ["1f468-1f3fd-200d-1f373", 36, 33, 23, ["\u{1F468}\u{1F3FD}\u200D\u{1F373}"]], "1f3fe": ["1f468-1f3fe-200d-1f373", 36, 34, 23, ["\u{1F468}\u{1F3FE}\u200D\u{1F373}"]], "1f3ff": ["1f468-1f3ff-200d-1f373", 36, 35, 23, ["\u{1F468}\u{1F3FF}\u200D\u{1F373}"]] },
          "1f468-200d-1f393": { "1f3fb": ["1f468-1f3fb-200d-1f393", 36, 37, 23, ["\u{1F468}\u{1F3FB}\u200D\u{1F393}"]], "1f3fc": ["1f468-1f3fc-200d-1f393", 36, 38, 23, ["\u{1F468}\u{1F3FC}\u200D\u{1F393}"]], "1f3fd": ["1f468-1f3fd-200d-1f393", 36, 39, 23, ["\u{1F468}\u{1F3FD}\u200D\u{1F393}"]], "1f3fe": ["1f468-1f3fe-200d-1f393", 36, 40, 23, ["\u{1F468}\u{1F3FE}\u200D\u{1F393}"]], "1f3ff": ["1f468-1f3ff-200d-1f393", 36, 41, 23, ["\u{1F468}\u{1F3FF}\u200D\u{1F393}"]] },
          "1f468-200d-1f3a4": { "1f3fb": ["1f468-1f3fb-200d-1f3a4", 36, 43, 23, ["\u{1F468}\u{1F3FB}\u200D\u{1F3A4}"]], "1f3fc": ["1f468-1f3fc-200d-1f3a4", 36, 44, 23, ["\u{1F468}\u{1F3FC}\u200D\u{1F3A4}"]], "1f3fd": ["1f468-1f3fd-200d-1f3a4", 36, 45, 23, ["\u{1F468}\u{1F3FD}\u200D\u{1F3A4}"]], "1f3fe": ["1f468-1f3fe-200d-1f3a4", 36, 46, 23, ["\u{1F468}\u{1F3FE}\u200D\u{1F3A4}"]], "1f3ff": ["1f468-1f3ff-200d-1f3a4", 36, 47, 23, ["\u{1F468}\u{1F3FF}\u200D\u{1F3A4}"]] },
          "1f468-200d-1f3a8": { "1f3fb": ["1f468-1f3fb-200d-1f3a8", 37, 0, 23, ["\u{1F468}\u{1F3FB}\u200D\u{1F3A8}"]], "1f3fc": ["1f468-1f3fc-200d-1f3a8", 37, 1, 23, ["\u{1F468}\u{1F3FC}\u200D\u{1F3A8}"]], "1f3fd": ["1f468-1f3fd-200d-1f3a8", 37, 2, 23, ["\u{1F468}\u{1F3FD}\u200D\u{1F3A8}"]], "1f3fe": ["1f468-1f3fe-200d-1f3a8", 37, 3, 23, ["\u{1F468}\u{1F3FE}\u200D\u{1F3A8}"]], "1f3ff": ["1f468-1f3ff-200d-1f3a8", 37, 4, 23, ["\u{1F468}\u{1F3FF}\u200D\u{1F3A8}"]] },
          "1f468-200d-1f3eb": { "1f3fb": ["1f468-1f3fb-200d-1f3eb", 37, 6, 23, ["\u{1F468}\u{1F3FB}\u200D\u{1F3EB}"]], "1f3fc": ["1f468-1f3fc-200d-1f3eb", 37, 7, 23, ["\u{1F468}\u{1F3FC}\u200D\u{1F3EB}"]], "1f3fd": ["1f468-1f3fd-200d-1f3eb", 37, 8, 23, ["\u{1F468}\u{1F3FD}\u200D\u{1F3EB}"]], "1f3fe": ["1f468-1f3fe-200d-1f3eb", 37, 9, 23, ["\u{1F468}\u{1F3FE}\u200D\u{1F3EB}"]], "1f3ff": ["1f468-1f3ff-200d-1f3eb", 37, 10, 23, ["\u{1F468}\u{1F3FF}\u200D\u{1F3EB}"]] },
          "1f468-200d-1f3ed": { "1f3fb": ["1f468-1f3fb-200d-1f3ed", 37, 12, 23, ["\u{1F468}\u{1F3FB}\u200D\u{1F3ED}"]], "1f3fc": ["1f468-1f3fc-200d-1f3ed", 37, 13, 23, ["\u{1F468}\u{1F3FC}\u200D\u{1F3ED}"]], "1f3fd": ["1f468-1f3fd-200d-1f3ed", 37, 14, 23, ["\u{1F468}\u{1F3FD}\u200D\u{1F3ED}"]], "1f3fe": ["1f468-1f3fe-200d-1f3ed", 37, 15, 23, ["\u{1F468}\u{1F3FE}\u200D\u{1F3ED}"]], "1f3ff": ["1f468-1f3ff-200d-1f3ed", 37, 16, 23, ["\u{1F468}\u{1F3FF}\u200D\u{1F3ED}"]] },
          "1f468-200d-1f4bb": { "1f3fb": ["1f468-1f3fb-200d-1f4bb", 37, 20, 23, ["\u{1F468}\u{1F3FB}\u200D\u{1F4BB}"]], "1f3fc": ["1f468-1f3fc-200d-1f4bb", 37, 21, 23, ["\u{1F468}\u{1F3FC}\u200D\u{1F4BB}"]], "1f3fd": ["1f468-1f3fd-200d-1f4bb", 37, 22, 23, ["\u{1F468}\u{1F3FD}\u200D\u{1F4BB}"]], "1f3fe": ["1f468-1f3fe-200d-1f4bb", 37, 23, 23, ["\u{1F468}\u{1F3FE}\u200D\u{1F4BB}"]], "1f3ff": ["1f468-1f3ff-200d-1f4bb", 37, 24, 23, ["\u{1F468}\u{1F3FF}\u200D\u{1F4BB}"]] },
          "1f468-200d-1f4bc": { "1f3fb": ["1f468-1f3fb-200d-1f4bc", 37, 26, 23, ["\u{1F468}\u{1F3FB}\u200D\u{1F4BC}"]], "1f3fc": ["1f468-1f3fc-200d-1f4bc", 37, 27, 23, ["\u{1F468}\u{1F3FC}\u200D\u{1F4BC}"]], "1f3fd": ["1f468-1f3fd-200d-1f4bc", 37, 28, 23, ["\u{1F468}\u{1F3FD}\u200D\u{1F4BC}"]], "1f3fe": ["1f468-1f3fe-200d-1f4bc", 37, 29, 23, ["\u{1F468}\u{1F3FE}\u200D\u{1F4BC}"]], "1f3ff": ["1f468-1f3ff-200d-1f4bc", 37, 30, 23, ["\u{1F468}\u{1F3FF}\u200D\u{1F4BC}"]] },
          "1f468-200d-1f527": { "1f3fb": ["1f468-1f3fb-200d-1f527", 37, 32, 23, ["\u{1F468}\u{1F3FB}\u200D\u{1F527}"]], "1f3fc": ["1f468-1f3fc-200d-1f527", 37, 33, 23, ["\u{1F468}\u{1F3FC}\u200D\u{1F527}"]], "1f3fd": ["1f468-1f3fd-200d-1f527", 37, 34, 23, ["\u{1F468}\u{1F3FD}\u200D\u{1F527}"]], "1f3fe": ["1f468-1f3fe-200d-1f527", 37, 35, 23, ["\u{1F468}\u{1F3FE}\u200D\u{1F527}"]], "1f3ff": ["1f468-1f3ff-200d-1f527", 37, 36, 23, ["\u{1F468}\u{1F3FF}\u200D\u{1F527}"]] },
          "1f468-200d-1f52c": { "1f3fb": ["1f468-1f3fb-200d-1f52c", 37, 38, 23, ["\u{1F468}\u{1F3FB}\u200D\u{1F52C}"]], "1f3fc": ["1f468-1f3fc-200d-1f52c", 37, 39, 23, ["\u{1F468}\u{1F3FC}\u200D\u{1F52C}"]], "1f3fd": ["1f468-1f3fd-200d-1f52c", 37, 40, 23, ["\u{1F468}\u{1F3FD}\u200D\u{1F52C}"]], "1f3fe": ["1f468-1f3fe-200d-1f52c", 37, 41, 23, ["\u{1F468}\u{1F3FE}\u200D\u{1F52C}"]], "1f3ff": ["1f468-1f3ff-200d-1f52c", 37, 42, 23, ["\u{1F468}\u{1F3FF}\u200D\u{1F52C}"]] },
          "1f468-200d-1f680": { "1f3fb": ["1f468-1f3fb-200d-1f680", 37, 44, 23, ["\u{1F468}\u{1F3FB}\u200D\u{1F680}"]], "1f3fc": ["1f468-1f3fc-200d-1f680", 37, 45, 23, ["\u{1F468}\u{1F3FC}\u200D\u{1F680}"]], "1f3fd": ["1f468-1f3fd-200d-1f680", 37, 46, 23, ["\u{1F468}\u{1F3FD}\u200D\u{1F680}"]], "1f3fe": ["1f468-1f3fe-200d-1f680", 37, 47, 23, ["\u{1F468}\u{1F3FE}\u200D\u{1F680}"]], "1f3ff": ["1f468-1f3ff-200d-1f680", 37, 48, 23, ["\u{1F468}\u{1F3FF}\u200D\u{1F680}"]] },
          "1f468-200d-1f692": { "1f3fb": ["1f468-1f3fb-200d-1f692", 38, 1, 23, ["\u{1F468}\u{1F3FB}\u200D\u{1F692}"]], "1f3fc": ["1f468-1f3fc-200d-1f692", 38, 2, 23, ["\u{1F468}\u{1F3FC}\u200D\u{1F692}"]], "1f3fd": ["1f468-1f3fd-200d-1f692", 38, 3, 23, ["\u{1F468}\u{1F3FD}\u200D\u{1F692}"]], "1f3fe": ["1f468-1f3fe-200d-1f692", 38, 4, 23, ["\u{1F468}\u{1F3FE}\u200D\u{1F692}"]], "1f3ff": ["1f468-1f3ff-200d-1f692", 38, 5, 23, ["\u{1F468}\u{1F3FF}\u200D\u{1F692}"]] },
          "1f469-200d-1f33e": { "1f3fb": ["1f469-1f3fb-200d-1f33e", 38, 7, 23, ["\u{1F469}\u{1F3FB}\u200D\u{1F33E}"]], "1f3fc": ["1f469-1f3fc-200d-1f33e", 38, 8, 23, ["\u{1F469}\u{1F3FC}\u200D\u{1F33E}"]], "1f3fd": ["1f469-1f3fd-200d-1f33e", 38, 9, 23, ["\u{1F469}\u{1F3FD}\u200D\u{1F33E}"]], "1f3fe": ["1f469-1f3fe-200d-1f33e", 38, 10, 23, ["\u{1F469}\u{1F3FE}\u200D\u{1F33E}"]], "1f3ff": ["1f469-1f3ff-200d-1f33e", 38, 11, 23, ["\u{1F469}\u{1F3FF}\u200D\u{1F33E}"]] },
          "1f469-200d-1f373": { "1f3fb": ["1f469-1f3fb-200d-1f373", 38, 13, 23, ["\u{1F469}\u{1F3FB}\u200D\u{1F373}"]], "1f3fc": ["1f469-1f3fc-200d-1f373", 38, 14, 23, ["\u{1F469}\u{1F3FC}\u200D\u{1F373}"]], "1f3fd": ["1f469-1f3fd-200d-1f373", 38, 15, 23, ["\u{1F469}\u{1F3FD}\u200D\u{1F373}"]], "1f3fe": ["1f469-1f3fe-200d-1f373", 38, 16, 23, ["\u{1F469}\u{1F3FE}\u200D\u{1F373}"]], "1f3ff": ["1f469-1f3ff-200d-1f373", 38, 17, 23, ["\u{1F469}\u{1F3FF}\u200D\u{1F373}"]] },
          "1f469-200d-1f393": { "1f3fb": ["1f469-1f3fb-200d-1f393", 38, 19, 23, ["\u{1F469}\u{1F3FB}\u200D\u{1F393}"]], "1f3fc": ["1f469-1f3fc-200d-1f393", 38, 20, 23, ["\u{1F469}\u{1F3FC}\u200D\u{1F393}"]], "1f3fd": ["1f469-1f3fd-200d-1f393", 38, 21, 23, ["\u{1F469}\u{1F3FD}\u200D\u{1F393}"]], "1f3fe": ["1f469-1f3fe-200d-1f393", 38, 22, 23, ["\u{1F469}\u{1F3FE}\u200D\u{1F393}"]], "1f3ff": ["1f469-1f3ff-200d-1f393", 38, 23, 23, ["\u{1F469}\u{1F3FF}\u200D\u{1F393}"]] },
          "1f469-200d-1f3a4": { "1f3fb": ["1f469-1f3fb-200d-1f3a4", 38, 25, 23, ["\u{1F469}\u{1F3FB}\u200D\u{1F3A4}"]], "1f3fc": ["1f469-1f3fc-200d-1f3a4", 38, 26, 23, ["\u{1F469}\u{1F3FC}\u200D\u{1F3A4}"]], "1f3fd": ["1f469-1f3fd-200d-1f3a4", 38, 27, 23, ["\u{1F469}\u{1F3FD}\u200D\u{1F3A4}"]], "1f3fe": ["1f469-1f3fe-200d-1f3a4", 38, 28, 23, ["\u{1F469}\u{1F3FE}\u200D\u{1F3A4}"]], "1f3ff": ["1f469-1f3ff-200d-1f3a4", 38, 29, 23, ["\u{1F469}\u{1F3FF}\u200D\u{1F3A4}"]] },
          "1f469-200d-1f3a8": { "1f3fb": ["1f469-1f3fb-200d-1f3a8", 38, 31, 23, ["\u{1F469}\u{1F3FB}\u200D\u{1F3A8}"]], "1f3fc": ["1f469-1f3fc-200d-1f3a8", 38, 32, 23, ["\u{1F469}\u{1F3FC}\u200D\u{1F3A8}"]], "1f3fd": ["1f469-1f3fd-200d-1f3a8", 38, 33, 23, ["\u{1F469}\u{1F3FD}\u200D\u{1F3A8}"]], "1f3fe": ["1f469-1f3fe-200d-1f3a8", 38, 34, 23, ["\u{1F469}\u{1F3FE}\u200D\u{1F3A8}"]], "1f3ff": ["1f469-1f3ff-200d-1f3a8", 38, 35, 23, ["\u{1F469}\u{1F3FF}\u200D\u{1F3A8}"]] },
          "1f469-200d-1f3eb": { "1f3fb": ["1f469-1f3fb-200d-1f3eb", 38, 37, 23, ["\u{1F469}\u{1F3FB}\u200D\u{1F3EB}"]], "1f3fc": ["1f469-1f3fc-200d-1f3eb", 38, 38, 23, ["\u{1F469}\u{1F3FC}\u200D\u{1F3EB}"]], "1f3fd": ["1f469-1f3fd-200d-1f3eb", 38, 39, 23, ["\u{1F469}\u{1F3FD}\u200D\u{1F3EB}"]], "1f3fe": ["1f469-1f3fe-200d-1f3eb", 38, 40, 23, ["\u{1F469}\u{1F3FE}\u200D\u{1F3EB}"]], "1f3ff": ["1f469-1f3ff-200d-1f3eb", 38, 41, 23, ["\u{1F469}\u{1F3FF}\u200D\u{1F3EB}"]] },
          "1f469-200d-1f3ed": { "1f3fb": ["1f469-1f3fb-200d-1f3ed", 38, 43, 23, ["\u{1F469}\u{1F3FB}\u200D\u{1F3ED}"]], "1f3fc": ["1f469-1f3fc-200d-1f3ed", 38, 44, 23, ["\u{1F469}\u{1F3FC}\u200D\u{1F3ED}"]], "1f3fd": ["1f469-1f3fd-200d-1f3ed", 38, 45, 23, ["\u{1F469}\u{1F3FD}\u200D\u{1F3ED}"]], "1f3fe": ["1f469-1f3fe-200d-1f3ed", 38, 46, 23, ["\u{1F469}\u{1F3FE}\u200D\u{1F3ED}"]], "1f3ff": ["1f469-1f3ff-200d-1f3ed", 38, 47, 23, ["\u{1F469}\u{1F3FF}\u200D\u{1F3ED}"]] },
          "1f469-200d-1f4bb": { "1f3fb": ["1f469-1f3fb-200d-1f4bb", 39, 2, 23, ["\u{1F469}\u{1F3FB}\u200D\u{1F4BB}"]], "1f3fc": ["1f469-1f3fc-200d-1f4bb", 39, 3, 23, ["\u{1F469}\u{1F3FC}\u200D\u{1F4BB}"]], "1f3fd": ["1f469-1f3fd-200d-1f4bb", 39, 4, 23, ["\u{1F469}\u{1F3FD}\u200D\u{1F4BB}"]], "1f3fe": ["1f469-1f3fe-200d-1f4bb", 39, 5, 23, ["\u{1F469}\u{1F3FE}\u200D\u{1F4BB}"]], "1f3ff": ["1f469-1f3ff-200d-1f4bb", 39, 6, 23, ["\u{1F469}\u{1F3FF}\u200D\u{1F4BB}"]] },
          "1f469-200d-1f4bc": { "1f3fb": ["1f469-1f3fb-200d-1f4bc", 39, 8, 23, ["\u{1F469}\u{1F3FB}\u200D\u{1F4BC}"]], "1f3fc": ["1f469-1f3fc-200d-1f4bc", 39, 9, 23, ["\u{1F469}\u{1F3FC}\u200D\u{1F4BC}"]], "1f3fd": ["1f469-1f3fd-200d-1f4bc", 39, 10, 23, ["\u{1F469}\u{1F3FD}\u200D\u{1F4BC}"]], "1f3fe": ["1f469-1f3fe-200d-1f4bc", 39, 11, 23, ["\u{1F469}\u{1F3FE}\u200D\u{1F4BC}"]], "1f3ff": ["1f469-1f3ff-200d-1f4bc", 39, 12, 23, ["\u{1F469}\u{1F3FF}\u200D\u{1F4BC}"]] },
          "1f469-200d-1f527": { "1f3fb": ["1f469-1f3fb-200d-1f527", 39, 14, 23, ["\u{1F469}\u{1F3FB}\u200D\u{1F527}"]], "1f3fc": ["1f469-1f3fc-200d-1f527", 39, 15, 23, ["\u{1F469}\u{1F3FC}\u200D\u{1F527}"]], "1f3fd": ["1f469-1f3fd-200d-1f527", 39, 16, 23, ["\u{1F469}\u{1F3FD}\u200D\u{1F527}"]], "1f3fe": ["1f469-1f3fe-200d-1f527", 39, 17, 23, ["\u{1F469}\u{1F3FE}\u200D\u{1F527}"]], "1f3ff": ["1f469-1f3ff-200d-1f527", 39, 18, 23, ["\u{1F469}\u{1F3FF}\u200D\u{1F527}"]] },
          "1f469-200d-1f52c": { "1f3fb": ["1f469-1f3fb-200d-1f52c", 39, 20, 23, ["\u{1F469}\u{1F3FB}\u200D\u{1F52C}"]], "1f3fc": ["1f469-1f3fc-200d-1f52c", 39, 21, 23, ["\u{1F469}\u{1F3FC}\u200D\u{1F52C}"]], "1f3fd": ["1f469-1f3fd-200d-1f52c", 39, 22, 23, ["\u{1F469}\u{1F3FD}\u200D\u{1F52C}"]], "1f3fe": ["1f469-1f3fe-200d-1f52c", 39, 23, 23, ["\u{1F469}\u{1F3FE}\u200D\u{1F52C}"]], "1f3ff": ["1f469-1f3ff-200d-1f52c", 39, 24, 23, ["\u{1F469}\u{1F3FF}\u200D\u{1F52C}"]] },
          "1f469-200d-1f680": { "1f3fb": ["1f469-1f3fb-200d-1f680", 39, 26, 23, ["\u{1F469}\u{1F3FB}\u200D\u{1F680}"]], "1f3fc": ["1f469-1f3fc-200d-1f680", 39, 27, 23, ["\u{1F469}\u{1F3FC}\u200D\u{1F680}"]], "1f3fd": ["1f469-1f3fd-200d-1f680", 39, 28, 23, ["\u{1F469}\u{1F3FD}\u200D\u{1F680}"]], "1f3fe": ["1f469-1f3fe-200d-1f680", 39, 29, 23, ["\u{1F469}\u{1F3FE}\u200D\u{1F680}"]], "1f3ff": ["1f469-1f3ff-200d-1f680", 39, 30, 23, ["\u{1F469}\u{1F3FF}\u200D\u{1F680}"]] },
          "1f469-200d-1f692": { "1f3fb": ["1f469-1f3fb-200d-1f692", 39, 32, 23, ["\u{1F469}\u{1F3FB}\u200D\u{1F692}"]], "1f3fc": ["1f469-1f3fc-200d-1f692", 39, 33, 23, ["\u{1F469}\u{1F3FC}\u200D\u{1F692}"]], "1f3fd": ["1f469-1f3fd-200d-1f692", 39, 34, 23, ["\u{1F469}\u{1F3FD}\u200D\u{1F692}"]], "1f3fe": ["1f469-1f3fe-200d-1f692", 39, 35, 23, ["\u{1F469}\u{1F3FE}\u200D\u{1F692}"]], "1f3ff": ["1f469-1f3ff-200d-1f692", 39, 36, 23, ["\u{1F469}\u{1F3FF}\u200D\u{1F692}"]] },
          "1f3c3-200d-2640-fe0f": { "1f3fb": ["1f3c3-1f3fb-200d-2640-fe0f", 39, 38, 5, ["\u{1F3C3}\u{1F3FB}\u200D\u2640\uFE0F"]], "1f3fc": ["1f3c3-1f3fc-200d-2640-fe0f", 39, 39, 5, ["\u{1F3C3}\u{1F3FC}\u200D\u2640\uFE0F"]], "1f3fd": ["1f3c3-1f3fd-200d-2640-fe0f", 39, 40, 5, ["\u{1F3C3}\u{1F3FD}\u200D\u2640\uFE0F"]], "1f3fe": ["1f3c3-1f3fe-200d-2640-fe0f", 39, 41, 5, ["\u{1F3C3}\u{1F3FE}\u200D\u2640\uFE0F"]], "1f3ff": ["1f3c3-1f3ff-200d-2640-fe0f", 39, 42, 5, ["\u{1F3C3}\u{1F3FF}\u200D\u2640\uFE0F"]] },
          "1f3c3-200d-2642-fe0f": { "1f3fb": ["1f3c3-1f3fb-200d-2642-fe0f", 39, 44, 5, ["\u{1F3C3}\u{1F3FB}\u200D\u2642\uFE0F", "\u{1F3C3}\u{1F3FB}"]], "1f3fc": ["1f3c3-1f3fc-200d-2642-fe0f", 39, 45, 5, ["\u{1F3C3}\u{1F3FC}\u200D\u2642\uFE0F", "\u{1F3C3}\u{1F3FC}"]], "1f3fd": ["1f3c3-1f3fd-200d-2642-fe0f", 39, 46, 5, ["\u{1F3C3}\u{1F3FD}\u200D\u2642\uFE0F", "\u{1F3C3}\u{1F3FD}"]], "1f3fe": ["1f3c3-1f3fe-200d-2642-fe0f", 39, 47, 5, ["\u{1F3C3}\u{1F3FE}\u200D\u2642\uFE0F", "\u{1F3C3}\u{1F3FE}"]], "1f3ff": ["1f3c3-1f3ff-200d-2642-fe0f", 39, 48, 5, ["\u{1F3C3}\u{1F3FF}\u200D\u2642\uFE0F", "\u{1F3C3}\u{1F3FF}"]] },
          "1f3c4-200d-2640-fe0f": { "1f3fb": ["1f3c4-1f3fb-200d-2640-fe0f", 40, 1, 5, ["\u{1F3C4}\u{1F3FB}\u200D\u2640\uFE0F"]], "1f3fc": ["1f3c4-1f3fc-200d-2640-fe0f", 40, 2, 5, ["\u{1F3C4}\u{1F3FC}\u200D\u2640\uFE0F"]], "1f3fd": ["1f3c4-1f3fd-200d-2640-fe0f", 40, 3, 5, ["\u{1F3C4}\u{1F3FD}\u200D\u2640\uFE0F"]], "1f3fe": ["1f3c4-1f3fe-200d-2640-fe0f", 40, 4, 5, ["\u{1F3C4}\u{1F3FE}\u200D\u2640\uFE0F"]], "1f3ff": ["1f3c4-1f3ff-200d-2640-fe0f", 40, 5, 5, ["\u{1F3C4}\u{1F3FF}\u200D\u2640\uFE0F"]] },
          "1f3c4-200d-2642-fe0f": { "1f3fb": ["1f3c4-1f3fb-200d-2642-fe0f", 40, 7, 5, ["\u{1F3C4}\u{1F3FB}\u200D\u2642\uFE0F", "\u{1F3C4}\u{1F3FB}"]], "1f3fc": ["1f3c4-1f3fc-200d-2642-fe0f", 40, 8, 5, ["\u{1F3C4}\u{1F3FC}\u200D\u2642\uFE0F", "\u{1F3C4}\u{1F3FC}"]], "1f3fd": ["1f3c4-1f3fd-200d-2642-fe0f", 40, 9, 5, ["\u{1F3C4}\u{1F3FD}\u200D\u2642\uFE0F", "\u{1F3C4}\u{1F3FD}"]], "1f3fe": ["1f3c4-1f3fe-200d-2642-fe0f", 40, 10, 5, ["\u{1F3C4}\u{1F3FE}\u200D\u2642\uFE0F", "\u{1F3C4}\u{1F3FE}"]], "1f3ff": ["1f3c4-1f3ff-200d-2642-fe0f", 40, 11, 5, ["\u{1F3C4}\u{1F3FF}\u200D\u2642\uFE0F", "\u{1F3C4}\u{1F3FF}"]] },
          "1f3ca-200d-2640-fe0f": { "1f3fb": ["1f3ca-1f3fb-200d-2640-fe0f", 40, 13, 5, ["\u{1F3CA}\u{1F3FB}\u200D\u2640\uFE0F"]], "1f3fc": ["1f3ca-1f3fc-200d-2640-fe0f", 40, 14, 5, ["\u{1F3CA}\u{1F3FC}\u200D\u2640\uFE0F"]], "1f3fd": ["1f3ca-1f3fd-200d-2640-fe0f", 40, 15, 5, ["\u{1F3CA}\u{1F3FD}\u200D\u2640\uFE0F"]], "1f3fe": ["1f3ca-1f3fe-200d-2640-fe0f", 40, 16, 5, ["\u{1F3CA}\u{1F3FE}\u200D\u2640\uFE0F"]], "1f3ff": ["1f3ca-1f3ff-200d-2640-fe0f", 40, 17, 5, ["\u{1F3CA}\u{1F3FF}\u200D\u2640\uFE0F"]] },
          "1f3ca-200d-2642-fe0f": { "1f3fb": ["1f3ca-1f3fb-200d-2642-fe0f", 40, 19, 5, ["\u{1F3CA}\u{1F3FB}\u200D\u2642\uFE0F", "\u{1F3CA}\u{1F3FB}"]], "1f3fc": ["1f3ca-1f3fc-200d-2642-fe0f", 40, 20, 5, ["\u{1F3CA}\u{1F3FC}\u200D\u2642\uFE0F", "\u{1F3CA}\u{1F3FC}"]], "1f3fd": ["1f3ca-1f3fd-200d-2642-fe0f", 40, 21, 5, ["\u{1F3CA}\u{1F3FD}\u200D\u2642\uFE0F", "\u{1F3CA}\u{1F3FD}"]], "1f3fe": ["1f3ca-1f3fe-200d-2642-fe0f", 40, 22, 5, ["\u{1F3CA}\u{1F3FE}\u200D\u2642\uFE0F", "\u{1F3CA}\u{1F3FE}"]], "1f3ff": ["1f3ca-1f3ff-200d-2642-fe0f", 40, 23, 5, ["\u{1F3CA}\u{1F3FF}\u200D\u2642\uFE0F", "\u{1F3CA}\u{1F3FF}"]] },
          "1f3cb-fe0f-200d-2640-fe0f": { "1f3fb": ["1f3cb-1f3fb-200d-2640-fe0f", 40, 25, 5, ["\u{1F3CB}\u{1F3FB}\u200D\u2640\uFE0F"]], "1f3fc": ["1f3cb-1f3fc-200d-2640-fe0f", 40, 26, 5, ["\u{1F3CB}\u{1F3FC}\u200D\u2640\uFE0F"]], "1f3fd": ["1f3cb-1f3fd-200d-2640-fe0f", 40, 27, 5, ["\u{1F3CB}\u{1F3FD}\u200D\u2640\uFE0F"]], "1f3fe": ["1f3cb-1f3fe-200d-2640-fe0f", 40, 28, 5, ["\u{1F3CB}\u{1F3FE}\u200D\u2640\uFE0F"]], "1f3ff": ["1f3cb-1f3ff-200d-2640-fe0f", 40, 29, 5, ["\u{1F3CB}\u{1F3FF}\u200D\u2640\uFE0F"]] },
          "1f3cb-fe0f-200d-2642-fe0f": { "1f3fb": ["1f3cb-1f3fb-200d-2642-fe0f", 40, 31, 5, ["\u{1F3CB}\u{1F3FB}\u200D\u2642\uFE0F", "\u{1F3CB}\u{1F3FB}"]], "1f3fc": ["1f3cb-1f3fc-200d-2642-fe0f", 40, 32, 5, ["\u{1F3CB}\u{1F3FC}\u200D\u2642\uFE0F", "\u{1F3CB}\u{1F3FC}"]], "1f3fd": ["1f3cb-1f3fd-200d-2642-fe0f", 40, 33, 5, ["\u{1F3CB}\u{1F3FD}\u200D\u2642\uFE0F", "\u{1F3CB}\u{1F3FD}"]], "1f3fe": ["1f3cb-1f3fe-200d-2642-fe0f", 40, 34, 5, ["\u{1F3CB}\u{1F3FE}\u200D\u2642\uFE0F", "\u{1F3CB}\u{1F3FE}"]], "1f3ff": ["1f3cb-1f3ff-200d-2642-fe0f", 40, 35, 5, ["\u{1F3CB}\u{1F3FF}\u200D\u2642\uFE0F", "\u{1F3CB}\u{1F3FF}"]] },
          "1f3cc-fe0f-200d-2640-fe0f": { "1f3fb": ["1f3cc-1f3fb-200d-2640-fe0f", 40, 37, 5, ["\u{1F3CC}\u{1F3FB}\u200D\u2640\uFE0F"]], "1f3fc": ["1f3cc-1f3fc-200d-2640-fe0f", 40, 38, 5, ["\u{1F3CC}\u{1F3FC}\u200D\u2640\uFE0F"]], "1f3fd": ["1f3cc-1f3fd-200d-2640-fe0f", 40, 39, 5, ["\u{1F3CC}\u{1F3FD}\u200D\u2640\uFE0F"]], "1f3fe": ["1f3cc-1f3fe-200d-2640-fe0f", 40, 40, 5, ["\u{1F3CC}\u{1F3FE}\u200D\u2640\uFE0F"]], "1f3ff": ["1f3cc-1f3ff-200d-2640-fe0f", 40, 41, 5, ["\u{1F3CC}\u{1F3FF}\u200D\u2640\uFE0F"]] },
          "1f3cc-fe0f-200d-2642-fe0f": { "1f3fb": ["1f3cc-1f3fb-200d-2642-fe0f", 40, 43, 5, ["\u{1F3CC}\u{1F3FB}\u200D\u2642\uFE0F", "\u{1F3CC}\u{1F3FB}"]], "1f3fc": ["1f3cc-1f3fc-200d-2642-fe0f", 40, 44, 5, ["\u{1F3CC}\u{1F3FC}\u200D\u2642\uFE0F", "\u{1F3CC}\u{1F3FC}"]], "1f3fd": ["1f3cc-1f3fd-200d-2642-fe0f", 40, 45, 5, ["\u{1F3CC}\u{1F3FD}\u200D\u2642\uFE0F", "\u{1F3CC}\u{1F3FD}"]], "1f3fe": ["1f3cc-1f3fe-200d-2642-fe0f", 40, 46, 5, ["\u{1F3CC}\u{1F3FE}\u200D\u2642\uFE0F", "\u{1F3CC}\u{1F3FE}"]], "1f3ff": ["1f3cc-1f3ff-200d-2642-fe0f", 40, 47, 5, ["\u{1F3CC}\u{1F3FF}\u200D\u2642\uFE0F", "\u{1F3CC}\u{1F3FF}"]] },
          "1f468-200d-2695-fe0f": { "1f3fb": ["1f468-1f3fb-200d-2695-fe0f", 41, 15, 5, ["\u{1F468}\u{1F3FB}\u200D\u2695\uFE0F"]], "1f3fc": ["1f468-1f3fc-200d-2695-fe0f", 41, 16, 5, ["\u{1F468}\u{1F3FC}\u200D\u2695\uFE0F"]], "1f3fd": ["1f468-1f3fd-200d-2695-fe0f", 41, 17, 5, ["\u{1F468}\u{1F3FD}\u200D\u2695\uFE0F"]], "1f3fe": ["1f468-1f3fe-200d-2695-fe0f", 41, 18, 5, ["\u{1F468}\u{1F3FE}\u200D\u2695\uFE0F"]], "1f3ff": ["1f468-1f3ff-200d-2695-fe0f", 41, 19, 5, ["\u{1F468}\u{1F3FF}\u200D\u2695\uFE0F"]] },
          "1f468-200d-2696-fe0f": { "1f3fb": ["1f468-1f3fb-200d-2696-fe0f", 41, 21, 5, ["\u{1F468}\u{1F3FB}\u200D\u2696\uFE0F"]], "1f3fc": ["1f468-1f3fc-200d-2696-fe0f", 41, 22, 5, ["\u{1F468}\u{1F3FC}\u200D\u2696\uFE0F"]], "1f3fd": ["1f468-1f3fd-200d-2696-fe0f", 41, 23, 5, ["\u{1F468}\u{1F3FD}\u200D\u2696\uFE0F"]], "1f3fe": ["1f468-1f3fe-200d-2696-fe0f", 41, 24, 5, ["\u{1F468}\u{1F3FE}\u200D\u2696\uFE0F"]], "1f3ff": ["1f468-1f3ff-200d-2696-fe0f", 41, 25, 5, ["\u{1F468}\u{1F3FF}\u200D\u2696\uFE0F"]] },
          "1f468-200d-2708-fe0f": { "1f3fb": ["1f468-1f3fb-200d-2708-fe0f", 41, 27, 5, ["\u{1F468}\u{1F3FB}\u200D\u2708\uFE0F"]], "1f3fc": ["1f468-1f3fc-200d-2708-fe0f", 41, 28, 5, ["\u{1F468}\u{1F3FC}\u200D\u2708\uFE0F"]], "1f3fd": ["1f468-1f3fd-200d-2708-fe0f", 41, 29, 5, ["\u{1F468}\u{1F3FD}\u200D\u2708\uFE0F"]], "1f3fe": ["1f468-1f3fe-200d-2708-fe0f", 41, 30, 5, ["\u{1F468}\u{1F3FE}\u200D\u2708\uFE0F"]], "1f3ff": ["1f468-1f3ff-200d-2708-fe0f", 41, 31, 5, ["\u{1F468}\u{1F3FF}\u200D\u2708\uFE0F"]] },
          "1f469-200d-2695-fe0f": { "1f3fb": ["1f469-1f3fb-200d-2695-fe0f", 41, 43, 5, ["\u{1F469}\u{1F3FB}\u200D\u2695\uFE0F"]], "1f3fc": ["1f469-1f3fc-200d-2695-fe0f", 41, 44, 5, ["\u{1F469}\u{1F3FC}\u200D\u2695\uFE0F"]], "1f3fd": ["1f469-1f3fd-200d-2695-fe0f", 41, 45, 5, ["\u{1F469}\u{1F3FD}\u200D\u2695\uFE0F"]], "1f3fe": ["1f469-1f3fe-200d-2695-fe0f", 41, 46, 5, ["\u{1F469}\u{1F3FE}\u200D\u2695\uFE0F"]], "1f3ff": ["1f469-1f3ff-200d-2695-fe0f", 41, 47, 5, ["\u{1F469}\u{1F3FF}\u200D\u2695\uFE0F"]] },
          "1f469-200d-2696-fe0f": { "1f3fb": ["1f469-1f3fb-200d-2696-fe0f", 42, 0, 5, ["\u{1F469}\u{1F3FB}\u200D\u2696\uFE0F"]], "1f3fc": ["1f469-1f3fc-200d-2696-fe0f", 42, 1, 5, ["\u{1F469}\u{1F3FC}\u200D\u2696\uFE0F"]], "1f3fd": ["1f469-1f3fd-200d-2696-fe0f", 42, 2, 5, ["\u{1F469}\u{1F3FD}\u200D\u2696\uFE0F"]], "1f3fe": ["1f469-1f3fe-200d-2696-fe0f", 42, 3, 5, ["\u{1F469}\u{1F3FE}\u200D\u2696\uFE0F"]], "1f3ff": ["1f469-1f3ff-200d-2696-fe0f", 42, 4, 5, ["\u{1F469}\u{1F3FF}\u200D\u2696\uFE0F"]] },
          "1f469-200d-2708-fe0f": { "1f3fb": ["1f469-1f3fb-200d-2708-fe0f", 42, 6, 5, ["\u{1F469}\u{1F3FB}\u200D\u2708\uFE0F"]], "1f3fc": ["1f469-1f3fc-200d-2708-fe0f", 42, 7, 5, ["\u{1F469}\u{1F3FC}\u200D\u2708\uFE0F"]], "1f3fd": ["1f469-1f3fd-200d-2708-fe0f", 42, 8, 5, ["\u{1F469}\u{1F3FD}\u200D\u2708\uFE0F"]], "1f3fe": ["1f469-1f3fe-200d-2708-fe0f", 42, 9, 5, ["\u{1F469}\u{1F3FE}\u200D\u2708\uFE0F"]], "1f3ff": ["1f469-1f3ff-200d-2708-fe0f", 42, 10, 5, ["\u{1F469}\u{1F3FF}\u200D\u2708\uFE0F"]] },
          "1f46e-200d-2640-fe0f": { "1f3fb": ["1f46e-1f3fb-200d-2640-fe0f", 42, 16, 5, ["\u{1F46E}\u{1F3FB}\u200D\u2640\uFE0F"]], "1f3fc": ["1f46e-1f3fc-200d-2640-fe0f", 42, 17, 5, ["\u{1F46E}\u{1F3FC}\u200D\u2640\uFE0F"]], "1f3fd": ["1f46e-1f3fd-200d-2640-fe0f", 42, 18, 5, ["\u{1F46E}\u{1F3FD}\u200D\u2640\uFE0F"]], "1f3fe": ["1f46e-1f3fe-200d-2640-fe0f", 42, 19, 5, ["\u{1F46E}\u{1F3FE}\u200D\u2640\uFE0F"]], "1f3ff": ["1f46e-1f3ff-200d-2640-fe0f", 42, 20, 5, ["\u{1F46E}\u{1F3FF}\u200D\u2640\uFE0F"]] },
          "1f46e-200d-2642-fe0f": { "1f3fb": ["1f46e-1f3fb-200d-2642-fe0f", 42, 22, 5, ["\u{1F46E}\u{1F3FB}\u200D\u2642\uFE0F", "\u{1F46E}\u{1F3FB}"]], "1f3fc": ["1f46e-1f3fc-200d-2642-fe0f", 42, 23, 5, ["\u{1F46E}\u{1F3FC}\u200D\u2642\uFE0F", "\u{1F46E}\u{1F3FC}"]], "1f3fd": ["1f46e-1f3fd-200d-2642-fe0f", 42, 24, 5, ["\u{1F46E}\u{1F3FD}\u200D\u2642\uFE0F", "\u{1F46E}\u{1F3FD}"]], "1f3fe": ["1f46e-1f3fe-200d-2642-fe0f", 42, 25, 5, ["\u{1F46E}\u{1F3FE}\u200D\u2642\uFE0F", "\u{1F46E}\u{1F3FE}"]], "1f3ff": ["1f46e-1f3ff-200d-2642-fe0f", 42, 26, 5, ["\u{1F46E}\u{1F3FF}\u200D\u2642\uFE0F", "\u{1F46E}\u{1F3FF}"]] },
          "1f471-200d-2640-fe0f": { "1f3fb": ["1f471-1f3fb-200d-2640-fe0f", 42, 30, 5, ["\u{1F471}\u{1F3FB}\u200D\u2640\uFE0F"]], "1f3fc": ["1f471-1f3fc-200d-2640-fe0f", 42, 31, 5, ["\u{1F471}\u{1F3FC}\u200D\u2640\uFE0F"]], "1f3fd": ["1f471-1f3fd-200d-2640-fe0f", 42, 32, 5, ["\u{1F471}\u{1F3FD}\u200D\u2640\uFE0F"]], "1f3fe": ["1f471-1f3fe-200d-2640-fe0f", 42, 33, 5, ["\u{1F471}\u{1F3FE}\u200D\u2640\uFE0F"]], "1f3ff": ["1f471-1f3ff-200d-2640-fe0f", 42, 34, 5, ["\u{1F471}\u{1F3FF}\u200D\u2640\uFE0F"]] },
          "1f471-200d-2642-fe0f": { "1f3fb": ["1f471-1f3fb-200d-2642-fe0f", 42, 36, 5, ["\u{1F471}\u{1F3FB}\u200D\u2642\uFE0F", "\u{1F471}\u{1F3FB}"]], "1f3fc": ["1f471-1f3fc-200d-2642-fe0f", 42, 37, 5, ["\u{1F471}\u{1F3FC}\u200D\u2642\uFE0F", "\u{1F471}\u{1F3FC}"]], "1f3fd": ["1f471-1f3fd-200d-2642-fe0f", 42, 38, 5, ["\u{1F471}\u{1F3FD}\u200D\u2642\uFE0F", "\u{1F471}\u{1F3FD}"]], "1f3fe": ["1f471-1f3fe-200d-2642-fe0f", 42, 39, 5, ["\u{1F471}\u{1F3FE}\u200D\u2642\uFE0F", "\u{1F471}\u{1F3FE}"]], "1f3ff": ["1f471-1f3ff-200d-2642-fe0f", 42, 40, 5, ["\u{1F471}\u{1F3FF}\u200D\u2642\uFE0F", "\u{1F471}\u{1F3FF}"]] },
          "1f473-200d-2640-fe0f": { "1f3fb": ["1f473-1f3fb-200d-2640-fe0f", 42, 42, 5, ["\u{1F473}\u{1F3FB}\u200D\u2640\uFE0F"]], "1f3fc": ["1f473-1f3fc-200d-2640-fe0f", 42, 43, 5, ["\u{1F473}\u{1F3FC}\u200D\u2640\uFE0F"]], "1f3fd": ["1f473-1f3fd-200d-2640-fe0f", 42, 44, 5, ["\u{1F473}\u{1F3FD}\u200D\u2640\uFE0F"]], "1f3fe": ["1f473-1f3fe-200d-2640-fe0f", 42, 45, 5, ["\u{1F473}\u{1F3FE}\u200D\u2640\uFE0F"]], "1f3ff": ["1f473-1f3ff-200d-2640-fe0f", 42, 46, 5, ["\u{1F473}\u{1F3FF}\u200D\u2640\uFE0F"]] },
          "1f473-200d-2642-fe0f": { "1f3fb": ["1f473-1f3fb-200d-2642-fe0f", 42, 48, 5, ["\u{1F473}\u{1F3FB}\u200D\u2642\uFE0F", "\u{1F473}\u{1F3FB}"]], "1f3fc": ["1f473-1f3fc-200d-2642-fe0f", 43, 0, 5, ["\u{1F473}\u{1F3FC}\u200D\u2642\uFE0F", "\u{1F473}\u{1F3FC}"]], "1f3fd": ["1f473-1f3fd-200d-2642-fe0f", 43, 1, 5, ["\u{1F473}\u{1F3FD}\u200D\u2642\uFE0F", "\u{1F473}\u{1F3FD}"]], "1f3fe": ["1f473-1f3fe-200d-2642-fe0f", 43, 2, 5, ["\u{1F473}\u{1F3FE}\u200D\u2642\uFE0F", "\u{1F473}\u{1F3FE}"]], "1f3ff": ["1f473-1f3ff-200d-2642-fe0f", 43, 3, 5, ["\u{1F473}\u{1F3FF}\u200D\u2642\uFE0F", "\u{1F473}\u{1F3FF}"]] },
          "1f477-200d-2640-fe0f": { "1f3fb": ["1f477-1f3fb-200d-2640-fe0f", 43, 5, 5, ["\u{1F477}\u{1F3FB}\u200D\u2640\uFE0F"]], "1f3fc": ["1f477-1f3fc-200d-2640-fe0f", 43, 6, 5, ["\u{1F477}\u{1F3FC}\u200D\u2640\uFE0F"]], "1f3fd": ["1f477-1f3fd-200d-2640-fe0f", 43, 7, 5, ["\u{1F477}\u{1F3FD}\u200D\u2640\uFE0F"]], "1f3fe": ["1f477-1f3fe-200d-2640-fe0f", 43, 8, 5, ["\u{1F477}\u{1F3FE}\u200D\u2640\uFE0F"]], "1f3ff": ["1f477-1f3ff-200d-2640-fe0f", 43, 9, 5, ["\u{1F477}\u{1F3FF}\u200D\u2640\uFE0F"]] },
          "1f477-200d-2642-fe0f": { "1f3fb": ["1f477-1f3fb-200d-2642-fe0f", 43, 11, 5, ["\u{1F477}\u{1F3FB}\u200D\u2642\uFE0F", "\u{1F477}\u{1F3FB}"]], "1f3fc": ["1f477-1f3fc-200d-2642-fe0f", 43, 12, 5, ["\u{1F477}\u{1F3FC}\u200D\u2642\uFE0F", "\u{1F477}\u{1F3FC}"]], "1f3fd": ["1f477-1f3fd-200d-2642-fe0f", 43, 13, 5, ["\u{1F477}\u{1F3FD}\u200D\u2642\uFE0F", "\u{1F477}\u{1F3FD}"]], "1f3fe": ["1f477-1f3fe-200d-2642-fe0f", 43, 14, 5, ["\u{1F477}\u{1F3FE}\u200D\u2642\uFE0F", "\u{1F477}\u{1F3FE}"]], "1f3ff": ["1f477-1f3ff-200d-2642-fe0f", 43, 15, 5, ["\u{1F477}\u{1F3FF}\u200D\u2642\uFE0F", "\u{1F477}\u{1F3FF}"]] },
          "1f481-200d-2640-fe0f": { "1f3fb": ["1f481-1f3fb-200d-2640-fe0f", 43, 17, 5, ["\u{1F481}\u{1F3FB}\u200D\u2640\uFE0F", "\u{1F481}\u{1F3FB}"]], "1f3fc": ["1f481-1f3fc-200d-2640-fe0f", 43, 18, 5, ["\u{1F481}\u{1F3FC}\u200D\u2640\uFE0F", "\u{1F481}\u{1F3FC}"]], "1f3fd": ["1f481-1f3fd-200d-2640-fe0f", 43, 19, 5, ["\u{1F481}\u{1F3FD}\u200D\u2640\uFE0F", "\u{1F481}\u{1F3FD}"]], "1f3fe": ["1f481-1f3fe-200d-2640-fe0f", 43, 20, 5, ["\u{1F481}\u{1F3FE}\u200D\u2640\uFE0F", "\u{1F481}\u{1F3FE}"]], "1f3ff": ["1f481-1f3ff-200d-2640-fe0f", 43, 21, 5, ["\u{1F481}\u{1F3FF}\u200D\u2640\uFE0F", "\u{1F481}\u{1F3FF}"]] },
          "1f481-200d-2642-fe0f": { "1f3fb": ["1f481-1f3fb-200d-2642-fe0f", 43, 23, 5, ["\u{1F481}\u{1F3FB}\u200D\u2642\uFE0F"]], "1f3fc": ["1f481-1f3fc-200d-2642-fe0f", 43, 24, 5, ["\u{1F481}\u{1F3FC}\u200D\u2642\uFE0F"]], "1f3fd": ["1f481-1f3fd-200d-2642-fe0f", 43, 25, 5, ["\u{1F481}\u{1F3FD}\u200D\u2642\uFE0F"]], "1f3fe": ["1f481-1f3fe-200d-2642-fe0f", 43, 26, 5, ["\u{1F481}\u{1F3FE}\u200D\u2642\uFE0F"]], "1f3ff": ["1f481-1f3ff-200d-2642-fe0f", 43, 27, 5, ["\u{1F481}\u{1F3FF}\u200D\u2642\uFE0F"]] },
          "1f482-200d-2640-fe0f": { "1f3fb": ["1f482-1f3fb-200d-2640-fe0f", 43, 29, 5, ["\u{1F482}\u{1F3FB}\u200D\u2640\uFE0F"]], "1f3fc": ["1f482-1f3fc-200d-2640-fe0f", 43, 30, 5, ["\u{1F482}\u{1F3FC}\u200D\u2640\uFE0F"]], "1f3fd": ["1f482-1f3fd-200d-2640-fe0f", 43, 31, 5, ["\u{1F482}\u{1F3FD}\u200D\u2640\uFE0F"]], "1f3fe": ["1f482-1f3fe-200d-2640-fe0f", 43, 32, 5, ["\u{1F482}\u{1F3FE}\u200D\u2640\uFE0F"]], "1f3ff": ["1f482-1f3ff-200d-2640-fe0f", 43, 33, 5, ["\u{1F482}\u{1F3FF}\u200D\u2640\uFE0F"]] },
          "1f482-200d-2642-fe0f": { "1f3fb": ["1f482-1f3fb-200d-2642-fe0f", 43, 35, 5, ["\u{1F482}\u{1F3FB}\u200D\u2642\uFE0F", "\u{1F482}\u{1F3FB}"]], "1f3fc": ["1f482-1f3fc-200d-2642-fe0f", 43, 36, 5, ["\u{1F482}\u{1F3FC}\u200D\u2642\uFE0F", "\u{1F482}\u{1F3FC}"]], "1f3fd": ["1f482-1f3fd-200d-2642-fe0f", 43, 37, 5, ["\u{1F482}\u{1F3FD}\u200D\u2642\uFE0F", "\u{1F482}\u{1F3FD}"]], "1f3fe": ["1f482-1f3fe-200d-2642-fe0f", 43, 38, 5, ["\u{1F482}\u{1F3FE}\u200D\u2642\uFE0F", "\u{1F482}\u{1F3FE}"]], "1f3ff": ["1f482-1f3ff-200d-2642-fe0f", 43, 39, 5, ["\u{1F482}\u{1F3FF}\u200D\u2642\uFE0F", "\u{1F482}\u{1F3FF}"]] },
          "1f486-200d-2640-fe0f": { "1f3fb": ["1f486-1f3fb-200d-2640-fe0f", 43, 41, 5, ["\u{1F486}\u{1F3FB}\u200D\u2640\uFE0F", "\u{1F486}\u{1F3FB}"]], "1f3fc": ["1f486-1f3fc-200d-2640-fe0f", 43, 42, 5, ["\u{1F486}\u{1F3FC}\u200D\u2640\uFE0F", "\u{1F486}\u{1F3FC}"]], "1f3fd": ["1f486-1f3fd-200d-2640-fe0f", 43, 43, 5, ["\u{1F486}\u{1F3FD}\u200D\u2640\uFE0F", "\u{1F486}\u{1F3FD}"]], "1f3fe": ["1f486-1f3fe-200d-2640-fe0f", 43, 44, 5, ["\u{1F486}\u{1F3FE}\u200D\u2640\uFE0F", "\u{1F486}\u{1F3FE}"]], "1f3ff": ["1f486-1f3ff-200d-2640-fe0f", 43, 45, 5, ["\u{1F486}\u{1F3FF}\u200D\u2640\uFE0F", "\u{1F486}\u{1F3FF}"]] },
          "1f486-200d-2642-fe0f": { "1f3fb": ["1f486-1f3fb-200d-2642-fe0f", 43, 47, 5, ["\u{1F486}\u{1F3FB}\u200D\u2642\uFE0F"]], "1f3fc": ["1f486-1f3fc-200d-2642-fe0f", 43, 48, 5, ["\u{1F486}\u{1F3FC}\u200D\u2642\uFE0F"]], "1f3fd": ["1f486-1f3fd-200d-2642-fe0f", 44, 0, 5, ["\u{1F486}\u{1F3FD}\u200D\u2642\uFE0F"]], "1f3fe": ["1f486-1f3fe-200d-2642-fe0f", 44, 1, 5, ["\u{1F486}\u{1F3FE}\u200D\u2642\uFE0F"]], "1f3ff": ["1f486-1f3ff-200d-2642-fe0f", 44, 2, 5, ["\u{1F486}\u{1F3FF}\u200D\u2642\uFE0F"]] },
          "1f487-200d-2640-fe0f": { "1f3fb": ["1f487-1f3fb-200d-2640-fe0f", 44, 4, 5, ["\u{1F487}\u{1F3FB}\u200D\u2640\uFE0F", "\u{1F487}\u{1F3FB}"]], "1f3fc": ["1f487-1f3fc-200d-2640-fe0f", 44, 5, 5, ["\u{1F487}\u{1F3FC}\u200D\u2640\uFE0F", "\u{1F487}\u{1F3FC}"]], "1f3fd": ["1f487-1f3fd-200d-2640-fe0f", 44, 6, 5, ["\u{1F487}\u{1F3FD}\u200D\u2640\uFE0F", "\u{1F487}\u{1F3FD}"]], "1f3fe": ["1f487-1f3fe-200d-2640-fe0f", 44, 7, 5, ["\u{1F487}\u{1F3FE}\u200D\u2640\uFE0F", "\u{1F487}\u{1F3FE}"]], "1f3ff": ["1f487-1f3ff-200d-2640-fe0f", 44, 8, 5, ["\u{1F487}\u{1F3FF}\u200D\u2640\uFE0F", "\u{1F487}\u{1F3FF}"]] },
          "1f487-200d-2642-fe0f": { "1f3fb": ["1f487-1f3fb-200d-2642-fe0f", 44, 10, 5, ["\u{1F487}\u{1F3FB}\u200D\u2642\uFE0F"]], "1f3fc": ["1f487-1f3fc-200d-2642-fe0f", 44, 11, 5, ["\u{1F487}\u{1F3FC}\u200D\u2642\uFE0F"]], "1f3fd": ["1f487-1f3fd-200d-2642-fe0f", 44, 12, 5, ["\u{1F487}\u{1F3FD}\u200D\u2642\uFE0F"]], "1f3fe": ["1f487-1f3fe-200d-2642-fe0f", 44, 13, 5, ["\u{1F487}\u{1F3FE}\u200D\u2642\uFE0F"]], "1f3ff": ["1f487-1f3ff-200d-2642-fe0f", 44, 14, 5, ["\u{1F487}\u{1F3FF}\u200D\u2642\uFE0F"]] },
          "1f575-fe0f-200d-2640-fe0f": { "1f3fb": ["1f575-1f3fb-200d-2640-fe0f", 44, 16, 5, ["\u{1F575}\u{1F3FB}\u200D\u2640\uFE0F"]], "1f3fc": ["1f575-1f3fc-200d-2640-fe0f", 44, 17, 5, ["\u{1F575}\u{1F3FC}\u200D\u2640\uFE0F"]], "1f3fd": ["1f575-1f3fd-200d-2640-fe0f", 44, 18, 5, ["\u{1F575}\u{1F3FD}\u200D\u2640\uFE0F"]], "1f3fe": ["1f575-1f3fe-200d-2640-fe0f", 44, 19, 5, ["\u{1F575}\u{1F3FE}\u200D\u2640\uFE0F"]], "1f3ff": ["1f575-1f3ff-200d-2640-fe0f", 44, 20, 5, ["\u{1F575}\u{1F3FF}\u200D\u2640\uFE0F"]] },
          "1f575-fe0f-200d-2642-fe0f": { "1f3fb": ["1f575-1f3fb-200d-2642-fe0f", 44, 22, 5, ["\u{1F575}\u{1F3FB}\u200D\u2642\uFE0F", "\u{1F575}\u{1F3FB}"]], "1f3fc": ["1f575-1f3fc-200d-2642-fe0f", 44, 23, 5, ["\u{1F575}\u{1F3FC}\u200D\u2642\uFE0F", "\u{1F575}\u{1F3FC}"]], "1f3fd": ["1f575-1f3fd-200d-2642-fe0f", 44, 24, 5, ["\u{1F575}\u{1F3FD}\u200D\u2642\uFE0F", "\u{1F575}\u{1F3FD}"]], "1f3fe": ["1f575-1f3fe-200d-2642-fe0f", 44, 25, 5, ["\u{1F575}\u{1F3FE}\u200D\u2642\uFE0F", "\u{1F575}\u{1F3FE}"]], "1f3ff": ["1f575-1f3ff-200d-2642-fe0f", 44, 26, 5, ["\u{1F575}\u{1F3FF}\u200D\u2642\uFE0F", "\u{1F575}\u{1F3FF}"]] },
          "1f645-200d-2640-fe0f": { "1f3fb": ["1f645-1f3fb-200d-2640-fe0f", 44, 28, 5, ["\u{1F645}\u{1F3FB}\u200D\u2640\uFE0F", "\u{1F645}\u{1F3FB}"]], "1f3fc": ["1f645-1f3fc-200d-2640-fe0f", 44, 29, 5, ["\u{1F645}\u{1F3FC}\u200D\u2640\uFE0F", "\u{1F645}\u{1F3FC}"]], "1f3fd": ["1f645-1f3fd-200d-2640-fe0f", 44, 30, 5, ["\u{1F645}\u{1F3FD}\u200D\u2640\uFE0F", "\u{1F645}\u{1F3FD}"]], "1f3fe": ["1f645-1f3fe-200d-2640-fe0f", 44, 31, 5, ["\u{1F645}\u{1F3FE}\u200D\u2640\uFE0F", "\u{1F645}\u{1F3FE}"]], "1f3ff": ["1f645-1f3ff-200d-2640-fe0f", 44, 32, 5, ["\u{1F645}\u{1F3FF}\u200D\u2640\uFE0F", "\u{1F645}\u{1F3FF}"]] },
          "1f645-200d-2642-fe0f": { "1f3fb": ["1f645-1f3fb-200d-2642-fe0f", 44, 34, 5, ["\u{1F645}\u{1F3FB}\u200D\u2642\uFE0F"]], "1f3fc": ["1f645-1f3fc-200d-2642-fe0f", 44, 35, 5, ["\u{1F645}\u{1F3FC}\u200D\u2642\uFE0F"]], "1f3fd": ["1f645-1f3fd-200d-2642-fe0f", 44, 36, 5, ["\u{1F645}\u{1F3FD}\u200D\u2642\uFE0F"]], "1f3fe": ["1f645-1f3fe-200d-2642-fe0f", 44, 37, 5, ["\u{1F645}\u{1F3FE}\u200D\u2642\uFE0F"]], "1f3ff": ["1f645-1f3ff-200d-2642-fe0f", 44, 38, 5, ["\u{1F645}\u{1F3FF}\u200D\u2642\uFE0F"]] },
          "1f646-200d-2640-fe0f": { "1f3fb": ["1f646-1f3fb-200d-2640-fe0f", 44, 40, 5, ["\u{1F646}\u{1F3FB}\u200D\u2640\uFE0F", "\u{1F646}\u{1F3FB}"]], "1f3fc": ["1f646-1f3fc-200d-2640-fe0f", 44, 41, 5, ["\u{1F646}\u{1F3FC}\u200D\u2640\uFE0F", "\u{1F646}\u{1F3FC}"]], "1f3fd": ["1f646-1f3fd-200d-2640-fe0f", 44, 42, 5, ["\u{1F646}\u{1F3FD}\u200D\u2640\uFE0F", "\u{1F646}\u{1F3FD}"]], "1f3fe": ["1f646-1f3fe-200d-2640-fe0f", 44, 43, 5, ["\u{1F646}\u{1F3FE}\u200D\u2640\uFE0F", "\u{1F646}\u{1F3FE}"]], "1f3ff": ["1f646-1f3ff-200d-2640-fe0f", 44, 44, 5, ["\u{1F646}\u{1F3FF}\u200D\u2640\uFE0F", "\u{1F646}\u{1F3FF}"]] },
          "1f646-200d-2642-fe0f": { "1f3fb": ["1f646-1f3fb-200d-2642-fe0f", 44, 46, 5, ["\u{1F646}\u{1F3FB}\u200D\u2642\uFE0F"]], "1f3fc": ["1f646-1f3fc-200d-2642-fe0f", 44, 47, 5, ["\u{1F646}\u{1F3FC}\u200D\u2642\uFE0F"]], "1f3fd": ["1f646-1f3fd-200d-2642-fe0f", 44, 48, 5, ["\u{1F646}\u{1F3FD}\u200D\u2642\uFE0F"]], "1f3fe": ["1f646-1f3fe-200d-2642-fe0f", 45, 0, 5, ["\u{1F646}\u{1F3FE}\u200D\u2642\uFE0F"]], "1f3ff": ["1f646-1f3ff-200d-2642-fe0f", 45, 1, 5, ["\u{1F646}\u{1F3FF}\u200D\u2642\uFE0F"]] },
          "1f647-200d-2640-fe0f": { "1f3fb": ["1f647-1f3fb-200d-2640-fe0f", 45, 3, 5, ["\u{1F647}\u{1F3FB}\u200D\u2640\uFE0F"]], "1f3fc": ["1f647-1f3fc-200d-2640-fe0f", 45, 4, 5, ["\u{1F647}\u{1F3FC}\u200D\u2640\uFE0F"]], "1f3fd": ["1f647-1f3fd-200d-2640-fe0f", 45, 5, 5, ["\u{1F647}\u{1F3FD}\u200D\u2640\uFE0F"]], "1f3fe": ["1f647-1f3fe-200d-2640-fe0f", 45, 6, 5, ["\u{1F647}\u{1F3FE}\u200D\u2640\uFE0F"]], "1f3ff": ["1f647-1f3ff-200d-2640-fe0f", 45, 7, 5, ["\u{1F647}\u{1F3FF}\u200D\u2640\uFE0F"]] },
          "1f647-200d-2642-fe0f": { "1f3fb": ["1f647-1f3fb-200d-2642-fe0f", 45, 9, 5, ["\u{1F647}\u{1F3FB}\u200D\u2642\uFE0F", "\u{1F647}\u{1F3FB}"]], "1f3fc": ["1f647-1f3fc-200d-2642-fe0f", 45, 10, 5, ["\u{1F647}\u{1F3FC}\u200D\u2642\uFE0F", "\u{1F647}\u{1F3FC}"]], "1f3fd": ["1f647-1f3fd-200d-2642-fe0f", 45, 11, 5, ["\u{1F647}\u{1F3FD}\u200D\u2642\uFE0F", "\u{1F647}\u{1F3FD}"]], "1f3fe": ["1f647-1f3fe-200d-2642-fe0f", 45, 12, 5, ["\u{1F647}\u{1F3FE}\u200D\u2642\uFE0F", "\u{1F647}\u{1F3FE}"]], "1f3ff": ["1f647-1f3ff-200d-2642-fe0f", 45, 13, 5, ["\u{1F647}\u{1F3FF}\u200D\u2642\uFE0F", "\u{1F647}\u{1F3FF}"]] },
          "1f64b-200d-2640-fe0f": { "1f3fb": ["1f64b-1f3fb-200d-2640-fe0f", 45, 15, 5, ["\u{1F64B}\u{1F3FB}\u200D\u2640\uFE0F", "\u{1F64B}\u{1F3FB}"]], "1f3fc": ["1f64b-1f3fc-200d-2640-fe0f", 45, 16, 5, ["\u{1F64B}\u{1F3FC}\u200D\u2640\uFE0F", "\u{1F64B}\u{1F3FC}"]], "1f3fd": ["1f64b-1f3fd-200d-2640-fe0f", 45, 17, 5, ["\u{1F64B}\u{1F3FD}\u200D\u2640\uFE0F", "\u{1F64B}\u{1F3FD}"]], "1f3fe": ["1f64b-1f3fe-200d-2640-fe0f", 45, 18, 5, ["\u{1F64B}\u{1F3FE}\u200D\u2640\uFE0F", "\u{1F64B}\u{1F3FE}"]], "1f3ff": ["1f64b-1f3ff-200d-2640-fe0f", 45, 19, 5, ["\u{1F64B}\u{1F3FF}\u200D\u2640\uFE0F", "\u{1F64B}\u{1F3FF}"]] },
          "1f64b-200d-2642-fe0f": { "1f3fb": ["1f64b-1f3fb-200d-2642-fe0f", 45, 21, 5, ["\u{1F64B}\u{1F3FB}\u200D\u2642\uFE0F"]], "1f3fc": ["1f64b-1f3fc-200d-2642-fe0f", 45, 22, 5, ["\u{1F64B}\u{1F3FC}\u200D\u2642\uFE0F"]], "1f3fd": ["1f64b-1f3fd-200d-2642-fe0f", 45, 23, 5, ["\u{1F64B}\u{1F3FD}\u200D\u2642\uFE0F"]], "1f3fe": ["1f64b-1f3fe-200d-2642-fe0f", 45, 24, 5, ["\u{1F64B}\u{1F3FE}\u200D\u2642\uFE0F"]], "1f3ff": ["1f64b-1f3ff-200d-2642-fe0f", 45, 25, 5, ["\u{1F64B}\u{1F3FF}\u200D\u2642\uFE0F"]] },
          "1f64d-200d-2640-fe0f": { "1f3fb": ["1f64d-1f3fb-200d-2640-fe0f", 45, 27, 5, ["\u{1F64D}\u{1F3FB}\u200D\u2640\uFE0F", "\u{1F64D}\u{1F3FB}"]], "1f3fc": ["1f64d-1f3fc-200d-2640-fe0f", 45, 28, 5, ["\u{1F64D}\u{1F3FC}\u200D\u2640\uFE0F", "\u{1F64D}\u{1F3FC}"]], "1f3fd": ["1f64d-1f3fd-200d-2640-fe0f", 45, 29, 5, ["\u{1F64D}\u{1F3FD}\u200D\u2640\uFE0F", "\u{1F64D}\u{1F3FD}"]], "1f3fe": ["1f64d-1f3fe-200d-2640-fe0f", 45, 30, 5, ["\u{1F64D}\u{1F3FE}\u200D\u2640\uFE0F", "\u{1F64D}\u{1F3FE}"]], "1f3ff": ["1f64d-1f3ff-200d-2640-fe0f", 45, 31, 5, ["\u{1F64D}\u{1F3FF}\u200D\u2640\uFE0F", "\u{1F64D}\u{1F3FF}"]] },
          "1f64d-200d-2642-fe0f": { "1f3fb": ["1f64d-1f3fb-200d-2642-fe0f", 45, 33, 5, ["\u{1F64D}\u{1F3FB}\u200D\u2642\uFE0F"]], "1f3fc": ["1f64d-1f3fc-200d-2642-fe0f", 45, 34, 5, ["\u{1F64D}\u{1F3FC}\u200D\u2642\uFE0F"]], "1f3fd": ["1f64d-1f3fd-200d-2642-fe0f", 45, 35, 5, ["\u{1F64D}\u{1F3FD}\u200D\u2642\uFE0F"]], "1f3fe": ["1f64d-1f3fe-200d-2642-fe0f", 45, 36, 5, ["\u{1F64D}\u{1F3FE}\u200D\u2642\uFE0F"]], "1f3ff": ["1f64d-1f3ff-200d-2642-fe0f", 45, 37, 5, ["\u{1F64D}\u{1F3FF}\u200D\u2642\uFE0F"]] },
          "1f64e-200d-2640-fe0f": { "1f3fb": ["1f64e-1f3fb-200d-2640-fe0f", 45, 39, 5, ["\u{1F64E}\u{1F3FB}\u200D\u2640\uFE0F", "\u{1F64E}\u{1F3FB}"]], "1f3fc": ["1f64e-1f3fc-200d-2640-fe0f", 45, 40, 5, ["\u{1F64E}\u{1F3FC}\u200D\u2640\uFE0F", "\u{1F64E}\u{1F3FC}"]], "1f3fd": ["1f64e-1f3fd-200d-2640-fe0f", 45, 41, 5, ["\u{1F64E}\u{1F3FD}\u200D\u2640\uFE0F", "\u{1F64E}\u{1F3FD}"]], "1f3fe": ["1f64e-1f3fe-200d-2640-fe0f", 45, 42, 5, ["\u{1F64E}\u{1F3FE}\u200D\u2640\uFE0F", "\u{1F64E}\u{1F3FE}"]], "1f3ff": ["1f64e-1f3ff-200d-2640-fe0f", 45, 43, 5, ["\u{1F64E}\u{1F3FF}\u200D\u2640\uFE0F", "\u{1F64E}\u{1F3FF}"]] },
          "1f64e-200d-2642-fe0f": { "1f3fb": ["1f64e-1f3fb-200d-2642-fe0f", 45, 45, 5, ["\u{1F64E}\u{1F3FB}\u200D\u2642\uFE0F"]], "1f3fc": ["1f64e-1f3fc-200d-2642-fe0f", 45, 46, 5, ["\u{1F64E}\u{1F3FC}\u200D\u2642\uFE0F"]], "1f3fd": ["1f64e-1f3fd-200d-2642-fe0f", 45, 47, 5, ["\u{1F64E}\u{1F3FD}\u200D\u2642\uFE0F"]], "1f3fe": ["1f64e-1f3fe-200d-2642-fe0f", 45, 48, 5, ["\u{1F64E}\u{1F3FE}\u200D\u2642\uFE0F"]], "1f3ff": ["1f64e-1f3ff-200d-2642-fe0f", 46, 0, 5, ["\u{1F64E}\u{1F3FF}\u200D\u2642\uFE0F"]] },
          "1f6a3-200d-2640-fe0f": { "1f3fb": ["1f6a3-1f3fb-200d-2640-fe0f", 46, 2, 5, ["\u{1F6A3}\u{1F3FB}\u200D\u2640\uFE0F"]], "1f3fc": ["1f6a3-1f3fc-200d-2640-fe0f", 46, 3, 5, ["\u{1F6A3}\u{1F3FC}\u200D\u2640\uFE0F"]], "1f3fd": ["1f6a3-1f3fd-200d-2640-fe0f", 46, 4, 5, ["\u{1F6A3}\u{1F3FD}\u200D\u2640\uFE0F"]], "1f3fe": ["1f6a3-1f3fe-200d-2640-fe0f", 46, 5, 5, ["\u{1F6A3}\u{1F3FE}\u200D\u2640\uFE0F"]], "1f3ff": ["1f6a3-1f3ff-200d-2640-fe0f", 46, 6, 5, ["\u{1F6A3}\u{1F3FF}\u200D\u2640\uFE0F"]] },
          "1f6a3-200d-2642-fe0f": { "1f3fb": ["1f6a3-1f3fb-200d-2642-fe0f", 46, 8, 5, ["\u{1F6A3}\u{1F3FB}\u200D\u2642\uFE0F", "\u{1F6A3}\u{1F3FB}"]], "1f3fc": ["1f6a3-1f3fc-200d-2642-fe0f", 46, 9, 5, ["\u{1F6A3}\u{1F3FC}\u200D\u2642\uFE0F", "\u{1F6A3}\u{1F3FC}"]], "1f3fd": ["1f6a3-1f3fd-200d-2642-fe0f", 46, 10, 5, ["\u{1F6A3}\u{1F3FD}\u200D\u2642\uFE0F", "\u{1F6A3}\u{1F3FD}"]], "1f3fe": ["1f6a3-1f3fe-200d-2642-fe0f", 46, 11, 5, ["\u{1F6A3}\u{1F3FE}\u200D\u2642\uFE0F", "\u{1F6A3}\u{1F3FE}"]], "1f3ff": ["1f6a3-1f3ff-200d-2642-fe0f", 46, 12, 5, ["\u{1F6A3}\u{1F3FF}\u200D\u2642\uFE0F", "\u{1F6A3}\u{1F3FF}"]] },
          "1f6b4-200d-2640-fe0f": { "1f3fb": ["1f6b4-1f3fb-200d-2640-fe0f", 46, 14, 5, ["\u{1F6B4}\u{1F3FB}\u200D\u2640\uFE0F"]], "1f3fc": ["1f6b4-1f3fc-200d-2640-fe0f", 46, 15, 5, ["\u{1F6B4}\u{1F3FC}\u200D\u2640\uFE0F"]], "1f3fd": ["1f6b4-1f3fd-200d-2640-fe0f", 46, 16, 5, ["\u{1F6B4}\u{1F3FD}\u200D\u2640\uFE0F"]], "1f3fe": ["1f6b4-1f3fe-200d-2640-fe0f", 46, 17, 5, ["\u{1F6B4}\u{1F3FE}\u200D\u2640\uFE0F"]], "1f3ff": ["1f6b4-1f3ff-200d-2640-fe0f", 46, 18, 5, ["\u{1F6B4}\u{1F3FF}\u200D\u2640\uFE0F"]] },
          "1f6b4-200d-2642-fe0f": { "1f3fb": ["1f6b4-1f3fb-200d-2642-fe0f", 46, 20, 5, ["\u{1F6B4}\u{1F3FB}\u200D\u2642\uFE0F", "\u{1F6B4}\u{1F3FB}"]], "1f3fc": ["1f6b4-1f3fc-200d-2642-fe0f", 46, 21, 5, ["\u{1F6B4}\u{1F3FC}\u200D\u2642\uFE0F", "\u{1F6B4}\u{1F3FC}"]], "1f3fd": ["1f6b4-1f3fd-200d-2642-fe0f", 46, 22, 5, ["\u{1F6B4}\u{1F3FD}\u200D\u2642\uFE0F", "\u{1F6B4}\u{1F3FD}"]], "1f3fe": ["1f6b4-1f3fe-200d-2642-fe0f", 46, 23, 5, ["\u{1F6B4}\u{1F3FE}\u200D\u2642\uFE0F", "\u{1F6B4}\u{1F3FE}"]], "1f3ff": ["1f6b4-1f3ff-200d-2642-fe0f", 46, 24, 5, ["\u{1F6B4}\u{1F3FF}\u200D\u2642\uFE0F", "\u{1F6B4}\u{1F3FF}"]] },
          "1f6b5-200d-2640-fe0f": { "1f3fb": ["1f6b5-1f3fb-200d-2640-fe0f", 46, 26, 5, ["\u{1F6B5}\u{1F3FB}\u200D\u2640\uFE0F"]], "1f3fc": ["1f6b5-1f3fc-200d-2640-fe0f", 46, 27, 5, ["\u{1F6B5}\u{1F3FC}\u200D\u2640\uFE0F"]], "1f3fd": ["1f6b5-1f3fd-200d-2640-fe0f", 46, 28, 5, ["\u{1F6B5}\u{1F3FD}\u200D\u2640\uFE0F"]], "1f3fe": ["1f6b5-1f3fe-200d-2640-fe0f", 46, 29, 5, ["\u{1F6B5}\u{1F3FE}\u200D\u2640\uFE0F"]], "1f3ff": ["1f6b5-1f3ff-200d-2640-fe0f", 46, 30, 5, ["\u{1F6B5}\u{1F3FF}\u200D\u2640\uFE0F"]] },
          "1f6b5-200d-2642-fe0f": { "1f3fb": ["1f6b5-1f3fb-200d-2642-fe0f", 46, 32, 5, ["\u{1F6B5}\u{1F3FB}\u200D\u2642\uFE0F", "\u{1F6B5}\u{1F3FB}"]], "1f3fc": ["1f6b5-1f3fc-200d-2642-fe0f", 46, 33, 5, ["\u{1F6B5}\u{1F3FC}\u200D\u2642\uFE0F", "\u{1F6B5}\u{1F3FC}"]], "1f3fd": ["1f6b5-1f3fd-200d-2642-fe0f", 46, 34, 5, ["\u{1F6B5}\u{1F3FD}\u200D\u2642\uFE0F", "\u{1F6B5}\u{1F3FD}"]], "1f3fe": ["1f6b5-1f3fe-200d-2642-fe0f", 46, 35, 5, ["\u{1F6B5}\u{1F3FE}\u200D\u2642\uFE0F", "\u{1F6B5}\u{1F3FE}"]], "1f3ff": ["1f6b5-1f3ff-200d-2642-fe0f", 46, 36, 5, ["\u{1F6B5}\u{1F3FF}\u200D\u2642\uFE0F", "\u{1F6B5}\u{1F3FF}"]] },
          "1f6b6-200d-2640-fe0f": { "1f3fb": ["1f6b6-1f3fb-200d-2640-fe0f", 46, 38, 5, ["\u{1F6B6}\u{1F3FB}\u200D\u2640\uFE0F"]], "1f3fc": ["1f6b6-1f3fc-200d-2640-fe0f", 46, 39, 5, ["\u{1F6B6}\u{1F3FC}\u200D\u2640\uFE0F"]], "1f3fd": ["1f6b6-1f3fd-200d-2640-fe0f", 46, 40, 5, ["\u{1F6B6}\u{1F3FD}\u200D\u2640\uFE0F"]], "1f3fe": ["1f6b6-1f3fe-200d-2640-fe0f", 46, 41, 5, ["\u{1F6B6}\u{1F3FE}\u200D\u2640\uFE0F"]], "1f3ff": ["1f6b6-1f3ff-200d-2640-fe0f", 46, 42, 5, ["\u{1F6B6}\u{1F3FF}\u200D\u2640\uFE0F"]] },
          "1f6b6-200d-2642-fe0f": { "1f3fb": ["1f6b6-1f3fb-200d-2642-fe0f", 46, 44, 5, ["\u{1F6B6}\u{1F3FB}\u200D\u2642\uFE0F", "\u{1F6B6}\u{1F3FB}"]], "1f3fc": ["1f6b6-1f3fc-200d-2642-fe0f", 46, 45, 5, ["\u{1F6B6}\u{1F3FC}\u200D\u2642\uFE0F", "\u{1F6B6}\u{1F3FC}"]], "1f3fd": ["1f6b6-1f3fd-200d-2642-fe0f", 46, 46, 5, ["\u{1F6B6}\u{1F3FD}\u200D\u2642\uFE0F", "\u{1F6B6}\u{1F3FD}"]], "1f3fe": ["1f6b6-1f3fe-200d-2642-fe0f", 46, 47, 5, ["\u{1F6B6}\u{1F3FE}\u200D\u2642\uFE0F", "\u{1F6B6}\u{1F3FE}"]], "1f3ff": ["1f6b6-1f3ff-200d-2642-fe0f", 46, 48, 5, ["\u{1F6B6}\u{1F3FF}\u200D\u2642\uFE0F", "\u{1F6B6}\u{1F3FF}"]] },
          "1f926-200d-2640-fe0f": { "1f3fb": ["1f926-1f3fb-200d-2640-fe0f", 47, 1, 5, ["\u{1F926}\u{1F3FB}\u200D\u2640\uFE0F"]], "1f3fc": ["1f926-1f3fc-200d-2640-fe0f", 47, 2, 5, ["\u{1F926}\u{1F3FC}\u200D\u2640\uFE0F"]], "1f3fd": ["1f926-1f3fd-200d-2640-fe0f", 47, 3, 5, ["\u{1F926}\u{1F3FD}\u200D\u2640\uFE0F"]], "1f3fe": ["1f926-1f3fe-200d-2640-fe0f", 47, 4, 5, ["\u{1F926}\u{1F3FE}\u200D\u2640\uFE0F"]], "1f3ff": ["1f926-1f3ff-200d-2640-fe0f", 47, 5, 5, ["\u{1F926}\u{1F3FF}\u200D\u2640\uFE0F"]] },
          "1f926-200d-2642-fe0f": { "1f3fb": ["1f926-1f3fb-200d-2642-fe0f", 47, 7, 5, ["\u{1F926}\u{1F3FB}\u200D\u2642\uFE0F"]], "1f3fc": ["1f926-1f3fc-200d-2642-fe0f", 47, 8, 5, ["\u{1F926}\u{1F3FC}\u200D\u2642\uFE0F"]], "1f3fd": ["1f926-1f3fd-200d-2642-fe0f", 47, 9, 5, ["\u{1F926}\u{1F3FD}\u200D\u2642\uFE0F"]], "1f3fe": ["1f926-1f3fe-200d-2642-fe0f", 47, 10, 5, ["\u{1F926}\u{1F3FE}\u200D\u2642\uFE0F"]], "1f3ff": ["1f926-1f3ff-200d-2642-fe0f", 47, 11, 5, ["\u{1F926}\u{1F3FF}\u200D\u2642\uFE0F"]] },
          "1f937-200d-2640-fe0f": { "1f3fb": ["1f937-1f3fb-200d-2640-fe0f", 47, 13, 5, ["\u{1F937}\u{1F3FB}\u200D\u2640\uFE0F"]], "1f3fc": ["1f937-1f3fc-200d-2640-fe0f", 47, 14, 5, ["\u{1F937}\u{1F3FC}\u200D\u2640\uFE0F"]], "1f3fd": ["1f937-1f3fd-200d-2640-fe0f", 47, 15, 5, ["\u{1F937}\u{1F3FD}\u200D\u2640\uFE0F"]], "1f3fe": ["1f937-1f3fe-200d-2640-fe0f", 47, 16, 5, ["\u{1F937}\u{1F3FE}\u200D\u2640\uFE0F"]], "1f3ff": ["1f937-1f3ff-200d-2640-fe0f", 47, 17, 5, ["\u{1F937}\u{1F3FF}\u200D\u2640\uFE0F"]] },
          "1f937-200d-2642-fe0f": { "1f3fb": ["1f937-1f3fb-200d-2642-fe0f", 47, 19, 5, ["\u{1F937}\u{1F3FB}\u200D\u2642\uFE0F"]], "1f3fc": ["1f937-1f3fc-200d-2642-fe0f", 47, 20, 5, ["\u{1F937}\u{1F3FC}\u200D\u2642\uFE0F"]], "1f3fd": ["1f937-1f3fd-200d-2642-fe0f", 47, 21, 5, ["\u{1F937}\u{1F3FD}\u200D\u2642\uFE0F"]], "1f3fe": ["1f937-1f3fe-200d-2642-fe0f", 47, 22, 5, ["\u{1F937}\u{1F3FE}\u200D\u2642\uFE0F"]], "1f3ff": ["1f937-1f3ff-200d-2642-fe0f", 47, 23, 5, ["\u{1F937}\u{1F3FF}\u200D\u2642\uFE0F"]] },
          "1f938-200d-2640-fe0f": { "1f3fb": ["1f938-1f3fb-200d-2640-fe0f", 47, 25, 5, ["\u{1F938}\u{1F3FB}\u200D\u2640\uFE0F"]], "1f3fc": ["1f938-1f3fc-200d-2640-fe0f", 47, 26, 5, ["\u{1F938}\u{1F3FC}\u200D\u2640\uFE0F"]], "1f3fd": ["1f938-1f3fd-200d-2640-fe0f", 47, 27, 5, ["\u{1F938}\u{1F3FD}\u200D\u2640\uFE0F"]], "1f3fe": ["1f938-1f3fe-200d-2640-fe0f", 47, 28, 5, ["\u{1F938}\u{1F3FE}\u200D\u2640\uFE0F"]], "1f3ff": ["1f938-1f3ff-200d-2640-fe0f", 47, 29, 5, ["\u{1F938}\u{1F3FF}\u200D\u2640\uFE0F"]] },
          "1f938-200d-2642-fe0f": { "1f3fb": ["1f938-1f3fb-200d-2642-fe0f", 47, 31, 5, ["\u{1F938}\u{1F3FB}\u200D\u2642\uFE0F"]], "1f3fc": ["1f938-1f3fc-200d-2642-fe0f", 47, 32, 5, ["\u{1F938}\u{1F3FC}\u200D\u2642\uFE0F"]], "1f3fd": ["1f938-1f3fd-200d-2642-fe0f", 47, 33, 5, ["\u{1F938}\u{1F3FD}\u200D\u2642\uFE0F"]], "1f3fe": ["1f938-1f3fe-200d-2642-fe0f", 47, 34, 5, ["\u{1F938}\u{1F3FE}\u200D\u2642\uFE0F"]], "1f3ff": ["1f938-1f3ff-200d-2642-fe0f", 47, 35, 5, ["\u{1F938}\u{1F3FF}\u200D\u2642\uFE0F"]] },
          "1f939-200d-2640-fe0f": { "1f3fb": ["1f939-1f3fb-200d-2640-fe0f", 47, 37, 5, ["\u{1F939}\u{1F3FB}\u200D\u2640\uFE0F"]], "1f3fc": ["1f939-1f3fc-200d-2640-fe0f", 47, 38, 5, ["\u{1F939}\u{1F3FC}\u200D\u2640\uFE0F"]], "1f3fd": ["1f939-1f3fd-200d-2640-fe0f", 47, 39, 5, ["\u{1F939}\u{1F3FD}\u200D\u2640\uFE0F"]], "1f3fe": ["1f939-1f3fe-200d-2640-fe0f", 47, 40, 5, ["\u{1F939}\u{1F3FE}\u200D\u2640\uFE0F"]], "1f3ff": ["1f939-1f3ff-200d-2640-fe0f", 47, 41, 5, ["\u{1F939}\u{1F3FF}\u200D\u2640\uFE0F"]] },
          "1f939-200d-2642-fe0f": { "1f3fb": ["1f939-1f3fb-200d-2642-fe0f", 47, 43, 5, ["\u{1F939}\u{1F3FB}\u200D\u2642\uFE0F"]], "1f3fc": ["1f939-1f3fc-200d-2642-fe0f", 47, 44, 5, ["\u{1F939}\u{1F3FC}\u200D\u2642\uFE0F"]], "1f3fd": ["1f939-1f3fd-200d-2642-fe0f", 47, 45, 5, ["\u{1F939}\u{1F3FD}\u200D\u2642\uFE0F"]], "1f3fe": ["1f939-1f3fe-200d-2642-fe0f", 47, 46, 5, ["\u{1F939}\u{1F3FE}\u200D\u2642\uFE0F"]], "1f3ff": ["1f939-1f3ff-200d-2642-fe0f", 47, 47, 5, ["\u{1F939}\u{1F3FF}\u200D\u2642\uFE0F"]] },
          "1f93d-200d-2640-fe0f": { "1f3fb": ["1f93d-1f3fb-200d-2640-fe0f", 48, 2, 5, ["\u{1F93D}\u{1F3FB}\u200D\u2640\uFE0F"]], "1f3fc": ["1f93d-1f3fc-200d-2640-fe0f", 48, 3, 5, ["\u{1F93D}\u{1F3FC}\u200D\u2640\uFE0F"]], "1f3fd": ["1f93d-1f3fd-200d-2640-fe0f", 48, 4, 5, ["\u{1F93D}\u{1F3FD}\u200D\u2640\uFE0F"]], "1f3fe": ["1f93d-1f3fe-200d-2640-fe0f", 48, 5, 5, ["\u{1F93D}\u{1F3FE}\u200D\u2640\uFE0F"]], "1f3ff": ["1f93d-1f3ff-200d-2640-fe0f", 48, 6, 5, ["\u{1F93D}\u{1F3FF}\u200D\u2640\uFE0F"]] },
          "1f93d-200d-2642-fe0f": { "1f3fb": ["1f93d-1f3fb-200d-2642-fe0f", 48, 8, 5, ["\u{1F93D}\u{1F3FB}\u200D\u2642\uFE0F"]], "1f3fc": ["1f93d-1f3fc-200d-2642-fe0f", 48, 9, 5, ["\u{1F93D}\u{1F3FC}\u200D\u2642\uFE0F"]], "1f3fd": ["1f93d-1f3fd-200d-2642-fe0f", 48, 10, 5, ["\u{1F93D}\u{1F3FD}\u200D\u2642\uFE0F"]], "1f3fe": ["1f93d-1f3fe-200d-2642-fe0f", 48, 11, 5, ["\u{1F93D}\u{1F3FE}\u200D\u2642\uFE0F"]], "1f3ff": ["1f93d-1f3ff-200d-2642-fe0f", 48, 12, 5, ["\u{1F93D}\u{1F3FF}\u200D\u2642\uFE0F"]] },
          "1f93e-200d-2640-fe0f": { "1f3fb": ["1f93e-1f3fb-200d-2640-fe0f", 48, 14, 5, ["\u{1F93E}\u{1F3FB}\u200D\u2640\uFE0F"]], "1f3fc": ["1f93e-1f3fc-200d-2640-fe0f", 48, 15, 5, ["\u{1F93E}\u{1F3FC}\u200D\u2640\uFE0F"]], "1f3fd": ["1f93e-1f3fd-200d-2640-fe0f", 48, 16, 5, ["\u{1F93E}\u{1F3FD}\u200D\u2640\uFE0F"]], "1f3fe": ["1f93e-1f3fe-200d-2640-fe0f", 48, 17, 5, ["\u{1F93E}\u{1F3FE}\u200D\u2640\uFE0F"]], "1f3ff": ["1f93e-1f3ff-200d-2640-fe0f", 48, 18, 5, ["\u{1F93E}\u{1F3FF}\u200D\u2640\uFE0F"]] },
          "1f93e-200d-2642-fe0f": { "1f3fb": ["1f93e-1f3fb-200d-2642-fe0f", 48, 20, 5, ["\u{1F93E}\u{1F3FB}\u200D\u2642\uFE0F"]], "1f3fc": ["1f93e-1f3fc-200d-2642-fe0f", 48, 21, 5, ["\u{1F93E}\u{1F3FC}\u200D\u2642\uFE0F"]], "1f3fd": ["1f93e-1f3fd-200d-2642-fe0f", 48, 22, 5, ["\u{1F93E}\u{1F3FD}\u200D\u2642\uFE0F"]], "1f3fe": ["1f93e-1f3fe-200d-2642-fe0f", 48, 23, 5, ["\u{1F93E}\u{1F3FE}\u200D\u2642\uFE0F"]], "1f3ff": ["1f93e-1f3ff-200d-2642-fe0f", 48, 24, 5, ["\u{1F93E}\u{1F3FF}\u200D\u2642\uFE0F"]] },
          "26f9-fe0f-200d-2640-fe0f": { "1f3fb": ["26f9-1f3fb-200d-2640-fe0f", 48, 26, 5, ["\u26F9\u{1F3FB}\u200D\u2640\uFE0F"]], "1f3fc": ["26f9-1f3fc-200d-2640-fe0f", 48, 27, 5, ["\u26F9\u{1F3FC}\u200D\u2640\uFE0F"]], "1f3fd": ["26f9-1f3fd-200d-2640-fe0f", 48, 28, 5, ["\u26F9\u{1F3FD}\u200D\u2640\uFE0F"]], "1f3fe": ["26f9-1f3fe-200d-2640-fe0f", 48, 29, 5, ["\u26F9\u{1F3FE}\u200D\u2640\uFE0F"]], "1f3ff": ["26f9-1f3ff-200d-2640-fe0f", 48, 30, 5, ["\u26F9\u{1F3FF}\u200D\u2640\uFE0F"]] },
          "26f9-fe0f-200d-2642-fe0f": { "1f3fb": ["26f9-1f3fb-200d-2642-fe0f", 48, 32, 5, ["\u26F9\u{1F3FB}\u200D\u2642\uFE0F", "\u26F9\u{1F3FB}"]], "1f3fc": ["26f9-1f3fc-200d-2642-fe0f", 48, 33, 5, ["\u26F9\u{1F3FC}\u200D\u2642\uFE0F", "\u26F9\u{1F3FC}"]], "1f3fd": ["26f9-1f3fd-200d-2642-fe0f", 48, 34, 5, ["\u26F9\u{1F3FD}\u200D\u2642\uFE0F", "\u26F9\u{1F3FD}"]], "1f3fe": ["26f9-1f3fe-200d-2642-fe0f", 48, 35, 5, ["\u26F9\u{1F3FE}\u200D\u2642\uFE0F", "\u26F9\u{1F3FE}"]], "1f3ff": ["26f9-1f3ff-200d-2642-fe0f", 48, 36, 5, ["\u26F9\u{1F3FF}\u200D\u2642\uFE0F", "\u26F9\u{1F3FF}"]] }
        };
        emoji.prototype.obsoletes_data = {
          "26f9-fe0f-200d-2642-fe0f": ["26f9", 2, 25, 31],
          "26f9-1f3fb-200d-2642-fe0f": ["26f9-1f3fb", 2, 26, 31],
          "26f9-1f3fc-200d-2642-fe0f": ["26f9-1f3fc", 2, 27, 31],
          "26f9-1f3fd-200d-2642-fe0f": ["26f9-1f3fd", 2, 28, 31],
          "26f9-1f3fe-200d-2642-fe0f": ["26f9-1f3fe", 2, 29, 31],
          "26f9-1f3ff-200d-2642-fe0f": ["26f9-1f3ff", 2, 30, 31],
          "1f3c3-200d-2642-fe0f": ["1f3c3", 8, 35, 63],
          "1f3c3-1f3fb-200d-2642-fe0f": ["1f3c3-1f3fb", 8, 36, 63],
          "1f3c3-1f3fc-200d-2642-fe0f": ["1f3c3-1f3fc", 8, 37, 63],
          "1f3c3-1f3fd-200d-2642-fe0f": ["1f3c3-1f3fd", 8, 38, 63],
          "1f3c3-1f3fe-200d-2642-fe0f": ["1f3c3-1f3fe", 8, 39, 63],
          "1f3c3-1f3ff-200d-2642-fe0f": ["1f3c3-1f3ff", 8, 40, 63],
          "1f3c4-200d-2642-fe0f": ["1f3c4", 8, 41, 63],
          "1f3c4-1f3fb-200d-2642-fe0f": ["1f3c4-1f3fb", 8, 42, 63],
          "1f3c4-1f3fc-200d-2642-fe0f": ["1f3c4-1f3fc", 8, 43, 63],
          "1f3c4-1f3fd-200d-2642-fe0f": ["1f3c4-1f3fd", 8, 44, 63],
          "1f3c4-1f3fe-200d-2642-fe0f": ["1f3c4-1f3fe", 8, 45, 63],
          "1f3c4-1f3ff-200d-2642-fe0f": ["1f3c4-1f3ff", 8, 46, 63],
          "1f3ca-200d-2642-fe0f": ["1f3ca", 9, 8, 63],
          "1f3ca-1f3fb-200d-2642-fe0f": ["1f3ca-1f3fb", 9, 9, 63],
          "1f3ca-1f3fc-200d-2642-fe0f": ["1f3ca-1f3fc", 9, 10, 63],
          "1f3ca-1f3fd-200d-2642-fe0f": ["1f3ca-1f3fd", 9, 11, 63],
          "1f3ca-1f3fe-200d-2642-fe0f": ["1f3ca-1f3fe", 9, 12, 63],
          "1f3ca-1f3ff-200d-2642-fe0f": ["1f3ca-1f3ff", 9, 13, 63],
          "1f3cb-fe0f-200d-2642-fe0f": ["1f3cb", 9, 14, 31],
          "1f3cb-1f3fb-200d-2642-fe0f": ["1f3cb-1f3fb", 9, 15, 31],
          "1f3cb-1f3fc-200d-2642-fe0f": ["1f3cb-1f3fc", 9, 16, 31],
          "1f3cb-1f3fd-200d-2642-fe0f": ["1f3cb-1f3fd", 9, 17, 31],
          "1f3cb-1f3fe-200d-2642-fe0f": ["1f3cb-1f3fe", 9, 18, 31],
          "1f3cb-1f3ff-200d-2642-fe0f": ["1f3cb-1f3ff", 9, 19, 31],
          "1f3cc-fe0f-200d-2642-fe0f": ["1f3cc", 9, 20, 31],
          "1f3cc-1f3fb-200d-2642-fe0f": ["1f3cc-1f3fb", 9, 21, 21],
          "1f3cc-1f3fc-200d-2642-fe0f": ["1f3cc-1f3fc", 9, 22, 21],
          "1f3cc-1f3fd-200d-2642-fe0f": ["1f3cc-1f3fd", 9, 23, 21],
          "1f3cc-1f3fe-200d-2642-fe0f": ["1f3cc-1f3fe", 9, 24, 21],
          "1f3cc-1f3ff-200d-2642-fe0f": ["1f3cc-1f3ff", 9, 25, 21],
          "1f468-200d-1f469-200d-1f466": ["1f46a", 14, 20, 63],
          "1f46e-200d-2642-fe0f": ["1f46e", 14, 24, 63],
          "1f46e-1f3fb-200d-2642-fe0f": ["1f46e-1f3fb", 14, 25, 63],
          "1f46e-1f3fc-200d-2642-fe0f": ["1f46e-1f3fc", 14, 26, 63],
          "1f46e-1f3fd-200d-2642-fe0f": ["1f46e-1f3fd", 14, 27, 63],
          "1f46e-1f3fe-200d-2642-fe0f": ["1f46e-1f3fe", 14, 28, 63],
          "1f46e-1f3ff-200d-2642-fe0f": ["1f46e-1f3ff", 14, 29, 63],
          "1f46f-200d-2640-fe0f": ["1f46f", 14, 30, 63],
          "1f471-200d-2642-fe0f": ["1f471", 14, 37, 63],
          "1f471-1f3fb-200d-2642-fe0f": ["1f471-1f3fb", 14, 38, 63],
          "1f471-1f3fc-200d-2642-fe0f": ["1f471-1f3fc", 14, 39, 63],
          "1f471-1f3fd-200d-2642-fe0f": ["1f471-1f3fd", 14, 40, 63],
          "1f471-1f3fe-200d-2642-fe0f": ["1f471-1f3fe", 14, 41, 63],
          "1f471-1f3ff-200d-2642-fe0f": ["1f471-1f3ff", 14, 42, 63],
          "1f473-200d-2642-fe0f": ["1f473", 15, 0, 63],
          "1f473-1f3fb-200d-2642-fe0f": ["1f473-1f3fb", 15, 1, 63],
          "1f473-1f3fc-200d-2642-fe0f": ["1f473-1f3fc", 15, 2, 63],
          "1f473-1f3fd-200d-2642-fe0f": ["1f473-1f3fd", 15, 3, 63],
          "1f473-1f3fe-200d-2642-fe0f": ["1f473-1f3fe", 15, 4, 63],
          "1f473-1f3ff-200d-2642-fe0f": ["1f473-1f3ff", 15, 5, 63],
          "1f477-200d-2642-fe0f": ["1f477", 15, 24, 63],
          "1f477-1f3fb-200d-2642-fe0f": ["1f477-1f3fb", 15, 25, 63],
          "1f477-1f3fc-200d-2642-fe0f": ["1f477-1f3fc", 15, 26, 63],
          "1f477-1f3fd-200d-2642-fe0f": ["1f477-1f3fd", 15, 27, 63],
          "1f477-1f3fe-200d-2642-fe0f": ["1f477-1f3fe", 15, 28, 63],
          "1f477-1f3ff-200d-2642-fe0f": ["1f477-1f3ff", 15, 29, 63],
          "1f481-200d-2640-fe0f": ["1f481", 16, 0, 63],
          "1f481-1f3fb-200d-2640-fe0f": ["1f481-1f3fb", 16, 1, 63],
          "1f481-1f3fc-200d-2640-fe0f": ["1f481-1f3fc", 16, 2, 63],
          "1f481-1f3fd-200d-2640-fe0f": ["1f481-1f3fd", 16, 3, 63],
          "1f481-1f3fe-200d-2640-fe0f": ["1f481-1f3fe", 16, 4, 63],
          "1f481-1f3ff-200d-2640-fe0f": ["1f481-1f3ff", 16, 5, 63],
          "1f482-200d-2642-fe0f": ["1f482", 16, 6, 63],
          "1f482-1f3fb-200d-2642-fe0f": ["1f482-1f3fb", 16, 7, 63],
          "1f482-1f3fc-200d-2642-fe0f": ["1f482-1f3fc", 16, 8, 63],
          "1f482-1f3fd-200d-2642-fe0f": ["1f482-1f3fd", 16, 9, 63],
          "1f482-1f3fe-200d-2642-fe0f": ["1f482-1f3fe", 16, 10, 63],
          "1f482-1f3ff-200d-2642-fe0f": ["1f482-1f3ff", 16, 11, 63],
          "1f486-200d-2640-fe0f": ["1f486", 16, 25, 63],
          "1f486-1f3fb-200d-2640-fe0f": ["1f486-1f3fb", 16, 26, 63],
          "1f486-1f3fc-200d-2640-fe0f": ["1f486-1f3fc", 16, 27, 63],
          "1f486-1f3fd-200d-2640-fe0f": ["1f486-1f3fd", 16, 28, 63],
          "1f486-1f3fe-200d-2640-fe0f": ["1f486-1f3fe", 16, 29, 63],
          "1f486-1f3ff-200d-2640-fe0f": ["1f486-1f3ff", 16, 30, 63],
          "1f487-200d-2640-fe0f": ["1f487", 16, 31, 63],
          "1f487-1f3fb-200d-2640-fe0f": ["1f487-1f3fb", 16, 32, 63],
          "1f487-1f3fc-200d-2640-fe0f": ["1f487-1f3fc", 16, 33, 63],
          "1f487-1f3fd-200d-2640-fe0f": ["1f487-1f3fd", 16, 34, 63],
          "1f487-1f3fe-200d-2640-fe0f": ["1f487-1f3fe", 16, 35, 63],
          "1f487-1f3ff-200d-2640-fe0f": ["1f487-1f3ff", 16, 36, 63],
          "1f469-200d-2764-fe0f-200d-1f48b-200d-1f468": ["1f48f", 16, 44, 61],
          "1f469-200d-2764-fe0f-200d-1f468": ["1f491", 16, 46, 61],
          "1f575-fe0f-200d-2642-fe0f": ["1f575", 21, 17, 31],
          "1f575-1f3fb-200d-2642-fe0f": ["1f575-1f3fb", 21, 18, 31],
          "1f575-1f3fc-200d-2642-fe0f": ["1f575-1f3fc", 21, 19, 31],
          "1f575-1f3fd-200d-2642-fe0f": ["1f575-1f3fd", 21, 20, 31],
          "1f575-1f3fe-200d-2642-fe0f": ["1f575-1f3fe", 21, 21, 31],
          "1f575-1f3ff-200d-2642-fe0f": ["1f575-1f3ff", 21, 22, 31],
          "1f645-200d-2640-fe0f": ["1f645", 24, 4, 63],
          "1f645-1f3fb-200d-2640-fe0f": ["1f645-1f3fb", 24, 5, 63],
          "1f645-1f3fc-200d-2640-fe0f": ["1f645-1f3fc", 24, 6, 63],
          "1f645-1f3fd-200d-2640-fe0f": ["1f645-1f3fd", 24, 7, 63],
          "1f645-1f3fe-200d-2640-fe0f": ["1f645-1f3fe", 24, 8, 63],
          "1f645-1f3ff-200d-2640-fe0f": ["1f645-1f3ff", 24, 9, 63],
          "1f646-200d-2640-fe0f": ["1f646", 24, 10, 63],
          "1f646-1f3fb-200d-2640-fe0f": ["1f646-1f3fb", 24, 11, 63],
          "1f646-1f3fc-200d-2640-fe0f": ["1f646-1f3fc", 24, 12, 63],
          "1f646-1f3fd-200d-2640-fe0f": ["1f646-1f3fd", 24, 13, 63],
          "1f646-1f3fe-200d-2640-fe0f": ["1f646-1f3fe", 24, 14, 63],
          "1f646-1f3ff-200d-2640-fe0f": ["1f646-1f3ff", 24, 15, 63],
          "1f647-200d-2642-fe0f": ["1f647", 24, 16, 63],
          "1f647-1f3fb-200d-2642-fe0f": ["1f647-1f3fb", 24, 17, 63],
          "1f647-1f3fc-200d-2642-fe0f": ["1f647-1f3fc", 24, 18, 63],
          "1f647-1f3fd-200d-2642-fe0f": ["1f647-1f3fd", 24, 19, 63],
          "1f647-1f3fe-200d-2642-fe0f": ["1f647-1f3fe", 24, 20, 63],
          "1f647-1f3ff-200d-2642-fe0f": ["1f647-1f3ff", 24, 21, 63],
          "1f64b-200d-2640-fe0f": ["1f64b", 24, 25, 63],
          "1f64b-1f3fb-200d-2640-fe0f": ["1f64b-1f3fb", 24, 26, 63],
          "1f64b-1f3fc-200d-2640-fe0f": ["1f64b-1f3fc", 24, 27, 63],
          "1f64b-1f3fd-200d-2640-fe0f": ["1f64b-1f3fd", 24, 28, 63],
          "1f64b-1f3fe-200d-2640-fe0f": ["1f64b-1f3fe", 24, 29, 63],
          "1f64b-1f3ff-200d-2640-fe0f": ["1f64b-1f3ff", 24, 30, 63],
          "1f64d-200d-2640-fe0f": ["1f64d", 24, 37, 63],
          "1f64d-1f3fb-200d-2640-fe0f": ["1f64d-1f3fb", 24, 38, 63],
          "1f64d-1f3fc-200d-2640-fe0f": ["1f64d-1f3fc", 24, 39, 63],
          "1f64d-1f3fd-200d-2640-fe0f": ["1f64d-1f3fd", 24, 40, 63],
          "1f64d-1f3fe-200d-2640-fe0f": ["1f64d-1f3fe", 24, 41, 63],
          "1f64d-1f3ff-200d-2640-fe0f": ["1f64d-1f3ff", 24, 42, 63],
          "1f64e-200d-2640-fe0f": ["1f64e", 24, 43, 63],
          "1f64e-1f3fb-200d-2640-fe0f": ["1f64e-1f3fb", 24, 44, 63],
          "1f64e-1f3fc-200d-2640-fe0f": ["1f64e-1f3fc", 24, 45, 63],
          "1f64e-1f3fd-200d-2640-fe0f": ["1f64e-1f3fd", 24, 46, 63],
          "1f64e-1f3fe-200d-2640-fe0f": ["1f64e-1f3fe", 24, 47, 63],
          "1f64e-1f3ff-200d-2640-fe0f": ["1f64e-1f3ff", 24, 48, 63],
          "1f6a3-200d-2642-fe0f": ["1f6a3", 25, 41, 63],
          "1f6a3-1f3fb-200d-2642-fe0f": ["1f6a3-1f3fb", 25, 42, 31],
          "1f6a3-1f3fc-200d-2642-fe0f": ["1f6a3-1f3fc", 25, 43, 31],
          "1f6a3-1f3fd-200d-2642-fe0f": ["1f6a3-1f3fd", 25, 44, 31],
          "1f6a3-1f3fe-200d-2642-fe0f": ["1f6a3-1f3fe", 25, 45, 31],
          "1f6a3-1f3ff-200d-2642-fe0f": ["1f6a3-1f3ff", 25, 46, 31],
          "1f6b4-200d-2642-fe0f": ["1f6b4", 26, 14, 63],
          "1f6b4-1f3fb-200d-2642-fe0f": ["1f6b4-1f3fb", 26, 15, 63],
          "1f6b4-1f3fc-200d-2642-fe0f": ["1f6b4-1f3fc", 26, 16, 63],
          "1f6b4-1f3fd-200d-2642-fe0f": ["1f6b4-1f3fd", 26, 17, 63],
          "1f6b4-1f3fe-200d-2642-fe0f": ["1f6b4-1f3fe", 26, 18, 63],
          "1f6b4-1f3ff-200d-2642-fe0f": ["1f6b4-1f3ff", 26, 19, 63],
          "1f6b5-200d-2642-fe0f": ["1f6b5", 26, 20, 63],
          "1f6b5-1f3fb-200d-2642-fe0f": ["1f6b5-1f3fb", 26, 21, 63],
          "1f6b5-1f3fc-200d-2642-fe0f": ["1f6b5-1f3fc", 26, 22, 63],
          "1f6b5-1f3fd-200d-2642-fe0f": ["1f6b5-1f3fd", 26, 23, 63],
          "1f6b5-1f3fe-200d-2642-fe0f": ["1f6b5-1f3fe", 26, 24, 63],
          "1f6b5-1f3ff-200d-2642-fe0f": ["1f6b5-1f3ff", 26, 25, 63],
          "1f6b6-200d-2642-fe0f": ["1f6b6", 26, 26, 63],
          "1f6b6-1f3fb-200d-2642-fe0f": ["1f6b6-1f3fb", 26, 27, 63],
          "1f6b6-1f3fc-200d-2642-fe0f": ["1f6b6-1f3fc", 26, 28, 63],
          "1f6b6-1f3fd-200d-2642-fe0f": ["1f6b6-1f3fd", 26, 29, 63],
          "1f6b6-1f3fe-200d-2642-fe0f": ["1f6b6-1f3fe", 26, 30, 63],
          "1f6b6-1f3ff-200d-2642-fe0f": ["1f6b6-1f3ff", 26, 31, 63]
        };
        if (typeof exports !== "undefined") {
          if (typeof module !== "undefined" && module.exports) {
            exports = module.exports = emoji;
          }
          exports.EmojiConvertor = emoji;
        } else if (typeof define === "function" && define.amd) {
          define(function() {
            return emoji;
          });
        } else {
          root.EmojiConvertor = emoji;
        }
      }).call(function() {
        return this || (typeof window !== "undefined" ? window : global);
      }());
    }
  });

  // src/App.js
  var import_react18 = __toESM(require_react());

  // src/components/Launcher.js
  var import_prop_types3 = __toESM(require_prop_types());
  var import_react16 = __toESM(require_react());

  // src/components/ChatWindow.js
  var import_prop_types2 = __toESM(require_prop_types());
  var import_react15 = __toESM(require_react());

  // src/components/MessageList.js
  var import_react8 = __toESM(require_react());

  // src/components/Messages/index.js
  var import_react7 = __toESM(require_react());

  // src/components/Messages/TextMessage.js
  var import_react = __toESM(require_react());
  var import_react_linkify = __toESM(require_Linkify());
  var TextMessage = (props) => {
    return /* @__PURE__ */ import_react.default.createElement("div", { className: "sc-message--text" }, /* @__PURE__ */ import_react.default.createElement(import_react_linkify.default, { properties: { target: "_blank" } }, props.data));
  };
  var TextMessage_default = TextMessage;

  // src/components/Messages/EmojiMessage.js
  var import_react2 = __toESM(require_react());
  var EmojiMessage = (props) => {
    return /* @__PURE__ */ import_react2.default.createElement("div", { className: "sc-message--emoji" }, props.data.emoji);
  };
  var EmojiMessage_default = EmojiMessage;

  // src/components/Messages/FileMessage.js
  var import_react4 = __toESM(require_react());

  // src/components/icons/FileIcon.js
  var import_react3 = __toESM(require_react());
  var FileIcon = class extends import_react3.Component {
    _handleClick(e) {
      e.preventDefault();
      this.props.onClick && this.props.onClick(e);
    }
    render() {
      return /* @__PURE__ */ import_react3.default.createElement(
        "button",
        {
          onFocus: this.props.onFocus,
          onBlur: this.props.onBlur,
          onClick: this._handleClick.bind(this),
          className: "sc-user-input--file-icon-wrapper"
        },
        /* @__PURE__ */ import_react3.default.createElement(
          "svg",
          {
            version: "1.1",
            className: "sc-user-input--file-icon",
            xmlns: "http://www.w3.org/2000/svg",
            x: "0px",
            y: "0px",
            width: "60px",
            height: "60px",
            viewBox: "0 0 55 55",
            enableBackground: "new 0 0 60 60"
          },
          /* @__PURE__ */ import_react3.default.createElement("g", null, /* @__PURE__ */ import_react3.default.createElement("path", { d: "M43.922,6.653c-2.643-2.644-6.201-4.107-9.959-4.069c-3.774,0.019-7.32,1.497-9.983,4.161l-12.3,12.3l-8.523,8.521\n            c-4.143,4.144-4.217,10.812-0.167,14.862c1.996,1.996,4.626,2.989,7.277,2.989c2.73,0,5.482-1.055,7.583-3.156l15.547-15.545\n            c0.002-0.002,0.002-0.004,0.004-0.005l5.358-5.358c1.394-1.393,2.176-3.24,2.201-5.2c0.026-1.975-0.716-3.818-2.09-5.192\n            c-2.834-2.835-7.496-2.787-10.394,0.108L9.689,29.857c-0.563,0.563-0.563,1.474,0,2.036c0.281,0.28,0.649,0.421,1.018,0.421\n            c0.369,0,0.737-0.141,1.018-0.421l18.787-18.788c1.773-1.774,4.609-1.824,6.322-0.11c0.82,0.82,1.263,1.928,1.247,3.119\n            c-0.017,1.205-0.497,2.342-1.357,3.201l-5.55,5.551c-0.002,0.002-0.002,0.004-0.004,0.005L15.814,40.225\n            c-3.02,3.02-7.86,3.094-10.789,0.167c-2.928-2.929-2.854-7.77,0.167-10.791l0.958-0.958c0.001-0.002,0.004-0.002,0.005-0.004\n            L26.016,8.78c2.123-2.124,4.951-3.303,7.961-3.317c2.998,0.02,5.814,1.13,7.91,3.226c4.35,4.351,4.309,11.472-0.093,15.873\n            L25.459,40.895c-0.563,0.562-0.563,1.473,0,2.035c0.281,0.281,0.65,0.422,1.018,0.422c0.369,0,0.737-0.141,1.018-0.422\n            L43.83,26.596C49.354,21.073,49.395,12.126,43.922,6.653z" }))
        )
      );
    }
  };
  var FileIcon_default = FileIcon;

  // src/components/Messages/FileMessage.js
  var FileMessage = (props) => {
    return /* @__PURE__ */ import_react4.default.createElement(import_react4.default.Fragment, null, /* @__PURE__ */ import_react4.default.createElement("a", { className: "sc-message--file", href: props.data.media_url, download: props.data.media_url }, /* @__PURE__ */ import_react4.default.createElement("img", { src: props.data.media_url, width: "200", height: "150" }), props.data.mi));
  };
  var FileMessage_default = FileMessage;

  // src/components/Messages/VideoMessage.js
  var import_react5 = __toESM(require_react());
  var VideoMessage = (props) => {
    return /* @__PURE__ */ import_react5.default.createElement(import_react5.default.Fragment, null, /* @__PURE__ */ import_react5.default.createElement("video", { width: "200", height: "150", controls: true }, /* @__PURE__ */ import_react5.default.createElement("source", { src: props.data.media_url, type: "video/mp4" }), /* @__PURE__ */ import_react5.default.createElement("source", { src: props.data.media_url, type: "video/ogg" }), "Your browser does not support the video tag."));
  };
  var VideoMessage_default = VideoMessage;

  // src/components/Messages/DocumentMessage.js
  var import_react6 = __toESM(require_react());
  var import_react_linkify2 = __toESM(require_Linkify());
  var DocumentMessage = (props) => {
    const PrintDocIcon = ({ type }) => {
      if (type == "application/pdf") {
        return /* @__PURE__ */ import_react6.default.createElement("img", { src: require_pdf() });
      }
      if (type == "application/vnd.ms-excel" || type == "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet") {
        return /* @__PURE__ */ import_react6.default.createElement("img", { src: require_excel() });
      }
      if (type == "text/csv") {
        return /* @__PURE__ */ import_react6.default.createElement("img", { src: require_csv() });
      }
      if (type == "application/msword" || type == "application/vnd.openxmlformats-officedocument.wordprocessingml.document") {
        return /* @__PURE__ */ import_react6.default.createElement("img", { src: require_doc() });
      }
      if (type == "application/zip") {
        return /* @__PURE__ */ import_react6.default.createElement("img", { src: require_zip() });
      }
      if (type == "application/vnd.ms-powerpoint") {
        return /* @__PURE__ */ import_react6.default.createElement("img", { src: require_ppt() });
      }
      if (type == "video/mp4") {
        return /* @__PURE__ */ import_react6.default.createElement("img", { src: require_music() });
      }
      return /* @__PURE__ */ import_react6.default.createElement("img", { src: require_gala_file() });
    };
    return /* @__PURE__ */ import_react6.default.createElement("div", { className: "sc-message--text" }, /* @__PURE__ */ import_react6.default.createElement(PrintDocIcon, { type: props.data.media_mime_type }), props.data.media_name);
  };
  var DocumentMessage_default = DocumentMessage;

  // src/components/Messages/index.js
  var Message = class extends import_react7.Component {
    _renderMessageOfType(type) {
      console.log(type);
      switch (type) {
        case "0":
          return /* @__PURE__ */ import_react7.default.createElement(TextMessage_default, { ...this.props.message });
        case "emoji":
          return /* @__PURE__ */ import_react7.default.createElement(EmojiMessage_default, { ...this.props.message });
        case "1":
          return /* @__PURE__ */ import_react7.default.createElement(FileMessage_default, { data: this.props.message });
        case "3":
          return /* @__PURE__ */ import_react7.default.createElement(VideoMessage_default, { data: this.props.message });
        case "2":
          return /* @__PURE__ */ import_react7.default.createElement(VideoMessage_default, { data: this.props.message });
        case "9":
          return /* @__PURE__ */ import_react7.default.createElement(DocumentMessage_default, { data: this.props.message });
        default:
          console.error(`Attempting to load message with unsupported file type '${type}'`);
      }
    }
    render() {
      console.log(this.props.message);
      let contentClassList = [
        "sc-message--content",
        this.props.message.key_from_me === 0 ? "sent" : "received"
      ];
      return /* @__PURE__ */ import_react7.default.createElement("div", { className: "sc-message" }, /* @__PURE__ */ import_react7.default.createElement("div", { className: contentClassList.join(" ") }, this._renderMessageOfType(this.props.message.media_wa_type)));
    }
  };
  var Messages_default = Message;

  // src/components/MessageList.js
  var MessageList = class extends import_react8.Component {
    componentDidUpdate(_prevProps, _prevState) {
      this.scrollList.scrollTop = this.scrollList.scrollHeight;
    }
    render() {
      return /* @__PURE__ */ import_react8.default.createElement("div", { className: "sc-message-list", ref: (el) => this.scrollList = el }, this.props.messages.map((message, i) => {
        return /* @__PURE__ */ import_react8.default.createElement(Messages_default, { message, key: i });
      }));
    }
  };
  var MessageList_default = MessageList;

  // src/components/UserInput.js
  var import_prop_types = __toESM(require_prop_types());
  var import_react13 = __toESM(require_react());

  // src/components/icons/SendIcon.js
  var import_react9 = __toESM(require_react());
  var SendIcon = class extends import_react9.Component {
    render() {
      return /* @__PURE__ */ import_react9.default.createElement(
        "button",
        {
          onFocus: this.props.onFocus,
          onBlur: this.props.onBlur,
          onClick: (e) => {
            e.preventDefault();
            this.props.onClick(e);
          },
          className: "sc-user-input--send-icon-wrapper"
        },
        /* @__PURE__ */ import_react9.default.createElement(
          "svg",
          {
            version: "1.1",
            className: "sc-user-input--send-icon",
            xmlns: "http://www.w3.org/2000/svg",
            x: "0px",
            y: "0px",
            width: "37.393px",
            height: "37.393px",
            viewBox: "0 0 37.393 37.393",
            enableBackground: "new 0 0 37.393 37.393"
          },
          /* @__PURE__ */ import_react9.default.createElement("g", { id: "Layer_2" }, /* @__PURE__ */ import_react9.default.createElement("path", { d: "M36.511,17.594L2.371,2.932c-0.374-0.161-0.81-0.079-1.1,0.21C0.982,3.43,0.896,3.865,1.055,4.241l5.613,13.263\n          L2.082,32.295c-0.115,0.372-0.004,0.777,0.285,1.038c0.188,0.169,0.427,0.258,0.67,0.258c0.132,0,0.266-0.026,0.392-0.08\n          l33.079-14.078c0.368-0.157,0.607-0.519,0.608-0.919S36.879,17.752,36.511,17.594z M4.632,30.825L8.469,18.45h8.061\n          c0.552,0,1-0.448,1-1s-0.448-1-1-1H8.395L3.866,5.751l29.706,12.757L4.632,30.825z" }))
        )
      );
    }
  };
  var SendIcon_default = SendIcon;

  // src/components/icons/EmojiIcon.js
  var import_react10 = __toESM(require_react());
  var EmojiIcon = ({ tooltip, onClick, isActive }) => /* @__PURE__ */ import_react10.default.createElement("div", { className: "sc-user-input--picker-wrapper" }, tooltip, /* @__PURE__ */ import_react10.default.createElement("button", { id: "sc-emoji-picker-button", className: "sc-user-input--emoji-icon-wrapper", onClick }, /* @__PURE__ */ import_react10.default.createElement(
    "svg",
    {
      className: `sc-user-input--emoji-icon ${isActive ? "active" : ""}`,
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      x: "0px",
      y: "0px",
      width: "100%",
      height: "10px",
      viewBox: "0 0 37 37",
      enableBackground: "new 0 0 37 37"
    },
    /* @__PURE__ */ import_react10.default.createElement("g", null, /* @__PURE__ */ import_react10.default.createElement(
      "path",
      {
        d: "M18.696,37C8.387,37,0,29.006,0,18.696C0,8.387,8.387,0,18.696,0c10.31,0,18.696,8.387,18.696,18.696 C37,29.006,29.006,37,18.696,37z M18.696,2C9.49,2,2,9.49,2,18.696c0,9.206,7.49,16.696,16.696,16.696 c9.206,0,16.696-7.49,16.696-16.696C35.393,9.49,27.902,2,18.696,2z"
      }
    )),
    /* @__PURE__ */ import_react10.default.createElement("g", null, /* @__PURE__ */ import_react10.default.createElement("circle", { cx: "12.379", cy: "14.359", r: "1.938" })),
    /* @__PURE__ */ import_react10.default.createElement("g", null, /* @__PURE__ */ import_react10.default.createElement("circle", { cx: "24.371", cy: "14.414", r: "1.992" })),
    /* @__PURE__ */ import_react10.default.createElement("g", null, /* @__PURE__ */ import_react10.default.createElement(
      "path",
      {
        d: "M18.035,27.453c-5.748,0-8.342-4.18-8.449-4.357c-0.286-0.473-0.135-1.087,0.338-1.373 c0.471-0.286,1.084-0.136,1.372,0.335c0.094,0.151,2.161,3.396,6.74,3.396c4.713,0,7.518-3.462,7.545-3.497 c0.343-0.432,0.973-0.504,1.405-0.161c0.433,0.344,0.505,0.973,0.161,1.405C27.009,23.374,23.703,27.453,18.035,27.453z"
      }
    ))
  )));
  var EmojiIcon_default = EmojiIcon;

  // src/components/popups/PopupWindow.js
  var import_react11 = __toESM(require_react());
  var PopupWindow = class extends import_react11.Component {
    componentDidMount() {
      this.scLauncher = document.querySelector("#sc-launcher");
      this.scLauncher.addEventListener("click", this.interceptLauncherClick);
    }
    componentWillUnmount() {
      this.scLauncher.removeEventListener("click", this.interceptLauncherClick);
    }
    interceptLauncherClick = (e) => {
      const { isOpen } = this.props;
      const clickedOutside = !this.emojiPopup.contains(e.target) && isOpen;
      clickedOutside && this.props.onClickedOutside(e);
    };
    render() {
      const { isOpen, children } = this.props;
      return /* @__PURE__ */ import_react11.default.createElement("div", { className: "sc-popup-window", ref: (e) => this.emojiPopup = e }, /* @__PURE__ */ import_react11.default.createElement("div", { className: `sc-popup-window--cointainer ${isOpen ? "" : "closed"}` }, /* @__PURE__ */ import_react11.default.createElement(
        "input",
        {
          onChange: this.props.onInputChange,
          className: "sc-popup-window--search",
          placeholder: "Search emoji..."
        }
      ), children));
    }
  };
  var PopupWindow_default = PopupWindow;

  // src/components/emoji-picker/EmojiPicker.js
  var import_react12 = __toESM(require_react());
  var import_emoji_js = __toESM(require_emoji());

  // src/components/emoji-picker/emojiData.json
  var emojiData_default = [{ name: "People", emojis: [{ no: 6, code: "1F604", char: "\u{1F604}", name: "grinning face with smiling eyes" }, { no: 5, code: "1F603", char: "\u{1F603}", name: "grinning face with big eyes" }, { no: 1, code: "1F600", char: "\u{1F600}", name: "grinning face" }, { no: 10, code: "1F60A", char: "\u{1F60A}", name: "smiling face with smiling eyes" }, { no: 9, code: "1F609", char: "\u{1F609}", name: "winking face" }, { no: 13, code: "1F60D", char: "\u{1F60D}", name: "smiling face with heart-eyes" }, { no: 14, code: "1F618", char: "\u{1F618}", name: "face blowing a kiss" }, { no: 17, code: "1F61A", char: "\u{1F61A}", name: "kissing face with closed eyes" }, { no: 15, code: "1F617", char: "\u{1F617}", name: "kissing face" }, { no: 16, code: "1F619", char: "\u{1F619}", name: "kissing face with smiling eyes" }, { no: 39, code: "1F61C", char: "\u{1F61C}", name: "winking face with tongue" }, { no: 40, code: "1F61D", char: "\u{1F61D}", name: "squinting face with tongue" }, { no: 38, code: "1F61B", char: "\u{1F61B}", name: "face with tongue" }, { no: 65, code: "1F633", char: "\u{1F633}", name: "flushed face" }, { no: 2, code: "1F601", char: "\u{1F601}", name: "beaming face with smiling eyes" }, { no: 44, code: "1F614", char: "\u{1F614}", name: "pensive face" }, { no: 37, code: "1F60C", char: "\u{1F60C}", name: "relieved face" }, { no: 42, code: "1F612", char: "\u{1F612}", name: "unamused face" }, { no: 52, code: "1F61E", char: "\u{1F61E}", name: "disappointed face" }, { no: 29, code: "1F623", char: "\u{1F623}", name: "persevering face" }, { no: 55, code: "1F622", char: "\u{1F622}", name: "crying face" }, { no: 3, code: "1F602", char: "\u{1F602}", name: "face with tears of joy" }, { no: 56, code: "1F62D", char: "\u{1F62D}", name: "loudly crying face" }, { no: 34, code: "1F62A", char: "\u{1F62A}", name: "sleepy face" }, { no: 30, code: "1F625", char: "\u{1F625}", name: "sad but relieved face" }, { no: 63, code: "1F630", char: "\u{1F630}", name: "anxious face with sweat" }, { no: 7, code: "1F605", char: "\u{1F605}", name: "grinning face with sweat" }, { no: 43, code: "1F613", char: "\u{1F613}", name: "downcast face with sweat" }, { no: 60, code: "1F629", char: "\u{1F629}", name: "weary face" }, { no: 35, code: "1F62B", char: "\u{1F62B}", name: "tired face" }, { no: 59, code: "1F628", char: "\u{1F628}", name: "fearful face" }, { no: 64, code: "1F631", char: "\u{1F631}", name: "face screaming in fear" }, { no: 69, code: "1F620", char: "\u{1F620}", name: "angry face" }, { no: 68, code: "1F621", char: "\u{1F621}", name: "pouting face" }, { no: 54, code: "1F624", char: "\u{1F624}", name: "face with steam from nose" }, { no: 51, code: "1F616", char: "\u{1F616}", name: "confounded face" }, { no: 8, code: "1F606", char: "\u{1F606}", name: "grinning squinting face" }, { no: 11, code: "1F60B", char: "\u{1F60B}", name: "face savoring food" }, { no: 71, code: "1F637", char: "\u{1F637}", name: "face with medical mask" }, { no: 12, code: "1F60E", char: "\u{1F60E}", name: "smiling face with sunglasses" }, { no: 36, code: "1F634", char: "\u{1F634}", name: "sleeping face" }, { no: 67, code: "1F635", char: "\u{1F635}", name: "dizzy face" }, { no: 48, code: "1F632", char: "\u{1F632}", name: "astonished face" }, { no: 53, code: "1F61F", char: "\u{1F61F}", name: "worried face" }, { no: 57, code: "1F626", char: "\u{1F626}", name: "frowning face with open mouth" }, { no: 58, code: "1F627", char: "\u{1F627}", name: "anguished face" }, { no: 86, code: "1F47F", char: "\u{1F47F}", name: "angry face with horns" }, { no: 31, code: "1F62E", char: "\u{1F62E}", name: "face with open mouth" }, { no: 62, code: "1F62C", char: "\u{1F62C}", name: "grimacing face" }, { no: 24, code: "1F610", char: "\u{1F610}", name: "neutral face" }, { no: 45, code: "1F615", char: "\u{1F615}", name: "confused face" }, { no: 33, code: "1F62F", char: "\u{1F62F}", name: "hushed face" }, { no: 28, code: "1F60F", char: "\u{1F60F}", name: "smirking face" }, { no: 25, code: "1F611", char: "\u{1F611}", name: "expressionless face" }, { no: 462, code: "1F472", char: "\u{1F472}", name: "man with Chinese cap" }, { no: 444, code: "1F473", char: "\u{1F473}", name: "person wearing turban" }, { no: 360, code: "1F46E", char: "\u{1F46E}", name: "police officer" }, { no: 414, code: "1F477", char: "\u{1F477}", name: "construction worker" }, { no: 396, code: "1F482", char: "\u{1F482}", name: "guard" }, { no: 108, code: "1F476", char: "\u{1F476}", name: "baby" }, { no: 120, code: "1F466", char: "\u{1F466}", name: "boy" }, { no: 126, code: "1F467", char: "\u{1F467}", name: "girl" }, { no: 138, code: "1F468", char: "\u{1F468}", name: "man" }, { no: 144, code: "1F469", char: "\u{1F469}", name: "woman" }, { no: 156, code: "1F474", char: "\u{1F474}", name: "old man" }, { no: 162, code: "1F475", char: "\u{1F475}", name: "old woman" }, { no: 480, code: "1F471", char: "\u{1F471}", name: "blond-haired person" }, { no: 522, code: "1F47C", char: "\u{1F47C}", name: "baby angel" }, { no: 438, code: "1F478", char: "\u{1F478}", name: "princess" }, { no: 96, code: "1F63A", char: "\u{1F63A}", name: "grinning cat face" }, { no: 97, code: "1F638", char: "\u{1F638}", name: "grinning cat face with smiling eyes" }, { no: 99, code: "1F63B", char: "\u{1F63B}", name: "smiling cat face with heart-eyes" }, { no: 101, code: "1F63D", char: "\u{1F63D}", name: "kissing cat face" }, { no: 100, code: "1F63C", char: "\u{1F63C}", name: "cat face with wry smile" }, { no: 102, code: "1F640", char: "\u{1F640}", name: "weary cat face" }, { no: 103, code: "1F63F", char: "\u{1F63F}", name: "crying cat face" }, { no: 98, code: "1F639", char: "\u{1F639}", name: "cat face with tears of joy" }, { no: 104, code: "1F63E", char: "\u{1F63E}", name: "pouting cat face" }, { no: 87, code: "1F479", char: "\u{1F479}", name: "ogre" }, { no: 88, code: "1F47A", char: "\u{1F47A}", name: "goblin" }, { no: 105, code: "1F648", char: "\u{1F648}", name: "see-no-evil monkey" }, { no: 106, code: "1F649", char: "\u{1F649}", name: "hear-no-evil monkey" }, { no: 107, code: "1F64A", char: "\u{1F64A}", name: "speak-no-evil monkey" }, { no: 89, code: "1F480", char: "\u{1F480}", name: "skull" }, { no: 92, code: "1F47D", char: "\u{1F47D}", name: "alien" }, { no: 95, code: "1F4A9", char: "\u{1F4A9}", name: "pile of poo" }, { no: 1927, code: "1F525", char: "\u{1F525}", name: "fire" }, { no: 1934, code: "2728", char: "\u2728", name: "sparkles" }, { no: 1902, code: "1F31F", char: "\u{1F31F}", name: "glowing star" }, { no: 1469, code: "1F4AB", char: "\u{1F4AB}", name: "dizzy" }, { no: 1466, code: "1F4A5", char: "\u{1F4A5}", name: "collision" }, { no: 1464, code: "1F4A2", char: "\u{1F4A2}", name: "anger symbol" }, { no: 1467, code: "1F4A6", char: "\u{1F4A6}", name: "sweat droplets" }, { no: 1928, code: "1F4A7", char: "\u{1F4A7}", name: "droplet" }, { no: 1463, code: "1F4A4", char: "\u{1F4A4}", name: "zzz" }, { no: 1468, code: "1F4A8", char: "\u{1F4A8}", name: "dashing away" }, { no: 1425, code: "1F442", char: "\u{1F442}", name: "ear" }, { no: 1438, code: "1F440", char: "\u{1F440}", name: "eyes" }, { no: 1431, code: "1F443", char: "\u{1F443}", name: "nose" }, { no: 1442, code: "1F445", char: "\u{1F445}", name: "tongue" }, { no: 1443, code: "1F444", char: "\u{1F444}", name: "mouth" }, { no: 1328, code: "1F44D", char: "\u{1F44D}", name: "thumbs up" }, { no: 1334, code: "1F44E", char: "\u{1F44E}", name: "thumbs down" }, { no: 1322, code: "1F44C", char: "\u{1F44C}", name: "OK hand" }, { no: 1346, code: "1F44A", char: "\u{1F44A}", name: "oncoming fist" }, { no: 1340, code: "270A", char: "\u270A", name: "raised fist" }, { no: 1370, code: "1F44B", char: "\u{1F44B}", name: "waving hand" }, { no: 1316, code: "270B", char: "\u270B", name: "raised hand" }, { no: 1394, code: "1F450", char: "\u{1F450}", name: "open hands" }, { no: 1262, code: "1F446", char: "\u{1F446}", name: "backhand index pointing up" }, { no: 1274, code: "1F447", char: "\u{1F447}", name: "backhand index pointing down" }, { no: 1250, code: "1F449", char: "\u{1F449}", name: "backhand index pointing right" }, { no: 1244, code: "1F448", char: "\u{1F448}", name: "backhand index pointing left" }, { no: 1400, code: "1F64C", char: "\u{1F64C}", name: "raising hands" }, { no: 1412, code: "1F64F", char: "\u{1F64F}", name: "folded hands" }, { no: 1388, code: "1F44F", char: "\u{1F44F}", name: "clapping hands" }, { no: 1238, code: "1F4AA", char: "\u{1F4AA}", name: "flexed biceps" }, { no: 834, code: "1F6B6", char: "\u{1F6B6}", name: "person walking" }, { no: 852, code: "1F3C3", char: "\u{1F3C3}", name: "person running" }, { no: 870, code: "1F483", char: "\u{1F483}", name: "woman dancing" }, { no: 1195, code: "1F46B", char: "\u{1F46B}", name: "man and woman holding hands" }, { no: 1206, code: "1F46A", char: "\u{1F46A}", name: "family" }, { no: 1198, code: "1F48F", char: "\u{1F48F}", name: "kiss" }, { no: 1202, code: "1F491", char: "\u{1F491}", name: "couple with heart" }, { no: 882, code: "1F46F", char: "\u{1F46F}", name: "people with bunny ears" }, { no: 690, code: "1F646", char: "\u{1F646}", name: "person gesturing OK" }, { no: 672, code: "1F645", char: "\u{1F645}", name: "person gesturing NO" }, { no: 708, code: "1F481", char: "\u{1F481}", name: "person tipping hand" }, { no: 726, code: "1F64B", char: "\u{1F64B}", name: "person raising hand" }, { no: 798, code: "1F486", char: "\u{1F486}", name: "person getting massage" }, { no: 816, code: "1F487", char: "\u{1F487}", name: "person getting haircut" }, { no: 1419, code: "1F485", char: "\u{1F485}", name: "nail polish" }, { no: 504, code: "1F470", char: "\u{1F470}", name: "bride with veil" }, { no: 654, code: "1F64E", char: "\u{1F64E}", name: "person pouting" }, { no: 636, code: "1F64D", char: "\u{1F64D}", name: "person frowning" }, { no: 744, code: "1F647", char: "\u{1F647}", name: "person bowing" }, { no: 1500, code: "1F3A9", char: "\u{1F3A9}", name: "top hat" }, { no: 1498, code: "1F451", char: "\u{1F451}", name: "crown" }, { no: 1499, code: "1F452", char: "\u{1F452}", name: "woman\u2019s hat" }, { no: 1494, code: "1F45F", char: "\u{1F45F}", name: "running shoe" }, { no: 1493, code: "1F45E", char: "\u{1F45E}", name: "man\u2019s shoe" }, { no: 1496, code: "1F461", char: "\u{1F461}", name: "woman\u2019s sandal" }, { no: 1495, code: "1F460", char: "\u{1F460}", name: "high-heeled shoe" }, { no: 1497, code: "1F462", char: "\u{1F462}", name: "woman\u2019s boot" }, { no: 1478, code: "1F455", char: "\u{1F455}", name: "t-shirt" }, { no: 1477, code: "1F454", char: "\u{1F454}", name: "necktie" }, { no: 1487, code: "1F45A", char: "\u{1F45A}", name: "woman\u2019s clothes" }, { no: 1484, code: "1F457", char: "\u{1F457}", name: "dress" }, { no: 1976, code: "1F3BD", char: "\u{1F3BD}", name: "running shirt" }, { no: 1479, code: "1F456", char: "\u{1F456}", name: "jeans" }, { no: 1485, code: "1F458", char: "\u{1F458}", name: "kimono" }, { no: 1486, code: "1F459", char: "\u{1F459}", name: "bikini" }, { no: 2097, code: "1F4BC", char: "\u{1F4BC}", name: "briefcase" }, { no: 1489, code: "1F45C", char: "\u{1F45C}", name: "handbag" }, { no: 1490, code: "1F45D", char: "\u{1F45D}", name: "clutch bag" }, { no: 1488, code: "1F45B", char: "\u{1F45B}", name: "purse" }, { no: 1475, code: "1F453", char: "\u{1F453}", name: "glasses" }, { no: 1944, code: "1F380", char: "\u{1F380}", name: "ribbon" }, { no: 1918, code: "1F302", char: "\u{1F302}", name: "closed umbrella" }, { no: 1505, code: "1F484", char: "\u{1F484}", name: "lipstick" }, { no: 1454, code: "1F49B", char: "\u{1F49B}", name: "yellow heart" }, { no: 1452, code: "1F499", char: "\u{1F499}", name: "blue heart" }, { no: 1456, code: "1F49C", char: "\u{1F49C}", name: "purple heart" }, { no: 1453, code: "1F49A", char: "\u{1F49A}", name: "green heart" }, { no: 1448, code: "1F494", char: "\u{1F494}", name: "broken heart" }, { no: 1451, code: "1F497", char: "\u{1F497}", name: "growing heart" }, { no: 1447, code: "1F493", char: "\u{1F493}", name: "beating heart" }, { no: 1449, code: "1F495", char: "\u{1F495}", name: "two hearts" }, { no: 1450, code: "1F496", char: "\u{1F496}", name: "sparkling heart" }, { no: 1459, code: "1F49E", char: "\u{1F49E}", name: "revolving hearts" }, { no: 1445, code: "1F498", char: "\u{1F498}", name: "heart with arrow" }, { no: 1462, code: "1F48C", char: "\u{1F48C}", name: "love letter" }, { no: 1444, code: "1F48B", char: "\u{1F48B}", name: "kiss mark" }, { no: 1506, code: "1F48D", char: "\u{1F48D}", name: "ring" }, { no: 1507, code: "1F48E", char: "\u{1F48E}", name: "gem stone" }, { no: 958, code: "1F464", char: "\u{1F464}", name: "bust in silhouette" }, { no: 1470, code: "1F4AC", char: "\u{1F4AC}", name: "speech balloon" }, { no: 1437, code: "1F463", char: "\u{1F463}", name: "footprints" }] }, { name: "Nature", emojis: [{ no: 1511, code: "1F436", char: "\u{1F436}", name: "dog face" }, { no: 1514, code: "1F43A", char: "\u{1F43A}", name: "wolf face" }, { no: 1516, code: "1F431", char: "\u{1F431}", name: "cat face" }, { no: 1543, code: "1F42D", char: "\u{1F42D}", name: "mouse face" }, { no: 1546, code: "1F439", char: "\u{1F439}", name: "hamster face" }, { no: 1547, code: "1F430", char: "\u{1F430}", name: "rabbit face" }, { no: 1568, code: "1F438", char: "\u{1F438}", name: "frog face" }, { no: 1519, code: "1F42F", char: "\u{1F42F}", name: "tiger face" }, { no: 1553, code: "1F428", char: "\u{1F428}", name: "koala" }, { no: 1552, code: "1F43B", char: "\u{1F43B}", name: "bear face" }, { no: 1531, code: "1F437", char: "\u{1F437}", name: "pig face" }, { no: 1534, code: "1F43D", char: "\u{1F43D}", name: "pig nose" }, { no: 1527, code: "1F42E", char: "\u{1F42E}", name: "cow face" }, { no: 1533, code: "1F417", char: "\u{1F417}", name: "boar" }, { no: 1508, code: "1F435", char: "\u{1F435}", name: "monkey face" }, { no: 1509, code: "1F412", char: "\u{1F412}", name: "monkey" }, { no: 1522, code: "1F434", char: "\u{1F434}", name: "horse face" }, { no: 1536, code: "1F411", char: "\u{1F411}", name: "ewe" }, { no: 1541, code: "1F418", char: "\u{1F418}", name: "elephant" }, { no: 1554, code: "1F43C", char: "\u{1F43C}", name: "panda face" }, { no: 1563, code: "1F427", char: "\u{1F427}", name: "penguin" }, { no: 1562, code: "1F426", char: "\u{1F426}", name: "bird" }, { no: 1560, code: "1F424", char: "\u{1F424}", name: "baby chick" }, { no: 1561, code: "1F425", char: "\u{1F425}", name: "front-facing baby chick" }, { no: 1559, code: "1F423", char: "\u{1F423}", name: "hatching chick" }, { no: 1557, code: "1F414", char: "\u{1F414}", name: "chicken" }, { no: 1572, code: "1F40D", char: "\u{1F40D}", name: "snake" }, { no: 1570, code: "1F422", char: "\u{1F422}", name: "turtle" }, { no: 1591, code: "1F41B", char: "\u{1F41B}", name: "bug" }, { no: 1593, code: "1F41D", char: "\u{1F41D}", name: "honeybee" }, { no: 1592, code: "1F41C", char: "\u{1F41C}", name: "ant" }, { no: 1594, code: "1F41E", char: "\u{1F41E}", name: "lady beetle" }, { no: 1589, code: "1F40C", char: "\u{1F40C}", name: "snail" }, { no: 1584, code: "1F419", char: "\u{1F419}", name: "octopus" }, { no: 1585, code: "1F41A", char: "\u{1F41A}", name: "spiral shell" }, { no: 1581, code: "1F420", char: "\u{1F420}", name: "tropical fish" }, { no: 1580, code: "1F41F", char: "\u{1F41F}", name: "fish" }, { no: 1579, code: "1F42C", char: "\u{1F42C}", name: "dolphin" }, { no: 1577, code: "1F433", char: "\u{1F433}", name: "spouting whale" }, { no: 1523, code: "1F40E", char: "\u{1F40E}", name: "horse" }, { no: 1573, code: "1F432", char: "\u{1F432}", name: "dragon face" }, { no: 1582, code: "1F421", char: "\u{1F421}", name: "blowfish" }, { no: 1539, code: "1F42B", char: "\u{1F42B}", name: "two-hump camel" }, { no: 1513, code: "1F429", char: "\u{1F429}", name: "poodle" }, { no: 1555, code: "1F43E", char: "\u{1F43E}", name: "paw prints" }, { no: 1599, code: "1F490", char: "\u{1F490}", name: "bouquet" }, { no: 1600, code: "1F338", char: "\u{1F338}", name: "cherry blossom" }, { no: 1608, code: "1F337", char: "\u{1F337}", name: "tulip" }, { no: 1617, code: "1F340", char: "\u{1F340}", name: "four leaf clover" }, { no: 1603, code: "1F339", char: "\u{1F339}", name: "rose" }, { no: 1606, code: "1F33B", char: "\u{1F33B}", name: "sunflower" }, { no: 1605, code: "1F33A", char: "\u{1F33A}", name: "hibiscus" }, { no: 1618, code: "1F341", char: "\u{1F341}", name: "maple leaf" }, { no: 1620, code: "1F343", char: "\u{1F343}", name: "leaf fluttering in wind" }, { no: 1619, code: "1F342", char: "\u{1F342}", name: "fallen leaf" }, { no: 1615, code: "1F33F", char: "\u{1F33F}", name: "herb" }, { no: 1614, code: "1F33E", char: "\u{1F33E}", name: "sheaf of rice" }, { no: 1645, code: "1F344", char: "\u{1F344}", name: "mushroom" }, { no: 1613, code: "1F335", char: "\u{1F335}", name: "cactus" }, { no: 1612, code: "1F334", char: "\u{1F334}", name: "palm tree" }, { no: 1647, code: "1F330", char: "\u{1F330}", name: "chestnut" }, { no: 1609, code: "1F331", char: "\u{1F331}", name: "seedling" }, { no: 1607, code: "1F33C", char: "\u{1F33C}", name: "blossom" }, { no: 1885, code: "1F311", char: "\u{1F311}", name: "new moon" }, { no: 1887, code: "1F313", char: "\u{1F313}", name: "first quarter moon" }, { no: 1888, code: "1F314", char: "\u{1F314}", name: "waxing gibbous moon" }, { no: 1889, code: "1F315", char: "\u{1F315}", name: "full moon" }, { no: 1895, code: "1F31B", char: "\u{1F31B}", name: "first quarter moon face" }, { no: 1893, code: "1F319", char: "\u{1F319}", name: "crescent moon" }, { no: 1725, code: "1F30F", char: "\u{1F30F}", name: "globe showing Asia-Australia" }, { no: 1731, code: "1F30B", char: "\u{1F30B}", name: "volcano" }, { no: 1777, code: "1F30C", char: "\u{1F30C}", name: "milky way" }, { no: 1903, code: "1F320", char: "\u{1F320}", name: "shooting star" }, { no: 1905, code: "26C5", char: "\u26C5", name: "sun behind cloud" }, { no: 1925, code: "26C4", char: "\u26C4", name: "snowman without snow" }, { no: 1916, code: "1F300", char: "\u{1F300}", name: "cyclone" }, { no: 1769, code: "1F301", char: "\u{1F301}", name: "foggy" }, { no: 1917, code: "1F308", char: "\u{1F308}", name: "rainbow" }, { no: 1929, code: "1F30A", char: "\u{1F30A}", name: "water wave" }] }, { name: "Objects", emojis: [{ no: 1939, code: "1F38D", char: "\u{1F38D}", name: "pine decoration" }, { no: 1458, code: "1F49D", char: "\u{1F49D}", name: "heart with ribbon" }, { no: 1940, code: "1F38E", char: "\u{1F38E}", name: "Japanese dolls" }, { no: 1492, code: "1F392", char: "\u{1F392}", name: "school backpack" }, { no: 1501, code: "1F393", char: "\u{1F393}", name: "graduation cap" }, { no: 1941, code: "1F38F", char: "\u{1F38F}", name: "carp streamer" }, { no: 1932, code: "1F386", char: "\u{1F386}", name: "fireworks" }, { no: 1933, code: "1F387", char: "\u{1F387}", name: "sparkler" }, { no: 1942, code: "1F390", char: "\u{1F390}", name: "wind chime" }, { no: 1943, code: "1F391", char: "\u{1F391}", name: "moon viewing ceremony" }, { no: 1930, code: "1F383", char: "\u{1F383}", name: "jack-o-lantern" }, { no: 91, code: "1F47B", char: "\u{1F47B}", name: "ghost" }, { no: 528, code: "1F385", char: "\u{1F385}", name: "Santa Claus" }, { no: 1931, code: "1F384", char: "\u{1F384}", name: "Christmas tree" }, { no: 1945, code: "1F381", char: "\u{1F381}", name: "wrapped gift" }, { no: 1938, code: "1F38B", char: "\u{1F38B}", name: "tanabata tree" }, { no: 1936, code: "1F389", char: "\u{1F389}", name: "party popper" }, { no: 1937, code: "1F38A", char: "\u{1F38A}", name: "confetti ball" }, { no: 1935, code: "1F388", char: "\u{1F388}", name: "balloon" }, { no: 2359, code: "1F38C", char: "\u{1F38C}", name: "crossed flags" }, { no: 2150, code: "1F52E", char: "\u{1F52E}", name: "crystal ball" }, { no: 2032, code: "1F3A5", char: "\u{1F3A5}", name: "movie camera" }, { no: 2037, code: "1F4F7", char: "\u{1F4F7}", name: "camera" }, { no: 2039, code: "1F4F9", char: "\u{1F4F9}", name: "video camera" }, { no: 2040, code: "1F4FC", char: "\u{1F4FC}", name: "videocassette" }, { no: 2030, code: "1F4BF", char: "\u{1F4BF}", name: "optical disk" }, { no: 2031, code: "1F4C0", char: "\u{1F4C0}", name: "dvd" }, { no: 2028, code: "1F4BD", char: "\u{1F4BD}", name: "computer disk" }, { no: 2029, code: "1F4BE", char: "\u{1F4BE}", name: "floppy disk" }, { no: 2022, code: "1F4BB", char: "\u{1F4BB}", name: "laptop computer" }, { no: 2014, code: "1F4F1", char: "\u{1F4F1}", name: "mobile phone" }, { no: 2017, code: "1F4DE", char: "\u{1F4DE}", name: "telephone receiver" }, { no: 2018, code: "1F4DF", char: "\u{1F4DF}", name: "pager" }, { no: 2019, code: "1F4E0", char: "\u{1F4E0}", name: "fax machine" }, { no: 2045, code: "1F4E1", char: "\u{1F4E1}", name: "satellite antenna" }, { no: 2036, code: "1F4FA", char: "\u{1F4FA}", name: "television" }, { no: 2007, code: "1F4FB", char: "\u{1F4FB}", name: "radio" }, { no: 1993, code: "1F50A", char: "\u{1F50A}", name: "speaker high volume" }, { no: 1997, code: "1F514", char: "\u{1F514}", name: "bell" }, { no: 1994, code: "1F4E2", char: "\u{1F4E2}", name: "loudspeaker" }, { no: 1995, code: "1F4E3", char: "\u{1F4E3}", name: "megaphone" }, { no: 1855, code: "23F3", char: "\u23F3", name: "hourglass not done" }, { no: 1854, code: "231B", char: "\u231B", name: "hourglass done" }, { no: 1857, code: "23F0", char: "\u23F0", name: "alarm clock" }, { no: 1856, code: "231A", char: "\u231A", name: "watch" }, { no: 2121, code: "1F513", char: "\u{1F513}", name: "unlocked" }, { no: 2120, code: "1F512", char: "\u{1F512}", name: "locked" }, { no: 2122, code: "1F50F", char: "\u{1F50F}", name: "locked with pen" }, { no: 2123, code: "1F510", char: "\u{1F510}", name: "locked with key" }, { no: 2124, code: "1F511", char: "\u{1F511}", name: "key" }, { no: 2042, code: "1F50E", char: "\u{1F50E}", name: "magnifying glass tilted right" }, { no: 2047, code: "1F4A1", char: "\u{1F4A1}", name: "light bulb" }, { no: 2048, code: "1F526", char: "\u{1F526}", name: "flashlight" }, { no: 2021, code: "1F50C", char: "\u{1F50C}", name: "electric plug" }, { no: 2020, code: "1F50B", char: "\u{1F50B}", name: "battery" }, { no: 2041, code: "1F50D", char: "\u{1F50D}", name: "magnifying glass tilted left" }, { no: 939, code: "1F6C0", char: "\u{1F6C0}", name: "person taking bath" }, { no: 1851, code: "1F6BD", char: "\u{1F6BD}", name: "toilet" }, { no: 2135, code: "1F527", char: "\u{1F527}", name: "wrench" }, { no: 2136, code: "1F529", char: "\u{1F529}", name: "nut and bolt" }, { no: 2126, code: "1F528", char: "\u{1F528}", name: "hammer" }, { no: 1848, code: "1F6AA", char: "\u{1F6AA}", name: "door" }, { no: 2145, code: "1F6AC", char: "\u{1F6AC}", name: "cigarette" }, { no: 1465, code: "1F4A3", char: "\u{1F4A3}", name: "bomb" }, { no: 2132, code: "1F52B", char: "\u{1F52B}", name: "pistol" }, { no: 1721, code: "1F52A", char: "\u{1F52A}", name: "kitchen knife" }, { no: 2144, code: "1F48A", char: "\u{1F48A}", name: "pill" }, { no: 2143, code: "1F489", char: "\u{1F489}", name: "syringe" }, { no: 2067, code: "1F4B0", char: "\u{1F4B0}", name: "money bag" }, { no: 2068, code: "1F4B4", char: "\u{1F4B4}", name: "yen banknote" }, { no: 2069, code: "1F4B5", char: "\u{1F4B5}", name: "dollar banknote" }, { no: 2073, code: "1F4B3", char: "\u{1F4B3}", name: "credit card" }, { no: 2072, code: "1F4B8", char: "\u{1F4B8}", name: "money with wings" }, { no: 2015, code: "1F4F2", char: "\u{1F4F2}", name: "mobile phone with arrow" }, { no: 2078, code: "1F4E7", char: "\u{1F4E7}", name: "e-mail" }, { no: 2082, code: "1F4E5", char: "\u{1F4E5}", name: "inbox tray" }, { no: 2081, code: "1F4E4", char: "\u{1F4E4}", name: "outbox tray" }, { no: 2080, code: "1F4E9", char: "\u{1F4E9}", name: "envelope with arrow" }, { no: 2079, code: "1F4E8", char: "\u{1F4E8}", name: "incoming envelope" }, { no: 2084, code: "1F4EB", char: "\u{1F4EB}", name: "closed mailbox with raised flag" }, { no: 2085, code: "1F4EA", char: "\u{1F4EA}", name: "closed mailbox with lowered flag" }, { no: 2088, code: "1F4EE", char: "\u{1F4EE}", name: "postbox" }, { no: 2083, code: "1F4E6", char: "\u{1F4E6}", name: "package" }, { no: 2096, code: "1F4DD", char: "\u{1F4DD}", name: "memo" }, { no: 2061, code: "1F4C4", char: "\u{1F4C4}", name: "page facing up" }, { no: 2059, code: "1F4C3", char: "\u{1F4C3}", name: "page with curl" }, { no: 2064, code: "1F4D1", char: "\u{1F4D1}", name: "bookmark tabs" }, { no: 2108, code: "1F4CA", char: "\u{1F4CA}", name: "bar chart" }, { no: 2106, code: "1F4C8", char: "\u{1F4C8}", name: "chart increasing" }, { no: 2107, code: "1F4C9", char: "\u{1F4C9}", name: "chart decreasing" }, { no: 2060, code: "1F4DC", char: "\u{1F4DC}", name: "scroll" }, { no: 2109, code: "1F4CB", char: "\u{1F4CB}", name: "clipboard" }, { no: 2101, code: "1F4C5", char: "\u{1F4C5}", name: "calendar" }, { no: 2102, code: "1F4C6", char: "\u{1F4C6}", name: "tear-off calendar" }, { no: 2105, code: "1F4C7", char: "\u{1F4C7}", name: "card index" }, { no: 2098, code: "1F4C1", char: "\u{1F4C1}", name: "file folder" }, { no: 2099, code: "1F4C2", char: "\u{1F4C2}", name: "open file folder" }, { no: 2110, code: "1F4CC", char: "\u{1F4CC}", name: "pushpin" }, { no: 2112, code: "1F4CE", char: "\u{1F4CE}", name: "paperclip" }, { no: 2114, code: "1F4CF", char: "\u{1F4CF}", name: "straight ruler" }, { no: 2115, code: "1F4D0", char: "\u{1F4D0}", name: "triangular ruler" }, { no: 2051, code: "1F4D5", char: "\u{1F4D5}", name: "closed book" }, { no: 2053, code: "1F4D7", char: "\u{1F4D7}", name: "green book" }, { no: 2054, code: "1F4D8", char: "\u{1F4D8}", name: "blue book" }, { no: 2055, code: "1F4D9", char: "\u{1F4D9}", name: "orange book" }, { no: 2057, code: "1F4D3", char: "\u{1F4D3}", name: "notebook" }, { no: 2050, code: "1F4D4", char: "\u{1F4D4}", name: "notebook with decorative cover" }, { no: 2058, code: "1F4D2", char: "\u{1F4D2}", name: "ledger" }, { no: 2056, code: "1F4DA", char: "\u{1F4DA}", name: "books" }, { no: 2052, code: "1F4D6", char: "\u{1F4D6}", name: "open book" }, { no: 2065, code: "1F516", char: "\u{1F516}", name: "bookmark" }, { no: 2254, code: "1F4DB", char: "\u{1F4DB}", name: "name badge" }, { no: 2062, code: "1F4F0", char: "\u{1F4F0}", name: "newspaper" }, { no: 1785, code: "1F3A8", char: "\u{1F3A8}", name: "artist palette" }, { no: 2035, code: "1F3AC", char: "\u{1F3AC}", name: "clapper board" }, { no: 2005, code: "1F3A4", char: "\u{1F3A4}", name: "microphone" }, { no: 2006, code: "1F3A7", char: "\u{1F3A7}", name: "headphone" }, { no: 1999, code: "1F3BC", char: "\u{1F3BC}", name: "musical score" }, { no: 2e3, code: "1F3B5", char: "\u{1F3B5}", name: "musical note" }, { no: 2001, code: "1F3B6", char: "\u{1F3B6}", name: "musical notes" }, { no: 2010, code: "1F3B9", char: "\u{1F3B9}", name: "musical keyboard" }, { no: 2012, code: "1F3BB", char: "\u{1F3BB}", name: "violin" }, { no: 2011, code: "1F3BA", char: "\u{1F3BA}", name: "trumpet" }, { no: 2008, code: "1F3B7", char: "\u{1F3B7}", name: "saxophone" }, { no: 2009, code: "1F3B8", char: "\u{1F3B8}", name: "guitar" }, { no: 93, code: "1F47E", char: "\u{1F47E}", name: "alien monster" }, { no: 1980, code: "1F3AE", char: "\u{1F3AE}", name: "video game" }, { no: 1987, code: "1F0CF", char: "\u{1F0CF}", name: "joker" }, { no: 1989, code: "1F3B4", char: "\u{1F3B4}", name: "flower playing cards" }, { no: 1988, code: "1F004", char: "\u{1F004}", name: "mahjong red dragon" }, { no: 1982, code: "1F3B2", char: "\u{1F3B2}", name: "game die" }, { no: 1972, code: "1F3AF", char: "\u{1F3AF}", name: "direct hit" }, { no: 1959, code: "1F3C8", char: "\u{1F3C8}", name: "american football" }, { no: 1957, code: "1F3C0", char: "\u{1F3C0}", name: "basketball" }, { no: 1955, code: "26BD", char: "\u26BD", name: "soccer ball" }, { no: 1956, code: "26BE", char: "\u26BE", name: "baseball" }, { no: 1961, code: "1F3BE", char: "\u{1F3BE}", name: "tennis" }, { no: 1962, code: "1F3B1", char: "\u{1F3B1}", name: "pool 8 ball" }, { no: 1963, code: "1F3B3", char: "\u{1F3B3}", name: "bowling" }, { no: 1973, code: "26F3", char: "\u26F3", name: "flag in hole" }, { no: 2357, code: "1F3C1", char: "\u{1F3C1}", name: "chequered flag" }, { no: 1950, code: "1F3C6", char: "\u{1F3C6}", name: "trophy" }, { no: 1977, code: "1F3BF", char: "\u{1F3BF}", name: "skis" }, { no: 968, code: "1F3C2", char: "\u{1F3C2}", name: "snowboarder" }, { no: 1028, code: "1F3CA", char: "\u{1F3CA}", name: "person swimming" }, { no: 992, code: "1F3C4", char: "\u{1F3C4}", name: "person surfing" }, { no: 1975, code: "1F3A3", char: "\u{1F3A3}", name: "fishing pole" }, { no: 1706, code: "1F375", char: "\u{1F375}", name: "teacup without handle" }, { no: 1707, code: "1F376", char: "\u{1F376}", name: "sake" }, { no: 1712, code: "1F37A", char: "\u{1F37A}", name: "beer mug" }, { no: 1713, code: "1F37B", char: "\u{1F37B}", name: "clinking beer mugs" }, { no: 1710, code: "1F378", char: "\u{1F378}", name: "cocktail glass" }, { no: 1711, code: "1F379", char: "\u{1F379}", name: "tropical drink" }, { no: 1709, code: "1F377", char: "\u{1F377}", name: "wine glass" }, { no: 1719, code: "1F374", char: "\u{1F374}", name: "fork and knife" }, { no: 1660, code: "1F355", char: "\u{1F355}", name: "pizza" }, { no: 1658, code: "1F354", char: "\u{1F354}", name: "hamburger" }, { no: 1659, code: "1F35F", char: "\u{1F35F}", name: "french fries" }, { no: 1655, code: "1F357", char: "\u{1F357}", name: "poultry leg" }, { no: 1654, code: "1F356", char: "\u{1F356}", name: "meat on bone" }, { no: 1680, code: "1F35D", char: "\u{1F35D}", name: "spaghetti" }, { no: 1678, code: "1F35B", char: "\u{1F35B}", name: "curry rice" }, { no: 1684, code: "1F364", char: "\u{1F364}", name: "fried shrimp" }, { no: 1674, code: "1F371", char: "\u{1F371}", name: "bento box" }, { no: 1683, code: "1F363", char: "\u{1F363}", name: "sushi" }, { no: 1685, code: "1F365", char: "\u{1F365}", name: "fish cake with swirl" }, { no: 1676, code: "1F359", char: "\u{1F359}", name: "rice ball" }, { no: 1675, code: "1F358", char: "\u{1F358}", name: "rice cracker" }, { no: 1677, code: "1F35A", char: "\u{1F35A}", name: "cooked rice" }, { no: 1679, code: "1F35C", char: "\u{1F35C}", name: "steaming bowl" }, { no: 1669, code: "1F372", char: "\u{1F372}", name: "pot of food" }, { no: 1682, code: "1F362", char: "\u{1F362}", name: "oden" }, { no: 1686, code: "1F361", char: "\u{1F361}", name: "dango" }, { no: 1667, code: "1F373", char: "\u{1F373}", name: "cooking" }, { no: 1648, code: "1F35E", char: "\u{1F35E}", name: "bread" }, { no: 1693, code: "1F369", char: "\u{1F369}", name: "doughnut" }, { no: 1701, code: "1F36E", char: "\u{1F36E}", name: "custard" }, { no: 1690, code: "1F366", char: "\u{1F366}", name: "soft ice cream" }, { no: 1692, code: "1F368", char: "\u{1F368}", name: "ice cream" }, { no: 1691, code: "1F367", char: "\u{1F367}", name: "shaved ice" }, { no: 1695, code: "1F382", char: "\u{1F382}", name: "birthday cake" }, { no: 1696, code: "1F370", char: "\u{1F370}", name: "shortcake" }, { no: 1694, code: "1F36A", char: "\u{1F36A}", name: "cookie" }, { no: 1698, code: "1F36B", char: "\u{1F36B}", name: "chocolate bar" }, { no: 1699, code: "1F36C", char: "\u{1F36C}", name: "candy" }, { no: 1700, code: "1F36D", char: "\u{1F36D}", name: "lollipop" }, { no: 1702, code: "1F36F", char: "\u{1F36F}", name: "honey pot" }, { no: 1628, code: "1F34E", char: "\u{1F34E}", name: "red apple" }, { no: 1629, code: "1F34F", char: "\u{1F34F}", name: "green apple" }, { no: 1624, code: "1F34A", char: "\u{1F34A}", name: "tangerine" }, { no: 1632, code: "1F352", char: "\u{1F352}", name: "cherries" }, { no: 1621, code: "1F347", char: "\u{1F347}", name: "grapes" }, { no: 1623, code: "1F349", char: "\u{1F349}", name: "watermelon" }, { no: 1633, code: "1F353", char: "\u{1F353}", name: "strawberry" }, { no: 1631, code: "1F351", char: "\u{1F351}", name: "peach" }, { no: 1622, code: "1F348", char: "\u{1F348}", name: "melon" }, { no: 1626, code: "1F34C", char: "\u{1F34C}", name: "banana" }, { no: 1627, code: "1F34D", char: "\u{1F34D}", name: "pineapple" }, { no: 1681, code: "1F360", char: "\u{1F360}", name: "roasted sweet potato" }, { no: 1638, code: "1F346", char: "\u{1F346}", name: "eggplant" }, { no: 1635, code: "1F345", char: "\u{1F345}", name: "tomato" }, { no: 1641, code: "1F33D", char: "\u{1F33D}", name: "ear of corn" }] }, { name: "Places", emojis: [{ no: 1744, code: "1F3E0", char: "\u{1F3E0}", name: "house" }, { no: 1745, code: "1F3E1", char: "\u{1F3E1}", name: "house with garden" }, { no: 1754, code: "1F3EB", char: "\u{1F3EB}", name: "school" }, { no: 1746, code: "1F3E2", char: "\u{1F3E2}", name: "office building" }, { no: 1747, code: "1F3E3", char: "\u{1F3E3}", name: "Japanese post office" }, { no: 1749, code: "1F3E5", char: "\u{1F3E5}", name: "hospital" }, { no: 1750, code: "1F3E6", char: "\u{1F3E6}", name: "bank" }, { no: 1753, code: "1F3EA", char: "\u{1F3EA}", name: "convenience store" }, { no: 1752, code: "1F3E9", char: "\u{1F3E9}", name: "love hotel" }, { no: 1751, code: "1F3E8", char: "\u{1F3E8}", name: "hotel" }, { no: 1759, code: "1F492", char: "\u{1F492}", name: "wedding" }, { no: 1762, code: "26EA", char: "\u26EA", name: "church" }, { no: 1755, code: "1F3EC", char: "\u{1F3EC}", name: "department store" }, { no: 1774, code: "1F307", char: "\u{1F307}", name: "sunset" }, { no: 1773, code: "1F306", char: "\u{1F306}", name: "cityscape at dusk" }, { no: 1757, code: "1F3EF", char: "\u{1F3EF}", name: "Japanese castle" }, { no: 1758, code: "1F3F0", char: "\u{1F3F0}", name: "castle" }, { no: 1768, code: "26FA", char: "\u26FA", name: "tent" }, { no: 1756, code: "1F3ED", char: "\u{1F3ED}", name: "factory" }, { no: 1760, code: "1F5FC", char: "\u{1F5FC}", name: "Tokyo tower" }, { no: 1728, code: "1F5FE", char: "\u{1F5FE}", name: "map of Japan" }, { no: 1732, code: "1F5FB", char: "\u{1F5FB}", name: "mount fuji" }, { no: 1771, code: "1F304", char: "\u{1F304}", name: "sunrise over mountains" }, { no: 1772, code: "1F305", char: "\u{1F305}", name: "sunrise" }, { no: 1770, code: "1F303", char: "\u{1F303}", name: "night with stars" }, { no: 1761, code: "1F5FD", char: "\u{1F5FD}", name: "Statue of Liberty" }, { no: 1775, code: "1F309", char: "\u{1F309}", name: "bridge at night" }, { no: 1778, code: "1F3A0", char: "\u{1F3A0}", name: "carousel horse" }, { no: 1779, code: "1F3A1", char: "\u{1F3A1}", name: "ferris wheel" }, { no: 1767, code: "26F2", char: "\u26F2", name: "fountain" }, { no: 1780, code: "1F3A2", char: "\u{1F3A2}", name: "roller coaster" }, { no: 1834, code: "1F6A2", char: "\u{1F6A2}", name: "ship" }, { no: 1828, code: "26F5", char: "\u26F5", name: "sailboat" }, { no: 1830, code: "1F6A4", char: "\u{1F6A4}", name: "speedboat" }, { no: 1845, code: "1F680", char: "\u{1F680}", name: "rocket" }, { no: 1839, code: "1F4BA", char: "\u{1F4BA}", name: "seat" }, { no: 1794, code: "1F689", char: "\u{1F689}", name: "station" }, { no: 1789, code: "1F684", char: "\u{1F684}", name: "high-speed train" }, { no: 1790, code: "1F685", char: "\u{1F685}", name: "bullet train" }, { no: 1792, code: "1F687", char: "\u{1F687}", name: "metro" }, { no: 1788, code: "1F683", char: "\u{1F683}", name: "railway car" }, { no: 1799, code: "1F68C", char: "\u{1F68C}", name: "bus" }, { no: 1811, code: "1F699", char: "\u{1F699}", name: "sport utility vehicle" }, { no: 1809, code: "1F697", char: "\u{1F697}", name: "automobile" }, { no: 1807, code: "1F695", char: "\u{1F695}", name: "taxi" }, { no: 1812, code: "1F69A", char: "\u{1F69A}", name: "delivery truck" }, { no: 1822, code: "1F6A8", char: "\u{1F6A8}", name: "police car light" }, { no: 1805, code: "1F693", char: "\u{1F693}", name: "police car" }, { no: 1804, code: "1F692", char: "\u{1F692}", name: "fire engine" }, { no: 1803, code: "1F691", char: "\u{1F691}", name: "ambulance" }, { no: 1815, code: "1F6B2", char: "\u{1F6B2}", name: "bicycle" }, { no: 1781, code: "1F488", char: "\u{1F488}", name: "barber pole" }, { no: 1818, code: "1F68F", char: "\u{1F68F}", name: "bus stop" }, { no: 1948, code: "1F3AB", char: "\u{1F3AB}", name: "ticket" }, { no: 1823, code: "1F6A5", char: "\u{1F6A5}", name: "horizontal traffic light" }, { no: 1825, code: "1F6A7", char: "\u{1F6A7}", name: "construction" }, { no: 2255, code: "1F530", char: "\u{1F530}", name: "Japanese symbol for beginner" }, { no: 1821, code: "26FD", char: "\u26FD", name: "fuel pump" }, { no: 2049, code: "1F3EE", char: "\u{1F3EE}", name: "red paper lantern" }, { no: 1786, code: "1F3B0", char: "\u{1F3B0}", name: "slot machine" }, { no: 2148, code: "1F5FF", char: "\u{1F5FF}", name: "moai" }, { no: 1782, code: "1F3AA", char: "\u{1F3AA}", name: "circus tent" }, { no: 1783, code: "1F3AD", char: "\u{1F3AD}", name: "performing arts" }, { no: 2111, code: "1F4CD", char: "\u{1F4CD}", name: "round pushpin" }, { no: 2358, code: "1F6A9", char: "\u{1F6A9}", name: "triangular flag" }] }, { name: "Symbols", emojis: [{ no: 2294, code: "1F51F", char: "\u{1F51F}", name: "keycap 10" }, { no: 2298, code: "1F522", char: "\u{1F522}", name: "input numbers" }, { no: 2299, code: "1F523", char: "\u{1F523}", name: "input symbols" }, { no: 2296, code: "1F520", char: "\u{1F520}", name: "input latin uppercase" }, { no: 2297, code: "1F521", char: "\u{1F521}", name: "input latin lowercase" }, { no: 2300, code: "1F524", char: "\u{1F524}", name: "input latin letters" }, { no: 2234, code: "1F53C", char: "\u{1F53C}", name: "up button" }, { no: 2236, code: "1F53D", char: "\u{1F53D}", name: "down button" }, { no: 2232, code: "23EA", char: "\u23EA", name: "fast reverse button" }, { no: 2228, code: "23E9", char: "\u23E9", name: "fast-forward button" }, { no: 2235, code: "23EB", char: "\u23EB", name: "fast up button" }, { no: 2237, code: "23EC", char: "\u23EC", name: "fast down button" }, { no: 2313, code: "1F197", char: "\u{1F197}", name: "OK button" }, { no: 2310, code: "1F195", char: "\u{1F195}", name: "NEW button" }, { no: 2316, code: "1F199", char: "\u{1F199}", name: "UP! button" }, { no: 2305, code: "1F192", char: "\u{1F192}", name: "COOL button" }, { no: 2306, code: "1F193", char: "\u{1F193}", name: "FREE button" }, { no: 2311, code: "1F196", char: "\u{1F196}", name: "NG button" }, { no: 2245, code: "1F4F6", char: "\u{1F4F6}", name: "antenna bars" }, { no: 2242, code: "1F3A6", char: "\u{1F3A6}", name: "cinema" }, { no: 2318, code: "1F201", char: "\u{1F201}", name: "Japanese \u201Chere\u201D button" }, { no: 2322, code: "1F22F", char: "\u{1F22F}", name: "Japanese \u201Creserved\u201D button" }, { no: 2330, code: "1F233", char: "\u{1F233}", name: "Japanese \u201Cvacancy\u201D button" }, { no: 2334, code: "1F235", char: "\u{1F235}", name: "Japanese \u201Cno vacancy\u201D button" }, { no: 2329, code: "1F234", char: "\u{1F234}", name: "Japanese \u201Cpassing grade\u201D button" }, { no: 2326, code: "1F232", char: "\u{1F232}", name: "Japanese \u201Cprohibited\u201D button" }, { no: 2323, code: "1F250", char: "\u{1F250}", name: "Japanese \u201Cbargain\u201D button" }, { no: 2324, code: "1F239", char: "\u{1F239}", name: "Japanese \u201Cdiscount\u201D button" }, { no: 2333, code: "1F23A", char: "\u{1F23A}", name: "Japanese \u201Copen for business\u201D button" }, { no: 2321, code: "1F236", char: "\u{1F236}", name: "Japanese \u201Cnot free of charge\u201D button" }, { no: 2325, code: "1F21A", char: "\u{1F21A}", name: "Japanese \u201Cfree of charge\u201D button" }, { no: 2158, code: "1F6BB", char: "\u{1F6BB}", name: "restroom" }, { no: 2156, code: "1F6B9", char: "\u{1F6B9}", name: "men\u2019s room" }, { no: 2157, code: "1F6BA", char: "\u{1F6BA}", name: "women\u2019s room" }, { no: 2159, code: "1F6BC", char: "\u{1F6BC}", name: "baby symbol" }, { no: 2160, code: "1F6BE", char: "\u{1F6BE}", name: "water closet" }, { no: 2170, code: "1F6AD", char: "\u{1F6AD}", name: "no smoking" }, { no: 2328, code: "1F238", char: "\u{1F238}", name: "Japanese \u201Capplication\u201D button" }, { no: 2327, code: "1F251", char: "\u{1F251}", name: "Japanese \u201Cacceptable\u201D button" }, { no: 2304, code: "1F191", char: "\u{1F191}", name: "CL button" }, { no: 2315, code: "1F198", char: "\u{1F198}", name: "SOS button" }, { no: 2308, code: "1F194", char: "\u{1F194}", name: "ID button" }, { no: 2168, code: "1F6AB", char: "\u{1F6AB}", name: "prohibited" }, { no: 2175, code: "1F51E", char: "\u{1F51E}", name: "no one under eighteen" }, { no: 2167, code: "26D4", char: "\u26D4", name: "no entry" }, { no: 2262, code: "274E", char: "\u274E", name: "cross mark button" }, { no: 2257, code: "2705", char: "\u2705", name: "white heavy check mark" }, { no: 1460, code: "1F49F", char: "\u{1F49F}", name: "heart decoration" }, { no: 2317, code: "1F19A", char: "\u{1F19A}", name: "VS button" }, { no: 2246, code: "1F4F3", char: "\u{1F4F3}", name: "vibration mode" }, { no: 2247, code: "1F4F4", char: "\u{1F4F4}", name: "mobile phone off" }, { no: 2302, code: "1F18E", char: "\u{1F18E}", name: "AB button (blood type)" }, { no: 2349, code: "1F4A0", char: "\u{1F4A0}", name: "diamond with a dot" }, { no: 2223, code: "26CE", char: "\u26CE", name: "Ophiuchus" }, { no: 2210, code: "1F52F", char: "\u{1F52F}", name: "dotted six-pointed star" }, { no: 2152, code: "1F3E7", char: "\u{1F3E7}", name: "ATM sign" }, { no: 2074, code: "1F4B9", char: "\u{1F4B9}", name: "chart increasing with yen" }, { no: 2076, code: "1F4B2", char: "\u{1F4B2}", name: "heavy dollar sign" }, { no: 2075, code: "1F4B1", char: "\u{1F4B1}", name: "currency exchange" }, { no: 2261, code: "274C", char: "\u274C", name: "cross mark" }, { no: 2277, code: "2757", char: "\u2757", name: "exclamation mark" }, { no: 2274, code: "2753", char: "\u2753", name: "question mark" }, { no: 2276, code: "2755", char: "\u2755", name: "white exclamation mark" }, { no: 2275, code: "2754", char: "\u2754", name: "white question mark" }, { no: 2256, code: "2B55", char: "\u2B55", name: "heavy large circle" }, { no: 2198, code: "1F51D", char: "\u{1F51D}", name: "TOP arrow" }, { no: 2195, code: "1F51A", char: "\u{1F51A}", name: "END arrow" }, { no: 2194, code: "1F519", char: "\u{1F519}", name: "BACK arrow" }, { no: 2196, code: "1F51B", char: "\u{1F51B}", name: "ON! arrow" }, { no: 2197, code: "1F51C", char: "\u{1F51C}", name: "SOON arrow" }, { no: 2192, code: "1F503", char: "\u{1F503}", name: "clockwise vertical arrows" }, { no: 1861, code: "1F55B", char: "\u{1F55B}", name: "twelve o\u2019clock" }, { no: 1863, code: "1F550", char: "\u{1F550}", name: "one o\u2019clock" }, { no: 1865, code: "1F551", char: "\u{1F551}", name: "two o\u2019clock" }, { no: 1867, code: "1F552", char: "\u{1F552}", name: "three o\u2019clock" }, { no: 1869, code: "1F553", char: "\u{1F553}", name: "four o\u2019clock" }, { no: 1871, code: "1F554", char: "\u{1F554}", name: "five o\u2019clock" }, { no: 1873, code: "1F555", char: "\u{1F555}", name: "six o\u2019clock" }, { no: 1875, code: "1F556", char: "\u{1F556}", name: "seven o\u2019clock" }, { no: 1877, code: "1F557", char: "\u{1F557}", name: "eight o\u2019clock" }, { no: 1879, code: "1F558", char: "\u{1F558}", name: "nine o\u2019clock" }, { no: 1881, code: "1F559", char: "\u{1F559}", name: "ten o\u2019clock" }, { no: 1883, code: "1F55A", char: "\u{1F55A}", name: "eleven o\u2019clock" }, { no: 2263, code: "2795", char: "\u2795", name: "heavy plus sign" }, { no: 2264, code: "2796", char: "\u2796", name: "heavy minus sign" }, { no: 2265, code: "2797", char: "\u2797", name: "heavy division sign" }, { no: 1601, code: "1F4AE", char: "\u{1F4AE}", name: "white flower" }, { no: 2295, code: "1F4AF", char: "\u{1F4AF}", name: "hundred points" }, { no: 2350, code: "1F518", char: "\u{1F518}", name: "radio button" }, { no: 2141, code: "1F517", char: "\u{1F517}", name: "link" }, { no: 2266, code: "27B0", char: "\u27B0", name: "curly loop" }, { no: 2253, code: "1F531", char: "\u{1F531}", name: "trident emblem" }, { no: 2347, code: "1F53A", char: "\u{1F53A}", name: "red triangle pointed up" }, { no: 2351, code: "1F532", char: "\u{1F532}", name: "black square button" }, { no: 2352, code: "1F533", char: "\u{1F533}", name: "white square button" }, { no: 2355, code: "1F534", char: "\u{1F534}", name: "red circle" }, { no: 2356, code: "1F535", char: "\u{1F535}", name: "blue circle" }, { no: 2348, code: "1F53B", char: "\u{1F53B}", name: "red triangle pointed down" }, { no: 2342, code: "2B1C", char: "\u2B1C", name: "white large square" }, { no: 2341, code: "2B1B", char: "\u2B1B", name: "black large square" }, { no: 2343, code: "1F536", char: "\u{1F536}", name: "large orange diamond" }, { no: 2344, code: "1F537", char: "\u{1F537}", name: "large blue diamond" }, { no: 2345, code: "1F538", char: "\u{1F538}", name: "small orange diamond" }, { no: 2346, code: "1F539", char: "\u{1F539}", name: "small blue diamond" }] }];

  // src/components/emoji-picker/EmojiPicker.js
  var emojiConvertor = new import_emoji_js.default();
  emojiConvertor.init_env();
  var EmojiPicker = ({ onEmojiPicked, filter }) => /* @__PURE__ */ import_react12.default.createElement("div", { className: "sc-emoji-picker" }, emojiData_default.map((category) => {
    const filteredEmojis = category.emojis.filter(({ name }) => name.includes(filter));
    return /* @__PURE__ */ import_react12.default.createElement("div", { className: "sc-emoji-picker--category", key: category.name }, filteredEmojis.length > 0 && /* @__PURE__ */ import_react12.default.createElement("div", { className: "sc-emoji-picker--category-title" }, category.name), filteredEmojis.map(({ char, _name }) => {
      return /* @__PURE__ */ import_react12.default.createElement(
        "span",
        {
          key: char,
          className: "sc-emoji-picker--emoji",
          onClick: () => onEmojiPicked(char)
        },
        char
      );
    }));
  }));
  var EmojiPicker_default = EmojiPicker;

  // src/components/UserInput.js
  var UserInput = class extends import_react13.Component {
    constructor() {
      super();
      this.state = {
        inputActive: false,
        inputHasText: false,
        emojiPickerIsOpen: false,
        emojiFilter: ""
      };
    }
    componentDidMount() {
      this.emojiPickerButton = document.querySelector("#sc-emoji-picker-button");
    }
    handleKeyDown(event) {
      if (event.keyCode === 13 && !event.shiftKey) {
        return this._submitText(event);
      }
    }
    handleKeyUp(event) {
      const inputHasText = event.target.innerHTML.length !== 0 && event.target.innerText !== "\n";
      this.setState({ inputHasText });
    }
    _showFilePicker() {
      this._fileUploadButton.click();
    }
    toggleEmojiPicker = (e) => {
      e.preventDefault();
      if (!this.state.emojiPickerIsOpen) {
        this.setState({ emojiPickerIsOpen: true });
      }
    };
    closeEmojiPicker = (e) => {
      if (this.emojiPickerButton.contains(e.target)) {
        e.stopPropagation();
        e.preventDefault();
      }
      this.setState({ emojiPickerIsOpen: false });
    };
    _submitText(event) {
      event.preventDefault();
      const text = this.userInput.textContent;
      if (text && text.length > 0) {
        this.props.onSubmit({
          author: "me",
          type: "text",
          data: { text }
        });
        this.userInput.innerHTML = "";
      }
    }
    _onFilesSelected(event) {
      if (event.target.files && event.target.files.length > 0) {
        this.props.onFilesSelected(event.target.files);
      }
    }
    _handleEmojiPicked = (emoji) => {
      this.setState({ emojiPickerIsOpen: false });
      if (this.state.inputHasText) {
        this.userInput.innerHTML += emoji;
      } else {
        this.props.onSubmit({
          author: "me",
          type: "emoji",
          data: { emoji }
        });
      }
    };
    handleEmojiFilterChange = (event) => {
      const emojiFilter = event.target.value;
      this.setState({ emojiFilter });
    };
    _renderEmojiPopup = () => /* @__PURE__ */ import_react13.default.createElement(
      PopupWindow_default,
      {
        isOpen: this.state.emojiPickerIsOpen,
        onClickedOutside: this.closeEmojiPicker,
        onInputChange: this.handleEmojiFilterChange
      },
      /* @__PURE__ */ import_react13.default.createElement(
        EmojiPicker_default,
        {
          onEmojiPicked: this._handleEmojiPicked,
          filter: this.state.emojiFilter
        }
      )
    );
    _renderSendOrFileIcon() {
      if (this.state.inputHasText) {
        return /* @__PURE__ */ import_react13.default.createElement("div", { className: "sc-user-input--button" }, /* @__PURE__ */ import_react13.default.createElement(SendIcon_default, { onClick: this._submitText.bind(this) }));
      }
      return /* @__PURE__ */ import_react13.default.createElement("div", { className: "sc-user-input--button" }, /* @__PURE__ */ import_react13.default.createElement(FileIcon_default, { onClick: this._showFilePicker.bind(this) }), /* @__PURE__ */ import_react13.default.createElement(
        "input",
        {
          type: "file",
          name: "files[]",
          multiple: true,
          ref: (e) => {
            this._fileUploadButton = e;
          },
          onChange: this._onFilesSelected.bind(this)
        }
      ));
    }
    render() {
      const { emojiPickerIsOpen, inputActive } = this.state;
      return /* @__PURE__ */ import_react13.default.createElement("form", { className: `sc-user-input ${inputActive ? "active" : ""}` }, /* @__PURE__ */ import_react13.default.createElement(
        "div",
        {
          role: "button",
          tabIndex: "0",
          onFocus: () => {
            this.setState({ inputActive: true });
          },
          onBlur: () => {
            this.setState({ inputActive: false });
          },
          ref: (e) => {
            this.userInput = e;
          },
          onKeyDown: this.handleKeyDown.bind(this),
          onKeyUp: this.handleKeyUp.bind(this),
          contentEditable: "true",
          placeholder: "Write a reply...",
          className: "sc-user-input--text"
        }
      ), /* @__PURE__ */ import_react13.default.createElement("div", { className: "sc-user-input--buttons" }, /* @__PURE__ */ import_react13.default.createElement("div", { className: "sc-user-input--button" }), /* @__PURE__ */ import_react13.default.createElement("div", { className: "sc-user-input--button" }, this.props.showEmoji && /* @__PURE__ */ import_react13.default.createElement(
        EmojiIcon_default,
        {
          onClick: this.toggleEmojiPicker,
          isActive: emojiPickerIsOpen,
          tooltip: this._renderEmojiPopup()
        }
      )), this._renderSendOrFileIcon()));
    }
  };
  UserInput.propTypes = {
    onSubmit: import_prop_types.default.func.isRequired,
    onFilesSelected: import_prop_types.default.func.isRequired,
    showEmoji: import_prop_types.default.bool
  };
  var UserInput_default = UserInput;

  // src/components/Header.js
  var import_react14 = __toESM(require_react());

  // src/assets/close-icon.png
  var close_icon_default = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAfCAMAAACxiD++AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAtUExURUxpcf///////////////////////////////////////////////////////3EAnbYAAAAOdFJOUwADZ66SoQjEhnS7/gsNGQL7+wAAAKtJREFUKM+F01sOhCAQRNESFV/I/pc70Og0YJfyJbmHhBAbGGYHstw8IPV4EOGOmERYIhGpxyUAJxHSz/xlC+1FxE64qB1yj1ZID7oXsel+63ovnj2JXUXue+hvrcLugL+EdG+9XBG8X+Kl34J3YM1g/egvIvdx5EK691RIz78YEXdnQrst6m6JqemXmNo+D/WJNAyVePZWWL0WdlfB+l+UAQQReaAc65DB/wGsZgzLN0IQWAAAAABJRU5ErkJggg==";

  // src/components/Header.js
  var Header = class extends import_react14.Component {
    render() {
      return /* @__PURE__ */ import_react14.default.createElement("div", { className: "sc-header" }, /* @__PURE__ */ import_react14.default.createElement("img", { className: "sc-header--img", src: this.props.imageUrl, alt: "" }), /* @__PURE__ */ import_react14.default.createElement("div", { className: "sc-header--team-name" }, " ", this.props.teamName, " "), /* @__PURE__ */ import_react14.default.createElement("div", { className: "sc-header--close-button", onClick: this.props.onClose }, /* @__PURE__ */ import_react14.default.createElement("img", { src: close_icon_default, alt: "" })));
    }
  };
  var Header_default = Header;

  // src/components/ChatWindow.js
  var ChatWindow = class extends import_react15.Component {
    constructor(props) {
      super(props);
    }
    onUserInputSubmit(message) {
      this.props.onUserInputSubmit(message);
    }
    onFilesSelected(filesList) {
      this.props.onFilesSelected(filesList);
    }
    render() {
      let messageList = this.props.messageList || [];
      let classList = [
        "sc-chat-window",
        this.props.isOpen ? "opened" : "closed"
      ];
      return /* @__PURE__ */ import_react15.default.createElement("div", { className: classList.join(" ") }, /* @__PURE__ */ import_react15.default.createElement(
        Header_default,
        {
          teamName: this.props.agentProfile.teamName,
          imageUrl: this.props.agentProfile.imageUrl,
          onClose: this.props.onClose
        }
      ), /* @__PURE__ */ import_react15.default.createElement(
        MessageList_default,
        {
          messages: messageList,
          imageUrl: this.props.agentProfile.imageUrl
        }
      ), /* @__PURE__ */ import_react15.default.createElement(
        UserInput_default,
        {
          onSubmit: this.onUserInputSubmit.bind(this),
          onFilesSelected: this.onFilesSelected.bind(this),
          showEmoji: this.props.showEmoji
        }
      ));
    }
  };
  ChatWindow.propTypes = {
    agentProfile: import_prop_types2.default.object.isRequired,
    isOpen: import_prop_types2.default.bool.isRequired,
    onClose: import_prop_types2.default.func.isRequired,
    onFilesSelected: import_prop_types2.default.func,
    onUserInputSubmit: import_prop_types2.default.func.isRequired,
    showEmoji: import_prop_types2.default.bool
  };
  var ChatWindow_default = ChatWindow;

  // src/assets/logo-no-bg.svg
  var logo_no_bg_default = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-4749.48 -5020 35.036 35.036"><defs><style>.a{fill:none;}.b{fill:%234e8cff;}.c{clip-path:url(%23a);}.d{fill:%23fff;}.e{fill:%23eff4f9;}</style><clipPath id="a"><path class="a" d="M0-399.479H17.555v17.555H0Z" transform="translate(0 399.479)"/></clipPath></defs><g transform="translate(-4886 -5075)"><g transform="translate(145.13 64)"><g class="c"><g transform="translate(0 0)"><path class="d" d="M-381.924-190.962a8.778,8.778,0,0,0-8.778-8.778,8.778,8.778,0,0,0-8.778,8.778,8.745,8.745,0,0,0,2.26,5.879v1.442c0,.8.492,1.457,1.1,1.457h5.83a.843.843,0,0,0,.183-.02,8.778,8.778,0,0,0,8.184-8.757" transform="translate(399.479 199.74)"/></g><g transform="translate(0 0)"><path class="e" d="M-68.763-194.079a9.292,9.292,0,0,1,6.38-8.888c-.252-.022-.506-.033-.763-.033a8.774,8.774,0,0,0-8.778,8.778A9.508,9.508,0,0,0-69.7-188.3c.005,0,0,.009,0,.01-.311.352-1.924,2.849.021,2.849h2.25c-1.23-.022,1.263-2.107.269-3.494a8.225,8.225,0,0,1-1.6-5.141" transform="translate(71.924 203)"/></g></g></g></g></svg>';

  // src/assets/sounds/notification.mp3
  var notification_default = "data:audio/mpeg;base64,SUQzAwAAAAAAH1RYWFgAAAAVAAAAU29mdHdhcmUATGF2ZjUyLjU0LjD/+5DEAAAAAAAAAAAAAAAAAAAAAABJbmZvAAAADwAAAAkAABBSABwcHBwcHBwcHBwcODg4ODg4ODg4ODhVVVVVVVVVVVVVVXFxcXFxcXFxcXFxjo6Ojo6Ojo6Ojo6qqqqqqqqqqqqqqsfHx8fHx8fHx8fH4+Pj4+Pj4+Pj4+P//////////////wAAADlMQU1FMy45OHIBzQAAAAAAAAAAFIAkCQBCAACAAAAQUlJFfEcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/+5DEAAMSYgj2IQX3wrDA4sqfIANQPRTCRxZFq+zL1MUccQcn/mJNgMrtAH82wH5JP+MxuY5Df+MY+UCGMbMfkjkAgLmMhkAAJXyUYxgXkD/G/TX9Imd/GoavV8fGXmveRkiZkUc9KMCsTisYEPj0ay3nXCZKqyKc6j2fg9BCDIUZ/k7VcNnswIYz3w8lZ8MByELLmpiEHuohNEIUhO1GT8NWS9bJ4OAACgjt5b0exqNEGgaCFjfQo8BJxDxDydkLKpuJ4C5wWkW4UoAlQORA2IDIABgEehicOIAwIDIgbEDiJEQHE7izxcaBfFICDyAGqS1izxQYzZaTVqLhiRcnEX8zIue/TUX31mQ5hoh/2oO6tN2agpFBOtWhrUplNRVpa6a///////bV9nZqCD6S32dBFFK62O0lHFzPQSTc3OLQoUXTe7l43LpPJspNzQnEkC2CqgAAAgQL0Psgh9MQKj8OrZU9iaOOnkVTNnDbCGAgR8m1nIs4Lcg3SDCIGzafwHozUAN1g6IFgDA2uBYDYXsA60KkA1vnvAyfidG4OoX/+5LEJgAb2S0mWbsAA0Kb5IM54AAmLPHGGBBsicwSAsBiJCGBgNAYBgmA4HPOni1FmEAEBSKpAGggAwcBCAwaAOAwAgEAwRAeIchOnpFSqgieUDYgDAoBwAYGAhOBgOAEGqTp+SHNTAwFsJxbgBAPAOBQAkA4Nmwu0AkAYbX/0/8DAOAMNrHAcMyJhisUcUB/9//IX////9OWQKEPyDr+b+IrFpJQMJguIDGo2iku10xaMjDp8uR2rWNhv45fWIDBoEjoUE5gmkuHZHj2YiZLpxkSpmEyL0ZsOBxvhIzjQQ5gzA+mZiLSYKYAxQBAYGYUxggAcrHMGoFUwBgNzBOBFMB4BON1o0VAMamMSeswEQHx4BgwEQJEJKRhgBgAT2sapfiE9/zAPAcYwYBYBxd5WYuVS1reGrX/vv+t5CcW+lbRZejzv/pYKu8//1+XxGBX5knV4z0pjP6rFgZd6f//////FGOcC7Adf+XkmAiOKu+4NvBBp0Y1lYzzf//7x3jcjVGWmBiKctyn8PIGBQAwYGEJBFoGDlAEoGGMjdAGaUmM//uSxBSDWkG9Bh27gALtN6BJ/KJYQHIPIh4GWtDtoGH9AlIGCOg4gGCFAG4GB1guAGDAgmQGBngSgGAcgCQWlCkROpOmReTLA5whYLfgsKEfgYAWAXALAB4CgACLCalgxWvzY9+sxHQKWIEkyK/3b2eosafVZ0Fqr9bMTJbTM1XUtFKrSWmg1S1KdBSkDz/W3Xqfb7PW1rKSM0aRmuZl06bOkiaLNTpqTxZPnDMzZMi5UIaQxBFZScnS8bzpAAwv6sd/////95MtQqMAUACTAKQB4wDcBQMA2AkzAQwR4wGoLzMFYB+zUoBIUweMFqMCCAmQbgHWnicch5q3KFS3dnD/x1awqzTXh0wtcyeEU/w9bktvjHDf//CYTrXc/xb79Rt3FM8RBvDU7s3Y9JZGLbU2cYIDv7C1NEPM8w1200pl01Wzv6P//U8cwsJweXBpriME5lh8OMHwIofIPEwK3LgHJwiDswJAFQgD0Jg7EgSA4EwNBQGgNwNVv95/8xt4Z5c/51pyA0wBQADANAaMAYD8wDQhjAMF3MP4us6BimTDNP/7ksQUA1Z9vQAPGZfDDLdgBp/QAiwMCoEUlAQKAAQwBoHAEgEAh7t7393f/nyaSW0xr+/cfYf/8r53fDcd23nvj77b55uzcUZNnxkJrKw7z8mEDKlGrEM/QhfrZMQJwfy7FWgcpH05yLxSH7eEtZsi5j9WJ+O/3s8cPpPjpUnnh6fqoh/Q1KEWCQR0axMwG5DZMSgORsqCAqggKmoiWPKETN9+kR48yrGR5AzXZkj+QFCADQqDRgaVpj85J7IepheKRgcAYUACQqiZqsNPZWNbqVMMMM8+9wxt9lVy19ephz+591lT287eVS9vWtf///3s88MsNd/ufc7lirvf6/K5jcrZZZ4W93rVqc+xjZpLXeTOeWN2lx1TZ27tTP6uGc7q/2997VevZ7zKz3LX/r8O91/OVb3Kmud7VlWf3bU79e9enI9DMLmX4jsspp6nhmHJR2tagOnpKtNAb+0Muu4xJu0bBCAQAAAEAgSABYBAAA37gtCC4SYkZU84poYMAGVoocnVJYMipkYOawomPyV1sJgjgKGBMC2YJIlhh2jv2cv/+5LEHwAdrTkvub8AAvcjpMuf4AADC7BpMPMFEwQAGjMaQCOAcLUyMgR8aS95gcgVmBeAaXkaAYaYIhgnhBGAeByPACS/OnwxXAy+HGkOKYFAHZgMAfGBiBmYEYGRgkAV91zPma61L4AgR5IfBoBxfYoAPHgBTAAAFQIfr///qTEpd9r8cnDAVAbBwCQIAbEADw6AAVgIhwAv/////85X7hzPPCwqqxBK92mitkrP07P///////Y/9c/PP/+Myi3Uq1MLQABgcpOSEogyjqUUhoq5hUKAYUqqBYi5mAOAoYDoDRgFgEmAQA+JA0mA2CoYHYNBhzi9GRuwwcfxmxj1ilGGOAIYFQMJgmAdgYAAwEwGDANAWMCsAguCrDCZRFnelbTWawE7ztOU5UPNNh6fKoEoCAhL84T0QcqHXRry2z9flaXSqlx/VNuWy2Ou9DUuyr4Y039ztfrPG1jzmu6/GllMNO9PZd/HD/3Zxx5hnUx5Z/987jTP9j3mVYr/////9yoCZA1TXbNNf06SmTixmW3MnSQTJxRl01ACQDkwWgKw//uSxA+DFjW9FE9kVUNON6BN9D+gICOYLgGBg8hOmJ0KIaIIcpoLS+mE2KYYCQIpgagXGtG+gkCZ7gCmlDSmXK3K6ntQEoFAuX53nSROU5LYsNZaXOU5SFWK/O2UuNa7++ZymW/v7sZjMt5UYC1GmyylVO1mHY1bx1Ko1TZKBAQE/lRpditUvlYraqXqY66G//////Ne3uzJU1NIQyzqFMMyhDuwRjw4EiIAF/////PL///wp4xJ3oQFmABABRgBoA6YBEAdGAigNZgQwGcYKKDemLXE0prW54cYgmASmCdAG5gRoBQYCUAJmAUgAwYAQiwAUvR0I7fxsfW//1z6N3ofWKucwBkAwCABqbkfZXnlqArFW34tHQZogQRmMICcCJUjaaiKFIPGNArEPnqUjwkkwVK0Ul7JZR7q+WXpzMFNvxe0rcJmV8zPXz3DRFevtqNSfdoFMVtVy04+M3OTlI3tDUjH8ZiWDoYm66mO9DIRQOBhQGZnkN1lUdUwP1rDD/3j3//9brbsRaKN+rSVgBkwGgkD+FFNjlWLnMmgNkwqwf/7ksQTABYBvQAvGZtSB5ij6GwyCmjBMArMCUBQwDgAwgAZXMHymNUu8uf//rOl3T1alyIySP1IV0xpuDP8/Of42PnPV/M0/eKYwskX7XGHvTGShTWLukc1NdjKVa7csjcfHZZZm5Zi5nz3Nl7f/O6W+O1bUQTfIIrVtb7svQmcP6gq6Fprj1Cx6I4SsHI4+FMZiOq8mErhISBUW4jATgGvUElkSA///fbiIIECAAIAC7JvG8F3qCC2jB1iUlvt3ve9AGAgBwGgNBEEgRBHEsSyWTyWZk87MAaAgDQKBEOBIHwRxHHczP168/Xnh4weGCxYeHCNDXr17a9e+scLChREpPATFwOfB8IOMDC7zb3hBACYXFwu0f////UX+Xe7Fi5gIzMzN8YCAgICAhR4xGHW4tqoqiwFRk26zN7SBATmRAqXpdldqmrOWuu015nTOmdOU5T/P9DL+v6/r+w6/sOy2mFhYWBsDYPjmUkVVVVVZrhmaGX1WtV52Zr//1hrYWFr2v//moatma1UVaG6hmb19a9mZmuGYk1V9V4Ksk1Vgo3/+5LEQIPUObj4Ie0PQAAANIAAAASueyRU2VWskwBYTsUDY6mk1QeABCcAUACHorRQcg1BSGpMQU1FMy45OC4yqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqTEFNRTMuOTguMqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//uSxLYDwAABpAAAACAAADSAAAAEqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqg==";

  // src/components/Launcher.js
  var Launcher = class extends import_react16.Component {
    constructor() {
      super();
      this.state = {
        launcherIcon: logo_no_bg_default,
        isOpen: false
      };
    }
    componentWillReceiveProps(nextProps) {
      if (this.props.mute) {
        return;
      }
      const nextMessage = nextProps.messageList[nextProps.messageList.length - 1];
      const isIncoming = (nextMessage || {}).author === "them";
      const isNew = nextProps.messageList.length > this.props.messageList.length;
      if (isIncoming && isNew) {
        this.playIncomingMessageSound();
      }
    }
    playIncomingMessageSound() {
      var audio = new Audio(notification_default);
      audio.play();
    }
    handleClick() {
      if (this.props.handleClick !== void 0) {
        this.props.handleClick();
      } else {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
    }
    render() {
      const isOpen = this.props.hasOwnProperty("isOpen") ? this.props.isOpen : this.state.isOpen;
      const classList = [
        "sc-launcher",
        isOpen ? "opened" : ""
      ];
      return /* @__PURE__ */ import_react16.default.createElement("div", { id: "sc-launcher" }, /* @__PURE__ */ import_react16.default.createElement("div", { className: classList.join(" "), onClick: this.handleClick.bind(this) }, /* @__PURE__ */ import_react16.default.createElement(MessageCount, { count: this.props.newMessagesCount, isOpen }), /* @__PURE__ */ import_react16.default.createElement("img", { className: "sc-open-icon", src: close_icon_default }), /* @__PURE__ */ import_react16.default.createElement("img", { className: "sc-closed-icon", src: logo_no_bg_default })), /* @__PURE__ */ import_react16.default.createElement(
        ChatWindow_default,
        {
          messageList: this.props.messageList,
          onUserInputSubmit: this.props.onMessageWasSent,
          onFilesSelected: this.props.onFilesSelected,
          agentProfile: this.props.agentProfile,
          isOpen,
          onClose: this.handleClick.bind(this),
          showEmoji: this.props.showEmoji
        }
      ));
    }
  };
  var MessageCount = (props) => {
    if (props.count === 0 || props.isOpen === true) {
      return null;
    }
    return /* @__PURE__ */ import_react16.default.createElement("div", { className: "sc-new-messages-count" }, props.count);
  };
  Launcher.propTypes = {
    onMessageWasReceived: import_prop_types3.default.func,
    onMessageWasSent: import_prop_types3.default.func,
    newMessagesCount: import_prop_types3.default.number,
    isOpen: import_prop_types3.default.bool,
    handleClick: import_prop_types3.default.func,
    messageList: import_prop_types3.default.arrayOf(import_prop_types3.default.object),
    mute: import_prop_types3.default.bool,
    showEmoji: import_prop_types3.default.bool
  };
  Launcher.defaultProps = {
    newMessagesCount: 0,
    showEmoji: true
  };
  var Launcher_default = Launcher;

  // node_modules/uuid/dist/esm-browser/rng.js
  var getRandomValues;
  var rnds8 = new Uint8Array(16);
  function rng() {
    if (!getRandomValues) {
      getRandomValues = typeof crypto !== "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== "undefined" && typeof msCrypto.getRandomValues === "function" && msCrypto.getRandomValues.bind(msCrypto);
      if (!getRandomValues) {
        throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
      }
    }
    return getRandomValues(rnds8);
  }

  // node_modules/uuid/dist/esm-browser/regex.js
  var regex_default = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

  // node_modules/uuid/dist/esm-browser/validate.js
  function validate(uuid) {
    return typeof uuid === "string" && regex_default.test(uuid);
  }
  var validate_default = validate;

  // node_modules/uuid/dist/esm-browser/stringify.js
  var byteToHex = [];
  for (i = 0; i < 256; ++i) {
    byteToHex.push((i + 256).toString(16).substr(1));
  }
  var i;
  function stringify(arr) {
    var offset = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
    if (!validate_default(uuid)) {
      throw TypeError("Stringified UUID is invalid");
    }
    return uuid;
  }
  var stringify_default = stringify;

  // node_modules/uuid/dist/esm-browser/v4.js
  function v4(options, buf, offset) {
    options = options || {};
    var rnds = options.random || (options.rng || rng)();
    rnds[6] = rnds[6] & 15 | 64;
    rnds[8] = rnds[8] & 63 | 128;
    if (buf) {
      offset = offset || 0;
      for (var i = 0; i < 16; ++i) {
        buf[offset + i] = rnds[i];
      }
      return buf;
    }
    return stringify_default(rnds);
  }
  var v4_default = v4;

  // src/components/helpers/useInterval.js
  var import_react17 = __toESM(require_react());
  function useInterval(callback, delay) {
    const savedCallback = (0, import_react17.useRef)();
    (0, import_react17.useEffect)(() => {
      savedCallback.current = callback;
    }, [callback]);
    (0, import_react17.useEffect)(() => {
      function func() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(func, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }

  // src/components/helpers/fetch-wrapper.js
  var backendurl = "";
  var fetchWrapper = {
    get: request("GET"),
    post: request("POST"),
    put: request("PUT"),
    patch: request("PATCH"),
    delete: request("DELETE")
  };
  function request(method) {
    return (url, token, body) => {
      const requestOptions = {
        method,
        headers: authHeader(url, token)
      };
      if (body) {
        requestOptions.headers["Content-Type"] = "application/json";
        requestOptions.body = JSON.stringify(body);
      }
      return fetch(url, requestOptions).then(handleResponse);
    };
  }
  function authHeader(url, token) {
    const isLoggedIn = !!token;
    const isApiUrl = url.startsWith(backendurl);
    if (isLoggedIn && isApiUrl) {
      return { Authorization: `Bearer ${token}` };
    } else {
      return {};
    }
  }
  function handleResponse(response) {
    return response.text().then((text) => {
      const data = text && JSON.parse(text);
      return data;
    });
  }

  // src/App.js
  function App({ domElement }) {
    const URL = "wss://0jlvdeflh4.execute-api.us-east-1.amazonaws.com/dev/";
    const name = domElement.getAttribute("name");
    const initialName = name.substring(0, 1);
    const socket = (0, import_react18.useRef)(null);
    const [isConnected, setIsConnected] = (0, import_react18.useState)(false);
    const color = domElement.getAttribute("color");
    const org = domElement.getAttribute("org");
    const [messageList, setMessageList] = (0, import_react18.useState)([]);
    const [open, setOpen] = (0, import_react18.useState)(false);
    const [fooEvents, setFooEvents] = (0, import_react18.useState)([]);
    const id1 = v4_default();
    const sessionId = id1;
    if (!localStorage.getItem("sessionId")) {
      localStorage.setItem("sessionId", sessionId);
    }
    const backendUrl = "https://29sd3x064a.execute-api.us-east-1.amazonaws.com/dev";
    (0, import_react18.useEffect)(() => {
      loadList();
    }, []);
    const loadList = async () => {
      let number = localStorage.getItem("sessionId");
      const url = `${backendUrl}/get-message?number=${number}`;
      const postData = {
        msg_channel: "web",
        number,
        org_unit_id: "eocean"
      };
      const token = {};
      const data = await fetchWrapper.post(url, token, postData);
      const datax = data.reverse();
      setMessageList(datax);
    };
    useInterval(() => {
      loadListNew();
    }, 3e3);
    const loadListNew = async () => {
      let number = localStorage.getItem("sessionId");
      const chat = {};
      console.log(messageList[messageList.length - 1]?._id);
      const lastId = messageList[messageList.length - 1]?._id;
      if (lastId) {
        const url = `${backendUrl}/get-message-new?number=${number}`;
        const postData = {
          msg_channel: "web",
          number,
          last_msg_id: lastId,
          org_unit_id: "eocean"
        };
        const token = {};
        const dataxAll = await fetchWrapper.post(url, token, postData);
        if (dataxAll.length > 0) {
          const newVal = [...messageList, ...dataxAll];
          console.log(newVal);
          setMessageList(newVal);
        }
      } else {
        console.log("refresh");
      }
    };
    const onSocketOpen = (0, import_react18.useCallback)(() => {
      setIsConnected(true);
      const name2 = localStorage.getItem("sessionId");
      console.log(name2);
      socket.current?.send(JSON.stringify({ action: "setName", name: name2 }));
    }, []);
    function onFooEventCon(value) {
      console.log(value);
      console.log("Ddd");
    }
    const onConnect = (0, import_react18.useCallback)(() => {
      if (socket.current?.readyState !== WebSocket.OPEN) {
        socket.current = new WebSocket(URL);
        socket.current.addEventListener("open", onSocketOpen);
        socket.current.addEventListener("close", onSocketClose);
        socket.current.addEventListener("message", (event) => {
          onSocketMessage(event.data);
        });
      }
    }, []);
    const onSendPrivateMessage = (0, import_react18.useCallback)((message) => {
      let data = JSON.stringify({
        "msg": message.data.text,
        "number": localStorage.getItem("sessionId"),
        "wa_type": "0",
        "msg_channel": "web",
        "org_unit_id": "eocean"
      });
      const requestOptions = {
        method: "post",
        headers: {}
      };
      requestOptions.headers["Content-Type"] = "application/json";
      requestOptions.body = data;
      fetch(`https://29sd3x064a.execute-api.us-east-1.amazonaws.com/dev/rec-message`, requestOptions).then((response) => response.json()).then((result) => {
        setMessageList((prevMessageList) => [...prevMessageList, result.data]);
      });
    }, []);
    const onSocketClose = (0, import_react18.useCallback)(() => {
      setIsConnected(false);
    }, []);
    const onSocketMessage = (0, import_react18.useCallback)((dataStr) => {
      const data = JSON.parse(dataStr);
      const mm = {
        author: "them",
        type: "text",
        org,
        data: { text: data.privateMessage }
      };
      setMessageList((prevMessageList) => [...prevMessageList, mm]);
    }, []);
    const onFilesSelected = (fileList) => {
      const objectURL = window.URL.createObjectURL(fileList[0]);
      setMessageList((prevMessageList) => [
        ...prevMessageList,
        {
          author: "me",
          type: "file",
          data: {
            url: objectURL,
            fileName: fileList[0].name
          }
        }
      ]);
    };
    return /* @__PURE__ */ import_react18.default.createElement("div", { className: "App" }, /* @__PURE__ */ import_react18.default.createElement("style", null, ` .sc-launcher, .sc-message--dtext, .sc-header {
    background: ${color} !important;
}
 `), /* @__PURE__ */ import_react18.default.createElement(
      Launcher_default,
      {
        agentProfile: {
          teamName: name,
          imageUrl: "https://placehold.co/50x50?text=" + initialName
        },
        onFilesSelected,
        onMessageWasSent: onSendPrivateMessage,
        messageList,
        showEmoji: true,
        handleClick: () => setOpen(!open),
        isOpen: open
      }
    ));
  }
  var App_default = App;
})();
/*! Bundled license information:

react/cjs/react.development.js:
  (**
   * @license React
   * react.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-is/cjs/react-is.development.js:
  (** @license React v16.13.1
   * react-is.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

object-assign/index.js:
  (*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  *)
*/
