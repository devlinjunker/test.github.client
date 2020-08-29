"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CommitCommitTree = _interopRequireDefault(require("./CommitCommitTree"));

var _GitUser = _interopRequireDefault(require("./GitUser"));

var _Verification = _interopRequireDefault(require("./Verification"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CommitCommit model module.
 * @module model/CommitCommit
 * @version 0.0.5
 */
var CommitCommit = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CommitCommit</code>.
   * @alias module:model/CommitCommit
   * @param author {module:model/GitUser} 
   * @param commentCount {Number} 
   * @param committer {module:model/GitUser} 
   * @param message {String} 
   * @param tree {module:model/CommitCommitTree} 
   * @param url {String} 
   */
  function CommitCommit(author, commentCount, committer, message, tree, url) {
    _classCallCheck(this, CommitCommit);

    CommitCommit.initialize(this, author, commentCount, committer, message, tree, url);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CommitCommit, null, [{
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
     * Constructs a <code>CommitCommit</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CommitCommit} obj Optional instance to populate.
     * @return {module:model/CommitCommit} The populated <code>CommitCommit</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CommitCommit();

        if (data.hasOwnProperty('author')) {
          obj['author'] = _ApiClient["default"].convertToType(data['author'], _GitUser["default"]);
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
          obj['tree'] = _CommitCommitTree["default"].constructFromObject(data['tree']);
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

  return CommitCommit;
}();
/**
 * @member {module:model/GitUser} author
 */


CommitCommit.prototype['author'] = undefined;
/**
 * @member {Number} comment_count
 */

CommitCommit.prototype['comment_count'] = undefined;
/**
 * @member {module:model/GitUser} committer
 */

CommitCommit.prototype['committer'] = undefined;
/**
 * @member {String} message
 */

CommitCommit.prototype['message'] = undefined;
/**
 * @member {module:model/CommitCommitTree} tree
 */

CommitCommit.prototype['tree'] = undefined;
/**
 * @member {String} url
 */

CommitCommit.prototype['url'] = undefined;
/**
 * @member {module:model/Verification} verification
 */

CommitCommit.prototype['verification'] = undefined;
var _default = CommitCommit;
exports["default"] = _default;