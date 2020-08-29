part of openapi.api;

class InlineObject114 {
  /* The expected SHA of the pull request's HEAD ref. This is the most recent commit on the pull request's branch. If the expected SHA does not match the pull request's HEAD, you will receive a `422 Unprocessable Entity` status. You can use the \"[List commits](https://developer.github.com/v3/repos/commits/#list-commits)\" endpoint to find the most recent commit SHA. Default: SHA of the pull request's current HEAD ref. */
  String expectedHeadSha = null;

  InlineObject114({
    this.expectedHeadSha,
  });

  @override
  String toString() {
    return 'InlineObject114[expectedHeadSha=$expectedHeadSha, ]';
  }

  InlineObject114.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    expectedHeadSha = json['expected_head_sha'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (expectedHeadSha != null)
      json['expected_head_sha'] = expectedHeadSha;
    return json;
  }

  static List<InlineObject114> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineObject114>() : json.map((value) => InlineObject114.fromJson(value)).toList();
  }

  static Map<String, InlineObject114> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineObject114>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineObject114.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject114-objects as value to a dart map
  static Map<String, List<InlineObject114>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineObject114>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineObject114.listFromJson(value);
       });
     }
     return map;
  }
}

