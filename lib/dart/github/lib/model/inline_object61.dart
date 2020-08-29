part of openapi.api;

class InlineObject61 {
  
  ReposOwnerRepoContentsPathAuthor1 author = null;
  /* The branch name. Default: the repository’s default branch (usually `master`) */
  String branch = null;
  
  ReposOwnerRepoContentsPathCommitter1 committer = null;
  /* The commit message. */
  String message = null;
  /* The blob SHA of the file being replaced. */
  String sha = null;

  InlineObject61({
    this.author,
    this.branch,
    this.committer,
    this.message,
    this.sha,
  });

  @override
  String toString() {
    return 'InlineObject61[author=$author, branch=$branch, committer=$committer, message=$message, sha=$sha, ]';
  }

  InlineObject61.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    author = (json['author'] == null) ?
      null :
      ReposOwnerRepoContentsPathAuthor1.fromJson(json['author']);
    branch = json['branch'];
    committer = (json['committer'] == null) ?
      null :
      ReposOwnerRepoContentsPathCommitter1.fromJson(json['committer']);
    message = json['message'];
    sha = json['sha'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (author != null)
      json['author'] = author;
    if (branch != null)
      json['branch'] = branch;
    if (committer != null)
      json['committer'] = committer;
    if (message != null)
      json['message'] = message;
    if (sha != null)
      json['sha'] = sha;
    return json;
  }

  static List<InlineObject61> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineObject61>() : json.map((value) => InlineObject61.fromJson(value)).toList();
  }

  static Map<String, InlineObject61> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineObject61>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineObject61.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject61-objects as value to a dart map
  static Map<String, List<InlineObject61>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineObject61>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineObject61.listFromJson(value);
       });
     }
     return map;
  }
}

