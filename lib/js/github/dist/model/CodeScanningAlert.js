"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _SimpleUser = _interopRequireDefault(require("./SimpleUser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CodeScanningAlert model module.
 * @module model/CodeScanningAlert
 * @version 0.0.5
 */
var CodeScanningAlert = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CodeScanningAlert</code>.
   * Code Scanning Alert
   * @alias module:model/CodeScanningAlert
   */
  function CodeScanningAlert() {
    _classCallCheck(this, CodeScanningAlert);

    CodeScanningAlert.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CodeScanningAlert, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CodeScanningAlert</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CodeScanningAlert} obj Optional instance to populate.
     * @return {module:model/CodeScanningAlert} The populated <code>CodeScanningAlert</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CodeScanningAlert();

        if (data.hasOwnProperty('closed_at')) {
          obj['closed_at'] = _ApiClient["default"].convertToType(data['closed_at'], 'Date');
        }

        if (data.hasOwnProperty('closed_by')) {
          obj['closed_by'] = _ApiClient["default"].convertToType(data['closed_by'], _SimpleUser["default"]);
        }

        if (data.hasOwnProperty('closed_reason')) {
          obj['closed_reason'] = _ApiClient["default"].convertToType(data['closed_reason'], 'String');
        }

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'Date');
        }

        if (data.hasOwnProperty('html_url')) {
          obj['html_url'] = _ApiClient["default"].convertToType(data['html_url'], 'String');
        }

        if (data.hasOwnProperty('number')) {
          obj['number'] = _ApiClient["default"].convertToType(data['number'], 'Number');
        }

        if (data.hasOwnProperty('open')) {
          obj['open'] = _ApiClient["default"].convertToType(data['open'], 'Boolean');
        }

        if (data.hasOwnProperty('rule_description')) {
          obj['rule_description'] = _ApiClient["default"].convertToType(data['rule_description'], 'String');
        }

        if (data.hasOwnProperty('rule_id')) {
          obj['rule_id'] = _ApiClient["default"].convertToType(data['rule_id'], 'String');
        }

        if (data.hasOwnProperty('rule_severity')) {
          obj['rule_severity'] = _ApiClient["default"].convertToType(data['rule_severity'], 'String');
        }

        if (data.hasOwnProperty('tool')) {
          obj['tool'] = _ApiClient["default"].convertToType(data['tool'], 'String');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CodeScanningAlert;
}();
/**
 * @member {Date} closed_at
 */


CodeScanningAlert.prototype['closed_at'] = undefined;
/**
 * @member {module:model/SimpleUser} closed_by
 */

CodeScanningAlert.prototype['closed_by'] = undefined;
/**
 * @member {module:model/CodeScanningAlert.ClosedReasonEnum} closed_reason
 */

CodeScanningAlert.prototype['closed_reason'] = undefined;
/**
 * @member {Date} created_at
 */

CodeScanningAlert.prototype['created_at'] = undefined;
/**
 * @member {String} html_url
 */

CodeScanningAlert.prototype['html_url'] = undefined;
/**
 * @member {Number} number
 */

CodeScanningAlert.prototype['number'] = undefined;
/**
 * Whether or not the alert is open.
 * @member {Boolean} open
 */

CodeScanningAlert.prototype['open'] = undefined;
/**
 * A short description of the rule used to detect the alert.
 * @member {String} rule_description
 */

CodeScanningAlert.prototype['rule_description'] = undefined;
/**
 * A unique identifier for the rule used to detect the alert.
 * @member {String} rule_id
 */

CodeScanningAlert.prototype['rule_id'] = undefined;
/**
 * The severity of the alert.
 * @member {module:model/CodeScanningAlert.RuleSeverityEnum} rule_severity
 */

CodeScanningAlert.prototype['rule_severity'] = undefined;
/**
 * The name of the tool used to detect the alert.
 * @member {String} tool
 */

CodeScanningAlert.prototype['tool'] = undefined;
/**
 * @member {String} url
 */

CodeScanningAlert.prototype['url'] = undefined;
/**
 * Allowed values for the <code>closed_reason</code> property.
 * @enum {String}
 * @readonly
 */

CodeScanningAlert['ClosedReasonEnum'] = {
  /**
   * value: "false positive"
   * @const
   */
  "false positive": "false positive",

  /**
   * value: "won't fix"
   * @const
   */
  "won&#39;t fix": "won't fix",

  /**
   * value: "used in tests"
   * @const
   */
  "used in tests": "used in tests"
};
/**
 * Allowed values for the <code>rule_severity</code> property.
 * @enum {String}
 * @readonly
 */

CodeScanningAlert['RuleSeverityEnum'] = {
  /**
   * value: "none"
   * @const
   */
  "none": "none",

  /**
   * value: "note"
   * @const
   */
  "note": "note",

  /**
   * value: "warning"
   * @const
   */
  "warning": "warning",

  /**
   * value: "error"
   * @const
   */
  "error": "error"
};
var _default = CodeScanningAlert;
exports["default"] = _default;