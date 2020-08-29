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
 * The ReposOwnerRepoCheckRunsOutputAnnotations model module.
 * @module model/ReposOwnerRepoCheckRunsOutputAnnotations
 * @version 0.0.5
 */
var ReposOwnerRepoCheckRunsOutputAnnotations = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ReposOwnerRepoCheckRunsOutputAnnotations</code>.
   * @alias module:model/ReposOwnerRepoCheckRunsOutputAnnotations
   * @param annotationLevel {module:model/ReposOwnerRepoCheckRunsOutputAnnotations.AnnotationLevelEnum} The level of the annotation. Can be one of `notice`, `warning`, or `failure`.
   * @param endLine {Number} The end line of the annotation.
   * @param message {String} A short description of the feedback for these lines of code. The maximum size is 64 KB.
   * @param path {String} The path of the file to add an annotation to. For example, `assets/css/main.css`.
   * @param startLine {Number} The start line of the annotation.
   */
  function ReposOwnerRepoCheckRunsOutputAnnotations(annotationLevel, endLine, message, path, startLine) {
    _classCallCheck(this, ReposOwnerRepoCheckRunsOutputAnnotations);

    ReposOwnerRepoCheckRunsOutputAnnotations.initialize(this, annotationLevel, endLine, message, path, startLine);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ReposOwnerRepoCheckRunsOutputAnnotations, null, [{
    key: "initialize",
    value: function initialize(obj, annotationLevel, endLine, message, path, startLine) {
      obj['annotation_level'] = annotationLevel;
      obj['end_line'] = endLine;
      obj['message'] = message;
      obj['path'] = path;
      obj['start_line'] = startLine;
    }
    /**
     * Constructs a <code>ReposOwnerRepoCheckRunsOutputAnnotations</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReposOwnerRepoCheckRunsOutputAnnotations} obj Optional instance to populate.
     * @return {module:model/ReposOwnerRepoCheckRunsOutputAnnotations} The populated <code>ReposOwnerRepoCheckRunsOutputAnnotations</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ReposOwnerRepoCheckRunsOutputAnnotations();

        if (data.hasOwnProperty('annotation_level')) {
          obj['annotation_level'] = _ApiClient["default"].convertToType(data['annotation_level'], 'String');
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

  return ReposOwnerRepoCheckRunsOutputAnnotations;
}();
/**
 * The level of the annotation. Can be one of `notice`, `warning`, or `failure`.
 * @member {module:model/ReposOwnerRepoCheckRunsOutputAnnotations.AnnotationLevelEnum} annotation_level
 */


ReposOwnerRepoCheckRunsOutputAnnotations.prototype['annotation_level'] = undefined;
/**
 * The end column of the annotation. Annotations only support `start_column` and `end_column` on the same line. Omit this parameter if `start_line` and `end_line` have different values.
 * @member {Number} end_column
 */

ReposOwnerRepoCheckRunsOutputAnnotations.prototype['end_column'] = undefined;
/**
 * The end line of the annotation.
 * @member {Number} end_line
 */

ReposOwnerRepoCheckRunsOutputAnnotations.prototype['end_line'] = undefined;
/**
 * A short description of the feedback for these lines of code. The maximum size is 64 KB.
 * @member {String} message
 */

ReposOwnerRepoCheckRunsOutputAnnotations.prototype['message'] = undefined;
/**
 * The path of the file to add an annotation to. For example, `assets/css/main.css`.
 * @member {String} path
 */

ReposOwnerRepoCheckRunsOutputAnnotations.prototype['path'] = undefined;
/**
 * Details about this annotation. The maximum size is 64 KB.
 * @member {String} raw_details
 */

ReposOwnerRepoCheckRunsOutputAnnotations.prototype['raw_details'] = undefined;
/**
 * The start column of the annotation. Annotations only support `start_column` and `end_column` on the same line. Omit this parameter if `start_line` and `end_line` have different values.
 * @member {Number} start_column
 */

ReposOwnerRepoCheckRunsOutputAnnotations.prototype['start_column'] = undefined;
/**
 * The start line of the annotation.
 * @member {Number} start_line
 */

ReposOwnerRepoCheckRunsOutputAnnotations.prototype['start_line'] = undefined;
/**
 * The title that represents the annotation. The maximum size is 255 characters.
 * @member {String} title
 */

ReposOwnerRepoCheckRunsOutputAnnotations.prototype['title'] = undefined;
/**
 * Allowed values for the <code>annotation_level</code> property.
 * @enum {String}
 * @readonly
 */

ReposOwnerRepoCheckRunsOutputAnnotations['AnnotationLevelEnum'] = {
  /**
   * value: "notice"
   * @const
   */
  "notice": "notice",

  /**
   * value: "warning"
   * @const
   */
  "warning": "warning",

  /**
   * value: "failure"
   * @const
   */
  "failure": "failure"
};
var _default = ReposOwnerRepoCheckRunsOutputAnnotations;
exports["default"] = _default;