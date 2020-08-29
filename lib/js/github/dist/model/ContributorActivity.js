"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ContributorActivityWeeks = _interopRequireDefault(require("./ContributorActivityWeeks"));

var _SimpleUser = _interopRequireDefault(require("./SimpleUser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ContributorActivity model module.
 * @module model/ContributorActivity
 * @version 0.0.5
 */
var ContributorActivity = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ContributorActivity</code>.
   * Contributor Activity
   * @alias module:model/ContributorActivity
   * @param author {module:model/SimpleUser} 
   * @param total {Number} 
   * @param weeks {Array.<module:model/ContributorActivityWeeks>} 
   */
  function ContributorActivity(author, total, weeks) {
    _classCallCheck(this, ContributorActivity);

    ContributorActivity.initialize(this, author, total, weeks);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ContributorActivity, null, [{
    key: "initialize",
    value: function initialize(obj, author, total, weeks) {
      obj['author'] = author;
      obj['total'] = total;
      obj['weeks'] = weeks;
    }
    /**
     * Constructs a <code>ContributorActivity</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ContributorActivity} obj Optional instance to populate.
     * @return {module:model/ContributorActivity} The populated <code>ContributorActivity</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ContributorActivity();

        if (data.hasOwnProperty('author')) {
          obj['author'] = _ApiClient["default"].convertToType(data['author'], _SimpleUser["default"]);
        }

        if (data.hasOwnProperty('total')) {
          obj['total'] = _ApiClient["default"].convertToType(data['total'], 'Number');
        }

        if (data.hasOwnProperty('weeks')) {
          obj['weeks'] = _ApiClient["default"].convertToType(data['weeks'], [_ContributorActivityWeeks["default"]]);
        }
      }

      return obj;
    }
  }]);

  return ContributorActivity;
}();
/**
 * @member {module:model/SimpleUser} author
 */


ContributorActivity.prototype['author'] = undefined;
/**
 * @member {Number} total
 */

ContributorActivity.prototype['total'] = undefined;
/**
 * @member {Array.<module:model/ContributorActivityWeeks>} weeks
 */

ContributorActivity.prototype['weeks'] = undefined;
var _default = ContributorActivity;
exports["default"] = _default;