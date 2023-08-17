function sortAndHighlightData() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getActiveSheet();

  // Define the data range to sort and highlight (adjust as needed)
  var range = sheet.getRange("A2:C");

  // Sort the data based on the first column (Name in this case)
  range.sort(1);

  // Apply conditional formatting to highlight cells based on a condition (Age > 30 in this case)
  var rule = SpreadsheetApp.newConditionalFormatRule()
      .whenNumberGreaterThanOrEqualTo(30)
      .setBackground("#FFFF00")
      .setRanges([range])
      .build();

  var rules = sheet.getConditionalFormatRules();
  rules.push(rule);
  sheet.setConditionalFormatRules(rules);
}
