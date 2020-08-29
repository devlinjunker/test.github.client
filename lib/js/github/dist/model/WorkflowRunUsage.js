"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _WorkflowRunUsageBillable = _interopRequireDefault(require("./WorkflowRunUsageBillable"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The WorkflowRunUsage model module.
 * @module model/WorkflowRunUsage
 * @version 0.0.5
 */
var WorkflowRunUsage = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>WorkflowRunUsage</code>.
   * Workflow Run Usage
   * @alias module:model/WorkflowRunUsage
   */
  function WorkflowRunUsage() {
    _classCallCheck(this, WorkflowRunUsage);

    WorkflowRunUsage.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(WorkflowRunUsage, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>WorkflowRunUsage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WorkflowRunUsage} obj Optional instance to populate.
     * @return {module:model/WorkflowRunUsage} The populated <code>WorkflowRunUsage</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new WorkflowRunUsage();

        if (data.hasOwnProperty('billable')) {
          obj['billable'] = _WorkflowRunUsageBillable["default"].constructFromObject(data['billable']);
        }

        if (data.hasOwnProperty('run_duration_ms')) {
          obj['run_duration_ms'] = _ApiClient["default"].convertToType(data['run_duration_ms'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return WorkflowRunUsage;
}();
/**
 * @member {module:model/WorkflowRunUsageBillable} billable
 */


WorkflowRunUsage.prototype['billable'] = undefined;
/**
 * @member {Number} run_duration_ms
 */

WorkflowRunUsage.prototype['run_duration_ms'] = undefined;
var _default = WorkflowRunUsage;
exports["default"] = _default;