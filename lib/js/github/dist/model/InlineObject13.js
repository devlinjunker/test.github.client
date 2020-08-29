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
 * The InlineObject13 model module.
 * @module model/InlineObject13
 * @version 0.0.5
 */
var InlineObject13 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject13</code>.
   * @alias module:model/InlineObject13
   * @param text {String} The Markdown text to render in HTML.
   */
  function InlineObject13(text) {
    _classCallCheck(this, InlineObject13);

    InlineObject13.initialize(this, text);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject13, null, [{
    key: "initialize",
    value: function initialize(obj, text) {
      obj['text'] = text;
    }
    /**
     * Constructs a <code>InlineObject13</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject13} obj Optional instance to populate.
     * @return {module:model/InlineObject13} The populated <code>InlineObject13</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject13();

        if (data.hasOwnProperty('context')) {
          obj['context'] = _ApiClient["default"].convertToType(data['context'], 'String');
        }

        if (data.hasOwnProperty('mode')) {
          obj['mode'] = _ApiClient["default"].convertToType(data['mode'], 'String');
        }

        if (data.hasOwnProperty('text')) {
          obj['text'] = _ApiClient["default"].convertToType(data['text'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineObject13;
}();
/**
 * The repository context to use when creating references in `gfm` mode.
 * @member {String} context
 */


InlineObject13.prototype['context'] = undefined;
/**
 * The rendering mode.
 * @member {module:model/InlineObject13.ModeEnum} mode
 * @default 'markdown'
 */

InlineObject13.prototype['mode'] = 'markdown';
/**
 * The Markdown text to render in HTML.
 * @member {String} text
 */

InlineObject13.prototype['text'] = undefined;
/**
 * Allowed values for the <code>mode</code> property.
 * @enum {String}
 * @readonly
 */

InlineObject13['ModeEnum'] = {
  /**
   * value: "markdown"
   * @const
   */
  "markdown": "markdown",

  /**
   * value: "gfm"
   * @const
   */
  "gfm": "gfm"
};
var _default = InlineObject13;
exports["default"] = _default;