/**
 * @import { getPlayers }
 * @param id - o id do jogador
 *  - Obter uma referência ao vetor de jogadores
 *  - Verificar se o id recebido corresponde a um dos
 *    jogadores do vetor de jogadores
 *  - retornar true se sim, false se não.
 * @export isPresent
 */

 import {getPlayers} from './index.js'



 function isPresent (id){

    let vetorPlayers = getPlayers()

    for(let i= 0 ; i < vetorPlayers.length ; i++){
        if(vetorPlayers[i].id == id){
            return true
        }
        
    }
    return false

 }

 export default isPresent