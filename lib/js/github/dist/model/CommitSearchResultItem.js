"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CommitSearchResultItemCommit = _interopRequireDefault(require("./CommitSearchResultItemCommit"));

var _CommitSearchResultItemParents = _interopRequireDefault(require("./CommitSearchResultItemParents"));

var _GitUser = _interopRequireDefault(require("./GitUser"));

var _MinimalRepository = _interopRequireDefault(require("./MinimalRepository"));

var _SimpleUser = _interopRequireDefault(require("./SimpleUser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CommitSearchResultItem model module.
 * @module model/CommitSearchResultItem
 * @version 0.0.5
 */
var CommitSearchResultItem = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CommitSearchResultItem</code>.
   * Commit Search Result Item
   * @alias module:model/CommitSearchResultItem
   * @param author {module:model/SimpleUser} 
   * @param commentsUrl {String} 
   * @param commit {module:model/CommitSearchResultItemCommit} 
   * @param committer {module:model/GitUser} 
   * @param htmlUrl {String} 
   * @param nodeId {String} 
   * @param parents {Array.<module:model/CommitSearchResultItemParents>} 
   * @param repository {module:model/MinimalRepository} 
   * @param score {Number} 
   * @param sha {String} 
   * @param url {String} 
   */
  function CommitSearchResultItem(author, commentsUrl, commit, committer, htmlUrl, nodeId, parents, repository, score, sha, url) {
    _classCallCheck(this, CommitSearchResultItem);

    CommitSearchResultItem.initialize(this, author, commentsUrl, commit, committer, htmlUrl, nodeId, parents, repository, score, sha, url);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CommitSearchResultItem, null, [{
    key: "initialize",
    value: function initialize(obj, author, commentsUrl, commit, committer, htmlUrl, nodeId, parents, repository, score, sha, url) {
      obj['author'] = author;
      obj['comments_url'] = commentsUrl;
      obj['commit'] = commit;
      obj['committer'] = committer;
      obj['html_url'] = htmlUrl;
      obj['node_id'] = nodeId;
      obj['parents'] = parents;
      obj['repository'] = repository;
      obj['score'] = score;
      obj['sha'] = sha;
      obj['url'] = url;
    }
    /**
     * Constructs a <code>CommitSearchResultItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CommitSearchResultItem} obj Optional instance to populate.
     * @return {module:model/CommitSearchResultItem} The populated <code>CommitSearchResultItem</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CommitSearchResultItem();

        if (data.hasOwnProperty('author')) {
          obj['author'] = _ApiClient["default"].convertToType(data['author'], _SimpleUser["default"]);
        }

        if (data.hasOwnProperty('comments_url')) {
          obj['comments_url'] = _ApiClient["default"].convertToType(data['comments_url'], 'String');
        }

        if (data.hasOwnProperty('commit')) {
          obj['commit'] = _CommitSearchResultItemCommit["default"].constructFromObject(data['commit']);
        }

        if (data.hasOwnProperty('committer')) {
          obj['committer'] = _ApiClient["default"].convertToType(data['committer'], _GitUser["default"]);
        }

        if (data.hasOwnProperty('html_url')) {
          obj['html_url'] = _ApiClient["default"].convertToType(data['html_url'], 'String');
        }

        if (data.hasOwnProperty('node_id')) {
          obj['node_id'] = _ApiClient["default"].convertToType(data['node_id'], 'String');
        }

        if (data.hasOwnProperty('parents')) {
          obj['parents'] = _ApiClient["default"].convertToType(data['parents'], [_CommitSearchResultItemParents["default"]]);
        }

        if (data.hasOwnProperty('repository')) {
          obj['repository'] = _MinimalRepository["default"].constructFromObject(data['repository']);
        }

        if (data.hasOwnProperty('score')) {
          obj['score'] = _ApiClient["default"].convertToType(data['score'], 'Number');
        }

        if (data.hasOwnProperty('sha')) {
          obj['sha'] = _ApiClient["default"].convertToType(data['sha'], 'String');
        }

        if (data.hasOwnProperty('text_matches')) {
          obj['text_matches'] = _ApiClient["default"].convertToType(data['text_matches'], [Object]);
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CommitSearchResultItem;
}();
/**
 * @member {module:model/SimpleUser} author
 */


CommitSearchResultItem.prototype['author'] = undefined;
/**
 * @member {String} comments_url
 */

CommitSearchResultItem.prototype['comments_url'] = undefined;
/**
 * @member {module:model/CommitSearchResultItemCommit} commit
 */

CommitSearchResultItem.prototype['commit'] = undefined;
/**
 * @member {module:model/GitUser} committer
 */

CommitSearchResultItem.prototype['committer'] = undefined;
/**
 * @member {String} html_url
 */

CommitSearchResultItem.prototype['html_url'] = undefined;
/**
 * @member {String} node_id
 */

CommitSearchResultItem.prototype['node_id'] = undefined;
/**
 * @member {Array.<module:model/CommitSearchResultItemParents>} parents
 */

CommitSearchResultItem.prototype['parents'] = undefined;
/**
 * @member {module:model/MinimalRepository} repository
 */

CommitSearchResultItem.prototype['repository'] = undefined;
/**
 * @member {Number} score
 */

CommitSearchResultItem.prototype['score'] = undefined;
/**
 * @member {String} sha
 */

CommitSearchResultItem.prototype['sha'] = undefined;
/**
 * @member {Array.<Object>} text_matches
 */

CommitSearchResultItem.prototype['text_matches'] = undefined;
/**
 * @member {String} url
 */

CommitSearchResultItem.prototype['url'] = undefined;
var _default = CommitSearchResultItem;
exports["default"] = _default;