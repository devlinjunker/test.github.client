"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _MarketplaceListingPlan = _interopRequireDefault(require("./MarketplaceListingPlan"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The MarketplacePurchaseMarketplacePurchase model module.
 * @module model/MarketplacePurchaseMarketplacePurchase
 * @version 0.0.5
 */
var MarketplacePurchaseMarketplacePurchase = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>MarketplacePurchaseMarketplacePurchase</code>.
   * @alias module:model/MarketplacePurchaseMarketplacePurchase
   */
  function MarketplacePurchaseMarketplacePurchase() {
    _classCallCheck(this, MarketplacePurchaseMarketplacePurchase);

    MarketplacePurchaseMarketplacePurchase.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(MarketplacePurchaseMarketplacePurchase, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>MarketplacePurchaseMarketplacePurchase</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MarketplacePurchaseMarketplacePurchase} obj Optional instance to populate.
     * @return {module:model/MarketplacePurchaseMarketplacePurchase} The populated <code>MarketplacePurchaseMarketplacePurchase</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new MarketplacePurchaseMarketplacePurchase();

        if (data.hasOwnProperty('billing_cycle')) {
          obj['billing_cycle'] = _ApiClient["default"].convertToType(data['billing_cycle'], 'String');
        }

        if (data.hasOwnProperty('free_trial_ends_on')) {
          obj['free_trial_ends_on'] = _ApiClient["default"].convertToType(data['free_trial_ends_on'], 'String');
        }

        if (data.hasOwnProperty('is_installed')) {
          obj['is_installed'] = _ApiClient["default"].convertToType(data['is_installed'], 'Boolean');
        }

        if (data.hasOwnProperty('next_billing_date')) {
          obj['next_billing_date'] = _ApiClient["default"].convertToType(data['next_billing_date'], 'String');
        }

        if (data.hasOwnProperty('on_free_trial')) {
          obj['on_free_trial'] = _ApiClient["default"].convertToType(data['on_free_trial'], 'Boolean');
        }

        if (data.hasOwnProperty('plan')) {
          obj['plan'] = _MarketplaceListingPlan["default"].constructFromObject(data['plan']);
        }

        if (data.hasOwnProperty('unit_count')) {
          obj['unit_count'] = _ApiClient["default"].convertToType(data['unit_count'], 'Number');
        }

        if (data.hasOwnProperty('updated_at')) {
          obj['updated_at'] = _ApiClient["default"].convertToType(data['updated_at'], 'String');
        }
      }

      return obj;
    }
  }]);

  return MarketplacePurchaseMarketplacePurchase;
}();
/**
 * @member {String} billing_cycle
 */


MarketplacePurchaseMarketplacePurchase.prototype['billing_cycle'] = undefined;
/**
 * @member {String} free_trial_ends_on
 */

MarketplacePurchaseMarketplacePurchase.prototype['free_trial_ends_on'] = undefined;
/**
 * @member {Boolean} is_installed
 */

MarketplacePurchaseMarketplacePurchase.prototype['is_installed'] = undefined;
/**
 * @member {String} next_billing_date
 */

MarketplacePurchaseMarketplacePurchase.prototype['next_billing_date'] = undefined;
/**
 * @member {Boolean} on_free_trial
 */

MarketplacePurchaseMarketplacePurchase.prototype['on_free_trial'] = undefined;
/**
 * @member {module:model/MarketplaceListingPlan} plan
 */

MarketplacePurchaseMarketplacePurchase.prototype['plan'] = undefined;
/**
 * @member {Number} unit_count
 */

MarketplacePurchaseMarketplacePurchase.prototype['unit_count'] = undefined;
/**
 * @member {String} updated_at
 */

MarketplacePurchaseMarketplacePurchase.prototype['updated_at'] = undefined;
var _default = MarketplacePurchaseMarketplacePurchase;
exports["default"] = _default;