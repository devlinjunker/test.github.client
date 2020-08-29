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
 * The BranchProtectionRequiredStatusChecks model module.
 * @module model/BranchProtectionRequiredStatusChecks
 * @version 0.0.5
 */
var BranchProtectionRequiredStatusChecks = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BranchProtectionRequiredStatusChecks</code>.
   * @alias module:model/BranchProtectionRequiredStatusChecks
   * @param contexts {Array.<String>} 
   * @param enforcementLevel {String} 
   */
  function BranchProtectionRequiredStatusChecks(contexts, enforcementLevel) {
    _classCallCheck(this, BranchProtectionRequiredStatusChecks);

    BranchProtectionRequiredStatusChecks.initialize(this, contexts, enforcementLevel);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(BranchProtectionRequiredStatusChecks, null, [{
    key: "initialize",
    value: function initialize(obj, contexts, enforcementLevel) {
      obj['contexts'] = contexts;
      obj['enforcement_level'] = enforcementLevel;
    }
    /**
     * Constructs a <code>BranchProtectionRequiredStatusChecks</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BranchProtectionRequiredStatusChecks} obj Optional instance to populate.
     * @return {module:model/BranchProtectionRequiredStatusChecks} The populated <code>BranchProtectionRequiredStatusChecks</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BranchProtectionRequiredStatusChecks();

        if (data.hasOwnProperty('contexts')) {
          obj['contexts'] = _ApiClient["default"].convertToType(data['contexts'], ['String']);
        }

        if (data.hasOwnProperty('contexts_url')) {
          obj['contexts_url'] = _ApiClient["default"].convertToType(data['contexts_url'], 'String');
        }

        if (data.hasOwnProperty('enforcement_level')) {
          obj['enforcement_level'] = _ApiClient["default"].convertToType(data['enforcement_level'], 'String');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return BranchProtectionRequiredStatusChecks;
}();
/**
 * @member {Array.<String>} contexts
 */


BranchProtectionRequiredStatusChecks.prototype['contexts'] = undefined;
/**
 * @member {String} contexts_url
 */

BranchProtectionRequiredStatusChecks.prototype['contexts_url'] = undefined;
/**
 * @member {String} enforcement_level
 */

BranchProtectionRequiredStatusChecks.prototype['enforcement_level'] = undefined;
/**
 * @member {String} url
 */

BranchProtectionRequiredStatusChecks.prototype['url'] = undefined;
var _default = BranchProtectionRequiredStatusChecks;
exports["default"] = _default;