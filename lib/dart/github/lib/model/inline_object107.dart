part of openapi.api;

class InlineObject107 {
  /* Extra detail to append to automatic commit message. */
  String commitMessage = null;
  /* Title for the automatic commit message. */
  String commitTitle = null;
  /* Merge method to use. Possible values are `merge`, `squash` or `rebase`. Default is `merge`. */
  String mergeMethod = null;
  //enum mergeMethodEnum {  merge,  squash,  rebase,  };{
  /* SHA that pull request head must match to allow merge. */
  String sha = null;

  InlineObject107({
    this.commitMessage,
    this.commitTitle,
    this.mergeMethod,
    this.sha,
  });

  @override
  String toString() {
    return 'InlineObject107[commitMessage=$commitMessage, commitTitle=$commitTitle, mergeMethod=$mergeMethod, sha=$sha, ]';
  }

  InlineObject107.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    commitMessage = json['commit_message'];
    commitTitle = json['commit_title'];
    mergeMethod = json['merge_method'];
    sha = json['sha'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (commitMessage != null)
      json['commit_message'] = commitMessage;
    if (commitTitle != null)
      json['commit_title'] = commitTitle;
    if (mergeMethod != null)
      json['merge_method'] = mergeMethod;
    if (sha != null)
      json['sha'] = sha;
    return json;
  }

  static List<InlineObject107> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineObject107>() : json.map((value) => InlineObject107.fromJson(value)).toList();
  }

  static Map<String, InlineObject107> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineObject107>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineObject107.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject107-objects as value to a dart map
  static Map<String, List<InlineObject107>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineObject107>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineObject107.listFromJson(value);
       });
     }
     return map;
  }
}

