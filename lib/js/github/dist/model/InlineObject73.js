"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ReposOwnerRepoHooksHookIdConfig = _interopRequireDefault(require("./ReposOwnerRepoHooksHookIdConfig"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineObject73 model module.
 * @module model/InlineObject73
 * @version 0.0.5
 */
var InlineObject73 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject73</code>.
   * @alias module:model/InlineObject73
   */
  function InlineObject73() {
    _classCallCheck(this, InlineObject73);

    InlineObject73.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject73, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineObject73</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject73} obj Optional instance to populate.
     * @return {module:model/InlineObject73} The populated <code>InlineObject73</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject73();

        if (data.hasOwnProperty('active')) {
          obj['active'] = _ApiClient["default"].convertToType(data['active'], 'Boolean');
        }

        if (data.hasOwnProperty('add_events')) {
          obj['add_events'] = _ApiClient["default"].convertToType(data['add_events'], ['String']);
        }

        if (data.hasOwnProperty('config')) {
          obj['config'] = _ReposOwnerRepoHooksHookIdConfig["default"].constructFromObject(data['config']);
        }

        if (data.hasOwnProperty('events')) {
          obj['events'] = _ApiClient["default"].convertToType(data['events'], ['String']);
        }

        if (data.hasOwnProperty('remove_events')) {
          obj['remove_events'] = _ApiClient["default"].convertToType(data['remove_events'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return InlineObject73;
}();
/**
 * Determines if notifications are sent when the webhook is triggered. Set to `true` to send notifications.
 * @member {Boolean} active
 * @default true
 */


InlineObject73.prototype['active'] = true;
/**
 * Determines a list of events to be added to the list of events that the Hook triggers for.
 * @member {Array.<String>} add_events
 */

InlineObject73.prototype['add_events'] = undefined;
/**
 * @member {module:model/ReposOwnerRepoHooksHookIdConfig} config
 */

InlineObject73.prototype['config'] = undefined;
/**
 * Determines what [events](https://developer.github.com/webhooks/event-payloads) the hook is triggered for. This replaces the entire array of events.
 * @member {Array.<String>} events
 */

InlineObject73.prototype['events'] = undefined;
/**
 * Determines a list of events to be removed from the list of events that the Hook triggers for.
 * @member {Array.<String>} remove_events
 */

InlineObject73.prototype['remove_events'] = undefined;
var _default = InlineObject73;
exports["default"] = _default;