console.log("Lancement de l'application");

//var socket=io();

// DEMARRAGE DES AGENTS


//test agents EVEJS
// create two agents
var agent1 = new HelloAgent('agent1');
var agent2 = new HelloAgent('agent2');
var agent3 = new SourceAgent('agent3');
// send a message to agent1
agent2.send('agent3', 'Hello agent3!');
agent3.send('agent2', 'Hello agent2!');
agent3.send('agent1', 'Hello agent1!');

for (i=5;i<7;i++){
    var agenti = new SourceAgent('agent'+i);
    agenti.send('agent1', 'Hello agent1!');
}


// AGENTS UTILES
var agentGui = new GuiAgent('guiAgent');
//var agentSocket = new SocketAgent('socketAgent'); pas en autonome



var agentExport = new ExportAgent('exportAgent');
agentExport.send('guiAgent','Salut guiAgent');


    
    
  
	

