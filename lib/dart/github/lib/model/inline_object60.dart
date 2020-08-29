part of openapi.api;

class InlineObject60 {
  
  ReposOwnerRepoContentsPathAuthor author = null;
  /* The branch name. Default: the repository’s default branch (usually `master`) */
  String branch = null;
  
  ReposOwnerRepoContentsPathCommitter committer = null;
  /* The new file content, using Base64 encoding. */
  String content = null;
  /* The commit message. */
  String message = null;
  /* **Required if you are updating a file**. The blob SHA of the file being replaced. */
  String sha = null;

  InlineObject60({
    this.author,
    this.branch,
    this.committer,
    this.content,
    this.message,
    this.sha,
  });

  @override
  String toString() {
    return 'InlineObject60[author=$author, branch=$branch, committer=$committer, content=$content, message=$message, sha=$sha, ]';
  }

  InlineObject60.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    author = (json['author'] == null) ?
      null :
      ReposOwnerRepoContentsPathAuthor.fromJson(json['author']);
    branch = json['branch'];
    committer = (json['committer'] == null) ?
      null :
      ReposOwnerRepoContentsPathCommitter.fromJson(json['committer']);
    content = json['content'];
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
    if (content != null)
      json['content'] = content;
    if (message != null)
      json['message'] = message;
    if (sha != null)
      json['sha'] = sha;
    return json;
  }

  static List<InlineObject60> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineObject60>() : json.map((value) => InlineObject60.fromJson(value)).toList();
  }

  static Map<String, InlineObject60> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineObject60>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineObject60.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject60-objects as value to a dart map
  static Map<String, List<InlineObject60>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineObject60>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineObject60.listFromJson(value);
       });
     }
     return map;
  }
}

