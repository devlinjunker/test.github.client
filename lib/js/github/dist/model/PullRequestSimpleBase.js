"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Repository = _interopRequireDefault(require("./Repository"));

var _SimpleUser = _interopRequireDefault(require("./SimpleUser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PullRequestSimpleBase model module.
 * @module model/PullRequestSimpleBase
 * @version 0.0.5
 */
var PullRequestSimpleBase = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PullRequestSimpleBase</code>.
   * @alias module:model/PullRequestSimpleBase
   * @param label {String} 
   * @param ref {String} 
   * @param repo {module:model/Repository} 
   * @param sha {String} 
   * @param user {module:model/SimpleUser} 
   */
  function PullRequestSimpleBase(label, ref, repo, sha, user) {
    _classCallCheck(this, PullRequestSimpleBase);

    PullRequestSimpleBase.initialize(this, label, ref, repo, sha, user);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PullRequestSimpleBase, null, [{
    key: "initialize",
    value: function initialize(obj, label, ref, repo, sha, user) {
      obj['label'] = label;
      obj['ref'] = ref;
      obj['repo'] = repo;
      obj['sha'] = sha;
      obj['user'] = user;
    }
    /**
     * Constructs a <code>PullRequestSimpleBase</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PullRequestSimpleBase} obj Optional instance to populate.
     * @return {module:model/PullRequestSimpleBase} The populated <code>PullRequestSimpleBase</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PullRequestSimpleBase();

        if (data.hasOwnProperty('label')) {
          obj['label'] = _ApiClient["default"].convertToType(data['label'], 'String');
        }

        if (data.hasOwnProperty('ref')) {
          obj['ref'] = _ApiClient["default"].convertToType(data['ref'], 'String');
        }

        if (data.hasOwnProperty('repo')) {
          obj['repo'] = _Repository["default"].constructFromObject(data['repo']);
        }

        if (data.hasOwnProperty('sha')) {
          obj['sha'] = _ApiClient["default"].convertToType(data['sha'], 'String');
        }

        if (data.hasOwnProperty('user')) {
          obj['user'] = _ApiClient["default"].convertToType(data['user'], _SimpleUser["default"]);
        }
      }

      return obj;
    }
  }]);

  return PullRequestSimpleBase;
}();
/**
 * @member {String} label
 */


PullRequestSimpleBase.prototype['label'] = undefined;
/**
 * @member {String} ref
 */

PullRequestSimpleBase.prototype['ref'] = undefined;
/**
 * @member {module:model/Repository} repo
 */

PullRequestSimpleBase.prototype['repo'] = undefined;
/**
 * @member {String} sha
 */

PullRequestSimpleBase.prototype['sha'] = undefined;
/**
 * @member {module:model/SimpleUser} user
 */

PullRequestSimpleBase.prototype['user'] = undefined;
var _default = PullRequestSimpleBase;
exports["default"] = _default;