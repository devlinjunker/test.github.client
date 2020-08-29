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
 * The MarketplacePurchaseMarketplacePendingChange model module.
 * @module model/MarketplacePurchaseMarketplacePendingChange
 * @version 0.0.5
 */
var MarketplacePurchaseMarketplacePendingChange = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>MarketplacePurchaseMarketplacePendingChange</code>.
   * @alias module:model/MarketplacePurchaseMarketplacePendingChange
   */
  function MarketplacePurchaseMarketplacePendingChange() {
    _classCallCheck(this, MarketplacePurchaseMarketplacePendingChange);

    MarketplacePurchaseMarketplacePendingChange.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(MarketplacePurchaseMarketplacePendingChange, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>MarketplacePurchaseMarketplacePendingChange</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MarketplacePurchaseMarketplacePendingChange} obj Optional instance to populate.
     * @return {module:model/MarketplacePurchaseMarketplacePendingChange} The populated <code>MarketplacePurchaseMarketplacePendingChange</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new MarketplacePurchaseMarketplacePendingChange();

        if (data.hasOwnProperty('effective_date')) {
          obj['effective_date'] = _ApiClient["default"].convertToType(data['effective_date'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('is_installed')) {
          obj['is_installed'] = _ApiClient["default"].convertToType(data['is_installed'], 'Boolean');
        }

        if (data.hasOwnProperty('plan')) {
          obj['plan'] = _MarketplaceListingPlan["default"].constructFromObject(data['plan']);
        }

        if (data.hasOwnProperty('unit_count')) {
          obj['unit_count'] = _ApiClient["default"].convertToType(data['unit_count'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return MarketplacePurchaseMarketplacePendingChange;
}();
/**
 * @member {String} effective_date
 */


MarketplacePurchaseMarketplacePendingChange.prototype['effective_date'] = undefined;
/**
 * @member {Number} id
 */

MarketplacePurchaseMarketplacePendingChange.prototype['id'] = undefined;
/**
 * @member {Boolean} is_installed
 */

MarketplacePurchaseMarketplacePendingChange.prototype['is_installed'] = undefined;
/**
 * @member {module:model/MarketplaceListingPlan} plan
 */

MarketplacePurchaseMarketplacePendingChange.prototype['plan'] = undefined;
/**
 * @member {Number} unit_count
 */

MarketplacePurchaseMarketplacePendingChange.prototype['unit_count'] = undefined;
var _default = MarketplacePurchaseMarketplacePendingChange;
exports["default"] = _default;