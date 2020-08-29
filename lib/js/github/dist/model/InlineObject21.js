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
 * The InlineObject21 model module.
 * @module model/InlineObject21
 * @version 0.0.5
 */
var InlineObject21 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject21</code>.
   * @alias module:model/InlineObject21
   * @param limit {module:model/InlineObject21.LimitEnum} Specifies the group of GitHub users who can comment, open issues, or create pull requests in public repositories for the given organization. Must be one of: `existing_users`, `contributors_only`, or `collaborators_only`.
   */
  function InlineObject21(limit) {
    _classCallCheck(this, InlineObject21);

    InlineObject21.initialize(this, limit);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject21, null, [{
    key: "initialize",
    value: function initialize(obj, limit) {
      obj['limit'] = limit;
    }
    /**
     * Constructs a <code>InlineObject21</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject21} obj Optional instance to populate.
     * @return {module:model/InlineObject21} The populated <code>InlineObject21</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject21();

        if (data.hasOwnProperty('limit')) {
          obj['limit'] = _ApiClient["default"].convertToType(data['limit'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineObject21;
}();
/**
 * Specifies the group of GitHub users who can comment, open issues, or create pull requests in public repositories for the given organization. Must be one of: `existing_users`, `contributors_only`, or `collaborators_only`.
 * @member {module:model/InlineObject21.LimitEnum} limit
 */


InlineObject21.prototype['limit'] = undefined;
/**
 * Allowed values for the <code>limit</code> property.
 * @enum {String}
 * @readonly
 */

InlineObject21['LimitEnum'] = {
  /**
   * value: "existing_users"
   * @const
   */
  "existing_users": "existing_users",

  /**
   * value: "contributors_only"
   * @const
   */
  "contributors_only": "contributors_only",

  /**
   * value: "collaborators_only"
   * @const
   */
  "collaborators_only": "collaborators_only"
};
var _default = InlineObject21;
exports["default"] = _default;