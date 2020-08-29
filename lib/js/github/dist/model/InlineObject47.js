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
 * The InlineObject47 model module.
 * @module model/InlineObject47
 * @version 0.0.5
 */
var InlineObject47 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject47</code>.
   * @alias module:model/InlineObject47
   */
  function InlineObject47() {
    _classCallCheck(this, InlineObject47);

    InlineObject47.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject47, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineObject47</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject47} obj Optional instance to populate.
     * @return {module:model/InlineObject47} The populated <code>InlineObject47</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject47();

        if (data.hasOwnProperty('encrypted_value')) {
          obj['encrypted_value'] = _ApiClient["default"].convertToType(data['encrypted_value'], 'String');
        }

        if (data.hasOwnProperty('key_id')) {
          obj['key_id'] = _ApiClient["default"].convertToType(data['key_id'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineObject47;
}();
/**
 * Value for your secret, encrypted with [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages) using the public key retrieved from the [Get a repository public key](https://developer.github.com/v3/actions/secrets/#get-a-repository-public-key) endpoint.
 * @member {String} encrypted_value
 */


InlineObject47.prototype['encrypted_value'] = undefined;
/**
 * ID of the key you used to encrypt the secret.
 * @member {String} key_id
 */

InlineObject47.prototype['key_id'] = undefined;
var _default = InlineObject47;
exports["default"] = _default;