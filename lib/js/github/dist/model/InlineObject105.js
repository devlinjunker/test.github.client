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
 * The InlineObject105 model module.
 * @module model/InlineObject105
 * @version 0.0.5
 */
var InlineObject105 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject105</code>.
   * @alias module:model/InlineObject105
   * @param body {String} The text of the review comment.
   * @param path {String} The relative path to the file that necessitates a comment.
   */
  function InlineObject105(body, path) {
    _classCallCheck(this, InlineObject105);

    InlineObject105.initialize(this, body, path);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject105, null, [{
    key: "initialize",
    value: function initialize(obj, body, path) {
      obj['body'] = body;
      obj['path'] = path;
    }
    /**
     * Constructs a <code>InlineObject105</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject105} obj Optional instance to populate.
     * @return {module:model/InlineObject105} The populated <code>InlineObject105</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject105();

        if (data.hasOwnProperty('body')) {
          obj['body'] = _ApiClient["default"].convertToType(data['body'], 'String');
        }

        if (data.hasOwnProperty('commit_id')) {
          obj['commit_id'] = _ApiClient["default"].convertToType(data['commit_id'], 'String');
        }

        if (data.hasOwnProperty('in_reply_to')) {
          obj['in_reply_to'] = _ApiClient["default"].convertToType(data['in_reply_to'], 'Number');
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

        if (data.hasOwnProperty('side')) {
          obj['side'] = _ApiClient["default"].convertToType(data['side'], 'String');
        }

        if (data.hasOwnProperty('start_line')) {
          obj['start_line'] = _ApiClient["default"].convertToType(data['start_line'], 'Number');
        }

        if (data.hasOwnProperty('start_side')) {
          obj['start_side'] = _ApiClient["default"].convertToType(data['start_side'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineObject105;
}();
/**
 * The text of the review comment.
 * @member {String} body
 */


InlineObject105.prototype['body'] = undefined;
/**
 * The SHA of the commit needing a comment. Not using the latest commit SHA may render your comment outdated if a subsequent commit modifies the line you specify as the `position`.
 * @member {String} commit_id
 */

InlineObject105.prototype['commit_id'] = undefined;
/**
 * @member {Number} in_reply_to
 */

InlineObject105.prototype['in_reply_to'] = undefined;
/**
 * **Required with `comfort-fade` preview**. The line of the blob in the pull request diff that the comment applies to. For a multi-line comment, the last line of the range that your comment applies to.
 * @member {Number} line
 */

InlineObject105.prototype['line'] = undefined;
/**
 * The relative path to the file that necessitates a comment.
 * @member {String} path
 */

InlineObject105.prototype['path'] = undefined;
/**
 * **Required without `comfort-fade` preview**. The position in the diff where you want to add a review comment. Note this value is not the same as the line number in the file. For help finding the position value, read the note above.
 * @member {Number} position
 */

InlineObject105.prototype['position'] = undefined;
/**
 * **Required with `comfort-fade` preview**. In a split diff view, the side of the diff that the pull request's changes appear on. Can be `LEFT` or `RIGHT`. Use `LEFT` for deletions that appear in red. Use `RIGHT` for additions that appear in green or unchanged lines that appear in white and are shown for context. For a multi-line comment, side represents whether the last line of the comment range is a deletion or addition. For more information, see \"[Diff view options](https://help.github.com/en/articles/about-comparing-branches-in-pull-requests#diff-view-options)\" in the GitHub Help documentation.
 * @member {module:model/InlineObject105.SideEnum} side
 */

InlineObject105.prototype['side'] = undefined;
/**
 * **Required when using multi-line comments**. To create multi-line comments, you must use the `comfort-fade` preview header. The `start_line` is the first line in the pull request diff that your multi-line comment applies to. To learn more about multi-line comments, see \"[Commenting on a pull request](https://help.github.com/en/articles/commenting-on-a-pull-request#adding-line-comments-to-a-pull-request)\" in the GitHub Help documentation.
 * @member {Number} start_line
 */

InlineObject105.prototype['start_line'] = undefined;
/**
 * **Required when using multi-line comments**. To create multi-line comments, you must use the `comfort-fade` preview header. The `start_side` is the starting side of the diff that the comment applies to. Can be `LEFT` or `RIGHT`. To learn more about multi-line comments, see \"[Commenting on a pull request](https://help.github.com/en/articles/commenting-on-a-pull-request#adding-line-comments-to-a-pull-request)\" in the GitHub Help documentation. See `side` in this table for additional context.
 * @member {module:model/InlineObject105.StartSideEnum} start_side
 */

InlineObject105.prototype['start_side'] = undefined;
/**
 * Allowed values for the <code>side</code> property.
 * @enum {String}
 * @readonly
 */

InlineObject105['SideEnum'] = {
  /**
   * value: "LEFT"
   * @const
   */
  "LEFT": "LEFT",

  /**
   * value: "RIGHT"
   * @const
   */
  "RIGHT": "RIGHT"
};
/**
 * Allowed values for the <code>start_side</code> property.
 * @enum {String}
 * @readonly
 */

InlineObject105['StartSideEnum'] = {
  /**
   * value: "LEFT"
   * @const
   */
  "LEFT": "LEFT",

  /**
   * value: "RIGHT"
   * @const
   */
  "RIGHT": "RIGHT",

  /**
   * value: "side"
   * @const
   */
  "side": "side"
};
var _default = InlineObject105;
exports["default"] = _default;