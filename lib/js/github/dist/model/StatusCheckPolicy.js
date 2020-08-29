"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The StatusCheckPolicy model module.
 * @module model/StatusCheckPolicy
 * @version 0.0.5
 */
var StatusCheckPolicy = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>StatusCheckPolicy</code>.
   * Status Check Policy
   * @alias module:model/StatusCheckPolicy
   * @param contexts {Array.<String>} 
   * @param contextsUrl {String} 
   * @param strict {Boolean} 
   * @param url {String} 
   */
  function StatusCheckPolicy(contexts, contextsUrl, strict, url) {
    _classCallCheck(this, StatusCheckPolicy);

    StatusCheckPolicy.initialize(this, contexts, contextsUrl, strict, url);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(StatusCheckPolicy, null, [{
    key: "initialize",
    value: function initialize(obj, contexts, contextsUrl, strict, url) {
      obj['contexts'] = contexts;
      obj['contexts_url'] = contextsUrl;
      obj['strict'] = strict;
      obj['url'] = url;
    }
    /**
     * Constructs a <code>StatusCheckPolicy</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StatusCheckPolicy} obj Optional instance to populate.
     * @return {module:model/StatusCheckPolicy} The populated <code>StatusCheckPolicy</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new StatusCheckPolicy();

        if (data.hasOwnProperty('contexts')) {
          obj['contexts'] = _ApiClient["default"].convertToType(data['contexts'], ['String']);
        }

        if (data.hasOwnProperty('contexts_url')) {
          obj['contexts_url'] = _ApiClient["default"].convertToType(data['contexts_url'], 'String');
        }

        if (data.hasOwnProperty('strict')) {
          obj['strict'] = _ApiClient["default"].convertToType(data['strict'], 'Boolean');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return StatusCheckPolicy;
}();
/**
 * @member {Array.<String>} contexts
 */


StatusCheckPolicy.prototype['contexts'] = undefined;
/**
 * @member {String} contexts_url
 */

StatusCheckPolicy.prototype['contexts_url'] = undefined;
/**
 * @member {Boolean} strict
 */

StatusCheckPolicy.prototype['strict'] = undefined;
/**
 * @member {String} url
 */

StatusCheckPolicy.prototype['url'] = undefined;
var _default = StatusCheckPolicy;
exports["default"] = _default;