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
 * The ActionsBillingUsageMinutesUsedBreakdown model module.
 * @module model/ActionsBillingUsageMinutesUsedBreakdown
 * @version 0.0.5
 */
var ActionsBillingUsageMinutesUsedBreakdown = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ActionsBillingUsageMinutesUsedBreakdown</code>.
   * @alias module:model/ActionsBillingUsageMinutesUsedBreakdown
   */
  function ActionsBillingUsageMinutesUsedBreakdown() {
    _classCallCheck(this, ActionsBillingUsageMinutesUsedBreakdown);

    ActionsBillingUsageMinutesUsedBreakdown.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ActionsBillingUsageMinutesUsedBreakdown, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ActionsBillingUsageMinutesUsedBreakdown</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ActionsBillingUsageMinutesUsedBreakdown} obj Optional instance to populate.
     * @return {module:model/ActionsBillingUsageMinutesUsedBreakdown} The populated <code>ActionsBillingUsageMinutesUsedBreakdown</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ActionsBillingUsageMinutesUsedBreakdown();

        if (data.hasOwnProperty('MACOS')) {
          obj['MACOS'] = _ApiClient["default"].convertToType(data['MACOS'], 'Number');
        }

        if (data.hasOwnProperty('UBUNTU')) {
          obj['UBUNTU'] = _ApiClient["default"].convertToType(data['UBUNTU'], 'Number');
        }

        if (data.hasOwnProperty('WINDOWS')) {
          obj['WINDOWS'] = _ApiClient["default"].convertToType(data['WINDOWS'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return ActionsBillingUsageMinutesUsedBreakdown;
}();
/**
 * Total minutes used on macOS runner machines.
 * @member {Number} MACOS
 */


ActionsBillingUsageMinutesUsedBreakdown.prototype['MACOS'] = undefined;
/**
 * Total minutes used on Ubuntu runner machines.
 * @member {Number} UBUNTU
 */

ActionsBillingUsageMinutesUsedBreakdown.prototype['UBUNTU'] = undefined;
/**
 * Total minutes used on Windows runner machines.
 * @member {Number} WINDOWS
 */

ActionsBillingUsageMinutesUsedBreakdown.prototype['WINDOWS'] = undefined;
var _default = ActionsBillingUsageMinutesUsedBreakdown;
exports["default"] = _default;