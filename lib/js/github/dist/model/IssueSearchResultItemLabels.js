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
 * The IssueSearchResultItemLabels model module.
 * @module model/IssueSearchResultItemLabels
 * @version 0.0.5
 */
var IssueSearchResultItemLabels = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>IssueSearchResultItemLabels</code>.
   * @alias module:model/IssueSearchResultItemLabels
   */
  function IssueSearchResultItemLabels() {
    _classCallCheck(this, IssueSearchResultItemLabels);

    IssueSearchResultItemLabels.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(IssueSearchResultItemLabels, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>IssueSearchResultItemLabels</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IssueSearchResultItemLabels} obj Optional instance to populate.
     * @return {module:model/IssueSearchResultItemLabels} The populated <code>IssueSearchResultItemLabels</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IssueSearchResultItemLabels();

        if (data.hasOwnProperty('color')) {
          obj['color'] = _ApiClient["default"].convertToType(data['color'], 'String');
        }

        if (data.hasOwnProperty('default')) {
          obj['default'] = _ApiClient["default"].convertToType(data['default'], 'Boolean');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
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

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return IssueSearchResultItemLabels;
}();
/**
 * @member {String} color
 */


IssueSearchResultItemLabels.prototype['color'] = undefined;
/**
 * @member {Boolean} default
 */

IssueSearchResultItemLabels.prototype['default'] = undefined;
/**
 * @member {String} description
 */

IssueSearchResultItemLabels.prototype['description'] = undefined;
/**
 * @member {Number} id
 */

IssueSearchResultItemLabels.prototype['id'] = undefined;
/**
 * @member {String} name
 */

IssueSearchResultItemLabels.prototype['name'] = undefined;
/**
 * @member {String} node_id
 */

IssueSearchResultItemLabels.prototype['node_id'] = undefined;
/**
 * @member {String} url
 */

IssueSearchResultItemLabels.prototype['url'] = undefined;
var _default = IssueSearchResultItemLabels;
exports["default"] = _default;