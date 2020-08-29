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
 * The InlineObject56 model module.
 * @module model/InlineObject56
 * @version 0.0.5
 */
var InlineObject56 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject56</code>.
   * @alias module:model/InlineObject56
   */
  function InlineObject56() {
    _classCallCheck(this, InlineObject56);

    InlineObject56.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject56, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineObject56</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject56} obj Optional instance to populate.
     * @return {module:model/InlineObject56} The populated <code>InlineObject56</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject56();

        if (data.hasOwnProperty('permission')) {
          obj['permission'] = _ApiClient["default"].convertToType(data['permission'], 'String');
        }

        if (data.hasOwnProperty('permissions')) {
          obj['permissions'] = _ApiClient["default"].convertToType(data['permissions'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineObject56;
}();
/**
 * The permission to grant the collaborator. **Only valid on organization-owned repositories.** Can be one of:   \\* `pull` - can pull, but not push to or administer this repository.   \\* `push` - can pull and push, but not administer this repository.   \\* `admin` - can pull, push and administer this repository.   \\* `maintain` - Recommended for project managers who need to manage the repository without access to sensitive or destructive actions.   \\* `triage` - Recommended for contributors who need to proactively manage issues and pull requests without write access.
 * @member {module:model/InlineObject56.PermissionEnum} permission
 * @default 'push'
 */


InlineObject56.prototype['permission'] = 'push';
/**
 * @member {String} permissions
 */

InlineObject56.prototype['permissions'] = undefined;
/**
 * Allowed values for the <code>permission</code> property.
 * @enum {String}
 * @readonly
 */

InlineObject56['PermissionEnum'] = {
  /**
   * value: "pull"
   * @const
   */
  "pull": "pull",

  /**
   * value: "push"
   * @const
   */
  "push": "push",

  /**
   * value: "admin"
   * @const
   */
  "admin": "admin",

  /**
   * value: "maintain"
   * @const
   */
  "maintain": "maintain",

  /**
   * value: "triage"
   * @const
   */
  "triage": "triage"
};
var _default = InlineObject56;
exports["default"] = _default;