part of openapi.api;

class ReposOwnerRepoPagesSource {
  /* The repository branch used to publish your [site's source files](https://help.github.com/articles/configuring-a-publishing-source-for-github-pages/). Can be either `master` or `gh-pages`. */
  String branch = null;
  //enum branchEnum {  master,  gh-pages,  };{
  /* The repository directory that includes the source files for the Pages site. When `branch` is `master`, you can change `path` to `/docs`. When `branch` is `gh-pages`, you are unable to specify a `path` other than `/`. */
  String path = null;

  ReposOwnerRepoPagesSource({
    this.branch,
    this.path,
  });

  @override
  String toString() {
    return 'ReposOwnerRepoPagesSource[branch=$branch, path=$path, ]';
  }

  ReposOwnerRepoPagesSource.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    branch = json['branch'];
    path = json['path'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (branch != null)
      json['branch'] = branch;
    if (path != null)
      json['path'] = path;
    return json;
  }

  static List<ReposOwnerRepoPagesSource> listFromJson(List<dynamic> json) {
    return json == null ? List<ReposOwnerRepoPagesSource>() : json.map((value) => ReposOwnerRepoPagesSource.fromJson(value)).toList();
  }

  static Map<String, ReposOwnerRepoPagesSource> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, ReposOwnerRepoPagesSource>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = ReposOwnerRepoPagesSource.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of ReposOwnerRepoPagesSource-objects as value to a dart map
  static Map<String, List<ReposOwnerRepoPagesSource>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<ReposOwnerRepoPagesSource>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = ReposOwnerRepoPagesSource.listFromJson(value);
       });
     }
     return map;
  }
}

