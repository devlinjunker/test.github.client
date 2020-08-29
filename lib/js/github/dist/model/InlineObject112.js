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
 * The InlineObject112 model module.
 * @module model/InlineObject112
 * @version 0.0.5
 */
var InlineObject112 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject112</code>.
   * @alias module:model/InlineObject112
   * @param message {String} The message for the pull request review dismissal
   */
  function InlineObject112(message) {
    _classCallCheck(this, InlineObject112);

    InlineObject112.initialize(this, message);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject112, null, [{
    key: "initialize",
    value: function initialize(obj, message) {
      obj['message'] = message;
    }
    /**
     * Constructs a <code>InlineObject112</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject112} obj Optional instance to populate.
     * @return {module:model/InlineObject112} The populated <code>InlineObject112</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject112();

        if (data.hasOwnProperty('event')) {
          obj['event'] = _ApiClient["default"].convertToType(data['event'], 'String');
        }

        if (data.hasOwnProperty('message')) {
          obj['message'] = _ApiClient["default"].convertToType(data['message'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineObject112;
}();
/**
 * @member {String} event
 */


InlineObject112.prototype['event'] = undefined;
/**
 * The message for the pull request review dismissal
 * @member {String} message
 */

InlineObject112.prototype['message'] = undefined;
var _default = InlineObject112;
exports["default"] = _default;