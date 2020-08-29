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
 * The Integration model module.
 * @module model/Integration
 * @version 0.0.5
 */
var Integration = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Integration</code>.
   * GitHub apps are a new way to extend GitHub. They can be installed directly on organizations and user accounts and granted access to specific repositories. They come with granular permissions and built-in webhooks. GitHub apps are first class actors within GitHub.
   * @alias module:model/Integration
   * @extends Object
   * @param createdAt {Date} 
   * @param description {String} 
   * @param events {Array.<String>} The list of events for the GitHub app
   * @param externalUrl {String} 
   * @param htmlUrl {String} 
   * @param id {Number} Unique identifier of the GitHub app
   * @param name {String} The name of the GitHub app
   * @param nodeId {String} 
   * @param owner {module:model/SimpleUser} 
   * @param permissions {Object.<String, String>} The set of permissions for the GitHub app
   * @param updatedAt {Date} 
   */
  function Integration(createdAt, description, events, externalUrl, htmlUrl, id, name, nodeId, owner, permissions, updatedAt) {
    _classCallCheck(this, Integration);

    Integration.initialize(this, createdAt, description, events, externalUrl, htmlUrl, id, name, nodeId, owner, permissions, updatedAt);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Integration, null, [{
    key: "initialize",
    value: function initialize(obj, createdAt, description, events, externalUrl, htmlUrl, id, name, nodeId, owner, permissions, updatedAt) {
      obj['created_at'] = createdAt;
      obj['description'] = description;
      obj['events'] = events;
      obj['external_url'] = externalUrl;
      obj['html_url'] = htmlUrl;
      obj['id'] = id;
      obj['name'] = name;
      obj['node_id'] = nodeId;
      obj['owner'] = owner;
      obj['permissions'] = permissions;
      obj['updated_at'] = updatedAt;
    }
    /**
     * Constructs a <code>Integration</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Integration} obj Optional instance to populate.
     * @return {module:model/Integration} The populated <code>Integration</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Integration();

        _ApiClient["default"].constructFromObject(data, obj, 'Object');

        if (data.hasOwnProperty('client_id')) {
          obj['client_id'] = _ApiClient["default"].convertToType(data['client_id'], 'String');
        }

        if (data.hasOwnProperty('client_secret')) {
          obj['client_secret'] = _ApiClient["default"].convertToType(data['client_secret'], 'String');
        }

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'Date');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('events')) {
          obj['events'] = _ApiClient["default"].convertToType(data['events'], ['String']);
        }

        if (data.hasOwnProperty('external_url')) {
          obj['external_url'] = _ApiClient["default"].convertToType(data['external_url'], 'String');
        }

        if (data.hasOwnProperty('html_url')) {
          obj['html_url'] = _ApiClient["default"].convertToType(data['html_url'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('installations_count')) {
          obj['installations_count'] = _ApiClient["default"].convertToType(data['installations_count'], 'Number');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('node_id')) {
          obj['node_id'] = _ApiClient["default"].convertToType(data['node_id'], 'String');
        }

        if (data.hasOwnProperty('owner')) {
          obj['owner'] = _ApiClient["default"].convertToType(data['owner'], _SimpleUser["default"]);
        }

        if (data.hasOwnProperty('pem')) {
          obj['pem'] = _ApiClient["default"].convertToType(data['pem'], 'String');
        }

        if (data.hasOwnProperty('permissions')) {
          obj['permissions'] = _ApiClient["default"].convertToType(data['permissions'], {
            'String': 'String'
          });
        }

        if (data.hasOwnProperty('slug')) {
          obj['slug'] = _ApiClient["default"].convertToType(data['slug'], 'String');
        }

        if (data.hasOwnProperty('updated_at')) {
          obj['updated_at'] = _ApiClient["default"].convertToType(data['updated_at'], 'Date');
        }

        if (data.hasOwnProperty('webhook_secret')) {
          obj['webhook_secret'] = _ApiClient["default"].convertToType(data['webhook_secret'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Integration;
}();
/**
 * @member {String} client_id
 */


Integration.prototype['client_id'] = undefined;
/**
 * @member {String} client_secret
 */

Integration.prototype['client_secret'] = undefined;
/**
 * @member {Date} created_at
 */

Integration.prototype['created_at'] = undefined;
/**
 * @member {String} description
 */

Integration.prototype['description'] = undefined;
/**
 * The list of events for the GitHub app
 * @member {Array.<String>} events
 */

Integration.prototype['events'] = undefined;
/**
 * @member {String} external_url
 */

Integration.prototype['external_url'] = undefined;
/**
 * @member {String} html_url
 */

Integration.prototype['html_url'] = undefined;
/**
 * Unique identifier of the GitHub app
 * @member {Number} id
 */

Integration.prototype['id'] = undefined;
/**
 * The number of installations associated with the GitHub app
 * @member {Number} installations_count
 */

Integration.prototype['installations_count'] = undefined;
/**
 * The name of the GitHub app
 * @member {String} name
 */

Integration.prototype['name'] = undefined;
/**
 * @member {String} node_id
 */

Integration.prototype['node_id'] = undefined;
/**
 * @member {module:model/SimpleUser} owner
 */

Integration.prototype['owner'] = undefined;
/**
 * @member {String} pem
 */

Integration.prototype['pem'] = undefined;
/**
 * The set of permissions for the GitHub app
 * @member {Object.<String, String>} permissions
 */

Integration.prototype['permissions'] = undefined;
/**
 * The slug name of the GitHub app
 * @member {String} slug
 */

Integration.prototype['slug'] = undefined;
/**
 * @member {Date} updated_at
 */

Integration.prototype['updated_at'] = undefined;
/**
 * @member {String} webhook_secret
 */

Integration.prototype['webhook_secret'] = undefined;
var _default = Integration;
exports["default"] = _default;