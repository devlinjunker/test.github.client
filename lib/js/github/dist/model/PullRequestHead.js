"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PullRequestBaseRepoOwner = _interopRequireDefault(require("./PullRequestBaseRepoOwner"));

var _PullRequestHeadRepo = _interopRequireDefault(require("./PullRequestHeadRepo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PullRequestHead model module.
 * @module model/PullRequestHead
 * @version 0.0.5
 */
var PullRequestHead = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PullRequestHead</code>.
   * @alias module:model/PullRequestHead
   * @param label {String} 
   * @param ref {String} 
   * @param repo {module:model/PullRequestHeadRepo} 
   * @param sha {String} 
   * @param user {module:model/PullRequestBaseRepoOwner} 
   */
  function PullRequestHead(label, ref, repo, sha, user) {
    _classCallCheck(this, PullRequestHead);

    PullRequestHead.initialize(this, label, ref, repo, sha, user);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PullRequestHead, null, [{
    key: "initialize",
    value: function initialize(obj, label, ref, repo, sha, user) {
      obj['label'] = label;
      obj['ref'] = ref;
      obj['repo'] = repo;
      obj['sha'] = sha;
      obj['user'] = user;
    }
    /**
     * Constructs a <code>PullRequestHead</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PullRequestHead} obj Optional instance to populate.
     * @return {module:model/PullRequestHead} The populated <code>PullRequestHead</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PullRequestHead();

        if (data.hasOwnProperty('label')) {
          obj['label'] = _ApiClient["default"].convertToType(data['label'], 'String');
        }

        if (data.hasOwnProperty('ref')) {
          obj['ref'] = _ApiClient["default"].convertToType(data['ref'], 'String');
        }

        if (data.hasOwnProperty('repo')) {
          obj['repo'] = _PullRequestHeadRepo["default"].constructFromObject(data['repo']);
        }

        if (data.hasOwnProperty('sha')) {
          obj['sha'] = _ApiClient["default"].convertToType(data['sha'], 'String');
        }

        if (data.hasOwnProperty('user')) {
          obj['user'] = _PullRequestBaseRepoOwner["default"].constructFromObject(data['user']);
        }
      }

      return obj;
    }
  }]);

  return PullRequestHead;
}();
/**
 * @member {String} label
 */


PullRequestHead.prototype['label'] = undefined;
/**
 * @member {String} ref
 */

PullRequestHead.prototype['ref'] = undefined;
/**
 * @member {module:model/PullRequestHeadRepo} repo
 */

PullRequestHead.prototype['repo'] = undefined;
/**
 * @member {String} sha
 */

PullRequestHead.prototype['sha'] = undefined;
/**
 * @member {module:model/PullRequestBaseRepoOwner} user
 */

PullRequestHead.prototype['user'] = undefined;
var _default = PullRequestHead;
exports["default"] = _default;