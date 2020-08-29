part of openapi.api;

class RepositorySubscription {
  
  DateTime createdAt = null;
  /* Determines if all notifications should be blocked from this repository. */
  bool ignored = null;
  
  String reason = null;
  
  String repositoryUrl = null;
  /* Determines if notifications should be received from this repository. */
  bool subscribed = null;
  
  String url = null;

  RepositorySubscription({
    this.createdAt,
    this.ignored,
    this.reason,
    this.repositoryUrl,
    this.subscribed,
    this.url,
  });

  @override
  String toString() {
    return 'RepositorySubscription[createdAt=$createdAt, ignored=$ignored, reason=$reason, repositoryUrl=$repositoryUrl, subscribed=$subscribed, url=$url, ]';
  }

  RepositorySubscription.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    createdAt = (json['created_at'] == null) ?
      null :
      DateTime.parse(json['created_at']);
    ignored = json['ignored'];
    reason = json['reason'];
    repositoryUrl = json['repository_url'];
    subscribed = json['subscribed'];
    url = json['url'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (createdAt != null)
      json['created_at'] = createdAt == null ? null : createdAt.toUtc().toIso8601String();
    if (ignored != null)
      json['ignored'] = ignored;
      json['reason'] = reason;
    if (repositoryUrl != null)
      json['repository_url'] = repositoryUrl;
    if (subscribed != null)
      json['subscribed'] = subscribed;
    if (url != null)
      json['url'] = url;
    return json;
  }

  static List<RepositorySubscription> listFromJson(List<dynamic> json) {
    return json == null ? List<RepositorySubscription>() : json.map((value) => RepositorySubscription.fromJson(value)).toList();
  }

  static Map<String, RepositorySubscription> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, RepositorySubscription>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = RepositorySubscription.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of RepositorySubscription-objects as value to a dart map
  static Map<String, List<RepositorySubscription>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<RepositorySubscription>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = RepositorySubscription.listFromJson(value);
       });
     }
     return map;
  }
}

