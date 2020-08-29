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
 * The MarketplaceAccount model module.
 * @module model/MarketplaceAccount
 * @version 0.0.5
 */
var MarketplaceAccount = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>MarketplaceAccount</code>.
   * @alias module:model/MarketplaceAccount
   * @param id {Number} 
   * @param login {String} 
   * @param type {String} 
   * @param url {String} 
   */
  function MarketplaceAccount(id, login, type, url) {
    _classCallCheck(this, MarketplaceAccount);

    MarketplaceAccount.initialize(this, id, login, type, url);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(MarketplaceAccount, null, [{
    key: "initialize",
    value: function initialize(obj, id, login, type, url) {
      obj['id'] = id;
      obj['login'] = login;
      obj['type'] = type;
      obj['url'] = url;
    }
    /**
     * Constructs a <code>MarketplaceAccount</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MarketplaceAccount} obj Optional instance to populate.
     * @return {module:model/MarketplaceAccount} The populated <code>MarketplaceAccount</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new MarketplaceAccount();

        if (data.hasOwnProperty('email')) {
          obj['email'] = _ApiClient["default"].convertToType(data['email'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('login')) {
          obj['login'] = _ApiClient["default"].convertToType(data['login'], 'String');
        }

        if (data.hasOwnProperty('node_id')) {
          obj['node_id'] = _ApiClient["default"].convertToType(data['node_id'], 'String');
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

  return MarketplaceAccount;
}();
/**
 * @member {String} email
 */


MarketplaceAccount.prototype['email'] = undefined;
/**
 * @member {Number} id
 */

MarketplaceAccount.prototype['id'] = undefined;
/**
 * @member {String} login
 */

MarketplaceAccount.prototype['login'] = undefined;
/**
 * @member {String} node_id
 */

MarketplaceAccount.prototype['node_id'] = undefined;
/**
 * @member {String} organization_billing_email
 */

MarketplaceAccount.prototype['organization_billing_email'] = undefined;
/**
 * @member {String} type
 */

MarketplaceAccount.prototype['type'] = undefined;
/**
 * @member {String} url
 */

MarketplaceAccount.prototype['url'] = undefined;
var _default = MarketplaceAccount;
exports["default"] = _default;