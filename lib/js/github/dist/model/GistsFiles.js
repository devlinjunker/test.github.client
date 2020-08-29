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
 * The GistsFiles model module.
 * @module model/GistsFiles
 * @version 0.0.5
 */
var GistsFiles = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GistsFiles</code>.
   * @alias module:model/GistsFiles
   * @param content {String} Content of the file
   */
  function GistsFiles(content) {
    _classCallCheck(this, GistsFiles);

    GistsFiles.initialize(this, content);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GistsFiles, null, [{
    key: "initialize",
    value: function initialize(obj, content) {
      obj['content'] = content;
    }
    /**
     * Constructs a <code>GistsFiles</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GistsFiles} obj Optional instance to populate.
     * @return {module:model/GistsFiles} The populated <code>GistsFiles</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GistsFiles();

        if (data.hasOwnProperty('content')) {
          obj['content'] = _ApiClient["default"].convertToType(data['content'], 'String');
        }
      }

      return obj;
    }
  }]);

  return GistsFiles;
}();
/**
 * Content of the file
 * @member {String} content
 */


GistsFiles.prototype['content'] = undefined;
var _default = GistsFiles;
exports["default"] = _default;