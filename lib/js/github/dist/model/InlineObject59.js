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
 * The InlineObject59 model module.
 * @module model/InlineObject59
 * @version 0.0.5
 */
var InlineObject59 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject59</code>.
   * @alias module:model/InlineObject59
   * @param body {String} The contents of the comment.
   */
  function InlineObject59(body) {
    _classCallCheck(this, InlineObject59);

    InlineObject59.initialize(this, body);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject59, null, [{
    key: "initialize",
    value: function initialize(obj, body) {
      obj['body'] = body;
    }
    /**
     * Constructs a <code>InlineObject59</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject59} obj Optional instance to populate.
     * @return {module:model/InlineObject59} The populated <code>InlineObject59</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject59();

        if (data.hasOwnProperty('body')) {
          obj['body'] = _ApiClient["default"].convertToType(data['body'], 'String');
        }

        if (data.hasOwnProperty('line')) {
          obj['line'] = _ApiClient["default"].convertToType(data['line'], 'Number');
        }

        if (data.hasOwnProperty('path')) {
          obj['path'] = _ApiClient["default"].convertToType(data['path'], 'String');
        }

        if (data.hasOwnProperty('position')) {
          obj['position'] = _ApiClient["default"].convertToType(data['position'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return InlineObject59;
}();
/**
 * The contents of the comment.
 * @member {String} body
 */


InlineObject59.prototype['body'] = undefined;
/**
 * **Deprecated**. Use **position** parameter instead. Line number in the file to comment on.
 * @member {Number} line
 */

InlineObject59.prototype['line'] = undefined;
/**
 * Relative path of the file to comment on.
 * @member {String} path
 */

InlineObject59.prototype['path'] = undefined;
/**
 * Line index in the diff to comment on.
 * @member {Number} position
 */

InlineObject59.prototype['position'] = undefined;
var _default = InlineObject59;
exports["default"] = _default;