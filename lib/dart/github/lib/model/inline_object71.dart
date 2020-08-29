part of openapi.api;

class InlineObject71 {
  /* The SHA1 of the tree you want to update with new data. If you don't set this, the commit will be created on top of everything; however, it will only contain your change, the rest of your files will show up as deleted. */
  String baseTree = null;
  /* Objects (of `path`, `mode`, `type`, and `sha`) specifying a tree structure. */
  List<ReposOwnerRepoGitTreesTree> tree = [];

  InlineObject71({
    this.baseTree,
    this.tree,
  });

  @override
  String toString() {
    return 'InlineObject71[baseTree=$baseTree, tree=$tree, ]';
  }

  InlineObject71.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    baseTree = json['base_tree'];
    tree = (json['tree'] == null) ?
      null :
      ReposOwnerRepoGitTreesTree.listFromJson(json['tree']);
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (baseTree != null)
      json['base_tree'] = baseTree;
    if (tree != null)
      json['tree'] = tree;
    return json;
  }

  static List<InlineObject71> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineObject71>() : json.map((value) => InlineObject71.fromJson(value)).toList();
  }

  static Map<String, InlineObject71> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineObject71>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineObject71.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject71-objects as value to a dart map
  static Map<String, List<InlineObject71>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineObject71>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineObject71.listFromJson(value);
       });
     }
     return map;
  }
}

