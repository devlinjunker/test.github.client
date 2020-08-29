"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ReposOwnerRepoContentsPathAuthor = _interopRequireDefault(require("./ReposOwnerRepoContentsPathAuthor1"));

var _ReposOwnerRepoContentsPathCommitter = _interopRequireDefault(require("./ReposOwnerRepoContentsPathCommitter1"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineObject61 model module.
 * @module model/InlineObject61
 * @version 0.0.5
 */
var InlineObject61 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject61</code>.
   * @alias module:model/InlineObject61
   * @param message {String} The commit message.
   * @param sha {String} The blob SHA of the file being replaced.
   */
  function InlineObject61(message, sha) {
    _classCallCheck(this, InlineObject61);

    InlineObject61.initialize(this, message, sha);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject61, null, [{
    key: "initialize",
    value: function initialize(obj, message, sha) {
      obj['message'] = message;
      obj['sha'] = sha;
    }
    /**
     * Constructs a <code>InlineObject61</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject61} obj Optional instance to populate.
     * @return {module:model/InlineObject61} The populated <code>InlineObject61</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject61();

        if (data.hasOwnProperty('author')) {
          obj['author'] = _ReposOwnerRepoContentsPathAuthor["default"].constructFromObject(data['author']);
        }

        if (data.hasOwnProperty('branch')) {
          obj['branch'] = _ApiClient["default"].convertToType(data['branch'], 'String');
        }

        if (data.hasOwnProperty('committer')) {
          obj['committer'] = _ReposOwnerRepoContentsPathCommitter["default"].constructFromObject(data['committer']);
        }

        if (data.hasOwnProperty('message')) {
          obj['message'] = _ApiClient["default"].convertToType(data['message'], 'String');
        }

        if (data.hasOwnProperty('sha')) {
          obj['sha'] = _ApiClient["default"].convertToType(data['sha'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineObject61;
}();
/**
 * @member {module:model/ReposOwnerRepoContentsPathAuthor1} author
 */


InlineObject61.prototype['author'] = undefined;
/**
 * The branch name. Default: the repository’s default branch (usually `master`)
 * @member {String} branch
 */

InlineObject61.prototype['branch'] = undefined;
/**
 * @member {module:model/ReposOwnerRepoContentsPathCommitter1} committer
 */

InlineObject61.prototype['committer'] = undefined;
/**
 * The commit message.
 * @member {String} message
 */

InlineObject61.prototype['message'] = undefined;
/**
 * The blob SHA of the file being replaced.
 * @member {String} sha
 */

InlineObject61.prototype['sha'] = undefined;
var _default = InlineObject61;
exports["default"] = _default;