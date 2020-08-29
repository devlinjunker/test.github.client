"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _OrgHookConfig = _interopRequireDefault(require("./OrgHookConfig"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The OrgHook model module.
 * @module model/OrgHook
 * @version 0.0.5
 */
var OrgHook = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OrgHook</code>.
   * Org Hook
   * @alias module:model/OrgHook
   * @param active {Boolean} 
   * @param config {module:model/OrgHookConfig} 
   * @param createdAt {Date} 
   * @param events {Array.<String>} 
   * @param id {Number} 
   * @param name {String} 
   * @param pingUrl {String} 
   * @param type {String} 
   * @param updatedAt {Date} 
   * @param url {String} 
   */
  function OrgHook(active, config, createdAt, events, id, name, pingUrl, type, updatedAt, url) {
    _classCallCheck(this, OrgHook);

    OrgHook.initialize(this, active, config, createdAt, events, id, name, pingUrl, type, updatedAt, url);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(OrgHook, null, [{
    key: "initialize",
    value: function initialize(obj, active, config, createdAt, events, id, name, pingUrl, type, updatedAt, url) {
      obj['active'] = active;
      obj['config'] = config;
      obj['created_at'] = createdAt;
      obj['events'] = events;
      obj['id'] = id;
      obj['name'] = name;
      obj['ping_url'] = pingUrl;
      obj['type'] = type;
      obj['updated_at'] = updatedAt;
      obj['url'] = url;
    }
    /**
     * Constructs a <code>OrgHook</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrgHook} obj Optional instance to populate.
     * @return {module:model/OrgHook} The populated <code>OrgHook</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OrgHook();

        if (data.hasOwnProperty('active')) {
          obj['active'] = _ApiClient["default"].convertToType(data['active'], 'Boolean');
        }

        if (data.hasOwnProperty('config')) {
          obj['config'] = _OrgHookConfig["default"].constructFromObject(data['config']);
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

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('ping_url')) {
          obj['ping_url'] = _ApiClient["default"].convertToType(data['ping_url'], 'String');
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

  return OrgHook;
}();
/**
 * @member {Boolean} active
 */


OrgHook.prototype['active'] = undefined;
/**
 * @member {module:model/OrgHookConfig} config
 */

OrgHook.prototype['config'] = undefined;
/**
 * @member {Date} created_at
 */

OrgHook.prototype['created_at'] = undefined;
/**
 * @member {Array.<String>} events
 */

OrgHook.prototype['events'] = undefined;
/**
 * @member {Number} id
 */

OrgHook.prototype['id'] = undefined;
/**
 * @member {String} name
 */

OrgHook.prototype['name'] = undefined;
/**
 * @member {String} ping_url
 */

OrgHook.prototype['ping_url'] = undefined;
/**
 * @member {String} type
 */

OrgHook.prototype['type'] = undefined;
/**
 * @member {Date} updated_at
 */

OrgHook.prototype['updated_at'] = undefined;
/**
 * @member {String} url
 */

OrgHook.prototype['url'] = undefined;
var _default = OrgHook;
exports["default"] = _default;