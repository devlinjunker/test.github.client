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
 * The InlineObject130 model module.
 * @module model/InlineObject130
 * @version 0.0.5
 */
var InlineObject130 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject130</code>.
   * @alias module:model/InlineObject130
   * @param body {String} The discussion comment's body text.
   */
  function InlineObject130(body) {
    _classCallCheck(this, InlineObject130);

    InlineObject130.initialize(this, body);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject130, null, [{
    key: "initialize",
    value: function initialize(obj, body) {
      obj['body'] = body;
    }
    /**
     * Constructs a <code>InlineObject130</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject130} obj Optional instance to populate.
     * @return {module:model/InlineObject130} The populated <code>InlineObject130</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject130();

        if (data.hasOwnProperty('body')) {
          obj['body'] = _ApiClient["default"].convertToType(data['body'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineObject130;
}();
/**
 * The discussion comment's body text.
 * @member {String} body
 */


InlineObject130.prototype['body'] = undefined;
var _default = InlineObject130;
exports["default"] = _default;