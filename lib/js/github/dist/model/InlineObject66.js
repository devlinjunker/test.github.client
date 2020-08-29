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
 * The InlineObject66 model module.
 * @module model/InlineObject66
 * @version 0.0.5
 */
var InlineObject66 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject66</code>.
   * @alias module:model/InlineObject66
   * @param content {String} The new blob's content.
   */
  function InlineObject66(content) {
    _classCallCheck(this, InlineObject66);

    InlineObject66.initialize(this, content);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject66, null, [{
    key: "initialize",
    value: function initialize(obj, content) {
      obj['content'] = content;
    }
    /**
     * Constructs a <code>InlineObject66</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject66} obj Optional instance to populate.
     * @return {module:model/InlineObject66} The populated <code>InlineObject66</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject66();

        if (data.hasOwnProperty('content')) {
          obj['content'] = _ApiClient["default"].convertToType(data['content'], 'String');
        }

        if (data.hasOwnProperty('encoding')) {
          obj['encoding'] = _ApiClient["default"].convertToType(data['encoding'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineObject66;
}();
/**
 * The new blob's content.
 * @member {String} content
 */


InlineObject66.prototype['content'] = undefined;
/**
 * The encoding used for `content`. Currently, `\"utf-8\"` and `\"base64\"` are supported.
 * @member {String} encoding
 * @default 'utf-8'
 */

InlineObject66.prototype['encoding'] = 'utf-8';
var _default = InlineObject66;
exports["default"] = _default;