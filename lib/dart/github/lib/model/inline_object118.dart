part of openapi.api;

class InlineObject118 {
  /* A string label to differentiate this status from the status of other systems. */
  String context = "default";
  /* A short description of the status. */
  String description = null;
  /* The state of the status. Can be one of `error`, `failure`, `pending`, or `success`. */
  String state = null;
  //enum stateEnum {  error,  failure,  pending,  success,  };{
  /* The target URL to associate with this status. This URL will be linked from the GitHub UI to allow users to easily see the source of the status.   For example, if your continuous integration system is posting build status, you would want to provide the deep link for the build output for this specific SHA:   `http://ci.example.com/user/repo/build/sha` */
  String targetUrl = null;

  InlineObject118({
    this.context,
    this.description,
    this.state,
    this.targetUrl,
  });

  @override
  String toString() {
    return 'InlineObject118[context=$context, description=$description, state=$state, targetUrl=$targetUrl, ]';
  }

  InlineObject118.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    context = json['context'];
    description = json['description'];
    state = json['state'];
    targetUrl = json['target_url'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (context != null)
      json['context'] = context;
    if (description != null)
      json['description'] = description;
    if (state != null)
      json['state'] = state;
    if (targetUrl != null)
      json['target_url'] = targetUrl;
    return json;
  }

  static List<InlineObject118> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineObject118>() : json.map((value) => InlineObject118.fromJson(value)).toList();
  }

  static Map<String, InlineObject118> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineObject118>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineObject118.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject118-objects as value to a dart map
  static Map<String, List<InlineObject118>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineObject118>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineObject118.listFromJson(value);
       });
     }
     return map;
  }
}

