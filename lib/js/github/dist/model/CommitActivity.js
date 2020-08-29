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
 * The CommitActivity model module.
 * @module model/CommitActivity
 * @version 0.0.5
 */
var CommitActivity = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CommitActivity</code>.
   * Commit Activity
   * @alias module:model/CommitActivity
   * @param days {Array.<Number>} 
   * @param total {Number} 
   * @param week {Number} 
   */
  function CommitActivity(days, total, week) {
    _classCallCheck(this, CommitActivity);

    CommitActivity.initialize(this, days, total, week);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CommitActivity, null, [{
    key: "initialize",
    value: function initialize(obj, days, total, week) {
      obj['days'] = days;
      obj['total'] = total;
      obj['week'] = week;
    }
    /**
     * Constructs a <code>CommitActivity</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CommitActivity} obj Optional instance to populate.
     * @return {module:model/CommitActivity} The populated <code>CommitActivity</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CommitActivity();

        if (data.hasOwnProperty('days')) {
          obj['days'] = _ApiClient["default"].convertToType(data['days'], ['Number']);
        }

        if (data.hasOwnProperty('total')) {
          obj['total'] = _ApiClient["default"].convertToType(data['total'], 'Number');
        }

        if (data.hasOwnProperty('week')) {
          obj['week'] = _ApiClient["default"].convertToType(data['week'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return CommitActivity;
}();
/**
 * @member {Array.<Number>} days
 */


CommitActivity.prototype['days'] = undefined;
/**
 * @member {Number} total
 */

CommitActivity.prototype['total'] = undefined;
/**
 * @member {Number} week
 */

CommitActivity.prototype['week'] = undefined;
var _default = CommitActivity;
exports["default"] = _default;