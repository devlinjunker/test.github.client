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
 * The ReleaseAsset model module.
 * @module model/ReleaseAsset
 * @version 0.0.5
 */
var ReleaseAsset = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ReleaseAsset</code>.
   * Data related to a release.
   * @alias module:model/ReleaseAsset
   * @param browserDownloadUrl {String} 
   * @param contentType {String} 
   * @param createdAt {Date} 
   * @param downloadCount {Number} 
   * @param id {Number} 
   * @param label {String} 
   * @param name {String} The file name of the asset.
   * @param nodeId {String} 
   * @param size {Number} 
   * @param state {module:model/ReleaseAsset.StateEnum} State of the release asset.
   * @param updatedAt {Date} 
   * @param uploader {module:model/SimpleUser} 
   * @param url {String} 
   */
  function ReleaseAsset(browserDownloadUrl, contentType, createdAt, downloadCount, id, label, name, nodeId, size, state, updatedAt, uploader, url) {
    _classCallCheck(this, ReleaseAsset);

    ReleaseAsset.initialize(this, browserDownloadUrl, contentType, createdAt, downloadCount, id, label, name, nodeId, size, state, updatedAt, uploader, url);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ReleaseAsset, null, [{
    key: "initialize",
    value: function initialize(obj, browserDownloadUrl, contentType, createdAt, downloadCount, id, label, name, nodeId, size, state, updatedAt, uploader, url) {
      obj['browser_download_url'] = browserDownloadUrl;
      obj['content_type'] = contentType;
      obj['created_at'] = createdAt;
      obj['download_count'] = downloadCount;
      obj['id'] = id;
      obj['label'] = label;
      obj['name'] = name;
      obj['node_id'] = nodeId;
      obj['size'] = size;
      obj['state'] = state;
      obj['updated_at'] = updatedAt;
      obj['uploader'] = uploader;
      obj['url'] = url;
    }
    /**
     * Constructs a <code>ReleaseAsset</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReleaseAsset} obj Optional instance to populate.
     * @return {module:model/ReleaseAsset} The populated <code>ReleaseAsset</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ReleaseAsset();

        if (data.hasOwnProperty('browser_download_url')) {
          obj['browser_download_url'] = _ApiClient["default"].convertToType(data['browser_download_url'], 'String');
        }

        if (data.hasOwnProperty('content_type')) {
          obj['content_type'] = _ApiClient["default"].convertToType(data['content_type'], 'String');
        }

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'Date');
        }

        if (data.hasOwnProperty('download_count')) {
          obj['download_count'] = _ApiClient["default"].convertToType(data['download_count'], 'Number');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('label')) {
          obj['label'] = _ApiClient["default"].convertToType(data['label'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('node_id')) {
          obj['node_id'] = _ApiClient["default"].convertToType(data['node_id'], 'String');
        }

        if (data.hasOwnProperty('size')) {
          obj['size'] = _ApiClient["default"].convertToType(data['size'], 'Number');
        }

        if (data.hasOwnProperty('state')) {
          obj['state'] = _ApiClient["default"].convertToType(data['state'], 'String');
        }

        if (data.hasOwnProperty('updated_at')) {
          obj['updated_at'] = _ApiClient["default"].convertToType(data['updated_at'], 'Date');
        }

        if (data.hasOwnProperty('uploader')) {
          obj['uploader'] = _ApiClient["default"].convertToType(data['uploader'], _SimpleUser["default"]);
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ReleaseAsset;
}();
/**
 * @member {String} browser_download_url
 */


ReleaseAsset.prototype['browser_download_url'] = undefined;
/**
 * @member {String} content_type
 */

ReleaseAsset.prototype['content_type'] = undefined;
/**
 * @member {Date} created_at
 */

ReleaseAsset.prototype['created_at'] = undefined;
/**
 * @member {Number} download_count
 */

ReleaseAsset.prototype['download_count'] = undefined;
/**
 * @member {Number} id
 */

ReleaseAsset.prototype['id'] = undefined;
/**
 * @member {String} label
 */

ReleaseAsset.prototype['label'] = undefined;
/**
 * The file name of the asset.
 * @member {String} name
 */

ReleaseAsset.prototype['name'] = undefined;
/**
 * @member {String} node_id
 */

ReleaseAsset.prototype['node_id'] = undefined;
/**
 * @member {Number} size
 */

ReleaseAsset.prototype['size'] = undefined;
/**
 * State of the release asset.
 * @member {module:model/ReleaseAsset.StateEnum} state
 */

ReleaseAsset.prototype['state'] = undefined;
/**
 * @member {Date} updated_at
 */

ReleaseAsset.prototype['updated_at'] = undefined;
/**
 * @member {module:model/SimpleUser} uploader
 */

ReleaseAsset.prototype['uploader'] = undefined;
/**
 * @member {String} url
 */

ReleaseAsset.prototype['url'] = undefined;
/**
 * Allowed values for the <code>state</code> property.
 * @enum {String}
 * @readonly
 */

ReleaseAsset['StateEnum'] = {
  /**
   * value: "uploaded"
   * @const
   */
  "uploaded": "uploaded"
};
var _default = ReleaseAsset;
exports["default"] = _default;