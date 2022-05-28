<%* 
let reason = await tp.system.prompt("Subject meeting");
let timestamp = tp.file.creation_date("YYYY-MM-DD HH:mm");
let date = tp.file.creation_date("YYYY-MM-DD");
const dv = this.app.plugins.plugins["dataview"].api; 
let teams = dv.pages('"Assets/Teams"').file.sort(n => n.name); 
let teamName = await tp.system.suggester(teams.name,teams.name);
-%>

---
<% tp.file.include("[[Frontmatter (Section template)]]") %>
tags:
  - type/meeting
---

# [[  <% reason %> ]]

Date: [[<% timestamp %>]]
Team: [[<% teamName %>]]
Attendees:

---

# Goals / agenda
1. 

# Discussion notes
- 

# Action items
- [ ] Meeting Notes Distributed to the Team
- [ ] Tasks & Projects Completed, Processed or Delegated
- [ ] Key Dates Completed or Scheduled

<% await tp.file.move("/Meetings/" + teamName + "/" + date  + " " + reason)  %>