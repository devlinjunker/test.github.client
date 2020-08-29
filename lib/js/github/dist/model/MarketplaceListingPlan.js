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
 * The MarketplaceListingPlan model module.
 * @module model/MarketplaceListingPlan
 * @version 0.0.5
 */
var MarketplaceListingPlan = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>MarketplaceListingPlan</code>.
   * Marketplace Listing Plan
   * @alias module:model/MarketplaceListingPlan
   * @param accountsUrl {String} 
   * @param bullets {Array.<String>} 
   * @param description {String} 
   * @param hasFreeTrial {Boolean} 
   * @param id {Number} 
   * @param monthlyPriceInCents {Number} 
   * @param name {String} 
   * @param _number {Number} 
   * @param priceModel {String} 
   * @param state {String} 
   * @param unitName {String} 
   * @param url {String} 
   * @param yearlyPriceInCents {Number} 
   */
  function MarketplaceListingPlan(accountsUrl, bullets, description, hasFreeTrial, id, monthlyPriceInCents, name, _number, priceModel, state, unitName, url, yearlyPriceInCents) {
    _classCallCheck(this, MarketplaceListingPlan);

    MarketplaceListingPlan.initialize(this, accountsUrl, bullets, description, hasFreeTrial, id, monthlyPriceInCents, name, _number, priceModel, state, unitName, url, yearlyPriceInCents);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(MarketplaceListingPlan, null, [{
    key: "initialize",
    value: function initialize(obj, accountsUrl, bullets, description, hasFreeTrial, id, monthlyPriceInCents, name, _number, priceModel, state, unitName, url, yearlyPriceInCents) {
      obj['accounts_url'] = accountsUrl;
      obj['bullets'] = bullets;
      obj['description'] = description;
      obj['has_free_trial'] = hasFreeTrial;
      obj['id'] = id;
      obj['monthly_price_in_cents'] = monthlyPriceInCents;
      obj['name'] = name;
      obj['number'] = _number;
      obj['price_model'] = priceModel;
      obj['state'] = state;
      obj['unit_name'] = unitName;
      obj['url'] = url;
      obj['yearly_price_in_cents'] = yearlyPriceInCents;
    }
    /**
     * Constructs a <code>MarketplaceListingPlan</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MarketplaceListingPlan} obj Optional instance to populate.
     * @return {module:model/MarketplaceListingPlan} The populated <code>MarketplaceListingPlan</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new MarketplaceListingPlan();

        if (data.hasOwnProperty('accounts_url')) {
          obj['accounts_url'] = _ApiClient["default"].convertToType(data['accounts_url'], 'String');
        }

        if (data.hasOwnProperty('bullets')) {
          obj['bullets'] = _ApiClient["default"].convertToType(data['bullets'], ['String']);
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('has_free_trial')) {
          obj['has_free_trial'] = _ApiClient["default"].convertToType(data['has_free_trial'], 'Boolean');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('monthly_price_in_cents')) {
          obj['monthly_price_in_cents'] = _ApiClient["default"].convertToType(data['monthly_price_in_cents'], 'Number');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('number')) {
          obj['number'] = _ApiClient["default"].convertToType(data['number'], 'Number');
        }

        if (data.hasOwnProperty('price_model')) {
          obj['price_model'] = _ApiClient["default"].convertToType(data['price_model'], 'String');
        }

        if (data.hasOwnProperty('state')) {
          obj['state'] = _ApiClient["default"].convertToType(data['state'], 'String');
        }

        if (data.hasOwnProperty('unit_name')) {
          obj['unit_name'] = _ApiClient["default"].convertToType(data['unit_name'], 'String');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }

        if (data.hasOwnProperty('yearly_price_in_cents')) {
          obj['yearly_price_in_cents'] = _ApiClient["default"].convertToType(data['yearly_price_in_cents'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return MarketplaceListingPlan;
}();
/**
 * @member {String} accounts_url
 */


MarketplaceListingPlan.prototype['accounts_url'] = undefined;
/**
 * @member {Array.<String>} bullets
 */

MarketplaceListingPlan.prototype['bullets'] = undefined;
/**
 * @member {String} description
 */

MarketplaceListingPlan.prototype['description'] = undefined;
/**
 * @member {Boolean} has_free_trial
 */

MarketplaceListingPlan.prototype['has_free_trial'] = undefined;
/**
 * @member {Number} id
 */

MarketplaceListingPlan.prototype['id'] = undefined;
/**
 * @member {Number} monthly_price_in_cents
 */

MarketplaceListingPlan.prototype['monthly_price_in_cents'] = undefined;
/**
 * @member {String} name
 */

MarketplaceListingPlan.prototype['name'] = undefined;
/**
 * @member {Number} number
 */

MarketplaceListingPlan.prototype['number'] = undefined;
/**
 * @member {String} price_model
 */

MarketplaceListingPlan.prototype['price_model'] = undefined;
/**
 * @member {String} state
 */

MarketplaceListingPlan.prototype['state'] = undefined;
/**
 * @member {String} unit_name
 */

MarketplaceListingPlan.prototype['unit_name'] = undefined;
/**
 * @member {String} url
 */

MarketplaceListingPlan.prototype['url'] = undefined;
/**
 * @member {Number} yearly_price_in_cents
 */

MarketplaceListingPlan.prototype['yearly_price_in_cents'] = undefined;
var _default = MarketplaceListingPlan;
exports["default"] = _default;