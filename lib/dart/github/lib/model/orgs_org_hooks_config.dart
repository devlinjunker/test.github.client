part of openapi.api;

class OrgsOrgHooksConfig {
  /* The media type used to serialize the payloads. Supported values include `json` and `form`. The default is `form`. */
  String contentType = null;
  /* Determines whether the SSL certificate of the host for `url` will be verified when delivering payloads. Supported values include `0` (verification is performed) and `1` (verification is not performed). The default is `0`. **We strongly recommend not setting this to `1` as you are subject to man-in-the-middle and other attacks.** */
  String insecureSsl = null;
  
  String password = null;
  /* If provided, the `secret` will be used as the `key` to generate the HMAC hex digest value in the [`X-Hub-Signature`](https://developer.github.com/webhooks/event-payloads/#delivery-headers) header. */
  String secret = null;
  /* The URL to which the payloads will be delivered. */
  String url = null;
  
  String username = null;

  OrgsOrgHooksConfig({
    this.contentType,
    this.insecureSsl,
    this.password,
    this.secret,
    this.url,
    this.username,
  });

  @override
  String toString() {
    return 'OrgsOrgHooksConfig[contentType=$contentType, insecureSsl=$insecureSsl, password=$password, secret=$secret, url=$url, username=$username, ]';
  }

  OrgsOrgHooksConfig.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    contentType = json['content_type'];
    insecureSsl = json['insecure_ssl'];
    password = json['password'];
    secret = json['secret'];
    url = json['url'];
    username = json['username'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (contentType != null)
      json['content_type'] = contentType;
    if (insecureSsl != null)
      json['insecure_ssl'] = insecureSsl;
    if (password != null)
      json['password'] = password;
    if (secret != null)
      json['secret'] = secret;
    if (url != null)
      json['url'] = url;
    if (username != null)
      json['username'] = username;
    return json;
  }

  static List<OrgsOrgHooksConfig> listFromJson(List<dynamic> json) {
    return json == null ? List<OrgsOrgHooksConfig>() : json.map((value) => OrgsOrgHooksConfig.fromJson(value)).toList();
  }

  static Map<String, OrgsOrgHooksConfig> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, OrgsOrgHooksConfig>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = OrgsOrgHooksConfig.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of OrgsOrgHooksConfig-objects as value to a dart map
  static Map<String, List<OrgsOrgHooksConfig>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<OrgsOrgHooksConfig>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = OrgsOrgHooksConfig.listFromJson(value);
       });
     }
     return map;
  }
}

