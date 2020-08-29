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
 * The ProtectedBranchRequiredSignatures model module.
 * @module model/ProtectedBranchRequiredSignatures
 * @version 0.0.5
 */
var ProtectedBranchRequiredSignatures = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ProtectedBranchRequiredSignatures</code>.
   * @alias module:model/ProtectedBranchRequiredSignatures
   * @param enabled {Boolean} 
   * @param url {String} 
   */
  function ProtectedBranchRequiredSignatures(enabled, url) {
    _classCallCheck(this, ProtectedBranchRequiredSignatures);

    ProtectedBranchRequiredSignatures.initialize(this, enabled, url);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ProtectedBranchRequiredSignatures, null, [{
    key: "initialize",
    value: function initialize(obj, enabled, url) {
      obj['enabled'] = enabled;
      obj['url'] = url;
    }
    /**
     * Constructs a <code>ProtectedBranchRequiredSignatures</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProtectedBranchRequiredSignatures} obj Optional instance to populate.
     * @return {module:model/ProtectedBranchRequiredSignatures} The populated <code>ProtectedBranchRequiredSignatures</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ProtectedBranchRequiredSignatures();

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

  return ProtectedBranchRequiredSignatures;
}();
/**
 * @member {Boolean} enabled
 */


ProtectedBranchRequiredSignatures.prototype['enabled'] = undefined;
/**
 * @member {String} url
 */

ProtectedBranchRequiredSignatures.prototype['url'] = undefined;
var _default = ProtectedBranchRequiredSignatures;
exports["default"] = _default;