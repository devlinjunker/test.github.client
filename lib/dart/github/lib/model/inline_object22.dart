part of openapi.api;

class InlineObject22 {
  /* **Required unless you provide `invitee_id`**. Email address of the person you are inviting, which can be an existing GitHub user. */
  String email = null;
  /* **Required unless you provide `email`**. GitHub user ID for the person you are inviting. */
  int inviteeId = null;
  /* Specify role for new member. Can be one of:   \\* `admin` - Organization owners with full administrative rights to the organization and complete access to all repositories and teams.   \\* `direct_member` - Non-owner organization members with ability to see other members and join teams by invitation.   \\* `billing_manager` - Non-owner organization members with ability to manage the billing settings of your organization. */
  String role = "direct_member";
  //enum roleEnum {  admin,  direct_member,  billing_manager,  };{
  /* Specify IDs for the teams you want to invite new members to. */
  List<int> teamIds = [];

  InlineObject22({
    this.email,
    this.inviteeId,
    this.role,
    this.teamIds,
  });

  @override
  String toString() {
    return 'InlineObject22[email=$email, inviteeId=$inviteeId, role=$role, teamIds=$teamIds, ]';
  }

  InlineObject22.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    email = json['email'];
    inviteeId = json['invitee_id'];
    role = json['role'];
    teamIds = (json['team_ids'] == null) ?
      null :
      (json['team_ids'] as List).cast<int>();
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (email != null)
      json['email'] = email;
    if (inviteeId != null)
      json['invitee_id'] = inviteeId;
    if (role != null)
      json['role'] = role;
    if (teamIds != null)
      json['team_ids'] = teamIds;
    return json;
  }

  static List<InlineObject22> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineObject22>() : json.map((value) => InlineObject22.fromJson(value)).toList();
  }

  static Map<String, InlineObject22> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineObject22>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineObject22.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject22-objects as value to a dart map
  static Map<String, List<InlineObject22>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineObject22>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineObject22.listFromJson(value);
       });
     }
     return map;
  }
}

