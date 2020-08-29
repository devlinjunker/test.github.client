"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _FileCommitContentLinks = _interopRequireDefault(require("./FileCommitContentLinks"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The FileCommitContent model module.
 * @module model/FileCommitContent
 * @version 0.0.5
 */
var FileCommitContent = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>FileCommitContent</code>.
   * @alias module:model/FileCommitContent
   */
  function FileCommitContent() {
    _classCallCheck(this, FileCommitContent);

    FileCommitContent.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(FileCommitContent, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>FileCommitContent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FileCommitContent} obj Optional instance to populate.
     * @return {module:model/FileCommitContent} The populated <code>FileCommitContent</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new FileCommitContent();

        if (data.hasOwnProperty('_links')) {
          obj['_links'] = _FileCommitContentLinks["default"].constructFromObject(data['_links']);
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

  return FileCommitContent;
}();
/**
 * @member {module:model/FileCommitContentLinks} _links
 */


FileCommitContent.prototype['_links'] = undefined;
/**
 * @member {String} download_url
 */

FileCommitContent.prototype['download_url'] = undefined;
/**
 * @member {String} git_url
 */

FileCommitContent.prototype['git_url'] = undefined;
/**
 * @member {String} html_url
 */

FileCommitContent.prototype['html_url'] = undefined;
/**
 * @member {String} name
 */

FileCommitContent.prototype['name'] = undefined;
/**
 * @member {String} path
 */

FileCommitContent.prototype['path'] = undefined;
/**
 * @member {String} sha
 */

FileCommitContent.prototype['sha'] = undefined;
/**
 * @member {Number} size
 */

FileCommitContent.prototype['size'] = undefined;
/**
 * @member {String} type
 */

FileCommitContent.prototype['type'] = undefined;
/**
 * @member {String} url
 */

FileCommitContent.prototype['url'] = undefined;
var _default = FileCommitContent;
exports["default"] = _default;