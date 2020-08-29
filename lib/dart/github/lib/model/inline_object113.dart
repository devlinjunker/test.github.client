part of openapi.api;

class InlineObject113 {
  /* The body text of the pull request review */
  String body = null;
  /* The review action you want to perform. The review actions include: `APPROVE`, `REQUEST_CHANGES`, or `COMMENT`. When you leave this blank, the API returns _HTTP 422 (Unrecognizable entity)_ and sets the review action state to `PENDING`, which means you will need to re-submit the pull request review using a review action. */
  String event = null;
  //enum eventEnum {  APPROVE,  REQUEST_CHANGES,  COMMENT,  };{

  InlineObject113({
    this.body,
    this.event,
  });

  @override
  String toString() {
    return 'InlineObject113[body=$body, event=$event, ]';
  }

  InlineObject113.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    body = json['body'];
    event = json['event'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (body != null)
      json['body'] = body;
    if (event != null)
      json['event'] = event;
    return json;
  }

  static List<InlineObject113> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineObject113>() : json.map((value) => InlineObject113.fromJson(value)).toList();
  }

  static Map<String, InlineObject113> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineObject113>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineObject113.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject113-objects as value to a dart map
  static Map<String, List<InlineObject113>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineObject113>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineObject113.listFromJson(value);
       });
     }
     return map;
  }
}

