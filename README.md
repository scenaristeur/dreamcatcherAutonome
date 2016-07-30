# eveMultiDreamCatcher
Dreamcatcher est un outil permettant de structurer vos idees sous forme de graphe et de les partager.

1. Install NodeJS and npm
2. Execute 'npm install -d' to create the node_modules folder from package.json
3. Run program 'node index.js'

Feel free to ask any questions.

from 

# collaborativeRDFWithP5JSGraph

* Mode autonome de dreamcatcher --> pas besoin de serveur node JS , mais pas de collaboration possible --> lancer dans Chrome version 51 ou plus le fichier /chat/public/index.html .
* Mode collaboratif : lancement de "node index.js" dans /chat

ajout de la visualisation des données (Data Visualization) au [collaborativeRDFChat](https://github.com/scenaristeur/collaborativeRdf)



![apercu rdf socket chat](https://raw.githubusercontent.com/scenaristeur/collaborativeRDFWithP5JSGraph/master/images/rdf_graph_made_with_socket_chat_server_P5JS_javascript_DataVisualization_ontology_sparql.png)


Installer un simple serveur prêt pour la collaboration lors de l'elaboration de graphes RDF : 
=====================================================
```
git clone https://github.com/scenaristeur/collaborativeRDFWithP5JSGraph.git collabRDF
cd collabRDF
cd chat
npm install
node .

```
+ rendez-vous ensuite à l'adresse [http://127.0.0.1:3000](http://127.0.0.1:3000)
+ vous pouvez aussi vous connecter depuis un ordinateur présent sur votre réseau via http://adresse-ip:3000