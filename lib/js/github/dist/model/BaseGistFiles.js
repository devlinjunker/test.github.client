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
 * The BaseGistFiles model module.
 * @module model/BaseGistFiles
 * @version 0.0.5
 */
var BaseGistFiles = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BaseGistFiles</code>.
   * @alias module:model/BaseGistFiles
   */
  function BaseGistFiles() {
    _classCallCheck(this, BaseGistFiles);

    BaseGistFiles.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(BaseGistFiles, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>BaseGistFiles</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BaseGistFiles} obj Optional instance to populate.
     * @return {module:model/BaseGistFiles} The populated <code>BaseGistFiles</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BaseGistFiles();

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

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }
      }

      return obj;
    }
  }]);

  return BaseGistFiles;
}();
/**
 * @member {String} filename
 */


BaseGistFiles.prototype['filename'] = undefined;
/**
 * @member {String} language
 */

BaseGistFiles.prototype['language'] = undefined;
/**
 * @member {String} raw_url
 */

BaseGistFiles.prototype['raw_url'] = undefined;
/**
 * @member {Number} size
 */

BaseGistFiles.prototype['size'] = undefined;
/**
 * @member {String} type
 */

BaseGistFiles.prototype['type'] = undefined;
var _default = BaseGistFiles;
exports["default"] = _default;