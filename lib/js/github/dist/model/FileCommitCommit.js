"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BranchShortCommit = _interopRequireDefault(require("./BranchShortCommit"));

var _CommitSearchResultItemParents = _interopRequireDefault(require("./CommitSearchResultItemParents"));

var _FileCommitCommitAuthor = _interopRequireDefault(require("./FileCommitCommitAuthor"));

var _FileCommitCommitVerification = _interopRequireDefault(require("./FileCommitCommitVerification"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The FileCommitCommit model module.
 * @module model/FileCommitCommit
 * @version 0.0.5
 */
var FileCommitCommit = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>FileCommitCommit</code>.
   * @alias module:model/FileCommitCommit
   */
  function FileCommitCommit() {
    _classCallCheck(this, FileCommitCommit);

    FileCommitCommit.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(FileCommitCommit, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>FileCommitCommit</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FileCommitCommit} obj Optional instance to populate.
     * @return {module:model/FileCommitCommit} The populated <code>FileCommitCommit</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new FileCommitCommit();

        if (data.hasOwnProperty('author')) {
          obj['author'] = _FileCommitCommitAuthor["default"].constructFromObject(data['author']);
        }

        if (data.hasOwnProperty('committer')) {
          obj['committer'] = _FileCommitCommitAuthor["default"].constructFromObject(data['committer']);
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
          obj['parents'] = _ApiClient["default"].convertToType(data['parents'], [_CommitSearchResultItemParents["default"]]);
        }

        if (data.hasOwnProperty('sha')) {
          obj['sha'] = _ApiClient["default"].convertToType(data['sha'], 'String');
        }

        if (data.hasOwnProperty('tree')) {
          obj['tree'] = _BranchShortCommit["default"].constructFromObject(data['tree']);
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

  return FileCommitCommit;
}();
/**
 * @member {module:model/FileCommitCommitAuthor} author
 */


FileCommitCommit.prototype['author'] = undefined;
/**
 * @member {module:model/FileCommitCommitAuthor} committer
 */

FileCommitCommit.prototype['committer'] = undefined;
/**
 * @member {String} html_url
 */

FileCommitCommit.prototype['html_url'] = undefined;
/**
 * @member {String} message
 */

FileCommitCommit.prototype['message'] = undefined;
/**
 * @member {String} node_id
 */

FileCommitCommit.prototype['node_id'] = undefined;
/**
 * @member {Array.<module:model/CommitSearchResultItemParents>} parents
 */

FileCommitCommit.prototype['parents'] = undefined;
/**
 * @member {String} sha
 */

FileCommitCommit.prototype['sha'] = undefined;
/**
 * @member {module:model/BranchShortCommit} tree
 */

FileCommitCommit.prototype['tree'] = undefined;
/**
 * @member {String} url
 */

FileCommitCommit.prototype['url'] = undefined;
/**
 * @member {module:model/FileCommitCommitVerification} verification
 */

FileCommitCommit.prototype['verification'] = undefined;
var _default = FileCommitCommit;
exports["default"] = _default;