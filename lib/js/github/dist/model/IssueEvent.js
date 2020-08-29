"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _IssueEventDismissedReview = _interopRequireDefault(require("./IssueEventDismissedReview"));

var _IssueEventLabel = _interopRequireDefault(require("./IssueEventLabel"));

var _IssueEventMilestone = _interopRequireDefault(require("./IssueEventMilestone"));

var _IssueEventProjectCard = _interopRequireDefault(require("./IssueEventProjectCard"));

var _IssueEventRename = _interopRequireDefault(require("./IssueEventRename"));

var _IssueSimple = _interopRequireDefault(require("./IssueSimple"));

var _SimpleUser = _interopRequireDefault(require("./SimpleUser"));

var _Team = _interopRequireDefault(require("./Team"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The IssueEvent model module.
 * @module model/IssueEvent
 * @version 0.0.5
 */
var IssueEvent = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>IssueEvent</code>.
   * Issue Event
   * @alias module:model/IssueEvent
   * @param actor {module:model/SimpleUser} 
   * @param commitId {String} 
   * @param commitUrl {String} 
   * @param createdAt {Date} 
   * @param event {String} 
   * @param id {Number} 
   * @param nodeId {String} 
   * @param url {String} 
   */
  function IssueEvent(actor, commitId, commitUrl, createdAt, event, id, nodeId, url) {
    _classCallCheck(this, IssueEvent);

    IssueEvent.initialize(this, actor, commitId, commitUrl, createdAt, event, id, nodeId, url);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(IssueEvent, null, [{
    key: "initialize",
    value: function initialize(obj, actor, commitId, commitUrl, createdAt, event, id, nodeId, url) {
      obj['actor'] = actor;
      obj['commit_id'] = commitId;
      obj['commit_url'] = commitUrl;
      obj['created_at'] = createdAt;
      obj['event'] = event;
      obj['id'] = id;
      obj['node_id'] = nodeId;
      obj['url'] = url;
    }
    /**
     * Constructs a <code>IssueEvent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IssueEvent} obj Optional instance to populate.
     * @return {module:model/IssueEvent} The populated <code>IssueEvent</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IssueEvent();

        if (data.hasOwnProperty('actor')) {
          obj['actor'] = _ApiClient["default"].convertToType(data['actor'], _SimpleUser["default"]);
        }

        if (data.hasOwnProperty('assignee')) {
          obj['assignee'] = _ApiClient["default"].convertToType(data['assignee'], _SimpleUser["default"]);
        }

        if (data.hasOwnProperty('assigner')) {
          obj['assigner'] = _ApiClient["default"].convertToType(data['assigner'], _SimpleUser["default"]);
        }

        if (data.hasOwnProperty('author_association')) {
          obj['author_association'] = _ApiClient["default"].convertToType(data['author_association'], 'String');
        }

        if (data.hasOwnProperty('commit_id')) {
          obj['commit_id'] = _ApiClient["default"].convertToType(data['commit_id'], 'String');
        }

        if (data.hasOwnProperty('commit_url')) {
          obj['commit_url'] = _ApiClient["default"].convertToType(data['commit_url'], 'String');
        }

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'Date');
        }

        if (data.hasOwnProperty('dismissed_review')) {
          obj['dismissed_review'] = _IssueEventDismissedReview["default"].constructFromObject(data['dismissed_review']);
        }

        if (data.hasOwnProperty('event')) {
          obj['event'] = _ApiClient["default"].convertToType(data['event'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('issue')) {
          obj['issue'] = _IssueSimple["default"].constructFromObject(data['issue']);
        }

        if (data.hasOwnProperty('label')) {
          obj['label'] = _IssueEventLabel["default"].constructFromObject(data['label']);
        }

        if (data.hasOwnProperty('lock_reason')) {
          obj['lock_reason'] = _ApiClient["default"].convertToType(data['lock_reason'], 'String');
        }

        if (data.hasOwnProperty('milestone')) {
          obj['milestone'] = _IssueEventMilestone["default"].constructFromObject(data['milestone']);
        }

        if (data.hasOwnProperty('node_id')) {
          obj['node_id'] = _ApiClient["default"].convertToType(data['node_id'], 'String');
        }

        if (data.hasOwnProperty('project_card')) {
          obj['project_card'] = _IssueEventProjectCard["default"].constructFromObject(data['project_card']);
        }

        if (data.hasOwnProperty('rename')) {
          obj['rename'] = _IssueEventRename["default"].constructFromObject(data['rename']);
        }

        if (data.hasOwnProperty('requested_reviewer')) {
          obj['requested_reviewer'] = _ApiClient["default"].convertToType(data['requested_reviewer'], _SimpleUser["default"]);
        }

        if (data.hasOwnProperty('requested_team')) {
          obj['requested_team'] = _Team["default"].constructFromObject(data['requested_team']);
        }

        if (data.hasOwnProperty('review_requester')) {
          obj['review_requester'] = _ApiClient["default"].convertToType(data['review_requester'], _SimpleUser["default"]);
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return IssueEvent;
}();
/**
 * @member {module:model/SimpleUser} actor
 */


IssueEvent.prototype['actor'] = undefined;
/**
 * @member {module:model/SimpleUser} assignee
 */

IssueEvent.prototype['assignee'] = undefined;
/**
 * @member {module:model/SimpleUser} assigner
 */

IssueEvent.prototype['assigner'] = undefined;
/**
 * @member {String} author_association
 */

IssueEvent.prototype['author_association'] = undefined;
/**
 * @member {String} commit_id
 */

IssueEvent.prototype['commit_id'] = undefined;
/**
 * @member {String} commit_url
 */

IssueEvent.prototype['commit_url'] = undefined;
/**
 * @member {Date} created_at
 */

IssueEvent.prototype['created_at'] = undefined;
/**
 * @member {module:model/IssueEventDismissedReview} dismissed_review
 */

IssueEvent.prototype['dismissed_review'] = undefined;
/**
 * @member {String} event
 */

IssueEvent.prototype['event'] = undefined;
/**
 * @member {Number} id
 */

IssueEvent.prototype['id'] = undefined;
/**
 * @member {module:model/IssueSimple} issue
 */

IssueEvent.prototype['issue'] = undefined;
/**
 * @member {module:model/IssueEventLabel} label
 */

IssueEvent.prototype['label'] = undefined;
/**
 * @member {String} lock_reason
 */

IssueEvent.prototype['lock_reason'] = undefined;
/**
 * @member {module:model/IssueEventMilestone} milestone
 */

IssueEvent.prototype['milestone'] = undefined;
/**
 * @member {String} node_id
 */

IssueEvent.prototype['node_id'] = undefined;
/**
 * @member {module:model/IssueEventProjectCard} project_card
 */

IssueEvent.prototype['project_card'] = undefined;
/**
 * @member {module:model/IssueEventRename} rename
 */

IssueEvent.prototype['rename'] = undefined;
/**
 * @member {module:model/SimpleUser} requested_reviewer
 */

IssueEvent.prototype['requested_reviewer'] = undefined;
/**
 * @member {module:model/Team} requested_team
 */

IssueEvent.prototype['requested_team'] = undefined;
/**
 * @member {module:model/SimpleUser} review_requester
 */

IssueEvent.prototype['review_requester'] = undefined;
/**
 * @member {String} url
 */

IssueEvent.prototype['url'] = undefined;
var _default = IssueEvent;
exports["default"] = _default;