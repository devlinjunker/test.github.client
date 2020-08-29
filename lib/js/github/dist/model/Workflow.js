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
 * The Workflow model module.
 * @module model/Workflow
 * @version 0.0.5
 */
var Workflow = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Workflow</code>.
   * A GitHub Actions workflow
   * @alias module:model/Workflow
   * @param badgeUrl {String} 
   * @param createdAt {Date} 
   * @param htmlUrl {String} 
   * @param id {Number} 
   * @param name {String} 
   * @param nodeId {String} 
   * @param path {String} 
   * @param state {module:model/Workflow.StateEnum} 
   * @param updatedAt {Date} 
   * @param url {String} 
   */
  function Workflow(badgeUrl, createdAt, htmlUrl, id, name, nodeId, path, state, updatedAt, url) {
    _classCallCheck(this, Workflow);

    Workflow.initialize(this, badgeUrl, createdAt, htmlUrl, id, name, nodeId, path, state, updatedAt, url);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Workflow, null, [{
    key: "initialize",
    value: function initialize(obj, badgeUrl, createdAt, htmlUrl, id, name, nodeId, path, state, updatedAt, url) {
      obj['badge_url'] = badgeUrl;
      obj['created_at'] = createdAt;
      obj['html_url'] = htmlUrl;
      obj['id'] = id;
      obj['name'] = name;
      obj['node_id'] = nodeId;
      obj['path'] = path;
      obj['state'] = state;
      obj['updated_at'] = updatedAt;
      obj['url'] = url;
    }
    /**
     * Constructs a <code>Workflow</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Workflow} obj Optional instance to populate.
     * @return {module:model/Workflow} The populated <code>Workflow</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Workflow();

        if (data.hasOwnProperty('badge_url')) {
          obj['badge_url'] = _ApiClient["default"].convertToType(data['badge_url'], 'String');
        }

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'Date');
        }

        if (data.hasOwnProperty('deleted_at')) {
          obj['deleted_at'] = _ApiClient["default"].convertToType(data['deleted_at'], 'Date');
        }

        if (data.hasOwnProperty('html_url')) {
          obj['html_url'] = _ApiClient["default"].convertToType(data['html_url'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('node_id')) {
          obj['node_id'] = _ApiClient["default"].convertToType(data['node_id'], 'String');
        }

        if (data.hasOwnProperty('path')) {
          obj['path'] = _ApiClient["default"].convertToType(data['path'], 'String');
        }

        if (data.hasOwnProperty('state')) {
          obj['state'] = _ApiClient["default"].convertToType(data['state'], 'String');
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

  return Workflow;
}();
/**
 * @member {String} badge_url
 */


Workflow.prototype['badge_url'] = undefined;
/**
 * @member {Date} created_at
 */

Workflow.prototype['created_at'] = undefined;
/**
 * @member {Date} deleted_at
 */

Workflow.prototype['deleted_at'] = undefined;
/**
 * @member {String} html_url
 */

Workflow.prototype['html_url'] = undefined;
/**
 * @member {Number} id
 */

Workflow.prototype['id'] = undefined;
/**
 * @member {String} name
 */

Workflow.prototype['name'] = undefined;
/**
 * @member {String} node_id
 */

Workflow.prototype['node_id'] = undefined;
/**
 * @member {String} path
 */

Workflow.prototype['path'] = undefined;
/**
 * @member {module:model/Workflow.StateEnum} state
 */

Workflow.prototype['state'] = undefined;
/**
 * @member {Date} updated_at
 */

Workflow.prototype['updated_at'] = undefined;
/**
 * @member {String} url
 */

Workflow.prototype['url'] = undefined;
/**
 * Allowed values for the <code>state</code> property.
 * @enum {String}
 * @readonly
 */

Workflow['StateEnum'] = {
  /**
   * value: "active"
   * @const
   */
  "active": "active",

  /**
   * value: "deleted"
   * @const
   */
  "deleted": "deleted"
};
var _default = Workflow;
exports["default"] = _default;