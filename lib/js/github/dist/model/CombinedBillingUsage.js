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
 * The CombinedBillingUsage model module.
 * @module model/CombinedBillingUsage
 * @version 0.0.5
 */
var CombinedBillingUsage = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CombinedBillingUsage</code>.
   * @alias module:model/CombinedBillingUsage
   */
  function CombinedBillingUsage() {
    _classCallCheck(this, CombinedBillingUsage);

    CombinedBillingUsage.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CombinedBillingUsage, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CombinedBillingUsage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CombinedBillingUsage} obj Optional instance to populate.
     * @return {module:model/CombinedBillingUsage} The populated <code>CombinedBillingUsage</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CombinedBillingUsage();

        if (data.hasOwnProperty('days_left_in_billing_cycle')) {
          obj['days_left_in_billing_cycle'] = _ApiClient["default"].convertToType(data['days_left_in_billing_cycle'], 'Number');
        }

        if (data.hasOwnProperty('estimated_paid_storage_for_month')) {
          obj['estimated_paid_storage_for_month'] = _ApiClient["default"].convertToType(data['estimated_paid_storage_for_month'], 'Number');
        }

        if (data.hasOwnProperty('estimated_storage_for_month')) {
          obj['estimated_storage_for_month'] = _ApiClient["default"].convertToType(data['estimated_storage_for_month'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return CombinedBillingUsage;
}();
/**
 * Numbers of days left in billing cycle.
 * @member {Number} days_left_in_billing_cycle
 */


CombinedBillingUsage.prototype['days_left_in_billing_cycle'] = undefined;
/**
 * Estimated storage space (GB) used in billing cycle.
 * @member {Number} estimated_paid_storage_for_month
 */

CombinedBillingUsage.prototype['estimated_paid_storage_for_month'] = undefined;
/**
 * Estimated sum of free and paid storage space (GB) used in billing cycle.
 * @member {Number} estimated_storage_for_month
 */

CombinedBillingUsage.prototype['estimated_storage_for_month'] = undefined;
var _default = CombinedBillingUsage;
exports["default"] = _default;