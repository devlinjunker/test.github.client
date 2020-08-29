"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _EmailOneOf = _interopRequireDefault(require("./EmailOneOf"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Email model module.
 * @module model/Email
 * @version 0.0.5
 */
var Email = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Email</code>.
   * Email
   * @alias module:model/Email
   * @implements module:model/EmailOneOf
   * @param email {String} 
   * @param primary {Boolean} 
   * @param verified {Boolean} 
   * @param visibility {String} 
   */
  function Email(email, primary, verified, visibility) {
    _classCallCheck(this, Email);

    _EmailOneOf["default"].initialize(this, email, primary, verified, visibility);

    Email.initialize(this, email, primary, verified, visibility);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Email, null, [{
    key: "initialize",
    value: function initialize(obj, email, primary, verified, visibility) {}
    /**
     * Constructs a <code>Email</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Email} obj Optional instance to populate.
     * @return {module:model/Email} The populated <code>Email</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Email();

        _EmailOneOf["default"].constructFromObject(data, obj);
      }

      return obj;
    }
  }]);

  return Email;
}(); // Implement EmailOneOf interface:

/**
 * @member {String} email
 */


_EmailOneOf["default"].prototype['email'] = undefined;
/**
 * @member {Boolean} primary
 */

_EmailOneOf["default"].prototype['primary'] = undefined;
/**
 * @member {Boolean} verified
 */

_EmailOneOf["default"].prototype['verified'] = undefined;
/**
 * @member {String} visibility
 */

_EmailOneOf["default"].prototype['visibility'] = undefined;
var _default = Email;
exports["default"] = _default;