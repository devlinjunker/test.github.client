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
 * The PullRequestMergeResult model module.
 * @module model/PullRequestMergeResult
 * @version 0.0.5
 */
var PullRequestMergeResult = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PullRequestMergeResult</code>.
   * Pull Request Merge Result
   * @alias module:model/PullRequestMergeResult
   * @param merged {Boolean} 
   * @param message {String} 
   * @param sha {String} 
   */
  function PullRequestMergeResult(merged, message, sha) {
    _classCallCheck(this, PullRequestMergeResult);

    PullRequestMergeResult.initialize(this, merged, message, sha);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PullRequestMergeResult, null, [{
    key: "initialize",
    value: function initialize(obj, merged, message, sha) {
      obj['merged'] = merged;
      obj['message'] = message;
      obj['sha'] = sha;
    }
    /**
     * Constructs a <code>PullRequestMergeResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PullRequestMergeResult} obj Optional instance to populate.
     * @return {module:model/PullRequestMergeResult} The populated <code>PullRequestMergeResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PullRequestMergeResult();

        if (data.hasOwnProperty('merged')) {
          obj['merged'] = _ApiClient["default"].convertToType(data['merged'], 'Boolean');
        }

        if (data.hasOwnProperty('message')) {
          obj['message'] = _ApiClient["default"].convertToType(data['message'], 'String');
        }

        if (data.hasOwnProperty('sha')) {
          obj['sha'] = _ApiClient["default"].convertToType(data['sha'], 'String');
        }
      }

      return obj;
    }
  }]);

  return PullRequestMergeResult;
}();
/**
 * @member {Boolean} merged
 */


PullRequestMergeResult.prototype['merged'] = undefined;
/**
 * @member {String} message
 */

PullRequestMergeResult.prototype['message'] = undefined;
/**
 * @member {String} sha
 */

PullRequestMergeResult.prototype['sha'] = undefined;
var _default = PullRequestMergeResult;
exports["default"] = _default;