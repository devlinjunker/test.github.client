"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _OrgsOrgHooksConfig = _interopRequireDefault(require("./OrgsOrgHooksConfig"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineObject19 model module.
 * @module model/InlineObject19
 * @version 0.0.5
 */
var InlineObject19 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject19</code>.
   * @alias module:model/InlineObject19
   * @param config {module:model/OrgsOrgHooksConfig} 
   * @param name {String} Must be passed as \"web\".
   */
  function InlineObject19(config, name) {
    _classCallCheck(this, InlineObject19);

    InlineObject19.initialize(this, config, name);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject19, null, [{
    key: "initialize",
    value: function initialize(obj, config, name) {
      obj['config'] = config;
      obj['name'] = name;
    }
    /**
     * Constructs a <code>InlineObject19</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject19} obj Optional instance to populate.
     * @return {module:model/InlineObject19} The populated <code>InlineObject19</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject19();

        if (data.hasOwnProperty('active')) {
          obj['active'] = _ApiClient["default"].convertToType(data['active'], 'Boolean');
        }

        if (data.hasOwnProperty('config')) {
          obj['config'] = _OrgsOrgHooksConfig["default"].constructFromObject(data['config']);
        }

        if (data.hasOwnProperty('events')) {
          obj['events'] = _ApiClient["default"].convertToType(data['events'], ['String']);
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineObject19;
}();
/**
 * Determines if notifications are sent when the webhook is triggered. Set to `true` to send notifications.
 * @member {Boolean} active
 * @default true
 */


InlineObject19.prototype['active'] = true;
/**
 * @member {module:model/OrgsOrgHooksConfig} config
 */

InlineObject19.prototype['config'] = undefined;
/**
 * Determines what [events](https://developer.github.com/webhooks/event-payloads) the hook is triggered for.
 * @member {Array.<String>} events
 */

InlineObject19.prototype['events'] = undefined;
/**
 * Must be passed as \"web\".
 * @member {String} name
 */

InlineObject19.prototype['name'] = undefined;
var _default = InlineObject19;
exports["default"] = _default;