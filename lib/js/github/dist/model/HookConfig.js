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
 * The HookConfig model module.
 * @module model/HookConfig
 * @version 0.0.5
 */
var HookConfig = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>HookConfig</code>.
   * @alias module:model/HookConfig
   */
  function HookConfig() {
    _classCallCheck(this, HookConfig);

    HookConfig.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(HookConfig, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>HookConfig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/HookConfig} obj Optional instance to populate.
     * @return {module:model/HookConfig} The populated <code>HookConfig</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new HookConfig();

        if (data.hasOwnProperty('content_type')) {
          obj['content_type'] = _ApiClient["default"].convertToType(data['content_type'], 'String');
        }

        if (data.hasOwnProperty('digest')) {
          obj['digest'] = _ApiClient["default"].convertToType(data['digest'], 'String');
        }

        if (data.hasOwnProperty('email')) {
          obj['email'] = _ApiClient["default"].convertToType(data['email'], 'String');
        }

        if (data.hasOwnProperty('insecure_ssl')) {
          obj['insecure_ssl'] = _ApiClient["default"].convertToType(data['insecure_ssl'], 'String');
        }

        if (data.hasOwnProperty('password')) {
          obj['password'] = _ApiClient["default"].convertToType(data['password'], 'String');
        }

        if (data.hasOwnProperty('room')) {
          obj['room'] = _ApiClient["default"].convertToType(data['room'], 'String');
        }

        if (data.hasOwnProperty('secret')) {
          obj['secret'] = _ApiClient["default"].convertToType(data['secret'], 'String');
        }

        if (data.hasOwnProperty('subdomain')) {
          obj['subdomain'] = _ApiClient["default"].convertToType(data['subdomain'], 'String');
        }

        if (data.hasOwnProperty('token')) {
          obj['token'] = _ApiClient["default"].convertToType(data['token'], 'String');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return HookConfig;
}();
/**
 * @member {String} content_type
 */


HookConfig.prototype['content_type'] = undefined;
/**
 * @member {String} digest
 */

HookConfig.prototype['digest'] = undefined;
/**
 * @member {String} email
 */

HookConfig.prototype['email'] = undefined;
/**
 * @member {String} insecure_ssl
 */

HookConfig.prototype['insecure_ssl'] = undefined;
/**
 * @member {String} password
 */

HookConfig.prototype['password'] = undefined;
/**
 * @member {String} room
 */

HookConfig.prototype['room'] = undefined;
/**
 * @member {String} secret
 */

HookConfig.prototype['secret'] = undefined;
/**
 * @member {String} subdomain
 */

HookConfig.prototype['subdomain'] = undefined;
/**
 * @member {String} token
 */

HookConfig.prototype['token'] = undefined;
/**
 * @member {String} url
 */

HookConfig.prototype['url'] = undefined;
var _default = HookConfig;
exports["default"] = _default;