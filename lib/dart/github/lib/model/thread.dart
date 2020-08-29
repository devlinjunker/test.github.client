part of openapi.api;

class Thread {
  
  String id = null;
  
  String lastReadAt = null;
  
  String reason = null;
  
  MinimalRepository repository = null;
  
  ThreadSubject subject = null;
  
  String subscriptionUrl = null;
  
  bool unread = null;
  
  String updatedAt = null;
  
  String url = null;

  Thread({
    this.id,
    this.lastReadAt,
    this.reason,
    this.repository,
    this.subject,
    this.subscriptionUrl,
    this.unread,
    this.updatedAt,
    this.url,
  });

  @override
  String toString() {
    return 'Thread[id=$id, lastReadAt=$lastReadAt, reason=$reason, repository=$repository, subject=$subject, subscriptionUrl=$subscriptionUrl, unread=$unread, updatedAt=$updatedAt, url=$url, ]';
  }

  Thread.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    id = json['id'];
    lastReadAt = json['last_read_at'];
    reason = json['reason'];
    repository = (json['repository'] == null) ?
      null :
      MinimalRepository.fromJson(json['repository']);
    subject = (json['subject'] == null) ?
      null :
      ThreadSubject.fromJson(json['subject']);
    subscriptionUrl = json['subscription_url'];
    unread = json['unread'];
    updatedAt = json['updated_at'];
    url = json['url'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (id != null)
      json['id'] = id;
      json['last_read_at'] = lastReadAt;
    if (reason != null)
      json['reason'] = reason;
    if (repository != null)
      json['repository'] = repository;
    if (subject != null)
      json['subject'] = subject;
    if (subscriptionUrl != null)
      json['subscription_url'] = subscriptionUrl;
    if (unread != null)
      json['unread'] = unread;
    if (updatedAt != null)
      json['updated_at'] = updatedAt;
    if (url != null)
      json['url'] = url;
    return json;
  }

  static List<Thread> listFromJson(List<dynamic> json) {
    return json == null ? List<Thread>() : json.map((value) => Thread.fromJson(value)).toList();
  }

  static Map<String, Thread> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, Thread>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = Thread.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of Thread-objects as value to a dart map
  static Map<String, List<Thread>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<Thread>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = Thread.listFromJson(value);
       });
     }
     return map;
  }
}

