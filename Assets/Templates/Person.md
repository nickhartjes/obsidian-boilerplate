<%* 
let firstName = await tp.system.prompt("First Name")
let lastName = await tp.system.prompt("Last Name")

const dv = this.app.plugins.plugins["dataview"].api; 
let teams = dv.pages('"Assets/Teams"').file.sort(n => n.name); 
let teamName = await tp.system.suggester(teams.name,teams.name);
-%>

---
<% tp.file.include("[[Frontmatter (Section template)]]") %>
type: person
teams: 
  - <% teamName.toLowerCase() %>
alias:
- "<% firstName %>"
- "<% lastName %>"
tags:
  - type/person
---


## Name: [[<%firstName%> <%lastName%>]]
🏛️ Teams:
	- [[<%teamName%>]]
ℹ️ <% tp.file.cursor() %>
📞

<% await tp.file.move("/Assets/People/" + firstName + " " + lastName)  %>