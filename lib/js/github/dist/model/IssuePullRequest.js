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
 * The IssuePullRequest model module.
 * @module model/IssuePullRequest
 * @version 0.0.5
 */
var IssuePullRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>IssuePullRequest</code>.
   * @alias module:model/IssuePullRequest
   * @param diffUrl {String} 
   * @param htmlUrl {String} 
   * @param patchUrl {String} 
   * @param url {String} 
   */
  function IssuePullRequest(diffUrl, htmlUrl, patchUrl, url) {
    _classCallCheck(this, IssuePullRequest);

    IssuePullRequest.initialize(this, diffUrl, htmlUrl, patchUrl, url);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(IssuePullRequest, null, [{
    key: "initialize",
    value: function initialize(obj, diffUrl, htmlUrl, patchUrl, url) {
      obj['diff_url'] = diffUrl;
      obj['html_url'] = htmlUrl;
      obj['patch_url'] = patchUrl;
      obj['url'] = url;
    }
    /**
     * Constructs a <code>IssuePullRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IssuePullRequest} obj Optional instance to populate.
     * @return {module:model/IssuePullRequest} The populated <code>IssuePullRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IssuePullRequest();

        if (data.hasOwnProperty('diff_url')) {
          obj['diff_url'] = _ApiClient["default"].convertToType(data['diff_url'], 'String');
        }

        if (data.hasOwnProperty('html_url')) {
          obj['html_url'] = _ApiClient["default"].convertToType(data['html_url'], 'String');
        }

        if (data.hasOwnProperty('merged_at')) {
          obj['merged_at'] = _ApiClient["default"].convertToType(data['merged_at'], 'Date');
        }

        if (data.hasOwnProperty('patch_url')) {
          obj['patch_url'] = _ApiClient["default"].convertToType(data['patch_url'], 'String');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return IssuePullRequest;
}();
/**
 * @member {String} diff_url
 */


IssuePullRequest.prototype['diff_url'] = undefined;
/**
 * @member {String} html_url
 */

IssuePullRequest.prototype['html_url'] = undefined;
/**
 * @member {Date} merged_at
 */

IssuePullRequest.prototype['merged_at'] = undefined;
/**
 * @member {String} patch_url
 */

IssuePullRequest.prototype['patch_url'] = undefined;
/**
 * @member {String} url
 */

IssuePullRequest.prototype['url'] = undefined;
var _default = IssuePullRequest;
exports["default"] = _default;