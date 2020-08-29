"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Link = _interopRequireDefault(require("./Link"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ReviewCommentLinks model module.
 * @module model/ReviewCommentLinks
 * @version 0.0.5
 */
var ReviewCommentLinks = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ReviewCommentLinks</code>.
   * @alias module:model/ReviewCommentLinks
   * @param html {module:model/Link} 
   * @param pullRequest {module:model/Link} 
   * @param self {module:model/Link} 
   */
  function ReviewCommentLinks(html, pullRequest, self) {
    _classCallCheck(this, ReviewCommentLinks);

    ReviewCommentLinks.initialize(this, html, pullRequest, self);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ReviewCommentLinks, null, [{
    key: "initialize",
    value: function initialize(obj, html, pullRequest, self) {
      obj['html'] = html;
      obj['pull_request'] = pullRequest;
      obj['self'] = self;
    }
    /**
     * Constructs a <code>ReviewCommentLinks</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReviewCommentLinks} obj Optional instance to populate.
     * @return {module:model/ReviewCommentLinks} The populated <code>ReviewCommentLinks</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ReviewCommentLinks();

        if (data.hasOwnProperty('html')) {
          obj['html'] = _Link["default"].constructFromObject(data['html']);
        }

        if (data.hasOwnProperty('pull_request')) {
          obj['pull_request'] = _Link["default"].constructFromObject(data['pull_request']);
        }

        if (data.hasOwnProperty('self')) {
          obj['self'] = _Link["default"].constructFromObject(data['self']);
        }
      }

      return obj;
    }
  }]);

  return ReviewCommentLinks;
}();
/**
 * @member {module:model/Link} html
 */


ReviewCommentLinks.prototype['html'] = undefined;
/**
 * @member {module:model/Link} pull_request
 */

ReviewCommentLinks.prototype['pull_request'] = undefined;
/**
 * @member {module:model/Link} self
 */

ReviewCommentLinks.prototype['self'] = undefined;
var _default = ReviewCommentLinks;
exports["default"] = _default;