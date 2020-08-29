"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _MarketplacePurchaseMarketplacePendingChange = _interopRequireDefault(require("./MarketplacePurchaseMarketplacePendingChange"));

var _MarketplacePurchaseMarketplacePurchase = _interopRequireDefault(require("./MarketplacePurchaseMarketplacePurchase"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The MarketplacePurchase model module.
 * @module model/MarketplacePurchase
 * @version 0.0.5
 */
var MarketplacePurchase = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>MarketplacePurchase</code>.
   * Marketplace Purchase
   * @alias module:model/MarketplacePurchase
   * @param id {Number} 
   * @param login {String} 
   * @param marketplacePurchase {module:model/MarketplacePurchaseMarketplacePurchase} 
   * @param type {String} 
   * @param url {String} 
   */
  function MarketplacePurchase(id, login, marketplacePurchase, type, url) {
    _classCallCheck(this, MarketplacePurchase);

    MarketplacePurchase.initialize(this, id, login, marketplacePurchase, type, url);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(MarketplacePurchase, null, [{
    key: "initialize",
    value: function initialize(obj, id, login, marketplacePurchase, type, url) {
      obj['id'] = id;
      obj['login'] = login;
      obj['marketplace_purchase'] = marketplacePurchase;
      obj['type'] = type;
      obj['url'] = url;
    }
    /**
     * Constructs a <code>MarketplacePurchase</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MarketplacePurchase} obj Optional instance to populate.
     * @return {module:model/MarketplacePurchase} The populated <code>MarketplacePurchase</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new MarketplacePurchase();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('login')) {
          obj['login'] = _ApiClient["default"].convertToType(data['login'], 'String');
        }

        if (data.hasOwnProperty('marketplace_pending_change')) {
          obj['marketplace_pending_change'] = _MarketplacePurchaseMarketplacePendingChange["default"].constructFromObject(data['marketplace_pending_change']);
        }

        if (data.hasOwnProperty('marketplace_purchase')) {
          obj['marketplace_purchase'] = _MarketplacePurchaseMarketplacePurchase["default"].constructFromObject(data['marketplace_purchase']);
        }

        if (data.hasOwnProperty('organization_billing_email')) {
          obj['organization_billing_email'] = _ApiClient["default"].convertToType(data['organization_billing_email'], 'String');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return MarketplacePurchase;
}();
/**
 * @member {Number} id
 */


MarketplacePurchase.prototype['id'] = undefined;
/**
 * @member {String} login
 */

MarketplacePurchase.prototype['login'] = undefined;
/**
 * @member {module:model/MarketplacePurchaseMarketplacePendingChange} marketplace_pending_change
 */

MarketplacePurchase.prototype['marketplace_pending_change'] = undefined;
/**
 * @member {module:model/MarketplacePurchaseMarketplacePurchase} marketplace_purchase
 */

MarketplacePurchase.prototype['marketplace_purchase'] = undefined;
/**
 * @member {String} organization_billing_email
 */

MarketplacePurchase.prototype['organization_billing_email'] = undefined;
/**
 * @member {String} type
 */

MarketplacePurchase.prototype['type'] = undefined;
/**
 * @member {String} url
 */

MarketplacePurchase.prototype['url'] = undefined;
var _default = MarketplacePurchase;
exports["default"] = _default;