part of openapi.api;

class ReposOwnerRepoHooksHookIdConfig {
  
  String address = null;
  /* The media type used to serialize the payloads. Supported values include `json` and `form`. The default is `form`. */
  String contentType = null;
  /* Determines whether the SSL certificate of the host for `url` will be verified when delivering payloads. Supported values include `0` (verification is performed) and `1` (verification is not performed). The default is `0`. **We strongly recommend not setting this to `1` as you are subject to man-in-the-middle and other attacks.** */
  String insecureSsl = null;
  
  String room = null;
  /* If provided, the `secret` will be used as the `key` to generate the HMAC hex digest value in the [`X-Hub-Signature`](https://developer.github.com/webhooks/event-payloads/#delivery-headers) header. */
  String secret = null;
  /* The URL to which the payloads will be delivered. */
  String url = null;

  ReposOwnerRepoHooksHookIdConfig({
    this.address,
    this.contentType,
    this.insecureSsl,
    this.room,
    this.secret,
    this.url,
  });

  @override
  String toString() {
    return 'ReposOwnerRepoHooksHookIdConfig[address=$address, contentType=$contentType, insecureSsl=$insecureSsl, room=$room, secret=$secret, url=$url, ]';
  }

  ReposOwnerRepoHooksHookIdConfig.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    address = json['address'];
    contentType = json['content_type'];
    insecureSsl = json['insecure_ssl'];
    room = json['room'];
    secret = json['secret'];
    url = json['url'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (address != null)
      json['address'] = address;
    if (contentType != null)
      json['content_type'] = contentType;
    if (insecureSsl != null)
      json['insecure_ssl'] = insecureSsl;
    if (room != null)
      json['room'] = room;
    if (secret != null)
      json['secret'] = secret;
    if (url != null)
      json['url'] = url;
    return json;
  }

  static List<ReposOwnerRepoHooksHookIdConfig> listFromJson(List<dynamic> json) {
    return json == null ? List<ReposOwnerRepoHooksHookIdConfig>() : json.map((value) => ReposOwnerRepoHooksHookIdConfig.fromJson(value)).toList();
  }

  static Map<String, ReposOwnerRepoHooksHookIdConfig> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, ReposOwnerRepoHooksHookIdConfig>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = ReposOwnerRepoHooksHookIdConfig.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of ReposOwnerRepoHooksHookIdConfig-objects as value to a dart map
  static Map<String, List<ReposOwnerRepoHooksHookIdConfig>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<ReposOwnerRepoHooksHookIdConfig>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = ReposOwnerRepoHooksHookIdConfig.listFromJson(value);
       });
     }
     return map;
  }
}

