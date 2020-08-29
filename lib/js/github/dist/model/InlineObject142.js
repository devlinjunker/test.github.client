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
 * The InlineObject142 model module.
 * @module model/InlineObject142
 * @version 0.0.5
 */
var InlineObject142 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject142</code>.
   * @alias module:model/InlineObject142
   * @param repositories {Array.<String>} 
   */
  function InlineObject142(repositories) {
    _classCallCheck(this, InlineObject142);

    InlineObject142.initialize(this, repositories);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject142, null, [{
    key: "initialize",
    value: function initialize(obj, repositories) {
      obj['repositories'] = repositories;
    }
    /**
     * Constructs a <code>InlineObject142</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject142} obj Optional instance to populate.
     * @return {module:model/InlineObject142} The populated <code>InlineObject142</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject142();

        if (data.hasOwnProperty('exclude')) {
          obj['exclude'] = _ApiClient["default"].convertToType(data['exclude'], ['String']);
        }

        if (data.hasOwnProperty('exclude_attachments')) {
          obj['exclude_attachments'] = _ApiClient["default"].convertToType(data['exclude_attachments'], 'Boolean');
        }

        if (data.hasOwnProperty('lock_repositories')) {
          obj['lock_repositories'] = _ApiClient["default"].convertToType(data['lock_repositories'], 'Boolean');
        }

        if (data.hasOwnProperty('repositories')) {
          obj['repositories'] = _ApiClient["default"].convertToType(data['repositories'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return InlineObject142;
}();
/**
 * Exclude attributes from the API response to improve performance
 * @member {Array.<module:model/InlineObject142.ExcludeEnum>} exclude
 */


InlineObject142.prototype['exclude'] = undefined;
/**
 * Do not include attachments in the migration
 * @member {Boolean} exclude_attachments
 */

InlineObject142.prototype['exclude_attachments'] = undefined;
/**
 * Lock the repositories being migrated at the start of the migration
 * @member {Boolean} lock_repositories
 */

InlineObject142.prototype['lock_repositories'] = undefined;
/**
 * @member {Array.<String>} repositories
 */

InlineObject142.prototype['repositories'] = undefined;
/**
 * Allowed values for the <code>exclude</code> property.
 * @enum {String}
 * @readonly
 */

InlineObject142['ExcludeEnum'] = {
  /**
   * value: "repositories"
   * @const
   */
  "repositories": "repositories"
};
var _default = InlineObject142;
exports["default"] = _default;