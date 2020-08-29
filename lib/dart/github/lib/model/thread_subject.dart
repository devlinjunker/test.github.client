part of openapi.api;

class ThreadSubject {
  
  String latestCommentUrl = null;
  
  String title = null;
  
  String type = null;
  
  String url = null;

  ThreadSubject({
    this.latestCommentUrl,
    this.title,
    this.type,
    this.url,
  });

  @override
  String toString() {
    return 'ThreadSubject[latestCommentUrl=$latestCommentUrl, title=$title, type=$type, url=$url, ]';
  }

  ThreadSubject.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    latestCommentUrl = json['latest_comment_url'];
    title = json['title'];
    type = json['type'];
    url = json['url'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (latestCommentUrl != null)
      json['latest_comment_url'] = latestCommentUrl;
    if (title != null)
      json['title'] = title;
    if (type != null)
      json['type'] = type;
    if (url != null)
      json['url'] = url;
    return json;
  }

  static List<ThreadSubject> listFromJson(List<dynamic> json) {
    return json == null ? List<ThreadSubject>() : json.map((value) => ThreadSubject.fromJson(value)).toList();
  }

  static Map<String, ThreadSubject> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, ThreadSubject>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = ThreadSubject.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of ThreadSubject-objects as value to a dart map
  static Map<String, List<ThreadSubject>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<ThreadSubject>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = ThreadSubject.listFromJson(value);
       });
     }
     return map;
  }
}

