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
 * The PullRequestHeadRepoLicense model module.
 * @module model/PullRequestHeadRepoLicense
 * @version 0.0.5
 */
var PullRequestHeadRepoLicense = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PullRequestHeadRepoLicense</code>.
   * @alias module:model/PullRequestHeadRepoLicense
   * @param key {String} 
   * @param name {String} 
   * @param nodeId {String} 
   * @param spdxId {String} 
   * @param url {String} 
   */
  function PullRequestHeadRepoLicense(key, name, nodeId, spdxId, url) {
    _classCallCheck(this, PullRequestHeadRepoLicense);

    PullRequestHeadRepoLicense.initialize(this, key, name, nodeId, spdxId, url);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PullRequestHeadRepoLicense, null, [{
    key: "initialize",
    value: function initialize(obj, key, name, nodeId, spdxId, url) {
      obj['key'] = key;
      obj['name'] = name;
      obj['node_id'] = nodeId;
      obj['spdx_id'] = spdxId;
      obj['url'] = url;
    }
    /**
     * Constructs a <code>PullRequestHeadRepoLicense</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PullRequestHeadRepoLicense} obj Optional instance to populate.
     * @return {module:model/PullRequestHeadRepoLicense} The populated <code>PullRequestHeadRepoLicense</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PullRequestHeadRepoLicense();

        if (data.hasOwnProperty('key')) {
          obj['key'] = _ApiClient["default"].convertToType(data['key'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('node_id')) {
          obj['node_id'] = _ApiClient["default"].convertToType(data['node_id'], 'String');
        }

        if (data.hasOwnProperty('spdx_id')) {
          obj['spdx_id'] = _ApiClient["default"].convertToType(data['spdx_id'], 'String');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return PullRequestHeadRepoLicense;
}();
/**
 * @member {String} key
 */


PullRequestHeadRepoLicense.prototype['key'] = undefined;
/**
 * @member {String} name
 */

PullRequestHeadRepoLicense.prototype['name'] = undefined;
/**
 * @member {String} node_id
 */

PullRequestHeadRepoLicense.prototype['node_id'] = undefined;
/**
 * @member {String} spdx_id
 */

PullRequestHeadRepoLicense.prototype['spdx_id'] = undefined;
/**
 * @member {String} url
 */

PullRequestHeadRepoLicense.prototype['url'] = undefined;
var _default = PullRequestHeadRepoLicense;
exports["default"] = _default;