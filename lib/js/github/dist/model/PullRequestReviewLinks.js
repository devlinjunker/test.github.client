"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PullRequestReviewLinksHtml = _interopRequireDefault(require("./PullRequestReviewLinksHtml"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PullRequestReviewLinks model module.
 * @module model/PullRequestReviewLinks
 * @version 0.0.5
 */
var PullRequestReviewLinks = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PullRequestReviewLinks</code>.
   * @alias module:model/PullRequestReviewLinks
   * @param html {module:model/PullRequestReviewLinksHtml} 
   * @param pullRequest {module:model/PullRequestReviewLinksHtml} 
   */
  function PullRequestReviewLinks(html, pullRequest) {
    _classCallCheck(this, PullRequestReviewLinks);

    PullRequestReviewLinks.initialize(this, html, pullRequest);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PullRequestReviewLinks, null, [{
    key: "initialize",
    value: function initialize(obj, html, pullRequest) {
      obj['html'] = html;
      obj['pull_request'] = pullRequest;
    }
    /**
     * Constructs a <code>PullRequestReviewLinks</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PullRequestReviewLinks} obj Optional instance to populate.
     * @return {module:model/PullRequestReviewLinks} The populated <code>PullRequestReviewLinks</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PullRequestReviewLinks();

        if (data.hasOwnProperty('html')) {
          obj['html'] = _PullRequestReviewLinksHtml["default"].constructFromObject(data['html']);
        }

        if (data.hasOwnProperty('pull_request')) {
          obj['pull_request'] = _PullRequestReviewLinksHtml["default"].constructFromObject(data['pull_request']);
        }
      }

      return obj;
    }
  }]);

  return PullRequestReviewLinks;
}();
/**
 * @member {module:model/PullRequestReviewLinksHtml} html
 */


PullRequestReviewLinks.prototype['html'] = undefined;
/**
 * @member {module:model/PullRequestReviewLinksHtml} pull_request
 */

PullRequestReviewLinks.prototype['pull_request'] = undefined;
var _default = PullRequestReviewLinks;
exports["default"] = _default;