"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _MinimalRepository = _interopRequireDefault(require("./MinimalRepository"));

var _SimpleCommitStatus = _interopRequireDefault(require("./SimpleCommitStatus"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CombinedCommitStatus model module.
 * @module model/CombinedCommitStatus
 * @version 0.0.5
 */
var CombinedCommitStatus = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CombinedCommitStatus</code>.
   * Combined Commit Status
   * @alias module:model/CombinedCommitStatus
   * @param commitUrl {String} 
   * @param repository {module:model/MinimalRepository} 
   * @param sha {String} 
   * @param state {String} 
   * @param statuses {Array.<module:model/SimpleCommitStatus>} 
   * @param totalCount {Number} 
   * @param url {String} 
   */
  function CombinedCommitStatus(commitUrl, repository, sha, state, statuses, totalCount, url) {
    _classCallCheck(this, CombinedCommitStatus);

    CombinedCommitStatus.initialize(this, commitUrl, repository, sha, state, statuses, totalCount, url);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CombinedCommitStatus, null, [{
    key: "initialize",
    value: function initialize(obj, commitUrl, repository, sha, state, statuses, totalCount, url) {
      obj['commit_url'] = commitUrl;
      obj['repository'] = repository;
      obj['sha'] = sha;
      obj['state'] = state;
      obj['statuses'] = statuses;
      obj['total_count'] = totalCount;
      obj['url'] = url;
    }
    /**
     * Constructs a <code>CombinedCommitStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CombinedCommitStatus} obj Optional instance to populate.
     * @return {module:model/CombinedCommitStatus} The populated <code>CombinedCommitStatus</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CombinedCommitStatus();

        if (data.hasOwnProperty('commit_url')) {
          obj['commit_url'] = _ApiClient["default"].convertToType(data['commit_url'], 'String');
        }

        if (data.hasOwnProperty('repository')) {
          obj['repository'] = _MinimalRepository["default"].constructFromObject(data['repository']);
        }

        if (data.hasOwnProperty('sha')) {
          obj['sha'] = _ApiClient["default"].convertToType(data['sha'], 'String');
        }

        if (data.hasOwnProperty('state')) {
          obj['state'] = _ApiClient["default"].convertToType(data['state'], 'String');
        }

        if (data.hasOwnProperty('statuses')) {
          obj['statuses'] = _ApiClient["default"].convertToType(data['statuses'], [_SimpleCommitStatus["default"]]);
        }

        if (data.hasOwnProperty('total_count')) {
          obj['total_count'] = _ApiClient["default"].convertToType(data['total_count'], 'Number');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CombinedCommitStatus;
}();
/**
 * @member {String} commit_url
 */


CombinedCommitStatus.prototype['commit_url'] = undefined;
/**
 * @member {module:model/MinimalRepository} repository
 */

CombinedCommitStatus.prototype['repository'] = undefined;
/**
 * @member {String} sha
 */

CombinedCommitStatus.prototype['sha'] = undefined;
/**
 * @member {String} state
 */

CombinedCommitStatus.prototype['state'] = undefined;
/**
 * @member {Array.<module:model/SimpleCommitStatus>} statuses
 */

CombinedCommitStatus.prototype['statuses'] = undefined;
/**
 * @member {Number} total_count
 */

CombinedCommitStatus.prototype['total_count'] = undefined;
/**
 * @member {String} url
 */

CombinedCommitStatus.prototype['url'] = undefined;
var _default = CombinedCommitStatus;
exports["default"] = _default;