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
 * The Blob model module.
 * @module model/Blob
 * @version 0.0.5
 */
var Blob = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Blob</code>.
   * Blob
   * @alias module:model/Blob
   * @param content {String} 
   * @param encoding {String} 
   * @param nodeId {String} 
   * @param sha {String} 
   * @param size {Number} 
   * @param url {String} 
   */
  function Blob(content, encoding, nodeId, sha, size, url) {
    _classCallCheck(this, Blob);

    Blob.initialize(this, content, encoding, nodeId, sha, size, url);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Blob, null, [{
    key: "initialize",
    value: function initialize(obj, content, encoding, nodeId, sha, size, url) {
      obj['content'] = content;
      obj['encoding'] = encoding;
      obj['node_id'] = nodeId;
      obj['sha'] = sha;
      obj['size'] = size;
      obj['url'] = url;
    }
    /**
     * Constructs a <code>Blob</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Blob} obj Optional instance to populate.
     * @return {module:model/Blob} The populated <code>Blob</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Blob();

        if (data.hasOwnProperty('content')) {
          obj['content'] = _ApiClient["default"].convertToType(data['content'], 'String');
        }

        if (data.hasOwnProperty('encoding')) {
          obj['encoding'] = _ApiClient["default"].convertToType(data['encoding'], 'String');
        }

        if (data.hasOwnProperty('highlighted_content')) {
          obj['highlighted_content'] = _ApiClient["default"].convertToType(data['highlighted_content'], 'String');
        }

        if (data.hasOwnProperty('node_id')) {
          obj['node_id'] = _ApiClient["default"].convertToType(data['node_id'], 'String');
        }

        if (data.hasOwnProperty('sha')) {
          obj['sha'] = _ApiClient["default"].convertToType(data['sha'], 'String');
        }

        if (data.hasOwnProperty('size')) {
          obj['size'] = _ApiClient["default"].convertToType(data['size'], 'Number');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Blob;
}();
/**
 * @member {String} content
 */


Blob.prototype['content'] = undefined;
/**
 * @member {String} encoding
 */

Blob.prototype['encoding'] = undefined;
/**
 * @member {String} highlighted_content
 */

Blob.prototype['highlighted_content'] = undefined;
/**
 * @member {String} node_id
 */

Blob.prototype['node_id'] = undefined;
/**
 * @member {String} sha
 */

Blob.prototype['sha'] = undefined;
/**
 * @member {Number} size
 */

Blob.prototype['size'] = undefined;
/**
 * @member {String} url
 */

Blob.prototype['url'] = undefined;
var _default = Blob;
exports["default"] = _default;