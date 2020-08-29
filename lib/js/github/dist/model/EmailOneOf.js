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
 * The EmailOneOf model module.
 * @module model/EmailOneOf
 * @version 0.0.5
 */
var EmailOneOf = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EmailOneOf</code>.
   * @alias module:model/EmailOneOf
   * @param email {String} 
   * @param primary {Boolean} 
   * @param verified {Boolean} 
   * @param visibility {String} 
   */
  function EmailOneOf(email, primary, verified, visibility) {
    _classCallCheck(this, EmailOneOf);

    EmailOneOf.initialize(this, email, primary, verified, visibility);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EmailOneOf, null, [{
    key: "initialize",
    value: function initialize(obj, email, primary, verified, visibility) {
      obj['email'] = email;
      obj['primary'] = primary;
      obj['verified'] = verified;
      obj['visibility'] = visibility;
    }
    /**
     * Constructs a <code>EmailOneOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EmailOneOf} obj Optional instance to populate.
     * @return {module:model/EmailOneOf} The populated <code>EmailOneOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EmailOneOf();

        if (data.hasOwnProperty('email')) {
          obj['email'] = _ApiClient["default"].convertToType(data['email'], 'String');
        }

        if (data.hasOwnProperty('primary')) {
          obj['primary'] = _ApiClient["default"].convertToType(data['primary'], 'Boolean');
        }

        if (data.hasOwnProperty('verified')) {
          obj['verified'] = _ApiClient["default"].convertToType(data['verified'], 'Boolean');
        }

        if (data.hasOwnProperty('visibility')) {
          obj['visibility'] = _ApiClient["default"].convertToType(data['visibility'], 'String');
        }
      }

      return obj;
    }
  }]);

  return EmailOneOf;
}();
/**
 * @member {String} email
 */


EmailOneOf.prototype['email'] = undefined;
/**
 * @member {Boolean} primary
 */

EmailOneOf.prototype['primary'] = undefined;
/**
 * @member {Boolean} verified
 */

EmailOneOf.prototype['verified'] = undefined;
/**
 * @member {String} visibility
 */

EmailOneOf.prototype['visibility'] = undefined;
var _default = EmailOneOf;
exports["default"] = _default;