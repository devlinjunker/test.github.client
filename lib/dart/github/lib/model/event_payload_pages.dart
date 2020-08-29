part of openapi.api;

class EventPayloadPages {
  
  String action = null;
  
  String htmlUrl = null;
  
  String pageName = null;
  
  String sha = null;
  
  String summary = null;
  
  String title = null;

  EventPayloadPages({
    this.action,
    this.htmlUrl,
    this.pageName,
    this.sha,
    this.summary,
    this.title,
  });

  @override
  String toString() {
    return 'EventPayloadPages[action=$action, htmlUrl=$htmlUrl, pageName=$pageName, sha=$sha, summary=$summary, title=$title, ]';
  }

  EventPayloadPages.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    action = json['action'];
    htmlUrl = json['html_url'];
    pageName = json['page_name'];
    sha = json['sha'];
    summary = json['summary'];
    title = json['title'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (action != null)
      json['action'] = action;
    if (htmlUrl != null)
      json['html_url'] = htmlUrl;
    if (pageName != null)
      json['page_name'] = pageName;
    if (sha != null)
      json['sha'] = sha;
      json['summary'] = summary;
    if (title != null)
      json['title'] = title;
    return json;
  }

  static List<EventPayloadPages> listFromJson(List<dynamic> json) {
    return json == null ? List<EventPayloadPages>() : json.map((value) => EventPayloadPages.fromJson(value)).toList();
  }

  static Map<String, EventPayloadPages> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, EventPayloadPages>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = EventPayloadPages.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of EventPayloadPages-objects as value to a dart map
  static Map<String, List<EventPayloadPages>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<EventPayloadPages>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = EventPayloadPages.listFromJson(value);
       });
     }
     return map;
  }
}

