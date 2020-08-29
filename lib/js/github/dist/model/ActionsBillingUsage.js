"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ActionsBillingUsageMinutesUsedBreakdown = _interopRequireDefault(require("./ActionsBillingUsageMinutesUsedBreakdown"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ActionsBillingUsage model module.
 * @module model/ActionsBillingUsage
 * @version 0.0.5
 */
var ActionsBillingUsage = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ActionsBillingUsage</code>.
   * @alias module:model/ActionsBillingUsage
   */
  function ActionsBillingUsage() {
    _classCallCheck(this, ActionsBillingUsage);

    ActionsBillingUsage.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ActionsBillingUsage, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ActionsBillingUsage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ActionsBillingUsage} obj Optional instance to populate.
     * @return {module:model/ActionsBillingUsage} The populated <code>ActionsBillingUsage</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ActionsBillingUsage();

        if (data.hasOwnProperty('included_minutes')) {
          obj['included_minutes'] = _ApiClient["default"].convertToType(data['included_minutes'], 'Number');
        }

        if (data.hasOwnProperty('minutes_used_breakdown')) {
          obj['minutes_used_breakdown'] = _ActionsBillingUsageMinutesUsedBreakdown["default"].constructFromObject(data['minutes_used_breakdown']);
        }

        if (data.hasOwnProperty('total_minutes_used')) {
          obj['total_minutes_used'] = _ApiClient["default"].convertToType(data['total_minutes_used'], 'Number');
        }

        if (data.hasOwnProperty('total_paid_minutes_used')) {
          obj['total_paid_minutes_used'] = _ApiClient["default"].convertToType(data['total_paid_minutes_used'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return ActionsBillingUsage;
}();
/**
 * The amount of free GitHub Actions minutes available.
 * @member {Number} included_minutes
 */


ActionsBillingUsage.prototype['included_minutes'] = undefined;
/**
 * @member {module:model/ActionsBillingUsageMinutesUsedBreakdown} minutes_used_breakdown
 */

ActionsBillingUsage.prototype['minutes_used_breakdown'] = undefined;
/**
 * The sum of the free and paid GitHub Actions minutes used.
 * @member {Number} total_minutes_used
 */

ActionsBillingUsage.prototype['total_minutes_used'] = undefined;
/**
 * The total paid GitHub Actions minutes used.
 * @member {Number} total_paid_minutes_used
 */

ActionsBillingUsage.prototype['total_paid_minutes_used'] = undefined;
var _default = ActionsBillingUsage;
exports["default"] = _default;