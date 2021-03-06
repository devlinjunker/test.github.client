"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _HookConfig = _interopRequireDefault(require("./HookConfig"));

var _HookResponse = _interopRequireDefault(require("./HookResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Hook model module.
 * @module model/Hook
 * @version 0.0.5
 */
var Hook = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Hook</code>.
   * Webhooks for repositories.
   * @alias module:model/Hook
   * @param active {Boolean} Determines whether the hook is actually triggered on pushes.
   * @param config {module:model/HookConfig} 
   * @param createdAt {Date} 
   * @param events {Array.<String>} Determines what events the hook is triggered for. Default: ['push'].
   * @param id {Number} Unique identifier of the webhook.
   * @param lastResponse {module:model/HookResponse} 
   * @param name {String} The name of a valid service, use 'web' for a webhook.
   * @param pingUrl {String} 
   * @param testUrl {String} 
   * @param type {String} 
   * @param updatedAt {Date} 
   * @param url {String} 
   */
  function Hook(active, config, createdAt, events, id, lastResponse, name, pingUrl, testUrl, type, updatedAt, url) {
    _classCallCheck(this, Hook);

    Hook.initialize(this, active, config, createdAt, events, id, lastResponse, name, pingUrl, testUrl, type, updatedAt, url);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Hook, null, [{
    key: "initialize",
    value: function initialize(obj, active, config, createdAt, events, id, lastResponse, name, pingUrl, testUrl, type, updatedAt, url) {
      obj['active'] = active;
      obj['config'] = config;
      obj['created_at'] = createdAt;
      obj['events'] = events;
      obj['id'] = id;
      obj['last_response'] = lastResponse;
      obj['name'] = name;
      obj['ping_url'] = pingUrl;
      obj['test_url'] = testUrl;
      obj['type'] = type;
      obj['updated_at'] = updatedAt;
      obj['url'] = url;
    }
    /**
     * Constructs a <code>Hook</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Hook} obj Optional instance to populate.
     * @return {module:model/Hook} The populated <code>Hook</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Hook();

        if (data.hasOwnProperty('active')) {
          obj['active'] = _ApiClient["default"].convertToType(data['active'], 'Boolean');
        }

        if (data.hasOwnProperty('config')) {
          obj['config'] = _HookConfig["default"].constructFromObject(data['config']);
        }

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'Date');
        }

        if (data.hasOwnProperty('events')) {
          obj['events'] = _ApiClient["default"].convertToType(data['events'], ['String']);
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('last_response')) {
          obj['last_response'] = _HookResponse["default"].constructFromObject(data['last_response']);
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('ping_url')) {
          obj['ping_url'] = _ApiClient["default"].convertToType(data['ping_url'], 'String');
        }

        if (data.hasOwnProperty('test_url')) {
          obj['test_url'] = _ApiClient["default"].convertToType(data['test_url'], 'String');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('updated_at')) {
          obj['updated_at'] = _ApiClient["default"].convertToType(data['updated_at'], 'Date');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Hook;
}();
/**
 * Determines whether the hook is actually triggered on pushes.
 * @member {Boolean} active
 */


Hook.prototype['active'] = undefined;
/**
 * @member {module:model/HookConfig} config
 */

Hook.prototype['config'] = undefined;
/**
 * @member {Date} created_at
 */

Hook.prototype['created_at'] = undefined;
/**
 * Determines what events the hook is triggered for. Default: ['push'].
 * @member {Array.<String>} events
 */

Hook.prototype['events'] = undefined;
/**
 * Unique identifier of the webhook.
 * @member {Number} id
 */

Hook.prototype['id'] = undefined;
/**
 * @member {module:model/HookResponse} last_response
 */

Hook.prototype['last_response'] = undefined;
/**
 * The name of a valid service, use 'web' for a webhook.
 * @member {String} name
 */

Hook.prototype['name'] = undefined;
/**
 * @member {String} ping_url
 */

Hook.prototype['ping_url'] = undefined;
/**
 * @member {String} test_url
 */

Hook.prototype['test_url'] = undefined;
/**
 * @member {String} type
 */

Hook.prototype['type'] = undefined;
/**
 * @member {Date} updated_at
 */

Hook.prototype['updated_at'] = undefined;
/**
 * @member {String} url
 */

Hook.prototype['url'] = undefined;
var _default = Hook;
exports["default"] = _default;