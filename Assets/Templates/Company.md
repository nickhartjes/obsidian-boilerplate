<%* 
let companyName = await tp.system.prompt("Company Name")
-%>

---
<% tp.file.include("[[Frontmatter (Section template)]]") %>
tags:
  - type/company
---

## [[<%companyName%>]]
ℹ️ About:
🌐 website: https://<% tp.file.cursor() %>

 👥 Teams:
```dataview
LIST
WHERE company = "<% companyName.toLowerCase() %>"
```
<% await tp.file.move("/Assets/Companies/" + companyName)  %>