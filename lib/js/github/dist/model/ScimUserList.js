"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ScimUser = _interopRequireDefault(require("./ScimUser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ScimUserList model module.
 * @module model/ScimUserList
 * @version 0.0.5
 */
var ScimUserList = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ScimUserList</code>.
   * SCIM User List
   * @alias module:model/ScimUserList
   * @param resources {Array.<module:model/ScimUser>} 
   * @param itemsPerPage {Number} 
   * @param schemas {Array.<String>} SCIM schema used.
   * @param startIndex {Number} 
   * @param totalResults {Number} 
   */
  function ScimUserList(resources, itemsPerPage, schemas, startIndex, totalResults) {
    _classCallCheck(this, ScimUserList);

    ScimUserList.initialize(this, resources, itemsPerPage, schemas, startIndex, totalResults);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ScimUserList, null, [{
    key: "initialize",
    value: function initialize(obj, resources, itemsPerPage, schemas, startIndex, totalResults) {
      obj['Resources'] = resources;
      obj['itemsPerPage'] = itemsPerPage;
      obj['schemas'] = schemas;
      obj['startIndex'] = startIndex;
      obj['totalResults'] = totalResults;
    }
    /**
     * Constructs a <code>ScimUserList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ScimUserList} obj Optional instance to populate.
     * @return {module:model/ScimUserList} The populated <code>ScimUserList</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ScimUserList();

        if (data.hasOwnProperty('Resources')) {
          obj['Resources'] = _ApiClient["default"].convertToType(data['Resources'], [_ScimUser["default"]]);
        }

        if (data.hasOwnProperty('itemsPerPage')) {
          obj['itemsPerPage'] = _ApiClient["default"].convertToType(data['itemsPerPage'], 'Number');
        }

        if (data.hasOwnProperty('schemas')) {
          obj['schemas'] = _ApiClient["default"].convertToType(data['schemas'], ['String']);
        }

        if (data.hasOwnProperty('startIndex')) {
          obj['startIndex'] = _ApiClient["default"].convertToType(data['startIndex'], 'Number');
        }

        if (data.hasOwnProperty('totalResults')) {
          obj['totalResults'] = _ApiClient["default"].convertToType(data['totalResults'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return ScimUserList;
}();
/**
 * @member {Array.<module:model/ScimUser>} Resources
 */


ScimUserList.prototype['Resources'] = undefined;
/**
 * @member {Number} itemsPerPage
 */

ScimUserList.prototype['itemsPerPage'] = undefined;
/**
 * SCIM schema used.
 * @member {Array.<String>} schemas
 */

ScimUserList.prototype['schemas'] = undefined;
/**
 * @member {Number} startIndex
 */

ScimUserList.prototype['startIndex'] = undefined;
/**
 * @member {Number} totalResults
 */

ScimUserList.prototype['totalResults'] = undefined;
var _default = ScimUserList;
exports["default"] = _default;