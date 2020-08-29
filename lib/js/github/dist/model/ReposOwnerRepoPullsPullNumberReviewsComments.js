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
 * The ReposOwnerRepoPullsPullNumberReviewsComments model module.
 * @module model/ReposOwnerRepoPullsPullNumberReviewsComments
 * @version 0.0.5
 */
var ReposOwnerRepoPullsPullNumberReviewsComments = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ReposOwnerRepoPullsPullNumberReviewsComments</code>.
   * @alias module:model/ReposOwnerRepoPullsPullNumberReviewsComments
   * @param body {String} Text of the review comment.
   * @param path {String} The relative path to the file that necessitates a review comment.
   */
  function ReposOwnerRepoPullsPullNumberReviewsComments(body, path) {
    _classCallCheck(this, ReposOwnerRepoPullsPullNumberReviewsComments);

    ReposOwnerRepoPullsPullNumberReviewsComments.initialize(this, body, path);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ReposOwnerRepoPullsPullNumberReviewsComments, null, [{
    key: "initialize",
    value: function initialize(obj, body, path) {
      obj['body'] = body;
      obj['path'] = path;
    }
    /**
     * Constructs a <code>ReposOwnerRepoPullsPullNumberReviewsComments</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReposOwnerRepoPullsPullNumberReviewsComments} obj Optional instance to populate.
     * @return {module:model/ReposOwnerRepoPullsPullNumberReviewsComments} The populated <code>ReposOwnerRepoPullsPullNumberReviewsComments</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ReposOwnerRepoPullsPullNumberReviewsComments();

        if (data.hasOwnProperty('body')) {
          obj['body'] = _ApiClient["default"].convertToType(data['body'], 'String');
        }

        if (data.hasOwnProperty('line')) {
          obj['line'] = _ApiClient["default"].convertToType(data['line'], 'Number');
        }

        if (data.hasOwnProperty('path')) {
          obj['path'] = _ApiClient["default"].convertToType(data['path'], 'String');
        }

        if (data.hasOwnProperty('position')) {
          obj['position'] = _ApiClient["default"].convertToType(data['position'], 'Number');
        }

        if (data.hasOwnProperty('side')) {
          obj['side'] = _ApiClient["default"].convertToType(data['side'], 'String');
        }

        if (data.hasOwnProperty('start_line')) {
          obj['start_line'] = _ApiClient["default"].convertToType(data['start_line'], 'Number');
        }

        if (data.hasOwnProperty('start_side')) {
          obj['start_side'] = _ApiClient["default"].convertToType(data['start_side'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ReposOwnerRepoPullsPullNumberReviewsComments;
}();
/**
 * Text of the review comment.
 * @member {String} body
 */


ReposOwnerRepoPullsPullNumberReviewsComments.prototype['body'] = undefined;
/**
 * @member {Number} line
 */

ReposOwnerRepoPullsPullNumberReviewsComments.prototype['line'] = undefined;
/**
 * The relative path to the file that necessitates a review comment.
 * @member {String} path
 */

ReposOwnerRepoPullsPullNumberReviewsComments.prototype['path'] = undefined;
/**
 * The position in the diff where you want to add a review comment. Note this value is not the same as the line number in the file. For help finding the position value, read the note below.
 * @member {Number} position
 */

ReposOwnerRepoPullsPullNumberReviewsComments.prototype['position'] = undefined;
/**
 * @member {String} side
 */

ReposOwnerRepoPullsPullNumberReviewsComments.prototype['side'] = undefined;
/**
 * @member {Number} start_line
 */

ReposOwnerRepoPullsPullNumberReviewsComments.prototype['start_line'] = undefined;
/**
 * @member {String} start_side
 */

ReposOwnerRepoPullsPullNumberReviewsComments.prototype['start_side'] = undefined;
var _default = ReposOwnerRepoPullsPullNumberReviewsComments;
exports["default"] = _default;