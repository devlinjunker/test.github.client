"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _WorkflowUsageBillableMACOS = _interopRequireDefault(require("./WorkflowUsageBillableMACOS"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The WorkflowUsageBillable model module.
 * @module model/WorkflowUsageBillable
 * @version 0.0.5
 */
var WorkflowUsageBillable = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>WorkflowUsageBillable</code>.
   * @alias module:model/WorkflowUsageBillable
   */
  function WorkflowUsageBillable() {
    _classCallCheck(this, WorkflowUsageBillable);

    WorkflowUsageBillable.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(WorkflowUsageBillable, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>WorkflowUsageBillable</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WorkflowUsageBillable} obj Optional instance to populate.
     * @return {module:model/WorkflowUsageBillable} The populated <code>WorkflowUsageBillable</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new WorkflowUsageBillable();

        if (data.hasOwnProperty('MACOS')) {
          obj['MACOS'] = _WorkflowUsageBillableMACOS["default"].constructFromObject(data['MACOS']);
        }

        if (data.hasOwnProperty('UBUNTU')) {
          obj['UBUNTU'] = _WorkflowUsageBillableMACOS["default"].constructFromObject(data['UBUNTU']);
        }

        if (data.hasOwnProperty('WINDOWS')) {
          obj['WINDOWS'] = _WorkflowUsageBillableMACOS["default"].constructFromObject(data['WINDOWS']);
        }
      }

      return obj;
    }
  }]);

  return WorkflowUsageBillable;
}();
/**
 * @member {module:model/WorkflowUsageBillableMACOS} MACOS
 */


WorkflowUsageBillable.prototype['MACOS'] = undefined;
/**
 * @member {module:model/WorkflowUsageBillableMACOS} UBUNTU
 */

WorkflowUsageBillable.prototype['UBUNTU'] = undefined;
/**
 * @member {module:model/WorkflowUsageBillableMACOS} WINDOWS
 */

WorkflowUsageBillable.prototype['WINDOWS'] = undefined;
var _default = WorkflowUsageBillable;
exports["default"] = _default;