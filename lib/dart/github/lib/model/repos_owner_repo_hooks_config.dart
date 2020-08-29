part of openapi.api;

class ReposOwnerRepoHooksConfig {
  /* The media type used to serialize the payloads. Supported values include `json` and `form`. The default is `form`. */
  String contentType = null;
  
  String digest = null;
  /* Determines whether the SSL certificate of the host for `url` will be verified when delivering payloads. Supported values include `0` (verification is performed) and `1` (verification is not performed). The default is `0`. **We strongly recommend not setting this to `1` as you are subject to man-in-the-middle and other attacks.** */
  String insecureSsl = null;
  /* If provided, the `secret` will be used as the `key` to generate the HMAC hex digest value in the [`X-Hub-Signature`](https://developer.github.com/webhooks/event-payloads/#delivery-headers) header. */
  String secret = null;
  
  String token = null;
  /* The URL to which the payloads will be delivered. */
  String url = null;

  ReposOwnerRepoHooksConfig({
    this.contentType,
    this.digest,
    this.insecureSsl,
    this.secret,
    this.token,
    this.url,
  });

  @override
  String toString() {
    return 'ReposOwnerRepoHooksConfig[contentType=$contentType, digest=$digest, insecureSsl=$insecureSsl, secret=$secret, token=$token, url=$url, ]';
  }

  ReposOwnerRepoHooksConfig.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    contentType = json['content_type'];
    digest = json['digest'];
    insecureSsl = json['insecure_ssl'];
    secret = json['secret'];
    token = json['token'];
    url = json['url'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (contentType != null)
      json['content_type'] = contentType;
    if (digest != null)
      json['digest'] = digest;
    if (insecureSsl != null)
      json['insecure_ssl'] = insecureSsl;
    if (secret != null)
      json['secret'] = secret;
    if (token != null)
      json['token'] = token;
    if (url != null)
      json['url'] = url;
    return json;
  }

  static List<ReposOwnerRepoHooksConfig> listFromJson(List<dynamic> json) {
    return json == null ? List<ReposOwnerRepoHooksConfig>() : json.map((value) => ReposOwnerRepoHooksConfig.fromJson(value)).toList();
  }

  static Map<String, ReposOwnerRepoHooksConfig> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, ReposOwnerRepoHooksConfig>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = ReposOwnerRepoHooksConfig.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of ReposOwnerRepoHooksConfig-objects as value to a dart map
  static Map<String, List<ReposOwnerRepoHooksConfig>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<ReposOwnerRepoHooksConfig>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = ReposOwnerRepoHooksConfig.listFromJson(value);
       });
     }
     return map;
  }
}

