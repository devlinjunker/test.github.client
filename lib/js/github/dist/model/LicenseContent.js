"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ContentFileLinks = _interopRequireDefault(require("./ContentFileLinks"));

var _LicenseSimple = _interopRequireDefault(require("./LicenseSimple"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The LicenseContent model module.
 * @module model/LicenseContent
 * @version 0.0.5
 */
var LicenseContent = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LicenseContent</code>.
   * License Content
   * @alias module:model/LicenseContent
   * @param links {module:model/ContentFileLinks} 
   * @param content {String} 
   * @param downloadUrl {String} 
   * @param encoding {String} 
   * @param gitUrl {String} 
   * @param htmlUrl {String} 
   * @param license {module:model/LicenseSimple} 
   * @param name {String} 
   * @param path {String} 
   * @param sha {String} 
   * @param size {Number} 
   * @param type {String} 
   * @param url {String} 
   */
  function LicenseContent(links, content, downloadUrl, encoding, gitUrl, htmlUrl, license, name, path, sha, size, type, url) {
    _classCallCheck(this, LicenseContent);

    LicenseContent.initialize(this, links, content, downloadUrl, encoding, gitUrl, htmlUrl, license, name, path, sha, size, type, url);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LicenseContent, null, [{
    key: "initialize",
    value: function initialize(obj, links, content, downloadUrl, encoding, gitUrl, htmlUrl, license, name, path, sha, size, type, url) {
      obj['_links'] = links;
      obj['content'] = content;
      obj['download_url'] = downloadUrl;
      obj['encoding'] = encoding;
      obj['git_url'] = gitUrl;
      obj['html_url'] = htmlUrl;
      obj['license'] = license;
      obj['name'] = name;
      obj['path'] = path;
      obj['sha'] = sha;
      obj['size'] = size;
      obj['type'] = type;
      obj['url'] = url;
    }
    /**
     * Constructs a <code>LicenseContent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LicenseContent} obj Optional instance to populate.
     * @return {module:model/LicenseContent} The populated <code>LicenseContent</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LicenseContent();

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

        if (data.hasOwnProperty('license')) {
          obj['license'] = _ApiClient["default"].convertToType(data['license'], _LicenseSimple["default"]);
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

  return LicenseContent;
}();
/**
 * @member {module:model/ContentFileLinks} _links
 */


LicenseContent.prototype['_links'] = undefined;
/**
 * @member {String} content
 */

LicenseContent.prototype['content'] = undefined;
/**
 * @member {String} download_url
 */

LicenseContent.prototype['download_url'] = undefined;
/**
 * @member {String} encoding
 */

LicenseContent.prototype['encoding'] = undefined;
/**
 * @member {String} git_url
 */

LicenseContent.prototype['git_url'] = undefined;
/**
 * @member {String} html_url
 */

LicenseContent.prototype['html_url'] = undefined;
/**
 * @member {module:model/LicenseSimple} license
 */

LicenseContent.prototype['license'] = undefined;
/**
 * @member {String} name
 */

LicenseContent.prototype['name'] = undefined;
/**
 * @member {String} path
 */

LicenseContent.prototype['path'] = undefined;
/**
 * @member {String} sha
 */

LicenseContent.prototype['sha'] = undefined;
/**
 * @member {Number} size
 */

LicenseContent.prototype['size'] = undefined;
/**
 * @member {String} type
 */

LicenseContent.prototype['type'] = undefined;
/**
 * @member {String} url
 */

LicenseContent.prototype['url'] = undefined;
var _default = LicenseContent;
exports["default"] = _default;