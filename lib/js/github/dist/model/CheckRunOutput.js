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
 * The CheckRunOutput model module.
 * @module model/CheckRunOutput
 * @version 0.0.5
 */
var CheckRunOutput = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CheckRunOutput</code>.
   * @alias module:model/CheckRunOutput
   * @param annotationsCount {Number} 
   * @param annotationsUrl {String} 
   * @param summary {String} 
   * @param text {String} 
   * @param title {String} 
   */
  function CheckRunOutput(annotationsCount, annotationsUrl, summary, text, title) {
    _classCallCheck(this, CheckRunOutput);

    CheckRunOutput.initialize(this, annotationsCount, annotationsUrl, summary, text, title);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CheckRunOutput, null, [{
    key: "initialize",
    value: function initialize(obj, annotationsCount, annotationsUrl, summary, text, title) {
      obj['annotations_count'] = annotationsCount;
      obj['annotations_url'] = annotationsUrl;
      obj['summary'] = summary;
      obj['text'] = text;
      obj['title'] = title;
    }
    /**
     * Constructs a <code>CheckRunOutput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CheckRunOutput} obj Optional instance to populate.
     * @return {module:model/CheckRunOutput} The populated <code>CheckRunOutput</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CheckRunOutput();

        if (data.hasOwnProperty('annotations_count')) {
          obj['annotations_count'] = _ApiClient["default"].convertToType(data['annotations_count'], 'Number');
        }

        if (data.hasOwnProperty('annotations_url')) {
          obj['annotations_url'] = _ApiClient["default"].convertToType(data['annotations_url'], 'String');
        }

        if (data.hasOwnProperty('summary')) {
          obj['summary'] = _ApiClient["default"].convertToType(data['summary'], 'String');
        }

        if (data.hasOwnProperty('text')) {
          obj['text'] = _ApiClient["default"].convertToType(data['text'], 'String');
        }

        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CheckRunOutput;
}();
/**
 * @member {Number} annotations_count
 */


CheckRunOutput.prototype['annotations_count'] = undefined;
/**
 * @member {String} annotations_url
 */

CheckRunOutput.prototype['annotations_url'] = undefined;
/**
 * @member {String} summary
 */

CheckRunOutput.prototype['summary'] = undefined;
/**
 * @member {String} text
 */

CheckRunOutput.prototype['text'] = undefined;
/**
 * @member {String} title
 */

CheckRunOutput.prototype['title'] = undefined;
var _default = CheckRunOutput;
exports["default"] = _default;