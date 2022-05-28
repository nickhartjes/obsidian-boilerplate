
---
uuid: 20220528143300
created: 2022-05-28 
date: 2022-05-28 
updated: 2022-05-27
published: false
tags:
  - type/note
---

# [[  Remember groceries ]]



<%* 
let teamName = await tp.system.prompt("Team Name")

const dv = this.app.plugins.plugins["dataview"].api; 
let companies = dv.pages('"Assets/Companies"').file.sort(n => n.name); 
let company = await tp.system.suggester(companies.name,companies.name);
-%>

---
<% tp.file.include("[[Frontmatter (Section template)]]") %>
tags:
  - type/team
company: <% company.toLowerCase() %>
---

## Name: [[<%teamName%>]]
🏛️ [[<% company %>]]
ℹ️ <% tp.file.cursor() %>
📞

👥 Teammembers:
```dataview
LIST
WHERE contains(teams, "<%teamName.toLowerCase()%>")
```
<% await tp.file.move("/Assets/Teams/" + teamName)  %>