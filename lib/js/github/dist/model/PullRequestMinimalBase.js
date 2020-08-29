"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PullRequestMinimalBaseRepo = _interopRequireDefault(require("./PullRequestMinimalBaseRepo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PullRequestMinimalBase model module.
 * @module model/PullRequestMinimalBase
 * @version 0.0.5
 */
var PullRequestMinimalBase = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PullRequestMinimalBase</code>.
   * @alias module:model/PullRequestMinimalBase
   * @param ref {String} 
   * @param repo {module:model/PullRequestMinimalBaseRepo} 
   * @param sha {String} 
   */
  function PullRequestMinimalBase(ref, repo, sha) {
    _classCallCheck(this, PullRequestMinimalBase);

    PullRequestMinimalBase.initialize(this, ref, repo, sha);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PullRequestMinimalBase, null, [{
    key: "initialize",
    value: function initialize(obj, ref, repo, sha) {
      obj['ref'] = ref;
      obj['repo'] = repo;
      obj['sha'] = sha;
    }
    /**
     * Constructs a <code>PullRequestMinimalBase</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PullRequestMinimalBase} obj Optional instance to populate.
     * @return {module:model/PullRequestMinimalBase} The populated <code>PullRequestMinimalBase</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PullRequestMinimalBase();

        if (data.hasOwnProperty('ref')) {
          obj['ref'] = _ApiClient["default"].convertToType(data['ref'], 'String');
        }

        if (data.hasOwnProperty('repo')) {
          obj['repo'] = _PullRequestMinimalBaseRepo["default"].constructFromObject(data['repo']);
        }

        if (data.hasOwnProperty('sha')) {
          obj['sha'] = _ApiClient["default"].convertToType(data['sha'], 'String');
        }
      }

      return obj;
    }
  }]);

  return PullRequestMinimalBase;
}();
/**
 * @member {String} ref
 */


PullRequestMinimalBase.prototype['ref'] = undefined;
/**
 * @member {module:model/PullRequestMinimalBaseRepo} repo
 */

PullRequestMinimalBase.prototype['repo'] = undefined;
/**
 * @member {String} sha
 */

PullRequestMinimalBase.prototype['sha'] = undefined;
var _default = PullRequestMinimalBase;
exports["default"] = _default;