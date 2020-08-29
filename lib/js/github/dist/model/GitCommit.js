"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _FileCommitCommitVerification = _interopRequireDefault(require("./FileCommitCommitVerification"));

var _GitCommitAuthor = _interopRequireDefault(require("./GitCommitAuthor"));

var _GitCommitParents = _interopRequireDefault(require("./GitCommitParents"));

var _GitCommitTree = _interopRequireDefault(require("./GitCommitTree"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The GitCommit model module.
 * @module model/GitCommit
 * @version 0.0.5
 */
var GitCommit = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GitCommit</code>.
   * Low-level Git commit operations within a repository
   * @alias module:model/GitCommit
   */
  function GitCommit() {
    _classCallCheck(this, GitCommit);

    GitCommit.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GitCommit, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>GitCommit</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GitCommit} obj Optional instance to populate.
     * @return {module:model/GitCommit} The populated <code>GitCommit</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GitCommit();

        if (data.hasOwnProperty('author')) {
          obj['author'] = _GitCommitAuthor["default"].constructFromObject(data['author']);
        }

        if (data.hasOwnProperty('committer')) {
          obj['committer'] = _GitCommitAuthor["default"].constructFromObject(data['committer']);
        }

        if (data.hasOwnProperty('html_url')) {
          obj['html_url'] = _ApiClient["default"].convertToType(data['html_url'], 'String');
        }

        if (data.hasOwnProperty('message')) {
          obj['message'] = _ApiClient["default"].convertToType(data['message'], 'String');
        }

        if (data.hasOwnProperty('node_id')) {
          obj['node_id'] = _ApiClient["default"].convertToType(data['node_id'], 'String');
        }

        if (data.hasOwnProperty('parents')) {
          obj['parents'] = _ApiClient["default"].convertToType(data['parents'], [_GitCommitParents["default"]]);
        }

        if (data.hasOwnProperty('sha')) {
          obj['sha'] = _ApiClient["default"].convertToType(data['sha'], 'String');
        }

        if (data.hasOwnProperty('tree')) {
          obj['tree'] = _GitCommitTree["default"].constructFromObject(data['tree']);
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }

        if (data.hasOwnProperty('verification')) {
          obj['verification'] = _FileCommitCommitVerification["default"].constructFromObject(data['verification']);
        }
      }

      return obj;
    }
  }]);

  return GitCommit;
}();
/**
 * @member {module:model/GitCommitAuthor} author
 */


GitCommit.prototype['author'] = undefined;
/**
 * @member {module:model/GitCommitAuthor} committer
 */

GitCommit.prototype['committer'] = undefined;
/**
 * @member {String} html_url
 */

GitCommit.prototype['html_url'] = undefined;
/**
 * Message describing the purpose of the commit
 * @member {String} message
 */

GitCommit.prototype['message'] = undefined;
/**
 * @member {String} node_id
 */

GitCommit.prototype['node_id'] = undefined;
/**
 * @member {Array.<module:model/GitCommitParents>} parents
 */

GitCommit.prototype['parents'] = undefined;
/**
 * SHA for the commit
 * @member {String} sha
 */

GitCommit.prototype['sha'] = undefined;
/**
 * @member {module:model/GitCommitTree} tree
 */

GitCommit.prototype['tree'] = undefined;
/**
 * @member {String} url
 */

GitCommit.prototype['url'] = undefined;
/**
 * @member {module:model/FileCommitCommitVerification} verification
 */

GitCommit.prototype['verification'] = undefined;
var _default = GitCommit;
exports["default"] = _default;