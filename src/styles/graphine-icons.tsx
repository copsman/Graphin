import Graphin from '@antv/graphin';
import { GI_LOCAL_DATA } from "../data/GI_DATA"
import { ES_DATA } from '../data/ELASTIC_DATA';

import iconLoader from '@antv/graphin-icons';
import '@antv/graphin-icons/dist/index.css';

// Register in Graphin
const { fontFamily, glyphs } = iconLoader();
const icons = Graphin.registerFontFamily(iconLoader);

const setIcons: any = () => {
    console.log(GI_LOCAL_DATA.nodes)
    GI_LOCAL_DATA.nodes.forEach((node: any) => {
        if( node.id.includes("customer") ){
            node.style = {
                label: {
                    value: node.id,
                    //position: 'right',
                    //offset: [20, 5],
                    fill: 'black',
                  },

                keyshape: {
                    size: 30,
                    stroke: '#28a52d',
                    fill: '#28a52d',
                    fillOpacity: 0.2,
                  },
                  
                icon: {
                    type: 'font', // Assign the icon as a 'font' type
                    fontFamily: fontFamily, // Assign 'fontFamily' value
                    value: icons.user, // Assign the value of the icon
                    fill: 'black'
                },
            };
        }

        else if( node.id.includes("account") ){
            node.style = {
                label: {
                    value: node.id,
                    //position: 'right',
                    //offset: [20, 5],
                    fill: 'black',
                  },

                keyshape: {
                    size: 30,
                    stroke: '#ffc107',
                    fill: '#ffc107',
                    fillOpacity: 0.2,
                  },
                icon: {
                    type: 'font', // Assign the icon as a 'font' type
                    fontFamily: fontFamily, // Assign 'fontFamily' value
                    value: icons.bank, // Assign the value of the icon
                    fill: 'black',
                },
            };
        }
        else{
            node.style = {
                label: {
                    value: node.id,
                    //position: 'right',
                    //offset: [20, 5],
                    fill: 'black',
                  },

                keyshape: {
                    size: 30,
                    //stroke: '#ffc107',
                    //fill: '#ffc107',
                    fillOpacity: 0.2,
                  },
                icon: {
                    type: 'font', // Assign the icon as a 'font' type
                    fontFamily: fontFamily, // Assign 'fontFamily' value
                    value: icons.question, // Assign the value of the icon
                    fill: 'black',
                },
            };
        }
        
    });
    return GI_LOCAL_DATA
    console.log("hello")
}

export default setIcons