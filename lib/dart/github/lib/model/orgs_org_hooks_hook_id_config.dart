part of openapi.api;

class OrgsOrgHooksHookIdConfig {
  /* The media type used to serialize the payloads. Supported values include `json` and `form`. The default is `form`. */
  String contentType = null;
  /* Determines whether the SSL certificate of the host for `url` will be verified when delivering payloads. Supported values include `0` (verification is performed) and `1` (verification is not performed). The default is `0`. **We strongly recommend not setting this to `1` as you are subject to man-in-the-middle and other attacks.** */
  String insecureSsl = null;
  /* If provided, the `secret` will be used as the `key` to generate the HMAC hex digest value in the [`X-Hub-Signature`](https://developer.github.com/webhooks/event-payloads/#delivery-headers) header. */
  String secret = null;
  /* The URL to which the payloads will be delivered. */
  String url = null;

  OrgsOrgHooksHookIdConfig({
    this.contentType,
    this.insecureSsl,
    this.secret,
    this.url,
  });

  @override
  String toString() {
    return 'OrgsOrgHooksHookIdConfig[contentType=$contentType, insecureSsl=$insecureSsl, secret=$secret, url=$url, ]';
  }

  OrgsOrgHooksHookIdConfig.fromJson(Map<String, dynamic> json) {
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

  static List<OrgsOrgHooksHookIdConfig> listFromJson(List<dynamic> json) {
    return json == null ? List<OrgsOrgHooksHookIdConfig>() : json.map((value) => OrgsOrgHooksHookIdConfig.fromJson(value)).toList();
  }

  static Map<String, OrgsOrgHooksHookIdConfig> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, OrgsOrgHooksHookIdConfig>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = OrgsOrgHooksHookIdConfig.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of OrgsOrgHooksHookIdConfig-objects as value to a dart map
  static Map<String, List<OrgsOrgHooksHookIdConfig>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<OrgsOrgHooksHookIdConfig>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = OrgsOrgHooksHookIdConfig.listFromJson(value);
       });
     }
     return map;
  }
}

