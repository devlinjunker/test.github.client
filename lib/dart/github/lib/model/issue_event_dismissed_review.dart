part of openapi.api;

class IssueEventDismissedReview {
  
  String dismissalCommitId = null;
  
  String dismissalMessage = null;
  
  int reviewId = null;
  
  String state = null;

  IssueEventDismissedReview({
    this.dismissalCommitId,
    this.dismissalMessage,
    this.reviewId,
    this.state,
  });

  @override
  String toString() {
    return 'IssueEventDismissedReview[dismissalCommitId=$dismissalCommitId, dismissalMessage=$dismissalMessage, reviewId=$reviewId, state=$state, ]';
  }

  IssueEventDismissedReview.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    dismissalCommitId = json['dismissal_commit_id'];
    dismissalMessage = json['dismissal_message'];
    reviewId = json['review_id'];
    state = json['state'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
      json['dismissal_commit_id'] = dismissalCommitId;
      json['dismissal_message'] = dismissalMessage;
    if (reviewId != null)
      json['review_id'] = reviewId;
    if (state != null)
      json['state'] = state;
    return json;
  }

  static List<IssueEventDismissedReview> listFromJson(List<dynamic> json) {
    return json == null ? List<IssueEventDismissedReview>() : json.map((value) => IssueEventDismissedReview.fromJson(value)).toList();
  }

  static Map<String, IssueEventDismissedReview> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, IssueEventDismissedReview>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = IssueEventDismissedReview.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of IssueEventDismissedReview-objects as value to a dart map
  static Map<String, List<IssueEventDismissedReview>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<IssueEventDismissedReview>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = IssueEventDismissedReview.listFromJson(value);
       });
     }
     return map;
  }
}

