"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CommitCommit = _interopRequireDefault(require("./CommitCommit"));

var _CommitFiles = _interopRequireDefault(require("./CommitFiles"));

var _CommitParents = _interopRequireDefault(require("./CommitParents"));

var _CommitStats = _interopRequireDefault(require("./CommitStats"));

var _SimpleUser = _interopRequireDefault(require("./SimpleUser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Commit model module.
 * @module model/Commit
 * @version 0.0.5
 */
var Commit = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Commit</code>.
   * Commit
   * @alias module:model/Commit
   * @param author {module:model/SimpleUser} 
   * @param commentsUrl {String} 
   * @param commit {module:model/CommitCommit} 
   * @param committer {module:model/SimpleUser} 
   * @param htmlUrl {String} 
   * @param nodeId {String} 
   * @param parents {Array.<module:model/CommitParents>} 
   * @param sha {String} 
   * @param url {String} 
   */
  function Commit(author, commentsUrl, commit, committer, htmlUrl, nodeId, parents, sha, url) {
    _classCallCheck(this, Commit);

    Commit.initialize(this, author, commentsUrl, commit, committer, htmlUrl, nodeId, parents, sha, url);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Commit, null, [{
    key: "initialize",
    value: function initialize(obj, author, commentsUrl, commit, committer, htmlUrl, nodeId, parents, sha, url) {
      obj['author'] = author;
      obj['comments_url'] = commentsUrl;
      obj['commit'] = commit;
      obj['committer'] = committer;
      obj['html_url'] = htmlUrl;
      obj['node_id'] = nodeId;
      obj['parents'] = parents;
      obj['sha'] = sha;
      obj['url'] = url;
    }
    /**
     * Constructs a <code>Commit</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Commit} obj Optional instance to populate.
     * @return {module:model/Commit} The populated <code>Commit</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Commit();

        if (data.hasOwnProperty('author')) {
          obj['author'] = _ApiClient["default"].convertToType(data['author'], _SimpleUser["default"]);
        }

        if (data.hasOwnProperty('comments_url')) {
          obj['comments_url'] = _ApiClient["default"].convertToType(data['comments_url'], 'String');
        }

        if (data.hasOwnProperty('commit')) {
          obj['commit'] = _CommitCommit["default"].constructFromObject(data['commit']);
        }

        if (data.hasOwnProperty('committer')) {
          obj['committer'] = _ApiClient["default"].convertToType(data['committer'], _SimpleUser["default"]);
        }

        if (data.hasOwnProperty('files')) {
          obj['files'] = _ApiClient["default"].convertToType(data['files'], [_CommitFiles["default"]]);
        }

        if (data.hasOwnProperty('html_url')) {
          obj['html_url'] = _ApiClient["default"].convertToType(data['html_url'], 'String');
        }

        if (data.hasOwnProperty('node_id')) {
          obj['node_id'] = _ApiClient["default"].convertToType(data['node_id'], 'String');
        }

        if (data.hasOwnProperty('parents')) {
          obj['parents'] = _ApiClient["default"].convertToType(data['parents'], [_CommitParents["default"]]);
        }

        if (data.hasOwnProperty('sha')) {
          obj['sha'] = _ApiClient["default"].convertToType(data['sha'], 'String');
        }

        if (data.hasOwnProperty('stats')) {
          obj['stats'] = _CommitStats["default"].constructFromObject(data['stats']);
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Commit;
}();
/**
 * @member {module:model/SimpleUser} author
 */


Commit.prototype['author'] = undefined;
/**
 * @member {String} comments_url
 */

Commit.prototype['comments_url'] = undefined;
/**
 * @member {module:model/CommitCommit} commit
 */

Commit.prototype['commit'] = undefined;
/**
 * @member {module:model/SimpleUser} committer
 */

Commit.prototype['committer'] = undefined;
/**
 * @member {Array.<module:model/CommitFiles>} files
 */

Commit.prototype['files'] = undefined;
/**
 * @member {String} html_url
 */

Commit.prototype['html_url'] = undefined;
/**
 * @member {String} node_id
 */

Commit.prototype['node_id'] = undefined;
/**
 * @member {Array.<module:model/CommitParents>} parents
 */

Commit.prototype['parents'] = undefined;
/**
 * @member {String} sha
 */

Commit.prototype['sha'] = undefined;
/**
 * @member {module:model/CommitStats} stats
 */

Commit.prototype['stats'] = undefined;
/**
 * @member {String} url
 */

Commit.prototype['url'] = undefined;
var _default = Commit;
exports["default"] = _default;