"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CommitStats = _interopRequireDefault(require("./CommitStats"));

var _GistFullAllOfUser = _interopRequireDefault(require("./GistFullAllOfUser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The GistFullAllOfHistory model module.
 * @module model/GistFullAllOfHistory
 * @version 0.0.5
 */
var GistFullAllOfHistory = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GistFullAllOfHistory</code>.
   * @alias module:model/GistFullAllOfHistory
   */
  function GistFullAllOfHistory() {
    _classCallCheck(this, GistFullAllOfHistory);

    GistFullAllOfHistory.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GistFullAllOfHistory, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>GistFullAllOfHistory</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GistFullAllOfHistory} obj Optional instance to populate.
     * @return {module:model/GistFullAllOfHistory} The populated <code>GistFullAllOfHistory</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GistFullAllOfHistory();

        if (data.hasOwnProperty('change_status')) {
          obj['change_status'] = _CommitStats["default"].constructFromObject(data['change_status']);
        }

        if (data.hasOwnProperty('committed_at')) {
          obj['committed_at'] = _ApiClient["default"].convertToType(data['committed_at'], 'String');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }

        if (data.hasOwnProperty('user')) {
          obj['user'] = _GistFullAllOfUser["default"].constructFromObject(data['user']);
        }

        if (data.hasOwnProperty('version')) {
          obj['version'] = _ApiClient["default"].convertToType(data['version'], 'String');
        }
      }

      return obj;
    }
  }]);

  return GistFullAllOfHistory;
}();
/**
 * @member {module:model/CommitStats} change_status
 */


GistFullAllOfHistory.prototype['change_status'] = undefined;
/**
 * @member {String} committed_at
 */

GistFullAllOfHistory.prototype['committed_at'] = undefined;
/**
 * @member {String} url
 */

GistFullAllOfHistory.prototype['url'] = undefined;
/**
 * @member {module:model/GistFullAllOfUser} user
 */

GistFullAllOfHistory.prototype['user'] = undefined;
/**
 * @member {String} version
 */

GistFullAllOfHistory.prototype['version'] = undefined;
var _default = GistFullAllOfHistory;
exports["default"] = _default;