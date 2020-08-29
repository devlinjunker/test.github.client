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
 * The ReposOwnerRepoHooksConfig model module.
 * @module model/ReposOwnerRepoHooksConfig
 * @version 0.0.5
 */
var ReposOwnerRepoHooksConfig = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ReposOwnerRepoHooksConfig</code>.
   * Key/value pairs to provide settings for this webhook. [These are defined below](https://developer.github.com/v3/repos/hooks/#create-hook-config-params).
   * @alias module:model/ReposOwnerRepoHooksConfig
   * @param url {String} The URL to which the payloads will be delivered.
   */
  function ReposOwnerRepoHooksConfig(url) {
    _classCallCheck(this, ReposOwnerRepoHooksConfig);

    ReposOwnerRepoHooksConfig.initialize(this, url);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ReposOwnerRepoHooksConfig, null, [{
    key: "initialize",
    value: function initialize(obj, url) {
      obj['url'] = url;
    }
    /**
     * Constructs a <code>ReposOwnerRepoHooksConfig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReposOwnerRepoHooksConfig} obj Optional instance to populate.
     * @return {module:model/ReposOwnerRepoHooksConfig} The populated <code>ReposOwnerRepoHooksConfig</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ReposOwnerRepoHooksConfig();

        if (data.hasOwnProperty('content_type')) {
          obj['content_type'] = _ApiClient["default"].convertToType(data['content_type'], 'String');
        }

        if (data.hasOwnProperty('digest')) {
          obj['digest'] = _ApiClient["default"].convertToType(data['digest'], 'String');
        }

        if (data.hasOwnProperty('insecure_ssl')) {
          obj['insecure_ssl'] = _ApiClient["default"].convertToType(data['insecure_ssl'], 'String');
        }

        if (data.hasOwnProperty('secret')) {
          obj['secret'] = _ApiClient["default"].convertToType(data['secret'], 'String');
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

  return ReposOwnerRepoHooksConfig;
}();
/**
 * The media type used to serialize the payloads. Supported values include `json` and `form`. The default is `form`.
 * @member {String} content_type
 */


ReposOwnerRepoHooksConfig.prototype['content_type'] = undefined;
/**
 * @member {String} digest
 */

ReposOwnerRepoHooksConfig.prototype['digest'] = undefined;
/**
 * Determines whether the SSL certificate of the host for `url` will be verified when delivering payloads. Supported values include `0` (verification is performed) and `1` (verification is not performed). The default is `0`. **We strongly recommend not setting this to `1` as you are subject to man-in-the-middle and other attacks.**
 * @member {String} insecure_ssl
 */

ReposOwnerRepoHooksConfig.prototype['insecure_ssl'] = undefined;
/**
 * If provided, the `secret` will be used as the `key` to generate the HMAC hex digest value in the [`X-Hub-Signature`](https://developer.github.com/webhooks/event-payloads/#delivery-headers) header.
 * @member {String} secret
 */

ReposOwnerRepoHooksConfig.prototype['secret'] = undefined;
/**
 * @member {String} token
 */

ReposOwnerRepoHooksConfig.prototype['token'] = undefined;
/**
 * The URL to which the payloads will be delivered.
 * @member {String} url
 */

ReposOwnerRepoHooksConfig.prototype['url'] = undefined;
var _default = ReposOwnerRepoHooksConfig;
exports["default"] = _default;