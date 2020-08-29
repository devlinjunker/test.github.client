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
 * The ApiOverviewSshKeyFingerprints model module.
 * @module model/ApiOverviewSshKeyFingerprints
 * @version 0.0.5
 */
var ApiOverviewSshKeyFingerprints = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ApiOverviewSshKeyFingerprints</code>.
   * @alias module:model/ApiOverviewSshKeyFingerprints
   */
  function ApiOverviewSshKeyFingerprints() {
    _classCallCheck(this, ApiOverviewSshKeyFingerprints);

    ApiOverviewSshKeyFingerprints.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ApiOverviewSshKeyFingerprints, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ApiOverviewSshKeyFingerprints</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApiOverviewSshKeyFingerprints} obj Optional instance to populate.
     * @return {module:model/ApiOverviewSshKeyFingerprints} The populated <code>ApiOverviewSshKeyFingerprints</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ApiOverviewSshKeyFingerprints();

        if (data.hasOwnProperty('MD5_DSA')) {
          obj['MD5_DSA'] = _ApiClient["default"].convertToType(data['MD5_DSA'], 'String');
        }

        if (data.hasOwnProperty('MD5_RSA')) {
          obj['MD5_RSA'] = _ApiClient["default"].convertToType(data['MD5_RSA'], 'String');
        }

        if (data.hasOwnProperty('SHA256_DSA')) {
          obj['SHA256_DSA'] = _ApiClient["default"].convertToType(data['SHA256_DSA'], 'String');
        }

        if (data.hasOwnProperty('SHA256_RSA')) {
          obj['SHA256_RSA'] = _ApiClient["default"].convertToType(data['SHA256_RSA'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ApiOverviewSshKeyFingerprints;
}();
/**
 * @member {String} MD5_DSA
 */


ApiOverviewSshKeyFingerprints.prototype['MD5_DSA'] = undefined;
/**
 * @member {String} MD5_RSA
 */

ApiOverviewSshKeyFingerprints.prototype['MD5_RSA'] = undefined;
/**
 * @member {String} SHA256_DSA
 */

ApiOverviewSshKeyFingerprints.prototype['SHA256_DSA'] = undefined;
/**
 * @member {String} SHA256_RSA
 */

ApiOverviewSshKeyFingerprints.prototype['SHA256_RSA'] = undefined;
var _default = ApiOverviewSshKeyFingerprints;
exports["default"] = _default;