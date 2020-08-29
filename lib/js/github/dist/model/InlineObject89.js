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
 * The InlineObject89 model module.
 * @module model/InlineObject89
 * @version 0.0.5
 */
var InlineObject89 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject89</code>.
   * @alias module:model/InlineObject89
   */
  function InlineObject89() {
    _classCallCheck(this, InlineObject89);

    InlineObject89.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject89, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineObject89</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject89} obj Optional instance to populate.
     * @return {module:model/InlineObject89} The populated <code>InlineObject89</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject89();

        if (data.hasOwnProperty('lock_reason')) {
          obj['lock_reason'] = _ApiClient["default"].convertToType(data['lock_reason'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineObject89;
}();
/**
 * The reason for locking the issue or pull request conversation. Lock will fail if you don't use one of these reasons:   \\* `off-topic`   \\* `too heated`   \\* `resolved`   \\* `spam`
 * @member {module:model/InlineObject89.LockReasonEnum} lock_reason
 */


InlineObject89.prototype['lock_reason'] = undefined;
/**
 * Allowed values for the <code>lock_reason</code> property.
 * @enum {String}
 * @readonly
 */

InlineObject89['LockReasonEnum'] = {
  /**
   * value: "off-topic"
   * @const
   */
  "off-topic": "off-topic",

  /**
   * value: "too heated"
   * @const
   */
  "too heated": "too heated",

  /**
   * value: "resolved"
   * @const
   */
  "resolved": "resolved",

  /**
   * value: "spam"
   * @const
   */
  "spam": "spam"
};
var _default = InlineObject89;
exports["default"] = _default;