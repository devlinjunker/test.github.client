part of openapi.api;

class ReposOwnerRepoGitTreesTree {
  /* The content you want this file to have. GitHub will write this blob out and use that SHA for this entry. Use either this, or `tree.sha`.      **Note:** Use either `tree.sha` or `content` to specify the contents of the entry. Using both `tree.sha` and `content` will return an error. */
  String content = null;
  /* The file mode; one of `100644` for file (blob), `100755` for executable (blob), `040000` for subdirectory (tree), `160000` for submodule (commit), or `120000` for a blob that specifies the path of a symlink. */
  String mode = null;
  //enum modeEnum {  100644,  100755,  040000,  160000,  120000,  };{
  /* The file referenced in the tree. */
  String path = null;
  /* The SHA1 checksum ID of the object in the tree. Also called `tree.sha`. If the value is `null` then the file will be deleted.      **Note:** Use either `tree.sha` or `content` to specify the contents of the entry. Using both `tree.sha` and `content` will return an error. */
  String sha = null;
  /* Either `blob`, `tree`, or `commit`. */
  String type = null;
  //enum typeEnum {  blob,  tree,  commit,  };{

  ReposOwnerRepoGitTreesTree({
    this.content,
    this.mode,
    this.path,
    this.sha,
    this.type,
  });

  @override
  String toString() {
    return 'ReposOwnerRepoGitTreesTree[content=$content, mode=$mode, path=$path, sha=$sha, type=$type, ]';
  }

  ReposOwnerRepoGitTreesTree.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    content = json['content'];
    mode = json['mode'];
    path = json['path'];
    sha = json['sha'];
    type = json['type'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (content != null)
      json['content'] = content;
    if (mode != null)
      json['mode'] = mode;
    if (path != null)
      json['path'] = path;
      json['sha'] = sha;
    if (type != null)
      json['type'] = type;
    return json;
  }

  static List<ReposOwnerRepoGitTreesTree> listFromJson(List<dynamic> json) {
    return json == null ? List<ReposOwnerRepoGitTreesTree>() : json.map((value) => ReposOwnerRepoGitTreesTree.fromJson(value)).toList();
  }

  static Map<String, ReposOwnerRepoGitTreesTree> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, ReposOwnerRepoGitTreesTree>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = ReposOwnerRepoGitTreesTree.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of ReposOwnerRepoGitTreesTree-objects as value to a dart map
  static Map<String, List<ReposOwnerRepoGitTreesTree>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<ReposOwnerRepoGitTreesTree>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = ReposOwnerRepoGitTreesTree.listFromJson(value);
       });
     }
     return map;
  }
}

