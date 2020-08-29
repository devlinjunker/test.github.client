part of openapi.api;

class InlineObject142 {
  /* Exclude attributes from the API response to improve performance */
  List<String> exclude = [];
  //enum excludeEnum {  repositories,  };{
  /* Do not include attachments in the migration */
  bool excludeAttachments = null;
  /* Lock the repositories being migrated at the start of the migration */
  bool lockRepositories = null;
  
  List<String> repositories = [];

  InlineObject142({
    this.exclude,
    this.excludeAttachments,
    this.lockRepositories,
    this.repositories,
  });

  @override
  String toString() {
    return 'InlineObject142[exclude=$exclude, excludeAttachments=$excludeAttachments, lockRepositories=$lockRepositories, repositories=$repositories, ]';
  }

  InlineObject142.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    exclude = (json['exclude'] == null) ?
      null :
      (json['exclude'] as List).cast<String>();
    excludeAttachments = json['exclude_attachments'];
    lockRepositories = json['lock_repositories'];
    repositories = (json['repositories'] == null) ?
      null :
      (json['repositories'] as List).cast<String>();
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (exclude != null)
      json['exclude'] = exclude;
    if (excludeAttachments != null)
      json['exclude_attachments'] = excludeAttachments;
    if (lockRepositories != null)
      json['lock_repositories'] = lockRepositories;
    if (repositories != null)
      json['repositories'] = repositories;
    return json;
  }

  static List<InlineObject142> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineObject142>() : json.map((value) => InlineObject142.fromJson(value)).toList();
  }

  static Map<String, InlineObject142> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineObject142>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineObject142.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject142-objects as value to a dart map
  static Map<String, List<InlineObject142>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineObject142>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineObject142.listFromJson(value);
       });
     }
     return map;
  }
}

