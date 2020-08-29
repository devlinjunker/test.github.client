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
 * The ReposOwnerRepoCheckRunsOutputImages model module.
 * @module model/ReposOwnerRepoCheckRunsOutputImages
 * @version 0.0.5
 */
var ReposOwnerRepoCheckRunsOutputImages = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ReposOwnerRepoCheckRunsOutputImages</code>.
   * @alias module:model/ReposOwnerRepoCheckRunsOutputImages
   * @param alt {String} The alternative text for the image.
   * @param imageUrl {String} The full URL of the image.
   */
  function ReposOwnerRepoCheckRunsOutputImages(alt, imageUrl) {
    _classCallCheck(this, ReposOwnerRepoCheckRunsOutputImages);

    ReposOwnerRepoCheckRunsOutputImages.initialize(this, alt, imageUrl);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ReposOwnerRepoCheckRunsOutputImages, null, [{
    key: "initialize",
    value: function initialize(obj, alt, imageUrl) {
      obj['alt'] = alt;
      obj['image_url'] = imageUrl;
    }
    /**
     * Constructs a <code>ReposOwnerRepoCheckRunsOutputImages</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReposOwnerRepoCheckRunsOutputImages} obj Optional instance to populate.
     * @return {module:model/ReposOwnerRepoCheckRunsOutputImages} The populated <code>ReposOwnerRepoCheckRunsOutputImages</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ReposOwnerRepoCheckRunsOutputImages();

        if (data.hasOwnProperty('alt')) {
          obj['alt'] = _ApiClient["default"].convertToType(data['alt'], 'String');
        }

        if (data.hasOwnProperty('caption')) {
          obj['caption'] = _ApiClient["default"].convertToType(data['caption'], 'String');
        }

        if (data.hasOwnProperty('image_url')) {
          obj['image_url'] = _ApiClient["default"].convertToType(data['image_url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ReposOwnerRepoCheckRunsOutputImages;
}();
/**
 * The alternative text for the image.
 * @member {String} alt
 */


ReposOwnerRepoCheckRunsOutputImages.prototype['alt'] = undefined;
/**
 * A short image description.
 * @member {String} caption
 */

ReposOwnerRepoCheckRunsOutputImages.prototype['caption'] = undefined;
/**
 * The full URL of the image.
 * @member {String} image_url
 */

ReposOwnerRepoCheckRunsOutputImages.prototype['image_url'] = undefined;
var _default = ReposOwnerRepoCheckRunsOutputImages;
exports["default"] = _default;