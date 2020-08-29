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
 * The WorkflowUsageBillableMACOS model module.
 * @module model/WorkflowUsageBillableMACOS
 * @version 0.0.5
 */
var WorkflowUsageBillableMACOS = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>WorkflowUsageBillableMACOS</code>.
   * @alias module:model/WorkflowUsageBillableMACOS
   */
  function WorkflowUsageBillableMACOS() {
    _classCallCheck(this, WorkflowUsageBillableMACOS);

    WorkflowUsageBillableMACOS.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(WorkflowUsageBillableMACOS, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>WorkflowUsageBillableMACOS</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WorkflowUsageBillableMACOS} obj Optional instance to populate.
     * @return {module:model/WorkflowUsageBillableMACOS} The populated <code>WorkflowUsageBillableMACOS</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new WorkflowUsageBillableMACOS();

        if (data.hasOwnProperty('total_ms')) {
          obj['total_ms'] = _ApiClient["default"].convertToType(data['total_ms'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return WorkflowUsageBillableMACOS;
}();
/**
 * @member {Number} total_ms
 */


WorkflowUsageBillableMACOS.prototype['total_ms'] = undefined;
var _default = WorkflowUsageBillableMACOS;
exports["default"] = _default;