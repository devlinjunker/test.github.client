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
 * The CheckAnnotation model module.
 * @module model/CheckAnnotation
 * @version 0.0.5
 */
var CheckAnnotation = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CheckAnnotation</code>.
   * Check Annotation
   * @alias module:model/CheckAnnotation
   * @param annotationLevel {String} 
   * @param blobHref {String} 
   * @param endColumn {Number} 
   * @param endLine {Number} 
   * @param message {String} 
   * @param path {String} 
   * @param rawDetails {String} 
   * @param startColumn {Number} 
   * @param startLine {Number} 
   * @param title {String} 
   */
  function CheckAnnotation(annotationLevel, blobHref, endColumn, endLine, message, path, rawDetails, startColumn, startLine, title) {
    _classCallCheck(this, CheckAnnotation);

    CheckAnnotation.initialize(this, annotationLevel, blobHref, endColumn, endLine, message, path, rawDetails, startColumn, startLine, title);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CheckAnnotation, null, [{
    key: "initialize",
    value: function initialize(obj, annotationLevel, blobHref, endColumn, endLine, message, path, rawDetails, startColumn, startLine, title) {
      obj['annotation_level'] = annotationLevel;
      obj['blob_href'] = blobHref;
      obj['end_column'] = endColumn;
      obj['end_line'] = endLine;
      obj['message'] = message;
      obj['path'] = path;
      obj['raw_details'] = rawDetails;
      obj['start_column'] = startColumn;
      obj['start_line'] = startLine;
      obj['title'] = title;
    }
    /**
     * Constructs a <code>CheckAnnotation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CheckAnnotation} obj Optional instance to populate.
     * @return {module:model/CheckAnnotation} The populated <code>CheckAnnotation</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CheckAnnotation();

        if (data.hasOwnProperty('annotation_level')) {
          obj['annotation_level'] = _ApiClient["default"].convertToType(data['annotation_level'], 'String');
        }

        if (data.hasOwnProperty('blob_href')) {
          obj['blob_href'] = _ApiClient["default"].convertToType(data['blob_href'], 'String');
        }

        if (data.hasOwnProperty('end_column')) {
          obj['end_column'] = _ApiClient["default"].convertToType(data['end_column'], 'Number');
        }

        if (data.hasOwnProperty('end_line')) {
          obj['end_line'] = _ApiClient["default"].convertToType(data['end_line'], 'Number');
        }

        if (data.hasOwnProperty('message')) {
          obj['message'] = _ApiClient["default"].convertToType(data['message'], 'String');
        }

        if (data.hasOwnProperty('path')) {
          obj['path'] = _ApiClient["default"].convertToType(data['path'], 'String');
        }

        if (data.hasOwnProperty('raw_details')) {
          obj['raw_details'] = _ApiClient["default"].convertToType(data['raw_details'], 'String');
        }

        if (data.hasOwnProperty('start_column')) {
          obj['start_column'] = _ApiClient["default"].convertToType(data['start_column'], 'Number');
        }

        if (data.hasOwnProperty('start_line')) {
          obj['start_line'] = _ApiClient["default"].convertToType(data['start_line'], 'Number');
        }

        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CheckAnnotation;
}();
/**
 * @member {String} annotation_level
 */


CheckAnnotation.prototype['annotation_level'] = undefined;
/**
 * @member {String} blob_href
 */

CheckAnnotation.prototype['blob_href'] = undefined;
/**
 * @member {Number} end_column
 */

CheckAnnotation.prototype['end_column'] = undefined;
/**
 * @member {Number} end_line
 */

CheckAnnotation.prototype['end_line'] = undefined;
/**
 * @member {String} message
 */

CheckAnnotation.prototype['message'] = undefined;
/**
 * @member {String} path
 */

CheckAnnotation.prototype['path'] = undefined;
/**
 * @member {String} raw_details
 */

CheckAnnotation.prototype['raw_details'] = undefined;
/**
 * @member {Number} start_column
 */

CheckAnnotation.prototype['start_column'] = undefined;
/**
 * @member {Number} start_line
 */

CheckAnnotation.prototype['start_line'] = undefined;
/**
 * @member {String} title
 */

CheckAnnotation.prototype['title'] = undefined;
var _default = CheckAnnotation;
exports["default"] = _default;