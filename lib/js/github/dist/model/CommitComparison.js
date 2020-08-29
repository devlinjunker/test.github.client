"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Commit = _interopRequireDefault(require("./Commit"));

var _DiffEntry = _interopRequireDefault(require("./DiffEntry"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CommitComparison model module.
 * @module model/CommitComparison
 * @version 0.0.5
 */
var CommitComparison = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CommitComparison</code>.
   * Commit Comparison
   * @alias module:model/CommitComparison
   * @param aheadBy {Number} 
   * @param baseCommit {module:model/Commit} 
   * @param behindBy {Number} 
   * @param commits {Array.<module:model/Commit>} 
   * @param diffUrl {String} 
   * @param files {Array.<module:model/DiffEntry>} 
   * @param htmlUrl {String} 
   * @param mergeBaseCommit {module:model/Commit} 
   * @param patchUrl {String} 
   * @param permalinkUrl {String} 
   * @param status {module:model/CommitComparison.StatusEnum} 
   * @param totalCommits {Number} 
   * @param url {String} 
   */
  function CommitComparison(aheadBy, baseCommit, behindBy, commits, diffUrl, files, htmlUrl, mergeBaseCommit, patchUrl, permalinkUrl, status, totalCommits, url) {
    _classCallCheck(this, CommitComparison);

    CommitComparison.initialize(this, aheadBy, baseCommit, behindBy, commits, diffUrl, files, htmlUrl, mergeBaseCommit, patchUrl, permalinkUrl, status, totalCommits, url);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CommitComparison, null, [{
    key: "initialize",
    value: function initialize(obj, aheadBy, baseCommit, behindBy, commits, diffUrl, files, htmlUrl, mergeBaseCommit, patchUrl, permalinkUrl, status, totalCommits, url) {
      obj['ahead_by'] = aheadBy;
      obj['base_commit'] = baseCommit;
      obj['behind_by'] = behindBy;
      obj['commits'] = commits;
      obj['diff_url'] = diffUrl;
      obj['files'] = files;
      obj['html_url'] = htmlUrl;
      obj['merge_base_commit'] = mergeBaseCommit;
      obj['patch_url'] = patchUrl;
      obj['permalink_url'] = permalinkUrl;
      obj['status'] = status;
      obj['total_commits'] = totalCommits;
      obj['url'] = url;
    }
    /**
     * Constructs a <code>CommitComparison</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CommitComparison} obj Optional instance to populate.
     * @return {module:model/CommitComparison} The populated <code>CommitComparison</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CommitComparison();

        if (data.hasOwnProperty('ahead_by')) {
          obj['ahead_by'] = _ApiClient["default"].convertToType(data['ahead_by'], 'Number');
        }

        if (data.hasOwnProperty('base_commit')) {
          obj['base_commit'] = _Commit["default"].constructFromObject(data['base_commit']);
        }

        if (data.hasOwnProperty('behind_by')) {
          obj['behind_by'] = _ApiClient["default"].convertToType(data['behind_by'], 'Number');
        }

        if (data.hasOwnProperty('commits')) {
          obj['commits'] = _ApiClient["default"].convertToType(data['commits'], [_Commit["default"]]);
        }

        if (data.hasOwnProperty('diff_url')) {
          obj['diff_url'] = _ApiClient["default"].convertToType(data['diff_url'], 'String');
        }

        if (data.hasOwnProperty('files')) {
          obj['files'] = _ApiClient["default"].convertToType(data['files'], [_DiffEntry["default"]]);
        }

        if (data.hasOwnProperty('html_url')) {
          obj['html_url'] = _ApiClient["default"].convertToType(data['html_url'], 'String');
        }

        if (data.hasOwnProperty('merge_base_commit')) {
          obj['merge_base_commit'] = _Commit["default"].constructFromObject(data['merge_base_commit']);
        }

        if (data.hasOwnProperty('patch_url')) {
          obj['patch_url'] = _ApiClient["default"].convertToType(data['patch_url'], 'String');
        }

        if (data.hasOwnProperty('permalink_url')) {
          obj['permalink_url'] = _ApiClient["default"].convertToType(data['permalink_url'], 'String');
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }

        if (data.hasOwnProperty('total_commits')) {
          obj['total_commits'] = _ApiClient["default"].convertToType(data['total_commits'], 'Number');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CommitComparison;
}();
/**
 * @member {Number} ahead_by
 */


CommitComparison.prototype['ahead_by'] = undefined;
/**
 * @member {module:model/Commit} base_commit
 */

CommitComparison.prototype['base_commit'] = undefined;
/**
 * @member {Number} behind_by
 */

CommitComparison.prototype['behind_by'] = undefined;
/**
 * @member {Array.<module:model/Commit>} commits
 */

CommitComparison.prototype['commits'] = undefined;
/**
 * @member {String} diff_url
 */

CommitComparison.prototype['diff_url'] = undefined;
/**
 * @member {Array.<module:model/DiffEntry>} files
 */

CommitComparison.prototype['files'] = undefined;
/**
 * @member {String} html_url
 */

CommitComparison.prototype['html_url'] = undefined;
/**
 * @member {module:model/Commit} merge_base_commit
 */

CommitComparison.prototype['merge_base_commit'] = undefined;
/**
 * @member {String} patch_url
 */

CommitComparison.prototype['patch_url'] = undefined;
/**
 * @member {String} permalink_url
 */

CommitComparison.prototype['permalink_url'] = undefined;
/**
 * @member {module:model/CommitComparison.StatusEnum} status
 */

CommitComparison.prototype['status'] = undefined;
/**
 * @member {Number} total_commits
 */

CommitComparison.prototype['total_commits'] = undefined;
/**
 * @member {String} url
 */

CommitComparison.prototype['url'] = undefined;
/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */

CommitComparison['StatusEnum'] = {
  /**
   * value: "diverged"
   * @const
   */
  "diverged": "diverged",

  /**
   * value: "ahead"
   * @const
   */
  "ahead": "ahead",

  /**
   * value: "behind"
   * @const
   */
  "behind": "behind",

  /**
   * value: "identical"
   * @const
   */
  "identical": "identical"
};
var _default = CommitComparison;
exports["default"] = _default;