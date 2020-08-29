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
 * The ProtectedBranchAllowDeletions model module.
 * @module model/ProtectedBranchAllowDeletions
 * @version 0.0.5
 */
var ProtectedBranchAllowDeletions = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ProtectedBranchAllowDeletions</code>.
   * @alias module:model/ProtectedBranchAllowDeletions
   * @param enabled {Boolean} 
   */
  function ProtectedBranchAllowDeletions(enabled) {
    _classCallCheck(this, ProtectedBranchAllowDeletions);

    ProtectedBranchAllowDeletions.initialize(this, enabled);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ProtectedBranchAllowDeletions, null, [{
    key: "initialize",
    value: function initialize(obj, enabled) {
      obj['enabled'] = enabled;
    }
    /**
     * Constructs a <code>ProtectedBranchAllowDeletions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProtectedBranchAllowDeletions} obj Optional instance to populate.
     * @return {module:model/ProtectedBranchAllowDeletions} The populated <code>ProtectedBranchAllowDeletions</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ProtectedBranchAllowDeletions();

        if (data.hasOwnProperty('enabled')) {
          obj['enabled'] = _ApiClient["default"].convertToType(data['enabled'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return ProtectedBranchAllowDeletions;
}();
/**
 * @member {Boolean} enabled
 */


ProtectedBranchAllowDeletions.prototype['enabled'] = undefined;
var _default = ProtectedBranchAllowDeletions;
exports["default"] = _default;