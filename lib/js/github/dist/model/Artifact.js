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
 * The Artifact model module.
 * @module model/Artifact
 * @version 0.0.5
 */
var Artifact = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Artifact</code>.
   * An artifact
   * @alias module:model/Artifact
   * @param archiveDownloadUrl {String} 
   * @param createdAt {Date} 
   * @param expired {Boolean} Whether or not the artifact has expired.
   * @param expiresAt {String} 
   * @param id {Number} 
   * @param name {String} The name of the artifact.
   * @param nodeId {String} 
   * @param sizeInBytes {Number} The size in bytes of the artifact.
   * @param updatedAt {Date} 
   * @param url {String} 
   */
  function Artifact(archiveDownloadUrl, createdAt, expired, expiresAt, id, name, nodeId, sizeInBytes, updatedAt, url) {
    _classCallCheck(this, Artifact);

    Artifact.initialize(this, archiveDownloadUrl, createdAt, expired, expiresAt, id, name, nodeId, sizeInBytes, updatedAt, url);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Artifact, null, [{
    key: "initialize",
    value: function initialize(obj, archiveDownloadUrl, createdAt, expired, expiresAt, id, name, nodeId, sizeInBytes, updatedAt, url) {
      obj['archive_download_url'] = archiveDownloadUrl;
      obj['created_at'] = createdAt;
      obj['expired'] = expired;
      obj['expires_at'] = expiresAt;
      obj['id'] = id;
      obj['name'] = name;
      obj['node_id'] = nodeId;
      obj['size_in_bytes'] = sizeInBytes;
      obj['updated_at'] = updatedAt;
      obj['url'] = url;
    }
    /**
     * Constructs a <code>Artifact</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Artifact} obj Optional instance to populate.
     * @return {module:model/Artifact} The populated <code>Artifact</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Artifact();

        if (data.hasOwnProperty('archive_download_url')) {
          obj['archive_download_url'] = _ApiClient["default"].convertToType(data['archive_download_url'], 'String');
        }

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'Date');
        }

        if (data.hasOwnProperty('expired')) {
          obj['expired'] = _ApiClient["default"].convertToType(data['expired'], 'Boolean');
        }

        if (data.hasOwnProperty('expires_at')) {
          obj['expires_at'] = _ApiClient["default"].convertToType(data['expires_at'], 'String');
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

        if (data.hasOwnProperty('size_in_bytes')) {
          obj['size_in_bytes'] = _ApiClient["default"].convertToType(data['size_in_bytes'], 'Number');
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

  return Artifact;
}();
/**
 * @member {String} archive_download_url
 */


Artifact.prototype['archive_download_url'] = undefined;
/**
 * @member {Date} created_at
 */

Artifact.prototype['created_at'] = undefined;
/**
 * Whether or not the artifact has expired.
 * @member {Boolean} expired
 */

Artifact.prototype['expired'] = undefined;
/**
 * @member {String} expires_at
 */

Artifact.prototype['expires_at'] = undefined;
/**
 * @member {Number} id
 */

Artifact.prototype['id'] = undefined;
/**
 * The name of the artifact.
 * @member {String} name
 */

Artifact.prototype['name'] = undefined;
/**
 * @member {String} node_id
 */

Artifact.prototype['node_id'] = undefined;
/**
 * The size in bytes of the artifact.
 * @member {Number} size_in_bytes
 */

Artifact.prototype['size_in_bytes'] = undefined;
/**
 * @member {Date} updated_at
 */

Artifact.prototype['updated_at'] = undefined;
/**
 * @member {String} url
 */

Artifact.prototype['url'] = undefined;
var _default = Artifact;
exports["default"] = _default;