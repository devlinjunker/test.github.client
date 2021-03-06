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
 * The ProtectedBranchEnforceAdmins model module.
 * @module model/ProtectedBranchEnforceAdmins
 * @version 0.0.5
 */
var ProtectedBranchEnforceAdmins = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ProtectedBranchEnforceAdmins</code>.
   * @alias module:model/ProtectedBranchEnforceAdmins
   * @param enabled {Boolean} 
   * @param url {String} 
   */
  function ProtectedBranchEnforceAdmins(enabled, url) {
    _classCallCheck(this, ProtectedBranchEnforceAdmins);

    ProtectedBranchEnforceAdmins.initialize(this, enabled, url);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ProtectedBranchEnforceAdmins, null, [{
    key: "initialize",
    value: function initialize(obj, enabled, url) {
      obj['enabled'] = enabled;
      obj['url'] = url;
    }
    /**
     * Constructs a <code>ProtectedBranchEnforceAdmins</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProtectedBranchEnforceAdmins} obj Optional instance to populate.
     * @return {module:model/ProtectedBranchEnforceAdmins} The populated <code>ProtectedBranchEnforceAdmins</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ProtectedBranchEnforceAdmins();

        if (data.hasOwnProperty('enabled')) {
          obj['enabled'] = _ApiClient["default"].convertToType(data['enabled'], 'Boolean');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ProtectedBranchEnforceAdmins;
}();
/**
 * @member {Boolean} enabled
 */


ProtectedBranchEnforceAdmins.prototype['enabled'] = undefined;
/**
 * @member {String} url
 */

ProtectedBranchEnforceAdmins.prototype['url'] = undefined;
var _default = ProtectedBranchEnforceAdmins;
exports["default"] = _default;