"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CommitStats = _interopRequireDefault(require("./CommitStats"));

var _SimpleUser = _interopRequireDefault(require("./SimpleUser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The GistCommit model module.
 * @module model/GistCommit
 * @version 0.0.5
 */
var GistCommit = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GistCommit</code>.
   * Gist Commit
   * @alias module:model/GistCommit
   * @param changeStatus {module:model/CommitStats} 
   * @param committedAt {Date} 
   * @param url {String} 
   * @param user {module:model/SimpleUser} 
   * @param version {String} 
   */
  function GistCommit(changeStatus, committedAt, url, user, version) {
    _classCallCheck(this, GistCommit);

    GistCommit.initialize(this, changeStatus, committedAt, url, user, version);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GistCommit, null, [{
    key: "initialize",
    value: function initialize(obj, changeStatus, committedAt, url, user, version) {
      obj['change_status'] = changeStatus;
      obj['committed_at'] = committedAt;
      obj['url'] = url;
      obj['user'] = user;
      obj['version'] = version;
    }
    /**
     * Constructs a <code>GistCommit</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GistCommit} obj Optional instance to populate.
     * @return {module:model/GistCommit} The populated <code>GistCommit</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GistCommit();

        if (data.hasOwnProperty('change_status')) {
          obj['change_status'] = _CommitStats["default"].constructFromObject(data['change_status']);
        }

        if (data.hasOwnProperty('committed_at')) {
          obj['committed_at'] = _ApiClient["default"].convertToType(data['committed_at'], 'Date');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }

        if (data.hasOwnProperty('user')) {
          obj['user'] = _ApiClient["default"].convertToType(data['user'], _SimpleUser["default"]);
        }

        if (data.hasOwnProperty('version')) {
          obj['version'] = _ApiClient["default"].convertToType(data['version'], 'String');
        }
      }

      return obj;
    }
  }]);

  return GistCommit;
}();
/**
 * @member {module:model/CommitStats} change_status
 */


GistCommit.prototype['change_status'] = undefined;
/**
 * @member {Date} committed_at
 */

GistCommit.prototype['committed_at'] = undefined;
/**
 * @member {String} url
 */

GistCommit.prototype['url'] = undefined;
/**
 * @member {module:model/SimpleUser} user
 */

GistCommit.prototype['user'] = undefined;
/**
 * @member {String} version
 */

GistCommit.prototype['version'] = undefined;
var _default = GistCommit;
exports["default"] = _default;