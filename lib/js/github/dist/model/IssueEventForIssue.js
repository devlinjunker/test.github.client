"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _SimpleUser = _interopRequireDefault(require("./SimpleUser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The IssueEventForIssue model module.
 * @module model/IssueEventForIssue
 * @version 0.0.5
 */
var IssueEventForIssue = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>IssueEventForIssue</code>.
   * Issue Event for Issue
   * @alias module:model/IssueEventForIssue
   */
  function IssueEventForIssue() {
    _classCallCheck(this, IssueEventForIssue);

    IssueEventForIssue.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(IssueEventForIssue, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>IssueEventForIssue</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IssueEventForIssue} obj Optional instance to populate.
     * @return {module:model/IssueEventForIssue} The populated <code>IssueEventForIssue</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IssueEventForIssue();

        if (data.hasOwnProperty('actor')) {
          obj['actor'] = _SimpleUser["default"].constructFromObject(data['actor']);
        }

        if (data.hasOwnProperty('author_association')) {
          obj['author_association'] = _ApiClient["default"].convertToType(data['author_association'], 'String');
        }

        if (data.hasOwnProperty('body')) {
          obj['body'] = _ApiClient["default"].convertToType(data['body'], 'String');
        }

        if (data.hasOwnProperty('body_html')) {
          obj['body_html'] = _ApiClient["default"].convertToType(data['body_html'], 'String');
        }

        if (data.hasOwnProperty('body_text')) {
          obj['body_text'] = _ApiClient["default"].convertToType(data['body_text'], 'String');
        }

        if (data.hasOwnProperty('commit_id')) {
          obj['commit_id'] = _ApiClient["default"].convertToType(data['commit_id'], 'String');
        }

        if (data.hasOwnProperty('commit_url')) {
          obj['commit_url'] = _ApiClient["default"].convertToType(data['commit_url'], 'String');
        }

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'String');
        }

        if (data.hasOwnProperty('event')) {
          obj['event'] = _ApiClient["default"].convertToType(data['event'], 'String');
        }

        if (data.hasOwnProperty('html_url')) {
          obj['html_url'] = _ApiClient["default"].convertToType(data['html_url'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('issue_url')) {
          obj['issue_url'] = _ApiClient["default"].convertToType(data['issue_url'], 'String');
        }

        if (data.hasOwnProperty('lock_reason')) {
          obj['lock_reason'] = _ApiClient["default"].convertToType(data['lock_reason'], 'String');
        }

        if (data.hasOwnProperty('message')) {
          obj['message'] = _ApiClient["default"].convertToType(data['message'], 'String');
        }

        if (data.hasOwnProperty('node_id')) {
          obj['node_id'] = _ApiClient["default"].convertToType(data['node_id'], 'String');
        }

        if (data.hasOwnProperty('pull_request_url')) {
          obj['pull_request_url'] = _ApiClient["default"].convertToType(data['pull_request_url'], 'String');
        }

        if (data.hasOwnProperty('sha')) {
          obj['sha'] = _ApiClient["default"].convertToType(data['sha'], 'String');
        }

        if (data.hasOwnProperty('state')) {
          obj['state'] = _ApiClient["default"].convertToType(data['state'], 'String');
        }

        if (data.hasOwnProperty('submitted_at')) {
          obj['submitted_at'] = _ApiClient["default"].convertToType(data['submitted_at'], 'String');
        }

        if (data.hasOwnProperty('updated_at')) {
          obj['updated_at'] = _ApiClient["default"].convertToType(data['updated_at'], 'String');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return IssueEventForIssue;
}();
/**
 * @member {module:model/SimpleUser} actor
 */


IssueEventForIssue.prototype['actor'] = undefined;
/**
 * @member {String} author_association
 */

IssueEventForIssue.prototype['author_association'] = undefined;
/**
 * @member {String} body
 */

IssueEventForIssue.prototype['body'] = undefined;
/**
 * @member {String} body_html
 */

IssueEventForIssue.prototype['body_html'] = undefined;
/**
 * @member {String} body_text
 */

IssueEventForIssue.prototype['body_text'] = undefined;
/**
 * @member {String} commit_id
 */

IssueEventForIssue.prototype['commit_id'] = undefined;
/**
 * @member {String} commit_url
 */

IssueEventForIssue.prototype['commit_url'] = undefined;
/**
 * @member {String} created_at
 */

IssueEventForIssue.prototype['created_at'] = undefined;
/**
 * @member {String} event
 */

IssueEventForIssue.prototype['event'] = undefined;
/**
 * @member {String} html_url
 */

IssueEventForIssue.prototype['html_url'] = undefined;
/**
 * @member {Number} id
 */

IssueEventForIssue.prototype['id'] = undefined;
/**
 * @member {String} issue_url
 */

IssueEventForIssue.prototype['issue_url'] = undefined;
/**
 * @member {String} lock_reason
 */

IssueEventForIssue.prototype['lock_reason'] = undefined;
/**
 * @member {String} message
 */

IssueEventForIssue.prototype['message'] = undefined;
/**
 * @member {String} node_id
 */

IssueEventForIssue.prototype['node_id'] = undefined;
/**
 * @member {String} pull_request_url
 */

IssueEventForIssue.prototype['pull_request_url'] = undefined;
/**
 * @member {String} sha
 */

IssueEventForIssue.prototype['sha'] = undefined;
/**
 * @member {String} state
 */

IssueEventForIssue.prototype['state'] = undefined;
/**
 * @member {String} submitted_at
 */

IssueEventForIssue.prototype['submitted_at'] = undefined;
/**
 * @member {String} updated_at
 */

IssueEventForIssue.prototype['updated_at'] = undefined;
/**
 * @member {String} url
 */

IssueEventForIssue.prototype['url'] = undefined;
var _default = IssueEventForIssue;
exports["default"] = _default;