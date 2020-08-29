"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CommitSearchResultItemCommitAuthor = _interopRequireDefault(require("./CommitSearchResultItemCommitAuthor"));

var _CommitSearchResultItemCommitTree = _interopRequireDefault(require("./CommitSearchResultItemCommitTree"));

var _GitUser = _interopRequireDefault(require("./GitUser"));

var _Verification = _interopRequireDefault(require("./Verification"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CommitSearchResultItemCommit model module.
 * @module model/CommitSearchResultItemCommit
 * @version 0.0.5
 */
var CommitSearchResultItemCommit = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CommitSearchResultItemCommit</code>.
   * @alias module:model/CommitSearchResultItemCommit
   * @param author {module:model/CommitSearchResultItemCommitAuthor} 
   * @param commentCount {Number} 
   * @param committer {module:model/GitUser} 
   * @param message {String} 
   * @param tree {module:model/CommitSearchResultItemCommitTree} 
   * @param url {String} 
   */
  function CommitSearchResultItemCommit(author, commentCount, committer, message, tree, url) {
    _classCallCheck(this, CommitSearchResultItemCommit);

    CommitSearchResultItemCommit.initialize(this, author, commentCount, committer, message, tree, url);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CommitSearchResultItemCommit, null, [{
    key: "initialize",
    value: function initialize(obj, author, commentCount, committer, message, tree, url) {
      obj['author'] = author;
      obj['comment_count'] = commentCount;
      obj['committer'] = committer;
      obj['message'] = message;
      obj['tree'] = tree;
      obj['url'] = url;
    }
    /**
     * Constructs a <code>CommitSearchResultItemCommit</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CommitSearchResultItemCommit} obj Optional instance to populate.
     * @return {module:model/CommitSearchResultItemCommit} The populated <code>CommitSearchResultItemCommit</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CommitSearchResultItemCommit();

        if (data.hasOwnProperty('author')) {
          obj['author'] = _CommitSearchResultItemCommitAuthor["default"].constructFromObject(data['author']);
        }

        if (data.hasOwnProperty('comment_count')) {
          obj['comment_count'] = _ApiClient["default"].convertToType(data['comment_count'], 'Number');
        }

        if (data.hasOwnProperty('committer')) {
          obj['committer'] = _ApiClient["default"].convertToType(data['committer'], _GitUser["default"]);
        }

        if (data.hasOwnProperty('message')) {
          obj['message'] = _ApiClient["default"].convertToType(data['message'], 'String');
        }

        if (data.hasOwnProperty('tree')) {
          obj['tree'] = _CommitSearchResultItemCommitTree["default"].constructFromObject(data['tree']);
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }

        if (data.hasOwnProperty('verification')) {
          obj['verification'] = _Verification["default"].constructFromObject(data['verification']);
        }
      }

      return obj;
    }
  }]);

  return CommitSearchResultItemCommit;
}();
/**
 * @member {module:model/CommitSearchResultItemCommitAuthor} author
 */


CommitSearchResultItemCommit.prototype['author'] = undefined;
/**
 * @member {Number} comment_count
 */

CommitSearchResultItemCommit.prototype['comment_count'] = undefined;
/**
 * @member {module:model/GitUser} committer
 */

CommitSearchResultItemCommit.prototype['committer'] = undefined;
/**
 * @member {String} message
 */

CommitSearchResultItemCommit.prototype['message'] = undefined;
/**
 * @member {module:model/CommitSearchResultItemCommitTree} tree
 */

CommitSearchResultItemCommit.prototype['tree'] = undefined;
/**
 * @member {String} url
 */

CommitSearchResultItemCommit.prototype['url'] = undefined;
/**
 * @member {module:model/Verification} verification
 */

CommitSearchResultItemCommit.prototype['verification'] = undefined;
var _default = CommitSearchResultItemCommit;
exports["default"] = _default;