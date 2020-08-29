"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ApiOverviewSshKeyFingerprints = _interopRequireDefault(require("./ApiOverviewSshKeyFingerprints"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ApiOverview model module.
 * @module model/ApiOverview
 * @version 0.0.5
 */
var ApiOverview = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ApiOverview</code>.
   * Api Overview
   * @alias module:model/ApiOverview
   * @param verifiablePasswordAuthentication {Boolean} 
   */
  function ApiOverview(verifiablePasswordAuthentication) {
    _classCallCheck(this, ApiOverview);

    ApiOverview.initialize(this, verifiablePasswordAuthentication);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ApiOverview, null, [{
    key: "initialize",
    value: function initialize(obj, verifiablePasswordAuthentication) {
      obj['verifiable_password_authentication'] = verifiablePasswordAuthentication;
    }
    /**
     * Constructs a <code>ApiOverview</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApiOverview} obj Optional instance to populate.
     * @return {module:model/ApiOverview} The populated <code>ApiOverview</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ApiOverview();

        if (data.hasOwnProperty('api')) {
          obj['api'] = _ApiClient["default"].convertToType(data['api'], ['String']);
        }

        if (data.hasOwnProperty('git')) {
          obj['git'] = _ApiClient["default"].convertToType(data['git'], ['String']);
        }

        if (data.hasOwnProperty('github_services_sha')) {
          obj['github_services_sha'] = _ApiClient["default"].convertToType(data['github_services_sha'], 'String');
        }

        if (data.hasOwnProperty('hooks')) {
          obj['hooks'] = _ApiClient["default"].convertToType(data['hooks'], ['String']);
        }

        if (data.hasOwnProperty('importer')) {
          obj['importer'] = _ApiClient["default"].convertToType(data['importer'], ['String']);
        }

        if (data.hasOwnProperty('installed_version')) {
          obj['installed_version'] = _ApiClient["default"].convertToType(data['installed_version'], 'String');
        }

        if (data.hasOwnProperty('pages')) {
          obj['pages'] = _ApiClient["default"].convertToType(data['pages'], ['String']);
        }

        if (data.hasOwnProperty('ssh_key_fingerprints')) {
          obj['ssh_key_fingerprints'] = _ApiOverviewSshKeyFingerprints["default"].constructFromObject(data['ssh_key_fingerprints']);
        }

        if (data.hasOwnProperty('verifiable_password_authentication')) {
          obj['verifiable_password_authentication'] = _ApiClient["default"].convertToType(data['verifiable_password_authentication'], 'Boolean');
        }

        if (data.hasOwnProperty('web')) {
          obj['web'] = _ApiClient["default"].convertToType(data['web'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return ApiOverview;
}();
/**
 * @member {Array.<String>} api
 */


ApiOverview.prototype['api'] = undefined;
/**
 * @member {Array.<String>} git
 */

ApiOverview.prototype['git'] = undefined;
/**
 * @member {String} github_services_sha
 */

ApiOverview.prototype['github_services_sha'] = undefined;
/**
 * @member {Array.<String>} hooks
 */

ApiOverview.prototype['hooks'] = undefined;
/**
 * @member {Array.<String>} importer
 */

ApiOverview.prototype['importer'] = undefined;
/**
 * @member {String} installed_version
 */

ApiOverview.prototype['installed_version'] = undefined;
/**
 * @member {Array.<String>} pages
 */

ApiOverview.prototype['pages'] = undefined;
/**
 * @member {module:model/ApiOverviewSshKeyFingerprints} ssh_key_fingerprints
 */

ApiOverview.prototype['ssh_key_fingerprints'] = undefined;
/**
 * @member {Boolean} verifiable_password_authentication
 */

ApiOverview.prototype['verifiable_password_authentication'] = undefined;
/**
 * @member {Array.<String>} web
 */

ApiOverview.prototype['web'] = undefined;
var _default = ApiOverview;
exports["default"] = _default;