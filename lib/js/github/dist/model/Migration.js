"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AnyType = _interopRequireDefault(require("./AnyType"));

var _Repository = _interopRequireDefault(require("./Repository"));

var _SimpleUser = _interopRequireDefault(require("./SimpleUser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Migration model module.
 * @module model/Migration
 * @version 0.0.5
 */
var Migration = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Migration</code>.
   * A migration.
   * @alias module:model/Migration
   * @param createdAt {Date} 
   * @param excludeAttachments {Boolean} 
   * @param guid {String} 
   * @param id {Number} 
   * @param lockRepositories {Boolean} 
   * @param nodeId {String} 
   * @param owner {module:model/SimpleUser} 
   * @param repositories {Array.<module:model/Repository>} 
   * @param state {String} 
   * @param updatedAt {Date} 
   * @param url {String} 
   */
  function Migration(createdAt, excludeAttachments, guid, id, lockRepositories, nodeId, owner, repositories, state, updatedAt, url) {
    _classCallCheck(this, Migration);

    Migration.initialize(this, createdAt, excludeAttachments, guid, id, lockRepositories, nodeId, owner, repositories, state, updatedAt, url);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Migration, null, [{
    key: "initialize",
    value: function initialize(obj, createdAt, excludeAttachments, guid, id, lockRepositories, nodeId, owner, repositories, state, updatedAt, url) {
      obj['created_at'] = createdAt;
      obj['exclude_attachments'] = excludeAttachments;
      obj['guid'] = guid;
      obj['id'] = id;
      obj['lock_repositories'] = lockRepositories;
      obj['node_id'] = nodeId;
      obj['owner'] = owner;
      obj['repositories'] = repositories;
      obj['state'] = state;
      obj['updated_at'] = updatedAt;
      obj['url'] = url;
    }
    /**
     * Constructs a <code>Migration</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Migration} obj Optional instance to populate.
     * @return {module:model/Migration} The populated <code>Migration</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Migration();

        if (data.hasOwnProperty('archive_url')) {
          obj['archive_url'] = _ApiClient["default"].convertToType(data['archive_url'], 'String');
        }

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'Date');
        }

        if (data.hasOwnProperty('exclude')) {
          obj['exclude'] = _ApiClient["default"].convertToType(data['exclude'], [_AnyType["default"]]);
        }

        if (data.hasOwnProperty('exclude_attachments')) {
          obj['exclude_attachments'] = _ApiClient["default"].convertToType(data['exclude_attachments'], 'Boolean');
        }

        if (data.hasOwnProperty('guid')) {
          obj['guid'] = _ApiClient["default"].convertToType(data['guid'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('lock_repositories')) {
          obj['lock_repositories'] = _ApiClient["default"].convertToType(data['lock_repositories'], 'Boolean');
        }

        if (data.hasOwnProperty('node_id')) {
          obj['node_id'] = _ApiClient["default"].convertToType(data['node_id'], 'String');
        }

        if (data.hasOwnProperty('owner')) {
          obj['owner'] = _ApiClient["default"].convertToType(data['owner'], _SimpleUser["default"]);
        }

        if (data.hasOwnProperty('repositories')) {
          obj['repositories'] = _ApiClient["default"].convertToType(data['repositories'], [_Repository["default"]]);
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

  return Migration;
}();
/**
 * @member {String} archive_url
 */


Migration.prototype['archive_url'] = undefined;
/**
 * @member {Date} created_at
 */

Migration.prototype['created_at'] = undefined;
/**
 * @member {Array.<module:model/AnyType>} exclude
 */

Migration.prototype['exclude'] = undefined;
/**
 * @member {Boolean} exclude_attachments
 */

Migration.prototype['exclude_attachments'] = undefined;
/**
 * @member {String} guid
 */

Migration.prototype['guid'] = undefined;
/**
 * @member {Number} id
 */

Migration.prototype['id'] = undefined;
/**
 * @member {Boolean} lock_repositories
 */

Migration.prototype['lock_repositories'] = undefined;
/**
 * @member {String} node_id
 */

Migration.prototype['node_id'] = undefined;
/**
 * @member {module:model/SimpleUser} owner
 */

Migration.prototype['owner'] = undefined;
/**
 * @member {Array.<module:model/Repository>} repositories
 */

Migration.prototype['repositories'] = undefined;
/**
 * @member {String} state
 */

Migration.prototype['state'] = undefined;
/**
 * @member {Date} updated_at
 */

Migration.prototype['updated_at'] = undefined;
/**
 * @member {String} url
 */

Migration.prototype['url'] = undefined;
var _default = Migration;
exports["default"] = _default;