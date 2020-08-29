"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ReposOwnerRepoGitCommitsAuthor = _interopRequireDefault(require("./ReposOwnerRepoGitCommitsAuthor"));

var _ReposOwnerRepoGitCommitsCommitter = _interopRequireDefault(require("./ReposOwnerRepoGitCommitsCommitter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineObject67 model module.
 * @module model/InlineObject67
 * @version 0.0.5
 */
var InlineObject67 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject67</code>.
   * @alias module:model/InlineObject67
   * @param message {String} The commit message
   * @param tree {String} The SHA of the tree object this commit points to
   */
  function InlineObject67(message, tree) {
    _classCallCheck(this, InlineObject67);

    InlineObject67.initialize(this, message, tree);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject67, null, [{
    key: "initialize",
    value: function initialize(obj, message, tree) {
      obj['message'] = message;
      obj['tree'] = tree;
    }
    /**
     * Constructs a <code>InlineObject67</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject67} obj Optional instance to populate.
     * @return {module:model/InlineObject67} The populated <code>InlineObject67</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject67();

        if (data.hasOwnProperty('author')) {
          obj['author'] = _ReposOwnerRepoGitCommitsAuthor["default"].constructFromObject(data['author']);
        }

        if (data.hasOwnProperty('committer')) {
          obj['committer'] = _ReposOwnerRepoGitCommitsCommitter["default"].constructFromObject(data['committer']);
        }

        if (data.hasOwnProperty('message')) {
          obj['message'] = _ApiClient["default"].convertToType(data['message'], 'String');
        }

        if (data.hasOwnProperty('parents')) {
          obj['parents'] = _ApiClient["default"].convertToType(data['parents'], ['String']);
        }

        if (data.hasOwnProperty('signature')) {
          obj['signature'] = _ApiClient["default"].convertToType(data['signature'], 'String');
        }

        if (data.hasOwnProperty('tree')) {
          obj['tree'] = _ApiClient["default"].convertToType(data['tree'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineObject67;
}();
/**
 * @member {module:model/ReposOwnerRepoGitCommitsAuthor} author
 */


InlineObject67.prototype['author'] = undefined;
/**
 * @member {module:model/ReposOwnerRepoGitCommitsCommitter} committer
 */

InlineObject67.prototype['committer'] = undefined;
/**
 * The commit message
 * @member {String} message
 */

InlineObject67.prototype['message'] = undefined;
/**
 * The SHAs of the commits that were the parents of this commit. If omitted or empty, the commit will be written as a root commit. For a single parent, an array of one SHA should be provided; for a merge commit, an array of more than one should be provided.
 * @member {Array.<String>} parents
 */

InlineObject67.prototype['parents'] = undefined;
/**
 * The [PGP signature](https://en.wikipedia.org/wiki/Pretty_Good_Privacy) of the commit. GitHub adds the signature to the `gpgsig` header of the created commit. For a commit signature to be verifiable by Git or GitHub, it must be an ASCII-armored detached PGP signature over the string commit as it would be written to the object database. To pass a `signature` parameter, you need to first manually create a valid PGP signature, which can be complicated. You may find it easier to [use the command line](https://git-scm.com/book/id/v2/Git-Tools-Signing-Your-Work) to create signed commits.
 * @member {String} signature
 */

InlineObject67.prototype['signature'] = undefined;
/**
 * The SHA of the tree object this commit points to
 * @member {String} tree
 */

InlineObject67.prototype['tree'] = undefined;
var _default = InlineObject67;
exports["default"] = _default;