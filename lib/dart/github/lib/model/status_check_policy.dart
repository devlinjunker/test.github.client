part of openapi.api;

class StatusCheckPolicy {
  
  List<String> contexts = [];
  
  String contextsUrl = null;
  
  bool strict = null;
  
  String url = null;

  StatusCheckPolicy({
    this.contexts,
    this.contextsUrl,
    this.strict,
    this.url,
  });

  @override
  String toString() {
    return 'StatusCheckPolicy[contexts=$contexts, contextsUrl=$contextsUrl, strict=$strict, url=$url, ]';
  }

  StatusCheckPolicy.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    contexts = (json['contexts'] == null) ?
      null :
      (json['contexts'] as List).cast<String>();
    contextsUrl = json['contexts_url'];
    strict = json['strict'];
    url = json['url'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (contexts != null)
      json['contexts'] = contexts;
    if (contextsUrl != null)
      json['contexts_url'] = contextsUrl;
    if (strict != null)
      json['strict'] = strict;
    if (url != null)
      json['url'] = url;
    return json;
  }

  static List<StatusCheckPolicy> listFromJson(List<dynamic> json) {
    return json == null ? List<StatusCheckPolicy>() : json.map((value) => StatusCheckPolicy.fromJson(value)).toList();
  }

  static Map<String, StatusCheckPolicy> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, StatusCheckPolicy>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = StatusCheckPolicy.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of StatusCheckPolicy-objects as value to a dart map
  static Map<String, List<StatusCheckPolicy>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<StatusCheckPolicy>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = StatusCheckPolicy.listFromJson(value);
       });
     }
     return map;
  }
}

