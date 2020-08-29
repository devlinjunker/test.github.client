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
 * The InlineObject31 model module.
 * @module model/InlineObject31
 * @version 0.0.5
 */
var InlineObject31 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject31</code>.
   * @alias module:model/InlineObject31
   * @param body {String} The discussion comment's body text.
   */
  function InlineObject31(body) {
    _classCallCheck(this, InlineObject31);

    InlineObject31.initialize(this, body);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject31, null, [{
    key: "initialize",
    value: function initialize(obj, body) {
      obj['body'] = body;
    }
    /**
     * Constructs a <code>InlineObject31</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject31} obj Optional instance to populate.
     * @return {module:model/InlineObject31} The populated <code>InlineObject31</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject31();

        if (data.hasOwnProperty('body')) {
          obj['body'] = _ApiClient["default"].convertToType(data['body'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineObject31;
}();
/**
 * The discussion comment's body text.
 * @member {String} body
 */


InlineObject31.prototype['body'] = undefined;
var _default = InlineObject31;
exports["default"] = _default;