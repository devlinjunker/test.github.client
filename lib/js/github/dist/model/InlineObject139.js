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
 * The InlineObject139 model module.
 * @module model/InlineObject139
 * @version 0.0.5
 */
var InlineObject139 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject139</code>.
   * @alias module:model/InlineObject139
   * @param armoredPublicKey {String} A GPG key in ASCII-armored format.
   */
  function InlineObject139(armoredPublicKey) {
    _classCallCheck(this, InlineObject139);

    InlineObject139.initialize(this, armoredPublicKey);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject139, null, [{
    key: "initialize",
    value: function initialize(obj, armoredPublicKey) {
      obj['armored_public_key'] = armoredPublicKey;
    }
    /**
     * Constructs a <code>InlineObject139</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject139} obj Optional instance to populate.
     * @return {module:model/InlineObject139} The populated <code>InlineObject139</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject139();

        if (data.hasOwnProperty('armored_public_key')) {
          obj['armored_public_key'] = _ApiClient["default"].convertToType(data['armored_public_key'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineObject139;
}();
/**
 * A GPG key in ASCII-armored format.
 * @member {String} armored_public_key
 */


InlineObject139.prototype['armored_public_key'] = undefined;
var _default = InlineObject139;
exports["default"] = _default;