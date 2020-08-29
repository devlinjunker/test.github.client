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
 * The OrgHookConfig model module.
 * @module model/OrgHookConfig
 * @version 0.0.5
 */
var OrgHookConfig = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OrgHookConfig</code>.
   * @alias module:model/OrgHookConfig
   */
  function OrgHookConfig() {
    _classCallCheck(this, OrgHookConfig);

    OrgHookConfig.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(OrgHookConfig, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>OrgHookConfig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrgHookConfig} obj Optional instance to populate.
     * @return {module:model/OrgHookConfig} The populated <code>OrgHookConfig</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OrgHookConfig();

        if (data.hasOwnProperty('content_type')) {
          obj['content_type'] = _ApiClient["default"].convertToType(data['content_type'], 'String');
        }

        if (data.hasOwnProperty('insecure_ssl')) {
          obj['insecure_ssl'] = _ApiClient["default"].convertToType(data['insecure_ssl'], 'String');
        }

        if (data.hasOwnProperty('secret')) {
          obj['secret'] = _ApiClient["default"].convertToType(data['secret'], 'String');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return OrgHookConfig;
}();
/**
 * @member {String} content_type
 */


OrgHookConfig.prototype['content_type'] = undefined;
/**
 * @member {String} insecure_ssl
 */

OrgHookConfig.prototype['insecure_ssl'] = undefined;
/**
 * @member {String} secret
 */

OrgHookConfig.prototype['secret'] = undefined;
/**
 * @member {String} url
 */

OrgHookConfig.prototype['url'] = undefined;
var _default = OrgHookConfig;
exports["default"] = _default;