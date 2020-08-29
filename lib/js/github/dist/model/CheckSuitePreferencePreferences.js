"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CheckSuitePreferencePreferencesAutoTriggerChecks = _interopRequireDefault(require("./CheckSuitePreferencePreferencesAutoTriggerChecks"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CheckSuitePreferencePreferences model module.
 * @module model/CheckSuitePreferencePreferences
 * @version 0.0.5
 */
var CheckSuitePreferencePreferences = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CheckSuitePreferencePreferences</code>.
   * @alias module:model/CheckSuitePreferencePreferences
   */
  function CheckSuitePreferencePreferences() {
    _classCallCheck(this, CheckSuitePreferencePreferences);

    CheckSuitePreferencePreferences.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CheckSuitePreferencePreferences, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CheckSuitePreferencePreferences</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CheckSuitePreferencePreferences} obj Optional instance to populate.
     * @return {module:model/CheckSuitePreferencePreferences} The populated <code>CheckSuitePreferencePreferences</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CheckSuitePreferencePreferences();

        if (data.hasOwnProperty('auto_trigger_checks')) {
          obj['auto_trigger_checks'] = _ApiClient["default"].convertToType(data['auto_trigger_checks'], [_CheckSuitePreferencePreferencesAutoTriggerChecks["default"]]);
        }
      }

      return obj;
    }
  }]);

  return CheckSuitePreferencePreferences;
}();
/**
 * @member {Array.<module:model/CheckSuitePreferencePreferencesAutoTriggerChecks>} auto_trigger_checks
 */


CheckSuitePreferencePreferences.prototype['auto_trigger_checks'] = undefined;
var _default = CheckSuitePreferencePreferences;
exports["default"] = _default;