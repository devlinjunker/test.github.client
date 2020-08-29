part of openapi.api;

class InlineObject67 {
  
  ReposOwnerRepoGitCommitsAuthor author = null;
  
  ReposOwnerRepoGitCommitsCommitter committer = null;
  /* The commit message */
  String message = null;
  /* The SHAs of the commits that were the parents of this commit. If omitted or empty, the commit will be written as a root commit. For a single parent, an array of one SHA should be provided; for a merge commit, an array of more than one should be provided. */
  List<String> parents = [];
  /* The [PGP signature](https://en.wikipedia.org/wiki/Pretty_Good_Privacy) of the commit. GitHub adds the signature to the `gpgsig` header of the created commit. For a commit signature to be verifiable by Git or GitHub, it must be an ASCII-armored detached PGP signature over the string commit as it would be written to the object database. To pass a `signature` parameter, you need to first manually create a valid PGP signature, which can be complicated. You may find it easier to [use the command line](https://git-scm.com/book/id/v2/Git-Tools-Signing-Your-Work) to create signed commits. */
  String signature = null;
  /* The SHA of the tree object this commit points to */
  String tree = null;

  InlineObject67({
    this.author,
    this.committer,
    this.message,
    this.parents,
    this.signature,
    this.tree,
  });

  @override
  String toString() {
    return 'InlineObject67[author=$author, committer=$committer, message=$message, parents=$parents, signature=$signature, tree=$tree, ]';
  }

  InlineObject67.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    author = (json['author'] == null) ?
      null :
      ReposOwnerRepoGitCommitsAuthor.fromJson(json['author']);
    committer = (json['committer'] == null) ?
      null :
      ReposOwnerRepoGitCommitsCommitter.fromJson(json['committer']);
    message = json['message'];
    parents = (json['parents'] == null) ?
      null :
      (json['parents'] as List).cast<String>();
    signature = json['signature'];
    tree = json['tree'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (author != null)
      json['author'] = author;
    if (committer != null)
      json['committer'] = committer;
    if (message != null)
      json['message'] = message;
    if (parents != null)
      json['parents'] = parents;
    if (signature != null)
      json['signature'] = signature;
    if (tree != null)
      json['tree'] = tree;
    return json;
  }

  static List<InlineObject67> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineObject67>() : json.map((value) => InlineObject67.fromJson(value)).toList();
  }

  static Map<String, InlineObject67> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineObject67>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineObject67.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject67-objects as value to a dart map
  static Map<String, List<InlineObject67>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineObject67>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineObject67.listFromJson(value);
       });
     }
     return map;
  }
}

