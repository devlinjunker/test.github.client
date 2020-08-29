"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ContentFileLinks = _interopRequireDefault(require("./ContentFileLinks"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ContentFile model module.
 * @module model/ContentFile
 * @version 0.0.5
 */
var ContentFile = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ContentFile</code>.
   * Content File
   * @alias module:model/ContentFile
   * @param links {module:model/ContentFileLinks} 
   * @param content {String} 
   * @param downloadUrl {String} 
   * @param encoding {String} 
   * @param gitUrl {String} 
   * @param htmlUrl {String} 
   * @param name {String} 
   * @param path {String} 
   * @param sha {String} 
   * @param size {Number} 
   * @param type {String} 
   * @param url {String} 
   */
  function ContentFile(links, content, downloadUrl, encoding, gitUrl, htmlUrl, name, path, sha, size, type, url) {
    _classCallCheck(this, ContentFile);

    ContentFile.initialize(this, links, content, downloadUrl, encoding, gitUrl, htmlUrl, name, path, sha, size, type, url);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ContentFile, null, [{
    key: "initialize",
    value: function initialize(obj, links, content, downloadUrl, encoding, gitUrl, htmlUrl, name, path, sha, size, type, url) {
      obj['_links'] = links;
      obj['content'] = content;
      obj['download_url'] = downloadUrl;
      obj['encoding'] = encoding;
      obj['git_url'] = gitUrl;
      obj['html_url'] = htmlUrl;
      obj['name'] = name;
      obj['path'] = path;
      obj['sha'] = sha;
      obj['size'] = size;
      obj['type'] = type;
      obj['url'] = url;
    }
    /**
     * Constructs a <code>ContentFile</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ContentFile} obj Optional instance to populate.
     * @return {module:model/ContentFile} The populated <code>ContentFile</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ContentFile();

        if (data.hasOwnProperty('_links')) {
          obj['_links'] = _ContentFileLinks["default"].constructFromObject(data['_links']);
        }

        if (data.hasOwnProperty('content')) {
          obj['content'] = _ApiClient["default"].convertToType(data['content'], 'String');
        }

        if (data.hasOwnProperty('download_url')) {
          obj['download_url'] = _ApiClient["default"].convertToType(data['download_url'], 'String');
        }

        if (data.hasOwnProperty('encoding')) {
          obj['encoding'] = _ApiClient["default"].convertToType(data['encoding'], 'String');
        }

        if (data.hasOwnProperty('git_url')) {
          obj['git_url'] = _ApiClient["default"].convertToType(data['git_url'], 'String');
        }

        if (data.hasOwnProperty('html_url')) {
          obj['html_url'] = _ApiClient["default"].convertToType(data['html_url'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('path')) {
          obj['path'] = _ApiClient["default"].convertToType(data['path'], 'String');
        }

        if (data.hasOwnProperty('sha')) {
          obj['sha'] = _ApiClient["default"].convertToType(data['sha'], 'String');
        }

        if (data.hasOwnProperty('size')) {
          obj['size'] = _ApiClient["default"].convertToType(data['size'], 'Number');
        }

        if (data.hasOwnProperty('submodule_git_url')) {
          obj['submodule_git_url'] = _ApiClient["default"].convertToType(data['submodule_git_url'], 'String');
        }

        if (data.hasOwnProperty('target')) {
          obj['target'] = _ApiClient["default"].convertToType(data['target'], 'String');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ContentFile;
}();
/**
 * @member {module:model/ContentFileLinks} _links
 */


ContentFile.prototype['_links'] = undefined;
/**
 * @member {String} content
 */

ContentFile.prototype['content'] = undefined;
/**
 * @member {String} download_url
 */

ContentFile.prototype['download_url'] = undefined;
/**
 * @member {String} encoding
 */

ContentFile.prototype['encoding'] = undefined;
/**
 * @member {String} git_url
 */

ContentFile.prototype['git_url'] = undefined;
/**
 * @member {String} html_url
 */

ContentFile.prototype['html_url'] = undefined;
/**
 * @member {String} name
 */

ContentFile.prototype['name'] = undefined;
/**
 * @member {String} path
 */

ContentFile.prototype['path'] = undefined;
/**
 * @member {String} sha
 */

ContentFile.prototype['sha'] = undefined;
/**
 * @member {Number} size
 */

ContentFile.prototype['size'] = undefined;
/**
 * @member {String} submodule_git_url
 */

ContentFile.prototype['submodule_git_url'] = undefined;
/**
 * @member {String} target
 */

ContentFile.prototype['target'] = undefined;
/**
 * @member {String} type
 */

ContentFile.prototype['type'] = undefined;
/**
 * @member {String} url
 */

ContentFile.prototype['url'] = undefined;
var _default = ContentFile;
exports["default"] = _default;