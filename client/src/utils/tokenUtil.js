/**
 * Contem metodos gerar tokens
 */

const hash = require('object-hash');

export const gerateToken = async () => {
    let timestmap = ( new Date() ).getTime();
    return await hash.sha1( timestmap )
}

export const gerateRoomToken = async () => {
    let timestmap = ( new Date() ).getTime();
    return await hash.sha1( timestmap )
}