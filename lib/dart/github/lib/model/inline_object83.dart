part of openapi.api;

class InlineObject83 {
  /* Login for the user that this issue should be assigned to. **This field is deprecated.** */
  String assignee = null;
  /* Logins for Users to assign to this issue. Pass one or more user logins to _replace_ the set of assignees on this Issue. Send an empty array (`[]`) to clear all assignees from the Issue. _NOTE: Only users with push access can set assignees for new issues. Assignees are silently dropped otherwise._ */
  List<String> assignees = [];
  /* The contents of the issue. */
  String body = null;
  /* Labels to associate with this issue. Pass one or more Labels to _replace_ the set of Labels on this Issue. Send an empty array (`[]`) to clear all Labels from the Issue. _NOTE: Only users with push access can set labels for issues. Labels are silently dropped otherwise._ */
  List<OneOf<string,object>> labels = [];
  /* The `number` of the milestone to associate this issue with or `null` to remove current. _NOTE: Only users with push access can set the milestone for issues. The milestone is silently dropped otherwise._ */
  int milestone = null;
  /* State of the issue. Either `open` or `closed`. */
  String state = null;
  //enum stateEnum {  open,  closed,  };{
  /* The title of the issue. */
  String title = null;

  InlineObject83({
    this.assignee,
    this.assignees,
    this.body,
    this.labels,
    this.milestone,
    this.state,
    this.title,
  });

  @override
  String toString() {
    return 'InlineObject83[assignee=$assignee, assignees=$assignees, body=$body, labels=$labels, milestone=$milestone, state=$state, title=$title, ]';
  }

  InlineObject83.fromJson(Map<String, dynamic> json) {
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
    state = json['state'];
    title = json['title'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (assignee != null)
      json['assignee'] = assignee;
    if (assignees != null)
      json['assignees'] = assignees;
    if (body != null)
      json['body'] = body;
    if (labels != null)
      json['labels'] = labels;
      json['milestone'] = milestone;
    if (state != null)
      json['state'] = state;
    if (title != null)
      json['title'] = title;
    return json;
  }

  static List<InlineObject83> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineObject83>() : json.map((value) => InlineObject83.fromJson(value)).toList();
  }

  static Map<String, InlineObject83> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineObject83>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineObject83.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject83-objects as value to a dart map
  static Map<String, List<InlineObject83>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineObject83>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineObject83.listFromJson(value);
       });
     }
     return map;
  }
}

