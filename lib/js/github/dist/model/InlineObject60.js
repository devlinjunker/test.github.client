"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ReposOwnerRepoContentsPathAuthor = _interopRequireDefault(require("./ReposOwnerRepoContentsPathAuthor"));

var _ReposOwnerRepoContentsPathCommitter = _interopRequireDefault(require("./ReposOwnerRepoContentsPathCommitter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineObject60 model module.
 * @module model/InlineObject60
 * @version 0.0.5
 */
var InlineObject60 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject60</code>.
   * @alias module:model/InlineObject60
   * @param content {String} The new file content, using Base64 encoding.
   * @param message {String} The commit message.
   */
  function InlineObject60(content, message) {
    _classCallCheck(this, InlineObject60);

    InlineObject60.initialize(this, content, message);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject60, null, [{
    key: "initialize",
    value: function initialize(obj, content, message) {
      obj['content'] = content;
      obj['message'] = message;
    }
    /**
     * Constructs a <code>InlineObject60</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject60} obj Optional instance to populate.
     * @return {module:model/InlineObject60} The populated <code>InlineObject60</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject60();

        if (data.hasOwnProperty('author')) {
          obj['author'] = _ReposOwnerRepoContentsPathAuthor["default"].constructFromObject(data['author']);
        }

        if (data.hasOwnProperty('branch')) {
          obj['branch'] = _ApiClient["default"].convertToType(data['branch'], 'String');
        }

        if (data.hasOwnProperty('committer')) {
          obj['committer'] = _ReposOwnerRepoContentsPathCommitter["default"].constructFromObject(data['committer']);
        }

        if (data.hasOwnProperty('content')) {
          obj['content'] = _ApiClient["default"].convertToType(data['content'], 'String');
        }

        if (data.hasOwnProperty('message')) {
          obj['message'] = _ApiClient["default"].convertToType(data['message'], 'String');
        }

        if (data.hasOwnProperty('sha')) {
          obj['sha'] = _ApiClient["default"].convertToType(data['sha'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineObject60;
}();
/**
 * @member {module:model/ReposOwnerRepoContentsPathAuthor} author
 */


InlineObject60.prototype['author'] = undefined;
/**
 * The branch name. Default: the repository’s default branch (usually `master`)
 * @member {String} branch
 */

InlineObject60.prototype['branch'] = undefined;
/**
 * @member {module:model/ReposOwnerRepoContentsPathCommitter} committer
 */

InlineObject60.prototype['committer'] = undefined;
/**
 * The new file content, using Base64 encoding.
 * @member {String} content
 */

InlineObject60.prototype['content'] = undefined;
/**
 * The commit message.
 * @member {String} message
 */

InlineObject60.prototype['message'] = undefined;
/**
 * **Required if you are updating a file**. The blob SHA of the file being replaced.
 * @member {String} sha
 */

InlineObject60.prototype['sha'] = undefined;
var _default = InlineObject60;
exports["default"] = _default;