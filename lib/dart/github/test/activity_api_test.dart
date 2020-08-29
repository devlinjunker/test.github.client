import 'package:openapi/api.dart';
import 'package:test/test.dart';


/// tests for ActivityApi
void main() {
  var instance = ActivityApi();

  group('tests for ActivityApi', () {
    // Check if a repository is starred by the authenticated user
    //
    //Future activityCheckRepoIsStarredByAuthenticatedUser(String owner, String repo) async 
    test('test activityCheckRepoIsStarredByAuthenticatedUser', () async {
      // TODO
    });

    // Delete a repository subscription
    //
    // This endpoint should only be used to stop watching a repository. To control whether or not you wish to receive notifications from a repository, [set the repository's subscription manually](https://developer.github.com/v3/activity/watching/#set-a-repository-subscription).
    //
    //Future activityDeleteRepoSubscription(String owner, String repo) async 
    test('test activityDeleteRepoSubscription', () async {
      // TODO
    });

    // Delete a thread subscription
    //
    // Mutes all future notifications for a conversation until you comment on the thread or get an **@mention**. If you are watching the repository of the thread, you will still receive notifications. To ignore future notifications for a repository you are watching, use the [Set a thread subscription](https://developer.github.com/v3/activity/notifications/#set-a-thread-subscription) endpoint and set `ignore` to `true`.
    //
    //Future activityDeleteThreadSubscription(int threadId) async 
    test('test activityDeleteThreadSubscription', () async {
      // TODO
    });

    // Get feeds
    //
    // GitHub provides several timeline resources in [Atom](http://en.wikipedia.org/wiki/Atom_(standard)) format. The Feeds API lists all the feeds available to the authenticated user:  *   **Timeline**: The GitHub global public timeline *   **User**: The public timeline for any user, using [URI template](https://developer.github.com/v3/#hypermedia) *   **Current user public**: The public timeline for the authenticated user *   **Current user**: The private timeline for the authenticated user *   **Current user actor**: The private timeline for activity created by the authenticated user *   **Current user organizations**: The private timeline for the organizations the authenticated user is a member of. *   **Security advisories**: A collection of public announcements that provide information about security-related vulnerabilities in software on GitHub.  **Note**: Private feeds are only returned when [authenticating via Basic Auth](https://developer.github.com/v3/#basic-authentication) since current feed URIs use the older, non revocable auth tokens.
    //
    //Future<Feed> activityGetFeeds() async 
    test('test activityGetFeeds', () async {
      // TODO
    });

    // Get a repository subscription
    //
    //Future<RepositorySubscription> activityGetRepoSubscription(String owner, String repo) async 
    test('test activityGetRepoSubscription', () async {
      // TODO
    });

    // Get a thread
    //
    //Future<Thread> activityGetThread(int threadId) async 
    test('test activityGetThread', () async {
      // TODO
    });

    // Get a thread subscription for the authenticated user
    //
    // This checks to see if the current user is subscribed to a thread. You can also [get a repository subscription](https://developer.github.com/v3/activity/watching/#get-a-repository-subscription).  Note that subscriptions are only generated if a user is participating in a conversation--for example, they've replied to the thread, were **@mentioned**, or manually subscribe to a thread.
    //
    //Future<ThreadSubscription> activityGetThreadSubscriptionForAuthenticatedUser(int threadId) async 
    test('test activityGetThreadSubscriptionForAuthenticatedUser', () async {
      // TODO
    });

    // List events for the authenticated user
    //
    // If you are authenticated as the given user, you will see your private events. Otherwise, you'll only see public events.
    //
    //Future<List<Event>> activityListEventsForAuthenticatedUser(String username, { int perPage, int page }) async 
    test('test activityListEventsForAuthenticatedUser', () async {
      // TODO
    });

    // List notifications for the authenticated user
    //
    // List all notifications for the current user, sorted by most recently updated.
    //
    //Future<List<Thread>> activityListNotificationsForAuthenticatedUser({ bool all, bool participating, String since, String before, int perPage, int page }) async 
    test('test activityListNotificationsForAuthenticatedUser', () async {
      // TODO
    });

    // List organization events for the authenticated user
    //
    // This is the user's organization dashboard. You must be authenticated as the user to view this.
    //
    //Future<List<Event>> activityListOrgEventsForAuthenticatedUser(String username, String org, { int perPage, int page }) async 
    test('test activityListOrgEventsForAuthenticatedUser', () async {
      // TODO
    });

    // List public events
    //
    // We delay the public events feed by five minutes, which means the most recent event returned by the public events API actually occurred at least five minutes ago.
    //
    //Future<List<Event>> activityListPublicEvents({ int perPage, int page }) async 
    test('test activityListPublicEvents', () async {
      // TODO
    });

    // List public events for a network of repositories
    //
    //Future<List<Event>> activityListPublicEventsForRepoNetwork(String owner, String repo, { int perPage, int page }) async 
    test('test activityListPublicEventsForRepoNetwork', () async {
      // TODO
    });

    // List public events for a user
    //
    //Future<List<Event>> activityListPublicEventsForUser(String username, { int perPage, int page }) async 
    test('test activityListPublicEventsForUser', () async {
      // TODO
    });

    // List public organization events
    //
    //Future<List<Event>> activityListPublicOrgEvents(String org, { int perPage, int page }) async 
    test('test activityListPublicOrgEvents', () async {
      // TODO
    });

    // List events received by the authenticated user
    //
    // These are events that you've received by watching repos and following users. If you are authenticated as the given user, you will see private events. Otherwise, you'll only see public events.
    //
    //Future<List<Event>> activityListReceivedEventsForUser(String username, { int perPage, int page }) async 
    test('test activityListReceivedEventsForUser', () async {
      // TODO
    });

    // List public events received by a user
    //
    //Future<List<Event>> activityListReceivedPublicEventsForUser(String username, { int perPage, int page }) async 
    test('test activityListReceivedPublicEventsForUser', () async {
      // TODO
    });

    // List repository events
    //
    //Future<List<Event>> activityListRepoEvents(String owner, String repo, { int perPage, int page }) async 
    test('test activityListRepoEvents', () async {
      // TODO
    });

    // List repository notifications for the authenticated user
    //
    // List all notifications for the current user.
    //
    //Future<List<Thread>> activityListRepoNotificationsForAuthenticatedUser(String owner, String repo, { bool all, bool participating, String since, String before, int perPage, int page }) async 
    test('test activityListRepoNotificationsForAuthenticatedUser', () async {
      // TODO
    });

    // List repositories starred by the authenticated user
    //
    // Lists repositories the authenticated user has starred.  You can also find out _when_ stars were created by passing the following custom [media type](https://developer.github.com/v3/media/) via the `Accept` header:
    //
    //Future<List<Repository>> activityListReposStarredByAuthenticatedUser({ String sort, String direction, int perPage, int page }) async 
    test('test activityListReposStarredByAuthenticatedUser', () async {
      // TODO
    });

    // List repositories starred by a user
    //
    // Lists repositories a user has starred.  You can also find out _when_ stars were created by passing the following custom [media type](https://developer.github.com/v3/media/) via the `Accept` header:
    //
    //Future<List<Repository>> activityListReposStarredByUser(String username, { String sort, String direction, int perPage, int page }) async 
    test('test activityListReposStarredByUser', () async {
      // TODO
    });

    // List repositories watched by a user
    //
    // Lists repositories a user is watching.
    //
    //Future<List<MinimalRepository>> activityListReposWatchedByUser(String username, { int perPage, int page }) async 
    test('test activityListReposWatchedByUser', () async {
      // TODO
    });

    // List stargazers
    //
    // Lists the people that have starred the repository.  You can also find out _when_ stars were created by passing the following custom [media type](https://developer.github.com/v3/media/) via the `Accept` header:
    //
    //Future<List<SimpleUser>> activityListStargazersForRepo(String owner, String repo, { int perPage, int page }) async 
    test('test activityListStargazersForRepo', () async {
      // TODO
    });

    // List repositories watched by the authenticated user
    //
    // Lists repositories the authenticated user is watching.
    //
    //Future<List<MinimalRepository>> activityListWatchedReposForAuthenticatedUser({ int perPage, int page }) async 
    test('test activityListWatchedReposForAuthenticatedUser', () async {
      // TODO
    });

    // List watchers
    //
    // Lists the people watching the specified repository.
    //
    //Future<List<SimpleUser>> activityListWatchersForRepo(String owner, String repo, { int perPage, int page }) async 
    test('test activityListWatchersForRepo', () async {
      // TODO
    });

    // Mark notifications as read
    //
    // Marks all notifications as \"read\" removes it from the [default view on GitHub](https://github.com/notifications). If the number of notifications is too large to complete in one request, you will receive a `202 Accepted` status and GitHub will run an asynchronous process to mark notifications as \"read.\" To check whether any \"unread\" notifications remain, you can use the [List notifications for the authenticated user](https://developer.github.com/v3/activity/notifications/#list-notifications-for-the-authenticated-user) endpoint and pass the query parameter `all=false`.
    //
    //Future<InlineResponse202> activityMarkNotificationsAsRead({ InlineObject14 inlineObject14 }) async 
    test('test activityMarkNotificationsAsRead', () async {
      // TODO
    });

    // Mark repository notifications as read
    //
    // Marks all notifications in a repository as \"read\" removes them from the [default view on GitHub](https://github.com/notifications). If the number of notifications is too large to complete in one request, you will receive a `202 Accepted` status and GitHub will run an asynchronous process to mark notifications as \"read.\" To check whether any \"unread\" notifications remain, you can use the [List repository notifications for the authenticated user](https://developer.github.com/v3/activity/notifications/#list-repository-notifications-for-the-authenticated-user) endpoint and pass the query parameter `all=false`.
    //
    //Future activityMarkRepoNotificationsAsRead(String owner, String repo, { InlineObject97 inlineObject97 }) async 
    test('test activityMarkRepoNotificationsAsRead', () async {
      // TODO
    });

    // Mark a thread as read
    //
    //Future activityMarkThreadAsRead(int threadId) async 
    test('test activityMarkThreadAsRead', () async {
      // TODO
    });

    // Set a repository subscription
    //
    // If you would like to watch a repository, set `subscribed` to `true`. If you would like to ignore notifications made within a repository, set `ignored` to `true`. If you would like to stop watching a repository, [delete the repository's subscription](https://developer.github.com/v3/activity/watching/#delete-a-repository-subscription) completely.
    //
    //Future<RepositorySubscription> activitySetRepoSubscription(String owner, String repo, { InlineObject119 inlineObject119 }) async 
    test('test activitySetRepoSubscription', () async {
      // TODO
    });

    // Set a thread subscription
    //
    // If you are watching a repository, you receive notifications for all threads by default. Use this endpoint to ignore future notifications for threads until you comment on the thread or get an **@mention**.  You can also use this endpoint to subscribe to threads that you are currently not receiving notifications for or to subscribed to threads that you have previously ignored.  Unsubscribing from a conversation in a repository that you are not watching is functionally equivalent to the [Delete a thread subscription](https://developer.github.com/v3/activity/notifications/#delete-a-thread-subscription) endpoint.
    //
    //Future<ThreadSubscription> activitySetThreadSubscription(int threadId, { InlineObject15 inlineObject15 }) async 
    test('test activitySetThreadSubscription', () async {
      // TODO
    });

    // Star a repository for the authenticated user
    //
    // Note that you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see \"[HTTP verbs](https://developer.github.com/v3/#http-verbs).\"
    //
    //Future activityStarRepoForAuthenticatedUser(String owner, String repo) async 
    test('test activityStarRepoForAuthenticatedUser', () async {
      // TODO
    });

    // Unstar a repository for the authenticated user
    //
    //Future activityUnstarRepoForAuthenticatedUser(String owner, String repo) async 
    test('test activityUnstarRepoForAuthenticatedUser', () async {
      // TODO
    });

  });
}
