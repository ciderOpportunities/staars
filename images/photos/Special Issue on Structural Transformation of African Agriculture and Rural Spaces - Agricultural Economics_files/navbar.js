

function writenav(){
    document.write('<div class="navbar navbar-fixed-top navbar-default" role="navigation" style="background-color: rgb(229, 214, 179);">');
    document.write('<div class="container"><div class="navbar-header"><button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse"><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button><a class="navbar-brand" href="http://dyson.cornell.edu/"><img src="../../images/dyson_logo.gif"></a></div><div class="collapse navbar-collapse"><ul class="nav navbar-nav navbar-right"><li><a href="/">Home</a></li><li><a href="/about/">About</a></li><li class="dropdown" style="background-color: rgb(229, 214, 179);"><a href="#" class="dropdown-toggle" data-toggle="dropdown" style="background-color: rgb(229, 214, 179);">Research<b class="caret"></b></a><ul class="dropdown-menu" style="background-color: rgb(229, 214, 179);"><li><a href="/research/">Overview</a></li><li><a href="/research/group/">Research Group</a></li><li><a href="/research/publishedpapers.html">Published Papers</a></li><li><a href="/research/books.html">Books</a></li><li><a href="/research/workingpapers.html">Working Papers</a></li><li><a href="/research/presentations.html">Presentations</a></li><li><a href="/research/datasets.html">Data Sets</a></li></ul></li><li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown" style="background-color: rgb(229, 214, 179);">Outreach<b class="caret"></b></a><ul class="dropdown-menu" style="background-color: rgb(229, 214, 179);"><li><a href="/outreach/">Overview</a></li><li><a href="/outreach/media.html">Media</a></li><li><a href="/outreach/presentations.html">Presentations</a></li><li><a href="/outreach/policy/index.html">Policy Briefs</a></li></ul></li><li><a href="/teach/">Teaching</a></li><li><a href="http://dyson.cornell.edu/search/">Search</a></li></ul></div></div></div>');
    document.write('<h1></h1>' +
            '<ul class="nav nav-pills nav-stacked dropdown" style="background-color:rgba(255, 255, 255, 0.5); border-radius: 5px; color: black; margin-left: -50px; margin-right: 20px; font-size: 15px; position:fixed;">' +
                '<li role="presentation"><a href="index.html">Home</a></li>' +
                '<li role="presentation"><a href="research-output.html">Research Output</a></li>' +
                '<li role="presentation"><a href="fellows/index.html">STAARS Fellows</a></li>' +
                '<li role="presentation"><a href="staars-fellowships.html">STAARS Fellowship</a></li>' +
                '<li role="presentation"><a href="conference2015.html">STAARS Conference 2015</a>' +
                '<ul style="background-color:rgba(255, 255, 255, 0); border-radius: 15px;">'+
                '<li role="presentation"><a href="SpecialIssueAgriEcon.html">Special Issue of <br>Agricultural Economics</a></li>' +
                '<li role="presentation"><a href="SpecialIssueWorldDevel.html">Special Issue of <br>World Development </a></li>' +
                '</ul>'+
                '</li>' +
            '</ul>');
}

function writelogos(){
    document.write('<br><div class="panel panel-default" style="position: fixed; width:180px;"> <div class="panel-heading">Project Partners</div> <ul class="list-group"> <li class="list-group-item"><a href="http://www.afdb.org/en/"><img src="images/logos/afdb.png" class="img-responsive"></a></li> <li class="list-group-item"><a href="http://aercafrica.org/"><img src="images/logos/aerc.png" class="img-responsive"></a></li> <li class="list-group-item"><a href="http://www.pep-net.org/"><img src="images/logos/pep.png" class="img-responsive"></a></li> <li class="list-group-item"><a href="http://www.worldbank.org/"><img src="images/logos/wb.png" class="img-responsive"></a></li> <li class="list-group-item"><a href="http://www.cornell.edu/"><img src="images/logos/cu.png" class="img-responsive"></a></li> <li class="list-group-item"><a href="http://pim.cgiar.org/"><img src="images/logos/PIM_Logo_Orange_WhiteText.png" class="img-responsive"></a></li> </ul> </div>');
}

function writefooter(){
	var date = new Date().getFullYear();
	var footer = '<footer><p>&copy; Copyright by Chris Barrett ' + date + '. All rights reserved.</p></footer>'; 
    document.write(footer);
}
