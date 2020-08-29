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
 * The SimpleCommitStatus model module.
 * @module model/SimpleCommitStatus
 * @version 0.0.5
 */
var SimpleCommitStatus = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SimpleCommitStatus</code>.
   * @alias module:model/SimpleCommitStatus
   * @param avatarUrl {String} 
   * @param context {String} 
   * @param createdAt {Date} 
   * @param description {String} 
   * @param id {Number} 
   * @param nodeId {String} 
   * @param state {String} 
   * @param targetUrl {String} 
   * @param updatedAt {Date} 
   * @param url {String} 
   */
  function SimpleCommitStatus(avatarUrl, context, createdAt, description, id, nodeId, state, targetUrl, updatedAt, url) {
    _classCallCheck(this, SimpleCommitStatus);

    SimpleCommitStatus.initialize(this, avatarUrl, context, createdAt, description, id, nodeId, state, targetUrl, updatedAt, url);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SimpleCommitStatus, null, [{
    key: "initialize",
    value: function initialize(obj, avatarUrl, context, createdAt, description, id, nodeId, state, targetUrl, updatedAt, url) {
      obj['avatar_url'] = avatarUrl;
      obj['context'] = context;
      obj['created_at'] = createdAt;
      obj['description'] = description;
      obj['id'] = id;
      obj['node_id'] = nodeId;
      obj['state'] = state;
      obj['target_url'] = targetUrl;
      obj['updated_at'] = updatedAt;
      obj['url'] = url;
    }
    /**
     * Constructs a <code>SimpleCommitStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SimpleCommitStatus} obj Optional instance to populate.
     * @return {module:model/SimpleCommitStatus} The populated <code>SimpleCommitStatus</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SimpleCommitStatus();

        if (data.hasOwnProperty('avatar_url')) {
          obj['avatar_url'] = _ApiClient["default"].convertToType(data['avatar_url'], 'String');
        }

        if (data.hasOwnProperty('context')) {
          obj['context'] = _ApiClient["default"].convertToType(data['context'], 'String');
        }

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'Date');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('node_id')) {
          obj['node_id'] = _ApiClient["default"].convertToType(data['node_id'], 'String');
        }

        if (data.hasOwnProperty('required')) {
          obj['required'] = _ApiClient["default"].convertToType(data['required'], 'Boolean');
        }

        if (data.hasOwnProperty('state')) {
          obj['state'] = _ApiClient["default"].convertToType(data['state'], 'String');
        }

        if (data.hasOwnProperty('target_url')) {
          obj['target_url'] = _ApiClient["default"].convertToType(data['target_url'], 'String');
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

  return SimpleCommitStatus;
}();
/**
 * @member {String} avatar_url
 */


SimpleCommitStatus.prototype['avatar_url'] = undefined;
/**
 * @member {String} context
 */

SimpleCommitStatus.prototype['context'] = undefined;
/**
 * @member {Date} created_at
 */

SimpleCommitStatus.prototype['created_at'] = undefined;
/**
 * @member {String} description
 */

SimpleCommitStatus.prototype['description'] = undefined;
/**
 * @member {Number} id
 */

SimpleCommitStatus.prototype['id'] = undefined;
/**
 * @member {String} node_id
 */

SimpleCommitStatus.prototype['node_id'] = undefined;
/**
 * @member {Boolean} required
 */

SimpleCommitStatus.prototype['required'] = undefined;
/**
 * @member {String} state
 */

SimpleCommitStatus.prototype['state'] = undefined;
/**
 * @member {String} target_url
 */

SimpleCommitStatus.prototype['target_url'] = undefined;
/**
 * @member {Date} updated_at
 */

SimpleCommitStatus.prototype['updated_at'] = undefined;
/**
 * @member {String} url
 */

SimpleCommitStatus.prototype['url'] = undefined;
var _default = SimpleCommitStatus;
exports["default"] = _default;