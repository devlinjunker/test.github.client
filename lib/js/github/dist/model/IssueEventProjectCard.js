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
 * The IssueEventProjectCard model module.
 * @module model/IssueEventProjectCard
 * @version 0.0.5
 */
var IssueEventProjectCard = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>IssueEventProjectCard</code>.
   * Issue Event Project Card
   * @alias module:model/IssueEventProjectCard
   * @param columnName {String} 
   * @param id {Number} 
   * @param projectId {Number} 
   * @param projectUrl {String} 
   * @param url {String} 
   */
  function IssueEventProjectCard(columnName, id, projectId, projectUrl, url) {
    _classCallCheck(this, IssueEventProjectCard);

    IssueEventProjectCard.initialize(this, columnName, id, projectId, projectUrl, url);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(IssueEventProjectCard, null, [{
    key: "initialize",
    value: function initialize(obj, columnName, id, projectId, projectUrl, url) {
      obj['column_name'] = columnName;
      obj['id'] = id;
      obj['project_id'] = projectId;
      obj['project_url'] = projectUrl;
      obj['url'] = url;
    }
    /**
     * Constructs a <code>IssueEventProjectCard</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IssueEventProjectCard} obj Optional instance to populate.
     * @return {module:model/IssueEventProjectCard} The populated <code>IssueEventProjectCard</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IssueEventProjectCard();

        if (data.hasOwnProperty('column_name')) {
          obj['column_name'] = _ApiClient["default"].convertToType(data['column_name'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('previous_column_name')) {
          obj['previous_column_name'] = _ApiClient["default"].convertToType(data['previous_column_name'], 'String');
        }

        if (data.hasOwnProperty('project_id')) {
          obj['project_id'] = _ApiClient["default"].convertToType(data['project_id'], 'Number');
        }

        if (data.hasOwnProperty('project_url')) {
          obj['project_url'] = _ApiClient["default"].convertToType(data['project_url'], 'String');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return IssueEventProjectCard;
}();
/**
 * @member {String} column_name
 */


IssueEventProjectCard.prototype['column_name'] = undefined;
/**
 * @member {Number} id
 */

IssueEventProjectCard.prototype['id'] = undefined;
/**
 * @member {String} previous_column_name
 */

IssueEventProjectCard.prototype['previous_column_name'] = undefined;
/**
 * @member {Number} project_id
 */

IssueEventProjectCard.prototype['project_id'] = undefined;
/**
 * @member {String} project_url
 */

IssueEventProjectCard.prototype['project_url'] = undefined;
/**
 * @member {String} url
 */

IssueEventProjectCard.prototype['url'] = undefined;
var _default = IssueEventProjectCard;
exports["default"] = _default;