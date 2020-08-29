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


import ApiClient from "../ApiClient";
import GitignoreTemplate from '../model/GitignoreTemplate';

/**
* Gitignore service.
* @module api/GitignoreApi
* @version 0.0.5
*/
export default class GitignoreApi {

    /**
    * Constructs a new GitignoreApi. 
    * @alias module:api/GitignoreApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the gitignoreGetAllTemplates operation.
     * @callback module:api/GitignoreApi~gitignoreGetAllTemplatesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<String>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all gitignore templates
     * List all templates available to pass as an option when [creating a repository](https://developer.github.com/v3/repos/#create-a-repository-for-the-authenticated-user).
     * @param {module:api/GitignoreApi~gitignoreGetAllTemplatesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<String>}
     */
    gitignoreGetAllTemplates(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ['String'];
      return this.apiClient.callApi(
        '/gitignore/templates', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the gitignoreGetTemplate operation.
     * @callback module:api/GitignoreApi~gitignoreGetTemplateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GitignoreTemplate} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a gitignore template
     * The API also allows fetching the source of a single template. Use the raw [media type](https://developer.github.com/v3/media/) to get the raw contents.
     * @param {String} name name parameter
     * @param {module:api/GitignoreApi~gitignoreGetTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GitignoreTemplate}
     */
    gitignoreGetTemplate(name, callback) {
      let postBody = null;
      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling gitignoreGetTemplate");
      }

      let pathParams = {
        'name': name
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GitignoreTemplate;
      return this.apiClient.callApi(
        '/gitignore/templates/{name}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}