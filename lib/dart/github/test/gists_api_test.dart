import 'package:openapi/api.dart';
import 'package:test/test.dart';


/// tests for GistsApi
void main() {
  var instance = GistsApi();

  group('tests for GistsApi', () {
    // Check if a gist is starred
    //
    //Future gistsCheckIsStarred(String gistId) async 
    test('test gistsCheckIsStarred', () async {
      // TODO
    });

    // Create a gist
    //
    // Allows you to add a new gist with one or more files.  **Note:** Don't name your files \"gistfile\" with a numerical suffix. This is the format of the automatic naming scheme that Gist uses internally.
    //
    //Future<GistFull> gistsCreate({ InlineObject10 inlineObject10 }) async 
    test('test gistsCreate', () async {
      // TODO
    });

    // Create a gist comment
    //
    //Future<GistComment> gistsCreateComment(String gistId, { InlineObject11 inlineObject11 }) async 
    test('test gistsCreateComment', () async {
      // TODO
    });

    // Delete a gist
    //
    //Future gistsDelete(String gistId) async 
    test('test gistsDelete', () async {
      // TODO
    });

    // Delete a gist comment
    //
    //Future gistsDeleteComment(String gistId, int commentId) async 
    test('test gistsDeleteComment', () async {
      // TODO
    });

    // Fork a gist
    //
    // **Note**: This was previously `/gists/:gist_id/fork`.
    //
    //Future<BaseGist> gistsFork(String gistId) async 
    test('test gistsFork', () async {
      // TODO
    });

    // Get a gist
    //
    //Future<GistFull> gistsGet(String gistId) async 
    test('test gistsGet', () async {
      // TODO
    });

    // Get a gist comment
    //
    //Future<GistComment> gistsGetComment(String gistId, int commentId) async 
    test('test gistsGetComment', () async {
      // TODO
    });

    // Get a gist revision
    //
    //Future<GistFull> gistsGetRevision(String gistId, String sha) async 
    test('test gistsGetRevision', () async {
      // TODO
    });

    // List gists for the authenticated user
    //
    // Lists the authenticated user's gists or if called anonymously, this endpoint returns all public gists:
    //
    //Future<List<BaseGist>> gistsList({ String since, int perPage, int page }) async 
    test('test gistsList', () async {
      // TODO
    });

    // List gist comments
    //
    //Future<List<GistComment>> gistsListComments(String gistId, { int perPage, int page }) async 
    test('test gistsListComments', () async {
      // TODO
    });

    // List gist commits
    //
    //Future<List<GistCommit>> gistsListCommits(String gistId, { int perPage, int page }) async 
    test('test gistsListCommits', () async {
      // TODO
    });

    // List gists for a user
    //
    // Lists public gists for the specified user:
    //
    //Future<List<BaseGist>> gistsListForUser(String username, { String since, int perPage, int page }) async 
    test('test gistsListForUser', () async {
      // TODO
    });

    // List gist forks
    //
    //Future<List<GistFull>> gistsListForks(String gistId, { int perPage, int page }) async 
    test('test gistsListForks', () async {
      // TODO
    });

    // List public gists
    //
    // List public gists sorted by most recently updated to least recently updated.  Note: With [pagination](https://developer.github.com/v3/#pagination), you can fetch up to 3000 gists. For example, you can fetch 100 pages with 30 gists per page or 30 pages with 100 gists per page.
    //
    //Future<List<BaseGist>> gistsListPublic({ String since, int perPage, int page }) async 
    test('test gistsListPublic', () async {
      // TODO
    });

    // List starred gists
    //
    // List the authenticated user's starred gists:
    //
    //Future<List<BaseGist>> gistsListStarred({ String since, int perPage, int page }) async 
    test('test gistsListStarred', () async {
      // TODO
    });

    // Star a gist
    //
    // Note that you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see \"[HTTP verbs](https://developer.github.com/v3/#http-verbs).\"
    //
    //Future gistsStar(String gistId) async 
    test('test gistsStar', () async {
      // TODO
    });

    // Unstar a gist
    //
    //Future gistsUnstar(String gistId) async 
    test('test gistsUnstar', () async {
      // TODO
    });

    // Update a gist
    //
    // Allows you to update or delete a gist file and rename gist files. Files from the previous version of the gist that aren't explicitly changed during an edit are unchanged.
    //
    //Future<GistFull> gistsUpdate(String gistId, { UNKNOWN_BASE_TYPE UNKNOWN_BASE_TYPE }) async 
    test('test gistsUpdate', () async {
      // TODO
    });

    // Update a gist comment
    //
    //Future<GistComment> gistsUpdateComment(String gistId, int commentId, { InlineObject12 inlineObject12 }) async 
    test('test gistsUpdateComment', () async {
      // TODO
    });

  });
}
