part of openapi.api;

class FeedLinks {
  
  LinkWithType currentUser = null;
  
  LinkWithType currentUserActor = null;
  
  LinkWithType currentUserOrganization = null;
  
  List<LinkWithType> currentUserOrganizations = [];
  
  LinkWithType currentUserPublic = null;
  
  LinkWithType securityAdvisories = null;
  
  LinkWithType timeline = null;
  
  LinkWithType user = null;

  FeedLinks({
    this.currentUser,
    this.currentUserActor,
    this.currentUserOrganization,
    this.currentUserOrganizations,
    this.currentUserPublic,
    this.securityAdvisories,
    this.timeline,
    this.user,
  });

  @override
  String toString() {
    return 'FeedLinks[currentUser=$currentUser, currentUserActor=$currentUserActor, currentUserOrganization=$currentUserOrganization, currentUserOrganizations=$currentUserOrganizations, currentUserPublic=$currentUserPublic, securityAdvisories=$securityAdvisories, timeline=$timeline, user=$user, ]';
  }

  FeedLinks.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    currentUser = (json['current_user'] == null) ?
      null :
      LinkWithType.fromJson(json['current_user']);
    currentUserActor = (json['current_user_actor'] == null) ?
      null :
      LinkWithType.fromJson(json['current_user_actor']);
    currentUserOrganization = (json['current_user_organization'] == null) ?
      null :
      LinkWithType.fromJson(json['current_user_organization']);
    currentUserOrganizations = (json['current_user_organizations'] == null) ?
      null :
      LinkWithType.listFromJson(json['current_user_organizations']);
    currentUserPublic = (json['current_user_public'] == null) ?
      null :
      LinkWithType.fromJson(json['current_user_public']);
    securityAdvisories = (json['security_advisories'] == null) ?
      null :
      LinkWithType.fromJson(json['security_advisories']);
    timeline = (json['timeline'] == null) ?
      null :
      LinkWithType.fromJson(json['timeline']);
    user = (json['user'] == null) ?
      null :
      LinkWithType.fromJson(json['user']);
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (currentUser != null)
      json['current_user'] = currentUser;
    if (currentUserActor != null)
      json['current_user_actor'] = currentUserActor;
    if (currentUserOrganization != null)
      json['current_user_organization'] = currentUserOrganization;
    if (currentUserOrganizations != null)
      json['current_user_organizations'] = currentUserOrganizations;
    if (currentUserPublic != null)
      json['current_user_public'] = currentUserPublic;
    if (securityAdvisories != null)
      json['security_advisories'] = securityAdvisories;
    if (timeline != null)
      json['timeline'] = timeline;
    if (user != null)
      json['user'] = user;
    return json;
  }

  static List<FeedLinks> listFromJson(List<dynamic> json) {
    return json == null ? List<FeedLinks>() : json.map((value) => FeedLinks.fromJson(value)).toList();
  }

  static Map<String, FeedLinks> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, FeedLinks>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = FeedLinks.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of FeedLinks-objects as value to a dart map
  static Map<String, List<FeedLinks>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<FeedLinks>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = FeedLinks.listFromJson(value);
       });
     }
     return map;
  }
}

