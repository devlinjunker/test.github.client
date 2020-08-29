part of openapi.api;

class OrganizationInvitation {
  
  String createdAt = null;
  
  String email = null;
  
  int id = null;
  
  String invitationTeamUrl = null;
  
  String invitationTeamsUrl = null;
  
  SimpleUser inviter = null;
  
  String login = null;
  
  String nodeId = null;
  
  String role = null;
  
  int teamCount = null;

  OrganizationInvitation({
    this.createdAt,
    this.email,
    this.id,
    this.invitationTeamUrl,
    this.invitationTeamsUrl,
    this.inviter,
    this.login,
    this.nodeId,
    this.role,
    this.teamCount,
  });

  @override
  String toString() {
    return 'OrganizationInvitation[createdAt=$createdAt, email=$email, id=$id, invitationTeamUrl=$invitationTeamUrl, invitationTeamsUrl=$invitationTeamsUrl, inviter=$inviter, login=$login, nodeId=$nodeId, role=$role, teamCount=$teamCount, ]';
  }

  OrganizationInvitation.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    createdAt = json['created_at'];
    email = json['email'];
    id = json['id'];
    invitationTeamUrl = json['invitation_team_url'];
    invitationTeamsUrl = json['invitation_teams_url'];
    inviter = (json['inviter'] == null) ?
      null :
      SimpleUser.fromJson(json['inviter']);
    login = json['login'];
    nodeId = json['node_id'];
    role = json['role'];
    teamCount = json['team_count'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (createdAt != null)
      json['created_at'] = createdAt;
      json['email'] = email;
    if (id != null)
      json['id'] = id;
    if (invitationTeamUrl != null)
      json['invitation_team_url'] = invitationTeamUrl;
    if (invitationTeamsUrl != null)
      json['invitation_teams_url'] = invitationTeamsUrl;
      json['inviter'] = inviter;
      json['login'] = login;
    if (nodeId != null)
      json['node_id'] = nodeId;
    if (role != null)
      json['role'] = role;
    if (teamCount != null)
      json['team_count'] = teamCount;
    return json;
  }

  static List<OrganizationInvitation> listFromJson(List<dynamic> json) {
    return json == null ? List<OrganizationInvitation>() : json.map((value) => OrganizationInvitation.fromJson(value)).toList();
  }

  static Map<String, OrganizationInvitation> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, OrganizationInvitation>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = OrganizationInvitation.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of OrganizationInvitation-objects as value to a dart map
  static Map<String, List<OrganizationInvitation>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<OrganizationInvitation>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = OrganizationInvitation.listFromJson(value);
       });
     }
     return map;
  }
}

