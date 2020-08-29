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
 * The CheckSuitePreferencePreferencesAutoTriggerChecks model module.
 * @module model/CheckSuitePreferencePreferencesAutoTriggerChecks
 * @version 0.0.5
 */
var CheckSuitePreferencePreferencesAutoTriggerChecks = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CheckSuitePreferencePreferencesAutoTriggerChecks</code>.
   * @alias module:model/CheckSuitePreferencePreferencesAutoTriggerChecks
   * @param appId {Number} 
   * @param setting {Boolean} 
   */
  function CheckSuitePreferencePreferencesAutoTriggerChecks(appId, setting) {
    _classCallCheck(this, CheckSuitePreferencePreferencesAutoTriggerChecks);

    CheckSuitePreferencePreferencesAutoTriggerChecks.initialize(this, appId, setting);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CheckSuitePreferencePreferencesAutoTriggerChecks, null, [{
    key: "initialize",
    value: function initialize(obj, appId, setting) {
      obj['app_id'] = appId;
      obj['setting'] = setting;
    }
    /**
     * Constructs a <code>CheckSuitePreferencePreferencesAutoTriggerChecks</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CheckSuitePreferencePreferencesAutoTriggerChecks} obj Optional instance to populate.
     * @return {module:model/CheckSuitePreferencePreferencesAutoTriggerChecks} The populated <code>CheckSuitePreferencePreferencesAutoTriggerChecks</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CheckSuitePreferencePreferencesAutoTriggerChecks();

        if (data.hasOwnProperty('app_id')) {
          obj['app_id'] = _ApiClient["default"].convertToType(data['app_id'], 'Number');
        }

        if (data.hasOwnProperty('setting')) {
          obj['setting'] = _ApiClient["default"].convertToType(data['setting'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return CheckSuitePreferencePreferencesAutoTriggerChecks;
}();
/**
 * @member {Number} app_id
 */


CheckSuitePreferencePreferencesAutoTriggerChecks.prototype['app_id'] = undefined;
/**
 * @member {Boolean} setting
 */

CheckSuitePreferencePreferencesAutoTriggerChecks.prototype['setting'] = undefined;
var _default = CheckSuitePreferencePreferencesAutoTriggerChecks;
exports["default"] = _default;