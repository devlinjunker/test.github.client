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
 * The InlineObject82 model module.
 * @module model/InlineObject82
 * @version 0.0.5
 */
var InlineObject82 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject82</code>.
   * @alias module:model/InlineObject82
   * @param content {module:model/InlineObject82.ContentEnum} The [reaction type](https://developer.github.com/v3/reactions/#reaction-types) to add to the issue comment.
   */
  function InlineObject82(content) {
    _classCallCheck(this, InlineObject82);

    InlineObject82.initialize(this, content);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject82, null, [{
    key: "initialize",
    value: function initialize(obj, content) {
      obj['content'] = content;
    }
    /**
     * Constructs a <code>InlineObject82</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject82} obj Optional instance to populate.
     * @return {module:model/InlineObject82} The populated <code>InlineObject82</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject82();

        if (data.hasOwnProperty('content')) {
          obj['content'] = _ApiClient["default"].convertToType(data['content'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineObject82;
}();
/**
 * The [reaction type](https://developer.github.com/v3/reactions/#reaction-types) to add to the issue comment.
 * @member {module:model/InlineObject82.ContentEnum} content
 */


InlineObject82.prototype['content'] = undefined;
/**
 * Allowed values for the <code>content</code> property.
 * @enum {String}
 * @readonly
 */

InlineObject82['ContentEnum'] = {
  /**
   * value: "+1"
   * @const
   */
  "+1": "+1",

  /**
   * value: "-1"
   * @const
   */
  "-1": "-1",

  /**
   * value: "laugh"
   * @const
   */
  "laugh": "laugh",

  /**
   * value: "confused"
   * @const
   */
  "confused": "confused",

  /**
   * value: "heart"
   * @const
   */
  "heart": "heart",

  /**
   * value: "hooray"
   * @const
   */
  "hooray": "hooray",

  /**
   * value: "rocket"
   * @const
   */
  "rocket": "rocket",

  /**
   * value: "eyes"
   * @const
   */
  "eyes": "eyes"
};
var _default = InlineObject82;
exports["default"] = _default;