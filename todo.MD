Handle single boolean values: "TRUE" -> true, "FALSE" -> false
Handle NOT operator: "NOT TRUE" -> false
Handle AND operator: "TRUE AND FALSE" -> false, "TRUE AND TRUE" -> true
Handle OR operator: "TRUE OR FALSE" -> true, "FALSE OR FALSE" -> false
Handle combinations with precedence: NOT > AND > OR
Handle parentheses for grouping expressions

"TRUE" -> true
"FALSE" -> false
"NOT TRUE" -> false
"TRUE AND FALSE" -> false
"TRUE OR FALSE" -> true
"TRUE OR TRUE OR TRUE AND FALSE" -> true
"(TRUE OR TRUE OR TRUE) AND FALSE" -> false
"NOT (TRUE AND TRUE)" -> false
