part of openapi.api;

class OrgHookConfig {
  
  String contentType = null;
  
  String insecureSsl = null;
  
  String secret = null;
  
  String url = null;

  OrgHookConfig({
    this.contentType,
    this.insecureSsl,
    this.secret,
    this.url,
  });

  @override
  String toString() {
    return 'OrgHookConfig[contentType=$contentType, insecureSsl=$insecureSsl, secret=$secret, url=$url, ]';
  }

  OrgHookConfig.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    contentType = json['content_type'];
    insecureSsl = json['insecure_ssl'];
    secret = json['secret'];
    url = json['url'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (contentType != null)
      json['content_type'] = contentType;
    if (insecureSsl != null)
      json['insecure_ssl'] = insecureSsl;
    if (secret != null)
      json['secret'] = secret;
    if (url != null)
      json['url'] = url;
    return json;
  }

  static List<OrgHookConfig> listFromJson(List<dynamic> json) {
    return json == null ? List<OrgHookConfig>() : json.map((value) => OrgHookConfig.fromJson(value)).toList();
  }

  static Map<String, OrgHookConfig> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, OrgHookConfig>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = OrgHookConfig.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of OrgHookConfig-objects as value to a dart map
  static Map<String, List<OrgHookConfig>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<OrgHookConfig>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = OrgHookConfig.listFromJson(value);
       });
     }
     return map;
  }
}

