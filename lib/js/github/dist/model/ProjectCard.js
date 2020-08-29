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
 * The ProjectCard model module.
 * @module model/ProjectCard
 * @version 0.0.5
 */
var ProjectCard = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ProjectCard</code>.
   * Project cards represent a scope of work.
   * @alias module:model/ProjectCard
   * @param columnUrl {String} 
   * @param createdAt {Date} 
   * @param creator {module:model/SimpleUser} 
   * @param id {Number} The project card's ID
   * @param nodeId {String} 
   * @param note {String} 
   * @param projectUrl {String} 
   * @param updatedAt {Date} 
   * @param url {String} 
   */
  function ProjectCard(columnUrl, createdAt, creator, id, nodeId, note, projectUrl, updatedAt, url) {
    _classCallCheck(this, ProjectCard);

    ProjectCard.initialize(this, columnUrl, createdAt, creator, id, nodeId, note, projectUrl, updatedAt, url);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ProjectCard, null, [{
    key: "initialize",
    value: function initialize(obj, columnUrl, createdAt, creator, id, nodeId, note, projectUrl, updatedAt, url) {
      obj['column_url'] = columnUrl;
      obj['created_at'] = createdAt;
      obj['creator'] = creator;
      obj['id'] = id;
      obj['node_id'] = nodeId;
      obj['note'] = note;
      obj['project_url'] = projectUrl;
      obj['updated_at'] = updatedAt;
      obj['url'] = url;
    }
    /**
     * Constructs a <code>ProjectCard</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProjectCard} obj Optional instance to populate.
     * @return {module:model/ProjectCard} The populated <code>ProjectCard</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ProjectCard();

        if (data.hasOwnProperty('archived')) {
          obj['archived'] = _ApiClient["default"].convertToType(data['archived'], 'Boolean');
        }

        if (data.hasOwnProperty('column_url')) {
          obj['column_url'] = _ApiClient["default"].convertToType(data['column_url'], 'String');
        }

        if (data.hasOwnProperty('content_url')) {
          obj['content_url'] = _ApiClient["default"].convertToType(data['content_url'], 'String');
        }

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'Date');
        }

        if (data.hasOwnProperty('creator')) {
          obj['creator'] = _ApiClient["default"].convertToType(data['creator'], _SimpleUser["default"]);
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('node_id')) {
          obj['node_id'] = _ApiClient["default"].convertToType(data['node_id'], 'String');
        }

        if (data.hasOwnProperty('note')) {
          obj['note'] = _ApiClient["default"].convertToType(data['note'], 'String');
        }

        if (data.hasOwnProperty('project_url')) {
          obj['project_url'] = _ApiClient["default"].convertToType(data['project_url'], 'String');
        }

        if (data.hasOwnProperty('updated_at')) {
          obj['updated_at'] = _ApiClient["default"].convertToType(data['updated_at'], 'Date');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ProjectCard;
}();
/**
 * Whether or not the card is archived
 * @member {Boolean} archived
 */


ProjectCard.prototype['archived'] = undefined;
/**
 * @member {String} column_url
 */

ProjectCard.prototype['column_url'] = undefined;
/**
 * @member {String} content_url
 */

ProjectCard.prototype['content_url'] = undefined;
/**
 * @member {Date} created_at
 */

ProjectCard.prototype['created_at'] = undefined;
/**
 * @member {module:model/SimpleUser} creator
 */

ProjectCard.prototype['creator'] = undefined;
/**
 * The project card's ID
 * @member {Number} id
 */

ProjectCard.prototype['id'] = undefined;
/**
 * @member {String} node_id
 */

ProjectCard.prototype['node_id'] = undefined;
/**
 * @member {String} note
 */

ProjectCard.prototype['note'] = undefined;
/**
 * @member {String} project_url
 */

ProjectCard.prototype['project_url'] = undefined;
/**
 * @member {Date} updated_at
 */

ProjectCard.prototype['updated_at'] = undefined;
/**
 * @member {String} url
 */

ProjectCard.prototype['url'] = undefined;
var _default = ProjectCard;
exports["default"] = _default;