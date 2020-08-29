part of openapi.api;

class IssueEvent {
  
  SimpleUser actor = null;
  
  SimpleUser assignee = null;
  
  SimpleUser assigner = null;
  
  String authorAssociation = null;
  
  String commitId = null;
  
  String commitUrl = null;
  
  DateTime createdAt = null;
  
  IssueEventDismissedReview dismissedReview = null;
  
  String event = null;
  
  int id = null;
  
  IssueSimple issue = null;
  
  IssueEventLabel label = null;
  
  String lockReason = null;
  
  IssueEventMilestone milestone = null;
  
  String nodeId = null;
  
  IssueEventProjectCard projectCard = null;
  
  IssueEventRename rename = null;
  
  SimpleUser requestedReviewer = null;
  
  Team requestedTeam = null;
  
  SimpleUser reviewRequester = null;
  
  String url = null;

  IssueEvent({
    this.actor,
    this.assignee,
    this.assigner,
    this.authorAssociation,
    this.commitId,
    this.commitUrl,
    this.createdAt,
    this.dismissedReview,
    this.event,
    this.id,
    this.issue,
    this.label,
    this.lockReason,
    this.milestone,
    this.nodeId,
    this.projectCard,
    this.rename,
    this.requestedReviewer,
    this.requestedTeam,
    this.reviewRequester,
    this.url,
  });

  @override
  String toString() {
    return 'IssueEvent[actor=$actor, assignee=$assignee, assigner=$assigner, authorAssociation=$authorAssociation, commitId=$commitId, commitUrl=$commitUrl, createdAt=$createdAt, dismissedReview=$dismissedReview, event=$event, id=$id, issue=$issue, label=$label, lockReason=$lockReason, milestone=$milestone, nodeId=$nodeId, projectCard=$projectCard, rename=$rename, requestedReviewer=$requestedReviewer, requestedTeam=$requestedTeam, reviewRequester=$reviewRequester, url=$url, ]';
  }

  IssueEvent.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    actor = (json['actor'] == null) ?
      null :
      SimpleUser.fromJson(json['actor']);
    assignee = (json['assignee'] == null) ?
      null :
      SimpleUser.fromJson(json['assignee']);
    assigner = (json['assigner'] == null) ?
      null :
      SimpleUser.fromJson(json['assigner']);
    authorAssociation = json['author_association'];
    commitId = json['commit_id'];
    commitUrl = json['commit_url'];
    createdAt = (json['created_at'] == null) ?
      null :
      DateTime.parse(json['created_at']);
    dismissedReview = (json['dismissed_review'] == null) ?
      null :
      IssueEventDismissedReview.fromJson(json['dismissed_review']);
    event = json['event'];
    id = json['id'];
    issue = (json['issue'] == null) ?
      null :
      IssueSimple.fromJson(json['issue']);
    label = (json['label'] == null) ?
      null :
      IssueEventLabel.fromJson(json['label']);
    lockReason = json['lock_reason'];
    milestone = (json['milestone'] == null) ?
      null :
      IssueEventMilestone.fromJson(json['milestone']);
    nodeId = json['node_id'];
    projectCard = (json['project_card'] == null) ?
      null :
      IssueEventProjectCard.fromJson(json['project_card']);
    rename = (json['rename'] == null) ?
      null :
      IssueEventRename.fromJson(json['rename']);
    requestedReviewer = (json['requested_reviewer'] == null) ?
      null :
      SimpleUser.fromJson(json['requested_reviewer']);
    requestedTeam = (json['requested_team'] == null) ?
      null :
      Team.fromJson(json['requested_team']);
    reviewRequester = (json['review_requester'] == null) ?
      null :
      SimpleUser.fromJson(json['review_requester']);
    url = json['url'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
      json['actor'] = actor;
      json['assignee'] = assignee;
      json['assigner'] = assigner;
    if (authorAssociation != null)
      json['author_association'] = authorAssociation;
      json['commit_id'] = commitId;
      json['commit_url'] = commitUrl;
    if (createdAt != null)
      json['created_at'] = createdAt == null ? null : createdAt.toUtc().toIso8601String();
    if (dismissedReview != null)
      json['dismissed_review'] = dismissedReview;
    if (event != null)
      json['event'] = event;
    if (id != null)
      json['id'] = id;
    if (issue != null)
      json['issue'] = issue;
    if (label != null)
      json['label'] = label;
      json['lock_reason'] = lockReason;
    if (milestone != null)
      json['milestone'] = milestone;
    if (nodeId != null)
      json['node_id'] = nodeId;
    if (projectCard != null)
      json['project_card'] = projectCard;
    if (rename != null)
      json['rename'] = rename;
      json['requested_reviewer'] = requestedReviewer;
    if (requestedTeam != null)
      json['requested_team'] = requestedTeam;
      json['review_requester'] = reviewRequester;
    if (url != null)
      json['url'] = url;
    return json;
  }

  static List<IssueEvent> listFromJson(List<dynamic> json) {
    return json == null ? List<IssueEvent>() : json.map((value) => IssueEvent.fromJson(value)).toList();
  }

  static Map<String, IssueEvent> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, IssueEvent>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = IssueEvent.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of IssueEvent-objects as value to a dart map
  static Map<String, List<IssueEvent>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<IssueEvent>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = IssueEvent.listFromJson(value);
       });
     }
     return map;
  }
}

