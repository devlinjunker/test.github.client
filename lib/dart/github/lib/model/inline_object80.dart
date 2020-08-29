part of openapi.api;

class InlineObject80 {
  /* Login for the user that this issue should be assigned to. _NOTE: Only users with push access can set the assignee for new issues. The assignee is silently dropped otherwise. **This field is deprecated.**_ */
  String assignee = null;
  /* Logins for Users to assign to this issue. _NOTE: Only users with push access can set assignees for new issues. Assignees are silently dropped otherwise._ */
  List<String> assignees = [];
  /* The contents of the issue. */
  String body = null;
  /* Labels to associate with this issue. _NOTE: Only users with push access can set labels for new issues. Labels are silently dropped otherwise._ */
  List<OneOf<string,object>> labels = [];
  /* The `number` of the milestone to associate this issue with. _NOTE: Only users with push access can set the milestone for new issues. The milestone is silently dropped otherwise._ */
  int milestone = null;
  /* The title of the issue. */
  String title = null;

  InlineObject80({
    this.assignee,
    this.assignees,
    this.body,
    this.labels,
    this.milestone,
    this.title,
  });

  @override
  String toString() {
    return 'InlineObject80[assignee=$assignee, assignees=$assignees, body=$body, labels=$labels, milestone=$milestone, title=$title, ]';
  }

  InlineObject80.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    assignee = json['assignee'];
    assignees = (json['assignees'] == null) ?
      null :
      (json['assignees'] as List).cast<String>();
    body = json['body'];
    labels = (json['labels'] == null) ?
      null :
      OneOf&lt;string,object&gt;.listFromJson(json['labels']);
    milestone = json['milestone'];
    title = json['title'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
      json['assignee'] = assignee;
    if (assignees != null)
      json['assignees'] = assignees;
    if (body != null)
      json['body'] = body;
    if (labels != null)
      json['labels'] = labels;
      json['milestone'] = milestone;
    if (title != null)
      json['title'] = title;
    return json;
  }

  static List<InlineObject80> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineObject80>() : json.map((value) => InlineObject80.fromJson(value)).toList();
  }

  static Map<String, InlineObject80> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineObject80>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineObject80.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject80-objects as value to a dart map
  static Map<String, List<InlineObject80>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineObject80>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineObject80.listFromJson(value);
       });
     }
     return map;
  }
}

