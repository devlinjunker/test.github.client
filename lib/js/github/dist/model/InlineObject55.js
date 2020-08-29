"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ReposOwnerRepoCheckSuitesPreferencesAutoTriggerChecks = _interopRequireDefault(require("./ReposOwnerRepoCheckSuitesPreferencesAutoTriggerChecks"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineObject55 model module.
 * @module model/InlineObject55
 * @version 0.0.5
 */
var InlineObject55 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject55</code>.
   * @alias module:model/InlineObject55
   */
  function InlineObject55() {
    _classCallCheck(this, InlineObject55);

    InlineObject55.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject55, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineObject55</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject55} obj Optional instance to populate.
     * @return {module:model/InlineObject55} The populated <code>InlineObject55</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject55();

        if (data.hasOwnProperty('auto_trigger_checks')) {
          obj['auto_trigger_checks'] = _ApiClient["default"].convertToType(data['auto_trigger_checks'], [_ReposOwnerRepoCheckSuitesPreferencesAutoTriggerChecks["default"]]);
        }
      }

      return obj;
    }
  }]);

  return InlineObject55;
}();
/**
 * Enables or disables automatic creation of CheckSuite events upon pushes to the repository. Enabled by default. See the [`auto_trigger_checks` object](https://developer.github.com/v3/checks/suites/#auto_trigger_checks-object) description for details.
 * @member {Array.<module:model/ReposOwnerRepoCheckSuitesPreferencesAutoTriggerChecks>} auto_trigger_checks
 */


InlineObject55.prototype['auto_trigger_checks'] = undefined;
var _default = InlineObject55;
exports["default"] = _default;