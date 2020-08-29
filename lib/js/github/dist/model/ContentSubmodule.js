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
 * The ContentSubmodule model module.
 * @module model/ContentSubmodule
 * @version 0.0.5
 */
var ContentSubmodule = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ContentSubmodule</code>.
   * An object describing a symlink
   * @alias module:model/ContentSubmodule
   * @param links {module:model/ContentFileLinks} 
   * @param downloadUrl {String} 
   * @param gitUrl {String} 
   * @param htmlUrl {String} 
   * @param name {String} 
   * @param path {String} 
   * @param sha {String} 
   * @param size {Number} 
   * @param submoduleGitUrl {String} 
   * @param type {String} 
   * @param url {String} 
   */
  function ContentSubmodule(links, downloadUrl, gitUrl, htmlUrl, name, path, sha, size, submoduleGitUrl, type, url) {
    _classCallCheck(this, ContentSubmodule);

    ContentSubmodule.initialize(this, links, downloadUrl, gitUrl, htmlUrl, name, path, sha, size, submoduleGitUrl, type, url);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ContentSubmodule, null, [{
    key: "initialize",
    value: function initialize(obj, links, downloadUrl, gitUrl, htmlUrl, name, path, sha, size, submoduleGitUrl, type, url) {
      obj['_links'] = links;
      obj['download_url'] = downloadUrl;
      obj['git_url'] = gitUrl;
      obj['html_url'] = htmlUrl;
      obj['name'] = name;
      obj['path'] = path;
      obj['sha'] = sha;
      obj['size'] = size;
      obj['submodule_git_url'] = submoduleGitUrl;
      obj['type'] = type;
      obj['url'] = url;
    }
    /**
     * Constructs a <code>ContentSubmodule</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ContentSubmodule} obj Optional instance to populate.
     * @return {module:model/ContentSubmodule} The populated <code>ContentSubmodule</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ContentSubmodule();

        if (data.hasOwnProperty('_links')) {
          obj['_links'] = _ContentFileLinks["default"].constructFromObject(data['_links']);
        }

        if (data.hasOwnProperty('download_url')) {
          obj['download_url'] = _ApiClient["default"].convertToType(data['download_url'], 'String');
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

  return ContentSubmodule;
}();
/**
 * @member {module:model/ContentFileLinks} _links
 */


ContentSubmodule.prototype['_links'] = undefined;
/**
 * @member {String} download_url
 */

ContentSubmodule.prototype['download_url'] = undefined;
/**
 * @member {String} git_url
 */

ContentSubmodule.prototype['git_url'] = undefined;
/**
 * @member {String} html_url
 */

ContentSubmodule.prototype['html_url'] = undefined;
/**
 * @member {String} name
 */

ContentSubmodule.prototype['name'] = undefined;
/**
 * @member {String} path
 */

ContentSubmodule.prototype['path'] = undefined;
/**
 * @member {String} sha
 */

ContentSubmodule.prototype['sha'] = undefined;
/**
 * @member {Number} size
 */

ContentSubmodule.prototype['size'] = undefined;
/**
 * @member {String} submodule_git_url
 */

ContentSubmodule.prototype['submodule_git_url'] = undefined;
/**
 * @member {String} type
 */

ContentSubmodule.prototype['type'] = undefined;
/**
 * @member {String} url
 */

ContentSubmodule.prototype['url'] = undefined;
var _default = ContentSubmodule;
exports["default"] = _default;