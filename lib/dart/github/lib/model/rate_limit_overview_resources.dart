part of openapi.api;

class RateLimitOverviewResources {
  
  RateLimit core = null;
  
  RateLimit graphql = null;
  
  RateLimit integrationManifest = null;
  
  RateLimit search = null;
  
  RateLimit sourceImport = null;

  RateLimitOverviewResources({
    this.core,
    this.graphql,
    this.integrationManifest,
    this.search,
    this.sourceImport,
  });

  @override
  String toString() {
    return 'RateLimitOverviewResources[core=$core, graphql=$graphql, integrationManifest=$integrationManifest, search=$search, sourceImport=$sourceImport, ]';
  }

  RateLimitOverviewResources.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    core = (json['core'] == null) ?
      null :
      RateLimit.fromJson(json['core']);
    graphql = (json['graphql'] == null) ?
      null :
      RateLimit.fromJson(json['graphql']);
    integrationManifest = (json['integration_manifest'] == null) ?
      null :
      RateLimit.fromJson(json['integration_manifest']);
    search = (json['search'] == null) ?
      null :
      RateLimit.fromJson(json['search']);
    sourceImport = (json['source_import'] == null) ?
      null :
      RateLimit.fromJson(json['source_import']);
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (core != null)
      json['core'] = core;
    if (graphql != null)
      json['graphql'] = graphql;
    if (integrationManifest != null)
      json['integration_manifest'] = integrationManifest;
    if (search != null)
      json['search'] = search;
    if (sourceImport != null)
      json['source_import'] = sourceImport;
    return json;
  }

  static List<RateLimitOverviewResources> listFromJson(List<dynamic> json) {
    return json == null ? List<RateLimitOverviewResources>() : json.map((value) => RateLimitOverviewResources.fromJson(value)).toList();
  }

  static Map<String, RateLimitOverviewResources> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, RateLimitOverviewResources>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = RateLimitOverviewResources.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of RateLimitOverviewResources-objects as value to a dart map
  static Map<String, List<RateLimitOverviewResources>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<RateLimitOverviewResources>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = RateLimitOverviewResources.listFromJson(value);
       });
     }
     return map;
  }
}

