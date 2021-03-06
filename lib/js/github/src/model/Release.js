/**
 * GitHub v3 REST API
 * GitHub's v3 REST API.
 *
 * The version of the OpenAPI document: 0.0.5
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import ReleaseAsset from './ReleaseAsset';
import SimpleUser from './SimpleUser';

/**
 * The Release model module.
 * @module model/Release
 * @version 0.0.5
 */
class Release {
    /**
     * Constructs a new <code>Release</code>.
     * A release.
     * @alias module:model/Release
     * @param assets {Array.<module:model/ReleaseAsset>} 
     * @param assetsUrl {String} 
     * @param author {module:model/SimpleUser} 
     * @param createdAt {Date} 
     * @param draft {Boolean} true to create a draft (unpublished) release, false to create a published one.
     * @param htmlUrl {String} 
     * @param id {Number} 
     * @param name {String} 
     * @param nodeId {String} 
     * @param prerelease {Boolean} Whether to identify the release as a prerelease or a full release.
     * @param publishedAt {Date} 
     * @param tagName {String} The name of the tag.
     * @param tarballUrl {String} 
     * @param targetCommitish {String} Specifies the commitish value that determines where the Git tag is created from.
     * @param uploadUrl {String} 
     * @param url {String} 
     * @param zipballUrl {String} 
     */
    constructor(assets, assetsUrl, author, createdAt, draft, htmlUrl, id, name, nodeId, prerelease, publishedAt, tagName, tarballUrl, targetCommitish, uploadUrl, url, zipballUrl) { 
        
        Release.initialize(this, assets, assetsUrl, author, createdAt, draft, htmlUrl, id, name, nodeId, prerelease, publishedAt, tagName, tarballUrl, targetCommitish, uploadUrl, url, zipballUrl);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, assets, assetsUrl, author, createdAt, draft, htmlUrl, id, name, nodeId, prerelease, publishedAt, tagName, tarballUrl, targetCommitish, uploadUrl, url, zipballUrl) { 
        obj['assets'] = assets;
        obj['assets_url'] = assetsUrl;
        obj['author'] = author;
        obj['created_at'] = createdAt;
        obj['draft'] = draft;
        obj['html_url'] = htmlUrl;
        obj['id'] = id;
        obj['name'] = name;
        obj['node_id'] = nodeId;
        obj['prerelease'] = prerelease;
        obj['published_at'] = publishedAt;
        obj['tag_name'] = tagName;
        obj['tarball_url'] = tarballUrl;
        obj['target_commitish'] = targetCommitish;
        obj['upload_url'] = uploadUrl;
        obj['url'] = url;
        obj['zipball_url'] = zipballUrl;
    }

    /**
     * Constructs a <code>Release</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Release} obj Optional instance to populate.
     * @return {module:model/Release} The populated <code>Release</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Release();

            if (data.hasOwnProperty('assets')) {
                obj['assets'] = ApiClient.convertToType(data['assets'], [ReleaseAsset]);
            }
            if (data.hasOwnProperty('assets_url')) {
                obj['assets_url'] = ApiClient.convertToType(data['assets_url'], 'String');
            }
            if (data.hasOwnProperty('author')) {
                obj['author'] = SimpleUser.constructFromObject(data['author']);
            }
            if (data.hasOwnProperty('body')) {
                obj['body'] = ApiClient.convertToType(data['body'], 'String');
            }
            if (data.hasOwnProperty('body_html')) {
                obj['body_html'] = ApiClient.convertToType(data['body_html'], 'String');
            }
            if (data.hasOwnProperty('body_text')) {
                obj['body_text'] = ApiClient.convertToType(data['body_text'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('draft')) {
                obj['draft'] = ApiClient.convertToType(data['draft'], 'Boolean');
            }
            if (data.hasOwnProperty('html_url')) {
                obj['html_url'] = ApiClient.convertToType(data['html_url'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('node_id')) {
                obj['node_id'] = ApiClient.convertToType(data['node_id'], 'String');
            }
            if (data.hasOwnProperty('prerelease')) {
                obj['prerelease'] = ApiClient.convertToType(data['prerelease'], 'Boolean');
            }
            if (data.hasOwnProperty('published_at')) {
                obj['published_at'] = ApiClient.convertToType(data['published_at'], 'Date');
            }
            if (data.hasOwnProperty('tag_name')) {
                obj['tag_name'] = ApiClient.convertToType(data['tag_name'], 'String');
            }
            if (data.hasOwnProperty('tarball_url')) {
                obj['tarball_url'] = ApiClient.convertToType(data['tarball_url'], 'String');
            }
            if (data.hasOwnProperty('target_commitish')) {
                obj['target_commitish'] = ApiClient.convertToType(data['target_commitish'], 'String');
            }
            if (data.hasOwnProperty('upload_url')) {
                obj['upload_url'] = ApiClient.convertToType(data['upload_url'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('zipball_url')) {
                obj['zipball_url'] = ApiClient.convertToType(data['zipball_url'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/ReleaseAsset>} assets
 */
Release.prototype['assets'] = undefined;

/**
 * @member {String} assets_url
 */
Release.prototype['assets_url'] = undefined;

/**
 * @member {module:model/SimpleUser} author
 */
Release.prototype['author'] = undefined;

/**
 * @member {String} body
 */
Release.prototype['body'] = undefined;

/**
 * @member {String} body_html
 */
Release.prototype['body_html'] = undefined;

/**
 * @member {String} body_text
 */
Release.prototype['body_text'] = undefined;

/**
 * @member {Date} created_at
 */
Release.prototype['created_at'] = undefined;

/**
 * true to create a draft (unpublished) release, false to create a published one.
 * @member {Boolean} draft
 */
Release.prototype['draft'] = undefined;

/**
 * @member {String} html_url
 */
Release.prototype['html_url'] = undefined;

/**
 * @member {Number} id
 */
Release.prototype['id'] = undefined;

/**
 * @member {String} name
 */
Release.prototype['name'] = undefined;

/**
 * @member {String} node_id
 */
Release.prototype['node_id'] = undefined;

/**
 * Whether to identify the release as a prerelease or a full release.
 * @member {Boolean} prerelease
 */
Release.prototype['prerelease'] = undefined;

/**
 * @member {Date} published_at
 */
Release.prototype['published_at'] = undefined;

/**
 * The name of the tag.
 * @member {String} tag_name
 */
Release.prototype['tag_name'] = undefined;

/**
 * @member {String} tarball_url
 */
Release.prototype['tarball_url'] = undefined;

/**
 * Specifies the commitish value that determines where the Git tag is created from.
 * @member {String} target_commitish
 */
Release.prototype['target_commitish'] = undefined;

/**
 * @member {String} upload_url
 */
Release.prototype['upload_url'] = undefined;

/**
 * @member {String} url
 */
Release.prototype['url'] = undefined;

/**
 * @member {String} zipball_url
 */
Release.prototype['zipball_url'] = undefined;






export default Release;

