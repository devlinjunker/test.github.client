"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _MarketplaceAccount = _interopRequireDefault(require("./MarketplaceAccount"));

var _MarketplaceListingPlan = _interopRequireDefault(require("./MarketplaceListingPlan"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The UserMarketplacePurchase model module.
 * @module model/UserMarketplacePurchase
 * @version 0.0.5
 */
var UserMarketplacePurchase = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>UserMarketplacePurchase</code>.
   * User Marketplace Purchase
   * @alias module:model/UserMarketplacePurchase
   * @param account {module:model/MarketplaceAccount} 
   * @param billingCycle {String} 
   * @param freeTrialEndsOn {Date} 
   * @param nextBillingDate {Date} 
   * @param onFreeTrial {Boolean} 
   * @param plan {module:model/MarketplaceListingPlan} 
   * @param unitCount {Number} 
   * @param updatedAt {Date} 
   */
  function UserMarketplacePurchase(account, billingCycle, freeTrialEndsOn, nextBillingDate, onFreeTrial, plan, unitCount, updatedAt) {
    _classCallCheck(this, UserMarketplacePurchase);

    UserMarketplacePurchase.initialize(this, account, billingCycle, freeTrialEndsOn, nextBillingDate, onFreeTrial, plan, unitCount, updatedAt);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(UserMarketplacePurchase, null, [{
    key: "initialize",
    value: function initialize(obj, account, billingCycle, freeTrialEndsOn, nextBillingDate, onFreeTrial, plan, unitCount, updatedAt) {
      obj['account'] = account;
      obj['billing_cycle'] = billingCycle;
      obj['free_trial_ends_on'] = freeTrialEndsOn;
      obj['next_billing_date'] = nextBillingDate;
      obj['on_free_trial'] = onFreeTrial;
      obj['plan'] = plan;
      obj['unit_count'] = unitCount;
      obj['updated_at'] = updatedAt;
    }
    /**
     * Constructs a <code>UserMarketplacePurchase</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UserMarketplacePurchase} obj Optional instance to populate.
     * @return {module:model/UserMarketplacePurchase} The populated <code>UserMarketplacePurchase</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new UserMarketplacePurchase();

        if (data.hasOwnProperty('account')) {
          obj['account'] = _MarketplaceAccount["default"].constructFromObject(data['account']);
        }

        if (data.hasOwnProperty('billing_cycle')) {
          obj['billing_cycle'] = _ApiClient["default"].convertToType(data['billing_cycle'], 'String');
        }

        if (data.hasOwnProperty('free_trial_ends_on')) {
          obj['free_trial_ends_on'] = _ApiClient["default"].convertToType(data['free_trial_ends_on'], 'Date');
        }

        if (data.hasOwnProperty('next_billing_date')) {
          obj['next_billing_date'] = _ApiClient["default"].convertToType(data['next_billing_date'], 'Date');
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
          obj['updated_at'] = _ApiClient["default"].convertToType(data['updated_at'], 'Date');
        }
      }

      return obj;
    }
  }]);

  return UserMarketplacePurchase;
}();
/**
 * @member {module:model/MarketplaceAccount} account
 */


UserMarketplacePurchase.prototype['account'] = undefined;
/**
 * @member {String} billing_cycle
 */

UserMarketplacePurchase.prototype['billing_cycle'] = undefined;
/**
 * @member {Date} free_trial_ends_on
 */

UserMarketplacePurchase.prototype['free_trial_ends_on'] = undefined;
/**
 * @member {Date} next_billing_date
 */

UserMarketplacePurchase.prototype['next_billing_date'] = undefined;
/**
 * @member {Boolean} on_free_trial
 */

UserMarketplacePurchase.prototype['on_free_trial'] = undefined;
/**
 * @member {module:model/MarketplaceListingPlan} plan
 */

UserMarketplacePurchase.prototype['plan'] = undefined;
/**
 * @member {Number} unit_count
 */

UserMarketplacePurchase.prototype['unit_count'] = undefined;
/**
 * @member {Date} updated_at
 */

UserMarketplacePurchase.prototype['updated_at'] = undefined;
var _default = UserMarketplacePurchase;
exports["default"] = _default;