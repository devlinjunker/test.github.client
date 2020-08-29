"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _WorkflowUsageBillable = _interopRequireDefault(require("./WorkflowUsageBillable"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The WorkflowUsage model module.
 * @module model/WorkflowUsage
 * @version 0.0.5
 */
var WorkflowUsage = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>WorkflowUsage</code>.
   * Workflow Usage
   * @alias module:model/WorkflowUsage
   */
  function WorkflowUsage() {
    _classCallCheck(this, WorkflowUsage);

    WorkflowUsage.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(WorkflowUsage, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>WorkflowUsage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WorkflowUsage} obj Optional instance to populate.
     * @return {module:model/WorkflowUsage} The populated <code>WorkflowUsage</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new WorkflowUsage();

        if (data.hasOwnProperty('billable')) {
          obj['billable'] = _WorkflowUsageBillable["default"].constructFromObject(data['billable']);
        }
      }

      return obj;
    }
  }]);

  return WorkflowUsage;
}();
/**
 * @member {module:model/WorkflowUsageBillable} billable
 */


WorkflowUsage.prototype['billable'] = undefined;
var _default = WorkflowUsage;
exports["default"] = _default;