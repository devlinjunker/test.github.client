"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ReposOwnerRepoCheckRunsOutputAnnotations = _interopRequireDefault(require("./ReposOwnerRepoCheckRunsOutputAnnotations"));

var _ReposOwnerRepoCheckRunsOutputImages = _interopRequireDefault(require("./ReposOwnerRepoCheckRunsOutputImages"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ReposOwnerRepoCheckRunsOutput model module.
 * @module model/ReposOwnerRepoCheckRunsOutput
 * @version 0.0.5
 */
var ReposOwnerRepoCheckRunsOutput = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ReposOwnerRepoCheckRunsOutput</code>.
   * Check runs can accept a variety of data in the &#x60;output&#x60; object, including a &#x60;title&#x60; and &#x60;summary&#x60; and can optionally provide descriptive details about the run. See the [&#x60;output&#x60; object](https://developer.github.com/v3/checks/runs/#output-object) description.
   * @alias module:model/ReposOwnerRepoCheckRunsOutput
   * @param summary {String} The summary of the check run. This parameter supports Markdown.
   * @param title {String} The title of the check run.
   */
  function ReposOwnerRepoCheckRunsOutput(summary, title) {
    _classCallCheck(this, ReposOwnerRepoCheckRunsOutput);

    ReposOwnerRepoCheckRunsOutput.initialize(this, summary, title);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ReposOwnerRepoCheckRunsOutput, null, [{
    key: "initialize",
    value: function initialize(obj, summary, title) {
      obj['summary'] = summary;
      obj['title'] = title;
    }
    /**
     * Constructs a <code>ReposOwnerRepoCheckRunsOutput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReposOwnerRepoCheckRunsOutput} obj Optional instance to populate.
     * @return {module:model/ReposOwnerRepoCheckRunsOutput} The populated <code>ReposOwnerRepoCheckRunsOutput</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ReposOwnerRepoCheckRunsOutput();

        if (data.hasOwnProperty('annotations')) {
          obj['annotations'] = _ApiClient["default"].convertToType(data['annotations'], [_ReposOwnerRepoCheckRunsOutputAnnotations["default"]]);
        }

        if (data.hasOwnProperty('images')) {
          obj['images'] = _ApiClient["default"].convertToType(data['images'], [_ReposOwnerRepoCheckRunsOutputImages["default"]]);
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

  return ReposOwnerRepoCheckRunsOutput;
}();
/**
 * Adds information from your analysis to specific lines of code. Annotations are visible on GitHub in the **Checks** and **Files changed** tab of the pull request. The Checks API limits the number of annotations to a maximum of 50 per API request. To create more than 50 annotations, you have to make multiple requests to the [Update a check run](https://developer.github.com/v3/checks/runs/#update-a-check-run) endpoint. Each time you update the check run, annotations are appended to the list of annotations that already exist for the check run. For details about how you can view annotations on GitHub, see \"[About status checks](https://help.github.com/articles/about-status-checks#checks)\". See the [`annotations` object](https://developer.github.com/v3/checks/runs/#annotations-object) description for details about how to use this parameter.
 * @member {Array.<module:model/ReposOwnerRepoCheckRunsOutputAnnotations>} annotations
 */


ReposOwnerRepoCheckRunsOutput.prototype['annotations'] = undefined;
/**
 * Adds images to the output displayed in the GitHub pull request UI. See the [`images` object](https://developer.github.com/v3/checks/runs/#images-object) description for details.
 * @member {Array.<module:model/ReposOwnerRepoCheckRunsOutputImages>} images
 */

ReposOwnerRepoCheckRunsOutput.prototype['images'] = undefined;
/**
 * The summary of the check run. This parameter supports Markdown.
 * @member {String} summary
 */

ReposOwnerRepoCheckRunsOutput.prototype['summary'] = undefined;
/**
 * The details of the check run. This parameter supports Markdown.
 * @member {String} text
 */

ReposOwnerRepoCheckRunsOutput.prototype['text'] = undefined;
/**
 * The title of the check run.
 * @member {String} title
 */

ReposOwnerRepoCheckRunsOutput.prototype['title'] = undefined;
var _default = ReposOwnerRepoCheckRunsOutput;
exports["default"] = _default;