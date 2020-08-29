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
 * The GistSimpleFiles model module.
 * @module model/GistSimpleFiles
 * @version 0.0.5
 */
var GistSimpleFiles = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GistSimpleFiles</code>.
   * @alias module:model/GistSimpleFiles
   */
  function GistSimpleFiles() {
    _classCallCheck(this, GistSimpleFiles);

    GistSimpleFiles.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GistSimpleFiles, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>GistSimpleFiles</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GistSimpleFiles} obj Optional instance to populate.
     * @return {module:model/GistSimpleFiles} The populated <code>GistSimpleFiles</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GistSimpleFiles();

        if (data.hasOwnProperty('content')) {
          obj['content'] = _ApiClient["default"].convertToType(data['content'], 'String');
        }

        if (data.hasOwnProperty('filename')) {
          obj['filename'] = _ApiClient["default"].convertToType(data['filename'], 'String');
        }

        if (data.hasOwnProperty('language')) {
          obj['language'] = _ApiClient["default"].convertToType(data['language'], 'String');
        }

        if (data.hasOwnProperty('raw_url')) {
          obj['raw_url'] = _ApiClient["default"].convertToType(data['raw_url'], 'String');
        }

        if (data.hasOwnProperty('size')) {
          obj['size'] = _ApiClient["default"].convertToType(data['size'], 'Number');
        }

        if (data.hasOwnProperty('truncated')) {
          obj['truncated'] = _ApiClient["default"].convertToType(data['truncated'], 'Boolean');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }
      }

      return obj;
    }
  }]);

  return GistSimpleFiles;
}();
/**
 * @member {String} content
 */


GistSimpleFiles.prototype['content'] = undefined;
/**
 * @member {String} filename
 */

GistSimpleFiles.prototype['filename'] = undefined;
/**
 * @member {String} language
 */

GistSimpleFiles.prototype['language'] = undefined;
/**
 * @member {String} raw_url
 */

GistSimpleFiles.prototype['raw_url'] = undefined;
/**
 * @member {Number} size
 */

GistSimpleFiles.prototype['size'] = undefined;
/**
 * @member {Boolean} truncated
 */

GistSimpleFiles.prototype['truncated'] = undefined;
/**
 * @member {String} type
 */

GistSimpleFiles.prototype['type'] = undefined;
var _default = GistSimpleFiles;
exports["default"] = _default;