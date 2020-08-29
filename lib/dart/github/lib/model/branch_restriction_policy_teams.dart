part of openapi.api;

class BranchRestrictionPolicyTeams {
  
  String description = null;
  
  String htmlUrl = null;
  
  int id = null;
  
  String membersUrl = null;
  
  String name = null;
  
  String nodeId = null;
  
  String parent = null;
  
  String permission = null;
  
  String privacy = null;
  
  String repositoriesUrl = null;
  
  String slug = null;
  
  String url = null;

  BranchRestrictionPolicyTeams({
    this.description,
    this.htmlUrl,
    this.id,
    this.membersUrl,
    this.name,
    this.nodeId,
    this.parent,
    this.permission,
    this.privacy,
    this.repositoriesUrl,
    this.slug,
    this.url,
  });

  @override
  String toString() {
    return 'BranchRestrictionPolicyTeams[description=$description, htmlUrl=$htmlUrl, id=$id, membersUrl=$membersUrl, name=$name, nodeId=$nodeId, parent=$parent, permission=$permission, privacy=$privacy, repositoriesUrl=$repositoriesUrl, slug=$slug, url=$url, ]';
  }

  BranchRestrictionPolicyTeams.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    description = json['description'];
    htmlUrl = json['html_url'];
    id = json['id'];
    membersUrl = json['members_url'];
    name = json['name'];
    nodeId = json['node_id'];
    parent = json['parent'];
    permission = json['permission'];
    privacy = json['privacy'];
    repositoriesUrl = json['repositories_url'];
    slug = json['slug'];
    url = json['url'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
      json['description'] = description;
    if (htmlUrl != null)
      json['html_url'] = htmlUrl;
    if (id != null)
      json['id'] = id;
    if (membersUrl != null)
      json['members_url'] = membersUrl;
    if (name != null)
      json['name'] = name;
    if (nodeId != null)
      json['node_id'] = nodeId;
      json['parent'] = parent;
    if (permission != null)
      json['permission'] = permission;
    if (privacy != null)
      json['privacy'] = privacy;
    if (repositoriesUrl != null)
      json['repositories_url'] = repositoriesUrl;
    if (slug != null)
      json['slug'] = slug;
    if (url != null)
      json['url'] = url;
    return json;
  }

  static List<BranchRestrictionPolicyTeams> listFromJson(List<dynamic> json) {
    return json == null ? List<BranchRestrictionPolicyTeams>() : json.map((value) => BranchRestrictionPolicyTeams.fromJson(value)).toList();
  }

  static Map<String, BranchRestrictionPolicyTeams> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, BranchRestrictionPolicyTeams>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = BranchRestrictionPolicyTeams.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of BranchRestrictionPolicyTeams-objects as value to a dart map
  static Map<String, List<BranchRestrictionPolicyTeams>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<BranchRestrictionPolicyTeams>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = BranchRestrictionPolicyTeams.listFromJson(value);
       });
     }
     return map;
  }
}

