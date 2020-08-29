"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _MinimalRepository = _interopRequireDefault(require("./MinimalRepository"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CodeSearchResultItem model module.
 * @module model/CodeSearchResultItem
 * @version 0.0.5
 */
var CodeSearchResultItem = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CodeSearchResultItem</code>.
   * Code Search Result Item
   * @alias module:model/CodeSearchResultItem
   * @param gitUrl {String} 
   * @param htmlUrl {String} 
   * @param name {String} 
   * @param path {String} 
   * @param repository {module:model/MinimalRepository} 
   * @param score {Number} 
   * @param sha {String} 
   * @param url {String} 
   */
  function CodeSearchResultItem(gitUrl, htmlUrl, name, path, repository, score, sha, url) {
    _classCallCheck(this, CodeSearchResultItem);

    CodeSearchResultItem.initialize(this, gitUrl, htmlUrl, name, path, repository, score, sha, url);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CodeSearchResultItem, null, [{
    key: "initialize",
    value: function initialize(obj, gitUrl, htmlUrl, name, path, repository, score, sha, url) {
      obj['git_url'] = gitUrl;
      obj['html_url'] = htmlUrl;
      obj['name'] = name;
      obj['path'] = path;
      obj['repository'] = repository;
      obj['score'] = score;
      obj['sha'] = sha;
      obj['url'] = url;
    }
    /**
     * Constructs a <code>CodeSearchResultItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CodeSearchResultItem} obj Optional instance to populate.
     * @return {module:model/CodeSearchResultItem} The populated <code>CodeSearchResultItem</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CodeSearchResultItem();

        if (data.hasOwnProperty('file_size')) {
          obj['file_size'] = _ApiClient["default"].convertToType(data['file_size'], 'Number');
        }

        if (data.hasOwnProperty('git_url')) {
          obj['git_url'] = _ApiClient["default"].convertToType(data['git_url'], 'String');
        }

        if (data.hasOwnProperty('html_url')) {
          obj['html_url'] = _ApiClient["default"].convertToType(data['html_url'], 'String');
        }

        if (data.hasOwnProperty('language')) {
          obj['language'] = _ApiClient["default"].convertToType(data['language'], 'String');
        }

        if (data.hasOwnProperty('last_modified_at')) {
          obj['last_modified_at'] = _ApiClient["default"].convertToType(data['last_modified_at'], 'Date');
        }

        if (data.hasOwnProperty('line_numbers')) {
          obj['line_numbers'] = _ApiClient["default"].convertToType(data['line_numbers'], ['String']);
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('path')) {
          obj['path'] = _ApiClient["default"].convertToType(data['path'], 'String');
        }

        if (data.hasOwnProperty('repository')) {
          obj['repository'] = _MinimalRepository["default"].constructFromObject(data['repository']);
        }

        if (data.hasOwnProperty('score')) {
          obj['score'] = _ApiClient["default"].convertToType(data['score'], 'Number');
        }

        if (data.hasOwnProperty('sha')) {
          obj['sha'] = _ApiClient["default"].convertToType(data['sha'], 'String');
        }

        if (data.hasOwnProperty('text_matches')) {
          obj['text_matches'] = _ApiClient["default"].convertToType(data['text_matches'], [Object]);
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CodeSearchResultItem;
}();
/**
 * @member {Number} file_size
 */


CodeSearchResultItem.prototype['file_size'] = undefined;
/**
 * @member {String} git_url
 */

CodeSearchResultItem.prototype['git_url'] = undefined;
/**
 * @member {String} html_url
 */

CodeSearchResultItem.prototype['html_url'] = undefined;
/**
 * @member {String} language
 */

CodeSearchResultItem.prototype['language'] = undefined;
/**
 * @member {Date} last_modified_at
 */

CodeSearchResultItem.prototype['last_modified_at'] = undefined;
/**
 * @member {Array.<String>} line_numbers
 */

CodeSearchResultItem.prototype['line_numbers'] = undefined;
/**
 * @member {String} name
 */

CodeSearchResultItem.prototype['name'] = undefined;
/**
 * @member {String} path
 */

CodeSearchResultItem.prototype['path'] = undefined;
/**
 * @member {module:model/MinimalRepository} repository
 */

CodeSearchResultItem.prototype['repository'] = undefined;
/**
 * @member {Number} score
 */

CodeSearchResultItem.prototype['score'] = undefined;
/**
 * @member {String} sha
 */

CodeSearchResultItem.prototype['sha'] = undefined;
/**
 * @member {Array.<Object>} text_matches
 */

CodeSearchResultItem.prototype['text_matches'] = undefined;
/**
 * @member {String} url
 */

CodeSearchResultItem.prototype['url'] = undefined;
var _default = CodeSearchResultItem;
exports["default"] = _default;