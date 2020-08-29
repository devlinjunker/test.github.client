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
 * The InlineObject37 model module.
 * @module model/InlineObject37
 * @version 0.0.5
 */
var InlineObject37 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject37</code>.
   * @alias module:model/InlineObject37
   */
  function InlineObject37() {
    _classCallCheck(this, InlineObject37);

    InlineObject37.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject37, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineObject37</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject37} obj Optional instance to populate.
     * @return {module:model/InlineObject37} The populated <code>InlineObject37</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject37();

        if (data.hasOwnProperty('permission')) {
          obj['permission'] = _ApiClient["default"].convertToType(data['permission'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineObject37;
}();
/**
 * The permission to grant the team on this repository. Can be one of:   \\* `pull` - team members can pull, but not push to or administer this repository.   \\* `push` - team members can pull and push, but not administer this repository.   \\* `admin` - team members can pull, push and administer this repository.   \\* `maintain` - team members can manage the repository without access to sensitive or destructive actions. Recommended for project managers. Only applies to repositories owned by organizations.   \\* `triage` - team members can proactively manage issues and pull requests without write access. Recommended for contributors who triage a repository. Only applies to repositories owned by organizations.      If no permission is specified, the team's `permission` attribute will be used to determine what permission to grant the team on this repository.
 * @member {module:model/InlineObject37.PermissionEnum} permission
 */


InlineObject37.prototype['permission'] = undefined;
/**
 * Allowed values for the <code>permission</code> property.
 * @enum {String}
 * @readonly
 */

InlineObject37['PermissionEnum'] = {
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
var _default = InlineObject37;
exports["default"] = _default;