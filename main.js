//===============================================================================================
//         DOM-Aware functions / Event handlers 
//===============================================================================================
var d = document;



function formatSQL() {

	//Creating Textarea that will hold CodeMirror's editor.
	d.getElementById("text-box-container").innerHTML= '<textarea class="text-box" id="output"></textarea>'


	//Formatting SQL code given in the input.
	d.getElementById('output').value = getFormattedSQL(d.getElementById('input').value);


	//Declaring the Textarea as CodeMirror's editor.
	const codeArea = CodeMirror.fromTextArea(d.getElementById('output'), {
		lineNumbers: true
	})	
}
	

document.getElementById("Beautify-btn").addEventListener("click", formatSQL); 

//===============================================================================================
//           Helper functions 
//===============================================================================================

const SQL_FORMAT_CONFIG = {
	language: "tsql",
	tabWidth: 2,
	useTabs: true,
	keywordCase: "upper",
	indentStyle: "tabularRight",
	logicalOperatorNewline: "before",
	tabulateAlias: true,
	commaPosition: "after", 
	expressionWidth: 100,
	lineBetweenQueries: "2",// Doesn't seem to work 
	denseOperators: false,
	newlineBeforeSemicolon: false,
};

function getFormattedSQL(sql_input) {
  return  sqlFormatter.format(sql_input, SQL_FORMAT_CONFIG);
};

//=============================================================================
