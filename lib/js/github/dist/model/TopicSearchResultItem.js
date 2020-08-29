"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _TopicSearchResultItemAliases = _interopRequireDefault(require("./TopicSearchResultItemAliases"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The TopicSearchResultItem model module.
 * @module model/TopicSearchResultItem
 * @version 0.0.5
 */
var TopicSearchResultItem = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TopicSearchResultItem</code>.
   * Topic Search Result Item
   * @alias module:model/TopicSearchResultItem
   * @param createdAt {Date} 
   * @param createdBy {String} 
   * @param curated {Boolean} 
   * @param description {String} 
   * @param displayName {String} 
   * @param featured {Boolean} 
   * @param name {String} 
   * @param released {String} 
   * @param score {Number} 
   * @param shortDescription {String} 
   * @param updatedAt {Date} 
   */
  function TopicSearchResultItem(createdAt, createdBy, curated, description, displayName, featured, name, released, score, shortDescription, updatedAt) {
    _classCallCheck(this, TopicSearchResultItem);

    TopicSearchResultItem.initialize(this, createdAt, createdBy, curated, description, displayName, featured, name, released, score, shortDescription, updatedAt);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TopicSearchResultItem, null, [{
    key: "initialize",
    value: function initialize(obj, createdAt, createdBy, curated, description, displayName, featured, name, released, score, shortDescription, updatedAt) {
      obj['created_at'] = createdAt;
      obj['created_by'] = createdBy;
      obj['curated'] = curated;
      obj['description'] = description;
      obj['display_name'] = displayName;
      obj['featured'] = featured;
      obj['name'] = name;
      obj['released'] = released;
      obj['score'] = score;
      obj['short_description'] = shortDescription;
      obj['updated_at'] = updatedAt;
    }
    /**
     * Constructs a <code>TopicSearchResultItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TopicSearchResultItem} obj Optional instance to populate.
     * @return {module:model/TopicSearchResultItem} The populated <code>TopicSearchResultItem</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TopicSearchResultItem();

        if (data.hasOwnProperty('aliases')) {
          obj['aliases'] = _ApiClient["default"].convertToType(data['aliases'], [_TopicSearchResultItemAliases["default"]]);
        }

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'Date');
        }

        if (data.hasOwnProperty('created_by')) {
          obj['created_by'] = _ApiClient["default"].convertToType(data['created_by'], 'String');
        }

        if (data.hasOwnProperty('curated')) {
          obj['curated'] = _ApiClient["default"].convertToType(data['curated'], 'Boolean');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('display_name')) {
          obj['display_name'] = _ApiClient["default"].convertToType(data['display_name'], 'String');
        }

        if (data.hasOwnProperty('featured')) {
          obj['featured'] = _ApiClient["default"].convertToType(data['featured'], 'Boolean');
        }

        if (data.hasOwnProperty('logo_url')) {
          obj['logo_url'] = _ApiClient["default"].convertToType(data['logo_url'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('related')) {
          obj['related'] = _ApiClient["default"].convertToType(data['related'], [_TopicSearchResultItemAliases["default"]]);
        }

        if (data.hasOwnProperty('released')) {
          obj['released'] = _ApiClient["default"].convertToType(data['released'], 'String');
        }

        if (data.hasOwnProperty('repository_count')) {
          obj['repository_count'] = _ApiClient["default"].convertToType(data['repository_count'], 'Number');
        }

        if (data.hasOwnProperty('score')) {
          obj['score'] = _ApiClient["default"].convertToType(data['score'], 'Number');
        }

        if (data.hasOwnProperty('short_description')) {
          obj['short_description'] = _ApiClient["default"].convertToType(data['short_description'], 'String');
        }

        if (data.hasOwnProperty('text_matches')) {
          obj['text_matches'] = _ApiClient["default"].convertToType(data['text_matches'], [Object]);
        }

        if (data.hasOwnProperty('updated_at')) {
          obj['updated_at'] = _ApiClient["default"].convertToType(data['updated_at'], 'Date');
        }
      }

      return obj;
    }
  }]);

  return TopicSearchResultItem;
}();
/**
 * @member {Array.<module:model/TopicSearchResultItemAliases>} aliases
 */


TopicSearchResultItem.prototype['aliases'] = undefined;
/**
 * @member {Date} created_at
 */

TopicSearchResultItem.prototype['created_at'] = undefined;
/**
 * @member {String} created_by
 */

TopicSearchResultItem.prototype['created_by'] = undefined;
/**
 * @member {Boolean} curated
 */

TopicSearchResultItem.prototype['curated'] = undefined;
/**
 * @member {String} description
 */

TopicSearchResultItem.prototype['description'] = undefined;
/**
 * @member {String} display_name
 */

TopicSearchResultItem.prototype['display_name'] = undefined;
/**
 * @member {Boolean} featured
 */

TopicSearchResultItem.prototype['featured'] = undefined;
/**
 * @member {String} logo_url
 */

TopicSearchResultItem.prototype['logo_url'] = undefined;
/**
 * @member {String} name
 */

TopicSearchResultItem.prototype['name'] = undefined;
/**
 * @member {Array.<module:model/TopicSearchResultItemAliases>} related
 */

TopicSearchResultItem.prototype['related'] = undefined;
/**
 * @member {String} released
 */

TopicSearchResultItem.prototype['released'] = undefined;
/**
 * @member {Number} repository_count
 */

TopicSearchResultItem.prototype['repository_count'] = undefined;
/**
 * @member {Number} score
 */

TopicSearchResultItem.prototype['score'] = undefined;
/**
 * @member {String} short_description
 */

TopicSearchResultItem.prototype['short_description'] = undefined;
/**
 * @member {Array.<Object>} text_matches
 */

TopicSearchResultItem.prototype['text_matches'] = undefined;
/**
 * @member {Date} updated_at
 */

TopicSearchResultItem.prototype['updated_at'] = undefined;
var _default = TopicSearchResultItem;
exports["default"] = _default;