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
 * The InlineObject24 model module.
 * @module model/InlineObject24
 * @version 0.0.5
 */
var InlineObject24 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject24</code>.
   * @alias module:model/InlineObject24
   * @param repositories {Array.<String>} A list of arrays indicating which repositories should be migrated.
   */
  function InlineObject24(repositories) {
    _classCallCheck(this, InlineObject24);

    InlineObject24.initialize(this, repositories);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject24, null, [{
    key: "initialize",
    value: function initialize(obj, repositories) {
      obj['repositories'] = repositories;
    }
    /**
     * Constructs a <code>InlineObject24</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject24} obj Optional instance to populate.
     * @return {module:model/InlineObject24} The populated <code>InlineObject24</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject24();

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

  return InlineObject24;
}();
/**
 * @member {Array.<String>} exclude
 */


InlineObject24.prototype['exclude'] = undefined;
/**
 * Indicates whether attachments should be excluded from the migration (to reduce migration archive file size).
 * @member {Boolean} exclude_attachments
 * @default false
 */

InlineObject24.prototype['exclude_attachments'] = false;
/**
 * Indicates whether repositories should be locked (to prevent manipulation) while migrating data.
 * @member {Boolean} lock_repositories
 * @default false
 */

InlineObject24.prototype['lock_repositories'] = false;
/**
 * A list of arrays indicating which repositories should be migrated.
 * @member {Array.<String>} repositories
 */

InlineObject24.prototype['repositories'] = undefined;
var _default = InlineObject24;
exports["default"] = _default;