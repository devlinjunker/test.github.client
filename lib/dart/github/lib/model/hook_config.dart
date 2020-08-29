part of openapi.api;

class HookConfig {
  
  String contentType = null;
  
  String digest = null;
  
  String email = null;
  
  String insecureSsl = null;
  
  String password = null;
  
  String room = null;
  
  String secret = null;
  
  String subdomain = null;
  
  String token = null;
  
  String url = null;

  HookConfig({
    this.contentType,
    this.digest,
    this.email,
    this.insecureSsl,
    this.password,
    this.room,
    this.secret,
    this.subdomain,
    this.token,
    this.url,
  });

  @override
  String toString() {
    return 'HookConfig[contentType=$contentType, digest=$digest, email=$email, insecureSsl=$insecureSsl, password=$password, room=$room, secret=$secret, subdomain=$subdomain, token=$token, url=$url, ]';
  }

  HookConfig.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    contentType = json['content_type'];
    digest = json['digest'];
    email = json['email'];
    insecureSsl = json['insecure_ssl'];
    password = json['password'];
    room = json['room'];
    secret = json['secret'];
    subdomain = json['subdomain'];
    token = json['token'];
    url = json['url'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (contentType != null)
      json['content_type'] = contentType;
    if (digest != null)
      json['digest'] = digest;
    if (email != null)
      json['email'] = email;
    if (insecureSsl != null)
      json['insecure_ssl'] = insecureSsl;
    if (password != null)
      json['password'] = password;
    if (room != null)
      json['room'] = room;
    if (secret != null)
      json['secret'] = secret;
    if (subdomain != null)
      json['subdomain'] = subdomain;
    if (token != null)
      json['token'] = token;
    if (url != null)
      json['url'] = url;
    return json;
  }

  static List<HookConfig> listFromJson(List<dynamic> json) {
    return json == null ? List<HookConfig>() : json.map((value) => HookConfig.fromJson(value)).toList();
  }

  static Map<String, HookConfig> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, HookConfig>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = HookConfig.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of HookConfig-objects as value to a dart map
  static Map<String, List<HookConfig>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<HookConfig>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = HookConfig.listFromJson(value);
       });
     }
     return map;
  }
}

