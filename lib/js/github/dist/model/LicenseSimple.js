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
 * The LicenseSimple model module.
 * @module model/LicenseSimple
 * @version 0.0.5
 */
var LicenseSimple = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LicenseSimple</code>.
   * License Simple
   * @alias module:model/LicenseSimple
   * @param key {String} 
   * @param name {String} 
   * @param nodeId {String} 
   * @param spdxId {String} 
   * @param url {String} 
   */
  function LicenseSimple(key, name, nodeId, spdxId, url) {
    _classCallCheck(this, LicenseSimple);

    LicenseSimple.initialize(this, key, name, nodeId, spdxId, url);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LicenseSimple, null, [{
    key: "initialize",
    value: function initialize(obj, key, name, nodeId, spdxId, url) {
      obj['key'] = key;
      obj['name'] = name;
      obj['node_id'] = nodeId;
      obj['spdx_id'] = spdxId;
      obj['url'] = url;
    }
    /**
     * Constructs a <code>LicenseSimple</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LicenseSimple} obj Optional instance to populate.
     * @return {module:model/LicenseSimple} The populated <code>LicenseSimple</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LicenseSimple();

        if (data.hasOwnProperty('html_url')) {
          obj['html_url'] = _ApiClient["default"].convertToType(data['html_url'], 'String');
        }

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

  return LicenseSimple;
}();
/**
 * @member {String} html_url
 */


LicenseSimple.prototype['html_url'] = undefined;
/**
 * @member {String} key
 */

LicenseSimple.prototype['key'] = undefined;
/**
 * @member {String} name
 */

LicenseSimple.prototype['name'] = undefined;
/**
 * @member {String} node_id
 */

LicenseSimple.prototype['node_id'] = undefined;
/**
 * @member {String} spdx_id
 */

LicenseSimple.prototype['spdx_id'] = undefined;
/**
 * @member {String} url
 */

LicenseSimple.prototype['url'] = undefined;
var _default = LicenseSimple;
exports["default"] = _default;