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
 * The Enterprise model module.
 * @module model/Enterprise
 * @version 0.0.5
 */
var Enterprise = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Enterprise</code>.
   * An enterprise account
   * @alias module:model/Enterprise
   * @param avatarUrl {String} 
   * @param createdAt {Date} 
   * @param htmlUrl {String} 
   * @param id {Number} Unique identifier of the enterprise
   * @param name {String} The name of the enterprise.
   * @param nodeId {String} 
   * @param slug {String} The slug url identifier for the enterprise.
   * @param updatedAt {Date} 
   */
  function Enterprise(avatarUrl, createdAt, htmlUrl, id, name, nodeId, slug, updatedAt) {
    _classCallCheck(this, Enterprise);

    Enterprise.initialize(this, avatarUrl, createdAt, htmlUrl, id, name, nodeId, slug, updatedAt);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Enterprise, null, [{
    key: "initialize",
    value: function initialize(obj, avatarUrl, createdAt, htmlUrl, id, name, nodeId, slug, updatedAt) {
      obj['avatar_url'] = avatarUrl;
      obj['created_at'] = createdAt;
      obj['html_url'] = htmlUrl;
      obj['id'] = id;
      obj['name'] = name;
      obj['node_id'] = nodeId;
      obj['slug'] = slug;
      obj['updated_at'] = updatedAt;
    }
    /**
     * Constructs a <code>Enterprise</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Enterprise} obj Optional instance to populate.
     * @return {module:model/Enterprise} The populated <code>Enterprise</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Enterprise();

        if (data.hasOwnProperty('avatar_url')) {
          obj['avatar_url'] = _ApiClient["default"].convertToType(data['avatar_url'], 'String');
        }

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'Date');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
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

        if (data.hasOwnProperty('slug')) {
          obj['slug'] = _ApiClient["default"].convertToType(data['slug'], 'String');
        }

        if (data.hasOwnProperty('updated_at')) {
          obj['updated_at'] = _ApiClient["default"].convertToType(data['updated_at'], 'Date');
        }

        if (data.hasOwnProperty('website_url')) {
          obj['website_url'] = _ApiClient["default"].convertToType(data['website_url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Enterprise;
}();
/**
 * @member {String} avatar_url
 */


Enterprise.prototype['avatar_url'] = undefined;
/**
 * @member {Date} created_at
 */

Enterprise.prototype['created_at'] = undefined;
/**
 * A short description of the enterprise.
 * @member {String} description
 */

Enterprise.prototype['description'] = undefined;
/**
 * @member {String} html_url
 */

Enterprise.prototype['html_url'] = undefined;
/**
 * Unique identifier of the enterprise
 * @member {Number} id
 */

Enterprise.prototype['id'] = undefined;
/**
 * The name of the enterprise.
 * @member {String} name
 */

Enterprise.prototype['name'] = undefined;
/**
 * @member {String} node_id
 */

Enterprise.prototype['node_id'] = undefined;
/**
 * The slug url identifier for the enterprise.
 * @member {String} slug
 */

Enterprise.prototype['slug'] = undefined;
/**
 * @member {Date} updated_at
 */

Enterprise.prototype['updated_at'] = undefined;
/**
 * The enterprise's website URL.
 * @member {String} website_url
 */

Enterprise.prototype['website_url'] = undefined;
var _default = Enterprise;
exports["default"] = _default;