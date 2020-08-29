part of openapi.api;

class InlineObject94 {
  /* The name of the base branch that the head will be merged into. */
  String base = null;
  /* Commit message to use for the merge commit. If omitted, a default message will be used. */
  String commitMessage = null;
  /* The head to merge. This can be a branch name or a commit SHA1. */
  String head = null;

  InlineObject94({
    this.base,
    this.commitMessage,
    this.head,
  });

  @override
  String toString() {
    return 'InlineObject94[base=$base, commitMessage=$commitMessage, head=$head, ]';
  }

  InlineObject94.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    base = json['base'];
    commitMessage = json['commit_message'];
    head = json['head'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (base != null)
      json['base'] = base;
    if (commitMessage != null)
      json['commit_message'] = commitMessage;
    if (head != null)
      json['head'] = head;
    return json;
  }

  static List<InlineObject94> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineObject94>() : json.map((value) => InlineObject94.fromJson(value)).toList();
  }

  static Map<String, InlineObject94> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineObject94>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineObject94.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject94-objects as value to a dart map
  static Map<String, List<InlineObject94>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineObject94>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineObject94.listFromJson(value);
       });
     }
     return map;
  }
}

