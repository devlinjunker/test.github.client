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
 * The Verification model module.
 * @module model/Verification
 * @version 0.0.5
 */
var Verification = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Verification</code>.
   * @alias module:model/Verification
   * @param payload {String} 
   * @param reason {String} 
   * @param signature {String} 
   * @param verified {Boolean} 
   */
  function Verification(payload, reason, signature, verified) {
    _classCallCheck(this, Verification);

    Verification.initialize(this, payload, reason, signature, verified);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Verification, null, [{
    key: "initialize",
    value: function initialize(obj, payload, reason, signature, verified) {
      obj['payload'] = payload;
      obj['reason'] = reason;
      obj['signature'] = signature;
      obj['verified'] = verified;
    }
    /**
     * Constructs a <code>Verification</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Verification} obj Optional instance to populate.
     * @return {module:model/Verification} The populated <code>Verification</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Verification();

        if (data.hasOwnProperty('payload')) {
          obj['payload'] = _ApiClient["default"].convertToType(data['payload'], 'String');
        }

        if (data.hasOwnProperty('reason')) {
          obj['reason'] = _ApiClient["default"].convertToType(data['reason'], 'String');
        }

        if (data.hasOwnProperty('signature')) {
          obj['signature'] = _ApiClient["default"].convertToType(data['signature'], 'String');
        }

        if (data.hasOwnProperty('verified')) {
          obj['verified'] = _ApiClient["default"].convertToType(data['verified'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return Verification;
}();
/**
 * @member {String} payload
 */


Verification.prototype['payload'] = undefined;
/**
 * @member {String} reason
 */

Verification.prototype['reason'] = undefined;
/**
 * @member {String} signature
 */

Verification.prototype['signature'] = undefined;
/**
 * @member {Boolean} verified
 */

Verification.prototype['verified'] = undefined;
var _default = Verification;
exports["default"] = _default;