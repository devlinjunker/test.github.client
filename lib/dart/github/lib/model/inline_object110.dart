part of openapi.api;

class InlineObject110 {
  /* **Required** when using `REQUEST_CHANGES` or `COMMENT` for the `event` parameter. The body text of the pull request review. */
  String body = null;
  /* Use the following table to specify the location, destination, and contents of the draft review comment. */
  List<ReposOwnerRepoPullsPullNumberReviewsComments> comments = [];
  /* The SHA of the commit that needs a review. Not using the latest commit SHA may render your review comment outdated if a subsequent commit modifies the line you specify as the `position`. Defaults to the most recent commit in the pull request when you do not specify a value. */
  String commitId = null;
  /* The review action you want to perform. The review actions include: `APPROVE`, `REQUEST_CHANGES`, or `COMMENT`. By leaving this blank, you set the review action state to `PENDING`, which means you will need to [submit the pull request review](https://developer.github.com/v3/pulls/reviews/#submit-a-review-for-a-pull-request) when you are ready. */
  String event = null;
  //enum eventEnum {  APPROVE,  REQUEST_CHANGES,  COMMENT,  };{

  InlineObject110({
    this.body,
    this.comments,
    this.commitId,
    this.event,
  });

  @override
  String toString() {
    return 'InlineObject110[body=$body, comments=$comments, commitId=$commitId, event=$event, ]';
  }

  InlineObject110.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    body = json['body'];
    comments = (json['comments'] == null) ?
      null :
      ReposOwnerRepoPullsPullNumberReviewsComments.listFromJson(json['comments']);
    commitId = json['commit_id'];
    event = json['event'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (body != null)
      json['body'] = body;
    if (comments != null)
      json['comments'] = comments;
    if (commitId != null)
      json['commit_id'] = commitId;
    if (event != null)
      json['event'] = event;
    return json;
  }

  static List<InlineObject110> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineObject110>() : json.map((value) => InlineObject110.fromJson(value)).toList();
  }

  static Map<String, InlineObject110> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineObject110>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineObject110.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject110-objects as value to a dart map
  static Map<String, List<InlineObject110>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineObject110>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineObject110.listFromJson(value);
       });
     }
     return map;
  }
}

