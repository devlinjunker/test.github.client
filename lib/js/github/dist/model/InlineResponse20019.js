"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _UserSearchResultItem = _interopRequireDefault(require("./UserSearchResultItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineResponse20019 model module.
 * @module model/InlineResponse20019
 * @version 0.0.5
 */
var InlineResponse20019 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20019</code>.
   * @alias module:model/InlineResponse20019
   */
  function InlineResponse20019() {
    _classCallCheck(this, InlineResponse20019);

    InlineResponse20019.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20019, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineResponse20019</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20019} obj Optional instance to populate.
     * @return {module:model/InlineResponse20019} The populated <code>InlineResponse20019</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20019();

        if (data.hasOwnProperty('incomplete_results')) {
          obj['incomplete_results'] = _ApiClient["default"].convertToType(data['incomplete_results'], 'Boolean');
        }

        if (data.hasOwnProperty('items')) {
          obj['items'] = _ApiClient["default"].convertToType(data['items'], [_UserSearchResultItem["default"]]);
        }

        if (data.hasOwnProperty('total_count')) {
          obj['total_count'] = _ApiClient["default"].convertToType(data['total_count'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20019;
}();
/**
 * @member {Boolean} incomplete_results
 */


InlineResponse20019.prototype['incomplete_results'] = undefined;
/**
 * @member {Array.<module:model/UserSearchResultItem>} items
 */

InlineResponse20019.prototype['items'] = undefined;
/**
 * @member {Number} total_count
 */

InlineResponse20019.prototype['total_count'] = undefined;
var _default = InlineResponse20019;
exports["default"] = _default;