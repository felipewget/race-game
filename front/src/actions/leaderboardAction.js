import  axios            from 'axios';
import  { URL_REST }     from './../constants';

/**
 * Actions referente ao rest com GraphQL, no leaderboard
 * 
 */

/**
 * Lista os top 10 melhores tempos
 */
export const listTop10 = async () => {

    let response = await axios.post( URL_REST, {
                            query: `{
                                listRank {
                                  seconds
                                  name
                                }
                              }`});
  
    return response.data;
  
}

/**
 * Salva um registro
 * 
 * @param {String} name 
 * @param {Int} seconds 
 */
export const saveRecord = async ( name, seconds ) => {

    let response = await axios.post( URL_REST, {
                            query: `mutation {
                                addLeaderBoard(name: "${name}", seconds: ${seconds}) {
                                  name
                                  seconds
                                }
                              }`});
  
    return response.data;
  
}