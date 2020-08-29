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
 * The License model module.
 * @module model/License
 * @version 0.0.5
 */
var License = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>License</code>.
   * License
   * @alias module:model/License
   * @param body {String} 
   * @param conditions {Array.<String>} 
   * @param description {String} 
   * @param featured {Boolean} 
   * @param htmlUrl {String} 
   * @param implementation {String} 
   * @param key {String} 
   * @param limitations {Array.<String>} 
   * @param name {String} 
   * @param nodeId {String} 
   * @param permissions {Array.<String>} 
   * @param spdxId {String} 
   * @param url {String} 
   */
  function License(body, conditions, description, featured, htmlUrl, implementation, key, limitations, name, nodeId, permissions, spdxId, url) {
    _classCallCheck(this, License);

    License.initialize(this, body, conditions, description, featured, htmlUrl, implementation, key, limitations, name, nodeId, permissions, spdxId, url);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(License, null, [{
    key: "initialize",
    value: function initialize(obj, body, conditions, description, featured, htmlUrl, implementation, key, limitations, name, nodeId, permissions, spdxId, url) {
      obj['body'] = body;
      obj['conditions'] = conditions;
      obj['description'] = description;
      obj['featured'] = featured;
      obj['html_url'] = htmlUrl;
      obj['implementation'] = implementation;
      obj['key'] = key;
      obj['limitations'] = limitations;
      obj['name'] = name;
      obj['node_id'] = nodeId;
      obj['permissions'] = permissions;
      obj['spdx_id'] = spdxId;
      obj['url'] = url;
    }
    /**
     * Constructs a <code>License</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/License} obj Optional instance to populate.
     * @return {module:model/License} The populated <code>License</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new License();

        if (data.hasOwnProperty('body')) {
          obj['body'] = _ApiClient["default"].convertToType(data['body'], 'String');
        }

        if (data.hasOwnProperty('conditions')) {
          obj['conditions'] = _ApiClient["default"].convertToType(data['conditions'], ['String']);
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('featured')) {
          obj['featured'] = _ApiClient["default"].convertToType(data['featured'], 'Boolean');
        }

        if (data.hasOwnProperty('html_url')) {
          obj['html_url'] = _ApiClient["default"].convertToType(data['html_url'], 'String');
        }

        if (data.hasOwnProperty('implementation')) {
          obj['implementation'] = _ApiClient["default"].convertToType(data['implementation'], 'String');
        }

        if (data.hasOwnProperty('key')) {
          obj['key'] = _ApiClient["default"].convertToType(data['key'], 'String');
        }

        if (data.hasOwnProperty('limitations')) {
          obj['limitations'] = _ApiClient["default"].convertToType(data['limitations'], ['String']);
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('node_id')) {
          obj['node_id'] = _ApiClient["default"].convertToType(data['node_id'], 'String');
        }

        if (data.hasOwnProperty('permissions')) {
          obj['permissions'] = _ApiClient["default"].convertToType(data['permissions'], ['String']);
        }

        if (data.hasOwnProperty('spdx_id')) {
          obj['spdx_id'] = _ApiClient["default"].convertToType(data['spdx_id'], 'String');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return License;
}();
/**
 * @member {String} body
 */


License.prototype['body'] = undefined;
/**
 * @member {Array.<String>} conditions
 */

License.prototype['conditions'] = undefined;
/**
 * @member {String} description
 */

License.prototype['description'] = undefined;
/**
 * @member {Boolean} featured
 */

License.prototype['featured'] = undefined;
/**
 * @member {String} html_url
 */

License.prototype['html_url'] = undefined;
/**
 * @member {String} implementation
 */

License.prototype['implementation'] = undefined;
/**
 * @member {String} key
 */

License.prototype['key'] = undefined;
/**
 * @member {Array.<String>} limitations
 */

License.prototype['limitations'] = undefined;
/**
 * @member {String} name
 */

License.prototype['name'] = undefined;
/**
 * @member {String} node_id
 */

License.prototype['node_id'] = undefined;
/**
 * @member {Array.<String>} permissions
 */

License.prototype['permissions'] = undefined;
/**
 * @member {String} spdx_id
 */

License.prototype['spdx_id'] = undefined;
/**
 * @member {String} url
 */

License.prototype['url'] = undefined;
var _default = License;
exports["default"] = _default;