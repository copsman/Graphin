import Graphin from '@antv/graphin';
import { GI_LOCAL_DATA } from "../data/GI_DATA"
import { ES_DATA } from '../data/ELASTIC_DATA';

import iconLoader from '@antv/graphin-icons';
import '@antv/graphin-icons/dist/index.css';

// Register in Graphin
const { fontFamily, glyphs } = iconLoader();
const icons = Graphin.registerFontFamily(iconLoader);
var elasticData:any = {
    nodes:[],
    edges:[]
}
const setESIcons: any = () => {
    //console.log(ES_DATA.term)
    ES_DATA.vertices.forEach((vertice: any) => {
        elasticData.nodes.push({
            id: vertice["term"],
            label: vertice["field"]
        })
    });

    ES_DATA.connections.forEach((connection: any) => {
        elasticData.edges.push({
            source: ES_DATA.vertices[connection["source"]].term,
            target: ES_DATA.vertices[connection["target"]].term
    })
    });
    console.log(elasticData)
    return elasticData
    //console.log("hello")
}

export default setESIcons