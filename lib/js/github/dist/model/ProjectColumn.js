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
 * The ProjectColumn model module.
 * @module model/ProjectColumn
 * @version 0.0.5
 */
var ProjectColumn = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ProjectColumn</code>.
   * Project columns contain cards of work.
   * @alias module:model/ProjectColumn
   * @param cardsUrl {String} 
   * @param createdAt {Date} 
   * @param id {Number} The unique identifier of the project column
   * @param name {String} Name of the project column
   * @param nodeId {String} 
   * @param projectUrl {String} 
   * @param updatedAt {Date} 
   * @param url {String} 
   */
  function ProjectColumn(cardsUrl, createdAt, id, name, nodeId, projectUrl, updatedAt, url) {
    _classCallCheck(this, ProjectColumn);

    ProjectColumn.initialize(this, cardsUrl, createdAt, id, name, nodeId, projectUrl, updatedAt, url);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ProjectColumn, null, [{
    key: "initialize",
    value: function initialize(obj, cardsUrl, createdAt, id, name, nodeId, projectUrl, updatedAt, url) {
      obj['cards_url'] = cardsUrl;
      obj['created_at'] = createdAt;
      obj['id'] = id;
      obj['name'] = name;
      obj['node_id'] = nodeId;
      obj['project_url'] = projectUrl;
      obj['updated_at'] = updatedAt;
      obj['url'] = url;
    }
    /**
     * Constructs a <code>ProjectColumn</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProjectColumn} obj Optional instance to populate.
     * @return {module:model/ProjectColumn} The populated <code>ProjectColumn</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ProjectColumn();

        if (data.hasOwnProperty('cards_url')) {
          obj['cards_url'] = _ApiClient["default"].convertToType(data['cards_url'], 'String');
        }

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'Date');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('node_id')) {
          obj['node_id'] = _ApiClient["default"].convertToType(data['node_id'], 'String');
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

  return ProjectColumn;
}();
/**
 * @member {String} cards_url
 */


ProjectColumn.prototype['cards_url'] = undefined;
/**
 * @member {Date} created_at
 */

ProjectColumn.prototype['created_at'] = undefined;
/**
 * The unique identifier of the project column
 * @member {Number} id
 */

ProjectColumn.prototype['id'] = undefined;
/**
 * Name of the project column
 * @member {String} name
 */

ProjectColumn.prototype['name'] = undefined;
/**
 * @member {String} node_id
 */

ProjectColumn.prototype['node_id'] = undefined;
/**
 * @member {String} project_url
 */

ProjectColumn.prototype['project_url'] = undefined;
/**
 * @member {Date} updated_at
 */

ProjectColumn.prototype['updated_at'] = undefined;
/**
 * @member {String} url
 */

ProjectColumn.prototype['url'] = undefined;
var _default = ProjectColumn;
exports["default"] = _default;