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
 * The ReposOwnerRepoGitCommitsCommitter model module.
 * @module model/ReposOwnerRepoGitCommitsCommitter
 * @version 0.0.5
 */
var ReposOwnerRepoGitCommitsCommitter = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ReposOwnerRepoGitCommitsCommitter</code>.
   * Information about the person who is making the commit. By default, &#x60;committer&#x60; will use the information set in &#x60;author&#x60;. See the &#x60;author&#x60; and &#x60;committer&#x60; object below for details.
   * @alias module:model/ReposOwnerRepoGitCommitsCommitter
   */
  function ReposOwnerRepoGitCommitsCommitter() {
    _classCallCheck(this, ReposOwnerRepoGitCommitsCommitter);

    ReposOwnerRepoGitCommitsCommitter.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ReposOwnerRepoGitCommitsCommitter, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ReposOwnerRepoGitCommitsCommitter</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReposOwnerRepoGitCommitsCommitter} obj Optional instance to populate.
     * @return {module:model/ReposOwnerRepoGitCommitsCommitter} The populated <code>ReposOwnerRepoGitCommitsCommitter</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ReposOwnerRepoGitCommitsCommitter();

        if (data.hasOwnProperty('date')) {
          obj['date'] = _ApiClient["default"].convertToType(data['date'], 'String');
        }

        if (data.hasOwnProperty('email')) {
          obj['email'] = _ApiClient["default"].convertToType(data['email'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ReposOwnerRepoGitCommitsCommitter;
}();
/**
 * Indicates when this commit was authored (or committed). This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
 * @member {String} date
 */


ReposOwnerRepoGitCommitsCommitter.prototype['date'] = undefined;
/**
 * The email of the author (or committer) of the commit
 * @member {String} email
 */

ReposOwnerRepoGitCommitsCommitter.prototype['email'] = undefined;
/**
 * The name of the author (or committer) of the commit
 * @member {String} name
 */

ReposOwnerRepoGitCommitsCommitter.prototype['name'] = undefined;
var _default = ReposOwnerRepoGitCommitsCommitter;
exports["default"] = _default;