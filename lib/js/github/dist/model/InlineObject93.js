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
 * The InlineObject93 model module.
 * @module model/InlineObject93
 * @version 0.0.5
 */
var InlineObject93 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject93</code>.
   * @alias module:model/InlineObject93
   */
  function InlineObject93() {
    _classCallCheck(this, InlineObject93);

    InlineObject93.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject93, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineObject93</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject93} obj Optional instance to populate.
     * @return {module:model/InlineObject93} The populated <code>InlineObject93</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject93();

        if (data.hasOwnProperty('color')) {
          obj['color'] = _ApiClient["default"].convertToType(data['color'], 'String');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('new_name')) {
          obj['new_name'] = _ApiClient["default"].convertToType(data['new_name'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineObject93;
}();
/**
 * The [hexadecimal color code](http://www.color-hex.com/) for the label, without the leading `#`.
 * @member {String} color
 */


InlineObject93.prototype['color'] = undefined;
/**
 * A short description of the label.
 * @member {String} description
 */

InlineObject93.prototype['description'] = undefined;
/**
 * The new name of the label. Emoji can be added to label names, using either native emoji or colon-style markup. For example, typing `:strawberry:` will render the emoji ![:strawberry:](https://github.githubassets.com/images/icons/emoji/unicode/1f353.png \":strawberry:\"). For a full list of available emoji and codes, see [emoji-cheat-sheet.com](http://emoji-cheat-sheet.com/).
 * @member {String} new_name
 */

InlineObject93.prototype['new_name'] = undefined;
var _default = InlineObject93;
exports["default"] = _default;