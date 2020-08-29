part of openapi.api;

class EventPayload {
  
  String action = null;
  
  IssueComment comment = null;
  
  IssueSimple issue = null;
  
  List<EventPayloadPages> pages = [];

  EventPayload({
    this.action,
    this.comment,
    this.issue,
    this.pages,
  });

  @override
  String toString() {
    return 'EventPayload[action=$action, comment=$comment, issue=$issue, pages=$pages, ]';
  }

  EventPayload.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    action = json['action'];
    comment = (json['comment'] == null) ?
      null :
      IssueComment.fromJson(json['comment']);
    issue = (json['issue'] == null) ?
      null :
      IssueSimple.fromJson(json['issue']);
    pages = (json['pages'] == null) ?
      null :
      EventPayloadPages.listFromJson(json['pages']);
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (action != null)
      json['action'] = action;
    if (comment != null)
      json['comment'] = comment;
    if (issue != null)
      json['issue'] = issue;
    if (pages != null)
      json['pages'] = pages;
    return json;
  }

  static List<EventPayload> listFromJson(List<dynamic> json) {
    return json == null ? List<EventPayload>() : json.map((value) => EventPayload.fromJson(value)).toList();
  }

  static Map<String, EventPayload> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, EventPayload>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = EventPayload.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of EventPayload-objects as value to a dart map
  static Map<String, List<EventPayload>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<EventPayload>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = EventPayload.listFromJson(value);
       });
     }
     return map;
  }
}

