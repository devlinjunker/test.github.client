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
 * The TopicSearchResultItemTopicRelation model module.
 * @module model/TopicSearchResultItemTopicRelation
 * @version 0.0.5
 */
var TopicSearchResultItemTopicRelation = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TopicSearchResultItemTopicRelation</code>.
   * @alias module:model/TopicSearchResultItemTopicRelation
   */
  function TopicSearchResultItemTopicRelation() {
    _classCallCheck(this, TopicSearchResultItemTopicRelation);

    TopicSearchResultItemTopicRelation.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TopicSearchResultItemTopicRelation, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TopicSearchResultItemTopicRelation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TopicSearchResultItemTopicRelation} obj Optional instance to populate.
     * @return {module:model/TopicSearchResultItemTopicRelation} The populated <code>TopicSearchResultItemTopicRelation</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TopicSearchResultItemTopicRelation();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('relation_type')) {
          obj['relation_type'] = _ApiClient["default"].convertToType(data['relation_type'], 'String');
        }

        if (data.hasOwnProperty('topic_id')) {
          obj['topic_id'] = _ApiClient["default"].convertToType(data['topic_id'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return TopicSearchResultItemTopicRelation;
}();
/**
 * @member {Number} id
 */


TopicSearchResultItemTopicRelation.prototype['id'] = undefined;
/**
 * @member {String} name
 */

TopicSearchResultItemTopicRelation.prototype['name'] = undefined;
/**
 * @member {String} relation_type
 */

TopicSearchResultItemTopicRelation.prototype['relation_type'] = undefined;
/**
 * @member {Number} topic_id
 */

TopicSearchResultItemTopicRelation.prototype['topic_id'] = undefined;
var _default = TopicSearchResultItemTopicRelation;
exports["default"] = _default;