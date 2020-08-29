part of openapi.api;

class ThreadSubscription {
  
  DateTime createdAt = null;
  
  bool ignored = null;
  
  String reason = null;
  
  String repositoryUrl = null;
  
  bool subscribed = null;
  
  String threadUrl = null;
  
  String url = null;

  ThreadSubscription({
    this.createdAt,
    this.ignored,
    this.reason,
    this.repositoryUrl,
    this.subscribed,
    this.threadUrl,
    this.url,
  });

  @override
  String toString() {
    return 'ThreadSubscription[createdAt=$createdAt, ignored=$ignored, reason=$reason, repositoryUrl=$repositoryUrl, subscribed=$subscribed, threadUrl=$threadUrl, url=$url, ]';
  }

  ThreadSubscription.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    createdAt = (json['created_at'] == null) ?
      null :
      DateTime.parse(json['created_at']);
    ignored = json['ignored'];
    reason = json['reason'];
    repositoryUrl = json['repository_url'];
    subscribed = json['subscribed'];
    threadUrl = json['thread_url'];
    url = json['url'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
      json['created_at'] = createdAt == null ? null : createdAt.toUtc().toIso8601String();
    if (ignored != null)
      json['ignored'] = ignored;
      json['reason'] = reason;
    if (repositoryUrl != null)
      json['repository_url'] = repositoryUrl;
    if (subscribed != null)
      json['subscribed'] = subscribed;
    if (threadUrl != null)
      json['thread_url'] = threadUrl;
    if (url != null)
      json['url'] = url;
    return json;
  }

  static List<ThreadSubscription> listFromJson(List<dynamic> json) {
    return json == null ? List<ThreadSubscription>() : json.map((value) => ThreadSubscription.fromJson(value)).toList();
  }

  static Map<String, ThreadSubscription> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, ThreadSubscription>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = ThreadSubscription.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of ThreadSubscription-objects as value to a dart map
  static Map<String, List<ThreadSubscription>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<ThreadSubscription>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = ThreadSubscription.listFromJson(value);
       });
     }
     return map;
  }
}

