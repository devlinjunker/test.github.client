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
 * The MinimalRepositoryLicense model module.
 * @module model/MinimalRepositoryLicense
 * @version 0.0.5
 */
var MinimalRepositoryLicense = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>MinimalRepositoryLicense</code>.
   * @alias module:model/MinimalRepositoryLicense
   */
  function MinimalRepositoryLicense() {
    _classCallCheck(this, MinimalRepositoryLicense);

    MinimalRepositoryLicense.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(MinimalRepositoryLicense, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>MinimalRepositoryLicense</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MinimalRepositoryLicense} obj Optional instance to populate.
     * @return {module:model/MinimalRepositoryLicense} The populated <code>MinimalRepositoryLicense</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new MinimalRepositoryLicense();

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

  return MinimalRepositoryLicense;
}();
/**
 * @member {String} key
 */


MinimalRepositoryLicense.prototype['key'] = undefined;
/**
 * @member {String} name
 */

MinimalRepositoryLicense.prototype['name'] = undefined;
/**
 * @member {String} node_id
 */

MinimalRepositoryLicense.prototype['node_id'] = undefined;
/**
 * @member {String} spdx_id
 */

MinimalRepositoryLicense.prototype['spdx_id'] = undefined;
/**
 * @member {String} url
 */

MinimalRepositoryLicense.prototype['url'] = undefined;
var _default = MinimalRepositoryLicense;
exports["default"] = _default;