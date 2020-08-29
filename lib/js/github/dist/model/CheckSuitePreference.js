"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CheckSuitePreferencePreferences = _interopRequireDefault(require("./CheckSuitePreferencePreferences"));

var _Repository = _interopRequireDefault(require("./Repository"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CheckSuitePreference model module.
 * @module model/CheckSuitePreference
 * @version 0.0.5
 */
var CheckSuitePreference = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CheckSuitePreference</code>.
   * Check suite configuration preferences for a repository.
   * @alias module:model/CheckSuitePreference
   */
  function CheckSuitePreference() {
    _classCallCheck(this, CheckSuitePreference);

    CheckSuitePreference.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CheckSuitePreference, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CheckSuitePreference</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CheckSuitePreference} obj Optional instance to populate.
     * @return {module:model/CheckSuitePreference} The populated <code>CheckSuitePreference</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CheckSuitePreference();

        if (data.hasOwnProperty('preferences')) {
          obj['preferences'] = _CheckSuitePreferencePreferences["default"].constructFromObject(data['preferences']);
        }

        if (data.hasOwnProperty('repository')) {
          obj['repository'] = _Repository["default"].constructFromObject(data['repository']);
        }
      }

      return obj;
    }
  }]);

  return CheckSuitePreference;
}();
/**
 * @member {module:model/CheckSuitePreferencePreferences} preferences
 */


CheckSuitePreference.prototype['preferences'] = undefined;
/**
 * @member {module:model/Repository} repository
 */

CheckSuitePreference.prototype['repository'] = undefined;
var _default = CheckSuitePreference;
exports["default"] = _default;