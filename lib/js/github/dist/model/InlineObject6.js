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
 * The InlineObject6 model module.
 * @module model/InlineObject6
 * @version 0.0.5
 */
var InlineObject6 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject6</code>.
   * @alias module:model/InlineObject6
   * @param clientSecret {String} The OAuth app client secret for which to create the token.
   */
  function InlineObject6(clientSecret) {
    _classCallCheck(this, InlineObject6);

    InlineObject6.initialize(this, clientSecret);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject6, null, [{
    key: "initialize",
    value: function initialize(obj, clientSecret) {
      obj['client_secret'] = clientSecret;
    }
    /**
     * Constructs a <code>InlineObject6</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject6} obj Optional instance to populate.
     * @return {module:model/InlineObject6} The populated <code>InlineObject6</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject6();

        if (data.hasOwnProperty('client_secret')) {
          obj['client_secret'] = _ApiClient["default"].convertToType(data['client_secret'], 'String');
        }

        if (data.hasOwnProperty('fingerprint')) {
          obj['fingerprint'] = _ApiClient["default"].convertToType(data['fingerprint'], 'String');
        }

        if (data.hasOwnProperty('note')) {
          obj['note'] = _ApiClient["default"].convertToType(data['note'], 'String');
        }

        if (data.hasOwnProperty('note_url')) {
          obj['note_url'] = _ApiClient["default"].convertToType(data['note_url'], 'String');
        }

        if (data.hasOwnProperty('scopes')) {
          obj['scopes'] = _ApiClient["default"].convertToType(data['scopes'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return InlineObject6;
}();
/**
 * The OAuth app client secret for which to create the token.
 * @member {String} client_secret
 */


InlineObject6.prototype['client_secret'] = undefined;
/**
 * A unique string to distinguish an authorization from others created for the same client ID and user.
 * @member {String} fingerprint
 */

InlineObject6.prototype['fingerprint'] = undefined;
/**
 * A note to remind you what the OAuth token is for.
 * @member {String} note
 */

InlineObject6.prototype['note'] = undefined;
/**
 * A URL to remind you what app the OAuth token is for.
 * @member {String} note_url
 */

InlineObject6.prototype['note_url'] = undefined;
/**
 * A list of scopes that this authorization is in.
 * @member {Array.<String>} scopes
 */

InlineObject6.prototype['scopes'] = undefined;
var _default = InlineObject6;
exports["default"] = _default;